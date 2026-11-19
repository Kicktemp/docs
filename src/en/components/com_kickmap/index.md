# KickMap

<p class="km-logo">
  <img class="km-light" src="../../../components/com_kickmap/assets/kickmap-logo-claim.svg" alt="KickMap – Store Locator for Joomla" width="560">
  <img class="km-dark" src="../../../components/com_kickmap/assets/kickmap-logo-claim-invers.svg" alt="KickMap – Store Locator for Joomla" width="560">
</p>

<style>
.km-logo .km-dark { display: none; }
.dark .km-logo .km-light { display: none; }
.dark .km-logo .km-dark { display: inline; }
</style>

KickMap is a store locator for **Joomla 5.4+ and Joomla 6** (PHP 8.1+). You manage locations with address, contact details and opening hours and display them in the frontend on a map with a list, filters and radius search.

## Features

- **Two map providers:** Leaflet with OpenStreetMap (no API key, tile server freely selectable) or Google Maps (with Advanced Markers when a Map ID is set). The provider can be overridden per menu item, module and YOOtheme element.
- **Opening hours:** Weekly hours with several time slots per day, reusable templates, special opening hours (e.g. public holidays, recurring yearly) and a status such as “Open until 18:00” / “Opens tomorrow at 08:00” that updates itself in the browser.
- **Radius search:** Enter an address or postcode or use “My location”. The search point and radius are drawn on the map (both can be switched off).
- **Filters with result counts:** Search, category, tag, “Open now”, featured and custom fields – optionally as a live filter without reloading the page.
- **Joomla standard:** Categories (nested), tags, custom fields, multilingual support with associations, workflows, versions, Smart Search, Schema.org (`LocalBusiness`), Web Services API, permissions.
- **Import & export:** Import, update and export locations via CSV from Excel or other systems, with a test run, see [Import & Export](./import-export).
- **Geocoding:** Coordinates from the address with one click – via Nominatim (OpenStreetMap) or Google, with cache.
- **Module and YOOtheme Pro:** Map module for any position, the builder elements “KickMap Map” and “KickMap Filter” as well as dynamic content for YOOtheme templates.
- **Privacy:** Leaflet and marker clustering are included locally, maps can be loaded only after consent.

## Package contents

| Extension | Purpose |
|---|---|
| `com_kickmap` | Component: locations, opening hour templates, special opening hours, frontend views |
| `mod_kickmap` | Module “KickMap - Map” |
| `plg_system_kickmap` | Integration with YOOtheme Pro (elements, sources, templates) |
| `plg_finder_kickmap` | Smart Search (indexing of the locations) |
| `plg_webservices_kickmap` | API routes `v1/kickmap/*` |

## System requirements

- Joomla 5.4 or later, Joomla 6.x
- PHP 8.1 or later
- MySQL 8 / MariaDB 10.4 or later
- For Google Maps: an API key with the “Maps JavaScript API” enabled (for geocoding additionally the “Geocoding API”)
- YOOtheme Pro is optional
