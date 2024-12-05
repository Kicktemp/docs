# Kicktemp Files Beispiele

Hier zeigen wir, wie du mit **Kicktemp Files** dynamische Dateipfade erstellen kannst. Die folgenden Beispiele demonstrieren die Verwendung von Platzhaltern und deren Ergebnisse.

---

## **Beispiel 1: Artikel-ID**
### Pattern:
```text
/images/articles/{id}/*.jpg
```

### Ergebnis:
Lädt alle `.jpg` Dateien aus dem Ordner `/images/articles/123/`, wobei `123` die ID des Artikels ist.

---

## **Beispiel 2: Artikel-Alias**
### Pattern:
```text
/images/articles/{alias}/*.png
```

### Ergebnis:
Lädt alle `.png` Dateien aus dem Ordner `/images/articles/sample-article/`, wobei `sample-article` der Alias des Artikels ist.

---

## **Beispiel 3: Benutzerdefinierte Felder**
### Pattern:
```text
/images/custom/{jcf gallery_field}/
```

### Ergebnis:
Lädt Dateien aus dem Ordner, der durch das benutzerdefinierte Feld `gallery_field` definiert ist. Zum Beispiel:
Wenn das Feld `gallery_field` den Wert `gallery1` hat, wird `/images/custom/gallery1/` verwendet.

---

## **Beispiel 4: Intro-Bild**
### Pattern:
```text
/images/{intro_image}/*.jpg
```

### Ergebnis:
Lädt alle `.jpg` Dateien aus dem Ordner, der durch das Intro-Bild des Artikels bestimmt ist.
Beispiel:
Wenn das Intro-Bild `/images/articles/intro/example.jpg` ist, wird `/images/articles/intro/` als Pfad verwendet.

---

## **Beispiel 5: Volltext-Bild**
### Pattern:
```text
/images/{image_fulltext}/*.png
```

### Ergebnis:
Lädt alle `.png` Dateien aus dem Ordner, der durch das Volltext-Bild des Artikels bestimmt ist.
Beispiel:
Wenn das Volltext-Bild `/images/articles/full/example.jpg` ist, wird `/images/articles/full/` als Pfad verwendet.

---

## **Beispiel 6: Kombination von Platzhaltern**
### Pattern:
```text
/images/articles/{id}/{alias}/{jcf gallery_field}/*.jpg
```

### Ergebnis:
Lädt alle `.jpg` Dateien aus einem Ordner, der dynamisch durch die ID, den Alias und ein benutzerdefiniertes Feld bestimmt ist.
Beispiel:
Für Artikel mit der ID `123`, dem Alias `sample-article` und einem benutzerdefinierten Feldwert `gallery1`, lautet der Pfad:
`/images/articles/123/sample-article/gallery1/`.

---

## **Beispiel 7: Fallback ohne Platzhalter**
### Pattern:
```text
/images/static/*.jpg
```

### Ergebnis:
Lädt alle `.jpg` Dateien aus dem Ordner `/images/static/`, unabhängig von Artikeldaten.

---

Diese Beispiele zeigen die Flexibilität von **Kicktemp Files**, um dynamische Inhalte effizient zu nutzen. Passe die Patterns an deine spezifischen Anforderungen an und gestalte deine Website noch dynamischer!
