---
title: Update auf 1.5
description: Was sich mit Version 1.5 ändert und was Sie beim Update prüfen sollten
---

# Update auf 1.5

Version 1.5 macht den Kick Consent Manager fit für **Joomla 6** und stellt den Build auf Vite um. Das Update läuft wie gewohnt über **System → Erweiterungen → Update** oder durch Installieren des neuen Pakets über die alte Version. Daten und Einstellungen bleiben erhalten.

---

## Neue Mindestversionen

| | bisher | ab 1.5 |
|---|---|---|
| Joomla! | 5.x | **5.4 oder höher** (auch 6.x) |
| PHP | 8.1 | 8.1 oder höher |

Das **Backward-Compatibility-Plugin** von Joomla 6 wird nicht mehr benötigt. Auf Joomla 5.0 bis 5.3 lässt sich 1.5 nicht installieren, die Installation bricht mit einem Hinweis ab. Diese Joomla-Versionen werden nicht mehr gepflegt.

---

## Was sich ändert

**Dateinamen ohne Version.** Aus `kcm.1.4.3.min.js` wird `kcm.min.js`, aus `kcm.1.4.3.css` wird `kcm.min.css`. Die Version hängt Joomla als Cache-Buster an (`kcm.min.js?1.5.0`). Alte Dateien entfernt das Update automatisch.

**Plugins mit Namespace.** Beide Plugins sind moderne Joomla-Plugins mit Service-Provider. Die alte Datei `kickconsentmanager.php` wird beim Update gelöscht, die Plugins bleiben aktiv.

**Datenbank.** Datumsfelder ohne Wert enthalten `NULL` statt `0000-00-00 00:00:00`. Das Update `1.5.0.sql` wandelt bestehende Einträge um. Eigene Auswertungen oder SQL-Abfragen, die auf das Nulldatum prüfen, müssen auf `IS NULL` umgestellt werden.

**Statistik.** Die Statistik zählt jetzt **Besucher** (UUID) mit ihrer letzten Entscheidung im Zeitraum statt einzelner Einträge, kennt „Alles / Auswahl / Nur notwendige“ und wendet den Zeitraumfilter tatsächlich an. Die Prozente weichen deshalb nach dem Update von früheren Auswertungen ab, zum Beispiel, wenn Besucher ihre Auswahl mehrfach gespeichert haben. Details stehen unter [Statistiken](./statistics).

**Sicherheit.** Der CSV-Export der Statistik verlangt das Recht „Statistiken verwalten“ (`core.manage.statistics`), die Ansicht Import / Export das Recht `core.admin`. Die Website-Registrierung im Backend und das manuelle Bereinigen der Einwilligungen prüfen jetzt ein CSRF-Token. Die Registrierung verlangt außerdem das Recht `core.admin` für die Komponente.

**Barrierefreiheit und Farben.** Die Standardfarben wurden für ausreichenden Kontrast angepasst (Blau `#0077b3`, dunklere Grautöne und Schalterfarben). Bereits gespeicherte Design-Einstellungen bleiben unverändert. Mit **Design auf Standard zurücksetzen** übernehmen Sie die neuen Werte. Die Schalter sind jetzt per Tastatur bedienbar, siehe [Barrierefreiheit](./frontend#barrierefreiheit).

**Weitere Neuerungen**

- Optionaler [Button zum erneuten Öffnen](./configuration#button-zum-erneuten-offnen) (standardmäßig aus)
- Öffnen per `data-kcm-open` oder `.kcm-js-open`
- Einstellung für den [Fokusring](./configuration#barrierefreiheit-fokusring), Banner als Dialog ausgezeichnet
- Button **Design auf Standard zurücksetzen** im Tab „Design“
- Statistik mit Verteilung, Zustimmungsrate pro Service, Tagesverlauf, Konfigurationsversion-Filter und CSV-Export
- [Google Tag Manager und Consent Mode v2](./google-consent-mode) als Option im Tab „Google“ (aus, solange keine GTM-ID eingetragen ist)
- [Import / Export](./import-export) für Kategorien, Services, Cookies, Scripts und Einstellungen
- Die [Cookie-Erklärungsseite](./frontend#cookie-erklarungsseite-optional) bleibt erhalten und ist jetzt ausdrücklich optional

---

## Was Sie prüfen sollten

1. **Eigene Einbindungen.** Wenn Sie die KCM-Dateien selbst eingebunden haben (zum Beispiel `<script src=".../kcm.1.4.3.min.js">` in einem Template), stellen Sie auf die neuen Namen oder besser auf den [WebAssetManager](./architecture#media) um.
2. **Template-Overrides und Custom-CSS.** Die CSS-Klassen des Banners sind unverändert. Neu ist nur `.kick-kcm-reopen` für den Button.
3. **Links auf die Cookie-Erklärungsseite.** Menüpunkte und Links funktionieren weiter.
4. **Eigener JavaScript-Code.** `window.KICK_KCM` und die Events sind unverändert. `showPreferenceCenter()` öffnet jetzt auch dann den Dialog, wenn gerade kein Banner im DOM ist. Die [JavaScript-API](./javascript-api) listet alles auf.
5. **Cache.** Leeren Sie den Joomla-Cache und gegebenenfalls ein CDN, falls dort alte Dateien liegen.

---

## Entfernt

- Die Konfigurationsoption `publicPath` im Banner-Script. Sie war ein Relikt des alten Build-Systems und wird nicht mehr ausgewertet.
