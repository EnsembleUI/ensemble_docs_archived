# Action: showBottomModal

The `showBottomModal` action enables the display of content on a modal that slides from the bottom of the device, providing a user experience similar to iOS Sheets.

```yaml
    - Button:
        label: Show Modal Using Code
        onTap:
            showBottomModal:
            widget: 
                ActionsSheet:
                inputs:
                    action1: Action 1
                    action2: Action 2
            styles: 
                backgroundColor: white
                barrierColor: 0x22000000
            options: 
                enableDrag: true
                enableDragHandler: true
```

The `showBottomModal` action is configured to call an `ActionsSheet` widget with two inputs: `action1` and `action2`. These inputs are then utilized within the `ActionsSheet` widget to customize its content.

