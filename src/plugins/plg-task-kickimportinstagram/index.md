---
title: KickImportInstagram Plugin
description: Dokumentation zum Joomla Scheduler-Plugin „KickImportInstagram“
---

# KickImportInstagram Plugin

Das `kickimportinstagram` Task-Plugin importiert Instagram-Beiträge automatisch als Joomla-Artikel. Es eignet sich besonders für redaktionelle Seiten, die regelmäßig Inhalte von einem Instagram-Business- oder Creator-Konto übernehmen und dabei Vorschaubilder oder Videos nutzen möchten.

## Voraussetzungen und Installation

- Joomla 4.x installieren.
- Das Plugin unter `src/structure/plugins/task/kickimportinstagram` bereitstellen und per Installer oder manuell aktivieren.
- Den Scheduler (Komponente `com_scheduler`) konfigurieren, damit der Task regelmäßig ausgeführt wird.

Die Installation erfolgt wie bei allen Joomla-Erweiterungen über den Extension Manager (`Erweiterungen > Installieren`). Nach der Installation sollte das Plugin unter `System > Plugins > task – KickImportInstagram` aktiviert sein.

## Plugin-Parametrisierung

Das Plugin bietet die folgenden Parameter im Task-Formular (`import.xml`):

| Feldname | Beschreibung |
| --- | --- |
| `instagram_access_token` | gültiger **long-lived** Access Token für die Instagram Graph API. Wird automatisch erneuert, sobald das Ablaufdatum näher rückt. |
| `instagram_access_token_expires` | read-only Anzeige des aktuellen Ablaufdatums. Wird vom Plugin aktualisiert und in der Aufgaben-Tabelle gespeichert. |
| `instagram_user_id` | ID des Instagram-Kontos, dessen Beiträge importiert werden sollen. |
| `limit` | maximale Anzahl Posts pro Lauf (1–50). |
| `user_id` | Joomla-Benutzer, dem die importierten Artikel zugeordnet werden. |
| `image_folder` | Ordner innerhalb von `images/`, in den Medien gespeichert werden. |
| `image_field` | Zielbild-Feld für normale Bildbeiträge (`image_intro` oder `image_fulltext`). |
| `video_field` | Zielbild-Feld für Instagram-Videos. |
| `video_thumbnail_field` | Zielbild-Feld für das Thumbnail von Instagram-Videos. |
| `toCatid` | Kategorie, in die die Artikel einsortiert werden. |
| `overwrite` | steuert, ob vorhandene Artikel mit derselben Alias/Catid überschrieben werden. |
| `urlb`, `urlc` usw. | Platzhalter-URLs, die optional mit zusätzlichen Links befüllt werden können. |
| `caching` & `cachetime` | steuern das Zwischenspeichern der Instagram-API-Antworten. |

## Token-Management und Speicherung

Das Plugin erneuert einen long-lived Access Token automatisch mittels der Aktion `refresh_access_token`, wenn dessen Ablauf innerhalb von drei Tagen liegt. Der neue Token sowie das neue Ablaufdatum werden direkt in der `#__extensions`-Tabelle (`task`-Plugin-Eintrag) gespeichert, so dass auch kommende Scheduler-Läufe sofort den aktualisierten Wert nutzen. Die Anzeige `instagram_access_token_expires` wird bei jedem Speichern aktualisiert.

## Importverhalten

- Die API-Abfrage holt die Felder `id, caption, media_type, media_url, permalink, timestamp, thumbnail_url`.
- Jeder Post wird anhand seines Alias (Instagram-ID) und der Zielkategorie geladen; ohne aktiviertem Overwrite werden vorhandene Artikel übersprungen.
- Texte werden mit `nl2br` formatiert und der Artikel erhält title/alias/state/created-publish-Daten basierend auf dem Instagram-Timestamp.
- Die ausgewählten Joomla-Bildfelder (`image_field`, `video_field`, `video_thumbnail_field`) werden befüllt, Videos werden optional (parametergesteuert) als MP4 in `images/{image_folder}` gespeichert.
- Der Pfad zu einem gespeicherten mp4-Video landet zusätzlich in `attribs.instagram_video`, so dass Template-Overrides oder Custom Fields darauf zugreifen können.

## Media Handling

- Fotos: Heruntergeladen und als `image_intro` oder `image_fulltext` gespeichert, je nach Einstellung.
- Videos: Mp4-Dateien (optional) und Thumbnails landen in den gewählten Slots. Video-Thumb wird bevorzugt genutzt, die mp4-Datei kann in Templates eingebettet werden.
- Caching verhindert Mehrfachabfragen anhand des Request-URLs (`md5`-Key), die Gültigkeitsdauer ist durch `cachetime` steuerbar.

## Fehlerbehandlung

- Bei fehlenden Parametern (`instagram_user_id`, `instagram_access_token`) wird der Task abgebrochen.
- API- oder Downloadfehler führen zu Log-Einträgen (`logTask`) und verhindern das Speichern.
- Das Plugin loggt zusätzlich erfolgreiche Token-Erneuerungen oder fehlschlagende Refresh-Versuche.

## Hinweise für Entwickler

- `cacheMedia` verwendet cURL, um Dateien herunterzuladen; fehlende Ordner werden angelegt.
- `persistPluginParams` aktualisiert die Plugin-Parameter (`params`) in der Datenbank via `Joomla\CMS\Table\Extension`.
- Die Scheduler-Schnittstelle nutzt „TaskPluginTrait“ und wird über die Service-Provider-Datei `services/provider.php` registriert.

Weitere Informationen zur Implementierung und möglichen Anpassungen finden sich direkt in `src/structure/plugins/task/kickimportinstagram/src/Extension/KickImportInstagram.php`.
