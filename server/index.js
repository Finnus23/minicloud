const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = 3000;

// Sample route that uses Axios to fetch data
app.get('/api/data', async (req, res) => {
  try {
    const response = await axios.get(`http://localhost/api/fetchfileofuser/${id}`);
    res.json(response.data); // Send the fetched data as JSON response
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching data');
  }
});

// Basic route for the server root
app.get('/', (req, res) => {
  res.send('Hello, Express & Axios!');
});

// Start the server
const test = process.env.WICTIGEAPI;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}${test}`);
});