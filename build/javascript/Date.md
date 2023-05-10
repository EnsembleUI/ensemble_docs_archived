# JavaScript Date
The Date object is a built-in JavaScript object that represents a single moment in time, based on the number of milliseconds since January 1, 1970, 00:00:00 UTC.

- Let us know on our [Discord server](https://discord.gg/k4CJeuRc) if you need any of other capabilities
- or open a [ticket](https://github.com/EnsembleUI/ensemble/issues)

## Constructors

### Date()
Creates a new Date object with the current date and time.

Example:
```js
var date = new Date();
console.log(date.toString()); // Example output: "Fri Jun 02 2022 12:49:07 GMT+0200 (Central European Summer Time)"
```

### Date(milliseconds)
Creates a new Date object with the time set to the number of milliseconds since January 1, 1970, 00:00:00 UTC.

Example:
```js
var date = new Date(1622633347521);
console.log(date.toString()); // Example output: "Fri Jun 02 2022 12:49:07 GMT+0200 (Central European Summer Time)"
```
### Date(dateString)
Creates a new Date object with the time set to the value specified by the dateString.

Example:
```js
var date = new Date("2022-06-02T10:49:07.521Z");
console.log(date.toString()); // Example output: "Fri Jun 02 2022 12:49:07 GMT+0200 (Central European Summer Time)"
```
### Date(year, month[, day[, hour[, minutes[, seconds[, milliseconds]]]]])
Creates a new Date object with the specified date and time components. The month parameter is 0-indexed (0 for January, 1 for February, etc.).

Example:
```js
var date = new Date(2022, 5, 2, 10, 49, 7, 521);
console.log(date.toString()); // Example output: "Thu Jun 02 2022 10:49:07 GMT+0200 (Central European Summer Time)"
```
## Methods

### Date.UTC(year, month[, day[, hour[, minutes[, seconds[, milliseconds]]]]])
Returns the number of milliseconds since January 1, 1970, 00:00:00 UTC for the specified date and time components.

Example:
```js
var utc = Date.UTC(2022, 5, 2, 10, 49, 7, 521);
console.log(utc); // Example output: 1654259347521
```
### getTime()
Returns the number of milliseconds since January 1, 1970, 00:00:00 UTC.

Example:
```js
var date = new Date();
var time = date.getTime();
console.log(time); // Example output: 1622633347521
```
### getFullYear()
Returns the year according to the local time.

Example:
```js
var date = new Date();
var year = date.getFullYear();
console.log(year); // Example output: 2022
```
### getMonth()
Returns the month according to the local time (0-indexed).

Example:
```js
var date = new Date();
var month = date.getMonth();
console.log(month); // Example output: 5 (for June)
```
### getDate()
Returns the day of the month according to the local time.

Example:
```js
var date = new Date();
var dayOfMonth = date.getDate();
console.log(dayOfMonth); // Example output: 2
```
### getHours()
An integer, between 0 and 23, representing the hours for the given date according to local time.

Example:
```js
var birthday = new Date('March 13, 08 04:20');
console.log(birthday.getHours());// Expected output: 4
```
### getMinutes()
Returns the minutes according to the local time.

Example:
```js
var date = new Date();
var minutes = date.getMinutes();
console.log(minutes); // Example output: 49
```
### getSeconds()
Returns the seconds according to the local time.

Example:
```js
var date = new Date();
var seconds = date.getSeconds();
console.log(seconds); // Example output: 7
```
### getMilliseconds()
Returns the milliseconds according to the local time.

Example:
```js
var date = new Date();
var milliseconds = date.getMilliseconds();
console.log(milliseconds); // Example output: 521
```
### getDay()
Returns the day of the week according to the local time.

Example:
```js
var date = new Date();
var dayOfWeek = date.getDay();
console.log(dayOfWeek); // Example output: 4 (for Thursday)
```
### setTime(timeValue)
Sets the Date object to the time represented by the number of milliseconds since January 1, 1970, 00:00:00 UTC.

Example:
```js
var date = new Date();
date.setTime(1622633347521);
console.log(date.toString()); // Example output: "Fri Jun 02 2022 12:49:07 GMT+0200 (Central European Summer Time)"
```
### toJSON()
Returns the Date object as an ISO 8601 formatted string in UTC.

Example:
```js
var date = new Date();
var jsonString = date.toJSON();
console.log(jsonString); // Example output: "2022-06-02T10:49:07.521Z"
```
## UTC Methods
These methods are similar to their local-time counterparts but use UTC time instead of local time.

### getUTCFullYear()
Example:
```js
var date = new Date();
var utcFullYear = date.getUTCFullYear();
console.log(utcFullYear); // Example output: 2022
```
### getUTCMonth()
Example:
```js
var date = new Date();
var utcMonth = date.getUTCMonth();
console.log(utcMonth); // Example output: 5 (for June)
```
### getUTCDate()
Example:
```js
var date = new Date();
var utcDate = date.getUTCDate();
console.log(utcDate); // Example output: 2
```
### getUTCHours()
Example:
```js
var date = new Date();
var utcHours = date.getUTCHours();
console.log(utcHours); // Example output: 10
```
### getUTCMinutes()
Example:
```js
var date = new Date();
var utcMinutes = date.getUTCMinutes();
console.log(utcMinutes); // Example output: 49
```
### getUTCSeconds()
Example:
```js
var date = new Date();
var utcSeconds = date.getUTCSeconds();
console.log(utcSeconds); // Example output: 7
```
### getUTCMilliseconds()
Example:
```js
var date = new Date();
var utcMilliseconds = date.getUTCMilliseconds();
console.log(utcMilliseconds); // Example output: 521
```
### getUTCDay()
Example:
```js
var date = new Date();
var utcDay = date.getUTCDay();
console.log(utcDay); // Example output: 4 (for Thursday)
```
## Arithmatic Operations with Date
You can use a Date object as a primitive and add, subtract, multiply etc. as follows. 
Example
```js
var date = new Date(2022, 5, 2, 10, 49, 7, 521);
var yesterday = date - 1000 * 60 * 60 * 24;   // current date's milliseconds - 1,000 ms * 60 s * 60 mins * 24 hrs * (# of days beyond one to go back)
yesterday = new Date(yesterday);
console.log(yesterday); //Example output: 1
```
