const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Mandy McGinnis in CIS 476'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
