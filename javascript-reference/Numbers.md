# Number Functions

This document covers JavaScript Number functions available in Ensemble with examples. Each function is briefly explained and followed by an example demonstrating its usage.

### toFixed

The `toFixed()` method in JavaScript is used to format a number using fixed-point notation. It takes one argument, which is the number of digits to appear after the decimal point. The method returns a string representation of the number with the specified number of decimal places.

**Syntax:**

```javascript
numObj.toFixed(digits);
```

**Parameters:**

- `digits`: An integer specifying the number of digits to appear after the decimal point. This is required unlike in js where it is optional. 

**Example:**

```javascript
var num = 123.456;
var fixedNum = num.toFixed(2);

console.log(fixedNum); // Output: "123.46"
```

In this example, the `toFixed()` method is called on the `num` variable with the argument `2`. This means that the number will be formatted with two decimal places. The result is the string `"123.46"`.

---

### toString

The `toString()` method in JavaScript is used to convert a number to a string. It can also be used to represent the number in a different base (radix) by providing an optional argument.

**Syntax:**

```javascript
numObj.toString([radix]);
```

**Parameters:**

- `radix` (Optional): An integer between 2 and 36 that represents the base to use for representing numeric values. The default value is 10.

**Example:**

```javascript
var num = 42;
var numStr = num.toString();
var numStrInBase16 = num.toString(16);

console.log(numStr); // Output: "42"
console.log(numStrInBase16); // Output: "2a"
```

In this example, the `toString()` method is called on the `num` variable without any arguments, which means that the number will be converted to a string in base 10 (decimal). The result is the string `"42"`.

The `toString()` method is then called again on the `num` variable, but this time with the argument `16`. This means that the number will be converted to a string in base 16 (hexadecimal). The result is the string `"2a"`.
