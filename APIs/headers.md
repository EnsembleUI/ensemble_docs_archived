# How to set headers including authorization header

Setting headers, including the crucial "Authorization" header, is a key aspect of enhancing security and enabling proper authentication.

The headers section is used to specify additional information that should be included in the HTTP request headers when making the API call. 

The value of the "Authorization" header is set to a bearer token, and the token value is dynamically inserted using ${token}.

The "Bearer" type in the "Authorization" header signifies that the presented token should be treated as a bearer token, providing access to the associated user or client without additional proof of possession. 

````yaml
uploadProfilePicture:
    method: POST
    uri: https://api.ensemble.co/api/v2/profile-picture
    headers:
      Authorization: Bearer ${ensemble.storage.token.access_token}
    onResponse:
      executeCode:
        body: |
          //@code
          console.log(response.body);
          ensemble.storage.image = response.body;
````
````yaml
API:
  getNames:
    uri: https://myuri.com
    method: 'POST'
    headers:      
      "Authorization": "Bearer ${token}"
    onResponse: |
      // Code for handling the response goes here
````