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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TaxConverter\": function() { return /* binding */ TaxConverter; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _useConverter_hook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useConverter.hook */ \"./src/components/TaxConverter/useConverter.hook.js\");\n/* harmony import */ var _utils_functions_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/functions.utils */ \"./src/utils/functions.utils.js\");\n/* harmony import */ var _TaxConverter_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TaxConverter.styled */ \"./src/components/TaxConverter/TaxConverter.styled.js\");\n/* harmony import */ var _useTjm_hook__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useTjm.hook */ \"./src/components/TaxConverter/useTjm.hook.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\nvar _jsxFileName = \"/Users/maximebf/Desktop/Desk/programming/projects/webapps/freasy/src/components/TaxConverter/TaxConverter.component.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar TaxConverter = function TaxConverter() {\n  _s();\n\n  var _ref = [(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(), (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(), (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)()],\n      brutInput = _ref[0],\n      netInput = _ref[1],\n      tjmInput = _ref[2];\n\n  var _useBrutNetConverter = (0,_useConverter_hook__WEBPACK_IMPORTED_MODULE_1__.useBrutNetConverter)(),\n      brut = _useBrutNetConverter.brut,\n      net = _useBrutNetConverter.net,\n      brutToNet = _useBrutNetConverter.brutToNet,\n      netToBrut = _useBrutNetConverter.netToBrut,\n      setBrut = _useBrutNetConverter.setBrut;\n\n  var _useTjm = (0,_useTjm_hook__WEBPACK_IMPORTED_MODULE_4__.useTjm)(setBrut),\n      tjm = _useTjm.tjm,\n      tjmToBrut = _useTjm.tjmToBrut,\n      brutToTjm = _useTjm.brutToTjm;\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_TaxConverter_styled__WEBPACK_IMPORTED_MODULE_3__.TaxConverter, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_TaxConverter_styled__WEBPACK_IMPORTED_MODULE_3__.Input, {\n      placeholder: \"Brut value\",\n      ref: brutInput,\n      value: brut,\n      onChange: (0,_utils_functions_utils__WEBPACK_IMPORTED_MODULE_2__.runAll)(brutToNet, brutToTjm)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_TaxConverter_styled__WEBPACK_IMPORTED_MODULE_3__.Input, {\n      placeholder: \"Net value\",\n      ref: netInput,\n      value: net,\n      onChange: (0,_utils_functions_utils__WEBPACK_IMPORTED_MODULE_2__.runAll)(netToBrut)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_TaxConverter_styled__WEBPACK_IMPORTED_MODULE_3__.Input, {\n      placeholder: \"Brut TJM\",\n      ref: tjmInput,\n      value: tjm,\n      onChange: (0,_utils_functions_utils__WEBPACK_IMPORTED_MODULE_2__.runAll)(tjmToBrut)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 16,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(TaxConverter, \"jS5l8CTMp4KPp5YD1zhCffEbLFw=\", false, function () {\n  return [_useConverter_hook__WEBPACK_IMPORTED_MODULE_1__.useBrutNetConverter, _useTjm_hook__WEBPACK_IMPORTED_MODULE_4__.useTjm];\n});\n\n_c = TaxConverter;\n\nvar _c;\n\n$RefreshReg$(_c, \"TaxConverter\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9UYXhDb252ZXJ0ZXIvVGF4Q29udmVydGVyLmNvbXBvbmVudC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTs7QUFFTyxJQUFNSSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQUE7O0FBQ2hDLGFBQXdDLENBQUNILDZDQUFNLEVBQVAsRUFBV0EsNkNBQU0sRUFBakIsRUFBcUJBLDZDQUFNLEVBQTNCLENBQXhDO0FBQUEsTUFBT08sU0FBUDtBQUFBLE1BQWtCQyxRQUFsQjtBQUFBLE1BQTRCQyxRQUE1Qjs7QUFDQSw2QkFBcURSLHVFQUFtQixFQUF4RTtBQUFBLE1BQVFTLElBQVIsd0JBQVFBLElBQVI7QUFBQSxNQUFjQyxHQUFkLHdCQUFjQSxHQUFkO0FBQUEsTUFBbUJDLFNBQW5CLHdCQUFtQkEsU0FBbkI7QUFBQSxNQUE4QkMsU0FBOUIsd0JBQThCQSxTQUE5QjtBQUFBLE1BQXlDQyxPQUF6Qyx3QkFBeUNBLE9BQXpDOztBQUNBLGdCQUFzQ1Isb0RBQU0sQ0FBQ1EsT0FBRCxDQUE1QztBQUFBLE1BQVFDLEdBQVIsV0FBUUEsR0FBUjtBQUFBLE1BQWFDLFNBQWIsV0FBYUEsU0FBYjtBQUFBLE1BQXdCQyxTQUF4QixXQUF3QkEsU0FBeEI7O0FBRUEsc0JBQ0UsOERBQUMsOERBQUQ7QUFBQSw0QkFDRSw4REFBQyx1REFBRDtBQUNFLGlCQUFXLEVBQUMsWUFEZDtBQUVFLFNBQUcsRUFBRVYsU0FGUDtBQUdFLFdBQUssRUFBRUcsSUFIVDtBQUlFLGNBQVEsRUFBRVIsOERBQU0sQ0FBQ1UsU0FBRCxFQUFZSyxTQUFaO0FBSmxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQU9FLDhEQUFDLHVEQUFEO0FBQ0UsaUJBQVcsRUFBQyxXQURkO0FBRUUsU0FBRyxFQUFFVCxRQUZQO0FBR0UsV0FBSyxFQUFFRyxHQUhUO0FBSUUsY0FBUSxFQUFFVCw4REFBTSxDQUFDVyxTQUFEO0FBSmxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFQRixlQWFFLDhEQUFDLHVEQUFEO0FBQ0UsaUJBQVcsRUFBQyxVQURkO0FBRUUsU0FBRyxFQUFFSixRQUZQO0FBR0UsV0FBSyxFQUFFTSxHQUhUO0FBSUUsY0FBUSxFQUFFYiw4REFBTSxDQUFDYyxTQUFEO0FBSmxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXNCRCxDQTNCTTs7R0FBTWI7VUFFMENGLHFFQUNmSzs7O0tBSDNCSCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9UYXhDb252ZXJ0ZXIvVGF4Q29udmVydGVyLmNvbXBvbmVudC5qcz8wZDkzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZUJydXROZXRDb252ZXJ0ZXIgfSBmcm9tICcuL3VzZUNvbnZlcnRlci5ob29rJ1xuaW1wb3J0IHsgcnVuQWxsIH0gZnJvbSAnLi4vLi4vdXRpbHMvZnVuY3Rpb25zLnV0aWxzJ1xuaW1wb3J0IHtcbiAgVGF4Q29udmVydGVyIGFzIFN0eWxlZFRheENvbnZlcnRlcixcbiAgSW5wdXRcbn0gZnJvbSAnLi9UYXhDb252ZXJ0ZXIuc3R5bGVkJ1xuaW1wb3J0IHsgdXNlVGptIH0gZnJvbSAnLi91c2VUam0uaG9vaydcblxuZXhwb3J0IGNvbnN0IFRheENvbnZlcnRlciA9ICgpID0+IHtcbiAgY29uc3QgW2JydXRJbnB1dCwgbmV0SW5wdXQsIHRqbUlucHV0XSA9IFt1c2VSZWYoKSwgdXNlUmVmKCksIHVzZVJlZigpXVxuICBjb25zdCB7IGJydXQsIG5ldCwgYnJ1dFRvTmV0LCBuZXRUb0JydXQsIHNldEJydXQgfSA9IHVzZUJydXROZXRDb252ZXJ0ZXIoKVxuICBjb25zdCB7IHRqbSwgdGptVG9CcnV0LCBicnV0VG9Uam0gfSA9IHVzZVRqbShzZXRCcnV0KVxuXG4gIHJldHVybiAoXG4gICAgPFN0eWxlZFRheENvbnZlcnRlcj5cbiAgICAgIDxJbnB1dFxuICAgICAgICBwbGFjZWhvbGRlcj1cIkJydXQgdmFsdWVcIlxuICAgICAgICByZWY9e2JydXRJbnB1dH1cbiAgICAgICAgdmFsdWU9e2JydXR9XG4gICAgICAgIG9uQ2hhbmdlPXtydW5BbGwoYnJ1dFRvTmV0LCBicnV0VG9Uam0pfVxuICAgICAgLz5cbiAgICAgIDxJbnB1dFxuICAgICAgICBwbGFjZWhvbGRlcj1cIk5ldCB2YWx1ZVwiXG4gICAgICAgIHJlZj17bmV0SW5wdXR9XG4gICAgICAgIHZhbHVlPXtuZXR9XG4gICAgICAgIG9uQ2hhbmdlPXtydW5BbGwobmV0VG9CcnV0KX1cbiAgICAgIC8+XG4gICAgICA8SW5wdXRcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJCcnV0IFRKTVwiXG4gICAgICAgIHJlZj17dGptSW5wdXR9XG4gICAgICAgIHZhbHVlPXt0am19XG4gICAgICAgIG9uQ2hhbmdlPXtydW5BbGwodGptVG9CcnV0KX1cbiAgICAgIC8+XG4gICAgPC9TdHlsZWRUYXhDb252ZXJ0ZXI+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJlZiIsInVzZUJydXROZXRDb252ZXJ0ZXIiLCJydW5BbGwiLCJUYXhDb252ZXJ0ZXIiLCJTdHlsZWRUYXhDb252ZXJ0ZXIiLCJJbnB1dCIsInVzZVRqbSIsImJydXRJbnB1dCIsIm5ldElucHV0IiwidGptSW5wdXQiLCJicnV0IiwibmV0IiwiYnJ1dFRvTmV0IiwibmV0VG9CcnV0Iiwic2V0QnJ1dCIsInRqbSIsInRqbVRvQnJ1dCIsImJydXRUb1RqbSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/TaxConverter/TaxConverter.component.js\n");

/***/ }),

/***/ "./src/components/TaxConverter/useConverter.hook.js":
/*!**********************************************************!*\
  !*** ./src/components/TaxConverter/useConverter.hook.js ***!
  \**********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useBrutNetConverter\": function() { return /* binding */ useBrutNetConverter; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _s = $RefreshSig$();\n\n\nvar TAXE_INFOS = {\n  COTISATION: 0.22,\n  FORMATION: 0.015,\n\n  get TOTAL() {\n    return 1 - (this.COTISATION + this.FORMATION);\n  }\n\n};\nvar useBrutNetConverter = function useBrutNetConverter() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),\n      brut = _useState[0],\n      setBrut = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(brut * TAXE_INFOS.TOTAL),\n      net = _useState2[0],\n      setNet = _useState2[1];\n\n  var brutToNet = function brutToNet(e) {\n    var newBrut = e.target.value;\n    setBrut(newBrut);\n    setNet(parseFloat(newBrut) * TAXE_INFOS.TOTAL);\n  };\n\n  var netToBrut = function netToBrut(e) {\n    var newNet = e.target.value;\n    setNet(newNet);\n    setBrut(parseFloat(newNet) / TAXE_INFOS.TOTAL);\n  };\n\n  return {\n    brut: brut,\n    setBrut: setBrut,\n    net: net,\n    setNet: setNet,\n    brutToNet: brutToNet,\n    netToBrut: netToBrut\n  };\n};\n\n_s(useBrutNetConverter, \"APeITG5y+HulOUClZLOUtQb5pdY=\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9UYXhDb252ZXJ0ZXIvdXNlQ29udmVydGVyLmhvb2suanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUVBLElBQU1DLFVBQVUsR0FBRztBQUNqQkMsRUFBQUEsVUFBVSxFQUFFLElBREs7QUFFakJDLEVBQUFBLFNBQVMsRUFBRSxLQUZNOztBQUdqQixNQUFJQyxLQUFKLEdBQVk7QUFDVixXQUFPLEtBQUssS0FBS0YsVUFBTCxHQUFrQixLQUFLQyxTQUE1QixDQUFQO0FBQ0Q7O0FBTGdCLENBQW5CO0FBUU8sSUFBTUUsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixHQUFNO0FBQUE7O0FBQ3ZDLGtCQUF3QkwsK0NBQVEsQ0FBQyxDQUFELENBQWhDO0FBQUEsTUFBT00sSUFBUDtBQUFBLE1BQWFDLE9BQWI7O0FBQ0EsbUJBQXNCUCwrQ0FBUSxDQUFDTSxJQUFJLEdBQUdMLFVBQVUsQ0FBQ0csS0FBbkIsQ0FBOUI7QUFBQSxNQUFPSSxHQUFQO0FBQUEsTUFBWUMsTUFBWjs7QUFFQSxNQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFBQyxDQUFDLEVBQUk7QUFDckIsUUFBTUMsT0FBTyxHQUFHRCxDQUFDLENBQUNFLE1BQUYsQ0FBU0MsS0FBekI7QUFDQVAsSUFBQUEsT0FBTyxDQUFDSyxPQUFELENBQVA7QUFDQUgsSUFBQUEsTUFBTSxDQUFDTSxVQUFVLENBQUNILE9BQUQsQ0FBVixHQUFzQlgsVUFBVSxDQUFDRyxLQUFsQyxDQUFOO0FBQ0QsR0FKRDs7QUFNQSxNQUFNWSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFBTCxDQUFDLEVBQUk7QUFDckIsUUFBTU0sTUFBTSxHQUFHTixDQUFDLENBQUNFLE1BQUYsQ0FBU0MsS0FBeEI7QUFDQUwsSUFBQUEsTUFBTSxDQUFDUSxNQUFELENBQU47QUFDQVYsSUFBQUEsT0FBTyxDQUFDUSxVQUFVLENBQUNFLE1BQUQsQ0FBVixHQUFxQmhCLFVBQVUsQ0FBQ0csS0FBakMsQ0FBUDtBQUNELEdBSkQ7O0FBTUEsU0FBTztBQUNMRSxJQUFBQSxJQUFJLEVBQUpBLElBREs7QUFFTEMsSUFBQUEsT0FBTyxFQUFQQSxPQUZLO0FBR0xDLElBQUFBLEdBQUcsRUFBSEEsR0FISztBQUlMQyxJQUFBQSxNQUFNLEVBQU5BLE1BSks7QUFLTEMsSUFBQUEsU0FBUyxFQUFUQSxTQUxLO0FBTUxNLElBQUFBLFNBQVMsRUFBVEE7QUFOSyxHQUFQO0FBUUQsQ0F4Qk07O0dBQU1YIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1RheENvbnZlcnRlci91c2VDb252ZXJ0ZXIuaG9vay5qcz84ZmZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmNvbnN0IFRBWEVfSU5GT1MgPSB7XG4gIENPVElTQVRJT046IDAuMjIsXG4gIEZPUk1BVElPTjogMC4wMTUsXG4gIGdldCBUT1RBTCgpIHtcbiAgICByZXR1cm4gMSAtICh0aGlzLkNPVElTQVRJT04gKyB0aGlzLkZPUk1BVElPTilcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgdXNlQnJ1dE5ldENvbnZlcnRlciA9ICgpID0+IHtcbiAgY29uc3QgW2JydXQsIHNldEJydXRdID0gdXNlU3RhdGUoMClcbiAgY29uc3QgW25ldCwgc2V0TmV0XSA9IHVzZVN0YXRlKGJydXQgKiBUQVhFX0lORk9TLlRPVEFMKVxuXG4gIGNvbnN0IGJydXRUb05ldCA9IGUgPT4ge1xuICAgIGNvbnN0IG5ld0JydXQgPSBlLnRhcmdldC52YWx1ZVxuICAgIHNldEJydXQobmV3QnJ1dClcbiAgICBzZXROZXQocGFyc2VGbG9hdChuZXdCcnV0KSAqIFRBWEVfSU5GT1MuVE9UQUwpXG4gIH1cblxuICBjb25zdCBuZXRUb0JydXQgPSBlID0+IHtcbiAgICBjb25zdCBuZXdOZXQgPSBlLnRhcmdldC52YWx1ZVxuICAgIHNldE5ldChuZXdOZXQpXG4gICAgc2V0QnJ1dChwYXJzZUZsb2F0KG5ld05ldCkgLyBUQVhFX0lORk9TLlRPVEFMKVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBicnV0LFxuICAgIHNldEJydXQsXG4gICAgbmV0LFxuICAgIHNldE5ldCxcbiAgICBicnV0VG9OZXQsXG4gICAgbmV0VG9CcnV0XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIlRBWEVfSU5GT1MiLCJDT1RJU0FUSU9OIiwiRk9STUFUSU9OIiwiVE9UQUwiLCJ1c2VCcnV0TmV0Q29udmVydGVyIiwiYnJ1dCIsInNldEJydXQiLCJuZXQiLCJzZXROZXQiLCJicnV0VG9OZXQiLCJlIiwibmV3QnJ1dCIsInRhcmdldCIsInZhbHVlIiwicGFyc2VGbG9hdCIsIm5ldFRvQnJ1dCIsIm5ld05ldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/TaxConverter/useConverter.hook.js\n");

/***/ })

});