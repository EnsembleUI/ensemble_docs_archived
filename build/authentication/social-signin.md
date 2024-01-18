# Social Sign In

Ensemble supports Social Sign in with Google and Apple. This guide will specifically target the **Sign in with Google** flow.
For each service, we support three different mechanism for managing the signed-in users: [Client-side](#client-side), with your [Server](#Server-side), or with [Firebase](/build/authentication/social-signin-firebase).

<video width="70%"  controls>
  <source src="/images/signin-client.mov" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
  Your browser does not support the video tag.
</video>

## Client-side
Ensemble supports Signing In from the client side without any backend server. User information is stored locally on the device.


### Build your screens on Studio
First build a **Login** screen.

```yaml
View:
  styles:
    useSafeArea: true

  body:
    Column:
      styles:
        # centering the content
        mainAxisSize: min
        crossAxis: center
        alignment: center
      children:
        - Text:
            text: Welcome to a SignIn Example
            styles:
              textStyle:
                fontSize: 20
              padding: 0 0 20 0

        - SignInWithGoogle:
            # Once signed in, go to the screen 'Home' 
            # Also clear all previous screens to prevent Back button navigation
            onSignedIn:
              navigateScreen:
                name: Home
                options:
                  clearAllScreens: true
```
Now build the screen **Home** to show the currently logged-in user's information.

```yaml
View:
  header:
    title: Welcome Home
  
  # onLoad check if currently signed in. If not go to the Login screen
  onLoad:
    verifySignIn:
      onNotSignedIn:
        navigateScreen:
          name: Login

  body:
    Column:
      styles:
        padding: 24
        gap: 8
      children:
        - Row:
            styles:
              gap: 7
            children:
              # Current user's info is under ${auth.user.*}
              - Avatar:
                  source: ${auth.user.photo}
              - Text:
                  text: |-
                    ${auth.user.name}
                    ${auth.user.email}
        - Button:
            label: Sign Out
            onTap:
              # sign out will clear the user info
              signOut:
                onComplete:
                  # once signed out, go to the Login screen
                  # Also clear all existing screens so the user can't go back
                  navigateScreen:
                    name: Login
                    options:
                      clearAllScreens: true
```


## Server-side
Currently Social Sign In with your custom Server has to be managed manually. Below is an example flow, and your implementation can varies per your needs.
1. Use the Social Sign in to authenticate the user. This will return the idToken and the user information.
2. Send this idToken to your server, which can validate that this idToken was issued by Google, extract the user information from the idToken, and return server-specific credentials (e.g. bearer token, cookies) for this user back to the client.
3. The client can then save these credentials into storage and use them for subsequent requests.

```yaml
View:
  body:
    SignInWithGoogle:
      # the user successfully authenticated with Google
      onAuthenticated:
        invokeAPI:
          # call your server, pass the idToken and return server-specific credentials
          name: signInToServer
          inputs:
            # idToken can be accessed on event.data.idToken
            token: ${event.data.idToken}

            # user info can be accessed via event.data.user.*
            email: ${event.data.user.email}

          onResponse:
            executeCode:
              # store the bearerToken for latter use
              body: |-
                ensemble.storage.token = response.body.bearerToken;
              onComplete:
                navigateScreen:
                  name: Home
                  options:
                    replaceCurrentScreen: true

API:
  # Your server should validate that the idToken is indeed issued by Google
  # The server can then create/update the user account in your database, and return server-specific credentials about this user
  signInToServer:
    inputs: [token]
    uri: https://myExampleApi.com/auth
    parameters:
      token: ${token}
```
