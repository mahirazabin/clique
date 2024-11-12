"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createPosts = exports.fetchPosts = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//this is the URL pointing to our backend route, as it simply returns all the posts we have in the database
var url = 'http://localhost:5001/posts';

var fetchPosts = function fetchPosts() {
  return _axios["default"].get(url);
};

exports.fetchPosts = fetchPosts;

var createPosts = function createPosts(newPost) {
  return _axios["default"].post(url, newPost);
};

exports.createPosts = createPosts;