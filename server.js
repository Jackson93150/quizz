const express = require("express");
const app = express();
const indexRouter = require('./routes');
let session = require('express-session');

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
app.use('/', indexRouter);

app.set('trust proxy', 1)
app.use(session({
  secret: '12345ihn45874kkkk6m',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false, expires: new Date('2023-12-31')} 
}))

app.listen(8080);