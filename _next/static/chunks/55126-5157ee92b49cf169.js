"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [55126], {
        8381: function(e, n, l) {
            l.d(n, {
                V: function() {
                    return h
                }
            });
            var a = l(19989),
                t = l(24246),
                i = (l(27378), l(47892)),
                r = l(53585),
                o = l(96150),
                s = l(39283),
                d = l(90761),
                c = l(33609),
                u = l(1569);

            function g() {
                var e = (0, a.Z)(["\n  border-top-left-radius: ", ";\n  border-top-right-radius: ", ";\n"]);
                return g = function() {
                    return e
                }, e
            }

            function m() {
                var e = (0, a.Z)(["\n  height: 0;\n  padding-bottom: 56.25%;\n  position: relative;\n  border-bottom: 1px solid ", ";\n  background-color: ", ";\n  border-radius: ", ";\n\n  &:hover {\n    ", "\n  }\n"]);
                return m = function() {
                    return e
                }, e
            }

            function p() {
                var e = (0, a.Z)(["\n  display: inline-block;\n  width: 100%;\n\n  .CarouselCard--main {\n    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.08);\n    display: inline-block;\n    background-color: ", ";\n    border-radius: ", ";\n    cursor: pointer;\n    width: 100%;\n\n    &:hover {\n      box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);\n      ", "\n      transition: 0.1s;\n    }\n\n    .CarouselCard--content {\n      flex-direction: column;\n      padding: 10px;\n    }\n  }\n"]);
                return p = function() {
                    return e
                }, e
            }
            var h = function(e) {
                    var n = e.imageUrl,
                        l = e.href,
                        a = e.imageHeight,
                        i = e.containerClassName,
                        r = e.contentClassName,
                        s = e.className,
                        d = e.children,
                        g = e.eventSource,
                        m = e.alt,
                        p = null !== a && void 0 !== a ? a : 400;
                    return (0, t.jsx)(y, {
                        className: i,
                        children: (0, t.jsxs)(u.r, {
                            className: (0, c.A)("CarouselCard", {
                                main: !0
                            }, s),
                            eventSource: g,
                            href: l,
                            children: [(0, t.jsx)(f, {
                                children: (0, t.jsx)(x, {
                                    alt: m,
                                    height: p,
                                    layout: "fill",
                                    objectFit: "cover",
                                    priority: !0,
                                    src: n
                                })
                            }), (0, t.jsx)(o.k, {
                                className: (0, c.A)("CarouselCard", {
                                    content: !0
                                }, r),
                                children: d
                            })]
                        })
                    })
                },
                x = (0, i.ZP)(s.E).withConfig({
                    componentId: "sc-d8986e5d-0"
                })(g(), (function(e) {
                    return e.theme.borderRadius.default
                }), (function(e) {
                    return e.theme.borderRadius.default
                })),
                f = (0, i.ZP)(r.g).withConfig({
                    componentId: "sc-d8986e5d-1"
                })(m(), (function(e) {
                    return e.theme.colors.border
                }), (function(e) {
                    return e.theme.colors.border
                }), (function(e) {
                    return e.theme.borderRadius.default
                }), (function(e) {
                    return (0, d.Um)({
                        variants: {
                            dark: {
                                borderColor: e.theme.colors.ash,
                                backgroundColor: e.theme.colors.ash,
                                transition: "border-color 0.25s ease-in-out, background-color 0.25s ease-in-out"
                            }
                        }
                    })
                })),
                y = (0, i.ZP)(r.g).withConfig({
                    componentId: "sc-d8986e5d-2"
                })(p(), (function(e) {
                    return e.theme.colors.card
                }), (function(e) {
                    return e.theme.borderRadius.default
                }), (function(e) {
                    return (0, d.Um)({
                        variants: {
                            dark: {
                                backgroundColor: e.theme.colors.ash,
                                transition: "background-color 0.25s ease-in-out"
                            }
                        }
                    })
                }))
        },
        40422: function(e, n, l) {
            l.d(n, {
                e: function() {
                    return d
                }
            });
            var a = l(24246),
                t = (l(27378), l(1569)),
                i = l(16611),
                r = l(19378),
                o = l(6723),
                s = l(70884),
                d = function(e) {
                    var n = e.onClose,
                        l = e.variant,
                        d = (0, o.q)("modals");
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(r.u_.Header, {
                            children: (0, a.jsx)(r.u_.Title, {
                                children: "account" === l ? d("delistedNotice.unavailableItem.withAccount.title", "This item is no longer available on OpenSea") : d("delistedNotice.unavailableItem.withoutAccount.title", "The item you tried to visit is no longer available on OpenSea")
                            })
                        }), (0, a.jsx)(r.u_.Body, {
                            children: (0, a.jsxs)("div", {
                                className: "DelistedNotice--content",
                                children: [(0, a.jsx)(i.WX, {
                                    children: "account" === l ? d("delistedNotice.unavailableItem.withAccount.description", "This item is no longer available on OpenSea. It will not be visible or\n                accessible to anyone browsing the marketplace or your profile") : d("delistedNotice.unavailableItem.withoutAccount.description", "The item you tried to visit is no longer available on OpenSea. It will not be visible or\n                accessible to anyone browsing the marketplace")
                                }), (0, a.jsx)(i.WX, {
                                    children: d("delistedNotice.learnMoreUnavailableItem.descrption", "\n            To learn more about why {{item}} is no longer available, read {{helpCenterLink}}. If you have questions or concerns regarding this action, contact\n            the OpenSea team {{supportLink}}.", {
                                        item: "account" === l ? d("delistedNotice.withAccount.item.fragment", "this item") : d("delistedNotice.withoutAccount.itemVisited.fragment", "the item you tried to visit"),
                                        helpCenterLink: (0, a.jsx)(t.r, {
                                            href: "https://support.opensea.io/hc/articles/1500010625362",
                                            children: d("delistedNotice.helpcenter.link", "our Help Center guide on this topic")
                                        }),
                                        supportLink: (0, a.jsx)(t.r, {
                                            href: s.av,
                                            children: d("delistedNotice.here.link", "here")
                                        })
                                    })
                                })]
                            })
                        }), (0, a.jsx)(r.u_.Footer, {
                            children: (0, a.jsx)(r.u_.Footer.Button, {
                                variant: "secondary",
                                onClick: n,
                                children: d("common.close", "Close")
                            })
                        })]
                    })
                }
        },
        31154: function(e, n, l) {
            l.d(n, {
                a: function() {
                    return I
                }
            });
            var a = l(17599),
                t = l(85034),
                i = l(70169),
                r = l(19989),
                o = l(3204),
                s = l(24246),
                d = l(27378),
                c = l(47892),
                u = l(18455),
                g = l(29631),
                m = l(48257),
                p = l(53585),
                h = l(72363),
                x = l(48599),
                f = l(90761);
            l(75627);

            function y() {
                var e = (0, r.Z)(["\n  ", "\n"]);
                return y = function() {
                    return e
                }, e
            }

            function v() {
                var e = (0, r.Z)(["\n          left: 6px;\n        "]);
                return v = function() {
                    return e
                }, e
            }

            function b() {
                var e = (0, r.Z)(["\n          right: 6px;\n        "]);
                return b = function() {
                    return e
                }, e
            }

            function k() {
                var e = (0, r.Z)(["\n            left: -24px;\n          "]);
                return k = function() {
                    return e
                }, e
            }

            function j() {
                var e = (0, r.Z)(["\n            right: -24px;\n          "]);
                return j = function() {
                    return e
                }, e
            }

            function w() {
                var e = (0, r.Z)(["\n  position: absolute;\n  top: 50%;\n  z-index: 2;\n  border-radius: 50%;\n  transform: translateY(-50%);\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);\n  background-color: ", ";\n\n  &:hover {\n    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);\n    ", "\n  }\n\n  ", "\n\n  @media (min-width: ", "px) {\n    padding: 4px;\n  }\n\n  @media (min-width: ", "px) {\n    ", "\n  }\n\n  ", ";\n"]);
                return w = function() {
                    return e
                }, e
            }
            var S = function(e) {
                    var n = e.arrowSize,
                        l = void 0 === n ? 40 : n,
                        a = e.arrowStyles,
                        t = e.className,
                        i = e.direction;
                    return (0, s.jsx)(K, {
                        $arrowStyles: a,
                        $direction: i,
                        "aria-label": "left" === i ? "Previous slide" : "Next slide",
                        className: t,
                        children: (0, s.jsx)(m.J, {
                            size: l,
                            value: "chevron_".concat(i)
                        })
                    })
                },
                C = "swiper-nav-left",
                T = "swiper-nav-right",
                F = {
                    forceToAxis: !0
                },
                P = (0, c.ZP)(p.g).withConfig({
                    componentId: "sc-74f3133d-0"
                })(y(), (function(e) {
                    return e.$containerStyles
                })),
                K = (0, c.ZP)(x.k).withConfig({
                    componentId: "sc-74f3133d-1"
                })(w(), (function(e) {
                    return e.theme.colors.card
                }), (function(e) {
                    return (0, f.Um)({
                        variants: {
                            dark: {
                                background: e.theme.colors.oil
                            }
                        }
                    })
                }), (function(e) {
                    return "left" === e.$direction ? (0, c.iv)(v()) : (0, c.iv)(b())
                }), h.AV.lg, h.AV.xl, (function(e) {
                    return "left" === e.$direction ? (0, c.iv)(k()) : (0, c.iv)(j())
                }), (function(e) {
                    return e.$arrowStyles
                })),
                I = function(e) {
                    var n, l, r, c, m, p, x, f, y, v = e.overrides,
                        b = e.enableArrowControls,
                        k = void 0 === b || b,
                        j = e.autoplayConfig,
                        w = e.carouselConfigOverride,
                        K = e.className,
                        I = e.enableMousewheel,
                        Z = void 0 === I || I,
                        L = e.enableCssMode,
                        B = void 0 !== L && L,
                        _ = e.enableDotPagination,
                        H = void 0 !== _ && _,
                        A = e.enableFreeScroll,
                        U = void 0 === A || A,
                        V = e.enableThumbPagination,
                        O = void 0 !== V && V,
                        z = e.id,
                        D = e.loop,
                        N = void 0 !== D && D,
                        E = e.loopedSlides,
                        M = e.speed,
                        R = e.responsiveConfig,
                        W = e.showScrollbar,
                        q = void 0 === W || W,
                        G = e.slides,
                        $ = e.slidesPerView,
                        Q = void 0 === $ ? 1 : $,
                        X = e.spaceBetween,
                        Y = void 0 === X ? 16 : X,
                        J = e.thumbnailNavigationConfigOverride,
                        ee = e.renderSlide,
                        ne = e.renderThumb,
                        le = v || {},
                        ae = le.arrowStyles,
                        te = le.arrowSize,
                        ie = le.containerStyles,
                        re = (0, d.useState)((function() {
                            return [u.N1].concat((0, o.Z)(Z ? [u.Gk, u.LW] : []), (0, o.Z)(U ? [u.Rv] : []), (0, o.Z)(j ? [u.pt] : []), (0, o.Z)(H ? [u.tl] : []), (0, o.Z)(O ? [u.o3] : []), (0, o.Z)(k || O ? [u.W_] : []))
                        }))[0],
                        oe = (0, d.useState)(j ? (0, t.Z)({
                            delay: 3e3,
                            disableOnInteraction: !0,
                            pauseOnMouseEnter: !0
                        }, j) : void 0)[0],
                        se = (0, d.useState)(R ? (f = {}, (0, a.Z)(f, h.AV.xs, null !== (n = R.xs) && void 0 !== n ? n : R.default), (0, a.Z)(f, h.AV.sm, null !== (l = R.sm) && void 0 !== l ? l : R.default), (0, a.Z)(f, h.AV.md, null !== (r = R.md) && void 0 !== r ? r : R.default), (0, a.Z)(f, h.AV.lg, null !== (c = R.lg) && void 0 !== c ? c : R.default), (0, a.Z)(f, h.AV.xl, null !== (m = R.xl) && void 0 !== m ? m : R.default), (0, a.Z)(f, h.AV.xxl, null !== (p = R.xxl) && void 0 !== p ? p : R.default), (0, a.Z)(f, h.AV.xxxl, null !== (x = R.xxxl) && void 0 !== x ? x : R.default), f) : void 0)[0],
                        de = (0, d.useState)(H ? {
                            clickable: !0
                        } : void 0)[0],
                        ce = (0, d.useState)(null),
                        ue = ce[0],
                        ge = ce[1],
                        me = (0, d.useMemo)((function() {
                            return {
                                swiper: ue,
                                autoScrollOffset: 1
                            }
                        }), [ue]),
                        pe = (0, d.useState)(0),
                        he = pe[0],
                        xe = pe[1],
                        fe = function(e, n) {
                            var l = n || 1;
                            return e && Object.values(e).map((function(e) {
                                var n = e.slidesPerView;
                                l = Math.max(l, n)
                            })), l
                        }(R, Q),
                        ye = !!k && G.length > fe,
                        ve = (0, d.useMemo)((function() {
                            return G.map((function(e) {
                                return (0, s.jsx)(g.o5, {
                                    children: ee(e)
                                }, e.id)
                            }))
                        }), [G, ee]),
                        be = (0, d.useCallback)((function(e) {
                            var n = e.activeIndex;
                            return xe(n)
                        }), [xe]),
                        ke = "".concat(C).concat(z),
                        je = "".concat(T).concat(z),
                        we = {
                            prevEl: ".".concat(ke),
                            nextEl: ".".concat(je)
                        };
                    return (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsxs)(P, {
                            $containerStyles: ie,
                            position: "relative",
                            children: [ye && (0, s.jsx)(S, {
                                arrowSize: te,
                                arrowStyles: ae,
                                className: "".concat(C, " ").concat(ke),
                                direction: "left"
                            }), (0, s.jsx)(g.tq, (0, i.Z)((0, t.Z)({
                                autoplay: oe,
                                breakpoints: se,
                                className: K,
                                cssMode: B,
                                direction: "horizontal",
                                keyboard: !0,
                                loop: N,
                                loopAdditionalSlides: E,
                                loopedSlides: E,
                                modules: re,
                                mousewheel: Z ? (0, i.Z)((0, t.Z)({}, F), {
                                    thresholdDelta: 25
                                }) : void 0,
                                navigation: k ? we : void 0,
                                observeParents: !0,
                                observeSlideChildren: !0,
                                observer: !0,
                                pagination: de,
                                preventInteractionOnTransition: !0,
                                resizeObserver: !0,
                                scrollbar: q,
                                slidesPerView: Q,
                                spaceBetween: Y,
                                speed: M,
                                threshold: 25,
                                thumbs: O ? me : void 0,
                                onActiveIndexChange: be
                            }, null === R || void 0 === R ? void 0 : R.default, w), {
                                children: ve
                            })), ye && (0, s.jsx)(S, {
                                arrowSize: te,
                                arrowStyles: ae,
                                className: "".concat(T, " ").concat(je),
                                direction: "right"
                            })]
                        }), O && (0, s.jsx)(P, {
                            $containerStyles: ie,
                            marginTop: "16px",
                            children: (0, s.jsx)(g.tq, (0, i.Z)((0, t.Z)({
                                breakpoints: (y = {}, (0, a.Z)(y, h.AV.xs, {
                                    spaceBetween: 8
                                }), (0, a.Z)(y, h.AV.lg, {
                                    spaceBetween: 12
                                }), y),
                                modules: re,
                                slidesPerView: 4,
                                threshold: 100,
                                watchSlidesProgress: !0,
                                onSwiper: ge
                            }, J), {
                                children: G.map((function(e, n) {
                                    return (0, s.jsx)(g.o5, {
                                        children: ne ? ne(e, n === he) : ee(e)
                                    }, "thumb-".concat(e.id))
                                }))
                            }))
                        })]
                    })
                }
        },
        45333: function(e, n, l) {
            l.d(n, {
                r: function() {
                    return j
                }
            });
            var a = l(85034),
                t = l(70169),
                i = l(31373),
                r = l(19989),
                o = l(24246),
                s = l(27378),
                d = l(47892),
                c = l(33181),
                u = l(53585),
                g = l(72363);

            function m() {
                var e = (0, r.Z)(["\n  --template-grid-gap: 8px;\n\n  --template-grid-row-gap: ", ";\n\n  --template-grid-column-gap: ", ";\n\n  --template-num-columns: ", ";\n\n  display: grid;\n  grid-template-columns: repeat(var(--template-num-columns), 1fr);\n  grid-gap: var(--template-grid-gap);\n  grid-row-gap: var(--template-grid-row-gap);\n  grid-column-gap: var(--template-grid-column-gap);\n\n  @media (min-width: ", "px) {\n    --template-grid-gap: 16px;\n  }\n\n  @media (min-width: ", "px) {\n    --template-grid-gap: 24px;\n  }\n"]);
                return m = function() {
                    return e
                }, e
            }

            function p() {
                var e = (0, r.Z)(["\n  // Force grid item to conform to columns\n  min-width: 0;\n  --grid-item-col-span: ", ";\n\n  grid-column: span var(--grid-item-col-span);\n\n  @media (min-width: ", "px) {\n    --grid-item-col-span: ", ";\n  }\n\n  @media (min-width: ", "px) {\n    --grid-item-col-span: ", ";\n  }\n\n  @media (min-width: ", "px) {\n    --grid-item-col-span: ", ";\n  }\n\n  @media (min-width: ", "px) {\n    --grid-item-col-span: ", ";\n  }\n\n  @media (min-width: ", "px) {\n    --grid-item-col-span: ", ";\n  }\n\n  @media (min-width: ", "px) {\n    --grid-item-col-span: ", ";\n  }\n"]);
                return p = function() {
                    return e
                }, e
            }
            var h = (0, s.createContext)({
                    level: 0
                }),
                x = (0, s.forwardRef)((function(e, n) {
                    var l = (0, s.useContext)(h).level;
                    if (l >= 2 && !c.Mw) throw new Error("Grid is only allowed to be nested a maximum of ".concat(2, " layers"));
                    return (0, o.jsx)(h.Provider, {
                        value: {
                            level: l + 1
                        },
                        children: (0, o.jsx)(f, (0, t.Z)((0, a.Z)({}, e), {
                            ref: n
                        }))
                    })
                })),
                f = (0, d.ZP)(u.g).withConfig({
                    componentId: "sc-67be886a-0"
                })(m(), (function(e) {
                    return void 0 !== e.gridRowGap ? "".concat(e.gridRowGap, "px") : "8px"
                }), (function(e) {
                    return void 0 !== e.gridColumnGap ? "".concat(e.gridColumnGap, "px") : "8px"
                }), 12, g.AV.md, g.AV.xxl),
                y = ["xxxl", "xxl", "xl", "lg", "md", "sm", "xs"],
                v = {
                    xxxl: 0,
                    xxl: 1,
                    xl: 2,
                    lg: 3,
                    md: 4,
                    sm: 5,
                    xs: 6
                };

            function b(e) {
                var n = e.targetBreakpoint,
                    l = (0, i.Z)(e, ["targetBreakpoint"]);
                if (void 0 !== l[n]) return l[n];
                var a = v[n],
                    t = y.find((function(e, n) {
                        return !!l[e] && a <= n
                    }));
                return t ? l[t] : 12
            }
            var k = (0, d.ZP)(u.g).withConfig({
                    componentId: "sc-67be886a-1"
                })(p(), (function(e) {
                    return b((0, a.Z)({
                        targetBreakpoint: "xs"
                    }, e))
                }), g.AV.sm, (function(e) {
                    return b((0, a.Z)({
                        targetBreakpoint: "sm"
                    }, e))
                }), g.AV.md, (function(e) {
                    return b((0, a.Z)({
                        targetBreakpoint: "md"
                    }, e))
                }), g.AV.lg, (function(e) {
                    return b((0, a.Z)({
                        targetBreakpoint: "lg"
                    }, e))
                }), g.AV.xl, (function(e) {
                    return b((0, a.Z)({
                        targetBreakpoint: "xl"
                    }, e))
                }), g.AV.xxl, (function(e) {
                    return b((0, a.Z)({
                        targetBreakpoint: "xxl"
                    }, e))
                }), g.AV.xxxl, (function(e) {
                    return b((0, a.Z)({
                        targetBreakpoint: "xxxl"
                    }, e))
                })),
                j = Object.assign(x, {
                    Item: k
                })
        },
        55126: function(e, n, l) {
            l.d(n, {
                dv: function() {
                    return oa
                },
                Uv: function() {
                    return ra
                }
            });
            var a = l(19989),
                t = l(24246),
                i = l(27378),
                r = l(4402),
                o = l(47892),
                s = l(3204),
                d = l(98784),
                c = l(8381),
                u = l(96150),
                g = l(45333),
                m = l(16611),
                p = l(72363),
                h = l(316),
                x = l(70761),
                f = l(88747),
                y = l(6723),
                v = l(36332),
                b = l(74387),
                k = l(53585),
                j = l(31154),
                w = l(72686);

            function S() {
                var e = (0, a.Z)(["\n  gap: 10px;\n"]);
                return S = function() {
                    return e
                }, e
            }
            var C = function() {
                    return (0, t.jsxs)(k.g, {
                        alignSelf: "center",
                        width: "100%",
                        children: [(0, t.jsx)(p.pU, {
                            greaterThanOrEqual: "xxxl",
                            children: (0, t.jsx)(w.O, {
                                alignItems: "center",
                                children: (0, t.jsx)(T, {
                                    width: "100%",
                                    children: (0, s.Z)(Array(6)).map((function(e, n) {
                                        return (0, t.jsx)(w.O.Block, {
                                            borderRadius: "16px",
                                            height: "300px"
                                        }, n)
                                    }))
                                })
                            })
                        }), (0, t.jsx)(p.pU, {
                            between: ["lg", "xxxl"],
                            children: (0, t.jsx)(w.O, {
                                alignItems: "center",
                                children: (0, t.jsx)(T, {
                                    width: "100%",
                                    children: (0, s.Z)(Array(4)).map((function(e, n) {
                                        return (0, t.jsx)(w.O.Block, {
                                            borderRadius: "16px",
                                            height: "300px"
                                        }, n)
                                    }))
                                })
                            })
                        }), (0, t.jsx)(p.pU, {
                            between: ["md", "lg"],
                            children: (0, t.jsx)(w.O, {
                                alignItems: "center",
                                children: (0, t.jsx)(T, {
                                    width: "100%",
                                    children: (0, s.Z)(Array(3)).map((function(e, n) {
                                        return (0, t.jsx)(w.O.Block, {
                                            borderRadius: "16px",
                                            height: "300px"
                                        }, n)
                                    }))
                                })
                            })
                        }), (0, t.jsx)(p.pU, {
                            between: ["sm", "md"],
                            children: (0, t.jsx)(w.O, {
                                alignItems: "center",
                                children: (0, t.jsx)(T, {
                                    width: "100%",
                                    children: (0, s.Z)(Array(2)).map((function(e, n) {
                                        return (0, t.jsx)(w.O.Block, {
                                            borderRadius: "16px",
                                            height: "300px"
                                        }, n)
                                    }))
                                })
                            })
                        }), (0, t.jsx)(p.pU, {
                            lessThan: "sm",
                            children: (0, t.jsx)(w.O, {
                                alignItems: "center",
                                children: (0, t.jsx)(T, {
                                    width: "100%",
                                    children: (0, s.Z)(Array(1)).map((function(e, n) {
                                        return (0, t.jsx)(w.O.Block, {
                                            borderRadius: "16px",
                                            height: "300px"
                                        }, n)
                                    }))
                                })
                            })
                        })]
                    })
                },
                T = (0, o.ZP)(w.O.Row).withConfig({
                    componentId: "sc-9c3c7d92-0"
                })(S()),
                F = l(76449),
                P = l(90761);

            function K() {
                var e = (0, a.Z)(["\n          background-color: ", ";\n          i {\n            color: white;\n            @media (hover: hover) {\n              &:hover {\n                ", "\n              }\n            }\n          }\n          box-shadow: none;\n          @media (hover: hover) {\n            &:hover {\n              ", "\n            }\n          }\n        "]);
                return K = function() {
                    return e
                }, e
            }
            var I = function(e) {
                    return {
                        arrowStyles: e ? void 0 : (0, o.iv)(K(), (function(e) {
                            return (0, F.m4)(e.theme.colors.charcoal, .3)
                        }), (function(e) {
                            return (0, P.Um)({
                                variants: {
                                    light: {
                                        color: e.theme.colors.charcoal
                                    },
                                    dark: {
                                        color: e.theme.colors.white
                                    }
                                }
                            })
                        }), (function(e) {
                            return (0, P.Um)({
                                variants: {
                                    dark: {
                                        background: e.theme.colors.oil
                                    },
                                    light: {
                                        background: e.theme.colors.white
                                    }
                                }
                            })
                        }))
                    }
                },
                Z = l(30079),
                L = l(1569),
                B = l(39283);

            function _() {
                var e = (0, a.Z)(["\n  background-color: ", ";\n  border-radius: ", ";\n  flex-direction: column;\n  margin-bottom: 38px;\n  position: relative;\n"]);
                return _ = function() {
                    return e
                }, e
            }

            function H() {
                var e = (0, a.Z)(["\n  height: 0;\n  padding-top: 75%;\n  position: relative;\n  border-radius: ", ";\n"]);
                return H = function() {
                    return e
                }, e
            }
            var A = function(e) {
                    var n = e.category,
                        l = e.image,
                        a = e.url;
                    return (0, t.jsx)(U, {
                        children: (0, t.jsxs)(L.r, {
                            href: a,
                            children: [(0, t.jsx)(k.g, {
                                padding: {
                                    _: "8px",
                                    lg: "16px"
                                },
                                children: (0, t.jsx)(V, {
                                    children: (0, t.jsx)(B.E, {
                                        alt: n,
                                        height: 400,
                                        layout: "fill",
                                        objectFit: "cover",
                                        priority: !0,
                                        src: l
                                    })
                                })
                            }), (0, t.jsx)(u.k, {
                                justifyContent: "center",
                                paddingBottom: {
                                    _: "8px",
                                    lg: "16px"
                                },
                                textAlign: "center",
                                children: (0, t.jsx)(h.xv, {
                                    size: "medium",
                                    textAlign: "center",
                                    weight: "semibold",
                                    children: n
                                })
                            })]
                        })
                    })
                },
                U = (0, o.ZP)(u.k).withConfig({
                    componentId: "sc-c1673581-0"
                })(_(), (function(e) {
                    return e.theme.colors.input
                }), (function(e) {
                    return e.theme.borderRadius.modal
                })),
                V = (0, o.ZP)(k.g).withConfig({
                    componentId: "sc-c1673581-1"
                })(H(), (function(e) {
                    return e.theme.borderRadius.large
                })),
                O = {
                    default: {
                        slidesPerView: 2,
                        slidesPerGroup: 1,
                        spaceBetween: 16
                    },
                    sm: {
                        slidesPerView: 3,
                        slidesPerGroup: 1,
                        spaceBetween: 16
                    },
                    md: {
                        slidesPerView: 4,
                        slidesPerGroup: 1,
                        spaceBetween: 16
                    },
                    lg: {
                        slidesPerView: 5,
                        slidesPerGroup: 1,
                        spaceBetween: 16
                    },
                    xl: {
                        slidesPerView: 6,
                        slidesPerGroup: 1,
                        spaceBetween: 16
                    },
                    xxl: {
                        slidesPerView: 6,
                        slidesPerGroup: 1,
                        spaceBetween: 16
                    },
                    xxxl: {
                        slidesPerView: 6,
                        slidesPerGroup: 1,
                        spaceBetween: 16
                    }
                },
                z = function() {
                    var e = (0, Z.t)(),
                        n = (0, x.T)(),
                        l = (0, b.Z)("(min-width: ".concat(p.AV.lg, "px)"), !1);
                    if (!e) return (0, t.jsx)(C, {});
                    var a = n.map((function(e, n) {
                        var l = e.name,
                            a = e.slug,
                            i = "/static/images/categories/maverick-".concat(a, ".png"),
                            r = "/category/".concat(a);
                        return {
                            id: "".concat(e.key, "-").concat(n),
                            collection: (0, t.jsx)(A, {
                                category: l,
                                image: i,
                                url: r
                            })
                        }
                    }));
                    return (0, t.jsx)(k.g, {
                        alignSelf: "center",
                        "data-testid": "Home--category-carousel",
                        children: (0, t.jsx)(j.a, {
                            className: "home_category_carousel",
                            enableArrowControls: !0,
                            enableFreeScroll: !0,
                            enableMousewheel: !0,
                            id: "category-carousel",
                            loop: !0,
                            overrides: I(l),
                            renderSlide: function(e) {
                                return e.collection
                            },
                            responsiveConfig: O,
                            showScrollbar: !1,
                            slides: a
                        })
                    })
                };

            function D() {
                var e = (0, a.Z)(["\n  margin-bottom: 24px;\n"]);
                return D = function() {
                    return e
                }, e
            }
            var N = function() {
                    var e = (0, y.q)("components"),
                        n = (0, x.K)(),
                        l = (0, f.hJ)(),
                        a = (0, s.Z)(n.map((function(e) {
                            return {
                                image: e.slug,
                                title: e.name,
                                url: "/category/".concat(e.slug),
                                text: e.text
                            }
                        }))),
                        i = (0, d.chunk)(a, 3),
                        r = l ? e("browseCategories.exploreCategories", "Explore categories") : e("browseCategories.browseByCategory", "Browse by category");
                    return (0, t.jsx)(v.nx, {
                        eventSource: "BrowseCategories",
                        children: (0, t.jsxs)(t.Fragment, {
                            children: [(0, t.jsxs)(g.r.Item, {
                                marginBottom: {
                                    _: "24px",
                                    xxl: "36px"
                                },
                                marginTop: l ? {
                                    _: "24px",
                                    xxl: "36px"
                                } : void 0,
                                children: [(0, t.jsx)(p.pU, {
                                    lessThan: "lg",
                                    children: (0, t.jsx)(h.xv.Heading, {
                                        color: l ? "white" : void 0,
                                        size: "small",
                                        children: r
                                    })
                                }), (0, t.jsxs)(p.pU, {
                                    greaterThanOrEqual: "lg",
                                    children: [(0, t.jsx)(p.pU, {
                                        greaterThanOrEqual: "xxl",
                                        children: (0, t.jsx)(h.xv.Heading, {
                                            color: l ? "white" : void 0,
                                            size: "large",
                                            children: r
                                        })
                                    }), (0, t.jsx)(p.pU, {
                                        between: ["lg", "xxl"],
                                        children: (0, t.jsx)(h.xv.Heading, {
                                            color: l ? "white" : void 0,
                                            size: "medium",
                                            children: r
                                        })
                                    })]
                                })]
                            }), l ? (0, t.jsx)(z, {}) : (0, t.jsxs)(t.Fragment, {
                                children: [(0, t.jsx)(p.pU, {
                                    lessThan: "lg",
                                    children: (0, t.jsx)(g.r, {
                                        gridColumnGap: 16,
                                        children: i.map((function(e, n) {
                                            return (0, t.jsx)(g.r.Item, {
                                                lg: 4,
                                                children: e.map((function(e) {
                                                    return (0, t.jsx)(E, {
                                                        eventSource: "BrowseCategories",
                                                        href: e.url,
                                                        imageUrl: "/static/images/categories/".concat(e.image, ".png"),
                                                        children: (0, t.jsx)(u.k, {
                                                            alignItems: "center",
                                                            height: 40,
                                                            justifyContent: "center",
                                                            children: (0, t.jsx)(m.WX, {
                                                                as: "span",
                                                                variant: "h5",
                                                                children: e.title
                                                            })
                                                        })
                                                    }, e.image)
                                                }))
                                            }, "grouped-cards-".concat(n))
                                        }))
                                    })
                                }), (0, t.jsx)(p.pU, {
                                    greaterThanOrEqual: "lg",
                                    children: (0, t.jsx)(g.r, {
                                        gridColumnGap: 16,
                                        children: i.map((function(e, n) {
                                            return (0, t.jsx)(g.r.Item, {
                                                lg: 4,
                                                children: e.map((function(e) {
                                                    return (0, t.jsx)(E, {
                                                        eventSource: "BrowseCategories",
                                                        href: e.url,
                                                        imageUrl: "/static/images/categories/".concat(e.image, ".png"),
                                                        children: (0, t.jsx)(u.k, {
                                                            alignItems: "center",
                                                            height: 40,
                                                            justifyContent: "center",
                                                            children: (0, t.jsx)(m.WX, {
                                                                as: "span",
                                                                variant: "h4",
                                                                children: e.title
                                                            })
                                                        })
                                                    }, e.image)
                                                }))
                                            }, "grouped-cards-".concat(n))
                                        }))
                                    })
                                })]
                            })]
                        })
                    })
                },
                E = (0, o.ZP)(c.V).withConfig({
                    componentId: "sc-fcd7a436-0"
                })(D()),
                M = l(40422),
                R = l(19378),
                W = l(78439),
                q = l(70884),
                G = function(e) {
                    var n = e.IpRightsTakedownDelistedMode,
                        l = (0, y.q)("modals");
                    return (0, t.jsx)(t.Fragment, {
                        children: (0, t.jsxs)(R.u_, {
                            isOpen: !0,
                            children: [(0, t.jsx)(R.u_.Header, {
                                children: (0, t.jsx)(R.u_.Title, {
                                    children: l("ipRightsDelistedNotice.contentNoLongerAccessible.title", "This content is no longer accessible on OpenSea.")
                                })
                            }), (0, t.jsx)(R.u_.Body, {
                                children: (0, t.jsxs)(k.g, {
                                    children: [(0, t.jsxs)(m.WX, {
                                        children: [l("ipRightsDelistedNotice.contentNoLongerAccessible.description", "This content is no longer accessible on OpenSea. It has been\n              removed based on a claim of intellectual property infringement.\n              Learn more about how OpenSea handles these claims "), (0, t.jsx)(L.r, {
                                            href: "".concat(q.lw, "/hc/articles/4412092785043-What-can-I-do-if-my-copyrighted-works-are-being-sold-without-my-permission-"),
                                            children: l("common.here", "here")
                                        }), "."]
                                    }), "item-owner" == n && (0, t.jsxs)(m.WX, {
                                        children: [l("ipRightsDelistedNotice.activeListing.description", "If this item has an active listing, you can remove it "), (0, t.jsx)(L.r, {
                                            href: "account/settings?tab=support",
                                            children: l("common.here", "here")
                                        }), "."]
                                    }), "collection-owner" == n && (0, t.jsxs)(m.WX, {
                                        children: [l("ipRightsDelistedNotice.activeCollectionListing.link", "If this collection has active listings, you can remove them"), " ", (0, t.jsx)(L.r, {
                                            href: "account/settings?tab=support",
                                            children: l("common.here", "here")
                                        }), "."]
                                    })]
                                })
                            }), (0, t.jsx)(R.u_.Footer, {
                                children: (0, t.jsx)(R.u_.Footer.Button, {
                                    variant: "secondary",
                                    onClick: function() {
                                        return W.Z.push("/")
                                    },
                                    children: l("common.close", "Close")
                                })
                            })]
                        })
                    })
                },
                $ = l(72242),
                Q = l(38996),
                X = l(99525),
                Y = l(76190),
                J = l(59809),
                ee = l(43951),
                ne = l(48028),
                le = l(83989),
                ae = l(23176),
                te = l(47366);

            function ie() {
                var e = (0, a.Z)(["\n  display: inline-block;\n  position: relative;\n  width: 100%;\n"]);
                return ie = function() {
                    return e
                }, e
            }

            function re() {
                var e = (0, a.Z)(["\n  background-color: ", ";\n  border-radius: ", ";\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n  transition: box-shadow 0.25s 0s ease-in-out;\n\n  @media (hover: hover) {\n    &:hover {\n      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n      ", "\n    }\n  }\n"]);
                return re = function() {
                    return e
                }, e
            }

            function oe() {
                var e = (0, a.Z)(["\n  width: 54px;\n  height: 54px;\n  border: 3px solid ", ";\n  border-radius: ", ";\n  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.08);\n  background-color: ", ";\n  position: relative;\n  ", ":hover & {\n    ", "\n  }\n"]);
                return oe = function() {
                    return e
                }, e
            }

            function se() {
                var e = (0, a.Z)(["\n  padding: 16px;\n  border-radius: ", ";\n  z-index: 99;\n"]);
                return se = function() {
                    return e
                }, e
            }

            function de() {
                var e = (0, a.Z)(["\n  border-radius: ", ";\n"]);
                return de = function() {
                    return e
                }, e
            }

            function ce() {
                var e = (0, a.Z)(["\n  background-color: ", ";\n  border-top-left-radius: ", ";\n  border-top-right-radius: ", ";\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  .Image--image {\n    position: absolute;\n  }\n"]);
                return ce = function() {
                    return e
                }, e
            }

            function ue() {
                var e = (0, a.Z)(["\n  display: block;\n  align-items: center;\n  margin: 0;\n  overflow: hidden;\n  word-break: break-all;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"]);
                return ue = function() {
                    return e
                }, e
            }
            var ge = function(e) {
                    var n = e.data,
                        a = e.index,
                        i = e.sectionIndex,
                        o = (0, r.useFragment)(l(20878), n),
                        s = o.collection,
                        d = o.collectionSubtitle,
                        c = o.section,
                        g = s.logo,
                        m = s.banner,
                        h = s.name,
                        x = s.verificationStatus,
                        f = (0, ae.vg)(s);
                    if (!m || !g) return null;
                    var y, v = (0, t.jsx)(me, {
                        children: (0, t.jsx)(L.r, {
                            href: f,
                            children: (0, t.jsxs)(pe, {
                                children: [(0, t.jsx)(k.g, {
                                    height: "0",
                                    paddingBottom: {
                                        _: "".concat(68.75, "%"),
                                        sm: "".concat(56.25, "%")
                                    },
                                    position: "relative",
                                    children: (0, t.jsx)(ye, {
                                        alt: h,
                                        height: 400,
                                        layout: "fill",
                                        objectFit: "cover",
                                        src: m
                                    })
                                }), (0, t.jsx)(xe, {
                                    marginTop: "-50px",
                                    children: (0, t.jsxs)(le.t, {
                                        overflow: "hidden",
                                        children: [(0, t.jsx)(he, {
                                            children: (0, t.jsx)(fe, {
                                                alt: h,
                                                height: 48,
                                                layout: "fixed",
                                                objectFit: "cover",
                                                src: g,
                                                width: 48
                                            })
                                        }), (0, t.jsxs)(u.k, {
                                            alignItems: "center",
                                            marginBottom: d ? void 0 : "13px",
                                            paddingLeft: "0px",
                                            paddingTop: d ? "8px" : "16px",
                                            children: [(0, t.jsx)(ve, {
                                                as: "div",
                                                variant: "h5",
                                                children: h
                                            }), (0, te.R)(x) && (0, t.jsx)(ne.o, {
                                                showTooltip: !1,
                                                size: "small",
                                                verificationStatus: x
                                            })]
                                        }), d && (0, t.jsx)(ve, {
                                            as: "div",
                                            paddingLeft: "0px",
                                            variant: "small-thin-subtle",
                                            children: d
                                        })]
                                    })
                                })]
                            })
                        })
                    });
                    return (0, t.jsxs)(t.Fragment, {
                        children: [(0, t.jsx)(p.pU, {
                            lessThan: "lg",
                            children: v
                        }), (0, t.jsx)(p.pU, {
                            greaterThanOrEqual: "lg",
                            children: (0, t.jsx)(ee.O, {
                                collection: o.collection,
                                eventParams: {
                                    index: a,
                                    sectionIndex: i,
                                    sectionTitle: c.title
                                },
                                eventSource: "MerchandiseShelfCollectionClick",
                                subtitle: null !== (y = o.collectionSubtitle) && void 0 !== y ? y : void 0
                            })
                        })]
                    })
                },
                me = (0, o.ZP)(k.g).withConfig({
                    componentId: "sc-34f70596-0"
                })(ie()),
                pe = (0, o.ZP)(k.g).withConfig({
                    componentId: "sc-34f70596-1"
                })(re(), (function(e) {
                    return e.theme.colors.card
                }), (function(e) {
                    return e.theme.borderRadius.default
                }), (function(e) {
                    return (0, P.Um)({
                        variants: {
                            dark: {
                                backgroundColor: e.theme.colors.ash,
                                transition: "background-color 0.25s ease-in-out"
                            }
                        }
                    })
                })),
                he = o.ZP.div.withConfig({
                    componentId: "sc-34f70596-2"
                })(oe(), (function(e) {
                    return e.theme.colors.card
                }), (function(e) {
                    return e.theme.borderRadius.default
                }), (function(e) {
                    return e.theme.colors.card
                }), pe, (function(e) {
                    return (0, P.Um)({
                        variants: {
                            dark: {
                                borderColor: e.theme.colors.ash,
                                transition: "border 0.25s ease-in-out"
                            }
                        }
                    })
                })),
                xe = (0, o.ZP)(u.k).withConfig({
                    componentId: "sc-34f70596-3"
                })(se(), (function(e) {
                    return e.theme.borderRadius.large
                })),
                fe = (0, o.ZP)(B.E).withConfig({
                    componentId: "sc-34f70596-4"
                })(de(), (function(e) {
                    return e.theme.borderRadius.default
                })),
                ye = (0, o.ZP)(B.E).withConfig({
                    componentId: "sc-34f70596-5"
                })(ce(), (function(e) {
                    return e.theme.colors.card
                }), (function(e) {
                    return e.theme.borderRadius.default
                }), (function(e) {
                    return e.theme.borderRadius.default
                })),
                ve = (0, o.ZP)(m.WX).withConfig({
                    componentId: "sc-34f70596-6"
                })(ue()),
                be = {
                    default: {
                        slidesPerView: 3,
                        spaceBetween: 16,
                        slidesPerGroup: 1
                    },
                    xs: {
                        slidesPerView: 1,
                        spaceBetween: 16,
                        slidesPerGroup: 1
                    },
                    sm: {
                        slidesPerView: 1,
                        spaceBetween: 16,
                        slidesPerGroup: 1
                    },
                    md: {
                        slidesPerView: 2,
                        spaceBetween: 16,
                        slidesPerGroup: 1
                    }
                },
                ke = function(e) {
                    var n = e.dataKey,
                        a = (0, r.useFragment)(l(49663), n),
                        i = (0, y.q)("home"),
                        o = (0, Z.t)(),
                        s = (0, b.Z)("(min-width: ".concat(p.AV.lg, "px)"), !1),
                        c = function() {
                            var e = (0, y.q)("home");
                            return {
                                "New and notable": e("constants.newAndNotable.heading", "New and notable"),
                                "Sports spotlight": e("constants.Sports.heading", "Sports spotlight"),
                                "Photography spotlight": e("constants.photography.heading", "Photography spotlight"),
                                "Music spotlight": e("constants.Music.heading", "Music spotlight"),
                                "Domain names spotlight": e("constants.domains.heading", "Domain names spotlight"),
                                "Ticketing spotlight": e("constants.ticketing.heading", "Ticketing spotlight"),
                                "Gaming spotlight": e("constants.Gaming.heading", "Gaming spotlight"),
                                "Virtual worlds spotlight": e("constants.virtualWorlds.heading", "Virtual worlds spotlight"),
                                "Trading cards spotlight": e("constants.tradingCards.heading", "Trading cards spotlight"),
                                "Utility spotlight": e("constants.Utility.heading", "Utility spotlight"),
                                "Membership spotlight": e("constants.membership.heading", "Membership spotlight"),
                                "Collectibles spotlight": e("constants.collectibles.heading", "Collectibles spotlight"),
                                "Amber Vittoria spotlight": e("constants.amberVittoria.heading", "Amber Vittoria spotlight"),
                                "Klaytn spotlight": e("constants.klaytn.heading", "Klaytn spotlight"),
                                "Solana spotlight": e("constants.solana.heading", "Solana spotlight"),
                                "Black History Month spotlight": e("constants.blackHistoryMonth.heading", "Black History Month spotlight"),
                                "Women's History Month spotlight": e("constants.womenHistoryMonth.heading", "Women's History Month spotlight"),
                                "Pride Month spotlight": e("constants.prideMonth.heading", "Pride Month spotlight"),
                                "AAPI Heritage Month spotlight": e("constants.AAPIHeritageMonth.heading", "AAPI Heritage Month spotlight"),
                                "Latinx Heritage Month spotlight": e("constants.latinxHeritageMonth.heading", "Latinx Heritage Month spotlight"),
                                "Latin Heritage Month spotlight": e("constants.latinHeritageMonth.heading", "Latin Heritage Month spotlight"),
                                "Native American Heritage Month spotlight": e("constants.nativeAmericanHeritageMonth.heading", "Native American Heritage Month spotlight"),
                                "Happy Halloween!": e("constants.happyHalloween.heading", "Happy Halloween!")
                            }
                        }();
                    if (!a || !a.length) return null;
                    var u = a.filter((function(e) {
                            return e.collection.logo && e.collection.banner
                        })),
                        x = (0, d.groupBy)(u, (function(e) {
                            return e.section.relayId
                        })),
                        f = Object.keys(x).slice(0, 2),
                        v = i("merchShelves.viewAllButton", "View all");
                    return o ? (0, t.jsx)(t.Fragment, {
                        children: f.map((function(e, n) {
                            var l = x[e],
                                a = x[e][0].section,
                                i = a.title,
                                r = a.titleUrl;
                            r && 0 === r.indexOf("https://") && (new URL(r).host === q.je && (r = r.split(q.je)[1]));
                            var o = c[i] || i;
                            return (0, t.jsxs)(k.g, {
                                marginBottom: n < f.length - 1 ? {
                                    _: 44,
                                    xl: 56,
                                    xxl: 66
                                } : {
                                    _: 12,
                                    xl: 16
                                },
                                children: [(0, t.jsxs)(g.r.Item, {
                                    children: [(0, t.jsx)(p.pU, {
                                        greaterThanOrEqual: "lg",
                                        children: (0, t.jsxs)(X.i, {
                                            alignItems: "center",
                                            marginBottom: {
                                                _: "24px",
                                                xxl: "36px"
                                            },
                                            children: [(0, t.jsx)(p.pU, {
                                                greaterThanOrEqual: "xxl",
                                                children: (0, t.jsx)(h.xv.Heading, {
                                                    size: "large",
                                                    children: o
                                                })
                                            }), (0, t.jsx)(p.pU, {
                                                between: ["lg", "xxl"],
                                                children: (0, t.jsx)(h.xv.Heading, {
                                                    size: "medium",
                                                    children: o
                                                })
                                            }), r && (0, t.jsx)(L.r, {
                                                eventParams: {
                                                    sectionIndex: n,
                                                    sectionTitle: o
                                                },
                                                eventSource: "MerchandiseShelf",
                                                href: r,
                                                children: (0, t.jsx)(Y.t, {
                                                    height: {
                                                        _: "36px",
                                                        lg: "48px"
                                                    },
                                                    children: (0, t.jsx)(m.WX, {
                                                        color: "text.heading",
                                                        variant: m.Sv.SMALL_BOLD,
                                                        children: v
                                                    })
                                                })
                                            })]
                                        })
                                    }), (0, t.jsx)(p.pU, {
                                        lessThan: "lg",
                                        children: (0, t.jsxs)(X.i, {
                                            alignItems: "center",
                                            marginBottom: {
                                                _: "24px",
                                                xxl: "36px"
                                            },
                                            children: [(0, t.jsx)(p.pU, {
                                                lessThan: "lg",
                                                children: (0, t.jsx)(h.xv.Heading, {
                                                    size: "small",
                                                    children: o
                                                })
                                            }), r && (0, t.jsx)(L.r, {
                                                eventParams: {
                                                    sectionIndex: n,
                                                    sectionTitle: o
                                                },
                                                eventSource: "MerchandiseShelf",
                                                href: r,
                                                children: (0, t.jsx)(Y.t, {
                                                    height: {
                                                        _: "36px",
                                                        lg: "48px"
                                                    },
                                                    children: (0, t.jsx)(m.WX, {
                                                        color: "text.heading",
                                                        variant: m.Sv.SMALL_BOLD,
                                                        children: v
                                                    })
                                                })
                                            })]
                                        })
                                    })]
                                }), (0, t.jsx)(g.r.Item, {
                                    children: (0, t.jsx)(j.a, {
                                        className: "featured_swiper",
                                        enableArrowControls: !0,
                                        enableFreeScroll: !0,
                                        enableMousewheel: !0,
                                        id: "hp-featured-swiper-".concat(n),
                                        loop: !0,
                                        loopedSlides: l.length,
                                        overrides: I(s),
                                        renderSlide: function(e) {
                                            return e.collection
                                        },
                                        responsiveConfig: be,
                                        showScrollbar: !1,
                                        slides: l.map((function(e, l) {
                                            return {
                                                id: e.collection.slug,
                                                collection: (0, t.jsx)(k.g, {
                                                    margin: "0px 0px 8px 0px",
                                                    children: (0, t.jsx)(ge, {
                                                        data: e,
                                                        index: l,
                                                        sectionIndex: n
                                                    })
                                                })
                                            }
                                        }))
                                    })
                                })]
                            }, o)
                        }))
                    }) : null
                },
                je = l(17482);

            function we() {
                var e = (0, a.Z)(["\n      gap: 28px;\n    "]);
                return we = function() {
                    return e
                }, e
            }

            function Se() {
                var e = (0, a.Z)(["\n  gap: 16px;\n  align-items: center;\n  ", "\n  &&& {\n    padding-left: 0px;\n  }\n\n  :hover {\n    overflow: auto;\n  }\n"]);
                return Se = function() {
                    return e
                }, e
            }

            function Ce() {
                var e = (0, a.Z)(["\n  display: flex;\n  justify-content: center;\n  height: 100%;\n  padding: 12px 0px;\n  background-color: transparent;\n  color: ", ";\n  :hover {\n    color: ", ";\n  }\n  ", " {\n    background-color: transparent;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n    margin: 0;\n    flex: 1;\n    white-space: nowrap;\n  }\n"]);
                return Ce = function() {
                    return e
                }, e
            }

            function Te() {
                var e = (0, a.Z)(["\n  color: ", ";\n  background-color: transparent;\n"]);
                return Te = function() {
                    return e
                }, e
            }
            var Fe = function() {
                    var e = (0, x.T)();
                    return (0, t.jsx)(u.k, {
                        justifyContent: "center",
                        children: (0, t.jsx)(Pe, {
                            children: e.map((function(n, l) {
                                return (0, t.jsxs)(t.Fragment, {
                                    children: [(0, t.jsx)(Ke, {
                                        category: n.key,
                                        children: n.name
                                    }, n.key), l !== e.length - 1 && (0, t.jsx)(Ze, {
                                        children: "|"
                                    })]
                                })
                            }))
                        })
                    })
                },
                Pe = (0, o.ZP)(je.v).attrs({
                    direction: "horizontal"
                }).withConfig({
                    componentId: "sc-a3db7bbd-0"
                })(Se(), (0, p.BC)({
                    lg: (0, o.iv)(we())
                })),
                Ke = function(e) {
                    var n = e.category,
                        l = e.children,
                        a = "/category/".concat(n);
                    return (0, t.jsx)(Ie, {
                        direction: "horizontal",
                        href: a,
                        scroll: !1,
                        children: (0, t.jsx)(je.v.Title, {
                            children: l
                        })
                    })
                },
                Ie = (0, o.ZP)(je.v.Item).withConfig({
                    componentId: "sc-a3db7bbd-1"
                })(Ce(), (function(e) {
                    return (0, F.m4)(e.theme.colors.text.heading, .8)
                }), (function(e) {
                    return e.theme.colors.text.heading
                }), je.v.Title),
                Ze = (0, o.ZP)(je.v.Item).withConfig({
                    componentId: "sc-a3db7bbd-2"
                })(Te(), (function(e) {
                    return (0, F.m4)(e.theme.colors.text.heading, .2)
                })),
                Le = l(510),
                Be = l(25401),
                _e = l(31893),
                He = l(33303),
                Ae = l(11652);

            function Ue() {
                var e = (0, a.Z)(["\n  color: white;\n  margin: 0 5px;\n"]);
                return Ue = function() {
                    return e
                }, e
            }

            function Ve() {
                var e = (0, a.Z)(["\n  max-height: 100%;\n  max-width: 100%;\n  overflow: hidden;\n  position: relative;\n  border-radius: ", ';\n  background: linear-gradient(\n    180deg,\n    rgba(0, 0, 0, 0) 60%,\n    rgba(0, 0, 0, 0.8) 100%\n  );\n\n  &::after {\n    display: block;\n    content: "";\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    border: 1px solid rgba(0, 0, 0, 0.1);\n    border-radius: ', ";\n  }\n\n  img {\n    border-radius: inherit;\n    z-index: -1;\n    width: 100%;\n    height: auto;\n  }\n\n  @media (hover: hover) {\n    &:hover {\n      img {\n        transform: scale(1.08);\n        transition-duration: 0.4s;\n      }\n    }\n  }\n\n  &:not(:hover) {\n    img {\n      transition: transform 0.4s;\n    }\n  }\n"]);
                return Ve = function() {
                    return e
                }, e
            }

            function Oe() {
                var e = (0, a.Z)(["\n  position: absolute;\n  gap: 2px;\n  bottom: 0;\n  padding-bottom: 12px;\n  z-index: 1;\n  padding-left: 16px;\n"]);
                return Oe = function() {
                    return e
                }, e
            }

            function ze() {
                var e = (0, a.Z)(["\n  margin-left: 4px;\n  width: 15px;\n  height: 15px;\n"]);
                return ze = function() {
                    return e
                }, e
            }
            var De = function(e) {
                    var n = e.dataKey,
                        a = e.index,
                        i = e.isPriorityImage,
                        o = void 0 !== i && i,
                        s = e.size,
                        d = (0, y.q)("home"),
                        c = (0, r.useFragment)(l(76122), n);
                    if (!c) return null;
                    var g = c.collection,
                        p = c.shortDescription,
                        x = c.overrideUrl,
                        f = g.slug,
                        v = g.name,
                        b = g.logo,
                        k = g.verificationStatus,
                        j = g.statsV2,
                        w = g.nativePaymentAsset,
                        S = (0, ae.vg)(g),
                        C = null !== x && void 0 !== x ? x : b;
                    if (!C) return null;
                    var T = j.floorPrice && !(0, Ae.bn)(j.floorPrice.unit).isZero() ? (0, Ae.Yy)((0, Ae.bn)(j.floorPrice.unit), 2) : "\uff0d";
                    return (0, t.jsx)(u.k, {
                        justifyContent: "center",
                        children: (0, t.jsx)(L.r, {
                            eventParams: {
                                collectionSlug: f,
                                index: a
                            },
                            eventSource: "TopCarousel",
                            href: S,
                            children: (0, t.jsxs)(Ee, {
                                children: [(0, t.jsx)(B.E, {
                                    alt: v,
                                    height: s,
                                    objectFit: "cover",
                                    priority: o,
                                    src: C,
                                    width: s
                                }), (0, t.jsxs)(Me, {
                                    children: [(0, t.jsx)(u.k, {
                                        alignItems: "center",
                                        children: (0, t.jsx)(Le.n, {
                                            lines: 1,
                                            children: (0, t.jsxs)(m.WX, {
                                                color: "white",
                                                lineHeight: "normal",
                                                margin: 0,
                                                variant: m.Sv.H5,
                                                children: [v, (0, t.jsx)(_e.O, {
                                                    marginLeft: "4px",
                                                    verticalAlign: "middle",
                                                    children: "VERIFIED" === k && (0, t.jsx)(Re, {
                                                        size: "small"
                                                    })
                                                })]
                                            })
                                        })
                                    }), (0, t.jsxs)("span", {
                                        children: [p && (0, t.jsx)(t.Fragment, {
                                            children: (0, t.jsx)(h.xv.Body, {
                                                color: "white",
                                                size: "small",
                                                weight: "semibold",
                                                children: p
                                            })
                                        }), p && "\uff0d" !== T && (0, t.jsx)(Ne, {
                                            children: "\xb7"
                                        }), "\uff0d" !== T && (0, t.jsx)(h.xv.Body, {
                                            color: "white",
                                            size: "small",
                                            children: d("header.collectionItem.floorPrice", "Floor: {{floorPrice}} {{assetSymbol}}", {
                                                floorPrice: T,
                                                assetSymbol: w.asset.symbol
                                            })
                                        })]
                                    })]
                                })]
                            })
                        })
                    })
                },
                Ne = o.ZP.span.withConfig({
                    componentId: "sc-a248b0bb-0"
                })(Ue()),
                Ee = (0, o.ZP)(u.k).withConfig({
                    componentId: "sc-a248b0bb-1"
                })(Ve(), (function(e) {
                    return e.theme.borderRadius.pill
                }), (function(e) {
                    return e.theme.borderRadius.pill
                })),
                Me = (0, o.ZP)(He.B).withConfig({
                    componentId: "sc-a248b0bb-2"
                })(Oe()),
                Re = (0, o.ZP)(Be.S).withConfig({
                    componentId: "sc-a248b0bb-3"
                })(ze()),
                We = function(e) {
                    var n = e.responsiveConfig,
                        l = e.slides,
                        a = e.testId,
                        r = e.autoplayConfig,
                        o = e.id,
                        s = (0, Z.t)(),
                        d = (0, b.Z)("(min-width: ".concat(p.AV.lg, "px)"), !1),
                        c = 1;
                    (0, b.Z)("(min-width: ".concat(p.AV.xxxl, "px)"), !1) ? c = 6: d && (c = 4);
                    var u = (0, i.useCallback)((function(e) {
                        return e.collection
                    }), []);
                    return s ? (0, t.jsx)(k.g, {
                        alignSelf: "center",
                        "data-testid": a,
                        children: (0, t.jsx)(j.a, {
                            autoplayConfig: r,
                            className: "home_header_swiper",
                            enableArrowControls: !0,
                            enableFreeScroll: !0,
                            enableMousewheel: !0,
                            id: o,
                            loop: !0,
                            loopedSlides: c,
                            overrides: I(d),
                            renderSlide: u,
                            responsiveConfig: n,
                            showScrollbar: !1,
                            slides: l,
                            speed: 500
                        })
                    }) : null
                },
                qe = {
                    default: {
                        slidesPerView: 1,
                        slidesPerGroup: 1,
                        spaceBetween: 16
                    },
                    sm: {
                        slidesPerView: 2,
                        slidesPerGroup: 1,
                        spaceBetween: 16
                    },
                    md: {
                        slidesPerView: 3,
                        slidesPerGroup: 1,
                        spaceBetween: 16
                    },
                    lg: {
                        slidesPerView: 4,
                        slidesPerGroup: 4,
                        spaceBetween: 16
                    },
                    xl: {
                        slidesPerView: 4,
                        slidesPerGroup: 4,
                        spaceBetween: 16
                    },
                    xxl: {
                        slidesPerView: 4,
                        slidesPerGroup: 4,
                        spaceBetween: 16
                    },
                    xxxl: {
                        slidesPerView: 6,
                        slidesPerGroup: 6,
                        spaceBetween: 16
                    }
                },
                Ge = function(e) {
                    var n = e.dataKey,
                        a = (0, r.useFragment)(l(95969), n),
                        i = (0, Z.t)(),
                        o = (0, b.Z)("(min-width: ".concat(p.AV.xxxl, "px)"), !1),
                        s = (0, b.Z)("(min-width: ".concat(p.AV.lg, "px)"), !1),
                        d = (0, b.Z)("(min-width: ".concat(p.AV.md, "px)"), !1),
                        c = (0, b.Z)("(min-width: ".concat(p.AV.sm, "px)"), !1);
                    if (!a || !a.length) return null;
                    if (!i) return (0, t.jsx)(C, {});
                    var u = 1;
                    o ? u = 6 : s ? u = 4 : d ? u = 3 : c && (u = 2);
                    for (var g = a.filter((function(e) {
                            return e.overrideUrl || e.collection.logo
                        })).map((function(e, n) {
                            return {
                                id: "".concat(e.collection.name).concat(n),
                                collection: (0, t.jsx)(De, {
                                    dataKey: e,
                                    index: n,
                                    isPriorityImage: n < u,
                                    size: 800
                                })
                            }
                        })).slice(0, 12), m = 0; g.length < 12;) g.push({
                        id: "blank-".concat(m),
                        collection: (0, t.jsx)(t.Fragment, {})
                    }), m++;
                    return (0, t.jsx)(We, {
                        autoplayConfig: {
                            delay: 5e3,
                            pauseOnMouseEnter: !0,
                            disableOnInteraction: !1
                        },
                        id: "header-carousel",
                        responsiveConfig: qe,
                        slides: g,
                        testId: "Home--header-carousel"
                    })
                };

            function $e() {
                var e = (0, a.Z)(["\n  font-size: 40px;\n"]);
                return $e = function() {
                    return e
                }, e
            }
            var Qe = function(e) {
                    var n, a = e.dataKey,
                        i = (0, r.useFragment)(l(81419), a),
                        o = (0, y.q)("home")("header.text", "Explore, collect, and sell NFTs"),
                        s = (0, f.hJ)();
                    return (0, t.jsxs)(t.Fragment, {
                        children: [(0, t.jsx)(p.pU, {
                            greaterThanOrEqual: "xxl",
                            children: (0, t.jsx)(g.r, {
                                children: (0, t.jsx)(g.r.Item, {
                                    lg: 12,
                                    marginBottom: "56px",
                                    marginTop: "40px",
                                    children: (0, t.jsx)(u.k, {
                                        justifyContent: "center",
                                        textAlign: "center",
                                        children: (0, t.jsx)(h.xv.Display, {
                                            as: "h1",
                                            "data-testid": "Home--headerText",
                                            lineHeight: 56,
                                            size: "large",
                                            children: o
                                        })
                                    })
                                })
                            })
                        }), (0, t.jsx)(p.pU, {
                            between: ["sm", "xxl"],
                            children: (0, t.jsx)(g.r, {
                                children: (0, t.jsx)(g.r.Item, {
                                    marginBottom: "44px",
                                    marginTop: "32px",
                                    xs: 12,
                                    children: (0, t.jsx)(p.pU, {
                                        greaterThanOrEqual: "sm",
                                        children: (0, t.jsxs)(u.k, {
                                            justifyContent: "center",
                                            textAlign: "center",
                                            children: [(0, t.jsx)(p.pU, {
                                                between: ["xl", "xxl"],
                                                children: (0, t.jsx)(Xe, {
                                                    as: "h1",
                                                    "data-testid": "Home--headerText",
                                                    lineHeight: 56,
                                                    size: "large",
                                                    children: o
                                                })
                                            }), (0, t.jsx)(p.pU, {
                                                between: ["sm", "xl"],
                                                children: (0, t.jsx)(h.xv.Display, {
                                                    as: "h1",
                                                    "data-testid": "Home--headerText",
                                                    lineHeight: 40,
                                                    size: "medium",
                                                    children: o
                                                })
                                            })]
                                        })
                                    })
                                })
                            })
                        }), (0, t.jsx)(p.pU, {
                            lessThan: "sm",
                            children: (0, t.jsx)(g.r, {
                                margin: "32px 24px 44px 24px",
                                children: (0, t.jsx)(g.r.Item, {
                                    xs: 12,
                                    children: (0, t.jsx)(u.k, {
                                        justifyContent: "center",
                                        textAlign: "center",
                                        children: (0, t.jsx)(h.xv.Display, {
                                            as: "h1",
                                            "data-testid": "Home--headerText",
                                            lineHeight: 40,
                                            size: "medium",
                                            children: o
                                        })
                                    })
                                })
                            })
                        }), s && (0, t.jsx)(g.r, {
                            margin: "-24px 0 24px 0",
                            children: (0, t.jsx)(g.r.Item, {
                                xs: 12,
                                children: (0, t.jsx)(Fe, {})
                            })
                        }), (0, t.jsx)(g.r, {
                            children: (0, t.jsx)(g.r.Item, {
                                xs: 12,
                                children: (0, t.jsx)(Ge, {
                                    dataKey: null !== (n = null === i || void 0 === i ? void 0 : i.homePageHeaderCarousel) && void 0 !== n ? n : null
                                })
                            })
                        })]
                    })
                },
                Xe = (0, o.ZP)(h.xv.Display).withConfig({
                    componentId: "sc-2d274eb4-0"
                })($e()),
                Ye = l(52050),
                Je = l(98624),
                en = l(81480),
                nn = l(33181),
                ln = l(15012),
                an = l(58578),
                tn = l(18167),
                rn = l(3405),
                on = l(96053);

            function sn() {
                var e = (0, a.Z)(["\n  align-items: flex-start;\n  align-self: center;\n"]);
                return sn = function() {
                    return e
                }, e
            }

            function dn() {
                var e = (0, a.Z)(["\n  color: inherit;\n\n  :hover {\n    color: inherit;\n  }\n"]);
                return dn = function() {
                    return e
                }, e
            }

            function cn() {
                var e = (0, a.Z)(["\n  ", "\n  border: 2px solid ", ";\n  border-radius: ", ';\n  flex: none;\n  overflow: hidden;\n  position: relative;\n\n  &::after {\n    display: block;\n    content: "";\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    border: 1px solid rgba(0, 0, 0, 0.1);\n    border-radius: ', ";\n  }\n"]);
                return cn = function() {
                    return e
                }, e
            }
            var un = function(e) {
                    var n = e.collection,
                        a = e.subtitle,
                        o = e.collectionCellMaxWidth,
                        s = (0, y.q)("statsV2"),
                        d = (0, r.useFragment)(l(4141), n),
                        c = (0, b.Z)("(min-width: ".concat(p.AV.lg, "px)"), !1),
                        g = (0, i.useMemo)((function() {
                            return c ? o - 64 - 8 - 24 : o - 48 - 8 - 10
                        }), [c, o]);
                    if (!d) return null;
                    var m = d.name,
                        x = d.isVerified,
                        f = (0, t.jsxs)(t.Fragment, {
                            children: [(0, t.jsx)(p.pU, {
                                greaterThanOrEqual: "md",
                                children: (0, t.jsx)(h.xv.Body, {
                                    size: "medium",
                                    weight: "semibold",
                                    children: (0, t.jsxs)(u.k, {
                                        alignItems: "center",
                                        maxWidth: "".concat(g, "px"),
                                        children: [(0, t.jsx)(Le.n, {
                                            children: m
                                        }), x && (0, t.jsx)(_e.O, {
                                            marginLeft: "4px",
                                            verticalAlign: "middle",
                                            children: (0, t.jsx)(Be.S, {
                                                size: "small"
                                            })
                                        })]
                                    })
                                })
                            }), (0, t.jsx)(p.pU, {
                                lessThan: "md",
                                children: (0, t.jsx)(h.xv.Body, {
                                    size: "small",
                                    weight: "semibold",
                                    children: (0, t.jsxs)(u.k, {
                                        alignItems: "center",
                                        maxWidth: "".concat(g, "px"),
                                        children: [(0, t.jsx)(Le.n, {
                                            children: m
                                        }), x && (0, t.jsx)(_e.O, {
                                            marginLeft: "4px",
                                            verticalAlign: "middle",
                                            children: (0, t.jsx)(Be.S, {
                                                size: "small"
                                            })
                                        })]
                                    })
                                })
                            })]
                        }),
                        v = function(e) {
                            return (0, t.jsx)(pn, {
                                style: {
                                    height: e + 8,
                                    width: e + 8
                                },
                                children: (0, t.jsx)(B.E, {
                                    alt: s("stats.homepage.collectionImage.altText", "Collection Image"),
                                    height: e,
                                    layout: "fill",
                                    objectFit: "cover",
                                    sizes: "".concat(e, "px"),
                                    src: d.imageUrl || q.WF
                                })
                            })
                        };
                    return (0, t.jsxs)(t.Fragment, {
                        children: [(0, t.jsx)(p.pU, {
                            lessThan: "sm",
                            children: (0, t.jsxs)(mn, {
                                alignItems: "center",
                                justifyContent: "center",
                                children: [v(48), (0, t.jsxs)(gn, {
                                    paddingLeft: 10,
                                    children: [f, a]
                                })]
                            })
                        }), (0, t.jsx)(p.pU, {
                            between: ["sm", "lg"],
                            children: (0, t.jsxs)(mn, {
                                alignItems: "center",
                                justifyContent: "center",
                                children: [v(48), (0, t.jsxs)(gn, {
                                    paddingLeft: 10,
                                    children: [f, a]
                                })]
                            })
                        }), (0, t.jsx)(p.pU, {
                            greaterThanOrEqual: "lg",
                            children: (0, t.jsxs)(mn, {
                                alignItems: "center",
                                justifyContent: "center",
                                children: [v(64), (0, t.jsxs)(gn, {
                                    paddingLeft: 24,
                                    children: [f, a]
                                })]
                            })
                        })]
                    })
                },
                gn = (0, o.ZP)(le.t).withConfig({
                    componentId: "sc-7ac8f87b-0"
                })(sn()),
                mn = (0, o.ZP)(u.k).withConfig({
                    componentId: "sc-7ac8f87b-1"
                })(dn()),
                pn = o.ZP.div.withConfig({
                    componentId: "sc-7ac8f87b-2"
                })(cn(), (function(e) {
                    return (0, P.Um)({
                        variants: {
                            light: {
                                backgroundColor: e.theme.colors.white
                            },
                            dark: {
                                backgroundColor: e.theme.colors.ink
                            }
                        }
                    })
                }), (function(e) {
                    return e.theme.colors.background
                }), (function(e) {
                    return e.theme.borderRadius.button
                }), (function(e) {
                    return e.theme.borderRadius.default
                })),
                hn = function(e) {
                    var n, l, a = e.activeTab,
                        i = e.collectionCellWidth,
                        r = e.data,
                        o = e.indexStart,
                        s = e.isSmallScreen,
                        d = void 0 !== s && s,
                        c = e.sortBy,
                        g = e.collectionCellMaxWidth,
                        m = (0, y.q)("statsV2"),
                        x = r.windowCollectionStats,
                        f = (0, tn.XJ)(r, c.value),
                        v = x.volume.symbol,
                        b = (0, Ae.bn)(x.volumeChange),
                        j = (0, tn.$S)(b.times(100)),
                        w = b.isGreaterThan(0),
                        S = (null === (n = x.floorPrice) || void 0 === n ? void 0 : n.unit) ? (0, tn.qI)(x.floorPrice.unit) : void 0,
                        C = null === (l = x.floorPrice) || void 0 === l ? void 0 : l.symbol,
                        T = !(void 0 === S || "0" === S),
                        F = (0, t.jsx)(t.Fragment, {
                            children: (0, t.jsxs)(u.k, {
                                alignItems: "center",
                                children: [(0, t.jsx)(p.pU, {
                                    lessThan: "sm",
                                    children: (0, t.jsx)(k.g, {
                                        width: "22px",
                                        children: (0, t.jsx)(h.xv.Body, {
                                            color: "text.subtle",
                                            size: "medium",
                                            weight: "semibold",
                                            children: r.index + o
                                        })
                                    })
                                }), (0, t.jsx)(p.pU, {
                                    greaterThanOrEqual: "sm",
                                    children: (0, t.jsx)(k.g, {
                                        marginRight: "9px",
                                        width: "23px",
                                        children: (0, t.jsx)(h.xv.Heading, {
                                            color: "text.subtle",
                                            size: "small",
                                            children: r.index + o
                                        })
                                    })
                                }), (0, t.jsx)(un, {
                                    collection: r,
                                    collectionCellMaxWidth: g,
                                    subtitle: T && d ? (0, t.jsxs)(u.k, {
                                        alignItems: "center",
                                        marginTop: "2px",
                                        children: [(0, t.jsxs)(p.pU, {
                                            greaterThanOrEqual: "md",
                                            children: [(0, t.jsx)(h.xv.Body, {
                                                color: "text.subtle",
                                                margin: "0",
                                                size: "small",
                                                children: m("stats.row.floor", "Floor:")
                                            }), (0, t.jsxs)(h.xv.Body, {
                                                color: "text.subtle",
                                                margin: "0 0 0 2px",
                                                size: "small",
                                                weight: "semibold",
                                                children: [S, " ", C]
                                            })]
                                        }), (0, t.jsxs)(p.pU, {
                                            lessThan: "md",
                                            children: [(0, t.jsx)(h.xv.Body, {
                                                color: "text.subtle",
                                                margin: "0",
                                                size: "tiny",
                                                children: m("stats.row.floor", "Floor:")
                                            }), (0, t.jsxs)(h.xv.Body, {
                                                color: "text.subtle",
                                                margin: "0 0 0 2px",
                                                size: "tiny",
                                                weight: "semibold",
                                                children: [S, " ", C]
                                            })]
                                        })]
                                    }) : void 0
                                })]
                            })
                        }),
                        P = d ? (0, t.jsx)(u.k, {
                            alignItems: "center",
                            width: "100%",
                            children: (0, t.jsx)(rn.mn.Cell, {
                                justifyContent: "flex-start",
                                width: i,
                                children: F
                            })
                        }) : (0, t.jsx)(rn.mn.Cell, {
                            justifyContent: "flex-start",
                            width: i,
                            children: F
                        }),
                        K = (0, t.jsxs)(rn.mn.Cell, {
                            justifyContent: "flex-end",
                            children: [(0, t.jsx)(p.pU, {
                                greaterThanOrEqual: "md",
                                children: (0, t.jsx)(h.xv.Body, {
                                    size: "medium",
                                    weight: "semibold",
                                    children: (0, t.jsx)(Le.n, {
                                        children: "".concat(f, " ").concat(v)
                                    })
                                })
                            }), (0, t.jsx)(p.pU, {
                                lessThan: "md",
                                children: (0, t.jsx)(h.xv.Body, {
                                    size: "small",
                                    weight: "semibold",
                                    children: (0, t.jsx)(Le.n, {
                                        children: "".concat(f, " ").concat(v)
                                    })
                                })
                            })]
                        }),
                        I = b.isEqualTo(0) ? (0, t.jsx)(h.xv.Body, {
                            color: "text.subtle",
                            margin: "0",
                            size: "tiny",
                            weight: "semibold",
                            children: q.eJ
                        }) : (0, t.jsxs)(rn.mn.Cell, {
                            justifyContent: "flex-end",
                            children: [(0, t.jsx)(p.pU, {
                                greaterThanOrEqual: "md",
                                children: (0, t.jsx)(h.xv.Body, {
                                    color: w ? "seaGrass" : "darkCoral",
                                    size: "small",
                                    weight: "semibold",
                                    children: "".concat(w ? "+" : "").concat(j, "%")
                                })
                            }), (0, t.jsx)(p.pU, {
                                lessThan: "md",
                                children: (0, t.jsx)(h.xv.Body, {
                                    color: w ? "seaGrass" : "darkCoral",
                                    size: "tiny",
                                    weight: "semibold",
                                    children: "".concat(w ? "+" : "").concat(j, "%")
                                })
                            })]
                        }),
                        Z = (0, t.jsx)(rn.mn.Cell, {
                            justifyContent: "flex-end",
                            width: "20%",
                            children: (0, t.jsx)(on._5, {
                                children: (0, t.jsx)(Le.n, {
                                    children: T ? "".concat(S, " ").concat(C) : q.eJ
                                })
                            })
                        }),
                        L = (0, t.jsxs)(le.t, {
                            alignItems: "flex-end",
                            justifyContent: "center",
                            width: "20%",
                            children: [(0, t.jsx)(u.k, {
                                textAlign: "center",
                                children: K
                            }), "top" === a ? (0, t.jsx)(u.k, {
                                marginTop: "2px",
                                textAlign: "center",
                                children: I
                            }) : null]
                        });
                    return (0, t.jsxs)(t.Fragment, {
                        children: [P, !d && Z, L]
                    })
                },
                xn = i.memo((function(e) {
                    var n = e.cellHeight,
                        l = e.renderFloorPrice;
                    return (0, t.jsxs)(u.k, {
                        width: "100%",
                        children: [(0, t.jsx)(rn.mn.Cell, {
                            height: n,
                            width: "50%",
                            children: (0, t.jsx)(w.O, {
                                height: "auto",
                                justifyContent: "center",
                                children: (0, t.jsxs)(w.O.Row, {
                                    alignItems: "center",
                                    children: [(0, t.jsx)(u.k, {
                                        marginRight: "16px",
                                        children: (0, t.jsx)(w.O.Block, {
                                            borderRadius: "16px",
                                            height: "64px",
                                            width: "64px"
                                        })
                                    }), (0, t.jsx)(w.O.Line, {
                                        height: "36px"
                                    })]
                                })
                            })
                        }), (0, t.jsx)(rn.mn.Cell, {
                            width: "10%"
                        }), (0, t.jsx)(rn.mn.Cell, {
                            marginLeft: "2%",
                            width: "18%",
                            children: l && (0, t.jsx)(w.O, {
                                height: "auto",
                                justifyContent: "center",
                                children: (0, t.jsx)(w.O.Row, {
                                    children: (0, t.jsx)(w.O.Line, {
                                        height: "36px"
                                    })
                                })
                            })
                        }), (0, t.jsx)(rn.mn.Cell, {
                            marginLeft: "2%",
                            width: "18%",
                            children: (0, t.jsx)(w.O, {
                                height: "auto",
                                justifyContent: "center",
                                children: (0, t.jsx)(w.O.Row, {
                                    children: (0, t.jsx)(w.O.Line, {
                                        height: "36px"
                                    })
                                })
                            })
                        })]
                    })
                })),
                fn = l(81440),
                yn = {
                    windowCollectionStats: {}
                },
                vn = (0, d.range)(5).map((function() {
                    return yn
                })),
                bn = function() {
                    var e = (0, y.q)("home");
                    return (0, i.useMemo)((function() {
                        return [{
                            id: "trending",
                            label: e("statsTable.trendingTab", "Trending")
                        }, {
                            id: "top",
                            label: e("statsTable.topTab", "Top")
                        }]
                    }), [e])
                },
                kn = l(85034),
                jn = l(70169),
                wn = l(75590),
                Sn = i.memo((function() {
                    return (0, t.jsxs)(X.i, {
                        height: "88px",
                        width: "100%",
                        children: [(0, t.jsx)(wn.a.Avatar, {
                            size: 50
                        }), (0, t.jsx)(wn.a.Content, {
                            children: (0, t.jsx)(wn.a.Title, {})
                        }), (0, t.jsxs)(wn.a.Side, {
                            children: [(0, t.jsx)(wn.a.Title, {}), (0, t.jsx)(wn.a.Description, {})]
                        })]
                    })
                })),
                Cn = l(60387),
                Tn = (0, Cn.V6)("stats table toggle tab"),
                Fn = (0, Cn.V6)("stats table set filter option"),
                Pn = (0, Cn.V6)("stats table click collection row"),
                Kn = (0, Cn.V6)("Home page stats chain filter selected"),
                In = l(10485),
                Zn = function(e, n) {
                    var l = (0, J.v$)(e).length,
                        a = (0, J.v$)(e).map((function(e, n) {
                            return (0, jn.Z)((0, kn.Z)({}, e), {
                                index: n
                            })
                        })).slice(0, l);
                    return n ? a.reverse() : a
                };

            function Ln() {
                var e = (0, a.Z)(["\n  a {\n    width: 100%;\n    padding: 12px 8px;\n  }\n"]);
                return Ln = function() {
                    return e
                }, e
            }

            function Bn() {
                var e = (0, a.Z)(["\n  border-bottom: 0px;\n  padding: ", ";\n"]);
                return Bn = function() {
                    return e
                }, e
            }
            var _n = function(e) {
                    var n = e.activeTab,
                        l = e.data,
                        a = e.indexStart,
                        r = e.isLoading,
                        o = e.sortableHeaders,
                        s = e.sortBy,
                        d = e.tableKey,
                        c = e.rowMaxWidth,
                        u = (0, y.q)("home"),
                        g = {
                            top: In.y8,
                            overflowX: "auto",
                            overflowY: "visible",
                            padding: {
                                _: "8px",
                                xl: "16px"
                            },
                            borderColor: "border"
                        },
                        m = (0, b.Z)((0, en.ip)(p.AV.lg)),
                        x = (0, i.useMemo)((function() {
                            return m ? .6 * (c - 16) - 38 : .8 * (c - 16) - 24
                        }), [m, c]);
                    return (0, t.jsx)(Hn, {
                        children: (0, t.jsx)(rn.mn, {
                            getHref: function(e) {
                                var n = e.data;
                                return n.slug ? (0, ae.vg)(n) : void 0
                            },
                            header: (0, t.jsxs)(t.Fragment, {
                                children: [(0, t.jsx)("div", {
                                    children: (0, t.jsx)(p.pU, {
                                        greaterThanOrEqual: "xl",
                                        children: function(e, n) {
                                            return n && (0, t.jsx)(An, (0, jn.Z)((0, kn.Z)({}, g), {
                                                $padding: "4px 8px 0px 8px",
                                                children: o.map((function(e, n) {
                                                    return (0, t.jsx)(rn.mn.Cell, {
                                                        justifyContent: 0 === n ? "flex-start" : "flex-end",
                                                        width: 0 === n ? "60%" : "20%",
                                                        children: e
                                                    }, n)
                                                }))
                                            }))
                                        }
                                    })
                                }), (0, t.jsx)("div", {
                                    children: (0, t.jsx)(p.pU, {
                                        lessThan: "xl",
                                        children: (0, t.jsxs)(An, {
                                            $padding: "4px 8px 0px 8px",
                                            children: [(0, t.jsx)(rn.mn.Cell, {
                                                justifyContent: "flex-start",
                                                width: "80%",
                                                children: (0, t.jsx)(h.xv.Body, {
                                                    color: "text.subtle",
                                                    size: "tiny",
                                                    weight: "semibold",
                                                    children: u("statsTable.collectionHeader", "COLLECTION")
                                                })
                                            }), (0, t.jsx)(rn.mn.Cell, {
                                                justifyContent: "flex-end",
                                                width: "20%",
                                                children: (0, t.jsx)(h.xv.Body, {
                                                    color: "text.subtle",
                                                    size: "tiny",
                                                    weight: "semibold",
                                                    children: u("statsTable.volumeHeader", "VOLUME")
                                                })
                                            })]
                                        })
                                    })
                                })]
                            }),
                            itemHeightEstimate: 90,
                            items: r || !l ? vn : Zn(l, !1),
                            renderFullRow: function(e) {
                                return r ? (0, t.jsx)(xn, {
                                    cellHeight: "96px",
                                    renderFloorPrice: !0
                                }) : (0, t.jsx)(hn, (0, jn.Z)((0, kn.Z)({}, e), {
                                    activeTab: n,
                                    collectionCellMaxWidth: x,
                                    collectionCellWidth: "".concat(60, "%"),
                                    indexStart: a,
                                    sortBy: s
                                }))
                            },
                            renderMore: function() {
                                return (0, t.jsx)(t.Fragment, {})
                            },
                            renderPrimary: function(e) {
                                return r ? (0, t.jsx)(Sn, {}) : (0, t.jsx)(hn, (0, jn.Z)((0, kn.Z)({}, e), {
                                    activeTab: n,
                                    collectionCellMaxWidth: x,
                                    collectionCellWidth: "".concat(80, "%"),
                                    indexStart: a,
                                    isSmallScreen: !0,
                                    sortBy: s
                                }))
                            },
                            role: "table",
                            showBorder: !1,
                            showInteractiveStyles: !0,
                            onClick: function(e) {
                                return Pn({
                                    activeTab: n,
                                    collectionSlug: e.data.slug,
                                    index: e.index,
                                    sortBy: s.value
                                })
                            }
                        }, d)
                    })
                },
                Hn = (0, o.ZP)(k.g).withConfig({
                    componentId: "sc-a169046c-0"
                })(Ln()),
                An = (0, o.ZP)(rn.mn.HeaderContainer).withConfig({
                    componentId: "sc-a169046c-1"
                })(Bn(), (function(e) {
                    return e.$padding
                })),
                Un = l(48257),
                Vn = l(56656),
                On = l(2385),
                zn = l(22548),
                Dn = l(38684);

            function Nn() {
                var e = (0, a.Z)(["\n  width: 100%;\n"]);
                return Nn = function() {
                    return e
                }, e
            }
            var En = {
                    includeLabelTooltip: !0
                },
                Mn = function(e) {
                    var n = e.currentTab,
                        l = e.sortBy,
                        a = e.chain,
                        r = e.chainOptions,
                        o = e.sortByTimeOptions,
                        d = e.setSortBy,
                        c = e.setCurrentTab,
                        g = e.isLoading,
                        m = e.setChain,
                        x = (0, b.Z)("(min-width: ".concat(p.AV.lg, "px)"), !1),
                        f = (0, b.Z)("(min-width: ".concat(p.AV.xl, "px)"), !1),
                        v = (0, y.q)("home"),
                        j = bn(),
                        w = (0, i.useMemo)((function() {
                            return (0, fn.i)(r)
                        }), [r]),
                        S = v("statsTable.viewAllButton", "View all"),
                        C = "trending" === n,
                        T = (0, tn.VM)(n, l.value, a.value),
                        F = (0, i.useCallback)((function(e) {
                            m(e), Kn({
                                currentTab: n,
                                chain: e.value
                            })
                        }), [m, n]),
                        P = (0, t.jsx)(On.P, {
                            clearable: !1,
                            disabled: C,
                            endEnhancer: (0, t.jsx)(He.B, {
                                children: (0, t.jsx)(Un.J, {
                                    "aria-label": "Show more",
                                    cursor: "pointer",
                                    value: "keyboard_arrow_down"
                                })
                            }),
                            hideOnScroll: !0,
                            maxHeight: "370px",
                            options: o,
                            overrides: {
                                Dropdown: {
                                    props: {
                                        popperOptions: {
                                            strategy: "fixed"
                                        }
                                    }
                                },
                                ContentItem: {
                                    props: {
                                        height: {
                                            _: "36px",
                                            lg: "48px"
                                        },
                                        padding: {
                                            _: "8px 8px 8px 12px",
                                            lg: "8px 16px 8px 24px"
                                        }
                                    }
                                },
                                ContentLabel: {
                                    props: {
                                        marginRight: {
                                            _: "2px",
                                            lg: "4px"
                                        }
                                    }
                                },
                                ContentLabelTitle: {
                                    props: {
                                        fontSize: {
                                            _: "14px",
                                            lg: "16px"
                                        }
                                    }
                                }
                            },
                            readOnly: !0,
                            value: C ? "one_day_volume" : l.value,
                            variant: "item",
                            onSelect: function(e) {
                                e && e !== l && (d(e), Fn({
                                    currentTab: n,
                                    previousFilterOption: l.value,
                                    newFilterOption: e.value
                                }))
                            }
                        });
                    return (0, t.jsxs)(t.Fragment, {
                        children: [(0, t.jsx)(p.pU, {
                            greaterThanOrEqual: "md",
                            children: (0, t.jsx)(zn.n, {
                                baseUrl: "/",
                                currentTab: n,
                                endEnhancer: (0, t.jsx)(u.k, {
                                    alignItems: "center",
                                    flexShrink: 0,
                                    marginBottom: "8px",
                                    children: (0, t.jsxs)(u.k, {
                                        children: [(0, t.jsx)(k.g, {
                                            marginRight: x ? "16px" : "8px",
                                            children: P
                                        }), (0, t.jsx)(k.g, {
                                            marginRight: x ? "16px" : "8px",
                                            children: (0, t.jsx)(Rn, {
                                                options: x ? r : w,
                                                setValue: F,
                                                tabConfig: x ? En : void 0,
                                                testId: "Home--chain-dropdown",
                                                value: a
                                            })
                                        }), (0, t.jsx)(p.pU, {
                                            greaterThanOrEqual: "lg",
                                            children: (0, t.jsx)(L.r, {
                                                eventParams: {
                                                    currentTab: n,
                                                    sortBy: l.value
                                                },
                                                eventSource: "TopTrendingList",
                                                href: T,
                                                children: (0, t.jsx)(Vn.zx, {
                                                    height: "48px",
                                                    size: "small",
                                                    variant: "tertiary",
                                                    children: (0, t.jsx)(h.xv.Body, {
                                                        size: "medium",
                                                        weight: "semibold",
                                                        whiteSpace: "nowrap",
                                                        children: S
                                                    })
                                                })
                                            })
                                        }), (0, t.jsx)(p.pU, {
                                            lessThan: "lg",
                                            children: (0, t.jsx)(L.r, {
                                                eventParams: {
                                                    currentTab: n,
                                                    sortBy: l.value
                                                },
                                                eventSource: "TopTrendingList",
                                                href: T,
                                                children: (0, t.jsx)(Vn.zx, {
                                                    height: "36px",
                                                    size: "xsmall",
                                                    variant: "tertiary",
                                                    children: (0, t.jsx)(h.xv.Body, {
                                                        size: "small",
                                                        weight: "semibold",
                                                        whiteSpace: "nowrap",
                                                        children: S
                                                    })
                                                })
                                            })
                                        })]
                                    })
                                }),
                                handleClick: function(e) {
                                    e && (c(e), Tn({
                                        previousTabName: n,
                                        newTabName: e
                                    }))
                                },
                                isLoading: g,
                                labelVariant: x ? "large" : "small",
                                tabItemPadding: f ? "0px 0px 16px 0px" : "0px 0px 12px 0px",
                                tabs: (0, s.Z)(j),
                                useUpdatedTabLabels: !0
                            })
                        }), (0, t.jsxs)(p.pU, {
                            lessThan: "md",
                            children: [(0, t.jsx)(zn.n, {
                                baseUrl: "/",
                                currentTab: n,
                                endEnhancer: (0, t.jsx)(u.k, {
                                    alignItems: "center",
                                    flexShrink: 0,
                                    marginBottom: "8px",
                                    children: (0, t.jsx)(L.r, {
                                        eventParams: {
                                            currentTab: n,
                                            sortBy: l.value
                                        },
                                        eventSource: "TopTrendingList",
                                        href: T,
                                        children: (0, t.jsx)(Vn.zx, {
                                            height: "36px",
                                            size: "xsmall",
                                            variant: "tertiary",
                                            children: (0, t.jsx)(h.xv.Body, {
                                                size: "small",
                                                weight: "semibold",
                                                whiteSpace: "nowrap",
                                                children: S
                                            })
                                        })
                                    })
                                }),
                                handleClick: function(e) {
                                    e && (c(e), Tn({
                                        previousTabName: n,
                                        newTabName: e
                                    }))
                                },
                                isLoading: g,
                                labelVariant: x ? "large" : "small",
                                tabItemPadding: f ? "0px 0px 16px 0px" : "0px 0px 12px 0px",
                                tabs: (0, s.Z)(j),
                                useUpdatedTabLabels: !0
                            }), (0, t.jsxs)(u.k, {
                                flex: "0 0 100%",
                                flexShrink: 0,
                                paddingBottom: "8px",
                                paddingTop: "16px",
                                children: [(0, t.jsx)(k.g, {
                                    marginRight: "8px",
                                    width: "50%",
                                    children: (0, t.jsx)(Rn, {
                                        options: x ? r : w,
                                        setValue: F,
                                        tabConfig: x ? En : void 0,
                                        testId: "Home--chain-dropdown-small",
                                        value: a
                                    })
                                }), (0, t.jsx)(k.g, {
                                    width: "50%",
                                    children: P
                                })]
                            })]
                        })]
                    })
                },
                Rn = (0, o.ZP)(Dn.V).withConfig({
                    componentId: "sc-4d0dfba2-0"
                })(Nn());

            function Wn() {
                var e = (0, a.Z)([""]);
                return Wn = function() {
                    return e
                }, e
            }
            var qn = function(e) {
                    return e ? [{
                        edges: e.edges.slice(0, 5)
                    }, {
                        edges: e.edges.slice(5)
                    }] : null
                },
                Gn = function() {
                    var e = (0, an.Ys)(),
                        n = (0, fn.S)(),
                        a = (0, i.useState)(e[2]),
                        o = a[0],
                        s = a[1],
                        d = (0, i.useState)(n[0]),
                        c = d[0],
                        u = d[1],
                        g = an.G2.get(o.value),
                        m = an.Ak.get(o.value) || "ONE_DAY",
                        p = (0, r.useLazyLoadQuery)(l(82160), {
                            sortBy: g,
                            chain: "all" === c.value ? null : [(0, tn.JZ)(c)],
                            timeWindow: m
                        });
                    return nn.W6 ? (0, t.jsx)(Qn, {}) : (0, t.jsx)(i.Suspense, {
                        fallback: (0, t.jsx)(Qn, {}),
                        children: (0, t.jsx)($n, {
                            chain: c,
                            chainOptions: n,
                            dataKey: p,
                            setChain: u,
                            setSortBy: s,
                            sortBy: o
                        })
                    })
                },
                $n = function(e) {
                    var n = e.dataKey,
                        a = e.sortBy,
                        o = e.setSortBy,
                        d = e.chain,
                        c = e.setChain,
                        u = e.chainOptions,
                        m = (0, y.q)("home"),
                        h = (0, an.Ys)(),
                        x = (0, Ye.Z)((0, Je.iP)(), 1)[0],
                        f = (0, r.useFragment)(l(97299), n),
                        v = (0, i.useMemo)((function() {
                            return [m("statsTable.collectionHeader", "COLLECTION"), m("statsTable.floorPriceHeader", "FLOOR PRICE"), m("statsTable.volumeHeader", "VOLUME")]
                        }), [m]),
                        k = (0, b.Z)((0, en.ip)(p.AV.lg), !0),
                        j = (0, i.useMemo)((function() {
                            return k ? (x - 32 - 100) / 2 : x - 32
                        }), [k, x]),
                        w = bn(),
                        S = (0, i.useState)(w[0].id),
                        C = S[0],
                        T = S[1],
                        F = (0, ln.Z)((0, i.useMemo)((function() {
                            return (0, s.Z)(v.map((function(e) {
                                return {
                                    header: (0, t.jsx)(Xn, {
                                        children: e
                                    })
                                }
                            })))
                        }), [v]), {
                            index: 1,
                            direction: "desc"
                        }),
                        P = C === w[0].id,
                        K = qn(P ? (null === f || void 0 === f ? void 0 : f.trendingCollections) || null : (null === f || void 0 === f ? void 0 : f.rankings) || null),
                        I = (0, t.jsx)(Mn, {
                            chain: d,
                            chainOptions: u,
                            currentTab: C,
                            isLoading: !K,
                            setChain: c,
                            setCurrentTab: T,
                            setSortBy: o,
                            sortBy: a,
                            sortByTimeOptions: h
                        });
                    return (0, t.jsxs)(t.Fragment, {
                        children: [(0, t.jsx)(p.pU, {
                            greaterThanOrEqual: "lg",
                            children: (0, t.jsxs)(g.r, {
                                "data-testid": "Home--statsTable",
                                children: [(0, t.jsx)(g.r.Item, {
                                    marginBottom: {
                                        _: "16px"
                                    },
                                    xs: 12,
                                    children: I
                                }), (0, t.jsx)(g.r.Item, {
                                    lg: 6,
                                    marginRight: 50,
                                    children: (0, t.jsx)(_n, {
                                        activeTab: C,
                                        data: K ? K[0] : null,
                                        indexStart: 1,
                                        isLoading: !K,
                                        rowMaxWidth: j,
                                        sortBy: a,
                                        sortableHeaders: F
                                    })
                                }), (0, t.jsx)(g.r.Item, {
                                    lg: 6,
                                    marginLeft: 50,
                                    children: (0, t.jsx)(_n, {
                                        activeTab: C,
                                        data: K ? K[1] : null,
                                        indexStart: 6,
                                        isLoading: !K,
                                        rowMaxWidth: j,
                                        sortBy: a,
                                        sortableHeaders: F
                                    })
                                })]
                            })
                        }), (0, t.jsx)(p.pU, {
                            lessThan: "lg",
                            children: (0, t.jsxs)(g.r, {
                                "data-testid": "Home--statsTable",
                                gridRowGap: 8,
                                children: [(0, t.jsx)(g.r.Item, {
                                    xs: 12,
                                    children: I
                                }), (0, t.jsx)(g.r.Item, {
                                    xs: 12,
                                    children: (0, t.jsx)(_n, {
                                        activeTab: C,
                                        data: K ? K[0] : null,
                                        indexStart: 1,
                                        isLoading: !K,
                                        rowMaxWidth: j,
                                        sortBy: a,
                                        sortableHeaders: F
                                    })
                                })]
                            })
                        })]
                    })
                },
                Qn = function() {
                    return (0, t.jsxs)(t.Fragment, {
                        children: [(0, t.jsx)(p.pU, {
                            greaterThanOrEqual: "lg",
                            children: (0, t.jsxs)(g.r, {
                                children: [(0, t.jsx)(g.r.Item, {
                                    xs: 6,
                                    children: (0, t.jsx)(u.k, {
                                        marginBottom: "30px",
                                        marginTop: "20px",
                                        width: "50%",
                                        children: (0, t.jsx)(w.O.Line, {
                                            height: "46px",
                                            width: "100%"
                                        })
                                    })
                                }), (0, t.jsx)(g.r.Item, {
                                    xs: 6,
                                    children: (0, t.jsx)(u.k, {
                                        justifyContent: "end",
                                        marginBottom: "30px",
                                        marginTop: "20px",
                                        children: (0, t.jsx)(w.O.Line, {
                                            height: "46px",
                                            width: "35%"
                                        })
                                    })
                                }), (0, t.jsx)(g.r.Item, {
                                    xs: 6,
                                    children: new Array(5).fill(null).map((function(e, n) {
                                        return (0, t.jsx)(u.k, {
                                            marginRight: "50px",
                                            children: (0, t.jsx)(xn, {
                                                cellHeight: "96px",
                                                renderFloorPrice: !0
                                            })
                                        }, n)
                                    }))
                                }), (0, t.jsx)(g.r.Item, {
                                    xs: 6,
                                    children: new Array(5).fill(null).map((function(e, n) {
                                        return (0, t.jsx)(u.k, {
                                            marginLeft: "50px",
                                            children: (0, t.jsx)(xn, {
                                                cellHeight: "96px",
                                                renderFloorPrice: !0
                                            })
                                        }, n + 5)
                                    }))
                                })]
                            })
                        }), (0, t.jsx)(p.pU, {
                            lessThan: "lg",
                            children: (0, t.jsxs)(g.r, {
                                children: [(0, t.jsx)(g.r.Item, {
                                    xs: 6,
                                    children: (0, t.jsx)(u.k, {
                                        marginBottom: "19px",
                                        marginTop: "18px",
                                        width: "50%",
                                        children: (0, t.jsx)(w.O.Line, {
                                            height: "40px",
                                            width: "100%"
                                        })
                                    })
                                }), (0, t.jsx)(g.r.Item, {
                                    xs: 6,
                                    children: (0, t.jsx)(u.k, {
                                        justifyContent: "end",
                                        marginBottom: "19px",
                                        marginTop: "18px",
                                        children: (0, t.jsx)(w.O.Line, {
                                            height: "40px",
                                            width: "35%"
                                        })
                                    })
                                }), (0, t.jsx)(g.r.Item, {
                                    children: new Array(5).fill(null).map((function(e, n) {
                                        return (0, t.jsx)(u.k, {
                                            children: (0, t.jsx)(xn, {
                                                cellHeight: "79px",
                                                renderFloorPrice: !1
                                            })
                                        }, n)
                                    }))
                                })]
                            })
                        })]
                    })
                },
                Xn = (0, o.ZP)(h.xv).attrs({
                    size: "tiny",
                    weight: "semibold",
                    color: "text.subtle"
                }).withConfig({
                    componentId: "sc-5692c963-0"
                })(Wn());

            function Yn() {
                var e = (0, a.Z)(["\n  margin-bottom: 8px;\n"]);
                return Yn = function() {
                    return e
                }, e
            }

            function Jn() {
                var e = (0, a.Z)(["\n  overflow: hidden;\n  word-break: break-all;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"]);
                return Jn = function() {
                    return e
                }, e
            }

            function el() {
                var e = (0, a.Z)(["\n  overflow: hidden;\n  word-break: break-all;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  padding: 16px;\n"]);
                return el = function() {
                    return e
                }, e
            }
            var nl = function(e) {
                    var n = e.title,
                        l = e.imageUrl,
                        a = e.href;
                    return (0, t.jsxs)(ll, {
                        eventSource: "LearnCenterCarousel",
                        href: a,
                        imageUrl: l,
                        children: [(0, t.jsx)(p.pU, {
                            greaterThanOrEqual: "lg",
                            children: (0, t.jsx)(tl, {
                                as: "h4",
                                size: "small",
                                textAlign: "left",
                                children: n
                            })
                        }), (0, t.jsxs)(p.pU, {
                            lessThan: "lg",
                            children: [(0, t.jsx)(p.pU, {
                                between: ["md", "lg"],
                                children: (0, t.jsx)(k.g, {
                                    paddingBottom: "12px",
                                    paddingLeft: "12px",
                                    paddingTop: "12px",
                                    children: (0, t.jsx)(al, {
                                        size: "medium",
                                        textAlign: "left",
                                        weight: "semibold",
                                        children: n
                                    })
                                })
                            }), (0, t.jsx)(p.pU, {
                                lessThan: "md",
                                children: (0, t.jsx)(k.g, {
                                    paddingBottom: "8px",
                                    paddingLeft: "8px",
                                    paddingTop: "8px",
                                    children: (0, t.jsx)(al, {
                                        size: "small",
                                        textAlign: "left",
                                        weight: "semibold",
                                        children: n
                                    })
                                })
                            })]
                        })]
                    }, n)
                },
                ll = (0, o.ZP)(c.V).withConfig({
                    componentId: "sc-a53a4ffd-0"
                })(Yn()),
                al = (0, o.ZP)(h.xv.Body).withConfig({
                    componentId: "sc-a53a4ffd-1"
                })(Jn()),
                tl = (0, o.ZP)(h.xv.Heading).withConfig({
                    componentId: "sc-a53a4ffd-2"
                })(el()),
                il = {
                    default: {
                        slidesPerView: 1,
                        slidesPerGroup: 1,
                        spaceBetween: 16
                    },
                    sm: {
                        slidesPerView: 2,
                        slidesPerGroup: 1,
                        spaceBetween: 16
                    },
                    md: {
                        slidesPerView: 2,
                        slidesPerGroup: 1,
                        spaceBetween: 16
                    },
                    lg: {
                        slidesPerView: 3,
                        slidesPerGroup: 2,
                        spaceBetween: 16
                    },
                    xl: {
                        slidesPerView: 3,
                        slidesPerGroup: 2,
                        spaceBetween: 16
                    },
                    xxl: {
                        slidesPerView: 3,
                        slidesPerGroup: 2,
                        spaceBetween: 16
                    },
                    xxxl: {
                        slidesPerView: 3,
                        slidesPerGroup: 2,
                        spaceBetween: 16
                    }
                },
                rl = function() {
                    var e = (0, y.q)("home"),
                        n = (0, Z.t)(),
                        l = e("learnCenter.learnMore", "Learn more"),
                        a = function() {
                            var e = (0, y.q)("home");
                            return [{
                                title: e("learnCenter.whatIsNFT", "What is an NFT?"),
                                path: "what-are-nfts",
                                fileName: "what-is-nft.png"
                            }, {
                                title: e("learnCenter.whatIsCryptoWallet", "What is a crypto wallet?"),
                                path: "what-is-crypto-wallet",
                                fileName: "what-is-crypto-wallet.png"
                            }, {
                                title: e("learnCenter.whatAreBlockchainGas", "What are blockchain gas fees?"),
                                path: "nft-gas-fees",
                                fileName: "what-are-gas-fees.png"
                            }, {
                                title: e("learnCenter.howToBuyNFT", "How to buy an NFT"),
                                path: "how-to-buy-nft",
                                fileName: "how-to-buy-nft.png"
                            }, {
                                title: e("learnCenter.howToCreateNFT", "How to create an NFT on OpenSea"),
                                path: "how-to-create-an-nft",
                                fileName: "how-to-create-nft.png"
                            }, {
                                title: e("learnCenter.howToSellNFT", "How to sell an NFT using OpenSea"),
                                path: "how-to-sell-nfts",
                                fileName: "how-to-sell-nft.png"
                            }, {
                                title: e("learnCenter.whatIsMinting", "What is minting?"),
                                path: "what-is-minting-nft",
                                fileName: "what-is-minting.png"
                            }, {
                                title: e("learnCenter.whoIsOpenSea", "Who is OpenSea?"),
                                path: "who-is-opensea",
                                fileName: "who-is-opensea.png"
                            }]
                        }();
                    if (!n) return (0, t.jsx)(C, {});
                    var i = a.map((function(e, n) {
                            var l = e.title,
                                a = e.path,
                                i = e.fileName;
                            return {
                                id: "".concat(n),
                                collection: (0, t.jsx)(nl, {
                                    href: "".concat(q.AU, "/").concat(a),
                                    imageUrl: "".concat("/static/images/learn-center/", "/").concat(i),
                                    title: l
                                })
                            }
                        })),
                        r = e("learnCenter.title", "NFT 101"),
                        o = e("learnCenter.subtitle", "Get comfortable with the basics.");
                    return (0, t.jsx)(k.g, {
                        children: (0, t.jsxs)(g.r.Item, {
                            marginBottom: "16px",
                            children: [(0, t.jsx)(p.pU, {
                                greaterThanOrEqual: "lg",
                                children: (0, t.jsxs)(X.i, {
                                    alignItems: "center",
                                    marginBottom: {
                                        _: "24px",
                                        xxl: "36px"
                                    },
                                    children: [(0, t.jsx)(p.pU, {
                                        greaterThanOrEqual: "xxl",
                                        children: (0, t.jsxs)(le.t, {
                                            children: [(0, t.jsx)(h.xv.Heading, {
                                                size: "large",
                                                children: r
                                            }), (0, t.jsx)(h.xv.Body, {
                                                color: "text.subtle",
                                                marginTop: "4px",
                                                size: "medium",
                                                children: o
                                            })]
                                        })
                                    }), (0, t.jsx)(p.pU, {
                                        between: ["lg", "xxl"],
                                        children: (0, t.jsxs)(le.t, {
                                            children: [(0, t.jsx)(h.xv.Heading, {
                                                size: "medium",
                                                children: r
                                            }), (0, t.jsx)(h.xv.Body, {
                                                color: "text.subtle",
                                                marginTop: "4px",
                                                size: "medium",
                                                children: o
                                            })]
                                        })
                                    }), (0, t.jsx)(L.r, {
                                        eventSource: "HomePageLearnCenterCarousel",
                                        href: q.AU,
                                        children: (0, t.jsx)(Vn.zx, {
                                            height: "48px",
                                            size: "small",
                                            variant: "tertiary",
                                            children: (0, t.jsx)(h.xv.Body, {
                                                size: "medium",
                                                weight: "semibold",
                                                whiteSpace: "nowrap",
                                                children: l
                                            })
                                        })
                                    })]
                                })
                            }), (0, t.jsx)(p.pU, {
                                lessThan: "lg",
                                children: (0, t.jsxs)(X.i, {
                                    alignItems: "center",
                                    marginBottom: {
                                        _: "24px",
                                        xxl: "36px"
                                    },
                                    children: [(0, t.jsxs)(le.t, {
                                        children: [(0, t.jsx)(h.xv.Heading, {
                                            size: "small",
                                            children: r
                                        }), (0, t.jsx)(h.xv.Body, {
                                            color: "text.subtle",
                                            marginTop: "4px",
                                            size: "small",
                                            children: o
                                        })]
                                    }), (0, t.jsx)(L.r, {
                                        eventSource: "HomePageLearnCenterCarousel",
                                        href: q.AU,
                                        children: (0, t.jsx)(Vn.zx, {
                                            height: "36px",
                                            size: "xsmall",
                                            variant: "tertiary",
                                            children: (0, t.jsx)(h.xv.Body, {
                                                size: "small",
                                                weight: "semibold",
                                                whiteSpace: "nowrap",
                                                children: l
                                            })
                                        })
                                    })]
                                })
                            }), (0, t.jsx)(We, {
                                id: "learn-center-carousel",
                                responsiveConfig: il,
                                slides: i,
                                testId: "Home--learn-center-carousel"
                            })]
                        })
                    }, r)
                },
                ol = l(2082),
                sl = l(20889);

            function dl() {
                var e = (0, a.Z)(["\n  border-bottom-left-radius: ", ";\n  border-bottom-right-radius: ", ";\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.04);\n  transition: box-shadow 0.25s 0s ease-in-out;\n  @media (hover: hover) {\n    &:hover {\n      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n    }\n  }\n"]);
                return dl = function() {
                    return e
                }, e
            }

            function cl() {
                var e = (0, a.Z)(["\n  border-top-left-radius: ", ";\n  border-top-right-radius: ", ";\n"]);
                return cl = function() {
                    return e
                }, e
            }

            function ul() {
                var e = (0, a.Z)(["\n  width: 100%;\n  padding: 12px;\n  background-color: ", ";\n  border-bottom-left-radius: ", ";\n  border-bottom-right-radius: ", ";\n  ", ":hover & {\n    ", "\n  }\n"]);
                return ul = function() {
                    return e
                }, e
            }

            function gl() {
                var e = (0, a.Z)(["\n  display: block;\n  margin: 0;\n  overflow: hidden;\n  word-break: break-all;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"]);
                return gl = function() {
                    return e
                }, e
            }
            var ml = function(e) {
                    var n = e.dataKey,
                        a = (0, r.useFragment)(l(42981), n);
                    if (!a) return null;
                    var i = (0, sl.Vh)(a),
                        o = a.displayName,
                        s = a.imagePreviewUrl,
                        d = a.imageUrl,
                        c = a.collection,
                        g = s || d;
                    return g ? (0, t.jsx)(L.r, {
                        href: i,
                        children: (0, t.jsxs)(pl, {
                            children: [(0, t.jsx)(hl, {
                                alt: "Item image",
                                height: 500,
                                src: g,
                                width: 500
                            }), (0, t.jsxs)(xl, {
                                children: [(0, t.jsx)(fl, {
                                    color: "text.heading",
                                    size: "small",
                                    weight: "semibold",
                                    children: o
                                }), (0, t.jsxs)(u.k, {
                                    alignItems: "center",
                                    children: [(0, t.jsx)(fl, {
                                        color: "text.heading",
                                        size: "small",
                                        children: c.name
                                    }), "VERIFIED" === c.verificationStatus && (0, t.jsx)(ne.o, {
                                        showTooltip: !1,
                                        size: "tiny",
                                        verificationStatus: c.verificationStatus
                                    })]
                                })]
                            })]
                        })
                    }) : null
                },
                pl = (0, o.ZP)(le.t).withConfig({
                    componentId: "sc-14255327-0"
                })(dl(), (function(e) {
                    return e.theme.borderRadius.default
                }), (function(e) {
                    return e.theme.borderRadius.default
                })),
                hl = (0, o.ZP)(B.E).withConfig({
                    componentId: "sc-14255327-1"
                })(cl(), (function(e) {
                    return e.theme.borderRadius.default
                }), (function(e) {
                    return e.theme.borderRadius.default
                })),
                xl = (0, o.ZP)(le.t).withConfig({
                    componentId: "sc-14255327-2"
                })(ul(), (function(e) {
                    return e.theme.colors.card
                }), (function(e) {
                    return e.theme.borderRadius.default
                }), (function(e) {
                    return e.theme.borderRadius.default
                }), pl, (function(e) {
                    return (0, P.Um)({
                        variants: {
                            dark: {
                                backgroundColor: e.theme.colors.ash,
                                transition: "background-color 0.25s ease-in-out"
                            }
                        }
                    })
                })),
                fl = (0, o.ZP)(h.xv.Body).withConfig({
                    componentId: "sc-14255327-3"
                })(gl());

            function yl() {
                var e = (0, a.Z)(["\n  flex: 1;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  word-break: break-all;\n"]);
                return yl = function() {
                    return e
                }, e
            }

            function vl() {
                var e = (0, a.Z)(["\n  border-radius: ", ";\n"]);
                return vl = function() {
                    return e
                }, e
            }
            var bl = {
                    default: {
                        slidesPerView: 4,
                        slidesPerGroup: 1,
                        spaceBetween: 10
                    },
                    xs: {
                        slidesPerView: 2,
                        slidesPerGroup: 1,
                        spaceBetween: 10
                    },
                    sm: {
                        slidesPerView: 3,
                        slidesPerGroup: 1,
                        spaceBetween: 10
                    }
                },
                kl = {
                    imageSize: "50px",
                    titleSize: "small",
                    descriptionSize: "small"
                },
                jl = {
                    imageSize: "60px",
                    titleSize: "small",
                    descriptionSize: "small"
                },
                wl = {
                    imageSize: "70px",
                    titleSize: "medium",
                    descriptionSize: "medium"
                },
                Sl = {
                    imageSize: "80px",
                    titleSize: "large",
                    descriptionSize: "medium"
                },
                Cl = function(e) {
                    var n = e.dataKey,
                        a = (0, r.useFragment)(l(82877), n),
                        i = (0, b.Z)("(min-width: ".concat(p.AV.lg, "px)"), !1),
                        o = (0, y.q)("home");
                    if (!a || !a.collectorSpotlightShelves.length || nn.W6) return null;
                    var s = a.collectorSpotlightShelves[0],
                        c = s.name,
                        m = s.description,
                        x = s.accountShelf,
                        f = null !== x && void 0 !== x ? x : {},
                        v = f.shelfAssets,
                        w = f.account;
                    if (!w) return null;
                    var S = w.displayName,
                        C = w.imageUrl,
                        T = w.verificationRequest;
                    if (!v) return null;
                    var F = (0, d.sortBy)(v, ["displayOrder"]),
                        P = "".concat(c, " by ").concat(S),
                        K = (0, ol.E)(w),
                        Z = o("collectorSpotlight.viewProfile", "View profile"),
                        B = function(e) {
                            var n, l, a = e.imageSize,
                                r = e.titleSize,
                                o = e.descriptionSize;
                            return (0, t.jsxs)(u.k, {
                                alignItems: "center",
                                marginBottom: {
                                    _: "24px",
                                    xxl: "36px"
                                },
                                children: [(l = a, (0, t.jsx)(k.g, {
                                    marginRight: "12px",
                                    minWidth: l,
                                    children: (0, t.jsx)(Fl, {
                                        alt: "User Profile Image",
                                        height: l,
                                        src: C,
                                        unoptimized: !0,
                                        width: l
                                    })
                                })), (0, t.jsxs)(Tl, {
                                    children: [(0, t.jsxs)(u.k, {
                                        alignItems: "center",
                                        children: [(0, t.jsx)(h.xv.Heading, {
                                            size: r,
                                            children: P
                                        }), _]
                                    }), m && (0, t.jsx)(h.xv.Body, {
                                        color: "text.subtle",
                                        marginTop: "4px",
                                        size: o,
                                        children: m
                                    })]
                                }), (n = i ? "medium" : "small", K ? (0, t.jsx)(L.r, {
                                    href: K,
                                    target: "_blank",
                                    children: (0, t.jsx)(Vn.zx, {
                                        height: {
                                            _: "36px",
                                            lg: "48px"
                                        },
                                        marginLeft: "20px",
                                        size: "medium" === n ? "small" : "xsmall",
                                        variant: "tertiary",
                                        children: (0, t.jsx)(h.xv.Body, {
                                            size: n,
                                            weight: "semibold",
                                            whiteSpace: "nowrap",
                                            children: Z
                                        })
                                    })
                                }) : null)]
                            })
                        },
                        _ = "APPROVED" === (null === T || void 0 === T ? void 0 : T.status) ? (0, t.jsx)(ne.o, {
                            size: "medium",
                            verificationStatus: "VERIFIED"
                        }) : null;
                    return (0, t.jsxs)(g.r.Item, {
                        marginBottom: "16px",
                        children: [(0, t.jsxs)(p.pU, {
                            lessThan: "xl",
                            children: [(0, t.jsx)(p.pU, {
                                lessThan: "lg",
                                children: B(kl)
                            }), (0, t.jsx)(p.pU, {
                                greaterThanOrEqual: "lg",
                                children: B(jl)
                            })]
                        }), (0, t.jsxs)(p.pU, {
                            greaterThanOrEqual: "xl",
                            children: [(0, t.jsx)(p.pU, {
                                lessThan: "xxl",
                                children: B(wl)
                            }), (0, t.jsx)(p.pU, {
                                greaterThanOrEqual: "xxl",
                                children: B(Sl)
                            })]
                        }), (0, t.jsx)(j.a, {
                            className: "collector_spotlight_swiper",
                            enableArrowControls: !0,
                            enableFreeScroll: !0,
                            enableMousewheel: !0,
                            id: "collector-spotlight-swiper",
                            loop: !0,
                            overrides: I(i),
                            renderSlide: function(e) {
                                return e.item
                            },
                            responsiveConfig: bl,
                            showScrollbar: !1,
                            slides: F.map((function(e) {
                                return {
                                    id: e.id,
                                    item: (0, t.jsx)(k.g, {
                                        marginBottom: "8px",
                                        children: (0, t.jsx)(ml, {
                                            dataKey: e.asset
                                        })
                                    })
                                }
                            }))
                        })]
                    })
                },
                Tl = o.ZP.div.withConfig({
                    componentId: "sc-86f81a0-0"
                })(yl()),
                Fl = (0, o.ZP)(B.E).withConfig({
                    componentId: "sc-86f81a0-1"
                })(vl(), (function(e) {
                    return e.theme.borderRadius.circle
                })),
                Pl = l(74016),
                Kl = l(59271),
                Il = l(47748),
                Zl = {
                    default: {
                        slidesPerView: 1,
                        slidesPerGroup: 1,
                        spaceBetween: 16
                    },
                    sm: {
                        slidesPerView: 2,
                        slidesPerGroup: 1,
                        spaceBetween: 16
                    },
                    md: {
                        slidesPerView: 3,
                        slidesPerGroup: 1,
                        spaceBetween: 16
                    },
                    lg: {
                        slidesPerView: 3,
                        slidesPerGroup: 1,
                        spaceBetween: 16
                    },
                    xl: {
                        slidesPerView: 3,
                        slidesPerGroup: 2,
                        spaceBetween: 16
                    },
                    xxl: {
                        slidesPerView: 3,
                        slidesPerGroup: 2,
                        spaceBetween: 16
                    },
                    xxxl: {
                        slidesPerView: 3,
                        slidesPerGroup: 2,
                        spaceBetween: 16
                    }
                },
                Ll = function(e) {
                    var n = e.category,
                        a = (0, Ye.Z)((0, Il.i)(l(90197), {
                            categories: [n]
                        }), 1)[0],
                        i = (0, Kl.v)().showArrows,
                        r = (0, b.Z)("(min-width: ".concat(p.AV.lg, "px)"), !1),
                        o = (i ? (0, J.v$)(null === a || void 0 === a ? void 0 : a.trendingCollections) : (0, J.v$)(null === a || void 0 === a ? void 0 : a.trendingCollections).slice(0, 6)).map((function(e) {
                            return {
                                id: "".concat(e.id),
                                collection: (0, t.jsx)(ee.O, {
                                    collection: e,
                                    padding: "0 0 16px 0",
                                    requireBannerImage: !0,
                                    showStats: !0
                                }, e.id)
                            }
                        }));
                    return (0, t.jsx)(g.r.Item, {
                        marginBottom: "16px",
                        children: (0, t.jsx)(k.g, {
                            alignSelf: "center",
                            "data-testid": "Home--category-scroller",
                            children: (0, t.jsx)(j.a, {
                                className: "home_category_scroller",
                                enableArrowControls: !0,
                                enableFreeScroll: !0,
                                enableMousewheel: !0,
                                id: "category-scroller",
                                loop: !0,
                                overrides: I(r),
                                renderSlide: function(e) {
                                    return e.collection
                                },
                                responsiveConfig: Zl,
                                showScrollbar: !1,
                                slides: o
                            })
                        })
                    })
                };

            function Bl() {
                var e = (0, a.Z)(["\n  gap: 10px;\n"]);
                return Bl = function() {
                    return e
                }, e
            }
            var _l = function() {
                    return (0, t.jsxs)(k.g, {
                        alignSelf: "center",
                        width: "100%",
                        children: [(0, t.jsx)(p.pU, {
                            greaterThanOrEqual: "md",
                            children: (0, t.jsx)(w.O, {
                                alignItems: "center",
                                children: (0, t.jsx)(Hl, {
                                    width: "100%",
                                    children: (0, s.Z)(Array(3)).map((function(e, n) {
                                        return (0, t.jsx)(w.O.Block, {
                                            borderRadius: "16px",
                                            height: "300px"
                                        }, n)
                                    }))
                                })
                            })
                        }), (0, t.jsx)(p.pU, {
                            between: ["sm", "md"],
                            children: (0, t.jsx)(w.O, {
                                alignItems: "center",
                                children: (0, t.jsx)(Hl, {
                                    width: "100%",
                                    children: (0, s.Z)(Array(2)).map((function(e, n) {
                                        return (0, t.jsx)(w.O.Block, {
                                            borderRadius: "16px",
                                            height: "300px"
                                        }, n)
                                    }))
                                })
                            })
                        }), (0, t.jsx)(p.pU, {
                            lessThan: "sm",
                            children: (0, t.jsx)(w.O, {
                                alignItems: "center",
                                children: (0, t.jsx)(Hl, {
                                    width: "100%",
                                    children: (0, s.Z)(Array(1)).map((function(e, n) {
                                        return (0, t.jsx)(w.O.Block, {
                                            borderRadius: "16px",
                                            height: "300px"
                                        }, n)
                                    }))
                                })
                            })
                        })]
                    })
                },
                Hl = (0, o.ZP)(w.O.Row).withConfig({
                    componentId: "sc-b05349bf-0"
                })(Bl()),
                Al = function() {
                    var e = (0, y.q)("home"),
                        n = (0, x.K)().filter((function(e) {
                            return ["music", "photography-category"].includes(e.slug)
                        }));
                    return (0, t.jsx)(t.Fragment, {
                        children: n.map((function(n) {
                            return (0, t.jsxs)(k.g, {
                                paddingBottom: {
                                    _: "32px",
                                    xl: "40px",
                                    xxl: "50px"
                                },
                                children: [(0, t.jsx)(u.k, {
                                    paddingBottom: "24px",
                                    children: (0, t.jsx)(h.xv.Heading, {
                                        size: "medium",
                                        children: e("trendingCategoryList.title", "Trending in {{ categoryName }}", {
                                            categoryName: n.name
                                        })
                                    })
                                }), (0, t.jsx)(Pl.s, {
                                    fallback: (0, t.jsx)(_l, {}),
                                    children: (0, t.jsx)(Ll, {
                                        category: n.slug
                                    })
                                })]
                            }, n.key)
                        }))
                    })
                },
                Ul = (l(2417), l(20807)),
                Vl = l(34654),
                Ol = l(23297);

            function zl() {
                var e = (0, a.Z)(["\n        background: url(", ") center no-repeat;\n      "]);
                return zl = function() {
                    return e
                }, e
            }

            function Dl() {
                var e = (0, a.Z)(["\n        background: url(", ") center no-repeat;\n      "]);
                return Dl = function() {
                    return e
                }, e
            }

            function Nl() {
                var e = (0, a.Z)(["\n  z-index: 1;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  ", "\n  background-size: cover;\n  &:after {\n    backdrop-filter: blur(20px);\n    ", "\n    background-color: rgba(0, 0, 0, 0.6);\n  }\n"]);
                return Nl = function() {
                    return e
                }, e
            }

            function El() {
                var e = (0, a.Z)(["\n      padding-top: ", "px;\n      padding-bottom: 28px;\n      padding-left: 16px;\n      padding-right: 16px;\n    "]);
                return El = function() {
                    return e
                }, e
            }

            function Ml() {
                var e = (0, a.Z)(["\n      padding-top: ", "px;\n      padding-bottom: 48px;\n      padding-left: 32px;\n      padding-right: 32px;\n    "]);
                return Ml = function() {
                    return e
                }, e
            }

            function Rl() {
                var e = (0, a.Z)(["\n      padding-top: ", "px;\n      padding-bottom: 48px;\n      padding-left: 64px;\n      padding-right: 64px;\n    "]);
                return Rl = function() {
                    return e
                }, e
            }

            function Wl() {
                var e = (0, a.Z)(["\n  position: relative;\n  margin-top: -", ";\n  overflow: hidden;\n  width: 100%;\n  position: relative;\n  ", "\n"]);
                return Wl = function() {
                    return e
                }, e
            }
            var ql = function(e) {
                    var n, a, i, o = e.collectionKey,
                        s = (0, r.useFragment)(l(41619), o);
                    if (!(null === (n = s.drop) || void 0 === n ? void 0 : n.ctaStage)) return null;
                    var d, c, u = s.metadata,
                        g = (0, Ul.tg)(null !== (d = null === u || void 0 === u || null === (a = u.hero) || void 0 === a ? void 0 : a.mobileBannerUrl) && void 0 !== d ? d : "", {
                            width: 1200
                        }),
                        m = (0, Ul.tg)(null !== (c = null === u || void 0 === u || null === (i = u.hero) || void 0 === i ? void 0 : i.desktopBannerUrl) && void 0 !== c ? c : "", {
                            width: 2560
                        });
                    return (0, t.jsxs)($l, {
                        children: [(0, t.jsx)(Gl, {
                            $bgImageLargeDevice: m,
                            $bgImageSmallDevice: g
                        }), (0, t.jsx)(Ol.j, {
                            dataKey: s,
                            eventSource: "PrimaryDropSpotlight"
                        })]
                    })
                },
                Gl = (0, o.ZP)(u.k).withConfig({
                    componentId: "sc-494219cc-0"
                })(Nl(), (function(e) {
                    return (0, p.BC)({
                        xs: (0, o.iv)(zl(), e.$bgImageSmallDevice),
                        md: (0, o.iv)(Dl(), e.$bgImageLargeDevice)
                    })
                }), Vl.tZ),
                $l = (0, o.ZP)(le.t).withConfig({
                    componentId: "sc-494219cc-1"
                })(Wl(), In.y8, (0, p.BC)({
                    xs: (0, o.iv)(El(), In.EE + 8),
                    lg: (0, o.iv)(Ml(), In.EE + 16),
                    xxl: (0, o.iv)(Rl(), In.EE + 16)
                })),
                Ql = l(49507),
                Xl = l(87481),
                Yl = l(47762),
                Jl = l(86676),
                ea = l(13309);

            function na() {
                var e = (0, a.Z)(["\n  html {\n    scroll-behavior: smooth;\n  }\n"]);
                return na = function() {
                    return e
                }, e
            }

            function la() {
                var e = (0, a.Z)(["\n  background-position: 50% 50%;\n  background-size: cover;\n  margin-top: -", ";\n  padding-top: ", ";\n\n  ", "\n\n  @media (min-width: ", "px) {\n    ", "\n  }\n"]);
                return la = function() {
                    return e
                }, e
            }

            function aa() {
                var e = (0, a.Z)(["\n  grid-row-gap: 32px;\n\n  @media (min-width: ", "px) {\n    grid-row-gap: 40px;\n  }\n\n  @media (min-width: ", "px) {\n    grid-row-gap: 50px;\n  }\n"]);
                return aa = function() {
                    return e
                }, e
            }

            function ta() {
                var e = (0, a.Z)(["\n  background-position: 50% 50%;\n  background-size: cover;\n\n  ", "\n"]);
                return ta = function() {
                    return e
                }, e
            }
            var ia = l(8194),
                ra = function(e) {
                    var n, l, a, i = e.data,
                        r = (0, Xl.b)().announcementBanner,
                        o = (0, f.P5)("collector-spotlight"),
                        s = (0, f.hJ)();
                    (0, Yl.n)((function() {
                        (0, Jl.Ry)()
                    }));
                    var d, c = ea.Z.parse({
                            show_delisted_notice: ea.Z.Optional(ea.Z.boolean)
                        }).show_delisted_notice,
                        u = ea.Z.parse({
                            show_ip_rights_delisted_notice: ea.Z.Optional(ea.Z.isIpRightsTakedownDelisted)
                        }).show_ip_rights_delisted_notice,
                        m = null === r || void 0 === r ? void 0 : r.announcementBanner,
                        p = "HOMEPAGE_ONLY" == (null === m || void 0 === m ? void 0 : m.displayMode),
                        h = null === i || void 0 === i || null === (n = i.homePage) || void 0 === n || null === (l = n.heroSpotlights) || void 0 === l || null === (a = l[0]) || void 0 === a ? void 0 : a.dropSpotlight;
                    return (0, t.jsxs)(t.Fragment, {
                        children: [(0, t.jsx)(oa, {}), (0, t.jsxs)($.v, {
                            announcement: p ? m : void 0,
                            blurSearchbar: !!h,
                            fontColorOnTransparentBackground: h ? "white" : void 0,
                            isTransparentNav: !0,
                            children: [(0, t.jsxs)(da, {
                                marginBottom: 40,
                                children: [(null === h || void 0 === h ? void 0 : h.slug) ? (0, t.jsx)(g.r.Item, {
                                    xs: 12,
                                    children: (0, t.jsx)(Ql.M, {
                                        collectionSlug: h.slug,
                                        dataKey: h,
                                        children: (0, t.jsx)(ql, {
                                            collectionKey: h
                                        })
                                    })
                                }) : (0, t.jsx)(sa, {
                                    xs: 12,
                                    children: (0, t.jsx)(Q.W, {
                                        children: (0, t.jsx)(Qe, {
                                            dataKey: null !== i && void 0 !== i ? i : null
                                        })
                                    })
                                }), (0, t.jsx)(g.r.Item, {
                                    xs: 12,
                                    children: (0, t.jsx)(Q.W, {
                                        children: (0, t.jsx)(Gn, {})
                                    })
                                }), (0, t.jsx)(g.r.Item, {
                                    xs: 12,
                                    children: (0, t.jsx)(Q.W, {
                                        children: (0, t.jsx)(ke, {
                                            dataKey: null !== (d = null === i || void 0 === i ? void 0 : i.homePageFeaturedSectionCollections) && void 0 !== d ? d : null
                                        })
                                    })
                                }), o ? (0, t.jsx)(g.r.Item, {
                                    xs: 12,
                                    children: (0, t.jsx)(Q.W, {
                                        children: (0, t.jsx)(Cl, {
                                            dataKey: null !== i && void 0 !== i ? i : null
                                        })
                                    })
                                }) : (0, t.jsx)(t.Fragment, {}), s ? (0, t.jsx)(g.r.Item, {
                                    xs: 12,
                                    children: (0, t.jsx)(Q.W, {
                                        children: (0, t.jsx)(Al, {})
                                    })
                                }) : (0, t.jsx)(t.Fragment, {}), (0, t.jsx)(g.r.Item, {
                                    xs: 12,
                                    children: (0, t.jsx)(Q.W, {
                                        children: (0, t.jsx)(rl, {})
                                    })
                                }), s ? (0, t.jsx)(ca, {
                                    xs: 12,
                                    children: (0, t.jsx)(Q.W, {
                                        children: (0, t.jsx)(N, {})
                                    })
                                }) : (0, t.jsx)(g.r.Item, {
                                    xs: 12,
                                    children: (0, t.jsx)(Q.W, {
                                        children: (0, t.jsx)(N, {})
                                    })
                                })]
                            }), c && (0, t.jsx)(R.u_, {
                                isOpen: !0,
                                children: (0, t.jsx)(M.e, {
                                    variant: "home",
                                    onClose: function() {
                                        return W.Z.push("/")
                                    }
                                })
                            }), u && (0, t.jsx)(G, {
                                IpRightsTakedownDelistedMode: u
                            })]
                        })]
                    })
                };
            ra.query = ia, ra.cachePolicy = {
                maxAge: 300,
                revalidate: 360
            };
            var oa = (0, o.vJ)(na()),
                sa = (0, o.ZP)(g.r.Item).withConfig({
                    componentId: "sc-eb394150-0"
                })(la(), In.y8, In.y8, (0, P.Um)({
                    variants: {
                        light: {
                            backgroundImage: 'url("/static/images/home-gradient-light-sm.png")'
                        },
                        dark: {
                            backgroundImage: 'url("/static/images/home-gradient-dark-sm.png")'
                        }
                    }
                }), p.AV.sm, (0, P.Um)({
                    variants: {
                        light: {
                            backgroundImage: 'url("/static/images/home-gradient-light.png")'
                        },
                        dark: {
                            backgroundImage: 'url("/static/images/home-gradient-dark.png")'
                        }
                    }
                })),
                da = (0, o.ZP)(g.r).withConfig({
                    componentId: "sc-eb394150-1"
                })(aa(), p.AV.xl, p.AV.xxl),
                ca = (0, o.ZP)(g.r.Item).withConfig({
                    componentId: "sc-eb394150-2"
                })(ta(), (0, P.Um)({
                    variants: {
                        light: {
                            backgroundImage: 'url("/static/images/categories/category-gradient-light.png")'
                        },
                        dark: {
                            backgroundImage: 'url("/static/images/categories/category-gradient-dark.png")'
                        }
                    }
                }))
        },
        76190: function(e, n, l) {
            l.d(n, {
                t: function() {
                    return j
                }
            });
            var a = l(85034),
                t = l(70169),
                i = l(31373),
                r = l(19989),
                o = l(24246),
                s = l(27378),
                d = l(74387),
                c = l(47892),
                u = l(96728),
                g = l(81480),
                m = l(56656),
                p = l(16611),
                h = l(90761),
                x = l(28828);

            function f() {
                var e = (0, r.Z)(["\n  display: flex;\n  align-items: center;\n"]);
                return f = function() {
                    return e
                }, e
            }

            function y() {
                var e = (0, r.Z)(["\n  height: ", "px;\n  background: ", ";\n  border: 2px solid\n    ", ";\n  border-radius: ", ";\n\n  ", "\n  ", "\n\n  ", "\n\n  ", "\n  ", "\n  ", "\n  ", "\n"]);
                return y = function() {
                    return e
                }, e
            }
            var v, b = function(e, n) {
                    var l = e.startEnhancer,
                        r = e.endEnhancer,
                        s = e.foregroundColor,
                        c = e.children,
                        u = (0, i.Z)(e, ["startEnhancer", "endEnhancer", "foregroundColor", "children"]),
                        m = !(0, d.Z)((0, g.ip)(g.ss.large), !1) ? "bold" : "small-bold-h4";
                    return (0, o.jsx)(w, (0, t.Z)((0, a.Z)({
                        foregroundColor: s,
                        ref: n,
                        variant: "secondary"
                    }, u), {
                        children: (0, o.jsxs)(k, {
                            as: "span",
                            color: s,
                            variant: m,
                            children: [l, c, r]
                        })
                    }))
                },
                k = (0, c.ZP)(p.WX).withConfig({
                    componentId: "sc-e120eff9-0"
                })(f()),
                j = (0, s.forwardRef)(b),
                w = (0, c.ZP)(m.zx).withConfig({
                    componentId: "sc-e120eff9-1"
                })(y(), x.Wb, (function(e) {
                    return e.theme.colors.background
                }), (function(e) {
                    return null !== (v = e.foregroundColor) && void 0 !== v ? v : e.theme.colors.border
                }), (function(e) {
                    return e.theme.borderRadius.button
                }), u.borderRadius, u.boxShadow, (function(e) {
                    return (0, h.Um)({
                        variants: {
                            light: {
                                ":hover:not([disabled]),:active:not([disabled]):active:not([disabled]),:focus:not([disabled]):focus:not([disabled])": {
                                    borderColor: e.theme.colors.fog,
                                    borderWidth: "2px"
                                }
                            },
                            dark: {
                                background: e.theme.colors.oil
                            }
                        }
                    })
                }), u.width, u.height, u.background, u.border)
        },
        90197: function(e, n, l) {
            l.r(n);
            var a = function() {
                var e = [{
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "categories"
                    }],
                    n = [{
                        kind: "Variable",
                        name: "categories",
                        variableName: "categories"
                    }, {
                        kind: "Literal",
                        name: "first",
                        value: 7
                    }],
                    l = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "id",
                        storageKey: null
                    };
                return {
                    fragment: {
                        argumentDefinitions: e,
                        kind: "Fragment",
                        metadata: null,
                        name: "CategoryScrollerQuery",
                        selections: [{
                            alias: null,
                            args: n,
                            concreteType: "CollectionTypeConnection",
                            kind: "LinkedField",
                            name: "trendingCollections",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: null,
                                concreteType: "CollectionTypeEdge",
                                kind: "LinkedField",
                                name: "edges",
                                plural: !0,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    concreteType: "CollectionType",
                                    kind: "LinkedField",
                                    name: "node",
                                    plural: !1,
                                    selections: [l, {
                                        args: [{
                                            kind: "Literal",
                                            name: "showContextMenu",
                                            value: !1
                                        }, {
                                            kind: "Literal",
                                            name: "showStats",
                                            value: !0
                                        }],
                                        kind: "FragmentSpread",
                                        name: "GlobalCollectionCard_data"
                                    }],
                                    storageKey: null
                                }],
                                storageKey: null
                            }],
                            storageKey: null
                        }],
                        type: "Query",
                        abstractKey: null
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: e,
                        kind: "Operation",
                        name: "CategoryScrollerQuery",
                        selections: [{
                            alias: null,
                            args: n,
                            concreteType: "CollectionTypeConnection",
                            kind: "LinkedField",
                            name: "trendingCollections",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: null,
                                concreteType: "CollectionTypeEdge",
                                kind: "LinkedField",
                                name: "edges",
                                plural: !0,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    concreteType: "CollectionType",
                                    kind: "LinkedField",
                                    name: "node",
                                    plural: !1,
                                    selections: [l, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "logo",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "banner",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "name",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "verificationStatus",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        concreteType: "CollectionStatsV2Type",
                                        kind: "LinkedField",
                                        name: "statsV2",
                                        plural: !1,
                                        selections: [{
                                            alias: null,
                                            args: null,
                                            concreteType: "PriceType",
                                            kind: "LinkedField",
                                            name: "oneDayVolume",
                                            plural: !1,
                                            selections: [{
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "eth",
                                                storageKey: null
                                            }, {
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "symbol",
                                                storageKey: null
                                            }],
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "oneDayChange",
                                            storageKey: null
                                        }],
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "slug",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "isCategory",
                                        storageKey: null
                                    }],
                                    storageKey: null
                                }],
                                storageKey: null
                            }],
                            storageKey: null
                        }]
                    },
                    params: {
                        cacheID: "fbf52856b5a2cb005b37d95a12e1258d",
                        id: null,
                        metadata: {},
                        name: "CategoryScrollerQuery",
                        operationKind: "query",
                        text: "query CategoryScrollerQuery(\n  $categories: [CategorySlug!]\n) {\n  trendingCollections(first: 7, categories: $categories) {\n    edges {\n      node {\n        id\n        ...GlobalCollectionCard_data_4B1Ueq\n      }\n    }\n  }\n}\n\nfragment GlobalCollectionCard_data_4B1Ueq on CollectionType {\n  logo\n  banner\n  name\n  verificationStatus\n  ...GlobalStatsSubtitle_data\n  ...collection_url\n}\n\nfragment GlobalStatsSubtitle_data on CollectionType {\n  statsV2 {\n    oneDayVolume {\n      eth\n      symbol\n    }\n    oneDayChange\n  }\n}\n\nfragment collection_url on CollectionType {\n  slug\n  isCategory\n}\n"
                    }
                }
            }();
            a.hash = "5761fb519858b211789c4e44fa81648b", n.default = a
        },
        76122: function(e, n, l) {
            l.r(n);
            var a = function() {
                var e = {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "slug",
                    storageKey: null
                };
                return {
                    argumentDefinitions: [],
                    kind: "Fragment",
                    metadata: null,
                    name: "HeaderCollectionItem_data",
                    selections: [{
                        alias: null,
                        args: null,
                        concreteType: "CollectionType",
                        kind: "LinkedField",
                        name: "collection",
                        plural: !1,
                        selections: [e, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "name",
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "logo",
                            storageKey: null
                        }, {
                            kind: "InlineDataFragmentSpread",
                            name: "collection_url",
                            selections: [e, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "isCategory",
                                storageKey: null
                            }],
                            args: null,
                            argumentDefinitions: []
                        }, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "verificationStatus",
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            concreteType: "CollectionStatsV2Type",
                            kind: "LinkedField",
                            name: "statsV2",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: null,
                                concreteType: "PriceType",
                                kind: "LinkedField",
                                name: "floorPrice",
                                plural: !1,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "unit",
                                    storageKey: null
                                }],
                                storageKey: null
                            }],
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            concreteType: "PaymentAssetType",
                            kind: "LinkedField",
                            name: "nativePaymentAsset",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: null,
                                concreteType: "AssetType",
                                kind: "LinkedField",
                                name: "asset",
                                plural: !1,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "symbol",
                                    storageKey: null
                                }],
                                storageKey: null
                            }],
                            storageKey: null
                        }],
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "shortDescription",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "overrideUrl",
                        storageKey: null
                    }],
                    type: "HomePageHeaderCarouselType",
                    abstractKey: null
                }
            }();
            a.hash = "687760955ec9668dda2e162ac49e4e34", n.default = a
        },
        42981: function(e, n, l) {
            l.r(n);
            var a = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "HomePageCollectorSpotlightItemCard_data",
                selections: [{
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "displayName",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "imagePreviewUrl",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "imageUrl",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    concreteType: "CollectionType",
                    kind: "LinkedField",
                    name: "collection",
                    plural: !1,
                    selections: [{
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "verificationStatus",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "name",
                        storageKey: null
                    }],
                    storageKey: null
                }, {
                    kind: "InlineDataFragmentSpread",
                    name: "asset_url",
                    selections: [{
                        alias: null,
                        args: null,
                        concreteType: "AssetContractType",
                        kind: "LinkedField",
                        name: "assetContract",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "address",
                            storageKey: null
                        }],
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "tokenId",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        concreteType: "ChainType",
                        kind: "LinkedField",
                        name: "chain",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "identifier",
                            storageKey: null
                        }],
                        storageKey: null
                    }],
                    args: null,
                    argumentDefinitions: []
                }],
                type: "AssetType",
                abstractKey: null,
                hash: "b53c2e89b57fc8d8d5e90e7211ca0a8d"
            };
            n.default = a
        },
        82877: function(e, n, l) {
            l.r(n);
            var a = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "HomePageCollectorSpotlightShelves_data",
                selections: [{
                    alias: null,
                    args: null,
                    concreteType: "CollectorSpotlightShelfType",
                    kind: "LinkedField",
                    name: "collectorSpotlightShelves",
                    plural: !0,
                    selections: [{
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "name",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "description",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        concreteType: "AccountShelfType",
                        kind: "LinkedField",
                        name: "accountShelf",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: null,
                            concreteType: "AccountShelfAssetType",
                            kind: "LinkedField",
                            name: "shelfAssets",
                            plural: !0,
                            selections: [{
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "id",
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "displayOrder",
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                concreteType: "AssetType",
                                kind: "LinkedField",
                                name: "asset",
                                plural: !1,
                                selections: [{
                                    args: null,
                                    kind: "FragmentSpread",
                                    name: "HomePageCollectorSpotlightItemCard_data"
                                }],
                                storageKey: null
                            }],
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            concreteType: "AccountType",
                            kind: "LinkedField",
                            name: "account",
                            plural: !1,
                            selections: [{
                                kind: "InlineDataFragmentSpread",
                                name: "accounts_url",
                                selections: [{
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "address",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    concreteType: "UserType",
                                    kind: "LinkedField",
                                    name: "user",
                                    plural: !1,
                                    selections: [{
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "publicUsername",
                                        storageKey: null
                                    }],
                                    storageKey: null
                                }],
                                args: null,
                                argumentDefinitions: []
                            }, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "displayName",
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "imageUrl",
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                concreteType: "AccountVerificationRequestType",
                                kind: "LinkedField",
                                name: "verificationRequest",
                                plural: !1,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "status",
                                    storageKey: null
                                }],
                                storageKey: null
                            }],
                            storageKey: null
                        }],
                        storageKey: null
                    }],
                    storageKey: null
                }],
                type: "Query",
                abstractKey: null,
                hash: "950a320c12c1845d1d4825bfa8874c34"
            };
            n.default = a
        },
        20878: function(e, n, l) {
            l.r(n);
            var a = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "HomePageFeaturedCollectionCard_data",
                selections: [{
                    alias: null,
                    args: null,
                    concreteType: "HomePageFeaturedSectionType",
                    kind: "LinkedField",
                    name: "section",
                    plural: !1,
                    selections: [{
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "title",
                        storageKey: null
                    }],
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    concreteType: "CollectionType",
                    kind: "LinkedField",
                    name: "collection",
                    plural: !1,
                    selections: [{
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "logo",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "banner",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "name",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "verificationStatus",
                        storageKey: null
                    }, {
                        kind: "InlineDataFragmentSpread",
                        name: "collection_url",
                        selections: [{
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "slug",
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "isCategory",
                            storageKey: null
                        }],
                        args: null,
                        argumentDefinitions: []
                    }, {
                        args: [{
                            kind: "Literal",
                            name: "showStats",
                            value: !1
                        }],
                        kind: "FragmentSpread",
                        name: "GlobalCollectionCard_data"
                    }],
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "collectionSubtitle",
                    storageKey: null
                }],
                type: "HomePageFeaturedSectionCollectionType",
                abstractKey: null,
                hash: "ee9ba5eba69ee39d2f09cc7fcfd727ea"
            };
            n.default = a
        },
        49663: function(e, n, l) {
            l.r(n);
            var a = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: {
                    plural: !0
                },
                name: "HomePageFeaturedCollections_data",
                selections: [{
                    alias: null,
                    args: null,
                    concreteType: "HomePageFeaturedSectionType",
                    kind: "LinkedField",
                    name: "section",
                    plural: !1,
                    selections: [{
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "title",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "titleUrl",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "relayId",
                        storageKey: null
                    }],
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    concreteType: "CollectionType",
                    kind: "LinkedField",
                    name: "collection",
                    plural: !1,
                    selections: [{
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "slug",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "logo",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "banner",
                        storageKey: null
                    }],
                    storageKey: null
                }, {
                    args: null,
                    kind: "FragmentSpread",
                    name: "HomePageFeaturedCollectionCard_data"
                }],
                type: "HomePageFeaturedSectionCollectionType",
                abstractKey: null,
                hash: "c4d03e0f73ee651e11107f0e877a4780"
            };
            n.default = a
        },
        95969: function(e, n, l) {
            l.r(n);
            var a = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: {
                    plural: !0
                },
                name: "HomePageHeaderCarousel_data",
                selections: [{
                    alias: null,
                    args: null,
                    concreteType: "CollectionType",
                    kind: "LinkedField",
                    name: "collection",
                    plural: !1,
                    selections: [{
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "name",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "logo",
                        storageKey: null
                    }],
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "overrideUrl",
                    storageKey: null
                }, {
                    args: null,
                    kind: "FragmentSpread",
                    name: "HeaderCollectionItem_data"
                }],
                type: "HomePageHeaderCarouselType",
                abstractKey: null,
                hash: "0eb0dbf315e73ef340fd9d492ea45099"
            };
            n.default = a
        },
        81419: function(e, n, l) {
            l.r(n);
            var a = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "HomePageHeader_data",
                selections: [{
                    alias: null,
                    args: null,
                    concreteType: "HomePageHeaderCarouselType",
                    kind: "LinkedField",
                    name: "homePageHeaderCarousel",
                    plural: !0,
                    selections: [{
                        args: null,
                        kind: "FragmentSpread",
                        name: "HomePageHeaderCarousel_data"
                    }],
                    storageKey: null
                }],
                type: "Query",
                abstractKey: null,
                hash: "a5f7196dfc136feed90a95f493ce4cc3"
            };
            n.default = a
        },
        8194: function(e, n, l) {
            l.r(n);
            var a = function() {
                var e = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "slug",
                        storageKey: null
                    },
                    n = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "__typename",
                        storageKey: null
                    },
                    l = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "id",
                        storageKey: null
                    },
                    a = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "logo",
                        storageKey: null
                    },
                    t = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "name",
                        storageKey: null
                    },
                    i = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "verificationStatus",
                        storageKey: null
                    },
                    r = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "isCategory",
                        storageKey: null
                    },
                    o = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "startTime",
                        storageKey: null
                    },
                    s = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "unit",
                        storageKey: null
                    },
                    d = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "symbol",
                        storageKey: null
                    },
                    c = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "displayName",
                        storageKey: null
                    },
                    u = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "address",
                        storageKey: null
                    },
                    g = {
                        alias: null,
                        args: null,
                        concreteType: "UserType",
                        kind: "LinkedField",
                        name: "user",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "publicUsername",
                            storageKey: null
                        }, l],
                        storageKey: null
                    },
                    m = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "imageUrl",
                        storageKey: null
                    };
                return {
                    fragment: {
                        argumentDefinitions: [],
                        kind: "Fragment",
                        metadata: null,
                        name: "HomePageQuery",
                        selections: [{
                            alias: null,
                            args: null,
                            concreteType: "HomePageFeaturedSectionCollectionType",
                            kind: "LinkedField",
                            name: "homePageFeaturedSectionCollections",
                            plural: !0,
                            selections: [{
                                args: null,
                                kind: "FragmentSpread",
                                name: "HomePageFeaturedCollections_data"
                            }],
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            concreteType: "HomepageType",
                            kind: "LinkedField",
                            name: "homePage",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: null,
                                concreteType: "HeroSpotlightType",
                                kind: "LinkedField",
                                name: "heroSpotlights",
                                plural: !0,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    concreteType: "CollectionType",
                                    kind: "LinkedField",
                                    name: "dropSpotlight",
                                    plural: !1,
                                    selections: [e, n, {
                                        args: null,
                                        kind: "FragmentSpread",
                                        name: "PrimaryDropSpotlight_data"
                                    }, {
                                        args: null,
                                        kind: "FragmentSpread",
                                        name: "PrimaryDropProviderMintProgress_data"
                                    }],
                                    storageKey: null
                                }],
                                storageKey: null
                            }],
                            storageKey: null
                        }, {
                            args: null,
                            kind: "FragmentSpread",
                            name: "HomePageHeader_data"
                        }, {
                            args: null,
                            kind: "FragmentSpread",
                            name: "HomePageCollectorSpotlightShelves_data"
                        }],
                        type: "Query",
                        abstractKey: null
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: [],
                        kind: "Operation",
                        name: "HomePageQuery",
                        selections: [{
                            alias: null,
                            args: null,
                            concreteType: "HomePageFeaturedSectionCollectionType",
                            kind: "LinkedField",
                            name: "homePageFeaturedSectionCollections",
                            plural: !0,
                            selections: [{
                                alias: null,
                                args: null,
                                concreteType: "HomePageFeaturedSectionType",
                                kind: "LinkedField",
                                name: "section",
                                plural: !1,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "title",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "titleUrl",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "relayId",
                                    storageKey: null
                                }, l],
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                concreteType: "CollectionType",
                                kind: "LinkedField",
                                name: "collection",
                                plural: !1,
                                selections: [e, a, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "banner",
                                    storageKey: null
                                }, l, t, i, r],
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "collectionSubtitle",
                                storageKey: null
                            }, l],
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            concreteType: "HomepageType",
                            kind: "LinkedField",
                            name: "homePage",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: null,
                                concreteType: "HeroSpotlightType",
                                kind: "LinkedField",
                                name: "heroSpotlights",
                                plural: !0,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    concreteType: "CollectionType",
                                    kind: "LinkedField",
                                    name: "dropSpotlight",
                                    plural: !1,
                                    selections: [e, n, {
                                        alias: null,
                                        args: null,
                                        concreteType: "DropType",
                                        kind: "LinkedField",
                                        name: "drop",
                                        plural: !1,
                                        selections: [{
                                            alias: null,
                                            args: null,
                                            concreteType: "DropStageType",
                                            kind: "LinkedField",
                                            name: "stages",
                                            plural: !0,
                                            selections: [o, {
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "endTime",
                                                storageKey: null
                                            }, l, {
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "stageType",
                                                storageKey: null
                                            }, {
                                                alias: null,
                                                args: null,
                                                concreteType: "PriceType",
                                                kind: "LinkedField",
                                                name: "priceType",
                                                plural: !1,
                                                selections: [s, d],
                                                storageKey: null
                                            }],
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            concreteType: "DropChainDataType",
                                            kind: "LinkedField",
                                            name: "chainData",
                                            plural: !1,
                                            selections: [{
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "mintedItemCount",
                                                storageKey: null
                                            }, {
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "totalItemCount",
                                                storageKey: null
                                            }],
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            concreteType: "DropStageType",
                                            kind: "LinkedField",
                                            name: "ctaStage",
                                            plural: !1,
                                            selections: [o, l, n],
                                            storageKey: null
                                        }, l, t],
                                        storageKey: null
                                    }, r, i, {
                                        alias: null,
                                        args: null,
                                        concreteType: "AccountType",
                                        kind: "LinkedField",
                                        name: "owner",
                                        plural: !1,
                                        selections: [{
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "config",
                                            storageKey: null
                                        }, c, u, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "isCompromised",
                                            storageKey: null
                                        }, g, m, l],
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        concreteType: "CollectionMetadataType",
                                        kind: "LinkedField",
                                        name: "metadata",
                                        plural: !1,
                                        selections: [{
                                            alias: null,
                                            args: null,
                                            concreteType: "HeroMetadataType",
                                            kind: "LinkedField",
                                            name: "hero",
                                            plural: !1,
                                            selections: [{
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "heroVideoUrl",
                                                storageKey: null
                                            }, {
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "mobileBannerUrl",
                                                storageKey: null
                                            }, {
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "desktopBannerUrl",
                                                storageKey: null
                                            }, {
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "partnerLogoUrl",
                                                storageKey: null
                                            }],
                                            storageKey: null
                                        }],
                                        storageKey: null
                                    }, l],
                                    storageKey: null
                                }],
                                storageKey: null
                            }, l],
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            concreteType: "HomePageHeaderCarouselType",
                            kind: "LinkedField",
                            name: "homePageHeaderCarousel",
                            plural: !0,
                            selections: [{
                                alias: null,
                                args: null,
                                concreteType: "CollectionType",
                                kind: "LinkedField",
                                name: "collection",
                                plural: !1,
                                selections: [t, a, l, e, r, i, {
                                    alias: null,
                                    args: null,
                                    concreteType: "CollectionStatsV2Type",
                                    kind: "LinkedField",
                                    name: "statsV2",
                                    plural: !1,
                                    selections: [{
                                        alias: null,
                                        args: null,
                                        concreteType: "PriceType",
                                        kind: "LinkedField",
                                        name: "floorPrice",
                                        plural: !1,
                                        selections: [s],
                                        storageKey: null
                                    }],
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    concreteType: "PaymentAssetType",
                                    kind: "LinkedField",
                                    name: "nativePaymentAsset",
                                    plural: !1,
                                    selections: [{
                                        alias: null,
                                        args: null,
                                        concreteType: "AssetType",
                                        kind: "LinkedField",
                                        name: "asset",
                                        plural: !1,
                                        selections: [d, l],
                                        storageKey: null
                                    }, l],
                                    storageKey: null
                                }],
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "overrideUrl",
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "shortDescription",
                                storageKey: null
                            }, l],
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            concreteType: "CollectorSpotlightShelfType",
                            kind: "LinkedField",
                            name: "collectorSpotlightShelves",
                            plural: !0,
                            selections: [t, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "description",
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                concreteType: "AccountShelfType",
                                kind: "LinkedField",
                                name: "accountShelf",
                                plural: !1,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    concreteType: "AccountShelfAssetType",
                                    kind: "LinkedField",
                                    name: "shelfAssets",
                                    plural: !0,
                                    selections: [l, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "displayOrder",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        concreteType: "AssetType",
                                        kind: "LinkedField",
                                        name: "asset",
                                        plural: !1,
                                        selections: [c, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "imagePreviewUrl",
                                            storageKey: null
                                        }, m, {
                                            alias: null,
                                            args: null,
                                            concreteType: "CollectionType",
                                            kind: "LinkedField",
                                            name: "collection",
                                            plural: !1,
                                            selections: [i, t, l],
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            concreteType: "AssetContractType",
                                            kind: "LinkedField",
                                            name: "assetContract",
                                            plural: !1,
                                            selections: [u, l],
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "tokenId",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            concreteType: "ChainType",
                                            kind: "LinkedField",
                                            name: "chain",
                                            plural: !1,
                                            selections: [{
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "identifier",
                                                storageKey: null
                                            }],
                                            storageKey: null
                                        }, l],
                                        storageKey: null
                                    }],
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    concreteType: "AccountType",
                                    kind: "LinkedField",
                                    name: "account",
                                    plural: !1,
                                    selections: [u, g, c, m, {
                                        alias: null,
                                        args: null,
                                        concreteType: "AccountVerificationRequestType",
                                        kind: "LinkedField",
                                        name: "verificationRequest",
                                        plural: !1,
                                        selections: [{
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "status",
                                            storageKey: null
                                        }, l],
                                        storageKey: null
                                    }, l],
                                    storageKey: null
                                }, l],
                                storageKey: null
                            }, l],
                            storageKey: null
                        }]
                    },
                    params: {
                        cacheID: "907b535c899b14993ff58b11f5f8d1fa",
                        id: null,
                        metadata: {},
                        name: "HomePageQuery",
                        operationKind: "query",
                        text: "query HomePageQuery {\n  homePageFeaturedSectionCollections {\n    ...HomePageFeaturedCollections_data\n    id\n  }\n  homePage {\n    heroSpotlights {\n      dropSpotlight {\n        slug\n        __typename\n        ...PrimaryDropSpotlight_data\n        ...PrimaryDropProviderMintProgress_data\n        id\n      }\n    }\n    id\n  }\n  ...HomePageHeader_data\n  ...HomePageCollectorSpotlightShelves_data\n}\n\nfragment AccountLink_data on AccountType {\n  address\n  config\n  isCompromised\n  user {\n    publicUsername\n    id\n  }\n  displayName\n  ...ProfileImage_data\n  ...wallet_accountKey\n  ...accounts_url\n}\n\nfragment Banner_data on CollectionType {\n  ...HeroStageText_data\n  ...collection_url\n  drop {\n    ...useShouldShowReminder_data\n    ...useDropState_data\n    name\n    chainData {\n      totalItemCount\n    }\n    stages {\n      stageType\n      startTime\n      priceType {\n        unit\n        symbol\n      }\n      id\n    }\n    id\n  }\n  verificationStatus\n  owner {\n    config\n    displayName\n    ...AccountLink_data\n    id\n  }\n  metadata {\n    hero {\n      ...PrimaryDropsHeroVideo\n      mobileBannerUrl\n      desktopBannerUrl\n      partnerLogoUrl\n      heroVideoUrl\n    }\n  }\n}\n\nfragment GlobalCollectionCard_data_gEcEq on CollectionType {\n  logo\n  banner\n  name\n  verificationStatus\n  ...collection_url\n}\n\nfragment HeaderCollectionItem_data on HomePageHeaderCarouselType {\n  collection {\n    slug\n    name\n    logo\n    ...collection_url\n    verificationStatus\n    statsV2 {\n      floorPrice {\n        unit\n      }\n    }\n    nativePaymentAsset {\n      asset {\n        symbol\n        id\n      }\n      id\n    }\n    id\n  }\n  shortDescription\n  overrideUrl\n}\n\nfragment HeroStageText_data on CollectionType {\n  drop {\n    ...useDropState_data\n    ctaStage {\n      startTime\n      ...StageStartCountdown_stage\n      id\n    }\n    id\n  }\n}\n\nfragment HomePageCollectorSpotlightItemCard_data on AssetType {\n  displayName\n  imagePreviewUrl\n  imageUrl\n  collection {\n    verificationStatus\n    name\n    id\n  }\n  ...asset_url\n}\n\nfragment HomePageCollectorSpotlightShelves_data on Query {\n  collectorSpotlightShelves {\n    name\n    description\n    accountShelf {\n      shelfAssets {\n        id\n        displayOrder\n        asset {\n          ...HomePageCollectorSpotlightItemCard_data\n          id\n        }\n      }\n      account {\n        ...accounts_url\n        displayName\n        imageUrl\n        verificationRequest {\n          status\n          id\n        }\n        id\n      }\n      id\n    }\n    id\n  }\n}\n\nfragment HomePageFeaturedCollectionCard_data on HomePageFeaturedSectionCollectionType {\n  section {\n    title\n    id\n  }\n  collection {\n    logo\n    banner\n    name\n    verificationStatus\n    ...collection_url\n    ...GlobalCollectionCard_data_gEcEq\n    id\n  }\n  collectionSubtitle\n}\n\nfragment HomePageFeaturedCollections_data on HomePageFeaturedSectionCollectionType {\n  section {\n    title\n    titleUrl\n    relayId\n    id\n  }\n  collection {\n    slug\n    logo\n    banner\n    id\n  }\n  ...HomePageFeaturedCollectionCard_data\n}\n\nfragment HomePageHeaderCarousel_data on HomePageHeaderCarouselType {\n  collection {\n    name\n    logo\n    id\n  }\n  overrideUrl\n  ...HeaderCollectionItem_data\n}\n\nfragment HomePageHeader_data on Query {\n  homePageHeaderCarousel {\n    ...HomePageHeaderCarousel_data\n    id\n  }\n}\n\nfragment PrimaryDropProviderMintProgress_data on CollectionType {\n  drop {\n    chainData {\n      mintedItemCount\n      totalItemCount\n    }\n    id\n  }\n}\n\nfragment PrimaryDropSpotlight_data on CollectionType {\n  ...Banner_data\n  drop {\n    ctaStage {\n      __typename\n      id\n    }\n    id\n  }\n  metadata {\n    hero {\n      desktopBannerUrl\n      mobileBannerUrl\n    }\n  }\n}\n\nfragment PrimaryDropsHeroVideo on HeroMetadataType {\n  heroVideoUrl\n  mobileBannerUrl\n  desktopBannerUrl\n}\n\nfragment ProfileImage_data on AccountType {\n  imageUrl\n}\n\nfragment StageStartCountdown_stage on DropStageType {\n  startTime\n}\n\nfragment accounts_url on AccountType {\n  address\n  user {\n    publicUsername\n    id\n  }\n}\n\nfragment asset_url on AssetType {\n  assetContract {\n    address\n    id\n  }\n  tokenId\n  chain {\n    identifier\n  }\n}\n\nfragment collection_url on CollectionType {\n  slug\n  isCategory\n}\n\nfragment useDropState_data on DropType {\n  stages {\n    startTime\n    endTime\n    id\n  }\n  chainData {\n    mintedItemCount\n    totalItemCount\n  }\n}\n\nfragment useShouldShowReminder_data on DropType {\n  stages {\n    ...useUpcomingStages_data\n    startTime\n    id\n  }\n}\n\nfragment useUpcomingStages_data on DropStageType {\n  startTime\n  endTime\n}\n\nfragment wallet_accountKey on AccountType {\n  address\n}\n"
                    }
                }
            }();
            a.hash = "2066a4760cb1707acc3e8b4fc51745ea", n.default = a
        },
        82160: function(e, n, l) {
            l.r(n);
            var a = function() {
                var e = {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "chain"
                    },
                    n = {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "sortBy"
                    },
                    l = {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "timeWindow"
                    },
                    a = {
                        kind: "Variable",
                        name: "sortBy",
                        variableName: "sortBy"
                    },
                    t = {
                        kind: "Variable",
                        name: "chains",
                        variableName: "chain"
                    },
                    i = {
                        kind: "Literal",
                        name: "first",
                        value: 10
                    },
                    r = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "createdDate",
                        storageKey: null
                    },
                    o = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "name",
                        storageKey: null
                    },
                    s = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "slug",
                        storageKey: null
                    },
                    d = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "logo",
                        storageKey: null
                    },
                    c = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "isVerified",
                        storageKey: null
                    },
                    u = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "imageUrl",
                        storageKey: null
                    },
                    g = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "isCategory",
                        storageKey: null
                    },
                    m = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "unit",
                        storageKey: null
                    },
                    p = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "eth",
                        storageKey: null
                    },
                    h = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "symbol",
                        storageKey: null
                    },
                    x = [{
                        alias: null,
                        args: null,
                        concreteType: "PriceType",
                        kind: "LinkedField",
                        name: "floorPrice",
                        plural: !1,
                        selections: [m, p, h],
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "volumeChange",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        concreteType: "PriceType",
                        kind: "LinkedField",
                        name: "volume",
                        plural: !1,
                        selections: [p, m, h],
                        storageKey: null
                    }],
                    f = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "id",
                        storageKey: null
                    };
                return {
                    fragment: {
                        argumentDefinitions: [e, n, l],
                        kind: "Fragment",
                        metadata: null,
                        name: "HomePageStatsTablesLazyQuery",
                        selections: [{
                            args: [{
                                kind: "Variable",
                                name: "chain",
                                variableName: "chain"
                            }, a, {
                                kind: "Variable",
                                name: "timeWindow",
                                variableName: "timeWindow"
                            }],
                            kind: "FragmentSpread",
                            name: "HomePageStatsTables_data"
                        }],
                        type: "Query",
                        abstractKey: null
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: [n, e, l],
                        kind: "Operation",
                        name: "HomePageStatsTablesLazyQuery",
                        selections: [{
                            alias: null,
                            args: [t, i, a],
                            concreteType: "CollectionTypeConnection",
                            kind: "LinkedField",
                            name: "rankings",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: null,
                                concreteType: "CollectionTypeEdge",
                                kind: "LinkedField",
                                name: "edges",
                                plural: !0,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    concreteType: "CollectionType",
                                    kind: "LinkedField",
                                    name: "node",
                                    plural: !1,
                                    selections: [r, o, s, d, c, u, g, {
                                        alias: null,
                                        args: [{
                                            kind: "Variable",
                                            name: "statsTimeWindow",
                                            variableName: "timeWindow"
                                        }],
                                        concreteType: "WindowCollectionStatsType",
                                        kind: "LinkedField",
                                        name: "windowCollectionStats",
                                        plural: !1,
                                        selections: x,
                                        storageKey: null
                                    }, f],
                                    storageKey: null
                                }],
                                storageKey: null
                            }],
                            storageKey: null
                        }, {
                            alias: null,
                            args: [t, i, {
                                kind: "Literal",
                                name: "topCollectionLimit",
                                value: 500
                            }],
                            concreteType: "CollectionTypeConnection",
                            kind: "LinkedField",
                            name: "trendingCollections",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: null,
                                concreteType: "CollectionTypeEdge",
                                kind: "LinkedField",
                                name: "edges",
                                plural: !0,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    concreteType: "CollectionType",
                                    kind: "LinkedField",
                                    name: "node",
                                    plural: !1,
                                    selections: [r, o, s, d, c, u, g, {
                                        alias: null,
                                        args: [{
                                            kind: "Literal",
                                            name: "statsTimeWindow",
                                            value: "ONE_DAY"
                                        }],
                                        concreteType: "WindowCollectionStatsType",
                                        kind: "LinkedField",
                                        name: "windowCollectionStats",
                                        plural: !1,
                                        selections: x,
                                        storageKey: 'windowCollectionStats(statsTimeWindow:"ONE_DAY")'
                                    }, f],
                                    storageKey: null
                                }],
                                storageKey: null
                            }],
                            storageKey: null
                        }]
                    },
                    params: {
                        cacheID: "01e2ea1b81f393f6ac3ebc294a96d177",
                        id: null,
                        metadata: {},
                        name: "HomePageStatsTablesLazyQuery",
                        operationKind: "query",
                        text: "query HomePageStatsTablesLazyQuery(\n  $sortBy: CollectionSort\n  $chain: [ChainScalar!]\n  $timeWindow: StatsTimeWindow\n) {\n  ...HomePageStatsTables_data_JXQ8m\n}\n\nfragment HomePageStatsTables_data_JXQ8m on Query {\n  rankings(first: 10, sortBy: $sortBy, chains: $chain) {\n    edges {\n      node {\n        createdDate\n        name\n        slug\n        logo\n        isVerified\n        ...StatsV2HomepageCollectionCell_collection\n        ...collection_url\n        windowCollectionStats(statsTimeWindow: $timeWindow) {\n          floorPrice {\n            unit\n            eth\n            symbol\n          }\n          volumeChange\n          volume {\n            eth\n            unit\n            symbol\n          }\n        }\n        id\n      }\n    }\n  }\n  trendingCollections(first: 10, topCollectionLimit: 500, chains: $chain) {\n    edges {\n      node {\n        createdDate\n        name\n        slug\n        logo\n        isVerified\n        ...StatsV2HomepageCollectionCell_collection\n        ...collection_url\n        windowCollectionStats(statsTimeWindow: ONE_DAY) {\n          floorPrice {\n            unit\n            eth\n            symbol\n          }\n          volumeChange\n          volume {\n            eth\n            unit\n            symbol\n          }\n        }\n        id\n      }\n    }\n  }\n}\n\nfragment StatsV2HomepageCollectionCell_collection on CollectionType {\n  name\n  imageUrl\n  isVerified\n}\n\nfragment collection_url on CollectionType {\n  slug\n  isCategory\n}\n"
                    }
                }
            }();
            a.hash = "9b78877eaa2bbe4b183bb7fa0cc3766f", n.default = a
        },
        97299: function(e, n, l) {
            l.r(n);
            var a = function() {
                var e = {
                        kind: "Variable",
                        name: "chains",
                        variableName: "chain"
                    },
                    n = {
                        kind: "Literal",
                        name: "first",
                        value: 10
                    },
                    l = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "createdDate",
                        storageKey: null
                    },
                    a = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "name",
                        storageKey: null
                    },
                    t = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "slug",
                        storageKey: null
                    },
                    i = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "logo",
                        storageKey: null
                    },
                    r = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "isVerified",
                        storageKey: null
                    },
                    o = {
                        args: null,
                        kind: "FragmentSpread",
                        name: "StatsV2HomepageCollectionCell_collection"
                    },
                    s = {
                        kind: "InlineDataFragmentSpread",
                        name: "collection_url",
                        selections: [t, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "isCategory",
                            storageKey: null
                        }],
                        args: null,
                        argumentDefinitions: []
                    },
                    d = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "unit",
                        storageKey: null
                    },
                    c = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "eth",
                        storageKey: null
                    },
                    u = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "symbol",
                        storageKey: null
                    },
                    g = [{
                        alias: null,
                        args: null,
                        concreteType: "PriceType",
                        kind: "LinkedField",
                        name: "floorPrice",
                        plural: !1,
                        selections: [d, c, u],
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "volumeChange",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        concreteType: "PriceType",
                        kind: "LinkedField",
                        name: "volume",
                        plural: !1,
                        selections: [c, d, u],
                        storageKey: null
                    }];
                return {
                    argumentDefinitions: [{
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "chain"
                    }, {
                        defaultValue: "ONE_DAY_VOLUME",
                        kind: "LocalArgument",
                        name: "sortBy"
                    }, {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "timeWindow"
                    }],
                    kind: "Fragment",
                    metadata: null,
                    name: "HomePageStatsTables_data",
                    selections: [{
                        alias: null,
                        args: [e, n, {
                            kind: "Variable",
                            name: "sortBy",
                            variableName: "sortBy"
                        }],
                        concreteType: "CollectionTypeConnection",
                        kind: "LinkedField",
                        name: "rankings",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: null,
                            concreteType: "CollectionTypeEdge",
                            kind: "LinkedField",
                            name: "edges",
                            plural: !0,
                            selections: [{
                                alias: null,
                                args: null,
                                concreteType: "CollectionType",
                                kind: "LinkedField",
                                name: "node",
                                plural: !1,
                                selections: [l, a, t, i, r, o, s, {
                                    alias: null,
                                    args: [{
                                        kind: "Variable",
                                        name: "statsTimeWindow",
                                        variableName: "timeWindow"
                                    }],
                                    concreteType: "WindowCollectionStatsType",
                                    kind: "LinkedField",
                                    name: "windowCollectionStats",
                                    plural: !1,
                                    selections: g,
                                    storageKey: null
                                }],
                                storageKey: null
                            }],
                            storageKey: null
                        }],
                        storageKey: null
                    }, {
                        alias: null,
                        args: [e, n, {
                            kind: "Literal",
                            name: "topCollectionLimit",
                            value: 500
                        }],
                        concreteType: "CollectionTypeConnection",
                        kind: "LinkedField",
                        name: "trendingCollections",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: null,
                            concreteType: "CollectionTypeEdge",
                            kind: "LinkedField",
                            name: "edges",
                            plural: !0,
                            selections: [{
                                alias: null,
                                args: null,
                                concreteType: "CollectionType",
                                kind: "LinkedField",
                                name: "node",
                                plural: !1,
                                selections: [l, a, t, i, r, o, s, {
                                    alias: null,
                                    args: [{
                                        kind: "Literal",
                                        name: "statsTimeWindow",
                                        value: "ONE_DAY"
                                    }],
                                    concreteType: "WindowCollectionStatsType",
                                    kind: "LinkedField",
                                    name: "windowCollectionStats",
                                    plural: !1,
                                    selections: g,
                                    storageKey: 'windowCollectionStats(statsTimeWindow:"ONE_DAY")'
                                }],
                                storageKey: null
                            }],
                            storageKey: null
                        }],
                        storageKey: null
                    }],
                    type: "Query",
                    abstractKey: null
                }
            }();
            a.hash = "d9353823d52429df392bc2cfe9e254eb", n.default = a
        },
        41619: function(e, n, l) {
            l.r(n);
            var a = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "PrimaryDropSpotlight_data",
                selections: [{
                    args: null,
                    kind: "FragmentSpread",
                    name: "Banner_data"
                }, {
                    alias: null,
                    args: null,
                    concreteType: "DropType",
                    kind: "LinkedField",
                    name: "drop",
                    plural: !1,
                    selections: [{
                        alias: null,
                        args: null,
                        concreteType: "DropStageType",
                        kind: "LinkedField",
                        name: "ctaStage",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "__typename",
                            storageKey: null
                        }],
                        storageKey: null
                    }],
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    concreteType: "CollectionMetadataType",
                    kind: "LinkedField",
                    name: "metadata",
                    plural: !1,
                    selections: [{
                        alias: null,
                        args: null,
                        concreteType: "HeroMetadataType",
                        kind: "LinkedField",
                        name: "hero",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "desktopBannerUrl",
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "mobileBannerUrl",
                            storageKey: null
                        }],
                        storageKey: null
                    }],
                    storageKey: null
                }],
                type: "CollectionType",
                abstractKey: null,
                hash: "c17f00cbdf026df109e2187e31af2949"
            };
            n.default = a
        },
        4141: function(e, n, l) {
            l.r(n);
            var a = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "StatsV2HomepageCollectionCell_collection",
                selections: [{
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "name",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "imageUrl",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "isVerified",
                    storageKey: null
                }],
                type: "CollectionType",
                abstractKey: null,
                hash: "775009776fca1f02ab2d435d4f96a686"
            };
            n.default = a
        }
    }
]);
//# sourceMappingURL=55126-5157ee92b49cf169.js.map