# Locations

You manage locations under **Components → KickMap → Locations**. At the top, the list shows a map with all locations of the current page in their category markers – with OpenStreetMap or Google Maps, depending on the map provider in the options (can be switched off via “Map in the location list (backend)”):

- **Mouse over a row:** the marker is shown in red with a circle underneath.
- **Double-click on a row:** the marker stays highlighted in red and the map pans to it (without zooming).
- **Mouse over a marker** highlights the row, a **click** opens the location for editing.

## Editing a location

### “Details” tab

| Section | Fields |
|---|---|
| Address | Company name, street and number, postcode, city, state / region, country |
| Map | Latitude, longitude and a map for setting the position |
| Description | Free text with editor |
| Right column | Category, status, featured, access, language, tags, note, version note |

**Setting the coordinates:**

- **Find address** determines the coordinates from the address fields (geocoding via Nominatim or Google, see [Configuration](./configuration#geocoding)).
- Alternatively, click into the map or drag the marker. The address at that spot is then shown immediately below the map; clicking **Get address** next to it enters it into the address fields.
- If **Take over the address immediately when the marker is placed** is checked, the address fields are filled without confirmation (the browser remembers this setting).
- **Get address** above the map writes the address of the current marker position into the address fields (after confirmation).
- The map uses the map provider from the options (OpenStreetMap or Google Maps).

::: warning No coordinates, no map
Locations without coordinates appear in the list, but not on the map and not in the radius search. The dashboard shows how many locations are affected.
:::

### Other tabs

| Tab | Content |
|---|---|
| Contact | Phone, fax, email, website, additional phone numbers (label + number, e.g. “Workshop”) |
| Opening hours | Sections with weekly hours or a template, opening hours note – see [Opening hours](./opening-hours) |
| Images | Image (with alternative text), image text and its position, gallery (image + caption) |
| Links | Social media and other links (icon, text, URL) |
| Contact persons | Image, name, position, phone, email, link |
| Fields | Custom fields (only visible if fields have been created) |
| Display | Per location: show map, show contact area and own contact content, own marker image, alternative layout |
| Publishing | Created/modified, publishing period, hits, metadata, robots |
| Schema | Schema.org data (Joomla Schema.org plugins) |
| Associations | Translations of the location (on multilingual sites) |
| Permissions | Permissions for this location |

## Markers

Which marker appears on the map is determined in this order:

1. the location's own **Marker image** (“Display” tab),
2. the **Marker image or Marker shape of the category** (when editing the category, “KickMap” tab),
3. the **default marker** from the options (image, shape or the built-in pin).

The **colour** comes from the category, otherwise from the default colour in the options. With the option “Marker source: Always default marker”, the category is ignored.

### Marker shapes and custom SVG markers

KickMap ships with marker shapes (pin, pin with dot, star, shopping bag, house), which you select in the options or per category under **Marker shape**. They are coloured in the marker colour, so one shape is enough for all categories.

Your own SVG images work the same way: the colour `#000000` in the SVG is replaced with the marker colour. For multicoloured markers, you replace further colours under **Replace colours**, one line per colour:

```
#000000,#e6007e
#444444,#ffd200
```

Allowed are colour values (`#rgb`, `#rrggbb`, `rgb()`, `hsl()`, colour names). PNG and JPG images are displayed unchanged.

## Featured locations

You can display featured locations (star in the list) via the menu item **Featured locations**, in the module (“Featured locations only”) or as a filter.

## Batch processing

Via **Actions → Batch**, you change the category, language, access level and tags for several locations at once.
