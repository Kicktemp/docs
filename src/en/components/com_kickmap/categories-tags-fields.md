# Categories, Tags & Fields

KickMap uses Joomla's built-in features instead of its own special fields. This keeps the extension suitable for every industry.

## Categories

**KickMap → Categories** are normal Joomla categories (`com_kickmap`), nested as deeply as you like, e.g. regions:

```
Norddeutschland
└── Hamburg
Süddeutschland
```

- Each location belongs to exactly one category.
- In the **KickMap** tab of a category, you set the **Marker shape**, **Marker image**, **marker colour** and **Replace colours** ([Markers](./locations.md#markers)) – all locations directly in this category get this marker. Subcategories do not inherit it, they need their own.
- Filters and menu items by category **include subcategories**.
- Categories get their own menu items (**Locations of a category**) and their own URLs, see [Menu items & URLs](./frontend).

## Tags

Tags are suitable for characteristics that cut across the categories, e.g. brands, services or “EV charging station”.

- You assign tags in the location (right column) or via batch processing.
- In the frontend: “Tag” filter, display on the map and detail page, restricting menu items to tags.
- The Joomla tag page (`com_tags`) also lists locations.

## Custom Fields

Under **KickMap → Fields**, you create your own fields for locations (context “Location”), e.g. “Charging station” (list), “Payment methods” (checkboxes) or “Branch manager” (text). Field groups create their own tabs in the location.

- **Output:** The fields appear on the detail page according to the field option “Automatic Display”.
- **As a filter:** You can offer fields of the type list, radio or checkboxes (and text as a free-text search) as filters. To do so, select the entry “Custom fields” under **Filters** in the options or in the menu item and select the fields under **Filterable fields**. The options show the number of results, e.g. “DC Schnelllader (2)”.
- **In Smart Search:** On the field, set **Smart Search → Search Index** to “Make searchable”, “Add as taxonomy” or both. The Joomla default is “Don't make searchable” – then the field values are not found.
- **In the API and YOOtheme:** Field values are available in the Web Services API and as dynamic content in YOOtheme Pro.

Custom fields can be switched off completely in the options (“Integration” tab).
