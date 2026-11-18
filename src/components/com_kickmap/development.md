# Entwicklung

## Projektstruktur

```
src/structure/          PHP, XML, SQL, Sprachdateien (alle Erweiterungen)
  administrator/components/com_kickmap/
  components/com_kickmap/
  api/components/com_kickmap/
  media/com_kickmap/
  modules/mod_kickmap/
  plugins/{system,finder,webservices}/kickmap/
src/scripts/            JavaScript (Vite, IIFE-Bundles)
  map/core.js           Kartenkern, Provider-Registry, Consent
  map/provider-leaflet.js, map/provider-google.js
  map/openstatus.js     Status-Berechnung im Browser
  filter.js             Live-Filter
src/styles/             SCSS
docs/                   Diese Dokumentation (VitePress)
```

## Build

```bash
npm install
npm run build        # Vite: JS/CSS nach build/
npm run copy         # src/structure + build nach dist5/ und dist6/
npm run watch        # wie copy, laufend
npm run buildIntern  # Paket archives/pkg_kickmap_<version>.zip
npm run release      # buildIntern + update.xml
```

Platzhalter wie `[VERSION]` werden beim Kopieren aus `package.json` ersetzt.

## Dokumentation

```bash
npm run docs:dev      # lokaler Server mit Hot Reload
npm run docs:build    # statischer Build nach docs/.vitepress/dist
npm run docs:preview
```

Änderungen in `docs/components/com_kickmap/` werden beim Push auf `main` in das zentrale Doku-Repository synchronisiert.

## Code-Regeln

- Joomla 5.4+ / 6, PHP 8.1+, keine Abhängigkeit vom Backward-Compatibility-Plugin.
- Datenbank nur mit `createQuery()` und `bind()` / `ParameterType`; kein `Factory::getDbo()`, `Factory::getUser()`, `Table::getInstance()`.
- Sprachdateien de-DE und en-GB für alle Erweiterungen.
- `@since [VERSION]` an neuen Methoden.
