# JavaScript & Consent

Die Karten brauchen kein eigenes JavaScript. Für Integrationen (Consent-Manager, eigene Filter, Tracking) gibt es eine kleine API über DOM-Events.

## Karten-Container

Jede Karte ist ein Element mit dem Attribut `data-kickmap` (Optionen als JSON):

```html
<div class="kickmap-map" data-kickmap='{"provider":"leaflet","markers":[…]}'>
  <div class="kickmap-map__canvas"></div>
  <template class="kickmap-map__popup">…</template>
</div>
```

Die Skripte `com_kickmap.map.leaflet` und `com_kickmap.map.google` initialisieren alle Karten ihres Anbieters, sobald sie sichtbar werden. Beide Skripte dürfen gleichzeitig geladen sein.

## Events

| Event | Ziel | Bedeutung |
|---|---|---|
| `kickmap:ready` | Karten-Element (bubbelt) | Karte ist initialisiert. `event.detail` ist die Karten-Instanz. |
| `kickmap:markers` | Karten-Element | Neue Marker setzen: `detail: { markers: [...], search: {lat, lng, radius, marker, color} \| null }` |
| `kickmap:consent` | `document` | Zustimmung erteilt – alle wartenden Karten laden |

### Zustimmung aus einem Consent-Manager

Ist „Karte erst nach Zustimmung laden“ aktiv, wartet jede Karte auf einen Klick auf „Karte laden“. Dein Consent-Manager kann die Karten direkt freigeben:

```js
document.dispatchEvent(new Event('kickmap:consent'));
```

Die Zustimmung per Klick wird im `localStorage` unter `kickmap-consent-leaflet` bzw. `kickmap-consent-google` gespeichert. Zum Widerrufen den Eintrag löschen.

### Auf eine Karte reagieren

```js
document.addEventListener('kickmap:ready', (event) => {
  const map = event.detail;
  console.log('Karte bereit', map.options.provider);
});
```

### Eigene Marker setzen

```js
const el = document.querySelector('.kickmap-map');
const data = await fetch('/standorte?format=json&filter_tag[]=2').then((r) => r.json());

el.dispatchEvent(new CustomEvent('kickmap:markers', {
  detail: { markers: data.markers, search: data.search },
}));
```

## Karte nachträglich erzeugen

Für per AJAX nachgeladene Inhalte:

```js
window.KickMap.create(document.querySelector('#meine-karte'));
```

`KickMap.create()` wählt den Anbieter aus `data-kickmap.provider`. Das Skript des Anbieters muss geladen sein (`KickMap.providers` listet die geladenen).

## Öffnungsstatus

Elemente mit `data-kickmap-hours` (Öffnungsfenster als Zeitstempel) bekommen den Status-Text und die Klassen `kickmap-openstatus--open` / `--closed`. Sie werden jede Minute aktualisiert.
