const express = require("express");

const app = express();
const port = process.env.PORT;
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/html/eng/index.html")
});

app.get("/about", (req, res) => {
    res.sendFile(__dirname + "/public/html/eng/about.html")
});

app.get("/bwork", (req, res) => {
    res.sendFile(__dirname + "/public/html/eng/bwork.html")
});

app.get("/ratoncitos", (req, res) => {
    res.sendFile(__dirname + "/public/html/eng/ratoncitos.html")
});

app.get("/saveandcode", (req, res) => {
    res.sendFile(__dirname + "/public/html/eng/saveandcode.html")
});

app.get("/autoclickthisweb", (req, res) => {
    res.sendFile(__dirname + "/public/html/eng/autoclickthisweb.html")
});

app.get("/bchat", (req, res) => {
    res.sendFile(__dirname + "/public/html/eng/bchat.html")
});

app.get("/bdownloader", (req, res) => {
    res.sendFile(__dirname + "/public/html/eng/bdownloader.html")
});

app.get("/blappyfird", (req, res) => {
    res.sendFile(__dirname + "/public/html/eng/blappyfird.html")
});

app.get("/multitools", (req, res) => {
    res.sendFile(__dirname + "/public/html/eng/multitools.html")
});

app.get("/es", (req, res) => {
    res.sendFile(__dirname + "/public/html/es/index.html")
});

app.get("/es/acerca", (req, res) => {
    res.sendFile(__dirname + "/public/html/es/about.html")
});

app.get("/es/bwork", (req, res) => {
    res.sendFile(__dirname + "/public/html/es/bwork.html")
});

app.get("/es/ratoncitos", (req, res) => {
    res.sendFile(__dirname + "/public/html/es/ratoncitos.html")
});

app.get("/es/saveandcode", (req, res) => {
    res.sendFile(__dirname + "/public/html/es/saveandcode.html")
});

app.get("/es/autoclickthisweb", (req, res) => {
    res.sendFile(__dirname + "/public/html/es/autoclickthisweb.html")
});

app.get("/es/bchat", (req, res) => {
    res.sendFile(__dirname + "/public/html/es/bchat.html")
});

app.get("/es/bdownloader", (req, res) => {
    res.sendFile(__dirname + "/public/html/es/bdownloader.html")
});

app.get("/es/blappyfird", (req, res) => {
    res.sendFile(__dirname + "/public/html/es/blappyfird.html")
});

app.get("/es/multitools", (req, res) => {
    res.sendFile(__dirname + "/public/html/es/multitools.html")
});

app.listen(port, () => {console.log(`http://localhost:${port}`)});