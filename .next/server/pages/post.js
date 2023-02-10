"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/post";
exports.ids = ["pages/post"];
exports.modules = {

/***/ "./pages/post.js":
/*!***********************!*\
  !*** ./pages/post.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_1__]);\naxios__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst Post = (props)=>{\n    console.log(props);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            \"You are looking at post # \",\n            props.id,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                children: props.comments.map((comment)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            comment.email,\n                            \" -- \",\n                            comment.body,\n                            \" \"\n                        ]\n                    }, comment.id, true, {\n                        fileName: \"D:\\\\Office\\\\UDEMY\\\\Modern-React-Bootcamp\\\\Next js\\\\pages\\\\post.js\",\n                        lineNumber: 10,\n                        columnNumber: 18\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"D:\\\\Office\\\\UDEMY\\\\Modern-React-Bootcamp\\\\Next js\\\\pages\\\\post.js\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Office\\\\UDEMY\\\\Modern-React-Bootcamp\\\\Next js\\\\pages\\\\post.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, undefined);\n};\n// let url = `https://jsonplaceholder.typicode.com/comments?postId=1`;\nlet url = `https://jsonplaceholder.typicode.com`;\nPost.getInitialProps = async ({ query  })=>{\n    const res = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(`${url}/comments?postId=${query.id}`);\n    const data = res.data;\n    return {\n        ...query,\n        comments: data\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Post); // import { withRouter } from \"next/router\";\n // const Post = (props) => {\n //   console.log(props);\n //   return <div>You are looking at post # {props.router.query.id} </div>;\n // };\n // export default withRouter(Post);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQTBCO0FBRTFCLE1BQU1DLE9BQU8sQ0FBQ0MsUUFBVTtJQUN0QkMsUUFBUUMsR0FBRyxDQUFDRjtJQUNaLHFCQUNFLDhEQUFDRzs7WUFBSTtZQUN3QkgsTUFBTUksRUFBRTswQkFDbkMsOERBQUNDOzBCQUNFTCxNQUFNTSxRQUFRLENBQUNDLEdBQUcsQ0FBQyxDQUFDQyxVQUFZO29CQUMvQixxQkFBTyw4REFBQ0M7OzRCQUFvQkQsUUFBUUUsS0FBSzs0QkFBQzs0QkFBS0YsUUFBUUcsSUFBSTs0QkFBQzs7dUJBQTdDSCxRQUFRSixFQUFFOzs7OztnQkFDM0I7Ozs7Ozs7Ozs7OztBQUlSO0FBQ0Esc0VBQXNFO0FBQ3RFLElBQUlRLE1BQU0sQ0FBQyxvQ0FBb0MsQ0FBQztBQUNoRGIsS0FBS2MsZUFBZSxHQUFHLE9BQU8sRUFBRUMsTUFBSyxFQUFFLEdBQUs7SUFDMUMsTUFBTUMsTUFBTSxNQUFNakIsaURBQVMsQ0FBQyxDQUFDLEVBQUVjLElBQUksaUJBQWlCLEVBQUVFLE1BQU1WLEVBQUUsQ0FBQyxDQUFDO0lBQ2hFLE1BQU1hLE9BQU9GLElBQUlFLElBQUk7SUFFckIsT0FBTztRQUFFLEdBQUdILEtBQUs7UUFBRVIsVUFBVVc7SUFBSztBQUNwQztBQUVBLGlFQUFlbEIsSUFBSUEsRUFBQyxDQUVwQiw0Q0FBNEM7Q0FFNUMsNEJBQTRCO0NBQzVCLHdCQUF3QjtDQUN4QiwwRUFBMEU7Q0FDMUUsS0FBSztDQUVMLG1DQUFtQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtanMvLi9wYWdlcy9wb3N0LmpzPzI1NjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuY29uc3QgUG9zdCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnNvbGUubG9nKHByb3BzKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgWW91IGFyZSBsb29raW5nIGF0IHBvc3QgIyB7cHJvcHMuaWR9XHJcbiAgICAgIDxsaT5cclxuICAgICAgICB7cHJvcHMuY29tbWVudHMubWFwKChjb21tZW50KSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gPHAga2V5PXtjb21tZW50LmlkfT57Y29tbWVudC5lbWFpbH0gLS0ge2NvbW1lbnQuYm9keX0gPC9wPjtcclxuICAgICAgICB9KX1cclxuICAgICAgPC9saT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbi8vIGxldCB1cmwgPSBgaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL2NvbW1lbnRzP3Bvc3RJZD0xYDtcclxubGV0IHVybCA9IGBodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb21gO1xyXG5Qb3N0LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7IHF1ZXJ5IH0pID0+IHtcclxuICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7dXJsfS9jb21tZW50cz9wb3N0SWQ9JHtxdWVyeS5pZH1gKTtcclxuICBjb25zdCBkYXRhID0gcmVzLmRhdGE7XHJcblxyXG4gIHJldHVybiB7IC4uLnF1ZXJ5LCBjb21tZW50czogZGF0YSB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdDtcclxuXHJcbi8vIGltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbi8vIGNvbnN0IFBvc3QgPSAocHJvcHMpID0+IHtcclxuLy8gICBjb25zb2xlLmxvZyhwcm9wcyk7XHJcbi8vICAgcmV0dXJuIDxkaXY+WW91IGFyZSBsb29raW5nIGF0IHBvc3QgIyB7cHJvcHMucm91dGVyLnF1ZXJ5LmlkfSA8L2Rpdj47XHJcbi8vIH07XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKFBvc3QpO1xyXG4iXSwibmFtZXMiOlsiYXhpb3MiLCJQb3N0IiwicHJvcHMiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiaWQiLCJsaSIsImNvbW1lbnRzIiwibWFwIiwiY29tbWVudCIsInAiLCJlbWFpbCIsImJvZHkiLCJ1cmwiLCJnZXRJbml0aWFsUHJvcHMiLCJxdWVyeSIsInJlcyIsImdldCIsImRhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/post.js\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/post.js"));
module.exports = __webpack_exports__;

})();