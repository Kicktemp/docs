# Settings

## Inhalte

Im Folgenden werden die Einstellungsmöglichkeiten des Hubspot Addons erklärt.

| Setting                                  | Description                                                                        | Bereichsvariablen            |
|------------------------------------------|------------------------------------------------------------------------------------|------------------------------|
| Forms                                    | Auswahl des Formulares                                                             | Kontaktformulare aus Hubspot |
| Eingabe / Add Input                      | Hier können der Tabelle weitere Felder hinzugefügt werden                          | Hubspot Fields               |
| Nach dem Senden                          | Auswahl, ob dem Absender eine Nachricht gezeigt oder dieser umgeleitet werden soll | zeige Nachricht / umleiten   |
| HubSpot can Override Message or Redirect | Auswahl, ob HubSpot die "Nach dem Senden" Auswahl überschreiben kann               | enable / disable             |
| Nachricht                                | Nachricht, die dem Benutzer/-in nach dem Senden angezeigt wird.                    | Text                         |

## Einstellungen

| Setting          | Description                                                                               |
|------------------|-------------------------------------------------------------------------------------------|
| Spam- Protection | Auswahl der Captcha                                                                       |
| Senden an Email  |                                                                                           |
| Layout 1-2       | Hier kann die Darstellung auf verschiedenen Endgeräten eingestellt werden.                |
| Layout 1-2       | Hier kann die Darstellung auf verschiedenen Endgeräten eingestellt werden.                |
| Error Messages   | Text der Fehlermeldung                                                                    |
| Formular         | Hier kann das Layout des Formulares angepasst werden.                                     |
| Button           | Stil und Text des Button kann hier angepasst werden                                       |
| Modal            | Auswahl ob das Formular in einem Modalfenster angezeigt wird und Layout des Modalfensters |

**Spam- Protection**

| Description         | Bereichsvariablen                                            |
|---------------------|--------------------------------------------------------------|
| Auswahl der Captcha | keine, Honeypot, Google Captcha, Google Captcha und Honeypot |


**Layout 1-2 / 1-3 **

| Setting          | Description                                                                                     |
|------------------|-------------------------------------------------------------------------------------------------|
| Phone Portrait   | Fraction Layouts (1/1-5/6), fixed Layouts (Expand, auto, small, medium, large, x-large 2x-large |
| Phone Landscape  | Fraction Layouts (1/1-5/6), fixed Layouts (Expand, auto, small, medium, large, x-large 2x-large |
| Tablet Landscape | Fraction Layouts (1/1-5/6), fixed Layouts (Expand, auto, small, medium, large, x-large 2x-large |
| Desktop          | Fraction Layouts (1/1-5/6), fixed Layouts (Expand, auto, small, medium, large, x-large 2x-large |
| Large Screen     | Fraction Layouts (1/1-5/6), fixed Layouts (Expand, auto, small, medium, large, x-large 2x-large |

**Error Messages**

| Description            | Bereichsvariablen |
|------------------------|-------------------|
| Error consent checkbox | Text              |
| Error message          | Text              |
| Error Email message    | Text              |
| Error Equal message    | Text              |

**Formular**

| Description                    | Bereichsvariablen      |
|--------------------------------|------------------------|
| Gruppen Text verbergen         | enable / disable       |
| Radio Option pro Zeile         | enable / disable       |
| Checkbox pro Zeile             | enable / disable       |
| Horizontal Form                | enable / disable       |
| disable HTML5 Validation       | enable / disable       |
| Label als Placeholder anzeigen | enable / disable       |
| Show Label                     | enable / disable       |
| Column Gap                     | small, medium, default |
| Size                           | small, default, large  |

**Button**

| Description     | Bereichsvariablen                          |
|-----------------|--------------------------------------------|
| Button          | Text                                       |
| Style           | default, primary, secondary, danger, text  |
| Full width body | enable / disable                           |

## Hinzufügbare Feldtypen

Hier werden kurz die verschiedenen Arten von Feldtypen erklärt.

| Feldtyp   | Description                                                                        |
|-----------|------------------------------------------------------------------------------------|
| Eingabe   | Reines Text-Eingabefeld für z.B. Namen                                             |
| Textarea  | Textfeld für längere Texte. Angabe individueller Zeilennenge möglich.              |
| Auswählen | Über den Punkt Optionen können verschiedene Auswahlmöglichkeiten angegeben werden. |
| E-Mail    | Dieses Feld ist für E-Mailadressen vorgesehen. Der Eintrag muss ein @ beinhalten.  |
| Datum     | Datumsfeld. Es gibt die Möglichkeit das Datum über einen Kalender einzutragen.     |
| Versteckt | Dieses Feld ist nicht sichtbar. Es dient z.B. Vorbelegung bzw. Vorauswahl.         |
| Radio     | Anklickauswahl                                                                     |
| Checkbox  | Abhaken                                                                            |
| Text      | Feld füt Text zwischen den Formularfeldern                                         |

**Modal**

| Description                       | Bereichsvariablen             |
|-----------------------------------|-------------------------------|
| Formular in Modalfenster anzeigen | enable / disable              |
| Modal ID                          | Nummern                       |
| Container modifier                | enable / disable              |
| Center modal                      | enable / disable              |
| Modal Header                      | Text                          |
| Close Button Style                | close default / close outside |

## Einstellung der hinzugefügten Formularfelder

**Eingabe**

| Setting                           | Description                                                                  | Dynamic  |
|-----------------------------------|------------------------------------------------------------------------------|:--------:|
| Name                              | Name des Formularfeldes                                                      | &#x2713; |
| Label                             | Titel des Formularfeldes                                                     | &#x2713; |
| Label anzeigen                    | Soll das Anzeigen des Label für entsprechendes Formularfeld erzwungen werden | &#x2713; |
| Placeholder                       | Hier kann der Text für den Placeholder (Felderklärung) eingetragen werden.   | &#x2713; |
| Erforderlich                      | Ist das Feld ein Pflichtfeld                                                 | &#x2713; |
| Fehlermeldung  (wenn Pflichtfeld) | Text der angezeigten Fehlermeldung wenn das Pflichtfeld nicht gefüllt ist    | &#x2713; |
| Equal                             | Name des Feldes mit dem das Formularfeld übereinstimmen muss.                | &#x2713; |
| Wert                              | Vorauswahl                                                                   | &#x2713; |
| Icon                              | Hier kann ein Icon der im Feld angezeigt werden soll gewählt werden          | &#x2713; |

**Textarea**

| Setting                           | Description                                                                  | Dynamic  |
|-----------------------------------|------------------------------------------------------------------------------|:--------:|
| Name                              | Name des Formularfeldes                                                      | &#x2713; |
| Label                             | Titel des Formularfeldes                                                     | &#x2713; |
| Label anzeigen                    | Soll das Anzeigen des Label für entsprechendes Formularfeld erzwungen werden | &#x2713; |
| Placeholder                       | Hier kann der Text für den Placeholder (Felderklärung) eingetragen werden.   | &#x2713; |
| Größe                             | Eintragbaren Zeilenmenge im Feld                                             | &#x2713; |
| Erforderlich                      | Ist das Feld ein Pflichtfeld                                                 | &#x2713; |
| Fehlermeldung  (wenn Pflichtfeld) | Text der angezeigten Fehlermeldung wenn das Pflichtfeld nicht gefüllt ist    | &#x2713; |
| Equal                             | Name des Feldes mit dem das Formularfeld übereinstimmen muss.                | &#x2713; |
| Wert                              | Vorauswahl                                                                   | &#x2713; |

**Auswahl**

| Setting                           | Description                                                                  | Dynamic  |
|-----------------------------------|------------------------------------------------------------------------------|:--------:|
| Name                              | Name des Formularfeldes                                                      | &#x2713; |
| Label                             | Titel des Formularfeldes                                                     | &#x2713; |
| Label anzeigen                    | Soll das Anzeigen des Label für entsprechendes Formularfeld erzwungen werden | &#x2713; |
| Placeholder                       | Hier kann der Text für den Placeholder (Felderklärung) eingetragen werden.   | &#x2713; |
| Option                            | Hier werden die Auswahloptionen eingetragen                                  | &#x2713; |
| Multiple                          | Mehrfachauswahl ermöglichen                                                  | &#x2713; |
| Autofocus                         | ?                                                                            | &#x2713; |
| Größe                             | Eintragbaren Zeilenmenge im Feld                                             | &#x2713; |
| Erforderlich                      | Ist das Feld ein Pflichtfeld                                                 | &#x2713; |
| Fehlermeldung  (wenn Pflichtfeld) | Text der angezeigten Fehlermeldung wenn das Pflichtfeld nicht gefüllt ist    | &#x2713; |
| Equal                             | Name des Feldes mit dem das Formularfeld übereinstimmen muss.                | &#x2713; |
| Wert                              | Vorauswahl                                                                   | &#x2713; |

**E-mail**

| Setting                           | Description                                                                  | Dynamic  |
|-----------------------------------|------------------------------------------------------------------------------|:--------:|
| Name                              | Name des Formularfeldes                                                      | &#x2713; |
| Label                             | Titel des Formularfeldes                                                     | &#x2713; |
| Label anzeigen                    | Soll das Anzeigen des Label für entsprechendes Formularfeld erzwungen werden | &#x2713; |
| Placeholder                       | Hier kann der Text für den Placeholder (Felderklärung) eingetragen werden.   | &#x2713; |
| Erforderlich                      | Ist das Feld ein Pflichtfeld                                                 | &#x2713; |
| Fehlermeldung  (wenn Pflichtfeld) | Text der angezeigten Fehlermeldung wenn das Pflichtfeld nicht gefüllt ist    | &#x2713; |
| Fehler E-Mail-Nachricht           | ?                                                                            | &#x2713; |
| Wert                              | Vorauswahl                                                                   | &#x2713; |

**Datum**

| Setting                           | Description                                                                  | Dynamic  |
|-----------------------------------|------------------------------------------------------------------------------|:--------:|
| Name                              | Name des Formularfeldes                                                      | &#x2713; |
| Label                             | Titel des Formularfeldes                                                     | &#x2713; |
| Label anzeigen                    | Soll das Anzeigen des Label für entsprechendes Formularfeld erzwungen werden | &#x2713; |
| Placeholder                       | Hier kann der Text für den Placeholder (Felderklärung) eingetragen werden.   | &#x2713; |
| min                               | Datumswert darf nicht kleiner sein als der angegebene min. Wert              | &#x2713; |
| max                               | Datumswert darf nicht größer sein als der angegebene max. Wert               | &#x2713; |
| Erforderlich                      | Ist das Feld ein Pflichtfeld                                                 | &#x2713; |
| Equal                             | Name des Feldes mit dem das Formularfeld übereinstimmen muss.                | &#x2713; |
| Wert                              | Vorauswahl                                                                   | &#x2713; |
| Icon                              | Hier kann ein Icon der im Feld angezeigt werden soll gewählt werden          | &#x2713; |

**Versteckt**

| Setting | Description             | Dynamic  |
|---------|-------------------------|:--------:|
| Name    | Name des Formularfeldes | &#x2713; |
| Wert    | Vorauswahl              | &#x2713; |

**Radio**

| Setting          | Description                                                                    | Dynamic  |
|------------------|--------------------------------------------------------------------------------|:--------:|
| Name             | Name des Formularfeldes                                                        | &#x2713; |
| Label            | Titel des Formularfeldes                                                       | &#x2713; |
| Label anzeigen   | Soll das Anzeigen des Label für entsprechendes Formularfeld erzwungen werden   | &#x2713; |
| Placeholder      | Hier kann der Text für den Placeholder (Felderklärung) eingetragen werden.     | &#x2713; |
| Optionen         | Hier werden die Auswahloptionen hinzugefügt                                    |          |
| Option pro Zeile | Die Auswahloptionen werden pro Zeile angezeigt                                 | &#x2713; |
| Erforderlich     | Ist das Feld ein Pflichtfeld                                                   | &#x2713; |
| Fehlermeldung    | Text der angezeigten Fehlermeldung wenn das Pflichtfeld nicht gefüllt ist      | &#x2713; |
| Equal            | Name des Feldes mit dem das Formularfeld übereinstimmen muss.                  | &#x2713; |
| Wert             | Vorauswahl                                                                     | &#x2713; |

**Checkbox**

| Setting       | Description                                                               | Dynamic  |
|---------------|---------------------------------------------------------------------------|:--------:|
| Name          | Name des Formularfeldes                                                   | &#x2713; |
| Erforderlich  | Ist das Feld ein Pflichtfeld                                              | &#x2713; |
| Fehlermeldung | Text der angezeigten Fehlermeldung wenn das Pflichtfeld nicht gefüllt ist | &#x2713; |
| Equal         | Name des Feldes mit dem das Formularfeld übereinstimmen muss.             | &#x2713; |
| Wert          | Vorauswahl                                                                | &#x2713; |
| Inhalt        | Text der Checkbox                                                         | &#x2713; |

**Text**

| Setting       | Description              | Dynamic  |
|---------------|--------------------------|:--------:|
| Name          | Name des Formularfeldes  | &#x2713; |
| Inhalt        | Text anzuzeigende Text   | &#x2713; |
