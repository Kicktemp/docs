# Smart Search

The plugin **Smart Search - KickMap** adds locations to the Joomla search (`com_finder`).

## Setup

1. Check under **System → Plugins** that "Smart Search - KickMap" is enabled (this happens during installation).
2. Build the index under **Components → Smart Search → Index** – or from the command line:
   ```bash
   php cli/joomla.php finder:index
   ```
3. Create a menu item **Smart Search → Search** or use the "Smart Search" module.

After that, Joomla automatically keeps the index up to date when locations are saved, published and deleted.

## What Is Indexed?

- Title and description
- Company name, street, postcode, city, region, country, phone, email and tags
- Metadata (meta description, keywords)
- Custom fields for which "Searchable" is set under **Smart Search → Search Index** on the field

Only published locations in published categories appear in the results; access level and publishing period are taken into account. The results link to the location's [SEF URL](./frontend#urls).

## Taxonomies (Filters in the Advanced Search)

In the plugin, you choose which taxonomies are created:

| Taxonomy | Content |
|---|---|
| Type | "Location" |
| Category | nested categories |
| Language | language of the location |
| Tag | tags of the location |
| Region | state / region |
| Country | country |

Custom fields with "Taxonomy" in the search index are additionally created as their own taxonomy. In the advanced search (menu item: "Advanced Search"), the visitor can filter by them.
