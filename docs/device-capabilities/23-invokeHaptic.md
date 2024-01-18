# Action: invokeHaptic

invokeHaptic action allows users to play haptics on the device allowing better UX. It supports 5 haptics namely heavyImpact, mediumImpact, lightImpact, selectionClick, and vibrate. They are listed in decreasing order of intensity
and vibrate does a short vibrate pulse. It also supports playing haptic by JavaScript code and also has additional parameters like onTapHaptic or onChangeHaptic added to multiple widgets where haptic would be required.

### Properties

| Property  | Type   | Description                                              |
| :-------- | :----- | :------------------------------------------------------- |
| type      | enum   | The type of haptic to perform. It should be one of heavyImpact, mediumImpact, lightImpact, selectionClick, and vibrate |
| onComplete| action | Execute another Action post executing the haptic |

**Example**

<div class="code-container" markdown=1>
  <button onclick="copyCode()" class="copy-code-button">Copy Code</button>

```yaml
View:
  header:
    title: Haptic
  Column:
    styles: { gap: 16, padding: 24 }
    children:
      - Button:
          label: Using Action
          onTap:
            invokeHaptic:
              type: lightImpact
              onComplete: |
                //@code
                console.log("Haptic completed")
      - Button:
          label: Using JavaScript
          onTap: |
            //@code
            invokeHaptic({type: lightImpact})
      - Button:
          label: Using methods
          onTapHaptic: lightImpact
          onTap: |
            //@code
            console.log("Button Press")
```
</div>
