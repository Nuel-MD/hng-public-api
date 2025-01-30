const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch'); 
const app = express();
const port = process.env.PORT || 3000;

require('dotenv').config();

// Middleware
app.use(cors());

// Route to handle the GET request
app.get('/', (req, res) => {
  fetch('https://example.com/protected-url', {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${process.env.BEARER_TOKEN}`
    }
  })
    .then(response => response.json())
    .then(data => {
      res.status(200).json({
        email: 'eimuogbo@gmail.com',
        current_datetime: new Date().toISOString(),
        github_url: 'https://github.com/Nuel-MD/hng-public-api',
        external_data: data, 
      });
    })
    .catch(error => {
      console.error('Error:', error);
      res.status(500).json({ error: 'Failed to fetch data from external URL' });
    });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
