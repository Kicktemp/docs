
# Einführung

**KickBannerStats** ist eine spezialisierte Joomla-Komponente, die entwickelt wurde, um die Performance von Banner-Auswertungen zu optimieren und eine nahtlose Integration mit Business-Intelligence-Tools wie **Google Looker Studio** zu ermöglichen.

## Das Problem
Die native Joomla-Tabelle `#__banner_tracks` speichert jeden einzelnen View und Klick als separate Zeile. Bei stark frequentierten Seiten wächst diese Tabelle schnell auf Millionen von Einträgen an.

* **Performance:** Direkte Abfragen für Zeiträume (z.B. "Letzter Monat") werden extrem langsam und belasten die Datenbank.
* **Externe Tools:** APIs laufen in Timeouts, wenn sie versuchen, Millionen von Rohdaten-Zeilen live zu aggregieren.
* **Storage:** Die Datenbankgröße explodiert unnötig.

## Die Lösung
KickBannerStats entkoppelt die Datenerfassung von der Auswertung:

1.  **Aggregation:** Ein Task-Plugin verdichtet die Rohdaten täglich in eine optimierte Tabelle (`#__kickbannerstats_daily`).
2.  **Performance:** Statt Millionen Zeilen zu scannen, greift die API auf wenige tausend vorbrechnete Datensätze zu.
3.  **Konnektivität:** Eine spezialisierte API liefert JSON-Daten, die perfekt für Looker Studio formatiert sind.

## Hauptfunktionen

### 🚀 High-Performance Dashboard
Das integrierte Dashboard zeigt Ihnen sofort die wichtigsten KPIs (Impressionen, Klicks, CTR) ohne lange Ladezeiten.

### 🤖 Automatisierung
Ein **Scheduled Task** kümmert sich im Hintergrund um alles. Sie müssen keine manuellen Reports erstellen. Das System aktualisiert sich jede Nacht selbstständig.

### 📊 Looker Studio Ready
Nutzen Sie die Power von Google Looker Studio, um interaktive Reports für Ihre Werbekunden zu erstellen – gehostet auf Ihren Daten, aber ohne direkten Zugriff auf Ihr Backend.

### 🔙 Historischer Import (Backfill)
Sie haben bereits Jahre an Daten? Kein Problem. Der integrierte **Backfill-Mechanismus** importiert Ihre bestehende Historie sicher und speicherschonend in das neue Format.

---

## Nächste Schritte

* **[Einrichtung & Nutzung](./backend.md):** Wie Sie die Komponente konfigurieren und nutzen.
* **[Architektur](./architecture.md):** Verstehen Sie, wie die Daten fließen (für Entwickler).
* **[API Integration](./api-integration.md):** Wie Sie die Daten in Looker Studio anbinden.
