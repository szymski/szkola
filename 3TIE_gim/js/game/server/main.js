const express = require('express')
const bodyParser = require('body-parser');
const app = express()
app.use(bodyParser.json({}));
const port = 3000

const leaderboard = [{
        name: 'Szymon',
        points: 1337,
    },
    {
        name: 'Paweł',
        points: 69,
    },
    {
        name: 'Andrzej Duda',
        points: 0,
    },
];

app.get('/leaderboard', (req, res) => {
    res.json(leaderboard);
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

    res.send("OK");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})