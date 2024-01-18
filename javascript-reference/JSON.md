# JSON
Ensemble Javascript provides two key methods to deal with the JSON objects.

## Methods
### parse()
The JSON.parse() static method parses a JSON string, constructing the JavaScript object described by the string. 

#### Returns
Returns a Javascript object

Example - 
```js
const json = '{"result":true, "count":42}';
const obj = JSON.parse(json);

console.log(obj.count);
// Expected output: 42

console.log(obj.result);
// Expected output: true
```
### stringify()
The JSON.stringify() static method converts a JavaScript value to a JSON string.

Types that are directly converted to json strings - string, number, array, object (map), boolean and date. Date objects are converted to string by calling the [toISOString()](https://github.com/EnsembleUI/ensemble_docs/blob/main/javascript-reference/Date.md#toisostring) method. 

#### Returns
Returns a string representing the json object 

Example - 
```js
console.log(JSON.stringify({ x: 5, y: 6 }));
// Expected output: '{"x":5,"y":6}'
```
