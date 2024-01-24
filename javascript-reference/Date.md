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

**Note: The function parses a subset of ISO 8601, which includes the subset accepted by RFC 3339.**

The accepted inputs are currently:

* A date: A signed four-to-six digit year, two digit month and two digit day, optionally separated by - characters. Examples: "19700101", "-0004-12-24", "81030-04-01".
* An optional time part, separated from the date by either T or a space. The time part is a two digit hour, then optionally a two digit minutes value, then optionally a two digit seconds value, and then optionally a '.' or ',' followed by at least a one digit second fraction. The minutes and seconds may be separated from the previous parts by a ':'. Examples: "12", "12:30:24.124", "12:30:24,124", "123010.50".
* An optional time-zone offset part, possibly separated from the previous by a space. The time zone is either 'z' or 'Z', or it is a signed two digit hour part and an optional two digit minute part. The sign must be either "+" or "-", and cannot be omitted. The minutes may be separated from the hours by a ':'. Examples: "Z", "-10", "+01:30", "+1130".
* This includes the output of both toString and toIso8601String, which will be parsed back into a DateTime object with the same time as the original.

The result is always in either local time or UTC. If a time zone offset other than UTC is specified, the time is converted to the equivalent UTC time.

Examples of accepted strings:

* "2012-02-27"
* "2012-02-27 13:27:00"
* "2012-02-27 13:27:00.123456789z"
* "2012-02-27 13:27:00,123456789z"
* "20120227 13:27:00"
* "20120227T132700"
* "20120227"
* "+20120227"
* "2012-02-27T14Z"
* "2012-02-27T14+00:00"
* "-123450101 00:00:00 Z": in the year -12345.
* "2002-02-27T14:00:00-0500": Same as "2002-02-27T19:00:00Z"

This method accepts out-of-range component values and interprets them as overflows into the next larger component. For example, "2020-01-42" will be parsed as 2020-02-11, because the last valid date in that month is 2020-01-31, so 42 days is interpreted as 31 days of that month plus 11 days into the next month.

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
### toJSON()
Returns the Date object as an ISO 8601 formatted string in UTC.

Example:
```js
var date = new Date();
var jsonString = date.toJSON();
console.log(jsonString); // Example output: "2022-06-02T10:49:07.521Z"
```
### toString()
Returns the Date object as a human readable string. It does not support internationalized strings.
This string can be parsed back into the Date object using the parse() method

Example:
```js
var date = new Date();
var str = date.toString()
console.log(str); // Example output: "2023-11-02 17:03:32.094453"
```
### toISOString()
Returns the Date object as a ISO8601 string. It does not support internationalized strings.
This string can be parsed back into the Date object using the parse() method

Example:
```js
var event = new Date('2023-11-02 17:07:35.053068');
var str = date.toISOString()
console.log(str); // Example output: "2023-11-03T00:07:35.053068Z"
```
### setTime(timeValue)
Sets the Date object to the time represented by the number of milliseconds since January 1, 1970, 00:00:00 UTC.

Example:
```js
var date = new Date();
date.setTime(1622633347521);
console.log(date.toString()); // Example output: "Fri Jun 02 2022 12:49:07 GMT+0200 (Central European Summer Time)"
```
### setDate()
Description: Sets the day of the month for a specified date according to local time.
Syntax: dateObj.setDate(dayValue)
Parameters:
dayValue: An integer from 1 to 31, representing the day of the month.
Example:
```js
var date = new Date();
date.setDate(15);
```
### setMonth()
Description: Sets the month for a specified date according to local time.
Syntax: dateObj.setMonth(monthValue)
Parameters:
monthValue: An integer from 0 (January) to 11 (December) representing the month.
Example:
```js
var date = new Date();
date.setMonth(5); // Sets the month to June
```
### setFullYear()
Description: Sets the full year for a specified date according to local time.
Syntax: dateObj.setFullYear(yearValue)
Parameters:
yearValue: An integer specifying the numeric value of the year, e.g., 1995.
Example:
```js
var date = new Date();
date.setFullYear(2024);
```
### setHours()
Description: Sets the hours for a specified date according to local time.
Syntax: dateObj.setHours(hoursValue)
Parameters:
hoursValue: An integer from 0 to 23, representing the hour.
Example:
```js
var date = new Date();
date.setHours(13);
```
### setMinutes()
Description: Sets the minutes for a specified date according to local time.
Syntax: dateObj.setMinutes(minutesValue)
Parameters:
minutesValue: An integer from 0 to 59, representing the minutes.
Example:
```js
var date = new Date();
date.setMinutes(45);
```
### setUTCDate()
Description: Sets the day of the month for a specified date according to UTC.
Syntax: dateObj.setUTCDate(dayValue)
Parameters:
dayValue: An integer from 1 to 31, representing the day of the month.
Example:
```js
var date = new Date();
date.setUTCDate(15);
```
### setUTCMonth()
Description: Sets the month for a specified date according to UTC.
Syntax: dateObj.setUTCMonth(monthValue)
Parameters:
monthValue: An integer from 0 (January) to 11 (December) representing the month.
Example:
```js
var date = new Date();
date.setUTCMonth(5); // Sets the month to June
```
### setUTCFullYear()
Description: Sets the full year for a specified date according to UTC.
Syntax: dateObj.setUTCFullYear(yearValue)
Parameters:
yearValue: An integer specifying the numeric value of the year, e.g., 1995.
Example:
```js
var date = new Date();
date.setUTCFullYear(2024);
```
### setUTCHours()
Description: Sets the hours for a specified date according to UTC.
Syntax: dateObj.setUTCHours(hoursValue)
Parameters:
hoursValue: An integer from 0 to 23, representing the hour.
Example:
```js
var date = new Date();
date.setUTCHours(13);
```
### setUTCMinutes()
Description: Sets the minutes for a specified date according to UTC.
Syntax: dateObj.setUTCMinutes(minutesValue)
Parameters:
minutesValue: An integer from 0 to 59, representing the minutes.
Example:
```js
var date = new Date();
date.setUTCMinutes(45);
```
### setUTCSeconds()
Description: Sets the seconds for a specified date according to UTC.
Syntax: dateObj.setUTCSeconds(secondsValue)
Parameters:
secondsValue: An integer from 0 to 59, representing the seconds.
Example:
```js
var date = new Date();
date.setUTCSeconds(30);
```
### setUTCMilliseconds()
Description: Sets the milliseconds for a specified date according to UTC.
Syntax: dateObj.setUTCMilliseconds(millisecondsValue)
Parameters:
millisecondsValue: An integer from 0 to 999, representing the milliseconds.
Example:
```js
var date = new Date();
date.setUTCMilliseconds(500);
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
