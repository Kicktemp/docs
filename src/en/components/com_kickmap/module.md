# Module "KickMap - Map"

The module shows a map with locations in any module position, independently of the component – e.g. on the home page or in the sidebar.

## Settings

| Option | Description |
|---|---|
| Category | Only locations in these categories (including subcategories); empty = all |
| Tags | Only locations with these tags |
| Featured locations only | |
| Link to the location list | Menu item for the "All locations" button below the map |
| Map provider | Global, Leaflet or Google Maps |
| Height | e.g. `300px` |
| Zoom | Initial zoom when the map does not zoom to the locations; "Use Global" = component options |
| Cluster markers | Global, Yes, No |

The remaining map settings (API key, markers, tile server, consent) come from the component options.

## Multiple Maps on One Page

The component, several modules and YOOtheme elements can be on one page at the same time – even **with different providers** (e.g. Google in the component, Leaflet in the module). Each map only loads when it scrolls into view.

::: info Consent per provider
If "Load map after consent only" is enabled, consent applies per provider: a visitor who has consented to Google still only sees a Leaflet map after clicking "Load map".
:::
