# Standorte

Standorte verwaltest du unter **Komponenten → KickMap → Standorte**. Die Liste zeigt oben eine Karte mit allen gefilterten Standorten (abschaltbar über die Option „Karte in der Standortliste (Backend)“).

## Standort bearbeiten

### Tab „Standort“

| Bereich | Felder |
|---|---|
| Adresse | Firmenname, Straße und Hausnummer, PLZ, Ort, Bundesland / Region, Land |
| Karte | Breitengrad, Längengrad und eine Karte zum Setzen der Position |
| Beschreibung | Freier Text mit Editor |
| Rechte Spalte | Kategorie, Status, Hervorgehoben, Zugriff, Sprache, Tags, Notiz, Versionshinweis |

**Koordinaten setzen:**

- **Adresse suchen** ermittelt die Koordinaten aus den Adressfeldern (Geocoding über Nominatim oder Google, siehe [Konfiguration](./configuration#geocoding)).
- Alternativ klickst du in die Karte oder verschiebst den Marker.
- **Adresse übernehmen** schreibt umgekehrt die Adresse des Markers in die Adressfelder (nach Rückfrage).

::: warning Ohne Koordinaten keine Karte
Standorte ohne Koordinaten erscheinen in der Liste, aber nicht auf der Karte und nicht in der Umkreissuche. Das Dashboard zeigt an, wie viele Standorte betroffen sind.
:::

### Weitere Tabs

| Tab | Inhalt |
|---|---|
| Kontakt | Telefon, Fax, E-Mail, Webseite, weitere Telefonnummern (Bezeichnung + Nummer, z. B. „Werkstatt“) |
| Öffnungszeiten | Abschnitte mit Wochenzeiten oder Vorlage, Hinweis zu den Öffnungszeiten – siehe [Öffnungszeiten](./opening-hours) |
| Bilder | Bild (mit Alternativtext), Text auf dem Bild und dessen Position, Galerie (Bild + Bildunterschrift) |
| Links | Social Media und weitere Links (Icon, Text, URL) |
| Ansprechpartner | Bild, Name, Position, Telefon, E-Mail, Link |
| Felder | Custom Fields (nur sichtbar, wenn Felder angelegt sind) |
| Anzeige | Pro Standort: Karte anzeigen, Kontaktbereich anzeigen und eigener Kontaktinhalt, eigenes Marker-Bild, alternatives Layout |
| Veröffentlichung | Erstellt/geändert, Veröffentlichungszeitraum, Zugriffe, Metadaten, Robots |
| Schema | Schema.org-Daten (Joomla-Schemaorg-Plugins) |
| Assoziationen | Übersetzungen des Standorts (bei Mehrsprachigkeit) |
| Berechtigungen | Rechte für diesen Standort |

## Marker

Welcher Marker auf der Karte erscheint, wird in dieser Reihenfolge bestimmt:

1. eigenes **Marker-Bild** am Standort (Tab „Anzeige“),
2. **Marker-Bild oder Markerfarbe der Kategorie** (beim Bearbeiten der Kategorie, Tab „KickMap“),
3. **Standard-Marker** aus den Optionen (Bild oder Farbe).

Mit der Option „Marker-Quelle: Standard“ wird die Kategorie ignoriert.

## Hervorgehobene Standorte

Hervorgehobene Standorte (Stern in der Liste) kannst du über den Menüpunkt **Hervorgehobene Standorte**, im Modul („Nur hervorgehobene Standorte“) oder als Filter anzeigen.

## Batch-Verarbeitung

Über **Aktionen → Stapelverarbeitung** änderst du für mehrere Standorte gleichzeitig Kategorie, Sprache, Zugriffsebene und Tags.
