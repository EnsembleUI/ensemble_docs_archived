# Api

API widget provides a convenient way to interact with external services or data sources, allowing developers to make HTTP requests, access data, and integrate various functionalities into their applications

## Properties

| Property   | Type   | Description                                                                                   |
| :--------- | :----- | :-------------------------------------------------------------------------------------------- |
| method     | String | The HTTP method of the request, such as `GET`, `POST`, `DELETE`, `PUT`, `PATCH`. (`required`) |
| uri        | String | The URI for the request (`required`)                                                          |
| body       | Object | The request body                                                                              |
| headers    | Object | The headers for the request                                                                   |
| onResponse | Action | The action to handle the response                                                             |
| onError    | Action | The action to handle errors                                                                   |
| inputs     | Array  | The input values users might want to send in the api uri                                      |

## Set Values

First of all we have to set different values in the API widget before we move to actually using the response from the API itself.

#### Specify Input

Sometimes users might need to send variables as query parameters as part of their API call. Well in that scenario let us see how API allows us to use it.

**Example**

<div class="code-container" markdown=1>
  <button onclick="copyCode()" class="copy-code-button">Copy Code</button>

```yaml
onLoad:
  invokeAPI:
    name: getData
    inputs:
      appId: applTF2E7IbHETHza

API:
  getData:
    inputs:
      - appId
    uri: https://api.airtable.com/v0/${appId}/Accounts_New/
    method: GET
```

</div>

- Its a `Get` request and with `appId` as input to `airtable` specifying which app base it is in `AirTable`.
- We can use [invokeAPI](/build/make-it-interactive/actions-and-events/1-invokeAPI) action on a [Button](/widget-reference/button) as well through `onTap` event handler. This way instead of calling this api when screen loads up we can do it when user clicks on it ( like submitting a form ).

<div class="code-container" markdown=1>
  <button onclick="copyCode()" class="copy-code-button">Copy Code</button>

```yaml
View:
  styles:
    scrollableView: true

  body:
    Column:
      children:
        - Button:
            label: Call API
            onTap:
              invokeAPI:
                name: getData
                inputs:
                  appId: applTF2E7IbHETHza

API:
  getData:
    inputs:
      - appId
    uri: https://api.airtable.com/v0/${appId}/Accounts_New/
    method: GET
```

</div>

We can also send form values as inputs to the api call ( using `POST` method ) while submitting a form and much more.

#### Defining Query Parameters

Query parameters are a critical component of frontend UI platform developing for apps. They are used provide specific instructions to the server, enabling it to return specific based on user input. Query parameters can include filter fields, sorting parameters, and page display, among others. Sometimes we might want to specify Authorization headers etc for our api let us have an example for that.

<div class="code-container" markdown=1>
  <button onclick="copyCode()" class="copy-code-button">Copy Code</button>

```yaml
API:
  getAirtableCars:
    uri: https://api.airtable.com/v0/appznriSqyr61F6c4/tblQY1HL5LIYqCetl
    method: GET
    headers:
      Authorization: "Bearer keyZEtlGddyj7dEmw"
```

</div>

- The Authorization header allows to make request to this `airtable` base.

#### URI

URI stands for Uniform Resource Identifier and is used to identify and resources on the internet. is a string of characters that a unique address for a resource, as a webpage or file. URIs are comprised of a scheme (such as http or https), followed by the specific resource. Ley us see an example for understanding it.

<div class="code-container" markdown=1>
  <button onclick="copyCode()" class="copy-code-button">Copy Code</button>

```yaml
API:
  getPeople:
    uri: https://randomuser.me/api/?results=6
    method: GET
```

</div>

#### Choose HTTP Methods

When developing a frontend UI for mobile apps, choosing the HTTP methods is crucial. methods are essential in defining how requests are made and how data is retrieved from server. There are different HTTP such as GET, PUT POST, DELETE, HEAD, OPTIONS, among others. Let's see an example for it

<div class="code-container" markdown=1>
  <button onclick="copyCode()" class="copy-code-button">Copy Code</button>

```yaml
Button:
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
Text:
  id: apiStatus

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

#### API Response manipulations

Ensemble allows users to manipulate the api response and mould it according to their needs. Let's see how it works

<div class="code-container" markdown=1>
  <button onclick="copyCode()" class="copy-code-button">Copy Code</button>

```yaml
API:
  getAccountInfo:
  uri: https://api.airtable.com/v0/applTF2E7IbHETHza/Accounts_New
  method: GET
  headers:
    Authorization: "Bearer keytkkjiT08gv5m9Q"
  onResponse: |
    //@code
    var balanceSum = 0;
    var assets = 0;
    var loan = 0;
    var spending = 0;
    var spendingLastDays = 0;
    var count = 0;
    var catgoriesObject = {};
    var categorySum = {};
    response.body.records.map( function(account) { 
    if (account.fields.Date != null) {
      var dateString = account.fields.Date;
      // Split the date string into year, month, and date components
      var dateComponents = dateString.split("/");
      // Create a new Date object
      var dateObject = new Date(dateComponents[2],dateComponents[0],dateComponents[1]);
      console.log(dateObject);
      var weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

      // Get the weekday, month, and year values from the date object
      var weekday = weekdays[dateObject.getDay()];
      var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      var month = monthNames[dateObject.getMonth()];
      var date = dateObject.getDate();
      var year = dateObject.getFullYear();
      var formattedDate = weekday + ", " + month + " " + date + ", " + year;
      account.fields.Date = formattedDate;
    } 
    });
    response.body.records.map(function (account) {
      balanceSum = balanceSum + account.fields.Balance;
      assets = assets + account.fields.Investment+ account.fields.Property;
      loan = loan + account.fields.Loans;
      if(account.fields.Category === 'Dining' | account.fields.Category === 'Groceries' ){
        spending = spending + account.fields.Amount;
      }
      if (count < 30){
        spendingLastDays = spendingLastDays + account.fields.Amount;
        count +=1;
      }
      if (!catgoriesObject[account.fields.Category]) {
        catgoriesObject[account.fields.Category] = [];
      }
      if(!categorySum[account.fields.Category]){
        categorySum[account.fields.Category] = 0;
      }
      catgoriesObject[account.fields.Category].push([account.fields.Amount, account.fields.Date,account.fields.Merchant]);
      categorySum[account.fields.Category] += account.fields.Amount;
    })
    console.log(categorySum);
    response.body.totalBalance = balanceSum;
    response.body.assets = assets;
    response.body.loan = loan;
    response.body.spending = spending;
    response.body.spendingLastDays = spendingLastDays;
    ensemble.storage.accountInfo = response.body;
    var categories = [];
    response.body.records.map(function (account) {
      if(!categories.includes(account.fields.Category)){
        categories.push(account.fields.Category);
      }
    });
    ensemble.storage.catgoriesObject = catgoriesObject;
    ensemble.storage.categorySum = categorySum;
    ensemble.storage.categories = categories;
    response.body.categories = categories;
```

</div>

**Key Points**

Users can have their specific requirements in the design to make things work according to their needs in the App.

- In my use case i needed a specific format for the `date` field in `getAccountInfo` api call.
  - So i extracted it using `response` variable and used a `map` function from `JavaScript` to make changes in the `getAccountInfo`.
  - We are mutating the original records which is not normally done using `map` as it never `mutates` an array.
  - Using `Date` object we convert date into our required format and then just assign it back to each `account` field in the api response.
- In other areas i have calculated `totalBalance` variable and assigned it to `ensemble.storage` so that its not calculated each time we refresh.
- We are also extracting all `categories` and their relevant total `transaction` amount in an object.
- We can assign result to `ensemble.storage` or we can assign results back in `response.body` as well. It entirely depends on our use case.
  - `response.body` will have to be passed to other screens to be useful while `ensemble.storage` can be used across all screens.

### Conclusion

In short API widget has many possibilities and use cases to be covered, Ensemble-UI makes sure provide maximum flexibility to users to control how their APIs work.
