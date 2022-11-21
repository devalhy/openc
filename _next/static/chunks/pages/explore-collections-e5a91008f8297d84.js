(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3011], {
        51802: function(n, e, l) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/explore-collections", function() {
                return l(66765)
            }])
        },
        95096: function(n, e, l) {
            "use strict";
            l.r(e);
            var a = function() {
                var n = [{
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "categories"
                    }, {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "isCategory"
                    }],
                    e = {
                        kind: "Variable",
                        name: "categories",
                        variableName: "categories"
                    },
                    l = {
                        kind: "Literal",
                        name: "first",
                        value: 12
                    },
                    a = [e, l],
                    t = [{
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
                            selections: [{
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "relayId",
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
                                kind: "ScalarField",
                                name: "id",
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "__typename",
                                storageKey: null
                            }],
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "cursor",
                            storageKey: null
                        }],
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        concreteType: "PageInfo",
                        kind: "LinkedField",
                        name: "pageInfo",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "endCursor",
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "hasNextPage",
                            storageKey: null
                        }],
                        storageKey: null
                    }],
                    i = [l, {
                        kind: "Literal",
                        name: "sortBy",
                        value: "SEVEN_DAY_VOLUME"
                    }];
                return {
                    fragment: {
                        argumentDefinitions: n,
                        kind: "Fragment",
                        metadata: null,
                        name: "ExplorePageQuery",
                        selections: [{
                            condition: "isCategory",
                            kind: "Condition",
                            passingValue: !0,
                            selections: [{
                                args: [e],
                                kind: "FragmentSpread",
                                name: "TrendingCollectionsList_data"
                            }]
                        }, {
                            condition: "isCategory",
                            kind: "Condition",
                            passingValue: !1,
                            selections: [{
                                args: null,
                                kind: "FragmentSpread",
                                name: "TopCollectionsList_data"
                            }]
                        }],
                        type: "Query",
                        abstractKey: null
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: n,
                        kind: "Operation",
                        name: "ExplorePageQuery",
                        selections: [{
                            condition: "isCategory",
                            kind: "Condition",
                            passingValue: !0,
                            selections: [{
                                alias: null,
                                args: a,
                                concreteType: "CollectionTypeConnection",
                                kind: "LinkedField",
                                name: "trendingCollections",
                                plural: !1,
                                selections: t,
                                storageKey: null
                            }, {
                                alias: null,
                                args: a,
                                filters: ["categories", "chains"],
                                handle: "connection",
                                key: "TrendingCollectionsList_trendingCollections",
                                kind: "LinkedHandle",
                                name: "trendingCollections"
                            }]
                        }, {
                            condition: "isCategory",
                            kind: "Condition",
                            passingValue: !1,
                            selections: [{
                                alias: null,
                                args: i,
                                concreteType: "CollectionTypeConnection",
                                kind: "LinkedField",
                                name: "collections",
                                plural: !1,
                                selections: t,
                                storageKey: 'collections(first:12,sortBy:"SEVEN_DAY_VOLUME")'
                            }, {
                                alias: null,
                                args: i,
                                filters: ["sortBy"],
                                handle: "connection",
                                key: "TopCollectionsList_collections",
                                kind: "LinkedHandle",
                                name: "collections"
                            }]
                        }]
                    },
                    params: {
                        cacheID: "c8f54c24db480420173b9e9335371c6b",
                        id: null,
                        metadata: {},
                        name: "ExplorePageQuery",
                        operationKind: "query",
                        text: "query ExplorePageQuery(\n  $categories: [CategorySlug!]\n  $isCategory: Boolean!\n) {\n  ...TrendingCollectionsList_data_34SC5f @include(if: $isCategory)\n  ...TopCollectionsList_data @skip(if: $isCategory)\n}\n\nfragment CollectionsList_ListItem_data_3f0GYR on CollectionType {\n  relayId\n  ...GlobalCollectionCard_data_3f0GYR\n}\n\nfragment CollectionsList_data_3f0GYR on CollectionType {\n  relayId\n  ...CollectionsList_ListItem_data_3f0GYR\n}\n\nfragment GlobalCollectionCard_data_3f0GYR on CollectionType {\n  logo\n  banner\n  name\n  verificationStatus\n  ...collection_url\n}\n\nfragment TopCollectionsList_data on Query {\n  collections(sortBy: SEVEN_DAY_VOLUME, first: 12) {\n    edges {\n      node {\n        ...CollectionsList_data_3f0GYR\n        logo\n        banner\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment TrendingCollectionsList_data_34SC5f on Query {\n  trendingCollections(categories: $categories, first: 12) {\n    edges {\n      node {\n        ...CollectionsList_data_3f0GYR\n        logo\n        banner\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment collection_url on CollectionType {\n  slug\n  isCategory\n}\n"
                    }
                }
            }();
            a.hash = "b5c749a8bfb573f1359e9eebe8abf031", e.default = a
        },
        45026: function(n, e, l) {
            "use strict";
            l.r(e);
            var a = function() {
                var n = [{
                        defaultValue: 12,
                        kind: "LocalArgument",
                        name: "count"
                    }, {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "cursor"
                    }, {
                        defaultValue: "SEVEN_DAY_VOLUME",
                        kind: "LocalArgument",
                        name: "sortBy"
                    }],
                    e = {
                        kind: "Variable",
                        name: "sortBy",
                        variableName: "sortBy"
                    },
                    l = [{
                        kind: "Variable",
                        name: "after",
                        variableName: "cursor"
                    }, {
                        kind: "Variable",
                        name: "first",
                        variableName: "count"
                    }, e];
                return {
                    fragment: {
                        argumentDefinitions: n,
                        kind: "Fragment",
                        metadata: null,
                        name: "TopCollectionsListQuery",
                        selections: [{
                            args: [{
                                kind: "Variable",
                                name: "count",
                                variableName: "count"
                            }, {
                                kind: "Variable",
                                name: "cursor",
                                variableName: "cursor"
                            }, e],
                            kind: "FragmentSpread",
                            name: "TopCollectionsList_data"
                        }],
                        type: "Query",
                        abstractKey: null
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: n,
                        kind: "Operation",
                        name: "TopCollectionsListQuery",
                        selections: [{
                            alias: null,
                            args: l,
                            concreteType: "CollectionTypeConnection",
                            kind: "LinkedField",
                            name: "collections",
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
                                    selections: [{
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "relayId",
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
                                        kind: "ScalarField",
                                        name: "id",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "__typename",
                                        storageKey: null
                                    }],
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "cursor",
                                    storageKey: null
                                }],
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                concreteType: "PageInfo",
                                kind: "LinkedField",
                                name: "pageInfo",
                                plural: !1,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "endCursor",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "hasNextPage",
                                    storageKey: null
                                }],
                                storageKey: null
                            }],
                            storageKey: null
                        }, {
                            alias: null,
                            args: l,
                            filters: ["sortBy"],
                            handle: "connection",
                            key: "TopCollectionsList_collections",
                            kind: "LinkedHandle",
                            name: "collections"
                        }]
                    },
                    params: {
                        cacheID: "1170764235d10c627a91985612f61ed9",
                        id: null,
                        metadata: {},
                        name: "TopCollectionsListQuery",
                        operationKind: "query",
                        text: "query TopCollectionsListQuery(\n  $count: Int = 12\n  $cursor: String\n  $sortBy: CollectionSort = SEVEN_DAY_VOLUME\n) {\n  ...TopCollectionsList_data_3m9EyQ\n}\n\nfragment CollectionsList_ListItem_data_3f0GYR on CollectionType {\n  relayId\n  ...GlobalCollectionCard_data_3f0GYR\n}\n\nfragment CollectionsList_data_3f0GYR on CollectionType {\n  relayId\n  ...CollectionsList_ListItem_data_3f0GYR\n}\n\nfragment GlobalCollectionCard_data_3f0GYR on CollectionType {\n  logo\n  banner\n  name\n  verificationStatus\n  ...collection_url\n}\n\nfragment TopCollectionsList_data_3m9EyQ on Query {\n  collections(sortBy: $sortBy, after: $cursor, first: $count) {\n    edges {\n      node {\n        ...CollectionsList_data_3f0GYR\n        logo\n        banner\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment collection_url on CollectionType {\n  slug\n  isCategory\n}\n"
                    }
                }
            }();
            a.hash = "566749631c6182f195cede2a492b1d11", e.default = a
        },
        29968: function(n, e, l) {
            "use strict";
            l.r(e);
            var a = function() {
                var n = ["collections"];
                return {
                    argumentDefinitions: [{
                        defaultValue: 12,
                        kind: "LocalArgument",
                        name: "count"
                    }, {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "cursor"
                    }, {
                        defaultValue: "SEVEN_DAY_VOLUME",
                        kind: "LocalArgument",
                        name: "sortBy"
                    }],
                    kind: "Fragment",
                    metadata: {
                        connection: [{
                            count: "count",
                            cursor: "cursor",
                            direction: "forward",
                            path: n
                        }],
                        refetch: {
                            connection: {
                                forward: {
                                    count: "count",
                                    cursor: "cursor"
                                },
                                backward: null,
                                path: n
                            },
                            fragmentPathInResult: [],
                            operation: l(45026)
                        }
                    },
                    name: "TopCollectionsList_data",
                    selections: [{
                        alias: "collections",
                        args: [{
                            kind: "Variable",
                            name: "sortBy",
                            variableName: "sortBy"
                        }],
                        concreteType: "CollectionTypeConnection",
                        kind: "LinkedField",
                        name: "__TopCollectionsList_collections_connection",
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
                                selections: [{
                                    args: [{
                                        kind: "Literal",
                                        name: "showContextMenu",
                                        value: !1
                                    }, {
                                        kind: "Literal",
                                        name: "showStats",
                                        value: !1
                                    }],
                                    kind: "FragmentSpread",
                                    name: "CollectionsList_data"
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
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "__typename",
                                    storageKey: null
                                }],
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "cursor",
                                storageKey: null
                            }],
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            concreteType: "PageInfo",
                            kind: "LinkedField",
                            name: "pageInfo",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "endCursor",
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "hasNextPage",
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
            a.hash = "566749631c6182f195cede2a492b1d11", e.default = a
        },
        66765: function(n, e, l) {
            "use strict";
            l.r(e), l.d(e, {
                default: function() {
                    return Z
                }
            });
            var a = l(24246),
                t = (l(27378), l(2417), l(4402)),
                i = l(59809),
                o = l(26963),
                r = l(43951),
                s = function(n) {
                    var e = n.dataKey,
                        s = (0, t.usePaginationFragment)(l(29968), e),
                        c = s.data,
                        u = s.loadNext,
                        d = s.hasNext,
                        g = s.isLoadingNext;
                    return (0, a.jsx)(o.z, {
                        collections: c ? (0, i.v$)(c.collections).filter((function(n) {
                            return (0, r.d)(n.logo, n.banner)
                        })) : void 0,
                        hasNext: d,
                        isLoadingNext: g,
                        loadNext: u
                    })
                },
                c = l(46422),
                u = l(72242),
                d = l(53585),
                g = l(38996),
                m = l(59533),
                y = l(47762),
                p = l(6723),
                f = l(36332),
                k = l(86676),
                C = l(13309),
                _ = l(19989),
                x = l(76449),
                b = l(47892),
                h = l(96150),
                L = l(72363),
                v = l(17482),
                T = l(316),
                F = l(86677),
                K = l(78439),
                S = function(n) {
                    var e = n.tab;
                    return {
                        active: (0, F.useRouter)().query.tab === e,
                        href: "/explore-collections".concat(K.Z.getMergedQueryString({
                            tab: e
                        }))
                    }
                },
                E = l(3204),
                V = l(70761),
                N = l(90761);

            function I() {
                var n = (0, _.Z)(["\n      margin: unset;\n    "]);
                return I = function() {
                    return n
                }, n
            }

            function j() {
                var n = (0, _.Z)(["\n  /* Fixes the width showing as 2px instead */\n  border-width: 0.5px;\n  border-style: solid;\n  ", "\n  margin: 0px -16px;\n  ", "\n"]);
                return j = function() {
                    return n
                }, n
            }

            function P() {
                var n = (0, _.Z)(["\n      gap: 48px;\n    "]);
                return P = function() {
                    return n
                }, n
            }

            function w() {
                var n = (0, _.Z)(["\n  margin-top: 48px;\n  justify-content: left;\n  gap: 24px;\n  ", "\n  &&& {\n    padding-left: 0px;\n  }\n\n  :hover {\n    overflow: auto;\n  }\n"]);
                return w = function() {
                    return n
                }, n
            }

            function Y() {
                var n = (0, _.Z)(["\n  display: flex;\n  justify-content: center;\n  height: 100%;\n  padding: 12px 0px;\n  ", " {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n    margin: 0;\n    flex: 1;\n    white-space: nowrap;\n  }\n"]);
                return Y = function() {
                    return n
                }, n
            }
            var B = function() {
                    var n = (0, p.q)("explore"),
                        e = function() {
                            var n = (0, p.q)("explore"),
                                e = (0, V.K)();
                            return [{
                                label: n("category.trending.label", "Trending"),
                                tab: void 0
                            }, {
                                label: n("category.top.label", "Top"),
                                tab: "top"
                            }].concat((0, E.Z)(e.map((function(n) {
                                return {
                                    label: n.name,
                                    tab: n.slug
                                }
                            }))))
                        }();
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(g.W, {
                            children: (0, a.jsxs)(h.k, {
                                justifyContent: "left",
                                marginTop: "62px",
                                children: [(0, a.jsx)(L.pU, {
                                    lessThan: "sm",
                                    children: (0, a.jsx)(T.xv.Display, {
                                        as: "h1",
                                        size: "medium",
                                        textAlign: "center",
                                        children: n("mobileTitle", "Explore collections")
                                    })
                                }), (0, a.jsx)(L.pU, {
                                    greaterThanOrEqual: "sm",
                                    children: (0, a.jsx)(T.xv.Display, {
                                        as: "h1",
                                        size: "large",
                                        textAlign: "center",
                                        children: n("desktopTitle", "Explore collections")
                                    })
                                })]
                            })
                        }), (0, a.jsxs)(g.W, {
                            overflow: "hidden",
                            padding: {
                                _: "0 0 0 16px",
                                sm: "0 16px",
                                xl: "0 32px",
                                xxl: "0 64px"
                            },
                            children: [(0, a.jsx)(Q, {
                                children: e.map((function(n) {
                                    return (0, a.jsx)(R, {
                                        tab: n.tab,
                                        children: n.label
                                    }, n.label)
                                }))
                            }), (0, a.jsx)(G, {})]
                        })]
                    })
                },
                G = (0, b.ZP)(d.g).withConfig({
                    componentId: "sc-63f2fdbd-0"
                })(j(), (function(n) {
                    return (0, N.Um)({
                        variants: {
                            light: {
                                borderColor: (0, x.m4)(n.theme.colors.fog, .5)
                            },
                            dark: {
                                borderColor: (0, x.m4)(n.theme.colors.oil, .5)
                            }
                        }
                    })
                }), (0, L.BC)({
                    sm: (0, b.iv)(I())
                })),
                Q = (0, b.ZP)(v.v).attrs({
                    direction: "horizontal"
                }).withConfig({
                    componentId: "sc-63f2fdbd-1"
                })(w(), (0, L.BC)({
                    lg: (0, b.iv)(P())
                })),
                R = function(n) {
                    var e = n.tab,
                        l = n.children,
                        t = S({
                            tab: e
                        }),
                        i = t.active,
                        o = t.href;
                    return (0, a.jsx)(A, {
                        active: i,
                        direction: "horizontal",
                        href: o,
                        scroll: !1,
                        children: (0, a.jsx)(v.v.Title, {
                            children: l
                        })
                    })
                },
                A = (0, b.ZP)(v.v.Item).withConfig({
                    componentId: "sc-63f2fdbd-2"
                })(Y(), v.v.Title),
                D = function(n) {
                    var e = n.variables,
                        l = n.data,
                        t = n.tab,
                        i = (0, p.q)("explore"),
                        o = e.isCategory;
                    return (0, y.n)((function() {
                        (0, k.nk)()
                    })), (0, a.jsxs)(u.v, {
                        hideFooter: !0,
                        children: [(0, a.jsx)(m.k, {
                            title: (0, m.t)(i("pageTitle", "Explore collections"))
                        }), (0, a.jsx)(B, {}), (0, a.jsx)(g.W, {
                            children: (0, a.jsx)(d.g, {
                                marginTop: "16px",
                                children: (0, a.jsx)(f.nx, {
                                    eventParams: {
                                        tab: t
                                    },
                                    eventSource: "ExplorePage",
                                    children: o ? (0, a.jsx)(c.W, {
                                        dataKey: l
                                    }) : (0, a.jsx)(s, {
                                        dataKey: l
                                    })
                                })
                            })
                        })]
                    })
                };
            D.query = l(95096), D.getInitialProps = C.Z.nextParser({
                tab: C.Z.Optional(C.Z.string)
            }, (function(n) {
                var e = n.tab;
                return {
                    variables: {
                        categories: e && "top" !== e ? [e] : void 0,
                        isCategory: "top" !== e
                    },
                    tab: e
                }
            }));
            var Z = D
        }
    },
    function(n) {
        n.O(0, [50114, 46422, 49774, 92888, 40179], (function() {
            return e = 51802, n(n.s = e);
            var e
        }));
        var e = n.O();
        _N_E = e
    }
]);
//# sourceMappingURL=explore-collections-e5a91008f8297d84.js.map