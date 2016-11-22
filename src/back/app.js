const express = require("express");
const path = require("path");
const cors = require("cors");
const serve = require("./helpers/serve");
// const bodyParser = require("body-parser");
const app = express();

const routes = require("./router");

app.use(express.static(path.join(__dirname, "../../examples")));
app.use(cors());
app.use("/", routes(app));

serve(app, 3000);
