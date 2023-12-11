# Object
Any property of a javascript object may be accessed using either the parenthesis `['propname']` or the dot `myObj.propname`. 

- It the property does not exist on the object, it will return null. Exception will *not* be thrown. 
- Let us know on our [Discord server](https://discord.gg/k4CJeuRc) if you need any of other capabilities
- or open a [ticket](https://github.com/EnsembleUI/ensemble/issues)

## Methods
### keys()
Just like the Object.keys() method in javascript. Returns an array containing the keys (propery names) of an object. 

#### Returns
Returns an array containing the keys (propery names) of an object. 

Example - 
```js
var headers = {};
headers['abc'] = 'xyz';
headers['def'] = 123;
headers['ghi'] = '456';      
var keys = headers.keys();
keys.forEach(function(key) {
  console.log(key + ':' + headers[key]);
});
/* outputs
abc:xyz
def:123
ghi:456
*/
```
### values()
Just like the Object.values() method in javascript. Returns an array containing the values (propery values) of an object. 

#### Returns
Returns an array containing the values (propery values) of an object. 

Example - 
```js
var headers = {};
headers['abc'] = 'xyz';
headers['def'] = 123;
headers['ghi'] = '456';      
headers.values().forEach(function(val) {
  console.log(val);
});
/* outputs
xyz
123
456
*/
```
### entries()
Just like the Object.entries() method in javascript. Returns an array containing the entries  of an object where each entry is an object - {key:<key>,value:<value>} 

#### Returns
Returns an array containing the values (propery values) of an object. 

Example - 
```js
var headers = {};
headers['abc'] = 'xyz';
headers['def'] = 123;
headers['ghi'] = '456';      
headers.entries().forEach(function(entry) {
  console.log(entry.key + ':' + entry.value);
});  
/* outputs
abc:xyz
def:123
ghi:456
*/
```
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
- Let us know on our [Discord server](https://discord.gg/k4CJeuRc) if you need any of other capabilities
- or open a [ticket](https://github.com/EnsembleUI/ensemble/issues)

## Properties
### length
Returns the length of the array. Works exactly like the javascript arrays. 

**Example:**

```javascript
var numbers = [1, 4, 9];
console.log(roots.length); // 3
```

## Methods
### map

The `map()` method creates a new array with the results of calling a provided function on every element in the calling array.

**Parameters:**

- `callback`: Function that produces an element of the new array, taking one argument (*note this is slightly different from js you may be used to*):
  - `currentValue`: The current element being processed in the array.

**Return value:**

A new array with each element being the result of the `callback` function.

**Example:**

```javascript
var numbers = [1, 4, 9];
var roots = numbers.map(Math.sqrt);
console.log(roots); // [1, 2, 3]
```

### filter

The `filter()` method creates a new array with all elements that pass the test implemented by the provided function.

**Parameters:**

- `callback`: Function that tests each element of the array, taking one argument (*note this is slightly different from js you may be used to*):
  - `currentValue`: The current element being processed in the array.

**Return value:**

A new array with the elements that pass the test.

**Example:**

```javascript
var numbers = [1, 4, 9];
var evenNumbers = numbers.filter(function(num) {
  return num % 2 === 0;
});
console.log(evenNumbers); // [4]
```

### forEach

The `forEach()` method executes a provided function once for each array element and does not return.

**Parameters:**

- `callback`: Function to execute for each element, taking one argument (*note this is slightly different from js you may be used to*):
  - `currentValue`: The current element being processed in the array.

**Example:**

```javascript
var numbers = [1, 4, 9];
numbers.forEach(function(num) {
  console.log('Element is ' + num);
});
// Output:
// Element is 1
// Element is 4
// Element is 9
```

### push

The `push()` method adds one or more elements to the end of an array and does not return.

**Parameters:**

- `item`: The element to add to the end of the array.

**Example:**

```javascript
var numbers = [1, 4, 9];
numbers.push(16);
console.log(numbers.length); // 4
```

### indexOf

The `indexOf()` method returns the first index at which a given element can be found in the array, or -1 if it is not present.

**Parameters:**

- `searchElement`: Element to locate in the array.

**Return value:**

The first index of the element in the array; -1 if not found.

**Example:**

```javascript
var numbers = [1, 4, 9, 4];
var index = numbers.indexOf(4);
console.log(index); // 1
```

### lastIndexOf

The `lastIndexOf()` method returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting from the end.

**Parameters:**

- `searchElement`: Element to locate in the array.

**Return value:**

The last index of the element in the array; -1 if not found.

**Example:**

```javascript
var numbers = [1, 4, 9, 4];
var index = numbers.lastIndexOf(4);
console.log(index); // 3
```

### sort

The `sort()` method sorts the elements of an array in place and returns the sorted array. The default sort order is built upon converting the elements into strings, then comparing their sequences of UTF-16 code unit values.

**Parameters:**

- `compareFunction` (optional): Specifies a function that defines the sort order. If omitted, the array is sorted according to each character's Unicode code point value. 
  -`compareFunction` is called with two parameters `(a,b)` to be compared and must return - 
    - a negative integer if [a] is smaller than [b]
    - zero if [a] is equal to [b], and
    - a positive integer if [a] is greater than [b].

**Return value:**

The sorted array.

**Example:**

```javascript
var numbers = [9, 4, 1];
var sortedNumbers = numbers.sort();
console.log(sortedNumbers); // [1, 4, 9]
```

### concat

The `concat()` method is used to merge two arrays. This method does not change the existing arrays, but instead returns a new array.

**Parameters:**

- `array: Array to concatenate into a new array.

**Return value:**

A new array that is the result of merging the arrays.

**Example:**

```javascript
var array1 = [1, 2, 3];
var array2 = [4, 5, 6];
var mergedArray = array1.concat(array2);
console.log(mergedArray); // [1, 2, 3, 4, 5, 6]
```

### find

The `find()` method returns the value of the first element in the array that satisfies the provided testing function. Otherwise, `-1` is returned.

**Parameters:**

- `callback`: Function to execute on each value in the array, taking one argument:
  - `currentValue`: The current element being processed in the array.

**Return value:**

The first element in the array that satisfies the provided testing function; otherwise, `-1`.

**Example:**

```javascript
var numbers = [1, 4, 9];
var found = numbers.find(function(num) {
  return num > 2;
});
console.log(found); // 4
```

### includes

The `includes()` method determines whether an array includes a certain element, returning `true` or `false` as appropriate.

**Parameters:**

- `searchElement`: The element to search for.
- `fromIndex` (optional): The position in this array at which to begin searching for `searchElement`

**Example:**

```javascript
var numbers = [1, 4, 9];
var found = numbers.includes(1)
console.log(found); // true
```

### at

The `at()` method returns the element at specified index.

**Parameters:**

- `index`: The index to get element for.

**Return value:**

The element at specified index.

**Example:**

```javascript
var numbers = [1, 4, 9];
var element = numbers.at(1)
console.log(element); // 4
```
