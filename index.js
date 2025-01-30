const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());

// Route to handle the GET request
app.get('/', (req, res) => {
    const response = {
        email: 'eimuogbo@gmail.com',  
        current_datetime: new Date().toISOString(), 
        github_url: 'https://github.com/Nuel-MD/hng-public-api',  
    };
    res.status(200).json(response);
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
