- Let us know on our [Discord server](https://discord.gg/k4CJeuRc) if you need any of other capabilities
- or open a [ticket](https://github.com/EnsembleUI/ensemble/issues)

For `parseInt`, `parseFloat`, see [String.tryParseInt](/build/javascript/String) and [String.tryParseDouble](/build/javascript/String) respectively.

### console.log

The `console.log()` function is used to print messages to the console. It can be used for debugging purposes or to display information.

**Example:**

```javascript
console.log("Hello, World!"); // Output: Hello, World!
```

### regexp.test

The `regexp.test()` function is used to test if a given string matches a regular expression pattern. It returns `true` if the string matches the pattern, and `false` otherwise.

**Example:**

```javascript
var pattern = /hello/;
var str = "Hello, World!";
console.log(pattern.test(str)); // Output: false
str = "hello, how are you?";
console.log(pattern.test(str)); // Output: true
```
### btoa

The `btoa()` function is used to encode a string in base64 format. It takes a string as input and returns a base64 encoded string.

**Example:**

```javascript
var str = "Hello, World!";
console.log(btoa(str)); // Output: SGVsbG8sIFdvcmxkIQ==
```

### atob

The `atob()` function is used to decode a base64 encoded string. It takes a base64 encoded string as input and returns the decoded string.

**Example:**

```javascript
var base64Str = "SGVsbG8sIFdvcmxkIQ==";
console.log(atob(base64Str)); // Output: Hello, World!
```
### encodeURIComponent 
The `encodeURIComponent(str)` function encodes a URI component by escaping all characters except alphabetic characters, decimal digits, and a few special characters (-, _, ., !, ~, *, ', (, )). It is used to encode the values of query string parameters to ensure special characters do not interfere with the way the URI is interpreted by browsers and servers. For example, it encodes spaces as %20 and = as %3D.
[Detailed documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent)

**Example:**
```javascript
var myParam = 'This & That';
var encodedParam = encodeURIComponent(myParam);
console.log(encodedParam); // Outputs: This%20%26%20That
```
### decodeURIComponent 
`decodeURIComponent(str)` function decodes a URI component previously created by encodeURIComponent or by a similar routine. It reverses the encoding process by replacing percent-encoded characters with their corresponding ASCII characters.
[Detailed documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/decodeURIComponent)

**Example:**
```javascript
var decodedParam = decodeURIComponent(encodedParam);
console.log(decodedParam); // Outputs: This & That
```

### encodeURI 
`encodeURI(uri)`: Unlike encodeURIComponent, this function is intended to encode a complete URI without escaping characters that have special meanings in URIs (like :, /, ?, &, =). It encodes the necessary components of the URI to make it safe for transmission by escaping all characters except those considered safe.
[Detailed documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURI)

**Example:**
```javascript
var uri = 'https://mozilla.org/?x=шеллы';
var encoded = encodeURI(uri);
console.log(encoded);
// Expected output: "https://mozilla.org/?x=%D1%88%D0%B5%D0%BB%D0%BB%D1%8B"
```

### decodeURI
`decodeURI(encodedURI)`: This function is used to decode a URI that was previously encoded using encodeURI. It decodes the entire URI but will not decode characters that are part of the URI syntax itself (like ? and # in query strings and fragments).
[Detailed documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/decodeURI)

**Example:**
```javascript
var uri = 'https://mozilla.org/?x=шеллы';
var encoded = encodeURI(uri);
console.log(encoded);
// Expected output: "https://mozilla.org/?x=%D1%88%D0%B5%D0%BB%D0%BB%D1%8B"

console.log(decodeURI(encoded));
// Expected output: "https://mozilla.org/?x=шеллы"

```
