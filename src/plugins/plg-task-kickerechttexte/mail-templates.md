# E-Mail Templates

Gehe im Joomla-Backend unter System → Templates zu [E-Mail Templates](deine-domain.tld/administrator/index.php?option=com_mails&view=templates).

In der Suche kannst du als Suchwort **kick** nutzen um die beiden Templates zu finden.

E-Mail Templates sind mehrsprachig nutzbar.

## E-Mail bei Erfolg
Dieses Template wird genutzt, wenn die geplante Aufgabe erfolgreich ausgeführt wurde.

### Standardwerte: Kick eRecht24 Rechtstexte-API - Erfolg
**Betreff:** Die Aufgaben {TASKNAME} #{TASKID} wurde erfolgreich abgeschlossen

**Inhalt:** Die Aufgabe {TASKNAME} #{TASKID} wurde erfolgreich abgeschlossen.

Die eRecht24 Rechtstexte-API hat das folgende Dokument abgerufen:

{DOCUMENTTYPE}

Die Dokumente wurden in den folgenden Beiträgen gespeichert:

{ARTICLES}

Die Aufgabe wurde am {DATE} um {TIME} Uhr abgeschlossen.

## E-Mail bei Fehler
Dieses Template wird genutzt, wenn die geplante Aufgabe nicht erfolgreich ausgeführt wurde.

### Standardwerte: Kick eRecht24 Rechtstexte-API - Fehler

**Betreff:** Die Aufgabe {TASKNAME} #{TASKID} wurde nicht erfolgreich abgeschlossen

**Inhalt:** Die Aufgabe {TASKNAME} #{TASKID} wurde nicht erfolgreich abgeschlossen.

Beim Abrufen der eRecht24-Gesetzestext-API ist ein Fehler aufgetreten:

{ERROR_MESSAGE}

Bitte überprüfen Sie die Einstellungen und versuchen Sie es erneut.

## Zusammenfassung
Die E-Mail Templates für das Kick eRecht24 Rechtstexte-API Plugin ermöglichen es dir, benutzerdefinierte Benachrichtigungen für den Erfolg und Fehler bei der Ausführung der geplanten Aufgaben zu erstellen. Du kannst den Betreff und den Inhalt der E-Mails anpassen, um relevante Informationen wie den Namen der Aufgabe, die Dokumenttypen und die betroffenen Beiträge zu übermitteln. Dies stellt sicher, dass du stets über den Status deiner Rechtstext-Aktualisierungen informiert bist.
