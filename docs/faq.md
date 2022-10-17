---
sidebar_position: 5
---

# FAQs

### What do I need to know to use Ensemble?

We've designed Ensemble for both ease of use and flexibility. You can start with little or no programming background, however, experience with the following will help:

* Writing YAML & JSON - Ensemble apps are written in YAML, and can also include JSON.
* Using command line - To run an app locally, or publish an Ensemble app, you will run a few commands to generate the release code.
* TypeScript - While not necessary, you can add custom logic in TypeScript. We're talking basic experessions like mapping through an array.

---

### The feature I need is not available. What do I do?

We're working through supporting more widgets, API types, etc. To help us prioritize, [open an issue on Github](https://github.com/EnsembleUI/ensemble/issues/new).


---

### What backend system can I use with Ensemble?

Short answer is any, as long as they expose REST APIs. We expect to support GraphQL soon.


---

### Are Ensemble apps rendered via native iOS & Android or they are based on the web?

Ensemble updates the UI dynamically in a pure native app (no webviews). That's the core differentiation of the platform. We believe that webviews do not perform well and are ideal for user interaction.

---

### Isn’t updating apps on the fly against Apple App Store and Google Play Store policies?

Ensemble’s architecture is based on 'Server driven UI' - SDUI. Uber, Doordash, Spotify, DeliveryHero, Workday and many others have built their own proprietary SDUIs. Ensemble brings it for everyone to use. Regarding Apple and Google Policies - SDUI customizes the user interface of your app based on the response from a server but it does not change the code. Most modern apps are already using some basic form of SDUI today.


