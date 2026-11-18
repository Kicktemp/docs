# Mehrsprachigkeit, Workflow & Versionen

## Mehrsprachigkeit

KickMap folgt dem Joomla-Standard für mehrsprachige Seiten:

- Jeder Standort, jede Vorlage und jede Kategorie hat eine **Sprache** (oder „Alle“).
- Im Frontend werden nur Standorte der aktuellen Sprache und „Alle“ angezeigt.
- Im Tab **Assoziationen** verknüpfst du die Übersetzungen eines Standorts. Der Sprachumschalter springt dann direkt zum übersetzten Standort.
- Assoziationen von Standorten und Kategorien lassen sich auch in **Mehrsprachige Zuordnungen** (`com_associations`) nebeneinander bearbeiten.

Voraussetzung sind die Plugins „System – Sprachenfilter“ (mit „Zuordnungen“ aktiviert) und Inhaltssprachen.

### Einrichtung in Kürze

1. Inhaltssprachen veröffentlichen, z. B. Deutsch (`de`) und Englisch (`en`), und „System – Sprachenfilter“ mit „Zuordnungen“ aktivieren.
2. Pro Sprache ein Menü mit einer eigenen Startseite anlegen, zusätzlich eine Startseite für „Alle“ (z. B. in einem versteckten Menü).
3. Die Menüeinträge der Sprachen miteinander verknüpfen (Tab „Assoziationen“) und das Modul „Sprachauswahl“ veröffentlichen.
4. Kategorien und Standorte übersetzen und verknüpfen. Standorte mit der Sprache „Alle“ erscheinen in jeder Sprache.

**Tipp:** Die Entfernungseinheit lässt sich pro Menüeintrag setzen. Die englische Standortseite kann also Meilen nutzen und die deutsche Kilometer.

### Custom Fields übersetzen

Beschriftungen und Optionen von Custom Fields werden wie im Joomla-Core übersetzt. Trage als Beschriftung bzw. Optionstext eine
Sprachkonstante ein, z. B. `MYSITE_FIELD_PAYMENT`, und lege sie unter **System → Sprachen → Overrides** für jede Sprache an.
Das gilt auch für die Feldfilter in der Standortliste.

## Workflow

Workflows schaltest du unter **Optionen → Integration → Workflows** ein. Bei der Installation wurde dafür der **Basic-Workflow** für Standorte angelegt.

Mit aktivem Workflow

- ersetzt die Spalte **Stufe** in der Standortliste den Status,
- änderst du Status und „Hervorgehoben“ über **Übergänge** (Liste: Aktionen bzw. Dropdown der Zeile; Formular: Feld „Übergang“),
- lassen sich eigene Workflows mit Stufen und Übergängen unter **Workflows** anlegen und pro Kategorie zuweisen,
- steuern die Joomla-Plugins „Workflow – Veröffentlichung“, „– Hervorheben“ und „– Benachrichtigung“ Status, Hervorhebung und E-Mails.

## Versionen

Bei aktivierter Versionierung (Optionen → Integration, Standard: an, 10 Versionen) speichert Joomla jede Änderung an Standorten, Vorlagen und Sonderöffnungszeiten. Über **Versionen** in der Werkzeugleiste vergleichst und stellst du ältere Stände wieder her.
