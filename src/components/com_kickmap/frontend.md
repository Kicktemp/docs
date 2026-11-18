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
