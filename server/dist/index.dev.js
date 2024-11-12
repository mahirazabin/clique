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
app.use((0, _cors["default"])());
app.use('/posts', _posts["default"]);
var CONNECTION_URL = "mongodb+srv://mahirazabin:mahirazabin123@cluster0.6fnme.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
var PORT = process.env.PORT || 5001; // Changed port number

_mongoose["default"].connect(CONNECTION_URL).then(function () {
  return app.listen(PORT, function () {
    return console.log("Server running on port: ".concat(PORT));
  });
})["catch"](function (error) {
  return console.log(error.message);
});