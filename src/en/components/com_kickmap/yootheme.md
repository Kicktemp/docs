# YOOtheme Pro

If YOOtheme Pro is active, the plugin **System - KickMap** extends the page builder. Without YOOtheme, the plugin stays inactive.

## Templates

Under **Builder → Templates** there are three template types:

| Template | Page | Restrictions |
|---|---|---|
| KickMap Locations | Menu items "Locations" and "Featured locations" | Pages (first / others), language |
| KickMap Category | Menu item "Locations of a category" | Category, pages, language |
| KickMap Location | Detail page of a location | Category, tag, language |

## Dynamic Content

**Page** (in the matching template):

- *Location* – the current location,
- *Locations* – the filtered locations of the current list (with Start/Quantity),
- *KickMap List* – information about the current list, e.g. the number of locations found,
- *Category* – the current category.

**Custom** (on any page): *KickMap Locations* with categories, tags, "Open now", "Featured locations only" and quantity.

Fields of a location:

| Group | Fields |
|---|---|
| General | Title, Link, ID, Hits, Description, Featured |
| Address | Company name, Street, Postcode, City, Region, Country, Address (formatted), Location (lat, lng), Latitude, Longitude, Distance (for radius search), Directions link |
| Contact | Phone, Fax, Email, Website, Phone numbers, Contact persons |
| Images | Image, Image alt, Image text, Gallery |
| Opening hours | Open status (text), Open now (for conditions), Opening hours sections, Opening note, Special openings |
| Assignment | Category, Category link, Tags, Social links |
| Fields | all custom fields of the location |

## Elements

### KickMap Map

A map with locations.

- **Locations:** *Page* (the filtered locations of the current KickMap list, in the "KickMap Location" template the current location) or *Selection* (categories, tags, quantity).
- **Map provider**, **Height**, **Zoom** and **Cluster markers** – empty means component options.

### KickMap Filter

The filter form as a separate element, e.g. in a sidebar.

- **Filters:** Text search, Radius search, Category, Tags, Open now, Featured, Custom fields.
- **Target menu item:** On other pages (e.g. the home page), the form submits to this KickMap menu item.

::: tip Design the list yourself
Create a template for "KickMap Locations" with *KickMap Filter*, *KickMap Map* (source: Page) and a grid whose source is *Locations* (Page). For the number of results, use a headline with the source *KickMap List → Number of locations*.

When filtering, the page reloads because the builder renders the grid and map on the server. The live filter without reload only applies to the component's default output.
:::

## Requirements

- YOOtheme Pro 5 (tested with 5.0.56)
- The builder interface is translated into German and English.
