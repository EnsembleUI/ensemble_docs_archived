# Action: chainingActions

Ensemble provides a powerful feature that enables developers to execute actions sequentially or in parallel, providing flexibility in designing workflows. This capability is particularly useful when dealing with asynchronous tasks, such as making API calls.

**Chaining Actions Sequentially**

To chain actions sequentially, developers can utilize JavaScript ES5 and YAML to define a sequence of actions. Here's a basic example:

```yaml
actions:
  - name: Action1
    script: |
      // JavaScript ES5 code for Action 1
      console.log("Executing Action 1");
  - name: Action2
    script: |
      // JavaScript ES5 code for Action 2
      console.log("Executing Action 2");
  - name: Action3
    script: |
      // JavaScript ES5 code for Action 3
      console.log("Executing Action 3");
```

**Parallel Execution of Non-Blocking Actions**
When dealing with non-blocking tasks, like making API calls, developers can leverage the ability to execute actions in parallel. Here's a YAML and JavaScript ES5 example:
```yaml
actions:
  - name: ParallelActions
    parallel:
      - name: APIAction1
        script: |
          // JavaScript ES5 code for non-blocking API call 1
          console.log("Executing API Action 1");
      - name: APIAction2
        script: |
          // JavaScript ES5 code for non-blocking API call 2
          console.log("Executing API Action 2");
```
