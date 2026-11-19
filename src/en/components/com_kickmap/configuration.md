# Configuration

You can find the options under **Components → KickMap → Options**. Many settings can be overridden per menu item, module, or YOOtheme element.

## Map

| Option | Default | Description |
|---|---|---|
| Map provider | Leaflet | Leaflet (OpenStreetMap) or Google Maps |
| Google Maps API key | – | Required for Google Maps. Without a key, Leaflet is used automatically. |
| Google map ID | – | Enables Advanced Markers and cloud map styles. Without a map ID, classic markers are used. |
| Map type | Roadmap | Roadmap, Satellite, Hybrid, Terrain (Google) |
| Hide points of interest | Yes | Hides Google's shops/sights (only without a map ID) |
| Tile server (Leaflet) | `https://tile.openstreetmap.org/{z}/{x}/{y}.png` | Your own tile server, e.g. a self-hosted one or a commercial provider |
| Tile attribution | © OpenStreetMap | Attribution required by the tile provider |
| Load map after consent only | Yes | Two-click solution, see [Privacy](./privacy) |
| Consent text | – | Text of the consent notice (empty = default text) |
| Center latitude/Center longitude, Zoom | Germany, 6 | View when there are no locations |
| Zoom detail page | 15 | Zoom for a single location |
| Maximum zoom | 18 | |
| Fit to locations | Yes | The map section adjusts to the locations |
| Scroll wheel zoom | No | Off, so the page doesn't get stuck while scrolling |
| Cluster markers | Yes | Groups nearby markers; "Cluster up to zoom" 12 |
| Map height | 500px | |
| Map in the location list (backend) | Yes | |

::: tip Setting up Google Maps
1. In the [Google Cloud Console](https://console.cloud.google.com/), create a project and enable the **Maps JavaScript API** (for geocoding, also the **Geocoding API**).
2. Create an API key and restrict it to your domain (HTTP referrer).
3. Optionally, create a map ID (type JavaScript) under **Map Management**.
:::

## Marker

| Option | Default | Description |
|---|---|---|
| Marker shape | – | Bundled shape (pin, dot, star, shopping bag, house), colored in the marker color |
| Marker image | – | Your own image (SVG/PNG) as the default marker; takes precedence over the shape. In SVGs, `#000000` is replaced by the marker color |
| Default color | `#0099d9` | Color of the marker if the category has no color |
| Replace colours | – | Replace additional colors in SVG markers, one line per color, e.g. `#444444,#ffd200` ([more](./locations.md#marker-shapes-and-custom-svg-markers)) |
| Width / Height | 32 / 48 px | Size of the marker; the anchor point is bottom center |
| Marker source | Category | "Category of the location": use the category's marker; "Always default marker": always use the default marker |

## Geocoding

| Option | Default | Description |
|---|---|---|
| Geocoding service | Automatic | Automatic = Google if an API key is set, otherwise Nominatim |
| Google Geocoding API key | – | Separate key for geocoding (otherwise the Maps key) |
| Nominatim server | `https://nominatim.openstreetmap.org` | Your own Nominatim server is possible |
| Contact email for Nominatim | – | Sent along with requests (Nominatim usage policy) |
| Countries | `de` | ISO codes, e.g. `de,at,ch`; empty = worldwide |

Geocoding is used for "Find address" in the backend and for the radius search in the frontend. Results are cached for 30 days.

## List & Filter

| Option | Default | Description |
|---|---|---|
| Show filter | Yes | |
| Filters | Text search, Radius search (address / location), Category, Tags, Open now | Also possible: Featured, Custom fields |
| Filterable fields | – | Custom fields that appear as filters |
| Show counts | Yes | Numbers after the filter options |
| Live filter | No | Update results without reloading the page |
| Offer "my location" | Yes | Radius search using browser geolocation |
| Show search location | Yes | Marker at the search location |
| Show radius as circle | Yes | Circle with the search radius; color adjustable |
| Distance unit | Kilometres | Kilometres (km) or Miles (mi); applies to the radius, radius options, and distance information. Can be overridden per menu item. |
| Radius options | `10,25,50,100,250` | Selection in the filter, in the chosen unit |
| Default radius | 50 | In the chosen unit |
| Show map / Show list | Yes / Yes | |
| Ordering | Ordering | Ordering, Title, Postcode, City, Featured first. With a radius search, results are sorted by distance. |
| Select number of items per page, Pagination | 24 | |
| Show slider | No | List as a slider instead of a grid |
| Placeholder image | – | Image for locations without an image |

## Location (Detail Page)

| Option | Default | Description |
|---|---|---|
| Show map | Yes | |
| Show opening status | Yes | |
| Show special openings (days) | 60 | Preview period |
| Directions link | Yes | Google Maps or OpenStreetMap, depending on the provider |
| Category / Tags | Yes | |
| Show contact area | Yes | Free content with an editor; content plugins are executed (e.g. for a form) |
| Record Hits | Yes | |
| Default meta description | – | |
| Schema.org type | LocalBusiness | LocalBusiness, Store, Organization, or no output |

## Integration

Search engine friendly URLs (Remove IDs from URLs), versions, custom fields, and workflows – see [Menu Items & URLs](./frontend) and [Multilingual, Workflow & Versions](./multilingual-workflow).

## Permissions

In addition to the standard Joomla permissions, there are:

| Permission | Effect |
|---|---|
| Access Web Services (`core.api`) | Access via the Web Services API. As of Joomla 5.4.11 / 6.2.1, Joomla checks this permission on every API call, see [Web Services API](./api#permission-core-api). |
| Manage locations | Menu item and list of locations |
| Manage opening hours | Templates and special opening hours |
| Manage categories | Categories menu item |
| Manage fields | Fields and Field Groups menu items |
| Run transitions | Workflow transitions |
