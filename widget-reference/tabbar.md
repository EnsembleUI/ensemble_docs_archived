# TabBar

The TabBar Widget enables the creation of tab bars, providing a convenient and visually appealing way to navigate between different sections or views within your application.

[Test in Kitchen Sink](https://studio.ensembleui.com/app/e24402cb-75e2-404c-866c-29e6c3dd7992/screen/cebd491d-7d90-43f4-9f17-b8575de441ca)

## Properties

| Property      | Type    | Description                              |
| :------------ | :------ | :--------------------------------------- |
| styles        | object  | [See properties](#styles)                |
| selectedIndex | integer | Selecting a Tab based on its index order |
| items         | array   | Define each of your Tab here             |
| onTabSelection | action | The action that will be performed when a tab is pressed. |
| onTabSelectionHaptic | enum | The type of haptic to perform when a tab is pressed. It should be one of heavyImpact, mediumImpact, lightImpact, selectionClick, and vibrate |

### styles

| Property           | Type              | Description                                                                                                                                                                                                                                                                                                                                     |
| :----------------- | :---------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| tabPosition        | string            | How to lay out the Tab labels                                                                                                                                                                                                                                                                                                                   |
| tabAlignment       | enum                                     | The TabBar alignments: `start`, `startOffset`, `fill`, `center`.                                                                                              |
| tabPadding         | string or integer | Padding for each tab labels with CSS-style value. Default: 0 30 0 0 (right padding only)                                                                                                                                                                                                                                                        |
| tabFontSize        | integer           | Font size for the tab text                                                                                                                                                                                                                                                                                                                      |
| tabFontWeight      | string            | Font weight for the tab text                                                                                                                                                                                                                                                                                                                    |
| tabBackgroundColor | integer or string | The background color of the tab's navigation bar, which can be represented in different formats. It can be specified as a number, a predefined color name, or a hexadecimal value starting with '0x'. `transparent` `black` `blue` `white` `red` `grey` `teal` `amber` `pink` `purple` `yellow` `green` `brown` `cyan` `indigo` `lime` `orange` |
| activeTabColor     | integer or string | The color of the selected tab's text, which can be represented in different formats. It can be specified as a number, a predefined color name, or a hexadecimal value starting with '0x'. `transparent` `black` `blue` `white` `red` `grey` `teal` `amber` `pink` `purple` `yellow` `green` `brown` `cyan` `indigo` `lime` `orange`             |
| inactiveTabColor   | integer or string | The color of the un-selected tabs' text, which can be represented in different formats. It can be specified as a number, a predefined color name, or a hexadecimal value starting with '0x'. `transparent` `black` `blue` `white` `red` `grey` `teal` `amber` `pink` `purple` `yellow` `green` `brown` `cyan` `indigo` `lime` `orange`          |
| indicatorColor     | integer or string | The color of the selected tab's indicator, which can be represented in different formats. It can be specified as a number, a predefined color name, or a hexadecimal value starting with '0x'. `transparent` `black` `blue` `white` `red` `grey` `teal` `amber` `pink` `purple` `yellow` `green` `brown` `cyan` `indigo` `lime` `orange`        |
| indicatorThickness | integer           | The thickness of the selected tab's indicator                                                                                                                                                                                                                                                                                                   |
| margin             | string or integer | Margin with CSS-style notation e.g. margin: 5 20 5                                                                                                                                                                                                                                                                                              |
