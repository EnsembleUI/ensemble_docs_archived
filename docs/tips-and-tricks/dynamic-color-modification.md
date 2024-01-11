# Dynamic Color Modification in JavaScript

**Objective**

To dynamically change the color of a Text widget based on a JavaScript variable. The goal is to customize the color property of the Text widget's style.

To achieve this, consider the following steps:

1. Access Text Widget:
    Obtain a reference to the Text widget that you want to modify. In the provided example, it can be accessed using the identifier (id).
    ```yaml
    - Text:
        text: Hi there!
        styles:
            textStyle:
            fontSize: 24
            color: blue
        id: helloUser
    ```

2. Modify Color Property:
    Directly modify the color property of the Text widget's style using the assigned identifier.
    ```javascript
    helloUser.color = 'red';
    ```
