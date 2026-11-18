# Web Services API

Das Plugin **Web Services – KickMap** stellt die Daten über die Joomla-API bereit (JSON:API-Format). Es wird bei der Installation aktiviert.

## Endpunkte

Basis: `https://example.com/api/index.php`

| Endpunkt | Methoden |
|---|---|
| `/v1/kickmap/locations` | GET (Liste), POST |
| `/v1/kickmap/locations/{id}` | GET, PATCH, DELETE |
| `/v1/kickmap/opentemplates[/{id}]` | wie oben |
| `/v1/kickmap/specialopenings[/{id}]` | wie oben |
| `/v1/kickmap/categories[/{id}]` | Kategorien der Komponente |
| `/v1/fields/kickmap/location[/{id}]` | Custom Fields |
| `/v1/fields/groups/kickmap/location[/{id}]` | Feldgruppen |
| `/v1/kickmap/locations/{id}/contenthistory` | GET (Versionen), DELETE |
| `/v1/kickmap/locations/{id}/contenthistory/keep` | PATCH (Version dauerhaft behalten) |

Listen unterstützen die Joomla-Standardparameter `page[limit]`, `page[offset]` sowie `list[ordering]` und `list[direction]`.

## Beispiel

```bash
curl -H "X-Joomla-Token: <dein-token>" \
     -H "Accept: application/vnd.api+json" \
     "https://example.com/api/index.php/v1/kickmap/locations?page[limit]=20"
```

Neuer Standort:

```bash
curl -X POST -H "X-Joomla-Token: <dein-token>" \
     -H "Content-Type: application/json" \
     -d '{"title":"Filiale Kiel","catid":9,"street":"Holstenstraße 5","zipcode":"24103","city":"Kiel","lat":54.3233,"lng":10.1228,"language":"*","state":1}' \
     "https://example.com/api/index.php/v1/kickmap/locations"
```

Die Antwort enthält Adresse, Kontaktdaten, Öffnungszeiten (JSON), Tags und die Werte der Custom Fields.

## Authentifizierung

Den API-Token erzeugst du im Benutzerprofil unter **Joomla API-Token** (Plugins „API-Authentifizierung – Joomla-Token“ und „Benutzer – Joomla-Token“ müssen aktiv sein). Der Benutzer braucht das Recht **Web-Services-Anmeldung** (`core.login.api`).

## Berechtigung `core.api`

Seit **Joomla 5.4.11 bzw. 6.2.1** prüft Joomla bei jedem API-Aufruf zusätzlich das Recht **Zugriff auf Web Services** (`core.api`) der jeweiligen Komponente. KickMap bringt dieses Recht mit:

- Es erscheint unter **KickMap → Optionen → Berechtigungen**.
- Ohne eigene Einstellung wird es vom globalen Recht geerbt (**System → Globale Konfiguration → Berechtigungen**); dort hat standardmäßig nur die Gruppe „Super Users“ den Zugriff.
- Bei der Installation bzw. dem Update kopiert KickMap – wie das Joomla-Update für die Core-Komponenten – vorhandene Regeln von „Verwalten“ (`core.manage`) auf `core.api`, damit bestehende API-Zugänge weiter funktionieren.

Für die Kategorie-, Feld- und Versions-Routen prüft Joomla `core.api` ebenfalls gegen `com_kickmap`.

::: warning Fehler 403
Antwortet die API mit 403 „Du hast keine Zugriffsrechte“, fehlt dem Benutzer `core.api` für KickMap. Erlaube das Recht für seine Gruppe in den Berechtigungen der Komponente.
:::
