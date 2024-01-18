# Invoke Haptics

We can use the invokeHaptic action to provide haptic feedback in your app. This feature enhances the user experience by providing tactile responses for different interactions.

The invokeHaptic action is utilized to trigger haptic feedback, and it supports various types such as heavyImpact, mediumImpact, lightImpact, and vibrate.
Buttons are used to demonstrate different haptic types, and the last button showcases using JavaScript code to invoke the lightImpact haptic.

Please note that haptics will only work on native apps.

invokeHaptic action is utilized to trigger haptic feedback, and it supports various types.
- Button:
    label: Heavy Impact
    onTap:
        invokeHaptic:
        type: heavyImpact

Additionally "Vibrate" button demonstrates chaining actions by using the onComplete property to execute additional JavaScript code after the haptic feedback is played.
- Button:
    label: Vibrate (Using onComplete action to chain)
    onTap:
        invokeHaptic:
        type: vibrate
        onComplete:
            executeCode:
            body: |
                //@code
                console.log("Vibrate Haptic played")

Furthermore, the onTapHaptic property is used for the "Selection Click" button, demonstrating an alternative way to trigger haptic feedback.
- Button:
    label: Selection Click (Using onTapHaptic property)
    onTapHaptic: selectionClick
    onTap:
        executeCode:
        body: |
            //@code
            console.log("Button Pressed")
