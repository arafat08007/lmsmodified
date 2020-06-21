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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/es7.symbol.async-iterator */ "./node_modules/core-js/modules/es7.symbol.async-iterator.js");

__webpack_require__(/*! core-js/modules/es6.symbol */ "./node_modules/core-js/modules/es6.symbol.js");

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/core-js/modules/_a-function.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_a-function.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_add-to-unscopables.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_add-to-unscopables.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('unscopables');

var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(ArrayProto, UNSCOPABLES, {});

module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_advance-string-index.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_advance-string-index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var at = __webpack_require__(/*! ./_string-at */ "./node_modules/core-js/modules/_string-at.js")(true); // `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex


module.exports = function (S, index, unicode) {
  return index + (unicode ? at(S, index).length : 1);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_an-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_an-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_array-includes.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-includes.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");

var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");

var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");

module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value; // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare

    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++]; // eslint-disable-next-line no-self-compare

      if (value != value) return true; // Array#indexOf ignores holes, Array#includes - not
    } else for (; length > index; index++) {
      if (IS_INCLUDES || index in O) {
        if (O[index] === el) return IS_INCLUDES || index || 0;
      }
    }
    return !IS_INCLUDES && -1;
  };
};

/***/ }),

/***/ "./node_modules/core-js/modules/_classof.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_classof.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");

var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag'); // ES3 wrong here


var ARG = cof(function () {
  return arguments;
}()) == 'Arguments'; // fallback for IE11 Script Access Denied error

var tryGet = function tryGet(it, key) {
  try {
    return it[key];
  } catch (e) {
    /* empty */
  }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null' // @@toStringTag case
  : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T // builtinTag case
  : ARG ? cof(O) // ES3 arguments fallback
  : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_cof.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_cof.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/es6.regexp.to-string */ "./node_modules/core-js/modules/es6.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es6.object.to-string */ "./node_modules/core-js/modules/es6.object.to-string.js");

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_core.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_core.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = {
  version: '2.6.9'
};
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

/***/ }),

/***/ "./node_modules/core-js/modules/_ctx.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_ctx.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");

module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;

  switch (length) {
    case 1:
      return function (a) {
        return fn.call(that, a);
      };

    case 2:
      return function (a, b) {
        return fn.call(that, a, b);
      };

    case 3:
      return function (a, b, c) {
        return fn.call(that, a, b, c);
      };
  }

  return function ()
  /* ...args */
  {
    return fn.apply(that, arguments);
  };
};

/***/ }),

/***/ "./node_modules/core-js/modules/_defined.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_defined.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_descriptors.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_descriptors.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', {
    get: function get() {
      return 7;
    }
  }).a != 7;
});

/***/ }),

/***/ "./node_modules/core-js/modules/_dom-create.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_dom-create.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document; // typeof document.createElement is 'object' in old IE


var is = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return is ? document.createElement(it) : {};
};

/***/ }),

/***/ "./node_modules/core-js/modules/_enum-bug-keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-bug-keys.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/es6.regexp.split */ "./node_modules/core-js/modules/es6.regexp.split.js");

// IE 8- don't enum bug keys
module.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');

/***/ }),

/***/ "./node_modules/core-js/modules/_enum-keys.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-keys.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");

var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");

var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");

module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;

  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;

    while (symbols.length > i) {
      if (isEnum.call(it, key = symbols[i++])) result.push(key);
    }
  }

  return result;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_export.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_export.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");

var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");

var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");

var PROTOTYPE = 'prototype';

var $export = function $export(type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;

  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined; // export native or passed

    out = (own ? target : source)[key]; // bind timers to global for call from export context

    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out; // extend global

    if (target) redefine(target, key, out, type & $export.U); // export

    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};

global.core = core; // type bitmap

$export.F = 1; // forced

$export.G = 2; // global

$export.S = 4; // static

$export.P = 8; // proto

$export.B = 16; // bind

$export.W = 32; // wrap

$export.U = 64; // safe

$export.R = 128; // real proto method for `library`

module.exports = $export;

/***/ }),

/***/ "./node_modules/core-js/modules/_fails.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_fails.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

/***/ }),

/***/ "./node_modules/core-js/modules/_fix-re-wks.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_fix-re-wks.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es6.regexp.constructor */ "./node_modules/core-js/modules/es6.regexp.constructor.js");

__webpack_require__(/*! core-js/modules/es6.regexp.split */ "./node_modules/core-js/modules/es6.regexp.split.js");

__webpack_require__(/*! core-js/modules/es6.regexp.replace */ "./node_modules/core-js/modules/es6.regexp.replace.js");

__webpack_require__(/*! ./es6.regexp.exec */ "./node_modules/core-js/modules/es6.regexp.exec.js");

var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");

var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");

var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");

var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");

var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");

var regexpExec = __webpack_require__(/*! ./_regexp-exec */ "./node_modules/core-js/modules/_regexp-exec.js");

var SPECIES = wks('species');
var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;

  re.exec = function () {
    var result = [];
    result.groups = {
      a: '7'
    };
    return result;
  };

  return ''.replace(re, '$<a>') !== '7';
});

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = function () {
  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  var re = /(?:)/;
  var originalExec = re.exec;

  re.exec = function () {
    return originalExec.apply(this, arguments);
  };

  var result = 'ab'.split(re);
  return result.length === 2 && result[0] === 'a' && result[1] === 'b';
}();

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);
  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};

    O[SYMBOL] = function () {
      return 7;
    };

    return ''[KEY](O) != 7;
  });
  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    re.exec = function () {
      execCalled = true;
      return null;
    };

    if (KEY === 'split') {
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};

      re.constructor[SPECIES] = function () {
        return re;
      };
    }

    re[SYMBOL]('');
    return !execCalled;
  }) : undefined;

  if (!DELEGATES_TO_SYMBOL || !DELEGATES_TO_EXEC || KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS || KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC) {
    var nativeRegExpMethod = /./[SYMBOL];
    var fns = exec(defined, SYMBOL, ''[KEY], function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
      if (regexp.exec === regexpExec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return {
            done: true,
            value: nativeRegExpMethod.call(regexp, str, arg2)
          };
        }

        return {
          done: true,
          value: nativeMethod.call(str, regexp, arg2)
        };
      }

      return {
        done: false
      };
    });
    var strfn = fns[0];
    var rxfn = fns[1];
    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2 // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
    // 21.2.5.11 RegExp.prototype[@@split](string, limit)
    ? function (string, arg) {
      return rxfn.call(string, this, arg);
    } // 21.2.5.6 RegExp.prototype[@@match](string)
    // 21.2.5.9 RegExp.prototype[@@search](string)
    : function (string) {
      return rxfn.call(string, this);
    });
  }
};

/***/ }),

/***/ "./node_modules/core-js/modules/_flags.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_flags.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // 21.2.5.3 get RegExp.prototype.flags

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_function-to-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_function-to-string.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/es6.regexp.to-string */ "./node_modules/core-js/modules/es6.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es6.object.to-string */ "./node_modules/core-js/modules/es6.object.to-string.js");

module.exports = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('native-function-to-string', Function.toString);

/***/ }),

/***/ "./node_modules/core-js/modules/_global.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self // eslint-disable-next-line no-new-func
: Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

/***/ }),

/***/ "./node_modules/core-js/modules/_has.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_has.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_hide.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_hide.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");

var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_html.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_html.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;

module.exports = document && document.documentElement;

/***/ }),

/***/ "./node_modules/core-js/modules/_ie8-dom-define.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_ie8-dom-define.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('div'), 'a', {
    get: function get() {
      return 7;
    }
  }).a != 7;
});

/***/ }),

/***/ "./node_modules/core-js/modules/_inherit-if-required.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_inherit-if-required.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

var setPrototypeOf = __webpack_require__(/*! ./_set-proto */ "./node_modules/core-js/modules/_set-proto.js").set;

module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;

  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  }

  return that;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_iobject.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_iobject.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/es6.regexp.split */ "./node_modules/core-js/modules/es6.regexp.split.js");

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js"); // eslint-disable-next-line no-prototype-builtins


module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_is-array.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");

module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};

/***/ }),

/***/ "./node_modules/core-js/modules/_is-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

module.exports = function (it) {
  return _typeof(it) === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),

/***/ "./node_modules/core-js/modules/_is-regexp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-regexp.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");

var MATCH = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('match');

module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};

/***/ }),

/***/ "./node_modules/core-js/modules/_iter-create.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-create.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");

var descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");

var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");

var IteratorPrototype = {}; // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()

__webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator'), function () {
  return this;
});

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, {
    next: descriptor(1, next)
  });
  setToStringTag(Constructor, NAME + ' Iterator');
};

/***/ }),

/***/ "./node_modules/core-js/modules/_iter-define.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-define.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es6.function.name */ "./node_modules/core-js/modules/es6.function.name.js");

__webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");

__webpack_require__(/*! core-js/modules/es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");

__webpack_require__(/*! core-js/modules/es6.object.to-string */ "./node_modules/core-js/modules/es6.object.to-string.js");

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");

var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");

var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");

var $iterCreate = __webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/modules/_iter-create.js");

var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");

var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");

var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');

var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`

var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function returnThis() {
  return this;
};

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);

  var getMethod = function getMethod(kind) {
    if (!BUGGY && kind in proto) return proto[kind];

    switch (kind) {
      case KEYS:
        return function keys() {
          return new Constructor(this, kind);
        };

      case VALUES:
        return function values() {
          return new Constructor(this, kind);
        };
    }

    return function entries() {
      return new Constructor(this, kind);
    };
  };

  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype; // Fix native

  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));

    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true); // fix for some old engines

      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  } // fix Array#{values, @@iterator}.name in V8 / FF


  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;

    $default = function values() {
      return $native.call(this);
    };
  } // Define iterator


  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  } // Plug for library


  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;

  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }

  return methods;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_iter-step.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-step.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return {
    value: value,
    done: !!done
  };
};

/***/ }),

/***/ "./node_modules/core-js/modules/_iterators.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iterators.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};

/***/ }),

/***/ "./node_modules/core-js/modules/_library.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_library.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;

/***/ }),

/***/ "./node_modules/core-js/modules/_meta.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_meta.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

__webpack_require__(/*! core-js/modules/es6.object.prevent-extensions */ "./node_modules/core-js/modules/es6.object.prevent-extensions.js");

__webpack_require__(/*! core-js/modules/es6.object.is-extensible */ "./node_modules/core-js/modules/es6.object.is-extensible.js");

var META = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('meta');

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");

var setDesc = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;

var id = 0;

var isExtensible = Object.isExtensible || function () {
  return true;
};

var FREEZE = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});

var setMeta = function setMeta(it) {
  setDesc(it, META, {
    value: {
      i: 'O' + ++id,
      // object ID
      w: {} // weak collections IDs

    }
  });
};

var fastKey = function fastKey(it, create) {
  // return primitive with prefix
  if (!isObject(it)) return _typeof(it) == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;

  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F'; // not necessary to add metadata

    if (!create) return 'E'; // add missing metadata

    setMeta(it); // return object ID
  }

  return it[META].i;
};

var getWeak = function getWeak(it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true; // not necessary to add metadata

    if (!create) return false; // add missing metadata

    setMeta(it); // return hash weak collections IDs
  }

  return it[META].w;
}; // add metadata on freeze-family methods calling


var onFreeze = function onFreeze(it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};

var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};

/***/ }),

/***/ "./node_modules/core-js/modules/_object-create.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-create.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/modules/_object-dps.js");

var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");

var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');

var Empty = function Empty() {
  /* empty */
};

var PROTOTYPE = 'prototype'; // Create object with fake `null` prototype: use iframe Object with cleared prototype

var _createDict = function createDict() {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('iframe');

  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';

  __webpack_require__(/*! ./_html */ "./node_modules/core-js/modules/_html.js").appendChild(iframe);

  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);

  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  _createDict = iframeDocument.F;

  while (i--) {
    delete _createDict[PROTOTYPE][enumBugKeys[i]];
  }

  return _createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;

  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null; // add "__proto__" for Object.getPrototypeOf polyfill

    result[IE_PROTO] = O;
  } else result = _createDict();

  return Properties === undefined ? result : dPs(result, Properties);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_object-dp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dp.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");

var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");

var dP = Object.defineProperty;
exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) {
    /* empty */
  }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_object-dps.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dps.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;

  while (length > i) {
    dP.f(O, P = keys[i++], Properties[P]);
  }

  return O;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopd.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopd.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");

var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");

var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");

var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");

var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");

var gOPD = Object.getOwnPropertyDescriptor;
exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) {
    /* empty */
  }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopn-ext.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopn-ext.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

__webpack_require__(/*! core-js/modules/es6.regexp.to-string */ "./node_modules/core-js/modules/es6.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es6.object.to-string */ "./node_modules/core-js/modules/es6.object.to-string.js");

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");

var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f;

var toString = {}.toString;
var windowNames = (typeof window === "undefined" ? "undefined" : _typeof(window)) == 'object' && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function getWindowNames(it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};

/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopn.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopn.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/modules/_object-keys-internal.js");

var hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_object-gops.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gops.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/es6.symbol */ "./node_modules/core-js/modules/es6.symbol.js");

exports.f = Object.getOwnPropertySymbols;

/***/ }),

/***/ "./node_modules/core-js/modules/_object-gpo.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gpo.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");

var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");

var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');

var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];

  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  }

  return O instanceof Object ? ObjectProto : null;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys-internal.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys-internal.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");

var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");

var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js")(false);

var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;

  for (key in O) {
    if (key != IE_PROTO) has(O, key) && result.push(key);
  } // Don't enum bug & hidden keys


  while (names.length > i) {
    if (has(O, key = names[i++])) {
      ~arrayIndexOf(result, key) || result.push(key);
    }
  }

  return result;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");

__webpack_require__(/*! core-js/modules/es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");

__webpack_require__(/*! core-js/modules/es6.object.to-string */ "./node_modules/core-js/modules/es6.object.to-string.js");

__webpack_require__(/*! core-js/modules/es6.object.keys */ "./node_modules/core-js/modules/es6.object.keys.js");

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/modules/_object-keys-internal.js");

var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_object-pie.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-pie.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;

/***/ }),

/***/ "./node_modules/core-js/modules/_object-sap.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-sap.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");

var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");

module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () {
    fn(1);
  }), 'Object', exp);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_property-desc.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_property-desc.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

/***/ }),

/***/ "./node_modules/core-js/modules/_redefine.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/es6.regexp.split */ "./node_modules/core-js/modules/es6.regexp.split.js");

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");

var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");

var SRC = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('src');

var $toString = __webpack_require__(/*! ./_function-to-string */ "./node_modules/core-js/modules/_function-to-string.js");

var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));

  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  } // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative

})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});

/***/ }),

/***/ "./node_modules/core-js/modules/_regexp-exec-abstract.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_regexp-exec-abstract.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

__webpack_require__(/*! core-js/modules/es6.regexp.constructor */ "./node_modules/core-js/modules/es6.regexp.constructor.js");

var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");

var builtinExec = RegExp.prototype.exec; // `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec

module.exports = function (R, S) {
  var exec = R.exec;

  if (typeof exec === 'function') {
    var result = exec.call(R, S);

    if (_typeof(result) !== 'object') {
      throw new TypeError('RegExp exec method returned something other than an Object or null');
    }

    return result;
  }

  if (classof(R) !== 'RegExp') {
    throw new TypeError('RegExp#exec called on incompatible receiver');
  }

  return builtinExec.call(R, S);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_regexp-exec.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_regexp-exec.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es6.regexp.replace */ "./node_modules/core-js/modules/es6.regexp.replace.js");

__webpack_require__(/*! core-js/modules/es6.regexp.constructor */ "./node_modules/core-js/modules/es6.regexp.constructor.js");

var regexpFlags = __webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js");

var nativeExec = RegExp.prototype.exec; // This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.

var nativeReplace = String.prototype.replace;
var patchedExec = nativeExec;
var LAST_INDEX = 'lastIndex';

var UPDATES_LAST_INDEX_WRONG = function () {
  var re1 = /a/,
      re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
}(); // nonparticipating capturing group, copied from es5-shim's String#split patch.


var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;
var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }

    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];
    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
    }

    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      // eslint-disable-next-line no-loop-func
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;

/***/ }),

/***/ "./node_modules/core-js/modules/_set-proto.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_set-proto.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/es6.object.set-prototype-of */ "./node_modules/core-js/modules/es6.object.set-prototype-of.js");

// Works with __proto__ only. Old v8 can't work with null proto objects.

/* eslint-disable no-proto */
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

var check = function check(O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};

module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
  function (test, buggy, set) {
    try {
      set = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js")(Function.call, __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js").f(Object.prototype, '__proto__').set, 2);
      set(test, []);
      buggy = !(test instanceof Array);
    } catch (e) {
      buggy = true;
    }

    return function setPrototypeOf(O, proto) {
      check(O, proto);
      if (buggy) O.__proto__ = proto;else set(O, proto);
      return O;
    };
  }({}, false) : undefined),
  check: check
};

/***/ }),

/***/ "./node_modules/core-js/modules/_set-species.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_set-species.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");

var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");

var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function get() {
      return this;
    }
  });
};

/***/ }),

/***/ "./node_modules/core-js/modules/_set-to-string-tag.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_set-to-string-tag.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");

var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, {
    configurable: true,
    value: tag
  });
};

/***/ }),

/***/ "./node_modules/core-js/modules/_shared-key.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_shared-key.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('keys');

var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");

module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};

/***/ }),

/***/ "./node_modules/core-js/modules/_shared.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_shared.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});

/***/ }),

/***/ "./node_modules/core-js/modules/_species-constructor.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_species-constructor.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");

var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');

module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_string-at.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_string-at.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");

var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js"); // true  -> String#at
// false -> String#codePointAt


module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

/***/ }),

/***/ "./node_modules/core-js/modules/_string-html.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_string-html.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/es6.regexp.split */ "./node_modules/core-js/modules/es6.regexp.split.js");

__webpack_require__(/*! core-js/modules/es6.regexp.replace */ "./node_modules/core-js/modules/es6.regexp.replace.js");

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");

var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");

var quot = /"/g; // B.2.3.2.1 CreateHTML(string, tag, attribute, value)

var createHTML = function createHTML(string, tag, attribute, value) {
  var S = String(defined(string));
  var p1 = '<' + tag;
  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};

module.exports = function (NAME, exec) {
  var O = {};
  O[NAME] = exec(createHTML);
  $export($export.P + $export.F * fails(function () {
    var test = ''[NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  }), 'String', O);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_to-absolute-index.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_to-absolute-index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");

var max = Math.max;
var min = Math.min;

module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_to-integer.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-integer.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;

module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_to-iobject.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-iobject.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");

var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");

module.exports = function (it) {
  return IObject(defined(it));
};

/***/ }),

/***/ "./node_modules/core-js/modules/_to-length.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-length.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");

var min = Math.min;

module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),

/***/ "./node_modules/core-js/modules/_to-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");

module.exports = function (it) {
  return Object(defined(it));
};

/***/ }),

/***/ "./node_modules/core-js/modules/_to-primitive.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_to-primitive.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/es6.regexp.to-string */ "./node_modules/core-js/modules/es6.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es6.object.to-string */ "./node_modules/core-js/modules/es6.object.to-string.js");

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js"); // instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string


module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),

/***/ "./node_modules/core-js/modules/_uid.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_uid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/es6.regexp.to-string */ "./node_modules/core-js/modules/es6.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es6.object.to-string */ "./node_modules/core-js/modules/es6.object.to-string.js");

var id = 0;
var px = Math.random();

module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),

/***/ "./node_modules/core-js/modules/_wks-define.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_wks-define.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");

var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/modules/_wks-ext.js");

var defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;

module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, {
    value: wksExt.f(name)
  });
};

/***/ }),

/***/ "./node_modules/core-js/modules/_wks-ext.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_wks-ext.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");

/***/ }),

/***/ "./node_modules/core-js/modules/_wks.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_wks.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('wks');

var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");

var _Symbol = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Symbol;

var USE_SYMBOL = typeof _Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] = USE_SYMBOL && _Symbol[name] || (USE_SYMBOL ? _Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js");

var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/core-js/modules/_iter-step.js");

var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");

var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js"); // 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()


module.exports = __webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/modules/_iter-define.js")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target

  this._i = 0; // next index

  this._k = kind; // kind
  // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;

  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }

  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values'); // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)

Iterators.Arguments = Iterators.Array;
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

/***/ }),

/***/ "./node_modules/core-js/modules/es6.function.name.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.function.name.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/es6.regexp.match */ "./node_modules/core-js/modules/es6.regexp.match.js");

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;

var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name'; // 19.2.4.2 name

NAME in FProto || __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && dP(FProto, NAME, {
  configurable: true,
  get: function get() {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.is-extensible.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.is-extensible.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.11 Object.isExtensible(O)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('isExtensible', function ($isExtensible) {
  return function isExtensible(it) {
    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.keys.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.keys.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");

var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.prevent-extensions.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.prevent-extensions.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.15 Object.preventExtensions(O)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

var meta = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").onFreeze;

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('preventExtensions', function ($preventExtensions) {
  return function preventExtensions(it) {
    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.set-prototype-of.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.set-prototype-of.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Object', {
  setPrototypeOf: __webpack_require__(/*! ./_set-proto */ "./node_modules/core-js/modules/_set-proto.js").set
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.to-string.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.to-string.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // 19.1.3.6 Object.prototype.toString()

var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");

var test = {};
test[__webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag')] = 'z';

if (test + '' != '[object z]') {
  __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(Object.prototype, 'toString', function toString() {
    return '[object ' + classof(this) + ']';
  }, true);
}

/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.constructor.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.constructor.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");

var inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ "./node_modules/core-js/modules/_inherit-if-required.js");

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;

var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f;

var isRegExp = __webpack_require__(/*! ./_is-regexp */ "./node_modules/core-js/modules/_is-regexp.js");

var $flags = __webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js");

var $RegExp = global.RegExp;
var Base = $RegExp;
var proto = $RegExp.prototype;
var re1 = /a/g;
var re2 = /a/g; // "new" creates a new object, old webkit buggy here

var CORRECT_NEW = new $RegExp(re1) !== re1;

if (__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && (!CORRECT_NEW || __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  re2[__webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('match')] = false; // RegExp constructor can alter flags and IsRegExp works correct with @@match

  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
}))) {
  $RegExp = function RegExp(p, f) {
    var tiRE = this instanceof $RegExp;
    var piRE = isRegExp(p);
    var fiU = f === undefined;
    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p : inheritIfRequired(CORRECT_NEW ? new Base(piRE && !fiU ? p.source : p, f) : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f), tiRE ? this : proto, $RegExp);
  };

  var proxy = function proxy(key) {
    key in $RegExp || dP($RegExp, key, {
      configurable: true,
      get: function get() {
        return Base[key];
      },
      set: function set(it) {
        Base[key] = it;
      }
    });
  };

  for (var keys = gOPN(Base), i = 0; keys.length > i;) {
    proxy(keys[i++]);
  }

  proto.constructor = $RegExp;
  $RegExp.prototype = proto;

  __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(global, 'RegExp', $RegExp);
}

__webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js")('RegExp');

/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.exec.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.exec.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var regexpExec = __webpack_require__(/*! ./_regexp-exec */ "./node_modules/core-js/modules/_regexp-exec.js");

__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js")({
  target: 'RegExp',
  proto: true,
  forced: regexpExec !== /./.exec
}, {
  exec: regexpExec
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.flags.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.flags.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/es6.regexp.constructor */ "./node_modules/core-js/modules/es6.regexp.constructor.js");

__webpack_require__(/*! core-js/modules/es6.regexp.flags */ "./node_modules/core-js/modules/es6.regexp.flags.js");

// 21.2.5.3 get RegExp.prototype.flags()
if (__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && /./g.flags != 'g') __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f(RegExp.prototype, 'flags', {
  configurable: true,
  get: __webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js")
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.match.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.match.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es6.regexp.constructor */ "./node_modules/core-js/modules/es6.regexp.constructor.js");

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");

var advanceStringIndex = __webpack_require__(/*! ./_advance-string-index */ "./node_modules/core-js/modules/_advance-string-index.js");

var regExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ "./node_modules/core-js/modules/_regexp-exec-abstract.js"); // @@match logic


__webpack_require__(/*! ./_fix-re-wks */ "./node_modules/core-js/modules/_fix-re-wks.js")('match', 1, function (defined, MATCH, $match, maybeCallNative) {
  return [// `String.prototype.match` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.match
  function match(regexp) {
    var O = defined(this);
    var fn = regexp == undefined ? undefined : regexp[MATCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
  }, // `RegExp.prototype[@@match]` method
  // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
  function (regexp) {
    var res = maybeCallNative($match, regexp, this);
    if (res.done) return res.value;
    var rx = anObject(regexp);
    var S = String(this);
    if (!rx.global) return regExpExec(rx, S);
    var fullUnicode = rx.unicode;
    rx.lastIndex = 0;
    var A = [];
    var n = 0;
    var result;

    while ((result = regExpExec(rx, S)) !== null) {
      var matchStr = String(result[0]);
      A[n] = matchStr;
      if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      n++;
    }

    return n === 0 ? null : A;
  }];
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.replace.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.replace.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");

var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");

var advanceStringIndex = __webpack_require__(/*! ./_advance-string-index */ "./node_modules/core-js/modules/_advance-string-index.js");

var regExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ "./node_modules/core-js/modules/_regexp-exec-abstract.js");

var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

var maybeToString = function maybeToString(it) {
  return it === undefined ? it : String(it);
}; // @@replace logic


__webpack_require__(/*! ./_fix-re-wks */ "./node_modules/core-js/modules/_fix-re-wks.js")('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
  return [// `String.prototype.replace` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.replace
  function replace(searchValue, replaceValue) {
    var O = defined(this);
    var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
    return fn !== undefined ? fn.call(searchValue, O, replaceValue) : $replace.call(String(O), searchValue, replaceValue);
  }, // `RegExp.prototype[@@replace]` method
  // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
  function (regexp, replaceValue) {
    var res = maybeCallNative($replace, regexp, this, replaceValue);
    if (res.done) return res.value;
    var rx = anObject(regexp);
    var S = String(this);
    var functionalReplace = typeof replaceValue === 'function';
    if (!functionalReplace) replaceValue = String(replaceValue);
    var global = rx.global;

    if (global) {
      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
    }

    var results = [];

    while (true) {
      var result = regExpExec(rx, S);
      if (result === null) break;
      results.push(result);
      if (!global) break;
      var matchStr = String(result[0]);
      if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
    }

    var accumulatedResult = '';
    var nextSourcePosition = 0;

    for (var i = 0; i < results.length; i++) {
      result = results[i];
      var matched = String(result[0]);
      var position = max(min(toInteger(result.index), S.length), 0);
      var captures = []; // NOTE: This is equivalent to
      //   captures = result.slice(1).map(maybeToString)
      // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
      // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
      // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.

      for (var j = 1; j < result.length; j++) {
        captures.push(maybeToString(result[j]));
      }

      var namedCaptures = result.groups;

      if (functionalReplace) {
        var replacerArgs = [matched].concat(captures, position, S);
        if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
        var replacement = String(replaceValue.apply(undefined, replacerArgs));
      } else {
        replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
      }

      if (position >= nextSourcePosition) {
        accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
        nextSourcePosition = position + matched.length;
      }
    }

    return accumulatedResult + S.slice(nextSourcePosition);
  }]; // https://tc39.github.io/ecma262/#sec-getsubstitution

  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;

    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }

    return $replace.call(replacement, symbols, function (match, ch) {
      var capture;

      switch (ch.charAt(0)) {
        case '$':
          return '$';

        case '&':
          return matched;

        case '`':
          return str.slice(0, position);

        case "'":
          return str.slice(tailPos);

        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;

        default:
          // \d\d?
          var n = +ch;
          if (n === 0) return match;

          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }

          capture = captures[n - 1];
      }

      return capture === undefined ? '' : capture;
    });
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.split.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.split.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es6.regexp.split */ "./node_modules/core-js/modules/es6.regexp.split.js");

__webpack_require__(/*! core-js/modules/es6.regexp.constructor */ "./node_modules/core-js/modules/es6.regexp.constructor.js");

var isRegExp = __webpack_require__(/*! ./_is-regexp */ "./node_modules/core-js/modules/_is-regexp.js");

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/modules/_species-constructor.js");

var advanceStringIndex = __webpack_require__(/*! ./_advance-string-index */ "./node_modules/core-js/modules/_advance-string-index.js");

var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");

var callRegExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ "./node_modules/core-js/modules/_regexp-exec-abstract.js");

var regexpExec = __webpack_require__(/*! ./_regexp-exec */ "./node_modules/core-js/modules/_regexp-exec.js");

var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");

var $min = Math.min;
var $push = [].push;
var $SPLIT = 'split';
var LENGTH = 'length';
var LAST_INDEX = 'lastIndex';
var MAX_UINT32 = 0xffffffff; // babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError

var SUPPORTS_Y = !fails(function () {
  RegExp(MAX_UINT32, 'y');
}); // @@split logic

__webpack_require__(/*! ./_fix-re-wks */ "./node_modules/core-js/modules/_fix-re-wks.js")('split', 2, function (defined, SPLIT, $split, maybeCallNative) {
  var internalSplit;

  if ('abbc'[$SPLIT](/(b)*/)[1] == 'c' || 'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 || 'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 || '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 || '.'[$SPLIT](/()()/)[LENGTH] > 1 || ''[$SPLIT](/.?/)[LENGTH]) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function internalSplit(separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return []; // If `separator` is not a regex, use native split

      if (!isRegExp(separator)) return $split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') + (separator.multiline ? 'm' : '') + (separator.unicode ? 'u' : '') + (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? MAX_UINT32 : limit >>> 0; // Make `global` and avoid `lastIndex` issues by working with a copy

      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;

      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy[LAST_INDEX];

        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }

        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }

      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));

      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    }; // Chakra, V8

  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    internalSplit = function internalSplit(separator, limit) {
      return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);
    };
  } else {
    internalSplit = $split;
  }

  return [// `String.prototype.split` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.split
  function split(separator, limit) {
    var O = defined(this);
    var splitter = separator == undefined ? undefined : separator[SPLIT];
    return splitter !== undefined ? splitter.call(separator, O, limit) : internalSplit.call(String(O), separator, limit);
  }, // `RegExp.prototype[@@split]` method
  // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
  //
  // NOTE: This cannot be properly polyfilled in engines that don't support
  // the 'y' flag.
  function (regexp, limit) {
    var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);
    if (res.done) return res.value;
    var rx = anObject(regexp);
    var S = String(this);
    var C = speciesConstructor(rx, RegExp);
    var unicodeMatching = rx.unicode;
    var flags = (rx.ignoreCase ? 'i' : '') + (rx.multiline ? 'm' : '') + (rx.unicode ? 'u' : '') + (SUPPORTS_Y ? 'y' : 'g'); // ^(? + rx + ) is needed, in combination with some S slicing, to
    // simulate the 'y' flag.

    var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
    var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
    if (lim === 0) return [];
    if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
    var p = 0;
    var q = 0;
    var A = [];

    while (q < S.length) {
      splitter.lastIndex = SUPPORTS_Y ? q : 0;
      var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
      var e;

      if (z === null || (e = $min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p) {
        q = advanceStringIndex(S, q, unicodeMatching);
      } else {
        A.push(S.slice(p, q));
        if (A.length === lim) return A;

        for (var i = 1; i <= z.length - 1; i++) {
          A.push(z[i]);
          if (A.length === lim) return A;
        }

        q = p = e;
      }
    }

    A.push(S.slice(p));
    return A;
  }];
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.to-string.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.to-string.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es6.function.name */ "./node_modules/core-js/modules/es6.function.name.js");

__webpack_require__(/*! core-js/modules/es6.regexp.flags */ "./node_modules/core-js/modules/es6.regexp.flags.js");

__webpack_require__(/*! core-js/modules/es6.regexp.constructor */ "./node_modules/core-js/modules/es6.regexp.constructor.js");

__webpack_require__(/*! core-js/modules/es6.regexp.to-string */ "./node_modules/core-js/modules/es6.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es6.object.to-string */ "./node_modules/core-js/modules/es6.object.to-string.js");

__webpack_require__(/*! ./es6.regexp.flags */ "./node_modules/core-js/modules/es6.regexp.flags.js");

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

var $flags = __webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js");

var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");

var TO_STRING = 'toString';
var $toString = /./[TO_STRING];

var define = function define(fn) {
  __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(RegExp.prototype, TO_STRING, fn, true);
}; // 21.2.5.14 RegExp.prototype.toString()


if (__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return $toString.call({
    source: 'a',
    flags: 'b'
  }) != '/a/b';
})) {
  define(function toString() {
    var R = anObject(this);
    return '/'.concat(R.source, '/', 'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
  }); // FF44- RegExp#toString has a wrong name
} else if ($toString.name != TO_STRING) {
  define(function toString() {
    return $toString.call(this);
  });
}

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.link.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.link.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // B.2.3.10 String.prototype.link(url)

__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('link', function (createHTML) {
  return function link(url) {
    return createHTML(this, 'a', 'href', url);
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.sub.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.sub.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // B.2.3.13 String.prototype.sub()

__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('sub', function (createHTML) {
  return function sub() {
    return createHTML(this, 'sub', '', '');
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.symbol.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/es6.symbol.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // ECMAScript 6 symbols shim

__webpack_require__(/*! core-js/modules/es6.regexp.split */ "./node_modules/core-js/modules/es6.regexp.split.js");

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");

var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");

var META = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").KEY;

var $fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js");

var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");

var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");

var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");

var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/modules/_wks-ext.js");

var wksDefine = __webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/modules/_wks-define.js");

var enumKeys = __webpack_require__(/*! ./_enum-keys */ "./node_modules/core-js/modules/_enum-keys.js");

var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/modules/_is-array.js");

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");

var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");

var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");

var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");

var _create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");

var gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ "./node_modules/core-js/modules/_object-gopn-ext.js");

var $GOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");

var $GOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");

var $DP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");

var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");

var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;

var _stringify = $JSON && $JSON.stringify;

var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject; // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173

var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild; // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687

var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function get() {
      return dP(this, 'a', {
        value: 7
      }).a;
    }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function wrap(tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);

  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && _typeof($Symbol.iterator) == 'symbol' ? function (it) {
  return _typeof(it) == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);

  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, {
        enumerable: createDesc(0, false)
      });
    }

    return setSymbolDesc(it, key, D);
  }

  return dP(it, key, D);
};

var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;

  while (l > i) {
    $defineProperty(it, key = keys[i++], P[key]);
  }

  return it;
};

var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};

var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};

var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;

  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  }

  return result;
};

var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;

  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  }

  return result;
}; // 19.4.1.1 Symbol([description])


if (!USE_NATIVE) {
  $Symbol = function _Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);

    var $set = function $set(value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };

    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, {
      configurable: true,
      set: $set
    });
    return wrap(tag);
  };

  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });
  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js").f = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {
  Symbol: $Symbol
});

for (var es6Symbols = // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(','), j = 0; es6Symbols.length > j;) {
  wks(es6Symbols[j++]);
}

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) {
  wksDefine(wellKnownSymbols[k++]);
}

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function _for(key) {
    return has(SymbolRegistry, key += '') ? SymbolRegistry[key] : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');

    for (var key in SymbolRegistry) {
      if (SymbolRegistry[key] === sym) return key;
    }
  },
  useSetter: function useSetter() {
    setter = true;
  },
  useSimple: function useSimple() {
    setter = false;
  }
});
$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
}); // Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443

var FAILS_ON_PRIMITIVES = $fails(function () {
  $GOPS.f(1);
});
$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
}); // 24.3.2 JSON.stringify(value [, replacer [, space]])

$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol(); // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols

  return _stringify([S]) != '[null]' || _stringify({
    a: S
  }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;

    while (arguments.length > i) {
      args.push(arguments[i++]);
    }

    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined

    if (!isArray(replacer)) replacer = function replacer(key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
}); // 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)

$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf); // 19.4.3.5 Symbol.prototype[@@toStringTag]

setToStringTag($Symbol, 'Symbol'); // 20.2.1.9 Math[@@toStringTag]

setToStringTag(Math, 'Math', true); // 24.3.3 JSON[@@toStringTag]

setToStringTag(global.JSON, 'JSON', true);

/***/ }),

/***/ "./node_modules/core-js/modules/es7.symbol.async-iterator.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.symbol.async-iterator.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/modules/_wks-define.js")('asyncIterator');

/***/ }),

/***/ "./node_modules/core-js/modules/web.dom.iterable.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom.iterable.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__(/*! ./es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");

var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");

var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");

var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");

var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");

var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");

var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;
var DOMIterables = {
  CSSRuleList: true,
  // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true,
  // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true,
  // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;

  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) {
      if (!proto[key]) redefine(proto, key, $iterators[key], true);
    }
  }
}

/***/ }),

/***/ "./node_modules/jsrender/jsrender.js":
/*!*******************************************!*\
  !*** ./node_modules/jsrender/jsrender.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(/*! core-js/modules/es6.regexp.to-string */ "./node_modules/core-js/modules/es6.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es6.object.to-string */ "./node_modules/core-js/modules/es6.object.to-string.js");

__webpack_require__(/*! core-js/modules/es6.string.sub */ "./node_modules/core-js/modules/es6.string.sub.js");

__webpack_require__(/*! core-js/modules/es6.regexp.replace */ "./node_modules/core-js/modules/es6.regexp.replace.js");

__webpack_require__(/*! core-js/modules/es6.regexp.split */ "./node_modules/core-js/modules/es6.regexp.split.js");

__webpack_require__(/*! core-js/modules/es6.regexp.constructor */ "./node_modules/core-js/modules/es6.regexp.constructor.js");

__webpack_require__(/*! core-js/modules/es6.string.link */ "./node_modules/core-js/modules/es6.string.link.js");

__webpack_require__(/*! core-js/modules/es6.function.name */ "./node_modules/core-js/modules/es6.function.name.js");

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

/*! JsRender v1.0.6: http://jsviews.com/#jsrender */

/*! **VERSION FOR WEB** (For NODE.JS see http://jsviews.com/download/jsrender-node.js) */

/*
 * Best-of-breed templating in browser or on Node.js.
 * Does not require jQuery, or HTML DOM
 * Integrates with JsViews (http://jsviews.com/#jsviews)
 *
 * Copyright 2020, Boris Moore
 * Released under the MIT License.
 */
//jshint -W018, -W041, -W120
(function (factory, global) {
  // global var is the this object, which is window when running in the usual browser environment
  var $ = global.jQuery;

  if (( false ? undefined : _typeof(exports)) === "object") {
    // CommonJS e.g. Browserify
    module.exports = $ ? factory(global, $) : function ($) {
      // If no global jQuery, take optional jQuery passed as parameter: require('jsrender')(jQuery)
      if ($ && !$.fn) {
        throw "Provide jQuery or null";
      }

      return factory(global, $);
    };
  } else if (true) {
    // AMD script loader, e.g. RequireJS
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return factory(global);
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})( // factory (for jsrender.js)
function (global, $) {
  "use strict"; //========================== Top-level vars ==========================
  // global var is the this object, which is window when running in the usual browser environment

  var setGlobals = $ === false; // Only set globals if script block in browser (not AMD and not CommonJS)

  $ = $ && $.fn ? $ : global.jQuery; // $ is jQuery passed in by CommonJS loader (Browserify), or global jQuery.

  var versionNumber = "v1.0.6",
      jsvStoreName,
      rTag,
      rTmplString,
      topView,
      $views,
      $expando,
      _ocp = "_ocp",
      // Observable contextual parameter
  //TODO	tmplFnsCache = {},
  $isFunction,
      $isArray,
      $templates,
      $converters,
      $helpers,
      $tags,
      $sub,
      $subSettings,
      $subSettingsAdvanced,
      $viewsSettings,
      delimOpenChar0,
      delimOpenChar1,
      delimCloseChar0,
      delimCloseChar1,
      linkChar,
      setting,
      baseOnError,
      isRenderCall,
      rNewLine = /[ \t]*(\r\n|\n|\r)/g,
      rUnescapeQuotes = /\\(['"])/g,
      rEscapeQuotes = /['"\\]/g,
      // Escape quotes and \ character
  rBuildHash = /(?:\x08|^)(onerror:)?(?:(~?)(([\w$.]+):)?([^\x08]+))\x08(,)?([^\x08]+)/gi,
      rTestElseIf = /^if\s/,
      rFirstElem = /<(\w+)[>\s]/,
      rAttrEncode = /[\x00`><"'&=]/g,
      // Includes > encoding since rConvertMarkers in JsViews does not skip > characters in attribute strings
  rIsHtml = /[\x00`><\"'&=]/,
      rHasHandlers = /^on[A-Z]|^convert(Back)?$/,
      rWrappedInViewMarker = /^\#\d+_`[\s\S]*\/\d+_`$/,
      rHtmlEncode = rAttrEncode,
      rDataEncode = /[&<>]/g,
      rDataUnencode = /&(amp|gt|lt);/g,
      rBracketQuote = /\[['"]?|['"]?\]/g,
      viewId = 0,
      charEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\x00": "&#0;",
    "'": "&#39;",
    '"': "&#34;",
    "`": "&#96;",
    "=": "&#61;"
  },
      charsFromEntities = {
    amp: "&",
    gt: ">",
    lt: "<"
  },
      HTML = "html",
      OBJECT = "object",
      tmplAttr = "data-jsv-tmpl",
      jsvTmpl = "jsvTmpl",
      indexStr = "For #index in nested block use #getIndex().",
      $render = {},
      jsr = global.jsrender,
      jsrToJq = jsr && $ && !$.render,
      // JsRender already loaded, without jQuery. but we will re-load it now to attach to jQuery
  jsvStores = {
    template: {
      compile: compileTmpl
    },
    tag: {
      compile: compileTag
    },
    viewModel: {
      compile: compileViewModel
    },
    helper: {},
    converter: {}
  }; // views object ($.views if jQuery is loaded, jsrender.views if no jQuery, e.g. in Node.js)

  $views = {
    jsviews: versionNumber,
    sub: {
      // subscription, e.g. JsViews integration
      rPath: /^(!*?)(?:null|true|false|\d[\d.]*|([\w$]+|\.|~([\w$]+)|#(view|([\w$]+))?)([\w$.^]*?)(?:[.[^]([\w$]+)\]?)?)$/g,
      //        not                               object     helper    view  viewProperty pathTokens      leafToken
      rPrm: /(\()(?=\s*\()|(?:([([])\s*)?(?:(\^?)(~?[\w$.^]+)?\s*((\+\+|--)|\+|-|~(?![\w$])|&&|\|\||===|!==|==|!=|<=|>=|[<>%*:?\/]|(=))\s*|(!*?(@)?[#~]?[\w$.^]+)([([])?)|(,\s*)|(\(?)\\?(?:(')|("))|(?:\s*(([)\]])(?=[.^]|\s*$|[^([])|[)\]])([([]?))|(\s+)/g,
      //   lftPrn0           lftPrn         bound     path               operator     err                                          eq      path2 late            prn      comma  lftPrn2   apos quot        rtPrn  rtPrnDot                  prn2     space
      View: View,
      Err: JsViewsError,
      tmplFn: tmplFn,
      parse: parseParams,
      extend: $extend,
      extendCtx: extendCtx,
      syntaxErr: syntaxError,
      onStore: {
        template: function template(name, item) {
          if (item === null) {
            delete $render[name];
          } else if (name) {
            $render[name] = item;
          }
        }
      },
      addSetting: addSetting,
      settings: {
        allowCode: false
      },
      advSet: noop,
      // Update advanced settings
      _thp: tagHandlersFromProps,
      _gm: getMethod,
      _tg: function _tg() {},
      // Constructor for tagDef
      _cnvt: convertVal,
      _tag: renderTag,
      _er: error,
      _err: onRenderError,
      _cp: retVal,
      // Get observable contextual parameters (or properties) ~foo=expr. In JsRender, simply returns val.
      _sq: function _sq(token) {
        if (token === "constructor") {
          syntaxError("");
        }

        return token;
      }
    },
    settings: {
      delimiters: $viewsDelimiters,
      advanced: function advanced(value) {
        return value ? ($extend($subSettingsAdvanced, value), $sub.advSet(), $viewsSettings) : $subSettingsAdvanced;
      }
    },
    map: dataMap // If jsObservable loaded first, use that definition of dataMap

  };

  function getDerivedMethod(baseMethod, method) {
    return function () {
      var ret,
          tag = this,
          prevBase = tag.base;
      tag.base = baseMethod; // Within method call, calling this.base will call the base method

      ret = method.apply(tag, arguments); // Call the method

      tag.base = prevBase; // Replace this.base to be the base method of the previous call, for chained calls

      return ret;
    };
  }

  function getMethod(baseMethod, method) {
    // For derived methods (or handlers declared declaratively as in {{:foo onChange=~fooChanged}} replace by a derived method, to allow using this.base(...)
    // or this.baseApply(arguments) to call the base implementation. (Equivalent to this._super(...) and this._superApply(arguments) in jQuery UI)
    if ($isFunction(method)) {
      method = getDerivedMethod(!baseMethod ? noop // no base method implementation, so use noop as base method
      : baseMethod._d ? baseMethod // baseMethod is a derived method, so use it
      : getDerivedMethod(noop, baseMethod), // baseMethod is not derived so make its base method be the noop method
      method);
      method._d = (baseMethod && baseMethod._d || 0) + 1; // Add flag for derived method (incremented for derived of derived...)
    }

    return method;
  }

  function tagHandlersFromProps(tag, tagCtx) {
    var prop,
        props = tagCtx.props;

    for (prop in props) {
      if (rHasHandlers.test(prop) && !(tag[prop] && tag[prop].fix)) {
        // Don't override handlers with fix expando (used in datepicker and spinner)
        tag[prop] = prop !== "convert" ? getMethod(tag.constructor.prototype[prop], props[prop]) : props[prop]; // Copy over the onFoo props, convert and convertBack from tagCtx.props to tag (overrides values in tagDef).
        // Note: unsupported scenario: if handlers are dynamically added ^onFoo=expression this will work, but dynamically removing will not work.
      }
    }
  }

  function retVal(val) {
    return val;
  }

  function noop() {
    return "";
  }

  function dbgBreak(val) {
    // Usage examples: {{dbg:...}}, {{:~dbg(...)}}, {{dbg .../}}, {^{for ... onAfterLink=~dbg}} etc.
    try {
      console.log("JsRender dbg breakpoint: " + val);
      throw "dbg breakpoint"; // To break here, stop on caught exceptions.
    } catch (e) {}

    return this.base ? this.baseApply(arguments) : val;
  }

  function JsViewsError(message) {
    // Error exception type for JsViews/JsRender
    // Override of $.views.sub.Error is possible
    this.name = ($.link ? "JsViews" : "JsRender") + " Error";
    this.message = message || this.name;
  }

  function $extend(target, source) {
    if (target) {
      for (var name in source) {
        target[name] = source[name];
      }

      return target;
    }
  }

  (JsViewsError.prototype = new Error()).constructor = JsViewsError; //========================== Top-level functions ==========================
  //===================
  // views.delimiters
  //===================

  /**
  * Set the tag opening and closing delimiters and 'link' character. Default is "{{", "}}" and "^"
  * openChars, closeChars: opening and closing strings, each with two characters
  * $.views.settings.delimiters(...)
  *
  * @param {string}   openChars
  * @param {string}   [closeChars]
  * @param {string}   [link]
  * @returns {Settings}
  *
  * Get delimiters
  * delimsArray = $.views.settings.delimiters()
  *
  * @returns {string[]}
  */

  function $viewsDelimiters(openChars, closeChars, link) {
    if (!openChars) {
      return $subSettings.delimiters;
    }

    if ($isArray(openChars)) {
      return $viewsDelimiters.apply($views, openChars);
    }

    linkChar = link ? link[0] : linkChar;

    if (!/^(\W|_){5}$/.test(openChars + closeChars + linkChar)) {
      error("Invalid delimiters"); // Must be non-word characters, and openChars and closeChars must each be length 2
    }

    delimOpenChar0 = openChars[0];
    delimOpenChar1 = openChars[1];
    delimCloseChar0 = closeChars[0];
    delimCloseChar1 = closeChars[1];
    $subSettings.delimiters = [delimOpenChar0 + delimOpenChar1, delimCloseChar0 + delimCloseChar1, linkChar]; // Escape the characters - since they could be regex special characters

    openChars = "\\" + delimOpenChar0 + "(\\" + linkChar + ")?\\" + delimOpenChar1; // Default is "{^{"

    closeChars = "\\" + delimCloseChar0 + "\\" + delimCloseChar1; // Default is "}}"
    // Build regex with new delimiters
    //          [tag    (followed by / space or })  or cvtr+colon or html or code] followed by space+params then convertBack?

    rTag = "(?:(\\w+(?=[\\/\\s\\" + delimCloseChar0 + "]))|(\\w+)?(:)|(>)|(\\*))\\s*((?:[^\\" + delimCloseChar0 + "]|\\" + delimCloseChar0 + "(?!\\" + delimCloseChar1 + "))*?)"; // Make rTag available to JsViews (or other components) for parsing binding expressions

    $sub.rTag = "(?:" + rTag + ")"; //                        { ^? {   tag+params slash?  or closingTag                                                   or comment

    rTag = new RegExp("(?:" + openChars + rTag + "(\\/)?|\\" + delimOpenChar0 + "(\\" + linkChar + ")?\\" + delimOpenChar1 + "(?:(?:\\/(\\w+))\\s*|!--[\\s\\S]*?--))" + closeChars, "g"); // Default:  bind     tagName         cvt   cln html code    params            slash   bind2         closeBlk  comment
    //      /(?:{(\^)?{(?:(\w+(?=[\/\s}]))|(\w+)?(:)|(>)|(\*))\s*((?:[^}]|}(?!}))*?)(\/)?|{(\^)?{(?:(?:\/(\w+))\s*|!--[\s\S]*?--))}}

    $sub.rTmpl = new RegExp("^\\s|\\s$|<.*>|([^\\\\]|^)[{}]|" + openChars + ".*" + closeChars); // $sub.rTmpl looks for initial or final white space, html tags or { or } char not preceded by \\, or JsRender tags {{xxx}}.
    // Each of these strings are considered NOT to be jQuery selectors

    return $viewsSettings;
  } //=========
  // View.get
  //=========


  function getView(inner, type) {
    //view.get(inner, type)
    if (!type && inner !== true) {
      // view.get(type)
      type = inner;
      inner = undefined;
    }

    var views,
        i,
        l,
        found,
        view = this,
        root = type === "root"; // view.get("root") returns view.root, view.get() returns view.parent, view.get(true) returns view.views[0].

    if (inner) {
      // Go through views - this one, and all nested ones, depth-first - and return first one with given type.
      // If type is undefined, i.e. view.get(true), return first child view.
      found = type && view.type === type && view;

      if (!found) {
        views = view.views;

        if (view._.useKey) {
          for (i in views) {
            if (found = type ? views[i].get(inner, type) : views[i]) {
              break;
            }
          }
        } else {
          for (i = 0, l = views.length; !found && i < l; i++) {
            found = type ? views[i].get(inner, type) : views[i];
          }
        }
      }
    } else if (root) {
      // Find root view. (view whose parent is top view)
      found = view.root;
    } else if (type) {
      while (view && !found) {
        // Go through views - this one, and all parent ones - and return first one with given type.
        found = view.type === type ? view : undefined;
        view = view.parent;
      }
    } else {
      found = view.parent;
    }

    return found || undefined;
  }

  function getNestedIndex() {
    var view = this.get("item");
    return view ? view.index : undefined;
  }

  getNestedIndex.depends = function () {
    return [this.get("item"), "index"];
  };

  function getIndex() {
    return this.index;
  }

  getIndex.depends = "index"; //==================
  // View.ctxPrm, etc.
  //==================

  /* Internal private: view._getOb() */

  function getPathObject(ob, path, ltOb, fn) {
    // Iterate through path to late paths: @a.b.c paths
    // Return "" (or noop if leaf is a function @a.b.c(...) ) if intermediate object not yet available
    var prevOb,
        tokens,
        l,
        i = 0;

    if (ltOb === 1) {
      fn = 1;
      ltOb = undefined;
    } // Paths like ^a^b^c or ~^a^b^c will not throw if an object in path is undefined.


    if (path) {
      tokens = path.split(".");
      l = tokens.length;

      for (; ob && i < l; i++) {
        prevOb = ob;
        ob = tokens[i] ? ob[tokens[i]] : ob;
      }
    }

    if (ltOb) {
      ltOb.lt = ltOb.lt || i < l; // If i < l there was an object in the path not yet available
    }

    return ob === undefined ? fn ? noop : "" : fn ? function () {
      return ob.apply(prevOb, arguments);
    } : ob;
  }

  function contextParameter(key, value, get) {
    // Helper method called as view.ctxPrm(key) for helpers or template parameters ~foo - from compiled template or from context callback
    var wrapped,
        deps,
        res,
        obsCtxPrm,
        tagElse,
        callView,
        newRes,
        storeView = this,
        isUpdate = !isRenderCall && arguments.length > 1,
        store = storeView.ctx;

    if (key) {
      if (!storeView._) {
        // tagCtx.ctxPrm() call
        tagElse = storeView.index;
        storeView = storeView.tag;
      }

      callView = storeView;

      if (store && store.hasOwnProperty(key) || (store = $helpers).hasOwnProperty(key)) {
        res = store[key];

        if (key === "tag" || key === "tagCtx" || key === "root" || key === "parentTags") {
          return res;
        }
      } else {
        store = undefined;
      }

      if (!isRenderCall && storeView.tagCtx || storeView.linked) {
        // Data-linked view, or tag instance
        if (!res || !res._cxp) {
          // Not a contextual parameter
          // Set storeView to tag (if this is a tag.ctxPrm() call) or to root view ("data" view of linked template)
          storeView = storeView.tagCtx || $isFunction(res) ? storeView // Is a tag, not a view, or is a computed contextual parameter, so scope to the callView, no the 'scope view'
          : (storeView = storeView.scope || storeView, !storeView.isTop && storeView.ctx.tag // If this view is in a tag, set storeView to the tag
          || storeView);

          if (res !== undefined && storeView.tagCtx) {
            // If storeView is a tag, but the contextual parameter has been set at at higher level (e.g. helpers)...
            storeView = storeView.tagCtx.view.scope; //  then move storeView to the outer level (scope of tag container view)
          }

          store = storeView._ocps;
          res = store && store.hasOwnProperty(key) && store[key] || res;

          if (!(res && res._cxp) && (get || isUpdate)) {
            // Create observable contextual parameter
            (store || (storeView._ocps = storeView._ocps || {}))[key] = res = [{
              _ocp: res,
              // The observable contextual parameter value
              _vw: callView,
              _key: key
            }];
            res._cxp = {
              path: _ocp,
              ind: 0,
              updateValue: function updateValue(val, path) {
                $.observable(res[0]).setProperty(_ocp, val); // Set the value (res[0]._ocp)

                return this;
              }
            };
          }
        }

        if (obsCtxPrm = res && res._cxp) {
          // If this helper resource is an observable contextual parameter
          if (arguments.length > 2) {
            deps = res[1] ? $sub._ceo(res[1].deps) : [_ocp]; // fn deps (with any exprObs cloned using $sub._ceo)

            deps.unshift(res[0]); // view

            deps._cxp = obsCtxPrm; // In a context callback for a contextual param, we set get = true, to get ctxPrm  [view, dependencies...] array - needed for observe call

            return deps;
          }

          tagElse = obsCtxPrm.tagElse;
          newRes = res[1] // linkFn for compiled expression
          ? obsCtxPrm.tag && obsCtxPrm.tag.cvtArgs ? obsCtxPrm.tag.cvtArgs(tagElse, 1)[obsCtxPrm.ind] // = tag.bndArgs() - for tag contextual parameter
          : res[1](res[0].data, res[0], $sub) // = fn(data, view, $sub) for compiled binding expression
          : res[0]._ocp; // Observable contextual parameter (uninitialized, or initialized as static expression, so no path dependencies)

          if (isUpdate) {
            $sub._ucp(key, value, storeView, obsCtxPrm); // Update observable contextual parameter


            return storeView;
          }

          res = newRes;
        }
      }

      if (res && $isFunction(res)) {
        // If a helper is of type function we will wrap it, so if called with no this pointer it will be called with the
        // view as 'this' context. If the helper ~foo() was in a data-link expression, the view will have a 'temporary' linkCtx property too.
        // Note that helper functions on deeper paths will have specific this pointers, from the preceding path.
        // For example, ~util.foo() will have the ~util object as 'this' pointer
        wrapped = function wrapped() {
          return res.apply(!this || this === global ? callView : this, arguments);
        };

        $extend(wrapped, res); // Attach same expandos (if any) to the wrapped function
      }

      return wrapped || res;
    }
  }
  /* Internal private: view._getTmpl() */


  function getTemplate(tmpl) {
    return tmpl && (tmpl.fn ? tmpl : this.getRsc("templates", tmpl) || $templates(tmpl)); // not yet compiled
  } //==============
  // views._cnvt
  //==============


  function convertVal(converter, view, tagCtx, onError) {
    // Called from compiled template code for {{:}}
    // self is template object or linkCtx object
    var tag,
        linkCtx,
        value,
        argsLen,
        bindTo,
        // If tagCtx is an integer, then it is the key for the compiled function to return the boundTag tagCtx
    boundTag = typeof tagCtx === "number" && view.tmpl.bnds[tagCtx - 1];

    if (onError === undefined && boundTag && boundTag._lr) {
      // lateRender
      onError = "";
    }

    if (onError !== undefined) {
      tagCtx = onError = {
        props: {},
        args: [onError]
      };
    } else if (boundTag) {
      tagCtx = boundTag(view.data, view, $sub);
    }

    boundTag = boundTag._bd && boundTag;

    if (converter || boundTag) {
      linkCtx = view._lc; // For data-link="{cvt:...}"... See onDataLinkedTagChange

      tag = linkCtx && linkCtx.tag;
      tagCtx.view = view;

      if (!tag) {
        tag = $extend(new $sub._tg(), {
          _: {
            bnd: boundTag,
            unlinked: true,
            lt: tagCtx.lt // If a late path @some.path has not returned @some object, mark tag as late

          },
          inline: !linkCtx,
          tagName: ":",
          convert: converter,
          onArrayChange: true,
          flow: true,
          tagCtx: tagCtx,
          tagCtxs: [tagCtx],
          _is: "tag"
        });
        argsLen = tagCtx.args.length;

        if (argsLen > 1) {
          bindTo = tag.bindTo = [];

          while (argsLen--) {
            bindTo.unshift(argsLen); // Bind to all the arguments - generate bindTo array: [0,1,2...]
          }
        }

        if (linkCtx) {
          linkCtx.tag = tag;
          tag.linkCtx = linkCtx;
        }

        tagCtx.ctx = extendCtx(tagCtx.ctx, (linkCtx ? linkCtx.view : view).ctx);
        tagHandlersFromProps(tag, tagCtx);
      }

      tag._er = onError && value;
      tag.ctx = tagCtx.ctx || tag.ctx || {};
      tagCtx.ctx = undefined;
      value = tag.cvtArgs()[0]; // If there is a convertBack but no convert, converter will be "true"

      tag._er = onError && value;
    } else {
      value = tagCtx.args[0];
    } // Call onRender (used by JsViews if present, to add binding annotations around rendered content)


    value = boundTag && view._.onRender ? view._.onRender(value, view, tag) : value;
    return value != undefined ? value : "";
  }

  function convertArgs(tagElse, bound) {
    // tag.cvtArgs() or tag.cvtArgs(tagElse?, true?)
    var l,
        key,
        boundArgs,
        args,
        bindFrom,
        tag,
        converter,
        tagCtx = this;

    if (tagCtx.tagName) {
      tag = tagCtx;
      tagCtx = (tag.tagCtxs || [tagCtx])[tagElse || 0];

      if (!tagCtx) {
        return;
      }
    } else {
      tag = tagCtx.tag;
    }

    bindFrom = tag.bindFrom;
    args = tagCtx.args;

    if ((converter = tag.convert) && "" + converter === converter) {
      converter = converter === "true" ? undefined : tagCtx.view.getRsc("converters", converter) || error("Unknown converter: '" + converter + "'");
    }

    if (converter && !bound) {
      // If there is a converter, use a copy of the tagCtx.args array for rendering, and replace the args[0] in
      args = args.slice(); // the copied array with the converted value. But we do not modify the value of tag.tagCtx.args[0] (the original args array)
    }

    if (bindFrom) {
      // Get the values of the boundArgs
      boundArgs = [];
      l = bindFrom.length;

      while (l--) {
        key = bindFrom[l];
        boundArgs.unshift(argOrProp(tagCtx, key));
      }

      if (bound) {
        args = boundArgs; // Call to bndArgs() - returns the boundArgs
      }
    }

    if (converter) {
      converter = converter.apply(tag, boundArgs || args);

      if (converter === undefined) {
        return args; // Returning undefined from a converter is equivalent to not having a converter.
      }

      bindFrom = bindFrom || [0];
      l = bindFrom.length;

      if (!$isArray(converter) || converter.length !== l) {
        converter = [converter];
        bindFrom = [0];
        l = 1;
      }

      if (bound) {
        // Call to bndArgs() - so apply converter to all boundArgs
        args = converter; // The array of values returned from the converter
      } else {
        // Call to cvtArgs()
        while (l--) {
          key = bindFrom[l];

          if (+key === key) {
            args[key] = converter[l];
          }
        }
      }
    }

    return args;
  }

  function argOrProp(context, key) {
    context = context[+key === key ? "args" : "props"];
    return context && context[key];
  }

  function convertBoundArgs(tagElse) {
    // tag.bndArgs()
    return this.cvtArgs(tagElse, 1);
  } //=============
  // views.tag
  //=============

  /* view.getRsc() */


  function getResource(resourceType, itemName) {
    var res,
        store,
        view = this;

    if ("" + itemName === itemName) {
      while (res === undefined && view) {
        store = view.tmpl && view.tmpl[resourceType];
        res = store && store[itemName];
        view = view.parent;
      }

      return res || $views[resourceType][itemName];
    }
  }

  function renderTag(tagName, parentView, tmpl, tagCtxs, isUpdate, onError) {
    function bindToOrBindFrom(type) {
      var bindArray = tag[type];

      if (bindArray !== undefined) {
        bindArray = $isArray(bindArray) ? bindArray : [bindArray];
        m = bindArray.length;

        while (m--) {
          key = bindArray[m];

          if (!isNaN(parseInt(key))) {
            bindArray[m] = parseInt(key); // Convert "0" to 0,  etc.
          }
        }
      }

      return bindArray || [0];
    }

    parentView = parentView || topView;
    var tag,
        tagDef,
        template,
        tags,
        attr,
        parentTag,
        l,
        m,
        n,
        itemRet,
        tagCtx,
        tagCtxCtx,
        ctxPrm,
        bindTo,
        bindFrom,
        initVal,
        content,
        callInit,
        mapDef,
        thisMap,
        args,
        bdArgs,
        props,
        tagDataMap,
        contentCtx,
        key,
        bindFromLength,
        bindToLength,
        linkedElement,
        defaultCtx,
        i = 0,
        ret = "",
        linkCtx = parentView._lc || false,
        // For data-link="{myTag...}"... See onDataLinkedTagChange
    ctx = parentView.ctx,
        parentTmpl = tmpl || parentView.tmpl,
        // If tagCtxs is an integer, then it is the key for the compiled function to return the boundTag tagCtxs
    boundTag = typeof tagCtxs === "number" && parentView.tmpl.bnds[tagCtxs - 1];

    if (tagName._is === "tag") {
      tag = tagName;
      tagName = tag.tagName;
      tagCtxs = tag.tagCtxs;
      template = tag.template;
    } else {
      tagDef = parentView.getRsc("tags", tagName) || error("Unknown tag: {{" + tagName + "}} ");
      template = tagDef.template;
    }

    if (onError === undefined && boundTag && (boundTag._lr = tagDef.lateRender && boundTag._lr !== false || boundTag._lr)) {
      onError = ""; // If lateRender, set temporary onError, to skip initial rendering (and render just "")
    }

    if (onError !== undefined) {
      ret += onError;
      tagCtxs = onError = [{
        props: {},
        args: [],
        params: {
          props: {}
        }
      }];
    } else if (boundTag) {
      tagCtxs = boundTag(parentView.data, parentView, $sub);
    }

    l = tagCtxs.length;

    for (; i < l; i++) {
      tagCtx = tagCtxs[i];
      content = tagCtx.tmpl;

      if (!linkCtx || !linkCtx.tag || i && !linkCtx.tag.inline || tag._er || content && +content === content) {
        // Initialize tagCtx
        // For block tags, tagCtx.tmpl is an integer > 0
        if (content && parentTmpl.tmpls) {
          tagCtx.tmpl = tagCtx.content = parentTmpl.tmpls[content - 1]; // Set the tmpl property to the content of the block tag
        }

        tagCtx.index = i;
        tagCtx.ctxPrm = contextParameter;
        tagCtx.render = renderContent;
        tagCtx.cvtArgs = convertArgs;
        tagCtx.bndArgs = convertBoundArgs;
        tagCtx.view = parentView;
        tagCtx.ctx = extendCtx(extendCtx(tagCtx.ctx, tagDef && tagDef.ctx), ctx); // Clone and extend parentView.ctx
      }

      if (tmpl = tagCtx.props.tmpl) {
        // If the tmpl property is overridden, set the value (when initializing, or, in case of binding: ^tmpl=..., when updating)
        tagCtx.tmpl = parentView._getTmpl(tmpl);
        tagCtx.content = tagCtx.content || tagCtx.tmpl;
      }

      if (!tag) {
        // This will only be hit for initial tagCtx (not for {{else}}) - if the tag instance does not exist yet
        // If the tag has not already been instantiated, we will create a new instance.
        // ~tag will access the tag, even within the rendering of the template content of this tag.
        // From child/descendant tags, can access using ~tag.parent, or ~parentTags.tagName
        tag = new tagDef._ctr();
        callInit = !!tag.init;
        tag.parent = parentTag = ctx && ctx.tag;
        tag.tagCtxs = tagCtxs;

        if (linkCtx) {
          tag.inline = false;
          linkCtx.tag = tag;
        }

        tag.linkCtx = linkCtx;

        if (tag._.bnd = boundTag || linkCtx.fn) {
          // Bound if {^{tag...}} or data-link="{tag...}"
          tag._.ths = tagCtx.params.props.this; // Tag has a this=expr binding, to get javascript reference to tag instance

          tag._.lt = tagCtxs.lt; // If a late path @some.path has not returned @some object, mark tag as late

          tag._.arrVws = {};
        } else if (tag.dataBoundOnly) {
          error(tagName + " must be data-bound:\n{^{" + tagName + "}}");
        } //TODO better perf for childTags() - keep child tag.tags array, (and remove child, when disposed)
        // tag.tags = [];

      } else if (linkCtx && linkCtx.fn._lr) {
        callInit = !!tag.init;
      }

      tagDataMap = tag.dataMap;
      tagCtx.tag = tag;

      if (tagDataMap && tagCtxs) {
        tagCtx.map = tagCtxs[i].map; // Copy over the compiled map instance from the previous tagCtxs to the refreshed ones
      }

      if (!tag.flow) {
        tagCtxCtx = tagCtx.ctx = tagCtx.ctx || {}; // tags hash: tag.ctx.tags, merged with parentView.ctx.tags,

        tags = tag.parents = tagCtxCtx.parentTags = ctx && extendCtx(tagCtxCtx.parentTags, ctx.parentTags) || {};

        if (parentTag) {
          tags[parentTag.tagName] = parentTag; //TODO better perf for childTags: parentTag.tags.push(tag);
        }

        tags[tag.tagName] = tagCtxCtx.tag = tag;
        tagCtxCtx.tagCtx = tagCtx;
      }
    }

    if (!(tag._er = onError)) {
      tagHandlersFromProps(tag, tagCtxs[0]);
      tag.rendering = {
        rndr: tag.rendering
      }; // Provide object for state during render calls to tag and elses. (Used by {{if}} and {{for}}...)

      for (i = 0; i < l; i++) {
        // Iterate tagCtx for each {{else}} block
        tagCtx = tag.tagCtx = tagCtxs[i];
        props = tagCtx.props;
        tag.ctx = tagCtx.ctx;

        if (!i) {
          if (callInit) {
            tag.init(tagCtx, linkCtx, tag.ctx);
            callInit = undefined;
          }

          if (!tagCtx.args.length && tagCtx.argDefault !== false && tag.argDefault !== false) {
            tagCtx.args = args = [tagCtx.view.data]; // Missing first arg defaults to the current data context

            tagCtx.params.args = ["#data"];
          }

          bindTo = bindToOrBindFrom("bindTo");

          if (tag.bindTo !== undefined) {
            tag.bindTo = bindTo;
          }

          if (tag.bindFrom !== undefined) {
            tag.bindFrom = bindToOrBindFrom("bindFrom");
          } else if (tag.bindTo) {
            tag.bindFrom = tag.bindTo = bindTo;
          }

          bindFrom = tag.bindFrom || bindTo;
          bindToLength = bindTo.length;
          bindFromLength = bindFrom.length;

          if (tag._.bnd && (linkedElement = tag.linkedElement)) {
            tag.linkedElement = linkedElement = $isArray(linkedElement) ? linkedElement : [linkedElement];

            if (bindToLength !== linkedElement.length) {
              error("linkedElement not same length as bindTo");
            }
          }

          if (linkedElement = tag.linkedCtxParam) {
            tag.linkedCtxParam = linkedElement = $isArray(linkedElement) ? linkedElement : [linkedElement];

            if (bindFromLength !== linkedElement.length) {
              error("linkedCtxParam not same length as bindFrom/bindTo");
            }
          }

          if (bindFrom) {
            tag._.fromIndex = {}; // Hash of bindFrom index which has same path value as bindTo index. fromIndex = tag._.fromIndex[toIndex]

            tag._.toIndex = {}; // Hash of bindFrom index which has same path value as bindTo index. fromIndex = tag._.fromIndex[toIndex]

            n = bindFromLength;

            while (n--) {
              key = bindFrom[n];
              m = bindToLength;

              while (m--) {
                if (key === bindTo[m]) {
                  tag._.fromIndex[m] = n;
                  tag._.toIndex[n] = m;
                }
              }
            }
          }

          if (linkCtx) {
            // Set attr on linkCtx to ensure outputting to the correct target attribute.
            // Setting either linkCtx.attr or this.attr in the init() allows per-instance choice of target attrib.
            linkCtx.attr = tag.attr = linkCtx.attr || tag.attr || linkCtx._dfAt;
          }

          attr = tag.attr;
          tag._.noVws = attr && attr !== HTML;
        }

        args = tag.cvtArgs(i);

        if (tag.linkedCtxParam) {
          bdArgs = tag.cvtArgs(i, 1);
          m = bindFromLength;
          defaultCtx = tag.constructor.prototype.ctx;

          while (m--) {
            if (ctxPrm = tag.linkedCtxParam[m]) {
              key = bindFrom[m];
              initVal = bdArgs[m]; // Create tag contextual parameter

              tagCtx.ctx[ctxPrm] = $sub._cp(defaultCtx && initVal === undefined ? defaultCtx[ctxPrm] : initVal, initVal !== undefined && argOrProp(tagCtx.params, key), tagCtx.view, tag._.bnd && {
                tag: tag,
                cvt: tag.convert,
                ind: m,
                tagElse: i
              });
            }
          }
        }

        if ((mapDef = props.dataMap || tagDataMap) && (args.length || props.dataMap)) {
          thisMap = tagCtx.map;

          if (!thisMap || thisMap.src !== args[0] || isUpdate) {
            if (thisMap && thisMap.src) {
              thisMap.unmap(); // only called if observable map - not when only used in JsRender, e.g. by {{props}}
            }

            mapDef.map(args[0], tagCtx, thisMap, !tag._.bnd);
            thisMap = tagCtx.map;
          }

          args = [thisMap.tgt];
        }

        itemRet = undefined;

        if (tag.render) {
          itemRet = tag.render.apply(tag, args);

          if (parentView.linked && itemRet && !rWrappedInViewMarker.test(itemRet)) {
            // When a tag renders content from the render method, with data linking then we need to wrap with view markers, if absent,
            // to provide a contentView for the tag, which will correctly dispose bindings if deleted. The 'tmpl' for this view will
            // be a dumbed-down template which will always return the  itemRet string (no matter what the data is). The itemRet string
            // is not compiled as template markup, so can include "{{" or "}}" without triggering syntax errors
            tmpl = {
              // 'Dumbed-down' template which always renders 'static' itemRet string
              links: []
            };

            tmpl.render = tmpl.fn = function () {
              return itemRet;
            };

            itemRet = renderWithViews(tmpl, parentView.data, undefined, true, parentView, undefined, undefined, tag);
          }
        }

        if (!args.length) {
          args = [parentView]; // no arguments - (e.g. {{else}}) get data context from view.
        }

        if (itemRet === undefined) {
          contentCtx = args[0]; // Default data context for wrapped block content is the first argument

          if (tag.contentCtx) {
            // Set tag.contentCtx to true, to inherit parent context, or to a function to provide alternate context.
            contentCtx = tag.contentCtx === true ? parentView : tag.contentCtx(contentCtx);
          }

          itemRet = tagCtx.render(contentCtx, true) || (isUpdate ? undefined : "");
        }

        ret = ret ? ret + (itemRet || "") : itemRet !== undefined ? "" + itemRet : undefined; // If no return value from render, and no template/content tagCtx.render(...), return undefined
      }

      tag.rendering = tag.rendering.rndr; // Remove tag.rendering object (if this is outermost render call. (In case of nested calls)
    }

    tag.tagCtx = tagCtxs[0];
    tag.ctx = tag.tagCtx.ctx;

    if (tag._.noVws && tag.inline) {
      // inline tag with attr set to "text" will insert HTML-encoded content - as if it was element-based innerText
      ret = attr === "text" ? $converters.html(ret) : "";
    }

    return boundTag && parentView._.onRender // Call onRender (used by JsViews if present, to add binding annotations around rendered content)
    ? parentView._.onRender(ret, parentView, tag) : ret;
  } //=================
  // View constructor
  //=================


  function View(context, type, parentView, data, template, key, onRender, contentTmpl) {
    // Constructor for view object in view hierarchy. (Augmented by JsViews if JsViews is loaded)
    var views,
        parentView_,
        tag,
        self_,
        self = this,
        isArray = type === "array"; // If the data is an array, this is an 'array view' with a views array for each child 'item view'
    // If the data is not an array, this is an 'item view' with a views 'hash' object for any child nested views

    self.content = contentTmpl;
    self.views = isArray ? [] : {};
    self.data = data;
    self.tmpl = template;
    self_ = self._ = {
      key: 0,
      // ._.useKey is non zero if is not an 'array view' (owning a data array). Use this as next key for adding to child views hash
      useKey: isArray ? 0 : 1,
      id: "" + viewId++,
      onRender: onRender,
      bnds: {}
    };
    self.linked = !!onRender;
    self.type = type || "top";

    if (!parentView || parentView.type === "top") {
      (self.ctx = context || {}).root = self.data;
    }

    if (self.parent = parentView) {
      self.root = parentView.root || self; // view whose parent is top view

      views = parentView.views;
      parentView_ = parentView._;
      self.isTop = parentView_.scp; // Is top content view of a link("#container", ...) call

      self.scope = (!context.tag || context.tag === parentView.ctx.tag) && !self.isTop && parentView.scope || self; // Scope for contextParams - closest non flow tag ancestor or root view

      if (parentView_.useKey) {
        // Parent is not an 'array view'. Add this view to its views object
        // self._key = is the key in the parent view hash
        views[self_.key = "_" + parentView_.useKey++] = self;
        self.index = indexStr;
        self.getIndex = getNestedIndex;
      } else if (views.length === (self_.key = self.index = key)) {
        // Parent is an 'array view'. Add this view to its views array
        views.push(self); // Adding to end of views array. (Using push when possible - better perf than splice)
      } else {
        views.splice(key, 0, self); // Inserting in views array
      } // If no context was passed in, use parent context
      // If context was passed in, it should have been merged already with parent context


      self.ctx = context || parentView.ctx;
    } else if (type) {
      self.root = self; // view whose parent is top view
    }
  }

  View.prototype = {
    get: getView,
    getIndex: getIndex,
    ctxPrm: contextParameter,
    getRsc: getResource,
    _getTmpl: getTemplate,
    _getOb: getPathObject,
    _is: "view"
  }; //====================================================
  // Registration
  //====================================================

  function compileChildResources(parentTmpl) {
    var storeName, storeNames, resources;

    for (storeName in jsvStores) {
      storeNames = storeName + "s";

      if (parentTmpl[storeNames]) {
        resources = parentTmpl[storeNames]; // Resources not yet compiled

        parentTmpl[storeNames] = {}; // Remove uncompiled resources

        $views[storeNames](resources, parentTmpl); // Add back in the compiled resources
      }
    }
  } //===============
  // compileTag
  //===============


  function compileTag(name, tagDef, parentTmpl) {
    var tmpl,
        baseTag,
        prop,
        compiledDef = new $sub._tg();

    function Tag() {
      var tag = this;
      tag._ = {
        unlinked: true
      };
      tag.inline = true;
      tag.tagName = name;
    }

    if ($isFunction(tagDef)) {
      // Simple tag declared as function. No presenter instantation.
      tagDef = {
        depends: tagDef.depends,
        render: tagDef
      };
    } else if ("" + tagDef === tagDef) {
      tagDef = {
        template: tagDef
      };
    }

    if (baseTag = tagDef.baseTag) {
      tagDef.flow = !!tagDef.flow; // Set flow property, so defaults to false even if baseTag has flow=true

      baseTag = "" + baseTag === baseTag ? parentTmpl && parentTmpl.tags[baseTag] || $tags[baseTag] : baseTag;

      if (!baseTag) {
        error('baseTag: "' + tagDef.baseTag + '" not found');
      }

      compiledDef = $extend(compiledDef, baseTag);

      for (prop in tagDef) {
        compiledDef[prop] = getMethod(baseTag[prop], tagDef[prop]);
      }
    } else {
      compiledDef = $extend(compiledDef, tagDef);
    } // Tag declared as object, used as the prototype for tag instantiation (control/presenter)


    if ((tmpl = compiledDef.template) !== undefined) {
      compiledDef.template = "" + tmpl === tmpl ? $templates[tmpl] || $templates(tmpl) : tmpl;
    }

    (Tag.prototype = compiledDef).constructor = compiledDef._ctr = Tag;

    if (parentTmpl) {
      compiledDef._parentTmpl = parentTmpl;
    }

    return compiledDef;
  }

  function baseApply(args) {
    // In derived method (or handler declared declaratively as in {{:foo onChange=~fooChanged}} can call base method,
    // using this.baseApply(arguments) (Equivalent to this._superApply(arguments) in jQuery UI)
    return this.base.apply(this, args);
  } //===============
  // compileTmpl
  //===============


  function compileTmpl(name, tmpl, parentTmpl, options) {
    // tmpl is either a template object, a selector for a template script block, the name of a compiled template, or a template object
    //==== nested functions ====
    function lookupTemplate(value) {
      // If value is of type string - treat as selector, or name of compiled template
      // Return the template object, if already compiled, or the markup string
      var currentName, tmpl;

      if ("" + value === value || value.nodeType > 0 && (elem = value)) {
        if (!elem) {
          if (/^\.\/[^\\:*?"<>]*$/.test(value)) {
            // tmpl="./some/file.html"
            // If the template is not named, use "./some/file.html" as name.
            if (tmpl = $templates[name = name || value]) {
              value = tmpl;
            } else {
              // BROWSER-SPECIFIC CODE (not on Node.js):
              // Look for server-generated script block with id "./some/file.html"
              elem = document.getElementById(value);
            }
          } else if ($.fn && !$sub.rTmpl.test(value)) {
            try {
              elem = $(value, document)[0]; // if jQuery is loaded, test for selector returning elements, and get first element
            } catch (e) {}
          } // END BROWSER-SPECIFIC CODE

        } //BROWSER-SPECIFIC CODE


        if (elem) {
          if (elem.tagName !== "SCRIPT") {
            error(value + ": Use script block, not " + elem.tagName);
          }

          if (options) {
            // We will compile a new template using the markup in the script element
            value = elem.innerHTML;
          } else {
            // We will cache a single copy of the compiled template, and associate it with the name
            // (renaming from a previous name if there was one).
            currentName = elem.getAttribute(tmplAttr);

            if (currentName) {
              if (currentName !== jsvTmpl) {
                value = $templates[currentName];
                delete $templates[currentName];
              } else if ($.fn) {
                value = $.data(elem)[jsvTmpl]; // Get cached compiled template
              }
            }

            if (!currentName || !value) {
              // Not yet compiled, or cached version lost
              name = name || ($.fn ? jsvTmpl : value);
              value = compileTmpl(name, elem.innerHTML, parentTmpl, options);
            }

            value.tmplName = name = name || currentName;

            if (name !== jsvTmpl) {
              $templates[name] = value;
            }

            elem.setAttribute(tmplAttr, name);

            if ($.fn) {
              $.data(elem, jsvTmpl, value);
            }
          }
        } // END BROWSER-SPECIFIC CODE


        elem = undefined;
      } else if (!value.fn) {
        value = undefined; // If value is not a string. HTML element, or compiled template, return undefined
      }

      return value;
    }

    var elem,
        compiledTmpl,
        tmplOrMarkup = tmpl = tmpl || "";
    $sub._html = $converters.html; //==== Compile the template ====

    if (options === 0) {
      options = undefined;
      tmplOrMarkup = lookupTemplate(tmplOrMarkup); // Top-level compile so do a template lookup
    } // If options, then this was already compiled from a (script) element template declaration.
    // If not, then if tmpl is a template object, use it for options


    options = options || (tmpl.markup ? tmpl.bnds ? $extend({}, tmpl) : tmpl : {});
    options.tmplName = options.tmplName || name || "unnamed";

    if (parentTmpl) {
      options._parentTmpl = parentTmpl;
    } // If tmpl is not a markup string or a selector string, then it must be a template object
    // In that case, get it from the markup property of the object


    if (!tmplOrMarkup && tmpl.markup && (tmplOrMarkup = lookupTemplate(tmpl.markup)) && tmplOrMarkup.fn) {
      // If the string references a compiled template object, need to recompile to merge any modified options
      tmplOrMarkup = tmplOrMarkup.markup;
    }

    if (tmplOrMarkup !== undefined) {
      if (tmplOrMarkup.render || tmpl.render) {
        // tmpl is already compiled, so use it
        if (tmplOrMarkup.tmpls) {
          compiledTmpl = tmplOrMarkup;
        }
      } else {
        // tmplOrMarkup is a markup string, not a compiled template
        // Create template object
        tmpl = tmplObject(tmplOrMarkup, options); // Compile to AST and then to compiled function

        tmplFn(tmplOrMarkup.replace(rEscapeQuotes, "\\$&"), tmpl);
      }

      if (!compiledTmpl) {
        compiledTmpl = $extend(function () {
          return compiledTmpl.render.apply(compiledTmpl, arguments);
        }, tmpl);
        compileChildResources(compiledTmpl);
      }

      return compiledTmpl;
    }
  } //==== /end of function compileTmpl ====
  //=================
  // compileViewModel
  //=================


  function getDefaultVal(defaultVal, data) {
    return $isFunction(defaultVal) ? defaultVal.call(data) : defaultVal;
  }

  function addParentRef(ob, ref, parent) {
    Object.defineProperty(ob, ref, {
      value: parent,
      configurable: true
    });
  }

  function compileViewModel(name, type) {
    var i,
        constructor,
        parent,
        viewModels = this,
        getters = type.getters,
        extend = type.extend,
        id = type.id,
        proto = $.extend({
      _is: name || "unnamed",
      unmap: unmap,
      merge: merge
    }, extend),
        args = "",
        cnstr = "",
        getterCount = getters ? getters.length : 0,
        $observable = $.observable,
        getterNames = {};

    function JsvVm(args) {
      constructor.apply(this, args);
    }

    function vm() {
      return new JsvVm(arguments);
    }

    function iterate(data, action) {
      var getterType,
          defaultVal,
          prop,
          ob,
          parentRef,
          j = 0;

      for (; j < getterCount; j++) {
        prop = getters[j];
        getterType = undefined;

        if (prop + "" !== prop) {
          getterType = prop;
          prop = getterType.getter;
          parentRef = getterType.parentRef;
        }

        if ((ob = data[prop]) === undefined && getterType && (defaultVal = getterType.defaultVal) !== undefined) {
          ob = getDefaultVal(defaultVal, data);
        }

        action(ob, getterType && viewModels[getterType.type], prop, parentRef);
      }
    }

    function map(data) {
      data = data + "" === data ? JSON.parse(data) // Accept JSON string
      : data; // or object/array

      var l,
          prop,
          childOb,
          parentRef,
          j = 0,
          ob = data,
          arr = [];

      if ($isArray(data)) {
        data = data || [];
        l = data.length;

        for (; j < l; j++) {
          arr.push(this.map(data[j]));
        }

        arr._is = name;
        arr.unmap = unmap;
        arr.merge = merge;
        return arr;
      }

      if (data) {
        iterate(data, function (ob, viewModel) {
          if (viewModel) {
            // Iterate to build getters arg array (value, or mapped value)
            ob = viewModel.map(ob);
          }

          arr.push(ob);
        });
        ob = this.apply(this, arr); // Instantiate this View Model, passing getters args array to constructor

        j = getterCount;

        while (j--) {
          childOb = arr[j];
          parentRef = getters[j].parentRef;

          if (parentRef && childOb && childOb.unmap) {
            if ($isArray(childOb)) {
              l = childOb.length;

              while (l--) {
                addParentRef(childOb[l], parentRef, ob);
              }
            } else {
              addParentRef(childOb, parentRef, ob);
            }
          }
        }

        for (prop in data) {
          // Copy over any other properties. that are not get/set properties
          if (prop !== $expando && !getterNames[prop]) {
            ob[prop] = data[prop];
          }
        }
      }

      return ob;
    }

    function merge(data, parent, parentRef) {
      data = data + "" === data ? JSON.parse(data) // Accept JSON string
      : data; // or object/array

      var j,
          l,
          m,
          prop,
          mod,
          found,
          assigned,
          ob,
          newModArr,
          childOb,
          k = 0,
          model = this;

      if ($isArray(model)) {
        assigned = {};
        newModArr = [];
        l = data.length;
        m = model.length;

        for (; k < l; k++) {
          ob = data[k];
          found = false;

          for (j = 0; j < m && !found; j++) {
            if (assigned[j]) {
              continue;
            }

            mod = model[j];

            if (id) {
              assigned[j] = found = id + "" === id ? ob[id] && (getterNames[id] ? mod[id]() : mod[id]) === ob[id] : id(mod, ob);
            }
          }

          if (found) {
            mod.merge(ob);
            newModArr.push(mod);
          } else {
            newModArr.push(childOb = vm.map(ob));

            if (parentRef) {
              addParentRef(childOb, parentRef, parent);
            }
          }
        }

        if ($observable) {
          $observable(model).refresh(newModArr, true);
        } else {
          model.splice.apply(model, [0, model.length].concat(newModArr));
        }

        return;
      }

      iterate(data, function (ob, viewModel, getter, parentRef) {
        if (viewModel) {
          model[getter]().merge(ob, model, parentRef); // Update typed property
        } else if (model[getter]() !== ob) {
          model[getter](ob); // Update non-typed property
        }
      });

      for (prop in data) {
        if (prop !== $expando && !getterNames[prop]) {
          model[prop] = data[prop];
        }
      }
    }

    function unmap() {
      var ob,
          prop,
          getterType,
          arr,
          value,
          k = 0,
          model = this;

      function unmapArray(modelArr) {
        var arr = [],
            i = 0,
            l = modelArr.length;

        for (; i < l; i++) {
          arr.push(modelArr[i].unmap());
        }

        return arr;
      }

      if ($isArray(model)) {
        return unmapArray(model);
      }

      ob = {};

      for (; k < getterCount; k++) {
        prop = getters[k];
        getterType = undefined;

        if (prop + "" !== prop) {
          getterType = prop;
          prop = getterType.getter;
        }

        value = model[prop]();
        ob[prop] = getterType && value && viewModels[getterType.type] ? $isArray(value) ? unmapArray(value) : value.unmap() : value;
      }

      for (prop in model) {
        if (model.hasOwnProperty(prop) && (prop.charAt(0) !== "_" || !getterNames[prop.slice(1)]) && prop !== $expando && !$isFunction(model[prop])) {
          ob[prop] = model[prop];
        }
      }

      return ob;
    }

    JsvVm.prototype = proto;

    for (i = 0; i < getterCount; i++) {
      (function (getter) {
        getter = getter.getter || getter;
        getterNames[getter] = i + 1;
        var privField = "_" + getter;
        args += (args ? "," : "") + getter;
        cnstr += "this." + privField + " = " + getter + ";\n";

        proto[getter] = proto[getter] || function (val) {
          if (!arguments.length) {
            return this[privField]; // If there is no argument, use as a getter
          }

          if ($observable) {
            $observable(this).setProperty(getter, val);
          } else {
            this[privField] = val;
          }
        };

        if ($observable) {
          proto[getter].set = proto[getter].set || function (val) {
            this[privField] = val; // Setter called by observable property change
          };
        }
      })(getters[i]);
    } // Constructor for new viewModel instance.


    cnstr = new Function(args, cnstr);

    constructor = function constructor() {
      cnstr.apply(this, arguments); // Pass additional parentRef str and parent obj to have a parentRef pointer on instance

      if (parent = arguments[getterCount + 1]) {
        addParentRef(this, arguments[getterCount], parent);
      }
    };

    constructor.prototype = proto;
    proto.constructor = constructor;
    vm.map = map;
    vm.getters = getters;
    vm.extend = extend;
    vm.id = id;
    return vm;
  }

  function tmplObject(markup, options) {
    // Template object constructor
    var htmlTag,
        wrapMap = $subSettingsAdvanced._wm || {},
        // Only used in JsViews. Otherwise empty: {}
    tmpl = {
      tmpls: [],
      links: {},
      // Compiled functions for link expressions
      bnds: [],
      _is: "template",
      render: renderContent
    };

    if (options) {
      tmpl = $extend(tmpl, options);
    }

    tmpl.markup = markup;

    if (!tmpl.htmlTag) {
      // Set tmpl.tag to the top-level HTML tag used in the template, if any...
      htmlTag = rFirstElem.exec(markup);
      tmpl.htmlTag = htmlTag ? htmlTag[1].toLowerCase() : "";
    }

    htmlTag = wrapMap[tmpl.htmlTag];

    if (htmlTag && htmlTag !== wrapMap.div) {
      // When using JsViews, we trim templates which are inserted into HTML contexts where text nodes are not rendered (i.e. not 'Phrasing Content').
      // Currently not trimmed for <li> tag. (Not worth adding perf cost)
      tmpl.markup = $.trim(tmpl.markup);
    }

    return tmpl;
  } //==============
  // registerStore
  //==============

  /**
  * Internal. Register a store type (used for template, tags, helpers, converters)
  */


  function registerStore(storeName, storeSettings) {
    /**
    * Generic store() function to register item, named item, or hash of items
    * Also used as hash to store the registered items
    * Used as implementation of $.templates(), $.views.templates(), $.views.tags(), $.views.helpers() and $.views.converters()
    *
    * @param {string|hash} name         name - or selector, in case of $.templates(). Or hash of items
    * @param {any}         [item]       (e.g. markup for named template)
    * @param {template}    [parentTmpl] For item being registered as private resource of template
    * @returns {any|$.views} item, e.g. compiled template - or $.views in case of registering hash of items
    */
    function theStore(name, item, parentTmpl) {
      // The store is also the function used to add items to the store. e.g. $.templates, or $.views.tags
      // For store of name 'thing', Call as:
      //    $.views.things(items[, parentTmpl]),
      // or $.views.things(name[, item, parentTmpl])
      var compile,
          itemName,
          thisStore,
          cnt,
          onStore = $sub.onStore[storeName];

      if (name && _typeof(name) === OBJECT && !name.nodeType && !name.markup && !name.getTgt && !(storeName === "viewModel" && name.getters || name.extend)) {
        // Call to $.views.things(items[, parentTmpl]),
        // Adding items to the store
        // If name is a hash, then item is parentTmpl. Iterate over hash and call store for key.
        for (itemName in name) {
          theStore(itemName, name[itemName], item);
        }

        return item || $views;
      } // Adding a single unnamed item to the store


      if (name && "" + name !== name) {
        // name must be a string
        parentTmpl = item;
        item = name;
        name = undefined;
      }

      thisStore = parentTmpl ? storeName === "viewModel" ? parentTmpl : parentTmpl[storeNames] = parentTmpl[storeNames] || {} : theStore;
      compile = storeSettings.compile;

      if (item === undefined) {
        item = compile ? name : thisStore[name];
        name = undefined;
      }

      if (item === null) {
        // If item is null, delete this entry
        if (name) {
          delete thisStore[name];
        }
      } else {
        if (compile) {
          item = compile.call(thisStore, name, item, parentTmpl, 0) || {};
          item._is = storeName; // Only do this for compiled objects (tags, templates...)
        }

        if (name) {
          thisStore[name] = item;
        }
      }

      if (onStore) {
        // e.g. JsViews integration
        onStore(name, item, parentTmpl, compile);
      }

      return item;
    }

    var storeNames = storeName + "s";
    $views[storeNames] = theStore;
  }
  /**
  * Add settings such as:
  * $.views.settings.allowCode(true)
  * @param {boolean}  value
  * @returns {Settings}
  *
  * allowCode = $.views.settings.allowCode()
  * @returns {boolean}
  */


  function addSetting(st) {
    $viewsSettings[st] = $viewsSettings[st] || function (value) {
      return arguments.length ? ($subSettings[st] = value, $viewsSettings) : $subSettings[st];
    };
  } //========================
  // dataMap for render only
  //========================


  function dataMap(mapDef) {
    function Map(source, options) {
      this.tgt = mapDef.getTgt(source, options);
      options.map = this;
    }

    if ($isFunction(mapDef)) {
      // Simple map declared as function
      mapDef = {
        getTgt: mapDef
      };
    }

    if (mapDef.baseMap) {
      mapDef = $extend($extend({}, mapDef.baseMap), mapDef);
    }

    mapDef.map = function (source, options) {
      return new Map(source, options);
    };

    return mapDef;
  } //==============
  // renderContent
  //==============

  /** Render the template as a string, using the specified data and helpers/context
  * $("#tmpl").render(), tmpl.render(), tagCtx.render(), $.render.namedTmpl()
  *
  * @param {any}        data
  * @param {hash}       [context]           helpers or context
  * @param {boolean}    [noIteration]
  * @param {View}       [parentView]        internal
  * @param {string}     [key]               internal
  * @param {function}   [onRender]          internal
  * @returns {string}   rendered template   internal
  */


  function renderContent(data, context, noIteration, parentView, key, onRender) {
    var i,
        l,
        tag,
        tmpl,
        tagCtx,
        isTopRenderCall,
        prevData,
        prevIndex,
        view = parentView,
        result = "";

    if (context === true) {
      noIteration = context; // passing boolean as second param - noIteration

      context = undefined;
    } else if (_typeof(context) !== OBJECT) {
      context = undefined; // context must be a boolean (noIteration) or a plain object
    }

    if (tag = this.tag) {
      // This is a call from renderTag or tagCtx.render(...)
      tagCtx = this;
      view = view || tagCtx.view;
      tmpl = view._getTmpl(tag.template || tagCtx.tmpl);

      if (!arguments.length) {
        data = tag.contentCtx && $isFunction(tag.contentCtx) ? data = tag.contentCtx(data) : view; // Default data context for wrapped block content is the first argument
      }
    } else {
      // This is a template.render(...) call
      tmpl = this;
    }

    if (tmpl) {
      if (!parentView && data && data._is === "view") {
        view = data; // When passing in a view to render or link (and not passing in a parent view) use the passed-in view as parentView
      }

      if (view && data === view) {
        // Inherit the data from the parent view.
        data = view.data;
      }

      isTopRenderCall = !view;
      isRenderCall = isRenderCall || isTopRenderCall;

      if (!view) {
        (context = context || {}).root = data; // Provide ~root as shortcut to top-level data.
      }

      if (!isRenderCall || $subSettingsAdvanced.useViews || tmpl.useViews || view && view !== topView) {
        result = renderWithViews(tmpl, data, context, noIteration, view, key, onRender, tag);
      } else {
        if (view) {
          // In a block
          prevData = view.data;
          prevIndex = view.index;
          view.index = indexStr;
        } else {
          view = topView;
          prevData = view.data;
          view.data = data;
          view.ctx = context;
        }

        if ($isArray(data) && !noIteration) {
          // Create a view for the array, whose child views correspond to each data item. (Note: if key and parentView are passed in
          // along with parent view, treat as insert -e.g. from view.addViews - so parentView is already the view item for array)
          for (i = 0, l = data.length; i < l; i++) {
            view.index = i;
            view.data = data[i];
            result += tmpl.fn(data[i], view, $sub);
          }
        } else {
          view.data = data;
          result += tmpl.fn(data, view, $sub);
        }

        view.data = prevData;
        view.index = prevIndex;
      }

      if (isTopRenderCall) {
        isRenderCall = undefined;
      }
    }

    return result;
  }

  function renderWithViews(tmpl, data, context, noIteration, view, key, onRender, tag) {
    // Render template against data as a tree of subviews (nested rendered template instances), or as a string (top-level template).
    // If the data is the parent view, treat as noIteration, re-render with the same data context.
    // tmpl can be a string (e.g. rendered by a tag.render() method), or a compiled template.
    var i,
        l,
        newView,
        childView,
        itemResult,
        swapContent,
        contentTmpl,
        outerOnRender,
        tmplName,
        itemVar,
        newCtx,
        tagCtx,
        noLinking,
        result = "";

    if (tag) {
      // This is a call from renderTag or tagCtx.render(...)
      tmplName = tag.tagName;
      tagCtx = tag.tagCtx;
      context = context ? extendCtx(context, tag.ctx) : tag.ctx;

      if (tmpl === view.content) {
        // {{xxx tmpl=#content}}
        contentTmpl = tmpl !== view.ctx._wrp // We are rendering the #content
        ? view.ctx._wrp // #content was the tagCtx.props.tmpl wrapper of the block content - so within this view, #content will now be the view.ctx._wrp block content
        : undefined; // #content was the view.ctx._wrp block content - so within this view, there is no longer any #content to wrap.
      } else if (tmpl !== tagCtx.content) {
        if (tmpl === tag.template) {
          // Rendering {{tag}} tag.template, replacing block content.
          contentTmpl = tagCtx.tmpl; // Set #content to block content (or wrapped block content if tagCtx.props.tmpl is set)

          context._wrp = tagCtx.content; // Pass wrapped block content to nested views
        } else {
          // Rendering tagCtx.props.tmpl wrapper
          contentTmpl = tagCtx.content || view.content; // Set #content to wrapped block content
        }
      } else {
        contentTmpl = view.content; // Nested views inherit same wrapped #content property
      }

      if (tagCtx.props.link === false) {
        // link=false setting on block tag
        // We will override inherited value of link by the explicit setting link=false taken from props
        // The child views of an unlinked view are also unlinked. So setting child back to true will not have any effect.
        context = context || {};
        context.link = false;
      }
    }

    if (view) {
      onRender = onRender || view._.onRender;
      noLinking = context && context.link === false;

      if (noLinking && view._.nl) {
        onRender = undefined;
      }

      context = extendCtx(context, view.ctx);
      tagCtx = !tag && view.tag ? view.tag.tagCtxs[view.tagElse] : tagCtx;
    }

    if (itemVar = tagCtx && tagCtx.props.itemVar) {
      if (itemVar[0] !== "~") {
        syntaxError("Use itemVar='~myItem'");
      }

      itemVar = itemVar.slice(1);
    }

    if (key === true) {
      swapContent = true;
      key = 0;
    } // If link===false, do not call onRender, so no data-linking marker nodes


    if (onRender && tag && tag._.noVws) {
      onRender = undefined;
    }

    outerOnRender = onRender;

    if (onRender === true) {
      // Used by view.refresh(). Don't create a new wrapper view.
      outerOnRender = undefined;
      onRender = view._.onRender;
    } // Set additional context on views created here, (as modified context inherited from the parent, and to be inherited by child views)


    context = tmpl.helpers ? extendCtx(tmpl.helpers, context) : context;
    newCtx = context;

    if ($isArray(data) && !noIteration) {
      // Create a view for the array, whose child views correspond to each data item. (Note: if key and view are passed in
      // along with parent view, treat as insert -e.g. from view.addViews - so view is already the view item for array)
      newView = swapContent ? view : key !== undefined && view || new View(context, "array", view, data, tmpl, key, onRender, contentTmpl);
      newView._.nl = noLinking;

      if (view && view._.useKey) {
        // Parent is not an 'array view'
        newView._.bnd = !tag || tag._.bnd && tag; // For array views that are data bound for collection change events, set the
        // view._.bnd property to true for top-level link() or data-link="{for}", or to the tag instance for a data-bound tag, e.g. {^{for ...}}

        newView.tag = tag;
      }

      for (i = 0, l = data.length; i < l; i++) {
        // Create a view for each data item.
        childView = new View(newCtx, "item", newView, data[i], tmpl, (key || 0) + i, onRender, newView.content);

        if (itemVar) {
          (childView.ctx = $extend({}, newCtx))[itemVar] = $sub._cp(data[i], "#data", childView);
        }

        itemResult = tmpl.fn(data[i], childView, $sub);
        result += newView._.onRender ? newView._.onRender(itemResult, childView) : itemResult;
      }
    } else {
      // Create a view for singleton data object. The type of the view will be the tag name, e.g. "if" or "mytag" except for
      // "item", "array" and "data" views. A "data" view is from programmatic render(object) against a 'singleton'.
      newView = swapContent ? view : new View(newCtx, tmplName || "data", view, data, tmpl, key, onRender, contentTmpl);

      if (itemVar) {
        (newView.ctx = $extend({}, newCtx))[itemVar] = $sub._cp(data, "#data", newView);
      }

      newView.tag = tag;
      newView._.nl = noLinking;
      result += tmpl.fn(data, newView, $sub);
    }

    if (tag) {
      newView.tagElse = tagCtx.index;
      tagCtx.contentView = newView;
    }

    return outerOnRender ? outerOnRender(result, newView) : result;
  } //===========================
  // Build and compile template
  //===========================
  // Generate a reusable function that will serve to render a template against data
  // (Compile AST then build template function)


  function onRenderError(e, view, fallback) {
    var message = fallback !== undefined ? $isFunction(fallback) ? fallback.call(view.data, e, view) : fallback || "" : "{Error: " + (e.message || e) + "}";

    if ($subSettings.onError && (fallback = $subSettings.onError.call(view.data, e, fallback && message, view)) !== undefined) {
      message = fallback; // There is a settings.debugMode(handler) onError override. Call it, and use return value (if any) to replace message
    }

    return view && !view._lc ? $converters.html(message) : message; // For data-link=\"{... onError=...}"... See onDataLinkedTagChange
  }

  function error(message) {
    throw new $sub.Err(message);
  }

  function syntaxError(message) {
    error("Syntax error\n" + message);
  }

  function tmplFn(markup, tmpl, isLinkExpr, convertBack, hasElse) {
    // Compile markup to AST (abtract syntax tree) then build the template function code from the AST nodes
    // Used for compiling templates, and also by JsViews to build functions for data link expressions
    //==== nested functions ====
    function pushprecedingContent(shift) {
      shift -= loc;

      if (shift) {
        content.push(markup.substr(loc, shift).replace(rNewLine, "\\n"));
      }
    }

    function blockTagCheck(tagName, block) {
      if (tagName) {
        tagName += '}}'; //			'{{include}} block has {{/for}} with no open {{for}}'

        syntaxError((block ? '{{' + block + '}} block has {{/' + tagName + ' without {{' + tagName : 'Unmatched or missing {{/' + tagName) + ', in template:\n' + markup);
      }
    }

    function parseTag(all, bind, tagName, converter, colon, html, codeTag, params, slash, bind2, closeBlock, index) {
      /*
      
           bind     tagName         cvt   cln html code    params            slash   bind2         closeBlk  comment
      /(?:{(\^)?{(?:(\w+(?=[\/\s}]))|(\w+)?(:)|(>)|(\*))\s*((?:[^}]|}(?!}))*?)(\/)?|{(\^)?{(?:(?:\/(\w+))\s*|!--[\s\S]*?--))}}/g
      
      (?:
        {(\^)?{            bind
        (?:
          (\w+             tagName
            (?=[\/\s}])
          )
          |
          (\w+)?(:)        converter colon
          |
          (>)              html
          |
          (\*)             codeTag
        )
        \s*
        (                  params
          (?:[^}]|}(?!}))*?
        )
        (\/)?              slash
        |
        {(\^)?{            bind2
        (?:
          (?:\/(\w+))\s*   closeBlock
          |
          !--[\s\S]*?--    comment
        )
      )
      }}/g
      
      */
      if (codeTag && bind || slash && !tagName || params && params.slice(-1) === ":" || bind2) {
        syntaxError(all);
      } // Build abstract syntax tree (AST): [tagName, converter, params, content, hash, bindings, contentMarkup]


      if (html) {
        colon = ":";
        converter = HTML;
      }

      slash = slash || isLinkExpr && !hasElse;
      var late,
          openTagName,
          isLateOb,
          pathBindings = (bind || isLinkExpr) && [[]],
          // pathBindings is an array of arrays for arg bindings and a hash of arrays for prop bindings
      props = "",
          args = "",
          ctxProps = "",
          paramsArgs = "",
          paramsProps = "",
          paramsCtxProps = "",
          onError = "",
          useTrigger = "",
          // Block tag if not self-closing and not {{:}} or {{>}} (special case) and not a data-link expression
      block = !slash && !colon; //==== nested helper function ====

      tagName = tagName || (params = params || "#data", colon); // {{:}} is equivalent to {{:#data}}

      pushprecedingContent(index);
      loc = index + all.length; // location marker - parsed up to here

      if (codeTag) {
        if (allowCode) {
          content.push(["*", "\n" + params.replace(/^:/, "ret+= ").replace(rUnescapeQuotes, "$1") + ";\n"]);
        }
      } else if (tagName) {
        if (tagName === "else") {
          if (rTestElseIf.test(params)) {
            syntaxError('For "{{else if expr}}" use "{{else expr}}"');
          }

          pathBindings = current[9] && [[]];
          current[10] = markup.substring(current[10], index); // contentMarkup for block tag

          openTagName = current[11] || current[0] || syntaxError("Mismatched: " + all); // current[0] is tagName, but for {{else}} nodes, current[11] is tagName of preceding open tag

          current = stack.pop();
          content = current[2];
          block = true;
        }

        if (params) {
          // remove newlines from the params string, to avoid compiled code errors for unterminated strings
          parseParams(params.replace(rNewLine, " "), pathBindings, tmpl, isLinkExpr).replace(rBuildHash, function (all, onerror, isCtxPrm, key, keyToken, keyValue, arg, param) {
            if (key === "this:") {
              keyValue = "undefined"; // this=some.path is always a to parameter (one-way), so don't need to compile/evaluate some.path initialization
            }

            if (param) {
              isLateOb = isLateOb || param[0] === "@";
            }

            key = "'" + keyToken + "':";

            if (arg) {
              args += isCtxPrm + keyValue + ",";
              paramsArgs += "'" + param + "',";
            } else if (isCtxPrm) {
              // Contextual parameter, ~foo=expr
              ctxProps += key + 'j._cp(' + keyValue + ',"' + param + '",view),'; // Compiled code for evaluating tagCtx on a tag will have: ctx:{'foo':j._cp(compiledExpr, "expr", view)}

              paramsCtxProps += key + "'" + param + "',";
            } else if (onerror) {
              onError += keyValue;
            } else {
              if (keyToken === "trigger") {
                useTrigger += keyValue;
              }

              if (keyToken === "lateRender") {
                late = param !== "false"; // Render after first pass
              }

              props += key + keyValue + ",";
              paramsProps += key + "'" + param + "',";
              hasHandlers = hasHandlers || rHasHandlers.test(keyToken);
            }

            return "";
          }).slice(0, -1);
        }

        if (pathBindings && pathBindings[0]) {
          pathBindings.pop(); // Remove the binding that was prepared for next arg. (There is always an extra one ready).
        }

        newNode = [tagName, converter || !!convertBack || hasHandlers || "", block && [], parsedParam(paramsArgs || (tagName === ":" ? "'#data'," : ""), paramsProps, paramsCtxProps), // {{:}} equivalent to {{:#data}}
        parsedParam(args || (tagName === ":" ? "data," : ""), props, ctxProps), onError, useTrigger, late, isLateOb, pathBindings || 0];
        content.push(newNode);

        if (block) {
          stack.push(current);
          current = newNode;
          current[10] = loc; // Store current location of open tag, to be able to add contentMarkup when we reach closing tag

          current[11] = openTagName; // Used for checking syntax (matching close tag)
        }
      } else if (closeBlock) {
        blockTagCheck(closeBlock !== current[0] && closeBlock !== current[11] && closeBlock, current[0]); // Check matching close tag name

        current[10] = markup.substring(current[10], index); // contentMarkup for block tag

        current = stack.pop();
      }

      blockTagCheck(!current && closeBlock);
      content = current[2];
    } //==== /end of nested functions ====


    var i,
        result,
        newNode,
        hasHandlers,
        bindings,
        allowCode = $subSettings.allowCode || tmpl && tmpl.allowCode || $viewsSettings.allowCode === true,
        // include direct setting of settings.allowCode true for backward compat only
    astTop = [],
        loc = 0,
        stack = [],
        content = astTop,
        current = [,, astTop];

    if (allowCode && tmpl._is) {
      tmpl.allowCode = allowCode;
    } //TODO	result = tmplFnsCache[markup]; // Only cache if template is not named and markup length < ...,
    //and there are no bindings or subtemplates?? Consider standard optimization for data-link="a.b.c"
    //		if (result) {
    //			tmpl.fn = result;
    //		} else {
    //		result = markup;


    if (isLinkExpr) {
      if (convertBack !== undefined) {
        markup = markup.slice(0, -convertBack.length - 2) + delimCloseChar0;
      }

      markup = delimOpenChar0 + markup + delimCloseChar1;
    }

    blockTagCheck(stack[0] && stack[0][2].pop()[0]); // Build the AST (abstract syntax tree) under astTop

    markup.replace(rTag, parseTag);
    pushprecedingContent(markup.length);

    if (loc = astTop[astTop.length - 1]) {
      blockTagCheck("" + loc !== loc && +loc[10] === loc[10] && loc[0]);
    } //			result = tmplFnsCache[markup] = buildCode(astTop, tmpl);
    //		}


    if (isLinkExpr) {
      result = buildCode(astTop, markup, isLinkExpr);
      bindings = [];
      i = astTop.length;

      while (i--) {
        bindings.unshift(astTop[i][9]); // With data-link expressions, pathBindings array for tagCtx[i] is astTop[i][9]
      }

      setPaths(result, bindings);
    } else {
      result = buildCode(astTop, tmpl);
    }

    return result;
  }

  function setPaths(fn, pathsArr) {
    var key,
        paths,
        i = 0,
        l = pathsArr.length;
    fn.deps = [];
    fn.paths = []; // The array of path binding (array/dictionary)s for each tag/else block's args and props

    for (; i < l; i++) {
      fn.paths.push(paths = pathsArr[i]);

      for (key in paths) {
        if (key !== "_jsvto" && paths.hasOwnProperty(key) && paths[key].length && !paths[key].skp) {
          fn.deps = fn.deps.concat(paths[key]); // deps is the concatenation of the paths arrays for the different bindings
        }
      }
    }
  }

  function parsedParam(args, props, ctx) {
    return [args.slice(0, -1), props.slice(0, -1), ctx.slice(0, -1)];
  }

  function paramStructure(parts, type) {
    return '\n\t' + (type ? type + ':{' : '') + 'args:[' + parts[0] + '],\n\tprops:{' + parts[1] + '}' + (parts[2] ? ',\n\tctx:{' + parts[2] + '}' : "");
  }

  function parseParams(params, pathBindings, tmpl, isLinkExpr) {
    function parseTokens(all, lftPrn0, lftPrn, bound, path, operator, err, eq, path2, late, prn, comma, lftPrn2, apos, quot, rtPrn, rtPrnDot, prn2, space, index, full) {
      // /(\()(?=\s*\()|(?:([([])\s*)?(?:(\^?)(~?[\w$.^]+)?\s*((\+\+|--)|\+|-|~(?![\w$])|&&|\|\||===|!==|==|!=|<=|>=|[<>%*:?\/]|(=))\s*|(!*?(@)?[#~]?[\w$.^]+)([([])?)|(,\s*)|(\(?)\\?(?:(')|("))|(?:\s*(([)\]])(?=[.^]|\s*$|[^([])|[)\]])([([]?))|(\s+)/g,
      //lftPrn0           lftPrn         bound     path               operator     err                                          eq      path2 late            prn      comma  lftPrn2   apos quot        rtPrn  rtPrnDot                  prn2     space
      // (left paren? followed by (path? followed by operator) or (path followed by paren?)) or comma or apos or quot or right paren or space
      function parsePath(allPath, not, object, helper, view, viewProperty, pathTokens, leafToken) {
        // /^(!*?)(?:null|true|false|\d[\d.]*|([\w$]+|\.|~([\w$]+)|#(view|([\w$]+))?)([\w$.^]*?)(?:[.[^]([\w$]+)\]?)?)$/g,
        //    not                               object     helper    view  viewProperty pathTokens      leafToken
        var subPath = object === ".";

        if (object) {
          path = path.slice(not.length);

          if (/^\.?constructor$/.test(leafToken || path)) {
            syntaxError(allPath);
          }

          if (!subPath) {
            allPath = (late // late path @a.b.c: not throw on 'property of undefined' if a undefined, and will use _getOb() after linking to resolve late.
            ? (isLinkExpr ? '' : '(ltOb.lt=ltOb.lt||') + '(ob=' : "") + (helper ? 'view.ctxPrm("' + helper + '")' : view ? "view" : "data") + (late ? ')===undefined' + (isLinkExpr ? '' : ')') + '?"":view._getOb(ob,"' : "") + (leafToken ? (viewProperty ? "." + viewProperty : helper ? "" : view ? "" : "." + object) + (pathTokens || "") : (leafToken = helper ? "" : view ? viewProperty || "" : object, ""));
            allPath = allPath + (leafToken ? "." + leafToken : "");
            allPath = not + (allPath.slice(0, 9) === "view.data" ? allPath.slice(5) // convert #view.data... to data...
            : allPath) + (late ? (isLinkExpr ? '"' : '",ltOb') + (prn ? ',1)' : ')') : "");
          }

          if (bindings) {
            binds = named === "_linkTo" ? bindto = pathBindings._jsvto = pathBindings._jsvto || [] : bndCtx.bd;

            if (theOb = subPath && binds[binds.length - 1]) {
              if (theOb._cpfn) {
                // Computed property exprOb
                while (theOb.sb) {
                  theOb = theOb.sb;
                }

                if (theOb.bnd) {
                  path = "^" + path.slice(1);
                }

                theOb.sb = path;
                theOb.bnd = theOb.bnd || path[0] === "^";
              }
            } else {
              binds.push(path);
            }

            pathStart[parenDepth] = index + (subPath ? 1 : 0);
          }
        }

        return allPath;
      } //bound = bindings && bound;


      if (bound && !eq) {
        path = bound + path; // e.g. some.fn(...)^some.path - so here path is "^some.path"
      }

      operator = operator || "";
      lftPrn = lftPrn || lftPrn0 || lftPrn2;
      path = path || path2;

      if (late && (late = !/\)|]/.test(full[index - 1]))) {
        path = path.slice(1).split(".").join("^"); // Late path @z.b.c. Use "^" rather than "." to ensure that deep binding will be used
      } // Could do this - but not worth perf cost?? :-
      // if (!path.lastIndexOf("#data.", 0)) { path = path.slice(6); } // If path starts with "#data.", remove that.


      prn = prn || prn2 || "";
      var expr,
          exprFn,
          binds,
          theOb,
          newOb,
          rtSq = ")";

      if (prn === "[") {
        prn = "[j._sq(";
        rtSq = ")]";
      }

      if (err && !aposed && !quoted) {
        syntaxError(params);
      } else {
        if (bindings && rtPrnDot && !aposed && !quoted) {
          // This is a binding to a path in which an object is returned by a helper/data function/expression, e.g. foo()^x.y or (a?b:c)^x.y
          // We create a compiled function to get the object instance (which will be called when the dependent data of the subexpression changes, to return the new object, and trigger re-binding of the subsequent path)
          if (parenDepth) {
            expr = pathStart[parenDepth - 1];

            if (full.length - 1 > index - (expr || 0)) {
              // We need to compile a subexpression
              expr = full.slice(expr, index + all.length);

              if (exprFn !== true) {
                // If not reentrant call during compilation
                binds = bindto || bndStack[parenDepth - 1].bd; // Insert exprOb object, to be used during binding to return the computed object

                theOb = binds[binds.length - 1];

                if (theOb && theOb.prm) {
                  while (theOb.sb && theOb.sb.prm) {
                    theOb = theOb.sb;
                  }

                  newOb = theOb.sb = {
                    path: theOb.sb,
                    bnd: theOb.bnd
                  };
                } else {
                  binds.push(newOb = {
                    path: binds.pop()
                  }); // Insert exprOb object, to be used during binding to return the computed object
                } // (e.g. "some.object()" in "some.object().a.b" - to be used as context for binding the following tokens "a.b")

              }

              rtPrnDot = delimOpenChar1 + ":" + expr // The parameter or function subexpression
              + " onerror=''" // set onerror='' in order to wrap generated code with a try catch - returning '' as object instance if there is an error/missing parent
              + delimCloseChar0;
              exprFn = tmplLinks[rtPrnDot];

              if (!exprFn) {
                tmplLinks[rtPrnDot] = true; // Flag that this exprFn (for rtPrnDot) is being compiled

                tmplLinks[rtPrnDot] = exprFn = tmplFn(rtPrnDot, tmpl, true); // Compile the expression (or use cached copy already in tmpl.links)
              }

              if (exprFn !== true && newOb) {
                // If not reentrant call during compilation
                newOb._cpfn = exprFn;
                newOb.prm = bndCtx.bd;
                newOb.bnd = newOb.bnd || newOb.path && newOb.path.indexOf("^") >= 0;
              }
            }
          }
        }

        return aposed // within single-quoted string
        ? (aposed = !apos, aposed ? all : lftPrn2 + '"') : quoted // within double-quoted string
        ? (quoted = !quot, quoted ? all : lftPrn2 + '"') : (lftPrn ? (pathStart[parenDepth] = index++, bndCtx = bndStack[++parenDepth] = {
          bd: []
        }, lftPrn) : "") + (space ? parenDepth ? "" // New arg or prop - so insert backspace \b (\x08) as separator for named params, used subsequently by rBuildHash, and prepare new bindings array
        : (paramIndex = full.slice(paramIndex, index), named ? (named = boundName = bindto = false, "\b") : "\b,") + paramIndex + (paramIndex = index + all.length, bindings && pathBindings.push(bndCtx.bd = []), "\b") : eq // named param. Remove bindings for arg and create instead bindings array for prop
        ? (parenDepth && syntaxError(params), bindings && pathBindings.pop(), named = "_" + path, boundName = bound, paramIndex = index + all.length, bindings && (bindings = bndCtx.bd = pathBindings[named] = [], bindings.skp = !bound), path + ':') : path // path
        ? path.split("^").join(".").replace($sub.rPath, parsePath) + (prn // some.fncall(
        ? (bndCtx = bndStack[++parenDepth] = {
          bd: []
        }, fnCall[parenDepth] = rtSq, prn) : operator) : operator // operator
        ? operator : rtPrn // function
        ? (rtPrn = fnCall[parenDepth] || rtPrn, fnCall[parenDepth] = false, bndCtx = bndStack[--parenDepth], rtPrn) + (prn // rtPrn and prn, e.g )( in (a)() or a()(), or )[ in a()[]
        ? (bndCtx = bndStack[++parenDepth], fnCall[parenDepth] = rtSq, prn) : "") : comma ? (fnCall[parenDepth] || syntaxError(params), "," // We don't allow top-level literal arrays or objects
        ) : lftPrn0 ? "" : (aposed = apos, quoted = quot, '"'));
      }
    }

    var named,
        bindto,
        boundName,
        quoted,
        // boolean for string content in double quotes
    aposed,
        // or in single quotes
    bindings = pathBindings && pathBindings[0],
        // bindings array for the first arg
    bndCtx = {
      bd: bindings
    },
        bndStack = {
      0: bndCtx
    },
        paramIndex = 0,
        // list,
    tmplLinks = (tmpl ? tmpl.links : bindings && (bindings.links = bindings.links || {})) || topView.tmpl.links,
        // The following are used for tracking path parsing including nested paths, such as "a.b(c^d + (e))^f", and chained computed paths such as
    // "a.b().c^d().e.f().g" - which has four chained paths, "a.b()", "^c.d()", ".e.f()" and ".g"
    parenDepth = 0,
        fnCall = {},
        // We are in a function call
    pathStart = {},
        // tracks the start of the current path such as c^d() in the above example
    result;

    if (params[0] === "@") {
      params = params.replace(rBracketQuote, ".");
    }

    result = (params + (tmpl ? " " : "")).replace($sub.rPrm, parseTokens);
    return !parenDepth && result || syntaxError(params); // Syntax error if unbalanced parens in params expression
  }

  function buildCode(ast, tmpl, isLinkExpr) {
    // Build the template function code from the AST nodes, and set as property on the passed-in template object
    // Used for compiling templates, and also by JsViews to build functions for data link expressions
    var i,
        node,
        tagName,
        converter,
        tagCtx,
        hasTag,
        hasEncoder,
        getsVal,
        hasCnvt,
        useCnvt,
        tmplBindings,
        pathBindings,
        params,
        boundOnErrStart,
        boundOnErrEnd,
        tagRender,
        nestedTmpls,
        tmplName,
        nestedTmpl,
        tagAndElses,
        content,
        markup,
        nextIsElse,
        oldCode,
        isElse,
        isGetVal,
        tagCtxFn,
        onError,
        tagStart,
        trigger,
        lateRender,
        retStrOpen,
        retStrClose,
        tmplBindingKey = 0,
        useViews = $subSettingsAdvanced.useViews || tmpl.useViews || tmpl.tags || tmpl.templates || tmpl.helpers || tmpl.converters,
        code = "",
        tmplOptions = {},
        l = ast.length;

    if ("" + tmpl === tmpl) {
      tmplName = isLinkExpr ? 'data-link="' + tmpl.replace(rNewLine, " ").slice(1, -1) + '"' : tmpl;
      tmpl = 0;
    } else {
      tmplName = tmpl.tmplName || "unnamed";

      if (tmpl.allowCode) {
        tmplOptions.allowCode = true;
      }

      if (tmpl.debug) {
        tmplOptions.debug = true;
      }

      tmplBindings = tmpl.bnds;
      nestedTmpls = tmpl.tmpls;
    }

    for (i = 0; i < l; i++) {
      // AST nodes: [0: tagName, 1: converter, 2: content, 3: params, 4: code, 5: onError, 6: trigger, 7:pathBindings, 8: contentMarkup]
      node = ast[i]; // Add newline for each callout to t() c() etc. and each markup string

      if ("" + node === node) {
        // a markup string to be inserted
        code += '\n+"' + node + '"';
      } else {
        // a compiled tag expression to be inserted
        tagName = node[0];

        if (tagName === "*") {
          // Code tag: {{* }}
          code += ";\n" + node[1] + "\nret=ret";
        } else {
          converter = node[1];
          content = !isLinkExpr && node[2];
          tagCtx = paramStructure(node[3], 'params') + '},' + paramStructure(params = node[4]);
          trigger = node[6];
          lateRender = node[7];

          if (node[8]) {
            // latePath @a.b.c or @~a.b.c
            retStrOpen = "\nvar ob,ltOb={},ctxs=";
            retStrClose = ";\nctxs.lt=ltOb.lt;\nreturn ctxs;";
          } else {
            retStrOpen = "\nreturn ";
            retStrClose = "";
          }

          markup = node[10] && node[10].replace(rUnescapeQuotes, "$1");

          if (isElse = tagName === "else") {
            if (pathBindings) {
              pathBindings.push(node[9]);
            }
          } else {
            onError = node[5] || $subSettings.debugMode !== false && "undefined"; // If debugMode not false, set default onError handler on tag to "undefined" (see onRenderError)

            if (tmplBindings && (pathBindings = node[9])) {
              // Array of paths, or false if not data-bound
              pathBindings = [pathBindings];
              tmplBindingKey = tmplBindings.push(1); // Add placeholder in tmplBindings for compiled function
            }
          }

          useViews = useViews || params[1] || params[2] || pathBindings || /view.(?!index)/.test(params[0]); // useViews is for perf optimization. For render() we only use views if necessary - for the more advanced scenarios.
          // We use views if there are props, contextual properties or args with #... (other than #index) - but you can force
          // using the full view infrastructure, (and pay a perf price) by opting in: Set useViews: true on the template, manually...

          if (isGetVal = tagName === ":") {
            if (converter) {
              tagName = converter === HTML ? ">" : converter + tagName;
            }
          } else {
            if (content) {
              // TODO optimize - if content.length === 0 or if there is a tmpl="..." specified - set content to null / don't run this compilation code - since content won't get used!!
              // Create template object for nested template
              nestedTmpl = tmplObject(markup, tmplOptions);
              nestedTmpl.tmplName = tmplName + "/" + tagName; // Compile to AST and then to compiled function

              nestedTmpl.useViews = nestedTmpl.useViews || useViews;
              buildCode(content, nestedTmpl);
              useViews = nestedTmpl.useViews;
              nestedTmpls.push(nestedTmpl);
            }

            if (!isElse) {
              // This is not an else tag.
              tagAndElses = tagName;
              useViews = useViews || tagName && (!$tags[tagName] || !$tags[tagName].flow); // Switch to a new code string for this bound tag (and its elses, if it has any) - for returning the tagCtxs array

              oldCode = code;
              code = "";
            }

            nextIsElse = ast[i + 1];
            nextIsElse = nextIsElse && nextIsElse[0] === "else";
          }

          tagStart = onError ? ";\ntry{\nret+=" : "\n+";
          boundOnErrStart = "";
          boundOnErrEnd = "";

          if (isGetVal && (pathBindings || trigger || converter && converter !== HTML || lateRender)) {
            // For convertVal we need a compiled function to return the new tagCtx(s)
            tagCtxFn = new Function("data,view,j,u", "// " + tmplName + " " + ++tmplBindingKey + " " + tagName + retStrOpen + "{" + tagCtx + "};" + retStrClose);
            tagCtxFn._er = onError;
            tagCtxFn._tag = tagName;
            tagCtxFn._bd = !!pathBindings; // data-linked tag {^{.../}}

            tagCtxFn._lr = lateRender;

            if (isLinkExpr) {
              return tagCtxFn;
            }

            setPaths(tagCtxFn, pathBindings);
            tagRender = 'c("' + converter + '",view,';
            useCnvt = true;
            boundOnErrStart = tagRender + tmplBindingKey + ",";
            boundOnErrEnd = ")";
          }

          code += isGetVal ? (isLinkExpr ? (onError ? "try{\n" : "") + "return " : tagStart) + (useCnvt // Call _cnvt if there is a converter: {{cnvt: ... }} or {^{cnvt: ... }}
          ? (useCnvt = undefined, useViews = hasCnvt = true, tagRender + (tagCtxFn ? (tmplBindings[tmplBindingKey - 1] = tagCtxFn, tmplBindingKey // Store the compiled tagCtxFn in tmpl.bnds, and pass the key to convertVal()
          ) : "{" + tagCtx + "}") + ")") : tagName === ">" ? (hasEncoder = true, "h(" + params[0] + ")") : (getsVal = true, "((v=" + params[0] + ')!=null?v:' + (isLinkExpr ? 'null)' : '"")')) // Non strict equality so data-link="title{:expr}" with expr=null/undefined removes title attribute
          ) : (hasTag = true, "\n{view:view,content:false,tmpl:" // Add this tagCtx to the compiled code for the tagCtxs to be passed to renderTag()
          + (content ? nestedTmpls.length : "false") + "," // For block tags, pass in the key (nestedTmpls.length) to the nested content template
          + tagCtx + "},");

          if (tagAndElses && !nextIsElse) {
            // This is a data-link expression or an inline tag without any elses, or the last {{else}} of an inline tag
            // We complete the code for returning the tagCtxs array
            code = "[" + code.slice(0, -1) + "]";
            tagRender = 't("' + tagAndElses + '",view,this,';

            if (isLinkExpr || pathBindings) {
              // This is a bound tag (data-link expression or inline bound tag {^{tag ...}}) so we store a compiled tagCtxs function in tmp.bnds
              code = new Function("data,view,j,u", " // " + tmplName + " " + tmplBindingKey + " " + tagAndElses + retStrOpen + code + retStrClose);
              code._er = onError;
              code._tag = tagAndElses;

              if (pathBindings) {
                setPaths(tmplBindings[tmplBindingKey - 1] = code, pathBindings);
              }

              code._lr = lateRender;

              if (isLinkExpr) {
                return code; // For a data-link expression we return the compiled tagCtxs function
              }

              boundOnErrStart = tagRender + tmplBindingKey + ",undefined,";
              boundOnErrEnd = ")";
            } // This is the last {{else}} for an inline tag.
            // For a bound tag, pass the tagCtxs fn lookup key to renderTag.
            // For an unbound tag, include the code directly for evaluating tagCtxs array


            code = oldCode + tagStart + tagRender + (pathBindings && tmplBindingKey || code) + ")";
            pathBindings = 0;
            tagAndElses = 0;
          }

          if (onError && !nextIsElse) {
            useViews = true;
            code += ';\n}catch(e){ret' + (isLinkExpr ? "urn " : "+=") + boundOnErrStart + 'j._err(e,view,' + onError + ')' + boundOnErrEnd + ';}' + (isLinkExpr ? "" : 'ret=ret');
          }
        }
      }
    } // Include only the var references that are needed in the code


    code = "// " + tmplName + (tmplOptions.debug ? "\ndebugger;" : "") + "\nvar v" + (hasTag ? ",t=j._tag" : "") // has tag
    + (hasCnvt ? ",c=j._cnvt" : "") // converter
    + (hasEncoder ? ",h=j._html" : "") // html converter
    + (isLinkExpr ? (node[8] // late @... path?
    ? ", ob" : "") + ";\n" : ',ret=""') + code + (isLinkExpr ? "\n" : ";\nreturn ret;");

    try {
      code = new Function("data,view,j,u", code);
    } catch (e) {
      syntaxError("Compiled template code:\n\n" + code + '\n: "' + (e.message || e) + '"');
    }

    if (tmpl) {
      tmpl.fn = code;
      tmpl.useViews = !!useViews;
    }

    return code;
  } //==========
  // Utilities
  //==========
  // Merge objects, in particular contexts which inherit from parent contexts


  function extendCtx(context, parentContext) {
    // Return copy of parentContext, unless context is defined and is different, in which case return a new merged context
    // If neither context nor parentContext are defined, return undefined
    return context && context !== parentContext ? parentContext ? $extend($extend({}, parentContext), context) : context : parentContext && $extend({}, parentContext);
  }

  function getTargetProps(source, tagCtx) {
    // this pointer is theMap - which has tagCtx.props too
    // arguments: tagCtx.args.
    var key,
        prop,
        map = tagCtx.map,
        propsArr = map && map.propsArr;

    if (!propsArr) {
      // map.propsArr is the full array of {key:..., prop:...} objects
      propsArr = [];

      if (_typeof(source) === OBJECT || $isFunction(source)) {
        for (key in source) {
          prop = source[key];

          if (key !== $expando && source.hasOwnProperty(key) && (!tagCtx.props.noFunctions || !$.isFunction(prop))) {
            propsArr.push({
              key: key,
              prop: prop
            });
          }
        }
      }

      if (map) {
        map.propsArr = map.options && propsArr; // If bound {^{props}} and not isRenderCall, store propsArr on map (map.options is defined only for bound, && !isRenderCall)
      }
    }

    return getTargetSorted(propsArr, tagCtx); // Obtains map.tgt, by filtering, sorting and splicing the full propsArr
  }

  function getTargetSorted(value, tagCtx) {
    // getTgt
    var mapped,
        start,
        end,
        tag = tagCtx.tag,
        props = tagCtx.props,
        propParams = tagCtx.params.props,
        filter = props.filter,
        sort = props.sort,
        directSort = sort === true,
        step = parseInt(props.step),
        reverse = props.reverse ? -1 : 1;

    if (!$isArray(value)) {
      return value;
    }

    if (directSort || sort && "" + sort === sort) {
      // Temporary mapped array holds objects with index and sort-value
      mapped = value.map(function (item, i) {
        item = directSort ? item : getPathObject(item, sort);
        return {
          i: i,
          v: "" + item === item ? item.toLowerCase() : item
        };
      }); // Sort mapped array

      mapped.sort(function (a, b) {
        return a.v > b.v ? reverse : a.v < b.v ? -reverse : 0;
      }); // Map to new array with resulting order

      value = mapped.map(function (item) {
        return value[item.i];
      });
    } else if ((sort || reverse < 0) && !tag.dataMap) {
      value = value.slice(); // Clone array first if not already a new array
    }

    if ($isFunction(sort)) {
      value = value.sort(function () {
        // Wrap the sort function to provide tagCtx as 'this' pointer
        return sort.apply(tagCtx, arguments);
      });
    }

    if (reverse < 0 && (!sort || $isFunction(sort))) {
      // Reverse result if not already reversed in sort
      value = value.reverse();
    }

    if (value.filter && filter) {
      // IE8 does not support filter
      value = value.filter(filter, tagCtx);

      if (tagCtx.tag.onFilter) {
        tagCtx.tag.onFilter(tagCtx);
      }
    }

    if (propParams.sorted) {
      mapped = sort || reverse < 0 ? value : value.slice();

      if (tag.sorted) {
        $.observable(tag.sorted).refresh(mapped); // Note that this might cause the start and end props to be modified - e.g. by pager tag control
      } else {
        tagCtx.map.sorted = mapped;
      }
    }

    start = props.start; // Get current value - after possible  changes triggered by tag.sorted refresh() above

    end = props.end;

    if (propParams.start && start === undefined || propParams.end && end === undefined) {
      start = end = 0;
    }

    if (!isNaN(start) || !isNaN(end)) {
      // start or end specified, but not the auto-create Number array scenario of {{for start=xxx end=yyy}}
      start = +start || 0;
      end = end === undefined || end > value.length ? value.length : +end;
      value = value.slice(start, end);
    }

    if (step > 1) {
      start = 0;
      end = value.length;
      mapped = [];

      for (; start < end; start += step) {
        mapped.push(value[start]);
      }

      value = mapped;
    }

    if (propParams.paged && tag.paged) {
      $observable(tag.paged).refresh(value);
    }

    return value;
  }
  /** Render the template as a string, using the specified data and helpers/context
  * $("#tmpl").render()
  *
  * @param {any}        data
  * @param {hash}       [helpersOrContext]
  * @param {boolean}    [noIteration]
  * @returns {string}   rendered template
  */


  function $fnRender(data, context, noIteration) {
    var tmplElem = this.jquery && (this[0] || error('Unknown template')),
        // Targeted element not found for jQuery template selector such as "#myTmpl"
    tmpl = tmplElem.getAttribute(tmplAttr);
    return renderContent.call(tmpl && $.data(tmplElem)[jsvTmpl] || $templates(tmplElem), data, context, noIteration);
  } //========================== Register converters ==========================


  function getCharEntity(ch) {
    // Get character entity for HTML, Attribute and optional data encoding
    return charEntities[ch] || (charEntities[ch] = "&#" + ch.charCodeAt(0) + ";");
  }

  function getCharFromEntity(match, token) {
    // Get character from HTML entity, for optional data unencoding
    return charsFromEntities[token] || "";
  }

  function htmlEncode(text) {
    // HTML encode: Replace < > & ' " ` etc. by corresponding entities.
    return text != undefined ? rIsHtml.test(text) && ("" + text).replace(rHtmlEncode, getCharEntity) || text : "";
  }

  function dataEncode(text) {
    // Encode just < > and & - intended for 'safe data' along with {{:}} rather than {{>}}
    return "" + text === text ? text.replace(rDataEncode, getCharEntity) : text;
  }

  function dataUnencode(text) {
    // Unencode just < > and & - intended for 'safe data' along with {{:}} rather than {{>}}
    return "" + text === text ? text.replace(rDataUnencode, getCharFromEntity) : text;
  } //========================== Initialize ==========================


  $sub = $views.sub;
  $viewsSettings = $views.settings;

  if (!(jsr || $ && $.render)) {
    // JsRender not already loaded, or loaded without jQuery, and we are now moving from jsrender namespace to jQuery namepace
    for (jsvStoreName in jsvStores) {
      registerStore(jsvStoreName, jsvStores[jsvStoreName]);
    }

    $converters = $views.converters;
    $helpers = $views.helpers;
    $tags = $views.tags;
    $sub._tg.prototype = {
      baseApply: baseApply,
      cvtArgs: convertArgs,
      bndArgs: convertBoundArgs,
      ctxPrm: contextParameter
    };
    topView = $sub.topView = new View(); //BROWSER-SPECIFIC CODE

    if ($) {
      ////////////////////////////////////////////////////////////////////////////////////////////////
      // jQuery (= $) is loaded
      $.fn.render = $fnRender;
      $expando = $.expando;

      if ($.observable) {
        if (versionNumber !== (versionNumber = $.views.jsviews)) {
          // Different version of jsRender was loaded
          throw "JsObservable requires JsRender " + versionNumber;
        }

        $extend($sub, $.views.sub); // jquery.observable.js was loaded before jsrender.js

        $views.map = $.views.map;
      }
    } else {
      ////////////////////////////////////////////////////////////////////////////////////////////////
      // jQuery is not loaded.
      $ = {};

      if (setGlobals) {
        global.jsrender = $; // We are loading jsrender.js from a script element, not AMD or CommonJS, so set global
      } // Error warning if jsrender.js is used as template engine on Node.js (e.g. Express or Hapi...)
      // Use jsrender-node.js instead...


      $.renderFile = $.__express = $.compile = function () {
        throw "Node.js: use npm jsrender, or jsrender-node.js";
      }; //END BROWSER-SPECIFIC CODE


      $.isFunction = function (ob) {
        return typeof ob === "function";
      };

      $.isArray = Array.isArray || function (obj) {
        return {}.toString.call(obj) === "[object Array]";
      };

      $sub._jq = function (jq) {
        // private method to move from JsRender APIs from jsrender namespace to jQuery namespace
        if (jq !== $) {
          $extend(jq, $); // map over from jsrender namespace to jQuery namespace

          $ = jq;
          $.fn.render = $fnRender;
          delete $.jsrender;
          $expando = $.expando;
        }
      };

      $.jsrender = versionNumber;
    }

    $subSettings = $sub.settings;
    $subSettings.allowCode = false;
    $isFunction = $.isFunction;
    $.render = $render;
    $.views = $views;
    $.templates = $templates = $views.templates;

    for (setting in $subSettings) {
      addSetting(setting);
    }
    /**
    * $.views.settings.debugMode(true)
    * @param {boolean}  debugMode
    * @returns {Settings}
    *
    * debugMode = $.views.settings.debugMode()
    * @returns {boolean}
    */


    ($viewsSettings.debugMode = function (debugMode) {
      return debugMode === undefined ? $subSettings.debugMode : ($subSettings.debugMode = debugMode, $subSettings.onError = debugMode + "" === debugMode ? function () {
        return debugMode;
      } : $isFunction(debugMode) ? debugMode : undefined, $viewsSettings);
    })(false); // jshint ignore:line

    $subSettingsAdvanced = $subSettings.advanced = {
      useViews: false,
      _jsv: false // For global access to JsViews store

    }; //========================== Register tags ==========================

    $tags({
      "if": {
        render: function render(val) {
          // This function is called once for {{if}} and once for each {{else}}.
          // We will use the tag.rendering object for carrying rendering state across the calls.
          // If not done (a previous block has not been rendered), look at expression for this block and render the block if expression is truthy
          // Otherwise return ""
          var self = this,
              tagCtx = self.tagCtx,
              ret = self.rendering.done || !val && (tagCtx.args.length || !tagCtx.index) ? "" : (self.rendering.done = true, self.selected = tagCtx.index, undefined); // Test is satisfied, so render content on current context

          return ret;
        },
        contentCtx: true,
        // Inherit parent view data context
        flow: true
      },
      "for": {
        sortDataMap: dataMap(getTargetSorted),
        init: function init(val, cloned) {
          this.setDataMap(this.tagCtxs);
        },
        render: function render(val) {
          // This function is called once for {{for}} and once for each {{else}}.
          // We will use the tag.rendering object for carrying rendering state across the calls.
          var value,
              filter,
              srtField,
              isArray,
              i,
              sorted,
              end,
              step,
              self = this,
              tagCtx = self.tagCtx,
              range = tagCtx.argDefault === false,
              props = tagCtx.props,
              iterate = range || tagCtx.args.length,
              // Not final else and not auto-create range
          result = "",
              done = 0;

          if (!self.rendering.done) {
            value = iterate ? val : tagCtx.view.data; // For the final else, defaults to current data without iteration.

            if (range) {
              range = props.reverse ? "unshift" : "push";
              end = +props.end;
              step = +props.step || 1;
              value = []; // auto-create integer array scenario of {{for start=xxx end=yyy}}

              for (i = +props.start || 0; (end - i) * step > 0; i += step) {
                value[range](i);
              }
            }

            if (value !== undefined) {
              isArray = $isArray(value);
              result += tagCtx.render(value, !iterate || props.noIteration); // Iterates if data is an array, except on final else - or if noIteration property
              // set to true. (Use {{include}} to compose templates without array iteration)

              done += isArray ? value.length : 1;
            }

            if (self.rendering.done = done) {
              self.selected = tagCtx.index;
            } // If nothing was rendered we will look at the next {{else}}. Otherwise, we are done.

          }

          return result;
        },
        setDataMap: function setDataMap(tagCtxs) {
          var tagCtx,
              props,
              paramsProps,
              self = this,
              l = tagCtxs.length;

          while (l--) {
            tagCtx = tagCtxs[l];
            props = tagCtx.props;
            paramsProps = tagCtx.params.props;
            tagCtx.argDefault = props.end === undefined || tagCtx.args.length > 0; // Default to #data except for auto-create range scenario {{for start=xxx end=yyy step=zzz}}

            props.dataMap = tagCtx.argDefault !== false && $isArray(tagCtx.args[0]) && (paramsProps.sort || paramsProps.start || paramsProps.end || paramsProps.step || paramsProps.filter || paramsProps.reverse || props.sort || props.start || props.end || props.step || props.filter || props.reverse) && self.sortDataMap;
          }
        },
        flow: true
      },
      props: {
        baseTag: "for",
        dataMap: dataMap(getTargetProps),
        init: noop,
        // Don't execute the base init() of the "for" tag
        flow: true
      },
      include: {
        flow: true
      },
      "*": {
        // {{* code... }} - Ignored if template.allowCode and $.views.settings.allowCode are false. Otherwise include code in compiled template
        render: retVal,
        flow: true
      },
      ":*": {
        // {{:* returnedExpression }} - Ignored if template.allowCode and $.views.settings.allowCode are false. Otherwise include code in compiled template
        render: retVal,
        flow: true
      },
      dbg: $helpers.dbg = $converters.dbg = dbgBreak // Register {{dbg/}}, {{dbg:...}} and ~dbg() to throw and catch, as breakpoints for debugging.

    });
    $converters({
      html: htmlEncode,
      attr: htmlEncode,
      // Includes > encoding since rConvertMarkers in JsViews does not skip > characters in attribute strings
      encode: dataEncode,
      unencode: dataUnencode,
      // Includes > encoding since rConvertMarkers in JsViews does not skip > characters in attribute strings
      url: function url(text) {
        // URL encoding helper.
        return text != undefined ? encodeURI("" + text) : text === null ? text : ""; // null returns null, e.g. to remove attribute. undefined returns ""
      }
    });
  } //========================== Define default delimiters ==========================


  $subSettings = $sub.settings;
  $isArray = ($ || jsr).isArray;
  $viewsSettings.delimiters("{{", "}}", "^");

  if (jsrToJq) {
    // Moving from jsrender namespace to jQuery namepace - copy over the stored items (templates, converters, helpers...)
    jsr.views.sub._jq($);
  }

  return $ || jsr;
}, window);

/***/ }),

/***/ "./node_modules/ui-huma/js/messages.js":
/*!*********************************************!*\
  !*** ./node_modules/ui-huma/js/messages.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function () {
  'use strict';

  var jsrender = __webpack_require__(/*! jsrender */ "./node_modules/jsrender/jsrender.js");

  var scroll = function scroll() {
    var element = document.querySelector('.app-messages__container [data-perfect-scrollbar]');
    element.scrollTop = element.scrollHeight - element.offsetHeight - 16;
  };

  ['DOMContentLoaded', 'load'].forEach(function (e) {
    window.addEventListener(e, scroll);
  });

  var addMessage = function addMessage(message) {
    var messages = document.querySelector('#messages');
    var template = jsrender.templates('#template-message');
    var messageNodeText = template.render({
      name: 'Laza Bogdan',
      avatar: 'assets/images/people/110/guy-6.jpg',
      date: 'just now',
      message: message
    });
    var messageNode = document.createRange().createContextualFragment(messageNodeText);
    messages.appendChild(messageNode);
  };

  document.querySelector('#message-reply').addEventListener('submit', function (e) {
    e.preventDefault();
    var field = this.querySelector('input');
    addMessage(field.value);
    field.value = '';
    scroll();
  });
})();

/***/ }),

/***/ "./src/js/messages.js":
/*!****************************!*\
  !*** ./src/js/messages.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ui_huma_js_messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ui-huma/js/messages */ "./node_modules/ui-huma/js/messages.js");
/* harmony import */ var ui_huma_js_messages__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ui_huma_js_messages__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ 9:
/*!**********************************!*\
  !*** multi ./src/js/messages.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\works\website\Python\Project 1 Django\temp\src\js\messages.js */"./src/js/messages.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2EtZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYWRkLXRvLXVuc2NvcGFibGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2FkdmFuY2Utc3RyaW5nLWluZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2FuLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hcnJheS1pbmNsdWRlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jbGFzc29mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2NvZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jb3JlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2N0eC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19kZWZpbmVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2RvbS1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZW51bS1idWcta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19lbnVtLWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZXhwb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2ZhaWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2ZpeC1yZS13a3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZmxhZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZnVuY3Rpb24tdG8tc3RyaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19oYXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faGlkZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19odG1sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2luaGVyaXQtaWYtcmVxdWlyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pcy1hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pcy1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXMtcmVnZXhwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2l0ZXItY3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2l0ZXItc3RlcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pdGVyYXRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fbGlicmFyeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19tZXRhLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWRwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1kcHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdvcGQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdvcG4tZXh0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1nb3BuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1nb3BzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1ncG8uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LXBpZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3Qtc2FwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fcmVkZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fcmVnZXhwLWV4ZWMtYWJzdHJhY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fcmVnZXhwLWV4ZWMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc2V0LXByb3RvLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3NldC1zcGVjaWVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3NoYXJlZC1rZXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc2hhcmVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3NwZWNpZXMtY29uc3RydWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc3RyaW5nLWF0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3N0cmluZy1odG1sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLWFic29sdXRlLWluZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLWludGVnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8taW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1sZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8tb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL191aWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fd2tzLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL193a3MtZXh0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3drcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5mdW5jdGlvbi5uYW1lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5pcy1leHRlbnNpYmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5wcmV2ZW50LWV4dGVuc2lvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LnNldC1wcm90b3R5cGUtb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAuY29uc3RydWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVnZXhwLmV4ZWMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVnZXhwLmZsYWdzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZ2V4cC5tYXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAucmVwbGFjZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAuc3BsaXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVnZXhwLnRvLXN0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcubGluay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuc3ViLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnN5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNy5zeW1ib2wuYXN5bmMtaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9qc3JlbmRlci9qc3JlbmRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdWktaHVtYS9qcy9tZXNzYWdlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbWVzc2FnZXMuanMiXSwibmFtZXMiOlsiX3R5cGVvZiIsIm9iaiIsIlN5bWJvbCIsIml0ZXJhdG9yIiwibW9kdWxlIiwiZXhwb3J0cyIsImNvbnN0cnVjdG9yIiwicHJvdG90eXBlIiwiaXQiLCJUeXBlRXJyb3IiLCJVTlNDT1BBQkxFUyIsInJlcXVpcmUiLCJBcnJheVByb3RvIiwiQXJyYXkiLCJ1bmRlZmluZWQiLCJrZXkiLCJhdCIsIlMiLCJpbmRleCIsInVuaWNvZGUiLCJsZW5ndGgiLCJpc09iamVjdCIsInRvSU9iamVjdCIsInRvTGVuZ3RoIiwidG9BYnNvbHV0ZUluZGV4IiwiSVNfSU5DTFVERVMiLCIkdGhpcyIsImVsIiwiZnJvbUluZGV4IiwiTyIsInZhbHVlIiwiY29mIiwiVEFHIiwiQVJHIiwiYXJndW1lbnRzIiwidHJ5R2V0IiwiZSIsIlQiLCJCIiwiT2JqZWN0IiwiY2FsbGVlIiwidG9TdHJpbmciLCJjYWxsIiwic2xpY2UiLCJjb3JlIiwidmVyc2lvbiIsIl9fZSIsImFGdW5jdGlvbiIsImZuIiwidGhhdCIsImEiLCJiIiwiYyIsImFwcGx5IiwiZGVmaW5lUHJvcGVydHkiLCJnZXQiLCJkb2N1bWVudCIsImlzIiwiY3JlYXRlRWxlbWVudCIsInNwbGl0IiwiZ2V0S2V5cyIsImdPUFMiLCJwSUUiLCJyZXN1bHQiLCJnZXRTeW1ib2xzIiwiZiIsInN5bWJvbHMiLCJpc0VudW0iLCJpIiwicHVzaCIsImdsb2JhbCIsImhpZGUiLCJyZWRlZmluZSIsImN0eCIsIlBST1RPVFlQRSIsIiRleHBvcnQiLCJ0eXBlIiwibmFtZSIsInNvdXJjZSIsIklTX0ZPUkNFRCIsIkYiLCJJU19HTE9CQUwiLCJHIiwiSVNfU1RBVElDIiwiSVNfUFJPVE8iLCJQIiwiSVNfQklORCIsInRhcmdldCIsImV4cFByb3RvIiwib3duIiwib3V0IiwiZXhwIiwiRnVuY3Rpb24iLCJVIiwiVyIsIlIiLCJleGVjIiwiZmFpbHMiLCJkZWZpbmVkIiwid2tzIiwicmVnZXhwRXhlYyIsIlNQRUNJRVMiLCJSRVBMQUNFX1NVUFBPUlRTX05BTUVEX0dST1VQUyIsInJlIiwiZ3JvdXBzIiwicmVwbGFjZSIsIlNQTElUX1dPUktTX1dJVEhfT1ZFUldSSVRURU5fRVhFQyIsIm9yaWdpbmFsRXhlYyIsIktFWSIsIlNZTUJPTCIsIkRFTEVHQVRFU19UT19TWU1CT0wiLCJERUxFR0FURVNfVE9fRVhFQyIsImV4ZWNDYWxsZWQiLCJuYXRpdmVSZWdFeHBNZXRob2QiLCJmbnMiLCJtYXliZUNhbGxOYXRpdmUiLCJuYXRpdmVNZXRob2QiLCJyZWdleHAiLCJzdHIiLCJhcmcyIiwiZm9yY2VTdHJpbmdNZXRob2QiLCJkb25lIiwic3RyZm4iLCJyeGZuIiwiU3RyaW5nIiwiUmVnRXhwIiwic3RyaW5nIiwiYXJnIiwiYW5PYmplY3QiLCJpZ25vcmVDYXNlIiwibXVsdGlsaW5lIiwic3RpY2t5Iiwid2luZG93IiwiTWF0aCIsInNlbGYiLCJfX2ciLCJoYXNPd25Qcm9wZXJ0eSIsImRQIiwiY3JlYXRlRGVzYyIsIm9iamVjdCIsImRvY3VtZW50RWxlbWVudCIsInNldFByb3RvdHlwZU9mIiwic2V0IiwiQyIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwiaXNBcnJheSIsIk1BVENIIiwiaXNSZWdFeHAiLCJjcmVhdGUiLCJkZXNjcmlwdG9yIiwic2V0VG9TdHJpbmdUYWciLCJJdGVyYXRvclByb3RvdHlwZSIsIkNvbnN0cnVjdG9yIiwiTkFNRSIsIm5leHQiLCJMSUJSQVJZIiwiSXRlcmF0b3JzIiwiJGl0ZXJDcmVhdGUiLCJnZXRQcm90b3R5cGVPZiIsIklURVJBVE9SIiwiQlVHR1kiLCJrZXlzIiwiRkZfSVRFUkFUT1IiLCJLRVlTIiwiVkFMVUVTIiwicmV0dXJuVGhpcyIsIkJhc2UiLCJERUZBVUxUIiwiSVNfU0VUIiwiRk9SQ0VEIiwiZ2V0TWV0aG9kIiwia2luZCIsInByb3RvIiwidmFsdWVzIiwiZW50cmllcyIsIkRFRl9WQUxVRVMiLCJWQUxVRVNfQlVHIiwiJG5hdGl2ZSIsIiRkZWZhdWx0IiwiJGVudHJpZXMiLCIkYW55TmF0aXZlIiwibWV0aG9kcyIsIk1FVEEiLCJoYXMiLCJzZXREZXNjIiwiaWQiLCJpc0V4dGVuc2libGUiLCJGUkVFWkUiLCJwcmV2ZW50RXh0ZW5zaW9ucyIsInNldE1ldGEiLCJ3IiwiZmFzdEtleSIsImdldFdlYWsiLCJvbkZyZWV6ZSIsIm1ldGEiLCJORUVEIiwiZFBzIiwiZW51bUJ1Z0tleXMiLCJJRV9QUk9UTyIsIkVtcHR5IiwiY3JlYXRlRGljdCIsImlmcmFtZSIsImx0IiwiZ3QiLCJpZnJhbWVEb2N1bWVudCIsInN0eWxlIiwiZGlzcGxheSIsImFwcGVuZENoaWxkIiwic3JjIiwiY29udGVudFdpbmRvdyIsIm9wZW4iLCJ3cml0ZSIsImNsb3NlIiwiUHJvcGVydGllcyIsIklFOF9ET01fREVGSU5FIiwidG9QcmltaXRpdmUiLCJBdHRyaWJ1dGVzIiwiZGVmaW5lUHJvcGVydGllcyIsImdPUEQiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJnT1BOIiwid2luZG93TmFtZXMiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwiZ2V0V2luZG93TmFtZXMiLCIka2V5cyIsImhpZGRlbktleXMiLCJjb25jYXQiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJ0b09iamVjdCIsIk9iamVjdFByb3RvIiwiYXJyYXlJbmRleE9mIiwibmFtZXMiLCJiaXRtYXAiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJTUkMiLCIkdG9TdHJpbmciLCJUT19TVFJJTkciLCJUUEwiLCJpbnNwZWN0U291cmNlIiwidmFsIiwic2FmZSIsImlzRnVuY3Rpb24iLCJqb2luIiwiY2xhc3NvZiIsImJ1aWx0aW5FeGVjIiwicmVnZXhwRmxhZ3MiLCJuYXRpdmVFeGVjIiwibmF0aXZlUmVwbGFjZSIsInBhdGNoZWRFeGVjIiwiTEFTVF9JTkRFWCIsIlVQREFURVNfTEFTVF9JTkRFWF9XUk9ORyIsInJlMSIsInJlMiIsIk5QQ0dfSU5DTFVERUQiLCJQQVRDSCIsImxhc3RJbmRleCIsInJlQ29weSIsIm1hdGNoIiwiY2hlY2siLCJ0ZXN0IiwiYnVnZ3kiLCJfX3Byb3RvX18iLCJERVNDUklQVE9SUyIsImRlZiIsInRhZyIsInN0YXQiLCJzaGFyZWQiLCJ1aWQiLCJTSEFSRUQiLCJzdG9yZSIsIm1vZGUiLCJjb3B5cmlnaHQiLCJEIiwidG9JbnRlZ2VyIiwicG9zIiwicyIsImwiLCJjaGFyQ29kZUF0IiwiY2hhckF0IiwicXVvdCIsImNyZWF0ZUhUTUwiLCJhdHRyaWJ1dGUiLCJwMSIsInRvTG93ZXJDYXNlIiwibWF4IiwibWluIiwiY2VpbCIsImZsb29yIiwiaXNOYU4iLCJJT2JqZWN0IiwidmFsdWVPZiIsInB4IiwicmFuZG9tIiwid2tzRXh0IiwiJFN5bWJvbCIsIlVTRV9TWU1CT0wiLCIkZXhwb3J0cyIsImFkZFRvVW5zY29wYWJsZXMiLCJzdGVwIiwiaXRlcmF0ZWQiLCJfdCIsIl9pIiwiX2siLCJBcmd1bWVudHMiLCJGUHJvdG8iLCJuYW1lUkUiLCIkaXNFeHRlbnNpYmxlIiwiJHByZXZlbnRFeHRlbnNpb25zIiwiaW5oZXJpdElmUmVxdWlyZWQiLCIkZmxhZ3MiLCIkUmVnRXhwIiwiQ09SUkVDVF9ORVciLCJwIiwidGlSRSIsInBpUkUiLCJmaVUiLCJwcm94eSIsImZvcmNlZCIsImZsYWdzIiwiYWR2YW5jZVN0cmluZ0luZGV4IiwicmVnRXhwRXhlYyIsIiRtYXRjaCIsInJlcyIsInJ4IiwiZnVsbFVuaWNvZGUiLCJBIiwibiIsIm1hdGNoU3RyIiwiU1VCU1RJVFVUSU9OX1NZTUJPTFMiLCJTVUJTVElUVVRJT05fU1lNQk9MU19OT19OQU1FRCIsIm1heWJlVG9TdHJpbmciLCJSRVBMQUNFIiwiJHJlcGxhY2UiLCJzZWFyY2hWYWx1ZSIsInJlcGxhY2VWYWx1ZSIsImZ1bmN0aW9uYWxSZXBsYWNlIiwicmVzdWx0cyIsImFjY3VtdWxhdGVkUmVzdWx0IiwibmV4dFNvdXJjZVBvc2l0aW9uIiwibWF0Y2hlZCIsInBvc2l0aW9uIiwiY2FwdHVyZXMiLCJqIiwibmFtZWRDYXB0dXJlcyIsInJlcGxhY2VyQXJncyIsInJlcGxhY2VtZW50IiwiZ2V0U3Vic3RpdHV0aW9uIiwidGFpbFBvcyIsIm0iLCJjaCIsImNhcHR1cmUiLCJzcGVjaWVzQ29uc3RydWN0b3IiLCJjYWxsUmVnRXhwRXhlYyIsIiRtaW4iLCIkcHVzaCIsIiRTUExJVCIsIkxFTkdUSCIsIk1BWF9VSU5UMzIiLCJTVVBQT1JUU19ZIiwiU1BMSVQiLCIkc3BsaXQiLCJpbnRlcm5hbFNwbGl0Iiwic2VwYXJhdG9yIiwibGltaXQiLCJvdXRwdXQiLCJsYXN0TGFzdEluZGV4Iiwic3BsaXRMaW1pdCIsInNlcGFyYXRvckNvcHkiLCJsYXN0TGVuZ3RoIiwic3BsaXR0ZXIiLCJ1bmljb2RlTWF0Y2hpbmciLCJsaW0iLCJxIiwieiIsImRlZmluZSIsImxpbmsiLCJ1cmwiLCJzdWIiLCIkZmFpbHMiLCJ3a3NEZWZpbmUiLCJlbnVtS2V5cyIsIl9jcmVhdGUiLCJnT1BORXh0IiwiJEdPUEQiLCIkR09QUyIsIiREUCIsIiRKU09OIiwiSlNPTiIsIl9zdHJpbmdpZnkiLCJzdHJpbmdpZnkiLCJISURERU4iLCJUT19QUklNSVRJVkUiLCJTeW1ib2xSZWdpc3RyeSIsIkFsbFN5bWJvbHMiLCJPUFN5bWJvbHMiLCJVU0VfTkFUSVZFIiwiUU9iamVjdCIsInNldHRlciIsImZpbmRDaGlsZCIsInNldFN5bWJvbERlc2MiLCJwcm90b0Rlc2MiLCJ3cmFwIiwic3ltIiwiaXNTeW1ib2wiLCIkZGVmaW5lUHJvcGVydHkiLCIkZGVmaW5lUHJvcGVydGllcyIsIiRjcmVhdGUiLCIkcHJvcGVydHlJc0VudW1lcmFibGUiLCJFIiwiJGdldE93blByb3BlcnR5RGVzY3JpcHRvciIsIiRnZXRPd25Qcm9wZXJ0eU5hbWVzIiwiJGdldE93blByb3BlcnR5U3ltYm9scyIsIklTX09QIiwiJHNldCIsImVzNlN5bWJvbHMiLCJ3ZWxsS25vd25TeW1ib2xzIiwiayIsImtleUZvciIsInVzZVNldHRlciIsInVzZVNpbXBsZSIsIkZBSUxTX09OX1BSSU1JVElWRVMiLCJhcmdzIiwicmVwbGFjZXIiLCIkcmVwbGFjZXIiLCIkaXRlcmF0b3JzIiwiVE9fU1RSSU5HX1RBRyIsIkFycmF5VmFsdWVzIiwiRE9NSXRlcmFibGVzIiwiQ1NTUnVsZUxpc3QiLCJDU1NTdHlsZURlY2xhcmF0aW9uIiwiQ1NTVmFsdWVMaXN0IiwiQ2xpZW50UmVjdExpc3QiLCJET01SZWN0TGlzdCIsIkRPTVN0cmluZ0xpc3QiLCJET01Ub2tlbkxpc3QiLCJEYXRhVHJhbnNmZXJJdGVtTGlzdCIsIkZpbGVMaXN0IiwiSFRNTEFsbENvbGxlY3Rpb24iLCJIVE1MQ29sbGVjdGlvbiIsIkhUTUxGb3JtRWxlbWVudCIsIkhUTUxTZWxlY3RFbGVtZW50IiwiTWVkaWFMaXN0IiwiTWltZVR5cGVBcnJheSIsIk5hbWVkTm9kZU1hcCIsIk5vZGVMaXN0IiwiUGFpbnRSZXF1ZXN0TGlzdCIsIlBsdWdpbiIsIlBsdWdpbkFycmF5IiwiU1ZHTGVuZ3RoTGlzdCIsIlNWR051bWJlckxpc3QiLCJTVkdQYXRoU2VnTGlzdCIsIlNWR1BvaW50TGlzdCIsIlNWR1N0cmluZ0xpc3QiLCJTVkdUcmFuc2Zvcm1MaXN0IiwiU291cmNlQnVmZmVyTGlzdCIsIlN0eWxlU2hlZXRMaXN0IiwiVGV4dFRyYWNrQ3VlTGlzdCIsIlRleHRUcmFja0xpc3QiLCJUb3VjaExpc3QiLCJjb2xsZWN0aW9ucyIsImV4cGxpY2l0IiwiQ29sbGVjdGlvbiIsImZhY3RvcnkiLCIkIiwialF1ZXJ5Iiwic2V0R2xvYmFscyIsInZlcnNpb25OdW1iZXIiLCJqc3ZTdG9yZU5hbWUiLCJyVGFnIiwiclRtcGxTdHJpbmciLCJ0b3BWaWV3IiwiJHZpZXdzIiwiJGV4cGFuZG8iLCJfb2NwIiwiJGlzRnVuY3Rpb24iLCIkaXNBcnJheSIsIiR0ZW1wbGF0ZXMiLCIkY29udmVydGVycyIsIiRoZWxwZXJzIiwiJHRhZ3MiLCIkc3ViIiwiJHN1YlNldHRpbmdzIiwiJHN1YlNldHRpbmdzQWR2YW5jZWQiLCIkdmlld3NTZXR0aW5ncyIsImRlbGltT3BlbkNoYXIwIiwiZGVsaW1PcGVuQ2hhcjEiLCJkZWxpbUNsb3NlQ2hhcjAiLCJkZWxpbUNsb3NlQ2hhcjEiLCJsaW5rQ2hhciIsInNldHRpbmciLCJiYXNlT25FcnJvciIsImlzUmVuZGVyQ2FsbCIsInJOZXdMaW5lIiwiclVuZXNjYXBlUXVvdGVzIiwickVzY2FwZVF1b3RlcyIsInJCdWlsZEhhc2giLCJyVGVzdEVsc2VJZiIsInJGaXJzdEVsZW0iLCJyQXR0ckVuY29kZSIsInJJc0h0bWwiLCJySGFzSGFuZGxlcnMiLCJyV3JhcHBlZEluVmlld01hcmtlciIsInJIdG1sRW5jb2RlIiwickRhdGFFbmNvZGUiLCJyRGF0YVVuZW5jb2RlIiwickJyYWNrZXRRdW90ZSIsInZpZXdJZCIsImNoYXJFbnRpdGllcyIsImNoYXJzRnJvbUVudGl0aWVzIiwiYW1wIiwiSFRNTCIsIk9CSkVDVCIsInRtcGxBdHRyIiwianN2VG1wbCIsImluZGV4U3RyIiwiJHJlbmRlciIsImpzciIsImpzcmVuZGVyIiwianNyVG9KcSIsInJlbmRlciIsImpzdlN0b3JlcyIsInRlbXBsYXRlIiwiY29tcGlsZSIsImNvbXBpbGVUbXBsIiwiY29tcGlsZVRhZyIsInZpZXdNb2RlbCIsImNvbXBpbGVWaWV3TW9kZWwiLCJoZWxwZXIiLCJjb252ZXJ0ZXIiLCJqc3ZpZXdzIiwiclBhdGgiLCJyUHJtIiwiVmlldyIsIkVyciIsIkpzVmlld3NFcnJvciIsInRtcGxGbiIsInBhcnNlIiwicGFyc2VQYXJhbXMiLCJleHRlbmQiLCIkZXh0ZW5kIiwiZXh0ZW5kQ3R4Iiwic3ludGF4RXJyIiwic3ludGF4RXJyb3IiLCJvblN0b3JlIiwiaXRlbSIsImFkZFNldHRpbmciLCJzZXR0aW5ncyIsImFsbG93Q29kZSIsImFkdlNldCIsIm5vb3AiLCJfdGhwIiwidGFnSGFuZGxlcnNGcm9tUHJvcHMiLCJfZ20iLCJfdGciLCJfY252dCIsImNvbnZlcnRWYWwiLCJfdGFnIiwicmVuZGVyVGFnIiwiX2VyIiwiZXJyb3IiLCJfZXJyIiwib25SZW5kZXJFcnJvciIsIl9jcCIsInJldFZhbCIsIl9zcSIsInRva2VuIiwiZGVsaW1pdGVycyIsIiR2aWV3c0RlbGltaXRlcnMiLCJhZHZhbmNlZCIsIm1hcCIsImRhdGFNYXAiLCJnZXREZXJpdmVkTWV0aG9kIiwiYmFzZU1ldGhvZCIsIm1ldGhvZCIsInJldCIsInByZXZCYXNlIiwiYmFzZSIsIl9kIiwidGFnQ3R4IiwicHJvcCIsInByb3BzIiwiZml4IiwiZGJnQnJlYWsiLCJjb25zb2xlIiwibG9nIiwiYmFzZUFwcGx5IiwibWVzc2FnZSIsIkVycm9yIiwib3BlbkNoYXJzIiwiY2xvc2VDaGFycyIsInJUbXBsIiwiZ2V0VmlldyIsImlubmVyIiwidmlld3MiLCJmb3VuZCIsInZpZXciLCJyb290IiwiXyIsInVzZUtleSIsInBhcmVudCIsImdldE5lc3RlZEluZGV4IiwiZGVwZW5kcyIsImdldEluZGV4IiwiZ2V0UGF0aE9iamVjdCIsIm9iIiwicGF0aCIsImx0T2IiLCJwcmV2T2IiLCJ0b2tlbnMiLCJjb250ZXh0UGFyYW1ldGVyIiwid3JhcHBlZCIsImRlcHMiLCJvYnNDdHhQcm0iLCJ0YWdFbHNlIiwiY2FsbFZpZXciLCJuZXdSZXMiLCJzdG9yZVZpZXciLCJpc1VwZGF0ZSIsImxpbmtlZCIsIl9jeHAiLCJzY29wZSIsImlzVG9wIiwiX29jcHMiLCJfdnciLCJfa2V5IiwiaW5kIiwidXBkYXRlVmFsdWUiLCJvYnNlcnZhYmxlIiwic2V0UHJvcGVydHkiLCJfY2VvIiwidW5zaGlmdCIsImN2dEFyZ3MiLCJkYXRhIiwiX3VjcCIsImdldFRlbXBsYXRlIiwidG1wbCIsImdldFJzYyIsIm9uRXJyb3IiLCJsaW5rQ3R4IiwiYXJnc0xlbiIsImJpbmRUbyIsImJvdW5kVGFnIiwiYm5kcyIsIl9sciIsIl9iZCIsIl9sYyIsImJuZCIsInVubGlua2VkIiwiaW5saW5lIiwidGFnTmFtZSIsImNvbnZlcnQiLCJvbkFycmF5Q2hhbmdlIiwiZmxvdyIsInRhZ0N0eHMiLCJfaXMiLCJvblJlbmRlciIsImNvbnZlcnRBcmdzIiwiYm91bmQiLCJib3VuZEFyZ3MiLCJiaW5kRnJvbSIsImFyZ09yUHJvcCIsImNvbnRleHQiLCJjb252ZXJ0Qm91bmRBcmdzIiwiZ2V0UmVzb3VyY2UiLCJyZXNvdXJjZVR5cGUiLCJpdGVtTmFtZSIsInBhcmVudFZpZXciLCJiaW5kVG9PckJpbmRGcm9tIiwiYmluZEFycmF5IiwicGFyc2VJbnQiLCJ0YWdEZWYiLCJ0YWdzIiwiYXR0ciIsInBhcmVudFRhZyIsIml0ZW1SZXQiLCJ0YWdDdHhDdHgiLCJjdHhQcm0iLCJpbml0VmFsIiwiY29udGVudCIsImNhbGxJbml0IiwibWFwRGVmIiwidGhpc01hcCIsImJkQXJncyIsInRhZ0RhdGFNYXAiLCJjb250ZW50Q3R4IiwiYmluZEZyb21MZW5ndGgiLCJiaW5kVG9MZW5ndGgiLCJsaW5rZWRFbGVtZW50IiwiZGVmYXVsdEN0eCIsInBhcmVudFRtcGwiLCJsYXRlUmVuZGVyIiwicGFyYW1zIiwidG1wbHMiLCJyZW5kZXJDb250ZW50IiwiYm5kQXJncyIsIl9nZXRUbXBsIiwiX2N0ciIsImluaXQiLCJ0aHMiLCJ0aGlzIiwiYXJyVndzIiwiZGF0YUJvdW5kT25seSIsInBhcmVudHMiLCJwYXJlbnRUYWdzIiwicmVuZGVyaW5nIiwicm5kciIsImFyZ0RlZmF1bHQiLCJsaW5rZWRDdHhQYXJhbSIsInRvSW5kZXgiLCJfZGZBdCIsIm5vVndzIiwiY3Z0IiwidW5tYXAiLCJ0Z3QiLCJsaW5rcyIsInJlbmRlcldpdGhWaWV3cyIsImh0bWwiLCJjb250ZW50VG1wbCIsInBhcmVudFZpZXdfIiwic2VsZl8iLCJzY3AiLCJzcGxpY2UiLCJfZ2V0T2IiLCJjb21waWxlQ2hpbGRSZXNvdXJjZXMiLCJzdG9yZU5hbWUiLCJzdG9yZU5hbWVzIiwicmVzb3VyY2VzIiwiYmFzZVRhZyIsImNvbXBpbGVkRGVmIiwiVGFnIiwiX3BhcmVudFRtcGwiLCJvcHRpb25zIiwibG9va3VwVGVtcGxhdGUiLCJjdXJyZW50TmFtZSIsIm5vZGVUeXBlIiwiZWxlbSIsImdldEVsZW1lbnRCeUlkIiwiaW5uZXJIVE1MIiwiZ2V0QXR0cmlidXRlIiwidG1wbE5hbWUiLCJzZXRBdHRyaWJ1dGUiLCJjb21waWxlZFRtcGwiLCJ0bXBsT3JNYXJrdXAiLCJfaHRtbCIsIm1hcmt1cCIsInRtcGxPYmplY3QiLCJnZXREZWZhdWx0VmFsIiwiZGVmYXVsdFZhbCIsImFkZFBhcmVudFJlZiIsInJlZiIsInZpZXdNb2RlbHMiLCJnZXR0ZXJzIiwibWVyZ2UiLCJjbnN0ciIsImdldHRlckNvdW50IiwiJG9ic2VydmFibGUiLCJnZXR0ZXJOYW1lcyIsIkpzdlZtIiwidm0iLCJpdGVyYXRlIiwiYWN0aW9uIiwiZ2V0dGVyVHlwZSIsInBhcmVudFJlZiIsImdldHRlciIsImNoaWxkT2IiLCJhcnIiLCJtb2QiLCJhc3NpZ25lZCIsIm5ld01vZEFyciIsIm1vZGVsIiwicmVmcmVzaCIsInVubWFwQXJyYXkiLCJtb2RlbEFyciIsInByaXZGaWVsZCIsImh0bWxUYWciLCJ3cmFwTWFwIiwiX3dtIiwiZGl2IiwidHJpbSIsInJlZ2lzdGVyU3RvcmUiLCJzdG9yZVNldHRpbmdzIiwidGhlU3RvcmUiLCJ0aGlzU3RvcmUiLCJjbnQiLCJnZXRUZ3QiLCJzdCIsIk1hcCIsImJhc2VNYXAiLCJub0l0ZXJhdGlvbiIsImlzVG9wUmVuZGVyQ2FsbCIsInByZXZEYXRhIiwicHJldkluZGV4IiwidXNlVmlld3MiLCJuZXdWaWV3IiwiY2hpbGRWaWV3IiwiaXRlbVJlc3VsdCIsInN3YXBDb250ZW50Iiwib3V0ZXJPblJlbmRlciIsIml0ZW1WYXIiLCJuZXdDdHgiLCJub0xpbmtpbmciLCJfd3JwIiwibmwiLCJoZWxwZXJzIiwiY29udGVudFZpZXciLCJmYWxsYmFjayIsImlzTGlua0V4cHIiLCJjb252ZXJ0QmFjayIsImhhc0Vsc2UiLCJwdXNocHJlY2VkaW5nQ29udGVudCIsInNoaWZ0IiwibG9jIiwic3Vic3RyIiwiYmxvY2tUYWdDaGVjayIsImJsb2NrIiwicGFyc2VUYWciLCJhbGwiLCJiaW5kIiwiY29sb24iLCJjb2RlVGFnIiwic2xhc2giLCJiaW5kMiIsImNsb3NlQmxvY2siLCJsYXRlIiwib3BlblRhZ05hbWUiLCJpc0xhdGVPYiIsInBhdGhCaW5kaW5ncyIsImN0eFByb3BzIiwicGFyYW1zQXJncyIsInBhcmFtc1Byb3BzIiwicGFyYW1zQ3R4UHJvcHMiLCJ1c2VUcmlnZ2VyIiwiY3VycmVudCIsInN1YnN0cmluZyIsInN0YWNrIiwicG9wIiwib25lcnJvciIsImlzQ3R4UHJtIiwia2V5VG9rZW4iLCJrZXlWYWx1ZSIsInBhcmFtIiwiaGFzSGFuZGxlcnMiLCJuZXdOb2RlIiwicGFyc2VkUGFyYW0iLCJiaW5kaW5ncyIsImFzdFRvcCIsImJ1aWxkQ29kZSIsInNldFBhdGhzIiwicGF0aHNBcnIiLCJwYXRocyIsInNrcCIsInBhcmFtU3RydWN0dXJlIiwicGFydHMiLCJwYXJzZVRva2VucyIsImxmdFBybjAiLCJsZnRQcm4iLCJvcGVyYXRvciIsImVyciIsImVxIiwicGF0aDIiLCJwcm4iLCJjb21tYSIsImxmdFBybjIiLCJhcG9zIiwicnRQcm4iLCJydFBybkRvdCIsInBybjIiLCJzcGFjZSIsImZ1bGwiLCJwYXJzZVBhdGgiLCJhbGxQYXRoIiwibm90Iiwidmlld1Byb3BlcnR5IiwicGF0aFRva2VucyIsImxlYWZUb2tlbiIsInN1YlBhdGgiLCJiaW5kcyIsIm5hbWVkIiwiYmluZHRvIiwiX2pzdnRvIiwiYm5kQ3R4IiwiYmQiLCJ0aGVPYiIsIl9jcGZuIiwic2IiLCJwYXRoU3RhcnQiLCJwYXJlbkRlcHRoIiwiZXhwciIsImV4cHJGbiIsIm5ld09iIiwicnRTcSIsImFwb3NlZCIsInF1b3RlZCIsImJuZFN0YWNrIiwicHJtIiwidG1wbExpbmtzIiwiaW5kZXhPZiIsInBhcmFtSW5kZXgiLCJib3VuZE5hbWUiLCJmbkNhbGwiLCJhc3QiLCJub2RlIiwiaGFzVGFnIiwiaGFzRW5jb2RlciIsImdldHNWYWwiLCJoYXNDbnZ0IiwidXNlQ252dCIsInRtcGxCaW5kaW5ncyIsImJvdW5kT25FcnJTdGFydCIsImJvdW5kT25FcnJFbmQiLCJ0YWdSZW5kZXIiLCJuZXN0ZWRUbXBscyIsIm5lc3RlZFRtcGwiLCJ0YWdBbmRFbHNlcyIsIm5leHRJc0Vsc2UiLCJvbGRDb2RlIiwiaXNFbHNlIiwiaXNHZXRWYWwiLCJ0YWdDdHhGbiIsInRhZ1N0YXJ0IiwidHJpZ2dlciIsInJldFN0ck9wZW4iLCJyZXRTdHJDbG9zZSIsInRtcGxCaW5kaW5nS2V5IiwidGVtcGxhdGVzIiwiY29udmVydGVycyIsImNvZGUiLCJ0bXBsT3B0aW9ucyIsImRlYnVnIiwiZGVidWdNb2RlIiwicGFyZW50Q29udGV4dCIsImdldFRhcmdldFByb3BzIiwicHJvcHNBcnIiLCJub0Z1bmN0aW9ucyIsImdldFRhcmdldFNvcnRlZCIsIm1hcHBlZCIsInN0YXJ0IiwiZW5kIiwicHJvcFBhcmFtcyIsImZpbHRlciIsInNvcnQiLCJkaXJlY3RTb3J0IiwicmV2ZXJzZSIsInYiLCJvbkZpbHRlciIsInNvcnRlZCIsInBhZ2VkIiwiJGZuUmVuZGVyIiwidG1wbEVsZW0iLCJqcXVlcnkiLCJnZXRDaGFyRW50aXR5IiwiZ2V0Q2hhckZyb21FbnRpdHkiLCJodG1sRW5jb2RlIiwidGV4dCIsImRhdGFFbmNvZGUiLCJkYXRhVW5lbmNvZGUiLCJleHBhbmRvIiwicmVuZGVyRmlsZSIsIl9fZXhwcmVzcyIsIl9qcSIsImpxIiwiX2pzdiIsInNlbGVjdGVkIiwic29ydERhdGFNYXAiLCJjbG9uZWQiLCJzZXREYXRhTWFwIiwic3J0RmllbGQiLCJyYW5nZSIsImluY2x1ZGUiLCJkYmciLCJlbmNvZGUiLCJ1bmVuY29kZSIsImVuY29kZVVSSSIsInNjcm9sbCIsImVsZW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2Nyb2xsVG9wIiwic2Nyb2xsSGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwiZm9yRWFjaCIsImFkZEV2ZW50TGlzdGVuZXIiLCJhZGRNZXNzYWdlIiwibWVzc2FnZXMiLCJtZXNzYWdlTm9kZVRleHQiLCJhdmF0YXIiLCJkYXRlIiwibWVzc2FnZU5vZGUiLCJjcmVhdGVSYW5nZSIsImNyZWF0ZUNvbnRleHR1YWxGcmFnbWVudCIsInByZXZlbnREZWZhdWx0IiwiZmllbGQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkEsU0FBU0EsT0FBVCxDQUFpQkMsR0FBakIsRUFBc0I7QUFDcEI7O0FBRUEsTUFBSSxPQUFPQyxNQUFQLEtBQWtCLFVBQWxCLElBQWdDLE9BQU9BLE1BQU0sQ0FBQ0MsUUFBZCxLQUEyQixRQUEvRCxFQUF5RTtBQUN2RUMsVUFBTSxDQUFDQyxPQUFQLEdBQWlCTCxPQUFPLEdBQUcsU0FBU0EsT0FBVCxDQUFpQkMsR0FBakIsRUFBc0I7QUFD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QUN0QzViLFVBQUksRUFBRSxhQURnQztBQUV0QzY0QixZQUFNLEVBQUUsb0NBRjhCO0FBR3RDQyxVQUFJLEVBQUUsVUFIZ0M7QUFJdEMvWSxhQUFPLEVBQVBBO0FBSnNDLEtBQWhCLENBQXhCO0FBT0EsUUFBSWdaLFdBQVcsR0FBR3A2QixRQUFRLENBQUNxNkIsV0FBVCxHQUF1QkMsd0JBQXZCLENBQWdETCxlQUFoRCxDQUFsQjtBQUNBRCxZQUFRLENBQUN6d0IsV0FBVCxDQUFxQjZ3QixXQUFyQjtBQUNELEdBWkQ7O0FBY0FwNkIsVUFBUSxDQUFDeTVCLGFBQVQsQ0FBdUIsZ0JBQXZCLEVBQXlDSyxnQkFBekMsQ0FBMEQsUUFBMUQsRUFBb0UsVUFBU2w3QixDQUFULEVBQVk7QUFDOUVBLEtBQUMsQ0FBQzI3QixjQUFGO0FBQ0EsUUFBTUMsS0FBSyxHQUFHLEtBQUtmLGFBQUwsQ0FBbUIsT0FBbkIsQ0FBZDtBQUVBTSxjQUFVLENBQUNTLEtBQUssQ0FBQ2w4QixLQUFQLENBQVY7QUFDQWs4QixTQUFLLENBQUNsOEIsS0FBTixHQUFjLEVBQWQ7QUFFQWk3QixVQUFNO0FBQ1AsR0FSRDtBQVVELENBdENELEk7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQSIsImZpbGUiOiIvZGlzdC9hc3NldHMvanMvbWVzc2FnZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDkpO1xuIiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICh0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJykgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYSBmdW5jdGlvbiEnKTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsIi8vIDIyLjEuMy4zMSBBcnJheS5wcm90b3R5cGVbQEB1bnNjb3BhYmxlc11cbnZhciBVTlNDT1BBQkxFUyA9IHJlcXVpcmUoJy4vX3drcycpKCd1bnNjb3BhYmxlcycpO1xudmFyIEFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5pZiAoQXJyYXlQcm90b1tVTlNDT1BBQkxFU10gPT0gdW5kZWZpbmVkKSByZXF1aXJlKCcuL19oaWRlJykoQXJyYXlQcm90bywgVU5TQ09QQUJMRVMsIHt9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICBBcnJheVByb3RvW1VOU0NPUEFCTEVTXVtrZXldID0gdHJ1ZTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgYXQgPSByZXF1aXJlKCcuL19zdHJpbmctYXQnKSh0cnVlKTtcblxuIC8vIGBBZHZhbmNlU3RyaW5nSW5kZXhgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYWR2YW5jZXN0cmluZ2luZGV4XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChTLCBpbmRleCwgdW5pY29kZSkge1xuICByZXR1cm4gaW5kZXggKyAodW5pY29kZSA/IGF0KFMsIGluZGV4KS5sZW5ndGggOiAxKTtcbn07XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07XG4iLCIvLyBmYWxzZSAtPiBBcnJheSNpbmRleE9mXG4vLyB0cnVlICAtPiBBcnJheSNpbmNsdWRlc1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIHRvQWJzb2x1dGVJbmRleCA9IHJlcXVpcmUoJy4vX3RvLWFic29sdXRlLWluZGV4Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChJU19JTkNMVURFUykge1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBlbCwgZnJvbUluZGV4KSB7XG4gICAgdmFyIE8gPSB0b0lPYmplY3QoJHRoaXMpO1xuICAgIHZhciBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgdmFyIGluZGV4ID0gdG9BYnNvbHV0ZUluZGV4KGZyb21JbmRleCwgbGVuZ3RoKTtcbiAgICB2YXIgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICBpZiAoSVNfSU5DTFVERVMgJiYgZWwgIT0gZWwpIHdoaWxlIChsZW5ndGggPiBpbmRleCkge1xuICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgICAgaWYgKHZhbHVlICE9IHZhbHVlKSByZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSNpbmRleE9mIGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSBpZiAoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTykge1xuICAgICAgaWYgKE9baW5kZXhdID09PSBlbCkgcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTtcbiIsIi8vIGdldHRpbmcgdGFnIGZyb20gMTkuMS4zLjYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZygpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG52YXIgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG4vLyBFUzMgd3JvbmcgaGVyZVxudmFyIEFSRyA9IGNvZihmdW5jdGlvbiAoKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT0gJ0FyZ3VtZW50cyc7XG5cbi8vIGZhbGxiYWNrIGZvciBJRTExIFNjcmlwdCBBY2Nlc3MgRGVuaWVkIGVycm9yXG52YXIgdHJ5R2V0ID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gaXRba2V5XTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgTywgVCwgQjtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyAnVW5kZWZpbmVkJyA6IGl0ID09PSBudWxsID8gJ051bGwnXG4gICAgLy8gQEB0b1N0cmluZ1RhZyBjYXNlXG4gICAgOiB0eXBlb2YgKFQgPSB0cnlHZXQoTyA9IE9iamVjdChpdCksIFRBRykpID09ICdzdHJpbmcnID8gVFxuICAgIC8vIGJ1aWx0aW5UYWcgY2FzZVxuICAgIDogQVJHID8gY29mKE8pXG4gICAgLy8gRVMzIGFyZ3VtZW50cyBmYWxsYmFja1xuICAgIDogKEIgPSBjb2YoTykpID09ICdPYmplY3QnICYmIHR5cGVvZiBPLmNhbGxlZSA9PSAnZnVuY3Rpb24nID8gJ0FyZ3VtZW50cycgOiBCO1xufTtcbiIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xufTtcbiIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7IHZlcnNpb246ICcyLjYuOScgfTtcbmlmICh0eXBlb2YgX19lID09ICdudW1iZXInKSBfX2UgPSBjb3JlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4iLCIvLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmbiwgdGhhdCwgbGVuZ3RoKSB7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmICh0aGF0ID09PSB1bmRlZmluZWQpIHJldHVybiBmbjtcbiAgc3dpdGNoIChsZW5ndGgpIHtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbiAoYSkge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbiAoYSwgYiwgYykge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24gKC8qIC4uLmFyZ3MgKi8pIHtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG4iLCIvLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ID09IHVuZGVmaW5lZCkgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwiLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdhJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSkuYSAhPSA3O1xufSk7XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50O1xuLy8gdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCcgaW4gb2xkIElFXG52YXIgaXMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcbiIsIi8vIElFIDgtIGRvbid0IGVudW0gYnVnIGtleXNcbm1vZHVsZS5leHBvcnRzID0gKFxuICAnY29uc3RydWN0b3IsaGFzT3duUHJvcGVydHksaXNQcm90b3R5cGVPZixwcm9wZXJ0eUlzRW51bWVyYWJsZSx0b0xvY2FsZVN0cmluZyx0b1N0cmluZyx2YWx1ZU9mJ1xuKS5zcGxpdCgnLCcpO1xuIiwiLy8gYWxsIGVudW1lcmFibGUgb2JqZWN0IGtleXMsIGluY2x1ZGVzIHN5bWJvbHNcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciBnT1BTID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKTtcbnZhciBwSUUgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgcmVzdWx0ID0gZ2V0S2V5cyhpdCk7XG4gIHZhciBnZXRTeW1ib2xzID0gZ09QUy5mO1xuICBpZiAoZ2V0U3ltYm9scykge1xuICAgIHZhciBzeW1ib2xzID0gZ2V0U3ltYm9scyhpdCk7XG4gICAgdmFyIGlzRW51bSA9IHBJRS5mO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIga2V5O1xuICAgIHdoaWxlIChzeW1ib2xzLmxlbmd0aCA+IGkpIGlmIChpc0VudW0uY2FsbChpdCwga2V5ID0gc3ltYm9sc1tpKytdKSkgcmVzdWx0LnB1c2goa2V5KTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG52YXIgJGV4cG9ydCA9IGZ1bmN0aW9uICh0eXBlLCBuYW1lLCBzb3VyY2UpIHtcbiAgdmFyIElTX0ZPUkNFRCA9IHR5cGUgJiAkZXhwb3J0LkY7XG4gIHZhciBJU19HTE9CQUwgPSB0eXBlICYgJGV4cG9ydC5HO1xuICB2YXIgSVNfU1RBVElDID0gdHlwZSAmICRleHBvcnQuUztcbiAgdmFyIElTX1BST1RPID0gdHlwZSAmICRleHBvcnQuUDtcbiAgdmFyIElTX0JJTkQgPSB0eXBlICYgJGV4cG9ydC5CO1xuICB2YXIgdGFyZ2V0ID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIHx8IChnbG9iYWxbbmFtZV0gPSB7fSkgOiAoZ2xvYmFsW25hbWVdIHx8IHt9KVtQUk9UT1RZUEVdO1xuICB2YXIgZXhwb3J0cyA9IElTX0dMT0JBTCA/IGNvcmUgOiBjb3JlW25hbWVdIHx8IChjb3JlW25hbWVdID0ge30pO1xuICB2YXIgZXhwUHJvdG8gPSBleHBvcnRzW1BST1RPVFlQRV0gfHwgKGV4cG9ydHNbUFJPVE9UWVBFXSA9IHt9KTtcbiAgdmFyIGtleSwgb3duLCBvdXQsIGV4cDtcbiAgaWYgKElTX0dMT0JBTCkgc291cmNlID0gbmFtZTtcbiAgZm9yIChrZXkgaW4gc291cmNlKSB7XG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgb3duID0gIUlTX0ZPUkNFRCAmJiB0YXJnZXQgJiYgdGFyZ2V0W2tleV0gIT09IHVuZGVmaW5lZDtcbiAgICAvLyBleHBvcnQgbmF0aXZlIG9yIHBhc3NlZFxuICAgIG91dCA9IChvd24gPyB0YXJnZXQgOiBzb3VyY2UpW2tleV07XG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICBleHAgPSBJU19CSU5EICYmIG93biA/IGN0eChvdXQsIGdsb2JhbCkgOiBJU19QUk9UTyAmJiB0eXBlb2Ygb3V0ID09ICdmdW5jdGlvbicgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcbiAgICAvLyBleHRlbmQgZ2xvYmFsXG4gICAgaWYgKHRhcmdldCkgcmVkZWZpbmUodGFyZ2V0LCBrZXksIG91dCwgdHlwZSAmICRleHBvcnQuVSk7XG4gICAgLy8gZXhwb3J0XG4gICAgaWYgKGV4cG9ydHNba2V5XSAhPSBvdXQpIGhpZGUoZXhwb3J0cywga2V5LCBleHApO1xuICAgIGlmIChJU19QUk9UTyAmJiBleHBQcm90b1trZXldICE9IG91dCkgZXhwUHJvdG9ba2V5XSA9IG91dDtcbiAgfVxufTtcbmdsb2JhbC5jb3JlID0gY29yZTtcbi8vIHR5cGUgYml0bWFwXG4kZXhwb3J0LkYgPSAxOyAgIC8vIGZvcmNlZFxuJGV4cG9ydC5HID0gMjsgICAvLyBnbG9iYWxcbiRleHBvcnQuUyA9IDQ7ICAgLy8gc3RhdGljXG4kZXhwb3J0LlAgPSA4OyAgIC8vIHByb3RvXG4kZXhwb3J0LkIgPSAxNjsgIC8vIGJpbmRcbiRleHBvcnQuVyA9IDMyOyAgLy8gd3JhcFxuJGV4cG9ydC5VID0gNjQ7ICAvLyBzYWZlXG4kZXhwb3J0LlIgPSAxMjg7IC8vIHJlYWwgcHJvdG8gbWV0aG9kIGZvciBgbGlicmFyeWBcbm1vZHVsZS5leHBvcnRzID0gJGV4cG9ydDtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcbiIsIid1c2Ugc3RyaWN0JztcbnJlcXVpcmUoJy4vZXM2LnJlZ2V4cC5leGVjJyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuL19mYWlscycpO1xudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG52YXIgd2tzID0gcmVxdWlyZSgnLi9fd2tzJyk7XG52YXIgcmVnZXhwRXhlYyA9IHJlcXVpcmUoJy4vX3JlZ2V4cC1leGVjJyk7XG5cbnZhciBTUEVDSUVTID0gd2tzKCdzcGVjaWVzJyk7XG5cbnZhciBSRVBMQUNFX1NVUFBPUlRTX05BTUVEX0dST1VQUyA9ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vICNyZXBsYWNlIG5lZWRzIGJ1aWx0LWluIHN1cHBvcnQgZm9yIG5hbWVkIGdyb3Vwcy5cbiAgLy8gI21hdGNoIHdvcmtzIGZpbmUgYmVjYXVzZSBpdCBqdXN0IHJldHVybiB0aGUgZXhlYyByZXN1bHRzLCBldmVuIGlmIGl0IGhhc1xuICAvLyBhIFwiZ3JvcHNcIiBwcm9wZXJ0eS5cbiAgdmFyIHJlID0gLy4vO1xuICByZS5leGVjID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICByZXN1bHQuZ3JvdXBzID0geyBhOiAnNycgfTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuICByZXR1cm4gJycucmVwbGFjZShyZSwgJyQ8YT4nKSAhPT0gJzcnO1xufSk7XG5cbnZhciBTUExJVF9XT1JLU19XSVRIX09WRVJXUklUVEVOX0VYRUMgPSAoZnVuY3Rpb24gKCkge1xuICAvLyBDaHJvbWUgNTEgaGFzIGEgYnVnZ3kgXCJzcGxpdFwiIGltcGxlbWVudGF0aW9uIHdoZW4gUmVnRXhwI2V4ZWMgIT09IG5hdGl2ZUV4ZWNcbiAgdmFyIHJlID0gLyg/OikvO1xuICB2YXIgb3JpZ2luYWxFeGVjID0gcmUuZXhlYztcbiAgcmUuZXhlYyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG9yaWdpbmFsRXhlYy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9O1xuICB2YXIgcmVzdWx0ID0gJ2FiJy5zcGxpdChyZSk7XG4gIHJldHVybiByZXN1bHQubGVuZ3RoID09PSAyICYmIHJlc3VsdFswXSA9PT0gJ2EnICYmIHJlc3VsdFsxXSA9PT0gJ2InO1xufSkoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoS0VZLCBsZW5ndGgsIGV4ZWMpIHtcbiAgdmFyIFNZTUJPTCA9IHdrcyhLRVkpO1xuXG4gIHZhciBERUxFR0FURVNfVE9fU1lNQk9MID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBTdHJpbmcgbWV0aG9kcyBjYWxsIHN5bWJvbC1uYW1lZCBSZWdFcCBtZXRob2RzXG4gICAgdmFyIE8gPSB7fTtcbiAgICBPW1NZTUJPTF0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9O1xuICAgIHJldHVybiAnJ1tLRVldKE8pICE9IDc7XG4gIH0pO1xuXG4gIHZhciBERUxFR0FURVNfVE9fRVhFQyA9IERFTEVHQVRFU19UT19TWU1CT0wgPyAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIC8vIFN5bWJvbC1uYW1lZCBSZWdFeHAgbWV0aG9kcyBjYWxsIC5leGVjXG4gICAgdmFyIGV4ZWNDYWxsZWQgPSBmYWxzZTtcbiAgICB2YXIgcmUgPSAvYS87XG4gICAgcmUuZXhlYyA9IGZ1bmN0aW9uICgpIHsgZXhlY0NhbGxlZCA9IHRydWU7IHJldHVybiBudWxsOyB9O1xuICAgIGlmIChLRVkgPT09ICdzcGxpdCcpIHtcbiAgICAgIC8vIFJlZ0V4cFtAQHNwbGl0XSBkb2Vzbid0IGNhbGwgdGhlIHJlZ2V4J3MgZXhlYyBtZXRob2QsIGJ1dCBmaXJzdCBjcmVhdGVzXG4gICAgICAvLyBhIG5ldyBvbmUuIFdlIG5lZWQgdG8gcmV0dXJuIHRoZSBwYXRjaGVkIHJlZ2V4IHdoZW4gY3JlYXRpbmcgdGhlIG5ldyBvbmUuXG4gICAgICByZS5jb25zdHJ1Y3RvciA9IHt9O1xuICAgICAgcmUuY29uc3RydWN0b3JbU1BFQ0lFU10gPSBmdW5jdGlvbiAoKSB7IHJldHVybiByZTsgfTtcbiAgICB9XG4gICAgcmVbU1lNQk9MXSgnJyk7XG4gICAgcmV0dXJuICFleGVjQ2FsbGVkO1xuICB9KSA6IHVuZGVmaW5lZDtcblxuICBpZiAoXG4gICAgIURFTEVHQVRFU19UT19TWU1CT0wgfHxcbiAgICAhREVMRUdBVEVTX1RPX0VYRUMgfHxcbiAgICAoS0VZID09PSAncmVwbGFjZScgJiYgIVJFUExBQ0VfU1VQUE9SVFNfTkFNRURfR1JPVVBTKSB8fFxuICAgIChLRVkgPT09ICdzcGxpdCcgJiYgIVNQTElUX1dPUktTX1dJVEhfT1ZFUldSSVRURU5fRVhFQylcbiAgKSB7XG4gICAgdmFyIG5hdGl2ZVJlZ0V4cE1ldGhvZCA9IC8uL1tTWU1CT0xdO1xuICAgIHZhciBmbnMgPSBleGVjKFxuICAgICAgZGVmaW5lZCxcbiAgICAgIFNZTUJPTCxcbiAgICAgICcnW0tFWV0sXG4gICAgICBmdW5jdGlvbiBtYXliZUNhbGxOYXRpdmUobmF0aXZlTWV0aG9kLCByZWdleHAsIHN0ciwgYXJnMiwgZm9yY2VTdHJpbmdNZXRob2QpIHtcbiAgICAgICAgaWYgKHJlZ2V4cC5leGVjID09PSByZWdleHBFeGVjKSB7XG4gICAgICAgICAgaWYgKERFTEVHQVRFU19UT19TWU1CT0wgJiYgIWZvcmNlU3RyaW5nTWV0aG9kKSB7XG4gICAgICAgICAgICAvLyBUaGUgbmF0aXZlIFN0cmluZyBtZXRob2QgYWxyZWFkeSBkZWxlZ2F0ZXMgdG8gQEBtZXRob2QgKHRoaXNcbiAgICAgICAgICAgIC8vIHBvbHlmaWxsZWQgZnVuY3Rpb24pLCBsZWFzaW5nIHRvIGluZmluaXRlIHJlY3Vyc2lvbi5cbiAgICAgICAgICAgIC8vIFdlIGF2b2lkIGl0IGJ5IGRpcmVjdGx5IGNhbGxpbmcgdGhlIG5hdGl2ZSBAQG1ldGhvZCBtZXRob2QuXG4gICAgICAgICAgICByZXR1cm4geyBkb25lOiB0cnVlLCB2YWx1ZTogbmF0aXZlUmVnRXhwTWV0aG9kLmNhbGwocmVnZXhwLCBzdHIsIGFyZzIpIH07XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB7IGRvbmU6IHRydWUsIHZhbHVlOiBuYXRpdmVNZXRob2QuY2FsbChzdHIsIHJlZ2V4cCwgYXJnMikgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBkb25lOiBmYWxzZSB9O1xuICAgICAgfVxuICAgICk7XG4gICAgdmFyIHN0cmZuID0gZm5zWzBdO1xuICAgIHZhciByeGZuID0gZm5zWzFdO1xuXG4gICAgcmVkZWZpbmUoU3RyaW5nLnByb3RvdHlwZSwgS0VZLCBzdHJmbik7XG4gICAgaGlkZShSZWdFeHAucHJvdG90eXBlLCBTWU1CT0wsIGxlbmd0aCA9PSAyXG4gICAgICAvLyAyMS4yLjUuOCBSZWdFeHAucHJvdG90eXBlW0BAcmVwbGFjZV0oc3RyaW5nLCByZXBsYWNlVmFsdWUpXG4gICAgICAvLyAyMS4yLjUuMTEgUmVnRXhwLnByb3RvdHlwZVtAQHNwbGl0XShzdHJpbmcsIGxpbWl0KVxuICAgICAgPyBmdW5jdGlvbiAoc3RyaW5nLCBhcmcpIHsgcmV0dXJuIHJ4Zm4uY2FsbChzdHJpbmcsIHRoaXMsIGFyZyk7IH1cbiAgICAgIC8vIDIxLjIuNS42IFJlZ0V4cC5wcm90b3R5cGVbQEBtYXRjaF0oc3RyaW5nKVxuICAgICAgLy8gMjEuMi41LjkgUmVnRXhwLnByb3RvdHlwZVtAQHNlYXJjaF0oc3RyaW5nKVxuICAgICAgOiBmdW5jdGlvbiAoc3RyaW5nKSB7IHJldHVybiByeGZuLmNhbGwoc3RyaW5nLCB0aGlzKTsgfVxuICAgICk7XG4gIH1cbn07XG4iLCIndXNlIHN0cmljdCc7XG4vLyAyMS4yLjUuMyBnZXQgUmVnRXhwLnByb3RvdHlwZS5mbGFnc1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHRoYXQgPSBhbk9iamVjdCh0aGlzKTtcbiAgdmFyIHJlc3VsdCA9ICcnO1xuICBpZiAodGhhdC5nbG9iYWwpIHJlc3VsdCArPSAnZyc7XG4gIGlmICh0aGF0Lmlnbm9yZUNhc2UpIHJlc3VsdCArPSAnaSc7XG4gIGlmICh0aGF0Lm11bHRpbGluZSkgcmVzdWx0ICs9ICdtJztcbiAgaWYgKHRoYXQudW5pY29kZSkgcmVzdWx0ICs9ICd1JztcbiAgaWYgKHRoYXQuc3RpY2t5KSByZXN1bHQgKz0gJ3knO1xuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ25hdGl2ZS1mdW5jdGlvbi10by1zdHJpbmcnLCBGdW5jdGlvbi50b1N0cmluZyk7XG4iLCIvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxudmFyIGdsb2JhbCA9IG1vZHVsZS5leHBvcnRzID0gdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuTWF0aCA9PSBNYXRoXG4gID8gd2luZG93IDogdHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09IE1hdGggPyBzZWxmXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuY1xuICA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5pZiAodHlwZW9mIF9fZyA9PSAnbnVtYmVyJykgX19nID0gZ2xvYmFsOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4iLCJ2YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG59O1xuIiwidmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIGRQLmYob2JqZWN0LCBrZXksIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuIiwidmFyIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQ7XG5tb2R1bGUuZXhwb3J0cyA9IGRvY3VtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiIsIm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnZGl2JyksICdhJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSkuYSAhPSA3O1xufSk7XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX3NldC1wcm90bycpLnNldDtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRoYXQsIHRhcmdldCwgQykge1xuICB2YXIgUyA9IHRhcmdldC5jb25zdHJ1Y3RvcjtcbiAgdmFyIFA7XG4gIGlmIChTICE9PSBDICYmIHR5cGVvZiBTID09ICdmdW5jdGlvbicgJiYgKFAgPSBTLnByb3RvdHlwZSkgIT09IEMucHJvdG90eXBlICYmIGlzT2JqZWN0KFApICYmIHNldFByb3RvdHlwZU9mKSB7XG4gICAgc2V0UHJvdG90eXBlT2YodGhhdCwgUCk7XG4gIH0gcmV0dXJuIHRoYXQ7XG59O1xuIiwiLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3NcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCkgPyBPYmplY3QgOiBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGNvZihpdCkgPT0gJ1N0cmluZycgPyBpdC5zcGxpdCgnJykgOiBPYmplY3QoaXQpO1xufTtcbiIsIi8vIDcuMi4yIElzQXJyYXkoYXJndW1lbnQpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gaXNBcnJheShhcmcpIHtcbiAgcmV0dXJuIGNvZihhcmcpID09ICdBcnJheSc7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07XG4iLCIvLyA3LjIuOCBJc1JlZ0V4cChhcmd1bWVudClcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xudmFyIE1BVENIID0gcmVxdWlyZSgnLi9fd2tzJykoJ21hdGNoJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgaXNSZWdFeHA7XG4gIHJldHVybiBpc09iamVjdChpdCkgJiYgKChpc1JlZ0V4cCA9IGl0W01BVENIXSkgIT09IHVuZGVmaW5lZCA/ICEhaXNSZWdFeHAgOiBjb2YoaXQpID09ICdSZWdFeHAnKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgY3JlYXRlID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpO1xudmFyIGRlc2NyaXB0b3IgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG5cbi8vIDI1LjEuMi4xLjEgJUl0ZXJhdG9yUHJvdG90eXBlJVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19oaWRlJykoSXRlcmF0b3JQcm90b3R5cGUsIHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpLCBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpIHtcbiAgQ29uc3RydWN0b3IucHJvdG90eXBlID0gY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlLCB7IG5leHQ6IGRlc2NyaXB0b3IoMSwgbmV4dCkgfSk7XG4gIHNldFRvU3RyaW5nVGFnKENvbnN0cnVjdG9yLCBOQU1FICsgJyBJdGVyYXRvcicpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZID0gcmVxdWlyZSgnLi9fbGlicmFyeScpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciAkaXRlckNyZWF0ZSA9IHJlcXVpcmUoJy4vX2l0ZXItY3JlYXRlJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdwbycpO1xudmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgQlVHR1kgPSAhKFtdLmtleXMgJiYgJ25leHQnIGluIFtdLmtleXMoKSk7IC8vIFNhZmFyaSBoYXMgYnVnZ3kgaXRlcmF0b3JzIHcvbyBgbmV4dGBcbnZhciBGRl9JVEVSQVRPUiA9ICdAQGl0ZXJhdG9yJztcbnZhciBLRVlTID0gJ2tleXMnO1xudmFyIFZBTFVFUyA9ICd2YWx1ZXMnO1xuXG52YXIgcmV0dXJuVGhpcyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEJhc2UsIE5BTUUsIENvbnN0cnVjdG9yLCBuZXh0LCBERUZBVUxULCBJU19TRVQsIEZPUkNFRCkge1xuICAkaXRlckNyZWF0ZShDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCk7XG4gIHZhciBnZXRNZXRob2QgPSBmdW5jdGlvbiAoa2luZCkge1xuICAgIGlmICghQlVHR1kgJiYga2luZCBpbiBwcm90bykgcmV0dXJuIHByb3RvW2tpbmRdO1xuICAgIHN3aXRjaCAoa2luZCkge1xuICAgICAgY2FzZSBLRVlTOiByZXR1cm4gZnVuY3Rpb24ga2V5cygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICAgIGNhc2UgVkFMVUVTOiByZXR1cm4gZnVuY3Rpb24gdmFsdWVzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgIH0gcmV0dXJuIGZ1bmN0aW9uIGVudHJpZXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gIH07XG4gIHZhciBUQUcgPSBOQU1FICsgJyBJdGVyYXRvcic7XG4gIHZhciBERUZfVkFMVUVTID0gREVGQVVMVCA9PSBWQUxVRVM7XG4gIHZhciBWQUxVRVNfQlVHID0gZmFsc2U7XG4gIHZhciBwcm90byA9IEJhc2UucHJvdG90eXBlO1xuICB2YXIgJG5hdGl2ZSA9IHByb3RvW0lURVJBVE9SXSB8fCBwcm90b1tGRl9JVEVSQVRPUl0gfHwgREVGQVVMVCAmJiBwcm90b1tERUZBVUxUXTtcbiAgdmFyICRkZWZhdWx0ID0gJG5hdGl2ZSB8fCBnZXRNZXRob2QoREVGQVVMVCk7XG4gIHZhciAkZW50cmllcyA9IERFRkFVTFQgPyAhREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKCdlbnRyaWVzJykgOiB1bmRlZmluZWQ7XG4gIHZhciAkYW55TmF0aXZlID0gTkFNRSA9PSAnQXJyYXknID8gcHJvdG8uZW50cmllcyB8fCAkbmF0aXZlIDogJG5hdGl2ZTtcbiAgdmFyIG1ldGhvZHMsIGtleSwgSXRlcmF0b3JQcm90b3R5cGU7XG4gIC8vIEZpeCBuYXRpdmVcbiAgaWYgKCRhbnlOYXRpdmUpIHtcbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvdHlwZU9mKCRhbnlOYXRpdmUuY2FsbChuZXcgQmFzZSgpKSk7XG4gICAgaWYgKEl0ZXJhdG9yUHJvdG90eXBlICE9PSBPYmplY3QucHJvdG90eXBlICYmIEl0ZXJhdG9yUHJvdG90eXBlLm5leHQpIHtcbiAgICAgIC8vIFNldCBAQHRvU3RyaW5nVGFnIHRvIG5hdGl2ZSBpdGVyYXRvcnNcbiAgICAgIHNldFRvU3RyaW5nVGFnKEl0ZXJhdG9yUHJvdG90eXBlLCBUQUcsIHRydWUpO1xuICAgICAgLy8gZml4IGZvciBzb21lIG9sZCBlbmdpbmVzXG4gICAgICBpZiAoIUxJQlJBUlkgJiYgdHlwZW9mIEl0ZXJhdG9yUHJvdG90eXBlW0lURVJBVE9SXSAhPSAnZnVuY3Rpb24nKSBoaWRlKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUiwgcmV0dXJuVGhpcyk7XG4gICAgfVxuICB9XG4gIC8vIGZpeCBBcnJheSN7dmFsdWVzLCBAQGl0ZXJhdG9yfS5uYW1lIGluIFY4IC8gRkZcbiAgaWYgKERFRl9WQUxVRVMgJiYgJG5hdGl2ZSAmJiAkbmF0aXZlLm5hbWUgIT09IFZBTFVFUykge1xuICAgIFZBTFVFU19CVUcgPSB0cnVlO1xuICAgICRkZWZhdWx0ID0gZnVuY3Rpb24gdmFsdWVzKCkgeyByZXR1cm4gJG5hdGl2ZS5jYWxsKHRoaXMpOyB9O1xuICB9XG4gIC8vIERlZmluZSBpdGVyYXRvclxuICBpZiAoKCFMSUJSQVJZIHx8IEZPUkNFRCkgJiYgKEJVR0dZIHx8IFZBTFVFU19CVUcgfHwgIXByb3RvW0lURVJBVE9SXSkpIHtcbiAgICBoaWRlKHByb3RvLCBJVEVSQVRPUiwgJGRlZmF1bHQpO1xuICB9XG4gIC8vIFBsdWcgZm9yIGxpYnJhcnlcbiAgSXRlcmF0b3JzW05BTUVdID0gJGRlZmF1bHQ7XG4gIEl0ZXJhdG9yc1tUQUddID0gcmV0dXJuVGhpcztcbiAgaWYgKERFRkFVTFQpIHtcbiAgICBtZXRob2RzID0ge1xuICAgICAgdmFsdWVzOiBERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoVkFMVUVTKSxcbiAgICAgIGtleXM6IElTX1NFVCA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKEtFWVMpLFxuICAgICAgZW50cmllczogJGVudHJpZXNcbiAgICB9O1xuICAgIGlmIChGT1JDRUQpIGZvciAoa2V5IGluIG1ldGhvZHMpIHtcbiAgICAgIGlmICghKGtleSBpbiBwcm90bykpIHJlZGVmaW5lKHByb3RvLCBrZXksIG1ldGhvZHNba2V5XSk7XG4gICAgfSBlbHNlICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogKEJVR0dZIHx8IFZBTFVFU19CVUcpLCBOQU1FLCBtZXRob2RzKTtcbiAgfVxuICByZXR1cm4gbWV0aG9kcztcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChkb25lLCB2YWx1ZSkge1xuICByZXR1cm4geyB2YWx1ZTogdmFsdWUsIGRvbmU6ICEhZG9uZSB9O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge307XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZhbHNlO1xuIiwidmFyIE1FVEEgPSByZXF1aXJlKCcuL191aWQnKSgnbWV0YScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgc2V0RGVzYyA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG52YXIgaWQgPSAwO1xudmFyIGlzRXh0ZW5zaWJsZSA9IE9iamVjdC5pc0V4dGVuc2libGUgfHwgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdHJ1ZTtcbn07XG52YXIgRlJFRVpFID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gaXNFeHRlbnNpYmxlKE9iamVjdC5wcmV2ZW50RXh0ZW5zaW9ucyh7fSkpO1xufSk7XG52YXIgc2V0TWV0YSA9IGZ1bmN0aW9uIChpdCkge1xuICBzZXREZXNjKGl0LCBNRVRBLCB7IHZhbHVlOiB7XG4gICAgaTogJ08nICsgKytpZCwgLy8gb2JqZWN0IElEXG4gICAgdzoge30gICAgICAgICAgLy8gd2VhayBjb2xsZWN0aW9ucyBJRHNcbiAgfSB9KTtcbn07XG52YXIgZmFzdEtleSA9IGZ1bmN0aW9uIChpdCwgY3JlYXRlKSB7XG4gIC8vIHJldHVybiBwcmltaXRpdmUgd2l0aCBwcmVmaXhcbiAgaWYgKCFpc09iamVjdChpdCkpIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCcgPyBpdCA6ICh0eXBlb2YgaXQgPT0gJ3N0cmluZycgPyAnUycgOiAnUCcpICsgaXQ7XG4gIGlmICghaGFzKGl0LCBNRVRBKSkge1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYgKCFpc0V4dGVuc2libGUoaXQpKSByZXR1cm4gJ0YnO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYgKCFjcmVhdGUpIHJldHVybiAnRSc7XG4gICAgLy8gYWRkIG1pc3NpbmcgbWV0YWRhdGFcbiAgICBzZXRNZXRhKGl0KTtcbiAgLy8gcmV0dXJuIG9iamVjdCBJRFxuICB9IHJldHVybiBpdFtNRVRBXS5pO1xufTtcbnZhciBnZXRXZWFrID0gZnVuY3Rpb24gKGl0LCBjcmVhdGUpIHtcbiAgaWYgKCFoYXMoaXQsIE1FVEEpKSB7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZiAoIWlzRXh0ZW5zaWJsZShpdCkpIHJldHVybiB0cnVlO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYgKCFjcmVhdGUpIHJldHVybiBmYWxzZTtcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gaGFzaCB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9IHJldHVybiBpdFtNRVRBXS53O1xufTtcbi8vIGFkZCBtZXRhZGF0YSBvbiBmcmVlemUtZmFtaWx5IG1ldGhvZHMgY2FsbGluZ1xudmFyIG9uRnJlZXplID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChGUkVFWkUgJiYgbWV0YS5ORUVEICYmIGlzRXh0ZW5zaWJsZShpdCkgJiYgIWhhcyhpdCwgTUVUQSkpIHNldE1ldGEoaXQpO1xuICByZXR1cm4gaXQ7XG59O1xudmFyIG1ldGEgPSBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgS0VZOiBNRVRBLFxuICBORUVEOiBmYWxzZSxcbiAgZmFzdEtleTogZmFzdEtleSxcbiAgZ2V0V2VhazogZ2V0V2VhayxcbiAgb25GcmVlemU6IG9uRnJlZXplXG59O1xuIiwiLy8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBkUHMgPSByZXF1aXJlKCcuL19vYmplY3QtZHBzJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG52YXIgRW1wdHkgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBpZnJhbWUgT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBjcmVhdGVEaWN0ID0gZnVuY3Rpb24gKCkge1xuICAvLyBUaHJhc2gsIHdhc3RlIGFuZCBzb2RvbXk6IElFIEdDIGJ1Z1xuICB2YXIgaWZyYW1lID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdpZnJhbWUnKTtcbiAgdmFyIGkgPSBlbnVtQnVnS2V5cy5sZW5ndGg7XG4gIHZhciBsdCA9ICc8JztcbiAgdmFyIGd0ID0gJz4nO1xuICB2YXIgaWZyYW1lRG9jdW1lbnQ7XG4gIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICByZXF1aXJlKCcuL19odG1sJykuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lLnNyYyA9ICdqYXZhc2NyaXB0Oic7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2NyaXB0LXVybFxuICAvLyBjcmVhdGVEaWN0ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuT2JqZWN0O1xuICAvLyBodG1sLnJlbW92ZUNoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZURvY3VtZW50ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG4gIGlmcmFtZURvY3VtZW50Lm9wZW4oKTtcbiAgaWZyYW1lRG9jdW1lbnQud3JpdGUobHQgKyAnc2NyaXB0JyArIGd0ICsgJ2RvY3VtZW50LkY9T2JqZWN0JyArIGx0ICsgJy9zY3JpcHQnICsgZ3QpO1xuICBpZnJhbWVEb2N1bWVudC5jbG9zZSgpO1xuICBjcmVhdGVEaWN0ID0gaWZyYW1lRG9jdW1lbnQuRjtcbiAgd2hpbGUgKGktLSkgZGVsZXRlIGNyZWF0ZURpY3RbUFJPVE9UWVBFXVtlbnVtQnVnS2V5c1tpXV07XG4gIHJldHVybiBjcmVhdGVEaWN0KCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5jcmVhdGUgfHwgZnVuY3Rpb24gY3JlYXRlKE8sIFByb3BlcnRpZXMpIHtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKE8gIT09IG51bGwpIHtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gYW5PYmplY3QoTyk7XG4gICAgcmVzdWx0ID0gbmV3IEVtcHR5KCk7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IG51bGw7XG4gICAgLy8gYWRkIFwiX19wcm90b19fXCIgZm9yIE9iamVjdC5nZXRQcm90b3R5cGVPZiBwb2x5ZmlsbFxuICAgIHJlc3VsdFtJRV9QUk9UT10gPSBPO1xuICB9IGVsc2UgcmVzdWx0ID0gY3JlYXRlRGljdCgpO1xuICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogZFBzKHJlc3VsdCwgUHJvcGVydGllcyk7XG59O1xuIiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgZFAgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuIGRQKE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcykgdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCEnKTtcbiAgaWYgKCd2YWx1ZScgaW4gQXR0cmlidXRlcykgT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTtcbiIsInZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICB2YXIga2V5cyA9IGdldEtleXMoUHJvcGVydGllcyk7XG4gIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgdmFyIGkgPSAwO1xuICB2YXIgUDtcbiAgd2hpbGUgKGxlbmd0aCA+IGkpIGRQLmYoTywgUCA9IGtleXNbaSsrXSwgUHJvcGVydGllc1tQXSk7XG4gIHJldHVybiBPO1xufTtcbiIsInZhciBwSUUgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJyk7XG52YXIgZ09QRCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBnT1BEIDogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApIHtcbiAgTyA9IHRvSU9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuIGdPUEQoTywgUCk7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoaGFzKE8sIFApKSByZXR1cm4gY3JlYXRlRGVzYyghcElFLmYuY2FsbChPLCBQKSwgT1tQXSk7XG59O1xuIiwiLy8gZmFsbGJhY2sgZm9yIElFMTEgYnVnZ3kgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgd2l0aCBpZnJhbWUgYW5kIHdpbmRvd1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciBnT1BOID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4nKS5mO1xudmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbnZhciB3aW5kb3dOYW1lcyA9IHR5cGVvZiB3aW5kb3cgPT0gJ29iamVjdCcgJiYgd2luZG93ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzXG4gID8gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMod2luZG93KSA6IFtdO1xuXG52YXIgZ2V0V2luZG93TmFtZXMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZ09QTihpdCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gd2luZG93TmFtZXMuc2xpY2UoKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMuZiA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpIHtcbiAgcmV0dXJuIHdpbmRvd05hbWVzICYmIHRvU3RyaW5nLmNhbGwoaXQpID09ICdbb2JqZWN0IFdpbmRvd10nID8gZ2V0V2luZG93TmFtZXMoaXQpIDogZ09QTih0b0lPYmplY3QoaXQpKTtcbn07XG4iLCIvLyAxOS4xLjIuNyAvIDE1LjIuMy40IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGhpZGRlbktleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJykuY29uY2F0KCdsZW5ndGgnLCAncHJvdG90eXBlJyk7XG5cbmV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHx8IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoTykge1xuICByZXR1cm4gJGtleXMoTywgaGlkZGVuS2V5cyk7XG59O1xuIiwiZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbiIsIi8vIDE5LjEuMi45IC8gMTUuMi4zLjIgT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pXG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcbnZhciBPYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIChPKSB7XG4gIE8gPSB0b09iamVjdChPKTtcbiAgaWYgKGhhcyhPLCBJRV9QUk9UTykpIHJldHVybiBPW0lFX1BST1RPXTtcbiAgaWYgKHR5cGVvZiBPLmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgTyBpbnN0YW5jZW9mIE8uY29uc3RydWN0b3IpIHtcbiAgICByZXR1cm4gTy5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gIH0gcmV0dXJuIE8gaW5zdGFuY2VvZiBPYmplY3QgPyBPYmplY3RQcm90byA6IG51bGw7XG59O1xuIiwidmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciBhcnJheUluZGV4T2YgPSByZXF1aXJlKCcuL19hcnJheS1pbmNsdWRlcycpKGZhbHNlKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBuYW1lcykge1xuICB2YXIgTyA9IHRvSU9iamVjdChvYmplY3QpO1xuICB2YXIgaSA9IDA7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGtleTtcbiAgZm9yIChrZXkgaW4gTykgaWYgKGtleSAhPSBJRV9QUk9UTykgaGFzKE8sIGtleSkgJiYgcmVzdWx0LnB1c2goa2V5KTtcbiAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkgaWYgKGhhcyhPLCBrZXkgPSBuYW1lc1tpKytdKSkge1xuICAgIH5hcnJheUluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHJlc3VsdC5wdXNoKGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCIvLyAxOS4xLjIuMTQgLyAxNS4yLjMuMTQgT2JqZWN0LmtleXMoTylcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKSB7XG4gIHJldHVybiAka2V5cyhPLCBlbnVtQnVnS2V5cyk7XG59O1xuIiwiZXhwb3J0cy5mID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG4iLCIvLyBtb3N0IE9iamVjdCBtZXRob2RzIGJ5IEVTNiBzaG91bGQgYWNjZXB0IHByaW1pdGl2ZXNcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4vX2ZhaWxzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChLRVksIGV4ZWMpIHtcbiAgdmFyIGZuID0gKGNvcmUuT2JqZWN0IHx8IHt9KVtLRVldIHx8IE9iamVjdFtLRVldO1xuICB2YXIgZXhwID0ge307XG4gIGV4cFtLRVldID0gZXhlYyhmbik7XG4gICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogZmFpbHMoZnVuY3Rpb24gKCkgeyBmbigxKTsgfSksICdPYmplY3QnLCBleHApO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGJpdG1hcCwgdmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZTogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZTogdmFsdWVcbiAgfTtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBTUkMgPSByZXF1aXJlKCcuL191aWQnKSgnc3JjJyk7XG52YXIgJHRvU3RyaW5nID0gcmVxdWlyZSgnLi9fZnVuY3Rpb24tdG8tc3RyaW5nJyk7XG52YXIgVE9fU1RSSU5HID0gJ3RvU3RyaW5nJztcbnZhciBUUEwgPSAoJycgKyAkdG9TdHJpbmcpLnNwbGl0KFRPX1NUUklORyk7XG5cbnJlcXVpcmUoJy4vX2NvcmUnKS5pbnNwZWN0U291cmNlID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiAkdG9TdHJpbmcuY2FsbChpdCk7XG59O1xuXG4obW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTywga2V5LCB2YWwsIHNhZmUpIHtcbiAgdmFyIGlzRnVuY3Rpb24gPSB0eXBlb2YgdmFsID09ICdmdW5jdGlvbic7XG4gIGlmIChpc0Z1bmN0aW9uKSBoYXModmFsLCAnbmFtZScpIHx8IGhpZGUodmFsLCAnbmFtZScsIGtleSk7XG4gIGlmIChPW2tleV0gPT09IHZhbCkgcmV0dXJuO1xuICBpZiAoaXNGdW5jdGlvbikgaGFzKHZhbCwgU1JDKSB8fCBoaWRlKHZhbCwgU1JDLCBPW2tleV0gPyAnJyArIE9ba2V5XSA6IFRQTC5qb2luKFN0cmluZyhrZXkpKSk7XG4gIGlmIChPID09PSBnbG9iYWwpIHtcbiAgICBPW2tleV0gPSB2YWw7XG4gIH0gZWxzZSBpZiAoIXNhZmUpIHtcbiAgICBkZWxldGUgT1trZXldO1xuICAgIGhpZGUoTywga2V5LCB2YWwpO1xuICB9IGVsc2UgaWYgKE9ba2V5XSkge1xuICAgIE9ba2V5XSA9IHZhbDtcbiAgfSBlbHNlIHtcbiAgICBoaWRlKE8sIGtleSwgdmFsKTtcbiAgfVxuLy8gYWRkIGZha2UgRnVuY3Rpb24jdG9TdHJpbmcgZm9yIGNvcnJlY3Qgd29yayB3cmFwcGVkIG1ldGhvZHMgLyBjb25zdHJ1Y3RvcnMgd2l0aCBtZXRob2RzIGxpa2UgTG9EYXNoIGlzTmF0aXZlXG59KShGdW5jdGlvbi5wcm90b3R5cGUsIFRPX1NUUklORywgZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gIHJldHVybiB0eXBlb2YgdGhpcyA9PSAnZnVuY3Rpb24nICYmIHRoaXNbU1JDXSB8fCAkdG9TdHJpbmcuY2FsbCh0aGlzKTtcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKTtcbnZhciBidWlsdGluRXhlYyA9IFJlZ0V4cC5wcm90b3R5cGUuZXhlYztcblxuIC8vIGBSZWdFeHBFeGVjYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXJlZ2V4cGV4ZWNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFIsIFMpIHtcbiAgdmFyIGV4ZWMgPSBSLmV4ZWM7XG4gIGlmICh0eXBlb2YgZXhlYyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciByZXN1bHQgPSBleGVjLmNhbGwoUiwgUyk7XG4gICAgaWYgKHR5cGVvZiByZXN1bHQgIT09ICdvYmplY3QnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdSZWdFeHAgZXhlYyBtZXRob2QgcmV0dXJuZWQgc29tZXRoaW5nIG90aGVyIHRoYW4gYW4gT2JqZWN0IG9yIG51bGwnKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICBpZiAoY2xhc3NvZihSKSAhPT0gJ1JlZ0V4cCcpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdSZWdFeHAjZXhlYyBjYWxsZWQgb24gaW5jb21wYXRpYmxlIHJlY2VpdmVyJyk7XG4gIH1cbiAgcmV0dXJuIGJ1aWx0aW5FeGVjLmNhbGwoUiwgUyk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgcmVnZXhwRmxhZ3MgPSByZXF1aXJlKCcuL19mbGFncycpO1xuXG52YXIgbmF0aXZlRXhlYyA9IFJlZ0V4cC5wcm90b3R5cGUuZXhlYztcbi8vIFRoaXMgYWx3YXlzIHJlZmVycyB0byB0aGUgbmF0aXZlIGltcGxlbWVudGF0aW9uLCBiZWNhdXNlIHRoZVxuLy8gU3RyaW5nI3JlcGxhY2UgcG9seWZpbGwgdXNlcyAuL2ZpeC1yZWdleHAtd2VsbC1rbm93bi1zeW1ib2wtbG9naWMuanMsXG4vLyB3aGljaCBsb2FkcyB0aGlzIGZpbGUgYmVmb3JlIHBhdGNoaW5nIHRoZSBtZXRob2QuXG52YXIgbmF0aXZlUmVwbGFjZSA9IFN0cmluZy5wcm90b3R5cGUucmVwbGFjZTtcblxudmFyIHBhdGNoZWRFeGVjID0gbmF0aXZlRXhlYztcblxudmFyIExBU1RfSU5ERVggPSAnbGFzdEluZGV4JztcblxudmFyIFVQREFURVNfTEFTVF9JTkRFWF9XUk9ORyA9IChmdW5jdGlvbiAoKSB7XG4gIHZhciByZTEgPSAvYS8sXG4gICAgICByZTIgPSAvYiovZztcbiAgbmF0aXZlRXhlYy5jYWxsKHJlMSwgJ2EnKTtcbiAgbmF0aXZlRXhlYy5jYWxsKHJlMiwgJ2EnKTtcbiAgcmV0dXJuIHJlMVtMQVNUX0lOREVYXSAhPT0gMCB8fCByZTJbTEFTVF9JTkRFWF0gIT09IDA7XG59KSgpO1xuXG4vLyBub25wYXJ0aWNpcGF0aW5nIGNhcHR1cmluZyBncm91cCwgY29waWVkIGZyb20gZXM1LXNoaW0ncyBTdHJpbmcjc3BsaXQgcGF0Y2guXG52YXIgTlBDR19JTkNMVURFRCA9IC8oKT8/Ly5leGVjKCcnKVsxXSAhPT0gdW5kZWZpbmVkO1xuXG52YXIgUEFUQ0ggPSBVUERBVEVTX0xBU1RfSU5ERVhfV1JPTkcgfHwgTlBDR19JTkNMVURFRDtcblxuaWYgKFBBVENIKSB7XG4gIHBhdGNoZWRFeGVjID0gZnVuY3Rpb24gZXhlYyhzdHIpIHtcbiAgICB2YXIgcmUgPSB0aGlzO1xuICAgIHZhciBsYXN0SW5kZXgsIHJlQ29weSwgbWF0Y2gsIGk7XG5cbiAgICBpZiAoTlBDR19JTkNMVURFRCkge1xuICAgICAgcmVDb3B5ID0gbmV3IFJlZ0V4cCgnXicgKyByZS5zb3VyY2UgKyAnJCg/IVxcXFxzKScsIHJlZ2V4cEZsYWdzLmNhbGwocmUpKTtcbiAgICB9XG4gICAgaWYgKFVQREFURVNfTEFTVF9JTkRFWF9XUk9ORykgbGFzdEluZGV4ID0gcmVbTEFTVF9JTkRFWF07XG5cbiAgICBtYXRjaCA9IG5hdGl2ZUV4ZWMuY2FsbChyZSwgc3RyKTtcblxuICAgIGlmIChVUERBVEVTX0xBU1RfSU5ERVhfV1JPTkcgJiYgbWF0Y2gpIHtcbiAgICAgIHJlW0xBU1RfSU5ERVhdID0gcmUuZ2xvYmFsID8gbWF0Y2guaW5kZXggKyBtYXRjaFswXS5sZW5ndGggOiBsYXN0SW5kZXg7XG4gICAgfVxuICAgIGlmIChOUENHX0lOQ0xVREVEICYmIG1hdGNoICYmIG1hdGNoLmxlbmd0aCA+IDEpIHtcbiAgICAgIC8vIEZpeCBicm93c2VycyB3aG9zZSBgZXhlY2AgbWV0aG9kcyBkb24ndCBjb25zaXN0ZW50bHkgcmV0dXJuIGB1bmRlZmluZWRgXG4gICAgICAvLyBmb3IgTlBDRywgbGlrZSBJRTguIE5PVEU6IFRoaXMgZG9lc24nIHdvcmsgZm9yIC8oLj8pPy9cbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1sb29wLWZ1bmNcbiAgICAgIG5hdGl2ZVJlcGxhY2UuY2FsbChtYXRjaFswXSwgcmVDb3B5LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZvciAoaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoIC0gMjsgaSsrKSB7XG4gICAgICAgICAgaWYgKGFyZ3VtZW50c1tpXSA9PT0gdW5kZWZpbmVkKSBtYXRjaFtpXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1hdGNoO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHBhdGNoZWRFeGVjO1xuIiwiLy8gV29ya3Mgd2l0aCBfX3Byb3RvX18gb25seS4gT2xkIHY4IGNhbid0IHdvcmsgd2l0aCBudWxsIHByb3RvIG9iamVjdHMuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wcm90byAqL1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBjaGVjayA9IGZ1bmN0aW9uIChPLCBwcm90bykge1xuICBhbk9iamVjdChPKTtcbiAgaWYgKCFpc09iamVjdChwcm90bykgJiYgcHJvdG8gIT09IG51bGwpIHRocm93IFR5cGVFcnJvcihwcm90byArIFwiOiBjYW4ndCBzZXQgYXMgcHJvdG90eXBlIVwiKTtcbn07XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2V0OiBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgKCdfX3Byb3RvX18nIGluIHt9ID8gLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgIGZ1bmN0aW9uICh0ZXN0LCBidWdneSwgc2V0KSB7XG4gICAgICB0cnkge1xuICAgICAgICBzZXQgPSByZXF1aXJlKCcuL19jdHgnKShGdW5jdGlvbi5jYWxsLCByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpLmYoT2JqZWN0LnByb3RvdHlwZSwgJ19fcHJvdG9fXycpLnNldCwgMik7XG4gICAgICAgIHNldCh0ZXN0LCBbXSk7XG4gICAgICAgIGJ1Z2d5ID0gISh0ZXN0IGluc3RhbmNlb2YgQXJyYXkpO1xuICAgICAgfSBjYXRjaCAoZSkgeyBidWdneSA9IHRydWU7IH1cbiAgICAgIHJldHVybiBmdW5jdGlvbiBzZXRQcm90b3R5cGVPZihPLCBwcm90bykge1xuICAgICAgICBjaGVjayhPLCBwcm90byk7XG4gICAgICAgIGlmIChidWdneSkgTy5fX3Byb3RvX18gPSBwcm90bztcbiAgICAgICAgZWxzZSBzZXQoTywgcHJvdG8pO1xuICAgICAgICByZXR1cm4gTztcbiAgICAgIH07XG4gICAgfSh7fSwgZmFsc2UpIDogdW5kZWZpbmVkKSxcbiAgY2hlY2s6IGNoZWNrXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpO1xudmFyIFNQRUNJRVMgPSByZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChLRVkpIHtcbiAgdmFyIEMgPSBnbG9iYWxbS0VZXTtcbiAgaWYgKERFU0NSSVBUT1JTICYmIEMgJiYgIUNbU1BFQ0lFU10pIGRQLmYoQywgU1BFQ0lFUywge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH1cbiAgfSk7XG59O1xuIiwidmFyIGRlZiA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCB0YWcsIHN0YXQpIHtcbiAgaWYgKGl0ICYmICFoYXMoaXQgPSBzdGF0ID8gaXQgOiBpdC5wcm90b3R5cGUsIFRBRykpIGRlZihpdCwgVEFHLCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHRhZyB9KTtcbn07XG4iLCJ2YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ2tleXMnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gc2hhcmVkW2tleV0gfHwgKHNoYXJlZFtrZXldID0gdWlkKGtleSkpO1xufTtcbiIsInZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nO1xudmFyIHN0b3JlID0gZ2xvYmFsW1NIQVJFRF0gfHwgKGdsb2JhbFtTSEFSRURdID0ge30pO1xuXG4obW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHZhbHVlICE9PSB1bmRlZmluZWQgPyB2YWx1ZSA6IHt9KTtcbn0pKCd2ZXJzaW9ucycsIFtdKS5wdXNoKHtcbiAgdmVyc2lvbjogY29yZS52ZXJzaW9uLFxuICBtb2RlOiByZXF1aXJlKCcuL19saWJyYXJ5JykgPyAncHVyZScgOiAnZ2xvYmFsJyxcbiAgY29weXJpZ2h0OiAnwqkgMjAxOSBEZW5pcyBQdXNoa2FyZXYgKHpsb2lyb2NrLnJ1KSdcbn0pO1xuIiwiLy8gNy4zLjIwIFNwZWNpZXNDb25zdHJ1Y3RvcihPLCBkZWZhdWx0Q29uc3RydWN0b3IpXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG52YXIgU1BFQ0lFUyA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChPLCBEKSB7XG4gIHZhciBDID0gYW5PYmplY3QoTykuY29uc3RydWN0b3I7XG4gIHZhciBTO1xuICByZXR1cm4gQyA9PT0gdW5kZWZpbmVkIHx8IChTID0gYW5PYmplY3QoQylbU1BFQ0lFU10pID09IHVuZGVmaW5lZCA/IEQgOiBhRnVuY3Rpb24oUyk7XG59O1xuIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xuLy8gdHJ1ZSAgLT4gU3RyaW5nI2F0XG4vLyBmYWxzZSAtPiBTdHJpbmcjY29kZVBvaW50QXRcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFRPX1NUUklORykge1xuICByZXR1cm4gZnVuY3Rpb24gKHRoYXQsIHBvcykge1xuICAgIHZhciBzID0gU3RyaW5nKGRlZmluZWQodGhhdCkpO1xuICAgIHZhciBpID0gdG9JbnRlZ2VyKHBvcyk7XG4gICAgdmFyIGwgPSBzLmxlbmd0aDtcbiAgICB2YXIgYSwgYjtcbiAgICBpZiAoaSA8IDAgfHwgaSA+PSBsKSByZXR1cm4gVE9fU1RSSU5HID8gJycgOiB1bmRlZmluZWQ7XG4gICAgYSA9IHMuY2hhckNvZGVBdChpKTtcbiAgICByZXR1cm4gYSA8IDB4ZDgwMCB8fCBhID4gMHhkYmZmIHx8IGkgKyAxID09PSBsIHx8IChiID0gcy5jaGFyQ29kZUF0KGkgKyAxKSkgPCAweGRjMDAgfHwgYiA+IDB4ZGZmZlxuICAgICAgPyBUT19TVFJJTkcgPyBzLmNoYXJBdChpKSA6IGFcbiAgICAgIDogVE9fU1RSSU5HID8gcy5zbGljZShpLCBpICsgMikgOiAoYSAtIDB4ZDgwMCA8PCAxMCkgKyAoYiAtIDB4ZGMwMCkgKyAweDEwMDAwO1xuICB9O1xufTtcbiIsInZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuL19mYWlscycpO1xudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG52YXIgcXVvdCA9IC9cIi9nO1xuLy8gQi4yLjMuMi4xIENyZWF0ZUhUTUwoc3RyaW5nLCB0YWcsIGF0dHJpYnV0ZSwgdmFsdWUpXG52YXIgY3JlYXRlSFRNTCA9IGZ1bmN0aW9uIChzdHJpbmcsIHRhZywgYXR0cmlidXRlLCB2YWx1ZSkge1xuICB2YXIgUyA9IFN0cmluZyhkZWZpbmVkKHN0cmluZykpO1xuICB2YXIgcDEgPSAnPCcgKyB0YWc7XG4gIGlmIChhdHRyaWJ1dGUgIT09ICcnKSBwMSArPSAnICcgKyBhdHRyaWJ1dGUgKyAnPVwiJyArIFN0cmluZyh2YWx1ZSkucmVwbGFjZShxdW90LCAnJnF1b3Q7JykgKyAnXCInO1xuICByZXR1cm4gcDEgKyAnPicgKyBTICsgJzwvJyArIHRhZyArICc+Jztcbn07XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChOQU1FLCBleGVjKSB7XG4gIHZhciBPID0ge307XG4gIE9bTkFNRV0gPSBleGVjKGNyZWF0ZUhUTUwpO1xuICAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdGVzdCA9ICcnW05BTUVdKCdcIicpO1xuICAgIHJldHVybiB0ZXN0ICE9PSB0ZXN0LnRvTG93ZXJDYXNlKCkgfHwgdGVzdC5zcGxpdCgnXCInKS5sZW5ndGggPiAzO1xuICB9KSwgJ1N0cmluZycsIE8pO1xufTtcbiIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgbWF4ID0gTWF0aC5tYXg7XG52YXIgbWluID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbmRleCwgbGVuZ3RoKSB7XG4gIGluZGV4ID0gdG9JbnRlZ2VyKGluZGV4KTtcbiAgcmV0dXJuIGluZGV4IDwgMCA/IG1heChpbmRleCArIGxlbmd0aCwgMCkgOiBtaW4oaW5kZXgsIGxlbmd0aCk7XG59O1xuIiwiLy8gNy4xLjQgVG9JbnRlZ2VyXG52YXIgY2VpbCA9IE1hdGguY2VpbDtcbnZhciBmbG9vciA9IE1hdGguZmxvb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXNOYU4oaXQgPSAraXQpID8gMCA6IChpdCA+IDAgPyBmbG9vciA6IGNlaWwpKGl0KTtcbn07XG4iLCIvLyB0byBpbmRleGVkIG9iamVjdCwgdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpO1xudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gSU9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuIiwiLy8gNy4xLjE1IFRvTGVuZ3RoXG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIG1pbiA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ID4gMCA/IG1pbih0b0ludGVnZXIoaXQpLCAweDFmZmZmZmZmZmZmZmZmKSA6IDA7IC8vIHBvdygyLCA1MykgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07XG4iLCIvLyA3LjEuMTMgVG9PYmplY3QoYXJndW1lbnQpXG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcbiIsIi8vIDcuMS4xIFRvUHJpbWl0aXZlKGlucHV0IFssIFByZWZlcnJlZFR5cGVdKVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG4vLyBpbnN0ZWFkIG9mIHRoZSBFUzYgc3BlYyB2ZXJzaW9uLCB3ZSBkaWRuJ3QgaW1wbGVtZW50IEBAdG9QcmltaXRpdmUgY2FzZVxuLy8gYW5kIHRoZSBzZWNvbmQgYXJndW1lbnQgLSBmbGFnIC0gcHJlZmVycmVkIHR5cGUgaXMgYSBzdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBTKSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSByZXR1cm4gaXQ7XG4gIHZhciBmbiwgdmFsO1xuICBpZiAoUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKHR5cGVvZiAoZm4gPSBpdC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIGlmICghUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcbiIsInZhciBpZCA9IDA7XG52YXIgcHggPSBNYXRoLnJhbmRvbSgpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiAnU3ltYm9sKCcuY29uY2F0KGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXksICcpXycsICgrK2lkICsgcHgpLnRvU3RyaW5nKDM2KSk7XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgTElCUkFSWSA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKTtcbnZhciB3a3NFeHQgPSByZXF1aXJlKCcuL193a3MtZXh0Jyk7XG52YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZSkge1xuICB2YXIgJFN5bWJvbCA9IGNvcmUuU3ltYm9sIHx8IChjb3JlLlN5bWJvbCA9IExJQlJBUlkgPyB7fSA6IGdsb2JhbC5TeW1ib2wgfHwge30pO1xuICBpZiAobmFtZS5jaGFyQXQoMCkgIT0gJ18nICYmICEobmFtZSBpbiAkU3ltYm9sKSkgZGVmaW5lUHJvcGVydHkoJFN5bWJvbCwgbmFtZSwgeyB2YWx1ZTogd2tzRXh0LmYobmFtZSkgfSk7XG59O1xuIiwiZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fd2tzJyk7XG4iLCJ2YXIgc3RvcmUgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgnd2tzJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG52YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuU3ltYm9sO1xudmFyIFVTRV9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09ICdmdW5jdGlvbic7XG5cbnZhciAkZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuIHN0b3JlW25hbWVdIHx8IChzdG9yZVtuYW1lXSA9XG4gICAgVVNFX1NZTUJPTCAmJiBTeW1ib2xbbmFtZV0gfHwgKFVTRV9TWU1CT0wgPyBTeW1ib2wgOiB1aWQpKCdTeW1ib2wuJyArIG5hbWUpKTtcbn07XG5cbiRleHBvcnRzLnN0b3JlID0gc3RvcmU7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4vX2FkZC10by11bnNjb3BhYmxlcycpO1xudmFyIHN0ZXAgPSByZXF1aXJlKCcuL19pdGVyLXN0ZXAnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG5cbi8vIDIyLjEuMy40IEFycmF5LnByb3RvdHlwZS5lbnRyaWVzKClcbi8vIDIyLjEuMy4xMyBBcnJheS5wcm90b3R5cGUua2V5cygpXG4vLyAyMi4xLjMuMjkgQXJyYXkucHJvdG90eXBlLnZhbHVlcygpXG4vLyAyMi4xLjMuMzAgQXJyYXkucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShBcnJheSwgJ0FycmF5JywgZnVuY3Rpb24gKGl0ZXJhdGVkLCBraW5kKSB7XG4gIHRoaXMuX3QgPSB0b0lPYmplY3QoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbiAgdGhpcy5fayA9IGtpbmQ7ICAgICAgICAgICAgICAgIC8vIGtpbmRcbi8vIDIyLjEuNS4yLjEgJUFycmF5SXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24gKCkge1xuICB2YXIgTyA9IHRoaXMuX3Q7XG4gIHZhciBraW5kID0gdGhpcy5faztcbiAgdmFyIGluZGV4ID0gdGhpcy5faSsrO1xuICBpZiAoIU8gfHwgaW5kZXggPj0gTy5sZW5ndGgpIHtcbiAgICB0aGlzLl90ID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiBzdGVwKDEpO1xuICB9XG4gIGlmIChraW5kID09ICdrZXlzJykgcmV0dXJuIHN0ZXAoMCwgaW5kZXgpO1xuICBpZiAoa2luZCA9PSAndmFsdWVzJykgcmV0dXJuIHN0ZXAoMCwgT1tpbmRleF0pO1xuICByZXR1cm4gc3RlcCgwLCBbaW5kZXgsIE9baW5kZXhdXSk7XG59LCAndmFsdWVzJyk7XG5cbi8vIGFyZ3VtZW50c0xpc3RbQEBpdGVyYXRvcl0gaXMgJUFycmF5UHJvdG9fdmFsdWVzJSAoOS40LjQuNiwgOS40LjQuNylcbkl0ZXJhdG9ycy5Bcmd1bWVudHMgPSBJdGVyYXRvcnMuQXJyYXk7XG5cbmFkZFRvVW5zY29wYWJsZXMoJ2tleXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ3ZhbHVlcycpO1xuYWRkVG9VbnNjb3BhYmxlcygnZW50cmllcycpO1xuIiwidmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbnZhciBGUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGU7XG52YXIgbmFtZVJFID0gL15cXHMqZnVuY3Rpb24gKFteIChdKikvO1xudmFyIE5BTUUgPSAnbmFtZSc7XG5cbi8vIDE5LjIuNC4yIG5hbWVcbk5BTUUgaW4gRlByb3RvIHx8IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgZFAoRlByb3RvLCBOQU1FLCB7XG4gIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiAoJycgKyB0aGlzKS5tYXRjaChuYW1lUkUpWzFdO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gIH1cbn0pO1xuIiwiLy8gMTkuMS4yLjExIE9iamVjdC5pc0V4dGVuc2libGUoTylcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xuXG5yZXF1aXJlKCcuL19vYmplY3Qtc2FwJykoJ2lzRXh0ZW5zaWJsZScsIGZ1bmN0aW9uICgkaXNFeHRlbnNpYmxlKSB7XG4gIHJldHVybiBmdW5jdGlvbiBpc0V4dGVuc2libGUoaXQpIHtcbiAgICByZXR1cm4gaXNPYmplY3QoaXQpID8gJGlzRXh0ZW5zaWJsZSA/ICRpc0V4dGVuc2libGUoaXQpIDogdHJ1ZSA6IGZhbHNlO1xuICB9O1xufSk7XG4iLCIvLyAxOS4xLjIuMTQgT2JqZWN0LmtleXMoTylcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcblxucmVxdWlyZSgnLi9fb2JqZWN0LXNhcCcpKCdrZXlzJywgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZnVuY3Rpb24ga2V5cyhpdCkge1xuICAgIHJldHVybiAka2V5cyh0b09iamVjdChpdCkpO1xuICB9O1xufSk7XG4iLCIvLyAxOS4xLjIuMTUgT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zKE8pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBtZXRhID0gcmVxdWlyZSgnLi9fbWV0YScpLm9uRnJlZXplO1xuXG5yZXF1aXJlKCcuL19vYmplY3Qtc2FwJykoJ3ByZXZlbnRFeHRlbnNpb25zJywgZnVuY3Rpb24gKCRwcmV2ZW50RXh0ZW5zaW9ucykge1xuICByZXR1cm4gZnVuY3Rpb24gcHJldmVudEV4dGVuc2lvbnMoaXQpIHtcbiAgICByZXR1cm4gJHByZXZlbnRFeHRlbnNpb25zICYmIGlzT2JqZWN0KGl0KSA/ICRwcmV2ZW50RXh0ZW5zaW9ucyhtZXRhKGl0KSkgOiBpdDtcbiAgfTtcbn0pO1xuIiwiLy8gMTkuMS4zLjE5IE9iamVjdC5zZXRQcm90b3R5cGVPZihPLCBwcm90bylcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG4kZXhwb3J0KCRleHBvcnQuUywgJ09iamVjdCcsIHsgc2V0UHJvdG90eXBlT2Y6IHJlcXVpcmUoJy4vX3NldC1wcm90bycpLnNldCB9KTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8vIDE5LjEuMy42IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcoKVxudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuL19jbGFzc29mJyk7XG52YXIgdGVzdCA9IHt9O1xudGVzdFtyZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKV0gPSAneic7XG5pZiAodGVzdCArICcnICE9ICdbb2JqZWN0IHpdJykge1xuICByZXF1aXJlKCcuL19yZWRlZmluZScpKE9iamVjdC5wcm90b3R5cGUsICd0b1N0cmluZycsIGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiAnW29iamVjdCAnICsgY2xhc3NvZih0aGlzKSArICddJztcbiAgfSwgdHJ1ZSk7XG59XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgaW5oZXJpdElmUmVxdWlyZWQgPSByZXF1aXJlKCcuL19pbmhlcml0LWlmLXJlcXVpcmVkJyk7XG52YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xudmFyIGdPUE4gPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmY7XG52YXIgaXNSZWdFeHAgPSByZXF1aXJlKCcuL19pcy1yZWdleHAnKTtcbnZhciAkZmxhZ3MgPSByZXF1aXJlKCcuL19mbGFncycpO1xudmFyICRSZWdFeHAgPSBnbG9iYWwuUmVnRXhwO1xudmFyIEJhc2UgPSAkUmVnRXhwO1xudmFyIHByb3RvID0gJFJlZ0V4cC5wcm90b3R5cGU7XG52YXIgcmUxID0gL2EvZztcbnZhciByZTIgPSAvYS9nO1xuLy8gXCJuZXdcIiBjcmVhdGVzIGEgbmV3IG9iamVjdCwgb2xkIHdlYmtpdCBidWdneSBoZXJlXG52YXIgQ09SUkVDVF9ORVcgPSBuZXcgJFJlZ0V4cChyZTEpICE9PSByZTE7XG5cbmlmIChyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmICghQ09SUkVDVF9ORVcgfHwgcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJlMltyZXF1aXJlKCcuL193a3MnKSgnbWF0Y2gnKV0gPSBmYWxzZTtcbiAgLy8gUmVnRXhwIGNvbnN0cnVjdG9yIGNhbiBhbHRlciBmbGFncyBhbmQgSXNSZWdFeHAgd29ya3MgY29ycmVjdCB3aXRoIEBAbWF0Y2hcbiAgcmV0dXJuICRSZWdFeHAocmUxKSAhPSByZTEgfHwgJFJlZ0V4cChyZTIpID09IHJlMiB8fCAkUmVnRXhwKHJlMSwgJ2knKSAhPSAnL2EvaSc7XG59KSkpIHtcbiAgJFJlZ0V4cCA9IGZ1bmN0aW9uIFJlZ0V4cChwLCBmKSB7XG4gICAgdmFyIHRpUkUgPSB0aGlzIGluc3RhbmNlb2YgJFJlZ0V4cDtcbiAgICB2YXIgcGlSRSA9IGlzUmVnRXhwKHApO1xuICAgIHZhciBmaVUgPSBmID09PSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuICF0aVJFICYmIHBpUkUgJiYgcC5jb25zdHJ1Y3RvciA9PT0gJFJlZ0V4cCAmJiBmaVUgPyBwXG4gICAgICA6IGluaGVyaXRJZlJlcXVpcmVkKENPUlJFQ1RfTkVXXG4gICAgICAgID8gbmV3IEJhc2UocGlSRSAmJiAhZmlVID8gcC5zb3VyY2UgOiBwLCBmKVxuICAgICAgICA6IEJhc2UoKHBpUkUgPSBwIGluc3RhbmNlb2YgJFJlZ0V4cCkgPyBwLnNvdXJjZSA6IHAsIHBpUkUgJiYgZmlVID8gJGZsYWdzLmNhbGwocCkgOiBmKVxuICAgICAgLCB0aVJFID8gdGhpcyA6IHByb3RvLCAkUmVnRXhwKTtcbiAgfTtcbiAgdmFyIHByb3h5ID0gZnVuY3Rpb24gKGtleSkge1xuICAgIGtleSBpbiAkUmVnRXhwIHx8IGRQKCRSZWdFeHAsIGtleSwge1xuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBCYXNlW2tleV07IH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uIChpdCkgeyBCYXNlW2tleV0gPSBpdDsgfVxuICAgIH0pO1xuICB9O1xuICBmb3IgKHZhciBrZXlzID0gZ09QTihCYXNlKSwgaSA9IDA7IGtleXMubGVuZ3RoID4gaTspIHByb3h5KGtleXNbaSsrXSk7XG4gIHByb3RvLmNvbnN0cnVjdG9yID0gJFJlZ0V4cDtcbiAgJFJlZ0V4cC5wcm90b3R5cGUgPSBwcm90bztcbiAgcmVxdWlyZSgnLi9fcmVkZWZpbmUnKShnbG9iYWwsICdSZWdFeHAnLCAkUmVnRXhwKTtcbn1cblxucmVxdWlyZSgnLi9fc2V0LXNwZWNpZXMnKSgnUmVnRXhwJyk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgcmVnZXhwRXhlYyA9IHJlcXVpcmUoJy4vX3JlZ2V4cC1leGVjJyk7XG5yZXF1aXJlKCcuL19leHBvcnQnKSh7XG4gIHRhcmdldDogJ1JlZ0V4cCcsXG4gIHByb3RvOiB0cnVlLFxuICBmb3JjZWQ6IHJlZ2V4cEV4ZWMgIT09IC8uLy5leGVjXG59LCB7XG4gIGV4ZWM6IHJlZ2V4cEV4ZWNcbn0pO1xuIiwiLy8gMjEuMi41LjMgZ2V0IFJlZ0V4cC5wcm90b3R5cGUuZmxhZ3MoKVxuaWYgKHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgLy4vZy5mbGFncyAhPSAnZycpIHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmYoUmVnRXhwLnByb3RvdHlwZSwgJ2ZsYWdzJywge1xuICBjb25maWd1cmFibGU6IHRydWUsXG4gIGdldDogcmVxdWlyZSgnLi9fZmxhZ3MnKVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG52YXIgYWR2YW5jZVN0cmluZ0luZGV4ID0gcmVxdWlyZSgnLi9fYWR2YW5jZS1zdHJpbmctaW5kZXgnKTtcbnZhciByZWdFeHBFeGVjID0gcmVxdWlyZSgnLi9fcmVnZXhwLWV4ZWMtYWJzdHJhY3QnKTtcblxuLy8gQEBtYXRjaCBsb2dpY1xucmVxdWlyZSgnLi9fZml4LXJlLXdrcycpKCdtYXRjaCcsIDEsIGZ1bmN0aW9uIChkZWZpbmVkLCBNQVRDSCwgJG1hdGNoLCBtYXliZUNhbGxOYXRpdmUpIHtcbiAgcmV0dXJuIFtcbiAgICAvLyBgU3RyaW5nLnByb3RvdHlwZS5tYXRjaGAgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS5tYXRjaFxuICAgIGZ1bmN0aW9uIG1hdGNoKHJlZ2V4cCkge1xuICAgICAgdmFyIE8gPSBkZWZpbmVkKHRoaXMpO1xuICAgICAgdmFyIGZuID0gcmVnZXhwID09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IHJlZ2V4cFtNQVRDSF07XG4gICAgICByZXR1cm4gZm4gIT09IHVuZGVmaW5lZCA/IGZuLmNhbGwocmVnZXhwLCBPKSA6IG5ldyBSZWdFeHAocmVnZXhwKVtNQVRDSF0oU3RyaW5nKE8pKTtcbiAgICB9LFxuICAgIC8vIGBSZWdFeHAucHJvdG90eXBlW0BAbWF0Y2hdYCBtZXRob2RcbiAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1yZWdleHAucHJvdG90eXBlLUBAbWF0Y2hcbiAgICBmdW5jdGlvbiAocmVnZXhwKSB7XG4gICAgICB2YXIgcmVzID0gbWF5YmVDYWxsTmF0aXZlKCRtYXRjaCwgcmVnZXhwLCB0aGlzKTtcbiAgICAgIGlmIChyZXMuZG9uZSkgcmV0dXJuIHJlcy52YWx1ZTtcbiAgICAgIHZhciByeCA9IGFuT2JqZWN0KHJlZ2V4cCk7XG4gICAgICB2YXIgUyA9IFN0cmluZyh0aGlzKTtcbiAgICAgIGlmICghcnguZ2xvYmFsKSByZXR1cm4gcmVnRXhwRXhlYyhyeCwgUyk7XG4gICAgICB2YXIgZnVsbFVuaWNvZGUgPSByeC51bmljb2RlO1xuICAgICAgcngubGFzdEluZGV4ID0gMDtcbiAgICAgIHZhciBBID0gW107XG4gICAgICB2YXIgbiA9IDA7XG4gICAgICB2YXIgcmVzdWx0O1xuICAgICAgd2hpbGUgKChyZXN1bHQgPSByZWdFeHBFeGVjKHJ4LCBTKSkgIT09IG51bGwpIHtcbiAgICAgICAgdmFyIG1hdGNoU3RyID0gU3RyaW5nKHJlc3VsdFswXSk7XG4gICAgICAgIEFbbl0gPSBtYXRjaFN0cjtcbiAgICAgICAgaWYgKG1hdGNoU3RyID09PSAnJykgcngubGFzdEluZGV4ID0gYWR2YW5jZVN0cmluZ0luZGV4KFMsIHRvTGVuZ3RoKHJ4Lmxhc3RJbmRleCksIGZ1bGxVbmljb2RlKTtcbiAgICAgICAgbisrO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG4gPT09IDAgPyBudWxsIDogQTtcbiAgICB9XG4gIF07XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBhZHZhbmNlU3RyaW5nSW5kZXggPSByZXF1aXJlKCcuL19hZHZhbmNlLXN0cmluZy1pbmRleCcpO1xudmFyIHJlZ0V4cEV4ZWMgPSByZXF1aXJlKCcuL19yZWdleHAtZXhlYy1hYnN0cmFjdCcpO1xudmFyIG1heCA9IE1hdGgubWF4O1xudmFyIG1pbiA9IE1hdGgubWluO1xudmFyIGZsb29yID0gTWF0aC5mbG9vcjtcbnZhciBTVUJTVElUVVRJT05fU1lNQk9MUyA9IC9cXCQoWyQmYCddfFxcZFxcZD98PFtePl0qPikvZztcbnZhciBTVUJTVElUVVRJT05fU1lNQk9MU19OT19OQU1FRCA9IC9cXCQoWyQmYCddfFxcZFxcZD8pL2c7XG5cbnZhciBtYXliZVRvU3RyaW5nID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gaXQgOiBTdHJpbmcoaXQpO1xufTtcblxuLy8gQEByZXBsYWNlIGxvZ2ljXG5yZXF1aXJlKCcuL19maXgtcmUtd2tzJykoJ3JlcGxhY2UnLCAyLCBmdW5jdGlvbiAoZGVmaW5lZCwgUkVQTEFDRSwgJHJlcGxhY2UsIG1heWJlQ2FsbE5hdGl2ZSkge1xuICByZXR1cm4gW1xuICAgIC8vIGBTdHJpbmcucHJvdG90eXBlLnJlcGxhY2VgIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUucmVwbGFjZVxuICAgIGZ1bmN0aW9uIHJlcGxhY2Uoc2VhcmNoVmFsdWUsIHJlcGxhY2VWYWx1ZSkge1xuICAgICAgdmFyIE8gPSBkZWZpbmVkKHRoaXMpO1xuICAgICAgdmFyIGZuID0gc2VhcmNoVmFsdWUgPT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogc2VhcmNoVmFsdWVbUkVQTEFDRV07XG4gICAgICByZXR1cm4gZm4gIT09IHVuZGVmaW5lZFxuICAgICAgICA/IGZuLmNhbGwoc2VhcmNoVmFsdWUsIE8sIHJlcGxhY2VWYWx1ZSlcbiAgICAgICAgOiAkcmVwbGFjZS5jYWxsKFN0cmluZyhPKSwgc2VhcmNoVmFsdWUsIHJlcGxhY2VWYWx1ZSk7XG4gICAgfSxcbiAgICAvLyBgUmVnRXhwLnByb3RvdHlwZVtAQHJlcGxhY2VdYCBtZXRob2RcbiAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1yZWdleHAucHJvdG90eXBlLUBAcmVwbGFjZVxuICAgIGZ1bmN0aW9uIChyZWdleHAsIHJlcGxhY2VWYWx1ZSkge1xuICAgICAgdmFyIHJlcyA9IG1heWJlQ2FsbE5hdGl2ZSgkcmVwbGFjZSwgcmVnZXhwLCB0aGlzLCByZXBsYWNlVmFsdWUpO1xuICAgICAgaWYgKHJlcy5kb25lKSByZXR1cm4gcmVzLnZhbHVlO1xuXG4gICAgICB2YXIgcnggPSBhbk9iamVjdChyZWdleHApO1xuICAgICAgdmFyIFMgPSBTdHJpbmcodGhpcyk7XG4gICAgICB2YXIgZnVuY3Rpb25hbFJlcGxhY2UgPSB0eXBlb2YgcmVwbGFjZVZhbHVlID09PSAnZnVuY3Rpb24nO1xuICAgICAgaWYgKCFmdW5jdGlvbmFsUmVwbGFjZSkgcmVwbGFjZVZhbHVlID0gU3RyaW5nKHJlcGxhY2VWYWx1ZSk7XG4gICAgICB2YXIgZ2xvYmFsID0gcnguZ2xvYmFsO1xuICAgICAgaWYgKGdsb2JhbCkge1xuICAgICAgICB2YXIgZnVsbFVuaWNvZGUgPSByeC51bmljb2RlO1xuICAgICAgICByeC5sYXN0SW5kZXggPSAwO1xuICAgICAgfVxuICAgICAgdmFyIHJlc3VsdHMgPSBbXTtcbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWdFeHBFeGVjKHJ4LCBTKTtcbiAgICAgICAgaWYgKHJlc3VsdCA9PT0gbnVsbCkgYnJlYWs7XG4gICAgICAgIHJlc3VsdHMucHVzaChyZXN1bHQpO1xuICAgICAgICBpZiAoIWdsb2JhbCkgYnJlYWs7XG4gICAgICAgIHZhciBtYXRjaFN0ciA9IFN0cmluZyhyZXN1bHRbMF0pO1xuICAgICAgICBpZiAobWF0Y2hTdHIgPT09ICcnKSByeC5sYXN0SW5kZXggPSBhZHZhbmNlU3RyaW5nSW5kZXgoUywgdG9MZW5ndGgocngubGFzdEluZGV4KSwgZnVsbFVuaWNvZGUpO1xuICAgICAgfVxuICAgICAgdmFyIGFjY3VtdWxhdGVkUmVzdWx0ID0gJyc7XG4gICAgICB2YXIgbmV4dFNvdXJjZVBvc2l0aW9uID0gMDtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVzdWx0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICByZXN1bHQgPSByZXN1bHRzW2ldO1xuICAgICAgICB2YXIgbWF0Y2hlZCA9IFN0cmluZyhyZXN1bHRbMF0pO1xuICAgICAgICB2YXIgcG9zaXRpb24gPSBtYXgobWluKHRvSW50ZWdlcihyZXN1bHQuaW5kZXgpLCBTLmxlbmd0aCksIDApO1xuICAgICAgICB2YXIgY2FwdHVyZXMgPSBbXTtcbiAgICAgICAgLy8gTk9URTogVGhpcyBpcyBlcXVpdmFsZW50IHRvXG4gICAgICAgIC8vICAgY2FwdHVyZXMgPSByZXN1bHQuc2xpY2UoMSkubWFwKG1heWJlVG9TdHJpbmcpXG4gICAgICAgIC8vIGJ1dCBmb3Igc29tZSByZWFzb24gYG5hdGl2ZVNsaWNlLmNhbGwocmVzdWx0LCAxLCByZXN1bHQubGVuZ3RoKWAgKGNhbGxlZCBpblxuICAgICAgICAvLyB0aGUgc2xpY2UgcG9seWZpbGwgd2hlbiBzbGljaW5nIG5hdGl2ZSBhcnJheXMpIFwiZG9lc24ndCB3b3JrXCIgaW4gc2FmYXJpIDkgYW5kXG4gICAgICAgIC8vIGNhdXNlcyBhIGNyYXNoIChodHRwczovL3Bhc3RlYmluLmNvbS9OMjFRemVRQSkgd2hlbiB0cnlpbmcgdG8gZGVidWcgaXQuXG4gICAgICAgIGZvciAodmFyIGogPSAxOyBqIDwgcmVzdWx0Lmxlbmd0aDsgaisrKSBjYXB0dXJlcy5wdXNoKG1heWJlVG9TdHJpbmcocmVzdWx0W2pdKSk7XG4gICAgICAgIHZhciBuYW1lZENhcHR1cmVzID0gcmVzdWx0Lmdyb3VwcztcbiAgICAgICAgaWYgKGZ1bmN0aW9uYWxSZXBsYWNlKSB7XG4gICAgICAgICAgdmFyIHJlcGxhY2VyQXJncyA9IFttYXRjaGVkXS5jb25jYXQoY2FwdHVyZXMsIHBvc2l0aW9uLCBTKTtcbiAgICAgICAgICBpZiAobmFtZWRDYXB0dXJlcyAhPT0gdW5kZWZpbmVkKSByZXBsYWNlckFyZ3MucHVzaChuYW1lZENhcHR1cmVzKTtcbiAgICAgICAgICB2YXIgcmVwbGFjZW1lbnQgPSBTdHJpbmcocmVwbGFjZVZhbHVlLmFwcGx5KHVuZGVmaW5lZCwgcmVwbGFjZXJBcmdzKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVwbGFjZW1lbnQgPSBnZXRTdWJzdGl0dXRpb24obWF0Y2hlZCwgUywgcG9zaXRpb24sIGNhcHR1cmVzLCBuYW1lZENhcHR1cmVzLCByZXBsYWNlVmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwb3NpdGlvbiA+PSBuZXh0U291cmNlUG9zaXRpb24pIHtcbiAgICAgICAgICBhY2N1bXVsYXRlZFJlc3VsdCArPSBTLnNsaWNlKG5leHRTb3VyY2VQb3NpdGlvbiwgcG9zaXRpb24pICsgcmVwbGFjZW1lbnQ7XG4gICAgICAgICAgbmV4dFNvdXJjZVBvc2l0aW9uID0gcG9zaXRpb24gKyBtYXRjaGVkLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGFjY3VtdWxhdGVkUmVzdWx0ICsgUy5zbGljZShuZXh0U291cmNlUG9zaXRpb24pO1xuICAgIH1cbiAgXTtcblxuICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWdldHN1YnN0aXR1dGlvblxuICBmdW5jdGlvbiBnZXRTdWJzdGl0dXRpb24obWF0Y2hlZCwgc3RyLCBwb3NpdGlvbiwgY2FwdHVyZXMsIG5hbWVkQ2FwdHVyZXMsIHJlcGxhY2VtZW50KSB7XG4gICAgdmFyIHRhaWxQb3MgPSBwb3NpdGlvbiArIG1hdGNoZWQubGVuZ3RoO1xuICAgIHZhciBtID0gY2FwdHVyZXMubGVuZ3RoO1xuICAgIHZhciBzeW1ib2xzID0gU1VCU1RJVFVUSU9OX1NZTUJPTFNfTk9fTkFNRUQ7XG4gICAgaWYgKG5hbWVkQ2FwdHVyZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgbmFtZWRDYXB0dXJlcyA9IHRvT2JqZWN0KG5hbWVkQ2FwdHVyZXMpO1xuICAgICAgc3ltYm9scyA9IFNVQlNUSVRVVElPTl9TWU1CT0xTO1xuICAgIH1cbiAgICByZXR1cm4gJHJlcGxhY2UuY2FsbChyZXBsYWNlbWVudCwgc3ltYm9scywgZnVuY3Rpb24gKG1hdGNoLCBjaCkge1xuICAgICAgdmFyIGNhcHR1cmU7XG4gICAgICBzd2l0Y2ggKGNoLmNoYXJBdCgwKSkge1xuICAgICAgICBjYXNlICckJzogcmV0dXJuICckJztcbiAgICAgICAgY2FzZSAnJic6IHJldHVybiBtYXRjaGVkO1xuICAgICAgICBjYXNlICdgJzogcmV0dXJuIHN0ci5zbGljZSgwLCBwb3NpdGlvbik7XG4gICAgICAgIGNhc2UgXCInXCI6IHJldHVybiBzdHIuc2xpY2UodGFpbFBvcyk7XG4gICAgICAgIGNhc2UgJzwnOlxuICAgICAgICAgIGNhcHR1cmUgPSBuYW1lZENhcHR1cmVzW2NoLnNsaWNlKDEsIC0xKV07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6IC8vIFxcZFxcZD9cbiAgICAgICAgICB2YXIgbiA9ICtjaDtcbiAgICAgICAgICBpZiAobiA9PT0gMCkgcmV0dXJuIG1hdGNoO1xuICAgICAgICAgIGlmIChuID4gbSkge1xuICAgICAgICAgICAgdmFyIGYgPSBmbG9vcihuIC8gMTApO1xuICAgICAgICAgICAgaWYgKGYgPT09IDApIHJldHVybiBtYXRjaDtcbiAgICAgICAgICAgIGlmIChmIDw9IG0pIHJldHVybiBjYXB0dXJlc1tmIC0gMV0gPT09IHVuZGVmaW5lZCA/IGNoLmNoYXJBdCgxKSA6IGNhcHR1cmVzW2YgLSAxXSArIGNoLmNoYXJBdCgxKTtcbiAgICAgICAgICAgIHJldHVybiBtYXRjaDtcbiAgICAgICAgICB9XG4gICAgICAgICAgY2FwdHVyZSA9IGNhcHR1cmVzW24gLSAxXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjYXB0dXJlID09PSB1bmRlZmluZWQgPyAnJyA6IGNhcHR1cmU7XG4gICAgfSk7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaXNSZWdFeHAgPSByZXF1aXJlKCcuL19pcy1yZWdleHAnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIHNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4vX3NwZWNpZXMtY29uc3RydWN0b3InKTtcbnZhciBhZHZhbmNlU3RyaW5nSW5kZXggPSByZXF1aXJlKCcuL19hZHZhbmNlLXN0cmluZy1pbmRleCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG52YXIgY2FsbFJlZ0V4cEV4ZWMgPSByZXF1aXJlKCcuL19yZWdleHAtZXhlYy1hYnN0cmFjdCcpO1xudmFyIHJlZ2V4cEV4ZWMgPSByZXF1aXJlKCcuL19yZWdleHAtZXhlYycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcbnZhciAkbWluID0gTWF0aC5taW47XG52YXIgJHB1c2ggPSBbXS5wdXNoO1xudmFyICRTUExJVCA9ICdzcGxpdCc7XG52YXIgTEVOR1RIID0gJ2xlbmd0aCc7XG52YXIgTEFTVF9JTkRFWCA9ICdsYXN0SW5kZXgnO1xudmFyIE1BWF9VSU5UMzIgPSAweGZmZmZmZmZmO1xuXG4vLyBiYWJlbC1taW5pZnkgdHJhbnNwaWxlcyBSZWdFeHAoJ3gnLCAneScpIC0+IC94L3kgYW5kIGl0IGNhdXNlcyBTeW50YXhFcnJvclxudmFyIFNVUFBPUlRTX1kgPSAhZmFpbHMoZnVuY3Rpb24gKCkgeyBSZWdFeHAoTUFYX1VJTlQzMiwgJ3knKTsgfSk7XG5cbi8vIEBAc3BsaXQgbG9naWNcbnJlcXVpcmUoJy4vX2ZpeC1yZS13a3MnKSgnc3BsaXQnLCAyLCBmdW5jdGlvbiAoZGVmaW5lZCwgU1BMSVQsICRzcGxpdCwgbWF5YmVDYWxsTmF0aXZlKSB7XG4gIHZhciBpbnRlcm5hbFNwbGl0O1xuICBpZiAoXG4gICAgJ2FiYmMnWyRTUExJVF0oLyhiKSovKVsxXSA9PSAnYycgfHxcbiAgICAndGVzdCdbJFNQTElUXSgvKD86KS8sIC0xKVtMRU5HVEhdICE9IDQgfHxcbiAgICAnYWInWyRTUExJVF0oLyg/OmFiKSovKVtMRU5HVEhdICE9IDIgfHxcbiAgICAnLidbJFNQTElUXSgvKC4/KSguPykvKVtMRU5HVEhdICE9IDQgfHxcbiAgICAnLidbJFNQTElUXSgvKCkoKS8pW0xFTkdUSF0gPiAxIHx8XG4gICAgJydbJFNQTElUXSgvLj8vKVtMRU5HVEhdXG4gICkge1xuICAgIC8vIGJhc2VkIG9uIGVzNS1zaGltIGltcGxlbWVudGF0aW9uLCBuZWVkIHRvIHJld29yayBpdFxuICAgIGludGVybmFsU3BsaXQgPSBmdW5jdGlvbiAoc2VwYXJhdG9yLCBsaW1pdCkge1xuICAgICAgdmFyIHN0cmluZyA9IFN0cmluZyh0aGlzKTtcbiAgICAgIGlmIChzZXBhcmF0b3IgPT09IHVuZGVmaW5lZCAmJiBsaW1pdCA9PT0gMCkgcmV0dXJuIFtdO1xuICAgICAgLy8gSWYgYHNlcGFyYXRvcmAgaXMgbm90IGEgcmVnZXgsIHVzZSBuYXRpdmUgc3BsaXRcbiAgICAgIGlmICghaXNSZWdFeHAoc2VwYXJhdG9yKSkgcmV0dXJuICRzcGxpdC5jYWxsKHN0cmluZywgc2VwYXJhdG9yLCBsaW1pdCk7XG4gICAgICB2YXIgb3V0cHV0ID0gW107XG4gICAgICB2YXIgZmxhZ3MgPSAoc2VwYXJhdG9yLmlnbm9yZUNhc2UgPyAnaScgOiAnJykgK1xuICAgICAgICAgICAgICAgICAgKHNlcGFyYXRvci5tdWx0aWxpbmUgPyAnbScgOiAnJykgK1xuICAgICAgICAgICAgICAgICAgKHNlcGFyYXRvci51bmljb2RlID8gJ3UnIDogJycpICtcbiAgICAgICAgICAgICAgICAgIChzZXBhcmF0b3Iuc3RpY2t5ID8gJ3knIDogJycpO1xuICAgICAgdmFyIGxhc3RMYXN0SW5kZXggPSAwO1xuICAgICAgdmFyIHNwbGl0TGltaXQgPSBsaW1pdCA9PT0gdW5kZWZpbmVkID8gTUFYX1VJTlQzMiA6IGxpbWl0ID4+PiAwO1xuICAgICAgLy8gTWFrZSBgZ2xvYmFsYCBhbmQgYXZvaWQgYGxhc3RJbmRleGAgaXNzdWVzIGJ5IHdvcmtpbmcgd2l0aCBhIGNvcHlcbiAgICAgIHZhciBzZXBhcmF0b3JDb3B5ID0gbmV3IFJlZ0V4cChzZXBhcmF0b3Iuc291cmNlLCBmbGFncyArICdnJyk7XG4gICAgICB2YXIgbWF0Y2gsIGxhc3RJbmRleCwgbGFzdExlbmd0aDtcbiAgICAgIHdoaWxlIChtYXRjaCA9IHJlZ2V4cEV4ZWMuY2FsbChzZXBhcmF0b3JDb3B5LCBzdHJpbmcpKSB7XG4gICAgICAgIGxhc3RJbmRleCA9IHNlcGFyYXRvckNvcHlbTEFTVF9JTkRFWF07XG4gICAgICAgIGlmIChsYXN0SW5kZXggPiBsYXN0TGFzdEluZGV4KSB7XG4gICAgICAgICAgb3V0cHV0LnB1c2goc3RyaW5nLnNsaWNlKGxhc3RMYXN0SW5kZXgsIG1hdGNoLmluZGV4KSk7XG4gICAgICAgICAgaWYgKG1hdGNoW0xFTkdUSF0gPiAxICYmIG1hdGNoLmluZGV4IDwgc3RyaW5nW0xFTkdUSF0pICRwdXNoLmFwcGx5KG91dHB1dCwgbWF0Y2guc2xpY2UoMSkpO1xuICAgICAgICAgIGxhc3RMZW5ndGggPSBtYXRjaFswXVtMRU5HVEhdO1xuICAgICAgICAgIGxhc3RMYXN0SW5kZXggPSBsYXN0SW5kZXg7XG4gICAgICAgICAgaWYgKG91dHB1dFtMRU5HVEhdID49IHNwbGl0TGltaXQpIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzZXBhcmF0b3JDb3B5W0xBU1RfSU5ERVhdID09PSBtYXRjaC5pbmRleCkgc2VwYXJhdG9yQ29weVtMQVNUX0lOREVYXSsrOyAvLyBBdm9pZCBhbiBpbmZpbml0ZSBsb29wXG4gICAgICB9XG4gICAgICBpZiAobGFzdExhc3RJbmRleCA9PT0gc3RyaW5nW0xFTkdUSF0pIHtcbiAgICAgICAgaWYgKGxhc3RMZW5ndGggfHwgIXNlcGFyYXRvckNvcHkudGVzdCgnJykpIG91dHB1dC5wdXNoKCcnKTtcbiAgICAgIH0gZWxzZSBvdXRwdXQucHVzaChzdHJpbmcuc2xpY2UobGFzdExhc3RJbmRleCkpO1xuICAgICAgcmV0dXJuIG91dHB1dFtMRU5HVEhdID4gc3BsaXRMaW1pdCA/IG91dHB1dC5zbGljZSgwLCBzcGxpdExpbWl0KSA6IG91dHB1dDtcbiAgICB9O1xuICAvLyBDaGFrcmEsIFY4XG4gIH0gZWxzZSBpZiAoJzAnWyRTUExJVF0odW5kZWZpbmVkLCAwKVtMRU5HVEhdKSB7XG4gICAgaW50ZXJuYWxTcGxpdCA9IGZ1bmN0aW9uIChzZXBhcmF0b3IsIGxpbWl0KSB7XG4gICAgICByZXR1cm4gc2VwYXJhdG9yID09PSB1bmRlZmluZWQgJiYgbGltaXQgPT09IDAgPyBbXSA6ICRzcGxpdC5jYWxsKHRoaXMsIHNlcGFyYXRvciwgbGltaXQpO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgaW50ZXJuYWxTcGxpdCA9ICRzcGxpdDtcbiAgfVxuXG4gIHJldHVybiBbXG4gICAgLy8gYFN0cmluZy5wcm90b3R5cGUuc3BsaXRgIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUuc3BsaXRcbiAgICBmdW5jdGlvbiBzcGxpdChzZXBhcmF0b3IsIGxpbWl0KSB7XG4gICAgICB2YXIgTyA9IGRlZmluZWQodGhpcyk7XG4gICAgICB2YXIgc3BsaXR0ZXIgPSBzZXBhcmF0b3IgPT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogc2VwYXJhdG9yW1NQTElUXTtcbiAgICAgIHJldHVybiBzcGxpdHRlciAhPT0gdW5kZWZpbmVkXG4gICAgICAgID8gc3BsaXR0ZXIuY2FsbChzZXBhcmF0b3IsIE8sIGxpbWl0KVxuICAgICAgICA6IGludGVybmFsU3BsaXQuY2FsbChTdHJpbmcoTyksIHNlcGFyYXRvciwgbGltaXQpO1xuICAgIH0sXG4gICAgLy8gYFJlZ0V4cC5wcm90b3R5cGVbQEBzcGxpdF1gIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXJlZ2V4cC5wcm90b3R5cGUtQEBzcGxpdFxuICAgIC8vXG4gICAgLy8gTk9URTogVGhpcyBjYW5ub3QgYmUgcHJvcGVybHkgcG9seWZpbGxlZCBpbiBlbmdpbmVzIHRoYXQgZG9uJ3Qgc3VwcG9ydFxuICAgIC8vIHRoZSAneScgZmxhZy5cbiAgICBmdW5jdGlvbiAocmVnZXhwLCBsaW1pdCkge1xuICAgICAgdmFyIHJlcyA9IG1heWJlQ2FsbE5hdGl2ZShpbnRlcm5hbFNwbGl0LCByZWdleHAsIHRoaXMsIGxpbWl0LCBpbnRlcm5hbFNwbGl0ICE9PSAkc3BsaXQpO1xuICAgICAgaWYgKHJlcy5kb25lKSByZXR1cm4gcmVzLnZhbHVlO1xuXG4gICAgICB2YXIgcnggPSBhbk9iamVjdChyZWdleHApO1xuICAgICAgdmFyIFMgPSBTdHJpbmcodGhpcyk7XG4gICAgICB2YXIgQyA9IHNwZWNpZXNDb25zdHJ1Y3RvcihyeCwgUmVnRXhwKTtcblxuICAgICAgdmFyIHVuaWNvZGVNYXRjaGluZyA9IHJ4LnVuaWNvZGU7XG4gICAgICB2YXIgZmxhZ3MgPSAocnguaWdub3JlQ2FzZSA/ICdpJyA6ICcnKSArXG4gICAgICAgICAgICAgICAgICAocngubXVsdGlsaW5lID8gJ20nIDogJycpICtcbiAgICAgICAgICAgICAgICAgIChyeC51bmljb2RlID8gJ3UnIDogJycpICtcbiAgICAgICAgICAgICAgICAgIChTVVBQT1JUU19ZID8gJ3knIDogJ2cnKTtcblxuICAgICAgLy8gXig/ICsgcnggKyApIGlzIG5lZWRlZCwgaW4gY29tYmluYXRpb24gd2l0aCBzb21lIFMgc2xpY2luZywgdG9cbiAgICAgIC8vIHNpbXVsYXRlIHRoZSAneScgZmxhZy5cbiAgICAgIHZhciBzcGxpdHRlciA9IG5ldyBDKFNVUFBPUlRTX1kgPyByeCA6ICdeKD86JyArIHJ4LnNvdXJjZSArICcpJywgZmxhZ3MpO1xuICAgICAgdmFyIGxpbSA9IGxpbWl0ID09PSB1bmRlZmluZWQgPyBNQVhfVUlOVDMyIDogbGltaXQgPj4+IDA7XG4gICAgICBpZiAobGltID09PSAwKSByZXR1cm4gW107XG4gICAgICBpZiAoUy5sZW5ndGggPT09IDApIHJldHVybiBjYWxsUmVnRXhwRXhlYyhzcGxpdHRlciwgUykgPT09IG51bGwgPyBbU10gOiBbXTtcbiAgICAgIHZhciBwID0gMDtcbiAgICAgIHZhciBxID0gMDtcbiAgICAgIHZhciBBID0gW107XG4gICAgICB3aGlsZSAocSA8IFMubGVuZ3RoKSB7XG4gICAgICAgIHNwbGl0dGVyLmxhc3RJbmRleCA9IFNVUFBPUlRTX1kgPyBxIDogMDtcbiAgICAgICAgdmFyIHogPSBjYWxsUmVnRXhwRXhlYyhzcGxpdHRlciwgU1VQUE9SVFNfWSA/IFMgOiBTLnNsaWNlKHEpKTtcbiAgICAgICAgdmFyIGU7XG4gICAgICAgIGlmIChcbiAgICAgICAgICB6ID09PSBudWxsIHx8XG4gICAgICAgICAgKGUgPSAkbWluKHRvTGVuZ3RoKHNwbGl0dGVyLmxhc3RJbmRleCArIChTVVBQT1JUU19ZID8gMCA6IHEpKSwgUy5sZW5ndGgpKSA9PT0gcFxuICAgICAgICApIHtcbiAgICAgICAgICBxID0gYWR2YW5jZVN0cmluZ0luZGV4KFMsIHEsIHVuaWNvZGVNYXRjaGluZyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgQS5wdXNoKFMuc2xpY2UocCwgcSkpO1xuICAgICAgICAgIGlmIChBLmxlbmd0aCA9PT0gbGltKSByZXR1cm4gQTtcbiAgICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8PSB6Lmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgICAgICAgQS5wdXNoKHpbaV0pO1xuICAgICAgICAgICAgaWYgKEEubGVuZ3RoID09PSBsaW0pIHJldHVybiBBO1xuICAgICAgICAgIH1cbiAgICAgICAgICBxID0gcCA9IGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIEEucHVzaChTLnNsaWNlKHApKTtcbiAgICAgIHJldHVybiBBO1xuICAgIH1cbiAgXTtcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xucmVxdWlyZSgnLi9lczYucmVnZXhwLmZsYWdzJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciAkZmxhZ3MgPSByZXF1aXJlKCcuL19mbGFncycpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKTtcbnZhciBUT19TVFJJTkcgPSAndG9TdHJpbmcnO1xudmFyICR0b1N0cmluZyA9IC8uL1tUT19TVFJJTkddO1xuXG52YXIgZGVmaW5lID0gZnVuY3Rpb24gKGZuKSB7XG4gIHJlcXVpcmUoJy4vX3JlZGVmaW5lJykoUmVnRXhwLnByb3RvdHlwZSwgVE9fU1RSSU5HLCBmbiwgdHJ1ZSk7XG59O1xuXG4vLyAyMS4yLjUuMTQgUmVnRXhwLnByb3RvdHlwZS50b1N0cmluZygpXG5pZiAocmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7IHJldHVybiAkdG9TdHJpbmcuY2FsbCh7IHNvdXJjZTogJ2EnLCBmbGFnczogJ2InIH0pICE9ICcvYS9iJzsgfSkpIHtcbiAgZGVmaW5lKGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHZhciBSID0gYW5PYmplY3QodGhpcyk7XG4gICAgcmV0dXJuICcvJy5jb25jYXQoUi5zb3VyY2UsICcvJyxcbiAgICAgICdmbGFncycgaW4gUiA/IFIuZmxhZ3MgOiAhREVTQ1JJUFRPUlMgJiYgUiBpbnN0YW5jZW9mIFJlZ0V4cCA/ICRmbGFncy5jYWxsKFIpIDogdW5kZWZpbmVkKTtcbiAgfSk7XG4vLyBGRjQ0LSBSZWdFeHAjdG9TdHJpbmcgaGFzIGEgd3JvbmcgbmFtZVxufSBlbHNlIGlmICgkdG9TdHJpbmcubmFtZSAhPSBUT19TVFJJTkcpIHtcbiAgZGVmaW5lKGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiAkdG9TdHJpbmcuY2FsbCh0aGlzKTtcbiAgfSk7XG59XG4iLCIndXNlIHN0cmljdCc7XG4vLyBCLjIuMy4xMCBTdHJpbmcucHJvdG90eXBlLmxpbmsodXJsKVxucmVxdWlyZSgnLi9fc3RyaW5nLWh0bWwnKSgnbGluaycsIGZ1bmN0aW9uIChjcmVhdGVIVE1MKSB7XG4gIHJldHVybiBmdW5jdGlvbiBsaW5rKHVybCkge1xuICAgIHJldHVybiBjcmVhdGVIVE1MKHRoaXMsICdhJywgJ2hyZWYnLCB1cmwpO1xuICB9O1xufSk7XG4iLCIndXNlIHN0cmljdCc7XG4vLyBCLjIuMy4xMyBTdHJpbmcucHJvdG90eXBlLnN1YigpXG5yZXF1aXJlKCcuL19zdHJpbmctaHRtbCcpKCdzdWInLCBmdW5jdGlvbiAoY3JlYXRlSFRNTCkge1xuICByZXR1cm4gZnVuY3Rpb24gc3ViKCkge1xuICAgIHJldHVybiBjcmVhdGVIVE1MKHRoaXMsICdzdWInLCAnJywgJycpO1xuICB9O1xufSk7XG4iLCIndXNlIHN0cmljdCc7XG4vLyBFQ01BU2NyaXB0IDYgc3ltYm9scyBzaGltXG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgTUVUQSA9IHJlcXVpcmUoJy4vX21ldGEnKS5LRVk7XG52YXIgJGZhaWxzID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcbnZhciBzaGFyZWQgPSByZXF1aXJlKCcuL19zaGFyZWQnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG52YXIgd2tzID0gcmVxdWlyZSgnLi9fd2tzJyk7XG52YXIgd2tzRXh0ID0gcmVxdWlyZSgnLi9fd2tzLWV4dCcpO1xudmFyIHdrc0RlZmluZSA9IHJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKTtcbnZhciBlbnVtS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0ta2V5cycpO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuL19pcy1hcnJheScpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG52YXIgX2NyZWF0ZSA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKTtcbnZhciBnT1BORXh0ID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4tZXh0Jyk7XG52YXIgJEdPUEQgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpO1xudmFyICRHT1BTID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKTtcbnZhciAkRFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG52YXIgZ09QRCA9ICRHT1BELmY7XG52YXIgZFAgPSAkRFAuZjtcbnZhciBnT1BOID0gZ09QTkV4dC5mO1xudmFyICRTeW1ib2wgPSBnbG9iYWwuU3ltYm9sO1xudmFyICRKU09OID0gZ2xvYmFsLkpTT047XG52YXIgX3N0cmluZ2lmeSA9ICRKU09OICYmICRKU09OLnN0cmluZ2lmeTtcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcbnZhciBISURERU4gPSB3a3MoJ19oaWRkZW4nKTtcbnZhciBUT19QUklNSVRJVkUgPSB3a3MoJ3RvUHJpbWl0aXZlJyk7XG52YXIgaXNFbnVtID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG52YXIgU3ltYm9sUmVnaXN0cnkgPSBzaGFyZWQoJ3N5bWJvbC1yZWdpc3RyeScpO1xudmFyIEFsbFN5bWJvbHMgPSBzaGFyZWQoJ3N5bWJvbHMnKTtcbnZhciBPUFN5bWJvbHMgPSBzaGFyZWQoJ29wLXN5bWJvbHMnKTtcbnZhciBPYmplY3RQcm90byA9IE9iamVjdFtQUk9UT1RZUEVdO1xudmFyIFVTRV9OQVRJVkUgPSB0eXBlb2YgJFN5bWJvbCA9PSAnZnVuY3Rpb24nICYmICEhJEdPUFMuZjtcbnZhciBRT2JqZWN0ID0gZ2xvYmFsLlFPYmplY3Q7XG4vLyBEb24ndCB1c2Ugc2V0dGVycyBpbiBRdCBTY3JpcHQsIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy8xNzNcbnZhciBzZXR0ZXIgPSAhUU9iamVjdCB8fCAhUU9iamVjdFtQUk9UT1RZUEVdIHx8ICFRT2JqZWN0W1BST1RPVFlQRV0uZmluZENoaWxkO1xuXG4vLyBmYWxsYmFjayBmb3Igb2xkIEFuZHJvaWQsIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvdjgvaXNzdWVzL2RldGFpbD9pZD02ODdcbnZhciBzZXRTeW1ib2xEZXNjID0gREVTQ1JJUFRPUlMgJiYgJGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIF9jcmVhdGUoZFAoe30sICdhJywge1xuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZFAodGhpcywgJ2EnLCB7IHZhbHVlOiA3IH0pLmE7IH1cbiAgfSkpLmEgIT0gNztcbn0pID8gZnVuY3Rpb24gKGl0LCBrZXksIEQpIHtcbiAgdmFyIHByb3RvRGVzYyA9IGdPUEQoT2JqZWN0UHJvdG8sIGtleSk7XG4gIGlmIChwcm90b0Rlc2MpIGRlbGV0ZSBPYmplY3RQcm90b1trZXldO1xuICBkUChpdCwga2V5LCBEKTtcbiAgaWYgKHByb3RvRGVzYyAmJiBpdCAhPT0gT2JqZWN0UHJvdG8pIGRQKE9iamVjdFByb3RvLCBrZXksIHByb3RvRGVzYyk7XG59IDogZFA7XG5cbnZhciB3cmFwID0gZnVuY3Rpb24gKHRhZykge1xuICB2YXIgc3ltID0gQWxsU3ltYm9sc1t0YWddID0gX2NyZWF0ZSgkU3ltYm9sW1BST1RPVFlQRV0pO1xuICBzeW0uX2sgPSB0YWc7XG4gIHJldHVybiBzeW07XG59O1xuXG52YXIgaXNTeW1ib2wgPSBVU0VfTkFUSVZFICYmIHR5cGVvZiAkU3ltYm9sLml0ZXJhdG9yID09ICdzeW1ib2wnID8gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCc7XG59IDogZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCBpbnN0YW5jZW9mICRTeW1ib2w7XG59O1xuXG52YXIgJGRlZmluZVByb3BlcnR5ID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgRCkge1xuICBpZiAoaXQgPT09IE9iamVjdFByb3RvKSAkZGVmaW5lUHJvcGVydHkoT1BTeW1ib2xzLCBrZXksIEQpO1xuICBhbk9iamVjdChpdCk7XG4gIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEQpO1xuICBpZiAoaGFzKEFsbFN5bWJvbHMsIGtleSkpIHtcbiAgICBpZiAoIUQuZW51bWVyYWJsZSkge1xuICAgICAgaWYgKCFoYXMoaXQsIEhJRERFTikpIGRQKGl0LCBISURERU4sIGNyZWF0ZURlc2MoMSwge30pKTtcbiAgICAgIGl0W0hJRERFTl1ba2V5XSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKSBpdFtISURERU5dW2tleV0gPSBmYWxzZTtcbiAgICAgIEQgPSBfY3JlYXRlKEQsIHsgZW51bWVyYWJsZTogY3JlYXRlRGVzYygwLCBmYWxzZSkgfSk7XG4gICAgfSByZXR1cm4gc2V0U3ltYm9sRGVzYyhpdCwga2V5LCBEKTtcbiAgfSByZXR1cm4gZFAoaXQsIGtleSwgRCk7XG59O1xudmFyICRkZWZpbmVQcm9wZXJ0aWVzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhpdCwgUCkge1xuICBhbk9iamVjdChpdCk7XG4gIHZhciBrZXlzID0gZW51bUtleXMoUCA9IHRvSU9iamVjdChQKSk7XG4gIHZhciBpID0gMDtcbiAgdmFyIGwgPSBrZXlzLmxlbmd0aDtcbiAgdmFyIGtleTtcbiAgd2hpbGUgKGwgPiBpKSAkZGVmaW5lUHJvcGVydHkoaXQsIGtleSA9IGtleXNbaSsrXSwgUFtrZXldKTtcbiAgcmV0dXJuIGl0O1xufTtcbnZhciAkY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKGl0LCBQKSB7XG4gIHJldHVybiBQID09PSB1bmRlZmluZWQgPyBfY3JlYXRlKGl0KSA6ICRkZWZpbmVQcm9wZXJ0aWVzKF9jcmVhdGUoaXQpLCBQKTtcbn07XG52YXIgJHByb3BlcnR5SXNFbnVtZXJhYmxlID0gZnVuY3Rpb24gcHJvcGVydHlJc0VudW1lcmFibGUoa2V5KSB7XG4gIHZhciBFID0gaXNFbnVtLmNhbGwodGhpcywga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKSk7XG4gIGlmICh0aGlzID09PSBPYmplY3RQcm90byAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhaGFzKE9QU3ltYm9scywga2V5KSkgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gRSB8fCAhaGFzKHRoaXMsIGtleSkgfHwgIWhhcyhBbGxTeW1ib2xzLCBrZXkpIHx8IGhhcyh0aGlzLCBISURERU4pICYmIHRoaXNbSElEREVOXVtrZXldID8gRSA6IHRydWU7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSkge1xuICBpdCA9IHRvSU9iamVjdChpdCk7XG4gIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSk7XG4gIGlmIChpdCA9PT0gT2JqZWN0UHJvdG8gJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIWhhcyhPUFN5bWJvbHMsIGtleSkpIHJldHVybjtcbiAgdmFyIEQgPSBnT1BEKGl0LCBrZXkpO1xuICBpZiAoRCAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhKGhhcyhpdCwgSElEREVOKSAmJiBpdFtISURERU5dW2tleV0pKSBELmVudW1lcmFibGUgPSB0cnVlO1xuICByZXR1cm4gRDtcbn07XG52YXIgJGdldE93blByb3BlcnR5TmFtZXMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KSB7XG4gIHZhciBuYW1lcyA9IGdPUE4odG9JT2JqZWN0KGl0KSk7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGkgPSAwO1xuICB2YXIga2V5O1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkge1xuICAgIGlmICghaGFzKEFsbFN5bWJvbHMsIGtleSA9IG5hbWVzW2krK10pICYmIGtleSAhPSBISURERU4gJiYga2V5ICE9IE1FVEEpIHJlc3VsdC5wdXNoKGtleSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgJGdldE93blByb3BlcnR5U3ltYm9scyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5U3ltYm9scyhpdCkge1xuICB2YXIgSVNfT1AgPSBpdCA9PT0gT2JqZWN0UHJvdG87XG4gIHZhciBuYW1lcyA9IGdPUE4oSVNfT1AgPyBPUFN5bWJvbHMgOiB0b0lPYmplY3QoaXQpKTtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIgaSA9IDA7XG4gIHZhciBrZXk7XG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSB7XG4gICAgaWYgKGhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSAmJiAoSVNfT1AgPyBoYXMoT2JqZWN0UHJvdG8sIGtleSkgOiB0cnVlKSkgcmVzdWx0LnB1c2goQWxsU3ltYm9sc1trZXldKTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcblxuLy8gMTkuNC4xLjEgU3ltYm9sKFtkZXNjcmlwdGlvbl0pXG5pZiAoIVVTRV9OQVRJVkUpIHtcbiAgJFN5bWJvbCA9IGZ1bmN0aW9uIFN5bWJvbCgpIHtcbiAgICBpZiAodGhpcyBpbnN0YW5jZW9mICRTeW1ib2wpIHRocm93IFR5cGVFcnJvcignU3ltYm9sIGlzIG5vdCBhIGNvbnN0cnVjdG9yIScpO1xuICAgIHZhciB0YWcgPSB1aWQoYXJndW1lbnRzLmxlbmd0aCA+IDAgPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQpO1xuICAgIHZhciAkc2V0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICBpZiAodGhpcyA9PT0gT2JqZWN0UHJvdG8pICRzZXQuY2FsbChPUFN5bWJvbHMsIHZhbHVlKTtcbiAgICAgIGlmIChoYXModGhpcywgSElEREVOKSAmJiBoYXModGhpc1tISURERU5dLCB0YWcpKSB0aGlzW0hJRERFTl1bdGFnXSA9IGZhbHNlO1xuICAgICAgc2V0U3ltYm9sRGVzYyh0aGlzLCB0YWcsIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbiAgICB9O1xuICAgIGlmIChERVNDUklQVE9SUyAmJiBzZXR0ZXIpIHNldFN5bWJvbERlc2MoT2JqZWN0UHJvdG8sIHRhZywgeyBjb25maWd1cmFibGU6IHRydWUsIHNldDogJHNldCB9KTtcbiAgICByZXR1cm4gd3JhcCh0YWcpO1xuICB9O1xuICByZWRlZmluZSgkU3ltYm9sW1BST1RPVFlQRV0sICd0b1N0cmluZycsIGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLl9rO1xuICB9KTtcblxuICAkR09QRC5mID0gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbiAgJERQLmYgPSAkZGVmaW5lUHJvcGVydHk7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1nb3BuJykuZiA9IGdPUE5FeHQuZiA9ICRnZXRPd25Qcm9wZXJ0eU5hbWVzO1xuICByZXF1aXJlKCcuL19vYmplY3QtcGllJykuZiA9ICRwcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiAgJEdPUFMuZiA9ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cbiAgaWYgKERFU0NSSVBUT1JTICYmICFyZXF1aXJlKCcuL19saWJyYXJ5JykpIHtcbiAgICByZWRlZmluZShPYmplY3RQcm90bywgJ3Byb3BlcnR5SXNFbnVtZXJhYmxlJywgJHByb3BlcnR5SXNFbnVtZXJhYmxlLCB0cnVlKTtcbiAgfVxuXG4gIHdrc0V4dC5mID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICByZXR1cm4gd3JhcCh3a3MobmFtZSkpO1xuICB9O1xufVxuXG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCB7IFN5bWJvbDogJFN5bWJvbCB9KTtcblxuZm9yICh2YXIgZXM2U3ltYm9scyA9IChcbiAgLy8gMTkuNC4yLjIsIDE5LjQuMi4zLCAxOS40LjIuNCwgMTkuNC4yLjYsIDE5LjQuMi44LCAxOS40LjIuOSwgMTkuNC4yLjEwLCAxOS40LjIuMTEsIDE5LjQuMi4xMiwgMTkuNC4yLjEzLCAxOS40LjIuMTRcbiAgJ2hhc0luc3RhbmNlLGlzQ29uY2F0U3ByZWFkYWJsZSxpdGVyYXRvcixtYXRjaCxyZXBsYWNlLHNlYXJjaCxzcGVjaWVzLHNwbGl0LHRvUHJpbWl0aXZlLHRvU3RyaW5nVGFnLHVuc2NvcGFibGVzJ1xuKS5zcGxpdCgnLCcpLCBqID0gMDsgZXM2U3ltYm9scy5sZW5ndGggPiBqOyl3a3MoZXM2U3ltYm9sc1tqKytdKTtcblxuZm9yICh2YXIgd2VsbEtub3duU3ltYm9scyA9ICRrZXlzKHdrcy5zdG9yZSksIGsgPSAwOyB3ZWxsS25vd25TeW1ib2xzLmxlbmd0aCA+IGs7KSB3a3NEZWZpbmUod2VsbEtub3duU3ltYm9sc1trKytdKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgJ1N5bWJvbCcsIHtcbiAgLy8gMTkuNC4yLjEgU3ltYm9sLmZvcihrZXkpXG4gICdmb3InOiBmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIGhhcyhTeW1ib2xSZWdpc3RyeSwga2V5ICs9ICcnKVxuICAgICAgPyBTeW1ib2xSZWdpc3RyeVtrZXldXG4gICAgICA6IFN5bWJvbFJlZ2lzdHJ5W2tleV0gPSAkU3ltYm9sKGtleSk7XG4gIH0sXG4gIC8vIDE5LjQuMi41IFN5bWJvbC5rZXlGb3Ioc3ltKVxuICBrZXlGb3I6IGZ1bmN0aW9uIGtleUZvcihzeW0pIHtcbiAgICBpZiAoIWlzU3ltYm9sKHN5bSkpIHRocm93IFR5cGVFcnJvcihzeW0gKyAnIGlzIG5vdCBhIHN5bWJvbCEnKTtcbiAgICBmb3IgKHZhciBrZXkgaW4gU3ltYm9sUmVnaXN0cnkpIGlmIChTeW1ib2xSZWdpc3RyeVtrZXldID09PSBzeW0pIHJldHVybiBrZXk7XG4gIH0sXG4gIHVzZVNldHRlcjogZnVuY3Rpb24gKCkgeyBzZXR0ZXIgPSB0cnVlOyB9LFxuICB1c2VTaW1wbGU6IGZ1bmN0aW9uICgpIHsgc2V0dGVyID0gZmFsc2U7IH1cbn0pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCAnT2JqZWN0Jywge1xuICAvLyAxOS4xLjIuMiBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG4gIGNyZWF0ZTogJGNyZWF0ZSxcbiAgLy8gMTkuMS4yLjQgT2JqZWN0LmRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpXG4gIGRlZmluZVByb3BlcnR5OiAkZGVmaW5lUHJvcGVydHksXG4gIC8vIDE5LjEuMi4zIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpXG4gIGRlZmluZVByb3BlcnRpZXM6ICRkZWZpbmVQcm9wZXJ0aWVzLFxuICAvLyAxOS4xLjIuNiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApXG4gIGdldE93blByb3BlcnR5RGVzY3JpcHRvcjogJGdldE93blByb3BlcnR5RGVzY3JpcHRvcixcbiAgLy8gMTkuMS4yLjcgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbiAgZ2V0T3duUHJvcGVydHlOYW1lczogJGdldE93blByb3BlcnR5TmFtZXMsXG4gIC8vIDE5LjEuMi44IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoTylcbiAgZ2V0T3duUHJvcGVydHlTeW1ib2xzOiAkZ2V0T3duUHJvcGVydHlTeW1ib2xzXG59KTtcblxuLy8gQ2hyb21lIDM4IGFuZCAzOSBgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9sc2AgZmFpbHMgb24gcHJpbWl0aXZlc1xuLy8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzQ0M1xudmFyIEZBSUxTX09OX1BSSU1JVElWRVMgPSAkZmFpbHMoZnVuY3Rpb24gKCkgeyAkR09QUy5mKDEpOyB9KTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiBGQUlMU19PTl9QUklNSVRJVkVTLCAnT2JqZWN0Jywge1xuICBnZXRPd25Qcm9wZXJ0eVN5bWJvbHM6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5U3ltYm9scyhpdCkge1xuICAgIHJldHVybiAkR09QUy5mKHRvT2JqZWN0KGl0KSk7XG4gIH1cbn0pO1xuXG4vLyAyNC4zLjIgSlNPTi5zdHJpbmdpZnkodmFsdWUgWywgcmVwbGFjZXIgWywgc3BhY2VdXSlcbiRKU09OICYmICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKCFVU0VfTkFUSVZFIHx8ICRmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHZhciBTID0gJFN5bWJvbCgpO1xuICAvLyBNUyBFZGdlIGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyB7fVxuICAvLyBXZWJLaXQgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIG51bGxcbiAgLy8gVjggdGhyb3dzIG9uIGJveGVkIHN5bWJvbHNcbiAgcmV0dXJuIF9zdHJpbmdpZnkoW1NdKSAhPSAnW251bGxdJyB8fCBfc3RyaW5naWZ5KHsgYTogUyB9KSAhPSAne30nIHx8IF9zdHJpbmdpZnkoT2JqZWN0KFMpKSAhPSAne30nO1xufSkpLCAnSlNPTicsIHtcbiAgc3RyaW5naWZ5OiBmdW5jdGlvbiBzdHJpbmdpZnkoaXQpIHtcbiAgICB2YXIgYXJncyA9IFtpdF07XG4gICAgdmFyIGkgPSAxO1xuICAgIHZhciByZXBsYWNlciwgJHJlcGxhY2VyO1xuICAgIHdoaWxlIChhcmd1bWVudHMubGVuZ3RoID4gaSkgYXJncy5wdXNoKGFyZ3VtZW50c1tpKytdKTtcbiAgICAkcmVwbGFjZXIgPSByZXBsYWNlciA9IGFyZ3NbMV07XG4gICAgaWYgKCFpc09iamVjdChyZXBsYWNlcikgJiYgaXQgPT09IHVuZGVmaW5lZCB8fCBpc1N5bWJvbChpdCkpIHJldHVybjsgLy8gSUU4IHJldHVybnMgc3RyaW5nIG9uIHVuZGVmaW5lZFxuICAgIGlmICghaXNBcnJheShyZXBsYWNlcikpIHJlcGxhY2VyID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgIGlmICh0eXBlb2YgJHJlcGxhY2VyID09ICdmdW5jdGlvbicpIHZhbHVlID0gJHJlcGxhY2VyLmNhbGwodGhpcywga2V5LCB2YWx1ZSk7XG4gICAgICBpZiAoIWlzU3ltYm9sKHZhbHVlKSkgcmV0dXJuIHZhbHVlO1xuICAgIH07XG4gICAgYXJnc1sxXSA9IHJlcGxhY2VyO1xuICAgIHJldHVybiBfc3RyaW5naWZ5LmFwcGx5KCRKU09OLCBhcmdzKTtcbiAgfVxufSk7XG5cbi8vIDE5LjQuMy40IFN5bWJvbC5wcm90b3R5cGVbQEB0b1ByaW1pdGl2ZV0oaGludClcbiRTeW1ib2xbUFJPVE9UWVBFXVtUT19QUklNSVRJVkVdIHx8IHJlcXVpcmUoJy4vX2hpZGUnKSgkU3ltYm9sW1BST1RPVFlQRV0sIFRPX1BSSU1JVElWRSwgJFN5bWJvbFtQUk9UT1RZUEVdLnZhbHVlT2YpO1xuLy8gMTkuNC4zLjUgU3ltYm9sLnByb3RvdHlwZVtAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoJFN5bWJvbCwgJ1N5bWJvbCcpO1xuLy8gMjAuMi4xLjkgTWF0aFtAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoTWF0aCwgJ01hdGgnLCB0cnVlKTtcbi8vIDI0LjMuMyBKU09OW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZyhnbG9iYWwuSlNPTiwgJ0pTT04nLCB0cnVlKTtcbiIsInJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKSgnYXN5bmNJdGVyYXRvcicpO1xuIiwidmFyICRpdGVyYXRvcnMgPSByZXF1aXJlKCcuL2VzNi5hcnJheS5pdGVyYXRvcicpO1xudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyIHdrcyA9IHJlcXVpcmUoJy4vX3drcycpO1xudmFyIElURVJBVE9SID0gd2tzKCdpdGVyYXRvcicpO1xudmFyIFRPX1NUUklOR19UQUcgPSB3a3MoJ3RvU3RyaW5nVGFnJyk7XG52YXIgQXJyYXlWYWx1ZXMgPSBJdGVyYXRvcnMuQXJyYXk7XG5cbnZhciBET01JdGVyYWJsZXMgPSB7XG4gIENTU1J1bGVMaXN0OiB0cnVlLCAvLyBUT0RPOiBOb3Qgc3BlYyBjb21wbGlhbnQsIHNob3VsZCBiZSBmYWxzZS5cbiAgQ1NTU3R5bGVEZWNsYXJhdGlvbjogZmFsc2UsXG4gIENTU1ZhbHVlTGlzdDogZmFsc2UsXG4gIENsaWVudFJlY3RMaXN0OiBmYWxzZSxcbiAgRE9NUmVjdExpc3Q6IGZhbHNlLFxuICBET01TdHJpbmdMaXN0OiBmYWxzZSxcbiAgRE9NVG9rZW5MaXN0OiB0cnVlLFxuICBEYXRhVHJhbnNmZXJJdGVtTGlzdDogZmFsc2UsXG4gIEZpbGVMaXN0OiBmYWxzZSxcbiAgSFRNTEFsbENvbGxlY3Rpb246IGZhbHNlLFxuICBIVE1MQ29sbGVjdGlvbjogZmFsc2UsXG4gIEhUTUxGb3JtRWxlbWVudDogZmFsc2UsXG4gIEhUTUxTZWxlY3RFbGVtZW50OiBmYWxzZSxcbiAgTWVkaWFMaXN0OiB0cnVlLCAvLyBUT0RPOiBOb3Qgc3BlYyBjb21wbGlhbnQsIHNob3VsZCBiZSBmYWxzZS5cbiAgTWltZVR5cGVBcnJheTogZmFsc2UsXG4gIE5hbWVkTm9kZU1hcDogZmFsc2UsXG4gIE5vZGVMaXN0OiB0cnVlLFxuICBQYWludFJlcXVlc3RMaXN0OiBmYWxzZSxcbiAgUGx1Z2luOiBmYWxzZSxcbiAgUGx1Z2luQXJyYXk6IGZhbHNlLFxuICBTVkdMZW5ndGhMaXN0OiBmYWxzZSxcbiAgU1ZHTnVtYmVyTGlzdDogZmFsc2UsXG4gIFNWR1BhdGhTZWdMaXN0OiBmYWxzZSxcbiAgU1ZHUG9pbnRMaXN0OiBmYWxzZSxcbiAgU1ZHU3RyaW5nTGlzdDogZmFsc2UsXG4gIFNWR1RyYW5zZm9ybUxpc3Q6IGZhbHNlLFxuICBTb3VyY2VCdWZmZXJMaXN0OiBmYWxzZSxcbiAgU3R5bGVTaGVldExpc3Q6IHRydWUsIC8vIFRPRE86IE5vdCBzcGVjIGNvbXBsaWFudCwgc2hvdWxkIGJlIGZhbHNlLlxuICBUZXh0VHJhY2tDdWVMaXN0OiBmYWxzZSxcbiAgVGV4dFRyYWNrTGlzdDogZmFsc2UsXG4gIFRvdWNoTGlzdDogZmFsc2Vcbn07XG5cbmZvciAodmFyIGNvbGxlY3Rpb25zID0gZ2V0S2V5cyhET01JdGVyYWJsZXMpLCBpID0gMDsgaSA8IGNvbGxlY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gIHZhciBOQU1FID0gY29sbGVjdGlvbnNbaV07XG4gIHZhciBleHBsaWNpdCA9IERPTUl0ZXJhYmxlc1tOQU1FXTtcbiAgdmFyIENvbGxlY3Rpb24gPSBnbG9iYWxbTkFNRV07XG4gIHZhciBwcm90byA9IENvbGxlY3Rpb24gJiYgQ29sbGVjdGlvbi5wcm90b3R5cGU7XG4gIHZhciBrZXk7XG4gIGlmIChwcm90bykge1xuICAgIGlmICghcHJvdG9bSVRFUkFUT1JdKSBoaWRlKHByb3RvLCBJVEVSQVRPUiwgQXJyYXlWYWx1ZXMpO1xuICAgIGlmICghcHJvdG9bVE9fU1RSSU5HX1RBR10pIGhpZGUocHJvdG8sIFRPX1NUUklOR19UQUcsIE5BTUUpO1xuICAgIEl0ZXJhdG9yc1tOQU1FXSA9IEFycmF5VmFsdWVzO1xuICAgIGlmIChleHBsaWNpdCkgZm9yIChrZXkgaW4gJGl0ZXJhdG9ycykgaWYgKCFwcm90b1trZXldKSByZWRlZmluZShwcm90bywga2V5LCAkaXRlcmF0b3JzW2tleV0sIHRydWUpO1xuICB9XG59XG4iLCIvKiEgSnNSZW5kZXIgdjEuMC42OiBodHRwOi8vanN2aWV3cy5jb20vI2pzcmVuZGVyICovXG4vKiEgKipWRVJTSU9OIEZPUiBXRUIqKiAoRm9yIE5PREUuSlMgc2VlIGh0dHA6Ly9qc3ZpZXdzLmNvbS9kb3dubG9hZC9qc3JlbmRlci1ub2RlLmpzKSAqL1xuLypcbiAqIEJlc3Qtb2YtYnJlZWQgdGVtcGxhdGluZyBpbiBicm93c2VyIG9yIG9uIE5vZGUuanMuXG4gKiBEb2VzIG5vdCByZXF1aXJlIGpRdWVyeSwgb3IgSFRNTCBET01cbiAqIEludGVncmF0ZXMgd2l0aCBKc1ZpZXdzIChodHRwOi8vanN2aWV3cy5jb20vI2pzdmlld3MpXG4gKlxuICogQ29weXJpZ2h0IDIwMjAsIEJvcmlzIE1vb3JlXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cblxuLy9qc2hpbnQgLVcwMTgsIC1XMDQxLCAtVzEyMFxuXG4oZnVuY3Rpb24oZmFjdG9yeSwgZ2xvYmFsKSB7XG5cdC8vIGdsb2JhbCB2YXIgaXMgdGhlIHRoaXMgb2JqZWN0LCB3aGljaCBpcyB3aW5kb3cgd2hlbiBydW5uaW5nIGluIHRoZSB1c3VhbCBicm93c2VyIGVudmlyb25tZW50XG5cdHZhciAkID0gZ2xvYmFsLmpRdWVyeTtcblxuXHRpZiAodHlwZW9mIGV4cG9ydHMgPT09IFwib2JqZWN0XCIpIHsgLy8gQ29tbW9uSlMgZS5nLiBCcm93c2VyaWZ5XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSAkXG5cdFx0XHQ/IGZhY3RvcnkoZ2xvYmFsLCAkKVxuXHRcdFx0OiBmdW5jdGlvbigkKSB7IC8vIElmIG5vIGdsb2JhbCBqUXVlcnksIHRha2Ugb3B0aW9uYWwgalF1ZXJ5IHBhc3NlZCBhcyBwYXJhbWV0ZXI6IHJlcXVpcmUoJ2pzcmVuZGVyJykoalF1ZXJ5KVxuXHRcdFx0XHRpZiAoJCAmJiAhJC5mbikge1xuXHRcdFx0XHRcdHRocm93IFwiUHJvdmlkZSBqUXVlcnkgb3IgbnVsbFwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBmYWN0b3J5KGdsb2JhbCwgJCk7XG5cdFx0XHR9O1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7IC8vIEFNRCBzY3JpcHQgbG9hZGVyLCBlLmcuIFJlcXVpcmVKU1xuXHRcdGRlZmluZShmdW5jdGlvbigpIHtcblx0XHRcdHJldHVybiBmYWN0b3J5KGdsb2JhbCk7XG5cdFx0fSk7XG5cdH0gZWxzZSB7IC8vIEJyb3dzZXIgdXNpbmcgcGxhaW4gPHNjcmlwdD4gdGFnXG5cdFx0ZmFjdG9yeShnbG9iYWwsIGZhbHNlKTtcblx0fVxufSAoXG5cbi8vIGZhY3RvcnkgKGZvciBqc3JlbmRlci5qcylcbmZ1bmN0aW9uKGdsb2JhbCwgJCkge1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT0gVG9wLWxldmVsIHZhcnMgPT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy8gZ2xvYmFsIHZhciBpcyB0aGUgdGhpcyBvYmplY3QsIHdoaWNoIGlzIHdpbmRvdyB3aGVuIHJ1bm5pbmcgaW4gdGhlIHVzdWFsIGJyb3dzZXIgZW52aXJvbm1lbnRcbnZhciBzZXRHbG9iYWxzID0gJCA9PT0gZmFsc2U7IC8vIE9ubHkgc2V0IGdsb2JhbHMgaWYgc2NyaXB0IGJsb2NrIGluIGJyb3dzZXIgKG5vdCBBTUQgYW5kIG5vdCBDb21tb25KUylcblxuJCA9ICQgJiYgJC5mbiA/ICQgOiBnbG9iYWwualF1ZXJ5OyAvLyAkIGlzIGpRdWVyeSBwYXNzZWQgaW4gYnkgQ29tbW9uSlMgbG9hZGVyIChCcm93c2VyaWZ5KSwgb3IgZ2xvYmFsIGpRdWVyeS5cblxudmFyIHZlcnNpb25OdW1iZXIgPSBcInYxLjAuNlwiLFxuXHRqc3ZTdG9yZU5hbWUsIHJUYWcsIHJUbXBsU3RyaW5nLCB0b3BWaWV3LCAkdmlld3MsICRleHBhbmRvLFxuXHRfb2NwID0gXCJfb2NwXCIsIC8vIE9ic2VydmFibGUgY29udGV4dHVhbCBwYXJhbWV0ZXJcblxuLy9UT0RPXHR0bXBsRm5zQ2FjaGUgPSB7fSxcblx0JGlzRnVuY3Rpb24sICRpc0FycmF5LCAkdGVtcGxhdGVzLCAkY29udmVydGVycywgJGhlbHBlcnMsICR0YWdzLCAkc3ViLCAkc3ViU2V0dGluZ3MsICRzdWJTZXR0aW5nc0FkdmFuY2VkLCAkdmlld3NTZXR0aW5ncyxcblx0ZGVsaW1PcGVuQ2hhcjAsIGRlbGltT3BlbkNoYXIxLCBkZWxpbUNsb3NlQ2hhcjAsIGRlbGltQ2xvc2VDaGFyMSwgbGlua0NoYXIsIHNldHRpbmcsIGJhc2VPbkVycm9yLFxuXG5cdGlzUmVuZGVyQ2FsbCxcblx0ck5ld0xpbmUgPSAvWyBcXHRdKihcXHJcXG58XFxufFxccikvZyxcblx0clVuZXNjYXBlUXVvdGVzID0gL1xcXFwoWydcIl0pL2csXG5cdHJFc2NhcGVRdW90ZXMgPSAvWydcIlxcXFxdL2csIC8vIEVzY2FwZSBxdW90ZXMgYW5kIFxcIGNoYXJhY3RlclxuXHRyQnVpbGRIYXNoID0gLyg/OlxceDA4fF4pKG9uZXJyb3I6KT8oPzoofj8pKChbXFx3JC5dKyk6KT8oW15cXHgwOF0rKSlcXHgwOCgsKT8oW15cXHgwOF0rKS9naSxcblx0clRlc3RFbHNlSWYgPSAvXmlmXFxzLyxcblx0ckZpcnN0RWxlbSA9IC88KFxcdyspWz5cXHNdLyxcblx0ckF0dHJFbmNvZGUgPSAvW1xceDAwYD48XCInJj1dL2csIC8vIEluY2x1ZGVzID4gZW5jb2Rpbmcgc2luY2UgckNvbnZlcnRNYXJrZXJzIGluIEpzVmlld3MgZG9lcyBub3Qgc2tpcCA+IGNoYXJhY3RlcnMgaW4gYXR0cmlidXRlIHN0cmluZ3Ncblx0cklzSHRtbCA9IC9bXFx4MDBgPjxcXFwiJyY9XS8sXG5cdHJIYXNIYW5kbGVycyA9IC9eb25bQS1aXXxeY29udmVydChCYWNrKT8kLyxcblx0cldyYXBwZWRJblZpZXdNYXJrZXIgPSAvXlxcI1xcZCtfYFtcXHNcXFNdKlxcL1xcZCtfYCQvLFxuXHRySHRtbEVuY29kZSA9IHJBdHRyRW5jb2RlLFxuXHRyRGF0YUVuY29kZSA9IC9bJjw+XS9nLFxuXHRyRGF0YVVuZW5jb2RlID0gLyYoYW1wfGd0fGx0KTsvZyxcblx0ckJyYWNrZXRRdW90ZSA9IC9cXFtbJ1wiXT98WydcIl0/XFxdL2csXG5cdHZpZXdJZCA9IDAsXG5cdGNoYXJFbnRpdGllcyA9IHtcblx0XHRcIiZcIjogXCImYW1wO1wiLFxuXHRcdFwiPFwiOiBcIiZsdDtcIixcblx0XHRcIj5cIjogXCImZ3Q7XCIsXG5cdFx0XCJcXHgwMFwiOiBcIiYjMDtcIixcblx0XHRcIidcIjogXCImIzM5O1wiLFxuXHRcdCdcIic6IFwiJiMzNDtcIixcblx0XHRcImBcIjogXCImIzk2O1wiLFxuXHRcdFwiPVwiOiBcIiYjNjE7XCJcblx0fSxcblx0Y2hhcnNGcm9tRW50aXRpZXMgID0ge1xuXHRcdGFtcDogXCImXCIsXG5cdFx0Z3Q6IFwiPlwiLFxuXHRcdGx0OiBcIjxcIlxuXHR9LFxuXHRIVE1MID0gXCJodG1sXCIsXG5cdE9CSkVDVCA9IFwib2JqZWN0XCIsXG5cdHRtcGxBdHRyID0gXCJkYXRhLWpzdi10bXBsXCIsXG5cdGpzdlRtcGwgPSBcImpzdlRtcGxcIixcblx0aW5kZXhTdHIgPSBcIkZvciAjaW5kZXggaW4gbmVzdGVkIGJsb2NrIHVzZSAjZ2V0SW5kZXgoKS5cIixcblx0JHJlbmRlciA9IHt9LFxuXG5cdGpzciA9IGdsb2JhbC5qc3JlbmRlcixcblx0anNyVG9KcSA9IGpzciAmJiAkICYmICEkLnJlbmRlciwgLy8gSnNSZW5kZXIgYWxyZWFkeSBsb2FkZWQsIHdpdGhvdXQgalF1ZXJ5LiBidXQgd2Ugd2lsbCByZS1sb2FkIGl0IG5vdyB0byBhdHRhY2ggdG8galF1ZXJ5XG5cblx0anN2U3RvcmVzID0ge1xuXHRcdHRlbXBsYXRlOiB7XG5cdFx0XHRjb21waWxlOiBjb21waWxlVG1wbFxuXHRcdH0sXG5cdFx0dGFnOiB7XG5cdFx0XHRjb21waWxlOiBjb21waWxlVGFnXG5cdFx0fSxcblx0XHR2aWV3TW9kZWw6IHtcblx0XHRcdGNvbXBpbGU6IGNvbXBpbGVWaWV3TW9kZWxcblx0XHR9LFxuXHRcdGhlbHBlcjoge30sXG5cdFx0Y29udmVydGVyOiB7fVxuXHR9O1xuXG5cdC8vIHZpZXdzIG9iamVjdCAoJC52aWV3cyBpZiBqUXVlcnkgaXMgbG9hZGVkLCBqc3JlbmRlci52aWV3cyBpZiBubyBqUXVlcnksIGUuZy4gaW4gTm9kZS5qcylcblx0JHZpZXdzID0ge1xuXHRcdGpzdmlld3M6IHZlcnNpb25OdW1iZXIsXG5cdFx0c3ViOiB7XG5cdFx0XHQvLyBzdWJzY3JpcHRpb24sIGUuZy4gSnNWaWV3cyBpbnRlZ3JhdGlvblxuXHRcdFx0clBhdGg6IC9eKCEqPykoPzpudWxsfHRydWV8ZmFsc2V8XFxkW1xcZC5dKnwoW1xcdyRdK3xcXC58fihbXFx3JF0rKXwjKHZpZXd8KFtcXHckXSspKT8pKFtcXHckLl5dKj8pKD86Wy5bXl0oW1xcdyRdKylcXF0/KT8pJC9nLFxuXHRcdFx0Ly8gICAgICAgIG5vdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3QgICAgIGhlbHBlciAgICB2aWV3ICB2aWV3UHJvcGVydHkgcGF0aFRva2VucyAgICAgIGxlYWZUb2tlblxuXG5cdFx0XHRyUHJtOiAvKFxcKCkoPz1cXHMqXFwoKXwoPzooWyhbXSlcXHMqKT8oPzooXFxePykofj9bXFx3JC5eXSspP1xccyooKFxcK1xcK3wtLSl8XFwrfC18fig/IVtcXHckXSl8JiZ8XFx8XFx8fD09PXwhPT18PT18IT18PD18Pj18Wzw+JSo6P1xcL118KD0pKVxccyp8KCEqPyhAKT9bI35dP1tcXHckLl5dKykoWyhbXSk/KXwoLFxccyopfChcXCg/KVxcXFw/KD86KCcpfChcIikpfCg/OlxccyooKFspXFxdXSkoPz1bLl5dfFxccyokfFteKFtdKXxbKVxcXV0pKFsoW10/KSl8KFxccyspL2csXG5cdFx0XHQvLyAgIGxmdFBybjAgICAgICAgICAgIGxmdFBybiAgICAgICAgIGJvdW5kICAgICBwYXRoICAgICAgICAgICAgICAgb3BlcmF0b3IgICAgIGVyciAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVxICAgICAgcGF0aDIgbGF0ZSAgICAgICAgICAgIHBybiAgICAgIGNvbW1hICBsZnRQcm4yICAgYXBvcyBxdW90ICAgICAgICBydFBybiAgcnRQcm5Eb3QgICAgICAgICAgICAgICAgICBwcm4yICAgICBzcGFjZVxuXG5cdFx0XHRWaWV3OiBWaWV3LFxuXHRcdFx0RXJyOiBKc1ZpZXdzRXJyb3IsXG5cdFx0XHR0bXBsRm46IHRtcGxGbixcblx0XHRcdHBhcnNlOiBwYXJzZVBhcmFtcyxcblx0XHRcdGV4dGVuZDogJGV4dGVuZCxcblx0XHRcdGV4dGVuZEN0eDogZXh0ZW5kQ3R4LFxuXHRcdFx0c3ludGF4RXJyOiBzeW50YXhFcnJvcixcblx0XHRcdG9uU3RvcmU6IHtcblx0XHRcdFx0dGVtcGxhdGU6IGZ1bmN0aW9uKG5hbWUsIGl0ZW0pIHtcblx0XHRcdFx0XHRpZiAoaXRlbSA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0ZGVsZXRlICRyZW5kZXJbbmFtZV07XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChuYW1lKSB7XG5cdFx0XHRcdFx0XHQkcmVuZGVyW25hbWVdID0gaXRlbTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRhZGRTZXR0aW5nOiBhZGRTZXR0aW5nLFxuXHRcdFx0c2V0dGluZ3M6IHtcblx0XHRcdFx0YWxsb3dDb2RlOiBmYWxzZVxuXHRcdFx0fSxcblx0XHRcdGFkdlNldDogbm9vcCwgLy8gVXBkYXRlIGFkdmFuY2VkIHNldHRpbmdzXG5cdFx0XHRfdGhwOiB0YWdIYW5kbGVyc0Zyb21Qcm9wcyxcblx0XHRcdF9nbTogZ2V0TWV0aG9kLFxuXHRcdFx0X3RnOiBmdW5jdGlvbigpIHt9LCAvLyBDb25zdHJ1Y3RvciBmb3IgdGFnRGVmXG5cdFx0XHRfY252dDogY29udmVydFZhbCxcblx0XHRcdF90YWc6IHJlbmRlclRhZyxcblx0XHRcdF9lcjogZXJyb3IsXG5cdFx0XHRfZXJyOiBvblJlbmRlckVycm9yLFxuXHRcdFx0X2NwOiByZXRWYWwsIC8vIEdldCBvYnNlcnZhYmxlIGNvbnRleHR1YWwgcGFyYW1ldGVycyAob3IgcHJvcGVydGllcykgfmZvbz1leHByLiBJbiBKc1JlbmRlciwgc2ltcGx5IHJldHVybnMgdmFsLlxuXHRcdFx0X3NxOiBmdW5jdGlvbih0b2tlbikge1xuXHRcdFx0XHRpZiAodG9rZW4gPT09IFwiY29uc3RydWN0b3JcIikge1xuXHRcdFx0XHRcdHN5bnRheEVycm9yKFwiXCIpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiB0b2tlbjtcblx0XHRcdH1cblx0XHR9LFxuXHRcdHNldHRpbmdzOiB7XG5cdFx0XHRkZWxpbWl0ZXJzOiAkdmlld3NEZWxpbWl0ZXJzLFxuXHRcdFx0YWR2YW5jZWQ6IGZ1bmN0aW9uKHZhbHVlKSB7XG5cdFx0XHRcdHJldHVybiB2YWx1ZVxuXHRcdFx0XHRcdD8gKFxuXHRcdFx0XHRcdFx0XHQkZXh0ZW5kKCRzdWJTZXR0aW5nc0FkdmFuY2VkLCB2YWx1ZSksXG5cdFx0XHRcdFx0XHRcdCRzdWIuYWR2U2V0KCksXG5cdFx0XHRcdFx0XHRcdCR2aWV3c1NldHRpbmdzXG5cdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHQ6ICRzdWJTZXR0aW5nc0FkdmFuY2VkO1xuXHRcdFx0XHR9XG5cdFx0fSxcblx0XHRtYXA6IGRhdGFNYXAgICAgLy8gSWYganNPYnNlcnZhYmxlIGxvYWRlZCBmaXJzdCwgdXNlIHRoYXQgZGVmaW5pdGlvbiBvZiBkYXRhTWFwXG5cdH07XG5cbmZ1bmN0aW9uIGdldERlcml2ZWRNZXRob2QoYmFzZU1ldGhvZCwgbWV0aG9kKSB7XG5cdHJldHVybiBmdW5jdGlvbigpIHtcblx0XHR2YXIgcmV0LFxuXHRcdFx0dGFnID0gdGhpcyxcblx0XHRcdHByZXZCYXNlID0gdGFnLmJhc2U7XG5cblx0XHR0YWcuYmFzZSA9IGJhc2VNZXRob2Q7IC8vIFdpdGhpbiBtZXRob2QgY2FsbCwgY2FsbGluZyB0aGlzLmJhc2Ugd2lsbCBjYWxsIHRoZSBiYXNlIG1ldGhvZFxuXHRcdHJldCA9IG1ldGhvZC5hcHBseSh0YWcsIGFyZ3VtZW50cyk7IC8vIENhbGwgdGhlIG1ldGhvZFxuXHRcdHRhZy5iYXNlID0gcHJldkJhc2U7IC8vIFJlcGxhY2UgdGhpcy5iYXNlIHRvIGJlIHRoZSBiYXNlIG1ldGhvZCBvZiB0aGUgcHJldmlvdXMgY2FsbCwgZm9yIGNoYWluZWQgY2FsbHNcblx0XHRyZXR1cm4gcmV0O1xuXHR9O1xufVxuXG5mdW5jdGlvbiBnZXRNZXRob2QoYmFzZU1ldGhvZCwgbWV0aG9kKSB7XG5cdC8vIEZvciBkZXJpdmVkIG1ldGhvZHMgKG9yIGhhbmRsZXJzIGRlY2xhcmVkIGRlY2xhcmF0aXZlbHkgYXMgaW4ge3s6Zm9vIG9uQ2hhbmdlPX5mb29DaGFuZ2VkfX0gcmVwbGFjZSBieSBhIGRlcml2ZWQgbWV0aG9kLCB0byBhbGxvdyB1c2luZyB0aGlzLmJhc2UoLi4uKVxuXHQvLyBvciB0aGlzLmJhc2VBcHBseShhcmd1bWVudHMpIHRvIGNhbGwgdGhlIGJhc2UgaW1wbGVtZW50YXRpb24uIChFcXVpdmFsZW50IHRvIHRoaXMuX3N1cGVyKC4uLikgYW5kIHRoaXMuX3N1cGVyQXBwbHkoYXJndW1lbnRzKSBpbiBqUXVlcnkgVUkpXG5cdGlmICgkaXNGdW5jdGlvbihtZXRob2QpKSB7XG5cdFx0bWV0aG9kID0gZ2V0RGVyaXZlZE1ldGhvZChcblx0XHRcdFx0IWJhc2VNZXRob2Rcblx0XHRcdFx0XHQ/IG5vb3AgLy8gbm8gYmFzZSBtZXRob2QgaW1wbGVtZW50YXRpb24sIHNvIHVzZSBub29wIGFzIGJhc2UgbWV0aG9kXG5cdFx0XHRcdFx0OiBiYXNlTWV0aG9kLl9kXG5cdFx0XHRcdFx0XHQ/IGJhc2VNZXRob2QgLy8gYmFzZU1ldGhvZCBpcyBhIGRlcml2ZWQgbWV0aG9kLCBzbyB1c2UgaXRcblx0XHRcdFx0XHRcdDogZ2V0RGVyaXZlZE1ldGhvZChub29wLCBiYXNlTWV0aG9kKSwgLy8gYmFzZU1ldGhvZCBpcyBub3QgZGVyaXZlZCBzbyBtYWtlIGl0cyBiYXNlIG1ldGhvZCBiZSB0aGUgbm9vcCBtZXRob2Rcblx0XHRcdFx0bWV0aG9kXG5cdFx0XHQpO1xuXHRcdG1ldGhvZC5fZCA9IChiYXNlTWV0aG9kICYmIGJhc2VNZXRob2QuX2QgfHwgMCkgKyAxOyAvLyBBZGQgZmxhZyBmb3IgZGVyaXZlZCBtZXRob2QgKGluY3JlbWVudGVkIGZvciBkZXJpdmVkIG9mIGRlcml2ZWQuLi4pXG5cdH1cblx0cmV0dXJuIG1ldGhvZDtcbn1cblxuZnVuY3Rpb24gdGFnSGFuZGxlcnNGcm9tUHJvcHModGFnLCB0YWdDdHgpIHtcblx0dmFyIHByb3AsXG5cdFx0cHJvcHMgPSB0YWdDdHgucHJvcHM7XG5cdGZvciAocHJvcCBpbiBwcm9wcykge1xuXHRcdGlmIChySGFzSGFuZGxlcnMudGVzdChwcm9wKSAmJiAhKHRhZ1twcm9wXSAmJiB0YWdbcHJvcF0uZml4KSkgeyAvLyBEb24ndCBvdmVycmlkZSBoYW5kbGVycyB3aXRoIGZpeCBleHBhbmRvICh1c2VkIGluIGRhdGVwaWNrZXIgYW5kIHNwaW5uZXIpXG5cdFx0XHR0YWdbcHJvcF0gPSBwcm9wICE9PSBcImNvbnZlcnRcIiA/IGdldE1ldGhvZCh0YWcuY29uc3RydWN0b3IucHJvdG90eXBlW3Byb3BdLCBwcm9wc1twcm9wXSkgOiBwcm9wc1twcm9wXTtcblx0XHRcdC8vIENvcHkgb3ZlciB0aGUgb25Gb28gcHJvcHMsIGNvbnZlcnQgYW5kIGNvbnZlcnRCYWNrIGZyb20gdGFnQ3R4LnByb3BzIHRvIHRhZyAob3ZlcnJpZGVzIHZhbHVlcyBpbiB0YWdEZWYpLlxuXHRcdFx0Ly8gTm90ZTogdW5zdXBwb3J0ZWQgc2NlbmFyaW86IGlmIGhhbmRsZXJzIGFyZSBkeW5hbWljYWxseSBhZGRlZCBeb25Gb289ZXhwcmVzc2lvbiB0aGlzIHdpbGwgd29yaywgYnV0IGR5bmFtaWNhbGx5IHJlbW92aW5nIHdpbGwgbm90IHdvcmsuXG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIHJldFZhbCh2YWwpIHtcblx0cmV0dXJuIHZhbDtcbn1cblxuZnVuY3Rpb24gbm9vcCgpIHtcblx0cmV0dXJuIFwiXCI7XG59XG5cbmZ1bmN0aW9uIGRiZ0JyZWFrKHZhbCkge1xuXHQvLyBVc2FnZSBleGFtcGxlczoge3tkYmc6Li4ufX0sIHt7On5kYmcoLi4uKX19LCB7e2RiZyAuLi4vfX0sIHtee2ZvciAuLi4gb25BZnRlckxpbms9fmRiZ319IGV0Yy5cblx0dHJ5IHtcblx0XHRjb25zb2xlLmxvZyhcIkpzUmVuZGVyIGRiZyBicmVha3BvaW50OiBcIiArIHZhbCk7XG5cdFx0dGhyb3cgXCJkYmcgYnJlYWtwb2ludFwiOyAvLyBUbyBicmVhayBoZXJlLCBzdG9wIG9uIGNhdWdodCBleGNlcHRpb25zLlxuXHR9XG5cdGNhdGNoIChlKSB7fVxuXHRyZXR1cm4gdGhpcy5iYXNlID8gdGhpcy5iYXNlQXBwbHkoYXJndW1lbnRzKSA6IHZhbDtcbn1cblxuZnVuY3Rpb24gSnNWaWV3c0Vycm9yKG1lc3NhZ2UpIHtcblx0Ly8gRXJyb3IgZXhjZXB0aW9uIHR5cGUgZm9yIEpzVmlld3MvSnNSZW5kZXJcblx0Ly8gT3ZlcnJpZGUgb2YgJC52aWV3cy5zdWIuRXJyb3IgaXMgcG9zc2libGVcblx0dGhpcy5uYW1lID0gKCQubGluayA/IFwiSnNWaWV3c1wiIDogXCJKc1JlbmRlclwiKSArIFwiIEVycm9yXCI7XG5cdHRoaXMubWVzc2FnZSA9IG1lc3NhZ2UgfHwgdGhpcy5uYW1lO1xufVxuXG5mdW5jdGlvbiAkZXh0ZW5kKHRhcmdldCwgc291cmNlKSB7XG5cdGlmICh0YXJnZXQpIHtcblx0XHRmb3IgKHZhciBuYW1lIGluIHNvdXJjZSkge1xuXHRcdFx0dGFyZ2V0W25hbWVdID0gc291cmNlW25hbWVdO1xuXHRcdH1cblx0XHRyZXR1cm4gdGFyZ2V0O1xuXHR9XG59XG5cbihKc1ZpZXdzRXJyb3IucHJvdG90eXBlID0gbmV3IEVycm9yKCkpLmNvbnN0cnVjdG9yID0gSnNWaWV3c0Vycm9yO1xuXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09IFRvcC1sZXZlbCBmdW5jdGlvbnMgPT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy89PT09PT09PT09PT09PT09PT09XG4vLyB2aWV3cy5kZWxpbWl0ZXJzXG4vLz09PT09PT09PT09PT09PT09PT1cblxuXHQvKipcblx0KiBTZXQgdGhlIHRhZyBvcGVuaW5nIGFuZCBjbG9zaW5nIGRlbGltaXRlcnMgYW5kICdsaW5rJyBjaGFyYWN0ZXIuIERlZmF1bHQgaXMgXCJ7e1wiLCBcIn19XCIgYW5kIFwiXlwiXG5cdCogb3BlbkNoYXJzLCBjbG9zZUNoYXJzOiBvcGVuaW5nIGFuZCBjbG9zaW5nIHN0cmluZ3MsIGVhY2ggd2l0aCB0d28gY2hhcmFjdGVyc1xuXHQqICQudmlld3Muc2V0dGluZ3MuZGVsaW1pdGVycyguLi4pXG5cdCpcblx0KiBAcGFyYW0ge3N0cmluZ30gICBvcGVuQ2hhcnNcblx0KiBAcGFyYW0ge3N0cmluZ30gICBbY2xvc2VDaGFyc11cblx0KiBAcGFyYW0ge3N0cmluZ30gICBbbGlua11cblx0KiBAcmV0dXJucyB7U2V0dGluZ3N9XG5cdCpcblx0KiBHZXQgZGVsaW1pdGVyc1xuXHQqIGRlbGltc0FycmF5ID0gJC52aWV3cy5zZXR0aW5ncy5kZWxpbWl0ZXJzKClcblx0KlxuXHQqIEByZXR1cm5zIHtzdHJpbmdbXX1cblx0Ki9cbmZ1bmN0aW9uICR2aWV3c0RlbGltaXRlcnMob3BlbkNoYXJzLCBjbG9zZUNoYXJzLCBsaW5rKSB7XG5cdGlmICghb3BlbkNoYXJzKSB7XG5cdFx0cmV0dXJuICRzdWJTZXR0aW5ncy5kZWxpbWl0ZXJzO1xuXHR9XG5cdGlmICgkaXNBcnJheShvcGVuQ2hhcnMpKSB7XG5cdFx0cmV0dXJuICR2aWV3c0RlbGltaXRlcnMuYXBwbHkoJHZpZXdzLCBvcGVuQ2hhcnMpO1xuXHR9XG5cdGxpbmtDaGFyID0gbGluayA/IGxpbmtbMF0gOiBsaW5rQ2hhcjtcblx0aWYgKCEvXihcXFd8Xyl7NX0kLy50ZXN0KG9wZW5DaGFycyArIGNsb3NlQ2hhcnMgKyBsaW5rQ2hhcikpIHtcblx0XHRlcnJvcihcIkludmFsaWQgZGVsaW1pdGVyc1wiKTsgLy8gTXVzdCBiZSBub24td29yZCBjaGFyYWN0ZXJzLCBhbmQgb3BlbkNoYXJzIGFuZCBjbG9zZUNoYXJzIG11c3QgZWFjaCBiZSBsZW5ndGggMlxuXHR9XG5cdGRlbGltT3BlbkNoYXIwID0gb3BlbkNoYXJzWzBdO1xuXHRkZWxpbU9wZW5DaGFyMSA9IG9wZW5DaGFyc1sxXTtcblx0ZGVsaW1DbG9zZUNoYXIwID0gY2xvc2VDaGFyc1swXTtcblx0ZGVsaW1DbG9zZUNoYXIxID0gY2xvc2VDaGFyc1sxXTtcblxuXHQkc3ViU2V0dGluZ3MuZGVsaW1pdGVycyA9IFtkZWxpbU9wZW5DaGFyMCArIGRlbGltT3BlbkNoYXIxLCBkZWxpbUNsb3NlQ2hhcjAgKyBkZWxpbUNsb3NlQ2hhcjEsIGxpbmtDaGFyXTtcblxuXHQvLyBFc2NhcGUgdGhlIGNoYXJhY3RlcnMgLSBzaW5jZSB0aGV5IGNvdWxkIGJlIHJlZ2V4IHNwZWNpYWwgY2hhcmFjdGVyc1xuXHRvcGVuQ2hhcnMgPSBcIlxcXFxcIiArIGRlbGltT3BlbkNoYXIwICsgXCIoXFxcXFwiICsgbGlua0NoYXIgKyBcIik/XFxcXFwiICsgZGVsaW1PcGVuQ2hhcjE7IC8vIERlZmF1bHQgaXMgXCJ7XntcIlxuXHRjbG9zZUNoYXJzID0gXCJcXFxcXCIgKyBkZWxpbUNsb3NlQ2hhcjAgKyBcIlxcXFxcIiArIGRlbGltQ2xvc2VDaGFyMTsgICAgICAgICAgICAgICAgICAgLy8gRGVmYXVsdCBpcyBcIn19XCJcblx0Ly8gQnVpbGQgcmVnZXggd2l0aCBuZXcgZGVsaW1pdGVyc1xuXHQvLyAgICAgICAgICBbdGFnICAgIChmb2xsb3dlZCBieSAvIHNwYWNlIG9yIH0pICBvciBjdnRyK2NvbG9uIG9yIGh0bWwgb3IgY29kZV0gZm9sbG93ZWQgYnkgc3BhY2UrcGFyYW1zIHRoZW4gY29udmVydEJhY2s/XG5cdHJUYWcgPSBcIig/OihcXFxcdysoPz1bXFxcXC9cXFxcc1xcXFxcIiArIGRlbGltQ2xvc2VDaGFyMCArIFwiXSkpfChcXFxcdyspPyg6KXwoPil8KFxcXFwqKSlcXFxccyooKD86W15cXFxcXCJcblx0XHQrIGRlbGltQ2xvc2VDaGFyMCArIFwiXXxcXFxcXCIgKyBkZWxpbUNsb3NlQ2hhcjAgKyBcIig/IVxcXFxcIiArIGRlbGltQ2xvc2VDaGFyMSArIFwiKSkqPylcIjtcblxuXHQvLyBNYWtlIHJUYWcgYXZhaWxhYmxlIHRvIEpzVmlld3MgKG9yIG90aGVyIGNvbXBvbmVudHMpIGZvciBwYXJzaW5nIGJpbmRpbmcgZXhwcmVzc2lvbnNcblx0JHN1Yi5yVGFnID0gXCIoPzpcIiArIHJUYWcgKyBcIilcIjtcblx0Ly8gICAgICAgICAgICAgICAgICAgICAgICB7IF4/IHsgICB0YWcrcGFyYW1zIHNsYXNoPyAgb3IgY2xvc2luZ1RhZyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yIGNvbW1lbnRcblx0clRhZyA9IG5ldyBSZWdFeHAoXCIoPzpcIiArIG9wZW5DaGFycyArIHJUYWcgKyBcIihcXFxcLyk/fFxcXFxcIiArIGRlbGltT3BlbkNoYXIwICsgXCIoXFxcXFwiICsgbGlua0NoYXIgKyBcIik/XFxcXFwiICsgZGVsaW1PcGVuQ2hhcjEgKyBcIig/Oig/OlxcXFwvKFxcXFx3KykpXFxcXHMqfCEtLVtcXFxcc1xcXFxTXSo/LS0pKVwiICsgY2xvc2VDaGFycywgXCJnXCIpO1xuXG5cdC8vIERlZmF1bHQ6ICBiaW5kICAgICB0YWdOYW1lICAgICAgICAgY3Z0ICAgY2xuIGh0bWwgY29kZSAgICBwYXJhbXMgICAgICAgICAgICBzbGFzaCAgIGJpbmQyICAgICAgICAgY2xvc2VCbGsgIGNvbW1lbnRcblx0Ly8gICAgICAvKD86eyhcXF4pP3soPzooXFx3Kyg/PVtcXC9cXHN9XSkpfChcXHcrKT8oOil8KD4pfChcXCopKVxccyooKD86W159XXx9KD8hfSkpKj8pKFxcLyk/fHsoXFxeKT97KD86KD86XFwvKFxcdyspKVxccyp8IS0tW1xcc1xcU10qPy0tKSl9fVxuXG5cdCRzdWIuclRtcGwgPSBuZXcgUmVnRXhwKFwiXlxcXFxzfFxcXFxzJHw8Lio+fChbXlxcXFxcXFxcXXxeKVt7fV18XCIgKyBvcGVuQ2hhcnMgKyBcIi4qXCIgKyBjbG9zZUNoYXJzKTtcblx0Ly8gJHN1Yi5yVG1wbCBsb29rcyBmb3IgaW5pdGlhbCBvciBmaW5hbCB3aGl0ZSBzcGFjZSwgaHRtbCB0YWdzIG9yIHsgb3IgfSBjaGFyIG5vdCBwcmVjZWRlZCBieSBcXFxcLCBvciBKc1JlbmRlciB0YWdzIHt7eHh4fX0uXG5cdC8vIEVhY2ggb2YgdGhlc2Ugc3RyaW5ncyBhcmUgY29uc2lkZXJlZCBOT1QgdG8gYmUgalF1ZXJ5IHNlbGVjdG9yc1xuXHRyZXR1cm4gJHZpZXdzU2V0dGluZ3M7XG59XG5cbi8vPT09PT09PT09XG4vLyBWaWV3LmdldFxuLy89PT09PT09PT1cblxuZnVuY3Rpb24gZ2V0Vmlldyhpbm5lciwgdHlwZSkgeyAvL3ZpZXcuZ2V0KGlubmVyLCB0eXBlKVxuXHRpZiAoIXR5cGUgJiYgaW5uZXIgIT09IHRydWUpIHtcblx0XHQvLyB2aWV3LmdldCh0eXBlKVxuXHRcdHR5cGUgPSBpbm5lcjtcblx0XHRpbm5lciA9IHVuZGVmaW5lZDtcblx0fVxuXG5cdHZhciB2aWV3cywgaSwgbCwgZm91bmQsXG5cdFx0dmlldyA9IHRoaXMsXG5cdFx0cm9vdCA9IHR5cGUgPT09IFwicm9vdFwiO1xuXHRcdC8vIHZpZXcuZ2V0KFwicm9vdFwiKSByZXR1cm5zIHZpZXcucm9vdCwgdmlldy5nZXQoKSByZXR1cm5zIHZpZXcucGFyZW50LCB2aWV3LmdldCh0cnVlKSByZXR1cm5zIHZpZXcudmlld3NbMF0uXG5cblx0aWYgKGlubmVyKSB7XG5cdFx0Ly8gR28gdGhyb3VnaCB2aWV3cyAtIHRoaXMgb25lLCBhbmQgYWxsIG5lc3RlZCBvbmVzLCBkZXB0aC1maXJzdCAtIGFuZCByZXR1cm4gZmlyc3Qgb25lIHdpdGggZ2l2ZW4gdHlwZS5cblx0XHQvLyBJZiB0eXBlIGlzIHVuZGVmaW5lZCwgaS5lLiB2aWV3LmdldCh0cnVlKSwgcmV0dXJuIGZpcnN0IGNoaWxkIHZpZXcuXG5cdFx0Zm91bmQgPSB0eXBlICYmIHZpZXcudHlwZSA9PT0gdHlwZSAmJiB2aWV3O1xuXHRcdGlmICghZm91bmQpIHtcblx0XHRcdHZpZXdzID0gdmlldy52aWV3cztcblx0XHRcdGlmICh2aWV3Ll8udXNlS2V5KSB7XG5cdFx0XHRcdGZvciAoaSBpbiB2aWV3cykge1xuXHRcdFx0XHRcdGlmIChmb3VuZCA9IHR5cGUgPyB2aWV3c1tpXS5nZXQoaW5uZXIsIHR5cGUpIDogdmlld3NbaV0pIHtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Zm9yIChpID0gMCwgbCA9IHZpZXdzLmxlbmd0aDsgIWZvdW5kICYmIGkgPCBsOyBpKyspIHtcblx0XHRcdFx0XHRmb3VuZCA9IHR5cGUgPyB2aWV3c1tpXS5nZXQoaW5uZXIsIHR5cGUpIDogdmlld3NbaV07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH0gZWxzZSBpZiAocm9vdCkge1xuXHRcdC8vIEZpbmQgcm9vdCB2aWV3LiAodmlldyB3aG9zZSBwYXJlbnQgaXMgdG9wIHZpZXcpXG5cdFx0Zm91bmQgPSB2aWV3LnJvb3Q7XG5cdH0gZWxzZSBpZiAodHlwZSkge1xuXHRcdHdoaWxlICh2aWV3ICYmICFmb3VuZCkge1xuXHRcdFx0Ly8gR28gdGhyb3VnaCB2aWV3cyAtIHRoaXMgb25lLCBhbmQgYWxsIHBhcmVudCBvbmVzIC0gYW5kIHJldHVybiBmaXJzdCBvbmUgd2l0aCBnaXZlbiB0eXBlLlxuXHRcdFx0Zm91bmQgPSB2aWV3LnR5cGUgPT09IHR5cGUgPyB2aWV3IDogdW5kZWZpbmVkO1xuXHRcdFx0dmlldyA9IHZpZXcucGFyZW50O1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRmb3VuZCA9IHZpZXcucGFyZW50O1xuXHR9XG5cdHJldHVybiBmb3VuZCB8fCB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGdldE5lc3RlZEluZGV4KCkge1xuXHR2YXIgdmlldyA9IHRoaXMuZ2V0KFwiaXRlbVwiKTtcblx0cmV0dXJuIHZpZXcgPyB2aWV3LmluZGV4IDogdW5kZWZpbmVkO1xufVxuXG5nZXROZXN0ZWRJbmRleC5kZXBlbmRzID0gZnVuY3Rpb24oKSB7XG5cdHJldHVybiBbdGhpcy5nZXQoXCJpdGVtXCIpLCBcImluZGV4XCJdO1xufTtcblxuZnVuY3Rpb24gZ2V0SW5kZXgoKSB7XG5cdHJldHVybiB0aGlzLmluZGV4O1xufVxuXG5nZXRJbmRleC5kZXBlbmRzID0gXCJpbmRleFwiO1xuXG4vLz09PT09PT09PT09PT09PT09PVxuLy8gVmlldy5jdHhQcm0sIGV0Yy5cbi8vPT09PT09PT09PT09PT09PT09XG5cbi8qIEludGVybmFsIHByaXZhdGU6IHZpZXcuX2dldE9iKCkgKi9cbmZ1bmN0aW9uIGdldFBhdGhPYmplY3Qob2IsIHBhdGgsIGx0T2IsIGZuKSB7XG5cdC8vIEl0ZXJhdGUgdGhyb3VnaCBwYXRoIHRvIGxhdGUgcGF0aHM6IEBhLmIuYyBwYXRoc1xuXHQvLyBSZXR1cm4gXCJcIiAob3Igbm9vcCBpZiBsZWFmIGlzIGEgZnVuY3Rpb24gQGEuYi5jKC4uLikgKSBpZiBpbnRlcm1lZGlhdGUgb2JqZWN0IG5vdCB5ZXQgYXZhaWxhYmxlXG5cdHZhciBwcmV2T2IsIHRva2VucywgbCxcblx0XHRpID0gMDtcblx0aWYgKGx0T2IgPT09IDEpIHtcblx0XHRmbiA9IDE7XG5cdFx0bHRPYiA9IHVuZGVmaW5lZDtcblx0fVxuXHQvLyBQYXRocyBsaWtlIF5hXmJeYyBvciB+XmFeYl5jIHdpbGwgbm90IHRocm93IGlmIGFuIG9iamVjdCBpbiBwYXRoIGlzIHVuZGVmaW5lZC5cblx0aWYgKHBhdGgpIHtcblx0XHR0b2tlbnMgPSBwYXRoLnNwbGl0KFwiLlwiKTtcblx0XHRsID0gdG9rZW5zLmxlbmd0aDtcblxuXHRcdGZvciAoOyBvYiAmJiBpIDwgbDsgaSsrKSB7XG5cdFx0XHRwcmV2T2IgPSBvYjtcblx0XHRcdG9iID0gdG9rZW5zW2ldID8gb2JbdG9rZW5zW2ldXSA6IG9iO1xuXHRcdH1cblx0fVxuXHRpZiAobHRPYikge1xuXHRcdGx0T2IubHQgPSBsdE9iLmx0IHx8IGk8bDsgLy8gSWYgaSA8IGwgdGhlcmUgd2FzIGFuIG9iamVjdCBpbiB0aGUgcGF0aCBub3QgeWV0IGF2YWlsYWJsZVxuXHR9XG5cdHJldHVybiBvYiA9PT0gdW5kZWZpbmVkXG5cdFx0PyBmbiA/IG5vb3AgOiBcIlwiXG5cdFx0OiBmbiA/IGZ1bmN0aW9uKCkge1xuXHRcdFx0cmV0dXJuIG9iLmFwcGx5KHByZXZPYiwgYXJndW1lbnRzKTtcblx0XHR9IDogb2I7XG59XG5cbmZ1bmN0aW9uIGNvbnRleHRQYXJhbWV0ZXIoa2V5LCB2YWx1ZSwgZ2V0KSB7XG5cdC8vIEhlbHBlciBtZXRob2QgY2FsbGVkIGFzIHZpZXcuY3R4UHJtKGtleSkgZm9yIGhlbHBlcnMgb3IgdGVtcGxhdGUgcGFyYW1ldGVycyB+Zm9vIC0gZnJvbSBjb21waWxlZCB0ZW1wbGF0ZSBvciBmcm9tIGNvbnRleHQgY2FsbGJhY2tcblx0dmFyIHdyYXBwZWQsIGRlcHMsIHJlcywgb2JzQ3R4UHJtLCB0YWdFbHNlLCBjYWxsVmlldywgbmV3UmVzLFxuXHRcdHN0b3JlVmlldyA9IHRoaXMsXG5cdFx0aXNVcGRhdGUgPSAhaXNSZW5kZXJDYWxsICYmIGFyZ3VtZW50cy5sZW5ndGggPiAxLFxuXHRcdHN0b3JlID0gc3RvcmVWaWV3LmN0eDtcblx0aWYgKGtleSkge1xuXHRcdGlmICghc3RvcmVWaWV3Ll8pIHsgLy8gdGFnQ3R4LmN0eFBybSgpIGNhbGxcblx0XHRcdHRhZ0Vsc2UgPSBzdG9yZVZpZXcuaW5kZXg7XG5cdFx0XHRzdG9yZVZpZXcgPSBzdG9yZVZpZXcudGFnO1xuXHRcdH1cblx0XHRjYWxsVmlldyA9IHN0b3JlVmlldztcblx0XHRpZiAoc3RvcmUgJiYgc3RvcmUuaGFzT3duUHJvcGVydHkoa2V5KSB8fCAoc3RvcmUgPSAkaGVscGVycykuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuXHRcdFx0cmVzID0gc3RvcmVba2V5XTtcblx0XHRcdGlmIChrZXkgPT09IFwidGFnXCIgfHwga2V5ID09PSBcInRhZ0N0eFwiIHx8IGtleSA9PT0gXCJyb290XCIgfHwga2V5ID09PSBcInBhcmVudFRhZ3NcIikge1xuXHRcdFx0XHRyZXR1cm4gcmVzO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdG9yZSA9IHVuZGVmaW5lZDtcblx0XHR9XG5cdFx0aWYgKCFpc1JlbmRlckNhbGwgJiYgc3RvcmVWaWV3LnRhZ0N0eCB8fCBzdG9yZVZpZXcubGlua2VkKSB7IC8vIERhdGEtbGlua2VkIHZpZXcsIG9yIHRhZyBpbnN0YW5jZVxuXHRcdFx0aWYgKCFyZXMgfHwgIXJlcy5fY3hwKSB7XG5cdFx0XHRcdC8vIE5vdCBhIGNvbnRleHR1YWwgcGFyYW1ldGVyXG5cdFx0XHRcdC8vIFNldCBzdG9yZVZpZXcgdG8gdGFnIChpZiB0aGlzIGlzIGEgdGFnLmN0eFBybSgpIGNhbGwpIG9yIHRvIHJvb3QgdmlldyAoXCJkYXRhXCIgdmlldyBvZiBsaW5rZWQgdGVtcGxhdGUpXG5cdFx0XHRcdHN0b3JlVmlldyA9IHN0b3JlVmlldy50YWdDdHggfHwgJGlzRnVuY3Rpb24ocmVzKVxuXHRcdFx0XHRcdD8gc3RvcmVWaWV3IC8vIElzIGEgdGFnLCBub3QgYSB2aWV3LCBvciBpcyBhIGNvbXB1dGVkIGNvbnRleHR1YWwgcGFyYW1ldGVyLCBzbyBzY29wZSB0byB0aGUgY2FsbFZpZXcsIG5vIHRoZSAnc2NvcGUgdmlldydcblx0XHRcdFx0XHQ6IChzdG9yZVZpZXcgPSBzdG9yZVZpZXcuc2NvcGUgfHwgc3RvcmVWaWV3LFxuXHRcdFx0XHRcdFx0IXN0b3JlVmlldy5pc1RvcCAmJiBzdG9yZVZpZXcuY3R4LnRhZyAvLyBJZiB0aGlzIHZpZXcgaXMgaW4gYSB0YWcsIHNldCBzdG9yZVZpZXcgdG8gdGhlIHRhZ1xuXHRcdFx0XHRcdFx0XHR8fCBzdG9yZVZpZXcpO1xuXHRcdFx0XHRpZiAocmVzICE9PSB1bmRlZmluZWQgJiYgc3RvcmVWaWV3LnRhZ0N0eCkge1xuXHRcdFx0XHRcdC8vIElmIHN0b3JlVmlldyBpcyBhIHRhZywgYnV0IHRoZSBjb250ZXh0dWFsIHBhcmFtZXRlciBoYXMgYmVlbiBzZXQgYXQgYXQgaGlnaGVyIGxldmVsIChlLmcuIGhlbHBlcnMpLi4uXG5cdFx0XHRcdFx0c3RvcmVWaWV3ID0gc3RvcmVWaWV3LnRhZ0N0eC52aWV3LnNjb3BlOyAvLyAgdGhlbiBtb3ZlIHN0b3JlVmlldyB0byB0aGUgb3V0ZXIgbGV2ZWwgKHNjb3BlIG9mIHRhZyBjb250YWluZXIgdmlldylcblx0XHRcdFx0fVxuXHRcdFx0XHRzdG9yZSA9IHN0b3JlVmlldy5fb2Nwcztcblx0XHRcdFx0cmVzID0gc3RvcmUgJiYgc3RvcmUuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBzdG9yZVtrZXldIHx8IHJlcztcblx0XHRcdFx0aWYgKCEocmVzICYmIHJlcy5fY3hwKSAmJiAoZ2V0IHx8IGlzVXBkYXRlKSkge1xuXHRcdFx0XHRcdC8vIENyZWF0ZSBvYnNlcnZhYmxlIGNvbnRleHR1YWwgcGFyYW1ldGVyXG5cdFx0XHRcdFx0KHN0b3JlIHx8IChzdG9yZVZpZXcuX29jcHMgPSBzdG9yZVZpZXcuX29jcHMgfHwge30pKVtrZXldXG5cdFx0XHRcdFx0XHQ9IHJlc1xuXHRcdFx0XHRcdFx0PSBbe1xuXHRcdFx0XHRcdFx0XHRfb2NwOiByZXMsIC8vIFRoZSBvYnNlcnZhYmxlIGNvbnRleHR1YWwgcGFyYW1ldGVyIHZhbHVlXG5cdFx0XHRcdFx0XHRcdF92dzogY2FsbFZpZXcsXG5cdFx0XHRcdFx0XHRcdF9rZXk6IGtleVxuXHRcdFx0XHRcdFx0fV07XG5cdFx0XHRcdFx0cmVzLl9jeHAgPSB7XG5cdFx0XHRcdFx0XHRwYXRoOiBfb2NwLFxuXHRcdFx0XHRcdFx0aW5kOiAwLFxuXHRcdFx0XHRcdFx0dXBkYXRlVmFsdWU6IGZ1bmN0aW9uKHZhbCwgcGF0aCkge1xuXHRcdFx0XHRcdFx0XHQkLm9ic2VydmFibGUocmVzWzBdKS5zZXRQcm9wZXJ0eShfb2NwLCB2YWwpOyAvLyBTZXQgdGhlIHZhbHVlIChyZXNbMF0uX29jcClcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKG9ic0N0eFBybSA9IHJlcyAmJiByZXMuX2N4cCkge1xuXHRcdFx0XHQvLyBJZiB0aGlzIGhlbHBlciByZXNvdXJjZSBpcyBhbiBvYnNlcnZhYmxlIGNvbnRleHR1YWwgcGFyYW1ldGVyXG5cdFx0XHRcdGlmIChhcmd1bWVudHMubGVuZ3RoID4gMikge1xuXHRcdFx0XHRcdGRlcHMgPSByZXNbMV0gPyAkc3ViLl9jZW8ocmVzWzFdLmRlcHMpIDogW19vY3BdOyAvLyBmbiBkZXBzICh3aXRoIGFueSBleHByT2JzIGNsb25lZCB1c2luZyAkc3ViLl9jZW8pXG5cdFx0XHRcdFx0ZGVwcy51bnNoaWZ0KHJlc1swXSk7IC8vIHZpZXdcblx0XHRcdFx0XHRkZXBzLl9jeHAgPSBvYnNDdHhQcm07XG5cdFx0XHRcdFx0Ly8gSW4gYSBjb250ZXh0IGNhbGxiYWNrIGZvciBhIGNvbnRleHR1YWwgcGFyYW0sIHdlIHNldCBnZXQgPSB0cnVlLCB0byBnZXQgY3R4UHJtICBbdmlldywgZGVwZW5kZW5jaWVzLi4uXSBhcnJheSAtIG5lZWRlZCBmb3Igb2JzZXJ2ZSBjYWxsXG5cdFx0XHRcdFx0cmV0dXJuIGRlcHM7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGFnRWxzZSA9IG9ic0N0eFBybS50YWdFbHNlO1xuXHRcdFx0XHRuZXdSZXMgPSByZXNbMV0gLy8gbGlua0ZuIGZvciBjb21waWxlZCBleHByZXNzaW9uXG5cdFx0XHRcdFx0PyBvYnNDdHhQcm0udGFnICYmIG9ic0N0eFBybS50YWcuY3Z0QXJnc1xuXHRcdFx0XHRcdFx0PyBvYnNDdHhQcm0udGFnLmN2dEFyZ3ModGFnRWxzZSwgMSlbb2JzQ3R4UHJtLmluZF0gLy8gPSB0YWcuYm5kQXJncygpIC0gZm9yIHRhZyBjb250ZXh0dWFsIHBhcmFtZXRlclxuXHRcdFx0XHRcdFx0OiByZXNbMV0ocmVzWzBdLmRhdGEsIHJlc1swXSwgJHN1YikgICAgLy8gPSBmbihkYXRhLCB2aWV3LCAkc3ViKSBmb3IgY29tcGlsZWQgYmluZGluZyBleHByZXNzaW9uXG5cdFx0XHRcdFx0OiByZXNbMF0uX29jcDsgLy8gT2JzZXJ2YWJsZSBjb250ZXh0dWFsIHBhcmFtZXRlciAodW5pbml0aWFsaXplZCwgb3IgaW5pdGlhbGl6ZWQgYXMgc3RhdGljIGV4cHJlc3Npb24sIHNvIG5vIHBhdGggZGVwZW5kZW5jaWVzKVxuXHRcdFx0XHRpZiAoaXNVcGRhdGUpIHtcblx0XHRcdFx0XHQkc3ViLl91Y3Aoa2V5LCB2YWx1ZSwgc3RvcmVWaWV3LCBvYnNDdHhQcm0pOyAvLyBVcGRhdGUgb2JzZXJ2YWJsZSBjb250ZXh0dWFsIHBhcmFtZXRlclxuXHRcdFx0XHRcdHJldHVybiBzdG9yZVZpZXc7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmVzID0gbmV3UmVzO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAocmVzICYmICRpc0Z1bmN0aW9uKHJlcykpIHtcblx0XHRcdC8vIElmIGEgaGVscGVyIGlzIG9mIHR5cGUgZnVuY3Rpb24gd2Ugd2lsbCB3cmFwIGl0LCBzbyBpZiBjYWxsZWQgd2l0aCBubyB0aGlzIHBvaW50ZXIgaXQgd2lsbCBiZSBjYWxsZWQgd2l0aCB0aGVcblx0XHRcdC8vIHZpZXcgYXMgJ3RoaXMnIGNvbnRleHQuIElmIHRoZSBoZWxwZXIgfmZvbygpIHdhcyBpbiBhIGRhdGEtbGluayBleHByZXNzaW9uLCB0aGUgdmlldyB3aWxsIGhhdmUgYSAndGVtcG9yYXJ5JyBsaW5rQ3R4IHByb3BlcnR5IHRvby5cblx0XHRcdC8vIE5vdGUgdGhhdCBoZWxwZXIgZnVuY3Rpb25zIG9uIGRlZXBlciBwYXRocyB3aWxsIGhhdmUgc3BlY2lmaWMgdGhpcyBwb2ludGVycywgZnJvbSB0aGUgcHJlY2VkaW5nIHBhdGguXG5cdFx0XHQvLyBGb3IgZXhhbXBsZSwgfnV0aWwuZm9vKCkgd2lsbCBoYXZlIHRoZSB+dXRpbCBvYmplY3QgYXMgJ3RoaXMnIHBvaW50ZXJcblx0XHRcdHdyYXBwZWQgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIHJlcy5hcHBseSgoIXRoaXMgfHwgdGhpcyA9PT0gZ2xvYmFsKSA/IGNhbGxWaWV3IDogdGhpcywgYXJndW1lbnRzKTtcblx0XHRcdH07XG5cdFx0XHQkZXh0ZW5kKHdyYXBwZWQsIHJlcyk7IC8vIEF0dGFjaCBzYW1lIGV4cGFuZG9zIChpZiBhbnkpIHRvIHRoZSB3cmFwcGVkIGZ1bmN0aW9uXG5cdFx0fVxuXHRcdHJldHVybiB3cmFwcGVkIHx8IHJlcztcblx0fVxufVxuXG4vKiBJbnRlcm5hbCBwcml2YXRlOiB2aWV3Ll9nZXRUbXBsKCkgKi9cbmZ1bmN0aW9uIGdldFRlbXBsYXRlKHRtcGwpIHtcblx0cmV0dXJuIHRtcGwgJiYgKHRtcGwuZm5cblx0XHQ/IHRtcGxcblx0XHQ6IHRoaXMuZ2V0UnNjKFwidGVtcGxhdGVzXCIsIHRtcGwpIHx8ICR0ZW1wbGF0ZXModG1wbCkpOyAvLyBub3QgeWV0IGNvbXBpbGVkXG59XG5cbi8vPT09PT09PT09PT09PT1cbi8vIHZpZXdzLl9jbnZ0XG4vLz09PT09PT09PT09PT09XG5cbmZ1bmN0aW9uIGNvbnZlcnRWYWwoY29udmVydGVyLCB2aWV3LCB0YWdDdHgsIG9uRXJyb3IpIHtcblx0Ly8gQ2FsbGVkIGZyb20gY29tcGlsZWQgdGVtcGxhdGUgY29kZSBmb3Ige3s6fX1cblx0Ly8gc2VsZiBpcyB0ZW1wbGF0ZSBvYmplY3Qgb3IgbGlua0N0eCBvYmplY3Rcblx0dmFyIHRhZywgbGlua0N0eCwgdmFsdWUsIGFyZ3NMZW4sIGJpbmRUbyxcblx0XHQvLyBJZiB0YWdDdHggaXMgYW4gaW50ZWdlciwgdGhlbiBpdCBpcyB0aGUga2V5IGZvciB0aGUgY29tcGlsZWQgZnVuY3Rpb24gdG8gcmV0dXJuIHRoZSBib3VuZFRhZyB0YWdDdHhcblx0XHRib3VuZFRhZyA9IHR5cGVvZiB0YWdDdHggPT09IFwibnVtYmVyXCIgJiYgdmlldy50bXBsLmJuZHNbdGFnQ3R4LTFdO1xuXG5cdGlmIChvbkVycm9yID09PSB1bmRlZmluZWQgJiYgYm91bmRUYWcgJiYgYm91bmRUYWcuX2xyKSB7IC8vIGxhdGVSZW5kZXJcblx0XHRvbkVycm9yID0gXCJcIjtcblx0fVxuXHRpZiAob25FcnJvciAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0dGFnQ3R4ID0gb25FcnJvciA9IHtwcm9wczoge30sIGFyZ3M6IFtvbkVycm9yXX07XG5cdH0gZWxzZSBpZiAoYm91bmRUYWcpIHtcblx0XHR0YWdDdHggPSBib3VuZFRhZyh2aWV3LmRhdGEsIHZpZXcsICRzdWIpO1xuXHR9XG5cdGJvdW5kVGFnID0gYm91bmRUYWcuX2JkICYmIGJvdW5kVGFnO1xuXHRpZiAoY29udmVydGVyIHx8IGJvdW5kVGFnKSB7XG5cdFx0bGlua0N0eCA9IHZpZXcuX2xjOyAvLyBGb3IgZGF0YS1saW5rPVwie2N2dDouLi59XCIuLi4gU2VlIG9uRGF0YUxpbmtlZFRhZ0NoYW5nZVxuXHRcdHRhZyA9IGxpbmtDdHggJiYgbGlua0N0eC50YWc7XG5cdFx0dGFnQ3R4LnZpZXcgPSB2aWV3O1xuXHRcdGlmICghdGFnKSB7XG5cdFx0XHR0YWcgPSAkZXh0ZW5kKG5ldyAkc3ViLl90ZygpLCB7XG5cdFx0XHRcdF86IHtcblx0XHRcdFx0XHRibmQ6IGJvdW5kVGFnLFxuXHRcdFx0XHRcdHVubGlua2VkOiB0cnVlLFxuXHRcdFx0XHRcdGx0OiB0YWdDdHgubHQgLy8gSWYgYSBsYXRlIHBhdGggQHNvbWUucGF0aCBoYXMgbm90IHJldHVybmVkIEBzb21lIG9iamVjdCwgbWFyayB0YWcgYXMgbGF0ZVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRpbmxpbmU6ICFsaW5rQ3R4LFxuXHRcdFx0XHR0YWdOYW1lOiBcIjpcIixcblx0XHRcdFx0Y29udmVydDogY29udmVydGVyLFxuXHRcdFx0XHRvbkFycmF5Q2hhbmdlOiB0cnVlLFxuXHRcdFx0XHRmbG93OiB0cnVlLFxuXHRcdFx0XHR0YWdDdHg6IHRhZ0N0eCxcblx0XHRcdFx0dGFnQ3R4czogW3RhZ0N0eF0sXG5cdFx0XHRcdF9pczogXCJ0YWdcIlxuXHRcdFx0fSk7XG5cdFx0XHRhcmdzTGVuID0gdGFnQ3R4LmFyZ3MubGVuZ3RoO1xuXHRcdFx0aWYgKGFyZ3NMZW4+MSkge1xuXHRcdFx0XHRiaW5kVG8gPSB0YWcuYmluZFRvID0gW107XG5cdFx0XHRcdHdoaWxlIChhcmdzTGVuLS0pIHtcblx0XHRcdFx0XHRiaW5kVG8udW5zaGlmdChhcmdzTGVuKTsgLy8gQmluZCB0byBhbGwgdGhlIGFyZ3VtZW50cyAtIGdlbmVyYXRlIGJpbmRUbyBhcnJheTogWzAsMSwyLi4uXVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAobGlua0N0eCkge1xuXHRcdFx0XHRsaW5rQ3R4LnRhZyA9IHRhZztcblx0XHRcdFx0dGFnLmxpbmtDdHggPSBsaW5rQ3R4O1xuXHRcdFx0fVxuXHRcdFx0dGFnQ3R4LmN0eCA9IGV4dGVuZEN0eCh0YWdDdHguY3R4LCAobGlua0N0eCA/IGxpbmtDdHgudmlldyA6IHZpZXcpLmN0eCk7XG5cdFx0XHR0YWdIYW5kbGVyc0Zyb21Qcm9wcyh0YWcsIHRhZ0N0eCk7XG5cdFx0fVxuXHRcdHRhZy5fZXIgPSBvbkVycm9yICYmIHZhbHVlO1xuXHRcdHRhZy5jdHggPSB0YWdDdHguY3R4IHx8IHRhZy5jdHggfHwge307XG5cdFx0dGFnQ3R4LmN0eCA9IHVuZGVmaW5lZDtcblx0XHR2YWx1ZSA9IHRhZy5jdnRBcmdzKClbMF07IC8vIElmIHRoZXJlIGlzIGEgY29udmVydEJhY2sgYnV0IG5vIGNvbnZlcnQsIGNvbnZlcnRlciB3aWxsIGJlIFwidHJ1ZVwiXG5cdFx0dGFnLl9lciA9IG9uRXJyb3IgJiYgdmFsdWU7XG5cdH0gZWxzZSB7XG5cdFx0dmFsdWUgPSB0YWdDdHguYXJnc1swXTtcblx0fVxuXG5cdC8vIENhbGwgb25SZW5kZXIgKHVzZWQgYnkgSnNWaWV3cyBpZiBwcmVzZW50LCB0byBhZGQgYmluZGluZyBhbm5vdGF0aW9ucyBhcm91bmQgcmVuZGVyZWQgY29udGVudClcblx0dmFsdWUgPSBib3VuZFRhZyAmJiB2aWV3Ll8ub25SZW5kZXJcblx0XHQ/IHZpZXcuXy5vblJlbmRlcih2YWx1ZSwgdmlldywgdGFnKVxuXHRcdDogdmFsdWU7XG5cdHJldHVybiB2YWx1ZSAhPSB1bmRlZmluZWQgPyB2YWx1ZSA6IFwiXCI7XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRBcmdzKHRhZ0Vsc2UsIGJvdW5kKSB7IC8vIHRhZy5jdnRBcmdzKCkgb3IgdGFnLmN2dEFyZ3ModGFnRWxzZT8sIHRydWU/KVxuXHR2YXIgbCwga2V5LCBib3VuZEFyZ3MsIGFyZ3MsIGJpbmRGcm9tLCB0YWcsIGNvbnZlcnRlcixcblx0XHR0YWdDdHggPSB0aGlzO1xuXG5cdGlmICh0YWdDdHgudGFnTmFtZSkge1xuXHRcdHRhZyA9IHRhZ0N0eDtcblx0XHR0YWdDdHggPSAodGFnLnRhZ0N0eHMgfHwgW3RhZ0N0eF0pW3RhZ0Vsc2V8fDBdO1xuXHRcdGlmICghdGFnQ3R4KSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdHRhZyA9IHRhZ0N0eC50YWc7XG5cdH1cblxuXHRiaW5kRnJvbSA9IHRhZy5iaW5kRnJvbTtcblx0YXJncyA9IHRhZ0N0eC5hcmdzO1xuXG5cdGlmICgoY29udmVydGVyID0gdGFnLmNvbnZlcnQpICYmIFwiXCIgKyBjb252ZXJ0ZXIgPT09IGNvbnZlcnRlcikge1xuXHRcdGNvbnZlcnRlciA9IGNvbnZlcnRlciA9PT0gXCJ0cnVlXCJcblx0XHRcdD8gdW5kZWZpbmVkXG5cdFx0XHQ6ICh0YWdDdHgudmlldy5nZXRSc2MoXCJjb252ZXJ0ZXJzXCIsIGNvbnZlcnRlcikgfHwgZXJyb3IoXCJVbmtub3duIGNvbnZlcnRlcjogJ1wiICsgY29udmVydGVyICsgXCInXCIpKTtcblx0fVxuXG5cdGlmIChjb252ZXJ0ZXIgJiYgIWJvdW5kKSB7IC8vIElmIHRoZXJlIGlzIGEgY29udmVydGVyLCB1c2UgYSBjb3B5IG9mIHRoZSB0YWdDdHguYXJncyBhcnJheSBmb3IgcmVuZGVyaW5nLCBhbmQgcmVwbGFjZSB0aGUgYXJnc1swXSBpblxuXHRcdGFyZ3MgPSBhcmdzLnNsaWNlKCk7IC8vIHRoZSBjb3BpZWQgYXJyYXkgd2l0aCB0aGUgY29udmVydGVkIHZhbHVlLiBCdXQgd2UgZG8gbm90IG1vZGlmeSB0aGUgdmFsdWUgb2YgdGFnLnRhZ0N0eC5hcmdzWzBdICh0aGUgb3JpZ2luYWwgYXJncyBhcnJheSlcblx0fVxuXHRpZiAoYmluZEZyb20pIHsgLy8gR2V0IHRoZSB2YWx1ZXMgb2YgdGhlIGJvdW5kQXJnc1xuXHRcdGJvdW5kQXJncyA9IFtdO1xuXHRcdGwgPSBiaW5kRnJvbS5sZW5ndGg7XG5cdFx0d2hpbGUgKGwtLSkge1xuXHRcdFx0a2V5ID0gYmluZEZyb21bbF07XG5cdFx0XHRib3VuZEFyZ3MudW5zaGlmdChhcmdPclByb3AodGFnQ3R4LCBrZXkpKTtcblx0XHR9XG5cdFx0aWYgKGJvdW5kKSB7XG5cdFx0XHRhcmdzID0gYm91bmRBcmdzOyAvLyBDYWxsIHRvIGJuZEFyZ3MoKSAtIHJldHVybnMgdGhlIGJvdW5kQXJnc1xuXHRcdH1cblx0fVxuXHRpZiAoY29udmVydGVyKSB7XG5cdFx0Y29udmVydGVyID0gY29udmVydGVyLmFwcGx5KHRhZywgYm91bmRBcmdzIHx8IGFyZ3MpO1xuXHRcdGlmIChjb252ZXJ0ZXIgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIGFyZ3M7IC8vIFJldHVybmluZyB1bmRlZmluZWQgZnJvbSBhIGNvbnZlcnRlciBpcyBlcXVpdmFsZW50IHRvIG5vdCBoYXZpbmcgYSBjb252ZXJ0ZXIuXG5cdFx0fVxuXHRcdGJpbmRGcm9tID0gYmluZEZyb20gfHwgWzBdO1xuXHRcdGwgPSBiaW5kRnJvbS5sZW5ndGg7XG5cdFx0aWYgKCEkaXNBcnJheShjb252ZXJ0ZXIpIHx8IGNvbnZlcnRlci5sZW5ndGggIT09IGwpIHtcblx0XHRcdGNvbnZlcnRlciA9IFtjb252ZXJ0ZXJdO1xuXHRcdFx0YmluZEZyb20gPSBbMF07XG5cdFx0XHRsID0gMTtcblx0XHR9XG5cdFx0aWYgKGJvdW5kKSB7ICAgICAgICAvLyBDYWxsIHRvIGJuZEFyZ3MoKSAtIHNvIGFwcGx5IGNvbnZlcnRlciB0byBhbGwgYm91bmRBcmdzXG5cdFx0XHRhcmdzID0gY29udmVydGVyOyAvLyBUaGUgYXJyYXkgb2YgdmFsdWVzIHJldHVybmVkIGZyb20gdGhlIGNvbnZlcnRlclxuXHRcdH0gZWxzZSB7ICAgICAgICAgICAgLy8gQ2FsbCB0byBjdnRBcmdzKClcblx0XHRcdHdoaWxlIChsLS0pIHtcblx0XHRcdFx0a2V5ID0gYmluZEZyb21bbF07XG5cdFx0XHRcdGlmICgra2V5ID09PSBrZXkpIHtcblx0XHRcdFx0XHRhcmdzW2tleV0gPSBjb252ZXJ0ZXJbbF07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblx0cmV0dXJuIGFyZ3M7XG59XG5cbmZ1bmN0aW9uIGFyZ09yUHJvcChjb250ZXh0LCBrZXkpIHtcblx0Y29udGV4dCA9IGNvbnRleHRbK2tleSA9PT0ga2V5ID8gXCJhcmdzXCIgOiBcInByb3BzXCJdO1xuXHRyZXR1cm4gY29udGV4dCAmJiBjb250ZXh0W2tleV07XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRCb3VuZEFyZ3ModGFnRWxzZSkgeyAvLyB0YWcuYm5kQXJncygpXG5cdHJldHVybiB0aGlzLmN2dEFyZ3ModGFnRWxzZSwgMSk7XG59XG5cbi8vPT09PT09PT09PT09PVxuLy8gdmlld3MudGFnXG4vLz09PT09PT09PT09PT1cblxuLyogdmlldy5nZXRSc2MoKSAqL1xuZnVuY3Rpb24gZ2V0UmVzb3VyY2UocmVzb3VyY2VUeXBlLCBpdGVtTmFtZSkge1xuXHR2YXIgcmVzLCBzdG9yZSxcblx0XHR2aWV3ID0gdGhpcztcblx0aWYgKFwiXCIgKyBpdGVtTmFtZSA9PT0gaXRlbU5hbWUpIHtcblx0XHR3aGlsZSAoKHJlcyA9PT0gdW5kZWZpbmVkKSAmJiB2aWV3KSB7XG5cdFx0XHRzdG9yZSA9IHZpZXcudG1wbCAmJiB2aWV3LnRtcGxbcmVzb3VyY2VUeXBlXTtcblx0XHRcdHJlcyA9IHN0b3JlICYmIHN0b3JlW2l0ZW1OYW1lXTtcblx0XHRcdHZpZXcgPSB2aWV3LnBhcmVudDtcblx0XHR9XG5cdFx0cmV0dXJuIHJlcyB8fCAkdmlld3NbcmVzb3VyY2VUeXBlXVtpdGVtTmFtZV07XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVuZGVyVGFnKHRhZ05hbWUsIHBhcmVudFZpZXcsIHRtcGwsIHRhZ0N0eHMsIGlzVXBkYXRlLCBvbkVycm9yKSB7XG5cdGZ1bmN0aW9uIGJpbmRUb09yQmluZEZyb20odHlwZSkge1xuXHRcdHZhciBiaW5kQXJyYXkgPSB0YWdbdHlwZV07XG5cblx0XHRpZiAoYmluZEFycmF5ICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdGJpbmRBcnJheSA9ICRpc0FycmF5KGJpbmRBcnJheSkgPyBiaW5kQXJyYXkgOiBbYmluZEFycmF5XTtcblx0XHRcdG0gPSBiaW5kQXJyYXkubGVuZ3RoO1xuXHRcdFx0d2hpbGUgKG0tLSkge1xuXHRcdFx0XHRrZXkgPSBiaW5kQXJyYXlbbV07XG5cdFx0XHRcdGlmICghaXNOYU4ocGFyc2VJbnQoa2V5KSkpIHtcblx0XHRcdFx0XHRiaW5kQXJyYXlbbV0gPSBwYXJzZUludChrZXkpOyAvLyBDb252ZXJ0IFwiMFwiIHRvIDAsICBldGMuXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gYmluZEFycmF5IHx8IFswXTtcblx0fVxuXG5cdHBhcmVudFZpZXcgPSBwYXJlbnRWaWV3IHx8IHRvcFZpZXc7XG5cdHZhciB0YWcsIHRhZ0RlZiwgdGVtcGxhdGUsIHRhZ3MsIGF0dHIsIHBhcmVudFRhZywgbCwgbSwgbiwgaXRlbVJldCwgdGFnQ3R4LCB0YWdDdHhDdHgsIGN0eFBybSwgYmluZFRvLCBiaW5kRnJvbSwgaW5pdFZhbCxcblx0XHRjb250ZW50LCBjYWxsSW5pdCwgbWFwRGVmLCB0aGlzTWFwLCBhcmdzLCBiZEFyZ3MsIHByb3BzLCB0YWdEYXRhTWFwLCBjb250ZW50Q3R4LCBrZXksIGJpbmRGcm9tTGVuZ3RoLCBiaW5kVG9MZW5ndGgsIGxpbmtlZEVsZW1lbnQsIGRlZmF1bHRDdHgsXG5cdFx0aSA9IDAsXG5cdFx0cmV0ID0gXCJcIixcblx0XHRsaW5rQ3R4ID0gcGFyZW50Vmlldy5fbGMgfHwgZmFsc2UsIC8vIEZvciBkYXRhLWxpbms9XCJ7bXlUYWcuLi59XCIuLi4gU2VlIG9uRGF0YUxpbmtlZFRhZ0NoYW5nZVxuXHRcdGN0eCA9IHBhcmVudFZpZXcuY3R4LFxuXHRcdHBhcmVudFRtcGwgPSB0bXBsIHx8IHBhcmVudFZpZXcudG1wbCxcblx0XHQvLyBJZiB0YWdDdHhzIGlzIGFuIGludGVnZXIsIHRoZW4gaXQgaXMgdGhlIGtleSBmb3IgdGhlIGNvbXBpbGVkIGZ1bmN0aW9uIHRvIHJldHVybiB0aGUgYm91bmRUYWcgdGFnQ3R4c1xuXHRcdGJvdW5kVGFnID0gdHlwZW9mIHRhZ0N0eHMgPT09IFwibnVtYmVyXCIgJiYgcGFyZW50Vmlldy50bXBsLmJuZHNbdGFnQ3R4cy0xXTtcblxuXHRpZiAodGFnTmFtZS5faXMgPT09IFwidGFnXCIpIHtcblx0XHR0YWcgPSB0YWdOYW1lO1xuXHRcdHRhZ05hbWUgPSB0YWcudGFnTmFtZTtcblx0XHR0YWdDdHhzID0gdGFnLnRhZ0N0eHM7XG5cdFx0dGVtcGxhdGUgPSB0YWcudGVtcGxhdGU7XG5cdH0gZWxzZSB7XG5cdFx0dGFnRGVmID0gcGFyZW50Vmlldy5nZXRSc2MoXCJ0YWdzXCIsIHRhZ05hbWUpIHx8IGVycm9yKFwiVW5rbm93biB0YWc6IHt7XCIgKyB0YWdOYW1lICsgXCJ9fSBcIik7XG5cdFx0dGVtcGxhdGUgPSB0YWdEZWYudGVtcGxhdGU7XG5cdH1cblx0aWYgKG9uRXJyb3IgPT09IHVuZGVmaW5lZCAmJiBib3VuZFRhZyAmJiAoYm91bmRUYWcuX2xyID0gKHRhZ0RlZi5sYXRlUmVuZGVyICYmIGJvdW5kVGFnLl9sciE9PSBmYWxzZSB8fCBib3VuZFRhZy5fbHIpKSkge1xuXHRcdG9uRXJyb3IgPSBcIlwiOyAvLyBJZiBsYXRlUmVuZGVyLCBzZXQgdGVtcG9yYXJ5IG9uRXJyb3IsIHRvIHNraXAgaW5pdGlhbCByZW5kZXJpbmcgKGFuZCByZW5kZXIganVzdCBcIlwiKVxuXHR9XG5cdGlmIChvbkVycm9yICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXQgKz0gb25FcnJvcjtcblx0XHR0YWdDdHhzID0gb25FcnJvciA9IFt7cHJvcHM6IHt9LCBhcmdzOiBbXSwgcGFyYW1zOiB7cHJvcHM6e319fV07XG5cdH0gZWxzZSBpZiAoYm91bmRUYWcpIHtcblx0XHR0YWdDdHhzID0gYm91bmRUYWcocGFyZW50Vmlldy5kYXRhLCBwYXJlbnRWaWV3LCAkc3ViKTtcblx0fVxuXG5cdGwgPSB0YWdDdHhzLmxlbmd0aDtcblx0Zm9yICg7IGkgPCBsOyBpKyspIHtcblx0XHR0YWdDdHggPSB0YWdDdHhzW2ldO1xuXHRcdGNvbnRlbnQgPSB0YWdDdHgudG1wbDtcblx0XHRpZiAoIWxpbmtDdHggfHwgIWxpbmtDdHgudGFnIHx8IGkgJiYgIWxpbmtDdHgudGFnLmlubGluZSB8fCB0YWcuX2VyIHx8IGNvbnRlbnQgJiYgK2NvbnRlbnQ9PT1jb250ZW50KSB7XG5cdFx0XHQvLyBJbml0aWFsaXplIHRhZ0N0eFxuXHRcdFx0Ly8gRm9yIGJsb2NrIHRhZ3MsIHRhZ0N0eC50bXBsIGlzIGFuIGludGVnZXIgPiAwXG5cdFx0XHRpZiAoY29udGVudCAmJiBwYXJlbnRUbXBsLnRtcGxzKSB7XG5cdFx0XHRcdHRhZ0N0eC50bXBsID0gdGFnQ3R4LmNvbnRlbnQgPSBwYXJlbnRUbXBsLnRtcGxzW2NvbnRlbnQgLSAxXTsgLy8gU2V0IHRoZSB0bXBsIHByb3BlcnR5IHRvIHRoZSBjb250ZW50IG9mIHRoZSBibG9jayB0YWdcblx0XHRcdH1cblx0XHRcdHRhZ0N0eC5pbmRleCA9IGk7XG5cdFx0XHR0YWdDdHguY3R4UHJtID0gY29udGV4dFBhcmFtZXRlcjtcblx0XHRcdHRhZ0N0eC5yZW5kZXIgPSByZW5kZXJDb250ZW50O1xuXHRcdFx0dGFnQ3R4LmN2dEFyZ3MgPSBjb252ZXJ0QXJncztcblx0XHRcdHRhZ0N0eC5ibmRBcmdzID0gY29udmVydEJvdW5kQXJncztcblx0XHRcdHRhZ0N0eC52aWV3ID0gcGFyZW50Vmlldztcblx0XHRcdHRhZ0N0eC5jdHggPSBleHRlbmRDdHgoZXh0ZW5kQ3R4KHRhZ0N0eC5jdHgsIHRhZ0RlZiAmJiB0YWdEZWYuY3R4KSwgY3R4KTsgLy8gQ2xvbmUgYW5kIGV4dGVuZCBwYXJlbnRWaWV3LmN0eFxuXHRcdH1cblx0XHRpZiAodG1wbCA9IHRhZ0N0eC5wcm9wcy50bXBsKSB7XG5cdFx0XHQvLyBJZiB0aGUgdG1wbCBwcm9wZXJ0eSBpcyBvdmVycmlkZGVuLCBzZXQgdGhlIHZhbHVlICh3aGVuIGluaXRpYWxpemluZywgb3IsIGluIGNhc2Ugb2YgYmluZGluZzogXnRtcGw9Li4uLCB3aGVuIHVwZGF0aW5nKVxuXHRcdFx0dGFnQ3R4LnRtcGwgPSBwYXJlbnRWaWV3Ll9nZXRUbXBsKHRtcGwpO1xuXHRcdFx0dGFnQ3R4LmNvbnRlbnQgPSB0YWdDdHguY29udGVudCB8fCB0YWdDdHgudG1wbDtcblx0XHR9XG5cblx0XHRpZiAoIXRhZykge1xuXHRcdFx0Ly8gVGhpcyB3aWxsIG9ubHkgYmUgaGl0IGZvciBpbml0aWFsIHRhZ0N0eCAobm90IGZvciB7e2Vsc2V9fSkgLSBpZiB0aGUgdGFnIGluc3RhbmNlIGRvZXMgbm90IGV4aXN0IHlldFxuXHRcdFx0Ly8gSWYgdGhlIHRhZyBoYXMgbm90IGFscmVhZHkgYmVlbiBpbnN0YW50aWF0ZWQsIHdlIHdpbGwgY3JlYXRlIGEgbmV3IGluc3RhbmNlLlxuXHRcdFx0Ly8gfnRhZyB3aWxsIGFjY2VzcyB0aGUgdGFnLCBldmVuIHdpdGhpbiB0aGUgcmVuZGVyaW5nIG9mIHRoZSB0ZW1wbGF0ZSBjb250ZW50IG9mIHRoaXMgdGFnLlxuXHRcdFx0Ly8gRnJvbSBjaGlsZC9kZXNjZW5kYW50IHRhZ3MsIGNhbiBhY2Nlc3MgdXNpbmcgfnRhZy5wYXJlbnQsIG9yIH5wYXJlbnRUYWdzLnRhZ05hbWVcblx0XHRcdHRhZyA9IG5ldyB0YWdEZWYuX2N0cigpO1xuXHRcdFx0Y2FsbEluaXQgPSAhIXRhZy5pbml0O1xuXG5cdFx0XHR0YWcucGFyZW50ID0gcGFyZW50VGFnID0gY3R4ICYmIGN0eC50YWc7XG5cdFx0XHR0YWcudGFnQ3R4cyA9IHRhZ0N0eHM7XG5cblx0XHRcdGlmIChsaW5rQ3R4KSB7XG5cdFx0XHRcdHRhZy5pbmxpbmUgPSBmYWxzZTtcblx0XHRcdFx0bGlua0N0eC50YWcgPSB0YWc7XG5cdFx0XHR9XG5cdFx0XHR0YWcubGlua0N0eCA9IGxpbmtDdHg7XG5cdFx0XHRpZiAodGFnLl8uYm5kID0gYm91bmRUYWcgfHwgbGlua0N0eC5mbikge1xuXHRcdFx0XHQvLyBCb3VuZCBpZiB7Xnt0YWcuLi59fSBvciBkYXRhLWxpbms9XCJ7dGFnLi4ufVwiXG5cdFx0XHRcdHRhZy5fLnRocyA9IHRhZ0N0eC5wYXJhbXMucHJvcHMudGhpczsgLy8gVGFnIGhhcyBhIHRoaXM9ZXhwciBiaW5kaW5nLCB0byBnZXQgamF2YXNjcmlwdCByZWZlcmVuY2UgdG8gdGFnIGluc3RhbmNlXG5cdFx0XHRcdHRhZy5fLmx0ID0gdGFnQ3R4cy5sdDsgLy8gSWYgYSBsYXRlIHBhdGggQHNvbWUucGF0aCBoYXMgbm90IHJldHVybmVkIEBzb21lIG9iamVjdCwgbWFyayB0YWcgYXMgbGF0ZVxuXHRcdFx0XHR0YWcuXy5hcnJWd3MgPSB7fTtcblx0XHRcdH0gZWxzZSBpZiAodGFnLmRhdGFCb3VuZE9ubHkpIHtcblx0XHRcdFx0ZXJyb3IodGFnTmFtZSArIFwiIG11c3QgYmUgZGF0YS1ib3VuZDpcXG57XntcIiArIHRhZ05hbWUgKyBcIn19XCIpO1xuXHRcdFx0fVxuXHRcdFx0Ly9UT0RPIGJldHRlciBwZXJmIGZvciBjaGlsZFRhZ3MoKSAtIGtlZXAgY2hpbGQgdGFnLnRhZ3MgYXJyYXksIChhbmQgcmVtb3ZlIGNoaWxkLCB3aGVuIGRpc3Bvc2VkKVxuXHRcdFx0Ly8gdGFnLnRhZ3MgPSBbXTtcblx0XHR9IGVsc2UgaWYgKGxpbmtDdHggJiYgbGlua0N0eC5mbi5fbHIpIHtcblx0XHRcdGNhbGxJbml0ID0gISF0YWcuaW5pdDtcblx0XHR9XG5cdFx0dGFnRGF0YU1hcCA9IHRhZy5kYXRhTWFwO1xuXG5cdFx0dGFnQ3R4LnRhZyA9IHRhZztcblx0XHRpZiAodGFnRGF0YU1hcCAmJiB0YWdDdHhzKSB7XG5cdFx0XHR0YWdDdHgubWFwID0gdGFnQ3R4c1tpXS5tYXA7IC8vIENvcHkgb3ZlciB0aGUgY29tcGlsZWQgbWFwIGluc3RhbmNlIGZyb20gdGhlIHByZXZpb3VzIHRhZ0N0eHMgdG8gdGhlIHJlZnJlc2hlZCBvbmVzXG5cdFx0fVxuXHRcdGlmICghdGFnLmZsb3cpIHtcblx0XHRcdHRhZ0N0eEN0eCA9IHRhZ0N0eC5jdHggPSB0YWdDdHguY3R4IHx8IHt9O1xuXG5cdFx0XHQvLyB0YWdzIGhhc2g6IHRhZy5jdHgudGFncywgbWVyZ2VkIHdpdGggcGFyZW50Vmlldy5jdHgudGFncyxcblx0XHRcdHRhZ3MgPSB0YWcucGFyZW50cyA9IHRhZ0N0eEN0eC5wYXJlbnRUYWdzID0gY3R4ICYmIGV4dGVuZEN0eCh0YWdDdHhDdHgucGFyZW50VGFncywgY3R4LnBhcmVudFRhZ3MpIHx8IHt9O1xuXHRcdFx0aWYgKHBhcmVudFRhZykge1xuXHRcdFx0XHR0YWdzW3BhcmVudFRhZy50YWdOYW1lXSA9IHBhcmVudFRhZztcblx0XHRcdFx0Ly9UT0RPIGJldHRlciBwZXJmIGZvciBjaGlsZFRhZ3M6IHBhcmVudFRhZy50YWdzLnB1c2godGFnKTtcblx0XHRcdH1cblx0XHRcdHRhZ3NbdGFnLnRhZ05hbWVdID0gdGFnQ3R4Q3R4LnRhZyA9IHRhZztcblx0XHRcdHRhZ0N0eEN0eC50YWdDdHggPSB0YWdDdHg7XG5cdFx0fVxuXHR9XG5cdGlmICghKHRhZy5fZXIgPSBvbkVycm9yKSkge1xuXHRcdHRhZ0hhbmRsZXJzRnJvbVByb3BzKHRhZywgdGFnQ3R4c1swXSk7XG5cdFx0dGFnLnJlbmRlcmluZyA9IHtybmRyOiB0YWcucmVuZGVyaW5nfTsgLy8gUHJvdmlkZSBvYmplY3QgZm9yIHN0YXRlIGR1cmluZyByZW5kZXIgY2FsbHMgdG8gdGFnIGFuZCBlbHNlcy4gKFVzZWQgYnkge3tpZn19IGFuZCB7e2Zvcn19Li4uKVxuXHRcdGZvciAoaSA9IDA7IGkgPCBsOyBpKyspIHsgLy8gSXRlcmF0ZSB0YWdDdHggZm9yIGVhY2gge3tlbHNlfX0gYmxvY2tcblx0XHRcdHRhZ0N0eCA9IHRhZy50YWdDdHggPSB0YWdDdHhzW2ldO1xuXHRcdFx0cHJvcHMgPSB0YWdDdHgucHJvcHM7XG5cdFx0XHR0YWcuY3R4ID0gdGFnQ3R4LmN0eDtcblxuXHRcdFx0aWYgKCFpKSB7XG5cdFx0XHRcdGlmIChjYWxsSW5pdCkge1xuXHRcdFx0XHRcdHRhZy5pbml0KHRhZ0N0eCwgbGlua0N0eCwgdGFnLmN0eCk7XG5cdFx0XHRcdFx0Y2FsbEluaXQgPSB1bmRlZmluZWQ7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCF0YWdDdHguYXJncy5sZW5ndGggJiYgdGFnQ3R4LmFyZ0RlZmF1bHQgIT09IGZhbHNlICYmIHRhZy5hcmdEZWZhdWx0ICE9PSBmYWxzZSkge1xuXHRcdFx0XHRcdHRhZ0N0eC5hcmdzID0gYXJncyA9IFt0YWdDdHgudmlldy5kYXRhXTsgLy8gTWlzc2luZyBmaXJzdCBhcmcgZGVmYXVsdHMgdG8gdGhlIGN1cnJlbnQgZGF0YSBjb250ZXh0XG5cdFx0XHRcdFx0dGFnQ3R4LnBhcmFtcy5hcmdzID0gW1wiI2RhdGFcIl07XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRiaW5kVG8gPSBiaW5kVG9PckJpbmRGcm9tKFwiYmluZFRvXCIpO1xuXG5cdFx0XHRcdGlmICh0YWcuYmluZFRvICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHR0YWcuYmluZFRvID0gYmluZFRvO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKHRhZy5iaW5kRnJvbSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0dGFnLmJpbmRGcm9tID0gYmluZFRvT3JCaW5kRnJvbShcImJpbmRGcm9tXCIpO1xuXHRcdFx0XHR9IGVsc2UgaWYgKHRhZy5iaW5kVG8pIHtcblx0XHRcdFx0XHR0YWcuYmluZEZyb20gPSB0YWcuYmluZFRvID0gYmluZFRvO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJpbmRGcm9tID0gdGFnLmJpbmRGcm9tIHx8IGJpbmRUbztcblxuXHRcdFx0XHRiaW5kVG9MZW5ndGggPSBiaW5kVG8ubGVuZ3RoO1xuXHRcdFx0XHRiaW5kRnJvbUxlbmd0aCA9IGJpbmRGcm9tLmxlbmd0aDtcblxuXHRcdFx0XHRpZiAodGFnLl8uYm5kICYmIChsaW5rZWRFbGVtZW50ID0gdGFnLmxpbmtlZEVsZW1lbnQpKSB7XG5cdFx0XHRcdFx0dGFnLmxpbmtlZEVsZW1lbnQgPSBsaW5rZWRFbGVtZW50ID0gJGlzQXJyYXkobGlua2VkRWxlbWVudCkgPyBsaW5rZWRFbGVtZW50OiBbbGlua2VkRWxlbWVudF07XG5cblx0XHRcdFx0XHRpZiAoYmluZFRvTGVuZ3RoICE9PSBsaW5rZWRFbGVtZW50Lmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0ZXJyb3IoXCJsaW5rZWRFbGVtZW50IG5vdCBzYW1lIGxlbmd0aCBhcyBiaW5kVG9cIik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChsaW5rZWRFbGVtZW50ID0gdGFnLmxpbmtlZEN0eFBhcmFtKSB7XG5cdFx0XHRcdFx0dGFnLmxpbmtlZEN0eFBhcmFtID0gbGlua2VkRWxlbWVudCA9ICRpc0FycmF5KGxpbmtlZEVsZW1lbnQpID8gbGlua2VkRWxlbWVudDogW2xpbmtlZEVsZW1lbnRdO1xuXG5cdFx0XHRcdFx0aWYgKGJpbmRGcm9tTGVuZ3RoICE9PSBsaW5rZWRFbGVtZW50Lmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0ZXJyb3IoXCJsaW5rZWRDdHhQYXJhbSBub3Qgc2FtZSBsZW5ndGggYXMgYmluZEZyb20vYmluZFRvXCIpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChiaW5kRnJvbSkge1xuXHRcdFx0XHRcdHRhZy5fLmZyb21JbmRleCA9IHt9OyAvLyBIYXNoIG9mIGJpbmRGcm9tIGluZGV4IHdoaWNoIGhhcyBzYW1lIHBhdGggdmFsdWUgYXMgYmluZFRvIGluZGV4LiBmcm9tSW5kZXggPSB0YWcuXy5mcm9tSW5kZXhbdG9JbmRleF1cblx0XHRcdFx0XHR0YWcuXy50b0luZGV4ID0ge307IC8vIEhhc2ggb2YgYmluZEZyb20gaW5kZXggd2hpY2ggaGFzIHNhbWUgcGF0aCB2YWx1ZSBhcyBiaW5kVG8gaW5kZXguIGZyb21JbmRleCA9IHRhZy5fLmZyb21JbmRleFt0b0luZGV4XVxuXHRcdFx0XHRcdG4gPSBiaW5kRnJvbUxlbmd0aDtcblx0XHRcdFx0XHR3aGlsZSAobi0tKSB7XG5cdFx0XHRcdFx0XHRrZXkgPSBiaW5kRnJvbVtuXTtcblx0XHRcdFx0XHRcdG0gPSBiaW5kVG9MZW5ndGg7XG5cdFx0XHRcdFx0XHR3aGlsZSAobS0tKSB7XG5cdFx0XHRcdFx0XHRcdGlmIChrZXkgPT09IGJpbmRUb1ttXSkge1xuXHRcdFx0XHRcdFx0XHRcdHRhZy5fLmZyb21JbmRleFttXSA9IG47XG5cdFx0XHRcdFx0XHRcdFx0dGFnLl8udG9JbmRleFtuXSA9IG07XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAobGlua0N0eCkge1xuXHRcdFx0XHRcdC8vIFNldCBhdHRyIG9uIGxpbmtDdHggdG8gZW5zdXJlIG91dHB1dHRpbmcgdG8gdGhlIGNvcnJlY3QgdGFyZ2V0IGF0dHJpYnV0ZS5cblx0XHRcdFx0XHQvLyBTZXR0aW5nIGVpdGhlciBsaW5rQ3R4LmF0dHIgb3IgdGhpcy5hdHRyIGluIHRoZSBpbml0KCkgYWxsb3dzIHBlci1pbnN0YW5jZSBjaG9pY2Ugb2YgdGFyZ2V0IGF0dHJpYi5cblx0XHRcdFx0XHRsaW5rQ3R4LmF0dHIgPSB0YWcuYXR0ciA9IGxpbmtDdHguYXR0ciB8fCB0YWcuYXR0ciB8fCBsaW5rQ3R4Ll9kZkF0O1xuXHRcdFx0XHR9XG5cdFx0XHRcdGF0dHIgPSB0YWcuYXR0cjtcblx0XHRcdFx0dGFnLl8ubm9Wd3MgPSBhdHRyICYmIGF0dHIgIT09IEhUTUw7XG5cdFx0XHR9XG5cdFx0XHRhcmdzID0gdGFnLmN2dEFyZ3MoaSk7XG5cdFx0XHRpZiAodGFnLmxpbmtlZEN0eFBhcmFtKSB7XG5cdFx0XHRcdGJkQXJncyA9IHRhZy5jdnRBcmdzKGksIDEpO1xuXHRcdFx0XHRtID0gYmluZEZyb21MZW5ndGg7XG5cdFx0XHRcdGRlZmF1bHRDdHggPSB0YWcuY29uc3RydWN0b3IucHJvdG90eXBlLmN0eDtcblx0XHRcdFx0d2hpbGUgKG0tLSkge1xuXHRcdFx0XHRcdGlmIChjdHhQcm0gPSB0YWcubGlua2VkQ3R4UGFyYW1bbV0pIHtcblx0XHRcdFx0XHRcdGtleSA9IGJpbmRGcm9tW21dO1xuXHRcdFx0XHRcdFx0aW5pdFZhbCA9IGJkQXJnc1ttXTtcblx0XHRcdFx0XHRcdC8vIENyZWF0ZSB0YWcgY29udGV4dHVhbCBwYXJhbWV0ZXJcblx0XHRcdFx0XHRcdHRhZ0N0eC5jdHhbY3R4UHJtXSA9ICRzdWIuX2NwKFxuXHRcdFx0XHRcdFx0XHRkZWZhdWx0Q3R4ICYmIGluaXRWYWwgPT09IHVuZGVmaW5lZCA/IGRlZmF1bHRDdHhbY3R4UHJtXTogaW5pdFZhbCxcblx0XHRcdFx0XHRcdFx0aW5pdFZhbCAhPT0gdW5kZWZpbmVkICYmIGFyZ09yUHJvcCh0YWdDdHgucGFyYW1zLCBrZXkpLFxuXHRcdFx0XHRcdFx0XHR0YWdDdHgudmlldyxcblx0XHRcdFx0XHRcdFx0dGFnLl8uYm5kICYmIHt0YWc6IHRhZywgY3Z0OiB0YWcuY29udmVydCwgaW5kOiBtLCB0YWdFbHNlOiBpfVxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmICgobWFwRGVmID0gcHJvcHMuZGF0YU1hcCB8fCB0YWdEYXRhTWFwKSAmJiAoYXJncy5sZW5ndGggfHwgcHJvcHMuZGF0YU1hcCkpIHtcblx0XHRcdFx0dGhpc01hcCA9IHRhZ0N0eC5tYXA7XG5cdFx0XHRcdGlmICghdGhpc01hcCB8fCB0aGlzTWFwLnNyYyAhPT0gYXJnc1swXSB8fCBpc1VwZGF0ZSkge1xuXHRcdFx0XHRcdGlmICh0aGlzTWFwICYmIHRoaXNNYXAuc3JjKSB7XG5cdFx0XHRcdFx0XHR0aGlzTWFwLnVubWFwKCk7IC8vIG9ubHkgY2FsbGVkIGlmIG9ic2VydmFibGUgbWFwIC0gbm90IHdoZW4gb25seSB1c2VkIGluIEpzUmVuZGVyLCBlLmcuIGJ5IHt7cHJvcHN9fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRtYXBEZWYubWFwKGFyZ3NbMF0sIHRhZ0N0eCwgdGhpc01hcCwgIXRhZy5fLmJuZCk7XG5cdFx0XHRcdFx0dGhpc01hcCA9IHRhZ0N0eC5tYXA7XG5cdFx0XHRcdH1cblx0XHRcdFx0YXJncyA9IFt0aGlzTWFwLnRndF07XG5cdFx0XHR9XG5cblx0XHRcdGl0ZW1SZXQgPSB1bmRlZmluZWQ7XG5cdFx0XHRpZiAodGFnLnJlbmRlcikge1xuXHRcdFx0XHRpdGVtUmV0ID0gdGFnLnJlbmRlci5hcHBseSh0YWcsIGFyZ3MpO1xuXHRcdFx0XHRpZiAocGFyZW50Vmlldy5saW5rZWQgJiYgaXRlbVJldCAmJiAhcldyYXBwZWRJblZpZXdNYXJrZXIudGVzdChpdGVtUmV0KSkge1xuXHRcdFx0XHRcdC8vIFdoZW4gYSB0YWcgcmVuZGVycyBjb250ZW50IGZyb20gdGhlIHJlbmRlciBtZXRob2QsIHdpdGggZGF0YSBsaW5raW5nIHRoZW4gd2UgbmVlZCB0byB3cmFwIHdpdGggdmlldyBtYXJrZXJzLCBpZiBhYnNlbnQsXG5cdFx0XHRcdFx0Ly8gdG8gcHJvdmlkZSBhIGNvbnRlbnRWaWV3IGZvciB0aGUgdGFnLCB3aGljaCB3aWxsIGNvcnJlY3RseSBkaXNwb3NlIGJpbmRpbmdzIGlmIGRlbGV0ZWQuIFRoZSAndG1wbCcgZm9yIHRoaXMgdmlldyB3aWxsXG5cdFx0XHRcdFx0Ly8gYmUgYSBkdW1iZWQtZG93biB0ZW1wbGF0ZSB3aGljaCB3aWxsIGFsd2F5cyByZXR1cm4gdGhlICBpdGVtUmV0IHN0cmluZyAobm8gbWF0dGVyIHdoYXQgdGhlIGRhdGEgaXMpLiBUaGUgaXRlbVJldCBzdHJpbmdcblx0XHRcdFx0XHQvLyBpcyBub3QgY29tcGlsZWQgYXMgdGVtcGxhdGUgbWFya3VwLCBzbyBjYW4gaW5jbHVkZSBcInt7XCIgb3IgXCJ9fVwiIHdpdGhvdXQgdHJpZ2dlcmluZyBzeW50YXggZXJyb3JzXG5cdFx0XHRcdFx0dG1wbCA9IHsgLy8gJ0R1bWJlZC1kb3duJyB0ZW1wbGF0ZSB3aGljaCBhbHdheXMgcmVuZGVycyAnc3RhdGljJyBpdGVtUmV0IHN0cmluZ1xuXHRcdFx0XHRcdFx0bGlua3M6IFtdXG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0XHR0bXBsLnJlbmRlciA9IHRtcGwuZm4gPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdHJldHVybiBpdGVtUmV0O1xuXHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0aXRlbVJldCA9IHJlbmRlcldpdGhWaWV3cyh0bXBsLCBwYXJlbnRWaWV3LmRhdGEsIHVuZGVmaW5lZCwgdHJ1ZSwgcGFyZW50VmlldywgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRhZyk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmICghYXJncy5sZW5ndGgpIHtcblx0XHRcdFx0YXJncyA9IFtwYXJlbnRWaWV3XTsgLy8gbm8gYXJndW1lbnRzIC0gKGUuZy4ge3tlbHNlfX0pIGdldCBkYXRhIGNvbnRleHQgZnJvbSB2aWV3LlxuXHRcdFx0fVxuXHRcdFx0aWYgKGl0ZW1SZXQgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRjb250ZW50Q3R4ID0gYXJnc1swXTsgLy8gRGVmYXVsdCBkYXRhIGNvbnRleHQgZm9yIHdyYXBwZWQgYmxvY2sgY29udGVudCBpcyB0aGUgZmlyc3QgYXJndW1lbnRcblx0XHRcdFx0aWYgKHRhZy5jb250ZW50Q3R4KSB7IC8vIFNldCB0YWcuY29udGVudEN0eCB0byB0cnVlLCB0byBpbmhlcml0IHBhcmVudCBjb250ZXh0LCBvciB0byBhIGZ1bmN0aW9uIHRvIHByb3ZpZGUgYWx0ZXJuYXRlIGNvbnRleHQuXG5cdFx0XHRcdFx0Y29udGVudEN0eCA9IHRhZy5jb250ZW50Q3R4ID09PSB0cnVlID8gcGFyZW50VmlldyA6IHRhZy5jb250ZW50Q3R4KGNvbnRlbnRDdHgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGl0ZW1SZXQgPSB0YWdDdHgucmVuZGVyKGNvbnRlbnRDdHgsIHRydWUpIHx8IChpc1VwZGF0ZSA/IHVuZGVmaW5lZCA6IFwiXCIpO1xuXHRcdFx0fVxuXHRcdFx0cmV0ID0gcmV0XG5cdFx0XHRcdD8gcmV0ICsgKGl0ZW1SZXQgfHwgXCJcIilcblx0XHRcdFx0OiBpdGVtUmV0ICE9PSB1bmRlZmluZWRcblx0XHRcdFx0XHQ/IFwiXCIgKyBpdGVtUmV0XG5cdFx0XHRcdFx0OiB1bmRlZmluZWQ7IC8vIElmIG5vIHJldHVybiB2YWx1ZSBmcm9tIHJlbmRlciwgYW5kIG5vIHRlbXBsYXRlL2NvbnRlbnQgdGFnQ3R4LnJlbmRlciguLi4pLCByZXR1cm4gdW5kZWZpbmVkXG5cdFx0fVxuXHRcdHRhZy5yZW5kZXJpbmcgPSB0YWcucmVuZGVyaW5nLnJuZHI7IC8vIFJlbW92ZSB0YWcucmVuZGVyaW5nIG9iamVjdCAoaWYgdGhpcyBpcyBvdXRlcm1vc3QgcmVuZGVyIGNhbGwuIChJbiBjYXNlIG9mIG5lc3RlZCBjYWxscylcblx0fVxuXHR0YWcudGFnQ3R4ID0gdGFnQ3R4c1swXTtcblx0dGFnLmN0eCA9IHRhZy50YWdDdHguY3R4O1xuXG5cdGlmICh0YWcuXy5ub1Z3cyAmJiB0YWcuaW5saW5lKSB7XG5cdFx0Ly8gaW5saW5lIHRhZyB3aXRoIGF0dHIgc2V0IHRvIFwidGV4dFwiIHdpbGwgaW5zZXJ0IEhUTUwtZW5jb2RlZCBjb250ZW50IC0gYXMgaWYgaXQgd2FzIGVsZW1lbnQtYmFzZWQgaW5uZXJUZXh0XG5cdFx0cmV0ID0gYXR0ciA9PT0gXCJ0ZXh0XCJcblx0XHRcdD8gJGNvbnZlcnRlcnMuaHRtbChyZXQpXG5cdFx0XHQ6IFwiXCI7XG5cdH1cblx0cmV0dXJuIGJvdW5kVGFnICYmIHBhcmVudFZpZXcuXy5vblJlbmRlclxuXHRcdC8vIENhbGwgb25SZW5kZXIgKHVzZWQgYnkgSnNWaWV3cyBpZiBwcmVzZW50LCB0byBhZGQgYmluZGluZyBhbm5vdGF0aW9ucyBhcm91bmQgcmVuZGVyZWQgY29udGVudClcblx0XHQ/IHBhcmVudFZpZXcuXy5vblJlbmRlcihyZXQsIHBhcmVudFZpZXcsIHRhZylcblx0XHQ6IHJldDtcbn1cblxuLy89PT09PT09PT09PT09PT09PVxuLy8gVmlldyBjb25zdHJ1Y3RvclxuLy89PT09PT09PT09PT09PT09PVxuXG5mdW5jdGlvbiBWaWV3KGNvbnRleHQsIHR5cGUsIHBhcmVudFZpZXcsIGRhdGEsIHRlbXBsYXRlLCBrZXksIG9uUmVuZGVyLCBjb250ZW50VG1wbCkge1xuXHQvLyBDb25zdHJ1Y3RvciBmb3IgdmlldyBvYmplY3QgaW4gdmlldyBoaWVyYXJjaHkuIChBdWdtZW50ZWQgYnkgSnNWaWV3cyBpZiBKc1ZpZXdzIGlzIGxvYWRlZClcblx0dmFyIHZpZXdzLCBwYXJlbnRWaWV3XywgdGFnLCBzZWxmXyxcblx0XHRzZWxmID0gdGhpcyxcblx0XHRpc0FycmF5ID0gdHlwZSA9PT0gXCJhcnJheVwiO1xuXHRcdC8vIElmIHRoZSBkYXRhIGlzIGFuIGFycmF5LCB0aGlzIGlzIGFuICdhcnJheSB2aWV3JyB3aXRoIGEgdmlld3MgYXJyYXkgZm9yIGVhY2ggY2hpbGQgJ2l0ZW0gdmlldydcblx0XHQvLyBJZiB0aGUgZGF0YSBpcyBub3QgYW4gYXJyYXksIHRoaXMgaXMgYW4gJ2l0ZW0gdmlldycgd2l0aCBhIHZpZXdzICdoYXNoJyBvYmplY3QgZm9yIGFueSBjaGlsZCBuZXN0ZWQgdmlld3NcblxuXHRzZWxmLmNvbnRlbnQgPSBjb250ZW50VG1wbDtcblx0c2VsZi52aWV3cyA9IGlzQXJyYXkgPyBbXSA6IHt9O1xuXHRzZWxmLmRhdGEgPSBkYXRhO1xuXHRzZWxmLnRtcGwgPSB0ZW1wbGF0ZTtcblx0c2VsZl8gPSBzZWxmLl8gPSB7XG5cdFx0a2V5OiAwLFxuXHRcdC8vIC5fLnVzZUtleSBpcyBub24gemVybyBpZiBpcyBub3QgYW4gJ2FycmF5IHZpZXcnIChvd25pbmcgYSBkYXRhIGFycmF5KS4gVXNlIHRoaXMgYXMgbmV4dCBrZXkgZm9yIGFkZGluZyB0byBjaGlsZCB2aWV3cyBoYXNoXG5cdFx0dXNlS2V5OiBpc0FycmF5ID8gMCA6IDEsXG5cdFx0aWQ6IFwiXCIgKyB2aWV3SWQrKyxcblx0XHRvblJlbmRlcjogb25SZW5kZXIsXG5cdFx0Ym5kczoge31cblx0fTtcblx0c2VsZi5saW5rZWQgPSAhIW9uUmVuZGVyO1xuXHRzZWxmLnR5cGUgPSB0eXBlIHx8IFwidG9wXCI7XG5cblx0aWYgKCFwYXJlbnRWaWV3IHx8IHBhcmVudFZpZXcudHlwZSA9PT0gXCJ0b3BcIikge1xuXHRcdChzZWxmLmN0eCA9IGNvbnRleHQgfHwge30pLnJvb3QgPSBzZWxmLmRhdGE7XG5cdH1cblxuXHRpZiAoc2VsZi5wYXJlbnQgPSBwYXJlbnRWaWV3KSB7XG5cdFx0c2VsZi5yb290ID0gcGFyZW50Vmlldy5yb290IHx8IHNlbGY7IC8vIHZpZXcgd2hvc2UgcGFyZW50IGlzIHRvcCB2aWV3XG5cdFx0dmlld3MgPSBwYXJlbnRWaWV3LnZpZXdzO1xuXHRcdHBhcmVudFZpZXdfID0gcGFyZW50Vmlldy5fO1xuXHRcdHNlbGYuaXNUb3AgPSBwYXJlbnRWaWV3Xy5zY3A7IC8vIElzIHRvcCBjb250ZW50IHZpZXcgb2YgYSBsaW5rKFwiI2NvbnRhaW5lclwiLCAuLi4pIGNhbGxcblx0XHRzZWxmLnNjb3BlID0gKCFjb250ZXh0LnRhZyB8fCBjb250ZXh0LnRhZyA9PT0gcGFyZW50Vmlldy5jdHgudGFnKSAmJiAhc2VsZi5pc1RvcCAmJiBwYXJlbnRWaWV3LnNjb3BlIHx8IHNlbGY7XG5cdFx0Ly8gU2NvcGUgZm9yIGNvbnRleHRQYXJhbXMgLSBjbG9zZXN0IG5vbiBmbG93IHRhZyBhbmNlc3RvciBvciByb290IHZpZXdcblx0XHRpZiAocGFyZW50Vmlld18udXNlS2V5KSB7XG5cdFx0XHQvLyBQYXJlbnQgaXMgbm90IGFuICdhcnJheSB2aWV3Jy4gQWRkIHRoaXMgdmlldyB0byBpdHMgdmlld3Mgb2JqZWN0XG5cdFx0XHQvLyBzZWxmLl9rZXkgPSBpcyB0aGUga2V5IGluIHRoZSBwYXJlbnQgdmlldyBoYXNoXG5cdFx0XHR2aWV3c1tzZWxmXy5rZXkgPSBcIl9cIiArIHBhcmVudFZpZXdfLnVzZUtleSsrXSA9IHNlbGY7XG5cdFx0XHRzZWxmLmluZGV4ID0gaW5kZXhTdHI7XG5cdFx0XHRzZWxmLmdldEluZGV4ID0gZ2V0TmVzdGVkSW5kZXg7XG5cdFx0fSBlbHNlIGlmICh2aWV3cy5sZW5ndGggPT09IChzZWxmXy5rZXkgPSBzZWxmLmluZGV4ID0ga2V5KSkgeyAvLyBQYXJlbnQgaXMgYW4gJ2FycmF5IHZpZXcnLiBBZGQgdGhpcyB2aWV3IHRvIGl0cyB2aWV3cyBhcnJheVxuXHRcdFx0dmlld3MucHVzaChzZWxmKTsgLy8gQWRkaW5nIHRvIGVuZCBvZiB2aWV3cyBhcnJheS4gKFVzaW5nIHB1c2ggd2hlbiBwb3NzaWJsZSAtIGJldHRlciBwZXJmIHRoYW4gc3BsaWNlKVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2aWV3cy5zcGxpY2Uoa2V5LCAwLCBzZWxmKTsgLy8gSW5zZXJ0aW5nIGluIHZpZXdzIGFycmF5XG5cdFx0fVxuXHRcdC8vIElmIG5vIGNvbnRleHQgd2FzIHBhc3NlZCBpbiwgdXNlIHBhcmVudCBjb250ZXh0XG5cdFx0Ly8gSWYgY29udGV4dCB3YXMgcGFzc2VkIGluLCBpdCBzaG91bGQgaGF2ZSBiZWVuIG1lcmdlZCBhbHJlYWR5IHdpdGggcGFyZW50IGNvbnRleHRcblx0XHRzZWxmLmN0eCA9IGNvbnRleHQgfHwgcGFyZW50Vmlldy5jdHg7XG5cdH0gZWxzZSBpZiAodHlwZSkge1xuXHRcdHNlbGYucm9vdCA9IHNlbGY7IC8vIHZpZXcgd2hvc2UgcGFyZW50IGlzIHRvcCB2aWV3XG5cdH1cbn1cblxuVmlldy5wcm90b3R5cGUgPSB7XG5cdGdldDogZ2V0Vmlldyxcblx0Z2V0SW5kZXg6IGdldEluZGV4LFxuXHRjdHhQcm06IGNvbnRleHRQYXJhbWV0ZXIsXG5cdGdldFJzYzogZ2V0UmVzb3VyY2UsXG5cdF9nZXRUbXBsOiBnZXRUZW1wbGF0ZSxcblx0X2dldE9iOiBnZXRQYXRoT2JqZWN0LFxuXHRfaXM6IFwidmlld1wiXG59O1xuXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFJlZ2lzdHJhdGlvblxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmZ1bmN0aW9uIGNvbXBpbGVDaGlsZFJlc291cmNlcyhwYXJlbnRUbXBsKSB7XG5cdHZhciBzdG9yZU5hbWUsIHN0b3JlTmFtZXMsIHJlc291cmNlcztcblx0Zm9yIChzdG9yZU5hbWUgaW4ganN2U3RvcmVzKSB7XG5cdFx0c3RvcmVOYW1lcyA9IHN0b3JlTmFtZSArIFwic1wiO1xuXHRcdGlmIChwYXJlbnRUbXBsW3N0b3JlTmFtZXNdKSB7XG5cdFx0XHRyZXNvdXJjZXMgPSBwYXJlbnRUbXBsW3N0b3JlTmFtZXNdOyAgICAvLyBSZXNvdXJjZXMgbm90IHlldCBjb21waWxlZFxuXHRcdFx0cGFyZW50VG1wbFtzdG9yZU5hbWVzXSA9IHt9OyAgICAgICAgICAgICAgIC8vIFJlbW92ZSB1bmNvbXBpbGVkIHJlc291cmNlc1xuXHRcdFx0JHZpZXdzW3N0b3JlTmFtZXNdKHJlc291cmNlcywgcGFyZW50VG1wbCk7IC8vIEFkZCBiYWNrIGluIHRoZSBjb21waWxlZCByZXNvdXJjZXNcblx0XHR9XG5cdH1cbn1cblxuLy89PT09PT09PT09PT09PT1cbi8vIGNvbXBpbGVUYWdcbi8vPT09PT09PT09PT09PT09XG5cbmZ1bmN0aW9uIGNvbXBpbGVUYWcobmFtZSwgdGFnRGVmLCBwYXJlbnRUbXBsKSB7XG5cdHZhciB0bXBsLCBiYXNlVGFnLCBwcm9wLFxuXHRcdGNvbXBpbGVkRGVmID0gbmV3ICRzdWIuX3RnKCk7XG5cblx0ZnVuY3Rpb24gVGFnKCkge1xuXHRcdHZhciB0YWcgPSB0aGlzO1xuXHRcdHRhZy5fID0ge1xuXHRcdFx0dW5saW5rZWQ6IHRydWVcblx0XHR9O1xuXHRcdHRhZy5pbmxpbmUgPSB0cnVlO1xuXHRcdHRhZy50YWdOYW1lID0gbmFtZTtcblx0fVxuXG5cdGlmICgkaXNGdW5jdGlvbih0YWdEZWYpKSB7XG5cdFx0Ly8gU2ltcGxlIHRhZyBkZWNsYXJlZCBhcyBmdW5jdGlvbi4gTm8gcHJlc2VudGVyIGluc3RhbnRhdGlvbi5cblx0XHR0YWdEZWYgPSB7XG5cdFx0XHRkZXBlbmRzOiB0YWdEZWYuZGVwZW5kcyxcblx0XHRcdHJlbmRlcjogdGFnRGVmXG5cdFx0fTtcblx0fSBlbHNlIGlmIChcIlwiICsgdGFnRGVmID09PSB0YWdEZWYpIHtcblx0XHR0YWdEZWYgPSB7dGVtcGxhdGU6IHRhZ0RlZn07XG5cdH1cblxuXHRpZiAoYmFzZVRhZyA9IHRhZ0RlZi5iYXNlVGFnKSB7XG5cdFx0dGFnRGVmLmZsb3cgPSAhIXRhZ0RlZi5mbG93OyAvLyBTZXQgZmxvdyBwcm9wZXJ0eSwgc28gZGVmYXVsdHMgdG8gZmFsc2UgZXZlbiBpZiBiYXNlVGFnIGhhcyBmbG93PXRydWVcblx0XHRiYXNlVGFnID0gXCJcIiArIGJhc2VUYWcgPT09IGJhc2VUYWdcblx0XHRcdD8gKHBhcmVudFRtcGwgJiYgcGFyZW50VG1wbC50YWdzW2Jhc2VUYWddIHx8ICR0YWdzW2Jhc2VUYWddKVxuXHRcdFx0OiBiYXNlVGFnO1xuXHRcdGlmICghYmFzZVRhZykge1xuXHRcdFx0ZXJyb3IoJ2Jhc2VUYWc6IFwiJyArIHRhZ0RlZi5iYXNlVGFnICsgJ1wiIG5vdCBmb3VuZCcpO1xuXHRcdH1cblx0XHRjb21waWxlZERlZiA9ICRleHRlbmQoY29tcGlsZWREZWYsIGJhc2VUYWcpO1xuXG5cdFx0Zm9yIChwcm9wIGluIHRhZ0RlZikge1xuXHRcdFx0Y29tcGlsZWREZWZbcHJvcF0gPSBnZXRNZXRob2QoYmFzZVRhZ1twcm9wXSwgdGFnRGVmW3Byb3BdKTtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0Y29tcGlsZWREZWYgPSAkZXh0ZW5kKGNvbXBpbGVkRGVmLCB0YWdEZWYpO1xuXHR9XG5cblx0Ly8gVGFnIGRlY2xhcmVkIGFzIG9iamVjdCwgdXNlZCBhcyB0aGUgcHJvdG90eXBlIGZvciB0YWcgaW5zdGFudGlhdGlvbiAoY29udHJvbC9wcmVzZW50ZXIpXG5cdGlmICgodG1wbCA9IGNvbXBpbGVkRGVmLnRlbXBsYXRlKSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0Y29tcGlsZWREZWYudGVtcGxhdGUgPSBcIlwiICsgdG1wbCA9PT0gdG1wbCA/ICgkdGVtcGxhdGVzW3RtcGxdIHx8ICR0ZW1wbGF0ZXModG1wbCkpIDogdG1wbDtcblx0fVxuXHQoVGFnLnByb3RvdHlwZSA9IGNvbXBpbGVkRGVmKS5jb25zdHJ1Y3RvciA9IGNvbXBpbGVkRGVmLl9jdHIgPSBUYWc7XG5cblx0aWYgKHBhcmVudFRtcGwpIHtcblx0XHRjb21waWxlZERlZi5fcGFyZW50VG1wbCA9IHBhcmVudFRtcGw7XG5cdH1cblx0cmV0dXJuIGNvbXBpbGVkRGVmO1xufVxuXG5mdW5jdGlvbiBiYXNlQXBwbHkoYXJncykge1xuXHQvLyBJbiBkZXJpdmVkIG1ldGhvZCAob3IgaGFuZGxlciBkZWNsYXJlZCBkZWNsYXJhdGl2ZWx5IGFzIGluIHt7OmZvbyBvbkNoYW5nZT1+Zm9vQ2hhbmdlZH19IGNhbiBjYWxsIGJhc2UgbWV0aG9kLFxuXHQvLyB1c2luZyB0aGlzLmJhc2VBcHBseShhcmd1bWVudHMpIChFcXVpdmFsZW50IHRvIHRoaXMuX3N1cGVyQXBwbHkoYXJndW1lbnRzKSBpbiBqUXVlcnkgVUkpXG5cdHJldHVybiB0aGlzLmJhc2UuYXBwbHkodGhpcywgYXJncyk7XG59XG5cbi8vPT09PT09PT09PT09PT09XG4vLyBjb21waWxlVG1wbFxuLy89PT09PT09PT09PT09PT1cblxuZnVuY3Rpb24gY29tcGlsZVRtcGwobmFtZSwgdG1wbCwgcGFyZW50VG1wbCwgb3B0aW9ucykge1xuXHQvLyB0bXBsIGlzIGVpdGhlciBhIHRlbXBsYXRlIG9iamVjdCwgYSBzZWxlY3RvciBmb3IgYSB0ZW1wbGF0ZSBzY3JpcHQgYmxvY2ssIHRoZSBuYW1lIG9mIGEgY29tcGlsZWQgdGVtcGxhdGUsIG9yIGEgdGVtcGxhdGUgb2JqZWN0XG5cblx0Ly89PT09IG5lc3RlZCBmdW5jdGlvbnMgPT09PVxuXHRmdW5jdGlvbiBsb29rdXBUZW1wbGF0ZSh2YWx1ZSkge1xuXHRcdC8vIElmIHZhbHVlIGlzIG9mIHR5cGUgc3RyaW5nIC0gdHJlYXQgYXMgc2VsZWN0b3IsIG9yIG5hbWUgb2YgY29tcGlsZWQgdGVtcGxhdGVcblx0XHQvLyBSZXR1cm4gdGhlIHRlbXBsYXRlIG9iamVjdCwgaWYgYWxyZWFkeSBjb21waWxlZCwgb3IgdGhlIG1hcmt1cCBzdHJpbmdcblx0XHR2YXIgY3VycmVudE5hbWUsIHRtcGw7XG5cdFx0aWYgKChcIlwiICsgdmFsdWUgPT09IHZhbHVlKSB8fCB2YWx1ZS5ub2RlVHlwZSA+IDAgJiYgKGVsZW0gPSB2YWx1ZSkpIHtcblx0XHRcdGlmICghZWxlbSkge1xuXHRcdFx0XHRpZiAoL15cXC5cXC9bXlxcXFw6Kj9cIjw+XSokLy50ZXN0KHZhbHVlKSkge1xuXHRcdFx0XHRcdC8vIHRtcGw9XCIuL3NvbWUvZmlsZS5odG1sXCJcblx0XHRcdFx0XHQvLyBJZiB0aGUgdGVtcGxhdGUgaXMgbm90IG5hbWVkLCB1c2UgXCIuL3NvbWUvZmlsZS5odG1sXCIgYXMgbmFtZS5cblx0XHRcdFx0XHRpZiAodG1wbCA9ICR0ZW1wbGF0ZXNbbmFtZSA9IG5hbWUgfHwgdmFsdWVdKSB7XG5cdFx0XHRcdFx0XHR2YWx1ZSA9IHRtcGw7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdC8vIEJST1dTRVItU1BFQ0lGSUMgQ09ERSAobm90IG9uIE5vZGUuanMpOlxuXHRcdFx0XHRcdFx0Ly8gTG9vayBmb3Igc2VydmVyLWdlbmVyYXRlZCBzY3JpcHQgYmxvY2sgd2l0aCBpZCBcIi4vc29tZS9maWxlLmh0bWxcIlxuXHRcdFx0XHRcdFx0ZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHZhbHVlKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSBpZiAoJC5mbiAmJiAhJHN1Yi5yVG1wbC50ZXN0KHZhbHVlKSkge1xuXHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRlbGVtID0gJCAodmFsdWUsIGRvY3VtZW50KVswXTsgLy8gaWYgalF1ZXJ5IGlzIGxvYWRlZCwgdGVzdCBmb3Igc2VsZWN0b3IgcmV0dXJuaW5nIGVsZW1lbnRzLCBhbmQgZ2V0IGZpcnN0IGVsZW1lbnRcblx0XHRcdFx0XHR9IGNhdGNoIChlKSB7fVxuXHRcdFx0XHR9Ly8gRU5EIEJST1dTRVItU1BFQ0lGSUMgQ09ERVxuXHRcdFx0fSAvL0JST1dTRVItU1BFQ0lGSUMgQ09ERVxuXHRcdFx0aWYgKGVsZW0pIHtcblx0XHRcdFx0aWYgKGVsZW0udGFnTmFtZSAhPT0gXCJTQ1JJUFRcIikge1xuXHRcdFx0XHRcdGVycm9yKHZhbHVlICsgXCI6IFVzZSBzY3JpcHQgYmxvY2ssIG5vdCBcIiArIGVsZW0udGFnTmFtZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKG9wdGlvbnMpIHtcblx0XHRcdFx0XHQvLyBXZSB3aWxsIGNvbXBpbGUgYSBuZXcgdGVtcGxhdGUgdXNpbmcgdGhlIG1hcmt1cCBpbiB0aGUgc2NyaXB0IGVsZW1lbnRcblx0XHRcdFx0XHR2YWx1ZSA9IGVsZW0uaW5uZXJIVE1MO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdC8vIFdlIHdpbGwgY2FjaGUgYSBzaW5nbGUgY29weSBvZiB0aGUgY29tcGlsZWQgdGVtcGxhdGUsIGFuZCBhc3NvY2lhdGUgaXQgd2l0aCB0aGUgbmFtZVxuXHRcdFx0XHRcdC8vIChyZW5hbWluZyBmcm9tIGEgcHJldmlvdXMgbmFtZSBpZiB0aGVyZSB3YXMgb25lKS5cblx0XHRcdFx0XHRjdXJyZW50TmFtZSA9IGVsZW0uZ2V0QXR0cmlidXRlKHRtcGxBdHRyKTtcblx0XHRcdFx0XHRpZiAoY3VycmVudE5hbWUpIHtcblx0XHRcdFx0XHRcdGlmIChjdXJyZW50TmFtZSAhPT0ganN2VG1wbCkge1xuXHRcdFx0XHRcdFx0XHR2YWx1ZSA9ICR0ZW1wbGF0ZXNbY3VycmVudE5hbWVdO1xuXHRcdFx0XHRcdFx0XHRkZWxldGUgJHRlbXBsYXRlc1tjdXJyZW50TmFtZV07XG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKCQuZm4pIHtcblx0XHRcdFx0XHRcdFx0dmFsdWUgPSAkLmRhdGEoZWxlbSlbanN2VG1wbF07IC8vIEdldCBjYWNoZWQgY29tcGlsZWQgdGVtcGxhdGVcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKCFjdXJyZW50TmFtZSB8fCAhdmFsdWUpIHsgLy8gTm90IHlldCBjb21waWxlZCwgb3IgY2FjaGVkIHZlcnNpb24gbG9zdFxuXHRcdFx0XHRcdFx0bmFtZSA9IG5hbWUgfHwgKCQuZm4gPyBqc3ZUbXBsIDogdmFsdWUpO1xuXHRcdFx0XHRcdFx0dmFsdWUgPSBjb21waWxlVG1wbChuYW1lLCBlbGVtLmlubmVySFRNTCwgcGFyZW50VG1wbCwgb3B0aW9ucyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHZhbHVlLnRtcGxOYW1lID0gbmFtZSA9IG5hbWUgfHwgY3VycmVudE5hbWU7XG5cdFx0XHRcdFx0aWYgKG5hbWUgIT09IGpzdlRtcGwpIHtcblx0XHRcdFx0XHRcdCR0ZW1wbGF0ZXNbbmFtZV0gPSB2YWx1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZWxlbS5zZXRBdHRyaWJ1dGUodG1wbEF0dHIsIG5hbWUpO1xuXHRcdFx0XHRcdGlmICgkLmZuKSB7XG5cdFx0XHRcdFx0XHQkLmRhdGEoZWxlbSwganN2VG1wbCwgdmFsdWUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSAvLyBFTkQgQlJPV1NFUi1TUEVDSUZJQyBDT0RFXG5cdFx0XHRlbGVtID0gdW5kZWZpbmVkO1xuXHRcdH0gZWxzZSBpZiAoIXZhbHVlLmZuKSB7XG5cdFx0XHR2YWx1ZSA9IHVuZGVmaW5lZDtcblx0XHRcdC8vIElmIHZhbHVlIGlzIG5vdCBhIHN0cmluZy4gSFRNTCBlbGVtZW50LCBvciBjb21waWxlZCB0ZW1wbGF0ZSwgcmV0dXJuIHVuZGVmaW5lZFxuXHRcdH1cblx0XHRyZXR1cm4gdmFsdWU7XG5cdH1cblxuXHR2YXIgZWxlbSwgY29tcGlsZWRUbXBsLFxuXHRcdHRtcGxPck1hcmt1cCA9IHRtcGwgPSB0bXBsIHx8IFwiXCI7XG5cdCRzdWIuX2h0bWwgPSAkY29udmVydGVycy5odG1sO1xuXG5cdC8vPT09PSBDb21waWxlIHRoZSB0ZW1wbGF0ZSA9PT09XG5cdGlmIChvcHRpb25zID09PSAwKSB7XG5cdFx0b3B0aW9ucyA9IHVuZGVmaW5lZDtcblx0XHR0bXBsT3JNYXJrdXAgPSBsb29rdXBUZW1wbGF0ZSh0bXBsT3JNYXJrdXApOyAvLyBUb3AtbGV2ZWwgY29tcGlsZSBzbyBkbyBhIHRlbXBsYXRlIGxvb2t1cFxuXHR9XG5cblx0Ly8gSWYgb3B0aW9ucywgdGhlbiB0aGlzIHdhcyBhbHJlYWR5IGNvbXBpbGVkIGZyb20gYSAoc2NyaXB0KSBlbGVtZW50IHRlbXBsYXRlIGRlY2xhcmF0aW9uLlxuXHQvLyBJZiBub3QsIHRoZW4gaWYgdG1wbCBpcyBhIHRlbXBsYXRlIG9iamVjdCwgdXNlIGl0IGZvciBvcHRpb25zXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8ICh0bXBsLm1hcmt1cFxuXHRcdD8gdG1wbC5ibmRzXG5cdFx0XHQ/ICRleHRlbmQoe30sIHRtcGwpXG5cdFx0XHQ6IHRtcGxcblx0XHQ6IHt9XG5cdCk7XG5cblx0b3B0aW9ucy50bXBsTmFtZSA9IG9wdGlvbnMudG1wbE5hbWUgfHwgbmFtZSB8fCBcInVubmFtZWRcIjtcblx0aWYgKHBhcmVudFRtcGwpIHtcblx0XHRvcHRpb25zLl9wYXJlbnRUbXBsID0gcGFyZW50VG1wbDtcblx0fVxuXHQvLyBJZiB0bXBsIGlzIG5vdCBhIG1hcmt1cCBzdHJpbmcgb3IgYSBzZWxlY3RvciBzdHJpbmcsIHRoZW4gaXQgbXVzdCBiZSBhIHRlbXBsYXRlIG9iamVjdFxuXHQvLyBJbiB0aGF0IGNhc2UsIGdldCBpdCBmcm9tIHRoZSBtYXJrdXAgcHJvcGVydHkgb2YgdGhlIG9iamVjdFxuXHRpZiAoIXRtcGxPck1hcmt1cCAmJiB0bXBsLm1hcmt1cCAmJiAodG1wbE9yTWFya3VwID0gbG9va3VwVGVtcGxhdGUodG1wbC5tYXJrdXApKSAmJiB0bXBsT3JNYXJrdXAuZm4pIHtcblx0XHQvLyBJZiB0aGUgc3RyaW5nIHJlZmVyZW5jZXMgYSBjb21waWxlZCB0ZW1wbGF0ZSBvYmplY3QsIG5lZWQgdG8gcmVjb21waWxlIHRvIG1lcmdlIGFueSBtb2RpZmllZCBvcHRpb25zXG5cdFx0dG1wbE9yTWFya3VwID0gdG1wbE9yTWFya3VwLm1hcmt1cDtcblx0fVxuXHRpZiAodG1wbE9yTWFya3VwICE9PSB1bmRlZmluZWQpIHtcblx0XHRpZiAodG1wbE9yTWFya3VwLnJlbmRlciB8fCB0bXBsLnJlbmRlcikge1xuXHRcdFx0Ly8gdG1wbCBpcyBhbHJlYWR5IGNvbXBpbGVkLCBzbyB1c2UgaXRcblx0XHRcdGlmICh0bXBsT3JNYXJrdXAudG1wbHMpIHtcblx0XHRcdFx0Y29tcGlsZWRUbXBsID0gdG1wbE9yTWFya3VwO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyB0bXBsT3JNYXJrdXAgaXMgYSBtYXJrdXAgc3RyaW5nLCBub3QgYSBjb21waWxlZCB0ZW1wbGF0ZVxuXHRcdFx0Ly8gQ3JlYXRlIHRlbXBsYXRlIG9iamVjdFxuXHRcdFx0dG1wbCA9IHRtcGxPYmplY3QodG1wbE9yTWFya3VwLCBvcHRpb25zKTtcblx0XHRcdC8vIENvbXBpbGUgdG8gQVNUIGFuZCB0aGVuIHRvIGNvbXBpbGVkIGZ1bmN0aW9uXG5cdFx0XHR0bXBsRm4odG1wbE9yTWFya3VwLnJlcGxhY2UockVzY2FwZVF1b3RlcywgXCJcXFxcJCZcIiksIHRtcGwpO1xuXHRcdH1cblx0XHRpZiAoIWNvbXBpbGVkVG1wbCkge1xuXHRcdFx0Y29tcGlsZWRUbXBsID0gJGV4dGVuZChmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIGNvbXBpbGVkVG1wbC5yZW5kZXIuYXBwbHkoY29tcGlsZWRUbXBsLCBhcmd1bWVudHMpO1xuXHRcdFx0fSwgdG1wbCk7XG5cblx0XHRcdGNvbXBpbGVDaGlsZFJlc291cmNlcyhjb21waWxlZFRtcGwpO1xuXHRcdH1cblx0XHRyZXR1cm4gY29tcGlsZWRUbXBsO1xuXHR9XG59XG5cbi8vPT09PSAvZW5kIG9mIGZ1bmN0aW9uIGNvbXBpbGVUbXBsID09PT1cblxuLy89PT09PT09PT09PT09PT09PVxuLy8gY29tcGlsZVZpZXdNb2RlbFxuLy89PT09PT09PT09PT09PT09PVxuXG5mdW5jdGlvbiBnZXREZWZhdWx0VmFsKGRlZmF1bHRWYWwsIGRhdGEpIHtcblx0cmV0dXJuICRpc0Z1bmN0aW9uKGRlZmF1bHRWYWwpXG5cdFx0PyBkZWZhdWx0VmFsLmNhbGwoZGF0YSlcblx0XHQ6IGRlZmF1bHRWYWw7XG59XG5cbmZ1bmN0aW9uIGFkZFBhcmVudFJlZihvYiwgcmVmLCBwYXJlbnQpIHtcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG9iLCByZWYsIHtcblx0XHR2YWx1ZTogcGFyZW50LFxuXHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZVxuXHR9KTtcbn1cblxuZnVuY3Rpb24gY29tcGlsZVZpZXdNb2RlbChuYW1lLCB0eXBlKSB7XG5cdHZhciBpLCBjb25zdHJ1Y3RvciwgcGFyZW50LFxuXHRcdHZpZXdNb2RlbHMgPSB0aGlzLFxuXHRcdGdldHRlcnMgPSB0eXBlLmdldHRlcnMsXG5cdFx0ZXh0ZW5kID0gdHlwZS5leHRlbmQsXG5cdFx0aWQgPSB0eXBlLmlkLFxuXHRcdHByb3RvID0gJC5leHRlbmQoe1xuXHRcdFx0X2lzOiBuYW1lIHx8IFwidW5uYW1lZFwiLFxuXHRcdFx0dW5tYXA6IHVubWFwLFxuXHRcdFx0bWVyZ2U6IG1lcmdlXG5cdFx0fSwgZXh0ZW5kKSxcblx0XHRhcmdzID0gXCJcIixcblx0XHRjbnN0ciA9IFwiXCIsXG5cdFx0Z2V0dGVyQ291bnQgPSBnZXR0ZXJzID8gZ2V0dGVycy5sZW5ndGggOiAwLFxuXHRcdCRvYnNlcnZhYmxlID0gJC5vYnNlcnZhYmxlLFxuXHRcdGdldHRlck5hbWVzID0ge307XG5cblx0ZnVuY3Rpb24gSnN2Vm0oYXJncykge1xuXHRcdGNvbnN0cnVjdG9yLmFwcGx5KHRoaXMsIGFyZ3MpO1xuXHR9XG5cblx0ZnVuY3Rpb24gdm0oKSB7XG5cdFx0cmV0dXJuIG5ldyBKc3ZWbShhcmd1bWVudHMpO1xuXHR9XG5cblx0ZnVuY3Rpb24gaXRlcmF0ZShkYXRhLCBhY3Rpb24pIHtcblx0XHR2YXIgZ2V0dGVyVHlwZSwgZGVmYXVsdFZhbCwgcHJvcCwgb2IsIHBhcmVudFJlZixcblx0XHRcdGogPSAwO1xuXHRcdGZvciAoOyBqIDwgZ2V0dGVyQ291bnQ7IGorKykge1xuXHRcdFx0cHJvcCA9IGdldHRlcnNbal07XG5cdFx0XHRnZXR0ZXJUeXBlID0gdW5kZWZpbmVkO1xuXHRcdFx0aWYgKHByb3AgKyBcIlwiICE9PSBwcm9wKSB7XG5cdFx0XHRcdGdldHRlclR5cGUgPSBwcm9wO1xuXHRcdFx0XHRwcm9wID0gZ2V0dGVyVHlwZS5nZXR0ZXI7XG5cdFx0XHRcdHBhcmVudFJlZiA9IGdldHRlclR5cGUucGFyZW50UmVmO1xuXHRcdFx0fVxuXHRcdFx0aWYgKChvYiA9IGRhdGFbcHJvcF0pID09PSB1bmRlZmluZWQgJiYgZ2V0dGVyVHlwZSAmJiAoZGVmYXVsdFZhbCA9IGdldHRlclR5cGUuZGVmYXVsdFZhbCkgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRvYiA9IGdldERlZmF1bHRWYWwoZGVmYXVsdFZhbCwgZGF0YSk7XG5cdFx0XHR9XG5cdFx0XHRhY3Rpb24ob2IsIGdldHRlclR5cGUgJiYgdmlld01vZGVsc1tnZXR0ZXJUeXBlLnR5cGVdLCBwcm9wLCBwYXJlbnRSZWYpO1xuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIG1hcChkYXRhKSB7XG5cdFx0ZGF0YSA9IGRhdGEgKyBcIlwiID09PSBkYXRhXG5cdFx0XHQ/IEpTT04ucGFyc2UoZGF0YSkgLy8gQWNjZXB0IEpTT04gc3RyaW5nXG5cdFx0XHQ6IGRhdGE7ICAgICAgICAgICAgLy8gb3Igb2JqZWN0L2FycmF5XG5cdFx0dmFyIGwsIHByb3AsIGNoaWxkT2IsIHBhcmVudFJlZixcblx0XHRcdGogPSAwLFxuXHRcdFx0b2IgPSBkYXRhLFxuXHRcdFx0YXJyID0gW107XG5cblx0XHRpZiAoJGlzQXJyYXkoZGF0YSkpIHtcblx0XHRcdGRhdGEgPSBkYXRhIHx8IFtdO1xuXHRcdFx0bCA9IGRhdGEubGVuZ3RoO1xuXHRcdFx0Zm9yICg7IGo8bDsgaisrKSB7XG5cdFx0XHRcdGFyci5wdXNoKHRoaXMubWFwKGRhdGFbal0pKTtcblx0XHRcdH1cblx0XHRcdGFyci5faXMgPSBuYW1lO1xuXHRcdFx0YXJyLnVubWFwID0gdW5tYXA7XG5cdFx0XHRhcnIubWVyZ2UgPSBtZXJnZTtcblx0XHRcdHJldHVybiBhcnI7XG5cdFx0fVxuXG5cdFx0aWYgKGRhdGEpIHtcblx0XHRcdGl0ZXJhdGUoZGF0YSwgZnVuY3Rpb24ob2IsIHZpZXdNb2RlbCkge1xuXHRcdFx0XHRpZiAodmlld01vZGVsKSB7IC8vIEl0ZXJhdGUgdG8gYnVpbGQgZ2V0dGVycyBhcmcgYXJyYXkgKHZhbHVlLCBvciBtYXBwZWQgdmFsdWUpXG5cdFx0XHRcdFx0b2IgPSB2aWV3TW9kZWwubWFwKG9iKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRhcnIucHVzaChvYik7XG5cdFx0XHR9KTtcblx0XHRcdG9iID0gdGhpcy5hcHBseSh0aGlzLCBhcnIpOyAvLyBJbnN0YW50aWF0ZSB0aGlzIFZpZXcgTW9kZWwsIHBhc3NpbmcgZ2V0dGVycyBhcmdzIGFycmF5IHRvIGNvbnN0cnVjdG9yXG5cdFx0XHRqID0gZ2V0dGVyQ291bnQ7XG5cdFx0XHR3aGlsZSAoai0tKSB7XG5cdFx0XHRcdGNoaWxkT2IgPSBhcnJbal07XG5cdFx0XHRcdHBhcmVudFJlZiA9IGdldHRlcnNbal0ucGFyZW50UmVmO1xuXHRcdFx0XHRpZiAocGFyZW50UmVmICYmIGNoaWxkT2IgJiYgY2hpbGRPYi51bm1hcCkge1xuXHRcdFx0XHRcdGlmICgkaXNBcnJheShjaGlsZE9iKSkge1xuXHRcdFx0XHRcdFx0bCA9IGNoaWxkT2IubGVuZ3RoO1xuXHRcdFx0XHRcdFx0d2hpbGUgKGwtLSkge1xuXHRcdFx0XHRcdFx0XHRhZGRQYXJlbnRSZWYoY2hpbGRPYltsXSwgcGFyZW50UmVmLCBvYik7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGFkZFBhcmVudFJlZihjaGlsZE9iLCBwYXJlbnRSZWYsIG9iKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGZvciAocHJvcCBpbiBkYXRhKSB7IC8vIENvcHkgb3ZlciBhbnkgb3RoZXIgcHJvcGVydGllcy4gdGhhdCBhcmUgbm90IGdldC9zZXQgcHJvcGVydGllc1xuXHRcdFx0XHRpZiAocHJvcCAhPT0gJGV4cGFuZG8gJiYgIWdldHRlck5hbWVzW3Byb3BdKSB7XG5cdFx0XHRcdFx0b2JbcHJvcF0gPSBkYXRhW3Byb3BdO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBvYjtcblx0fVxuXG5cdGZ1bmN0aW9uIG1lcmdlKGRhdGEsIHBhcmVudCwgcGFyZW50UmVmKSB7XG5cdFx0ZGF0YSA9IGRhdGEgKyBcIlwiID09PSBkYXRhXG5cdFx0XHQ/IEpTT04ucGFyc2UoZGF0YSkgLy8gQWNjZXB0IEpTT04gc3RyaW5nXG5cdFx0XHQ6IGRhdGE7ICAgICAgICAgICAgLy8gb3Igb2JqZWN0L2FycmF5XG5cblx0XHR2YXIgaiwgbCwgbSwgcHJvcCwgbW9kLCBmb3VuZCwgYXNzaWduZWQsIG9iLCBuZXdNb2RBcnIsIGNoaWxkT2IsXG5cdFx0XHRrID0gMCxcblx0XHRcdG1vZGVsID0gdGhpcztcblxuXHRcdGlmICgkaXNBcnJheShtb2RlbCkpIHtcblx0XHRcdGFzc2lnbmVkID0ge307XG5cdFx0XHRuZXdNb2RBcnIgPSBbXTtcblx0XHRcdGwgPSBkYXRhLmxlbmd0aDtcblx0XHRcdG0gPSBtb2RlbC5sZW5ndGg7XG5cdFx0XHRmb3IgKDsgazxsOyBrKyspIHtcblx0XHRcdFx0b2IgPSBkYXRhW2tdO1xuXHRcdFx0XHRmb3VuZCA9IGZhbHNlO1xuXHRcdFx0XHRmb3IgKGo9MDsgajxtICYmICFmb3VuZDsgaisrKSB7XG5cdFx0XHRcdFx0aWYgKGFzc2lnbmVkW2pdKSB7XG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0bW9kID0gbW9kZWxbal07XG5cblx0XHRcdFx0XHRpZiAoaWQpIHtcblx0XHRcdFx0XHRcdGFzc2lnbmVkW2pdID0gZm91bmQgPSBpZCArIFwiXCIgPT09IGlkXG5cdFx0XHRcdFx0XHQ/IChvYltpZF0gJiYgKGdldHRlck5hbWVzW2lkXSA/IG1vZFtpZF0oKSA6IG1vZFtpZF0pID09PSBvYltpZF0pXG5cdFx0XHRcdFx0XHQ6IGlkKG1vZCwgb2IpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZm91bmQpIHtcblx0XHRcdFx0XHRtb2QubWVyZ2Uob2IpO1xuXHRcdFx0XHRcdG5ld01vZEFyci5wdXNoKG1vZCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0bmV3TW9kQXJyLnB1c2goY2hpbGRPYiA9IHZtLm1hcChvYikpO1xuXHRcdFx0XHRcdGlmIChwYXJlbnRSZWYpIHtcblx0XHRcdFx0XHRcdGFkZFBhcmVudFJlZihjaGlsZE9iLCBwYXJlbnRSZWYsIHBhcmVudCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAoJG9ic2VydmFibGUpIHtcblx0XHRcdFx0JG9ic2VydmFibGUobW9kZWwpLnJlZnJlc2gobmV3TW9kQXJyLCB0cnVlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG1vZGVsLnNwbGljZS5hcHBseShtb2RlbCwgWzAsIG1vZGVsLmxlbmd0aF0uY29uY2F0KG5ld01vZEFycikpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpdGVyYXRlKGRhdGEsIGZ1bmN0aW9uKG9iLCB2aWV3TW9kZWwsIGdldHRlciwgcGFyZW50UmVmKSB7XG5cdFx0XHRpZiAodmlld01vZGVsKSB7XG5cdFx0XHRcdG1vZGVsW2dldHRlcl0oKS5tZXJnZShvYiwgbW9kZWwsIHBhcmVudFJlZik7IC8vIFVwZGF0ZSB0eXBlZCBwcm9wZXJ0eVxuXHRcdFx0fSBlbHNlIGlmIChtb2RlbFtnZXR0ZXJdKCkgIT09IG9iKSB7XG5cdFx0XHRcdG1vZGVsW2dldHRlcl0ob2IpOyAvLyBVcGRhdGUgbm9uLXR5cGVkIHByb3BlcnR5XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0Zm9yIChwcm9wIGluIGRhdGEpIHtcblx0XHRcdGlmIChwcm9wICE9PSAkZXhwYW5kbyAmJiAhZ2V0dGVyTmFtZXNbcHJvcF0pIHtcblx0XHRcdFx0bW9kZWxbcHJvcF0gPSBkYXRhW3Byb3BdO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIHVubWFwKCkge1xuXHRcdHZhciBvYiwgcHJvcCwgZ2V0dGVyVHlwZSwgYXJyLCB2YWx1ZSxcblx0XHRcdGsgPSAwLFxuXHRcdFx0bW9kZWwgPSB0aGlzO1xuXG5cdFx0ZnVuY3Rpb24gdW5tYXBBcnJheShtb2RlbEFycikge1xuXHRcdFx0dmFyIGFyciA9IFtdLFxuXHRcdFx0XHRpID0gMCxcblx0XHRcdFx0bCA9IG1vZGVsQXJyLmxlbmd0aDtcblx0XHRcdGZvciAoOyBpPGw7IGkrKykge1xuXHRcdFx0XHRhcnIucHVzaChtb2RlbEFycltpXS51bm1hcCgpKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBhcnI7XG5cdFx0fVxuXG5cdFx0aWYgKCRpc0FycmF5KG1vZGVsKSkge1xuXHRcdFx0cmV0dXJuIHVubWFwQXJyYXkobW9kZWwpO1xuXHRcdH1cblx0XHRvYiA9IHt9O1xuXHRcdGZvciAoOyBrIDwgZ2V0dGVyQ291bnQ7IGsrKykge1xuXHRcdFx0cHJvcCA9IGdldHRlcnNba107XG5cdFx0XHRnZXR0ZXJUeXBlID0gdW5kZWZpbmVkO1xuXHRcdFx0aWYgKHByb3AgKyBcIlwiICE9PSBwcm9wKSB7XG5cdFx0XHRcdGdldHRlclR5cGUgPSBwcm9wO1xuXHRcdFx0XHRwcm9wID0gZ2V0dGVyVHlwZS5nZXR0ZXI7XG5cdFx0XHR9XG5cdFx0XHR2YWx1ZSA9IG1vZGVsW3Byb3BdKCk7XG5cdFx0XHRvYltwcm9wXSA9IGdldHRlclR5cGUgJiYgdmFsdWUgJiYgdmlld01vZGVsc1tnZXR0ZXJUeXBlLnR5cGVdXG5cdFx0XHRcdD8gJGlzQXJyYXkodmFsdWUpXG5cdFx0XHRcdFx0PyB1bm1hcEFycmF5KHZhbHVlKVxuXHRcdFx0XHRcdDogdmFsdWUudW5tYXAoKVxuXHRcdFx0XHQ6IHZhbHVlO1xuXHRcdH1cblx0XHRmb3IgKHByb3AgaW4gbW9kZWwpIHtcblx0XHRcdGlmIChtb2RlbC5oYXNPd25Qcm9wZXJ0eShwcm9wKSAmJiAocHJvcC5jaGFyQXQoMCkgIT09IFwiX1wiIHx8ICFnZXR0ZXJOYW1lc1twcm9wLnNsaWNlKDEpXSkgJiYgcHJvcCAhPT0gJGV4cGFuZG8gICYmICEkaXNGdW5jdGlvbihtb2RlbFtwcm9wXSkpIHtcblx0XHRcdFx0b2JbcHJvcF0gPSBtb2RlbFtwcm9wXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIG9iO1xuXHR9XG5cblx0SnN2Vm0ucHJvdG90eXBlID0gcHJvdG87XG5cblx0Zm9yIChpPTA7IGkgPCBnZXR0ZXJDb3VudDsgaSsrKSB7XG5cdFx0KGZ1bmN0aW9uKGdldHRlcikge1xuXHRcdFx0Z2V0dGVyID0gZ2V0dGVyLmdldHRlciB8fCBnZXR0ZXI7XG5cdFx0XHRnZXR0ZXJOYW1lc1tnZXR0ZXJdID0gaSsxO1xuXHRcdFx0dmFyIHByaXZGaWVsZCA9IFwiX1wiICsgZ2V0dGVyO1xuXG5cdFx0XHRhcmdzICs9IChhcmdzID8gXCIsXCIgOiBcIlwiKSArIGdldHRlcjtcblx0XHRcdGNuc3RyICs9IFwidGhpcy5cIiArIHByaXZGaWVsZCArIFwiID0gXCIgKyBnZXR0ZXIgKyBcIjtcXG5cIjtcblx0XHRcdHByb3RvW2dldHRlcl0gPSBwcm90b1tnZXR0ZXJdIHx8IGZ1bmN0aW9uKHZhbCkge1xuXHRcdFx0XHRpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcblx0XHRcdFx0XHRyZXR1cm4gdGhpc1twcml2RmllbGRdOyAvLyBJZiB0aGVyZSBpcyBubyBhcmd1bWVudCwgdXNlIGFzIGEgZ2V0dGVyXG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCRvYnNlcnZhYmxlKSB7XG5cdFx0XHRcdFx0JG9ic2VydmFibGUodGhpcykuc2V0UHJvcGVydHkoZ2V0dGVyLCB2YWwpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXNbcHJpdkZpZWxkXSA9IHZhbDtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblxuXHRcdFx0aWYgKCRvYnNlcnZhYmxlKSB7XG5cdFx0XHRcdHByb3RvW2dldHRlcl0uc2V0ID0gcHJvdG9bZ2V0dGVyXS5zZXQgfHwgZnVuY3Rpb24odmFsKSB7XG5cdFx0XHRcdFx0dGhpc1twcml2RmllbGRdID0gdmFsOyAvLyBTZXR0ZXIgY2FsbGVkIGJ5IG9ic2VydmFibGUgcHJvcGVydHkgY2hhbmdlXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0fSkoZ2V0dGVyc1tpXSk7XG5cdH1cblxuXHQvLyBDb25zdHJ1Y3RvciBmb3IgbmV3IHZpZXdNb2RlbCBpbnN0YW5jZS5cblx0Y25zdHIgPSBuZXcgRnVuY3Rpb24oYXJncywgY25zdHIpO1xuXG5cdGNvbnN0cnVjdG9yID0gZnVuY3Rpb24oKSB7XG5cdFx0Y25zdHIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHQvLyBQYXNzIGFkZGl0aW9uYWwgcGFyZW50UmVmIHN0ciBhbmQgcGFyZW50IG9iaiB0byBoYXZlIGEgcGFyZW50UmVmIHBvaW50ZXIgb24gaW5zdGFuY2Vcblx0XHRpZiAocGFyZW50ID0gYXJndW1lbnRzW2dldHRlckNvdW50ICsgMV0pIHtcblx0XHRcdGFkZFBhcmVudFJlZih0aGlzLCBhcmd1bWVudHNbZ2V0dGVyQ291bnRdLCBwYXJlbnQpO1xuXHRcdH1cblx0fTtcblxuXHRjb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBwcm90bztcblx0cHJvdG8uY29uc3RydWN0b3IgPSBjb25zdHJ1Y3RvcjtcblxuXHR2bS5tYXAgPSBtYXA7XG5cdHZtLmdldHRlcnMgPSBnZXR0ZXJzO1xuXHR2bS5leHRlbmQgPSBleHRlbmQ7XG5cdHZtLmlkID0gaWQ7XG5cdHJldHVybiB2bTtcbn1cblxuZnVuY3Rpb24gdG1wbE9iamVjdChtYXJrdXAsIG9wdGlvbnMpIHtcblx0Ly8gVGVtcGxhdGUgb2JqZWN0IGNvbnN0cnVjdG9yXG5cdHZhciBodG1sVGFnLFxuXHRcdHdyYXBNYXAgPSAkc3ViU2V0dGluZ3NBZHZhbmNlZC5fd20gfHwge30sIC8vIE9ubHkgdXNlZCBpbiBKc1ZpZXdzLiBPdGhlcndpc2UgZW1wdHk6IHt9XG5cdFx0dG1wbCA9IHtcblx0XHRcdHRtcGxzOiBbXSxcblx0XHRcdGxpbmtzOiB7fSwgLy8gQ29tcGlsZWQgZnVuY3Rpb25zIGZvciBsaW5rIGV4cHJlc3Npb25zXG5cdFx0XHRibmRzOiBbXSxcblx0XHRcdF9pczogXCJ0ZW1wbGF0ZVwiLFxuXHRcdFx0cmVuZGVyOiByZW5kZXJDb250ZW50XG5cdFx0fTtcblxuXHRpZiAob3B0aW9ucykge1xuXHRcdHRtcGwgPSAkZXh0ZW5kKHRtcGwsIG9wdGlvbnMpO1xuXHR9XG5cblx0dG1wbC5tYXJrdXAgPSBtYXJrdXA7XG5cdGlmICghdG1wbC5odG1sVGFnKSB7XG5cdFx0Ly8gU2V0IHRtcGwudGFnIHRvIHRoZSB0b3AtbGV2ZWwgSFRNTCB0YWcgdXNlZCBpbiB0aGUgdGVtcGxhdGUsIGlmIGFueS4uLlxuXHRcdGh0bWxUYWcgPSByRmlyc3RFbGVtLmV4ZWMobWFya3VwKTtcblx0XHR0bXBsLmh0bWxUYWcgPSBodG1sVGFnID8gaHRtbFRhZ1sxXS50b0xvd2VyQ2FzZSgpIDogXCJcIjtcblx0fVxuXHRodG1sVGFnID0gd3JhcE1hcFt0bXBsLmh0bWxUYWddO1xuXHRpZiAoaHRtbFRhZyAmJiBodG1sVGFnICE9PSB3cmFwTWFwLmRpdikge1xuXHRcdC8vIFdoZW4gdXNpbmcgSnNWaWV3cywgd2UgdHJpbSB0ZW1wbGF0ZXMgd2hpY2ggYXJlIGluc2VydGVkIGludG8gSFRNTCBjb250ZXh0cyB3aGVyZSB0ZXh0IG5vZGVzIGFyZSBub3QgcmVuZGVyZWQgKGkuZS4gbm90ICdQaHJhc2luZyBDb250ZW50JykuXG5cdFx0Ly8gQ3VycmVudGx5IG5vdCB0cmltbWVkIGZvciA8bGk+IHRhZy4gKE5vdCB3b3J0aCBhZGRpbmcgcGVyZiBjb3N0KVxuXHRcdHRtcGwubWFya3VwID0gJC50cmltKHRtcGwubWFya3VwKTtcblx0fVxuXG5cdHJldHVybiB0bXBsO1xufVxuXG4vLz09PT09PT09PT09PT09XG4vLyByZWdpc3RlclN0b3JlXG4vLz09PT09PT09PT09PT09XG5cbi8qKlxuKiBJbnRlcm5hbC4gUmVnaXN0ZXIgYSBzdG9yZSB0eXBlICh1c2VkIGZvciB0ZW1wbGF0ZSwgdGFncywgaGVscGVycywgY29udmVydGVycylcbiovXG5mdW5jdGlvbiByZWdpc3RlclN0b3JlKHN0b3JlTmFtZSwgc3RvcmVTZXR0aW5ncykge1xuXG4vKipcbiogR2VuZXJpYyBzdG9yZSgpIGZ1bmN0aW9uIHRvIHJlZ2lzdGVyIGl0ZW0sIG5hbWVkIGl0ZW0sIG9yIGhhc2ggb2YgaXRlbXNcbiogQWxzbyB1c2VkIGFzIGhhc2ggdG8gc3RvcmUgdGhlIHJlZ2lzdGVyZWQgaXRlbXNcbiogVXNlZCBhcyBpbXBsZW1lbnRhdGlvbiBvZiAkLnRlbXBsYXRlcygpLCAkLnZpZXdzLnRlbXBsYXRlcygpLCAkLnZpZXdzLnRhZ3MoKSwgJC52aWV3cy5oZWxwZXJzKCkgYW5kICQudmlld3MuY29udmVydGVycygpXG4qXG4qIEBwYXJhbSB7c3RyaW5nfGhhc2h9IG5hbWUgICAgICAgICBuYW1lIC0gb3Igc2VsZWN0b3IsIGluIGNhc2Ugb2YgJC50ZW1wbGF0ZXMoKS4gT3IgaGFzaCBvZiBpdGVtc1xuKiBAcGFyYW0ge2FueX0gICAgICAgICBbaXRlbV0gICAgICAgKGUuZy4gbWFya3VwIGZvciBuYW1lZCB0ZW1wbGF0ZSlcbiogQHBhcmFtIHt0ZW1wbGF0ZX0gICAgW3BhcmVudFRtcGxdIEZvciBpdGVtIGJlaW5nIHJlZ2lzdGVyZWQgYXMgcHJpdmF0ZSByZXNvdXJjZSBvZiB0ZW1wbGF0ZVxuKiBAcmV0dXJucyB7YW55fCQudmlld3N9IGl0ZW0sIGUuZy4gY29tcGlsZWQgdGVtcGxhdGUgLSBvciAkLnZpZXdzIGluIGNhc2Ugb2YgcmVnaXN0ZXJpbmcgaGFzaCBvZiBpdGVtc1xuKi9cblx0ZnVuY3Rpb24gdGhlU3RvcmUobmFtZSwgaXRlbSwgcGFyZW50VG1wbCkge1xuXHRcdC8vIFRoZSBzdG9yZSBpcyBhbHNvIHRoZSBmdW5jdGlvbiB1c2VkIHRvIGFkZCBpdGVtcyB0byB0aGUgc3RvcmUuIGUuZy4gJC50ZW1wbGF0ZXMsIG9yICQudmlld3MudGFnc1xuXG5cdFx0Ly8gRm9yIHN0b3JlIG9mIG5hbWUgJ3RoaW5nJywgQ2FsbCBhczpcblx0XHQvLyAgICAkLnZpZXdzLnRoaW5ncyhpdGVtc1ssIHBhcmVudFRtcGxdKSxcblx0XHQvLyBvciAkLnZpZXdzLnRoaW5ncyhuYW1lWywgaXRlbSwgcGFyZW50VG1wbF0pXG5cblx0XHR2YXIgY29tcGlsZSwgaXRlbU5hbWUsIHRoaXNTdG9yZSwgY250LFxuXHRcdFx0b25TdG9yZSA9ICRzdWIub25TdG9yZVtzdG9yZU5hbWVdO1xuXG5cdFx0aWYgKG5hbWUgJiYgdHlwZW9mIG5hbWUgPT09IE9CSkVDVCAmJiAhbmFtZS5ub2RlVHlwZSAmJiAhbmFtZS5tYXJrdXAgJiYgIW5hbWUuZ2V0VGd0ICYmICEoc3RvcmVOYW1lID09PSBcInZpZXdNb2RlbFwiICYmIG5hbWUuZ2V0dGVycyB8fCBuYW1lLmV4dGVuZCkpIHtcblx0XHRcdC8vIENhbGwgdG8gJC52aWV3cy50aGluZ3MoaXRlbXNbLCBwYXJlbnRUbXBsXSksXG5cblx0XHRcdC8vIEFkZGluZyBpdGVtcyB0byB0aGUgc3RvcmVcblx0XHRcdC8vIElmIG5hbWUgaXMgYSBoYXNoLCB0aGVuIGl0ZW0gaXMgcGFyZW50VG1wbC4gSXRlcmF0ZSBvdmVyIGhhc2ggYW5kIGNhbGwgc3RvcmUgZm9yIGtleS5cblx0XHRcdGZvciAoaXRlbU5hbWUgaW4gbmFtZSkge1xuXHRcdFx0XHR0aGVTdG9yZShpdGVtTmFtZSwgbmFtZVtpdGVtTmFtZV0sIGl0ZW0pO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGl0ZW0gfHwgJHZpZXdzO1xuXHRcdH1cblx0XHQvLyBBZGRpbmcgYSBzaW5nbGUgdW5uYW1lZCBpdGVtIHRvIHRoZSBzdG9yZVxuXHRcdGlmIChuYW1lICYmIFwiXCIgKyBuYW1lICE9PSBuYW1lKSB7IC8vIG5hbWUgbXVzdCBiZSBhIHN0cmluZ1xuXHRcdFx0cGFyZW50VG1wbCA9IGl0ZW07XG5cdFx0XHRpdGVtID0gbmFtZTtcblx0XHRcdG5hbWUgPSB1bmRlZmluZWQ7XG5cdFx0fVxuXHRcdHRoaXNTdG9yZSA9IHBhcmVudFRtcGxcblx0XHRcdD8gc3RvcmVOYW1lID09PSBcInZpZXdNb2RlbFwiXG5cdFx0XHRcdD8gcGFyZW50VG1wbFxuXHRcdFx0XHQ6IChwYXJlbnRUbXBsW3N0b3JlTmFtZXNdID0gcGFyZW50VG1wbFtzdG9yZU5hbWVzXSB8fCB7fSlcblx0XHRcdDogdGhlU3RvcmU7XG5cdFx0Y29tcGlsZSA9IHN0b3JlU2V0dGluZ3MuY29tcGlsZTtcblxuXHRcdGlmIChpdGVtID09PSB1bmRlZmluZWQpIHtcblx0XHRcdGl0ZW0gPSBjb21waWxlID8gbmFtZSA6IHRoaXNTdG9yZVtuYW1lXTtcblx0XHRcdG5hbWUgPSB1bmRlZmluZWQ7XG5cdFx0fVxuXHRcdGlmIChpdGVtID09PSBudWxsKSB7XG5cdFx0XHQvLyBJZiBpdGVtIGlzIG51bGwsIGRlbGV0ZSB0aGlzIGVudHJ5XG5cdFx0XHRpZiAobmFtZSkge1xuXHRcdFx0XHRkZWxldGUgdGhpc1N0b3JlW25hbWVdO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAoY29tcGlsZSkge1xuXHRcdFx0XHRpdGVtID0gY29tcGlsZS5jYWxsKHRoaXNTdG9yZSwgbmFtZSwgaXRlbSwgcGFyZW50VG1wbCwgMCkgfHwge307XG5cdFx0XHRcdGl0ZW0uX2lzID0gc3RvcmVOYW1lOyAvLyBPbmx5IGRvIHRoaXMgZm9yIGNvbXBpbGVkIG9iamVjdHMgKHRhZ3MsIHRlbXBsYXRlcy4uLilcblx0XHRcdH1cblx0XHRcdGlmIChuYW1lKSB7XG5cdFx0XHRcdHRoaXNTdG9yZVtuYW1lXSA9IGl0ZW07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmIChvblN0b3JlKSB7XG5cdFx0XHQvLyBlLmcuIEpzVmlld3MgaW50ZWdyYXRpb25cblx0XHRcdG9uU3RvcmUobmFtZSwgaXRlbSwgcGFyZW50VG1wbCwgY29tcGlsZSk7XG5cdFx0fVxuXHRcdHJldHVybiBpdGVtO1xuXHR9XG5cblx0dmFyIHN0b3JlTmFtZXMgPSBzdG9yZU5hbWUgKyBcInNcIjtcblx0JHZpZXdzW3N0b3JlTmFtZXNdID0gdGhlU3RvcmU7XG59XG5cbi8qKlxuKiBBZGQgc2V0dGluZ3Mgc3VjaCBhczpcbiogJC52aWV3cy5zZXR0aW5ncy5hbGxvd0NvZGUodHJ1ZSlcbiogQHBhcmFtIHtib29sZWFufSAgdmFsdWVcbiogQHJldHVybnMge1NldHRpbmdzfVxuKlxuKiBhbGxvd0NvZGUgPSAkLnZpZXdzLnNldHRpbmdzLmFsbG93Q29kZSgpXG4qIEByZXR1cm5zIHtib29sZWFufVxuKi9cbmZ1bmN0aW9uIGFkZFNldHRpbmcoc3QpIHtcblx0JHZpZXdzU2V0dGluZ3Nbc3RdID0gJHZpZXdzU2V0dGluZ3Nbc3RdIHx8IGZ1bmN0aW9uKHZhbHVlKSB7XG5cdFx0cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGhcblx0XHRcdD8gKCRzdWJTZXR0aW5nc1tzdF0gPSB2YWx1ZSwgJHZpZXdzU2V0dGluZ3MpXG5cdFx0XHQ6ICRzdWJTZXR0aW5nc1tzdF07XG5cdH07XG59XG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBkYXRhTWFwIGZvciByZW5kZXIgb25seVxuLy89PT09PT09PT09PT09PT09PT09PT09PT1cblxuZnVuY3Rpb24gZGF0YU1hcChtYXBEZWYpIHtcblx0ZnVuY3Rpb24gTWFwKHNvdXJjZSwgb3B0aW9ucykge1xuXHRcdHRoaXMudGd0ID0gbWFwRGVmLmdldFRndChzb3VyY2UsIG9wdGlvbnMpO1xuXHRcdG9wdGlvbnMubWFwID0gdGhpcztcblx0fVxuXG5cdGlmICgkaXNGdW5jdGlvbihtYXBEZWYpKSB7XG5cdFx0Ly8gU2ltcGxlIG1hcCBkZWNsYXJlZCBhcyBmdW5jdGlvblxuXHRcdG1hcERlZiA9IHtcblx0XHRcdGdldFRndDogbWFwRGVmXG5cdFx0fTtcblx0fVxuXG5cdGlmIChtYXBEZWYuYmFzZU1hcCkge1xuXHRcdG1hcERlZiA9ICRleHRlbmQoJGV4dGVuZCh7fSwgbWFwRGVmLmJhc2VNYXApLCBtYXBEZWYpO1xuXHR9XG5cblx0bWFwRGVmLm1hcCA9IGZ1bmN0aW9uKHNvdXJjZSwgb3B0aW9ucykge1xuXHRcdHJldHVybiBuZXcgTWFwKHNvdXJjZSwgb3B0aW9ucyk7XG5cdH07XG5cdHJldHVybiBtYXBEZWY7XG59XG5cbi8vPT09PT09PT09PT09PT1cbi8vIHJlbmRlckNvbnRlbnRcbi8vPT09PT09PT09PT09PT1cblxuLyoqIFJlbmRlciB0aGUgdGVtcGxhdGUgYXMgYSBzdHJpbmcsIHVzaW5nIHRoZSBzcGVjaWZpZWQgZGF0YSBhbmQgaGVscGVycy9jb250ZXh0XG4qICQoXCIjdG1wbFwiKS5yZW5kZXIoKSwgdG1wbC5yZW5kZXIoKSwgdGFnQ3R4LnJlbmRlcigpLCAkLnJlbmRlci5uYW1lZFRtcGwoKVxuKlxuKiBAcGFyYW0ge2FueX0gICAgICAgIGRhdGFcbiogQHBhcmFtIHtoYXNofSAgICAgICBbY29udGV4dF0gICAgICAgICAgIGhlbHBlcnMgb3IgY29udGV4dFxuKiBAcGFyYW0ge2Jvb2xlYW59ICAgIFtub0l0ZXJhdGlvbl1cbiogQHBhcmFtIHtWaWV3fSAgICAgICBbcGFyZW50Vmlld10gICAgICAgIGludGVybmFsXG4qIEBwYXJhbSB7c3RyaW5nfSAgICAgW2tleV0gICAgICAgICAgICAgICBpbnRlcm5hbFxuKiBAcGFyYW0ge2Z1bmN0aW9ufSAgIFtvblJlbmRlcl0gICAgICAgICAgaW50ZXJuYWxcbiogQHJldHVybnMge3N0cmluZ30gICByZW5kZXJlZCB0ZW1wbGF0ZSAgIGludGVybmFsXG4qL1xuZnVuY3Rpb24gcmVuZGVyQ29udGVudChkYXRhLCBjb250ZXh0LCBub0l0ZXJhdGlvbiwgcGFyZW50Vmlldywga2V5LCBvblJlbmRlcikge1xuXHR2YXIgaSwgbCwgdGFnLCB0bXBsLCB0YWdDdHgsIGlzVG9wUmVuZGVyQ2FsbCwgcHJldkRhdGEsIHByZXZJbmRleCxcblx0XHR2aWV3ID0gcGFyZW50Vmlldyxcblx0XHRyZXN1bHQgPSBcIlwiO1xuXG5cdGlmIChjb250ZXh0ID09PSB0cnVlKSB7XG5cdFx0bm9JdGVyYXRpb24gPSBjb250ZXh0OyAvLyBwYXNzaW5nIGJvb2xlYW4gYXMgc2Vjb25kIHBhcmFtIC0gbm9JdGVyYXRpb25cblx0XHRjb250ZXh0ID0gdW5kZWZpbmVkO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBjb250ZXh0ICE9PSBPQkpFQ1QpIHtcblx0XHRjb250ZXh0ID0gdW5kZWZpbmVkOyAvLyBjb250ZXh0IG11c3QgYmUgYSBib29sZWFuIChub0l0ZXJhdGlvbikgb3IgYSBwbGFpbiBvYmplY3Rcblx0fVxuXG5cdGlmICh0YWcgPSB0aGlzLnRhZykge1xuXHRcdC8vIFRoaXMgaXMgYSBjYWxsIGZyb20gcmVuZGVyVGFnIG9yIHRhZ0N0eC5yZW5kZXIoLi4uKVxuXHRcdHRhZ0N0eCA9IHRoaXM7XG5cdFx0dmlldyA9IHZpZXcgfHwgdGFnQ3R4LnZpZXc7XG5cdFx0dG1wbCA9IHZpZXcuX2dldFRtcGwodGFnLnRlbXBsYXRlIHx8IHRhZ0N0eC50bXBsKTtcblx0XHRpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcblx0XHRcdGRhdGEgPSB0YWcuY29udGVudEN0eCAmJiAkaXNGdW5jdGlvbih0YWcuY29udGVudEN0eClcblx0XHRcdFx0PyBkYXRhID0gdGFnLmNvbnRlbnRDdHgoZGF0YSlcblx0XHRcdFx0OiB2aWV3OyAvLyBEZWZhdWx0IGRhdGEgY29udGV4dCBmb3Igd3JhcHBlZCBibG9jayBjb250ZW50IGlzIHRoZSBmaXJzdCBhcmd1bWVudFxuXHRcdH1cblx0fSBlbHNlIHtcblx0XHQvLyBUaGlzIGlzIGEgdGVtcGxhdGUucmVuZGVyKC4uLikgY2FsbFxuXHRcdHRtcGwgPSB0aGlzO1xuXHR9XG5cblx0aWYgKHRtcGwpIHtcblx0XHRpZiAoIXBhcmVudFZpZXcgJiYgZGF0YSAmJiBkYXRhLl9pcyA9PT0gXCJ2aWV3XCIpIHtcblx0XHRcdHZpZXcgPSBkYXRhOyAvLyBXaGVuIHBhc3NpbmcgaW4gYSB2aWV3IHRvIHJlbmRlciBvciBsaW5rIChhbmQgbm90IHBhc3NpbmcgaW4gYSBwYXJlbnQgdmlldykgdXNlIHRoZSBwYXNzZWQtaW4gdmlldyBhcyBwYXJlbnRWaWV3XG5cdFx0fVxuXG5cdFx0aWYgKHZpZXcgJiYgZGF0YSA9PT0gdmlldykge1xuXHRcdFx0Ly8gSW5oZXJpdCB0aGUgZGF0YSBmcm9tIHRoZSBwYXJlbnQgdmlldy5cblx0XHRcdGRhdGEgPSB2aWV3LmRhdGE7XG5cdFx0fVxuXG5cdFx0aXNUb3BSZW5kZXJDYWxsID0gIXZpZXc7XG5cdFx0aXNSZW5kZXJDYWxsID0gaXNSZW5kZXJDYWxsIHx8IGlzVG9wUmVuZGVyQ2FsbDtcblx0XHRpZiAoIXZpZXcpIHtcblx0XHRcdChjb250ZXh0ID0gY29udGV4dCB8fCB7fSkucm9vdCA9IGRhdGE7IC8vIFByb3ZpZGUgfnJvb3QgYXMgc2hvcnRjdXQgdG8gdG9wLWxldmVsIGRhdGEuXG5cdFx0fVxuXHRcdGlmICghaXNSZW5kZXJDYWxsIHx8ICRzdWJTZXR0aW5nc0FkdmFuY2VkLnVzZVZpZXdzIHx8IHRtcGwudXNlVmlld3MgfHwgdmlldyAmJiB2aWV3ICE9PSB0b3BWaWV3KSB7XG5cdFx0XHRyZXN1bHQgPSByZW5kZXJXaXRoVmlld3ModG1wbCwgZGF0YSwgY29udGV4dCwgbm9JdGVyYXRpb24sIHZpZXcsIGtleSwgb25SZW5kZXIsIHRhZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmICh2aWV3KSB7IC8vIEluIGEgYmxvY2tcblx0XHRcdFx0cHJldkRhdGEgPSB2aWV3LmRhdGE7XG5cdFx0XHRcdHByZXZJbmRleCA9IHZpZXcuaW5kZXg7XG5cdFx0XHRcdHZpZXcuaW5kZXggPSBpbmRleFN0cjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZpZXcgPSB0b3BWaWV3O1xuXHRcdFx0XHRwcmV2RGF0YSA9IHZpZXcuZGF0YTtcblx0XHRcdFx0dmlldy5kYXRhID0gZGF0YTtcblx0XHRcdFx0dmlldy5jdHggPSBjb250ZXh0O1xuXHRcdFx0fVxuXHRcdFx0aWYgKCRpc0FycmF5KGRhdGEpICYmICFub0l0ZXJhdGlvbikge1xuXHRcdFx0XHQvLyBDcmVhdGUgYSB2aWV3IGZvciB0aGUgYXJyYXksIHdob3NlIGNoaWxkIHZpZXdzIGNvcnJlc3BvbmQgdG8gZWFjaCBkYXRhIGl0ZW0uIChOb3RlOiBpZiBrZXkgYW5kIHBhcmVudFZpZXcgYXJlIHBhc3NlZCBpblxuXHRcdFx0XHQvLyBhbG9uZyB3aXRoIHBhcmVudCB2aWV3LCB0cmVhdCBhcyBpbnNlcnQgLWUuZy4gZnJvbSB2aWV3LmFkZFZpZXdzIC0gc28gcGFyZW50VmlldyBpcyBhbHJlYWR5IHRoZSB2aWV3IGl0ZW0gZm9yIGFycmF5KVxuXHRcdFx0XHRmb3IgKGkgPSAwLCBsID0gZGF0YS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcblx0XHRcdFx0XHR2aWV3LmluZGV4ID0gaTtcblx0XHRcdFx0XHR2aWV3LmRhdGEgPSBkYXRhW2ldO1xuXHRcdFx0XHRcdHJlc3VsdCArPSB0bXBsLmZuKGRhdGFbaV0sIHZpZXcsICRzdWIpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2aWV3LmRhdGEgPSBkYXRhO1xuXHRcdFx0XHRyZXN1bHQgKz0gdG1wbC5mbihkYXRhLCB2aWV3LCAkc3ViKTtcblx0XHRcdH1cblx0XHRcdHZpZXcuZGF0YSA9IHByZXZEYXRhO1xuXHRcdFx0dmlldy5pbmRleCA9IHByZXZJbmRleDtcblx0XHR9XG5cdFx0aWYgKGlzVG9wUmVuZGVyQ2FsbCkge1xuXHRcdFx0aXNSZW5kZXJDYWxsID0gdW5kZWZpbmVkO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiByZW5kZXJXaXRoVmlld3ModG1wbCwgZGF0YSwgY29udGV4dCwgbm9JdGVyYXRpb24sIHZpZXcsIGtleSwgb25SZW5kZXIsIHRhZykge1xuXHQvLyBSZW5kZXIgdGVtcGxhdGUgYWdhaW5zdCBkYXRhIGFzIGEgdHJlZSBvZiBzdWJ2aWV3cyAobmVzdGVkIHJlbmRlcmVkIHRlbXBsYXRlIGluc3RhbmNlcyksIG9yIGFzIGEgc3RyaW5nICh0b3AtbGV2ZWwgdGVtcGxhdGUpLlxuXHQvLyBJZiB0aGUgZGF0YSBpcyB0aGUgcGFyZW50IHZpZXcsIHRyZWF0IGFzIG5vSXRlcmF0aW9uLCByZS1yZW5kZXIgd2l0aCB0aGUgc2FtZSBkYXRhIGNvbnRleHQuXG5cdC8vIHRtcGwgY2FuIGJlIGEgc3RyaW5nIChlLmcuIHJlbmRlcmVkIGJ5IGEgdGFnLnJlbmRlcigpIG1ldGhvZCksIG9yIGEgY29tcGlsZWQgdGVtcGxhdGUuXG5cdHZhciBpLCBsLCBuZXdWaWV3LCBjaGlsZFZpZXcsIGl0ZW1SZXN1bHQsIHN3YXBDb250ZW50LCBjb250ZW50VG1wbCwgb3V0ZXJPblJlbmRlciwgdG1wbE5hbWUsIGl0ZW1WYXIsIG5ld0N0eCwgdGFnQ3R4LCBub0xpbmtpbmcsXG5cdFx0cmVzdWx0ID0gXCJcIjtcblxuXHRpZiAodGFnKSB7XG5cdFx0Ly8gVGhpcyBpcyBhIGNhbGwgZnJvbSByZW5kZXJUYWcgb3IgdGFnQ3R4LnJlbmRlciguLi4pXG5cdFx0dG1wbE5hbWUgPSB0YWcudGFnTmFtZTtcblx0XHR0YWdDdHggPSB0YWcudGFnQ3R4O1xuXHRcdGNvbnRleHQgPSBjb250ZXh0ID8gZXh0ZW5kQ3R4KGNvbnRleHQsIHRhZy5jdHgpIDogdGFnLmN0eDtcblxuXHRcdGlmICh0bXBsID09PSB2aWV3LmNvbnRlbnQpIHsgLy8ge3t4eHggdG1wbD0jY29udGVudH19XG5cdFx0XHRjb250ZW50VG1wbCA9IHRtcGwgIT09IHZpZXcuY3R4Ll93cnAgLy8gV2UgYXJlIHJlbmRlcmluZyB0aGUgI2NvbnRlbnRcblx0XHRcdFx0PyB2aWV3LmN0eC5fd3JwIC8vICNjb250ZW50IHdhcyB0aGUgdGFnQ3R4LnByb3BzLnRtcGwgd3JhcHBlciBvZiB0aGUgYmxvY2sgY29udGVudCAtIHNvIHdpdGhpbiB0aGlzIHZpZXcsICNjb250ZW50IHdpbGwgbm93IGJlIHRoZSB2aWV3LmN0eC5fd3JwIGJsb2NrIGNvbnRlbnRcblx0XHRcdFx0OiB1bmRlZmluZWQ7IC8vICNjb250ZW50IHdhcyB0aGUgdmlldy5jdHguX3dycCBibG9jayBjb250ZW50IC0gc28gd2l0aGluIHRoaXMgdmlldywgdGhlcmUgaXMgbm8gbG9uZ2VyIGFueSAjY29udGVudCB0byB3cmFwLlxuXHRcdH0gZWxzZSBpZiAodG1wbCAhPT0gdGFnQ3R4LmNvbnRlbnQpIHtcblx0XHRcdGlmICh0bXBsID09PSB0YWcudGVtcGxhdGUpIHsgLy8gUmVuZGVyaW5nIHt7dGFnfX0gdGFnLnRlbXBsYXRlLCByZXBsYWNpbmcgYmxvY2sgY29udGVudC5cblx0XHRcdFx0Y29udGVudFRtcGwgPSB0YWdDdHgudG1wbDsgLy8gU2V0ICNjb250ZW50IHRvIGJsb2NrIGNvbnRlbnQgKG9yIHdyYXBwZWQgYmxvY2sgY29udGVudCBpZiB0YWdDdHgucHJvcHMudG1wbCBpcyBzZXQpXG5cdFx0XHRcdGNvbnRleHQuX3dycCA9IHRhZ0N0eC5jb250ZW50OyAvLyBQYXNzIHdyYXBwZWQgYmxvY2sgY29udGVudCB0byBuZXN0ZWQgdmlld3Ncblx0XHRcdH0gZWxzZSB7IC8vIFJlbmRlcmluZyB0YWdDdHgucHJvcHMudG1wbCB3cmFwcGVyXG5cdFx0XHRcdGNvbnRlbnRUbXBsID0gdGFnQ3R4LmNvbnRlbnQgfHwgdmlldy5jb250ZW50OyAvLyBTZXQgI2NvbnRlbnQgdG8gd3JhcHBlZCBibG9jayBjb250ZW50XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnRlbnRUbXBsID0gdmlldy5jb250ZW50OyAvLyBOZXN0ZWQgdmlld3MgaW5oZXJpdCBzYW1lIHdyYXBwZWQgI2NvbnRlbnQgcHJvcGVydHlcblx0XHR9XG5cblx0XHRpZiAodGFnQ3R4LnByb3BzLmxpbmsgPT09IGZhbHNlKSB7XG5cdFx0XHQvLyBsaW5rPWZhbHNlIHNldHRpbmcgb24gYmxvY2sgdGFnXG5cdFx0XHQvLyBXZSB3aWxsIG92ZXJyaWRlIGluaGVyaXRlZCB2YWx1ZSBvZiBsaW5rIGJ5IHRoZSBleHBsaWNpdCBzZXR0aW5nIGxpbms9ZmFsc2UgdGFrZW4gZnJvbSBwcm9wc1xuXHRcdFx0Ly8gVGhlIGNoaWxkIHZpZXdzIG9mIGFuIHVubGlua2VkIHZpZXcgYXJlIGFsc28gdW5saW5rZWQuIFNvIHNldHRpbmcgY2hpbGQgYmFjayB0byB0cnVlIHdpbGwgbm90IGhhdmUgYW55IGVmZmVjdC5cblx0XHRcdGNvbnRleHQgPSBjb250ZXh0IHx8IHt9O1xuXHRcdFx0Y29udGV4dC5saW5rID0gZmFsc2U7XG5cdFx0fVxuXHR9XG5cblx0aWYgKHZpZXcpIHtcblx0XHRvblJlbmRlciA9IG9uUmVuZGVyIHx8IHZpZXcuXy5vblJlbmRlcjtcblx0XHRub0xpbmtpbmcgPSBjb250ZXh0ICYmIGNvbnRleHQubGluayA9PT0gZmFsc2U7XG5cblx0XHRpZiAobm9MaW5raW5nICYmIHZpZXcuXy5ubCkge1xuXHRcdFx0b25SZW5kZXIgPSB1bmRlZmluZWQ7XG5cdFx0fVxuXG5cdFx0Y29udGV4dCA9IGV4dGVuZEN0eChjb250ZXh0LCB2aWV3LmN0eCk7XG5cdFx0dGFnQ3R4ID0gIXRhZyAmJiB2aWV3LnRhZ1xuXHRcdFx0PyB2aWV3LnRhZy50YWdDdHhzW3ZpZXcudGFnRWxzZV1cblx0XHRcdDogdGFnQ3R4O1xuXHR9XG5cblx0aWYgKGl0ZW1WYXIgPSB0YWdDdHggJiYgdGFnQ3R4LnByb3BzLml0ZW1WYXIpIHtcblx0XHRpZiAoaXRlbVZhclswXSAhPT0gXCJ+XCIpIHtcblx0XHRcdHN5bnRheEVycm9yKFwiVXNlIGl0ZW1WYXI9J35teUl0ZW0nXCIpO1xuXHRcdH1cblx0XHRpdGVtVmFyID0gaXRlbVZhci5zbGljZSgxKTtcblx0fVxuXG5cdGlmIChrZXkgPT09IHRydWUpIHtcblx0XHRzd2FwQ29udGVudCA9IHRydWU7XG5cdFx0a2V5ID0gMDtcblx0fVxuXG5cdC8vIElmIGxpbms9PT1mYWxzZSwgZG8gbm90IGNhbGwgb25SZW5kZXIsIHNvIG5vIGRhdGEtbGlua2luZyBtYXJrZXIgbm9kZXNcblx0aWYgKG9uUmVuZGVyICYmIHRhZyAmJiB0YWcuXy5ub1Z3cykge1xuXHRcdG9uUmVuZGVyID0gdW5kZWZpbmVkO1xuXHR9XG5cdG91dGVyT25SZW5kZXIgPSBvblJlbmRlcjtcblx0aWYgKG9uUmVuZGVyID09PSB0cnVlKSB7XG5cdFx0Ly8gVXNlZCBieSB2aWV3LnJlZnJlc2goKS4gRG9uJ3QgY3JlYXRlIGEgbmV3IHdyYXBwZXIgdmlldy5cblx0XHRvdXRlck9uUmVuZGVyID0gdW5kZWZpbmVkO1xuXHRcdG9uUmVuZGVyID0gdmlldy5fLm9uUmVuZGVyO1xuXHR9XG5cdC8vIFNldCBhZGRpdGlvbmFsIGNvbnRleHQgb24gdmlld3MgY3JlYXRlZCBoZXJlLCAoYXMgbW9kaWZpZWQgY29udGV4dCBpbmhlcml0ZWQgZnJvbSB0aGUgcGFyZW50LCBhbmQgdG8gYmUgaW5oZXJpdGVkIGJ5IGNoaWxkIHZpZXdzKVxuXHRjb250ZXh0ID0gdG1wbC5oZWxwZXJzXG5cdFx0PyBleHRlbmRDdHgodG1wbC5oZWxwZXJzLCBjb250ZXh0KVxuXHRcdDogY29udGV4dDtcblxuXHRuZXdDdHggPSBjb250ZXh0O1xuXHRpZiAoJGlzQXJyYXkoZGF0YSkgJiYgIW5vSXRlcmF0aW9uKSB7XG5cdFx0Ly8gQ3JlYXRlIGEgdmlldyBmb3IgdGhlIGFycmF5LCB3aG9zZSBjaGlsZCB2aWV3cyBjb3JyZXNwb25kIHRvIGVhY2ggZGF0YSBpdGVtLiAoTm90ZTogaWYga2V5IGFuZCB2aWV3IGFyZSBwYXNzZWQgaW5cblx0XHQvLyBhbG9uZyB3aXRoIHBhcmVudCB2aWV3LCB0cmVhdCBhcyBpbnNlcnQgLWUuZy4gZnJvbSB2aWV3LmFkZFZpZXdzIC0gc28gdmlldyBpcyBhbHJlYWR5IHRoZSB2aWV3IGl0ZW0gZm9yIGFycmF5KVxuXHRcdG5ld1ZpZXcgPSBzd2FwQ29udGVudFxuXHRcdFx0PyB2aWV3XG5cdFx0XHQ6IChrZXkgIT09IHVuZGVmaW5lZCAmJiB2aWV3KVxuXHRcdFx0XHR8fCBuZXcgVmlldyhjb250ZXh0LCBcImFycmF5XCIsIHZpZXcsIGRhdGEsIHRtcGwsIGtleSwgb25SZW5kZXIsIGNvbnRlbnRUbXBsKTtcblx0XHRuZXdWaWV3Ll8ubmw9IG5vTGlua2luZztcblx0XHRpZiAodmlldyAmJiB2aWV3Ll8udXNlS2V5KSB7XG5cdFx0XHQvLyBQYXJlbnQgaXMgbm90IGFuICdhcnJheSB2aWV3J1xuXHRcdFx0bmV3Vmlldy5fLmJuZCA9ICF0YWcgfHwgdGFnLl8uYm5kICYmIHRhZzsgLy8gRm9yIGFycmF5IHZpZXdzIHRoYXQgYXJlIGRhdGEgYm91bmQgZm9yIGNvbGxlY3Rpb24gY2hhbmdlIGV2ZW50cywgc2V0IHRoZVxuXHRcdFx0Ly8gdmlldy5fLmJuZCBwcm9wZXJ0eSB0byB0cnVlIGZvciB0b3AtbGV2ZWwgbGluaygpIG9yIGRhdGEtbGluaz1cIntmb3J9XCIsIG9yIHRvIHRoZSB0YWcgaW5zdGFuY2UgZm9yIGEgZGF0YS1ib3VuZCB0YWcsIGUuZy4ge157Zm9yIC4uLn19XG5cdFx0XHRuZXdWaWV3LnRhZyA9IHRhZztcblx0XHR9XG5cdFx0Zm9yIChpID0gMCwgbCA9IGRhdGEubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG5cdFx0XHQvLyBDcmVhdGUgYSB2aWV3IGZvciBlYWNoIGRhdGEgaXRlbS5cblx0XHRcdGNoaWxkVmlldyA9IG5ldyBWaWV3KG5ld0N0eCwgXCJpdGVtXCIsIG5ld1ZpZXcsIGRhdGFbaV0sIHRtcGwsIChrZXkgfHwgMCkgKyBpLCBvblJlbmRlciwgbmV3Vmlldy5jb250ZW50KTtcblx0XHRcdGlmIChpdGVtVmFyKSB7XG5cdFx0XHRcdChjaGlsZFZpZXcuY3R4ID0gJGV4dGVuZCh7fSwgbmV3Q3R4KSlbaXRlbVZhcl0gPSAkc3ViLl9jcChkYXRhW2ldLCBcIiNkYXRhXCIsIGNoaWxkVmlldyk7XG5cdFx0XHR9XG5cdFx0XHRpdGVtUmVzdWx0ID0gdG1wbC5mbihkYXRhW2ldLCBjaGlsZFZpZXcsICRzdWIpO1xuXHRcdFx0cmVzdWx0ICs9IG5ld1ZpZXcuXy5vblJlbmRlciA/IG5ld1ZpZXcuXy5vblJlbmRlcihpdGVtUmVzdWx0LCBjaGlsZFZpZXcpIDogaXRlbVJlc3VsdDtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0Ly8gQ3JlYXRlIGEgdmlldyBmb3Igc2luZ2xldG9uIGRhdGEgb2JqZWN0LiBUaGUgdHlwZSBvZiB0aGUgdmlldyB3aWxsIGJlIHRoZSB0YWcgbmFtZSwgZS5nLiBcImlmXCIgb3IgXCJteXRhZ1wiIGV4Y2VwdCBmb3Jcblx0XHQvLyBcIml0ZW1cIiwgXCJhcnJheVwiIGFuZCBcImRhdGFcIiB2aWV3cy4gQSBcImRhdGFcIiB2aWV3IGlzIGZyb20gcHJvZ3JhbW1hdGljIHJlbmRlcihvYmplY3QpIGFnYWluc3QgYSAnc2luZ2xldG9uJy5cblx0XHRuZXdWaWV3ID0gc3dhcENvbnRlbnQgPyB2aWV3IDogbmV3IFZpZXcobmV3Q3R4LCB0bXBsTmFtZSB8fCBcImRhdGFcIiwgdmlldywgZGF0YSwgdG1wbCwga2V5LCBvblJlbmRlciwgY29udGVudFRtcGwpO1xuXG5cdFx0aWYgKGl0ZW1WYXIpIHtcblx0XHRcdChuZXdWaWV3LmN0eCA9ICRleHRlbmQoe30sIG5ld0N0eCkpW2l0ZW1WYXJdID0gJHN1Yi5fY3AoZGF0YSwgXCIjZGF0YVwiLCBuZXdWaWV3KTtcblx0XHR9XG5cblx0XHRuZXdWaWV3LnRhZyA9IHRhZztcblx0XHRuZXdWaWV3Ll8ubmwgPSBub0xpbmtpbmc7XG5cdFx0cmVzdWx0ICs9IHRtcGwuZm4oZGF0YSwgbmV3VmlldywgJHN1Yik7XG5cdH1cblx0aWYgKHRhZykge1xuXHRcdG5ld1ZpZXcudGFnRWxzZSA9IHRhZ0N0eC5pbmRleDtcblx0XHR0YWdDdHguY29udGVudFZpZXcgPSBuZXdWaWV3O1xuXHR9XG5cdHJldHVybiBvdXRlck9uUmVuZGVyID8gb3V0ZXJPblJlbmRlcihyZXN1bHQsIG5ld1ZpZXcpIDogcmVzdWx0O1xufVxuXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQnVpbGQgYW5kIGNvbXBpbGUgdGVtcGxhdGVcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8vIEdlbmVyYXRlIGEgcmV1c2FibGUgZnVuY3Rpb24gdGhhdCB3aWxsIHNlcnZlIHRvIHJlbmRlciBhIHRlbXBsYXRlIGFnYWluc3QgZGF0YVxuLy8gKENvbXBpbGUgQVNUIHRoZW4gYnVpbGQgdGVtcGxhdGUgZnVuY3Rpb24pXG5cbmZ1bmN0aW9uIG9uUmVuZGVyRXJyb3IoZSwgdmlldywgZmFsbGJhY2spIHtcblx0dmFyIG1lc3NhZ2UgPSBmYWxsYmFjayAhPT0gdW5kZWZpbmVkXG5cdFx0PyAkaXNGdW5jdGlvbihmYWxsYmFjaylcblx0XHRcdD8gZmFsbGJhY2suY2FsbCh2aWV3LmRhdGEsIGUsIHZpZXcpXG5cdFx0XHQ6IGZhbGxiYWNrIHx8IFwiXCJcblx0XHQ6IFwie0Vycm9yOiBcIiArIChlLm1lc3NhZ2V8fGUpICsgXCJ9XCI7XG5cblx0aWYgKCRzdWJTZXR0aW5ncy5vbkVycm9yICYmIChmYWxsYmFjayA9ICRzdWJTZXR0aW5ncy5vbkVycm9yLmNhbGwodmlldy5kYXRhLCBlLCBmYWxsYmFjayAmJiBtZXNzYWdlLCB2aWV3KSkgIT09IHVuZGVmaW5lZCkge1xuXHRcdG1lc3NhZ2UgPSBmYWxsYmFjazsgLy8gVGhlcmUgaXMgYSBzZXR0aW5ncy5kZWJ1Z01vZGUoaGFuZGxlcikgb25FcnJvciBvdmVycmlkZS4gQ2FsbCBpdCwgYW5kIHVzZSByZXR1cm4gdmFsdWUgKGlmIGFueSkgdG8gcmVwbGFjZSBtZXNzYWdlXG5cdH1cblx0cmV0dXJuIHZpZXcgJiYgIXZpZXcuX2xjID8gJGNvbnZlcnRlcnMuaHRtbChtZXNzYWdlKSA6IG1lc3NhZ2U7IC8vIEZvciBkYXRhLWxpbms9XFxcInsuLi4gb25FcnJvcj0uLi59XCIuLi4gU2VlIG9uRGF0YUxpbmtlZFRhZ0NoYW5nZVxufVxuXG5mdW5jdGlvbiBlcnJvcihtZXNzYWdlKSB7XG5cdHRocm93IG5ldyAkc3ViLkVycihtZXNzYWdlKTtcbn1cblxuZnVuY3Rpb24gc3ludGF4RXJyb3IobWVzc2FnZSkge1xuXHRlcnJvcihcIlN5bnRheCBlcnJvclxcblwiICsgbWVzc2FnZSk7XG59XG5cbmZ1bmN0aW9uIHRtcGxGbihtYXJrdXAsIHRtcGwsIGlzTGlua0V4cHIsIGNvbnZlcnRCYWNrLCBoYXNFbHNlKSB7XG5cdC8vIENvbXBpbGUgbWFya3VwIHRvIEFTVCAoYWJ0cmFjdCBzeW50YXggdHJlZSkgdGhlbiBidWlsZCB0aGUgdGVtcGxhdGUgZnVuY3Rpb24gY29kZSBmcm9tIHRoZSBBU1Qgbm9kZXNcblx0Ly8gVXNlZCBmb3IgY29tcGlsaW5nIHRlbXBsYXRlcywgYW5kIGFsc28gYnkgSnNWaWV3cyB0byBidWlsZCBmdW5jdGlvbnMgZm9yIGRhdGEgbGluayBleHByZXNzaW9uc1xuXG5cdC8vPT09PSBuZXN0ZWQgZnVuY3Rpb25zID09PT1cblx0ZnVuY3Rpb24gcHVzaHByZWNlZGluZ0NvbnRlbnQoc2hpZnQpIHtcblx0XHRzaGlmdCAtPSBsb2M7XG5cdFx0aWYgKHNoaWZ0KSB7XG5cdFx0XHRjb250ZW50LnB1c2gobWFya3VwLnN1YnN0cihsb2MsIHNoaWZ0KS5yZXBsYWNlKHJOZXdMaW5lLCBcIlxcXFxuXCIpKTtcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBibG9ja1RhZ0NoZWNrKHRhZ05hbWUsIGJsb2NrKSB7XG5cdFx0aWYgKHRhZ05hbWUpIHtcblx0XHRcdHRhZ05hbWUgKz0gJ319Jztcblx0XHRcdC8vXHRcdFx0J3t7aW5jbHVkZX19IGJsb2NrIGhhcyB7ey9mb3J9fSB3aXRoIG5vIG9wZW4ge3tmb3J9fSdcblx0XHRcdHN5bnRheEVycm9yKChcblx0XHRcdFx0YmxvY2tcblx0XHRcdFx0XHQ/ICd7eycgKyBibG9jayArICd9fSBibG9jayBoYXMge3svJyArIHRhZ05hbWUgKyAnIHdpdGhvdXQge3snICsgdGFnTmFtZVxuXHRcdFx0XHRcdDogJ1VubWF0Y2hlZCBvciBtaXNzaW5nIHt7LycgKyB0YWdOYW1lKSArICcsIGluIHRlbXBsYXRlOlxcbicgKyBtYXJrdXApO1xuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIHBhcnNlVGFnKGFsbCwgYmluZCwgdGFnTmFtZSwgY29udmVydGVyLCBjb2xvbiwgaHRtbCwgY29kZVRhZywgcGFyYW1zLCBzbGFzaCwgYmluZDIsIGNsb3NlQmxvY2ssIGluZGV4KSB7XG4vKlxuXG4gICAgIGJpbmQgICAgIHRhZ05hbWUgICAgICAgICBjdnQgICBjbG4gaHRtbCBjb2RlICAgIHBhcmFtcyAgICAgICAgICAgIHNsYXNoICAgYmluZDIgICAgICAgICBjbG9zZUJsayAgY29tbWVudFxuLyg/OnsoXFxeKT97KD86KFxcdysoPz1bXFwvXFxzfV0pKXwoXFx3Kyk/KDopfCg+KXwoXFwqKSlcXHMqKCg/OltefV18fSg/IX0pKSo/KShcXC8pP3x7KFxcXik/eyg/Oig/OlxcLyhcXHcrKSlcXHMqfCEtLVtcXHNcXFNdKj8tLSkpfX0vZ1xuXG4oPzpcbiAgeyhcXF4pP3sgICAgICAgICAgICBiaW5kXG4gICg/OlxuICAgIChcXHcrICAgICAgICAgICAgIHRhZ05hbWVcbiAgICAgICg/PVtcXC9cXHN9XSlcbiAgICApXG4gICAgfFxuICAgIChcXHcrKT8oOikgICAgICAgIGNvbnZlcnRlciBjb2xvblxuICAgIHxcbiAgICAoPikgICAgICAgICAgICAgIGh0bWxcbiAgICB8XG4gICAgKFxcKikgICAgICAgICAgICAgY29kZVRhZ1xuICApXG4gIFxccypcbiAgKCAgICAgICAgICAgICAgICAgIHBhcmFtc1xuICAgICg/OltefV18fSg/IX0pKSo/XG4gIClcbiAgKFxcLyk/ICAgICAgICAgICAgICBzbGFzaFxuICB8XG4gIHsoXFxeKT97ICAgICAgICAgICAgYmluZDJcbiAgKD86XG4gICAgKD86XFwvKFxcdyspKVxccyogICBjbG9zZUJsb2NrXG4gICAgfFxuICAgICEtLVtcXHNcXFNdKj8tLSAgICBjb21tZW50XG4gIClcbilcbn19L2dcblxuKi9cblx0XHRpZiAoY29kZVRhZyAmJiBiaW5kIHx8IHNsYXNoICYmICF0YWdOYW1lIHx8IHBhcmFtcyAmJiBwYXJhbXMuc2xpY2UoLTEpID09PSBcIjpcIiB8fCBiaW5kMikge1xuXHRcdFx0c3ludGF4RXJyb3IoYWxsKTtcblx0XHR9XG5cblx0XHQvLyBCdWlsZCBhYnN0cmFjdCBzeW50YXggdHJlZSAoQVNUKTogW3RhZ05hbWUsIGNvbnZlcnRlciwgcGFyYW1zLCBjb250ZW50LCBoYXNoLCBiaW5kaW5ncywgY29udGVudE1hcmt1cF1cblx0XHRpZiAoaHRtbCkge1xuXHRcdFx0Y29sb24gPSBcIjpcIjtcblx0XHRcdGNvbnZlcnRlciA9IEhUTUw7XG5cdFx0fVxuXHRcdHNsYXNoID0gc2xhc2ggfHwgaXNMaW5rRXhwciAmJiAhaGFzRWxzZTtcblxuXHRcdHZhciBsYXRlLCBvcGVuVGFnTmFtZSwgaXNMYXRlT2IsXG5cdFx0XHRwYXRoQmluZGluZ3MgPSAoYmluZCB8fCBpc0xpbmtFeHByKSAmJiBbW11dLCAvLyBwYXRoQmluZGluZ3MgaXMgYW4gYXJyYXkgb2YgYXJyYXlzIGZvciBhcmcgYmluZGluZ3MgYW5kIGEgaGFzaCBvZiBhcnJheXMgZm9yIHByb3AgYmluZGluZ3Ncblx0XHRcdHByb3BzID0gXCJcIixcblx0XHRcdGFyZ3MgPSBcIlwiLFxuXHRcdFx0Y3R4UHJvcHMgPSBcIlwiLFxuXHRcdFx0cGFyYW1zQXJncyA9IFwiXCIsXG5cdFx0XHRwYXJhbXNQcm9wcyA9IFwiXCIsXG5cdFx0XHRwYXJhbXNDdHhQcm9wcyA9IFwiXCIsXG5cdFx0XHRvbkVycm9yID0gXCJcIixcblx0XHRcdHVzZVRyaWdnZXIgPSBcIlwiLFxuXHRcdFx0Ly8gQmxvY2sgdGFnIGlmIG5vdCBzZWxmLWNsb3NpbmcgYW5kIG5vdCB7ezp9fSBvciB7ez59fSAoc3BlY2lhbCBjYXNlKSBhbmQgbm90IGEgZGF0YS1saW5rIGV4cHJlc3Npb25cblx0XHRcdGJsb2NrID0gIXNsYXNoICYmICFjb2xvbjtcblxuXHRcdC8vPT09PSBuZXN0ZWQgaGVscGVyIGZ1bmN0aW9uID09PT1cblx0XHR0YWdOYW1lID0gdGFnTmFtZSB8fCAocGFyYW1zID0gcGFyYW1zIHx8IFwiI2RhdGFcIiwgY29sb24pOyAvLyB7ezp9fSBpcyBlcXVpdmFsZW50IHRvIHt7OiNkYXRhfX1cblx0XHRwdXNocHJlY2VkaW5nQ29udGVudChpbmRleCk7XG5cdFx0bG9jID0gaW5kZXggKyBhbGwubGVuZ3RoOyAvLyBsb2NhdGlvbiBtYXJrZXIgLSBwYXJzZWQgdXAgdG8gaGVyZVxuXHRcdGlmIChjb2RlVGFnKSB7XG5cdFx0XHRpZiAoYWxsb3dDb2RlKSB7XG5cdFx0XHRcdGNvbnRlbnQucHVzaChbXCIqXCIsIFwiXFxuXCIgKyBwYXJhbXMucmVwbGFjZSgvXjovLCBcInJldCs9IFwiKS5yZXBsYWNlKHJVbmVzY2FwZVF1b3RlcywgXCIkMVwiKSArIFwiO1xcblwiXSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmICh0YWdOYW1lKSB7XG5cdFx0XHRpZiAodGFnTmFtZSA9PT0gXCJlbHNlXCIpIHtcblx0XHRcdFx0aWYgKHJUZXN0RWxzZUlmLnRlc3QocGFyYW1zKSkge1xuXHRcdFx0XHRcdHN5bnRheEVycm9yKCdGb3IgXCJ7e2Vsc2UgaWYgZXhwcn19XCIgdXNlIFwie3tlbHNlIGV4cHJ9fVwiJyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cGF0aEJpbmRpbmdzID0gY3VycmVudFs5XSAmJiBbW11dO1xuXHRcdFx0XHRjdXJyZW50WzEwXSA9IG1hcmt1cC5zdWJzdHJpbmcoY3VycmVudFsxMF0sIGluZGV4KTsgLy8gY29udGVudE1hcmt1cCBmb3IgYmxvY2sgdGFnXG5cdFx0XHRcdG9wZW5UYWdOYW1lID0gY3VycmVudFsxMV0gfHwgY3VycmVudFswXSB8fCBzeW50YXhFcnJvcihcIk1pc21hdGNoZWQ6IFwiICsgYWxsKTtcblx0XHRcdFx0Ly8gY3VycmVudFswXSBpcyB0YWdOYW1lLCBidXQgZm9yIHt7ZWxzZX19IG5vZGVzLCBjdXJyZW50WzExXSBpcyB0YWdOYW1lIG9mIHByZWNlZGluZyBvcGVuIHRhZ1xuXHRcdFx0XHRjdXJyZW50ID0gc3RhY2sucG9wKCk7XG5cdFx0XHRcdGNvbnRlbnQgPSBjdXJyZW50WzJdO1xuXHRcdFx0XHRibG9jayA9IHRydWU7XG5cdFx0XHR9XG5cdFx0XHRpZiAocGFyYW1zKSB7XG5cdFx0XHRcdC8vIHJlbW92ZSBuZXdsaW5lcyBmcm9tIHRoZSBwYXJhbXMgc3RyaW5nLCB0byBhdm9pZCBjb21waWxlZCBjb2RlIGVycm9ycyBmb3IgdW50ZXJtaW5hdGVkIHN0cmluZ3Ncblx0XHRcdFx0cGFyc2VQYXJhbXMocGFyYW1zLnJlcGxhY2Uock5ld0xpbmUsIFwiIFwiKSwgcGF0aEJpbmRpbmdzLCB0bXBsLCBpc0xpbmtFeHByKVxuXHRcdFx0XHRcdC5yZXBsYWNlKHJCdWlsZEhhc2gsIGZ1bmN0aW9uKGFsbCwgb25lcnJvciwgaXNDdHhQcm0sIGtleSwga2V5VG9rZW4sIGtleVZhbHVlLCBhcmcsIHBhcmFtKSB7XG5cdFx0XHRcdFx0XHRpZiAoa2V5ID09PSBcInRoaXM6XCIpIHtcblx0XHRcdFx0XHRcdFx0a2V5VmFsdWUgPSBcInVuZGVmaW5lZFwiOyAvLyB0aGlzPXNvbWUucGF0aCBpcyBhbHdheXMgYSB0byBwYXJhbWV0ZXIgKG9uZS13YXkpLCBzbyBkb24ndCBuZWVkIHRvIGNvbXBpbGUvZXZhbHVhdGUgc29tZS5wYXRoIGluaXRpYWxpemF0aW9uXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRpZiAocGFyYW0pIHtcblx0XHRcdFx0XHRcdFx0aXNMYXRlT2IgPSBpc0xhdGVPYiB8fCBwYXJhbVswXSA9PT0gXCJAXCI7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRrZXkgPSBcIidcIiArIGtleVRva2VuICsgXCInOlwiO1xuXHRcdFx0XHRcdFx0aWYgKGFyZykge1xuXHRcdFx0XHRcdFx0XHRhcmdzICs9IGlzQ3R4UHJtICsga2V5VmFsdWUgKyBcIixcIjtcblx0XHRcdFx0XHRcdFx0cGFyYW1zQXJncyArPSBcIidcIiArIHBhcmFtICsgXCInLFwiO1xuXHRcdFx0XHRcdFx0fSBlbHNlIGlmIChpc0N0eFBybSkgeyAvLyBDb250ZXh0dWFsIHBhcmFtZXRlciwgfmZvbz1leHByXG5cdFx0XHRcdFx0XHRcdGN0eFByb3BzICs9IGtleSArICdqLl9jcCgnICsga2V5VmFsdWUgKyAnLFwiJyArIHBhcmFtICsgJ1wiLHZpZXcpLCc7XG5cdFx0XHRcdFx0XHRcdC8vIENvbXBpbGVkIGNvZGUgZm9yIGV2YWx1YXRpbmcgdGFnQ3R4IG9uIGEgdGFnIHdpbGwgaGF2ZTogY3R4OnsnZm9vJzpqLl9jcChjb21waWxlZEV4cHIsIFwiZXhwclwiLCB2aWV3KX1cblx0XHRcdFx0XHRcdFx0cGFyYW1zQ3R4UHJvcHMgKz0ga2V5ICsgXCInXCIgKyBwYXJhbSArIFwiJyxcIjtcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAob25lcnJvcikge1xuXHRcdFx0XHRcdFx0XHRvbkVycm9yICs9IGtleVZhbHVlO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0aWYgKGtleVRva2VuID09PSBcInRyaWdnZXJcIikge1xuXHRcdFx0XHRcdFx0XHRcdHVzZVRyaWdnZXIgKz0ga2V5VmFsdWU7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0aWYgKGtleVRva2VuID09PSBcImxhdGVSZW5kZXJcIikge1xuXHRcdFx0XHRcdFx0XHRcdGxhdGUgPSBwYXJhbSAhPT0gXCJmYWxzZVwiOyAvLyBSZW5kZXIgYWZ0ZXIgZmlyc3QgcGFzc1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdHByb3BzICs9IGtleSArIGtleVZhbHVlICsgXCIsXCI7XG5cdFx0XHRcdFx0XHRcdHBhcmFtc1Byb3BzICs9IGtleSArIFwiJ1wiICsgcGFyYW0gKyBcIicsXCI7XG5cdFx0XHRcdFx0XHRcdGhhc0hhbmRsZXJzID0gaGFzSGFuZGxlcnMgfHwgckhhc0hhbmRsZXJzLnRlc3Qoa2V5VG9rZW4pO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0cmV0dXJuIFwiXCI7XG5cdFx0XHRcdFx0fSkuc2xpY2UoMCwgLTEpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAocGF0aEJpbmRpbmdzICYmIHBhdGhCaW5kaW5nc1swXSkge1xuXHRcdFx0XHRwYXRoQmluZGluZ3MucG9wKCk7IC8vIFJlbW92ZSB0aGUgYmluZGluZyB0aGF0IHdhcyBwcmVwYXJlZCBmb3IgbmV4dCBhcmcuIChUaGVyZSBpcyBhbHdheXMgYW4gZXh0cmEgb25lIHJlYWR5KS5cblx0XHRcdH1cblxuXHRcdFx0bmV3Tm9kZSA9IFtcblx0XHRcdFx0XHR0YWdOYW1lLFxuXHRcdFx0XHRcdGNvbnZlcnRlciB8fCAhIWNvbnZlcnRCYWNrIHx8IGhhc0hhbmRsZXJzIHx8IFwiXCIsXG5cdFx0XHRcdFx0YmxvY2sgJiYgW10sXG5cdFx0XHRcdFx0cGFyc2VkUGFyYW0ocGFyYW1zQXJncyB8fCAodGFnTmFtZSA9PT0gXCI6XCIgPyBcIicjZGF0YScsXCIgOiBcIlwiKSwgcGFyYW1zUHJvcHMsIHBhcmFtc0N0eFByb3BzKSwgLy8ge3s6fX0gZXF1aXZhbGVudCB0byB7ezojZGF0YX19XG5cdFx0XHRcdFx0cGFyc2VkUGFyYW0oYXJncyB8fCAodGFnTmFtZSA9PT0gXCI6XCIgPyBcImRhdGEsXCIgOiBcIlwiKSwgcHJvcHMsIGN0eFByb3BzKSxcblx0XHRcdFx0XHRvbkVycm9yLFxuXHRcdFx0XHRcdHVzZVRyaWdnZXIsXG5cdFx0XHRcdFx0bGF0ZSxcblx0XHRcdFx0XHRpc0xhdGVPYixcblx0XHRcdFx0XHRwYXRoQmluZGluZ3MgfHwgMFxuXHRcdFx0XHRdO1xuXHRcdFx0Y29udGVudC5wdXNoKG5ld05vZGUpO1xuXHRcdFx0aWYgKGJsb2NrKSB7XG5cdFx0XHRcdHN0YWNrLnB1c2goY3VycmVudCk7XG5cdFx0XHRcdGN1cnJlbnQgPSBuZXdOb2RlO1xuXHRcdFx0XHRjdXJyZW50WzEwXSA9IGxvYzsgLy8gU3RvcmUgY3VycmVudCBsb2NhdGlvbiBvZiBvcGVuIHRhZywgdG8gYmUgYWJsZSB0byBhZGQgY29udGVudE1hcmt1cCB3aGVuIHdlIHJlYWNoIGNsb3NpbmcgdGFnXG5cdFx0XHRcdGN1cnJlbnRbMTFdID0gb3BlblRhZ05hbWU7IC8vIFVzZWQgZm9yIGNoZWNraW5nIHN5bnRheCAobWF0Y2hpbmcgY2xvc2UgdGFnKVxuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAoY2xvc2VCbG9jaykge1xuXHRcdFx0YmxvY2tUYWdDaGVjayhjbG9zZUJsb2NrICE9PSBjdXJyZW50WzBdICYmIGNsb3NlQmxvY2sgIT09IGN1cnJlbnRbMTFdICYmIGNsb3NlQmxvY2ssIGN1cnJlbnRbMF0pOyAvLyBDaGVjayBtYXRjaGluZyBjbG9zZSB0YWcgbmFtZVxuXHRcdFx0Y3VycmVudFsxMF0gPSBtYXJrdXAuc3Vic3RyaW5nKGN1cnJlbnRbMTBdLCBpbmRleCk7IC8vIGNvbnRlbnRNYXJrdXAgZm9yIGJsb2NrIHRhZ1xuXHRcdFx0Y3VycmVudCA9IHN0YWNrLnBvcCgpO1xuXHRcdH1cblx0XHRibG9ja1RhZ0NoZWNrKCFjdXJyZW50ICYmIGNsb3NlQmxvY2spO1xuXHRcdGNvbnRlbnQgPSBjdXJyZW50WzJdO1xuXHR9XG5cdC8vPT09PSAvZW5kIG9mIG5lc3RlZCBmdW5jdGlvbnMgPT09PVxuXG5cdHZhciBpLCByZXN1bHQsIG5ld05vZGUsIGhhc0hhbmRsZXJzLCBiaW5kaW5ncyxcblx0XHRhbGxvd0NvZGUgPSAkc3ViU2V0dGluZ3MuYWxsb3dDb2RlIHx8IHRtcGwgJiYgdG1wbC5hbGxvd0NvZGVcblx0XHRcdHx8ICR2aWV3c1NldHRpbmdzLmFsbG93Q29kZSA9PT0gdHJ1ZSwgLy8gaW5jbHVkZSBkaXJlY3Qgc2V0dGluZyBvZiBzZXR0aW5ncy5hbGxvd0NvZGUgdHJ1ZSBmb3IgYmFja3dhcmQgY29tcGF0IG9ubHlcblx0XHRhc3RUb3AgPSBbXSxcblx0XHRsb2MgPSAwLFxuXHRcdHN0YWNrID0gW10sXG5cdFx0Y29udGVudCA9IGFzdFRvcCxcblx0XHRjdXJyZW50ID0gWywsYXN0VG9wXTtcblxuXHRpZiAoYWxsb3dDb2RlICYmIHRtcGwuX2lzKSB7XG5cdFx0dG1wbC5hbGxvd0NvZGUgPSBhbGxvd0NvZGU7XG5cdH1cblxuLy9UT0RPXHRyZXN1bHQgPSB0bXBsRm5zQ2FjaGVbbWFya3VwXTsgLy8gT25seSBjYWNoZSBpZiB0ZW1wbGF0ZSBpcyBub3QgbmFtZWQgYW5kIG1hcmt1cCBsZW5ndGggPCAuLi4sXG4vL2FuZCB0aGVyZSBhcmUgbm8gYmluZGluZ3Mgb3Igc3VidGVtcGxhdGVzPz8gQ29uc2lkZXIgc3RhbmRhcmQgb3B0aW1pemF0aW9uIGZvciBkYXRhLWxpbms9XCJhLmIuY1wiXG4vL1x0XHRpZiAocmVzdWx0KSB7XG4vL1x0XHRcdHRtcGwuZm4gPSByZXN1bHQ7XG4vL1x0XHR9IGVsc2Uge1xuXG4vL1x0XHRyZXN1bHQgPSBtYXJrdXA7XG5cdGlmIChpc0xpbmtFeHByKSB7XG5cdFx0aWYgKGNvbnZlcnRCYWNrICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdG1hcmt1cCA9IG1hcmt1cC5zbGljZSgwLCAtY29udmVydEJhY2subGVuZ3RoIC0gMikgKyBkZWxpbUNsb3NlQ2hhcjA7XG5cdFx0fVxuXHRcdG1hcmt1cCA9IGRlbGltT3BlbkNoYXIwICsgbWFya3VwICsgZGVsaW1DbG9zZUNoYXIxO1xuXHR9XG5cblx0YmxvY2tUYWdDaGVjayhzdGFja1swXSAmJiBzdGFja1swXVsyXS5wb3AoKVswXSk7XG5cdC8vIEJ1aWxkIHRoZSBBU1QgKGFic3RyYWN0IHN5bnRheCB0cmVlKSB1bmRlciBhc3RUb3Bcblx0bWFya3VwLnJlcGxhY2UoclRhZywgcGFyc2VUYWcpO1xuXG5cdHB1c2hwcmVjZWRpbmdDb250ZW50KG1hcmt1cC5sZW5ndGgpO1xuXG5cdGlmIChsb2MgPSBhc3RUb3BbYXN0VG9wLmxlbmd0aCAtIDFdKSB7XG5cdFx0YmxvY2tUYWdDaGVjayhcIlwiICsgbG9jICE9PSBsb2MgJiYgKCtsb2NbMTBdID09PSBsb2NbMTBdKSAmJiBsb2NbMF0pO1xuXHR9XG4vL1x0XHRcdHJlc3VsdCA9IHRtcGxGbnNDYWNoZVttYXJrdXBdID0gYnVpbGRDb2RlKGFzdFRvcCwgdG1wbCk7XG4vL1x0XHR9XG5cblx0aWYgKGlzTGlua0V4cHIpIHtcblx0XHRyZXN1bHQgPSBidWlsZENvZGUoYXN0VG9wLCBtYXJrdXAsIGlzTGlua0V4cHIpO1xuXHRcdGJpbmRpbmdzID0gW107XG5cdFx0aSA9IGFzdFRvcC5sZW5ndGg7XG5cdFx0d2hpbGUgKGktLSkge1xuXHRcdFx0YmluZGluZ3MudW5zaGlmdChhc3RUb3BbaV1bOV0pOyAvLyBXaXRoIGRhdGEtbGluayBleHByZXNzaW9ucywgcGF0aEJpbmRpbmdzIGFycmF5IGZvciB0YWdDdHhbaV0gaXMgYXN0VG9wW2ldWzldXG5cdFx0fVxuXHRcdHNldFBhdGhzKHJlc3VsdCwgYmluZGluZ3MpO1xuXHR9IGVsc2Uge1xuXHRcdHJlc3VsdCA9IGJ1aWxkQ29kZShhc3RUb3AsIHRtcGwpO1xuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIHNldFBhdGhzKGZuLCBwYXRoc0Fycikge1xuXHR2YXIga2V5LCBwYXRocyxcblx0XHRpID0gMCxcblx0XHRsID0gcGF0aHNBcnIubGVuZ3RoO1xuXHRmbi5kZXBzID0gW107XG5cdGZuLnBhdGhzID0gW107IC8vIFRoZSBhcnJheSBvZiBwYXRoIGJpbmRpbmcgKGFycmF5L2RpY3Rpb25hcnkpcyBmb3IgZWFjaCB0YWcvZWxzZSBibG9jaydzIGFyZ3MgYW5kIHByb3BzXG5cdGZvciAoOyBpIDwgbDsgaSsrKSB7XG5cdFx0Zm4ucGF0aHMucHVzaChwYXRocyA9IHBhdGhzQXJyW2ldKTtcblx0XHRmb3IgKGtleSBpbiBwYXRocykge1xuXHRcdFx0aWYgKGtleSAhPT0gXCJfanN2dG9cIiAmJiBwYXRocy5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIHBhdGhzW2tleV0ubGVuZ3RoICYmICFwYXRoc1trZXldLnNrcCkge1xuXHRcdFx0XHRmbi5kZXBzID0gZm4uZGVwcy5jb25jYXQocGF0aHNba2V5XSk7IC8vIGRlcHMgaXMgdGhlIGNvbmNhdGVuYXRpb24gb2YgdGhlIHBhdGhzIGFycmF5cyBmb3IgdGhlIGRpZmZlcmVudCBiaW5kaW5nc1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBwYXJzZWRQYXJhbShhcmdzLCBwcm9wcywgY3R4KSB7XG5cdHJldHVybiBbYXJncy5zbGljZSgwLCAtMSksIHByb3BzLnNsaWNlKDAsIC0xKSwgY3R4LnNsaWNlKDAsIC0xKV07XG59XG5cbmZ1bmN0aW9uIHBhcmFtU3RydWN0dXJlKHBhcnRzLCB0eXBlKSB7XG5cdHJldHVybiAnXFxuXFx0J1xuXHRcdCsgKHR5cGVcblx0XHRcdD8gdHlwZSArICc6eydcblx0XHRcdDogJycpXG5cdFx0KyAnYXJnczpbJyArIHBhcnRzWzBdICsgJ10sXFxuXFx0cHJvcHM6eycgKyBwYXJ0c1sxXSArICd9J1xuXHRcdCsgKHBhcnRzWzJdID8gJyxcXG5cXHRjdHg6eycgKyBwYXJ0c1syXSArICd9JyA6IFwiXCIpO1xufVxuXG5mdW5jdGlvbiBwYXJzZVBhcmFtcyhwYXJhbXMsIHBhdGhCaW5kaW5ncywgdG1wbCwgaXNMaW5rRXhwcikge1xuXG5cdGZ1bmN0aW9uIHBhcnNlVG9rZW5zKGFsbCwgbGZ0UHJuMCwgbGZ0UHJuLCBib3VuZCwgcGF0aCwgb3BlcmF0b3IsIGVyciwgZXEsIHBhdGgyLCBsYXRlLCBwcm4sIGNvbW1hLCBsZnRQcm4yLCBhcG9zLCBxdW90LCBydFBybiwgcnRQcm5Eb3QsIHBybjIsIHNwYWNlLCBpbmRleCwgZnVsbCkge1xuXHQvLyAvKFxcKCkoPz1cXHMqXFwoKXwoPzooWyhbXSlcXHMqKT8oPzooXFxePykofj9bXFx3JC5eXSspP1xccyooKFxcK1xcK3wtLSl8XFwrfC18fig/IVtcXHckXSl8JiZ8XFx8XFx8fD09PXwhPT18PT18IT18PD18Pj18Wzw+JSo6P1xcL118KD0pKVxccyp8KCEqPyhAKT9bI35dP1tcXHckLl5dKykoWyhbXSk/KXwoLFxccyopfChcXCg/KVxcXFw/KD86KCcpfChcIikpfCg/OlxccyooKFspXFxdXSkoPz1bLl5dfFxccyokfFteKFtdKXxbKVxcXV0pKFsoW10/KSl8KFxccyspL2csXG5cdC8vbGZ0UHJuMCAgICAgICAgICAgbGZ0UHJuICAgICAgICAgYm91bmQgICAgIHBhdGggICAgICAgICAgICAgICBvcGVyYXRvciAgICAgZXJyICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXEgICAgICBwYXRoMiBsYXRlICAgICAgICAgICAgcHJuICAgICAgY29tbWEgIGxmdFBybjIgICBhcG9zIHF1b3QgICAgICAgIHJ0UHJuICBydFBybkRvdCAgICAgICAgICAgICAgICAgIHBybjIgICAgIHNwYWNlXG5cdC8vIChsZWZ0IHBhcmVuPyBmb2xsb3dlZCBieSAocGF0aD8gZm9sbG93ZWQgYnkgb3BlcmF0b3IpIG9yIChwYXRoIGZvbGxvd2VkIGJ5IHBhcmVuPykpIG9yIGNvbW1hIG9yIGFwb3Mgb3IgcXVvdCBvciByaWdodCBwYXJlbiBvciBzcGFjZVxuXG5cdFx0ZnVuY3Rpb24gcGFyc2VQYXRoKGFsbFBhdGgsIG5vdCwgb2JqZWN0LCBoZWxwZXIsIHZpZXcsIHZpZXdQcm9wZXJ0eSwgcGF0aFRva2VucywgbGVhZlRva2VuKSB7XG5cdFx0XHQvLyAvXighKj8pKD86bnVsbHx0cnVlfGZhbHNlfFxcZFtcXGQuXSp8KFtcXHckXSt8XFwufH4oW1xcdyRdKyl8Iyh2aWV3fChbXFx3JF0rKSk/KShbXFx3JC5eXSo/KSg/OlsuW15dKFtcXHckXSspXFxdPyk/KSQvZyxcblx0XHRcdC8vICAgIG5vdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3QgICAgIGhlbHBlciAgICB2aWV3ICB2aWV3UHJvcGVydHkgcGF0aFRva2VucyAgICAgIGxlYWZUb2tlblxuXHRcdFx0dmFyIHN1YlBhdGggPSBvYmplY3QgPT09IFwiLlwiO1xuXHRcdFx0aWYgKG9iamVjdCkge1xuXHRcdFx0XHRwYXRoID0gcGF0aC5zbGljZShub3QubGVuZ3RoKTtcblx0XHRcdFx0aWYgKC9eXFwuP2NvbnN0cnVjdG9yJC8udGVzdChsZWFmVG9rZW58fHBhdGgpKSB7XG5cdFx0XHRcdFx0c3ludGF4RXJyb3IoYWxsUGF0aCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCFzdWJQYXRoKSB7XG5cdFx0XHRcdFx0YWxsUGF0aCA9IChsYXRlIC8vIGxhdGUgcGF0aCBAYS5iLmM6IG5vdCB0aHJvdyBvbiAncHJvcGVydHkgb2YgdW5kZWZpbmVkJyBpZiBhIHVuZGVmaW5lZCwgYW5kIHdpbGwgdXNlIF9nZXRPYigpIGFmdGVyIGxpbmtpbmcgdG8gcmVzb2x2ZSBsYXRlLlxuXHRcdFx0XHRcdFx0XHQ/IChpc0xpbmtFeHByID8gJycgOiAnKGx0T2IubHQ9bHRPYi5sdHx8JykgKyAnKG9iPSdcblx0XHRcdFx0XHRcdFx0OiBcIlwiXG5cdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHQrIChoZWxwZXJcblx0XHRcdFx0XHRcdFx0PyAndmlldy5jdHhQcm0oXCInICsgaGVscGVyICsgJ1wiKSdcblx0XHRcdFx0XHRcdFx0OiB2aWV3XG5cdFx0XHRcdFx0XHRcdFx0PyBcInZpZXdcIlxuXHRcdFx0XHRcdFx0XHRcdDogXCJkYXRhXCIpXG5cdFx0XHRcdFx0XHQrIChsYXRlXG5cdFx0XHRcdFx0XHRcdD8gJyk9PT11bmRlZmluZWQnICsgKGlzTGlua0V4cHIgPyAnJyA6ICcpJykgKyAnP1wiXCI6dmlldy5fZ2V0T2Iob2IsXCInXG5cdFx0XHRcdFx0XHRcdDogXCJcIlxuXHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0KyAobGVhZlRva2VuXG5cdFx0XHRcdFx0XHRcdD8gKHZpZXdQcm9wZXJ0eVxuXHRcdFx0XHRcdFx0XHRcdD8gXCIuXCIgKyB2aWV3UHJvcGVydHlcblx0XHRcdFx0XHRcdFx0XHQ6IGhlbHBlclxuXHRcdFx0XHRcdFx0XHRcdFx0PyBcIlwiXG5cdFx0XHRcdFx0XHRcdFx0XHQ6ICh2aWV3ID8gXCJcIiA6IFwiLlwiICsgb2JqZWN0KVxuXHRcdFx0XHRcdFx0XHRcdCkgKyAocGF0aFRva2VucyB8fCBcIlwiKVxuXHRcdFx0XHRcdFx0XHQ6IChsZWFmVG9rZW4gPSBoZWxwZXIgPyBcIlwiIDogdmlldyA/IHZpZXdQcm9wZXJ0eSB8fCBcIlwiIDogb2JqZWN0LCBcIlwiKSk7XG5cdFx0XHRcdFx0YWxsUGF0aCA9IGFsbFBhdGggKyAobGVhZlRva2VuID8gXCIuXCIgKyBsZWFmVG9rZW4gOiBcIlwiKTtcblxuXHRcdFx0XHRcdGFsbFBhdGggPSBub3QgKyAoYWxsUGF0aC5zbGljZSgwLCA5KSA9PT0gXCJ2aWV3LmRhdGFcIlxuXHRcdFx0XHRcdFx0PyBhbGxQYXRoLnNsaWNlKDUpIC8vIGNvbnZlcnQgI3ZpZXcuZGF0YS4uLiB0byBkYXRhLi4uXG5cdFx0XHRcdFx0XHQ6IGFsbFBhdGgpXG5cdFx0XHRcdFx0KyAobGF0ZVxuXHRcdFx0XHRcdFx0XHQ/IChpc0xpbmtFeHByID8gJ1wiJzogJ1wiLGx0T2InKSArIChwcm4gPyAnLDEpJzonKScpXG5cdFx0XHRcdFx0XHRcdDogXCJcIlxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoYmluZGluZ3MpIHtcblx0XHRcdFx0XHRiaW5kcyA9IG5hbWVkID09PSBcIl9saW5rVG9cIiA/IChiaW5kdG8gPSBwYXRoQmluZGluZ3MuX2pzdnRvID0gcGF0aEJpbmRpbmdzLl9qc3Z0byB8fCBbXSkgOiBibmRDdHguYmQ7XG5cdFx0XHRcdFx0aWYgKHRoZU9iID0gc3ViUGF0aCAmJiBiaW5kc1tiaW5kcy5sZW5ndGgtMV0pIHtcblx0XHRcdFx0XHRcdGlmICh0aGVPYi5fY3BmbikgeyAvLyBDb21wdXRlZCBwcm9wZXJ0eSBleHByT2Jcblx0XHRcdFx0XHRcdFx0d2hpbGUgKHRoZU9iLnNiKSB7XG5cdFx0XHRcdFx0XHRcdFx0dGhlT2IgPSB0aGVPYi5zYjtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRpZiAodGhlT2IuYm5kKSB7XG5cdFx0XHRcdFx0XHRcdFx0cGF0aCA9IFwiXlwiICsgcGF0aC5zbGljZSgxKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR0aGVPYi5zYiA9IHBhdGg7XG5cdFx0XHRcdFx0XHRcdHRoZU9iLmJuZCA9IHRoZU9iLmJuZCB8fCBwYXRoWzBdID09PSBcIl5cIjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0YmluZHMucHVzaChwYXRoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cGF0aFN0YXJ0W3BhcmVuRGVwdGhdID0gaW5kZXggKyAoc3ViUGF0aCA/IDEgOiAwKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGFsbFBhdGg7XG5cdFx0fVxuXG5cdFx0Ly9ib3VuZCA9IGJpbmRpbmdzICYmIGJvdW5kO1xuXHRcdGlmIChib3VuZCAmJiAhZXEpIHtcblx0XHRcdHBhdGggPSBib3VuZCArIHBhdGg7IC8vIGUuZy4gc29tZS5mbiguLi4pXnNvbWUucGF0aCAtIHNvIGhlcmUgcGF0aCBpcyBcIl5zb21lLnBhdGhcIlxuXHRcdH1cblx0XHRvcGVyYXRvciA9IG9wZXJhdG9yIHx8IFwiXCI7XG5cdFx0bGZ0UHJuID0gbGZ0UHJuIHx8IGxmdFBybjAgfHwgbGZ0UHJuMjtcblx0XHRwYXRoID0gcGF0aCB8fCBwYXRoMjtcblxuXHRcdGlmIChsYXRlICYmIChsYXRlID0gIS9cXCl8XS8udGVzdChmdWxsW2luZGV4LTFdKSkpIHtcblx0XHRcdHBhdGggPSBwYXRoLnNsaWNlKDEpLnNwbGl0KFwiLlwiKS5qb2luKFwiXlwiKTsgLy8gTGF0ZSBwYXRoIEB6LmIuYy4gVXNlIFwiXlwiIHJhdGhlciB0aGFuIFwiLlwiIHRvIGVuc3VyZSB0aGF0IGRlZXAgYmluZGluZyB3aWxsIGJlIHVzZWRcblx0XHR9XG5cdFx0Ly8gQ291bGQgZG8gdGhpcyAtIGJ1dCBub3Qgd29ydGggcGVyZiBjb3N0Pz8gOi1cblx0XHQvLyBpZiAoIXBhdGgubGFzdEluZGV4T2YoXCIjZGF0YS5cIiwgMCkpIHsgcGF0aCA9IHBhdGguc2xpY2UoNik7IH0gLy8gSWYgcGF0aCBzdGFydHMgd2l0aCBcIiNkYXRhLlwiLCByZW1vdmUgdGhhdC5cblx0XHRwcm4gPSBwcm4gfHwgcHJuMiB8fCBcIlwiO1xuXG5cdFx0dmFyIGV4cHIsIGV4cHJGbiwgYmluZHMsIHRoZU9iLCBuZXdPYixcblx0XHRcdHJ0U3EgPSBcIilcIjtcblxuXHRcdGlmIChwcm4gPT09IFwiW1wiKSB7XG5cdFx0XHRwcm4gPSBcIltqLl9zcShcIjtcblx0XHRcdHJ0U3EgPSBcIildXCI7XG5cdFx0fVxuXG5cdFx0aWYgKGVyciAmJiAhYXBvc2VkICYmICFxdW90ZWQpIHtcblx0XHRcdHN5bnRheEVycm9yKHBhcmFtcyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmIChiaW5kaW5ncyAmJiBydFBybkRvdCAmJiAhYXBvc2VkICYmICFxdW90ZWQpIHtcblx0XHRcdFx0Ly8gVGhpcyBpcyBhIGJpbmRpbmcgdG8gYSBwYXRoIGluIHdoaWNoIGFuIG9iamVjdCBpcyByZXR1cm5lZCBieSBhIGhlbHBlci9kYXRhIGZ1bmN0aW9uL2V4cHJlc3Npb24sIGUuZy4gZm9vKCleeC55IG9yIChhP2I6YyleeC55XG5cdFx0XHRcdC8vIFdlIGNyZWF0ZSBhIGNvbXBpbGVkIGZ1bmN0aW9uIHRvIGdldCB0aGUgb2JqZWN0IGluc3RhbmNlICh3aGljaCB3aWxsIGJlIGNhbGxlZCB3aGVuIHRoZSBkZXBlbmRlbnQgZGF0YSBvZiB0aGUgc3ViZXhwcmVzc2lvbiBjaGFuZ2VzLCB0byByZXR1cm4gdGhlIG5ldyBvYmplY3QsIGFuZCB0cmlnZ2VyIHJlLWJpbmRpbmcgb2YgdGhlIHN1YnNlcXVlbnQgcGF0aClcblx0XHRcdFx0aWYgKHBhcmVuRGVwdGgpIHtcblx0XHRcdFx0XHRleHByID0gcGF0aFN0YXJ0W3BhcmVuRGVwdGggLSAxXTtcblx0XHRcdFx0XHRpZiAoZnVsbC5sZW5ndGggLSAxID4gaW5kZXggLSAoZXhwciB8fCAwKSkgeyAvLyBXZSBuZWVkIHRvIGNvbXBpbGUgYSBzdWJleHByZXNzaW9uXG5cdFx0XHRcdFx0XHRleHByID0gZnVsbC5zbGljZShleHByLCBpbmRleCArIGFsbC5sZW5ndGgpO1xuXHRcdFx0XHRcdFx0aWYgKGV4cHJGbiAhPT0gdHJ1ZSkgeyAvLyBJZiBub3QgcmVlbnRyYW50IGNhbGwgZHVyaW5nIGNvbXBpbGF0aW9uXG5cdFx0XHRcdFx0XHRcdGJpbmRzID0gYmluZHRvIHx8IGJuZFN0YWNrW3BhcmVuRGVwdGgtMV0uYmQ7XG5cdFx0XHRcdFx0XHRcdC8vIEluc2VydCBleHByT2Igb2JqZWN0LCB0byBiZSB1c2VkIGR1cmluZyBiaW5kaW5nIHRvIHJldHVybiB0aGUgY29tcHV0ZWQgb2JqZWN0XG5cdFx0XHRcdFx0XHRcdHRoZU9iID0gYmluZHNbYmluZHMubGVuZ3RoLTFdO1xuXHRcdFx0XHRcdFx0XHRpZiAodGhlT2IgJiYgdGhlT2IucHJtKSB7XG5cdFx0XHRcdFx0XHRcdFx0d2hpbGUgKHRoZU9iLnNiICYmIHRoZU9iLnNiLnBybSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0dGhlT2IgPSB0aGVPYi5zYjtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0bmV3T2IgPSB0aGVPYi5zYiA9IHtwYXRoOiB0aGVPYi5zYiwgYm5kOiB0aGVPYi5ibmR9O1xuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdGJpbmRzLnB1c2gobmV3T2IgPSB7cGF0aDogYmluZHMucG9wKCl9KTsgLy8gSW5zZXJ0IGV4cHJPYiBvYmplY3QsIHRvIGJlIHVzZWQgZHVyaW5nIGJpbmRpbmcgdG8gcmV0dXJuIHRoZSBjb21wdXRlZCBvYmplY3Rcblx0XHRcdFx0XHRcdFx0fVx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgLy8gKGUuZy4gXCJzb21lLm9iamVjdCgpXCIgaW4gXCJzb21lLm9iamVjdCgpLmEuYlwiIC0gdG8gYmUgdXNlZCBhcyBjb250ZXh0IGZvciBiaW5kaW5nIHRoZSBmb2xsb3dpbmcgdG9rZW5zIFwiYS5iXCIpXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRydFBybkRvdCA9IGRlbGltT3BlbkNoYXIxICsgXCI6XCIgKyBleHByIC8vIFRoZSBwYXJhbWV0ZXIgb3IgZnVuY3Rpb24gc3ViZXhwcmVzc2lvblxuXHRcdFx0XHRcdFx0XHQrIFwiIG9uZXJyb3I9JydcIiAvLyBzZXQgb25lcnJvcj0nJyBpbiBvcmRlciB0byB3cmFwIGdlbmVyYXRlZCBjb2RlIHdpdGggYSB0cnkgY2F0Y2ggLSByZXR1cm5pbmcgJycgYXMgb2JqZWN0IGluc3RhbmNlIGlmIHRoZXJlIGlzIGFuIGVycm9yL21pc3NpbmcgcGFyZW50XG5cdFx0XHRcdFx0XHRcdCsgZGVsaW1DbG9zZUNoYXIwO1xuXHRcdFx0XHRcdFx0ZXhwckZuID0gdG1wbExpbmtzW3J0UHJuRG90XTtcblx0XHRcdFx0XHRcdGlmICghZXhwckZuKSB7XG5cdFx0XHRcdFx0XHRcdHRtcGxMaW5rc1tydFBybkRvdF0gPSB0cnVlOyAvLyBGbGFnIHRoYXQgdGhpcyBleHByRm4gKGZvciBydFBybkRvdCkgaXMgYmVpbmcgY29tcGlsZWRcblx0XHRcdFx0XHRcdFx0dG1wbExpbmtzW3J0UHJuRG90XSA9IGV4cHJGbiA9IHRtcGxGbihydFBybkRvdCwgdG1wbCwgdHJ1ZSk7IC8vIENvbXBpbGUgdGhlIGV4cHJlc3Npb24gKG9yIHVzZSBjYWNoZWQgY29weSBhbHJlYWR5IGluIHRtcGwubGlua3MpXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRpZiAoZXhwckZuICE9PSB0cnVlICYmIG5ld09iKSB7XG5cdFx0XHRcdFx0XHRcdC8vIElmIG5vdCByZWVudHJhbnQgY2FsbCBkdXJpbmcgY29tcGlsYXRpb25cblx0XHRcdFx0XHRcdFx0bmV3T2IuX2NwZm4gPSBleHByRm47XG5cdFx0XHRcdFx0XHRcdG5ld09iLnBybSA9IGJuZEN0eC5iZDtcblx0XHRcdFx0XHRcdFx0bmV3T2IuYm5kID0gbmV3T2IuYm5kIHx8IG5ld09iLnBhdGggJiYgbmV3T2IucGF0aC5pbmRleE9mKFwiXlwiKSA+PSAwO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIChhcG9zZWRcblx0XHRcdFx0Ly8gd2l0aGluIHNpbmdsZS1xdW90ZWQgc3RyaW5nXG5cdFx0XHRcdD8gKGFwb3NlZCA9ICFhcG9zLCAoYXBvc2VkID8gYWxsIDogbGZ0UHJuMiArICdcIicpKVxuXHRcdFx0XHQ6IHF1b3RlZFxuXHRcdFx0XHQvLyB3aXRoaW4gZG91YmxlLXF1b3RlZCBzdHJpbmdcblx0XHRcdFx0XHQ/IChxdW90ZWQgPSAhcXVvdCwgKHF1b3RlZCA/IGFsbCA6IGxmdFBybjIgKyAnXCInKSlcblx0XHRcdFx0XHQ6XG5cdFx0XHRcdChcblx0XHRcdFx0XHQobGZ0UHJuXG5cdFx0XHRcdFx0XHQ/IChwYXRoU3RhcnRbcGFyZW5EZXB0aF0gPSBpbmRleCsrLCBibmRDdHggPSBibmRTdGFja1srK3BhcmVuRGVwdGhdID0ge2JkOiBbXX0sIGxmdFBybilcblx0XHRcdFx0XHRcdDogXCJcIilcblx0XHRcdFx0XHQrIChzcGFjZVxuXHRcdFx0XHRcdFx0PyAocGFyZW5EZXB0aFxuXHRcdFx0XHRcdFx0XHQ/IFwiXCJcblx0XHRcdFx0Ly8gTmV3IGFyZyBvciBwcm9wIC0gc28gaW5zZXJ0IGJhY2tzcGFjZSBcXGIgKFxceDA4KSBhcyBzZXBhcmF0b3IgZm9yIG5hbWVkIHBhcmFtcywgdXNlZCBzdWJzZXF1ZW50bHkgYnkgckJ1aWxkSGFzaCwgYW5kIHByZXBhcmUgbmV3IGJpbmRpbmdzIGFycmF5XG5cdFx0XHRcdFx0XHRcdDogKHBhcmFtSW5kZXggPSBmdWxsLnNsaWNlKHBhcmFtSW5kZXgsIGluZGV4KSwgbmFtZWRcblx0XHRcdFx0XHRcdFx0XHQ/IChuYW1lZCA9IGJvdW5kTmFtZSA9IGJpbmR0byA9IGZhbHNlLCBcIlxcYlwiKVxuXHRcdFx0XHRcdFx0XHRcdDogXCJcXGIsXCIpICsgcGFyYW1JbmRleCArIChwYXJhbUluZGV4ID0gaW5kZXggKyBhbGwubGVuZ3RoLCBiaW5kaW5ncyAmJiBwYXRoQmluZGluZ3MucHVzaChibmRDdHguYmQgPSBbXSksIFwiXFxiXCIpXG5cdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHQ6IGVxXG5cdFx0XHRcdC8vIG5hbWVkIHBhcmFtLiBSZW1vdmUgYmluZGluZ3MgZm9yIGFyZyBhbmQgY3JlYXRlIGluc3RlYWQgYmluZGluZ3MgYXJyYXkgZm9yIHByb3Bcblx0XHRcdFx0XHRcdFx0PyAocGFyZW5EZXB0aCAmJiBzeW50YXhFcnJvcihwYXJhbXMpLCBiaW5kaW5ncyAmJiBwYXRoQmluZGluZ3MucG9wKCksIG5hbWVkID0gXCJfXCIgKyBwYXRoLCBib3VuZE5hbWUgPSBib3VuZCwgcGFyYW1JbmRleCA9IGluZGV4ICsgYWxsLmxlbmd0aCxcblx0XHRcdFx0XHRcdFx0XHRcdGJpbmRpbmdzICYmICgoYmluZGluZ3MgPSBibmRDdHguYmQgPSBwYXRoQmluZGluZ3NbbmFtZWRdID0gW10pLCBiaW5kaW5ncy5za3AgPSAhYm91bmQpLCBwYXRoICsgJzonKVxuXHRcdFx0XHRcdFx0XHQ6IHBhdGhcblx0XHRcdFx0Ly8gcGF0aFxuXHRcdFx0XHRcdFx0XHRcdD8gKHBhdGguc3BsaXQoXCJeXCIpLmpvaW4oXCIuXCIpLnJlcGxhY2UoJHN1Yi5yUGF0aCwgcGFyc2VQYXRoKVxuXHRcdFx0XHRcdFx0XHRcdFx0KyAocHJuXG5cdFx0XHRcdC8vIHNvbWUuZm5jYWxsKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ/IChibmRDdHggPSBibmRTdGFja1srK3BhcmVuRGVwdGhdID0ge2JkOiBbXX0sIGZuQ2FsbFtwYXJlbkRlcHRoXSA9IHJ0U3EsIHBybilcblx0XHRcdFx0XHRcdFx0XHRcdFx0OiBvcGVyYXRvcilcblx0XHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHRcdFx0OiBvcGVyYXRvclxuXHRcdFx0XHQvLyBvcGVyYXRvclxuXHRcdFx0XHRcdFx0XHRcdFx0PyBvcGVyYXRvclxuXHRcdFx0XHRcdFx0XHRcdFx0OiBydFByblxuXHRcdFx0XHQvLyBmdW5jdGlvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ/ICgocnRQcm4gPSBmbkNhbGxbcGFyZW5EZXB0aF0gfHwgcnRQcm4sIGZuQ2FsbFtwYXJlbkRlcHRoXSA9IGZhbHNlLCBibmRDdHggPSBibmRTdGFja1stLXBhcmVuRGVwdGhdLCBydFBybilcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQrIChwcm4gLy8gcnRQcm4gYW5kIHBybiwgZS5nICkoIGluIChhKSgpIG9yIGEoKSgpLCBvciApWyBpbiBhKClbXVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PyAoYm5kQ3R4ID0gYm5kU3RhY2tbKytwYXJlbkRlcHRoXSwgZm5DYWxsW3BhcmVuRGVwdGhdID0gcnRTcSwgcHJuKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0OiBcIlwiKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDogY29tbWFcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ/IChmbkNhbGxbcGFyZW5EZXB0aF0gfHwgc3ludGF4RXJyb3IocGFyYW1zKSwgXCIsXCIpIC8vIFdlIGRvbid0IGFsbG93IHRvcC1sZXZlbCBsaXRlcmFsIGFycmF5cyBvciBvYmplY3RzXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0OiBsZnRQcm4wXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ/IFwiXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDogKGFwb3NlZCA9IGFwb3MsIHF1b3RlZCA9IHF1b3QsICdcIicpXG5cdFx0XHRcdCkpXG5cdFx0XHQpO1xuXHRcdH1cblx0fVxuXG5cdHZhciBuYW1lZCwgYmluZHRvLCBib3VuZE5hbWUsXG5cdFx0cXVvdGVkLCAvLyBib29sZWFuIGZvciBzdHJpbmcgY29udGVudCBpbiBkb3VibGUgcXVvdGVzXG5cdFx0YXBvc2VkLCAvLyBvciBpbiBzaW5nbGUgcXVvdGVzXG5cdFx0YmluZGluZ3MgPSBwYXRoQmluZGluZ3MgJiYgcGF0aEJpbmRpbmdzWzBdLCAvLyBiaW5kaW5ncyBhcnJheSBmb3IgdGhlIGZpcnN0IGFyZ1xuXHRcdGJuZEN0eCA9IHtiZDogYmluZGluZ3N9LFxuXHRcdGJuZFN0YWNrID0gezA6IGJuZEN0eH0sXG5cdFx0cGFyYW1JbmRleCA9IDAsIC8vIGxpc3QsXG5cdFx0dG1wbExpbmtzID0gKHRtcGwgPyB0bXBsLmxpbmtzIDogYmluZGluZ3MgJiYgKGJpbmRpbmdzLmxpbmtzID0gYmluZGluZ3MubGlua3MgfHwge30pKSB8fCB0b3BWaWV3LnRtcGwubGlua3MsXG5cdFx0Ly8gVGhlIGZvbGxvd2luZyBhcmUgdXNlZCBmb3IgdHJhY2tpbmcgcGF0aCBwYXJzaW5nIGluY2x1ZGluZyBuZXN0ZWQgcGF0aHMsIHN1Y2ggYXMgXCJhLmIoY15kICsgKGUpKV5mXCIsIGFuZCBjaGFpbmVkIGNvbXB1dGVkIHBhdGhzIHN1Y2ggYXNcblx0XHQvLyBcImEuYigpLmNeZCgpLmUuZigpLmdcIiAtIHdoaWNoIGhhcyBmb3VyIGNoYWluZWQgcGF0aHMsIFwiYS5iKClcIiwgXCJeYy5kKClcIiwgXCIuZS5mKClcIiBhbmQgXCIuZ1wiXG5cdFx0cGFyZW5EZXB0aCA9IDAsXG5cdFx0Zm5DYWxsID0ge30sIC8vIFdlIGFyZSBpbiBhIGZ1bmN0aW9uIGNhbGxcblx0XHRwYXRoU3RhcnQgPSB7fSwgLy8gdHJhY2tzIHRoZSBzdGFydCBvZiB0aGUgY3VycmVudCBwYXRoIHN1Y2ggYXMgY15kKCkgaW4gdGhlIGFib3ZlIGV4YW1wbGVcblx0XHRyZXN1bHQ7XG5cblx0aWYgKHBhcmFtc1swXSA9PT0gXCJAXCIpIHtcblx0XHRwYXJhbXMgPSBwYXJhbXMucmVwbGFjZShyQnJhY2tldFF1b3RlLCBcIi5cIik7XG5cdH1cblx0cmVzdWx0ID0gKHBhcmFtcyArICh0bXBsID8gXCIgXCIgOiBcIlwiKSkucmVwbGFjZSgkc3ViLnJQcm0sIHBhcnNlVG9rZW5zKTtcblxuXHRyZXR1cm4gIXBhcmVuRGVwdGggJiYgcmVzdWx0IHx8IHN5bnRheEVycm9yKHBhcmFtcyk7IC8vIFN5bnRheCBlcnJvciBpZiB1bmJhbGFuY2VkIHBhcmVucyBpbiBwYXJhbXMgZXhwcmVzc2lvblxufVxuXG5mdW5jdGlvbiBidWlsZENvZGUoYXN0LCB0bXBsLCBpc0xpbmtFeHByKSB7XG5cdC8vIEJ1aWxkIHRoZSB0ZW1wbGF0ZSBmdW5jdGlvbiBjb2RlIGZyb20gdGhlIEFTVCBub2RlcywgYW5kIHNldCBhcyBwcm9wZXJ0eSBvbiB0aGUgcGFzc2VkLWluIHRlbXBsYXRlIG9iamVjdFxuXHQvLyBVc2VkIGZvciBjb21waWxpbmcgdGVtcGxhdGVzLCBhbmQgYWxzbyBieSBKc1ZpZXdzIHRvIGJ1aWxkIGZ1bmN0aW9ucyBmb3IgZGF0YSBsaW5rIGV4cHJlc3Npb25zXG5cdHZhciBpLCBub2RlLCB0YWdOYW1lLCBjb252ZXJ0ZXIsIHRhZ0N0eCwgaGFzVGFnLCBoYXNFbmNvZGVyLCBnZXRzVmFsLCBoYXNDbnZ0LCB1c2VDbnZ0LCB0bXBsQmluZGluZ3MsIHBhdGhCaW5kaW5ncywgcGFyYW1zLCBib3VuZE9uRXJyU3RhcnQsXG5cdFx0Ym91bmRPbkVyckVuZCwgdGFnUmVuZGVyLCBuZXN0ZWRUbXBscywgdG1wbE5hbWUsIG5lc3RlZFRtcGwsIHRhZ0FuZEVsc2VzLCBjb250ZW50LCBtYXJrdXAsIG5leHRJc0Vsc2UsIG9sZENvZGUsIGlzRWxzZSwgaXNHZXRWYWwsIHRhZ0N0eEZuLFxuXHRcdG9uRXJyb3IsIHRhZ1N0YXJ0LCB0cmlnZ2VyLCBsYXRlUmVuZGVyLCByZXRTdHJPcGVuLCByZXRTdHJDbG9zZSxcblx0XHR0bXBsQmluZGluZ0tleSA9IDAsXG5cdFx0dXNlVmlld3MgPSAkc3ViU2V0dGluZ3NBZHZhbmNlZC51c2VWaWV3cyB8fCB0bXBsLnVzZVZpZXdzIHx8IHRtcGwudGFncyB8fCB0bXBsLnRlbXBsYXRlcyB8fCB0bXBsLmhlbHBlcnMgfHwgdG1wbC5jb252ZXJ0ZXJzLFxuXHRcdGNvZGUgPSBcIlwiLFxuXHRcdHRtcGxPcHRpb25zID0ge30sXG5cdFx0bCA9IGFzdC5sZW5ndGg7XG5cblx0aWYgKFwiXCIgKyB0bXBsID09PSB0bXBsKSB7XG5cdFx0dG1wbE5hbWUgPSBpc0xpbmtFeHByID8gJ2RhdGEtbGluaz1cIicgKyB0bXBsLnJlcGxhY2Uock5ld0xpbmUsIFwiIFwiKS5zbGljZSgxLCAtMSkgKyAnXCInIDogdG1wbDtcblx0XHR0bXBsID0gMDtcblx0fSBlbHNlIHtcblx0XHR0bXBsTmFtZSA9IHRtcGwudG1wbE5hbWUgfHwgXCJ1bm5hbWVkXCI7XG5cdFx0aWYgKHRtcGwuYWxsb3dDb2RlKSB7XG5cdFx0XHR0bXBsT3B0aW9ucy5hbGxvd0NvZGUgPSB0cnVlO1xuXHRcdH1cblx0XHRpZiAodG1wbC5kZWJ1Zykge1xuXHRcdFx0dG1wbE9wdGlvbnMuZGVidWcgPSB0cnVlO1xuXHRcdH1cblx0XHR0bXBsQmluZGluZ3MgPSB0bXBsLmJuZHM7XG5cdFx0bmVzdGVkVG1wbHMgPSB0bXBsLnRtcGxzO1xuXHR9XG5cdGZvciAoaSA9IDA7IGkgPCBsOyBpKyspIHtcblx0XHQvLyBBU1Qgbm9kZXM6IFswOiB0YWdOYW1lLCAxOiBjb252ZXJ0ZXIsIDI6IGNvbnRlbnQsIDM6IHBhcmFtcywgNDogY29kZSwgNTogb25FcnJvciwgNjogdHJpZ2dlciwgNzpwYXRoQmluZGluZ3MsIDg6IGNvbnRlbnRNYXJrdXBdXG5cdFx0bm9kZSA9IGFzdFtpXTtcblxuXHRcdC8vIEFkZCBuZXdsaW5lIGZvciBlYWNoIGNhbGxvdXQgdG8gdCgpIGMoKSBldGMuIGFuZCBlYWNoIG1hcmt1cCBzdHJpbmdcblx0XHRpZiAoXCJcIiArIG5vZGUgPT09IG5vZGUpIHtcblx0XHRcdC8vIGEgbWFya3VwIHN0cmluZyB0byBiZSBpbnNlcnRlZFxuXHRcdFx0Y29kZSArPSAnXFxuK1wiJyArIG5vZGUgKyAnXCInO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBhIGNvbXBpbGVkIHRhZyBleHByZXNzaW9uIHRvIGJlIGluc2VydGVkXG5cdFx0XHR0YWdOYW1lID0gbm9kZVswXTtcblx0XHRcdGlmICh0YWdOYW1lID09PSBcIipcIikge1xuXHRcdFx0XHQvLyBDb2RlIHRhZzoge3sqIH19XG5cdFx0XHRcdGNvZGUgKz0gXCI7XFxuXCIgKyBub2RlWzFdICsgXCJcXG5yZXQ9cmV0XCI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb252ZXJ0ZXIgPSBub2RlWzFdO1xuXHRcdFx0XHRjb250ZW50ID0gIWlzTGlua0V4cHIgJiYgbm9kZVsyXTtcblx0XHRcdFx0dGFnQ3R4ID0gcGFyYW1TdHJ1Y3R1cmUobm9kZVszXSwgJ3BhcmFtcycpICsgJ30sJyArIHBhcmFtU3RydWN0dXJlKHBhcmFtcyA9IG5vZGVbNF0pO1xuXHRcdFx0XHR0cmlnZ2VyID0gbm9kZVs2XTtcblx0XHRcdFx0bGF0ZVJlbmRlciA9IG5vZGVbN107XG5cdFx0XHRcdGlmIChub2RlWzhdKSB7IC8vIGxhdGVQYXRoIEBhLmIuYyBvciBAfmEuYi5jXG5cdFx0XHRcdFx0cmV0U3RyT3BlbiA9IFwiXFxudmFyIG9iLGx0T2I9e30sY3R4cz1cIjtcblx0XHRcdFx0XHRyZXRTdHJDbG9zZSA9IFwiO1xcbmN0eHMubHQ9bHRPYi5sdDtcXG5yZXR1cm4gY3R4cztcIjtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXRTdHJPcGVuID0gXCJcXG5yZXR1cm4gXCI7XG5cdFx0XHRcdFx0cmV0U3RyQ2xvc2UgPSBcIlwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdG1hcmt1cCA9IG5vZGVbMTBdICYmIG5vZGVbMTBdLnJlcGxhY2UoclVuZXNjYXBlUXVvdGVzLCBcIiQxXCIpO1xuXHRcdFx0XHRpZiAoaXNFbHNlID0gdGFnTmFtZSA9PT0gXCJlbHNlXCIpIHtcblx0XHRcdFx0XHRpZiAocGF0aEJpbmRpbmdzKSB7XG5cdFx0XHRcdFx0XHRwYXRoQmluZGluZ3MucHVzaChub2RlWzldKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0b25FcnJvciA9IG5vZGVbNV0gfHwgJHN1YlNldHRpbmdzLmRlYnVnTW9kZSAhPT0gZmFsc2UgJiYgXCJ1bmRlZmluZWRcIjsgLy8gSWYgZGVidWdNb2RlIG5vdCBmYWxzZSwgc2V0IGRlZmF1bHQgb25FcnJvciBoYW5kbGVyIG9uIHRhZyB0byBcInVuZGVmaW5lZFwiIChzZWUgb25SZW5kZXJFcnJvcilcblx0XHRcdFx0XHRpZiAodG1wbEJpbmRpbmdzICYmIChwYXRoQmluZGluZ3MgPSBub2RlWzldKSkgeyAvLyBBcnJheSBvZiBwYXRocywgb3IgZmFsc2UgaWYgbm90IGRhdGEtYm91bmRcblx0XHRcdFx0XHRcdHBhdGhCaW5kaW5ncyA9IFtwYXRoQmluZGluZ3NdO1xuXHRcdFx0XHRcdFx0dG1wbEJpbmRpbmdLZXkgPSB0bXBsQmluZGluZ3MucHVzaCgxKTsgLy8gQWRkIHBsYWNlaG9sZGVyIGluIHRtcGxCaW5kaW5ncyBmb3IgY29tcGlsZWQgZnVuY3Rpb25cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0dXNlVmlld3MgPSB1c2VWaWV3cyB8fCBwYXJhbXNbMV0gfHwgcGFyYW1zWzJdIHx8IHBhdGhCaW5kaW5ncyB8fCAvdmlldy4oPyFpbmRleCkvLnRlc3QocGFyYW1zWzBdKTtcblx0XHRcdFx0Ly8gdXNlVmlld3MgaXMgZm9yIHBlcmYgb3B0aW1pemF0aW9uLiBGb3IgcmVuZGVyKCkgd2Ugb25seSB1c2Ugdmlld3MgaWYgbmVjZXNzYXJ5IC0gZm9yIHRoZSBtb3JlIGFkdmFuY2VkIHNjZW5hcmlvcy5cblx0XHRcdFx0Ly8gV2UgdXNlIHZpZXdzIGlmIHRoZXJlIGFyZSBwcm9wcywgY29udGV4dHVhbCBwcm9wZXJ0aWVzIG9yIGFyZ3Mgd2l0aCAjLi4uIChvdGhlciB0aGFuICNpbmRleCkgLSBidXQgeW91IGNhbiBmb3JjZVxuXHRcdFx0XHQvLyB1c2luZyB0aGUgZnVsbCB2aWV3IGluZnJhc3RydWN0dXJlLCAoYW5kIHBheSBhIHBlcmYgcHJpY2UpIGJ5IG9wdGluZyBpbjogU2V0IHVzZVZpZXdzOiB0cnVlIG9uIHRoZSB0ZW1wbGF0ZSwgbWFudWFsbHkuLi5cblx0XHRcdFx0aWYgKGlzR2V0VmFsID0gdGFnTmFtZSA9PT0gXCI6XCIpIHtcblx0XHRcdFx0XHRpZiAoY29udmVydGVyKSB7XG5cdFx0XHRcdFx0XHR0YWdOYW1lID0gY29udmVydGVyID09PSBIVE1MID8gXCI+XCIgOiBjb252ZXJ0ZXIgKyB0YWdOYW1lO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRpZiAoY29udGVudCkgeyAvLyBUT0RPIG9wdGltaXplIC0gaWYgY29udGVudC5sZW5ndGggPT09IDAgb3IgaWYgdGhlcmUgaXMgYSB0bXBsPVwiLi4uXCIgc3BlY2lmaWVkIC0gc2V0IGNvbnRlbnQgdG8gbnVsbCAvIGRvbid0IHJ1biB0aGlzIGNvbXBpbGF0aW9uIGNvZGUgLSBzaW5jZSBjb250ZW50IHdvbid0IGdldCB1c2VkISFcblx0XHRcdFx0XHRcdC8vIENyZWF0ZSB0ZW1wbGF0ZSBvYmplY3QgZm9yIG5lc3RlZCB0ZW1wbGF0ZVxuXHRcdFx0XHRcdFx0bmVzdGVkVG1wbCA9IHRtcGxPYmplY3QobWFya3VwLCB0bXBsT3B0aW9ucyk7XG5cdFx0XHRcdFx0XHRuZXN0ZWRUbXBsLnRtcGxOYW1lID0gdG1wbE5hbWUgKyBcIi9cIiArIHRhZ05hbWU7XG5cdFx0XHRcdFx0XHQvLyBDb21waWxlIHRvIEFTVCBhbmQgdGhlbiB0byBjb21waWxlZCBmdW5jdGlvblxuXHRcdFx0XHRcdFx0bmVzdGVkVG1wbC51c2VWaWV3cyA9IG5lc3RlZFRtcGwudXNlVmlld3MgfHwgdXNlVmlld3M7XG5cdFx0XHRcdFx0XHRidWlsZENvZGUoY29udGVudCwgbmVzdGVkVG1wbCk7XG5cdFx0XHRcdFx0XHR1c2VWaWV3cyA9IG5lc3RlZFRtcGwudXNlVmlld3M7XG5cdFx0XHRcdFx0XHRuZXN0ZWRUbXBscy5wdXNoKG5lc3RlZFRtcGwpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmICghaXNFbHNlKSB7XG5cdFx0XHRcdFx0XHQvLyBUaGlzIGlzIG5vdCBhbiBlbHNlIHRhZy5cblx0XHRcdFx0XHRcdHRhZ0FuZEVsc2VzID0gdGFnTmFtZTtcblx0XHRcdFx0XHRcdHVzZVZpZXdzID0gdXNlVmlld3MgfHwgdGFnTmFtZSAmJiAoISR0YWdzW3RhZ05hbWVdIHx8ICEkdGFnc1t0YWdOYW1lXS5mbG93KTtcblx0XHRcdFx0XHRcdC8vIFN3aXRjaCB0byBhIG5ldyBjb2RlIHN0cmluZyBmb3IgdGhpcyBib3VuZCB0YWcgKGFuZCBpdHMgZWxzZXMsIGlmIGl0IGhhcyBhbnkpIC0gZm9yIHJldHVybmluZyB0aGUgdGFnQ3R4cyBhcnJheVxuXHRcdFx0XHRcdFx0b2xkQ29kZSA9IGNvZGU7XG5cdFx0XHRcdFx0XHRjb2RlID0gXCJcIjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0bmV4dElzRWxzZSA9IGFzdFtpICsgMV07XG5cdFx0XHRcdFx0bmV4dElzRWxzZSA9IG5leHRJc0Vsc2UgJiYgbmV4dElzRWxzZVswXSA9PT0gXCJlbHNlXCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGFnU3RhcnQgPSBvbkVycm9yID8gXCI7XFxudHJ5e1xcbnJldCs9XCIgOiBcIlxcbitcIjtcblx0XHRcdFx0Ym91bmRPbkVyclN0YXJ0ID0gXCJcIjtcblx0XHRcdFx0Ym91bmRPbkVyckVuZCA9IFwiXCI7XG5cblx0XHRcdFx0aWYgKGlzR2V0VmFsICYmIChwYXRoQmluZGluZ3MgfHwgdHJpZ2dlciB8fCBjb252ZXJ0ZXIgJiYgY29udmVydGVyICE9PSBIVE1MIHx8IGxhdGVSZW5kZXIpKSB7XG5cdFx0XHRcdFx0Ly8gRm9yIGNvbnZlcnRWYWwgd2UgbmVlZCBhIGNvbXBpbGVkIGZ1bmN0aW9uIHRvIHJldHVybiB0aGUgbmV3IHRhZ0N0eChzKVxuXHRcdFx0XHRcdHRhZ0N0eEZuID0gbmV3IEZ1bmN0aW9uKFwiZGF0YSx2aWV3LGosdVwiLCBcIi8vIFwiICsgdG1wbE5hbWUgKyBcIiBcIiArICgrK3RtcGxCaW5kaW5nS2V5KSArIFwiIFwiICsgdGFnTmFtZVxuXHRcdFx0XHRcdFx0KyByZXRTdHJPcGVuICsgXCJ7XCIgKyB0YWdDdHggKyBcIn07XCIgKyByZXRTdHJDbG9zZSk7XG5cdFx0XHRcdFx0dGFnQ3R4Rm4uX2VyID0gb25FcnJvcjtcblx0XHRcdFx0XHR0YWdDdHhGbi5fdGFnID0gdGFnTmFtZTtcblx0XHRcdFx0XHR0YWdDdHhGbi5fYmQgPSAhIXBhdGhCaW5kaW5nczsgLy8gZGF0YS1saW5rZWQgdGFnIHteey4uLi99fVxuXHRcdFx0XHRcdHRhZ0N0eEZuLl9sciA9IGxhdGVSZW5kZXI7XG5cblx0XHRcdFx0XHRpZiAoaXNMaW5rRXhwcikge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRhZ0N0eEZuO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHNldFBhdGhzKHRhZ0N0eEZuLCBwYXRoQmluZGluZ3MpO1xuXHRcdFx0XHRcdHRhZ1JlbmRlciA9ICdjKFwiJyArIGNvbnZlcnRlciArICdcIix2aWV3LCc7XG5cdFx0XHRcdFx0dXNlQ252dCA9IHRydWU7XG5cdFx0XHRcdFx0Ym91bmRPbkVyclN0YXJ0ID0gdGFnUmVuZGVyICsgdG1wbEJpbmRpbmdLZXkgKyBcIixcIjtcblx0XHRcdFx0XHRib3VuZE9uRXJyRW5kID0gXCIpXCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29kZSArPSAoaXNHZXRWYWxcblx0XHRcdFx0XHQ/IChpc0xpbmtFeHByID8gKG9uRXJyb3IgPyBcInRyeXtcXG5cIiA6IFwiXCIpICsgXCJyZXR1cm4gXCIgOiB0YWdTdGFydCkgKyAodXNlQ252dCAvLyBDYWxsIF9jbnZ0IGlmIHRoZXJlIGlzIGEgY29udmVydGVyOiB7e2NudnQ6IC4uLiB9fSBvciB7XntjbnZ0OiAuLi4gfX1cblx0XHRcdFx0XHRcdD8gKHVzZUNudnQgPSB1bmRlZmluZWQsIHVzZVZpZXdzID0gaGFzQ252dCA9IHRydWUsIHRhZ1JlbmRlciArICh0YWdDdHhGblxuXHRcdFx0XHRcdFx0XHQ/ICgodG1wbEJpbmRpbmdzW3RtcGxCaW5kaW5nS2V5IC0gMV0gPSB0YWdDdHhGbiksIHRtcGxCaW5kaW5nS2V5KSAvLyBTdG9yZSB0aGUgY29tcGlsZWQgdGFnQ3R4Rm4gaW4gdG1wbC5ibmRzLCBhbmQgcGFzcyB0aGUga2V5IHRvIGNvbnZlcnRWYWwoKVxuXHRcdFx0XHRcdFx0XHQ6IFwie1wiICsgdGFnQ3R4ICsgXCJ9XCIpICsgXCIpXCIpXG5cdFx0XHRcdFx0XHQ6IHRhZ05hbWUgPT09IFwiPlwiXG5cdFx0XHRcdFx0XHRcdD8gKGhhc0VuY29kZXIgPSB0cnVlLCBcImgoXCIgKyBwYXJhbXNbMF0gKyBcIilcIilcblx0XHRcdFx0XHRcdFx0OiAoZ2V0c1ZhbCA9IHRydWUsIFwiKCh2PVwiICsgcGFyYW1zWzBdICsgJykhPW51bGw/djonICsgKGlzTGlua0V4cHIgPyAnbnVsbCknIDogJ1wiXCIpJykpXG5cdFx0XHRcdFx0XHRcdC8vIE5vbiBzdHJpY3QgZXF1YWxpdHkgc28gZGF0YS1saW5rPVwidGl0bGV7OmV4cHJ9XCIgd2l0aCBleHByPW51bGwvdW5kZWZpbmVkIHJlbW92ZXMgdGl0bGUgYXR0cmlidXRlXG5cdFx0XHRcdFx0KVxuXHRcdFx0XHRcdDogKGhhc1RhZyA9IHRydWUsIFwiXFxue3ZpZXc6dmlldyxjb250ZW50OmZhbHNlLHRtcGw6XCIgLy8gQWRkIHRoaXMgdGFnQ3R4IHRvIHRoZSBjb21waWxlZCBjb2RlIGZvciB0aGUgdGFnQ3R4cyB0byBiZSBwYXNzZWQgdG8gcmVuZGVyVGFnKClcblx0XHRcdFx0XHRcdCsgKGNvbnRlbnQgPyBuZXN0ZWRUbXBscy5sZW5ndGggOiBcImZhbHNlXCIpICsgXCIsXCIgLy8gRm9yIGJsb2NrIHRhZ3MsIHBhc3MgaW4gdGhlIGtleSAobmVzdGVkVG1wbHMubGVuZ3RoKSB0byB0aGUgbmVzdGVkIGNvbnRlbnQgdGVtcGxhdGVcblx0XHRcdFx0XHRcdCsgdGFnQ3R4ICsgXCJ9LFwiKSk7XG5cblx0XHRcdFx0aWYgKHRhZ0FuZEVsc2VzICYmICFuZXh0SXNFbHNlKSB7XG5cdFx0XHRcdFx0Ly8gVGhpcyBpcyBhIGRhdGEtbGluayBleHByZXNzaW9uIG9yIGFuIGlubGluZSB0YWcgd2l0aG91dCBhbnkgZWxzZXMsIG9yIHRoZSBsYXN0IHt7ZWxzZX19IG9mIGFuIGlubGluZSB0YWdcblx0XHRcdFx0XHQvLyBXZSBjb21wbGV0ZSB0aGUgY29kZSBmb3IgcmV0dXJuaW5nIHRoZSB0YWdDdHhzIGFycmF5XG5cdFx0XHRcdFx0Y29kZSA9IFwiW1wiICsgY29kZS5zbGljZSgwLCAtMSkgKyBcIl1cIjtcblx0XHRcdFx0XHR0YWdSZW5kZXIgPSAndChcIicgKyB0YWdBbmRFbHNlcyArICdcIix2aWV3LHRoaXMsJztcblx0XHRcdFx0XHRpZiAoaXNMaW5rRXhwciB8fCBwYXRoQmluZGluZ3MpIHtcblx0XHRcdFx0XHRcdC8vIFRoaXMgaXMgYSBib3VuZCB0YWcgKGRhdGEtbGluayBleHByZXNzaW9uIG9yIGlubGluZSBib3VuZCB0YWcge157dGFnIC4uLn19KSBzbyB3ZSBzdG9yZSBhIGNvbXBpbGVkIHRhZ0N0eHMgZnVuY3Rpb24gaW4gdG1wLmJuZHNcblx0XHRcdFx0XHRcdGNvZGUgPSBuZXcgRnVuY3Rpb24oXCJkYXRhLHZpZXcsaix1XCIsIFwiIC8vIFwiICsgdG1wbE5hbWUgKyBcIiBcIiArIHRtcGxCaW5kaW5nS2V5ICsgXCIgXCIgKyB0YWdBbmRFbHNlcyArIHJldFN0ck9wZW4gKyBjb2RlXG5cdFx0XHRcdFx0XHRcdCsgcmV0U3RyQ2xvc2UpO1xuXHRcdFx0XHRcdFx0Y29kZS5fZXIgPSBvbkVycm9yO1xuXHRcdFx0XHRcdFx0Y29kZS5fdGFnID0gdGFnQW5kRWxzZXM7XG5cdFx0XHRcdFx0XHRpZiAocGF0aEJpbmRpbmdzKSB7XG5cdFx0XHRcdFx0XHRcdHNldFBhdGhzKHRtcGxCaW5kaW5nc1t0bXBsQmluZGluZ0tleSAtIDFdID0gY29kZSwgcGF0aEJpbmRpbmdzKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGNvZGUuX2xyID0gbGF0ZVJlbmRlcjtcblx0XHRcdFx0XHRcdGlmIChpc0xpbmtFeHByKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBjb2RlOyAvLyBGb3IgYSBkYXRhLWxpbmsgZXhwcmVzc2lvbiB3ZSByZXR1cm4gdGhlIGNvbXBpbGVkIHRhZ0N0eHMgZnVuY3Rpb25cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGJvdW5kT25FcnJTdGFydCA9IHRhZ1JlbmRlciArIHRtcGxCaW5kaW5nS2V5ICsgXCIsdW5kZWZpbmVkLFwiO1xuXHRcdFx0XHRcdFx0Ym91bmRPbkVyckVuZCA9IFwiKVwiO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIFRoaXMgaXMgdGhlIGxhc3Qge3tlbHNlfX0gZm9yIGFuIGlubGluZSB0YWcuXG5cdFx0XHRcdFx0Ly8gRm9yIGEgYm91bmQgdGFnLCBwYXNzIHRoZSB0YWdDdHhzIGZuIGxvb2t1cCBrZXkgdG8gcmVuZGVyVGFnLlxuXHRcdFx0XHRcdC8vIEZvciBhbiB1bmJvdW5kIHRhZywgaW5jbHVkZSB0aGUgY29kZSBkaXJlY3RseSBmb3IgZXZhbHVhdGluZyB0YWdDdHhzIGFycmF5XG5cdFx0XHRcdFx0Y29kZSA9IG9sZENvZGUgKyB0YWdTdGFydCArIHRhZ1JlbmRlciArIChwYXRoQmluZGluZ3MgJiYgdG1wbEJpbmRpbmdLZXkgfHwgY29kZSkgKyBcIilcIjtcblx0XHRcdFx0XHRwYXRoQmluZGluZ3MgPSAwO1xuXHRcdFx0XHRcdHRhZ0FuZEVsc2VzID0gMDtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAob25FcnJvciAmJiAhbmV4dElzRWxzZSkge1xuXHRcdFx0XHRcdHVzZVZpZXdzID0gdHJ1ZTtcblx0XHRcdFx0XHRjb2RlICs9ICc7XFxufWNhdGNoKGUpe3JldCcgKyAoaXNMaW5rRXhwciA/IFwidXJuIFwiIDogXCIrPVwiKSArIGJvdW5kT25FcnJTdGFydCArICdqLl9lcnIoZSx2aWV3LCcgKyBvbkVycm9yICsgJyknICsgYm91bmRPbkVyckVuZCArICc7fScgKyAoaXNMaW5rRXhwciA/IFwiXCIgOiAncmV0PXJldCcpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdC8vIEluY2x1ZGUgb25seSB0aGUgdmFyIHJlZmVyZW5jZXMgdGhhdCBhcmUgbmVlZGVkIGluIHRoZSBjb2RlXG5cdGNvZGUgPSBcIi8vIFwiICsgdG1wbE5hbWVcblx0XHQrICh0bXBsT3B0aW9ucy5kZWJ1ZyA/IFwiXFxuZGVidWdnZXI7XCIgOiBcIlwiKVxuXHRcdCsgXCJcXG52YXIgdlwiXG5cdFx0KyAoaGFzVGFnID8gXCIsdD1qLl90YWdcIiA6IFwiXCIpICAgICAgICAgICAgICAgIC8vIGhhcyB0YWdcblx0XHQrIChoYXNDbnZ0ID8gXCIsYz1qLl9jbnZ0XCIgOiBcIlwiKSAgICAgICAgICAgICAgLy8gY29udmVydGVyXG5cdFx0KyAoaGFzRW5jb2RlciA/IFwiLGg9ai5faHRtbFwiIDogXCJcIikgICAgICAgICAgIC8vIGh0bWwgY29udmVydGVyXG5cdFx0KyAoaXNMaW5rRXhwclxuXHRcdFx0XHQ/IChub2RlWzhdICAvLyBsYXRlIEAuLi4gcGF0aD9cblx0XHRcdFx0XHRcdD8gXCIsIG9iXCJcblx0XHRcdFx0XHRcdDogXCJcIlxuXHRcdFx0XHRcdCkgKyBcIjtcXG5cIlxuXHRcdFx0XHQ6ICcscmV0PVwiXCInKVxuXHRcdCsgY29kZVxuXHRcdCsgKGlzTGlua0V4cHIgPyBcIlxcblwiIDogXCI7XFxucmV0dXJuIHJldDtcIik7XG5cblx0dHJ5IHtcblx0XHRjb2RlID0gbmV3IEZ1bmN0aW9uKFwiZGF0YSx2aWV3LGosdVwiLCBjb2RlKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdHN5bnRheEVycm9yKFwiQ29tcGlsZWQgdGVtcGxhdGUgY29kZTpcXG5cXG5cIiArIGNvZGUgKyAnXFxuOiBcIicgKyAoZS5tZXNzYWdlfHxlKSArICdcIicpO1xuXHR9XG5cdGlmICh0bXBsKSB7XG5cdFx0dG1wbC5mbiA9IGNvZGU7XG5cdFx0dG1wbC51c2VWaWV3cyA9ICEhdXNlVmlld3M7XG5cdH1cblx0cmV0dXJuIGNvZGU7XG59XG5cbi8vPT09PT09PT09PVxuLy8gVXRpbGl0aWVzXG4vLz09PT09PT09PT1cblxuLy8gTWVyZ2Ugb2JqZWN0cywgaW4gcGFydGljdWxhciBjb250ZXh0cyB3aGljaCBpbmhlcml0IGZyb20gcGFyZW50IGNvbnRleHRzXG5mdW5jdGlvbiBleHRlbmRDdHgoY29udGV4dCwgcGFyZW50Q29udGV4dCkge1xuXHQvLyBSZXR1cm4gY29weSBvZiBwYXJlbnRDb250ZXh0LCB1bmxlc3MgY29udGV4dCBpcyBkZWZpbmVkIGFuZCBpcyBkaWZmZXJlbnQsIGluIHdoaWNoIGNhc2UgcmV0dXJuIGEgbmV3IG1lcmdlZCBjb250ZXh0XG5cdC8vIElmIG5laXRoZXIgY29udGV4dCBub3IgcGFyZW50Q29udGV4dCBhcmUgZGVmaW5lZCwgcmV0dXJuIHVuZGVmaW5lZFxuXHRyZXR1cm4gY29udGV4dCAmJiBjb250ZXh0ICE9PSBwYXJlbnRDb250ZXh0XG5cdFx0PyAocGFyZW50Q29udGV4dFxuXHRcdFx0PyAkZXh0ZW5kKCRleHRlbmQoe30sIHBhcmVudENvbnRleHQpLCBjb250ZXh0KVxuXHRcdFx0OiBjb250ZXh0KVxuXHRcdDogcGFyZW50Q29udGV4dCAmJiAkZXh0ZW5kKHt9LCBwYXJlbnRDb250ZXh0KTtcbn1cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0UHJvcHMoc291cmNlLCB0YWdDdHgpIHtcblx0Ly8gdGhpcyBwb2ludGVyIGlzIHRoZU1hcCAtIHdoaWNoIGhhcyB0YWdDdHgucHJvcHMgdG9vXG5cdC8vIGFyZ3VtZW50czogdGFnQ3R4LmFyZ3MuXG5cdHZhciBrZXksIHByb3AsXG5cdFx0bWFwID0gdGFnQ3R4Lm1hcCxcblx0XHRwcm9wc0FyciA9IG1hcCAmJiBtYXAucHJvcHNBcnI7XG5cblx0aWYgKCFwcm9wc0FycikgeyAvLyBtYXAucHJvcHNBcnIgaXMgdGhlIGZ1bGwgYXJyYXkgb2Yge2tleTouLi4sIHByb3A6Li4ufSBvYmplY3RzXG5cdFx0cHJvcHNBcnIgPSBbXTtcblx0XHRpZiAodHlwZW9mIHNvdXJjZSA9PT0gT0JKRUNUIHx8ICRpc0Z1bmN0aW9uKHNvdXJjZSkpIHtcblx0XHRcdGZvciAoa2V5IGluIHNvdXJjZSkge1xuXHRcdFx0XHRwcm9wID0gc291cmNlW2tleV07XG5cdFx0XHRcdGlmIChrZXkgIT09ICRleHBhbmRvICYmIHNvdXJjZS5oYXNPd25Qcm9wZXJ0eShrZXkpICYmICghdGFnQ3R4LnByb3BzLm5vRnVuY3Rpb25zIHx8ICEkLmlzRnVuY3Rpb24ocHJvcCkpKSB7XG5cdFx0XHRcdFx0cHJvcHNBcnIucHVzaCh7a2V5OiBrZXksIHByb3A6IHByb3B9KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAobWFwKSB7XG5cdFx0XHRtYXAucHJvcHNBcnIgPSBtYXAub3B0aW9ucyAmJiBwcm9wc0FycjsgLy8gSWYgYm91bmQge157cHJvcHN9fSBhbmQgbm90IGlzUmVuZGVyQ2FsbCwgc3RvcmUgcHJvcHNBcnIgb24gbWFwIChtYXAub3B0aW9ucyBpcyBkZWZpbmVkIG9ubHkgZm9yIGJvdW5kLCAmJiAhaXNSZW5kZXJDYWxsKVxuXHRcdH1cblx0fVxuXHRyZXR1cm4gZ2V0VGFyZ2V0U29ydGVkKHByb3BzQXJyLCB0YWdDdHgpOyAvLyBPYnRhaW5zIG1hcC50Z3QsIGJ5IGZpbHRlcmluZywgc29ydGluZyBhbmQgc3BsaWNpbmcgdGhlIGZ1bGwgcHJvcHNBcnJcbn1cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0U29ydGVkKHZhbHVlLCB0YWdDdHgpIHtcblx0Ly8gZ2V0VGd0XG5cdHZhciBtYXBwZWQsIHN0YXJ0LCBlbmQsXG5cdFx0dGFnID0gdGFnQ3R4LnRhZyxcblx0XHRwcm9wcyA9IHRhZ0N0eC5wcm9wcyxcblx0XHRwcm9wUGFyYW1zID0gdGFnQ3R4LnBhcmFtcy5wcm9wcyxcblx0XHRmaWx0ZXIgPSBwcm9wcy5maWx0ZXIsXG5cdFx0c29ydCA9IHByb3BzLnNvcnQsXG5cdFx0ZGlyZWN0U29ydCA9IHNvcnQgPT09IHRydWUsXG5cdFx0c3RlcCA9IHBhcnNlSW50KHByb3BzLnN0ZXApLFxuXHRcdHJldmVyc2UgPSBwcm9wcy5yZXZlcnNlID8gLTEgOiAxO1xuXG5cdGlmICghJGlzQXJyYXkodmFsdWUpKSB7XG5cdFx0cmV0dXJuIHZhbHVlO1xuXHR9XG5cdGlmIChkaXJlY3RTb3J0IHx8IHNvcnQgJiYgXCJcIiArIHNvcnQgPT09IHNvcnQpIHtcblx0XHQvLyBUZW1wb3JhcnkgbWFwcGVkIGFycmF5IGhvbGRzIG9iamVjdHMgd2l0aCBpbmRleCBhbmQgc29ydC12YWx1ZVxuXHRcdG1hcHBlZCA9IHZhbHVlLm1hcChmdW5jdGlvbihpdGVtLCBpKSB7XG5cdFx0XHRpdGVtID0gZGlyZWN0U29ydCA/IGl0ZW0gOiBnZXRQYXRoT2JqZWN0KGl0ZW0sIHNvcnQpO1xuXHRcdFx0cmV0dXJuIHtpOiBpLCB2OiBcIlwiICsgaXRlbSA9PT0gaXRlbSA/IGl0ZW0udG9Mb3dlckNhc2UoKSA6IGl0ZW19O1xuXHRcdH0pO1xuXHRcdC8vIFNvcnQgbWFwcGVkIGFycmF5XG5cdFx0bWFwcGVkLnNvcnQoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0cmV0dXJuIGEudiA+IGIudiA/IHJldmVyc2UgOiBhLnYgPCBiLnYgPyAtcmV2ZXJzZSA6IDA7XG5cdFx0fSk7XG5cdFx0Ly8gTWFwIHRvIG5ldyBhcnJheSB3aXRoIHJlc3VsdGluZyBvcmRlclxuXHRcdHZhbHVlID0gbWFwcGVkLm1hcChmdW5jdGlvbihpdGVtKXtcblx0XHRcdHJldHVybiB2YWx1ZVtpdGVtLmldO1xuXHRcdH0pO1xuXHR9IGVsc2UgaWYgKChzb3J0IHx8IHJldmVyc2UgPCAwKSAmJiAhdGFnLmRhdGFNYXApIHtcblx0XHR2YWx1ZSA9IHZhbHVlLnNsaWNlKCk7IC8vIENsb25lIGFycmF5IGZpcnN0IGlmIG5vdCBhbHJlYWR5IGEgbmV3IGFycmF5XG5cdH1cblx0aWYgKCRpc0Z1bmN0aW9uKHNvcnQpKSB7XG5cdFx0dmFsdWUgPSB2YWx1ZS5zb3J0KGZ1bmN0aW9uKCkgeyAvLyBXcmFwIHRoZSBzb3J0IGZ1bmN0aW9uIHRvIHByb3ZpZGUgdGFnQ3R4IGFzICd0aGlzJyBwb2ludGVyXG5cdFx0XHRyZXR1cm4gc29ydC5hcHBseSh0YWdDdHgsIGFyZ3VtZW50cyk7XG5cdFx0fSk7XG5cdH1cblx0aWYgKHJldmVyc2UgPCAwICYmICghc29ydCB8fCAkaXNGdW5jdGlvbihzb3J0KSkpIHsgLy8gUmV2ZXJzZSByZXN1bHQgaWYgbm90IGFscmVhZHkgcmV2ZXJzZWQgaW4gc29ydFxuXHRcdHZhbHVlID0gdmFsdWUucmV2ZXJzZSgpO1xuXHR9XG5cblx0aWYgKHZhbHVlLmZpbHRlciAmJiBmaWx0ZXIpIHsgLy8gSUU4IGRvZXMgbm90IHN1cHBvcnQgZmlsdGVyXG5cdFx0dmFsdWUgPSB2YWx1ZS5maWx0ZXIoZmlsdGVyLCB0YWdDdHgpO1xuXHRcdGlmICh0YWdDdHgudGFnLm9uRmlsdGVyKSB7XG5cdFx0XHR0YWdDdHgudGFnLm9uRmlsdGVyKHRhZ0N0eCk7XG5cdFx0fVxuXHR9XG5cblx0aWYgKHByb3BQYXJhbXMuc29ydGVkKSB7XG5cdFx0bWFwcGVkID0gKHNvcnQgfHwgcmV2ZXJzZSA8IDApID8gdmFsdWUgOiB2YWx1ZS5zbGljZSgpO1xuXHRcdGlmICh0YWcuc29ydGVkKSB7XG5cdFx0XHQkLm9ic2VydmFibGUodGFnLnNvcnRlZCkucmVmcmVzaChtYXBwZWQpOyAvLyBOb3RlIHRoYXQgdGhpcyBtaWdodCBjYXVzZSB0aGUgc3RhcnQgYW5kIGVuZCBwcm9wcyB0byBiZSBtb2RpZmllZCAtIGUuZy4gYnkgcGFnZXIgdGFnIGNvbnRyb2xcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFnQ3R4Lm1hcC5zb3J0ZWQgPSBtYXBwZWQ7XG5cdFx0fVxuXHR9XG5cblx0c3RhcnQgPSBwcm9wcy5zdGFydDsgLy8gR2V0IGN1cnJlbnQgdmFsdWUgLSBhZnRlciBwb3NzaWJsZSAgY2hhbmdlcyB0cmlnZ2VyZWQgYnkgdGFnLnNvcnRlZCByZWZyZXNoKCkgYWJvdmVcblx0ZW5kID0gcHJvcHMuZW5kO1xuXHRpZiAocHJvcFBhcmFtcy5zdGFydCAmJiBzdGFydCA9PT0gdW5kZWZpbmVkIHx8IHByb3BQYXJhbXMuZW5kICYmIGVuZCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0c3RhcnQgPSBlbmQgPSAwO1xuXHR9XG5cdGlmICghaXNOYU4oc3RhcnQpIHx8ICFpc05hTihlbmQpKSB7IC8vIHN0YXJ0IG9yIGVuZCBzcGVjaWZpZWQsIGJ1dCBub3QgdGhlIGF1dG8tY3JlYXRlIE51bWJlciBhcnJheSBzY2VuYXJpbyBvZiB7e2ZvciBzdGFydD14eHggZW5kPXl5eX19XG5cdFx0c3RhcnQgPSArc3RhcnQgfHwgMDtcblx0XHRlbmQgPSBlbmQgPT09IHVuZGVmaW5lZCB8fCBlbmQgPiB2YWx1ZS5sZW5ndGggPyB2YWx1ZS5sZW5ndGggOiArZW5kO1xuXHRcdHZhbHVlID0gdmFsdWUuc2xpY2Uoc3RhcnQsIGVuZCk7XG5cdH1cblx0aWYgKHN0ZXAgPiAxKSB7XG5cdFx0c3RhcnQgPSAwO1xuXHRcdGVuZCA9IHZhbHVlLmxlbmd0aDtcblx0XHRtYXBwZWQgPSBbXTtcblx0XHRmb3IgKDsgc3RhcnQ8ZW5kOyBzdGFydCs9c3RlcCkge1xuXHRcdFx0bWFwcGVkLnB1c2godmFsdWVbc3RhcnRdKTtcblx0XHR9XG5cdFx0dmFsdWUgPSBtYXBwZWQ7XG5cdH1cblx0aWYgKHByb3BQYXJhbXMucGFnZWQgJiYgdGFnLnBhZ2VkKSB7XG5cdFx0JG9ic2VydmFibGUodGFnLnBhZ2VkKS5yZWZyZXNoKHZhbHVlKTtcblx0fVxuXG5cdHJldHVybiB2YWx1ZTtcbn1cblxuLyoqIFJlbmRlciB0aGUgdGVtcGxhdGUgYXMgYSBzdHJpbmcsIHVzaW5nIHRoZSBzcGVjaWZpZWQgZGF0YSBhbmQgaGVscGVycy9jb250ZXh0XG4qICQoXCIjdG1wbFwiKS5yZW5kZXIoKVxuKlxuKiBAcGFyYW0ge2FueX0gICAgICAgIGRhdGFcbiogQHBhcmFtIHtoYXNofSAgICAgICBbaGVscGVyc09yQ29udGV4dF1cbiogQHBhcmFtIHtib29sZWFufSAgICBbbm9JdGVyYXRpb25dXG4qIEByZXR1cm5zIHtzdHJpbmd9ICAgcmVuZGVyZWQgdGVtcGxhdGVcbiovXG5mdW5jdGlvbiAkZm5SZW5kZXIoZGF0YSwgY29udGV4dCwgbm9JdGVyYXRpb24pIHtcblx0dmFyIHRtcGxFbGVtID0gdGhpcy5qcXVlcnkgJiYgKHRoaXNbMF0gfHwgZXJyb3IoJ1Vua25vd24gdGVtcGxhdGUnKSksIC8vIFRhcmdldGVkIGVsZW1lbnQgbm90IGZvdW5kIGZvciBqUXVlcnkgdGVtcGxhdGUgc2VsZWN0b3Igc3VjaCBhcyBcIiNteVRtcGxcIlxuXHRcdHRtcGwgPSB0bXBsRWxlbS5nZXRBdHRyaWJ1dGUodG1wbEF0dHIpO1xuXG5cdHJldHVybiByZW5kZXJDb250ZW50LmNhbGwodG1wbCAmJiAkLmRhdGEodG1wbEVsZW0pW2pzdlRtcGxdIHx8ICR0ZW1wbGF0ZXModG1wbEVsZW0pLFxuXHRcdGRhdGEsIGNvbnRleHQsIG5vSXRlcmF0aW9uKTtcbn1cblxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PSBSZWdpc3RlciBjb252ZXJ0ZXJzID09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmZ1bmN0aW9uIGdldENoYXJFbnRpdHkoY2gpIHtcblx0Ly8gR2V0IGNoYXJhY3RlciBlbnRpdHkgZm9yIEhUTUwsIEF0dHJpYnV0ZSBhbmQgb3B0aW9uYWwgZGF0YSBlbmNvZGluZ1xuXHRyZXR1cm4gY2hhckVudGl0aWVzW2NoXSB8fCAoY2hhckVudGl0aWVzW2NoXSA9IFwiJiNcIiArIGNoLmNoYXJDb2RlQXQoMCkgKyBcIjtcIik7XG59XG5cbmZ1bmN0aW9uIGdldENoYXJGcm9tRW50aXR5KG1hdGNoLCB0b2tlbikge1xuXHQvLyBHZXQgY2hhcmFjdGVyIGZyb20gSFRNTCBlbnRpdHksIGZvciBvcHRpb25hbCBkYXRhIHVuZW5jb2Rpbmdcblx0cmV0dXJuIGNoYXJzRnJvbUVudGl0aWVzW3Rva2VuXSB8fCBcIlwiO1xufVxuXG5mdW5jdGlvbiBodG1sRW5jb2RlKHRleHQpIHtcblx0Ly8gSFRNTCBlbmNvZGU6IFJlcGxhY2UgPCA+ICYgJyBcIiBgIGV0Yy4gYnkgY29ycmVzcG9uZGluZyBlbnRpdGllcy5cblx0cmV0dXJuIHRleHQgIT0gdW5kZWZpbmVkID8gcklzSHRtbC50ZXN0KHRleHQpICYmIChcIlwiICsgdGV4dCkucmVwbGFjZShySHRtbEVuY29kZSwgZ2V0Q2hhckVudGl0eSkgfHwgdGV4dCA6IFwiXCI7XG59XG5cbmZ1bmN0aW9uIGRhdGFFbmNvZGUodGV4dCkge1xuXHQvLyBFbmNvZGUganVzdCA8ID4gYW5kICYgLSBpbnRlbmRlZCBmb3IgJ3NhZmUgZGF0YScgYWxvbmcgd2l0aCB7ezp9fSByYXRoZXIgdGhhbiB7ez59fVxuICByZXR1cm4gXCJcIiArIHRleHQgPT09IHRleHQgPyB0ZXh0LnJlcGxhY2UockRhdGFFbmNvZGUsIGdldENoYXJFbnRpdHkpIDogdGV4dDtcbn1cblxuZnVuY3Rpb24gZGF0YVVuZW5jb2RlKHRleHQpIHtcbiAgLy8gVW5lbmNvZGUganVzdCA8ID4gYW5kICYgLSBpbnRlbmRlZCBmb3IgJ3NhZmUgZGF0YScgYWxvbmcgd2l0aCB7ezp9fSByYXRoZXIgdGhhbiB7ez59fVxuICByZXR1cm4gXCJcIiArIHRleHQgPT09IHRleHQgPyB0ZXh0LnJlcGxhY2UockRhdGFVbmVuY29kZSwgZ2V0Q2hhckZyb21FbnRpdHkpIDogdGV4dDtcbn1cblxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PSBJbml0aWFsaXplID09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiRzdWIgPSAkdmlld3Muc3ViO1xuJHZpZXdzU2V0dGluZ3MgPSAkdmlld3Muc2V0dGluZ3M7XG5cbmlmICghKGpzciB8fCAkICYmICQucmVuZGVyKSkge1xuXHQvLyBKc1JlbmRlciBub3QgYWxyZWFkeSBsb2FkZWQsIG9yIGxvYWRlZCB3aXRob3V0IGpRdWVyeSwgYW5kIHdlIGFyZSBub3cgbW92aW5nIGZyb20ganNyZW5kZXIgbmFtZXNwYWNlIHRvIGpRdWVyeSBuYW1lcGFjZVxuXHRmb3IgKGpzdlN0b3JlTmFtZSBpbiBqc3ZTdG9yZXMpIHtcblx0XHRyZWdpc3RlclN0b3JlKGpzdlN0b3JlTmFtZSwganN2U3RvcmVzW2pzdlN0b3JlTmFtZV0pO1xuXHR9XG5cblx0JGNvbnZlcnRlcnMgPSAkdmlld3MuY29udmVydGVycztcblx0JGhlbHBlcnMgPSAkdmlld3MuaGVscGVycztcblx0JHRhZ3MgPSAkdmlld3MudGFncztcblxuXHQkc3ViLl90Zy5wcm90b3R5cGUgPSB7XG5cdFx0YmFzZUFwcGx5OiBiYXNlQXBwbHksXG5cdFx0Y3Z0QXJnczogY29udmVydEFyZ3MsXG5cdFx0Ym5kQXJnczogY29udmVydEJvdW5kQXJncyxcblx0XHRjdHhQcm06IGNvbnRleHRQYXJhbWV0ZXJcblx0fTtcblxuXHR0b3BWaWV3ID0gJHN1Yi50b3BWaWV3ID0gbmV3IFZpZXcoKTtcblxuXHQvL0JST1dTRVItU1BFQ0lGSUMgQ09ERVxuXHRpZiAoJCkge1xuXG5cdFx0Ly8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cdFx0Ly8galF1ZXJ5ICg9ICQpIGlzIGxvYWRlZFxuXG5cdFx0JC5mbi5yZW5kZXIgPSAkZm5SZW5kZXI7XG5cdFx0JGV4cGFuZG8gPSAkLmV4cGFuZG87XG5cdFx0aWYgKCQub2JzZXJ2YWJsZSkge1xuXHRcdFx0aWYgKHZlcnNpb25OdW1iZXIgIT09ICh2ZXJzaW9uTnVtYmVyID0gJC52aWV3cy5qc3ZpZXdzKSkge1xuXHRcdFx0XHQvLyBEaWZmZXJlbnQgdmVyc2lvbiBvZiBqc1JlbmRlciB3YXMgbG9hZGVkXG5cdFx0XHRcdHRocm93IFwiSnNPYnNlcnZhYmxlIHJlcXVpcmVzIEpzUmVuZGVyIFwiICsgdmVyc2lvbk51bWJlcjtcblx0XHRcdH1cblx0XHRcdCRleHRlbmQoJHN1YiwgJC52aWV3cy5zdWIpOyAvLyBqcXVlcnkub2JzZXJ2YWJsZS5qcyB3YXMgbG9hZGVkIGJlZm9yZSBqc3JlbmRlci5qc1xuXHRcdFx0JHZpZXdzLm1hcCA9ICQudmlld3MubWFwO1xuXHRcdH1cblxuXHR9IGVsc2Uge1xuXHRcdC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXHRcdC8vIGpRdWVyeSBpcyBub3QgbG9hZGVkLlxuXG5cdFx0JCA9IHt9O1xuXG5cdFx0aWYgKHNldEdsb2JhbHMpIHtcblx0XHRcdGdsb2JhbC5qc3JlbmRlciA9ICQ7IC8vIFdlIGFyZSBsb2FkaW5nIGpzcmVuZGVyLmpzIGZyb20gYSBzY3JpcHQgZWxlbWVudCwgbm90IEFNRCBvciBDb21tb25KUywgc28gc2V0IGdsb2JhbFxuXHRcdH1cblxuXHRcdC8vIEVycm9yIHdhcm5pbmcgaWYganNyZW5kZXIuanMgaXMgdXNlZCBhcyB0ZW1wbGF0ZSBlbmdpbmUgb24gTm9kZS5qcyAoZS5nLiBFeHByZXNzIG9yIEhhcGkuLi4pXG5cdFx0Ly8gVXNlIGpzcmVuZGVyLW5vZGUuanMgaW5zdGVhZC4uLlxuXHRcdCQucmVuZGVyRmlsZSA9ICQuX19leHByZXNzID0gJC5jb21waWxlID0gZnVuY3Rpb24oKSB7IHRocm93IFwiTm9kZS5qczogdXNlIG5wbSBqc3JlbmRlciwgb3IganNyZW5kZXItbm9kZS5qc1wiOyB9O1xuXG5cdFx0Ly9FTkQgQlJPV1NFUi1TUEVDSUZJQyBDT0RFXG5cdFx0JC5pc0Z1bmN0aW9uID0gZnVuY3Rpb24ob2IpIHtcblx0XHRcdHJldHVybiB0eXBlb2Ygb2IgPT09IFwiZnVuY3Rpb25cIjtcblx0XHR9O1xuXG5cdFx0JC5pc0FycmF5ID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbihvYmopIHtcblx0XHRcdHJldHVybiAoe30udG9TdHJpbmcpLmNhbGwob2JqKSA9PT0gXCJbb2JqZWN0IEFycmF5XVwiO1xuXHRcdH07XG5cblx0XHQkc3ViLl9qcSA9IGZ1bmN0aW9uKGpxKSB7IC8vIHByaXZhdGUgbWV0aG9kIHRvIG1vdmUgZnJvbSBKc1JlbmRlciBBUElzIGZyb20ganNyZW5kZXIgbmFtZXNwYWNlIHRvIGpRdWVyeSBuYW1lc3BhY2Vcblx0XHRcdGlmIChqcSAhPT0gJCkge1xuXHRcdFx0XHQkZXh0ZW5kKGpxLCAkKTsgLy8gbWFwIG92ZXIgZnJvbSBqc3JlbmRlciBuYW1lc3BhY2UgdG8galF1ZXJ5IG5hbWVzcGFjZVxuXHRcdFx0XHQkID0ganE7XG5cdFx0XHRcdCQuZm4ucmVuZGVyID0gJGZuUmVuZGVyO1xuXHRcdFx0XHRkZWxldGUgJC5qc3JlbmRlcjtcblx0XHRcdFx0JGV4cGFuZG8gPSAkLmV4cGFuZG87XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdCQuanNyZW5kZXIgPSB2ZXJzaW9uTnVtYmVyO1xuXHR9XG5cdCRzdWJTZXR0aW5ncyA9ICRzdWIuc2V0dGluZ3M7XG5cdCRzdWJTZXR0aW5ncy5hbGxvd0NvZGUgPSBmYWxzZTtcblx0JGlzRnVuY3Rpb24gPSAkLmlzRnVuY3Rpb247XG5cdCQucmVuZGVyID0gJHJlbmRlcjtcblx0JC52aWV3cyA9ICR2aWV3cztcblx0JC50ZW1wbGF0ZXMgPSAkdGVtcGxhdGVzID0gJHZpZXdzLnRlbXBsYXRlcztcblxuXHRmb3IgKHNldHRpbmcgaW4gJHN1YlNldHRpbmdzKSB7XG5cdFx0YWRkU2V0dGluZyhzZXR0aW5nKTtcblx0fVxuXG5cdC8qKlxuXHQqICQudmlld3Muc2V0dGluZ3MuZGVidWdNb2RlKHRydWUpXG5cdCogQHBhcmFtIHtib29sZWFufSAgZGVidWdNb2RlXG5cdCogQHJldHVybnMge1NldHRpbmdzfVxuXHQqXG5cdCogZGVidWdNb2RlID0gJC52aWV3cy5zZXR0aW5ncy5kZWJ1Z01vZGUoKVxuXHQqIEByZXR1cm5zIHtib29sZWFufVxuXHQqL1xuXHQoJHZpZXdzU2V0dGluZ3MuZGVidWdNb2RlID0gZnVuY3Rpb24oZGVidWdNb2RlKSB7XG5cdFx0cmV0dXJuIGRlYnVnTW9kZSA9PT0gdW5kZWZpbmVkXG5cdFx0XHQ/ICRzdWJTZXR0aW5ncy5kZWJ1Z01vZGVcblx0XHRcdDogKFxuXHRcdFx0XHQkc3ViU2V0dGluZ3MuZGVidWdNb2RlID0gZGVidWdNb2RlLFxuXHRcdFx0XHQkc3ViU2V0dGluZ3Mub25FcnJvciA9IGRlYnVnTW9kZSArIFwiXCIgPT09IGRlYnVnTW9kZVxuXHRcdFx0XHRcdD8gZnVuY3Rpb24oKSB7IHJldHVybiBkZWJ1Z01vZGU7IH1cblx0XHRcdFx0XHQ6ICRpc0Z1bmN0aW9uKGRlYnVnTW9kZSlcblx0XHRcdFx0XHRcdD8gZGVidWdNb2RlXG5cdFx0XHRcdFx0XHQ6IHVuZGVmaW5lZCxcblx0XHRcdFx0JHZpZXdzU2V0dGluZ3MpO1xuXHR9KShmYWxzZSk7IC8vIGpzaGludCBpZ25vcmU6bGluZVxuXG5cdCRzdWJTZXR0aW5nc0FkdmFuY2VkID0gJHN1YlNldHRpbmdzLmFkdmFuY2VkID0ge1xuXHRcdHVzZVZpZXdzOiBmYWxzZSxcblx0XHRfanN2OiBmYWxzZSAvLyBGb3IgZ2xvYmFsIGFjY2VzcyB0byBKc1ZpZXdzIHN0b3JlXG5cdH07XG5cblx0Ly89PT09PT09PT09PT09PT09PT09PT09PT09PSBSZWdpc3RlciB0YWdzID09PT09PT09PT09PT09PT09PT09PT09PT09XG5cblx0JHRhZ3Moe1xuXHRcdFwiaWZcIjoge1xuXHRcdFx0cmVuZGVyOiBmdW5jdGlvbih2YWwpIHtcblx0XHRcdFx0Ly8gVGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQgb25jZSBmb3Ige3tpZn19IGFuZCBvbmNlIGZvciBlYWNoIHt7ZWxzZX19LlxuXHRcdFx0XHQvLyBXZSB3aWxsIHVzZSB0aGUgdGFnLnJlbmRlcmluZyBvYmplY3QgZm9yIGNhcnJ5aW5nIHJlbmRlcmluZyBzdGF0ZSBhY3Jvc3MgdGhlIGNhbGxzLlxuXHRcdFx0XHQvLyBJZiBub3QgZG9uZSAoYSBwcmV2aW91cyBibG9jayBoYXMgbm90IGJlZW4gcmVuZGVyZWQpLCBsb29rIGF0IGV4cHJlc3Npb24gZm9yIHRoaXMgYmxvY2sgYW5kIHJlbmRlciB0aGUgYmxvY2sgaWYgZXhwcmVzc2lvbiBpcyB0cnV0aHlcblx0XHRcdFx0Ly8gT3RoZXJ3aXNlIHJldHVybiBcIlwiXG5cdFx0XHRcdHZhciBzZWxmID0gdGhpcyxcblx0XHRcdFx0XHR0YWdDdHggPSBzZWxmLnRhZ0N0eCxcblx0XHRcdFx0XHRyZXQgPSAoc2VsZi5yZW5kZXJpbmcuZG9uZSB8fCAhdmFsICYmICh0YWdDdHguYXJncy5sZW5ndGggfHwgIXRhZ0N0eC5pbmRleCkpXG5cdFx0XHRcdFx0XHQ/IFwiXCJcblx0XHRcdFx0XHRcdDogKHNlbGYucmVuZGVyaW5nLmRvbmUgPSB0cnVlLFxuXHRcdFx0XHRcdFx0XHRzZWxmLnNlbGVjdGVkID0gdGFnQ3R4LmluZGV4LFxuXHRcdFx0XHRcdFx0XHR1bmRlZmluZWQpOyAvLyBUZXN0IGlzIHNhdGlzZmllZCwgc28gcmVuZGVyIGNvbnRlbnQgb24gY3VycmVudCBjb250ZXh0XG5cdFx0XHRcdHJldHVybiByZXQ7XG5cdFx0XHR9LFxuXHRcdFx0Y29udGVudEN0eDogdHJ1ZSwgLy8gSW5oZXJpdCBwYXJlbnQgdmlldyBkYXRhIGNvbnRleHRcblx0XHRcdGZsb3c6IHRydWVcblx0XHR9LFxuXHRcdFwiZm9yXCI6IHtcblx0XHRcdHNvcnREYXRhTWFwOiBkYXRhTWFwKGdldFRhcmdldFNvcnRlZCksXG5cdFx0XHRpbml0OiBmdW5jdGlvbih2YWwsIGNsb25lZCkge1xuXHRcdFx0XHR0aGlzLnNldERhdGFNYXAodGhpcy50YWdDdHhzKTtcblx0XHRcdH0sXG5cdFx0XHRyZW5kZXI6IGZ1bmN0aW9uKHZhbCkge1xuXHRcdFx0XHQvLyBUaGlzIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbmNlIGZvciB7e2Zvcn19IGFuZCBvbmNlIGZvciBlYWNoIHt7ZWxzZX19LlxuXHRcdFx0XHQvLyBXZSB3aWxsIHVzZSB0aGUgdGFnLnJlbmRlcmluZyBvYmplY3QgZm9yIGNhcnJ5aW5nIHJlbmRlcmluZyBzdGF0ZSBhY3Jvc3MgdGhlIGNhbGxzLlxuXHRcdFx0XHR2YXIgdmFsdWUsIGZpbHRlciwgc3J0RmllbGQsIGlzQXJyYXksIGksIHNvcnRlZCwgZW5kLCBzdGVwLFxuXHRcdFx0XHRcdHNlbGYgPSB0aGlzLFxuXHRcdFx0XHRcdHRhZ0N0eCA9IHNlbGYudGFnQ3R4LFxuXHRcdFx0XHRcdHJhbmdlID0gdGFnQ3R4LmFyZ0RlZmF1bHQgPT09IGZhbHNlLFxuXHRcdFx0XHRcdHByb3BzID0gdGFnQ3R4LnByb3BzLFxuXHRcdFx0XHRcdGl0ZXJhdGUgPSAgcmFuZ2UgfHwgdGFnQ3R4LmFyZ3MubGVuZ3RoLCAvLyBOb3QgZmluYWwgZWxzZSBhbmQgbm90IGF1dG8tY3JlYXRlIHJhbmdlXG5cdFx0XHRcdFx0cmVzdWx0ID0gXCJcIixcblx0XHRcdFx0XHRkb25lID0gMDtcblxuXHRcdFx0XHRpZiAoIXNlbGYucmVuZGVyaW5nLmRvbmUpIHtcblx0XHRcdFx0XHR2YWx1ZSA9IGl0ZXJhdGUgPyB2YWwgOiB0YWdDdHgudmlldy5kYXRhOyAvLyBGb3IgdGhlIGZpbmFsIGVsc2UsIGRlZmF1bHRzIHRvIGN1cnJlbnQgZGF0YSB3aXRob3V0IGl0ZXJhdGlvbi5cblxuXHRcdFx0XHRcdGlmIChyYW5nZSkge1xuXHRcdFx0XHRcdFx0cmFuZ2UgPSBwcm9wcy5yZXZlcnNlID8gXCJ1bnNoaWZ0XCIgOiBcInB1c2hcIjtcblx0XHRcdFx0XHRcdGVuZCA9ICtwcm9wcy5lbmQ7XG5cdFx0XHRcdFx0XHRzdGVwID0gK3Byb3BzLnN0ZXAgfHwgMTtcblx0XHRcdFx0XHRcdHZhbHVlID0gW107IC8vIGF1dG8tY3JlYXRlIGludGVnZXIgYXJyYXkgc2NlbmFyaW8gb2Yge3tmb3Igc3RhcnQ9eHh4IGVuZD15eXl9fVxuXHRcdFx0XHRcdFx0Zm9yIChpID0gK3Byb3BzLnN0YXJ0IHx8IDA7IChlbmQgLSBpKSAqIHN0ZXAgPiAwOyBpICs9IHN0ZXApIHtcblx0XHRcdFx0XHRcdFx0dmFsdWVbcmFuZ2VdKGkpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdFx0aXNBcnJheSA9ICRpc0FycmF5KHZhbHVlKTtcblx0XHRcdFx0XHRcdHJlc3VsdCArPSB0YWdDdHgucmVuZGVyKHZhbHVlLCAhaXRlcmF0ZSB8fCBwcm9wcy5ub0l0ZXJhdGlvbik7XG5cdFx0XHRcdFx0XHQvLyBJdGVyYXRlcyBpZiBkYXRhIGlzIGFuIGFycmF5LCBleGNlcHQgb24gZmluYWwgZWxzZSAtIG9yIGlmIG5vSXRlcmF0aW9uIHByb3BlcnR5XG5cdFx0XHRcdFx0XHQvLyBzZXQgdG8gdHJ1ZS4gKFVzZSB7e2luY2x1ZGV9fSB0byBjb21wb3NlIHRlbXBsYXRlcyB3aXRob3V0IGFycmF5IGl0ZXJhdGlvbilcblx0XHRcdFx0XHRcdGRvbmUgKz0gaXNBcnJheSA/IHZhbHVlLmxlbmd0aCA6IDE7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChzZWxmLnJlbmRlcmluZy5kb25lID0gZG9uZSkge1xuXHRcdFx0XHRcdFx0c2VsZi5zZWxlY3RlZCA9IHRhZ0N0eC5pbmRleDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Ly8gSWYgbm90aGluZyB3YXMgcmVuZGVyZWQgd2Ugd2lsbCBsb29rIGF0IHRoZSBuZXh0IHt7ZWxzZX19LiBPdGhlcndpc2UsIHdlIGFyZSBkb25lLlxuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0XHR9LFxuXHRcdFx0c2V0RGF0YU1hcDogZnVuY3Rpb24odGFnQ3R4cykge1xuXHRcdFx0XHR2YXIgdGFnQ3R4LCBwcm9wcywgcGFyYW1zUHJvcHMsXG5cdFx0XHRcdFx0c2VsZiA9IHRoaXMsXG5cdFx0XHRcdFx0bCA9IHRhZ0N0eHMubGVuZ3RoO1xuXHRcdFx0XHR3aGlsZSAobC0tKSB7XG5cdFx0XHRcdFx0dGFnQ3R4ID0gdGFnQ3R4c1tsXTtcblx0XHRcdFx0XHRwcm9wcyA9IHRhZ0N0eC5wcm9wcztcblx0XHRcdFx0XHRwYXJhbXNQcm9wcyA9IHRhZ0N0eC5wYXJhbXMucHJvcHM7XG5cdFx0XHRcdFx0dGFnQ3R4LmFyZ0RlZmF1bHQgPSBwcm9wcy5lbmQgPT09IHVuZGVmaW5lZCB8fCB0YWdDdHguYXJncy5sZW5ndGggPiAwOyAvLyBEZWZhdWx0IHRvICNkYXRhIGV4Y2VwdCBmb3IgYXV0by1jcmVhdGUgcmFuZ2Ugc2NlbmFyaW8ge3tmb3Igc3RhcnQ9eHh4IGVuZD15eXkgc3RlcD16enp9fVxuXHRcdFx0XHRcdHByb3BzLmRhdGFNYXAgPSAodGFnQ3R4LmFyZ0RlZmF1bHQgIT09IGZhbHNlICYmICRpc0FycmF5KHRhZ0N0eC5hcmdzWzBdKSAmJlxuXHRcdFx0XHRcdFx0KHBhcmFtc1Byb3BzLnNvcnQgfHwgcGFyYW1zUHJvcHMuc3RhcnQgfHwgcGFyYW1zUHJvcHMuZW5kIHx8IHBhcmFtc1Byb3BzLnN0ZXAgfHwgcGFyYW1zUHJvcHMuZmlsdGVyIHx8IHBhcmFtc1Byb3BzLnJldmVyc2Vcblx0XHRcdFx0XHRcdHx8IHByb3BzLnNvcnQgfHwgcHJvcHMuc3RhcnQgfHwgcHJvcHMuZW5kIHx8IHByb3BzLnN0ZXAgfHwgcHJvcHMuZmlsdGVyIHx8IHByb3BzLnJldmVyc2UpKVxuXHRcdFx0XHRcdFx0JiYgc2VsZi5zb3J0RGF0YU1hcDtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdGZsb3c6IHRydWVcblx0XHR9LFxuXHRcdHByb3BzOiB7XG5cdFx0XHRiYXNlVGFnOiBcImZvclwiLFxuXHRcdFx0ZGF0YU1hcDogZGF0YU1hcChnZXRUYXJnZXRQcm9wcyksXG5cdFx0XHRpbml0OiBub29wLCAvLyBEb24ndCBleGVjdXRlIHRoZSBiYXNlIGluaXQoKSBvZiB0aGUgXCJmb3JcIiB0YWdcblx0XHRcdGZsb3c6IHRydWVcblx0XHR9LFxuXHRcdGluY2x1ZGU6IHtcblx0XHRcdGZsb3c6IHRydWVcblx0XHR9LFxuXHRcdFwiKlwiOiB7XG5cdFx0XHQvLyB7eyogY29kZS4uLiB9fSAtIElnbm9yZWQgaWYgdGVtcGxhdGUuYWxsb3dDb2RlIGFuZCAkLnZpZXdzLnNldHRpbmdzLmFsbG93Q29kZSBhcmUgZmFsc2UuIE90aGVyd2lzZSBpbmNsdWRlIGNvZGUgaW4gY29tcGlsZWQgdGVtcGxhdGVcblx0XHRcdHJlbmRlcjogcmV0VmFsLFxuXHRcdFx0ZmxvdzogdHJ1ZVxuXHRcdH0sXG5cdFx0XCI6KlwiOiB7XG5cdFx0XHQvLyB7ezoqIHJldHVybmVkRXhwcmVzc2lvbiB9fSAtIElnbm9yZWQgaWYgdGVtcGxhdGUuYWxsb3dDb2RlIGFuZCAkLnZpZXdzLnNldHRpbmdzLmFsbG93Q29kZSBhcmUgZmFsc2UuIE90aGVyd2lzZSBpbmNsdWRlIGNvZGUgaW4gY29tcGlsZWQgdGVtcGxhdGVcblx0XHRcdHJlbmRlcjogcmV0VmFsLFxuXHRcdFx0ZmxvdzogdHJ1ZVxuXHRcdH0sXG5cdFx0ZGJnOiAkaGVscGVycy5kYmcgPSAkY29udmVydGVycy5kYmcgPSBkYmdCcmVhayAvLyBSZWdpc3RlciB7e2RiZy99fSwge3tkYmc6Li4ufX0gYW5kIH5kYmcoKSB0byB0aHJvdyBhbmQgY2F0Y2gsIGFzIGJyZWFrcG9pbnRzIGZvciBkZWJ1Z2dpbmcuXG5cdH0pO1xuXG5cdCRjb252ZXJ0ZXJzKHtcblx0XHRodG1sOiBodG1sRW5jb2RlLFxuXHRcdGF0dHI6IGh0bWxFbmNvZGUsIC8vIEluY2x1ZGVzID4gZW5jb2Rpbmcgc2luY2UgckNvbnZlcnRNYXJrZXJzIGluIEpzVmlld3MgZG9lcyBub3Qgc2tpcCA+IGNoYXJhY3RlcnMgaW4gYXR0cmlidXRlIHN0cmluZ3Ncblx0XHRlbmNvZGU6IGRhdGFFbmNvZGUsXG5cdFx0dW5lbmNvZGU6IGRhdGFVbmVuY29kZSwgLy8gSW5jbHVkZXMgPiBlbmNvZGluZyBzaW5jZSByQ29udmVydE1hcmtlcnMgaW4gSnNWaWV3cyBkb2VzIG5vdCBza2lwID4gY2hhcmFjdGVycyBpbiBhdHRyaWJ1dGUgc3RyaW5nc1xuXHRcdHVybDogZnVuY3Rpb24odGV4dCkge1xuXHRcdFx0Ly8gVVJMIGVuY29kaW5nIGhlbHBlci5cblx0XHRcdHJldHVybiB0ZXh0ICE9IHVuZGVmaW5lZCA/IGVuY29kZVVSSShcIlwiICsgdGV4dCkgOiB0ZXh0ID09PSBudWxsID8gdGV4dCA6IFwiXCI7IC8vIG51bGwgcmV0dXJucyBudWxsLCBlLmcuIHRvIHJlbW92ZSBhdHRyaWJ1dGUuIHVuZGVmaW5lZCByZXR1cm5zIFwiXCJcblx0XHR9XG5cdH0pO1xufVxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PSBEZWZpbmUgZGVmYXVsdCBkZWxpbWl0ZXJzID09PT09PT09PT09PT09PT09PT09PT09PT09XG4kc3ViU2V0dGluZ3MgPSAkc3ViLnNldHRpbmdzO1xuJGlzQXJyYXkgPSAoJHx8anNyKS5pc0FycmF5O1xuJHZpZXdzU2V0dGluZ3MuZGVsaW1pdGVycyhcInt7XCIsIFwifX1cIiwgXCJeXCIpO1xuXG5pZiAoanNyVG9KcSkgeyAvLyBNb3ZpbmcgZnJvbSBqc3JlbmRlciBuYW1lc3BhY2UgdG8galF1ZXJ5IG5hbWVwYWNlIC0gY29weSBvdmVyIHRoZSBzdG9yZWQgaXRlbXMgKHRlbXBsYXRlcywgY29udmVydGVycywgaGVscGVycy4uLilcblx0anNyLnZpZXdzLnN1Yi5fanEoJCk7XG59XG5yZXR1cm4gJCB8fCBqc3I7XG59LCB3aW5kb3cpKTtcbiIsIihmdW5jdGlvbigpIHtcclxuICAndXNlIHN0cmljdCc7XHJcblxyXG4gIGNvbnN0IGpzcmVuZGVyID0gcmVxdWlyZSgnanNyZW5kZXInKVxyXG5cclxuICBjb25zdCBzY3JvbGwgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFwcC1tZXNzYWdlc19fY29udGFpbmVyIFtkYXRhLXBlcmZlY3Qtc2Nyb2xsYmFyXScpXHJcbiAgICBlbGVtZW50LnNjcm9sbFRvcCA9IGVsZW1lbnQuc2Nyb2xsSGVpZ2h0IC0gZWxlbWVudC5vZmZzZXRIZWlnaHQgLSAxNlxyXG4gIH1cclxuXHJcbiAgO1snRE9NQ29udGVudExvYWRlZCcsICdsb2FkJ10uZm9yRWFjaChmdW5jdGlvbiAoZSkge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoZSwgc2Nyb2xsKVxyXG4gIH0pXHJcblxyXG4gIGNvbnN0IGFkZE1lc3NhZ2UgPSAobWVzc2FnZSkgPT4ge1xyXG4gICAgY29uc3QgbWVzc2FnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVzc2FnZXMnKVxyXG4gICAgY29uc3QgdGVtcGxhdGUgPSBqc3JlbmRlci50ZW1wbGF0ZXMoJyN0ZW1wbGF0ZS1tZXNzYWdlJylcclxuICAgIGNvbnN0IG1lc3NhZ2VOb2RlVGV4dCA9IHRlbXBsYXRlLnJlbmRlcih7XHJcbiAgICAgIG5hbWU6ICdMYXphIEJvZ2RhbicsXHJcbiAgICAgIGF2YXRhcjogJ2Fzc2V0cy9pbWFnZXMvcGVvcGxlLzExMC9ndXktNi5qcGcnLFxyXG4gICAgICBkYXRlOiAnanVzdCBub3cnLFxyXG4gICAgICBtZXNzYWdlXHJcbiAgICB9KVxyXG5cclxuICAgIGxldCBtZXNzYWdlTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCkuY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50KG1lc3NhZ2VOb2RlVGV4dClcclxuICAgIG1lc3NhZ2VzLmFwcGVuZENoaWxkKG1lc3NhZ2VOb2RlKVxyXG4gIH1cclxuXHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21lc3NhZ2UtcmVwbHknKS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbihlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIGNvbnN0IGZpZWxkID0gdGhpcy5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpXHJcblxyXG4gICAgYWRkTWVzc2FnZShmaWVsZC52YWx1ZSlcclxuICAgIGZpZWxkLnZhbHVlID0gJydcclxuXHJcbiAgICBzY3JvbGwoKVxyXG4gIH0pXHJcblxyXG59KSgpIiwiaW1wb3J0ICd1aS1odW1hL2pzL21lc3NhZ2VzJyJdLCJzb3VyY2VSb290IjoiIn0=