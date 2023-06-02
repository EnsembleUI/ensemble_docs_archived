# Local Storage
Local storage allows you to store data locally on the device. On web, it uses [window.localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage). You can access local storage in code blocks and bind widgets to their values.

#### Store value
```
//@code
ensemble.storage.set('key', 'value');
ensemble.storage.key = 'value';
```

#### Get value
```
//@code
var myKey = ensemble.storage.get('key', 'value');
var myKey = ensemble.storage.key;
```