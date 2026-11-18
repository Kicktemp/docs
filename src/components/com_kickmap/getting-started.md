# Installation & Erste Schritte

## Installation

1. Lade das Paket `pkg_kickmap_<version>.zip` herunter.
2. Öffne im Backend **System → Installieren → Erweiterungen** und lade das Paket hoch.
3. Das Paket installiert Komponente, Modul und die drei Plugins und aktiviert die Plugins automatisch.

::: tip Installation per Kommandozeile
```bash
php cli/joomla.php extension:install --path=/absoluter/pfad/pkg_kickmap_2.0.0.zip
```
Der Pfad muss absolut sein, relative Pfade schlagen fehl.
:::

Bei der Installation passiert außerdem:

- die Kategorie **Uncategorised** wird angelegt,
- für Standorte wird ein **Basic-Workflow** angelegt (genutzt nur, wenn du Workflows aktivierst),
- die Inhaltstypen für Tags, Versionen und Smart Search werden registriert,
- ein altes Plugin „Installer – Kicktemp“ wird entfernt,
- Daten einer KickMap-Version für Joomla 3 werden übernommen, siehe [Update von KickMap 1.x](./migration).

## Erste Schritte

1. **Optionen prüfen** – unter **Komponenten → KickMap → Optionen** wählst du den Kartenanbieter. Ohne weitere Einstellung nutzt KickMap Leaflet mit OpenStreetMap. Für Google Maps trägst du einen API-Key ein. Details: [Konfiguration](./configuration).
2. **Kategorien anlegen** (optional) – z. B. Regionen oder Filialarten. Kategorien können verschachtelt werden und eine eigene Markerfarbe bzw. ein eigenes Marker-Bild bekommen.
3. **Standorte anlegen** – Titel, Adresse, dann im Kartenfeld **Adresse suchen** klicken oder den Marker auf der Karte verschieben. Siehe [Standorte](./locations).
4. **Öffnungszeiten pflegen** – direkt am Standort oder über eine Vorlage. Siehe [Öffnungszeiten](./opening-hours).
5. **Menüpunkt anlegen** – **Menüs → Neuer Menüeintrag → KickMap → Standorte (Karte & Liste)**. Siehe [Menüpunkte & URLs](./frontend).

::: tip Suchmaschinenfreundliche URLs
Damit URLs wie `/standorte/hamburg/filiale-hamburg` funktionieren, aktiviere in der globalen Konfiguration „URL-Rewrite nutzen“ und benenne `htaccess.txt` in `.htaccess` um.
:::

## Backend-Übersicht

Unter **Komponenten → KickMap** findest du:

| Menüpunkt | Inhalt |
|---|---|
| Dashboard | Anzahl der Standorte, Standorte ohne Koordinaten, Schnelllinks |
| Standorte | Liste mit Karte, Filtern, Batch-Verarbeitung, Hervorheben |
| Kategorien | Joomla-Kategorien der Standorte |
| Öffnungszeit-Vorlagen | Wiederverwendbare Wochenzeiten |
| Sonderöffnungszeiten | Feiertage, Betriebsferien, abweichende Zeiten |
| Felder / Feldgruppen | Custom Fields für Standorte |

In der Standortliste ermittelt **Fehlende Koordinaten ermitteln** die Koordinaten aller Standorte ohne Koordinaten (max. 25 pro Durchlauf, wegen der Nutzungsbedingungen der Geocoding-Dienste).
