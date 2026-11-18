# Update von KickMap 1.x (Joomla 3)

KickMap 2 ist eine Neuentwicklung für Joomla 5 und 6. Die Daten der Joomla-3-Version werden bei der Installation automatisch übernommen.

## Ablauf

1. Aktualisiere die Seite wie gewohnt von Joomla 3 über Joomla 4 auf Joomla 5 (die alte KickMap muss dafür nicht laufen).
2. Installiere das Paket KickMap 2 über die vorhandene Installation.
3. Prüfe Standorte, Kategorien und Tags.

## Was passiert mit den Daten?

| Joomla 3 | KickMap 2 |
|---|---|
| Standorte (`#__kickmap_items`) | Standorte – **die IDs bleiben erhalten** |
| Marken und Services | Tags unter den Eltern-Tags „Brands“ bzw. „Services“ |
| Wirtschaftsräume | Kategorien |
| Öffnungszeiten (Freitext) | Strukturierte Öffnungszeiten. Nicht auswertbare Texte landen im Feld „Hinweis zu den Öffnungszeiten“. |
| Optionen der Komponente | werden auf die neuen Optionen abgebildet |
| Menüpunkte `view=items` / `view=item` | werden auf die neuen Ansichten umgestellt |
| alte URLs `…/item/12-name` | leiten per 301 auf die neue URL weiter |

Die alten Tabellen werden **nicht gelöscht**, sondern in `*_legacy` umbenannt (z. B. `#__kickmap_items_legacy`). Wenn alles passt, kannst du sie später selbst entfernen.

Die Migration läuft nur einmal: Ist eine `_legacy`-Tabelle bereits vorhanden, wird nichts doppelt übernommen.

## Was entfällt?

KickMap 2 ist ein allgemeines Produkt. Händlerspezifische Funktionen der alten Version gibt es nicht mehr:

- eigene Entitäten für Marken, Services und Wirtschaftsräume → **Tags und Kategorien**
- Sonderfelder (Großkunden, Behörden, Notdienst, Service-Link, Quicklinks) → **Custom Fields**
- Visforms-Kontaktformular → Kontaktbereich mit Editor; Formulare per Content-Plugin einbinden
- das Plugin „Installer – Kicktemp“ (wird bei der Installation entfernt)

::: warning Template-Overrides
Overrides der alten Version funktionieren nicht mehr. Die neuen Layouts sind unter [Template-Overrides](./overrides) beschrieben.
:::
