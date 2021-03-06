"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _auth = _interopRequireDefault(require("../controllers/auth"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = (0, _express.Router)();
router.post('/signup', _auth["default"].signup);
router.post('/signin', _auth["default"].signin);

var _default = function _default(app) {
  return app.use('/auth', router);
};

exports["default"] = _default;