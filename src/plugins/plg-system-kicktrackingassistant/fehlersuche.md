# Fehlersuche

## Es erscheint kein Banner

| Ursache | Lösung |
|---|---|
| Keine CMP gewählt oder IDs fehlen | Prüfe auf dem Tab **CMP & Dienste** Provider und ID. Ohne ID wird nichts ausgegeben. |
| **Cookiebot:** Die Domain ist nicht in der Domain-Gruppe hinterlegt | Lege die Domain im Cookiebot-Admin unter *Domains und Aliase* an. Im kostenlosen Tarif ist nur eine Domain erlaubt. |
| **CCM19:** Der API-Key enthält zusätzliche Zeichen | Im Quelltext siehst du `…app.js?apiKey=…%26domain%3D…`. Trage nur den Key ein. CCM19 antwortet sonst mit `invalid apikey, domain, theme or lang`. |
| Das Plugin ist deaktiviert | Aktiviere es unter **System → Plugins**. |
| Die Seite kommt aus einem Cache | Leere den Joomla-Cache und den Browser-Cache. |
| Auf dieser Seite ist der Banner im Menüpunkt ausgeblendet | Prüfe den Tab **Tracking Assistant** des Menüpunkts. |
| Der Banner wurde schon beantwortet | Lösche die Cookies und den lokalen Speicher deiner Domain und lade neu. |

## Der Banner erscheint doppelt
Die CMP wird zusätzlich im Template oder durch ein anderes Plugin geladen. Entferne diese Einbindung.

## Ein Skript läuft nicht nach der Einwilligung
- **Usercentrics:** Der Consentname muss exakt dem Dienstnamen in Usercentrics entsprechen. Wähle ihn aus der Liste.
- **Cookiebot:** Verwende `preferences`, `statistics` oder `marketing` und prüfe, dass der Besucher diese Kategorie erlaubt hat.
- **CCM19:** Die Gruppe im Plugin muss mit dem Feld **Gruppe für den Script-Loader** einer Einbindung in CCM19 übereinstimmen.
- Ein **nicht essentielles** Skript ohne Consentname wird nicht ausgegeben.

## Der Google Tag Manager lädt doppelt oder zu früh
Entferne den GTM aus dem Template oder anderen Plugins. Das Plugin muss den Standardwert vor dem GTM setzen. Im Quelltext muss `gtag('consent', 'default', …)` vor dem GTM-Skript stehen.

## Das Consent Update fehlt oder ist nicht vollständig
Das Update sendet die CMP, nicht das Plugin.

- **Usercentrics:** Prüfe im Usercentrics Admin die Zuordnung deiner Dienste zu den Google-Signalen.
- **Cookiebot und CCM19:** Prüfe, ob die jeweilige Google-Consent-Mode-Funktion in deinem CMP-Konto aktiviert ist.

Mit dem **Tag Assistant** oder dem **GTM-Vorschau-Modus** siehst du, welche Werte tatsächlich ankommen.

## Die Seite ist nach dem Update leer oder zeigt einen Fehler
Leere den Joomla-Cache und prüfe, ob alle Dateien des Plugins aktualisiert wurden. Wende dich bei bleibenden Problemen an den Support.

## Support
Kicktemp GmbH, Jungfernstieg 7, 20354 Hamburg  
Telefon: +49 40 609430300  
E-Mail: hello@kicktemp.com
