"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _posts = _interopRequireDefault(require("./posts"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = (0, _redux.combineReducers)({
  // considering both the key and the value are the same
  // we can keep only one:
  // posts: posts,
  posts: _posts["default"]
});

exports["default"] = _default;