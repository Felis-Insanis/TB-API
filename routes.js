const express = require('express');
const router = express.Router();
const mariadb = require('mariadb');
const pool = mariadb.createPool({
    host: 'localhost',
    user: 'api',
    password: 'passord_til_APIet'
});

// small little tiny cheatsheet
// async function getHS() {
//     let conn;
//     try {
//       conn = await pool.getConnection();
//       const rows = await conn.query("SELECT * FROM highscore_db.Scores");
//       console.log(rows); //[ {val: 1}, meta: ... ]
//       const res = await conn.query("INSERT INTO highscore_db.Scores VALUES (?, ?)", ["testing", 1]);
//       console.log(res); // { affectedRows: 1, insertId: 1, warningStatus: 0 }
  
//     } catch (err) {
//       throw err;
//     } finally {
//       if (conn) return conn.end();
//     }
// }

router.use(express.json());

router.get("", (req, res) => {
    res.send("UwU");
});

router.get("/handshake", (req, res) => { // sjekker kobling
    const message = req.headers;
    if (message["pass"] == "OwO") {
        res.send("UwU");
    } else {
        res.send("nowo");
    };
});

router.get("/highscore", async (req, res) => { // får frem highscore
    console.log("Handling HIGHSCORE request...")
    const message = req.headers;
    if (message["pass"] == "OwO") {
        // brukte https://mariadb.com/kb/en/getting-started-with-the-nodejs-connector/ for å løse problemet
        let conn;
        conn = await pool.getConnection();
        const scores = await conn.query("SELECT * FROM highscore_db.Scores");
        let answer = "nickname             | score\n";
        for (let item = 0; item < scores.length; item++) {
            answer = answer.concat(`${scores[item].nick} | ${scores[item].score}\n`);     //adding name row to response
        }

        conn.close();
        res.send(answer);
    } else {
        res.send("nowo");
    };
});

router.post("/add_score", async (req, res) => { // legger til score og nickname til db
    console.log("Handling ADD SCORE request...")
    const message = req.headers;
    const content = req.body;
    if (message.pass == "OwO") {
        console.log(req.body);
        // pool.then(conn)
        console.log("Request handled!")
        res.send("UwU");
    } else {
        res.send("nowo");
    };
    // res.send(message);
});

module.exports = router;