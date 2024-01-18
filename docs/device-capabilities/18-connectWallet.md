# Action : connectWallet

connectWallet action enables users to establish a connection between their digital wallet and the app, facilitating seamless integration with blockchain-based functionalities, token transfers, and decentralized applications, enhancing user interactions with cryptocurrency-related features.

### Properties

| Property    | Type   | Description                                                       |
| :---------- | :----- | :---------------------------------------------------------------- |
| id          | string | ID allows you to bind to its result. e.g. ${wallet.addresses...}, |
| wcProjectId | string | Wallet connect project Id, get it from wallet connect dashboard   |
| onComplete  | action | Execute another Action upon successful upload of files            |
| onError     | action | Execute an Action when uploader fails with error(s)               |
| appMetaData | object | [see properties](#propertiesappMetaData)                          |

#### properties.appMetaData

| Property    | Type   | Description                                                  |
| :---------- | :----- | :----------------------------------------------------------- |
| name        | string | Your app name, that will be shared to crypto wallet          |
| description | string | Your app's description, that will be shared to crypto wallet |
| url         | string | You app's / company's url                                    |
| iconUrl     | string | Url path of your app's icon                                  |

**Example**

<div class="code-container" markdown=1>
  <button onclick="copyCode()" class="copy-code-button">Copy Code</button>

```yaml
View:
  title: Crypto wallet
  body:
    Column:
      styles: { padding: 16 }
      children:
        - Markdown:
            text: |
              ### Build Dapps

              - Connect to any crypto wallet that support wallect connect v1, check supporting wallet. [Wallet Connect Explorer](https://walletconnect.com/explorer?version=1)

              - Get wallet connect project id from wallet connect [dashboard](https://cloud.walletconnect.com/sign-in)
              - Set application descriptions like name, description.
              - We can connected wallet addresses using `walletRef.addresses`.
        - Spacer:
            styles: { size: 12 }

        - Divider:

        - Spacer:
            styles: { size: 12 }

        - Markdown:
            text: |

              # Example

        - Spacer:
            styles: { size: 12 }

        - Button:
            label: Connect to wallet
            onTap:
              connectWallet:
                id: wallet
                wcProjectId: 77740b7e86cfcba224464923b8e115e3
                appMetaData:
                  name: Ensemeble app
                  description: Ensemble forever
                  url: https://ensembleui.com/
                  iconUrl: https://ensembleui.com/assets/images/logo.svg
                onComplete: |
                  //@code

                  address.text = wallet.addresses;

        - Spacer:
            styles: { size: 12 }

        - Markdown:
            id: address
```

</div>

complete example [here](https://studio.ensembleui.com/app/e24402cb-75e2-404c-866c-29e6c3dd7992/screen/MnW9B85MmtqPXLEdZETu?propertyPanelEnabled=true&instantPreviewDisabled=false&editorV2Enabled=true)
