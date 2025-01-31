const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());

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
