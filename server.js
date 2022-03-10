const express = require("express");

const app = express();
const port = 3300 || process.env.PORT;
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/html/eng/index.html")
});

app.get("/es", (req, res) => {
    res.sendFile(__dirname + "/public/html/es/index.html")
});

app.listen(port, () => {console.log(`http://localhost:${port}`)});