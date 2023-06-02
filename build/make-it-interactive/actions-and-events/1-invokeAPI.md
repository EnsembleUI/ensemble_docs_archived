# Action: invokeAPI


To check out examples of the invokeAPI action, go to the [Ensemble Kitchen Sink](https://studio.ensembleui.com/app/e24402cb-75e2-404c-866c-29e6c3dd7992/screen/e546b0d8-3220-4217-bd5c-181118154073).

**invokeAPI** is used for calling an API. You can call an API on events such as a button tap or on screen load. First, you have to declare an API:

```yaml
API:
  getPeople:
    uri: https://randomuser.me/api/?results=8
    method: GET
```

Now to call the API on screen load, use the `onLoad` property of the view:

```yaml
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
```

To call an API on button tap, inside the body add a Button with `onTap` property:

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

## POST calls

You can also create a POST request and pass parameters to the API like this

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

## Handing errors

To handle Errors, you can use the `onError` property:

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

## Use in code

You can also call an API in code block.

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

## Properties for invokeAPI

| Property | Type | Description |
| :------- | :--- | :---------- |
| name     | String  | Name of the API defined in the API section |
| inputs   | Object  | Key value pairs ofinputs to be passed to API definition |
| onResponse | Action  | The action to handle the response   |
| onError    | Action  | The action to handle errors         |

## Properties for an API definition

| Property | Type | Description |
| :------- | :--- | :---------- |
| method     | String  | The HTTP method of the request, such as `GET`, `POST`, `DELETE`, `PUT`, `PATCH`     |
| uri        | String  | The URI for the request             |
| body       | Object  | The request body                    |
| headers    | Object  | The headers for the request         |
| onResponse | Action  | The action to handle the response   |
| onError    | Action  | The action to handle errors         |
| inputs     | Array   | The input values                    |
