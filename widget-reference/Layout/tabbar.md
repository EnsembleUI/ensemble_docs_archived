# TabBar

## Properties

| Property      | Type    | Description                              |
| :------------ | :------ | :--------------------------------------- |
| styles        | object  | [See properties](#styles)                |
| selectedIndex | integer | Selecting a Tab based on its index order |
| items         | array   | Define each of your Tab here             |

### styles

| Property           | Type      | Description                                                                              |
| :----------------- | :-------- | :--------------------------------------------------------------------------------------- |
| tabPosition        | string    | How to lay out the Tab labels                                                            |
| tabPadding         | undefined | Padding for each tab labels with CSS-style value. Default: 0 30 0 0 (right padding only) |
| tabFontSize        | integer   | Font size for the tab text                                                               |
| tabFontWeight      | string    | Font weight for the tab text                                                             |
| tabBackgroundColor | undefined | The background color of the tab's navigation bar                                         |
| activeTabColor     | undefined | The color of the selected tab's text                                                     |
| inactiveTabColor   | undefined | The color of the un-selected tabs' text                                                  |
| indicatorColor     | undefined | The color of the selected tab's indicator                                                |
| indicatorThickness | integer   | The thickness of the selected tab's indicator                                            |
| margin             | undefined | Margin with CSS-style notation e.g. margin: 5 20 5                                       |
