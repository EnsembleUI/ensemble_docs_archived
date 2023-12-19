# GraphQL

Use Case (Social Media): GraphQL is particularly beneficial in scenarios like social media, where large-scale data is involved. It allows clients to request only the specific data they need, leading to quicker response times (1-2 seconds).
Efficiency: GraphQL enables clients to specify the exact data they want in a single query, reducing over-fetching and under-fetching.

```yaml
   inputs:
      - GQLInput
   uri: ${env['graphQL_URL_'ensemble.storage]}
   method: POST
   headers:
      Authorization: Bearer ${ensemble.storage.token.exp_token}
      ContentType: "application/json"
   body:
      "query": |-
         mutation UpdatePost($input: CreateUpdatePostInput!) {}
         "variables": ${GQLInput}
```

HTTP Method:
GraphQL APIs typically use the HTTP POST method. In your example, the method is specified as POST.
```yaml
method: POST
```

URI (Uniform Resource Identifier):
The URI is typically a single endpoint for GraphQL APIs. In your example, the URI is parameterized with an environment variable (assuming graphQL_URL_ensemble.storage is provided at runtime).
```yaml
uri: ${env['graphQL_URL_'ensemble.storage]}
```

Headers:
GraphQL API requests often include headers for authentication or specifying the content type. In your example, you have headers for Authorization (Bearer token) and ContentType (set to "application/json").
```yaml
headers:
  Authorization: Bearer ${ensemble.storage.token.exp_token}
  ContentType: "application/json"
```

Request Body:
GraphQL API requests use a structured query language in the request body. The key part here is the "query" field, where you define the GraphQL query or mutation. In your example, you are using a mutation called "UpdatePost," and the query is parameterized with ${GQLInput}.
```yaml
body:
  "query": |-
    mutation UpdatePost($input: CreateUpdatePostInput!) {}
    "variables": ${GQLInput}
```