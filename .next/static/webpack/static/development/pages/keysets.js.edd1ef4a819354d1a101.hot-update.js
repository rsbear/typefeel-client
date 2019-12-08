webpackHotUpdate("static/development/pages/keysets.js",{

/***/ "./components/layouts/Navigation.tsx":
/*!*******************************************!*\
  !*** ./components/layouts/Navigation.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/css */ "./node_modules/@emotion/css/dist/css.browser.esm.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _DynamicNav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DynamicNav */ "./components/layouts/DynamicNav.tsx");
/* harmony import */ var _styles_main__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/main */ "./styles/main.ts");
/* harmony import */ var _styles_text__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../styles/text */ "./styles/text.ts");

var _jsxFileName = "/Users/rsbear/dev/typefeel/components/layouts/Navigation.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;








var Navigation = function Navigation(_ref) {
  var authUser = _ref.authUser,
      dynamicNav = _ref.dynamicNav;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  var keyboardPaths = router.pathname.includes("/keyboard");
  var keysetPaths = router.pathname.includes("/keyset");
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("nav", {
    css: navStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "typefeel"))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/keyboards",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Keyboards"))), keyboardPaths && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("li", {
    className: "subRoute",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/keyboards/interestchecks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Interest checks"))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("li", {
    className: "subRoute",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/keyboards/catalog",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "Catalog")))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/keysets",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "Keysets"))), keysetPaths && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("li", {
    className: "subRoute",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/keysets/interestchecks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "Interest checks"))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("li", {
    className: "subRoute",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/keysets/market",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "Market")))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "Artisans"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/create",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "Create"))), !authUser ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/login",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "Log in")), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, "\xA0/\xA0"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/signup",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, "Sign up"))) : Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/dashboard",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, "Dashboard"))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_DynamicNav__WEBPACK_IMPORTED_MODULE_5__["default"], {
    dynamicNav: dynamicNav,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Navigation);

var navStyle =
/*#__PURE__*/
Object(_emotion_css__WEBPACK_IMPORTED_MODULE_0__["default"])("position:relative;height:100vh;width:140px;margin-right:40px;display:flex;flex-flow:column;justify-content:center;ul{position:sticky;top:40px;h4{font-style:italic;margin-bottom:20px;}li{padding:8px 0;margin:2px 0;font-size:", _styles_text__WEBPACK_IMPORTED_MODULE_7__["fontSize"].small, ";color:", _styles_main__WEBPACK_IMPORTED_MODULE_6__["colors"].black60, ";&.subRoute{font-size:13px;padding-left:10px;border-left:solid 1px ", _styles_main__WEBPACK_IMPORTED_MODULE_6__["colors"].black05, ";}}};label:navStyle;" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yc2JlYXIvZGV2L3R5cGVmZWVsL2NvbXBvbmVudHMvbGF5b3V0cy9OYXZpZ2F0aW9uLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0Rm9CIiwiZmlsZSI6Ii9Vc2Vycy9yc2JlYXIvZGV2L3R5cGVmZWVsL2NvbXBvbmVudHMvbGF5b3V0cy9OYXZpZ2F0aW9uLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgRHluYW1pY05hdiBmcm9tIFwiLi9EeW5hbWljTmF2XCI7XG5cbmltcG9ydCBjc3MgZnJvbSBcIkBlbW90aW9uL2Nzc1wiO1xuaW1wb3J0IHsgY29sb3JzIH0gZnJvbSBcInN0eWxlcy9tYWluXCI7XG5pbXBvcnQgeyBmb250U2l6ZSB9IGZyb20gXCJzdHlsZXMvdGV4dFwiO1xuXG5jb25zdCBOYXZpZ2F0aW9uOiBGQzxhbnk+ID0gKHsgYXV0aFVzZXIsIGR5bmFtaWNOYXYgfSkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCBrZXlib2FyZFBhdGhzID0gcm91dGVyLnBhdGhuYW1lLmluY2x1ZGVzKFwiL2tleWJvYXJkXCIpO1xuICBjb25zdCBrZXlzZXRQYXRocyA9IHJvdXRlci5wYXRobmFtZS5pbmNsdWRlcyhcIi9rZXlzZXRcIik7XG5cbiAgcmV0dXJuIChcbiAgICA8bmF2IGNzcz17bmF2U3R5bGV9PlxuICAgICAgPHVsPlxuICAgICAgICA8aDQ+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgIDxhPnR5cGVmZWVsPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9oND5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIva2V5Ym9hcmRzXCI+XG4gICAgICAgICAgICA8YT5LZXlib2FyZHM8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2xpPlxuICAgICAgICB7a2V5Ym9hcmRQYXRocyAmJiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJzdWJSb3V0ZVwiPlxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2tleWJvYXJkcy9pbnRlcmVzdGNoZWNrc1wiPlxuICAgICAgICAgICAgICAgIDxhPkludGVyZXN0IGNoZWNrczwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJzdWJSb3V0ZVwiPlxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2tleWJvYXJkcy9jYXRhbG9nXCI+XG4gICAgICAgICAgICAgICAgPGE+Q2F0YWxvZzwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIva2V5c2V0c1wiPlxuICAgICAgICAgICAgPGE+S2V5c2V0czwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIHtrZXlzZXRQYXRocyAmJiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJzdWJSb3V0ZVwiPlxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2tleXNldHMvaW50ZXJlc3RjaGVja3NcIj5cbiAgICAgICAgICAgICAgICA8YT5JbnRlcmVzdCBjaGVja3M8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwic3ViUm91dGVcIj5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9rZXlzZXRzL21hcmtldFwiPlxuICAgICAgICAgICAgICAgIDxhPk1hcmtldDwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgICAgPGxpPkFydGlzYW5zPC9saT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY3JlYXRlXCI+XG4gICAgICAgICAgICA8YT5DcmVhdGU8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2xpPlxuICAgICAgICB7IWF1dGhVc2VyID8gKFxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbG9naW5cIj5cbiAgICAgICAgICAgICAgPGE+TG9nIGluPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPHNwYW4+Jm5ic3A7LyZuYnNwOzwvc3Bhbj5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2lnbnVwXCI+XG4gICAgICAgICAgICAgIDxhPlNpZ24gdXA8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2Rhc2hib2FyZFwiPlxuICAgICAgICAgICAgICA8YT5EYXNoYm9hcmQ8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgKX1cbiAgICAgICAgPER5bmFtaWNOYXYgZHluYW1pY05hdj17ZHluYW1pY05hdn0gLz5cbiAgICAgIDwvdWw+XG4gICAgPC9uYXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uO1xuXG5jb25zdCBuYXZTdHlsZSA9IGNzc2BcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTQwcHg7XG4gIG1hcmdpbi1yaWdodDogNDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gIHVsIHtcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIHRvcDogNDBweDtcblxuICAgIGg0IHtcbiAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgfVxuXG4gICAgbGkge1xuICAgICAgcGFkZGluZzogOHB4IDA7XG4gICAgICBtYXJnaW46IDJweCAwO1xuICAgICAgZm9udC1zaXplOiAke2ZvbnRTaXplLnNtYWxsfTtcbiAgICAgIGNvbG9yOiAke2NvbG9ycy5ibGFjazYwfTtcblxuICAgICAgJi5zdWJSb3V0ZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgICBib3JkZXItbGVmdDogc29saWQgMXB4ICR7Y29sb3JzLmJsYWNrMDV9O1xuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcbiJdfQ== */"));

/***/ })

})
//# sourceMappingURL=keysets.js.edd1ef4a819354d1a101.hot-update.js.map