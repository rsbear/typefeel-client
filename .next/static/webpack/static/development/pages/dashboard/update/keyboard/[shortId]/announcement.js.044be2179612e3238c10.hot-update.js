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
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _styles_inputs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../styles/inputs */ "./styles/inputs.tsx");


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
      lineNumber: 13
    },
    __self: this
  }, loading && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Loading..."), error && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Oops, an error occured"), !loading && data && data.keyboard && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("h1", {
    css: _styles_text__WEBPACK_IMPORTED_MODULE_5__["text"].heading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, kb.name, " announcement"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Create an announcement about changes or updates to your project"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(formik__WEBPACK_IMPORTED_MODULE_7__["Formik"], {
    initialValues: {
      message: ""
    },
    onSubmit: function onSubmit() {},
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, function (_ref2) {
    var values = _ref2.values;
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("form", {
      onSubmit: function onSubmit() {},
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_styles_inputs__WEBPACK_IMPORTED_MODULE_8__["FormikArea"], {
      icon: "icon ion-ios-information-circle",
      margins: "0 0 10px 0",
      type: "text",
      placeholder: "Annoucement message",
      name: "message",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }));
  })));
};

KeyboardMessage.getInitialProps =
/*#__PURE__*/
function () {
  var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
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
    return _ref3.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (KeyboardMessage);

/***/ }),

/***/ "./styles/inputs.tsx":
/*!***************************!*\
  !*** ./styles/inputs.tsx ***!
  \***************************/
/*! exports provided: inputBox, Input, FormikInput, TextArea, FormikArea, ReplyBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inputBox", function() { return inputBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return Input; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormikInput", function() { return FormikInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextArea", function() { return TextArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormikArea", function() { return FormikArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReplyBox", function() { return ReplyBox; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/css */ "./node_modules/@emotion/css/dist/css.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main */ "./styles/main.ts");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");


var _jsxFileName = "/Users/rsbear/dev/typefeel/styles/inputs.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




var inputBox =
/*#__PURE__*/

/*#__PURE__*/
Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["css"])("position:relative;height:36px;border:solid 1px ", _main__WEBPACK_IMPORTED_MODULE_4__["colors"].black20, ";border-radius:4px;display:flex;align-items:center;width:100%;i{margin:0 15px;}input{position:absolute;width:100%;height:100%;left:0;top:0;font-size:13px;padding-left:40px;outline:none;border:none;background-color:transparent;}&:focus-within{box-shadow:0px 0px 0px 2px rgba(20,240,160,0.5);border:solid 1px rgba(20,240,160,0.5);};label:inputBox;" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yc2JlYXIvZGV2L3R5cGVmZWVsL3N0eWxlcy9pbnB1dHMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUsyQiIsImZpbGUiOiIvVXNlcnMvcnNiZWFyL2Rldi90eXBlZmVlbC9zdHlsZXMvaW5wdXRzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGpzeCwgY3NzIH0gZnJvbSBcIkBlbW90aW9uL2NvcmVcIjtcbmltcG9ydCB7IGNvbG9ycywgbWFyZ2lucyB9IGZyb20gXCIuL21haW5cIjtcbmltcG9ydCB7IEZDIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGaWVsZCB9IGZyb20gXCJmb3JtaWtcIjtcblxuZXhwb3J0IGNvbnN0IGlucHV0Qm94ID0gY3NzYFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMzZweDtcbiAgYm9yZGVyOiBzb2xpZCAxcHggJHtjb2xvcnMuYmxhY2syMH07XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgaSB7XG4gICAgbWFyZ2luOiAwIDE1cHg7XG4gIH1cblxuICBpbnB1dCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG5cbiAgJjpmb2N1cy13aXRoaW4ge1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDJweCByZ2JhKDIwLCAyNDAsIDE2MCwgMC41KTtcbiAgICBib3JkZXI6IHNvbGlkIDFweCByZ2JhKDIwLCAyNDAsIDE2MCwgMC41KTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IElucHV0OiBGQzxhbnk+ID0gKHByb3BzOiBhbnkpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNzcz17W2lucHV0Qm94LCBtYXJnaW5zKHByb3BzLm1hcmdpbnMpXX0+XG4gICAgICA8aSBjbGFzc05hbWU9e3Byb3BzLmljb259IC8+XG4gICAgICA8aW5wdXQgey4uLnByb3BzfSAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IEZvcm1pa0lucHV0OiBGQzxhbnk+ID0gKHByb3BzOiBhbnkpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNzcz17W2lucHV0Qm94LCBtYXJnaW5zKHByb3BzLm1hcmdpbnMpXX0+XG4gICAgICA8aSBjbGFzc05hbWU9e3Byb3BzLmljb259IC8+XG4gICAgICA8RmllbGQgey4uLnByb3BzfSAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgdGV4dEFyZWEgPSBjc3NgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWluLWhlaWdodDogOTZweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMXB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJvcmRlcjogc29saWQgMXB4ICR7Y29sb3JzLmJsYWNrMjB9O1xuXG4gIHRleHRhcmVhIHtcbiAgICByZXNpemU6IG5vbmU7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiAwO1xuXG4gICAgJjpmb2N1cyB7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgYm9yZGVyOiAwO1xuICAgIH1cbiAgfVxuXG4gICY6Zm9jdXMtd2l0aGluIHtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAycHggcmdiYSgyMCwgMjQwLCAxNjAsIDAuNSk7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggcmdiYSgyMCwgMjQwLCAxNjAsIDAuNSk7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBUZXh0QXJlYTogRkM8YW55PiA9IChwcm9wczogYW55KSA9PiAoXG4gIDxkaXYgY3NzPXtbdGV4dEFyZWEsIG1hcmdpbnMocHJvcHMubWFyZ2lucyldfT5cbiAgICA8dGV4dGFyZWEgcGxhY2Vob2xkZXI9XCJCZSBkZXNjcmlwdGl2ZVwiIHsuLi5wcm9wc30+PC90ZXh0YXJlYT5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgY29uc3QgRm9ybWlrQXJlYTogRkM8YW55PiA9IChwcm9wczogYW55KSA9PiAoXG4gIDxkaXYgY3NzPXtbdGV4dEFyZWEsIG1hcmdpbnMocHJvcHMubWFyZ2lucyldfT5cbiAgICA8RmllbGQgYXM9XCJ0ZXh0YXJlYVwiIHsuLi5wcm9wc30+PC9GaWVsZD5cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBjaGF0Qm94ID0gY3NzYFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1pbi1oZWlnaHQ6IDk2cHg7XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDFweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXI6IHNvbGlkIDFweCAke2NvbG9ycy5ibGFjazIwfTtcblxuICB0ZXh0YXJlYSB7XG4gICAgcmVzaXplOiBub25lO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogMDtcblxuICAgICY6Zm9jdXMge1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIGJvcmRlcjogMDtcbiAgICB9XG4gIH1cblxuICAmOmZvY3VzLXdpdGhpbiB7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMnB4IHJnYmEoMjAsIDI0MCwgMTYwLCAwLjUpO1xuICAgIGJvcmRlcjogc29saWQgMXB4IHJnYmEoMjAsIDI0MCwgMTYwLCAwLjUpO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgUmVwbHlCb3g6IEZDPGFueT4gPSAocHJvcHM6IGFueSkgPT4gKFxuICA8ZGl2IGNzcz17W2NoYXRCb3gsIG1hcmdpbnMocHJvcHMubWFyZ2lucyldfT5cbiAgICA8dGV4dGFyZWEgey4uLnByb3BzfSAvPlxuICA8L2Rpdj5cbik7XG4iXX0= */"), ";label:inputBox;");
var Input = function Input(props) {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", {
    css:
    /*#__PURE__*/
    Object(_emotion_css__WEBPACK_IMPORTED_MODULE_1__["default"])([inputBox, Object(_main__WEBPACK_IMPORTED_MODULE_4__["margins"])(props.margins)], ";label:Input;" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yc2JlYXIvZGV2L3R5cGVmZWVsL3N0eWxlcy9pbnB1dHMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVDUyIsImZpbGUiOiIvVXNlcnMvcnNiZWFyL2Rldi90eXBlZmVlbC9zdHlsZXMvaW5wdXRzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGpzeCwgY3NzIH0gZnJvbSBcIkBlbW90aW9uL2NvcmVcIjtcbmltcG9ydCB7IGNvbG9ycywgbWFyZ2lucyB9IGZyb20gXCIuL21haW5cIjtcbmltcG9ydCB7IEZDIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGaWVsZCB9IGZyb20gXCJmb3JtaWtcIjtcblxuZXhwb3J0IGNvbnN0IGlucHV0Qm94ID0gY3NzYFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMzZweDtcbiAgYm9yZGVyOiBzb2xpZCAxcHggJHtjb2xvcnMuYmxhY2syMH07XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgaSB7XG4gICAgbWFyZ2luOiAwIDE1cHg7XG4gIH1cblxuICBpbnB1dCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG5cbiAgJjpmb2N1cy13aXRoaW4ge1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDJweCByZ2JhKDIwLCAyNDAsIDE2MCwgMC41KTtcbiAgICBib3JkZXI6IHNvbGlkIDFweCByZ2JhKDIwLCAyNDAsIDE2MCwgMC41KTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IElucHV0OiBGQzxhbnk+ID0gKHByb3BzOiBhbnkpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNzcz17W2lucHV0Qm94LCBtYXJnaW5zKHByb3BzLm1hcmdpbnMpXX0+XG4gICAgICA8aSBjbGFzc05hbWU9e3Byb3BzLmljb259IC8+XG4gICAgICA8aW5wdXQgey4uLnByb3BzfSAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IEZvcm1pa0lucHV0OiBGQzxhbnk+ID0gKHByb3BzOiBhbnkpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNzcz17W2lucHV0Qm94LCBtYXJnaW5zKHByb3BzLm1hcmdpbnMpXX0+XG4gICAgICA8aSBjbGFzc05hbWU9e3Byb3BzLmljb259IC8+XG4gICAgICA8RmllbGQgey4uLnByb3BzfSAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgdGV4dEFyZWEgPSBjc3NgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWluLWhlaWdodDogOTZweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMXB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJvcmRlcjogc29saWQgMXB4ICR7Y29sb3JzLmJsYWNrMjB9O1xuXG4gIHRleHRhcmVhIHtcbiAgICByZXNpemU6IG5vbmU7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiAwO1xuXG4gICAgJjpmb2N1cyB7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgYm9yZGVyOiAwO1xuICAgIH1cbiAgfVxuXG4gICY6Zm9jdXMtd2l0aGluIHtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAycHggcmdiYSgyMCwgMjQwLCAxNjAsIDAuNSk7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggcmdiYSgyMCwgMjQwLCAxNjAsIDAuNSk7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBUZXh0QXJlYTogRkM8YW55PiA9IChwcm9wczogYW55KSA9PiAoXG4gIDxkaXYgY3NzPXtbdGV4dEFyZWEsIG1hcmdpbnMocHJvcHMubWFyZ2lucyldfT5cbiAgICA8dGV4dGFyZWEgcGxhY2Vob2xkZXI9XCJCZSBkZXNjcmlwdGl2ZVwiIHsuLi5wcm9wc30+PC90ZXh0YXJlYT5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgY29uc3QgRm9ybWlrQXJlYTogRkM8YW55PiA9IChwcm9wczogYW55KSA9PiAoXG4gIDxkaXYgY3NzPXtbdGV4dEFyZWEsIG1hcmdpbnMocHJvcHMubWFyZ2lucyldfT5cbiAgICA8RmllbGQgYXM9XCJ0ZXh0YXJlYVwiIHsuLi5wcm9wc30+PC9GaWVsZD5cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBjaGF0Qm94ID0gY3NzYFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1pbi1oZWlnaHQ6IDk2cHg7XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDFweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXI6IHNvbGlkIDFweCAke2NvbG9ycy5ibGFjazIwfTtcblxuICB0ZXh0YXJlYSB7XG4gICAgcmVzaXplOiBub25lO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogMDtcblxuICAgICY6Zm9jdXMge1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIGJvcmRlcjogMDtcbiAgICB9XG4gIH1cblxuICAmOmZvY3VzLXdpdGhpbiB7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMnB4IHJnYmEoMjAsIDI0MCwgMTYwLCAwLjUpO1xuICAgIGJvcmRlcjogc29saWQgMXB4IHJnYmEoMjAsIDI0MCwgMTYwLCAwLjUpO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgUmVwbHlCb3g6IEZDPGFueT4gPSAocHJvcHM6IGFueSkgPT4gKFxuICA8ZGl2IGNzcz17W2NoYXRCb3gsIG1hcmdpbnMocHJvcHMubWFyZ2lucyldfT5cbiAgICA8dGV4dGFyZWEgey4uLnByb3BzfSAvPlxuICA8L2Rpdj5cbik7XG4iXX0= */")),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("i", {
    className: props.icon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("input", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  })));
};
var FormikInput = function FormikInput(props) {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", {
    css:
    /*#__PURE__*/
    Object(_emotion_css__WEBPACK_IMPORTED_MODULE_1__["default"])([inputBox, Object(_main__WEBPACK_IMPORTED_MODULE_4__["margins"])(props.margins)], ";label:FormikInput;" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yc2JlYXIvZGV2L3R5cGVmZWVsL3N0eWxlcy9pbnB1dHMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdEUyIsImZpbGUiOiIvVXNlcnMvcnNiZWFyL2Rldi90eXBlZmVlbC9zdHlsZXMvaW5wdXRzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGpzeCwgY3NzIH0gZnJvbSBcIkBlbW90aW9uL2NvcmVcIjtcbmltcG9ydCB7IGNvbG9ycywgbWFyZ2lucyB9IGZyb20gXCIuL21haW5cIjtcbmltcG9ydCB7IEZDIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGaWVsZCB9IGZyb20gXCJmb3JtaWtcIjtcblxuZXhwb3J0IGNvbnN0IGlucHV0Qm94ID0gY3NzYFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMzZweDtcbiAgYm9yZGVyOiBzb2xpZCAxcHggJHtjb2xvcnMuYmxhY2syMH07XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgaSB7XG4gICAgbWFyZ2luOiAwIDE1cHg7XG4gIH1cblxuICBpbnB1dCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG5cbiAgJjpmb2N1cy13aXRoaW4ge1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDJweCByZ2JhKDIwLCAyNDAsIDE2MCwgMC41KTtcbiAgICBib3JkZXI6IHNvbGlkIDFweCByZ2JhKDIwLCAyNDAsIDE2MCwgMC41KTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IElucHV0OiBGQzxhbnk+ID0gKHByb3BzOiBhbnkpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNzcz17W2lucHV0Qm94LCBtYXJnaW5zKHByb3BzLm1hcmdpbnMpXX0+XG4gICAgICA8aSBjbGFzc05hbWU9e3Byb3BzLmljb259IC8+XG4gICAgICA8aW5wdXQgey4uLnByb3BzfSAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IEZvcm1pa0lucHV0OiBGQzxhbnk+ID0gKHByb3BzOiBhbnkpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNzcz17W2lucHV0Qm94LCBtYXJnaW5zKHByb3BzLm1hcmdpbnMpXX0+XG4gICAgICA8aSBjbGFzc05hbWU9e3Byb3BzLmljb259IC8+XG4gICAgICA8RmllbGQgey4uLnByb3BzfSAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgdGV4dEFyZWEgPSBjc3NgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWluLWhlaWdodDogOTZweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMXB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJvcmRlcjogc29saWQgMXB4ICR7Y29sb3JzLmJsYWNrMjB9O1xuXG4gIHRleHRhcmVhIHtcbiAgICByZXNpemU6IG5vbmU7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiAwO1xuXG4gICAgJjpmb2N1cyB7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgYm9yZGVyOiAwO1xuICAgIH1cbiAgfVxuXG4gICY6Zm9jdXMtd2l0aGluIHtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAycHggcmdiYSgyMCwgMjQwLCAxNjAsIDAuNSk7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggcmdiYSgyMCwgMjQwLCAxNjAsIDAuNSk7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBUZXh0QXJlYTogRkM8YW55PiA9IChwcm9wczogYW55KSA9PiAoXG4gIDxkaXYgY3NzPXtbdGV4dEFyZWEsIG1hcmdpbnMocHJvcHMubWFyZ2lucyldfT5cbiAgICA8dGV4dGFyZWEgcGxhY2Vob2xkZXI9XCJCZSBkZXNjcmlwdGl2ZVwiIHsuLi5wcm9wc30+PC90ZXh0YXJlYT5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgY29uc3QgRm9ybWlrQXJlYTogRkM8YW55PiA9IChwcm9wczogYW55KSA9PiAoXG4gIDxkaXYgY3NzPXtbdGV4dEFyZWEsIG1hcmdpbnMocHJvcHMubWFyZ2lucyldfT5cbiAgICA8RmllbGQgYXM9XCJ0ZXh0YXJlYVwiIHsuLi5wcm9wc30+PC9GaWVsZD5cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBjaGF0Qm94ID0gY3NzYFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1pbi1oZWlnaHQ6IDk2cHg7XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDFweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXI6IHNvbGlkIDFweCAke2NvbG9ycy5ibGFjazIwfTtcblxuICB0ZXh0YXJlYSB7XG4gICAgcmVzaXplOiBub25lO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogMDtcblxuICAgICY6Zm9jdXMge1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIGJvcmRlcjogMDtcbiAgICB9XG4gIH1cblxuICAmOmZvY3VzLXdpdGhpbiB7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMnB4IHJnYmEoMjAsIDI0MCwgMTYwLCAwLjUpO1xuICAgIGJvcmRlcjogc29saWQgMXB4IHJnYmEoMjAsIDI0MCwgMTYwLCAwLjUpO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgUmVwbHlCb3g6IEZDPGFueT4gPSAocHJvcHM6IGFueSkgPT4gKFxuICA8ZGl2IGNzcz17W2NoYXRCb3gsIG1hcmdpbnMocHJvcHMubWFyZ2lucyldfT5cbiAgICA8dGV4dGFyZWEgey4uLnByb3BzfSAvPlxuICA8L2Rpdj5cbik7XG4iXX0= */")),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("i", {
    className: props.icon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(formik__WEBPACK_IMPORTED_MODULE_5__["Field"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  })));
};
var textArea =
/*#__PURE__*/

/*#__PURE__*/
Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["css"])("position:relative;min-height:96px;height:auto;width:100%;padding:1px;border-radius:4px;border:solid 1px ", _main__WEBPACK_IMPORTED_MODULE_4__["colors"].black20, ";textarea{resize:none;padding:15px;height:100%;width:100%;border:0;&:focus{outline:none;border:0;}}&:focus-within{box-shadow:0px 0px 0px 2px rgba(20,240,160,0.5);border:solid 1px rgba(20,240,160,0.5);};label:textArea;" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yc2JlYXIvZGV2L3R5cGVmZWVsL3N0eWxlcy9pbnB1dHMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVEb0IiLCJmaWxlIjoiL1VzZXJzL3JzYmVhci9kZXYvdHlwZWZlZWwvc3R5bGVzL2lucHV0cy50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBqc3gsIGNzcyB9IGZyb20gXCJAZW1vdGlvbi9jb3JlXCI7XG5pbXBvcnQgeyBjb2xvcnMsIG1hcmdpbnMgfSBmcm9tIFwiLi9tYWluXCI7XG5pbXBvcnQgeyBGQyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRmllbGQgfSBmcm9tIFwiZm9ybWlrXCI7XG5cbmV4cG9ydCBjb25zdCBpbnB1dEJveCA9IGNzc2BcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDM2cHg7XG4gIGJvcmRlcjogc29saWQgMXB4ICR7Y29sb3JzLmJsYWNrMjB9O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuXG4gIGkge1xuICAgIG1hcmdpbjogMCAxNXB4O1xuICB9XG5cbiAgaW5wdXQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIHBhZGRpbmctbGVmdDogNDBweDtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxuXG4gICY6Zm9jdXMtd2l0aGluIHtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAycHggcmdiYSgyMCwgMjQwLCAxNjAsIDAuNSk7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggcmdiYSgyMCwgMjQwLCAxNjAsIDAuNSk7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBJbnB1dDogRkM8YW55PiA9IChwcm9wczogYW55KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjc3M9e1tpbnB1dEJveCwgbWFyZ2lucyhwcm9wcy5tYXJnaW5zKV19PlxuICAgICAgPGkgY2xhc3NOYW1lPXtwcm9wcy5pY29ufSAvPlxuICAgICAgPGlucHV0IHsuLi5wcm9wc30gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBGb3JtaWtJbnB1dDogRkM8YW55PiA9IChwcm9wczogYW55KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjc3M9e1tpbnB1dEJveCwgbWFyZ2lucyhwcm9wcy5tYXJnaW5zKV19PlxuICAgICAgPGkgY2xhc3NOYW1lPXtwcm9wcy5pY29ufSAvPlxuICAgICAgPEZpZWxkIHsuLi5wcm9wc30gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IHRleHRBcmVhID0gY3NzYFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1pbi1oZWlnaHQ6IDk2cHg7XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDFweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXI6IHNvbGlkIDFweCAke2NvbG9ycy5ibGFjazIwfTtcblxuICB0ZXh0YXJlYSB7XG4gICAgcmVzaXplOiBub25lO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogMDtcblxuICAgICY6Zm9jdXMge1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIGJvcmRlcjogMDtcbiAgICB9XG4gIH1cblxuICAmOmZvY3VzLXdpdGhpbiB7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMnB4IHJnYmEoMjAsIDI0MCwgMTYwLCAwLjUpO1xuICAgIGJvcmRlcjogc29saWQgMXB4IHJnYmEoMjAsIDI0MCwgMTYwLCAwLjUpO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgVGV4dEFyZWE6IEZDPGFueT4gPSAocHJvcHM6IGFueSkgPT4gKFxuICA8ZGl2IGNzcz17W3RleHRBcmVhLCBtYXJnaW5zKHByb3BzLm1hcmdpbnMpXX0+XG4gICAgPHRleHRhcmVhIHBsYWNlaG9sZGVyPVwiQmUgZGVzY3JpcHRpdmVcIiB7Li4ucHJvcHN9PjwvdGV4dGFyZWE+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGNvbnN0IEZvcm1pa0FyZWE6IEZDPGFueT4gPSAocHJvcHM6IGFueSkgPT4gKFxuICA8ZGl2IGNzcz17W3RleHRBcmVhLCBtYXJnaW5zKHByb3BzLm1hcmdpbnMpXX0+XG4gICAgPEZpZWxkIGFzPVwidGV4dGFyZWFcIiB7Li4ucHJvcHN9PjwvRmllbGQ+XG4gIDwvZGl2PlxuKTtcblxuY29uc3QgY2hhdEJveCA9IGNzc2BcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtaW4taGVpZ2h0OiA5NnB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyOiBzb2xpZCAxcHggJHtjb2xvcnMuYmxhY2syMH07XG5cbiAgdGV4dGFyZWEge1xuICAgIHJlc2l6ZTogbm9uZTtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXI6IDA7XG5cbiAgICAmOmZvY3VzIHtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICBib3JkZXI6IDA7XG4gICAgfVxuICB9XG5cbiAgJjpmb2N1cy13aXRoaW4ge1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDJweCByZ2JhKDIwLCAyNDAsIDE2MCwgMC41KTtcbiAgICBib3JkZXI6IHNvbGlkIDFweCByZ2JhKDIwLCAyNDAsIDE2MCwgMC41KTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IFJlcGx5Qm94OiBGQzxhbnk+ID0gKHByb3BzOiBhbnkpID0+IChcbiAgPGRpdiBjc3M9e1tjaGF0Qm94LCBtYXJnaW5zKHByb3BzLm1hcmdpbnMpXX0+XG4gICAgPHRleHRhcmVhIHsuLi5wcm9wc30gLz5cbiAgPC9kaXY+XG4pO1xuIl19 */"), ";label:textArea;");
var TextArea = function TextArea(props) {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", {
    css:
    /*#__PURE__*/
    Object(_emotion_css__WEBPACK_IMPORTED_MODULE_1__["default"])([textArea, Object(_main__WEBPACK_IMPORTED_MODULE_4__["margins"])(props.margins)], ";label:TextArea;" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yc2JlYXIvZGV2L3R5cGVmZWVsL3N0eWxlcy9pbnB1dHMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9GTyIsImZpbGUiOiIvVXNlcnMvcnNiZWFyL2Rldi90eXBlZmVlbC9zdHlsZXMvaW5wdXRzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGpzeCwgY3NzIH0gZnJvbSBcIkBlbW90aW9uL2NvcmVcIjtcbmltcG9ydCB7IGNvbG9ycywgbWFyZ2lucyB9IGZyb20gXCIuL21haW5cIjtcbmltcG9ydCB7IEZDIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGaWVsZCB9IGZyb20gXCJmb3JtaWtcIjtcblxuZXhwb3J0IGNvbnN0IGlucHV0Qm94ID0gY3NzYFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMzZweDtcbiAgYm9yZGVyOiBzb2xpZCAxcHggJHtjb2xvcnMuYmxhY2syMH07XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgaSB7XG4gICAgbWFyZ2luOiAwIDE1cHg7XG4gIH1cblxuICBpbnB1dCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG5cbiAgJjpmb2N1cy13aXRoaW4ge1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDJweCByZ2JhKDIwLCAyNDAsIDE2MCwgMC41KTtcbiAgICBib3JkZXI6IHNvbGlkIDFweCByZ2JhKDIwLCAyNDAsIDE2MCwgMC41KTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IElucHV0OiBGQzxhbnk+ID0gKHByb3BzOiBhbnkpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNzcz17W2lucHV0Qm94LCBtYXJnaW5zKHByb3BzLm1hcmdpbnMpXX0+XG4gICAgICA8aSBjbGFzc05hbWU9e3Byb3BzLmljb259IC8+XG4gICAgICA8aW5wdXQgey4uLnByb3BzfSAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IEZvcm1pa0lucHV0OiBGQzxhbnk+ID0gKHByb3BzOiBhbnkpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNzcz17W2lucHV0Qm94LCBtYXJnaW5zKHByb3BzLm1hcmdpbnMpXX0+XG4gICAgICA8aSBjbGFzc05hbWU9e3Byb3BzLmljb259IC8+XG4gICAgICA8RmllbGQgey4uLnByb3BzfSAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgdGV4dEFyZWEgPSBjc3NgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWluLWhlaWdodDogOTZweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMXB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJvcmRlcjogc29saWQgMXB4ICR7Y29sb3JzLmJsYWNrMjB9O1xuXG4gIHRleHRhcmVhIHtcbiAgICByZXNpemU6IG5vbmU7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiAwO1xuXG4gICAgJjpmb2N1cyB7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgYm9yZGVyOiAwO1xuICAgIH1cbiAgfVxuXG4gICY6Zm9jdXMtd2l0aGluIHtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAycHggcmdiYSgyMCwgMjQwLCAxNjAsIDAuNSk7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggcmdiYSgyMCwgMjQwLCAxNjAsIDAuNSk7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBUZXh0QXJlYTogRkM8YW55PiA9IChwcm9wczogYW55KSA9PiAoXG4gIDxkaXYgY3NzPXtbdGV4dEFyZWEsIG1hcmdpbnMocHJvcHMubWFyZ2lucyldfT5cbiAgICA8dGV4dGFyZWEgcGxhY2Vob2xkZXI9XCJCZSBkZXNjcmlwdGl2ZVwiIHsuLi5wcm9wc30+PC90ZXh0YXJlYT5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgY29uc3QgRm9ybWlrQXJlYTogRkM8YW55PiA9IChwcm9wczogYW55KSA9PiAoXG4gIDxkaXYgY3NzPXtbdGV4dEFyZWEsIG1hcmdpbnMocHJvcHMubWFyZ2lucyldfT5cbiAgICA8RmllbGQgYXM9XCJ0ZXh0YXJlYVwiIHsuLi5wcm9wc30+PC9GaWVsZD5cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBjaGF0Qm94ID0gY3NzYFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1pbi1oZWlnaHQ6IDk2cHg7XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDFweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXI6IHNvbGlkIDFweCAke2NvbG9ycy5ibGFjazIwfTtcblxuICB0ZXh0YXJlYSB7XG4gICAgcmVzaXplOiBub25lO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogMDtcblxuICAgICY6Zm9jdXMge1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIGJvcmRlcjogMDtcbiAgICB9XG4gIH1cblxuICAmOmZvY3VzLXdpdGhpbiB7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMnB4IHJnYmEoMjAsIDI0MCwgMTYwLCAwLjUpO1xuICAgIGJvcmRlcjogc29saWQgMXB4IHJnYmEoMjAsIDI0MCwgMTYwLCAwLjUpO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgUmVwbHlCb3g6IEZDPGFueT4gPSAocHJvcHM6IGFueSkgPT4gKFxuICA8ZGl2IGNzcz17W2NoYXRCb3gsIG1hcmdpbnMocHJvcHMubWFyZ2lucyldfT5cbiAgICA8dGV4dGFyZWEgey4uLnByb3BzfSAvPlxuICA8L2Rpdj5cbik7XG4iXX0= */")),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("textarea", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    placeholder: "Be descriptive"
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  })));
};
var FormikArea = function FormikArea(props) {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", {
    css:
    /*#__PURE__*/
    Object(_emotion_css__WEBPACK_IMPORTED_MODULE_1__["default"])([textArea, Object(_main__WEBPACK_IMPORTED_MODULE_4__["margins"])(props.margins)], ";label:FormikArea;" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yc2JlYXIvZGV2L3R5cGVmZWVsL3N0eWxlcy9pbnB1dHMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBGTyIsImZpbGUiOiIvVXNlcnMvcnNiZWFyL2Rldi90eXBlZmVlbC9zdHlsZXMvaW5wdXRzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGpzeCwgY3NzIH0gZnJvbSBcIkBlbW90aW9uL2NvcmVcIjtcbmltcG9ydCB7IGNvbG9ycywgbWFyZ2lucyB9IGZyb20gXCIuL21haW5cIjtcbmltcG9ydCB7IEZDIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGaWVsZCB9IGZyb20gXCJmb3JtaWtcIjtcblxuZXhwb3J0IGNvbnN0IGlucHV0Qm94ID0gY3NzYFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMzZweDtcbiAgYm9yZGVyOiBzb2xpZCAxcHggJHtjb2xvcnMuYmxhY2syMH07XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgaSB7XG4gICAgbWFyZ2luOiAwIDE1cHg7XG4gIH1cblxuICBpbnB1dCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG5cbiAgJjpmb2N1cy13aXRoaW4ge1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDJweCByZ2JhKDIwLCAyNDAsIDE2MCwgMC41KTtcbiAgICBib3JkZXI6IHNvbGlkIDFweCByZ2JhKDIwLCAyNDAsIDE2MCwgMC41KTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IElucHV0OiBGQzxhbnk+ID0gKHByb3BzOiBhbnkpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNzcz17W2lucHV0Qm94LCBtYXJnaW5zKHByb3BzLm1hcmdpbnMpXX0+XG4gICAgICA8aSBjbGFzc05hbWU9e3Byb3BzLmljb259IC8+XG4gICAgICA8aW5wdXQgey4uLnByb3BzfSAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IEZvcm1pa0lucHV0OiBGQzxhbnk+ID0gKHByb3BzOiBhbnkpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNzcz17W2lucHV0Qm94LCBtYXJnaW5zKHByb3BzLm1hcmdpbnMpXX0+XG4gICAgICA8aSBjbGFzc05hbWU9e3Byb3BzLmljb259IC8+XG4gICAgICA8RmllbGQgey4uLnByb3BzfSAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgdGV4dEFyZWEgPSBjc3NgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWluLWhlaWdodDogOTZweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMXB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJvcmRlcjogc29saWQgMXB4ICR7Y29sb3JzLmJsYWNrMjB9O1xuXG4gIHRleHRhcmVhIHtcbiAgICByZXNpemU6IG5vbmU7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiAwO1xuXG4gICAgJjpmb2N1cyB7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgYm9yZGVyOiAwO1xuICAgIH1cbiAgfVxuXG4gICY6Zm9jdXMtd2l0aGluIHtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAycHggcmdiYSgyMCwgMjQwLCAxNjAsIDAuNSk7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggcmdiYSgyMCwgMjQwLCAxNjAsIDAuNSk7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBUZXh0QXJlYTogRkM8YW55PiA9IChwcm9wczogYW55KSA9PiAoXG4gIDxkaXYgY3NzPXtbdGV4dEFyZWEsIG1hcmdpbnMocHJvcHMubWFyZ2lucyldfT5cbiAgICA8dGV4dGFyZWEgcGxhY2Vob2xkZXI9XCJCZSBkZXNjcmlwdGl2ZVwiIHsuLi5wcm9wc30+PC90ZXh0YXJlYT5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgY29uc3QgRm9ybWlrQXJlYTogRkM8YW55PiA9IChwcm9wczogYW55KSA9PiAoXG4gIDxkaXYgY3NzPXtbdGV4dEFyZWEsIG1hcmdpbnMocHJvcHMubWFyZ2lucyldfT5cbiAgICA8RmllbGQgYXM9XCJ0ZXh0YXJlYVwiIHsuLi5wcm9wc30+PC9GaWVsZD5cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBjaGF0Qm94ID0gY3NzYFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1pbi1oZWlnaHQ6IDk2cHg7XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDFweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXI6IHNvbGlkIDFweCAke2NvbG9ycy5ibGFjazIwfTtcblxuICB0ZXh0YXJlYSB7XG4gICAgcmVzaXplOiBub25lO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogMDtcblxuICAgICY6Zm9jdXMge1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIGJvcmRlcjogMDtcbiAgICB9XG4gIH1cblxuICAmOmZvY3VzLXdpdGhpbiB7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMnB4IHJnYmEoMjAsIDI0MCwgMTYwLCAwLjUpO1xuICAgIGJvcmRlcjogc29saWQgMXB4IHJnYmEoMjAsIDI0MCwgMTYwLCAwLjUpO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgUmVwbHlCb3g6IEZDPGFueT4gPSAocHJvcHM6IGFueSkgPT4gKFxuICA8ZGl2IGNzcz17W2NoYXRCb3gsIG1hcmdpbnMocHJvcHMubWFyZ2lucyldfT5cbiAgICA8dGV4dGFyZWEgey4uLnByb3BzfSAvPlxuICA8L2Rpdj5cbik7XG4iXX0= */")),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(formik__WEBPACK_IMPORTED_MODULE_5__["Field"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    as: "textarea"
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  })));
};
var chatBox =
/*#__PURE__*/

/*#__PURE__*/
Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["css"])("position:relative;min-height:96px;height:auto;width:100%;padding:1px;border-radius:4px;border:solid 1px ", _main__WEBPACK_IMPORTED_MODULE_4__["colors"].black20, ";textarea{resize:none;padding:15px;height:100%;width:100%;border:0;&:focus{outline:none;border:0;}}&:focus-within{box-shadow:0px 0px 0px 2px rgba(20,240,160,0.5);border:solid 1px rgba(20,240,160,0.5);};label:chatBox;" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yc2JlYXIvZGV2L3R5cGVmZWVsL3N0eWxlcy9pbnB1dHMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStGbUIiLCJmaWxlIjoiL1VzZXJzL3JzYmVhci9kZXYvdHlwZWZlZWwvc3R5bGVzL2lucHV0cy50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBqc3gsIGNzcyB9IGZyb20gXCJAZW1vdGlvbi9jb3JlXCI7XG5pbXBvcnQgeyBjb2xvcnMsIG1hcmdpbnMgfSBmcm9tIFwiLi9tYWluXCI7XG5pbXBvcnQgeyBGQyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRmllbGQgfSBmcm9tIFwiZm9ybWlrXCI7XG5cbmV4cG9ydCBjb25zdCBpbnB1dEJveCA9IGNzc2BcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDM2cHg7XG4gIGJvcmRlcjogc29saWQgMXB4ICR7Y29sb3JzLmJsYWNrMjB9O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuXG4gIGkge1xuICAgIG1hcmdpbjogMCAxNXB4O1xuICB9XG5cbiAgaW5wdXQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIHBhZGRpbmctbGVmdDogNDBweDtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxuXG4gICY6Zm9jdXMtd2l0aGluIHtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAycHggcmdiYSgyMCwgMjQwLCAxNjAsIDAuNSk7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggcmdiYSgyMCwgMjQwLCAxNjAsIDAuNSk7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBJbnB1dDogRkM8YW55PiA9IChwcm9wczogYW55KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjc3M9e1tpbnB1dEJveCwgbWFyZ2lucyhwcm9wcy5tYXJnaW5zKV19PlxuICAgICAgPGkgY2xhc3NOYW1lPXtwcm9wcy5pY29ufSAvPlxuICAgICAgPGlucHV0IHsuLi5wcm9wc30gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBGb3JtaWtJbnB1dDogRkM8YW55PiA9IChwcm9wczogYW55KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjc3M9e1tpbnB1dEJveCwgbWFyZ2lucyhwcm9wcy5tYXJnaW5zKV19PlxuICAgICAgPGkgY2xhc3NOYW1lPXtwcm9wcy5pY29ufSAvPlxuICAgICAgPEZpZWxkIHsuLi5wcm9wc30gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IHRleHRBcmVhID0gY3NzYFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1pbi1oZWlnaHQ6IDk2cHg7XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDFweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXI6IHNvbGlkIDFweCAke2NvbG9ycy5ibGFjazIwfTtcblxuICB0ZXh0YXJlYSB7XG4gICAgcmVzaXplOiBub25lO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogMDtcblxuICAgICY6Zm9jdXMge1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIGJvcmRlcjogMDtcbiAgICB9XG4gIH1cblxuICAmOmZvY3VzLXdpdGhpbiB7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMnB4IHJnYmEoMjAsIDI0MCwgMTYwLCAwLjUpO1xuICAgIGJvcmRlcjogc29saWQgMXB4IHJnYmEoMjAsIDI0MCwgMTYwLCAwLjUpO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgVGV4dEFyZWE6IEZDPGFueT4gPSAocHJvcHM6IGFueSkgPT4gKFxuICA8ZGl2IGNzcz17W3RleHRBcmVhLCBtYXJnaW5zKHByb3BzLm1hcmdpbnMpXX0+XG4gICAgPHRleHRhcmVhIHBsYWNlaG9sZGVyPVwiQmUgZGVzY3JpcHRpdmVcIiB7Li4ucHJvcHN9PjwvdGV4dGFyZWE+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGNvbnN0IEZvcm1pa0FyZWE6IEZDPGFueT4gPSAocHJvcHM6IGFueSkgPT4gKFxuICA8ZGl2IGNzcz17W3RleHRBcmVhLCBtYXJnaW5zKHByb3BzLm1hcmdpbnMpXX0+XG4gICAgPEZpZWxkIGFzPVwidGV4dGFyZWFcIiB7Li4ucHJvcHN9PjwvRmllbGQ+XG4gIDwvZGl2PlxuKTtcblxuY29uc3QgY2hhdEJveCA9IGNzc2BcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtaW4taGVpZ2h0OiA5NnB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyOiBzb2xpZCAxcHggJHtjb2xvcnMuYmxhY2syMH07XG5cbiAgdGV4dGFyZWEge1xuICAgIHJlc2l6ZTogbm9uZTtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXI6IDA7XG5cbiAgICAmOmZvY3VzIHtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICBib3JkZXI6IDA7XG4gICAgfVxuICB9XG5cbiAgJjpmb2N1cy13aXRoaW4ge1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDJweCByZ2JhKDIwLCAyNDAsIDE2MCwgMC41KTtcbiAgICBib3JkZXI6IHNvbGlkIDFweCByZ2JhKDIwLCAyNDAsIDE2MCwgMC41KTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IFJlcGx5Qm94OiBGQzxhbnk+ID0gKHByb3BzOiBhbnkpID0+IChcbiAgPGRpdiBjc3M9e1tjaGF0Qm94LCBtYXJnaW5zKHByb3BzLm1hcmdpbnMpXX0+XG4gICAgPHRleHRhcmVhIHsuLi5wcm9wc30gLz5cbiAgPC9kaXY+XG4pO1xuIl19 */"), ";label:chatBox;");
var ReplyBox = function ReplyBox(props) {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", {
    css:
    /*#__PURE__*/
    Object(_emotion_css__WEBPACK_IMPORTED_MODULE_1__["default"])([chatBox, Object(_main__WEBPACK_IMPORTED_MODULE_4__["margins"])(props.margins)], ";label:ReplyBox;" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yc2JlYXIvZGV2L3R5cGVmZWVsL3N0eWxlcy9pbnB1dHMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRITyIsImZpbGUiOiIvVXNlcnMvcnNiZWFyL2Rldi90eXBlZmVlbC9zdHlsZXMvaW5wdXRzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGpzeCwgY3NzIH0gZnJvbSBcIkBlbW90aW9uL2NvcmVcIjtcbmltcG9ydCB7IGNvbG9ycywgbWFyZ2lucyB9IGZyb20gXCIuL21haW5cIjtcbmltcG9ydCB7IEZDIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGaWVsZCB9IGZyb20gXCJmb3JtaWtcIjtcblxuZXhwb3J0IGNvbnN0IGlucHV0Qm94ID0gY3NzYFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMzZweDtcbiAgYm9yZGVyOiBzb2xpZCAxcHggJHtjb2xvcnMuYmxhY2syMH07XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgaSB7XG4gICAgbWFyZ2luOiAwIDE1cHg7XG4gIH1cblxuICBpbnB1dCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG5cbiAgJjpmb2N1cy13aXRoaW4ge1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDJweCByZ2JhKDIwLCAyNDAsIDE2MCwgMC41KTtcbiAgICBib3JkZXI6IHNvbGlkIDFweCByZ2JhKDIwLCAyNDAsIDE2MCwgMC41KTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IElucHV0OiBGQzxhbnk+ID0gKHByb3BzOiBhbnkpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNzcz17W2lucHV0Qm94LCBtYXJnaW5zKHByb3BzLm1hcmdpbnMpXX0+XG4gICAgICA8aSBjbGFzc05hbWU9e3Byb3BzLmljb259IC8+XG4gICAgICA8aW5wdXQgey4uLnByb3BzfSAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IEZvcm1pa0lucHV0OiBGQzxhbnk+ID0gKHByb3BzOiBhbnkpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNzcz17W2lucHV0Qm94LCBtYXJnaW5zKHByb3BzLm1hcmdpbnMpXX0+XG4gICAgICA8aSBjbGFzc05hbWU9e3Byb3BzLmljb259IC8+XG4gICAgICA8RmllbGQgey4uLnByb3BzfSAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgdGV4dEFyZWEgPSBjc3NgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWluLWhlaWdodDogOTZweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMXB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJvcmRlcjogc29saWQgMXB4ICR7Y29sb3JzLmJsYWNrMjB9O1xuXG4gIHRleHRhcmVhIHtcbiAgICByZXNpemU6IG5vbmU7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiAwO1xuXG4gICAgJjpmb2N1cyB7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgYm9yZGVyOiAwO1xuICAgIH1cbiAgfVxuXG4gICY6Zm9jdXMtd2l0aGluIHtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAycHggcmdiYSgyMCwgMjQwLCAxNjAsIDAuNSk7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggcmdiYSgyMCwgMjQwLCAxNjAsIDAuNSk7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBUZXh0QXJlYTogRkM8YW55PiA9IChwcm9wczogYW55KSA9PiAoXG4gIDxkaXYgY3NzPXtbdGV4dEFyZWEsIG1hcmdpbnMocHJvcHMubWFyZ2lucyldfT5cbiAgICA8dGV4dGFyZWEgcGxhY2Vob2xkZXI9XCJCZSBkZXNjcmlwdGl2ZVwiIHsuLi5wcm9wc30+PC90ZXh0YXJlYT5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgY29uc3QgRm9ybWlrQXJlYTogRkM8YW55PiA9IChwcm9wczogYW55KSA9PiAoXG4gIDxkaXYgY3NzPXtbdGV4dEFyZWEsIG1hcmdpbnMocHJvcHMubWFyZ2lucyldfT5cbiAgICA8RmllbGQgYXM9XCJ0ZXh0YXJlYVwiIHsuLi5wcm9wc30+PC9GaWVsZD5cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBjaGF0Qm94ID0gY3NzYFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1pbi1oZWlnaHQ6IDk2cHg7XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDFweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXI6IHNvbGlkIDFweCAke2NvbG9ycy5ibGFjazIwfTtcblxuICB0ZXh0YXJlYSB7XG4gICAgcmVzaXplOiBub25lO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogMDtcblxuICAgICY6Zm9jdXMge1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIGJvcmRlcjogMDtcbiAgICB9XG4gIH1cblxuICAmOmZvY3VzLXdpdGhpbiB7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMnB4IHJnYmEoMjAsIDI0MCwgMTYwLCAwLjUpO1xuICAgIGJvcmRlcjogc29saWQgMXB4IHJnYmEoMjAsIDI0MCwgMTYwLCAwLjUpO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgUmVwbHlCb3g6IEZDPGFueT4gPSAocHJvcHM6IGFueSkgPT4gKFxuICA8ZGl2IGNzcz17W2NoYXRCb3gsIG1hcmdpbnMocHJvcHMubWFyZ2lucyldfT5cbiAgICA8dGV4dGFyZWEgey4uLnByb3BzfSAvPlxuICA8L2Rpdj5cbik7XG4iXX0= */")),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("textarea", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  })));
};

/***/ })

})
//# sourceMappingURL=announcement.js.044be2179612e3238c10.hot-update.js.map