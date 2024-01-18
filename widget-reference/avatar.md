# Avatar Widget

The Avatar Widget provides a visual representation of a user or entity, typically used in user interfaces to personalize user experience.

## Properties

| Property      | Type                                           | Description                                                                                             |
|:--------------|:-----------------------------------------------|:--------------------------------------------------------------------------------------------------------|
| source        | string                                         | URL to or asset name of the image. Recommended to set dimensions to prevent UI jerkiness while loading. |
| variant       | enum                                           | Specify the Avatar's shape: `circle` (default), `square`, or `rounded`.                                 |
| name          | string                                         | Displayed initials if the image source is not specified or fails to load.                               |
| nameTextStyle | [TextStyle](/widget-reference/types#TextStyle) | Adjust the text styling for the name.                                                                   |
| onTap         | [Action](actions/directory#Actions)            | Call Ensemble's built-in functions or execute code on tap.                                              |
| onTapHaptic   | [TapHaptic](/widget-reference/types#TapHaptic) | The type of haptic feedback on tap                                                                      |

### Styles

| Property         | Type                                   | Description                                       |
|:-----------------|:---------------------------------------|:--------------------------------------------------|
| placeholderColor | [Color](/widget-reference/types#Color) | The placeholder color while the image is loading. |
| fit              | [Fit](/widget-reference/types#Fit)     | How to fit the image within the dimensions        |

### Box Styles (Inherited)
This widget also inherits these styles

[box](_snippets/box-styles.md ':include')

### Base Styles (Inherited)
This widget also inherits these styles

[base](_snippets/base-styles.md ':include')