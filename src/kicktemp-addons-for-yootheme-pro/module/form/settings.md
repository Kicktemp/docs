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

| Feldtyp     | Description                                                                        |
|-------------|------------------------------------------------------------------------------------|
| Eingabefeld | Reines Text-Eingabefeld für z.B. Namen                                             |
| Textarea    | Textfeld für längere Texte. Angabe individueller Zeilennenge möglich.              |
| Auswählen   | Über den Punkt Optionen können verschiedene Auswahlmöglichkeiten angegeben werden. |
| E-Mail      | Dieses Feld ist für E-Mailadressen vorgesehen. Der Eintrag muss ein @ beinhalten.  |
| Datum       | Datumsfeld. Es gibt die Möglichkeit das Datum über einen Kalender einzutragen.     |
| Versteckt   | Dieses Feld ist nicht sichtbar. Es dient z.B. Vorbelegung bzw. Vorauswahl.         |
| Radio       | Anklickauswahl                                                                     |
| Checkbox    | Abhaken                                                                            |
| Text        | Feld füt Text zwischen den Formularfeldern                                         |
| Datei       | Feld um Dateien hochladen zu können.                                               |
| Honeypot    | Feld für Spamprotection.                                                           |
| Captcha     |

## Settings der Feldtypen

**Eingabe**

| Setting                           | Description                                                                  |
|-----------------------------------|------------------------------------------------------------------------------|
| Name                              | Name des Formulares                                                          |
| Label                             | Titel des Formularfeldes                                                     |
| Label anzeigen                    | Soll das Anzeigen des Label für entsprechendes Formularfeld erzwungen werden |
| Placeholder                       | Hier kann der Text für den Placeholder (Felderklärung) eingetragen werden.   |
| Erforderlich                      | Ist das Feld ein Pflichtfeld                                                 |
| Fehlermeldung  (wenn Pflichtfeld) | Text der angezeigten Fehlermeldung wenn das Pflichtfeld nicht gefüllt ist    |
| Equal                             | Name des Feldes mit dem das Formularfeld übereinstimmen muss.                |
| Wert                              | Vorauswahl                                                                   |
| Icon                              | Hier kann ein Icon der im Feld angezeigt werden soll gewählt werden          |

**Textarea**

| Setting                           | Description                                                                  |
|-----------------------------------|------------------------------------------------------------------------------|
| Name                              | Name des Formulares                                                          |
| Label                             | Titel des Formularfeldes                                                     |
| Label anzeigen                    | Soll das Anzeigen des Label für entsprechendes Formularfeld erzwungen werden |
| Placeholder                       | Hier kann der Text für den Placeholder (Felderklärung) eingetragen werden.   |
| Größe                             | Eintragbaren Zeilenmenge im Feld                                             |
| Erforderlich                      | Ist das Feld ein Pflichtfeld                                                 |
| Fehlermeldung  (wenn Pflichtfeld) | Text der angezeigten Fehlermeldung wenn das Pflichtfeld nicht gefüllt ist    |
| Equal                             | Name des Feldes mit dem das Formularfeld übereinstimmen muss.                |
| Wert                              | Vorauswahl                                                                   |

**Auswahl**

| Setting                           | Description                                                                  |
|-----------------------------------|------------------------------------------------------------------------------|
| Name                              | Name des Formulares                                                          |
| Label                             | Titel des Formularfeldes                                                     |
| Label anzeigen                    | Soll das Anzeigen des Label für entsprechendes Formularfeld erzwungen werden |
| Placeholder                       | Hier kann der Text für den Placeholder (Felderklärung) eingetragen werden.   |
| Option                            | Hier werden die Auswahloptionen eingetragen                                  |
| Multiple                          | Mehrfachauswahl ermöglichen                                                  |
| Autofocus                         | ?                                                                            |
| Größe                             | Eintragbaren Zeilenmenge im Feld                                             |
| Erforderlich                      | Ist das Feld ein Pflichtfeld                                                 |
| Fehlermeldung  (wenn Pflichtfeld) | Text der angezeigten Fehlermeldung wenn das Pflichtfeld nicht gefüllt ist    |
| Equal                             | Name des Feldes mit dem das Formularfeld übereinstimmen muss.                |
| Wert                              | Vorauswahl                                                                   |

**E-mail**

| Setting                           | Description                                                                  |
|-----------------------------------|------------------------------------------------------------------------------|
| Name                              | Name des Formulares                                                          |
| Label                             | Titel des Formularfeldes                                                     |
| Label anzeigen                    | Soll das Anzeigen des Label für entsprechendes Formularfeld erzwungen werden |
| Placeholder                       | Hier kann der Text für den Placeholder (Felderklärung) eingetragen werden.   |
| Erforderlich                      | Ist das Feld ein Pflichtfeld                                                 |
| Fehlermeldung  (wenn Pflichtfeld) | Text der angezeigten Fehlermeldung wenn das Pflichtfeld nicht gefüllt ist    |
| Fehler E-Mail-Nachricht           | ?                                                                            |
| Wert                              | Vorauswahl                                                                   |

**Datum**

| Setting                           | Description                                                                  |
|-----------------------------------|------------------------------------------------------------------------------|
| Name                              | Name des Formulares                                                          |
| Label                             | Titel des Formularfeldes                                                     |
| Label anzeigen                    | Soll das Anzeigen des Label für entsprechendes Formularfeld erzwungen werden |
| Placeholder                       | Hier kann der Text für den Placeholder (Felderklärung) eingetragen werden.   |
| min                               | Datumswert darf nicht kleiner sein als der angegebene min. Wert              |
| max                               | Datumswert darf nicht größer sein als der angegebene max. Wert               |
| Erforderlich                      | Ist das Feld ein Pflichtfeld                                                 |
| Equal                             | Name des Feldes mit dem das Formularfeld übereinstimmen muss.                |
| Wert                              | Vorauswahl                                                                   |
| Icon                              | Hier kann ein Icon der im Feld angezeigt werden soll gewählt werden          |

**Versteckt**

| Setting | Description         |
|---------|---------------------|
| Name    | Name des Formulares |
| Wert    | Vorauswahl          |

**Radio**

| Setting          | Description                                                                    |
|------------------|--------------------------------------------------------------------------------|
| Name             | Name des Formulares                                                            |
| Label            | Titel des Formularfeldes                                                       |
| Label anzeigen   | Soll das Anzeigen des Label für entsprechendes Formularfeld erzwungen werden   |
| Placeholder      | Hier kann der Text für den Placeholder (Felderklärung) eingetragen werden.     |
| Optionen         | Hier werden die Auswahloptionen hinzugefügt                                    |
| Option pro Zeile | Die Auswahloptionen werden pro Zeile angezeigt                                 |
| Erforderlich     | Ist das Feld ein Pflichtfeld                                                   |
| Fehlermeldung    | Text der angezeigten Fehlermeldung wenn das Pflichtfeld nicht gefüllt ist      |
| Equal            | Name des Feldes mit dem das Formularfeld übereinstimmen muss.                  |
| Wert             | Vorauswahl                                                                     |

**Checkbox**

| Setting       | Description                                                               |
|---------------|---------------------------------------------------------------------------|
| Name          | Name des Formulares                                                       |
| Erforderlich  | Ist das Feld ein Pflichtfeld                                              |
| Fehlermeldung | Text der angezeigten Fehlermeldung wenn das Pflichtfeld nicht gefüllt ist |
| Equal         | Name des Feldes mit dem das Formularfeld übereinstimmen muss.             |
| Wert          | Vorauswahl                                                                |
| Inhalt        | Text der Checkbox                                                         |

**Text**

| Setting       | Description            |
|---------------|------------------------|
| Name          | Name des Formulares    |
| Inhalt        | Text anzuzeigende Text |

**Datei**

| Setting       | Description                                                                                               |
|---------------|-----------------------------------------------------------------------------------------------------------|
| Name          | Name des Formulares                                                                                       |
| Label         | Titel des Formularfeldes                                                                                  |
| Placeholder   | Hier kann der Text für den Placeholder (Felderklärung) eingetragen werden.                                |
| Multiple      | Mehrfachauswahl ermöglichen                                                                               |
| Accept        | Zeichenkette, die definiert, welche Dateitypen die Dateieingabe akzeptieren soll                          |
| Capture       | Zeichenkette, die angibt, welche Kamera für die Erfassung von Bild- oder Videodaten verwendet werden soll |
| Erforderlich  | Ist das Feld ein Pflichtfeld                                                                              |

**Honeypot**

| Setting                         | Description                                                                                               |
|---------------------------------|-----------------------------------------------------------------------------------------------------------|
| Name                            | Name des Formulares                                                                                       |
| min. Sekunden                   | Jede Eingabe die innerhalb der angegeben Zeit getätigt wird, wird als invalide eingestuft                 |
| Honeypot Feld Gefüllt Nachricht | Angezeigte Fehlermeldung, wenn das Honeypotfeld ausgefüllt wurde                                          |
| min. Sekunden für Nachricht     | Angezeigte Fehlermeldung, wenn das Formular zu schnell ausgefüllt und abgeschickt wird.                   |

**Captcha**

| Setting       | Description            |
|---------------|------------------------|
| Name          | Name des Formulares    |
