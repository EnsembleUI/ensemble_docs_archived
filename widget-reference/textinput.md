# TextInput widget

The TextInput Widget enables the rendering of interactive text input fields, allowing users to enter and edit text within your application for data input and interaction.

[Test in Kitchen Sink](https://studio.ensembleui.com/app/e24402cb-75e2-404c-866c-29e6c3dd7992/screen/abc081b1-bcb4-4db6-ae55-7987cb6c418e)

## Properties

| Property       | Type    | Description                                                                                                                                                                                              |
| :------------- | :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id             | string  | ID to be referenced later                                                                                                                                                                                |
| maxWidth       | integer | The max width of this Input widget (default 700)                                                                                                                                                         |
| label          | string  | Label for your widget                                                                                                                                                                                    |
| labelHint      | string  | Hint text on your label                                                                                                                                                                                  |
| hintText       | string  | Hint text explaining your widget                                                                                                                                                                         |
| required       | boolean |                                                                                                                                                                                                          |
| enabled        | boolean |                                                                                                                                                                                                          |
| icon           | object  | [See properties](#icon)                                                                                                                                                                                  |
| onChange       |         | Call Ensemble's built-in functions or execute code when the input changes. Note for free-form text input, this event only dispatches if the text changes AND the focus is lost (e.g. clicking on button) |
| styles         | object  | [See properties](#styles)                                                                                                                                                                                |
| validator      | object  | [See properties](#validator)                                                                                                                                                                             |
| onKeyPress     |         | On every keystroke, call Ensemble's built-in functions or execute code                                                                                                                                   |
| value          | string  | Specifying the value of your Text Input                                                                                                                                                                  |
| inputType      | string  | Pick a predefined input type                                                                                                                                                                             |
| keyboardAction | string  | Specify the action key on native device's soft keyboard                                                                                                                                                  |
| obscureText    | boolean | whether we should obscure the typed-in text (e.g Social Security)                                                                                                                                        |
| obscureToggle  | boolean | enable the toggling between plain and obscure text.                                                                                                                                                      |

### icon

| Property | Type    | Description                |
| :------- | :------ | :------------------------- |
| name     |         | The name of the icon       |
| library  | string  | Which icon library to use. |
| color    |         |                            |
| size     | integer |                            |

### styles

| Property | Type    | Description |
| :------- | :------ | :---------- |
| fontSize | integer |             |

### validator

| Property   | Type    | Description                                                                            |
| :--------- | :------ | :------------------------------------------------------------------------------------- |
| minLength  | integer | The minimum number of characters                                                       |
| maxLength  | integer | The maximum number of characters                                                       |
| regex      | string  | The Regular Expression the input will need to match                                    |
| regexError | string  | The customized error message to show when the input does not match the provided regex. |
