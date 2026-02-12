# Architektur & Datenbank

Der Kern von KickBannerStats ist die Entkopplung von "Schreiben" (Joomla Core) und "Lesen" (KickBannerStats).

## Datenbank-Schema

Die Komponente nutzt eine eigene, flache Tabelle zur Speicherung der Tageswerte pro Banner und Kunde.

```sql
CREATE TABLE IF NOT EXISTS `#__kickbannerstats_daily`
(
  `date` DATE NOT NULL,
  `banner_id` INT UNSIGNED NOT NULL,
  `client_id` INT UNSIGNED NOT NULL,
  `impressions` INT UNSIGNED NOT NULL DEFAULT 0,
  `clicks` INT UNSIGNED NOT NULL DEFAULT 0,
  `banner_name` VARCHAR(255) NOT NULL,
  `client_name` VARCHAR(255) NOT NULL,
  `updated_at` DATETIME NOT NULL,
  PRIMARY KEY (`date`, `banner_id`, `client_id`),
  KEY `idx_banner_date` (`banner_id`, `date`),
  KEY `idx_client_date` (`client_id`, `date`)
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8mb4
  DEFAULT COLLATE = utf8mb4_unicode_ci;