(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [85530], {
        75627: function() {},
        29631: function(e, t, s) {
            "use strict";
            s.d(t, {
                tq: function() {
                    return y
                },
                o5: function() {
                    return T
                }
            });
            var i = s(27378),
                n = s(18455);

            function a(e) {
                return "object" === typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
            }

            function r(e, t) {
                const s = ["__proto__", "constructor", "prototype"];
                Object.keys(t).filter((e => s.indexOf(e) < 0)).forEach((s => {
                    "undefined" === typeof e[s] ? e[s] = t[s] : a(t[s]) && a(e[s]) && Object.keys(t[s]).length > 0 ? t[s].__swiper__ ? e[s] = t[s] : r(e[s], t[s]) : e[s] = t[s]
                }))
            }

            function l(e) {
                return void 0 === e && (e = {}), e.navigation && "undefined" === typeof e.navigation.nextEl && "undefined" === typeof e.navigation.prevEl
            }

            function o(e) {
                return void 0 === e && (e = {}), e.pagination && "undefined" === typeof e.pagination.el
            }

            function d(e) {
                return void 0 === e && (e = {}), e.scrollbar && "undefined" === typeof e.scrollbar.el
            }

            function c(e) {
                void 0 === e && (e = "");
                const t = e.split(" ").map((e => e.trim())).filter((e => !!e)),
                    s = [];
                return t.forEach((e => {
                    s.indexOf(e) < 0 && s.push(e)
                })), s.join(" ")
            }
            const p = ["modules", "init", "_direction", "touchEventsTarget", "initialSlide", "_speed", "cssMode", "updateOnWindowResize", "resizeObserver", "nested", "focusableElements", "_enabled", "_width", "_height", "preventInteractionOnTransition", "userAgent", "url", "_edgeSwipeDetection", "_edgeSwipeThreshold", "_freeMode", "_autoHeight", "setWrapperSize", "virtualTranslate", "_effect", "breakpoints", "_spaceBetween", "_slidesPerView", "maxBackfaceHiddenSlides", "_grid", "_slidesPerGroup", "_slidesPerGroupSkip", "_slidesPerGroupAuto", "_centeredSlides", "_centeredSlidesBounds", "_slidesOffsetBefore", "_slidesOffsetAfter", "normalizeSlideIndex", "_centerInsufficientSlides", "_watchOverflow", "roundLengths", "touchRatio", "touchAngle", "simulateTouch", "_shortSwipes", "_longSwipes", "longSwipesRatio", "longSwipesMs", "_followFinger", "allowTouchMove", "_threshold", "touchMoveStopPropagation", "touchStartPreventDefault", "touchStartForcePreventDefault", "touchReleaseOnEdges", "uniqueNavElements", "_resistance", "_resistanceRatio", "_watchSlidesProgress", "_grabCursor", "preventClicks", "preventClicksPropagation", "_slideToClickedSlide", "_preloadImages", "updateOnImagesReady", "_loop", "_loopAdditionalSlides", "_loopedSlides", "_loopedSlidesLimit", "_loopFillGroupWithBlank", "loopPreventsSlide", "_rewind", "_allowSlidePrev", "_allowSlideNext", "_swipeHandler", "_noSwiping", "noSwipingClass", "noSwipingSelector", "passiveListeners", "containerModifierClass", "slideClass", "slideBlankClass", "slideActiveClass", "slideDuplicateActiveClass", "slideVisibleClass", "slideDuplicateClass", "slideNextClass", "slideDuplicateNextClass", "slidePrevClass", "slideDuplicatePrevClass", "wrapperClass", "runCallbacksOnInit", "observer", "observeParents", "observeSlideChildren", "a11y", "_autoplay", "_controller", "coverflowEffect", "cubeEffect", "fadeEffect", "flipEffect", "creativeEffect", "cardsEffect", "hashNavigation", "history", "keyboard", "lazy", "mousewheel", "_navigation", "_pagination", "parallax", "_scrollbar", "_thumbs", "virtual", "zoom"];

            function u(e, t) {
                let s = t.slidesPerView;
                if (t.breakpoints) {
                    const e = n.ZP.prototype.getBreakpoint(t.breakpoints),
                        i = e in t.breakpoints ? t.breakpoints[e] : void 0;
                    i && i.slidesPerView && (s = i.slidesPerView)
                }
                let i = Math.ceil(parseFloat(t.loopedSlides || s, 10));
                return i += t.loopAdditionalSlides, i > e.length && t.loopedSlidesLimit && (i = e.length), i
            }

            function f(e) {
                const t = [];
                return i.Children.toArray(e).forEach((e => {
                    e.type && "SwiperSlide" === e.type.displayName ? t.push(e) : e.props && e.props.children && f(e.props.children).forEach((e => t.push(e)))
                })), t
            }

            function h(e) {
                const t = [],
                    s = {
                        "container-start": [],
                        "container-end": [],
                        "wrapper-start": [],
                        "wrapper-end": []
                    };
                return i.Children.toArray(e).forEach((e => {
                    if (e.type && "SwiperSlide" === e.type.displayName) t.push(e);
                    else if (e.props && e.props.slot && s[e.props.slot]) s[e.props.slot].push(e);
                    else if (e.props && e.props.children) {
                        const i = f(e.props.children);
                        i.length > 0 ? i.forEach((e => t.push(e))) : s["container-end"].push(e)
                    } else s["container-end"].push(e)
                })), {
                    slides: t,
                    slots: s
                }
            }

            function m(e) {
                let {
                    swiper: t,
                    slides: s,
                    passedParams: i,
                    changedParams: n,
                    nextEl: l,
                    prevEl: o,
                    scrollbarEl: d,
                    paginationEl: c
                } = e;
                const p = n.filter((e => "children" !== e && "direction" !== e)),
                    {
                        params: u,
                        pagination: f,
                        navigation: h,
                        scrollbar: m,
                        virtual: g,
                        thumbs: v
                    } = t;
                let b, w, y, C, T;
                n.includes("thumbs") && i.thumbs && i.thumbs.swiper && u.thumbs && !u.thumbs.swiper && (b = !0), n.includes("controller") && i.controller && i.controller.control && u.controller && !u.controller.control && (w = !0), n.includes("pagination") && i.pagination && (i.pagination.el || c) && (u.pagination || !1 === u.pagination) && f && !f.el && (y = !0), n.includes("scrollbar") && i.scrollbar && (i.scrollbar.el || d) && (u.scrollbar || !1 === u.scrollbar) && m && !m.el && (C = !0), n.includes("navigation") && i.navigation && (i.navigation.prevEl || o) && (i.navigation.nextEl || l) && (u.navigation || !1 === u.navigation) && h && !h.prevEl && !h.nextEl && (T = !0);
                if (p.forEach((e => {
                        if (a(u[e]) && a(i[e])) r(u[e], i[e]);
                        else {
                            const n = i[e];
                            !0 !== n && !1 !== n || "navigation" !== e && "pagination" !== e && "scrollbar" !== e ? u[e] = i[e] : !1 === n && t[s = e] && (t[s].destroy(), "navigation" === s ? (u[s].prevEl = void 0, u[s].nextEl = void 0, t[s].prevEl = void 0, t[s].nextEl = void 0) : (u[s].el = void 0, t[s].el = void 0))
                        }
                        var s
                    })), p.includes("controller") && !w && t.controller && t.controller.control && u.controller && u.controller.control && (t.controller.control = u.controller.control), n.includes("children") && s && g && u.virtual.enabled ? (g.slides = s, g.update(!0)) : n.includes("children") && t.lazy && t.params.lazy.enabled && t.lazy.load(), b) {
                    v.init() && v.update(!0)
                }
                w && (t.controller.control = u.controller.control), y && (c && (u.pagination.el = c), f.init(), f.render(), f.update()), C && (d && (u.scrollbar.el = d), m.init(), m.updateSize(), m.setTranslate()), T && (l && (u.navigation.nextEl = l), o && (u.navigation.prevEl = o), h.init(), h.update()), n.includes("allowSlideNext") && (t.allowSlideNext = i.allowSlideNext), n.includes("allowSlidePrev") && (t.allowSlidePrev = i.allowSlidePrev), n.includes("direction") && t.changeDirection(i.direction, !1), t.update()
            }

            function g(e, t) {
                return "undefined" === typeof window ? (0, i.useEffect)(e, t) : (0, i.useLayoutEffect)(e, t)
            }
            const v = (0, i.createContext)(null),
                b = (0, i.createContext)(null);

            function w() {
                return w = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var s = arguments[t];
                        for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
                    }
                    return e
                }, w.apply(this, arguments)
            }
            const y = (0, i.forwardRef)((function(e, t) {
                let {
                    className: s,
                    tag: f = "div",
                    wrapperTag: v = "div",
                    children: y,
                    onSwiper: C,
                    ...T
                } = void 0 === e ? {} : e, E = !1;
                const [S, x] = (0, i.useState)("swiper"), [$, M] = (0, i.useState)(null), [k, P] = (0, i.useState)(!1), O = (0, i.useRef)(!1), L = (0, i.useRef)(null), z = (0, i.useRef)(null), D = (0, i.useRef)(null), I = (0, i.useRef)(null), _ = (0, i.useRef)(null), A = (0, i.useRef)(null), N = (0, i.useRef)(null), B = (0, i.useRef)(null), {
                    params: G,
                    passedParams: j,
                    rest: H,
                    events: F
                } = function(e, t) {
                    void 0 === e && (e = {}), void 0 === t && (t = !0);
                    const s = {
                            on: {}
                        },
                        i = {},
                        l = {};
                    r(s, n.ZP.defaults), r(s, n.ZP.extendedDefaults), s._emitClasses = !0, s.init = !1;
                    const o = {},
                        d = p.map((e => e.replace(/_/, ""))),
                        c = Object.assign({}, e);
                    return Object.keys(c).forEach((n => {
                        "undefined" !== typeof e[n] && (d.indexOf(n) >= 0 ? a(e[n]) ? (s[n] = {}, l[n] = {}, r(s[n], e[n]), r(l[n], e[n])) : (s[n] = e[n], l[n] = e[n]) : 0 === n.search(/on[A-Z]/) && "function" === typeof e[n] ? t ? i[`${n[2].toLowerCase()}${n.substr(3)}`] = e[n] : s.on[`${n[2].toLowerCase()}${n.substr(3)}`] = e[n] : o[n] = e[n])
                    })), ["navigation", "pagination", "scrollbar"].forEach((e => {
                        !0 === s[e] && (s[e] = {}), !1 === s[e] && delete s[e]
                    })), {
                        params: s,
                        passedParams: l,
                        rest: o,
                        events: i
                    }
                }(T), {
                    slides: V,
                    slots: R
                } = h(y), q = () => {
                    P(!k)
                };
                Object.assign(G.on, {
                    _containerClasses(e, t) {
                        x(t)
                    }
                });
                const W = () => {
                    if (Object.assign(G.on, F), E = !0, z.current = new n.ZP(G), z.current.loopCreate = () => {}, z.current.loopDestroy = () => {}, G.loop && (z.current.loopedSlides = u(V, G)), z.current.virtual && z.current.params.virtual.enabled) {
                        z.current.virtual.slides = V;
                        const e = {
                            cache: !1,
                            slides: V,
                            renderExternal: M,
                            renderExternalUpdate: !1
                        };
                        r(z.current.params.virtual, e), r(z.current.originalParams.virtual, e)
                    }
                };
                L.current || W(), z.current && z.current.on("_beforeBreakpoint", q);
                return (0, i.useEffect)((() => () => {
                    z.current && z.current.off("_beforeBreakpoint", q)
                })), (0, i.useEffect)((() => {
                    !O.current && z.current && (z.current.emitSlidesClasses(), O.current = !0)
                })), g((() => {
                    if (t && (t.current = L.current), L.current) return z.current.destroyed && W(),
                        function(e, t) {
                            let {
                                el: s,
                                nextEl: i,
                                prevEl: n,
                                paginationEl: a,
                                scrollbarEl: r,
                                swiper: c
                            } = e;
                            l(t) && i && n && (c.params.navigation.nextEl = i, c.originalParams.navigation.nextEl = i, c.params.navigation.prevEl = n, c.originalParams.navigation.prevEl = n), o(t) && a && (c.params.pagination.el = a, c.originalParams.pagination.el = a), d(t) && r && (c.params.scrollbar.el = r, c.originalParams.scrollbar.el = r), c.init(s)
                        }({
                            el: L.current,
                            nextEl: _.current,
                            prevEl: A.current,
                            paginationEl: N.current,
                            scrollbarEl: B.current,
                            swiper: z.current
                        }, G), C && C(z.current), () => {
                            z.current && !z.current.destroyed && z.current.destroy(!0, !1)
                        }
                }), []), g((() => {
                    !E && F && z.current && Object.keys(F).forEach((e => {
                        z.current.on(e, F[e])
                    }));
                    const e = function(e, t, s, i, n) {
                        const r = [];
                        if (!t) return r;
                        const l = e => {
                            r.indexOf(e) < 0 && r.push(e)
                        };
                        if (s && i) {
                            const e = i.map(n),
                                t = s.map(n);
                            e.join("") !== t.join("") && l("children"), i.length !== s.length && l("children")
                        }
                        return p.filter((e => "_" === e[0])).map((e => e.replace(/_/, ""))).forEach((s => {
                            if (s in e && s in t)
                                if (a(e[s]) && a(t[s])) {
                                    const i = Object.keys(e[s]),
                                        n = Object.keys(t[s]);
                                    i.length !== n.length ? l(s) : (i.forEach((i => {
                                        e[s][i] !== t[s][i] && l(s)
                                    })), n.forEach((i => {
                                        e[s][i] !== t[s][i] && l(s)
                                    })))
                                } else e[s] !== t[s] && l(s)
                        })), r
                    }(j, D.current, V, I.current, (e => e.key));
                    return D.current = j, I.current = V, e.length && z.current && !z.current.destroyed && m({
                        swiper: z.current,
                        slides: V,
                        passedParams: j,
                        changedParams: e,
                        nextEl: _.current,
                        prevEl: A.current,
                        scrollbarEl: B.current,
                        paginationEl: N.current
                    }), () => {
                        F && z.current && Object.keys(F).forEach((e => {
                            z.current.off(e, F[e])
                        }))
                    }
                })), g((() => {
                    var e;
                    !(e = z.current) || e.destroyed || !e.params.virtual || e.params.virtual && !e.params.virtual.enabled || (e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.lazy && e.params.lazy.enabled && e.lazy.load(), e.parallax && e.params.parallax && e.params.parallax.enabled && e.parallax.setTranslate())
                }), [$]), i.createElement(f, w({
                    ref: L,
                    className: c(`${S}${s?` ${s}`:""}`)
                }, H), i.createElement(b.Provider, {
                    value: z.current
                }, R["container-start"], i.createElement(v, {
                    className: "swiper-wrapper"
                }, R["wrapper-start"], G.virtual ? function(e, t, s) {
                    if (!s) return null;
                    const n = e.isHorizontal() ? {
                        [e.rtlTranslate ? "right" : "left"]: `${s.offset}px`
                    } : {
                        top: `${s.offset}px`
                    };
                    return t.filter(((e, t) => t >= s.from && t <= s.to)).map((t => i.cloneElement(t, {
                        swiper: e,
                        style: n
                    })))
                }(z.current, V, $) : !G.loop || z.current && z.current.destroyed ? V.map((e => i.cloneElement(e, {
                    swiper: z.current
                }))) : function(e, t, s) {
                    const n = t.map(((t, s) => i.cloneElement(t, {
                        swiper: e,
                        "data-swiper-slide-index": s
                    })));

                    function a(e, t, n) {
                        return i.cloneElement(e, {
                            key: `${e.key}-duplicate-${t}-${n}`,
                            className: `${e.props.className||""} ${s.slideDuplicateClass}`
                        })
                    }
                    if (s.loopFillGroupWithBlank) {
                        const e = s.slidesPerGroup - n.length % s.slidesPerGroup;
                        if (e !== s.slidesPerGroup)
                            for (let t = 0; t < e; t += 1) {
                                const e = i.createElement("div", {
                                    className: `${s.slideClass} ${s.slideBlankClass}`
                                });
                                n.push(e)
                            }
                    }
                    "auto" !== s.slidesPerView || s.loopedSlides || (s.loopedSlides = n.length);
                    const r = u(n, s),
                        l = [],
                        o = [];
                    for (let i = 0; i < r; i += 1) {
                        const e = i - Math.floor(i / n.length) * n.length;
                        o.push(a(n[e], i, "append")), l.unshift(a(n[n.length - e - 1], i, "prepend"))
                    }
                    return e && (e.loopedSlides = r), [...l, ...n, ...o]
                }(z.current, V, G), R["wrapper-end"]), l(G) && i.createElement(i.Fragment, null, i.createElement("div", {
                    ref: A,
                    className: "swiper-button-prev"
                }), i.createElement("div", {
                    ref: _,
                    className: "swiper-button-next"
                })), d(G) && i.createElement("div", {
                    ref: B,
                    className: "swiper-scrollbar"
                }), o(G) && i.createElement("div", {
                    ref: N,
                    className: "swiper-pagination"
                }), R["container-end"]))
            }));

            function C() {
                return C = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var s = arguments[t];
                        for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
                    }
                    return e
                }, C.apply(this, arguments)
            }
            y.displayName = "Swiper";
            const T = (0, i.forwardRef)((function(e, t) {
                let {
                    tag: s = "div",
                    children: n,
                    className: a = "",
                    swiper: r,
                    zoom: l,
                    virtualIndex: o,
                    ...d
                } = void 0 === e ? {} : e;
                const p = (0, i.useRef)(null),
                    [u, f] = (0, i.useState)("swiper-slide");

                function h(e, t, s) {
                    t === p.current && f(s)
                }
                g((() => {
                    if (t && (t.current = p.current), p.current && r) {
                        if (!r.destroyed) return r.on("_slideClass", h), () => {
                            r && r.off("_slideClass", h)
                        };
                        "swiper-slide" !== u && f("swiper-slide")
                    }
                })), g((() => {
                    r && p.current && !r.destroyed && f(r.getSlideClasses(p.current))
                }), [r]);
                const m = {
                        isActive: u.indexOf("swiper-slide-active") >= 0 || u.indexOf("swiper-slide-duplicate-active") >= 0,
                        isVisible: u.indexOf("swiper-slide-visible") >= 0,
                        isDuplicate: u.indexOf("swiper-slide-duplicate") >= 0,
                        isPrev: u.indexOf("swiper-slide-prev") >= 0 || u.indexOf("swiper-slide-duplicate-prev") >= 0,
                        isNext: u.indexOf("swiper-slide-next") >= 0 || u.indexOf("swiper-slide-duplicate-next") >= 0
                    },
                    b = () => "function" === typeof n ? n(m) : n;
                return i.createElement(s, C({
                    ref: p,
                    className: c(`${u}${a?` ${a}`:""}`),
                    "data-swiper-slide-index": o
                }, d), i.createElement(v.Provider, {
                    value: m
                }, l ? i.createElement("div", {
                    className: "swiper-zoom-container",
                    "data-swiper-zoom": "number" === typeof l ? l : void 0
                }, b()) : b()))
            }));
            T.displayName = "SwiperSlide"
        },
        18455: function(e, t, s) {
            "use strict";

            function i(e) {
                return null !== e && "object" === typeof e && "constructor" in e && e.constructor === Object
            }

            function n(e = {}, t = {}) {
                Object.keys(t).forEach((s => {
                    "undefined" === typeof e[s] ? e[s] = t[s] : i(t[s]) && i(e[s]) && Object.keys(t[s]).length > 0 && n(e[s], t[s])
                }))
            }
            s.d(t, {
                pt: function() {
                    return de
                },
                Rv: function() {
                    return pe
                },
                N1: function() {
                    return se
                },
                Gk: function() {
                    return ie
                },
                W_: function() {
                    return ae
                },
                tl: function() {
                    return le
                },
                LW: function() {
                    return oe
                },
                o3: function() {
                    return ce
                },
                ZP: function() {
                    return te
                }
            });
            const a = {
                body: {},
                addEventListener() {},
                removeEventListener() {},
                activeElement: {
                    blur() {},
                    nodeName: ""
                },
                querySelector: () => null,
                querySelectorAll: () => [],
                getElementById: () => null,
                createEvent: () => ({
                    initEvent() {}
                }),
                createElement: () => ({
                    children: [],
                    childNodes: [],
                    style: {},
                    setAttribute() {},
                    getElementsByTagName: () => []
                }),
                createElementNS: () => ({}),
                importNode: () => null,
                location: {
                    hash: "",
                    host: "",
                    hostname: "",
                    href: "",
                    origin: "",
                    pathname: "",
                    protocol: "",
                    search: ""
                }
            };

            function r() {
                const e = "undefined" !== typeof document ? document : {};
                return n(e, a), e
            }
            const l = {
                document: a,
                navigator: {
                    userAgent: ""
                },
                location: {
                    hash: "",
                    host: "",
                    hostname: "",
                    href: "",
                    origin: "",
                    pathname: "",
                    protocol: "",
                    search: ""
                },
                history: {
                    replaceState() {},
                    pushState() {},
                    go() {},
                    back() {}
                },
                CustomEvent: function() {
                    return this
                },
                addEventListener() {},
                removeEventListener() {},
                getComputedStyle: () => ({
                    getPropertyValue: () => ""
                }),
                Image() {},
                Date() {},
                screen: {},
                setTimeout() {},
                clearTimeout() {},
                matchMedia: () => ({}),
                requestAnimationFrame: e => "undefined" === typeof setTimeout ? (e(), null) : setTimeout(e, 0),
                cancelAnimationFrame(e) {
                    "undefined" !== typeof setTimeout && clearTimeout(e)
                }
            };

            function o() {
                const e = "undefined" !== typeof window ? window : {};
                return n(e, l), e
            }
            class d extends Array {
                constructor(e) {
                    "number" === typeof e ? super(e) : (super(...e || []), function(e) {
                        const t = e.__proto__;
                        Object.defineProperty(e, "__proto__", {
                            get: () => t,
                            set(e) {
                                t.__proto__ = e
                            }
                        })
                    }(this))
                }
            }

            function c(e = []) {
                const t = [];
                return e.forEach((e => {
                    Array.isArray(e) ? t.push(...c(e)) : t.push(e)
                })), t
            }

            function p(e, t) {
                return Array.prototype.filter.call(e, t)
            }

            function u(e, t) {
                const s = o(),
                    i = r();
                let n = [];
                if (!t && e instanceof d) return e;
                if (!e) return new d(n);
                if ("string" === typeof e) {
                    const s = e.trim();
                    if (s.indexOf("<") >= 0 && s.indexOf(">") >= 0) {
                        let e = "div";
                        0 === s.indexOf("<li") && (e = "ul"), 0 === s.indexOf("<tr") && (e = "tbody"), 0 !== s.indexOf("<td") && 0 !== s.indexOf("<th") || (e = "tr"), 0 === s.indexOf("<tbody") && (e = "table"), 0 === s.indexOf("<option") && (e = "select");
                        const t = i.createElement(e);
                        t.innerHTML = s;
                        for (let s = 0; s < t.childNodes.length; s += 1) n.push(t.childNodes[s])
                    } else n = function(e, t) {
                        if ("string" !== typeof e) return [e];
                        const s = [],
                            i = t.querySelectorAll(e);
                        for (let n = 0; n < i.length; n += 1) s.push(i[n]);
                        return s
                    }(e.trim(), t || i)
                } else if (e.nodeType || e === s || e === i) n.push(e);
                else if (Array.isArray(e)) {
                    if (e instanceof d) return e;
                    n = e
                }
                return new d(function(e) {
                    const t = [];
                    for (let s = 0; s < e.length; s += 1) - 1 === t.indexOf(e[s]) && t.push(e[s]);
                    return t
                }(n))
            }
            u.fn = d.prototype;
            const f = "resize scroll".split(" ");

            function h(e) {
                return function(...t) {
                    if ("undefined" === typeof t[0]) {
                        for (let t = 0; t < this.length; t += 1) f.indexOf(e) < 0 && (e in this[t] ? this[t][e]() : u(this[t]).trigger(e));
                        return this
                    }
                    return this.on(e, ...t)
                }
            }
            h("click"), h("blur"), h("focus"), h("focusin"), h("focusout"), h("keyup"), h("keydown"), h("keypress"), h("submit"), h("change"), h("mousedown"), h("mousemove"), h("mouseup"), h("mouseenter"), h("mouseleave"), h("mouseout"), h("mouseover"), h("touchstart"), h("touchend"), h("touchmove"), h("resize"), h("scroll");
            const m = {
                addClass: function(...e) {
                    const t = c(e.map((e => e.split(" "))));
                    return this.forEach((e => {
                        e.classList.add(...t)
                    })), this
                },
                removeClass: function(...e) {
                    const t = c(e.map((e => e.split(" "))));
                    return this.forEach((e => {
                        e.classList.remove(...t)
                    })), this
                },
                hasClass: function(...e) {
                    const t = c(e.map((e => e.split(" "))));
                    return p(this, (e => t.filter((t => e.classList.contains(t))).length > 0)).length > 0
                },
                toggleClass: function(...e) {
                    const t = c(e.map((e => e.split(" "))));
                    this.forEach((e => {
                        t.forEach((t => {
                            e.classList.toggle(t)
                        }))
                    }))
                },
                attr: function(e, t) {
                    if (1 === arguments.length && "string" === typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
                    for (let s = 0; s < this.length; s += 1)
                        if (2 === arguments.length) this[s].setAttribute(e, t);
                        else
                            for (const t in e) this[s][t] = e[t], this[s].setAttribute(t, e[t]);
                    return this
                },
                removeAttr: function(e) {
                    for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
                    return this
                },
                transform: function(e) {
                    for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
                    return this
                },
                transition: function(e) {
                    for (let t = 0; t < this.length; t += 1) this[t].style.transitionDuration = "string" !== typeof e ? `${e}ms` : e;
                    return this
                },
                on: function(...e) {
                    let [t, s, i, n] = e;

                    function a(e) {
                        const t = e.target;
                        if (!t) return;
                        const n = e.target.dom7EventData || [];
                        if (n.indexOf(e) < 0 && n.unshift(e), u(t).is(s)) i.apply(t, n);
                        else {
                            const e = u(t).parents();
                            for (let t = 0; t < e.length; t += 1) u(e[t]).is(s) && i.apply(e[t], n)
                        }
                    }

                    function r(e) {
                        const t = e && e.target && e.target.dom7EventData || [];
                        t.indexOf(e) < 0 && t.unshift(e), i.apply(this, t)
                    }
                    "function" === typeof e[1] && ([t, i, n] = e, s = void 0), n || (n = !1);
                    const l = t.split(" ");
                    let o;
                    for (let d = 0; d < this.length; d += 1) {
                        const e = this[d];
                        if (s)
                            for (o = 0; o < l.length; o += 1) {
                                const t = l[o];
                                e.dom7LiveListeners || (e.dom7LiveListeners = {}), e.dom7LiveListeners[t] || (e.dom7LiveListeners[t] = []), e.dom7LiveListeners[t].push({
                                    listener: i,
                                    proxyListener: a
                                }), e.addEventListener(t, a, n)
                            } else
                                for (o = 0; o < l.length; o += 1) {
                                    const t = l[o];
                                    e.dom7Listeners || (e.dom7Listeners = {}), e.dom7Listeners[t] || (e.dom7Listeners[t] = []), e.dom7Listeners[t].push({
                                        listener: i,
                                        proxyListener: r
                                    }), e.addEventListener(t, r, n)
                                }
                    }
                    return this
                },
                off: function(...e) {
                    let [t, s, i, n] = e;
                    "function" === typeof e[1] && ([t, i, n] = e, s = void 0), n || (n = !1);
                    const a = t.split(" ");
                    for (let r = 0; r < a.length; r += 1) {
                        const e = a[r];
                        for (let t = 0; t < this.length; t += 1) {
                            const a = this[t];
                            let r;
                            if (!s && a.dom7Listeners ? r = a.dom7Listeners[e] : s && a.dom7LiveListeners && (r = a.dom7LiveListeners[e]), r && r.length)
                                for (let t = r.length - 1; t >= 0; t -= 1) {
                                    const s = r[t];
                                    i && s.listener === i || i && s.listener && s.listener.dom7proxy && s.listener.dom7proxy === i ? (a.removeEventListener(e, s.proxyListener, n), r.splice(t, 1)) : i || (a.removeEventListener(e, s.proxyListener, n), r.splice(t, 1))
                                }
                        }
                    }
                    return this
                },
                trigger: function(...e) {
                    const t = o(),
                        s = e[0].split(" "),
                        i = e[1];
                    for (let n = 0; n < s.length; n += 1) {
                        const a = s[n];
                        for (let s = 0; s < this.length; s += 1) {
                            const n = this[s];
                            if (t.CustomEvent) {
                                const s = new t.CustomEvent(a, {
                                    detail: i,
                                    bubbles: !0,
                                    cancelable: !0
                                });
                                n.dom7EventData = e.filter(((e, t) => t > 0)), n.dispatchEvent(s), n.dom7EventData = [], delete n.dom7EventData
                            }
                        }
                    }
                    return this
                },
                transitionEnd: function(e) {
                    const t = this;
                    return e && t.on("transitionend", (function s(i) {
                        i.target === this && (e.call(this, i), t.off("transitionend", s))
                    })), this
                },
                outerWidth: function(e) {
                    if (this.length > 0) {
                        if (e) {
                            const e = this.styles();
                            return this[0].offsetWidth + parseFloat(e.getPropertyValue("margin-right")) + parseFloat(e.getPropertyValue("margin-left"))
                        }
                        return this[0].offsetWidth
                    }
                    return null
                },
                outerHeight: function(e) {
                    if (this.length > 0) {
                        if (e) {
                            const e = this.styles();
                            return this[0].offsetHeight + parseFloat(e.getPropertyValue("margin-top")) + parseFloat(e.getPropertyValue("margin-bottom"))
                        }
                        return this[0].offsetHeight
                    }
                    return null
                },
                styles: function() {
                    const e = o();
                    return this[0] ? e.getComputedStyle(this[0], null) : {}
                },
                offset: function() {
                    if (this.length > 0) {
                        const e = o(),
                            t = r(),
                            s = this[0],
                            i = s.getBoundingClientRect(),
                            n = t.body,
                            a = s.clientTop || n.clientTop || 0,
                            l = s.clientLeft || n.clientLeft || 0,
                            d = s === e ? e.scrollY : s.scrollTop,
                            c = s === e ? e.scrollX : s.scrollLeft;
                        return {
                            top: i.top + d - a,
                            left: i.left + c - l
                        }
                    }
                    return null
                },
                css: function(e, t) {
                    const s = o();
                    let i;
                    if (1 === arguments.length) {
                        if ("string" !== typeof e) {
                            for (i = 0; i < this.length; i += 1)
                                for (const t in e) this[i].style[t] = e[t];
                            return this
                        }
                        if (this[0]) return s.getComputedStyle(this[0], null).getPropertyValue(e)
                    }
                    if (2 === arguments.length && "string" === typeof e) {
                        for (i = 0; i < this.length; i += 1) this[i].style[e] = t;
                        return this
                    }
                    return this
                },
                each: function(e) {
                    return e ? (this.forEach(((t, s) => {
                        e.apply(t, [t, s])
                    })), this) : this
                },
                html: function(e) {
                    if ("undefined" === typeof e) return this[0] ? this[0].innerHTML : null;
                    for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
                    return this
                },
                text: function(e) {
                    if ("undefined" === typeof e) return this[0] ? this[0].textContent.trim() : null;
                    for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
                    return this
                },
                is: function(e) {
                    const t = o(),
                        s = r(),
                        i = this[0];
                    let n, a;
                    if (!i || "undefined" === typeof e) return !1;
                    if ("string" === typeof e) {
                        if (i.matches) return i.matches(e);
                        if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
                        if (i.msMatchesSelector) return i.msMatchesSelector(e);
                        for (n = u(e), a = 0; a < n.length; a += 1)
                            if (n[a] === i) return !0;
                        return !1
                    }
                    if (e === s) return i === s;
                    if (e === t) return i === t;
                    if (e.nodeType || e instanceof d) {
                        for (n = e.nodeType ? [e] : e, a = 0; a < n.length; a += 1)
                            if (n[a] === i) return !0;
                        return !1
                    }
                    return !1
                },
                index: function() {
                    let e, t = this[0];
                    if (t) {
                        for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
                        return e
                    }
                },
                eq: function(e) {
                    if ("undefined" === typeof e) return this;
                    const t = this.length;
                    if (e > t - 1) return u([]);
                    if (e < 0) {
                        const s = t + e;
                        return u(s < 0 ? [] : [this[s]])
                    }
                    return u([this[e]])
                },
                append: function(...e) {
                    let t;
                    const s = r();
                    for (let i = 0; i < e.length; i += 1) {
                        t = e[i];
                        for (let e = 0; e < this.length; e += 1)
                            if ("string" === typeof t) {
                                const i = s.createElement("div");
                                for (i.innerHTML = t; i.firstChild;) this[e].appendChild(i.firstChild)
                            } else if (t instanceof d)
                            for (let s = 0; s < t.length; s += 1) this[e].appendChild(t[s]);
                        else this[e].appendChild(t)
                    }
                    return this
                },
                prepend: function(e) {
                    const t = r();
                    let s, i;
                    for (s = 0; s < this.length; s += 1)
                        if ("string" === typeof e) {
                            const n = t.createElement("div");
                            for (n.innerHTML = e, i = n.childNodes.length - 1; i >= 0; i -= 1) this[s].insertBefore(n.childNodes[i], this[s].childNodes[0])
                        } else if (e instanceof d)
                        for (i = 0; i < e.length; i += 1) this[s].insertBefore(e[i], this[s].childNodes[0]);
                    else this[s].insertBefore(e, this[s].childNodes[0]);
                    return this
                },
                next: function(e) {
                    return this.length > 0 ? e ? this[0].nextElementSibling && u(this[0].nextElementSibling).is(e) ? u([this[0].nextElementSibling]) : u([]) : this[0].nextElementSibling ? u([this[0].nextElementSibling]) : u([]) : u([])
                },
                nextAll: function(e) {
                    const t = [];
                    let s = this[0];
                    if (!s) return u([]);
                    for (; s.nextElementSibling;) {
                        const i = s.nextElementSibling;
                        e ? u(i).is(e) && t.push(i) : t.push(i), s = i
                    }
                    return u(t)
                },
                prev: function(e) {
                    if (this.length > 0) {
                        const t = this[0];
                        return e ? t.previousElementSibling && u(t.previousElementSibling).is(e) ? u([t.previousElementSibling]) : u([]) : t.previousElementSibling ? u([t.previousElementSibling]) : u([])
                    }
                    return u([])
                },
                prevAll: function(e) {
                    const t = [];
                    let s = this[0];
                    if (!s) return u([]);
                    for (; s.previousElementSibling;) {
                        const i = s.previousElementSibling;
                        e ? u(i).is(e) && t.push(i) : t.push(i), s = i
                    }
                    return u(t)
                },
                parent: function(e) {
                    const t = [];
                    for (let s = 0; s < this.length; s += 1) null !== this[s].parentNode && (e ? u(this[s].parentNode).is(e) && t.push(this[s].parentNode) : t.push(this[s].parentNode));
                    return u(t)
                },
                parents: function(e) {
                    const t = [];
                    for (let s = 0; s < this.length; s += 1) {
                        let i = this[s].parentNode;
                        for (; i;) e ? u(i).is(e) && t.push(i) : t.push(i), i = i.parentNode
                    }
                    return u(t)
                },
                closest: function(e) {
                    let t = this;
                    return "undefined" === typeof e ? u([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
                },
                find: function(e) {
                    const t = [];
                    for (let s = 0; s < this.length; s += 1) {
                        const i = this[s].querySelectorAll(e);
                        for (let e = 0; e < i.length; e += 1) t.push(i[e])
                    }
                    return u(t)
                },
                children: function(e) {
                    const t = [];
                    for (let s = 0; s < this.length; s += 1) {
                        const i = this[s].children;
                        for (let s = 0; s < i.length; s += 1) e && !u(i[s]).is(e) || t.push(i[s])
                    }
                    return u(t)
                },
                filter: function(e) {
                    return u(p(this, e))
                },
                remove: function() {
                    for (let e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
                    return this
                }
            };
            Object.keys(m).forEach((e => {
                Object.defineProperty(u.fn, e, {
                    value: m[e],
                    writable: !0
                })
            }));
            var g = u;

            function v(e, t) {
                return void 0 === t && (t = 0), setTimeout(e, t)
            }

            function b() {
                return Date.now()
            }

            function w(e, t) {
                void 0 === t && (t = "x");
                const s = o();
                let i, n, a;
                const r = function(e) {
                    const t = o();
                    let s;
                    return t.getComputedStyle && (s = t.getComputedStyle(e, null)), !s && e.currentStyle && (s = e.currentStyle), s || (s = e.style), s
                }(e);
                return s.WebKitCSSMatrix ? (n = r.transform || r.webkitTransform, n.split(",").length > 6 && (n = n.split(", ").map((e => e.replace(",", "."))).join(", ")), a = new s.WebKitCSSMatrix("none" === n ? "" : n)) : (a = r.MozTransform || r.OTransform || r.MsTransform || r.msTransform || r.transform || r.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), i = a.toString().split(",")), "x" === t && (n = s.WebKitCSSMatrix ? a.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])), "y" === t && (n = s.WebKitCSSMatrix ? a.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])), n || 0
            }

            function y(e) {
                return "object" === typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
            }

            function C(e) {
                return "undefined" !== typeof window && "undefined" !== typeof window.HTMLElement ? e instanceof HTMLElement : e && (1 === e.nodeType || 11 === e.nodeType)
            }

            function T() {
                const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
                    t = ["__proto__", "constructor", "prototype"];
                for (let s = 1; s < arguments.length; s += 1) {
                    const i = s < 0 || arguments.length <= s ? void 0 : arguments[s];
                    if (void 0 !== i && null !== i && !C(i)) {
                        const s = Object.keys(Object(i)).filter((e => t.indexOf(e) < 0));
                        for (let t = 0, n = s.length; t < n; t += 1) {
                            const n = s[t],
                                a = Object.getOwnPropertyDescriptor(i, n);
                            void 0 !== a && a.enumerable && (y(e[n]) && y(i[n]) ? i[n].__swiper__ ? e[n] = i[n] : T(e[n], i[n]) : !y(e[n]) && y(i[n]) ? (e[n] = {}, i[n].__swiper__ ? e[n] = i[n] : T(e[n], i[n])) : e[n] = i[n])
                        }
                    }
                }
                return e
            }

            function E(e, t, s) {
                e.style.setProperty(t, s)
            }

            function S(e) {
                let {
                    swiper: t,
                    targetPosition: s,
                    side: i
                } = e;
                const n = o(),
                    a = -t.translate;
                let r, l = null;
                const d = t.params.speed;
                t.wrapperEl.style.scrollSnapType = "none", n.cancelAnimationFrame(t.cssModeFrameID);
                const c = s > a ? "next" : "prev",
                    p = (e, t) => "next" === c && e >= t || "prev" === c && e <= t,
                    u = () => {
                        r = (new Date).getTime(), null === l && (l = r);
                        const e = Math.max(Math.min((r - l) / d, 1), 0),
                            o = .5 - Math.cos(e * Math.PI) / 2;
                        let c = a + o * (s - a);
                        if (p(c, s) && (c = s), t.wrapperEl.scrollTo({
                                [i]: c
                            }), p(c, s)) return t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.scrollSnapType = "", setTimeout((() => {
                            t.wrapperEl.style.overflow = "", t.wrapperEl.scrollTo({
                                [i]: c
                            })
                        })), void n.cancelAnimationFrame(t.cssModeFrameID);
                        t.cssModeFrameID = n.requestAnimationFrame(u)
                    };
                u()
            }
            let x, $, M;

            function k() {
                return x || (x = function() {
                    const e = o(),
                        t = r();
                    return {
                        smoothScroll: t.documentElement && "scrollBehavior" in t.documentElement.style,
                        touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch),
                        passiveListener: function() {
                            let t = !1;
                            try {
                                const s = Object.defineProperty({}, "passive", {
                                    get() {
                                        t = !0
                                    }
                                });
                                e.addEventListener("testPassiveListener", null, s)
                            } catch (s) {}
                            return t
                        }(),
                        gestures: "ongesturestart" in e
                    }
                }()), x
            }

            function P(e) {
                return void 0 === e && (e = {}), $ || ($ = function(e) {
                    let {
                        userAgent: t
                    } = void 0 === e ? {} : e;
                    const s = k(),
                        i = o(),
                        n = i.navigator.platform,
                        a = t || i.navigator.userAgent,
                        r = {
                            ios: !1,
                            android: !1
                        },
                        l = i.screen.width,
                        d = i.screen.height,
                        c = a.match(/(Android);?[\s\/]+([\d.]+)?/);
                    let p = a.match(/(iPad).*OS\s([\d_]+)/);
                    const u = a.match(/(iPod)(.*OS\s([\d_]+))?/),
                        f = !p && a.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                        h = "Win32" === n;
                    let m = "MacIntel" === n;
                    return !p && m && s.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${l}x${d}`) >= 0 && (p = a.match(/(Version)\/([\d.]+)/), p || (p = [0, 1, "13_0_0"]), m = !1), c && !h && (r.os = "android", r.android = !0), (p || f || u) && (r.os = "ios", r.ios = !0), r
                }(e)), $
            }

            function O() {
                return M || (M = function() {
                    const e = o();
                    return {
                        isSafari: function() {
                            const t = e.navigator.userAgent.toLowerCase();
                            return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0
                        }(),
                        isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
                    }
                }()), M
            }
            var L = {
                on(e, t, s) {
                    const i = this;
                    if (!i.eventsListeners || i.destroyed) return i;
                    if ("function" !== typeof t) return i;
                    const n = s ? "unshift" : "push";
                    return e.split(" ").forEach((e => {
                        i.eventsListeners[e] || (i.eventsListeners[e] = []), i.eventsListeners[e][n](t)
                    })), i
                },
                once(e, t, s) {
                    const i = this;
                    if (!i.eventsListeners || i.destroyed) return i;
                    if ("function" !== typeof t) return i;

                    function n() {
                        i.off(e, n), n.__emitterProxy && delete n.__emitterProxy;
                        for (var s = arguments.length, a = new Array(s), r = 0; r < s; r++) a[r] = arguments[r];
                        t.apply(i, a)
                    }
                    return n.__emitterProxy = t, i.on(e, n, s)
                },
                onAny(e, t) {
                    const s = this;
                    if (!s.eventsListeners || s.destroyed) return s;
                    if ("function" !== typeof e) return s;
                    const i = t ? "unshift" : "push";
                    return s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[i](e), s
                },
                offAny(e) {
                    const t = this;
                    if (!t.eventsListeners || t.destroyed) return t;
                    if (!t.eventsAnyListeners) return t;
                    const s = t.eventsAnyListeners.indexOf(e);
                    return s >= 0 && t.eventsAnyListeners.splice(s, 1), t
                },
                off(e, t) {
                    const s = this;
                    return !s.eventsListeners || s.destroyed ? s : s.eventsListeners ? (e.split(" ").forEach((e => {
                        "undefined" === typeof t ? s.eventsListeners[e] = [] : s.eventsListeners[e] && s.eventsListeners[e].forEach(((i, n) => {
                            (i === t || i.__emitterProxy && i.__emitterProxy === t) && s.eventsListeners[e].splice(n, 1)
                        }))
                    })), s) : s
                },
                emit() {
                    const e = this;
                    if (!e.eventsListeners || e.destroyed) return e;
                    if (!e.eventsListeners) return e;
                    let t, s, i;
                    for (var n = arguments.length, a = new Array(n), r = 0; r < n; r++) a[r] = arguments[r];
                    "string" === typeof a[0] || Array.isArray(a[0]) ? (t = a[0], s = a.slice(1, a.length), i = e) : (t = a[0].events, s = a[0].data, i = a[0].context || e), s.unshift(i);
                    return (Array.isArray(t) ? t : t.split(" ")).forEach((t => {
                        e.eventsAnyListeners && e.eventsAnyListeners.length && e.eventsAnyListeners.forEach((e => {
                            e.apply(i, [t, ...s])
                        })), e.eventsListeners && e.eventsListeners[t] && e.eventsListeners[t].forEach((e => {
                            e.apply(i, s)
                        }))
                    })), e
                }
            };
            var z = {
                updateSize: function() {
                    const e = this;
                    let t, s;
                    const i = e.$el;
                    t = "undefined" !== typeof e.params.width && null !== e.params.width ? e.params.width : i[0].clientWidth, s = "undefined" !== typeof e.params.height && null !== e.params.height ? e.params.height : i[0].clientHeight, 0 === t && e.isHorizontal() || 0 === s && e.isVertical() || (t = t - parseInt(i.css("padding-left") || 0, 10) - parseInt(i.css("padding-right") || 0, 10), s = s - parseInt(i.css("padding-top") || 0, 10) - parseInt(i.css("padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(s) && (s = 0), Object.assign(e, {
                        width: t,
                        height: s,
                        size: e.isHorizontal() ? t : s
                    }))
                },
                updateSlides: function() {
                    const e = this;

                    function t(t) {
                        return e.isHorizontal() ? t : {
                            width: "height",
                            "margin-top": "margin-left",
                            "margin-bottom ": "margin-right",
                            "margin-left": "margin-top",
                            "margin-right": "margin-bottom",
                            "padding-left": "padding-top",
                            "padding-right": "padding-bottom",
                            marginRight: "marginBottom"
                        }[t]
                    }

                    function s(e, s) {
                        return parseFloat(e.getPropertyValue(t(s)) || 0)
                    }
                    const i = e.params,
                        {
                            $wrapperEl: n,
                            size: a,
                            rtlTranslate: r,
                            wrongRTL: l
                        } = e,
                        o = e.virtual && i.virtual.enabled,
                        d = o ? e.virtual.slides.length : e.slides.length,
                        c = n.children(`.${e.params.slideClass}`),
                        p = o ? e.virtual.slides.length : c.length;
                    let u = [];
                    const f = [],
                        h = [];
                    let m = i.slidesOffsetBefore;
                    "function" === typeof m && (m = i.slidesOffsetBefore.call(e));
                    let g = i.slidesOffsetAfter;
                    "function" === typeof g && (g = i.slidesOffsetAfter.call(e));
                    const v = e.snapGrid.length,
                        b = e.slidesGrid.length;
                    let w = i.spaceBetween,
                        y = -m,
                        C = 0,
                        T = 0;
                    if ("undefined" === typeof a) return;
                    "string" === typeof w && w.indexOf("%") >= 0 && (w = parseFloat(w.replace("%", "")) / 100 * a), e.virtualSize = -w, r ? c.css({
                        marginLeft: "",
                        marginBottom: "",
                        marginTop: ""
                    }) : c.css({
                        marginRight: "",
                        marginBottom: "",
                        marginTop: ""
                    }), i.centeredSlides && i.cssMode && (E(e.wrapperEl, "--swiper-centered-offset-before", ""), E(e.wrapperEl, "--swiper-centered-offset-after", ""));
                    const S = i.grid && i.grid.rows > 1 && e.grid;
                    let x;
                    S && e.grid.initSlides(p);
                    const $ = "auto" === i.slidesPerView && i.breakpoints && Object.keys(i.breakpoints).filter((e => "undefined" !== typeof i.breakpoints[e].slidesPerView)).length > 0;
                    for (let E = 0; E < p; E += 1) {
                        x = 0;
                        const n = c.eq(E);
                        if (S && e.grid.updateSlide(E, n, p, t), "none" !== n.css("display")) {
                            if ("auto" === i.slidesPerView) {
                                $ && (c[E].style[t("width")] = "");
                                const a = getComputedStyle(n[0]),
                                    r = n[0].style.transform,
                                    l = n[0].style.webkitTransform;
                                if (r && (n[0].style.transform = "none"), l && (n[0].style.webkitTransform = "none"), i.roundLengths) x = e.isHorizontal() ? n.outerWidth(!0) : n.outerHeight(!0);
                                else {
                                    const e = s(a, "width"),
                                        t = s(a, "padding-left"),
                                        i = s(a, "padding-right"),
                                        r = s(a, "margin-left"),
                                        l = s(a, "margin-right"),
                                        o = a.getPropertyValue("box-sizing");
                                    if (o && "border-box" === o) x = e + r + l;
                                    else {
                                        const {
                                            clientWidth: s,
                                            offsetWidth: a
                                        } = n[0];
                                        x = e + t + i + r + l + (a - s)
                                    }
                                }
                                r && (n[0].style.transform = r), l && (n[0].style.webkitTransform = l), i.roundLengths && (x = Math.floor(x))
                            } else x = (a - (i.slidesPerView - 1) * w) / i.slidesPerView, i.roundLengths && (x = Math.floor(x)), c[E] && (c[E].style[t("width")] = `${x}px`);
                            c[E] && (c[E].swiperSlideSize = x), h.push(x), i.centeredSlides ? (y = y + x / 2 + C / 2 + w, 0 === C && 0 !== E && (y = y - a / 2 - w), 0 === E && (y = y - a / 2 - w), Math.abs(y) < .001 && (y = 0), i.roundLengths && (y = Math.floor(y)), T % i.slidesPerGroup === 0 && u.push(y), f.push(y)) : (i.roundLengths && (y = Math.floor(y)), (T - Math.min(e.params.slidesPerGroupSkip, T)) % e.params.slidesPerGroup === 0 && u.push(y), f.push(y), y = y + x + w), e.virtualSize += x + w, C = x, T += 1
                        }
                    }
                    if (e.virtualSize = Math.max(e.virtualSize, a) + g, r && l && ("slide" === i.effect || "coverflow" === i.effect) && n.css({
                            width: `${e.virtualSize+i.spaceBetween}px`
                        }), i.setWrapperSize && n.css({
                            [t("width")]: `${e.virtualSize+i.spaceBetween}px`
                        }), S && e.grid.updateWrapperSize(x, u, t), !i.centeredSlides) {
                        const t = [];
                        for (let s = 0; s < u.length; s += 1) {
                            let n = u[s];
                            i.roundLengths && (n = Math.floor(n)), u[s] <= e.virtualSize - a && t.push(n)
                        }
                        u = t, Math.floor(e.virtualSize - a) - Math.floor(u[u.length - 1]) > 1 && u.push(e.virtualSize - a)
                    }
                    if (0 === u.length && (u = [0]), 0 !== i.spaceBetween) {
                        const s = e.isHorizontal() && r ? "marginLeft" : t("marginRight");
                        c.filter(((e, t) => !i.cssMode || t !== c.length - 1)).css({
                            [s]: `${w}px`
                        })
                    }
                    if (i.centeredSlides && i.centeredSlidesBounds) {
                        let e = 0;
                        h.forEach((t => {
                            e += t + (i.spaceBetween ? i.spaceBetween : 0)
                        })), e -= i.spaceBetween;
                        const t = e - a;
                        u = u.map((e => e < 0 ? -m : e > t ? t + g : e))
                    }
                    if (i.centerInsufficientSlides) {
                        let e = 0;
                        if (h.forEach((t => {
                                e += t + (i.spaceBetween ? i.spaceBetween : 0)
                            })), e -= i.spaceBetween, e < a) {
                            const t = (a - e) / 2;
                            u.forEach(((e, s) => {
                                u[s] = e - t
                            })), f.forEach(((e, s) => {
                                f[s] = e + t
                            }))
                        }
                    }
                    if (Object.assign(e, {
                            slides: c,
                            snapGrid: u,
                            slidesGrid: f,
                            slidesSizesGrid: h
                        }), i.centeredSlides && i.cssMode && !i.centeredSlidesBounds) {
                        E(e.wrapperEl, "--swiper-centered-offset-before", -u[0] + "px"), E(e.wrapperEl, "--swiper-centered-offset-after", e.size / 2 - h[h.length - 1] / 2 + "px");
                        const t = -e.snapGrid[0],
                            s = -e.slidesGrid[0];
                        e.snapGrid = e.snapGrid.map((e => e + t)), e.slidesGrid = e.slidesGrid.map((e => e + s))
                    }
                    if (p !== d && e.emit("slidesLengthChange"), u.length !== v && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), f.length !== b && e.emit("slidesGridLengthChange"), i.watchSlidesProgress && e.updateSlidesOffset(), !o && !i.cssMode && ("slide" === i.effect || "fade" === i.effect)) {
                        const t = `${i.containerModifierClass}backface-hidden`,
                            s = e.$el.hasClass(t);
                        p <= i.maxBackfaceHiddenSlides ? s || e.$el.addClass(t) : s && e.$el.removeClass(t)
                    }
                },
                updateAutoHeight: function(e) {
                    const t = this,
                        s = [],
                        i = t.virtual && t.params.virtual.enabled;
                    let n, a = 0;
                    "number" === typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);
                    const r = e => i ? t.slides.filter((t => parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e))[0] : t.slides.eq(e)[0];
                    if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
                        if (t.params.centeredSlides)(t.visibleSlides || g([])).each((e => {
                            s.push(e)
                        }));
                        else
                            for (n = 0; n < Math.ceil(t.params.slidesPerView); n += 1) {
                                const e = t.activeIndex + n;
                                if (e > t.slides.length && !i) break;
                                s.push(r(e))
                            } else s.push(r(t.activeIndex));
                    for (n = 0; n < s.length; n += 1)
                        if ("undefined" !== typeof s[n]) {
                            const e = s[n].offsetHeight;
                            a = e > a ? e : a
                        }(a || 0 === a) && t.$wrapperEl.css("height", `${a}px`)
                },
                updateSlidesOffset: function() {
                    const e = this,
                        t = e.slides;
                    for (let s = 0; s < t.length; s += 1) t[s].swiperSlideOffset = e.isHorizontal() ? t[s].offsetLeft : t[s].offsetTop
                },
                updateSlidesProgress: function(e) {
                    void 0 === e && (e = this && this.translate || 0);
                    const t = this,
                        s = t.params,
                        {
                            slides: i,
                            rtlTranslate: n,
                            snapGrid: a
                        } = t;
                    if (0 === i.length) return;
                    "undefined" === typeof i[0].swiperSlideOffset && t.updateSlidesOffset();
                    let r = -e;
                    n && (r = e), i.removeClass(s.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = [];
                    for (let l = 0; l < i.length; l += 1) {
                        const e = i[l];
                        let o = e.swiperSlideOffset;
                        s.cssMode && s.centeredSlides && (o -= i[0].swiperSlideOffset);
                        const d = (r + (s.centeredSlides ? t.minTranslate() : 0) - o) / (e.swiperSlideSize + s.spaceBetween),
                            c = (r - a[0] + (s.centeredSlides ? t.minTranslate() : 0) - o) / (e.swiperSlideSize + s.spaceBetween),
                            p = -(r - o),
                            u = p + t.slidesSizesGrid[l];
                        (p >= 0 && p < t.size - 1 || u > 1 && u <= t.size || p <= 0 && u >= t.size) && (t.visibleSlides.push(e), t.visibleSlidesIndexes.push(l), i.eq(l).addClass(s.slideVisibleClass)), e.progress = n ? -d : d, e.originalProgress = n ? -c : c
                    }
                    t.visibleSlides = g(t.visibleSlides)
                },
                updateProgress: function(e) {
                    const t = this;
                    if ("undefined" === typeof e) {
                        const s = t.rtlTranslate ? -1 : 1;
                        e = t && t.translate && t.translate * s || 0
                    }
                    const s = t.params,
                        i = t.maxTranslate() - t.minTranslate();
                    let {
                        progress: n,
                        isBeginning: a,
                        isEnd: r
                    } = t;
                    const l = a,
                        o = r;
                    0 === i ? (n = 0, a = !0, r = !0) : (n = (e - t.minTranslate()) / i, a = n <= 0, r = n >= 1), Object.assign(t, {
                        progress: n,
                        isBeginning: a,
                        isEnd: r
                    }), (s.watchSlidesProgress || s.centeredSlides && s.autoHeight) && t.updateSlidesProgress(e), a && !l && t.emit("reachBeginning toEdge"), r && !o && t.emit("reachEnd toEdge"), (l && !a || o && !r) && t.emit("fromEdge"), t.emit("progress", n)
                },
                updateSlidesClasses: function() {
                    const e = this,
                        {
                            slides: t,
                            params: s,
                            $wrapperEl: i,
                            activeIndex: n,
                            realIndex: a
                        } = e,
                        r = e.virtual && s.virtual.enabled;
                    let l;
                    t.removeClass(`${s.slideActiveClass} ${s.slideNextClass} ${s.slidePrevClass} ${s.slideDuplicateActiveClass} ${s.slideDuplicateNextClass} ${s.slideDuplicatePrevClass}`), l = r ? e.$wrapperEl.find(`.${s.slideClass}[data-swiper-slide-index="${n}"]`) : t.eq(n), l.addClass(s.slideActiveClass), s.loop && (l.hasClass(s.slideDuplicateClass) ? i.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${a}"]`).addClass(s.slideDuplicateActiveClass) : i.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${a}"]`).addClass(s.slideDuplicateActiveClass));
                    let o = l.nextAll(`.${s.slideClass}`).eq(0).addClass(s.slideNextClass);
                    s.loop && 0 === o.length && (o = t.eq(0), o.addClass(s.slideNextClass));
                    let d = l.prevAll(`.${s.slideClass}`).eq(0).addClass(s.slidePrevClass);
                    s.loop && 0 === d.length && (d = t.eq(-1), d.addClass(s.slidePrevClass)), s.loop && (o.hasClass(s.slideDuplicateClass) ? i.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass) : i.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass), d.hasClass(s.slideDuplicateClass) ? i.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass) : i.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass)), e.emitSlidesClasses()
                },
                updateActiveIndex: function(e) {
                    const t = this,
                        s = t.rtlTranslate ? t.translate : -t.translate,
                        {
                            slidesGrid: i,
                            snapGrid: n,
                            params: a,
                            activeIndex: r,
                            realIndex: l,
                            snapIndex: o
                        } = t;
                    let d, c = e;
                    if ("undefined" === typeof c) {
                        for (let e = 0; e < i.length; e += 1) "undefined" !== typeof i[e + 1] ? s >= i[e] && s < i[e + 1] - (i[e + 1] - i[e]) / 2 ? c = e : s >= i[e] && s < i[e + 1] && (c = e + 1) : s >= i[e] && (c = e);
                        a.normalizeSlideIndex && (c < 0 || "undefined" === typeof c) && (c = 0)
                    }
                    if (n.indexOf(s) >= 0) d = n.indexOf(s);
                    else {
                        const e = Math.min(a.slidesPerGroupSkip, c);
                        d = e + Math.floor((c - e) / a.slidesPerGroup)
                    }
                    if (d >= n.length && (d = n.length - 1), c === r) return void(d !== o && (t.snapIndex = d, t.emit("snapIndexChange")));
                    const p = parseInt(t.slides.eq(c).attr("data-swiper-slide-index") || c, 10);
                    Object.assign(t, {
                        snapIndex: d,
                        realIndex: p,
                        previousIndex: r,
                        activeIndex: c
                    }), t.emit("activeIndexChange"), t.emit("snapIndexChange"), l !== p && t.emit("realIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange")
                },
                updateClickedSlide: function(e) {
                    const t = this,
                        s = t.params,
                        i = g(e).closest(`.${s.slideClass}`)[0];
                    let n, a = !1;
                    if (i)
                        for (let r = 0; r < t.slides.length; r += 1)
                            if (t.slides[r] === i) {
                                a = !0, n = r;
                                break
                            }
                    if (!i || !a) return t.clickedSlide = void 0, void(t.clickedIndex = void 0);
                    t.clickedSlide = i, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(g(i).attr("data-swiper-slide-index"), 10) : t.clickedIndex = n, s.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
                }
            };
            var D = {
                getTranslate: function(e) {
                    void 0 === e && (e = this.isHorizontal() ? "x" : "y");
                    const {
                        params: t,
                        rtlTranslate: s,
                        translate: i,
                        $wrapperEl: n
                    } = this;
                    if (t.virtualTranslate) return s ? -i : i;
                    if (t.cssMode) return i;
                    let a = w(n[0], e);
                    return s && (a = -a), a || 0
                },
                setTranslate: function(e, t) {
                    const s = this,
                        {
                            rtlTranslate: i,
                            params: n,
                            $wrapperEl: a,
                            wrapperEl: r,
                            progress: l
                        } = s;
                    let o, d = 0,
                        c = 0;
                    s.isHorizontal() ? d = i ? -e : e : c = e, n.roundLengths && (d = Math.floor(d), c = Math.floor(c)), n.cssMode ? r[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal() ? -d : -c : n.virtualTranslate || a.transform(`translate3d(${d}px, ${c}px, 0px)`), s.previousTranslate = s.translate, s.translate = s.isHorizontal() ? d : c;
                    const p = s.maxTranslate() - s.minTranslate();
                    o = 0 === p ? 0 : (e - s.minTranslate()) / p, o !== l && s.updateProgress(e), s.emit("setTranslate", s.translate, t)
                },
                minTranslate: function() {
                    return -this.snapGrid[0]
                },
                maxTranslate: function() {
                    return -this.snapGrid[this.snapGrid.length - 1]
                },
                translateTo: function(e, t, s, i, n) {
                    void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), void 0 === i && (i = !0);
                    const a = this,
                        {
                            params: r,
                            wrapperEl: l
                        } = a;
                    if (a.animating && r.preventInteractionOnTransition) return !1;
                    const o = a.minTranslate(),
                        d = a.maxTranslate();
                    let c;
                    if (c = i && e > o ? o : i && e < d ? d : e, a.updateProgress(c), r.cssMode) {
                        const e = a.isHorizontal();
                        if (0 === t) l[e ? "scrollLeft" : "scrollTop"] = -c;
                        else {
                            if (!a.support.smoothScroll) return S({
                                swiper: a,
                                targetPosition: -c,
                                side: e ? "left" : "top"
                            }), !0;
                            l.scrollTo({
                                [e ? "left" : "top"]: -c,
                                behavior: "smooth"
                            })
                        }
                        return !0
                    }
                    return 0 === t ? (a.setTransition(0), a.setTranslate(c), s && (a.emit("beforeTransitionStart", t, n), a.emit("transitionEnd"))) : (a.setTransition(t), a.setTranslate(c), s && (a.emit("beforeTransitionStart", t, n), a.emit("transitionStart")), a.animating || (a.animating = !0, a.onTranslateToWrapperTransitionEnd || (a.onTranslateToWrapperTransitionEnd = function(e) {
                        a && !a.destroyed && e.target === this && (a.$wrapperEl[0].removeEventListener("transitionend", a.onTranslateToWrapperTransitionEnd), a.$wrapperEl[0].removeEventListener("webkitTransitionEnd", a.onTranslateToWrapperTransitionEnd), a.onTranslateToWrapperTransitionEnd = null, delete a.onTranslateToWrapperTransitionEnd, s && a.emit("transitionEnd"))
                    }), a.$wrapperEl[0].addEventListener("transitionend", a.onTranslateToWrapperTransitionEnd), a.$wrapperEl[0].addEventListener("webkitTransitionEnd", a.onTranslateToWrapperTransitionEnd))), !0
                }
            };

            function I(e) {
                let {
                    swiper: t,
                    runCallbacks: s,
                    direction: i,
                    step: n
                } = e;
                const {
                    activeIndex: a,
                    previousIndex: r
                } = t;
                let l = i;
                if (l || (l = a > r ? "next" : a < r ? "prev" : "reset"), t.emit(`transition${n}`), s && a !== r) {
                    if ("reset" === l) return void t.emit(`slideResetTransition${n}`);
                    t.emit(`slideChangeTransition${n}`), "next" === l ? t.emit(`slideNextTransition${n}`) : t.emit(`slidePrevTransition${n}`)
                }
            }
            var _ = {
                slideTo: function(e, t, s, i, n) {
                    if (void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), "number" !== typeof e && "string" !== typeof e) throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`);
                    if ("string" === typeof e) {
                        const t = parseInt(e, 10);
                        if (!isFinite(t)) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
                        e = t
                    }
                    const a = this;
                    let r = e;
                    r < 0 && (r = 0);
                    const {
                        params: l,
                        snapGrid: o,
                        slidesGrid: d,
                        previousIndex: c,
                        activeIndex: p,
                        rtlTranslate: u,
                        wrapperEl: f,
                        enabled: h
                    } = a;
                    if (a.animating && l.preventInteractionOnTransition || !h && !i && !n) return !1;
                    const m = Math.min(a.params.slidesPerGroupSkip, r);
                    let g = m + Math.floor((r - m) / a.params.slidesPerGroup);
                    g >= o.length && (g = o.length - 1), (p || l.initialSlide || 0) === (c || 0) && s && a.emit("beforeSlideChangeStart");
                    const v = -o[g];
                    if (a.updateProgress(v), l.normalizeSlideIndex)
                        for (let w = 0; w < d.length; w += 1) {
                            const e = -Math.floor(100 * v),
                                t = Math.floor(100 * d[w]),
                                s = Math.floor(100 * d[w + 1]);
                            "undefined" !== typeof d[w + 1] ? e >= t && e < s - (s - t) / 2 ? r = w : e >= t && e < s && (r = w + 1) : e >= t && (r = w)
                        }
                    if (a.initialized && r !== p) {
                        if (!a.allowSlideNext && v < a.translate && v < a.minTranslate()) return !1;
                        if (!a.allowSlidePrev && v > a.translate && v > a.maxTranslate() && (p || 0) !== r) return !1
                    }
                    let b;
                    if (b = r > p ? "next" : r < p ? "prev" : "reset", u && -v === a.translate || !u && v === a.translate) return a.updateActiveIndex(r), l.autoHeight && a.updateAutoHeight(), a.updateSlidesClasses(), "slide" !== l.effect && a.setTranslate(v), "reset" !== b && (a.transitionStart(s, b), a.transitionEnd(s, b)), !1;
                    if (l.cssMode) {
                        const e = a.isHorizontal(),
                            s = u ? v : -v;
                        if (0 === t) {
                            const t = a.virtual && a.params.virtual.enabled;
                            t && (a.wrapperEl.style.scrollSnapType = "none", a._immediateVirtual = !0), f[e ? "scrollLeft" : "scrollTop"] = s, t && requestAnimationFrame((() => {
                                a.wrapperEl.style.scrollSnapType = "", a._swiperImmediateVirtual = !1
                            }))
                        } else {
                            if (!a.support.smoothScroll) return S({
                                swiper: a,
                                targetPosition: s,
                                side: e ? "left" : "top"
                            }), !0;
                            f.scrollTo({
                                [e ? "left" : "top"]: s,
                                behavior: "smooth"
                            })
                        }
                        return !0
                    }
                    return a.setTransition(t), a.setTranslate(v), a.updateActiveIndex(r), a.updateSlidesClasses(), a.emit("beforeTransitionStart", t, i), a.transitionStart(s, b), 0 === t ? a.transitionEnd(s, b) : a.animating || (a.animating = !0, a.onSlideToWrapperTransitionEnd || (a.onSlideToWrapperTransitionEnd = function(e) {
                        a && !a.destroyed && e.target === this && (a.$wrapperEl[0].removeEventListener("transitionend", a.onSlideToWrapperTransitionEnd), a.$wrapperEl[0].removeEventListener("webkitTransitionEnd", a.onSlideToWrapperTransitionEnd), a.onSlideToWrapperTransitionEnd = null, delete a.onSlideToWrapperTransitionEnd, a.transitionEnd(s, b))
                    }), a.$wrapperEl[0].addEventListener("transitionend", a.onSlideToWrapperTransitionEnd), a.$wrapperEl[0].addEventListener("webkitTransitionEnd", a.onSlideToWrapperTransitionEnd)), !0
                },
                slideToLoop: function(e, t, s, i) {
                    if (void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), "string" === typeof e) {
                        const t = parseInt(e, 10);
                        if (!isFinite(t)) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
                        e = t
                    }
                    const n = this;
                    let a = e;
                    return n.params.loop && (a += n.loopedSlides), n.slideTo(a, t, s, i)
                },
                slideNext: function(e, t, s) {
                    void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                    const i = this,
                        {
                            animating: n,
                            enabled: a,
                            params: r
                        } = i;
                    if (!a) return i;
                    let l = r.slidesPerGroup;
                    "auto" === r.slidesPerView && 1 === r.slidesPerGroup && r.slidesPerGroupAuto && (l = Math.max(i.slidesPerViewDynamic("current", !0), 1));
                    const o = i.activeIndex < r.slidesPerGroupSkip ? 1 : l;
                    if (r.loop) {
                        if (n && r.loopPreventsSlide) return !1;
                        i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft
                    }
                    return r.rewind && i.isEnd ? i.slideTo(0, e, t, s) : i.slideTo(i.activeIndex + o, e, t, s)
                },
                slidePrev: function(e, t, s) {
                    void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                    const i = this,
                        {
                            params: n,
                            animating: a,
                            snapGrid: r,
                            slidesGrid: l,
                            rtlTranslate: o,
                            enabled: d
                        } = i;
                    if (!d) return i;
                    if (n.loop) {
                        if (a && n.loopPreventsSlide) return !1;
                        i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft
                    }

                    function c(e) {
                        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
                    }
                    const p = c(o ? i.translate : -i.translate),
                        u = r.map((e => c(e)));
                    let f = r[u.indexOf(p) - 1];
                    if ("undefined" === typeof f && n.cssMode) {
                        let e;
                        r.forEach(((t, s) => {
                            p >= t && (e = s)
                        })), "undefined" !== typeof e && (f = r[e > 0 ? e - 1 : e])
                    }
                    let h = 0;
                    if ("undefined" !== typeof f && (h = l.indexOf(f), h < 0 && (h = i.activeIndex - 1), "auto" === n.slidesPerView && 1 === n.slidesPerGroup && n.slidesPerGroupAuto && (h = h - i.slidesPerViewDynamic("previous", !0) + 1, h = Math.max(h, 0))), n.rewind && i.isBeginning) {
                        const n = i.params.virtual && i.params.virtual.enabled && i.virtual ? i.virtual.slides.length - 1 : i.slides.length - 1;
                        return i.slideTo(n, e, t, s)
                    }
                    return i.slideTo(h, e, t, s)
                },
                slideReset: function(e, t, s) {
                    return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, s)
                },
                slideToClosest: function(e, t, s, i) {
                    void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === i && (i = .5);
                    const n = this;
                    let a = n.activeIndex;
                    const r = Math.min(n.params.slidesPerGroupSkip, a),
                        l = r + Math.floor((a - r) / n.params.slidesPerGroup),
                        o = n.rtlTranslate ? n.translate : -n.translate;
                    if (o >= n.snapGrid[l]) {
                        const e = n.snapGrid[l];
                        o - e > (n.snapGrid[l + 1] - e) * i && (a += n.params.slidesPerGroup)
                    } else {
                        const e = n.snapGrid[l - 1];
                        o - e <= (n.snapGrid[l] - e) * i && (a -= n.params.slidesPerGroup)
                    }
                    return a = Math.max(a, 0), a = Math.min(a, n.slidesGrid.length - 1), n.slideTo(a, e, t, s)
                },
                slideToClickedSlide: function() {
                    const e = this,
                        {
                            params: t,
                            $wrapperEl: s
                        } = e,
                        i = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
                    let n, a = e.clickedIndex;
                    if (t.loop) {
                        if (e.animating) return;
                        n = parseInt(g(e.clickedSlide).attr("data-swiper-slide-index"), 10), t.centeredSlides ? a < e.loopedSlides - i / 2 || a > e.slides.length - e.loopedSlides + i / 2 ? (e.loopFix(), a = s.children(`.${t.slideClass}[data-swiper-slide-index="${n}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), v((() => {
                            e.slideTo(a)
                        }))) : e.slideTo(a) : a > e.slides.length - i ? (e.loopFix(), a = s.children(`.${t.slideClass}[data-swiper-slide-index="${n}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), v((() => {
                            e.slideTo(a)
                        }))) : e.slideTo(a)
                    } else e.slideTo(a)
                }
            };
            var A = {
                loopCreate: function() {
                    const e = this,
                        t = r(),
                        {
                            params: s,
                            $wrapperEl: i
                        } = e,
                        n = i.children().length > 0 ? g(i.children()[0].parentNode) : i;
                    n.children(`.${s.slideClass}.${s.slideDuplicateClass}`).remove();
                    let a = n.children(`.${s.slideClass}`);
                    if (s.loopFillGroupWithBlank) {
                        const e = s.slidesPerGroup - a.length % s.slidesPerGroup;
                        if (e !== s.slidesPerGroup) {
                            for (let i = 0; i < e; i += 1) {
                                const e = g(t.createElement("div")).addClass(`${s.slideClass} ${s.slideBlankClass}`);
                                n.append(e)
                            }
                            a = n.children(`.${s.slideClass}`)
                        }
                    }
                    "auto" !== s.slidesPerView || s.loopedSlides || (s.loopedSlides = a.length), e.loopedSlides = Math.ceil(parseFloat(s.loopedSlides || s.slidesPerView, 10)), e.loopedSlides += s.loopAdditionalSlides, e.loopedSlides > a.length && e.params.loopedSlidesLimit && (e.loopedSlides = a.length);
                    const l = [],
                        o = [];
                    a.each(((e, t) => {
                        g(e).attr("data-swiper-slide-index", t)
                    }));
                    for (let r = 0; r < e.loopedSlides; r += 1) {
                        const e = r - Math.floor(r / a.length) * a.length;
                        o.push(a.eq(e)[0]), l.unshift(a.eq(a.length - e - 1)[0])
                    }
                    for (let r = 0; r < o.length; r += 1) n.append(g(o[r].cloneNode(!0)).addClass(s.slideDuplicateClass));
                    for (let r = l.length - 1; r >= 0; r -= 1) n.prepend(g(l[r].cloneNode(!0)).addClass(s.slideDuplicateClass))
                },
                loopFix: function() {
                    const e = this;
                    e.emit("beforeLoopFix");
                    const {
                        activeIndex: t,
                        slides: s,
                        loopedSlides: i,
                        allowSlidePrev: n,
                        allowSlideNext: a,
                        snapGrid: r,
                        rtlTranslate: l
                    } = e;
                    let o;
                    e.allowSlidePrev = !0, e.allowSlideNext = !0;
                    const d = -r[t] - e.getTranslate();
                    if (t < i) {
                        o = s.length - 3 * i + t, o += i;
                        e.slideTo(o, 0, !1, !0) && 0 !== d && e.setTranslate((l ? -e.translate : e.translate) - d)
                    } else if (t >= s.length - i) {
                        o = -s.length + t + i, o += i;
                        e.slideTo(o, 0, !1, !0) && 0 !== d && e.setTranslate((l ? -e.translate : e.translate) - d)
                    }
                    e.allowSlidePrev = n, e.allowSlideNext = a, e.emit("loopFix")
                },
                loopDestroy: function() {
                    const {
                        $wrapperEl: e,
                        params: t,
                        slides: s
                    } = this;
                    e.children(`.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`).remove(), s.removeAttr("data-swiper-slide-index")
                }
            };

            function N(e) {
                const t = this,
                    s = r(),
                    i = o(),
                    n = t.touchEventsData,
                    {
                        params: a,
                        touches: l,
                        enabled: d
                    } = t;
                if (!d) return;
                if (t.animating && a.preventInteractionOnTransition) return;
                !t.animating && a.cssMode && a.loop && t.loopFix();
                let c = e;
                c.originalEvent && (c = c.originalEvent);
                let p = g(c.target);
                if ("wrapper" === a.touchEventsTarget && !p.closest(t.wrapperEl).length) return;
                if (n.isTouchEvent = "touchstart" === c.type, !n.isTouchEvent && "which" in c && 3 === c.which) return;
                if (!n.isTouchEvent && "button" in c && c.button > 0) return;
                if (n.isTouched && n.isMoved) return;
                !!a.noSwipingClass && "" !== a.noSwipingClass && c.target && c.target.shadowRoot && e.path && e.path[0] && (p = g(e.path[0]));
                const u = a.noSwipingSelector ? a.noSwipingSelector : `.${a.noSwipingClass}`,
                    f = !(!c.target || !c.target.shadowRoot);
                if (a.noSwiping && (f ? function(e, t) {
                        return void 0 === t && (t = this),
                            function t(s) {
                                if (!s || s === r() || s === o()) return null;
                                s.assignedSlot && (s = s.assignedSlot);
                                const i = s.closest(e);
                                return i || s.getRootNode ? i || t(s.getRootNode().host) : null
                            }(t)
                    }(u, p[0]) : p.closest(u)[0])) return void(t.allowClick = !0);
                if (a.swipeHandler && !p.closest(a.swipeHandler)[0]) return;
                l.currentX = "touchstart" === c.type ? c.targetTouches[0].pageX : c.pageX, l.currentY = "touchstart" === c.type ? c.targetTouches[0].pageY : c.pageY;
                const h = l.currentX,
                    m = l.currentY,
                    v = a.edgeSwipeDetection || a.iOSEdgeSwipeDetection,
                    w = a.edgeSwipeThreshold || a.iOSEdgeSwipeThreshold;
                if (v && (h <= w || h >= i.innerWidth - w)) {
                    if ("prevent" !== v) return;
                    e.preventDefault()
                }
                if (Object.assign(n, {
                        isTouched: !0,
                        isMoved: !1,
                        allowTouchCallbacks: !0,
                        isScrolling: void 0,
                        startMoving: void 0
                    }), l.startX = h, l.startY = m, n.touchStartTime = b(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, a.threshold > 0 && (n.allowThresholdMove = !1), "touchstart" !== c.type) {
                    let e = !0;
                    p.is(n.focusableElements) && (e = !1, "SELECT" === p[0].nodeName && (n.isTouched = !1)), s.activeElement && g(s.activeElement).is(n.focusableElements) && s.activeElement !== p[0] && s.activeElement.blur();
                    const i = e && t.allowTouchMove && a.touchStartPreventDefault;
                    !a.touchStartForcePreventDefault && !i || p[0].isContentEditable || c.preventDefault()
                }
                t.params.freeMode && t.params.freeMode.enabled && t.freeMode && t.animating && !a.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", c)
            }

            function B(e) {
                const t = r(),
                    s = this,
                    i = s.touchEventsData,
                    {
                        params: n,
                        touches: a,
                        rtlTranslate: l,
                        enabled: o
                    } = s;
                if (!o) return;
                let d = e;
                if (d.originalEvent && (d = d.originalEvent), !i.isTouched) return void(i.startMoving && i.isScrolling && s.emit("touchMoveOpposite", d));
                if (i.isTouchEvent && "touchmove" !== d.type) return;
                const c = "touchmove" === d.type && d.targetTouches && (d.targetTouches[0] || d.changedTouches[0]),
                    p = "touchmove" === d.type ? c.pageX : d.pageX,
                    u = "touchmove" === d.type ? c.pageY : d.pageY;
                if (d.preventedByNestedSwiper) return a.startX = p, void(a.startY = u);
                if (!s.allowTouchMove) return g(d.target).is(i.focusableElements) || (s.allowClick = !1), void(i.isTouched && (Object.assign(a, {
                    startX: p,
                    startY: u,
                    currentX: p,
                    currentY: u
                }), i.touchStartTime = b()));
                if (i.isTouchEvent && n.touchReleaseOnEdges && !n.loop)
                    if (s.isVertical()) {
                        if (u < a.startY && s.translate <= s.maxTranslate() || u > a.startY && s.translate >= s.minTranslate()) return i.isTouched = !1, void(i.isMoved = !1)
                    } else if (p < a.startX && s.translate <= s.maxTranslate() || p > a.startX && s.translate >= s.minTranslate()) return;
                if (i.isTouchEvent && t.activeElement && d.target === t.activeElement && g(d.target).is(i.focusableElements)) return i.isMoved = !0, void(s.allowClick = !1);
                if (i.allowTouchCallbacks && s.emit("touchMove", d), d.targetTouches && d.targetTouches.length > 1) return;
                a.currentX = p, a.currentY = u;
                const f = a.currentX - a.startX,
                    h = a.currentY - a.startY;
                if (s.params.threshold && Math.sqrt(f ** 2 + h ** 2) < s.params.threshold) return;
                if ("undefined" === typeof i.isScrolling) {
                    let e;
                    s.isHorizontal() && a.currentY === a.startY || s.isVertical() && a.currentX === a.startX ? i.isScrolling = !1 : f * f + h * h >= 25 && (e = 180 * Math.atan2(Math.abs(h), Math.abs(f)) / Math.PI, i.isScrolling = s.isHorizontal() ? e > n.touchAngle : 90 - e > n.touchAngle)
                }
                if (i.isScrolling && s.emit("touchMoveOpposite", d), "undefined" === typeof i.startMoving && (a.currentX === a.startX && a.currentY === a.startY || (i.startMoving = !0)), i.isScrolling) return void(i.isTouched = !1);
                if (!i.startMoving) return;
                s.allowClick = !1, !n.cssMode && d.cancelable && d.preventDefault(), n.touchMoveStopPropagation && !n.nested && d.stopPropagation(), i.isMoved || (n.loop && !n.cssMode && s.loopFix(), i.startTranslate = s.getTranslate(), s.setTransition(0), s.animating && s.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i.allowMomentumBounce = !1, !n.grabCursor || !0 !== s.allowSlideNext && !0 !== s.allowSlidePrev || s.setGrabCursor(!0), s.emit("sliderFirstMove", d)), s.emit("sliderMove", d), i.isMoved = !0;
                let m = s.isHorizontal() ? f : h;
                a.diff = m, m *= n.touchRatio, l && (m = -m), s.swipeDirection = m > 0 ? "prev" : "next", i.currentTranslate = m + i.startTranslate;
                let v = !0,
                    w = n.resistanceRatio;
                if (n.touchReleaseOnEdges && (w = 0), m > 0 && i.currentTranslate > s.minTranslate() ? (v = !1, n.resistance && (i.currentTranslate = s.minTranslate() - 1 + (-s.minTranslate() + i.startTranslate + m) ** w)) : m < 0 && i.currentTranslate < s.maxTranslate() && (v = !1, n.resistance && (i.currentTranslate = s.maxTranslate() + 1 - (s.maxTranslate() - i.startTranslate - m) ** w)), v && (d.preventedByNestedSwiper = !0), !s.allowSlideNext && "next" === s.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !s.allowSlidePrev && "prev" === s.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), s.allowSlidePrev || s.allowSlideNext || (i.currentTranslate = i.startTranslate), n.threshold > 0) {
                    if (!(Math.abs(m) > n.threshold || i.allowThresholdMove)) return void(i.currentTranslate = i.startTranslate);
                    if (!i.allowThresholdMove) return i.allowThresholdMove = !0, a.startX = a.currentX, a.startY = a.currentY, i.currentTranslate = i.startTranslate, void(a.diff = s.isHorizontal() ? a.currentX - a.startX : a.currentY - a.startY)
                }
                n.followFinger && !n.cssMode && ((n.freeMode && n.freeMode.enabled && s.freeMode || n.watchSlidesProgress) && (s.updateActiveIndex(), s.updateSlidesClasses()), s.params.freeMode && n.freeMode.enabled && s.freeMode && s.freeMode.onTouchMove(), s.updateProgress(i.currentTranslate), s.setTranslate(i.currentTranslate))
            }

            function G(e) {
                const t = this,
                    s = t.touchEventsData,
                    {
                        params: i,
                        touches: n,
                        rtlTranslate: a,
                        slidesGrid: r,
                        enabled: l
                    } = t;
                if (!l) return;
                let o = e;
                if (o.originalEvent && (o = o.originalEvent), s.allowTouchCallbacks && t.emit("touchEnd", o), s.allowTouchCallbacks = !1, !s.isTouched) return s.isMoved && i.grabCursor && t.setGrabCursor(!1), s.isMoved = !1, void(s.startMoving = !1);
                i.grabCursor && s.isMoved && s.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
                const d = b(),
                    c = d - s.touchStartTime;
                if (t.allowClick) {
                    const e = o.path || o.composedPath && o.composedPath();
                    t.updateClickedSlide(e && e[0] || o.target), t.emit("tap click", o), c < 300 && d - s.lastClickTime < 300 && t.emit("doubleTap doubleClick", o)
                }
                if (s.lastClickTime = b(), v((() => {
                        t.destroyed || (t.allowClick = !0)
                    })), !s.isTouched || !s.isMoved || !t.swipeDirection || 0 === n.diff || s.currentTranslate === s.startTranslate) return s.isTouched = !1, s.isMoved = !1, void(s.startMoving = !1);
                let p;
                if (s.isTouched = !1, s.isMoved = !1, s.startMoving = !1, p = i.followFinger ? a ? t.translate : -t.translate : -s.currentTranslate, i.cssMode) return;
                if (t.params.freeMode && i.freeMode.enabled) return void t.freeMode.onTouchEnd({
                    currentPos: p
                });
                let u = 0,
                    f = t.slidesSizesGrid[0];
                for (let v = 0; v < r.length; v += v < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup) {
                    const e = v < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
                    "undefined" !== typeof r[v + e] ? p >= r[v] && p < r[v + e] && (u = v, f = r[v + e] - r[v]) : p >= r[v] && (u = v, f = r[r.length - 1] - r[r.length - 2])
                }
                let h = null,
                    m = null;
                i.rewind && (t.isBeginning ? m = t.params.virtual && t.params.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (h = 0));
                const g = (p - r[u]) / f,
                    w = u < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
                if (c > i.longSwipesMs) {
                    if (!i.longSwipes) return void t.slideTo(t.activeIndex);
                    "next" === t.swipeDirection && (g >= i.longSwipesRatio ? t.slideTo(i.rewind && t.isEnd ? h : u + w) : t.slideTo(u)), "prev" === t.swipeDirection && (g > 1 - i.longSwipesRatio ? t.slideTo(u + w) : null !== m && g < 0 && Math.abs(g) > i.longSwipesRatio ? t.slideTo(m) : t.slideTo(u))
                } else {
                    if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
                    t.navigation && (o.target === t.navigation.nextEl || o.target === t.navigation.prevEl) ? o.target === t.navigation.nextEl ? t.slideTo(u + w) : t.slideTo(u) : ("next" === t.swipeDirection && t.slideTo(null !== h ? h : u + w), "prev" === t.swipeDirection && t.slideTo(null !== m ? m : u))
                }
            }

            function j() {
                const e = this,
                    {
                        params: t,
                        el: s
                    } = e;
                if (s && 0 === s.offsetWidth) return;
                t.breakpoints && e.setBreakpoint();
                const {
                    allowSlideNext: i,
                    allowSlidePrev: n,
                    snapGrid: a
                } = e;
                e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses(), ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(), e.allowSlidePrev = n, e.allowSlideNext = i, e.params.watchOverflow && a !== e.snapGrid && e.checkOverflow()
            }

            function H(e) {
                const t = this;
                t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())))
            }

            function F() {
                const e = this,
                    {
                        wrapperEl: t,
                        rtlTranslate: s,
                        enabled: i
                    } = e;
                if (!i) return;
                let n;
                e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, 0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
                const a = e.maxTranslate() - e.minTranslate();
                n = 0 === a ? 0 : (e.translate - e.minTranslate()) / a, n !== e.progress && e.updateProgress(s ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1)
            }
            let V = !1;

            function R() {}
            const q = (e, t) => {
                const s = r(),
                    {
                        params: i,
                        touchEvents: n,
                        el: a,
                        wrapperEl: l,
                        device: o,
                        support: d
                    } = e,
                    c = !!i.nested,
                    p = "on" === t ? "addEventListener" : "removeEventListener",
                    u = t;
                if (d.touch) {
                    const t = !("touchstart" !== n.start || !d.passiveListener || !i.passiveListeners) && {
                        passive: !0,
                        capture: !1
                    };
                    a[p](n.start, e.onTouchStart, t), a[p](n.move, e.onTouchMove, d.passiveListener ? {
                        passive: !1,
                        capture: c
                    } : c), a[p](n.end, e.onTouchEnd, t), n.cancel && a[p](n.cancel, e.onTouchEnd, t)
                } else a[p](n.start, e.onTouchStart, !1), s[p](n.move, e.onTouchMove, c), s[p](n.end, e.onTouchEnd, !1);
                (i.preventClicks || i.preventClicksPropagation) && a[p]("click", e.onClick, !0), i.cssMode && l[p]("scroll", e.onScroll), i.updateOnWindowResize ? e[u](o.ios || o.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", j, !0) : e[u]("observerUpdate", j, !0)
            };
            var W = {
                attachEvents: function() {
                    const e = this,
                        t = r(),
                        {
                            params: s,
                            support: i
                        } = e;
                    e.onTouchStart = N.bind(e), e.onTouchMove = B.bind(e), e.onTouchEnd = G.bind(e), s.cssMode && (e.onScroll = F.bind(e)), e.onClick = H.bind(e), i.touch && !V && (t.addEventListener("touchstart", R), V = !0), q(e, "on")
                },
                detachEvents: function() {
                    q(this, "off")
                }
            };
            const X = (e, t) => e.grid && t.grid && t.grid.rows > 1;
            var Y = {
                setBreakpoint: function() {
                    const e = this,
                        {
                            activeIndex: t,
                            initialized: s,
                            loopedSlides: i = 0,
                            params: n,
                            $el: a
                        } = e,
                        r = n.breakpoints;
                    if (!r || r && 0 === Object.keys(r).length) return;
                    const l = e.getBreakpoint(r, e.params.breakpointsBase, e.el);
                    if (!l || e.currentBreakpoint === l) return;
                    const o = (l in r ? r[l] : void 0) || e.originalParams,
                        d = X(e, n),
                        c = X(e, o),
                        p = n.enabled;
                    d && !c ? (a.removeClass(`${n.containerModifierClass}grid ${n.containerModifierClass}grid-column`), e.emitContainerClasses()) : !d && c && (a.addClass(`${n.containerModifierClass}grid`), (o.grid.fill && "column" === o.grid.fill || !o.grid.fill && "column" === n.grid.fill) && a.addClass(`${n.containerModifierClass}grid-column`), e.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach((t => {
                        const s = n[t] && n[t].enabled,
                            i = o[t] && o[t].enabled;
                        s && !i && e[t].disable(), !s && i && e[t].enable()
                    }));
                    const u = o.direction && o.direction !== n.direction,
                        f = n.loop && (o.slidesPerView !== n.slidesPerView || u);
                    u && s && e.changeDirection(), T(e.params, o);
                    const h = e.params.enabled;
                    Object.assign(e, {
                        allowTouchMove: e.params.allowTouchMove,
                        allowSlideNext: e.params.allowSlideNext,
                        allowSlidePrev: e.params.allowSlidePrev
                    }), p && !h ? e.disable() : !p && h && e.enable(), e.currentBreakpoint = l, e.emit("_beforeBreakpoint", o), f && s && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - i + e.loopedSlides, 0, !1)), e.emit("breakpoint", o)
                },
                getBreakpoint: function(e, t, s) {
                    if (void 0 === t && (t = "window"), !e || "container" === t && !s) return;
                    let i = !1;
                    const n = o(),
                        a = "window" === t ? n.innerHeight : s.clientHeight,
                        r = Object.keys(e).map((e => {
                            if ("string" === typeof e && 0 === e.indexOf("@")) {
                                const t = parseFloat(e.substr(1));
                                return {
                                    value: a * t,
                                    point: e
                                }
                            }
                            return {
                                value: e,
                                point: e
                            }
                        }));
                    r.sort(((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10)));
                    for (let l = 0; l < r.length; l += 1) {
                        const {
                            point: e,
                            value: a
                        } = r[l];
                        "window" === t ? n.matchMedia(`(min-width: ${a}px)`).matches && (i = e) : a <= s.clientWidth && (i = e)
                    }
                    return i || "max"
                }
            };
            var U = {
                addClasses: function() {
                    const e = this,
                        {
                            classNames: t,
                            params: s,
                            rtl: i,
                            $el: n,
                            device: a,
                            support: r
                        } = e,
                        l = function(e, t) {
                            const s = [];
                            return e.forEach((e => {
                                "object" === typeof e ? Object.keys(e).forEach((i => {
                                    e[i] && s.push(t + i)
                                })) : "string" === typeof e && s.push(t + e)
                            })), s
                        }(["initialized", s.direction, {
                            "pointer-events": !r.touch
                        }, {
                            "free-mode": e.params.freeMode && s.freeMode.enabled
                        }, {
                            autoheight: s.autoHeight
                        }, {
                            rtl: i
                        }, {
                            grid: s.grid && s.grid.rows > 1
                        }, {
                            "grid-column": s.grid && s.grid.rows > 1 && "column" === s.grid.fill
                        }, {
                            android: a.android
                        }, {
                            ios: a.ios
                        }, {
                            "css-mode": s.cssMode
                        }, {
                            centered: s.cssMode && s.centeredSlides
                        }, {
                            "watch-progress": s.watchSlidesProgress
                        }], s.containerModifierClass);
                    t.push(...l), n.addClass([...t].join(" ")), e.emitContainerClasses()
                },
                removeClasses: function() {
                    const {
                        $el: e,
                        classNames: t
                    } = this;
                    e.removeClass(t.join(" ")), this.emitContainerClasses()
                }
            };
            var K = {
                init: !0,
                direction: "horizontal",
                touchEventsTarget: "wrapper",
                initialSlide: 0,
                speed: 300,
                cssMode: !1,
                updateOnWindowResize: !0,
                resizeObserver: !0,
                nested: !1,
                createElements: !1,
                enabled: !0,
                focusableElements: "input, select, option, textarea, button, video, label",
                width: null,
                height: null,
                preventInteractionOnTransition: !1,
                userAgent: null,
                url: null,
                edgeSwipeDetection: !1,
                edgeSwipeThreshold: 20,
                autoHeight: !1,
                setWrapperSize: !1,
                virtualTranslate: !1,
                effect: "slide",
                breakpoints: void 0,
                breakpointsBase: "window",
                spaceBetween: 0,
                slidesPerView: 1,
                slidesPerGroup: 1,
                slidesPerGroupSkip: 0,
                slidesPerGroupAuto: !1,
                centeredSlides: !1,
                centeredSlidesBounds: !1,
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
                normalizeSlideIndex: !0,
                centerInsufficientSlides: !1,
                watchOverflow: !0,
                roundLengths: !1,
                touchRatio: 1,
                touchAngle: 45,
                simulateTouch: !0,
                shortSwipes: !0,
                longSwipes: !0,
                longSwipesRatio: .5,
                longSwipesMs: 300,
                followFinger: !0,
                allowTouchMove: !0,
                threshold: 0,
                touchMoveStopPropagation: !1,
                touchStartPreventDefault: !0,
                touchStartForcePreventDefault: !1,
                touchReleaseOnEdges: !1,
                uniqueNavElements: !0,
                resistance: !0,
                resistanceRatio: .85,
                watchSlidesProgress: !1,
                grabCursor: !1,
                preventClicks: !0,
                preventClicksPropagation: !0,
                slideToClickedSlide: !1,
                preloadImages: !0,
                updateOnImagesReady: !0,
                loop: !1,
                loopAdditionalSlides: 0,
                loopedSlides: null,
                loopedSlidesLimit: !0,
                loopFillGroupWithBlank: !1,
                loopPreventsSlide: !0,
                rewind: !1,
                allowSlidePrev: !0,
                allowSlideNext: !0,
                swipeHandler: null,
                noSwiping: !0,
                noSwipingClass: "swiper-no-swiping",
                noSwipingSelector: null,
                passiveListeners: !0,
                maxBackfaceHiddenSlides: 10,
                containerModifierClass: "swiper-",
                slideClass: "swiper-slide",
                slideBlankClass: "swiper-slide-invisible-blank",
                slideActiveClass: "swiper-slide-active",
                slideDuplicateActiveClass: "swiper-slide-duplicate-active",
                slideVisibleClass: "swiper-slide-visible",
                slideDuplicateClass: "swiper-slide-duplicate",
                slideNextClass: "swiper-slide-next",
                slideDuplicateNextClass: "swiper-slide-duplicate-next",
                slidePrevClass: "swiper-slide-prev",
                slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
                wrapperClass: "swiper-wrapper",
                runCallbacksOnInit: !0,
                _emitClasses: !1
            };

            function Z(e, t) {
                return function(s) {
                    void 0 === s && (s = {});
                    const i = Object.keys(s)[0],
                        n = s[i];
                    "object" === typeof n && null !== n ? (["navigation", "pagination", "scrollbar"].indexOf(i) >= 0 && !0 === e[i] && (e[i] = {
                        auto: !0
                    }), i in e && "enabled" in n ? (!0 === e[i] && (e[i] = {
                        enabled: !0
                    }), "object" !== typeof e[i] || "enabled" in e[i] || (e[i].enabled = !0), e[i] || (e[i] = {
                        enabled: !1
                    }), T(t, s)) : T(t, s)) : T(t, s)
                }
            }
            const J = {
                    eventsEmitter: L,
                    update: z,
                    translate: D,
                    transition: {
                        setTransition: function(e, t) {
                            const s = this;
                            s.params.cssMode || s.$wrapperEl.transition(e), s.emit("setTransition", e, t)
                        },
                        transitionStart: function(e, t) {
                            void 0 === e && (e = !0);
                            const s = this,
                                {
                                    params: i
                                } = s;
                            i.cssMode || (i.autoHeight && s.updateAutoHeight(), I({
                                swiper: s,
                                runCallbacks: e,
                                direction: t,
                                step: "Start"
                            }))
                        },
                        transitionEnd: function(e, t) {
                            void 0 === e && (e = !0);
                            const s = this,
                                {
                                    params: i
                                } = s;
                            s.animating = !1, i.cssMode || (s.setTransition(0), I({
                                swiper: s,
                                runCallbacks: e,
                                direction: t,
                                step: "End"
                            }))
                        }
                    },
                    slide: _,
                    loop: A,
                    grabCursor: {
                        setGrabCursor: function(e) {
                            const t = this;
                            if (t.support.touch || !t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
                            const s = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
                            s.style.cursor = "move", s.style.cursor = e ? "grabbing" : "grab"
                        },
                        unsetGrabCursor: function() {
                            const e = this;
                            e.support.touch || e.params.watchOverflow && e.isLocked || e.params.cssMode || (e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "")
                        }
                    },
                    events: W,
                    breakpoints: Y,
                    checkOverflow: {
                        checkOverflow: function() {
                            const e = this,
                                {
                                    isLocked: t,
                                    params: s
                                } = e,
                                {
                                    slidesOffsetBefore: i
                                } = s;
                            if (i) {
                                const t = e.slides.length - 1,
                                    s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * i;
                                e.isLocked = e.size > s
                            } else e.isLocked = 1 === e.snapGrid.length;
                            !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked), !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
                        }
                    },
                    classes: U,
                    images: {
                        loadImage: function(e, t, s, i, n, a) {
                            const r = o();
                            let l;

                            function d() {
                                a && a()
                            }
                            g(e).parent("picture")[0] || e.complete && n ? d() : t ? (l = new r.Image, l.onload = d, l.onerror = d, i && (l.sizes = i), s && (l.srcset = s), t && (l.src = t)) : d()
                        },
                        preloadImages: function() {
                            const e = this;

                            function t() {
                                "undefined" !== typeof e && null !== e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
                            }
                            e.imagesToLoad = e.$el.find("img");
                            for (let s = 0; s < e.imagesToLoad.length; s += 1) {
                                const i = e.imagesToLoad[s];
                                e.loadImage(i, i.currentSrc || i.getAttribute("src"), i.srcset || i.getAttribute("srcset"), i.sizes || i.getAttribute("sizes"), !0, t)
                            }
                        }
                    }
                },
                Q = {};
            class ee {
                constructor() {
                    let e, t;
                    for (var s = arguments.length, i = new Array(s), n = 0; n < s; n++) i[n] = arguments[n];
                    if (1 === i.length && i[0].constructor && "Object" === Object.prototype.toString.call(i[0]).slice(8, -1) ? t = i[0] : [e, t] = i, t || (t = {}), t = T({}, t), e && !t.el && (t.el = e), t.el && g(t.el).length > 1) {
                        const e = [];
                        return g(t.el).each((s => {
                            const i = T({}, t, {
                                el: s
                            });
                            e.push(new ee(i))
                        })), e
                    }
                    const a = this;
                    a.__swiper__ = !0, a.support = k(), a.device = P({
                        userAgent: t.userAgent
                    }), a.browser = O(), a.eventsListeners = {}, a.eventsAnyListeners = [], a.modules = [...a.__modules__], t.modules && Array.isArray(t.modules) && a.modules.push(...t.modules);
                    const r = {};
                    a.modules.forEach((e => {
                        e({
                            swiper: a,
                            extendParams: Z(t, r),
                            on: a.on.bind(a),
                            once: a.once.bind(a),
                            off: a.off.bind(a),
                            emit: a.emit.bind(a)
                        })
                    }));
                    const l = T({}, K, r);
                    return a.params = T({}, l, Q, t), a.originalParams = T({}, a.params), a.passedParams = T({}, t), a.params && a.params.on && Object.keys(a.params.on).forEach((e => {
                        a.on(e, a.params.on[e])
                    })), a.params && a.params.onAny && a.onAny(a.params.onAny), a.$ = g, Object.assign(a, {
                        enabled: a.params.enabled,
                        el: e,
                        classNames: [],
                        slides: g(),
                        slidesGrid: [],
                        snapGrid: [],
                        slidesSizesGrid: [],
                        isHorizontal: () => "horizontal" === a.params.direction,
                        isVertical: () => "vertical" === a.params.direction,
                        activeIndex: 0,
                        realIndex: 0,
                        isBeginning: !0,
                        isEnd: !1,
                        translate: 0,
                        previousTranslate: 0,
                        progress: 0,
                        velocity: 0,
                        animating: !1,
                        allowSlideNext: a.params.allowSlideNext,
                        allowSlidePrev: a.params.allowSlidePrev,
                        touchEvents: function() {
                            const e = ["touchstart", "touchmove", "touchend", "touchcancel"],
                                t = ["pointerdown", "pointermove", "pointerup"];
                            return a.touchEventsTouch = {
                                start: e[0],
                                move: e[1],
                                end: e[2],
                                cancel: e[3]
                            }, a.touchEventsDesktop = {
                                start: t[0],
                                move: t[1],
                                end: t[2]
                            }, a.support.touch || !a.params.simulateTouch ? a.touchEventsTouch : a.touchEventsDesktop
                        }(),
                        touchEventsData: {
                            isTouched: void 0,
                            isMoved: void 0,
                            allowTouchCallbacks: void 0,
                            touchStartTime: void 0,
                            isScrolling: void 0,
                            currentTranslate: void 0,
                            startTranslate: void 0,
                            allowThresholdMove: void 0,
                            focusableElements: a.params.focusableElements,
                            lastClickTime: b(),
                            clickTimeout: void 0,
                            velocities: [],
                            allowMomentumBounce: void 0,
                            isTouchEvent: void 0,
                            startMoving: void 0
                        },
                        allowClick: !0,
                        allowTouchMove: a.params.allowTouchMove,
                        touches: {
                            startX: 0,
                            startY: 0,
                            currentX: 0,
                            currentY: 0,
                            diff: 0
                        },
                        imagesToLoad: [],
                        imagesLoaded: 0
                    }), a.emit("_swiper"), a.params.init && a.init(), a
                }
                enable() {
                    const e = this;
                    e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"))
                }
                disable() {
                    const e = this;
                    e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"))
                }
                setProgress(e, t) {
                    const s = this;
                    e = Math.min(Math.max(e, 0), 1);
                    const i = s.minTranslate(),
                        n = (s.maxTranslate() - i) * e + i;
                    s.translateTo(n, "undefined" === typeof t ? 0 : t), s.updateActiveIndex(), s.updateSlidesClasses()
                }
                emitContainerClasses() {
                    const e = this;
                    if (!e.params._emitClasses || !e.el) return;
                    const t = e.el.className.split(" ").filter((t => 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass)));
                    e.emit("_containerClasses", t.join(" "))
                }
                getSlideClasses(e) {
                    const t = this;
                    return t.destroyed ? "" : e.className.split(" ").filter((e => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass))).join(" ")
                }
                emitSlidesClasses() {
                    const e = this;
                    if (!e.params._emitClasses || !e.el) return;
                    const t = [];
                    e.slides.each((s => {
                        const i = e.getSlideClasses(s);
                        t.push({
                            slideEl: s,
                            classNames: i
                        }), e.emit("_slideClass", s, i)
                    })), e.emit("_slideClasses", t)
                }
                slidesPerViewDynamic(e, t) {
                    void 0 === e && (e = "current"), void 0 === t && (t = !1);
                    const {
                        params: s,
                        slides: i,
                        slidesGrid: n,
                        slidesSizesGrid: a,
                        size: r,
                        activeIndex: l
                    } = this;
                    let o = 1;
                    if (s.centeredSlides) {
                        let e, t = i[l].swiperSlideSize;
                        for (let s = l + 1; s < i.length; s += 1) i[s] && !e && (t += i[s].swiperSlideSize, o += 1, t > r && (e = !0));
                        for (let s = l - 1; s >= 0; s -= 1) i[s] && !e && (t += i[s].swiperSlideSize, o += 1, t > r && (e = !0))
                    } else if ("current" === e)
                        for (let d = l + 1; d < i.length; d += 1) {
                            (t ? n[d] + a[d] - n[l] < r : n[d] - n[l] < r) && (o += 1)
                        } else
                            for (let d = l - 1; d >= 0; d -= 1) {
                                n[l] - n[d] < r && (o += 1)
                            }
                    return o
                }
                update() {
                    const e = this;
                    if (!e || e.destroyed) return;
                    const {
                        snapGrid: t,
                        params: s
                    } = e;

                    function i() {
                        const t = e.rtlTranslate ? -1 * e.translate : e.translate,
                            s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                        e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses()
                    }
                    let n;
                    s.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode && e.params.freeMode.enabled ? (i(), e.params.autoHeight && e.updateAutoHeight()) : (n = ("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), n || i()), s.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
                }
                changeDirection(e, t) {
                    void 0 === t && (t = !0);
                    const s = this,
                        i = s.params.direction;
                    return e || (e = "horizontal" === i ? "vertical" : "horizontal"), e === i || "horizontal" !== e && "vertical" !== e || (s.$el.removeClass(`${s.params.containerModifierClass}${i}`).addClass(`${s.params.containerModifierClass}${e}`), s.emitContainerClasses(), s.params.direction = e, s.slides.each((t => {
                        "vertical" === e ? t.style.width = "" : t.style.height = ""
                    })), s.emit("changeDirection"), t && s.update()), s
                }
                changeLanguageDirection(e) {
                    const t = this;
                    t.rtl && "rtl" === e || !t.rtl && "ltr" === e || (t.rtl = "rtl" === e, t.rtlTranslate = "horizontal" === t.params.direction && t.rtl, t.rtl ? (t.$el.addClass(`${t.params.containerModifierClass}rtl`), t.el.dir = "rtl") : (t.$el.removeClass(`${t.params.containerModifierClass}rtl`), t.el.dir = "ltr"), t.update())
                }
                mount(e) {
                    const t = this;
                    if (t.mounted) return !0;
                    const s = g(e || t.params.el);
                    if (!(e = s[0])) return !1;
                    e.swiper = t;
                    const i = () => `.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;
                    let n = (() => {
                        if (e && e.shadowRoot && e.shadowRoot.querySelector) {
                            const t = g(e.shadowRoot.querySelector(i()));
                            return t.children = e => s.children(e), t
                        }
                        return s.children ? s.children(i()) : g(s).children(i())
                    })();
                    if (0 === n.length && t.params.createElements) {
                        const e = r().createElement("div");
                        n = g(e), e.className = t.params.wrapperClass, s.append(e), s.children(`.${t.params.slideClass}`).each((e => {
                            n.append(e)
                        }))
                    }
                    return Object.assign(t, {
                        $el: s,
                        el: e,
                        $wrapperEl: n,
                        wrapperEl: n[0],
                        mounted: !0,
                        rtl: "rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction"),
                        rtlTranslate: "horizontal" === t.params.direction && ("rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction")),
                        wrongRTL: "-webkit-box" === n.css("display")
                    }), !0
                }
                init(e) {
                    const t = this;
                    if (t.initialized) return t;
                    return !1 === t.mount(e) || (t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.params.loop && t.loopCreate(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.preloadImages && t.preloadImages(), t.params.loop ? t.slideTo(t.params.initialSlide + t.loopedSlides, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.attachEvents(), t.initialized = !0, t.emit("init"), t.emit("afterInit")), t
                }
                destroy(e, t) {
                    void 0 === e && (e = !0), void 0 === t && (t = !0);
                    const s = this,
                        {
                            params: i,
                            $el: n,
                            $wrapperEl: a,
                            slides: r
                        } = s;
                    return "undefined" === typeof s.params || s.destroyed || (s.emit("beforeDestroy"), s.initialized = !1, s.detachEvents(), i.loop && s.loopDestroy(), t && (s.removeClasses(), n.removeAttr("style"), a.removeAttr("style"), r && r.length && r.removeClass([i.slideVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), s.emit("destroy"), Object.keys(s.eventsListeners).forEach((e => {
                        s.off(e)
                    })), !1 !== e && (s.$el[0].swiper = null, function(e) {
                        const t = e;
                        Object.keys(t).forEach((e => {
                            try {
                                t[e] = null
                            } catch (s) {}
                            try {
                                delete t[e]
                            } catch (s) {}
                        }))
                    }(s)), s.destroyed = !0), null
                }
                static extendDefaults(e) {
                    T(Q, e)
                }
                static get extendedDefaults() {
                    return Q
                }
                static get defaults() {
                    return K
                }
                static installModule(e) {
                    ee.prototype.__modules__ || (ee.prototype.__modules__ = []);
                    const t = ee.prototype.__modules__;
                    "function" === typeof e && t.indexOf(e) < 0 && t.push(e)
                }
                static use(e) {
                    return Array.isArray(e) ? (e.forEach((e => ee.installModule(e))), ee) : (ee.installModule(e), ee)
                }
            }
            Object.keys(J).forEach((e => {
                Object.keys(J[e]).forEach((t => {
                    ee.prototype[t] = J[e][t]
                }))
            })), ee.use([function(e) {
                let {
                    swiper: t,
                    on: s,
                    emit: i
                } = e;
                const n = o();
                let a = null,
                    r = null;
                const l = () => {
                        t && !t.destroyed && t.initialized && (i("beforeResize"), i("resize"))
                    },
                    d = () => {
                        t && !t.destroyed && t.initialized && i("orientationchange")
                    };
                s("init", (() => {
                    t.params.resizeObserver && "undefined" !== typeof n.ResizeObserver ? t && !t.destroyed && t.initialized && (a = new ResizeObserver((e => {
                        r = n.requestAnimationFrame((() => {
                            const {
                                width: s,
                                height: i
                            } = t;
                            let n = s,
                                a = i;
                            e.forEach((e => {
                                let {
                                    contentBoxSize: s,
                                    contentRect: i,
                                    target: r
                                } = e;
                                r && r !== t.el || (n = i ? i.width : (s[0] || s).inlineSize, a = i ? i.height : (s[0] || s).blockSize)
                            })), n === s && a === i || l()
                        }))
                    })), a.observe(t.el)) : (n.addEventListener("resize", l), n.addEventListener("orientationchange", d))
                })), s("destroy", (() => {
                    r && n.cancelAnimationFrame(r), a && a.unobserve && t.el && (a.unobserve(t.el), a = null), n.removeEventListener("resize", l), n.removeEventListener("orientationchange", d)
                }))
            }, function(e) {
                let {
                    swiper: t,
                    extendParams: s,
                    on: i,
                    emit: n
                } = e;
                const a = [],
                    r = o(),
                    l = function(e, t) {
                        void 0 === t && (t = {});
                        const s = new(r.MutationObserver || r.WebkitMutationObserver)((e => {
                            if (1 === e.length) return void n("observerUpdate", e[0]);
                            const t = function() {
                                n("observerUpdate", e[0])
                            };
                            r.requestAnimationFrame ? r.requestAnimationFrame(t) : r.setTimeout(t, 0)
                        }));
                        s.observe(e, {
                            attributes: "undefined" === typeof t.attributes || t.attributes,
                            childList: "undefined" === typeof t.childList || t.childList,
                            characterData: "undefined" === typeof t.characterData || t.characterData
                        }), a.push(s)
                    };
                s({
                    observer: !1,
                    observeParents: !1,
                    observeSlideChildren: !1
                }), i("init", (() => {
                    if (t.params.observer) {
                        if (t.params.observeParents) {
                            const e = t.$el.parents();
                            for (let t = 0; t < e.length; t += 1) l(e[t])
                        }
                        l(t.$el[0], {
                            childList: t.params.observeSlideChildren
                        }), l(t.$wrapperEl[0], {
                            attributes: !1
                        })
                    }
                })), i("destroy", (() => {
                    a.forEach((e => {
                        e.disconnect()
                    })), a.splice(0, a.length)
                }))
            }]);
            var te = ee;

            function se(e) {
                let {
                    swiper: t,
                    extendParams: s,
                    on: i,
                    emit: n
                } = e;
                const a = r(),
                    l = o();

                function d(e) {
                    if (!t.enabled) return;
                    const {
                        rtlTranslate: s
                    } = t;
                    let i = e;
                    i.originalEvent && (i = i.originalEvent);
                    const r = i.keyCode || i.charCode,
                        o = t.params.keyboard.pageUpDown,
                        d = o && 33 === r,
                        c = o && 34 === r,
                        p = 37 === r,
                        u = 39 === r,
                        f = 38 === r,
                        h = 40 === r;
                    if (!t.allowSlideNext && (t.isHorizontal() && u || t.isVertical() && h || c)) return !1;
                    if (!t.allowSlidePrev && (t.isHorizontal() && p || t.isVertical() && f || d)) return !1;
                    if (!(i.shiftKey || i.altKey || i.ctrlKey || i.metaKey) && (!a.activeElement || !a.activeElement.nodeName || "input" !== a.activeElement.nodeName.toLowerCase() && "textarea" !== a.activeElement.nodeName.toLowerCase())) {
                        if (t.params.keyboard.onlyInViewport && (d || c || p || u || f || h)) {
                            let e = !1;
                            if (t.$el.parents(`.${t.params.slideClass}`).length > 0 && 0 === t.$el.parents(`.${t.params.slideActiveClass}`).length) return;
                            const i = t.$el,
                                n = i[0].clientWidth,
                                a = i[0].clientHeight,
                                r = l.innerWidth,
                                o = l.innerHeight,
                                d = t.$el.offset();
                            s && (d.left -= t.$el[0].scrollLeft);
                            const c = [
                                [d.left, d.top],
                                [d.left + n, d.top],
                                [d.left, d.top + a],
                                [d.left + n, d.top + a]
                            ];
                            for (let t = 0; t < c.length; t += 1) {
                                const s = c[t];
                                if (s[0] >= 0 && s[0] <= r && s[1] >= 0 && s[1] <= o) {
                                    if (0 === s[0] && 0 === s[1]) continue;
                                    e = !0
                                }
                            }
                            if (!e) return
                        }
                        t.isHorizontal() ? ((d || c || p || u) && (i.preventDefault ? i.preventDefault() : i.returnValue = !1), ((c || u) && !s || (d || p) && s) && t.slideNext(), ((d || p) && !s || (c || u) && s) && t.slidePrev()) : ((d || c || f || h) && (i.preventDefault ? i.preventDefault() : i.returnValue = !1), (c || h) && t.slideNext(), (d || f) && t.slidePrev()), n("keyPress", r)
                    }
                }

                function c() {
                    t.keyboard.enabled || (g(a).on("keydown", d), t.keyboard.enabled = !0)
                }

                function p() {
                    t.keyboard.enabled && (g(a).off("keydown", d), t.keyboard.enabled = !1)
                }
                t.keyboard = {
                    enabled: !1
                }, s({
                    keyboard: {
                        enabled: !1,
                        onlyInViewport: !0,
                        pageUpDown: !0
                    }
                }), i("init", (() => {
                    t.params.keyboard.enabled && c()
                })), i("destroy", (() => {
                    t.keyboard.enabled && p()
                })), Object.assign(t.keyboard, {
                    enable: c,
                    disable: p
                })
            }

            function ie(e) {
                let {
                    swiper: t,
                    extendParams: s,
                    on: i,
                    emit: n
                } = e;
                const a = o();
                let r;
                s({
                    mousewheel: {
                        enabled: !1,
                        releaseOnEdges: !1,
                        invert: !1,
                        forceToAxis: !1,
                        sensitivity: 1,
                        eventsTarget: "container",
                        thresholdDelta: null,
                        thresholdTime: null
                    }
                }), t.mousewheel = {
                    enabled: !1
                };
                let l, d = b();
                const c = [];

                function p() {
                    t.enabled && (t.mouseEntered = !0)
                }

                function u() {
                    t.enabled && (t.mouseEntered = !1)
                }

                function f(e) {
                    return !(t.params.mousewheel.thresholdDelta && e.delta < t.params.mousewheel.thresholdDelta) && (!(t.params.mousewheel.thresholdTime && b() - d < t.params.mousewheel.thresholdTime) && (e.delta >= 6 && b() - d < 60 || (e.direction < 0 ? t.isEnd && !t.params.loop || t.animating || (t.slideNext(), n("scroll", e.raw)) : t.isBeginning && !t.params.loop || t.animating || (t.slidePrev(), n("scroll", e.raw)), d = (new a.Date).getTime(), !1)))
                }

                function h(e) {
                    let s = e,
                        i = !0;
                    if (!t.enabled) return;
                    const a = t.params.mousewheel;
                    t.params.cssMode && s.preventDefault();
                    let o = t.$el;
                    if ("container" !== t.params.mousewheel.eventsTarget && (o = g(t.params.mousewheel.eventsTarget)), !t.mouseEntered && !o[0].contains(s.target) && !a.releaseOnEdges) return !0;
                    s.originalEvent && (s = s.originalEvent);
                    let d = 0;
                    const p = t.rtlTranslate ? -1 : 1,
                        u = function(e) {
                            let t = 0,
                                s = 0,
                                i = 0,
                                n = 0;
                            return "detail" in e && (s = e.detail), "wheelDelta" in e && (s = -e.wheelDelta / 120), "wheelDeltaY" in e && (s = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = s, s = 0), i = 10 * t, n = 10 * s, "deltaY" in e && (n = e.deltaY), "deltaX" in e && (i = e.deltaX), e.shiftKey && !i && (i = n, n = 0), (i || n) && e.deltaMode && (1 === e.deltaMode ? (i *= 40, n *= 40) : (i *= 800, n *= 800)), i && !t && (t = i < 1 ? -1 : 1), n && !s && (s = n < 1 ? -1 : 1), {
                                spinX: t,
                                spinY: s,
                                pixelX: i,
                                pixelY: n
                            }
                        }(s);
                    if (a.forceToAxis)
                        if (t.isHorizontal()) {
                            if (!(Math.abs(u.pixelX) > Math.abs(u.pixelY))) return !0;
                            d = -u.pixelX * p
                        } else {
                            if (!(Math.abs(u.pixelY) > Math.abs(u.pixelX))) return !0;
                            d = -u.pixelY
                        }
                    else d = Math.abs(u.pixelX) > Math.abs(u.pixelY) ? -u.pixelX * p : -u.pixelY;
                    if (0 === d) return !0;
                    a.invert && (d = -d);
                    let h = t.getTranslate() + d * a.sensitivity;
                    if (h >= t.minTranslate() && (h = t.minTranslate()), h <= t.maxTranslate() && (h = t.maxTranslate()), i = !!t.params.loop || !(h === t.minTranslate() || h === t.maxTranslate()), i && t.params.nested && s.stopPropagation(), t.params.freeMode && t.params.freeMode.enabled) {
                        const e = {
                                time: b(),
                                delta: Math.abs(d),
                                direction: Math.sign(d)
                            },
                            i = l && e.time < l.time + 500 && e.delta <= l.delta && e.direction === l.direction;
                        if (!i) {
                            l = void 0, t.params.loop && t.loopFix();
                            let o = t.getTranslate() + d * a.sensitivity;
                            const p = t.isBeginning,
                                u = t.isEnd;
                            if (o >= t.minTranslate() && (o = t.minTranslate()), o <= t.maxTranslate() && (o = t.maxTranslate()), t.setTransition(0), t.setTranslate(o), t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses(), (!p && t.isBeginning || !u && t.isEnd) && t.updateSlidesClasses(), t.params.freeMode.sticky) {
                                clearTimeout(r), r = void 0, c.length >= 15 && c.shift();
                                const s = c.length ? c[c.length - 1] : void 0,
                                    i = c[0];
                                if (c.push(e), s && (e.delta > s.delta || e.direction !== s.direction)) c.splice(0);
                                else if (c.length >= 15 && e.time - i.time < 500 && i.delta - e.delta >= 1 && e.delta <= 6) {
                                    const s = d > 0 ? .8 : .2;
                                    l = e, c.splice(0), r = v((() => {
                                        t.slideToClosest(t.params.speed, !0, void 0, s)
                                    }), 0)
                                }
                                r || (r = v((() => {
                                    l = e, c.splice(0), t.slideToClosest(t.params.speed, !0, void 0, .5)
                                }), 500))
                            }
                            if (i || n("scroll", s), t.params.autoplay && t.params.autoplayDisableOnInteraction && t.autoplay.stop(), o === t.minTranslate() || o === t.maxTranslate()) return !0
                        }
                    } else {
                        const s = {
                            time: b(),
                            delta: Math.abs(d),
                            direction: Math.sign(d),
                            raw: e
                        };
                        c.length >= 2 && c.shift();
                        const i = c.length ? c[c.length - 1] : void 0;
                        if (c.push(s), i ? (s.direction !== i.direction || s.delta > i.delta || s.time > i.time + 150) && f(s) : f(s), function(e) {
                                const s = t.params.mousewheel;
                                if (e.direction < 0) {
                                    if (t.isEnd && !t.params.loop && s.releaseOnEdges) return !0
                                } else if (t.isBeginning && !t.params.loop && s.releaseOnEdges) return !0;
                                return !1
                            }(s)) return !0
                    }
                    return s.preventDefault ? s.preventDefault() : s.returnValue = !1, !1
                }

                function m(e) {
                    let s = t.$el;
                    "container" !== t.params.mousewheel.eventsTarget && (s = g(t.params.mousewheel.eventsTarget)), s[e]("mouseenter", p), s[e]("mouseleave", u), s[e]("wheel", h)
                }

                function w() {
                    return t.params.cssMode ? (t.wrapperEl.removeEventListener("wheel", h), !0) : !t.mousewheel.enabled && (m("on"), t.mousewheel.enabled = !0, !0)
                }

                function y() {
                    return t.params.cssMode ? (t.wrapperEl.addEventListener(event, h), !0) : !!t.mousewheel.enabled && (m("off"), t.mousewheel.enabled = !1, !0)
                }
                i("init", (() => {
                    !t.params.mousewheel.enabled && t.params.cssMode && y(), t.params.mousewheel.enabled && w()
                })), i("destroy", (() => {
                    t.params.cssMode && w(), t.mousewheel.enabled && y()
                })), Object.assign(t.mousewheel, {
                    enable: w,
                    disable: y
                })
            }

            function ne(e, t, s, i) {
                const n = r();
                return e.params.createElements && Object.keys(i).forEach((a => {
                    if (!s[a] && !0 === s.auto) {
                        let r = e.$el.children(`.${i[a]}`)[0];
                        r || (r = n.createElement("div"), r.className = i[a], e.$el.append(r)), s[a] = r, t[a] = r
                    }
                })), s
            }

            function ae(e) {
                let {
                    swiper: t,
                    extendParams: s,
                    on: i,
                    emit: n
                } = e;

                function a(e) {
                    let s;
                    return e && (s = g(e), t.params.uniqueNavElements && "string" === typeof e && s.length > 1 && 1 === t.$el.find(e).length && (s = t.$el.find(e))), s
                }

                function r(e, s) {
                    const i = t.params.navigation;
                    e && e.length > 0 && (e[s ? "addClass" : "removeClass"](i.disabledClass), e[0] && "BUTTON" === e[0].tagName && (e[0].disabled = s), t.params.watchOverflow && t.enabled && e[t.isLocked ? "addClass" : "removeClass"](i.lockClass))
                }

                function l() {
                    if (t.params.loop) return;
                    const {
                        $nextEl: e,
                        $prevEl: s
                    } = t.navigation;
                    r(s, t.isBeginning && !t.params.rewind), r(e, t.isEnd && !t.params.rewind)
                }

                function o(e) {
                    e.preventDefault(), (!t.isBeginning || t.params.loop || t.params.rewind) && (t.slidePrev(), n("navigationPrev"))
                }

                function d(e) {
                    e.preventDefault(), (!t.isEnd || t.params.loop || t.params.rewind) && (t.slideNext(), n("navigationNext"))
                }

                function c() {
                    const e = t.params.navigation;
                    if (t.params.navigation = ne(t, t.originalParams.navigation, t.params.navigation, {
                            nextEl: "swiper-button-next",
                            prevEl: "swiper-button-prev"
                        }), !e.nextEl && !e.prevEl) return;
                    const s = a(e.nextEl),
                        i = a(e.prevEl);
                    s && s.length > 0 && s.on("click", d), i && i.length > 0 && i.on("click", o), Object.assign(t.navigation, {
                        $nextEl: s,
                        nextEl: s && s[0],
                        $prevEl: i,
                        prevEl: i && i[0]
                    }), t.enabled || (s && s.addClass(e.lockClass), i && i.addClass(e.lockClass))
                }

                function p() {
                    const {
                        $nextEl: e,
                        $prevEl: s
                    } = t.navigation;
                    e && e.length && (e.off("click", d), e.removeClass(t.params.navigation.disabledClass)), s && s.length && (s.off("click", o), s.removeClass(t.params.navigation.disabledClass))
                }
                s({
                    navigation: {
                        nextEl: null,
                        prevEl: null,
                        hideOnClick: !1,
                        disabledClass: "swiper-button-disabled",
                        hiddenClass: "swiper-button-hidden",
                        lockClass: "swiper-button-lock",
                        navigationDisabledClass: "swiper-navigation-disabled"
                    }
                }), t.navigation = {
                    nextEl: null,
                    $nextEl: null,
                    prevEl: null,
                    $prevEl: null
                }, i("init", (() => {
                    !1 === t.params.navigation.enabled ? u() : (c(), l())
                })), i("toEdge fromEdge lock unlock", (() => {
                    l()
                })), i("destroy", (() => {
                    p()
                })), i("enable disable", (() => {
                    const {
                        $nextEl: e,
                        $prevEl: s
                    } = t.navigation;
                    e && e[t.enabled ? "removeClass" : "addClass"](t.params.navigation.lockClass), s && s[t.enabled ? "removeClass" : "addClass"](t.params.navigation.lockClass)
                })), i("click", ((e, s) => {
                    const {
                        $nextEl: i,
                        $prevEl: a
                    } = t.navigation, r = s.target;
                    if (t.params.navigation.hideOnClick && !g(r).is(a) && !g(r).is(i)) {
                        if (t.pagination && t.params.pagination && t.params.pagination.clickable && (t.pagination.el === r || t.pagination.el.contains(r))) return;
                        let e;
                        i ? e = i.hasClass(t.params.navigation.hiddenClass) : a && (e = a.hasClass(t.params.navigation.hiddenClass)), n(!0 === e ? "navigationShow" : "navigationHide"), i && i.toggleClass(t.params.navigation.hiddenClass), a && a.toggleClass(t.params.navigation.hiddenClass)
                    }
                }));
                const u = () => {
                    t.$el.addClass(t.params.navigation.navigationDisabledClass), p()
                };
                Object.assign(t.navigation, {
                    enable: () => {
                        t.$el.removeClass(t.params.navigation.navigationDisabledClass), c(), l()
                    },
                    disable: u,
                    update: l,
                    init: c,
                    destroy: p
                })
            }

            function re(e) {
                return void 0 === e && (e = ""), `.${e.trim().replace(/([\.:!\/])/g,"\\$1").replace(/ /g,".")}`
            }

            function le(e) {
                let {
                    swiper: t,
                    extendParams: s,
                    on: i,
                    emit: n
                } = e;
                const a = "swiper-pagination";
                let r;
                s({
                    pagination: {
                        el: null,
                        bulletElement: "span",
                        clickable: !1,
                        hideOnClick: !1,
                        renderBullet: null,
                        renderProgressbar: null,
                        renderFraction: null,
                        renderCustom: null,
                        progressbarOpposite: !1,
                        type: "bullets",
                        dynamicBullets: !1,
                        dynamicMainBullets: 1,
                        formatFractionCurrent: e => e,
                        formatFractionTotal: e => e,
                        bulletClass: `${a}-bullet`,
                        bulletActiveClass: `${a}-bullet-active`,
                        modifierClass: `${a}-`,
                        currentClass: `${a}-current`,
                        totalClass: `${a}-total`,
                        hiddenClass: `${a}-hidden`,
                        progressbarFillClass: `${a}-progressbar-fill`,
                        progressbarOppositeClass: `${a}-progressbar-opposite`,
                        clickableClass: `${a}-clickable`,
                        lockClass: `${a}-lock`,
                        horizontalClass: `${a}-horizontal`,
                        verticalClass: `${a}-vertical`,
                        paginationDisabledClass: `${a}-disabled`
                    }
                }), t.pagination = {
                    el: null,
                    $el: null,
                    bullets: []
                };
                let l = 0;

                function o() {
                    return !t.params.pagination.el || !t.pagination.el || !t.pagination.$el || 0 === t.pagination.$el.length
                }

                function d(e, s) {
                    const {
                        bulletActiveClass: i
                    } = t.params.pagination;
                    e[s]().addClass(`${i}-${s}`)[s]().addClass(`${i}-${s}-${s}`)
                }

                function c() {
                    const e = t.rtl,
                        s = t.params.pagination;
                    if (o()) return;
                    const i = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
                        a = t.pagination.$el;
                    let c;
                    const p = t.params.loop ? Math.ceil((i - 2 * t.loopedSlides) / t.params.slidesPerGroup) : t.snapGrid.length;
                    if (t.params.loop ? (c = Math.ceil((t.activeIndex - t.loopedSlides) / t.params.slidesPerGroup), c > i - 1 - 2 * t.loopedSlides && (c -= i - 2 * t.loopedSlides), c > p - 1 && (c -= p), c < 0 && "bullets" !== t.params.paginationType && (c = p + c)) : c = "undefined" !== typeof t.snapIndex ? t.snapIndex : t.activeIndex || 0, "bullets" === s.type && t.pagination.bullets && t.pagination.bullets.length > 0) {
                        const i = t.pagination.bullets;
                        let n, o, p;
                        if (s.dynamicBullets && (r = i.eq(0)[t.isHorizontal() ? "outerWidth" : "outerHeight"](!0), a.css(t.isHorizontal() ? "width" : "height", r * (s.dynamicMainBullets + 4) + "px"), s.dynamicMainBullets > 1 && void 0 !== t.previousIndex && (l += c - (t.previousIndex - t.loopedSlides || 0), l > s.dynamicMainBullets - 1 ? l = s.dynamicMainBullets - 1 : l < 0 && (l = 0)), n = Math.max(c - l, 0), o = n + (Math.min(i.length, s.dynamicMainBullets) - 1), p = (o + n) / 2), i.removeClass(["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((e => `${s.bulletActiveClass}${e}`)).join(" ")), a.length > 1) i.each((e => {
                            const t = g(e),
                                i = t.index();
                            i === c && t.addClass(s.bulletActiveClass), s.dynamicBullets && (i >= n && i <= o && t.addClass(`${s.bulletActiveClass}-main`), i === n && d(t, "prev"), i === o && d(t, "next"))
                        }));
                        else {
                            const e = i.eq(c),
                                a = e.index();
                            if (e.addClass(s.bulletActiveClass), s.dynamicBullets) {
                                const e = i.eq(n),
                                    r = i.eq(o);
                                for (let t = n; t <= o; t += 1) i.eq(t).addClass(`${s.bulletActiveClass}-main`);
                                if (t.params.loop)
                                    if (a >= i.length) {
                                        for (let e = s.dynamicMainBullets; e >= 0; e -= 1) i.eq(i.length - e).addClass(`${s.bulletActiveClass}-main`);
                                        i.eq(i.length - s.dynamicMainBullets - 1).addClass(`${s.bulletActiveClass}-prev`)
                                    } else d(e, "prev"), d(r, "next");
                                else d(e, "prev"), d(r, "next")
                            }
                        }
                        if (s.dynamicBullets) {
                            const n = Math.min(i.length, s.dynamicMainBullets + 4),
                                a = (r * n - r) / 2 - p * r,
                                l = e ? "right" : "left";
                            i.css(t.isHorizontal() ? l : "top", `${a}px`)
                        }
                    }
                    if ("fraction" === s.type && (a.find(re(s.currentClass)).text(s.formatFractionCurrent(c + 1)), a.find(re(s.totalClass)).text(s.formatFractionTotal(p))), "progressbar" === s.type) {
                        let e;
                        e = s.progressbarOpposite ? t.isHorizontal() ? "vertical" : "horizontal" : t.isHorizontal() ? "horizontal" : "vertical";
                        const i = (c + 1) / p;
                        let n = 1,
                            r = 1;
                        "horizontal" === e ? n = i : r = i, a.find(re(s.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${n}) scaleY(${r})`).transition(t.params.speed)
                    }
                    "custom" === s.type && s.renderCustom ? (a.html(s.renderCustom(t, c + 1, p)), n("paginationRender", a[0])) : n("paginationUpdate", a[0]), t.params.watchOverflow && t.enabled && a[t.isLocked ? "addClass" : "removeClass"](s.lockClass)
                }

                function p() {
                    const e = t.params.pagination;
                    if (o()) return;
                    const s = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
                        i = t.pagination.$el;
                    let a = "";
                    if ("bullets" === e.type) {
                        let n = t.params.loop ? Math.ceil((s - 2 * t.loopedSlides) / t.params.slidesPerGroup) : t.snapGrid.length;
                        t.params.freeMode && t.params.freeMode.enabled && !t.params.loop && n > s && (n = s);
                        for (let s = 0; s < n; s += 1) e.renderBullet ? a += e.renderBullet.call(t, s, e.bulletClass) : a += `<${e.bulletElement} class="${e.bulletClass}"></${e.bulletElement}>`;
                        i.html(a), t.pagination.bullets = i.find(re(e.bulletClass))
                    }
                    "fraction" === e.type && (a = e.renderFraction ? e.renderFraction.call(t, e.currentClass, e.totalClass) : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`, i.html(a)), "progressbar" === e.type && (a = e.renderProgressbar ? e.renderProgressbar.call(t, e.progressbarFillClass) : `<span class="${e.progressbarFillClass}"></span>`, i.html(a)), "custom" !== e.type && n("paginationRender", t.pagination.$el[0])
                }

                function u() {
                    t.params.pagination = ne(t, t.originalParams.pagination, t.params.pagination, {
                        el: "swiper-pagination"
                    });
                    const e = t.params.pagination;
                    if (!e.el) return;
                    let s = g(e.el);
                    0 !== s.length && (t.params.uniqueNavElements && "string" === typeof e.el && s.length > 1 && (s = t.$el.find(e.el), s.length > 1 && (s = s.filter((e => g(e).parents(".swiper")[0] === t.el)))), "bullets" === e.type && e.clickable && s.addClass(e.clickableClass), s.addClass(e.modifierClass + e.type), s.addClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass), "bullets" === e.type && e.dynamicBullets && (s.addClass(`${e.modifierClass}${e.type}-dynamic`), l = 0, e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)), "progressbar" === e.type && e.progressbarOpposite && s.addClass(e.progressbarOppositeClass), e.clickable && s.on("click", re(e.bulletClass), (function(e) {
                        e.preventDefault();
                        let s = g(this).index() * t.params.slidesPerGroup;
                        t.params.loop && (s += t.loopedSlides), t.slideTo(s)
                    })), Object.assign(t.pagination, {
                        $el: s,
                        el: s[0]
                    }), t.enabled || s.addClass(e.lockClass))
                }

                function f() {
                    const e = t.params.pagination;
                    if (o()) return;
                    const s = t.pagination.$el;
                    s.removeClass(e.hiddenClass), s.removeClass(e.modifierClass + e.type), s.removeClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass), t.pagination.bullets && t.pagination.bullets.removeClass && t.pagination.bullets.removeClass(e.bulletActiveClass), e.clickable && s.off("click", re(e.bulletClass))
                }
                i("init", (() => {
                    !1 === t.params.pagination.enabled ? h() : (u(), p(), c())
                })), i("activeIndexChange", (() => {
                    (t.params.loop || "undefined" === typeof t.snapIndex) && c()
                })), i("snapIndexChange", (() => {
                    t.params.loop || c()
                })), i("slidesLengthChange", (() => {
                    t.params.loop && (p(), c())
                })), i("snapGridLengthChange", (() => {
                    t.params.loop || (p(), c())
                })), i("destroy", (() => {
                    f()
                })), i("enable disable", (() => {
                    const {
                        $el: e
                    } = t.pagination;
                    e && e[t.enabled ? "removeClass" : "addClass"](t.params.pagination.lockClass)
                })), i("lock unlock", (() => {
                    c()
                })), i("click", ((e, s) => {
                    const i = s.target,
                        {
                            $el: a
                        } = t.pagination;
                    if (t.params.pagination.el && t.params.pagination.hideOnClick && a && a.length > 0 && !g(i).hasClass(t.params.pagination.bulletClass)) {
                        if (t.navigation && (t.navigation.nextEl && i === t.navigation.nextEl || t.navigation.prevEl && i === t.navigation.prevEl)) return;
                        const e = a.hasClass(t.params.pagination.hiddenClass);
                        n(!0 === e ? "paginationShow" : "paginationHide"), a.toggleClass(t.params.pagination.hiddenClass)
                    }
                }));
                const h = () => {
                    t.$el.addClass(t.params.pagination.paginationDisabledClass), t.pagination.$el && t.pagination.$el.addClass(t.params.pagination.paginationDisabledClass), f()
                };
                Object.assign(t.pagination, {
                    enable: () => {
                        t.$el.removeClass(t.params.pagination.paginationDisabledClass), t.pagination.$el && t.pagination.$el.removeClass(t.params.pagination.paginationDisabledClass), u(), p(), c()
                    },
                    disable: h,
                    render: p,
                    update: c,
                    init: u,
                    destroy: f
                })
            }

            function oe(e) {
                let {
                    swiper: t,
                    extendParams: s,
                    on: i,
                    emit: n
                } = e;
                const a = r();
                let l, o, d, c, p = !1,
                    u = null,
                    f = null;

                function h() {
                    if (!t.params.scrollbar.el || !t.scrollbar.el) return;
                    const {
                        scrollbar: e,
                        rtlTranslate: s,
                        progress: i
                    } = t, {
                        $dragEl: n,
                        $el: a
                    } = e, r = t.params.scrollbar;
                    let l = o,
                        c = (d - o) * i;
                    s ? (c = -c, c > 0 ? (l = o - c, c = 0) : -c + o > d && (l = d + c)) : c < 0 ? (l = o + c, c = 0) : c + o > d && (l = d - c), t.isHorizontal() ? (n.transform(`translate3d(${c}px, 0, 0)`), n[0].style.width = `${l}px`) : (n.transform(`translate3d(0px, ${c}px, 0)`), n[0].style.height = `${l}px`), r.hide && (clearTimeout(u), a[0].style.opacity = 1, u = setTimeout((() => {
                        a[0].style.opacity = 0, a.transition(400)
                    }), 1e3))
                }

                function m() {
                    if (!t.params.scrollbar.el || !t.scrollbar.el) return;
                    const {
                        scrollbar: e
                    } = t, {
                        $dragEl: s,
                        $el: i
                    } = e;
                    s[0].style.width = "", s[0].style.height = "", d = t.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight, c = t.size / (t.virtualSize + t.params.slidesOffsetBefore - (t.params.centeredSlides ? t.snapGrid[0] : 0)), o = "auto" === t.params.scrollbar.dragSize ? d * c : parseInt(t.params.scrollbar.dragSize, 10), t.isHorizontal() ? s[0].style.width = `${o}px` : s[0].style.height = `${o}px`, i[0].style.display = c >= 1 ? "none" : "", t.params.scrollbar.hide && (i[0].style.opacity = 0), t.params.watchOverflow && t.enabled && e.$el[t.isLocked ? "addClass" : "removeClass"](t.params.scrollbar.lockClass)
                }

                function b(e) {
                    return t.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientX : e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientY : e.clientY
                }

                function w(e) {
                    const {
                        scrollbar: s,
                        rtlTranslate: i
                    } = t, {
                        $el: n
                    } = s;
                    let a;
                    a = (b(e) - n.offset()[t.isHorizontal() ? "left" : "top"] - (null !== l ? l : o / 2)) / (d - o), a = Math.max(Math.min(a, 1), 0), i && (a = 1 - a);
                    const r = t.minTranslate() + (t.maxTranslate() - t.minTranslate()) * a;
                    t.updateProgress(r), t.setTranslate(r), t.updateActiveIndex(), t.updateSlidesClasses()
                }

                function y(e) {
                    const s = t.params.scrollbar,
                        {
                            scrollbar: i,
                            $wrapperEl: a
                        } = t,
                        {
                            $el: r,
                            $dragEl: o
                        } = i;
                    p = !0, l = e.target === o[0] || e.target === o ? b(e) - e.target.getBoundingClientRect()[t.isHorizontal() ? "left" : "top"] : null, e.preventDefault(), e.stopPropagation(), a.transition(100), o.transition(100), w(e), clearTimeout(f), r.transition(0), s.hide && r.css("opacity", 1), t.params.cssMode && t.$wrapperEl.css("scroll-snap-type", "none"), n("scrollbarDragStart", e)
                }

                function C(e) {
                    const {
                        scrollbar: s,
                        $wrapperEl: i
                    } = t, {
                        $el: a,
                        $dragEl: r
                    } = s;
                    p && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, w(e), i.transition(0), a.transition(0), r.transition(0), n("scrollbarDragMove", e))
                }

                function T(e) {
                    const s = t.params.scrollbar,
                        {
                            scrollbar: i,
                            $wrapperEl: a
                        } = t,
                        {
                            $el: r
                        } = i;
                    p && (p = !1, t.params.cssMode && (t.$wrapperEl.css("scroll-snap-type", ""), a.transition("")), s.hide && (clearTimeout(f), f = v((() => {
                        r.css("opacity", 0), r.transition(400)
                    }), 1e3)), n("scrollbarDragEnd", e), s.snapOnRelease && t.slideToClosest())
                }

                function E(e) {
                    const {
                        scrollbar: s,
                        touchEventsTouch: i,
                        touchEventsDesktop: n,
                        params: r,
                        support: l
                    } = t, o = s.$el;
                    if (!o) return;
                    const d = o[0],
                        c = !(!l.passiveListener || !r.passiveListeners) && {
                            passive: !1,
                            capture: !1
                        },
                        p = !(!l.passiveListener || !r.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                    if (!d) return;
                    const u = "on" === e ? "addEventListener" : "removeEventListener";
                    l.touch ? (d[u](i.start, y, c), d[u](i.move, C, c), d[u](i.end, T, p)) : (d[u](n.start, y, c), a[u](n.move, C, c), a[u](n.end, T, p))
                }

                function S() {
                    const {
                        scrollbar: e,
                        $el: s
                    } = t;
                    t.params.scrollbar = ne(t, t.originalParams.scrollbar, t.params.scrollbar, {
                        el: "swiper-scrollbar"
                    });
                    const i = t.params.scrollbar;
                    if (!i.el) return;
                    let n = g(i.el);
                    t.params.uniqueNavElements && "string" === typeof i.el && n.length > 1 && 1 === s.find(i.el).length && (n = s.find(i.el)), n.addClass(t.isHorizontal() ? i.horizontalClass : i.verticalClass);
                    let a = n.find(`.${t.params.scrollbar.dragClass}`);
                    0 === a.length && (a = g(`<div class="${t.params.scrollbar.dragClass}"></div>`), n.append(a)), Object.assign(e, {
                        $el: n,
                        el: n[0],
                        $dragEl: a,
                        dragEl: a[0]
                    }), i.draggable && t.params.scrollbar.el && t.scrollbar.el && E("on"), n && n[t.enabled ? "removeClass" : "addClass"](t.params.scrollbar.lockClass)
                }

                function x() {
                    const e = t.params.scrollbar,
                        s = t.scrollbar.$el;
                    s && s.removeClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass), t.params.scrollbar.el && t.scrollbar.el && E("off")
                }
                s({
                    scrollbar: {
                        el: null,
                        dragSize: "auto",
                        hide: !1,
                        draggable: !1,
                        snapOnRelease: !0,
                        lockClass: "swiper-scrollbar-lock",
                        dragClass: "swiper-scrollbar-drag",
                        scrollbarDisabledClass: "swiper-scrollbar-disabled",
                        horizontalClass: "swiper-scrollbar-horizontal",
                        verticalClass: "swiper-scrollbar-vertical"
                    }
                }), t.scrollbar = {
                    el: null,
                    dragEl: null,
                    $el: null,
                    $dragEl: null
                }, i("init", (() => {
                    !1 === t.params.scrollbar.enabled ? $() : (S(), m(), h())
                })), i("update resize observerUpdate lock unlock", (() => {
                    m()
                })), i("setTranslate", (() => {
                    h()
                })), i("setTransition", ((e, s) => {
                    ! function(e) {
                        t.params.scrollbar.el && t.scrollbar.el && t.scrollbar.$dragEl.transition(e)
                    }(s)
                })), i("enable disable", (() => {
                    const {
                        $el: e
                    } = t.scrollbar;
                    e && e[t.enabled ? "removeClass" : "addClass"](t.params.scrollbar.lockClass)
                })), i("destroy", (() => {
                    x()
                }));
                const $ = () => {
                    t.$el.addClass(t.params.scrollbar.scrollbarDisabledClass), t.scrollbar.$el && t.scrollbar.$el.addClass(t.params.scrollbar.scrollbarDisabledClass), x()
                };
                Object.assign(t.scrollbar, {
                    enable: () => {
                        t.$el.removeClass(t.params.scrollbar.scrollbarDisabledClass), t.scrollbar.$el && t.scrollbar.$el.removeClass(t.params.scrollbar.scrollbarDisabledClass), S(), m(), h()
                    },
                    disable: $,
                    updateSize: m,
                    setTranslate: h,
                    init: S,
                    destroy: x
                })
            }

            function de(e) {
                let t, {
                    swiper: s,
                    extendParams: i,
                    on: n,
                    emit: a
                } = e;

                function l() {
                    if (!s.size) return s.autoplay.running = !1, void(s.autoplay.paused = !1);
                    const e = s.slides.eq(s.activeIndex);
                    let i = s.params.autoplay.delay;
                    e.attr("data-swiper-autoplay") && (i = e.attr("data-swiper-autoplay") || s.params.autoplay.delay), clearTimeout(t), t = v((() => {
                        let e;
                        s.params.autoplay.reverseDirection ? s.params.loop ? (s.loopFix(), e = s.slidePrev(s.params.speed, !0, !0), a("autoplay")) : s.isBeginning ? s.params.autoplay.stopOnLastSlide ? d() : (e = s.slideTo(s.slides.length - 1, s.params.speed, !0, !0), a("autoplay")) : (e = s.slidePrev(s.params.speed, !0, !0), a("autoplay")) : s.params.loop ? (s.loopFix(), e = s.slideNext(s.params.speed, !0, !0), a("autoplay")) : s.isEnd ? s.params.autoplay.stopOnLastSlide ? d() : (e = s.slideTo(0, s.params.speed, !0, !0), a("autoplay")) : (e = s.slideNext(s.params.speed, !0, !0), a("autoplay")), (s.params.cssMode && s.autoplay.running || !1 === e) && l()
                    }), i)
                }

                function o() {
                    return "undefined" === typeof t && (!s.autoplay.running && (s.autoplay.running = !0, a("autoplayStart"), l(), !0))
                }

                function d() {
                    return !!s.autoplay.running && ("undefined" !== typeof t && (t && (clearTimeout(t), t = void 0), s.autoplay.running = !1, a("autoplayStop"), !0))
                }

                function c(e) {
                    s.autoplay.running && (s.autoplay.paused || (t && clearTimeout(t), s.autoplay.paused = !0, 0 !== e && s.params.autoplay.waitForTransition ? ["transitionend", "webkitTransitionEnd"].forEach((e => {
                        s.$wrapperEl[0].addEventListener(e, u)
                    })) : (s.autoplay.paused = !1, l())))
                }

                function p() {
                    const e = r();
                    "hidden" === e.visibilityState && s.autoplay.running && c(), "visible" === e.visibilityState && s.autoplay.paused && (l(), s.autoplay.paused = !1)
                }

                function u(e) {
                    s && !s.destroyed && s.$wrapperEl && e.target === s.$wrapperEl[0] && (["transitionend", "webkitTransitionEnd"].forEach((e => {
                        s.$wrapperEl[0].removeEventListener(e, u)
                    })), s.autoplay.paused = !1, s.autoplay.running ? l() : d())
                }

                function f() {
                    s.params.autoplay.disableOnInteraction ? d() : (a("autoplayPause"), c()), ["transitionend", "webkitTransitionEnd"].forEach((e => {
                        s.$wrapperEl[0].removeEventListener(e, u)
                    }))
                }

                function h() {
                    s.params.autoplay.disableOnInteraction || (s.autoplay.paused = !1, a("autoplayResume"), l())
                }
                s.autoplay = {
                    running: !1,
                    paused: !1
                }, i({
                    autoplay: {
                        enabled: !1,
                        delay: 3e3,
                        waitForTransition: !0,
                        disableOnInteraction: !0,
                        stopOnLastSlide: !1,
                        reverseDirection: !1,
                        pauseOnMouseEnter: !1
                    }
                }), n("init", (() => {
                    if (s.params.autoplay.enabled) {
                        o();
                        r().addEventListener("visibilitychange", p), s.params.autoplay.pauseOnMouseEnter && (s.$el.on("mouseenter", f), s.$el.on("mouseleave", h))
                    }
                })), n("beforeTransitionStart", ((e, t, i) => {
                    s.autoplay.running && (i || !s.params.autoplay.disableOnInteraction ? s.autoplay.pause(t) : d())
                })), n("sliderFirstMove", (() => {
                    s.autoplay.running && (s.params.autoplay.disableOnInteraction ? d() : c())
                })), n("touchEnd", (() => {
                    s.params.cssMode && s.autoplay.paused && !s.params.autoplay.disableOnInteraction && l()
                })), n("destroy", (() => {
                    s.$el.off("mouseenter", f), s.$el.off("mouseleave", h), s.autoplay.running && d();
                    r().removeEventListener("visibilitychange", p)
                })), Object.assign(s.autoplay, {
                    pause: c,
                    run: l,
                    start: o,
                    stop: d
                })
            }

            function ce(e) {
                let {
                    swiper: t,
                    extendParams: s,
                    on: i
                } = e;
                s({
                    thumbs: {
                        swiper: null,
                        multipleActiveThumbs: !0,
                        autoScrollOffset: 0,
                        slideThumbActiveClass: "swiper-slide-thumb-active",
                        thumbsContainerClass: "swiper-thumbs"
                    }
                });
                let n = !1,
                    a = !1;

                function r() {
                    const e = t.thumbs.swiper;
                    if (!e || e.destroyed) return;
                    const s = e.clickedIndex,
                        i = e.clickedSlide;
                    if (i && g(i).hasClass(t.params.thumbs.slideThumbActiveClass)) return;
                    if ("undefined" === typeof s || null === s) return;
                    let n;
                    if (n = e.params.loop ? parseInt(g(e.clickedSlide).attr("data-swiper-slide-index"), 10) : s, t.params.loop) {
                        let e = t.activeIndex;
                        t.slides.eq(e).hasClass(t.params.slideDuplicateClass) && (t.loopFix(), t._clientLeft = t.$wrapperEl[0].clientLeft, e = t.activeIndex);
                        const s = t.slides.eq(e).prevAll(`[data-swiper-slide-index="${n}"]`).eq(0).index(),
                            i = t.slides.eq(e).nextAll(`[data-swiper-slide-index="${n}"]`).eq(0).index();
                        n = "undefined" === typeof s ? i : "undefined" === typeof i ? s : i - e < e - s ? i : s
                    }
                    t.slideTo(n)
                }

                function l() {
                    const {
                        thumbs: e
                    } = t.params;
                    if (n) return !1;
                    n = !0;
                    const s = t.constructor;
                    if (e.swiper instanceof s) t.thumbs.swiper = e.swiper, Object.assign(t.thumbs.swiper.originalParams, {
                        watchSlidesProgress: !0,
                        slideToClickedSlide: !1
                    }), Object.assign(t.thumbs.swiper.params, {
                        watchSlidesProgress: !0,
                        slideToClickedSlide: !1
                    });
                    else if (y(e.swiper)) {
                        const i = Object.assign({}, e.swiper);
                        Object.assign(i, {
                            watchSlidesProgress: !0,
                            slideToClickedSlide: !1
                        }), t.thumbs.swiper = new s(i), a = !0
                    }
                    return t.thumbs.swiper.$el.addClass(t.params.thumbs.thumbsContainerClass), t.thumbs.swiper.on("tap", r), !0
                }

                function o(e) {
                    const s = t.thumbs.swiper;
                    if (!s || s.destroyed) return;
                    const i = "auto" === s.params.slidesPerView ? s.slidesPerViewDynamic() : s.params.slidesPerView;
                    let n = 1;
                    const a = t.params.thumbs.slideThumbActiveClass;
                    if (t.params.slidesPerView > 1 && !t.params.centeredSlides && (n = t.params.slidesPerView), t.params.thumbs.multipleActiveThumbs || (n = 1), n = Math.floor(n), s.slides.removeClass(a), s.params.loop || s.params.virtual && s.params.virtual.enabled)
                        for (let o = 0; o < n; o += 1) s.$wrapperEl.children(`[data-swiper-slide-index="${t.realIndex+o}"]`).addClass(a);
                    else
                        for (let o = 0; o < n; o += 1) s.slides.eq(t.realIndex + o).addClass(a);
                    const r = t.params.thumbs.autoScrollOffset,
                        l = r && !s.params.loop;
                    if (t.realIndex !== s.realIndex || l) {
                        let n, a, o = s.activeIndex;
                        if (s.params.loop) {
                            s.slides.eq(o).hasClass(s.params.slideDuplicateClass) && (s.loopFix(), s._clientLeft = s.$wrapperEl[0].clientLeft, o = s.activeIndex);
                            const e = s.slides.eq(o).prevAll(`[data-swiper-slide-index="${t.realIndex}"]`).eq(0).index(),
                                i = s.slides.eq(o).nextAll(`[data-swiper-slide-index="${t.realIndex}"]`).eq(0).index();
                            n = "undefined" === typeof e ? i : "undefined" === typeof i ? e : i - o === o - e ? s.params.slidesPerGroup > 1 ? i : o : i - o < o - e ? i : e, a = t.activeIndex > t.previousIndex ? "next" : "prev"
                        } else n = t.realIndex, a = n > t.previousIndex ? "next" : "prev";
                        l && (n += "next" === a ? r : -1 * r), s.visibleSlidesIndexes && s.visibleSlidesIndexes.indexOf(n) < 0 && (s.params.centeredSlides ? n = n > o ? n - Math.floor(i / 2) + 1 : n + Math.floor(i / 2) - 1 : n > o && s.params.slidesPerGroup, s.slideTo(n, e ? 0 : void 0))
                    }
                }
                t.thumbs = {
                    swiper: null
                }, i("beforeInit", (() => {
                    const {
                        thumbs: e
                    } = t.params;
                    e && e.swiper && (l(), o(!0))
                })), i("slideChange update resize observerUpdate", (() => {
                    o()
                })), i("setTransition", ((e, s) => {
                    const i = t.thumbs.swiper;
                    i && !i.destroyed && i.setTransition(s)
                })), i("beforeDestroy", (() => {
                    const e = t.thumbs.swiper;
                    e && !e.destroyed && a && e.destroy()
                })), Object.assign(t.thumbs, {
                    init: l,
                    update: o
                })
            }

            function pe(e) {
                let {
                    swiper: t,
                    extendParams: s,
                    emit: i,
                    once: n
                } = e;
                s({
                    freeMode: {
                        enabled: !1,
                        momentum: !0,
                        momentumRatio: 1,
                        momentumBounce: !0,
                        momentumBounceRatio: 1,
                        momentumVelocityRatio: 1,
                        sticky: !1,
                        minimumVelocity: .02
                    }
                }), Object.assign(t, {
                    freeMode: {
                        onTouchStart: function() {
                            const e = t.getTranslate();
                            t.setTranslate(e), t.setTransition(0), t.touchEventsData.velocities.length = 0, t.freeMode.onTouchEnd({
                                currentPos: t.rtl ? t.translate : -t.translate
                            })
                        },
                        onTouchMove: function() {
                            const {
                                touchEventsData: e,
                                touches: s
                            } = t;
                            0 === e.velocities.length && e.velocities.push({
                                position: s[t.isHorizontal() ? "startX" : "startY"],
                                time: e.touchStartTime
                            }), e.velocities.push({
                                position: s[t.isHorizontal() ? "currentX" : "currentY"],
                                time: b()
                            })
                        },
                        onTouchEnd: function(e) {
                            let {
                                currentPos: s
                            } = e;
                            const {
                                params: a,
                                $wrapperEl: r,
                                rtlTranslate: l,
                                snapGrid: o,
                                touchEventsData: d
                            } = t, c = b() - d.touchStartTime;
                            if (s < -t.minTranslate()) t.slideTo(t.activeIndex);
                            else if (s > -t.maxTranslate()) t.slides.length < o.length ? t.slideTo(o.length - 1) : t.slideTo(t.slides.length - 1);
                            else {
                                if (a.freeMode.momentum) {
                                    if (d.velocities.length > 1) {
                                        const e = d.velocities.pop(),
                                            s = d.velocities.pop(),
                                            i = e.position - s.position,
                                            n = e.time - s.time;
                                        t.velocity = i / n, t.velocity /= 2, Math.abs(t.velocity) < a.freeMode.minimumVelocity && (t.velocity = 0), (n > 150 || b() - e.time > 300) && (t.velocity = 0)
                                    } else t.velocity = 0;
                                    t.velocity *= a.freeMode.momentumVelocityRatio, d.velocities.length = 0;
                                    let e = 1e3 * a.freeMode.momentumRatio;
                                    const s = t.velocity * e;
                                    let c = t.translate + s;
                                    l && (c = -c);
                                    let p, u = !1;
                                    const f = 20 * Math.abs(t.velocity) * a.freeMode.momentumBounceRatio;
                                    let h;
                                    if (c < t.maxTranslate()) a.freeMode.momentumBounce ? (c + t.maxTranslate() < -f && (c = t.maxTranslate() - f), p = t.maxTranslate(), u = !0, d.allowMomentumBounce = !0) : c = t.maxTranslate(), a.loop && a.centeredSlides && (h = !0);
                                    else if (c > t.minTranslate()) a.freeMode.momentumBounce ? (c - t.minTranslate() > f && (c = t.minTranslate() + f), p = t.minTranslate(), u = !0, d.allowMomentumBounce = !0) : c = t.minTranslate(), a.loop && a.centeredSlides && (h = !0);
                                    else if (a.freeMode.sticky) {
                                        let e;
                                        for (let t = 0; t < o.length; t += 1)
                                            if (o[t] > -c) {
                                                e = t;
                                                break
                                            }
                                        c = Math.abs(o[e] - c) < Math.abs(o[e - 1] - c) || "next" === t.swipeDirection ? o[e] : o[e - 1], c = -c
                                    }
                                    if (h && n("transitionEnd", (() => {
                                            t.loopFix()
                                        })), 0 !== t.velocity) {
                                        if (e = l ? Math.abs((-c - t.translate) / t.velocity) : Math.abs((c - t.translate) / t.velocity), a.freeMode.sticky) {
                                            const s = Math.abs((l ? -c : c) - t.translate),
                                                i = t.slidesSizesGrid[t.activeIndex];
                                            e = s < i ? a.speed : s < 2 * i ? 1.5 * a.speed : 2.5 * a.speed
                                        }
                                    } else if (a.freeMode.sticky) return void t.slideToClosest();
                                    a.freeMode.momentumBounce && u ? (t.updateProgress(p), t.setTransition(e), t.setTranslate(c), t.transitionStart(!0, t.swipeDirection), t.animating = !0, r.transitionEnd((() => {
                                        t && !t.destroyed && d.allowMomentumBounce && (i("momentumBounce"), t.setTransition(a.speed), setTimeout((() => {
                                            t.setTranslate(p), r.transitionEnd((() => {
                                                t && !t.destroyed && t.transitionEnd()
                                            }))
                                        }), 0))
                                    }))) : t.velocity ? (i("_freeModeNoMomentumRelease"), t.updateProgress(c), t.setTransition(e), t.setTranslate(c), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, r.transitionEnd((() => {
                                        t && !t.destroyed && t.transitionEnd()
                                    })))) : t.updateProgress(c), t.updateActiveIndex(), t.updateSlidesClasses()
                                } else {
                                    if (a.freeMode.sticky) return void t.slideToClosest();
                                    a.freeMode && i("_freeModeNoMomentumRelease")
                                }(!a.freeMode.momentum || c >= a.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
                            }
                        }
                    }
                })
            }
        }
    }
]);
//# sourceMappingURL=85530-f0c7224cac3d2322.js.map