# Inhaltseinstellungen (Content)

Das Brevo-Modul bietet flexible Einstellungen, um Inhalte und das Verhalten des Formulars individuell anzupassen.

---

## **Listen und Datenschutz**

| **Label**              | **Beschreibung**                                                              | **Optionen**                               | **Standardwert**       |
|------------------------|-------------------------------------------------------------------------------|-------------------------------------------|-----------------------|
| **Listen**             | Auswahl der Listen, in die sich Benutzer eintragen können.                   | Dynamisch über Brevo API geladen          | Keine Auswahl         |
| **Double Opt-in**      | Aktiviert das Double-Opt-In-Verfahren.                                        | `true`, `false`                           | `true`               |
| **Template ID**        | Auswahl der Double-Opt-In-Vorlage. Nur sichtbar, wenn Double Opt-in aktiv ist.| Textfeld                                  | Keine Auswahl         |
| **Opt-In Redirection** | Die URL, zu der Benutzer nach Bestätigung der Opt-In-Mail weitergeleitet werden. | URL                                       | Keine URL            |
| **Privacy Checkbox**   | Text für die Datenschutzrichtlinie, der als Checkbox angezeigt wird.          | Textfeld                                  | Kein Text            |

---

## **Verhalten nach Absenden**

| **Label**              | **Beschreibung**                                                              | **Optionen**                               | **Standardwert**       |
|------------------------|-------------------------------------------------------------------------------|-------------------------------------------|-----------------------|
| **After Submit**       | Legt fest, ob eine Nachricht angezeigt oder zu einer URL weitergeleitet wird. | `Message`, `Redirect`                     | `Message`            |
| **Message**            | Nachricht, die nach dem Absenden angezeigt wird, wenn After Submit auf `Message` gesetzt ist. | Textfeld | `"You've been subscribed successfully."` |
| **Redirect**           | URL, zu der Benutzer nach dem Absenden weitergeleitet werden, wenn After Submit auf `Redirect` gesetzt ist. | URL | Keine URL |
