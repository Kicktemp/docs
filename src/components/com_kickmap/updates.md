---
title: Updates & Lizenz
description: Download-Key eintragen und Website auf kicktemp.shop registrieren
---

# Updates & Lizenz

KickMap wird über den Joomla-Updater aktualisiert (**System → Update → Erweiterungen**). Die Updates kommen von
kicktemp.shop. Damit ein Update geladen werden kann, braucht Joomla

1. den **Download-Key** aus deinem Kundenkonto und
2. eine **registrierte Website**: Die Domain muss in deinem Kundenkonto eingetragen sein.

Beides erledigst du in **Komponenten → KickMap → Optionen → Updates & Lizenz**.

## Download-Key eintragen

1. Melde dich auf [kicktemp.shop](https://kicktemp.shop) an und kopiere den Download-Key aus deinem Kundenkonto.
2. Füge ihn im Feld **Download-Key** ein und speichere die Optionen.

Der Key wird im Update-Server von KickMap gespeichert, genau wie bei allen Joomla-Erweiterungen mit Download-Key.
Du siehst und änderst ihn deshalb auch unter **System → Update-Server → KickMap**. Erlaubt sind Buchstaben, Ziffern,
Punkt, Bindestrich und Unterstrich.

## Website registrieren

1. Öffne in deinem Kundenkonto **Dashboard → Websites** und kopiere den Token.
2. Füge ihn im Feld **Website registrieren** ein und klicke **Jetzt registrieren**.

KickMap sendet die Domain dieser Website zusammen mit dem Token an kicktemp.shop. Der Token wird nicht gespeichert.
Für die Registrierung braucht der Benutzer die Berechtigung **Konfigurieren** von KickMap.

## Was beim Update übertragen wird

Beim Herunterladen eines Updates hängt das Plugin **System – KickMap** an die Download-Adresse an:

| Wert | Beispiel |
|---|---|
| Download-Key | aus dem Update-Server |
| Domain | `www.example.com` |
| Joomla-Version | `6.2.1` |
| PHP-Version | `8.3.27` |

Damit prüft kicktemp.shop, ob der Key für diese Domain gilt. Andere Daten werden nicht übertragen, und es gibt keine
Verbindung zu kicktemp.shop außer bei der Update-Prüfung, beim Update-Download und bei der Registrierung.

## Probleme

- **„Download-Key fehlt“ in der Update-Liste:** Key in den Optionen eintragen.
- **Update schlägt mit 403 fehl:** Website nicht registriert oder Key gehört zu einem anderen Konto.
- **„Kein Update-Server eingetragen“:** Unter **System → Update-Server** prüfen, ob „KickMap“ vorhanden und aktiviert
  ist, oder das Paket erneut installieren.
