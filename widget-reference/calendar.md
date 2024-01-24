# Creating and Interacting with Calendar

### [Kitchen Sink Example](https://studio.ensembleui.com/app/e24402cb-75e2-404c-866c-29e6c3dd7992/screen/4aAgiwyVyucOAilPNy0s)

| Attribute          | Description                                                                                   |
|--------------------|-----------------------------------------------------------------------------------------------|
| rowHeight          | Sets the height of each row in the calendar to a specified value (120 in this case).          |
| tooltip            | Displays a tooltip with information about the focused date, providing guidance on interaction.|
| headerTextStyle    | Defines the text style for the calendar header, controlling its font size.                    |
| firstDay           | Sets the first day of the calendar based on the current date.                                  |
| range              | Manages the selection of date ranges, allowing actions to be performed when a range is completed.|
| cell               | Configures the style and alignment of individual calendar cells.                               |
| selectCell         | Specifies the appearance of the selected cell in the calendar.                                 |
| markCell           | Determines the style of marked cells in the calendar.                                          |
| todayCell          | Customizes the appearance of cells representing the current date.                              |
| disableCell        | Defines the style of disabled cells in the calendar, typically with a line-through decoration.|
| rowSpans           | Configures the display of events spanning across multiple days, providing a clickable button.  |


### Row Span in detail

Row spans are widget, this widget span across multiple cell (Date). 
| Property | Type   | Description                                                        |
| :------- | :----- | :----------------------------------------------------------------- |
| data | string | Bind to an array of data from an API response or storgae |
| name | string | Set the name to reference as you iterate through the array of data |
| span | | [Span detail](#Span) |

#### Span
| Property | Type   | Description                                                        |
| :------- | :----- | :----------------------------------------------------------------- |
| start | string, DateTime | Starting date of span |
| end | string, DateTime | Ending date of span |
| widget | | The widget to render for each item |


### Methods 
| Function | Args |  Description | 
| ---| ---| --- |
|update() | | Refresh the calendar if required. Note calendar will automatically on calling any below functions |
| clearRange() |  | Clear range entire range selection with this function. |
|selectCell(dates) | Single Date (string, DateTime), List of Dates (string, DateTime) | Mark given date as selected |
|selectStartEndCell(startDate, endDate) | Start Date (string, DateTime), End Date (string, DateTime) | Mark start, end and every date in between as selected|
|unSelectCell(dates) | Single Date (string, DateTime), List of Dates (string, DateTime) | Mark given date as un-selected |
|unSelectStartEndCell(startDate, endDate) | Start Date (string, DateTime), End Date (string, DateTime) | Mark start, end and every date in between as un-selected|
|toggleSelectCell(dates)| Single Date (string, DateTime), List of Dates (string, DateTime)  | Toggle between selected and unselected with given dates
|markCell(dates) | Single Date (string, DateTime), List of Dates (string, DateTime) | Mark given date as marked |
|markStartEndCell(startDate, endDate) | Start Date (string, DateTime), End Date (string, DateTime) | Mark start, end and every date in between as marked|
|unMarkCell(dates) | Single Date (string, DateTime), List of Dates (string, DateTime) | Mark given date as un-mark |
|unMarkStartEndCell(startDate, endDate) | Start Date (string, DateTime), End Date (string, DateTime) | Mark start, end and every date in between as un-marked|
|toggleMarkCell(dates)| Single Date (string, DateTime), List of Dates (string, DateTime)  | Toggle between mark and unMark with given dates
|disableCell(dates) | Single Date (string, DateTime), List of Dates (string, DateTime) | Mark given date as disable |
|disableCell(dates) | Single Date (string, DateTime), List of Dates (string, DateTime) | Mark given date as disable |
|enableCell(dates) | Single Date (string, DateTime), List of Dates (string, DateTime) | Mark given date as enabled |
|toggleDisableCell(dates) | Single Date (string, DateTime), List of Dates (string, DateTime) | Toggle between enable and disabled cells with given dates |

#### Exploring the [Kitchen Sink example](https://studio.ensembleui.com/app/e24402cb-75e2-404c-866c-29e6c3dd7992/screen/4aAgiwyVyucOAilPNy0s), let's delve into the process that repeats as users interact with the app, triggering events and updating the UI based on the defined logic and configurations.

Upon the View's loading, we initiate the following code block:
```yaml
executeCode:
      body: |-
        ensemble.storage.events = generateEvents();
```
This loads in all hardcoded objects  within the `generateEvents()` function, as outlined in the `Global: |-` block.

A notable quirk is encountered when dealing with bindings – setting storage to something (even itself) triggers them. The Calendar example illustrates this perfectly:
```yaml
executeCode:
    body: |-
        var newEvent = {'start_date': calendar.rangeStart, 'end_date': calendar.rangeEnd, 'title': nameInput.value, 'detail': descInput.value}; 
        ensemble.storage.events.push(newEvent);
        ensemble.storage.events = ensemble.storage.events;
        console.log(ensemble.storage.events);
    onComplete:
        navigateBack:
```
Here, we start by appending/pushing our new event into our `ensemble.storage.events` array. However, to activate the binding for the updated array, we set it equal to itself, completing the cycle.