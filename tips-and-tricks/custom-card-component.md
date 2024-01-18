# Customizable Card Component

**Objective**

To construct a card component with individualized backgroundGradient or backgroundImage for each instance.

To achieve this, consider the following steps:

1. Define View Structure:
    Begin by setting up the View component to establish a flexible layout that accommodates multiple card instances.

2. Create Test Widget:
    Develop the Test component to serve as the card. Ensure it has the necessary structure to receive customizable inputs.

3. Pass Colors as Input:
    Within the instantiation of the Test component in the View, employ the inputs attribute to provide an array of colors:
    ```yaml
    - Test:
      inputs:
        colors: [0xFFFF0000, 0xFFFF00FF]
    ```

4. Apply BackgroundGradient Styles:
    Inside the Test component's implementation, utilize the passed colors to define the backgroundGradient styles for the relevant container, e.g., a Row:
    ```yaml
    Row:
      styles:
        backgroundGradient:
          colors: ${colors}
    ```