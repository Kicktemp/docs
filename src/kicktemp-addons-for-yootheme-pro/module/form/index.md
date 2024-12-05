# Formular-Modul für YOOtheme Pro

Das Formular-Modul für YOOtheme Pro ermöglicht dir, benutzerdefinierte Formulare zu erstellen und diese dynamisch in deine Templates zu integrieren. Es bietet eine leistungsstarke Möglichkeit, Formularfelder zu erstellen, zu konfigurieren und zu verarbeiten – ganz nach deinen Bedürfnissen.

### Warum ist das Formular-Modul wichtig?

Formulare sind auf nahezu jeder Website unerlässlich – sei es für Kontaktformulare, Newsletter-Anmeldungen oder Umfragen. Das **Formular-Modul** für YOOtheme Pro bietet dir die Flexibilität, Formulare zu gestalten und mit dynamischen Inhalten zu füllen. Es ermöglicht dir, Felder anzupassen, die mit bestimmten Daten aus dem Backend, z.B. Benutzerinformationen oder Produktdaten, vorab gefüllt werden.

Das Modul versendet beim Absenden des Formulars eine E-Mail, die an einen Empfänger gesendet wird. Dabei kannst du die Formularfelder nach Bedarf verarbeiten und anpassen, bevor sie abgesendet werden. Besonders wichtig ist, dass du sowohl vor als auch nach dem Absenden auf die Felder zugreifen kannst, um sie weiter zu verarbeiten.

### Wichtige Features:

- **Flexibilität**: Anpassbare Formulare mit verschiedenen Feldtypen wie Text, E-Mail, Dateiuploads und mehr.
- **Dynamische Felder**: Felder können mit dynamischen Inhalten aus dem CMS befüllt werden.
- **E-Mail-Benachrichtigungen**: Formulardaten können per E-Mail verschickt werden.
- **Spam-Schutz**: Unterstützt verschiedene Mechanismen wie Captcha und Honeypot zur Spam-Vermeidung.
- **Trigger vor und nach Absenden**: Vor und nach dem Absenden des Formulars können Trigger verwendet werden, um zusätzliche Felder zu verarbeiten.

### Wie funktioniert das Formular-Modul?

Das Formular-Modul funktioniert auf der Basis von benutzerdefinierten Feldern, die im Backend konfiguriert werden. Sobald ein Benutzer das Formular ausfüllt und absendet, wird eine E-Mail an die definierten Empfänger gesendet. Du kannst zudem entscheiden, ob nach dem Absenden eine Bestätigungsnachricht angezeigt wird oder ob der Benutzer auf eine andere Seite weitergeleitet wird.

Die Konfiguration des Formulars erfolgt über eine benutzerfreundliche Oberfläche, die es dir ermöglicht, Formularelemente hinzuzufügen, zu bearbeiten und deren Verhalten anzupassen. Jedes Formularfeld kann durch die Verwendung von **Triggers** und **Ereignissen** vor und nach dem Absenden angepasst werden.

### Funktionsweise der Formularverarbeitung

Das Formular-Modul empfängt die Formulardaten und verarbeitet diese durch eine `submit`-Methode. Dabei wird eine Reihe von Validierungen und Verarbeitungsschritten durchgeführt:

1. **Verarbeitung der Formulardaten**: Die Formulardaten werden nach dem Absenden durch die `submit`-Methode verarbeitet.
2. **Überprüfung der Sicherheitsmerkmale**: Zunächst werden Sicherheitsmaßnahmen wie Token und Honeypot überprüft.
3. **Datenweiterverarbeitung**: Nach der Validierung wird das Formular weiterverarbeitet. Es können Trigger wie `onKickyooaddonsBeforeSubmit` und `onKickyooaddonsAfterSubmit` genutzt werden, um auf die Formulardaten zuzugreifen und diese weiter zu verarbeiten.
4. **E-Mail-Versand**: Sobald die Daten verarbeitet sind, wird eine E-Mail an die angegebenen Empfänger gesendet.
5. **Benachrichtigungen**: Das Formular-Modul kann auch Benachrichtigungen an den Benutzer senden oder eine Weiterleitung auf eine andere URL vornehmen.

### Flexibilität durch Trigger

Ein besonders leistungsstarkes Feature des Formular-Moduls ist die Möglichkeit, auf die Formularfelder vor und nach dem Absenden zuzugreifen. Über die `before`- und `after`-Submit-Trigger kannst du benutzerdefinierte Logiken implementieren, bevor das Formular abgeschickt wird oder nachdem die Antwort versendet wurde. Das gibt dir die Flexibilität, Daten zu verarbeiten oder zu ändern, ohne die Formularstruktur selbst zu verändern.

#### Beispiele:

- **Vor dem Absenden**: Du kannst die Formulardaten vor dem Absenden validieren oder ergänzen.
- **Nach dem Absenden**: Du kannst Benachrichtigungen anzeigen, Weiterleitungen vornehmen oder die E-Mail weiter anpassen.

Das Formular-Modul ist daher besonders geeignet für dynamische Webanwendungen, in denen Formulardaten in Echtzeit verarbeitet und flexibel angezeigt werden müssen.

---
