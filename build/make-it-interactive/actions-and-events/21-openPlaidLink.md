# Action: openPlaidLink

openPlaidLink action allows users to open external URLs or web links directly from the app, facilitating seamless integration with external content and enhancing the user's browsing experience within the application.
        
### Properties

| Property          | Type    | Description                 |
| :---------------- | :------ | :-------------------------- |
| linkToken         | string  | The Plaid Link Token created from /link/token/create endpoint of Plaid. View Plaid's documation [here](https://plaid.com/docs/api/tokens/#linktokencreate). |
| onSuccess | action | This action is triggered when user successfully complete the Plaid Link flow. |
| onEvent | action | This action is triggered when certain events in the Plaid Link flow have occurred, for example, when the user selected an institution. This enables your application to gain further insight into what is going on as the user goes through the Plaid Link flow. |
| onExit | action | This action is triggered when user exits Plaid Link without successfully linking a financial institution, or when an error occurs during Link initialization. |
