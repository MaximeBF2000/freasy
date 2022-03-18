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

/***/ "./src/components/TaxConverter/TaxConverter.component.js":
/*!***************************************************************!*\
  !*** ./src/components/TaxConverter/TaxConverter.component.js ***!
  \***************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TaxConverter\": function() { return /* binding */ TaxConverter; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _useBrutNetConverter_hook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useBrutNetConverter.hook */ \"./src/components/TaxConverter/useBrutNetConverter.hook.js\");\n/* harmony import */ var _utils_functions_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/functions.utils */ \"./src/utils/functions.utils.js\");\n/* harmony import */ var _TaxConverter_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TaxConverter.styled */ \"./src/components/TaxConverter/TaxConverter.styled.js\");\n/* harmony import */ var _useTjm_hook__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useTjm.hook */ \"./src/components/TaxConverter/useTjm.hook.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\nvar _jsxFileName = \"/Users/maximebf/Desktop/Desk/programming/projects/webapps/freasy/src/components/TaxConverter/TaxConverter.component.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar TaxConverter = function TaxConverter() {\n  _s();\n\n  var _useBrutNetConverter = (0,_useBrutNetConverter_hook__WEBPACK_IMPORTED_MODULE_1__.useBrutNetConverter)(),\n      brut = _useBrutNetConverter.brut,\n      net = _useBrutNetConverter.net,\n      brutToNet = _useBrutNetConverter.brutToNet,\n      netToBrut = _useBrutNetConverter.netToBrut,\n      setBrut = _useBrutNetConverter.setBrut;\n\n  var _useTjm = (0,_useTjm_hook__WEBPACK_IMPORTED_MODULE_4__.useTjm)(setBrut),\n      tjm = _useTjm.tjm,\n      tjmToBrut = _useTjm.tjmToBrut,\n      brutToTjm = _useTjm.brutToTjm;\n\n  var cascadeNetToTjm = function cascadeNetToTjm(e) {\n    netToBrut(e);\n    brutToTjm(brut);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_TaxConverter_styled__WEBPACK_IMPORTED_MODULE_3__.TaxConverter, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_TaxConverter_styled__WEBPACK_IMPORTED_MODULE_3__.Input, {\n      placeholder: \"Brut value\",\n      value: brut,\n      onChange: (0,_utils_functions_utils__WEBPACK_IMPORTED_MODULE_2__.runAll)(brutToNet, brutToTjm)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_TaxConverter_styled__WEBPACK_IMPORTED_MODULE_3__.Input, {\n      placeholder: \"Net value\",\n      value: net,\n      onChange: cascadeNetToTjm\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_TaxConverter_styled__WEBPACK_IMPORTED_MODULE_3__.Input, {\n      placeholder: \"Brut TJM\",\n      value: tjm,\n      onChange: tjmToBrut\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 20,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(TaxConverter, \"OT3VfjlgtPiKXyuhJnEdHRzAqWY=\", false, function () {\n  return [_useBrutNetConverter_hook__WEBPACK_IMPORTED_MODULE_1__.useBrutNetConverter, _useTjm_hook__WEBPACK_IMPORTED_MODULE_4__.useTjm];\n});\n\n_c = TaxConverter;\n\nvar _c;\n\n$RefreshReg$(_c, \"TaxConverter\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9UYXhDb252ZXJ0ZXIvVGF4Q29udmVydGVyLmNvbXBvbmVudC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTs7QUFFTyxJQUFNRyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQUE7O0FBQ2hDLDZCQUFxREYsOEVBQW1CLEVBQXhFO0FBQUEsTUFBUU0sSUFBUix3QkFBUUEsSUFBUjtBQUFBLE1BQWNDLEdBQWQsd0JBQWNBLEdBQWQ7QUFBQSxNQUFtQkMsU0FBbkIsd0JBQW1CQSxTQUFuQjtBQUFBLE1BQThCQyxTQUE5Qix3QkFBOEJBLFNBQTlCO0FBQUEsTUFBeUNDLE9BQXpDLHdCQUF5Q0EsT0FBekM7O0FBQ0EsZ0JBQXNDTCxvREFBTSxDQUFDSyxPQUFELENBQTVDO0FBQUEsTUFBUUMsR0FBUixXQUFRQSxHQUFSO0FBQUEsTUFBYUMsU0FBYixXQUFhQSxTQUFiO0FBQUEsTUFBd0JDLFNBQXhCLFdBQXdCQSxTQUF4Qjs7QUFFQSxNQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUFDLENBQUMsRUFBSTtBQUMzQk4sSUFBQUEsU0FBUyxDQUFDTSxDQUFELENBQVQ7QUFDQUYsSUFBQUEsU0FBUyxDQUFDUCxJQUFELENBQVQ7QUFDRCxHQUhEOztBQUtBLHNCQUNFLDhEQUFDLDhEQUFEO0FBQUEsNEJBQ0UsOERBQUMsdURBQUQ7QUFDRSxpQkFBVyxFQUFDLFlBRGQ7QUFFRSxXQUFLLEVBQUVBLElBRlQ7QUFHRSxjQUFRLEVBQUVMLDhEQUFNLENBQUNPLFNBQUQsRUFBWUssU0FBWjtBQUhsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFNRSw4REFBQyx1REFBRDtBQUFPLGlCQUFXLEVBQUMsV0FBbkI7QUFBK0IsV0FBSyxFQUFFTixHQUF0QztBQUEyQyxjQUFRLEVBQUVPO0FBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFORixlQU9FLDhEQUFDLHVEQUFEO0FBQU8saUJBQVcsRUFBQyxVQUFuQjtBQUE4QixXQUFLLEVBQUVILEdBQXJDO0FBQTBDLGNBQVEsRUFBRUM7QUFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBV0QsQ0FwQk07O0dBQU1WO1VBQzBDRiw0RUFDZks7OztLQUYzQkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVGF4Q29udmVydGVyL1RheENvbnZlcnRlci5jb21wb25lbnQuanM/MGQ5MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VCcnV0TmV0Q29udmVydGVyIH0gZnJvbSAnLi91c2VCcnV0TmV0Q29udmVydGVyLmhvb2snXG5pbXBvcnQgeyBydW5BbGwgfSBmcm9tICcuLi8uLi91dGlscy9mdW5jdGlvbnMudXRpbHMnXG5pbXBvcnQge1xuICBUYXhDb252ZXJ0ZXIgYXMgU3R5bGVkVGF4Q29udmVydGVyLFxuICBJbnB1dFxufSBmcm9tICcuL1RheENvbnZlcnRlci5zdHlsZWQnXG5pbXBvcnQgeyB1c2VUam0gfSBmcm9tICcuL3VzZVRqbS5ob29rJ1xuXG5leHBvcnQgY29uc3QgVGF4Q29udmVydGVyID0gKCkgPT4ge1xuICBjb25zdCB7IGJydXQsIG5ldCwgYnJ1dFRvTmV0LCBuZXRUb0JydXQsIHNldEJydXQgfSA9IHVzZUJydXROZXRDb252ZXJ0ZXIoKVxuICBjb25zdCB7IHRqbSwgdGptVG9CcnV0LCBicnV0VG9Uam0gfSA9IHVzZVRqbShzZXRCcnV0KVxuXG4gIGNvbnN0IGNhc2NhZGVOZXRUb1RqbSA9IGUgPT4ge1xuICAgIG5ldFRvQnJ1dChlKVxuICAgIGJydXRUb1RqbShicnV0KVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8U3R5bGVkVGF4Q29udmVydGVyPlxuICAgICAgPElucHV0XG4gICAgICAgIHBsYWNlaG9sZGVyPVwiQnJ1dCB2YWx1ZVwiXG4gICAgICAgIHZhbHVlPXticnV0fVxuICAgICAgICBvbkNoYW5nZT17cnVuQWxsKGJydXRUb05ldCwgYnJ1dFRvVGptKX1cbiAgICAgIC8+XG4gICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCJOZXQgdmFsdWVcIiB2YWx1ZT17bmV0fSBvbkNoYW5nZT17Y2FzY2FkZU5ldFRvVGptfSAvPlxuICAgICAgPElucHV0IHBsYWNlaG9sZGVyPVwiQnJ1dCBUSk1cIiB2YWx1ZT17dGptfSBvbkNoYW5nZT17dGptVG9CcnV0fSAvPlxuICAgIDwvU3R5bGVkVGF4Q29udmVydGVyPlxuICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VCcnV0TmV0Q29udmVydGVyIiwicnVuQWxsIiwiVGF4Q29udmVydGVyIiwiU3R5bGVkVGF4Q29udmVydGVyIiwiSW5wdXQiLCJ1c2VUam0iLCJicnV0IiwibmV0IiwiYnJ1dFRvTmV0IiwibmV0VG9CcnV0Iiwic2V0QnJ1dCIsInRqbSIsInRqbVRvQnJ1dCIsImJydXRUb1RqbSIsImNhc2NhZGVOZXRUb1RqbSIsImUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/TaxConverter/TaxConverter.component.js\n");

/***/ })

});