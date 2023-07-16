const connectToMongo = require("./db");
const express = require('express');

connectToMongo();

const app = express();
const port = 3000;

// Middleware
app.use(express.json()); // Parse JSON request bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded request bodies

// Routes
app.get('/', (req, res) => {
  res.send('Hello, harry!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
