# YOOtheme Pro

Ist YOOtheme Pro aktiv, erweitert das Plugin **System – KickMap** den Page Builder. Ohne YOOtheme bleibt das Plugin inaktiv.

## Templates

Unter **Builder → Templates** gibt es drei Template-Typen:

| Template | Seite | Einschränkungen |
|---|---|---|
| KickMap Locations | Menüpunkte „Standorte“ und „Hervorgehobene Standorte“ | Seiten (erste / weitere), Sprache |
| KickMap Category | Menüpunkt „Standorte einer Kategorie“ | Kategorie, Seiten, Sprache |
| KickMap Location | Detailseite eines Standorts | Kategorie, Tag, Sprache |

## Dynamische Inhalte

**Seite** (im passenden Template):

- *Location* – der aktuelle Standort,
- *Locations* – die gefilterten Standorte der aktuellen Liste (mit Start/Anzahl) und ihre Gesamtzahl,
- *Category* – die aktuelle Kategorie.

**Benutzerdefiniert** (auf jeder Seite): *KickMap Locations* mit Kategorien, Tags, „Jetzt geöffnet“, „Nur hervorgehobene“ und Anzahl.

Felder eines Standorts:

| Gruppe | Felder |
|---|---|
| Allgemein | Titel, Link, ID, Zugriffe, Beschreibung, Hervorgehoben |
| Adresse | Firmenname, Straße, PLZ, Ort, Region, Land, Adresse (formatiert), Koordinaten, Breitengrad, Längengrad, Entfernung (bei Umkreissuche), Routen-Link |
| Kontakt | Telefon, Fax, E-Mail, Webseite, weitere Telefonnummern, Ansprechpartner |
| Bilder | Bild, Alternativtext, Bildtext, Galerie |
| Öffnungszeiten | Status (Text), Jetzt geöffnet (für Bedingungen), Öffnungszeiten-Abschnitte, Hinweis, Sonderöffnungszeiten |
| Zuordnung | Kategorie, Kategorie-Link, Tags, Social Links |
| Felder | alle Custom Fields des Standorts |

## Elemente

### KickMap Map

Eine Karte mit Standorten.

- **Standorte:** *Seite* (die gefilterten Standorte der aktuellen KickMap-Liste) oder *Auswahl* (Kategorien, Tags, Anzahl).
- **Kartenanbieter**, **Höhe**, **Zoom** und **Marker gruppieren** – leer bedeutet Optionen der Komponente.

Auf einer Listen-Seite reagiert die Karte auf den Live-Filter.

### KickMap Filter

Das Filterformular als eigenes Element, z. B. in einer Seitenleiste.

- **Filter:** Textsuche, Umkreissuche, Kategorie, Tags, Jetzt geöffnet, Hervorgehoben, Custom Fields.
- **Ziel-Menüpunkt:** Auf anderen Seiten (z. B. Startseite) sendet das Formular an diesen KickMap-Menüpunkt.

::: tip Liste selbst gestalten
Lege für „KickMap Locations“ ein Template mit *KickMap Filter*, *KickMap Map* und einem Grid an, dessen Quelle *Locations* (Seite) ist. Der Live-Filter aktualisiert Karte und Grid.
:::
