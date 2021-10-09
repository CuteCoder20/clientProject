require("dotenv").config();
const express = require("express");
const PORT = process.env.PORT || 4000;
const path = require("path");
const ejs = require("ejs");
const session = require("express-session");
const connection = require("./database/connection");
const MongoStore = require("connect-mongo");
const passport = require("passport");
const flash = require("express-flash");
const expressLayout = require("express-ejs-layouts");
const app = express();

const publicPath = path.join(__dirname, "./public");
const viewPath = path.join(__dirname, "./templates/views");

app.use(express.static(publicPath));
app.use(flash());
app.use(express.urlencoded({ extended: false }));

//passport
const passportInt = require("./config/passport");
passportInt(passport);
app.use(passport.initialize());
app.use(passport.session());

// template engine
app.set("view engine", "ejs");
app.set("views", viewPath);

//session
app.use(
  session({
    secret: process.env.SESSION_KEY,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: "mongodb://localhost/authSystem" }),
    cookie: { maxAge: 1000 * 15 },
  })
);

// Routers
require("./routers/app")(app);

// Global middleware
app.use((req, res, next) => {
  res.locals.session = req.session;
  next();
});


//server
app.listen(PORT, () => {
  console.log(`listing on the port ${PORT}`);
});

// 10/6/2021 (create by dilawar khan)
