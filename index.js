const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use("/triangle", require("./routes/triangle"));
const port = 9000;

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
