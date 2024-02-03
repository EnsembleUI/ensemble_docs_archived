# Action: invokeAPI

To check out examples of the invokeAPI action, go to the [Ensemble Kitchen Sink](https://studio.ensembleui.com/app/e24402cb-75e2-404c-866c-29e6c3dd7992/screen/e546b0d8-3220-4217-bd5c-181118154073).

## API response object 
Both the `onResponse` and `onError` actions provide reference to the API response object. The `response` object has the following propertuies available to you.

| Property   | Type   | Description                                                                |
| :--------- | :----- | :------------------------------------------------------------------------- |
| statusCode         | number | Http status code. See details [here](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) |
| body       | String | the actual body of the response. This is where you are mostly interested in. JSON responses are automatically parsed and made available. Other content-types are available as strings.                               |
| headers     | array | Key value pairs of http response headers                  |
| reasonPhrase | String | Phrase that describes the statusCode. Http response statusCode is a 3 digit number and reasonPhrase describes that number. For example - reasonPhrase for statusCode between 200 and 299 (inclusive) is Successful. More [here](https://www.ibm.com/docs/en/cics-ts/5.5?topic=concepts-status-codes-reason-phrases)                                         |

## API/invokeAPI properties
| Property   | Type   | Description                                                                |
| :--------- | :----- | :------------------------------------------------------------------------- |
| id         | String | Give the API an ID allows you to bind to its result. e.g. ${apiId.body...} |
| name       | String | Name of the API defined in the API section                                 |
| inputs     | Object | Key value pairs ofinputs to be passed to API definition                    |
| onResponse | Action | The action to handle the response. This action can access the `response` object. For example - `response.body` or event overwrite the body as `response.body = myJsonObject;`                                          |
| onError    | Action | The action to handle errors. Just like onResponse, you have the `response` object available here so you can check `response.statusCode` to see what error was sent by the server and then use `response.body` to access the error response                                                |

**invokeAPI** is used for calling an API. You can call an API on events such as a button tap or on screen load. First, you have to declare an API:

```yaml
API:
  getPeople:
    uri: https://randomuser.me/api/?results=8
    method: GET
```

### Usage examples of InvokeAPI

Now to call the API on screen load, use the `onLoad` property of the view, there are two ways to call invokeAPI as well

##### 1. Using ensemble invokeAPI action.

<div class="code-container" markdown=1>
  <button onclick="copyCode()" class="copy-code-button">Copy Code</button>

````yaml
View:
  onLoad:
    invokeAPI:
      name: getPeople
  body:
    Column:
      styles: { gap: 16, padding: 24 }
      children:
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
````

</div>

##### 2. Using JavaScript code block to execute invokeAPI action.

<div class="code-container" markdown=1>
  <button onclick="copyCode()" class="copy-code-button">Copy Code</button>

````yaml
View:
  onLoad: |
    //@code
    ensemble.invokeAPI("getPeople");
  body:
    Column:
      styles: { gap: 16, padding: 24 }
      children:
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
````

</div>

- **Its similar to previous only that we are now using Javascript code block**.

To call an API on button tap, inside the body add a Button with `onTap` property:

<div class="code-container" markdown=1>
  <button onclick="copyCode()" class="copy-code-button">Copy Code</button>

```yaml
View:
  body:
    Column:
      styles: { gap: 16, padding: 24 }
      children:
        - Button:
            label: Call API
            onTap:
              invokeAPI:
                name: getPeople
        - Column:
            item-template:
              data: ${getPeople.body.results}
              name: item
              template:
                Text:
                  text: ${item.name.first}

API:
  getPeople:
    uri: https://randomuser.me/api/?results=8
    method: GET
```

</div>

## POST calls with input parameters

You can also create a POST request and pass parameters to the API like this

<div class="code-container" markdown=1>
  <button onclick="copyCode()" class="copy-code-button">Copy Code</button>

```yaml
View:
  body:
    Column:
      styles: { gap: 16, padding: 24 }
      children:
        - Button:
            label: Call API
            onTap:
              invokeAPI:
                name: createToDo
                inputs:
                  name: "some value"
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
    uri: "https://api.airtable.com/v0/appDbkGS4VOiPVQR5/ToDo?api_key=keyyWz426zsnMKavb"
    method: "POST"
    body:
      records:
        - fields:
            desc: "${name}"
```

</div>

## Handing errors

To handle Errors, you can use the `onError` property:

<div class="code-container" markdown=1>
  <button onclick="copyCode()" class="copy-code-button">Copy Code</button>

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
                  //you have the response object available here so you access its properties. See top of the page for response object
                  console.log(response.body);//this will print out the full body of the response object. See above for all the properties of a response object
                onError: |
                  //@code
                  apiStatus.text = 'API returned an error';
                  //you have the response object available here so you access its properties. See top of the page for response object
                  console.log(response.statusCode);//this will print out the http status code of the response object. See above for all the properties of a response object
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

</div>

## Use in code

You can also call an API in code block.

<div class="code-container" markdown=1>
  <button onclick="copyCode()" class="copy-code-button">Copy Code</button>

```yaml
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

</div>

## Properties for invokeAPI

| Property   | Type   | Description                                                                |
| :--------- | :----- | :------------------------------------------------------------------------- |
| id         | String | Give the API an ID allows you to bind to its result. e.g. ${apiId.body...} |
| name       | String | Name of the API defined in the API section                                 |
| inputs     | Object | Key value pairs ofinputs to be passed to API definition                    |
| onResponse | Action | The action to handle the response                                          |
| onError    | Action | The action to handle errors                                                |

Details about API [here](/build/user-interface/1-page-structure)
