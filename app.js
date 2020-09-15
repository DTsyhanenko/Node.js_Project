"use strict";

let express = require("express");

let app = express();
app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static("./public")); //damit schliessen wir die css an, weil man sonst kein Zugriff hat

let entries = [
    {title: "Ueberschrift", content: "Ich bin der Inhalt"}
];

app.get("/index", (req, res) => {
    res.render("index", {
        title: "Mars"
    });
});

app.listen(5000, () => { //damit sagen wir das der Browser auf Port 5000 zuhoeren soll
    console.log("App wurde gestertet auf localhost:5000");
});