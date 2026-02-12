# Looker Studio Connector Einrichtung

Um Ihre Daten in Google Looker Studio zu visualisieren, benötigen Sie einen sogenannten "Community Connector". Wir stellen Ihnen hier den vollständigen Quellcode zur Verfügung.

## 1. Google Apps Script Projekt erstellen

1.  Gehen Sie zu [script.google.com](https://script.google.com/) und klicken Sie auf **Neues Projekt**.
2.  Geben Sie dem Projekt oben links einen Namen, z.B. `KickBannerStats Connector`.
3.  Gehen Sie links auf das Zahnrad (Projekteinstellungen) und aktivieren Sie die Checkbox **"Manifestdatei 'appsscript.json' im Editor anzeigen"**.

## 2. Dateien einfügen

Sie sehen nun im Editor zwei Dateien. Ersetzen Sie deren Inhalt komplett mit dem folgenden Code.

### Datei: `code.gs`
Dies ist die Logik, die Ihre API abfragt und die Felder definiert.

```javascript
var cc = DataStudioApp.createCommunityConnector();

function isAdminUser() { return true; }

function getMetadata() {
    return {
        releaseType: 'PRODUCTION',
        sampleExtraction: { enabled: false }
    };
}

// 1. Authentifizierung
function getAuthType() {
    return cc.newAuthTypeResponse()
        .setAuthType(cc.AuthType.KEY)
        .setHelpUrl('https://docs.kicktemp.com/components/com_kickbannerstats/looker-connector.html')
        .build();
}

function isAuthValid() {
    var key = PropertiesService.getUserProperties().getProperty('dscc.key');
    return key !== null && key.length > 0;
}

function setCredentials(request) {
    PropertiesService.getUserProperties().setProperty('dscc.key', request.key);
    return { errorCode: 'NONE' };
}

function resetCredentials() {
    PropertiesService.getUserProperties().deleteProperty('dscc.key');
}

// 2. Konfiguration
function getConfig(request) {
    var config = cc.getConfig();
    config.newInfo().setId('instructions').setText('Geben Sie die Basis-URL Ihrer Joomla Banner-API ein.');
    config.newTextInput()
        .setId('api_url')
        .setName('Joomla API URL')
        .setPlaceholder('https://ihre-domain.de/api/index.php/v1/kickbannerstats/statistics')
        .setAllowOverride(true);
    config.setDateRangeRequired(true);
    return config.build();
}

// 3. Schema
function getFields() {
    var fields = cc.getFields();
    var types = cc.FieldType;

    fields.newDimension().setId('date').setName('Datum').setType(types.YEAR_MONTH_DAY);
    fields.newDimension().setId('banner_id').setName('Banner ID').setType(types.NUMBER);
    fields.newDimension().setId('client_id').setName('Kunden ID').setType(types.NUMBER);
    fields.newDimension().setId('banner_name').setName('Banner Name').setType(types.TEXT);
    fields.newDimension().setId('client_name').setName('Kunden Name').setType(types.TEXT);

    fields.newMetric().setId('impressions').setName('Impressions').setType(types.NUMBER).setAggregation(cc.AggregationType.SUM);
    fields.newMetric().setId('clicks').setName('Clicks').setType(types.NUMBER).setAggregation(cc.AggregationType.SUM);

    return fields;
}

function getSchema(request) {
    return { schema: getFields().build() };
}

// 4. Daten abrufen mit CACHE
function getData(request) {
    var apiKey = PropertiesService.getUserProperties().getProperty('dscc.key');
    var url = request.configParams.api_url + '?filter[begin]=' + request.dateRange.startDate + '&filter[end]=' + request.dateRange.endDate;

    if (request.dimensionsFilters) {
        request.dimensionsFilters.forEach(function(group) {
            group.forEach(function(f) {
                if (f.fieldName === 'client_id' || f.fieldName === 'banner_id') {
                    url += '&filter[' + f.fieldName + ']=' + f.values[0];
                }
            });
        });
    }

// --- OPTIMIERTE CACHE LOGIK ---
    var cache = CacheService.getUserCache();
    // Erzeuge einen eindeutigen Key basierend auf der URL
    var cacheKey = url.replace(/[^a-z0-9]/gi, '_').substring(0, 250);
    var cachedResponse = cache.get(cacheKey);

    var responseText;
    if (cachedResponse !== null) {
        responseText = cachedResponse;
    } else {
        var response = UrlFetchApp.fetch(url, {
            headers: { 'X-Joomla-Token': apiKey, 'Accept': 'application/json' },
            muteHttpExceptions: true
        });
        responseText = response.getContentText();

        // Prüfen, ob die Antwort kleiner als 100KB (ca. 100.000 Zeichen) ist
        if (responseText.length < 100000) {
            try {
                cache.put(cacheKey, responseText, 1800); // 30 Min Cache
            } catch (e) {
                console.warn("Cache fehlgeschlagen: " + e.message);
            }
        } else {
            console.info("Daten zu groß für Script-Cache (" + responseText.length + " bytes). Überspringe Caching.");
        }
    }
    // --- CACHE LOGIK ENDE ---

    var data = JSON.parse(responseText);
    var records = Array.isArray(data) ? data : (data.data || []);

    // Fix: Wir mappen nur über die Namen der Felder (Strings), um den getId-Fehler zu vermeiden
    var requestedFieldNames = request.fields.map(function(f) { return f.name; });

    var rows = records.map(function(stat) {
        var values = [];
        requestedFieldNames.forEach(function(name) {
            switch (name) {
                case 'date': values.push(stat.date ? stat.date.replace(/-/g, '') : null); break;
                case 'banner_id': values.push(stat.banner_id); break;
                case 'client_id': values.push(stat.client_id); break;
                case 'banner_name': values.push(stat.banner_name || ''); break;
                case 'client_name': values.push(stat.client_name || ''); break;
                case 'impressions': values.push(Number(stat.impressions) || 0); break;
                case 'clicks': values.push(Number(stat.clicks) || 0); break;
                default: values.push(null);
            }
        });
        return { values: values };
    });

    return {
        schema: getFields().forIds(requestedFieldNames).build(),
        rows: rows
    };
}
```

### Datei: `appsscript.json`

Diese Datei steuert die Berechtigungen.

```json
{
  "timeZone": "Europe/Berlin",
  "dependencies": {
    "enabledAdvancedServices": []
  },
  "exceptionLogging": "STACKDRIVER",
  "runtimeVersion": "V8",
  "urlFetchWhitelist": [
    "https://ihre-domain.de/",
    "https://www.ihre-domain.de/"
  ],
  "dataStudio": {
    "name": "Besser-im-Blick Banner Stats Connector",
    "logoUrl": "https://www.gstatic.com/images/branding/product/1x/googleg_48dp.png",
    "company": "Besser im Blick",
    "addonUrl": "https://ihre-domain.de",
    "supportUrl": "https://ihre-domain.de",
    "description": "Importiert Banner-Statistiken (Impressions & Clicks) aus Joomla für Looker Studio Reports."
  },
  "webapp": {
    "executeAs": "USER_DEPLOYING",
    "access": "MYSELF"
  }
}

```

## 3. Deployment (Veröffentlichen)

1. Klicken Sie im Apps Script Editor oben rechts auf **Bereitstellen** > **Testbereitstellung**.
2. Klicken Sie im Dialog auf **Aktivieren** (Enable).
3. Kopieren Sie die **Head Deployment ID**.
4. Gehen Sie zu [Looker Studio](https://lookerstudio.google.com/).
5. Klicken Sie auf **Erstellen** > **Datenquelle**.
6. Suchen Sie nach "Build your own" (oder "Eigene erstellen").
7. Fügen Sie die Deployment ID ein und klicken Sie auf **Bestätigen**.

🎉 **Fertig!** Sie werden nun nach Ihrer Domain und dem API Token gefragt und können sofort loslegen.

```

---

### Schritt 4: Sidebar anpassen

Damit die User diesen Schatz auch finden, binde ihn in deine `sidebar.json` ein.

**Datei:** `docs/components/com_kickbannerstats/sidebar.json`

```json
[
  {
    "text": "KickBannerStats",
    "items": [
      { "text": "Einführung", "link": "/components/com_kickbannerstats/" },
      { "text": "Architektur", "link": "/components/com_kickbannerstats/architecture" },
      { "text": "Backend Nutzung", "link": "/components/com_kickbannerstats/backend" },
      { "text": "API Integration", "link": "/components/com_kickbannerstats/api-integration" },
      { "text": "Looker Connector Code", "link": "/components/com_kickbannerstats/looker-connector" }
    ]
  }
]

```

### Warum das smart ist:

Der Code oben (`getData`) verarbeitet bereits die Datumsfilter (`filter[begin]`, `filter[end]`) von Looker Studio. Das heißt, wenn der User im Dashboard oben rechts den Zeitraum ändert, fragt Looker Studio deine Joomla-API **nur genau nach diesem Zeitraum**. Das ist extrem performant!