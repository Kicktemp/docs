# Einführung

**KickBannerStats** ist eine spezialisierte Joomla-Komponente, die entwickelt wurde, um die Performance von Banner-Auswertungen zu optimieren und eine nahtlose Integration mit Business-Intelligence-Tools wie **Google Looker Studio** zu ermöglichen. 

## Das Problem
Die native Joomla-Tabelle `#__banner_tracks` speichert jeden einzelnen View und Klick als separate Zeile. Bei stark frequentierten Seiten wächst diese Tabelle schnell auf Millionen von Einträgen an.
* **Performance:** Direkte Abfragen für Zeiträume (z.B. "Letzter Monat") werden extrem langsam.
* **Externe Tools:** APIs laufen in Timeouts, wenn sie versuchen, Rohdaten live zu aggregieren.

## Die Lösung
KickBannerStats entkoppelt die Datenerfassung von der Auswertung:
1.  **Aggregation:** Ein Task-Plugin verdichtet die Rohdaten täglich in eine optimierte Tabelle (`#__kickbannerstats_daily`).
2.  **Performance:** Statt Millionen Zeilen zu scannen, greift die API auf wenige tausend vorbrechnete Datensätze zu.
3.  **Konnektivität:** Eine spezialisierte API liefert JSON-Daten, die perfekt für Looker Studio formatiert sind.

## Features
* 🚀 **High-Performance:** Schnelle Dashboards auch bei großen Datenmengen.
* 🤖 **Automatisierung:** `Scheduler Task` für tägliche Updates.
* back **Backfill:** Nachträglicher Import historischer Daten.
* 📊 **Looker Studio Ready:** Native JSON-Ausgabe für Community Connectors.