# Menüpunkte & URLs

## Menüpunkt-Typen

Unter **Menüs → Neuer Menüeintrag → Menüeintragstyp → KickMap**:

| Typ | Inhalt |
|---|---|
| **Standorte (Karte, Filter und Liste)** | Die Hauptseite: Karte, Filter und Ergebnisliste. Kann auf Kategorien und Tags eingeschränkt werden. |
| **Standorte einer Kategorie** | Standorte einer Kategorie inkl. Unterkategorien, mit Beschreibung und Unterkategorien |
| **Liste der Kategorien** | Übersicht der Kategorien mit Anzahl der Standorte |
| **Hervorgehobene Standorte** | Nur hervorgehobene Standorte |
| **Einzelner Standort** | Detailseite eines Standorts |

Die Listen-Menüpunkte haben im Tab **Liste & Filter** dieselben Einstellungen wie die [Optionen](./configuration#liste-filter) – leer bedeutet „Globale Einstellung verwenden“. Zusätzlich gibt es eine Überschrift, einen Einleitungstext und einen eigenen Kartenanbieter.

### Anzahl pro Seite

Wie viele Standorte pro Seite erscheinen, stellst du am Menüpunkt im Feld **Anzahl** ein (Standorte, Standorte einer Kategorie, Hervorgehobene Standorte). Leer übernimmt den Wert aus den Optionen (Standard 24), `0` zeigt alle Standorte ohne Seitenaufteilung. Die Karte zeigt immer alle Treffer, nicht nur die der aktuellen Seite.

Besucher können die Anzahl nicht per URL (`?limit=`) ändern. Die Seitenlinks enthalten die aktiven Filter, gefilterte Seiten lassen sich daher teilen und von Suchmaschinen korrekt aufrufen.

## URLs

Mit aktiviertem URL-Rewrite (globale Konfiguration und `.htaccess`) erzeugt KickMap sprechende URLs:

| Seite | Beispiel |
|---|---|
| Menüpunkt „Standorte“ | `/standorte` |
| Standort ohne eigenen Menüpunkt | `/standorte/hamburg/filiale-hamburg` |
| Kategorie mit Menüpunkt „Region Nord“ | `/region-nord` |
| Unterkategorie darunter | `/region-nord/hamburg` |
| Standort in dieser Kategorie | `/region-nord/hamburg/filiale-hamburg` |
| Standort mit eigenem Menüpunkt | `/filiale-bremen` |

So sucht KickMap den passenden Menüpunkt:

1. Menüpunkt **des Standorts** selbst,
2. Menüpunkt der **Kategorie** oder einer übergeordneten Kategorie,
3. der Menüpunkt **Standorte (Karte, Filter und Liste)** – darunter wird der Kategorie-Pfad angehängt.

::: tip Immer einen Menüpunkt „Standorte“ anlegen
Gibt es keinen Menüpunkt „Standorte“ (er darf auch in einem versteckten Menü liegen), erzeugt Joomla URLs der Form `/component/kickmap/location/…`.
:::

### Weiterleitungen

Abweichende Schreibweisen werden per **301** auf die richtige URL umgeleitet:

- URLs mit ID (`/standorte/hamburg/1-filiale-hamburg`), wenn „IDs aus URLs entfernen“ aktiv ist,
- `/component/kickmap/…`-URLs,
- alte URLs der Joomla-3-Version (`/standorte/item/1-filiale-hamburg`).

Unbekannte Pfade liefern einen 404-Fehler.

## Detailseite

Die Detailseite zeigt Bild, Adresse, Kontaktdaten, Karte, Routenplaner-Link, Öffnungsstatus, Öffnungszeiten mit Sonderöffnungszeiten, Beschreibung, Galerie, Links, Ansprechpartner, Tags, Custom Fields und den Kontaktbereich. Jeder Bereich ist ein eigenes Layout und kann per [Template-Override](./overrides) angepasst werden.

Für Suchmaschinen gibt KickMap strukturierte Daten nach Schema.org aus (Typ einstellbar, inkl. Adresse, Geo-Koordinaten und `openingHoursSpecification`).

## Viele Standorte

Die Karte zeigt alle Standorte der aktuellen Filter, die Liste darunter nur eine Seite davon. KickMap ist auf große
Bestände ausgelegt. Gemessen auf einer Testinstallation (Joomla 6, PHP 8.3, eine Seite mit Standortliste und zwei
Kartenmodulen, Öffnungszeiten für alle Standorte):

| Standorte | Seite (unkomprimiert / komprimiert) | Serverzeit |
|---|---|---|
| 5.000 | ca. 1,8 MB / 250 KB | ca. 0,7 s |
| 10.000 | ca. 3,6 MB / 450 KB | ca. 1,3 s |

Die Marker werden geclustert, der Browser bleibt dabei flüssig. Für sehr viele Standorte:

- **Komprimierung** im Webserver (gzip/Brotli) oder in Joomla (**System → Konfiguration → Server → Gzip-Komprimierung**)
  aktivieren. Die Kartendaten schrumpfen dabei auf etwa ein Siebtel.
- Kartenmodule mit **allen** Standorten nicht zusätzlich auf der Standortseite anzeigen: Jede Karte enthält die
  Markerdaten selbst.
- Öffnungszeiten über **Vorlagen** pflegen: Standorte mit gleichen Öffnungszeiten teilen sich die Daten auf der Karte.
- Mit **Live-Filter** werden beim Filtern nur die Daten nachgeladen, ohne die Seite neu aufzubauen.
