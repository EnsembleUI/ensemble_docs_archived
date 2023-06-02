## API reference

| Property         | Type      | Description                                                                                                                                                                                              |
| :--------------- | :-------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id               | string    | ID to be referenced later                                                                                                                                                                                |
| maxWidth         | integer   | The max width of this Input widget (default 700)                                                                                                                                                         |
| label            | string    | Label for your widget                                                                                                                                                                                    |
| labelHint        | string    | Hint text on your label                                                                                                                                                                                  |
| hintText         | string    | Hint text explaining your widget                                                                                                                                                                         |
| required         | boolean   | undefined                                                                                                                                                                                                |
| enabled          | boolean   | undefined                                                                                                                                                                                                |
| icon             | object    | [See properties](#icon)                                                                                                                                                                                  |
| onChange         | undefined | Call Ensemble's built-in functions or execute code when the input changes. Note for free-form text input, this event only dispatches if the text changes AND the focus is lost (e.g. clicking on button) |
| styles           | object    | [See properties](#styles)                                                                                                                                                                                |
| initialValue     | string    | The highlighted initial date in the calendar picker (default is Today). Use format YYYY-MM-DD.                                                                                                           |
| firstDate        | string    | The first selectable date in the calendar. Use format YYYY-MM-DD                                                                                                                                         |
| lastDate         | string    | The last selectable date in the calendar. Use format YYYY-MM-DD                                                                                                                                          |
| showCalendarIcon | boolean   | Whether we should show (default) or hide the calendar icon. Selecting the text will still open the calendar picker                                                                                       |

### icon

| Property | Type      | Description                |
| :------- | :-------- | :------------------------- |
| name     | undefined | The name of the icon       |
| library  | string    | Which icon library to use. |
| color    | undefined | undefined                  |
| size     | integer   | undefined                  |

### styles

| Property                | Type      | Description                                                                                                                                                                                                                                    |
| :---------------------- | :-------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| expanded                | boolean   | If the parent is a Row or Column, this flag will stretch this widget in the appropriate direction. (e.g stretch horizontally for parent of type Row)                                                                                           |
| variant                 | string    | Select a pre-defined look and feel for this Input widget. This property can be defined in the theme to apply to all Input widgets.                                                                                                             |
| contentPadding          | undefined | Padding around your input content with CSS-style notation e.g. margin: 5 20 5                                                                                                                                                                  |
| fillColor               | undefined | The fill color for this input fields. This property can be defined in the theme to apply to all Input widgets.                                                                                                                                 |
| borderRadius            | integer   | The border radius for this Input widget. This property can be defined in the theme to apply to all Input widgets.                                                                                                                              |
| borderWidth             | integer   | The border width for this Input widget. This property can be defined in the theme to apply to all Input widgets.                                                                                                                               |
| borderColor             | undefined | The base border color for this input widget. This border color determines the look and feel of your input, while the other colors are overrides for different states. This property can be defined in the theme to apply to all Input widgets. |
| disabledBorderColor     | undefined | The border color when this input field is disabled. This property can be defined in the theme to apply to all Input widgets.                                                                                                                   |
| errorBorderColor        | undefined | The border color when there are errors on this input field. This property can be defined in the theme to apply to all Input widgets.                                                                                                           |
| focusedBorderColor      | undefined | The border color when this input field is receiving focus. This property can be defined in the theme to apply to all Input widgets.                                                                                                            |
| focusedErrorBorderColor | undefined | The border color of this input field when it is receiving focus in its error state. This property can be defined in the theme to apply to all Input widgets.                                                                                   |
