# Filters & Radius Search

## Filters

You choose which filters appear in the options or in the menu item under **Filters**:

| Filter | Effect |
|---|---|
| Search | Full-text search in title, company name, street, postcode and city |
| Postcode or city + Radius | Radius search, see below |
| Category | including subcategories |
| Tag | |
| Open now | only locations that are currently open |
| Featured | only featured locations |
| Custom Fields | selected fields, see [Categories, Tags & Fields](./categories-tags-fields#custom-fields) |

With **Show counts**, each option shows how many locations remain with the other selected filters, e.g. "Hamburg (3)".

With **Live filter**, the map and list update without a page reload when you change a filter. The URL is updated along the way, so filtered views can be linked.

## Radius Search

1. The visitor enters a **postcode or city** and selects the **radius** – or clicks **Use my location** (browser geolocation).
2. KickMap determines the coordinates (geocoding) and shows only locations within the radius, **sorted by distance**. The cards show the distance.
3. The map shows the **search location** and a **circle** with the radius; the map zooms to the circle.

Distances, the radius selection and the circle use the **Distance unit** from the options: kilometers or miles. You can override it per menu item, e.g. to use miles for an English-language locations page.

The search location and the circle can be turned off with the options "Show search location" and "Show radius as circle"; the color is configurable.

## URL Parameters

You can preset filters via the URL, e.g. for links from campaigns:

| Parameter | Example |
|---|---|
| `filter_search` | `?filter_search=hamburg` |
| `filter_address`, `filter_radius` | `?filter_address=20095&filter_radius=25` |
| `filter_lat`, `filter_lng` | `?filter_lat=53.55&filter_lng=10.0&filter_radius=50` |
| `filter_category[]` | `?filter_category[]=10` |
| `filter_tag[]` | `?filter_tag[]=2` |
| `filter_open` | `?filter_open=1` |
| `filter_featured` | `?filter_featured=1` |
| `filter_field[ID][]` | `?filter_field[1][]=dc` |
| `reset` | `?reset=1` resets all filters |

With `format=json`, the same URL returns the markers as JSON (used by the live filter).
