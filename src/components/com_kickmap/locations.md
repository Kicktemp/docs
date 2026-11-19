# Standorte

Standorte verwaltest du unter **Komponenten → KickMap → Standorte**. Die Liste zeigt oben eine Karte mit allen Standorten der aktuellen Seite in ihren Kategorie-Markern – mit OpenStreetMap oder Google Maps, je nach Kartenanbieter in den Optionen (abschaltbar über „Karte in der Standortliste (Backend)“):

- **Maus über einer Zeile:** der Marker wird rot mit einem Kreis darunter angezeigt.
- **Doppelklick auf eine Zeile:** der Marker bleibt rot markiert, die Karte schwenkt zu ihm (ohne zu zoomen).
- **Maus über einem Marker** hebt die Zeile hervor, ein **Klick** öffnet den Standort zum Bearbeiten.

## Standort bearbeiten

### Tab „Details“

| Bereich | Felder |
|---|---|
| Adresse | Firmenname, Straße und Hausnummer, PLZ, Ort, Bundesland / Region, Land |
| Karte | Breitengrad, Längengrad und eine Karte zum Setzen der Position |
| Beschreibung | Freier Text mit Editor |
| Rechte Spalte | Kategorie, Status, Hervorgehoben, Zugriff, Sprache, Tags, Notiz, Versionshinweis |

**Koordinaten setzen:**

- **Adresse suchen** ermittelt die Koordinaten aus den Adressfeldern (Geocoding über Nominatim oder Google, siehe [Konfiguration](./configuration#geocoding)).
- Alternativ klickst du in die Karte oder verschiebst den Marker. Unter der Karte steht dann sofort die Adresse an dieser Stelle; ein Klick auf **Adresse übernehmen** daneben trägt sie in die Adressfelder ein.
- Ist **Adresse beim Setzen des Markers sofort übernehmen** angehakt, werden die Adressfelder ohne Nachfrage gefüllt (die Einstellung merkt sich der Browser).
- **Adresse übernehmen** über der Karte schreibt die Adresse der aktuellen Markerposition in die Adressfelder (nach Rückfrage).
- Die Karte nutzt den Kartenanbieter aus den Optionen (OpenStreetMap oder Google Maps).

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
2. **Marker-Bild oder Marker-Form der Kategorie** (beim Bearbeiten der Kategorie, Tab „KickMap“),
3. **Standard-Marker** aus den Optionen (Bild, Form oder der eingebaute Pin).

Die **Farbe** kommt aus der Kategorie, sonst aus der Standardfarbe der Optionen. Mit der Option „Marker-Quelle: Standard“ wird die Kategorie ignoriert.

### Marker-Formen und eigene SVG-Marker

KickMap bringt Marker-Formen mit (Pin, Pin mit Punkt, Stern, Einkaufstasche, Haus), die du in den Optionen oder pro Kategorie unter **Marker-Form** auswählst. Sie werden in der Marker-Farbe eingefärbt, so reicht eine Form für alle Kategorien.

Eigene SVG-Bilder funktionieren genauso: Die Farbe `#000000` im SVG wird durch die Marker-Farbe ersetzt. Für mehrfarbige Marker tauschst du unter **Farben austauschen** weitere Farben aus, eine Zeile pro Farbe:

```
#000000,#e6007e
#444444,#ffd200
```

Erlaubt sind Farbwerte (`#rgb`, `#rrggbb`, `rgb()`, `hsl()`, Farbnamen). PNG- und JPG-Bilder werden unverändert angezeigt.

## Hervorgehobene Standorte

Hervorgehobene Standorte (Stern in der Liste) kannst du über den Menüpunkt **Hervorgehobene Standorte**, im Modul („Nur hervorgehobene Standorte“) oder als Filter anzeigen.

## Batch-Verarbeitung

Über **Aktionen → Stapelverarbeitung** änderst du für mehrere Standorte gleichzeitig Kategorie, Sprache, Zugriffsebene und Tags.
