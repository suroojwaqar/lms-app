"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(admin-panel)/attribute-type/page",{

/***/ "(app-pages-browser)/./src/components/admin-panel/menu.tsx":
/*!*********************************************!*\
  !*** ./src/components/admin-panel/menu.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Menu: function() { return /* binding */ Menu; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/lib/utils */ \"(app-pages-browser)/./src/lib/utils.ts\");\n/* harmony import */ var _lib_menu_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/lib/menu-list */ \"(app-pages-browser)/./src/lib/menu-list.ts\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./src/components/ui/button.tsx\");\n/* harmony import */ var _components_ui_scroll_area__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/ui/scroll-area */ \"(app-pages-browser)/./src/components/ui/scroll-area.tsx\");\n/* harmony import */ var _components_admin_panel_collapse_menu_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/admin-panel/collapse-menu-button */ \"(app-pages-browser)/./src/components/admin-panel/collapse-menu-button.tsx\");\n/* harmony import */ var _components_ui_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/ui/tooltip */ \"(app-pages-browser)/./src/components/ui/tooltip.tsx\");\n/* __next_internal_client_entry_do_not_use__ Menu auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction Menu(param) {\n    let { isOpen } = param;\n    _s();\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname)();\n    const [menuList, setMenuList] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]); // Initialize with an empty array\n    // Fetch the menu list asynchronously\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const fetchMenuList = async ()=>{\n            try {\n                const data = await (0,_lib_menu_list__WEBPACK_IMPORTED_MODULE_5__.getMenuList)(pathname);\n                setMenuList(data); // Update state with the fetched menu list\n            } catch (error) {\n                console.error(\"Failed to fetch menu list:\", error);\n                setMenuList([]); // Fallback to an empty array in case of error\n            }\n        };\n        fetchMenuList();\n    }, [\n        pathname\n    ]); // Re-fetch when pathname changes\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_scroll_area__WEBPACK_IMPORTED_MODULE_7__.ScrollArea, {\n        className: \"[&>div>div[style]]:!block\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n            className: \"mt-4 h-[full] w-full\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"flex flex-col min-h-[calc(100vh-48px-36px-16px-32px)] lg:min-h-[calc(100vh-32px-40px-32px)] items-start space-y-1 px-2\",\n                children: menuList.map((param, index)=>{\n                    let { groupLabel, menus } = param;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(\"w-full\", groupLabel ? \"\" : \"\"),\n                        children: [\n                            isOpen && groupLabel || isOpen === undefined ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-sm font-medium text-muted-foreground px-4 pb-2 max-w-[248px] truncate hidden\",\n                                children: groupLabel\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Next js App\\\\lms-admin\\\\src\\\\components\\\\admin-panel\\\\menu.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 17\n                            }, this) : !isOpen && isOpen !== undefined && groupLabel ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_tooltip__WEBPACK_IMPORTED_MODULE_9__.TooltipProvider, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_tooltip__WEBPACK_IMPORTED_MODULE_9__.Tooltip, {\n                                    delayDuration: 100,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_tooltip__WEBPACK_IMPORTED_MODULE_9__.TooltipContent, {\n                                        side: \"right\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: groupLabel\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Next js App\\\\lms-admin\\\\src\\\\components\\\\admin-panel\\\\menu.tsx\",\n                                            lineNumber: 65,\n                                            columnNumber: 23\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Next js App\\\\lms-admin\\\\src\\\\components\\\\admin-panel\\\\menu.tsx\",\n                                        lineNumber: 64,\n                                        columnNumber: 21\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Next js App\\\\lms-admin\\\\src\\\\components\\\\admin-panel\\\\menu.tsx\",\n                                    lineNumber: 56,\n                                    columnNumber: 19\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Next js App\\\\lms-admin\\\\src\\\\components\\\\admin-panel\\\\menu.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 17\n                            }, this) : \"\",\n                            menus.map((param, index)=>{\n                                let { href, label, icon: Icon, active, submenus } = param;\n                                return !submenus || submenus.length === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"w-full \",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_tooltip__WEBPACK_IMPORTED_MODULE_9__.TooltipProvider, {\n                                        disableHoverableContent: true,\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_tooltip__WEBPACK_IMPORTED_MODULE_9__.Tooltip, {\n                                            delayDuration: 100,\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_tooltip__WEBPACK_IMPORTED_MODULE_9__.TooltipTrigger, {\n                                                    asChild: true,\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                                                        variant: active === undefined && pathname.startsWith(href) || active ? \"secondary\" : \"ghost\",\n                                                        className: \"w-full justify-start h-10 mb-1 hover:bg-muted-foreground/10 hover:text-foreground text-muted-foreground \".concat(active === undefined && pathname.startsWith(href) || active ? \"bg-white shadow text-black hover:bg-muted-foreground/10 hover:text-foreground \" : \"text-muted-foreground\"),\n                                                        asChild: true,\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                                            href: href,\n                                                            children: [\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                                    className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(isOpen === false ? \"\" : \"mr-4\"),\n                                                                    children: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_3___default().createElement(Icon, {\n                                                                        className: \"h-5 w-5\"\n                                                                    })\n                                                                }, void 0, false, {\n                                                                    fileName: \"D:\\\\Next js App\\\\lms-admin\\\\src\\\\components\\\\admin-panel\\\\menu.tsx\",\n                                                                    lineNumber: 98,\n                                                                    columnNumber: 33\n                                                                }, this),\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                                    className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(\"max-w-[200px] truncate\", isOpen === false ? \"-translate-x-96 opacity-0\" : \"translate-x-0 opacity-100\"),\n                                                                    children: label\n                                                                }, void 0, false, {\n                                                                    fileName: \"D:\\\\Next js App\\\\lms-admin\\\\src\\\\components\\\\admin-panel\\\\menu.tsx\",\n                                                                    lineNumber: 103,\n                                                                    columnNumber: 33\n                                                                }, this)\n                                                            ]\n                                                        }, void 0, true, {\n                                                            fileName: \"D:\\\\Next js App\\\\lms-admin\\\\src\\\\components\\\\admin-panel\\\\menu.tsx\",\n                                                            lineNumber: 97,\n                                                            columnNumber: 31\n                                                        }, this)\n                                                    }, void 0, false, {\n                                                        fileName: \"D:\\\\Next js App\\\\lms-admin\\\\src\\\\components\\\\admin-panel\\\\menu.tsx\",\n                                                        lineNumber: 80,\n                                                        columnNumber: 29\n                                                    }, this)\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\Next js App\\\\lms-admin\\\\src\\\\components\\\\admin-panel\\\\menu.tsx\",\n                                                    lineNumber: 79,\n                                                    columnNumber: 27\n                                                }, this),\n                                                isOpen === false && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_tooltip__WEBPACK_IMPORTED_MODULE_9__.TooltipContent, {\n                                                    side: \"right\",\n                                                    children: label\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\Next js App\\\\lms-admin\\\\src\\\\components\\\\admin-panel\\\\menu.tsx\",\n                                                    lineNumber: 117,\n                                                    columnNumber: 29\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"D:\\\\Next js App\\\\lms-admin\\\\src\\\\components\\\\admin-panel\\\\menu.tsx\",\n                                            lineNumber: 78,\n                                            columnNumber: 25\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Next js App\\\\lms-admin\\\\src\\\\components\\\\admin-panel\\\\menu.tsx\",\n                                        lineNumber: 77,\n                                        columnNumber: 23\n                                    }, this)\n                                }, index, false, {\n                                    fileName: \"D:\\\\Next js App\\\\lms-admin\\\\src\\\\components\\\\admin-panel\\\\menu.tsx\",\n                                    lineNumber: 76,\n                                    columnNumber: 21\n                                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"w-full\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_admin_panel_collapse_menu_button__WEBPACK_IMPORTED_MODULE_8__.CollapseMenuButton, {\n                                        icon: Icon,\n                                        label: label,\n                                        active: active === undefined ? pathname.startsWith(href) : active,\n                                        submenus: submenus,\n                                        isOpen: isOpen\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Next js App\\\\lms-admin\\\\src\\\\components\\\\admin-panel\\\\menu.tsx\",\n                                        lineNumber: 126,\n                                        columnNumber: 23\n                                    }, this)\n                                }, index, false, {\n                                    fileName: \"D:\\\\Next js App\\\\lms-admin\\\\src\\\\components\\\\admin-panel\\\\menu.tsx\",\n                                    lineNumber: 125,\n                                    columnNumber: 21\n                                }, this);\n                            })\n                        ]\n                    }, index, true, {\n                        fileName: \"D:\\\\Next js App\\\\lms-admin\\\\src\\\\components\\\\admin-panel\\\\menu.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 13\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"D:\\\\Next js App\\\\lms-admin\\\\src\\\\components\\\\admin-panel\\\\menu.tsx\",\n                lineNumber: 46,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"D:\\\\Next js App\\\\lms-admin\\\\src\\\\components\\\\admin-panel\\\\menu.tsx\",\n            lineNumber: 45,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Next js App\\\\lms-admin\\\\src\\\\components\\\\admin-panel\\\\menu.tsx\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, this);\n}\n_s(Menu, \"u3gH1LJNqT1bZAi4z49XALeYw1o=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname\n    ];\n});\n_c = Menu;\nvar _c;\n$RefreshReg$(_c, \"Menu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2FkbWluLXBhbmVsL21lbnUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTZCO0FBRWlCO0FBQ0s7QUFFbEI7QUFDYTtBQUNFO0FBQ1M7QUFDMEI7QUFNbEQ7QUFNMUIsU0FBU2MsS0FBSyxLQUFxQjtRQUFyQixFQUFFQyxNQUFNLEVBQWEsR0FBckI7O0lBQ25CLE1BQU1DLFdBQVdmLDREQUFXQTtJQUM1QixNQUFNLENBQUNnQixVQUFVQyxZQUFZLEdBQUdkLCtDQUFRQSxDQUFRLEVBQUUsR0FBRyxpQ0FBaUM7SUFFdEYscUNBQXFDO0lBQ3JDRCxnREFBU0EsQ0FBQztRQUNSLE1BQU1nQixnQkFBZ0I7WUFDcEIsSUFBSTtnQkFDRixNQUFNQyxPQUFPLE1BQU1kLDJEQUFXQSxDQUFDVTtnQkFDL0JFLFlBQVlFLE9BQU8sMENBQTBDO1lBQy9ELEVBQUUsT0FBT0MsT0FBTztnQkFDZEMsUUFBUUQsS0FBSyxDQUFDLDhCQUE4QkE7Z0JBQzVDSCxZQUFZLEVBQUUsR0FBRyw4Q0FBOEM7WUFDakU7UUFDRjtRQUVBQztJQUNGLEdBQUc7UUFBQ0g7S0FBUyxHQUFHLGlDQUFpQztJQUVqRCxxQkFDRSw4REFBQ1Isa0VBQVVBO1FBQUNlLFdBQVU7a0JBQ3BCLDRFQUFDQztZQUFJRCxXQUFVO3NCQUNiLDRFQUFDRTtnQkFBR0YsV0FBVTswQkFDWE4sU0FBU1MsR0FBRyxDQUFDLFFBQXlKQzt3QkFBeEosRUFBRUMsVUFBVSxFQUFFQyxLQUFLLEVBQW1JO3lDQUNuSyw4REFBQ0M7d0JBQUdQLFdBQVdsQiw4Q0FBRUEsQ0FBQyxVQUFVdUIsYUFBYSxLQUFLOzs0QkFFMUNiLFVBQVVhLGNBQWViLFdBQVdnQiwwQkFDcEMsOERBQUNDO2dDQUFFVCxXQUFVOzBDQUNWSzs7Ozs7dUNBRUQsQ0FBQ2IsVUFBVUEsV0FBV2dCLGFBQWFILDJCQUNyQyw4REFBQ2YsbUVBQWVBOzBDQUNkLDRFQUFDSCwyREFBT0E7b0NBQUN1QixlQUFlOzhDQVF0Qiw0RUFBQ3JCLGtFQUFjQTt3Q0FBQ3NCLE1BQUs7a0RBQ25CLDRFQUFDRjtzREFBR0o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VDQUtWOzRCQUdEQyxNQUFNSCxHQUFHLENBQ1IsUUFBZ0pDO29DQUEvSSxFQUFFUSxJQUFJLEVBQUVDLEtBQUssRUFBRUMsTUFBTUMsSUFBSSxFQUFFQyxNQUFNLEVBQUVDLFFBQVEsRUFBa0c7dUNBQzVJLENBQUNBLFlBQVlBLFNBQVNDLE1BQU0sS0FBSyxrQkFDL0IsOERBQUNDO29DQUFJbkIsV0FBVTs4Q0FDYiw0RUFBQ1YsbUVBQWVBO3dDQUFDOEIsdUJBQXVCO2tEQUN0Qyw0RUFBQ2pDLDJEQUFPQTs0Q0FBQ3VCLGVBQWU7OzhEQUN0Qiw4REFBQ3RCLGtFQUFjQTtvREFBQ2lDLE9BQU87OERBQ3JCLDRFQUFDckMseURBQU1BO3dEQUNMc0MsU0FDRSxXQUFZZCxhQUNWZixTQUFTOEIsVUFBVSxDQUFDWCxTQUN0QkksU0FDSSxjQUNBO3dEQUVOaEIsV0FBVywyR0FNVixPQUxDLFdBQVlRLGFBQ1ZmLFNBQVM4QixVQUFVLENBQUNYLFNBQ3RCSSxTQUNJLG1GQUNBO3dEQUVOSyxPQUFPO2tFQUVQLDRFQUFDNUMsaURBQUlBOzREQUFDbUMsTUFBTUE7OzhFQUNWLDhEQUFDWTtvRUFDQ3hCLFdBQVdsQiw4Q0FBRUEsQ0FBQ1UsV0FBVyxRQUFRLEtBQUs7OEVBRXJDYixjQUFBQSwwREFBbUIsQ0FBQ29DLE1BQW9EO3dFQUFFZixXQUFXO29FQUFVOzs7Ozs7OEVBRWxHLDhEQUFDUztvRUFDQ1QsV0FBV2xCLDhDQUFFQSxDQUNYLDBCQUNBVSxXQUFXLFFBQ1AsOEJBQ0E7OEVBR0xxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnREFLUnJCLFdBQVcsdUJBQ1YsOERBQUNILGtFQUFjQTtvREFBQ3NCLE1BQUs7OERBQ2xCRTs7Ozs7Ozs7Ozs7Ozs7Ozs7bUNBMUNtQlQ7Ozs7eURBaUQ5Qiw4REFBQ2U7b0NBQUluQixXQUFVOzhDQUNiLDRFQUFDZCw0RkFBa0JBO3dDQUNqQjRCLE1BQU1DO3dDQUNORixPQUFPQTt3Q0FDUEcsUUFDRUEsV0FBV1IsWUFDUGYsU0FBUzhCLFVBQVUsQ0FBQ1gsUUFDcEJJO3dDQUVOQyxVQUFVQTt3Q0FDVnpCLFFBQVFBOzs7Ozs7bUNBVmlCWTs7Ozs7Ozt1QkE3RW1CQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0lwRTtHQXhKZ0JiOztRQUNHYix3REFBV0E7OztLQURkYSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9hZG1pbi1wYW5lbC9tZW51LnRzeD9iNzZkIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyBFbGxpcHNpcywgTG9nT3V0LCBMdWNpZGVJY29uIH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VQYXRobmFtZSB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCB7IGNuIH0gZnJvbSBcIkAvbGliL3V0aWxzXCI7XHJcbmltcG9ydCB7IGdldE1lbnVMaXN0IH0gZnJvbSBcIkAvbGliL21lbnUtbGlzdFwiO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2J1dHRvblwiO1xyXG5pbXBvcnQgeyBTY3JvbGxBcmVhIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9zY3JvbGwtYXJlYVwiO1xyXG5pbXBvcnQgeyBDb2xsYXBzZU1lbnVCdXR0b24gfSBmcm9tIFwiQC9jb21wb25lbnRzL2FkbWluLXBhbmVsL2NvbGxhcHNlLW1lbnUtYnV0dG9uXCI7XHJcbmltcG9ydCB7XHJcbiAgVG9vbHRpcCxcclxuICBUb29sdGlwVHJpZ2dlcixcclxuICBUb29sdGlwQ29udGVudCxcclxuICBUb29sdGlwUHJvdmlkZXIsXHJcbn0gZnJvbSBcIkAvY29tcG9uZW50cy91aS90b29sdGlwXCI7XHJcblxyXG5pbnRlcmZhY2UgTWVudVByb3BzIHtcclxuICBpc09wZW46IGJvb2xlYW4gfCB1bmRlZmluZWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBNZW51KHsgaXNPcGVuIH06IE1lbnVQcm9wcykge1xyXG4gIGNvbnN0IHBhdGhuYW1lID0gdXNlUGF0aG5hbWUoKTtcclxuICBjb25zdCBbbWVudUxpc3QsIHNldE1lbnVMaXN0XSA9IHVzZVN0YXRlPGFueVtdPihbXSk7IC8vIEluaXRpYWxpemUgd2l0aCBhbiBlbXB0eSBhcnJheVxyXG5cclxuICAvLyBGZXRjaCB0aGUgbWVudSBsaXN0IGFzeW5jaHJvbm91c2x5XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoTWVudUxpc3QgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldE1lbnVMaXN0KHBhdGhuYW1lKTtcclxuICAgICAgICBzZXRNZW51TGlzdChkYXRhKTsgLy8gVXBkYXRlIHN0YXRlIHdpdGggdGhlIGZldGNoZWQgbWVudSBsaXN0XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBmZXRjaCBtZW51IGxpc3Q6XCIsIGVycm9yKTtcclxuICAgICAgICBzZXRNZW51TGlzdChbXSk7IC8vIEZhbGxiYWNrIHRvIGFuIGVtcHR5IGFycmF5IGluIGNhc2Ugb2YgZXJyb3JcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBmZXRjaE1lbnVMaXN0KCk7XHJcbiAgfSwgW3BhdGhuYW1lXSk7IC8vIFJlLWZldGNoIHdoZW4gcGF0aG5hbWUgY2hhbmdlc1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFNjcm9sbEFyZWEgY2xhc3NOYW1lPVwiWyY+ZGl2PmRpdltzdHlsZV1dOiFibG9ja1wiPlxyXG4gICAgICA8bmF2IGNsYXNzTmFtZT1cIm10LTQgaC1bZnVsbF0gdy1mdWxsXCI+XHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbWluLWgtW2NhbGMoMTAwdmgtNDhweC0zNnB4LTE2cHgtMzJweCldIGxnOm1pbi1oLVtjYWxjKDEwMHZoLTMycHgtNDBweC0zMnB4KV0gaXRlbXMtc3RhcnQgc3BhY2UteS0xIHB4LTJcIj5cclxuICAgICAgICAgIHttZW51TGlzdC5tYXAoKHsgZ3JvdXBMYWJlbCwgbWVudXMgfTogeyBncm91cExhYmVsOiBzdHJpbmc7IG1lbnVzOiB7IGhyZWY6IHN0cmluZzsgbGFiZWw6IHN0cmluZzsgaWNvbjogUmVhY3QuQ29tcG9uZW50VHlwZTsgYWN0aXZlPzogYm9vbGVhbjsgc3VibWVudXM/OiBhbnlbXSB9W10gfSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17Y24oXCJ3LWZ1bGxcIiwgZ3JvdXBMYWJlbCA/IFwiXCIgOiBcIlwiKX0ga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgey8qIGhpZGUgbWVudSBzZWN0aW9uIHRpdGxlIHdpdGggJ2hpZGRlbicgYW5kIGZyb20gYWJvdmUgbGluZSByZW1vdmVkIHBhZGRpbmcgdG9wIGFmdGVyIGdyb3VwTGFibGUgPyBcIlwiICAqL31cclxuICAgICAgICAgICAgICB7KGlzT3BlbiAmJiBncm91cExhYmVsKSB8fCBpc09wZW4gPT09IHVuZGVmaW5lZCA/IChcclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1tdXRlZC1mb3JlZ3JvdW5kIHB4LTQgcGItMiBtYXgtdy1bMjQ4cHhdIHRydW5jYXRlIGhpZGRlblwiPlxyXG4gICAgICAgICAgICAgICAgICB7Z3JvdXBMYWJlbH1cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICApIDogIWlzT3BlbiAmJiBpc09wZW4gIT09IHVuZGVmaW5lZCAmJiBncm91cExhYmVsID8gKFxyXG4gICAgICAgICAgICAgICAgPFRvb2x0aXBQcm92aWRlcj5cclxuICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgZGVsYXlEdXJhdGlvbj17MTAwfT5cclxuICAgICAgICAgICAgICAgICAgICB7LyogXHJcbiAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXBUcmlnZ2VyIGNsYXNzTmFtZT1cInctZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEVsbGlwc2lzIGNsYXNzTmFtZT1cImgtNSB3LTVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwVHJpZ2dlcj4gXHJcbiAgICAgICAgICAgICAgICAgICAgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXBDb250ZW50IHNpZGU9XCJyaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHA+e2dyb3VwTGFiZWx9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgIDwvVG9vbHRpcFByb3ZpZGVyPlxyXG4gICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgICAgICAgICAvLyA8cCBjbGFzc05hbWU9XCJwYi0yXCI+PC9wPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAge21lbnVzLm1hcChcclxuICAgICAgICAgICAgICAgICh7IGhyZWYsIGxhYmVsLCBpY29uOiBJY29uLCBhY3RpdmUsIHN1Ym1lbnVzIH06IHsgaHJlZjogc3RyaW5nOyBsYWJlbDogc3RyaW5nOyBpY29uOiBSZWFjdC5Db21wb25lbnRUeXBlOyBhY3RpdmU/OiBib29sZWFuOyBzdWJtZW51cz86IGFueVtdIH0sIGluZGV4KSA9PlxyXG4gICAgICAgICAgICAgICAgICAhc3VibWVudXMgfHwgc3VibWVudXMubGVuZ3RoID09PSAwID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIFwiIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXBQcm92aWRlciBkaXNhYmxlSG92ZXJhYmxlQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgZGVsYXlEdXJhdGlvbj17MTAwfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcFRyaWdnZXIgYXNDaGlsZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGFjdGl2ZSA9PT0gdW5kZWZpbmVkICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZS5zdGFydHNXaXRoKGhyZWYpKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcInNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiZ2hvc3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHctZnVsbCBqdXN0aWZ5LXN0YXJ0IGgtMTAgbWItMSBob3ZlcjpiZy1tdXRlZC1mb3JlZ3JvdW5kLzEwIGhvdmVyOnRleHQtZm9yZWdyb3VuZCB0ZXh0LW11dGVkLWZvcmVncm91bmQgJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoYWN0aXZlID09PSB1bmRlZmluZWQgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLnN0YXJ0c1dpdGgoaHJlZikpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiYmctd2hpdGUgc2hhZG93IHRleHQtYmxhY2sgaG92ZXI6YmctbXV0ZWQtZm9yZWdyb3VuZC8xMCBob3Zlcjp0ZXh0LWZvcmVncm91bmQgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJ0ZXh0LW11dGVkLWZvcmVncm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNDaGlsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtocmVmfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbihpc09wZW4gPT09IGZhbHNlID8gXCJcIiA6IFwibXItNFwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7UmVhY3QuY3JlYXRlRWxlbWVudChJY29uIGFzIFJlYWN0LkNvbXBvbmVudFR5cGU8eyBjbGFzc05hbWU6IHN0cmluZyB9PiwgeyBjbGFzc05hbWU6IFwiaC01IHctNVwiIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtYXgtdy1bMjAwcHhdIHRydW5jYXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzT3BlbiA9PT0gZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiLXRyYW5zbGF0ZS14LTk2IG9wYWNpdHktMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcInRyYW5zbGF0ZS14LTAgb3BhY2l0eS0xMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXBUcmlnZ2VyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtpc09wZW4gPT09IGZhbHNlICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwQ29udGVudCBzaWRlPVwicmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXBQcm92aWRlcj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbFwiIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPENvbGxhcHNlTWVudUJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uPXtJY29uIGFzIEx1Y2lkZUljb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtsYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmUgPT09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBwYXRobmFtZS5zdGFydHNXaXRoKGhyZWYpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGFjdGl2ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Ym1lbnVzPXtzdWJtZW51c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNPcGVuPXtpc09wZW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgICAgey8qIFxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInctZnVsbCBncm93IGZsZXggaXRlbXMtZW5kXCI+XHJcbiAgICAgICAgICAgIDxUb29sdGlwUHJvdmlkZXIgZGlzYWJsZUhvdmVyYWJsZUNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgPFRvb2x0aXAgZGVsYXlEdXJhdGlvbj17MTAwfT5cclxuICAgICAgICAgICAgICAgIDxUb29sdGlwVHJpZ2dlciBhc0NoaWxkPlxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge319XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBqdXN0aWZ5LWNlbnRlciBoLTEwIG10LTVcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbihpc09wZW4gPT09IGZhbHNlID8gXCJcIiA6IFwibXItNFwiKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8TG9nT3V0IHNpemU9ezE4fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aGl0ZXNwYWNlLW5vd3JhcFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc09wZW4gPT09IGZhbHNlID8gXCJvcGFjaXR5LTAgaGlkZGVuXCIgOiBcIm9wYWNpdHktMTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgU2lnbiBvdXRcclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9Ub29sdGlwVHJpZ2dlcj5cclxuICAgICAgICAgICAgICAgIHtpc09wZW4gPT09IGZhbHNlICYmIChcclxuICAgICAgICAgICAgICAgICAgPFRvb2x0aXBDb250ZW50IHNpZGU9XCJyaWdodFwiPlNpZ24gT3V0PC9Ub29sdGlwQ29udGVudD5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICA8L1Rvb2x0aXBQcm92aWRlcj5cclxuICAgICAgICAgIDwvbGk+IFxyXG4gICAgICAgICAgKi99XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9uYXY+XHJcbiAgICA8L1Njcm9sbEFyZWE+XHJcbiAgKTtcclxufSJdLCJuYW1lcyI6WyJMaW5rIiwidXNlUGF0aG5hbWUiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiY24iLCJnZXRNZW51TGlzdCIsIkJ1dHRvbiIsIlNjcm9sbEFyZWEiLCJDb2xsYXBzZU1lbnVCdXR0b24iLCJUb29sdGlwIiwiVG9vbHRpcFRyaWdnZXIiLCJUb29sdGlwQ29udGVudCIsIlRvb2x0aXBQcm92aWRlciIsIk1lbnUiLCJpc09wZW4iLCJwYXRobmFtZSIsIm1lbnVMaXN0Iiwic2V0TWVudUxpc3QiLCJmZXRjaE1lbnVMaXN0IiwiZGF0YSIsImVycm9yIiwiY29uc29sZSIsImNsYXNzTmFtZSIsIm5hdiIsInVsIiwibWFwIiwiaW5kZXgiLCJncm91cExhYmVsIiwibWVudXMiLCJsaSIsInVuZGVmaW5lZCIsInAiLCJkZWxheUR1cmF0aW9uIiwic2lkZSIsImhyZWYiLCJsYWJlbCIsImljb24iLCJJY29uIiwiYWN0aXZlIiwic3VibWVudXMiLCJsZW5ndGgiLCJkaXYiLCJkaXNhYmxlSG92ZXJhYmxlQ29udGVudCIsImFzQ2hpbGQiLCJ2YXJpYW50Iiwic3RhcnRzV2l0aCIsInNwYW4iLCJjcmVhdGVFbGVtZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/admin-panel/menu.tsx\n"));

/***/ })

});