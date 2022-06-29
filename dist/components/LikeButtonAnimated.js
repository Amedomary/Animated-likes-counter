"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _reactSpring = require("react-spring");

var _Icon = _interopRequireDefault(require("./Icon"));

require("./LikeButtonAnimated.css");

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const rangeMass = [0.3, 2, 4.5, 6];

const NumberSpring = _ref => {
  let {
    projectile
  } = _ref;
  const [show, setShow] = (0, _react.useState)(true);
  const {
    current: elementMass
  } = (0, _react.useRef)((0, _utils.randomNumber)(rangeMass[0], rangeMass[3]));
  const weight = elementMass > rangeMass[2] ? 'bold' : elementMass < rangeMass[1] ? 'lighter' : 'normal';
  const transitions = (0, _reactSpring.useTransition)(show, {
    from: {
      opacity: 0,
      y: 0,
      x: 0
    },
    enter: {
      opacity: 1,
      y: (0, _utils.randomNumber)(-20, -35),
      x: (0, _utils.randomNumber)(-3, 3)
    },
    leave: {
      opacity: 0
    },
    delay: 900,
    config: {
      mass: elementMass,
      tension: 210,
      friction: 20
    },
    onRest: () => setShow(false)
  });
  return transitions((styles, item) => item && /*#__PURE__*/_react.default.createElement(_reactSpring.animated.span, {
    style: _objectSpread({
      color: 'var(--text-level-2)',
      fontWeight: weight,
      position: 'absolute',
      left: '27px'
    }, styles)
  }, projectile));
};

const HexSpringSVG = _ref2 => {
  let {
    id
  } = _ref2;
  const aConfig = {
    dur: '1s',
    repeatCount: '1'
  };
  const {
    current: height
  } = (0, _react.useRef)((0, _utils.randomNumber)(40, 80));
  const {
    current: rotationCount
  } = (0, _react.useRef)(Math.random() * 720);
  return /*#__PURE__*/_react.default.createElement("svg", {
    style: {
      position: 'absolute',
      pointerEvents: 'none',
      top: 0,
      zIndex: 100
    },
    width: "50",
    height: "100",
    viewBox: "0 0 50 100",
    fill: "var(--lba-c-accent)"
  }, /*#__PURE__*/_react.default.createElement("g", {
    id: "circle".concat(id),
    transform: "translate(-7, -6)",
    opacity: "0"
  }, /*#__PURE__*/_react.default.createElement("g", null, /*#__PURE__*/_react.default.createElement("path", {
    d: "M4.49737 2H11.5026L15 8L11.5026 14H4.49737L1 8L4.49737 2Z",
    fill: "var(--lba-c-bg)"
  }), /*#__PURE__*/_react.default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd" // eslint-disable-next-line max-len
    ,
    d: "M4.49737 2H11.5026L15 8L11.5026 14H4.49737L1 8L4.49737 2ZM5.18481 3.16129L2.36435 8L5.18481 12.8387H10.8152L13.6356 8L10.8152 3.16129H5.18481Z",
    fill: "var(--lba-c-accent)"
  }), /*#__PURE__*/_react.default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9.7424 4.47657L11.3847 7.32116L10.379 7.90181L8.73669 5.05722L9.7424 4.47657Z",
    fill: "var(--lba-c-accent)"
  }), /*#__PURE__*/_react.default.createElement("animateTransform", {
    attributeName: "transform",
    type: "rotate",
    dur: "1s",
    values: "0 8 8; ".concat(rotationCount, " 8 8;"),
    repeatCount: "indefinite"
  })), /*#__PURE__*/_react.default.createElement("animate", {
    attributeName: "opacity",
    values: "0;1;1;1;1;1;1;1;0",
    dur: aConfig.dur,
    repeatCount: aConfig.repeatCount
  })), /*#__PURE__*/_react.default.createElement("animateMotion", {
    fill: "freeze",
    keyPoints: "0;1",
    keyTimes: "0;1",
    keySplines: "0.3 0.8 0.8 0.2",
    dur: aConfig.dur,
    calcMode: "spline",
    begin: "0s",
    repeatCount: aConfig.repeatCount,
    origin: "10 10",
    xlinkHref: "#circle".concat(id),
    path: "M8 8C8 ".concat(height, " 27 ").concat(height, " 27 13")
  }));
};

const LikeButtonAnimated = _ref3 => {
  let {
    disabledButton,
    handleLike,
    projectile,
    style,
    likes,
    classes
  } = _ref3;
  const [list, setList] = (0, _react.useState)([]);
  const [countStyle, setCountStyle] = (0, _react.useState)({});
  const durationCancel = 5000;
  const durationPing = 100;
  const durationIncomingAnimation = 1000;

  const onLike = () => {
    const now = new Date().getTime();
    setList(a => [...a, now]);
    setTimeout(() => {
      setCountStyle({
        transform: 'translateY(-1px)',
        color: style.countTextActiveColor
      });
      handleLike();
      setTimeout(() => {
        setCountStyle({});
      }, durationPing);
    }, durationIncomingAnimation);
    setTimeout(() => {
      setList(a => a.slice(1));
    }, durationCancel);
  };

  return /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    disabled: disabledButton,
    className: "lba-root ".concat((classes === null || classes === void 0 ? void 0 : classes.root) || ''),
    onClick: onLike
  }, list.length > 0 && list.map(e => /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
    key: e
  }, /*#__PURE__*/_react.default.createElement(HexSpringSVG, {
    id: e
  }), /*#__PURE__*/_react.default.createElement(NumberSpring, {
    projectile: projectile
  }))), /*#__PURE__*/_react.default.createElement(_Icon.default, {
    className: "lba-icon ".concat((classes === null || classes === void 0 ? void 0 : classes.icon) || '')
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: (classes === null || classes === void 0 ? void 0 : classes.countText) || '',
    style: countStyle
  }, likes));
};

LikeButtonAnimated.defaultProps = {
  projectile: '+1',
  disabledButton: false,
  style: {
    countTextActiveColor: 'var(--lba-c-icon-hover)'
  }
};
var _default = LikeButtonAnimated;
exports.default = _default;