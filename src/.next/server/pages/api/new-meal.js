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
exports.id = "pages/api/new-meal";
exports.ids = ["pages/api/new-meal"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./pages/api/new-meal.js":
/*!*******************************!*\
  !*** ./pages/api/new-meal.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst handler = async (req, res)=>{\n    const DATABASE_NAME = \"Grandma\";\n    const DATABASE_PASSWORD = \"1234\";\n    if (req.method === \"POST\") {\n        const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(`mongodb+srv://test:1234@mountain.rpwsn.mongodb.net/Grandma?retryWrites=true&w=majority`);\n        const db = client.db();\n        const mealsCollection = db.collection(\"meals\");\n        await mealsCollection.insertOne(req.body);\n        client.close();\n        res.status(201).send({\n            Message: \"Meal inserted\"\n        });\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbmV3LW1lYWwuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXNDO0FBRXRDLE1BQU1DLE9BQU8sR0FBRyxPQUFPQyxHQUFHLEVBQUVDLEdBQUcsR0FBSztJQUNsQyxNQUFNQyxhQUFhLEdBQUcsU0FBUztJQUMvQixNQUFNQyxpQkFBaUIsR0FBRyxNQUFNO0lBRWhDLElBQUlILEdBQUcsQ0FBQ0ksTUFBTSxLQUFLLE1BQU0sRUFBRTtRQUN6QixNQUFNQyxNQUFNLEdBQUcsTUFBTVAsd0RBQW1CLENBQ3RDLENBQUMsc0ZBQXNGLENBQUMsQ0FDekY7UUFDRCxNQUFNUyxFQUFFLEdBQUdGLE1BQU0sQ0FBQ0UsRUFBRSxFQUFFO1FBQ3RCLE1BQU1DLGVBQWUsR0FBR0QsRUFBRSxDQUFDRSxVQUFVLENBQUMsT0FBTyxDQUFDO1FBQzlDLE1BQU1ELGVBQWUsQ0FBQ0UsU0FBUyxDQUFDVixHQUFHLENBQUNXLElBQUksQ0FBQyxDQUFDO1FBRTFDTixNQUFNLENBQUNPLEtBQUssRUFBRSxDQUFDO1FBRWZYLEdBQUcsQ0FBQ1ksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBRUMsT0FBTyxFQUFFLGVBQWU7U0FBRSxDQUFDLENBQUM7S0FDcEQ7Q0FDRjtBQUVELGlFQUFlaEIsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3JjLy4vcGFnZXMvYXBpL25ldy1tZWFsLmpzPzBmMzMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiO1xuXG5jb25zdCBoYW5kbGVyID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIGNvbnN0IERBVEFCQVNFX05BTUUgPSBcIkdyYW5kbWFcIjtcbiAgY29uc3QgREFUQUJBU0VfUEFTU1dPUkQgPSBcIjEyMzRcIjtcblxuICBpZiAocmVxLm1ldGhvZCA9PT0gXCJQT1NUXCIpIHtcbiAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KFxuICAgICAgYG1vbmdvZGIrc3J2Oi8vdGVzdDoxMjM0QG1vdW50YWluLnJwd3NuLm1vbmdvZGIubmV0L0dyYW5kbWE/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5YFxuICAgICk7XG4gICAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcbiAgICBjb25zdCBtZWFsc0NvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKFwibWVhbHNcIik7XG4gICAgYXdhaXQgbWVhbHNDb2xsZWN0aW9uLmluc2VydE9uZShyZXEuYm9keSk7XG5cbiAgICBjbGllbnQuY2xvc2UoKTtcblxuICAgIHJlcy5zdGF0dXMoMjAxKS5zZW5kKHsgTWVzc2FnZTogXCJNZWFsIGluc2VydGVkXCIgfSk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXI7XG4iXSwibmFtZXMiOlsiTW9uZ29DbGllbnQiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiREFUQUJBU0VfTkFNRSIsIkRBVEFCQVNFX1BBU1NXT1JEIiwibWV0aG9kIiwiY2xpZW50IiwiY29ubmVjdCIsImRiIiwibWVhbHNDb2xsZWN0aW9uIiwiY29sbGVjdGlvbiIsImluc2VydE9uZSIsImJvZHkiLCJjbG9zZSIsInN0YXR1cyIsInNlbmQiLCJNZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/new-meal.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/new-meal.js"));
module.exports = __webpack_exports__;

})();