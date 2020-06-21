/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/ui-huma/js/page.analytics-2-dashboard.js":
/*!***************************************************************!*\
  !*** ./node_modules/ui-huma/js/page.analytics-2-dashboard.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
  'use strict';

  var earnings = [];
  var prev = [];
  var backgroundColor = []; // Create a date range for the last 7 days

  var start = moment().subtract(6, 'days').format('YYYY-MM-DD'); // 7 days ago

  var end = moment().format('YYYY-MM-DD'); // today

  var range = moment.range(start, end); // Create the earnings graph data
  // Iterate the date range and assign a random ($) earnings value for each day

  range.by('days', function (m) {
    earnings.push({
      y: Math.floor(Math.random() * 300) + 30,
      x: m.toDate()
    });
    prev.push({
      y: Math.floor(Math.random() * 300) + 10,
      x: m.toDate()
    });

    if (m.startOf('day').isSame(moment().startOf('day'))) {
      backgroundColor.push(settings.colors.accent[500]);
    } else {
      backgroundColor.push(settings.colors.primary[500]);
    }
  });

  var Earnings = function Earnings(id) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'roundedBar';
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    options = Chart.helpers.merge({
      barRoundness: 1.2,
      title: {
        display: true,
        fontSize: 12,
        fontColor: 'rgba(54, 76, 102, 0.54)',
        position: 'top',
        text: 'GENERATED INCOME'
      },
      scales: {
        yAxes: [{
          ticks: {
            maxTicksLimit: 4
          }
        }],
        xAxes: [{
          offset: true,
          ticks: {
            padding: 10
          },
          gridLines: {
            display: false
          },
          type: 'time',
          time: {
            unit: 'day',
            displayFormats: {
              day: 'D/MM'
            },
            maxTicksLimit: 7
          }
        }]
      }
    }, options);
    var data = {
      datasets: [{
        label: "Previous Week",
        data: prev,
        barThickness: 20
      }, {
        label: "Last Week",
        data: earnings,
        barThickness: 20
      }]
    };
    Charts.create(id, type, options, data);
  };

  var Views = function Views(id) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'line';
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    options = Chart.helpers.merge({
      scales: {
        yAxes: [{
          ticks: {
            autoSkip: false,
            autoSkipPadding: 0,
            padding: 4,
            maxTicksLimit: 4,
            callback: function callback(item) {
              return item;
            }
          }
        }],
        xAxes: [{
          ticks: {
            padding: 4,
            callback: function callback(item) {
              return item;
            }
          },
          gridLines: {
            display: false
          },
          type: 'time',
          time: {
            unit: 'day',
            displayFormats: {
              day: 'D/MM'
            },
            stepSize: 1,
            maxTicksLimit: 7,
            autoSkip: false
          }
        }]
      }
    }, options);
    var data = []; // Create a date range for the last 7 days

    var start = moment().subtract(7, 'days').format('YYYY-MM-DD'); // 7 days ago

    var end = moment().format('YYYY-MM-DD'); // today

    var range = moment.range(start, end); // Create the graph data
    // Iterate the date range and assign a random value for each day

    range.by('days', function (moment) {
      var views = Math.floor(Math.random() * 300) + 10;
      data.push({
        y: views,
        x: moment.toDate()
      });
    });
    var data = {
      datasets: [{
        label: "Visitors",
        data: data
      }]
    };
    Charts.create(id, type, options, data);
  };

  var Products = function Products(id) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'line';
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var data = {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      datasets: [{
        label: "Earnings",
        data: [400, 200, 450, 460, 220, 380, 800]
      }]
    };
    Charts.create(id, type, options, data);
  }; // Create Chart


  Earnings('#earningsChart');
  Views('#viewsChart');
  Products('#productsChart');
})();

/***/ }),

/***/ "./src/js/page.analytics-2-dashboard.js":
/*!**********************************************!*\
  !*** ./src/js/page.analytics-2-dashboard.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ui_huma_js_page_analytics_2_dashboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ui-huma/js/page.analytics-2-dashboard */ "./node_modules/ui-huma/js/page.analytics-2-dashboard.js");
/* harmony import */ var ui_huma_js_page_analytics_2_dashboard__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ui_huma_js_page_analytics_2_dashboard__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ 10:
/*!****************************************************!*\
  !*** multi ./src/js/page.analytics-2-dashboard.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\works\website\Python\Project 1 Django\temp\src\js\page.analytics-2-dashboard.js */"./src/js/page.analytics-2-dashboard.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VpLWh1bWEvanMvcGFnZS5hbmFseXRpY3MtMi1kYXNoYm9hcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3BhZ2UuYW5hbHl0aWNzLTItZGFzaGJvYXJkLmpzIl0sIm5hbWVzIjpbImVhcm5pbmdzIiwicHJldiIsImJhY2tncm91bmRDb2xvciIsInN0YXJ0IiwibW9tZW50Iiwic3VidHJhY3QiLCJmb3JtYXQiLCJlbmQiLCJyYW5nZSIsImJ5IiwibSIsInB1c2giLCJ5IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwieCIsInRvRGF0ZSIsInN0YXJ0T2YiLCJpc1NhbWUiLCJzZXR0aW5ncyIsImNvbG9ycyIsImFjY2VudCIsInByaW1hcnkiLCJFYXJuaW5ncyIsImlkIiwidHlwZSIsIm9wdGlvbnMiLCJDaGFydCIsImhlbHBlcnMiLCJtZXJnZSIsImJhclJvdW5kbmVzcyIsInRpdGxlIiwiZGlzcGxheSIsImZvbnRTaXplIiwiZm9udENvbG9yIiwicG9zaXRpb24iLCJ0ZXh0Iiwic2NhbGVzIiwieUF4ZXMiLCJ0aWNrcyIsIm1heFRpY2tzTGltaXQiLCJ4QXhlcyIsIm9mZnNldCIsInBhZGRpbmciLCJncmlkTGluZXMiLCJ0aW1lIiwidW5pdCIsImRpc3BsYXlGb3JtYXRzIiwiZGF5IiwiZGF0YSIsImRhdGFzZXRzIiwibGFiZWwiLCJiYXJUaGlja25lc3MiLCJDaGFydHMiLCJjcmVhdGUiLCJWaWV3cyIsImF1dG9Ta2lwIiwiYXV0b1NraXBQYWRkaW5nIiwiY2FsbGJhY2siLCJpdGVtIiwic3RlcFNpemUiLCJ2aWV3cyIsIlByb2R1Y3RzIiwibGFiZWxzIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7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Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQSIsImZpbGUiOiIvZGlzdC9hc3NldHMvanMvcGFnZS5hbmFseXRpY3MtMi1kYXNoYm9hcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEwKTtcbiIsIihmdW5jdGlvbigpe1xyXG4gICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgdmFyIGVhcm5pbmdzID0gW11cclxuICB2YXIgcHJldiA9IFtdXHJcbiAgdmFyIGJhY2tncm91bmRDb2xvciA9IFtdXHJcblxyXG4gIC8vIENyZWF0ZSBhIGRhdGUgcmFuZ2UgZm9yIHRoZSBsYXN0IDcgZGF5c1xyXG4gIHZhciBzdGFydCA9IG1vbWVudCgpLnN1YnRyYWN0KDYsICdkYXlzJykuZm9ybWF0KCdZWVlZLU1NLUREJykgLy8gNyBkYXlzIGFnb1xyXG4gIHZhciBlbmQgPSBtb21lbnQoKS5mb3JtYXQoJ1lZWVktTU0tREQnKSAvLyB0b2RheVxyXG4gIHZhciByYW5nZSA9IG1vbWVudC5yYW5nZShzdGFydCwgZW5kKVxyXG5cclxuICAvLyBDcmVhdGUgdGhlIGVhcm5pbmdzIGdyYXBoIGRhdGFcclxuICAvLyBJdGVyYXRlIHRoZSBkYXRlIHJhbmdlIGFuZCBhc3NpZ24gYSByYW5kb20gKCQpIGVhcm5pbmdzIHZhbHVlIGZvciBlYWNoIGRheVxyXG4gIHJhbmdlLmJ5KCdkYXlzJywgZnVuY3Rpb24obSkge1xyXG4gICAgZWFybmluZ3MucHVzaCh7XHJcbiAgICAgIHk6IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDMwMCkgKyAzMCxcclxuICAgICAgeDogbS50b0RhdGUoKVxyXG4gICAgfSlcclxuICAgIHByZXYucHVzaCh7XHJcbiAgICAgIHk6IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDMwMCkgKyAxMCxcclxuICAgICAgeDogbS50b0RhdGUoKVxyXG4gICAgfSlcclxuXHJcbiAgICBpZiAobS5zdGFydE9mKCdkYXknKS5pc1NhbWUobW9tZW50KCkuc3RhcnRPZignZGF5JykpKSB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvci5wdXNoKHNldHRpbmdzLmNvbG9ycy5hY2NlbnRbNTAwXSlcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3IucHVzaChzZXR0aW5ncy5jb2xvcnMucHJpbWFyeVs1MDBdKVxyXG4gICAgfVxyXG4gIH0pXHJcblxyXG4gIHZhciBFYXJuaW5ncyA9IGZ1bmN0aW9uKGlkLCB0eXBlID0gJ3JvdW5kZWRCYXInLCBvcHRpb25zID0ge30pIHtcclxuICAgIG9wdGlvbnMgPSBDaGFydC5oZWxwZXJzLm1lcmdlKHtcclxuICAgICAgYmFyUm91bmRuZXNzOiAxLjIsXHJcbiAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAgZGlzcGxheTogdHJ1ZSxcclxuICAgICAgICBmb250U2l6ZTogMTIsXHJcbiAgICAgICAgZm9udENvbG9yOiAncmdiYSg1NCwgNzYsIDEwMiwgMC41NCknLFxyXG4gICAgICAgIHBvc2l0aW9uOiAndG9wJyxcclxuICAgICAgICB0ZXh0OiAnR0VORVJBVEVEIElOQ09NRSdcclxuICAgICAgfSxcclxuICAgICAgc2NhbGVzOiB7XHJcbiAgICAgICAgeUF4ZXM6IFt7XHJcbiAgICAgICAgICB0aWNrczoge1xyXG4gICAgICAgICAgICBtYXhUaWNrc0xpbWl0OiA0XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfV0sXHJcbiAgICAgICAgeEF4ZXM6IFt7XHJcbiAgICAgICAgICBvZmZzZXQ6IHRydWUsXHJcbiAgICAgICAgICB0aWNrczoge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGdyaWRMaW5lczoge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmYWxzZVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHR5cGU6ICd0aW1lJyxcclxuICAgICAgICAgIHRpbWU6IHtcclxuICAgICAgICAgICAgdW5pdDogJ2RheScsXHJcbiAgICAgICAgICAgIGRpc3BsYXlGb3JtYXRzOiB7XHJcbiAgICAgICAgICAgICAgZGF5OiAnRC9NTSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbWF4VGlja3NMaW1pdDogN1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1dXHJcbiAgICAgIH1cclxuICAgIH0sIG9wdGlvbnMpXHJcblxyXG4gICAgdmFyIGRhdGEgPSB7XHJcbiAgICAgIGRhdGFzZXRzOiBbe1xyXG4gICAgICAgIGxhYmVsOiBcIlByZXZpb3VzIFdlZWtcIixcclxuICAgICAgICBkYXRhOiBwcmV2LFxyXG4gICAgICAgIGJhclRoaWNrbmVzczogMjBcclxuICAgICAgfSwge1xyXG4gICAgICAgIGxhYmVsOiBcIkxhc3QgV2Vla1wiLFxyXG4gICAgICAgIGRhdGE6IGVhcm5pbmdzLFxyXG4gICAgICAgIGJhclRoaWNrbmVzczogMjBcclxuICAgICAgfV1cclxuICAgIH1cclxuXHJcbiAgICBDaGFydHMuY3JlYXRlKGlkLCB0eXBlLCBvcHRpb25zLCBkYXRhKVxyXG4gIH1cclxuXHJcbiAgdmFyIFZpZXdzID0gZnVuY3Rpb24oaWQsIHR5cGUgPSAnbGluZScsIG9wdGlvbnMgPSB7fSkge1xyXG4gICAgb3B0aW9ucyA9IENoYXJ0LmhlbHBlcnMubWVyZ2Uoe1xyXG4gICAgICBzY2FsZXM6IHtcclxuICAgICAgICB5QXhlczogW3tcclxuICAgICAgICAgIHRpY2tzOiB7XHJcbiAgICAgICAgICAgIGF1dG9Ta2lwOiBmYWxzZSxcclxuICAgICAgICAgICAgYXV0b1NraXBQYWRkaW5nOiAwLFxyXG4gICAgICAgICAgICBwYWRkaW5nOiA0LFxyXG4gICAgICAgICAgICBtYXhUaWNrc0xpbWl0OiA0LFxyXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oaXRlbSkge1xyXG4gICAgICAgICAgICAgIHJldHVybiBpdGVtXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XSxcclxuICAgICAgICB4QXhlczogW3tcclxuICAgICAgICAgIHRpY2tzOiB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDQsXHJcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbihpdGVtKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGl0ZW1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBncmlkTGluZXM6IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmFsc2VcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB0eXBlOiAndGltZScsXHJcbiAgICAgICAgICB0aW1lOiB7XHJcbiAgICAgICAgICAgIHVuaXQ6ICdkYXknLFxyXG4gICAgICAgICAgICBkaXNwbGF5Rm9ybWF0czoge1xyXG4gICAgICAgICAgICAgIGRheTogJ0QvTU0nXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN0ZXBTaXplOiAxLFxyXG4gICAgICAgICAgICBtYXhUaWNrc0xpbWl0OiA3LFxyXG4gICAgICAgICAgICBhdXRvU2tpcDogZmFsc2UsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfV1cclxuICAgICAgfVxyXG4gICAgfSwgb3B0aW9ucylcclxuXHJcbiAgICB2YXIgZGF0YSA9IFtdXHJcblxyXG4gICAgLy8gQ3JlYXRlIGEgZGF0ZSByYW5nZSBmb3IgdGhlIGxhc3QgNyBkYXlzXHJcbiAgICB2YXIgc3RhcnQgPSBtb21lbnQoKS5zdWJ0cmFjdCg3LCAnZGF5cycpLmZvcm1hdCgnWVlZWS1NTS1ERCcpIC8vIDcgZGF5cyBhZ29cclxuICAgIHZhciBlbmQgPSBtb21lbnQoKS5mb3JtYXQoJ1lZWVktTU0tREQnKSAvLyB0b2RheVxyXG4gICAgdmFyIHJhbmdlID0gbW9tZW50LnJhbmdlKHN0YXJ0LCBlbmQpXHJcblxyXG4gICAgLy8gQ3JlYXRlIHRoZSBncmFwaCBkYXRhXHJcbiAgICAvLyBJdGVyYXRlIHRoZSBkYXRlIHJhbmdlIGFuZCBhc3NpZ24gYSByYW5kb20gdmFsdWUgZm9yIGVhY2ggZGF5XHJcbiAgICByYW5nZS5ieSgnZGF5cycsIGZ1bmN0aW9uKG1vbWVudCkge1xyXG4gICAgICBjb25zdCB2aWV3cyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDMwMCkgKyAxMFxyXG4gICAgICBkYXRhLnB1c2goe1xyXG4gICAgICAgIHk6IHZpZXdzLFxyXG4gICAgICAgIHg6IG1vbWVudC50b0RhdGUoKVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuXHJcbiAgICB2YXIgZGF0YSA9IHtcclxuICAgICAgZGF0YXNldHM6IFt7XHJcbiAgICAgICAgbGFiZWw6IFwiVmlzaXRvcnNcIixcclxuICAgICAgICBkYXRhXHJcbiAgICAgIH1dXHJcbiAgICB9XHJcblxyXG4gICAgQ2hhcnRzLmNyZWF0ZShpZCwgdHlwZSwgb3B0aW9ucywgZGF0YSlcclxuICB9XHJcblxyXG4gIHZhciBQcm9kdWN0cyA9IGZ1bmN0aW9uKGlkLCB0eXBlID0gJ2xpbmUnLCBvcHRpb25zID0ge30pIHtcclxuICAgIHZhciBkYXRhID0ge1xyXG4gICAgICBsYWJlbHM6IFtcIk1vblwiLCBcIlR1ZVwiLCBcIldlZFwiLCBcIlRodVwiLCBcIkZyaVwiLCBcIlNhdFwiLCBcIlN1blwiXSxcclxuICAgICAgZGF0YXNldHM6IFt7XHJcbiAgICAgICAgbGFiZWw6IFwiRWFybmluZ3NcIixcclxuICAgICAgICBkYXRhOiBbNDAwLCAyMDAsIDQ1MCwgNDYwLCAyMjAsIDM4MCwgODAwXVxyXG4gICAgICB9XVxyXG4gICAgfVxyXG5cclxuICAgIENoYXJ0cy5jcmVhdGUoaWQsIHR5cGUsIG9wdGlvbnMsIGRhdGEpXHJcbiAgfVxyXG5cclxuICAvLyBDcmVhdGUgQ2hhcnRcclxuICBFYXJuaW5ncygnI2Vhcm5pbmdzQ2hhcnQnKVxyXG4gIFZpZXdzKCcjdmlld3NDaGFydCcpXHJcbiAgUHJvZHVjdHMoJyNwcm9kdWN0c0NoYXJ0JylcclxuXHJcbn0pKCkiLCJpbXBvcnQgJ3VpLWh1bWEvanMvcGFnZS5hbmFseXRpY3MtMi1kYXNoYm9hcmQnIl0sInNvdXJjZVJvb3QiOiIifQ==