const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const users = require("./routes/api/users");
const blogs = require("./routes/api/blogs");

const app = express();

// Body Parser middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("Hello Pranav!"));

// Use Routes
app.use("/api/users", users);
app.use("/api/blogs", blogs);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`The server is running on port ${port}`));
