"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchPosts = void 0;

var _axious = _interopRequireDefault(require("axious"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//this is the URL pointing to our backend route, as it simply returns all the posts we have in the database
var url = 'http://localhost:5001/posts';

var fetchPosts = function fetchPosts() {
  return _axious["default"].get(url);
};

exports.fetchPosts = fetchPosts;