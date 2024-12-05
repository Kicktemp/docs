### `settings.md` – Erweiterte Formular-Konfiguration

In dieser Sektion findest du die erweiterten Einstellungen für dein Formular, einschließlich Layout, Validierung und Modal-Optionen. Diese Felder bieten dir die Möglichkeit, das Erscheinungsbild und Verhalten des Formulars weiter anzupassen.

---

| **Feld**                      | **Beschreibung**                                                                                                                   | **Bedingung (wenn gesetzt)** | **Source** |
|-------------------------------|------------------------------------------------------------------------------------------------------------------------------------|------------------------------|-----------|
| **ccs**                        | Eine durch Kommas getrennte Liste von Empfängern im CC-Feld (Carbon Copy).                                                                                          | -                            | Ja        |
| **bccs**                       | Eine durch Kommas getrennte Liste von Empfängern im BCC-Feld (Blind Carbon Copy).                                                                                          | -                            | Ja        |
| **horizontal**                 | Bestimmt, ob das Formular im horizontalen Layout angezeigt wird.                                                                                                  | -                            | Nein      |
| **novalidate**                 | Wenn aktiviert, wird die HTML5-Validierung für das Formular deaktiviert.                                                                                                   | -                            | Nein      |
| **show_label**                 | Wenn aktiviert, werden die Labels für jedes Formularfeld angezeigt.                                                                                                        | -                            | Nein      |
| **gap**                        | Setzt den Abstand (Gap) zwischen den Spalten im Grid-Layout des Formulars.                                                                                                  | -                            | Ja        |
| **form_size**                  | Bestimmt die Größe des Formulars.                                                                                                                                            | -                            | Ja        |
| **form_style**                 | Bestimmt den Stil des Formulars.                                                                                                                                        | -                            | Ja        |
| **label_button**               | Bestimmt den Text des Formular-Submit-Buttons.                                                                                                                             | -                            | Ja        |
| **button_style**               | Bestimmt den Stil des Submit-Buttons.                                                                                                                                         | -                            | Ja        |
| **button_fullwidth**           | Wenn aktiviert, wird der Submit-Button über die gesamte Breite des Formulars angezeigt.                                                                                      | -                            | Nein      |
| **show_inmodal**               | Wenn aktiviert, wird das Formular in einem Modal-Fenster angezeigt.                                                                                                       | -                            | Ja        |
| **modal_id**                   | Die ID des Modal-Fensters. Wird verwendet, wenn das Formular im Modal angezeigt werden soll.                                                                                  | Wenn **show_inmodal** aktiviert ist    | Ja        |
| **modal_center**               | Wenn aktiviert, wird das Modal-Fenster zentriert auf der Seite angezeigt.                                                                                                    | Wenn **show_inmodal** aktiviert ist    | Ja        |
| **modal_container**            | Wenn aktiviert, wird ein Container-Modifikator für das Modal angewendet.                                                                                                    | Wenn **show_inmodal** aktiviert ist    | Ja        |
| **modal_header**               | Der Header des Modals, der in der oberen Ecke des Modals angezeigt wird.                                                                                                     | Wenn **show_inmodal** aktiviert ist    | Ja        |
| **close_style**                | Bestimmt den Stil des Schließen-Buttons im Modal.                                                                                                                              | Wenn **show_inmodal** aktiviert ist    | Ja        |

---

### Beschreibung der Felder

#### **ccs (CCs)**
Gib eine durch Kommas getrennte Liste von E-Mail-Adressen an, an die eine Kopie des Formulars gesendet wird. Dies ist nützlich, wenn mehrere Personen eine Kopie der gesendeten E-Mail erhalten sollen.

**Beispiel:**
- `admin@company.com, manager@company.com`

#### **bccs (BCCs)**
Dies ist eine durch Kommas getrennte Liste von E-Mail-Adressen, an die das Formular im Blind Carbon Copy (BCC)-Feld gesendet wird. Empfänger im BCC sehen nicht, an wen die E-Mail noch gesendet wurde.

**Beispiel:**
- `admin@company.com, bcc@company.com`

#### **horizontal**
Mit dieser Einstellung kannst du dein Formular in einem horizontalen Layout darstellen. Standardmäßig ist das Formular vertikal ausgerichtet, aber wenn du das Kästchen aktivierst, werden die Formularfelder nebeneinander statt untereinander angezeigt.

#### **novalidate**
Aktiviert oder deaktiviert die HTML5-Formularvalidierung. Wenn aktiviert, werden keine eingebauten HTML5-Validierungen angewendet, und du kannst eigene Validierungsregeln oder ein benutzerdefiniertes Verhalten verwenden.

#### **show_label**
Bestimmt, ob die Formularfelder Labels anzeigen sollen. Wenn aktiviert, wird der Name des Feldes über dem Eingabefeld angezeigt. Wenn deaktiviert, kannst du Platzhalter verwenden, die in den Eingabefeldern angezeigt werden.

#### **gap**
Setzt den Abstand (Gap) zwischen den Spalten in einem Formularlayout. Dies hilft, das Layout des Formulars visuell anzupassen und eine benutzerdefinierte Benutzeroberfläche zu gestalten.

#### **form_size**
Definiert die Größe des Formulars. Du kannst "Small", "Default" oder "Large" auswählen, um die Größe des gesamten Formulars auf der Seite anzupassen.

#### **form_style**
Wählt das Stil-Design des Formulars. Du kannst zwischen dem Standardstil und dem leeren Stil ("Blank") wählen, um das Aussehen des Formulars zu steuern.

#### **label_button**
Definiert den Text des Buttons, der das Formular abschickt. Der Standardtext ist "Send", aber du kannst ihn nach Bedarf ändern.

**Beispiel:**
- `Submit`

#### **button_style**
Wählt den Stil des Submit-Buttons aus. Du kannst zwischen verschiedenen Stilen wie "Primary", "Secondary" und "Danger" wählen, um den Button visuell hervorzuheben.

**Beispiel:**
- `Primary`

#### **button_fullwidth**
Wenn aktiviert, wird der Submit-Button die gesamte Breite des Formulars ausfüllen. Dies ist besonders nützlich für größere Formulare oder wenn du ein sehr minimalistisches Design bevorzugst.

#### **show_inmodal**
Wenn aktiviert, wird das Formular in einem Modal-Fenster angezeigt. Dies bedeutet, dass das Formular in einem Popup erscheint, wenn der Benutzer auf einen Button oder ein anderes Element klickt.

#### **modal_id**
Dies ist die ID des Modal-Fensters, das das Formular enthält. Du musst diese ID angeben, damit der Button oder andere Auslöser das Modal-Fenster korrekt ansprechen können.

#### **modal_center**
Wenn aktiviert, wird das Modal-Fenster auf der Seite zentriert. Ohne diese Option kann das Modal-Fenster an der oberen linken Ecke erscheinen, abhängig von den CSS-Einstellungen.

#### **modal_container**
Ein Container-Modifikator, der es ermöglicht, das Modal-Fenster zusätzlich anzupassen. Dies ist hilfreich, wenn du das Modal-Fenster in einen bestimmten Container einfügen möchtest, um es visuell besser in deine Seite zu integrieren.

#### **modal_header**
Der Titel des Modal-Fensters. Du kannst hier einen Text wie "Formular zur Anfrage" eingeben oder ihn leer lassen, wenn du kein Header-Element benötigst.

#### **close_style**
Bestimmt, wie der Schließen-Button im Modal-Fenster aussieht. Du kannst zwischen "Close Default" (Standard-Stil) und "Close Outside" (Schließen des Modals durch Klicken außerhalb) wählen.

---

**Fazit**
Diese erweiterten Einstellungen für dein Formular ermöglichen es dir, das Verhalten und das Layout des Formulars genau nach deinen Wünschen anzupassen. Du kannst sowohl das Design als auch das Verhalten der Formulareingabe und der Formularübermittlung steuern, um die Benutzererfahrung zu verbessern.

---

**Bist du bereit für die nächste Sektion oder möchtest du noch etwas hinzufügen?**
