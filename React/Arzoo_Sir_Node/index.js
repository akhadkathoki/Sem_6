const express = require('express');

const app = express();
const port = 3000;

app.get("/", (req, res) => res.json(
    {
        "name":"Hello Priyanka!",
        "nme":"Hello Abhishek!"
    }
));
app.get("/uni", (req, res) => res.send("RK University"));
app.get("/uni/school", (req, res) => res.send("School of Engineering"));
app.get("/uni/school/course", (req, res) => res.send("Computer Engineering"));

app.listen(port, () => console.log(`Server running at ${port}`));