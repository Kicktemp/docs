---
title: Import & Export (CSV)
description: Standorte per CSV aus Excel oder anderen Systemen importieren und exportieren
---

# Import & Export (CSV)

Standorte lassen sich als CSV-Datei exportieren und importieren, z. B. für eine Filialliste aus Excel, den Umzug von
einem anderen System oder Massenänderungen. Beide Funktionen findest du in **Komponenten → KickMap → Standorte** unter
dem Button **CSV**.

## Export

**CSV → Exportieren (CSV)** lädt alle Standorte der Liste mit den aktuell gesetzten Filtern herunter (Suche, Status,
Kategorie, Sprache …), unabhängig von der Seitenzahl.

- Format: UTF-8 mit BOM, Trennzeichen Semikolon. Excel öffnet die Datei direkt mit Umlauten.
- Enthalten sind alle Felder, die Kategorie als Pfad (`norddeutschland/hamburg`), Tags (mit `|` getrennt), alle Custom
  Fields als Spalten `field:feldname` und Öffnungszeiten, Bilder, Galerie, Social Links, Ansprechpartner und Nummern als JSON.
- Zellen, die mit `=`, `+`, `-` oder `@` beginnen (und keine Zahl sind), erhalten ein `'` vorangestellt. So kann Excel sie
  nicht als Formel ausführen. Der Import entfernt das Zeichen wieder.

Ein Export lässt sich unverändert wieder importieren, ohne dass sich etwas ändert.

## Import

**CSV → Importieren (CSV)** öffnet die Importseite. Dort lädst du über **Vorlage herunterladen** eine Datei mit allen
Spalten und einer Beispielzeile herunter. Eine einfache Datei sieht so aus:

```csv
title;street;zipcode;city;country;phone;category;tags;lat;lng
Filiale Hamburg;Mönckebergstraße 1;20095;Hamburg;Deutschland;040 123456;Norddeutschland/Hamburg;Elektroauto Laden|Neu;53,5511;9,9937
```

[Beispieldatei herunterladen](./assets/kickmap-import-example.csv)

### Optionen

| Option | Beschreibung |
|---|---|
| Modus | Neue anlegen und vorhandene aktualisieren, nur neue anlegen oder nur vorhandene aktualisieren |
| Vorhandene erkennen über | **ID** (Spalte `id`, für einen Export derselben Seite), **Alias** (Spalte `alias` + Sprache, z. B. von einer anderen Seite) oder gar nicht |
| Standardkategorie | Für neue Standorte ohne Spalte `category` |
| Fehlende Kategorien anlegen | Kategorien aus der Spalte `category` anlegen, auch verschachtelt (`Norddeutschland/Hamburg`) |
| Trennzeichen | Automatisch, Semikolon, Komma oder Tabulator |
| Testlauf | Prüft die Datei und zeigt pro Zeile, was passieren würde, ohne zu speichern (Standard) |

Nach dem Import zeigt die Seite das Ergebnis: neu, aktualisiert, übersprungen und Fehler, jeweils mit Zeilennummer und Grund.

### Spalten

- **Pflicht** ist `title`. Für reine Aktualisierungen reicht `id` (bzw. `alias`), z. B. eine Datei nur mit `id;phone`.
- Spaltennamen aus anderen Systemen werden erkannt, z. B. `Name`, `Straße`/`address`, `PLZ`/`zip`, `Ort`, `Land`,
  `Telefon`, `E-Mail`, `URL`, `Latitude`/`Longitude`, `Kategorie`, `Sprache`. Unbekannte Spalten werden ignoriert.
- `category`: ID, Titel (wird im ganzen Kategoriebaum gesucht) oder Pfad ab der obersten Ebene (`Norddeutschland/Hamburg`).
- `tags`: Titel mit `|` getrennt. Unbekannte Tags werden angelegt.
- `field:feldname`: Wert eines Custom Fields, bei Mehrfachauswahl mit `|` getrennt.
- `lat`, `lng`: Punkt oder Komma als Dezimaltrennzeichen.
- `language`: z. B. `de-DE` oder `*` (Standard).
- `publish_up`, `publish_down`: `JJJJ-MM-TT` oder `JJJJ-MM-TT HH:MM:SS` in UTC.
- JSON-Spalten (`openinghours`, `images` …): Eine leere Zelle ändert nichts, `[]` leert den Wert.
- Tags und Custom Fields bleiben bei einer Aktualisierung erhalten, wenn die Datei keine Spalte dafür hat.

### Was beim Import passiert

Jede Zeile wird wie beim Speichern im Backend geprüft und gespeichert:

- Berechtigungen: Anlegen braucht „Erstellen“ in der Kategorie, Aktualisieren „Bearbeiten“ (bzw. „Eigene bearbeiten“).
  Standorte, die gerade jemand anderes bearbeitet, werden nicht verändert.
- Mit aktivem **Workflow** setzt der Import Status und „Hervorgehoben“ nicht direkt; neue Standorte starten in der
  Anfangsphase des Workflows.
- Versionen, Tags, Custom Fields und Smart Search werden wie gewohnt aktualisiert.
- Grenzen: 10 MB und 5000 Zeilen pro Datei. Excel-CSV in Windows-1252 wird automatisch nach UTF-8 umgewandelt.

### Koordinaten

Zeilen ohne `lat`/`lng` werden ohne Koordinaten gespeichert und erscheinen noch nicht auf der Karte. Ermittle sie danach
in der Standortliste mit **Fehlende Koordinaten ermitteln** (bis zu 25 Standorte bzw. 20 Sekunden pro Klick, die Meldung zeigt, wie viele noch fehlen; siehe [Standorte](./locations)).
