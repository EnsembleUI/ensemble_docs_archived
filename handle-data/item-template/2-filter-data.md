# Filter data based on an item in storage

To filter data first store data in local storage with **ensemble.storage.set('variableName', 'variableValue')**

Then get the varible stored in local storage with **ensemble.storage.get('varibleName')**, this will provide you the varible value

Now use JavaScript ES5 to filter the data

### Example
```yaml
Column:
    styles:
      padding: 20
    item-template:
      data: ${getCars.body}
      name: carItem
      template:
        Cars:
          inputs:
            car: ${carItem.fields}
    children:
      - FilterData

Cars:
  inputs:
    - car
  Column:
    children:
      - Text:
          text: ${car.Name}
          styles:
            fontWeight: bold

FilterData:
  Column:
    children:
      - Button:
          label: Show All Cars
          onTap:
            action: executeCode
            body: |
              //@code
              ensemble.storage.make = "";
            onComplete:
              action: invokeAPI
              name: getCars
        
      - Button:
          label: Show Only Audi
          onTap:
            action: executeCode
            body: |
              //@code
              ensemble.storage.set('make', 'Audi');
            onComplete:
              action: invokeAPI
              name: getCars
      
      - Button:
          label: Show Only Chevrolet
          onTap:
            action: executeCode
            body: |
              //@code
              ensemble.storage.set('make', 'Chevrolet');
            onComplete:
              action: invokeAPI
              name: getCars

API:
  getCars:
    uri: // your api uri
    method: GET
    headers:
      Authorization: 'Bearer // your API token'
    onResponse: |
      //@code
      if (ensemble.storage.get('make') != '') {
        var Filter = response.body.records.filter(function(car) {
            return car.fields.Make == ensemble.storage.get('make');
          });
          response.body = Filter
      } else {
        response.body = response.body.records
      };
```