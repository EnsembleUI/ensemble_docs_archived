# Ensemble Page Structure

An Ensemble app comprises a series of pages and assets. Each page starts with a `View`, followed by an optional `header`, an optional `menu`, and a single widget for the body.

<img src="/images/page_structure_0.png" alt="Page Skeleton" height="700"/>

## Header
The header contains the Safe Area (e.g. iPhone notch) and by default has the background color of your theme's primaryColor. It includes:
1. `navigation icon`. If a drawer menu is used the system will automatically show an icon to open/close the drawer, otherwise if this page can navigate back to the previous page, the back arrow will be shown. If neither condition is true, the icon will not be visible, in which case the title will stretch to fill the entire horizontal space.  
2. `title`. Its simplest form is a string which is the title text. You may override it with a custom widget.
3. `flexible background`. Specifies a widget that will fill the entire header (including the notch). This is typically used as a background for the header. This widget will be laid out first, with the navigation icon and the title overlay on top.

Note: when the entire View is specified as scrollable, flexible background's height can vary in height (hence flexible) on scroll with a parallax effect.

## Menu
Ensemble currently supports three menu types:
* `bottom navigation bar`. This is the navigation bar at the bottom of the screen, typical of most iOS and Android apps.
* `drawer`. A hidden menu which slides out from the left on menu button click. The menu button will automatically be shown as the header's navigation icon. The header will automatically be included even if not specified explicitly.
* `left navigation bar`. This is the fixed navigation bar on the left of the screen, typical of many Web apps. This menu type is not recommended for Native apps.

## Body
The View requires a single widget defined as its child. This will act as the body content, and can only be a Column, Row, Flex, or Stack widget.

## Putting it together
```yaml
View:
  header:
    title: My Title
    
  menu:
    display:  bottomNavBar
    items:
      - icon: home
        label: Home
        page: Home
        selected: true
      - icon: person
        label: Profile
        page: Profile
  
  # this is the body widget   
  body:
    Column:
      ...
```