# How to modify the BottomNavBar with custom styling and widgets

#### Steps

1. Make a custom widget one for selected state and one for inactive state ( Not selected ).

<div class="code-container" markdown=1>
  <button onclick="copyCode()" class="copy-code-button">Copy Code</button>

```yaml
Widget:
  inputs:
    - name
    - icon
    - color
    - library
  body:
    Column:
      styles:
        mainAxis: spaceBetween
        crossAxis: center
        height: 50
      children:
        - Icon:
            icon: ${icon}
            library: ${library}
            styles:
              color: ${color}
        - Text:
            text: ${name}
            styles:
              fontSize: 12
              color: ${color}
```

</div>

2.  similarly for active navigation item . Use these widgets under widget for each item of the BottomNavBar as given.

<div class="code-container" markdown=1>
  <button onclick="copyCode()" class="copy-code-button">Copy Code</button>

```yaml
menu:
  BottomNavBar:
    styles:
      backgroundColor: white
    items:
      - page: Grocery
        customItem:
          widget:
            CustomNavbarItem:
              inputs:
                name: Home
                icon: home
                color: 0xFF999999
                library: fontAwesome
          selectedWidget:
            CustomActiveNavbarItem:
              inputs:
                name: Home
                icon: home
                color: 0xFF4CA771
                library: fontAwesome
      - page: Grocery
        customItem:
          widget:
            CustomNavbarItem:
              inputs:
                name: Order
                icon: shoppingBag
                color: 0xFF999999
                library: fontAwesome
          selectedWidget:
            CustomActiveNavbarItem:
              inputs:
                name: Order
                icon: shoppingBag
                color: 0xFF4CA771
                library: fontAwesome
      - page: Grocery
        customItem:
          widget:
            CustomNavbarItem:
              inputs:
                name: Favourite
                icon: heart
                color: 0xFF999999
                library: fontAwesome
          selectedWidget:
            CustomActiveNavbarItem:
              inputs:
                name: Favourite
                icon: solidHeart
                color: 0xFF4CA771
                library: fontAwesome
        selected: true
      - page: Grocery
        customItem:
          widget:
            CustomNavbarItem:
              inputs:
                name: Cart
                icon: shoppingCart
                color: 0xFF999999
                library: fontAwesome
          selectedWidget:
            CustomActiveNavbarItem:
              inputs:
                name: Cart
                icon: shoppingCart
                color: 0xFF4CA771
                library: fontAwesome
```

</div>
