# Persistent Storage and How to Use It
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
You can also store and retrieve properties using the set and get methods on `ensemble.storage`. This is useful when the parameter name is dynamically calculated instead of being known in advance. 

```js
ensemble.storage.set('my'+'Data',"{name: {first:'John', last: 'Doe'}");
//to retrieve data
var myData = ensemble.storage.get('my'+'Data');
```
If the parameter with the same name already exists in the storage, it's value will be overwritten by the new value being set. 

### Checking if something is in storage
You can check in two ways, either by directly accessing the parameter by name or by using the `get` method and checking for null. 

```js
if ( ensemble.storage.myData != null ) {
  //do something
}
```

### Deleting data in storage
You can set the parameter to null to remove its value. However if you want to entirely delete it from storage, call the `delete` method. 

```js
ensemble.storage.delete('myData'); //this will remove value referenced by myData and the myData as the key.
```

### Binding to the data in storage
One of the most powerful features of the Ensemble platform is the data binding. It allows you to significiantly reduce the amount of code you have to write and the ensuing complexity by just binding your widgets to the APIs or Storage. 

Here we will discuss binding to the `ensemble.storage`. When you `bind` a widget to something, the widget gets updated automatically when the thing it is bound to changes. 

For example, in the following yaml, `nameField.text` is bound to data in the storage.
```yaml
Text:
  id: nameField
  text: ${ensemble.storage.myData.name.first} ${ensemble.storage.myData.name.last}
```
Now somewhere else (mostly in API responses), if you update the `myData` in storage, the `nameField.text` will automatically get the new value without you having to do anything. 

```yaml
API:
  getDataFromServer:
    url: 'https://myapp.com/data'
    onResponse: |-
      ensemble.storage.myData = response.data; //this will update all the fields that are bound to this parameter in storage
```
### Manually triggering binding updates
Updates due to bindings to the storage are triggered only when you set a parameter on the storage directly. 

For example, the following triggers the binding and updates all the fields that are bound to ensemble.storage.myData
```js
ensemble.storage.myData = {name: {first:'John', last: 'Doe'};
```
However, if you are manipulating the data that is not directly stored in the `ensemble.storage`, it won't trigger binding.
```js
ensemble.storage.myData.name.first = 'Jane'; //will NOT trigger binding and the `nameField.text` will NOT be updated.
```
To solve this issue, we set storage parameter back to itself to trigger the update. After doing all the manipulations to myData, set it back to itself
```js
ensemble.storage.myData = ensemble.storage.myData; //this will now update nameField.text and any other fields listening for this change
``` 


