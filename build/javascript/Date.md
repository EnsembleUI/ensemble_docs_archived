# JavaScript Date
The Date object is a built-in JavaScript object that represents a single moment in time, based on the number of milliseconds since January 1, 1970, 00:00:00 UTC.

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

