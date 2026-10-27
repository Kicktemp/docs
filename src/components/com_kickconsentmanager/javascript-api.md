---
title: JavaScript-API
description: Funktionen, Events und Cookie-Format des Kick Consent Managers für Entwickler
---

# JavaScript-API

Sobald das Banner-Script geladen ist, steht im Browser das Objekt `window.KICK_KCM` zur Verfügung. Damit lässt sich der KCM aus eigenem Code steuern, zum Beispiel aus einem Footer-Link, einem Template oder einem Tag-Manager.

::: tip Link statt Code
Zum Öffnen der Cookie-Einstellungen brauchen Sie meistens keinen eigenen Code. Ein Element mit `data-kcm-open` oder der Klasse `kcm-js-open` genügt, siehe [Frontend](./frontend#eigener-link-oder-button).
:::

---

## Funktionen

| Funktion | Beschreibung |
|---|---|
| `showPreferenceCenter()` | Öffnet das Preference Center. Ist ein Banner offen, wechselt es dorthin. Gibt es ein Element mit der ID `kcm-preference-center`, wird es dort eingebettet. Sonst öffnet es einen Dialog mit der gespeicherten Auswahl. |
| `closeKcm()` | Schließt ein über den Button oder `showPreferenceCenter()` geöffnetes Banner, ohne die Einwilligung zu ändern. Der Fokus springt auf den Reopen-Button. |
| `status()` | Gibt den Inhalt des Cookies `kcm_data` als Objekt zurück (siehe unten). |
| `reload()` | Liest die Konfiguration neu ein und startet die Banner-Logik erneut. |
| `triggerOptIn()` | Speichert die im Banner aktuell gewählten Einstellungen, wie der Button „Speichern“. |
| `triggerSoiOptIn()` | Wie `triggerOptIn()`, aber ohne Button-Animation. |
| `triggerSoiOptOut()` | Lehnt alle optionalen Services ab (wie „Notwendige Cookies akzeptieren“). |
| `triggerOptOut()` | Löscht die gespeicherte Einwilligung, meldet das an die Consent-URL und schaltet die Services wieder ab. |
| `triggerServiceOptIn(service)` | Fügt einen einzelnen Service zur bestehenden Einwilligung hinzu. `service` ist der Alias des Services. Nützlich für Inhalte, die erst auf Klick laden, etwa ein Video. |
| `triggerInlineOptIn()` | Speichert die Auswahl der [Cookie-Erklärungsseite](./frontend#cookie-erklarungsseite-optional). |
| `triggerApplyInlinePrivacySettings()` | Setzt die gespeicherte Auswahl in die Schalter der Cookie-Erklärungsseite. |
| `applyGDPR()` | Aktiviert die Banner-Logik für Besucher, bei denen die DSGVO zunächst nicht als gültig angenommen wurde. |
| `previewModeOn()` / `previewModeOff()` | Setzt oder entfernt das Cookie für den Vorschau-Modus. |
| `verboseModeOn()` / `verboseModeOff()` | Schaltet ausführliche Konsolenausgaben des KCM ein oder aus. |

```js
// Beispiel: Einstellungen aus eigenem Code öffnen
document.querySelector('#cookie-link').addEventListener('click', (event) => {
  event.preventDefault();
  window.KICK_KCM.showPreferenceCenter();
});

// Beispiel: Prüfen, ob der Besucher zugestimmt hat
const status = window.KICK_KCM.status();
if (status && status.opt_in && status.services.includes('youtube')) {
  // Service „youtube“ ist erlaubt
}
```

---

## Events

Der KCM meldet Aktionen als **`postMessage`** an das eigene Fenster. Der Wert der Nachricht ist der Event-Name als Text.

```js
window.addEventListener('message', (event) => {
  if (event.origin !== window.location.origin) return;

  if (event.data === 'kcm_soi_optin_done') {
    // Der Besucher hat seine Einwilligung gespeichert
  }
});
```

Zusätzlich sammelt der KCM alle gesendeten Events mit Zeitstempel in `window.KICK_KCM.eventCollection` (hilfreich zum Debuggen).

| Event | Wann |
|---|---|
| `kcm_shown` | Banner oder Wall wurde angezeigt |
| `kcm_has_optedin` | Beim Seitenaufruf: Der Besucher hat bereits zugestimmt, das Banner bleibt aus |
| `kcm_no_cookies_allowed` | Der Browser erlaubt keine Cookies |
| `kcm_optin_done` | Die Einwilligung wurde im Cookie `kcm_data` gespeichert |
| `kcm_optin_done_button_clicked` | Klick auf „Speichern“ oder „Alle akzeptieren“ |
| `kcm_soi_optin_done` | Einwilligung wurde gespeichert und das Banner geschlossen |
| `kcm_optout_done_button_clicked` | Klick auf „Notwendige Cookies akzeptieren“ |
| `kcm_soi_optout_done` | Ablehnung wurde gespeichert |
| `kcm_click_advanced_settings` | Klick auf „Individuelle Einstellungen“ |
| `kcm_click_back_to_main` | Klick auf „Einstellungen schließen“ |
| `kcm_as_cpc_privacy_selected` | Auswahl im Preference Center wurde gespeichert |

### Events im `dataLayer`

Ist der [Google Consent Mode](./google-consent-mode) aktiv, schreibt der KCM zusätzlich in `window.dataLayer`:

| Eintrag | Wann |
|---|---|
| `consent default` (über `gtag`) | Beim Seitenstart, vor Banner und Tag Manager |
| `consent update` (über `gtag`) | Beim Seitenaufruf mit gespeicherter Entscheidung, nach jeder Entscheidung und beim Widerruf |
| `{event: 'kcm_consent_update', …}` | Zu jedem Update, mit allen Signalen (`granted` / `denied`) als Eigenschaften. Als Trigger im Tag Manager nutzbar. |

Die Events pro Service (`consents_initialized`, `consent_changed …`) bleiben unverändert.

::: warning Besonderheit der Cookie-Erklärungsseite
Das Speichern über `triggerInlineOptIn()` (Cookie-Erklärungsseite) sendet derzeit `kcm_soi_optout_done`, nicht `kcm_soi_optin_done`. Werten Sie in diesem Fall besser das Cookie über `status()` aus.
:::

Die Namen `kcm_optout_done`, `kcm_hide_layer`, `kcm_click_company_list` und `kcm_click_thirdparty_list` sind reserviert, werden aber aktuell nicht gesendet.

---

## Das Cookie `kcm_data`

Die Entscheidung des Besuchers steht als JSON im Cookie `kcm_data` (Laufzeit: Einstellung „Cookie-Laufzeit“).

```json
{
  "uuid": "ad4db06d-31b4-4f38-adc3-b49e9e61c9b4",
  "opt_in": true,
  "localeVariantName": "*",
  "localeVariantVersion": 1,
  "serviceCategories": ["essential", "statistics"],
  "services": ["googleanalytics"],
  "configVersion": 1
}
```

| Feld | Bedeutung |
|---|---|
| `uuid` | Zufällige ID des Besuchers, dient dem Nachweis im [Consent-Protokoll](./consents) |
| `opt_in` | `true`, sobald eine Entscheidung gespeichert wurde |
| `serviceCategories` | Aliase der erlaubten Kategorien |
| `services` | Aliase der erlaubten Services |
| `configVersion` | Konfigurationsversion zum Zeitpunkt der Entscheidung. Erhöhen Sie die Version in den Einstellungen, um die Einwilligung erneut einzuholen. |

Dieselben Daten sendet der KCM per POST an die Consent-URL (`index.php?option=com_kickconsentmanager&task=consent.log`), damit der Nachweis in der Datenbank landet.
