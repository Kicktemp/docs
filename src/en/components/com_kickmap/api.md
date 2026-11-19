# Web Services API

The plugin **Web Services - KickMap** provides the data via the Joomla API (JSON:API format). It is enabled during installation.

## Endpoints

Base: `https://example.com/api/index.php`

| Endpoint | Methods |
|---|---|
| `/v1/kickmap/locations` | GET (list), POST |
| `/v1/kickmap/locations/{id}` | GET, PATCH, DELETE |
| `/v1/kickmap/opentemplates[/{id}]` | as above |
| `/v1/kickmap/specialopenings[/{id}]` | as above |
| `/v1/kickmap/categories[/{id}]` | Categories of the component |
| `/v1/fields/kickmap/location[/{id}]` | Custom fields |
| `/v1/fields/groups/kickmap/location[/{id}]` | Field groups |
| `/v1/kickmap/locations/{id}/contenthistory` | GET (versions), DELETE |
| `/v1/kickmap/locations/{id}/contenthistory/keep` | PATCH (keep version forever) |

Lists support the Joomla standard parameters `page[limit]`, `page[offset]` as well as `list[ordering]` and `list[direction]`.

## Example

```bash
curl -H "X-Joomla-Token: <your-token>" \
     -H "Accept: application/vnd.api+json" \
     "https://example.com/api/index.php/v1/kickmap/locations?page[limit]=20"
```

New location:

```bash
curl -X POST -H "X-Joomla-Token: <your-token>" \
     -H "Content-Type: application/json" \
     -d '{"title":"Filiale Kiel","catid":9,"street":"Holstenstraße 5","zipcode":"24103","city":"Kiel","lat":54.3233,"lng":10.1228,"language":"*","state":1}' \
     "https://example.com/api/index.php/v1/kickmap/locations"
```

The response contains the address, contact details, opening hours (JSON), tags and the values of the custom fields.

## Authentication

You generate the API token in the user profile under **Joomla API Token** (the plugins "API Authentication - Web Services Joomla Token" and "User - Joomla API Token" must be enabled). The user needs the permission **Web Services Login** (`core.login.api`).

## Permission `core.api`

Since **Joomla 5.4.11 and 6.2.1**, Joomla additionally checks the permission **Access Web Services** (`core.api`) of the respective component on every API call. KickMap ships with this permission:

- It appears under **KickMap → Options → Permissions**.
- Without its own setting, it is inherited from the global permission (**System → Global Configuration → Permissions**); there, by default only the "Super Users" group has access.
- During installation or update, KickMap – like the Joomla update does for the core components – copies existing rules from "Access Administration Interface" (`core.manage`) to `core.api`, so that existing API access keeps working.

For the category, field and version routes, Joomla also checks `core.api` against `com_kickmap`.

::: warning Error 403
If the API responds with 403 "You don't have permission to access this", the user lacks `core.api` for KickMap. Allow the permission for the user's group in the component's permissions.
:::
