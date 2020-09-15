"use strict";

let express = require("express");

let app = express();
app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/index", (req, res) => {
    res.render("index", {
        title: "Mars"
    });
});

app.listen(5000, () => {
    console.log("App wurde gestertet auf localhost:5000");
});