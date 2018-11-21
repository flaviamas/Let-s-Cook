var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

const apikey = "9f30fd6c33e0ab0ffcd0d2f1ae5c7099";

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var searchRouter = require("./routes/search");
var SignUpRouter=  require("./routes/SignUp");
var SignInRouter=  require("./routes/SignIn");
var AboutUsRouter=  require("./routes/AboutUs");
var searchCocktails = require("./routes/searchCocktail");
var results=  require("./routes/results");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/search",searchRouter);
app.use("/AboutUs",AboutUsRouter);
app.use("/SignUp",SignUpRouter);
app.use("/SignIn",SignInRouter);
app.use("/searchCocktail",searchCocktails);
app.use("/results",results);
//richiesta delle api tramite la get

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
