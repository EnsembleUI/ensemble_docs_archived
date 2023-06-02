# Action: invokeAPI

**invokeAPI** is used for calling an API. You can call an API on a button tap or on page load. First you have to declare an API, for that go to the end of the page and declare you API like this
```yaml
API:
  getPeople:
    uri: https://randomuser.me/api/?results=8
    method: GET
```

Now to call an API on page load, inside the View block and onLoad and then call the API like this

```yaml
View:
  header:
    title: "Action: invokeAPI"
  styles:
    scrollableView: true

  onLoad: # This will call the API on page load
    invokeAPI:
      name: getPeople

  body:
    Column:
      styles: { gap: 16, padding: 24 }
      children:
        ## Example 1
        - Text:
            text: GET on load and display a value
        - Text:
            text: ${getPeople.body.results.length} records were retrieved from API
        - Markdown:
            text: |
              Here's the API response body:
              ```
              ${getPeople.body}
              ```

API:
  getPeople:
    uri: https://randomuser.me/api/?results=8
    method: GET
```

To call an API on button tap, inside the body add a Button with onTap property and then call the API like this

```yaml
View:
  header:
    title: "Action: invokeAPI"
  styles:
    scrollableView: true

  body:
    Column:
      styles: { gap: 16, padding: 24 }
      children:
        - Text:
            text: GET and bind to an item-template
        - Button:
            label: Call API
            onTap:
              invokeAPI:
                name: getPeople
        - Column:
            item-template:
              data: ${getPeople2.body.results}
              name: item
              template:
                Text:
                  text: ${item.name.first}

API:
  getPeople:
    uri: https://randomuser.me/api/?results=8
    method: GET
```

You can also create a POST request and pass parameters to the API like this

```yaml
View:
  header:
    title: "Action: invokeAPI"
  styles:
    scrollableView: true

  body:
    Column:
      styles: { gap: 16, padding: 24 }
      children:
        - Text:
            text: 3. POST with custom body
        - Button:
            label: Call API
            onTap:
              invokeAPI:
                name: createToDo
                inputs:
                  name: 'some value'
                onResponse: |
                  //@code
                  var id = response.body.records[0].id;
                  postStatus.text = 'Record created: ' + id;
        - Text:
            id: postStatus

API:
  createToDo:
    inputs:
      - name
    uri: 'https://api.airtable.com/v0/appDbkGS4VOiPVQR5/ToDo?api_key=keyyWz426zsnMKavb'
    method: 'POST'
    body:
      records:
        - fields:
            desc: "${name}"
```

To handle Errors, you can use the onError property like this

```yaml
        - Text:
            text: Handle error
        - Button:
            label: Call API
            onTap:
              invokeAPI:
                name: createToDoError
                onResponse: |
                  //@code
                  apiStatus.text = 'Call was successful';
                onError: |
                  //@code
                  apiStatus.text = 'API returned an error';
        - Text:
            id: apiStatus

API:
  createToDoError:
    inputs:
      - name
    uri: 'https://api.airtable.com/v0/appDbkGS4VOiPVQR5/ToDo?api_key=keyyWz426zsnMKavb'
    method: 'POST'
    body:
      records: "this is not what the API expects"
```

To call an API in code block, you can use the invokeAPI function like this

```yaml
        - Text:
            text: 5. Call API in code
        - Button:
            label: Call API
            onTap:
              executeCode:
                body: |
                  //@code

                  // no inputs
                  ensemble.invokeAPI("getNewYorkTime");
        - Text:
            visible: ${getNewYorkTime.body != null}
            text: Current time in NYC is ${getNewYorkTime.body.datetime}

API:
  getNewYorkTime:
    uri: https://worldtimeapi.org/api/timezone/America/New_York
    method: GET
```

To check out the implementation of invokeAPI, go to the [Ensemble Kitchen Sink](https://studio.ensembleui.com/app/e24402cb-75e2-404c-866c-29e6c3dd7992/screen/e546b0d8-3220-4217-bd5c-181118154073).