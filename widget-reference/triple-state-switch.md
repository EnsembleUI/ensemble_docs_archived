# TripleSwitch widget

The TripleSwitch Widget enables the rendering of switch toggle elements, providing users with an intuitive and interactive way to toggle between three states (off, mixed, on) within your application.

[Test in Kitchen Sink](https://studio.ensembleui.com/app/e24402cb-75e2-404c-866c-29e6c3dd7992/screen/)

## Properties

| Property     | Type    | Description                                                                                                                                                                                              |
| :----------- | :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id           | string  | ID to be referenced later                                                                                                                                                                                                                                                      
| onChange     | action  | Call Ensemble's built-in functions or execute code when the input changes. Note for free-form text input, this event only dispatches if the text changes AND the focus is lost (e.g. clicking on button) |
| value        | string  | Specifying the value of your switch widget  (off, mixed, on)                                                                               |                                                                       |
| styles       | object  | [see properties](#styles)                                                                                                                                                                                |
| leadingText  | string  | Sets the text displayed before the checkbox                                                                                                                                                              |
| trailingText | string  | Sets the text displayed after the checkbox                                                                                                                                                               |

### styles

| Property                     | Type              | Description                                                                                                                                                                                                                                                                                                                                   |
| :--------------------------- | :---------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |                                                                                     
| activeColor                  | integer or string | Sets the active color of the switch widget, starting with '0xFF' for full opacity. `transparent` `black` `blue` `white` `red` `grey` `teal` `amber` `pink` `purple` `yellow` `green` `brown` `cyan` `indigo` `lime` `orange`                                                                           |
| inactiveColor                  | integer or string | Sets the inactive color of the switch widget, starting with '0xFF' for full opacity. `transparent` `black` `blue` `white` `red` `grey` `teal` `amber` `pink` `purple` `yellow` `green` `brown` `cyan` `indigo` `lime` `orange`                                                                           |
| mixedColor                    | integer or string | Sets the mixed state color of the switch widget, starting with '0xFF' for full opacity. `transparent` `black` `blue` `white` `red` `grey` `teal` `amber` `pink` `purple` `yellow` `green` `brown` `cyan` `indigo` `lime` `orange`                                                                           |
| activeThumbColor               | integer or string | Sets the active thumb color of the switch widget, starting with '0xFF' for full opacity. `transparent` `black` `blue` `white` `red` `grey` `teal` `amber` `pink` `purple` `yellow` `green` `brown` `cyan` `indigo` `lime` `orange`                                                                           |
| inactiveThumbColor              | integer or string | Sets the inactive thumb color of the switch widget, starting with '0xFF' for full opacity. `transparent` `black` `blue` `white` `red` `grey` `teal` `amber` `pink` `purple` `yellow` `green` `brown` `cyan` `indigo` `lime` `orange`                                                                           |
