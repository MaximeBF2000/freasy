"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/MainRouter/MainRouter.component.js":
/*!***********************************************************!*\
  !*** ./src/components/MainRouter/MainRouter.component.js ***!
  \***********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MainRouter\": function() { return /* binding */ MainRouter; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! .. */ \"./src/components/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/maximebf/Desktop/Desk/programming/projects/webapps/freasy/src/components/MainRouter/MainRouter.component.js\",\n    _this = undefined;\n\n\n\n\n\nvar wrapper = function wrapper(Component, title) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(___WEBPACK_IMPORTED_MODULE_1__.Main, {\n    title: title,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Component, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 5\n  }, _this);\n};\n\nvar MainRouter = function MainRouter(_ref) {\n  var route = _ref.route;\n\n  switch (route) {\n    case 'expenses':\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n        children: \"expenses\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 14\n      }, _this);\n\n    case 'tax_converter':\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n        children: \"tax converter\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 14\n      }, _this);\n\n    case 'invoices':\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n        children: \"my invoices\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 14\n      }, _this);\n\n    case 'contracts':\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n        children: \"my contracts\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 14\n      }, _this);\n\n    default:\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n        children: \"MainRouter\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 14\n      }, _this);\n  }\n};\n_c = MainRouter;\n\nvar _c;\n\n$RefreshReg$(_c, \"MainRouter\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9NYWluUm91dGVyL01haW5Sb3V0ZXIuY29tcG9uZW50LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUVBLElBQU1FLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLFNBQUQsRUFBWUMsS0FBWixFQUFzQjtBQUNwQyxzQkFDRSw4REFBQyxtQ0FBRDtBQUFNLFNBQUssRUFBRUEsS0FBYjtBQUFBLDJCQUNFLDhEQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQUtELENBTkQ7O0FBUU8sSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsT0FBZTtBQUFBLE1BQVpDLEtBQVksUUFBWkEsS0FBWTs7QUFDdkMsVUFBUUEsS0FBUjtBQUNFLFNBQUssVUFBTDtBQUNFLDBCQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7O0FBQ0YsU0FBSyxlQUFMO0FBQ0UsMEJBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDs7QUFDRixTQUFLLFVBQUw7QUFDRSwwQkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQOztBQUNGLFNBQUssV0FBTDtBQUNFLDBCQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7O0FBRUY7QUFDRSwwQkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBWEo7QUFhRCxDQWRNO0tBQU1EIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL01haW5Sb3V0ZXIvTWFpblJvdXRlci5jb21wb25lbnQuanM/ZGZmMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBNYWluIH0gZnJvbSAnLi4nXG5cbmNvbnN0IHdyYXBwZXIgPSAoQ29tcG9uZW50LCB0aXRsZSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxNYWluIHRpdGxlPXt0aXRsZX0+XG4gICAgICA8Q29tcG9uZW50IC8+XG4gICAgPC9NYWluPlxuICApXG59XG5cbmV4cG9ydCBjb25zdCBNYWluUm91dGVyID0gKHsgcm91dGUgfSkgPT4ge1xuICBzd2l0Y2ggKHJvdXRlKSB7XG4gICAgY2FzZSAnZXhwZW5zZXMnOlxuICAgICAgcmV0dXJuIDxkaXY+ZXhwZW5zZXM8L2Rpdj5cbiAgICBjYXNlICd0YXhfY29udmVydGVyJzpcbiAgICAgIHJldHVybiA8ZGl2PnRheCBjb252ZXJ0ZXI8L2Rpdj5cbiAgICBjYXNlICdpbnZvaWNlcyc6XG4gICAgICByZXR1cm4gPGRpdj5teSBpbnZvaWNlczwvZGl2PlxuICAgIGNhc2UgJ2NvbnRyYWN0cyc6XG4gICAgICByZXR1cm4gPGRpdj5teSBjb250cmFjdHM8L2Rpdj5cblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gPGRpdj5NYWluUm91dGVyPC9kaXY+XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIk1haW4iLCJ3cmFwcGVyIiwiQ29tcG9uZW50IiwidGl0bGUiLCJNYWluUm91dGVyIiwicm91dGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/MainRouter/MainRouter.component.js\n");

/***/ })

});