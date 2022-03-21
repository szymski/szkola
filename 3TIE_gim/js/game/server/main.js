const express = require('express')
const bodyParser = require('body-parser');
const app = express()
app.use(bodyParser.json({}));
const port = 1337

app.use(function(req, res, next) {
    // res.header('Access-Control-Allow-Origin', '*');
    // res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    // res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
});

const players = {};
let cached = [];

app.get('/leaderboard', (req, res) => {
    res.json(cached);
})

app.post('/leaderboard/send', (req, res) => {
    console.log(req.body);

    const { name, points } = req.body;

    if (!name) {
        res.status(400).send("Nie podano pola 'name'");
        return;
    }
    if (typeof name !== "string") {
        res.status(400).send("Pole 'name' ma nieprawidłowy typ");
        return;
    }
    if (!points) {
        res.status(400).send("Nie podano pola 'points'");
        return;
    }
    if (typeof points !== "number") {
        res.status(400).send("Pole 'points' ma nieprawidłowy typ");
        return;
    }

    players[name] = points;

    cached = Object.entries(players)
        .map(([name, points]) => ({ name, points }))
        .sort((a, b) => b.points - a.points);

    res.send("OK");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});