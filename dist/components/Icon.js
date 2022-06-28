"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const LikeIcon = _ref => {
  let {
    style = {},
    fill = 'var(--lba-c-icon-idle)',
    width = '16',
    height = '16',
    className = '',
    viewBox = '0 0 16 16'
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("svg", {
    width: width,
    style: style,
    height: height,
    viewBox: viewBox,
    className: className,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4.49737 2H11.5026L15 8L11.5026 14H4.49737L1 8L4.49737 2ZM5.18481 3.16129L2.36435 8L5.18481 12.8387H10.8152L13.6356 8L10.8152 3.16129H5.18481Z",
    fill: fill
  }), /*#__PURE__*/_react.default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9.7424 4.47657L11.3847 7.32116L10.379 7.90181L8.73669 5.05722L9.7424 4.47657Z",
    fill: fill
  }));
};

var _default = LikeIcon;
exports.default = _default;