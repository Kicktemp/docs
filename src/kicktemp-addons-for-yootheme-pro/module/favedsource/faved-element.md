# Faved Element

Das **Faved Element** ist der interaktive Bestandteil des Faved Source Moduls. Es erlaubt Besuchern, Artikel mit einem Icon zu markieren und in einem Cookie zu speichern. Diese Funktion wird durch eine einfache UIkit-Benachrichtigung bestätigt.

---

## **Funktionen**

1. **Artikel speichern und entfernen**: Beiträge können durch Klick auf das Icon gespeichert oder entfernt werden.
2. **Benachrichtigung**: UIkit-Notifikationen bestätigen die Aktion mit anpassbaren Texten und Statusfarben.
3. **Anpassbare Icons und Gruppen**: Wähle dein Icon und definiere, welche Gruppe für den Cookie genutzt wird.

---

## **Einstellungen**

### **Content**
| **Feld**           | **Beschreibung**                                                               |
|---------------------|-------------------------------------------------------------------------------|
| **Icon**            | Wähle ein Icon aus der UIkit Icon-Bibliothek.                                |
| **Bookmark Group**  | Definiere die Cookie-Gruppe, in der der Beitrag gespeichert wird.            |
| **Article ID**      | Artikel-ID, die dem Beitrag zugewiesen wird.                                 |

### **Settings**

#### **Notification**
| **Feld**             | **Beschreibung**                                                              |
|-----------------------|------------------------------------------------------------------------------|
| **Add Text**          | Text, der angezeigt wird, wenn der Artikel gespeichert wird.                |
| **Remove Text**       | Text, der angezeigt wird, wenn der Artikel entfernt wird.                   |
| **Position**          | Position der Benachrichtigung (z. B. top-right, bottom-left).               |
| **Timeout**           | Sichtbarkeitsdauer der Benachrichtigung in Millisekunden.                   |
| **Add Status**        | Statusfarbe der Benachrichtigung (z. B. success, warning).                  |
| **Remove Status**     | Statusfarbe der Benachrichtigung beim Entfernen.                            |

#### **Icon**
| **Feld**             | **Beschreibung**                                                              |
|-----------------------|------------------------------------------------------------------------------|
| **Icon Width**        | Breite des Icons in Pixel.                                                  |

#### **Cookie**
| **Feld**             | **Beschreibung**                                                              |
|-----------------------|------------------------------------------------------------------------------|
| **Expired**           | Anzahl der Tage, die der Eintrag im Cookie gespeichert bleibt.               |

---

## **Anwendungsbeispiele**

- **Favoriten-Listen**: Besucher können Artikel speichern, um sie später zu lesen.
- **Merkliste**: Nutze die Funktion für Produktseiten, um interessante Produkte zu markieren.
