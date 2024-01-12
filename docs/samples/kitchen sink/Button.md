## Button

* Various button styles: Demonstrates different colors, rounded corners, custom padding, and margins.
* Starting and ending icons: Shows how to add icons to the beginning and end of buttons.
* Navigating screens: Uses onTap to navigate to another screen.
* API calls: Shows how to make an API call (e.g., fetching current time in NYC) with onTap.
* Executing JavaScript: Executes JavaScript code using the onTap property.
* Custom API configuration: Includes a custom API configuration for getting the current time in New York City.

```
View:
  header:
    title: Button
  styles:
    scrollableView: true
  Column: 
    styles: { gap: 16, padding: 24 }
    children:
        - Flow:
            styles: {gap: 8, lineGap: 8}
            children:
            - Button:
                label: Hello
            - Button:
                styles: { outline: true, borderColor: 0xffED5742, color: 0xffED5742 }
                label: Everyone
            - Button:
                styles: { borderRadius: 5 }
                label: I can be rounded
            - Button:
                styles: { borderRadius: 100, backgroundColor: 0xffED5742 }
                label: or very rounded 
            - Button:
                styles: { backgroundColor: 0xffAAD6DE, borderColor: 0xffED5742, color: 0xffff748c }
                label: with custom color
            - Button:
                label: or disabled like this
                enabled: false
            - Button:
                styles: {outline: true}
                label: or this
                enabled: false
            - Button:
                styles: { borderRadius: 5, padding: 20 10 }
                label: with custom padding          
            - Button:
                styles: { margin: 15 0 0 0 }
                label: and top margin
            - Button:
                label: with starting icon
                startingIcon:
                    name: arrow_back
            - Button:
                label: with ending icon
                endingIcon:
                    name: arrow_forward
            

        - Divider

        ##### onTap
        
        ## Navigate screen
        - Text:
            text: onTap can navigate to another screen
        - Button:
            label: Go to Home
            onTap:
              navigateScreen:
                name: Home

        - Divider

        ## API call
        - Text:
            text: onTap can call an API
        - Button:
            label: Get NYC time
            onTap:
              invokeAPI:
                name: getNYCTime
        
        - Text:
            text: |
                What's the time in NYC?
                ${getNYCTime.body.datetime}

        - Divider
            

        ##### onTap execute code
        - Text:
            text: onTap can execute Javacript code
                
        - Button:
            label: Execute code
            onTap: |
                //@code
                statusText.text = 'Yes, we just executed a Javascript code!';

        - Text:
            id: statusText
            text: Code executed?

        

        - Divider
        - Row:
            styles: { mainAxis: spaceAround }
            children:
            - Button:
                styles: { outline: true, padding: 20 }
                label: View all available widgets
                onTap:
                  navigateScreen:
                    name: Home
        

API:
  getNYCTime:
    authentication: none
    method: GET
    uri: https://worldtimeapi.org/api/timezone/America/New_York

```