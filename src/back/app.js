const express = require("express");
const path = require("path");
const cors = require("cors");
const hbs = require("hbs");
const serve = require("./helpers/serve");
const bodyParser = require("body-parser");

const app = express();
const routes = require("./router");

hbs.registerPartials("views/partials");
app.set("view engine", "hbs");

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "../../examples")));
app.use(express.static(path.join(__dirname, "../../dist")));
app.use("/", routes(app));

module.exports = app;
