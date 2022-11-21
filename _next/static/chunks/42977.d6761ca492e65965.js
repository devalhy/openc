"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [42977], {
        42977: function(t, e, n) {
            n.r(e), n.d(e, {
                DefaultPrivacyLevel: function() {
                    return $t
                },
                datadogRum: function() {
                    return Zo
                }
            });
            var r = {
                    log: "log",
                    debug: "debug",
                    info: "info",
                    warn: "warn",
                    error: "error"
                },
                i = function(t) {
                    for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                    Object.prototype.hasOwnProperty.call(r, t) || (t = r.log), i[t].apply(i, e)
                };

            function o(t, e) {
                return function() {
                    for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                    try {
                        return t.apply(void 0, n)
                    } catch (o) {
                        i.error(e, o)
                    }
                }
            }
            i.debug = console.debug.bind(console), i.log = console.log.bind(console), i.info = console.info.bind(console), i.warn = console.warn.bind(console), i.error = console.error.bind(console);
            var a, u = function(t, e, n) {
                    if (n || 2 === arguments.length)
                        for (var r, i = 0, o = e.length; i < o; i++) !r && i in e || (r || (r = Array.prototype.slice.call(e, 0, i)), r[i] = e[i]);
                    return t.concat(r || Array.prototype.slice.call(e))
                },
                s = !1;

            function c(t) {
                s = t
            }

            function f(t) {
                return function() {
                    return l(t, this, arguments)
                }
            }

            function l(t, e, n) {
                try {
                    return t.apply(e, n)
                } catch (i) {
                    if (d(r.error, i), a) try {
                        a(i)
                    } catch (i) {
                        d(r.error, i)
                    }
                }
            }

            function d(t) {
                for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                s && i.apply(void 0, u([t, "[MONITOR]"], e, !1))
            }
            var p = 1e3,
                v = 6e4;

            function m(t, e, n) {
                var r, i, o = !n || void 0 === n.leading || n.leading,
                    a = !n || void 0 === n.trailing || n.trailing,
                    u = !1;
                return {
                    throttled: function() {
                        for (var n = [], s = 0; s < arguments.length; s++) n[s] = arguments[s];
                        u ? r = n : (o ? t.apply(void 0, n) : r = n, u = !0, i = setTimeout((function() {
                            a && r && t.apply(void 0, r), u = !1, r = void 0
                        }), e))
                    },
                    cancel: function() {
                        clearTimeout(i), u = !1, r = void 0
                    }
                }
            }

            function h(t) {
                for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                return e.forEach((function(e) {
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
                })), t
            }

            function g(t) {
                return h({}, t)
            }

            function y(t) {
                return t ? (parseInt(t, 10) ^ 16 * Math.random() >> parseInt(t, 10) / 4).toString(16) : "".concat(1e7, "-").concat(1e3, "-").concat(4e3, "-").concat(8e3, "-").concat(1e11).replace(/[018]/g, y)
            }

            function b(t) {
                return 0 !== t && 100 * Math.random() <= t
            }

            function w(t, e) {
                return +t.toFixed(e)
            }

            function S() {}

            function C(t, e, n) {
                if ("object" !== typeof t || null === t) return JSON.stringify(t);
                var r = T(Object.prototype),
                    i = T(Array.prototype),
                    o = T(Object.getPrototypeOf(t)),
                    a = T(t);
                try {
                    return JSON.stringify(t, e, n)
                } catch (Eo) {
                    return "<error: unable to serialize object>"
                } finally {
                    r(), i(), o(), a()
                }
            }

            function T(t) {
                var e = t,
                    n = e.toJSON;
                return n ? (delete e.toJSON, function() {
                    e.toJSON = n
                }) : S
            }

            function k(t, e) {
                return -1 !== t.indexOf(e)
            }

            function E(t) {
                if (Array.from) return Array.from(t);
                var e = [];
                if (t instanceof Set) t.forEach((function(t) {
                    return e.push(t)
                }));
                else
                    for (var n = 0; n < t.length; n++) e.push(t[n]);
                return e
            }

            function x(t, e) {
                for (var n = 0; n < t.length; n += 1) {
                    var r = t[n];
                    if (e(r, n)) return r
                }
            }

            function _(t) {
                return R(t) && t >= 0 && t <= 100
            }

            function R(t) {
                return "number" === typeof t
            }

            function A(t) {
                return Object.keys(t).map((function(e) {
                    return t[e]
                }))
            }

            function I(t) {
                return Object.keys(t).map((function(e) {
                    return [e, t[e]]
                }))
            }

            function O(t) {
                return 0 === Object.keys(t).length
            }

            function N(t, e) {
                return t.slice(0, e.length) === e
            }

            function L() {
                if ("object" === typeof globalThis) return globalThis;
                Object.defineProperty(Object.prototype, "_dd_temp_", {
                    get: function() {
                        return this
                    },
                    configurable: !0
                });
                var t = _dd_temp_;
                return delete Object.prototype._dd_temp_, "object" !== typeof t && (t = "object" === typeof self ? self : "object" === typeof window ? window : {}), t
            }

            function M(t) {
                if (t.origin) return t.origin;
                var e = t.host.replace(/(:80|:443)$/, "");
                return "".concat(t.protocol, "//").concat(e)
            }

            function P(t, e) {
                var n = new RegExp("(?:^|;)\\s*".concat(e, "\\s*=\\s*([^;]+)")).exec(t);
                return n ? n[1] : void 0
            }

            function D(t, e, n) {
                void 0 === n && (n = "");
                var r = t.charCodeAt(e - 1),
                    i = r >= 55296 && r <= 56319 ? e + 1 : e;
                return t.length <= i ? t : "".concat(t.slice(0, i)).concat(n)
            }

            function B(t, e, n, r) {
                return U(t, [e], n, r)
            }

            function U(t, e, n, r) {
                var i = void 0 === r ? {} : r,
                    o = i.once,
                    a = i.capture,
                    u = i.passive,
                    s = f(o ? function(t) {
                        l(), n(t)
                    } : n),
                    c = u ? {
                        capture: a,
                        passive: u
                    } : a;
                e.forEach((function(e) {
                    return t.addEventListener(e, s, c)
                }));
                var l = function() {
                    return e.forEach((function(e) {
                        return t.removeEventListener(e, s, c)
                    }))
                };
                return {
                    stop: l
                }
            }

            function q(t, e) {
                document.readyState === t || "complete" === document.readyState ? e() : B(window, "complete" === t ? "load" : "DOMContentLoaded", e, {
                    once: !0
                })
            }

            function F(t) {
                return null === t ? "null" : Array.isArray(t) ? "array" : typeof t
            }

            function j(t, e, n) {
                if (void 0 === n && (n = function() {
                        if ("undefined" !== typeof WeakSet) {
                            var t = new WeakSet;
                            return {
                                hasAlreadyBeenSeen: function(e) {
                                    var n = t.has(e);
                                    return n || t.add(e), n
                                }
                            }
                        }
                        var e = [];
                        return {
                            hasAlreadyBeenSeen: function(t) {
                                var n = e.indexOf(t) >= 0;
                                return n || e.push(t), n
                            }
                        }
                    }()), void 0 === e) return t;
                if ("object" !== typeof e || null === e) return e;
                if (e instanceof Date) return new Date(e.getTime());
                if (e instanceof RegExp) {
                    var r = e.flags || [e.global ? "g" : "", e.ignoreCase ? "i" : "", e.multiline ? "m" : "", e.sticky ? "y" : "", e.unicode ? "u" : ""].join("");
                    return new RegExp(e.source, r)
                }
                if (!n.hasAlreadyBeenSeen(e)) {
                    if (Array.isArray(e)) {
                        for (var i = Array.isArray(t) ? t : [], o = 0; o < e.length; ++o) i[o] = j(i[o], e[o], n);
                        return i
                    }
                    var a = "object" === F(t) ? t : {};
                    for (var u in e) Object.prototype.hasOwnProperty.call(e, u) && (a[u] = j(a[u], e[u], n));
                    return a
                }
            }

            function V(t) {
                return j(void 0, t)
            }

            function H() {
                for (var t, e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                for (var r = 0, i = e; r < i.length; r++) {
                    var o = i[r];
                    void 0 !== o && null !== o && (t = j(t, o))
                }
                return t
            }

            function z(t, e) {
                return t.some((function(t) {
                    if ("function" === typeof t) try {
                        return t(e)
                    } catch (n) {
                        return i.error(n), !1
                    }
                    return t instanceof RegExp ? t.test(e) : t === e
                }))
            }

            function G(t) {
                return window.CSS && window.CSS.escape ? window.CSS.escape(t) : t.replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g, (function(t, e) {
                    return e ? "\0" === t ? "\ufffd" : "".concat(t.slice(0, -1), "\\").concat(t.charCodeAt(t.length - 1).toString(16), " ") : "\\".concat(t)
                }))
            }

            function W() {
                var t = {};
                return {
                    get: function() {
                        return t
                    },
                    add: function(e, n) {
                        t[e] = n
                    },
                    remove: function(e) {
                        delete t[e]
                    },
                    set: function(e) {
                        t = e
                    },
                    getContext: function() {
                        return V(t)
                    },
                    setContext: function(e) {
                        t = V(e)
                    },
                    setContextProperty: function(e, n) {
                        t[e] = V(n)
                    },
                    removeContextProperty: function(e) {
                        delete t[e]
                    },
                    clearContext: function() {
                        t = {}
                    }
                }
            }
            var X, Y = function() {
                function t() {
                    this.buffer = []
                }
                return t.prototype.add = function(t) {
                    this.buffer.push(t) > 500 && this.buffer.splice(0, 1)
                }, t.prototype.drain = function() {
                    this.buffer.forEach((function(t) {
                        return t()
                    })), this.buffer.length = 0
                }, t
            }();

            function K(t) {
                return {
                    relative: t,
                    timeStamp: $(t)
                }
            }

            function $(t) {
                var e = Z() - performance.now();
                return e > at() ? Math.round(it(e, t)) : function(t) {
                    return Math.round(it(at(), t))
                }(t)
            }

            function J(t) {
                return R(t) ? w(1e6 * t, 0) : t
            }

            function Z() {
                return (new Date).getTime()
            }

            function Q() {
                return Z()
            }

            function tt() {
                return performance.now()
            }

            function et() {
                return {
                    relative: tt(),
                    timeStamp: Q()
                }
            }

            function nt() {
                return {
                    relative: 0,
                    timeStamp: at()
                }
            }

            function rt(t, e) {
                return e - t
            }

            function it(t, e) {
                return t + e
            }

            function ot(t) {
                return t - at()
            }

            function at() {
                return void 0 === X && (X = performance.timing.navigationStart), X
            }
            var ut;

            function st(t, e, n, r) {
                var i = new Date;
                i.setTime(i.getTime() + n);
                var o = "expires=".concat(i.toUTCString()),
                    a = r && r.crossSite ? "none" : "strict",
                    u = r && r.domain ? ";domain=".concat(r.domain) : "",
                    s = r && r.secure ? ";secure" : "";
                document.cookie = "".concat(t, "=").concat(e, ";").concat(o, ";path=/;samesite=").concat(a).concat(u).concat(s)
            }

            function ct(t) {
                return P(document.cookie, t)
            }

            function ft(t, e) {
                st(t, "", 0, e)
            }

            function lt() {
                return Boolean(window._DATADOG_SYNTHETICS_INJECTS_RUM || ct("datadog-synthetics-injects-rum"))
            }

            function dt() {
                var t = L().DatadogEventBridge;
                if (t) return {
                    getAllowedWebViewHosts: function() {
                        return JSON.parse(t.getAllowedWebViewHosts())
                    },
                    send: function(e, n) {
                        t.send(JSON.stringify({
                            eventType: e,
                            event: n
                        }))
                    }
                }
            }

            function pt(t) {
                var e;
                void 0 === t && (t = null === (e = L().location) || void 0 === e ? void 0 : e.hostname);
                var n = dt();
                return !!n && n.getAllowedWebViewHosts().some((function(e) {
                    return t === e || (n = t, r = ".".concat(e), n.slice(-r.length) === r);
                    var n, r
                }))
            }
            var vt = "?";

            function mt(t) {
                var e = [],
                    n = kt(t, "stack"),
                    r = String(t);
                return n && N(n, r) && (n = n.slice(r.length)), n && n.split("\n").forEach((function(t) {
                    var n = function(t) {
                        var e = yt.exec(t);
                        if (!e) return;
                        var n = e[2] && 0 === e[2].indexOf("native"),
                            r = e[2] && 0 === e[2].indexOf("eval"),
                            i = bt.exec(e[2]);
                        r && i && (e[2] = i[1], e[3] = i[2], e[4] = i[3]);
                        return {
                            args: n ? [e[2]] : [],
                            column: e[4] ? +e[4] : void 0,
                            func: e[1] || vt,
                            line: e[3] ? +e[3] : void 0,
                            url: n ? void 0 : e[2]
                        }
                    }(t) || function(t) {
                        var e = wt.exec(t);
                        if (!e) return;
                        return {
                            args: [],
                            column: e[3] ? +e[3] : void 0,
                            func: vt,
                            line: e[2] ? +e[2] : void 0,
                            url: e[1]
                        }
                    }(t) || function(t) {
                        var e = St.exec(t);
                        if (!e) return;
                        return {
                            args: [],
                            column: e[4] ? +e[4] : void 0,
                            func: e[1] || vt,
                            line: +e[3],
                            url: e[2]
                        }
                    }(t) || function(t) {
                        var e = Ct.exec(t);
                        if (!e) return;
                        var n = e[3] && e[3].indexOf(" > eval") > -1,
                            r = Tt.exec(e[3]);
                        n && r && (e[3] = r[1], e[4] = r[2], e[5] = void 0);
                        return {
                            args: e[2] ? e[2].split(",") : [],
                            column: e[5] ? +e[5] : void 0,
                            func: e[1] || vt,
                            line: e[4] ? +e[4] : void 0,
                            url: e[3]
                        }
                    }(t);
                    n && (!n.func && n.line && (n.func = vt), e.push(n))
                })), {
                    message: kt(t, "message"),
                    name: kt(t, "name"),
                    stack: e
                }
            }
            var ht = "((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\\w+\\.|\\/).*?)",
                gt = "(?::(\\d+))",
                yt = new RegExp("^\\s*at (.*?) ?\\(".concat(ht).concat(gt, "?").concat(gt, "?\\)?\\s*$"), "i"),
                bt = new RegExp("\\((\\S*)".concat(gt).concat(gt, "\\)"));
            var wt = new RegExp("^\\s*at ?".concat(ht).concat(gt, "?").concat(gt, "??\\s*$"), "i");
            var St = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;
            var Ct = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|capacitor|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i,
                Tt = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;

            function kt(t, e) {
                if ("object" === typeof t && t && e in t) {
                    var n = t[e];
                    return "string" === typeof n ? n : void 0
                }
            }
            var Et, xt, _t = "agent",
                Rt = "console",
                At = "custom",
                It = "source",
                Ot = "report";

            function Nt(t) {
                var e = t.stackTrace,
                    n = t.originalError,
                    r = t.handlingStack,
                    i = t.startClocks,
                    o = t.nonErrorPrefix,
                    a = t.source,
                    u = t.handling;
                return e && (void 0 !== e.message || n instanceof Error) ? {
                    startClocks: i,
                    source: a,
                    handling: u,
                    originalError: n,
                    message: e.message || "Empty message",
                    stack: Lt(e),
                    handlingStack: r,
                    type: e.name,
                    causes: Dt(n, a)
                } : {
                    startClocks: i,
                    source: a,
                    handling: u,
                    originalError: n,
                    message: "".concat(o, " ").concat(C(n)),
                    stack: "No stack, consider using an instance of Error",
                    handlingStack: r,
                    type: e && e.name
                }
            }

            function Lt(t) {
                var e = Mt(t);
                return t.stack.forEach((function(t) {
                    var n = "?" === t.func ? "<anonymous>" : t.func,
                        r = t.args && t.args.length > 0 ? "(".concat(t.args.join(", "), ")") : "",
                        i = t.line ? ":".concat(t.line) : "",
                        o = t.line && t.column ? ":".concat(t.column) : "";
                    e += "\n  at ".concat(n).concat(r, " @ ").concat(t.url).concat(i).concat(o)
                })), e
            }

            function Mt(t) {
                return "".concat(t.name || "Error", ": ").concat(t.message)
            }

            function Pt() {
                var t, e = new Error;
                if (!e.stack) try {
                    throw e
                } catch (n) {}
                return l((function() {
                    var n = mt(e);
                    n.stack = n.stack.slice(2), t = Lt(n)
                })), t
            }

            function Dt(t, e) {
                for (var n = t, r = [];
                    (null === n || void 0 === n ? void 0 : n.cause) instanceof Error && r.length < 10;) {
                    var i = mt(n.cause);
                    r.push({
                        message: n.cause.message,
                        source: e,
                        type: null === i || void 0 === i ? void 0 : i.name,
                        stack: i && Lt(i)
                    }), n = n.cause
                }
                return r.length ? r : void 0
            }

            function Bt(t) {
                var e = h({}, t);
                return ["id", "name", "email"].forEach((function(t) {
                    t in e && (e[t] = String(e[t]))
                })), e
            }

            function Ut(t) {
                return !!Et && Et.has(t)
            }

            function qt() {
                return Et || new Set
            }

            function Ft(t) {
                return Vt(t, M(window.location)).href
            }

            function jt(t) {
                return M(Vt(t))
            }

            function Vt(t, e) {
                if (function() {
                        if (void 0 !== xt) return xt;
                        try {
                            var t = new URL("http://test/path");
                            return xt = "http://test/path" === t.href
                        } catch (Eo) {
                            xt = !1
                        }
                        return xt
                    }()) return void 0 !== e ? new URL(t, e) : new URL(t);
                if (void 0 === e && !/:/.test(t)) throw new Error("Invalid URL: '".concat(t, "'"));
                var n = document,
                    r = n.createElement("a");
                if (void 0 !== e) {
                    var i = (n = document.implementation.createHTMLDocument("")).createElement("base");
                    i.href = e, n.head.appendChild(i), n.body.appendChild(r)
                }
                return r.href = t, r
            }
            var Ht = "datadoghq.com",
                zt = {
                    logs: "logs",
                    rum: "rum",
                    sessionReplay: "session-replay"
                },
                Gt = {
                    logs: "logs",
                    rum: "rum",
                    sessionReplay: "replay"
                };

            function Wt(t, e, n) {
                var r = t.site,
                    i = void 0 === r ? Ht : r,
                    o = t.clientToken,
                    a = i.split("."),
                    u = a.pop(),
                    s = "".concat(zt[e], ".browser-intake-").concat(a.join("-"), ".").concat(u),
                    c = "https://".concat(s, "/api/v2/").concat(Gt[e]),
                    f = t.proxyUrl && Ft(t.proxyUrl);
                return {
                    build: function(t) {
                        var r = ["sdk_version:".concat("4.24.1")].concat(n);
                        t && r.push("retry_count:".concat(t.count), "retry_after:".concat(t.lastFailureStatus));
                        var i = "ddsource=browser" + "&ddtags=".concat(encodeURIComponent(r.join(","))) + "&dd-api-key=".concat(o) + "&dd-evp-origin-version=".concat(encodeURIComponent("4.24.1")) + "&dd-evp-origin=browser" + "&dd-request-id=".concat(y());
                        "rum" === e && (i += "&batch_time=".concat(Q()));
                        var a = "".concat(c, "?").concat(i);
                        return f ? "".concat(f, "?ddforward=").concat(encodeURIComponent(a)) : a
                    },
                    buildIntakeUrl: function() {
                        return f ? "".concat(f, "?ddforward") : c
                    },
                    endpointType: e
                }
            }
            var Xt = /[^a-z0-9_:./-]/;

            function Yt(t, e) {
                var n = 200 - t.length - 1;
                (e.length > n || Xt.test(e)) && i.warn("".concat(t, " value doesn't meet tag requirements and will be sanitized"));
                var r = e.replace(/,/g, "_");
                return "".concat(t, ":").concat(r)
            }

            function Kt(t) {
                var e = function(t) {
                        var e = t.env,
                            n = t.service,
                            r = t.version,
                            i = t.datacenter,
                            o = [];
                        return e && o.push(Yt("env", e)), n && o.push(Yt("service", n)), r && o.push(Yt("version", r)), i && o.push(Yt("datacenter", i)), o
                    }(t),
                    n = function(t, e) {
                        return {
                            logsEndpointBuilder: Wt(t, "logs", e),
                            rumEndpointBuilder: Wt(t, "rum", e),
                            sessionReplayEndpointBuilder: Wt(t, "sessionReplay", e)
                        }
                    }(t, e),
                    r = A(n).map((function(t) {
                        return t.buildIntakeUrl()
                    })),
                    i = function(t, e, n) {
                        if (!t.replica) return;
                        var r = h({}, t, {
                                site: Ht,
                                clientToken: t.replica.clientToken
                            }),
                            i = {
                                logsEndpointBuilder: Wt(r, "logs", n),
                                rumEndpointBuilder: Wt(r, "rum", n)
                            };
                        return e.push.apply(e, A(i).map((function(t) {
                            return t.buildIntakeUrl()
                        }))), h({
                            applicationId: t.replica.applicationId
                        }, i)
                    }(t, r, e);
                return h({
                    isIntakeUrl: function(t) {
                        return r.some((function(e) {
                            return 0 === t.indexOf(e)
                        }))
                    },
                    replica: i,
                    site: t.site || Ht
                }, n)
            }
            var $t = {
                ALLOW: "allow",
                MASK: "mask",
                MASK_USER_INPUT: "mask-user-input"
            };

            function Jt(t) {
                var e, n, r;
                if (t && t.clientToken)
                    if (void 0 === t.sampleRate || _(t.sampleRate))
                        if (void 0 === t.telemetrySampleRate || _(t.telemetrySampleRate)) {
                            var a;
                            if (void 0 === t.telemetryConfigurationSampleRate || _(t.telemetryConfigurationSampleRate)) return a = t.enableExperimentalFeatures, Array.isArray(a) && (Et || (Et = new Set(a)), a.filter((function(t) {
                                return "string" === typeof t
                            })).forEach((function(t) {
                                k(t, "-") && i.warn("please use snake case for '".concat(t, "'")), Et.add(t)
                            }))), h({
                                beforeSend: t.beforeSend && o(t.beforeSend, "beforeSend threw an error:"),
                                cookieOptions: Zt(t),
                                sampleRate: null !== (e = t.sampleRate) && void 0 !== e ? e : 100,
                                telemetrySampleRate: null !== (n = t.telemetrySampleRate) && void 0 !== n ? n : 20,
                                telemetryConfigurationSampleRate: null !== (r = t.telemetryConfigurationSampleRate) && void 0 !== r ? r : 5,
                                service: t.service,
                                silentMultipleInit: !!t.silentMultipleInit,
                                batchBytesLimit: 16384,
                                eventRateLimiterThreshold: 3e3,
                                maxTelemetryEventsPerPage: 15,
                                flushTimeout: 3e4,
                                batchMessagesLimit: 50,
                                messageBytesLimit: 262144
                            }, Kt(t));
                            i.error("Telemetry Configuration Sample Rate should be a number between 0 and 100")
                        } else i.error("Telemetry Sample Rate should be a number between 0 and 100");
                else i.error("Sample Rate should be a number between 0 and 100");
                else i.error("Client Token is not configured, we will not send any data.")
            }

            function Zt(t) {
                var e = {};
                return e.secure = function(t) {
                    return !!t.useSecureSessionCookie || !!t.useCrossSiteSessionCookie
                }(t), e.crossSite = !!t.useCrossSiteSessionCookie, t.trackSessionAcrossSubdomains && (e.domain = function() {
                    if (void 0 === ut) {
                        for (var t = "dd_site_test_".concat(y()), e = window.location.hostname.split("."), n = e.pop(); e.length && !ct(t);) n = "".concat(e.pop(), ".").concat(n), st(t, "test", p, {
                            domain: n
                        });
                        ft(t, {
                            domain: n
                        }), ut = n
                    }
                    return ut
                }()), e
            }
            var Qt = function() {
                function t(t) {
                    this.onFirstSubscribe = t, this.observers = []
                }
                return t.prototype.subscribe = function(t) {
                    var e = this;
                    return !this.observers.length && this.onFirstSubscribe && (this.onLastUnsubscribe = this.onFirstSubscribe() || void 0), this.observers.push(t), {
                        unsubscribe: function() {
                            e.observers = e.observers.filter((function(e) {
                                return t !== e
                            })), !e.observers.length && e.onLastUnsubscribe && e.onLastUnsubscribe()
                        }
                    }
                }, t.prototype.notify = function(t) {
                    this.observers.forEach((function(e) {
                        return e(t)
                    }))
                }, t
            }();

            function te() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                var n = new Qt((function() {
                    var e = t.map((function(t) {
                        return t.subscribe((function(t) {
                            return n.notify(t)
                        }))
                    }));
                    return function() {
                        return e.forEach((function(t) {
                            return t.unsubscribe()
                        }))
                    }
                }));
                return n
            }
            var ee, ne = "log",
                re = "configuration",
                ie = ["https://www.datadoghq-browser-agent.com", "https://www.datad0g-browser-agent.com", "http://localhost", "<anonymous>"],
                oe = ["ddog-gov.com"],
                ae = {
                    maxEventsPerPage: 0,
                    sentEventCount: 0,
                    telemetryEnabled: !1,
                    telemetryConfigurationEnabled: !1
                };

            function ue(t, e) {
                var n, r = new Qt;
                return ae.telemetryEnabled = b(e.telemetrySampleRate), ae.telemetryConfigurationEnabled = ae.telemetryEnabled && b(e.telemetryConfigurationSampleRate), ee = function(i) {
                    !k(oe, e.site) && ae.telemetryEnabled && r.notify(function(t, e) {
                        return H({
                            type: "telemetry",
                            date: Q(),
                            service: t,
                            version: "4.24.1",
                            source: "browser",
                            _dd: {
                                format_version: 2
                            },
                            telemetry: e,
                            experimental_features: E(qt())
                        }, void 0 !== n ? n() : {})
                    }(t, i))
                }, a = ce, h(ae, {
                    maxEventsPerPage: e.maxTelemetryEventsPerPage,
                    sentEventCount: 0
                }), {
                    setContextProvider: function(t) {
                        n = t
                    },
                    observable: r
                }
            }

            function se(t, e) {
                d(r.debug, t, e), fe(h({
                    type: ne,
                    message: t,
                    status: "debug"
                }, e))
            }

            function ce(t) {
                fe(h({
                    type: ne,
                    status: "error"
                }, function(t) {
                    if (t instanceof Error) {
                        var e = mt(t);
                        return {
                            error: {
                                kind: e.name,
                                stack: Lt(le(e))
                            },
                            message: e.message
                        }
                    }
                    return {
                        error: {
                            stack: "Not an instance of error"
                        },
                        message: "Uncaught ".concat(C(t))
                    }
                }(t)))
            }

            function fe(t) {
                ee && ae.sentEventCount < ae.maxEventsPerPage && (ae.sentEventCount += 1, ee(t))
            }

            function le(t) {
                return t.stack = t.stack.filter((function(t) {
                    return !t.url || ie.some((function(e) {
                        return N(t.url, e)
                    }))
                })), t
            }

            function de() {
                var t, e = window;
                if (e.Zone) {
                    var n = e.Zone.__symbol__;
                    if (!(t = e[n("MutationObserver")]) && e.MutationObserver) {
                        var r = new e.MutationObserver(S)[n("originalInstance")];
                        t = r && r.constructor
                    }
                }
                return t || (t = e.MutationObserver), t
            }
            var pe = "initial_document",
                ve = [
                    ["document", function(t) {
                        return pe === t
                    }],
                    ["xhr", function(t) {
                        return "xmlhttprequest" === t
                    }],
                    ["fetch", function(t) {
                        return "fetch" === t
                    }],
                    ["beacon", function(t) {
                        return "beacon" === t
                    }],
                    ["css", function(t, e) {
                        return /\.css$/i.test(e)
                    }],
                    ["js", function(t, e) {
                        return /\.js$/i.test(e)
                    }],
                    ["image", function(t, e) {
                        return k(["image", "img", "icon"], t) || null !== /\.(gif|jpg|jpeg|tiff|png|svg|ico)$/i.exec(e)
                    }],
                    ["font", function(t, e) {
                        return null !== /\.(woff|eot|woff2|ttf)$/i.exec(e)
                    }],
                    ["media", function(t, e) {
                        return k(["audio", "video"], t) || null !== /\.(mp3|mp4)$/i.exec(e)
                    }]
                ];

            function me(t) {
                var e = t.name;
                if (! function(t) {
                        try {
                            return !!Vt(t)
                        } catch (o) {
                            return !1
                        }
                    }(e)) return se('Failed to construct URL for "'.concat(t.name, '"')), "other";
                for (var n = function(t) {
                        var e = Vt(t).pathname;
                        return "/" === e[0] ? e : "/".concat(e)
                    }(e), r = 0, i = ve; r < i.length; r++) {
                    var o = i[r],
                        a = o[0];
                    if ((0, o[1])(t.initiatorType, n)) return a
                }
                return "other"
            }

            function he() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                for (var n = 1; n < t.length; n += 1)
                    if (t[n - 1] > t[n]) return !1;
                return !0
            }

            function ge(t) {
                var e = t.duration,
                    n = t.startTime,
                    r = t.responseEnd;
                return J(0 === e && n < r ? rt(n, r) : e)
            }

            function ye(t) {
                var e = be(t);
                if (e) {
                    var n = e.startTime,
                        r = e.fetchStart,
                        i = e.redirectStart,
                        o = e.redirectEnd,
                        a = e.domainLookupStart,
                        u = e.domainLookupEnd,
                        s = e.connectStart,
                        c = e.secureConnectionStart,
                        f = e.connectEnd,
                        l = e.requestStart,
                        d = e.responseStart,
                        p = {
                            download: Se(n, d, e.responseEnd),
                            first_byte: Se(n, l, d)
                        };
                    return f !== r && (p.connect = Se(n, s, f), he(s, c, f) && (p.ssl = Se(n, c, f))), u !== r && (p.dns = Se(n, a, u)), we(t) && (p.redirect = Se(n, i, o)), p
                }
            }

            function be(t) {
                if (he(t.startTime, t.fetchStart, t.domainLookupStart, t.domainLookupEnd, t.connectStart, t.connectEnd, t.requestStart, t.responseStart, t.responseEnd)) {
                    if (!we(t)) return t;
                    var e = t.redirectStart,
                        n = t.redirectEnd;
                    if (e < t.startTime && (e = t.startTime), n < t.startTime && (n = t.fetchStart), he(t.startTime, e, n, t.fetchStart)) return h({}, t, {
                        redirectEnd: n,
                        redirectStart: e
                    })
                }
            }

            function we(t) {
                return t.fetchStart !== t.startTime
            }

            function Se(t, e, n) {
                return {
                    duration: J(rt(e, n)),
                    start: J(rt(t, e))
                }
            }

            function Ce(t) {
                if (t.startTime < t.responseStart) return t.decodedBodySize
            }

            function Te(t, e) {
                return e && !t.isIntakeUrl(e)
            }
            var ke, Ee;

            function xe(t) {
                var e = function(t) {
                    var e = t.querySelector("meta[name=dd-trace-id]"),
                        n = t.querySelector("meta[name=dd-trace-time]");
                    return _e(e && e.content, n && n.content)
                }(t) || function(t) {
                    var e = function(t) {
                        for (var e = 0; e < t.childNodes.length; e += 1) {
                            if (n = Re(t.childNodes[e])) return n
                        }
                        if (t.body)
                            for (e = t.body.childNodes.length - 1; e >= 0; e -= 1) {
                                var n, r = t.body.childNodes[e];
                                if (n = Re(r)) return n;
                                if (!Ae(r)) break
                            }
                    }(t);
                    if (!e) return;
                    return _e(P(e, "trace-id"), P(e, "trace-time"))
                }(t);
                if (e && !(e.traceTime <= Z() - 12e4)) return e.traceId
            }

            function _e(t, e) {
                var n = e && Number(e);
                if (t && n) return {
                    traceId: t,
                    traceTime: n
                }
            }

            function Re(t) {
                if (t && function(t) {
                        return "#comment" === t.nodeName
                    }(t)) {
                    var e = /^\s*DATADOG;(.*?)\s*$/.exec(t.data);
                    if (e) return e[1]
                }
            }

            function Ae(t) {
                return "#text" === t.nodeName
            }

            function Ie() {
                return void 0 !== window.performance && "getEntries" in performance
            }

            function Oe(t) {
                return window.PerformanceObserver && void 0 !== PerformanceObserver.supportedEntryTypes && PerformanceObserver.supportedEntryTypes.includes(t)
            }

            function Ne(t, e) {
                var n;
                if (n = function(n) {
                        Me(t, e, [n])
                    }, q("interactive", (function() {
                        var t, e = {
                            entryType: "resource",
                            initiatorType: pe,
                            traceId: xe(document)
                        };
                        if (Oe("navigation") && performance.getEntriesByType("navigation").length > 0) t = h(performance.getEntriesByType("navigation")[0].toJSON(), e);
                        else {
                            var r = Le();
                            t = h(r, {
                                decodedBodySize: 0,
                                duration: r.responseEnd,
                                name: window.location.href,
                                startTime: 0
                            }, e)
                        }
                        n(t)
                    })), Ie()) {
                    var r = performance.getEntries();
                    setTimeout(f((function() {
                        return Me(t, e, r)
                    })))
                }
                if (window.PerformanceObserver) {
                    var i = f((function(n) {
                            return Me(t, e, n.getEntries())
                        })),
                        o = ["resource", "navigation", "longtask", "paint"],
                        a = ["largest-contentful-paint", "first-input", "layout-shift"];
                    try {
                        a.forEach((function(t) {
                            new PerformanceObserver(i).observe({
                                type: t,
                                buffered: !0
                            })
                        }))
                    } catch (u) {
                        o.push.apply(o, a)
                    }
                    new PerformanceObserver(i).observe({
                        entryTypes: o
                    }), Ie() && "addEventListener" in performance && performance.addEventListener("resourcetimingbufferfull", (function() {
                        performance.clearResourceTimings()
                    }))
                }
                Oe("navigation") || function(t) {
                    function e() {
                        t(h(Le(), {
                            entryType: "navigation"
                        }))
                    }
                    q("complete", (function() {
                        setTimeout(f(e))
                    }))
                }((function(n) {
                    Me(t, e, [n])
                })), Oe("first-input") || function(t) {
                    var e = Z(),
                        n = !1,
                        r = U(window, ["click", "mousedown", "keydown", "touchstart", "pointerdown"], (function(t) {
                            if (t.cancelable) {
                                var e = {
                                    entryType: "first-input",
                                    processingStart: tt(),
                                    startTime: t.timeStamp
                                };
                                "pointerdown" === t.type ? i(e) : o(e)
                            }
                        }), {
                            passive: !0,
                            capture: !0
                        }).stop;

                    function i(t) {
                        U(window, ["pointerup", "pointercancel"], (function(e) {
                            "pointerup" === e.type && o(t)
                        }), {
                            once: !0
                        })
                    }

                    function o(i) {
                        if (!n) {
                            n = !0, r();
                            var o = i.processingStart - i.startTime;
                            o >= 0 && o < Z() - e && t(i)
                        }
                    }
                }((function(n) {
                    Me(t, e, [n])
                }))
            }

            function Le() {
                var t = {},
                    e = performance.timing;
                for (var n in e)
                    if (R(e[n])) {
                        var r = n,
                            i = e[r];
                        t[r] = 0 === i ? 0 : ot(i)
                    }
                return t
            }

            function Me(t, e, n) {
                var r = n.filter((function(t) {
                    return "resource" === t.entryType || "navigation" === t.entryType || "paint" === t.entryType || "longtask" === t.entryType || "largest-contentful-paint" === t.entryType || "first-input" === t.entryType || "layout-shift" === t.entryType
                })).filter((function(t) {
                    return ! function(t) {
                        return "navigation" === t.entryType && t.loadEventEnd <= 0
                    }(t) && ! function(t, e) {
                        return "resource" === e.entryType && !Te(t, e.name)
                    }(e, t)
                }));
                r.length && t.notify(0, r)
            }

            function Pe(t, e, n) {
                var r = 0,
                    i = !1;
                return {
                    isLimitReached: function() {
                        if (0 === r && setTimeout((function() {
                                r = 0
                            }), v), (r += 1) <= e || i) return i = !1, !1;
                        if (r === e + 1) {
                            i = !0;
                            try {
                                n({
                                    message: "Reached max number of ".concat(t, "s by minute: ").concat(e),
                                    source: _t,
                                    startClocks: et()
                                })
                            } finally {
                                i = !1
                            }
                        }
                        return !0
                    }
                }
            }

            function De(t, e) {
                for (var n = t, r = 0, i = e.split("."); r < i.length; r++) {
                    var o = i[r];
                    if (!Ue(n, o)) return;
                    n = n[o]
                }
                return n
            }

            function Be(t, e, n) {
                for (var r = t, i = e.split("."), o = 0; o < i.length; o += 1) {
                    var a = i[o];
                    if (!Ue(r, a)) return;
                    o !== i.length - 1 ? r = r[a] : r[a] = n
                }
            }

            function Ue(t, e) {
                return "object" === typeof t && null !== t && Object.prototype.hasOwnProperty.call(t, e)
            }

            function qe() {
                var t = function() {
                        var t = window._DATADOG_SYNTHETICS_PUBLIC_ID || ct("datadog-synthetics-public-id");
                        return "string" === typeof t ? t : void 0
                    }(),
                    e = function() {
                        var t = window._DATADOG_SYNTHETICS_RESULT_ID || ct("datadog-synthetics-result-id");
                        return "string" === typeof t ? t : void 0
                    }();
                if (t && e) return {
                    test_id: t,
                    result_id: e,
                    injected: lt()
                }
            }

            function Fe() {
                return ke || (ke = function() {
                    var t = new Qt((function() {
                        var e = m(f((function() {
                            t.notify(je())
                        })), 200).throttled;
                        return B(window, "resize", e, {
                            capture: !0,
                            passive: !0
                        }).stop
                    }));
                    return t
                }()), ke
            }

            function je() {
                var t = window.visualViewport;
                return t ? {
                    width: Number(t.width * t.scale),
                    height: Number(t.height * t.scale)
                } : {
                    width: Number(window.innerWidth || 0),
                    height: Number(window.innerHeight || 0)
                }
            }

            function Ve() {
                if (Ut("clickmap")) return Ee || (Ee = je(), Fe().subscribe((function(t) {
                    Ee = t
                })).unsubscribe), {
                    viewport: Ee
                }
            }
            var He = ["view.url", "view.referrer", "action.target.name", "error.message", "error.stack", "error.resource.url", "resource.url"],
                ze = He.concat(["context"]);

            function Ge(t, e, n, r, o, a, u, s) {
                var c, f = ((c = {}).error = Pe("error", t.eventRateLimiterThreshold, s), c.action = Pe("action", t.eventRateLimiterThreshold, s), c),
                    l = qe(),
                    d = function() {
                        var t, e = null === (t = window.Cypress) || void 0 === t ? void 0 : t.env("traceId");
                        if ("string" === typeof e) return {
                            test_execution_id: e
                        }
                    }();
                e.subscribe(10, (function(s) {
                    var c, p = s.startTime,
                        v = s.rawRumEvent,
                        m = s.domainContext,
                        h = s.savedCommonContext,
                        g = s.customerContext,
                        y = r.findView(p),
                        b = o.findUrl(p),
                        w = n.findTrackedSession("view" !== v.type ? p : void 0);
                    if (w && y && b) {
                        var S = h || u(),
                            C = a.findActionId(p),
                            T = H({
                                _dd: {
                                    format_version: 2,
                                    drift: Math.round(Z() - it(at(), performance.now())),
                                    session: {
                                        plan: w.plan
                                    },
                                    browser_sdk_version: pt() ? "4.24.1" : void 0
                                },
                                application: {
                                    id: t.applicationId
                                },
                                date: Q(),
                                service: y.service || t.service,
                                version: y.version || t.version,
                                source: "browser",
                                session: {
                                    id: w.id,
                                    type: l ? "synthetics" : d ? "ci_test" : "user"
                                },
                                view: {
                                    id: y.id,
                                    name: y.name,
                                    url: b.url,
                                    referrer: b.referrer
                                },
                                action: (c = v, -1 !== ["error", "resource", "long_task"].indexOf(c.type) && C ? {
                                    id: C
                                } : void 0),
                                synthetics: l,
                                ci_test: d,
                                display: Ve()
                            }, v);
                        T.context = H(S.context, g), "has_replay" in T.session || (T.session.has_replay = S.hasReplay), O(S.user) || (T.usr = S.user),
                            function(t, e, n, r) {
                                var o;
                                if (e) {
                                    var a = function(t, e, n) {
                                        var r = V(t),
                                            i = n(r);
                                        return e.forEach((function(e) {
                                            var n = De(t, e),
                                                i = De(r, e),
                                                o = F(n),
                                                a = F(i);
                                            a === o ? Be(t, e, i) : "object" !== o || "undefined" !== a && "null" !== a || Be(t, e, {})
                                        })), i
                                    }(t, "view" === t.type ? He : ze, (function(t) {
                                        return e(t, n)
                                    }));
                                    if (!1 === a && "view" !== t.type) return !1;
                                    !1 === a && i.warn("Can't dismiss view events using beforeSend!")
                                }
                                return !(null === (o = r[t.type]) || void 0 === o ? void 0 : o.isLimitReached())
                            }(T, t.beforeSend, m, f) && (O(T.context) && delete T.context, e.notify(11, T))
                    }
                }))
            }
            var We = [];

            function Xe() {
                document.hasFocus() && Ye();
                var t, e, n = (t = Ye, B(window, "focus", (function(e) {
                        e.isTrusted && t()
                    }))).stop,
                    r = (e = Ke, B(window, "blur", (function(t) {
                        t.isTrusted && e()
                    }))).stop;
                return {
                    isInForegroundAt: $e,
                    selectInForegroundPeriodsFor: Je,
                    stop: function() {
                        We = [], n(), r()
                    }
                }
            }

            function Ye() {
                if (!(We.length > 2500)) {
                    var t = We[We.length - 1],
                        e = tt();
                    void 0 !== t && void 0 === t.end || We.push({
                        start: e
                    })
                }
            }

            function Ke() {
                if (0 !== We.length) {
                    var t = We[We.length - 1],
                        e = tt();
                    void 0 === t.end && (t.end = e)
                }
            }

            function $e(t) {
                for (var e = We.length - 1; e >= 0; e--) {
                    var n = We[e];
                    if (void 0 !== n.end && t > n.end) break;
                    if (t > n.start && (void 0 === n.end || t < n.end)) return !0
                }
                return !1
            }

            function Je(t, e) {
                for (var n = it(t, e), r = [], i = Math.max(0, We.length - 500), o = We.length - 1; o >= i; o--) {
                    var a = We[o];
                    if (void 0 !== a.end && t > a.end) break;
                    if (!(n < a.start)) {
                        var u = t > a.start ? t : a.start,
                            s = rt(t, u),
                            c = rt(u, void 0 === a.end || n < a.end ? n : a.end);
                        r.unshift({
                            start: J(s),
                            duration: J(c)
                        })
                    }
                }
                return r
            }
            var Ze, Qe = function() {
                    function t() {
                        this.callbacks = {}
                    }
                    return t.prototype.notify = function(t, e) {
                        var n = this.callbacks[t];
                        n && n.forEach((function(t) {
                            return t(e)
                        }))
                    }, t.prototype.subscribe = function(t, e) {
                        var n = this;
                        return this.callbacks[t] || (this.callbacks[t] = []), this.callbacks[t].push(e), {
                            unsubscribe: function() {
                                n.callbacks[t] = n.callbacks[t].filter((function(t) {
                                    return e !== t
                                }))
                            }
                        }
                    }, t
                }(),
                tn = 144e5,
                en = 9e5,
                nn = 1 / 0,
                rn = function() {
                    function t(t) {
                        var e = this;
                        this.expireDelay = t, this.entries = [], this.clearOldContextsInterval = setInterval((function() {
                            return e.clearOldContexts()
                        }), 6e4)
                    }
                    return t.prototype.add = function(t, e) {
                        var n = this,
                            r = {
                                context: t,
                                startTime: e,
                                endTime: nn,
                                remove: function() {
                                    var t = n.entries.indexOf(r);
                                    t >= 0 && n.entries.splice(t, 1)
                                },
                                close: function(t) {
                                    r.endTime = t
                                }
                            };
                        return this.entries.unshift(r), r
                    }, t.prototype.find = function(t) {
                        void 0 === t && (t = nn);
                        for (var e = 0, n = this.entries; e < n.length; e++) {
                            var r = n[e];
                            if (r.startTime <= t) {
                                if (t <= r.endTime) return r.context;
                                break
                            }
                        }
                    }, t.prototype.closeActive = function(t) {
                        var e = this.entries[0];
                        e && e.endTime === nn && e.close(t)
                    }, t.prototype.findAll = function(t) {
                        return void 0 === t && (t = nn), this.entries.filter((function(e) {
                            return e.startTime <= t && t <= e.endTime
                        })).map((function(t) {
                            return t.context
                        }))
                    }, t.prototype.reset = function() {
                        this.entries = []
                    }, t.prototype.stop = function() {
                        clearInterval(this.clearOldContextsInterval)
                    }, t.prototype.clearOldContexts = function() {
                        for (var t = tt() - this.expireDelay; this.entries.length > 0 && this.entries[this.entries.length - 1].endTime < t;) this.entries.pop()
                    }, t
                }();

            function on(t, e, n) {
                var r = t[e],
                    i = n(r),
                    o = function() {
                        if ("function" === typeof i) return i.apply(this, arguments)
                    };
                return t[e] = o, {
                    stop: function() {
                        t[e] === o ? t[e] = r : i = r
                    }
                }
            }

            function an(t, e, n) {
                var r = n.before,
                    i = n.after;
                return on(t, e, (function(t) {
                    return function() {
                        var e, n = arguments;
                        return r && l(r, this, n), "function" === typeof t && (e = t.apply(this, n)), i && l(i, this, n), e
                    }
                }))
            }

            function un(t, e, n) {
                var r = Object.getOwnPropertyDescriptor(t, e);
                if (!r || !r.set || !r.configurable) return {
                    stop: S
                };
                var i = function(t, e) {
                        setTimeout(f((function() {
                            n(t, e)
                        })), 0)
                    },
                    o = function(t) {
                        r.set.call(this, t), i(this, t)
                    };
                return Object.defineProperty(t, e, {
                    set: o
                }), {
                    stop: function() {
                        var n;
                        (null === (n = Object.getOwnPropertyDescriptor(t, e)) || void 0 === n ? void 0 : n.set) === o ? Object.defineProperty(t, e, r) : i = S
                    }
                }
            }
            var sn, cn = new WeakMap;

            function fn() {
                return Ze || (Ze = function() {
                    var t = new Qt((function() {
                        var e = an(XMLHttpRequest.prototype, "open", {
                                before: ln
                            }).stop,
                            n = an(XMLHttpRequest.prototype, "send", {
                                before: function() {
                                    dn.call(this, t)
                                }
                            }).stop,
                            r = an(XMLHttpRequest.prototype, "abort", {
                                before: pn
                            }).stop;
                        return function() {
                            e(), n(), r()
                        }
                    }));
                    return t
                }()), Ze
            }

            function ln(t, e) {
                cn.set(this, {
                    state: "open",
                    method: t,
                    url: Ft(String(e))
                })
            }

            function dn(t) {
                var e = this,
                    n = cn.get(this);
                if (n) {
                    var r = n;
                    r.state = "start", r.startTime = tt(), r.startClocks = et(), r.isAborted = !1, r.xhr = this;
                    var i = !1,
                        o = an(this, "onreadystatechange", {
                            before: function() {
                                this.readyState === XMLHttpRequest.DONE && a()
                            }
                        }).stop,
                        a = f((function() {
                            if (e.removeEventListener("loadend", a), o(), !i) {
                                i = !0;
                                var u = n;
                                u.state = "complete", u.duration = rt(r.startClocks.timeStamp, Q()), u.status = e.status, t.notify(g(u))
                            }
                        }));
                    this.addEventListener("loadend", a), t.notify(r)
                }
            }

            function pn() {
                var t = cn.get(this);
                t && (t.isAborted = !0)
            }

            function vn() {
                return sn || (sn = function() {
                    var t = new Qt((function() {
                        if (window.fetch) return on(window, "fetch", (function(e) {
                            return function(n, r) {
                                var i, o = l(mn, null, [t, n, r]);
                                return o ? (i = e.call(this, o.input, o.init), l(hn, null, [t, i, o])) : i = e.call(this, n, r), i
                            }
                        })).stop
                    }));
                    return t
                }()), sn
            }

            function mn(t, e, n) {
                var r = n && n.method || "object" === typeof e && e.method || "GET",
                    i = Ft("object" === typeof e && e.url || e),
                    o = {
                        state: "start",
                        init: n,
                        input: e,
                        method: r,
                        startClocks: et(),
                        url: i
                    };
                return t.notify(o), o
            }

            function hn(t, e, n) {
                var r = function(e) {
                    var r = n;
                    r.state = "complete", r.duration = rt(r.startClocks.timeStamp, Q()), "stack" in e || e instanceof Error ? (r.status = 0, r.isAborted = e instanceof DOMException && e.code === DOMException.ABORT_ERR, r.error = e, t.notify(r)) : "status" in e && (r.response = e, r.responseType = e.type, r.status = e.status, r.isAborted = !1, t.notify(r))
                };
                e.then(f(r), f(r))
            }

            function gn(t) {
                0 !== t.status || t.isAborted || (t.traceId = void 0, t.spanId = void 0, t.traceSampled = void 0)
            }

            function yn(t, e, n, r) {
                var i, o, a;
                void 0 !== bn() && function(t, e) {
                    return z(t.allowedTracingOrigins, jt(e))
                }(t, e.url) && n.findTrackedSession() && (e.traceId = new wn, e.spanId = new wn, e.traceSampled = !R(t.tracingSampleRate) || b(t.tracingSampleRate), r((i = e.traceId, o = e.spanId, a = e.traceSampled, {
                    "x-datadog-origin": "rum",
                    "x-datadog-parent-id": o.toDecimalString(),
                    "x-datadog-sampling-priority": a ? "1" : "0",
                    "x-datadog-trace-id": i.toDecimalString()
                })))
            }

            function bn() {
                return window.crypto || window.msCrypto
            }
            var wn = function() {
                    function t() {
                        this.buffer = new Uint8Array(8), bn().getRandomValues(this.buffer), this.buffer[0] = 127 & this.buffer[0]
                    }
                    return t.prototype.toString = function(t) {
                        var e = this.readInt32(0),
                            n = this.readInt32(4),
                            r = "";
                        do {
                            var i = e % t * 4294967296 + n;
                            e = Math.floor(e / t), n = Math.floor(i / t), r = (i % t).toString(t) + r
                        } while (e || n);
                        return r
                    }, t.prototype.toDecimalString = function() {
                        return this.toString(10)
                    }, t.prototype.readInt32 = function(t) {
                        return 16777216 * this.buffer[t] + (this.buffer[t + 1] << 16) + (this.buffer[t + 2] << 8) + this.buffer[t + 3]
                    }, t
                }(),
                Sn = 1;

            function Cn(t, e, n) {
                var r = function(t, e) {
                    return {
                        clearTracingIfNeeded: gn,
                        traceFetch: function(n) {
                            return yn(t, n, e, (function(t) {
                                var e;
                                if (n.input instanceof Request && !(null === (e = n.init) || void 0 === e ? void 0 : e.headers)) n.input = new Request(n.input), Object.keys(t).forEach((function(e) {
                                    n.input.headers.append(e, t[e])
                                }));
                                else {
                                    n.init = g(n.init);
                                    var r = [];
                                    n.init.headers instanceof Headers ? n.init.headers.forEach((function(t, e) {
                                        r.push([e, t])
                                    })) : Array.isArray(n.init.headers) ? n.init.headers.forEach((function(t) {
                                        r.push(t)
                                    })) : n.init.headers && Object.keys(n.init.headers).forEach((function(t) {
                                        r.push([t, n.init.headers[t]])
                                    })), n.init.headers = r.concat(I(t))
                                }
                            }))
                        },
                        traceXhr: function(n, r) {
                            return yn(t, n, e, (function(t) {
                                Object.keys(t).forEach((function(e) {
                                    r.setRequestHeader(e, t[e])
                                }))
                            }))
                        }
                    }
                }(e, n);
                ! function(t, e, n) {
                    var r = fn().subscribe((function(r) {
                        var i = r;
                        if (Te(e, i.url)) switch (i.state) {
                            case "start":
                                n.traceXhr(i, i.xhr), i.requestIndex = Tn(), t.notify(5, {
                                    requestIndex: i.requestIndex,
                                    url: i.url
                                });
                                break;
                            case "complete":
                                n.clearTracingIfNeeded(i), t.notify(6, {
                                    duration: i.duration,
                                    method: i.method,
                                    requestIndex: i.requestIndex,
                                    spanId: i.spanId,
                                    startClocks: i.startClocks,
                                    status: i.status,
                                    traceId: i.traceId,
                                    traceSampled: i.traceSampled,
                                    type: "xhr",
                                    url: i.url,
                                    xhr: i.xhr
                                })
                        }
                    }))
                }(t, e, r),
                function(t, e, n) {
                    var r = vn().subscribe((function(r) {
                        var i = r;
                        if (Te(e, i.url)) switch (i.state) {
                            case "start":
                                n.traceFetch(i), i.requestIndex = Tn(), t.notify(5, {
                                    requestIndex: i.requestIndex,
                                    url: i.url
                                });
                                break;
                            case "complete":
                                n.clearTracingIfNeeded(i), t.notify(6, {
                                    duration: i.duration,
                                    method: i.method,
                                    requestIndex: i.requestIndex,
                                    responseType: i.responseType,
                                    spanId: i.spanId,
                                    startClocks: i.startClocks,
                                    status: i.status,
                                    traceId: i.traceId,
                                    traceSampled: i.traceSampled,
                                    type: "fetch",
                                    url: i.url,
                                    response: i.response,
                                    init: i.init,
                                    input: i.input
                                })
                        }
                    }))
                }(t, e, r)
            }

            function Tn() {
                var t = Sn;
                return Sn += 1, t
            }

            function kn(t, e) {
                void 0 === e && (e = S);
                var n = {
                        errorCount: 0,
                        longTaskCount: 0,
                        resourceCount: 0,
                        actionCount: 0,
                        frustrationCount: 0
                    },
                    r = t.subscribe(11, (function(t) {
                        switch (t.type) {
                            case "error":
                                n.errorCount += 1, e(n);
                                break;
                            case "action":
                                n.actionCount += 1, t.action.frustration && (n.frustrationCount += t.action.frustration.type.length), e(n);
                                break;
                            case "long_task":
                                n.longTaskCount += 1, e(n);
                                break;
                            case "resource":
                                n.resourceCount += 1, e(n)
                        }
                    }));
                return {
                    stop: function() {
                        r.unsubscribe()
                    },
                    eventCounts: n
                }
            }

            function En(t, e, n, r, i) {
                var o = function(t, e, n) {
                    var r = new Qt((function() {
                        var i, o = [],
                            a = 0;
                        o.push(e.subscribe(c), t.subscribe(0, (function(t) {
                            t.some((function(t) {
                                return "resource" === t.entryType && !xn(n, t.name)
                            })) && c()
                        })), t.subscribe(5, (function(t) {
                            xn(n, t.url) || (void 0 === i && (i = t.requestIndex), a += 1, c())
                        })), t.subscribe(6, (function(t) {
                            xn(n, t.url) || void 0 === i || t.requestIndex < i || (a -= 1, c())
                        })));
                        var u, s = (u = c, an(window, "open", {
                            before: u
                        })).stop;
                        return function() {
                            s(), o.forEach((function(t) {
                                return t.unsubscribe()
                            }))
                        };

                        function c() {
                            r.notify({
                                isBusy: a > 0
                            })
                        }
                    }));
                    return r
                }(t, e, n);
                return function(t, e, n) {
                    var r, i = !1,
                        o = setTimeout(f((function() {
                            return c({
                                hadActivity: !1
                            })
                        })), 100),
                        a = n && setTimeout(f((function() {
                            return c({
                                hadActivity: !0,
                                end: Q()
                            })
                        })), n),
                        u = t.subscribe((function(t) {
                            var e = t.isBusy;
                            clearTimeout(o), clearTimeout(r);
                            var n = Q();
                            e || (r = setTimeout(f((function() {
                                return c({
                                    hadActivity: !0,
                                    end: n
                                })
                            })), 100))
                        })),
                        s = function() {
                            i = !0, clearTimeout(o), clearTimeout(r), clearTimeout(a), u.unsubscribe()
                        };

                    function c(t) {
                        i || (s(), e(t))
                    }
                    return {
                        stop: s
                    }
                }(o, r, i)
            }

            function xn(t, e) {
                return z(t.excludedActivityUrls, e)
            }
            var _n = p;

            function Rn(t, e) {
                var n, r = [],
                    i = 0;

                function o(t) {
                    t.stopObservable.subscribe(a), r.push(t), clearTimeout(n), n = setTimeout(f(u), 1e3)
                }

                function a() {
                    1 === i && r.every((function(t) {
                        return t.isStopped()
                    })) && (i = 2, e(r))
                }

                function u() {
                    clearTimeout(n), 0 === i && (i = 1, a())
                }
                return o(t), {
                    tryAppend: function(t) {
                        return 0 === i && (r.length > 0 && ! function(t, e) {
                            return t.target === e.target && (n = t, r = e, Math.sqrt(Math.pow(n.clientX - r.clientX, 2) + Math.pow(n.clientY - r.clientY, 2)) <= 100) && t.timeStamp - e.timeStamp <= _n;
                            var n, r
                        }(r[r.length - 1].event, t.event) ? (u(), !1) : (o(t), !0))
                    },
                    stop: function() {
                        u()
                    }
                }
            }
            var An = "data-dd-action-name";

            function In(t, e) {
                return On(t, An) || e && On(t, e) || Dn(t, e, Mn) || Dn(t, e, Pn) || ""
            }

            function On(t, e) {
                var n;
                if (function() {
                        void 0 === Ln && (Ln = "closest" in HTMLElement.prototype);
                        return Ln
                    }()) n = t.closest("[".concat(e, "]"));
                else
                    for (var r = t; r;) {
                        if (r.hasAttribute(e)) {
                            n = r;
                            break
                        }
                        r = r.parentElement
                    }
                if (n) return Un(Bn(n.getAttribute(e).trim()))
            }
            var Nn, Ln, Mn = [function(t, e) {
                    if (function() {
                            void 0 === Nn && (Nn = "labels" in HTMLInputElement.prototype);
                            return Nn
                        }()) {
                        if ("labels" in t && t.labels && t.labels.length > 0) return qn(t.labels[0], e)
                    } else if (t.id) {
                        var n = t.ownerDocument && x(t.ownerDocument.querySelectorAll("label"), (function(e) {
                            return e.htmlFor === t.id
                        }));
                        return n && qn(n, e)
                    }
                }, function(t) {
                    if ("INPUT" === t.nodeName) {
                        var e = t,
                            n = e.getAttribute("type");
                        if ("button" === n || "submit" === n || "reset" === n) return e.value
                    }
                }, function(t, e) {
                    if ("BUTTON" === t.nodeName || "LABEL" === t.nodeName || "button" === t.getAttribute("role")) return qn(t, e)
                }, function(t) {
                    return t.getAttribute("aria-label")
                }, function(t, e) {
                    var n = t.getAttribute("aria-labelledby");
                    if (n) return n.split(/\s+/).map((function(e) {
                        return function(t, e) {
                            return t.ownerDocument ? t.ownerDocument.getElementById(e) : null
                        }(t, e)
                    })).filter((function(t) {
                        return Boolean(t)
                    })).map((function(t) {
                        return qn(t, e)
                    })).join(" ")
                }, function(t) {
                    return t.getAttribute("alt")
                }, function(t) {
                    return t.getAttribute("name")
                }, function(t) {
                    return t.getAttribute("title")
                }, function(t) {
                    return t.getAttribute("placeholder")
                }, function(t, e) {
                    if ("options" in t && t.options.length > 0) return qn(t.options[0], e)
                }],
                Pn = [function(t, e) {
                    return qn(t, e)
                }];

            function Dn(t, e, n) {
                for (var r = t, i = 0; i <= 10 && r && "BODY" !== r.nodeName && "HTML" !== r.nodeName && "HEAD" !== r.nodeName;) {
                    for (var o = 0, a = n; o < a.length; o++) {
                        var u = (0, a[o])(r, e);
                        if ("string" === typeof u) {
                            var s = u.trim();
                            if (s) return Un(Bn(s))
                        }
                    }
                    if ("FORM" === r.nodeName) break;
                    r = r.parentElement, i += 1
                }
            }

            function Bn(t) {
                return t.replace(/\s+/g, " ")
            }

            function Un(t) {
                return t.length > 100 ? "".concat(D(t, 100), " [...]") : t
            }

            function qn(t, e) {
                if (!t.isContentEditable) {
                    if ("innerText" in t) {
                        var n = t.innerText,
                            r = function(e) {
                                for (var r = t.querySelectorAll(e), i = 0; i < r.length; i += 1) {
                                    var o = r[i];
                                    if ("innerText" in o) {
                                        var a = o.innerText;
                                        a && a.trim().length > 0 && (n = n.replace(a, ""))
                                    }
                                }
                            };
                        return Boolean(document.documentMode) && r("script, style"), r("[".concat(An, "]")), e && r("[".concat(e, "]")), n
                    }
                    return t.textContent
                }
            }
            var Fn, jn = [An, "data-testid", "data-test", "data-qa", "data-cy", "data-test-id", "data-qa-id", "data-testing", "data-component", "data-element", "data-source-file"],
                Vn = [Wn, function(t) {
                    if (t.id && !Gn(t.id)) return "#".concat(G(t.id))
                }],
                Hn = [Wn, function(t) {
                    if ("BODY" === t.tagName) return;
                    if (t.classList.length > 0)
                        for (var e = 0; e < t.classList.length; e += 1) {
                            var n = t.classList[e];
                            if (!Gn(n)) return "".concat(t.tagName, ".").concat(G(n))
                        }
                }, function(t) {
                    return t.tagName
                }];

            function zn(t, e) {
                for (var n = "", r = t; r && "HTML" !== r.nodeName;) {
                    var i = Yn(r, Vn, Kn, e, n);
                    if (i) return i;
                    n = Yn(r, Hn, $n, e, n) || Jn(Xn(r), n), r = r.parentElement
                }
                return n
            }

            function Gn(t) {
                return /[0-9]/.test(t)
            }

            function Wn(t, e) {
                if (e && (i = o(e))) return i;
                for (var n = 0, r = jn; n < r.length; n++) {
                    var i;
                    if (i = o(r[n])) return i
                }

                function o(e) {
                    if (t.hasAttribute(e)) return "".concat(t.tagName, "[").concat(e, '="').concat(G(t.getAttribute(e)), '"]')
                }
            }

            function Xn(t) {
                for (var e = t.parentElement.firstElementChild, n = 1; e && e !== t;) e.tagName === t.tagName && (n += 1), e = e.nextElementSibling;
                return "".concat(t.tagName, ":nth-of-type(").concat(n, ")")
            }

            function Yn(t, e, n, r, i) {
                for (var o = 0, a = e; o < a.length; o++) {
                    var u = (0, a[o])(t, r);
                    if (u) {
                        var s = Jn(u, i);
                        if (n(t, s)) return s
                    }
                }
            }

            function Kn(t, e) {
                return 1 === t.ownerDocument.querySelectorAll(e).length
            }

            function $n(t, e) {
                return 1 === t.parentElement.querySelectorAll(function() {
                    if (void 0 === Fn) try {
                        document.querySelector(":scope"), Fn = !0
                    } catch (Eo) {
                        Fn = !1
                    }
                    return Fn
                }() ? Jn(":scope", e) : e).length
            }

            function Jn(t, e) {
                return e ? "".concat(t, ">").concat(e) : t
            }

            function Zn() {
                var t = window.getSelection();
                return !t || t.isCollapsed
            }

            function Qn(t) {
                return t.target instanceof Element
            }

            function tr(t, e) {
                if (function(t) {
                        if (t.some((function(t) {
                                return t.getUserActivity().selection
                            }))) return !1;
                        for (var e = 0; e < t.length - 2; e += 1)
                            if (t[e + 3 - 1].event.timeStamp - t[e].event.timeStamp <= p) return !0;
                        return !1
                    }(t)) return e.addFrustration("rage_click"), t.some(er) && e.addFrustration("dead_click"), e.hasError && e.addFrustration("error_click"), {
                    isRage: !0
                };
                var n = t.some((function(t) {
                    return t.getUserActivity().selection
                }));
                return t.forEach((function(t) {
                    t.hasError && t.addFrustration("error_click"), er(t) && !n && t.addFrustration("dead_click")
                })), {
                    isRage: !1
                }
            }

            function er(t) {
                return !t.hasPageActivity && !t.getUserActivity().input && (e = t.event.target, n = 'input:not([type="checkbox"]):not([type="radio"]):not([type="button"]):not([type="submit"]):not([type="reset"]):not([type="range"]),textarea,select,canvas,a[href],a[href] *', !(e.matches ? e.matches(n) : e.msMatchesSelector && e.msMatchesSelector(n)));
                var e, n
            }

            function nr(t, e, n) {
                var r, i = new rn(3e5),
                    o = new Qt;
                t.subscribe(8, (function() {
                    i.reset()
                })), t.subscribe(4, s);
                var a = function(t) {
                    var e, n, r = t.onPointerDown,
                        i = t.onClick,
                        o = !1,
                        a = !1,
                        u = [B(window, "pointerdown", (function(t) {
                            o = !1, e = Zn(), Qn(t) && (n = r(t))
                        }), {
                            capture: !0
                        }), B(window, "selectionchange", (function() {
                            e && Zn() || (o = !0)
                        }), {
                            capture: !0
                        }), B(window, "click", (function(t) {
                            if (Qn(t) && n) {
                                var e = {
                                    selection: o,
                                    input: a
                                };
                                a || setTimeout(f((function() {
                                    e.input = a
                                }))), i(n, t, (function() {
                                    return e
                                })), n = void 0
                            }
                        }), {
                            capture: !0
                        }), B(window, "input", (function() {
                            a = !0
                        }), {
                            capture: !0
                        })];
                    return {
                        stop: function() {
                            u.forEach((function(t) {
                                return t.stop()
                            }))
                        }
                    }
                }({
                    onPointerDown: function(t) {
                        return function(t, e, n) {
                            if (!t.trackFrustrations && e.find()) return;
                            var r = function(t, e) {
                                var n, r;
                                if (Ut("clickmap")) {
                                    var i = t.target.getBoundingClientRect();
                                    n = {
                                        width: Math.round(i.width),
                                        height: Math.round(i.height),
                                        selector: zn(t.target, e)
                                    }, r = {
                                        x: Math.round(t.clientX - i.left),
                                        y: Math.round(t.clientY - i.top)
                                    }
                                }
                                return {
                                    type: "click",
                                    target: n,
                                    position: r,
                                    name: In(t.target, e)
                                }
                            }(n, t.actionNameAttribute);
                            if (!t.trackFrustrations && !r.name) return;
                            return r
                        }(n, i, t)
                    },
                    onClick: function(r, a, s) {
                        return function(t, e, n, r, i, o, a, u, s) {
                            var c = rr(e, r, s, a, u);
                            t.trackFrustrations && o(c);
                            var f = En(e, n, t, (function(e) {
                                    e.hadActivity && e.end < c.startClocks.timeStamp ? c.discard() : (c.stop(e.hadActivity ? e.end : void 0), t.trackFrustrations || (e.hadActivity ? c.validate() : c.discard()))
                                }), 1e4).stop,
                                l = e.subscribe(4, (function(t) {
                                    var e = t.endClocks;
                                    c.stop(e.timeStamp)
                                })),
                                d = i.subscribe((function() {
                                    c.stop()
                                }));
                            c.stopObservable.subscribe((function() {
                                l.unsubscribe(), f(), d.unsubscribe()
                            }))
                        }(n, t, e, i, o, u, r, a, s)
                    }
                }).stop;
                return {
                    stop: function() {
                        s(), o.notify(), a()
                    },
                    actionContexts: {
                        findActionId: function(t) {
                            return n.trackFrustrations ? i.findAll(t) : i.find(t)
                        }
                    }
                };

                function u(t) {
                    if (!r || !r.tryAppend(t)) {
                        var e = t.clone();
                        r = Rn(t, (function(t) {
                            ! function(t, e) {
                                tr(t, e).isRage ? (t.forEach((function(t) {
                                    return t.discard()
                                })), e.stop(Q()), e.validate(t.map((function(t) {
                                    return t.event
                                })))) : (e.discard(), t.forEach((function(t) {
                                    return t.validate()
                                })))
                            }(t, e)
                        }))
                    }
                }

                function s() {
                    r && r.stop()
                }
            }

            function rr(t, e, n, r, i) {
                var o, a = y(),
                    u = et(),
                    s = e.add(a, u.relative),
                    c = kn(t),
                    f = 0,
                    l = [],
                    d = new Qt;

                function p(t) {
                    0 === f && (f = 1, (o = t) ? s.close(ot(o)) : s.remove(), c.stop(), d.notify())
                }
                return {
                    event: i,
                    stop: p,
                    stopObservable: d,
                    get hasError() {
                        return c.eventCounts.errorCount > 0
                    },
                    get hasPageActivity() {
                        return void 0 !== o
                    },
                    getUserActivity: n,
                    addFrustration: function(t) {
                        l.push(t)
                    },
                    startClocks: u,
                    isStopped: function() {
                        return 1 === f || 2 === f
                    },
                    clone: function() {
                        return rr(t, e, n, r, i)
                    },
                    validate: function(e) {
                        if (p(), 1 === f) {
                            var n = c.eventCounts,
                                s = n.resourceCount,
                                d = n.errorCount,
                                v = n.longTaskCount,
                                m = h({
                                    type: "click",
                                    duration: o && rt(u.timeStamp, o),
                                    startClocks: u,
                                    id: a,
                                    frustrationTypes: l,
                                    counts: {
                                        resourceCount: s,
                                        errorCount: d,
                                        longTaskCount: v
                                    },
                                    events: null !== e && void 0 !== e ? e : [i],
                                    event: i
                                }, r);
                            t.notify(1, m), f = 2
                        }
                    },
                    discard: function() {
                        p(), f = 2
                    }
                }
            }

            function ir(t, e) {
                var n = or(t) ? {
                        action: {
                            id: t.id,
                            loading_time: J(t.duration),
                            frustration: {
                                type: t.frustrationTypes
                            },
                            error: {
                                count: t.counts.errorCount
                            },
                            long_task: {
                                count: t.counts.longTaskCount
                            },
                            resource: {
                                count: t.counts.resourceCount
                            }
                        },
                        _dd: {
                            action: {
                                target: t.target,
                                position: t.position
                            }
                        }
                    } : void 0,
                    r = or(t) ? void 0 : t.context,
                    i = H({
                        action: {
                            id: y(),
                            target: {
                                name: t.name
                            },
                            type: t.type
                        },
                        date: t.startClocks.timeStamp,
                        type: "action"
                    }, n),
                    o = e.isInForegroundAt(t.startClocks.relative);
                return void 0 !== o && (i.view = {
                    in_foreground: o
                }), {
                    customerContext: r,
                    rawRumEvent: i,
                    startTime: t.startClocks.relative,
                    domainContext: or(t) ? {
                        event: t.event,
                        events: t.events
                    } : {}
                }
            }

            function or(t) {
                return "custom" !== t.type
            }
            var ar = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/;

            function ur(t) {
                var e = function(t) {
                        return an(window, "onerror", {
                            before: function(e, n, r, i, o) {
                                var a;
                                if (o) a = mt(o), t(a, o);
                                else {
                                    var u, s = {
                                            url: n,
                                            column: i,
                                            line: r
                                        },
                                        c = e;
                                    if ("[object String]" === {}.toString.call(e)) {
                                        var f = ar.exec(c);
                                        f && (u = f[1], c = f[2])
                                    }
                                    t(a = {
                                        name: u,
                                        message: "string" === typeof c ? c : void 0,
                                        stack: [s]
                                    }, e)
                                }
                            }
                        })
                    }(t).stop,
                    n = function(t) {
                        return an(window, "onunhandledrejection", {
                            before: function(e) {
                                var n = e.reason || "Empty reason",
                                    r = mt(n);
                                t(r, n)
                            }
                        })
                    }(t).stop;
                return {
                    stop: function() {
                        e(), n()
                    }
                }
            }
            var sr = {};

            function cr(t) {
                var e = t.map((function(t) {
                    return sr[t] || (sr[t] = function(t) {
                        var e = new Qt((function() {
                            var n = console[t];
                            return console[t] = function() {
                                    for (var r = [], i = 0; i < arguments.length; i++) r[i] = arguments[i];
                                    n.apply(console, r);
                                    var o = Pt();
                                    l((function() {
                                        e.notify(fr(r, t, o))
                                    }))
                                },
                                function() {
                                    console[t] = n
                                }
                        }));
                        return e
                    }(t)), sr[t]
                }));
                return te.apply(void 0, e)
            }

            function fr(t, e, n) {
                var i, o = t.map((function(t) {
                    return function(t) {
                        if ("string" === typeof t) return t;
                        if (t instanceof Error) return Mt(mt(t));
                        return C(t, void 0, 2)
                    }(t)
                })).join(" ");
                if (e === r.error) {
                    var a = x(t, (function(t) {
                        return t instanceof Error
                    }));
                    i = a ? Lt(mt(a)) : void 0, o = "console error: ".concat(o)
                }
                return {
                    api: e,
                    message: o,
                    stack: i,
                    handlingStack: n
                }
            }
            var lr, dr, pr = "intervention",
                vr = "csp_violation";

            function mr(t) {
                var e = [];
                k(t, vr) && e.push(function() {
                    var t = new Qt((function() {
                        var e = f((function(e) {
                            t.notify(function(t) {
                                var e = vr,
                                    n = "'".concat(t.blockedURI, "' blocked by '").concat(t.effectiveDirective, "' directive");
                                return {
                                    type: vr,
                                    subtype: t.effectiveDirective,
                                    message: "".concat(e, ": ").concat(n),
                                    stack: hr(t.effectiveDirective, t.originalPolicy ? "".concat(n, ' of the policy "').concat(D(t.originalPolicy, 100, "..."), '"') : "no policy", t.sourceFile, t.lineNumber, t.columnNumber)
                                }
                            }(e))
                        }));
                        return B(document, "securitypolicyviolation", e).stop
                    }));
                    return t
                }());
                var n = t.filter((function(t) {
                    return t !== vr
                }));
                return n.length && e.push(function(t) {
                    var e = new Qt((function() {
                        if (window.ReportingObserver) {
                            var n = f((function(t) {
                                    return t.forEach((function(t) {
                                        e.notify(function(t) {
                                            var e = t.type,
                                                n = t.body;
                                            return {
                                                type: e,
                                                subtype: n.id,
                                                message: "".concat(e, ": ").concat(n.message),
                                                stack: hr(n.id, n.message, n.sourceFile, n.lineNumber, n.columnNumber)
                                            }
                                        }(t))
                                    }))
                                })),
                                r = new window.ReportingObserver(n, {
                                    types: t,
                                    buffered: !0
                                });
                            return r.observe(),
                                function() {
                                    r.disconnect()
                                }
                        }
                    }));
                    return e
                }(n)), te.apply(void 0, e)
            }

            function hr(t, e, n, r, i) {
                return n && Lt({
                    name: t,
                    message: e,
                    stack: [{
                        func: "?",
                        url: n,
                        line: r,
                        column: i
                    }]
                })
            }

            function gr(t, e) {
                var n = new Qt;
                return function(t) {
                        var e = cr([r.error]).subscribe((function(e) {
                            return t.notify({
                                startClocks: et(),
                                message: e.message,
                                stack: e.stack,
                                source: Rt,
                                handling: "handled",
                                handlingStack: e.handlingStack
                            })
                        }))
                    }(n),
                    function(t) {
                        ur((function(e, n) {
                            t.notify(Nt({
                                stackTrace: e,
                                originalError: n,
                                startClocks: et(),
                                nonErrorPrefix: "Uncaught",
                                source: It,
                                handling: "unhandled"
                            }))
                        }))
                    }(n),
                    function(t) {
                        var e = mr([vr, pr]).subscribe((function(e) {
                            return t.notify({
                                startClocks: et(),
                                message: e.message,
                                stack: e.stack,
                                type: e.subtype,
                                source: Ot,
                                handling: "unhandled"
                            })
                        }))
                    }(n), n.subscribe((function(e) {
                        return t.notify(12, {
                            error: e
                        })
                    })),
                    function(t, e) {
                        return t.subscribe(12, (function(n) {
                            var r = n.error,
                                i = n.customerContext,
                                o = n.savedCommonContext;
                            t.notify(10, h({
                                customerContext: i,
                                savedCommonContext: o
                            }, function(t, e) {
                                var n = {
                                        date: t.startClocks.timeStamp,
                                        error: {
                                            id: y(),
                                            message: t.message,
                                            source: t.source,
                                            stack: t.stack,
                                            handling_stack: t.handlingStack,
                                            type: t.type,
                                            handling: t.handling,
                                            causes: t.causes,
                                            source_type: "browser"
                                        },
                                        type: "error"
                                    },
                                    r = e.isInForegroundAt(t.startClocks.relative);
                                void 0 !== r && (n.view = {
                                    in_foreground: r
                                });
                                return {
                                    rawRumEvent: n,
                                    startTime: t.startClocks.relative,
                                    domainContext: {
                                        error: t.originalError
                                    }
                                }
                            }(r, e)))
                        })), {
                            addError: function(e, n) {
                                var r = e.error,
                                    i = e.handlingStack,
                                    o = e.startClocks,
                                    a = e.context,
                                    u = Nt({
                                        stackTrace: r instanceof Error ? mt(r) : void 0,
                                        originalError: r,
                                        handlingStack: i,
                                        startClocks: o,
                                        nonErrorPrefix: "Provided",
                                        source: At,
                                        handling: "handled"
                                    });
                                t.notify(12, {
                                    customerContext: a,
                                    savedCommonContext: n,
                                    error: u
                                })
                            }
                        }
                    }(t, e)
            }

            function yr(t) {
                if (performance && "getEntriesByName" in performance) {
                    var e = performance.getEntriesByName(t.url, "resource");
                    if (e.length && "toJSON" in e[0]) {
                        var n = e.map((function(t) {
                            return t.toJSON()
                        })).filter(be).filter((function(e) {
                            return function(t, e, n) {
                                var r = 1;
                                return t.startTime >= e - r && br(t) <= it(n, r)
                            }(e, t.startClocks.relative, br({
                                startTime: t.startClocks.relative,
                                duration: t.duration
                            }))
                        }));
                        return 1 === n.length ? n[0] : void 0
                    }
                }
            }

            function br(t) {
                return it(t.startTime, t.duration)
            }

            function wr(t, e, n) {
                t.subscribe(6, (function(r) {
                    t.notify(10, function(t, e, n) {
                        var r = "xhr" === t.type ? "xhr" : "fetch",
                            i = yr(t),
                            o = i ? K(i.startTime) : t.startClocks,
                            a = i ? Cr(i) : void 0,
                            u = function(t, e) {
                                if (!(t.traceSampled && t.traceId && t.spanId)) return;
                                return {
                                    _dd: {
                                        span_id: t.spanId.toDecimalString(),
                                        trace_id: t.traceId.toDecimalString(),
                                        rule_psr: Tr(e)
                                    }
                                }
                            }(t, e),
                            s = kr(n, o),
                            c = H({
                                date: o.timeStamp,
                                resource: {
                                    id: y(),
                                    type: r,
                                    duration: J(t.duration),
                                    method: t.method,
                                    status_code: t.status,
                                    url: t.url
                                },
                                type: "resource"
                            }, u, a, s);
                        return {
                            startTime: o.relative,
                            rawRumEvent: c,
                            domainContext: {
                                performanceEntry: i && i,
                                xhr: t.xhr,
                                response: t.response,
                                requestInput: t.input,
                                requestInit: t.init,
                                error: t.error
                            }
                        }
                    }(r, e, n))
                })), t.subscribe(0, (function(r) {
                    for (var i = 0, o = r; i < o.length; i++) {
                        var a = o[i];
                        "resource" === a.entryType && ("xmlhttprequest" !== (u = a).initiatorType && "fetch" !== u.initiatorType) && t.notify(10, Sr(a, e, n))
                    }
                    var u
                }))
            }

            function Sr(t, e, n) {
                var r = me(t),
                    i = Cr(t),
                    o = K(t.startTime),
                    a = function(t, e) {
                        if (!t.traceId) return;
                        return {
                            _dd: {
                                trace_id: t.traceId,
                                rule_psr: Tr(e)
                            }
                        }
                    }(t, e),
                    u = kr(n, o),
                    s = H({
                        date: o.timeStamp,
                        resource: {
                            id: y(),
                            type: r,
                            url: t.name
                        },
                        type: "resource"
                    }, a, i, u);
                return {
                    startTime: o.relative,
                    rawRumEvent: s,
                    domainContext: {
                        performanceEntry: t
                    }
                }
            }

            function Cr(t) {
                return {
                    resource: h({
                        duration: ge(t),
                        size: Ce(t)
                    }, ye(t))
                }
            }

            function Tr(t) {
                return R(t.tracingSampleRate) ? t.tracingSampleRate / 100 : void 0
            }

            function kr(t, e) {
                var n = t.findTrackedSession(e.relative);
                return {
                    _dd: {
                        discarded: !n || !n.resourceAllowed
                    }
                }
            }

            function Er(t) {
                return void 0 === t && (t = window), lr || ("hidden" === document.visibilityState ? lr = {
                    timeStamp: 0
                } : (lr = {
                    timeStamp: 1 / 0
                }, dr = U(t, ["pagehide", "visibilitychange"], (function(t) {
                    "pagehide" !== t.type && "hidden" !== document.visibilityState || (lr.timeStamp = t.timeStamp, dr())
                }), {
                    capture: !0
                }).stop)), lr
            }
            var xr = 6e5;

            function _r(t, e) {
                var n = {};

                function r(t) {
                    h(n, t), e(n)
                }
                var i = function(t, e) {
                        return {
                            stop: t.subscribe(0, (function(t) {
                                for (var n = 0, r = t; n < r.length; n++) {
                                    var i = r[n];
                                    "navigation" === i.entryType && e({
                                        domComplete: i.domComplete,
                                        domContentLoaded: i.domContentLoadedEventEnd,
                                        domInteractive: i.domInteractive,
                                        loadEvent: i.loadEventEnd,
                                        firstByte: i.responseStart >= 0 && i.responseStart <= tt() ? i.responseStart : void 0
                                    })
                                }
                            })).unsubscribe
                        }
                    }(t, r).stop,
                    o = function(t, e) {
                        var n = Er();
                        return {
                            stop: t.subscribe(0, (function(t) {
                                var r = x(t, (function(t) {
                                    return "paint" === t.entryType && "first-contentful-paint" === t.name && t.startTime < n.timeStamp && t.startTime < xr
                                }));
                                r && e(r.startTime)
                            })).unsubscribe
                        }
                    }(t, (function(t) {
                        return r({
                            firstContentfulPaint: t
                        })
                    })).stop,
                    a = function(t, e, n) {
                        var r = Er(),
                            i = 1 / 0,
                            o = U(e, ["pointerdown", "keydown"], (function(t) {
                                i = t.timeStamp
                            }), {
                                capture: !0,
                                once: !0
                            }).stop,
                            a = t.subscribe(0, (function(t) {
                                var e = function(t, e) {
                                    for (var n = t.length - 1; n >= 0; n -= 1) {
                                        var r = t[n];
                                        if (e(r, n, t)) return r
                                    }
                                }(t, (function(t) {
                                    return "largest-contentful-paint" === t.entryType && t.startTime < i && t.startTime < r.timeStamp && t.startTime < xr
                                }));
                                e && n(e.startTime)
                            })).unsubscribe;
                        return {
                            stop: function() {
                                o(), a()
                            }
                        }
                    }(t, window, (function(t) {
                        r({
                            largestContentfulPaint: t
                        })
                    })).stop,
                    u = function(t, e) {
                        var n = Er();
                        return {
                            stop: t.subscribe(0, (function(t) {
                                var r = x(t, (function(t) {
                                    return "first-input" === t.entryType && t.startTime < n.timeStamp
                                }));
                                if (r) {
                                    var i = rt(r.startTime, r.processingStart);
                                    e({
                                        firstInputDelay: i >= 0 ? i : 0,
                                        firstInputTime: r.startTime
                                    })
                                }
                            })).unsubscribe
                        }
                    }(t, (function(t) {
                        r({
                            firstInputDelay: t.firstInputDelay,
                            firstInputTime: t.firstInputTime
                        })
                    })).stop;
                return {
                    stop: function() {
                        i(), o(), a(), u()
                    }
                }
            }

            function Rr(t, e, n, r, i, o) {
                var a, u = {
                        eventCounts: {
                            errorCount: 0,
                            longTaskCount: 0,
                            resourceCount: 0,
                            actionCount: 0,
                            frustrationCount: 0
                        }
                    },
                    s = kn(t, (function(t) {
                        u.eventCounts = t, r()
                    })).stop,
                    c = function(t, e, n, r, i, o) {
                        var a = "initial_load" === r,
                            u = !0,
                            s = [];

                        function c() {
                            !u && !a && s.length > 0 && o(Math.max.apply(Math, s))
                        }
                        return {
                            stop: En(t, e, n, (function(t) {
                                u && (u = !1, t.hadActivity && s.push(rt(i.timeStamp, t.end)), c())
                            })).stop,
                            setLoadEvent: function(t) {
                                a && (a = !1, s.push(t), c())
                            }
                        }
                    }(t, e, n, i, o, (function(t) {
                        u.loadingTime = t, r()
                    })),
                    f = c.stop,
                    l = c.setLoadEvent;
                return Oe("layout-shift") ? (u.cumulativeLayoutShift = 0, a = function(t, e) {
                    var n = 0,
                        r = function() {
                            var t, e, n = 0;
                            return {
                                update: function(r) {
                                    void 0 === t || r.startTime - e >= p || r.startTime - t >= 5e3 ? (t = e = r.startTime, n = r.value) : (n += r.value, e = r.startTime)
                                },
                                value: function() {
                                    return n
                                }
                            }
                        }();
                    return {
                        stop: t.subscribe(0, (function(t) {
                            for (var i = 0, o = t; i < o.length; i++) {
                                var a = o[i];
                                "layout-shift" !== a.entryType || a.hadRecentInput || (r.update(a), r.value() > n && (n = r.value(), e(w(n, 4))))
                            }
                        })).unsubscribe
                    }
                }(t, (function(t) {
                    u.cumulativeLayoutShift = t, r()
                })).stop) : a = S, {
                    stop: function() {
                        s(), f(), a()
                    },
                    setLoadEvent: l,
                    viewMetrics: u
                }
            }

            function Ar(t, e, n, r, i, o, a) {
                var u, s = function(i) {
                        var o = Ir(e, n, r, t, "initial_load", nt(), i),
                            a = _r(e, (function(t) {
                                o.updateTimings(t), o.scheduleUpdate()
                            })).stop;
                        return {
                            initialView: o,
                            stop: a
                        }
                    }(a),
                    c = s.stop,
                    l = s.initialView,
                    d = function() {
                        e.subscribe(8, (function() {
                            l.end(), l = p(void 0, {
                                name: l.name,
                                service: l.service,
                                version: l.version
                            })
                        })), e.subscribe(9, (function(t) {
                            "before_unload" === t.reason && (l.end(), l.triggerUpdate())
                        }));
                        var t = window.setInterval(f((function() {
                            l.triggerUpdate()
                        })), 3e5);
                        return {
                            stop: function() {
                                clearInterval(t)
                            }
                        }
                    }().stop;

                function p(i, o) {
                    return Ir(e, n, r, t, "route_change", i, o)
                }
                return o && (u = function(t) {
                    return t.subscribe((function(t) {
                        var e, n, r = t.oldLocation,
                            i = t.newLocation;
                        if (n = i, (e = r).pathname !== n.pathname || ! function(t) {
                                var e = t.substr(1);
                                return !!document.getElementById(e)
                            }(n.hash) && Or(n.hash) !== Or(e.hash)) return l.end(), l.triggerUpdate(), void(l = p())
                    }))
                }(i)), {
                    addTiming: function(t, e) {
                        void 0 === e && (e = Q()), l.addTiming(t, e), l.scheduleUpdate()
                    },
                    startView: function(t, e) {
                        l.end(e), l.triggerUpdate(), l = p(e, t)
                    },
                    stop: function() {
                        null === u || void 0 === u || u.unsubscribe(), c(), d(), l.end()
                    }
                }
            }

            function Ir(t, e, n, r, o, a, u) {
                void 0 === a && (a = et());
                var s, c, l, d, p = y(),
                    v = {},
                    b = {},
                    w = 0,
                    S = g(r);
                u && (c = u.name, l = u.service, d = u.version), t.notify(2, {
                    id: p,
                    name: c,
                    startClocks: a,
                    service: l,
                    version: d
                });
                var C = m(f(A), 3e3, {
                        leading: !1
                    }),
                    T = C.throttled,
                    k = C.cancel,
                    E = Rr(t, e, n, T, o, a),
                    x = E.setLoadEvent,
                    _ = E.stop,
                    R = E.viewMetrics;

                function A() {
                    w += 1;
                    var e = void 0 === s ? Q() : s.timeStamp;
                    t.notify(3, h({
                        customTimings: b,
                        documentVersion: w,
                        id: p,
                        name: c,
                        service: l,
                        version: d,
                        loadingType: o,
                        location: S,
                        startClocks: a,
                        timings: v,
                        duration: rt(a.timeStamp, e),
                        isActive: void 0 === s
                    }, R))
                }
                return A(), {
                    name: c,
                    service: l,
                    version: d,
                    scheduleUpdate: T,
                    end: function(e) {
                        void 0 === e && (e = et()), s = e, t.notify(4, {
                            endClocks: s
                        }), _()
                    },
                    triggerUpdate: function() {
                        k(), A()
                    },
                    updateTimings: function(t) {
                        v = t, void 0 !== t.loadEvent && x(t.loadEvent)
                    },
                    addTiming: function(t, e) {
                        var n = function(t) {
                            return t < 31536e6
                        }(e) ? e : rt(a.timeStamp, e);
                        b[function(t) {
                            var e = t.replace(/[^a-zA-Z0-9-_.@$]/g, "_");
                            e !== t && i.warn("Invalid timing name: ".concat(t, ", sanitized to: ").concat(e));
                            return e
                        }(t)] = n
                    }
                }
            }

            function Or(t) {
                var e = t.indexOf("?");
                return e < 0 ? t : t.slice(0, e)
            }

            function Nr(t, e, n, r, i, o, a, u) {
                return t.subscribe(3, (function(e) {
                    return t.notify(10, function(t, e, n) {
                        var r = n.getReplayStats(t.id),
                            i = {
                                _dd: {
                                    document_version: t.documentVersion,
                                    replay_stats: r
                                },
                                date: t.startClocks.timeStamp,
                                type: "view",
                                view: {
                                    action: {
                                        count: t.eventCounts.actionCount
                                    },
                                    frustration: {
                                        count: t.eventCounts.frustrationCount
                                    },
                                    cumulative_layout_shift: t.cumulativeLayoutShift,
                                    first_byte: J(t.timings.firstByte),
                                    dom_complete: J(t.timings.domComplete),
                                    dom_content_loaded: J(t.timings.domContentLoaded),
                                    dom_interactive: J(t.timings.domInteractive),
                                    error: {
                                        count: t.eventCounts.errorCount
                                    },
                                    first_contentful_paint: J(t.timings.firstContentfulPaint),
                                    first_input_delay: J(t.timings.firstInputDelay),
                                    first_input_time: J(t.timings.firstInputTime),
                                    is_active: t.isActive,
                                    name: t.name,
                                    largest_contentful_paint: J(t.timings.largestContentfulPaint),
                                    load_event: J(t.timings.loadEvent),
                                    loading_time: Lr(J(t.loadingTime)),
                                    loading_type: t.loadingType,
                                    long_task: {
                                        count: t.eventCounts.longTaskCount
                                    },
                                    resource: {
                                        count: t.eventCounts.resourceCount
                                    },
                                    time_spent: J(t.duration),
                                    in_foreground_periods: e.selectInForegroundPeriodsFor(t.startClocks.relative, t.duration)
                                },
                                session: {
                                    has_replay: !!r || void 0
                                }
                            };
                        O(t.customTimings) || (i.view.custom_timings = function(t, e) {
                            for (var n = {}, r = 0, i = Object.keys(t); r < i.length; r++) {
                                var o = i[r];
                                n[o] = e(t[o])
                            }
                            return n
                        }(t.customTimings, J));
                        return {
                            rawRumEvent: i,
                            startTime: t.startClocks.relative,
                            domainContext: {
                                location: t.location
                            }
                        }
                    }(e, o, a))
                })), Ar(n, t, r, e, i, !e.trackViewsManually, u)
            }

            function Lr(t) {
                return R(t) && t < 0 ? void 0 : t
            }
            var Mr, Pr = /^([a-z]+)=([a-z0-9-]+)$/,
                Dr = "&",
                Br = "_dd_s",
                Ur = [];

            function qr(t, e) {
                var n;
                if (void 0 === e && (e = 0), Mr || (Mr = t), t === Mr)
                    if (e >= 100) Vr();
                    else {
                        var r, i = Gr();
                        if (Fr()) {
                            if (i.lock) return void jr(t, e);
                            if (r = y(), i.lock = r, zr(i, t.options), (i = Gr()).lock !== r) return void jr(t, e)
                        }
                        var o = t.process(i);
                        if (Fr() && (i = Gr()).lock !== r) jr(t, e);
                        else {
                            if (o && Hr(o, t.options), Fr() && (!o || !Wr(o))) {
                                if ((i = Gr()).lock !== r) return void jr(t, e);
                                delete i.lock, zr(i, t.options), o = i
                            }
                            null === (n = t.after) || void 0 === n || n.call(t, o || i), Vr()
                        }
                    }
                else Ur.push(t)
            }

            function Fr() {
                return !!window.chrome || /HeadlessChrome/.test(window.navigator.userAgent)
            }

            function jr(t, e) {
                setTimeout(f((function() {
                    qr(t, e + 1)
                })), 10)
            }

            function Vr() {
                Mr = void 0;
                var t = Ur.shift();
                t && qr(t)
            }

            function Hr(t, e) {
                Wr(t) ? function(t) {
                    st(Br, "", 0, t)
                }(e) : (t.expire = String(Z() + en), zr(t, e))
            }

            function zr(t, e) {
                st(Br, function(t) {
                    return I(t).map((function(t) {
                        var e = t[0],
                            n = t[1];
                        return "".concat(e, "=").concat(n)
                    })).join(Dr)
                }(t), en, e)
            }

            function Gr() {
                var t = ct(Br),
                    e = {};
                return function(t) {
                    return void 0 !== t && (-1 !== t.indexOf(Dr) || Pr.test(t))
                }(t) && t.split(Dr).forEach((function(t) {
                    var n = Pr.exec(t);
                    if (null !== n) {
                        var r = n[1],
                            i = n[2];
                        e[r] = i
                    }
                })), e
            }

            function Wr(t) {
                return O(t)
            }

            function Xr(t, e, n) {
                var r = new Qt,
                    i = new Qt,
                    o = setInterval(f((function() {
                        qr({
                            options: t,
                            process: function(t) {
                                return c(t) ? void 0 : {}
                            },
                            after: u
                        })
                    })), 1e3),
                    a = function() {
                        var t = Gr();
                        if (c(t)) return t;
                        return {}
                    }();

                function u(t) {
                    return c(t) || (t = {}), s() && (! function(t) {
                        return a.id !== t.id || a[e] !== t[e]
                    }(t) ? a = t : (a = {}, i.notify())), t
                }

                function s() {
                    return void 0 !== a[e]
                }

                function c(t) {
                    return (void 0 === t.created || Z() - Number(t.created) < tn) && (void 0 === t.expire || Z() < Number(t.expire))
                }
                return {
                    expandOrRenewSession: m(f((function() {
                        var i;
                        qr({
                            options: t,
                            process: function(t) {
                                var r = u(t);
                                return i = function(t) {
                                    var r = n(t[e]),
                                        i = r.trackingType,
                                        o = r.isTracked;
                                    t[e] = i, o && !t.id && (t.id = y(), t.created = String(Z()));
                                    return o
                                }(r), r
                            },
                            after: function(t) {
                                i && !s() && function(t) {
                                    a = t, r.notify()
                                }(t), a = t
                            }
                        })
                    })), 1e3).throttled,
                    expandSession: function() {
                        qr({
                            options: t,
                            process: function(t) {
                                return s() ? u(t) : void 0
                            }
                        })
                    },
                    getSession: function() {
                        return a
                    },
                    renewObservable: r,
                    expireObservable: i,
                    stop: function() {
                        clearInterval(o)
                    }
                }
            }
            var Yr = [];

            function Kr(t, e, n) {
                ! function(t) {
                    var e = ct(Br),
                        n = ct("_dd"),
                        r = ct("_dd_r"),
                        i = ct("_dd_l");
                    if (!e) {
                        var o = {};
                        n && (o.id = n), i && /^[01]$/.test(i) && (o.logs = i), r && /^[012]$/.test(r) && (o.rum = r), Hr(o, t)
                    }
                }(t);
                var r = Xr(t, e, n);
                Yr.push((function() {
                    return r.stop()
                }));
                var i = new rn(144e5);

                function o() {
                    return {
                        id: r.getSession().id,
                        trackingType: r.getSession()[e]
                    }
                }
                return Yr.push((function() {
                        return i.stop()
                    })), r.renewObservable.subscribe((function() {
                        i.add(o(), tt())
                    })), r.expireObservable.subscribe((function() {
                        i.closeActive(tt())
                    })), r.expandOrRenewSession(), i.add(o(), nt().relative),
                    function(t) {
                        var e = U(window, ["click", "touchstart", "keydown", "scroll"], t, {
                            capture: !0,
                            passive: !0
                        }).stop;
                        Yr.push(e)
                    }((function() {
                        return r.expandOrRenewSession()
                    })),
                    function(t) {
                        var e = f((function() {
                                "visible" === document.visibilityState && t()
                            })),
                            n = B(document, "visibilitychange", e).stop;
                        Yr.push(n);
                        var r = setInterval(e, 6e4);
                        Yr.push((function() {
                            clearInterval(r)
                        }))
                    }((function() {
                        return r.expandSession()
                    })), {
                        findActiveSession: function(t) {
                            return i.find(t)
                        },
                        renewObservable: r.renewObservable,
                        expireObservable: r.expireObservable
                    }
            }

            function $r(t, e) {
                var n = Kr(t.cookieOptions, "rum", (function(e) {
                    return function(t, e) {
                        var n;
                        n = function(t) {
                            return "0" === t || "1" === t || "2" === t
                        }(e) ? e : b(t.sampleRate) ? b(t.sessionReplaySampleRate) ? "1" : "2" : "0";
                        return {
                            trackingType: n,
                            isTracked: Jr(n)
                        }
                    }(t, e)
                }));
                return n.expireObservable.subscribe((function() {
                    e.notify(7)
                })), n.renewObservable.subscribe((function() {
                    e.notify(8)
                })), {
                    findTrackedSession: function(e) {
                        var r = n.findActiveSession(e);
                        if (r && Jr(r.trackingType)) {
                            var i = "1" === r.trackingType ? 2 : 1;
                            return {
                                id: r.id,
                                plan: i,
                                sessionReplayAllowed: 2 === i,
                                longTaskAllowed: void 0 !== t.trackLongTasks ? t.trackLongTasks : t.oldPlansBehavior && 2 === i,
                                resourceAllowed: void 0 !== t.trackResources ? t.trackResources : t.oldPlansBehavior && 2 === i
                            }
                        }
                    }
                }
            }

            function Jr(t) {
                return "2" === t || "1" === t
            }
            var Zr = /[^\u0000-\u007F]/,
                Qr = function() {
                    function t(t, e, n, r, i, o) {
                        var a = this;
                        this.request = t, this.batchMessagesLimit = e, this.batchBytesLimit = n, this.messageBytesLimit = r, this.flushTimeout = i, this.pageExitObservable = o, this.pushOnlyBuffer = [], this.upsertBuffer = {}, this.bufferBytesCount = 0, this.bufferMessagesCount = 0, o.subscribe((function() {
                            return a.flush(a.request.sendOnExit)
                        })), this.flushPeriodically()
                    }
                    return t.prototype.add = function(t) {
                        this.addOrUpdate(t)
                    }, t.prototype.upsert = function(t, e) {
                        this.addOrUpdate(t, e)
                    }, t.prototype.flush = function(t) {
                        if (void 0 === t && (t = this.request.send), 0 !== this.bufferMessagesCount) {
                            var e = this.pushOnlyBuffer.concat(A(this.upsertBuffer)),
                                n = this.bufferBytesCount;
                            this.pushOnlyBuffer = [], this.upsertBuffer = {}, this.bufferBytesCount = 0, this.bufferMessagesCount = 0, t({
                                data: e.join("\n"),
                                bytesCount: n
                            })
                        }
                    }, t.prototype.computeBytesCount = function(t) {
                        return Zr.test(t) ? void 0 !== window.TextEncoder ? (new TextEncoder).encode(t).length : new Blob([t]).size : t.length
                    }, t.prototype.addOrUpdate = function(t, e) {
                        var n = this.process(t),
                            r = n.processedMessage,
                            o = n.messageBytesCount;
                        o >= this.messageBytesLimit ? i.warn("Discarded a message whose size was bigger than the maximum allowed size ".concat(this.messageBytesLimit, "KB.")) : (this.hasMessageFor(e) && this.remove(e), this.willReachedBytesLimitWith(o) && this.flush(), this.push(r, o, e), this.isFull() && this.flush())
                    }, t.prototype.process = function(t) {
                        var e = C(t);
                        return {
                            processedMessage: e,
                            messageBytesCount: this.computeBytesCount(e)
                        }
                    }, t.prototype.push = function(t, e, n) {
                        this.bufferMessagesCount > 0 && (this.bufferBytesCount += 1), void 0 !== n ? this.upsertBuffer[n] = t : this.pushOnlyBuffer.push(t), this.bufferBytesCount += e, this.bufferMessagesCount += 1
                    }, t.prototype.remove = function(t) {
                        var e = this.upsertBuffer[t];
                        delete this.upsertBuffer[t];
                        var n = this.computeBytesCount(e);
                        this.bufferBytesCount -= n, this.bufferMessagesCount -= 1, this.bufferMessagesCount > 0 && (this.bufferBytesCount -= 1)
                    }, t.prototype.hasMessageFor = function(t) {
                        return void 0 !== t && void 0 !== this.upsertBuffer[t]
                    }, t.prototype.willReachedBytesLimitWith = function(t) {
                        return this.bufferBytesCount + t + 1 >= this.batchBytesLimit
                    }, t.prototype.isFull = function() {
                        return this.bufferMessagesCount === this.batchMessagesLimit || this.bufferBytesCount >= this.batchBytesLimit
                    }, t.prototype.flushPeriodically = function() {
                        var t = this;
                        setTimeout(f((function() {
                            t.flush(), t.flushPeriodically()
                        })), this.flushTimeout)
                    }, t
                }(),
                ti = 3145728;

            function ei(t, e, n, r, i) {
                0 === e.transportStatus && 0 === e.queuedPayloads.size() && e.bandwidthMonitor.canHandle(t) ? ri(t, e, n, {
                    onSuccess: function() {
                        return ii(0, e, n, r, i)
                    },
                    onFailure: function() {
                        e.queuedPayloads.enqueue(t), ni(e, n, r, i)
                    }
                }) : e.queuedPayloads.enqueue(t)
            }

            function ni(t, e, n, r) {
                2 === t.transportStatus && setTimeout(f((function() {
                    ri(t.queuedPayloads.first(), t, e, {
                        onSuccess: function() {
                            t.queuedPayloads.dequeue(), t.currentBackoffTime = 1e3, ii(1, t, e, n, r)
                        },
                        onFailure: function() {
                            t.currentBackoffTime = Math.min(6e4, 2 * t.currentBackoffTime), ni(t, e, n, r)
                        }
                    })
                })), t.currentBackoffTime)
            }

            function ri(t, e, n, r) {
                var i = r.onSuccess,
                    o = r.onFailure;
                e.bandwidthMonitor.add(t), n(t, (function(n) {
                    e.bandwidthMonitor.remove(t), ! function(t) {
                        return 0 === t.status || 408 === t.status || 429 === t.status || t.status >= 500
                    }(n) ? (e.transportStatus = 0, i()) : (e.transportStatus = e.bandwidthMonitor.ongoingRequestCount > 0 ? 1 : 2, t.retry = {
                        count: t.retry ? t.retry.count + 1 : 1,
                        lastFailureStatus: n.status
                    }, o())
                }))
            }

            function ii(t, e, n, r, i) {
                0 === t && e.queuedPayloads.isFull() && !e.queueFullReported && (i({
                    message: "Reached max ".concat(r, " events size queued for upload: ").concat(3, "MiB"),
                    source: _t,
                    startClocks: et()
                }), e.queueFullReported = !0);
                var o = e.queuedPayloads;
                for (e.queuedPayloads = oi(); o.size() > 0;) ei(o.dequeue(), e, n, r, i)
            }

            function oi() {
                var t = [];
                return {
                    bytesCount: 0,
                    enqueue: function(e) {
                        this.isFull() || (t.push(e), this.bytesCount += e.bytesCount)
                    },
                    first: function() {
                        return t[0]
                    },
                    dequeue: function() {
                        var e = t.shift();
                        return e && (this.bytesCount -= e.bytesCount), e
                    },
                    size: function() {
                        return t.length
                    },
                    isFull: function() {
                        return this.bytesCount >= ti
                    }
                }
            }

            function ai(t, e, n) {
                var r = {
                        transportStatus: 0,
                        currentBackoffTime: 1e3,
                        bandwidthMonitor: {
                            ongoingRequestCount: 0,
                            ongoingByteCount: 0,
                            canHandle: function(t) {
                                return 0 === this.ongoingRequestCount || this.ongoingByteCount + t.bytesCount <= 81920 && this.ongoingRequestCount < 32
                            },
                            add: function(t) {
                                this.ongoingRequestCount += 1, this.ongoingByteCount += t.bytesCount
                            },
                            remove: function(t) {
                                this.ongoingRequestCount -= 1, this.ongoingByteCount -= t.bytesCount
                            }
                        },
                        queuedPayloads: oi(),
                        queueFullReported: !1
                    },
                    i = function(n, r) {
                        return function(t, e, n, r) {
                            var i = n.data,
                                o = n.bytesCount,
                                a = n.retry,
                                u = t.build(a);
                            (function() {
                                try {
                                    return window.Request && "keepalive" in new Request("http://a")
                                } catch (n) {
                                    return !1
                                }
                            })() && o < e ? fetch(u, {
                                method: "POST",
                                body: i,
                                keepalive: !0
                            }).then(f((function(t) {
                                return null === r || void 0 === r ? void 0 : r({
                                    status: t.status
                                })
                            })), f((function() {
                                si(u, i, r)
                            }))) : si(u, i, r)
                        }(t, e, n, r)
                    };
                return {
                    send: function(e) {
                        ei(e, r, i, t.endpointType, n)
                    },
                    sendOnExit: function(n) {
                        ! function(t, e, n) {
                            var r = n.data,
                                i = n.bytesCount,
                                o = t.build();
                            if (navigator.sendBeacon && i < e) try {
                                if (navigator.sendBeacon(o, r)) return
                            } catch (a) {
                                ! function(t) {
                                    ui || (ui = !0, ce(t))
                                }(a)
                            }
                            si(o, r)
                        }(t, e, n)
                    }
                }
            }
            var ui = !1;

            function si(t, e, n) {
                var r = new XMLHttpRequest,
                    i = f((function() {
                        r.removeEventListener("loadend", i), null === n || void 0 === n || n({
                            status: r.status
                        })
                    }));
                r.open("POST", t, !0), r.addEventListener("loadend", i), r.send(e)
            }

            function ci(t, e, n, r, i) {
                var o = function(t, e, n) {
                    var r, i = a(t.rumEndpointBuilder),
                        o = t.replica;
                    void 0 !== o && (r = a(o.rumEndpointBuilder));

                    function a(r) {
                        return new Qr(ai(r, t.batchBytesLimit, e), t.batchMessagesLimit, t.batchBytesLimit, t.messageBytesLimit, t.flushTimeout, n)
                    }

                    function u(t) {
                        return H(t, {
                            application: {
                                id: o.applicationId
                            }
                        })
                    }
                    return {
                        add: function(t, e) {
                            void 0 === e && (e = !0), i.add(t), r && e && r.add(u(t))
                        },
                        upsert: function(t, e) {
                            i.upsert(t, e), r && r.upsert(u(t), e)
                        }
                    }
                }(t, r, i);
                e.subscribe(11, (function(t) {
                    "view" === t.type ? o.upsert(t, t.view.id) : o.add(t)
                })), n.subscribe((function(e) {
                    return o.add(e, function(t) {
                        return "datad0g.com" === t.site
                    }(t))
                }))
            }

            function fi(t) {
                var e = g(t),
                    n = new Qt((function() {
                        var t, e = function(t) {
                                var e = an(history, "pushState", {
                                        after: t
                                    }).stop,
                                    n = an(history, "replaceState", {
                                        after: t
                                    }).stop,
                                    r = B(window, "popstate", t).stop;
                                return {
                                    stop: function() {
                                        e(), n(), r()
                                    }
                                }
                            }(r).stop,
                            n = (t = r, B(window, "hashchange", t)).stop;
                        return function() {
                            e(), n()
                        }
                    }));

                function r() {
                    if (e.href !== t.href) {
                        var r = g(t);
                        n.notify({
                            newLocation: r,
                            oldLocation: e
                        }), e = r
                    }
                }
                return n
            }
            var li = 2,
                di = 3,
                pi = 4,
                vi = 6,
                mi = 7,
                hi = 8,
                gi = 9,
                yi = 0,
                bi = 1,
                wi = 2,
                Si = 3,
                Ci = 4,
                Ti = 0,
                ki = 1,
                Ei = 2,
                xi = 3,
                _i = 4,
                Ri = 5,
                Ai = 6,
                Ii = 7,
                Oi = 8,
                Ni = 0,
                Li = 1,
                Mi = 2,
                Pi = 3,
                Di = 4,
                Bi = 5,
                Ui = 6,
                qi = 7,
                Fi = 9,
                ji = 0,
                Vi = 1,
                Hi = {
                    IGNORE: "ignore",
                    HIDDEN: "hidden",
                    ALLOW: $t.ALLOW,
                    MASK: $t.MASK,
                    MASK_USER_INPUT: $t.MASK_USER_INPUT
                },
                zi = "data-dd-privacy",
                Gi = "hidden",
                Wi = "***",
                Xi = {
                    INPUT: !0,
                    OUTPUT: !0,
                    TEXTAREA: !0,
                    SELECT: !0,
                    OPTION: !0,
                    DATALIST: !0,
                    OPTGROUP: !0
                };

            function Yi(t, e) {
                var n = t.parentNode ? Yi(t.parentNode, e) : e;
                return Ki($i(t), n)
            }

            function Ki(t, e) {
                switch (e) {
                    case Hi.HIDDEN:
                    case Hi.IGNORE:
                        return e
                }
                switch (t) {
                    case Hi.ALLOW:
                    case Hi.MASK:
                    case Hi.MASK_USER_INPUT:
                    case Hi.HIDDEN:
                    case Hi.IGNORE:
                        return t;
                    default:
                        return e
                }
            }

            function $i(t) {
                if (function(t) {
                        return t.nodeType === t.ELEMENT_NODE
                    }(t)) {
                    var e = t.getAttribute(zi);
                    if ("BASE" === t.tagName) return Hi.ALLOW;
                    if ("INPUT" === t.tagName) {
                        var n = t;
                        if ("password" === n.type || "email" === n.type || "tel" === n.type) return Hi.MASK;
                        if ("hidden" === n.type) return Hi.MASK;
                        var r = n.getAttribute("autocomplete");
                        if (r && 0 === r.indexOf("cc-")) return Hi.MASK
                    }
                    return e === Gi || t.classList.contains("dd-privacy-hidden") ? Hi.HIDDEN : "mask" === e || t.classList.contains("dd-privacy-mask") ? Hi.MASK : "mask-user-input" === e || t.classList.contains("dd-privacy-mask-user-input") ? Hi.MASK_USER_INPUT : "allow" === e || t.classList.contains("dd-privacy-allow") ? Hi.ALLOW : function(t) {
                        if ("SCRIPT" === t.nodeName) return !0;
                        if ("LINK" === t.nodeName) {
                            return "preload" === (n = i("rel")) && "script" === i("as") || "shortcut icon" === n || "icon" === n
                        }
                        if ("META" === t.nodeName) {
                            var e = i("name"),
                                n = i("rel"),
                                r = i("property");
                            return /^msapplication-tile(image|color)$/.test(e) || "application-name" === e || "icon" === n || "apple-touch-icon" === n || "shortcut icon" === n || "keywords" === e || "description" === e || /^(og|twitter|fb):/.test(r) || /^(og|twitter):/.test(e) || "pinterest" === e || "robots" === e || "googlebot" === e || "bingbot" === e || t.hasAttribute("http-equiv") || "author" === e || "generator" === e || "framework" === e || "publisher" === e || "progid" === e || /^article:/.test(r) || /^product:/.test(r) || "google-site-verification" === e || "yandex-verification" === e || "csrf-token" === e || "p:domain_verify" === e || "verify-v1" === e || "verification" === e || "shopify-checkout-api-token" === e
                        }

                        function i(e) {
                            return (t.getAttribute(e) || "").toLowerCase()
                        }
                        return !1
                    }(t) ? Hi.IGNORE : void 0
                }
            }

            function Ji(t, e) {
                switch (e) {
                    case Hi.MASK:
                    case Hi.HIDDEN:
                    case Hi.IGNORE:
                        return !0;
                    case Hi.MASK_USER_INPUT:
                        return function(t) {
                            return t.nodeType === t.TEXT_NODE
                        }(t) ? Zi(t.parentNode) : Zi(t);
                    default:
                        return !1
                }
            }

            function Zi(t) {
                if (!t || t.nodeType !== t.ELEMENT_NODE) return !1;
                var e = t;
                if ("INPUT" === e.tagName) switch (e.type) {
                    case "button":
                    case "color":
                    case "reset":
                    case "submit":
                        return !1
                }
                return !!Xi[e.tagName]
            }

            function Qi(t, e, n) {
                var r, i = null === (r = t.parentElement) || void 0 === r ? void 0 : r.tagName,
                    o = t.textContent || "";
                if (!e || o.trim()) {
                    var a = "STYLE" === i || void 0;
                    if ("SCRIPT" === i) o = Wi;
                    else if (n === Hi.HIDDEN) o = Wi;
                    else if (Ji(t, n) && !a)
                        if ("DATALIST" === i || "SELECT" === i || "OPTGROUP" === i) {
                            if (!o.trim()) return
                        } else o = "OPTION" === i ? Wi : o.replace(/\S/g, "x");
                    return o
                }
            }
            var to = new WeakMap;

            function eo(t) {
                return to.has(t)
            }

            function no(t) {
                return to.get(t)
            }

            function ro(t, e) {
                var n = t.tagName,
                    r = t.value;
                if (Ji(t, e)) {
                    var i = t.type;
                    if ("INPUT" === n && ("button" === i || "submit" === i || "reset" === i)) return r;
                    if (!r || "OPTION" === n) return;
                    return Wi
                }
                return "OPTION" === n || "SELECT" === n ? t.value : "INPUT" === n || "TEXTAREA" === n ? r : void 0
            }
            var io = /url\((?:(')([^']*)'|(")([^"]*)"|([^)]*))\)/gm,
                oo = /^[A-Za-z]+:|^\/\//,
                ao = /^data:.*,/i;

            function uo(t, e) {
                return t.replace(io, (function(t, n, r, i, o, a) {
                    var u = r || o || a;
                    if (!e || !u || oo.test(u) || ao.test(u)) return t;
                    var s = n || i || "";
                    return "url(".concat(s).concat(function(t, e) {
                        try {
                            return Vt(t, e).href
                        } catch (n) {
                            return t
                        }
                    }(u, e)).concat(s, ")")
                }))
            }

            function so(t) {
                return Boolean(t.changedTouches)
            }

            function co(t, e) {
                Array.prototype.forEach.call(t, e)
            }

            function fo(t, e) {
                return {
                    data: h({
                        source: t
                    }, e),
                    type: di,
                    timestamp: Q()
                }
            }

            function lo(t) {
                for (var e = [], n = t; n.parentRule;) {
                    var r = Array.from(n.parentRule.cssRules).indexOf(n);
                    e.unshift(r), n = n.parentRule
                }
                if (n.parentStyleSheet) {
                    var i = Array.from(n.parentStyleSheet.cssRules).indexOf(n);
                    return e.unshift(i), e
                }
            }

            function po(t, e, n) {
                return vo(t, {
                    serializationContext: n,
                    parentNodePrivacyLevel: e.defaultPrivacyLevel,
                    configuration: e
                })
            }

            function vo(t, e) {
                var n = function(t, e) {
                    switch (t.nodeType) {
                        case t.DOCUMENT_NODE:
                            return function(t, e) {
                                return {
                                    type: yi,
                                    childNodes: mo(t, e)
                                }
                            }(t, e);
                        case t.DOCUMENT_TYPE_NODE:
                            return {
                                type: bi,
                                name: (n = t).name,
                                publicId: n.publicId,
                                systemId: n.systemId
                            };
                        case t.ELEMENT_NODE:
                            return function(t, e) {
                                var n, r = bo(t.tagName),
                                    i = (a = t, "svg" === a.tagName || a instanceof SVGElement || void 0),
                                    o = Ki($i(t), e.parentNodePrivacyLevel);
                                var a;
                                if (o === Hi.HIDDEN) {
                                    var u = t.getBoundingClientRect(),
                                        s = u.width,
                                        c = u.height;
                                    return {
                                        type: wi,
                                        tagName: r,
                                        attributes: (n = {
                                            rr_width: "".concat(s, "px"),
                                            rr_height: "".concat(c, "px")
                                        }, n[zi] = Gi, n),
                                        childNodes: [],
                                        isSVG: i
                                    }
                                }
                                if (o === Hi.IGNORE) return;
                                var f = function(t, e, n) {
                                        var r;
                                        if (e === Hi.HIDDEN) return {};
                                        for (var i = {}, o = bo(t.tagName), a = t.ownerDocument, u = 0; u < t.attributes.length; u += 1) {
                                            var s = t.attributes.item(u).name,
                                                c = ho(t, e, s, n.configuration);
                                            null !== c && (i[s] = c)
                                        }
                                        if (t.value && ("textarea" === o || "select" === o || "option" === o || "input" === o)) {
                                            var f = ro(t, e);
                                            void 0 !== f && (i.value = f)
                                        }
                                        if ("option" === o && e === Hi.ALLOW) {
                                            var l = t;
                                            l.selected && (i.selected = l.selected)
                                        }
                                        if ("link" === o) {
                                            var d = Array.from(a.styleSheets).find((function(e) {
                                                return e.href === t.href
                                            }));
                                            (p = wo(d)) && d && (delete i.rel, delete i.href, i._cssText = p)
                                        }
                                        if ("style" === o && t.sheet && !(t.innerText || t.textContent || "").trim().length) {
                                            var p;
                                            (p = wo(t.sheet)) && (i._cssText = p)
                                        }
                                        var v, m, h = t;
                                        "input" !== o || "radio" !== h.type && "checkbox" !== h.type || (e === Hi.ALLOW ? i.checked = !!h.checked : Ji(h, e) && (i.checked = Wi));
                                        if ("audio" === o || "video" === o) {
                                            var g = t;
                                            i.rr_mediaState = g.paused ? "paused" : "played"
                                        }
                                        var y = n.serializationContext;
                                        switch (y.status) {
                                            case 0:
                                                v = Math.round(t.scrollTop), m = Math.round(t.scrollLeft), (v || m) && y.elementsScrollPositions.set(t, {
                                                    scrollTop: v,
                                                    scrollLeft: m
                                                });
                                                break;
                                            case 1:
                                                y.elementsScrollPositions.has(t) && (v = (r = y.elementsScrollPositions.get(t)).scrollTop, m = r.scrollLeft)
                                        }
                                        m && (i.rr_scrollLeft = m);
                                        v && (i.rr_scrollTop = v);
                                        return i
                                    }(t, o, e),
                                    l = [];
                                if (t.childNodes.length) {
                                    l = mo(t, e.parentNodePrivacyLevel === o && e.ignoreWhiteSpace === ("head" === r) ? e : h({}, e, {
                                        parentNodePrivacyLevel: o,
                                        ignoreWhiteSpace: "head" === r
                                    }))
                                }
                                return {
                                    type: wi,
                                    tagName: r,
                                    attributes: f,
                                    childNodes: l,
                                    isSVG: i
                                }
                            }(t, e);
                        case t.TEXT_NODE:
                            return function(t, e) {
                                var n, r = null === (n = t.parentElement) || void 0 === n ? void 0 : n.tagName,
                                    i = Qi(t, e.ignoreWhiteSpace || !1, e.parentNodePrivacyLevel);
                                if (!i) return;
                                return {
                                    type: Si,
                                    textContent: i,
                                    isStyle: "STYLE" === r || void 0
                                }
                            }(t, e);
                        case t.CDATA_SECTION_NODE:
                            return {
                                type: Ci,
                                textContent: ""
                            }
                    }
                    var n
                }(t, e);
                if (!n) return null;
                var r = no(t) || go++,
                    i = n;
                return i.id = r,
                    function(t, e) {
                        to.set(t, e)
                    }(t, r), e.serializedNodeIds && e.serializedNodeIds.add(r), i
            }

            function mo(t, e) {
                var n = [];
                return co(t.childNodes, (function(t) {
                    var r = vo(t, e);
                    r && n.push(r)
                })), n
            }

            function ho(t, e, n, r) {
                if (e === Hi.HIDDEN) return null;
                var i = t.getAttribute(n);
                if (e === Hi.MASK && n !== zi && !jn.includes(n) && n !== r.actionNameAttribute) {
                    var o = t.tagName;
                    switch (n) {
                        case "title":
                        case "alt":
                        case "placeholder":
                            return Wi
                    }
                    if (("IMG" === o || "SOURCE" === o) && ("src" === n || "srcset" === n)) return "data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==";
                    if ("A" === o && "href" === n) return Wi;
                    if (i && N(n, "data-")) return Wi
                }
                return i && "string" === typeof i && i.length > 1e5 && "data:" === i.slice(0, 5) ? "data:truncated" : i
            }
            var go = 1;
            var yo = /[^a-z1-6-_]/;

            function bo(t) {
                var e = t.toLowerCase().trim();
                return yo.test(e) ? "div" : e
            }

            function wo(t) {
                try {
                    var e = t.rules || t.cssRules;
                    return e ? uo(Array.from(e, So).join(""), t.href) : null
                } catch (n) {
                    return null
                }
            }

            function So(t) {
                return function(t) {
                    return "styleSheet" in t
                }(t) ? wo(t.styleSheet) || "" : t.cssText
            }

            function Co(t) {
                var e = S,
                    n = [];

                function r() {
                    e(), t(n), n = []
                }
                return {
                    addMutations: function(t) {
                        0 === n.length && (e = function(t, e) {
                            if (window.requestIdleCallback) {
                                var n = window.requestIdleCallback(f(t), e);
                                return function() {
                                    return window.cancelIdleCallback(n)
                                }
                            }
                            var r = window.requestAnimationFrame(f(t));
                            return function() {
                                return window.cancelAnimationFrame(r)
                            }
                        }(r, {
                            timeout: 100
                        })), n.push.apply(n, t)
                    },
                    flush: r,
                    stop: function() {
                        e()
                    }
                }
            }

            function To(t, e, n) {
                var r = de();
                if (!r) return {
                    stop: S
                };
                var i = Co((function(t) {
                        ! function(t, e, n) {
                            var r = t.filter((function(t) {
                                    return document.contains(t.target) && function(t) {
                                        for (var e = t; e;) {
                                            if (!eo(e)) return !1;
                                            e = e.parentNode
                                        }
                                        return !0
                                    }(t.target) && Yi(t.target, n.defaultPrivacyLevel) !== Hi.HIDDEN
                                })),
                                i = function(t, e) {
                                    for (var n = new Set, r = new Map, i = function(t) {
                                            co(t.addedNodes, (function(t) {
                                                n.add(t)
                                            })), co(t.removedNodes, (function(e) {
                                                n.has(e) || r.set(e, t.target), n.delete(e)
                                            }))
                                        }, o = 0, a = t; o < a.length; o++) {
                                        i(a[o])
                                    }
                                    var u = Array.from(n);
                                    s = u, s.sort((function(t, e) {
                                        var n = t.compareDocumentPosition(e);
                                        return n & Node.DOCUMENT_POSITION_CONTAINED_BY ? -1 : n & Node.DOCUMENT_POSITION_CONTAINS || n & Node.DOCUMENT_POSITION_FOLLOWING ? 1 : n & Node.DOCUMENT_POSITION_PRECEDING ? -1 : 0
                                    }));
                                    var s;
                                    for (var c = new Set, f = [], l = 0, d = u; l < d.length; l++) {
                                        var p = d[l];
                                        if (!g(p)) {
                                            var v = Yi(p.parentNode, e.defaultPrivacyLevel);
                                            if (v !== Hi.HIDDEN && v !== Hi.IGNORE) {
                                                var m = vo(p, {
                                                    serializedNodeIds: c,
                                                    parentNodePrivacyLevel: v,
                                                    serializationContext: {
                                                        status: 2
                                                    },
                                                    configuration: e
                                                });
                                                m && f.push({
                                                    nextId: y(p),
                                                    parentId: no(p.parentNode),
                                                    node: m
                                                })
                                            }
                                        }
                                    }
                                    var h = [];
                                    return r.forEach((function(t, e) {
                                        eo(e) && h.push({
                                            parentId: no(t),
                                            id: no(e)
                                        })
                                    })), {
                                        adds: f,
                                        removes: h,
                                        hasBeenSerialized: g
                                    };

                                    function g(t) {
                                        return eo(t) && c.has(no(t))
                                    }

                                    function y(t) {
                                        for (var e = t.nextSibling; e;) {
                                            if (eo(e)) return no(e);
                                            e = e.nextSibling
                                        }
                                        return null
                                    }
                                }(r.filter((function(t) {
                                    return "childList" === t.type
                                })), n),
                                o = i.adds,
                                a = i.removes,
                                u = i.hasBeenSerialized,
                                s = function(t, e) {
                                    for (var n, r = [], i = new Set, o = t.filter((function(t) {
                                            return !i.has(t.target) && (i.add(t.target), !0)
                                        })), a = 0, u = o; a < u.length; a++) {
                                        var s = u[a];
                                        if (s.target.textContent !== s.oldValue) {
                                            var c = Yi(s.target.parentNode, e.defaultPrivacyLevel);
                                            c !== Hi.HIDDEN && c !== Hi.IGNORE && r.push({
                                                id: no(s.target),
                                                value: null !== (n = Qi(s.target, !1, c)) && void 0 !== n ? n : null
                                            })
                                        }
                                    }
                                    return r
                                }(r.filter((function(t) {
                                    return "characterData" === t.type && !u(t.target)
                                })), n),
                                c = function(t, e) {
                                    for (var n = [], r = new Map, i = t.filter((function(t) {
                                            var e = r.get(t.target);
                                            return !(null === e || void 0 === e ? void 0 : e.has(t.attributeName)) && (e ? e.add(t.attributeName) : r.set(t.target, new Set([t.attributeName])), !0)
                                        })), o = new Map, a = 0, u = i; a < u.length; a++) {
                                        var s = u[a];
                                        if (s.target.getAttribute(s.attributeName) !== s.oldValue) {
                                            var c = Yi(s.target, e.defaultPrivacyLevel),
                                                f = ho(s.target, c, s.attributeName, e),
                                                l = void 0;
                                            if ("value" === s.attributeName) {
                                                var d = ro(s.target, c);
                                                if (void 0 === d) continue;
                                                l = d
                                            } else l = "string" === typeof f ? f : null;
                                            var p = o.get(s.target);
                                            p || (p = {
                                                id: no(s.target),
                                                attributes: {}
                                            }, n.push(p), o.set(s.target, p)), p.attributes[s.attributeName] = l
                                        }
                                    }
                                    return n
                                }(r.filter((function(t) {
                                    return "attributes" === t.type && !u(t.target)
                                })), n);
                            if (!s.length && !c.length && !a.length && !o.length) return;
                            e({
                                adds: o,
                                removes: a,
                                texts: s,
                                attributes: c
                            })
                        }(t.concat(o.takeRecords()), e, n)
                    })),
                    o = new r(f(i.addMutations));
                return o.observe(document, {
                    attributeOldValue: !0,
                    attributes: !0,
                    characterData: !0,
                    characterDataOldValue: !0,
                    childList: !0,
                    subtree: !0
                }), t.onFlush(i.flush), {
                    stop: function() {
                        o.disconnect(), i.stop()
                    }
                }
            }
            var ko = function() {
                function t() {}
                return t.prototype.flush = function() {
                    var t;
                    null === (t = this.flushListener) || void 0 === t || t.call(this)
                }, t.prototype.onFlush = function(t) {
                    this.flushListener = t
                }, t
            }();
            var Eo, xo = function(t, e) {
                    var n = window.visualViewport,
                        r = {
                            layoutViewportX: t,
                            layoutViewportY: e,
                            visualViewportX: t,
                            visualViewportY: e
                        };
                    return n ? (! function() {
                        var t = window.visualViewport;
                        return Math.abs(t.pageTop - t.offsetTop - window.scrollY) > 25 || Math.abs(t.pageLeft - t.offsetLeft - window.scrollX) > 25
                    }() ? (r.visualViewportX = Math.round(t - n.offsetLeft), r.visualViewportY = Math.round(e - n.offsetTop)) : (r.layoutViewportX = Math.round(t + n.offsetLeft), r.layoutViewportY = Math.round(e + n.offsetTop)), r) : r
                },
                _o = function() {
                    var t = window.visualViewport;
                    return {
                        scale: t.scale,
                        offsetLeft: t.offsetLeft,
                        offsetTop: t.offsetTop,
                        pageLeft: t.pageLeft,
                        pageTop: t.pageTop,
                        height: t.height,
                        width: t.width
                    }
                };

            function Ro() {
                var t, e = window.visualViewport;
                return t = e ? e.pageLeft - e.offsetLeft : void 0 !== window.scrollX ? window.scrollX : window.pageXOffset || 0, Math.round(t)
            }

            function Ao() {
                var t, e = window.visualViewport;
                return t = e ? e.pageTop - e.offsetTop : void 0 !== window.scrollY ? window.scrollY : window.pageYOffset || 0, Math.round(t)
            }
            var Io = new WeakMap,
                Oo = 1;

            function No(t) {
                return Io.has(t) || Io.set(t, Oo++), Io.get(t)
            }

            function Lo(t) {
                var e, n, r, i, o, a, u, s, c = (e = t.mutationController, n = t.mutationCb, r = t.configuration, To(e, n, r).stop),
                    l = function(t) {
                        var e = m(f((function(e) {
                            var n = e.target;
                            if (eo(n)) {
                                var r = so(e) ? e.changedTouches[0] : e,
                                    i = r.clientX,
                                    o = r.clientY,
                                    a = {
                                        id: no(n),
                                        timeOffset: 0,
                                        x: i,
                                        y: o
                                    };
                                if (window.visualViewport) {
                                    var u = xo(i, o),
                                        s = u.visualViewportX,
                                        c = u.visualViewportY;
                                    a.x = s, a.y = c
                                }
                                t([a], so(e) ? Ai : ki)
                            }
                        })), 50, {
                            trailing: !1
                        }).throttled;
                        return U(document, ["mousemove", "touchmove"], e, {
                            capture: !0,
                            passive: !0
                        }).stop
                    }(t.mousemoveCb),
                    d = function(t, e) {
                        var n = function(n) {
                            var r = n.target;
                            if (Yi(r, e) !== Hi.HIDDEN && eo(r)) {
                                var i = so(n) ? n.changedTouches[0] : n,
                                    o = i.clientX,
                                    a = i.clientY,
                                    u = {
                                        id: no(r),
                                        type: Mo[n.type],
                                        x: o,
                                        y: a
                                    };
                                if (window.visualViewport) {
                                    var s = xo(o, a),
                                        c = s.visualViewportX,
                                        f = s.visualViewportY;
                                    u.x = c, u.y = f
                                }
                                var l = h({
                                    id: No(n)
                                }, fo(Ei, u));
                                t(l)
                            }
                        };
                        return U(document, Object.keys(Mo), n, {
                            capture: !0,
                            passive: !0
                        }).stop
                    }(t.mouseInteractionCb, t.configuration.defaultPrivacyLevel),
                    p = function(t, e, n) {
                        var r = m(f((function(r) {
                            var i = r.target;
                            if (i && Yi(i, e) !== Hi.HIDDEN && eo(i)) {
                                var o = no(i),
                                    a = i === document ? {
                                        scrollTop: Ao(),
                                        scrollLeft: Ro()
                                    } : {
                                        scrollTop: Math.round(i.scrollTop),
                                        scrollLeft: Math.round(i.scrollLeft)
                                    };
                                n.set(i, a), t({
                                    id: o,
                                    x: a.scrollLeft,
                                    y: a.scrollTop
                                })
                            }
                        })), 100).throttled;
                        return B(document, "scroll", r, {
                            capture: !0,
                            passive: !0
                        }).stop
                    }(t.scrollCb, t.configuration.defaultPrivacyLevel, t.elementsScrollPositions),
                    v = function(t) {
                        return Fe().subscribe(t).unsubscribe
                    }(t.viewportResizeCb),
                    g = function(t, e) {
                        var n = new WeakMap;

                        function r(t) {
                            var n = Yi(t, e);
                            if (n !== Hi.HIDDEN) {
                                var r, o = t.type;
                                if ("radio" === o || "checkbox" === o) {
                                    if (Ji(t, n)) return;
                                    r = {
                                        isChecked: t.checked
                                    }
                                } else {
                                    var a = ro(t, n);
                                    if (void 0 === a) return;
                                    r = {
                                        text: a
                                    }
                                }
                                i(t, r);
                                var u = t.name;
                                "radio" === o && u && t.checked && co(document.querySelectorAll('input[type="radio"][name="'.concat(u, '"]')), (function(e) {
                                    e !== t && i(e, {
                                        isChecked: !1
                                    })
                                }))
                            }
                        }

                        function i(e, r) {
                            if (eo(e)) {
                                var i = n.get(e);
                                i && i.text === r.text && i.isChecked === r.isChecked || (n.set(e, r), t(h({
                                    id: no(e)
                                }, r)))
                            }
                        }
                        var o = U(document, ["input", "change"], (function(t) {
                                (t.target instanceof HTMLInputElement || t.target instanceof HTMLTextAreaElement || t.target instanceof HTMLSelectElement) && r(t.target)
                            }), {
                                capture: !0,
                                passive: !0
                            }).stop,
                            a = [un(HTMLInputElement.prototype, "value", r), un(HTMLInputElement.prototype, "checked", r), un(HTMLSelectElement.prototype, "value", r), un(HTMLTextAreaElement.prototype, "value", r), un(HTMLSelectElement.prototype, "selectedIndex", r)];
                        return function() {
                            a.forEach((function(t) {
                                return t.stop()
                            })), o()
                        }
                    }(t.inputCb, t.configuration.defaultPrivacyLevel),
                    y = (i = t.mediaInteractionCb, o = t.configuration.defaultPrivacyLevel, U(document, ["play", "pause"], (function(t) {
                        var e = t.target;
                        e && Yi(e, o) !== Hi.HIDDEN && eo(e) && i({
                            id: no(e),
                            type: "play" === t.type ? ji : Vi
                        })
                    }), {
                        capture: !0,
                        passive: !0
                    }).stop),
                    b = function(t) {
                        function e(t, e) {
                            t && eo(t.ownerNode) && e(no(t.ownerNode))
                        }
                        var n = [an(CSSStyleSheet.prototype, "insertRule", {
                            before: function(n, r) {
                                e(this, (function(e) {
                                    return t({
                                        id: e,
                                        adds: [{
                                            rule: n,
                                            index: r
                                        }]
                                    })
                                }))
                            }
                        }), an(CSSStyleSheet.prototype, "deleteRule", {
                            before: function(n) {
                                e(this, (function(e) {
                                    return t({
                                        id: e,
                                        removes: [{
                                            index: n
                                        }]
                                    })
                                }))
                            }
                        })];
                        "undefined" !== typeof CSSGroupingRule ? r(CSSGroupingRule) : (r(CSSMediaRule), r(CSSSupportsRule));

                        function r(r) {
                            n.push(an(r.prototype, "insertRule", {
                                before: function(n, r) {
                                    var i = this;
                                    e(this.parentStyleSheet, (function(e) {
                                        var o = lo(i);
                                        o && (o.push(r || 0), t({
                                            id: e,
                                            adds: [{
                                                rule: n,
                                                index: o
                                            }]
                                        }))
                                    }))
                                }
                            }), an(r.prototype, "deleteRule", {
                                before: function(n) {
                                    var r = this;
                                    e(this.parentStyleSheet, (function(e) {
                                        var i = lo(r);
                                        i && (i.push(n), t({
                                            id: e,
                                            removes: [{
                                                index: i
                                            }]
                                        }))
                                    }))
                                }
                            }))
                        }
                        return function() {
                            return n.forEach((function(t) {
                                return t.stop()
                            }))
                        }
                    }(t.styleSheetCb),
                    w = (a = t.focusCb, U(window, ["focus", "blur"], (function() {
                        a({
                            has_focus: document.hasFocus()
                        })
                    })).stop),
                    C = function(t) {
                        if (!window.visualViewport) return S;
                        var e = m(f((function() {
                                t(_o())
                            })), 200, {
                                trailing: !1
                            }),
                            n = e.throttled,
                            r = e.cancel,
                            i = U(window.visualViewport, ["resize", "scroll"], n, {
                                capture: !0,
                                passive: !0
                            }).stop;
                        return function() {
                            i(), r()
                        }
                    }(t.visualViewportResizeCb),
                    T = (u = t.lifeCycle, s = t.frustrationCb, u.subscribe(10, (function(t) {
                        var e, n, r;
                        "action" === t.rawRumEvent.type && "click" === t.rawRumEvent.action.type && (null === (n = null === (e = t.rawRumEvent.action.frustration) || void 0 === e ? void 0 : e.type) || void 0 === n ? void 0 : n.length) && "events" in t.domainContext && (null === (r = t.domainContext.events) || void 0 === r ? void 0 : r.length) && s({
                            timestamp: t.rawRumEvent.date,
                            type: gi,
                            data: {
                                frustrationTypes: t.rawRumEvent.action.frustration.type,
                                recordIds: t.domainContext.events.map((function(t) {
                                    return No(t)
                                }))
                            }
                        })
                    })).unsubscribe);
                return function() {
                    c(), l(), d(), p(), v(), g(), y(), b(), w(), C(), T()
                }
            }
            var Mo = ((Eo = {}).mouseup = Ni, Eo.mousedown = Li, Eo.click = Mi, Eo.contextmenu = Pi, Eo.dblclick = Di, Eo.focus = Bi, Eo.blur = Ui, Eo.touchstart = qi, Eo.touchend = Fi, Eo);

            function Po(t) {
                var e = t.emit;
                if (!e) throw new Error("emit function is required");
                var n = new ko,
                    r = function() {
                        var t = new WeakMap;
                        return {
                            set: function(e, n) {
                                (e !== document || document.scrollingElement) && t.set(e === document ? document.scrollingElement : e, n)
                            },
                            get: function(e) {
                                return t.get(e)
                            },
                            has: function(e) {
                                return t.has(e)
                            }
                        }
                    }(),
                    i = function(i, o) {
                        void 0 === i && (i = Q()), void 0 === o && (o = {
                            status: 0,
                            elementsScrollPositions: r
                        }), n.flush();
                        var a = je(),
                            u = a.width,
                            s = a.height;
                        e({
                            data: {
                                height: s,
                                href: window.location.href,
                                width: u
                            },
                            type: pi,
                            timestamp: i
                        }), e({
                            data: {
                                has_focus: document.hasFocus()
                            },
                            type: vi,
                            timestamp: i
                        }), e({
                            data: {
                                node: po(document, t.configuration, o),
                                initialOffset: {
                                    left: Ro(),
                                    top: Ao()
                                }
                            },
                            type: li,
                            timestamp: i
                        }), window.visualViewport && e({
                            data: _o(),
                            type: hi,
                            timestamp: i
                        })
                    };
                return i(), {
                    stop: Lo({
                        lifeCycle: t.lifeCycle,
                        configuration: t.configuration,
                        mutationController: n,
                        elementsScrollPositions: r,
                        inputCb: function(t) {
                            return e(fo(Ri, t))
                        },
                        mediaInteractionCb: function(t) {
                            return e(fo(Ii, t))
                        },
                        mouseInteractionCb: function(t) {
                            return e(t)
                        },
                        mousemoveCb: function(t, n) {
                            return e(fo(n, {
                                positions: t
                            }))
                        },
                        mutationCb: function(t) {
                            return e(fo(Ti, t))
                        },
                        scrollCb: function(t) {
                            return e(fo(xi, t))
                        },
                        styleSheetCb: function(t) {
                            return e(fo(Oi, t))
                        },
                        viewportResizeCb: function(t) {
                            return e(fo(_i, t))
                        },
                        frustrationCb: function(t) {
                            return e(t)
                        },
                        focusCb: function(t) {
                            return e({
                                data: t,
                                type: vi,
                                timestamp: Q()
                            })
                        },
                        visualViewportResizeCb: function(t) {
                            e({
                                data: t,
                                type: hi,
                                timestamp: Q()
                            })
                        }
                    }),
                    takeSubsequentFullSnapshot: function(t) {
                        return i(t, {
                            status: 1,
                            elementsScrollPositions: r
                        })
                    },
                    flushMutations: function() {
                        return n.flush()
                    }
                }
            }

            function Do(t, e, n) {
                var r = new FormData;
                return r.append("segment", new Blob([t], {
                    type: "application/octet-stream"
                }), "".concat(e.session.id, "-").concat(e.start)), Bo(e, (function(t, e) {
                    return r.append(t, e)
                })), r.append("raw_segment_size", n.toString()), {
                    data: r,
                    bytesCount: t.byteLength
                }
            }

            function Bo(t, e, n) {
                void 0 === n && (n = ""), I(t).forEach((function(t) {
                    var r = t[0],
                        i = t[1];
                    "object" === typeof i && null !== i ? Bo(i, e, "".concat(n).concat(r, ".")) : e("".concat(n).concat(r), String(i))
                }))
            }
            var Uo;

            function qo(t) {
                return Vo(t).segments_count
            }

            function Fo(t) {
                Vo(t).records_count += 1
            }

            function jo(t) {
                return null === Uo || void 0 === Uo ? void 0 : Uo.get(t)
            }

            function Vo(t) {
                var e;
                return Uo || (Uo = new Map), Uo.has(t) ? e = Uo.get(t) : (e = {
                    records_count: 0,
                    segments_count: 0,
                    segments_total_raw_size: 0
                }, Uo.set(t, e), Uo.size > 10 && function() {
                    if (!Uo) return;
                    if (Uo.keys) Uo.delete(Uo.keys().next().value);
                    else {
                        var t = !0;
                        Uo.forEach((function(e, n) {
                            t && (Uo.delete(n), t = !1)
                        }))
                    }
                }()), e
            }
            var Ho = 0,
                zo = function() {
                    function t(t, e, n, r, i, o) {
                        var a = this;
                        this.worker = t, this.id = Ho++;
                        var u = e.view.id;
                        this.metadata = h({
                                start: r.timestamp,
                                end: r.timestamp,
                                creation_reason: n,
                                records_count: 1,
                                has_full_snapshot: r.type === li,
                                index_in_view: qo(u),
                                source: "browser"
                            }, e),
                            function(t) {
                                Vo(t).segments_count += 1
                            }(u), Fo(u);
                        var s = f((function(e) {
                            var n = e.data;
                            "errored" !== n.type && "initialized" !== n.type && (n.id === a.id ? (! function(t, e) {
                                Vo(t).segments_total_raw_size += e
                            }(u, n.additionalBytesCount), "flushed" === n.type ? (o(n.result, n.rawBytesCount), t.removeEventListener("message", s)) : i(n.compressedBytesCount)) : n.id > a.id && (t.removeEventListener("message", s), se("Segment did not receive a 'flush' response before being replaced.")))
                        }));
                        t.addEventListener("message", s), this.worker.postMessage({
                            data: '{"records":['.concat(JSON.stringify(r)),
                            id: this.id,
                            action: "write"
                        })
                    }
                    return t.prototype.addRecord = function(t) {
                        var e;
                        this.metadata.start = Math.min(this.metadata.start, t.timestamp), this.metadata.end = Math.max(this.metadata.end, t.timestamp), this.metadata.records_count += 1, Fo(this.metadata.view.id), (e = this.metadata).has_full_snapshot || (e.has_full_snapshot = t.type === li), this.worker.postMessage({
                            data: ",".concat(JSON.stringify(t)),
                            id: this.id,
                            action: "write"
                        })
                    }, t.prototype.flush = function(t) {
                        this.worker.postMessage({
                            data: "],".concat(JSON.stringify(this.metadata).slice(1), "\n"),
                            id: this.id,
                            action: "flush"
                        }), this.flushReason = t
                    }, t
                }(),
                Go = 6e4;

            function Wo(t, e, n, r, i, o) {
                return function(t, e, n, r) {
                    var i = {
                            status: 0,
                            nextSegmentCreationReason: "init"
                        },
                        o = t.subscribe(2, (function() {
                            u("view_change")
                        })).unsubscribe,
                        a = t.subscribe(9, (function(t) {
                            u(t.reason)
                        })).unsubscribe;

                    function u(t) {
                        1 === i.status && (i.segment.flush(t), clearTimeout(i.expirationTimeoutId)), i = "stop" !== t ? {
                            status: 0,
                            nextSegmentCreationReason: t
                        } : {
                            status: 2
                        }
                    }

                    function s(t, o) {
                        var a = e();
                        if (a) {
                            var s = new zo(r, a, t, o, (function(t) {
                                !s.flushReason && t > Go && u("segment_bytes_limit")
                            }), (function(t, e) {
                                var r = Do(t, s.metadata, e);
                                Ut("retry_replay") && "visibility_hidden" !== s.flushReason && "before_unload" !== s.flushReason ? n.send(r) : n.sendOnExit(r)
                            }));
                            i = {
                                status: 1,
                                segment: s,
                                expirationTimeoutId: setTimeout(f((function() {
                                    u("segment_duration_limit")
                                })), 3e4)
                            }
                        }
                    }
                    return {
                        addRecord: function(t) {
                            switch (i.status) {
                                case 0:
                                    s(i.nextSegmentCreationReason, t);
                                    break;
                                case 1:
                                    i.segment.addRecord(t)
                            }
                        },
                        stop: function() {
                            u("stop"), o(), a()
                        }
                    }
                }(t, (function() {
                    return function(t, e, n) {
                        var r = e.findTrackedSession(),
                            i = n.findView();
                        if (!r || !i) return;
                        return {
                            application: {
                                id: t
                            },
                            session: {
                                id: r.id
                            },
                            view: {
                                id: i.id
                            }
                        }
                    }(e, n, r)
                }), i, o)
            }
            var Xo = n(34378),
                Yo = {
                    status: 0
                };

            function Ko(t, e) {
                switch (void 0 === e && (e = Xo.x), Yo.status) {
                    case 0:
                        Yo = {
                                status: 1,
                                callbacks: [t]
                            },
                            function(t) {
                                void 0 === t && (t = Xo.x);
                                try {
                                    var e = t();
                                    e.addEventListener("error", f($o)), e.addEventListener("message", f((function(t) {
                                        var n, r = t.data;
                                        "errored" === r.type ? $o(r.error) : "initialized" === r.type && (n = e, 1 === Yo.status && (Yo.callbacks.forEach((function(t) {
                                            return t(n)
                                        })), Yo = {
                                            status: 3,
                                            worker: n
                                        }))
                                    }))), e.postMessage({
                                        action: "init"
                                    })
                                } catch (n) {
                                    $o(n)
                                }
                            }(e);
                        break;
                    case 1:
                        Yo.callbacks.push(t);
                        break;
                    case 2:
                        t();
                        break;
                    case 3:
                        t(Yo.worker)
                }
            }

            function $o(t) {
                1 === Yo.status ? (i.error("Session Replay recording failed to start: an error occurred while creating the Worker:", t), t instanceof Event || t instanceof Error && k(t.message, "Content Security Policy") ? i.error("Please make sure CSP is correctly configured https://docs.datadoghq.com/real_user_monitoring/faq/content_security_policy") : ce(t), Yo.callbacks.forEach((function(t) {
                    return t()
                })), Yo = {
                    status: 2
                }) : ce(t)
            }
            var Jo = function(t, e) {
                    if (void 0 === e && (e = Ko), pt() || "function" !== typeof Array.from || "function" !== typeof CSSSupportsRule) return {
                        start: S,
                        stop: S,
                        getReplayStats: function() {},
                        onRumStart: S,
                        isRecording: function() {
                            return !1
                        }
                    };
                    var n = {
                            status: 0
                        },
                        r = function() {
                            n = {
                                status: 1
                            }
                        },
                        i = function() {
                            n = {
                                status: 0
                            }
                        };
                    return {
                        start: function() {
                            return r()
                        },
                        stop: function() {
                            return i()
                        },
                        getReplayStats: jo,
                        onRumStart: function(o, a, u, s) {
                            o.subscribe(7, (function() {
                                2 !== n.status && 3 !== n.status || (i(), n = {
                                    status: 1
                                })
                            })), o.subscribe(8, (function() {
                                1 === n.status && r()
                            })), r = function() {
                                var r = u.findTrackedSession();
                                r && r.sessionReplayAllowed ? 2 !== n.status && 3 !== n.status && (n = {
                                    status: 2
                                }, q("interactive", (function() {
                                    2 === n.status && e((function(e) {
                                        if (2 === n.status)
                                            if (e) {
                                                var r = t(o, a, u, s, e).stop;
                                                n = {
                                                    status: 3,
                                                    stopRecording: r
                                                }
                                            } else n = {
                                                status: 0
                                            }
                                    }))
                                }))) : n = {
                                    status: 1
                                }
                            }, i = function() {
                                0 !== n.status && (3 === n.status && n.stopRecording(), n = {
                                    status: 0
                                })
                            }, 1 === n.status && r()
                        },
                        isRecording: function() {
                            return 3 === n.status
                        }
                    }
                }((function(t, e, n, r, i, o) {
                    var a = o || ai(e.sessionReplayEndpointBuilder, Go, (function(e) {
                            t.notify(12, {
                                error: e
                            })
                        })),
                        u = Wo(t, e.applicationId, n, r, a, i),
                        s = u.addRecord,
                        c = u.stop,
                        f = Po({
                            emit: s,
                            configuration: e,
                            lifeCycle: t
                        }),
                        l = f.stop,
                        d = f.takeSubsequentFullSnapshot,
                        p = f.flushMutations,
                        v = t.subscribe(4, (function() {
                            p(), s({
                                timestamp: Q(),
                                type: mi
                            })
                        })).unsubscribe,
                        m = t.subscribe(2, (function(t) {
                            d(t.startClocks.timeStamp)
                        })).unsubscribe;
                    return {
                        stop: function() {
                            v(), m(), l(), c()
                        }
                    }
                })),
                Zo = function(t, e, n) {
                    var r = (void 0 === n ? {} : n).ignoreInitIfSyntheticsWillInjectRum,
                        o = void 0 === r || r,
                        a = !1,
                        u = W(),
                        s = W(),
                        d = function() {},
                        v = function() {},
                        m = new Y,
                        g = function(t, e) {
                            void 0 === e && (e = Q()), m.add((function() {
                                return g(t, e)
                            }))
                        },
                        b = function(t, e) {
                            void 0 === e && (e = et()), m.add((function() {
                                return b(t, e)
                            }))
                        },
                        w = function(t, e) {
                            void 0 === e && (e = {
                                context: u.getContext(),
                                user: s.getContext()
                            }), m.add((function() {
                                return w(t, e)
                            }))
                        },
                        S = function(t, e) {
                            void 0 === e && (e = {
                                context: u.getContext(),
                                user: s.getContext()
                            }), m.add((function() {
                                return S(t, e)
                            }))
                        };

                    function C(n, r, i) {
                        var o = t(n, r, (function() {
                            return {
                                user: s.getContext(),
                                context: u.getContext(),
                                hasReplay: !!e.isRecording() || void 0
                            }
                        }), e, i);
                        b = o.startView, w = o.addAction, S = o.addError, g = o.addTiming, d = o.getInternalContext, m.drain(), e.onRumStart(o.lifeCycle, r, o.session, o.viewContexts)
                    }
                    var T = f((function(t) {
                            b("object" === typeof t ? t : {
                                name: t
                            })
                        })),
                        k = function(t) {
                            var e = h({
                                version: "4.24.1",
                                onReady: function(t) {
                                    t()
                                }
                            }, t);
                            return Object.defineProperty(e, "_setDebug", {
                                get: function() {
                                    return c
                                },
                                enumerable: !1
                            }), e
                        }({
                            init: f((function(t) {
                                if (!o || !lt()) {
                                    if (pt()) t = function(t) {
                                        return h({}, t, {
                                            applicationId: "00000000-aaaa-0000-aaaa-000000000000",
                                            clientToken: "empty",
                                            sampleRate: 100
                                        })
                                    }(t);
                                    else if (! function(t) {
                                            if (! function(t) {
                                                    if (void 0 === document.cookie || null === document.cookie) return !1;
                                                    try {
                                                        var e = "dd_cookie_test_".concat(y()),
                                                            n = "test";
                                                        st(e, n, p, t);
                                                        var r = ct(e) === n;
                                                        return ft(e, t), r
                                                    } catch (o) {
                                                        return i.error(o), !1
                                                    }
                                                }(Zt(t))) return i.warn("Cookies are not authorized, we will not send any data."), !1;
                                            if ("file:" === window.location.protocol) return i.error("Execution is not allowed in the current context."), !1;
                                            return !0
                                        }(t)) return;
                                    if (function(t) {
                                            if (a) return t.silentMultipleInit || i.error("DD_RUM is already initialized."), !1;
                                            return !0
                                        }(t)) {
                                        var e = function(t) {
                                            var e, n, r, o, a;
                                            if (t.applicationId)
                                                if (void 0 === t.sessionReplaySampleRate || _(t.sessionReplaySampleRate)) {
                                                    var u = null !== (e = t.premiumSampleRate) && void 0 !== e ? e : t.replaySampleRate;
                                                    if (void 0 !== u && void 0 !== t.sessionReplaySampleRate && (i.warn("Ignoring Premium Sample Rate because Session Replay Sample Rate is set"), u = void 0), void 0 === u || _(u))
                                                        if (void 0 === t.tracingSampleRate || _(t.tracingSampleRate)) {
                                                            if (void 0 !== t.allowedTracingOrigins) {
                                                                if (!Array.isArray(t.allowedTracingOrigins)) return void i.error("Allowed Tracing Origins should be an array");
                                                                if (0 !== t.allowedTracingOrigins.length && void 0 === t.service) return void i.error("Service need to be configured when tracing is enabled")
                                                            }
                                                            if (void 0 === t.excludedActivityUrls || Array.isArray(t.excludedActivityUrls)) {
                                                                var s = Jt(t);
                                                                if (s) {
                                                                    var c, f, l = !!t.trackFrustrations;
                                                                    return h({
                                                                        applicationId: t.applicationId,
                                                                        version: t.version,
                                                                        actionNameAttribute: t.actionNameAttribute,
                                                                        sessionReplaySampleRate: null !== (r = null !== (n = t.sessionReplaySampleRate) && void 0 !== n ? n : u) && void 0 !== r ? r : 100,
                                                                        oldPlansBehavior: void 0 === t.sessionReplaySampleRate,
                                                                        allowedTracingOrigins: null !== (o = t.allowedTracingOrigins) && void 0 !== o ? o : [],
                                                                        tracingSampleRate: t.tracingSampleRate,
                                                                        excludedActivityUrls: null !== (a = t.excludedActivityUrls) && void 0 !== a ? a : [],
                                                                        trackInteractions: !!t.trackInteractions || l,
                                                                        trackFrustrations: l,
                                                                        trackViewsManually: !!t.trackViewsManually,
                                                                        trackResources: t.trackResources,
                                                                        trackLongTasks: t.trackLongTasks,
                                                                        defaultPrivacyLevel: (c = $t, f = t.defaultPrivacyLevel, Object.keys(c).some((function(t) {
                                                                            return c[t] === f
                                                                        })) ? t.defaultPrivacyLevel : $t.MASK_USER_INPUT)
                                                                    }, s)
                                                                }
                                                            } else i.error("Excluded Activity Urls should be an array")
                                                        } else i.error("Tracing Sample Rate should be a number between 0 and 100");
                                                    else i.error("Premium Sample Rate should be a number between 0 and 100")
                                                } else i.error("Session Replay Sample Rate should be a number between 0 and 100");
                                            else i.error("Application ID is not configured, no RUM data will be collected.")
                                        }(t);
                                        if (e) {
                                            if (e.trackViewsManually) {
                                                var n = m;
                                                m = new Y, b = function(n) {
                                                    C(t, e, n)
                                                }, n.drain()
                                            } else C(t, e);
                                            v = function() {
                                                return V(t)
                                            }, a = !0
                                        }
                                    }
                                }
                            })),
                            addRumGlobalContext: f(u.add),
                            setGlobalContextProperty: f(u.setContextProperty),
                            removeRumGlobalContext: f(u.remove),
                            removeGlobalContextProperty: f(u.removeContextProperty),
                            getRumGlobalContext: f(u.get),
                            getGlobalContext: f(u.getContext),
                            setRumGlobalContext: f(u.set),
                            setGlobalContext: f(u.setContext),
                            clearGlobalContext: f(u.clearContext),
                            getInternalContext: f((function(t) {
                                return d(t)
                            })),
                            getInitConfiguration: f((function() {
                                return v()
                            })),
                            addAction: f((function(t, e) {
                                w({
                                    name: t,
                                    context: V(e),
                                    startClocks: et(),
                                    type: "custom"
                                })
                            })),
                            addError: function(t, e) {
                                var n = Pt();
                                l((function() {
                                    S({
                                        error: t,
                                        handlingStack: n,
                                        context: V(e),
                                        startClocks: et()
                                    })
                                }))
                            },
                            addTiming: f((function(t, e) {
                                g(t, e)
                            })),
                            setUser: f((function(t) {
                                (function(t) {
                                    var e = "object" === F(t);
                                    return e || i.error("Unsupported user:", t), e
                                })(t) && s.setContext(Bt(t))
                            })),
                            getUser: f(s.getContext),
                            setUserProperty: f((function(t, e) {
                                var n, r = Bt((n = {}, n[t] = e, n))[t];
                                s.setContextProperty(t, r)
                            })),
                            removeUserProperty: f(s.removeContextProperty),
                            removeUser: f(s.clearContext),
                            clearUser: f(s.clearContext),
                            startView: T,
                            startSessionReplayRecording: f(e.start),
                            stopSessionReplayRecording: f(e.stop)
                        });
                    return k
                }((function(t, e, n, r, i) {
                    var o = new Qe,
                        a = function(t) {
                            var e = ue("browser-rum-sdk", t);
                            if (pt()) {
                                var n = dt();
                                e.observable.subscribe((function(t) {
                                    return n.send("internal_telemetry", t)
                                }))
                            }
                            return e
                        }(e);
                    a.setContextProvider((function() {
                        var t, n;
                        return {
                            application: {
                                id: e.applicationId
                            },
                            session: {
                                id: null === (t = c.findTrackedSession()) || void 0 === t ? void 0 : t.id
                            },
                            view: {
                                id: null === (n = v.findView()) || void 0 === n ? void 0 : n.id
                            },
                            action: {
                                id: b.findActionId()
                            }
                        }
                    }));
                    var u = function(t) {
                        o.notify(12, {
                            error: t
                        })
                    };
                    if (pt()) ! function(t) {
                        var e = dt();
                        t.subscribe(11, (function(t) {
                            e.send("rum", t)
                        }))
                    }(o);
                    else {
                        var s = function() {
                            var t = new Qt((function() {
                                var e = B(document, "visibilitychange", (function() {
                                        "hidden" === document.visibilityState && t.notify({
                                            reason: "visibility_hidden"
                                        })
                                    }), {
                                        capture: !0
                                    }).stop,
                                    n = B(window, "beforeunload", (function() {
                                        t.notify({
                                            reason: "before_unload"
                                        })
                                    })).stop;
                                return function() {
                                    e(), n()
                                }
                            }));
                            return t
                        }();
                        s.subscribe((function(t) {
                            o.notify(9, t)
                        })), ci(e, o, a.observable, u, s)
                    }
                    var c = pt() ? function() {
                            var t = {
                                id: "00000000-aaaa-0000-aaaa-000000000000",
                                plan: 1,
                                sessionReplayAllowed: !1,
                                longTaskAllowed: !0,
                                resourceAllowed: !0
                            };
                            return {
                                findTrackedSession: function() {
                                    return t
                                }
                            }
                        }() : $r(e, o),
                        l = function() {
                            var t = de(),
                                e = new Qt((function() {
                                    if (t) {
                                        var n = new t(f((function() {
                                            return e.notify()
                                        })));
                                        return n.observe(document, {
                                                attributes: !0,
                                                characterData: !0,
                                                childList: !0,
                                                subtree: !0
                                            }),
                                            function() {
                                                return n.disconnect()
                                            }
                                    }
                                }));
                            return e
                        }(),
                        d = fi(location),
                        p = function(t, e, n, r, i, o, a, u) {
                            var s = function(t) {
                                    var e = new rn(144e5);
                                    return t.subscribe(2, (function(t) {
                                        e.add(function(t) {
                                            return {
                                                service: t.service,
                                                version: t.version,
                                                id: t.id,
                                                name: t.name
                                            }
                                        }(t), t.startClocks.relative)
                                    })), t.subscribe(4, (function(t) {
                                        var n = t.endClocks;
                                        e.closeActive(n.relative)
                                    })), t.subscribe(8, (function() {
                                        e.reset()
                                    })), {
                                        findView: function(t) {
                                            return e.find(t)
                                        },
                                        stop: function() {
                                            e.stop()
                                        }
                                    }
                                }(t),
                                c = function(t, e, n) {
                                    var r, i = new rn(144e5);
                                    t.subscribe(4, (function(t) {
                                        var e = t.endClocks;
                                        i.closeActive(e.relative)
                                    })), t.subscribe(2, (function(t) {
                                        var e = t.startClocks,
                                            o = n.href;
                                        i.add(a({
                                            url: o,
                                            referrer: r || document.referrer
                                        }), e.relative), r = o
                                    }));
                                    var o = e.subscribe((function(t) {
                                        var e = t.newLocation,
                                            n = i.find();
                                        if (n) {
                                            var r = tt();
                                            i.closeActive(r), i.add(a({
                                                url: e.href,
                                                referrer: n.referrer
                                            }), r)
                                        }
                                    }));

                                    function a(t) {
                                        return {
                                            url: t.url,
                                            referrer: t.referrer
                                        }
                                    }
                                    return {
                                        findUrl: function(t) {
                                            return i.find(t)
                                        },
                                        stop: function() {
                                            o.unsubscribe(), i.stop()
                                        }
                                    }
                                }(t, i, n),
                                f = Xe(),
                                l = function(t, e, n, r) {
                                    t.subscribe(1, (function(e) {
                                        return t.notify(10, ir(e, r))
                                    }));
                                    var i = {
                                        findActionId: S
                                    };
                                    return n.trackInteractions && (i = nr(t, e, n).actionContexts), {
                                        addAction: function(e, n) {
                                            t.notify(10, h({
                                                savedCommonContext: n
                                            }, ir(e, r)))
                                        },
                                        actionContexts: i
                                    }
                                }(t, o, e, f),
                                d = l.addAction,
                                p = l.actionContexts;
                            return Ge(e, t, r, s, c, p, a, u), {
                                viewContexts: s,
                                foregroundContexts: f,
                                urlContexts: c,
                                addAction: d,
                                actionContexts: p,
                                stop: function() {
                                    s.stop(), f.stop()
                                }
                            }
                        }(o, e, location, c, d, l, n, u),
                        v = p.viewContexts,
                        m = p.foregroundContexts,
                        g = p.urlContexts,
                        b = p.actionContexts,
                        w = p.addAction;
                    ! function(t) {
                        ae.telemetryConfigurationEnabled && fe({
                            type: re,
                            configuration: t
                        })
                    }(function(t) {
                        var e = function(t) {
                            return {
                                session_sample_rate: t.sampleRate,
                                telemetry_sample_rate: t.telemetrySampleRate,
                                telemetry_configuration_sample_rate: t.telemetryConfigurationSampleRate,
                                use_before_send: !!t.beforeSend,
                                use_cross_site_session_cookie: t.useCrossSiteSessionCookie,
                                use_secure_session_cookie: t.useSecureSessionCookie,
                                use_proxy: void 0 !== t.proxyUrl ? !!t.proxyUrl : void 0,
                                silent_multiple_init: t.silentMultipleInit,
                                track_session_across_subdomains: t.trackSessionAcrossSubdomains,
                                track_resources: t.trackResources,
                                track_long_task: t.trackLongTasks
                            }
                        }(t);
                        return h({
                            premium_sample_rate: t.premiumSampleRate,
                            replay_sample_rate: t.replaySampleRate,
                            session_replay_sample_rate: t.sessionReplaySampleRate,
                            trace_sample_rate: t.tracingSampleRate,
                            action_name_attribute: t.actionNameAttribute,
                            use_allowed_tracing_origins: Array.isArray(t.allowedTracingOrigins) && t.allowedTracingOrigins.length > 0,
                            default_privacy_level: t.defaultPrivacyLevel,
                            use_excluded_activity_urls: Array.isArray(t.allowedTracingOrigins) && t.allowedTracingOrigins.length > 0,
                            track_frustrations: t.trackFrustrations,
                            track_views_manually: t.trackViewsManually,
                            track_interactions: t.trackInteractions
                        }, e)
                    }(t)),
                    function(t, e) {
                        t.subscribe(0, (function(n) {
                            for (var r = 0, i = n; r < i.length; r++) {
                                var o = i[r];
                                if ("longtask" !== o.entryType) break;
                                var a = e.findTrackedSession(o.startTime);
                                if (!a || !a.longTaskAllowed) break;
                                var u = K(o.startTime),
                                    s = {
                                        date: u.timeStamp,
                                        long_task: {
                                            id: y(),
                                            duration: J(o.duration)
                                        },
                                        type: "long_task",
                                        _dd: {
                                            discarded: !1
                                        }
                                    };
                                t.notify(10, {
                                    rawRumEvent: s,
                                    startTime: u.relative,
                                    domainContext: {
                                        performanceEntry: o.toJSON()
                                    }
                                })
                            }
                        }))
                    }(o, c), wr(o, e, c);
                    var C = Nr(o, e, location, l, d, m, r, i),
                        T = C.addTiming,
                        k = C.startView,
                        E = gr(o, m).addError;
                    Cn(o, e, c), Ne(o, e);
                    var x = function(t, e, n, r, i) {
                        return {
                            get: function(o) {
                                var a = n.findView(o),
                                    u = i.findUrl(o),
                                    s = e.findTrackedSession(o);
                                if (s && a && u) {
                                    var c = r.findActionId(o);
                                    return {
                                        application_id: t,
                                        session_id: s.id,
                                        user_action: c ? {
                                            id: c
                                        } : void 0,
                                        view: {
                                            id: a.id,
                                            name: a.name,
                                            referrer: u.referrer,
                                            url: u.url
                                        }
                                    }
                                }
                            }
                        }
                    }(e.applicationId, c, v, b, g);
                    return {
                        addAction: w,
                        addError: E,
                        addTiming: T,
                        startView: k,
                        lifeCycle: o,
                        viewContexts: v,
                        session: c,
                        getInternalContext: x.get
                    }
                }), Jo);
            ! function(t, e, n) {
                var r = t[e];
                t[e] = n, r && r.q && r.q.forEach((function(t) {
                    return o(t, "onReady callback threw an error:")()
                }))
            }(L(), "DD_RUM", Zo)
        }
    }
]);
//# sourceMappingURL=42977.d6761ca492e65965.js.map