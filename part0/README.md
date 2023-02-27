# [Fundamentals of Web apps - Chapter 0](https://fullstackopen.com/en/part0/fundamentals_of_web_apps)

## Exercise 0.4 - New note diagram
*Create a similar diagram depicting the situation where the user creates a new note on the page https://studies.cs.helsinki.fi/exampleapp/notes by writing something into the text field and clicking the submit button.*

### **Solution** 

```mermaid 
sequenceDiagram
    participant browser
    participant server
    
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server
    server-->>browser: URL Redirect: .../exampleapp/notes
    deactivate server
    
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: HTML document (Content-Type: text/html)
    deactivate server
    
    browser->>server: GET hhttps://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: the CSS file (Content-Type: text/css)
    deactivate server

    browser-->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server 
    server-->>browser: the JavaScript file (Content-Type: application/javascript)
    
    Note right of browser: The browser starts executing the JavaScript code that fetches the JSON from the server 
    
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: the JSON data (Content-Type: application/json)
    deactivate server

    Note right of browser: The browser executes the event handler function that renders the notes dynamically
```

## Exercise 0.5 - Single page app diagram
*Create a diagram depicting the situation where the user goes to the single-page app version of the notes app at https://studies.cs.helsinki.fi/exampleapp/spa.*

### **Solution** 

```mermaid 
sequenceDiagram
    participant browser
    participant server
    
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate server
    server-->>browser: HTML Document (Content-Type: text/html)
    deactivate server
    
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: CSS File (Content-Type: text/css)
    deactivate server
    
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    activate server
    server-->>browser: the JavaScript file (Content-Type: application/javascript)
    deactivate server
    
    Note right of browser: The browser starts executing the JavaScript code that fetches the JSON from the server 
    
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: the JSON data (Content-Type: application/json)
    deactivate server

    Note right of browser: The browser executes the callback function that renders the notes dynamically
```
## Exercise 0.6 - New note in Single page app diagram
*Create a diagram depicting the situation where the user creates a new note using the single-page version of the app.*

### **Solution** 

```mermaid 
sequenceDiagram
    participant browser
    participant server
    
    Note right of browser: The browser executes the callback function that renders the notes dynamically

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: Creation of resource, (Content-Type: application/json)
    deactivate server

    Note right of browser: Browser does not reloads the page, because server does not ask for redirect, instead it executes the event handler that renders the note on the page
```


