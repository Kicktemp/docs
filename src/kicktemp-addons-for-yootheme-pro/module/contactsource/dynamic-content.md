# Dynamic Content

Das ContactSource Modul erweitert die **YOOtheme Custom Sources** und bietet dir die Möglichkeit, dynamische Inhalte flexibel einzubinden.

## **Custom Sources**
1. **CustomContactsQueryType**: Benutzerdefinierte Kontakte mit Filtermöglichkeiten.
2. **KickContactQueryType**: Auswahl eines einzelnen Kontakts.

---

### **Filtermöglichkeiten**
Die benutzerdefinierten Kontakte (CustomContactsQueryType) bieten folgende Filteroptionen:

| **Filter**              | **Beschreibung**                                                                                   |
|-------------------------|---------------------------------------------------------------------------------------------------|
| **Kategorie (catid)**    | Wähle Kontakte aus einer oder mehreren Kategorien.                                                |
| **Kategorie Operator**   | Bestimme, ob Kontakte mit einer Kategorie übereinstimmen (**Match OR**) oder ausgeschlossen werden (**Don’t Match NOR**). |
| **Tags**                | Filtere Kontakte nach einem oder mehreren Tags.                                                   |
| **Tag Operator**         | Logik für Tags: **Match One (OR)**, **Match All (AND)** oder **Don’t Match (NOR)**.               |
| **Autoren (users)**      | Filtere Kontakte basierend auf den zugeordneten Autoren.                                          |
| **Autoren Operator**     | Logik für Autoren: **Match OR** oder **Don’t Match NOR**.                                         |
| **Featured**            | Lade nur hervorgehobene Kontakte, alle Kontakte oder solche, die nicht hervorgehoben sind.        |
| **Offset und Limit**    | Bestimme den Startpunkt und die Anzahl der angezeigten Kontakte.                                   |
| **Sortierung**          | Definiere die Sortierlogik und die Reihenfolge (siehe unten).                                      |
| **Alphanumerische Sortierung** | Aktiviert die alphanumerische Sortierung der Kontakte.                                        |

---

### **Sortierungsoptionen**

Das ContactSource Modul unterstützt folgende Sortierungsoptionen, um die Reihenfolge der angezeigten Kontakte individuell anzupassen:

| **Sortierung**         | **Beschreibung**                                                                 |
|-------------------------|---------------------------------------------------------------------------------|
| **Published**           | Kontakte werden nach ihrem Veröffentlichungsdatum sortiert (**publish_up**).    |
| **Unpublished**         | Kontakte werden nach ihrem Ablaufdatum sortiert (**publish_down**).             |
| **Created**             | Kontakte werden nach ihrem Erstellungsdatum sortiert (**created**).             |
| **Modified**            | Kontakte werden nach ihrem Änderungsdatum sortiert (**modified**).              |
| **Alphabetical**        | Kontakte werden alphabetisch nach ihrem Namen sortiert (**name**).              |
| **Hits**                | Kontakte werden basierend auf der Anzahl der Aufrufe sortiert (**hits**).       |
| **Contact Order**       | Kontakte werden gemäß ihrer Kontakt-Reihenfolge sortiert (**ordering**).         |
| **Random**              | Kontakte werden in zufälliger Reihenfolge angezeigt (**rand**).                 |

---

### **Hinweis**

> Standardmäßig zeigt die Einzelkontaktseite in Joomla keine Benutzerartikel an.
> Um diese anzuzeigen, setze in der globalen Konfiguration die Einstellung **Benutzerartikel anzeigen** auf **Anzeigen**.
