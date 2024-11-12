"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

// reducer is a function, which accepts the state and action, 
// then based on the action type, then we want to apply some logic here.
// specifying an empty array for our state (i.e posts)
var _default = function _default() {
  var posts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'FETCH_ALL':
      return posts;

    case 'CREATE':
      return posts;

    default:
      return posts;
  }
};

exports["default"] = _default;