# Persistent Storage 
You can write to or access the storage using simply `ensemble.storage`. On the browser, this uses the local storage. On the native apps, it uses the secure storage that's provided to each app by iOS and Android. This stoage is persistent i.e. the data you save will stay there until the user explicitly deletes the storage or the app. This means that you can use storage to share data among multiple screens in your app. 

Typically apps store data such as the logged-in user's information, app-level data to cache data from the backend etc. 

### Storing and Retrieving data
You can store data in the persistent storage by just using the following syntax - 

```js
ensemble.storage.myData = {name: {first:'John', last: 'Doe'}};
```
and to retrieve data, simply access the parameter by name. For example - 
```yaml
Text:
  id: nameField
  text: ${ensemble.storage.myData.name.first} ${ensemble.storage.myData.name.last}
```
or in js - 
```js
nameField.text = ensemble.storage.myData.name.first + ' ' + ensemble.storage.myData.name.last;
```
### Updating data in storage

### Checking if something is in storage

### Deleting data in storage

### Binding to the data in storage


