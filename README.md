## How To Run

Install node.js if needed
unzip file and navigate command window to folder
Download packages with - npm install
Run - npm start to run dev build without local server
App should launch automatically in local host
For unit tests run - npm test
More information about scripts can be found below

## About Project

Most of my time with this app was spent thinking about the user experience without overly cluttering the screen. The app consists of a few components. The main app component, the form, the list, the filter function, the table header and body. I tried to modularize wherever I could. I opted do one form in order to add to either list to streamline the experience. 

The app should meet all the technical requirements laid out for the project. In addition, I gave the user the ability to filter the list via any type able paramter they choose as opposed to just first name.

As far as libraries, I used a react version of bootstrap called react-strap that took care of basic styling and layout. I also used an icon library for the two button icons. 

There are a couple of basic unit tests for app.js just for react testing demonstration purposes.

The relevant files to view are App.js located at src/App.js and the various components located at src/components. The test file can be found at src/tests.

I enjoyed working on this and if there any questions feel free to contact me.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!