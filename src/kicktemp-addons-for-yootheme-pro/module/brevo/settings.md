# Settings

Im Folgenden werden alle Einstellungsmöglichkeiten kurz erklärt.

## Inhalt

**Default**

| Setting               | Description                                                                                                                                      | Bereichsvariablen           |
|-----------------------|--------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------|
| Ordner                | Auswahl der verfügbaren Listen, zu welcher neue User hinzugefügt werden                                                                          | Brevo Listen                |
| Zweifache Bestätigung | Verwendung des Double-Opt-In Verfahrens. Der User muss die Teilnahme am Newsletter über eine gesondert versendete Mail bestätigen.               | enable / disable            |
| Datenschutz Checkbox  | Text, der neben der Checkbox angezeigt wird.                                                                                                     | Text                        |
| Nach dem Senden       | Auswahl, ob nach Bestätigung eine Nachricht angezeigt oder der User umgeleitet werden soll (bei Auswahl Formular in einem Modalfenster anzeigen) | Nachricht zeigen / umleiten |
| Nachricht             | Nachricht, die dem Benutzer/-in nach dem Senden angezeigt wird.                                                                                  | Text                        |
| Titel                 | Titel eintragen                                                                                                                                  | Text                        |
| Meta                  | Meta eintragen                                                                                                                                   | Text                        |
| Inhalt                | Inhalt eintragen                                                                                                                                 | Text                        |

**zweifache Bestätigung aktiv**

| Setting                  | Description                                                    | Bereichsvariablen |
|--------------------------|----------------------------------------------------------------|-------------------|
| Template ID              | Hier kann ein Template ausgewählt werden                       |                   |
| Opt-In Redirection URL   | URL zur Weiterleitung nach Bestätigung über gesonderte E-Mail  | Link              |



## Einstellungen

**Formular**

| Setting                   | Description                                    | Bereichsvariablen                          |
|---------------------------|------------------------------------------------|--------------------------------------------|
| Layout                    | Das Layout des Formulars kann angepasst werden | Grid, gestapelt, gestapelt (Name als Grid) |
| Show Name firstname       | Vorname anzeigen                               | enable / disable                           |
| Show Name lastname        | Nachname anzeigen                              | enable / disable                           |
| Spalten-Abstand           | Der Abstand zwischen den Formularfeldern       | small, medium, default                     |
| Größe                     | Die Größe der Formularfelder                   | small, default, large                      |
| Stil                      | Stil der Formularfelder                        | default, leer                              |
| disable HTML 5 validation | HTML 5 Validation ein- oder ausschalten        | enable / disable                           |

**Alerts**

Hier werden die Texte hinterlegt, die als Meldung erscheinen, wenn ein Feld nicht ausgefüllt, die E-Mail nicht korrekt ist oder die Checkbox nicht angehakt wurde.

Texte können für folgende Formularfelder hinterlegt werden:

| Formularfeld |
|--------------|
| Vorname      |
| Nachname     |
| eMail        |
| wrong eMail  |
| privacy      |

**Labels/ Placeholder**

In diesem Bereich wird angegeben, welcher (Hintergund-) Text in den Formularfeldern oder im Button angezeigt werden soll. Jedes Formularfeld kann mit einem eigenen Text versehen werden.

Texte können für folgende Formularfelder hinterlegt werden:

| Formularfeld |
|--------------|
| Vorname      |
| Nachname     |
| eMail        |
| Button       |

**Button**

Hier kann das Design des Buttons angepasst werden.

| Setting                        | Description                                       |
|--------------------------------|---------------------------------------------------|
| Stil                           | Stil des Buttons                                  |
| Icon                           | Soll ein Icon angezeigt werden                    |
| Ausrichtung                    | Ausrichtung des Icons im Button                   |
| Button über die gesamte Breite | der Button wird über die gesamte Breite gestreckt |
| Zusätzlicher Außenabstand      | Außenabstand kann ausgewählt werden               |

**Modal**

Es ist möglich, das Newsletterformular in einem extra Modalfenster anzeigen zu lassen. Dieses wird geöffnet, wenn der User entsprechenden Button anwählt.

| Setting                    | Description                                                          | Bereichsvariablen                         |
|----------------------------|----------------------------------------------------------------------|-------------------------------------------|
| Formular im Modal anzeigen | Das Formular wird in einem extra Modalfenster angezeigt              | enable / disable                          |
| Text                       | Der im Button angezeigte Text                                        | Text                                      |
| Stil                       | Stil des Buttons                                                     | Default, Primary, Secondary, Danger, Text |
| Größe                      | Größe des Buttons einstellbar                                        | small, default, large                     |
| Icon                       | Darstellung eines Icons innerhalb des Buttons                        | Icon auswählen                            |

**wenn Icon ausgewählt**

| Setting           | Description                                                      | Bereichsvariablen                     |
|-------------------|------------------------------------------------------------------|---------------------------------------|
| Ausrichtung       | Ausrichtung des Icons innerhalb des Buttons                      | links, rechts                         |

**wenn Formular im Modalfenster angezeigt**

| Setting              | Description                                                          | Bereichsvariablen                   |
|----------------------|----------------------------------------------------------------------|-------------------------------------|
| Container modifier   | Breite des Formulars                                                 | enable / disable                    |
| Modal zentriert      | zentrierte Ausrichtung des Modalfensters                             | enable / disable                    |
| Modal Header         | Titel für das Modalfenster                                           | Text                                |
| Schließenbutton Stil | Schließenbutton innerhalb oder außerhalb des  Modalfensters anzeigen | Standard schließen / close outside  |

**Panel**

Das Newsletterformular kann in unterschiedlichem Design dargestellt werden.

| Setting      | Description                                    | Bereichsvariablen                                             |
|--------------|------------------------------------------------|---------------------------------------------------------------|
| Stil         | Auswahl zwischen den Darstellungsmöglichkeiten | keine, Card default, Card Primary, Card Secondary, Card Hover |
| Innenabstand | Abstand der Formularfelder auswählbar          | small, default, large                                         |

**Titel**

Diese Einstellungen beziehen sich auf den verwendeten Titel, wenn ausgewählt wurde, dass dieser angezeigt wird.

| Setting           | Description                                                                         | Bereichsvariablen                                                               |
|-------------------|-------------------------------------------------------------------------------------|---------------------------------------------------------------------------------|
| Stil              | Stil des Titels auswählbar (Größe/Art der Überschrift)                              | keine, 2X-Large, X-Large, Large, Medium, Small, H1-H6                           |
| Dekoration        | Der Titel kann mit einem Trenner, Aufzählungspunkt oder einer Linie versehen werden | Trenner, Auszählungspunkt, Linie                                                |
| Schriftfamilie    | es kann eine alternative Fondfamilie ausgewählt werden                              | Keine, Default, Primary, Secondary, Tertiär                                     |
| Farbe             | Farbe des Titels auswählbar                                                         | keine, Muted, Betont, Primary, Secondary, Success, Warnung, Danger, Hintergrund |
| HTML Element      | es kann die Art der Überschriften (H1-H6) angegeben werden                          | H1 - H6, div                                                                    |
| Ausrichtung       | Ausrichtung des Titels                                                              | top, left                                                                       |
| Außenabstand Oben | der Abstand oberhalb des Titels anpassbar                                           | small, default, medium, large, x-large, keine                                   |

**Meta**

Es können diverse Einstellungen der Meta vorgenommen werden, wenn ausgewählt wurde, dass diese angezeigt wird.

| Setting      | Description                                          | Bereichsvariablen                                                               |
|--------------|------------------------------------------------------|---------------------------------------------------------------------------------|
| Stil         | Stil der Meta auswählbar (Größe/Art der Überschrift) | keine, meta, 2X-Large, X-Large, Large, Medium, Small, H1-H6                     |
| Farbe        | Farbe der Meta auswählbar                            | keine, Muted, Betont, Primary, Secondary, Success, Warnung, Danger, Hintergrund |
| Ausrichtung  | Ausrichtung der Meta                                 | oberhalb des Titels, unterhalb des Titels, über dem Inhalt, unter dem Inhalt    |
| HTML Element | es kann die Art der Meta (H1-H6) angegeben werden    | H1 - H6, div                                                                    |
| Außenabstand | Abstände der Meta anpassbar                          | small, default, medium, large, x-large, keine                                   |

**Inhalt**

Der angegebene Inhalt kann über diese Einstellungen angepasst werden, wenn ausgewählt wurde, dass dieser angezeigt wird.

| Setting      | Description                    | Bereichsvariablen                             |
|--------------|--------------------------------|-----------------------------------------------|
| Stil         | Stil des Inhalts auswählbar    | keine, Lead, Meta                             |
| Initiale     | Initiale aktivieren            | enable / disable                              |
| Außenabstand | Abstände des Inhalts anpassbar | small, default, medium, large, x-large, keine |
