# Carousel

The Carousel Widget allows you to create and render carousels, enabling the presentation of multiple items in a visually engaging and interactive slideshow format within your application.

[Test in Kitchen Sink](https://studio.ensembleui.com/app/e24402cb-75e2-404c-866c-29e6c3dd7992/screen/2e1d88b1-f281-4c2c-9bb1-bd18016d2b8c)

## Properties

| Property      | Type   | Description                                                                                                                                                                                                                                            |
| :------------ | :----- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| children      | array  | List of widgets                                                                                                                                                                                                                                        |
| onItemChange  |        | Dispatch when an carousel item is in focus. For SingleView, this happens when the item is scroll into view. For scrolling MultiView, the event dispatches only when you tap on the item. The index of the item can be retrieved using 'selectedIndex'. |
| styles        | object | [See properties](#styles)                                                                                                                                                                                                                              |
| item-template | object | [See properties](#item-template)                                                                                                                                                                                                                       |

### styles

| Property               | Type    | Description                                                                                                                                   |
| :--------------------- | :------ | :-------------------------------------------------------------------------------------------------------------------------------------------- |
| layout                 | string  | Show a SingleView (on screen one at a time), MultiView (scrolling items), or automatically switch between the views with autoLayoutBreakpoint |
| autoLayoutBreakpoint   | integer | Show multiple views on the carousel if the breakpoint is equal or larger than this threshold, otherwise show single view. (default 768)       |
| height                 | integer | The height of each view                                                                                                                       |
| gap                    | integer | The gap between each views, but also act as a left-right margin in a single view                                                              |
| leadingGap             | integer | The space before the first item. Note that the left edge of the scroll area is still controlled by padding or margin.                         |
| trailingGap            | integer | The space after the last item. Note that the right edge of the scroll area is still controlled by padding or margin.                          |
| singleItemWidthRatio   | number  | The screen width ratio for each carousel item (in single item mode). Value ranges from 0.0 to 1.0 for the full width. (default 1.0)           |
| multipleItemWidthRatio | number  | The screen width ratio for each carousel item (in multiple item mode). Value ranges from 0.0 to 1.0 for the full width (default 0.6)          |
| indicatorType          | string  | How the view indicator should be displayed                                                                                                    |
| indicatorPosition      | string  | Where to display the indicator if specified                                                                                                   |
| indicatorWidth         | integer |                                                                                                                                               |
| indicatorHeight        | integer |                                                                                                                                               |
| indicatorMargin        |         | The margin around each indicator                                                                                                              |

### item-template

| Property | Type   | Description                                                        |
| :------- | :----- | :----------------------------------------------------------------- |
| data     | string | Bind to an array of data from an API response or a variable        |
| name     | string | Set the name to reference as you iterate through the array of data |
| template |        | The widget to render for each item                                 |
