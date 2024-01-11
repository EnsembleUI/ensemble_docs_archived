# Calling an API and Using It's Response to Fill an Array

**Objective**
To retrieve the API response, modify an array containing user details through a designated function each time the API is called, and subsequently update this array whenever the API is invoked using a code block triggered by the onTap event on an Icon. Finally, to visualize these user details by generating icons from the updated array using an item template.

To achieve this, consider the following steps:

1. Storage Handling:
    Store the user details array as a variable in ensemble.storage.
2. Binding with Item Template:
    Bind your item template to the stored array. This ensures that any manipulation of the array automatically triggers changes in the associated widget.
3. Array Update Mechanism:
    After modifying the array values, make sure to set the array again. This step is crucial for triggering the binding mechanism and updating the widget accordingly.

By following this approach, you can integrate API responses, array manipulation, and visual representation using Ensemble, creating a dynamic and responsive user interface.