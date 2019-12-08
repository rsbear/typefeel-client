module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/MarketKeyset.tsx":
/*!*************************************!*\
  !*** ./components/MarketKeyset.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/css */ "@emotion/css");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/main */ "./styles/main.ts");


var _jsxFileName = "/Users/rsbear/dev/typefeel/components/MarketKeyset.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;




const MarketKeyset = ({
  kits
}) => {
  const {
    0: i,
    1: setI
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0);
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
    css: _styles_main__WEBPACK_IMPORTED_MODULE_4__["flex"].row,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, kits.map(({
    kit,
    id
  }, idx) => Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("h4", {
    css: viewTitle,
    className: i !== idx ? undefined : "active",
    onClick: () => setI(idx),
    key: id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, kit))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, "Preorder price"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, "$", _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(kits[i].price)), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, "Suggested price"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, "$", _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(kits[i].suggestedPrice)));
};

/* harmony default export */ __webpack_exports__["default"] = (MarketKeyset);
const viewTitle =  false ? undefined : {
  name: "1cevs6u-viewTitle",
  styles: "opacity:0.6;margin-right:10px;cursor:pointer;&:hover{opacity:0.8;}&.active{opacity:1;};label:viewTitle;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yc2JlYXIvZGV2L3R5cGVmZWVsL2NvbXBvbmVudHMvTWFya2V0S2V5c2V0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQ3FCIiwiZmlsZSI6Ii9Vc2Vycy9yc2JlYXIvZGV2L3R5cGVmZWVsL2NvbXBvbmVudHMvTWFya2V0S2V5c2V0LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQywgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGZsZXggfSBmcm9tIFwic3R5bGVzL21haW5cIjtcbmltcG9ydCBjc3MgZnJvbSBcIkBlbW90aW9uL2Nzc1wiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBraXRzPzogYW55O1xufVxuXG5jb25zdCBNYXJrZXRLZXlzZXQ6IEZDPFByb3BzPiA9ICh7IGtpdHMgfSkgPT4ge1xuICBjb25zdCBbaSwgc2V0SV0gPSB1c2VTdGF0ZSgwKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjc3M9e2ZsZXgucm93fT5cbiAgICAgICAge2tpdHMubWFwKCh7IGtpdCwgaWQgfSwgaWR4OiBudW1iZXIpID0+IChcbiAgICAgICAgICA8aDRcbiAgICAgICAgICAgIGNzcz17dmlld1RpdGxlfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtpICE9PSBpZHggPyB1bmRlZmluZWQgOiBcImFjdGl2ZVwifVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SShpZHgpfVxuICAgICAgICAgICAga2V5PXtpZH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7a2l0fVxuICAgICAgICAgIDwvaDQ+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgICA8aDM+UHJlb3JkZXIgcHJpY2U8L2gzPlxuICAgICAgPGgxPiR7SlNPTi5zdHJpbmdpZnkoa2l0c1tpXS5wcmljZSl9PC9oMT5cbiAgICAgIDxoMz5TdWdnZXN0ZWQgcHJpY2U8L2gzPlxuICAgICAgPGgxPiR7SlNPTi5zdHJpbmdpZnkoa2l0c1tpXS5zdWdnZXN0ZWRQcmljZSl9PC9oMT5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1hcmtldEtleXNldDtcblxuY29uc3Qgdmlld1RpdGxlID0gY3NzYFxuICBvcGFjaXR5OiAwLjY7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICY6aG92ZXIge1xuICAgIG9wYWNpdHk6IDAuODtcbiAgfVxuXG4gICYuYWN0aXZlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5gO1xuIl19 */"
};

/***/ }),

/***/ "./components/layouts/DynamicNav.tsx":
/*!*******************************************!*\
  !*** ./components/layouts/DynamicNav.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/css */ "@emotion/css");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/main */ "./styles/main.ts");
/* harmony import */ var _styles_text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/text */ "./styles/text.ts");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "/Users/rsbear/dev/typefeel/components/layouts/DynamicNav.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






const DynamicNav = ({
  dynamicNav
}) => {
  if (!dynamicNav) {
    return null;
  }

  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    css:
    /*#__PURE__*/
    _emotion_css__WEBPACK_IMPORTED_MODULE_0___default()([_styles_main__WEBPACK_IMPORTED_MODULE_3__["flex"].column, wrap], ";label:DynamicNav;" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yc2JlYXIvZGV2L3R5cGVmZWVsL2NvbXBvbmVudHMvbGF5b3V0cy9EeW5hbWljTmF2LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQlMiLCJmaWxlIjoiL1VzZXJzL3JzYmVhci9kZXYvdHlwZWZlZWwvY29tcG9uZW50cy9sYXlvdXRzL0R5bmFtaWNOYXYudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgY3NzIGZyb20gXCJAZW1vdGlvbi9jc3NcIjtcbmltcG9ydCB7IGNvbG9ycywgZmxleCB9IGZyb20gXCJzdHlsZXMvbWFpblwiO1xuaW1wb3J0IHsgZm9udFNpemUgfSBmcm9tIFwic3R5bGVzL3RleHRcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgZHluYW1pY05hdj86IHtcbiAgICBuYW1lPzogc3RyaW5nO1xuICAgIGRpc2N1c3Npb25IcmVmPzogc3RyaW5nO1xuICAgIGRpc2N1c3Npb25Bcz86IHN0cmluZztcbiAgICBkYXRhSHJlZj86IHN0cmluZztcbiAgICBkYXRhQXM/OiBzdHJpbmc7XG4gIH07XG59XG5cbmNvbnN0IER5bmFtaWNOYXY6IEZDPFByb3BzPiA9ICh7IGR5bmFtaWNOYXYgfSkgPT4ge1xuICBpZiAoIWR5bmFtaWNOYXYpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjc3M9e1tmbGV4LmNvbHVtbiwgd3JhcF19PlxuICAgICAgPGg0PntkeW5hbWljTmF2Lm5hbWV9PC9oND5cbiAgICAgIDxwIGNzcz17cHBwfT5cbiAgICAgICAgPExpbmsgaHJlZj17ZHluYW1pY05hdi5kaXNjdXNzaW9uSHJlZn0gYXM9e2R5bmFtaWNOYXYuZGlzY3Vzc2lvbkFzfT5cbiAgICAgICAgICA8YT5EaXNjdXNzaW9uPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L3A+XG4gICAgICA8cCBjc3M9e3BwcH0+XG4gICAgICAgIDxMaW5rIGhyZWY9e2R5bmFtaWNOYXYuZGF0YUhyZWZ9IGFzPXtkeW5hbWljTmF2LmRhdGFBc30+XG4gICAgICAgICAgPGE+RGF0YTwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9wPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRHluYW1pY05hdjtcblxuY29uc3Qgd3JhcCA9IGNzc2BcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIGJvcmRlci10b3A6IHNvbGlkIDFweCAke2NvbG9ycy5ibGFjazEwfTtcbmA7XG5cbmNvbnN0IHBwcCA9IGNzc2BcbiAgbWFyZ2luOiAxMHB4IDA7XG4gIG1hcmdpbi10b3A6IDA7XG4gIGZvbnQtc2l6ZTogJHtmb250U2l6ZS5zbWFsbH07XG5gO1xuIl19 */")),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, dynamicNav.name), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("p", {
    css: ppp,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: dynamicNav.discussionHref,
    as: dynamicNav.discussionAs,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, "Discussion"))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("p", {
    css: ppp,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: dynamicNav.dataHref,
    as: dynamicNav.dataAs,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, "Data"))));
};

/* harmony default export */ __webpack_exports__["default"] = (DynamicNav);

const wrap =
/*#__PURE__*/
_emotion_css__WEBPACK_IMPORTED_MODULE_0___default()("margin-top:20px;padding-top:20px;border-top:solid 1px ", _styles_main__WEBPACK_IMPORTED_MODULE_3__["colors"].black10, ";;label:wrap;" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yc2JlYXIvZGV2L3R5cGVmZWVsL2NvbXBvbmVudHMvbGF5b3V0cy9EeW5hbWljTmF2LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3Q2dCIiwiZmlsZSI6Ii9Vc2Vycy9yc2JlYXIvZGV2L3R5cGVmZWVsL2NvbXBvbmVudHMvbGF5b3V0cy9EeW5hbWljTmF2LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGNzcyBmcm9tIFwiQGVtb3Rpb24vY3NzXCI7XG5pbXBvcnQgeyBjb2xvcnMsIGZsZXggfSBmcm9tIFwic3R5bGVzL21haW5cIjtcbmltcG9ydCB7IGZvbnRTaXplIH0gZnJvbSBcInN0eWxlcy90ZXh0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGR5bmFtaWNOYXY/OiB7XG4gICAgbmFtZT86IHN0cmluZztcbiAgICBkaXNjdXNzaW9uSHJlZj86IHN0cmluZztcbiAgICBkaXNjdXNzaW9uQXM/OiBzdHJpbmc7XG4gICAgZGF0YUhyZWY/OiBzdHJpbmc7XG4gICAgZGF0YUFzPzogc3RyaW5nO1xuICB9O1xufVxuXG5jb25zdCBEeW5hbWljTmF2OiBGQzxQcm9wcz4gPSAoeyBkeW5hbWljTmF2IH0pID0+IHtcbiAgaWYgKCFkeW5hbWljTmF2KSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY3NzPXtbZmxleC5jb2x1bW4sIHdyYXBdfT5cbiAgICAgIDxoND57ZHluYW1pY05hdi5uYW1lfTwvaDQ+XG4gICAgICA8cCBjc3M9e3BwcH0+XG4gICAgICAgIDxMaW5rIGhyZWY9e2R5bmFtaWNOYXYuZGlzY3Vzc2lvbkhyZWZ9IGFzPXtkeW5hbWljTmF2LmRpc2N1c3Npb25Bc30+XG4gICAgICAgICAgPGE+RGlzY3Vzc2lvbjwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9wPlxuICAgICAgPHAgY3NzPXtwcHB9PlxuICAgICAgICA8TGluayBocmVmPXtkeW5hbWljTmF2LmRhdGFIcmVmfSBhcz17ZHluYW1pY05hdi5kYXRhQXN9PlxuICAgICAgICAgIDxhPkRhdGE8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvcD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IER5bmFtaWNOYXY7XG5cbmNvbnN0IHdyYXAgPSBjc3NgXG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBib3JkZXItdG9wOiBzb2xpZCAxcHggJHtjb2xvcnMuYmxhY2sxMH07XG5gO1xuXG5jb25zdCBwcHAgPSBjc3NgXG4gIG1hcmdpbjogMTBweCAwO1xuICBtYXJnaW4tdG9wOiAwO1xuICBmb250LXNpemU6ICR7Zm9udFNpemUuc21hbGx9O1xuYDtcbiJdfQ== */"));

const ppp =
/*#__PURE__*/
_emotion_css__WEBPACK_IMPORTED_MODULE_0___default()("margin:10px 0;margin-top:0;font-size:", _styles_text__WEBPACK_IMPORTED_MODULE_4__["fontSize"].small, ";;label:ppp;" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yc2JlYXIvZGV2L3R5cGVmZWVsL2NvbXBvbmVudHMvbGF5b3V0cy9EeW5hbWljTmF2LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4Q2UiLCJmaWxlIjoiL1VzZXJzL3JzYmVhci9kZXYvdHlwZWZlZWwvY29tcG9uZW50cy9sYXlvdXRzL0R5bmFtaWNOYXYudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgY3NzIGZyb20gXCJAZW1vdGlvbi9jc3NcIjtcbmltcG9ydCB7IGNvbG9ycywgZmxleCB9IGZyb20gXCJzdHlsZXMvbWFpblwiO1xuaW1wb3J0IHsgZm9udFNpemUgfSBmcm9tIFwic3R5bGVzL3RleHRcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgZHluYW1pY05hdj86IHtcbiAgICBuYW1lPzogc3RyaW5nO1xuICAgIGRpc2N1c3Npb25IcmVmPzogc3RyaW5nO1xuICAgIGRpc2N1c3Npb25Bcz86IHN0cmluZztcbiAgICBkYXRhSHJlZj86IHN0cmluZztcbiAgICBkYXRhQXM/OiBzdHJpbmc7XG4gIH07XG59XG5cbmNvbnN0IER5bmFtaWNOYXY6IEZDPFByb3BzPiA9ICh7IGR5bmFtaWNOYXYgfSkgPT4ge1xuICBpZiAoIWR5bmFtaWNOYXYpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjc3M9e1tmbGV4LmNvbHVtbiwgd3JhcF19PlxuICAgICAgPGg0PntkeW5hbWljTmF2Lm5hbWV9PC9oND5cbiAgICAgIDxwIGNzcz17cHBwfT5cbiAgICAgICAgPExpbmsgaHJlZj17ZHluYW1pY05hdi5kaXNjdXNzaW9uSHJlZn0gYXM9e2R5bmFtaWNOYXYuZGlzY3Vzc2lvbkFzfT5cbiAgICAgICAgICA8YT5EaXNjdXNzaW9uPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L3A+XG4gICAgICA8cCBjc3M9e3BwcH0+XG4gICAgICAgIDxMaW5rIGhyZWY9e2R5bmFtaWNOYXYuZGF0YUhyZWZ9IGFzPXtkeW5hbWljTmF2LmRhdGFBc30+XG4gICAgICAgICAgPGE+RGF0YTwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9wPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRHluYW1pY05hdjtcblxuY29uc3Qgd3JhcCA9IGNzc2BcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIGJvcmRlci10b3A6IHNvbGlkIDFweCAke2NvbG9ycy5ibGFjazEwfTtcbmA7XG5cbmNvbnN0IHBwcCA9IGNzc2BcbiAgbWFyZ2luOiAxMHB4IDA7XG4gIG1hcmdpbi10b3A6IDA7XG4gIGZvbnQtc2l6ZTogJHtmb250U2l6ZS5zbWFsbH07XG5gO1xuIl19 */"));

/***/ }),

/***/ "./components/layouts/Footer.tsx":
/*!***************************************!*\
  !*** ./components/layouts/Footer.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/css */ "@emotion/css");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/main */ "./styles/main.ts");

var _jsxFileName = "/Users/rsbear/dev/typefeel/components/layouts/Footer.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




const Footer = () => {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("footer", {
    css: foot,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, "FAQ"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, "privacy"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, "terms & agreement"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, "idk what im doing")));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

const foot =
/*#__PURE__*/
_emotion_css__WEBPACK_IMPORTED_MODULE_0___default()("margin-top:100px;padding:40px 0;ul{display:flex;justify-content:space-between;padding-top:20px;border-top:solid 1px ", _styles_main__WEBPACK_IMPORTED_MODULE_3__["colors"].black10, ";li{font-size:0.75rem;color:", _styles_main__WEBPACK_IMPORTED_MODULE_3__["colors"].black60, ";}};label:foot;" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yc2JlYXIvZGV2L3R5cGVmZWVsL2NvbXBvbmVudHMvbGF5b3V0cy9Gb290ZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9CZ0IiLCJmaWxlIjoiL1VzZXJzL3JzYmVhci9kZXYvdHlwZWZlZWwvY29tcG9uZW50cy9sYXlvdXRzL0Zvb3Rlci50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBjc3MgZnJvbSBcIkBlbW90aW9uL2Nzc1wiO1xuaW1wb3J0IHsgY29sb3JzIH0gZnJvbSBcInN0eWxlcy9tYWluXCI7XG5cbmNvbnN0IEZvb3RlcjogRkM8YW55PiA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Zm9vdGVyIGNzcz17Zm9vdH0+XG4gICAgICA8dWw+XG4gICAgICAgIDxsaT5GQVE8L2xpPlxuICAgICAgICA8bGk+cHJpdmFjeTwvbGk+XG4gICAgICAgIDxsaT50ZXJtcyAmIGFncmVlbWVudDwvbGk+XG4gICAgICAgIDxsaT5pZGsgd2hhdCBpbSBkb2luZzwvbGk+XG4gICAgICA8L3VsPlxuICAgIDwvZm9vdGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xuXG5jb25zdCBmb290ID0gY3NzYFxuICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgcGFkZGluZzogNDBweCAwO1xuXG4gIHVsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBib3JkZXItdG9wOiBzb2xpZCAxcHggJHtjb2xvcnMuYmxhY2sxMH07XG5cbiAgICBsaSB7XG4gICAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgICBjb2xvcjogJHtjb2xvcnMuYmxhY2s2MH07XG4gICAgfVxuICB9XG5gO1xuIl19 */"));

/***/ }),

/***/ "./components/layouts/Header.tsx":
/*!***************************************!*\
  !*** ./components/layouts/Header.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/rsbear/dev/typefeel/components/layouts/Header.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const Header = ({
  title
}) => Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("title", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, title, " - TypeFeel"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
  charSet: "utf-8",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
  name: "viewport",
  content: "initial-scale=1.0, width=device-width",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("link", {
  href: "https://unpkg.com/ionicons@4.5.10-0/dist/css/ionicons.min.css",
  rel: "stylesheet",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}));

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/layouts/Layout.tsx":
/*!***************************************!*\
  !*** ./components/layouts/Layout.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/css */ "@emotion/css");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header */ "./components/layouts/Header.tsx");
/* harmony import */ var _Navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Navigation */ "./components/layouts/Navigation.tsx");
/* harmony import */ var _styles_main__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/main */ "./styles/main.ts");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Footer */ "./components/layouts/Footer.tsx");


var _jsxFileName = "/Users/rsbear/dev/typefeel/components/layouts/Layout.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;







const Layout = ({
  title,
  children,
  authUser,
  dynamicNav
}) => Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
  css:
  /*#__PURE__*/
  _emotion_css__WEBPACK_IMPORTED_MODULE_0___default()([_styles_main__WEBPACK_IMPORTED_MODULE_5__["flex"].row, Object(_styles_main__WEBPACK_IMPORTED_MODULE_5__["margins"])("0 auto")], ";label:Layout;" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yc2JlYXIvZGV2L3R5cGVmZWVsL2NvbXBvbmVudHMvbGF5b3V0cy9MYXlvdXQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFPIiwiZmlsZSI6Ii9Vc2Vycy9yc2JlYXIvZGV2L3R5cGVmZWVsL2NvbXBvbmVudHMvbGF5b3V0cy9MYXlvdXQudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCJjb21wb25lbnRzL2xheW91dHMvSGVhZGVyXCI7XG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tIFwiLi9OYXZpZ2F0aW9uXCI7XG5pbXBvcnQgeyBmbGV4LCBtYXJnaW5zIH0gZnJvbSBcInN0eWxlcy9tYWluXCI7XG5pbXBvcnQgY3NzIGZyb20gXCJAZW1vdGlvbi9jc3NcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vRm9vdGVyXCI7XG5cbmNvbnN0IExheW91dDogRkM8YW55PiA9ICh7IHRpdGxlLCBjaGlsZHJlbiwgYXV0aFVzZXIsIGR5bmFtaWNOYXYgfSkgPT4gKFxuICA8ZGl2IGNzcz17W2ZsZXgucm93LCBtYXJnaW5zKFwiMCBhdXRvXCIpXX0+XG4gICAgPEhlYWRlciB0aXRsZT17dGl0bGV9IC8+XG4gICAgPE5hdmlnYXRpb24gYXV0aFVzZXI9e2F1dGhVc2VyfSBkeW5hbWljTmF2PXtkeW5hbWljTmF2fSAvPlxuICAgIDxtYWluIGNzcz17bWFpbkNvbnRlbnR9PlxuICAgICAgPD57Y2hpbGRyZW59PC8+XG4gICAgICA8Rm9vdGVyIC8+XG4gICAgPC9tYWluPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDtcblxuY29uc3Qgd3JhcHBlciA9IGNzc2BgO1xuXG5jb25zdCBtYWluQ29udGVudCA9IGNzc2BcbiAgcGFkZGluZy10b3A6IDUwcHg7XG4gIHdpZHRoOiA5MDBweDtcbmA7XG4iXX0= */")),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
  title: title,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_Navigation__WEBPACK_IMPORTED_MODULE_4__["default"], {
  authUser: authUser,
  dynamicNav: dynamicNav,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("main", {
  css: mainContent,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, children), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
})));

/* harmony default export */ __webpack_exports__["default"] = (Layout);
const wrapper =  false ? undefined : {
  name: "19uwuiq-wrapper",
  styles: ";label:wrapper;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yc2JlYXIvZGV2L3R5cGVmZWVsL2NvbXBvbmVudHMvbGF5b3V0cy9MYXlvdXQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9CbUIiLCJmaWxlIjoiL1VzZXJzL3JzYmVhci9kZXYvdHlwZWZlZWwvY29tcG9uZW50cy9sYXlvdXRzL0xheW91dC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcImNvbXBvbmVudHMvbGF5b3V0cy9IZWFkZXJcIjtcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gXCIuL05hdmlnYXRpb25cIjtcbmltcG9ydCB7IGZsZXgsIG1hcmdpbnMgfSBmcm9tIFwic3R5bGVzL21haW5cIjtcbmltcG9ydCBjc3MgZnJvbSBcIkBlbW90aW9uL2Nzc1wiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9Gb290ZXJcIjtcblxuY29uc3QgTGF5b3V0OiBGQzxhbnk+ID0gKHsgdGl0bGUsIGNoaWxkcmVuLCBhdXRoVXNlciwgZHluYW1pY05hdiB9KSA9PiAoXG4gIDxkaXYgY3NzPXtbZmxleC5yb3csIG1hcmdpbnMoXCIwIGF1dG9cIildfT5cbiAgICA8SGVhZGVyIHRpdGxlPXt0aXRsZX0gLz5cbiAgICA8TmF2aWdhdGlvbiBhdXRoVXNlcj17YXV0aFVzZXJ9IGR5bmFtaWNOYXY9e2R5bmFtaWNOYXZ9IC8+XG4gICAgPG1haW4gY3NzPXttYWluQ29udGVudH0+XG4gICAgICA8PntjaGlsZHJlbn08Lz5cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8L21haW4+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xuXG5jb25zdCB3cmFwcGVyID0gY3NzYGA7XG5cbmNvbnN0IG1haW5Db250ZW50ID0gY3NzYFxuICBwYWRkaW5nLXRvcDogNTBweDtcbiAgd2lkdGg6IDkwMHB4O1xuYDtcbiJdfQ== */"
};
const mainContent =  false ? undefined : {
  name: "1rn2p3q-mainContent",
  styles: "padding-top:50px;width:900px;;label:mainContent;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yc2JlYXIvZGV2L3R5cGVmZWVsL2NvbXBvbmVudHMvbGF5b3V0cy9MYXlvdXQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNCdUIiLCJmaWxlIjoiL1VzZXJzL3JzYmVhci9kZXYvdHlwZWZlZWwvY29tcG9uZW50cy9sYXlvdXRzL0xheW91dC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcImNvbXBvbmVudHMvbGF5b3V0cy9IZWFkZXJcIjtcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gXCIuL05hdmlnYXRpb25cIjtcbmltcG9ydCB7IGZsZXgsIG1hcmdpbnMgfSBmcm9tIFwic3R5bGVzL21haW5cIjtcbmltcG9ydCBjc3MgZnJvbSBcIkBlbW90aW9uL2Nzc1wiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9Gb290ZXJcIjtcblxuY29uc3QgTGF5b3V0OiBGQzxhbnk+ID0gKHsgdGl0bGUsIGNoaWxkcmVuLCBhdXRoVXNlciwgZHluYW1pY05hdiB9KSA9PiAoXG4gIDxkaXYgY3NzPXtbZmxleC5yb3csIG1hcmdpbnMoXCIwIGF1dG9cIildfT5cbiAgICA8SGVhZGVyIHRpdGxlPXt0aXRsZX0gLz5cbiAgICA8TmF2aWdhdGlvbiBhdXRoVXNlcj17YXV0aFVzZXJ9IGR5bmFtaWNOYXY9e2R5bmFtaWNOYXZ9IC8+XG4gICAgPG1haW4gY3NzPXttYWluQ29udGVudH0+XG4gICAgICA8PntjaGlsZHJlbn08Lz5cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8L21haW4+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xuXG5jb25zdCB3cmFwcGVyID0gY3NzYGA7XG5cbmNvbnN0IG1haW5Db250ZW50ID0gY3NzYFxuICBwYWRkaW5nLXRvcDogNTBweDtcbiAgd2lkdGg6IDkwMHB4O1xuYDtcbiJdfQ== */"
};

/***/ }),

/***/ "./components/layouts/Navigation.tsx":
/*!*******************************************!*\
  !*** ./components/layouts/Navigation.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/css */ "@emotion/css");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _DynamicNav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DynamicNav */ "./components/layouts/DynamicNav.tsx");
/* harmony import */ var _styles_main__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/main */ "./styles/main.ts");
/* harmony import */ var _styles_text__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../styles/text */ "./styles/text.ts");

var _jsxFileName = "/Users/rsbear/dev/typefeel/components/layouts/Navigation.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;








const Navigation = ({
  authUser,
  dynamicNav
}) => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  const keyboardPaths = router.pathname.includes("/keyboard");
  const keysetPaths = router.pathname.includes("/keyset");
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("nav", {
    css: navStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, "typefeel"))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/keyboards",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, "Keyboards"))), keyboardPaths && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("li", {
    className: "subRoute",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/keyboards/interestchecks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, "Interest checks"))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("li", {
    className: "subRoute",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/keyboards/catalog",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, "Catalog")))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/keysets",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, "Keysets"))), keysetPaths && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("li", {
    className: "subRoute",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/keysets/interestchecks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, "Interest checks"))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("li", {
    className: "subRoute",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/keysets/catalog",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }, "Catalog")))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, "Artisans"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/create",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, "Create"))), !authUser ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/login",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }, "Log in")), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }, "\xA0/\xA0"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/signup",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  }, "Sign up"))) : Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: undefined
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/dashboard",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: undefined
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: undefined
  }, "Dashboard"))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_DynamicNav__WEBPACK_IMPORTED_MODULE_5__["default"], {
    dynamicNav: dynamicNav,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Navigation);

const navStyle =
/*#__PURE__*/
_emotion_css__WEBPACK_IMPORTED_MODULE_0___default()("position:relative;height:100vh;width:140px;margin-right:40px;display:flex;flex-flow:column;justify-content:center;ul{position:sticky;top:40px;h4{font-style:italic;margin-bottom:20px;}li{padding:8px 0;margin:2px 0;font-size:", _styles_text__WEBPACK_IMPORTED_MODULE_7__["fontSize"].small, ";color:", _styles_main__WEBPACK_IMPORTED_MODULE_6__["colors"].black60, ";&.subRoute{font-size:13px;padding-left:10px;border-left:solid 1px ", _styles_main__WEBPACK_IMPORTED_MODULE_6__["colors"].black05, ";}}};label:navStyle;" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yc2JlYXIvZGV2L3R5cGVmZWVsL2NvbXBvbmVudHMvbGF5b3V0cy9OYXZpZ2F0aW9uLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0Rm9CIiwiZmlsZSI6Ii9Vc2Vycy9yc2JlYXIvZGV2L3R5cGVmZWVsL2NvbXBvbmVudHMvbGF5b3V0cy9OYXZpZ2F0aW9uLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgRHluYW1pY05hdiBmcm9tIFwiLi9EeW5hbWljTmF2XCI7XG5cbmltcG9ydCBjc3MgZnJvbSBcIkBlbW90aW9uL2Nzc1wiO1xuaW1wb3J0IHsgY29sb3JzIH0gZnJvbSBcInN0eWxlcy9tYWluXCI7XG5pbXBvcnQgeyBmb250U2l6ZSB9IGZyb20gXCJzdHlsZXMvdGV4dFwiO1xuXG5jb25zdCBOYXZpZ2F0aW9uOiBGQzxhbnk+ID0gKHsgYXV0aFVzZXIsIGR5bmFtaWNOYXYgfSkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCBrZXlib2FyZFBhdGhzID0gcm91dGVyLnBhdGhuYW1lLmluY2x1ZGVzKFwiL2tleWJvYXJkXCIpO1xuICBjb25zdCBrZXlzZXRQYXRocyA9IHJvdXRlci5wYXRobmFtZS5pbmNsdWRlcyhcIi9rZXlzZXRcIik7XG5cbiAgcmV0dXJuIChcbiAgICA8bmF2IGNzcz17bmF2U3R5bGV9PlxuICAgICAgPHVsPlxuICAgICAgICA8aDQ+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgIDxhPnR5cGVmZWVsPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9oND5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIva2V5Ym9hcmRzXCI+XG4gICAgICAgICAgICA8YT5LZXlib2FyZHM8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2xpPlxuICAgICAgICB7a2V5Ym9hcmRQYXRocyAmJiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJzdWJSb3V0ZVwiPlxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2tleWJvYXJkcy9pbnRlcmVzdGNoZWNrc1wiPlxuICAgICAgICAgICAgICAgIDxhPkludGVyZXN0IGNoZWNrczwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJzdWJSb3V0ZVwiPlxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2tleWJvYXJkcy9jYXRhbG9nXCI+XG4gICAgICAgICAgICAgICAgPGE+Q2F0YWxvZzwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIva2V5c2V0c1wiPlxuICAgICAgICAgICAgPGE+S2V5c2V0czwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIHtrZXlzZXRQYXRocyAmJiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJzdWJSb3V0ZVwiPlxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2tleXNldHMvaW50ZXJlc3RjaGVja3NcIj5cbiAgICAgICAgICAgICAgICA8YT5JbnRlcmVzdCBjaGVja3M8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwic3ViUm91dGVcIj5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9rZXlzZXRzL2NhdGFsb2dcIj5cbiAgICAgICAgICAgICAgICA8YT5DYXRhbG9nPC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgICA8bGk+QXJ0aXNhbnM8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9jcmVhdGVcIj5cbiAgICAgICAgICAgIDxhPkNyZWF0ZTwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIHshYXV0aFVzZXIgPyAoXG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9sb2dpblwiPlxuICAgICAgICAgICAgICA8YT5Mb2cgaW48L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8c3Bhbj4mbmJzcDsvJm5ic3A7PC9zcGFuPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zaWdudXBcIj5cbiAgICAgICAgICAgICAgPGE+U2lnbiB1cDwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZGFzaGJvYXJkXCI+XG4gICAgICAgICAgICAgIDxhPkRhc2hib2FyZDwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApfVxuICAgICAgICA8RHluYW1pY05hdiBkeW5hbWljTmF2PXtkeW5hbWljTmF2fSAvPlxuICAgICAgPC91bD5cbiAgICA8L25hdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmlnYXRpb247XG5cbmNvbnN0IG5hdlN0eWxlID0gY3NzYFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxNDBweDtcbiAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgdWwge1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgdG9wOiA0MHB4O1xuXG4gICAgaDQge1xuICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB9XG5cbiAgICBsaSB7XG4gICAgICBwYWRkaW5nOiA4cHggMDtcbiAgICAgIG1hcmdpbjogMnB4IDA7XG4gICAgICBmb250LXNpemU6ICR7Zm9udFNpemUuc21hbGx9O1xuICAgICAgY29sb3I6ICR7Y29sb3JzLmJsYWNrNjB9O1xuXG4gICAgICAmLnN1YlJvdXRlIHtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgIGJvcmRlci1sZWZ0OiBzb2xpZCAxcHggJHtjb2xvcnMuYmxhY2swNX07XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuIl19 */"));

/***/ }),

/***/ "./generated/graphql.tsx":
/*!*******************************!*\
  !*** ./generated/graphql.tsx ***!
  \*******************************/
/*! exports provided: AuthsDocument, useAuthsQuery, useAuthsLazyQuery, ByeDocument, useByeQuery, useByeLazyQuery, CreatePostDocument, useCreatePostMutation, FollowKeyboardDocument, useFollowKeyboardMutation, FollowKeyboardDeleteDocument, useFollowKeyboardDeleteMutation, GenerateAuthDocument, useGenerateAuthMutation, JoinKeyboardDocument, useJoinKeyboardMutation, KeyboardDocument, useKeyboardQuery, useKeyboardLazyQuery, KeyboardAnnouncementDocument, useKeyboardAnnouncementMutation, KeyboardPostsDocument, useKeyboardPostsQuery, useKeyboardPostsLazyQuery, KeyboardsDocument, useKeyboardsQuery, useKeyboardsLazyQuery, KeysetDocument, useKeysetQuery, useKeysetLazyQuery, KeysetsDocument, useKeysetsQuery, useKeysetsLazyQuery, LoginDocument, useLoginMutation, MakeKeyboardDocument, useMakeKeyboardMutation, MakeKeysetDocument, useMakeKeysetMutation, MeDocument, useMeQuery, useMeLazyQuery, SignupDocument, useSignupMutation, SortKeyboardsDocument, useSortKeyboardsQuery, useSortKeyboardsLazyQuery, UpdateKeyboardDocument, useUpdateKeyboardMutation, UserDashboardDocument, useUserDashboardQuery, useUserDashboardLazyQuery, VoteKeyboardDownDocument, useVoteKeyboardDownMutation, VoteKeyboardUpDocument, useVoteKeyboardUpMutation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthsDocument", function() { return AuthsDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAuthsQuery", function() { return useAuthsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAuthsLazyQuery", function() { return useAuthsLazyQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ByeDocument", function() { return ByeDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useByeQuery", function() { return useByeQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useByeLazyQuery", function() { return useByeLazyQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePostDocument", function() { return CreatePostDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCreatePostMutation", function() { return useCreatePostMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowKeyboardDocument", function() { return FollowKeyboardDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useFollowKeyboardMutation", function() { return useFollowKeyboardMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowKeyboardDeleteDocument", function() { return FollowKeyboardDeleteDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useFollowKeyboardDeleteMutation", function() { return useFollowKeyboardDeleteMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenerateAuthDocument", function() { return GenerateAuthDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useGenerateAuthMutation", function() { return useGenerateAuthMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoinKeyboardDocument", function() { return JoinKeyboardDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useJoinKeyboardMutation", function() { return useJoinKeyboardMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyboardDocument", function() { return KeyboardDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useKeyboardQuery", function() { return useKeyboardQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useKeyboardLazyQuery", function() { return useKeyboardLazyQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyboardAnnouncementDocument", function() { return KeyboardAnnouncementDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useKeyboardAnnouncementMutation", function() { return useKeyboardAnnouncementMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyboardPostsDocument", function() { return KeyboardPostsDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useKeyboardPostsQuery", function() { return useKeyboardPostsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useKeyboardPostsLazyQuery", function() { return useKeyboardPostsLazyQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyboardsDocument", function() { return KeyboardsDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useKeyboardsQuery", function() { return useKeyboardsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useKeyboardsLazyQuery", function() { return useKeyboardsLazyQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeysetDocument", function() { return KeysetDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useKeysetQuery", function() { return useKeysetQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useKeysetLazyQuery", function() { return useKeysetLazyQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeysetsDocument", function() { return KeysetsDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useKeysetsQuery", function() { return useKeysetsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useKeysetsLazyQuery", function() { return useKeysetsLazyQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginDocument", function() { return LoginDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLoginMutation", function() { return useLoginMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MakeKeyboardDocument", function() { return MakeKeyboardDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMakeKeyboardMutation", function() { return useMakeKeyboardMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MakeKeysetDocument", function() { return MakeKeysetDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMakeKeysetMutation", function() { return useMakeKeysetMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeDocument", function() { return MeDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMeQuery", function() { return useMeQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMeLazyQuery", function() { return useMeLazyQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupDocument", function() { return SignupDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSignupMutation", function() { return useSignupMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortKeyboardsDocument", function() { return SortKeyboardsDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSortKeyboardsQuery", function() { return useSortKeyboardsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSortKeyboardsLazyQuery", function() { return useSortKeyboardsLazyQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateKeyboardDocument", function() { return UpdateKeyboardDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useUpdateKeyboardMutation", function() { return useUpdateKeyboardMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDashboardDocument", function() { return UserDashboardDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useUserDashboardQuery", function() { return useUserDashboardQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useUserDashboardLazyQuery", function() { return useUserDashboardLazyQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoteKeyboardDownDocument", function() { return VoteKeyboardDownDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useVoteKeyboardDownMutation", function() { return useVoteKeyboardDownMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoteKeyboardUpDocument", function() { return VoteKeyboardUpDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useVoteKeyboardUpMutation", function() { return useVoteKeyboardUpMutation; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__);


const AuthsDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    query auths {
  auths {
    id
    secret
    email
  }
}
    `;
/**
 * __useAuthsQuery__
 *
 * To run a query within a React component, call `useAuthsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAuthsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAuthsQuery({
 *   variables: {
 *   },
 * });
 */

function useAuthsQuery(baseOptions) {
  return _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__["useQuery"](AuthsDocument, baseOptions);
}
function useAuthsLazyQuery(baseOptions) {
  return _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__["useLazyQuery"](AuthsDocument, baseOptions);
}
const ByeDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    query bye {
  bye
}
    `;
/**
 * __useByeQuery__
 *
 * To run a query within a React component, call `useByeQuery` and pass it any options that fit your needs.
 * When your component renders, `useByeQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useByeQuery({
 *   variables: {
 *   },
 * });
 */

function useByeQuery(baseOptions) {
  return _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__["useQuery"](ByeDocument, baseOptions);
}
function useByeLazyQuery(baseOptions) {
  return _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__["useLazyQuery"](ByeDocument, baseOptions);
}
const CreatePostDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    mutation createPost($id: String!, $body: String!) {
  createPost(id: $id, body: $body)
}
    `;

/**
 * __useCreatePostMutation__
 *
 * To run a mutation, you first call `useCreatePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPostMutation, { data, loading, error }] = useCreatePostMutation({
 *   variables: {
 *      id: // value for 'id'
 *      body: // value for 'body'
 *   },
 * });
 */
function useCreatePostMutation(baseOptions) {
  return _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__["useMutation"](CreatePostDocument, baseOptions);
}
const FollowKeyboardDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    mutation followKeyboard($id: String!) {
  followKeyboard(id: $id)
}
    `;

/**
 * __useFollowKeyboardMutation__
 *
 * To run a mutation, you first call `useFollowKeyboardMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useFollowKeyboardMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [followKeyboardMutation, { data, loading, error }] = useFollowKeyboardMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
function useFollowKeyboardMutation(baseOptions) {
  return _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__["useMutation"](FollowKeyboardDocument, baseOptions);
}
const FollowKeyboardDeleteDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    mutation followKeyboardDelete($id: String!) {
  followKeyboardDelete(id: $id)
}
    `;

/**
 * __useFollowKeyboardDeleteMutation__
 *
 * To run a mutation, you first call `useFollowKeyboardDeleteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useFollowKeyboardDeleteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [followKeyboardDeleteMutation, { data, loading, error }] = useFollowKeyboardDeleteMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
function useFollowKeyboardDeleteMutation(baseOptions) {
  return _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__["useMutation"](FollowKeyboardDeleteDocument, baseOptions);
}
const GenerateAuthDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    mutation generateAuth($email: String!) {
  generateAuth(email: $email)
}
    `;

/**
 * __useGenerateAuthMutation__
 *
 * To run a mutation, you first call `useGenerateAuthMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGenerateAuthMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [generateAuthMutation, { data, loading, error }] = useGenerateAuthMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
function useGenerateAuthMutation(baseOptions) {
  return _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__["useMutation"](GenerateAuthDocument, baseOptions);
}
const JoinKeyboardDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    mutation joinKeyboard($id: String!, $data: JoinKeyboardInput!) {
  joinKeyboard(id: $id, data: $data)
}
    `;

/**
 * __useJoinKeyboardMutation__
 *
 * To run a mutation, you first call `useJoinKeyboardMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useJoinKeyboardMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [joinKeyboardMutation, { data, loading, error }] = useJoinKeyboardMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *   },
 * });
 */
function useJoinKeyboardMutation(baseOptions) {
  return _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__["useMutation"](JoinKeyboardDocument, baseOptions);
}
const KeyboardDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    query Keyboard($shortId: String!) {
  keyboard(shortId: $shortId) {
    angle
    announcement
    brand
    closed
    connector
    editions {
      id
      name
      price
      suggestedPrice
      cases
      plates
    }
    details
    firmware
    groupBuy
    groupBuySoon
    id
    images1500
    interestCheck
    layouts
    market
    mount
    name
    pcb
    shortId
    size
    support
    posts {
      id
      body
    }
  }
}
    `;
/**
 * __useKeyboardQuery__
 *
 * To run a query within a React component, call `useKeyboardQuery` and pass it any options that fit your needs.
 * When your component renders, `useKeyboardQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useKeyboardQuery({
 *   variables: {
 *      shortId: // value for 'shortId'
 *   },
 * });
 */

function useKeyboardQuery(baseOptions) {
  return _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__["useQuery"](KeyboardDocument, baseOptions);
}
function useKeyboardLazyQuery(baseOptions) {
  return _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__["useLazyQuery"](KeyboardDocument, baseOptions);
}
const KeyboardAnnouncementDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    mutation keyboardAnnouncement($id: String!, $announcement: String!) {
  keyboardAnnouncement(id: $id, announcement: $announcement)
}
    `;

/**
 * __useKeyboardAnnouncementMutation__
 *
 * To run a mutation, you first call `useKeyboardAnnouncementMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useKeyboardAnnouncementMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [keyboardAnnouncementMutation, { data, loading, error }] = useKeyboardAnnouncementMutation({
 *   variables: {
 *      id: // value for 'id'
 *      announcement: // value for 'announcement'
 *   },
 * });
 */
function useKeyboardAnnouncementMutation(baseOptions) {
  return _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__["useMutation"](KeyboardAnnouncementDocument, baseOptions);
}
const KeyboardPostsDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    query keyboardPosts($shortId: String!) {
  keyboard(shortId: $shortId) {
    id
    shortId
    images600
    name
    posts {
      id
      body
      created
      user {
        username
      }
    }
  }
}
    `;
/**
 * __useKeyboardPostsQuery__
 *
 * To run a query within a React component, call `useKeyboardPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useKeyboardPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useKeyboardPostsQuery({
 *   variables: {
 *      shortId: // value for 'shortId'
 *   },
 * });
 */

function useKeyboardPostsQuery(baseOptions) {
  return _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__["useQuery"](KeyboardPostsDocument, baseOptions);
}
function useKeyboardPostsLazyQuery(baseOptions) {
  return _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__["useLazyQuery"](KeyboardPostsDocument, baseOptions);
}
const KeyboardsDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    query keyboards {
  keyboards {
    id
    images600
    mount
    shortId
    size
    name
  }
}
    `;
/**
 * __useKeyboardsQuery__
 *
 * To run a query within a React component, call `useKeyboardsQuery` and pass it any options that fit your needs.
 * When your component renders, `useKeyboardsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useKeyboardsQuery({
 *   variables: {
 *   },
 * });
 */

function useKeyboardsQuery(baseOptions) {
  return _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__["useQuery"](KeyboardsDocument, baseOptions);
}
function useKeyboardsLazyQuery(baseOptions) {
  return _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__["useLazyQuery"](KeyboardsDocument, baseOptions);
}
const KeysetDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    query keyset($shortId: String!) {
  keyset(shortId: $shortId) {
    colors {
      id
      hex
      ral
    }
    created
    details
    id
    images1500
    kits {
      id
      kit
      name
      price
    }
    maker {
      username
    }
    name
    profile
    shortId
    stem
  }
}
    `;
/**
 * __useKeysetQuery__
 *
 * To run a query within a React component, call `useKeysetQuery` and pass it any options that fit your needs.
 * When your component renders, `useKeysetQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useKeysetQuery({
 *   variables: {
 *      shortId: // value for 'shortId'
 *   },
 * });
 */

function useKeysetQuery(baseOptions) {
  return _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__["useQuery"](KeysetDocument, baseOptions);
}
function useKeysetLazyQuery(baseOptions) {
  return _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__["useLazyQuery"](KeysetDocument, baseOptions);
}
const KeysetsDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    query keysets {
  keysets {
    id
    shortId
    name
    profile
    images600
  }
}
    `;
/**
 * __useKeysetsQuery__
 *
 * To run a query within a React component, call `useKeysetsQuery` and pass it any options that fit your needs.
 * When your component renders, `useKeysetsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useKeysetsQuery({
 *   variables: {
 *   },
 * });
 */

function useKeysetsQuery(baseOptions) {
  return _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__["useQuery"](KeysetsDocument, baseOptions);
}
function useKeysetsLazyQuery(baseOptions) {
  return _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__["useLazyQuery"](KeysetsDocument, baseOptions);
}
const LoginDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    mutation login($email: String!, $secret: String!) {
  login(email: $email, secret: $secret) {
    accessToken
    user {
      id
    }
  }
}
    `;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      secret: // value for 'secret'
 *   },
 * });
 */
function useLoginMutation(baseOptions) {
  return _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__["useMutation"](LoginDocument, baseOptions);
}
const MakeKeyboardDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    mutation makeKeyboard($data: KeyboardInput!, $images: [Upload!]!) {
  makeKeyboard(data: $data, images: $images)
}
    `;

/**
 * __useMakeKeyboardMutation__
 *
 * To run a mutation, you first call `useMakeKeyboardMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMakeKeyboardMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [makeKeyboardMutation, { data, loading, error }] = useMakeKeyboardMutation({
 *   variables: {
 *      data: // value for 'data'
 *      images: // value for 'images'
 *   },
 * });
 */
function useMakeKeyboardMutation(baseOptions) {
  return _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__["useMutation"](MakeKeyboardDocument, baseOptions);
}
const MakeKeysetDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    mutation makeKeyset($data: KeysetInput!, $images: [Upload!]!) {
  makeKeyset(data: $data, images: $images)
}
    `;

/**
 * __useMakeKeysetMutation__
 *
 * To run a mutation, you first call `useMakeKeysetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMakeKeysetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [makeKeysetMutation, { data, loading, error }] = useMakeKeysetMutation({
 *   variables: {
 *      data: // value for 'data'
 *      images: // value for 'images'
 *   },
 * });
 */
function useMakeKeysetMutation(baseOptions) {
  return _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__["useMutation"](MakeKeysetDocument, baseOptions);
}
const MeDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    query Me {
  me {
    id
    email
    username
    keyboardjoins {
      id
    }
    follows {
      id
      keyboard {
        id
      }
    }
  }
}
    `;
/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */

function useMeQuery(baseOptions) {
  return _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__["useQuery"](MeDocument, baseOptions);
}
function useMeLazyQuery(baseOptions) {
  return _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__["useLazyQuery"](MeDocument, baseOptions);
}
const SignupDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    mutation signup($username: String!, $email: String!, $secret: String!) {
  signup(username: $username, email: $email, secret: $secret)
}
    `;

/**
 * __useSignupMutation__
 *
 * To run a mutation, you first call `useSignupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signupMutation, { data, loading, error }] = useSignupMutation({
 *   variables: {
 *      username: // value for 'username'
 *      email: // value for 'email'
 *      secret: // value for 'secret'
 *   },
 * });
 */
function useSignupMutation(baseOptions) {
  return _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__["useMutation"](SignupDocument, baseOptions);
}
const SortKeyboardsDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    query sortKeyboards($where: SearchInput!) {
  sortKeyboards(where: $where) {
    id
    shortId
    name
    mount
    size
    images600
  }
}
    `;
/**
 * __useSortKeyboardsQuery__
 *
 * To run a query within a React component, call `useSortKeyboardsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSortKeyboardsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSortKeyboardsQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */

function useSortKeyboardsQuery(baseOptions) {
  return _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__["useQuery"](SortKeyboardsDocument, baseOptions);
}
function useSortKeyboardsLazyQuery(baseOptions) {
  return _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__["useLazyQuery"](SortKeyboardsDocument, baseOptions);
}
const UpdateKeyboardDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    mutation updateKeyboard($id: String!, $data: KeyboardInput!) {
  updateKeyboard(id: $id, data: $data)
}
    `;

/**
 * __useUpdateKeyboardMutation__
 *
 * To run a mutation, you first call `useUpdateKeyboardMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateKeyboardMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateKeyboardMutation, { data, loading, error }] = useUpdateKeyboardMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *   },
 * });
 */
function useUpdateKeyboardMutation(baseOptions) {
  return _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__["useMutation"](UpdateKeyboardDocument, baseOptions);
}
const UserDashboardDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    query userDashboard {
  me {
    id
    username
    email
    keyboards {
      id
      shortId
      name
      joins {
        id
      }
      interestCheck
      groupBuy
      groupBuySoon
      closed
    }
    keyboardjoins {
      id
      keyboard {
        shortId
        id
        name
      }
    }
    follows {
      id
      keyboard {
        id
        name
        size
        mount
        shortId
      }
    }
  }
}
    `;
/**
 * __useUserDashboardQuery__
 *
 * To run a query within a React component, call `useUserDashboardQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserDashboardQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserDashboardQuery({
 *   variables: {
 *   },
 * });
 */

function useUserDashboardQuery(baseOptions) {
  return _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__["useQuery"](UserDashboardDocument, baseOptions);
}
function useUserDashboardLazyQuery(baseOptions) {
  return _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__["useLazyQuery"](UserDashboardDocument, baseOptions);
}
const VoteKeyboardDownDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    mutation voteKeyboardDown($id: String!) {
  voteKeyboardDown(id: $id)
}
    `;

/**
 * __useVoteKeyboardDownMutation__
 *
 * To run a mutation, you first call `useVoteKeyboardDownMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVoteKeyboardDownMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [voteKeyboardDownMutation, { data, loading, error }] = useVoteKeyboardDownMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
function useVoteKeyboardDownMutation(baseOptions) {
  return _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__["useMutation"](VoteKeyboardDownDocument, baseOptions);
}
const VoteKeyboardUpDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    mutation voteKeyboardUp($id: String!) {
  voteKeyboardUp(id: $id)
}
    `;

/**
 * __useVoteKeyboardUpMutation__
 *
 * To run a mutation, you first call `useVoteKeyboardUpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVoteKeyboardUpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [voteKeyboardUpMutation, { data, loading, error }] = useVoteKeyboardUpMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
function useVoteKeyboardUpMutation(baseOptions) {
  return _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__["useMutation"](VoteKeyboardUpDocument, baseOptions);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! ../next-server/lib/router/rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");
/* global __NEXT_DATA__ */


function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new _map.default();
const IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    const {
      pathname
    } = window.location;
    const {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    const href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

    };

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (true) {
  const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  const exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      const value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    const router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      const eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

function withRouter(ComposedComponent) {
  class WithRouteWrapper extends _react.default.Component {
    constructor() {
      super(...arguments);
      this.context = void 0;
    }

    render() {
      return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
        router: this.context.router
      }, this.props));
    }

  }

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextTypes = {
    router: _propTypes.default.object
  };
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouteWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouteWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouteWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var _Object$create = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = _Object$create(null);

  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function rewriteUrlForNextExport(url) {
  const [pathname, hash] = url.split('#'); // tslint:disable-next-line

  let [path, qs] = pathname.split('?');
  path = path.replace(/\/$/, ''); // Append a trailing slash if this path does not have an extension

  if (!/\.[^/]+\/?$/.test(path)) path += `/`;
  if (qs) path += '?' + qs;
  if (hash) path += '#' + hash;
  return path;
}

exports.rewriteUrlForNextExport = rewriteUrlForNextExport;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Promise = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

var _Object$assign = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const rewrite_url_for_export_1 = __webpack_require__(/*! ./rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state.options && e.state.options.fromExternal) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.nextExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    return rewrite_url_for_export_1.rewriteUrlForNextExport(url);
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = _Object$assign({}, data, {
      Component
    });

    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new _Promise((resolve, reject) => {
      // marking route changes as a navigation start entry
      if (utils_1.SUPPORTS_PERFORMANCE_USER_TIMING) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const rr = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(rr)(asPathname);

        if (!routeMatch) {
          console.error('The provided `as` value is incompatible with the `href` value. This is invalid. https://err.sh/zeit/next.js/incompatible-href-as');
          return resolve(false);
        } // Merge params into `query`, overwriting any specified in search


        _Object$assign(query, routeMatch);
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);
        const hash = window.location.hash.substring(1);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        } // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, _Object$assign({}, routeInfo, {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      } // @ts-ignore method should always exist on history


      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return _Promise.resolve(cachedRouteInfo);
    }

    return new _Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return new _Promise((resolve, reject) => {
        // we provide AppTree later so this needs to be `any`
        this.getInitialProps(Component, {
          pathname,
          query,
          asPath: as
        }).then(props => {
          routeInfo.props = props;
          this.components[route] = routeInfo;
          resolve(routeInfo);
        }, reject);
      });
    }).catch(err => {
      return new _Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new _Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new _Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) return; // @ts-ignore pathname is always defined

      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  async getInitialProps(Component, ctx) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    const {
      Component: App
    } = this.components['/_app'];
    let props;

    if ( // @ts-ignore workaround for dead-code elimination
    (self.__HAS_SPR || "development" !== 'production') && Component.__NEXT_SPR) {
      let status;
      const {
        pathname
      } = url_1.parse(ctx.asPath || ctx.pathname);
      props = await fetch(`/_next/data${pathname}.json`).then(res => {
        if (!res.ok) {
          status = res.status;
          throw new Error('failed to load prerender data');
        }

        return res.json();
      }).catch(err => {
        console.error(`Failed to load data`, status, err);
        window.location.href = pathname;
        return new _Promise(() => {});
      });
    } else {
      const AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      props = await utils_1.loadGetInitialProps(App, {
        AppTree,
        Component,
        router: this,
        ctx
      });
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    if (cancelled) {
      const err = new Error('Loading initial props cancelled');
      err.cancelled = true;
      throw err;
    }

    return props;
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

Router.events = mitt_1.default();
exports.default = Router;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string


const TEST_ROUTE = /\/\[[^\/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const params = {};

    _Object$keys(groups).forEach(slugName => {
      const m = routeMatch[groups[slugName]];

      if (m !== undefined) {
        params[slugName] = decodeURIComponent(m);
      }
    });

    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^\/]+?)\\\](?=\/|$)/g, (_, $1) => (groups[$1 // Un-escape key
  .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1')] = groupIndex++, '/([^/]+?)'));
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  return (...args) => {
    if (!used) {
      used = true;
      fn.apply(this, args);
    }
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(Component, ctx) {
  if (true) {
    if (Component.prototype && Component.prototype.getInitialProps) {
      const message = `"${getDisplayName(Component)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!Component.getInitialProps) {
    return {};
  }

  const props = await Component.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(Component)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (_Object$keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(Component)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      _Object$keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SUPPORTS_PERFORMANCE = typeof performance !== 'undefined';
exports.SUPPORTS_PERFORMANCE_USER_TIMING = exports.SUPPORTS_PERFORMANCE && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./pages/keyset/[shortId]/index.tsx":
/*!******************************************!*\
  !*** ./pages/keyset/[shortId]/index.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/css */ "@emotion/css");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_layouts_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/layouts/Layout */ "./components/layouts/Layout.tsx");
/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../generated/graphql */ "./generated/graphql.tsx");
/* harmony import */ var _styles_text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../styles/text */ "./styles/text.ts");
/* harmony import */ var _styles_main__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../styles/main */ "./styles/main.ts");
/* harmony import */ var _components_MarketKeyset__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/MarketKeyset */ "./components/MarketKeyset.tsx");



var _jsxFileName = "/Users/rsbear/dev/typefeel/pages/keyset/[shortId]/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;








const Keyset = ({
  authUser,
  shortId
}) => {
  const {
    loading,
    error,
    data
  } = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_5__["useKeysetQuery"])({
    variables: {
      shortId
    }
  });
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_layouts_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "keyset",
    authUser: authUser,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, !loading && data && data.keyset && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("h1", {
    css: _styles_text__WEBPACK_IMPORTED_MODULE_6__["text"].heading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, data.keyset.profile, " ", data.keyset.name), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("h2", {
    css: specs,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(data.keyset.kits.length), " kits available"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
    css:
    /*#__PURE__*/
    _emotion_css__WEBPACK_IMPORTED_MODULE_0___default()([contentBox, _styles_main__WEBPACK_IMPORTED_MODULE_7__["grid50"]], ";label:Keyset;" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yc2JlYXIvZGV2L3R5cGVmZWVsL3BhZ2VzL2tleXNldC9bc2hvcnRJZF0vaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdCZSIsImZpbGUiOiIvVXNlcnMvcnNiZWFyL2Rldi90eXBlZmVlbC9wYWdlcy9rZXlzZXQvW3Nob3J0SWRdL2luZGV4LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQywgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcImNvbXBvbmVudHMvbGF5b3V0cy9MYXlvdXRcIjtcbmltcG9ydCB7IEdldFByb3BzIH0gZnJvbSBcImludGVyZmFjZXMvR2V0UHJvcHNcIjtcbmltcG9ydCB7IHVzZUtleXNldFF1ZXJ5IH0gZnJvbSBcImdlbmVyYXRlZC9ncmFwaHFsXCI7XG5cbmltcG9ydCBjc3MgZnJvbSBcIkBlbW90aW9uL2Nzc1wiO1xuaW1wb3J0IHsgdGV4dCB9IGZyb20gXCJzdHlsZXMvdGV4dFwiO1xuaW1wb3J0IHsgZ3JpZDUwLCBtYXJnaW5zLCBjb2xvcnMgfSBmcm9tIFwic3R5bGVzL21haW5cIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJzdHlsZXMvYnV0dG9uc1wiO1xuaW1wb3J0IE1hcmtldEtleXNldCBmcm9tIFwiY29tcG9uZW50cy9NYXJrZXRLZXlzZXRcIjtcblxuY29uc3QgS2V5c2V0OiBHZXRQcm9wczxhbnk+ID0gKHsgYXV0aFVzZXIsIHNob3J0SWQgfSkgPT4ge1xuICBjb25zdCB7IGxvYWRpbmcsIGVycm9yLCBkYXRhIH0gPSB1c2VLZXlzZXRRdWVyeSh7IHZhcmlhYmxlczogeyBzaG9ydElkIH0gfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IHRpdGxlPVwia2V5c2V0XCIgYXV0aFVzZXI9e2F1dGhVc2VyfT5cbiAgICAgIHshbG9hZGluZyAmJiBkYXRhICYmIGRhdGEua2V5c2V0ICYmIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDEgY3NzPXt0ZXh0LmhlYWRpbmd9PlxuICAgICAgICAgICAge2RhdGEua2V5c2V0LnByb2ZpbGV9IHtkYXRhLmtleXNldC5uYW1lfVxuICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgPGgyIGNzcz17c3BlY3N9PlxuICAgICAgICAgICAge0pTT04uc3RyaW5naWZ5KGRhdGEua2V5c2V0LmtpdHMubGVuZ3RoKX0ga2l0cyBhdmFpbGFibGVcbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxkaXYgY3NzPXtbY29udGVudEJveCwgZ3JpZDUwXX0+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIGNzcz17bWFpbkltZ31cbiAgICAgICAgICAgICAgc3JjPXtkYXRhLmtleXNldC5pbWFnZXMxNTAwWzBdfVxuICAgICAgICAgICAgICBhbHQ9e2RhdGEua2V5c2V0Lm5hbWV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPE1hcmtldEtleXNldCBraXRzPXtkYXRhLmtleXNldC5raXRzfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge2RhdGEua2V5c2V0LmRldGFpbHMubWFwKChkOiBzdHJpbmcsIGk6IG51bWJlcikgPT4gKFxuICAgICAgICAgICAgPHAga2V5PXtpfT57ZH08L3A+XG4gICAgICAgICAgKSl9XG4gICAgICAgICAgPGRpdiBjc3M9e2ltYWdlc1dyYXBwZXJ9PlxuICAgICAgICAgICAge2RhdGEua2V5c2V0LmltYWdlczE1MDAubWFwKChpbWc6IHN0cmluZywgaTogbnVtYmVyKSA9PiAoXG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWd9IGFsdD17ZGF0YS5rZXlzZXQubmFtZX0ga2V5PXtpfSAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5cbktleXNldC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY29udGV4dDogYW55KSA9PiB7XG4gIGNvbnN0IHsgc2hvcnRJZCB9ID0gY29udGV4dC5xdWVyeTtcbiAgcmV0dXJuIHsgc2hvcnRJZCB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgS2V5c2V0O1xuXG5jb25zdCBjb250ZW50Qm94ID0gY3NzYFxuICBtYXJnaW46IDYwcHggMDtcbmA7XG5jb25zdCBzcGVjcyA9IGNzc2BcbiAgY29sb3I6ICR7Y29sb3JzLmJsYWNrNTB9O1xuYDtcblxuY29uc3QgbWFpbkltZyA9IGNzc2BcbiAgaGVpZ2h0OiA1MDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcbmA7XG5cbmNvbnN0IGltYWdlc1dyYXBwZXIgPSBjc3NgXG4gIHdpZHRoOiAxMDAlO1xuICBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNjAwcHg7XG4gICAgbWFyZ2luOiAyMHB4IDA7XG4gIH1cbmA7XG4iXX0= */")),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("img", {
    css: mainImg,
    src: data.keyset.images1500[0],
    alt: data.keyset.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_MarketKeyset__WEBPACK_IMPORTED_MODULE_8__["default"], {
    kits: data.keyset.kits,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }))), data.keyset.details.map((d, i) => Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("p", {
    key: i,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, d)), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
    css: imagesWrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, data.keyset.images1500.map((img, i) => Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("img", {
    src: img,
    alt: data.keyset.name,
    key: i,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  })))));
};

Keyset.getInitialProps = async context => {
  const {
    shortId
  } = context.query;
  return {
    shortId
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Keyset);
const contentBox =  false ? undefined : {
  name: "dlkks8-contentBox",
  styles: "margin:60px 0;;label:contentBox;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yc2JlYXIvZGV2L3R5cGVmZWVsL3BhZ2VzL2tleXNldC9bc2hvcnRJZF0vaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVEc0IiLCJmaWxlIjoiL1VzZXJzL3JzYmVhci9kZXYvdHlwZWZlZWwvcGFnZXMva2V5c2V0L1tzaG9ydElkXS9pbmRleC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRkMsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCJjb21wb25lbnRzL2xheW91dHMvTGF5b3V0XCI7XG5pbXBvcnQgeyBHZXRQcm9wcyB9IGZyb20gXCJpbnRlcmZhY2VzL0dldFByb3BzXCI7XG5pbXBvcnQgeyB1c2VLZXlzZXRRdWVyeSB9IGZyb20gXCJnZW5lcmF0ZWQvZ3JhcGhxbFwiO1xuXG5pbXBvcnQgY3NzIGZyb20gXCJAZW1vdGlvbi9jc3NcIjtcbmltcG9ydCB7IHRleHQgfSBmcm9tIFwic3R5bGVzL3RleHRcIjtcbmltcG9ydCB7IGdyaWQ1MCwgbWFyZ2lucywgY29sb3JzIH0gZnJvbSBcInN0eWxlcy9tYWluXCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwic3R5bGVzL2J1dHRvbnNcIjtcbmltcG9ydCBNYXJrZXRLZXlzZXQgZnJvbSBcImNvbXBvbmVudHMvTWFya2V0S2V5c2V0XCI7XG5cbmNvbnN0IEtleXNldDogR2V0UHJvcHM8YW55PiA9ICh7IGF1dGhVc2VyLCBzaG9ydElkIH0pID0+IHtcbiAgY29uc3QgeyBsb2FkaW5nLCBlcnJvciwgZGF0YSB9ID0gdXNlS2V5c2V0UXVlcnkoeyB2YXJpYWJsZXM6IHsgc2hvcnRJZCB9IH0pO1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dCB0aXRsZT1cImtleXNldFwiIGF1dGhVc2VyPXthdXRoVXNlcn0+XG4gICAgICB7IWxvYWRpbmcgJiYgZGF0YSAmJiBkYXRhLmtleXNldCAmJiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgxIGNzcz17dGV4dC5oZWFkaW5nfT5cbiAgICAgICAgICAgIHtkYXRhLmtleXNldC5wcm9maWxlfSB7ZGF0YS5rZXlzZXQubmFtZX1cbiAgICAgICAgICA8L2gxPlxuICAgICAgICAgIDxoMiBjc3M9e3NwZWNzfT5cbiAgICAgICAgICAgIHtKU09OLnN0cmluZ2lmeShkYXRhLmtleXNldC5raXRzLmxlbmd0aCl9IGtpdHMgYXZhaWxhYmxlXG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8ZGl2IGNzcz17W2NvbnRlbnRCb3gsIGdyaWQ1MF19PlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBjc3M9e21haW5JbWd9XG4gICAgICAgICAgICAgIHNyYz17ZGF0YS5rZXlzZXQuaW1hZ2VzMTUwMFswXX1cbiAgICAgICAgICAgICAgYWx0PXtkYXRhLmtleXNldC5uYW1lfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxNYXJrZXRLZXlzZXQga2l0cz17ZGF0YS5rZXlzZXQua2l0c30gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHtkYXRhLmtleXNldC5kZXRhaWxzLm1hcCgoZDogc3RyaW5nLCBpOiBudW1iZXIpID0+IChcbiAgICAgICAgICAgIDxwIGtleT17aX0+e2R9PC9wPlxuICAgICAgICAgICkpfVxuICAgICAgICAgIDxkaXYgY3NzPXtpbWFnZXNXcmFwcGVyfT5cbiAgICAgICAgICAgIHtkYXRhLmtleXNldC5pbWFnZXMxNTAwLm1hcCgoaW1nOiBzdHJpbmcsIGk6IG51bWJlcikgPT4gKFxuICAgICAgICAgICAgICA8aW1nIHNyYz17aW1nfSBhbHQ9e2RhdGEua2V5c2V0Lm5hbWV9IGtleT17aX0gLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG5LZXlzZXQuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGNvbnRleHQ6IGFueSkgPT4ge1xuICBjb25zdCB7IHNob3J0SWQgfSA9IGNvbnRleHQucXVlcnk7XG4gIHJldHVybiB7IHNob3J0SWQgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEtleXNldDtcblxuY29uc3QgY29udGVudEJveCA9IGNzc2BcbiAgbWFyZ2luOiA2MHB4IDA7XG5gO1xuY29uc3Qgc3BlY3MgPSBjc3NgXG4gIGNvbG9yOiAke2NvbG9ycy5ibGFjazUwfTtcbmA7XG5cbmNvbnN0IG1haW5JbWcgPSBjc3NgXG4gIGhlaWdodDogNTAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XG5gO1xuXG5jb25zdCBpbWFnZXNXcmFwcGVyID0gY3NzYFxuICB3aWR0aDogMTAwJTtcbiAgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDYwMHB4O1xuICAgIG1hcmdpbjogMjBweCAwO1xuICB9XG5gO1xuIl19 */"
};

const specs =
/*#__PURE__*/
_emotion_css__WEBPACK_IMPORTED_MODULE_0___default()("color:", _styles_main__WEBPACK_IMPORTED_MODULE_7__["colors"].black50, ";;label:specs;" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yc2JlYXIvZGV2L3R5cGVmZWVsL3BhZ2VzL2tleXNldC9bc2hvcnRJZF0vaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBEaUIiLCJmaWxlIjoiL1VzZXJzL3JzYmVhci9kZXYvdHlwZWZlZWwvcGFnZXMva2V5c2V0L1tzaG9ydElkXS9pbmRleC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRkMsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCJjb21wb25lbnRzL2xheW91dHMvTGF5b3V0XCI7XG5pbXBvcnQgeyBHZXRQcm9wcyB9IGZyb20gXCJpbnRlcmZhY2VzL0dldFByb3BzXCI7XG5pbXBvcnQgeyB1c2VLZXlzZXRRdWVyeSB9IGZyb20gXCJnZW5lcmF0ZWQvZ3JhcGhxbFwiO1xuXG5pbXBvcnQgY3NzIGZyb20gXCJAZW1vdGlvbi9jc3NcIjtcbmltcG9ydCB7IHRleHQgfSBmcm9tIFwic3R5bGVzL3RleHRcIjtcbmltcG9ydCB7IGdyaWQ1MCwgbWFyZ2lucywgY29sb3JzIH0gZnJvbSBcInN0eWxlcy9tYWluXCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwic3R5bGVzL2J1dHRvbnNcIjtcbmltcG9ydCBNYXJrZXRLZXlzZXQgZnJvbSBcImNvbXBvbmVudHMvTWFya2V0S2V5c2V0XCI7XG5cbmNvbnN0IEtleXNldDogR2V0UHJvcHM8YW55PiA9ICh7IGF1dGhVc2VyLCBzaG9ydElkIH0pID0+IHtcbiAgY29uc3QgeyBsb2FkaW5nLCBlcnJvciwgZGF0YSB9ID0gdXNlS2V5c2V0UXVlcnkoeyB2YXJpYWJsZXM6IHsgc2hvcnRJZCB9IH0pO1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dCB0aXRsZT1cImtleXNldFwiIGF1dGhVc2VyPXthdXRoVXNlcn0+XG4gICAgICB7IWxvYWRpbmcgJiYgZGF0YSAmJiBkYXRhLmtleXNldCAmJiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgxIGNzcz17dGV4dC5oZWFkaW5nfT5cbiAgICAgICAgICAgIHtkYXRhLmtleXNldC5wcm9maWxlfSB7ZGF0YS5rZXlzZXQubmFtZX1cbiAgICAgICAgICA8L2gxPlxuICAgICAgICAgIDxoMiBjc3M9e3NwZWNzfT5cbiAgICAgICAgICAgIHtKU09OLnN0cmluZ2lmeShkYXRhLmtleXNldC5raXRzLmxlbmd0aCl9IGtpdHMgYXZhaWxhYmxlXG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8ZGl2IGNzcz17W2NvbnRlbnRCb3gsIGdyaWQ1MF19PlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBjc3M9e21haW5JbWd9XG4gICAgICAgICAgICAgIHNyYz17ZGF0YS5rZXlzZXQuaW1hZ2VzMTUwMFswXX1cbiAgICAgICAgICAgICAgYWx0PXtkYXRhLmtleXNldC5uYW1lfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxNYXJrZXRLZXlzZXQga2l0cz17ZGF0YS5rZXlzZXQua2l0c30gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHtkYXRhLmtleXNldC5kZXRhaWxzLm1hcCgoZDogc3RyaW5nLCBpOiBudW1iZXIpID0+IChcbiAgICAgICAgICAgIDxwIGtleT17aX0+e2R9PC9wPlxuICAgICAgICAgICkpfVxuICAgICAgICAgIDxkaXYgY3NzPXtpbWFnZXNXcmFwcGVyfT5cbiAgICAgICAgICAgIHtkYXRhLmtleXNldC5pbWFnZXMxNTAwLm1hcCgoaW1nOiBzdHJpbmcsIGk6IG51bWJlcikgPT4gKFxuICAgICAgICAgICAgICA8aW1nIHNyYz17aW1nfSBhbHQ9e2RhdGEua2V5c2V0Lm5hbWV9IGtleT17aX0gLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG5LZXlzZXQuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGNvbnRleHQ6IGFueSkgPT4ge1xuICBjb25zdCB7IHNob3J0SWQgfSA9IGNvbnRleHQucXVlcnk7XG4gIHJldHVybiB7IHNob3J0SWQgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEtleXNldDtcblxuY29uc3QgY29udGVudEJveCA9IGNzc2BcbiAgbWFyZ2luOiA2MHB4IDA7XG5gO1xuY29uc3Qgc3BlY3MgPSBjc3NgXG4gIGNvbG9yOiAke2NvbG9ycy5ibGFjazUwfTtcbmA7XG5cbmNvbnN0IG1haW5JbWcgPSBjc3NgXG4gIGhlaWdodDogNTAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XG5gO1xuXG5jb25zdCBpbWFnZXNXcmFwcGVyID0gY3NzYFxuICB3aWR0aDogMTAwJTtcbiAgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDYwMHB4O1xuICAgIG1hcmdpbjogMjBweCAwO1xuICB9XG5gO1xuIl19 */"));

const mainImg =  false ? undefined : {
  name: "1mtsdxv-mainImg",
  styles: "height:500px;width:100%;object-fit:cover;object-position:center;;label:mainImg;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yc2JlYXIvZGV2L3R5cGVmZWVsL3BhZ2VzL2tleXNldC9bc2hvcnRJZF0vaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThEbUIiLCJmaWxlIjoiL1VzZXJzL3JzYmVhci9kZXYvdHlwZWZlZWwvcGFnZXMva2V5c2V0L1tzaG9ydElkXS9pbmRleC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRkMsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCJjb21wb25lbnRzL2xheW91dHMvTGF5b3V0XCI7XG5pbXBvcnQgeyBHZXRQcm9wcyB9IGZyb20gXCJpbnRlcmZhY2VzL0dldFByb3BzXCI7XG5pbXBvcnQgeyB1c2VLZXlzZXRRdWVyeSB9IGZyb20gXCJnZW5lcmF0ZWQvZ3JhcGhxbFwiO1xuXG5pbXBvcnQgY3NzIGZyb20gXCJAZW1vdGlvbi9jc3NcIjtcbmltcG9ydCB7IHRleHQgfSBmcm9tIFwic3R5bGVzL3RleHRcIjtcbmltcG9ydCB7IGdyaWQ1MCwgbWFyZ2lucywgY29sb3JzIH0gZnJvbSBcInN0eWxlcy9tYWluXCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwic3R5bGVzL2J1dHRvbnNcIjtcbmltcG9ydCBNYXJrZXRLZXlzZXQgZnJvbSBcImNvbXBvbmVudHMvTWFya2V0S2V5c2V0XCI7XG5cbmNvbnN0IEtleXNldDogR2V0UHJvcHM8YW55PiA9ICh7IGF1dGhVc2VyLCBzaG9ydElkIH0pID0+IHtcbiAgY29uc3QgeyBsb2FkaW5nLCBlcnJvciwgZGF0YSB9ID0gdXNlS2V5c2V0UXVlcnkoeyB2YXJpYWJsZXM6IHsgc2hvcnRJZCB9IH0pO1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dCB0aXRsZT1cImtleXNldFwiIGF1dGhVc2VyPXthdXRoVXNlcn0+XG4gICAgICB7IWxvYWRpbmcgJiYgZGF0YSAmJiBkYXRhLmtleXNldCAmJiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgxIGNzcz17dGV4dC5oZWFkaW5nfT5cbiAgICAgICAgICAgIHtkYXRhLmtleXNldC5wcm9maWxlfSB7ZGF0YS5rZXlzZXQubmFtZX1cbiAgICAgICAgICA8L2gxPlxuICAgICAgICAgIDxoMiBjc3M9e3NwZWNzfT5cbiAgICAgICAgICAgIHtKU09OLnN0cmluZ2lmeShkYXRhLmtleXNldC5raXRzLmxlbmd0aCl9IGtpdHMgYXZhaWxhYmxlXG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8ZGl2IGNzcz17W2NvbnRlbnRCb3gsIGdyaWQ1MF19PlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBjc3M9e21haW5JbWd9XG4gICAgICAgICAgICAgIHNyYz17ZGF0YS5rZXlzZXQuaW1hZ2VzMTUwMFswXX1cbiAgICAgICAgICAgICAgYWx0PXtkYXRhLmtleXNldC5uYW1lfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxNYXJrZXRLZXlzZXQga2l0cz17ZGF0YS5rZXlzZXQua2l0c30gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHtkYXRhLmtleXNldC5kZXRhaWxzLm1hcCgoZDogc3RyaW5nLCBpOiBudW1iZXIpID0+IChcbiAgICAgICAgICAgIDxwIGtleT17aX0+e2R9PC9wPlxuICAgICAgICAgICkpfVxuICAgICAgICAgIDxkaXYgY3NzPXtpbWFnZXNXcmFwcGVyfT5cbiAgICAgICAgICAgIHtkYXRhLmtleXNldC5pbWFnZXMxNTAwLm1hcCgoaW1nOiBzdHJpbmcsIGk6IG51bWJlcikgPT4gKFxuICAgICAgICAgICAgICA8aW1nIHNyYz17aW1nfSBhbHQ9e2RhdGEua2V5c2V0Lm5hbWV9IGtleT17aX0gLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG5LZXlzZXQuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGNvbnRleHQ6IGFueSkgPT4ge1xuICBjb25zdCB7IHNob3J0SWQgfSA9IGNvbnRleHQucXVlcnk7XG4gIHJldHVybiB7IHNob3J0SWQgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEtleXNldDtcblxuY29uc3QgY29udGVudEJveCA9IGNzc2BcbiAgbWFyZ2luOiA2MHB4IDA7XG5gO1xuY29uc3Qgc3BlY3MgPSBjc3NgXG4gIGNvbG9yOiAke2NvbG9ycy5ibGFjazUwfTtcbmA7XG5cbmNvbnN0IG1haW5JbWcgPSBjc3NgXG4gIGhlaWdodDogNTAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XG5gO1xuXG5jb25zdCBpbWFnZXNXcmFwcGVyID0gY3NzYFxuICB3aWR0aDogMTAwJTtcbiAgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDYwMHB4O1xuICAgIG1hcmdpbjogMjBweCAwO1xuICB9XG5gO1xuIl19 */"
};
const imagesWrapper =  false ? undefined : {
  name: "kl22h6-imagesWrapper",
  styles: "width:100%;img{width:100%;height:600px;margin:20px 0;};label:imagesWrapper;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yc2JlYXIvZGV2L3R5cGVmZWVsL3BhZ2VzL2tleXNldC9bc2hvcnRJZF0vaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFFeUIiLCJmaWxlIjoiL1VzZXJzL3JzYmVhci9kZXYvdHlwZWZlZWwvcGFnZXMva2V5c2V0L1tzaG9ydElkXS9pbmRleC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRkMsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCJjb21wb25lbnRzL2xheW91dHMvTGF5b3V0XCI7XG5pbXBvcnQgeyBHZXRQcm9wcyB9IGZyb20gXCJpbnRlcmZhY2VzL0dldFByb3BzXCI7XG5pbXBvcnQgeyB1c2VLZXlzZXRRdWVyeSB9IGZyb20gXCJnZW5lcmF0ZWQvZ3JhcGhxbFwiO1xuXG5pbXBvcnQgY3NzIGZyb20gXCJAZW1vdGlvbi9jc3NcIjtcbmltcG9ydCB7IHRleHQgfSBmcm9tIFwic3R5bGVzL3RleHRcIjtcbmltcG9ydCB7IGdyaWQ1MCwgbWFyZ2lucywgY29sb3JzIH0gZnJvbSBcInN0eWxlcy9tYWluXCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwic3R5bGVzL2J1dHRvbnNcIjtcbmltcG9ydCBNYXJrZXRLZXlzZXQgZnJvbSBcImNvbXBvbmVudHMvTWFya2V0S2V5c2V0XCI7XG5cbmNvbnN0IEtleXNldDogR2V0UHJvcHM8YW55PiA9ICh7IGF1dGhVc2VyLCBzaG9ydElkIH0pID0+IHtcbiAgY29uc3QgeyBsb2FkaW5nLCBlcnJvciwgZGF0YSB9ID0gdXNlS2V5c2V0UXVlcnkoeyB2YXJpYWJsZXM6IHsgc2hvcnRJZCB9IH0pO1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dCB0aXRsZT1cImtleXNldFwiIGF1dGhVc2VyPXthdXRoVXNlcn0+XG4gICAgICB7IWxvYWRpbmcgJiYgZGF0YSAmJiBkYXRhLmtleXNldCAmJiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgxIGNzcz17dGV4dC5oZWFkaW5nfT5cbiAgICAgICAgICAgIHtkYXRhLmtleXNldC5wcm9maWxlfSB7ZGF0YS5rZXlzZXQubmFtZX1cbiAgICAgICAgICA8L2gxPlxuICAgICAgICAgIDxoMiBjc3M9e3NwZWNzfT5cbiAgICAgICAgICAgIHtKU09OLnN0cmluZ2lmeShkYXRhLmtleXNldC5raXRzLmxlbmd0aCl9IGtpdHMgYXZhaWxhYmxlXG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8ZGl2IGNzcz17W2NvbnRlbnRCb3gsIGdyaWQ1MF19PlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBjc3M9e21haW5JbWd9XG4gICAgICAgICAgICAgIHNyYz17ZGF0YS5rZXlzZXQuaW1hZ2VzMTUwMFswXX1cbiAgICAgICAgICAgICAgYWx0PXtkYXRhLmtleXNldC5uYW1lfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxNYXJrZXRLZXlzZXQga2l0cz17ZGF0YS5rZXlzZXQua2l0c30gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHtkYXRhLmtleXNldC5kZXRhaWxzLm1hcCgoZDogc3RyaW5nLCBpOiBudW1iZXIpID0+IChcbiAgICAgICAgICAgIDxwIGtleT17aX0+e2R9PC9wPlxuICAgICAgICAgICkpfVxuICAgICAgICAgIDxkaXYgY3NzPXtpbWFnZXNXcmFwcGVyfT5cbiAgICAgICAgICAgIHtkYXRhLmtleXNldC5pbWFnZXMxNTAwLm1hcCgoaW1nOiBzdHJpbmcsIGk6IG51bWJlcikgPT4gKFxuICAgICAgICAgICAgICA8aW1nIHNyYz17aW1nfSBhbHQ9e2RhdGEua2V5c2V0Lm5hbWV9IGtleT17aX0gLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG5LZXlzZXQuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGNvbnRleHQ6IGFueSkgPT4ge1xuICBjb25zdCB7IHNob3J0SWQgfSA9IGNvbnRleHQucXVlcnk7XG4gIHJldHVybiB7IHNob3J0SWQgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEtleXNldDtcblxuY29uc3QgY29udGVudEJveCA9IGNzc2BcbiAgbWFyZ2luOiA2MHB4IDA7XG5gO1xuY29uc3Qgc3BlY3MgPSBjc3NgXG4gIGNvbG9yOiAke2NvbG9ycy5ibGFjazUwfTtcbmA7XG5cbmNvbnN0IG1haW5JbWcgPSBjc3NgXG4gIGhlaWdodDogNTAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XG5gO1xuXG5jb25zdCBpbWFnZXNXcmFwcGVyID0gY3NzYFxuICB3aWR0aDogMTAwJTtcbiAgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDYwMHB4O1xuICAgIG1hcmdpbjogMjBweCAwO1xuICB9XG5gO1xuIl19 */"
};

/***/ }),

/***/ "./styles/main.ts":
/*!************************!*\
  !*** ./styles/main.ts ***!
  \************************/
/*! exports provided: colors, borderBox, grid50, grid33, flex, margins, paddings, hundo, globalStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colors", function() { return colors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderBox", function() { return borderBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "grid50", function() { return grid50; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "grid33", function() { return grid33; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flex", function() { return flex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "margins", function() { return margins; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paddings", function() { return paddings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hundo", function() { return hundo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "globalStyle", function() { return globalStyle; });
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_0__);

const colors = {
  black70: 'rgba(0,0,0,.7)',
  black60: 'rgba(0,0,0,.6)',
  black50: 'rgba(0,0,0,.5)',
  black40: 'rgba(0,0,0,.4)',
  black30: 'rgba(0,0,0,.3)',
  black20: 'rgba(0,0,0,.2)',
  black10: 'rgba(0,0,0,.1)',
  black05: 'rgba(0,0,0,.05)',
  white: 'rgba(255,255,255,1)'
};
const row =
/*#__PURE__*/
 false ? undefined : {
  name: "avli88-row",
  styles: "display:flex;;label:row;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yc2JlYXIvZGV2L3R5cGVmZWVsL3N0eWxlcy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNlIiwiZmlsZSI6Ii9Vc2Vycy9yc2JlYXIvZGV2L3R5cGVmZWVsL3N0eWxlcy9tYWluLnRzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsganN4LCBjc3MgfSBmcm9tICdAZW1vdGlvbi9jb3JlJ1xuXG5leHBvcnQgY29uc3QgY29sb3JzID0ge1xuICBibGFjazcwOiAncmdiYSgwLDAsMCwuNyknLFxuICBibGFjazYwOiAncmdiYSgwLDAsMCwuNiknLFxuICBibGFjazUwOiAncmdiYSgwLDAsMCwuNSknLFxuICBibGFjazQwOiAncmdiYSgwLDAsMCwuNCknLFxuICBibGFjazMwOiAncmdiYSgwLDAsMCwuMyknLFxuICBibGFjazIwOiAncmdiYSgwLDAsMCwuMiknLFxuICBibGFjazEwOiAncmdiYSgwLDAsMCwuMSknLFxuICBibGFjazA1OiAncmdiYSgwLDAsMCwuMDUpJyxcbiAgd2hpdGU6ICdyZ2JhKDI1NSwyNTUsMjU1LDEpJ1xufTtcblxuY29uc3Qgcm93ID0gY3NzYFxuICBkaXNwbGF5OiBmbGV4O1xuYDtcbmNvbnN0IHJvd3dyYXAgPSBjc3NgXG4gIGRpc3BsYXk6IGZsZXg7IGZsZXgtZmxvdzogcm93IHdyYXA7XG5gO1xuY29uc3QgY29sdW1uID0gY3NzYFxuICBkaXNwbGF5OiBmbGV4OyBmbGV4LWZsb3c6IGNvbHVtbjtcbmA7XG5jb25zdCBqdXN0aWZ5Y2VudGVyID0gY3NzYFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbmBcbmNvbnN0IHNwYWNlID0gY3NzYFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5gXG5jb25zdCBpdGVtc2NlbnRlciA9IGNzc2BcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbmBcbmV4cG9ydCBjb25zdCBib3JkZXJCb3ggPSBjc3NgXG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyOiBzb2xpZCAxcHggJHtjb2xvcnMuYmxhY2swNX07XG5cbiAgaDUge1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBncmlkNTAgPSBjc3NgXG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogY2FsYyg1MCUgLSA1cHgpIGNhbGMoNTAlIC0gNXB4KTtcbiAgZ3JpZC1jb2x1bW4tZ2FwOiAxMHB4O1xuYFxuZXhwb3J0IGNvbnN0IGdyaWQzMyA9IGNzc2BcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBjYWxjKDMzJSAtIDZweCkgY2FsYygzMyUgLSA2cHgpIGNhbGMoMzMlIC0gNnB4KTtcbiAgZ3JpZC1jb2x1bW4tZ2FwOiAxMnB4O1xuYFxuXG5leHBvcnQgY29uc3QgZmxleCA9IHtcbiAgcm93LFxuICByb3d3cmFwLFxuICBjb2x1bW4sXG4gIGp1c3RpZnljZW50ZXIsXG4gIHNwYWNlLFxuICBpdGVtc2NlbnRlcixcbn1cblxuZXhwb3J0IGNvbnN0IG1hcmdpbnMgPSAobWFyZ2luczogc3RyaW5nKSA9PiBjc3NgXG4gIG1hcmdpbjogJHttYXJnaW5zfTtcbmBcbmV4cG9ydCBjb25zdCBwYWRkaW5ncyA9IChwYWRkaW5nczogc3RyaW5nKSA9PiBjc3NgXG4gIHBhZGRpbmc6ICR7cGFkZGluZ3N9O1xuYFxuXG5leHBvcnQgY29uc3QgaHVuZG8gPSBjc3NgXG4gIHdpZHRoOiAxMDAlO1xuYFxuXG5leHBvcnQgY29uc3QgZ2xvYmFsU3R5bGUgPSBjc3NgXG4gIGh0bWwge1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgfSBcbiAgKiwgJjo6YmVmb3JlLCAmOjphZnRlciB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgfVxuICBib2R5LCB1bCwgbGksIGEsIHAsIHNwYW4sIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIG5hdiwgaGVhZGVyLCBmb290ZXIge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGZvbnQtZmFtaWx5OiAnSGVsdmV0aWNhIE5ldWUnLC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogJHtjb2xvcnMuYmxhY2s3MH07XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG4gIGJvZHkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogJHtjb2xvcnMud2hpdGV9O1xuICB9XG4gIGJ1dHRvbiB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIHVsIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgfVxuICBwIHtcbiAgICBjb2xvcjogJHtjb2xvcnMuYmxhY2s2MH07XG4gIH1cbmA7Il19 */"
};
const rowwrap =
/*#__PURE__*/
 false ? undefined : {
  name: "1efyb5b-rowwrap",
  styles: "display:flex;flex-flow:row wrap;;label:rowwrap;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yc2JlYXIvZGV2L3R5cGVmZWVsL3N0eWxlcy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlCbUIiLCJmaWxlIjoiL1VzZXJzL3JzYmVhci9kZXYvdHlwZWZlZWwvc3R5bGVzL21haW4udHMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBqc3gsIGNzcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnXG5cbmV4cG9ydCBjb25zdCBjb2xvcnMgPSB7XG4gIGJsYWNrNzA6ICdyZ2JhKDAsMCwwLC43KScsXG4gIGJsYWNrNjA6ICdyZ2JhKDAsMCwwLC42KScsXG4gIGJsYWNrNTA6ICdyZ2JhKDAsMCwwLC41KScsXG4gIGJsYWNrNDA6ICdyZ2JhKDAsMCwwLC40KScsXG4gIGJsYWNrMzA6ICdyZ2JhKDAsMCwwLC4zKScsXG4gIGJsYWNrMjA6ICdyZ2JhKDAsMCwwLC4yKScsXG4gIGJsYWNrMTA6ICdyZ2JhKDAsMCwwLC4xKScsXG4gIGJsYWNrMDU6ICdyZ2JhKDAsMCwwLC4wNSknLFxuICB3aGl0ZTogJ3JnYmEoMjU1LDI1NSwyNTUsMSknXG59O1xuXG5jb25zdCByb3cgPSBjc3NgXG4gIGRpc3BsYXk6IGZsZXg7XG5gO1xuY29uc3Qgcm93d3JhcCA9IGNzc2BcbiAgZGlzcGxheTogZmxleDsgZmxleC1mbG93OiByb3cgd3JhcDtcbmA7XG5jb25zdCBjb2x1bW4gPSBjc3NgXG4gIGRpc3BsYXk6IGZsZXg7IGZsZXgtZmxvdzogY29sdW1uO1xuYDtcbmNvbnN0IGp1c3RpZnljZW50ZXIgPSBjc3NgXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuYFxuY29uc3Qgc3BhY2UgPSBjc3NgXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbmBcbmNvbnN0IGl0ZW1zY2VudGVyID0gY3NzYFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xuYFxuZXhwb3J0IGNvbnN0IGJvcmRlckJveCA9IGNzc2BcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXI6IHNvbGlkIDFweCAke2NvbG9ycy5ibGFjazA1fTtcblxuICBoNSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IGdyaWQ1MCA9IGNzc2BcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBjYWxjKDUwJSAtIDVweCkgY2FsYyg1MCUgLSA1cHgpO1xuICBncmlkLWNvbHVtbi1nYXA6IDEwcHg7XG5gXG5leHBvcnQgY29uc3QgZ3JpZDMzID0gY3NzYFxuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGNhbGMoMzMlIC0gNnB4KSBjYWxjKDMzJSAtIDZweCkgY2FsYygzMyUgLSA2cHgpO1xuICBncmlkLWNvbHVtbi1nYXA6IDEycHg7XG5gXG5cbmV4cG9ydCBjb25zdCBmbGV4ID0ge1xuICByb3csXG4gIHJvd3dyYXAsXG4gIGNvbHVtbixcbiAganVzdGlmeWNlbnRlcixcbiAgc3BhY2UsXG4gIGl0ZW1zY2VudGVyLFxufVxuXG5leHBvcnQgY29uc3QgbWFyZ2lucyA9IChtYXJnaW5zOiBzdHJpbmcpID0+IGNzc2BcbiAgbWFyZ2luOiAke21hcmdpbnN9O1xuYFxuZXhwb3J0IGNvbnN0IHBhZGRpbmdzID0gKHBhZGRpbmdzOiBzdHJpbmcpID0+IGNzc2BcbiAgcGFkZGluZzogJHtwYWRkaW5nc307XG5gXG5cbmV4cG9ydCBjb25zdCBodW5kbyA9IGNzc2BcbiAgd2lkdGg6IDEwMCU7XG5gXG5cbmV4cG9ydCBjb25zdCBnbG9iYWxTdHlsZSA9IGNzc2BcbiAgaHRtbCB7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICB9IFxuICAqLCAmOjpiZWZvcmUsICY6OmFmdGVyIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG4gIGJvZHksIHVsLCBsaSwgYSwgcCwgc3BhbiwgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgbmF2LCBoZWFkZXIsIGZvb3RlciB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZm9udC1mYW1pbHk6ICdIZWx2ZXRpY2EgTmV1ZScsLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xuICAgIGNvbG9yOiAke2NvbG9ycy5ibGFjazcwfTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbiAgYm9keSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiAke2NvbG9ycy53aGl0ZX07XG4gIH1cbiAgYnV0dG9uIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgdWwge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICB9XG4gIHAge1xuICAgIGNvbG9yOiAke2NvbG9ycy5ibGFjazYwfTtcbiAgfVxuYDsiXX0= */"
};
const column =
/*#__PURE__*/
 false ? undefined : {
  name: "1y73tr0-column",
  styles: "display:flex;flex-flow:column;;label:column;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yc2JlYXIvZGV2L3R5cGVmZWVsL3N0eWxlcy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9Ca0IiLCJmaWxlIjoiL1VzZXJzL3JzYmVhci9kZXYvdHlwZWZlZWwvc3R5bGVzL21haW4udHMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBqc3gsIGNzcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnXG5cbmV4cG9ydCBjb25zdCBjb2xvcnMgPSB7XG4gIGJsYWNrNzA6ICdyZ2JhKDAsMCwwLC43KScsXG4gIGJsYWNrNjA6ICdyZ2JhKDAsMCwwLC42KScsXG4gIGJsYWNrNTA6ICdyZ2JhKDAsMCwwLC41KScsXG4gIGJsYWNrNDA6ICdyZ2JhKDAsMCwwLC40KScsXG4gIGJsYWNrMzA6ICdyZ2JhKDAsMCwwLC4zKScsXG4gIGJsYWNrMjA6ICdyZ2JhKDAsMCwwLC4yKScsXG4gIGJsYWNrMTA6ICdyZ2JhKDAsMCwwLC4xKScsXG4gIGJsYWNrMDU6ICdyZ2JhKDAsMCwwLC4wNSknLFxuICB3aGl0ZTogJ3JnYmEoMjU1LDI1NSwyNTUsMSknXG59O1xuXG5jb25zdCByb3cgPSBjc3NgXG4gIGRpc3BsYXk6IGZsZXg7XG5gO1xuY29uc3Qgcm93d3JhcCA9IGNzc2BcbiAgZGlzcGxheTogZmxleDsgZmxleC1mbG93OiByb3cgd3JhcDtcbmA7XG5jb25zdCBjb2x1bW4gPSBjc3NgXG4gIGRpc3BsYXk6IGZsZXg7IGZsZXgtZmxvdzogY29sdW1uO1xuYDtcbmNvbnN0IGp1c3RpZnljZW50ZXIgPSBjc3NgXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuYFxuY29uc3Qgc3BhY2UgPSBjc3NgXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbmBcbmNvbnN0IGl0ZW1zY2VudGVyID0gY3NzYFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xuYFxuZXhwb3J0IGNvbnN0IGJvcmRlckJveCA9IGNzc2BcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXI6IHNvbGlkIDFweCAke2NvbG9ycy5ibGFjazA1fTtcblxuICBoNSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IGdyaWQ1MCA9IGNzc2BcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBjYWxjKDUwJSAtIDVweCkgY2FsYyg1MCUgLSA1cHgpO1xuICBncmlkLWNvbHVtbi1nYXA6IDEwcHg7XG5gXG5leHBvcnQgY29uc3QgZ3JpZDMzID0gY3NzYFxuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGNhbGMoMzMlIC0gNnB4KSBjYWxjKDMzJSAtIDZweCkgY2FsYygzMyUgLSA2cHgpO1xuICBncmlkLWNvbHVtbi1nYXA6IDEycHg7XG5gXG5cbmV4cG9ydCBjb25zdCBmbGV4ID0ge1xuICByb3csXG4gIHJvd3dyYXAsXG4gIGNvbHVtbixcbiAganVzdGlmeWNlbnRlcixcbiAgc3BhY2UsXG4gIGl0ZW1zY2VudGVyLFxufVxuXG5leHBvcnQgY29uc3QgbWFyZ2lucyA9IChtYXJnaW5zOiBzdHJpbmcpID0+IGNzc2BcbiAgbWFyZ2luOiAke21hcmdpbnN9O1xuYFxuZXhwb3J0IGNvbnN0IHBhZGRpbmdzID0gKHBhZGRpbmdzOiBzdHJpbmcpID0+IGNzc2BcbiAgcGFkZGluZzogJHtwYWRkaW5nc307XG5gXG5cbmV4cG9ydCBjb25zdCBodW5kbyA9IGNzc2BcbiAgd2lkdGg6IDEwMCU7XG5gXG5cbmV4cG9ydCBjb25zdCBnbG9iYWxTdHlsZSA9IGNzc2BcbiAgaHRtbCB7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICB9IFxuICAqLCAmOjpiZWZvcmUsICY6OmFmdGVyIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG4gIGJvZHksIHVsLCBsaSwgYSwgcCwgc3BhbiwgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgbmF2LCBoZWFkZXIsIGZvb3RlciB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZm9udC1mYW1pbHk6ICdIZWx2ZXRpY2EgTmV1ZScsLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xuICAgIGNvbG9yOiAke2NvbG9ycy5ibGFjazcwfTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbiAgYm9keSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiAke2NvbG9ycy53aGl0ZX07XG4gIH1cbiAgYnV0dG9uIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgdWwge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICB9XG4gIHAge1xuICAgIGNvbG9yOiAke2NvbG9ycy5ibGFjazYwfTtcbiAgfVxuYDsiXX0= */"
};
const justifycenter =
/*#__PURE__*/
 false ? undefined : {
  name: "8ml5ul-justifycenter",
  styles: "justify-content:center;;label:justifycenter;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yc2JlYXIvZGV2L3R5cGVmZWVsL3N0eWxlcy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVCeUIiLCJmaWxlIjoiL1VzZXJzL3JzYmVhci9kZXYvdHlwZWZlZWwvc3R5bGVzL21haW4udHMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBqc3gsIGNzcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnXG5cbmV4cG9ydCBjb25zdCBjb2xvcnMgPSB7XG4gIGJsYWNrNzA6ICdyZ2JhKDAsMCwwLC43KScsXG4gIGJsYWNrNjA6ICdyZ2JhKDAsMCwwLC42KScsXG4gIGJsYWNrNTA6ICdyZ2JhKDAsMCwwLC41KScsXG4gIGJsYWNrNDA6ICdyZ2JhKDAsMCwwLC40KScsXG4gIGJsYWNrMzA6ICdyZ2JhKDAsMCwwLC4zKScsXG4gIGJsYWNrMjA6ICdyZ2JhKDAsMCwwLC4yKScsXG4gIGJsYWNrMTA6ICdyZ2JhKDAsMCwwLC4xKScsXG4gIGJsYWNrMDU6ICdyZ2JhKDAsMCwwLC4wNSknLFxuICB3aGl0ZTogJ3JnYmEoMjU1LDI1NSwyNTUsMSknXG59O1xuXG5jb25zdCByb3cgPSBjc3NgXG4gIGRpc3BsYXk6IGZsZXg7XG5gO1xuY29uc3Qgcm93d3JhcCA9IGNzc2BcbiAgZGlzcGxheTogZmxleDsgZmxleC1mbG93OiByb3cgd3JhcDtcbmA7XG5jb25zdCBjb2x1bW4gPSBjc3NgXG4gIGRpc3BsYXk6IGZsZXg7IGZsZXgtZmxvdzogY29sdW1uO1xuYDtcbmNvbnN0IGp1c3RpZnljZW50ZXIgPSBjc3NgXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuYFxuY29uc3Qgc3BhY2UgPSBjc3NgXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbmBcbmNvbnN0IGl0ZW1zY2VudGVyID0gY3NzYFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xuYFxuZXhwb3J0IGNvbnN0IGJvcmRlckJveCA9IGNzc2BcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXI6IHNvbGlkIDFweCAke2NvbG9ycy5ibGFjazA1fTtcblxuICBoNSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IGdyaWQ1MCA9IGNzc2BcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBjYWxjKDUwJSAtIDVweCkgY2FsYyg1MCUgLSA1cHgpO1xuICBncmlkLWNvbHVtbi1nYXA6IDEwcHg7XG5gXG5leHBvcnQgY29uc3QgZ3JpZDMzID0gY3NzYFxuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGNhbGMoMzMlIC0gNnB4KSBjYWxjKDMzJSAtIDZweCkgY2FsYygzMyUgLSA2cHgpO1xuICBncmlkLWNvbHVtbi1nYXA6IDEycHg7XG5gXG5cbmV4cG9ydCBjb25zdCBmbGV4ID0ge1xuICByb3csXG4gIHJvd3dyYXAsXG4gIGNvbHVtbixcbiAganVzdGlmeWNlbnRlcixcbiAgc3BhY2UsXG4gIGl0ZW1zY2VudGVyLFxufVxuXG5leHBvcnQgY29uc3QgbWFyZ2lucyA9IChtYXJnaW5zOiBzdHJpbmcpID0+IGNzc2BcbiAgbWFyZ2luOiAke21hcmdpbnN9O1xuYFxuZXhwb3J0IGNvbnN0IHBhZGRpbmdzID0gKHBhZGRpbmdzOiBzdHJpbmcpID0+IGNzc2BcbiAgcGFkZGluZzogJHtwYWRkaW5nc307XG5gXG5cbmV4cG9ydCBjb25zdCBodW5kbyA9IGNzc2BcbiAgd2lkdGg6IDEwMCU7XG5gXG5cbmV4cG9ydCBjb25zdCBnbG9iYWxTdHlsZSA9IGNzc2BcbiAgaHRtbCB7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICB9IFxuICAqLCAmOjpiZWZvcmUsICY6OmFmdGVyIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG4gIGJvZHksIHVsLCBsaSwgYSwgcCwgc3BhbiwgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgbmF2LCBoZWFkZXIsIGZvb3RlciB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZm9udC1mYW1pbHk6ICdIZWx2ZXRpY2EgTmV1ZScsLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xuICAgIGNvbG9yOiAke2NvbG9ycy5ibGFjazcwfTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbiAgYm9keSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiAke2NvbG9ycy53aGl0ZX07XG4gIH1cbiAgYnV0dG9uIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgdWwge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICB9XG4gIHAge1xuICAgIGNvbG9yOiAke2NvbG9ycy5ibGFjazYwfTtcbiAgfVxuYDsiXX0= */"
};
const space =
/*#__PURE__*/
 false ? undefined : {
  name: "10wabh3-space",
  styles: "justify-content:space-between;;label:space;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yc2JlYXIvZGV2L3R5cGVmZWVsL3N0eWxlcy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBCaUIiLCJmaWxlIjoiL1VzZXJzL3JzYmVhci9kZXYvdHlwZWZlZWwvc3R5bGVzL21haW4udHMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBqc3gsIGNzcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnXG5cbmV4cG9ydCBjb25zdCBjb2xvcnMgPSB7XG4gIGJsYWNrNzA6ICdyZ2JhKDAsMCwwLC43KScsXG4gIGJsYWNrNjA6ICdyZ2JhKDAsMCwwLC42KScsXG4gIGJsYWNrNTA6ICdyZ2JhKDAsMCwwLC41KScsXG4gIGJsYWNrNDA6ICdyZ2JhKDAsMCwwLC40KScsXG4gIGJsYWNrMzA6ICdyZ2JhKDAsMCwwLC4zKScsXG4gIGJsYWNrMjA6ICdyZ2JhKDAsMCwwLC4yKScsXG4gIGJsYWNrMTA6ICdyZ2JhKDAsMCwwLC4xKScsXG4gIGJsYWNrMDU6ICdyZ2JhKDAsMCwwLC4wNSknLFxuICB3aGl0ZTogJ3JnYmEoMjU1LDI1NSwyNTUsMSknXG59O1xuXG5jb25zdCByb3cgPSBjc3NgXG4gIGRpc3BsYXk6IGZsZXg7XG5gO1xuY29uc3Qgcm93d3JhcCA9IGNzc2BcbiAgZGlzcGxheTogZmxleDsgZmxleC1mbG93OiByb3cgd3JhcDtcbmA7XG5jb25zdCBjb2x1bW4gPSBjc3NgXG4gIGRpc3BsYXk6IGZsZXg7IGZsZXgtZmxvdzogY29sdW1uO1xuYDtcbmNvbnN0IGp1c3RpZnljZW50ZXIgPSBjc3NgXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuYFxuY29uc3Qgc3BhY2UgPSBjc3NgXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbmBcbmNvbnN0IGl0ZW1zY2VudGVyID0gY3NzYFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xuYFxuZXhwb3J0IGNvbnN0IGJvcmRlckJveCA9IGNzc2BcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXI6IHNvbGlkIDFweCAke2NvbG9ycy5ibGFjazA1fTtcblxuICBoNSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IGdyaWQ1MCA9IGNzc2BcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBjYWxjKDUwJSAtIDVweCkgY2FsYyg1MCUgLSA1cHgpO1xuICBncmlkLWNvbHVtbi1nYXA6IDEwcHg7XG5gXG5leHBvcnQgY29uc3QgZ3JpZDMzID0gY3NzYFxuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGNhbGMoMzMlIC0gNnB4KSBjYWxjKDMzJSAtIDZweCkgY2FsYygzMyUgLSA2cHgpO1xuICBncmlkLWNvbHVtbi1nYXA6IDEycHg7XG5gXG5cbmV4cG9ydCBjb25zdCBmbGV4ID0ge1xuICByb3csXG4gIHJvd3dyYXAsXG4gIGNvbHVtbixcbiAganVzdGlmeWNlbnRlcixcbiAgc3BhY2UsXG4gIGl0ZW1zY2VudGVyLFxufVxuXG5leHBvcnQgY29uc3QgbWFyZ2lucyA9IChtYXJnaW5zOiBzdHJpbmcpID0+IGNzc2BcbiAgbWFyZ2luOiAke21hcmdpbnN9O1xuYFxuZXhwb3J0IGNvbnN0IHBhZGRpbmdzID0gKHBhZGRpbmdzOiBzdHJpbmcpID0+IGNzc2BcbiAgcGFkZGluZzogJHtwYWRkaW5nc307XG5gXG5cbmV4cG9ydCBjb25zdCBodW5kbyA9IGNzc2BcbiAgd2lkdGg6IDEwMCU7XG5gXG5cbmV4cG9ydCBjb25zdCBnbG9iYWxTdHlsZSA9IGNzc2BcbiAgaHRtbCB7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICB9IFxuICAqLCAmOjpiZWZvcmUsICY6OmFmdGVyIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG4gIGJvZHksIHVsLCBsaSwgYSwgcCwgc3BhbiwgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgbmF2LCBoZWFkZXIsIGZvb3RlciB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZm9udC1mYW1pbHk6ICdIZWx2ZXRpY2EgTmV1ZScsLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xuICAgIGNvbG9yOiAke2NvbG9ycy5ibGFjazcwfTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbiAgYm9keSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiAke2NvbG9ycy53aGl0ZX07XG4gIH1cbiAgYnV0dG9uIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgdWwge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICB9XG4gIHAge1xuICAgIGNvbG9yOiAke2NvbG9ycy5ibGFjazYwfTtcbiAgfVxuYDsiXX0= */"
};
const itemscenter =
/*#__PURE__*/
 false ? undefined : {
  name: "nt2jrm-itemscenter",
  styles: "align-items:center;;label:itemscenter;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yc2JlYXIvZGV2L3R5cGVmZWVsL3N0eWxlcy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZCdUIiLCJmaWxlIjoiL1VzZXJzL3JzYmVhci9kZXYvdHlwZWZlZWwvc3R5bGVzL21haW4udHMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBqc3gsIGNzcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnXG5cbmV4cG9ydCBjb25zdCBjb2xvcnMgPSB7XG4gIGJsYWNrNzA6ICdyZ2JhKDAsMCwwLC43KScsXG4gIGJsYWNrNjA6ICdyZ2JhKDAsMCwwLC42KScsXG4gIGJsYWNrNTA6ICdyZ2JhKDAsMCwwLC41KScsXG4gIGJsYWNrNDA6ICdyZ2JhKDAsMCwwLC40KScsXG4gIGJsYWNrMzA6ICdyZ2JhKDAsMCwwLC4zKScsXG4gIGJsYWNrMjA6ICdyZ2JhKDAsMCwwLC4yKScsXG4gIGJsYWNrMTA6ICdyZ2JhKDAsMCwwLC4xKScsXG4gIGJsYWNrMDU6ICdyZ2JhKDAsMCwwLC4wNSknLFxuICB3aGl0ZTogJ3JnYmEoMjU1LDI1NSwyNTUsMSknXG59O1xuXG5jb25zdCByb3cgPSBjc3NgXG4gIGRpc3BsYXk6IGZsZXg7XG5gO1xuY29uc3Qgcm93d3JhcCA9IGNzc2BcbiAgZGlzcGxheTogZmxleDsgZmxleC1mbG93OiByb3cgd3JhcDtcbmA7XG5jb25zdCBjb2x1bW4gPSBjc3NgXG4gIGRpc3BsYXk6IGZsZXg7IGZsZXgtZmxvdzogY29sdW1uO1xuYDtcbmNvbnN0IGp1c3RpZnljZW50ZXIgPSBjc3NgXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuYFxuY29uc3Qgc3BhY2UgPSBjc3NgXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbmBcbmNvbnN0IGl0ZW1zY2VudGVyID0gY3NzYFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xuYFxuZXhwb3J0IGNvbnN0IGJvcmRlckJveCA9IGNzc2BcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXI6IHNvbGlkIDFweCAke2NvbG9ycy5ibGFjazA1fTtcblxuICBoNSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IGdyaWQ1MCA9IGNzc2BcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBjYWxjKDUwJSAtIDVweCkgY2FsYyg1MCUgLSA1cHgpO1xuICBncmlkLWNvbHVtbi1nYXA6IDEwcHg7XG5gXG5leHBvcnQgY29uc3QgZ3JpZDMzID0gY3NzYFxuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGNhbGMoMzMlIC0gNnB4KSBjYWxjKDMzJSAtIDZweCkgY2FsYygzMyUgLSA2cHgpO1xuICBncmlkLWNvbHVtbi1nYXA6IDEycHg7XG5gXG5cbmV4cG9ydCBjb25zdCBmbGV4ID0ge1xuICByb3csXG4gIHJvd3dyYXAsXG4gIGNvbHVtbixcbiAganVzdGlmeWNlbnRlcixcbiAgc3BhY2UsXG4gIGl0ZW1zY2VudGVyLFxufVxuXG5leHBvcnQgY29uc3QgbWFyZ2lucyA9IChtYXJnaW5zOiBzdHJpbmcpID0+IGNzc2BcbiAgbWFyZ2luOiAke21hcmdpbnN9O1xuYFxuZXhwb3J0IGNvbnN0IHBhZGRpbmdzID0gKHBhZGRpbmdzOiBzdHJpbmcpID0+IGNzc2BcbiAgcGFkZGluZzogJHtwYWRkaW5nc307XG5gXG5cbmV4cG9ydCBjb25zdCBodW5kbyA9IGNzc2BcbiAgd2lkdGg6IDEwMCU7XG5gXG5cbmV4cG9ydCBjb25zdCBnbG9iYWxTdHlsZSA9IGNzc2BcbiAgaHRtbCB7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICB9IFxuICAqLCAmOjpiZWZvcmUsICY6OmFmdGVyIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG4gIGJvZHksIHVsLCBsaSwgYSwgcCwgc3BhbiwgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgbmF2LCBoZWFkZXIsIGZvb3RlciB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZm9udC1mYW1pbHk6ICdIZWx2ZXRpY2EgTmV1ZScsLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xuICAgIGNvbG9yOiAke2NvbG9ycy5ibGFjazcwfTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbiAgYm9keSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiAke2NvbG9ycy53aGl0ZX07XG4gIH1cbiAgYnV0dG9uIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgdWwge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICB9XG4gIHAge1xuICAgIGNvbG9yOiAke2NvbG9ycy5ibGFjazYwfTtcbiAgfVxuYDsiXX0= */"
};
const borderBox =
/*#__PURE__*/

/*#__PURE__*/
Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"])("padding:20px;border-radius:4px;border:solid 1px ", colors.black05, ";h5{margin-bottom:10px;};label:borderBox;" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yc2JlYXIvZGV2L3R5cGVmZWVsL3N0eWxlcy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdDNEIiLCJmaWxlIjoiL1VzZXJzL3JzYmVhci9kZXYvdHlwZWZlZWwvc3R5bGVzL21haW4udHMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBqc3gsIGNzcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnXG5cbmV4cG9ydCBjb25zdCBjb2xvcnMgPSB7XG4gIGJsYWNrNzA6ICdyZ2JhKDAsMCwwLC43KScsXG4gIGJsYWNrNjA6ICdyZ2JhKDAsMCwwLC42KScsXG4gIGJsYWNrNTA6ICdyZ2JhKDAsMCwwLC41KScsXG4gIGJsYWNrNDA6ICdyZ2JhKDAsMCwwLC40KScsXG4gIGJsYWNrMzA6ICdyZ2JhKDAsMCwwLC4zKScsXG4gIGJsYWNrMjA6ICdyZ2JhKDAsMCwwLC4yKScsXG4gIGJsYWNrMTA6ICdyZ2JhKDAsMCwwLC4xKScsXG4gIGJsYWNrMDU6ICdyZ2JhKDAsMCwwLC4wNSknLFxuICB3aGl0ZTogJ3JnYmEoMjU1LDI1NSwyNTUsMSknXG59O1xuXG5jb25zdCByb3cgPSBjc3NgXG4gIGRpc3BsYXk6IGZsZXg7XG5gO1xuY29uc3Qgcm93d3JhcCA9IGNzc2BcbiAgZGlzcGxheTogZmxleDsgZmxleC1mbG93OiByb3cgd3JhcDtcbmA7XG5jb25zdCBjb2x1bW4gPSBjc3NgXG4gIGRpc3BsYXk6IGZsZXg7IGZsZXgtZmxvdzogY29sdW1uO1xuYDtcbmNvbnN0IGp1c3RpZnljZW50ZXIgPSBjc3NgXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuYFxuY29uc3Qgc3BhY2UgPSBjc3NgXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbmBcbmNvbnN0IGl0ZW1zY2VudGVyID0gY3NzYFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xuYFxuZXhwb3J0IGNvbnN0IGJvcmRlckJveCA9IGNzc2BcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXI6IHNvbGlkIDFweCAke2NvbG9ycy5ibGFjazA1fTtcblxuICBoNSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IGdyaWQ1MCA9IGNzc2BcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBjYWxjKDUwJSAtIDVweCkgY2FsYyg1MCUgLSA1cHgpO1xuICBncmlkLWNvbHVtbi1nYXA6IDEwcHg7XG5gXG5leHBvcnQgY29uc3QgZ3JpZDMzID0gY3NzYFxuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGNhbGMoMzMlIC0gNnB4KSBjYWxjKDMzJSAtIDZweCkgY2FsYygzMyUgLSA2cHgpO1xuICBncmlkLWNvbHVtbi1nYXA6IDEycHg7XG5gXG5cbmV4cG9ydCBjb25zdCBmbGV4ID0ge1xuICByb3csXG4gIHJvd3dyYXAsXG4gIGNvbHVtbixcbiAganVzdGlmeWNlbnRlcixcbiAgc3BhY2UsXG4gIGl0ZW1zY2VudGVyLFxufVxuXG5leHBvcnQgY29uc3QgbWFyZ2lucyA9IChtYXJnaW5zOiBzdHJpbmcpID0+IGNzc2BcbiAgbWFyZ2luOiAke21hcmdpbnN9O1xuYFxuZXhwb3J0IGNvbnN0IHBhZGRpbmdzID0gKHBhZGRpbmdzOiBzdHJpbmcpID0+IGNzc2BcbiAgcGFkZGluZzogJHtwYWRkaW5nc307XG5gXG5cbmV4cG9ydCBjb25zdCBodW5kbyA9IGNzc2BcbiAgd2lkdGg6IDEwMCU7XG5gXG5cbmV4cG9ydCBjb25zdCBnbG9iYWxTdHlsZSA9IGNzc2BcbiAgaHRtbCB7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICB9IFxuICAqLCAmOjpiZWZvcmUsICY6OmFmdGVyIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG4gIGJvZHksIHVsLCBsaSwgYSwgcCwgc3BhbiwgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgbmF2LCBoZWFkZXIsIGZvb3RlciB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZm9udC1mYW1pbHk6ICdIZWx2ZXRpY2EgTmV1ZScsLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xuICAgIGNvbG9yOiAke2NvbG9ycy5ibGFjazcwfTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbiAgYm9keSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiAke2NvbG9ycy53aGl0ZX07XG4gIH1cbiAgYnV0dG9uIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgdWwge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICB9XG4gIHAge1xuICAgIGNvbG9yOiAke2NvbG9ycy5ibGFjazYwfTtcbiAgfVxuYDsiXX0= */"), ";label:borderBox;");
const grid50 =
/*#__PURE__*/
 false ? undefined : {
  name: "16n3orq-grid50",
  styles: "display:grid;grid-template-columns:calc(50% - 5px) calc(50% - 5px);grid-column-gap:10px;;label:grid50;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yc2JlYXIvZGV2L3R5cGVmZWVsL3N0eWxlcy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBDeUIiLCJmaWxlIjoiL1VzZXJzL3JzYmVhci9kZXYvdHlwZWZlZWwvc3R5bGVzL21haW4udHMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBqc3gsIGNzcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnXG5cbmV4cG9ydCBjb25zdCBjb2xvcnMgPSB7XG4gIGJsYWNrNzA6ICdyZ2JhKDAsMCwwLC43KScsXG4gIGJsYWNrNjA6ICdyZ2JhKDAsMCwwLC42KScsXG4gIGJsYWNrNTA6ICdyZ2JhKDAsMCwwLC41KScsXG4gIGJsYWNrNDA6ICdyZ2JhKDAsMCwwLC40KScsXG4gIGJsYWNrMzA6ICdyZ2JhKDAsMCwwLC4zKScsXG4gIGJsYWNrMjA6ICdyZ2JhKDAsMCwwLC4yKScsXG4gIGJsYWNrMTA6ICdyZ2JhKDAsMCwwLC4xKScsXG4gIGJsYWNrMDU6ICdyZ2JhKDAsMCwwLC4wNSknLFxuICB3aGl0ZTogJ3JnYmEoMjU1LDI1NSwyNTUsMSknXG59O1xuXG5jb25zdCByb3cgPSBjc3NgXG4gIGRpc3BsYXk6IGZsZXg7XG5gO1xuY29uc3Qgcm93d3JhcCA9IGNzc2BcbiAgZGlzcGxheTogZmxleDsgZmxleC1mbG93OiByb3cgd3JhcDtcbmA7XG5jb25zdCBjb2x1bW4gPSBjc3NgXG4gIGRpc3BsYXk6IGZsZXg7IGZsZXgtZmxvdzogY29sdW1uO1xuYDtcbmNvbnN0IGp1c3RpZnljZW50ZXIgPSBjc3NgXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuYFxuY29uc3Qgc3BhY2UgPSBjc3NgXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbmBcbmNvbnN0IGl0ZW1zY2VudGVyID0gY3NzYFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xuYFxuZXhwb3J0IGNvbnN0IGJvcmRlckJveCA9IGNzc2BcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXI6IHNvbGlkIDFweCAke2NvbG9ycy5ibGFjazA1fTtcblxuICBoNSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IGdyaWQ1MCA9IGNzc2BcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBjYWxjKDUwJSAtIDVweCkgY2FsYyg1MCUgLSA1cHgpO1xuICBncmlkLWNvbHVtbi1nYXA6IDEwcHg7XG5gXG5leHBvcnQgY29uc3QgZ3JpZDMzID0gY3NzYFxuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGNhbGMoMzMlIC0gNnB4KSBjYWxjKDMzJSAtIDZweCkgY2FsYygzMyUgLSA2cHgpO1xuICBncmlkLWNvbHVtbi1nYXA6IDEycHg7XG5gXG5cbmV4cG9ydCBjb25zdCBmbGV4ID0ge1xuICByb3csXG4gIHJvd3dyYXAsXG4gIGNvbHVtbixcbiAganVzdGlmeWNlbnRlcixcbiAgc3BhY2UsXG4gIGl0ZW1zY2VudGVyLFxufVxuXG5leHBvcnQgY29uc3QgbWFyZ2lucyA9IChtYXJnaW5zOiBzdHJpbmcpID0+IGNzc2BcbiAgbWFyZ2luOiAke21hcmdpbnN9O1xuYFxuZXhwb3J0IGNvbnN0IHBhZGRpbmdzID0gKHBhZGRpbmdzOiBzdHJpbmcpID0+IGNzc2BcbiAgcGFkZGluZzogJHtwYWRkaW5nc307XG5gXG5cbmV4cG9ydCBjb25zdCBodW5kbyA9IGNzc2BcbiAgd2lkdGg6IDEwMCU7XG5gXG5cbmV4cG9ydCBjb25zdCBnbG9iYWxTdHlsZSA9IGNzc2BcbiAgaHRtbCB7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICB9IFxuICAqLCAmOjpiZWZvcmUsICY6OmFmdGVyIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG4gIGJvZHksIHVsLCBsaSwgYSwgcCwgc3BhbiwgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgbmF2LCBoZWFkZXIsIGZvb3RlciB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZm9udC1mYW1pbHk6ICdIZWx2ZXRpY2EgTmV1ZScsLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xuICAgIGNvbG9yOiAke2NvbG9ycy5ibGFjazcwfTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbiAgYm9keSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiAke2NvbG9ycy53aGl0ZX07XG4gIH1cbiAgYnV0dG9uIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgdWwge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICB9XG4gIHAge1xuICAgIGNvbG9yOiAke2NvbG9ycy5ibGFjazYwfTtcbiAgfVxuYDsiXX0= */"
};
const grid33 =
/*#__PURE__*/
 false ? undefined : {
  name: "vsxax3-grid33",
  styles: "display:grid;grid-template-columns:calc(33% - 6px) calc(33% - 6px) calc(33% - 6px);grid-column-gap:12px;;label:grid33;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yc2JlYXIvZGV2L3R5cGVmZWVsL3N0eWxlcy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStDeUIiLCJmaWxlIjoiL1VzZXJzL3JzYmVhci9kZXYvdHlwZWZlZWwvc3R5bGVzL21haW4udHMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBqc3gsIGNzcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnXG5cbmV4cG9ydCBjb25zdCBjb2xvcnMgPSB7XG4gIGJsYWNrNzA6ICdyZ2JhKDAsMCwwLC43KScsXG4gIGJsYWNrNjA6ICdyZ2JhKDAsMCwwLC42KScsXG4gIGJsYWNrNTA6ICdyZ2JhKDAsMCwwLC41KScsXG4gIGJsYWNrNDA6ICdyZ2JhKDAsMCwwLC40KScsXG4gIGJsYWNrMzA6ICdyZ2JhKDAsMCwwLC4zKScsXG4gIGJsYWNrMjA6ICdyZ2JhKDAsMCwwLC4yKScsXG4gIGJsYWNrMTA6ICdyZ2JhKDAsMCwwLC4xKScsXG4gIGJsYWNrMDU6ICdyZ2JhKDAsMCwwLC4wNSknLFxuICB3aGl0ZTogJ3JnYmEoMjU1LDI1NSwyNTUsMSknXG59O1xuXG5jb25zdCByb3cgPSBjc3NgXG4gIGRpc3BsYXk6IGZsZXg7XG5gO1xuY29uc3Qgcm93d3JhcCA9IGNzc2BcbiAgZGlzcGxheTogZmxleDsgZmxleC1mbG93OiByb3cgd3JhcDtcbmA7XG5jb25zdCBjb2x1bW4gPSBjc3NgXG4gIGRpc3BsYXk6IGZsZXg7IGZsZXgtZmxvdzogY29sdW1uO1xuYDtcbmNvbnN0IGp1c3RpZnljZW50ZXIgPSBjc3NgXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuYFxuY29uc3Qgc3BhY2UgPSBjc3NgXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbmBcbmNvbnN0IGl0ZW1zY2VudGVyID0gY3NzYFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xuYFxuZXhwb3J0IGNvbnN0IGJvcmRlckJveCA9IGNzc2BcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXI6IHNvbGlkIDFweCAke2NvbG9ycy5ibGFjazA1fTtcblxuICBoNSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IGdyaWQ1MCA9IGNzc2BcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBjYWxjKDUwJSAtIDVweCkgY2FsYyg1MCUgLSA1cHgpO1xuICBncmlkLWNvbHVtbi1nYXA6IDEwcHg7XG5gXG5leHBvcnQgY29uc3QgZ3JpZDMzID0gY3NzYFxuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGNhbGMoMzMlIC0gNnB4KSBjYWxjKDMzJSAtIDZweCkgY2FsYygzMyUgLSA2cHgpO1xuICBncmlkLWNvbHVtbi1nYXA6IDEycHg7XG5gXG5cbmV4cG9ydCBjb25zdCBmbGV4ID0ge1xuICByb3csXG4gIHJvd3dyYXAsXG4gIGNvbHVtbixcbiAganVzdGlmeWNlbnRlcixcbiAgc3BhY2UsXG4gIGl0ZW1zY2VudGVyLFxufVxuXG5leHBvcnQgY29uc3QgbWFyZ2lucyA9IChtYXJnaW5zOiBzdHJpbmcpID0+IGNzc2BcbiAgbWFyZ2luOiAke21hcmdpbnN9O1xuYFxuZXhwb3J0IGNvbnN0IHBhZGRpbmdzID0gKHBhZGRpbmdzOiBzdHJpbmcpID0+IGNzc2BcbiAgcGFkZGluZzogJHtwYWRkaW5nc307XG5gXG5cbmV4cG9ydCBjb25zdCBodW5kbyA9IGNzc2BcbiAgd2lkdGg6IDEwMCU7XG5gXG5cbmV4cG9ydCBjb25zdCBnbG9iYWxTdHlsZSA9IGNzc2BcbiAgaHRtbCB7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICB9IFxuICAqLCAmOjpiZWZvcmUsICY6OmFmdGVyIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG4gIGJvZHksIHVsLCBsaSwgYSwgcCwgc3BhbiwgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgbmF2LCBoZWFkZXIsIGZvb3RlciB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZm9udC1mYW1pbHk6ICdIZWx2ZXRpY2EgTmV1ZScsLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xuICAgIGNvbG9yOiAke2NvbG9ycy5ibGFjazcwfTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbiAgYm9keSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiAke2NvbG9ycy53aGl0ZX07XG4gIH1cbiAgYnV0dG9uIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgdWwge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICB9XG4gIHAge1xuICAgIGNvbG9yOiAke2NvbG9ycy5ibGFjazYwfTtcbiAgfVxuYDsiXX0= */"
};
const flex = {
  row,
  rowwrap,
  column,
  justifycenter,
  space,
  itemscenter
};
const margins = margins =>
/*#__PURE__*/

/*#__PURE__*/
Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"])("margin:", margins, ";" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yc2JlYXIvZGV2L3R5cGVmZWVsL3N0eWxlcy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThEK0MiLCJmaWxlIjoiL1VzZXJzL3JzYmVhci9kZXYvdHlwZWZlZWwvc3R5bGVzL21haW4udHMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBqc3gsIGNzcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnXG5cbmV4cG9ydCBjb25zdCBjb2xvcnMgPSB7XG4gIGJsYWNrNzA6ICdyZ2JhKDAsMCwwLC43KScsXG4gIGJsYWNrNjA6ICdyZ2JhKDAsMCwwLC42KScsXG4gIGJsYWNrNTA6ICdyZ2JhKDAsMCwwLC41KScsXG4gIGJsYWNrNDA6ICdyZ2JhKDAsMCwwLC40KScsXG4gIGJsYWNrMzA6ICdyZ2JhKDAsMCwwLC4zKScsXG4gIGJsYWNrMjA6ICdyZ2JhKDAsMCwwLC4yKScsXG4gIGJsYWNrMTA6ICdyZ2JhKDAsMCwwLC4xKScsXG4gIGJsYWNrMDU6ICdyZ2JhKDAsMCwwLC4wNSknLFxuICB3aGl0ZTogJ3JnYmEoMjU1LDI1NSwyNTUsMSknXG59O1xuXG5jb25zdCByb3cgPSBjc3NgXG4gIGRpc3BsYXk6IGZsZXg7XG5gO1xuY29uc3Qgcm93d3JhcCA9IGNzc2BcbiAgZGlzcGxheTogZmxleDsgZmxleC1mbG93OiByb3cgd3JhcDtcbmA7XG5jb25zdCBjb2x1bW4gPSBjc3NgXG4gIGRpc3BsYXk6IGZsZXg7IGZsZXgtZmxvdzogY29sdW1uO1xuYDtcbmNvbnN0IGp1c3RpZnljZW50ZXIgPSBjc3NgXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuYFxuY29uc3Qgc3BhY2UgPSBjc3NgXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbmBcbmNvbnN0IGl0ZW1zY2VudGVyID0gY3NzYFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xuYFxuZXhwb3J0IGNvbnN0IGJvcmRlckJveCA9IGNzc2BcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXI6IHNvbGlkIDFweCAke2NvbG9ycy5ibGFjazA1fTtcblxuICBoNSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IGdyaWQ1MCA9IGNzc2BcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBjYWxjKDUwJSAtIDVweCkgY2FsYyg1MCUgLSA1cHgpO1xuICBncmlkLWNvbHVtbi1nYXA6IDEwcHg7XG5gXG5leHBvcnQgY29uc3QgZ3JpZDMzID0gY3NzYFxuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGNhbGMoMzMlIC0gNnB4KSBjYWxjKDMzJSAtIDZweCkgY2FsYygzMyUgLSA2cHgpO1xuICBncmlkLWNvbHVtbi1nYXA6IDEycHg7XG5gXG5cbmV4cG9ydCBjb25zdCBmbGV4ID0ge1xuICByb3csXG4gIHJvd3dyYXAsXG4gIGNvbHVtbixcbiAganVzdGlmeWNlbnRlcixcbiAgc3BhY2UsXG4gIGl0ZW1zY2VudGVyLFxufVxuXG5leHBvcnQgY29uc3QgbWFyZ2lucyA9IChtYXJnaW5zOiBzdHJpbmcpID0+IGNzc2BcbiAgbWFyZ2luOiAke21hcmdpbnN9O1xuYFxuZXhwb3J0IGNvbnN0IHBhZGRpbmdzID0gKHBhZGRpbmdzOiBzdHJpbmcpID0+IGNzc2BcbiAgcGFkZGluZzogJHtwYWRkaW5nc307XG5gXG5cbmV4cG9ydCBjb25zdCBodW5kbyA9IGNzc2BcbiAgd2lkdGg6IDEwMCU7XG5gXG5cbmV4cG9ydCBjb25zdCBnbG9iYWxTdHlsZSA9IGNzc2BcbiAgaHRtbCB7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICB9IFxuICAqLCAmOjpiZWZvcmUsICY6OmFmdGVyIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG4gIGJvZHksIHVsLCBsaSwgYSwgcCwgc3BhbiwgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgbmF2LCBoZWFkZXIsIGZvb3RlciB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZm9udC1mYW1pbHk6ICdIZWx2ZXRpY2EgTmV1ZScsLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xuICAgIGNvbG9yOiAke2NvbG9ycy5ibGFjazcwfTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbiAgYm9keSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiAke2NvbG9ycy53aGl0ZX07XG4gIH1cbiAgYnV0dG9uIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgdWwge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICB9XG4gIHAge1xuICAgIGNvbG9yOiAke2NvbG9ycy5ibGFjazYwfTtcbiAgfVxuYDsiXX0= */"));
const paddings = paddings =>
/*#__PURE__*/

/*#__PURE__*/
Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"])("padding:", paddings, ";" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yc2JlYXIvZGV2L3R5cGVmZWVsL3N0eWxlcy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlFaUQiLCJmaWxlIjoiL1VzZXJzL3JzYmVhci9kZXYvdHlwZWZlZWwvc3R5bGVzL21haW4udHMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBqc3gsIGNzcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnXG5cbmV4cG9ydCBjb25zdCBjb2xvcnMgPSB7XG4gIGJsYWNrNzA6ICdyZ2JhKDAsMCwwLC43KScsXG4gIGJsYWNrNjA6ICdyZ2JhKDAsMCwwLC42KScsXG4gIGJsYWNrNTA6ICdyZ2JhKDAsMCwwLC41KScsXG4gIGJsYWNrNDA6ICdyZ2JhKDAsMCwwLC40KScsXG4gIGJsYWNrMzA6ICdyZ2JhKDAsMCwwLC4zKScsXG4gIGJsYWNrMjA6ICdyZ2JhKDAsMCwwLC4yKScsXG4gIGJsYWNrMTA6ICdyZ2JhKDAsMCwwLC4xKScsXG4gIGJsYWNrMDU6ICdyZ2JhKDAsMCwwLC4wNSknLFxuICB3aGl0ZTogJ3JnYmEoMjU1LDI1NSwyNTUsMSknXG59O1xuXG5jb25zdCByb3cgPSBjc3NgXG4gIGRpc3BsYXk6IGZsZXg7XG5gO1xuY29uc3Qgcm93d3JhcCA9IGNzc2BcbiAgZGlzcGxheTogZmxleDsgZmxleC1mbG93OiByb3cgd3JhcDtcbmA7XG5jb25zdCBjb2x1bW4gPSBjc3NgXG4gIGRpc3BsYXk6IGZsZXg7IGZsZXgtZmxvdzogY29sdW1uO1xuYDtcbmNvbnN0IGp1c3RpZnljZW50ZXIgPSBjc3NgXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuYFxuY29uc3Qgc3BhY2UgPSBjc3NgXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbmBcbmNvbnN0IGl0ZW1zY2VudGVyID0gY3NzYFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xuYFxuZXhwb3J0IGNvbnN0IGJvcmRlckJveCA9IGNzc2BcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXI6IHNvbGlkIDFweCAke2NvbG9ycy5ibGFjazA1fTtcblxuICBoNSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IGdyaWQ1MCA9IGNzc2BcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBjYWxjKDUwJSAtIDVweCkgY2FsYyg1MCUgLSA1cHgpO1xuICBncmlkLWNvbHVtbi1nYXA6IDEwcHg7XG5gXG5leHBvcnQgY29uc3QgZ3JpZDMzID0gY3NzYFxuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGNhbGMoMzMlIC0gNnB4KSBjYWxjKDMzJSAtIDZweCkgY2FsYygzMyUgLSA2cHgpO1xuICBncmlkLWNvbHVtbi1nYXA6IDEycHg7XG5gXG5cbmV4cG9ydCBjb25zdCBmbGV4ID0ge1xuICByb3csXG4gIHJvd3dyYXAsXG4gIGNvbHVtbixcbiAganVzdGlmeWNlbnRlcixcbiAgc3BhY2UsXG4gIGl0ZW1zY2VudGVyLFxufVxuXG5leHBvcnQgY29uc3QgbWFyZ2lucyA9IChtYXJnaW5zOiBzdHJpbmcpID0+IGNzc2BcbiAgbWFyZ2luOiAke21hcmdpbnN9O1xuYFxuZXhwb3J0IGNvbnN0IHBhZGRpbmdzID0gKHBhZGRpbmdzOiBzdHJpbmcpID0+IGNzc2BcbiAgcGFkZGluZzogJHtwYWRkaW5nc307XG5gXG5cbmV4cG9ydCBjb25zdCBodW5kbyA9IGNzc2BcbiAgd2lkdGg6IDEwMCU7XG5gXG5cbmV4cG9ydCBjb25zdCBnbG9iYWxTdHlsZSA9IGNzc2BcbiAgaHRtbCB7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICB9IFxuICAqLCAmOjpiZWZvcmUsICY6OmFmdGVyIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG4gIGJvZHksIHVsLCBsaSwgYSwgcCwgc3BhbiwgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgbmF2LCBoZWFkZXIsIGZvb3RlciB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZm9udC1mYW1pbHk6ICdIZWx2ZXRpY2EgTmV1ZScsLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xuICAgIGNvbG9yOiAke2NvbG9ycy5ibGFjazcwfTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbiAgYm9keSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiAke2NvbG9ycy53aGl0ZX07XG4gIH1cbiAgYnV0dG9uIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgdWwge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICB9XG4gIHAge1xuICAgIGNvbG9yOiAke2NvbG9ycy5ibGFjazYwfTtcbiAgfVxuYDsiXX0= */"));
const hundo =
/*#__PURE__*/
 false ? undefined : {
  name: "1nwxbg4-hundo",
  styles: "width:100%;;label:hundo;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yc2JlYXIvZGV2L3R5cGVmZWVsL3N0eWxlcy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFFd0IiLCJmaWxlIjoiL1VzZXJzL3JzYmVhci9kZXYvdHlwZWZlZWwvc3R5bGVzL21haW4udHMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBqc3gsIGNzcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnXG5cbmV4cG9ydCBjb25zdCBjb2xvcnMgPSB7XG4gIGJsYWNrNzA6ICdyZ2JhKDAsMCwwLC43KScsXG4gIGJsYWNrNjA6ICdyZ2JhKDAsMCwwLC42KScsXG4gIGJsYWNrNTA6ICdyZ2JhKDAsMCwwLC41KScsXG4gIGJsYWNrNDA6ICdyZ2JhKDAsMCwwLC40KScsXG4gIGJsYWNrMzA6ICdyZ2JhKDAsMCwwLC4zKScsXG4gIGJsYWNrMjA6ICdyZ2JhKDAsMCwwLC4yKScsXG4gIGJsYWNrMTA6ICdyZ2JhKDAsMCwwLC4xKScsXG4gIGJsYWNrMDU6ICdyZ2JhKDAsMCwwLC4wNSknLFxuICB3aGl0ZTogJ3JnYmEoMjU1LDI1NSwyNTUsMSknXG59O1xuXG5jb25zdCByb3cgPSBjc3NgXG4gIGRpc3BsYXk6IGZsZXg7XG5gO1xuY29uc3Qgcm93d3JhcCA9IGNzc2BcbiAgZGlzcGxheTogZmxleDsgZmxleC1mbG93OiByb3cgd3JhcDtcbmA7XG5jb25zdCBjb2x1bW4gPSBjc3NgXG4gIGRpc3BsYXk6IGZsZXg7IGZsZXgtZmxvdzogY29sdW1uO1xuYDtcbmNvbnN0IGp1c3RpZnljZW50ZXIgPSBjc3NgXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuYFxuY29uc3Qgc3BhY2UgPSBjc3NgXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbmBcbmNvbnN0IGl0ZW1zY2VudGVyID0gY3NzYFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xuYFxuZXhwb3J0IGNvbnN0IGJvcmRlckJveCA9IGNzc2BcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXI6IHNvbGlkIDFweCAke2NvbG9ycy5ibGFjazA1fTtcblxuICBoNSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IGdyaWQ1MCA9IGNzc2BcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBjYWxjKDUwJSAtIDVweCkgY2FsYyg1MCUgLSA1cHgpO1xuICBncmlkLWNvbHVtbi1nYXA6IDEwcHg7XG5gXG5leHBvcnQgY29uc3QgZ3JpZDMzID0gY3NzYFxuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGNhbGMoMzMlIC0gNnB4KSBjYWxjKDMzJSAtIDZweCkgY2FsYygzMyUgLSA2cHgpO1xuICBncmlkLWNvbHVtbi1nYXA6IDEycHg7XG5gXG5cbmV4cG9ydCBjb25zdCBmbGV4ID0ge1xuICByb3csXG4gIHJvd3dyYXAsXG4gIGNvbHVtbixcbiAganVzdGlmeWNlbnRlcixcbiAgc3BhY2UsXG4gIGl0ZW1zY2VudGVyLFxufVxuXG5leHBvcnQgY29uc3QgbWFyZ2lucyA9IChtYXJnaW5zOiBzdHJpbmcpID0+IGNzc2BcbiAgbWFyZ2luOiAke21hcmdpbnN9O1xuYFxuZXhwb3J0IGNvbnN0IHBhZGRpbmdzID0gKHBhZGRpbmdzOiBzdHJpbmcpID0+IGNzc2BcbiAgcGFkZGluZzogJHtwYWRkaW5nc307XG5gXG5cbmV4cG9ydCBjb25zdCBodW5kbyA9IGNzc2BcbiAgd2lkdGg6IDEwMCU7XG5gXG5cbmV4cG9ydCBjb25zdCBnbG9iYWxTdHlsZSA9IGNzc2BcbiAgaHRtbCB7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICB9IFxuICAqLCAmOjpiZWZvcmUsICY6OmFmdGVyIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG4gIGJvZHksIHVsLCBsaSwgYSwgcCwgc3BhbiwgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgbmF2LCBoZWFkZXIsIGZvb3RlciB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZm9udC1mYW1pbHk6ICdIZWx2ZXRpY2EgTmV1ZScsLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xuICAgIGNvbG9yOiAke2NvbG9ycy5ibGFjazcwfTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbiAgYm9keSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiAke2NvbG9ycy53aGl0ZX07XG4gIH1cbiAgYnV0dG9uIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgdWwge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICB9XG4gIHAge1xuICAgIGNvbG9yOiAke2NvbG9ycy5ibGFjazYwfTtcbiAgfVxuYDsiXX0= */"
};
const globalStyle =
/*#__PURE__*/

/*#__PURE__*/
Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"])("html{overflow-y:scroll;}*,&::before,&::after{box-sizing:border-box;}body,ul,li,a,p,span,h1,h2,h3,h4,h5,h6,nav,header,footer{margin:0;padding:0;font-family:'Helvetica Neue',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;color:", colors.black70, ";text-decoration:none;}body{display:flex;justify-content:center;background:", colors.white, ";}button{cursor:pointer;}ul{list-style:none;padding-left:0;}p{color:", colors.black60, ";};label:globalStyle;" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yc2JlYXIvZGV2L3R5cGVmZWVsL3N0eWxlcy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlFOEIiLCJmaWxlIjoiL1VzZXJzL3JzYmVhci9kZXYvdHlwZWZlZWwvc3R5bGVzL21haW4udHMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBqc3gsIGNzcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnXG5cbmV4cG9ydCBjb25zdCBjb2xvcnMgPSB7XG4gIGJsYWNrNzA6ICdyZ2JhKDAsMCwwLC43KScsXG4gIGJsYWNrNjA6ICdyZ2JhKDAsMCwwLC42KScsXG4gIGJsYWNrNTA6ICdyZ2JhKDAsMCwwLC41KScsXG4gIGJsYWNrNDA6ICdyZ2JhKDAsMCwwLC40KScsXG4gIGJsYWNrMzA6ICdyZ2JhKDAsMCwwLC4zKScsXG4gIGJsYWNrMjA6ICdyZ2JhKDAsMCwwLC4yKScsXG4gIGJsYWNrMTA6ICdyZ2JhKDAsMCwwLC4xKScsXG4gIGJsYWNrMDU6ICdyZ2JhKDAsMCwwLC4wNSknLFxuICB3aGl0ZTogJ3JnYmEoMjU1LDI1NSwyNTUsMSknXG59O1xuXG5jb25zdCByb3cgPSBjc3NgXG4gIGRpc3BsYXk6IGZsZXg7XG5gO1xuY29uc3Qgcm93d3JhcCA9IGNzc2BcbiAgZGlzcGxheTogZmxleDsgZmxleC1mbG93OiByb3cgd3JhcDtcbmA7XG5jb25zdCBjb2x1bW4gPSBjc3NgXG4gIGRpc3BsYXk6IGZsZXg7IGZsZXgtZmxvdzogY29sdW1uO1xuYDtcbmNvbnN0IGp1c3RpZnljZW50ZXIgPSBjc3NgXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuYFxuY29uc3Qgc3BhY2UgPSBjc3NgXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbmBcbmNvbnN0IGl0ZW1zY2VudGVyID0gY3NzYFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xuYFxuZXhwb3J0IGNvbnN0IGJvcmRlckJveCA9IGNzc2BcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXI6IHNvbGlkIDFweCAke2NvbG9ycy5ibGFjazA1fTtcblxuICBoNSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IGdyaWQ1MCA9IGNzc2BcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBjYWxjKDUwJSAtIDVweCkgY2FsYyg1MCUgLSA1cHgpO1xuICBncmlkLWNvbHVtbi1nYXA6IDEwcHg7XG5gXG5leHBvcnQgY29uc3QgZ3JpZDMzID0gY3NzYFxuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGNhbGMoMzMlIC0gNnB4KSBjYWxjKDMzJSAtIDZweCkgY2FsYygzMyUgLSA2cHgpO1xuICBncmlkLWNvbHVtbi1nYXA6IDEycHg7XG5gXG5cbmV4cG9ydCBjb25zdCBmbGV4ID0ge1xuICByb3csXG4gIHJvd3dyYXAsXG4gIGNvbHVtbixcbiAganVzdGlmeWNlbnRlcixcbiAgc3BhY2UsXG4gIGl0ZW1zY2VudGVyLFxufVxuXG5leHBvcnQgY29uc3QgbWFyZ2lucyA9IChtYXJnaW5zOiBzdHJpbmcpID0+IGNzc2BcbiAgbWFyZ2luOiAke21hcmdpbnN9O1xuYFxuZXhwb3J0IGNvbnN0IHBhZGRpbmdzID0gKHBhZGRpbmdzOiBzdHJpbmcpID0+IGNzc2BcbiAgcGFkZGluZzogJHtwYWRkaW5nc307XG5gXG5cbmV4cG9ydCBjb25zdCBodW5kbyA9IGNzc2BcbiAgd2lkdGg6IDEwMCU7XG5gXG5cbmV4cG9ydCBjb25zdCBnbG9iYWxTdHlsZSA9IGNzc2BcbiAgaHRtbCB7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICB9IFxuICAqLCAmOjpiZWZvcmUsICY6OmFmdGVyIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG4gIGJvZHksIHVsLCBsaSwgYSwgcCwgc3BhbiwgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgbmF2LCBoZWFkZXIsIGZvb3RlciB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZm9udC1mYW1pbHk6ICdIZWx2ZXRpY2EgTmV1ZScsLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xuICAgIGNvbG9yOiAke2NvbG9ycy5ibGFjazcwfTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbiAgYm9keSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiAke2NvbG9ycy53aGl0ZX07XG4gIH1cbiAgYnV0dG9uIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgdWwge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICB9XG4gIHAge1xuICAgIGNvbG9yOiAke2NvbG9ycy5ibGFjazYwfTtcbiAgfVxuYDsiXX0= */"), ";label:globalStyle;");

/***/ }),

/***/ "./styles/text.ts":
/*!************************!*\
  !*** ./styles/text.ts ***!
  \************************/
/*! exports provided: fontSize, f1, text */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontSize", function() { return fontSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f1", function() { return f1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "text", function() { return text; });
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main */ "./styles/main.ts");


const fontSize = {
  huge: '6rem',
  big: '3rem',
  small: '.875rem',
  tiny: '.75rem'
};
const line =
/*#__PURE__*/

/*#__PURE__*/
Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"])("font-size:.875rem;line-height:24px;color:", _main__WEBPACK_IMPORTED_MODULE_1__["colors"].black60, ";;label:line;" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yc2JlYXIvZGV2L3R5cGVmZWVsL3N0eWxlcy90ZXh0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVVnQiIsImZpbGUiOiIvVXNlcnMvcnNiZWFyL2Rldi90eXBlZmVlbC9zdHlsZXMvdGV4dC50cyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGpzeCwgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSdcbmltcG9ydCB7IGNvbG9ycyB9IGZyb20gJy4vbWFpbidcblxuZXhwb3J0IGNvbnN0IGZvbnRTaXplID0ge1xuICBodWdlOiAnNnJlbScsXG4gIGJpZzogJzNyZW0nLFxuICBzbWFsbDogJy44NzVyZW0nLFxuICB0aW55OiAnLjc1cmVtJ1xufVxuXG5jb25zdCBsaW5lID0gY3NzYFxuICBmb250LXNpemU6IC44NzVyZW07XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBjb2xvcjogJHtjb2xvcnMuYmxhY2s2MH07XG5gXG5cbmV4cG9ydCBjb25zdCBmMSA9IGNzc2BcbiAgZm9udC1zaXplOiAzcmVtO1xuICBjb2xvcjogJHtjb2xvcnMuYmxhY2s3MH07XG5gXG5cbmV4cG9ydCBjb25zdCB0ZXh0ID0ge1xuICBsaW5lOiBsaW5lLFxuICBoZWFkaW5nOiBmMVxufSJdfQ== */"), ";label:line;");
const f1 =
/*#__PURE__*/

/*#__PURE__*/
Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"])("font-size:3rem;color:", _main__WEBPACK_IMPORTED_MODULE_1__["colors"].black70, ";;label:f1;" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yc2JlYXIvZGV2L3R5cGVmZWVsL3N0eWxlcy90ZXh0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdCcUIiLCJmaWxlIjoiL1VzZXJzL3JzYmVhci9kZXYvdHlwZWZlZWwvc3R5bGVzL3RleHQudHMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBqc3gsIGNzcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnXG5pbXBvcnQgeyBjb2xvcnMgfSBmcm9tICcuL21haW4nXG5cbmV4cG9ydCBjb25zdCBmb250U2l6ZSA9IHtcbiAgaHVnZTogJzZyZW0nLFxuICBiaWc6ICczcmVtJyxcbiAgc21hbGw6ICcuODc1cmVtJyxcbiAgdGlueTogJy43NXJlbSdcbn1cblxuY29uc3QgbGluZSA9IGNzc2BcbiAgZm9udC1zaXplOiAuODc1cmVtO1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgY29sb3I6ICR7Y29sb3JzLmJsYWNrNjB9O1xuYFxuXG5leHBvcnQgY29uc3QgZjEgPSBjc3NgXG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgY29sb3I6ICR7Y29sb3JzLmJsYWNrNzB9O1xuYFxuXG5leHBvcnQgY29uc3QgdGV4dCA9IHtcbiAgbGluZTogbGluZSxcbiAgaGVhZGluZzogZjFcbn0iXX0= */"), ";label:f1;");
const text = {
  line: line,
  heading: f1
};

/***/ }),

/***/ 7:
/*!************************************************!*\
  !*** multi ./pages/keyset/[shortId]/index.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/rsbear/dev/typefeel/pages/keyset/[shortId]/index.tsx */"./pages/keyset/[shortId]/index.tsx");


/***/ }),

/***/ "@apollo/react-hooks":
/*!**************************************!*\
  !*** external "@apollo/react-hooks" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@apollo/react-hooks");

/***/ }),

/***/ "@emotion/core":
/*!********************************!*\
  !*** external "@emotion/core" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@emotion/core");

/***/ }),

/***/ "@emotion/css":
/*!*******************************!*\
  !*** external "@emotion/css" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@emotion/css");

/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=[shortId].js.map