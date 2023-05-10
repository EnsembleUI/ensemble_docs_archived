# Object
Any property of a javascript object may be accessed using either the parenthesis `['propname']` or the dot `myObj.propname`. 

- It the property does not exist on the object, it will return null. Exception will *not* be thrown. 

## Methods

### path(jsonPath,mapFunction)
The `path` method is a function that takes a JSON path as a string and an optional mapping function as arguments. The function traverses the object using the provided path and returns a list of the values found at that path.

The optional mapFunction argument is a function that transforms the values found at the JSON path. If a mapFunction is provided, it is applied to each value found at the path.

#### Parameters
jsonPath (String): The JSON path at which to look for values.</br>
mapFunction (Function, optional): A function to transform the values found at the path. This function is called with one argument: a list containing the current value. Pass `null` if not needed

#### Returns
A list of values found at the specified JSON path. If mapFunction is provided, the list will contain the transformed values.

Example - 
```js
var obj = {
  'name': 'John',
  'age': 30,
  'city': 'New York'
};

var result = obj.path('$.name', (val) => val[0].toUpperCase());
console.log(result); // Outputs: ["J"]
```
# Array
Arrays behave exactly as they would in regular javascript. You can access an item in the array with the index e.g. `myArray[0]`
## Methods



