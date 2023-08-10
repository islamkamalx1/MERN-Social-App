const express = require("express");
const app = express();
const mongoose = require("mongoose");
const helmet = require("helmet");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");
const usersRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postsRoute = require("./routes/posts");
app.use(cors());
dotenv.config();

mongoose.connect(process.env.MONGO_URL).then(() => {
  console.log("connected to mongoDB");
  app.listen(8800, () => {
    console.log("Backend server is running on http://localhost:8800");
  });
});

// *Middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

// *ROUTEs
app.use("/api/users", usersRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postsRoute);
