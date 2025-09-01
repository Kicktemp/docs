# Einstellungen

## Geplante Aufgaben
Gehe im Joomla-Backend unter System → Verwalten zu [Geplante Aufgaben](deine-domain.tld/administrator/index.php?option=com_scheduler&view=tasks) und lege eine neue Aufgabe vom Typ **Kick: eRecht24 Rechtstexte-API** an.

## Basisfelder
Alle Joomla-Core Optionen sind hier möglich.

## Aufgabenparameter
Die Aufgabenparameter ermöglichen es dir, den Import der Rechtstexte zu konfigurieren:
- **rechtliches Dokument**: Wähle den zu importierenden Dokumenttyp aus. Derzeit sind Impressum, Datenschutzerklärung und Datenschutzerklärung für soziale Medien verfügbar.
- **deutscher Beitrag**: Wähle den Beitrag aus, in den importiert werden soll.
- **englischer Beitrag**: Wähle den Beitrag aus, in den importiert werden soll.
- **Überschrift entfernen**: Aktiviere diese Option, um die H1-Überschrift aus dem abgerufenen Text zu entfernen und den Beitragstitel zu benutzen.
- **Bearbeitungsdatum ignorieren**: Wenn deaktiviert, werden Beiträge nur aktualisiert, wenn das Änderungsdatum der Quelle neuer ist als das zuletzt gespeicherte. Aktiviere diese Option, wenn du manuelle Änderungen im Beitrag nicht überschreiben möchtest.
- **API-Version**: Wähle die API-Version aus, die du verwenden möchtest. Die neueste Version wird empfohlen.
- **API-Schlüssel**: Schlüssel können mit dem eRecht24 Projekt Manager erstellt werden. Alle API-Schlüssel sind SHA256-Hashes.
- **E-Mail Benachrichtigung bei Erfolg**: E-Mail-Adresse für Erfolgsbenachrichtigungen.
- **E-Mail Benachrichtigung bei Fehler**: E-Mail-Adresse für Fehlerbenachrichtigungen.
- **Caching Aktivieren**: Aktiviert das Caching für die eRecht24 Rechtstexte-API.
- **Caching Zeit**: Zeit in Minuten, wie lange die eRecht24 Rechtstexte-API Response gecached werden sollen.


## Beispiele zur Anwendung
1. **Basisfelder:**
    - **Ausführungsintervall**: Intervall, Tage
    - **Intervall in Tagen**: 1
    - **Ausführungszeit (UTC):** 07:16.

2. **Aufgabenparameter:**
    - **rechtliches Dokument**: Impressum
    - **deutscher Beitrag**: Impressum
    - **englischer Beitrag**: Site notice
    - **Überschrift entfernen**: Ja
    - **Bearbeitungsdatum ignorieren**: Nein
    - **API-Version**: v1
    - **API-Schlüssel**: 1c2345c6d1f428db1ddc12134h6d0755f7878beda1cd1c04c56d486f3fe37c56
    - **E-Mail Benachrichtigung bei Erfolg**: info+erfolg@deine-tld-domain.de
    - **E-Mail Benachrichtigung bei Fehler**: info+fehler@deine-tld-domain.de
    - **Caching Aktivieren**: Ja.
    - **Caching Zeit**: 60

## Zusammenfassung
Die **Einstellungen** des Kick eRecht24 Rechtstexte-API Plugins ermöglichen es dir, den Import deiner Rechtstexte flexibel zu konfigurieren. Du kannst den zu importierenden Dokumenttyp auswählen, die Zielbeiträge festlegen und verschiedene Optionen zur Anpassung des Importverhaltens nutzen. Mit der Möglichkeit, API-Versionen und Schlüssel zu verwalten, sowie E-Mail-Benachrichtigungen für Erfolge und Fehler einzurichten, hast du volle Kontrolle über den Aktualisierungsprozess deiner Rechtstexte. Das Caching sorgt zudem für eine effiziente Nutzung der API-Ressourcen.
