// this requires the Express Module I installed via NPM
const express = require('express');
// this set ups our Express application by calling it
const app = express();
// path module required used within static asset path
const path = require('path');

const climberProfiles = require('./public/climber-profiles.js')

// creating our own middleware
// const middlewareFuncName = (request, response, next) => {
  // Midlleware code to run
  // Move on to the next middleware function of the route handler
  // next();
// };
const urlLogger = (request, response, next) => {
  console.log('Request URL:', request.url);
  next();
};
      // great application for these middleware const
      // use for authentication, authorzation, etc.
      // is the client even authorized to view the page?
      // if the client is use the next function and send a success response
const timeLogger = (request, response, next) => {
  console.log('Datetime:', new Date(Date.now()).toString());
  next();
};
// Instead of having these in the callback of the app.get place them here
app.use(urlLogger, timeLogger);
// using a get method to the /json endpoint
  // response with success status code we want back is the defined json object
app.get('/json', (request, response) => {
  response.status(200).json(climberProfiles);
});

// Creating an endpoint of /rock-climbing that a user can view climber images
app.get('/rock-climbing', (request, response) => {
  response.status(200).sendFile(path.join(__dirname, 'public/rock-climbing.html'));
});

// // route handler with method GET
// // first argument is the route path
// // second is our callback function
//   // request object from client (headers, params, body, etc.)
//   // response object is what we want to send back to the client
// app.get('/', (request, response) => {
//   // sending a response with content in the body
//   response.send('Hello I Am Here!');
// });
// app.use() configures your file to use middleware
  // for every request to the server run this
  // use the specified path as a starting point for all static assest files


// express.static() defines the path to your static asset
app.use(express.static(path.join(__dirname, 'public')));
// tells server to listen for connectios port 3000
app.listen(3000, () => {
  console.log('Express Into Running On localhost:3000');
});
