require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { urlencoded, json } = require("express");
const formRouter = require("./routers/form.router");
const {
  errorHandlerMiddleware,
  notFoundErrorMiddleware,
} = require("./middlewares/error-handler.middleware");

const app = express();
const port = process.env.PORT || 3001;

// #############################################################################
// This configures static hosting for files in /public that have the extensions
// listed in the array.
var options = {
  dotfiles: "ignore",
  etag: false,
  extensions: ["htm", "html", "css", "js", "ico", "jpg", "jpeg", "png", "svg"],
  index: ["index.html"],
  maxAge: "1m",
  redirect: false,
};

app.use(express.static("build", options));
app.use(json());
app.use(cors());
app.use(urlencoded({ extended: true }));

app.use("/form", formRouter);

app.use(notFoundErrorMiddleware);
app.use(errorHandlerMiddleware);

app.listen(port, () => {
  console.log(`Node server is running on http://localhost:${port}`);
});
