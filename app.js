var createError = require("http-errors");
var express = require("express");
var path = require("path");

var logger = require("morgan");


var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var searchRouter = require("./routes/search");
var SignUpRouter = require("./routes/signup");
var AboutUsRouter = require("./routes/aboutus");
var searchCocktails = require("./routes/searchcocktail");
var results = require("./routes/results");
var contactUs= require("./routes/contactUs");
var privacy = require("./routes/privacy");
var resultscocktail = require("./routes/resultscocktail");


var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/search", searchRouter);
app.use("/AboutUs", AboutUsRouter);
app.use("/SignUp", SignUpRouter);
app.use("/searchCocktail", searchCocktails);
app.use("/results", results);
app.use("/ContactUs", contactUs);
app.use("/Privacy", privacy);
app.use("/resultscocktail", resultscocktail);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
  console.log("non trovo la pagina");
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
