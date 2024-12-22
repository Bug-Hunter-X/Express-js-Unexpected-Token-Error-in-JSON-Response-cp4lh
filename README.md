# Express.js Unexpected Token Error in JSON Response

This repository demonstrates an uncommon error in Express.js applications: the "Unexpected token" error within a JSON response. This error typically arises when the server attempts to send an invalid JSON structure to the client.  The provided code shows the problem and its solution.

## Problem

The `bug.js` file contains an Express.js route that attempts to send a non-JSON object as a response, leading to the "Unexpected token" error in the client's browser or other consumers.

## Solution

The `bugSolution.js` demonstrates the correct way to send a JSON response. The solution involves ensuring that the data sent to the client is a valid JavaScript object and using `res.json()` method to send the response.

## How to Reproduce

1. Clone this repository.
2. Navigate to the repository's directory using your terminal.
3. Run `npm install` to install the required dependencies.
4. Run `node bug.js` to start the server.
5. Access the `/error` route in your browser. This will trigger the error.
6. Run `node bugSolution.js` to start the server with the fix.
7. Access the `/data` route. This will return the correctly formatted JSON response.
