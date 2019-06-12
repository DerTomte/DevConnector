const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('API Running'));

app.get('/test', (req, res) => res.send('Pimmel'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on Port ${PORT}`));
