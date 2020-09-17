"use strict";

let fs = require("fs");
let express = require("express");
// import express, { static } from "express"; eine neuere Version von dieser Schreibweise: Import
let bodyParser = require("body-parser");
let GuestbookEntry = require("./src/GuestbookEntry");

//Bis zu naechstem Kommentar wird unser data.json abgelesen
fs.readFile("./data.json", "utf-8", (err, data) => {
    if (err) throw err;
    let d = JSON.parse(data);
    let entries = [];
    for(let entry of d) {
        entries.push(new GuestbookEntry(entry.title, entry.content))
    }

    //Hier wird unser Server gestartet

    let express = require("express");
    // import express, { static } from "express"; eine neuere Version von dieser Schreibweise: Import
    let bodyParser = require("body-parser");
    
    
    let app = express();
    app.set("view engine", "ejs");
    app.set("views", "./views");
    
    app.use(bodyParser.urlencoded({extended: true})); //urlencoded setzen damit unser Formular richtig entgegengenommen
    app.use(express.static("./public")); //damit schliessen wir die css an, weil man sonst kein Zugriff hat
    
    app.get("/index", (req, res) => { //GET Anfrage auf der Seite
        res.render("index", {
            entries: entries
        });
    });
    
    app.post("/guestbook/new", (req, res) => { //POST Anfrage auf der Seite (wenn wir etwas aendern wollen)
        let content = req.body.content;
        let title = req.body.title;
    
        let newEntry = new GuestbookEntry(title, content);
        entries.push(newEntry);
        //res.write("Erfolgreich!");
        //res.end(); fuer eine Erfolgsmeldung ueber einen gespeicherten Beitrag
    
        res.redirect("/index");
    });
    app.listen(5000, () => { //damit sagen wir das der Browser auf Port 5000 zuhoeren soll
        console.log("App wurde gestartet auf localhost:5000");
    });
});