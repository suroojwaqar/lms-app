"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(admin-panel)/section/page",{

/***/ "(app-pages-browser)/./src/lib/menu-list.ts":
/*!******************************!*\
  !*** ./src/lib/menu-list.ts ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getMenuList: function() { return /* binding */ getMenuList; }\n/* harmony export */ });\n/* harmony import */ var _barrel_optimize_names_ClipboardList_LayoutGrid_Users_lucide_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! __barrel_optimize__?names=ClipboardList,LayoutGrid,Users!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/layout-grid.js\");\n/* harmony import */ var _barrel_optimize_names_ClipboardList_LayoutGrid_Users_lucide_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! __barrel_optimize__?names=ClipboardList,LayoutGrid,Users!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/clipboard-list.js\");\n/* harmony import */ var _barrel_optimize_names_ClipboardList_LayoutGrid_Users_lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=ClipboardList,LayoutGrid,Users!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/users.js\");\n\nfunction getMenuList(pathname) {\n    return [\n        {\n            groupLabel: \"\",\n            menus: [\n                {\n                    href: \"/dashboard\",\n                    label: \"Dashboard\",\n                    icon: _barrel_optimize_names_ClipboardList_LayoutGrid_Users_lucide_react__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n                    submenus: []\n                }\n            ]\n        },\n        {\n            groupLabel: \"Curriculum Management\",\n            menus: [\n                {\n                    href: \"Classes\",\n                    label: \"classes\",\n                    icon: _barrel_optimize_names_ClipboardList_LayoutGrid_Users_lucide_react__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n                    submenus: []\n                },\n                {\n                    href: \"subjects\",\n                    label: \"Subjects\",\n                    icon: _barrel_optimize_names_ClipboardList_LayoutGrid_Users_lucide_react__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n                    submenus: []\n                },\n                {\n                    href: \"chapters\",\n                    label: \"Chapters\",\n                    icon: _barrel_optimize_names_ClipboardList_LayoutGrid_Users_lucide_react__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n                    submenus: []\n                },\n                {\n                    href: \"lectures\",\n                    label: \"Lectures\",\n                    icon: _barrel_optimize_names_ClipboardList_LayoutGrid_Users_lucide_react__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n                    submenus: []\n                }\n            ]\n        },\n        {\n            groupLabel: \"\",\n            menus: [\n                {\n                    href: \"\",\n                    label: \"User Management\",\n                    icon: _barrel_optimize_names_ClipboardList_LayoutGrid_Users_lucide_react__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n                    submenus: [\n                        {\n                            href: \"/user-management\",\n                            label: \"Users\"\n                        },\n                        {\n                            href: \"/user-management/roles\",\n                            label: \"Role\"\n                        }\n                    ]\n                }\n            ]\n        },\n        {\n            groupLabel: \"\",\n            menus: [\n                {\n                    href: \"\",\n                    label: \"Meta Data\",\n                    icon: _barrel_optimize_names_ClipboardList_LayoutGrid_Users_lucide_react__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n                    submenus: [\n                        {\n                            href: \"/attribute-type\",\n                            label: \"Attribute Type\"\n                        },\n                        {\n                            href: \"/section\",\n                            label: \"Section\"\n                        },\n                        {\n                            href: \"/attributes\",\n                            label: \"Attributes\"\n                        }\n                    ]\n                }\n            ]\n        }\n    ];\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9saWIvbWVudS1saXN0LnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFTc0I7QUF1QmYsU0FBU0csWUFBWUMsUUFBZ0I7SUFDMUMsT0FBTztRQUNMO1lBQ0VDLFlBQVk7WUFDWkMsT0FBTztnQkFDTDtvQkFDRUMsTUFBTTtvQkFDTkMsT0FBTztvQkFDUEMsTUFBTVIsMEdBQVVBO29CQUNoQlMsVUFBVSxFQUFFO2dCQUNkO2FBQ0Q7UUFDSDtRQUVBO1lBQ0VMLFlBQVk7WUFDWkMsT0FBTztnQkFDTDtvQkFDRUMsTUFBTTtvQkFDTkMsT0FBTztvQkFDUEMsTUFBTVAsMEdBQWFBO29CQUNuQlEsVUFBVSxFQUFFO2dCQUNkO2dCQUNBO29CQUNFSCxNQUFNO29CQUNOQyxPQUFPO29CQUNQQyxNQUFNUCwwR0FBYUE7b0JBQ25CUSxVQUFVLEVBQUU7Z0JBQ2Q7Z0JBQ0E7b0JBQ0VILE1BQU07b0JBQ05DLE9BQU87b0JBQ1BDLE1BQU1QLDBHQUFhQTtvQkFDbkJRLFVBQVUsRUFBRTtnQkFDZDtnQkFDQTtvQkFDRUgsTUFBTTtvQkFDTkMsT0FBTztvQkFDUEMsTUFBTVAsMEdBQWFBO29CQUNuQlEsVUFBVSxFQUFFO2dCQUNkO2FBQ0Q7UUFDSDtRQUNBO1lBQ0VMLFlBQVk7WUFDWkMsT0FBTztnQkFDTDtvQkFDRUMsTUFBTTtvQkFDTkMsT0FBTztvQkFDUEMsTUFBTVQsMEdBQUtBO29CQUNYVSxVQUFVO3dCQUNSOzRCQUNFSCxNQUFNOzRCQUNOQyxPQUFPO3dCQUNUO3dCQUNBOzRCQUNFRCxNQUFNOzRCQUNOQyxPQUFPO3dCQUNUO3FCQUNEO2dCQUNIO2FBQ0Q7UUFDSDtRQUNBO1lBQ0VILFlBQVk7WUFDWkMsT0FBTztnQkFDTDtvQkFDRUMsTUFBTTtvQkFDTkMsT0FBTztvQkFDUEMsTUFBTVAsMEdBQWFBO29CQUNuQlEsVUFBVTt3QkFDUjs0QkFDRUgsTUFBTTs0QkFDTkMsT0FBTzt3QkFDVDt3QkFDQTs0QkFDRUQsTUFBTTs0QkFDTkMsT0FBTzt3QkFDVDt3QkFDQTs0QkFDRUQsTUFBTTs0QkFDTkMsT0FBTzt3QkFDVDtxQkFDRDtnQkFDSDthQUNEO1FBQ0g7S0FDRDtBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9saWIvbWVudS1saXN0LnRzPzMxMDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBUYWcsXHJcbiAgVXNlcnMsXHJcbiAgU2V0dGluZ3MsXHJcbiAgQm9va21hcmssXHJcbiAgU3F1YXJlUGVuLFxyXG4gIExheW91dEdyaWQsXHJcbiAgTHVjaWRlSWNvbixcclxuICBDbGlwYm9hcmRMaXN0XHJcbn0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xyXG5cclxudHlwZSBTdWJtZW51ID0ge1xyXG4gIGhyZWY6IHN0cmluZztcclxuICBsYWJlbDogc3RyaW5nO1xyXG4gIGFjdGl2ZT86IGJvb2xlYW47XHJcbn07XHJcblxyXG50eXBlIE1lbnUgPSB7XHJcbiAgaHJlZjogc3RyaW5nO1xyXG4gIGxhYmVsOiBzdHJpbmc7XHJcbiAgYWN0aXZlPzogYm9vbGVhbjtcclxuICBpY29uOiBMdWNpZGVJY29uO1xyXG4gIHN1Ym1lbnVzPzogU3VibWVudVtdO1xyXG59O1xyXG5cclxudHlwZSBHcm91cCA9IHtcclxuICBncm91cExhYmVsOiBzdHJpbmc7XHJcbiAgbWVudXM6IE1lbnVbXTtcclxufTtcclxuXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldE1lbnVMaXN0KHBhdGhuYW1lOiBzdHJpbmcpOiBHcm91cFtdIHtcclxuICByZXR1cm4gW1xyXG4gICAge1xyXG4gICAgICBncm91cExhYmVsOiBcIlwiLFxyXG4gICAgICBtZW51czogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGhyZWY6IFwiL2Rhc2hib2FyZFwiLFxyXG4gICAgICAgICAgbGFiZWw6IFwiRGFzaGJvYXJkXCIsXHJcbiAgICAgICAgICBpY29uOiBMYXlvdXRHcmlkLFxyXG4gICAgICAgICAgc3VibWVudXM6IFtdXHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9LFxyXG5cclxuICAgIHtcclxuICAgICAgZ3JvdXBMYWJlbDogXCJDdXJyaWN1bHVtIE1hbmFnZW1lbnRcIixcclxuICAgICAgbWVudXM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBocmVmOiBcIkNsYXNzZXNcIixcclxuICAgICAgICAgIGxhYmVsOiBcImNsYXNzZXNcIixcclxuICAgICAgICAgIGljb246IENsaXBib2FyZExpc3QsXHJcbiAgICAgICAgICBzdWJtZW51czogW11cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGhyZWY6IFwic3ViamVjdHNcIixcclxuICAgICAgICAgIGxhYmVsOiBcIlN1YmplY3RzXCIsXHJcbiAgICAgICAgICBpY29uOiBDbGlwYm9hcmRMaXN0LFxyXG4gICAgICAgICAgc3VibWVudXM6IFtdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBocmVmOiBcImNoYXB0ZXJzXCIsXHJcbiAgICAgICAgICBsYWJlbDogXCJDaGFwdGVyc1wiLFxyXG4gICAgICAgICAgaWNvbjogQ2xpcGJvYXJkTGlzdCxcclxuICAgICAgICAgIHN1Ym1lbnVzOiBbXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaHJlZjogXCJsZWN0dXJlc1wiLFxyXG4gICAgICAgICAgbGFiZWw6IFwiTGVjdHVyZXNcIixcclxuICAgICAgICAgIGljb246IENsaXBib2FyZExpc3QsXHJcbiAgICAgICAgICBzdWJtZW51czogW11cclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGdyb3VwTGFiZWw6IFwiXCIsXHJcbiAgICAgIG1lbnVzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaHJlZjogXCJcIixcclxuICAgICAgICAgIGxhYmVsOiBcIlVzZXIgTWFuYWdlbWVudFwiLFxyXG4gICAgICAgICAgaWNvbjogVXNlcnMsXHJcbiAgICAgICAgICBzdWJtZW51czogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgaHJlZjogXCIvdXNlci1tYW5hZ2VtZW50XCIsXHJcbiAgICAgICAgICAgICAgbGFiZWw6IFwiVXNlcnNcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgaHJlZjogXCIvdXNlci1tYW5hZ2VtZW50L3JvbGVzXCIsXHJcbiAgICAgICAgICAgICAgbGFiZWw6IFwiUm9sZVwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIF1cclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGdyb3VwTGFiZWw6IFwiXCIsXHJcbiAgICAgIG1lbnVzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaHJlZjogXCJcIixcclxuICAgICAgICAgIGxhYmVsOiBcIk1ldGEgRGF0YVwiLFxyXG4gICAgICAgICAgaWNvbjogQ2xpcGJvYXJkTGlzdCxcclxuICAgICAgICAgIHN1Ym1lbnVzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBocmVmOiBcIi9hdHRyaWJ1dGUtdHlwZVwiLFxyXG4gICAgICAgICAgICAgIGxhYmVsOiBcIkF0dHJpYnV0ZSBUeXBlXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGhyZWY6IFwiL3NlY3Rpb25cIixcclxuICAgICAgICAgICAgICBsYWJlbDogXCJTZWN0aW9uXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGhyZWY6IFwiL2F0dHJpYnV0ZXNcIixcclxuICAgICAgICAgICAgICBsYWJlbDogXCJBdHRyaWJ1dGVzXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgXVxyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfVxyXG4gIF07XHJcbn1cclxuIl0sIm5hbWVzIjpbIlVzZXJzIiwiTGF5b3V0R3JpZCIsIkNsaXBib2FyZExpc3QiLCJnZXRNZW51TGlzdCIsInBhdGhuYW1lIiwiZ3JvdXBMYWJlbCIsIm1lbnVzIiwiaHJlZiIsImxhYmVsIiwiaWNvbiIsInN1Ym1lbnVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/lib/menu-list.ts\n"));

/***/ })

});