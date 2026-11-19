---
title: Updates & Licence
description: Enter the download key and register your website on kicktemp.shop
---

# Updates & Licence

KickMap is updated via the Joomla updater (**System → Update → Extensions**). The updates come from
kicktemp.shop. For an update to be downloaded, Joomla needs

1. the **download key** from your customer account and
2. a **registered website**: the domain must be entered in your customer account.

You do both in **Components → KickMap → Options → Updates & Licence**.

## Enter the download key

1. Log in at [kicktemp.shop](https://kicktemp.shop) and copy the download key from your customer account.
2. Paste it into the **Download key** field and save the options.

The key is stored in the KickMap update site, just like for all Joomla extensions with a download key.
You can therefore also view and change it under **System → Update Sites → KickMap**. Allowed are letters, digits,
dot, hyphen and underscore.

## Register the website

1. In your customer account, open **Dashboard → Websites** and copy the token.
2. Paste it into the **Register website** field and click **Register now**.

KickMap sends the domain of this website together with the token to kicktemp.shop. The token is not stored.
For the registration, the user needs the **Configure ACL & Options** permission for KickMap.

## What is transmitted during an update

When an update is downloaded, the plugin **System - KickMap** appends the following to the download URL:

| Value | Example |
|---|---|
| Download key | from the update site |
| Domain | `www.example.com` |
| Joomla version | `6.2.1` |
| PHP version | `8.3.27` |

This allows kicktemp.shop to check whether the key is valid for this domain. No other data is transmitted, and there is no
connection to kicktemp.shop except for the update check, the update download and the registration.

## Troubleshooting

- **“The Download Key is missing” in the update list:** Enter the key in the options.
- **Update fails with 403:** The website is not registered or the key belongs to a different account.
- **“There is no update site for KickMap”:** Check under **System → Update Sites** whether “KickMap” exists and is enabled,
  or reinstall the package.
