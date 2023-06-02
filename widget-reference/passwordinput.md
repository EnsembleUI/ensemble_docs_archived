## API reference

| Property       | Type      | Description                                                                                                                                                                                              |
| :------------- | :-------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id             | string    | ID to be referenced later                                                                                                                                                                                |
| maxWidth       | integer   | The max width of this Input widget (default 700)                                                                                                                                                         |
| label          | string    | Label for your widget                                                                                                                                                                                    |
| labelHint      | string    | Hint text on your label                                                                                                                                                                                  |
| hintText       | string    | Hint text explaining your widget                                                                                                                                                                         |
| required       | boolean   | undefined                                                                                                                                                                                                |
| enabled        | boolean   | undefined                                                                                                                                                                                                |
| icon           | object    | [See properties](#icon)                                                                                                                                                                                  |
| onChange       | undefined | Call Ensemble's built-in functions or execute code when the input changes. Note for free-form text input, this event only dispatches if the text changes AND the focus is lost (e.g. clicking on button) |
| styles         | object    | [See properties](#styles)                                                                                                                                                                                |
| validator      | object    | [See properties](#validator)                                                                                                                                                                             |
| onKeyPress     | undefined | On every keystroke, call Ensemble's built-in functions or execute code                                                                                                                                   |
| keyboardAction | string    | Specify the action key on native device's soft keyboard                                                                                                                                                  |
| obscureToggle  | boolean   | enable the toggling between plain and obscure text.                                                                                                                                                      |

### icon

| Property | Type      | Description                |
| :------- | :-------- | :------------------------- |
| name     | undefined | The name of the icon       |
| library  | string    | Which icon library to use. |
| color    | undefined | undefined                  |
| size     | integer   | undefined                  |

### styles

| Property | Type    | Description |
| :------- | :------ | :---------- |
| fontSize | integer | undefined   |

### validator

| Property   | Type    | Description                                                                            |
| :--------- | :------ | :------------------------------------------------------------------------------------- |
| minLength  | integer | The minimum number of characters                                                       |
| maxLength  | integer | The maximum number of characters                                                       |
| regex      | string  | The Regular Expression the input will need to match                                    |
| regexError | string  | The customized error message to show when the input does not match the provided regex. |
