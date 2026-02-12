# API & Looker Studio Integration

KickBannerStats stellt eine JSON-API über den Joomla API Wrapper bereit. Diese wird primär genutzt, um Daten an **Google Looker Studio** zu übergeben.

## API Endpoint

Der Zugriff erfolgt über den `StatisticsController`.

**Basis-URL:**

### Authentifizierung
Die API nutzt die Standard Joomla API Token Authentifizierung (`Bearer Token` oder `X-Joomla-Token`).

### Filter-Parameter
Die API unterstützt folgende GET-Parameter zur Filterung:

| Parameter | Typ | Beschreibung |
| :--- | :--- | :--- |
| `filter[begin]` | String (Y-m-d) | Startdatum (inklusiv) |
| `filter[end]` | String (Y-m-d) | Enddatum (inklusiv) |
| `filter[client_id]` | Int | Nur spezifischer Kunde |
| `filter[banner_id]` | Int | Nur spezifisches Banner |

## Beispiel Response
https://ihre-domain.de/api/index.php/v1/kickbannerstats/statistics

```json
[
    {
        "date": "2026-01-20",
        "banner_id": 422,
        "client_id": 13,
        "impressions": 1319,
        "clicks": 3,
        "banner_name": "Musical Kids Amulett",
        "client_name": "besser-im-blick",
        "updated_at": "2026-02-12 13:37:39"
    },
    {
        "date": "2026-01-19",
        "banner_id": 422,
        "client_id": 13,
        "impressions": 41324,
        "clicks": 38,
        "banner_name": "Musical Kids Amulett",
        "client_name": "besser-im-blick",
        "updated_at": "2026-02-12 13:37:39"
    }
]
```

Looker Studio Connector
Um diese Daten in Looker Studio zu nutzen, benötigen Sie ein Google Apps Script (Community Connector), welches diese API konsumiert.

Schema Definition
Im Connector mappen Sie die JSON-Felder wie folgt:

date -> Datum (YYYYMMDD)

banner_name -> Text

client_name -> Text

impressions -> Zahl

clicks -> Zahl

CTR -> Berechnetes Feld (clicks / impressions)

::: tip Caching
Da die Daten in #__kickbannerstats_daily nur einmal täglich aktualisiert werden, empfiehlt es sich, im Looker Studio Connector ein Caching von 12 bis 24 Stunden zu aktivieren.
:::