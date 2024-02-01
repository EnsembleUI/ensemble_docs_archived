# Actions: getPhoneContacts & getPhoneContactPhoto

The `PhoneContacts` view is designed to retrieve and display phone contacts from Android and iOS physical devices or simulators. It includes a warning note, a button to fetch contacts, and a list view to display individual contact details.

```yaml
- Button:
    label: Get Phone Contacts
    onTap:
      getPhoneContacts:
        id: phoneContactId
        onSuccess: |
          // ***code
          console.log("Phone Number Fetched Successfully");
          ensemble.storage.set('contacts', event.data['contacts']);

        onError: |
          // ***code
          console.log("Something went wrong!");
```
The `onSuccess` and `onError` callbacks for the "Get Phone Contacts" button. In the success callback (onSuccess), the retrieved contacts are logged to the console and stored in the `ensemble.storage.contacts`. In the error callback (onError), a message is logged indicating an issue.

```yaml
- ListView:
    id: listView
    styles:
      expanded: true
    item-template:
      data: ${ensemble.storage.contacts}
      name: contact
      template:
        UserContact:
          inputs:
            contact: ${contact}
```
The `ListView` component displaying a list of contacts (ensemble.storage.contacts). It uses the `UserContact` custom widget template for each item in the list.

```yaml
UserContact:
  inputs:
    - contact
  styles: { gap: 10 }
  onLoad:
    getPhoneContactPhoto:
      id: contactPhotoId
      contactId: ${contact.id}

    # Using JS Code

    # //@code
    # ensemble.getPhoneContactPhoto({
    #    id: "contactPhotoId",
    #   contactId: contact.id
    # });

  body:
    Column:
      styles: { gap: 2 }
      children:
        - Row:
            children:
              - Image:
                  source: ${contactPhotoId.image}
                  width: 100
                  height: 100
                  fallback: ImageFallbackWidget
              - Column:
                  styles: { gap: 2, margin: 10 }
                  children:
                    - Text:
                        textStyle: { fontWeight: bold, fontSize: 18 }
                        text: "${contact.displayName}"
                    - Text:
                        textStyle: { fontWeight: bold, fontSize: 18 }
                        text: "${getPhoneNumber(contact.phones)}"
                    - Shape:
                        styles:
                          height: 10
        - Divider:
```
The `UserContact` component representing the structure for displaying an individual contact. It includes an `Image` and two `Text` components for displaying the contact's display image, name and phone number. The `getPhoneContactPhoto` action is used to get the contact photo with the contactId.

```yaml
Global: |
  //@code

  if (ensemble.storage.contacts == null) {
    ensemble.storage.contacts = [];
  }

  function getPhoneNumber(phones) {
    if (phones.length > 0) {
      return phones[0].number;
    } else {
      return "";
    }
  }
```
The global code block initializes `ensemble.storage.contacts` as an empty array if it's null. It also includes the `getPhoneNumber` function, which extracts the primary phone number from an array of phone numbers.