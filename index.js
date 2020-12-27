const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use("/triangle", require("./routes/triangle"));
const port = 9000;

if (process.env.NODE_ENV === "production") {
  app.use("/", express.static(path.join(__dirname, "client", "build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
