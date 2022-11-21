"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [18026], {
        69783: function(n, e, t) {
            t.d(e, {
                G: function() {
                    return b
                },
                W: function() {
                    return C
                }
            });
            var i = t(19989),
                r = t(24246),
                a = (t(27378), t(47892)),
                o = t(81480),
                l = t(53585),
                c = t(39283),
                s = t(45116),
                d = t(72686),
                u = t(48599),
                h = t(28828),
                x = t(20807);

            function g() {
                var n = (0, i.Z)(["\n  border-radius: ", ";\n"]);
                return g = function() {
                    return n
                }, n
            }

            function m() {
                var n = (0, i.Z)(["\n  border-radius: ", ";\n  width: 100%;\n  height: 100%;\n"]);
                return m = function() {
                    return n
                }, n
            }

            function f() {
                var n = (0, i.Z)(["\n      width: 120px;\n      height: 120px;\n      flex-basis: 120px;\n    "]);
                return f = function() {
                    return n
                }, n
            }

            function p() {
                var n = (0, i.Z)(["\n      width: 180px;\n      height: 180px;\n      flex-basis: 180px;\n    "]);
                return p = function() {
                    return n
                }, n
            }

            function j() {
                var n = (0, i.Z)(["\n      border: 6px solid ", ";\n    "]);
                return j = function() {
                    return n
                }, n
            }

            function v() {
                var n = (0, i.Z)(["\n  width: 90px;\n  height: 90px;\n  flex-basis: 90px;\n\n  ", "\n\n  // TODO(@auster-eth): Handle dark theme box-shadow\n  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.08);\n  border: 4px solid ", ";\n  ", "\n  border-radius: ", ";\n  position: relative;\n  z-index: 1;\n  background: ", ";\n"]);
                return v = function() {
                    return n
                }, n
            }

            function b(n) {
                var e = n.imageUrl,
                    t = n.variant,
                    i = n.altText;
                if (!e) return (0, r.jsx)(C, {
                    $imageVariant: t,
                    children: (0, r.jsx)(d.O.Block, {})
                });
                var a = (0, x.Y3)(e),
                    o = a ? void 0 : 2 * h.eg,
                    c = a ? void 0 : 0;
                return (0, r.jsx)(s.e, {
                    trigger: function(n) {
                        return (0, r.jsx)(C, {
                            $imageVariant: t,
                            display: "inline-flex",
                            children: (0, r.jsx)(w, {
                                $imageVariant: t,
                                onClick: n,
                                children: (0, r.jsx)(k, {
                                    $imageVariant: t,
                                    alt: i,
                                    height: o,
                                    layout: "fill",
                                    objectFit: "cover",
                                    priority: !0,
                                    sizes: "".concat(h.eg, "px"),
                                    src: e,
                                    width: o
                                })
                            })
                        })
                    },
                    children: (0, r.jsx)(l.g, {
                        height: "100%",
                        position: "relative",
                        width: "100%",
                        children: (0, r.jsx)(k, {
                            $imageVariant: t,
                            alt: i,
                            height: c,
                            layout: "fill",
                            objectFit: "cover",
                            sizes: "100%",
                            src: e,
                            width: c
                        })
                    })
                })
            }
            var k = (0, a.ZP)(c.E).withConfig({
                    componentId: "sc-6d5b054-0"
                })(g(), (function(n) {
                    return "profile" === n.$imageVariant ? n.theme.borderRadius.circle : n.theme.borderRadius.default
                })),
                w = (0, a.ZP)(u.k).withConfig({
                    componentId: "sc-6d5b054-1"
                })(m(), (function(n) {
                    return "profile" === n.$imageVariant ? n.theme.borderRadius.circle : "none"
                })),
                C = (0, a.ZP)(l.g).withConfig({
                    componentId: "sc-6d5b054-2"
                })(v(), (0, o.FD)({
                    small: (0, a.iv)(f()),
                    large: (0, a.iv)(p())
                }), (function(n) {
                    return n.theme.colors.background
                }), (0, o.FD)({
                    medium: (0, a.iv)(j(), (function(n) {
                        return n.theme.colors.background
                    }))
                }), (function(n) {
                    return "profile" === n.$imageVariant ? n.theme.borderRadius.circle : n.theme.borderRadius.pill
                }), (function(n) {
                    return n.theme.colors.background
                }))
        },
        90635: function(n, e, t) {
            t.d(e, {
                B: function() {
                    return u
                }
            });
            var i = t(23842),
                r = t(35230),
                a = t.n(r),
                o = t(24246),
                l = (t(27378), t(65175)),
                c = t(87481),
                s = t(79790),
                d = t(6723),
                u = (t(59809), function(n) {
                    var e = n.collectionId,
                        r = n.children,
                        u = n.tooltip,
                        h = (0, d.q)("collections"),
                        x = (0, s.e)(),
                        g = x.attempt,
                        m = x.showSuccessMessage,
                        f = (0, c.b)().mutate,
                        p = function() {
                            var n = (0, i.Z)(a().mark((function n() {
                                return a().wrap((function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            return n.next = 2, g((0, i.Z)(a().mark((function n() {
                                                return a().wrap((function(n) {
                                                    for (;;) switch (n.prev = n.next) {
                                                        case 0:
                                                            return n.next = 2, f(t(76955), {
                                                                collectionId: null !== e && void 0 !== e ? e : ""
                                                            }, {
                                                                shouldAuthenticate: !0
                                                            });
                                                        case 2:
                                                            m(h("refreshStats.successMessage", "We've queued this collection for an update! Check back in a minute..."));
                                                        case 3:
                                                        case "end":
                                                            return n.stop()
                                                    }
                                                }), n)
                                            }))));
                                        case 2:
                                        case "end":
                                            return n.stop()
                                    }
                                }), n)
                            })));
                            return function() {
                                return n.apply(this, arguments)
                            }
                        }();
                    return (0, o.jsx)(l.u, {
                        content: h("refreshStats.refreshCTA", "Refresh stats"),
                        disabled: !u,
                        children: r(p)
                    })
                })
        },
        6222: function(n, e, t) {
            t.d(e, {
                I: function() {
                    return X
                }
            });
            var i = t(19989),
                r = t(24246),
                a = t(27378),
                o = t(74387),
                l = t(47892),
                c = t(23842),
                s = t(52050),
                d = t(35230),
                u = t.n(d),
                h = t(4402),
                x = t(1569),
                g = t(66843),
                m = t(53585),
                f = t(18579),
                p = t(96150),
                j = t(81399),
                v = t(44668),
                b = t(65175),
                k = t(2427),
                w = t(87481),
                C = t(47748),
                I = t(79790),
                y = t(6723),
                T = t(41237),
                W = (t(59809), t(87821)),
                B = function(n) {
                    var e, i = n.data,
                        o = n.slug,
                        l = n.variant,
                        d = void 0 === l ? "button" : l,
                        B = (0, y.q)("components"),
                        Z = (0, h.useFragment)(t(32177), i),
                        S = (0, f.Fg)().theme,
                        A = (0, a.useState)(!1),
                        R = A[0],
                        F = A[1],
                        D = (0, s.Z)((0, C.i)(t(81214), {
                            collection: o
                        }), 1)[0];
                    (0, a.useEffect)((function() {
                        var n;
                        F(!!(null === D || void 0 === D || null === (n = D.collection) || void 0 === n ? void 0 : n.isWatching))
                    }), [null === D || void 0 === D || null === (e = D.collection) || void 0 === e ? void 0 : e.isWatching]);
                    var L = (0, w.b)(),
                        O = L.wallet,
                        U = L.mutate,
                        E = L.updateContext,
                        V = (0, I.e)(),
                        P = V.attempt,
                        M = V.showSuccessMessage,
                        K = O.getActiveAccountKey(),
                        _ = R ? B("collections.watchlistButton.watching", "Watching") : B("collections.watchlistButton.add", "Add to watchlist"),
                        q = function() {
                            var n = (0, c.Z)(u().mark((function n() {
                                return u().wrap((function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            if (K) {
                                                n.next = 4;
                                                break
                                            }
                                            return (0, T.yb)({
                                                collectionSlug: o
                                            }), E({
                                                isWalletSidebarOpen: !0
                                            }), n.abrupt("return");
                                        case 4:
                                            return n.next = 6, P((0, c.Z)(u().mark((function n() {
                                                var e;
                                                return u().wrap((function(n) {
                                                    for (;;) switch (n.prev = n.next) {
                                                        case 0:
                                                            return n.next = 3, U(t(57556), {
                                                                collectionId: null !== (e = null === Z || void 0 === Z ? void 0 : Z.relayId) && void 0 !== e ? e : "",
                                                                isWatching: !R
                                                            }, {
                                                                shouldAuthenticate: !0,
                                                                updater: function(n) {
                                                                    if (null === Z || void 0 === Z ? void 0 : Z.relayId) {
                                                                        var e = n.get(Z.relayId);
                                                                        e && e.setValue(!R, "isWatching")
                                                                    }
                                                                }
                                                            });
                                                        case 3:
                                                            n.sent.collections.updateWatchlist && (R ? (0, T.gM)({
                                                                collectionSlug: o
                                                            }) : (0, T.wd)({
                                                                collectionSlug: o
                                                            }), M((0, r.jsxs)(p.k, {
                                                                children: [R ? B("collections.watchlistButton.removeSuccess", "Removed from watchlist.") : B("collections.watchlistButton.addSuccess", "Added to watchlist."), (0, r.jsx)(m.g, {
                                                                    marginLeft: "8px",
                                                                    children: (0, r.jsx)(x.r, {
                                                                        href: k.I,
                                                                        children: B("collections.watchlistButton.cta", "View")
                                                                    })
                                                                })]
                                                            })), F(!R));
                                                        case 5:
                                                        case "end":
                                                            return n.stop()
                                                    }
                                                }), n)
                                            }))));
                                        case 6:
                                        case "end":
                                            return n.stop()
                                    }
                                }), n)
                            })));
                            return function() {
                                return n.apply(this, arguments)
                            }
                        }(),
                        z = "light" === S ? W.r7.charcoal : W.r7.fog;
                    return "option" === d ? (0, r.jsxs)(v.ck, {
                        onClick: q,
                        children: [(0, r.jsx)(p.k, {
                            marginRight: 16,
                            children: (0, r.jsx)(g.r, {
                                active: R,
                                color: z,
                                height: 24,
                                width: 24
                            })
                        }), (0, r.jsx)(v.ck.Content, {
                            children: (0, r.jsx)(v.ck.Title, {
                                children: _
                            })
                        })]
                    }) : (0, r.jsx)(b.u, {
                        content: R ? B("collections.watchlistButton.watchingTooltip", "Watching") : B("collections.watchlistButton.addTooltip", "Add to watchlist"),
                        hideOnClick: !0,
                        children: (0, r.jsx)(j.h, {
                            "aria-label": R ? B("collections.watchlistButton.watchingLabel", "Watching") : B("collections.watchlistButton.addLabel", "Add to watchlist"),
                            "data-testid": "phoenix-watchlist-button",
                            height: "60px",
                            padding: "0 24px 0 20px",
                            onClick: q,
                            children: (0, r.jsx)(g.r, {
                                active: R,
                                color: z,
                                height: 20,
                                width: 20
                            })
                        })
                    })
                },
                Z = t(48257),
                S = t(71141),
                A = t(13291),
                R = t(33181),
                F = t(77795),
                D = t(377),
                L = t(20225),
                O = t(18616),
                U = t(72363),
                E = t(90635),
                V = t(67882),
                P = t(87916),
                M = t(21697),
                K = t(2082),
                _ = t(40869),
                q = t(58241),
                z = t(10412),
                $ = t(23176),
                N = t(89824);

            function H() {
                var n = (0, i.Z)(["\n  font-size: 12px;\n  color: ", ";\n"]);
                return H = function() {
                    return n
                }, n
            }

            function J() {
                var n = (0, i.Z)(["\n  margin-right: 0px;\n  font-weight: 600;\n"]);
                return J = function() {
                    return n
                }, n
            }

            function Q() {
                var n = (0, i.Z)(["\n  margin-right: 0px;\n  font-weight: 600;\n"]);
                return Q = function() {
                    return n
                }, n
            }
            var X = function(n) {
                    var e = n.collectionWatchlistDataKey,
                        t = n.collectionUrlDataKey,
                        i = n.socialData,
                        a = n.shareData,
                        l = n.toggleMoreDropdown,
                        c = n.slug,
                        s = n.relayId,
                        d = n.variant,
                        u = n.address,
                        h = n.ens,
                        x = n.isEditable,
                        g = n.isMintable,
                        f = n.isCurrentUser,
                        k = (0, y.q)("phoenix"),
                        C = (0, M.W)(),
                        I = C.isOpen,
                        T = C.close,
                        W = C.open,
                        Z = (0, L.Fg)().theme,
                        H = (0, w.b)().isStaff,
                        J = (0, o.Z)("(min-width: ".concat(U.AV.lg, "px)"), !0),
                        Q = (0, o.Z)("(min-width: ".concat(U.AV.md, "px)"), !0),
                        X = "light" === Z ? "oil" : "fog",
                        en = (0, z.g1)(u);
                    return (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsxs)(p.k, {
                            marginTop: {
                                _: "16px",
                                sm: "0px"
                            },
                            position: "relative",
                            zIndex: F.k.PHOENIX_HEADER,
                            children: [(0, r.jsxs)(p.k, {
                                alignItems: "center",
                                children: [(0, r.jsx)(U.pU, {
                                    greaterThan: "md",
                                    children: e && "collection" === d && (0, r.jsx)(m.g, {
                                        marginRight: "4px",
                                        children: (0, r.jsx)(B, {
                                            data: e,
                                            slug: c
                                        })
                                    })
                                }), (a || t) && (0, r.jsx)(S.m, {
                                    object: a ? "account" : "collection",
                                    url: a ? (0, K.E)(a) : t ? (0, $.vg)(t) : "",
                                    children: (0, r.jsx)(b.u, {
                                        content: k("actionBar.tooltip.share", "Share"),
                                        hideOnClick: !0,
                                        touch: !1,
                                        children: (0, r.jsx)(m.g, {
                                            marginRight: "4px",
                                            children: (0, r.jsx)(j.h, {
                                                "aria-label": k("actionBar.share", "Share"),
                                                children: (0, r.jsx)(nn, {
                                                    value: "share"
                                                })
                                            })
                                        })
                                    })
                                })]
                            }), (0, r.jsx)(O.L, {
                                appendTo: R.W6 ? void 0 : document.body,
                                content: function(n) {
                                    var a = n.List,
                                        o = n.Item,
                                        l = n.close;
                                    return (0, r.jsxs)(a, {
                                        children: [!Q && u && (0, r.jsxs)(r.Fragment, {
                                            children: [(0, r.jsx)(o, {
                                                children: (0, r.jsx)(Y, {
                                                    children: k("actionBar.addressesHeader", "ADDRESSES")
                                                })
                                            }), h && (0, r.jsx)(o, {
                                                children: (0, r.jsx)(o.Content, {
                                                    style: {
                                                        marginRight: 0
                                                    },
                                                    children: (0, r.jsx)(N.e, {
                                                        ItemComponent: o,
                                                        chainIdentifier: "ETHEREUM",
                                                        fontSize: "14px",
                                                        text: h
                                                    })
                                                })
                                            }), (0, r.jsx)(o, {
                                                children: (0, r.jsx)(o.Content, {
                                                    style: {
                                                        marginRight: 0
                                                    },
                                                    children: (0, r.jsx)(N.e, {
                                                        ItemComponent: o,
                                                        chainIdentifier: en,
                                                        fontSize: "14px",
                                                        label: (0, _.FP)(u),
                                                        text: u
                                                    })
                                                })
                                            })]
                                        }), !J && (0, r.jsxs)(r.Fragment, {
                                            children: [i.length > 0 && (0, r.jsx)(o, {
                                                children: (0, r.jsx)(Y, {
                                                    children: k("actionBar.links", "LINKS")
                                                })
                                            }), i.map((function(n) {
                                                var e = n.url,
                                                    t = n.icon,
                                                    i = n.tooltip;
                                                return (0, r.jsxs)(o, {
                                                    href: null !== e && void 0 !== e ? e : void 0,
                                                    children: [(0, r.jsx)(v.V1, {
                                                        color: X,
                                                        children: t
                                                    }), (0, r.jsx)(o.Content, {
                                                        children: (0, r.jsx)(o.Title, {
                                                            children: i
                                                        })
                                                    })]
                                                }, e)
                                            })), (0, r.jsx)(o, {
                                                children: (0, r.jsx)(Y, {
                                                    children: k("actionBar.more", "MORE")
                                                })
                                            })]
                                        }), "profile" === d && f && (0, r.jsxs)(r.Fragment, {
                                            children: [(0, r.jsxs)(o, {
                                                href: "/account/settings",
                                                children: [(0, r.jsx)(o.Avatar, {
                                                    color: X,
                                                    icon: "settings"
                                                }), (0, r.jsx)(o.Content, {
                                                    children: (0, r.jsx)(o.Title, {
                                                        children: k("actionBar.settings", "Settings")
                                                    })
                                                })]
                                            }), (0, r.jsx)(U.pU, {
                                                greaterThanOrEqual: "lg",
                                                children: (0, r.jsx)(o, {
                                                    href: "/account/settings?tab=featured",
                                                    children: (0, r.jsx)(o.Content, {
                                                        children: (0, r.jsxs)(p.k, {
                                                            children: [(0, r.jsx)(p.k, {
                                                                marginRight: "16px",
                                                                children: (0, r.jsx)(A.$, {})
                                                            }), (0, r.jsx)(D._, {
                                                                children: (0, r.jsx)(o.Title, {
                                                                    children: k("actionBar.featuredItems", "Featured items")
                                                                })
                                                            })]
                                                        })
                                                    })
                                                })
                                            })]
                                        }), x && t && (0, r.jsxs)(r.Fragment, {
                                            children: [(0, r.jsxs)(o, {
                                                href: (0, $.JJ)(t),
                                                children: [(0, r.jsx)(o.Avatar, {
                                                    color: X,
                                                    icon: "edit"
                                                }), (0, r.jsx)(o.Content, {
                                                    children: (0, r.jsx)(o.Title, {
                                                        children: k("actionBar.edit", "Edit")
                                                    })
                                                })]
                                            }), (0, r.jsxs)(o, {
                                                href: (0, $.dq)(t),
                                                children: [(0, r.jsx)(o.Avatar, {
                                                    color: X,
                                                    icon: "attach_money"
                                                }), (0, r.jsx)(o.Content, {
                                                    children: (0, r.jsx)(o.Title, {
                                                        children: k("actionBar.creatorEarnings", "Creator earnings")
                                                    })
                                                })]
                                            }), (0, r.jsx)(b.u, {
                                                content: k("actionBar.notCreatedOnOS", "Your collection was not created on OpenSea"),
                                                disabled: g,
                                                children: (0, r.jsxs)(o, {
                                                    disabled: !g,
                                                    href: (0, $.u6)(t),
                                                    children: [(0, r.jsx)(o.Avatar, {
                                                        color: X,
                                                        icon: "add"
                                                    }), (0, r.jsx)(o.Content, {
                                                        children: (0, r.jsx)(o.Title, {
                                                            children: k("actionBar.addItem", "Add item")
                                                        })
                                                    })]
                                                })
                                            })]
                                        }), e && "collection" === d && (0, r.jsx)(U.pU, {
                                            lessThan: "lg",
                                            children: (0, r.jsx)(B, {
                                                data: e,
                                                slug: c,
                                                variant: "option"
                                            })
                                        }), (0, r.jsxs)(o, {
                                            onClick: function() {
                                                W(), l()
                                            },
                                            children: [(0, r.jsx)(o.Avatar, {
                                                color: X,
                                                icon: "flag"
                                            }), (0, r.jsx)(o.Content, {
                                                children: (0, r.jsx)(o.Title, {
                                                    children: k("actionBar.report", "Report")
                                                })
                                            })]
                                        }), "collection" === d && H && (0, r.jsxs)(r.Fragment, {
                                            children: [(0, r.jsx)(E.B, {
                                                collectionId: s,
                                                tooltip: !1,
                                                children: function(n) {
                                                    return (0, r.jsxs)(o, {
                                                        onClick: n,
                                                        children: [(0, r.jsx)(o.Avatar, {
                                                            color: X,
                                                            icon: "refresh"
                                                        }), (0, r.jsx)(o.Content, {
                                                            children: (0, r.jsx)(o.Title, {
                                                                children: k("actionBar.refreshStats", "Refresh stats")
                                                            })
                                                        })]
                                                    })
                                                }
                                            }), (0, r.jsxs)(o, {
                                                href: (0, q.k4)(s),
                                                children: [(0, r.jsx)(o.Avatar, {
                                                    color: X,
                                                    icon: "vpn_key"
                                                }), (0, r.jsx)(o.Content, {
                                                    children: (0, r.jsx)(o.Title, {
                                                        children: k("actionBar.djangoAdmin", "Django Admin")
                                                    })
                                                })]
                                            })]
                                        }), "profile" === d && H && (0, r.jsxs)(o, {
                                            href: (0, q.i5)(s),
                                            children: [(0, r.jsx)(o.Avatar, {
                                                color: X,
                                                icon: "vpn_key"
                                            }), (0, r.jsx)(o.Content, {
                                                children: (0, r.jsx)(o.Title, {
                                                    children: k("actionBar.djangoAdmin", "Django Admin")
                                                })
                                            })]
                                        })]
                                    })
                                },
                                placement: "bottom-end",
                                children: (0, r.jsx)(p.k, {
                                    alignItems: "center",
                                    children: (0, r.jsx)(j.h, {
                                        "aria-label": k("actionBar.moreDropdownLabel", "More dropdown"),
                                        onClick: l,
                                        children: (0, r.jsx)(G, {
                                            value: "more_horiz"
                                        })
                                    })
                                })
                            })]
                        }), (0, r.jsx)(V.y, {
                            isOpen: I,
                            subject: "collection" === d ? {
                                collection: s
                            } : {
                                account: s
                            },
                            onClose: T,
                            onSubmit: function(n) {
                                var e = n.additionalComments,
                                    t = n.originalCreatorUrl,
                                    i = n.reason;
                                "collection" === d && (0, P.nq)({
                                    slug: c,
                                    additionalComments: e,
                                    originalCreatorUrl: t,
                                    reason: i
                                }), "profile" === d && (0, P.AW)({
                                    address: u,
                                    additionalComments: e,
                                    originalCreatorUrl: t,
                                    reason: i
                                })
                            }
                        })]
                    })
                },
                Y = (0, l.ZP)(m.g).withConfig({
                    componentId: "sc-9f2c6943-0"
                })(H(), (function(n) {
                    return "dark" === n.theme.type ? n.theme.colors.gray : n.theme.colors.darkGray
                })),
                G = (0, l.ZP)(Z.J).attrs({
                    size: 24,
                    color: "black"
                }).withConfig({
                    componentId: "sc-9f2c6943-1"
                })(J()),
                nn = (0, l.ZP)(Z.J).attrs({
                    size: 20,
                    color: "black",
                    variant: "outlined"
                }).withConfig({
                    componentId: "sc-9f2c6943-2"
                })(Q())
        },
        89824: function(n, e, t) {
            t.d(e, {
                e: function() {
                    return y
                },
                p: function() {
                    return I
                }
            });
            var i = t(19989),
                r = t(24246),
                a = (t(27378), t(76449)),
                o = t(47892),
                l = t(38833),
                c = t(18893),
                s = t(48257),
                d = t(1569),
                u = t(29724),
                h = t(32969),
                x = t(18616),
                g = t(96150),
                m = t(16611),
                f = t(48599),
                p = t(40869),
                j = t(90761),
                v = t(70884);

            function b() {
                var n = (0, i.Z)(["\n  svg {\n    fill: inherit;\n  }\n"]);
                return b = function() {
                    return n
                }, n
            }

            function k() {
                var n = (0, i.Z)(["\n  color: ", ";\n\n  &:hover {\n    color: ", ";\n  }\n"]);
                return k = function() {
                    return n
                }, n
            }

            function w() {
                var n = (0, i.Z)(["\n  justify-content: center;\n  padding: 4px 8px 4px 0;\n  display: inline-flex;\n  align-items: center;\n  gap: 2px;\n  height: 32px;\n  fill: ", ";\n  border-radius: ", ";\n\n  ", "\n\n  &:hover {\n    ", ";\n    fill: ", ";\n  }\n\n  &:active {\n    ", ";\n    fill: ", ";\n  }\n\n  .PillContainer--eth-icon {\n    ", "\n  }\n"]);
                return w = function() {
                    return n
                }, n
            }

            function C() {
                var n = (0, i.Z)(["\n  width: 100%;\n\n  .CopierContainer--eth-icon {\n    ", "\n  }\n"]);
                return C = function() {
                    return n
                }, n
            }

            function I(n) {
                var e = n.address,
                    t = n.chainIdentifier,
                    i = n.ens,
                    a = n.variant,
                    o = void 0 === a ? "copy" : a,
                    l = n.url,
                    d = null,
                    u = (0, p.DY)(e);
                d = "copy" === o ? (0, r.jsx)(c.g, {
                    address: u
                }) : (0, r.jsxs)(g.k, {
                    alignItems: "center",
                    children: [(0, p.FP)(u), (0, r.jsx)(g.k, {
                        marginLeft: "4px",
                        children: (0, r.jsx)(s.J, {
                            fontWeight: 600,
                            size: 16,
                            value: "call_made",
                            variant: "outlined"
                        })
                    })]
                });
                var h = (0, r.jsx)(T, {
                        chain: t,
                        useV2Logo: !0
                    }),
                    m = function(n) {
                        var e = n.value,
                            t = n.withBorder,
                            i = void 0 === t || t;
                        return (0, r.jsxs)(B, {
                            as: "div",
                            pillVariant: o,
                            variant: "body-dark",
                            withBorder: !!i,
                            children: [h, e]
                        })
                    };
                return i ? (0, r.jsx)(x.L, {
                    content: function(n) {
                        var e = n.List,
                            a = n.Item;
                        return (0, r.jsxs)(e, {
                            children: [(0, r.jsx)(a, {
                                children: (0, r.jsx)(y, {
                                    ItemComponent: a,
                                    chainIdentifier: t,
                                    text: i
                                })
                            }), (0, r.jsx)(a, {
                                children: (0, r.jsx)(y, {
                                    ItemComponent: a,
                                    chainIdentifier: t,
                                    label: (0, p.FP)(u),
                                    text: u
                                })
                            })]
                        })
                    },
                    children: (0, r.jsx)(W, {
                        href: l,
                        target: "_blank",
                        children: (0, r.jsx)(f.k, {
                            children: (0, r.jsx)(m, {
                                value: (0, r.jsxs)(r.Fragment, {
                                    children: [i, (0, r.jsx)(g.k, {
                                        children: (0, r.jsx)(s.J, {
                                            fontWeight: 600,
                                            size: 16,
                                            value: "expand_more",
                                            variant: "outlined"
                                        })
                                    })]
                                })
                            })
                        })
                    })
                }) : (0, r.jsx)(W, {
                    href: l,
                    target: "_blank",
                    children: (0, r.jsx)(m, {
                        value: d
                    })
                })
            }
            var y = function(n) {
                    var e = n.text,
                        t = n.chainIdentifier,
                        i = n.fontSize,
                        a = n.label,
                        o = n.ItemComponent;
                    return (0, r.jsxs)(Z, {
                        text: e,
                        children: [(0, r.jsx)(o.Content, {
                            children: (0, r.jsxs)(g.k, {
                                alignItems: "center",
                                children: ["ETHEREUM" === t ? (0, r.jsx)(h.qE, {
                                    className: "CopierContainer--eth-icon",
                                    size: 20,
                                    src: v.Zn
                                }) : (0, r.jsx)(T, {
                                    chain: t
                                }), (0, r.jsx)(g.k, {
                                    fontSize: i,
                                    marginLeft: "12px",
                                    children: a || e
                                })]
                            })
                        }), (0, r.jsx)(o.Action, {
                            children: (0, r.jsx)(s.J, {
                                fontWeight: 600,
                                marginLeft: "auto",
                                size: 16,
                                value: "content_copy"
                            })
                        })]
                    })
                },
                T = (0, o.ZP)(l.q).withConfig({
                    componentId: "sc-73b4c1aa-0"
                })(b()),
                W = (0, o.ZP)(d.r).withConfig({
                    componentId: "sc-73b4c1aa-1"
                })(k(), (function(n) {
                    return n.theme.colors.text.subtle
                }), (function(n) {
                    return n.theme.colors.text.body
                })),
                B = (0, o.ZP)(m.WX).withConfig({
                    componentId: "sc-73b4c1aa-2"
                })(w(), (function(n) {
                    return n.theme.colors.text.heading
                }), (function(n) {
                    return n.theme.borderRadius.default
                }), (function(n) {
                    return "link" === n.pillVariant ? (0, j.Um)({
                        variants: {
                            light: {
                                backgroundColor: n.theme.colors.fog
                            },
                            dark: {
                                backgroundColor: n.theme.colors.oil
                            }
                        }
                    }) : (0, j.Um)({
                        variants: {
                            light: {
                                color: n.theme.colors.oil
                            },
                            dark: {
                                color: n.theme.colors.fog
                            }
                        }
                    })
                }), (function(n) {
                    return (0, j.Um)({
                        variants: {
                            dark: {
                                color: (0, a.m4)(n.theme.colors.fog, .8)
                            },
                            light: {
                                color: (0, a.m4)(n.theme.colors.oil, .8)
                            }
                        }
                    })
                }), (function(n) {
                    return (0, a.m4)(n.theme.colors.text.heading, .8)
                }), (function(n) {
                    return (0, j.Um)({
                        variants: {
                            dark: {
                                color: (0, a.m4)(n.theme.colors.fog, .6)
                            },
                            light: {
                                color: (0, a.m4)(n.theme.colors.oil, .6)
                            }
                        }
                    })
                }), (function(n) {
                    return (0, a.m4)(n.theme.colors.text.heading, .6)
                }), (0, j.Um)({
                    variants: {
                        dark: {
                            filter: "brightness(3)"
                        }
                    }
                })),
                Z = (0, o.ZP)(u.W).withConfig({
                    componentId: "sc-73b4c1aa-3"
                })(C(), (0, j.Um)({
                    variants: {
                        dark: {
                            filter: "brightness(3)"
                        }
                    }
                }))
        },
        41326: function(n, e, t) {
            t.d(e, {
                A: function() {
                    return v
                }
            });
            var i = t(19989),
                r = t(24246),
                a = (t(27378), t(47892)),
                o = t(48028),
                l = t(66791),
                c = t(23018),
                s = t(53585),
                d = t(96150),
                u = t(16611),
                h = t(72363),
                x = t(19378),
                g = t(72686),
                m = t(48599),
                f = t(47366);

            function p() {
                var n = (0, i.Z)(["\n  display: inline-flex;\n  vertical-align: middle;\n"]);
                return p = function() {
                    return n
                }, n
            }

            function j() {
                var n = (0, i.Z)(["\n  gap: 4px;\n  word-break: break-word;\n"]);
                return j = function() {
                    return n
                }, n
            }

            function v(n) {
                var e = n.isLoading,
                    t = n.headerText,
                    i = n.verificationStatus,
                    a = n.accountConfig,
                    l = n.isAccountCompromised;
                if (e) return (0, r.jsxs)(g.O.Row, {
                    children: [(0, r.jsx)(h.pU, {
                        greaterThanOrEqual: "sm",
                        children: (0, r.jsx)(g.O.Line, {
                            height: "56px",
                            width: "500px"
                        })
                    }), (0, r.jsx)(h.pU, {
                        lessThan: "sm",
                        children: (0, r.jsx)(d.k, {
                            marginTop: "8px",
                            children: (0, r.jsx)(g.O.Line, {
                                height: "34px",
                                width: "200px"
                            })
                        })
                    })]
                });
                var p = (!!a || void 0 !== l) && (0, r.jsx)(b, {
                    config: a,
                    isCompromised: !!l,
                    variant: "medium"
                });
                return p || (p = !!i && (0, f.R)(i) && (0, r.jsx)(x.u_, {
                    trigger: function(n) {
                        return (0, r.jsx)(s.g, {
                            display: "inline-flex",
                            marginBottom: "4px",
                            verticalAlign: "middle",
                            children: (0, r.jsx)(m.k, {
                                onClick: n,
                                children: (0, r.jsx)(o.o, {
                                    size: "medium",
                                    verificationStatus: i
                                })
                            })
                        })
                    },
                    children: (0, r.jsx)(c.O, {
                        verificationStatus: i
                    })
                })), (0, r.jsxs)(k, {
                    alignItems: "center",
                    "data-testid": "phoenix-header",
                    children: [(0, r.jsx)(h.pU, {
                        lessThan: "sm",
                        children: (0, r.jsxs)(u.WX, {
                            as: "h1",
                            lineHeight: "1.4",
                            margin: "0",
                            variant: "h3",
                            width: "100%",
                            children: [t, p]
                        })
                    }), (0, r.jsx)(h.pU, {
                        greaterThanOrEqual: "sm",
                        children: (0, r.jsxs)(u.WX, {
                            as: "h1",
                            lineHeight: "1.4",
                            margin: "0",
                            variant: "small-h2",
                            width: "100%",
                            children: [t, p]
                        })
                    })]
                })
            }
            var b = (0, a.ZP)(l.Z).withConfig({
                    componentId: "sc-5bb7da0c-0"
                })(p()),
                k = (0, a.ZP)(d.k).withConfig({
                    componentId: "sc-5bb7da0c-1"
                })(j())
        },
        83921: function(n, e, t) {
            t.d(e, {
                P: function() {
                    return h
                }
            });
            var i = t(19989),
                r = t(24246),
                a = (t(27378), t(47892)),
                o = t(53585),
                l = t(38996),
                c = t(96150),
                s = t(72363);

            function d() {
                var n = (0, i.Z)(["\n  background: ", ";\n  width: 100%;\n"]);
                return d = function() {
                    return n
                }, n
            }

            function u() {
                var n = (0, i.Z)(["\n  gap: 4px;\n"]);
                return u = function() {
                    return n
                }, n
            }

            function h(n) {
                var e = n.image,
                    t = n.header,
                    i = n.subheader,
                    a = n.socialBar,
                    d = n.content,
                    u = n.banner,
                    h = n.info,
                    m = n.tabs,
                    f = n.actionBar;
                return (0, r.jsxs)(c.k, {
                    flexDirection: "column",
                    width: "100%",
                    children: [u, (0, r.jsx)(l.W, {
                        children: (0, r.jsx)(r.Fragment, {
                            children: (0, r.jsxs)(c.k, {
                                alignItems: "center",
                                children: [(0, r.jsx)(o.g, {
                                    marginBottom: "16px",
                                    marginTop: u ? {
                                        _: "-36px",
                                        sm: "-86px",
                                        lg: "-156px"
                                    } : "16px",
                                    children: e
                                }), (0, r.jsx)(o.g, {
                                    marginLeft: "auto",
                                    children: (0, r.jsx)(s.pU, {
                                        lessThan: "sm",
                                        children: (0, r.jsxs)(g, {
                                            alignItems: "center",
                                            children: [a, f]
                                        })
                                    })
                                })]
                            })
                        })
                    }), (0, r.jsx)(x, {
                        children: (0, r.jsx)(l.W, {
                            children: (0, r.jsxs)(c.k, {
                                alignItems: "flex-start",
                                width: "100%",
                                children: [(0, r.jsx)(o.g, {
                                    maxWidth: {
                                        _: "90%",
                                        sm: "80%",
                                        lg: "60%"
                                    },
                                    minWidth: "0px",
                                    children: t
                                }), (0, r.jsx)(o.g, {
                                    marginLeft: "auto",
                                    children: (0, r.jsx)(s.pU, {
                                        greaterThanOrEqual: "sm",
                                        children: (0, r.jsxs)(c.k, {
                                            alignItems: "center",
                                            children: [a, f]
                                        })
                                    })
                                })]
                            })
                        })
                    }), (0, r.jsx)(o.g, {
                        children: i && (0, r.jsx)(l.W, {
                            marginTop: {
                                sm: "-6px"
                            },
                            children: i
                        })
                    }), (0, r.jsx)(l.W, {
                        paddingTop: "0",
                        children: (0, r.jsxs)(o.g, {
                            children: [h && (0, r.jsx)(o.g, {
                                children: h
                            }), m && (0, r.jsx)(o.g, {
                                marginBottom: "24px",
                                marginTop: "32px",
                                children: m
                            }), d]
                        })
                    })]
                })
            }
            var x = (0, a.ZP)(c.k).withConfig({
                    componentId: "sc-67797dfb-0"
                })(d(), (function(n) {
                    return n.theme.colors.background
                })),
                g = (0, a.ZP)(c.k).withConfig({
                    componentId: "sc-67797dfb-1"
                })(u())
        },
        41313: function(n, e, t) {
            t.d(e, {
                B: function() {
                    return g
                }
            });
            var i = t(19989),
                r = t(24246),
                a = (t(27378), t(47892)),
                o = t(1569),
                l = t(53585),
                c = t(96150),
                s = t(81399),
                d = t(72363),
                u = t(65175);

            function h() {
                var n = (0, i.Z)(["\n  gap: 4px;\n"]);
                return h = function() {
                    return n
                }, n
            }

            function x() {
                var n = (0, i.Z)(["\n  margin-left: 10px;\n  margin-right: 10px;\n  height: 24px;\n  width: 1px;\n  background-color: ", ";\n"]);
                return x = function() {
                    return n
                }, n
            }
            var g = function(n) {
                    var e = n.items,
                        t = n.renderIcon,
                        i = n.withDivider,
                        a = void 0 === i || i;
                    return (0, r.jsx)(r.Fragment, {
                        children: (0, r.jsx)(d.pU, {
                            greaterThan: "md",
                            children: (0, r.jsxs)(c.k, {
                                alignItems: "center",
                                children: [(0, r.jsx)(m, {
                                    children: e.map((function(n) {
                                        var e = n.url,
                                            i = n.icon,
                                            a = n.tooltip;
                                        return e && (0, r.jsx)(u.u, {
                                            content: a,
                                            hideOnClick: !0,
                                            children: (0, r.jsx)(o.r, {
                                                href: e,
                                                children: t ? t(i) : (0, r.jsx)(s.h, {
                                                    children: i
                                                })
                                            })
                                        }, e)
                                    }))
                                }), e.length > 0 && a && (0, r.jsx)(f, {})]
                            })
                        })
                    })
                },
                m = (0, a.ZP)(c.k).withConfig({
                    componentId: "sc-35f75ba4-0"
                })(h()),
                f = (0, a.ZP)(l.g).withConfig({
                    componentId: "sc-35f75ba4-1"
                })(x(), (function(n) {
                    return "dark" === n.theme.type ? n.theme.colors.ash : n.theme.colors.fog
                }))
        },
        17645: function(n, e, t) {
            t.d(e, {
                w: function() {
                    return l
                }
            });
            var i = t(24246),
                r = (t(27378), t(96150)),
                a = t(72363),
                o = t(72686);

            function l(n) {
                var e = n.isLoading,
                    t = n.addressPill,
                    l = n.accountLink,
                    c = n.joinedText;
                return e ? (0, i.jsx)(o.O.Row, {
                    children: (0, i.jsxs)(r.k, {
                        marginY: "16px",
                        children: [(0, i.jsx)(a.pU, {
                            greaterThanOrEqual: "sm",
                            children: (0, i.jsx)(o.O.Line, {
                                height: "32px",
                                width: "500px"
                            })
                        }), (0, i.jsx)(a.pU, {
                            lessThan: "sm",
                            children: (0, i.jsx)(o.O.Line, {
                                height: "32px",
                                width: "200px"
                            })
                        })]
                    })
                }) : (0, i.jsxs)(r.k, {
                    flexDirection: "column",
                    children: [(0, i.jsxs)(r.k, {
                        alignItems: "center",
                        children: [l && (0, i.jsx)(r.k, {
                            marginRight: "16px",
                            marginTop: "8px",
                            children: l
                        }), (0, i.jsx)(a.pU, {
                            greaterThanOrEqual: "sm",
                            children: (0, i.jsxs)(r.k, {
                                alignItems: "center",
                                children: [t, c]
                            })
                        })]
                    }), (0, i.jsx)(a.pU, {
                        lessThan: "sm",
                        children: c
                    })]
                })
            }
        },
        81214: function(n, e, t) {
            t.r(e);
            var i = function() {
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
                        name: "isWatching",
                        storageKey: null
                    };
                return {
                    fragment: {
                        argumentDefinitions: n,
                        kind: "Fragment",
                        metadata: null,
                        name: "CollectionWatchlistButtonIsWatchingQuery",
                        selections: [{
                            alias: null,
                            args: e,
                            concreteType: "CollectionType",
                            kind: "LinkedField",
                            name: "collection",
                            plural: !1,
                            selections: [t],
                            storageKey: null
                        }],
                        type: "Query",
                        abstractKey: null
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: n,
                        kind: "Operation",
                        name: "CollectionWatchlistButtonIsWatchingQuery",
                        selections: [{
                            alias: null,
                            args: e,
                            concreteType: "CollectionType",
                            kind: "LinkedField",
                            name: "collection",
                            plural: !1,
                            selections: [t, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "id",
                                storageKey: null
                            }],
                            storageKey: null
                        }]
                    },
                    params: {
                        cacheID: "e8e451b21d0e564c12023a426931cb87",
                        id: null,
                        metadata: {},
                        name: "CollectionWatchlistButtonIsWatchingQuery",
                        operationKind: "query",
                        text: "query CollectionWatchlistButtonIsWatchingQuery(\n  $collection: CollectionSlug!\n) {\n  collection(collection: $collection) {\n    isWatching\n    id\n  }\n}\n"
                    }
                }
            }();
            i.hash = "319f85dfa7d2b3cb2b04cfcf9a99f0d1", e.default = i
        },
        57556: function(n, e, t) {
            t.r(e);
            var i = function() {
                var n = [{
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "collectionId"
                    }, {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "isWatching"
                    }],
                    e = [{
                        alias: null,
                        args: null,
                        concreteType: "CollectionMutationType",
                        kind: "LinkedField",
                        name: "collections",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: [{
                                kind: "Variable",
                                name: "collection",
                                variableName: "collectionId"
                            }, {
                                kind: "Variable",
                                name: "isWatching",
                                variableName: "isWatching"
                            }],
                            kind: "ScalarField",
                            name: "updateWatchlist",
                            storageKey: null
                        }],
                        storageKey: null
                    }];
                return {
                    fragment: {
                        argumentDefinitions: n,
                        kind: "Fragment",
                        metadata: null,
                        name: "CollectionWatchlistButtonMutation",
                        selections: e,
                        type: "Mutation",
                        abstractKey: null
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: n,
                        kind: "Operation",
                        name: "CollectionWatchlistButtonMutation",
                        selections: e
                    },
                    params: {
                        cacheID: "8a68ae7f1ee93228abb37858e204042b",
                        id: null,
                        metadata: {},
                        name: "CollectionWatchlistButtonMutation",
                        operationKind: "mutation",
                        text: "mutation CollectionWatchlistButtonMutation(\n  $collectionId: CollectionRelayID!\n  $isWatching: Boolean!\n) {\n  collections {\n    updateWatchlist(collection: $collectionId, isWatching: $isWatching)\n  }\n}\n"
                    }
                }
            }();
            i.hash = "b7cf85b46b0a90d583bec5623f3e3c4c", e.default = i
        },
        32177: function(n, e, t) {
            t.r(e);
            var i = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "CollectionWatchlistButton_data",
                selections: [{
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "relayId",
                    storageKey: null
                }],
                type: "CollectionType",
                abstractKey: null,
                hash: "810b6ec3fc033a7027ebb3cf01b80dd7"
            };
            e.default = i
        },
        76955: function(n, e, t) {
            t.r(e);
            var i = function() {
                var n = [{
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "collectionId"
                    }],
                    e = [{
                        alias: null,
                        args: null,
                        concreteType: "CollectionMutationType",
                        kind: "LinkedField",
                        name: "collections",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: [{
                                kind: "Variable",
                                name: "collection",
                                variableName: "collectionId"
                            }],
                            kind: "ScalarField",
                            name: "refreshStats",
                            storageKey: null
                        }],
                        storageKey: null
                    }];
                return {
                    fragment: {
                        argumentDefinitions: n,
                        kind: "Fragment",
                        metadata: null,
                        name: "RefreshStatsButtonMutation",
                        selections: e,
                        type: "Mutation",
                        abstractKey: null
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: n,
                        kind: "Operation",
                        name: "RefreshStatsButtonMutation",
                        selections: e
                    },
                    params: {
                        cacheID: "82d266c91528795bbba35b4f64c7de4d",
                        id: null,
                        metadata: {},
                        name: "RefreshStatsButtonMutation",
                        operationKind: "mutation",
                        text: "mutation RefreshStatsButtonMutation(\n  $collectionId: CollectionRelayID!\n) {\n  collections {\n    refreshStats(collection: $collectionId)\n  }\n}\n"
                    }
                }
            }();
            i.hash = "9c61a90beef22a0035b01e14612acb29", e.default = i
        }
    }
]);
//# sourceMappingURL=18026-7a063e4602945776.js.map