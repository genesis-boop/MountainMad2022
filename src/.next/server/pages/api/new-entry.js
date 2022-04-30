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
exports.id = "pages/api/new-entry";
exports.ids = ["pages/api/new-entry"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./pages/api/new-entry.js":
/*!********************************!*\
  !*** ./pages/api/new-entry.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst handler = async (req, res)=>{\n    const DATABASE_NAME = \"Grandma\";\n    const DATABASE_PASSWORD = \"1234567H\";\n    if (req.method === \"POST\") {\n        const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(`mongodb+srv://test:1234@mountain.rpwsn.mongodb.net/Grandma?retryWrites=true&w=majority`);\n        const db = client.db();\n        const mealsCollection = db.collection(\"recipe\");\n        await mealsCollection.insertOne(req.body);\n        client.close();\n        res.status(201).send({\n            Message: \"Meal inserted\"\n        });\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbmV3LWVudHJ5LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFzQztBQUV0QyxNQUFNQyxPQUFPLEdBQUcsT0FBT0MsR0FBRyxFQUFFQyxHQUFHLEdBQUs7SUFDbEMsTUFBTUMsYUFBYSxHQUFHLFNBQVM7SUFDL0IsTUFBTUMsaUJBQWlCLEdBQUcsVUFBVTtJQUVwQyxJQUFJSCxHQUFHLENBQUNJLE1BQU0sS0FBSyxNQUFNLEVBQUU7UUFDekIsTUFBTUMsTUFBTSxHQUFHLE1BQU1QLHdEQUFtQixDQUN0QyxDQUFDLHNGQUFzRixDQUFDLENBQ3pGO1FBQ0QsTUFBTVMsRUFBRSxHQUFHRixNQUFNLENBQUNFLEVBQUUsRUFBRTtRQUN0QixNQUFNQyxlQUFlLEdBQUdELEVBQUUsQ0FBQ0UsVUFBVSxDQUFDLFFBQVEsQ0FBQztRQUMvQyxNQUFNRCxlQUFlLENBQUNFLFNBQVMsQ0FBQ1YsR0FBRyxDQUFDVyxJQUFJLENBQUMsQ0FBQztRQUUxQ04sTUFBTSxDQUFDTyxLQUFLLEVBQUUsQ0FBQztRQUVmWCxHQUFHLENBQUNZLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVDLE9BQU8sRUFBRSxlQUFlO1NBQUUsQ0FBQyxDQUFDO0tBQ3BEO0NBQ0Y7QUFFRCxpRUFBZWhCLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NyYy8uL3BhZ2VzL2FwaS9uZXctZW50cnkuanM/NjYxNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gXCJtb25nb2RiXCI7XHJcblxyXG5jb25zdCBoYW5kbGVyID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgY29uc3QgREFUQUJBU0VfTkFNRSA9IFwiR3JhbmRtYVwiO1xyXG4gIGNvbnN0IERBVEFCQVNFX1BBU1NXT1JEID0gXCIxMjM0NTY3SFwiO1xyXG5cclxuICBpZiAocmVxLm1ldGhvZCA9PT0gXCJQT1NUXCIpIHtcclxuICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoXHJcbiAgICAgIGBtb25nb2RiK3NydjovL3Rlc3Q6MTIzNEBtb3VudGFpbi5ycHdzbi5tb25nb2RiLm5ldC9HcmFuZG1hP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eWBcclxuICAgICk7XHJcbiAgICBjb25zdCBkYiA9IGNsaWVudC5kYigpO1xyXG4gICAgY29uc3QgbWVhbHNDb2xsZWN0aW9uID0gZGIuY29sbGVjdGlvbihcInJlY2lwZVwiKTtcclxuICAgIGF3YWl0IG1lYWxzQ29sbGVjdGlvbi5pbnNlcnRPbmUocmVxLmJvZHkpO1xyXG5cclxuICAgIGNsaWVudC5jbG9zZSgpO1xyXG5cclxuICAgIHJlcy5zdGF0dXMoMjAxKS5zZW5kKHsgTWVzc2FnZTogXCJNZWFsIGluc2VydGVkXCIgfSk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjsiXSwibmFtZXMiOlsiTW9uZ29DbGllbnQiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiREFUQUJBU0VfTkFNRSIsIkRBVEFCQVNFX1BBU1NXT1JEIiwibWV0aG9kIiwiY2xpZW50IiwiY29ubmVjdCIsImRiIiwibWVhbHNDb2xsZWN0aW9uIiwiY29sbGVjdGlvbiIsImluc2VydE9uZSIsImJvZHkiLCJjbG9zZSIsInN0YXR1cyIsInNlbmQiLCJNZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/new-entry.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/new-entry.js"));
module.exports = __webpack_exports__;

})();