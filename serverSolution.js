const express = require('express');
const app = express();
app.get('/', async (req, res) => {
  await new Promise(resolve => setTimeout(resolve, 5000)); // Simulate a 5-second delay using async/await
  res.send('Hello World!');
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});