# Öffnungszeiten

KickMap speichert Öffnungszeiten strukturiert. Daraus entstehen die Tabelle auf der Detailseite, der Status „Jetzt geöffnet“, der Filter „Jetzt geöffnet“ und die Schema.org-Angabe `openingHoursSpecification`.

## Öffnungszeiten am Standort

Im Tab **Öffnungszeiten** legst du einen oder mehrere **Abschnitte** an, z. B. „Verkauf“, „Werkstatt“, „Tankstelle“. Jeder Abschnitt hat

- einen **Titel**,
- entweder eine **Vorlage** (siehe unten) **oder** eigene **Zeiten**.

Eine Zeile der Zeiten besteht aus **Tagen** und **von – bis**:

| Tage | Bedeutung |
|---|---|
| Mo–Fr, Mo–Sa, Mo–So, Sa–So | Bereiche |
| Montag … Sonntag | einzelne Tage |

- **Mittagspause:** zwei Zeilen für dieselben Tage, z. B. Mo–Fr 08:00–12:30 und Mo–Fr 13:30–18:00.
- **Rund um die Uhr:** 00:00–00:00. Im Frontend steht dann „Durchgehend geöffnet“.
- **Über Mitternacht:** z. B. 18:00–02:00.
- Tage ohne Zeile gelten als geschlossen.

Der **Hinweis zu den Öffnungszeiten** erscheint unter der Tabelle, z. B. „Termine nach Vereinbarung“.

::: tip Status-Berechnung
Für „Jetzt geöffnet“ zählt der **erste Abschnitt** eines Standorts. Lege den wichtigsten Bereich (z. B. Verkauf) deshalb nach oben.
:::

## Öffnungszeit-Vorlagen

Unter **KickMap → Öffnungszeit-Vorlagen** pflegst du Wochenzeiten, die viele Standorte gemeinsam haben, z. B. „Standard Mo–Sa“. Wählst du eine Vorlage im Abschnitt eines Standorts, gelten deren Zeiten. Änderst du die Vorlage, ändern sich alle Standorte mit dieser Vorlage. Die Liste zeigt, wie viele Standorte eine Vorlage nutzen.

## Sonderöffnungszeiten

Unter **KickMap → Sonderöffnungszeiten** legst du Abweichungen an:

| Feld | Bedeutung |
|---|---|
| Von / Bis (Datum) | Zeitraum, z. B. 24.12. bis 26.12. |
| Jährlich | Gilt jedes Jahr am selben Datum (Feiertage) |
| Geschlossen | Im Zeitraum geschlossen |
| Abweichende Zeiten | Statt geschlossen: andere Zeiten, z. B. 31.12. 08:00–12:00 |
| Alle Standorte | Gilt für alle Standorte – oder nur für die ausgewählten |

Sonderöffnungszeiten haben Vorrang vor den Wochenzeiten. Auf der Detailseite werden die nächsten Sonderöffnungszeiten angezeigt (Zeitraum über die Option „Sonderöffnungszeiten anzeigen (Tage)“, Standard 60 Tage).

## Status im Frontend

Karten, Popups und Detailseiten zeigen den Status, z. B.

- „Geöffnet bis 18:00 Uhr“
- „Jetzt geschlossen · öffnet um 13:30 Uhr“
- „Jetzt geschlossen · öffnet Mo. 08:00 Uhr“
- „Durchgehend geöffnet“

Der Server liefert die Öffnungsfenster der nächsten acht Tage mit, der Browser berechnet daraus den Status und aktualisiert ihn jede Minute. Der Status stimmt daher auch auf gecachten Seiten. Grundlage ist die Zeitzone der Website (globale Konfiguration).

Der Filter **Jetzt geöffnet** zeigt nur Standorte, die zum Zeitpunkt der Suche geöffnet sind.
