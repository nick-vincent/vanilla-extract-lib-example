import './index.css';var bi = Object.defineProperty;
var ea = (a) => {
  throw TypeError(a);
};
var wi = (a, e, t) => e in a ? bi(a, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : a[e] = t;
var fe = (a, e, t) => wi(a, typeof e != "symbol" ? e + "" : e, t), sn = (a, e, t) => e.has(a) || ea("Cannot " + t);
var u = (a, e, t) => (sn(a, e, "read from private field"), t ? t.call(a) : e.get(a)), J = (a, e, t) => e.has(a) ? ea("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(a) : e.set(a, t), L = (a, e, t, r) => (sn(a, e, "write to private field"), r ? r.call(a, t) : e.set(a, t), t), P = (a, e, t) => (sn(a, e, "access private method"), t);
var Or = (a, e, t, r) => ({
  set _(n) {
    L(a, e, n, t);
  },
  get _() {
    return u(a, e, r);
  }
});
function xa(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a;
}
var dn = { exports: {} }, Kt = {}, Rr = { exports: {} }, Y = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ta;
function Ci() {
  if (ta) return Y;
  ta = 1;
  var a = Symbol.for("react.element"), e = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), n = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), s = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), d = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), y = Symbol.iterator;
  function A(p) {
    return p === null || typeof p != "object" ? null : (p = y && p[y] || p["@@iterator"], typeof p == "function" ? p : null);
  }
  var _ = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, j = Object.assign, F = {};
  function E(p, w, q) {
    this.props = p, this.context = w, this.refs = F, this.updater = q || _;
  }
  E.prototype.isReactComponent = {}, E.prototype.setState = function(p, w) {
    if (typeof p != "object" && typeof p != "function" && p != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, p, w, "setState");
  }, E.prototype.forceUpdate = function(p) {
    this.updater.enqueueForceUpdate(this, p, "forceUpdate");
  };
  function O() {
  }
  O.prototype = E.prototype;
  function k(p, w, q) {
    this.props = p, this.context = w, this.refs = F, this.updater = q || _;
  }
  var U = k.prototype = new O();
  U.constructor = k, j(U, E.prototype), U.isPureReactComponent = !0;
  var M = Array.isArray, N = Object.prototype.hasOwnProperty, B = { current: null }, ce = { key: !0, ref: !0, __self: !0, __source: !0 };
  function re(p, w, q) {
    var H, X = {}, ie = null, ne = null;
    if (w != null) for (H in w.ref !== void 0 && (ne = w.ref), w.key !== void 0 && (ie = "" + w.key), w) N.call(w, H) && !ce.hasOwnProperty(H) && (X[H] = w[H]);
    var te = arguments.length - 2;
    if (te === 1) X.children = q;
    else if (1 < te) {
      for (var Q = Array(te), me = 0; me < te; me++) Q[me] = arguments[me + 2];
      X.children = Q;
    }
    if (p && p.defaultProps) for (H in te = p.defaultProps, te) X[H] === void 0 && (X[H] = te[H]);
    return { $$typeof: a, type: p, key: ie, ref: ne, props: X, _owner: B.current };
  }
  function Re(p, w) {
    return { $$typeof: a, type: p.type, key: w, ref: p.ref, props: p.props, _owner: p._owner };
  }
  function Le(p) {
    return typeof p == "object" && p !== null && p.$$typeof === a;
  }
  function Ze(p) {
    var w = { "=": "=0", ":": "=2" };
    return "$" + p.replace(/[=:]/g, function(q) {
      return w[q];
    });
  }
  var dt = /\/+/g;
  function Te(p, w) {
    return typeof p == "object" && p !== null && p.key != null ? Ze("" + p.key) : w.toString(36);
  }
  function xe(p, w, q, H, X) {
    var ie = typeof p;
    (ie === "undefined" || ie === "boolean") && (p = null);
    var ne = !1;
    if (p === null) ne = !0;
    else switch (ie) {
      case "string":
      case "number":
        ne = !0;
        break;
      case "object":
        switch (p.$$typeof) {
          case a:
          case e:
            ne = !0;
        }
    }
    if (ne) return ne = p, X = X(ne), p = H === "" ? "." + Te(ne, 0) : H, M(X) ? (q = "", p != null && (q = p.replace(dt, "$&/") + "/"), xe(X, w, q, "", function(me) {
      return me;
    })) : X != null && (Le(X) && (X = Re(X, q + (!X.key || ne && ne.key === X.key ? "" : ("" + X.key).replace(dt, "$&/") + "/") + p)), w.push(X)), 1;
    if (ne = 0, H = H === "" ? "." : H + ":", M(p)) for (var te = 0; te < p.length; te++) {
      ie = p[te];
      var Q = H + Te(ie, te);
      ne += xe(ie, w, q, Q, X);
    }
    else if (Q = A(p), typeof Q == "function") for (p = Q.call(p), te = 0; !(ie = p.next()).done; ) ie = ie.value, Q = H + Te(ie, te++), ne += xe(ie, w, q, Q, X);
    else if (ie === "object") throw w = String(p), Error("Objects are not valid as a React child (found: " + (w === "[object Object]" ? "object with keys {" + Object.keys(p).join(", ") + "}" : w) + "). If you meant to render a collection of children, use an array instead.");
    return ne;
  }
  function Se(p, w, q) {
    if (p == null) return p;
    var H = [], X = 0;
    return xe(p, H, "", "", function(ie) {
      return w.call(q, ie, X++);
    }), H;
  }
  function $e(p) {
    if (p._status === -1) {
      var w = p._result;
      w = w(), w.then(function(q) {
        (p._status === 0 || p._status === -1) && (p._status = 1, p._result = q);
      }, function(q) {
        (p._status === 0 || p._status === -1) && (p._status = 2, p._result = q);
      }), p._status === -1 && (p._status = 0, p._result = w);
    }
    if (p._status === 1) return p._result.default;
    throw p._result;
  }
  var D = { current: null }, Je = { transition: null }, pt = { ReactCurrentDispatcher: D, ReactCurrentBatchConfig: Je, ReactCurrentOwner: B };
  function Qe() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return Y.Children = { map: Se, forEach: function(p, w, q) {
    Se(p, function() {
      w.apply(this, arguments);
    }, q);
  }, count: function(p) {
    var w = 0;
    return Se(p, function() {
      w++;
    }), w;
  }, toArray: function(p) {
    return Se(p, function(w) {
      return w;
    }) || [];
  }, only: function(p) {
    if (!Le(p)) throw Error("React.Children.only expected to receive a single React element child.");
    return p;
  } }, Y.Component = E, Y.Fragment = t, Y.Profiler = n, Y.PureComponent = k, Y.StrictMode = r, Y.Suspense = l, Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = pt, Y.act = Qe, Y.cloneElement = function(p, w, q) {
    if (p == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + p + ".");
    var H = j({}, p.props), X = p.key, ie = p.ref, ne = p._owner;
    if (w != null) {
      if (w.ref !== void 0 && (ie = w.ref, ne = B.current), w.key !== void 0 && (X = "" + w.key), p.type && p.type.defaultProps) var te = p.type.defaultProps;
      for (Q in w) N.call(w, Q) && !ce.hasOwnProperty(Q) && (H[Q] = w[Q] === void 0 && te !== void 0 ? te[Q] : w[Q]);
    }
    var Q = arguments.length - 2;
    if (Q === 1) H.children = q;
    else if (1 < Q) {
      te = Array(Q);
      for (var me = 0; me < Q; me++) te[me] = arguments[me + 2];
      H.children = te;
    }
    return { $$typeof: a, type: p.type, key: X, ref: ie, props: H, _owner: ne };
  }, Y.createContext = function(p) {
    return p = { $$typeof: s, _currentValue: p, _currentValue2: p, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, p.Provider = { $$typeof: o, _context: p }, p.Consumer = p;
  }, Y.createElement = re, Y.createFactory = function(p) {
    var w = re.bind(null, p);
    return w.type = p, w;
  }, Y.createRef = function() {
    return { current: null };
  }, Y.forwardRef = function(p) {
    return { $$typeof: h, render: p };
  }, Y.isValidElement = Le, Y.lazy = function(p) {
    return { $$typeof: g, _payload: { _status: -1, _result: p }, _init: $e };
  }, Y.memo = function(p, w) {
    return { $$typeof: d, type: p, compare: w === void 0 ? null : w };
  }, Y.startTransition = function(p) {
    var w = Je.transition;
    Je.transition = {};
    try {
      p();
    } finally {
      Je.transition = w;
    }
  }, Y.unstable_act = Qe, Y.useCallback = function(p, w) {
    return D.current.useCallback(p, w);
  }, Y.useContext = function(p) {
    return D.current.useContext(p);
  }, Y.useDebugValue = function() {
  }, Y.useDeferredValue = function(p) {
    return D.current.useDeferredValue(p);
  }, Y.useEffect = function(p, w) {
    return D.current.useEffect(p, w);
  }, Y.useId = function() {
    return D.current.useId();
  }, Y.useImperativeHandle = function(p, w, q) {
    return D.current.useImperativeHandle(p, w, q);
  }, Y.useInsertionEffect = function(p, w) {
    return D.current.useInsertionEffect(p, w);
  }, Y.useLayoutEffect = function(p, w) {
    return D.current.useLayoutEffect(p, w);
  }, Y.useMemo = function(p, w) {
    return D.current.useMemo(p, w);
  }, Y.useReducer = function(p, w, q) {
    return D.current.useReducer(p, w, q);
  }, Y.useRef = function(p) {
    return D.current.useRef(p);
  }, Y.useState = function(p) {
    return D.current.useState(p);
  }, Y.useSyncExternalStore = function(p, w, q) {
    return D.current.useSyncExternalStore(p, w, q);
  }, Y.useTransition = function() {
    return D.current.useTransition();
  }, Y.version = "18.3.1", Y;
}
var Qt = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Qt.exports;
var ra;
function Ei() {
  return ra || (ra = 1, function(a, e) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var t = "18.3.1", r = Symbol.for("react.element"), n = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), h = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), d = Symbol.for("react.context"), g = Symbol.for("react.forward_ref"), y = Symbol.for("react.suspense"), A = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), j = Symbol.for("react.lazy"), F = Symbol.for("react.offscreen"), E = Symbol.iterator, O = "@@iterator";
      function k(i) {
        if (i === null || typeof i != "object")
          return null;
        var f = E && i[E] || i[O];
        return typeof f == "function" ? f : null;
      }
      var U = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, M = {
        transition: null
      }, N = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, B = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, ce = {}, re = null;
      function Re(i) {
        re = i;
      }
      ce.setExtraStackFrame = function(i) {
        re = i;
      }, ce.getCurrentStack = null, ce.getStackAddendum = function() {
        var i = "";
        re && (i += re);
        var f = ce.getCurrentStack;
        return f && (i += f() || ""), i;
      };
      var Le = !1, Ze = !1, dt = !1, Te = !1, xe = !1, Se = {
        ReactCurrentDispatcher: U,
        ReactCurrentBatchConfig: M,
        ReactCurrentOwner: B
      };
      Se.ReactDebugCurrentFrame = ce, Se.ReactCurrentActQueue = N;
      function $e(i) {
        {
          for (var f = arguments.length, v = new Array(f > 1 ? f - 1 : 0), m = 1; m < f; m++)
            v[m - 1] = arguments[m];
          Je("warn", i, v);
        }
      }
      function D(i) {
        {
          for (var f = arguments.length, v = new Array(f > 1 ? f - 1 : 0), m = 1; m < f; m++)
            v[m - 1] = arguments[m];
          Je("error", i, v);
        }
      }
      function Je(i, f, v) {
        {
          var m = Se.ReactDebugCurrentFrame, C = m.getStackAddendum();
          C !== "" && (f += "%s", v = v.concat([C]));
          var I = v.map(function(x) {
            return String(x);
          });
          I.unshift("Warning: " + f), Function.prototype.apply.call(console[i], console, I);
        }
      }
      var pt = {};
      function Qe(i, f) {
        {
          var v = i.constructor, m = v && (v.displayName || v.name) || "ReactClass", C = m + "." + f;
          if (pt[C])
            return;
          D("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", f, m), pt[C] = !0;
        }
      }
      var p = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(i) {
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
        enqueueForceUpdate: function(i, f, v) {
          Qe(i, "forceUpdate");
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
        enqueueReplaceState: function(i, f, v, m) {
          Qe(i, "replaceState");
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
        enqueueSetState: function(i, f, v, m) {
          Qe(i, "setState");
        }
      }, w = Object.assign, q = {};
      Object.freeze(q);
      function H(i, f, v) {
        this.props = i, this.context = f, this.refs = q, this.updater = v || p;
      }
      H.prototype.isReactComponent = {}, H.prototype.setState = function(i, f) {
        if (typeof i != "object" && typeof i != "function" && i != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, i, f, "setState");
      }, H.prototype.forceUpdate = function(i) {
        this.updater.enqueueForceUpdate(this, i, "forceUpdate");
      };
      {
        var X = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, ie = function(i, f) {
          Object.defineProperty(H.prototype, i, {
            get: function() {
              $e("%s(...) is deprecated in plain JavaScript React classes. %s", f[0], f[1]);
            }
          });
        };
        for (var ne in X)
          X.hasOwnProperty(ne) && ie(ne, X[ne]);
      }
      function te() {
      }
      te.prototype = H.prototype;
      function Q(i, f, v) {
        this.props = i, this.context = f, this.refs = q, this.updater = v || p;
      }
      var me = Q.prototype = new te();
      me.constructor = Q, w(me, H.prototype), me.isPureReactComponent = !0;
      function Mr() {
        var i = {
          current: null
        };
        return Object.seal(i), i;
      }
      var ur = Array.isArray;
      function _t(i) {
        return ur(i);
      }
      function Nr(i) {
        {
          var f = typeof Symbol == "function" && Symbol.toStringTag, v = f && i[Symbol.toStringTag] || i.constructor.name || "Object";
          return v;
        }
      }
      function Ot(i) {
        try {
          return rt(i), !1;
        } catch {
          return !0;
        }
      }
      function rt(i) {
        return "" + i;
      }
      function vt(i) {
        if (Ot(i))
          return D("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Nr(i)), rt(i);
      }
      function lr(i, f, v) {
        var m = i.displayName;
        if (m)
          return m;
        var C = f.displayName || f.name || "";
        return C !== "" ? v + "(" + C + ")" : v;
      }
      function mt(i) {
        return i.displayName || "Context";
      }
      function Xe(i) {
        if (i == null)
          return null;
        if (typeof i.tag == "number" && D("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof i == "function")
          return i.displayName || i.name || null;
        if (typeof i == "string")
          return i;
        switch (i) {
          case o:
            return "Fragment";
          case n:
            return "Portal";
          case h:
            return "Profiler";
          case s:
            return "StrictMode";
          case y:
            return "Suspense";
          case A:
            return "SuspenseList";
        }
        if (typeof i == "object")
          switch (i.$$typeof) {
            case d:
              var f = i;
              return mt(f) + ".Consumer";
            case l:
              var v = i;
              return mt(v._context) + ".Provider";
            case g:
              return lr(i, i.render, "ForwardRef");
            case _:
              var m = i.displayName || null;
              return m !== null ? m : Xe(i.type) || "Memo";
            case j: {
              var C = i, I = C._payload, x = C._init;
              try {
                return Xe(x(I));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var gt = Object.prototype.hasOwnProperty, Rt = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, fr, cr, At;
      At = {};
      function $t(i) {
        if (gt.call(i, "ref")) {
          var f = Object.getOwnPropertyDescriptor(i, "ref").get;
          if (f && f.isReactWarning)
            return !1;
        }
        return i.ref !== void 0;
      }
      function Ut(i) {
        if (gt.call(i, "key")) {
          var f = Object.getOwnPropertyDescriptor(i, "key").get;
          if (f && f.isReactWarning)
            return !1;
        }
        return i.key !== void 0;
      }
      function zr(i, f) {
        var v = function() {
          fr || (fr = !0, D("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", f));
        };
        v.isReactWarning = !0, Object.defineProperty(i, "key", {
          get: v,
          configurable: !0
        });
      }
      function hr(i, f) {
        var v = function() {
          cr || (cr = !0, D("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", f));
        };
        v.isReactWarning = !0, Object.defineProperty(i, "ref", {
          get: v,
          configurable: !0
        });
      }
      function dr(i) {
        if (typeof i.ref == "string" && B.current && i.__self && B.current.stateNode !== i.__self) {
          var f = Xe(B.current.type);
          At[f] || (D('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', f, i.ref), At[f] = !0);
        }
      }
      var Bt = function(i, f, v, m, C, I, x) {
        var z = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: r,
          // Built-in properties that belong on the element
          type: i,
          key: f,
          ref: v,
          props: x,
          // Record the component responsible for creating this element.
          _owner: I
        };
        return z._store = {}, Object.defineProperty(z._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(z, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: m
        }), Object.defineProperty(z, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: C
        }), Object.freeze && (Object.freeze(z.props), Object.freeze(z)), z;
      };
      function Wr(i, f, v) {
        var m, C = {}, I = null, x = null, z = null, K = null;
        if (f != null) {
          $t(f) && (x = f.ref, dr(f)), Ut(f) && (vt(f.key), I = "" + f.key), z = f.__self === void 0 ? null : f.__self, K = f.__source === void 0 ? null : f.__source;
          for (m in f)
            gt.call(f, m) && !Rt.hasOwnProperty(m) && (C[m] = f[m]);
        }
        var ae = arguments.length - 2;
        if (ae === 1)
          C.children = v;
        else if (ae > 1) {
          for (var ue = Array(ae), le = 0; le < ae; le++)
            ue[le] = arguments[le + 2];
          Object.freeze && Object.freeze(ue), C.children = ue;
        }
        if (i && i.defaultProps) {
          var de = i.defaultProps;
          for (m in de)
            C[m] === void 0 && (C[m] = de[m]);
        }
        if (I || x) {
          var ge = typeof i == "function" ? i.displayName || i.name || "Unknown" : i;
          I && zr(C, ge), x && hr(C, ge);
        }
        return Bt(i, I, x, z, K, B.current, C);
      }
      function $r(i, f) {
        var v = Bt(i.type, f, i.ref, i._self, i._source, i._owner, i.props);
        return v;
      }
      function Ur(i, f, v) {
        if (i == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + i + ".");
        var m, C = w({}, i.props), I = i.key, x = i.ref, z = i._self, K = i._source, ae = i._owner;
        if (f != null) {
          $t(f) && (x = f.ref, ae = B.current), Ut(f) && (vt(f.key), I = "" + f.key);
          var ue;
          i.type && i.type.defaultProps && (ue = i.type.defaultProps);
          for (m in f)
            gt.call(f, m) && !Rt.hasOwnProperty(m) && (f[m] === void 0 && ue !== void 0 ? C[m] = ue[m] : C[m] = f[m]);
        }
        var le = arguments.length - 2;
        if (le === 1)
          C.children = v;
        else if (le > 1) {
          for (var de = Array(le), ge = 0; ge < le; ge++)
            de[ge] = arguments[ge + 2];
          C.children = de;
        }
        return Bt(i.type, I, x, z, K, ae, C);
      }
      function nt(i) {
        return typeof i == "object" && i !== null && i.$$typeof === r;
      }
      var pr = ".", Br = ":";
      function Vt(i) {
        var f = /[=:]/g, v = {
          "=": "=0",
          ":": "=2"
        }, m = i.replace(f, function(C) {
          return v[C];
        });
        return "$" + m;
      }
      var Yt = !1, at = /\/+/g;
      function jt(i) {
        return i.replace(at, "$&/");
      }
      function yt(i, f) {
        return typeof i == "object" && i !== null && i.key != null ? (vt(i.key), Vt("" + i.key)) : f.toString(36);
      }
      function bt(i, f, v, m, C) {
        var I = typeof i;
        (I === "undefined" || I === "boolean") && (i = null);
        var x = !1;
        if (i === null)
          x = !0;
        else
          switch (I) {
            case "string":
            case "number":
              x = !0;
              break;
            case "object":
              switch (i.$$typeof) {
                case r:
                case n:
                  x = !0;
              }
          }
        if (x) {
          var z = i, K = C(z), ae = m === "" ? pr + yt(z, 0) : m;
          if (_t(K)) {
            var ue = "";
            ae != null && (ue = jt(ae) + "/"), bt(K, f, ue, "", function(yi) {
              return yi;
            });
          } else K != null && (nt(K) && (K.key && (!z || z.key !== K.key) && vt(K.key), K = $r(
            K,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            v + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (K.key && (!z || z.key !== K.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              jt("" + K.key) + "/"
            ) : "") + ae
          )), f.push(K));
          return 1;
        }
        var le, de, ge = 0, Oe = m === "" ? pr : m + Br;
        if (_t(i))
          for (var _r = 0; _r < i.length; _r++)
            le = i[_r], de = Oe + yt(le, _r), ge += bt(le, f, v, de, C);
        else {
          var on = k(i);
          if (typeof on == "function") {
            var Xn = i;
            on === Xn.entries && (Yt || $e("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Yt = !0);
            for (var mi = on.call(Xn), Zn, gi = 0; !(Zn = mi.next()).done; )
              le = Zn.value, de = Oe + yt(le, gi++), ge += bt(le, f, v, de, C);
          } else if (I === "object") {
            var Qn = String(i);
            throw new Error("Objects are not valid as a React child (found: " + (Qn === "[object Object]" ? "object with keys {" + Object.keys(i).join(", ") + "}" : Qn) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return ge;
      }
      function Pt(i, f, v) {
        if (i == null)
          return i;
        var m = [], C = 0;
        return bt(i, m, "", "", function(I) {
          return f.call(v, I, C++);
        }), m;
      }
      function vr(i) {
        var f = 0;
        return Pt(i, function() {
          f++;
        }), f;
      }
      function Vr(i, f, v) {
        Pt(i, function() {
          f.apply(this, arguments);
        }, v);
      }
      function mr(i) {
        return Pt(i, function(f) {
          return f;
        }) || [];
      }
      function gr(i) {
        if (!nt(i))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return i;
      }
      function Yr(i) {
        var f = {
          $$typeof: d,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: i,
          _currentValue2: i,
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
        f.Provider = {
          $$typeof: l,
          _context: f
        };
        var v = !1, m = !1, C = !1;
        {
          var I = {
            $$typeof: d,
            _context: f
          };
          Object.defineProperties(I, {
            Provider: {
              get: function() {
                return m || (m = !0, D("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), f.Provider;
              },
              set: function(x) {
                f.Provider = x;
              }
            },
            _currentValue: {
              get: function() {
                return f._currentValue;
              },
              set: function(x) {
                f._currentValue = x;
              }
            },
            _currentValue2: {
              get: function() {
                return f._currentValue2;
              },
              set: function(x) {
                f._currentValue2 = x;
              }
            },
            _threadCount: {
              get: function() {
                return f._threadCount;
              },
              set: function(x) {
                f._threadCount = x;
              }
            },
            Consumer: {
              get: function() {
                return v || (v = !0, D("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), f.Consumer;
              }
            },
            displayName: {
              get: function() {
                return f.displayName;
              },
              set: function(x) {
                C || ($e("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", x), C = !0);
              }
            }
          }), f.Consumer = I;
        }
        return f._currentRenderer = null, f._currentRenderer2 = null, f;
      }
      var wt = -1, kt = 0, qt = 1, qr = 2;
      function Gr(i) {
        if (i._status === wt) {
          var f = i._result, v = f();
          if (v.then(function(I) {
            if (i._status === kt || i._status === wt) {
              var x = i;
              x._status = qt, x._result = I;
            }
          }, function(I) {
            if (i._status === kt || i._status === wt) {
              var x = i;
              x._status = qr, x._result = I;
            }
          }), i._status === wt) {
            var m = i;
            m._status = kt, m._result = v;
          }
        }
        if (i._status === qt) {
          var C = i._result;
          return C === void 0 && D(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, C), "default" in C || D(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, C), C.default;
        } else
          throw i._result;
      }
      function Hr(i) {
        var f = {
          // We use these fields to store the result.
          _status: wt,
          _result: i
        }, v = {
          $$typeof: j,
          _payload: f,
          _init: Gr
        };
        {
          var m, C;
          Object.defineProperties(v, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return m;
              },
              set: function(I) {
                D("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), m = I, Object.defineProperty(v, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return C;
              },
              set: function(I) {
                D("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), C = I, Object.defineProperty(v, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return v;
      }
      function Kr(i) {
        i != null && i.$$typeof === _ ? D("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof i != "function" ? D("forwardRef requires a render function but was given %s.", i === null ? "null" : typeof i) : i.length !== 0 && i.length !== 2 && D("forwardRef render functions accept exactly two parameters: props and ref. %s", i.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), i != null && (i.defaultProps != null || i.propTypes != null) && D("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var f = {
          $$typeof: g,
          render: i
        };
        {
          var v;
          Object.defineProperty(f, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return v;
            },
            set: function(m) {
              v = m, !i.name && !i.displayName && (i.displayName = m);
            }
          });
        }
        return f;
      }
      var c;
      c = Symbol.for("react.module.reference");
      function b(i) {
        return !!(typeof i == "string" || typeof i == "function" || i === o || i === h || xe || i === s || i === y || i === A || Te || i === F || Le || Ze || dt || typeof i == "object" && i !== null && (i.$$typeof === j || i.$$typeof === _ || i.$$typeof === l || i.$$typeof === d || i.$$typeof === g || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        i.$$typeof === c || i.getModuleId !== void 0));
      }
      function R(i, f) {
        b(i) || D("memo: The first argument must be a component. Instead received: %s", i === null ? "null" : typeof i);
        var v = {
          $$typeof: _,
          type: i,
          compare: f === void 0 ? null : f
        };
        {
          var m;
          Object.defineProperty(v, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return m;
            },
            set: function(C) {
              m = C, !i.name && !i.displayName && (i.displayName = C);
            }
          });
        }
        return v;
      }
      function T() {
        var i = U.current;
        return i === null && D(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), i;
      }
      function Z(i) {
        var f = T();
        if (i._context !== void 0) {
          var v = i._context;
          v.Consumer === i ? D("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : v.Provider === i && D("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return f.useContext(i);
      }
      function ee(i) {
        var f = T();
        return f.useState(i);
      }
      function G(i, f, v) {
        var m = T();
        return m.useReducer(i, f, v);
      }
      function V(i) {
        var f = T();
        return f.useRef(i);
      }
      function _e(i, f) {
        var v = T();
        return v.useEffect(i, f);
      }
      function he(i, f) {
        var v = T();
        return v.useInsertionEffect(i, f);
      }
      function ve(i, f) {
        var v = T();
        return v.useLayoutEffect(i, f);
      }
      function Fe(i, f) {
        var v = T();
        return v.useCallback(i, f);
      }
      function it(i, f) {
        var v = T();
        return v.useMemo(i, f);
      }
      function et(i, f, v) {
        var m = T();
        return m.useImperativeHandle(i, f, v);
      }
      function Ae(i, f) {
        {
          var v = T();
          return v.useDebugValue(i, f);
        }
      }
      function Gt() {
        var i = T();
        return i.useTransition();
      }
      function Jr(i) {
        var f = T();
        return f.useDeferredValue(i);
      }
      function Xr() {
        var i = T();
        return i.useId();
      }
      function Xa(i, f, v) {
        var m = T();
        return m.useSyncExternalStore(i, f, v);
      }
      var Ht = 0, kn, Tn, xn, Fn, Dn, Ln, In;
      function Mn() {
      }
      Mn.__reactDisabledLog = !0;
      function Za() {
        {
          if (Ht === 0) {
            kn = console.log, Tn = console.info, xn = console.warn, Fn = console.error, Dn = console.group, Ln = console.groupCollapsed, In = console.groupEnd;
            var i = {
              configurable: !0,
              enumerable: !0,
              value: Mn,
              writable: !0
            };
            Object.defineProperties(console, {
              info: i,
              log: i,
              warn: i,
              error: i,
              group: i,
              groupCollapsed: i,
              groupEnd: i
            });
          }
          Ht++;
        }
      }
      function Qa() {
        {
          if (Ht--, Ht === 0) {
            var i = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: w({}, i, {
                value: kn
              }),
              info: w({}, i, {
                value: Tn
              }),
              warn: w({}, i, {
                value: xn
              }),
              error: w({}, i, {
                value: Fn
              }),
              group: w({}, i, {
                value: Dn
              }),
              groupCollapsed: w({}, i, {
                value: Ln
              }),
              groupEnd: w({}, i, {
                value: In
              })
            });
          }
          Ht < 0 && D("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var Zr = Se.ReactCurrentDispatcher, Qr;
      function yr(i, f, v) {
        {
          if (Qr === void 0)
            try {
              throw Error();
            } catch (C) {
              var m = C.stack.trim().match(/\n( *(at )?)/);
              Qr = m && m[1] || "";
            }
          return `
` + Qr + i;
        }
      }
      var en = !1, br;
      {
        var ei = typeof WeakMap == "function" ? WeakMap : Map;
        br = new ei();
      }
      function Nn(i, f) {
        if (!i || en)
          return "";
        {
          var v = br.get(i);
          if (v !== void 0)
            return v;
        }
        var m;
        en = !0;
        var C = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var I;
        I = Zr.current, Zr.current = null, Za();
        try {
          if (f) {
            var x = function() {
              throw Error();
            };
            if (Object.defineProperty(x.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(x, []);
              } catch (Oe) {
                m = Oe;
              }
              Reflect.construct(i, [], x);
            } else {
              try {
                x.call();
              } catch (Oe) {
                m = Oe;
              }
              i.call(x.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (Oe) {
              m = Oe;
            }
            i();
          }
        } catch (Oe) {
          if (Oe && m && typeof Oe.stack == "string") {
            for (var z = Oe.stack.split(`
`), K = m.stack.split(`
`), ae = z.length - 1, ue = K.length - 1; ae >= 1 && ue >= 0 && z[ae] !== K[ue]; )
              ue--;
            for (; ae >= 1 && ue >= 0; ae--, ue--)
              if (z[ae] !== K[ue]) {
                if (ae !== 1 || ue !== 1)
                  do
                    if (ae--, ue--, ue < 0 || z[ae] !== K[ue]) {
                      var le = `
` + z[ae].replace(" at new ", " at ");
                      return i.displayName && le.includes("<anonymous>") && (le = le.replace("<anonymous>", i.displayName)), typeof i == "function" && br.set(i, le), le;
                    }
                  while (ae >= 1 && ue >= 0);
                break;
              }
          }
        } finally {
          en = !1, Zr.current = I, Qa(), Error.prepareStackTrace = C;
        }
        var de = i ? i.displayName || i.name : "", ge = de ? yr(de) : "";
        return typeof i == "function" && br.set(i, ge), ge;
      }
      function ti(i, f, v) {
        return Nn(i, !1);
      }
      function ri(i) {
        var f = i.prototype;
        return !!(f && f.isReactComponent);
      }
      function wr(i, f, v) {
        if (i == null)
          return "";
        if (typeof i == "function")
          return Nn(i, ri(i));
        if (typeof i == "string")
          return yr(i);
        switch (i) {
          case y:
            return yr("Suspense");
          case A:
            return yr("SuspenseList");
        }
        if (typeof i == "object")
          switch (i.$$typeof) {
            case g:
              return ti(i.render);
            case _:
              return wr(i.type, f, v);
            case j: {
              var m = i, C = m._payload, I = m._init;
              try {
                return wr(I(C), f, v);
              } catch {
              }
            }
          }
        return "";
      }
      var zn = {}, Wn = Se.ReactDebugCurrentFrame;
      function Cr(i) {
        if (i) {
          var f = i._owner, v = wr(i.type, i._source, f ? f.type : null);
          Wn.setExtraStackFrame(v);
        } else
          Wn.setExtraStackFrame(null);
      }
      function ni(i, f, v, m, C) {
        {
          var I = Function.call.bind(gt);
          for (var x in i)
            if (I(i, x)) {
              var z = void 0;
              try {
                if (typeof i[x] != "function") {
                  var K = Error((m || "React class") + ": " + v + " type `" + x + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[x] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw K.name = "Invariant Violation", K;
                }
                z = i[x](f, x, m, v, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (ae) {
                z = ae;
              }
              z && !(z instanceof Error) && (Cr(C), D("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", m || "React class", v, x, typeof z), Cr(null)), z instanceof Error && !(z.message in zn) && (zn[z.message] = !0, Cr(C), D("Failed %s type: %s", v, z.message), Cr(null));
            }
        }
      }
      function Tt(i) {
        if (i) {
          var f = i._owner, v = wr(i.type, i._source, f ? f.type : null);
          Re(v);
        } else
          Re(null);
      }
      var tn;
      tn = !1;
      function $n() {
        if (B.current) {
          var i = Xe(B.current.type);
          if (i)
            return `

Check the render method of \`` + i + "`.";
        }
        return "";
      }
      function ai(i) {
        if (i !== void 0) {
          var f = i.fileName.replace(/^.*[\\\/]/, ""), v = i.lineNumber;
          return `

Check your code at ` + f + ":" + v + ".";
        }
        return "";
      }
      function ii(i) {
        return i != null ? ai(i.__source) : "";
      }
      var Un = {};
      function oi(i) {
        var f = $n();
        if (!f) {
          var v = typeof i == "string" ? i : i.displayName || i.name;
          v && (f = `

Check the top-level render call using <` + v + ">.");
        }
        return f;
      }
      function Bn(i, f) {
        if (!(!i._store || i._store.validated || i.key != null)) {
          i._store.validated = !0;
          var v = oi(f);
          if (!Un[v]) {
            Un[v] = !0;
            var m = "";
            i && i._owner && i._owner !== B.current && (m = " It was passed a child from " + Xe(i._owner.type) + "."), Tt(i), D('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', v, m), Tt(null);
          }
        }
      }
      function Vn(i, f) {
        if (typeof i == "object") {
          if (_t(i))
            for (var v = 0; v < i.length; v++) {
              var m = i[v];
              nt(m) && Bn(m, f);
            }
          else if (nt(i))
            i._store && (i._store.validated = !0);
          else if (i) {
            var C = k(i);
            if (typeof C == "function" && C !== i.entries)
              for (var I = C.call(i), x; !(x = I.next()).done; )
                nt(x.value) && Bn(x.value, f);
          }
        }
      }
      function Yn(i) {
        {
          var f = i.type;
          if (f == null || typeof f == "string")
            return;
          var v;
          if (typeof f == "function")
            v = f.propTypes;
          else if (typeof f == "object" && (f.$$typeof === g || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          f.$$typeof === _))
            v = f.propTypes;
          else
            return;
          if (v) {
            var m = Xe(f);
            ni(v, i.props, "prop", m, i);
          } else if (f.PropTypes !== void 0 && !tn) {
            tn = !0;
            var C = Xe(f);
            D("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", C || "Unknown");
          }
          typeof f.getDefaultProps == "function" && !f.getDefaultProps.isReactClassApproved && D("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function si(i) {
        {
          for (var f = Object.keys(i.props), v = 0; v < f.length; v++) {
            var m = f[v];
            if (m !== "children" && m !== "key") {
              Tt(i), D("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", m), Tt(null);
              break;
            }
          }
          i.ref !== null && (Tt(i), D("Invalid attribute `ref` supplied to `React.Fragment`."), Tt(null));
        }
      }
      function qn(i, f, v) {
        var m = b(i);
        if (!m) {
          var C = "";
          (i === void 0 || typeof i == "object" && i !== null && Object.keys(i).length === 0) && (C += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var I = ii(f);
          I ? C += I : C += $n();
          var x;
          i === null ? x = "null" : _t(i) ? x = "array" : i !== void 0 && i.$$typeof === r ? (x = "<" + (Xe(i.type) || "Unknown") + " />", C = " Did you accidentally export a JSX literal instead of a component?") : x = typeof i, D("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", x, C);
        }
        var z = Wr.apply(this, arguments);
        if (z == null)
          return z;
        if (m)
          for (var K = 2; K < arguments.length; K++)
            Vn(arguments[K], i);
        return i === o ? si(z) : Yn(z), z;
      }
      var Gn = !1;
      function ui(i) {
        var f = qn.bind(null, i);
        return f.type = i, Gn || (Gn = !0, $e("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(f, "type", {
          enumerable: !1,
          get: function() {
            return $e("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: i
            }), i;
          }
        }), f;
      }
      function li(i, f, v) {
        for (var m = Ur.apply(this, arguments), C = 2; C < arguments.length; C++)
          Vn(arguments[C], m.type);
        return Yn(m), m;
      }
      function fi(i, f) {
        var v = M.transition;
        M.transition = {};
        var m = M.transition;
        M.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          i();
        } finally {
          if (M.transition = v, v === null && m._updatedFibers) {
            var C = m._updatedFibers.size;
            C > 10 && $e("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), m._updatedFibers.clear();
          }
        }
      }
      var Hn = !1, Er = null;
      function ci(i) {
        if (Er === null)
          try {
            var f = ("require" + Math.random()).slice(0, 7), v = a && a[f];
            Er = v.call(a, "timers").setImmediate;
          } catch {
            Er = function(C) {
              Hn === !1 && (Hn = !0, typeof MessageChannel > "u" && D("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var I = new MessageChannel();
              I.port1.onmessage = C, I.port2.postMessage(void 0);
            };
          }
        return Er(i);
      }
      var xt = 0, Kn = !1;
      function Jn(i) {
        {
          var f = xt;
          xt++, N.current === null && (N.current = []);
          var v = N.isBatchingLegacy, m;
          try {
            if (N.isBatchingLegacy = !0, m = i(), !v && N.didScheduleLegacyUpdate) {
              var C = N.current;
              C !== null && (N.didScheduleLegacyUpdate = !1, an(C));
            }
          } catch (de) {
            throw Sr(f), de;
          } finally {
            N.isBatchingLegacy = v;
          }
          if (m !== null && typeof m == "object" && typeof m.then == "function") {
            var I = m, x = !1, z = {
              then: function(de, ge) {
                x = !0, I.then(function(Oe) {
                  Sr(f), xt === 0 ? rn(Oe, de, ge) : de(Oe);
                }, function(Oe) {
                  Sr(f), ge(Oe);
                });
              }
            };
            return !Kn && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              x || (Kn = !0, D("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), z;
          } else {
            var K = m;
            if (Sr(f), xt === 0) {
              var ae = N.current;
              ae !== null && (an(ae), N.current = null);
              var ue = {
                then: function(de, ge) {
                  N.current === null ? (N.current = [], rn(K, de, ge)) : de(K);
                }
              };
              return ue;
            } else {
              var le = {
                then: function(de, ge) {
                  de(K);
                }
              };
              return le;
            }
          }
        }
      }
      function Sr(i) {
        i !== xt - 1 && D("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), xt = i;
      }
      function rn(i, f, v) {
        {
          var m = N.current;
          if (m !== null)
            try {
              an(m), ci(function() {
                m.length === 0 ? (N.current = null, f(i)) : rn(i, f, v);
              });
            } catch (C) {
              v(C);
            }
          else
            f(i);
        }
      }
      var nn = !1;
      function an(i) {
        if (!nn) {
          nn = !0;
          var f = 0;
          try {
            for (; f < i.length; f++) {
              var v = i[f];
              do
                v = v(!0);
              while (v !== null);
            }
            i.length = 0;
          } catch (m) {
            throw i = i.slice(f + 1), m;
          } finally {
            nn = !1;
          }
        }
      }
      var hi = qn, di = li, pi = ui, vi = {
        map: Pt,
        forEach: Vr,
        count: vr,
        toArray: mr,
        only: gr
      };
      e.Children = vi, e.Component = H, e.Fragment = o, e.Profiler = h, e.PureComponent = Q, e.StrictMode = s, e.Suspense = y, e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Se, e.act = Jn, e.cloneElement = di, e.createContext = Yr, e.createElement = hi, e.createFactory = pi, e.createRef = Mr, e.forwardRef = Kr, e.isValidElement = nt, e.lazy = Hr, e.memo = R, e.startTransition = fi, e.unstable_act = Jn, e.useCallback = Fe, e.useContext = Z, e.useDebugValue = Ae, e.useDeferredValue = Jr, e.useEffect = _e, e.useId = Xr, e.useImperativeHandle = et, e.useInsertionEffect = he, e.useLayoutEffect = ve, e.useMemo = it, e.useReducer = G, e.useRef = V, e.useState = ee, e.useSyncExternalStore = Xa, e.useTransition = Gt, e.version = t, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Qt, Qt.exports)), Qt.exports;
}
var na;
function Fa() {
  return na || (na = 1, process.env.NODE_ENV === "production" ? Rr.exports = Ci() : Rr.exports = Ei()), Rr.exports;
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
var aa;
function Si() {
  if (aa) return Kt;
  aa = 1;
  var a = Fa(), e = Symbol.for("react.element"), t = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, n = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(h, l, d) {
    var g, y = {}, A = null, _ = null;
    d !== void 0 && (A = "" + d), l.key !== void 0 && (A = "" + l.key), l.ref !== void 0 && (_ = l.ref);
    for (g in l) r.call(l, g) && !o.hasOwnProperty(g) && (y[g] = l[g]);
    if (h && h.defaultProps) for (g in l = h.defaultProps, l) y[g] === void 0 && (y[g] = l[g]);
    return { $$typeof: e, type: h, key: A, ref: _, props: y, _owner: n.current };
  }
  return Kt.Fragment = t, Kt.jsx = s, Kt.jsxs = s, Kt;
}
var Jt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ia;
function _i() {
  return ia || (ia = 1, process.env.NODE_ENV !== "production" && function() {
    var a = Fa(), e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), h = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), y = Symbol.for("react.memo"), A = Symbol.for("react.lazy"), _ = Symbol.for("react.offscreen"), j = Symbol.iterator, F = "@@iterator";
    function E(c) {
      if (c === null || typeof c != "object")
        return null;
      var b = j && c[j] || c[F];
      return typeof b == "function" ? b : null;
    }
    var O = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function k(c) {
      {
        for (var b = arguments.length, R = new Array(b > 1 ? b - 1 : 0), T = 1; T < b; T++)
          R[T - 1] = arguments[T];
        U("error", c, R);
      }
    }
    function U(c, b, R) {
      {
        var T = O.ReactDebugCurrentFrame, Z = T.getStackAddendum();
        Z !== "" && (b += "%s", R = R.concat([Z]));
        var ee = R.map(function(G) {
          return String(G);
        });
        ee.unshift("Warning: " + b), Function.prototype.apply.call(console[c], console, ee);
      }
    }
    var M = !1, N = !1, B = !1, ce = !1, re = !1, Re;
    Re = Symbol.for("react.module.reference");
    function Le(c) {
      return !!(typeof c == "string" || typeof c == "function" || c === r || c === o || re || c === n || c === d || c === g || ce || c === _ || M || N || B || typeof c == "object" && c !== null && (c.$$typeof === A || c.$$typeof === y || c.$$typeof === s || c.$$typeof === h || c.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      c.$$typeof === Re || c.getModuleId !== void 0));
    }
    function Ze(c, b, R) {
      var T = c.displayName;
      if (T)
        return T;
      var Z = b.displayName || b.name || "";
      return Z !== "" ? R + "(" + Z + ")" : R;
    }
    function dt(c) {
      return c.displayName || "Context";
    }
    function Te(c) {
      if (c == null)
        return null;
      if (typeof c.tag == "number" && k("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof c == "function")
        return c.displayName || c.name || null;
      if (typeof c == "string")
        return c;
      switch (c) {
        case r:
          return "Fragment";
        case t:
          return "Portal";
        case o:
          return "Profiler";
        case n:
          return "StrictMode";
        case d:
          return "Suspense";
        case g:
          return "SuspenseList";
      }
      if (typeof c == "object")
        switch (c.$$typeof) {
          case h:
            var b = c;
            return dt(b) + ".Consumer";
          case s:
            var R = c;
            return dt(R._context) + ".Provider";
          case l:
            return Ze(c, c.render, "ForwardRef");
          case y:
            var T = c.displayName || null;
            return T !== null ? T : Te(c.type) || "Memo";
          case A: {
            var Z = c, ee = Z._payload, G = Z._init;
            try {
              return Te(G(ee));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var xe = Object.assign, Se = 0, $e, D, Je, pt, Qe, p, w;
    function q() {
    }
    q.__reactDisabledLog = !0;
    function H() {
      {
        if (Se === 0) {
          $e = console.log, D = console.info, Je = console.warn, pt = console.error, Qe = console.group, p = console.groupCollapsed, w = console.groupEnd;
          var c = {
            configurable: !0,
            enumerable: !0,
            value: q,
            writable: !0
          };
          Object.defineProperties(console, {
            info: c,
            log: c,
            warn: c,
            error: c,
            group: c,
            groupCollapsed: c,
            groupEnd: c
          });
        }
        Se++;
      }
    }
    function X() {
      {
        if (Se--, Se === 0) {
          var c = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: xe({}, c, {
              value: $e
            }),
            info: xe({}, c, {
              value: D
            }),
            warn: xe({}, c, {
              value: Je
            }),
            error: xe({}, c, {
              value: pt
            }),
            group: xe({}, c, {
              value: Qe
            }),
            groupCollapsed: xe({}, c, {
              value: p
            }),
            groupEnd: xe({}, c, {
              value: w
            })
          });
        }
        Se < 0 && k("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ie = O.ReactCurrentDispatcher, ne;
    function te(c, b, R) {
      {
        if (ne === void 0)
          try {
            throw Error();
          } catch (Z) {
            var T = Z.stack.trim().match(/\n( *(at )?)/);
            ne = T && T[1] || "";
          }
        return `
` + ne + c;
      }
    }
    var Q = !1, me;
    {
      var Mr = typeof WeakMap == "function" ? WeakMap : Map;
      me = new Mr();
    }
    function ur(c, b) {
      if (!c || Q)
        return "";
      {
        var R = me.get(c);
        if (R !== void 0)
          return R;
      }
      var T;
      Q = !0;
      var Z = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var ee;
      ee = ie.current, ie.current = null, H();
      try {
        if (b) {
          var G = function() {
            throw Error();
          };
          if (Object.defineProperty(G.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(G, []);
            } catch (Ae) {
              T = Ae;
            }
            Reflect.construct(c, [], G);
          } else {
            try {
              G.call();
            } catch (Ae) {
              T = Ae;
            }
            c.call(G.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ae) {
            T = Ae;
          }
          c();
        }
      } catch (Ae) {
        if (Ae && T && typeof Ae.stack == "string") {
          for (var V = Ae.stack.split(`
`), _e = T.stack.split(`
`), he = V.length - 1, ve = _e.length - 1; he >= 1 && ve >= 0 && V[he] !== _e[ve]; )
            ve--;
          for (; he >= 1 && ve >= 0; he--, ve--)
            if (V[he] !== _e[ve]) {
              if (he !== 1 || ve !== 1)
                do
                  if (he--, ve--, ve < 0 || V[he] !== _e[ve]) {
                    var Fe = `
` + V[he].replace(" at new ", " at ");
                    return c.displayName && Fe.includes("<anonymous>") && (Fe = Fe.replace("<anonymous>", c.displayName)), typeof c == "function" && me.set(c, Fe), Fe;
                  }
                while (he >= 1 && ve >= 0);
              break;
            }
        }
      } finally {
        Q = !1, ie.current = ee, X(), Error.prepareStackTrace = Z;
      }
      var it = c ? c.displayName || c.name : "", et = it ? te(it) : "";
      return typeof c == "function" && me.set(c, et), et;
    }
    function _t(c, b, R) {
      return ur(c, !1);
    }
    function Nr(c) {
      var b = c.prototype;
      return !!(b && b.isReactComponent);
    }
    function Ot(c, b, R) {
      if (c == null)
        return "";
      if (typeof c == "function")
        return ur(c, Nr(c));
      if (typeof c == "string")
        return te(c);
      switch (c) {
        case d:
          return te("Suspense");
        case g:
          return te("SuspenseList");
      }
      if (typeof c == "object")
        switch (c.$$typeof) {
          case l:
            return _t(c.render);
          case y:
            return Ot(c.type, b, R);
          case A: {
            var T = c, Z = T._payload, ee = T._init;
            try {
              return Ot(ee(Z), b, R);
            } catch {
            }
          }
        }
      return "";
    }
    var rt = Object.prototype.hasOwnProperty, vt = {}, lr = O.ReactDebugCurrentFrame;
    function mt(c) {
      if (c) {
        var b = c._owner, R = Ot(c.type, c._source, b ? b.type : null);
        lr.setExtraStackFrame(R);
      } else
        lr.setExtraStackFrame(null);
    }
    function Xe(c, b, R, T, Z) {
      {
        var ee = Function.call.bind(rt);
        for (var G in c)
          if (ee(c, G)) {
            var V = void 0;
            try {
              if (typeof c[G] != "function") {
                var _e = Error((T || "React class") + ": " + R + " type `" + G + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof c[G] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw _e.name = "Invariant Violation", _e;
              }
              V = c[G](b, G, T, R, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (he) {
              V = he;
            }
            V && !(V instanceof Error) && (mt(Z), k("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", T || "React class", R, G, typeof V), mt(null)), V instanceof Error && !(V.message in vt) && (vt[V.message] = !0, mt(Z), k("Failed %s type: %s", R, V.message), mt(null));
          }
      }
    }
    var gt = Array.isArray;
    function Rt(c) {
      return gt(c);
    }
    function fr(c) {
      {
        var b = typeof Symbol == "function" && Symbol.toStringTag, R = b && c[Symbol.toStringTag] || c.constructor.name || "Object";
        return R;
      }
    }
    function cr(c) {
      try {
        return At(c), !1;
      } catch {
        return !0;
      }
    }
    function At(c) {
      return "" + c;
    }
    function $t(c) {
      if (cr(c))
        return k("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", fr(c)), At(c);
    }
    var Ut = O.ReactCurrentOwner, zr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, hr, dr;
    function Bt(c) {
      if (rt.call(c, "ref")) {
        var b = Object.getOwnPropertyDescriptor(c, "ref").get;
        if (b && b.isReactWarning)
          return !1;
      }
      return c.ref !== void 0;
    }
    function Wr(c) {
      if (rt.call(c, "key")) {
        var b = Object.getOwnPropertyDescriptor(c, "key").get;
        if (b && b.isReactWarning)
          return !1;
      }
      return c.key !== void 0;
    }
    function $r(c, b) {
      typeof c.ref == "string" && Ut.current;
    }
    function Ur(c, b) {
      {
        var R = function() {
          hr || (hr = !0, k("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", b));
        };
        R.isReactWarning = !0, Object.defineProperty(c, "key", {
          get: R,
          configurable: !0
        });
      }
    }
    function nt(c, b) {
      {
        var R = function() {
          dr || (dr = !0, k("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", b));
        };
        R.isReactWarning = !0, Object.defineProperty(c, "ref", {
          get: R,
          configurable: !0
        });
      }
    }
    var pr = function(c, b, R, T, Z, ee, G) {
      var V = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: c,
        key: b,
        ref: R,
        props: G,
        // Record the component responsible for creating this element.
        _owner: ee
      };
      return V._store = {}, Object.defineProperty(V._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(V, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: T
      }), Object.defineProperty(V, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Z
      }), Object.freeze && (Object.freeze(V.props), Object.freeze(V)), V;
    };
    function Br(c, b, R, T, Z) {
      {
        var ee, G = {}, V = null, _e = null;
        R !== void 0 && ($t(R), V = "" + R), Wr(b) && ($t(b.key), V = "" + b.key), Bt(b) && (_e = b.ref, $r(b, Z));
        for (ee in b)
          rt.call(b, ee) && !zr.hasOwnProperty(ee) && (G[ee] = b[ee]);
        if (c && c.defaultProps) {
          var he = c.defaultProps;
          for (ee in he)
            G[ee] === void 0 && (G[ee] = he[ee]);
        }
        if (V || _e) {
          var ve = typeof c == "function" ? c.displayName || c.name || "Unknown" : c;
          V && Ur(G, ve), _e && nt(G, ve);
        }
        return pr(c, V, _e, Z, T, Ut.current, G);
      }
    }
    var Vt = O.ReactCurrentOwner, Yt = O.ReactDebugCurrentFrame;
    function at(c) {
      if (c) {
        var b = c._owner, R = Ot(c.type, c._source, b ? b.type : null);
        Yt.setExtraStackFrame(R);
      } else
        Yt.setExtraStackFrame(null);
    }
    var jt;
    jt = !1;
    function yt(c) {
      return typeof c == "object" && c !== null && c.$$typeof === e;
    }
    function bt() {
      {
        if (Vt.current) {
          var c = Te(Vt.current.type);
          if (c)
            return `

Check the render method of \`` + c + "`.";
        }
        return "";
      }
    }
    function Pt(c) {
      return "";
    }
    var vr = {};
    function Vr(c) {
      {
        var b = bt();
        if (!b) {
          var R = typeof c == "string" ? c : c.displayName || c.name;
          R && (b = `

Check the top-level render call using <` + R + ">.");
        }
        return b;
      }
    }
    function mr(c, b) {
      {
        if (!c._store || c._store.validated || c.key != null)
          return;
        c._store.validated = !0;
        var R = Vr(b);
        if (vr[R])
          return;
        vr[R] = !0;
        var T = "";
        c && c._owner && c._owner !== Vt.current && (T = " It was passed a child from " + Te(c._owner.type) + "."), at(c), k('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', R, T), at(null);
      }
    }
    function gr(c, b) {
      {
        if (typeof c != "object")
          return;
        if (Rt(c))
          for (var R = 0; R < c.length; R++) {
            var T = c[R];
            yt(T) && mr(T, b);
          }
        else if (yt(c))
          c._store && (c._store.validated = !0);
        else if (c) {
          var Z = E(c);
          if (typeof Z == "function" && Z !== c.entries)
            for (var ee = Z.call(c), G; !(G = ee.next()).done; )
              yt(G.value) && mr(G.value, b);
        }
      }
    }
    function Yr(c) {
      {
        var b = c.type;
        if (b == null || typeof b == "string")
          return;
        var R;
        if (typeof b == "function")
          R = b.propTypes;
        else if (typeof b == "object" && (b.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        b.$$typeof === y))
          R = b.propTypes;
        else
          return;
        if (R) {
          var T = Te(b);
          Xe(R, c.props, "prop", T, c);
        } else if (b.PropTypes !== void 0 && !jt) {
          jt = !0;
          var Z = Te(b);
          k("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Z || "Unknown");
        }
        typeof b.getDefaultProps == "function" && !b.getDefaultProps.isReactClassApproved && k("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function wt(c) {
      {
        for (var b = Object.keys(c.props), R = 0; R < b.length; R++) {
          var T = b[R];
          if (T !== "children" && T !== "key") {
            at(c), k("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", T), at(null);
            break;
          }
        }
        c.ref !== null && (at(c), k("Invalid attribute `ref` supplied to `React.Fragment`."), at(null));
      }
    }
    var kt = {};
    function qt(c, b, R, T, Z, ee) {
      {
        var G = Le(c);
        if (!G) {
          var V = "";
          (c === void 0 || typeof c == "object" && c !== null && Object.keys(c).length === 0) && (V += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var _e = Pt();
          _e ? V += _e : V += bt();
          var he;
          c === null ? he = "null" : Rt(c) ? he = "array" : c !== void 0 && c.$$typeof === e ? (he = "<" + (Te(c.type) || "Unknown") + " />", V = " Did you accidentally export a JSX literal instead of a component?") : he = typeof c, k("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", he, V);
        }
        var ve = Br(c, b, R, Z, ee);
        if (ve == null)
          return ve;
        if (G) {
          var Fe = b.children;
          if (Fe !== void 0)
            if (T)
              if (Rt(Fe)) {
                for (var it = 0; it < Fe.length; it++)
                  gr(Fe[it], c);
                Object.freeze && Object.freeze(Fe);
              } else
                k("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              gr(Fe, c);
        }
        if (rt.call(b, "key")) {
          var et = Te(c), Ae = Object.keys(b).filter(function(Xr) {
            return Xr !== "key";
          }), Gt = Ae.length > 0 ? "{key: someKey, " + Ae.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!kt[et + Gt]) {
            var Jr = Ae.length > 0 ? "{" + Ae.join(": ..., ") + ": ...}" : "{}";
            k(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Gt, et, Jr, et), kt[et + Gt] = !0;
          }
        }
        return c === r ? wt(ve) : Yr(ve), ve;
      }
    }
    function qr(c, b, R) {
      return qt(c, b, R, !0);
    }
    function Gr(c, b, R) {
      return qt(c, b, R, !1);
    }
    var Hr = Gr, Kr = qr;
    Jt.Fragment = r, Jt.jsx = Hr, Jt.jsxs = Kr;
  }()), Jt;
}
process.env.NODE_ENV === "production" ? dn.exports = Si() : dn.exports = _i();
var Oi = dn.exports, Ri = "_1904ba0", ys = "_1904ba1";
const bs = (a) => /* @__PURE__ */ Oi.jsx("button", { type: "button", className: [Ri, a.className].join(" "), children: a.children });
var oa = {}, Ai = (a) => {
  var {
    fileScope: e,
    css: t
  } = a, r = e.packageName ? [e.packageName, e.filePath].join("/") : e.filePath, n = oa[r];
  if (!n) {
    var o = document.createElement("style");
    e.packageName && o.setAttribute("data-package", e.packageName), o.setAttribute("data-file", e.filePath), o.setAttribute("type", "text/css"), n = oa[r] = o, document.head.appendChild(o);
  }
  n.innerHTML = t;
};
function ji(a) {
  var e = a.match(/^var\((.*)\)$/);
  return e ? e[1] : a;
}
function Pi(a, e) {
  var t = a;
  for (var r of e) {
    if (!(r in t))
      throw new Error("Path ".concat(e.join(" -> "), " does not exist in object"));
    t = t[r];
  }
  return t;
}
function ir(a, e) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [], r = {};
  for (var n in a) {
    var o = a[n], s = [...t, n];
    typeof o == "string" || typeof o == "number" || o == null ? r[n] = e(o, s) : typeof o == "object" && !Array.isArray(o) ? r[n] = ir(o, e, s) : console.warn('Skipping invalid key "'.concat(s.join("."), '". Should be a string, number, null or object. Received: "').concat(Array.isArray(o) ? "Array" : typeof o, '"'));
  }
  return r;
}
/*! https://mths.be/cssesc v3.0.0 by @mathias */
var ki = {}, Ti = ki.hasOwnProperty, xi = function(e, t) {
  if (!e)
    return t;
  var r = {};
  for (var n in t)
    r[n] = Ti.call(e, n) ? e[n] : t[n];
  return r;
}, Fi = /[ -,\.\/:-@\[-\^`\{-~]/, Di = /[ -,\.\/:-@\[\]\^`\{-~]/, Li = /(^|\\+)?(\\[A-F0-9]{1,6})\x20(?![a-fA-F0-9\x20])/g, _n = function a(e, t) {
  t = xi(t, a.options), t.quotes != "single" && t.quotes != "double" && (t.quotes = "single");
  for (var r = t.quotes == "double" ? '"' : "'", n = t.isIdentifier, o = e.charAt(0), s = "", h = 0, l = e.length; h < l; ) {
    var d = e.charAt(h++), g = d.charCodeAt(), y = void 0;
    if (g < 32 || g > 126) {
      if (g >= 55296 && g <= 56319 && h < l) {
        var A = e.charCodeAt(h++);
        (A & 64512) == 56320 ? g = ((g & 1023) << 10) + (A & 1023) + 65536 : h--;
      }
      y = "\\" + g.toString(16).toUpperCase() + " ";
    } else
      t.escapeEverything ? Fi.test(d) ? y = "\\" + d : y = "\\" + g.toString(16).toUpperCase() + " " : /[\t\n\f\r\x0B]/.test(d) ? y = "\\" + g.toString(16).toUpperCase() + " " : d == "\\" || !n && (d == '"' && r == d || d == "'" && r == d) || n && Di.test(d) ? y = "\\" + d : y = d;
    s += y;
  }
  return n && (/^-[-\d]/.test(s) ? s = "\\-" + s.slice(1) : /\d/.test(o) && (s = "\\3" + o + " " + s.slice(1))), s = s.replace(Li, function(_, j, F) {
    return j && j.length % 2 ? _ : (j || "") + F;
  }), !n && t.wrap ? r + s + r : s;
};
_n.options = {
  escapeEverything: !1,
  isIdentifier: !1,
  quotes: "single",
  wrap: !1
};
_n.version = "3.0.0";
var Ii = _n;
const Lr = /* @__PURE__ */ xa(Ii);
var Mi = class {
  constructor(a) {
    const { failure: e, gotoFn: t, output: r } = this._buildTables(a);
    this.gotoFn = t, this.output = r, this.failure = e;
  }
  _buildTables(a) {
    const e = {
      0: {}
    }, t = {};
    let r = 0;
    for (const s of a) {
      let h = 0;
      for (const l of s)
        e[h] && l in e[h] ? h = e[h][l] : (r++, e[h][l] = r, e[r] = {}, h = r, t[r] = []);
      t[h].push(s);
    }
    const n = {}, o = [];
    for (const s in e[0]) {
      const h = e[0][s];
      n[h] = 0, o.push(h);
    }
    for (; o.length > 0; ) {
      const s = o.shift();
      if (s !== void 0)
        for (const h in e[s]) {
          const l = e[s][h];
          o.push(l);
          let d = n[s];
          for (; d > 0 && !(h in e[d]); )
            d = n[d];
          if (h in e[d]) {
            const g = e[d][h];
            n[l] = g, t[l] = [...t[l], ...t[g]];
          } else
            n[l] = 0;
        }
    }
    return {
      gotoFn: e,
      output: t,
      failure: n
    };
  }
  search(a) {
    let e = 0;
    const t = [];
    for (let r = 0; r < a.length; r++) {
      const n = a[r];
      for (; e > 0 && !(n in this.gotoFn[e]); )
        e = this.failure[e];
      if (n in this.gotoFn[e] && (e = this.gotoFn[e][n], this.output[e].length > 0)) {
        const o = this.output[e];
        t.push([r, o]);
      }
    }
    return t;
  }
  match(a) {
    let e = 0;
    for (let t = 0; t < a.length; t++) {
      const r = a[t];
      for (; e > 0 && !(r in this.gotoFn[e]); )
        e = this.failure[e];
      if (r in this.gotoFn[e] && (e = this.gotoFn[e][r], this.output[e].length > 0))
        return !0;
    }
    return !1;
  }
}, Ni = {
  appendCss: () => {
  },
  registerClassName: () => {
  },
  onEndFileScope: () => {
  },
  registerComposition: () => {
  },
  markCompositionUsed: () => {
  },
  getIdentOption: () => process.env.NODE_ENV === "production" ? "short" : "debug"
}, jr = [Ni], Ir = () => {
  if (jr.length < 1)
    throw new Error("No adapter configured");
  return jr[jr.length - 1];
}, Da = !1, zi = (a) => {
  Da || Wi(a);
}, Wi = (a) => {
  if (!a)
    throw new Error('No adapter provided when calling "setAdapter"');
  Da = !0, jr.push(a);
}, La = function() {
  return Ir().appendCss(...arguments);
}, $i = function() {
  return Ir().registerClassName(...arguments);
}, Ui = function() {
  return Ir().markCompositionUsed(...arguments);
}, Bi = function() {
  var e = Ir();
  return "getIdentOption" in e ? e.getIdentOption(...arguments) : process.env.NODE_ENV === "production" ? "short" : "debug";
};
function On(a, e) {
  return e || (e = a.slice(0)), Object.freeze(Object.defineProperties(a, {
    raw: {
      value: Object.freeze(e)
    }
  }));
}
var pe;
(function(a) {
  a.Attribute = "attribute", a.Pseudo = "pseudo", a.PseudoElement = "pseudo-element", a.Tag = "tag", a.Universal = "universal", a.Adjacent = "adjacent", a.Child = "child", a.Descendant = "descendant", a.Parent = "parent", a.Sibling = "sibling", a.ColumnCombinator = "column-combinator";
})(pe || (pe = {}));
var We;
(function(a) {
  a.Any = "any", a.Element = "element", a.End = "end", a.Equals = "equals", a.Exists = "exists", a.Hyphen = "hyphen", a.Not = "not", a.Start = "start";
})(We || (We = {}));
const sa = /^[^\\#]?(?:\\(?:[\da-f]{1,6}\s?|.)|[\w\-\u00b0-\uFFFF])+/, Vi = /\\([\da-f]{1,6}\s?|(\s)|.)/gi, Yi = /* @__PURE__ */ new Map([
  [126, We.Element],
  [94, We.Start],
  [36, We.End],
  [42, We.Any],
  [33, We.Not],
  [124, We.Hyphen]
]), qi = /* @__PURE__ */ new Set([
  "has",
  "not",
  "matches",
  "is",
  "where",
  "host",
  "host-context"
]);
function Gi(a) {
  switch (a.type) {
    case pe.Adjacent:
    case pe.Child:
    case pe.Descendant:
    case pe.Parent:
    case pe.Sibling:
    case pe.ColumnCombinator:
      return !0;
    default:
      return !1;
  }
}
const Hi = /* @__PURE__ */ new Set(["contains", "icontains"]);
function Ki(a, e, t) {
  const r = parseInt(e, 16) - 65536;
  return r !== r || t ? e : r < 0 ? (
    // BMP codepoint
    String.fromCharCode(r + 65536)
  ) : (
    // Supplemental Plane codepoint (surrogate pair)
    String.fromCharCode(r >> 10 | 55296, r & 1023 | 56320)
  );
}
function Xt(a) {
  return a.replace(Vi, Ki);
}
function un(a) {
  return a === 39 || a === 34;
}
function ua(a) {
  return a === 32 || a === 9 || a === 10 || a === 12 || a === 13;
}
function Ji(a) {
  const e = [], t = Ia(e, `${a}`, 0);
  if (t < a.length)
    throw new Error(`Unmatched selector: ${a.slice(t)}`);
  return e;
}
function Ia(a, e, t) {
  let r = [];
  function n(A) {
    const _ = e.slice(t + A).match(sa);
    if (!_)
      throw new Error(`Expected name, found ${e.slice(t)}`);
    const [j] = _;
    return t += A + j.length, Xt(j);
  }
  function o(A) {
    for (t += A; t < e.length && ua(e.charCodeAt(t)); )
      t++;
  }
  function s() {
    t += 1;
    const A = t;
    let _ = 1;
    for (; _ > 0 && t < e.length; t++)
      e.charCodeAt(t) === 40 && !h(t) ? _++ : e.charCodeAt(t) === 41 && !h(t) && _--;
    if (_)
      throw new Error("Parenthesis not matched");
    return Xt(e.slice(A, t - 1));
  }
  function h(A) {
    let _ = 0;
    for (; e.charCodeAt(--A) === 92; )
      _++;
    return (_ & 1) === 1;
  }
  function l() {
    if (r.length > 0 && Gi(r[r.length - 1]))
      throw new Error("Did not expect successive traversals.");
  }
  function d(A) {
    if (r.length > 0 && r[r.length - 1].type === pe.Descendant) {
      r[r.length - 1].type = A;
      return;
    }
    l(), r.push({ type: A });
  }
  function g(A, _) {
    r.push({
      type: pe.Attribute,
      name: A,
      action: _,
      value: n(1),
      namespace: null,
      ignoreCase: "quirks"
    });
  }
  function y() {
    if (r.length && r[r.length - 1].type === pe.Descendant && r.pop(), r.length === 0)
      throw new Error("Empty sub-selector");
    a.push(r);
  }
  if (o(0), e.length === t)
    return t;
  e: for (; t < e.length; ) {
    const A = e.charCodeAt(t);
    switch (A) {
      case 32:
      case 9:
      case 10:
      case 12:
      case 13: {
        (r.length === 0 || r[0].type !== pe.Descendant) && (l(), r.push({ type: pe.Descendant })), o(1);
        break;
      }
      case 62: {
        d(pe.Child), o(1);
        break;
      }
      case 60: {
        d(pe.Parent), o(1);
        break;
      }
      case 126: {
        d(pe.Sibling), o(1);
        break;
      }
      case 43: {
        d(pe.Adjacent), o(1);
        break;
      }
      case 46: {
        g("class", We.Element);
        break;
      }
      case 35: {
        g("id", We.Equals);
        break;
      }
      case 91: {
        o(1);
        let _, j = null;
        e.charCodeAt(t) === 124 ? _ = n(1) : e.startsWith("*|", t) ? (j = "*", _ = n(2)) : (_ = n(0), e.charCodeAt(t) === 124 && e.charCodeAt(t + 1) !== 61 && (j = _, _ = n(1))), o(0);
        let F = We.Exists;
        const E = Yi.get(e.charCodeAt(t));
        if (E) {
          if (F = E, e.charCodeAt(t + 1) !== 61)
            throw new Error("Expected `=`");
          o(2);
        } else e.charCodeAt(t) === 61 && (F = We.Equals, o(1));
        let O = "", k = null;
        if (F !== "exists") {
          if (un(e.charCodeAt(t))) {
            const N = e.charCodeAt(t);
            let B = t + 1;
            for (; B < e.length && (e.charCodeAt(B) !== N || h(B)); )
              B += 1;
            if (e.charCodeAt(B) !== N)
              throw new Error("Attribute value didn't end");
            O = Xt(e.slice(t + 1, B)), t = B + 1;
          } else {
            const N = t;
            for (; t < e.length && (!ua(e.charCodeAt(t)) && e.charCodeAt(t) !== 93 || h(t)); )
              t += 1;
            O = Xt(e.slice(N, t));
          }
          o(0);
          const M = e.charCodeAt(t) | 32;
          M === 115 ? (k = !1, o(1)) : M === 105 && (k = !0, o(1));
        }
        if (e.charCodeAt(t) !== 93)
          throw new Error("Attribute selector didn't terminate");
        t += 1;
        const U = {
          type: pe.Attribute,
          name: _,
          action: F,
          value: O,
          namespace: j,
          ignoreCase: k
        };
        r.push(U);
        break;
      }
      case 58: {
        if (e.charCodeAt(t + 1) === 58) {
          r.push({
            type: pe.PseudoElement,
            name: n(2).toLowerCase(),
            data: e.charCodeAt(t) === 40 ? s() : null
          });
          continue;
        }
        const _ = n(1).toLowerCase();
        let j = null;
        if (e.charCodeAt(t) === 40)
          if (qi.has(_)) {
            if (un(e.charCodeAt(t + 1)))
              throw new Error(`Pseudo-selector ${_} cannot be quoted`);
            if (j = [], t = Ia(j, e, t + 1), e.charCodeAt(t) !== 41)
              throw new Error(`Missing closing parenthesis in :${_} (${e})`);
            t += 1;
          } else {
            if (j = s(), Hi.has(_)) {
              const F = j.charCodeAt(0);
              F === j.charCodeAt(j.length - 1) && un(F) && (j = j.slice(1, -1));
            }
            j = Xt(j);
          }
        r.push({ type: pe.Pseudo, name: _, data: j });
        break;
      }
      case 44: {
        y(), r = [], o(1);
        break;
      }
      default: {
        if (e.startsWith("/*", t)) {
          const F = e.indexOf("*/", t + 2);
          if (F < 0)
            throw new Error("Comment was not terminated");
          t = F + 2, r.length === 0 && o(0);
          break;
        }
        let _ = null, j;
        if (A === 42)
          t += 1, j = "*";
        else if (A === 124) {
          if (j = "", e.charCodeAt(t + 1) === 124) {
            d(pe.ColumnCombinator), o(2);
            break;
          }
        } else if (sa.test(e.slice(t)))
          j = n(0);
        else
          break e;
        e.charCodeAt(t) === 124 && e.charCodeAt(t + 1) !== 124 && (_ = j, e.charCodeAt(t + 1) === 42 ? (j = "*", t += 2) : j = n(1)), r.push(j === "*" ? { type: pe.Universal, namespace: _ } : { type: pe.Tag, name: j, namespace: _ });
      }
    }
  }
  return y(), t;
}
function la(a, e) {
  var t = Object.keys(a);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(a);
    e && (r = r.filter(function(n) {
      return Object.getOwnPropertyDescriptor(a, n).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function fa(a) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? la(Object(t), !0).forEach(function(r) {
      Xi(a, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(t)) : la(Object(t)).forEach(function(r) {
      Object.defineProperty(a, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return a;
}
function Xi(a, e, t) {
  return e = Zi(e), e in a ? Object.defineProperty(a, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : a[e] = t, a;
}
function Zi(a) {
  var e = Qi(a, "string");
  return typeof e == "symbol" ? e : String(e);
}
function Qi(a, e) {
  if (typeof a != "object" || a === null) return a;
  var t = a[Symbol.toPrimitive];
  if (t !== void 0) {
    var r = t.call(a, e || "default");
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(a);
}
const Rn = Ma({});
function Ma(a) {
  return e.withOptions = (t) => Ma(fa(fa({}, a), t)), e;
  function e(t, ...r) {
    const n = typeof t == "string" ? [t] : t.raw, {
      escapeSpecialCharacters: o = Array.isArray(t)
    } = a;
    let s = "";
    for (let d = 0; d < n.length; d++) {
      let g = n[d];
      o && (g = g.replace(/\\\n[ \t]*/g, "").replace(/\\`/g, "`").replace(/\\\$/g, "$").replace(/\\\{/g, "{")), s += g, d < r.length && (s += r[d]);
    }
    const h = s.split(`
`);
    let l = null;
    for (const d of h) {
      const g = d.match(/^(\s+)\S+/);
      if (g) {
        const y = g[1].length;
        l ? l = Math.min(l, y) : l = y;
      }
    }
    if (l !== null) {
      const d = l;
      s = h.map((g) => g[0] === " " || g[0] === "	" ? g.slice(d) : g).join(`
`);
    }
    return s = s.trim(), o && (s = s.replace(/\\n/g, `
`)), s;
  }
}
/*! @license MediaQueryParser - MIT License - Tom Golden (github@tbjgolden.com) */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var xr = function() {
  return xr = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, xr.apply(this, arguments);
};
function pn(a, e) {
  var t = {};
  for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && e.indexOf(r) < 0 && (t[r] = a[r]);
  if (a != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, r = Object.getOwnPropertySymbols(a); n < r.length; n++)
      e.indexOf(r[n]) < 0 && Object.prototype.propertyIsEnumerable.call(a, r[n]) && (t[r[n]] = a[r[n]]);
  return t;
}
function eo(a) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && a[e], r = 0;
  if (t) return t.call(a);
  if (a && typeof a.length == "number") return {
    next: function() {
      return a && r >= a.length && (a = void 0), { value: a && a[r++], done: !a };
    }
  };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function we(a, e) {
  var t = typeof Symbol == "function" && a[Symbol.iterator];
  if (!t) return a;
  var r = t.call(a), n, o = [], s;
  try {
    for (; (e === void 0 || e-- > 0) && !(n = r.next()).done; ) o.push(n.value);
  } catch (h) {
    s = { error: h };
  } finally {
    try {
      n && !n.done && (t = r.return) && t.call(r);
    } finally {
      if (s) throw s.error;
    }
  }
  return o;
}
var to = /(\u000D|\u000C|\u000D\u000A)/g, ro = /[\u0000\uD800-\uDFFF]/g, no = /(\/\*)[\s\S]*?(\*\/)/g, ao = function(e, t) {
  t === void 0 && (t = 0), e = e.replace(to, `
`).replace(ro, "�"), e = e.replace(no, "");
  for (var r = []; t < e.length; t += 1) {
    var n = e.charCodeAt(t);
    if (n === 9 || n === 32 || n === 10) {
      for (var o = e.charCodeAt(++t); o === 9 || o === 32 || o === 10; )
        o = e.charCodeAt(++t);
      t -= 1, r.push({
        type: "<whitespace-token>"
      });
    } else if (n === 34) {
      var s = ca(e, t);
      if (s === null)
        return null;
      var h = we(s, 2), l = h[0], d = h[1];
      r.push({
        type: "<string-token>",
        value: d
      }), t = l;
    } else if (n === 35) {
      if (t + 1 < e.length) {
        var g = e.charCodeAt(t + 1);
        if (g === 95 || g >= 65 && g <= 90 || g >= 97 && g <= 122 || g >= 128 || g >= 48 && g <= 57 || g === 92 && t + 2 < e.length && e.charCodeAt(t + 2) !== 10) {
          var y = Na(e, t + 1) ? "id" : "unrestricted", s = oo(e, t + 1);
          if (s !== null) {
            var A = we(s, 2), l = A[0], d = A[1];
            r.push({
              type: "<hash-token>",
              value: d.toLowerCase(),
              flag: y
            }), t = l;
            continue;
          }
        }
      }
      r.push({
        type: "<delim-token>",
        value: n
      });
    } else if (n === 39) {
      var s = ca(e, t);
      if (s === null)
        return null;
      var _ = we(s, 2), l = _[0], d = _[1];
      r.push({
        type: "<string-token>",
        value: d
      }), t = l;
    } else if (n === 40)
      r.push({
        type: "<(-token>"
      });
    else if (n === 41)
      r.push({
        type: "<)-token>"
      });
    else if (n === 43) {
      var j = Ar(e, t);
      if (j === null)
        r.push({
          type: "<delim-token>",
          value: n
        });
      else {
        var F = we(j, 2), l = F[0], E = F[1];
        E[0] === "<dimension-token>" ? r.push({
          type: "<dimension-token>",
          value: E[1],
          unit: E[2].toLowerCase(),
          flag: "number"
        }) : E[0] === "<number-token>" ? r.push({
          type: E[0],
          value: E[1],
          flag: E[2]
        }) : r.push({
          type: E[0],
          value: E[1],
          flag: "number"
        }), t = l;
      }
    } else if (n === 44)
      r.push({
        type: "<comma-token>"
      });
    else if (n === 45) {
      var O = Ar(e, t);
      if (O !== null) {
        var k = we(O, 2), l = k[0], E = k[1];
        E[0] === "<dimension-token>" ? r.push({
          type: "<dimension-token>",
          value: E[1],
          unit: E[2].toLowerCase(),
          flag: "number"
        }) : E[0] === "<number-token>" ? r.push({
          type: E[0],
          value: E[1],
          flag: E[2]
        }) : r.push({
          type: E[0],
          value: E[1],
          flag: "number"
        }), t = l;
        continue;
      }
      if (t + 2 < e.length) {
        var g = e.charCodeAt(t + 1), U = e.charCodeAt(t + 2);
        if (g === 45 && U === 62) {
          r.push({
            type: "<CDC-token>"
          }), t += 2;
          continue;
        }
      }
      var s = ha(e, t);
      if (s !== null) {
        var M = we(s, 3), l = M[0], d = M[1], N = M[2];
        r.push({
          type: N,
          value: d
        }), t = l;
        continue;
      }
      r.push({
        type: "<delim-token>",
        value: n
      });
    } else if (n === 46) {
      var O = Ar(e, t);
      if (O === null)
        r.push({
          type: "<delim-token>",
          value: n
        });
      else {
        var B = we(O, 2), l = B[0], E = B[1];
        E[0] === "<dimension-token>" ? r.push({
          type: "<dimension-token>",
          value: E[1],
          unit: E[2].toLowerCase(),
          flag: "number"
        }) : E[0] === "<number-token>" ? r.push({
          type: E[0],
          value: E[1],
          flag: E[2]
        }) : r.push({
          type: E[0],
          value: E[1],
          flag: "number"
        }), t = l;
        continue;
      }
    } else if (n === 58)
      r.push({
        type: "<colon-token>"
      });
    else if (n === 59)
      r.push({
        type: "<semicolon-token>"
      });
    else if (n === 60) {
      if (t + 3 < e.length) {
        var g = e.charCodeAt(t + 1), U = e.charCodeAt(t + 2), ce = e.charCodeAt(t + 3);
        if (g === 33 && U === 45 && ce === 45) {
          r.push({
            type: "<CDO-token>"
          }), t += 3;
          continue;
        }
      }
      r.push({
        type: "<delim-token>",
        value: n
      });
    } else if (n === 64) {
      var s = An(e, t + 1);
      if (s !== null) {
        var re = we(s, 2), l = re[0], d = re[1];
        r.push({
          type: "<at-keyword-token>",
          value: d.toLowerCase()
        }), t = l;
        continue;
      }
      r.push({
        type: "<delim-token>",
        value: n
      });
    } else if (n === 91)
      r.push({
        type: "<[-token>"
      });
    else if (n === 92) {
      var s = or(e, t);
      if (s === null)
        return null;
      var Re = we(s, 2), l = Re[0], d = Re[1];
      e = e.slice(0, t) + d + e.slice(l + 1), t -= 1;
    } else if (n === 93)
      r.push({
        type: "<]-token>"
      });
    else if (n === 123)
      r.push({
        type: "<{-token>"
      });
    else if (n === 125)
      r.push({
        type: "<}-token>"
      });
    else if (n >= 48 && n <= 57) {
      var s = Ar(e, t), Le = we(s, 2), l = Le[0], E = Le[1];
      E[0] === "<dimension-token>" ? r.push({
        type: "<dimension-token>",
        value: E[1],
        unit: E[2].toLowerCase(),
        flag: "number"
      }) : E[0] === "<number-token>" ? r.push({
        type: E[0],
        value: E[1],
        flag: E[2]
      }) : r.push({
        type: E[0],
        value: E[1],
        flag: "number"
      }), t = l;
    } else if (n === 95 || n >= 65 && n <= 90 || n >= 97 && n <= 122 || n >= 128) {
      var s = ha(e, t);
      if (s === null)
        return null;
      var Ze = we(s, 3), l = Ze[0], d = Ze[1], N = Ze[2];
      r.push({
        type: N,
        value: d
      }), t = l;
    } else
      r.push({
        type: "<delim-token>",
        value: n
      });
  }
  return r.push({
    type: "<EOF-token>"
  }), r;
}, ca = function(e, t) {
  if (e.length <= t + 1) return null;
  for (var r = e.charCodeAt(t), n = [], o = t + 1; o < e.length; o += 1) {
    var s = e.charCodeAt(o);
    if (s === r)
      return [o, String.fromCharCode.apply(null, n)];
    if (s === 92) {
      var h = or(e, o);
      if (h === null) return null;
      var l = we(h, 2), d = l[0], g = l[1];
      n.push(g), o = d;
    } else {
      if (s === 10)
        return null;
      n.push(s);
    }
  }
  return null;
}, Na = function(e, t) {
  if (e.length <= t) return !1;
  var r = e.charCodeAt(t);
  if (r === 45) {
    if (e.length <= t + 1) return !1;
    var n = e.charCodeAt(t + 1);
    if (n === 45 || n === 95 || n >= 65 && n <= 90 || n >= 97 && n <= 122 || n >= 128)
      return !0;
    if (n === 92) {
      if (e.length <= t + 2) return !1;
      var o = e.charCodeAt(t + 2);
      return o !== 10;
    } else
      return !1;
  } else {
    if (r === 95 || r >= 65 && r <= 90 || r >= 97 && r <= 122 || r >= 128)
      return !0;
    if (r === 92) {
      if (e.length <= t + 1) return !1;
      var n = e.charCodeAt(t + 1);
      return n !== 10;
    } else
      return !1;
  }
}, or = function(e, t) {
  if (e.length <= t + 1 || e.charCodeAt(t) !== 92) return null;
  var r = e.charCodeAt(t + 1);
  if (r === 10)
    return null;
  if (r >= 48 && r <= 57 || r >= 65 && r <= 70 || r >= 97 && r <= 102) {
    for (var n = [r], o = Math.min(t + 7, e.length), s = t + 2; s < o; s += 1) {
      var h = e.charCodeAt(s);
      if (h >= 48 && h <= 57 || h >= 65 && h <= 70 || h >= 97 && h <= 102)
        n.push(h);
      else
        break;
    }
    if (s < e.length) {
      var l = e.charCodeAt(s);
      (l === 9 || l === 32 || l === 10) && (s += 1);
    }
    return [s - 1, parseInt(String.fromCharCode.apply(null, n), 16)];
  } else
    return [t + 1, r];
}, Ar = function(e, t) {
  var r = io(e, t);
  if (r === null) return null;
  var n = we(r, 3), o = n[0], s = n[1], h = n[2], l = An(e, o + 1);
  if (l !== null) {
    var d = we(l, 2), g = d[0], y = d[1];
    return [g, ["<dimension-token>", s, y]];
  }
  return o + 1 < e.length && e.charCodeAt(o + 1) === 37 ? [o + 1, ["<percentage-token>", s]] : [o, ["<number-token>", s, h]];
}, io = function(e, t) {
  if (e.length <= t) return null;
  var r = "integer", n = [], o = e.charCodeAt(t);
  for ((o === 43 || o === 45) && (t += 1, o === 45 && n.push(45)); t < e.length; ) {
    var s = e.charCodeAt(t);
    if (s >= 48 && s <= 57)
      n.push(s), t += 1;
    else
      break;
  }
  if (t + 1 < e.length) {
    var h = e.charCodeAt(t), l = e.charCodeAt(t + 1);
    if (h === 46 && l >= 48 && l <= 57)
      for (n.push(h, l), r = "number", t += 2; t < e.length; ) {
        var s = e.charCodeAt(t);
        if (s >= 48 && s <= 57)
          n.push(s), t += 1;
        else
          break;
      }
  }
  if (t + 1 < e.length) {
    var h = e.charCodeAt(t), l = e.charCodeAt(t + 1), d = e.charCodeAt(t + 2);
    if (h === 69 || h === 101) {
      var g = l >= 48 && l <= 57;
      if (g || (l === 43 || l === 45) && d >= 48 && d <= 57)
        for (r = "number", g ? (n.push(69, l), t += 2) : l === 45 ? (n.push(69, 45, d), t += 3) : (n.push(69, d), t += 3); t < e.length; ) {
          var s = e.charCodeAt(t);
          if (s >= 48 && s <= 57)
            n.push(s), t += 1;
          else
            break;
        }
    }
  }
  var y = String.fromCharCode.apply(null, n), A = r === "number" ? parseFloat(y) : parseInt(y);
  return A === -0 && (A = 0), Number.isNaN(A) ? null : [t - 1, A, r];
}, oo = function(e, t) {
  if (e.length <= t)
    return null;
  for (var r = [], n = e.charCodeAt(t); t < e.length; n = e.charCodeAt(++t)) {
    if (n === 45 || n === 95 || n >= 65 && n <= 90 || n >= 97 && n <= 122 || n >= 128 || n >= 48 && n <= 57) {
      r.push(n);
      continue;
    } else {
      var o = or(e, t);
      if (o !== null) {
        var s = we(o, 2), h = s[0], l = s[1];
        r.push(l), t = h;
        continue;
      }
    }
    break;
  }
  return t === 0 ? null : [t - 1, String.fromCharCode.apply(null, r)];
}, An = function(e, t) {
  if (e.length <= t || !Na(e, t))
    return null;
  for (var r = [], n = e.charCodeAt(t); t < e.length; n = e.charCodeAt(++t)) {
    if (n === 45 || n === 95 || n >= 65 && n <= 90 || n >= 97 && n <= 122 || n >= 128 || n >= 48 && n <= 57) {
      r.push(n);
      continue;
    } else {
      var o = or(e, t);
      if (o !== null) {
        var s = we(o, 2), h = s[0], l = s[1];
        r.push(l), t = h;
        continue;
      }
    }
    break;
  }
  return [t - 1, String.fromCharCode.apply(null, r)];
}, so = function(e, t) {
  for (var r = e.charCodeAt(t); r === 9 || r === 32 || r === 10; )
    r = e.charCodeAt(++t);
  for (var n = [], o = !1; t < e.length; ) {
    if (r === 41)
      return [t, String.fromCharCode.apply(null, n)];
    if (r === 34 || r === 39 || r === 40)
      return null;
    if (r === 9 || r === 32 || r === 10)
      !o && n.length !== 0 && (o = !0);
    else if (r === 92) {
      var s = or(e, t);
      if (s === null || o) return null;
      var h = we(s, 2), l = h[0], d = h[1];
      n.push(d), t = l;
    } else {
      if (o) return null;
      n.push(r);
    }
    r = e.charCodeAt(++t);
  }
  return null;
}, ha = function(e, t) {
  var r = An(e, t);
  if (r === null) return null;
  var n = we(r, 2), o = n[0], s = n[1];
  if (s.toLowerCase() === "url") {
    if (e.length > o + 1) {
      var h = e.charCodeAt(o + 1);
      if (h === 40) {
        for (var l = 2; o + l < e.length; l += 1) {
          var d = e.charCodeAt(o + l);
          if (d === 34 || d === 39)
            return [o + 1, s.toLowerCase(), "<function-token>"];
          if (d !== 9 && d !== 32 && d !== 10) {
            var g = so(e, o + l);
            if (g === null) return null;
            var y = we(g, 2), A = y[0], _ = y[1];
            return [A, _, "<url-token>"];
          }
        }
        return [o + 1, s.toLowerCase(), "<function-token>"];
      }
    }
  } else if (e.length > o + 1) {
    var h = e.charCodeAt(o + 1);
    if (h === 40)
      return [o + 1, s.toLowerCase(), "<function-token>"];
  }
  return [o, s.toLowerCase(), "<ident-token>"];
}, uo = function(e) {
  for (var t = e.length - 1; t >= 0; t--)
    e[t] = lo(e[t]);
  return e;
}, lo = function(e) {
  if (e.mediaCondition === null) return e;
  var t = fo(e.mediaCondition);
  return t.operator === null && t.children.length === 1 && "children" in t.children[0] && (t = t.children[0]), {
    mediaPrefix: e.mediaPrefix,
    mediaType: e.mediaType,
    mediaCondition: t
  };
}, fo = function a(e) {
  for (var t = e.children.length - 1; t >= 0; t--) {
    var r = e.children[t];
    if (!("context" in r)) {
      var n = a(r);
      if (n.operator === null && n.children.length === 1)
        e.children[t] = n.children[0];
      else if (n.operator === e.operator && (n.operator === "and" || n.operator === "or")) {
        for (var o = [t, 1], s = 0; s < n.children.length; s++)
          o.push(n.children[s]);
        e.children.splice.apply(e.children, o);
      }
    }
  }
  return e;
}, De = function(e, t) {
  return t instanceof Error ? new Error("".concat(t.message.trim(), `
`).concat(e.trim())) : new Error(e.trim());
}, co = function(e) {
  return uo(ho(e));
}, ho = function(e) {
  var t = ao(e.trim());
  if (t === null)
    throw De("Failed tokenizing");
  var r = 0, n = t.length - 1;
  if (t[0].type === "<at-keyword-token>" && t[0].value === "media") {
    if (t[1].type !== "<whitespace-token>")
      throw De("Expected whitespace after media");
    r = 2;
    for (var o = 2; o < t.length - 1; o++) {
      var s = t[o];
      if (s.type === "<{-token>") {
        n = o;
        break;
      } else if (s.type === "<semicolon-token>")
        throw De("Expected '{' in media query but found ';'");
    }
  }
  return t = t.slice(r, n), vo(t);
}, po = function(e) {
  for (var t = [], r = !1, n = 0; n < e.length; n++)
    e[n].type === "<whitespace-token>" ? (r = !0, t.length > 0 && (t[t.length - 1].wsAfter = !0)) : (t.push(xr(xr({}, e[n]), {
      wsBefore: r,
      wsAfter: !1
    })), r = !1);
  return t;
}, vo = function(e) {
  for (var t, r, n = [[]], o = 0; o < e.length; o++) {
    var s = e[o];
    s.type === "<comma-token>" ? n.push([]) : n[n.length - 1].push(s);
  }
  var h = n.map(po);
  if (h.length === 1 && h[0].length === 0)
    return [{
      mediaCondition: null,
      mediaPrefix: null,
      mediaType: "all"
    }];
  var l = h.map(function(_) {
    return _.length === 0 ? null : mo(_);
  }), d = [];
  try {
    for (var g = eo(l), y = g.next(); !y.done; y = g.next()) {
      var A = y.value;
      A !== null && d.push(A);
    }
  } catch (_) {
    t = {
      error: _
    };
  } finally {
    try {
      y && !y.done && (r = g.return) && r.call(g);
    } finally {
      if (t) throw t.error;
    }
  }
  if (d.length === 0)
    throw De("No valid media queries");
  return d;
}, mo = function(e) {
  var t = e[0];
  if (t.type === "<(-token>")
    try {
      return {
        mediaPrefix: null,
        mediaType: "all",
        mediaCondition: ln(e, !0)
      };
    } catch (y) {
      throw De("Expected media condition after '('", y);
    }
  else if (t.type === "<ident-token>") {
    var r = null, n = void 0, o = t.value;
    (o === "only" || o === "not") && (r = o);
    var s = r === null ? 0 : 1;
    if (e.length <= s)
      throw De("Expected extra token in media query");
    var h = e[s];
    if (h.type === "<ident-token>") {
      var l = h.value;
      if (l === "all")
        n = "all";
      else if (l === "print" || l === "screen")
        n = l;
      else if (l === "tty" || l === "tv" || l === "projection" || l === "handheld" || l === "braille" || l === "embossed" || l === "aural" || l === "speech")
        r = r === "not" ? null : "not", n = "all";
      else
        throw De("Unknown ident '".concat(l, "' in media query"));
    } else if (r === "not" && h.type === "<(-token>") {
      var d = [{
        type: "<(-token>",
        wsBefore: !1,
        wsAfter: !1
      }];
      d.push.apply(d, e), d.push({
        type: "<)-token>",
        wsBefore: !1,
        wsAfter: !1
      });
      try {
        return {
          mediaPrefix: null,
          mediaType: "all",
          mediaCondition: ln(d, !0)
        };
      } catch (y) {
        throw De("Expected media condition after '('", y);
      }
    } else
      throw De("Invalid media query");
    if (s + 1 === e.length)
      return {
        mediaPrefix: r,
        mediaType: n,
        mediaCondition: null
      };
    if (s + 4 < e.length) {
      var g = e[s + 1];
      if (g.type === "<ident-token>" && g.value === "and")
        try {
          return {
            mediaPrefix: r,
            mediaType: n,
            mediaCondition: ln(e.slice(s + 2), !1)
          };
        } catch (y) {
          throw De("Expected media condition after 'and'", y);
        }
      else
        throw De("Expected 'and' after media prefix");
    } else
      throw De("Expected media condition after media prefix");
  } else
    throw De("Expected media condition or media prefix");
}, ln = function a(e, t, r) {
  if (r === void 0 && (r = null), e.length < 3 || e[0].type !== "<(-token>" || e[e.length - 1].type !== "<)-token>")
    throw new Error("Invalid media condition");
  for (var n = e.length - 1, o = 0, s = 0, h = 0; h < e.length; h++) {
    var l = e[h];
    if (l.type === "<(-token>" ? (s += 1, o = Math.max(o, s)) : l.type === "<)-token>" && (s -= 1), s === 0) {
      n = h;
      break;
    }
  }
  if (s !== 0)
    throw new Error(`Mismatched parens
Invalid media condition`);
  var d, g = e.slice(0, n + 1);
  if (o === 1 ? d = go(g) : g[1].type === "<ident-token>" && g[1].value === "not" ? d = a(g.slice(2, -1), !0, "not") : d = a(g.slice(1, -1), !0), n === e.length - 1)
    return {
      operator: r,
      children: [d]
    };
  var y = e[n + 1];
  if (y.type !== "<ident-token>")
    throw new Error(`Invalid operator
Invalid media condition`);
  if (r !== null && r !== y.value)
    throw new Error("'".concat(y.value, "' and '").concat(r, `' must not be at same level
Invalid media condition`));
  if (y.value === "or" && !t)
    throw new Error(`Cannot use 'or' at top level of a media query
Invalid media condition`);
  if (y.value !== "and" && y.value !== "or")
    throw new Error("Invalid operator: '".concat(y.value, `'
Invalid media condition`));
  var A = a(e.slice(n + 2), t, y.value);
  return {
    operator: y.value,
    children: [d].concat(A.children)
  };
}, go = function(e) {
  if (e.length < 3 || e[0].type !== "<(-token>" || e[e.length - 1].type !== "<)-token>")
    throw new Error("Invalid media feature");
  for (var t = [e[0]], r = 1; r < e.length; r++) {
    if (r < e.length - 2) {
      var n = e[r], o = e[r + 1], s = e[r + 2];
      if (n.type === "<number-token>" && n.value > 0 && o.type === "<delim-token>" && o.value === 47 && s.type === "<number-token>" && s.value > 0) {
        t.push({
          type: "<ratio-token>",
          numerator: n.value,
          denominator: s.value,
          wsBefore: n.wsBefore,
          wsAfter: s.wsAfter
        }), r += 2;
        continue;
      }
    }
    t.push(e[r]);
  }
  var h = t[1];
  if (h.type === "<ident-token>" && t.length === 3)
    return {
      context: "boolean",
      feature: h.value
    };
  if (t.length === 5 && t[1].type === "<ident-token>" && t[2].type === "<colon-token>") {
    var l = t[3];
    if (l.type === "<number-token>" || l.type === "<dimension-token>" || l.type === "<ratio-token>" || l.type === "<ident-token>") {
      var d = t[1].value, g = null, y = d.slice(0, 4);
      y === "min-" ? (g = "min", d = d.slice(4)) : y === "max-" && (g = "max", d = d.slice(4)), l.wsBefore, l.wsAfter;
      var A = pn(l, ["wsBefore", "wsAfter"]);
      return {
        context: "value",
        prefix: g,
        feature: d,
        value: A
      };
    }
  } else if (t.length >= 5)
    try {
      var _ = yo(t);
      return {
        context: "range",
        feature: _.featureName,
        range: _
      };
    } catch (j) {
      throw De("Invalid media feature", j);
    }
  throw new Error("Invalid media feature");
}, yo = function(e) {
  var t, r, n, o;
  if (e.length < 5 || e[0].type !== "<(-token>" || e[e.length - 1].type !== "<)-token>")
    throw new Error("Invalid range");
  var s = {
    leftToken: null,
    leftOp: null,
    featureName: "",
    rightOp: null,
    rightToken: null
  }, h = e[1].type === "<number-token>" || e[1].type === "<dimension-token>" || e[1].type === "<ratio-token>" || e[1].type === "<ident-token>" && e[1].value === "infinite";
  if (e[2].type === "<delim-token>") {
    if (e[2].value === 60)
      e[3].type === "<delim-token>" && e[3].value === 61 && !e[3].wsBefore ? s[h ? "leftOp" : "rightOp"] = "<=" : s[h ? "leftOp" : "rightOp"] = "<";
    else if (e[2].value === 62)
      e[3].type === "<delim-token>" && e[3].value === 61 && !e[3].wsBefore ? s[h ? "leftOp" : "rightOp"] = ">=" : s[h ? "leftOp" : "rightOp"] = ">";
    else if (e[2].value === 61)
      s[h ? "leftOp" : "rightOp"] = "=";
    else
      throw new Error("Invalid range");
    if (h)
      s.leftToken = e[1];
    else if (e[1].type === "<ident-token>")
      s.featureName = e[1].value;
    else
      throw new Error("Invalid range");
    var l = 2 + ((r = (t = s[h ? "leftOp" : "rightOp"]) === null || t === void 0 ? void 0 : t.length) !== null && r !== void 0 ? r : 0), d = e[l];
    if (h)
      if (d.type === "<ident-token>") {
        if (s.featureName = d.value, e.length >= 7) {
          var g = e[l + 1], y = e[l + 2];
          if (g.type === "<delim-token>") {
            var A = g.value;
            if (A === 60)
              y.type === "<delim-token>" && y.value === 61 && !y.wsBefore ? s.rightOp = "<=" : s.rightOp = "<";
            else if (A === 62)
              y.type === "<delim-token>" && y.value === 61 && !y.wsBefore ? s.rightOp = ">=" : s.rightOp = ">";
            else
              throw new Error("Invalid range");
            var _ = e[l + 1 + ((o = (n = s.rightOp) === null || n === void 0 ? void 0 : n.length) !== null && o !== void 0 ? o : 0)];
            s.rightToken = _;
          } else
            throw new Error("Invalid range");
        } else if (l + 2 !== e.length)
          throw new Error("Invalid range");
      } else
        throw new Error("Invalid range");
    else
      s.rightToken = d;
    var j = null, F = s.leftToken, E = s.leftOp, O = s.featureName, k = s.rightOp, U = s.rightToken, M = null;
    if (F !== null) {
      if (F.type === "<ident-token>") {
        var N = F.type, B = F.value;
        B === "infinite" && (M = {
          type: N,
          value: B
        });
      } else if (F.type === "<number-token>" || F.type === "<dimension-token>" || F.type === "<ratio-token>") {
        F.wsBefore, F.wsAfter;
        var ce = pn(F, ["wsBefore", "wsAfter"]);
        M = ce;
      }
    }
    var re = null;
    if (U !== null) {
      if (U.type === "<ident-token>") {
        var N = U.type, B = U.value;
        B === "infinite" && (re = {
          type: N,
          value: B
        });
      } else if (U.type === "<number-token>" || U.type === "<dimension-token>" || U.type === "<ratio-token>") {
        U.wsBefore, U.wsAfter;
        var Re = pn(U, ["wsBefore", "wsAfter"]);
        re = Re;
      }
    }
    if (M !== null && re !== null)
      if ((E === "<" || E === "<=") && (k === "<" || k === "<="))
        j = {
          leftToken: M,
          leftOp: E,
          featureName: O,
          rightOp: k,
          rightToken: re
        };
      else if ((E === ">" || E === ">=") && (k === ">" || k === ">="))
        j = {
          leftToken: M,
          leftOp: E,
          featureName: O,
          rightOp: k,
          rightToken: re
        };
      else
        throw new Error("Invalid range");
    else M === null && E === null && k !== null && re !== null ? j = {
      leftToken: M,
      leftOp: E,
      featureName: O,
      rightOp: k,
      rightToken: re
    } : M !== null && E !== null && k === null && re === null && (j = {
      leftToken: M,
      leftOp: E,
      featureName: O,
      rightOp: k,
      rightToken: re
    });
    return j;
  } else
    throw new Error("Invalid range");
};
function bo(a, e) {
  if (typeof a != "object" || !a) return a;
  var t = a[Symbol.toPrimitive];
  if (t !== void 0) {
    var r = t.call(a, e || "default");
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(a);
}
function wo(a) {
  var e = bo(a, "string");
  return typeof e == "symbol" ? e : String(e);
}
function Co(a, e, t) {
  return e = wo(e), e in a ? Object.defineProperty(a, e, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : a[e] = t, a;
}
function da(a, e) {
  var t = Object.keys(a);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(a);
    e && (r = r.filter(function(n) {
      return Object.getOwnPropertyDescriptor(a, n).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function ht(a) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? da(Object(t), !0).forEach(function(r) {
      Co(a, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(t)) : da(Object(t)).forEach(function(r) {
      Object.defineProperty(a, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return a;
}
function Eo(a, e) {
  if (a == null) return {};
  var t = {}, r = Object.keys(a), n, o;
  for (o = 0; o < r.length; o++)
    n = r[o], !(e.indexOf(n) >= 0) && (t[n] = a[n]);
  return t;
}
function vn(a, e) {
  if (a == null) return {};
  var t = Eo(a, e), r, n;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(a);
    for (n = 0; n < o.length; n++)
      r = o[n], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(a, r) && (t[r] = a[r]);
  }
  return t;
}
function Zt(a, e) {
  for (var t in a)
    e(a[t], t);
}
function Ft(a, e) {
  var t = {};
  for (var r in a)
    e.indexOf(r) === -1 && (t[r] = a[r]);
  return t;
}
function So(a, e) {
  var t = {};
  for (var r in a)
    t[e(a[r], r)] = a[r];
  return t;
}
var pa;
function _o(a) {
  return a.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
var Oo = (a, e) => {
  var t = () => {
    var n = new RegExp(".".concat(_o(Lr(e, {
      isIdentifier: !0
    }))), "g");
    return a.replace(n, "&");
  }, r;
  try {
    r = Ji(a);
  } catch {
    throw new Error("Invalid selector: ".concat(t()));
  }
  r.forEach((n) => {
    try {
      for (var o = n.length - 1; o >= -1; o--) {
        if (!n[o])
          throw new Error();
        var s = n[o];
        if (s.type === "child" || s.type === "parent" || s.type === "sibling" || s.type === "adjacent" || s.type === "descendant")
          throw new Error();
        if (s.type === "attribute" && s.name === "class" && s.value === e)
          return;
      }
    } catch {
      throw new Error(Rn(pa || (pa = On([`
        Invalid selector: `, `
    
        Style selectors must target the '&' character (along with any modifiers), e.g. `, " or ", `.
        
        This is to ensure that each style block only affects the styling of a single class.
        
        If your selector is targeting another class, you should move it to the style definition for that class, e.g. given we have styles for 'parent' and 'child' elements, instead of adding a selector of `, ") to 'parent', you should add ", ` to 'child').
        
        If your selector is targeting something global, use the 'globalStyle' function instead, e.g. if you wanted to write `, ", you should instead write 'globalStyle(", `, { ... })'
      `])), t(), "`${parent} &`", "`${parent} &:hover`", "`& ${child}`", "`${parent} &`", "`& h1`", "`${parent} h1`"));
    }
  });
};
class Fr {
  /**
   * Stores information about where conditions must be in relation to other conditions
   *
   * e.g. mobile -> tablet, desktop
   */
  constructor() {
    this.ruleset = /* @__PURE__ */ new Map(), this.precedenceLookup = /* @__PURE__ */ new Map();
  }
  findOrCreateCondition(e) {
    var t = this.ruleset.get(e);
    return t || (t = {
      query: e,
      rules: [],
      children: new Fr()
    }, this.ruleset.set(e, t)), t;
  }
  getConditionalRulesetByPath(e) {
    var t = this;
    for (var r of e) {
      var n = t.findOrCreateCondition(r);
      t = n.children;
    }
    return t;
  }
  addRule(e, t, r) {
    var n = this.getConditionalRulesetByPath(r), o = n.findOrCreateCondition(t);
    if (!o)
      throw new Error("Failed to add conditional rule");
    o.rules.push(e);
  }
  addConditionPrecedence(e, t) {
    for (var r = this.getConditionalRulesetByPath(e), n = 0; n < t.length; n++) {
      var o, s = t[n], h = (o = r.precedenceLookup.get(s)) !== null && o !== void 0 ? o : /* @__PURE__ */ new Set();
      for (var l of t.slice(n + 1))
        h.add(l);
      r.precedenceLookup.set(s, h);
    }
  }
  isCompatible(e) {
    for (var [t, r] of this.precedenceLookup.entries())
      for (var n of r) {
        var o;
        if ((o = e.precedenceLookup.get(n)) !== null && o !== void 0 && o.has(t))
          return !1;
      }
    for (var {
      query: s,
      children: h
    } of e.ruleset.values()) {
      var l = this.ruleset.get(s);
      if (l && !l.children.isCompatible(h))
        return !1;
    }
    return !0;
  }
  merge(e) {
    for (var {
      query: t,
      rules: r,
      children: n
    } of e.ruleset.values()) {
      var o = this.ruleset.get(t);
      o ? (o.rules.push(...r), o.children.merge(n)) : this.ruleset.set(t, {
        query: t,
        rules: r,
        children: n
      });
    }
    for (var [s, h] of e.precedenceLookup.entries()) {
      var l, d = (l = this.precedenceLookup.get(s)) !== null && l !== void 0 ? l : /* @__PURE__ */ new Set();
      this.precedenceLookup.set(s, /* @__PURE__ */ new Set([...d, ...h]));
    }
  }
  /**
   * Merge another ConditionalRuleset into this one if they are compatible
   *
   * @returns true if successful, false if the ruleset is incompatible
   */
  mergeIfCompatible(e) {
    return this.isCompatible(e) ? (this.merge(e), !0) : !1;
  }
  getSortedRuleset() {
    var e = this, t = [], r = function(h) {
      var l = e.ruleset.get(n);
      if (!l)
        throw new Error("Can't find condition for ".concat(n));
      var d = t.findIndex((g) => h.has(g.query));
      d > -1 ? t.splice(d, 0, l) : t.push(l);
    };
    for (var [n, o] of this.precedenceLookup.entries())
      r(o);
    return t;
  }
  renderToArray() {
    var e = [];
    for (var {
      query: t,
      rules: r,
      children: n
    } of this.getSortedRuleset()) {
      var o = {};
      for (var s of r)
        o[s.selector] = ht(ht({}, o[s.selector]), s.rule);
      Object.assign(o, ...n.renderToArray()), e.push({
        [t]: o
      });
    }
    return e;
  }
}
var za = {
  ":-moz-any-link": !0,
  ":-moz-full-screen": !0,
  ":-moz-placeholder": !0,
  ":-moz-read-only": !0,
  ":-moz-read-write": !0,
  ":-ms-fullscreen": !0,
  ":-ms-input-placeholder": !0,
  ":-webkit-any-link": !0,
  ":-webkit-full-screen": !0,
  "::-moz-color-swatch": !0,
  "::-moz-list-bullet": !0,
  "::-moz-list-number": !0,
  "::-moz-page-sequence": !0,
  "::-moz-page": !0,
  "::-moz-placeholder": !0,
  "::-moz-progress-bar": !0,
  "::-moz-range-progress": !0,
  "::-moz-range-thumb": !0,
  "::-moz-range-track": !0,
  "::-moz-scrolled-page-sequence": !0,
  "::-moz-selection": !0,
  "::-ms-backdrop": !0,
  "::-ms-browse": !0,
  "::-ms-check": !0,
  "::-ms-clear": !0,
  "::-ms-fill-lower": !0,
  "::-ms-fill-upper": !0,
  "::-ms-fill": !0,
  "::-ms-reveal": !0,
  "::-ms-thumb": !0,
  "::-ms-ticks-after": !0,
  "::-ms-ticks-before": !0,
  "::-ms-tooltip": !0,
  "::-ms-track": !0,
  "::-ms-value": !0,
  "::-webkit-backdrop": !0,
  "::-webkit-calendar-picker-indicator": !0,
  "::-webkit-inner-spin-button": !0,
  "::-webkit-input-placeholder": !0,
  "::-webkit-meter-bar": !0,
  "::-webkit-meter-even-less-good-value": !0,
  "::-webkit-meter-inner-element": !0,
  "::-webkit-meter-optimum-value": !0,
  "::-webkit-meter-suboptimum-value": !0,
  "::-webkit-outer-spin-button": !0,
  "::-webkit-progress-bar": !0,
  "::-webkit-progress-inner-element": !0,
  "::-webkit-progress-inner-value": !0,
  "::-webkit-progress-value": !0,
  "::-webkit-resizer": !0,
  "::-webkit-scrollbar-button": !0,
  "::-webkit-scrollbar-corner": !0,
  "::-webkit-scrollbar-thumb": !0,
  "::-webkit-scrollbar-track-piece": !0,
  "::-webkit-scrollbar-track": !0,
  "::-webkit-scrollbar": !0,
  "::-webkit-search-cancel-button": !0,
  "::-webkit-search-results-button": !0,
  "::-webkit-slider-runnable-track": !0,
  "::-webkit-slider-thumb": !0,
  "::after": !0,
  "::backdrop": !0,
  "::before": !0,
  "::cue": !0,
  "::file-selector-button": !0,
  "::first-letter": !0,
  "::first-line": !0,
  "::grammar-error": !0,
  "::marker": !0,
  "::placeholder": !0,
  "::selection": !0,
  "::spelling-error": !0,
  "::target-text": !0,
  "::view-transition-group": !0,
  "::view-transition-image-pair": !0,
  "::view-transition-new": !0,
  "::view-transition-old": !0,
  "::view-transition": !0,
  ":active": !0,
  ":after": !0,
  ":any-link": !0,
  ":before": !0,
  ":blank": !0,
  ":checked": !0,
  ":default": !0,
  ":defined": !0,
  ":disabled": !0,
  ":empty": !0,
  ":enabled": !0,
  ":first-child": !0,
  ":first-letter": !0,
  ":first-line": !0,
  ":first-of-type": !0,
  ":first": !0,
  ":focus-visible": !0,
  ":focus-within": !0,
  ":focus": !0,
  ":fullscreen": !0,
  ":hover": !0,
  ":in-range": !0,
  ":indeterminate": !0,
  ":invalid": !0,
  ":last-child": !0,
  ":last-of-type": !0,
  ":left": !0,
  ":link": !0,
  ":only-child": !0,
  ":only-of-type": !0,
  ":optional": !0,
  ":out-of-range": !0,
  ":placeholder-shown": !0,
  ":read-only": !0,
  ":read-write": !0,
  ":required": !0,
  ":right": !0,
  ":root": !0,
  ":scope": !0,
  ":target": !0,
  ":valid": !0,
  ":visited": !0
}, Ro = Object.keys(za), Ao = za, va, ma = (a, e) => new Error(Rn(va || (va = On([`
    Invalid media query: "`, `"

    `, `

    Read more on MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries
  `])), a, e)), jo = (a) => {
  if (a === "@media ")
    throw ma(a, "Query is empty");
  try {
    co(a);
  } catch (e) {
    throw ma(a, e.message);
  }
}, Po = ["vars"], ko = ["content"], Wa = "__DECLARATION", To = {
  animationIterationCount: !0,
  borderImage: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  columnCount: !0,
  columns: !0,
  flex: !0,
  flexGrow: !0,
  flexShrink: !0,
  fontWeight: !0,
  gridArea: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnStart: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowStart: !0,
  initialLetter: !0,
  lineClamp: !0,
  lineHeight: !0,
  maxLines: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  scale: !0,
  tabSize: !0,
  WebkitLineClamp: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  // svg properties
  fillOpacity: !0,
  floodOpacity: !0,
  maskBorder: !0,
  maskBorderOutset: !0,
  maskBorderSlice: !0,
  maskBorderWidth: !0,
  shapeImageThreshold: !0,
  stopOpacity: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0
};
function xo(a) {
  return a.replace(/([A-Z])/g, "-$1").replace(/^ms-/, "-ms-").toLowerCase();
}
function Fo(a, e, t, r) {
  var n = a.slice(0, e), o = a.slice(t);
  return "".concat(n).concat(r).concat(o);
}
var Do = "  ", Dt = [...Ro, "@layer", "@media", "@supports", "@container", "selectors"];
class Lo {
  constructor(e, t) {
    this.rules = [], this.conditionalRulesets = [new Fr()], this.fontFaceRules = [], this.keyframesRules = [], this.propertyRules = [], this.localClassNamesMap = new Map(e.map((r) => [r, r])), this.localClassNamesSearch = new Mi(e), this.layers = /* @__PURE__ */ new Map(), this.composedClassLists = t.map((r) => {
      var {
        identifier: n,
        classList: o
      } = r;
      return {
        identifier: n,
        regex: RegExp("(".concat(o, ")"), "g")
      };
    }).reverse();
  }
  processCssObj(e) {
    if (e.type === "fontFace") {
      this.fontFaceRules.push(e.rule);
      return;
    }
    if (e.type === "property") {
      this.propertyRules.push(e);
      return;
    }
    if (e.type === "keyframes") {
      e.rule = Object.fromEntries(Object.entries(e.rule).map((o) => {
        var [s, h] = o;
        return [s, this.transformVars(this.transformProperties(h))];
      })), this.keyframesRules.push(e);
      return;
    }
    if (this.currConditionalRuleset = new Fr(), e.type === "layer") {
      var t = "@layer ".concat(e.name);
      this.addLayer([t]);
    } else {
      var r = Ft(e.rule, Dt);
      this.addRule({
        selector: e.selector,
        rule: r
      }), this.transformLayer(e, e.rule["@layer"]), this.transformMedia(e, e.rule["@media"]), this.transformSupports(e, e.rule["@supports"]), this.transformContainer(e, e.rule["@container"]), this.transformSimplePseudos(e, e.rule), this.transformSelectors(e, e.rule);
    }
    var n = this.conditionalRulesets[this.conditionalRulesets.length - 1];
    n.mergeIfCompatible(this.currConditionalRuleset) || this.conditionalRulesets.push(this.currConditionalRuleset);
  }
  addConditionalRule(e, t) {
    var r = this.transformVars(this.transformProperties(e.rule)), n = this.transformSelector(e.selector);
    if (!this.currConditionalRuleset)
      throw new Error("Couldn't add conditional rule");
    var o = t[t.length - 1], s = t.slice(0, t.length - 1);
    this.currConditionalRuleset.addRule({
      selector: n,
      rule: r
    }, o, s);
  }
  addRule(e) {
    var t = this.transformVars(this.transformProperties(e.rule)), r = this.transformSelector(e.selector);
    this.rules.push({
      selector: r,
      rule: t
    });
  }
  addLayer(e) {
    var t = e.join(" - ");
    this.layers.set(t, e);
  }
  transformProperties(e) {
    return this.transformContent(this.pixelifyProperties(e));
  }
  pixelifyProperties(e) {
    return Zt(e, (t, r) => {
      typeof t == "number" && t !== 0 && !To[r] && (e[r] = "".concat(t, "px"));
    }), e;
  }
  transformVars(e) {
    var {
      vars: t
    } = e, r = vn(e, Po);
    return t ? ht(ht({}, So(t, (n, o) => ji(o))), r) : r;
  }
  transformContent(e) {
    var {
      content: t
    } = e, r = vn(e, ko);
    if (typeof t > "u")
      return r;
    var n = Array.isArray(t) ? t : [t];
    return ht({
      content: n.map((o) => (
        // This logic was adapted from Stitches :)
        o && (o.includes('"') || o.includes("'") || /^([A-Za-z\-]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)(\s|$)/.test(o)) ? o : '"'.concat(o, '"')
      ))
    }, r);
  }
  transformClassname(e) {
    return ".".concat(Lr(e, {
      isIdentifier: !0
    }));
  }
  transformSelector(e) {
    var t = e, r = function(j) {
      t = t.replace(o, () => (Ui(j), j));
    };
    for (var {
      identifier: n,
      regex: o
    } of this.composedClassLists)
      r(n);
    if (this.localClassNamesMap.has(t))
      return this.transformClassname(t);
    for (var s = this.localClassNamesSearch.search(t), h = t.length, l = s.length - 1; l >= 0; l--) {
      var [d, [g]] = s[l], y = d - g.length + 1, A = h <= d;
      A || (h = y, t[y - 1] !== "." && (t = Fo(t, y, d + 1, this.transformClassname(g))));
    }
    return t;
  }
  transformSelectors(e, t, r) {
    Zt(t.selectors, (n, o) => {
      if (e.type !== "local")
        throw new Error("Selectors are not allowed within ".concat(e.type === "global" ? '"globalStyle"' : '"selectors"'));
      var s = this.transformSelector(o.replace(RegExp("&", "g"), e.selector));
      Oo(s, e.selector);
      var h = {
        selector: s,
        rule: Ft(n, Dt)
      };
      r ? this.addConditionalRule(h, r) : this.addRule(h);
      var l = {
        type: "selector",
        selector: s,
        rule: n
      };
      this.transformLayer(l, n["@layer"], r), this.transformSupports(l, n["@supports"], r), this.transformMedia(l, n["@media"], r);
    });
  }
  transformMedia(e, t) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    if (t) {
      var n;
      (n = this.currConditionalRuleset) === null || n === void 0 || n.addConditionPrecedence(r, Object.keys(t).map((d) => "@media ".concat(d)));
      for (var [o, s] of Object.entries(t)) {
        var h = "@media ".concat(o);
        jo(h);
        var l = [...r, h];
        this.addConditionalRule({
          selector: e.selector,
          rule: Ft(s, Dt)
        }, l), e.type === "local" && (this.transformSimplePseudos(e, s, l), this.transformSelectors(e, s, l)), this.transformLayer(e, s["@layer"], l), this.transformSupports(e, s["@supports"], l), this.transformContainer(e, s["@container"], l);
      }
    }
  }
  transformContainer(e, t) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    if (t) {
      var n;
      (n = this.currConditionalRuleset) === null || n === void 0 || n.addConditionPrecedence(r, Object.keys(t).map((o) => "@container ".concat(o))), Zt(t, (o, s) => {
        var h = "@container ".concat(s), l = [...r, h];
        this.addConditionalRule({
          selector: e.selector,
          rule: Ft(o, Dt)
        }, l), e.type === "local" && (this.transformSimplePseudos(e, o, l), this.transformSelectors(e, o, l)), this.transformLayer(e, o["@layer"], l), this.transformSupports(e, o["@supports"], l), this.transformMedia(e, o["@media"], l);
      });
    }
  }
  transformLayer(e, t) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    if (t) {
      var n;
      (n = this.currConditionalRuleset) === null || n === void 0 || n.addConditionPrecedence(r, Object.keys(t).map((o) => "@layer ".concat(o))), Zt(t, (o, s) => {
        var h = [...r, "@layer ".concat(s)];
        this.addLayer(h), this.addConditionalRule({
          selector: e.selector,
          rule: Ft(o, Dt)
        }, h), e.type === "local" && (this.transformSimplePseudos(e, o, h), this.transformSelectors(e, o, h)), this.transformMedia(e, o["@media"], h), this.transformSupports(e, o["@supports"], h), this.transformContainer(e, o["@container"], h);
      });
    }
  }
  transformSupports(e, t) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    if (t) {
      var n;
      (n = this.currConditionalRuleset) === null || n === void 0 || n.addConditionPrecedence(r, Object.keys(t).map((o) => "@supports ".concat(o))), Zt(t, (o, s) => {
        var h = [...r, "@supports ".concat(s)];
        this.addConditionalRule({
          selector: e.selector,
          rule: Ft(o, Dt)
        }, h), e.type === "local" && (this.transformSimplePseudos(e, o, h), this.transformSelectors(e, o, h)), this.transformLayer(e, o["@layer"], h), this.transformMedia(e, o["@media"], h), this.transformContainer(e, o["@container"], h);
      });
    }
  }
  transformSimplePseudos(e, t, r) {
    for (var n of Object.keys(t))
      if (Ao[n]) {
        if (e.type !== "local")
          throw new Error("Simple pseudos are not valid in ".concat(e.type === "global" ? '"globalStyle"' : '"selectors"'));
        r ? this.addConditionalRule({
          selector: "".concat(e.selector).concat(n),
          rule: t[n]
        }, r) : this.addRule({
          conditions: r,
          selector: "".concat(e.selector).concat(n),
          rule: t[n]
        });
      }
  }
  toCss() {
    var e = [];
    for (var t of this.fontFaceRules)
      e.push(ft({
        "@font-face": t
      }));
    for (var r of this.propertyRules)
      e.push(ft({
        ["@property ".concat(r.name)]: r.rule
      }));
    for (var n of this.keyframesRules)
      e.push(ft({
        ["@keyframes ".concat(n.name)]: n.rule
      }));
    for (var o of this.layers.values()) {
      var [s, ...h] = o.reverse(), l = {
        [s]: Wa
      };
      for (var d of h)
        l = {
          [d]: l
        };
      e.push(ft(l));
    }
    for (var g of this.rules)
      e.push(ft({
        [g.selector]: g.rule
      }));
    for (var y of this.conditionalRulesets)
      for (var A of y.renderToArray())
        e.push(ft(A));
    return e.filter(Boolean);
  }
}
function ft(a) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", t = [], r = function(s) {
    var h = a[s];
    if (h && Array.isArray(h))
      t.push(...h.map((d) => ft({
        [s]: d
      }, e)));
    else if (h && typeof h == "object") {
      var l = Object.keys(h).length === 0;
      l || t.push("".concat(e).concat(s, ` {
`).concat(ft(h, e + Do), `
`).concat(e, "}"));
    } else h === Wa ? t.push("".concat(e).concat(s, ";")) : t.push("".concat(e).concat(s.startsWith("--") ? s : xo(s), ": ").concat(h, ";"));
  };
  for (var n of Object.keys(a))
    r(n);
  return t.join(`
`);
}
function Io(a) {
  var {
    localClassNames: e,
    cssObjs: t,
    composedClassLists: r
  } = a, n = new Lo(e, r);
  for (var o of t)
    n.processCssObj(o);
  return n.toCss();
}
function Mo(a) {
  for (var e = 0, t, r = 0, n = a.length; n >= 4; ++r, n -= 4)
    t = a.charCodeAt(r) & 255 | (a.charCodeAt(++r) & 255) << 8 | (a.charCodeAt(++r) & 255) << 16 | (a.charCodeAt(++r) & 255) << 24, t = /* Math.imul(k, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), t ^= /* k >>> r: */
    t >>> 24, e = /* Math.imul(k, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (e & 65535) * 1540483477 + ((e >>> 16) * 59797 << 16);
  switch (n) {
    case 3:
      e ^= (a.charCodeAt(r + 2) & 255) << 16;
    case 2:
      e ^= (a.charCodeAt(r + 1) & 255) << 8;
    case 1:
      e ^= a.charCodeAt(r) & 255, e = /* Math.imul(h, m): */
      (e & 65535) * 1540483477 + ((e >>> 16) * 59797 << 16);
  }
  return e ^= e >>> 13, e = /* Math.imul(h, m): */
  (e & 65535) * 1540483477 + ((e >>> 16) * 59797 << 16), ((e ^ e >>> 15) >>> 0).toString(36);
}
var ga, No = 0, ya = [];
function sr() {
  if (ya.length === 0)
    throw new Error(Rn(ga || (ga = On([`
        Styles were unable to be assigned to a file. This is generally caused by one of the following:

        - You may have created styles outside of a '.css.ts' context
        - You may have incorrect configuration. See https://vanilla-extract.style/documentation/getting-started
      `]))));
  return ya[0];
}
function zo() {
  return No++;
}
const Lt = typeof performance == "object" && performance && typeof performance.now == "function" ? performance : Date, $a = /* @__PURE__ */ new Set(), mn = typeof process == "object" && process ? process : {}, Ua = (a, e, t, r) => {
  typeof mn.emitWarning == "function" ? mn.emitWarning(a, e, t, r) : console.error(`[${t}] ${e}: ${a}`);
};
let Dr = globalThis.AbortController, ba = globalThis.AbortSignal;
var Pa;
if (typeof Dr > "u") {
  ba = class {
    constructor() {
      fe(this, "onabort");
      fe(this, "_onabort", []);
      fe(this, "reason");
      fe(this, "aborted", !1);
    }
    addEventListener(r, n) {
      this._onabort.push(n);
    }
  }, Dr = class {
    constructor() {
      fe(this, "signal", new ba());
      e();
    }
    abort(r) {
      var n, o;
      if (!this.signal.aborted) {
        this.signal.reason = r, this.signal.aborted = !0;
        for (const s of this.signal._onabort)
          s(r);
        (o = (n = this.signal).onabort) == null || o.call(n, r);
      }
    }
  };
  let a = ((Pa = mn.env) == null ? void 0 : Pa.LRU_CACHE_IGNORE_AC_WARNING) !== "1";
  const e = () => {
    a && (a = !1, Ua("AbortController is not defined. If using lru-cache in node 14, load an AbortController polyfill from the `node-abort-controller` package. A minimal polyfill is provided for use by LRUCache.fetch(), but it should not be relied upon in other contexts (eg, passing it to other APIs that use AbortController/AbortSignal might have undesirable effects). You may disable this with LRU_CACHE_IGNORE_AC_WARNING=1 in the env.", "NO_ABORT_CONTROLLER", "ENOTSUP", e));
  };
}
const Wo = (a) => !$a.has(a), ot = (a) => a && a === Math.floor(a) && a > 0 && isFinite(a), Ba = (a) => ot(a) ? a <= Math.pow(2, 8) ? Uint8Array : a <= Math.pow(2, 16) ? Uint16Array : a <= Math.pow(2, 32) ? Uint32Array : a <= Number.MAX_SAFE_INTEGER ? Pr : null : null;
class Pr extends Array {
  constructor(e) {
    super(e), this.fill(0);
  }
}
var Mt;
const Ct = class Ct {
  constructor(e, t) {
    fe(this, "heap");
    fe(this, "length");
    if (!u(Ct, Mt))
      throw new TypeError("instantiate Stack using Stack.create(n)");
    this.heap = new t(e), this.length = 0;
  }
  static create(e) {
    const t = Ba(e);
    if (!t)
      return [];
    L(Ct, Mt, !0);
    const r = new Ct(e, t);
    return L(Ct, Mt, !1), r;
  }
  push(e) {
    this.heap[this.length++] = e;
  }
  pop() {
    return this.heap[--this.length];
  }
};
Mt = new WeakMap(), // private constructor
J(Ct, Mt, !1);
let gn = Ct;
var ka, Ta, Ue, Ie, Be, Ve, Nt, zt, be, Ye, ye, se, W, Pe, Me, je, Ce, qe, Ee, Ge, He, Ne, Ke, ct, ke, S, bn, Et, tt, nr, ze, Va, St, Wt, ar, st, ut, wn, kr, Tr, oe, Cn, er, lt, En;
const Pn = class Pn {
  constructor(e) {
    J(this, S);
    // options that cannot be changed without disaster
    J(this, Ue);
    J(this, Ie);
    J(this, Be);
    J(this, Ve);
    J(this, Nt);
    J(this, zt);
    /**
     * {@link LRUCache.OptionsBase.ttl}
     */
    fe(this, "ttl");
    /**
     * {@link LRUCache.OptionsBase.ttlResolution}
     */
    fe(this, "ttlResolution");
    /**
     * {@link LRUCache.OptionsBase.ttlAutopurge}
     */
    fe(this, "ttlAutopurge");
    /**
     * {@link LRUCache.OptionsBase.updateAgeOnGet}
     */
    fe(this, "updateAgeOnGet");
    /**
     * {@link LRUCache.OptionsBase.updateAgeOnHas}
     */
    fe(this, "updateAgeOnHas");
    /**
     * {@link LRUCache.OptionsBase.allowStale}
     */
    fe(this, "allowStale");
    /**
     * {@link LRUCache.OptionsBase.noDisposeOnSet}
     */
    fe(this, "noDisposeOnSet");
    /**
     * {@link LRUCache.OptionsBase.noUpdateTTL}
     */
    fe(this, "noUpdateTTL");
    /**
     * {@link LRUCache.OptionsBase.maxEntrySize}
     */
    fe(this, "maxEntrySize");
    /**
     * {@link LRUCache.OptionsBase.sizeCalculation}
     */
    fe(this, "sizeCalculation");
    /**
     * {@link LRUCache.OptionsBase.noDeleteOnFetchRejection}
     */
    fe(this, "noDeleteOnFetchRejection");
    /**
     * {@link LRUCache.OptionsBase.noDeleteOnStaleGet}
     */
    fe(this, "noDeleteOnStaleGet");
    /**
     * {@link LRUCache.OptionsBase.allowStaleOnFetchAbort}
     */
    fe(this, "allowStaleOnFetchAbort");
    /**
     * {@link LRUCache.OptionsBase.allowStaleOnFetchRejection}
     */
    fe(this, "allowStaleOnFetchRejection");
    /**
     * {@link LRUCache.OptionsBase.ignoreFetchAbort}
     */
    fe(this, "ignoreFetchAbort");
    // computed properties
    J(this, be);
    J(this, Ye);
    J(this, ye);
    J(this, se);
    J(this, W);
    J(this, Pe);
    J(this, Me);
    J(this, je);
    J(this, Ce);
    J(this, qe);
    J(this, Ee);
    J(this, Ge);
    J(this, He);
    J(this, Ne);
    J(this, Ke);
    J(this, ct);
    J(this, ke);
    // conditionally set private methods related to TTL
    J(this, Et, () => {
    });
    J(this, tt, () => {
    });
    J(this, nr, () => {
    });
    /* c8 ignore stop */
    J(this, ze, () => !1);
    J(this, St, (e) => {
    });
    J(this, Wt, (e, t, r) => {
    });
    J(this, ar, (e, t, r, n) => {
      if (r || n)
        throw new TypeError("cannot set size without setting maxSize or maxEntrySize on cache");
      return 0;
    });
    /**
     * A String value that is used in the creation of the default string
     * description of an object. Called by the built-in method
     * `Object.prototype.toString`.
     */
    fe(this, ka, "LRUCache");
    const { max: t = 0, ttl: r, ttlResolution: n = 1, ttlAutopurge: o, updateAgeOnGet: s, updateAgeOnHas: h, allowStale: l, dispose: d, disposeAfter: g, noDisposeOnSet: y, noUpdateTTL: A, maxSize: _ = 0, maxEntrySize: j = 0, sizeCalculation: F, fetchMethod: E, memoMethod: O, noDeleteOnFetchRejection: k, noDeleteOnStaleGet: U, allowStaleOnFetchRejection: M, allowStaleOnFetchAbort: N, ignoreFetchAbort: B } = e;
    if (t !== 0 && !ot(t))
      throw new TypeError("max option must be a nonnegative integer");
    const ce = t ? Ba(t) : Array;
    if (!ce)
      throw new Error("invalid max value: " + t);
    if (L(this, Ue, t), L(this, Ie, _), this.maxEntrySize = j || u(this, Ie), this.sizeCalculation = F, this.sizeCalculation) {
      if (!u(this, Ie) && !this.maxEntrySize)
        throw new TypeError("cannot set sizeCalculation without setting maxSize or maxEntrySize");
      if (typeof this.sizeCalculation != "function")
        throw new TypeError("sizeCalculation set to non-function");
    }
    if (O !== void 0 && typeof O != "function")
      throw new TypeError("memoMethod must be a function if defined");
    if (L(this, zt, O), E !== void 0 && typeof E != "function")
      throw new TypeError("fetchMethod must be a function if specified");
    if (L(this, Nt, E), L(this, ct, !!E), L(this, ye, /* @__PURE__ */ new Map()), L(this, se, new Array(t).fill(void 0)), L(this, W, new Array(t).fill(void 0)), L(this, Pe, new ce(t)), L(this, Me, new ce(t)), L(this, je, 0), L(this, Ce, 0), L(this, qe, gn.create(t)), L(this, be, 0), L(this, Ye, 0), typeof d == "function" && L(this, Be, d), typeof g == "function" ? (L(this, Ve, g), L(this, Ee, [])) : (L(this, Ve, void 0), L(this, Ee, void 0)), L(this, Ke, !!u(this, Be)), L(this, ke, !!u(this, Ve)), this.noDisposeOnSet = !!y, this.noUpdateTTL = !!A, this.noDeleteOnFetchRejection = !!k, this.allowStaleOnFetchRejection = !!M, this.allowStaleOnFetchAbort = !!N, this.ignoreFetchAbort = !!B, this.maxEntrySize !== 0) {
      if (u(this, Ie) !== 0 && !ot(u(this, Ie)))
        throw new TypeError("maxSize must be a positive integer if specified");
      if (!ot(this.maxEntrySize))
        throw new TypeError("maxEntrySize must be a positive integer if specified");
      P(this, S, Va).call(this);
    }
    if (this.allowStale = !!l, this.noDeleteOnStaleGet = !!U, this.updateAgeOnGet = !!s, this.updateAgeOnHas = !!h, this.ttlResolution = ot(n) || n === 0 ? n : 1, this.ttlAutopurge = !!o, this.ttl = r || 0, this.ttl) {
      if (!ot(this.ttl))
        throw new TypeError("ttl must be a positive integer if specified");
      P(this, S, bn).call(this);
    }
    if (u(this, Ue) === 0 && this.ttl === 0 && u(this, Ie) === 0)
      throw new TypeError("At least one of max, maxSize, or ttl is required");
    if (!this.ttlAutopurge && !u(this, Ue) && !u(this, Ie)) {
      const re = "LRU_CACHE_UNBOUNDED";
      Wo(re) && ($a.add(re), Ua("TTL caching without ttlAutopurge, max, or maxSize can result in unbounded memory consumption.", "UnboundedCacheWarning", re, Pn));
    }
  }
  /**
   * Do not call this method unless you need to inspect the
   * inner workings of the cache.  If anything returned by this
   * object is modified in any way, strange breakage may occur.
   *
   * These fields are private for a reason!
   *
   * @internal
   */
  static unsafeExposeInternals(e) {
    return {
      // properties
      starts: u(e, He),
      ttls: u(e, Ne),
      sizes: u(e, Ge),
      keyMap: u(e, ye),
      keyList: u(e, se),
      valList: u(e, W),
      next: u(e, Pe),
      prev: u(e, Me),
      get head() {
        return u(e, je);
      },
      get tail() {
        return u(e, Ce);
      },
      free: u(e, qe),
      // methods
      isBackgroundFetch: (t) => {
        var r;
        return P(r = e, S, oe).call(r, t);
      },
      backgroundFetch: (t, r, n, o) => {
        var s;
        return P(s = e, S, Tr).call(s, t, r, n, o);
      },
      moveToTail: (t) => {
        var r;
        return P(r = e, S, er).call(r, t);
      },
      indexes: (t) => {
        var r;
        return P(r = e, S, st).call(r, t);
      },
      rindexes: (t) => {
        var r;
        return P(r = e, S, ut).call(r, t);
      },
      isStale: (t) => {
        var r;
        return u(r = e, ze).call(r, t);
      }
    };
  }
  // Protected read-only members
  /**
   * {@link LRUCache.OptionsBase.max} (read-only)
   */
  get max() {
    return u(this, Ue);
  }
  /**
   * {@link LRUCache.OptionsBase.maxSize} (read-only)
   */
  get maxSize() {
    return u(this, Ie);
  }
  /**
   * The total computed size of items in the cache (read-only)
   */
  get calculatedSize() {
    return u(this, Ye);
  }
  /**
   * The number of items stored in the cache (read-only)
   */
  get size() {
    return u(this, be);
  }
  /**
   * {@link LRUCache.OptionsBase.fetchMethod} (read-only)
   */
  get fetchMethod() {
    return u(this, Nt);
  }
  get memoMethod() {
    return u(this, zt);
  }
  /**
   * {@link LRUCache.OptionsBase.dispose} (read-only)
   */
  get dispose() {
    return u(this, Be);
  }
  /**
   * {@link LRUCache.OptionsBase.disposeAfter} (read-only)
   */
  get disposeAfter() {
    return u(this, Ve);
  }
  /**
   * Return the number of ms left in the item's TTL. If item is not in cache,
   * returns `0`. Returns `Infinity` if item is in cache without a defined TTL.
   */
  getRemainingTTL(e) {
    return u(this, ye).has(e) ? 1 / 0 : 0;
  }
  /**
   * Return a generator yielding `[key, value]` pairs,
   * in order from most recently used to least recently used.
   */
  *entries() {
    for (const e of P(this, S, st).call(this))
      u(this, W)[e] !== void 0 && u(this, se)[e] !== void 0 && !P(this, S, oe).call(this, u(this, W)[e]) && (yield [u(this, se)[e], u(this, W)[e]]);
  }
  /**
   * Inverse order version of {@link LRUCache.entries}
   *
   * Return a generator yielding `[key, value]` pairs,
   * in order from least recently used to most recently used.
   */
  *rentries() {
    for (const e of P(this, S, ut).call(this))
      u(this, W)[e] !== void 0 && u(this, se)[e] !== void 0 && !P(this, S, oe).call(this, u(this, W)[e]) && (yield [u(this, se)[e], u(this, W)[e]]);
  }
  /**
   * Return a generator yielding the keys in the cache,
   * in order from most recently used to least recently used.
   */
  *keys() {
    for (const e of P(this, S, st).call(this)) {
      const t = u(this, se)[e];
      t !== void 0 && !P(this, S, oe).call(this, u(this, W)[e]) && (yield t);
    }
  }
  /**
   * Inverse order version of {@link LRUCache.keys}
   *
   * Return a generator yielding the keys in the cache,
   * in order from least recently used to most recently used.
   */
  *rkeys() {
    for (const e of P(this, S, ut).call(this)) {
      const t = u(this, se)[e];
      t !== void 0 && !P(this, S, oe).call(this, u(this, W)[e]) && (yield t);
    }
  }
  /**
   * Return a generator yielding the values in the cache,
   * in order from most recently used to least recently used.
   */
  *values() {
    for (const e of P(this, S, st).call(this))
      u(this, W)[e] !== void 0 && !P(this, S, oe).call(this, u(this, W)[e]) && (yield u(this, W)[e]);
  }
  /**
   * Inverse order version of {@link LRUCache.values}
   *
   * Return a generator yielding the values in the cache,
   * in order from least recently used to most recently used.
   */
  *rvalues() {
    for (const e of P(this, S, ut).call(this))
      u(this, W)[e] !== void 0 && !P(this, S, oe).call(this, u(this, W)[e]) && (yield u(this, W)[e]);
  }
  /**
   * Iterating over the cache itself yields the same results as
   * {@link LRUCache.entries}
   */
  [(Ta = Symbol.iterator, ka = Symbol.toStringTag, Ta)]() {
    return this.entries();
  }
  /**
   * Find a value for which the supplied fn method returns a truthy value,
   * similar to `Array.find()`. fn is called as `fn(value, key, cache)`.
   */
  find(e, t = {}) {
    for (const r of P(this, S, st).call(this)) {
      const n = u(this, W)[r], o = P(this, S, oe).call(this, n) ? n.__staleWhileFetching : n;
      if (o !== void 0 && e(o, u(this, se)[r], this))
        return this.get(u(this, se)[r], t);
    }
  }
  /**
   * Call the supplied function on each item in the cache, in order from most
   * recently used to least recently used.
   *
   * `fn` is called as `fn(value, key, cache)`.
   *
   * If `thisp` is provided, function will be called in the `this`-context of
   * the provided object, or the cache if no `thisp` object is provided.
   *
   * Does not update age or recenty of use, or iterate over stale values.
   */
  forEach(e, t = this) {
    for (const r of P(this, S, st).call(this)) {
      const n = u(this, W)[r], o = P(this, S, oe).call(this, n) ? n.__staleWhileFetching : n;
      o !== void 0 && e.call(t, o, u(this, se)[r], this);
    }
  }
  /**
   * The same as {@link LRUCache.forEach} but items are iterated over in
   * reverse order.  (ie, less recently used items are iterated over first.)
   */
  rforEach(e, t = this) {
    for (const r of P(this, S, ut).call(this)) {
      const n = u(this, W)[r], o = P(this, S, oe).call(this, n) ? n.__staleWhileFetching : n;
      o !== void 0 && e.call(t, o, u(this, se)[r], this);
    }
  }
  /**
   * Delete any stale entries. Returns true if anything was removed,
   * false otherwise.
   */
  purgeStale() {
    let e = !1;
    for (const t of P(this, S, ut).call(this, { allowStale: !0 }))
      u(this, ze).call(this, t) && (P(this, S, lt).call(this, u(this, se)[t], "expire"), e = !0);
    return e;
  }
  /**
   * Get the extended info about a given entry, to get its value, size, and
   * TTL info simultaneously. Returns `undefined` if the key is not present.
   *
   * Unlike {@link LRUCache#dump}, which is designed to be portable and survive
   * serialization, the `start` value is always the current timestamp, and the
   * `ttl` is a calculated remaining time to live (negative if expired).
   *
   * Always returns stale values, if their info is found in the cache, so be
   * sure to check for expirations (ie, a negative {@link LRUCache.Entry#ttl})
   * if relevant.
   */
  info(e) {
    const t = u(this, ye).get(e);
    if (t === void 0)
      return;
    const r = u(this, W)[t], n = P(this, S, oe).call(this, r) ? r.__staleWhileFetching : r;
    if (n === void 0)
      return;
    const o = { value: n };
    if (u(this, Ne) && u(this, He)) {
      const s = u(this, Ne)[t], h = u(this, He)[t];
      if (s && h) {
        const l = s - (Lt.now() - h);
        o.ttl = l, o.start = Date.now();
      }
    }
    return u(this, Ge) && (o.size = u(this, Ge)[t]), o;
  }
  /**
   * Return an array of [key, {@link LRUCache.Entry}] tuples which can be
   * passed to {@link LRLUCache#load}.
   *
   * The `start` fields are calculated relative to a portable `Date.now()`
   * timestamp, even if `performance.now()` is available.
   *
   * Stale entries are always included in the `dump`, even if
   * {@link LRUCache.OptionsBase.allowStale} is false.
   *
   * Note: this returns an actual array, not a generator, so it can be more
   * easily passed around.
   */
  dump() {
    const e = [];
    for (const t of P(this, S, st).call(this, { allowStale: !0 })) {
      const r = u(this, se)[t], n = u(this, W)[t], o = P(this, S, oe).call(this, n) ? n.__staleWhileFetching : n;
      if (o === void 0 || r === void 0)
        continue;
      const s = { value: o };
      if (u(this, Ne) && u(this, He)) {
        s.ttl = u(this, Ne)[t];
        const h = Lt.now() - u(this, He)[t];
        s.start = Math.floor(Date.now() - h);
      }
      u(this, Ge) && (s.size = u(this, Ge)[t]), e.unshift([r, s]);
    }
    return e;
  }
  /**
   * Reset the cache and load in the items in entries in the order listed.
   *
   * The shape of the resulting cache may be different if the same options are
   * not used in both caches.
   *
   * The `start` fields are assumed to be calculated relative to a portable
   * `Date.now()` timestamp, even if `performance.now()` is available.
   */
  load(e) {
    this.clear();
    for (const [t, r] of e) {
      if (r.start) {
        const n = Date.now() - r.start;
        r.start = Lt.now() - n;
      }
      this.set(t, r.value, r);
    }
  }
  /**
   * Add a value to the cache.
   *
   * Note: if `undefined` is specified as a value, this is an alias for
   * {@link LRUCache#delete}
   *
   * Fields on the {@link LRUCache.SetOptions} options param will override
   * their corresponding values in the constructor options for the scope
   * of this single `set()` operation.
   *
   * If `start` is provided, then that will set the effective start
   * time for the TTL calculation. Note that this must be a previous
   * value of `performance.now()` if supported, or a previous value of
   * `Date.now()` if not.
   *
   * Options object may also include `size`, which will prevent
   * calling the `sizeCalculation` function and just use the specified
   * number if it is a positive integer, and `noDisposeOnSet` which
   * will prevent calling a `dispose` function in the case of
   * overwrites.
   *
   * If the `size` (or return value of `sizeCalculation`) for a given
   * entry is greater than `maxEntrySize`, then the item will not be
   * added to the cache.
   *
   * Will update the recency of the entry.
   *
   * If the value is `undefined`, then this is an alias for
   * `cache.delete(key)`. `undefined` is never stored in the cache.
   */
  set(e, t, r = {}) {
    var A, _, j, F, E;
    if (t === void 0)
      return this.delete(e), this;
    const { ttl: n = this.ttl, start: o, noDisposeOnSet: s = this.noDisposeOnSet, sizeCalculation: h = this.sizeCalculation, status: l } = r;
    let { noUpdateTTL: d = this.noUpdateTTL } = r;
    const g = u(this, ar).call(this, e, t, r.size || 0, h);
    if (this.maxEntrySize && g > this.maxEntrySize)
      return l && (l.set = "miss", l.maxEntrySizeExceeded = !0), P(this, S, lt).call(this, e, "set"), this;
    let y = u(this, be) === 0 ? void 0 : u(this, ye).get(e);
    if (y === void 0)
      y = u(this, be) === 0 ? u(this, Ce) : u(this, qe).length !== 0 ? u(this, qe).pop() : u(this, be) === u(this, Ue) ? P(this, S, kr).call(this, !1) : u(this, be), u(this, se)[y] = e, u(this, W)[y] = t, u(this, ye).set(e, y), u(this, Pe)[u(this, Ce)] = y, u(this, Me)[y] = u(this, Ce), L(this, Ce, y), Or(this, be)._++, u(this, Wt).call(this, y, g, l), l && (l.set = "add"), d = !1;
    else {
      P(this, S, er).call(this, y);
      const O = u(this, W)[y];
      if (t !== O) {
        if (u(this, ct) && P(this, S, oe).call(this, O)) {
          O.__abortController.abort(new Error("replaced"));
          const { __staleWhileFetching: k } = O;
          k !== void 0 && !s && (u(this, Ke) && ((A = u(this, Be)) == null || A.call(this, k, e, "set")), u(this, ke) && ((_ = u(this, Ee)) == null || _.push([k, e, "set"])));
        } else s || (u(this, Ke) && ((j = u(this, Be)) == null || j.call(this, O, e, "set")), u(this, ke) && ((F = u(this, Ee)) == null || F.push([O, e, "set"])));
        if (u(this, St).call(this, y), u(this, Wt).call(this, y, g, l), u(this, W)[y] = t, l) {
          l.set = "replace";
          const k = O && P(this, S, oe).call(this, O) ? O.__staleWhileFetching : O;
          k !== void 0 && (l.oldValue = k);
        }
      } else l && (l.set = "update");
    }
    if (n !== 0 && !u(this, Ne) && P(this, S, bn).call(this), u(this, Ne) && (d || u(this, nr).call(this, y, n, o), l && u(this, tt).call(this, l, y)), !s && u(this, ke) && u(this, Ee)) {
      const O = u(this, Ee);
      let k;
      for (; k = O == null ? void 0 : O.shift(); )
        (E = u(this, Ve)) == null || E.call(this, ...k);
    }
    return this;
  }
  /**
   * Evict the least recently used item, returning its value or
   * `undefined` if cache is empty.
   */
  pop() {
    var e;
    try {
      for (; u(this, be); ) {
        const t = u(this, W)[u(this, je)];
        if (P(this, S, kr).call(this, !0), P(this, S, oe).call(this, t)) {
          if (t.__staleWhileFetching)
            return t.__staleWhileFetching;
        } else if (t !== void 0)
          return t;
      }
    } finally {
      if (u(this, ke) && u(this, Ee)) {
        const t = u(this, Ee);
        let r;
        for (; r = t == null ? void 0 : t.shift(); )
          (e = u(this, Ve)) == null || e.call(this, ...r);
      }
    }
  }
  /**
   * Check if a key is in the cache, without updating the recency of use.
   * Will return false if the item is stale, even though it is technically
   * in the cache.
   *
   * Check if a key is in the cache, without updating the recency of
   * use. Age is updated if {@link LRUCache.OptionsBase.updateAgeOnHas} is set
   * to `true` in either the options or the constructor.
   *
   * Will return `false` if the item is stale, even though it is technically in
   * the cache. The difference can be determined (if it matters) by using a
   * `status` argument, and inspecting the `has` field.
   *
   * Will not update item age unless
   * {@link LRUCache.OptionsBase.updateAgeOnHas} is set.
   */
  has(e, t = {}) {
    const { updateAgeOnHas: r = this.updateAgeOnHas, status: n } = t, o = u(this, ye).get(e);
    if (o !== void 0) {
      const s = u(this, W)[o];
      if (P(this, S, oe).call(this, s) && s.__staleWhileFetching === void 0)
        return !1;
      if (u(this, ze).call(this, o))
        n && (n.has = "stale", u(this, tt).call(this, n, o));
      else return r && u(this, Et).call(this, o), n && (n.has = "hit", u(this, tt).call(this, n, o)), !0;
    } else n && (n.has = "miss");
    return !1;
  }
  /**
   * Like {@link LRUCache#get} but doesn't update recency or delete stale
   * items.
   *
   * Returns `undefined` if the item is stale, unless
   * {@link LRUCache.OptionsBase.allowStale} is set.
   */
  peek(e, t = {}) {
    const { allowStale: r = this.allowStale } = t, n = u(this, ye).get(e);
    if (n === void 0 || !r && u(this, ze).call(this, n))
      return;
    const o = u(this, W)[n];
    return P(this, S, oe).call(this, o) ? o.__staleWhileFetching : o;
  }
  async fetch(e, t = {}) {
    const {
      // get options
      allowStale: r = this.allowStale,
      updateAgeOnGet: n = this.updateAgeOnGet,
      noDeleteOnStaleGet: o = this.noDeleteOnStaleGet,
      // set options
      ttl: s = this.ttl,
      noDisposeOnSet: h = this.noDisposeOnSet,
      size: l = 0,
      sizeCalculation: d = this.sizeCalculation,
      noUpdateTTL: g = this.noUpdateTTL,
      // fetch exclusive options
      noDeleteOnFetchRejection: y = this.noDeleteOnFetchRejection,
      allowStaleOnFetchRejection: A = this.allowStaleOnFetchRejection,
      ignoreFetchAbort: _ = this.ignoreFetchAbort,
      allowStaleOnFetchAbort: j = this.allowStaleOnFetchAbort,
      context: F,
      forceRefresh: E = !1,
      status: O,
      signal: k
    } = t;
    if (!u(this, ct))
      return O && (O.fetch = "get"), this.get(e, {
        allowStale: r,
        updateAgeOnGet: n,
        noDeleteOnStaleGet: o,
        status: O
      });
    const U = {
      allowStale: r,
      updateAgeOnGet: n,
      noDeleteOnStaleGet: o,
      ttl: s,
      noDisposeOnSet: h,
      size: l,
      sizeCalculation: d,
      noUpdateTTL: g,
      noDeleteOnFetchRejection: y,
      allowStaleOnFetchRejection: A,
      allowStaleOnFetchAbort: j,
      ignoreFetchAbort: _,
      status: O,
      signal: k
    };
    let M = u(this, ye).get(e);
    if (M === void 0) {
      O && (O.fetch = "miss");
      const N = P(this, S, Tr).call(this, e, M, U, F);
      return N.__returned = N;
    } else {
      const N = u(this, W)[M];
      if (P(this, S, oe).call(this, N)) {
        const Le = r && N.__staleWhileFetching !== void 0;
        return O && (O.fetch = "inflight", Le && (O.returnedStale = !0)), Le ? N.__staleWhileFetching : N.__returned = N;
      }
      const B = u(this, ze).call(this, M);
      if (!E && !B)
        return O && (O.fetch = "hit"), P(this, S, er).call(this, M), n && u(this, Et).call(this, M), O && u(this, tt).call(this, O, M), N;
      const ce = P(this, S, Tr).call(this, e, M, U, F), Re = ce.__staleWhileFetching !== void 0 && r;
      return O && (O.fetch = B ? "stale" : "refresh", Re && B && (O.returnedStale = !0)), Re ? ce.__staleWhileFetching : ce.__returned = ce;
    }
  }
  async forceFetch(e, t = {}) {
    const r = await this.fetch(e, t);
    if (r === void 0)
      throw new Error("fetch() returned undefined");
    return r;
  }
  memo(e, t = {}) {
    const r = u(this, zt);
    if (!r)
      throw new Error("no memoMethod provided to constructor");
    const { context: n, forceRefresh: o, ...s } = t, h = this.get(e, s);
    if (!o && h !== void 0)
      return h;
    const l = r(e, h, {
      options: s,
      context: n
    });
    return this.set(e, l, s), l;
  }
  /**
   * Return a value from the cache. Will update the recency of the cache
   * entry found.
   *
   * If the key is not found, get() will return `undefined`.
   */
  get(e, t = {}) {
    const { allowStale: r = this.allowStale, updateAgeOnGet: n = this.updateAgeOnGet, noDeleteOnStaleGet: o = this.noDeleteOnStaleGet, status: s } = t, h = u(this, ye).get(e);
    if (h !== void 0) {
      const l = u(this, W)[h], d = P(this, S, oe).call(this, l);
      return s && u(this, tt).call(this, s, h), u(this, ze).call(this, h) ? (s && (s.get = "stale"), d ? (s && r && l.__staleWhileFetching !== void 0 && (s.returnedStale = !0), r ? l.__staleWhileFetching : void 0) : (o || P(this, S, lt).call(this, e, "expire"), s && r && (s.returnedStale = !0), r ? l : void 0)) : (s && (s.get = "hit"), d ? l.__staleWhileFetching : (P(this, S, er).call(this, h), n && u(this, Et).call(this, h), l));
    } else s && (s.get = "miss");
  }
  /**
   * Deletes a key out of the cache.
   *
   * Returns true if the key was deleted, false otherwise.
   */
  delete(e) {
    return P(this, S, lt).call(this, e, "delete");
  }
  /**
   * Clear the cache entirely, throwing away all values.
   */
  clear() {
    return P(this, S, En).call(this, "delete");
  }
};
Ue = new WeakMap(), Ie = new WeakMap(), Be = new WeakMap(), Ve = new WeakMap(), Nt = new WeakMap(), zt = new WeakMap(), be = new WeakMap(), Ye = new WeakMap(), ye = new WeakMap(), se = new WeakMap(), W = new WeakMap(), Pe = new WeakMap(), Me = new WeakMap(), je = new WeakMap(), Ce = new WeakMap(), qe = new WeakMap(), Ee = new WeakMap(), Ge = new WeakMap(), He = new WeakMap(), Ne = new WeakMap(), Ke = new WeakMap(), ct = new WeakMap(), ke = new WeakMap(), S = new WeakSet(), bn = function() {
  const e = new Pr(u(this, Ue)), t = new Pr(u(this, Ue));
  L(this, Ne, e), L(this, He, t), L(this, nr, (o, s, h = Lt.now()) => {
    if (t[o] = s !== 0 ? h : 0, e[o] = s, s !== 0 && this.ttlAutopurge) {
      const l = setTimeout(() => {
        u(this, ze).call(this, o) && P(this, S, lt).call(this, u(this, se)[o], "expire");
      }, s + 1);
      l.unref && l.unref();
    }
  }), L(this, Et, (o) => {
    t[o] = e[o] !== 0 ? Lt.now() : 0;
  }), L(this, tt, (o, s) => {
    if (e[s]) {
      const h = e[s], l = t[s];
      if (!h || !l)
        return;
      o.ttl = h, o.start = l, o.now = r || n();
      const d = o.now - l;
      o.remainingTTL = h - d;
    }
  });
  let r = 0;
  const n = () => {
    const o = Lt.now();
    if (this.ttlResolution > 0) {
      r = o;
      const s = setTimeout(() => r = 0, this.ttlResolution);
      s.unref && s.unref();
    }
    return o;
  };
  this.getRemainingTTL = (o) => {
    const s = u(this, ye).get(o);
    if (s === void 0)
      return 0;
    const h = e[s], l = t[s];
    if (!h || !l)
      return 1 / 0;
    const d = (r || n()) - l;
    return h - d;
  }, L(this, ze, (o) => {
    const s = t[o], h = e[o];
    return !!h && !!s && (r || n()) - s > h;
  });
}, Et = new WeakMap(), tt = new WeakMap(), nr = new WeakMap(), ze = new WeakMap(), Va = function() {
  const e = new Pr(u(this, Ue));
  L(this, Ye, 0), L(this, Ge, e), L(this, St, (t) => {
    L(this, Ye, u(this, Ye) - e[t]), e[t] = 0;
  }), L(this, ar, (t, r, n, o) => {
    if (P(this, S, oe).call(this, r))
      return 0;
    if (!ot(n))
      if (o) {
        if (typeof o != "function")
          throw new TypeError("sizeCalculation must be a function");
        if (n = o(r, t), !ot(n))
          throw new TypeError("sizeCalculation return invalid (expect positive integer)");
      } else
        throw new TypeError("invalid size value (must be positive integer). When maxSize or maxEntrySize is used, sizeCalculation or size must be set.");
    return n;
  }), L(this, Wt, (t, r, n) => {
    if (e[t] = r, u(this, Ie)) {
      const o = u(this, Ie) - e[t];
      for (; u(this, Ye) > o; )
        P(this, S, kr).call(this, !0);
    }
    L(this, Ye, u(this, Ye) + e[t]), n && (n.entrySize = r, n.totalCalculatedSize = u(this, Ye));
  });
}, St = new WeakMap(), Wt = new WeakMap(), ar = new WeakMap(), st = function* ({ allowStale: e = this.allowStale } = {}) {
  if (u(this, be))
    for (let t = u(this, Ce); !(!P(this, S, wn).call(this, t) || ((e || !u(this, ze).call(this, t)) && (yield t), t === u(this, je))); )
      t = u(this, Me)[t];
}, ut = function* ({ allowStale: e = this.allowStale } = {}) {
  if (u(this, be))
    for (let t = u(this, je); !(!P(this, S, wn).call(this, t) || ((e || !u(this, ze).call(this, t)) && (yield t), t === u(this, Ce))); )
      t = u(this, Pe)[t];
}, wn = function(e) {
  return e !== void 0 && u(this, ye).get(u(this, se)[e]) === e;
}, kr = function(e) {
  var o, s;
  const t = u(this, je), r = u(this, se)[t], n = u(this, W)[t];
  return u(this, ct) && P(this, S, oe).call(this, n) ? n.__abortController.abort(new Error("evicted")) : (u(this, Ke) || u(this, ke)) && (u(this, Ke) && ((o = u(this, Be)) == null || o.call(this, n, r, "evict")), u(this, ke) && ((s = u(this, Ee)) == null || s.push([n, r, "evict"]))), u(this, St).call(this, t), e && (u(this, se)[t] = void 0, u(this, W)[t] = void 0, u(this, qe).push(t)), u(this, be) === 1 ? (L(this, je, L(this, Ce, 0)), u(this, qe).length = 0) : L(this, je, u(this, Pe)[t]), u(this, ye).delete(r), Or(this, be)._--, t;
}, Tr = function(e, t, r, n) {
  const o = t === void 0 ? void 0 : u(this, W)[t];
  if (P(this, S, oe).call(this, o))
    return o;
  const s = new Dr(), { signal: h } = r;
  h == null || h.addEventListener("abort", () => s.abort(h.reason), {
    signal: s.signal
  });
  const l = {
    signal: s.signal,
    options: r,
    context: n
  }, d = (F, E = !1) => {
    const { aborted: O } = s.signal, k = r.ignoreFetchAbort && F !== void 0;
    if (r.status && (O && !E ? (r.status.fetchAborted = !0, r.status.fetchError = s.signal.reason, k && (r.status.fetchAbortIgnored = !0)) : r.status.fetchResolved = !0), O && !k && !E)
      return y(s.signal.reason);
    const U = _;
    return u(this, W)[t] === _ && (F === void 0 ? U.__staleWhileFetching ? u(this, W)[t] = U.__staleWhileFetching : P(this, S, lt).call(this, e, "fetch") : (r.status && (r.status.fetchUpdated = !0), this.set(e, F, l.options))), F;
  }, g = (F) => (r.status && (r.status.fetchRejected = !0, r.status.fetchError = F), y(F)), y = (F) => {
    const { aborted: E } = s.signal, O = E && r.allowStaleOnFetchAbort, k = O || r.allowStaleOnFetchRejection, U = k || r.noDeleteOnFetchRejection, M = _;
    if (u(this, W)[t] === _ && (!U || M.__staleWhileFetching === void 0 ? P(this, S, lt).call(this, e, "fetch") : O || (u(this, W)[t] = M.__staleWhileFetching)), k)
      return r.status && M.__staleWhileFetching !== void 0 && (r.status.returnedStale = !0), M.__staleWhileFetching;
    if (M.__returned === M)
      throw F;
  }, A = (F, E) => {
    var k;
    const O = (k = u(this, Nt)) == null ? void 0 : k.call(this, e, o, l);
    O && O instanceof Promise && O.then((U) => F(U === void 0 ? void 0 : U), E), s.signal.addEventListener("abort", () => {
      (!r.ignoreFetchAbort || r.allowStaleOnFetchAbort) && (F(void 0), r.allowStaleOnFetchAbort && (F = (U) => d(U, !0)));
    });
  };
  r.status && (r.status.fetchDispatched = !0);
  const _ = new Promise(A).then(d, g), j = Object.assign(_, {
    __abortController: s,
    __staleWhileFetching: o,
    __returned: void 0
  });
  return t === void 0 ? (this.set(e, j, { ...l.options, status: void 0 }), t = u(this, ye).get(e)) : u(this, W)[t] = j, j;
}, oe = function(e) {
  if (!u(this, ct))
    return !1;
  const t = e;
  return !!t && t instanceof Promise && t.hasOwnProperty("__staleWhileFetching") && t.__abortController instanceof Dr;
}, Cn = function(e, t) {
  u(this, Me)[t] = e, u(this, Pe)[e] = t;
}, er = function(e) {
  e !== u(this, Ce) && (e === u(this, je) ? L(this, je, u(this, Pe)[e]) : P(this, S, Cn).call(this, u(this, Me)[e], u(this, Pe)[e]), P(this, S, Cn).call(this, u(this, Ce), e), L(this, Ce, e));
}, lt = function(e, t) {
  var n, o, s, h;
  let r = !1;
  if (u(this, be) !== 0) {
    const l = u(this, ye).get(e);
    if (l !== void 0)
      if (r = !0, u(this, be) === 1)
        P(this, S, En).call(this, t);
      else {
        u(this, St).call(this, l);
        const d = u(this, W)[l];
        if (P(this, S, oe).call(this, d) ? d.__abortController.abort(new Error("deleted")) : (u(this, Ke) || u(this, ke)) && (u(this, Ke) && ((n = u(this, Be)) == null || n.call(this, d, e, t)), u(this, ke) && ((o = u(this, Ee)) == null || o.push([d, e, t]))), u(this, ye).delete(e), u(this, se)[l] = void 0, u(this, W)[l] = void 0, l === u(this, Ce))
          L(this, Ce, u(this, Me)[l]);
        else if (l === u(this, je))
          L(this, je, u(this, Pe)[l]);
        else {
          const g = u(this, Me)[l];
          u(this, Pe)[g] = u(this, Pe)[l];
          const y = u(this, Pe)[l];
          u(this, Me)[y] = u(this, Me)[l];
        }
        Or(this, be)._--, u(this, qe).push(l);
      }
  }
  if (u(this, ke) && ((s = u(this, Ee)) != null && s.length)) {
    const l = u(this, Ee);
    let d;
    for (; d = l == null ? void 0 : l.shift(); )
      (h = u(this, Ve)) == null || h.call(this, ...d);
  }
  return r;
}, En = function(e) {
  var t, r, n;
  for (const o of P(this, S, ut).call(this, { allowStale: !0 })) {
    const s = u(this, W)[o];
    if (P(this, S, oe).call(this, s))
      s.__abortController.abort(new Error("deleted"));
    else {
      const h = u(this, se)[o];
      u(this, Ke) && ((t = u(this, Be)) == null || t.call(this, s, h, e)), u(this, ke) && ((r = u(this, Ee)) == null || r.push([s, h, e]));
    }
  }
  if (u(this, ye).clear(), u(this, W).fill(void 0), u(this, se).fill(void 0), u(this, Ne) && u(this, He) && (u(this, Ne).fill(0), u(this, He).fill(0)), u(this, Ge) && u(this, Ge).fill(0), L(this, je, 0), L(this, Ce, 0), u(this, qe).length = 0, L(this, Ye, 0), L(this, be, 0), u(this, ke) && u(this, Ee)) {
    const o = u(this, Ee);
    let s;
    for (; s = o == null ? void 0 : o.shift(); )
      (n = u(this, Ve)) == null || n.call(this, ...s);
  }
};
let yn = Pn;
const fn = (a) => a instanceof Date, $o = (a) => Object.keys(a).length === 0, Sn = (a) => a != null && typeof a == "object", wa = (a, ...e) => Object.prototype.hasOwnProperty.call(a, ...e), cn = (a) => Sn(a) && $o(a), Uo = () => /* @__PURE__ */ Object.create(null), Ya = (a, e) => {
  if (a === e) return {};
  if (!Sn(a) || !Sn(e)) return e;
  const t = Object.keys(a).reduce((r, n) => (wa(e, n) || (r[n] = void 0), r), Uo());
  return fn(a) || fn(e) ? a.valueOf() == e.valueOf() ? {} : e : Object.keys(e).reduce((r, n) => {
    if (!wa(a, n))
      return r[n] = e[n], r;
    const o = Ya(a[n], e[n]);
    return cn(o) && !fn(o) && (cn(a[n]) || !cn(e[n])) || (r[n] = o), r;
  }, t);
};
var jn = { exports: {} }, $ = String, qa = function() {
  return { isColorSupported: !1, reset: $, bold: $, dim: $, italic: $, underline: $, inverse: $, hidden: $, strikethrough: $, black: $, red: $, green: $, yellow: $, blue: $, magenta: $, cyan: $, white: $, gray: $, bgBlack: $, bgRed: $, bgGreen: $, bgYellow: $, bgBlue: $, bgMagenta: $, bgCyan: $, bgWhite: $, blackBright: $, redBright: $, greenBright: $, yellowBright: $, blueBright: $, magentaBright: $, cyanBright: $, whiteBright: $, bgBlackBright: $, bgRedBright: $, bgGreenBright: $, bgYellowBright: $, bgBlueBright: $, bgMagentaBright: $, bgCyanBright: $, bgWhiteBright: $ };
};
jn.exports = qa();
jn.exports.createColors = qa;
var Bo = jn.exports;
const Ca = /* @__PURE__ */ xa(Bo);
var Vo = function(e) {
  return Yo(e) && !qo(e);
};
function Yo(a) {
  return !!a && typeof a == "object";
}
function qo(a) {
  var e = Object.prototype.toString.call(a);
  return e === "[object RegExp]" || e === "[object Date]" || Ko(a);
}
var Go = typeof Symbol == "function" && Symbol.for, Ho = Go ? Symbol.for("react.element") : 60103;
function Ko(a) {
  return a.$$typeof === Ho;
}
function Jo(a) {
  return Array.isArray(a) ? [] : {};
}
function tr(a, e) {
  return e.clone !== !1 && e.isMergeableObject(a) ? rr(Jo(a), a, e) : a;
}
function Xo(a, e, t) {
  return a.concat(e).map(function(r) {
    return tr(r, t);
  });
}
function Zo(a, e) {
  if (!e.customMerge)
    return rr;
  var t = e.customMerge(a);
  return typeof t == "function" ? t : rr;
}
function Qo(a) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(a).filter(function(e) {
    return Object.propertyIsEnumerable.call(a, e);
  }) : [];
}
function Ea(a) {
  return Object.keys(a).concat(Qo(a));
}
function Ga(a, e) {
  try {
    return e in a;
  } catch {
    return !1;
  }
}
function es(a, e) {
  return Ga(a, e) && !(Object.hasOwnProperty.call(a, e) && Object.propertyIsEnumerable.call(a, e));
}
function ts(a, e, t) {
  var r = {};
  return t.isMergeableObject(a) && Ea(a).forEach(function(n) {
    r[n] = tr(a[n], t);
  }), Ea(e).forEach(function(n) {
    es(a, n) || (Ga(a, n) && t.isMergeableObject(e[n]) ? r[n] = Zo(n, t)(a[n], e[n], t) : r[n] = tr(e[n], t));
  }), r;
}
function rr(a, e, t) {
  t = t || {}, t.arrayMerge = t.arrayMerge || Xo, t.isMergeableObject = t.isMergeableObject || Vo, t.cloneUnlessOtherwiseSpecified = tr;
  var r = Array.isArray(e), n = Array.isArray(a), o = r === n;
  return o ? r ? t.arrayMerge(a, e, t) : ts(a, e, t) : tr(e, t);
}
rr.all = function(e, t) {
  if (!Array.isArray(e))
    throw new Error("first argument should be an array");
  return e.reduce(function(r, n) {
    return rr(r, n, t);
  }, {});
};
var Sa = /* @__PURE__ */ new Set(), _a = [], hn = [], rs = {
  appendCss: (a) => {
    hn.push(a);
  },
  registerClassName: (a) => {
    Sa.add(a);
  },
  registerComposition: (a) => {
    _a.push(a);
  },
  markCompositionUsed: () => {
  },
  onEndFileScope: (a) => {
    var e = Io({
      localClassNames: Array.from(Sa),
      composedClassLists: _a,
      cssObjs: hn
    }).join(`
`);
    Ai({
      fileScope: a,
      css: e
    }), hn = [];
  },
  getIdentOption: () => process.env.NODE_ENV === "production" ? "short" : "debug"
};
zi(rs);
var Oa = (a, e) => {
  for (var t = e - 1; t >= 0; ) {
    if (a[t] === "/")
      return t;
    t--;
  }
  return -1;
}, ns = (a) => {
  var e, t = a.lastIndexOf(".css");
  if (t === -1)
    return "";
  var r = Oa(a, t);
  if (e = a.slice(r + 1, t), r === -1)
    return e;
  var n = Oa(a, r - 1), o = a.slice(n + 1, r), s = e !== "index" ? e : o;
  return s;
}, as = () => {
  var a = new yn({
    max: 500
  });
  return (e) => {
    var t = a.get(e);
    if (t)
      return t;
    var r = ns(e);
    return a.set(e, r), r;
  };
}, is = as();
function os(a) {
  var {
    debugId: e,
    debugFileName: t
  } = a, r = e ? [e.replace(/\s/g, "_")] : [];
  if (t) {
    var {
      filePath: n
    } = sr(), o = is(n);
    o && r.unshift(o);
  }
  return r.join("_");
}
function Ra(a) {
  return a.match(/^[0-9]/) ? "_".concat(a) : a;
}
function Ha(a) {
  var e = Bi(), {
    debugId: t,
    debugFileName: r = !0
  } = ht(ht({}, typeof a == "string" ? {
    debugId: a
  } : null), typeof a == "object" ? a : null), n = zo().toString(36), {
    filePath: o,
    packageName: s
  } = sr(), h = Mo(s ? "".concat(s).concat(o) : o), l = "".concat(h).concat(n);
  if (e === "debug") {
    var d = os({
      debugId: t,
      debugFileName: r
    });
    return d && (l = "".concat(d, "__").concat(l)), Ra(l);
  }
  if (typeof e == "function") {
    if (l = e({
      hash: l,
      debugId: t,
      filePath: o,
      packageName: s
    }), !l.match(/^[A-Z_][0-9A-Z_-]+$/i))
      throw new Error('Identifier function returned invalid indentifier: "'.concat(l, '"'));
    return l;
  }
  return Ra(l);
}
var Aa = (a) => ir(a, () => "");
function ss(a, e) {
  var t = Ya(Aa(a), Aa(e)), r = Object.keys(t).length === 0;
  return {
    valid: r,
    diffString: r ? "" : Ka(a, t)
  };
}
function It(a, e, t) {
  var r = [...Array(e).keys()].map(() => "  ").join(""), n = "".concat(t || " ").concat(r).concat(a);
  if (process.env.NODE_ENV !== "test") {
    if (t === "-")
      return Ca.red(n);
    if (t === "+")
      return Ca.green(n);
  }
  return n;
}
function Ka(a, e) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, r = [];
  t === 0 && r.push(It("{", 0));
  var n = t + 1, o = Object.keys(e).sort();
  for (var s of o) {
    var h = e[s];
    s in a ? typeof h == "object" ? (r.push(It("".concat(s, ": {"), n)), r.push(Ka(a[s], e[s], n)), r.push(It("}", n))) : r.push(It("".concat(s, ": ...,"), n, "-")) : r.push(It("".concat(s, ": ...,"), n, "+"));
  }
  return t === 0 && r.push(It("}", 0)), r.join(`
`);
}
var us = (a) => {
  var {
    syntax: e,
    inherits: t,
    initialValue: r
  } = a;
  return ht({
    syntax: '"'.concat(Array.isArray(e) ? e.join(" | ") : e, '"'),
    inherits: t ? "true" : "false"
  }, r != null ? {
    initialValue: r
  } : {});
};
function ls(a, e) {
  var t = Lr(Ha({
    debugId: typeof a == "string" ? a : e,
    debugFileName: !1
  }), {
    isIdentifier: !0
  });
  return a && typeof a == "object" && La({
    type: "property",
    name: "--".concat(t),
    rule: us(a)
  }, sr()), "var(--".concat(t, ")");
}
function fs(a, e) {
  var t = {}, {
    valid: r,
    diffString: n
  } = ss(a, e);
  if (!r)
    throw new Error(`Tokens don't match contract.
`.concat(n));
  return ir(e, (o, s) => {
    t[Pi(a, s)] = String(o);
  }), t;
}
function cs(a) {
  return ir(a, (e, t) => ls(t.join("-")));
}
function hs(a, e) {
  return ir(a, (t, r) => {
    var n = typeof e == "function" ? e(t, r) : t, o = typeof n == "string" ? n.replace(/^\-\-/, "") : null;
    if (typeof o != "string" || o !== Lr(o, {
      isIdentifier: !0
    }))
      throw new Error('Invalid variable name for "'.concat(r.join("."), '": ').concat(o));
    return "var(--".concat(o, ")");
  });
}
var ds = ["@layer"];
function ja(a, e, t) {
  var r = !!t, n = r ? t : e, {
    layerName: o,
    tokens: s
  } = vs(n), h = r ? e : cs(s), l = {
    vars: fs(h, s)
  };
  if (o && (l = {
    "@layer": {
      [o]: l
    }
  }), La({
    type: "global",
    selector: a,
    rule: l
  }, sr()), !r)
    return h;
}
function ps(a, e, t) {
  var r = Ha(typeof e == "object" ? t : e);
  $i(r, sr());
  var n = typeof e == "object" ? ja(r, a, e) : ja(r, a);
  return n ? [r, n] : r;
}
function vs(a) {
  if ("@layer" in a) {
    var {
      "@layer": e
    } = a, t = vn(a, ds);
    return {
      layerName: e,
      tokens: t
    };
  }
  return {
    tokens: a
  };
}
const Ja = {
  color: {
    brand: "blue"
  }
}, ms = hs(
  Ja,
  (a, e) => e.join("-")
), Es = (a) => ps(ms, {
  ...Ja,
  ...a
});
export {
  bs as Button,
  ms as THEME,
  Ja as TOKENS,
  Es as createButtonTheme,
  ys as redThemeClass
};
//# sourceMappingURL=index.js.map
