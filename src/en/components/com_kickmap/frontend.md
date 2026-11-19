# Menu Items & URLs

## Menu Item Types

Under **Menus → New Menu Item → Menu Item Type → KickMap**:

| Type | Content |
|---|---|
| **Locations (map, filter and list)** | The main page: map, filter, and results list. Can be restricted to categories and tags. |
| **Locations of a category** | Locations of a category including subcategories, with description and subcategories |
| **List of categories** | Overview of the categories with the number of locations |
| **Featured locations** | Only featured locations |
| **Single location** | Detail page of a location |

In the **List & Filter** tab, the list menu items have the same settings as the [Options](./configuration#list-filter) – empty means "Use Global". In addition, there is a headline, an intro text, and a separate map provider.

### Number per Page

You set how many locations appear per page on the menu item in the **Select number of items per page** field (Locations, Locations of a category, Featured locations). Empty takes the value from the options (default 24), `0` shows all locations without pagination. The map always shows all results, not just those on the current page.

Visitors cannot change the number via the URL (`?limit=`). The page links contain the active filters, so filtered pages can be shared and correctly accessed by search engines.

## URLs

With URL rewriting enabled (Global Configuration and `.htaccess`), KickMap generates readable URLs:

| Page | Example |
|---|---|
| Menu item "Locations" | `/standorte` |
| Location without its own menu item | `/standorte/hamburg/filiale-hamburg` |
| Category with menu item "Region Nord" | `/region-nord` |
| Subcategory below it | `/region-nord/hamburg` |
| Location in this category | `/region-nord/hamburg/filiale-hamburg` |
| Location with its own menu item | `/filiale-bremen` |

This is how KickMap looks for the matching menu item:

1. The menu item **of the location** itself,
2. the menu item of the **category** or a parent category,
3. the **Locations (map, filter and list)** menu item – the category path is appended below it.

::: tip Always create a "Locations" menu item
If there is no "Locations" menu item (it may also be in a hidden menu), Joomla generates URLs of the form `/component/kickmap/location/…`.
:::

### Redirects

Different spellings are redirected to the correct URL with a **301**:

- URLs with an ID (`/standorte/hamburg/1-filiale-hamburg`) if "Remove IDs from URLs" is enabled,
- `/component/kickmap/…` URLs.

Unknown paths return a 404 error.

## Detail Page

The detail page shows the image, address, contact details, map, directions link, opening status, opening hours with special opening hours, description, gallery, links, contact persons, tags, custom fields, and the contact area. Each section is a separate layout and can be customized via a [template override](./overrides).

For search engines, KickMap outputs structured data according to Schema.org (type configurable, including address, geo coordinates, and `openingHoursSpecification`).

## Many Locations

The map shows all locations matching the current filters, the list below it only one page of them. KickMap is designed for large
datasets. Measured on a test installation (Joomla 6, PHP 8.3, a page with a location list and two
map modules, opening hours for all locations):

| Locations | Page (uncompressed / compressed) | Server time |
|---|---|---|
| 5,000 | approx. 1.8 MB / 250 KB | approx. 0.7 s |
| 10,000 | approx. 3.6 MB / 450 KB | approx. 1.3 s |

The markers are clustered, and the browser stays smooth. For a very large number of locations:

- Enable **compression** in the web server (gzip/Brotli) or in Joomla (**System → Global Configuration → Server → Gzip Page Compression**).
  The map data shrinks to about one seventh.
- Don't additionally show map modules with **all** locations on the locations page: each map contains the
  marker data itself.
- Maintain opening hours via **templates**: locations with the same opening hours share the data on the map.
- With **Live filter**, only the data is reloaded when filtering, without rebuilding the page.
