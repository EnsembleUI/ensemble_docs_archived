# Form widget

Form is a wrapper widget for inputs such as TextInput, Dropdown, Checkbox, etc. Form enables you to perform validation and styling on inputs inside the Form.

[Detailed Example of validating/submitting a Form from inside a form or outside](https://studio.ensembleui.com/app/e24402cb-75e2-404c-866c-29e6c3dd7992/screen/fIZkgKM25hNHtI0q5wZF) 

### Validate and Submit

#### Submit a Form from a Button inside a Form
To trigger validation of a Form's children inputs, add a Button widget with the property of `validateForm: true`. In this example, following validations will be performed when the submit button is pressed. If `validateForm: true`, Form will be submitted only if validation passes. 

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
#### Validate or Submit a Form from outside the Form
Detailed Example [here](https://studio.ensembleui.com/app/e24402cb-75e2-404c-866c-29e6c3dd7992/screen/fIZkgKM25hNHtI0q5wZF) This examples shows how to validate/submit a form from a sticky button in the footer. This is a common pattern in mobile apps. 

By default, when `Form.submit()` is called, it first called `Form.validate()` and calls submit only if the validation succeeds (i.e. all form fields are in valid state. 

Following is a snippet from the example above

```yaml
  footer:
    styles:
      backgroundColor: white
    children:
      - Button:
          styles:
            backgroundColor: black
            borderRadius: 40
            padding: 20
          label: Submit
          onTap: |-
            basicForm.validate();
            complexForm.submit();
```

### Styling

You can control the styling of inputs' label at the Form level, by setting `labelPosition`, `labelMaxWidth`, and `labelOverflow` properties under Form's style.

Use `labelStyle` to control the detailed styling of all the labels. Note that an Input widget's own labelStyle will take precedence over the Form's labelStyle.

```yaml
View:
  body:
    Form:
      styles:
        labelPosition: start
        labelMaxWidth: 100
        labelOverflow: clip
        # all labels will have a bolder weight
        labelStyle:
          fontWeight: w600
      children:
        - TextInput:
            label: Name
            required: true
        - TextInput:
            label: email
            required: true
            inputType: email
            styles:
              # setting this will ignore the Form's labelStyle
              labelStyle:
                color: red
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

| Property      | Type                                           | Description                                                                                                                   |
|:--------------|:-----------------------------------------------|:------------------------------------------------------------------------------------------------------------------------------|
| labelPosition | string                                         | Where the position the FormField's label `top` `start` `none`                                                                 |
| labelOverflow | string                                         | Treatment of text longer than available space `wrap` `visible` `clip` `ellipsis`                                              |
| labelMaxWidth | integer                                        | Cap the label's width, useful on larger screen. This property only works on labelPosition=start.                              |
| labelStyle    | [TextStyle](/widget-reference/types#TextStyle) | Styling for the label                                                                                                         |
| width         | integer                                        | The width property determines the horizontal size of an element, allowing control over its width dimension within the layout. |
| height        | integer                                        | The height property determines the vertical size of an element, allowing control over its height dimension within the layout. |
| gap           | integer                                        | Vertical gap to insert between the children (default is 10)                                                                   |

## Methods

| Function   | Return Type | Description                                                                                            |
|:-----------|:------------|:-------------------------------------------------------------------------------------------------------|
| validate() | boolean     | validates each formfield inside the Form. Returns true if all the fields are valid and false otherwise |
| submit()   | none        | submits the form                                                                                       |

