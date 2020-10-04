const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();

// GET api
app.get('/api', (req, res) => {
    res.json({
        message: 'Welcome to the API'
    });
});

// POST api for a post
app.post('/api/posts', verifyToken, (req, res) => {
    res.json({
        message: 'Post created...'
    });
});

// POST api for user login
app.post('/api/login', (req, res) => {
    // user
    const user = {
        id: 1,
        username: 'John',
        email: 'example@email.com'
    }
    
    // payload {user: 'John'}
    jwt.sign({user}, 'secret key', (err, token) => {
        res.json({
            token
        });
    });
});

// FORMAT OF TOKEN
// Authorization: Bearer <access_token>

// VERIFY TOKEN 
function verifyToken(req, res, next) {
    // Get auth header value
    const bearerHeader = req.headers['authorization'];
    // Check if bearer is undefined
    if(typeof bearerHeader !== 'undefined') {
        
    } else {
        // Forbidden
        res.sendStatus(403);
    }

}

app.listen(5000, () => console.log('Server started on port 5000'));