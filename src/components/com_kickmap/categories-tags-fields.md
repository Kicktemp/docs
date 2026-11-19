# Kategorien, Tags & Felder

KickMap nutzt die Bordmittel von Joomla statt eigener Sonderfelder. Damit bleibt die Erweiterung für jede Branche passend.

## Kategorien

**KickMap → Kategorien** sind normale Joomla-Kategorien (`com_kickmap`), beliebig verschachtelt, z. B. Regionen:

```
Norddeutschland
└── Hamburg
Süddeutschland
```

- Jeder Standort gehört zu genau einer Kategorie.
- Im Tab **KickMap** einer Kategorie legst du **Marker-Form**, **Marker-Bild**, **Markerfarbe** und **Farben austauschen** fest ([Marker](./locations.md#marker)) – alle Standorte direkt in dieser Kategorie bekommen diesen Marker. Unterkategorien erben ihn nicht, sie brauchen einen eigenen.
- Filter und Menüpunkte nach Kategorie schließen **Unterkategorien ein**.
- Kategorien bekommen eigene Menüpunkte (**Standorte einer Kategorie**) und eigene URLs, siehe [Menüpunkte & URLs](./frontend).

## Tags

Tags eignen sich für Merkmale, die quer zu den Kategorien liegen, z. B. Marken, Services oder „E-Ladesäule“.

- Tags vergibst du im Standort (rechte Spalte) oder per Stapelverarbeitung.
- Im Frontend: Filter „Tag“, Anzeige auf Karte und Detailseite, Menüpunkte auf Tags einschränken.
- Die Joomla-Tag-Seite (`com_tags`) listet Standorte mit.

## Custom Fields

Unter **KickMap → Felder** legst du eigene Felder für Standorte an (Kontext „Standort“), z. B. „Ladestation“ (Liste), „Zahlungsarten“ (Checkboxen) oder „Filialleitung“ (Text). Feldgruppen erzeugen eigene Tabs im Standort.

- **Ausgabe:** Die Felder erscheinen auf der Detailseite gemäß der Feld-Option „Automatische Anzeige“.
- **Als Filter:** Felder vom Typ Liste, Radio oder Checkboxen (und Text als Freitextsuche) kannst du als Filter anbieten. Dazu in den Optionen bzw. im Menüpunkt bei **Filter** den Eintrag „Custom Fields“ wählen und unter **Filterbare Felder** die Felder auswählen. Die Optionen zeigen die Trefferzahl, z. B. „DC Schnelllader (2)“.
- **In Smart Search:** Stelle am Feld unter **Smart Search → Suchindex** „Suchbar“, „Taxonomie“ oder beides ein. Der Joomla-Standard ist „Nein“ – dann werden die Feldwerte nicht gefunden.
- **In der API und YOOtheme:** Feldwerte stehen in der Web Services API und als dynamische Inhalte in YOOtheme Pro zur Verfügung.

Custom Fields lassen sich in den Optionen (Tab „Integration“) komplett abschalten.
