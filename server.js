const express = require("express");
const cors = require("cors");
const bp = require("body-parser");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use(cors({
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200
}));

app.get("/", (req, res) => {
    res.status(404).send("PAGE NOT FOUND");
});

app.post("/login", (request, response) => {
    const user = request.body.user;
    const pass = request.body.pass;

    console.log(user, pass);

    response.status(200).send("TIDERTTTTTTT");
});

app.listen(port, () => {
    console.log("Listening at port " + port);
});