# Access API response body and headers

You can access an API response through:

- **API name** set when defining the API
- **API ID** set when invoking the API

When invoking the same API more than once, the API name will point to the last instance of the API request. If this is not the desired effect, use an ID instead.


## Basic GET example

Here, we use the API name to access the response body. In EDL, expressions are wrapped in `${}` so that Ensemble runtime evaluates the expression. In this case, the expression is referencing the API response body.

```yaml
View:
  onLoad:
    invokeAPI:
      name: getUser
  body:
    Column:
      styles:
        padding: 40
      children:
        - Text:
            text: ${getUser.body.firstName}
API:
  getUser:
    uri: https://dummyjson.com/users/1
    method: GET
```


## GET array of data and display using a template

An API response could include an array of objects that the app displays using an `item-template`. Any widget that supports `children` property also supports `item-template`. 

```yaml
View:
  onLoad:
    invokeAPI:
      name: getUser
  body:
    Column:
      styles:
        padding: 40
      item-template:
        data: ${getUser.body.users}
        name: user
        template:
          Text:
            text: ${user.firstName}
API:
  getUser:
    uri: https://dummyjson.com/users/
    method: GET
```


## Using ID to access API response

When invoking an API, optionally you can assign it an ID. Use this ID when you invoke the API multiple times to access each instance. Here are few examples:

### 1. Invoking different APIs based on a condition

The name of the API you invoke could be set based on an input so that you can add conditions on what API to call. In this scenari, you need to use an ID to refer to the API response.

```yaml
View:
  onLoad:
    invokeAPI:
      name: getMatches

  body:
    Column:
     item-template:
      data: ${getMatchess.body}
      name: m
      template:
        MatchInfo:
          inputs:
            id: ${m.id}
            api: '${m.status == "Finished" ? "getPastMatchDetails" : "getUpcomingMatch"}'

MatchInfo:

  # use the widget inputs to invoke relevant API and pass the required inputs to the API
  inputs:
    - id
    - api
  onLoad:
    invokeAPI:
      id: matchDetails # use this ID to bind to this API response
      name: ${api}
      inputs:
        id: ${id}
  body:
    Text:
      text: ${matchDetails.body.title}

API:

  getMatchess:
    uri: https://dummyjson.com/matches
    method: GET

  getPastMatchDetails:
    inputs:
      - id
    uri: https://dummyjson.com/match/histpry/${id}
    method: GET

  getUpcomingMatch:
    inputs:
      - id
    uri: https://dummyjson.com/match/info/${id}
    method: GET

```


### 2. Invoking the same API multiple times

In these scenarios, the API name, e.g. `${apiName.body...}`, will point to the last instance where that API was invoked. In contrast, the ID will ensure you are referring to the correct instance of the API response within your widget tree.

Let's consider this scenario:

1. The app fetches a list of people
2. For each person, the app makes a separate API call to get that person's company info

```yaml
View:
  onLoad:
    invokeAPI:
      name: getPeople

  body:
    Column:
      styles:
        padding: 24
      children:
        - GridView:
            styles:
              expanded: true
              itemHeight: 50
            item-template:
              data: ${getPeople.body.users}
              name: p
              template:
                PersonCard:
                  inputs:
                    name: ${p.firstName} ${p.lasstName}
                    company: ${p.company.name}

PersonCard:
  inputs:
    - name
    - company
  onLoad:
    invokeAPI:
      id: thisCompany # use this ID to refer to bind to this API response
      name: getCompanyDetails
      inputs:
        company: ${company}
  body:
    Column:
      children:
        - Text:
            text: ${name}
        - Text:
            text: ${thisCompany.body.name}

API:

  getPeople:
    uri: https://dummyjson.com/users/
    method: GET

  getCompanyDetails:
    inputs:
      - company
    uri: https://dummyjson.com/companies/
    method: GET
    parameters:
      name: ${company}
```