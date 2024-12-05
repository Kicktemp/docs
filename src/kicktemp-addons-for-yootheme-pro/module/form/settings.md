# Grundeinstellungen für das Formular

In dieser Sektion werden die grundlegenden Einstellungen für das Formular festgelegt, darunter Empfänger, Absender, E-Mail-Inhalte und das Verhalten nach dem Absenden. Du kannst die Felder und ihre Beschreibungen anpassen, um das Formular genau nach deinen Anforderungen zu gestalten.

## Felder:

| **Feld**                      | **Beschreibung**                                                                                                               | **Bedingung (wenn gesetzt)**                           | **Source** |
|-------------------------------|----------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------|-----------|
| **content**                    | Das **content**-Feld enthält Formulareingabefelder, die du dynamisch hinzufügen kannst. Jedes Formularfeld wird durch **kickform_input** konfiguriert. | -                                                      | Ja        |
| **recipients**                 | Eine durch Kommas getrennte Liste von E-Mail-Empfängern für die Formularantworten.                                                                                   | -                                                      | Ja        |
| **from**                       | Die E-Mail-Adresse des Absenders. Standardmäßig wird die E-Mail-Adresse der Webseite verwendet.                                                                                       | -                                                      | Ja        |
| **fromname**                   | Der Name des Absenders. Standardmäßig wird der Name der Webseite verwendet.                                                                                             | -                                                      | Ja        |
| **reply_tos**                  | Eine durch Kommas getrennte Liste von **Reply-To**-Adressen. Diese werden verwendet, wenn auf das Formular geantwortet wird.                                            | -                                                      | Ja        |
| **subject**                    | Der Betreff der E-Mail, die an die Empfänger gesendet wird.                                                                                                                                   | -                                                      | Ja        |
| **body**                       | Der Inhalt der E-Mail, die an die Empfänger gesendet wird. Dieser Text kann als HTML verwendet werden, um eine detaillierte Nachricht zu erstellen.                       | -                                                      | Ja        |
| **email_copy**                 | Wenn aktiviert, wird eine Kopie der gesendeten E-Mail an den Absender (Submitter) verschickt.                                                                                   | -                                                      | Ja        |
| **subject_copy**               | Der Betreff für die E-Mail, die an den Submitter gesendet wird, wenn **email_copy** aktiviert ist.                                                                              | Wenn **email_copy** aktiviert ist                        | Ja        |
| **body_copy**                  | Der Inhalt der E-Mail, die an den Submitter gesendet wird, wenn **email_copy** aktiviert ist.                                                                                     | Wenn **email_copy** aktiviert ist                        | Ja        |
| **from_copy**                  | Die Absender-Adresse für die E-Mail, die an den Submitter geschickt wird, wenn **email_copy** aktiviert ist.                                                                       | Wenn **email_copy** aktiviert ist                        | Ja        |
| **fromname_copy**              | Der Absendername für die E-Mail, die an den Submitter geschickt wird, wenn **email_copy** aktiviert ist.                                                                         | Wenn **email_copy** aktiviert ist                        | Ja        |
| **recipients_copy**            | Eine durch Kommas getrennte Liste von Empfängern, an die die E-Mail-Kopie geschickt wird, wenn **email_copy** aktiviert ist.                                                    | Wenn **email_copy** aktiviert ist                        | Ja        |
| **html**                       | Gibt an, ob die E-Mail im HTML-Format gesendet werden soll.                                                                                                                           | -                                                      | Ja        |
| **provider.after_submit**      | Bestimmt das Verhalten nach dem Absenden des Formulars. Wähle zwischen "Nachricht anzeigen", "Seite weiterleiten" oder "Benachrichtigung anzeigen".                             | -                                                      | Ja        |
| **provider.message**           | Die Nachricht, die dem Benutzer nach dem Absenden des Formulars angezeigt wird, wenn **provider.after_submit** auf „Nachricht anzeigen“ oder „Benachrichtigung anzeigen“ gesetzt ist. | Wenn **provider.after_submit** auf 'message' oder 'notification' gesetzt ist | Ja        |
| **provider.redirect**          | Der Link, zu dem der Benutzer nach dem Absenden weitergeleitet wird, wenn **provider.after_submit** auf 'redirect' gesetzt ist.                                                  | Wenn **provider.after_submit** auf 'redirect' gesetzt ist | Ja        |
| **provider.notification.pos**  | Position der Benachrichtigung auf dem Bildschirm (z. B. oben links, unten rechts). Wird verwendet, wenn **provider.after_submit** auf 'notification' gesetzt ist.               | Wenn **provider.after_submit** auf 'notification' gesetzt ist | Ja        |
| **provider.notification.timeout** | Die Zeit (in Millisekunden), nach der die Benachrichtigung verschwindet, wenn **provider.after_submit** auf 'notification' gesetzt ist. Wenn auf 0 gesetzt, bleibt die Benachrichtigung dauerhaft sichtbar. | Wenn **provider.after_submit** auf 'notification' gesetzt ist | Ja        |
| **provider.notification.status**  | Bestimmt den Status (Farbe) der Benachrichtigung (z. B. Erfolg, Warnung, Fehler). Wird verwendet, wenn **provider.after_submit** auf 'notification' gesetzt ist.                  | Wenn **provider.after_submit** auf 'notification' gesetzt ist | Ja        |

---

### Beschreibung der wichtigsten Felder:

#### **content**
Das **content**-Feld fügt dynamisch Formulareingabefelder hinzu. Hier werden alle **kickform_input**-Elemente integriert, die du über die Einstellungen definieren kannst. Dies ermöglicht es dir, Formulare dynamisch zu erstellen, ohne den Code jedes Mal neu schreiben zu müssen. Du kannst Platzhalter wie `{name}` oder `{email}` verwenden, um bestimmte Daten dynamisch einzufügen.

**Beispiel:**
- **content**: Füge ein Eingabefeld mit dem **Name** des Benutzers ein, indem du `{name}` verwendest.
- **Verwendung im Formular**: `Betreff: Neue Anfrage von {name} {email}`

#### **recipients**
Dieses Feld gibt an, an welche E-Mail-Adressen das Formular nach dem Absenden gesendet wird. Es kann eine oder mehrere E-Mail-Adressen enthalten, die durch Kommas getrennt sind.

**Beispiel:**
- `nils@kicktemp.com, support@kicktemp.com`

#### **from und fromname**
Die **from**-E-Mail-Adresse und der **fromname** sind die Absenderadresse und der Absendername, die in der gesendeten E-Mail erscheinen. Standardmäßig werden die globalen Einstellungen der Website verwendet.

#### **subject und body**
Hier legst du den **Betreff** und den **Inhalt** der E-Mail fest. Du kannst Platzhalter verwenden, um dynamische Daten einzufügen, wie z.B. den Namen des Benutzers oder den Inhalt des Formulars.

**Beispiel:**
- **subject**: "Neue Anfrage von {name}"
- **body**: "Hallo {name},<br>Danke für deine Anfrage. Wir werden uns in Kürze bei dir melden."

#### **provider.after_submit**
Dieses Feld definiert, was nach dem Absenden des Formulars passiert. Du kannst wählen, ob eine Nachricht angezeigt wird, der Benutzer weitergeleitet wird oder eine Benachrichtigung erscheint.

**Beispiel:**
- **"message"**: Zeigt dem Benutzer eine Erfolgsmeldung nach der Einsendung.
- **"redirect"**: Leitet den Benutzer nach der Einsendung auf eine andere Seite weiter.

#### **provider.message**
Die **provider.message** ist die Nachricht, die nach dem Absenden des Formulars angezeigt wird, wenn der Wert von **provider.after_submit** auf „Nachricht anzeigen“ gesetzt wurde.

**Beispiel:**
- "Vielen Dank für deine Anfrage. Wir melden uns in Kürze bei dir!"

#### **provider.notification.pos, timeout, status**
Diese Felder steuern die Position, Dauer und den Status (Farbe) der Benachrichtigung, die nach dem Absenden des Formulars angezeigt wird.

**Beispiel:**
- **Position**: `top-right`
- **Status**: `success`
- **Timeout**: `5000` (5 Sekunden)

---

### Fazit

Die **Grundeinstellungen** des Formulars bieten dir eine mächtige Möglichkeit, deine Formulare flexibel und dynamisch zu gestalten. Von der Konfiguration der Empfänger bis hin zur Definition des Verhaltens nach der Formularübermittlung – diese Einstellungen bieten dir eine hohe Kontrolle. Außerdem können Platzhalter und benutzerdefinierte Tags verwendet werden, um die Formulardaten dynamisch in den E-Mail-Inhalt zu integrieren und das Verhalten nach dem Absenden anzupassen.
