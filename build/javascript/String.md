# String Functions

This document covers JavaScript String functions available in Ensemble with examples. Each function is briefly explained and followed by an example demonstrating its usage.

- [Code:String in Kitchen Sink](https://studio.ensembleui.com/app/e24402cb-75e2-404c-866c-29e6c3dd7992/screen/bf9e503e-286b-437a-a692-14d0d5814918) has examples for using the String functions. Copy it into your own app and play around. 
- Let us know on our [Discord server](https://discord.gg/k4CJeuRc) if you need any of other capabilities
- or open a [ticket](https://github.com/EnsembleUI/ensemble/issues)

### indexOf

The `indexOf()` method returns the index of the first occurrence of the specified value in a string.

**Example:**

```javascript
var str = "Hello, world!";
var index = str.indexOf("world");
console.log(index); // 7
```

### lastIndexOf

The `lastIndexOf()` method returns the index of the last occurrence of the specified value in a string.

**Example:**

```javascript
var str = "Hello, world! world!";
var index = str.lastIndexOf("world");
console.log(index); // 14
```

### charAt

The `charAt()` method returns the character at the specified index in a string.

**Example:**

```javascript
var str = "Hello, world!";
var char = str.charAt(7);
console.log(char); // 'w'
```

### startsWith

The `startsWith()` method determines whether a string begins with the characters of a specified string.

**Example:**

```javascript
var str = "Hello, world!";
var result = str.startsWith("Hello");
console.log(result); // true
```

### endsWith

The `endsWith()` method determines whether a string ends with the characters of a specified string.

**Example:**

```javascript
var str = "Hello, world!";
var result = str.endsWith("world!");
console.log(result); // true
```

### includes

The `includes()` method determines whether a string contains the characters of a specified string.

**Example:**

```javascript
var str = "Hello, world!";
var result = str.includes("world");
console.log(result); // true
```

### toLowerCase

The `toLowerCase()` method returns the calling string value converted to lowercase.

**Example:**

```javascript
var str = "Hello, World!";
var lowerCaseStr = str.toLowerCase();
console.log(lowerCaseStr); // "hello, world!"
```

### toUpperCase

The `toUpperCase()` method returns the calling string value converted to uppercase.

**Example:**

```javascript
var str = "Hello, World!";
var upperCaseStr = str.toUpperCase();
console.log(upperCaseStr); // "HELLO, WORLD!"
```

### match

The `match()` method retrieves the result of matching a string against a regular expression and returns null in case there is no match. 

**Example:**

```javascript
var str = "Hello, world!";
var regex = /world/;
var result = str.match(regex);
console.log(result); // "world"
```

### matchAll

The `matchAll()` method returns an array of all the matched strings or an empty array in case there is no match. 

**Example:**

```javascript
var str = "Hello, world! world!";
var regex = /world/g;
var matches = str.matchAll(regex);
console.log(matches[0]); // "world"
console.log(matches[1]); // "world"
```

### padStart

The `padStart()` method pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length.

**Example:**

```javascript
var str = "world";
var paddedStr = str.padStart(10, "Hello, ");
console.log(paddedStr); // "Hello, world"
```

### padEnd

The `padEnd()` method pads the current string with a given string (repeated, if needed) so that the resulting string reaches a given length.

**Example:**

```javascript
var str = "Hello";
var paddedStr = str.padEnd(12, ", world!");
console.log(paddedStr); // "Hello, world!"
```

### substring

The `substring()` method returns the part of the string between the start and end indexes, or to the end of the string.

**Example:**

```javascript
var str = "Hello, world!";
var substr = str.substring(7, 12);
console.log(substr); // "world"
```

### split

The `split()` method divides a string into an ordered list of substrings, puts these substrings into an array, and returns the array.

**Example:**

```javascript
var str = "Hello, world!";
var arr = str.split(", ");
console.log(arr); // ["Hello", "world!"]
```

### btoa

The `btoa()` method creates a base-64 encoded ASCII string from a string of binary data.

**Example:**

```javascript
var str = "Hello, world!";
var base64 = btoa(str);
console.log(base64); // "SGVsbG8sIHdvcmxkIQ=="
```

### atob

The `atob()` method decodes a base-64 encoded string, returning the original binary data.

**Example:**

```javascript
var base64 = "SGVsbG8sIHdvcmxkIQ==";
var decodedStr = atob(base64);
console.log(decodedStr); // "Hello, world!"
```
### tryParseInt

The `tryParseInt()` method parses as string as `int` and returns null if it is not an integer. `parseInt()' throws an error when the passed in argument cannot be parsed as an integer

**Example:**

```javascript
var str = "123";
var i = str.tryParseInt(); // 123
str = "xyz";
i = tryParseInt(); // null
```
### tryParseDouble

The `tryParseDouble()` method parses as string as `double` and returns null if it is not a double. `parseDouble()' throws an error when the passed in argument cannot be parsed as a double

**Example:**

```javascript
var str = "123.05";
var i = str.tryParseDouble(); // 123.05
str = "xyz";
i = tryParseDouble(); // null
```
