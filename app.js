const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/submit-form', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
    
    console.log(`Contact form submitted with name: ${name}, email: ${email}`);
    
    res.send(`Thank you ${name}, we have received your message!`);
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});