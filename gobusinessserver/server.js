const express = require("express");

require('./models/businessData');
require('./models/firmData')
require('./database');

const bodyParser = require("body-parser");

const app = express();

const cors  = require("cors");

var corsOptions = {
    origin: "http://localhost:3000"
}

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({type: "application/json"}));

require("./routes")(app);
console.log("working");

const PORT = 5000;

app.listen(PORT);
