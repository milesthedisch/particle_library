const serve = require("./src/back/helpers/serve");
const app = require("./src/back/app");

serve(app, 3000);
