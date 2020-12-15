## Take Home Challenge

Get as far as you can in 3-4 hours Front-End-Only

### Requirements

- Match the UI/UX Design
- For states in the state dropdown just include 3 state values not all 50. Same for property types 3 is sufficient
- MultiStep Form Modal
- When A User Opens the modal it is always the same first time view and state
- When a User attempts to proceed to next step without required fields there are error messages (Form Validation)
- When a user clicks next the modal content changes as long as form validation passes
- When a user clicks previous the content changes to previous step
- Photo Upload - when user clicks upload content of the modal has a spinner overlay - then replace the image with another local image. (Don't worry about actually uploading am image to AWS s3 that would require a lot more of your time)
- When a user clicks the save button the modal has the same spinner overlay over the modal content and then adds to the table with the content
- console.log the data object with all of the key value pairs that you will be sending along to a mock API call
- await that mock API call which should return a promise then console.log your response

**Mock API CALLS WITH PROMISES:** For saving the data from modal, updating your tableData, and getting the initial data create functions in their own module that each return a promise.

- This way you can await them in your React Components when the component mounts or when you are submitting a form and saving
- Use setTimeout with your promises so that we can see how you manage loading state give them a good wait period to demo spinners etc

### Stretch Goals

- Unit tests with Jest and React Testing Library (\*\* Bonus Points)
- Table displaying content as you add

### Instructions

- Clone the repo onto your local machine
- Checkout into a new branch i.e. : interview-YOUR_INITIALS
- Push that branch up
- Make an initial commit to mark your start time
- Once complete make a final commit with message "Final Commit" and push your changes up

Starting homenow.io take home.
