"use strict";

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _cors = _interopRequireDefault(require("cors"));

var _posts = _interopRequireDefault(require("./routes/posts.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.use(_bodyParser["default"].json({
  limit: "30mb",
  extended: true
}));
app.use(_bodyParser["default"].urlencoded({
  limit: "30mb",
  extended: true
}));
app.use((0, _cors["default"])()); // Route for posts

app.use('/posts', _posts["default"]); // Default route for root path

app.get('/', function (req, res) {
  res.send('Welcome to MoveMates!');
});
var CONNECTION_URL = "mongodb+srv://mewmew:mewmew123@cluster0.im1jn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
var PORT = process.env.PORT || 3000;

_mongoose["default"].connect(CONNECTION_URL).then(function () {
  return app.listen(PORT, function () {
    return console.log("Server running on port: ".concat(PORT));
  });
})["catch"](function (error) {
  return console.log(error.message);
});