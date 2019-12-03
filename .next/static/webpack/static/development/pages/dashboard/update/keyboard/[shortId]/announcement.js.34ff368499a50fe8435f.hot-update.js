webpackHotUpdate("static/development/pages/dashboard/update/keyboard/[shortId]/announcement.js",{

/***/ "./pages/dashboard/update/keyboard/[shortId]/announcement.tsx":
/*!********************************************************************!*\
  !*** ./pages/dashboard/update/keyboard/[shortId]/announcement.tsx ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_layouts_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../components/layouts/Layout */ "./components/layouts/Layout.tsx");
/* harmony import */ var _styles_text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../styles/text */ "./styles/text.ts");
/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../generated/graphql */ "./generated/graphql.tsx");


var _jsxFileName = "/Users/rsbear/dev/typefeel/pages/dashboard/update/keyboard/[shortId]/announcement.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;






var KeyboardMessage = function KeyboardMessage(_ref) {
  var authUser = _ref.authUser,
      shortId = _ref.shortId;

  var _useKeyboardQuery = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_6__["useKeyboardQuery"])({
    variables: {
      shortId: shortId
    }
  }),
      loading = _useKeyboardQuery.loading,
      error = _useKeyboardQuery.error,
      data = _useKeyboardQuery.data;

  var kb = !loading && data && data.keyboard;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_layouts_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Announcement",
    authUser: authUser,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, loading && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Loading..."), error && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Oops, an error occured"), !loading && data && data.keyboard && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("h1", {
    css: _styles_text__WEBPACK_IMPORTED_MODULE_5__["text"].heading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, kb.name, " announcement")));
};

KeyboardMessage.getInitialProps =
/*#__PURE__*/
function () {
  var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
    var shortId;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            shortId = context.query.shortId;
            return _context.abrupt("return", {
              shortId: shortId
            });

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (KeyboardMessage);

/***/ })

})
//# sourceMappingURL=announcement.js.34ff368499a50fe8435f.hot-update.js.map