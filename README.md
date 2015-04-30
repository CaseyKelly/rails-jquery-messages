<!-- # jQuery Inbox

## Setup

* Fork and clone
* Run `bin/setup`
* Run `rails s`
* Open http://localhost:3000

## Tips -->

<!-- When creating event listeners, follow this pattern for now:

1. Wrap all code in `$(document).ready(...)` like
  ```js
  $(document).ready(function () {
    // all your code here ...
  });
  ```
1. Attach events to an ancestor div, instead of each individual div itself
  ```js
  $(document).ready(function () {
    $('[data-section]').on('click', '.fa-star-o', function (e) {
      // your code here
    });
  });
  ```
1. Inside the event handler, always jQuerify the event's target first
  ```js
  $(document).ready(function () {
    $('[data-section]').on('click', '.fa-star-o', function (e) {
      var $element = $(e.target);
      // now $element is a variable that points to the element you clicked on
    });
  });
  ```

It may help to split your code up into multiple js files. -->

## Stories

### Selection

<!-- **User selects all messages**

User clicks the checkbox button in the upper left.

- Add the `selected` class to all `message` divs
- Change the toolbar icon to `fa-check-square-o`

**User deselects all messages**

If all messages are selected, a user can deselect all messages but clicking the "select all" button again.

- Remove the `selected` class from all `message` divs
- Change the toolbar icon to `fa-check-square` -->
<!--
**User can select an individual message**

- Add the `selected` class to the message div
- The following elements should become enabled
  - "Mark as read"
  - "Mark as unread"
  - "Apply Label"
  - "Remove Label" -->
<!-- - If all messages are selected
  - Checkbox in the toolbar should get the `fa-check-square-o` class -->
- If some messages are still unselected
  - Checkbox in the toolbar should get the `fa-minus-square-o` class

<!-- **User can unselect an individual message** -->

<!-- - Remove the `selected` class from the message div
- If all messages are unselected
  - The following elements should become disabled
    - "Mark as read"
    - "Mark as unread"
    - "Apply Label"
    - "Remove Label"
  - Checkbox in the toolbar should get the "fa-square-o" class
- If some messages are still unselected
  - Checkbox in the toolbar should get the "fa-minus-square-o" class -->

**User can select all messages if some are unselected**

If a user clicks "Select All", then deselects an individual message, then the "Select All" checkbox should be in its middle state (`fa-minus-square-o`).

If a user clicks the button at this point, it should still select all messages.

### Stars

**User can star a message**

User clicks the star next to a message

- Remove the `fa-star-o` class and add the `fa-star` class

**User can unstar a message**

User clicks the star next to a message

- Remove the `fa-star` class and add the `fa-star-o` class

### Deletion

**User can delete messages**

User selects one or more messages and click the "Trash" button

- To all the `.message` divs that are selected
  - Remove the message div from the dom
- Update the unread count to be accurate (in case you deleted an unread message)
- Disable all of the toolbar buttons that should be disabled

**Message deletions are sent to the server**

Make an AJAX call

### Read / Unread

**User can mark selected messages as read**

User selects one or more messages and clicks "Mark As Read"

- To all the `.message` divs that are selected
  - Add the `read` class
  - Remove the `unread` class
- Update the unread message count in the upper right
  - "1 unread message" if there's only one left
  - "n unread messages" if there's more than one left

**User can mark selected messages as unread**

User selects one or more messages and clicks "Mark As Unread"

- To all the `.message` divs that are selected
  - Remove the `read` class
  - Add the `unread` class
- Update the unread message count in the upper right
  - "1 unread message" if there's only one left
  - "n unread messages" if there's more than one left

### Labels

**User can apply labels to selected messages**

User selects one or more messages and chooses an option from "Apply Label"

- To all the `.message` divs that are selected
  - Add a label with the selected name (do not add duplicates)
- Reset the dropdown to say "Add a Label" (that is, select the first option again)

**User can remove labels from selected messages**

User selects one or more messages and chooses an option from "Remove Label"

- To all the `.message` divs that are selected
  - Remove the label that matches that name (if the selected message doesn't have the label, it's ok - just do nothing )
- Reset the dropdown to say "Remove a Label" (that is, select the first option again)

### AJAX

**When a user stars/unstars a message it's sent to the server**

You can get the url from the `.message` div's `data-message-url` attribute.

**When a user deletes messages, they are deleted from the server**

NOTE: you'll need to pass an array of ids to the server for this to work.

**When a user marks messages as read, it is recorded on the server**

**When a user marks messages as unread, it is recorded on the server**

**When a user adds labels, they are added on the server**

There's a lot of complexity here.  Good luck!

**When a user removes labels, they are removed on the server**

There's also a lot of complexity here.  Good luck!


### Remember Selection

**Remember which messages were selected after page reload**

Do this on the client side, not the server side.

_HINT_ - lookup SessionStorage
