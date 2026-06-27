---
title: Backend-Übersicht
description: Übersicht über das Joomla-Backend des Kick Consent Managers
---

# Backend-Übersicht

Das Backend des KCM ist über **Komponenten → Kick Consent Manager** erreichbar und umfasst folgende Bereiche:

![KCM Dashboard](./assets/dashboard.png)

---

## Navigationsstruktur

| Menüpunkt | Beschreibung |
|---|---|
| **Kontrollzentrum** | Dashboard mit Statistik-Schnellübersicht |
| **Service-Kategorien** | Kategorien verwalten |
| **Services** | Dienste und Anbieter pflegen |
| **Cookies** | Cookie-Dokumentation |
| **Scripts** | Tracking-Scripts verwalten |
| **Einwilligungen** | Consent-Protokoll einsehen |
| **Statistiken** | Opt-in/Opt-out-Auswertungen |

---

## Dashboard (Kontrollzentrum)

Das Dashboard gibt einen schnellen Überblick über die aktuellen Datenstände:

| Bereich | Inhalt |
|---|---|
| Statistik-Tabelle | Anzahl der vorhandenen Services, Cookies, Kategorien, Scripts und Einwilligungen |
| Versionsinformation | Aktuelle Komponentenversion und Datum |
| Kontaktinformation | Kicktemp GmbH Kontaktdaten |

Das Dashboard dient primär als Einstiegspunkt und Schnellübersicht. Für tiefergehende Auswertungen navigieren Sie direkt zu den einzelnen Bereichen.

---

## Listenansichten

Alle Bereiche folgen dem Standard-Joomla-Listenansichtsmuster:

- **Toolbar-Aktionen**: Neu, Bearbeiten, Veröffentlichen, Verstecken, Archivieren, In den Papierkorb, Freigeben
- **Suchwerkzeuge**: Filterung nach Status, Sprache, Kategorie etc.
- **Batch-Aktionen**: Mehrere Einträge gleichzeitig bearbeiten
- **Sortierung**: Klick auf Spaltenüberschriften
- **Paginierung**: Konfigurierbare Einträge pro Seite

---

## Berechtigungen

Der KCM unterstützt das Joomla-ACL-System vollständig. In den Einstellungen (Tab „Berechtigungen") können pro Benutzergruppe folgende Aktionen gesteuert werden:

| Aktion | Beschreibung |
|---|---|
| Verwalten | Zugriff auf den Komponenten-Bereich |
| Erstellen | Neue Einträge anlegen |
| Bearbeiten | Bestehende Einträge bearbeiten |
| Bearbeiten (eigene) | Nur eigene Einträge bearbeiten |
| Statuswechsel | Status ändern (veröffentlichen, verstecken) |
| Löschen | Einträge löschen |

---

## Bearbeitungsansichten

Alle Bearbeitungsmasken enthalten standardmäßig:

- **Einstellungen-Tab**: Die entitätsspezifischen Felder
- **Metadaten**: Erstellt am, Erstellt von, Geändert am, Geändert von
- **Versionen**: Überarbeitungsnummer (wenn Versionierung aktiviert)
- **Notiz**: Internes Kommentarfeld (nur Backend-sichtbar)
- **Status**: Veröffentlicht / Unveröffentlicht / Archiviert / Papierkorb
- **Sortierung**: Reihenfolge innerhalb der Liste
- **Berechtigungen**: Individuelle ACL-Einstellungen (wo vorhanden)

---

## Tipps für die tägliche Arbeit

**Neuen Drittanbieter einrichten:**
1. Service-Kategorie prüfen oder anlegen
2. Service anlegen (mit Informationsfeldern)
3. Cookie(s) des Services dokumentieren
4. Script(s) mit Tracking-Code anlegen
5. Im Frontend prüfen (DevKit)

**Bestehenden Service deaktivieren:**
Setzen Sie den Service auf „Unveröffentlicht". Alle zugehörigen Scripts werden nicht mehr geladen. Cookies und Script-Einträge bleiben erhalten.

**Einwilligungen nachverfolgen:**
Nutzen Sie die UUID-Suche im Bereich „Einwilligungen", um die Consent-Geschichte eines bestimmten Browsers zu verfolgen (z.B. bei Beschwerden oder rechtlichen Anfragen).
