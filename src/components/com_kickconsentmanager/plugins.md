---
title: Plugins
description: System- und Task-Plugin des Kick Consent Managers
---

# Plugins

Der Kick Consent Manager wird mit zwei Joomla-Plugins ausgeliefert, die nach der Installation aktiviert werden müssen.

---

## System-Plugin: `plg_system_kickconsentmanager`

**Pflicht – ohne dieses Plugin funktioniert der KCM nicht.**

Das System-Plugin ist das Bindeglied zwischen der Komponente und dem Joomla-Frontend. Es greift in jeden Seitenaufruf ein und übernimmt:

- Einlesen der KCM-Konfiguration (Services, Übersetzungen, Design-Variablen)
- Einbinden der KCM-JavaScript- und CSS-Dateien über den Joomla **WebAssetManager** (die Versionsnummer dient als Cache-Buster)
- Übergabe der Konfiguration als JSON an das Browser-Script
- Kontrolle, welche Scripts geladen werden:
  - Bei **neuen Besuchern**: Banner-HTML in die Seite einbetten
  - Bei **bekannten Besuchern**: Scripts der zugestimmten Services direkt in `<head>` oder `</body>` injizieren
- Auswertung der Seiten-Ausnahmen (konfigurierbar im Tab „KCM deaktivieren")
- Einbinden des KCM DevKits (wenn in den Einstellungen aktiviert)

### Technischer Aufbau

Das Plugin ist ein modernes Joomla-Plugin mit Namespace `Kicktemp\Plugin\System\KickConsentManager`, Service-Provider (`services/provider.php`) und `SubscriberInterface`. Es braucht kein Backward-Compatibility-Plugin.

| Event | Aufgabe |
|---|---|
| `onBeforeCompileHead` | Konfiguration als JSON, Scripts, Stylesheets und CSS-Variablen einbinden |
| `onAfterRender` | Scripts, die am Seitenende stehen sollen, vor `</body>` einfügen |
| `onAjaxRegisterWebsiteKCM` | Website registrieren (nur mit gültigem CSRF-Token und Recht `core.admin` für die Komponente) |
| `onInstallerBeforePackageDownload` | Domain und Versionen an die Download-URL des Pakets anhängen |

Die Dateien `kcm.min.js`, `kcm.min.css` usw. sind als Assets in `media/com_kickconsentmanager/joomla.asset.json` registriert (siehe [Architektur](./architecture#media)).

### Aktivierung

1. **System → Plugins**
2. Suche nach `kickconsentmanager`
3. Plugin **System – Kick Consent Manager** aktivieren

::: warning
Solange das System-Plugin deaktiviert ist, erscheint kein Cookie-Banner, und keine Tracking-Scripts werden consent-gesteuert geladen. Die Komponente im Backend ist zwar nutzbar, hat aber keinerlei Wirkung im Frontend.
:::

---

## Task-Plugin: `plg_task_kickconsentmanager`

Das Task-Plugin ist ein **Joomla Scheduler-Plugin** (Plugintyp: `task`) und stellt eine geplante Aufgabe bereit, die abgelaufene Einwilligungseinträge automatisch aus der Datenbank löscht.

### Aktivierung

Das Plugin findet sich unter **System → Plugins**, gefiltert nach Typ **task**:

- Plugin-Name: **Aufgabe – Kick Consent Manager Einwilligungen bereinigen**
- Plugintyp: `task`
- Plugindatei: `kickconsentmanager`

Plugin aktivieren und speichern.

### Was es tut

Die Einwilligungstabelle `#__kickconsentmanager_consents` wächst mit jedem Seitenbesuch. Das Task-Plugin bereinigt diese Tabelle nach den folgenden Regeln:

- Lösche alle Einträge, bei denen das **`expired`-Datum überschritten** ist.
- Lösche alle Einträge ohne Ablaufdatum (`expired` ist `NULL`), die **älter als der konfigurierte Wert in Tagen** sind.

::: info Seit 1.5.0
Einträge ohne Ablaufdatum haben `NULL` im Feld `expired`. Früher stand dort das Nulldatum `0000-00-00 00:00:00`. Das Update wandelt vorhandene Einträge um.
:::

Der Tages-Parameter kann maximal so groß sein wie die in den Komponenteneinstellungen hinterlegte Cookie-Laufzeit (Standard: 90 Tage). Ein höherer Wert wird automatisch auf diesen Maximalwert gekappt.

### Update von älteren Versionen

Bis 1.4.x bestanden beide Plugins aus einer einzelnen Datei `kickconsentmanager.php`. Beim Update auf 1.5 entfernt das Installationsskript diese alte Datei automatisch. Die Plugins bleiben aktiviert.

### Geplante Aufgabe einrichten

1. Gehen Sie zu **System → Geplante Aufgaben** → **Neu**.
2. Im Aufgabentyp-Picker die Kachel **Einwilligungen bereinigen** auswählen (Beschreibung: „Dieses Plugin löscht alle Einwilligungen älter als X Tage").
3. Einen **Titel** vergeben (z.B. „KCM: Einwilligungen bereinigen").
4. **Ausführungsregel**: `Intervall, Minuten`
5. **Intervall in Minuten** setzen:
   - Täglich: `1440`
   - Wöchentlich: `10080`
6. **Aufgabenparameter – Tage**: Einwilligungen älter als X Tage werden gelöscht (z.B. `90`).
7. Aufgabe speichern.

::: tip Empfehlung
Bei einer Cookie-Laufzeit von 90 Tagen reicht ein wöchentliches Intervall (10080 Minuten) völlig aus. Wichtig ist, den Task überhaupt zu aktivieren – sonst wächst die Tabelle unbegrenzt.
:::

### Voraussetzung: Joomla Cron

Damit geplante Aufgaben automatisch ausgeführt werden, muss der Joomla-Cron konfiguriert sein. Die einfachste Methode ist der **Web-Cron**, den Sie unter **System → Geplante Aufgaben → Optionen** aktivieren können. Für produktive Umgebungen empfiehlt sich ein Server-Cron:

```bash
# Joomla CLI-Cron alle 5 Minuten (Pfad anpassen)
*/5 * * * * /usr/bin/php /var/www/html/cli/joomla.php scheduler:run --no-interaction
```
