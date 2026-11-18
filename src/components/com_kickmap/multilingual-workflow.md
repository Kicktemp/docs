# Mehrsprachigkeit, Workflow & Versionen

## Mehrsprachigkeit

KickMap folgt dem Joomla-Standard für mehrsprachige Seiten:

- Jeder Standort, jede Vorlage und jede Kategorie hat eine **Sprache** (oder „Alle“).
- Im Frontend werden nur Standorte der aktuellen Sprache und „Alle“ angezeigt.
- Im Tab **Assoziationen** verknüpfst du die Übersetzungen eines Standorts. Der Sprachumschalter springt dann direkt zum übersetzten Standort.
- Assoziationen von Standorten und Kategorien lassen sich auch in **Mehrsprachige Zuordnungen** (`com_associations`) nebeneinander bearbeiten.

Voraussetzung sind die Plugins „System – Sprachenfilter“ (mit „Zuordnungen“ aktiviert) und Inhaltssprachen.

## Workflow

Workflows schaltest du unter **Optionen → Integration → Workflows** ein. Bei der Installation wurde dafür der **Basic-Workflow** für Standorte angelegt.

Mit aktivem Workflow

- ersetzt die Spalte **Stufe** in der Standortliste den Status,
- änderst du Status und „Hervorgehoben“ über **Übergänge** (Liste: Aktionen bzw. Dropdown der Zeile; Formular: Feld „Übergang“),
- lassen sich eigene Workflows mit Stufen und Übergängen unter **Workflows** anlegen und pro Kategorie zuweisen,
- steuern die Joomla-Plugins „Workflow – Veröffentlichung“, „– Hervorheben“ und „– Benachrichtigung“ Status, Hervorhebung und E-Mails.

## Versionen

Bei aktivierter Versionierung (Optionen → Integration, Standard: an, 10 Versionen) speichert Joomla jede Änderung an Standorten, Vorlagen und Sonderöffnungszeiten. Über **Versionen** in der Werkzeugleiste vergleichst und stellst du ältere Stände wieder her.
