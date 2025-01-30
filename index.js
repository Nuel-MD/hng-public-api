const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');  // Ensure 'node-fetch' is installed
const app = express();
const port = process.env.PORT || 3000;
require('dotenv').config();

// Middleware
app.use(cors());

// Make API call
fetch('https://example.com/protected-url', {
    method: 'GET',
    headers: {
        'Authorization': `Bearer ${process.env.BEARER_TOKEN}`
    }
})
.then(response => {
    if (!response.ok) {
        throw new Error('API request failed with status ' + response.status);
    }
    return response.json();
})
.then(data => console.log(data))
.catch(error => {
    console.error('Error:', error);
});

// Route to handle the GET request
app.get('/', (req, res) => {
    try {
        const response = {
            email: 'eimuogbo@gmail.com',
            current_datetime: new Date().toISOString(),
            github_url: 'https://github.com/Nuel-MD/hng-public-api',
        };
        res.status(200).json(response);
    } catch (error) {
        console.error('Error in GET route:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
