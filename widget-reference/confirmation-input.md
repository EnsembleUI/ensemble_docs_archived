# Confirmation Input

The ConfirmationInput Widget enables the seamless rendering of a verification view. The usecases are entering OTP, Confirmation Code, PIN Number, Reset Password, Coupon and more.

[Test in Kitchen Sink](https://studio.ensembleui.com/app/e24402cb-75e2-404c-866c-29e6c3dd7992/screen/iCOvav6CcioH46LR6wYF)

## Properties

| Property                      | Type    | Description                                                                                     |
| :---------------              | :------ | :---------------------------------------------------------------------------------------------- |
| length                        | integer | The number of the text fields item.                                                             |
| enableCursor                  | boolean | If the button is inside a Form and upon on tap, it will execute the form's onSubmit action if this property is TRUE.                                                           |
| autoComplete                  | boolean | If it is True, then it will trigger onComplete when the user specified length and has typed the full length, False will trigger onComplete when the user hit Enter. Defaults (True).                                                                                                   |
| fieldType                     | string  | How the input field should be displayed.                                                        |
| inputType                     | string  | Pick a predefined input type.                                                                   |
| defaultFieldBorderColor       | string  | Set the border color for inactive/unfocused state of text field.                                |
| activeFieldBorderColor        | string  | Set the border color for active/focused state of text field.                                    |
| filledFieldBorderColor        | string  | Set the border color for filled state of text field.                                            |
| defaultFieldBackgroundColor   | string  | Set the background Color for inactive/unfocused state of text field.                            |
| activeFieldBackgroundColor    | string  | Set the ackground Color for active/focused state of text field.                                 |
| filledFieldBackgroundColor    | string  | Set the ackground Color for filled field state of text field.                                   |
| cursorColor                   | string  | Set the color for the cursor.                                                                   |
| styles                        | object  | [See properties](#styles)                                                                       |
| onChange                      | action  | Execute an action when a change is detected to the text field                                   |
| onComplete                    | action  | Execute an action when the text field fully entered or when keyboard submitted button tapped    |