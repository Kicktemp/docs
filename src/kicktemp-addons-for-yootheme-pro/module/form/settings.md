# **Settings**

Im Folgenden werden alle Einstellungsmöglichkeiten erklärt.

# Formulareinstellungen

## Inhalt

| Setting                                | Description                                                                                              |
|----------------------------------------|----------------------------------------------------------------------------------------------------------|
| Empfänger                              | Empfänger E-Mailadresse oder Liste von E-Mailadressen                                                    |
| From                                   | Absender E-Mailadresse (wenn nicht ausgefüllt Wert aus Webseiten- Konfiguration)                         |
| Fromname                               | Absendername (wenn nicht ausgefüllt Wert aus Webseiten- Konfiguration)                                   |
| Replys to                              | Antwort- Adresse                                                                                         |
| Betreff                                | Betreff der E-Mail                                                                                       |
| Body                                   | Inhalt der E-Mail                                                                                        |
| Kopie an Absender                      | Auswahl, ob an Formularabsender eine Kopie gesendet werden soll                                          |
| Den E- Mail- Inhalt als HTML versenden | Auswahlmöglichkeit, ob der Inhalt als HTML versendet werden soll                                         |
| Nach dem Senden                        | Auswahl, ob nach dem Senden die Nachricht angezeigt werden soll oder ob der User umgeleitet werden soll  |
| Nachricht                              | Hier kann die Nachricht eingetragen werden, die dem Absender nach dem Senden angeziegt werden soll.      |

## Einstellungen

| Setting        | Description                                                                                                                    |
|----------------|--------------------------------------------------------------------------------------------------------------------------------|
| Send an E-Mail | Wenn Feld CCs und/oder BCCs eingetragen, wird entsprechend eine E-Mail versand.                                                |
| Formular       | Darstellungseinstellungen für das Formular, wie horizontales Formular, Zeige Labels (ja/nein), Spaltenabstand, Größe und Stil. |
| Button         | Text und Styling des Button                                                                                                    |
| Modal          | Auswahl, ob das Formular in einem Modalfenster angezeigt werden soll und entsprechende Einstellungsmöglichkeiten               |


# Feldtypen

Hier werden kurz die verschiedenen Arten von Feldtypen erklärt.

| Feldtyp     | Description                                                                        | Dynamic  |
|-------------|------------------------------------------------------------------------------------|:--------:|
| Eingabefeld | Reines Text-Eingabefeld für z.B. Namen                                             | &#x2713; |
| Textarea    | Textfeld für längere Texte. Angabe individueller Zeilennenge möglich.              | &#x2713; |
| Auswählen   | Über den Punkt Optionen können verschiedene Auswahlmöglichkeiten angegeben werden. | &#x2713; |
| E-Mail      | Dieses Feld ist für E-Mailadressen vorgesehen. Der Eintrag muss ein @ beinhalten.  | &#x2713; |
| Datum       | Datumsfeld. Es gibt die Möglichkeit das Datum über einen Kalender einzutragen.     | &#x2713; |
| Versteckt   | Dieses Feld ist nicht sichtbar. Es dient z.B. Vorbelegung bzw. Vorauswahl.         | &#x2713; |
| Radio       | Anklickauswahl                                                                     | &#x2713; |
| Checkbox    | Abhaken                                                                            | &#x2713; |
| Text        | Feld füt Text zwischen den Formularfeldern                                         | &#x2713; |
| Datei       | Feld um Dateien hochladen zu können.                                               | &#x2713; |
| Honeypot    | Feld für Spamprotection.                                                           | &#x2713; |
| Captcha     |                                                                                    | &#x2713; |

## Settings der Feldtypen

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

**Datei**

| Setting       | Description                                                                                               | Dynamic  |
|---------------|-----------------------------------------------------------------------------------------------------------|:--------:|
| Name          | Name des Formularfeldes                                                                                   | &#x2713; |
| Label         | Titel des Formularfeldes                                                                                  | &#x2713; |
| Placeholder   | Hier kann der Text für den Placeholder (Felderklärung) eingetragen werden.                                | &#x2713; |
| Multiple      | Mehrfachauswahl ermöglichen                                                                               | &#x2713; |
| Accept        | Zeichenkette, die definiert, welche Dateitypen die Dateieingabe akzeptieren soll                          | &#x2713; |
| Capture       | Zeichenkette, die angibt, welche Kamera für die Erfassung von Bild- oder Videodaten verwendet werden soll | &#x2713; |
| Erforderlich  | Ist das Feld ein Pflichtfeld                                                                              | &#x2713; |

**Honeypot**

| Setting                         | Description                                                                                               | Dynamic  |
|---------------------------------|-----------------------------------------------------------------------------------------------------------|:--------:|
| Name                            | Name des Formularfeldes                                                                                   | &#x2713; |
| min. Sekunden                   | Jede Eingabe die innerhalb der angegeben Zeit getätigt wird, wird als invalide eingestuft                 |
| Honeypot Feld Gefüllt Nachricht | Angezeigte Fehlermeldung, wenn das Honeypotfeld ausgefüllt wurde                                          |
| min. Sekunden für Nachricht     | Angezeigte Fehlermeldung, wenn das Formular zu schnell ausgefüllt und abgeschickt wird.                   |

**Captcha**

| Setting       | Description              | Dynamic  |
|---------------|--------------------------|:--------:|
| Name          | Name des Formularfeldes  | &#x2713; |
