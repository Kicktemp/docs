# YOOtheme Pro

Ist YOOtheme Pro aktiv, erweitert das Plugin **System – KickMap** den Page Builder. Ohne YOOtheme bleibt das Plugin inaktiv.

## Templates

Unter **Builder → Templates** gibt es drei Template-Typen:

| Template | Seite | Einschränkungen |
|---|---|---|
| KickMap Locations | Menüpunkte „Standorte“ und „Hervorgehobene Standorte“ | Menüeinträge, Seiten (erste / weitere), Sprache |
| KickMap Category | Menüpunkt „Standorte einer Kategorie“ | Kategorie, Menüeinträge, Seiten, Sprache |
| KickMap Location | Detailseite eines Standorts | Kategorie, Tag, Sprache |

Mit **Auf Menüeinträge beschränken** gilt ein Template nur für bestimmte KickMap-Menüpunkte, z. B. ein Builder-Layout für „Store Finder“, während „Standorte“ die Standardausgabe behält.

## Dynamische Inhalte

**Seite** (im passenden Template):

- *Location* – der aktuelle Standort,
- *Standorte* – die gefilterten Standorte der aktuellen Liste (mit Start/Anzahl),
- *KickMap Liste* – Angaben zur aktuellen Liste, z. B. die Anzahl der gefundenen Standorte,
- *Category* – die aktuelle Kategorie.

**Benutzerdefiniert** (auf jeder Seite): *KickMap Standorte* mit Kategorien, Tags, „Jetzt geöffnet“, „Nur hervorgehobene“ und Anzahl.

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

- **Standorte:** *Seite* (die gefilterten Standorte der aktuellen KickMap-Liste, im Template „KickMap Location“ der aktuelle Standort) oder *Auswahl* (Kategorien, Tags, Anzahl).
- **Kartenanbieter**, **Höhe**, **Zoom** und **Marker gruppieren** – leer bedeutet Optionen der Komponente.

### KickMap Filter

Das Filterformular als eigenes Element, z. B. in einer Seitenleiste.

- **Filter:** Textsuche, Umkreissuche, Kategorie, Tags, Jetzt geöffnet, Hervorgehoben, Custom Fields.
- **Ziel-Menüpunkt:** Auf anderen Seiten (z. B. Startseite) sendet das Formular an diesen KickMap-Menüpunkt.

::: tip Liste selbst gestalten
Lege für „KickMap Locations“ ein Template mit *KickMap Filter*, *KickMap Karte* (Quelle: Seite) und einem Grid an, dessen Quelle *Standorte* (Seite) ist. Für die Trefferzahl nutzt du eine Überschrift mit der Quelle *KickMap Liste → Anzahl der Standorte*.

Beim Filtern lädt die Seite neu, weil der Builder Grid und Karte auf dem Server rendert. Der Live-Filter ohne Neuladen gilt nur für die Standardausgabe der Komponente.
:::

## Voraussetzungen

- YOOtheme Pro 5 (getestet mit 5.0.56)
- Die Builder-Oberfläche ist auf Deutsch und Englisch übersetzt.
