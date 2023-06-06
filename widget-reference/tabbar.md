# TabBar

The TabBar Widget enables the creation of tab bars, providing a convenient and visually appealing way to navigate between different sections or views within your application.

[Test in Kitchen Sink](https://studio.ensembleui.com/app/e24402cb-75e2-404c-866c-29e6c3dd7992/screen/cebd491d-7d90-43f4-9f17-b8575de441ca)

## Properties

| Property      | Type    | Description                              |
| :------------ | :------ | :--------------------------------------- |
| styles        | object  | [See properties](#styles)                |
| selectedIndex | integer | Selecting a Tab based on its index order |
| items         | array   | Define each of your Tab here             |

### styles

| Property           | Type    | Description                                                                              |
| :----------------- | :------ | :--------------------------------------------------------------------------------------- |
| tabPosition        | string  | How to lay out the Tab labels                                                            |
| tabPadding         |         | Padding for each tab labels with CSS-style value. Default: 0 30 0 0 (right padding only) |
| tabFontSize        | integer | Font size for the tab text                                                               |
| tabFontWeight      | string  | Font weight for the tab text                                                             |
| tabBackgroundColor |         | The background color of the tab's navigation bar                                         |
| activeTabColor     |         | The color of the selected tab's text                                                     |
| inactiveTabColor   |         | The color of the un-selected tabs' text                                                  |
| indicatorColor     |         | The color of the selected tab's indicator                                                |
| indicatorThickness | integer | The thickness of the selected tab's indicator                                            |
| margin             |         | Margin with CSS-style notation e.g. margin: 5 20 5                                       |
