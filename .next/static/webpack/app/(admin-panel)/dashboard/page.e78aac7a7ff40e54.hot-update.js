"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(admin-panel)/dashboard/page",{

/***/ "(app-pages-browser)/./src/lib/menu-list.ts":
/*!******************************!*\
  !*** ./src/lib/menu-list.ts ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getMenuList: function() { return /* binding */ getMenuList; }\n/* harmony export */ });\n/* harmony import */ var _barrel_optimize_names_ClipboardList_LayoutGrid_Users_lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=ClipboardList,LayoutGrid,Users!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/layout-grid.js\");\n/* harmony import */ var _barrel_optimize_names_ClipboardList_LayoutGrid_Users_lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=ClipboardList,LayoutGrid,Users!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/users.js\");\n/* harmony import */ var _barrel_optimize_names_ClipboardList_LayoutGrid_Users_lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=ClipboardList,LayoutGrid,Users!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/clipboard-list.js\");\n/* harmony import */ var _utils_attribute_type_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/attribute-type-api */ \"(app-pages-browser)/./src/utils/attribute-type-api.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nfunction getMenuList(pathname) {\n    const [attributeTypes, setAttributeTypes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchAttributeTypes = async ()=>{\n            setLoading(true);\n            try {\n                console.log(\"Fetching attribute types...\");\n                const types = await _utils_attribute_type_api__WEBPACK_IMPORTED_MODULE_0__.attributeTypeApi.getAll();\n                console.log(\"Received types:\", types);\n                setAttributeTypes(types || []);\n            } catch (error) {\n                console.error(\"Failed to fetch attribute types:\", error);\n                setAttributeTypes([]);\n            } finally{\n                setLoading(false);\n            }\n        };\n        fetchAttributeTypes();\n    }, []);\n    return [\n        {\n            groupLabel: \"\",\n            menus: [\n                {\n                    href: \"/dashboard\",\n                    label: \"Dashboard\",\n                    icon: _barrel_optimize_names_ClipboardList_LayoutGrid_Users_lucide_react__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n                    submenus: []\n                }\n            ]\n        },\n        {\n            groupLabel: \"\",\n            menus: [\n                {\n                    href: \"\",\n                    label: \"User Management\",\n                    icon: _barrel_optimize_names_ClipboardList_LayoutGrid_Users_lucide_react__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                    submenus: [\n                        {\n                            href: \"/user-management\",\n                            label: \"Users\"\n                        },\n                        {\n                            href: \"/user-management/roles\",\n                            label: \"Role\"\n                        }\n                    ]\n                }\n            ]\n        },\n        {\n            groupLabel: \"\",\n            menus: [\n                {\n                    href: \"\",\n                    label: \"Curriculum Management\",\n                    icon: _barrel_optimize_names_ClipboardList_LayoutGrid_Users_lucide_react__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                    submenus: [\n                        {\n                            href: \"/classes\",\n                            label: \"Classes\"\n                        },\n                        {\n                            href: \"/subjects\",\n                            label: \"Subjects\"\n                        },\n                        {\n                            href: \"/chapters\",\n                            label: \"Chapters\"\n                        },\n                        {\n                            href: \"/lectures\",\n                            label: \"Lectures\"\n                        },\n                        {\n                            href: \"/assessments\",\n                            label: \"Assessments\"\n                        }\n                    ]\n                }\n            ]\n        },\n        {\n            groupLabel: \"\",\n            menus: [\n                {\n                    href: \"\",\n                    label: \"Meta Data\",\n                    icon: _barrel_optimize_names_ClipboardList_LayoutGrid_Users_lucide_react__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                    submenus: [\n                        {\n                            href: \"/attribute-type\",\n                            label: \"Attribute Type\"\n                        },\n                        {\n                            href: \"/section\",\n                            label: \"Section\"\n                        }\n                    ]\n                }\n            ]\n        },\n        {\n            groupLabel: \"\",\n            menus: [\n                {\n                    href: \"\",\n                    label: \"attributes\",\n                    icon: _barrel_optimize_names_ClipboardList_LayoutGrid_Users_lucide_react__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                    submenus: [\n                        ...attributeTypes.map((type)=>({\n                                href: \"/attributes/\".concat(type.name.toLowerCase()),\n                                label: type.name\n                            }))\n                    ]\n                }\n            ]\n        }\n    ];\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9saWIvbWVudS1saXN0LnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFTc0I7QUFDd0M7QUFFbEI7QUF1QnJDLFNBQVNNLFlBQVlDLFFBQWdCO0lBQzFDLE1BQU0sQ0FBQ0MsZ0JBQWdCQyxrQkFBa0IsR0FBR0osK0NBQVFBLENBQWtCLEVBQUU7SUFDeEUsTUFBTSxDQUFDSyxTQUFTQyxXQUFXLEdBQUdOLCtDQUFRQSxDQUFDO0lBRXZDRCxnREFBU0EsQ0FBQztRQUNSLE1BQU1RLHNCQUFzQjtZQUMxQkQsV0FBVztZQUNYLElBQUk7Z0JBQ0ZFLFFBQVFDLEdBQUcsQ0FBQztnQkFDWixNQUFNQyxRQUFRLE1BQU1aLHVFQUFnQkEsQ0FBQ2EsTUFBTTtnQkFDM0NILFFBQVFDLEdBQUcsQ0FBQyxtQkFBbUJDO2dCQUMvQk4sa0JBQWtCTSxTQUFTLEVBQUU7WUFDL0IsRUFBRSxPQUFPRSxPQUFPO2dCQUNkSixRQUFRSSxLQUFLLENBQUMsb0NBQW9DQTtnQkFDbERSLGtCQUFrQixFQUFFO1lBQ3RCLFNBQVU7Z0JBQ1JFLFdBQVc7WUFDYjtRQUNGO1FBRUFDO0lBQ0YsR0FBRyxFQUFFO0lBR0wsT0FBTztRQUNMO1lBQ0VNLFlBQVk7WUFDWkMsT0FBTztnQkFDTDtvQkFDRUMsTUFBTTtvQkFDTkMsT0FBTztvQkFDUEMsTUFBTXJCLDBHQUFVQTtvQkFDaEJzQixVQUFVLEVBQUU7Z0JBQ2Q7YUFDRDtRQUNIO1FBQ0E7WUFDRUwsWUFBWTtZQUNaQyxPQUFPO2dCQUNMO29CQUNFQyxNQUFNO29CQUNOQyxPQUFPO29CQUNQQyxNQUFNdEIsMEdBQUtBO29CQUNYdUIsVUFBVTt3QkFDUjs0QkFDRUgsTUFBTTs0QkFDTkMsT0FBTzt3QkFDVDt3QkFDQTs0QkFDRUQsTUFBTTs0QkFDTkMsT0FBTzt3QkFDVDtxQkFDRDtnQkFDSDthQUNEO1FBQ0g7UUFDQTtZQUNFSCxZQUFZO1lBQ1pDLE9BQU87Z0JBQ0w7b0JBQ0VDLE1BQU07b0JBQ05DLE9BQU87b0JBQ1BDLE1BQU1wQiwwR0FBYUE7b0JBQ25CcUIsVUFBVTt3QkFDUjs0QkFDRUgsTUFBTTs0QkFDTkMsT0FBTzt3QkFDVDt3QkFFQTs0QkFDRUQsTUFBTTs0QkFDTkMsT0FBTzt3QkFDVDt3QkFFQTs0QkFDRUQsTUFBTTs0QkFDTkMsT0FBTzt3QkFDVDt3QkFDQTs0QkFDRUQsTUFBTTs0QkFDTkMsT0FBTzt3QkFDVDt3QkFDQTs0QkFDRUQsTUFBTTs0QkFDTkMsT0FBTzt3QkFDVDtxQkFDRDtnQkFDSDthQUNEO1FBQ0g7UUFDQTtZQUNFSCxZQUFZO1lBQ1pDLE9BQU87Z0JBQ0w7b0JBQ0VDLE1BQU07b0JBQ05DLE9BQU87b0JBQ1BDLE1BQU1wQiwwR0FBYUE7b0JBQ25CcUIsVUFBVTt3QkFDUjs0QkFDRUgsTUFBTTs0QkFDTkMsT0FBTzt3QkFDVDt3QkFDQTs0QkFDRUQsTUFBTTs0QkFDTkMsT0FBTzt3QkFDVDtxQkFDUztnQkFDYjthQUNEO1FBQ0g7UUFDQTtZQUNFSCxZQUFZO1lBQ1pDLE9BQU87Z0JBQ0w7b0JBQ0VDLE1BQU07b0JBQ05DLE9BQU87b0JBQ1BDLE1BQU1wQiwwR0FBYUE7b0JBQ25CcUIsVUFBVTsyQkFDTGYsZUFBZWdCLEdBQUcsQ0FBQ0MsQ0FBQUEsT0FBUztnQ0FDN0JMLE1BQU0sZUFBdUMsT0FBeEJLLEtBQUtDLElBQUksQ0FBQ0MsV0FBVztnQ0FDMUNOLE9BQU9JLEtBQUtDLElBQUk7NEJBQ2xCO3FCQUNEO2dCQUNIO2FBQ0Q7UUFDSDtLQUNEO0FBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2xpYi9tZW51LWxpc3QudHM/MzEwNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIFRhZyxcclxuICBVc2VycyxcclxuICBTZXR0aW5ncyxcclxuICBCb29rbWFyayxcclxuICBTcXVhcmVQZW4sXHJcbiAgTGF5b3V0R3JpZCxcclxuICBMdWNpZGVJY29uLFxyXG4gIENsaXBib2FyZExpc3RcclxufSBmcm9tIFwibHVjaWRlLXJlYWN0XCI7XHJcbmltcG9ydCB7IGF0dHJpYnV0ZVR5cGVBcGkgfSBmcm9tIFwiQC91dGlscy9hdHRyaWJ1dGUtdHlwZS1hcGlcIjtcclxuaW1wb3J0IHsgQXR0cmlidXRlVHlwZSB9IGZyb20gXCJAL3R5cGVzL2F0dHJpYnV0ZS10eXBlXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbnR5cGUgU3VibWVudSA9IHtcclxuICBocmVmOiBzdHJpbmc7XHJcbiAgbGFiZWw6IHN0cmluZztcclxuICBhY3RpdmU/OiBib29sZWFuO1xyXG59O1xyXG5cclxudHlwZSBNZW51ID0ge1xyXG4gIGhyZWY6IHN0cmluZztcclxuICBsYWJlbDogc3RyaW5nO1xyXG4gIGFjdGl2ZT86IGJvb2xlYW47XHJcbiAgaWNvbjogTHVjaWRlSWNvbjtcclxuICBzdWJtZW51cz86IFN1Ym1lbnVbXTtcclxufTtcclxuXHJcbnR5cGUgR3JvdXAgPSB7XHJcbiAgZ3JvdXBMYWJlbDogc3RyaW5nO1xyXG4gIG1lbnVzOiBNZW51W107XHJcbn07XHJcblxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRNZW51TGlzdChwYXRobmFtZTogc3RyaW5nKTogR3JvdXBbXSB7XHJcbiAgY29uc3QgW2F0dHJpYnV0ZVR5cGVzLCBzZXRBdHRyaWJ1dGVUeXBlc10gPSB1c2VTdGF0ZTxBdHRyaWJ1dGVUeXBlW10+KFtdKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoQXR0cmlidXRlVHlwZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJGZXRjaGluZyBhdHRyaWJ1dGUgdHlwZXMuLi5cIik7XHJcbiAgICAgICAgY29uc3QgdHlwZXMgPSBhd2FpdCBhdHRyaWJ1dGVUeXBlQXBpLmdldEFsbCgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUmVjZWl2ZWQgdHlwZXM6XCIsIHR5cGVzKTtcclxuICAgICAgICBzZXRBdHRyaWJ1dGVUeXBlcyh0eXBlcyB8fCBbXSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBmZXRjaCBhdHRyaWJ1dGUgdHlwZXM6XCIsIGVycm9yKTtcclxuICAgICAgICBzZXRBdHRyaWJ1dGVUeXBlcyhbXSk7XHJcbiAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZmV0Y2hBdHRyaWJ1dGVUeXBlcygpO1xyXG4gIH0sIFtdKTtcclxuXHJcblxyXG4gIHJldHVybiBbXHJcbiAgICB7XHJcbiAgICAgIGdyb3VwTGFiZWw6IFwiXCIsXHJcbiAgICAgIG1lbnVzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaHJlZjogXCIvZGFzaGJvYXJkXCIsXHJcbiAgICAgICAgICBsYWJlbDogXCJEYXNoYm9hcmRcIixcclxuICAgICAgICAgIGljb246IExheW91dEdyaWQsXHJcbiAgICAgICAgICBzdWJtZW51czogW11cclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGdyb3VwTGFiZWw6IFwiXCIsXHJcbiAgICAgIG1lbnVzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaHJlZjogXCJcIixcclxuICAgICAgICAgIGxhYmVsOiBcIlVzZXIgTWFuYWdlbWVudFwiLFxyXG4gICAgICAgICAgaWNvbjogVXNlcnMsXHJcbiAgICAgICAgICBzdWJtZW51czogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgaHJlZjogXCIvdXNlci1tYW5hZ2VtZW50XCIsXHJcbiAgICAgICAgICAgICAgbGFiZWw6IFwiVXNlcnNcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgaHJlZjogXCIvdXNlci1tYW5hZ2VtZW50L3JvbGVzXCIsXHJcbiAgICAgICAgICAgICAgbGFiZWw6IFwiUm9sZVwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIF1cclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGdyb3VwTGFiZWw6IFwiXCIsXHJcbiAgICAgIG1lbnVzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaHJlZjogXCJcIixcclxuICAgICAgICAgIGxhYmVsOiBcIkN1cnJpY3VsdW0gTWFuYWdlbWVudFwiLFxyXG4gICAgICAgICAgaWNvbjogQ2xpcGJvYXJkTGlzdCxcclxuICAgICAgICAgIHN1Ym1lbnVzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBocmVmOiBcIi9jbGFzc2VzXCIsXHJcbiAgICAgICAgICAgICAgbGFiZWw6IFwiQ2xhc3Nlc1wiXHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgaHJlZjogXCIvc3ViamVjdHNcIixcclxuICAgICAgICAgICAgICBsYWJlbDogXCJTdWJqZWN0c1wiXHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgaHJlZjogXCIvY2hhcHRlcnNcIixcclxuICAgICAgICAgICAgICBsYWJlbDogXCJDaGFwdGVyc1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBocmVmOiBcIi9sZWN0dXJlc1wiLFxyXG4gICAgICAgICAgICAgIGxhYmVsOiBcIkxlY3R1cmVzXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGhyZWY6IFwiL2Fzc2Vzc21lbnRzXCIsXHJcbiAgICAgICAgICAgICAgbGFiZWw6IFwiQXNzZXNzbWVudHNcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBdXHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBncm91cExhYmVsOiBcIlwiLFxyXG4gICAgICBtZW51czogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGhyZWY6IFwiXCIsXHJcbiAgICAgICAgICBsYWJlbDogXCJNZXRhIERhdGFcIixcclxuICAgICAgICAgIGljb246IENsaXBib2FyZExpc3QsXHJcbiAgICAgICAgICBzdWJtZW51czogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgaHJlZjogXCIvYXR0cmlidXRlLXR5cGVcIixcclxuICAgICAgICAgICAgICBsYWJlbDogXCJBdHRyaWJ1dGUgVHlwZVwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBocmVmOiBcIi9zZWN0aW9uXCIsXHJcbiAgICAgICAgICAgICAgbGFiZWw6IFwiU2VjdGlvblwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgZ3JvdXBMYWJlbDogXCJcIixcclxuICAgICAgbWVudXM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBocmVmOiBcIlwiLFxyXG4gICAgICAgICAgbGFiZWw6IFwiYXR0cmlidXRlc1wiLFxyXG4gICAgICAgICAgaWNvbjogQ2xpcGJvYXJkTGlzdCxcclxuICAgICAgICAgIHN1Ym1lbnVzOiBbXHJcbiAgICAgICAgICAgIC4uLmF0dHJpYnV0ZVR5cGVzLm1hcCh0eXBlID0+ICh7XHJcbiAgICAgICAgICAgICAgaHJlZjogYC9hdHRyaWJ1dGVzLyR7dHlwZS5uYW1lLnRvTG93ZXJDYXNlKCl9YCxcclxuICAgICAgICAgICAgICBsYWJlbDogdHlwZS5uYW1lXHJcbiAgICAgICAgICAgIH0pKVxyXG4gICAgICAgICAgXVxyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfVxyXG4gIF07XHJcbn1cclxuIl0sIm5hbWVzIjpbIlVzZXJzIiwiTGF5b3V0R3JpZCIsIkNsaXBib2FyZExpc3QiLCJhdHRyaWJ1dGVUeXBlQXBpIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJnZXRNZW51TGlzdCIsInBhdGhuYW1lIiwiYXR0cmlidXRlVHlwZXMiLCJzZXRBdHRyaWJ1dGVUeXBlcyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZmV0Y2hBdHRyaWJ1dGVUeXBlcyIsImNvbnNvbGUiLCJsb2ciLCJ0eXBlcyIsImdldEFsbCIsImVycm9yIiwiZ3JvdXBMYWJlbCIsIm1lbnVzIiwiaHJlZiIsImxhYmVsIiwiaWNvbiIsInN1Ym1lbnVzIiwibWFwIiwidHlwZSIsIm5hbWUiLCJ0b0xvd2VyQ2FzZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/lib/menu-list.ts\n"));

/***/ })

});