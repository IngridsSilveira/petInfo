const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/pets', async (req, res) => {
    const resp = await fetch('https://raw.githubusercontent.com/IngridsSilveira/petInfo/main/db.json');
    const textResp = await resp.text();
    res.json(textResp);
});

app.listen(5500);