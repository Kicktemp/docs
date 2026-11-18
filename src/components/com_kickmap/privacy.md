# Datenschutz

## Leaflet / OpenStreetMap

- Leaflet und das Marker-Clustering sind **lokal** im Paket enthalten, es wird kein CDN genutzt.
- Die **Kartenkacheln** lädt der Browser vom eingestellten Kachel-Server (Standard: `tile.openstreetmap.org`). Dabei wird die IP-Adresse des Besuchers an den Kachel-Server übertragen.
- Für einen Betrieb ohne Drittanbieter trägst du einen eigenen Kachel-Server ein.

::: warning Nutzungsrichtlinie OpenStreetMap
Die Kachel-Server von OpenStreetMap sind für geringe Last gedacht. Für stark besuchte Seiten nutze einen kommerziellen Anbieter oder einen eigenen Server.
:::

## Google Maps

Google Maps lädt Skripte und Kacheln von Google-Servern, Google kann dabei Cookies setzen. Für Google Maps ist in der Regel eine Einwilligung erforderlich.

## Zwei-Klick-Lösung

Die Option **Optionen → Karte → Karte erst nach Zustimmung laden** ist standardmäßig aktiv: Jede Karte zeigt zunächst nur einen Hinweis und den Button **Karte laden**. Erst nach dem Klick werden Skripte bzw. Kacheln des Anbieters geladen.

- Der Hinweistext ist einstellbar (z. B. mit Link zur Datenschutzerklärung).
- Die Zustimmung gilt **pro Anbieter** und wird im `localStorage` des Browsers gespeichert (kein Cookie).
- Ein Consent-Manager kann die Karten per Event freigeben, siehe [JavaScript & Consent](./javascript-api#zustimmung-aus-einem-consent-manager).

## Geocoding

- Im **Backend** werden Adressen beim Klick auf „Adresse suchen“ an Nominatim bzw. Google gesendet.
- Im **Frontend** sendet die Umkreissuche die eingegebene PLZ / den Ort **vom Server** an den Geocoding-Dienst – nicht vom Browser des Besuchers. Ergebnisse werden 30 Tage zwischengespeichert, nicht gefundene Adressen einen Tag. Erwähne das in deiner Datenschutzerklärung.
- Zum Schutz vor Missbrauch (Kosten bei Google, Nutzungsbedingungen von Nominatim) geocodiert KickMap Eingaben von Besuchern nur, wenn der Filter „PLZ oder Ort“ aktiv ist, nur bis 200 Zeichen und höchstens 30 neue Adressen pro IP in 10 Minuten. Die IP wird dafür nur als Hash zwischengespeichert.
- **Google:** Der API-Key aus den Optionen ist im Frontend sichtbar (Maps JavaScript API). Beschränke ihn in der Google Cloud Console auf deine Domain (HTTP-Referrer). Für das Geocoding vom Server trägst du unter **Geocoding** einen eigenen, auf die Server-IP beschränkten Key ein („Google Geocoding API-Key“).
- „Mein Standort“ nutzt die Ortung des Browsers. Sie erfolgt nur nach Zustimmung des Besuchers im Browser; die Koordinaten werden nur für die Suche verwendet.

## Updates

Bei der Update-Prüfung und beim Herunterladen eines Updates werden Download-Key, Domain sowie Joomla- und PHP-Version an
kicktemp.shop übertragen, bei der Registrierung der Website die Domain. Details: [Updates & Lizenz](./updates).
