# Action: openPlaidLink

openPlaidLink action allows users to open external URLs or web links directly from the app, facilitating seamless integration with external content and enhancing the user's browsing experience within the application.



                "linkToken": {
                  "type": "string",
                  "description": "Enter the Plaid Link Token. It can be created from /link/token/create endpoint of Plaid"
                },
                "onSuccess": {
                  "$ref": "#/$defs/Action-payload",
                  "description": "It is called when a user successfully links an Item"
                },
                "onEvent": {
                  "$ref": "#/$defs/Action-payload",
                  "description": "It is called when certain events in the Plaid Link flow have occurred, for example, when the user selected an institution. This enables your application to gain further insight into what is going on as the user goes through the Plaid Link flow"
                },
                "onExit": {
                  "$ref": "#/$defs/Action-payload",
                  "description": "It is called when a user exits Link without successfully linking an Item, or when an error occurs during Link initialization"


        
### Properties

| Property          | Type    | Description                 |
| :---------------- | :------ | :-------------------------- |
| linkToken         | string  | The Plaid Link Token created from /link/token/create endpoint of Plaid. |
| onSuccess | action | This action is triggered when user successfully complete the Plaid Link flow. |
| onEvent | action | This action is triggered when certain events in the Plaid Link flow have occurred, for example, when the user selected an institution. This enables your application to gain further insight into what is going on as the user goes through the Plaid Link flow. |
| onExit | action | This action is triggered when user exits Plaid Link without successfully linking a financial institution, or when an error occurs during Link initialization. |
