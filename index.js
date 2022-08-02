const express = require('express');

const cors = require('cors');

const app = express();

app.use(cors('*'));

app.get('/', (req, res) => {
    //res.set('Acess-Controll-Allow-Origin', 'https://ingridssilveira.github.io/petInfo/');
    res.send("ok");
});

app.listen(3000);