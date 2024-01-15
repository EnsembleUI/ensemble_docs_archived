# String Functions

This document covers JavaScript String functions available in Ensemble with examples. Each function is briefly explained and followed by an example demonstrating its usage.

- [Code:String in Kitchen Sink](https://studio.ensembleui.com/app/e24402cb-75e2-404c-866c-29e6c3dd7992/screen/bf9e503e-286b-437a-a692-14d0d5814918) has examples for using the String functions. Copy it into your own app and play around.
- Let us know on our [Discord server](https://discord.gg/k4CJeuRc) if you need any of other capabilities
- or open a [ticket](https://github.com/EnsembleUI/ensemble/issues)

### length

The `length` property returns the length of the string

**Example:**

```javascript
var str = "Hello";
var len = str.length;
console.log(len); // 5
```

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
### trim
The trim() method removes whitespace from both ends of a string.

```js
var str = "   Hello, world!   ";
var result = str.trim();
console.log(result); // "Hello, world!"
```
### trimStart
The trimStart() method removes whitespace from the beginning of a string.

```js
var str = "   Hello, world!";
var result = str.trimStart();
console.log(result); // "Hello, world!"
```
### trimEnd
The trimEnd() method removes whitespace from the end of a string.

```js
var str = "Hello, world!   ";
var result = str.trimEnd();
console.log(result); // "Hello, world!"
```
### repeat
The `repeat()` method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.

```js
var str = "Hello ";
var result = str.repeat(3);
console.log(result); // "Hello Hello Hello "
```

### search
The `search()` method executes a search for a match between a regular expression and this String object.

```js
var str = "Hello, world!";
var result = str.search(/world/);
console.log(result); // 7
```

### slice
The `slice()` method extracts a section of a string and returns it as a new string, without modifying the original string.

```js
var str = "Hello, world!";
var result = str.slice(7, 12);
console.log(result); // "world"
```

### substr
The `substr()` method returns a portion of the string, starting at the specified index and extending for a given number of characters afterward.

```js
var str = "Hello, world!";
var result = str.substr(7, 5);
console.log(result); // "world"
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

The `padStart()` method pads the current string with another string (multiple times, if needed) on the left until the resulting string reaches the given length.

- If width is already smaller than or equal to `this.length`, no padding is added. A negative `width` is treated as zero.
- The second argument (string to be padded with) is optional. When not specified, space is used for padding
- If padding has length different from 1, the result will not have length width. This may be useful for cases where the padding is a longer string representing a single character, like "&nbsp;" or "\u{10002}". In that case, the user should make sure that this.length is the correct measure of the string's length.

**Example:**

```javascript
var str = "world";
var paddedStr = str.padStart(6, "Hello");
console.log(paddedStr); // "Helloworld"
paddedStr = str.padStart(10, "Hello");
console.log(paddedStr); // "HelloHelloHelloHelloHelloworld"
paddedStr = str.padStart(8, "<");
console.log(paddedStr); // "<<<world"
```

### padEnd

The `padEnd()` method pads the current string with another string (multiple times, if needed) on the right until the resulting string reaches the given length.

- If width is already smaller than or equal to `this.length`, no padding is added. A negative `width` is treated as zero.
- The second argument (string to be padded with) is optional. When not specified, space is used for padding
- If padding has length different from 1, the result will not have length width. This may be useful for cases where the padding is a longer string representing a single character, like "&nbsp;" or "\u{10002}". In that case, the user should make sure that this.length is the correct measure of the string's length.

**Example:**

```javascript
var str = "world";
var paddedStr = str.padEnd(6, "Hello");
console.log(paddedStr); // "worldHello"
paddedStr = str.padEnd(10, "Hello");
console.log(paddedStr); // "worldHelloHelloHelloHelloHello"
paddedStr = str.padEnd(8, "<");
console.log(paddedStr); // "world<<<"
```

### replace

The `replace()` function replaces the first occurrence of a specified substring or regular expression with a new substring. It returns a new string with the replaced content while leaving the original string unchanged.

**Syntax:**
```javascript
replace(pattern, replacement);
```
**Example:**

```javascript
const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

console.log(p.replace('dog', 'monkey'));
// Expected output: "The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?"

const regex = /Dog/i;
console.log(p.replace(regex, 'ferret'));
// Expected output: "The quick brown fox jumps over the lazy ferret. If the dog reacted, was it really lazy?"
```

### replaceAll

The `replaceAll()` method of String values returns a new string with all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match. The original string is left unchanged.

**Syntax:**
```javascript
replaceAll(pattern, replacement)
```
**Example:**

```javascript
const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

console.log(p.replaceAll('dog', 'monkey'));
// Expected output: "The quick brown fox jumps over the lazy monkey. If the monkey reacted, was it really lazy?"

// Global flag required when calling replaceAll with regex
const regex = /Dog/gi;
console.log(p.replaceAll(regex, 'ferret'));
// Expected output: "The quick brown fox jumps over the lazy ferret. If the ferret reacted, was it really lazy?"
```

### split

The `split()` method divides a string into an ordered list of substrings, puts these substrings into an array, and returns the array.

**Example:**

```javascript
var str = "Hello, world!";
var arr = str.split(", ");
console.log(arr); // ["Hello", "world!"]
```

### startsWith

The `startsWith()` method determines whether a string begins with the characters of a specified string.

**Example:**

```javascript
var str = "Hello, world!";
var result = str.startsWith("Hello");
console.log(result); // true
```

### substring

The `substring()` method returns the part of the string between the start and end indexes, or to the end of the string.

**Example:**

```javascript
var str = "Hello, world!";
var substr = str.substring(7, 12);
console.log(substr); // "world"
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

### Concatenate a string in an inline expression

We can concatenate strings with variables or other strings simply by wrapping them in single quotes if the inner strings are wrapped in double quotes or vise versa. This example is specifically for inline expressions used in ensembleUI.

**Example**

```yaml
Column:
  children:
    - Text:
        id: helloId
        text: Apple
    - Text:
        text: '${helloId.text + "It's me SwiftUI"}'     # correct way
    - Text:
        text: ${helloId.text} + It's me SwiftUI New     # wrong way
    - Text:
        text: Apple + It's me SwiftUI New 2

```
