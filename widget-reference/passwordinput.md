# PasswordInput widget

The PasswordInput Widget enables the rendering of secure password input fields, ensuring that user-entered passwords remain hidden and protected within your application for enhanced security and privacy.

[Test in Kitchen Sink](https://studio.ensembleui.com/app/e24402cb-75e2-404c-866c-29e6c3dd7992/screen/218fa244-f0cd-4d17-91e6-7c099bbedede)

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
| keyboardAction | string  | Specify the action key on native device's soft keyboard                                                                                                                                                  |
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
