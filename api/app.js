const express = require('express');
const axios = require('axios');

const app = express();

app.use((req, res, next) => {
  console.log(`${(new Date()).toISOString()}: ${req.method} ${req.url}`);
  next();
});

app.get('/api/search', (req, res) => {
  res.send({ message: 'Hello world' });
});

app.get('/api/flickr', async (req, res) => {
  try {
    const response = await axios.get('https://api.flickr.com/services/feeds/photos_public.gne?format=json');
    res.json(response.data);
  } catch (error) {
    console.error('Error making Flickr API request:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = app;