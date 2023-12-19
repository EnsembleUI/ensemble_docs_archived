# REST API

Basic APIs: REST APIs are based on a set of principles, including statelessness, resource-based interactions, and standard HTTP methods (GET, POST, PUT, DELETE).
Dummy JSON: REST APIs typically return data in formats like JSON or XML, and they use endpoints to represent resources.
Response Time: REST APIs may have longer response times, especially when fetching a large amount of data. The client typically asks for specific resources using endpoints.

```yaml
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

HTTP Method: The API configurations explicitly specify the HTTP method as 'POST', which is a standard RESTful practice for creating resources.
```yaml
    method: 'POST'
```

Endpoint (URI): The URI (Uniform Resource Identifier) is provided for the Airtable API, and it includes information about the base (appDbkGS4VOiPVQR5) and table (ToDo). This follows the RESTful convention of addressing resources.
```yaml
    uri: 'https://api.airtable.com/v0/appDbkGS4VOiPVQR5/ToDo?api_key=keyyWz426zsnMKavb'
```

Data Format: The data payload for the POST request is structured in a way that aligns with typical RESTful practices. It uses a JSON format to send the data to be created.
```yaml
body:
  records:
    - fields:
        desc: "${name}"
```