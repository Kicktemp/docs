---
title: Installation & Erste Schritte
description: Den Kick Consent Manager in Joomla installieren und einrichten
---

# Installation & Erste Schritte

## Installation

Der Kick Consent Manager wird als Standard-Joomla-Erweiterungspaket ausgeliefert.

1. Laden Sie das Installationspaket (`.zip`) herunter.
2. Öffnen Sie im Joomla-Backend: **System → Erweiterungen installieren**.
3. Wählen Sie die ZIP-Datei aus und klicken Sie auf **Installieren**.

Nach erfolgreicher Installation erscheint der KCM im Backend-Menü unter **Komponenten → Kick Consent Manager**.

::: tip Joomla 5 & 6 ready
Der KCM ist speziell für **Joomla 5 und Joomla 6** entwickelt und vollständig kompatibel.
:::

---

## Plugins aktivieren

Das Installationspaket enthält zwei Plugins, die nach der Installation **manuell aktiviert** werden müssen.

### System-Plugin (Pflicht)

Das System-Plugin ist das Herzstück des KCM. Es injiziert das Cookie-Banner in jede Frontend-Seite und steuert das Laden der consent-abhängigen Scripts. **Ohne dieses Plugin erscheint kein Banner.**

1. Gehen Sie zu **System → Erweiterungen verwalten → Plugins**.
2. Suchen Sie nach `kickconsentmanager`.
3. Aktivieren Sie das Plugin **System – Kick Consent Manager**.

::: warning Pflicht
Solange das System-Plugin deaktiviert ist, funktioniert der KCM nicht. Das Banner wird nicht angezeigt, und keine Scripts werden consent-gesteuert geladen.
:::

### Task-Plugin (empfohlen)

Das Task-Plugin ist ein **Joomla Scheduler-Plugin** (Typ: `task`). Es stellt eine geplante Aufgabe bereit, die abgelaufene Einwilligungseinträge automatisch aus der Datenbank löscht.

1. Filtern Sie die Plugin-Liste nach Typ **task** und aktivieren Sie das Plugin **Aufgabe – Kick Consent Manager Einwilligungen bereinigen**.
2. Gehen Sie zu **System → Geplante Aufgaben → Neu**.
3. Wählen Sie im Aufgabentyp-Picker die Kachel **Einwilligungen bereinigen**.
4. Ausführungsregel: `Intervall, Minuten` — für wöchentliches Ausführen: `10080`.
5. Parameter **Tage**: z.B. `90` — Einwilligungen, die älter als 90 Tage sind, werden gelöscht.

::: tip Automatisches Aufräumen
Ohne den Task wächst die Einwilligungstabelle unbegrenzt. Wöchentlich (10080 Minuten) reicht für die meisten Websites aus.
:::

---

## Schnellstart

Nach der Installation und Plugin-Aktivierung empfiehlt sich dieser Einrichtungsablauf:

### Schritt 1: Service-Kategorien anlegen

Gehen Sie zu **Komponenten → Kick Consent Manager → Service-Kategorien** und prüfen Sie die vorinstallierten Kategorien:

| Kategorie | Notwendig | Beschreibung |
|---|---|---|
| Notwendige Cookies | ✅ Ja | Grundfunktionen der Website |
| Präferenzen | Nein | Nutzervorlieben (Sprache, Region) |
| Statistiken | Nein | Anonyme Besucheranalyse |
| Marketing | Nein | Werbung & Retargeting |

Diese vier Kategorien werden beim ersten Installieren automatisch angelegt. Sie können weitere Kategorien hinzufügen oder die bestehenden anpassen.

### Schritt 2: Services anlegen

Navigieren Sie zu **Service-Kategorien → Services** und legen Sie für jeden eingesetzten Drittanbieter einen Service-Eintrag an. Zum Beispiel:

- Google Analytics → Kategorie „Statistiken"
- Google Ads → Kategorie „Marketing"
- YouTube → Kategorie „Marketing"

Jeder Service kann mit Informationsfeldern angereichert werden (Anbieter, Zweck, Datenschutz-URL, Speicherdauer etc.).

### Schritt 3: Cookies dokumentieren

Unter **Cookies** erfassen Sie die technischen Cookie-Details für jeden Service. Dies entspricht den Pflichtangaben in der Datenschutzerklärung und wird im Cookie-Preference-Center (erweitertes Banner) angezeigt.

### Schritt 4: Scripts einbinden

Unter **Scripts** legen Sie die Tracking-Codes an. Der KCM übernimmt das bedingte Laden dieser Skripte – sie werden nur ausgeführt, wenn der Nutzer dem jeweiligen Service zugestimmt hat.

### Schritt 5: Einstellungen konfigurieren

Öffnen Sie die **Einstellungen** (Optionen-Button oben rechts) und passen Sie zumindest folgende Punkte an:

- **Datenschutz-Link** (Tab „Links"): Verknüpfen Sie das Banner mit Ihrer Datenschutzseite.
- **Übersetzungen** (Tab „Übersetzungen"): Passen Sie die Banner-Texte an Ihre Website an.
- **Design** (Tab „Design"): Farben an Ihr Corporate Design anpassen.

### Schritt 6: Frontend testen

Rufen Sie Ihre Website im Inkognito-Browser auf. Das Cookie-Banner sollte erscheinen. Über das **KCM DevKit** (in den Einstellungen aktivierbar) können Sie den Consent-Status in Echtzeit prüfen.

---

## Vordefinierte Daten nach Installation

Der KCM legt beim ersten Installieren automatisch folgende Datensätze an:

**Service-Kategorien:**
- Notwendige Cookies (notwendig = Ja)
- Präferenzen
- Statistiken
- Marketing

**Services:**
- Kick Consent Manager (Kategorie: Notwendige Cookies) — der KCM selbst dokumentiert seinen eigenen Cookie.

**Cookies:**
- `kcm_data` (Service: Kick Consent Manager) — speichert die Einwilligungsentscheidung des Nutzers, Ablauf: 90 Tage.

---

## Deinstallation

Unter **System → Erweiterungen verwalten** können Sie den KCM vollständig entfernen. Das Deinstallations-SQL-Skript entfernt alle Datenbanktabellen automatisch.

::: warning Datenverlust
Bei der Deinstallation werden alle gespeicherten Einwilligungen, Services, Cookies und Scripts unwiderruflich gelöscht.
:::
