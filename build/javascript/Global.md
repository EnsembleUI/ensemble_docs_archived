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
