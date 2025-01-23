import { createGlobalThemeContract as Vt, createTheme as Ut } from "@vanilla-extract/css";
import './index.css';var Vr = { exports: {} }, Xe = {}, mr = { exports: {} }, m = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dt;
function Yt() {
  if (dt) return m;
  dt = 1;
  var V = Symbol.for("react.element"), v = Symbol.for("react.portal"), Ee = Symbol.for("react.fragment"), Q = Symbol.for("react.strict_mode"), de = Symbol.for("react.profiler"), te = Symbol.for("react.provider"), ne = Symbol.for("react.context"), Z = Symbol.for("react.forward_ref"), $ = Symbol.for("react.suspense"), ee = Symbol.for("react.memo"), L = Symbol.for("react.lazy"), U = Symbol.iterator;
  function re(n) {
    return n === null || typeof n != "object" ? null : (n = U && n[U] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var H = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, se = Object.assign, xe = {};
  function ae(n, i, _) {
    this.props = n, this.context = i, this.refs = xe, this.updater = _ || H;
  }
  ae.prototype.isReactComponent = {}, ae.prototype.setState = function(n, i) {
    if (typeof n != "object" && typeof n != "function" && n != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, n, i, "setState");
  }, ae.prototype.forceUpdate = function(n) {
    this.updater.enqueueForceUpdate(this, n, "forceUpdate");
  };
  function oe() {
  }
  oe.prototype = ae.prototype;
  function I(n, i, _) {
    this.props = n, this.context = i, this.refs = xe, this.updater = _ || H;
  }
  var he = I.prototype = new oe();
  he.constructor = I, se(he, ae.prototype), he.isPureReactComponent = !0;
  var ue = Array.isArray, M = Object.prototype.hasOwnProperty, K = { current: null }, ce = { key: !0, ref: !0, __self: !0, __source: !0 };
  function pe(n, i, _) {
    var b, R = {}, k = null, O = null;
    if (i != null) for (b in i.ref !== void 0 && (O = i.ref), i.key !== void 0 && (k = "" + i.key), i) M.call(i, b) && !ce.hasOwnProperty(b) && (R[b] = i[b]);
    var T = arguments.length - 2;
    if (T === 1) R.children = _;
    else if (1 < T) {
      for (var w = Array(T), N = 0; N < T; N++) w[N] = arguments[N + 2];
      R.children = w;
    }
    if (n && n.defaultProps) for (b in T = n.defaultProps, T) R[b] === void 0 && (R[b] = T[b]);
    return { $$typeof: V, type: n, key: k, ref: O, props: R, _owner: K.current };
  }
  function Re(n, i) {
    return { $$typeof: V, type: n.type, key: i, ref: n.ref, props: n.props, _owner: n._owner };
  }
  function Ce(n) {
    return typeof n == "object" && n !== null && n.$$typeof === V;
  }
  function Ue(n) {
    var i = { "=": "=0", ":": "=2" };
    return "$" + n.replace(/[=:]/g, function(_) {
      return i[_];
    });
  }
  var we = /\/+/g;
  function G(n, i) {
    return typeof n == "object" && n !== null && n.key != null ? Ue("" + n.key) : i.toString(36);
  }
  function J(n, i, _, b, R) {
    var k = typeof n;
    (k === "undefined" || k === "boolean") && (n = null);
    var O = !1;
    if (n === null) O = !0;
    else switch (k) {
      case "string":
      case "number":
        O = !0;
        break;
      case "object":
        switch (n.$$typeof) {
          case V:
          case v:
            O = !0;
        }
    }
    if (O) return O = n, R = R(O), n = b === "" ? "." + G(O, 0) : b, ue(R) ? (_ = "", n != null && (_ = n.replace(we, "$&/") + "/"), J(R, i, _, "", function(N) {
      return N;
    })) : R != null && (Ce(R) && (R = Re(R, _ + (!R.key || O && O.key === R.key ? "" : ("" + R.key).replace(we, "$&/") + "/") + n)), i.push(R)), 1;
    if (O = 0, b = b === "" ? "." : b + ":", ue(n)) for (var T = 0; T < n.length; T++) {
      k = n[T];
      var w = b + G(k, T);
      O += J(k, i, _, w, R);
    }
    else if (w = re(n), typeof w == "function") for (n = w.call(n), T = 0; !(k = n.next()).done; ) k = k.value, w = b + G(k, T++), O += J(k, i, _, w, R);
    else if (k === "object") throw i = String(n), Error("Objects are not valid as a React child (found: " + (i === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : i) + "). If you meant to render a collection of children, use an array instead.");
    return O;
  }
  function Y(n, i, _) {
    if (n == null) return n;
    var b = [], R = 0;
    return J(n, b, "", "", function(k) {
      return i.call(_, k, R++);
    }), b;
  }
  function ie(n) {
    if (n._status === -1) {
      var i = n._result;
      i = i(), i.then(function(_) {
        (n._status === 0 || n._status === -1) && (n._status = 1, n._result = _);
      }, function(_) {
        (n._status === 0 || n._status === -1) && (n._status = 2, n._result = _);
      }), n._status === -1 && (n._status = 0, n._result = i);
    }
    if (n._status === 1) return n._result.default;
    throw n._result;
  }
  var d = { current: null }, fe = { transition: null }, Se = { ReactCurrentDispatcher: d, ReactCurrentBatchConfig: fe, ReactCurrentOwner: K };
  function ve() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return m.Children = { map: Y, forEach: function(n, i, _) {
    Y(n, function() {
      i.apply(this, arguments);
    }, _);
  }, count: function(n) {
    var i = 0;
    return Y(n, function() {
      i++;
    }), i;
  }, toArray: function(n) {
    return Y(n, function(i) {
      return i;
    }) || [];
  }, only: function(n) {
    if (!Ce(n)) throw Error("React.Children.only expected to receive a single React element child.");
    return n;
  } }, m.Component = ae, m.Fragment = Ee, m.Profiler = de, m.PureComponent = I, m.StrictMode = Q, m.Suspense = $, m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Se, m.act = ve, m.cloneElement = function(n, i, _) {
    if (n == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + n + ".");
    var b = se({}, n.props), R = n.key, k = n.ref, O = n._owner;
    if (i != null) {
      if (i.ref !== void 0 && (k = i.ref, O = K.current), i.key !== void 0 && (R = "" + i.key), n.type && n.type.defaultProps) var T = n.type.defaultProps;
      for (w in i) M.call(i, w) && !ce.hasOwnProperty(w) && (b[w] = i[w] === void 0 && T !== void 0 ? T[w] : i[w]);
    }
    var w = arguments.length - 2;
    if (w === 1) b.children = _;
    else if (1 < w) {
      T = Array(w);
      for (var N = 0; N < w; N++) T[N] = arguments[N + 2];
      b.children = T;
    }
    return { $$typeof: V, type: n.type, key: R, ref: k, props: b, _owner: O };
  }, m.createContext = function(n) {
    return n = { $$typeof: ne, _currentValue: n, _currentValue2: n, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, n.Provider = { $$typeof: te, _context: n }, n.Consumer = n;
  }, m.createElement = pe, m.createFactory = function(n) {
    var i = pe.bind(null, n);
    return i.type = n, i;
  }, m.createRef = function() {
    return { current: null };
  }, m.forwardRef = function(n) {
    return { $$typeof: Z, render: n };
  }, m.isValidElement = Ce, m.lazy = function(n) {
    return { $$typeof: L, _payload: { _status: -1, _result: n }, _init: ie };
  }, m.memo = function(n, i) {
    return { $$typeof: ee, type: n, compare: i === void 0 ? null : i };
  }, m.startTransition = function(n) {
    var i = fe.transition;
    fe.transition = {};
    try {
      n();
    } finally {
      fe.transition = i;
    }
  }, m.unstable_act = ve, m.useCallback = function(n, i) {
    return d.current.useCallback(n, i);
  }, m.useContext = function(n) {
    return d.current.useContext(n);
  }, m.useDebugValue = function() {
  }, m.useDeferredValue = function(n) {
    return d.current.useDeferredValue(n);
  }, m.useEffect = function(n, i) {
    return d.current.useEffect(n, i);
  }, m.useId = function() {
    return d.current.useId();
  }, m.useImperativeHandle = function(n, i, _) {
    return d.current.useImperativeHandle(n, i, _);
  }, m.useInsertionEffect = function(n, i) {
    return d.current.useInsertionEffect(n, i);
  }, m.useLayoutEffect = function(n, i) {
    return d.current.useLayoutEffect(n, i);
  }, m.useMemo = function(n, i) {
    return d.current.useMemo(n, i);
  }, m.useReducer = function(n, i, _) {
    return d.current.useReducer(n, i, _);
  }, m.useRef = function(n) {
    return d.current.useRef(n);
  }, m.useState = function(n) {
    return d.current.useState(n);
  }, m.useSyncExternalStore = function(n, i, _) {
    return d.current.useSyncExternalStore(n, i, _);
  }, m.useTransition = function() {
    return d.current.useTransition();
  }, m.version = "18.3.1", m;
}
var Ze = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Ze.exports;
var pt;
function Bt() {
  return pt || (pt = 1, function(V, v) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var Ee = "18.3.1", Q = Symbol.for("react.element"), de = Symbol.for("react.portal"), te = Symbol.for("react.fragment"), ne = Symbol.for("react.strict_mode"), Z = Symbol.for("react.profiler"), $ = Symbol.for("react.provider"), ee = Symbol.for("react.context"), L = Symbol.for("react.forward_ref"), U = Symbol.for("react.suspense"), re = Symbol.for("react.suspense_list"), H = Symbol.for("react.memo"), se = Symbol.for("react.lazy"), xe = Symbol.for("react.offscreen"), ae = Symbol.iterator, oe = "@@iterator";
      function I(e) {
        if (e === null || typeof e != "object")
          return null;
        var r = ae && e[ae] || e[oe];
        return typeof r == "function" ? r : null;
      }
      var he = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, ue = {
        transition: null
      }, M = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, K = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, ce = {}, pe = null;
      function Re(e) {
        pe = e;
      }
      ce.setExtraStackFrame = function(e) {
        pe = e;
      }, ce.getCurrentStack = null, ce.getStackAddendum = function() {
        var e = "";
        pe && (e += pe);
        var r = ce.getCurrentStack;
        return r && (e += r() || ""), e;
      };
      var Ce = !1, Ue = !1, we = !1, G = !1, J = !1, Y = {
        ReactCurrentDispatcher: he,
        ReactCurrentBatchConfig: ue,
        ReactCurrentOwner: K
      };
      Y.ReactDebugCurrentFrame = ce, Y.ReactCurrentActQueue = M;
      function ie(e) {
        {
          for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
            a[o - 1] = arguments[o];
          fe("warn", e, a);
        }
      }
      function d(e) {
        {
          for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
            a[o - 1] = arguments[o];
          fe("error", e, a);
        }
      }
      function fe(e, r, a) {
        {
          var o = Y.ReactDebugCurrentFrame, s = o.getStackAddendum();
          s !== "" && (r += "%s", a = a.concat([s]));
          var p = a.map(function(l) {
            return String(l);
          });
          p.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, p);
        }
      }
      var Se = {};
      function ve(e, r) {
        {
          var a = e.constructor, o = a && (a.displayName || a.name) || "ReactClass", s = o + "." + r;
          if (Se[s])
            return;
          d("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", r, o), Se[s] = !0;
        }
      }
      var n = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(e) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(e, r, a) {
          ve(e, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(e, r, a, o) {
          ve(e, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(e, r, a, o) {
          ve(e, "setState");
        }
      }, i = Object.assign, _ = {};
      Object.freeze(_);
      function b(e, r, a) {
        this.props = e, this.context = r, this.refs = _, this.updater = a || n;
      }
      b.prototype.isReactComponent = {}, b.prototype.setState = function(e, r) {
        if (typeof e != "object" && typeof e != "function" && e != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, e, r, "setState");
      }, b.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
      };
      {
        var R = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, k = function(e, r) {
          Object.defineProperty(b.prototype, e, {
            get: function() {
              ie("%s(...) is deprecated in plain JavaScript React classes. %s", r[0], r[1]);
            }
          });
        };
        for (var O in R)
          R.hasOwnProperty(O) && k(O, R[O]);
      }
      function T() {
      }
      T.prototype = b.prototype;
      function w(e, r, a) {
        this.props = e, this.context = r, this.refs = _, this.updater = a || n;
      }
      var N = w.prototype = new T();
      N.constructor = w, i(N, b.prototype), N.isPureReactComponent = !0;
      function _r() {
        var e = {
          current: null
        };
        return Object.seal(e), e;
      }
      var er = Array.isArray;
      function De(e) {
        return er(e);
      }
      function gr(e) {
        {
          var r = typeof Symbol == "function" && Symbol.toStringTag, a = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
          return a;
        }
      }
      function Ie(e) {
        try {
          return me(e), !1;
        } catch {
          return !0;
        }
      }
      function me(e) {
        return "" + e;
      }
      function Te(e) {
        if (Ie(e))
          return d("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", gr(e)), me(e);
      }
      function rr(e, r, a) {
        var o = e.displayName;
        if (o)
          return o;
        var s = r.displayName || r.name || "";
        return s !== "" ? a + "(" + s + ")" : a;
      }
      function Oe(e) {
        return e.displayName || "Context";
      }
      function le(e) {
        if (e == null)
          return null;
        if (typeof e.tag == "number" && d("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
          return e.displayName || e.name || null;
        if (typeof e == "string")
          return e;
        switch (e) {
          case te:
            return "Fragment";
          case de:
            return "Portal";
          case Z:
            return "Profiler";
          case ne:
            return "StrictMode";
          case U:
            return "Suspense";
          case re:
            return "SuspenseList";
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case ee:
              var r = e;
              return Oe(r) + ".Consumer";
            case $:
              var a = e;
              return Oe(a._context) + ".Provider";
            case L:
              return rr(e, e.render, "ForwardRef");
            case H:
              var o = e.displayName || null;
              return o !== null ? o : le(e.type) || "Memo";
            case se: {
              var s = e, p = s._payload, l = s._init;
              try {
                return le(l(p));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var Pe = Object.prototype.hasOwnProperty, Fe = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, tr, nr, $e;
      $e = {};
      function Ye(e) {
        if (Pe.call(e, "ref")) {
          var r = Object.getOwnPropertyDescriptor(e, "ref").get;
          if (r && r.isReactWarning)
            return !1;
        }
        return e.ref !== void 0;
      }
      function Be(e) {
        if (Pe.call(e, "key")) {
          var r = Object.getOwnPropertyDescriptor(e, "key").get;
          if (r && r.isReactWarning)
            return !1;
        }
        return e.key !== void 0;
      }
      function br(e, r) {
        var a = function() {
          tr || (tr = !0, d("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: a,
          configurable: !0
        });
      }
      function ar(e, r) {
        var a = function() {
          nr || (nr = !0, d("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: a,
          configurable: !0
        });
      }
      function or(e) {
        if (typeof e.ref == "string" && K.current && e.__self && K.current.stateNode !== e.__self) {
          var r = le(K.current.type);
          $e[r] || (d('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', r, e.ref), $e[r] = !0);
        }
      }
      var ze = function(e, r, a, o, s, p, l) {
        var y = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: Q,
          // Built-in properties that belong on the element
          type: e,
          key: r,
          ref: a,
          props: l,
          // Record the component responsible for creating this element.
          _owner: p
        };
        return y._store = {}, Object.defineProperty(y._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(y, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: o
        }), Object.defineProperty(y, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: s
        }), Object.freeze && (Object.freeze(y.props), Object.freeze(y)), y;
      };
      function Er(e, r, a) {
        var o, s = {}, p = null, l = null, y = null, E = null;
        if (r != null) {
          Ye(r) && (l = r.ref, or(r)), Be(r) && (Te(r.key), p = "" + r.key), y = r.__self === void 0 ? null : r.__self, E = r.__source === void 0 ? null : r.__source;
          for (o in r)
            Pe.call(r, o) && !Fe.hasOwnProperty(o) && (s[o] = r[o]);
        }
        var P = arguments.length - 2;
        if (P === 1)
          s.children = a;
        else if (P > 1) {
          for (var j = Array(P), A = 0; A < P; A++)
            j[A] = arguments[A + 2];
          Object.freeze && Object.freeze(j), s.children = j;
        }
        if (e && e.defaultProps) {
          var D = e.defaultProps;
          for (o in D)
            s[o] === void 0 && (s[o] = D[o]);
        }
        if (p || l) {
          var W = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          p && br(s, W), l && ar(s, W);
        }
        return ze(e, p, l, y, E, K.current, s);
      }
      function Rr(e, r) {
        var a = ze(e.type, r, e.ref, e._self, e._source, e._owner, e.props);
        return a;
      }
      function Cr(e, r, a) {
        if (e == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
        var o, s = i({}, e.props), p = e.key, l = e.ref, y = e._self, E = e._source, P = e._owner;
        if (r != null) {
          Ye(r) && (l = r.ref, P = K.current), Be(r) && (Te(r.key), p = "" + r.key);
          var j;
          e.type && e.type.defaultProps && (j = e.type.defaultProps);
          for (o in r)
            Pe.call(r, o) && !Fe.hasOwnProperty(o) && (r[o] === void 0 && j !== void 0 ? s[o] = j[o] : s[o] = r[o]);
        }
        var A = arguments.length - 2;
        if (A === 1)
          s.children = a;
        else if (A > 1) {
          for (var D = Array(A), W = 0; W < A; W++)
            D[W] = arguments[W + 2];
          s.children = D;
        }
        return ze(e.type, p, l, y, E, P, s);
      }
      function _e(e) {
        return typeof e == "object" && e !== null && e.$$typeof === Q;
      }
      var ur = ".", wr = ":";
      function qe(e) {
        var r = /[=:]/g, a = {
          "=": "=0",
          ":": "=2"
        }, o = e.replace(r, function(s) {
          return a[s];
        });
        return "$" + o;
      }
      var Ke = !1, ge = /\/+/g;
      function Le(e) {
        return e.replace(ge, "$&/");
      }
      function ke(e, r) {
        return typeof e == "object" && e !== null && e.key != null ? (Te(e.key), qe("" + e.key)) : r.toString(36);
      }
      function je(e, r, a, o, s) {
        var p = typeof e;
        (p === "undefined" || p === "boolean") && (e = null);
        var l = !1;
        if (e === null)
          l = !0;
        else
          switch (p) {
            case "string":
            case "number":
              l = !0;
              break;
            case "object":
              switch (e.$$typeof) {
                case Q:
                case de:
                  l = !0;
              }
          }
        if (l) {
          var y = e, E = s(y), P = o === "" ? ur + ke(y, 0) : o;
          if (De(E)) {
            var j = "";
            P != null && (j = Le(P) + "/"), je(E, r, j, "", function(Wt) {
              return Wt;
            });
          } else E != null && (_e(E) && (E.key && (!y || y.key !== E.key) && Te(E.key), E = Rr(
            E,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            a + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (E.key && (!y || y.key !== E.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              Le("" + E.key) + "/"
            ) : "") + P
          )), r.push(E));
          return 1;
        }
        var A, D, W = 0, z = o === "" ? ur : o + wr;
        if (De(e))
          for (var hr = 0; hr < e.length; hr++)
            A = e[hr], D = z + ke(A, hr), W += je(A, r, a, D, s);
        else {
          var Wr = I(e);
          if (typeof Wr == "function") {
            var ct = e;
            Wr === ct.entries && (Ke || ie("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Ke = !0);
            for (var Mt = Wr.call(ct), ft, Nt = 0; !(ft = Mt.next()).done; )
              A = ft.value, D = z + ke(A, Nt++), W += je(A, r, a, D, s);
          } else if (p === "object") {
            var lt = String(e);
            throw new Error("Objects are not valid as a React child (found: " + (lt === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : lt) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return W;
      }
      function Me(e, r, a) {
        if (e == null)
          return e;
        var o = [], s = 0;
        return je(e, o, "", "", function(p) {
          return r.call(a, p, s++);
        }), o;
      }
      function ir(e) {
        var r = 0;
        return Me(e, function() {
          r++;
        }), r;
      }
      function Sr(e, r, a) {
        Me(e, function() {
          r.apply(this, arguments);
        }, a);
      }
      function sr(e) {
        return Me(e, function(r) {
          return r;
        }) || [];
      }
      function cr(e) {
        if (!_e(e))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return e;
      }
      function Tr(e) {
        var r = {
          $$typeof: ee,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: e,
          _currentValue2: e,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        r.Provider = {
          $$typeof: $,
          _context: r
        };
        var a = !1, o = !1, s = !1;
        {
          var p = {
            $$typeof: ee,
            _context: r
          };
          Object.defineProperties(p, {
            Provider: {
              get: function() {
                return o || (o = !0, d("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), r.Provider;
              },
              set: function(l) {
                r.Provider = l;
              }
            },
            _currentValue: {
              get: function() {
                return r._currentValue;
              },
              set: function(l) {
                r._currentValue = l;
              }
            },
            _currentValue2: {
              get: function() {
                return r._currentValue2;
              },
              set: function(l) {
                r._currentValue2 = l;
              }
            },
            _threadCount: {
              get: function() {
                return r._threadCount;
              },
              set: function(l) {
                r._threadCount = l;
              }
            },
            Consumer: {
              get: function() {
                return a || (a = !0, d("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), r.Consumer;
              }
            },
            displayName: {
              get: function() {
                return r.displayName;
              },
              set: function(l) {
                s || (ie("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", l), s = !0);
              }
            }
          }), r.Consumer = p;
        }
        return r._currentRenderer = null, r._currentRenderer2 = null, r;
      }
      var Ae = -1, Ne = 0, He = 1, Or = 2;
      function Pr(e) {
        if (e._status === Ae) {
          var r = e._result, a = r();
          if (a.then(function(p) {
            if (e._status === Ne || e._status === Ae) {
              var l = e;
              l._status = He, l._result = p;
            }
          }, function(p) {
            if (e._status === Ne || e._status === Ae) {
              var l = e;
              l._status = Or, l._result = p;
            }
          }), e._status === Ae) {
            var o = e;
            o._status = Ne, o._result = a;
          }
        }
        if (e._status === He) {
          var s = e._result;
          return s === void 0 && d(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, s), "default" in s || d(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, s), s.default;
        } else
          throw e._result;
      }
      function kr(e) {
        var r = {
          // We use these fields to store the result.
          _status: Ae,
          _result: e
        }, a = {
          $$typeof: se,
          _payload: r,
          _init: Pr
        };
        {
          var o, s;
          Object.defineProperties(a, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return o;
              },
              set: function(p) {
                d("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), o = p, Object.defineProperty(a, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return s;
              },
              set: function(p) {
                d("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), s = p, Object.defineProperty(a, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return a;
      }
      function jr(e) {
        e != null && e.$$typeof === H ? d("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof e != "function" ? d("forwardRef requires a render function but was given %s.", e === null ? "null" : typeof e) : e.length !== 0 && e.length !== 2 && d("forwardRef render functions accept exactly two parameters: props and ref. %s", e.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), e != null && (e.defaultProps != null || e.propTypes != null) && d("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var r = {
          $$typeof: L,
          render: e
        };
        {
          var a;
          Object.defineProperty(r, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return a;
            },
            set: function(o) {
              a = o, !e.name && !e.displayName && (e.displayName = o);
            }
          });
        }
        return r;
      }
      var t;
      t = Symbol.for("react.module.reference");
      function u(e) {
        return !!(typeof e == "string" || typeof e == "function" || e === te || e === Z || J || e === ne || e === U || e === re || G || e === xe || Ce || Ue || we || typeof e == "object" && e !== null && (e.$$typeof === se || e.$$typeof === H || e.$$typeof === $ || e.$$typeof === ee || e.$$typeof === L || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        e.$$typeof === t || e.getModuleId !== void 0));
      }
      function c(e, r) {
        u(e) || d("memo: The first argument must be a component. Instead received: %s", e === null ? "null" : typeof e);
        var a = {
          $$typeof: H,
          type: e,
          compare: r === void 0 ? null : r
        };
        {
          var o;
          Object.defineProperty(a, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return o;
            },
            set: function(s) {
              o = s, !e.name && !e.displayName && (e.displayName = s);
            }
          });
        }
        return a;
      }
      function f() {
        var e = he.current;
        return e === null && d(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), e;
      }
      function C(e) {
        var r = f();
        if (e._context !== void 0) {
          var a = e._context;
          a.Consumer === e ? d("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : a.Provider === e && d("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return r.useContext(e);
      }
      function S(e) {
        var r = f();
        return r.useState(e);
      }
      function g(e, r, a) {
        var o = f();
        return o.useReducer(e, r, a);
      }
      function h(e) {
        var r = f();
        return r.useRef(e);
      }
      function B(e, r) {
        var a = f();
        return a.useEffect(e, r);
      }
      function x(e, r) {
        var a = f();
        return a.useInsertionEffect(e, r);
      }
      function F(e, r) {
        var a = f();
        return a.useLayoutEffect(e, r);
      }
      function X(e, r) {
        var a = f();
        return a.useCallback(e, r);
      }
      function be(e, r) {
        var a = f();
        return a.useMemo(e, r);
      }
      function ye(e, r, a) {
        var o = f();
        return o.useImperativeHandle(e, r, a);
      }
      function q(e, r) {
        {
          var a = f();
          return a.useDebugValue(e, r);
        }
      }
      function Ge() {
        var e = f();
        return e.useTransition();
      }
      function Ar(e) {
        var r = f();
        return r.useDeferredValue(e);
      }
      function xr() {
        var e = f();
        return e.useId();
      }
      function gt(e, r, a) {
        var o = f();
        return o.useSyncExternalStore(e, r, a);
      }
      var Je = 0, Ur, Yr, Br, zr, qr, Kr, Hr;
      function Gr() {
      }
      Gr.__reactDisabledLog = !0;
      function bt() {
        {
          if (Je === 0) {
            Ur = console.log, Yr = console.info, Br = console.warn, zr = console.error, qr = console.group, Kr = console.groupCollapsed, Hr = console.groupEnd;
            var e = {
              configurable: !0,
              enumerable: !0,
              value: Gr,
              writable: !0
            };
            Object.defineProperties(console, {
              info: e,
              log: e,
              warn: e,
              error: e,
              group: e,
              groupCollapsed: e,
              groupEnd: e
            });
          }
          Je++;
        }
      }
      function Et() {
        {
          if (Je--, Je === 0) {
            var e = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: i({}, e, {
                value: Ur
              }),
              info: i({}, e, {
                value: Yr
              }),
              warn: i({}, e, {
                value: Br
              }),
              error: i({}, e, {
                value: zr
              }),
              group: i({}, e, {
                value: qr
              }),
              groupCollapsed: i({}, e, {
                value: Kr
              }),
              groupEnd: i({}, e, {
                value: Hr
              })
            });
          }
          Je < 0 && d("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var Dr = Y.ReactCurrentDispatcher, Ir;
      function fr(e, r, a) {
        {
          if (Ir === void 0)
            try {
              throw Error();
            } catch (s) {
              var o = s.stack.trim().match(/\n( *(at )?)/);
              Ir = o && o[1] || "";
            }
          return `
` + Ir + e;
        }
      }
      var Fr = !1, lr;
      {
        var Rt = typeof WeakMap == "function" ? WeakMap : Map;
        lr = new Rt();
      }
      function Jr(e, r) {
        if (!e || Fr)
          return "";
        {
          var a = lr.get(e);
          if (a !== void 0)
            return a;
        }
        var o;
        Fr = !0;
        var s = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var p;
        p = Dr.current, Dr.current = null, bt();
        try {
          if (r) {
            var l = function() {
              throw Error();
            };
            if (Object.defineProperty(l.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(l, []);
              } catch (z) {
                o = z;
              }
              Reflect.construct(e, [], l);
            } else {
              try {
                l.call();
              } catch (z) {
                o = z;
              }
              e.call(l.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (z) {
              o = z;
            }
            e();
          }
        } catch (z) {
          if (z && o && typeof z.stack == "string") {
            for (var y = z.stack.split(`
`), E = o.stack.split(`
`), P = y.length - 1, j = E.length - 1; P >= 1 && j >= 0 && y[P] !== E[j]; )
              j--;
            for (; P >= 1 && j >= 0; P--, j--)
              if (y[P] !== E[j]) {
                if (P !== 1 || j !== 1)
                  do
                    if (P--, j--, j < 0 || y[P] !== E[j]) {
                      var A = `
` + y[P].replace(" at new ", " at ");
                      return e.displayName && A.includes("<anonymous>") && (A = A.replace("<anonymous>", e.displayName)), typeof e == "function" && lr.set(e, A), A;
                    }
                  while (P >= 1 && j >= 0);
                break;
              }
          }
        } finally {
          Fr = !1, Dr.current = p, Et(), Error.prepareStackTrace = s;
        }
        var D = e ? e.displayName || e.name : "", W = D ? fr(D) : "";
        return typeof e == "function" && lr.set(e, W), W;
      }
      function Ct(e, r, a) {
        return Jr(e, !1);
      }
      function wt(e) {
        var r = e.prototype;
        return !!(r && r.isReactComponent);
      }
      function dr(e, r, a) {
        if (e == null)
          return "";
        if (typeof e == "function")
          return Jr(e, wt(e));
        if (typeof e == "string")
          return fr(e);
        switch (e) {
          case U:
            return fr("Suspense");
          case re:
            return fr("SuspenseList");
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case L:
              return Ct(e.render);
            case H:
              return dr(e.type, r, a);
            case se: {
              var o = e, s = o._payload, p = o._init;
              try {
                return dr(p(s), r, a);
              } catch {
              }
            }
          }
        return "";
      }
      var Xr = {}, Qr = Y.ReactDebugCurrentFrame;
      function pr(e) {
        if (e) {
          var r = e._owner, a = dr(e.type, e._source, r ? r.type : null);
          Qr.setExtraStackFrame(a);
        } else
          Qr.setExtraStackFrame(null);
      }
      function St(e, r, a, o, s) {
        {
          var p = Function.call.bind(Pe);
          for (var l in e)
            if (p(e, l)) {
              var y = void 0;
              try {
                if (typeof e[l] != "function") {
                  var E = Error((o || "React class") + ": " + a + " type `" + l + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[l] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw E.name = "Invariant Violation", E;
                }
                y = e[l](r, l, o, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (P) {
                y = P;
              }
              y && !(y instanceof Error) && (pr(s), d("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", a, l, typeof y), pr(null)), y instanceof Error && !(y.message in Xr) && (Xr[y.message] = !0, pr(s), d("Failed %s type: %s", a, y.message), pr(null));
            }
        }
      }
      function We(e) {
        if (e) {
          var r = e._owner, a = dr(e.type, e._source, r ? r.type : null);
          Re(a);
        } else
          Re(null);
      }
      var $r;
      $r = !1;
      function Zr() {
        if (K.current) {
          var e = le(K.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
      function Tt(e) {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), a = e.lineNumber;
          return `

Check your code at ` + r + ":" + a + ".";
        }
        return "";
      }
      function Ot(e) {
        return e != null ? Tt(e.__source) : "";
      }
      var et = {};
      function Pt(e) {
        var r = Zr();
        if (!r) {
          var a = typeof e == "string" ? e : e.displayName || e.name;
          a && (r = `

Check the top-level render call using <` + a + ">.");
        }
        return r;
      }
      function rt(e, r) {
        if (!(!e._store || e._store.validated || e.key != null)) {
          e._store.validated = !0;
          var a = Pt(r);
          if (!et[a]) {
            et[a] = !0;
            var o = "";
            e && e._owner && e._owner !== K.current && (o = " It was passed a child from " + le(e._owner.type) + "."), We(e), d('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', a, o), We(null);
          }
        }
      }
      function tt(e, r) {
        if (typeof e == "object") {
          if (De(e))
            for (var a = 0; a < e.length; a++) {
              var o = e[a];
              _e(o) && rt(o, r);
            }
          else if (_e(e))
            e._store && (e._store.validated = !0);
          else if (e) {
            var s = I(e);
            if (typeof s == "function" && s !== e.entries)
              for (var p = s.call(e), l; !(l = p.next()).done; )
                _e(l.value) && rt(l.value, r);
          }
        }
      }
      function nt(e) {
        {
          var r = e.type;
          if (r == null || typeof r == "string")
            return;
          var a;
          if (typeof r == "function")
            a = r.propTypes;
          else if (typeof r == "object" && (r.$$typeof === L || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          r.$$typeof === H))
            a = r.propTypes;
          else
            return;
          if (a) {
            var o = le(r);
            St(a, e.props, "prop", o, e);
          } else if (r.PropTypes !== void 0 && !$r) {
            $r = !0;
            var s = le(r);
            d("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", s || "Unknown");
          }
          typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && d("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function kt(e) {
        {
          for (var r = Object.keys(e.props), a = 0; a < r.length; a++) {
            var o = r[a];
            if (o !== "children" && o !== "key") {
              We(e), d("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", o), We(null);
              break;
            }
          }
          e.ref !== null && (We(e), d("Invalid attribute `ref` supplied to `React.Fragment`."), We(null));
        }
      }
      function at(e, r, a) {
        var o = u(e);
        if (!o) {
          var s = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (s += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var p = Ot(r);
          p ? s += p : s += Zr();
          var l;
          e === null ? l = "null" : De(e) ? l = "array" : e !== void 0 && e.$$typeof === Q ? (l = "<" + (le(e.type) || "Unknown") + " />", s = " Did you accidentally export a JSX literal instead of a component?") : l = typeof e, d("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", l, s);
        }
        var y = Er.apply(this, arguments);
        if (y == null)
          return y;
        if (o)
          for (var E = 2; E < arguments.length; E++)
            tt(arguments[E], e);
        return e === te ? kt(y) : nt(y), y;
      }
      var ot = !1;
      function jt(e) {
        var r = at.bind(null, e);
        return r.type = e, ot || (ot = !0, ie("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(r, "type", {
          enumerable: !1,
          get: function() {
            return ie("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: e
            }), e;
          }
        }), r;
      }
      function At(e, r, a) {
        for (var o = Cr.apply(this, arguments), s = 2; s < arguments.length; s++)
          tt(arguments[s], o.type);
        return nt(o), o;
      }
      function xt(e, r) {
        var a = ue.transition;
        ue.transition = {};
        var o = ue.transition;
        ue.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          e();
        } finally {
          if (ue.transition = a, a === null && o._updatedFibers) {
            var s = o._updatedFibers.size;
            s > 10 && ie("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), o._updatedFibers.clear();
          }
        }
      }
      var ut = !1, vr = null;
      function Dt(e) {
        if (vr === null)
          try {
            var r = ("require" + Math.random()).slice(0, 7), a = V && V[r];
            vr = a.call(V, "timers").setImmediate;
          } catch {
            vr = function(s) {
              ut === !1 && (ut = !0, typeof MessageChannel > "u" && d("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var p = new MessageChannel();
              p.port1.onmessage = s, p.port2.postMessage(void 0);
            };
          }
        return vr(e);
      }
      var Ve = 0, it = !1;
      function st(e) {
        {
          var r = Ve;
          Ve++, M.current === null && (M.current = []);
          var a = M.isBatchingLegacy, o;
          try {
            if (M.isBatchingLegacy = !0, o = e(), !a && M.didScheduleLegacyUpdate) {
              var s = M.current;
              s !== null && (M.didScheduleLegacyUpdate = !1, Nr(s));
            }
          } catch (D) {
            throw yr(r), D;
          } finally {
            M.isBatchingLegacy = a;
          }
          if (o !== null && typeof o == "object" && typeof o.then == "function") {
            var p = o, l = !1, y = {
              then: function(D, W) {
                l = !0, p.then(function(z) {
                  yr(r), Ve === 0 ? Lr(z, D, W) : D(z);
                }, function(z) {
                  yr(r), W(z);
                });
              }
            };
            return !it && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              l || (it = !0, d("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), y;
          } else {
            var E = o;
            if (yr(r), Ve === 0) {
              var P = M.current;
              P !== null && (Nr(P), M.current = null);
              var j = {
                then: function(D, W) {
                  M.current === null ? (M.current = [], Lr(E, D, W)) : D(E);
                }
              };
              return j;
            } else {
              var A = {
                then: function(D, W) {
                  D(E);
                }
              };
              return A;
            }
          }
        }
      }
      function yr(e) {
        e !== Ve - 1 && d("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Ve = e;
      }
      function Lr(e, r, a) {
        {
          var o = M.current;
          if (o !== null)
            try {
              Nr(o), Dt(function() {
                o.length === 0 ? (M.current = null, r(e)) : Lr(e, r, a);
              });
            } catch (s) {
              a(s);
            }
          else
            r(e);
        }
      }
      var Mr = !1;
      function Nr(e) {
        if (!Mr) {
          Mr = !0;
          var r = 0;
          try {
            for (; r < e.length; r++) {
              var a = e[r];
              do
                a = a(!0);
              while (a !== null);
            }
            e.length = 0;
          } catch (o) {
            throw e = e.slice(r + 1), o;
          } finally {
            Mr = !1;
          }
        }
      }
      var It = at, Ft = At, $t = jt, Lt = {
        map: Me,
        forEach: Sr,
        count: ir,
        toArray: sr,
        only: cr
      };
      v.Children = Lt, v.Component = b, v.Fragment = te, v.Profiler = Z, v.PureComponent = w, v.StrictMode = ne, v.Suspense = U, v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Y, v.act = st, v.cloneElement = Ft, v.createContext = Tr, v.createElement = It, v.createFactory = $t, v.createRef = _r, v.forwardRef = jr, v.isValidElement = _e, v.lazy = kr, v.memo = c, v.startTransition = xt, v.unstable_act = st, v.useCallback = X, v.useContext = C, v.useDebugValue = q, v.useDeferredValue = Ar, v.useEffect = B, v.useId = xr, v.useImperativeHandle = ye, v.useInsertionEffect = x, v.useLayoutEffect = F, v.useMemo = be, v.useReducer = g, v.useRef = h, v.useState = S, v.useSyncExternalStore = gt, v.useTransition = Ge, v.version = Ee, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Ze, Ze.exports)), Ze.exports;
}
var vt;
function mt() {
  return vt || (vt = 1, process.env.NODE_ENV === "production" ? mr.exports = Yt() : mr.exports = Bt()), mr.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yt;
function zt() {
  if (yt) return Xe;
  yt = 1;
  var V = mt(), v = Symbol.for("react.element"), Ee = Symbol.for("react.fragment"), Q = Object.prototype.hasOwnProperty, de = V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, te = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ne(Z, $, ee) {
    var L, U = {}, re = null, H = null;
    ee !== void 0 && (re = "" + ee), $.key !== void 0 && (re = "" + $.key), $.ref !== void 0 && (H = $.ref);
    for (L in $) Q.call($, L) && !te.hasOwnProperty(L) && (U[L] = $[L]);
    if (Z && Z.defaultProps) for (L in $ = Z.defaultProps, $) U[L] === void 0 && (U[L] = $[L]);
    return { $$typeof: v, type: Z, key: re, ref: H, props: U, _owner: de.current };
  }
  return Xe.Fragment = Ee, Xe.jsx = ne, Xe.jsxs = ne, Xe;
}
var Qe = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ht;
function qt() {
  return ht || (ht = 1, process.env.NODE_ENV !== "production" && function() {
    var V = mt(), v = Symbol.for("react.element"), Ee = Symbol.for("react.portal"), Q = Symbol.for("react.fragment"), de = Symbol.for("react.strict_mode"), te = Symbol.for("react.profiler"), ne = Symbol.for("react.provider"), Z = Symbol.for("react.context"), $ = Symbol.for("react.forward_ref"), ee = Symbol.for("react.suspense"), L = Symbol.for("react.suspense_list"), U = Symbol.for("react.memo"), re = Symbol.for("react.lazy"), H = Symbol.for("react.offscreen"), se = Symbol.iterator, xe = "@@iterator";
    function ae(t) {
      if (t === null || typeof t != "object")
        return null;
      var u = se && t[se] || t[xe];
      return typeof u == "function" ? u : null;
    }
    var oe = V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function I(t) {
      {
        for (var u = arguments.length, c = new Array(u > 1 ? u - 1 : 0), f = 1; f < u; f++)
          c[f - 1] = arguments[f];
        he("error", t, c);
      }
    }
    function he(t, u, c) {
      {
        var f = oe.ReactDebugCurrentFrame, C = f.getStackAddendum();
        C !== "" && (u += "%s", c = c.concat([C]));
        var S = c.map(function(g) {
          return String(g);
        });
        S.unshift("Warning: " + u), Function.prototype.apply.call(console[t], console, S);
      }
    }
    var ue = !1, M = !1, K = !1, ce = !1, pe = !1, Re;
    Re = Symbol.for("react.module.reference");
    function Ce(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === Q || t === te || pe || t === de || t === ee || t === L || ce || t === H || ue || M || K || typeof t == "object" && t !== null && (t.$$typeof === re || t.$$typeof === U || t.$$typeof === ne || t.$$typeof === Z || t.$$typeof === $ || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      t.$$typeof === Re || t.getModuleId !== void 0));
    }
    function Ue(t, u, c) {
      var f = t.displayName;
      if (f)
        return f;
      var C = u.displayName || u.name || "";
      return C !== "" ? c + "(" + C + ")" : c;
    }
    function we(t) {
      return t.displayName || "Context";
    }
    function G(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && I("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
      switch (t) {
        case Q:
          return "Fragment";
        case Ee:
          return "Portal";
        case te:
          return "Profiler";
        case de:
          return "StrictMode";
        case ee:
          return "Suspense";
        case L:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case Z:
            var u = t;
            return we(u) + ".Consumer";
          case ne:
            var c = t;
            return we(c._context) + ".Provider";
          case $:
            return Ue(t, t.render, "ForwardRef");
          case U:
            var f = t.displayName || null;
            return f !== null ? f : G(t.type) || "Memo";
          case re: {
            var C = t, S = C._payload, g = C._init;
            try {
              return G(g(S));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var J = Object.assign, Y = 0, ie, d, fe, Se, ve, n, i;
    function _() {
    }
    _.__reactDisabledLog = !0;
    function b() {
      {
        if (Y === 0) {
          ie = console.log, d = console.info, fe = console.warn, Se = console.error, ve = console.group, n = console.groupCollapsed, i = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: _,
            writable: !0
          };
          Object.defineProperties(console, {
            info: t,
            log: t,
            warn: t,
            error: t,
            group: t,
            groupCollapsed: t,
            groupEnd: t
          });
        }
        Y++;
      }
    }
    function R() {
      {
        if (Y--, Y === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: J({}, t, {
              value: ie
            }),
            info: J({}, t, {
              value: d
            }),
            warn: J({}, t, {
              value: fe
            }),
            error: J({}, t, {
              value: Se
            }),
            group: J({}, t, {
              value: ve
            }),
            groupCollapsed: J({}, t, {
              value: n
            }),
            groupEnd: J({}, t, {
              value: i
            })
          });
        }
        Y < 0 && I("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var k = oe.ReactCurrentDispatcher, O;
    function T(t, u, c) {
      {
        if (O === void 0)
          try {
            throw Error();
          } catch (C) {
            var f = C.stack.trim().match(/\n( *(at )?)/);
            O = f && f[1] || "";
          }
        return `
` + O + t;
      }
    }
    var w = !1, N;
    {
      var _r = typeof WeakMap == "function" ? WeakMap : Map;
      N = new _r();
    }
    function er(t, u) {
      if (!t || w)
        return "";
      {
        var c = N.get(t);
        if (c !== void 0)
          return c;
      }
      var f;
      w = !0;
      var C = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var S;
      S = k.current, k.current = null, b();
      try {
        if (u) {
          var g = function() {
            throw Error();
          };
          if (Object.defineProperty(g.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(g, []);
            } catch (q) {
              f = q;
            }
            Reflect.construct(t, [], g);
          } else {
            try {
              g.call();
            } catch (q) {
              f = q;
            }
            t.call(g.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (q) {
            f = q;
          }
          t();
        }
      } catch (q) {
        if (q && f && typeof q.stack == "string") {
          for (var h = q.stack.split(`
`), B = f.stack.split(`
`), x = h.length - 1, F = B.length - 1; x >= 1 && F >= 0 && h[x] !== B[F]; )
            F--;
          for (; x >= 1 && F >= 0; x--, F--)
            if (h[x] !== B[F]) {
              if (x !== 1 || F !== 1)
                do
                  if (x--, F--, F < 0 || h[x] !== B[F]) {
                    var X = `
` + h[x].replace(" at new ", " at ");
                    return t.displayName && X.includes("<anonymous>") && (X = X.replace("<anonymous>", t.displayName)), typeof t == "function" && N.set(t, X), X;
                  }
                while (x >= 1 && F >= 0);
              break;
            }
        }
      } finally {
        w = !1, k.current = S, R(), Error.prepareStackTrace = C;
      }
      var be = t ? t.displayName || t.name : "", ye = be ? T(be) : "";
      return typeof t == "function" && N.set(t, ye), ye;
    }
    function De(t, u, c) {
      return er(t, !1);
    }
    function gr(t) {
      var u = t.prototype;
      return !!(u && u.isReactComponent);
    }
    function Ie(t, u, c) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return er(t, gr(t));
      if (typeof t == "string")
        return T(t);
      switch (t) {
        case ee:
          return T("Suspense");
        case L:
          return T("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case $:
            return De(t.render);
          case U:
            return Ie(t.type, u, c);
          case re: {
            var f = t, C = f._payload, S = f._init;
            try {
              return Ie(S(C), u, c);
            } catch {
            }
          }
        }
      return "";
    }
    var me = Object.prototype.hasOwnProperty, Te = {}, rr = oe.ReactDebugCurrentFrame;
    function Oe(t) {
      if (t) {
        var u = t._owner, c = Ie(t.type, t._source, u ? u.type : null);
        rr.setExtraStackFrame(c);
      } else
        rr.setExtraStackFrame(null);
    }
    function le(t, u, c, f, C) {
      {
        var S = Function.call.bind(me);
        for (var g in t)
          if (S(t, g)) {
            var h = void 0;
            try {
              if (typeof t[g] != "function") {
                var B = Error((f || "React class") + ": " + c + " type `" + g + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[g] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw B.name = "Invariant Violation", B;
              }
              h = t[g](u, g, f, c, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (x) {
              h = x;
            }
            h && !(h instanceof Error) && (Oe(C), I("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", f || "React class", c, g, typeof h), Oe(null)), h instanceof Error && !(h.message in Te) && (Te[h.message] = !0, Oe(C), I("Failed %s type: %s", c, h.message), Oe(null));
          }
      }
    }
    var Pe = Array.isArray;
    function Fe(t) {
      return Pe(t);
    }
    function tr(t) {
      {
        var u = typeof Symbol == "function" && Symbol.toStringTag, c = u && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return c;
      }
    }
    function nr(t) {
      try {
        return $e(t), !1;
      } catch {
        return !0;
      }
    }
    function $e(t) {
      return "" + t;
    }
    function Ye(t) {
      if (nr(t))
        return I("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", tr(t)), $e(t);
    }
    var Be = oe.ReactCurrentOwner, br = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ar, or;
    function ze(t) {
      if (me.call(t, "ref")) {
        var u = Object.getOwnPropertyDescriptor(t, "ref").get;
        if (u && u.isReactWarning)
          return !1;
      }
      return t.ref !== void 0;
    }
    function Er(t) {
      if (me.call(t, "key")) {
        var u = Object.getOwnPropertyDescriptor(t, "key").get;
        if (u && u.isReactWarning)
          return !1;
      }
      return t.key !== void 0;
    }
    function Rr(t, u) {
      typeof t.ref == "string" && Be.current;
    }
    function Cr(t, u) {
      {
        var c = function() {
          ar || (ar = !0, I("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", u));
        };
        c.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: c,
          configurable: !0
        });
      }
    }
    function _e(t, u) {
      {
        var c = function() {
          or || (or = !0, I("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", u));
        };
        c.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: c,
          configurable: !0
        });
      }
    }
    var ur = function(t, u, c, f, C, S, g) {
      var h = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: v,
        // Built-in properties that belong on the element
        type: t,
        key: u,
        ref: c,
        props: g,
        // Record the component responsible for creating this element.
        _owner: S
      };
      return h._store = {}, Object.defineProperty(h._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(h, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: f
      }), Object.defineProperty(h, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: C
      }), Object.freeze && (Object.freeze(h.props), Object.freeze(h)), h;
    };
    function wr(t, u, c, f, C) {
      {
        var S, g = {}, h = null, B = null;
        c !== void 0 && (Ye(c), h = "" + c), Er(u) && (Ye(u.key), h = "" + u.key), ze(u) && (B = u.ref, Rr(u, C));
        for (S in u)
          me.call(u, S) && !br.hasOwnProperty(S) && (g[S] = u[S]);
        if (t && t.defaultProps) {
          var x = t.defaultProps;
          for (S in x)
            g[S] === void 0 && (g[S] = x[S]);
        }
        if (h || B) {
          var F = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          h && Cr(g, F), B && _e(g, F);
        }
        return ur(t, h, B, C, f, Be.current, g);
      }
    }
    var qe = oe.ReactCurrentOwner, Ke = oe.ReactDebugCurrentFrame;
    function ge(t) {
      if (t) {
        var u = t._owner, c = Ie(t.type, t._source, u ? u.type : null);
        Ke.setExtraStackFrame(c);
      } else
        Ke.setExtraStackFrame(null);
    }
    var Le;
    Le = !1;
    function ke(t) {
      return typeof t == "object" && t !== null && t.$$typeof === v;
    }
    function je() {
      {
        if (qe.current) {
          var t = G(qe.current.type);
          if (t)
            return `

Check the render method of \`` + t + "`.";
        }
        return "";
      }
    }
    function Me(t) {
      return "";
    }
    var ir = {};
    function Sr(t) {
      {
        var u = je();
        if (!u) {
          var c = typeof t == "string" ? t : t.displayName || t.name;
          c && (u = `

Check the top-level render call using <` + c + ">.");
        }
        return u;
      }
    }
    function sr(t, u) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var c = Sr(u);
        if (ir[c])
          return;
        ir[c] = !0;
        var f = "";
        t && t._owner && t._owner !== qe.current && (f = " It was passed a child from " + G(t._owner.type) + "."), ge(t), I('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', c, f), ge(null);
      }
    }
    function cr(t, u) {
      {
        if (typeof t != "object")
          return;
        if (Fe(t))
          for (var c = 0; c < t.length; c++) {
            var f = t[c];
            ke(f) && sr(f, u);
          }
        else if (ke(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var C = ae(t);
          if (typeof C == "function" && C !== t.entries)
            for (var S = C.call(t), g; !(g = S.next()).done; )
              ke(g.value) && sr(g.value, u);
        }
      }
    }
    function Tr(t) {
      {
        var u = t.type;
        if (u == null || typeof u == "string")
          return;
        var c;
        if (typeof u == "function")
          c = u.propTypes;
        else if (typeof u == "object" && (u.$$typeof === $ || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        u.$$typeof === U))
          c = u.propTypes;
        else
          return;
        if (c) {
          var f = G(u);
          le(c, t.props, "prop", f, t);
        } else if (u.PropTypes !== void 0 && !Le) {
          Le = !0;
          var C = G(u);
          I("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", C || "Unknown");
        }
        typeof u.getDefaultProps == "function" && !u.getDefaultProps.isReactClassApproved && I("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ae(t) {
      {
        for (var u = Object.keys(t.props), c = 0; c < u.length; c++) {
          var f = u[c];
          if (f !== "children" && f !== "key") {
            ge(t), I("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", f), ge(null);
            break;
          }
        }
        t.ref !== null && (ge(t), I("Invalid attribute `ref` supplied to `React.Fragment`."), ge(null));
      }
    }
    var Ne = {};
    function He(t, u, c, f, C, S) {
      {
        var g = Ce(t);
        if (!g) {
          var h = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (h += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var B = Me();
          B ? h += B : h += je();
          var x;
          t === null ? x = "null" : Fe(t) ? x = "array" : t !== void 0 && t.$$typeof === v ? (x = "<" + (G(t.type) || "Unknown") + " />", h = " Did you accidentally export a JSX literal instead of a component?") : x = typeof t, I("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", x, h);
        }
        var F = wr(t, u, c, C, S);
        if (F == null)
          return F;
        if (g) {
          var X = u.children;
          if (X !== void 0)
            if (f)
              if (Fe(X)) {
                for (var be = 0; be < X.length; be++)
                  cr(X[be], t);
                Object.freeze && Object.freeze(X);
              } else
                I("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              cr(X, t);
        }
        if (me.call(u, "key")) {
          var ye = G(t), q = Object.keys(u).filter(function(xr) {
            return xr !== "key";
          }), Ge = q.length > 0 ? "{key: someKey, " + q.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ne[ye + Ge]) {
            var Ar = q.length > 0 ? "{" + q.join(": ..., ") + ": ...}" : "{}";
            I(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ge, ye, Ar, ye), Ne[ye + Ge] = !0;
          }
        }
        return t === Q ? Ae(F) : Tr(F), F;
      }
    }
    function Or(t, u, c) {
      return He(t, u, c, !0);
    }
    function Pr(t, u, c) {
      return He(t, u, c, !1);
    }
    var kr = Pr, jr = Or;
    Qe.Fragment = Q, Qe.jsx = kr, Qe.jsxs = jr;
  }()), Qe;
}
process.env.NODE_ENV === "production" ? Vr.exports = zt() : Vr.exports = qt();
var Kt = Vr.exports, Ht = "_1904ba0", Xt = "_1904ba1";
const Qt = (V) => /* @__PURE__ */ Kt.jsx("button", { type: "button", className: [Ht, V.className].join(" "), children: V.children }), _t = {
  color: {
    brand: "blue"
  }
}, Gt = Vt(
  _t,
  (V, v) => v.join("-")
), Zt = (V) => Ut(Gt, {
  ..._t,
  ...V
});
export {
  Qt as Button,
  Gt as THEME,
  _t as TOKENS,
  Zt as createButtonTheme,
  Xt as redThemeClass
};
//# sourceMappingURL=index.js.map
