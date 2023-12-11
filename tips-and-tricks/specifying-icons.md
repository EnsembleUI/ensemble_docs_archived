# Specify library icons for start and end

**Objective**
To specify library icons for startingIcon and endingIcon on a Button

To achieve this, consider the following steps:

1. To specify library icons in shorthand notation for startingIcon and endingIcon on a Button, you can use the following syntax:
    ```yaml
    Button:
        startingIcon: wifi
        endingIcon: addressBook fontAwesome
    ```
2. Icons can be represented with a more verbose syntax on a Button using the following structure:
    ```yaml
    Button:
        endingIcon:
            name: addressBook
            library: fontAwesome
            size: 50
            color: red
    ```