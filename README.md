# Education is Free Demo

## Navigating Between Pages

Look through `src/App.js`, `src/pages/ArtistPage.js`, and `src/pages/ProgrammerPage.js` to review how
to navigate between pages

## Embedding a Youtube Video

Look through `src/components/Modal.js` to see how the video is embedded. The video link is being
passed in as a prop so make sure to trace it back to where it is coming from to full understand. As
a breif summary, the video link should be passed down as prop from `ArtistPage />` or
`<ProgrammerPage />` -> `<Person />` -> `<Modal />`. Also note the format of the video url that is
being used. Refer to the zoom recording to see how we retrieved this url.

## Available Scripts

In the project directory, you can run:

### `npm install`

Run this command at the root of the application. It will install all the required packages to run
the React application

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

# Citation

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
