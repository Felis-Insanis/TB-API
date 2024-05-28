const express = require('express');
const router = express.Router();

router.get("", (req, res) => {
    res.send("UwU");
});

router.get("/handshake", (req, res) => {
    const message = req.headers
    if (message["pass"] == "OwO") {
        res.send("UwU")
    } else {
        res.send("nowo")
    }
});

router.get("/highscore", (req, res) => {
    const message = req.headers
    if (message["pass"] == "OwO") {
        res.send("UwU")
    } else {
        res.send("nowo")
    }
});

router.post("/add_score", (req, res) => {
    res.send("UwU");
});

module.exports = router;