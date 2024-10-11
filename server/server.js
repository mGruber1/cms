const express = require("express");
const app = express();
const cors = require("cors");
const indexRoutes = require("./routes/indexRoutes");
const port = 3001;

app.use(
  cors({
    origin: `*`,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.use("/", indexRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
