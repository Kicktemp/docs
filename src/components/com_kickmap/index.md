# KickMap

KickMap ist eine Standortkarte für **Joomla 5.4+ und Joomla 6** (PHP 8.1+). Du pflegst Standorte mit Adresse, Kontaktdaten und Öffnungszeiten und zeigst sie im Frontend auf einer Karte mit Liste, Filtern und Umkreissuche an.

## Funktionen

- **Zwei Kartenanbieter:** Leaflet mit OpenStreetMap (ohne API-Key, Kachel-Server frei wählbar) oder Google Maps (mit Advanced Markers, wenn eine Map-ID gesetzt ist). Der Anbieter lässt sich pro Menüpunkt, Modul und YOOtheme-Element überschreiben.
- **Öffnungszeiten:** Wochenzeiten mit mehreren Zeitfenstern pro Tag, wiederverwendbare Vorlagen, Sonderöffnungszeiten (z. B. Feiertage, jährlich wiederkehrend) und ein Status „Geöffnet bis 18:00 Uhr“ / „Öffnet morgen um 08:00 Uhr“, der sich im Browser selbst aktualisiert.
- **Umkreissuche:** Adresse oder PLZ eingeben oder „Mein Standort“ nutzen. Suchpunkt und Umkreis werden auf der Karte gezeichnet (beides abschaltbar).
- **Filter mit Trefferzahlen:** Suche, Kategorie, Tag, „Jetzt geöffnet“, hervorgehoben und Custom Fields – wahlweise als Live-Filter ohne Neuladen.
- **Joomla-Standard:** Kategorien (verschachtelt), Tags, Custom Fields, Mehrsprachigkeit mit Assoziationen, Workflows, Versionen, Smart Search, Schema.org (`LocalBusiness`), Web Services API, Berechtigungen.
- **Geocoding:** Koordinaten per Klick aus der Adresse – über Nominatim (OpenStreetMap) oder Google, mit Cache.
- **Modul und YOOtheme Pro:** Kartenmodul für beliebige Positionen, Builder-Elemente „KickMap Map“ und „KickMap Filter“ sowie dynamische Inhalte für YOOtheme-Templates.
- **Datenschutz:** Leaflet und Marker-Clustering sind lokal eingebunden, Karten können erst nach Zustimmung geladen werden.

## Bestandteile des Pakets

| Erweiterung | Aufgabe |
|---|---|
| `com_kickmap` | Komponente: Standorte, Öffnungszeit-Vorlagen, Sonderöffnungszeiten, Frontend-Ansichten |
| `mod_kickmap` | Modul „KickMap – Karte“ |
| `plg_system_kickmap` | Integration in YOOtheme Pro (Elemente, Quellen, Templates) |
| `plg_finder_kickmap` | Smart Search (Indexierung der Standorte) |
| `plg_webservices_kickmap` | API-Routen `v1/kickmap/*` |

## Systemvoraussetzungen

- Joomla 5.4 oder neuer, Joomla 6.x
- PHP 8.1 oder neuer
- MySQL 8 / MariaDB 10.4 oder neuer
- Für Google Maps: ein API-Key mit aktivierter „Maps JavaScript API“ (für Geocoding zusätzlich „Geocoding API“)
- YOOtheme Pro ist optional
