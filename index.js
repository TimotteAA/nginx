const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

app.get("/", (req, res) => {
  const readStream = fs.createReadStream(
    path.resolve(__dirname, "./index.html")
  );
  readStream.pipe(res);
});

app.listen(5000);
