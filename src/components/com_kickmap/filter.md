# Filter & Umkreissuche

## Filter

Welche Filter erscheinen, legst du in den Optionen bzw. im Menüpunkt unter **Filter** fest:

| Filter | Wirkung |
|---|---|
| Suche | Volltext in Titel, Firmenname, Straße, PLZ und Ort |
| PLZ oder Ort + Umkreis | Umkreissuche, siehe unten |
| Kategorie | inkl. Unterkategorien |
| Tag | |
| Jetzt geöffnet | nur Standorte, die gerade geöffnet sind |
| Hervorgehoben | nur hervorgehobene Standorte |
| Custom Fields | ausgewählte Felder, siehe [Kategorien, Tags & Felder](./categories-tags-fields#custom-fields) |

Mit **Trefferanzahl anzeigen** steht hinter jeder Option, wie viele Standorte mit den übrigen gewählten Filtern übrig bleiben, z. B. „Hamburg (3)“.

Mit **Live-Filter** aktualisieren sich Karte und Liste beim Ändern eines Filters ohne Neuladen. Die URL wird dabei mitgeführt, gefilterte Ansichten lassen sich also verlinken.

## Umkreissuche

1. Der Besucher gibt eine **PLZ oder einen Ort** ein und wählt den **Umkreis** – oder klickt **Meinen Standort verwenden** (Browser-Ortung).
2. KickMap ermittelt die Koordinaten (Geocoding) und zeigt nur Standorte im Umkreis, **sortiert nach Entfernung**. Die Karten zeigen die Entfernung an.
3. Auf der Karte erscheinen der **Suchpunkt** und ein **Kreis** mit dem Umkreis; die Karte zoomt auf den Kreis.

Entfernungen, Umkreis-Auswahl und Kreis nutzen die **Entfernungseinheit** aus den Optionen: Kilometer oder Meilen. Sie lässt sich pro Menüeintrag überschreiben, z. B. für eine englischsprachige Standortseite in Meilen.

Suchpunkt und Kreis sind über die Optionen „Suchpunkt anzeigen“ und „Umkreis als Kreis anzeigen“ abschaltbar, die Farbe ist einstellbar.

## URL-Parameter

Filter lassen sich per URL vorbelegen, z. B. für Links aus Kampagnen:

| Parameter | Beispiel |
|---|---|
| `filter_search` | `?filter_search=hamburg` |
| `filter_address`, `filter_radius` | `?filter_address=20095&filter_radius=25` |
| `filter_lat`, `filter_lng` | `?filter_lat=53.55&filter_lng=10.0&filter_radius=50` |
| `filter_category[]` | `?filter_category[]=10` |
| `filter_tag[]` | `?filter_tag[]=2` |
| `filter_open` | `?filter_open=1` |
| `filter_featured` | `?filter_featured=1` |
| `filter_field[ID][]` | `?filter_field[1][]=dc` |
| `reset` | `?reset=1` setzt alle Filter zurück |

Mit `format=json` liefert dieselbe URL die Marker als JSON (wird vom Live-Filter genutzt).
