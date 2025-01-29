const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000; // Port for local development

// Middleware
app.use(cors());

// Route to handle the GET request
app.get('/', (req, res) => {
    const response = {
        email: 'eimuogbo@gmail.com',  
        current_datetime: new Date().toISOString(), // Current date in ISO 8601 format
        github_url: 'https://github.com/Nuel-MD/your-repo',  // Replace with your GitHub URL
    };
    res.status(200).json(response);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
