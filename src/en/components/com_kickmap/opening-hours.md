# Opening hours

KickMap stores opening hours in a structured way. From them, it generates the table on the detail page, the “Open now” status, the “Open now” filter and the Schema.org property `openingHoursSpecification`.

## Opening hours on the location

In the **Opening hours** tab, you create one or more **sections**, e.g. “Sales”, “Workshop”, “Petrol station”. Each section has

- a **title**,
- either a **template** (see below) **or** its own **times**.

A row of times consists of **days** and **from – to**:

| Days | Meaning |
|---|---|
| Mon–Fri, Mon–Sat, Mon–Sun, Sat–Sun | Ranges |
| Monday … Sunday | Individual days |

- **Lunch break:** two rows for the same days, e.g. Mon–Fri 08:00–12:30 and Mon–Fri 13:30–18:00.
- **Around the clock:** 00:00–00:00. The frontend then shows “Open 24/7”.
- **Past midnight:** e.g. 18:00–02:00.
- Days without a row are considered closed.

The **Opening hours note** appears below the table, e.g. “Appointments by arrangement”.

::: tip Status calculation
For “Open now”, the **first section** of a location counts. So put the most important section (e.g. sales) at the top.
:::

## Opening hour templates

Under **KickMap → Opening hour templates**, you maintain weekly hours that many locations share, e.g. “Standard Mon–Sat”. If you select a template in a location's section, its times apply. If you change the template, all locations with this template change. The list shows how many locations use a template.

## Special opening hours

Under **KickMap → Special openings**, you create exceptions:

| Field | Meaning |
|---|---|
| From / To (date) | Period, e.g. 24 Dec to 26 Dec |
| Yearly | Applies every year on the same date (public holidays) |
| Closed | Closed during the period |
| Different times | Instead of closed: other times, e.g. 31 Dec 08:00–12:00 |
| All locations | Applies to all locations – or only to the selected ones |

Special opening hours take precedence over the weekly hours. The detail page shows the upcoming special opening hours (period set via the option “Show special openings (days)”, default 60 days).

## Status in the frontend

Maps, popups and detail pages show the status, e.g.

- “Open until 18:00”
- “Closed now · opens at 13:30”
- “Closed now · opens Mon 08:00”
- “Open 24/7”

The server supplies the opening windows for the next eight days, and the browser calculates the status from them and updates it every minute. The status is therefore also correct on cached pages. It is based on the website's time zone (Global Configuration).

The **Open now** filter shows only locations that are open at the time of the search.
