# Spam-Schutz im Kickform Modul

Das **Kickform Modul** bietet mehrere Methoden zum Schutz vor Spam und Missbrauch von Formularen. Diese Schutzmechanismen stellen sicher, dass nur legitime Benutzer das Formular absenden können und verhindern, dass Bots Formulare automatisch ausfüllen. Im Kickform Modul können drei Hauptmethoden aktiviert werden:

- **Joomla Session Token**
- **Honeypot-Feld**
- **Captcha** (Google reCaptcha oder EasyCalcCheck)

## 1. **Joomla Session Token**

Das **Session Token** von Joomla stellt sicher, dass das Formular nur von einem gültigen Benutzer abgesendet wird. Ein **Session Token** wird automatisch generiert, wenn ein Benutzer sich bei der Website anmeldet, und es hilft zu verhindern, dass ein Bot das Formular absendet.

### **Funktionsweise:**
- Wenn das Formular abgeschickt wird, wird das **Session Token** überprüft, um sicherzustellen, dass der Benutzer berechtigt ist, das Formular abzusenden.
- Wenn das Token ungültig oder abgelaufen ist, wird die Anfrage abgelehnt, und der Benutzer erhält eine Fehlermeldung.

### **Verwendung:**
Aktiviere die Option **Joomla Session** im Formular, um diesen Schutz zu aktivieren. Wenn diese Option aktiviert ist, überprüft das Formular, ob das Token gültig ist, bevor es die Daten absendet.

## 2. **Honeypot-Feld**

Das **Honeypot-Verfahren** ist ein unsichtbares Feld, das speziell für Bots entwickelt wurde. Menschliche Benutzer sehen dieses Feld nicht, während Bots automatisch alle Formularfelder ausfüllen. Wenn das unsichtbare Honeypot-Feld ausgefüllt wird, weiß das System, dass es sich um einen Bot handelt.

### **Funktionsweise:**
- Ein unsichtbares Feld wird zum Formular hinzugefügt, das von echten Benutzern nicht gesehen werden kann.
- Wenn das Feld dennoch ausgefüllt wird (was nur ein Bot tun würde), wird die Anfrage abgelehnt.
- Zusätzlich gibt es eine Zeitüberprüfung: Wenn das Formular zu schnell abgesendet wird (was auf automatisiertes Ausfüllen hindeutet), wird die Anfrage ebenfalls abgelehnt.

### **Verwendung:**
Aktiviere das **Honeypot-Feld**, indem du es im Formular einfügst. Wenn ein Bot dieses Feld ausfüllt, wird die Anfrage automatisch abgelehnt.

## 3. **Captcha (Google reCaptcha oder EasyCalcCheck)**

Das **Captcha** stellt sicher, dass das Formular von einem echten Benutzer und nicht von einem Bot ausgefüllt wird. Das Modul unterstützt zwei verschiedene Captcha-Systeme: **Google reCaptcha** und **EasyCalcCheck** von Viktor Vogel.

### **Funktionsweise:**
- **reCaptcha**: Ein bekannter Dienst von Google, der eine kleine Herausforderung für den Benutzer stellt (z. B. Auswahl von Bildern oder Eingabe eines Textes), um sicherzustellen, dass der Benutzer ein Mensch ist.
- **EasyCalcCheck**: Eine einfachere, aber ebenfalls wirksame Methode zur Verifizierung von menschlichen Benutzern. Diese Methode verwendet einfache mathematische Berechnungen, die der Benutzer lösen muss.

### **Verwendung:**
Aktiviere das Captcha, indem du die entsprechende Option im Formular auswählst und das gewünschte Captcha (reCaptcha oder EasyCalcCheck) konfigurierst. Das Formular wird den Benutzer auffordern, das Captcha zu lösen, bevor es abgeschickt werden kann.

---

## Zusammenfassung der Schutzmaßnahmen:

- **Joomla Session Token**: Verhindert, dass unbefugte Benutzer das Formular absenden. Es stellt sicher, dass nur berechtigte Benutzer das Formular ausfüllen können.
- **Honeypot-Feld**: Ein unsichtbares Feld, das automatisch von Bots ausgefüllt wird und dadurch ihre Anfragen erkennt und blockiert.
- **Captcha**: Ein visueller Test, der sicherstellt, dass das Formular von einem echten Benutzer und nicht von einem Bot ausgefüllt wird.

Diese Schutzmaßnahmen stellen sicher, dass dein Formular sicher vor Spam und Missbrauch ist. Wenn du zusätzliche Anpassungen oder eine detaillierte Erklärung zu einem dieser Schutzmechanismen benötigst, lass es mich wissen!
