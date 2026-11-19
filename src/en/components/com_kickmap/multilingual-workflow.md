# Multilingual, Workflow & Versions

## Multilingual

KickMap follows the Joomla standard for multilingual sites:

- Every location, every template, and every category has a **language** (or "All").
- In the frontend, only locations in the current language and "All" are displayed.
- In the **Associations** tab, you link the translations of a location. The language switcher then jumps directly to the translated location.
- You can also edit associations of locations and categories side by side in **Multilingual Associations** (`com_associations`).

Prerequisites are the "System - Language Filter" plugin (with "Item Associations" enabled) and content languages.

### Setup in Brief

1. Publish content languages, e.g. German (`de`) and English (`en`), and enable "System - Language Filter" with "Item Associations".
2. Create a menu with its own home page for each language, plus a home page for "All" (e.g. in a hidden menu).
3. Link the menu items of the languages with each other ("Associations" tab) and publish the "Language Switcher" module.
4. Translate and associate categories and locations. Locations with the language "All" appear in every language.

**Tip:** You can set the distance unit per menu item. So the English location page can use miles and the German one kilometers.

### Translating Custom Fields

Labels and options of custom fields are translated just like in the Joomla core. Enter a language constant as the label or option text,
e.g. `MYSITE_FIELD_PAYMENT`, and create it under **System → Language Overrides** for each language.
This also applies to the field filters in the location list.

## Workflow

You enable workflows under **Options → Integration → Workflow**. During installation, the **Basic Workflow** was created for locations for this purpose.

With an active workflow

- the **Stage** column in the location list replaces the status,
- you change the status and "Featured" via **transitions** (list: Actions or the row's dropdown; form: "Transition" field),
- you can create your own workflows with stages and transitions under **Workflows** and assign them per category,
- the Joomla plugins "Workflow - Publishing", "- Featuring", and "- Notification" control status, featuring, and emails.

## Versions

With versioning enabled (Options → Integration, default: on, 10 versions), Joomla saves every change to locations, templates, and special opening hours. Using **Versions** in the toolbar, you compare and restore older states.
