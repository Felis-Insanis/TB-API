const express = require('express');
const router = express.Router();
const mariadb = require('mariadb');
const pool = mariadb.createConnection({host: 'localhost', user: 'api', password: 'passord_til_APIet'});

router.use(express.json());

router.get("", (req, res) => {
    res.send("UwU");
});

router.get("/handshake", (req, res) => {
    const message = req.headers;
    if (message["pass"] == "OwO") {
        res.send("UwU");
    } else {
        res.send("nowo");
    };
});

router.get("/highscore", (req, res) => {
    const message = req.headers;
    if (message["pass"] == "OwO") {
        res.send("UwU");
    } else {
        res.send("nowo");
    };
});

router.post("/add_score", (req, res) => {
    const message = req.headers;
    const content = req.body;
    if (message.pass == "OwO") {
        console.log(req.body.score);
        res.send("UwU");
    } else {
        res.send("nowo");
    };
    // res.send(message);
});

module.exports = router;