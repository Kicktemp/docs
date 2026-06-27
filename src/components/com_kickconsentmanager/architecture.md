---
title: Architektur
description: Technische Architektur des Kick Consent Managers für Entwickler
---

# Architektur & Technisches

Dieser Abschnitt richtet sich an Entwickler und beschreibt das Datenmodell, den MVC-Aufbau und den technischen Ablauf des KCM.

---

## Datenbank-Schema

Der KCM legt fünf eigene Tabellen in der Joomla-Datenbank an:

### `#__kickconsentmanager_categories`

Speichert die Service-Kategorien.

```sql
CREATE TABLE `#__kickconsentmanager_categories` (
  `id`          INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `title`       VARCHAR(255) NOT NULL DEFAULT '',
  `alias`       VARCHAR(400) NOT NULL DEFAULT '',
  `description` TEXT NOT NULL,
  `translations` TEXT NOT NULL,       -- JSON: Sprachspezifische Übersetzungen
  `required`    INT(1) NOT NULL DEFAULT 0,
  `state`       TINYINT(3) NOT NULL DEFAULT 0,
  `created`     DATETIME NOT NULL,
  `created_by`  INT UNSIGNED NOT NULL DEFAULT 0,
  `modified`    DATETIME NOT NULL,
  `modified_by` INT UNSIGNED NOT NULL DEFAULT 0,
  `version`     INT UNSIGNED NOT NULL DEFAULT 1,
  `ordering`    INT(11) NOT NULL DEFAULT 0,
  `note`        VARCHAR(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  KEY `idx_state` (`state`),
  KEY `idx_alias` (`alias`(191))
)
```

### `#__kickconsentmanager_services`

Speichert die einzelnen Services.

```sql
CREATE TABLE `#__kickconsentmanager_services` (
  `id`           INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `asset_id`     INT UNSIGNED NOT NULL DEFAULT 0,  -- Joomla ACL
  `title`        VARCHAR(255) NOT NULL DEFAULT '',
  `alias`        VARCHAR(400) NOT NULL DEFAULT '',
  `catid`        INT UNSIGNED NOT NULL DEFAULT 0,  -- FK zu categories
  `informations` TEXT NOT NULL,                   -- JSON: Informationsfelder
  `state`        TINYINT(3) NOT NULL DEFAULT 0,
  `version`      INT UNSIGNED NOT NULL DEFAULT 1,
  `ordering`     INT(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  KEY `idx_catid` (`catid`),
  KEY `idx_alias` (`alias`(191))
)
```

### `#__kickconsentmanager_cookies`

Cookie-Dokumentationseinträge.

```sql
CREATE TABLE `#__kickconsentmanager_cookies` (
  `id`           INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `title`        VARCHAR(255) NOT NULL DEFAULT '',  -- Cookie-Name
  `serviceid`    INT UNSIGNED NOT NULL DEFAULT 0,   -- FK zu services
  `informations` TEXT DEFAULT NULL,                 -- JSON: Informationsfelder
  `state`        TINYINT(3) NOT NULL DEFAULT 0,
  `ordering`     INT(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  KEY `idx_catid` (`serviceid`)
)
```

### `#__kickconsentmanager_scripts`

Tracking-Scripts.

```sql
CREATE TABLE `#__kickconsentmanager_scripts` (
  `id`          INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `title`       VARCHAR(255) NOT NULL DEFAULT '',
  `head_body`   TINYINT(1) NOT NULL DEFAULT 1,    -- 1=head, 0=body
  `type`        TINYINT(1) NOT NULL DEFAULT 0,    -- 0=code, 1=src
  `code`        TEXT NOT NULL,                    -- Inline-Script
  `src`         VARCHAR(1024) NOT NULL,            -- Script-URL
  `render_type` VARCHAR(255) NOT NULL DEFAULT '', -- '', 'defer', 'async'
  `attr`        VARCHAR(1024) NOT NULL DEFAULT '', -- Zusätzliche Attribute
  `serviceid`   INT UNSIGNED NOT NULL DEFAULT 0,  -- FK zu services
  `language`    CHAR(7) NOT NULL,                 -- Joomla-Sprachcode
  `publish_up`  DATETIME NOT NULL,
  `publish_down` DATETIME NOT NULL,
  `state`       TINYINT(3) NOT NULL DEFAULT 0,
  `ordering`    INT(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  KEY `idx_cookieid` (`serviceid`)
)
```

### `#__kickconsentmanager_consents`

Einwilligungsprotokoll.

```sql
CREATE TABLE `#__kickconsentmanager_consents` (
  `id`             INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `uuid`           VARCHAR(40) NOT NULL DEFAULT '',  -- Browser-UUID
  `cookie_version` INT UNSIGNED DEFAULT NULL,        -- KCM-Konfigurationsversion
  `consents`       TEXT DEFAULT NULL,                -- JSON: Service-Alias → bool
  `is_latest`      TINYINT(3) NOT NULL DEFAULT 0,   -- Aktuellster Eintrag?
  `created`        DATETIME NOT NULL,
  `expired`        DATETIME NOT NULL,
  `rawdata`        TEXT DEFAULT NULL,               -- Roher kcm_data-Cookie
  PRIMARY KEY (`id`),
  KEY `idx_uid` (`uuid`)
)
```

---

## MVC-Struktur

Der KCM ist als vollständige Joomla-Komponente mit MVC-Architektur implementiert:

### Namespace

```
Kicktemp\Component\ConsentManager
```

### Backend (Administrator)

```
administrator/components/com_kickconsentmanager/
├── src/
│   ├── Controller/        # DisplayController, CategoriesController, ...
│   ├── Model/             # DashboardModel, CategoriesModel, ServiceModel, ...
│   ├── View/              # Categories/HtmlView, Services/HtmlView, ...
│   ├── Table/             # CategoryTable, ServiceTable, CookieTable, ...
│   ├── Field/             # KcmdevField, RegisterwebsiteField, ...
│   ├── Extension/         # KickconsentmanagerComponent.php
│   └── Dispatcher/        # Dispatcher.php
├── tmpl/                  # Template-Dateien
├── forms/                 # XML Form Definitionen
├── language/              # Sprachdateien (de-DE, en-GB)
├── sql/                   # Install/Uninstall SQL + Updates
├── config.xml             # Komponenten-Konfiguration
├── access.xml             # ACL-Definitionen
└── kickconsentmanager.xml # Extension Manifest
```

### Frontend (Site)

```
components/com_kickconsentmanager/
├── src/
│   ├── Controller/        # DisplayController, ConsentController
│   ├── Model/             # ServicesModel
│   ├── View/              # Services/HtmlView
│   ├── Helper/            # KickConsentManagerHelper
│   └── Service/           # Router
├── layouts/kickconsentmanager/  # Layout-Dateien (category, cookies, services, infos)
└── tmpl/services/         # Template für Frontend-Ansicht
```

### Media

```
media/com_kickconsentmanager/
├── js/                    # Kompiliertes JavaScript (kcm.js, kcm.min.js)
└── css/                   # Kompiliertes CSS
```

---

## Consent-Flow (Technisch)

```
1. Joomla lädt Seite
        ↓
2. KCM Plugin (System-Plugin) greift ein
   - Prüft kcm_data-Cookie
   - Kein gültiger Cookie → Banner-HTML in Seite injizieren
   - Gültiger Cookie → Scripts der akzeptierten Services in <head>/<body> injizieren
        ↓
3. JavaScript (kcm.js) im Browser
   - Rendert Banner
   - Verwaltet CPC-Interaktionen
   - Schreibt Entscheidung als kcm_data-Cookie
   - POST-Request an Joomla API → Consent in DB speichern
        ↓
4. ConsentController (Frontend)
   - Empfängt POST-Request
   - Schreibt Eintrag in #__kickconsentmanager_consents
   - Gibt UUID zurück
```

---

## Informations-Felder (JSON-Format)

Das `informations`-Feld in Services und Cookies speichert strukturierte Zusatzinformationen als JSON:

```json
{
  "informations0": {
    "language": "*",
    "label": "Gesetzt von",
    "desc": "",
    "value": "Eigentümer dieser Website",
    "info_type": "text",
    "info_target": 1,
    "info_nofollow": 1,
    "info_text": ""
  },
  "informations1": {
    "language": "*",
    "label": "Zweck",
    "desc": "",
    "value": "Einwilligung speichern",
    "info_type": "text",
    "info_target": 1,
    "info_nofollow": 1,
    "info_text": ""
  }
}
```

Die `info_type`-Werte entsprechen: `text`, `textarea`, `list`, `link`, `mail`.

---

## Joomla Content Types

Der KCM registriert seine Entitäten in `#__content_types`, um mit dem Joomla-Versioning und den UCM-Features zu interagieren:

- `com_kickconsentmanager.category`
- `com_kickconsentmanager.service`
- `com_kickconsentmanager.cookie`
- `com_kickconsentmanager.script`

