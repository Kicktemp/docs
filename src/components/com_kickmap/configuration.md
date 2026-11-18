# Konfiguration

Die Optionen findest du unter **Komponenten → KickMap → Optionen**. Viele Einstellungen lassen sich pro Menüpunkt, Modul oder YOOtheme-Element überschreiben.

## Karte

| Option | Standard | Beschreibung |
|---|---|---|
| Kartenanbieter | Leaflet | Leaflet (OpenStreetMap) oder Google Maps |
| Google Maps API-Key | – | Pflicht für Google Maps. Ohne Key wird automatisch Leaflet verwendet. |
| Google Map-ID | – | Aktiviert Advanced Markers und Cloud-Kartenstile. Ohne Map-ID werden klassische Marker verwendet. |
| Kartentyp | Straße | Straße, Satellit, Hybrid, Gelände (Google) |
| Points of Interest ausblenden | Ja | Blendet Geschäfte/Sehenswürdigkeiten von Google aus (nur ohne Map-ID) |
| Kachel-Server (Leaflet) | `https://tile.openstreetmap.org/{z}/{x}/{y}.png` | Eigener Kachel-Server, z. B. ein selbst gehosteter oder ein kommerzieller Anbieter |
| Quellenangabe der Kacheln | © OpenStreetMap | Pflichtangabe des Kachel-Anbieters |
| Karte erst nach Zustimmung laden | Ja | Zwei-Klick-Lösung, siehe [Datenschutz](./privacy) |
| Hinweistext | – | Text des Zustimmungshinweises (leer = Standardtext) |
| Breitengrad/Längengrad Kartenmitte, Zoom | Deutschland, 6 | Ansicht, wenn keine Standorte vorhanden sind |
| Zoom Detailseite | 15 | Zoom bei einem einzelnen Standort |
| Maximaler Zoom | 18 | |
| Auf Standorte zoomen | Ja | Kartenausschnitt passt sich an die Standorte an |
| Zoomen mit dem Mausrad | Nein | Aus, damit die Seite beim Scrollen nicht hängen bleibt |
| Marker gruppieren (Cluster) | Ja | Fasst nahe Marker zusammen; „Cluster bis Zoom“ 12 |
| Höhe der Karte | 500px | |
| Karte in der Standortliste (Backend) | Ja | |

::: tip Google Maps einrichten
1. In der [Google Cloud Console](https://console.cloud.google.com/) ein Projekt anlegen und die **Maps JavaScript API** aktivieren (für Geocoding zusätzlich die **Geocoding API**).
2. Einen API-Key erstellen und auf deine Domain (HTTP-Referrer) beschränken.
3. Optional unter **Kartenverwaltung** eine Map-ID (Typ JavaScript) anlegen.
:::

## Marker

| Option | Standard | Beschreibung |
|---|---|---|
| Marker-Bild | – | Eigenes Bild (SVG/PNG) als Standard-Marker |
| Standardfarbe | `#0099d9` | Farbe des mitgelieferten Markers |
| Breite / Höhe | 32 / 48 px | Größe des Markers, Ankerpunkt ist unten mittig |
| Marker-Quelle | Kategorie | „Kategorie“: Marker der Kategorie verwenden; „Standard“: immer den Standard-Marker |

## Geocoding

| Option | Standard | Beschreibung |
|---|---|---|
| Geocoding-Dienst | Automatisch | Automatisch = Google, wenn ein API-Key gesetzt ist, sonst Nominatim |
| Google Geocoding API-Key | – | Eigener Key fürs Geocoding (sonst der Maps-Key) |
| Nominatim-Server | `https://nominatim.openstreetmap.org` | Eigener Nominatim-Server möglich |
| Kontakt-E-Mail für Nominatim | – | Wird bei Anfragen mitgesendet (Nutzungsrichtlinie von Nominatim) |
| Länder | `de` | ISO-Codes, z. B. `de,at,ch`; leer = weltweit |

Das Geocoding wird für „Adresse suchen“ im Backend und für die Umkreissuche im Frontend genutzt. Ergebnisse werden 30 Tage zwischengespeichert.

## Liste & Filter

| Option | Standard | Beschreibung |
|---|---|---|
| Filter anzeigen | Ja | |
| Filter | Suche, PLZ/Ort, Kategorie, Tag, Jetzt geöffnet | Zusätzlich möglich: Hervorgehoben, Custom Fields |
| Filterbare Felder | – | Custom Fields, die als Filter erscheinen |
| Trefferanzahl anzeigen | Ja | Zahlen hinter den Filteroptionen |
| Live-Filter | Nein | Ergebnisse ohne Neuladen der Seite aktualisieren |
| „Mein Standort“ anbieten | Ja | Umkreissuche mit der Browser-Ortung |
| Suchpunkt anzeigen | Ja | Marker am Suchort |
| Umkreis als Kreis anzeigen | Ja | Kreis mit dem Suchradius; Farbe einstellbar |
| Entfernungseinheit | Kilometer | Kilometer (km) oder Meilen (mi), gilt für Umkreis, Umkreis-Optionen und Entfernungsangaben. Pro Menüeintrag überschreibbar. |
| Umkreis-Optionen | `10,25,50,100,250` | Auswahl im Filter, in der gewählten Einheit |
| Standard-Umkreis | 50 | In der gewählten Einheit |
| Karte anzeigen / Liste anzeigen | Ja / Ja | |
| Sortierung | Reihenfolge | Reihenfolge, Titel, PLZ, Ort, Hervorgehobene zuerst. Bei einer Umkreissuche wird nach Entfernung sortiert. |
| Anzahl, Seitenzahlen | 24 | |
| Slider anzeigen | Nein | Liste als Slider statt Raster |
| Platzhalterbild | – | Bild für Standorte ohne Bild |

## Standort (Detailseite)

| Option | Standard | Beschreibung |
|---|---|---|
| Karte anzeigen | Ja | |
| Öffnungsstatus anzeigen | Ja | |
| Sonderöffnungszeiten anzeigen (Tage) | 60 | Vorschau-Zeitraum |
| Routenplaner-Link | Ja | Google Maps bzw. OpenStreetMap, je nach Anbieter |
| Kategorie / Tags anzeigen | Ja | |
| Kontaktbereich anzeigen | Ja | Freier Inhalt mit Editor; Content-Plugins werden ausgeführt (z. B. für ein Formular) |
| Zugriffe zählen | Ja | |
| Standard-Meta-Beschreibung | – | |
| Schema.org-Typ | LocalBusiness | LocalBusiness, Store, Organization oder keine Ausgabe |

## Integration

Suchmaschinenfreundliche URLs (IDs aus URLs entfernen), Versionen, Custom Fields und Workflows – siehe [Menüpunkte & URLs](./frontend) und [Mehrsprachigkeit, Workflow & Versionen](./multilingual-workflow).

## Berechtigungen

Neben den Joomla-Standardrechten gibt es:

| Recht | Wirkung |
|---|---|
| Zugriff auf Web Services (`core.api`) | Zugriff über die Web Services API. Ab Joomla 5.4.11 / 6.2.1 prüft Joomla dieses Recht bei jedem API-Aufruf, siehe [Web Services API](./api#berechtigung-core-api). |
| Standorte verwalten | Menüpunkt und Liste der Standorte |
| Öffnungszeiten verwalten | Vorlagen und Sonderöffnungszeiten |
| Kategorien verwalten | Menüpunkt Kategorien |
| Felder verwalten | Menüpunkte Felder und Feldgruppen |
| Übergänge ausführen | Workflow-Übergänge |
