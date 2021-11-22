const express = require("express");
const { Server } = require("http");
// create app
const app = express();
//send the index.html when reciving htto get
app.use(express.static("public"));
app.get("/", (req, res) => {
  res.sendFile("index.html", { root: __dirname });
});
// pass requests to the router middleware
const router = require("./routes/apis");
app.use(router);
//make the app listen on port
const port = process.argv[2] || process.env.port;
const server = app.listen(port, () => {
  console.log("cart app listening at http://localhost;3000");
});
