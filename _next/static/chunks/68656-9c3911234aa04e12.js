"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [68656], {
        90817: function(n, t, e) {
            e.d(t, {
                P: function() {
                    return j
                }
            });
            var r = e(17599),
                i = e(19989),
                c = e(24246),
                o = e(27378),
                a = e(12393),
                l = e(74387),
                u = e(47892),
                s = e(81480),
                d = e(77795),
                f = e(53585),
                h = e(20225),
                p = e(96150),
                v = e(72363),
                x = e(41127),
                g = e(25223),
                m = e(43424),
                b = e(47762),
                w = e(73060),
                C = e(87821);

            function k() {
                var n = (0, i.Z)(["\n  z-index: ", ";\n\n  @media ", " {\n    position: sticky;\n    height: ", "px;\n  }\n"]);
                return k = function() {
                    return n
                }, n
            }

            function Z() {
                var n = (0, i.Z)(["\n  @media ", " {\n    position: absolute;\n    background: ", ";\n    ", "\n  }\n"]);
                return Z = function() {
                    return n
                }, n
            }

            function j(n) {
                var t = n.children,
                    e = n.className,
                    i = n.elementId,
                    u = n.height,
                    d = n.fullWidth,
                    p = void 0 === d || d,
                    k = n.stickyFromBreakpoint,
                    Z = void 0 === k ? "lg" : k,
                    j = (0, m.u)(),
                    L = j.setHasStickyElement,
                    P = j.filterTopOffset,
                    A = j.setHasScrolledPastFilter,
                    V = (0, o.useState)(0),
                    E = V[0],
                    O = V[1],
                    S = (0, l.Z)((0, s._4)(v.AV.sm), !1),
                    T = (0, g.r)().isOpen,
                    M = (0, a.YD)({
                        initialInView: !0,
                        rootMargin: "-".concat((P || 0) + 4, "px 0px ").concat((P || 0) + 4, "px 0px"),
                        threshold: [.6]
                    }),
                    U = M.ref,
                    B = M.inView,
                    F = (0, h.Fg)().theme,
                    z = (0, a.YD)({
                        initialInView: !1
                    }),
                    D = z.ref,
                    W = z.inView,
                    _ = z.entry;
                (0, o.useEffect)((function() {
                    L(!B)
                }), [B, L]), (0, o.useEffect)((function() {
                    var n = !!(null === _ || void 0 === _ ? void 0 : _.boundingClientRect.top) && _.boundingClientRect.top < 0;
                    A(!W && n)
                }), [W, A, _]), (0, b.n)((function() {
                    O((0, w.n)())
                }));
                var H = E;
                return T && !S && (H += x.QZ), (0, c.jsxs)(c.Fragment, {
                    children: [(0, c.jsx)("span", {
                        id: i,
                        ref: U
                    }), (0, c.jsx)(y, {
                        className: e,
                        largeBPHeight: u,
                        stickyFromBreakpoint: Z,
                        top: P - 1,
                        children: (0, c.jsx)(I, {
                            boxShadow: (0, r.Z)({
                                _: "none"
                            }, Z, "\n              ".concat(B ? "" : "light" === F ? C.ZP.light.shadows.button : C.ZP.dark.shadows.button, "\n            ")),
                            fullWidth: p,
                            height: "100%",
                            inView: B,
                            stickyFromBreakpoint: Z,
                            top: "0",
                            width: "calc(100vw - ".concat(H, "px)"),
                            widthOffset: H,
                            children: t
                        })
                    }), (0, c.jsx)(v.pU, {
                        lessThan: Z,
                        children: (0, c.jsx)(f.g, {
                            position: "relative",
                            ref: D,
                            top: "-".concat(P - u, "px")
                        })
                    })]
                })
            }
            var y = (0, u.ZP)(p.k).withConfig({
                    componentId: "sc-3f102755-0"
                })(k(), d.k.PHOENIX_HEADER, (function(n) {
                    return (0, s.ip)(v.AV[n.stickyFromBreakpoint])
                }), (function(n) {
                    return n.largeBPHeight
                })),
                I = (0, u.ZP)(f.g).withConfig({
                    componentId: "sc-3f102755-1"
                })(Z(), (function(n) {
                    return (0, s.ip)(v.AV[n.stickyFromBreakpoint])
                }), (function(n) {
                    return n.theme.colors.background
                }), (function(n) {
                    return n.fullWidth ? "\n      left: calc((100vw - (100% + ".concat(n.widthOffset, "px)) / -2);\n      right: calc((100vw - (100% + ").concat(n.widthOffset, "px)) / -2);\n      ") : "\n      margin-left: calc(-1 * ((100vw - (100% + ".concat(n.widthOffset, "px)) / 2));\n      margin-right: calc(-1 * ((100vw - (100% + ").concat(n.widthOffset, "px)) / 2));\n      padding-left: calc((100vw - (100% + ").concat(n.widthOffset, "px)) / 2);\n      padding-right: calc((100vw - (100% + ").concat(n.widthOffset, "px)) / 2);\n      ")
                }))
        },
        66843: function(n, t, e) {
            e.d(t, {
                r: function() {
                    return i
                }
            });
            var r = e(24246),
                i = (e(27378), function(n) {
                    var t = n.color,
                        e = n.className,
                        i = n.width,
                        c = n.height,
                        o = n.active;
                    return (0, r.jsx)("svg", {
                        className: e,
                        color: t,
                        style: {
                            height: "".concat(c, "px"),
                            width: "".concat(i, "px")
                        },
                        viewBox: "0 0 24 24",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: o ? (0, r.jsx)(r.Fragment, {
                            children: (0, r.jsx)("path", {
                                d: "M12.6317 3.9063L14.8341 8.33148C14.9415 8.54756 15.15 8.69669 15.3893 8.73017L20.3125 9.43929C20.9168 9.52755 21.1591 10.2641 20.7204 10.6871L17.1592 14.1323C16.9844 14.2997 16.9077 14.5432 16.9475 14.7805L17.788 19.644C17.8923 20.2405 17.2604 20.697 16.7206 20.414L12.3188 18.1162C12.1041 18.0036 11.8465 18.0036 11.6348 18.1162L7.23309 20.414C6.69323 20.697 6.06134 20.2405 6.16563 19.644L7.0061 14.7805C7.04598 14.5432 6.96929 14.3027 6.79445 14.1323L3.224 10.6871C2.78536 10.2641 3.02768 9.52755 3.63196 9.43929L8.55514 8.73017C8.7944 8.69669 9.00298 8.54756 9.11034 8.33148L11.3097 3.9063C11.5796 3.36457 12.3618 3.36457 12.6317 3.9063Z",
                                fill: "currentColor",
                                stroke: "currentColor",
                                strokeMiterlimit: "10",
                                strokeWidth: "2"
                            })
                        }) : (0, r.jsx)("path", {
                            d: "M12.6,3.9l2.2,4.4c0.1,0.2,0.3,0.4,0.6,0.4l4.9,0.7c0.6,0.1,0.8,0.8,0.4,1.2l-3.6,3.4c-0.2,0.2-0.3,0.4-0.2,0.6 l0.8,4.9c0.1,0.6-0.5,1.1-1.1,0.8l-4.4-2.3c-0.2-0.1-0.5-0.1-0.7,0l-4.4,2.3c-0.5,0.3-1.2-0.2-1.1-0.8L7,14.8c0-0.2,0-0.5-0.2-0.6 l-3.6-3.4C2.8,10.3,3,9.5,3.6,9.4l4.9-0.7c0.2,0,0.4-0.2,0.6-0.4l2.2-4.4C11.6,3.4,12.4,3.4,12.6,3.9z",
                            fill: "none",
                            stroke: "currentColor",
                            strokeMiterlimit: "10",
                            strokeWidth: "2.5"
                        })
                    })
                })
        },
        41127: function(n, t, e) {
            e.d(t, {
                JT: function() {
                    return i
                },
                QZ: function() {
                    return r
                },
                py: function() {
                    return c
                },
                td: function() {
                    return o
                }
            });
            var r = 359,
                i = 20,
                c = 50,
                o = "bulkList"
        },
        25223: function(n, t, e) {
            e.d(t, {
                r: function() {
                    return c
                }
            });
            var r = e(27378),
                i = e(23891),
                c = function() {
                    return (0, r.useContext)(i.q)
                }
        },
        8117: function(n, t, e) {
            e.d(t, {
                r: function() {
                    return p
                }
            });
            var r = e(23842),
                i = e(85034),
                c = e(70169),
                o = e(3204),
                a = e(35230),
                l = e.n(a),
                u = e(27378),
                s = e(20927),
                d = e.n(s),
                f = e(87481),
                h = "assetSelections",
                p = function() {
                    var n, t = null === (n = (0, f.b)().wallet.activeAccount) || void 0 === n ? void 0 : n.address,
                        e = (0, u.useMemo)((function() {
                            return {
                                walletAddress: t,
                                action: void 0,
                                selectedIds: []
                            }
                        }), [t]),
                        a = (0, u.useState)(!1),
                        s = a[0],
                        p = a[1],
                        v = (0, u.useState)(e),
                        x = v[0],
                        g = v[1];
                    (0, u.useEffect)((function() {
                        var n = function() {
                            var n = (0, r.Z)(l().mark((function n() {
                                var r;
                                return l().wrap((function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            return n.prev = 0, n.next = 3, d().getItem(h);
                                        case 3:
                                            r = n.sent, t && (null === r || void 0 === r ? void 0 : r.walletAddress) === t ? g(r) : t && g(e), n.next = 9;
                                            break;
                                        case 7:
                                            n.prev = 7, n.t0 = n.catch(0);
                                        case 9:
                                            return n.prev = 9, p(!0), n.finish(9);
                                        case 12:
                                        case "end":
                                            return n.stop()
                                    }
                                }), n, null, [
                                    [0, 7, 9, 12]
                                ])
                            })));
                            return function() {
                                return n.apply(this, arguments)
                            }
                        }();
                        n()
                    }), [e, t]), (0, u.useEffect)((function() {
                        d().setItem(h, x)
                    }), [x]);
                    var m = (0, u.useCallback)((function(n) {
                            g((function(t) {
                                return (0, c.Z)((0, i.Z)({}, t), {
                                    action: n
                                })
                            }))
                        }), []),
                        b = (0, u.useCallback)((function(n) {
                            g((function(t) {
                                return (0, c.Z)((0, i.Z)({}, t), {
                                    selectedIds: (0, o.Z)(t.selectedIds).concat([n])
                                })
                            }))
                        }), []),
                        w = (0, u.useCallback)((function(n) {
                            g((function(t) {
                                return (0, c.Z)((0, i.Z)({}, t), {
                                    selectedIds: t.selectedIds.filter((function(t) {
                                        return !n.includes(t)
                                    }))
                                })
                            }))
                        }), []),
                        C = (0, u.useCallback)((function() {
                            g((function(n) {
                                return (0, c.Z)((0, i.Z)({}, n), {
                                    selectedIds: []
                                })
                            }))
                        }), []),
                        k = (0, u.useCallback)((function() {
                            g(e)
                        }), [e]);
                    return {
                        action: x.action,
                        selectedIds: x.selectedIds,
                        setAction: m,
                        select: b,
                        unselect: w,
                        unselectAll: C,
                        clear: k,
                        isLoaded: s
                    }
                }
        },
        23891: function(n, t, e) {
            e.d(t, {
                G: function() {
                    return d
                },
                q: function() {
                    return s
                }
            });
            var r = e(24246),
                i = e(27378),
                c = e(8117),
                o = e(79790),
                a = e(6723),
                l = e(41127),
                u = e(70498),
                s = (0, i.createContext)({
                    action: void 0,
                    isOpen: !1,
                    selectedIds: [],
                    onSetAction: function() {
                        return null
                    },
                    onClose: function() {
                        return null
                    },
                    onDelete: function() {
                        return null
                    },
                    onDeleteAll: function() {
                        return null
                    },
                    onSelect: function() {
                        return null
                    }
                }),
                d = function(n) {
                    var t = n.children,
                        e = (0, a.q)("assets"),
                        d = (0, o.e)().showErrorMessage,
                        f = (0, c.r)(),
                        h = f.action,
                        p = f.selectedIds,
                        v = f.setAction,
                        x = f.select,
                        g = f.unselect,
                        m = f.unselectAll,
                        b = f.clear,
                        w = (0, i.useCallback)((function(n) {
                            return v(n)
                        }), [v]);
                    (0, i.useEffect)((function() {
                        1 !== p.length || h || w(l.td)
                    }), [h, w, p]);
                    var C = (0, i.useCallback)((function() {
                            return b()
                        }), [b]),
                        k = (0, i.useCallback)((function(n) {
                            var t = function(n) {
                                return "bulkList" === n ? l.py : l.JT
                            }(h);
                            p.length >= t && h && (0, u.nD)(h) ? d(e("errors.exceededMax", "You can only select up to {{count}} items at a time.", {
                                count: t
                            })) : x(n.relayId)
                        }), [h, x, p, d, e]),
                        Z = (0, i.useCallback)((function(n) {
                            return g(n)
                        }), [g]),
                        j = (0, i.useMemo)((function() {
                            return {
                                action: h,
                                isOpen: !!h,
                                selectedIds: p,
                                onSetAction: w,
                                onClose: C,
                                onDelete: Z,
                                onDeleteAll: m,
                                onSelect: k
                            }
                        }), [h, p, w, C, Z, k, m]);
                    return (0, r.jsx)(s.Provider, {
                        value: j,
                        children: t
                    })
                }
        },
        70498: function(n, t, e) {
            e.d(t, {
                L_: function() {
                    return c
                },
                nD: function() {
                    return i
                },
                wM: function() {
                    return o
                }
            });
            var r = ["bulkList", "sell", "transfer"],
                i = function(n) {
                    return r.includes(n)
                },
                c = function(n) {
                    return "bulkList" !== n
                },
                o = function(n) {
                    return "sell" === n
                }
        },
        43424: function(n, t, e) {
            e.d(t, {
                u: function() {
                    return c
                }
            });
            var r = e(27378),
                i = e(68283);

            function c() {
                return (0, r.useContext)(i.P)
            }
        },
        22548: function(n, t, e) {
            e.d(t, {
                n: function() {
                    return D
                }
            });
            var r = e(85034),
                i = e(70169),
                c = e(31373),
                o = e(19989),
                a = e(24246),
                l = (e(27378), e(76449)),
                u = e(74387),
                s = e(47892),
                d = e(316),
                f = e(6723);

            function h() {
                var n = (0, o.Z)(["\n  font-size: 10px;\n  line-height: 16px;\n\n  display: inline-block;\n  padding: 2px 6px;\n\n  background-color: ", ";\n  border-radius: 8px;\n"]);
                return h = function() {
                    return n
                }, n
            }
            var p = function() {
                    var n = (0, f.q)("collection");
                    return (0, a.jsx)(v, {
                        letterSpacing: "1px",
                        size: "tiny",
                        textTransform: "uppercase",
                        weight: "semibold",
                        children: n("betaTag", "beta")
                    })
                },
                v = (0, s.ZP)(d.xv.Body).withConfig({
                    componentId: "sc-564db553-0"
                })(h(), (function(n) {
                    return n.theme.colors.border
                })),
                x = e(48257),
                g = e(53585),
                m = e(18616),
                b = e(96150),
                w = e(72363),
                C = e(17482),
                k = e(72686),
                Z = e(99525),
                j = e(11652),
                y = e(78439),
                I = e(90761);

            function L() {
                var n = (0, o.Z)(["\n      margin: unset;\n    "]);
                return L = function() {
                    return n
                }, n
            }

            function P() {
                var n = (0, o.Z)(["\n  /* Fixes the width showing as 2px instead */\n  border-width: 0.5px;\n  border-style: solid;\n  ", "\n  margin: 0px -16px;\n  ", "\n"]);
                return P = function() {
                    return n
                }, n
            }

            function A() {
                var n = (0, o.Z)(["\n  justify-content: left;\n  width: 100%;\n  margin: 0px;\n  :hover {\n    overflow: auto;\n  }\n"]);
                return A = function() {
                    return n
                }, n
            }

            function V() {
                var n = (0, o.Z)(["\n        gap: ", ";\n      "]);
                return V = function() {
                    return n
                }, n
            }

            function E() {
                var n = (0, o.Z)(["\n        gap: 24px;\n      "]);
                return E = function() {
                    return n
                }, n
            }

            function O() {
                var n = (0, o.Z)(["\n        gap: 16px;\n      "]);
                return O = function() {
                    return n
                }, n
            }

            function S() {
                var n = (0, o.Z)(["\n  gap: 24px;\n  margin: 0px;\n  margin-left: -8px;\n  ", "\n"]);
                return S = function() {
                    return n
                }, n
            }

            function T() {
                var n = (0, o.Z)(["\n  display: flex;\n  padding: ", ";\n  cursor: pointer;\n"]);
                return T = function() {
                    return n
                }, n
            }

            function M() {
                var n = (0, o.Z)(["\n  width: 100%;\n"]);
                return M = function() {
                    return n
                }, n
            }

            function U() {
                var n = (0, o.Z)(["\n  color: ", ";\n"]);
                return U = function() {
                    return n
                }, n
            }

            function B() {
                var n = (0, o.Z)(["\n  margin-right: 0px;\n  white-space: nowrap;\n"]);
                return B = function() {
                    return n
                }, n
            }

            function F() {
                var n = (0, o.Z)(["\n  margin-right: 0px;\n  white-space: nowrap;\n"]);
                return F = function() {
                    return n
                }, n
            }

            function z() {
                var n = (0, o.Z)(["\n  color: inherit;\n  white-space: nowrap;\n"]);
                return z = function() {
                    return n
                }, n
            }
            var D = function(n) {
                    var t = n.tabs,
                        e = n.currentTab,
                        o = n.handleClick,
                        l = n.baseUrl,
                        u = n.isLoading,
                        s = n.endEnhancer,
                        d = n.labelVariant,
                        h = n.renderLabel,
                        p = n.tabItemPadding,
                        v = n.useUpdatedTabLabels,
                        x = void 0 !== v && v,
                        m = (0, c.Z)(n, ["tabs", "currentTab", "handleClick", "baseUrl", "isLoading", "endEnhancer", "labelVariant", "renderLabel", "tabItemPadding", "useUpdatedTabLabels"]),
                        C = (0, f.q)("phoenix");
                    return u ? (0, a.jsx)(q, {
                        children: (0, a.jsx)(k.O.Row, {
                            children: (0, a.jsxs)(b.k, {
                                children: [(0, a.jsx)(w.pU, {
                                    greaterThanOrEqual: "sm",
                                    children: (0, a.jsx)(k.O.Line, {
                                        height: "44px",
                                        width: "700px"
                                    })
                                }), (0, a.jsx)(w.pU, {
                                    lessThan: "sm",
                                    children: (0, a.jsx)(k.O.Line, {
                                        height: "32px",
                                        width: "300px"
                                    })
                                })]
                            })
                        })
                    }) : (0, a.jsx)(q, {
                        "data-testid": "ProfilePage--navbar",
                        children: (0, a.jsxs)(g.g, {
                            as: "nav",
                            overflow: "hidden",
                            width: "100%",
                            children: [(0, a.jsxs)(Z.i, {
                                alignItems: "flex-end",
                                children: [(0, a.jsx)(_, {
                                    children: (0, a.jsx)(H, (0, i.Z)((0, r.Z)({}, m), {
                                        $gap: "large" === d ? "40px" : "48px",
                                        children: t.map((function(n, t) {
                                            if (Array.isArray(n)) {
                                                var r = n.filter((function(n) {
                                                    return n.id === e
                                                })).length > 0;
                                                return (0, a.jsx)(Q, {
                                                    active: r,
                                                    baseUrl: l,
                                                    currentTab: e,
                                                    items: n,
                                                    label: C("more", "More"),
                                                    labelVariant: d
                                                }, "more-dropdown")
                                            }
                                            var i;
                                            return (0, a.jsx)(R, {
                                                active: n.id === e,
                                                baseUrl: l,
                                                count: n.count,
                                                handleClick: null !== (i = n.handleClick) && void 0 !== i ? i : o,
                                                id: n.id,
                                                label: n.label,
                                                labelVariant: d,
                                                path: n.path,
                                                renderLabel: h,
                                                tabItemPadding: p,
                                                useUpdatedTabLabels: x
                                            }, n.id || t)
                                        }))
                                    }))
                                }), s]
                            }), (0, a.jsx)(W, {})]
                        })
                    })
                },
                W = (0, s.ZP)(g.g).withConfig({
                    componentId: "sc-703d9c9-0"
                })(P(), (function(n) {
                    return (0, I.Um)({
                        variants: {
                            light: {
                                borderColor: (0, l.m4)(n.theme.colors.fog, .5)
                            },
                            dark: {
                                borderColor: (0, l.m4)(n.theme.colors.oil, .5)
                            }
                        }
                    })
                }), (0, w.BC)({
                    sm: (0, s.iv)(L())
                })),
                _ = (0, s.ZP)(C.v).attrs({
                    direction: "horizontal"
                }).withConfig({
                    componentId: "sc-703d9c9-1"
                })(A()),
                H = (0, s.ZP)(b.k).withConfig({
                    componentId: "sc-703d9c9-2"
                })(S(), (function(n) {
                    return (0, w.BC)({
                        lg: (0, s.iv)(V(), n.$gap),
                        sm: (0, s.iv)(E()),
                        xs: (0, s.iv)(O())
                    })
                })),
                N = (0, s.ZP)(C.v.Item).withConfig({
                    componentId: "sc-703d9c9-3"
                })(T(), (function(n) {
                    return n.$padding || "0px 0px 10px 0px"
                })),
                q = (0, s.ZP)(b.k).withConfig({
                    componentId: "sc-703d9c9-4"
                })(M()),
                Q = function(n) {
                    var t = n.label,
                        e = n.items,
                        r = n.active,
                        i = n.baseUrl,
                        c = n.labelVariant;
                    return (0, a.jsx)(m.L, {
                        content: function(n) {
                            var t = n.List,
                                r = n.Item,
                                c = n.close;
                            return (0, a.jsx)(t, {
                                children: e.map((function(n) {
                                    var t;
                                    return (0, a.jsxs)(r, {
                                        href: i ? "".concat(i).concat(null !== (t = n.path) && void 0 !== t ? t : y.Z.getMergedQueryString({
                                            tab: n.id
                                        })) : void 0,
                                        scroll: !1,
                                        onClick: c,
                                        children: [(0, a.jsx)(r.Content, {
                                            children: n.label
                                        }), (0, a.jsx)(r.Action, {
                                            children: !!n.count && (0, j.nZ)(n.count)
                                        })]
                                    }, n.id)
                                }))
                            })
                        },
                        maxHeight: "358px",
                        popperOptions: {
                            modifiers: [{
                                name: "flip",
                                enabled: !1
                            }]
                        },
                        children: (0, a.jsxs)(N, {
                            active: r,
                            "data-testid": "profile-nav-more",
                            direction: "horizontal",
                            children: ["large" === c ? (0, a.jsx)(Y, {
                                children: t
                            }) : (0, a.jsx)(J, {
                                children: t
                            }), (0, a.jsx)(C.v.Side, {
                                children: (0, a.jsx)(x.J, {
                                    color: r ? void 0 : "gray",
                                    fontWeight: "600",
                                    value: "expand_more"
                                })
                            })]
                        })
                    })
                },
                R = function(n) {
                    var t = n.label,
                        e = n.renderLabel,
                        r = n.count,
                        i = n.id,
                        c = n.active,
                        o = n.handleClick,
                        l = n.baseUrl,
                        s = n.path,
                        d = n.labelVariant,
                        f = n.tabItemPadding,
                        h = n.useUpdatedTabLabels,
                        v = (0, u.Z)("(min-width: ".concat(w.AV.xxl, "px)"), !1),
                        x = h ? (0, a.jsx)(G, {
                            size: v ? "large" : "medium",
                            children: t
                        }) : (0, a.jsx)(Y, {
                            children: t
                        }),
                        g = h ? (0, a.jsx)(G, {
                            size: "small",
                            children: t
                        }) : (0, a.jsx)(J, {
                            children: t
                        });
                    return (0, a.jsxs)(N, {
                        $padding: f,
                        active: c,
                        "aria-selected": !!c,
                        direction: "horizontal",
                        href: l ? "".concat(l).concat(null !== s && void 0 !== s ? s : y.Z.getMergedQueryString({
                            tab: i
                        })) : void 0,
                        role: "tab",
                        scroll: !1,
                        onClick: function(n) {
                            o && o(i, n)
                        },
                        children: [e ? e({
                            label: t
                        }) : "large" === d ? x : g, !!r && (0, a.jsx)($, {
                            active: c,
                            marginLeft: "8px",
                            children: (0, j.nZ)(r)
                        }), (0, a.jsx)(C.v.Side, {
                            marginLeft: "8px",
                            children: "analytics" === i && (0, a.jsx)(p, {})
                        })]
                    })
                },
                $ = (0, s.ZP)(C.v.Side).attrs({
                    as: "span"
                }).withConfig({
                    componentId: "sc-703d9c9-5"
                })(U(), (function(n) {
                    return n.active ? n.theme.colors.text.heading : n.theme.colors.text.subtle
                })),
                J = (0, s.ZP)(C.v.Title).withConfig({
                    componentId: "sc-703d9c9-6"
                })(B()),
                Y = (0, s.ZP)(C.v.Title).attrs({
                    variant: "small-h2"
                }).withConfig({
                    componentId: "sc-703d9c9-7"
                })(F()),
                G = (0, s.ZP)(d.xv.Heading).withConfig({
                    componentId: "sc-703d9c9-8"
                })(z())
        },
        41237: function(n, t, e) {
            e.d(t, {
                gM: function() {
                    return c
                },
                wd: function() {
                    return i
                },
                yb: function() {
                    return o
                }
            });
            var r = e(60387),
                i = (0, r.V6)("add to watchlist"),
                c = (0, r.V6)("remove from watchlist"),
                o = (0, r.V6)("unauthenticated add to watchlist click")
        },
        73060: function(n, t, e) {
            function r() {
                var n = document.createElement("p");
                n.style.width = "100%", n.style.height = "200px";
                var t = document.createElement("div");
                t.style.position = "absolute", t.style.top = "0px", t.style.left = "0px", t.style.visibility = "hidden", t.style.width = "200px", t.style.height = "150px", t.style.overflow = "hidden", t.appendChild(n), document.body.appendChild(t);
                var e = n.offsetWidth;
                t.style.overflow = "scroll";
                var r = n.offsetWidth;
                return e === r && (r = t.clientWidth), document.body.removeChild(t), e - r
            }
            e.d(t, {
                n: function() {
                    return r
                }
            })
        }
    }
]);
//# sourceMappingURL=68656-9c3911234aa04e12.js.map