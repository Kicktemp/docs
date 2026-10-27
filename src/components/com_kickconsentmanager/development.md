---
title: Entwicklung
description: Build, lokale Entwicklung und Release des Kick Consent Managers
---

# Entwicklung

Diese Seite richtet sich an Entwickler, die am KCM mitarbeiten oder ihn selbst bauen.

---

## Voraussetzungen

- Node.js 20 oder höher (die Datei `.nvmrc` nennt die empfohlene Version, aktuell 22)
- PHP 8.1 oder höher zum Linten
- Optional: lokale Joomla-Installationen in `dist5/` und `dist6/`

```bash
npm ci
```

---

## Ordnerstruktur

| Ordner | Inhalt |
|---|---|
| `src/scripts/`, `src/styles/` | JavaScript und SCSS des Banners |
| `src/structure/` | Die Joomla-Dateistruktur (Komponente, Plugins, Medien, Paket-Manifest). **Hier wird bearbeitet.** |
| `src/template.html` | Dev-Seite für den Vite-Dev-Server |
| `scripts/run.js`, `scripts/tasks/` | Alle Build-Aufgaben als Funktionen |
| `config.js` | Pfade, Archive und Platzhalter |
| `build/` | Ausgabe des Vite-Builds (nicht eingecheckt) |
| `dist5/`, `dist6/` | Lokale Joomla-Installationen, in die kopiert wird (nicht eingecheckt) |
| `docs/` | Diese Dokumentation (VitePress) |

Bearbeiten Sie nie Dateien in `dist5/` oder `dist6/`, sie werden überschrieben.

---

## Befehle

| Befehl | Zweck |
|---|---|
| `npm run build` | Vite-Build nach `build/` (feste Dateinamen ohne Version) |
| `KCM_DEBUG=1 npm run build` | Unminifizierter Build, der die `console`-Ausgaben behält. Der normale Build entfernt sie. |
| `npm run dev` | Vite-Dev-Server mit `src/template.html` auf Port 3000 |
| `npm run copy` | Kopiert `src/structure/` und `build/` nach `dist5/` und `dist6/` (Platzhalter werden ersetzt) |
| `npm run watch` | Baut, kopiert und beobachtet Änderungen dauerhaft |
| `npm run buildIntern` | Aufräumen, Build, Release-Dateien, Zips (kein `update.xml`) |
| `npm run release` | Wie `buildIntern`, danach `update.xml` aktualisieren |
| `npm run download:joomla5` / `download:joomla6` | Lädt die aktuelle Joomla-Version nach `dist5/` bzw. `dist6/` |
| `npm run docs:dev` / `docs:build` | Dokumentation lokal ansehen oder bauen |

Schlägt ein Task fehl (zum Beispiel beim Kopieren), endet der Befehl mit einem Fehlercode.

---

## Wie der Build aufgebaut ist

1. **Vite** baut jedes JavaScript-Bundle als eigenständiges IIFE (`kcm.min.js`, `kcmdevkit.min.js`) und die SCSS-Dateien als CSS. Der Locale-Chunk ist im Bundle enthalten, das Script bleibt also synchron ladbar.
2. **Platzhalter** wie `[VERSION]`, `[DATE]`, `[AUTHOR]` und `[COPYRIGHT]` werden beim Kopieren in PHP-, XML-, INI-, JSON- und HTML-Dateien ersetzt. `[VERSION]` stammt aus `package.json`, Datum und Copyright-Jahr aus dem Build-Datum.
3. **Pakete**: `npm run buildIntern` erzeugt unter `package/packages/` je ein Zip für Komponente und beide Plugins und daraus `archives/pkg_kcm_<version>.zip`.

---

## Release

1. Version in `package.json` erhöhen.
2. Eintrag in `changelog.xml` ergänzen (neuester Eintrag zuerst).
3. Committen, danach Tag setzen: `npm run publishtag` (legt `v<version>` an und pusht ihn).
4. Der Workflow `.github/workflows/release.yml` baut das Paket, legt das GitHub-Release an (Text aus `changelog.xml`), aktualisiert `update.xml` und schickt eine Nachricht an Discord.

Für die Discord-Nachricht muss im Repository das Secret `DISCORD_WEBHOOK` gesetzt sein. Fehlt es, überspringt der Workflow den Schritt mit einer Warnung.

### Prüfung bei Pull Requests

Der Workflow `.github/workflows/ci.yml` baut bei jedem Push und Pull Request das Paket, die Dokumentation und prüft die PHP-Syntax unter PHP 8.1, 8.3 und 8.4. Das gebaute Paket hängt als Artefakt am Lauf und kann zum Testen heruntergeladen werden.

---

## Changelog schreiben

`changelog.xml` ist die Quelle für Release-Notes und Discord. Erlaubte Abschnitte pro Version: `security`, `addition`, `change`, `fix`, `remove`, `language`, `note`, jeweils mit `<item>`-Einträgen.
