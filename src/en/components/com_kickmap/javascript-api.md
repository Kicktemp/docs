# JavaScript & Consent

The maps don't need any JavaScript of your own. For integrations (consent managers, custom filters, tracking), there is a small API based on DOM events.

## Map Container

Each map is an element with the attribute `data-kickmap` (options as JSON):

```html
<div class="kickmap-map" data-kickmap='{"provider":"leaflet","markers":[…]}'>
  <div class="kickmap-map__canvas"></div>
  <template class="kickmap-map__popup">…</template>
</div>
```

The scripts `com_kickmap.map.leaflet` and `com_kickmap.map.google` initialize all maps of their provider as soon as they become visible. Both scripts may be loaded at the same time.

## Events

| Event | Target | Meaning |
|---|---|---|
| `kickmap:ready` | Map element (bubbles) | The map is initialized. `event.detail` is the map instance. |
| `kickmap:markers` | Map element | Set new markers: `detail: { markers: [...], search: {lat, lng, radius, marker, color} \| null }` |
| `kickmap:consent` | `document` | Consent given – load all waiting maps |

### Consent from a Consent Manager

If "Load map after consent only" is enabled, each map waits for a click on "Load map". Your consent manager can release the maps directly:

```js
document.dispatchEvent(new Event('kickmap:consent'));
```

Consent given by click is stored in `localStorage` under `kickmap-consent-leaflet` or `kickmap-consent-google`. To revoke it, delete the entry.

### Reacting to a Map

```js
document.addEventListener('kickmap:ready', (event) => {
  const map = event.detail;
  console.log('Map ready', map.options.provider);
});
```

### Setting Your Own Markers

```js
const el = document.querySelector('.kickmap-map');
const data = await fetch('/standorte?format=json&filter_tag[]=2').then((r) => r.json());

el.dispatchEvent(new CustomEvent('kickmap:markers', {
  detail: { markers: data.markers, search: data.search },
}));
```

## Creating a Map Later

For content loaded via AJAX:

```js
window.KickMap.create(document.querySelector('#my-map'));
```

`KickMap.create()` selects the provider from `data-kickmap.provider`. The provider's script must be loaded (`KickMap.providers` lists the loaded ones).

## Opening Status

Elements with `data-kickmap-hours` (opening windows as timestamps) receive the status text and the classes `kickmap-openstatus--open` / `--closed`. They are updated every minute.
