# Template Overrides

All output consists of Joomla layouts and can be customized with an override in the template (**System → Site Templates → Template → Create Overrides**).

## Views

| File | Override path |
|---|---|
| `components/com_kickmap/tmpl/locations/default.php` | `templates/<template>/html/com_kickmap/locations/default.php` |
| `…/featured/default.php` | `…/html/com_kickmap/featured/default.php` |
| `…/category/default.php` | `…/html/com_kickmap/category/default.php` |
| `…/categories/default.php` | `…/html/com_kickmap/categories/default.php` |
| `…/location/default.php` | `…/html/com_kickmap/location/default.php` |
| `modules/mod_kickmap/tmpl/default.php` | `…/html/mod_kickmap/default.php` |

You can select an alternative layout on the location ("Display" tab) and on the menu item.

## Layouts

Recurring parts are JLayouts in `components/com_kickmap/layouts/kickmap/`. Override path: `templates/<template>/html/layouts/com_kickmap/kickmap/<file>.php`.

| Layout | Content |
|---|---|
| `listpage.php` | Entire list page (filters, map, results) |
| `filter.php` | Filter form |
| `map.php` | Map including the `<template>` for the popup |
| `results.php` | Result list / grid |
| `card.php` | Card of a location in the list |
| `slider.php` | Results as a slider |
| `openstatus.php` | Status "Open until …" |
| `openinghours.php` | Table of opening hours and special opening hours |
| `tags.php`, `links.php`, `contactpersons.php`, `gallery.php` | Detail sections |

## Map Popup

The popup is built in the browser from the `<template class="kickmap-map__popup">` in `map.php`. Customize the popup in the override of `map.php` – without JavaScript:

| Attribute | Effect |
|---|---|
| `data-km="title"` (`company`, `street`, `zipcode`, `city`, `phone`, `email`, `distance`) | Text is set, empty elements are removed |
| `data-km-link="url"` | `href` to the detail page |
| `data-km-href` | Phone/email link |
| `data-km-route` | Link to the route planner |
| `data-km-status` | Opening status |

## CSS

The styles use BEM classes with the prefix `.kickmap-` and CSS variables, e.g.:

```css
/* Brand colour for all KickMap areas */
:root {
  --kickmap-brand-color: #c00;
}

/* or override specific parts */
.kickmap,
.kickmap-map,
.kickmap-filter {
  --kickmap-radius: 0;
  --kickmap-gap: 1.5rem;
}
```

If nothing is specified, KickMap uses the template's Bootstrap variables (e.g. `--bs-primary`). Further variables: `--kickmap-primary`, `--kickmap-open`, `--kickmap-closed`, `--kickmap-text`, `--kickmap-muted`, `--kickmap-bg`, `--kickmap-bg-soft`, `--kickmap-border`, `--kickmap-shadow`, `--kickmap-gap`, `--kickmap-link-color`, `--kickmap-badge-color`, `--kickmap-primary-contrast`.

The stylesheet is the web asset `com_kickmap.site` and can be replaced in the template with your own `joomla.asset.json`.
