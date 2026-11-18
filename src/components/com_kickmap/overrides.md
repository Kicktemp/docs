# Template-Overrides

Alle Ausgaben bestehen aus Joomla-Layouts und lassen sich per Override im Template anpassen (**System → Site-Templates → Template → Overrides erstellen**).

## Ansichten

| Datei | Override-Pfad |
|---|---|
| `components/com_kickmap/tmpl/locations/default.php` | `templates/<template>/html/com_kickmap/locations/default.php` |
| `…/featured/default.php` | `…/html/com_kickmap/featured/default.php` |
| `…/category/default.php` | `…/html/com_kickmap/category/default.php` |
| `…/categories/default.php` | `…/html/com_kickmap/categories/default.php` |
| `…/location/default.php` | `…/html/com_kickmap/location/default.php` |
| `modules/mod_kickmap/tmpl/default.php` | `…/html/mod_kickmap/default.php` |

Am Standort (Tab „Anzeige“) und am Menüpunkt kann ein alternatives Layout gewählt werden.

## Layouts

Wiederkehrende Teile liegen als JLayouts in `components/com_kickmap/layouts/kickmap/`. Override-Pfad: `templates/<template>/html/layouts/com_kickmap/kickmap/<datei>.php`.

| Layout | Inhalt |
|---|---|
| `listpage.php` | Gesamte Listenseite (Filter, Karte, Ergebnisse) |
| `filter.php` | Filterformular |
| `map.php` | Karte inkl. `<template>` für das Popup |
| `results.php` | Ergebnisliste / Raster |
| `card.php` | Karte eines Standorts in der Liste |
| `slider.php` | Ergebnisse als Slider |
| `openstatus.php` | Status „Geöffnet bis …“ |
| `openinghours.php` | Tabelle der Öffnungszeiten und Sonderöffnungszeiten |
| `tags.php`, `links.php`, `contactpersons.php`, `gallery.php` | Detailbereiche |

## Popup der Karte

Das Popup wird im Browser aus dem `<template class="kickmap-map__popup">` in `map.php` gebaut. Passe das Popup im Override von `map.php` an – ohne JavaScript:

| Attribut | Wirkung |
|---|---|
| `data-km="title"` (`company`, `street`, `zipcode`, `city`, `phone`, `email`, `distance`) | Text wird gesetzt, leere Elemente werden entfernt |
| `data-km-link="url"` | `href` auf die Detailseite |
| `data-km-href` | Telefon-/E-Mail-Link |
| `data-km-route` | Link zum Routenplaner |
| `data-km-status` | Öffnungsstatus |

## CSS

Die Styles nutzen BEM-Klassen mit dem Präfix `.kickmap-` und CSS-Variablen, z. B.:

```css
/* Markenfarbe für alle KickMap-Bereiche */
:root {
  --kickmap-brand-color: #c00;
}

/* oder gezielt überschreiben */
.kickmap,
.kickmap-map,
.kickmap-filter {
  --kickmap-radius: 0;
  --kickmap-gap: 1.5rem;
}
```

Ohne Angabe übernimmt KickMap die Bootstrap-Variablen des Templates (z. B. `--bs-primary`). Weitere Variablen: `--kickmap-primary`, `--kickmap-open`, `--kickmap-closed`, `--kickmap-text`, `--kickmap-muted`, `--kickmap-bg`, `--kickmap-bg-soft`, `--kickmap-border`, `--kickmap-shadow`, `--kickmap-gap`, `--kickmap-link-color`, `--kickmap-badge-color`, `--kickmap-primary-contrast`.

Das Stylesheet ist das Web Asset `com_kickmap.site` und kann im Template über eine eigene `joomla.asset.json` ersetzt werden.
