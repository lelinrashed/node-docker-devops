const express = require("express");

const port = process.env.PORT || 3000;
const app = express();

app.get("/home", (req, res) => {
  res.send("hello");
});

app.listen(port, () => console.log(`App listening on port ${port}`));
