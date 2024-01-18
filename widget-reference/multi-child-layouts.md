# Multi-Child Layout widgets

## Options for Multi-Child Layout widgets

1. Column:
    Ensemble's Column widget displays its children in a vertical array, similar to Flutter.
    Use Column when you want to arrange widgets vertically.
    The Column widget doesn't scroll. If you need scrolling functionality, consider using ListView.
    If there's only one child, consider using Align or Center to position it.

2. Flow:
    Ensemble's Flow widget is designed to flow its children horizontally or vertically based on available space.
    The Flow container is useful for creating dynamic layouts with elements that automatically wrap to the next line when they exceed the available width

3. GridView
    Ensemble's GridView widget is useful for creating a 2D array of widgets.
    Use GridView when you need a grid layout.

4. Flex:
    Ensemble's Flex widget is similar to Flutter's Flex and is used to create flexible layouts.
    Use Flex when you need 
        - Flexible arrangements of widgets.
        - To switch between row and column layouts based on certain conditions, such as device screen size.

5. Row:
    Ensemble's Row widget arranges its children in a horizontal array.
    Use Row when you want to arrange widgets horizontally.
    Utilize mainAxis property to control the positioning of children along the main axis (horizontal).
    Use crossAxis property to align children along the cross axis.
    Employ expanded: true property for a child widget when you want it to take as much space as possible.

6. ListView:
    Ensemble's ListView widget is suitable for scrolling lists of widgets.
    Use ListView when you need a scrollable list.
    Implement pull-to-refresh functionality for updating the list content from an API.


## Examples:

### 1. Column:
**Column Layout**
```yaml
    Column:
        styles:
            gap: 16
            padding: 24
        children:
            - Text:
                text: Column lays out its children vertically.
            - Column:
                styles:
                gap: 4
                children:
                - Smile
                - Beam
            - Divider
```

### 2. Flow
**Flow with Simple Tags**
```yaml
    Flow:
    styles:
        gap: 8
        lineGap: 8
    children:
        - SimpleTag:
            inputs:
            label: Travel
        - SimpleTag:
            inputs:
            label: Nature
```

**Flow with Bold Tags and Background Images**
```yaml
    Flow:
    styles:
        gap: 8
        lineGap: 8
    children:
        - BoldTag:
            inputs:
            label: Travel
            background: https://.../flow_travel.png
        - BoldTag:
            inputs:
            label: Nature
            background: https://.../flow_nature.png
```

### 3. GridView:
**Grid View with response**
```yaml
    GridView:
        styles:
            height: 400
            horizontalTileCount: 2
            itemHeight: 128
        item-template:
            data: ${getPeople.body.results}
            name: person
            template: PersonCard
```

### 4. Flex:
**Flex Direction Switching**
```yaml
    Flex:
    styles:
        direction: '${device.width > 400 ? "horizontal" : "vertical"}'
        gap: 4
    children:
        - Image:
            source: https://images.unsplash.com/photo-1550684848-86a5d8727436
            styles: { width: 90, height: 90, borderRadius: 90, fit: cover }
        - Image:
            source: https://images.unsplash.com/photo-1550684848-fac1c5b4e853
            styles: { width: 90, height: 90, borderRadius: 90, fit: cover }
        - Image:
            source: https://images.unsplash.com/photo-1551651057-f3f83700a831
            styles: { width: 90, height: 90, borderRadius: 90, fit: cover }
```

### 5. Row:
**Row Layout**
```yaml
    Row:
    styles:
        gap: 8
    children:
        - Smile
        - Beam
        - Wink
```

**Main Axis Positioning**
```yaml
    Row:
    styles:
        mainAxis: spaceBetween
        backgroundColor: 0xFFCCDFE5
        padding: 4
        borderRadius: 4
    children:
        - Smile
        - Beam
``` 
Similar examples for `mainAxis: spaceAround`, `mainAxis: center`, and `mainAxis: end`

**Child Widget Expansion**
```yaml
    Row:
    styles:
        gap: 8
    children:
        - Button:
            label: First button
            styles:
            expanded: true
        - Button:
            label: Second button
```

### 6. ListView:
**ListView**
```yaml
    ListView:
    id: listView
    onPullToRefresh:
        invokeAPI:
        name: getPeople
    onItemTap:
        navigateScreen:
        name: ListView - Detail Page
        inputs:
            doc_type: ${getPeople.body.users[this.selectedItemIndex]}
    styles: { expanded: true }
    item-template:
        data: ${getPeople.body.users}
        name: users
        template:
        MyRow:
            inputs:
            p: ${users}
```