const express = require("express");
const http = require("http");
const dotenv = require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const credentials = require("./middleswares/credentials");
const corsOptions = require("./configs/corsOption");
const { verifyJsonWebToken } = require("./middleswares/verifyJsonWebToken");

const app = express();
const server = http.createServer(app);

app.use(credentials);
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/sign-up", require("./routes/auth"));
app.use("/api/sign-in", require("./routes/auth"));
app.use("/api/refreshAccessToken", require("./routes/auth"));
app.use("/api/log-out", require("./routes/auth"));

app.use(verifyJsonWebToken);
//protected routes bellow

const port = 3000;
server.listen(port, () => {
  console.log(`Express is running on port:${port}.`);
});
