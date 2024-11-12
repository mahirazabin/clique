"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonSubmit = exports.FileInput = exports.Form = exports.Paper = exports.Root = void 0;

var _material = require("@mui/material");

var Root = (0, _material.styled)('div')(function (_ref) {
  var theme = _ref.theme;
  return {
    '& .MuiTextField-root': {
      margin: theme.spacing(1)
    }
  };
});
exports.Root = Root;
var Paper = (0, _material.styled)('div')(function (_ref2) {
  var theme = _ref2.theme;
  return {
    padding: theme.spacing(2)
  };
});
exports.Paper = Paper;
var Form = (0, _material.styled)('form')(function () {
  return {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  };
});
exports.Form = Form;
var FileInput = (0, _material.styled)('div')(function () {
  return {
    width: '97%',
    margin: '10px 0'
  };
});
exports.FileInput = FileInput;
var ButtonSubmit = (0, _material.styled)('button')(function () {
  return {
    marginBottom: '10px'
  };
});
exports.ButtonSubmit = ButtonSubmit;