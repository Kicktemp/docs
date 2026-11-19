# Installation & Getting Started

## Installation

1. Download the package `pkg_kickmap_<version>.zip`.
2. In the backend, open **System → Install → Extensions** and upload the package.
3. The package installs the component, the module and the three plugins and enables the plugins automatically.

::: tip Installation via the command line
```bash
php cli/joomla.php extension:install --path=/absolute/path/pkg_kickmap_1.0.0.zip
```
The path must be absolute, relative paths fail.
:::

During installation, the following also happens:

- the category **Uncategorised** is created,
- a **Basic Workflow** is created for locations (only used if you enable workflows),
- the content types for tags, versions and Smart Search are registered,
- an old plugin “Installer – Kicktemp” is removed,

## Getting started

1. **Check the options** – under **Components → KickMap → Options** you choose the map provider. Without further settings, KickMap uses Leaflet with OpenStreetMap. For Google Maps, enter an API key. Details: [Configuration](./configuration).
2. **Create categories** (optional) – e.g. regions or branch types. Categories can be nested and can get their own marker colour or their own marker image.
3. **Create locations** – title, address, then click **Find address** in the map field or drag the marker on the map. See [Locations](./locations).
4. **Maintain opening hours** – directly on the location or via a template. See [Opening hours](./opening-hours).
5. **Create a menu item** – **Menus → New Menu Item → KickMap → Locations (map, filter and list)**. See [Menu items & URLs](./frontend).

::: tip Search engine friendly URLs
For URLs such as `/standorte/hamburg/filiale-hamburg` to work, enable “Use URL Rewriting” in the Global Configuration and rename `htaccess.txt` to `.htaccess`.
:::

## Backend overview

Under **Components → KickMap** you will find:

| Menu item | Content |
|---|---|
| Dashboard | Number of locations, locations without coordinates, quick links |
| Locations | List with map, filters, batch processing, featuring |
| Categories | Joomla categories of the locations |
| Opening hour templates | Reusable weekly hours |
| Special openings | Public holidays, company holidays, different times |
| Fields / Field Groups | Custom fields for locations |

In the location list, **Geocode missing coordinates** determines the coordinates of all locations without coordinates (max. 25 per run, due to the terms of use of the geocoding services).
