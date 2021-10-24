const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const routes = require("./routes");
require("dotenv").config();
const port = process.env.PORT_APP | 4000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var cors = require("cors");
app.use(cors());

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./documentation/swagger.json");

app.use(
  "/api/documentation",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument)
);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// if ("development" === app.get("env")) {
//   app.use(express.errorHandler());
// }else{
// console.log();
// }

app.use("/api/", routes);

app.get("/", function (req, res) {
  res.send("respond with a resource");
});
