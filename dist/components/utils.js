"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.randomNumber = void 0;

const randomNumber = (min, max) => Math.random() * (max - min) + min;

exports.randomNumber = randomNumber;