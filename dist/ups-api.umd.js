/**
 * UPS API (for Javascript) 1.0.3.
 *
 * Copyright (c) 2014-2024 Platforme International.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.upsApi = {}));
})(this, (function (exports) { 'use strict';

  function _callSuper(t, o, e) {
    return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
  }
  function _construct(t, e, r) {
    if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments);
    var o = [null];
    o.push.apply(o, e);
    var p = new (t.bind.apply(t, o))();
    return r && _setPrototypeOf(p, r.prototype), p;
  }
  function _isNativeReflectConstruct() {
    try {
      var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    } catch (t) {}
    return (_isNativeReflectConstruct = function () {
      return !!t;
    })();
  }
  function _iterableToArrayLimit(r, l) {
    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (null != t) {
      var e,
        n,
        i,
        u,
        a = [],
        f = !0,
        o = !1;
      try {
        if (i = (t = t.call(r)).next, 0 === l) {
          if (Object(t) !== t) return;
          f = !1;
        } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
      } catch (r) {
        o = !0, n = r;
      } finally {
        try {
          if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
        } finally {
          if (o) throw n;
        }
      }
      return a;
    }
  }
  function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r && (o = o.filter(function (r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread2(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = null != arguments[r] ? arguments[r] : {};
      r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
        _defineProperty(e, r, t[r]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
      });
    }
    return e;
  }
  function _regeneratorRuntime() {
    _regeneratorRuntime = function () {
      return e;
    };
    var t,
      e = {},
      r = Object.prototype,
      n = r.hasOwnProperty,
      o = Object.defineProperty || function (t, e, r) {
        t[e] = r.value;
      },
      i = "function" == typeof Symbol ? Symbol : {},
      a = i.iterator || "@@iterator",
      c = i.asyncIterator || "@@asyncIterator",
      u = i.toStringTag || "@@toStringTag";
    function define(t, e, r) {
      return Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }), t[e];
    }
    try {
      define({}, "");
    } catch (t) {
      define = function (t, e, r) {
        return t[e] = r;
      };
    }
    function wrap(t, e, r, n) {
      var i = e && e.prototype instanceof Generator ? e : Generator,
        a = Object.create(i.prototype),
        c = new Context(n || []);
      return o(a, "_invoke", {
        value: makeInvokeMethod(t, r, c)
      }), a;
    }
    function tryCatch(t, e, r) {
      try {
        return {
          type: "normal",
          arg: t.call(e, r)
        };
      } catch (t) {
        return {
          type: "throw",
          arg: t
        };
      }
    }
    e.wrap = wrap;
    var h = "suspendedStart",
      l = "suspendedYield",
      f = "executing",
      s = "completed",
      y = {};
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    var p = {};
    define(p, a, function () {
      return this;
    });
    var d = Object.getPrototypeOf,
      v = d && d(d(values([])));
    v && v !== r && n.call(v, a) && (p = v);
    var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
    function defineIteratorMethods(t) {
      ["next", "throw", "return"].forEach(function (e) {
        define(t, e, function (t) {
          return this._invoke(e, t);
        });
      });
    }
    function AsyncIterator(t, e) {
      function invoke(r, o, i, a) {
        var c = tryCatch(t[r], t, o);
        if ("throw" !== c.type) {
          var u = c.arg,
            h = u.value;
          return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
            invoke("next", t, i, a);
          }, function (t) {
            invoke("throw", t, i, a);
          }) : e.resolve(h).then(function (t) {
            u.value = t, i(u);
          }, function (t) {
            return invoke("throw", t, i, a);
          });
        }
        a(c.arg);
      }
      var r;
      o(this, "_invoke", {
        value: function (t, n) {
          function callInvokeWithMethodAndArg() {
            return new e(function (e, r) {
              invoke(t, n, e, r);
            });
          }
          return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        }
      });
    }
    function makeInvokeMethod(e, r, n) {
      var o = h;
      return function (i, a) {
        if (o === f) throw Error("Generator is already running");
        if (o === s) {
          if ("throw" === i) throw a;
          return {
            value: t,
            done: !0
          };
        }
        for (n.method = i, n.arg = a;;) {
          var c = n.delegate;
          if (c) {
            var u = maybeInvokeDelegate(c, n);
            if (u) {
              if (u === y) continue;
              return u;
            }
          }
          if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
            if (o === h) throw o = s, n.arg;
            n.dispatchException(n.arg);
          } else "return" === n.method && n.abrupt("return", n.arg);
          o = f;
          var p = tryCatch(e, r, n);
          if ("normal" === p.type) {
            if (o = n.done ? s : l, p.arg === y) continue;
            return {
              value: p.arg,
              done: n.done
            };
          }
          "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
        }
      };
    }
    function maybeInvokeDelegate(e, r) {
      var n = r.method,
        o = e.iterator[n];
      if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
      var i = tryCatch(o, e.iterator, r.arg);
      if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
      var a = i.arg;
      return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
    }
    function pushTryEntry(t) {
      var e = {
        tryLoc: t[0]
      };
      1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
    }
    function resetTryEntry(t) {
      var e = t.completion || {};
      e.type = "normal", delete e.arg, t.completion = e;
    }
    function Context(t) {
      this.tryEntries = [{
        tryLoc: "root"
      }], t.forEach(pushTryEntry, this), this.reset(!0);
    }
    function values(e) {
      if (e || "" === e) {
        var r = e[a];
        if (r) return r.call(e);
        if ("function" == typeof e.next) return e;
        if (!isNaN(e.length)) {
          var o = -1,
            i = function next() {
              for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
              return next.value = t, next.done = !0, next;
            };
          return i.next = i;
        }
      }
      throw new TypeError(typeof e + " is not iterable");
    }
    return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
      value: GeneratorFunctionPrototype,
      configurable: !0
    }), o(GeneratorFunctionPrototype, "constructor", {
      value: GeneratorFunction,
      configurable: !0
    }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
      var e = "function" == typeof t && t.constructor;
      return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
    }, e.mark = function (t) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
    }, e.awrap = function (t) {
      return {
        __await: t
      };
    }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
      return this;
    }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
      void 0 === i && (i = Promise);
      var a = new AsyncIterator(wrap(t, r, n, o), i);
      return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
        return t.done ? t.value : a.next();
      });
    }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
      return this;
    }), define(g, "toString", function () {
      return "[object Generator]";
    }), e.keys = function (t) {
      var e = Object(t),
        r = [];
      for (var n in e) r.push(n);
      return r.reverse(), function next() {
        for (; r.length;) {
          var t = r.pop();
          if (t in e) return next.value = t, next.done = !1, next;
        }
        return next.done = !0, next;
      };
    }, e.values = values, Context.prototype = {
      constructor: Context,
      reset: function (e) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
      },
      stop: function () {
        this.done = !0;
        var t = this.tryEntries[0].completion;
        if ("throw" === t.type) throw t.arg;
        return this.rval;
      },
      dispatchException: function (e) {
        if (this.done) throw e;
        var r = this;
        function handle(n, o) {
          return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
        }
        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
          var i = this.tryEntries[o],
            a = i.completion;
          if ("root" === i.tryLoc) return handle("end");
          if (i.tryLoc <= this.prev) {
            var c = n.call(i, "catchLoc"),
              u = n.call(i, "finallyLoc");
            if (c && u) {
              if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
              if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
            } else if (c) {
              if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            } else {
              if (!u) throw Error("try statement without catch or finally");
              if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
            }
          }
        }
      },
      abrupt: function (t, e) {
        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
          var o = this.tryEntries[r];
          if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
            var i = o;
            break;
          }
        }
        i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
        var a = i ? i.completion : {};
        return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
      },
      complete: function (t, e) {
        if ("throw" === t.type) throw t.arg;
        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
      },
      finish: function (t) {
        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
          var r = this.tryEntries[e];
          if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
        }
      },
      catch: function (t) {
        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
          var r = this.tryEntries[e];
          if (r.tryLoc === t) {
            var n = r.completion;
            if ("throw" === n.type) {
              var o = n.arg;
              resetTryEntry(r);
            }
            return o;
          }
        }
        throw Error("illegal catch attempt");
      },
      delegateYield: function (e, r, n) {
        return this.delegate = {
          iterator: values(e),
          resultName: r,
          nextLoc: n
        }, "next" === this.method && (this.arg = t), y;
      }
    }, e;
  }
  function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r || "default");
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
  }
  function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : i + "";
  }
  function _typeof(o) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
      return typeof o;
    } : function (o) {
      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
  }
  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }
    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }
  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
        args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);
        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }
        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }
        _next(undefined);
      });
    };
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }
  function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(subClass, "prototype", {
      writable: false
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }
  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
    return _setPrototypeOf(o, p);
  }
  function _isNativeFunction(fn) {
    try {
      return Function.toString.call(fn).indexOf("[native code]") !== -1;
    } catch (e) {
      return typeof fn === "function";
    }
  }
  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !_isNativeFunction(Class)) return Class;
      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }
      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);
        _cache.set(Class, Wrapper);
      }
      function Wrapper() {
        return _construct(Class, arguments, _getPrototypeOf(this).constructor);
      }
      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return _setPrototypeOf(Wrapper, Class);
    };
    return _wrapNativeSuper(Class);
  }
  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }
    return target;
  }
  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }
    return target;
  }
  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }
    return _assertThisInitialized(self);
  }
  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }
    return object;
  }
  function _get() {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get.bind();
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);
        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);
        if (desc.get) {
          return desc.get.call(arguments.length < 3 ? target : receiver);
        }
        return desc.value;
      };
    }
    return _get.apply(this, arguments);
  }
  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }
  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;
        var F = function () {};
        return {
          s: F,
          n: function () {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          },
          e: function (e) {
            throw e;
          },
          f: F
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true,
      didErr = false,
      err;
    return {
      s: function () {
        it = it.call(o);
      },
      n: function () {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function (e) {
        didErr = true;
        err = e;
      },
      f: function () {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }

  var global$1 = typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {};

  // shim for using process in browser
  // based off https://github.com/defunctzombie/node-process/blob/master/browser.js

  function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
  }
  function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
  }
  var cachedSetTimeout = defaultSetTimout;
  var cachedClearTimeout = defaultClearTimeout;
  if (typeof global$1.setTimeout === 'function') {
    cachedSetTimeout = setTimeout;
  }
  if (typeof global$1.clearTimeout === 'function') {
    cachedClearTimeout = clearTimeout;
  }
  function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
      //normal enviroments in sane situations
      return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
      cachedSetTimeout = setTimeout;
      return setTimeout(fun, 0);
    }
    try {
      // when when somebody has screwed with setTimeout but no I.E. maddness
      return cachedSetTimeout(fun, 0);
    } catch (e) {
      try {
        // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
        return cachedSetTimeout.call(null, fun, 0);
      } catch (e) {
        // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
        return cachedSetTimeout.call(this, fun, 0);
      }
    }
  }
  function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
      //normal enviroments in sane situations
      return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
      cachedClearTimeout = clearTimeout;
      return clearTimeout(marker);
    }
    try {
      // when when somebody has screwed with setTimeout but no I.E. maddness
      return cachedClearTimeout(marker);
    } catch (e) {
      try {
        // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
        return cachedClearTimeout.call(null, marker);
      } catch (e) {
        // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
        // Some versions of I.E. have different rules for clearTimeout vs setTimeout
        return cachedClearTimeout.call(this, marker);
      }
    }
  }
  var queue = [];
  var draining = false;
  var currentQueue;
  var queueIndex = -1;
  function cleanUpNextTick() {
    if (!draining || !currentQueue) {
      return;
    }
    draining = false;
    if (currentQueue.length) {
      queue = currentQueue.concat(queue);
    } else {
      queueIndex = -1;
    }
    if (queue.length) {
      drainQueue();
    }
  }
  function drainQueue() {
    if (draining) {
      return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while (len) {
      currentQueue = queue;
      queue = [];
      while (++queueIndex < len) {
        if (currentQueue) {
          currentQueue[queueIndex].run();
        }
      }
      queueIndex = -1;
      len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
  }
  function nextTick(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
      for (var i = 1; i < arguments.length; i++) {
        args[i - 1] = arguments[i];
      }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
      runTimeout(drainQueue);
    }
  }
  // v8 likes predictible objects
  function Item(fun, array) {
    this.fun = fun;
    this.array = array;
  }
  Item.prototype.run = function () {
    this.fun.apply(null, this.array);
  };
  var title = 'browser';
  var platform = 'browser';
  var browser = true;
  var env = {};
  var argv = [];
  var version = ''; // empty string to avoid regexp issues
  var versions = {};
  var release = {};
  var config = {};
  function noop() {}
  var on = noop;
  var addListener = noop;
  var once = noop;
  var off = noop;
  var removeListener = noop;
  var removeAllListeners = noop;
  var emit = noop;
  function binding(name) {
    throw new Error('process.binding is not supported');
  }
  function cwd() {
    return '/';
  }
  function chdir(dir) {
    throw new Error('process.chdir is not supported');
  }
  function umask() {
    return 0;
  }

  // from https://github.com/kumavis/browser-process-hrtime/blob/master/index.js
  var performance = global$1.performance || {};
  var performanceNow = performance.now || performance.mozNow || performance.msNow || performance.oNow || performance.webkitNow || function () {
    return new Date().getTime();
  };

  // generate timestamp or delta
  // see http://nodejs.org/api/process.html#process_process_hrtime
  function hrtime(previousTimestamp) {
    var clocktime = performanceNow.call(performance) * 1e-3;
    var seconds = Math.floor(clocktime);
    var nanoseconds = Math.floor(clocktime % 1 * 1e9);
    if (previousTimestamp) {
      seconds = seconds - previousTimestamp[0];
      nanoseconds = nanoseconds - previousTimestamp[1];
      if (nanoseconds < 0) {
        seconds--;
        nanoseconds += 1e9;
      }
    }
    return [seconds, nanoseconds];
  }
  var startTime = new Date();
  function uptime() {
    var currentTime = new Date();
    var dif = currentTime - startTime;
    return dif / 1000;
  }
  var browser$1 = {
    nextTick: nextTick,
    title: title,
    browser: browser,
    env: env,
    argv: argv,
    version: version,
    versions: versions,
    on: on,
    addListener: addListener,
    once: once,
    off: off,
    removeListener: removeListener,
    removeAllListeners: removeAllListeners,
    emit: emit,
    binding: binding,
    cwd: cwd,
    chdir: chdir,
    umask: umask,
    hrtime: hrtime,
    platform: platform,
    release: release,
    config: config,
    uptime: uptime
  };
  var process = browser$1;

  const promises = {};

  // Copyright Joyent, Inc. and other Node contributors.
  //
  // Permission is hereby granted, free of charge, to any person obtaining a
  // copy of this software and associated documentation files (the
  // "Software"), to deal in the Software without restriction, including
  // without limitation the rights to use, copy, modify, merge, publish,
  // distribute, sublicense, and/or sell copies of the Software, and to permit
  // persons to whom the Software is furnished to do so, subject to the
  // following conditions:
  //
  // The above copyright notice and this permission notice shall be included
  // in all copies or substantial portions of the Software.
  //
  // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
  // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
  // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
  // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
  // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
  // USE OR OTHER DEALINGS IN THE SOFTWARE.

  // resolves . and .. elements in a path array with directory names there
  // must be no slashes, empty elements, or device names (c:\) in the array
  // (so also no leading and trailing slashes - it does not distinguish
  // relative and absolute paths)
  function normalizeArray(parts, allowAboveRoot) {
    // if the path tries to go above the root, `up` ends up > 0
    var up = 0;
    for (var i = parts.length - 1; i >= 0; i--) {
      var last = parts[i];
      if (last === '.') {
        parts.splice(i, 1);
      } else if (last === '..') {
        parts.splice(i, 1);
        up++;
      } else if (up) {
        parts.splice(i, 1);
        up--;
      }
    }

    // if the path is allowed to go above the root, restore leading ..s
    if (allowAboveRoot) {
      for (; up--; up) {
        parts.unshift('..');
      }
    }
    return parts;
  }

  // Split a filename into [root, dir, basename, ext], unix version
  // 'root' is just a slash, or nothing.
  var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
  var splitPath = function splitPath(filename) {
    return splitPathRe.exec(filename).slice(1);
  };

  // path.resolve([from ...], to)
  // posix version
  function resolve() {
    var resolvedPath = '',
      resolvedAbsolute = false;
    for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
      var path = i >= 0 ? arguments[i] : '/';

      // Skip empty and invalid entries
      if (typeof path !== 'string') {
        throw new TypeError('Arguments to path.resolve must be strings');
      } else if (!path) {
        continue;
      }
      resolvedPath = path + '/' + resolvedPath;
      resolvedAbsolute = path.charAt(0) === '/';
    }

    // At this point the path should be resolved to a full absolute path, but
    // handle relative paths to be safe (might happen when process.cwd() fails)

    // Normalize the path
    resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function (p) {
      return !!p;
    }), !resolvedAbsolute).join('/');
    return (resolvedAbsolute ? '/' : '') + resolvedPath || '.';
  }

  // path.normalize(path)
  // posix version
  function normalize(path) {
    var isPathAbsolute = isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

    // Normalize the path
    path = normalizeArray(filter(path.split('/'), function (p) {
      return !!p;
    }), !isPathAbsolute).join('/');
    if (!path && !isPathAbsolute) {
      path = '.';
    }
    if (path && trailingSlash) {
      path += '/';
    }
    return (isPathAbsolute ? '/' : '') + path;
  }

  // posix version
  function isAbsolute(path) {
    return path.charAt(0) === '/';
  }

  // posix version
  function join() {
    var paths = Array.prototype.slice.call(arguments, 0);
    return normalize(filter(paths, function (p, index) {
      if (typeof p !== 'string') {
        throw new TypeError('Arguments to path.join must be strings');
      }
      return p;
    }).join('/'));
  }
  function dirname(path) {
    var result = splitPath(path),
      root = result[0],
      dir = result[1];
    if (!root && !dir) {
      // No dirname whatsoever
      return '.';
    }
    if (dir) {
      // It has a dirname, strip trailing slash
      dir = dir.substr(0, dir.length - 1);
    }
    return root + dir;
  }
  function filter(xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
      if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
  }

  // String.prototype.substr - negative index don't work in IE8
  var substr = 'ab'.substr(-1) === 'b' ? function (str, start, len) {
    return str.substr(start, len);
  } : function (str, start, len) {
    if (start < 0) start = str.length + start;
    return str.substr(start, len);
  };

  var fetch$1 = fetch;

  var Observable = /*#__PURE__*/function () {
    function Observable() {
      _classCallCheck(this, Observable);
      this.callbacks = {};
    }
    return _createClass(Observable, [{
      key: "bind",
      value: function bind(event, callback) {
        var callbacks = this.callbacks[event] || [];
        callbacks.push(callback);
        this.callbacks[event] = callbacks;
        return callback;
      }
    }, {
      key: "unbind",
      value: function unbind(event, callback) {
        var callbacks = this.callbacks[event] || [];
        if (!callback) {
          delete this.callbacks[event];
          return;
        }
        var index = callbacks.indexOf(callback);
        if (index === -1) {
          return;
        }
        callbacks.splice(index, 1);
        this.callbacks[event] = callbacks;
      }
    }, {
      key: "trigger",
      value: function trigger(event) {
        var callbacks = this.callbacks[event] || [];
        var results = [];
        var _iterator = _createForOfIteratorHelper(callbacks),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var callback = _step.value;
            var result = callback.apply(this, Array.prototype.slice.call(arguments, 1));
            result !== undefined && result !== null && results.push(result);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        return Promise.all(results);
      }
    }]);
  }();
  var _verify = function verify(condition) {
    var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var code = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var exception = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
    var kwargs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
    var safeKeys = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : ["message"];
    if (condition) return;
    message = message || "Verification failed";
    var Exception = exception || Error;
    kwargs = Object.assign({}, kwargs);
    if (message !== null && message !== undefined) kwargs.message = message;
    if (code !== null && message !== undefined) kwargs.code = code;
    var throwable = new Exception(kwargs.message || undefined);
    throwable.kwargs = kwargs;
    for (var _i = 0, _Object$entries = Object.entries(kwargs); _i < _Object$entries.length; _i++) {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
        key = _Object$entries$_i[0],
        value = _Object$entries$_i[1];
      if (safeKeys.includes(key) && throwable[key] !== undefined) {
        continue;
      }
      throwable[key] = value;
    }
    throw throwable;
  };
  var HOME_DIR = null;
  var pathExists = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(path) {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return promises.access(path);
          case 3:
            _context.next = 8;
            break;
          case 5:
            _context.prev = 5;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", false);
          case 8:
            return _context.abrupt("return", true);
          case 9:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 5]]);
    }));
    return function pathExists(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  var expandUser = function expandUser(path) {
    if (!path) return path;
    if (path === "~") return _homeDir();
    if (path.slice(0, 2) !== "~/") return path;
    return join(HOME_DIR, path.slice(2));
  };
  var getEnv = function getEnv(name) {
    // eslint-disable-next-line no-undef
    if (typeof Deno !== "undefined") return Deno.env.get(name);
    return env[name];
  };
  var getEnvObject = function getEnvObject() {
    // eslint-disable-next-line no-undef
    if (typeof Deno !== "undefined") return Deno.env.toObject();
    return env;
  };
  var _homeDir = function _homeDir() {
    if (HOME_DIR !== null) return HOME_DIR;
    var isWindows = Boolean(typeof process !== "undefined" && process.platform === "win32");
    HOME_DIR = getEnv(isWindows ? "USERPROFILE" : "HOME") || "/";
    return HOME_DIR;
  };
  var FILE_NAME = "yonius.json";
  var HOME_FILE = "~/.home";
  var IMPORT_NAMES = ["$import", "$include", "$IMPORT", "$INCLUDE"];
  var CASTS = {
    "int": function int(v) {
      return typeof v === "number" ? v : parseInt(v);
    },
    "float": function float(v) {
      return typeof v === "number" ? v : parseFloat(v);
    },
    bool: function bool(v) {
      return typeof v === "boolean" ? v : ["1", "true", "True"].includes(v);
    },
    list: function list(v) {
      return Array.isArray(v) ? v : v.split(";");
    },
    tuple: function tuple(v) {
      return Array.isArray(v) ? v : v.split(";");
    }
  };
  var globals = typeof global$1 === "undefined" ? typeof window === "undefined" ? typeof self === "undefined" ? {} : self : window : global$1;
  globals.CONFIGS = globals.CONFIGS === undefined ? {} : globals.CONFIGS;
  globals.CONFIG_F = globals.CONFIG_F === undefined ? [] : globals.CONFIG_F;
  globals.HOMES = globals.HOMES === undefined ? [] : globals.HOMES;
  globals.LOADED = globals.LOADED === undefined ? false : globals.LOADED;
  var conf = function conf(name) {
    var fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
    var cast = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var ctx = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
    var configs = ctx ? ctx.configs : globals.CONFIGS;
    cast = _castR(cast);
    var value = configs[name] === undefined ? fallback : configs[name];
    if (cast && value !== undefined && value !== null) value = cast(value);
    return value;
  };
  var load$1 = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var names,
        path,
        encoding,
        force,
        ctx,
        paths,
        homes,
        _iterator2,
        _step2,
        home,
        _iterator3,
        _step3,
        _path,
        _iterator4,
        _step4,
        _name2,
        _args3 = arguments;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            names = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : [FILE_NAME];
            path = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : null;
            encoding = _args3.length > 2 && _args3[2] !== undefined ? _args3[2] : "utf-8";
            force = _args3.length > 3 && _args3[3] !== undefined ? _args3[3] : false;
            ctx = _args3.length > 4 && _args3[4] !== undefined ? _args3[4] : null;
            if (!(globals.LOADED && !force)) {
              _context3.next = 7;
              break;
            }
            return _context3.abrupt("return");
          case 7:
            paths = [];
            _context3.next = 10;
            return getHomes();
          case 10:
            homes = _context3.sent;
            _iterator2 = _createForOfIteratorHelper(homes);
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                home = _step2.value;
                paths = paths.concat([join(home), join(home, ".config")]);
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
            paths.push(path);
            _iterator3 = _createForOfIteratorHelper(paths);
            _context3.prev = 15;
            _iterator3.s();
          case 17:
            if ((_step3 = _iterator3.n()).done) {
              _context3.next = 38;
              break;
            }
            _path = _step3.value;
            _iterator4 = _createForOfIteratorHelper(names);
            _context3.prev = 20;
            _iterator4.s();
          case 22:
            if ((_step4 = _iterator4.n()).done) {
              _context3.next = 28;
              break;
            }
            _name2 = _step4.value;
            _context3.next = 26;
            return loadFile(_name2, _path, encoding, ctx);
          case 26:
            _context3.next = 22;
            break;
          case 28:
            _context3.next = 33;
            break;
          case 30:
            _context3.prev = 30;
            _context3.t0 = _context3["catch"](20);
            _iterator4.e(_context3.t0);
          case 33:
            _context3.prev = 33;
            _iterator4.f();
            return _context3.finish(33);
          case 36:
            _context3.next = 17;
            break;
          case 38:
            _context3.next = 43;
            break;
          case 40:
            _context3.prev = 40;
            _context3.t1 = _context3["catch"](15);
            _iterator3.e(_context3.t1);
          case 43:
            _context3.prev = 43;
            _iterator3.f();
            return _context3.finish(43);
          case 46:
            _context3.next = 48;
            return loadEnv(ctx);
          case 48:
            globals.LOADED = true;
          case 49:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[15, 40, 43, 46], [20, 30, 33, 36]]);
    }));
    return function load$1() {
      return _ref3.apply(this, arguments);
    };
  }();
  var loadFile = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      var name,
        path,
        encoding,
        ctx,
        configs,
        configF,
        key,
        value,
        exists,
        filePath,
        basePath,
        data,
        dataJ,
        _i2,
        _Object$entries2,
        _Object$entries2$_i,
        _args4 = arguments;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            name = _args4.length > 0 && _args4[0] !== undefined ? _args4[0] : FILE_NAME;
            path = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : null;
            encoding = _args4.length > 2 && _args4[2] !== undefined ? _args4[2] : "utf-8";
            ctx = _args4.length > 3 && _args4[3] !== undefined ? _args4[3] : null;
            configs = ctx ? ctx.configs : globals.CONFIGS;
            configF = ctx ? ctx.configF : globals.CONFIG_F;
            if (path) path = normalize(path);
            if (path) filePath = join(path, name);else filePath = name;
            filePath = resolve(filePath);
            filePath = normalize(filePath);
            basePath = dirname(filePath);
            _context4.next = 13;
            return pathExists(filePath);
          case 13:
            exists = _context4.sent;
            if (exists) {
              _context4.next = 16;
              break;
            }
            return _context4.abrupt("return");
          case 16:
            exists = configF.includes(filePath);
            if (exists) configF.splice(configF.indexOf(filePath), 1);
            configF.push(filePath);
            _context4.next = 21;
            return promises.readFile(filePath, {
              encoding: encoding
            });
          case 21:
            data = _context4.sent;
            dataJ = JSON.parse(data);
            _context4.next = 25;
            return _loadIncludes(basePath, dataJ, encoding);
          case 25:
            _i2 = 0, _Object$entries2 = Object.entries(dataJ);
          case 26:
            if (!(_i2 < _Object$entries2.length)) {
              _context4.next = 36;
              break;
            }
            _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2);
            key = _Object$entries2$_i[0];
            value = _Object$entries2$_i[1];
            if (_isValid(key)) {
              _context4.next = 32;
              break;
            }
            return _context4.abrupt("continue", 33);
          case 32:
            configs[key] = value;
          case 33:
            _i2++;
            _context4.next = 26;
            break;
          case 36:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }));
    return function loadFile() {
      return _ref4.apply(this, arguments);
    };
  }();
  var loadEnv = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
      var ctx,
        env,
        configs,
        _args5 = arguments;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            ctx = _args5.length > 0 && _args5[0] !== undefined ? _args5[0] : null;
            env = getEnvObject();
            configs = ctx ? ctx.configs : globals.CONFIGS;
            if (!(env === undefined || env === null)) {
              _context5.next = 5;
              break;
            }
            return _context5.abrupt("return");
          case 5:
            Object.entries(env).forEach(function (_ref6) {
              var _ref7 = _slicedToArray(_ref6, 2),
                key = _ref7[0],
                value = _ref7[1];
              configs[key] = value;
            });
          case 6:
          case "end":
            return _context5.stop();
        }
      }, _callee5);
    }));
    return function loadEnv() {
      return _ref5.apply(this, arguments);
    };
  }();
  var getHomes = /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
      var filePath,
        fallback,
        encoding,
        forceDefault,
        env,
        exists,
        data,
        paths,
        _iterator5,
        _step5,
        path,
        _args6 = arguments;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            filePath = _args6.length > 0 && _args6[0] !== undefined ? _args6[0] : HOME_FILE;
            fallback = _args6.length > 1 && _args6[1] !== undefined ? _args6[1] : "~";
            encoding = _args6.length > 2 && _args6[2] !== undefined ? _args6[2] : "utf-8";
            forceDefault = _args6.length > 3 && _args6[3] !== undefined ? _args6[3] : false;
            if (!(globals.HOMES.length > 0)) {
              _context6.next = 6;
              break;
            }
            return _context6.abrupt("return", globals.HOMES);
          case 6:
            env = getEnvObject();
            globals.HOMES = env.HOMES === undefined ? null : env.HOMES;
            globals.HOMES = globals.HOMES ? globals.HOMES.split(";") : globals.HOMES;
            if (!(globals.HOMES !== null)) {
              _context6.next = 11;
              break;
            }
            return _context6.abrupt("return", globals.HOMES);
          case 11:
            fallback = expandUser(fallback);
            fallback = normalize(fallback);
            globals.HOMES = [fallback];
            filePath = expandUser(filePath);
            filePath = normalize(filePath);
            _context6.next = 18;
            return pathExists(filePath);
          case 18:
            exists = _context6.sent;
            if (exists) {
              _context6.next = 21;
              break;
            }
            return _context6.abrupt("return", globals.HOMES);
          case 21:
            if (!forceDefault) globals.HOMES.splice(0, globals.HOMES.length);
            _context6.next = 24;
            return promises.readFile(filePath, {
              encoding: encoding
            });
          case 24:
            data = _context6.sent;
            data = data.trim();
            paths = data.split(/\r?\n/);
            paths = paths.map(function (v) {
              return v.trim();
            });
            _iterator5 = _createForOfIteratorHelper(paths);
            _context6.prev = 29;
            _iterator5.s();
          case 31:
            if ((_step5 = _iterator5.n()).done) {
              _context6.next = 41;
              break;
            }
            path = _step5.value;
            path = path.trim();
            if (path) {
              _context6.next = 36;
              break;
            }
            return _context6.abrupt("continue", 39);
          case 36:
            path = expandUser(path);
            path = normalize(path);
            globals.HOMES.push(path);
          case 39:
            _context6.next = 31;
            break;
          case 41:
            _context6.next = 46;
            break;
          case 43:
            _context6.prev = 43;
            _context6.t0 = _context6["catch"](29);
            _iterator5.e(_context6.t0);
          case 46:
            _context6.prev = 46;
            _iterator5.f();
            return _context6.finish(46);
          case 49:
            return _context6.abrupt("return", globals.HOMES);
          case 50:
          case "end":
            return _context6.stop();
        }
      }, _callee6, null, [[29, 43, 46, 49]]);
    }));
    return function getHomes() {
      return _ref8.apply(this, arguments);
    };
  }();
  var _castR = function _castR(cast) {
    return CASTS[cast] === undefined ? cast : CASTS[cast];
  };
  var _loadIncludes = /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(basePath, config) {
      var encoding,
        includes,
        _i3,
        _IMPORT_NAMES,
        alias,
        _iterator6,
        _step6,
        include,
        _args7 = arguments;
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            encoding = _args7.length > 2 && _args7[2] !== undefined ? _args7[2] : "utf-8";
            includes = [];
            for (_i3 = 0, _IMPORT_NAMES = IMPORT_NAMES; _i3 < _IMPORT_NAMES.length; _i3++) {
              alias = _IMPORT_NAMES[_i3];
              includes = config[alias] === undefined ? includes : config[alias];
            }
            if (typeof includes === "string") {
              includes = includes.split(";");
            }
            _iterator6 = _createForOfIteratorHelper(includes);
            _context7.prev = 5;
            _iterator6.s();
          case 7:
            if ((_step6 = _iterator6.n()).done) {
              _context7.next = 13;
              break;
            }
            include = _step6.value;
            _context7.next = 11;
            return loadFile(include, basePath, encoding);
          case 11:
            _context7.next = 7;
            break;
          case 13:
            _context7.next = 18;
            break;
          case 15:
            _context7.prev = 15;
            _context7.t0 = _context7["catch"](5);
            _iterator6.e(_context7.t0);
          case 18:
            _context7.prev = 18;
            _iterator6.f();
            return _context7.finish(18);
          case 21:
          case "end":
            return _context7.stop();
        }
      }, _callee7, null, [[5, 15, 18, 21]]);
    }));
    return function _loadIncludes(_x3, _x4) {
      return _ref9.apply(this, arguments);
    };
  }();
  var _isValid = function _isValid(key) {
    if (IMPORT_NAMES.includes(key)) return false;
    return true;
  };
  var MixinBuilder = /*#__PURE__*/function () {
    function MixinBuilder(superclass) {
      _classCallCheck(this, MixinBuilder);
      this.superclass = superclass;
    }
    return _createClass(MixinBuilder, [{
      key: "with",
      value: function _with() {
        for (var _len = arguments.length, mixins = new Array(_len), _key = 0; _key < _len; _key++) {
          mixins[_key] = arguments[_key];
        }
        return mixins.reduce(function (c, mixin) {
          return mixin(c);
        }, this.superclass);
      }
    }]);
  }();
  var mix = function mix(superclass) {
    return new MixinBuilder(superclass);
  };

  /**
   * Encodes the multiple values as and encoded URI component, the
   * values can be wither defined as an array (order is preserved)
   * or as an object (where sequence order is not preserved).
   *
   * The value of each item can be either a primitive type or a sequence
   * in case it's of sequence the values are going to be encoded as
   * multiple parameters separated by the '&' character.
   *
   * @param {(Array|Object[])} values The values to be encoded as an
   * URI component (like GET params).
   * @returns {String} A string with the query encoded values.
   */
  var urlEncode = function urlEncode(values) {
    // constructs the parts array that is going to
    // store the multiple and values
    var parts = [];

    // in case the provided value is not an array
    // then assumes it's an object and retrieve entries
    if (!Array.isArray(values)) {
      values = Object.entries(values);
    }

    // iterates over the complete set of pairs available
    // from the key value pairs to be able to encode them
    // properly, notice that the values themselves can be
    // sequences allowing multiple repetition of key
    values.forEach(function (_ref25) {
      var _ref26 = _slicedToArray(_ref25, 2),
        key = _ref26[0],
        value = _ref26[1];
      if (!Array.isArray(value)) {
        value = [value];
      }
      var keyEncoded = encodeURIComponent(key);
      value.forEach(function (_value) {
        if (_value === undefined || _value === null) {
          return;
        }
        var valueEncoded = encodeURIComponent(_value);
        parts.push("".concat(keyEncoded, "=").concat(valueEncoded));
      });
    });

    // joins the complete set of parts with the and
    // separator and then returns the final string value
    return parts.join("&");
  };
  var YoniusError = /*#__PURE__*/function (_Error) {
    function YoniusError(message) {
      var _this;
      var code = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
      _classCallCheck(this, YoniusError);
      _this = _callSuper(this, YoniusError, [message]);
      _this.name = _this.constructor.name;
      _this.code = code;
      return _this;
    }
    _inherits(YoniusError, _Error);
    return _createClass(YoniusError, [{
      key: "isClient",
      get: function get() {
        return Math.floor(this.code / 100) === 4;
      }
    }, {
      key: "isServer",
      get: function get() {
        return Math.floor(this.code / 100) === 5;
      }
    }]);
  }( /*#__PURE__*/_wrapNativeSuper(Error));
  var OperationalError = /*#__PURE__*/function (_YoniusError) {
    function OperationalError() {
      var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Operational error";
      var code = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
      _classCallCheck(this, OperationalError);
      return _callSuper(this, OperationalError, [message, code]);
    }
    _inherits(OperationalError, _YoniusError);
    return _createClass(OperationalError);
  }(YoniusError);
  var AUTH_ERRORS = [401, 403, 440, 499];
  var API$1 = /*#__PURE__*/function (_Observable) {
    function API() {
      var _this2;
      var kwargs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      _classCallCheck(this, API);
      _this2 = _callSuper(this, API);
      _this2.kwargs = kwargs;
      return _this2;
    }
    _inherits(API, _Observable);
    return _createClass(API, [{
      key: "build",
      value: function () {
        var _build = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(method, url) {
          return _regeneratorRuntime().wrap(function _callee9$(_context9) {
            while (1) switch (_context9.prev = _context9.next) {
              case 0:
              case 1:
              case "end":
                return _context9.stop();
            }
          }, _callee9);
        }));
        function build(_x7, _x8) {
          return _build.apply(this, arguments);
        }
        return build;
      }()
    }, {
      key: "authCallback",
      value: function () {
        var _authCallback = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(params, headers) {
          return _regeneratorRuntime().wrap(function _callee10$(_context10) {
            while (1) switch (_context10.prev = _context10.next) {
              case 0:
              case "end":
                return _context10.stop();
            }
          }, _callee10);
        }));
        function authCallback(_x9, _x10) {
          return _authCallback.apply(this, arguments);
        }
        return authCallback;
      }()
    }, {
      key: "get",
      value: function () {
        var _get = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(url) {
          var options,
            result,
            _args11 = arguments;
          return _regeneratorRuntime().wrap(function _callee11$(_context11) {
            while (1) switch (_context11.prev = _context11.next) {
              case 0:
                options = _args11.length > 1 && _args11[1] !== undefined ? _args11[1] : {};
                _context11.next = 3;
                return this.methodBasic("GET", url, options);
              case 3:
                result = _context11.sent;
                return _context11.abrupt("return", result);
              case 5:
              case "end":
                return _context11.stop();
            }
          }, _callee11, this);
        }));
        function get(_x11) {
          return _get.apply(this, arguments);
        }
        return get;
      }()
    }, {
      key: "post",
      value: function () {
        var _post = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(url) {
          var options,
            result,
            _args12 = arguments;
          return _regeneratorRuntime().wrap(function _callee12$(_context12) {
            while (1) switch (_context12.prev = _context12.next) {
              case 0:
                options = _args12.length > 1 && _args12[1] !== undefined ? _args12[1] : {};
                _context12.next = 3;
                return this.methodPayload("POST", url, options);
              case 3:
                result = _context12.sent;
                return _context12.abrupt("return", result);
              case 5:
              case "end":
                return _context12.stop();
            }
          }, _callee12, this);
        }));
        function post(_x12) {
          return _post.apply(this, arguments);
        }
        return post;
      }()
    }, {
      key: "put",
      value: function () {
        var _put = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(url) {
          var options,
            result,
            _args13 = arguments;
          return _regeneratorRuntime().wrap(function _callee13$(_context13) {
            while (1) switch (_context13.prev = _context13.next) {
              case 0:
                options = _args13.length > 1 && _args13[1] !== undefined ? _args13[1] : {};
                _context13.next = 3;
                return this.methodPayload("PUT", url, options);
              case 3:
                result = _context13.sent;
                return _context13.abrupt("return", result);
              case 5:
              case "end":
                return _context13.stop();
            }
          }, _callee13, this);
        }));
        function put(_x13) {
          return _put.apply(this, arguments);
        }
        return put;
      }()
    }, {
      key: "delete",
      value: function () {
        var _delete2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(url) {
          var options,
            result,
            _args14 = arguments;
          return _regeneratorRuntime().wrap(function _callee14$(_context14) {
            while (1) switch (_context14.prev = _context14.next) {
              case 0:
                options = _args14.length > 1 && _args14[1] !== undefined ? _args14[1] : {};
                _context14.next = 3;
                return this.methodBasic("DELETE", url, options);
              case 3:
                result = _context14.sent;
                return _context14.abrupt("return", result);
              case 5:
              case "end":
                return _context14.stop();
            }
          }, _callee14, this);
        }));
        function _delete(_x14) {
          return _delete2.apply(this, arguments);
        }
        return _delete;
      }()
    }, {
      key: "patch",
      value: function () {
        var _patch = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15(url) {
          var options,
            result,
            _args15 = arguments;
          return _regeneratorRuntime().wrap(function _callee15$(_context15) {
            while (1) switch (_context15.prev = _context15.next) {
              case 0:
                options = _args15.length > 1 && _args15[1] !== undefined ? _args15[1] : {};
                _context15.next = 3;
                return this.methodPayload("PATCH", url, options);
              case 3:
                result = _context15.sent;
                return _context15.abrupt("return", result);
              case 5:
              case "end":
                return _context15.stop();
            }
          }, _callee15, this);
        }));
        function patch(_x15) {
          return _patch.apply(this, arguments);
        }
        return patch;
      }()
    }, {
      key: "options",
      value: function () {
        var _options2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16(url) {
          var _options,
            result,
            _args16 = arguments;
          return _regeneratorRuntime().wrap(function _callee16$(_context16) {
            while (1) switch (_context16.prev = _context16.next) {
              case 0:
                _options = _args16.length > 1 && _args16[1] !== undefined ? _args16[1] : {};
                _context16.next = 3;
                return this.methodBasic("OPTIONS", url, _options);
              case 3:
                result = _context16.sent;
                return _context16.abrupt("return", result);
              case 5:
              case "end":
                return _context16.stop();
            }
          }, _callee16, this);
        }));
        function options(_x16) {
          return _options2.apply(this, arguments);
        }
        return options;
      }()
    }, {
      key: "methodBasic",
      value: function () {
        var _methodBasic2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee17(method, url) {
          var options,
            _args17 = arguments;
          return _regeneratorRuntime().wrap(function _callee17$(_context17) {
            while (1) switch (_context17.prev = _context17.next) {
              case 0:
                options = _args17.length > 2 && _args17[2] !== undefined ? _args17[2] : {};
                options.params = options.params !== undefined ? options.params : {};
                options.headers = options.headers !== undefined ? options.headers : {};
                _context17.prev = 3;
                _context17.next = 6;
                return this._methodBasic(method, url, options);
              case 6:
                return _context17.abrupt("return", _context17.sent);
              case 9:
                _context17.prev = 9;
                _context17.t0 = _context17["catch"](3);
                if (!AUTH_ERRORS.includes(_context17.t0.code)) {
                  _context17.next = 19;
                  break;
                }
                _context17.next = 14;
                return this.authCallback(options.params, options.headers);
              case 14:
                _context17.next = 16;
                return this._methodBasic(method, url, options);
              case 16:
                return _context17.abrupt("return", _context17.sent);
              case 19:
                throw _context17.t0;
              case 20:
              case "end":
                return _context17.stop();
            }
          }, _callee17, this, [[3, 9]]);
        }));
        function methodBasic(_x17, _x18) {
          return _methodBasic2.apply(this, arguments);
        }
        return methodBasic;
      }()
    }, {
      key: "methodPayload",
      value: function () {
        var _methodPayload2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee18(method, url) {
          var options,
            _args18 = arguments;
          return _regeneratorRuntime().wrap(function _callee18$(_context18) {
            while (1) switch (_context18.prev = _context18.next) {
              case 0:
                options = _args18.length > 2 && _args18[2] !== undefined ? _args18[2] : {};
                options.params = options.params !== undefined ? options.params : {};
                options.headers = options.headers !== undefined ? options.headers : {};
                _context18.prev = 3;
                _context18.next = 6;
                return this._methodPayload(method, url, options);
              case 6:
                return _context18.abrupt("return", _context18.sent);
              case 9:
                _context18.prev = 9;
                _context18.t0 = _context18["catch"](3);
                if (!AUTH_ERRORS.includes(_context18.t0.code)) {
                  _context18.next = 19;
                  break;
                }
                _context18.next = 14;
                return this.authCallback(options.params, options.headers);
              case 14:
                _context18.next = 16;
                return this._methodPayload(method, url, options);
              case 16:
                return _context18.abrupt("return", _context18.sent);
              case 19:
                throw _context18.t0;
              case 20:
              case "end":
                return _context18.stop();
            }
          }, _callee18, this, [[3, 9]]);
        }));
        function methodPayload(_x19, _x20) {
          return _methodPayload2.apply(this, arguments);
        }
        return methodPayload;
      }()
    }, {
      key: "_methodBasic",
      value: function () {
        var _methodBasic3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee19(method, url) {
          var options,
            params,
            headers,
            kwargs,
            handle,
            getAgent,
            query,
            response,
            result,
            _args19 = arguments;
          return _regeneratorRuntime().wrap(function _callee19$(_context19) {
            while (1) switch (_context19.prev = _context19.next) {
              case 0:
                options = _args19.length > 2 && _args19[2] !== undefined ? _args19[2] : {};
                params = options.params !== undefined ? options.params : {};
                headers = options.headers !== undefined ? options.headers : {};
                kwargs = options.kwargs !== undefined ? options.kwargs : {};
                handle = options.handle !== undefined ? options.handle : true;
                getAgent = options.getAgent !== undefined ? options.getAgent : undefined;
                _context19.next = 8;
                return this.build(method, url, {
                  params: params,
                  headers: headers,
                  kwargs: kwargs
                });
              case 8:
                query = urlEncode(params || {});
                if (query) url += url.includes("?") ? "&" + query : "?" + query;
                _context19.next = 12;
                return fetch$1(url, {
                  method: method,
                  headers: headers || {},
                  agent: getAgent || globals.getAgent || undefined
                });
              case 12:
                response = _context19.sent;
                if (!handle) {
                  _context19.next = 19;
                  break;
                }
                _context19.next = 16;
                return this._handleResponse(response);
              case 16:
                _context19.t0 = _context19.sent;
                _context19.next = 20;
                break;
              case 19:
                _context19.t0 = response;
              case 20:
                result = _context19.t0;
                return _context19.abrupt("return", result);
              case 22:
              case "end":
                return _context19.stop();
            }
          }, _callee19, this);
        }));
        function _methodBasic(_x21, _x22) {
          return _methodBasic3.apply(this, arguments);
        }
        return _methodBasic;
      }()
    }, {
      key: "_methodPayload",
      value: function () {
        var _methodPayload3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee20(method, url) {
          var options,
            params,
            headers,
            data,
            dataJ,
            dataM,
            mime,
            kwargs,
            handle,
            getAgent,
            query,
            _this$_encodeMultipar,
            _this$_encodeMultipar2,
            response,
            result,
            _args20 = arguments;
          return _regeneratorRuntime().wrap(function _callee20$(_context20) {
            while (1) switch (_context20.prev = _context20.next) {
              case 0:
                options = _args20.length > 2 && _args20[2] !== undefined ? _args20[2] : {};
                params = options.params !== undefined ? options.params : {};
                headers = options.headers !== undefined ? options.headers : {};
                data = options.data !== undefined ? options.data : null;
                dataJ = options.dataJ !== undefined ? options.dataJ : null;
                dataM = options.dataM !== undefined ? options.dataM : null;
                mime = options.mime !== undefined ? options.mime : null;
                kwargs = options.kwargs !== undefined ? options.kwargs : {};
                handle = options.handle !== undefined ? options.handle : true;
                getAgent = options.getAgent !== undefined ? options.getAgent : undefined;
                _context20.next = 12;
                return this.build(method, url, {
                  params: params,
                  headers: headers,
                  data: data,
                  dataJ: dataJ,
                  dataM: dataM,
                  mime: mime,
                  kwargs: kwargs
                });
              case 12:
                query = urlEncode(params || {});
                if (data !== null) {
                  if (query) url += url.includes("?") ? "&" + query : "?" + query;
                } else if (dataJ !== null) {
                  data = JSON.stringify(dataJ);
                  if (query) url += url.includes("?") ? "&" + query : "?" + query;
                  mime = mime || "application/json";
                } else if (dataM !== null) {
                  if (query) url += url.includes("?") ? "&" + query : "?" + query;
                  _this$_encodeMultipar = this._encodeMultipart(dataM, mime, true);
                  _this$_encodeMultipar2 = _slicedToArray(_this$_encodeMultipar, 2);
                  mime = _this$_encodeMultipar2[0];
                  data = _this$_encodeMultipar2[1];
                } else if (query) {
                  data = query;
                  mime = mime || "application/x-www-form-urlencoded";
                }
                headers = Object.assign({}, headers);
                if (mime) headers["Content-Type"] = mime;
                _context20.next = 18;
                return fetch$1(url, {
                  method: method,
                  headers: headers || {},
                  body: data,
                  agent: getAgent || global$1.getAgent || undefined
                });
              case 18:
                response = _context20.sent;
                if (!handle) {
                  _context20.next = 25;
                  break;
                }
                _context20.next = 22;
                return this._handleResponse(response);
              case 22:
                _context20.t0 = _context20.sent;
                _context20.next = 26;
                break;
              case 25:
                _context20.t0 = response;
              case 26:
                result = _context20.t0;
                return _context20.abrupt("return", result);
              case 28:
              case "end":
                return _context20.stop();
            }
          }, _callee20, this);
        }));
        function _methodPayload(_x23, _x24) {
          return _methodPayload3.apply(this, arguments);
        }
        return _methodPayload;
      }()
    }, {
      key: "_handleResponse",
      value: function () {
        var _handleResponse2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee21(response) {
          var errorMessage,
            result,
            _args21 = arguments;
          return _regeneratorRuntime().wrap(function _callee21$(_context21) {
            while (1) switch (_context21.prev = _context21.next) {
              case 0:
                errorMessage = _args21.length > 1 && _args21[1] !== undefined ? _args21[1] : "Problem in request";
                result = null;
                if (!(response.headers.get("content-type") && response.headers.get("content-type").toLowerCase().startsWith("application/json"))) {
                  _context21.next = 8;
                  break;
                }
                _context21.next = 5;
                return response.json();
              case 5:
                result = _context21.sent;
                _context21.next = 17;
                break;
              case 8:
                if (!(response.headers.get("content-type") && response.headers.get("content-type").toLowerCase().startsWith("text/"))) {
                  _context21.next = 14;
                  break;
                }
                _context21.next = 11;
                return response.text();
              case 11:
                result = _context21.sent;
                _context21.next = 17;
                break;
              case 14:
                _context21.next = 16;
                return response.blob();
              case 16:
                result = _context21.sent;
              case 17:
                _verify(response.ok, result.error || errorMessage, response.status || 500);
                return _context21.abrupt("return", result);
              case 19:
              case "end":
                return _context21.stop();
            }
          }, _callee21);
        }));
        function _handleResponse(_x25) {
          return _handleResponse2.apply(this, arguments);
        }
        return _handleResponse;
      }()
    }, {
      key: "_encodeMultipart",
      value: function _encodeMultipart(fields) {
        var mime = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var doseq = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        mime = mime || "multipart/form-data";
        var boundary = this._createBoundary(fields, undefined, doseq);
        var encoder = new TextEncoder("utf-8");
        var buffer = [];
        for (var _i6 = 0, _Object$entries5 = Object.entries(fields); _i6 < _Object$entries5.length; _i6++) {
          var _Object$entries5$_i = _slicedToArray(_Object$entries5[_i6], 2),
            key = _Object$entries5$_i[0],
            values = _Object$entries5$_i[1];
          var isList = doseq && Array.isArray(values);
          values = isList ? values : [values];
          var _iterator9 = _createForOfIteratorHelper(values),
            _step9;
          try {
            for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
              var value = _step9.value;
              if (value === null) continue;
              var header = void 0;
              if (_typeof(value) === "object" && !(value instanceof Array) && value.constructor !== Uint8Array) {
                var headerL = [];
                var data = null;
                for (var _i7 = 0, _Object$entries6 = Object.entries(value); _i7 < _Object$entries6.length; _i7++) {
                  var _Object$entries6$_i = _slicedToArray(_Object$entries6[_i7], 2),
                    _key2 = _Object$entries6$_i[0],
                    item = _Object$entries6$_i[1];
                  if (_key2 === "data") data = item;else headerL.push("".concat(_key2, ": ").concat(item));
                }
                value = data;
                header = headerL.join("\r\n");
              } else if (value instanceof Array) {
                var _name5 = null;
                var contents = null;
                var contentTypeD = null;
                if (value.length === 2) {
                  var _value3 = value;
                  var _value4 = _slicedToArray(_value3, 2);
                  _name5 = _value4[0];
                  contents = _value4[1];
                } else {
                  var _value5 = value;
                  var _value6 = _slicedToArray(_value5, 3);
                  _name5 = _value6[0];
                  contentTypeD = _value6[1];
                  contents = _value6[2];
                }
                header = "Content-Disposition: form-data; name=\"".concat(key, "\"; filename=\"").concat(_name5, "\"");
                if (contentTypeD) header += "\r\nContent-Type: ".concat(contentTypeD);
                value = contents;
              } else {
                header = "Content-Disposition: form-data; name=\"".concat(key, "\"");
                value = value.constructor === Uint8Array ? value : encoder.encode(value);
              }
              buffer.push(encoder.encode("--" + boundary + "\r\n"));
              buffer.push(encoder.encode(header + "\r\n"));
              buffer.push(encoder.encode("\r\n"));
              buffer.push(value);
              buffer.push(encoder.encode("\r\n"));
            }
          } catch (err) {
            _iterator9.e(err);
          } finally {
            _iterator9.f();
          }
        }
        buffer.push(encoder.encode("--" + boundary + "--\r\n"));
        buffer.push(encoder.encode("\r\n"));
        var body = this._joinBuffer(buffer);
        var contentType = "".concat(mime, "; boundary=").concat(boundary);
        return [contentType, body];
      }
    }, {
      key: "_createBoundary",
      value: function _createBoundary(fields) {
        return "Vq2xNWWHbmWYF644q9bC5T2ALtj5CynryArNQRXGYsfm37vwFKMNsqPBrpPeprFs";
      }
    }, {
      key: "_joinBuffer",
      value: function _joinBuffer(bufferArray) {
        var bufferSize = bufferArray.map(function (item) {
          return item.byteLength;
        }).reduce(function (a, v) {
          return a + v;
        }, 0);
        var buffer = new Uint8Array(bufferSize);
        var offset = 0;
        var _iterator10 = _createForOfIteratorHelper(bufferArray),
          _step10;
        try {
          for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
            var item = _step10.value;
            buffer.set(item, offset);
            offset += item.byteLength;
          }
        } catch (err) {
          _iterator10.e(err);
        } finally {
          _iterator10.f();
        }
        return buffer;
      }
    }]);
  }(Observable);
  var buildGetAgent = function buildGetAgent(AgentHttp, AgentHttps) {
    var set = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    var httpAgent = new AgentHttp({
      keepAlive: options.keepAlive === undefined ? true : options.keepAlive,
      keepAliveMsecs: options.keepAliveMsecs || 120000,
      timeout: options.timeout || 60000,
      scheduling: options.scheduling || "fifo"
    });
    var httpsAgent = new AgentHttps({
      keepAlive: options.keepAlive === undefined ? true : options.keepAlive,
      keepAliveMsecs: options.keepAliveMsecs || 120000,
      timeout: options.timeout || 60000,
      scheduling: options.scheduling || "fifo"
    });
    var getAgent = function getAgent(parsedURL) {
      return parsedURL.protocol === "http:" ? httpAgent : httpsAgent;
    };
    if (set) globals.getAgent = getAgent;
    return getAgent;
  };

  /**
   * Tries to patch the global environment with a proper `getAgent`
   * function that can handle HTTP and HTTP connection polling.
   *
   * This can only be performed in a node.js environment (uses `require`).
   *
   * @returns {Function} The `getAgent` function that has just been
   * built and set in the globals.
   */
  var patchAgent = function patchAgent() {
    if (typeof require !== "function") return;
    if (globals.getAgent) return;
    var http, https;
    try {
      http = require("http");
      https = require("https");
    } catch (err) {
      return;
    }
    if (!http || !https) return;
    if (!http.Agent || !https.Agent) return;
    return buildGetAgent(http.Agent, https.Agent, true);
  };

  // patches the global agent if possible, using the
  // global dynamic require statements
  patchAgent();
  var load = /*#__PURE__*/function () {
    var _ref28 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee24() {
      return _regeneratorRuntime().wrap(function _callee24$(_context24) {
        while (1) switch (_context24.prev = _context24.next) {
          case 0:
            _context24.next = 2;
            return load$1();
          case 2:
          case "end":
            return _context24.stop();
        }
      }, _callee24);
    }));
    return function load() {
      return _ref28.apply(this, arguments);
    };
  }();

  /**
   * Simple lambda function that removes any
   * empty element from the provided list values
   */
  var RE = function RE(v) {
    return v.filter(function (i) {
      return i !== "";
    });
  };

  /**
   * The map associating the various types with the
   * custom builder functions to be used when applying
   * the types function, this is relevant for the built-in
   * types that are meant to avoid using the default constructor
   */
  _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, Number, function (v) {
    return v;
  }), String, function (v) {
    return v;
  }), Array, function (v) {
    return Array.isArray(v) ? RE(v) : typeof v === "string" ? JSON.parse(v) : RE([v]);
  }), Boolean, function (v) {
    return typeof v === "boolean" ? v : !["", "0", "false", "False"].includes(v);
  }), Object, function (v) {
    return typeof v === "string" ? JSON.parse(v) : v;
  });

  /**
   * Option type for access point search.
   */
  var ACCESS_POINT_SEARCH = "64";

  /**
   * Option type to sort by closest in search.
   */
  var CLOSEST_POINT_SEARCH = "01";
  var LocatorAPI = function LocatorAPI(superclass) {
    return /*#__PURE__*/function (_superclass) {
      function _class() {
        _classCallCheck(this, _class);
        return _callSuper(this, _class, arguments);
      }
      _inherits(_class, _superclass);
      return _createClass(_class, [{
        key: "getNearestAccessPoint",
        value: (
        /**
         * Finds the nearest UPS Access Point to a given address.
         *
         * @param {String} addressLine The address from where the distance is measured.
         * @param {String} city The city from where the distance is measured.
         * @param {String} postalCode The postalCode from where the distance is measured.
         * @param {String} countryCode The countryCode from where the distance is measured.
         * @param {Object} options An object of options to configure the request.
         * @returns {Object} The HTTP response object.
         * @see https://www.ups.com/upsdeveloperkit?loc=en_US
         */
        function () {
          var _getNearestAccessPoint = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(addressLine, city, postalCode, countryCode) {
            var options,
              url,
              payload,
              response,
              _args = arguments;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  options = _args.length > 4 && _args[4] !== undefined ? _args[4] : {};
                  url = "".concat(this.baseUrl, "locations/").concat(this.version, "/search/availabilities/").concat(ACCESS_POINT_SEARCH);
                  payload = this._buildNearestAccessPointPayload(addressLine, city, postalCode, countryCode, options);
                  _context.next = 5;
                  return this.post(url, _objectSpread2(_objectSpread2({}, options), {}, {
                    dataJ: payload
                  }));
                case 5:
                  response = _context.sent;
                  return _context.abrupt("return", response);
                case 7:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function getNearestAccessPoint(_x, _x2, _x3, _x4) {
            return _getNearestAccessPoint.apply(this, arguments);
          }
          return getNearestAccessPoint;
        }())
      }, {
        key: "_buildNearestAccessPointPayload",
        value: function _buildNearestAccessPointPayload(addressLine, city, postalCode, countryCode) {
          var _ref = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {},
            _ref$consignee = _ref.consignee,
            consignee = _ref$consignee === void 0 ? null : _ref$consignee,
            _ref$locale = _ref.locale,
            locale = _ref$locale === void 0 ? "en_US" : _ref$locale,
            _ref$metric = _ref.metric,
            metric = _ref$metric === void 0 ? true : _ref$metric;
            _ref.radius;
          var payload = {
            LocatorRequest: {
              Request: {
                RequestAction: "Locator",
                RequestOption: ACCESS_POINT_SEARCH
              },
              OriginAddress: {
                AddressKeyFormat: {
                  ConsigneeName: consignee,
                  AddressLine: addressLine,
                  PoliticalDivision2: city,
                  PostcodePrimaryLow: postalCode,
                  CountryCode: countryCode
                }
              },
              Translate: {
                Locale: locale
              },
              UnitOfMeasurement: {
                Code: metric ? "KM" : "MI"
              },
              SortCriteria: {
                SortType: CLOSEST_POINT_SEARCH
              }
            }
          };
          return payload;
        }
      }]);
    }(superclass);
  };

  var SMALL_PACKAGE_SHIPMENT_TYPE = "1";
  var FREIGHT_SHIPMENT_TYPE = "2";
  var AUTH_FORM_DOC_TYPE = "001";
  var INVOICE_DOC_TYPE = "002";
  var CERTIFICATE_ORIGIN_DOC_TYPE = "003";
  var EXPORT_ACCOMPANYING_DOC_TYPE = "004";
  var EXPORT_LICENSE_DOC_TYPE = "005";
  var IMPORT_PERMIT_DOC_TYPE = "006";
  var ONE_TIME_NAFTA_DOC_TYPE = "007";
  var OTHER_DOC_TYPE = "008";
  var POWER_ATTORNEY_DOC_TYPE = "009";
  var PACKING_LIST_DOC_TYPE = "010";
  var SED_DOC_TYPE = "011";
  var LETTER_INSTRUCTION_DOC_TYPE = "012";
  var DECLARATION_DOC_TYPE = "013";
  var PaperlessAPI = function PaperlessAPI(superclass) {
    return /*#__PURE__*/function (_superclass) {
      function _class() {
        _classCallCheck(this, _class);
        return _callSuper(this, _class, arguments);
      }
      _inherits(_class, _superclass);
      return _createClass(_class, [{
        key: "createDocument",
        value: (
        /**
         * Uploads a document to the UPS servers.
         * The uploaded document is returned and its ID can be
         * used to associate a shipment with the document.
         *
         * @param {Object} payload The payload object according to the UPS API standards.
         * @param {Object} options An object of options to configure the request.
         * @returns {Object} The HTTP response object.
         * @see https://www.ups.com/upsdeveloperkit?loc=en_US
         */
        function () {
          var _createDocument = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(payload) {
            var options,
              url,
              response,
              _args = arguments;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  options = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
                  url = "".concat(this.baseUrl, "paperlessdocuments/").concat(this.version, "/upload");
                  _context.next = 4;
                  return this.post(url, _objectSpread2(_objectSpread2({}, options), {}, {
                    dataJ: {
                      UploadRequest: payload
                    }
                  }));
                case 4:
                  response = _context.sent;
                  return _context.abrupt("return", response);
                case 6:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function createDocument(_x) {
            return _createDocument.apply(this, arguments);
          }
          return createDocument;
        }()
        /**
         * Adds the already uploaded documents in the UPS servers to an
         * existing shipment.
         *
         * @param {Object} payload The payload object according to the UPS API standards.
         * @param {Object} options An object of options to configure the request.
         * @returns {Object} The HTTP response object.
         * @see https://www.ups.com/upsdeveloperkit?loc=en_US
         */
        )
      }, {
        key: "addDocumentShipment",
        value: (function () {
          var _addDocumentShipment = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(payload) {
            var options,
              url,
              response,
              _args2 = arguments;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  options = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : {};
                  url = "".concat(this.baseUrl, "paperlessdocuments/").concat(this.version, "/image");
                  _context2.next = 4;
                  return this.post(url, _objectSpread2(_objectSpread2({}, options), {}, {
                    dataJ: {
                      PushToImageRepositoryRequest: payload
                    }
                  }));
                case 4:
                  response = _context2.sent;
                  return _context2.abrupt("return", response);
                case 6:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function addDocumentShipment(_x2) {
            return _addDocumentShipment.apply(this, arguments);
          }
          return addDocumentShipment;
        }())
      }]);
    }(superclass);
  };

  var PickupAPI = function PickupAPI(superclass) {
    return /*#__PURE__*/function (_superclass) {
      function _class() {
        _classCallCheck(this, _class);
        return _callSuper(this, _class, arguments);
      }
      _inherits(_class, _superclass);
      return _createClass(_class, [{
        key: "schedulePickup",
        value: (
        /**
         * Schedules a pickup for a parcel.
         *
         * @param {Object} payload The payload object according to the UPS API standards.
         * @param {Object} options An object of options to configure the request.
         * @returns {Object} The HTTP response object.
         * @see https://www.ups.com/upsdeveloperkit?loc=en_US
         */
        function () {
          var _schedulePickup = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(payload) {
            var options,
              url,
              response,
              _args = arguments;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  options = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
                  url = "".concat(this.baseUrl, "pickupcreation/").concat(this.version, "/pickup");
                  _context.next = 4;
                  return this.post(url, _objectSpread2(_objectSpread2({}, options), {}, {
                    dataJ: {
                      PickupCreationRequest: payload
                    }
                  }));
                case 4:
                  response = _context.sent;
                  return _context.abrupt("return", response);
                case 6:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function schedulePickup(_x) {
            return _schedulePickup.apply(this, arguments);
          }
          return schedulePickup;
        }())
      }]);
    }(superclass);
  };

  var _excluded = ["format"];
  /*
   * The code representing an express shipment.
   */
  var EXPRESS_SERVICE_CODE = "007";

  /*
   * The code representing a standard shipment.
   */
  var STANDARD_SERVICE_CODE = "011";

  /*
   * The code representing a saver shipment.
   */
  var SAVER_SERVICE_CODE = "065";

  /*
   * The code representing a shipment transportation charges.
   */
  var TRANSPORTATION_CHARGE_TYPE = "01";

  /*
   * The code representing a shipment duties and taxes charges.
   */
  var DUTIES_CHARGE_TYPE = "02";

  /**
   * The code representing a customer box
   * package.
   */
  var CUSTOMER_BOX_PACKAGING_TYPE = "02";

  /**
   * The code representing a padded box
   * package.
   */
  var PAK_BOX_PACKAGING_TYPE = "03";

  /**
   * The code representing an express box
   * package.
   */
  var EXPRESS_BOX_PACKAGING_TYPE = "21";

  /**
   * Represents kilograms.
   */
  var KGS_TYPE = "KGS";

  /**
   * Represents pounds.
   */
  var LBS_TYPE = "LBS";

  /**
   * The code for a shipment to hold at an UPS Access Point.
   */
  var SHIPMENT_HOLD_ACCESS_POINT = "01";

  /**
   * The code for the PRL UPS return service.
   */
  var RETURN_PRL = "9";

  /**
   * The code to send an in transit email notification.
   */
  var NOTIFY_IN_TRANSIT = "5";

  /**
   * The code to send a package shipped email notification.
   */
  var NOTIFY_SHIP = "6";

  /**
   * The code to send exception email notifications.
   */
  var NOTIFY_EXCEPTION = "7";

  /**
   * The code to send a package delivered email notification.
   */
  var NOTIFY_DELIVERY = "8";

  /**
   * The code to send a delivery email notification when the package is at the Access Point.
   */
  var NOTIFY_ACCESS_POINT_DELIVERY = "012";

  /**
   * The code for a purchase order code value to
   * be used in reference number specification.
   */
  var PURCHASE_ORDER = "PO";

  /**
   * The code for a production code code value to
   * be used in reference number specification.
   */
  var PRODUCTION_CODE = "PC";

  /**
   * The code for reason for export.
   */
  var REASON_FOR_EXPORT = {
    SALE: "SALE",
    GIFT: "GIFT",
    SAMPLE: "SAMPLE",
    RETURN: "RETURN",
    REPAIR: "REPAIR",
    INTERCOMPANY_DATA: "INTERCOMPANYDATA",
    ANY: "Any other reason"
  };

  /**
   * The code for form types to be used in international shipping.
   */
  var INTERNATIONAL_FORM_TYPE = {
    USER_CREATED_FORM: "07",
    FULL_INVOICE: "01"
  };
  var ShipmentAPI = function ShipmentAPI(superclass) {
    return /*#__PURE__*/function (_superclass) {
      function _class() {
        _classCallCheck(this, _class);
        return _callSuper(this, _class, arguments);
      }
      _inherits(_class, _superclass);
      return _createClass(_class, [{
        key: "createShipment",
        value: (
        /**
         * Creates a shipment and associated UPS waybill.
         *
         * @param {Object} payload The payload object according to the UPS API standards.
         * @param {Object} options An object of options to configure the request.
         * @returns {Object} The HTTP response object.
         * @see https://www.ups.com/upsdeveloperkit?loc=en_US
         */
        function () {
          var _createShipment = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(payload) {
            var options,
              url,
              response,
              _args = arguments;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  options = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
                  url = "".concat(this.baseUrl, "shipments/").concat(this.version, "/ship");
                  _context.next = 4;
                  return this.post(url, _objectSpread2(_objectSpread2({}, options), {}, {
                    dataJ: {
                      ShipmentRequest: payload
                    }
                  }));
                case 4:
                  response = _context.sent;
                  return _context.abrupt("return", response);
                case 6:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function createShipment(_x) {
            return _createShipment.apply(this, arguments);
          }
          return createShipment;
        }()
        /**
         * Cancels (voids) an existing shipment and associated UPS waybill.
         *
         * @param {String} trackingNumber The tracking number of the shipment/waybill.
         * @param {Object} options An object of options to configure the request.
         * @returns {Object} The HTTP response object.
         * @see https://www.ups.com/upsdeveloperkit?loc=en_US
         */
        )
      }, {
        key: "cancelShipment",
        value: (function () {
          var _cancelShipment = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(trackingNumber) {
            var options,
              url,
              response,
              _args2 = arguments;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  options = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : {};
                  url = "".concat(this.baseUrl, "shipments/").concat(this.version, "/void/cancel/").concat(trackingNumber);
                  _context2.next = 4;
                  return this["delete"](url, options);
                case 4:
                  response = _context2.sent;
                  return _context2.abrupt("return", response);
                case 6:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function cancelShipment(_x2) {
            return _cancelShipment.apply(this, arguments);
          }
          return cancelShipment;
        }()
        /**
         * Gets the waybill for an existing shipment.
         *
         * @param {String} trackingNumber The tracking number of the shipment/waybill.
         * @param {Object} options An object of options to configure the request.
         * @returns {Object} The HTTP response object.
         * @see https://www.ups.com/upsdeveloperkit?loc=en_US
         */
        )
      }, {
        key: "getWaybill",
        value: (function () {
          var _getWaybill = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(trackingNumber) {
            var _ref,
              _ref$format,
              format,
              options,
              url,
              response,
              _args3 = arguments;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  _ref = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : {}, _ref$format = _ref.format, format = _ref$format === void 0 ? "pdf" : _ref$format, options = _objectWithoutProperties(_ref, _excluded);
                  url = "".concat(this.baseUrl, "labels/").concat(this.version, "/recovery");
                  _context3.next = 4;
                  return this.post(url, _objectSpread2(_objectSpread2({}, options), {}, {
                    dataJ: {
                      LabelRecoveryRequest: {
                        TrackingNumber: String(trackingNumber),
                        LabelSpecification: {
                          LabelImageFormat: {
                            Code: format.toUpperCase()
                          }
                        }
                      }
                    }
                  }));
                case 4:
                  response = _context3.sent;
                  return _context3.abrupt("return", response);
                case 6:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this);
          }));
          function getWaybill(_x3) {
            return _getWaybill.apply(this, arguments);
          }
          return getWaybill;
        }())
      }]);
    }(superclass);
  };

  /**
   * Shipment was picked up.
   */
  var STATUS_PICKUP = "P";

  /**
   * Shipment out for delivery.
   */
  var STATUS_OUT_FOR_DELIVERY = "O";

  /**
   * Shipment in transit.
   */
  var STATUS_IN_TRANSIT = "I";

  /**
   * Shipment exception.
   */
  var STATUS_EXCEPTION = "X";

  /**
   * Shipment delivered.
   */
  var STATUS_DELIVERED = "D";

  /**
   * Shipment returned to shipper.
   */
  var STATUS_RETURNED = "RS";
  var TrackingAPI = function TrackingAPI(superclass) {
    return /*#__PURE__*/function (_superclass) {
      function _class() {
        _classCallCheck(this, _class);
        return _callSuper(this, _class, arguments);
      }
      _inherits(_class, _superclass);
      return _createClass(_class, [{
        key: "getTrackingDetails",
        value: (
        /**
         * Gets the tracking information for an existing shipment.
         *
         * @param {String} trackingNumber The tracking number of the shipment/waybill.
         * @param {Object} options An object of options to configure the request.
         * @returns {Object} The HTTP response object.
         * @see https://www.ups.com/upsdeveloperkit?loc=en_US
         */
        function () {
          var _getTrackingDetails = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(trackingNumber) {
            var options,
              url,
              response,
              _args = arguments;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  options = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
                  url = "".concat(this.baseUrl, "track/").concat(this.version, "/details/").concat(trackingNumber);
                  _context.next = 4;
                  return this.get(url, options);
                case 4:
                  response = _context.sent;
                  return _context.abrupt("return", response);
                case 6:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function getTrackingDetails(_x) {
            return _getTrackingDetails.apply(this, arguments);
          }
          return getTrackingDetails;
        }()
        /**
         * Gets the tracking URL given a tracking number.
         *
         * @param {String} trackingNumber The tracking number of the shipment/waybill.
         * @returns {String} The tracking URL.
         * @see https://www.ups.com/upsdeveloperkit?loc=en_US
         */
        )
      }, {
        key: "getTrackingUrl",
        value: function getTrackingUrl(trackingNumber) {
          return "https://www.ups.com/track?InquiryNumber1=".concat(trackingNumber);
        }
      }]);
    }(superclass);
  };

  /**
   * The base auth URL used for the OAuth token request.
   */
  var AUTH_URL = "https://onlinetools.ups.com/";

  /**
   * The base URL used for API requests.
   */
  var BASE_URL = "https://onlinetools.ups.com/api/";

  /**
   * The version of the API to use.
   */
  var API_VERSION = "v1";

  /**
   * The application grant type to obtain the token.
   */
  var GRANT_TYPE = "client_credentials";
  var API = /*#__PURE__*/function (_mix$with) {
    function API() {
      var _this;
      var kwargs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      _classCallCheck(this, API);
      _this = _callSuper(this, API, [kwargs]);
      _this.authUrl = conf("UPS_AUTH_URL", AUTH_URL);
      _this.baseUrl = conf("UPS_BASE_URL", BASE_URL);
      _this.version = conf("UPS_API_VERSION", API_VERSION);
      _this.clientId = conf("UPS_CLIENT_ID", null);
      _this.clientSecret = conf("UPS_CLIENT_SECRET", null);
      _this.grantType = conf("UPS_GRANT_TYPE", GRANT_TYPE);
      _this.token = conf("UPS_TOKEN", null);
      _this.transactionSrc = conf("UPS_TRANSACTION_SRC", null);
      _this.authUrl = kwargs.authUrl === undefined ? _this.authUrl : kwargs.authUrl;
      _this.baseUrl = kwargs.baseUrl === undefined ? _this.baseUrl : kwargs.baseUrl;
      _this.version = kwargs.version === undefined ? _this.version : kwargs.version;
      _this.clientId = kwargs.clientId === undefined ? _this.clientId : kwargs.clientId;
      _this.clientSecret = kwargs.clientSecret === undefined ? _this.clientSecret : kwargs.clientSecret;
      _this.token = kwargs.token === undefined ? _this.token : kwargs.token;
      _this.transactionSrc = kwargs.transactionSrc === undefined ? _this.transactionSrc : kwargs.transactionSrc;
      return _this;
    }
    _inherits(API, _mix$with);
    return _createClass(API, [{
      key: "build",
      value: function () {
        var _build = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(method, url) {
          var options,
            transactionSrc,
            _args = arguments;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                options = _args.length > 2 && _args[2] !== undefined ? _args[2] : {};
                _context.next = 3;
                return _get(_getPrototypeOf(API.prototype), "build", this).call(this, method, url, options);
              case 3:
                if (this.token) options.headers.Authorization = this._bearerAuth();
                transactionSrc = options.headers.transactionSrc || this.transactionSrc;
                if (transactionSrc) options.headers.transactionSrc = transactionSrc;

                // add some fields to the header that UPS requires
                if (!options.headers.transId) options.headers.transId = this.makeid(14);
                if (!options.headers.transactionSrc) options.headers.transactionSrc = 'DEFAULT';
              case 8:
              case "end":
                return _context.stop();
            }
          }, _callee, this);
        }));
        function build(_x, _x2) {
          return _build.apply(this, arguments);
        }
        return build;
      }()
    }, {
      key: "makeid",
      value: function makeid(len) {
        var result = '';
        var _char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charLen = _char.length;
        for (var i = 0; i < len; i++) {
          result += _char.charAt(Math.floor(Math.random() * charLen));
        }
        return result;
      }
    }, {
      key: "authCallback",
      value: function () {
        var _authCallback = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(params, headers) {
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                // forces the refetch of the authorization
                // token from the auth API
                this.token = null;
                _context2.next = 3;
                return this.getToken();
              case 3:
              case "end":
                return _context2.stop();
            }
          }, _callee2, this);
        }));
        function authCallback(_x3, _x4) {
          return _authCallback.apply(this, arguments);
        }
        return authCallback;
      }()
    }, {
      key: "getToken",
      value: function () {
        var _getToken = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
          var url, data, options, contents;
          return _regeneratorRuntime().wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
              case 0:
                if (!this.token) {
                  _context3.next = 2;
                  break;
                }
                return _context3.abrupt("return", this.token);
              case 2:
                url = "".concat(this.authUrl, "security/").concat(this.version, "/oauth/token");
                data = "grant_type=".concat(this.grantType);
                options = {
                  headers: {
                    Authorization: this._basicAuth()
                  },
                  data: data,
                  mime: "application/x-www-form-urlencoded"
                };
                _context3.next = 7;
                return this.post(url, options);
              case 7:
                contents = _context3.sent;
                this.token = contents.access_token;
                return _context3.abrupt("return", this.token);
              case 10:
              case "end":
                return _context3.stop();
            }
          }, _callee3, this);
        }));
        function getToken() {
          return _getToken.apply(this, arguments);
        }
        return getToken;
      }()
    }, {
      key: "_handleResponse",
      value: function () {
        var _handleResponse2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(response) {
          var errorMessage,
            result,
            error,
            _args4 = arguments;
          return _regeneratorRuntime().wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
              case 0:
                errorMessage = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : "Problem in request";
                _context4.next = 3;
                return this._getResult(response);
              case 3:
                result = _context4.sent;
                if (response.ok) {
                  _context4.next = 8;
                  break;
                }
                error = null;
                try {
                  error = JSON.stringify(result);
                } catch (_unused) {
                  error = errorMessage;
                }
                throw new OperationalError(error, response.status || 500);
              case 8:
                return _context4.abrupt("return", result);
              case 9:
              case "end":
                return _context4.stop();
            }
          }, _callee4, this);
        }));
        function _handleResponse(_x5) {
          return _handleResponse2.apply(this, arguments);
        }
        return _handleResponse;
      }()
      /**
       * Obtains the response object from the provided response making sure that the
       * content type is respected when doing so.
       *
       * @param {Response} response The HTTP response resulting from the request
       * made by the API client
       * @returns {Object|String|Blob} The parsed result value for the provided
       * response object taking into account the content type of it.
       */
    }, {
      key: "_getResult",
      value: (function () {
        var _getResult2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(response) {
          var result;
          return _regeneratorRuntime().wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
              case 0:
                result = null;
                if (!(response.headers.get("content-type") && response.headers.get("content-type").toLowerCase().startsWith("application/json"))) {
                  _context5.next = 7;
                  break;
                }
                _context5.next = 4;
                return response.json();
              case 4:
                result = _context5.sent;
                _context5.next = 16;
                break;
              case 7:
                if (!(response.headers.get("content-type") && response.headers.get("content-type").toLowerCase().startsWith("text/"))) {
                  _context5.next = 13;
                  break;
                }
                _context5.next = 10;
                return response.text();
              case 10:
                result = _context5.sent;
                _context5.next = 16;
                break;
              case 13:
                _context5.next = 15;
                return response.blob();
              case 15:
                result = _context5.sent;
              case 16:
                return _context5.abrupt("return", result);
              case 17:
              case "end":
                return _context5.stop();
            }
          }, _callee5);
        }));
        function _getResult(_x6) {
          return _getResult2.apply(this, arguments);
        }
        return _getResult;
      }())
    }, {
      key: "_basicAuth",
      value: function _basicAuth() {
        var auth = Buffer.from("".concat(this.clientId, ":").concat(this.clientSecret)).toString("base64");
        return "Basic ".concat(auth);
      }
    }, {
      key: "_bearerAuth",
      value: function _bearerAuth() {
        return "Bearer ".concat(this.token);
      }
    }], [{
      key: "load",
      value: function () {
        var _load2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
          return _regeneratorRuntime().wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return load();
              case 2:
              case "end":
                return _context6.stop();
            }
          }, _callee6);
        }));
        function load$1() {
          return _load2.apply(this, arguments);
        }
        return load$1;
      }()
    }]);
  }(mix(API$1)["with"](LocatorAPI, PaperlessAPI, PickupAPI, ShipmentAPI, TrackingAPI));

  exports.ACCESS_POINT_SEARCH = ACCESS_POINT_SEARCH;
  exports.API = API;
  exports.AUTH_FORM_DOC_TYPE = AUTH_FORM_DOC_TYPE;
  exports.CERTIFICATE_ORIGIN_DOC_TYPE = CERTIFICATE_ORIGIN_DOC_TYPE;
  exports.CLOSEST_POINT_SEARCH = CLOSEST_POINT_SEARCH;
  exports.CUSTOMER_BOX_PACKAGING_TYPE = CUSTOMER_BOX_PACKAGING_TYPE;
  exports.DECLARATION_DOC_TYPE = DECLARATION_DOC_TYPE;
  exports.DUTIES_CHARGE_TYPE = DUTIES_CHARGE_TYPE;
  exports.EXPORT_ACCOMPANYING_DOC_TYPE = EXPORT_ACCOMPANYING_DOC_TYPE;
  exports.EXPORT_LICENSE_DOC_TYPE = EXPORT_LICENSE_DOC_TYPE;
  exports.EXPRESS_BOX_PACKAGING_TYPE = EXPRESS_BOX_PACKAGING_TYPE;
  exports.EXPRESS_SERVICE_CODE = EXPRESS_SERVICE_CODE;
  exports.FREIGHT_SHIPMENT_TYPE = FREIGHT_SHIPMENT_TYPE;
  exports.IMPORT_PERMIT_DOC_TYPE = IMPORT_PERMIT_DOC_TYPE;
  exports.INTERNATIONAL_FORM_TYPE = INTERNATIONAL_FORM_TYPE;
  exports.INVOICE_DOC_TYPE = INVOICE_DOC_TYPE;
  exports.KGS_TYPE = KGS_TYPE;
  exports.LBS_TYPE = LBS_TYPE;
  exports.LETTER_INSTRUCTION_DOC_TYPE = LETTER_INSTRUCTION_DOC_TYPE;
  exports.LocatorAPI = LocatorAPI;
  exports.NOTIFY_ACCESS_POINT_DELIVERY = NOTIFY_ACCESS_POINT_DELIVERY;
  exports.NOTIFY_DELIVERY = NOTIFY_DELIVERY;
  exports.NOTIFY_EXCEPTION = NOTIFY_EXCEPTION;
  exports.NOTIFY_IN_TRANSIT = NOTIFY_IN_TRANSIT;
  exports.NOTIFY_SHIP = NOTIFY_SHIP;
  exports.ONE_TIME_NAFTA_DOC_TYPE = ONE_TIME_NAFTA_DOC_TYPE;
  exports.OTHER_DOC_TYPE = OTHER_DOC_TYPE;
  exports.PACKING_LIST_DOC_TYPE = PACKING_LIST_DOC_TYPE;
  exports.PAK_BOX_PACKAGING_TYPE = PAK_BOX_PACKAGING_TYPE;
  exports.POWER_ATTORNEY_DOC_TYPE = POWER_ATTORNEY_DOC_TYPE;
  exports.PRODUCTION_CODE = PRODUCTION_CODE;
  exports.PURCHASE_ORDER = PURCHASE_ORDER;
  exports.PaperlessAPI = PaperlessAPI;
  exports.PickupAPI = PickupAPI;
  exports.REASON_FOR_EXPORT = REASON_FOR_EXPORT;
  exports.RETURN_PRL = RETURN_PRL;
  exports.SAVER_SERVICE_CODE = SAVER_SERVICE_CODE;
  exports.SED_DOC_TYPE = SED_DOC_TYPE;
  exports.SHIPMENT_HOLD_ACCESS_POINT = SHIPMENT_HOLD_ACCESS_POINT;
  exports.SMALL_PACKAGE_SHIPMENT_TYPE = SMALL_PACKAGE_SHIPMENT_TYPE;
  exports.STANDARD_SERVICE_CODE = STANDARD_SERVICE_CODE;
  exports.STATUS_DELIVERED = STATUS_DELIVERED;
  exports.STATUS_EXCEPTION = STATUS_EXCEPTION;
  exports.STATUS_IN_TRANSIT = STATUS_IN_TRANSIT;
  exports.STATUS_OUT_FOR_DELIVERY = STATUS_OUT_FOR_DELIVERY;
  exports.STATUS_PICKUP = STATUS_PICKUP;
  exports.STATUS_RETURNED = STATUS_RETURNED;
  exports.ShipmentAPI = ShipmentAPI;
  exports.TRANSPORTATION_CHARGE_TYPE = TRANSPORTATION_CHARGE_TYPE;
  exports.TrackingAPI = TrackingAPI;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=ups-api.umd.js.map
