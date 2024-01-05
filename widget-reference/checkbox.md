# Checkbox widget

The Checkbox widget allows the rendering of checkbox input elements, enabling users to select or deselect options within your application for convenient and interactive data manipulation.

[Test in Kitchen Sink](https://studio.ensembleui.com/app/e24402cb-75e2-404c-866c-29e6c3dd7992/screen/21f43d9b-db21-40fe-9c2f-806267e6c412)

## Properties

| Property     | Type    | Description                                                                                                                                                                                              |
| :----------- | :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id           | string  | ID to be referenced later                                                                                                                                                                                |
| maxWidth     | integer | The max width of this Input widget (default 700). while min vlaue can be `0` and maximum can be `5000`                                                                                                   |
| label        | string  | Label for your widget                                                                                                                                                                                    |
| labelHint    | string  | Hint text on your label                                                                                                                                                                                  |
| hintText     | string  | Hint text explaining your widget                                                                                                                                                                         |
| required     | boolean | Whether the field is required                                                                                                                                                                            |
| enabled      | boolean | Enables or disables the interactivity and input functionality of the widget                                                                                                                              |
| icon         | object  | [See properties](#icon)                                                                                                                                                                                  |
| onChange     | [action](/actions/directory.md)  | Call Ensemble's built-in functions or execute code when the input changes. Note for free-form text input, this event only dispatches if the text changes AND the focus is lost (e.g. clicking on button) |
| value        | boolean  | true if checkbox is checked else otherwise                                                                                                                                                                |
| autoComplete | boolean | Enable the Input search suggestion option                                                                                                                                                                |
| items        | array   | List of values, or Objects with value/label pairs                                                                                                                                                        |

| leadingText  | string  | Sets the text displayed before the checkbox                                                                                                                                                              |
| trailingText | string  | Sets the text displayed after the checkbox                                                                                                                                                               |

### Styles

#### Common Properties

| Property                  | Type              | Description                                                                                                                                                                                                                                                                                                                                   |
| :------------------------ | :---------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| variant                   | string            | Select a pre-defined look and feel for this Input widget. This property can be defined in the theme to apply to all Input widgets. [see properties](#options-for-stylesvariant)                                                                                                                                                               |

#### Stack Position Properties

| Property                  | Type              | Description                                                                                                                                                                                                                                                                                                                                   |
| :------------------------ | :---------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| stackPositionTop          | integer           | The distance of the child's top edge from the top of the stack. This is applicable only for Stack's children.                                                                                                                                                                                                                                 |
| stackPositionBottom       | integer           | The distance that the child's bottom edge from the bottom of the stack. This is applicable only for Stack's children.                                                                                                                                                                                                                         |
| stackPositionLeft         | integer           | The distance that the child's left edge from the left of the stack. This is applicable only for Stack's children.                                                                                                                                                                                                                             |
| stackPositionRight        | integer           | The distance that the child's right edge from the right of the stack. This is applicable only for Stack's children.                                                                                                                                                                                                                           |

#### Border Properties

| Property                  | Type              | Description                                                                                                                                                                                                                                                                                                                                   |
| :------------------------ | :---------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| errorBorderColor          | integer or string | The border color when there are errors on this input field. This property can be defined in the theme to apply to all Input widgets, starting with '0xFF' for full opacity. Possible values: transparent, black, blue, white, red, grey, teal, amber, pink, purple, yellow, green, brown, cyan, indigo, lime, orange                         |
| focusedBorderColor        | integer or string | The border color when this input field is receiving focus. This property can be defined in the theme to apply to all Input widgets, starting with '0xFF' for full opacity. Possible values: transparent, black, blue, white, red, grey, teal, amber, pink, purple, yellow, green, brown, cyan, indigo, lime, orange                          |
| focusedErrorBorderColor   | integer or string | The border color of this input field when it is receiving focus in its error state. This property can be defined in the theme to apply to all Input widgets, starting with '0xFF' for full opacity. Possible values: transparent, black, blue, white, red, grey, teal, amber, pink, purple, yellow, green, brown, cyan, indigo, lime, orange |
| disabledBorderColor       | integer or string | The border color when this input field is disabled. This property can be defined in the theme to apply to all Input widgets, starting with '0xFF' for full opacity. Possible values: transparent, black, blue, white, red, grey, teal, amber, pink, purple, yellow, green, brown, cyan, indigo, lime, orange                                 |
| fillColor                 | integer or string | The fill color for this input fields. This property can be defined in the theme to apply to all Input widgets, starting with '0xFF' for full opacity. Possible values: transparent, black, blue, white, red, grey, teal, amber, pink, purple, yellow, green, brown, cyan, indigo, lime, orange                                               |

#### Padding Properties

| Property                  | Type              | Description                                                                                                                                                                                                                                                                                                                                   |
| :------------------------ | :---------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| contentPadding            | integer or string | Padding around your input content with CSS-style notation, e.g., margin: 5 20 5.                                                                                                                                                                                                                                          |


### Box Styles (Inherited)
This widget also inherits these styles

[box](_snippets/box-styles.md ':include')

### Base Styles (Inherited)
This widget also inherits these styles

[base](_snippets/base-styles.md ':include')

### [Icon](/widget-reference/Icon.md)

| Property | Type              | Description                                                                                                                                                                                                                                                                                                                         |
| :------- | :---------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name     | string            | The name of the icon                                                                                                                                                                                                                                                                                                                |
| library  | string            | Which icon library to use.                                                                                                                                                                                                                                                                                                          |
| color    | integer or string | The color specification for the text, which can be represented in different formats. It can be specified as a number, a predefined color name, or a hexadecimal value starting with '0x'. `transparent` `black` `blue` `white` `red` `grey` `teal` `amber` `pink` `purple` `yellow` `green` `brown` `cyan` `indigo` `lime` `orange` |
| size     | integer           | Defines the dimensions or magnitude of an element, allowing control over its overall size within the layout.                                                                                                                                                                                                                        |
