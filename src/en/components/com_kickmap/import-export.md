---
title: Import & Export (CSV)
description: Import and export locations via CSV from Excel or other systems
---

# Import & Export (CSV)

You can export and import locations as a CSV file, e.g. for a branch list from Excel, a migration from another system,
or bulk changes. You can find both functions in **Components → KickMap → Locations** under the **CSV** button.

## Export

**CSV → Export (CSV)** downloads all locations in the list with the currently applied filters (search, status,
category, language …), regardless of pagination.

- Format: UTF-8 with BOM, semicolon as delimiter. Excel opens the file directly, including umlauts.
- It contains all fields, the category as a path (`norddeutschland/hamburg`), tags (separated by `|`), all custom
  fields as `field:fieldname` columns, and opening hours, images, gallery, social links, contact persons, and numbers as JSON.
- Cells that start with `=`, `+`, `-`, or `@` (and are not a number) are prefixed with a `'`. This prevents Excel from
  executing them as formulas. The import removes the character again.

You can re-import an export unchanged without anything changing.

## Import

**CSV → Import (CSV)** opens the import page. There, use **Download template** to download a file with all
columns and an example row. A simple file looks like this:

```csv
title;street;zipcode;city;country;phone;category;tags;lat;lng
Filiale Hamburg;Mönckebergstraße 1;20095;Hamburg;Deutschland;040 123456;Norddeutschland/Hamburg;Elektroauto Laden|Neu;53,5511;9,9937
```

[Download example file](../../../components/com_kickmap/assets/kickmap-import-example.csv)

### Options

| Option | Description |
|---|---|
| Mode | Create new and update existing, only create new, or only update existing |
| Detect existing by | **ID** (column `id`, for an export from the same site), **Alias** (column `alias` + language, e.g. from another site), or not at all |
| Default category | For new locations without a `category` column |
| Create missing categories | Create categories from the `category` column, including nested ones (`Norddeutschland/Hamburg`) |
| Delimiter | Detect automatically, semicolon, comma, or tab |
| Dry run | Checks the file and shows for each row what would happen, without saving (default) |

After the import, the page shows the result: new, updated, skipped, and errors, each with row number and reason.

### Columns

- `title` is **required**. For updates only, `id` (or `alias`) is enough, e.g. a file with just `id;phone`.
- Column names from other systems are recognized, e.g. `Name`, `Straße`/`address`, `PLZ`/`zip`, `Ort`, `Land`,
  `Telefon`, `E-Mail`, `URL`, `Latitude`/`Longitude`, `Kategorie`, `Sprache`. Unknown columns are ignored.
- `category`: ID, title (searched in the entire category tree), or path from the top level (`Norddeutschland/Hamburg`).
- `tags`: titles separated by `|`. Unknown tags are created.
- `field:fieldname`: value of a custom field; for multiple selections, separated by `|`.
- `lat`, `lng`: period or comma as decimal separator.
- `language`: e.g. `de-DE` or `*` (default).
- `publish_up`, `publish_down`: `YYYY-MM-DD` or `YYYY-MM-DD HH:MM:SS` in UTC.
- JSON columns (`openinghours`, `images` …): an empty cell changes nothing, `[]` clears the value.
- Tags and custom fields are preserved during an update if the file has no column for them.

### What Happens During the Import

Each row is validated and saved just like when saving in the backend:

- Permissions: creating requires "Create" in the category, updating requires "Edit" (or "Edit Own").
  Locations that someone else is currently editing are not changed.
- With an active **workflow**, the import does not set the status and "Featured" directly; new locations start in the
  initial stage of the workflow.
- Versions, tags, custom fields, and Smart Search are updated as usual.
- Limits: 10 MB and 5000 rows per file. Excel CSV in Windows-1252 is automatically converted to UTF-8.

### Coordinates

Rows without `lat`/`lng` are saved without coordinates and do not appear on the map yet. Afterwards, determine them
in the location list with **Geocode missing coordinates** (25 locations per click, see [Locations](./locations)).
