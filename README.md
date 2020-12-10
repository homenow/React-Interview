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
- Unit tests with Jest and React Testing Library (** Bonus Points)
- Table displaying content as you add

### Instructions
- Clone the repo onto your local machine
- Checkout into a new branch i.e. : interview-YOUR_INITIALS
- Push that branch up
- Make an initial commit to mark your start time
- Once complete make a final commit with message "Final Commit" and push your changes up



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
