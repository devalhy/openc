"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [36422], {
        50301: function(e, r, n) {
            n.d(r, {
                bR: function() {
                    return h
                },
                cb: function() {
                    return g
                },
                fM: function() {
                    return c
                },
                tY: function() {
                    return b
                }
            });
            var i = n(19989),
                l = n(24246),
                t = (n(27378), n(47892)),
                a = n(39283),
                o = n(20807),
                s = n(90761);

            function d() {
                var e = (0, i.Z)(["\n  position: relative;\n  right: 0;\n  left: 0;\n  border-radius: 0;\n"]);
                return d = function() {
                    return e
                }, e
            }

            function u() {
                var e = (0, i.Z)(["\n  position: relative;\n  max-height: ", ";\n  overflow: hidden;\n"]);
                return u = function() {
                    return e
                }, e
            }

            function m() {
                var e = (0, i.Z)(["\n  height: 0;\n  // 1:4 aspect ratio\n  padding-bottom: ", ";\n  position: relative;\n\n  ", "\n"]);
                return m = function() {
                    return e
                }, e
            }
            var c = (0, t.ZP)(a.E).withConfig({
                    componentId: "sc-a2bbba39-0"
                })(d()),
                g = t.ZP.div.withConfig({
                    componentId: "sc-a2bbba39-1"
                })(u(), (function(e) {
                    return e.$height ? "".concat(e.$height, "px") : "320px"
                })),
                b = t.ZP.div.withConfig({
                    componentId: "sc-a2bbba39-2"
                })(m(), (function(e) {
                    return e.$aspectRatio ? "".concat(e.$aspectRatio, "%") : "25%"
                }), (function(e) {
                    return (0, s.Um)({
                        variants: {
                            light: {
                                backgroundColor: "#E5E8EB50"
                            },
                            dark: {
                                backgroundColor: e.theme.colors.onyx
                            }
                        }
                    })
                }));

            function h(e) {
                var r, n = e.altText,
                    i = e.aspectRatio,
                    t = e.bannerImageUrl,
                    a = e.height,
                    s = t ? (0, l.jsx)(c, {
                        alt: n,
                        height: 600,
                        layout: "fill",
                        objectFit: "cover",
                        priority: !0,
                        src: null !== (r = (0, o.GS)(t)) && void 0 !== r ? r : ""
                    }) : null;
                return (0, l.jsx)(g, {
                    $height: a,
                    children: (0, l.jsx)(b, {
                        $aspectRatio: i,
                        children: s
                    })
                })
            }
        },
        40294: function(e, r, n) {
            n.d(r, {
                t: function() {
                    return be
                }
            });
            var i = n(85034),
                l = n(70169),
                t = n(31373),
                a = n(19989),
                o = n(24246),
                s = n(27378),
                d = n(76449),
                u = n(47892),
                m = n(48257),
                c = n(1569),
                g = n(53585),
                b = n(96150),
                h = n(83989),
                f = n(16611),
                x = n(85364),
                p = n(72363),
                y = n(316),
                v = {
                    display: {
                        large: 56,
                        medium: 40,
                        small: 32,
                        tiny: 32
                    },
                    heading: {
                        large: 40,
                        medium: 32,
                        small: 28,
                        tiny: 28
                    },
                    body: {
                        large: 24,
                        medium: 24,
                        small: 22.5,
                        tiny: 22.5
                    }
                },
                j = {
                    display: {
                        large: {
                            regular: 32.5,
                            semibold: 32.5
                        },
                        medium: {
                            regular: 21.66,
                            semibold: 21.66
                        },
                        small: {
                            regular: 16.25,
                            semibold: 16.25
                        },
                        tiny: {
                            regular: 16.25,
                            semibold: 16.25
                        }
                    },
                    heading: {
                        large: {
                            regular: 21.16,
                            semibold: 21.16
                        },
                        medium: {
                            regular: 15.87,
                            semibold: 15.87
                        },
                        small: {
                            regular: 13.23,
                            semibold: 13.23
                        },
                        tiny: {
                            regular: 13.23,
                            semibold: 13.23
                        }
                    },
                    body: {
                        large: {
                            regular: 10.16,
                            semibold: 10.578
                        },
                        medium: {
                            regular: 10.16,
                            semibold: 10.578
                        },
                        small: {
                            regular: 8.89,
                            semibold: 9.26
                        },
                        tiny: {
                            regular: 7.63,
                            semibold: 7.94
                        }
                    }
                },
                w = {
                    0: {
                        display: {
                            large: {
                                regular: 1.2,
                                semibold: 1.2
                            },
                            medium: {
                                regular: .79,
                                semibold: .79
                            },
                            small: {
                                regular: .6,
                                semibold: .6
                            },
                            tiny: {
                                regular: .6,
                                semibold: .6
                            }
                        },
                        heading: {
                            large: {
                                regular: .48,
                                semibold: .48
                            },
                            medium: {
                                regular: .36,
                                semibold: .36
                            },
                            small: {
                                regular: .305,
                                semibold: .305
                            },
                            tiny: {
                                regular: .305,
                                semibold: .305
                            }
                        },
                        body: {
                            large: {
                                regular: .11,
                                semibold: .234
                            },
                            medium: {
                                regular: .11,
                                semibold: .234
                            },
                            small: {
                                regular: .09,
                                semibold: .21
                            },
                            tiny: {
                                regular: .09,
                                semibold: .18
                            }
                        }
                    },
                    1: {
                        display: {
                            large: {
                                regular: 14.45,
                                semibold: 14.45
                            },
                            medium: {
                                regular: 9.62,
                                semibold: 9.62
                            },
                            small: {
                                regular: 7.22,
                                semibold: 7.22
                            },
                            tiny: {
                                regular: 7.22,
                                semibold: 7.22
                            }
                        },
                        heading: {
                            large: {
                                regular: 9.57,
                                semibold: 9.57
                            },
                            medium: {
                                regular: 7.17,
                                semibold: 7.17
                            },
                            small: {
                                regular: 5.985,
                                semibold: 5.985
                            },
                            tiny: {
                                regular: 5.985,
                                semibold: 5.985
                            }
                        },
                        body: {
                            large: {
                                regular: 5.03,
                                semibold: 4.781
                            },
                            medium: {
                                regular: 5.03,
                                semibold: 4.781
                            },
                            small: {
                                regular: 4.41,
                                semibold: 4.19
                            },
                            tiny: {
                                regular: 3.79,
                                semibold: 3.59
                            }
                        }
                    },
                    2: {
                        display: {
                            large: {
                                regular: 5.09,
                                semibold: 5.09
                            },
                            medium: {
                                regular: 3.39,
                                semibold: 3.39
                            },
                            small: {
                                regular: 2.54,
                                semibold: 2.54
                            },
                            tiny: {
                                regular: 2.54,
                                semibold: 2.54
                            }
                        },
                        heading: {
                            large: {
                                regular: 2.78,
                                semibold: 2.78
                            },
                            medium: {
                                regular: 2.09,
                                semibold: 2.09
                            },
                            small: {
                                regular: 1.743,
                                semibold: 1.743
                            },
                            tiny: {
                                regular: 1.743,
                                semibold: 1.743
                            }
                        },
                        body: {
                            large: {
                                regular: .96,
                                semibold: 1.39
                            },
                            medium: {
                                regular: .96,
                                semibold: 1.39
                            },
                            small: {
                                regular: .84,
                                semibold: 1.22
                            },
                            tiny: {
                                regular: .72,
                                semibold: 1.05
                            }
                        }
                    },
                    3: {
                        display: {
                            large: {
                                regular: 3.45,
                                semibold: 3.45
                            },
                            medium: {
                                regular: 2.29,
                                semibold: 2.29
                            },
                            small: {
                                regular: 1.73,
                                semibold: 1.73
                            },
                            tiny: {
                                regular: 1.73,
                                semibold: 1.73
                            }
                        },
                        heading: {
                            large: {
                                regular: 1.99,
                                semibold: 1.99
                            },
                            medium: {
                                regular: 1.49,
                                semibold: 1.49
                            },
                            small: {
                                regular: 1.243,
                                semibold: 1.243
                            },
                            tiny: {
                                regular: 1.243,
                                semibold: 1.243
                            }
                        },
                        body: {
                            large: {
                                regular: .73,
                                semibold: .992
                            },
                            medium: {
                                regular: .73,
                                semibold: .992
                            },
                            small: {
                                regular: .64,
                                semibold: .87
                            },
                            tiny: {
                                regular: .56,
                                semibold: .74
                            }
                        }
                    },
                    4: {
                        display: {
                            large: {
                                regular: 0,
                                semibold: 0
                            },
                            medium: {
                                regular: 0,
                                semibold: 0
                            },
                            small: {
                                regular: 0,
                                semibold: 0
                            },
                            tiny: {
                                regular: 0,
                                semibold: 0
                            }
                        },
                        heading: {
                            large: {
                                regular: 0,
                                semibold: 0
                            },
                            medium: {
                                regular: 0,
                                semibold: 0
                            },
                            small: {
                                regular: 0,
                                semibold: 0
                            },
                            tiny: {
                                regular: 0,
                                semibold: 0
                            }
                        },
                        body: {
                            large: {
                                regular: .09,
                                semibold: 0
                            },
                            medium: {
                                regular: .09,
                                semibold: 0
                            },
                            small: {
                                regular: .08,
                                semibold: 0
                            },
                            tiny: {
                                regular: .08,
                                semibold: .08
                            }
                        }
                    },
                    5: {
                        display: {
                            large: {
                                regular: 1.3,
                                semibold: 1.3
                            },
                            medium: {
                                regular: .86,
                                semibold: .86
                            },
                            small: {
                                regular: .65,
                                semibold: .65
                            },
                            tiny: {
                                regular: .65,
                                semibold: .65
                            }
                        },
                        heading: {
                            large: {
                                regular: .55,
                                semibold: .55
                            },
                            medium: {
                                regular: .41,
                                semibold: .41
                            },
                            small: {
                                regular: .344,
                                semibold: .344
                            },
                            tiny: {
                                regular: .344,
                                semibold: .344
                            }
                        },
                        body: {
                            large: {
                                regular: .11,
                                semibold: 1.273
                            },
                            medium: {
                                regular: .11,
                                semibold: 1.273
                            },
                            small: {
                                regular: .09,
                                semibold: .24
                            },
                            tiny: {
                                regular: .09,
                                semibold: .21
                            }
                        }
                    },
                    6: {
                        display: {
                            large: {
                                regular: 1.92,
                                semibold: 1.92
                            },
                            medium: {
                                regular: 1.27,
                                semibold: 1.27
                            },
                            small: {
                                regular: .96,
                                semibold: .96
                            },
                            tiny: {
                                regular: .96,
                                semibold: .96
                            }
                        },
                        heading: {
                            large: {
                                regular: .68,
                                semibold: .68
                            },
                            medium: {
                                regular: .5,
                                semibold: .5
                            },
                            small: {
                                regular: .422,
                                semibold: .422
                            },
                            tiny: {
                                regular: .422,
                                semibold: .422
                            }
                        },
                        body: {
                            large: {
                                regular: 0,
                                semibold: .336
                            },
                            medium: {
                                regular: 0,
                                semibold: .336
                            },
                            small: {
                                regular: 0,
                                semibold: .3
                            },
                            tiny: {
                                regular: 0,
                                semibold: .25
                            }
                        }
                    },
                    7: {
                        display: {
                            large: {
                                regular: 6.81,
                                semibold: 6.81
                            },
                            medium: {
                                regular: 4.53,
                                semibold: 4.53
                            },
                            small: {
                                regular: 3.41,
                                semibold: 3.41
                            },
                            tiny: {
                                regular: 3.41,
                                semibold: 3.41
                            }
                        },
                        heading: {
                            large: {
                                regular: 3.62,
                                semibold: 3.62
                            },
                            medium: {
                                regular: 2.71,
                                semibold: 2.71
                            },
                            small: {
                                regular: 2.266,
                                semibold: 2.266
                            },
                            tiny: {
                                regular: 2.266,
                                semibold: 2.266
                            }
                        },
                        body: {
                            large: {
                                regular: 1.42,
                                semibold: 1.805
                            },
                            medium: {
                                regular: 1.42,
                                semibold: 1.805
                            },
                            small: {
                                regular: 1.24,
                                semibold: 1.58
                            },
                            tiny: {
                                regular: 1.08,
                                semibold: 1.36
                            }
                        }
                    },
                    8: {
                        display: {
                            large: {
                                regular: 1.39,
                                semibold: 1.39
                            },
                            medium: {
                                regular: .92,
                                semibold: .92
                            },
                            small: {
                                regular: .7,
                                semibold: .7
                            },
                            tiny: {
                                regular: .7,
                                semibold: .7
                            }
                        },
                        heading: {
                            large: {
                                regular: .58,
                                semibold: .58
                            },
                            medium: {
                                regular: .43,
                                semibold: .43
                            },
                            small: {
                                regular: .36,
                                semibold: .36
                            },
                            tiny: {
                                regular: .36,
                                semibold: .36
                            }
                        },
                        body: {
                            large: {
                                regular: .15,
                                semibold: .289
                            },
                            medium: {
                                regular: .15,
                                semibold: .289
                            },
                            small: {
                                regular: .05,
                                semibold: .6
                            },
                            tiny: {
                                regular: .05,
                                semibold: .22
                            }
                        }
                    },
                    9: {
                        display: {
                            large: {
                                regular: 2.98,
                                semibold: 2.98
                            },
                            medium: {
                                regular: 1.97,
                                semibold: 1.97
                            },
                            small: {
                                regular: 1.48,
                                semibold: 1.48
                            },
                            tiny: {
                                regular: 1.48,
                                semibold: 1.48
                            }
                        },
                        heading: {
                            large: {
                                regular: 1.12,
                                semibold: 1.12
                            },
                            medium: {
                                regular: .84,
                                semibold: .84
                            },
                            small: {
                                regular: .704,
                                semibold: .704
                            },
                            tiny: {
                                regular: .704,
                                semibold: .704
                            }
                        },
                        body: {
                            large: {
                                regular: .07,
                                semibold: .555
                            },
                            medium: {
                                regular: .07,
                                semibold: .555
                            },
                            small: {
                                regular: .07,
                                semibold: .49
                            },
                            tiny: {
                                regular: .07,
                                semibold: .42
                            }
                        }
                    },
                    ".": {
                        display: {
                            large: {
                                regular: 18.96,
                                semibold: 18.96
                            },
                            medium: {
                                regular: 12.63,
                                semibold: 12.63
                            },
                            small: {
                                regular: 9.48,
                                semibold: 9.48
                            },
                            tiny: {
                                regular: 9.48,
                                semibold: 9.48
                            }
                        },
                        heading: {
                            large: {
                                regular: 12.84,
                                semibold: 12.84
                            },
                            medium: {
                                regular: 9.63,
                                semibold: 9.63
                            },
                            small: {
                                regular: 8.024,
                                semibold: 8.024
                            },
                            tiny: {
                                regular: 8.024,
                                semibold: 8.024
                            }
                        },
                        body: {
                            large: {
                                regular: 6.79,
                                semibold: 6.414
                            },
                            medium: {
                                regular: 6.79,
                                semibold: 6.414
                            },
                            small: {
                                regular: 5.94,
                                semibold: 5.62
                            },
                            tiny: {
                                regular: 5.11,
                                semibold: 4.81
                            }
                        }
                    },
                    " ": {
                        display: {
                            large: {
                                regular: 32.5,
                                semibold: 32.5
                            },
                            medium: {
                                regular: 21.66,
                                semibold: 21.66
                            },
                            small: {
                                regular: 16.25,
                                semibold: 16.25
                            },
                            tiny: {
                                regular: 16.25,
                                semibold: 16.25
                            }
                        },
                        heading: {
                            large: {
                                regular: 21.16,
                                semibold: 21.16
                            },
                            medium: {
                                regular: 15.87,
                                semibold: 15.87
                            },
                            small: {
                                regular: 13.23,
                                semibold: 13.23
                            },
                            tiny: {
                                regular: 13.23,
                                semibold: 13.23
                            }
                        },
                        body: {
                            large: {
                                regular: 10.16,
                                semibold: 10.578
                            },
                            medium: {
                                regular: 10.16,
                                semibold: 10.578
                            },
                            small: {
                                regular: 8.89,
                                semibold: 9.26
                            },
                            tiny: {
                                regular: 7.63,
                                semibold: 7.94
                            }
                        }
                    }
                },
                Z = "1s cubic-bezier(0.65, 0.05, 0.36, 1) forwards",
                P = Object.keys(w),
                k = n(3204);

            function C() {
                var e = (0, a.Z)(["\n  50% {\n    color: ", ";\n  }\n"]);
                return C = function() {
                    return e
                }, e
            }

            function z() {
                var e = (0, a.Z)(["\n  to {\n    transform: translate(", ", ", ");\n  }\n"]);
                return z = function() {
                    return e
                }, e
            }

            function I() {
                var e = (0, a.Z)(["\n  to {\n    width: ", ";\n  }\n"]);
                return I = function() {
                    return e
                }, e
            }
            var T = function(e, r, n, i) {
                for (var l = [0], t = [], a = 0, o = 0; o < e.length; o++) {
                    if (!(e[o] in w)) return {
                        xPositions: null,
                        yPositions: null,
                        width: -1
                    };
                    var s = w[e[o]][r][n][i];
                    t = (0, k.Z)(t).concat([v[r][n] * P.indexOf(e[o])]), o < e.length - 1 && (l = (0, k.Z)(l).concat([s + l[o]])), a += j[r][n][i] - s
                }
                return {
                    xPositions: l,
                    yPositions: t,
                    width: a
                }
            };

            function E() {
                var e = (0, a.Z)(["\n  animation: ", "\n    ", ";\n"]);
                return E = function() {
                    return e
                }, e
            }

            function S() {
                var e = (0, a.Z)(["\n  ", "\n"]);
                return S = function() {
                    return e
                }, e
            }

            function U() {
                var e = (0, a.Z)(["\n  ", "\n"]);
                return U = function() {
                    return e
                }, e
            }

            function B() {
                var e = (0, a.Z)(["\n  ", "\n"]);
                return B = function() {
                    return e
                }, e
            }

            function L() {
                var e = (0, a.Z)(["\n  height: ", "px;\n  overflow: hidden;\n  width: ", ";\n  animation ", " ", ";\n"]);
                return L = function() {
                    return e
                }, e
            }

            function N() {
                var e = (0, a.Z)(["\n  transform: translate(\n    ", ",\n    ", "\n  );\n  animation: ", "\n    ", ";\n"]);
                return N = function() {
                    return e
                }, e
            }

            function H() {
                var e = (0, a.Z)([""]);
                return H = function() {
                    return e
                }, e
            }

            function F() {
                var e = (0, a.Z)([""]);
                return F = function() {
                    return e
                }, e
            }

            function W() {
                var e = (0, a.Z)([""]);
                return W = function() {
                    return e
                }, e
            }
            var _ = function(e) {
                    var r = e.size,
                        n = e.type,
                        i = e.digit,
                        l = e.weight;
                    return "display" === n ? (0, o.jsx)(q, {
                        size: "tiny" === r ? "small" : r,
                        children: i
                    }) : "heading" === n ? (0, o.jsx)($, {
                        size: "tiny" === r ? "small" : r,
                        children: i
                    }) : (0, o.jsx)(R, {
                        size: "large" === r ? "medium" : r,
                        weight: l,
                        children: i
                    })
                },
                A = function(e) {
                    var r = e.start,
                        n = e.end,
                        i = e.size,
                        l = e.weight,
                        t = void 0 === l ? "regular" : l,
                        a = e.type,
                        s = function(e, r) {
                            for (var n = e, i = r, l = 0; l < e.length - r.length; l++) i += " ";
                            for (var t = 0; t < r.length - e.length; t++) n += " ";
                            return {
                                start: n,
                                end: i
                            }
                        }(r, n),
                        d = s.start,
                        u = s.end,
                        m = T(d, a, i, t),
                        c = m.xPositions,
                        g = m.yPositions,
                        h = m.width,
                        f = T(u, a, i, t),
                        x = f.xPositions,
                        p = f.yPositions,
                        v = f.width;
                    return !g || !p || !c || !x || r === n ? "display" === a ? (0, o.jsx)(y.xv.Display, {
                        size: "tiny" === i ? "small" : i,
                        children: n
                    }) : "heading" === a ? (0, o.jsx)(y.xv.Heading, {
                        size: "tiny" === i ? "small" : i,
                        children: n
                    }) : (0, o.jsx)(y.xv.Body, {
                        size: "large" === i ? "medium" : i,
                        weight: t,
                        children: n
                    }) : (0, o.jsx)(D, {
                        endWidth: "".concat(v, "px"),
                        size: i,
                        startWidth: "".concat(h, "px"),
                        type: a,
                        children: (0, o.jsx)(b.k, {
                            children: g.map((function(e, r) {
                                return (0, o.jsx)(M, {
                                    xPositionEnd: "-".concat(x[r], "px"),
                                    xPositionStart: "-".concat(c[r], "px"),
                                    yPositionEnd: "-".concat(p[r], "px"),
                                    yPositionStart: "-".concat(g[r], "px"),
                                    children: P.map((function(e) {
                                        return (0, o.jsx)("div", {
                                            children: (0, o.jsx)(_, {
                                                digit: e,
                                                size: i,
                                                type: a,
                                                weight: t
                                            })
                                        }, e)
                                    }))
                                }, r)
                            }))
                        })
                    })
                },
                O = (0, u.iv)(E(), (function(e) {
                    return r = e.theme.colors.seaBlue, (0, u.F4)(C(), r);
                    var r
                }), Z),
                R = (0, u.ZP)(y.xv.Body).withConfig({
                    componentId: "sc-305c8b38-0"
                })(S(), O),
                $ = (0, u.ZP)(y.xv.Heading).withConfig({
                    componentId: "sc-305c8b38-1"
                })(U(), O),
                q = (0, u.ZP)(y.xv.Display).withConfig({
                    componentId: "sc-305c8b38-2"
                })(B(), O),
                D = u.ZP.div.withConfig({
                    componentId: "sc-305c8b38-3"
                })(L(), (function(e) {
                    return v[e.type][e.size]
                }), (function(e) {
                    return e.startWidth
                }), (function(e) {
                    return r = e.endWidth, (0, u.F4)(I(), r);
                    var r
                }), Z),
                M = u.ZP.div.withConfig({
                    componentId: "sc-305c8b38-4"
                })(N(), (function(e) {
                    return e.xPositionStart
                }), (function(e) {
                    return e.yPositionStart
                }), (function(e) {
                    return r = e.xPositionEnd, n = e.yPositionEnd, (0, u.F4)(z(), r, n);
                    var r, n
                }), Z),
                G = (0, u.ZP)(A).attrs({
                    type: "body"
                }).withConfig({
                    componentId: "sc-305c8b38-5"
                })(H()),
                J = (0, u.ZP)(A).attrs({
                    type: "heading"
                }).withConfig({
                    componentId: "sc-305c8b38-6"
                })(F()),
                X = (0, u.ZP)(A).attrs({
                    type: "display"
                }).withConfig({
                    componentId: "sc-305c8b38-7"
                })(W()),
                Y = Object.assign(G, {
                    Body: G,
                    Heading: J,
                    Display: X
                }),
                K = n(65175),
                Q = n(48599),
                V = n(37753),
                ee = n(6723),
                re = n(90761);

            function ne() {
                var e = (0, a.Z)(["\n  text-align: left;\n"]);
                return ne = function() {
                    return e
                }, e
            }

            function ie() {
                var e = (0, a.Z)(["\n  // Prevents children from stretching to fill the column, which keeps tooltips\n  // aligned on the left side of the column above the number content.\n  align-items: flex-start;\n\n  :hover .styledPhoenixText {\n    ", "\n  }\n  :active .styledPhoenixText {\n    ", "\n  }\n"]);
                return ie = function() {
                    return e
                }, e
            }

            function le() {
                var e = (0, a.Z)(["\n  gap: 12px;\n  flex-direction: column;\n  max-width: 50%;\n"]);
                return le = function() {
                    return e
                }, e
            }

            function te() {
                var e = (0, a.Z)(["\n      gap: 40px;\n    "]);
                return te = function() {
                    return e
                }, e
            }

            function ae() {
                var e = (0, a.Z)(["\n      margin-top: 30px;\n    "]);
                return ae = function() {
                    return e
                }, e
            }

            function oe() {
                var e = (0, a.Z)(["\n  gap: 32px;\n  overflow-x: auto;\n  overflow-y: hidden;\n  margin-top: 32px;\n  padding-bottom: 8px;\n\n  ", "\n"]);
                return oe = function() {
                    return e
                }, e
            }

            function se() {
                var e = (0, a.Z)(["\n  word-break: break-word;\n"]);
                return se = function() {
                    return e
                }, e
            }

            function de() {
                var e = (0, a.Z)(["\n  .styledPhoenixText {\n    ", "\n  }\n\n  ", "\n\n  &:hover,\n  :hover .styledPhoenixText {\n    ", "\n  }\n  &:active,\n  :active .styledPhoenixText {\n    ", "\n  }\n"]);
                return de = function() {
                    return e
                }, e
            }

            function ue() {
                var e = (0, a.Z)(["\n  font-weight: 600;\n"]);
                return ue = function() {
                    return e
                }, e
            }

            function me() {
                var e = (0, a.Z)(["\n      padding-right: 32px;\n    "]);
                return me = function() {
                    return e
                }, e
            }

            function ce() {
                var e = (0, a.Z)(["\n      overflow: hidden;\n      text-overflow: ellipsis;\n      display: -webkit-box;\n      -webkit-line-clamp: ", ";\n      -webkit-box-orient: vertical;\n      white-space: normal;\n    "]);
                return ce = function() {
                    return e
                }, e
            }

            function ge() {
                var e = (0, a.Z)(['\n  width: 100%;\n\n  * {\n    margin-top: 0;\n    display: inline;\n  }\n\n  p::after,\n  ul::after,\n  li::after {\n    content: " \\A\\A";\n    white-space: pre;\n  }\n\n  li::after {\n    content: " \\A";\n  }\n\n  ', "\n\n  ", "\n\n  ", "\n"], ['\n  width: 100%;\n\n  * {\n    margin-top: 0;\n    display: inline;\n  }\n\n  p::after,\n  ul::after,\n  li::after {\n    content: " \\\\A\\\\A";\n    white-space: pre;\n  }\n\n  li::after {\n    content: " \\\\A";\n  }\n\n  ', "\n\n  ", "\n\n  ", "\n"]);
                return ge = function() {
                    return e
                }, e
            }
            var be = function(e) {
                var r = e.text,
                    n = e.details,
                    i = e.mobileLines,
                    l = e.desktopLines,
                    t = (0, s.useMemo)((function() {
                        return (0, o.jsx)(Pe, {
                            desktopLines: l,
                            mobileLines: i,
                            text: r
                        })
                    }), [r, l, i]);
                return (0, o.jsxs)(g.g, {
                    children: [t, (0, o.jsx)(je, {
                        details: n
                    })]
                })
            };

            function he(e, r, n) {
                return e.map((function(e, i) {
                    return i % r === n ? e : null
                })).filter((function(e) {
                    return Boolean(e)
                }))
            }
            var fe = (0, u.ZP)(Q.k).withConfig({
                componentId: "sc-c2de28ea-0"
            })(ne());

            function xe(e) {
                var r = e.url,
                    n = e.label,
                    i = e.children,
                    l = e.testId,
                    t = e.onClick;
                return t ? (0, o.jsx)(fe, {
                    "data-testid": l,
                    onClick: t,
                    children: i
                }) : r ? (0, o.jsx)(c.r, {
                    "data-testid": l,
                    eventSource: n,
                    href: r,
                    children: i
                }) : (0, o.jsx)("span", {
                    "data-testid": l,
                    children: i
                })
            }
            var pe = function(e) {
                var r = e.textSize,
                    n = e.number,
                    i = e.prevNumber,
                    l = e.symbol,
                    t = l ? (0, o.jsx)(g.g, {
                        marginLeft: "4px",
                        children: l
                    }) : null;
                return n ? i ? (0, o.jsxs)(b.k, {
                    children: ["small" === r ? (0, o.jsx)(Y.Body, {
                        end: n,
                        size: "medium",
                        start: i,
                        weight: "semibold"
                    }) : (0, o.jsx)(Y.Heading, {
                        end: n,
                        size: "small",
                        start: i
                    }), t]
                }) : (0, o.jsxs)(b.k, {
                    alignItems: "center",
                    children: [n, t]
                }) : null
            };

            function ye(e) {
                var r = e.prevNumber,
                    n = e.number,
                    i = e.label,
                    l = e.symbol,
                    t = e.tooltip,
                    a = e.url,
                    s = e.onClick,
                    d = e.testId;
                return (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsx)(p.pU, {
                        lessThan: "sm",
                        children: (0, o.jsx)(xe, {
                            label: i,
                            testId: d,
                            url: a,
                            onClick: s,
                            children: (0, o.jsxs)(ve, {
                                children: [(0, o.jsx)(K.u, {
                                    content: t,
                                    disabled: !t,
                                    variant: "card",
                                    children: (0, o.jsx)(y.xv.Body, {
                                        as: "span",
                                        className: "styledPhoenixText",
                                        size: "medium",
                                        weight: "semibold",
                                        children: (0, o.jsx)(pe, {
                                            number: n,
                                            prevNumber: r,
                                            symbol: l,
                                            textSize: "small"
                                        })
                                    })
                                }), (0, o.jsx)(y.xv.Body, {
                                    as: "span",
                                    color: "text.subtle",
                                    marginLeft: 0,
                                    marginTop: "-4px",
                                    size: "tiny",
                                    weight: "regular",
                                    children: i
                                })]
                            })
                        })
                    }), (0, o.jsx)(p.pU, {
                        between: ["sm", "md"],
                        children: (0, o.jsx)(xe, {
                            label: i,
                            testId: d,
                            url: a,
                            onClick: s,
                            children: (0, o.jsxs)(ve, {
                                children: [(0, o.jsx)(K.u, {
                                    content: t,
                                    disabled: !t,
                                    variant: "card",
                                    children: (0, o.jsx)(y.xv.Heading, {
                                        as: "span",
                                        className: "styledPhoenixText",
                                        size: "small",
                                        children: (0, o.jsx)(pe, {
                                            number: n,
                                            prevNumber: r,
                                            symbol: l,
                                            textSize: "large"
                                        })
                                    })
                                }), (0, o.jsx)(y.xv.Body, {
                                    as: "span",
                                    color: "text.subtle",
                                    marginLeft: 0,
                                    marginTop: "-4px",
                                    size: "small",
                                    weight: "regular",
                                    children: i
                                })]
                            })
                        })
                    }), (0, o.jsx)(p.pU, {
                        greaterThanOrEqual: "md",
                        children: (0, o.jsx)(xe, {
                            label: i,
                            testId: d,
                            url: a,
                            onClick: s,
                            children: (0, o.jsxs)(ve, {
                                children: [(0, o.jsx)(K.u, {
                                    content: t,
                                    disabled: !t,
                                    variant: "card",
                                    children: (0, o.jsx)(y.xv.Heading, {
                                        as: "span",
                                        className: "styledPhoenixText",
                                        size: "small",
                                        children: (0, o.jsx)(pe, {
                                            number: n,
                                            prevNumber: r,
                                            symbol: l,
                                            textSize: "large"
                                        })
                                    })
                                }), (0, o.jsx)(y.xv.Body, {
                                    as: "span",
                                    color: "text.subtle",
                                    marginLeft: 0,
                                    marginTop: "-4px",
                                    size: "small",
                                    weight: "regular",
                                    children: i
                                })]
                            })
                        })
                    })]
                })
            }
            var ve = (0, u.ZP)(h.t).withConfig({
                    componentId: "sc-c2de28ea-1"
                })(ie(), (function(e) {
                    return (0, re.Um)({
                        variants: {
                            dark: {
                                color: "".concat(e.theme.colors.gray)
                            },
                            light: {
                                color: e.theme.colors.oil
                            }
                        }
                    })
                }), (function(e) {
                    return (0, re.Um)({
                        variants: {
                            dark: {
                                color: e.theme.colors.ash
                            },
                            light: {
                                color: e.theme.colors.darkGray
                            }
                        }
                    })
                })),
                je = function(e) {
                    var r = e.details;
                    if (!r) return null;
                    var n = r.length >= 5 ? 3 : 2;
                    return (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)(p.pU, {
                            greaterThanOrEqual: "md",
                            children: (0, o.jsx)(Ze, {
                                children: r.map((function(e, r) {
                                    return (0, s.createElement)(ye, (0, l.Z)((0, i.Z)({}, e), {
                                        key: r
                                    }))
                                }))
                            })
                        }), (0, o.jsx)(p.pU, {
                            lessThan: "md",
                            children: (0, o.jsxs)(Ze, {
                                children: [(0, o.jsx)(we, {
                                    children: he(r, n, 0).map((function(e, r) {
                                        return (0, s.createElement)(ye, (0, l.Z)((0, i.Z)({}, e), {
                                            key: r
                                        }))
                                    }))
                                }), (0, o.jsx)(we, {
                                    children: he(r, n, 1).map((function(e, r) {
                                        return (0, s.createElement)(ye, (0, l.Z)((0, i.Z)({}, e), {
                                            key: r
                                        }))
                                    }))
                                }), r.length >= 5 && (0, o.jsx)(we, {
                                    children: he(r, n, 2).map((function(e, r) {
                                        return (0, s.createElement)(ye, (0, l.Z)((0, i.Z)({}, e), {
                                            key: r
                                        }))
                                    }))
                                })]
                            })
                        })]
                    })
                },
                we = (0, u.ZP)(b.k).withConfig({
                    componentId: "sc-c2de28ea-2"
                })(le()),
                Ze = (0, u.ZP)(b.k).withConfig({
                    componentId: "sc-c2de28ea-3"
                })(oe(), (0, p.BC)({
                    sm: (0, u.iv)(te()),
                    md: (0, u.iv)(ae())
                })),
                Pe = function(e) {
                    var r = e.text,
                        n = e.mobileLines,
                        i = e.desktopLines;
                    return (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)(p.pU, {
                            greaterThanOrEqual: "sm",
                            children: (0, o.jsx)(Ce, {
                                lines: i,
                                text: r
                            })
                        }), (0, o.jsx)(p.pU, {
                            lessThan: "sm",
                            children: (0, o.jsx)(Ce, {
                                lines: n,
                                small: !0,
                                text: r
                            })
                        })]
                    })
                },
                ke = function(e) {
                    var r = e.children,
                        n = (0, t.Z)(e, ["children"]);
                    return (0, o.jsx)(c.r, (0, l.Z)((0, i.Z)({}, n), {
                        tabIndex: -1,
                        children: r
                    }))
                },
                Ce = function(e) {
                    var r = e.lines,
                        n = e.small,
                        i = e.text;
                    if (!i) return null;
                    var l = function(e) {
                            var i = e.children;
                            return (0, o.jsx)(ze, {
                                lines: r,
                                small: n,
                                children: i
                            })
                        },
                        t = {
                            component: f.WX,
                            props: {
                                variant: n ? "small" : "bold",
                                as: "div",
                                color: "text.heading"
                            }
                        };
                    return "string" === typeof i ? (0, o.jsx)(x.U, {
                        options: {
                            forceWrapper: !0,
                            wrapper: l,
                            overrides: {
                                a: ke,
                                h1: t,
                                h2: t,
                                h3: t,
                                h4: t,
                                h5: t,
                                h6: t
                            }
                        },
                        children: i
                    }) : (0, o.jsx)(l, {
                        children: i
                    })
                },
                ze = function(e) {
                    var r = e.children,
                        n = e.lines,
                        i = e.small,
                        l = (0, ee.q)("phoenix"),
                        t = (0, s.useRef)(null),
                        a = (0, s.useState)(!1),
                        d = a[0],
                        u = a[1],
                        m = (0, s.useState)(!1),
                        c = m[0],
                        b = m[1];
                    return (0, V.b)((function() {
                        t.current && b(t.current.scrollHeight > t.current.clientHeight)
                    }), []), (0, o.jsxs)(Ie, {
                        flexDirection: "column",
                        maxWidth: {
                            _: "100%",
                            sm: "80%",
                            lg: "60%",
                            xl: "900px"
                        },
                        children: [(0, o.jsx)(Se, {
                            as: "div",
                            lines: d ? void 0 : n,
                            ref: t,
                            size: "small",
                            weight: "regular",
                            whiteSpace: d ? void 0 : "nowrap",
                            children: r
                        }), c && (0, o.jsx)(Te, {
                            alignSelf: "flex-start",
                            children: (0, o.jsxs)(Q.k, {
                                onClick: function() {
                                    return u(!d)
                                },
                                children: [(0, o.jsx)(g.g, {
                                    whiteSpace: "nowrap",
                                    children: (0, o.jsx)(y.xv.Body, {
                                        as: "div",
                                        className: "styledPhoenixText",
                                        size: "small",
                                        weight: "regular",
                                        children: d ? l("info.seeLess", "See less") : l("info.seeMore", "See more")
                                    })
                                }), (0, o.jsx)(Ee, {
                                    size: i ? 16 : 20,
                                    value: d ? "expand_less" : "expand_more"
                                })]
                            })
                        })]
                    })
                },
                Ie = (0, u.ZP)(b.k).withConfig({
                    componentId: "sc-c2de28ea-4"
                })(se()),
                Te = (0, u.ZP)(g.g).withConfig({
                    componentId: "sc-c2de28ea-5"
                })(de(), (function(e) {
                    return (0, re.Um)({
                        variants: {
                            dark: {
                                color: "".concat(e.theme.colors.fog)
                            },
                            light: {
                                color: e.theme.colors.oil
                            }
                        }
                    })
                }), (function(e) {
                    return (0, re.Um)({
                        variants: {
                            dark: {
                                color: "".concat(e.theme.colors.fog)
                            },
                            light: {
                                color: e.theme.colors.oil
                            }
                        }
                    })
                }), (function(e) {
                    return (0, re.Um)({
                        variants: {
                            dark: {
                                color: (0, d.m4)(e.theme.colors.fog, .8)
                            },
                            light: {
                                color: (0, d.m4)(e.theme.colors.oil, .8)
                            }
                        }
                    })
                }), (function(e) {
                    return (0, re.Um)({
                        variants: {
                            dark: {
                                color: (0, d.m4)(e.theme.colors.fog, .6)
                            },
                            light: {
                                color: (0, d.m4)(e.theme.colors.oil, .6)
                            }
                        }
                    })
                })),
                Ee = (0, u.ZP)(m.J).attrs({
                    variant: "outlined"
                }).withConfig({
                    componentId: "sc-c2de28ea-6"
                })(ue()),
                Se = (0, u.ZP)(y.xv.Body).attrs({
                    as: "div"
                }).withConfig({
                    componentId: "sc-c2de28ea-7"
                })(ge(), (function(e) {
                    return "caption" === e.variant && (0, u.iv)(me())
                }), (function(e) {
                    return e.lines && (0, u.iv)(ce(), e.lines)
                }), (function(e) {
                    return (0, re.Um)({
                        variants: {
                            dark: {
                                color: "".concat(e.theme.colors.fog)
                            },
                            light: {
                                color: e.theme.colors.oil
                            }
                        }
                    })
                }))
        }
    }
]);
//# sourceMappingURL=36422-804e6c8b27bca97c.js.map