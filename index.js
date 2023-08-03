const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

mongoose.set("strictQuery", true);

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use(cookieParser());
app.use(express.json());

mongoose
  .connect(process.env.CONNET_MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Đã kết nối thành công với MongoDB");
  })
  .catch((error) => {
    console.error("Lỗi kết nối đến MongoDB:", error);
  });

// Đăng ký sự kiện khi kết nối bị đóng lại
mongoose.connection.on("disconnected", () => {
  console.log("Đã mất kết nối đến MongoDB");
});

const champion = require("./src/routes/champion");

app.use("/champion", champion);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("RESTful API server started on: " + port);
});
