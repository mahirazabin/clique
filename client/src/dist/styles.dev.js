"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styles = require("@mui/styles");

var _default = (0, _styles.makeStyles)(function () {
  return {
    appBar: {
      borderRadius: 15,
      margin: '30px 0',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    },
    heading: {
      color: 'rgba(0,183,255, 1)'
    },
    image: {
      marginLeft: '15px',
      transform: 'rotate(-10deg)',
      width: '65px',
      height: 'auto',
      borderRadius: '3px'
    }
  };
});

exports["default"] = _default;