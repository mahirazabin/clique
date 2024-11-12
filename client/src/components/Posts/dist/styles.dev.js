"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ActionDiv = exports.SmMargin = exports.MainContainer = void 0;

var _material = require("@mui/material");

// Styled components
var MainContainer = (0, _material.styled)('div')({
  display: 'flex',
  alignItems: 'center'
});
exports.MainContainer = MainContainer;
var SmMargin = (0, _material.styled)('div')(function (_ref) {
  var theme = _ref.theme;
  return {
    margin: theme.spacing(1)
  };
});
exports.SmMargin = SmMargin;
var ActionDiv = (0, _material.styled)('div')({
  textAlign: 'center'
});
exports.ActionDiv = ActionDiv;