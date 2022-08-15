---
sidebar_position: 4
---

# How did it go?

Hopefully you got through all 3 exercises. No worries if you didn't. We're enhancing the Studio experience and Ensemble docs. Your feedback would help us achieve that faster.

**[Fill this 1 minute survey on your experience](https://forms.gle/GDK5CE4WwWniMsGLA)**

## Completed exercise screen

```yaml
View:
  title: ToDo app
  type: Column  
  styles: { padding: 20, gap: 20 }
  children:
    - Form:
        styles: {  }
        children:
          - Column:
              styles: { gap: 20 }
              children:
                - TextInput:
                    label: New task
                    hintText: Enter a task
                    required: true
                    id: newTaskDesc
                - TextInput:
                    label: Location
                    hintText: e.g. Home
                    id: newTaskLocation
                - Button:
                    styles: { padding: 7 20 }
                    label: Add
                    validateForm: true
                    onTap:
                      action: invokeAPI
                      name: createToDo
                      onResponse:
                        action: invokeAPI
                        name: getToDos
    - Text:
        text: My tasks
        styles: { fontSize: 22, fontWeight: bold }
    - Column:
        item-template:
          data: ${getToDos.body.records}
          name: todoItem
          template:
            Row:
              styles: { crossAxis: center }
              children:
                - Column:
                    styles: { width: 70 }
                    children:
                      - Switch:
                          styles: { }
                          value: ${todoItem.fields.completed}
                          onChange:
                            action: invokeAPI
                            name: updateToDo
                            inputs:
                              payload:
                                "records": [{
                                    "id": "${todoItem.id}",
                                    "fields": {
                                      "completed": "${this.value}"
                                    }
                                  }]
                            onResponse:
                              action: invokeAPI
                              name: getToDos
                - Text:
                    text: ${todoItem.fields.desc}
                    styles: { fontWeight: bold }
                - Spacer
                - Text:
                    text: ${todoItem.fields.location}
                
                          
API:
  getToDos:
    authorization: none
    uri: 'https://api.airtable.com/v0/appDbkGS4VOiPVQR5/ToDo?api_key=keyyWz426zsnMKavb'
    method: 'GET'
  createToDo:
    authorization: none
    uri: 'https://api.airtable.com/v0/appDbkGS4VOiPVQR5/ToDo?api_key=keyyWz426zsnMKavb'
    method: 'POST'
    body:
      "records": [{
        "fields": {
          "desc": ${newTaskDesc.value},
          "location": ${newTaskLocation.value},
          "completed": false
        }}
      ]
  updateToDo:
    authorization: none
    uri: 'https://api.airtable.com/v0/appDbkGS4VOiPVQR5/ToDo?api_key=keyyWz426zsnMKavb'
    method: 'PATCH'
    inputs: [payload]
    body: ${payload}

Action:
  onPageLoad:
    action: invokeAPI
    name: getToDos
```