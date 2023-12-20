# Chaining APIs

Chaining APIs, also known as making sequential API calls, is a practice in app development when you need to retrieve and use data from multiple sources in a specific order. Chaining APIs allows you to build more complex workflows and gather the necessary information for your application.

```yaml
onLoad:
  - name: getuser
    onResponse:
      - invokeAPI:
          name: getcurrentUserContacts
      - invokeAPI:
          name: getExtendedNetwork
      - invokeAPI:
          name: getinviteLink
      - onResponse:
          - invokeAPI:
              name: getcurrentUserProperties
          - onResponse:
              - invokeAPI:
                  name: getseekingPosts
```

**Sequential API Calls:**
The onResponse event for each API call specifies the next API call to be made after the current one is successfully completed.
For example, after the initial API call named "getuser" (assuming it's defined elsewhere in your YAML), the onResponse event triggers the "getcurrentUserContacts" API call.
Similarly, the subsequent API calls ("getExtendedNetwork," "getinviteLink," "getcurrentUserProperties," and "getseekingPosts") are chained together using the onResponse events.

**Nested invokeAPI:**
The invokeAPI action is used to make API calls. Each invokeAPI action is nested within the onResponse of the previous API call, forming a chain.