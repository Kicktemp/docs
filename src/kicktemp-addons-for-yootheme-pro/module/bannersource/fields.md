# Felder im BannerType

Das **BannerSource Modul** stellt eine Reihe von Feldern bereit, die dir helfen, Banner im YOOtheme Pro Page Builder flexibel zu konfigurieren und dynamische Inhalte einzubinden. Hier findest du eine Übersicht der verfügbaren Felder sowie ihre Bedeutung und praktische Anwendungsbeispiele.

## Übersicht der Felder

| **Label**                | **Beschreibung**                                                                                                   |
|--------------------------|-------------------------------------------------------------------------------------------------------------------|
| **Banner Type**          | Klassifiziert den Banner als Bild (`0`) oder benutzerdefinierten Code (`1`).                                       |
| **Track Impression**     | Zeigt die Anzahl der tatsächlichen Impressionen eines Banners an.                                                 |
| **Client Track Impression** | Zeigt die Anzahl der Impressionen des Kunden an.                                                                  |
| **Wichtig (Sticky)**     | Gibt an, ob ein Banner priorisiert angezeigt wird (in Joomla als "Wichtig" übersetzt).                            |
| **Banner Name**          | Der Name des Banners, oft als Titel angezeigt.                                                                    |
| **Beschreibung**         | Zusätzliche Informationen oder Untertitel des Banners.                                                            |
| **Click URL**            | URL zur Zählung von Klicks. Nach der Zählung wird zum Ziel-Link weitergeleitet.                                   |
| **Ziel-Link**            | Die tatsächliche URL, zu der weitergeleitet wird, nachdem Klicks gezählt wurden.                                   |
| **Bild-Pfad**            | Der Pfad zum Banner-Bild.                                                                                         |
| **Bild-Alt-Text**        | Alternativer Text für das Bild, z. B. für Screenreader.                                                           |
| **Bild-Breite**          | Definiert die Breite des Bildes in Pixeln.                                                                        |
| **Bild-Höhe**            | Definiert die Höhe des Bildes in Pixeln.                                                                          |
| **Benutzerdefinierter Code** | Ermöglicht die Verwendung von individuellem HTML oder JavaScript im Banner.                                       |
| **Ist Bild**             | Prüft, ob das Medium ein Bild ist. Kann für dynamische Bedingungen verwendet werden.                              |

## Anwendungsbeispiele

1. **Dynamische Bedingungen mit Banner Type:**
    - Zeige nur Banner mit benutzerdefiniertem Code:
      ```yaml
      Bedingung:
        - type == 1
      ```
    - Zeige nur Banner mit Bildern:
      ```yaml
      Bedingung:
        - type == 0
      ```

2. **Priorisierung durch Wichtigkeit:**
    - Banner mit hoher Priorität zuerst anzeigen, z. B. "Sticky"-Banners für spezielle Aktionen:
      ```php
      $query->order($db->quoteName('a.sticky') . ' DESC');
      ```

3. **Tracking mit Click URL und Impressionen:**
    - Überwache Impressionen und Klicks:
        - **Track Impression**: Anzahl der Seitenaufrufe für das Banner.
        - **Click URL**: Zählt Klicks und leitet anschließend zum definierten Ziel-Link weiter.

4. **Bildkonfiguration:**
    - Dynamische Banner mit angepassten Bildgrößen:
      ```yaml
      Bildgröße:
        - Breite: 600
        - Höhe: 400
      ```

## Fazit
Die Felder des **BannerSource Moduls** bieten umfassende Möglichkeiten, Banner dynamisch und gezielt in YOOtheme Pro einzubinden. Von der Priorisierung und Klassifizierung bis hin zur Integration von Tracking-Funktionen kannst du Banner optimal an deine Anforderungen anpassen.

[Weiter: So funktioniert das Modul](./how-to-use.md)
