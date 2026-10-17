# Kick Tracking Assistant

CMP-Banner und Google Tag Manager mit Consent Mode v2 in Joomla – ohne Template-Eingriffe

## Vorteile des Kick Tracking Assistant
Das System-Plugin bindet deine Consent-Management-Plattform (CMP) und den Google Tag Manager (GTM) richtig und in der richtigen Reihenfolge in deine Joomla-Seite ein. Du wählst deinen Anbieter, trägst die IDs ein und das Plugin kümmert sich um den Rest:

- **Banner einbinden** für **Usercentrics**, **Cookiebot** und **CCM19** über eine einheitliche Oberfläche
- **Google Tag Manager mit Consent Mode v2**: Der Standardwert (`consent default`) wird immer **vor** dem CMP und dem GTM gesetzt
- **Eigene Skripte** (im `<head>` oder vor `</body>`) werden bis zur Einwilligung blockiert und danach freigegeben
- Funktioniert auch auf **Fehlerseiten** (zum Beispiel 404)
- Funktioniert ohne Eingriff in das Template

> [!NOTE]
> Das Plugin ersetzt keine CMP. Du benötigst weiterhin ein Konto bei Usercentrics, Cookiebot oder CCM19. Das Plugin sorgt für die korrekte Einbindung.

## Inhaltsverzeichnis
- [CMP einrichten](/plugins/plg-system-kicktrackingassistant/cmp-einrichten)
- [Google Tag Manager und Consent Mode v2](/plugins/plg-system-kicktrackingassistant/gtm-consent-mode)
- [Eigene Skripte blockieren](/plugins/plg-system-kicktrackingassistant/skripte)
- [Weitere Funktionen](/plugins/plg-system-kicktrackingassistant/weitere-funktionen)
- [Fehlersuche](/plugins/plg-system-kicktrackingassistant/fehlersuche)

## Voraussetzungen
- Joomla 5.x oder 6.x
- PHP 8.1 oder höher
- Ein Konto bei einer unterstützten CMP (Usercentrics, Cookiebot oder CCM19)
- Optional: ein Google Tag Manager Container

## Installation
Die Installation und das Update funktionieren wie bei allen Kicktemp-Plugins. Beachte die Anleitungen unter [Installation](/plugins/installation) und [Update](/plugins/update).

Nach der Installation findest du das Plugin im Joomla-Backend unter **System → Plugins** als **System – Kick Tracking Assistant**. Das Plugin ist nach der Installation aktiviert, gibt aber nichts aus, solange du keine CMP und keine GTM-ID eingetragen hast.

Die Einstellungen sind auf vier Tabs verteilt:

| Tab | Inhalt |
|---|---|
| **CMP & Dienste** | Anbieter wählen, Zugangsdaten eintragen, eigene Skripte verwalten |
| **Tag Manager** | GTM-ID und Consent Mode v2 |
| **Support** | Kontakt zu Kicktemp |
| **Website registrieren** | Registrierung der Website für Updates |

## Reihenfolge der Ausgabe
Das Plugin fügt alles direkt hinter dem öffnenden `<head>`-Tag ein, damit der Consent-Standardwert immer vor dem Banner und dem GTM gesetzt ist:

1. Vorab-Verbindungen (Preconnect/Preload, nur bei Usercentrics und aktivierter Option)
2. Consent Mode Standardwert (`gtag('consent', 'default', …)`)
3. CMP-Loader
4. Google Tag Manager

## Zusammenfassung
Mit dem Kick Tracking Assistant bindest du deine CMP und den Google Tag Manager mit Consent Mode v2 in wenigen Minuten sauber ein und blockierst eigene Skripte bis zur Einwilligung.
