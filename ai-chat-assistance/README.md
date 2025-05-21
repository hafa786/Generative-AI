# Getting Started with AI Chat Assistance

This project includes two parts one is frontend while other is backend.

## Prerequisite

To run this project whole, you need to install or have following:

- Nodejs
- Docker

## Frontend - React + Typescript + Sass Application

Go in the project directory, you can run:

### Run locally

#### `cd frontend`

#### `npm install`

Install npm required packages

#### `npm start`

Note: Before this start server, go to the root frontend folder. Create a `.env` file and add the following required environment variable to inject in the application.


and before run `npm start` ensure backend is working perfectly on mentioned `REACT_APP_BACKEND_WEBSOCKET_URL`.

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run format`

It ensures uniform code style across the project.

#### `npm run eject`


### Structure

```
├── node_moodules
├── src: # source code
    └── components # list of React components
        ├── AIMessage.tsx
        ├── Footer.tsx
        ├── Header.tsx
        ├── Menu.tsx
        ├── Buttons.tsx
        ├── Chat.tsx
        ├── MaintenanceRecordCard.tsx
        ├── ChatAssistanceForm.tsx
    └── dist # all media files especially image
    └── hooks # contains all hooks
    └── pages # list of all the pages
    └── types # contain all the type of main object
    └── server.ts # Main server file to list the endpoints
    └── App.tsx # main app component (app entry points)
├── public # Temprary store image file
├── .gitignore # it ignore file
├── package.json # Project metadata and dependencies
├── tsconfig.json # TypeScript configuration
├── Dockerfile # Docker script file
```

## Backend - Nodejs + Typescript + WebSocket
### Run locally

#### `cd backend`

#### `npm install`

Install npm required packages

#### `npm run dev`

It will run the app in the development mode.\
Open [ws://localhost:8080](ws://localhost:8080) to view it.

### Structure

```
├── node_moodules
├── src: # source code
    └── data # contains all the data files.
    └── helpers # contains all the helper functions
        ├── getMockedData.ts # return the mocked data
    └── types # contains data types files
    ├── websocket-api-server.ts # main WebSocketServer typescript file
├── .gitignore # it ignore file
├── package.json #pProject metadata and dependencies
├── tsconfig.json # TypeScript configuration
├── Dockerfile # Docker script file

```


### Deployment with docker

Before deploying the backend application through dockerization, be ensured that you have already installed docker.

in the main root folder, run the following

`./run.sh`

It will run the app through docker using docker componse in the development mode. 
Open [http://localhost:3000](http://localhost:3000) to view it and backend websocket is running on [ws://localhost:8080](ws://localhost:8080).


## Future scopes

Due to limitation of time and other factors, there are many improvement or addition can be made to this project to increase scope of the project. For example:

- <b>Testing</b>: In future, adding tests to test the each of the UI components using `testing-library/react`
- <b>Improve code quality</b>: In future, adding eslint to the UI components would be plus to handle many future risks.
- <b>State management</b>: In future, adding React Context API + useReducer or Redux Toolkit.
- <b>Security</b>: Add authorization to access the endpoints by AWS Access token etc.
- <b>Deploy AWS</b>: Deploy by writing cdk constructs.
- <b>Styling library</b>: In future, add some stylish and prettier.
