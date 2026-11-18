# Smart Search

Das Plugin **Smart Search – KickMap** nimmt Standorte in die Joomla-Suche (`com_finder`) auf.

## Einrichten

1. Prüfe unter **System → Plugins**, dass „Smart Search – KickMap“ aktiviert ist (geschieht bei der Installation).
2. Baue den Index unter **Komponenten → Smart Search → Indexieren** auf – oder per Kommandozeile:
   ```bash
   php cli/joomla.php finder:index
   ```
3. Lege einen Menüpunkt **Smart Search → Suche** an oder nutze das Modul „Smart Search“.

Danach hält Joomla den Index beim Speichern, Veröffentlichen und Löschen von Standorten automatisch aktuell.

## Was wird indexiert?

- Titel und Beschreibung
- Firmenname, Straße, PLZ, Ort, Region, Land, Telefon, E-Mail und Tags
- Metadaten (Meta-Beschreibung, Schlüsselwörter)
- Custom Fields, bei denen am Feld unter **Smart Search → Suchindex** „Suchbar“ eingestellt ist

Nur veröffentlichte Standorte in veröffentlichten Kategorien erscheinen in den Ergebnissen; Zugriffsebene und Veröffentlichungszeitraum werden berücksichtigt. Die Treffer verlinken auf die [SEF-URL](./frontend#urls) des Standorts.

## Taxonomien (Filter in der erweiterten Suche)

Im Plugin wählst du, welche Taxonomien erzeugt werden:

| Taxonomie | Inhalt |
|---|---|
| Typ | „Standort“ |
| Kategorie | verschachtelte Kategorien |
| Sprache | Sprache des Standorts |
| Tag | Tags des Standorts |
| Region | Bundesland / Region |
| Land | Land |

Custom Fields mit „Taxonomie“ im Suchindex werden zusätzlich als eigene Taxonomie angelegt. In der erweiterten Suche (Menüpunkt: „Erweiterte Suche anzeigen“) kann der Besucher danach filtern.
