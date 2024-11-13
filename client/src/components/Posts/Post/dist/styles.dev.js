"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledCardActions = exports.StyledTitle = exports.Details = exports.Overlay2 = exports.Overlay = exports.StyledCardMedia = exports.StyledCard = void 0;

var _material = require("@mui/material");

// Styled components
var StyledCard = (0, _material.styled)(_material.Card)(function (_ref) {
  var theme = _ref.theme;
  return {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: '100%',
    position: 'relative',
    margin: theme.spacing(2)
  };
});
exports.StyledCard = StyledCard;
var StyledCardMedia = (0, _material.styled)(_material.CardMedia)({
  height: 0,
  paddingTop: '56.25%',
  // 16:9 aspect ratio
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  backgroundBlendMode: 'darken'
});
exports.StyledCardMedia = StyledCardMedia;
var Overlay = (0, _material.styled)('div')({
  position: 'absolute',
  top: '20px',
  left: '20px',
  color: 'white'
});
exports.Overlay = Overlay;
var Overlay2 = (0, _material.styled)('div')({
  position: 'absolute',
  top: '20px',
  right: '20px',
  color: 'white'
});
exports.Overlay2 = Overlay2;
var Details = (0, _material.styled)('div')({
  display: 'flex',
  justifyContent: 'space-between',
  margin: '20px'
});
exports.Details = Details;
var StyledTitle = (0, _material.styled)(_material.Typography)({
  padding: '0 16px'
});
exports.StyledTitle = StyledTitle;
var StyledCardActions = (0, _material.styled)(_material.CardActions)({
  padding: '0 16px 8px 16px',
  display: 'flex',
  justifyContent: 'space-between'
});
exports.StyledCardActions = StyledCardActions;