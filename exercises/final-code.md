# How did it go?

Hopefully you got through all exercises. No worries if you didn't. We're enhancing the Studio experience and Ensemble docs. Your feedback would help us achieve that faster.

**[Fill this 1 minute survey on your experience](https://forms.gle/GDK5CE4WwWniMsGLA)**

## Completed exercise screen

```yaml
View:
  title: Home
  onLoad:
    action: invokeAPI
    name: getToDos
  Column:  
    styles: 
      padding: 20
      gap: 20
    children:
      - TextInput:
          label: Task name
          hintText: Enter a task
          required: true
          id: newTaskName
      - TextInput:
          label: Location
          hintText: e.g. Office
          required: true
          id: newTaskLocation
      - Button:
          label: Add
          onTap:
            action: invokeAPI
            name: createToDo
            inputs:
              name: ${newTaskName.value}
              location: ${newTaskLocation.value}
            onResponse:
              action: invokeAPI
              name: getToDos
      - Text:
          text: My tasks
          styles:
            fontWeight: bold
            fontSize: 22
      - Column:
          item-template:
            data: ${getToDos.body.records}
            name: todoItem
            template:
              Checkbox:
                value: ${todoItem.fields.completed}
                trailingText: ${todoItem.fields.desc} @ ${todoItem.fields.location}
                onChange:
                  action: invokeAPI
                  name: updateToDo
                  inputs:
                    payload:
                      records:
                        - id: "${todoItem.id}"
                          fields:
                            completed: "${this.value}"              
                  onResponse:
                    action: invokeAPI
                    name: getToDos


API:
  
  getToDos:
    uri: 'https://api.airtable.com/v0/appDbkGS4VOiPVQR5/ToDo?api_key=keyyWz426zsnMKavb'
    method: 'GET'

  createToDo:
    inputs:
      - name
    uri: 'https://api.airtable.com/v0/appDbkGS4VOiPVQR5/ToDo?api_key=keyyWz426zsnMKavb'
    method: 'POST'
    body:
      records:
        - fields:
            desc: "${name}"
            completed: false

  updateToDo:
    inputs:
      - id
      - completed
    uri: 'https://api.airtable.com/v0/appDbkGS4VOiPVQR5/ToDo?api_key=keyyWz426zsnMKavb'
    method: 'PATCH'
    body:
      records:
        - id: "${id}"
          fields:
            completed: "${completed}"

```