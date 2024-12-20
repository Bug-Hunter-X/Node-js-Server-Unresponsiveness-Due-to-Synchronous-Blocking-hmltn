# Node.js Server Unresponsiveness

This repository demonstrates a common issue in Node.js where long-running synchronous operations can block the event loop, leading to unresponsiveness. The `server.js` file contains a simple Express.js server that simulates a 5-second delay before sending a response. This delay causes the server to become unresponsive during that time.  `serverSolution.js` provides a solution using asynchronous operations to avoid this issue.

## Problem

Node.js is single-threaded and relies on the event loop to handle multiple requests concurrently.  If a long-running task blocks the event loop (as in this example with the `setTimeout` call inside the request handler), the server cannot process other requests until that task is finished.

## Solution

The solution involves using asynchronous operations to handle the long-running task without blocking the event loop.  This prevents other requests from being blocked. The solution file demonstrates an example of how to resolve the problem using async/await to handle the setTimeout. 