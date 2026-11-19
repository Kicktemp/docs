# Privacy

## Leaflet / OpenStreetMap

- Leaflet and marker clustering are included **locally** in the package; no CDN is used.
- The browser loads the **map tiles** from the configured tile server (default: `tile.openstreetmap.org`). In doing so, the visitor's IP address is transmitted to the tile server.
- To run without third parties, enter your own tile server.

::: warning OpenStreetMap usage policy
The OpenStreetMap tile servers are intended for low load. For high-traffic sites, use a commercial provider or your own server.
:::

## Google Maps

Google Maps loads scripts and tiles from Google servers, and Google may set cookies in the process. Google Maps usually requires consent.

## Two-Click Solution

The option **Options → Map → Load map after consent only** is enabled by default: each map initially shows only a notice and the **Load map** button. Only after the click are the provider's scripts or tiles loaded.

- The notice text is configurable (e.g. with a link to your privacy policy).
- Consent applies **per provider** and is stored in the browser's `localStorage` (no cookie).
- A consent manager can release the maps via an event, see [JavaScript & Consent](./javascript-api#consent-from-a-consent-manager).

## Geocoding

- In the **backend**, addresses are sent to Nominatim or Google when you click "Find address".
- In the **frontend**, the radius search sends the entered postcode / city **from the server** to the geocoding service – not from the visitor's browser. Results are cached for 30 days, addresses that were not found for one day. Mention this in your privacy policy.
- To protect against abuse (costs with Google, Nominatim's terms of use), KickMap only geocodes visitor input if the "Postcode or city" filter is enabled, only up to 200 characters and at most 30 new addresses per IP in 10 minutes. For this, the IP is only cached as a hash.
- **Google:** The API key from the options is visible in the frontend (Maps JavaScript API). Restrict it to your domain (HTTP referrer) in the Google Cloud Console. For geocoding from the server, enter a separate key restricted to the server IP under **Geocoding** ("Google Geocoding API key").
- "My location" uses the browser's geolocation. It only happens after the visitor consents in the browser; the coordinates are only used for the search.

## Updates

When checking for updates and downloading an update, the download key, domain, and Joomla and PHP versions are transmitted to
kicktemp.shop; when registering the website, the domain. Details: [Updates & License](./updates).
