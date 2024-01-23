# Actions

When an event is triggered (e.g. button is tapped), you can perform actions such as navigate to a screen, call an API, or even run JavaScript code.

### Backend API interaction

| Property                                                           | Description                                                                                                                                                 |
| :----------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [invokeAPI](/actions/1-invokeAPI)                                  | invokeAPI is used for calling an API. You can call an API on events such as a button tap or on screen load.                                                 |

### Navigation & UI transitions

| Property                                                           | Description                                                                                                                                                 |
| :----------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [navigateScreen](/actions/8-navigateScreen)                        | navigateScreen action facilitates smooth navigation to a specific screen or page within the app's interface.                                                |
| [navigateModalScreen](/actions/9-navigateModalScreen)              | navigateModalScreen action opens a specific screen or page as a modal overlay, focusing on the temporary view without losing the main app context.          |
| [navigateViewGroup](/actions/29-navigateViewGroup)                 | navigateViewGroup action allows users to navigate between menu items while maintaining the menu in place. This simulate the experience when user taps on different nav items. |
| [navigateBack](/actions/7-navigateBack)                            | navigateBack action allows users to go back to the previous screen or page within the app's navigation stack.                                               |
| [showDialog](/actions/11-showDialog)                               | showDialog action triggers the display of a modal dialog box within the app, presenting important information or notifications.                             |
| [closeAllDialogs](/actions/12-closeAllDialogs)                     | closeAllDialogs action dismisses or closes all open modal dialogs within the app, ensuring a clutter-free interface.                                        |
| [showToast](/actions/6-showToast)                                  | showToast action displays a temporary notification or message on the app interface, providing concise and contextual updates to users.                      |
| [uploadFiles](/actions/15-uploadFiles)                             | uploadFiles action allows users to select and upload files from their device to the app, facilitating data transfer and sharing.                            |

### Device capabilities

| Property                                                           | Description                                                                                                                                                 |
| :----------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [openCamera](/actions/3-openCamera)                                | openCamera action allows users to access their device's camera within the app for capturing images and videos.                                              |
| [getLocation](/actions/14-getLocation)                             | getLocation action retrieves the device's current location, enabling location-based functionalities within the app.                                         |
| [requestNotificationAccess](/actions/19-requestNotificationAccess) | requestNotificationAccess action prompts users to grant permission for the app to send notifications to their device.                                       |
| [showNotification](/actions/20-showNotification)                   | showNotification action displays local notifications within the app, notifying users of important events or information.                                    |
| [notification](/actions/21-notification)                           | notification action manages and handles notifications within the app, enabling effective communication with users and delivering timely updates and alerts. |
| [pickFiles](/actions/16-pickFiles)                                 | pickFiles action enables users to select files from their device for further processing or usage within the app.                                            |
| [uploadFiles](/actions/15-uploadFiles)                             | uploadFiles action allows users to select and upload files from their device to the app, facilitating data transfer and sharing.                            |

### Other interactions

| Property                                                           | Description                                                                                                                                                 |
| :----------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [executeCode](/actions/2-executeCode)                              | executeCode action executes custom code logic within the app, enabling dynamic functionality and personalized interactions.                                 |
| [openUrl](/actions/4-openUrl)                                      | openUrl action opens external URLs or web links within the app, facilitating seamless integration with external content.                                    |
| [startTimer](/actions/5-startTimer)                                | startTimer action initiates a timer within the app, facilitating time-sensitive processes and triggering events after a specified duration.                 |
| [openUrl](/actions/10-openUrl)                                     | openUrl action allows users to open external URLs or web links within the app, enhancing content integration.                                               |
| [stopTimer](/actions/13-stopTimer)                                 | stopTimer action halts or pauses a running timer within the app, providing control over time-sensitive processes.                                           |
| [copyToClipboard](/actions/17-copyToClipboard)                     | copyToClipboard action copies text or content to the device's clipboard, facilitating easy sharing and transfer of information within the app.              |


### 3-rd party services

| Property                                                           | Description                                                                                                                                                 |
| :----------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [connectWallet](/actions/18-connectWallet)                         | connectWallet action establishes a connection between the app and the user's digital wallet, enabling blockchain-based interactions and transactions.       |
| [openPlaidLink](/actions/21-openPlaidLink)                         | Open the Plaid Link Service so user can link their financial accounts to your service.                                                                      |
