# technical-test01 [![Build Status](https://travis-ci.org/skyuplam/technical-test01.svg?branch=master)](https://travis-ci.org/skyuplam/technical-test01) [![Coverage Status](https://coveralls.io/repos/github/skyuplam/technical-test01/badge.svg?branch=master)](https://coveralls.io/github/skyuplam/technical-test01?branch=master)
A demo to solve the technical questions being asked. See *CodeTest-Shareactor.io.pdf* file for the detail.

## Question 1

The answer can be found in the file [highestProductOfThreeInt.js](src/utils/highestProductOfThreeInt.js).

The Tests can be found in the [__tests__/highestProductOfThreeInt.js](src/utils/__tests__/highestProductOfThreeInt.js).

### Run test

1. clone the project with `git clone git@github.com:skyuplam/technical-test01.git`

2. go to the project folder `cd technical-test01`

3. run the following command to start [jest](https://facebook.github.io/jest/) tester

```bash
npm test
```

Press `q` and then input *highest* to run only the Q1 tests. Press `a` to run all tests for the whole project.

## Question 2B

The demo site can be accessed [here](https://skyuplam.github.io/technical-test01/#/).

### Build

Run the following command in your terminal

```bash
npm run build
```

## Development

Clone the Project

```bash
git clone git@github.com:skyuplam/technical-test01.git
```

Go to the Project

```bash
cd technical-test01/
```

Install npm packages using [yarn](https://yarnpkg.com/)

```bash
yarn install
```

Run the project

```bash
npm start
```

## Deployment

### Deploy to Github page

Run the following command in your terminal to deploy to github page

```bash
npm run deploy
```

### Deploy to your own server

1. setup a [nginx service with docker](https://hub.docker.com/_/nginx/), simply run `docker pull nginx` to pull the image
2. build the static files with `npm run build`
3. copy the static files to the server, or simply use `tar -cf build.tar build && scp build.tar {username}@{server address}:~/`
4. go to the server and extract the tar file with command `tar -xvf build.tar`
5. start the nginx docker service

```bash
docker run --name static-service -v ~/build:/usr/share/nginx/html:ro -p 3000:3000 -d nginx
```
6. go to http://localhost:3000 to see the page

## Project Structure

```
src/
├── containers  // Container for the main page
│   ├── App  // App container
│   │   ├── App.css
│   │   ├── __tests__  // Test case folder containing all tests
│   │   │   ├── actions.js
│   │   │   ├── index.js
│   │   │   ├── reducer.js
│   │   │   └── selectors.js
│   │   ├── actions.js
│   │   ├── constants.js
│   │   ├── index.js
│   │   ├── reducer.js
│   │   └── selectors.js
│   ├── HomePage  // Home Page container
│   │   ├── HomePage.css
│   │   ├── __tests__  // Test case folder containing all tests
│   │   │   ├── actions.js
│   │   │   ├── index.js
│   │   │   ├── reducer.js
│   │   │   └── selectors.js
│   │   ├── actions.js
│   │   ├── constants.js
│   │   ├── index.js
│   │   ├── reducer.js
│   │   ├── sagas.js  // handling async jobs
│   │   └── selectors.js
│   └── NotFoundPage  // Not found page container
│       ├── __tests__
│       │   └── index.js
│       └── index.js
├── index.css
├── index.js  // starting point
├── reducers.js  // combine all reducers in this file
├── routes.js  // async routes
├── store.js  // redux store and middlewares
└── utils
    ├── __tests__
    │   ├── asyncInjectors.js
    │   ├── highestProductOfThreeInt.js  // Question 1 test cases
    │   └── request.js
    ├── asyncInjectors.js
    ├── highestProductOfThreeInt.js  // Question 1 answer
    └── request.js
```


## Dependencies

+ [React](https://github.com/facebook/react)
+ [Redux](https://github.com/reactjs/redux)
+ [immutable](https://facebook.github.io/immutable-js/)
+ [redux-saga](https://github.com/yelouafi/redux-saga)
+ [reselect](https://github.com/reactjs/reselect)
+ [material-ui](https://github.com/callemall/material-ui)
+ [lodash](https://github.com/lodash/lodash)
+ others


# License

This project is licensed under the MIT license, Copyright (c) 2016 Terrence Lam. For more information see `LICENSE.md`.
