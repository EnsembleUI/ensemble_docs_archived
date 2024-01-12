# Form widget

Form is a wrapper widget for inputs such as TextInput, Dropdown, Checkbox, etc. Form enables you to perform validation and styling on inputs inside the Form.

[Test in Kitchen Sink](https://studio.ensembleui.com/app/e24402cb-75e2-404c-866c-29e6c3dd7992/screen/3107baf6-dfc3-42cd-b617-61c37b31f31e)

### Validation

To trigger validation of a Form's children inputs, add a Button widget with the property of `validateForm: true`. In this example, following validations will be performed when the submit button is pressed.

```yaml
View:
  body:
    Form:
      onSubmit:
        invokeAPI:
          name: addAccount
          inputs:
            name: ${name.value}
            email: ${email.value}
        onResponse:
          # perform additional action here
        onError:
          # perform additional action here
      children:
        - TextInput:
            id: name
            label: First and last name
            required: true
        - TextInput:
            id: email
            label: Email
            required: true
            inputType: email
        - Button:
            label: Submit
            validateForm: true
            submitForm: true

API:
  addAccount:
    inputs:
      - name
      - email
    method: POST
    uri: https://sample.api/user
    body:
      name: ${name}
      email: ${email}
```

### Styling

You can control the styling of inputs' label at the Form level, by setting `labelPosition`, `labelMaxWidth`, and `labelOverflow` properties under Form's style.

```yaml
View:
  body:
    Form:
      styles:
        labelPosition: start
        labelMaxWidth: 100
        labelOverflow: clip
      children:
        - TextInput:
            label: Name
            required: true
        - TextInput:
            label: email
            required: true
            inputType: email
        - Button:
            label: Submit
            validateForm: true
```

## Properties

| Property | Type    | Description                                                               |
| :------- | :------ | :------------------------------------------------------------------------ |
| enabled  | boolean | Enables or disables the interactivity and input functionality of the Form |
| onSubmit | action  | Action to execute when the form is submitted                              |
| children | array   | List of widgets                                                           |
| styles   | object  | [see properties](#styles)                                                 |

## Styles

| Property      | Type    | Description                                                                                                                   |
| :------------ | :------ | :---------------------------------------------------------------------------------------------------------------------------- |
| labelPosition | string  | Where the position the FormField's label `top` `start` `none`                                                                 |
| labelOverflow | string  | Treatment of text longer than available space `wrap` `visible` `clip` `ellipsis`                                              |
| labelMaxWidth | integer | Cap the label's width, useful on larger screen. This property only works on labelPosition=start.                              |
| width         | integer | The width property determines the horizontal size of an element, allowing control over its width dimension within the layout. |
| height        | integer | The height property determines the vertical size of an element, allowing control over its height dimension within the layout. |
| gap           | integer | Vertical gap to insert between the children (default is 10)                                                                   |

## Methods

| Function      | Return Type    | Description                                                                                                                   |
| :------------ | :------ | :---------------------------------------------------------------------------------------------------------------------------- |
| validate() | boolean  | validates each formfield inside the Form. Returns true if all the fields are valid and false otherwise                                                                 |
| submit | none  | submits the form                                             |
