# Configuring BottomNavBar Icons

**Objective**
To add a heart icon to a BottomNavBar item, ensuring correct rendering. If using a default icon, no additional library specification is needed; however, for non-default icons like Font Awesome, it's crucial to specify the library.

To achieve this, consider the following steps:

1. Default Icons:
    If using default icons (e.g., "home," "search," "shopping_cart"), no library specification is required. Simply provide the icon name.
    ```yaml
    BottomNavBar:
      styles:
      backgroundColor: 0xFF1F2128
      items:
        - label: Home
          icon: search 
          screen: Home
    ```

2. fontAwesome Icons:
    For non-default icons, particularly those from Font Awesome, ensure to specify the library using the iconLibrary attribute. 
    ```yaml
    BottomNavBar:
      styles:
      backgroundColor: 0xFF1F2128
      items:
        - label: Favourite
          icon: heart
          screen: Home
          iconLibrary: fontAwesome
    ```

3. Active Icons:
    If an active state icon is needed (e.g., a different icon when the item is selected), use the activeIcon attribute. 