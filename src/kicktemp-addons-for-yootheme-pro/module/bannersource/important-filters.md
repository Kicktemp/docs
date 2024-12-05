# Details zu wichtigen Filtern

Das **BannerSource Modul** bietet leistungsstarke Filteroptionen, die eine präzise Steuerung der Banneranzeige ermöglichen. Diese Filter sind besonders nützlich, um die Relevanz der Inhalte zu erhöhen und eine bessere Benutzererfahrung zu schaffen. In diesem Abschnitt findest du detaillierte Informationen zu den wichtigsten Filtern sowie deren Anwendungsmöglichkeiten.

## Nur einmal pro Seite
- **Beschreibung**: Verhindert die mehrfache Anzeige eines Banners pro Seite.
- **Optionen**:
    - **None**: Keine Einschränkung.
    - **Mobile**: Banner wird nur einmal auf mobilen Geräten angezeigt.
    - **Desktop**: Banner wird nur einmal auf Desktop-Geräten angezeigt.
    - **Full**: Banner wird nur einmal pro Seite angezeigt.
- **Beispiel**:
    - Du möchtest ein Werbebanner nur einmal auf der Startseite anzeigen, unabhängig von der Bildschirmgröße. Wähle die Option **Full**, um sicherzustellen, dass das Banner nicht mehrfach erscheint.

## Tags verwenden
- **Beschreibung**:
    - Banner werden ausgewählt, wenn ihre Tags mit den Schlüsselwörtern des aktuellen Dokuments übereinstimmen.
- **Nutzen**:
    - Ermöglicht eine kontextbezogene Anzeige von Bannern basierend auf relevanten Schlüsselwörtern.
- **Beispiel**:
    - Ein Artikel über "Sommerurlaub" könnte automatisch ein Banner mit dem Tag "Sommer" anzeigen, wenn die Schlüsselwörter übereinstimmen.

## Reihenfolge
- **Beschreibung**:
    - Die Anzeige der Banner erfolgt standardmäßig nach ihrer Priorität. Erst werden Banner mit aktivierter **Sticky-Funktion** angezeigt, danach erfolgt die Sortierung entweder nach der definierten Reihenfolge (*a.ordering*) oder zufällig (*RAND()*), falls dies aktiviert ist.
- **Optionen**:
    - **Standardreihenfolge**:
        - Banner werden zuerst nach dem Feld `sticky` (absteigend) und anschließend nach der Reihenfolge (`a.ordering`) sortiert.
    - **Zufällige Reihenfolge**:
        - Banner werden bei jedem Seitenaufruf in einer neuen, zufälligen Reihenfolge angezeigt.
- **Beispiel**:
    - Für eine Kampagne möchtest du Banner mit hoher Priorität zuerst anzeigen. Aktiviere die **Sticky-Funktion** für die wichtigsten Banner und lasse die übrigen nach ihrer Reihenfolge sortieren.

## Fazit
Die hier beschriebenen Filter sind essenziell, um die Anzeige von Bannern optimal an verschiedene Szenarien anzupassen. Ob es darum geht, Inhalte kontextbasiert zu steuern oder die Benutzererfahrung durch gezielte Bannerplatzierungen zu verbessern, diese Filter bieten dir die nötige Flexibilität.

[Weiter: Felder im BannerType](./fields.md)
