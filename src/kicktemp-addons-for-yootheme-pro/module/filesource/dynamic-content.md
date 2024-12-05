# Dynamische Inhalte mit Kicktemp Files

Das Modul **Dateien (Source)** integriert die benutzerdefinierte Quelle **Kicktemp Files** in YOOtheme Pro, mit der du Dateien dynamisch basierend auf Artikelinformationen laden kannst.

## **Verfügbare Filter**

| **Einstellung**        | **Beschreibung**                                                                                                  |
|-------------------------|------------------------------------------------------------------------------------------------------------------|
| **Path Pattern**        | Setzt ein Muster für den Dateipfad. Unterstützt Platzhalter wie `{id}`, `{alias}`, `{intro_image}`, `{jcf name}`.|
| **Start**               | Definiert den Startpunkt für die geladenen Dateien.                                                            |
| **Quantity**            | Legt fest, wie viele Dateien geladen werden sollen.                                                           |
| **Order**               | Bestimmt die Reihenfolge der geladenen Dateien. Optionen: Alphabetisch, Zufällig oder Standard.                |
| **Direction**           | Gibt die Sortierrichtung an: Aufsteigend oder Absteigend.                                                      |

### **Path Pattern**

Das Herzstück des Moduls ist der **Path Pattern** Filter. Mit ihm kannst du Dateipfade dynamisch anpassen, basierend auf:
- Artikel-ID: `{id}`
- Alias: `{alias}`
- Benutzerdefinierte Felder: `{jcf name}` oder `{jcf name,value}`
- Intro-Bild: `{intro_image}`
- Volltext-Bild: `{image_fulltext}`

Der Pfad wird zur Laufzeit aufgelöst, um sicherzustellen, dass immer die richtigen Dateien geladen werden.
