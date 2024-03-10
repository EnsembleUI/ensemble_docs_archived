# Ensemble Objects and their properties

# The `app` object
`app` object provides app and theme configuration related properties and methods. 
## Properties

### baseUrl
Returns the `baseUrl` if one is specified in configuration. NOTE: `baseUrl` cannot be set and can only be retrieved. 
```yaml
API:
 myAPI:
  url: ${app.baseUrl}/path/file.json
```
or in js - 
```js
var url = app.baseUrl;
```
### useMockResponse
Sets or Returns the value of `useMockResponse`. See [this](https://docs.ensembleui.com/#/build/use-mock-api-response?id=mocking-api-responses-to-develop-and-test-your-app) for details on how to mock responses for your APIs during development or testing. 
```js
app.useMockResponse = true;
var isInMockResponseMode = app.useMockResponse; //returns true
```
### theme
Sets or Returns the value of the current theme. See [this](https://github.com/EnsembleUI/ensemble_docs/blob/main/build/user-interface/4-theme.md#checking-and-switching-themes-in-javascript) for details on how themes work and how to set/get a theme. 

### themes
Returns the current set of themes that were configured in the app. NOTE: you can only retrieve the list of pre-configured themes, you cannot add to the list or set the list to a different list. 

See [this](https://github.com/EnsembleUI/ensemble_docs/blob/main/build/user-interface/4-theme.md#theme) on how to configure multiple themes.

**Example:**

Bind the `themes` to a dropdown and let user switch themes from all the available themes. 
```yaml
        - Dropdown:
            label: Pick a Theme
            items: ${app.themes}
            value: ${app.theme}
            onChange:
              executeCode:
                body: |
                  app.theme = this.value;
```
## Methods
### saveTheme
Saves the theme name passed as argument into the persistent storage. This theme is then automatically applied on the next re-launch of the app. See [this](https://github.com/EnsembleUI/ensemble_docs/blob/main/build/user-interface/4-theme.md#savings-themes-in-storage-so-they-can-be-applied-across-application-sessions) for details.

### getSavedTheme
Retrieves the saved theme. See [this](https://github.com/EnsembleUI/ensemble_docs/blob/main/build/user-interface/4-theme.md#savings-themes-in-storage-so-they-can-be-applied-across-application-sessions) for details.

### removeSavedTheme
Clear out the saved theme. See [this](https://github.com/EnsembleUI/ensemble_docs/blob/main/build/user-interface/4-theme.md#savings-themes-in-storage-so-they-can-be-applied-across-application-sessions) for details.
