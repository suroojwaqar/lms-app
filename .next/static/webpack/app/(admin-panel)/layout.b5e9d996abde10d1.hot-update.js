"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(admin-panel)/layout",{

/***/ "(app-pages-browser)/./src/lib/menu-list.ts":
/*!******************************!*\
  !*** ./src/lib/menu-list.ts ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getMenuList: function() { return /* binding */ getMenuList; }\n/* harmony export */ });\n/* harmony import */ var _barrel_optimize_names_ClipboardList_LayoutGrid_Users_lucide_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! __barrel_optimize__?names=ClipboardList,LayoutGrid,Users!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/layout-grid.js\");\n/* harmony import */ var _barrel_optimize_names_ClipboardList_LayoutGrid_Users_lucide_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! __barrel_optimize__?names=ClipboardList,LayoutGrid,Users!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/users.js\");\n/* harmony import */ var _barrel_optimize_names_ClipboardList_LayoutGrid_Users_lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=ClipboardList,LayoutGrid,Users!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/clipboard-list.js\");\n\nfunction getMenuList(pathname) {\n    let attributeTypes = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];\n    return [\n        {\n            groupLabel: \"\",\n            menus: [\n                {\n                    href: \"/dashboard\",\n                    label: \"Dashboard\",\n                    icon: _barrel_optimize_names_ClipboardList_LayoutGrid_Users_lucide_react__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n                    submenus: []\n                }\n            ]\n        },\n        {\n            groupLabel: \"\",\n            menus: [\n                {\n                    href: \"\",\n                    label: \"User Management\",\n                    icon: _barrel_optimize_names_ClipboardList_LayoutGrid_Users_lucide_react__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n                    submenus: [\n                        {\n                            href: \"/user-management\",\n                            label: \"Users\"\n                        },\n                        {\n                            href: \"/user-management/roles\",\n                            label: \"Role\"\n                        }\n                    ]\n                }\n            ]\n        },\n        {\n            groupLabel: \"\",\n            menus: [\n                {\n                    href: \"\",\n                    label: \"Curriculum Management\",\n                    icon: _barrel_optimize_names_ClipboardList_LayoutGrid_Users_lucide_react__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n                    submenus: [\n                        {\n                            href: \"/classes\",\n                            label: \"Classes\"\n                        },\n                        {\n                            href: \"/subjects\",\n                            label: \"Subjects\"\n                        },\n                        {\n                            href: \"/chapters\",\n                            label: \"Chapters\"\n                        },\n                        {\n                            href: \"/lectures\",\n                            label: \"Lectures\"\n                        },\n                        {\n                            href: \"/assessments\",\n                            label: \"Assessments\"\n                        }\n                    ]\n                }\n            ]\n        },\n        {\n            groupLabel: \"\",\n            menus: [\n                {\n                    href: \"\",\n                    label: \"Meta Data\",\n                    icon: _barrel_optimize_names_ClipboardList_LayoutGrid_Users_lucide_react__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n                    submenus: [\n                        {\n                            href: \"/attribute-type\",\n                            label: \"Attribute Type\"\n                        },\n                        {\n                            href: \"/section\",\n                            label: \"Section\"\n                        }\n                    ]\n                }\n            ]\n        },\n        {\n            groupLabel: \"\",\n            menus: [\n                {\n                    href: \"\",\n                    label: \"attributes\",\n                    icon: _barrel_optimize_names_ClipboardList_LayoutGrid_Users_lucide_react__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n                    submenus: [\n                        ...attributeTypes.map((type)=>({\n                                href: \"/attributes/\".concat(type.name.toLowerCase()),\n                                label: type.name\n                            }))\n                    ]\n                }\n            ]\n        }\n    ];\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9saWIvbWVudS1saXN0LnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFTc0I7QUF3QmYsU0FBU0csWUFBWUMsUUFBZ0I7UUFBRUMsaUJBQUFBLGlFQUFrQyxFQUFFO0lBQ2hGLE9BQU87UUFDTDtZQUNFQyxZQUFZO1lBQ1pDLE9BQU87Z0JBQ0w7b0JBQ0VDLE1BQU07b0JBQ05DLE9BQU87b0JBQ1BDLE1BQU1ULDBHQUFVQTtvQkFDaEJVLFVBQVUsRUFBRTtnQkFDZDthQUNEO1FBQ0g7UUFDQTtZQUNFTCxZQUFZO1lBQ1pDLE9BQU87Z0JBQ0w7b0JBQ0VDLE1BQU07b0JBQ05DLE9BQU87b0JBQ1BDLE1BQU1WLDBHQUFLQTtvQkFDWFcsVUFBVTt3QkFDUjs0QkFDRUgsTUFBTTs0QkFDTkMsT0FBTzt3QkFDVDt3QkFDQTs0QkFDRUQsTUFBTTs0QkFDTkMsT0FBTzt3QkFDVDtxQkFDRDtnQkFDSDthQUNEO1FBQ0g7UUFDQTtZQUNFSCxZQUFZO1lBQ1pDLE9BQU87Z0JBQ0w7b0JBQ0VDLE1BQU07b0JBQ05DLE9BQU87b0JBQ1BDLE1BQU1SLDBHQUFhQTtvQkFDbkJTLFVBQVU7d0JBQ1I7NEJBQ0VILE1BQU07NEJBQ05DLE9BQU87d0JBQ1Q7d0JBRUE7NEJBQ0VELE1BQU07NEJBQ05DLE9BQU87d0JBQ1Q7d0JBRUE7NEJBQ0VELE1BQU07NEJBQ05DLE9BQU87d0JBQ1Q7d0JBQ0E7NEJBQ0VELE1BQU07NEJBQ05DLE9BQU87d0JBQ1Q7d0JBQ0E7NEJBQ0VELE1BQU07NEJBQ05DLE9BQU87d0JBQ1Q7cUJBQ0Q7Z0JBQ0g7YUFDRDtRQUNIO1FBQ0E7WUFDRUgsWUFBWTtZQUNaQyxPQUFPO2dCQUNMO29CQUNFQyxNQUFNO29CQUNOQyxPQUFPO29CQUNQQyxNQUFNUiwwR0FBYUE7b0JBQ25CUyxVQUFVO3dCQUNSOzRCQUNFSCxNQUFNOzRCQUNOQyxPQUFPO3dCQUNUO3dCQUNBOzRCQUNFRCxNQUFNOzRCQUNOQyxPQUFPO3dCQUNUO3FCQUVEO2dCQUNIO2FBQ0Q7UUFDSDtRQUNBO1lBQ0VILFlBQVk7WUFDWkMsT0FBTztnQkFDTDtvQkFDRUMsTUFBTTtvQkFDTkMsT0FBTztvQkFDUEMsTUFBTVIsMEdBQWFBO29CQUNuQlMsVUFBVTsyQkFDTE4sZUFBZU8sR0FBRyxDQUFDQyxDQUFBQSxPQUFTO2dDQUM3QkwsTUFBTSxlQUF1QyxPQUF4QkssS0FBS0MsSUFBSSxDQUFDQyxXQUFXO2dDQUMxQ04sT0FBT0ksS0FBS0MsSUFBSTs0QkFDbEI7cUJBQ0Q7Z0JBQ0g7YUFDRDtRQUNIO0tBQ0Q7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvbGliL21lbnUtbGlzdC50cz8zMTA3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgVGFnLFxyXG4gIFVzZXJzLFxyXG4gIFNldHRpbmdzLFxyXG4gIEJvb2ttYXJrLFxyXG4gIFNxdWFyZVBlbixcclxuICBMYXlvdXRHcmlkLFxyXG4gIEx1Y2lkZUljb24sXHJcbiAgQ2xpcGJvYXJkTGlzdFxyXG59IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcclxuaW1wb3J0IHsgQXR0cmlidXRlVHlwZSB9IGZyb20gXCJAL3R5cGVzL2F0dHJpYnV0ZS10eXBlXCI7XHJcblxyXG50eXBlIFN1Ym1lbnUgPSB7XHJcbiAgaHJlZjogc3RyaW5nO1xyXG4gIGxhYmVsOiBzdHJpbmc7XHJcbiAgYWN0aXZlPzogYm9vbGVhbjtcclxufTtcclxuXHJcbnR5cGUgTWVudSA9IHtcclxuICBocmVmOiBzdHJpbmc7XHJcbiAgbGFiZWw6IHN0cmluZztcclxuICBhY3RpdmU/OiBib29sZWFuO1xyXG4gIGljb246IEx1Y2lkZUljb247XHJcbiAgc3VibWVudXM/OiBTdWJtZW51W107XHJcbn07XHJcblxyXG50eXBlIEdyb3VwID0ge1xyXG4gIGdyb3VwTGFiZWw6IHN0cmluZztcclxuICBtZW51czogTWVudVtdO1xyXG59O1xyXG5cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TWVudUxpc3QocGF0aG5hbWU6IHN0cmluZywgYXR0cmlidXRlVHlwZXM6IEF0dHJpYnV0ZVR5cGVbXSA9IFtdKTogR3JvdXBbXSB7XHJcbiAgcmV0dXJuIFtcclxuICAgIHtcclxuICAgICAgZ3JvdXBMYWJlbDogXCJcIixcclxuICAgICAgbWVudXM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBocmVmOiBcIi9kYXNoYm9hcmRcIixcclxuICAgICAgICAgIGxhYmVsOiBcIkRhc2hib2FyZFwiLFxyXG4gICAgICAgICAgaWNvbjogTGF5b3V0R3JpZCxcclxuICAgICAgICAgIHN1Ym1lbnVzOiBbXVxyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgZ3JvdXBMYWJlbDogXCJcIixcclxuICAgICAgbWVudXM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBocmVmOiBcIlwiLFxyXG4gICAgICAgICAgbGFiZWw6IFwiVXNlciBNYW5hZ2VtZW50XCIsXHJcbiAgICAgICAgICBpY29uOiBVc2VycyxcclxuICAgICAgICAgIHN1Ym1lbnVzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBocmVmOiBcIi91c2VyLW1hbmFnZW1lbnRcIixcclxuICAgICAgICAgICAgICBsYWJlbDogXCJVc2Vyc1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBocmVmOiBcIi91c2VyLW1hbmFnZW1lbnQvcm9sZXNcIixcclxuICAgICAgICAgICAgICBsYWJlbDogXCJSb2xlXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgXVxyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgZ3JvdXBMYWJlbDogXCJcIixcclxuICAgICAgbWVudXM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBocmVmOiBcIlwiLFxyXG4gICAgICAgICAgbGFiZWw6IFwiQ3VycmljdWx1bSBNYW5hZ2VtZW50XCIsXHJcbiAgICAgICAgICBpY29uOiBDbGlwYm9hcmRMaXN0LFxyXG4gICAgICAgICAgc3VibWVudXM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGhyZWY6IFwiL2NsYXNzZXNcIixcclxuICAgICAgICAgICAgICBsYWJlbDogXCJDbGFzc2VzXCJcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBocmVmOiBcIi9zdWJqZWN0c1wiLFxyXG4gICAgICAgICAgICAgIGxhYmVsOiBcIlN1YmplY3RzXCJcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBocmVmOiBcIi9jaGFwdGVyc1wiLFxyXG4gICAgICAgICAgICAgIGxhYmVsOiBcIkNoYXB0ZXJzXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGhyZWY6IFwiL2xlY3R1cmVzXCIsXHJcbiAgICAgICAgICAgICAgbGFiZWw6IFwiTGVjdHVyZXNcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgaHJlZjogXCIvYXNzZXNzbWVudHNcIixcclxuICAgICAgICAgICAgICBsYWJlbDogXCJBc3Nlc3NtZW50c1wiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIF1cclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGdyb3VwTGFiZWw6IFwiXCIsXHJcbiAgICAgIG1lbnVzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaHJlZjogXCJcIixcclxuICAgICAgICAgIGxhYmVsOiBcIk1ldGEgRGF0YVwiLFxyXG4gICAgICAgICAgaWNvbjogQ2xpcGJvYXJkTGlzdCxcclxuICAgICAgICAgIHN1Ym1lbnVzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBocmVmOiBcIi9hdHRyaWJ1dGUtdHlwZVwiLFxyXG4gICAgICAgICAgICAgIGxhYmVsOiBcIkF0dHJpYnV0ZSBUeXBlXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGhyZWY6IFwiL3NlY3Rpb25cIixcclxuICAgICAgICAgICAgICBsYWJlbDogXCJTZWN0aW9uXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgXVxyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgZ3JvdXBMYWJlbDogXCJcIixcclxuICAgICAgbWVudXM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBocmVmOiBcIlwiLFxyXG4gICAgICAgICAgbGFiZWw6IFwiYXR0cmlidXRlc1wiLFxyXG4gICAgICAgICAgaWNvbjogQ2xpcGJvYXJkTGlzdCxcclxuICAgICAgICAgIHN1Ym1lbnVzOiBbXHJcbiAgICAgICAgICAgIC4uLmF0dHJpYnV0ZVR5cGVzLm1hcCh0eXBlID0+ICh7XHJcbiAgICAgICAgICAgICAgaHJlZjogYC9hdHRyaWJ1dGVzLyR7dHlwZS5uYW1lLnRvTG93ZXJDYXNlKCl9YCxcclxuICAgICAgICAgICAgICBsYWJlbDogdHlwZS5uYW1lXHJcbiAgICAgICAgICAgIH0pKVxyXG4gICAgICAgICAgXVxyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfVxyXG4gIF07XHJcbn1cclxuIl0sIm5hbWVzIjpbIlVzZXJzIiwiTGF5b3V0R3JpZCIsIkNsaXBib2FyZExpc3QiLCJnZXRNZW51TGlzdCIsInBhdGhuYW1lIiwiYXR0cmlidXRlVHlwZXMiLCJncm91cExhYmVsIiwibWVudXMiLCJocmVmIiwibGFiZWwiLCJpY29uIiwic3VibWVudXMiLCJtYXAiLCJ0eXBlIiwibmFtZSIsInRvTG93ZXJDYXNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/lib/menu-list.ts\n"));

/***/ })

});