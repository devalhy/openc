"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [25897], {
        37098: function(n, e, t) {
            t.d(e, {
                p: function() {
                    return d
                }
            });
            var a = t(85034),
                i = t(70169),
                r = t(31373),
                l = t(24246),
                o = t(27378),
                u = t(50498),
                s = t.n(u),
                d = (t(73742), function(n) {
                    var e, t = n.className,
                        u = n.options,
                        d = n.onReady,
                        c = n.playbackId,
                        m = n.title,
                        g = n.onPlay,
                        f = (0, r.Z)(n, ["className", "options", "onReady", "playbackId", "title", "onPlay"]),
                        p = (0, o.useRef)(null),
                        v = (0, o.useRef)(null);
                    return (0, o.useEffect)((function() {
                        if (!v.current) {
                            var n = p.current;
                            if (!n) return;
                            v.current = s()(n, (0, i.Z)((0, a.Z)({}, u), {
                                plugins: {
                                    mux: {
                                        data: {
                                            video_title: m
                                        }
                                    }
                                }
                            }), (function() {
                                d && d(v.current)
                            }))
                        }
                    }), [u, p, d, m]), (0, o.useEffect)((function() {
                        return function() {
                            v.current && (v.current = null)
                        }
                    }), [v]), (0, l.jsx)("video", (0, i.Z)((0, a.Z)({}, f), {
                        className: "video-js vjs-big-play-centered ".concat(t),
                        poster: null !== (e = u.poster) && void 0 !== e ? e : "https://image.mux.com/".concat(c, "/thumbnail.png"),
                        ref: p,
                        onPlay: function() {
                            return null === g || void 0 === g ? void 0 : g(c)
                        },
                        children: (0, l.jsx)("source", {
                            src: c,
                            type: "video/mux"
                        })
                    }))
                })
        },
        69137: function(n, e, t) {
            t.d(e, {
                a: function() {
                    return Q
                },
                f: function() {
                    return G
                }
            });
            var a = t(31373),
                i = t(19989),
                r = t(24246),
                l = t(27378),
                o = t(57759),
                u = t(68525),
                s = t(4402),
                d = t(47892),
                c = t(85034),
                m = t(70169),
                g = t(90761);

            function f() {
                var n = (0, i.Z)(["\n  ", "\n"]);
                return f = function() {
                    return n
                }, n
            }
            var p = function(n) {
                    var e = n.height,
                        t = void 0 === e ? 24 : e,
                        i = n.width,
                        l = void 0 === i ? 24 : i,
                        o = (0, a.Z)(n, ["height", "width"]);
                    return (0, r.jsx)(v, (0, m.Z)((0, c.Z)({
                        height: t,
                        viewBox: "0 0 814 1000",
                        width: l,
                        xmlns: "http://www.w3.org/2000/svg"
                    }, o), {
                        children: (0, r.jsx)("path", {
                            d: "M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57-155.5-127C46.7 790.7 0 663 0 541.8c0-194.4 126.4-297.5 250.8-297.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z"
                        })
                    }))
                },
                v = d.ZP.svg.withConfig({
                    componentId: "sc-258ef14b-0"
                })(f(), (function(n) {
                    var e = n.theme;
                    return (0, g.Um)({
                        variants: {
                            light: {
                                fill: e.colors.blackPearl
                            },
                            dark: {
                                fill: e.colors.white
                            }
                        }
                    })
                }));

            function y() {
                var n = (0, i.Z)(["\n  ", "\n"]);
                return y = function() {
                    return n
                }, n
            }
            var h = function(n) {
                    var e = n.height,
                        t = void 0 === e ? 24 : e,
                        i = n.width,
                        l = void 0 === i ? 24 : i,
                        o = (0, a.Z)(n, ["height", "width"]);
                    return (0, r.jsx)(x, (0, m.Z)((0, c.Z)({
                        height: t,
                        viewBox: "0 0 210 210",
                        width: l,
                        xmlns: "http://www.w3.org/2000/svg"
                    }, o), {
                        children: (0, r.jsx)("path", {
                            d: "M0,105C0,47.103,47.103,0,105,0c23.383,0,45.515,7.523,64.004,21.756l-24.4,31.696C133.172,44.652,119.477,40,105,40 c-35.841,0-65,29.159-65,65s29.159,65,65,65c28.867,0,53.398-18.913,61.852-45H105V85h105v20c0,57.897-47.103,105-105,105 S0,162.897,0,105z"
                        })
                    }))
                },
                x = d.ZP.svg.withConfig({
                    componentId: "sc-955338ac-0"
                })(y(), (function(n) {
                    var e = n.theme;
                    return (0, g.Um)({
                        variants: {
                            light: {
                                fill: e.colors.blackPearl
                            },
                            dark: {
                                fill: e.colors.white
                            }
                        }
                    })
                }));

            function k() {
                var n = (0, i.Z)(["\n  ", "\n"]);
                return k = function() {
                    return n
                }, n
            }
            var T = function(n) {
                    var e = n.height,
                        t = void 0 === e ? 24 : e,
                        i = n.width,
                        l = void 0 === i ? 24 : i,
                        o = (0, a.Z)(n, ["height", "width"]);
                    return (0, r.jsxs)(b, (0, m.Z)((0, c.Z)({
                        height: t,
                        viewBox: "0 0 16.376 16.376",
                        width: l,
                        xmlns: "http://www.w3.org/2000/svg"
                    }, o), {
                        children: [(0, r.jsx)("path", {
                            d: "M16.376,6.059c0-0.3-0.215-0.544-0.478-0.544h-4.697v1.087h3.717L12.48,8.611l-1.279-1.048v1.379 l1.003,0.813c0.163,0.132,0.392,0.132,0.555-0.001l2.661-2.157v2.873h-4.219v1.087h4.697c0.263,0,0.478-0.243,0.478-0.544V6.541 c0-0.013-0.001-0.025-0.002-0.038c0.001-0.013,0.002-0.026,0.002-0.038C16.376,6.465,16.376,6.059,16.376,6.059z"
                        }), (0, r.jsx)("path", {
                            d: "M5.115,10.433c0.686,0,1.126-0.904,1.126-2.253c0-1.119-0.325-2.253-1.126-2.253 c-0.847,0-1.16,1.149-1.16,2.253C3.955,9.467,4.361,10.433,5.115,10.433z"
                        }), (0, r.jsx)("path", {
                            d: "M0,14.992l10.195,0.748V0.637L0,1.534V14.992z M5.162,4.272c1.741,0,2.902,1.578,2.902,3.831 c0,2.743-1.475,4-2.995,4c-1.66,0-2.937-1.44-2.937-3.861C2.133,5.819,3.34,4.272,5.162,4.272z"
                        })]
                    }))
                },
                b = d.ZP.svg.withConfig({
                    componentId: "sc-ff84d82b-0"
                })(k(), (function(n) {
                    var e = n.theme;
                    return (0, g.Um)({
                        variants: {
                            light: {
                                fill: e.colors.blackPearl
                            },
                            dark: {
                                fill: e.colors.white
                            }
                        }
                    })
                }));

            function C() {
                var n = (0, i.Z)(["\n  ", "\n"]);
                return C = function() {
                    return n
                }, n
            }
            var S = function(n) {
                    var e = n.height,
                        t = void 0 === e ? 24 : e,
                        i = n.width,
                        l = void 0 === i ? 24 : i,
                        o = (0, a.Z)(n, ["height", "width"]);
                    return (0, r.jsxs)(Z, (0, m.Z)((0, c.Z)({
                        height: t,
                        viewBox: "0 0 32 24",
                        width: l,
                        xmlns: "http://www.w3.org/2000/svg"
                    }, o), {
                        children: [(0, r.jsx)("path", {
                            clipRule: "evenodd",
                            d: "M23.7362 11.9985C23.7362 5.47853 18.5962 0.50016 11.8681 0.50016V0.5C5.13997 0.5 0 5.47853 0 11.9985C0 18.5183 5.13997 23.4988 11.8681 23.4988C18.5962 23.4988 23.7362 18.5185 23.7362 11.9985ZM11.4713 6.86237C11.4148 7.25948 11.3857 7.65644 11.3585 8.05548H11.3583C10.5331 8.1118 9.71003 8.16828 8.88668 8.25388C9.50966 9.01853 10.1326 9.7899 10.7555 10.5613C11.382 11.3371 12.0085 12.113 12.6351 12.882C13.2437 12.3579 13.8528 11.8411 14.4618 11.3243C15.074 10.8048 15.6863 10.2852 16.298 9.75835C16.2427 9.75663 16.1874 9.75492 16.132 9.7532C15.251 9.7259 14.3683 9.69854 13.4876 9.64555V8.47964C15.8921 8.42603 18.272 8.39866 20.6741 8.37104L21.0388 8.36684V9.75851C20.1682 9.84322 19.3245 9.89926 18.4829 9.95515L18.4564 9.95691C16.8098 11.4342 15.1612 12.9092 13.4876 14.3865C13.4727 14.9667 13.4583 15.5541 13.4439 16.141C13.4301 16.7038 13.4163 17.2662 13.402 17.8217C13.458 17.8234 13.514 17.825 13.57 17.8267C14.4793 17.854 15.3886 17.8814 16.298 17.9364V18.9853H7.3822V17.9364C7.86613 17.8934 8.35001 17.8578 8.83387 17.8222C9.31532 17.7868 9.79676 17.7514 10.2782 17.7087V14.4994C8.54604 12.3995 6.84317 10.3267 5.1403 8.25388C4.68463 8.22565 4.23579 8.19001 3.78721 8.1544C3.34096 8.11897 2.89496 8.08357 2.44271 8.05548V6.86237H11.4713Z",
                            fillRule: "evenodd"
                        }), (0, r.jsx)("path", {
                            d: "M32 1.63879C29.6997 1.52407 27.4283 1.41127 25.1572 1.29639C25.0423 6.72052 24.9295 12.1719 24.8167 17.596C25.8947 17.7089 27.0023 17.8219 28.0803 17.9366C29.3864 12.4854 30.6941 7.06116 32.0002 1.63879H32ZM24.5032 23.4716H28.421V20.2076C27.0023 20.0931 25.5834 19.9801 24.1626 19.8673C24.2754 21.0875 24.3904 22.2806 24.5032 23.4716Z"
                        })]
                    }))
                },
                Z = d.ZP.svg.withConfig({
                    componentId: "sc-d99f1f2c-0"
                })(C(), (function(n) {
                    var e = n.theme;
                    return (0, g.Um)({
                        variants: {
                            light: {
                                fill: e.colors.blackPearl
                            },
                            dark: {
                                fill: e.colors.white
                            }
                        }
                    })
                })),
                w = t(96150),
                F = t(83989),
                K = t(19378),
                D = t(43660),
                I = t(48599),
                j = t(33303),
                M = t(36494),
                L = t(6723),
                P = t(4798),
                U = t(67286),
                E = t(23176),
                _ = t(94091),
                z = t(77366);

            function A() {
                var n = (0, i.Z)(["\n  margin-top: 16px;\n  margin-bottom: 8px;\n"]);
                return A = function() {
                    return n
                }, n
            }

            function V() {
                var n = (0, i.Z)(["\n  margin-bottom: 32px;\n"]);
                return V = function() {
                    return n
                }, n
            }

            function R() {
                var n = (0, i.Z)(["\n  cursor: pointer;\n  color: ", ";\n  :hover {\n    color: ", ";\n  }\n"]);
                return R = function() {
                    return n
                }, n
            }

            function B() {
                var n = (0, i.Z)(["\n  margin-top: 62px;\n  margin-bottom: 32px;\n  text-align: center;\n"]);
                return B = function() {
                    return n
                }, n
            }

            function N() {
                var n = (0, i.Z)(["\n  width: 100%;\n  cursor: pointer;\n  margin-left: 16px;\n"]);
                return N = function() {
                    return n
                }, n
            }

            function O() {
                var n = (0, i.Z)(["\n  & + & {\n    margin-top: 16px;\n  }\n"]);
                return O = function() {
                    return n
                }, n
            }

            function q() {
                var n = (0, i.Z)(["\n  width: 100%;\n"]);
                return q = function() {
                    return n
                }, n
            }
            var Q = function(n) {
                    var e = n.trigger,
                        a = n.dataKey,
                        i = (0, L.q)("drop"),
                        o = (0, s.useFragment)(t(27609), a),
                        u = o.drop,
                        d = (0, l.useState)(),
                        c = d[0],
                        m = d[1],
                        g = (0, M.j)(),
                        f = g.isStageActive,
                        p = g.isPastStage;
                    (0, l.useEffect)((function() {
                        (null === u || void 0 === u ? void 0 : u.ctaStage.relayId) && !f({
                            startTime: u.ctaStage.startTime,
                            endTime: u.ctaStage.endTime
                        }) && m(u.ctaStage.relayId)
                    }), [null === u || void 0 === u ? void 0 : u.ctaStage, f]);
                    var v = G();
                    return u ? (0, r.jsx)(K.u_, {
                        size: "medium",
                        trigger: function(n) {
                            return e((function() {
                                (0, P.AA)({
                                    collectionSlug: o.slug
                                }), n()
                            }))
                        },
                        children: (0, r.jsx)(j.B, {
                            children: (0, r.jsxs)(tn, {
                                children: [(0, r.jsx)(J, {
                                    paddingX: {
                                        _: "0",
                                        lg: "24px"
                                    },
                                    children: (0, r.jsx)(_.l.Heading, {
                                        size: "mediumOnModal",
                                        children: i("addToCalendar.title", "Add a reminder to your calendar")
                                    })
                                }), (0, r.jsx)(W, {
                                    children: u.stages.map((function(n) {
                                        return (0, r.jsxs)(en, {
                                            children: [(0, r.jsx)(D.E, {
                                                checked: n.relayId === c,
                                                disabled: p({
                                                    endTime: n.endTime
                                                }) || f({
                                                    startTime: n.startTime,
                                                    endTime: n.endTime
                                                }),
                                                id: n.relayId,
                                                name: n.relayId,
                                                onChange: function() {
                                                    return m(n.relayId)
                                                }
                                            }), (0, r.jsx)(nn, {
                                                htmlFor: n.relayId,
                                                children: (0, r.jsx)(z.y, {
                                                    showEligibility: !1,
                                                    stageKey: n
                                                })
                                            })]
                                        }, n.relayId)
                                    }))
                                }), (0, r.jsx)(_.l.Body, {
                                    size: "medium",
                                    weight: "semibold",
                                    children: i("addToCalendar.subtitle", "Choose calendar")
                                }), (0, r.jsx)(Y, {
                                    children: v.map((function(n) {
                                        return (0, r.jsxs)(w.k, {
                                            alignItems: "center",
                                            height: "48px",
                                            justifyContent: "space-between",
                                            children: [(0, r.jsxs)(w.k, {
                                                children: [n.icon, (0, r.jsx)(_.l.Body, {
                                                    marginLeft: "16px",
                                                    size: "medium",
                                                    children: n.name
                                                })]
                                            }), (0, r.jsx)(I.k, {
                                                onClick: function() {
                                                    var e = u.stages.find((function(n) {
                                                        return n.relayId === c
                                                    }));
                                                    e && ((0, P.jU)({
                                                        stage: e.relayId,
                                                        collectionSlug: o.slug
                                                    }), n.add({
                                                        collection: o,
                                                        stage: e
                                                    }))
                                                },
                                                children: (0, r.jsx)(X, {
                                                    size: "medium",
                                                    weight: "semibold",
                                                    children: i("addToCalendar.callToAction", "Add")
                                                })
                                            })]
                                        }, n.name)
                                    }))
                                })]
                            })
                        })
                    }) : null
                },
                $ = (0, U.A)(t(68029), (function(n) {
                    return n
                })),
                H = (0, U.A)(t(67871), (function(n) {
                    return n
                })),
                G = function() {
                    var n = function() {
                        var n = (0, L.q)("drop");
                        return function(e) {
                            var t = e.collection,
                                i = e.stage,
                                r = $(t),
                                l = r.drop,
                                u = (0, a.Z)(r, ["drop"]),
                                s = (null === l || void 0 === l ? void 0 : l.name) || n("addToCalendar.event.dropDefaultName", "Unnamed drop"),
                                d = H(i),
                                c = d.label,
                                m = d.startTime,
                                g = d.endTime,
                                f = "https://".concat(window.location.host).concat((0, E.e9)(u)),
                                p = {
                                    title: n("addToCalendar.event.title", "{{collectionName}} {{stageLabel}} starts now", {
                                        collectionName: s,
                                        stageLabel: c
                                    }, {
                                        forceString: !0
                                    }),
                                    description: n("addToCalendar.event.description", "Don't miss out - mint now at <a href='{{dropUrl}}'>{{dropUrl}}</a><br><br>", {
                                        dropUrl: f
                                    }, {
                                        forceString: !0
                                    }),
                                    start: (0, o.Z)(m)
                                };
                            return g && (p.end = (0, o.Z)(g)), p
                        }
                    }();
                    return [{
                        icon: (0, r.jsx)(h, {}),
                        name: "Google Calendar",
                        add: function(e) {
                            var t = n(e),
                                a = new u.GoogleCalendar(t);
                            window.open(a.render(), "_blank")
                        }
                    }, {
                        icon: (0, r.jsx)(p, {}),
                        name: "iCal",
                        add: function(e) {
                            var t = n(e);
                            new u.ICalendar(t).download("OpenSeaDropReminder.ics")
                        }
                    }, {
                        icon: (0, r.jsx)(T, {}),
                        name: "Outlook",
                        add: function(e) {
                            var t = n(e),
                                a = new u.OutlookCalendar(t);
                            window.open(a.render(), "_blank")
                        }
                    }, {
                        icon: (0, r.jsx)(S, {}),
                        name: "Yahoo Mail",
                        add: function(e) {
                            var t = n(e),
                                a = new u.YahooCalendar(t);
                            window.open(a.render(), "_blank")
                        }
                    }]
                },
                Y = (0, d.ZP)(F.t).withConfig({
                    componentId: "sc-dcedefda-0"
                })(A()),
                W = (0, d.ZP)(F.t).withConfig({
                    componentId: "sc-dcedefda-1"
                })(V()),
                X = (0, d.ZP)(_.l.Body).withConfig({
                    componentId: "sc-dcedefda-2"
                })(R(), (function(n) {
                    return n.theme.colors.seaBlue
                }), (function(n) {
                    return n.theme.colors.darkSeaBlue
                })),
                J = (0, d.ZP)(F.t).withConfig({
                    componentId: "sc-dcedefda-3"
                })(B()),
                nn = d.ZP.label.withConfig({
                    componentId: "sc-dcedefda-4"
                })(N()),
                en = (0, d.ZP)(w.k).withConfig({
                    componentId: "sc-dcedefda-5"
                })(O()),
                tn = (0, d.ZP)(K.u_.Body).withConfig({
                    componentId: "sc-dcedefda-6"
                })(q())
        },
        14381: function(n, e, t) {
            t.d(e, {
                c: function() {
                    return X
                }
            });
            var a = t(19989),
                i = t(24246),
                r = t(27378),
                l = t(57759),
                o = t(50657),
                u = t(4402),
                s = t(47892),
                d = t(76449),
                c = t(377),
                m = t(72363),
                g = t(316),
                f = t(6723),
                p = t(90761);

            function v() {
                var n = (0, a.Z)(["\n      min-height: 60px;\n    "]);
                return v = function() {
                    return n
                }, n
            }

            function y() {
                var n = (0, a.Z)(["\n  min-height: 44px;\n  ", "\n"]);
                return y = function() {
                    return n
                }, n
            }

            function h() {
                var n = (0, a.Z)(["\n      width: 60px;\n      border-radius: ", ";\n    "]);
                return h = function() {
                    return n
                }, n
            }

            function x() {
                var n = (0, a.Z)(["\n  ", "\n  border-radius: 8px;\n  width: 44px;\n\n  ", "\n\n  & + & {\n    margin-left: 8px;\n  }\n\n  ", "\n"]);
                return x = function() {
                    return n
                }, n
            }

            function k() {
                var n = (0, a.Z)(["\n      font-size: 16px;\n      line-height: 24px;\n    "]);
                return k = function() {
                    return n
                }, n
            }

            function T() {
                var n = (0, a.Z)(["\n  letter-spacing: 2px;\n  text-indent: 2px;\n\n  ", "\n"]);
                return T = function() {
                    return n
                }, n
            }

            function b() {
                var n = (0, a.Z)(["\n      font-size: 12px;\n      line-height: 20px;\n    "]);
                return b = function() {
                    return n
                }, n
            }

            function C() {
                var n = (0, a.Z)(["\n  font-size: 8px;\n  line-height: 12px;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  text-indent: 0.1em;\n\n  ", "\n"]);
                return C = function() {
                    return n
                }, n
            }
            var S = function(n) {
                    var e = n.interval,
                        t = n.value,
                        a = (0, f.q)("components"),
                        r = {
                            day: a("countdownTimer.day", {
                                0: "days",
                                one: "day",
                                other: "days"
                            }, {
                                count: t
                            }, {
                                forceString: !0
                            }),
                            hour: a("countdownTimer.hr", {
                                0: "hrs",
                                one: "hr",
                                other: "hrs"
                            }, {
                                count: t
                            }, {
                                forceString: !0
                            }),
                            min: a("countdownTimer.min", {
                                0: "mins",
                                one: "min",
                                other: "mins"
                            }, {
                                count: t
                            }, {
                                forceString: !0
                            }),
                            sec: a("countdownTimer.sec", {
                                0: "secs",
                                one: "sec",
                                other: "secs"
                            }, {
                                count: t
                            }, {
                                forceString: !0
                            })
                        }[e];
                    return (0, i.jsxs)(w, {
                        children: [(0, i.jsx)(F, {
                            children: t
                        }), (0, i.jsx)(K, {
                            children: r
                        })]
                    })
                },
                Z = (0, s.iv)(y(), (0, m.BC)({
                    lg: (0, s.iv)(v())
                })),
                w = (0, s.ZP)(c._).withConfig({
                    componentId: "sc-86307f2e-0"
                })(x(), Z, (0, m.BC)({
                    lg: (0, s.iv)(h(), (function(n) {
                        return n.theme.borderRadius.large
                    }))
                }), (function(n) {
                    var e = n.theme;
                    return (0, p.Um)({
                        variants: {
                            light: {
                                backgroundColor: (0, d.m4)(e.colors.fog, .5)
                            },
                            dark: {
                                backgroundColor: e.colors.oil
                            }
                        }
                    })
                })),
                F = (0, s.ZP)(g.xv.Body).attrs({
                    size: "tiny",
                    weight: "semibold"
                }).withConfig({
                    componentId: "sc-86307f2e-1"
                })(T(), (0, m.BC)({
                    lg: (0, s.iv)(k())
                })),
                K = (0, s.ZP)(g.xv.Body).attrs({
                    size: "tiny",
                    weight: "semibold"
                }).withConfig({
                    componentId: "sc-86307f2e-2"
                })(C(), (0, m.BC)({
                    lg: (0, s.iv)(b())
                })),
                D = t(53585),
                I = t(58993),
                j = t(34654),
                M = (t(59809), t(29193));

            function L() {
                var n = (0, a.Z)(["\n          background-color: ", ";\n        "]);
                return L = function() {
                    return n
                }, n
            }

            function P() {
                var n = (0, a.Z)(["\n      animation: pulse 3s ease infinite;\n      @keyframes pulse {\n        0% {\n          box-shadow: 0 0 0 0 ", ";\n        }\n        70% {\n          box-shadow: 0 0 0 7px ", ";\n        }\n        100% {\n          box-shadow: 0 0 0 0 ", ";\n        }\n      }\n    "]);
                return P = function() {
                    return n
                }, n
            }

            function U() {
                var n = (0, a.Z)(["\n      margin-right: 12px;\n      width: 12px;\n      height: 12px;\n    "]);
                return U = function() {
                    return n
                }, n
            }

            function E() {
                var n = (0, a.Z)(["\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  margin-right: 12px;\n  ", ";\n\n  ", "\n\n  ", "\n"]);
                return E = function() {
                    return n
                }, n
            }
            var _ = (0, s.ZP)(D.g).withConfig({
                    componentId: "sc-bb243bcf-0"
                })(E(), (function(n) {
                    var e = n.$isActive,
                        t = n.theme;
                    return e ? (0, s.iv)(L(), t.colors.seaGrass) : (0, p.Um)({
                        variants: {
                            dark: {
                                backgroundColor: t.colors.white
                            },
                            light: {
                                backgroundColor: t.colors.white
                            }
                        }
                    })
                }), (function(n) {
                    return n.$isActive && (0, s.iv)(P(), (0, d.m4)(n.theme.colors.seaGrass, 1), (0, d.m4)(n.theme.colors.seaGrass, 0), (0, d.m4)(n.theme.colors.seaGrass, 0))
                }), (0, m.BC)({
                    lg: (0, s.iv)(U())
                })),
                z = t(94091),
                A = t(85034),
                V = t(31373),
                R = t(26992),
                B = t(63044),
                N = t(24140),
                O = t(96150);

            function q() {
                var n = (0, a.Z)(["\n        ", "\n\n        span {\n          color: white;\n        }\n      "]);
                return q = function() {
                    return n
                }, n
            }

            function Q() {
                var n = (0, a.Z)(["\n  & > div {\n    ", "\n  }\n"]);
                return Q = function() {
                    return n
                }, n
            }
            var $ = function(n) {
                    var e = n.end,
                        t = n.translucent,
                        a = function() {
                            var n = Date.now();
                            return (0, R.Z)(e, n) ? (0, B.Z)({
                                start: n,
                                end: e
                            }) : {
                                days: 0,
                                hours: 0,
                                minutes: 0,
                                seconds: 0
                            }
                        },
                        l = (0, r.useState)(a()),
                        o = l[0],
                        u = l[1];
                    (0, N.Z)((function() {
                        return u(a())
                    }), 1e3);
                    var s = o.days,
                        d = void 0 === s ? 0 : s,
                        c = o.hours,
                        m = void 0 === c ? 0 : c,
                        g = o.minutes,
                        f = void 0 === g ? 0 : g,
                        p = o.seconds,
                        v = void 0 === p ? 0 : p;
                    return (0, i.jsxs)(H, {
                        $translucent: t,
                        children: [(0, i.jsx)(S, {
                            interval: "day",
                            value: d
                        }), (0, i.jsx)(S, {
                            interval: "hour",
                            value: m
                        }), (0, i.jsx)(S, {
                            interval: "min",
                            value: f
                        }), (0, i.jsx)(S, {
                            interval: "sec",
                            value: v
                        })]
                    })
                },
                H = (0, s.ZP)(O.k).withConfig({
                    componentId: "sc-73e8e414-0"
                })(Q(), (function(n) {
                    return n.$translucent && (0, s.iv)(q(), j.Gn)
                })),
                G = function(n) {
                    var e = n.dataKey,
                        a = (0, V.Z)(n, ["dataKey"]),
                        r = (0, u.useFragment)(t(96343), e);
                    return r ? (0, i.jsx)($, (0, A.Z)({
                        end: (0, l.Z)(r.startTime)
                    }, a)) : null
                };

            function Y() {
                var n = (0, a.Z)(["\n      letter-spacing: 2px;\n    "]);
                return Y = function() {
                    return n
                }, n
            }

            function W() {
                var n = (0, a.Z)(["\n  ", "\n  color: white;\n  display: block;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  ", "\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  ", "\n"]);
                return W = function() {
                    return n
                }, n
            }
            var X = function(n) {
                    var e, a, r = n.dataKey,
                        s = (0, f.q)("drop"),
                        d = (0, u.useFragment)(t(1966), r),
                        c = (0, I.Aw)(null !== (a = null === d || void 0 === d ? void 0 : d.drop) && void 0 !== a ? a : null);
                    if (!(null === d || void 0 === d || null === (e = d.drop) || void 0 === e ? void 0 : e.ctaStage)) return null;
                    return (0, i.jsx)(D.g, {
                        children: function() {
                            var n;
                            if (!(null === (n = d.drop) || void 0 === n ? void 0 : n.ctaStage)) return null;
                            switch (c) {
                                case I.iL.ENDED:
                                    return (0, i.jsxs)(J, {
                                        children: [(0, i.jsx)(_, {}), s("heroStageText.dropEnded", "Mint ended")]
                                    });
                                case I.iL.MINTED_OUT:
                                    return (0, i.jsxs)(J, {
                                        children: [(0, i.jsx)(_, {}), s("heroStageText.dropSoldOut", "Mint sold out")]
                                    });
                                case I.iL.ACTIVE:
                                    return (0, i.jsxs)(J, {
                                        children: [(0, i.jsx)(_, {
                                            $isActive: !0
                                        }), s("heroStageText.dropActive", "Minting now")]
                                    });
                                case I.iL.MINTING_SOON:
                                    return (0, i.jsx)(G, {
                                        dataKey: d.drop.ctaStage,
                                        translucent: !0
                                    });
                                case I.iL.UPCOMING:
                                    return (0, i.jsx)(J, {
                                        children: (0, o.formatInTimeZone)((0, l.Z)(d.drop.ctaStage.startTime), Intl.DateTimeFormat().resolvedOptions().timeZone, "MMM d, ha zzz")
                                    })
                            }
                            return new M.S(c)
                        }()
                    })
                },
                J = (0, s.ZP)(z.l.Body).attrs({
                    size: "medium",
                    weight: "semibold"
                }).withConfig({
                    componentId: "sc-b34f496e-0"
                })(W(), Z, j.Lu, (0, m.BC)({
                    lg: (0, s.iv)(Y())
                }))
        },
        22480: function(n, e, t) {
            t.d(e, {
                X: function() {
                    return y
                }
            });
            var a = t(19989),
                i = t(24246),
                r = (t(27378), t(4402)),
                l = t(47892),
                o = t(37098),
                u = t(39283),
                s = t(72363),
                d = (t(59809), t(20807));

            function c() {
                var n = (0, a.Z)(["\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  backdrop-filter: blur(20px);\n  background-color: rgba(0, 0, 0, 0.6);\n"]);
                return c = function() {
                    return n
                }, n
            }

            function m() {
                var n = (0, a.Z)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n"]);
                return m = function() {
                    return n
                }, n
            }

            function g() {
                var n = (0, a.Z)(["\n  ", ";\n  height: 100%;\n  min-width: 100%;\n  padding-top: 0;\n\n  /* 16:9 */\n  width: 177.77777778vh; /* 100 * 16 / 9 */\n  min-height: 56.25vw; /*100 * 9 / 16 */\n"]);
                return g = function() {
                    return n
                }, n
            }

            function f() {
                var n = (0, a.Z)(["\n  ", ";\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n"]);
                return f = function() {
                    return n
                }, n
            }

            function p() {
                var n = (0, a.Z)(["\n  ", ";\n  max-width: none;\n"]);
                return p = function() {
                    return n
                }, n
            }

            function v() {
                var n = (0, a.Z)(["\n  &&& {\n    max-width: none;\n    ", ";\n\n    video {\n      ", ";\n      min-height: 100%;\n    }\n  }\n"]);
                return v = function() {
                    return n
                }, n
            }
            var y = function(n) {
                    var e = n.dataKey,
                        a = n.title,
                        l = (0, r.useFragment)(t(62026), e);
                    return (null === l || void 0 === l ? void 0 : l.heroVideoUrl) ? (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(s.pU, {
                            lessThan: "md",
                            children: (0, i.jsx)(u.E, {
                                alt: "",
                                layout: "fill",
                                objectFit: "cover",
                                objectPosition: "center",
                                priority: !0,
                                src: (0, d.tg)(l.mobileBannerUrl, {
                                    width: 1200
                                }),
                                unoptimized: !0
                            })
                        }), (0, i.jsx)(s.pU, {
                            greaterThanOrEqual: "md",
                            children: (0, i.jsx)(u.E, {
                                alt: "",
                                layout: "fill",
                                objectFit: "cover",
                                objectPosition: "center",
                                priority: !0,
                                src: (0, d.tg)(l.desktopBannerUrl, {
                                    width: 2560
                                }),
                                unoptimized: !0
                            })
                        }), (0, i.jsx)(h, {}), (0, i.jsx)(T, {
                            children: (0, d.jK)(l.heroVideoUrl) ? (0, i.jsx)(b, {
                                autoPlay: !0,
                                controls: !1,
                                loop: !0,
                                muted: !0,
                                playsInline: !0,
                                children: (0, i.jsx)("source", {
                                    src: l.heroVideoUrl,
                                    type: "video/mp4"
                                })
                            }) : (0, i.jsx)(C, {
                                autoPlay: !0,
                                options: {
                                    aspectRatio: "16:9",
                                    controls: !1,
                                    fluid: !1,
                                    loop: !0,
                                    muted: !0,
                                    autoplay: !0,
                                    normalizeAutoplay: !0
                                },
                                playbackId: l.heroVideoUrl,
                                playsInline: !0,
                                title: a,
                                onReady: function(n) {
                                    return n.play()
                                }
                            })
                        })]
                    }) : null
                },
                h = l.ZP.div.withConfig({
                    componentId: "sc-bd8949c1-0"
                })(c()),
                x = (0, l.iv)(m()),
                k = (0, l.iv)(g(), x),
                T = l.ZP.div.withConfig({
                    componentId: "sc-bd8949c1-1"
                })(f(), x),
                b = l.ZP.video.withConfig({
                    componentId: "sc-bd8949c1-2"
                })(p(), k),
                C = (0, l.ZP)(o.p).withConfig({
                    componentId: "sc-bd8949c1-3"
                })(v(), k, k)
        },
        78713: function(n, e, t) {
            t.d(e, {
                n: function() {
                    return vn
                }
            });
            var a = t(23842),
                i = t(35230),
                r = t.n(i),
                l = t(24246),
                o = t(27378),
                u = t(38008),
                s = t(87481),
                d = t(76225),
                c = t(4798),
                m = t(85034),
                g = t(70169),
                f = t(19989),
                p = t(93451),
                v = t(4402),
                y = t(47892),
                h = t(83112),
                x = t(53585),
                k = t(96150),
                T = t(72363),
                b = t(19378),
                C = t(13601),
                S = t(43660),
                Z = t(33303),
                w = t(36494),
                F = t(48696),
                K = t(95601),
                D = t(79790),
                I = t(6723),
                j = (t(59809), t(97133)),
                M = t(94091),
                L = t(77366),
                P = t(76449),
                U = t(71240),
                E = t(2093),
                _ = t(72686),
                z = t(56864),
                A = t(90761);

            function V() {
                var n = (0, f.Z)(["\n  ", "\n"]);
                return V = function() {
                    return n
                }, n
            }
            var R = function() {
                    var n, e, a, i, r = (0, I.q)("drop"),
                        u = (0, s.b)().wallet,
                        d = (0, p.Gc)(),
                        c = d.formState,
                        m = d.control,
                        g = d.setValue,
                        f = null === (e = (0, v.useLazyLoadQuery)(t(50687), {
                            identity: null !== (i = null === (n = u.activeAccount) || void 0 === n ? void 0 : n.address) && void 0 !== i ? i : ""
                        }, {
                            fetchPolicy: "store-and-network"
                        }).getAccount.user) || void 0 === e ? void 0 : e.email;
                    return (0, o.useEffect)((function() {
                        f && g("email", f)
                    }), [f, g]), (0, l.jsx)(U.N, {
                        error: null === (a = c.errors.email) || void 0 === a ? void 0 : a.message,
                        hideLabel: !0,
                        label: r("reminderEmailInput.label", "Email address"),
                        children: (0, l.jsx)(p.Qr, {
                            control: m,
                            defaultValue: null !== f && void 0 !== f ? f : "",
                            name: "email",
                            render: function(n) {
                                var e = n.field;
                                return (0, l.jsx)(N, {
                                    disabled: !!f,
                                    id: e.name,
                                    name: e.name,
                                    placeholder: r("reminderEmailInput.placeholder", "Enter email address"),
                                    type: "email",
                                    value: e.value,
                                    onChange: e.onChange
                                })
                            },
                            rules: {
                                required: r("reminderEmailInput.error", "Enter a valid email address."),
                                pattern: z.hg
                            }
                        })
                    })
                },
                B = function() {
                    return (0, l.jsx)(o.Suspense, {
                        fallback: (0, l.jsx)(_.O.Row, {
                            height: "48px",
                            width: "100%"
                        }),
                        children: (0, l.jsx)(R, {})
                    })
                },
                N = (0, y.ZP)(E.II).withConfig({
                    componentId: "sc-c5042b60-0"
                })(V(), (function(n) {
                    return n.disabled ? (0, A.Um)({
                        variants: {
                            light: {
                                backgroundColor: (0, P.m4)(n.theme.colors.fog, .5),
                                opacity: 1,
                                "input:disabled": {
                                    color: "darkGray"
                                }
                            },
                            dark: {
                                backgroundColor: n.theme.colors.oil,
                                opacity: 1,
                                "input:disabled": {
                                    color: "gray"
                                }
                            }
                        }
                    }) : ""
                })),
                O = t(1569),
                q = t(377),
                Q = t(39283),
                $ = t(48599),
                H = t(70884),
                G = t(69137);

            function Y() {
                var n = (0, f.Z)(["\n  align-items: center;\n  gap: 16px;\n  margin-top: 16px;\n  margin-bottom: 24px;\n"]);
                return Y = function() {
                    return n
                }, n
            }

            function W() {
                var n = (0, f.Z)(["\n  cursor: pointer;\n"]);
                return W = function() {
                    return n
                }, n
            }
            var X = function(n) {
                    var e, i = n.collectionDataKey,
                        o = n.userDataKey,
                        u = n.onClose,
                        d = (0, I.q)("drop"),
                        c = (0, v.useFragment)(t(92554), i),
                        m = (0, s.b)().mutate,
                        g = (0, D.e)(),
                        f = g.attempt,
                        p = g.showSuccessMessage,
                        y = (0, v.useFragment)(t(68945), o),
                        h = (0, w.j)().collectionSlug,
                        T = function() {
                            var n = (0, a.Z)(r().mark((function n() {
                                return r().wrap((function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            return n.next = 2, f((0, a.Z)(r().mark((function n() {
                                                return r().wrap((function(n) {
                                                    for (;;) switch (n.prev = n.next) {
                                                        case 0:
                                                            return n.next = 2, m(t(87216), {
                                                                input: {
                                                                    collection: h,
                                                                    dropStages: [],
                                                                    email: null === y || void 0 === y ? void 0 : y.email
                                                                }
                                                            }, {
                                                                updater: function(n) {
                                                                    var e, t = !0,
                                                                        a = !1,
                                                                        i = void 0;
                                                                    try {
                                                                        for (var r, l = ((null === c || void 0 === c || null === (e = c.drop) || void 0 === e ? void 0 : e.stages) || [])[Symbol.iterator](); !(t = (r = l.next()).done); t = !0) {
                                                                            var o = r.value,
                                                                                u = n.get(o.relayId);
                                                                            null === u || void 0 === u || u.setValue(!1, "reminderEnabled")
                                                                        }
                                                                    } catch (s) {
                                                                        a = !0, i = s
                                                                    } finally {
                                                                        try {
                                                                            t || null == l.return || l.return()
                                                                        } finally {
                                                                            if (a) throw i
                                                                        }
                                                                    }
                                                                }
                                                            });
                                                        case 2:
                                                        case "end":
                                                            return n.stop()
                                                    }
                                                }), n)
                                            }))));
                                        case 2:
                                            p(d("reminderConfirmationModal.unsuscribed", "Unsubscribed from reminders.")), u();
                                        case 4:
                                        case "end":
                                            return n.stop()
                                    }
                                }), n)
                            })));
                            return function() {
                                return n.apply(this, arguments)
                            }
                        }(),
                        C = (0, G.f)(),
                        S = (0, l.jsx)(nn, {
                            onClick: T,
                            children: d("reminderConfirmationModal.unsubscribeButton", "Unsubscribe")
                        });
                    return (0, l.jsx)(b.u_.Body, {
                        children: (0, l.jsxs)(q._, {
                            paddingBottom: "24px",
                            paddingX: {
                                _: 0,
                                lg: "24px"
                            },
                            children: [(0, l.jsx)(x.g, {
                                borderRadius: "12px",
                                height: "200px",
                                marginBottom: "32px",
                                marginTop: "92px",
                                overflow: "hidden",
                                position: "relative",
                                width: "200px",
                                children: (0, l.jsx)(Q.E, {
                                    alt: null === c || void 0 === c ? void 0 : c.name,
                                    layout: "fill",
                                    src: null !== (e = null === c || void 0 === c ? void 0 : c.imageUrl) && void 0 !== e ? e : H.WF,
                                    width: 200
                                })
                            }), (0, l.jsx)(M.l.Heading, {
                                size: "mediumOnModal",
                                children: (null === y || void 0 === y ? void 0 : y.emailVerified) ? d("reminderConfirmationModal.titleHavingEmailVerified", "You're signed up for email reminders") : d("reminderConfirmationModal.titleHavingEmailNoVerified", "Verify your email address")
                            }), (0, l.jsx)(x.g, {
                                marginTop: "12px",
                                children: (0, l.jsx)(M.l.Body, {
                                    as: "p",
                                    size: "medium",
                                    textAlign: "center",
                                    children: (null === y || void 0 === y ? void 0 : y.emailVerified) ? d("reminderConfirmationModal.descriptionHavingEmailVerified", "A confirmation has been sent to {{userEmail}}. Email reminders will be sent to this address. {{unsuscribeLink}}", {
                                        userEmail: y.email,
                                        unsuscribeLink: S
                                    }) : d("reminderConfirmationModal.descriptionHavingEmailNoVerified", "A confirmation email has been sent to {{userEmail}}. Once you verify your email address, you\u2019ll start getting reminders. {{unsuscribeLink}}", {
                                        userEmail: null === y || void 0 === y ? void 0 : y.email,
                                        unsuscribeLink: S
                                    })
                                })
                            }), (0, l.jsxs)(x.g, {
                                marginTop: "24px",
                                children: [(0, l.jsx)(M.l.Body, {
                                    as: "p",
                                    size: "medium",
                                    textAlign: "center",
                                    weight: "semibold",
                                    children: d("reminderConfirmationModal.addToCalendarButton", "Add to calendar")
                                }), (0, l.jsx)(J, {
                                    children: C.map((function(n) {
                                        return (0, l.jsx)(k.k, {
                                            flex: 1,
                                            children: (0, l.jsx)($.k, {
                                                onClick: function() {
                                                    var e, t = null === c || void 0 === c || null === (e = c.drop) || void 0 === e ? void 0 : e.stages.find((function(n) {
                                                        return n.reminderEnabled
                                                    }));
                                                    t && c && n.add({
                                                        collection: c,
                                                        stage: t
                                                    })
                                                },
                                                children: n.icon
                                            })
                                        }, n.name)
                                    }))
                                })]
                            })]
                        })
                    })
                },
                J = (0, y.ZP)(k.k).withConfig({
                    componentId: "sc-2c2b20f8-0"
                })(Y()),
                nn = (0, y.ZP)(O.r).withConfig({
                    componentId: "sc-2c2b20f8-1"
                })(W());

            function en() {
                var n = (0, f.Z)(["\n      padding-left: 24px;\n      padding-right: 24px;\n    "]);
                return en = function() {
                    return n
                }, n
            }

            function tn() {
                var n = (0, f.Z)(["\n  display: block;\n  text-align: center;\n  margin-top: 62px;\n  margin-bottom: 24px;\n  ", "\n"]);
                return tn = function() {
                    return n
                }, n
            }

            function an() {
                var n = (0, f.Z)(["\n  margin-top: 32px;\n"]);
                return an = function() {
                    return n
                }, n
            }

            function rn() {
                var n = (0, f.Z)(["\n  && {\n    padding-bottom: 12px;\n  }\n"]);
                return rn = function() {
                    return n
                }, n
            }

            function ln() {
                var n = (0, f.Z)(["\n  width: 100%;\n  cursor: pointer;\n  margin-left: 16px;\n"]);
                return ln = function() {
                    return n
                }, n
            }

            function on() {
                var n = (0, f.Z)(["\n  align-items: flex-start;\n  justify-content: space-between;\n\n  & + & {\n    margin-top: 24px;\n  }\n"]);
                return on = function() {
                    return n
                }, n
            }
            var un = {
                    email: "",
                    stage: ""
                },
                sn = function(n) {
                    var e, i, o, u = n.onClose,
                        d = (0, I.q)("drop"),
                        f = (0, s.b)(),
                        y = f.mutate,
                        h = f.wallet,
                        x = (0, C.W)().onNext,
                        k = (0, D.e)().attempt,
                        T = (0, w.j)(),
                        M = T.collectionSlug,
                        P = T.isStageActive,
                        U = T.isPastStage,
                        E = (0, v.useLazyLoadQuery)(t(91177), {
                            address: (null === (e = h.activeAccount) || void 0 === e ? void 0 : e.address) || "",
                            collection: M
                        }, {
                            fetchPolicy: "network-only"
                        }),
                        _ = null === (i = E.collection) || void 0 === i ? void 0 : i.drop,
                        z = (0, F.L)(null === _ || void 0 === _ ? void 0 : _.stages).some((function(n) {
                            return n.reminderEnabled
                        })),
                        A = (0, K.c)({
                            mode: "onChange",
                            defaultValues: un
                        });
                    if (!(null === (o = E.collection) || void 0 === o ? void 0 : o.drop)) return null;
                    z && x((0, l.jsx)(X, {
                        collectionDataKey: E.collection,
                        userDataKey: E.getAccount.user,
                        onClose: u
                    }));
                    var V = A.register,
                        R = A.handleSubmit,
                        N = A.watch,
                        O = A.formState,
                        q = N("stage"),
                        Q = R(function() {
                            var n = (0, a.Z)(r().mark((function n(e) {
                                return r().wrap((function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            if (e.stage) {
                                                n.next = 2;
                                                break
                                            }
                                            return n.abrupt("return");
                                        case 2:
                                            return (0, c.IM)({
                                                stage: e.stage
                                            }), n.next = 5, k((0, a.Z)(r().mark((function n() {
                                                var a;
                                                return r().wrap((function(n) {
                                                    for (;;) switch (n.prev = n.next) {
                                                        case 0:
                                                            return n.next = 2, y(t(53512), {
                                                                input: {
                                                                    email: e.email,
                                                                    collection: M,
                                                                    dropStages: [e.stage]
                                                                }
                                                            }, {
                                                                updater: function(n) {
                                                                    if (_) {
                                                                        var t = !0,
                                                                            a = !1,
                                                                            i = void 0;
                                                                        try {
                                                                            for (var r, l = _.stages[Symbol.iterator](); !(t = (r = l.next()).done); t = !0) {
                                                                                var o = r.value,
                                                                                    u = n.get(o.relayId);
                                                                                null === u || void 0 === u || u.setValue(e.stage === o.relayId, "reminderEnabled")
                                                                            }
                                                                        } catch (s) {
                                                                            a = !0, i = s
                                                                        } finally {
                                                                            try {
                                                                                t || null == l.return || l.return()
                                                                            } finally {
                                                                                if (a) throw i
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            });
                                                        case 2:
                                                            a = n.sent, x((0, l.jsx)(X, {
                                                                collectionDataKey: E.collection,
                                                                userDataKey: a.users.dropReminder,
                                                                onClose: u
                                                            }));
                                                        case 4:
                                                        case "end":
                                                            return n.stop()
                                                    }
                                                }), n)
                                            }))));
                                        case 5:
                                        case "end":
                                            return n.stop()
                                    }
                                }), n)
                            })));
                            return function(e) {
                                return n.apply(this, arguments)
                            }
                        }());
                    return (0, l.jsx)(p.RV, (0, g.Z)((0, m.Z)({}, A), {
                        children: (0, l.jsxs)(Z.B, {
                            as: "form",
                            onSubmit: Q,
                            children: [(0, l.jsxs)(gn, {
                                children: [(0, l.jsx)(cn, {
                                    children: d("reminderSignupModal.title", "Sign up for email reminders")
                                }), (0, l.jsx)(B, {}), (0, l.jsx)(mn, {
                                    children: null === _ || void 0 === _ ? void 0 : _.stages.map((function(n) {
                                        var e = V("stage"),
                                            t = e.onChange,
                                            a = e.name;
                                        return (0, l.jsxs)(pn, {
                                            children: [(0, l.jsx)(S.E, {
                                                "aria-label": d("reminderSignupModal.inputToEnableReminder", "Enable reminders for {{stageLabel}}", {
                                                    stageLabel: n.label
                                                }),
                                                checked: q === n.relayId,
                                                disabled: U({
                                                    endTime: n.endTime
                                                }) || P({
                                                    startTime: n.startTime,
                                                    endTime: n.endTime
                                                }),
                                                id: n.relayId,
                                                name: a,
                                                value: n.relayId,
                                                onChange: function() {
                                                    t({
                                                        target: {
                                                            name: a,
                                                            id: n.relayId,
                                                            value: n.relayId
                                                        },
                                                        type: "radio"
                                                    })
                                                }
                                            }), (0, l.jsx)(fn, {
                                                htmlFor: n.relayId,
                                                children: (0, l.jsx)(L.y, {
                                                    showEligibility: !1,
                                                    stageKey: n
                                                })
                                            })]
                                        }, n.relayId)
                                    }))
                                })]
                            }), (0, l.jsx)(b.u_.Footer, {
                                children: (0, l.jsx)(j.P, {
                                    disabled: !O.isValid || !q,
                                    type: "submit",
                                    width: "100%",
                                    children: d("reminderSignupModal.submit", "Confirm")
                                })
                            })]
                        })
                    }))
                },
                dn = function(n) {
                    return (0, l.jsx)(o.Suspense, {
                        fallback: (0, l.jsx)(h.C, {}),
                        children: (0, l.jsx)(sn, (0, m.Z)({}, n))
                    })
                },
                cn = (0, y.ZP)(M.l.Heading).attrs({
                    size: "mediumOnModal"
                }).withConfig({
                    componentId: "sc-28906ef6-0"
                })(tn(), (0, T.BC)({
                    lg: (0, y.iv)(en())
                })),
                mn = (0, y.ZP)(x.g).withConfig({
                    componentId: "sc-28906ef6-1"
                })(an()),
                gn = (0, y.ZP)(b.u_.Body).withConfig({
                    componentId: "sc-28906ef6-2"
                })(rn()),
                fn = y.ZP.label.withConfig({
                    componentId: "sc-28906ef6-3"
                })(ln()),
                pn = (0, y.ZP)(k.k).withConfig({
                    componentId: "sc-28906ef6-4"
                })(on()),
                vn = function(n) {
                    var e = n.trigger,
                        t = (0, s.b)(),
                        i = t.isAuthenticated,
                        o = t.login,
                        m = (0, d.z)();
                    return (0, l.jsx)(u.d, {
                        size: "medium",
                        trigger: function(n) {
                            return e((t = n, m((0, a.Z)(r().mark((function n() {
                                return r().wrap((function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            if (i) {
                                                n.next = 3;
                                                break
                                            }
                                            return n.next = 3, o();
                                        case 3:
                                            (0, c.rr)(), t();
                                        case 5:
                                        case "end":
                                            return n.stop()
                                    }
                                }), n)
                            }))))));
                            var t
                        },
                        children: function(n) {
                            return (0, l.jsx)(dn, {
                                onClose: n
                            })
                        }
                    })
                }
        },
        97133: function(n, e, t) {
            t.d(e, {
                P: function() {
                    return c
                }
            });
            var a = t(85034),
                i = t(70169),
                r = t(31373),
                l = t(24246),
                o = (t(27378), t(56656)),
                u = t(72363),
                s = t(316),
                d = t(29193),
                c = function(n) {
                    var e = n.size,
                        t = void 0 === e ? o.iY.medium : e,
                        i = (0, r.Z)(n, ["size"]);
                    switch (t) {
                        case o.iY.small:
                            return (0, l.jsx)(g, (0, a.Z)({}, i));
                        case o.iY.medium:
                            return (0, l.jsx)(m, (0, a.Z)({}, i));
                        default:
                            throw new d.S(t)
                    }
                },
                m = function(n) {
                    return (0, l.jsx)(l.Fragment, {
                        children: (0, l.jsx)(u.pU, {
                            lessThan: "md",
                            children: function(e, t) {
                                return (0, l.jsx)(o.zx, (0, i.Z)((0, a.Z)({}, n), {
                                    size: t ? "small" : "medium"
                                }))
                            }
                        })
                    })
                },
                g = function(n) {
                    var e = n.children,
                        t = (0, r.Z)(n, ["children"]);
                    return (0, l.jsx)(l.Fragment, {
                        children: (0, l.jsx)(u.pU, {
                            lessThan: "lg",
                            children: function(n, r) {
                                return (0, l.jsx)(o.zx, (0, i.Z)((0, a.Z)({}, t), {
                                    height: r ? "36px" : "48px",
                                    size: r ? "xsmall" : "small",
                                    children: (0, l.jsx)(s.xv.Body, {
                                        color: "inherit",
                                        size: r ? "small" : "medium",
                                        weight: "semibold",
                                        children: e
                                    })
                                }))
                            }
                        })
                    })
                }
        },
        94091: function(n, e, t) {
            t.d(e, {
                l: function() {
                    return q
                }
            });
            var a = t(85034),
                i = t(19989),
                r = t(24246),
                l = (t(27378), t(47892)),
                o = t(72363),
                u = t(316);

            function s() {
                var n = (0, i.Z)(["\n  ", ";\n  --text-xsmall: 12px;\n  --text-lh-xsmall: 20px;\n"]);
                return s = function() {
                    return n
                }, n
            }

            function d() {
                var n = (0, i.Z)(["\n      font-size: var(--text-small);\n      line-height: var(--text-lh-small);\n    "]);
                return d = function() {
                    return n
                }, n
            }

            function c() {
                var n = (0, i.Z)(["\n      font-size: var(--text-xsmall);\n      line-height: var(--text-lh-xsmall);\n    "]);
                return c = function() {
                    return n
                }, n
            }

            function m() {
                var n = (0, i.Z)(["\n  ", "\n  ", "\n"]);
                return m = function() {
                    return n
                }, n
            }

            function g() {
                var n = (0, i.Z)(["\n      font-size: var(--text-medium);\n      line-height: var(--text-lh-medium);\n    "]);
                return g = function() {
                    return n
                }, n
            }

            function f() {
                var n = (0, i.Z)(["\n      font-size: var(--text-small);\n      line-height: var(--text-lh-small);\n    "]);
                return f = function() {
                    return n
                }, n
            }

            function p() {
                var n = (0, i.Z)(["\n  ", "\n  ", "\n"]);
                return p = function() {
                    return n
                }, n
            }

            function v() {
                var n = (0, i.Z)(["\n  ", ";\n  --text-xsmall: 16px;\n  --text-lh-xsmall: 24px;\n"]);
                return v = function() {
                    return n
                }, n
            }

            function y() {
                var n = (0, i.Z)(["\n      font-size: var(--text-medium);\n      line-height: var(--text-lh-medium);\n    "]);
                return y = function() {
                    return n
                }, n
            }

            function h() {
                var n = (0, i.Z)(["\n      font-size: var(--text-small);\n      line-height: var(--text-lh-small);\n    "]);
                return h = function() {
                    return n
                }, n
            }

            function x() {
                var n = (0, i.Z)(["\n      font-size: var(--text-xsmall);\n      line-height: var(--text-lh-xsmall);\n    "]);
                return x = function() {
                    return n
                }, n
            }

            function k() {
                var n = (0, i.Z)(["\n  ", "\n  ", "\n"]);
                return k = function() {
                    return n
                }, n
            }

            function T() {
                var n = (0, i.Z)(["\n      font-size: var(--text-medium);\n      line-height: var(--text-lh-medium);\n    "]);
                return T = function() {
                    return n
                }, n
            }

            function b() {
                var n = (0, i.Z)(["\n      font-size: var(--text-small);\n      line-height: var(--text-lh-small);\n    "]);
                return b = function() {
                    return n
                }, n
            }

            function C() {
                var n = (0, i.Z)(["\n  ", "\n  ", "\n"]);
                return C = function() {
                    return n
                }, n
            }

            function S() {
                var n = (0, i.Z)(["\n      font-size: var(--text-large);\n      line-height: var(--text-lh-large);\n    "]);
                return S = function() {
                    return n
                }, n
            }

            function Z() {
                var n = (0, i.Z)(["\n      font-size: var(--text-medium);\n      line-height: var(--text-lh-medium);\n    "]);
                return Z = function() {
                    return n
                }, n
            }

            function w() {
                var n = (0, i.Z)(["\n      font-size: var(--text-small);\n      line-height: var(--text-lh-small);\n    "]);
                return w = function() {
                    return n
                }, n
            }

            function F() {
                var n = (0, i.Z)(["\n  ", "\n  ", "\n"]);
                return F = function() {
                    return n
                }, n
            }

            function K() {
                var n = (0, i.Z)(["\n      font-size: var(--text-large);\n      line-height: var(--text-lh-large);\n    "]);
                return K = function() {
                    return n
                }, n
            }

            function D() {
                var n = (0, i.Z)(["\n      font-size: var(--text-medium);\n      line-height: var(--text-lh-medium);\n    "]);
                return D = function() {
                    return n
                }, n
            }

            function I() {
                var n = (0, i.Z)(["\n      font-size: var(--text-small);\n      line-height: var(--text-lh-small);\n    "]);
                return I = function() {
                    return n
                }, n
            }

            function j() {
                var n = (0, i.Z)(["\n  ", "\n  ", "\n"]);
                return j = function() {
                    return n
                }, n
            }

            function M() {
                var n = (0, i.Z)(["\n      font-size: var(--text-medium);\n      line-height: var(--text-lh-medium);\n    "]);
                return M = function() {
                    return n
                }, n
            }

            function L() {
                var n = (0, i.Z)(["\n      font-size: var(--text-small);\n      line-height: var(--text-lh-small);\n    "]);
                return L = function() {
                    return n
                }, n
            }

            function P() {
                var n = (0, i.Z)(["\n  ", "\n  ", "\n"]);
                return P = function() {
                    return n
                }, n
            }
            var U = (0, l.iv)(s(), u.dU),
                E = (0, l.ZP)(u.xv.Body).withConfig({
                    componentId: "sc-b5e6ea14-0"
                })(m(), U, (0, o.BC)({
                    xxl: (0, l.iv)(d()),
                    xs: (0, l.iv)(c())
                })),
                _ = (0, l.ZP)(u.xv.Body).withConfig({
                    componentId: "sc-b5e6ea14-1"
                })(p(), U, (0, o.BC)({
                    lg: (0, l.iv)(g()),
                    xs: (0, l.iv)(f())
                })),
                z = function(n) {
                    switch (n.size) {
                        case "small":
                            return (0, r.jsx)(E, (0, a.Z)({}, n));
                        case "medium":
                            return (0, r.jsx)(_, (0, a.Z)({}, n));
                        default:
                            return (0, r.jsx)(u.xv.Body, (0, a.Z)({}, n))
                    }
                },
                A = (0, l.iv)(v(), u.TT),
                V = (0, l.ZP)(u.xv.Heading).withConfig({
                    componentId: "sc-b5e6ea14-2"
                })(k(), A, (0, o.BC)({
                    xxl: (0, l.iv)(y()),
                    lg: (0, l.iv)(h()),
                    xs: (0, l.iv)(x())
                })),
                R = (0, l.ZP)(u.xv.Heading).withConfig({
                    componentId: "sc-b5e6ea14-3"
                })(C(), A, (0, o.BC)({
                    lg: (0, l.iv)(T()),
                    xs: (0, l.iv)(b())
                })),
                B = (0, l.ZP)(u.xv.Heading).withConfig({
                    componentId: "sc-b5e6ea14-4"
                })(F(), A, (0, o.BC)({
                    lg: (0, l.iv)(S()),
                    md: (0, l.iv)(Z()),
                    xs: (0, l.iv)(w())
                })),
                N = (0, l.ZP)(u.xv.Display).withConfig({
                    componentId: "sc-b5e6ea14-5"
                })(j(), u.g_, (0, o.BC)({
                    xl: (0, l.iv)(K()),
                    md: (0, l.iv)(D()),
                    xs: (0, l.iv)(I())
                })),
                O = (0, l.ZP)(u.xv.Display).withConfig({
                    componentId: "sc-b5e6ea14-6"
                })(P(), u.g_, (0, o.BC)({
                    md: (0, l.iv)(M()),
                    xs: (0, l.iv)(L())
                })),
                q = Object.assign(z, {
                    Body: z,
                    Heading: function(n) {
                        switch (n.size) {
                            case "large":
                                return (0, r.jsx)(B, (0, a.Z)({}, n));
                            case "medium":
                                return (0, r.jsx)(V, (0, a.Z)({}, n));
                            case "mediumOnModal":
                                return (0, r.jsx)(R, (0, a.Z)({}, n));
                            default:
                                return (0, r.jsx)(u.xv.Heading, (0, a.Z)({}, n))
                        }
                    },
                    Display: function(n) {
                        return "large" == n.size ? (0, r.jsx)(N, (0, a.Z)({}, n)) : "medium" == n.size ? (0, r.jsx)(O, (0, a.Z)({}, n)) : (0, r.jsx)(u.xv.Display, (0, a.Z)({}, n))
                    }
                })
        },
        77366: function(n, e, t) {
            t.d(e, {
                y: function() {
                    return v
                }
            });
            var a = t(19989),
                i = t(24246),
                r = (t(27378), t(57759)),
                l = t(50657),
                o = t(4402),
                u = t(47892),
                s = t(53585),
                d = t(99525),
                c = t(36494),
                m = t(6723),
                g = t(94091);

            function f() {
                var n = (0, a.Z)(["\n  color: ", ";\n  text-transform: uppercase;\n"]);
                return f = function() {
                    return n
                }, n
            }

            function p() {
                var n = (0, a.Z)(["\n  text-align: left;\n  display: block;\n"]);
                return p = function() {
                    return n
                }, n
            }
            var v = function(n) {
                    var e = n.stageKey,
                        a = n.children,
                        u = n.showEligibility,
                        g = void 0 === u || u,
                        f = n.className,
                        p = (0, m.q)("drop"),
                        v = (0, o.useFragment)(t(65659), e),
                        x = v.contextUserData.isEligible,
                        k = (0, c.j)(),
                        T = k.isPastStage,
                        b = k.mintedOut,
                        C = k.editMode,
                        S = Intl.DateTimeFormat().resolvedOptions().timeZone;
                    return (0, i.jsxs)(d.i, {
                        className: f,
                        children: [(0, i.jsxs)(s.g, {
                            children: [(0, i.jsx)(h, {
                                size: "medium",
                                weight: "semibold",
                                children: v.label
                            }), (0, i.jsx)(h, {
                                color: "text.subtle",
                                marginTop: "2px",
                                size: "medium",
                                children: (0, l.formatInTimeZone)((0, r.Z)(v.startTime), S, "MMMM d 'at' h:mm aa zzz")
                            })]
                        }), !C && (0, i.jsx)(i.Fragment, {
                            children: T({
                                endTime: v.endTime
                            }) || b ? (0, i.jsx)(y, {
                                $userIsEligible: !1,
                                size: "small",
                                weight: "semibold",
                                children: p("stageInfo.stageEnded", "ended")
                            }) : (0, i.jsx)(i.Fragment, {
                                children: g && "PRESALE" === v.stageType && v.allowlistSet && (0, i.jsx)(y, {
                                    $userIsEligible: x,
                                    size: "small",
                                    weight: "semibold",
                                    children: a || (x ? p("stageInfo.userEligible", "eligible") : p("stageInfo.userNoEligible", "not eligible"))
                                })
                            })
                        })]
                    })
                },
                y = (0, u.ZP)(g.l.Body).withConfig({
                    componentId: "sc-e7b3fec7-0"
                })(f(), (function(n) {
                    return n.$userIsEligible ? n.theme.colors.seaGrass : n.theme.colors.darkGray
                })),
                h = (0, u.ZP)(g.l.Body).withConfig({
                    componentId: "sc-e7b3fec7-1"
                })(p())
        },
        49507: function(n, e, t) {
            t.d(e, {
                bX: function() {
                    return S
                },
                M: function() {
                    return Z
                },
                SK: function() {
                    return T
                },
                jv: function() {
                    return b
                }
            });
            var a = t(23842),
                i = t(85034),
                r = t(31373),
                l = t(52050),
                o = t(35230),
                u = t.n(o),
                s = t(24246),
                d = t(27378),
                c = t(57759),
                m = t(26992),
                g = t(39937),
                f = t(4402),
                p = t(24140),
                v = t(38709),
                y = t(94762),
                h = t(40306),
                x = (t(2417), t(47748)),
                k = (t(59809), t(89154)),
                T = function(n) {
                    var e = n.endTime;
                    if (!e) return !1;
                    var t = Date.now(),
                        a = (0, c.Z)(e);
                    return (0, m.Z)(t, a) || (0, g.Z)(t, a)
                },
                b = function(n) {
                    var e = n.startTime,
                        t = n.endTime,
                        a = Date.now(),
                        i = (0, c.Z)(e);
                    return ((0, m.Z)(a, i) || (0, g.Z)(i, a)) && !T({
                        endTime: t
                    })
                },
                C = {
                    collectionSlug: "",
                    mintedItemCount: 0,
                    totalItemCount: 1,
                    ctaStageIsActive: !1,
                    ctaStageIsPast: !1,
                    isStageActive: b,
                    isPastStage: T,
                    refetchCtaStageState: (0, a.Z)(u().mark((function n() {
                        return u().wrap((function(n) {
                            for (;;) switch (n.prev = n.next) {
                                case 0:
                                    return void(n.next = 2);
                                case 2:
                                    return n.abrupt("return", n.sent);
                                case 3:
                                case "end":
                                    return n.stop()
                            }
                        }), n)
                    }))),
                    quantityToMint: 1,
                    mintedOut: !1,
                    setQuantityToMint: function() {
                        return !1
                    },
                    editMode: !1
                },
                S = (0, d.createContext)(C),
                Z = function(n) {
                    var e, a, o, u, g, Z, w, F, K, D = n.children,
                        I = n.collectionSlug,
                        j = n.dataKey,
                        M = n.editMode,
                        L = (0, f.useFragment)(t(18170), j),
                        P = (0, d.useState)(null !== (F = null === L || void 0 === L || null === (e = L.drop) || void 0 === e || null === (a = e.chainData) || void 0 === a ? void 0 : a.mintedItemCount) && void 0 !== F ? F : C.mintedItemCount),
                        U = P[0],
                        E = P[1],
                        _ = (0, d.useState)(C.quantityToMint),
                        z = _[0],
                        A = _[1],
                        V = function(n) {
                            var e, a, i, r, o = (0, l.Z)((0, x.i)(t(56671), {
                                    collection: n
                                }), 2),
                                u = o[0],
                                s = o[1],
                                m = null === u || void 0 === u || null === (e = u.collection) || void 0 === e || null === (a = e.drop) || void 0 === a ? void 0 : a.ctaStage,
                                g = (0, d.useState)(!1),
                                f = g[0],
                                p = g[1],
                                v = (0, d.useState)(!1),
                                y = v[0],
                                h = v[1],
                                C = (0, d.useCallback)((function() {
                                    if (null === m || void 0 === m ? void 0 : m.relayId) {
                                        var n = b({
                                                startTime: m.startTime,
                                                endTime: m.endTime
                                            }),
                                            e = T({
                                                endTime: m.endTime
                                            });
                                        return p(n), h(e), {
                                            isActive: n,
                                            isPast: e
                                        }
                                    }
                                    return {
                                        isActive: !1,
                                        isPast: !1
                                    }
                                }), [m]);
                            return (0, d.useEffect)((function() {
                                C();
                                var n = null,
                                    e = null;
                                if (!y && m) {
                                    if (!f) {
                                        var t = (0, c.Z)(m.startTime),
                                            a = (0, k.Z)(t, Date.now());
                                        n = setTimeout((function() {
                                            C()
                                        }), a)
                                    }
                                    if (m.endTime && "PUBLIC" === m.stageType) {
                                        var i = (0, c.Z)(m.endTime),
                                            r = (0, k.Z)(i, Date.now());
                                        e = setTimeout((function() {
                                            C()
                                        }), r)
                                    }
                                }
                                return function() {
                                    n && clearTimeout(n), e && clearTimeout(e)
                                }
                            }), [m, f, y, C]), {
                                isStageActive: b,
                                isPastStage: T,
                                ctaStageIsActive: f,
                                ctaStageIsPast: y,
                                refetchCtaStageState: s,
                                availableMints: null !== (r = null === m || void 0 === m || null === (i = m.contextUserData) || void 0 === i ? void 0 : i.availableMints) && void 0 !== r ? r : 0
                            }
                        }(I),
                        R = V.ctaStageIsActive,
                        B = (0, r.Z)(V, ["ctaStageIsActive"]),
                        N = null !== (K = null === L || void 0 === L || null === (o = L.drop) || void 0 === o || null === (u = o.chainData) || void 0 === u ? void 0 : u.totalItemCount) && void 0 !== K ? K : 1,
                        O = U === N,
                        q = (0, l.Z)((0, x.i)(t(81802), {
                            collection: I
                        }, {
                            skip: O || M
                        }), 2),
                        Q = q[0],
                        $ = q[1];
                    return (0, d.useEffect)((function() {
                            var n, e, t, a, i = null !== (a = null === Q || void 0 === Q || null === (n = Q.collection) || void 0 === n || null === (e = n.drop) || void 0 === e || null === (t = e.chainData) || void 0 === t ? void 0 : t.mintedItemCount) && void 0 !== a ? a : 0;
                            U !== i && i > U && E(i)
                        }), [null === Q || void 0 === Q || null === (g = Q.collection) || void 0 === g || null === (Z = g.drop) || void 0 === Z || null === (w = Z.chainData) || void 0 === w ? void 0 : w.mintedItemCount]), (0, p.Z)((function() {
                            R && !O && $({
                                collection: I
                            })
                        }), 3e3),
                        function(n) {
                            var e, a, i = n.collectionSlug,
                                r = n.editMode,
                                o = (0, l.Z)((0, x.i)(t(17017), {
                                    collection: i
                                }, {
                                    skip: !i || r
                                }), 2),
                                u = o[0],
                                s = o[1],
                                d = null === u || void 0 === u || null === (e = u.collection) || void 0 === e || null === (a = e.drop) || void 0 === a ? void 0 : a.ctaStage,
                                g = (null === d || void 0 === d ? void 0 : d.endTime) ? (0, c.Z)(d.endTime) : null;
                            (0, p.Z)((function() {
                                var n = Date.now();
                                g && (0, m.Z)(n, (0, v.Z)(g, {
                                    seconds: 2.75
                                })) && (0, y.Z)(n, (0, h.Z)(g, {
                                    seconds: 5
                                })) && s({
                                    collection: i
                                }, {
                                    force: !0
                                })
                            }), 750), d && (d.label, d.perWalletLimit, d.stageType, d.startTime, d.endTime, d.contextUserData.isEligible, d.contextUserData.availableMints)
                        }({
                            collectionSlug: I,
                            editMode: M
                        }), (0, s.jsx)(S.Provider, {
                            value: (0, i.Z)({
                                collectionSlug: I,
                                mintedItemCount: U,
                                totalItemCount: N,
                                ctaStageIsActive: R,
                                quantityToMint: z,
                                setQuantityToMint: A,
                                mintedOut: O,
                                editMode: !!M
                            }, B),
                            children: D
                        })
                }
        },
        58993: function(n, e, t) {
            t.d(e, {
                Aw: function() {
                    return d
                },
                GH: function() {
                    return s
                },
                iL: function() {
                    return u
                }
            });
            var a = t(26992),
                i = t(57759),
                r = t(38709),
                l = t(4402),
                o = (t(2417), t(49507)),
                u = {
                    ACTIVE: "ACTIVE",
                    MINTING_SOON: "MINTING_SOON",
                    UPCOMING: "UPCOMING",
                    ENDED: "ENDED",
                    MINTED_OUT: "MINTED_OUT"
                },
                s = function(n) {
                    var e = n.mintedItemCount,
                        t = n.totalItemCount,
                        l = n.stages,
                        s = e === t,
                        d = l[0],
                        c = l[l.length - 1],
                        m = new Date,
                        g = c.endTime && (0, a.Z)(m, (0, i.Z)(c.endTime)),
                        f = (0, o.jv)({
                            startTime: d.startTime,
                            endTime: null
                        }),
                        p = (0, r.Z)((0, i.Z)(d.startTime), {
                            days: 7
                        }),
                        v = (0, a.Z)(m, p);
                    return s ? u.MINTED_OUT : g ? u.ENDED : f ? u.ACTIVE : v ? u.MINTING_SOON : u.UPCOMING
                },
                d = function(n) {
                    var e = (0, l.useFragment)(t(48330), n);
                    return (null === e || void 0 === e ? void 0 : e.stages) && (null === e || void 0 === e ? void 0 : e.chainData) ? s({
                        stages: e.stages.map((function(n) {
                            return {
                                startTime: n.startTime,
                                endTime: n.endTime
                            }
                        })),
                        mintedItemCount: e.chainData.mintedItemCount,
                        totalItemCount: e.chainData.totalItemCount
                    }) : null
                }
        },
        36494: function(n, e, t) {
            t.d(e, {
                j: function() {
                    return r
                }
            });
            var a = t(27378),
                i = t(49507),
                r = function() {
                    return (0, a.useContext)(i.bX)
                }
        },
        18822: function(n, e, t) {
            t.d(e, {
                I: function() {
                    return u
                }
            });
            var a = t(94762),
                i = t(38709),
                r = t(57759),
                l = t(4402),
                o = t(48696),
                u = function(n) {
                    var e = (0, l.useFragment)(t(80738), n),
                        u = (0, o.L)(null === e || void 0 === e ? void 0 : e.stages);
                    return !!e && (u.length > 0 && (0, a.Z)(Date.now(), (0, i.Z)((0, r.Z)(e.stages[e.stages.length - 1].startTime), {
                        minutes: 60
                    })))
                }
        },
        48696: function(n, e, t) {
            t.d(e, {
                L: function() {
                    return l
                }
            });
            t(59809);
            var a = t(67286),
                i = t(36494),
                r = (0, a.A)(t(71939), (function(n) {
                    return n
                })),
                l = function(n) {
                    var e = (0, i.j)(),
                        t = e.isPastStage,
                        a = e.isStageActive;
                    return (n || []).filter((function(n) {
                        var e = r(n);
                        return !t({
                            endTime: e.endTime
                        }) && !a({
                            startTime: e.startTime,
                            endTime: e.endTime
                        })
                    }))
                }
        },
        34654: function(n, e, t) {
            t.d(e, {
                $u: function() {
                    return I
                },
                Cj: function() {
                    return P
                },
                Gn: function() {
                    return _
                },
                Lu: function() {
                    return z
                },
                de: function() {
                    return D
                },
                eM: function() {
                    return j
                },
                tZ: function() {
                    return U
                },
                wo: function() {
                    return L
                },
                yu: function() {
                    return M
                },
                zN: function() {
                    return E
                }
            });
            var a = t(19989),
                i = t(76449),
                r = t(47892),
                l = t(72363);

            function o() {
                var n = (0, a.Z)(["\n      aspect-ratio: 5/4;\n    "]);
                return o = function() {
                    return n
                }, n
            }

            function u() {
                var n = (0, a.Z)(["\n      aspect-ratio: 12/5;\n      max-height: 800px;\n      min-height: 480px;\n    "]);
                return u = function() {
                    return n
                }, n
            }

            function s() {
                var n = (0, a.Z)(["\n  aspect-ratio: 4/5;\n  ", ";\n\n  /* Fixes issue with safari at sizes larger than 1920px where aspect-ratio also constrains the max-width  */\n  @media (min-width: 1920px) {\n    aspect-ratio: initial;\n    width: 100%;\n    height: 800px;\n  }\n"]);
                return s = function() {
                    return n
                }, n
            }

            function d() {
                var n = (0, a.Z)(["\n      padding: 12px;\n      border-radius: ", ";\n    "]);
                return d = function() {
                    return n
                }, n
            }

            function c() {
                var n = (0, a.Z)(["\n      padding: 16px;\n    "]);
                return c = function() {
                    return n
                }, n
            }

            function m() {
                var n = (0, a.Z)(["\n      padding: 24px;\n      border-radius: ", ";\n    "]);
                return m = function() {
                    return n
                }, n
            }

            function g() {
                var n = (0, a.Z)(["\n  border: 1px solid ", ";\n  ", "\n"]);
                return g = function() {
                    return n
                }, n
            }

            function f() {
                var n = (0, a.Z)(["\n      --size: ", ";\n      margin-right: 16px;\n    "]);
                return f = function() {
                    return n
                }, n
            }

            function p() {
                var n = (0, a.Z)(["\n      --size: ", ";\n    "]);
                return p = function() {
                    return n
                }, n
            }

            function v() {
                var n = (0, a.Z)(["\n      --size: ", ";\n      margin-right: 24px;\n    "]);
                return v = function() {
                    return n
                }, n
            }

            function y() {
                var n = (0, a.Z)(["\n  overflow: hidden;\n  position: relative;\n  ", "\n  min-height: var(--size);\n  min-width: var(--size);\n  max-height: var(--size);\n  max-width: var(--size);\n"]);
                return y = function() {
                    return n
                }, n
            }

            function h() {
                var n = (0, a.Z)(["\n      width: 100%;\n    "]);
                return h = function() {
                    return n
                }, n
            }

            function x() {
                var n = (0, a.Z)(["\n      width: ", ";\n    "]);
                return x = function() {
                    return n
                }, n
            }

            function k() {
                var n = (0, a.Z)(["\n  max-width: 700px;\n  ", "\n"]);
                return k = function() {
                    return n
                }, n
            }

            function T() {
                var n = (0, a.Z)(["\n  a {\n    color: white;\n\n    &:hover {\n      color: white;\n      opacity: 0.7;\n    }\n  }\n"]);
                return T = function() {
                    return n
                }, n
            }

            function b() {
                var n = (0, a.Z)(['\n  pointer-events: none;\n  content: "";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n']);
                return b = function() {
                    return n
                }, n
            }

            function C() {
                var n = (0, a.Z)(["\n      --sticky-bar-height: 68px;\n    "]);
                return C = function() {
                    return n
                }, n
            }

            function S() {
                var n = (0, a.Z)(["\n      --sticky-bar-height: 88px;\n    "]);
                return S = function() {
                    return n
                }, n
            }

            function Z() {
                var n = (0, a.Z)(["\n  ", "\n"]);
                return Z = function() {
                    return n
                }, n
            }

            function w() {
                var n = (0, a.Z)(["\n  background-color: ", ";\n  backdrop-filter: blur(20px);\n"]);
                return w = function() {
                    return n
                }, n
            }

            function F() {
                var n = (0, a.Z)(["\n      border-radius: ", ";\n      padding: 0px 24px;\n      --button-height: 60px;\n    "]);
                return F = function() {
                    return n
                }, n
            }

            function K() {
                var n = (0, a.Z)(["\n  ", "\n  align-items: center;\n  justify-content: center;\n  border-radius: ", ";\n  color: white;\n  i {\n    color: white;\n  }\n  padding: 0px 16px;\n  --button-height: 44px;\n  border-radius: ", ";\n  ", "\n"]);
                return K = function() {
                    return n
                }, n
            }
            var D = (0, r.iv)(s(), (0, l.BC)({
                    md: (0, r.iv)(o()),
                    lg: (0, r.iv)(u())
                })),
                I = (0, r.iv)(g(), (function(n) {
                    return n.theme.colors.border
                }), (0, l.BC)({
                    xs: (0, r.iv)(d(), (function(n) {
                        return n.theme.borderRadius.default
                    })),
                    sm: (0, r.iv)(c()),
                    lg: (0, r.iv)(m(), (function(n) {
                        return n.theme.borderRadius.xlarge
                    }))
                })),
                j = {
                    xs: "68px",
                    sm: "92px",
                    lg: "140px"
                },
                M = (0, r.iv)(y(), (0, l.BC)({
                    xs: (0, r.iv)(f(), j.xs),
                    sm: (0, r.iv)(p(), j.sm),
                    lg: (0, r.iv)(v(), j.lg)
                })),
                L = function(n) {
                    return (0, r.iv)(k(), (0, l.BC)({
                        xs: (0, r.iv)(h()),
                        sm: (0, r.iv)(x(), n)
                    }))
                },
                P = (0, r.iv)(T()),
                U = (0, r.iv)(b()),
                E = (0, r.iv)(Z(), (0, l.BC)({
                    xs: (0, r.iv)(C()),
                    lg: (0, r.iv)(S())
                })),
                _ = (0, r.iv)(w(), (0, i.m4)("#FFFFFF", .24)),
                z = (0, r.iv)(K(), _, (function(n) {
                    return n.theme.borderRadius.default
                }), (function(n) {
                    return n.theme.borderRadius.default
                }), (0, l.BC)({
                    lg: (0, r.iv)(F(), (function(n) {
                        return n.theme.borderRadius.large
                    }))
                }))
        },
        4798: function(n, e, t) {
            t.d(e, {
                AA: function() {
                    return y
                },
                Be: function() {
                    return g
                },
                E$: function() {
                    return d
                },
                HP: function() {
                    return l
                },
                IA: function() {
                    return s
                },
                IM: function() {
                    return v
                },
                NU: function() {
                    return m
                },
                U4: function() {
                    return o
                },
                Ye: function() {
                    return r
                },
                ew: function() {
                    return u
                },
                iS: function() {
                    return f
                },
                jU: function() {
                    return h
                },
                px: function() {
                    return i
                },
                rr: function() {
                    return p
                },
                t: function() {
                    return c
                }
            });
            var a = t(60387),
                i = (0, a.V6)("primary drops v2 -- mint not open"),
                r = (0, a.V6)("primary drops v2 -- user isn't eligible"),
                l = (0, a.V6)("primary drops v2 -- user reached mint limit"),
                o = (0, a.V6)("primary drops v2 -- collection is fully minted"),
                u = (0, a.V6)("primary drops v2 -- user is eligible and ready to mint"),
                s = (0, a.V6)("primary drops - user clicked on mint button"),
                d = (0, a.V6)("primary drops v2 -- mint transaction pending"),
                c = (0, a.V6)("primary drops v2 -- mint transaction failed"),
                m = (0, a.V6)("primary drops v2 -- mint transaction confirmed"),
                g = (0, a.V6)("primary drops v2 -- video on play"),
                f = (0, a.V6)("primary drops v2 -- history telling last element in view"),
                p = (0, a.V6)("primary drops v2 -- open reminders"),
                v = (0, a.V6)("primary drops v2 -- set reminder"),
                y = (0, a.V6)("primary drops v2 -- open calendar"),
                h = (0, a.V6)("primary drops v2 -- set calendar")
        },
        68029: function(n, e, t) {
            t.r(e);
            var a = {
                kind: "InlineDataFragment",
                name: "AddToCalendar_collection",
                hash: "526ec5ffb29c3c232a4014ad4158ed16"
            };
            e.default = a
        },
        27609: function(n, e, t) {
            t.r(e);
            var a = function() {
                var n = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "slug",
                        storageKey: null
                    },
                    e = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "startTime",
                        storageKey: null
                    },
                    t = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "endTime",
                        storageKey: null
                    },
                    a = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "relayId",
                        storageKey: null
                    };
                return {
                    argumentDefinitions: [],
                    kind: "Fragment",
                    metadata: null,
                    name: "AddToCalendar_data",
                    selections: [n, {
                        kind: "InlineDataFragmentSpread",
                        name: "AddToCalendar_collection",
                        selections: [{
                            kind: "InlineDataFragmentSpread",
                            name: "collection_url",
                            selections: [n, {
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
                            concreteType: "DropType",
                            kind: "LinkedField",
                            name: "drop",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "name",
                                storageKey: null
                            }],
                            storageKey: null
                        }],
                        args: null,
                        argumentDefinitions: []
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
                            name: "stages",
                            plural: !0,
                            selections: [{
                                kind: "InlineDataFragmentSpread",
                                name: "AddToCalendar_stage",
                                selections: [{
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "label",
                                    storageKey: null
                                }, e, t],
                                args: null,
                                argumentDefinitions: []
                            }, {
                                args: null,
                                kind: "FragmentSpread",
                                name: "StageInfo_data"
                            }, t, e, a],
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            concreteType: "DropStageType",
                            kind: "LinkedField",
                            name: "ctaStage",
                            plural: !1,
                            selections: [a, t, e],
                            storageKey: null
                        }],
                        storageKey: null
                    }],
                    type: "CollectionType",
                    abstractKey: null
                }
            }();
            a.hash = "51bca36f9001ead5f433a156b7455c68", e.default = a
        },
        67871: function(n, e, t) {
            t.r(e);
            var a = {
                kind: "InlineDataFragment",
                name: "AddToCalendar_stage",
                hash: "93c7950ed8b5fccee30724a066e14fcb"
            };
            e.default = a
        },
        50687: function(n, e, t) {
            t.r(e);
            var a = function() {
                var n = [{
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "identity"
                    }],
                    e = [{
                        kind: "Variable",
                        name: "address",
                        variableName: "identity"
                    }],
                    t = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "email",
                        storageKey: null
                    },
                    a = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "id",
                        storageKey: null
                    };
                return {
                    fragment: {
                        argumentDefinitions: n,
                        kind: "Fragment",
                        metadata: null,
                        name: "EmailInputReminderQuery",
                        selections: [{
                            alias: null,
                            args: e,
                            concreteType: "AccountType",
                            kind: "LinkedField",
                            name: "getAccount",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: null,
                                concreteType: "UserType",
                                kind: "LinkedField",
                                name: "user",
                                plural: !1,
                                selections: [t],
                                storageKey: null
                            }],
                            storageKey: null
                        }],
                        type: "Query",
                        abstractKey: null
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: n,
                        kind: "Operation",
                        name: "EmailInputReminderQuery",
                        selections: [{
                            alias: null,
                            args: e,
                            concreteType: "AccountType",
                            kind: "LinkedField",
                            name: "getAccount",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: null,
                                concreteType: "UserType",
                                kind: "LinkedField",
                                name: "user",
                                plural: !1,
                                selections: [t, a],
                                storageKey: null
                            }, a],
                            storageKey: null
                        }]
                    },
                    params: {
                        cacheID: "264a361ea800af1d1b6e1d49e58825bc",
                        id: null,
                        metadata: {},
                        name: "EmailInputReminderQuery",
                        operationKind: "query",
                        text: "query EmailInputReminderQuery(\n  $identity: AddressScalar!\n) {\n  getAccount(address: $identity) {\n    user {\n      email\n      id\n    }\n    id\n  }\n}\n"
                    }
                }
            }();
            a.hash = "b7f5afa48fccdcea26ea46393bf4b48d", e.default = a
        },
        1966: function(n, e, t) {
            t.r(e);
            var a = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "HeroStageText_data",
                selections: [{
                    alias: null,
                    args: null,
                    concreteType: "DropType",
                    kind: "LinkedField",
                    name: "drop",
                    plural: !1,
                    selections: [{
                        args: null,
                        kind: "FragmentSpread",
                        name: "useDropState_data"
                    }, {
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
                            name: "startTime",
                            storageKey: null
                        }, {
                            args: null,
                            kind: "FragmentSpread",
                            name: "StageStartCountdown_stage"
                        }],
                        storageKey: null
                    }],
                    storageKey: null
                }],
                type: "CollectionType",
                abstractKey: null,
                hash: "3cfdcff711314190b71e55a875b17d68"
            };
            e.default = a
        },
        81802: function(n, e, t) {
            t.r(e);
            var a = function() {
                var n = [{
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "collection"
                    }],
                    e = [{
                        kind: "Variable",
                        name: "collection",
                        variableName: "collection"
                    }],
                    t = {
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
                        }],
                        storageKey: null
                    },
                    a = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "id",
                        storageKey: null
                    };
                return {
                    fragment: {
                        argumentDefinitions: n,
                        kind: "Fragment",
                        metadata: null,
                        name: "PrimaryDropProviderMintProgressQuery",
                        selections: [{
                            alias: null,
                            args: e,
                            concreteType: "CollectionType",
                            kind: "LinkedField",
                            name: "collection",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: null,
                                concreteType: "DropType",
                                kind: "LinkedField",
                                name: "drop",
                                plural: !1,
                                selections: [t],
                                storageKey: null
                            }],
                            storageKey: null
                        }],
                        type: "Query",
                        abstractKey: null
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: n,
                        kind: "Operation",
                        name: "PrimaryDropProviderMintProgressQuery",
                        selections: [{
                            alias: null,
                            args: e,
                            concreteType: "CollectionType",
                            kind: "LinkedField",
                            name: "collection",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: null,
                                concreteType: "DropType",
                                kind: "LinkedField",
                                name: "drop",
                                plural: !1,
                                selections: [t, a],
                                storageKey: null
                            }, a],
                            storageKey: null
                        }]
                    },
                    params: {
                        cacheID: "a898fed57b40e506bd270d6234b6aae5",
                        id: null,
                        metadata: {},
                        name: "PrimaryDropProviderMintProgressQuery",
                        operationKind: "query",
                        text: "query PrimaryDropProviderMintProgressQuery(\n  $collection: CollectionSlug!\n) {\n  collection(collection: $collection) {\n    drop {\n      chainData {\n        mintedItemCount\n      }\n      id\n    }\n    id\n  }\n}\n"
                    }
                }
            }();
            a.hash = "075fb10c556e0589574bc834c0bc8b8f", e.default = a
        },
        18170: function(n, e, t) {
            t.r(e);
            var a = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "PrimaryDropProviderMintProgress_data",
                selections: [{
                    alias: null,
                    args: null,
                    concreteType: "DropType",
                    kind: "LinkedField",
                    name: "drop",
                    plural: !1,
                    selections: [{
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
                    }],
                    storageKey: null
                }],
                type: "CollectionType",
                abstractKey: null,
                hash: "da186afd406c01965a8788d609947cbb"
            };
            e.default = a
        },
        62026: function(n, e, t) {
            t.r(e);
            var a = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "PrimaryDropsHeroVideo",
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
                }],
                type: "HeroMetadataType",
                abstractKey: null,
                hash: "276a36a8fa1c8608fd2f0fa0c5753fd8"
            };
            e.default = a
        },
        87216: function(n, e, t) {
            t.r(e);
            var a = function() {
                var n = [{
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "input"
                    }],
                    e = [{
                        kind: "Variable",
                        name: "input",
                        variableName: "input"
                    }];
                return {
                    fragment: {
                        argumentDefinitions: n,
                        kind: "Fragment",
                        metadata: null,
                        name: "ReminderConfirmationModalContentMutation",
                        selections: [{
                            alias: null,
                            args: null,
                            concreteType: "UserMutationType",
                            kind: "LinkedField",
                            name: "users",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: e,
                                concreteType: "UserType",
                                kind: "LinkedField",
                                name: "dropReminder",
                                plural: !1,
                                selections: [{
                                    args: null,
                                    kind: "FragmentSpread",
                                    name: "ReminderConfirmationModalContent_user"
                                }],
                                storageKey: null
                            }],
                            storageKey: null
                        }],
                        type: "Mutation",
                        abstractKey: null
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: n,
                        kind: "Operation",
                        name: "ReminderConfirmationModalContentMutation",
                        selections: [{
                            alias: null,
                            args: null,
                            concreteType: "UserMutationType",
                            kind: "LinkedField",
                            name: "users",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: e,
                                concreteType: "UserType",
                                kind: "LinkedField",
                                name: "dropReminder",
                                plural: !1,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "email",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "emailVerified",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "id",
                                    storageKey: null
                                }],
                                storageKey: null
                            }],
                            storageKey: null
                        }]
                    },
                    params: {
                        cacheID: "0280c0b70056d88281d35e874fa34c32",
                        id: null,
                        metadata: {},
                        name: "ReminderConfirmationModalContentMutation",
                        operationKind: "mutation",
                        text: "mutation ReminderConfirmationModalContentMutation(\n  $input: DropReminderMutationInput!\n) {\n  users {\n    dropReminder(input: $input) {\n      ...ReminderConfirmationModalContent_user\n      id\n    }\n  }\n}\n\nfragment ReminderConfirmationModalContent_user on UserType {\n  email\n  emailVerified\n}\n"
                    }
                }
            }();
            a.hash = "1e2d88f83ec76aa2ed5063ecfc0f27a1", e.default = a
        },
        92554: function(n, e, t) {
            t.r(e);
            var a = function() {
                var n = {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "name",
                    storageKey: null
                };
                return {
                    argumentDefinitions: [],
                    kind: "Fragment",
                    metadata: null,
                    name: "ReminderConfirmationModalContent_collection",
                    selections: [{
                        kind: "InlineDataFragmentSpread",
                        name: "AddToCalendar_collection",
                        selections: [{
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
                            alias: null,
                            args: null,
                            concreteType: "DropType",
                            kind: "LinkedField",
                            name: "drop",
                            plural: !1,
                            selections: [n],
                            storageKey: null
                        }],
                        args: null,
                        argumentDefinitions: []
                    }, n, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "imageUrl",
                        storageKey: null
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
                            name: "stages",
                            plural: !0,
                            selections: [{
                                kind: "InlineDataFragmentSpread",
                                name: "AddToCalendar_stage",
                                selections: [{
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "label",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "startTime",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "endTime",
                                    storageKey: null
                                }],
                                args: null,
                                argumentDefinitions: []
                            }, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "reminderEnabled",
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "relayId",
                                storageKey: null
                            }],
                            storageKey: null
                        }],
                        storageKey: null
                    }],
                    type: "CollectionType",
                    abstractKey: null
                }
            }();
            a.hash = "8ad604a660328fe22ffd85f9b6410f4e", e.default = a
        },
        68945: function(n, e, t) {
            t.r(e);
            var a = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "ReminderConfirmationModalContent_user",
                selections: [{
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "email",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "emailVerified",
                    storageKey: null
                }],
                type: "UserType",
                abstractKey: null,
                hash: "43bb9bb7c8e89d0230267cfa8a212bee"
            };
            e.default = a
        },
        53512: function(n, e, t) {
            t.r(e);
            var a = function() {
                var n = [{
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "input"
                    }],
                    e = [{
                        kind: "Variable",
                        name: "input",
                        variableName: "input"
                    }];
                return {
                    fragment: {
                        argumentDefinitions: n,
                        kind: "Fragment",
                        metadata: null,
                        name: "ReminderSignupModalContentMutation",
                        selections: [{
                            alias: null,
                            args: null,
                            concreteType: "UserMutationType",
                            kind: "LinkedField",
                            name: "users",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: e,
                                concreteType: "UserType",
                                kind: "LinkedField",
                                name: "dropReminder",
                                plural: !1,
                                selections: [{
                                    args: null,
                                    kind: "FragmentSpread",
                                    name: "ReminderConfirmationModalContent_user"
                                }],
                                storageKey: null
                            }],
                            storageKey: null
                        }],
                        type: "Mutation",
                        abstractKey: null
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: n,
                        kind: "Operation",
                        name: "ReminderSignupModalContentMutation",
                        selections: [{
                            alias: null,
                            args: null,
                            concreteType: "UserMutationType",
                            kind: "LinkedField",
                            name: "users",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: e,
                                concreteType: "UserType",
                                kind: "LinkedField",
                                name: "dropReminder",
                                plural: !1,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "email",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "emailVerified",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "id",
                                    storageKey: null
                                }],
                                storageKey: null
                            }],
                            storageKey: null
                        }]
                    },
                    params: {
                        cacheID: "3173cf4c564df36760eb41f071073220",
                        id: null,
                        metadata: {},
                        name: "ReminderSignupModalContentMutation",
                        operationKind: "mutation",
                        text: "mutation ReminderSignupModalContentMutation(\n  $input: DropReminderMutationInput!\n) {\n  users {\n    dropReminder(input: $input) {\n      ...ReminderConfirmationModalContent_user\n      id\n    }\n  }\n}\n\nfragment ReminderConfirmationModalContent_user on UserType {\n  email\n  emailVerified\n}\n"
                    }
                }
            }();
            a.hash = "05a261246450e0d92681924ad8194062", e.default = a
        },
        91177: function(n, e, t) {
            t.r(e);
            var a = function() {
                var n = [{
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "address"
                    }, {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "collection"
                    }],
                    e = [{
                        kind: "Variable",
                        name: "address",
                        variableName: "address"
                    }],
                    t = [{
                        kind: "Variable",
                        name: "collection",
                        variableName: "collection"
                    }],
                    a = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "relayId",
                        storageKey: null
                    },
                    i = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "label",
                        storageKey: null
                    },
                    r = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "startTime",
                        storageKey: null
                    },
                    l = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "endTime",
                        storageKey: null
                    },
                    o = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "reminderEnabled",
                        storageKey: null
                    },
                    u = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "id",
                        storageKey: null
                    },
                    s = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "name",
                        storageKey: null
                    };
                return {
                    fragment: {
                        argumentDefinitions: n,
                        kind: "Fragment",
                        metadata: null,
                        name: "ReminderSignupModalContent_userDataQuery",
                        selections: [{
                            alias: null,
                            args: e,
                            concreteType: "AccountType",
                            kind: "LinkedField",
                            name: "getAccount",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: null,
                                concreteType: "UserType",
                                kind: "LinkedField",
                                name: "user",
                                plural: !1,
                                selections: [{
                                    args: null,
                                    kind: "FragmentSpread",
                                    name: "ReminderConfirmationModalContent_user"
                                }],
                                storageKey: null
                            }],
                            storageKey: null
                        }, {
                            alias: null,
                            args: t,
                            concreteType: "CollectionType",
                            kind: "LinkedField",
                            name: "collection",
                            plural: !1,
                            selections: [{
                                args: null,
                                kind: "FragmentSpread",
                                name: "ReminderConfirmationModalContent_collection"
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
                                    name: "stages",
                                    plural: !0,
                                    selections: [a, i, {
                                        args: null,
                                        kind: "FragmentSpread",
                                        name: "StageInfo_data"
                                    }, r, l, {
                                        kind: "InlineDataFragmentSpread",
                                        name: "useUpcomingStages_data",
                                        selections: [r, l],
                                        args: null,
                                        argumentDefinitions: []
                                    }, o],
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
                        argumentDefinitions: n,
                        kind: "Operation",
                        name: "ReminderSignupModalContent_userDataQuery",
                        selections: [{
                            alias: null,
                            args: e,
                            concreteType: "AccountType",
                            kind: "LinkedField",
                            name: "getAccount",
                            plural: !1,
                            selections: [{
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
                                    name: "email",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "emailVerified",
                                    storageKey: null
                                }, u],
                                storageKey: null
                            }, u],
                            storageKey: null
                        }, {
                            alias: null,
                            args: t,
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
                                name: "isCategory",
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                concreteType: "DropType",
                                kind: "LinkedField",
                                name: "drop",
                                plural: !1,
                                selections: [s, u, {
                                    alias: null,
                                    args: null,
                                    concreteType: "DropStageType",
                                    kind: "LinkedField",
                                    name: "stages",
                                    plural: !0,
                                    selections: [i, r, l, o, a, u, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "allowlistSet",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "stageType",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        concreteType: "ContextUserDataType",
                                        kind: "LinkedField",
                                        name: "contextUserData",
                                        plural: !1,
                                        selections: [{
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "isEligible",
                                            storageKey: null
                                        }],
                                        storageKey: null
                                    }],
                                    storageKey: null
                                }],
                                storageKey: null
                            }, s, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "imageUrl",
                                storageKey: null
                            }, u],
                            storageKey: null
                        }]
                    },
                    params: {
                        cacheID: "b7ea744995c7b75704cbd9be0b21def7",
                        id: null,
                        metadata: {},
                        name: "ReminderSignupModalContent_userDataQuery",
                        operationKind: "query",
                        text: "query ReminderSignupModalContent_userDataQuery(\n  $address: AddressScalar!\n  $collection: CollectionSlug!\n) {\n  getAccount(address: $address) {\n    user {\n      ...ReminderConfirmationModalContent_user\n      id\n    }\n    id\n  }\n  collection(collection: $collection) {\n    ...ReminderConfirmationModalContent_collection\n    drop {\n      stages {\n        relayId\n        label\n        ...StageInfo_data\n        startTime\n        endTime\n        ...useUpcomingStages_data\n        reminderEnabled\n        id\n      }\n      id\n    }\n    id\n  }\n}\n\nfragment AddToCalendar_collection on CollectionType {\n  ...collection_url\n  drop {\n    name\n    id\n  }\n}\n\nfragment AddToCalendar_stage on DropStageType {\n  label\n  startTime\n  endTime\n}\n\nfragment ReminderConfirmationModalContent_collection on CollectionType {\n  ...AddToCalendar_collection\n  name\n  imageUrl\n  drop {\n    stages {\n      ...AddToCalendar_stage\n      reminderEnabled\n      relayId\n      id\n    }\n    id\n  }\n}\n\nfragment ReminderConfirmationModalContent_user on UserType {\n  email\n  emailVerified\n}\n\nfragment StageInfo_data on DropStageType {\n  endTime\n  label\n  startTime\n  allowlistSet\n  stageType\n  contextUserData {\n    isEligible\n  }\n}\n\nfragment collection_url on CollectionType {\n  slug\n  isCategory\n}\n\nfragment useUpcomingStages_data on DropStageType {\n  startTime\n  endTime\n}\n"
                    }
                }
            }();
            a.hash = "a5f8d23c57fd7387e3823251acfa6f1f", e.default = a
        },
        65659: function(n, e, t) {
            t.r(e);
            var a = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "StageInfo_data",
                selections: [{
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "endTime",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "label",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "startTime",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "allowlistSet",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "stageType",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    concreteType: "ContextUserDataType",
                    kind: "LinkedField",
                    name: "contextUserData",
                    plural: !1,
                    selections: [{
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "isEligible",
                        storageKey: null
                    }],
                    storageKey: null
                }],
                type: "DropStageType",
                abstractKey: null,
                hash: "a649e144deca95e86395e111e448a08e"
            };
            e.default = a
        },
        96343: function(n, e, t) {
            t.r(e);
            var a = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "StageStartCountdown_stage",
                selections: [{
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "startTime",
                    storageKey: null
                }],
                type: "DropStageType",
                abstractKey: null,
                hash: "47f239c50d0b82a6dc9e904a78d96963"
            };
            e.default = a
        },
        56671: function(n, e, t) {
            t.r(e);
            var a = function() {
                var n = [{
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "collection"
                    }],
                    e = [{
                        kind: "Variable",
                        name: "collection",
                        variableName: "collection"
                    }],
                    t = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "relayId",
                        storageKey: null
                    },
                    a = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "startTime",
                        storageKey: null
                    },
                    i = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "endTime",
                        storageKey: null
                    },
                    r = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "stageType",
                        storageKey: null
                    },
                    l = {
                        alias: null,
                        args: null,
                        concreteType: "ContextUserDataType",
                        kind: "LinkedField",
                        name: "contextUserData",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "availableMints",
                            storageKey: null
                        }],
                        storageKey: null
                    },
                    o = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "id",
                        storageKey: null
                    };
                return {
                    fragment: {
                        argumentDefinitions: n,
                        kind: "Fragment",
                        metadata: null,
                        name: "useCtaStageStateQuery",
                        selections: [{
                            alias: null,
                            args: e,
                            concreteType: "CollectionType",
                            kind: "LinkedField",
                            name: "collection",
                            plural: !1,
                            selections: [{
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
                                    selections: [t, a, i, r, l],
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
                        argumentDefinitions: n,
                        kind: "Operation",
                        name: "useCtaStageStateQuery",
                        selections: [{
                            alias: null,
                            args: e,
                            concreteType: "CollectionType",
                            kind: "LinkedField",
                            name: "collection",
                            plural: !1,
                            selections: [{
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
                                    selections: [t, a, i, r, l, o],
                                    storageKey: null
                                }, o],
                                storageKey: null
                            }, o],
                            storageKey: null
                        }]
                    },
                    params: {
                        cacheID: "bf8b2572ecaf77201e90d0d8e76079f5",
                        id: null,
                        metadata: {},
                        name: "useCtaStageStateQuery",
                        operationKind: "query",
                        text: "query useCtaStageStateQuery(\n  $collection: CollectionSlug!\n) {\n  collection(collection: $collection) {\n    drop {\n      ctaStage {\n        relayId\n        startTime\n        endTime\n        stageType\n        contextUserData {\n          availableMints\n        }\n        id\n      }\n      id\n    }\n    id\n  }\n}\n"
                    }
                }
            }();
            a.hash = "63d7f96eb88de34e31ed02d5ed874b7f", e.default = a
        },
        48330: function(n, e, t) {
            t.r(e);
            var a = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "useDropState_data",
                selections: [{
                    alias: null,
                    args: null,
                    concreteType: "DropStageType",
                    kind: "LinkedField",
                    name: "stages",
                    plural: !0,
                    selections: [{
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "startTime",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "endTime",
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
                }],
                type: "DropType",
                abstractKey: null,
                hash: "7822bcb1227f39b88a8320131f5d3e49"
            };
            e.default = a
        },
        17017: function(n, e, t) {
            t.r(e);
            var a = function() {
                var n = [{
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "collection"
                    }],
                    e = [{
                        kind: "Variable",
                        name: "collection",
                        variableName: "collection"
                    }],
                    t = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "label",
                        storageKey: null
                    },
                    a = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "startTime",
                        storageKey: null
                    },
                    i = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "endTime",
                        storageKey: null
                    },
                    r = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "perWalletLimit",
                        storageKey: null
                    },
                    l = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "stageType",
                        storageKey: null
                    },
                    o = {
                        alias: null,
                        args: null,
                        concreteType: "ContextUserDataType",
                        kind: "LinkedField",
                        name: "contextUserData",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "isEligible",
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "availableMints",
                            storageKey: null
                        }],
                        storageKey: null
                    },
                    u = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "id",
                        storageKey: null
                    };
                return {
                    fragment: {
                        argumentDefinitions: n,
                        kind: "Fragment",
                        metadata: null,
                        name: "usePolledDropDataQuery",
                        selections: [{
                            alias: null,
                            args: e,
                            concreteType: "CollectionType",
                            kind: "LinkedField",
                            name: "collection",
                            plural: !1,
                            selections: [{
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
                                    selections: [t, a, i, r, l, o],
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
                        argumentDefinitions: n,
                        kind: "Operation",
                        name: "usePolledDropDataQuery",
                        selections: [{
                            alias: null,
                            args: e,
                            concreteType: "CollectionType",
                            kind: "LinkedField",
                            name: "collection",
                            plural: !1,
                            selections: [{
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
                                    selections: [t, a, i, r, l, o, u],
                                    storageKey: null
                                }, u],
                                storageKey: null
                            }, u],
                            storageKey: null
                        }]
                    },
                    params: {
                        cacheID: "2f237e7e64cbb180d095c415efbc4452",
                        id: null,
                        metadata: {},
                        name: "usePolledDropDataQuery",
                        operationKind: "query",
                        text: "query usePolledDropDataQuery(\n  $collection: CollectionSlug\n) {\n  collection(collection: $collection) {\n    drop {\n      ctaStage {\n        label\n        startTime\n        endTime\n        perWalletLimit\n        stageType\n        contextUserData {\n          isEligible\n          availableMints\n        }\n        id\n      }\n      id\n    }\n    id\n  }\n}\n"
                    }
                }
            }();
            a.hash = "f762efb2271872d4eacb0f91c2bb823f", e.default = a
        },
        80738: function(n, e, t) {
            t.r(e);
            var a = function() {
                var n = {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "startTime",
                    storageKey: null
                };
                return {
                    argumentDefinitions: [],
                    kind: "Fragment",
                    metadata: null,
                    name: "useShouldShowReminder_data",
                    selections: [{
                        alias: null,
                        args: null,
                        concreteType: "DropStageType",
                        kind: "LinkedField",
                        name: "stages",
                        plural: !0,
                        selections: [{
                            kind: "InlineDataFragmentSpread",
                            name: "useUpcomingStages_data",
                            selections: [n, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "endTime",
                                storageKey: null
                            }],
                            args: null,
                            argumentDefinitions: []
                        }, n],
                        storageKey: null
                    }],
                    type: "DropType",
                    abstractKey: null
                }
            }();
            a.hash = "218ca319ab01e6d480086b1240620c08", e.default = a
        },
        71939: function(n, e, t) {
            t.r(e);
            var a = {
                kind: "InlineDataFragment",
                name: "useUpcomingStages_data",
                hash: "00153ad9255053e085fd41545f35eb16"
            };
            e.default = a
        }
    }
]);
//# sourceMappingURL=25897-e90be63aa59b5181.js.map