# Modul „KickMap – Karte“

Das Modul zeigt eine Karte mit Standorten an einer beliebigen Modulposition, unabhängig von der Komponente – z. B. auf der Startseite oder in der Seitenleiste.

## Einstellungen

| Option | Beschreibung |
|---|---|
| Kategorie | Nur Standorte dieser Kategorien (inkl. Unterkategorien); leer = alle |
| Tags | Nur Standorte mit diesen Tags |
| Nur hervorgehobene Standorte | |
| Link zur Standortliste | Menüpunkt für den Button „Alle Standorte“ unter der Karte |
| Kartenanbieter | Global, Leaflet oder Google Maps |
| Höhe | z. B. `300px` |
| Zoom | Startzoom, wenn nicht auf die Standorte gezoomt wird; „Globale Einstellung“ = Optionen der Komponente |
| Marker gruppieren | Global, Ja, Nein |

Die übrigen Karteneinstellungen (API-Key, Marker, Kachel-Server, Zustimmung) kommen aus den Optionen der Komponente.

## Mehrere Karten auf einer Seite

Komponente, mehrere Module und YOOtheme-Elemente können gleichzeitig auf einer Seite stehen – auch **mit unterschiedlichen Anbietern** (z. B. Google in der Komponente, Leaflet im Modul). Jede Karte lädt erst, wenn sie in den sichtbaren Bereich scrollt.

::: info Zustimmung pro Anbieter
Ist „Karte erst nach Zustimmung laden“ aktiv, gilt die Zustimmung pro Anbieter: Wer Google zugestimmt hat, sieht eine Leaflet-Karte trotzdem erst nach einem Klick auf „Karte laden“.
:::
