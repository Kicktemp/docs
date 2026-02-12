# Architektur & Datenfluss

KickBannerStats wurde entwickelt, um ein spezifisches Problem von High-Traffic-Webseiten zu lösen: **Performance bei der Auswertung**.

Anstatt Millionen von Rohdaten-Zeilen bei jedem Seitenaufruf neu zu berechnen, nutzt die Komponente einen **Data-Warehouse-Ansatz** (ETL: Extract, Transform, Load).

## 1. Das Datenbank-Schema

Die Basis der Performance ist die Entkopplung von Schreib- und Lese-Operationen.

* **Schreiben (Joomla Core):** Jeder View/Klick landet in `#__banner_tracks`. Diese Tabelle wächst extrem schnell.
* **Lesen (KickBannerStats):** Wir nutzen eine flache, aggregierte Tabelle namens `#__kickbannerstats_daily`.

### Tabellenstruktur

Die Tabelle `#__kickbannerstats_daily` speichert **eine Zeile pro Banner, Kunde und Tag**.

```sql
CREATE TABLE IF NOT EXISTS `#__kickbannerstats_daily`
(
  `date` DATE NOT NULL,
  `banner_id` INT UNSIGNED NOT NULL,
  `client_id` INT UNSIGNED NOT NULL,
  `impressions` INT UNSIGNED NOT NULL DEFAULT 0,
  `clicks` INT UNSIGNED NOT NULL DEFAULT 0,
  `banner_name` VARCHAR(255) NOT NULL,
  `client_name` VARCHAR(255) NOT NULL,
  `updated_at` DATETIME NOT NULL,
  PRIMARY KEY (`date`, `banner_id`, `client_id`),
  KEY `idx_banner_date` (`banner_id`, `date`),
  KEY `idx_client_date` (`client_id`, `date`)
) ENGINE = InnoDB ...;

```

**Vorteile dieses Schemas:**

* **Komprimierung:** Aus 1.000.000 Tracking-Events an einem Tag werden vielleicht nur 50 Zeilen (je nach Anzahl der aktiven Banner).
* **Indexierung:** Der `PRIMARY KEY` über Datum und IDs ermöglicht extrem schnelle Range-Queries (z.B. "Letzte 30 Tage").

---

## 2. Der ETL-Prozess (Task Plugin)

Die Daten gelangen nicht in Echtzeit in die Statistik-Tabelle, sondern über einen **Scheduled Task** (Geplante Aufgabe). Das Plugin `plg_task_kickbannerstats` übernimmt diese Arbeit.

### Routine A: `create.stats` (Täglich)

Dieser Task ist das Arbeitspferd und sollte **einmal täglich** laufen.

1. **Zeitraum:** Er greift standardmäßig die letzten **3 Tage** ab (`backfillDays` Parameter).
* *Warum 3 Tage?* Um sicherzustellen, dass Klicks kurz vor Mitternacht oder Zeitzonen-Differenzen korrekt erfasst werden, selbst wenn der Task mal einen Tag ausfällt.


2. **Aggregation:** Er gruppiert die Rohdaten aus `#__banner_tracks` nach `DATE(track_date)`, `banner_id` und `cid`.
3. **Upsert:** Die Daten werden mit `INSERT ... ON DUPLICATE KEY UPDATE` in die Zieltabelle geschrieben. Das bedeutet:
* Existiert der Eintrag für diesen Tag/Banner schon? -> **Update** (Zahlen aktualisieren).
* Existiert er noch nicht? -> **Insert** (Neu anlegen).



### Routine B: `backfillStats` (Historisch)

Dieser Task dient der initialen Befüllung oder Reparatur. Er ist für große Datenmengen optimiert.

1. **Chunking:** Er verarbeitet den gewählten Zeitraum nicht am Stück, sondern in Blöcken (z.B. 30 Tage).
2. **Memory Management:** Dies verhindert, dass PHP bei jahrelangen Historien in ein `Memory Limit` läuft.
3. **Idempotenz:** Kann gefahrlos mehrfach ausgeführt werden, da er bestehende Werte einfach überschreibt.

---

## 3. Datenabruf (Read Path)

Sobald die Daten in `#__kickbannerstats_daily` liegen, werden sie von der Komponente konsumiert.

### Im Backend (MVC)

* **DashboardModel:** Summiert die Werte für den Dashboard-Zeitraum (z.B. 30 Tage). Die **CTR** (Click-Through-Rate) wird dabei "on the fly" berechnet (`Klicks / Impressionen * 100`).
* **StatisticsModel:** Listet die Tageswerte auf und ermöglicht Filterung nach Kunde/Banner.

### Über die API (Headless)

Der `StatisticsController` stellt die Daten als JSON bereit.

* Er nutzt `Joomla\CMS\MVC\Controller\ApiController`.
* Er unterstützt Filterung via `filter[begin]`, `filter[end]`, etc.
* Er gibt die Daten direkt aus der aggregierten Tabelle zurück, was Antwortzeiten im Millisekunden-Bereich ermöglicht, selbst bei jahrelanger Historie.

::: tip Zusammenfassung
Die Architektur opfert **Echtzeit-Daten** (Daten sind max. 24h alt) zugunsten von massiver **Performance-Steigerung** und **Skalierbarkeit** für Reporting-Zwecke.
:::