window.ats = function (e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var o = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }
    return n.m = e, n.c = t, n.d = function (e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }, n.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function (e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var o in e) n.d(r, o, function (t) {
                return e[t]
            }.bind(null, o));
        return r
    }, n.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 106)
}([function (e, t, n) {
    (function (t) {
        var n = function (e) {
            return e && e.Math == Math && e
        };
        e.exports = n("object" == typeof globalThis && globalThis) || n("object" == typeof window && window) || n("object" == typeof self && self) || n("object" == typeof t && t) || function () {
            return this
        }() || Function("return this")()
    }).call(this, n(31))
}, function (e, t) {
    e.exports = function (e) {
        return "function" == typeof e
    }
}, function (e, t) {
    var n = Function.prototype,
        r = n.bind,
        o = n.call,
        i = r && r.bind(o);
    e.exports = r ? function (e) {
        return e && i(o, e)
    } : function (e) {
        return e && function () {
            return o.apply(e, arguments)
        }
    }
}, function (e, t) {
    e.exports = function (e) {
        try {
            return !!e()
        } catch (e) {
            return !0
        }
    }
}, function (e, t, n) {
    var r = n(2),
        o = n(40),
        i = r({}.hasOwnProperty);
    e.exports = Object.hasOwn || function (e, t) {
        return i(o(e), t)
    }
}, function (e, t, n) {
    var r = n(0),
        o = n(16),
        i = n(4),
        s = n(41),
        a = n(37),
        c = n(36),
        u = o("wks"),
        d = r.Symbol,
        l = d && d.for,
        f = c ? d : d && d.withoutSetter || s;
    e.exports = function (e) {
        if (!i(u, e) || !a && "string" != typeof u[e]) {
            var t = "Symbol." + e;
            a && i(d, e) ? u[e] = d[e] : u[e] = c && l ? l(t) : f(t)
        }
        return u[e]
    }
}, function (e, t, n) {
    var r = n(0),
        o = n(9),
        i = r.String,
        s = r.TypeError;
    e.exports = function (e) {
        if (o(e)) return e;
        throw s(i(e) + " is not an object")
    }
}, function (e, t, n) {
    var r = n(3);
    e.exports = !r((function () {
        return 7 != Object.defineProperty({}, 1, {
            get: function () {
                return 7
            }
        })[1]
    }))
}, function (e, t) {
    var n = Function.prototype.call;
    e.exports = n.bind ? n.bind(n) : function () {
        return n.apply(n, arguments)
    }
}, function (e, t, n) {
    var r = n(1);
    e.exports = function (e) {
        return "object" == typeof e ? null !== e : r(e)
    }
}, function (e, t, n) {
    var r = n(2),
        o = r({}.toString),
        i = r("".slice);
    e.exports = function (e) {
        return i(o(e), 8, -1)
    }
}, function (e, t, n) {
    var r = n(0),
        o = n(1),
        i = function (e) {
            return o(e) ? e : void 0
        };
    e.exports = function (e, t) {
        return arguments.length < 2 ? i(r[e]) : r[e] && r[e][t]
    }
}, function (e, t, n) {
    var r = n(59),
        o = n(13);
    e.exports = function (e) {
        return r(o(e))
    }
}, function (e, t, n) {
    var r = n(0).TypeError;
    e.exports = function (e) {
        if (null == e) throw r("Can't call method on " + e);
        return e
    }
}, function (e, t, n) {
    var r = n(0),
        o = n(7),
        i = n(42),
        s = n(6),
        a = n(33),
        c = r.TypeError,
        u = Object.defineProperty;
    t.f = o ? u : function (e, t, n) {
        if (s(e), t = a(t), s(n), i) try {
            return u(e, t, n)
        } catch (e) {}
        if ("get" in n || "set" in n) throw c("Accessors not supported");
        return "value" in n && (e[t] = n.value), e
    }
}, function (e, t) {
    e.exports = function (e, t) {
        return {
            enumerable: !(1 & e),
            configurable: !(2 & e),
            writable: !(4 & e),
            value: t
        }
    }
}, function (e, t, n) {
    var r = n(17),
        o = n(18);
    (e.exports = function (e, t) {
        return o[e] || (o[e] = void 0 !== t ? t : {})
    })("versions", []).push({
        version: "3.19.2",
        mode: r ? "pure" : "global",
        copyright: "짤 2021 Denis Pushkarev (zloirock.ru)"
    })
}, function (e, t) {
    e.exports = !1
}, function (e, t, n) {
    var r = n(0),
        o = n(19),
        i = r["__core-js_shared__"] || o("__core-js_shared__", {});
    e.exports = i
}, function (e, t, n) {
    var r = n(0),
        o = Object.defineProperty;
    e.exports = function (e, t) {
        try {
            o(r, e, {
                value: t,
                configurable: !0,
                writable: !0
            })
        } catch (n) {
            r[e] = t
        }
        return t
    }
}, function (e, t, n) {
    var r = n(7),
        o = n(14),
        i = n(15);
    e.exports = r ? function (e, t, n) {
        return o.f(e, t, i(1, n))
    } : function (e, t, n) {
        return e[t] = n, e
    }
}, function (e, t, n) {
    var r = n(0),
        o = n(1),
        i = n(4),
        s = n(20),
        a = n(19),
        c = n(22),
        u = n(23),
        d = n(66).CONFIGURABLE,
        l = u.get,
        f = u.enforce,
        p = String(String).split("String");
    (e.exports = function (e, t, n, c) {
        var u, l = !!c && !!c.unsafe,
            h = !!c && !!c.enumerable,
            b = !!c && !!c.noTargetGet,
            g = c && void 0 !== c.name ? c.name : t;
        o(n) && ("Symbol(" === String(g).slice(0, 7) && (g = "[" + String(g).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), (!i(n, "name") || d && n.name !== g) && s(n, "name", g), (u = f(n)).source || (u.source = p.join("string" == typeof g ? g : ""))), e !== r ? (l ? !b && e[t] && (h = !0) : delete e[t], h ? e[t] = n : s(e, t, n)) : h ? e[t] = n : a(t, n)
    })(Function.prototype, "toString", (function () {
        return o(this) && l(this).source || c(this)
    }))
}, function (e, t, n) {
    var r = n(2),
        o = n(1),
        i = n(18),
        s = r(Function.toString);
    o(i.inspectSource) || (i.inspectSource = function (e) {
        return s(e)
    }), e.exports = i.inspectSource
}, function (e, t, n) {
    var r, o, i, s = n(65),
        a = n(0),
        c = n(2),
        u = n(9),
        d = n(20),
        l = n(4),
        f = n(18),
        p = n(24),
        h = n(25),
        b = a.TypeError,
        g = a.WeakMap;
    if (s || f.state) {
        var m = f.state || (f.state = new g),
            v = c(m.get),
            y = c(m.has),
            w = c(m.set);
        r = function (e, t) {
            if (y(m, e)) throw new b("Object already initialized");
            return t.facade = e, w(m, e, t), t
        }, o = function (e) {
            return v(m, e) || {}
        }, i = function (e) {
            return y(m, e)
        }
    } else {
        var x = p("state");
        h[x] = !0, r = function (e, t) {
            if (l(e, x)) throw new b("Object already initialized");
            return t.facade = e, d(e, x, t), t
        }, o = function (e) {
            return l(e, x) ? e[x] : {}
        }, i = function (e) {
            return l(e, x)
        }
    }
    e.exports = {
        set: r,
        get: o,
        has: i,
        enforce: function (e) {
            return i(e) ? o(e) : r(e, {})
        },
        getterFor: function (e) {
            return function (t) {
                var n;
                if (!u(t) || (n = o(t)).type !== e) throw b("Incompatible receiver, " + e + " required");
                return n
            }
        }
    }
}, function (e, t, n) {
    var r = n(16),
        o = n(41),
        i = r("keys");
    e.exports = function (e) {
        return i[e] || (i[e] = o(e))
    }
}, function (e, t) {
    e.exports = {}
}, function (e, t) {
    var n = Math.ceil,
        r = Math.floor;
    e.exports = function (e) {
        var t = +e;
        return t != t || 0 === t ? 0 : (t > 0 ? r : n)(t)
    }
}, function (e, t) {
    e.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
}, function (e, t, n) {
    var r, o = n(6),
        i = n(78),
        s = n(27),
        a = n(25),
        c = n(80),
        u = n(43),
        d = n(24),
        l = d("IE_PROTO"),
        f = function () {},
        p = function (e) {
            return "<script>" + e + "<\/script>"
        },
        h = function (e) {
            e.write(p("")), e.close();
            var t = e.parentWindow.Object;
            return e = null, t
        },
        b = function () {
            try {
                r = new ActiveXObject("htmlfile")
            } catch (e) {}
            var e, t;
            b = "undefined" != typeof document ? document.domain && r ? h(r) : ((t = u("iframe")).style.display = "none", c.appendChild(t), t.src = String("javascript:"), (e = t.contentWindow.document).open(), e.write(p("document.F=Object")), e.close(), e.F) : h(r);
            for (var n = s.length; n--;) delete b.prototype[s[n]];
            return b()
        };
    a[l] = !0, e.exports = Object.create || function (e, t) {
        var n;
        return null !== e ? (f.prototype = o(e), n = new f, f.prototype = null, n[l] = e) : n = b(), void 0 === t ? n : i(n, t)
    }
}, function (e, t, n) {
    var r = n(0),
        o = n(46),
        i = r.String;
    e.exports = function (e) {
        if ("Symbol" === o(e)) throw TypeError("Cannot convert a Symbol value to a string");
        return i(e)
    }
}, function (e, t, n) {
    var r = n(0),
        o = n(32).f,
        i = n(20),
        s = n(21),
        a = n(19),
        c = n(67),
        u = n(74);
    e.exports = function (e, t) {
        var n, d, l, f, p, h = e.target,
            b = e.global,
            g = e.stat;
        if (n = b ? r : g ? r[h] || a(h, {}) : (r[h] || {}).prototype)
            for (d in t) {
                if (f = t[d], l = e.noTargetGet ? (p = o(n, d)) && p.value : n[d], !u(b ? d : h + (g ? "." : "#") + d, e.forced) && void 0 !== l) {
                    if (typeof f == typeof l) continue;
                    c(f, l)
                }(e.sham || l && l.sham) && i(f, "sham", !0), s(n, d, f, e)
            }
    }
}, function (e, t) {
    var n;
    n = function () {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch (e) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
}, function (e, t, n) {
    var r = n(7),
        o = n(8),
        i = n(58),
        s = n(15),
        a = n(12),
        c = n(33),
        u = n(4),
        d = n(42),
        l = Object.getOwnPropertyDescriptor;
    t.f = r ? l : function (e, t) {
        if (e = a(e), t = c(t), d) try {
            return l(e, t)
        } catch (e) {}
        if (u(e, t)) return s(!o(i.f, e, t), e[t])
    }
}, function (e, t, n) {
    var r = n(60),
        o = n(34);
    e.exports = function (e) {
        var t = r(e, "string");
        return o(t) ? t : t + ""
    }
}, function (e, t, n) {
    var r = n(0),
        o = n(11),
        i = n(1),
        s = n(35),
        a = n(36),
        c = r.Object;
    e.exports = a ? function (e) {
        return "symbol" == typeof e
    } : function (e) {
        var t = o("Symbol");
        return i(t) && s(t.prototype, c(e))
    }
}, function (e, t, n) {
    var r = n(2);
    e.exports = r({}.isPrototypeOf)
}, function (e, t, n) {
    var r = n(37);
    e.exports = r && !Symbol.sham && "symbol" == typeof Symbol.iterator
}, function (e, t, n) {
    var r = n(61),
        o = n(3);
    e.exports = !!Object.getOwnPropertySymbols && !o((function () {
        var e = Symbol();
        return !String(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && r && r < 41
    }))
}, function (e, t, n) {
    var r = n(63);
    e.exports = function (e, t) {
        var n = e[t];
        return null == n ? void 0 : r(n)
    }
}, function (e, t, n) {
    var r = n(0).String;
    e.exports = function (e) {
        try {
            return r(e)
        } catch (e) {
            return "Object"
        }
    }
}, function (e, t, n) {
    var r = n(0),
        o = n(13),
        i = r.Object;
    e.exports = function (e) {
        return i(o(e))
    }
}, function (e, t, n) {
    var r = n(2),
        o = 0,
        i = Math.random(),
        s = r(1..toString);
    e.exports = function (e) {
        return "Symbol(" + (void 0 === e ? "" : e) + ")_" + s(++o + i, 36)
    }
}, function (e, t, n) {
    var r = n(7),
        o = n(3),
        i = n(43);
    e.exports = !r && !o((function () {
        return 7 != Object.defineProperty(i("div"), "a", {
            get: function () {
                return 7
            }
        }).a
    }))
}, function (e, t, n) {
    var r = n(0),
        o = n(9),
        i = r.document,
        s = o(i) && o(i.createElement);
    e.exports = function (e) {
        return s ? i.createElement(e) : {}
    }
}, function (e, t, n) {
    var r = n(2),
        o = n(4),
        i = n(12),
        s = n(70).indexOf,
        a = n(25),
        c = r([].push);
    e.exports = function (e, t) {
        var n, r = i(e),
            u = 0,
            d = [];
        for (n in r) !o(a, n) && o(r, n) && c(d, n);
        for (; t.length > u;) o(r, n = t[u++]) && (~s(d, n) || c(d, n));
        return d
    }
}, function (e, t, n) {
    var r = n(26),
        o = Math.min;
    e.exports = function (e) {
        return e > 0 ? o(r(e), 9007199254740991) : 0
    }
}, function (e, t, n) {
    var r = n(0),
        o = n(85),
        i = n(1),
        s = n(10),
        a = n(5)("toStringTag"),
        c = r.Object,
        u = "Arguments" == s(function () {
            return arguments
        }());
    e.exports = o ? s : function (e) {
        var t, n, r;
        return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (n = function (e, t) {
            try {
                return e[t]
            } catch (e) {}
        }(t = c(e), a)) ? n : u ? s(t) : "Object" == (r = s(t)) && i(t.callee) ? "Arguments" : r
    }
}, function (e, t, n) {
    "use strict";
    var r = n(6);
    e.exports = function () {
        var e = r(this),
            t = "";
        return e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.sticky && (t += "y"), t
    }
}, function (e, t, n) {
    "use strict";
    var r = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        o = n(49),
        i = o.encodeToBase64,
        s = o.padRight;

    function a(e) {
        for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [], n = "", r = 1; r <= e; r += 1) n += -1 !== t.indexOf(r) ? "1" : "0";
        return s(n, Math.max(0, e - n.length))
    }

    function c(e) {
        for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Set, n = 0, r = 0; r < e.length; r += 1) n = Math.max(n, e[r].id);
        for (var o = 0; o < t.length; o += 1) n = Math.max(n, t[o]);
        for (var i = "", s = 1; s <= n; s += 1) i += -1 !== t.indexOf(s) ? "1" : "0";
        return i
    }

    function u(e, t) {
        for (var n = [], r = [], o = e.map((function (e) {
                return e.id
            })), i = 0; i < e.length; i += 1) {
            var s = e[i].id;
            if (-1 !== t.indexOf(s) && n.push(s), (-1 === t.indexOf(s) || i === e.length - 1 || -1 === o.indexOf(s + 1)) && n.length) {
                var a = n.shift(),
                    c = n.pop();
                n = [], r.push({
                    isRange: "number" == typeof c,
                    startVendorId: a,
                    endVendorId: c
                })
            }
        }
        return r
    }

    function d(e) {
        var t = 0;
        return e.forEach((function (e) {
            e.id > t && (t = e.id)
        })), t
    }
    e.exports = {
        convertVendorsToRanges: u,
        encodeConsentString: function (e) {
            var t = e.maxVendorId,
                n = e.vendorList,
                o = void 0 === n ? {} : n,
                s = e.allowedPurposeIds,
                l = e.allowedVendorIds,
                f = o.vendors,
                p = void 0 === f ? [] : f,
                h = o.purposes,
                b = void 0 === h ? [] : h;
            t || (t = d(p));
            var g = i(r({}, e, {
                    maxVendorId: t,
                    purposeIdBitString: c(b, s),
                    isRange: !1,
                    vendorIdBitString: a(t, l)
                })),
                m = u(p, l),
                v = i(r({}, e, {
                    maxVendorId: t,
                    purposeIdBitString: c(b, s),
                    isRange: !0,
                    defaultConsent: !1,
                    numEntries: m.length,
                    vendorRangeList: m
                }));
            return g.length < v.length ? g : v
        },
        getMaxVendorId: d,
        encodeVendorIdsToBits: a,
        encodePurposeIdsToBits: c
    }
}, function (e, t, n) {
    "use strict";
    var r = n(50),
        o = n(51),
        i = o.versionNumBits,
        s = o.vendorVersionMap;

    function a(e) {
        for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "0", n = "", r = 0; r < e; r += 1) n += t;
        return n
    }

    function c(e, t) {
        return a(Math.max(0, t)) + e
    }

    function u(e, t) {
        return e + a(Math.max(0, t))
    }

    function d(e, t) {
        var n = "";
        return "number" != typeof e || isNaN(e) || (n = parseInt(e, 10).toString(2)), t >= n.length && (n = c(n, t - n.length)), n.length > t && (n = n.substring(0, t)), n
    }

    function l(e) {
        return d(!0 === e ? 1 : 0, 1)
    }

    function f(e, t) {
        return e instanceof Date ? d(e.getTime() / 100, t) : d(e, t)
    }

    function p(e, t) {
        return d(e.toUpperCase().charCodeAt(0) - 65, t)
    }

    function h(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 12;
        return p(e.slice(0, 1), t / 2) + p(e.slice(1), t / 2)
    }

    function b(e, t, n) {
        return parseInt(e.substr(t, n), 2)
    }

    function g(e, t, n) {
        return new Date(100 * b(e, t, n))
    }

    function m(e, t) {
        return 1 === parseInt(e.substr(t, 1), 2)
    }

    function v(e) {
        var t = b(e);
        return String.fromCharCode(t + 65).toLowerCase()
    }

    function y(e, t, n) {
        var r = e.substr(t, n);
        return v(r.slice(0, n / 2)) + v(r.slice(n / 2))
    }

    function w(e) {
        var t = e.input,
            n = e.field,
            r = n.name,
            o = n.type,
            i = n.numBits,
            s = n.encoder,
            a = n.validator;
        if ("function" == typeof a && !a(t)) return "";
        if ("function" == typeof s) return s(t);
        var c = "function" == typeof i ? i(t) : i,
            p = t[r],
            b = null == p ? "" : p;
        switch (o) {
            case "int":
                return d(b, c);
            case "bool":
                return l(b);
            case "date":
                return f(b, c);
            case "bits":
                return u(b, c - b.length).substring(0, c);
            case "list":
                return b.reduce((function (e, t) {
                    return e + x({
                        input: t,
                        fields: n.fields
                    })
                }), "");
            case "language":
                return h(b, c);
            default:
                throw new Error("ConsentString - Unknown field type " + o + " for encoding")
        }
    }

    function x(e) {
        var t = e.input;
        return e.fields.reduce((function (e, n) {
            return e += w({
                input: t,
                field: n
            })
        }), "")
    }

    function S(e) {
        var t = e.input,
            n = e.output,
            r = e.startPosition,
            o = e.field,
            i = o.type,
            s = o.numBits,
            a = o.decoder,
            c = o.validator,
            u = o.listCount;
        if ("function" == typeof c && !c(n)) return {
            newPosition: r
        };
        if ("function" == typeof a) return a(t, n, r);
        var d = "function" == typeof s ? s(n) : s;
        switch (i) {
            case "int":
                return {
                    fieldValue: b(t, r, d)
                };
            case "bool":
                return {
                    fieldValue: m(t, r)
                };
            case "date":
                return {
                    fieldValue: g(t, r, d)
                };
            case "bits":
                return {
                    fieldValue: t.substr(r, d)
                };
            case "list":
                return function (e, t, n, r, o) {
                    var i = 0;
                    "function" == typeof o ? i = o(t) : "number" == typeof o && (i = o);
                    for (var s = n, a = [], c = 0; c < i; c += 1) {
                        var u = E({
                            input: e,
                            fields: r.fields,
                            startPosition: s
                        });
                        s = u.newPosition, a.push(u.decodedObject)
                    }
                    return {
                        fieldValue: a,
                        newPosition: s
                    }
                }(t, n, r, o, u);
            case "language":
                return {
                    fieldValue: y(t, r, d)
                };
            default:
                throw new Error("ConsentString - Unknown field type " + i + " for decoding")
        }
    }

    function E(e) {
        var t = e.input,
            n = e.fields,
            r = e.startPosition,
            o = void 0 === r ? 0 : r;
        return {
            decodedObject: n.reduce((function (e, n) {
                var r = n.name,
                    i = n.numBits,
                    s = S({
                        input: t,
                        output: e,
                        startPosition: o,
                        field: n
                    }),
                    a = s.fieldValue,
                    c = s.newPosition;
                return void 0 !== a && (e[r] = a), void 0 !== c ? o = c : "number" == typeof i && (o += i), e
            }), {}),
            newPosition: o
        }
    }

    function A(e, t) {
        var n = e.version;
        if ("number" != typeof n) throw new Error("ConsentString - No version field to encode");
        if (t[n]) return x({
            input: e,
            fields: t[n].fields
        });
        throw new Error("ConsentString - No definition for version " + n)
    }
    e.exports = {
        padRight: u,
        padLeft: c,
        encodeField: w,
        encodeDataToBits: A,
        encodeIntToBits: d,
        encodeBoolToBits: l,
        encodeDateToBits: f,
        encodeLanguageToBits: h,
        encodeLetterToBits: p,
        encodeToBase64: function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s,
                n = A(e, t);
            if (n) {
                for (var o = u(n, 7 - (n.length + 7) % 8), i = "", a = 0; a < o.length; a += 8) i += String.fromCharCode(parseInt(o.substr(a, 8), 2));
                return r.encode(i).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
            }
            return null
        },
        decodeBitsToIds: function (e) {
            return e.split("").reduce((function (e, t, n) {
                return "1" === t && -1 === e.indexOf(n + 1) && e.push(n + 1), e
            }), [])
        },
        decodeBitsToInt: b,
        decodeBitsToDate: g,
        decodeBitsToBool: m,
        decodeBitsToLanguage: y,
        decodeBitsToLetter: v,
        decodeFromBase64: function (e, t) {
            for (var n = e; n.length % 4 != 0;) n += "=";
            n = n.replace(/-/g, "+").replace(/_/g, "/");
            for (var o = r.decode(n), a = "", u = 0; u < o.length; u += 1) {
                var d = o.charCodeAt(u).toString(2);
                a += c(d, 8 - d.length)
            }
            return function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s,
                    n = b(e, 0, i);
                if ("number" != typeof n) throw new Error("ConsentString - Unknown version number in the string to decode");
                if (!s[n]) throw new Error("ConsentString - Unsupported version " + n + " in the string to decode");
                var r = t[n].fields,
                    o = E({
                        input: e,
                        fields: r
                    }),
                    a = o.decodedObject;
                return a
            }(a, t)
        }
    }
}, function (e, t, n) {
    (function (e, r) {
        var o;
        ! function (i) {
            var s = t,
                a = (e && e.exports, "object" == typeof r && r);
            a.global !== a && a.window;
            var c = function (e) {
                this.message = e
            };
            (c.prototype = new Error).name = "InvalidCharacterError";
            var u = function (e) {
                    throw new c(e)
                },
                d = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                l = /[\t\n\f\r ]/g,
                f = {
                    encode: function (e) {
                        e = String(e), /[^\0-\xFF]/.test(e) && u("The string to be encoded contains characters outside of the Latin1 range.");
                        for (var t, n, r, o, i = e.length % 3, s = "", a = -1, c = e.length - i; ++a < c;) t = e.charCodeAt(a) << 16, n = e.charCodeAt(++a) << 8, r = e.charCodeAt(++a), s += d.charAt((o = t + n + r) >> 18 & 63) + d.charAt(o >> 12 & 63) + d.charAt(o >> 6 & 63) + d.charAt(63 & o);
                        return 2 == i ? (t = e.charCodeAt(a) << 8, n = e.charCodeAt(++a), s += d.charAt((o = t + n) >> 10) + d.charAt(o >> 4 & 63) + d.charAt(o << 2 & 63) + "=") : 1 == i && (o = e.charCodeAt(a), s += d.charAt(o >> 2) + d.charAt(o << 4 & 63) + "=="), s
                    },
                    decode: function (e) {
                        var t = (e = String(e).replace(l, "")).length;
                        t % 4 == 0 && (t = (e = e.replace(/==?$/, "")).length), (t % 4 == 1 || /[^+a-zA-Z0-9/]/.test(e)) && u("Invalid character: the string to be decoded is not correctly encoded.");
                        for (var n, r, o = 0, i = "", s = -1; ++s < t;) r = d.indexOf(e.charAt(s)), n = o % 4 ? 64 * n + r : r, o++ % 4 && (i += String.fromCharCode(255 & n >> (-2 * o & 6)));
                        return i
                    },
                    version: "0.1.0"
                };
            void 0 === (o = function () {
                return f
            }.call(t, n, t, e)) || (e.exports = o)
        }()
    }).call(this, n(100)(e), n(31))
}, function (e, t, n) {
    "use strict";
    e.exports = {
        versionNumBits: 6,
        vendorVersionMap: {
            1: {
                version: 1,
                metadataFields: ["version", "created", "lastUpdated", "cmpId", "cmpVersion", "consentScreen", "vendorListVersion"],
                fields: [{
                    name: "version",
                    type: "int",
                    numBits: 6
                }, {
                    name: "created",
                    type: "date",
                    numBits: 36
                }, {
                    name: "lastUpdated",
                    type: "date",
                    numBits: 36
                }, {
                    name: "cmpId",
                    type: "int",
                    numBits: 12
                }, {
                    name: "cmpVersion",
                    type: "int",
                    numBits: 12
                }, {
                    name: "consentScreen",
                    type: "int",
                    numBits: 6
                }, {
                    name: "consentLanguage",
                    type: "language",
                    numBits: 12
                }, {
                    name: "vendorListVersion",
                    type: "int",
                    numBits: 12
                }, {
                    name: "purposeIdBitString",
                    type: "bits",
                    numBits: 24
                }, {
                    name: "maxVendorId",
                    type: "int",
                    numBits: 16
                }, {
                    name: "isRange",
                    type: "bool",
                    numBits: 1
                }, {
                    name: "vendorIdBitString",
                    type: "bits",
                    numBits: function (e) {
                        return e.maxVendorId
                    },
                    validator: function (e) {
                        return !e.isRange
                    }
                }, {
                    name: "defaultConsent",
                    type: "bool",
                    numBits: 1,
                    validator: function (e) {
                        return e.isRange
                    }
                }, {
                    name: "numEntries",
                    numBits: 12,
                    type: "int",
                    validator: function (e) {
                        return e.isRange
                    }
                }, {
                    name: "vendorRangeList",
                    type: "list",
                    listCount: function (e) {
                        return e.numEntries
                    },
                    validator: function (e) {
                        return e.isRange
                    },
                    fields: [{
                        name: "isRange",
                        type: "bool",
                        numBits: 1
                    }, {
                        name: "startVendorId",
                        type: "int",
                        numBits: 16
                    }, {
                        name: "endVendorId",
                        type: "int",
                        numBits: 16,
                        validator: function (e) {
                            return e.isRange
                        }
                    }]
                }]
            }
        }
    }
}, function (e, t, n) {
    "use strict";
    var r = n(49),
        o = r.decodeBitsToIds,
        i = r.decodeFromBase64;
    e.exports = {
        decodeConsentString: function (e) {
            var t = i(e),
                n = t.version,
                r = t.cmpId,
                s = t.vendorListVersion,
                a = t.purposeIdBitString,
                c = t.maxVendorId,
                u = t.created,
                d = t.lastUpdated,
                l = t.isRange,
                f = t.defaultConsent,
                p = t.vendorIdBitString,
                h = t.vendorRangeList,
                b = t.cmpVersion,
                g = t.consentScreen,
                m = t.consentLanguage,
                v = {
                    version: n,
                    cmpId: r,
                    vendorListVersion: s,
                    allowedPurposeIds: o(a),
                    maxVendorId: c,
                    created: u,
                    lastUpdated: d,
                    cmpVersion: b,
                    consentScreen: g,
                    consentLanguage: m
                };
            if (l) {
                var y = h.reduce((function (e, t) {
                    for (var n = t.isRange, r = t.startVendorId, o = t.endVendorId, i = n ? o : r, s = r; s <= i; s += 1) e[s] = !0;
                    return e
                }), {});
                v.allowedVendorIds = [];
                for (var w = 1; w <= c; w += 1)(f && !y[w] || !f && y[w]) && -1 === v.allowedVendorIds.indexOf(w) && v.allowedVendorIds.push(w)
            } else v.allowedVendorIds = o(p);
            return v
        }
    }
}, function (e, t, n) {
    "use strict";

    function r(e) {
        for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "0", n = "", r = 0; r < e; r += 1) n += t;
        return n
    }
    e.exports = {
        padLeft: function (e, t) {
            return r(Math.max(0, t)) + e
        },
        padRight: function (e, t) {
            return e + r(Math.max(0, t))
        },
        getMaxListElement: function (e) {
            var t = 0;
            return (e || []).forEach((function (e) {
                e > t && (t = e)
            })), t
        }
    }
}, function (e, t) {
    e.exports = function (e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
}, function (e, t, n) {
    "use strict";
    var r = n(99).ConsentString,
        o = n(52).decodeConsentString,
        i = n(48).encodeConsentString;
    e.exports = {
        ConsentString: r,
        decodeConsentString: o,
        encodeConsentString: i
    }
}, function (e, t, n) {
    "use strict";
    var r = n(101).TCStringV2;
    e.exports = {
        TCStringV2: r
    }
}, function (e, t, n) {
    var r = n(30),
        o = Math.hypot,
        i = Math.abs,
        s = Math.sqrt;
    r({
        target: "Math",
        stat: !0,
        forced: !!o && o(1 / 0, NaN) !== 1 / 0
    }, {
        hypot: function (e, t) {
            for (var n, r, o = 0, a = 0, c = arguments.length, u = 0; a < c;) u < (n = i(arguments[a++])) ? (o = o * (r = u / n) * r + 1, u = n) : o += n > 0 ? (r = n / u) * r : n;
            return u === 1 / 0 ? 1 / 0 : u * s(o)
        }
    })
}, function (e, t, n) {
    "use strict";
    var r = {}.propertyIsEnumerable,
        o = Object.getOwnPropertyDescriptor,
        i = o && !r.call({
            1: 2
        }, 1);
    t.f = i ? function (e) {
        var t = o(this, e);
        return !!t && t.enumerable
    } : r
}, function (e, t, n) {
    var r = n(0),
        o = n(2),
        i = n(3),
        s = n(10),
        a = r.Object,
        c = o("".split);
    e.exports = i((function () {
        return !a("z").propertyIsEnumerable(0)
    })) ? function (e) {
        return "String" == s(e) ? c(e, "") : a(e)
    } : a
}, function (e, t, n) {
    var r = n(0),
        o = n(8),
        i = n(9),
        s = n(34),
        a = n(38),
        c = n(64),
        u = n(5),
        d = r.TypeError,
        l = u("toPrimitive");
    e.exports = function (e, t) {
        if (!i(e) || s(e)) return e;
        var n, r = a(e, l);
        if (r) {
            if (void 0 === t && (t = "default"), n = o(r, e, t), !i(n) || s(n)) return n;
            throw d("Can't convert object to primitive value")
        }
        return void 0 === t && (t = "number"), c(e, t)
    }
}, function (e, t, n) {
    var r, o, i = n(0),
        s = n(62),
        a = i.process,
        c = i.Deno,
        u = a && a.versions || c && c.version,
        d = u && u.v8;
    d && (o = (r = d.split("."))[0] > 0 && r[0] < 4 ? 1 : +(r[0] + r[1])), !o && s && (!(r = s.match(/Edge\/(\d+)/)) || r[1] >= 74) && (r = s.match(/Chrome\/(\d+)/)) && (o = +r[1]), e.exports = o
}, function (e, t, n) {
    var r = n(11);
    e.exports = r("navigator", "userAgent") || ""
}, function (e, t, n) {
    var r = n(0),
        o = n(1),
        i = n(39),
        s = r.TypeError;
    e.exports = function (e) {
        if (o(e)) return e;
        throw s(i(e) + " is not a function")
    }
}, function (e, t, n) {
    var r = n(0),
        o = n(8),
        i = n(1),
        s = n(9),
        a = r.TypeError;
    e.exports = function (e, t) {
        var n, r;
        if ("string" === t && i(n = e.toString) && !s(r = o(n, e))) return r;
        if (i(n = e.valueOf) && !s(r = o(n, e))) return r;
        if ("string" !== t && i(n = e.toString) && !s(r = o(n, e))) return r;
        throw a("Can't convert object to primitive value")
    }
}, function (e, t, n) {
    var r = n(0),
        o = n(1),
        i = n(22),
        s = r.WeakMap;
    e.exports = o(s) && /native code/.test(i(s))
}, function (e, t, n) {
    var r = n(7),
        o = n(4),
        i = Function.prototype,
        s = r && Object.getOwnPropertyDescriptor,
        a = o(i, "name"),
        c = a && "something" === function () {}.name,
        u = a && (!r || r && s(i, "name").configurable);
    e.exports = {
        EXISTS: a,
        PROPER: c,
        CONFIGURABLE: u
    }
}, function (e, t, n) {
    var r = n(4),
        o = n(68),
        i = n(32),
        s = n(14);
    e.exports = function (e, t) {
        for (var n = o(t), a = s.f, c = i.f, u = 0; u < n.length; u++) {
            var d = n[u];
            r(e, d) || a(e, d, c(t, d))
        }
    }
}, function (e, t, n) {
    var r = n(11),
        o = n(2),
        i = n(69),
        s = n(73),
        a = n(6),
        c = o([].concat);
    e.exports = r("Reflect", "ownKeys") || function (e) {
        var t = i.f(a(e)),
            n = s.f;
        return n ? c(t, n(e)) : t
    }
}, function (e, t, n) {
    var r = n(44),
        o = n(27).concat("length", "prototype");
    t.f = Object.getOwnPropertyNames || function (e) {
        return r(e, o)
    }
}, function (e, t, n) {
    var r = n(12),
        o = n(71),
        i = n(72),
        s = function (e) {
            return function (t, n, s) {
                var a, c = r(t),
                    u = i(c),
                    d = o(s, u);
                if (e && n != n) {
                    for (; u > d;)
                        if ((a = c[d++]) != a) return !0
                } else
                    for (; u > d; d++)
                        if ((e || d in c) && c[d] === n) return e || d || 0;
                return !e && -1
            }
        };
    e.exports = {
        includes: s(!0),
        indexOf: s(!1)
    }
}, function (e, t, n) {
    var r = n(26),
        o = Math.max,
        i = Math.min;
    e.exports = function (e, t) {
        var n = r(e);
        return n < 0 ? o(n + t, 0) : i(n, t)
    }
}, function (e, t, n) {
    var r = n(45);
    e.exports = function (e) {
        return r(e.length)
    }
}, function (e, t) {
    t.f = Object.getOwnPropertySymbols
}, function (e, t, n) {
    var r = n(3),
        o = n(1),
        i = /#|\.prototype\./,
        s = function (e, t) {
            var n = c[a(e)];
            return n == d || n != u && (o(t) ? r(t) : !!t)
        },
        a = s.normalize = function (e) {
            return String(e).replace(i, ".").toLowerCase()
        },
        c = s.data = {},
        u = s.NATIVE = "N",
        d = s.POLYFILL = "P";
    e.exports = s
}, function (e, t, n) {
    "use strict";
    var r = n(30),
        o = n(0),
        i = n(8),
        s = n(2),
        a = n(76),
        c = n(13),
        u = n(45),
        d = n(29),
        l = n(6),
        f = n(10),
        p = n(35),
        h = n(86),
        b = n(47),
        g = n(38),
        m = n(21),
        v = n(3),
        y = n(5),
        w = n(87),
        x = n(90),
        S = n(92),
        E = n(23),
        A = n(17),
        C = y("matchAll"),
        T = E.set,
        I = E.getterFor("RegExp String Iterator"),
        k = RegExp.prototype,
        P = o.TypeError,
        O = s(b),
        B = s("".indexOf),
        D = s("".matchAll),
        V = !!D && !v((function () {
            D("a", /./)
        })),
        _ = a((function (e, t, n, r) {
            T(this, {
                type: "RegExp String Iterator",
                regexp: e,
                string: t,
                global: n,
                unicode: r,
                done: !1
            })
        }), "RegExp String", (function () {
            var e = I(this);
            if (e.done) return {
                value: void 0,
                done: !0
            };
            var t = e.regexp,
                n = e.string,
                r = S(t, n);
            return null === r ? {
                value: void 0,
                done: e.done = !0
            } : e.global ? ("" === d(r[0]) && (t.lastIndex = x(n, u(t.lastIndex), e.unicode)), {
                value: r,
                done: !1
            }) : (e.done = !0, {
                value: r,
                done: !1
            })
        })),
        R = function (e) {
            var t, n, r, o, i, s, a = l(this),
                c = d(e);
            return t = w(a, RegExp), void 0 === (n = a.flags) && p(k, a) && !("flags" in k) && (n = O(a)), r = void 0 === n ? "" : d(n), o = new t(t === RegExp ? a.source : a, r), i = !!~B(r, "g"), s = !!~B(r, "u"), o.lastIndex = u(a.lastIndex), new _(o, c, i, s)
        };
    r({
        target: "String",
        proto: !0,
        forced: V
    }, {
        matchAll: function (e) {
            var t, n, r, o, s = c(this);
            if (null != e) {
                if (h(e) && (t = d(c("flags" in k ? e.flags : O(e))), !~B(t, "g"))) throw P("`.matchAll` does not allow non-global regexes");
                if (V) return D(s, e);
                if (void 0 === (r = g(e, C)) && A && "RegExp" == f(e) && (r = R), r) return i(r, e, s)
            } else if (V) return D(s, e);
            return n = d(s), o = new RegExp(e, "g"), A ? i(R, o, n) : o[C](n)
        }
    }), A || C in k || m(k, C, R)
}, function (e, t, n) {
    "use strict";
    var r = n(77).IteratorPrototype,
        o = n(28),
        i = n(15),
        s = n(83),
        a = n(84),
        c = function () {
            return this
        };
    e.exports = function (e, t, n) {
        var u = t + " Iterator";
        return e.prototype = o(r, {
            next: i(1, n)
        }), s(e, u, !1, !0), a[u] = c, e
    }
}, function (e, t, n) {
    "use strict";
    var r, o, i, s = n(3),
        a = n(1),
        c = n(28),
        u = n(81),
        d = n(21),
        l = n(5),
        f = n(17),
        p = l("iterator"),
        h = !1;
    [].keys && ("next" in (i = [].keys()) ? (o = u(u(i))) !== Object.prototype && (r = o) : h = !0), null == r || s((function () {
        var e = {};
        return r[p].call(e) !== e
    })) ? r = {} : f && (r = c(r)), a(r[p]) || d(r, p, (function () {
        return this
    })), e.exports = {
        IteratorPrototype: r,
        BUGGY_SAFARI_ITERATORS: h
    }
}, function (e, t, n) {
    var r = n(7),
        o = n(14),
        i = n(6),
        s = n(12),
        a = n(79);
    e.exports = r ? Object.defineProperties : function (e, t) {
        i(e);
        for (var n, r = s(t), c = a(t), u = c.length, d = 0; u > d;) o.f(e, n = c[d++], r[n]);
        return e
    }
}, function (e, t, n) {
    var r = n(44),
        o = n(27);
    e.exports = Object.keys || function (e) {
        return r(e, o)
    }
}, function (e, t, n) {
    var r = n(11);
    e.exports = r("document", "documentElement")
}, function (e, t, n) {
    var r = n(0),
        o = n(4),
        i = n(1),
        s = n(40),
        a = n(24),
        c = n(82),
        u = a("IE_PROTO"),
        d = r.Object,
        l = d.prototype;
    e.exports = c ? d.getPrototypeOf : function (e) {
        var t = s(e);
        if (o(t, u)) return t[u];
        var n = t.constructor;
        return i(n) && t instanceof n ? n.prototype : t instanceof d ? l : null
    }
}, function (e, t, n) {
    var r = n(3);
    e.exports = !r((function () {
        function e() {}
        return e.prototype.constructor = null, Object.getPrototypeOf(new e) !== e.prototype
    }))
}, function (e, t, n) {
    var r = n(14).f,
        o = n(4),
        i = n(5)("toStringTag");
    e.exports = function (e, t, n) {
        e && !o(e = n ? e : e.prototype, i) && r(e, i, {
            configurable: !0,
            value: t
        })
    }
}, function (e, t) {
    e.exports = {}
}, function (e, t, n) {
    var r = {};
    r[n(5)("toStringTag")] = "z", e.exports = "[object z]" === String(r)
}, function (e, t, n) {
    var r = n(9),
        o = n(10),
        i = n(5)("match");
    e.exports = function (e) {
        var t;
        return r(e) && (void 0 !== (t = e[i]) ? !!t : "RegExp" == o(e))
    }
}, function (e, t, n) {
    var r = n(6),
        o = n(88),
        i = n(5)("species");
    e.exports = function (e, t) {
        var n, s = r(e).constructor;
        return void 0 === s || null == (n = r(s)[i]) ? t : o(n)
    }
}, function (e, t, n) {
    var r = n(0),
        o = n(89),
        i = n(39),
        s = r.TypeError;
    e.exports = function (e) {
        if (o(e)) return e;
        throw s(i(e) + " is not a constructor")
    }
}, function (e, t, n) {
    var r = n(2),
        o = n(3),
        i = n(1),
        s = n(46),
        a = n(11),
        c = n(22),
        u = function () {},
        d = [],
        l = a("Reflect", "construct"),
        f = /^\s*(?:class|function)\b/,
        p = r(f.exec),
        h = !f.exec(u),
        b = function (e) {
            if (!i(e)) return !1;
            try {
                return l(u, d, e), !0
            } catch (e) {
                return !1
            }
        };
    e.exports = !l || o((function () {
        var e;
        return b(b.call) || !b(Object) || !b((function () {
            e = !0
        })) || e
    })) ? function (e) {
        if (!i(e)) return !1;
        switch (s(e)) {
            case "AsyncFunction":
            case "GeneratorFunction":
            case "AsyncGeneratorFunction":
                return !1
        }
        return h || !!p(f, c(e))
    } : b
}, function (e, t, n) {
    "use strict";
    var r = n(91).charAt;
    e.exports = function (e, t, n) {
        return t + (n ? r(e, t).length : 1)
    }
}, function (e, t, n) {
    var r = n(2),
        o = n(26),
        i = n(29),
        s = n(13),
        a = r("".charAt),
        c = r("".charCodeAt),
        u = r("".slice),
        d = function (e) {
            return function (t, n) {
                var r, d, l = i(s(t)),
                    f = o(n),
                    p = l.length;
                return f < 0 || f >= p ? e ? "" : void 0 : (r = c(l, f)) < 55296 || r > 56319 || f + 1 === p || (d = c(l, f + 1)) < 56320 || d > 57343 ? e ? a(l, f) : r : e ? u(l, f, f + 2) : d - 56320 + (r - 55296 << 10) + 65536
            }
        };
    e.exports = {
        codeAt: d(!1),
        charAt: d(!0)
    }
}, function (e, t, n) {
    var r = n(0),
        o = n(8),
        i = n(6),
        s = n(1),
        a = n(10),
        c = n(93),
        u = r.TypeError;
    e.exports = function (e, t) {
        var n = e.exec;
        if (s(n)) {
            var r = o(n, e, t);
            return null !== r && i(r), r
        }
        if ("RegExp" === a(e)) return o(c, e, t);
        throw u("RegExp#exec called on incompatible receiver")
    }
}, function (e, t, n) {
    "use strict";
    var r, o, i = n(8),
        s = n(2),
        a = n(29),
        c = n(47),
        u = n(94),
        d = n(16),
        l = n(28),
        f = n(23).get,
        p = n(95),
        h = n(96),
        b = d("native-string-replace", String.prototype.replace),
        g = RegExp.prototype.exec,
        m = g,
        v = s("".charAt),
        y = s("".indexOf),
        w = s("".replace),
        x = s("".slice),
        S = (o = /b*/g, i(g, r = /a/, "a"), i(g, o, "a"), 0 !== r.lastIndex || 0 !== o.lastIndex),
        E = u.BROKEN_CARET,
        A = void 0 !== /()??/.exec("")[1];
    (S || A || E || p || h) && (m = function (e) {
        var t, n, r, o, s, u, d, p = this,
            h = f(p),
            C = a(e),
            T = h.raw;
        if (T) return T.lastIndex = p.lastIndex, t = i(m, T, C), p.lastIndex = T.lastIndex, t;
        var I = h.groups,
            k = E && p.sticky,
            P = i(c, p),
            O = p.source,
            B = 0,
            D = C;
        if (k && (P = w(P, "y", ""), -1 === y(P, "g") && (P += "g"), D = x(C, p.lastIndex), p.lastIndex > 0 && (!p.multiline || p.multiline && "\n" !== v(C, p.lastIndex - 1)) && (O = "(?: " + O + ")", D = " " + D, B++), n = new RegExp("^(?:" + O + ")", P)), A && (n = new RegExp("^" + O + "$(?!\\s)", P)), S && (r = p.lastIndex), o = i(g, k ? n : p, D), k ? o ? (o.input = x(o.input, B), o[0] = x(o[0], B), o.index = p.lastIndex, p.lastIndex += o[0].length) : p.lastIndex = 0 : S && o && (p.lastIndex = p.global ? o.index + o[0].length : r), A && o && o.length > 1 && i(b, o[0], n, (function () {
                for (s = 1; s < arguments.length - 2; s++) void 0 === arguments[s] && (o[s] = void 0)
            })), o && I)
            for (o.groups = u = l(null), s = 0; s < I.length; s++) u[(d = I[s])[0]] = o[d[1]];
        return o
    }), e.exports = m
}, function (e, t, n) {
    var r = n(3),
        o = n(0).RegExp,
        i = r((function () {
            var e = o("a", "y");
            return e.lastIndex = 2, null != e.exec("abcd")
        })),
        s = i || r((function () {
            return !o("a", "y").sticky
        })),
        a = i || r((function () {
            var e = o("^r", "gy");
            return e.lastIndex = 2, null != e.exec("str")
        }));
    e.exports = {
        BROKEN_CARET: a,
        MISSED_STICKY: s,
        UNSUPPORTED_Y: i
    }
}, function (e, t, n) {
    var r = n(3),
        o = n(0).RegExp;
    e.exports = r((function () {
        var e = o(".", "s");
        return !(e.dotAll && e.exec("\n") && "s" === e.flags)
    }))
}, function (e, t, n) {
    var r = n(3),
        o = n(0).RegExp;
    e.exports = r((function () {
        var e = o("(?<a>b)", "g");
        return "b" !== e.exec("b").groups.a || "bc" !== "b".replace(e, "$<a>c")
    }))
}, function (e, t, n) {
    var r, o;
    o = "undefined" != typeof self ? self : this, void 0 === (r = function () {
        return function (e) {
            "use strict";
            if ("function" != typeof Promise) throw "Promise support required";
            var t = e.crypto || e.msCrypto;
            if (t) {
                var n = t.subtle || t.webkitSubtle;
                if (n) {
                    var r = e.Crypto || t.constructor || Object,
                        o = e.SubtleCrypto || n.constructor || Object,
                        i = (e.CryptoKey || e.Key, e.navigator.userAgent.indexOf("Edge/") > -1),
                        s = !!e.msCrypto && !i,
                        a = !t.subtle && !!t.webkitSubtle;
                    if (s || a) {
                        var c = {
                                KoZIhvcNAQEB: "1.2.840.113549.1.1.1"
                            },
                            u = {
                                "1.2.840.113549.1.1.1": "KoZIhvcNAQEB"
                            };
                        if (["generateKey", "importKey", "unwrapKey"].forEach((function (e) {
                                var r = n[e];
                                n[e] = function (o, i, c) {
                                    var u, d, l, h, w = [].slice.call(arguments);
                                    switch (e) {
                                        case "generateKey":
                                            u = b(o), d = i, l = c;
                                            break;
                                        case "importKey":
                                            u = b(c), d = w[3], l = w[4], "jwk" === o && ((i = m(i)).alg || (i.alg = g(u)), i.key_ops || (i.key_ops = "oct" !== i.kty ? "d" in i ? l.filter(C) : l.filter(A) : l.slice()), w[1] = v(i));
                                            break;
                                        case "unwrapKey":
                                            u = w[4], d = w[5], l = w[6], w[2] = c._key
                                    }
                                    if ("generateKey" === e && "HMAC" === u.name && u.hash) return u.length = u.length || {
                                        "SHA-1": 512,
                                        "SHA-256": 512,
                                        "SHA-384": 1024,
                                        "SHA-512": 1024
                                    } [u.hash.name], n.importKey("raw", t.getRandomValues(new Uint8Array(u.length + 7 >> 3)), u, d, l);
                                    if (a && "generateKey" === e && "RSASSA-PKCS1-v1_5" === u.name && (!u.modulusLength || u.modulusLength >= 2048)) return (o = b(o)).name = "RSAES-PKCS1-v1_5", delete o.hash, n.generateKey(o, !0, ["encrypt", "decrypt"]).then((function (e) {
                                        return Promise.all([n.exportKey("jwk", e.publicKey), n.exportKey("jwk", e.privateKey)])
                                    })).then((function (e) {
                                        return e[0].alg = e[1].alg = g(u), e[0].key_ops = l.filter(A), e[1].key_ops = l.filter(C), Promise.all([n.importKey("jwk", e[0], u, !0, e[0].key_ops), n.importKey("jwk", e[1], u, d, e[1].key_ops)])
                                    })).then((function (e) {
                                        return {
                                            publicKey: e[0],
                                            privateKey: e[1]
                                        }
                                    }));
                                    if ((a || s && "SHA-1" === (u.hash || {}).name) && "importKey" === e && "jwk" === o && "HMAC" === u.name && "oct" === i.kty) return n.importKey("raw", p(f(i.k)), c, w[3], w[4]);
                                    if (a && "importKey" === e && ("spki" === o || "pkcs8" === o)) return n.importKey("jwk", y(i), c, w[3], w[4]);
                                    if (s && "unwrapKey" === e) return n.decrypt(w[3], c, i).then((function (e) {
                                        return n.importKey(o, e, w[4], w[5], w[6])
                                    }));
                                    try {
                                        h = r.apply(n, w)
                                    } catch (e) {
                                        return Promise.reject(e)
                                    }
                                    return s && (h = new Promise((function (e, t) {
                                        h.onabort = h.onerror = function (e) {
                                            t(e)
                                        }, h.oncomplete = function (t) {
                                            e(t.target.result)
                                        }
                                    }))), h = h.then((function (e) {
                                        return "HMAC" === u.name && (u.length || (u.length = 8 * e.algorithm.length)), 0 == u.name.search("RSA") && (u.modulusLength || (u.modulusLength = (e.publicKey || e).algorithm.modulusLength), u.publicExponent || (u.publicExponent = (e.publicKey || e).algorithm.publicExponent)), e = e.publicKey && e.privateKey ? {
                                            publicKey: new E(e.publicKey, u, d, l.filter(A)),
                                            privateKey: new E(e.privateKey, u, d, l.filter(C))
                                        } : new E(e, u, d, l)
                                    }))
                                }
                            })), ["exportKey", "wrapKey"].forEach((function (e) {
                                var t = n[e];
                                n[e] = function (r, o, i) {
                                    var c, u = [].slice.call(arguments);
                                    switch (e) {
                                        case "exportKey":
                                            u[1] = o._key;
                                            break;
                                        case "wrapKey":
                                            u[1] = o._key, u[2] = i._key
                                    }
                                    if ((a || s && "SHA-1" === (o.algorithm.hash || {}).name) && "exportKey" === e && "jwk" === r && "HMAC" === o.algorithm.name && (u[0] = "raw"), !a || "exportKey" !== e || "spki" !== r && "pkcs8" !== r || (u[0] = "jwk"), s && "wrapKey" === e) return n.exportKey(r, o).then((function (e) {
                                        return "jwk" === r && (e = p(unescape(encodeURIComponent(JSON.stringify(m(e)))))), n.encrypt(u[3], i, e)
                                    }));
                                    try {
                                        c = t.apply(n, u)
                                    } catch (e) {
                                        return Promise.reject(e)
                                    }
                                    return s && (c = new Promise((function (e, t) {
                                        c.onabort = c.onerror = function (e) {
                                            t(e)
                                        }, c.oncomplete = function (t) {
                                            e(t.target.result)
                                        }
                                    }))), "exportKey" === e && "jwk" === r && (c = c.then((function (e) {
                                        return (a || s && "SHA-1" === (o.algorithm.hash || {}).name) && "HMAC" === o.algorithm.name ? {
                                            kty: "oct",
                                            alg: g(o.algorithm),
                                            key_ops: o.usages.slice(),
                                            ext: !0,
                                            k: l(h(e))
                                        } : ((e = m(e)).alg || (e.alg = g(o.algorithm)), e.key_ops || (e.key_ops = "public" === o.type ? o.usages.filter(A) : "private" === o.type ? o.usages.filter(C) : o.usages.slice()), e)
                                    }))), !a || "exportKey" !== e || "spki" !== r && "pkcs8" !== r || (c = c.then((function (e) {
                                        return e = w(m(e))
                                    }))), c
                                }
                            })), ["encrypt", "decrypt", "sign", "verify"].forEach((function (e) {
                                var t = n[e];
                                n[e] = function (r, o, i, a) {
                                    if (s && (!i.byteLength || a && !a.byteLength)) throw new Error("Empy input is not allowed");
                                    var c, u = [].slice.call(arguments),
                                        d = b(r);
                                    if (!s || "sign" !== e && "verify" !== e || "RSASSA-PKCS1-v1_5" !== r && "HMAC" !== r || (u[0] = {
                                            name: r
                                        }), s && o.algorithm.hash && (u[0].hash = u[0].hash || o.algorithm.hash), s && "decrypt" === e && "AES-GCM" === d.name) {
                                        var l = r.tagLength >> 3;
                                        u[2] = (i.buffer || i).slice(0, i.byteLength - l), r.tag = (i.buffer || i).slice(i.byteLength - l)
                                    }
                                    u[1] = o._key;
                                    try {
                                        c = t.apply(n, u)
                                    } catch (e) {
                                        return Promise.reject(e)
                                    }
                                    return s && (c = new Promise((function (t, n) {
                                        c.onabort = c.onerror = function (e) {
                                            n(e)
                                        }, c.oncomplete = function (n) {
                                            if (n = n.target.result, "encrypt" === e && n instanceof AesGcmEncryptResult) {
                                                var r = n.ciphertext,
                                                    o = n.tag;
                                                (n = new Uint8Array(r.byteLength + o.byteLength)).set(new Uint8Array(r), 0), n.set(new Uint8Array(o), r.byteLength), n = n.buffer
                                            }
                                            t(n)
                                        }
                                    }))), c
                                }
                            })), s) {
                            var d = n.digest;
                            n.digest = function (e, t) {
                                if (!t.byteLength) throw new Error("Empy input is not allowed");
                                var r;
                                try {
                                    r = d.call(n, e, t)
                                } catch (e) {
                                    return Promise.reject(e)
                                }
                                return r = new Promise((function (e, t) {
                                    r.onabort = r.onerror = function (e) {
                                        t(e)
                                    }, r.oncomplete = function (t) {
                                        e(t.target.result)
                                    }
                                }))
                            }, e.crypto = Object.create(t, {
                                getRandomValues: {
                                    value: function (e) {
                                        return t.getRandomValues(e)
                                    }
                                },
                                subtle: {
                                    value: n
                                }
                            }), e.CryptoKey = E
                        }
                        a && (t.subtle = n, e.Crypto = r, e.SubtleCrypto = o, e.CryptoKey = E)
                    }
                }
            }

            function l(e) {
                return btoa(e).replace(/\=+$/, "").replace(/\+/g, "-").replace(/\//g, "_")
            }

            function f(e) {
                return e = (e += "===").slice(0, -e.length % 4), atob(e.replace(/-/g, "+").replace(/_/g, "/"))
            }

            function p(e) {
                for (var t = new Uint8Array(e.length), n = 0; n < e.length; n++) t[n] = e.charCodeAt(n);
                return t
            }

            function h(e) {
                return e instanceof ArrayBuffer && (e = new Uint8Array(e)), String.fromCharCode.apply(String, e)
            }

            function b(e) {
                var t = {
                    name: (e.name || e || "").toUpperCase().replace("V", "v")
                };
                switch (t.name) {
                    case "SHA-1":
                    case "SHA-256":
                    case "SHA-384":
                    case "SHA-512":
                        break;
                    case "AES-CBC":
                    case "AES-GCM":
                    case "AES-KW":
                        e.length && (t.length = e.length);
                        break;
                    case "HMAC":
                        e.hash && (t.hash = b(e.hash)), e.length && (t.length = e.length);
                        break;
                    case "RSAES-PKCS1-v1_5":
                        e.publicExponent && (t.publicExponent = new Uint8Array(e.publicExponent)), e.modulusLength && (t.modulusLength = e.modulusLength);
                        break;
                    case "RSASSA-PKCS1-v1_5":
                    case "RSA-OAEP":
                        e.hash && (t.hash = b(e.hash)), e.publicExponent && (t.publicExponent = new Uint8Array(e.publicExponent)), e.modulusLength && (t.modulusLength = e.modulusLength);
                        break;
                    default:
                        throw new SyntaxError("Bad algorithm name")
                }
                return t
            }

            function g(e) {
                return {
                    HMAC: {
                        "SHA-1": "HS1",
                        "SHA-256": "HS256",
                        "SHA-384": "HS384",
                        "SHA-512": "HS512"
                    },
                    "RSASSA-PKCS1-v1_5": {
                        "SHA-1": "RS1",
                        "SHA-256": "RS256",
                        "SHA-384": "RS384",
                        "SHA-512": "RS512"
                    },
                    "RSAES-PKCS1-v1_5": {
                        "": "RSA1_5"
                    },
                    "RSA-OAEP": {
                        "SHA-1": "RSA-OAEP",
                        "SHA-256": "RSA-OAEP-256"
                    },
                    "AES-KW": {
                        128: "A128KW",
                        192: "A192KW",
                        256: "A256KW"
                    },
                    "AES-GCM": {
                        128: "A128GCM",
                        192: "A192GCM",
                        256: "A256GCM"
                    },
                    "AES-CBC": {
                        128: "A128CBC",
                        192: "A192CBC",
                        256: "A256CBC"
                    }
                } [e.name][(e.hash || {}).name || e.length || ""]
            }

            function m(e) {
                (e instanceof ArrayBuffer || e instanceof Uint8Array) && (e = JSON.parse(decodeURIComponent(escape(h(e)))));
                var t = {
                    kty: e.kty,
                    alg: e.alg,
                    ext: e.ext || e.extractable
                };
                switch (t.kty) {
                    case "oct":
                        t.k = e.k;
                    case "RSA":
                        ["n", "e", "d", "p", "q", "dp", "dq", "qi", "oth"].forEach((function (n) {
                            n in e && (t[n] = e[n])
                        }));
                        break;
                    default:
                        throw new TypeError("Unsupported key type")
                }
                return t
            }

            function v(e) {
                var t = m(e);
                return s && (t.extractable = t.ext, delete t.ext), p(unescape(encodeURIComponent(JSON.stringify(t)))).buffer
            }

            function y(e) {
                var t = x(e),
                    n = !1;
                t.length > 2 && (n = !0, t.shift());
                var r = {
                    ext: !0
                };
                switch (t[0][0]) {
                    case "1.2.840.113549.1.1.1":
                        var o = ["n", "e", "d", "p", "q", "dp", "dq", "qi"],
                            i = x(t[1]);
                        n && i.shift();
                        for (var s = 0; s < i.length; s++) i[s][0] || (i[s] = i[s].subarray(1)), r[o[s]] = l(h(i[s]));
                        r.kty = "RSA";
                        break;
                    default:
                        throw new TypeError("Unsupported key type")
                }
                return r
            }

            function w(e) {
                var t, n = [
                        ["", null]
                    ],
                    r = !1;
                switch (e.kty) {
                    case "RSA":
                        for (var o = ["n", "e", "d", "p", "q", "dp", "dq", "qi"], i = [], s = 0; s < o.length && o[s] in e; s++) {
                            var a = i[s] = p(f(e[o[s]]));
                            128 & a[0] && (i[s] = new Uint8Array(a.length + 1), i[s].set(a, 1))
                        }
                        i.length > 2 && (r = !0, i.unshift(new Uint8Array([0]))), n[0][0] = "1.2.840.113549.1.1.1", t = i;
                        break;
                    default:
                        throw new TypeError("Unsupported key type")
                }
                return n.push(new Uint8Array(S(t)).buffer), r ? n.unshift(new Uint8Array([0])) : n[1] = {
                    tag: 3,
                    value: n[1]
                }, new Uint8Array(S(n)).buffer
            }

            function x(e, t) {
                if (e instanceof ArrayBuffer && (e = new Uint8Array(e)), t || (t = {
                        pos: 0,
                        end: e.length
                    }), t.end - t.pos < 2 || t.end > e.length) throw new RangeError("Malformed DER");
                var n, r = e[t.pos++],
                    o = e[t.pos++];
                if (o >= 128) {
                    if (o &= 127, t.end - t.pos < o) throw new RangeError("Malformed DER");
                    for (var i = 0; o--;) i <<= 8, i |= e[t.pos++];
                    o = i
                }
                if (t.end - t.pos < o) throw new RangeError("Malformed DER");
                switch (r) {
                    case 2:
                        n = e.subarray(t.pos, t.pos += o);
                        break;
                    case 3:
                        if (e[t.pos++]) throw new Error("Unsupported bit string");
                        o--;
                    case 4:
                        n = new Uint8Array(e.subarray(t.pos, t.pos += o)).buffer;
                        break;
                    case 5:
                        n = null;
                        break;
                    case 6:
                        var s = btoa(h(e.subarray(t.pos, t.pos += o)));
                        if (!(s in c)) throw new Error("Unsupported OBJECT ID " + s);
                        n = c[s];
                        break;
                    case 48:
                        n = [];
                        for (var a = t.pos + o; t.pos < a;) n.push(x(e, t));
                        break;
                    default:
                        throw new Error("Unsupported DER tag 0x" + r.toString(16))
                }
                return n
            }

            function S(e, t) {
                t || (t = []);
                var n = 0,
                    r = 0,
                    o = t.length + 2;
                if (t.push(0, 0), e instanceof Uint8Array) {
                    n = 2, r = e.length;
                    for (var i = 0; i < r; i++) t.push(e[i])
                } else if (e instanceof ArrayBuffer)
                    for (n = 4, r = e.byteLength, e = new Uint8Array(e), i = 0; i < r; i++) t.push(e[i]);
                else if (null === e) n = 5, r = 0;
                else if ("string" == typeof e && e in u) {
                    var s = p(atob(u[e]));
                    for (n = 6, r = s.length, i = 0; i < r; i++) t.push(s[i])
                } else if (e instanceof Array) {
                    for (i = 0; i < e.length; i++) S(e[i], t);
                    n = 48, r = t.length - o
                } else {
                    if (!("object" == typeof e && 3 === e.tag && e.value instanceof ArrayBuffer)) throw new Error("Unsupported DER value " + e);
                    for (n = 3, r = (e = new Uint8Array(e.value)).byteLength, t.push(0), i = 0; i < r; i++) t.push(e[i]);
                    r++
                }
                if (r >= 128) {
                    var a = r;
                    for (r = 4, t.splice(o, 0, a >> 24 & 255, a >> 16 & 255, a >> 8 & 255, 255 & a); r > 1 && !(a >> 24);) a <<= 8, r--;
                    r < 4 && t.splice(o, 4 - r), r |= 128
                }
                return t.splice(o - 2, 2, n, r), t
            }

            function E(e, t, n, r) {
                Object.defineProperties(this, {
                    _key: {
                        value: e
                    },
                    type: {
                        value: e.type,
                        enumerable: !0
                    },
                    extractable: {
                        value: void 0 === n ? e.extractable : n,
                        enumerable: !0
                    },
                    algorithm: {
                        value: void 0 === t ? e.algorithm : t,
                        enumerable: !0
                    },
                    usages: {
                        value: void 0 === r ? e.usages : r,
                        enumerable: !0
                    }
                })
            }

            function A(e) {
                return "verify" === e || "encrypt" === e || "wrapKey" === e
            }

            function C(e) {
                return "sign" === e || "decrypt" === e || "unwrapKey" === e
            }
        }(o)
    }.apply(t, [])) || (e.exports = r)
}, function (e, t, n) {
    var r;
    ! function (o, i) {
        "use strict";
        var s = "model",
            a = "name",
            c = "type",
            u = "vendor",
            d = "version",
            l = "mobile",
            f = "tablet",
            p = "smarttv",
            h = {
                extend: function (e, t) {
                    var n = {};
                    for (var r in e) t[r] && t[r].length % 2 == 0 ? n[r] = t[r].concat(e[r]) : n[r] = e[r];
                    return n
                },
                has: function (e, t) {
                    return "string" == typeof e && -1 !== t.toLowerCase().indexOf(e.toLowerCase())
                },
                lowerize: function (e) {
                    return e.toLowerCase()
                },
                major: function (e) {
                    return "string" == typeof e ? e.replace(/[^\d\.]/g, "").split(".")[0] : void 0
                },
                trim: function (e) {
                    return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
                }
            },
            b = {
                rgx: function (e, t) {
                    for (var n, r, o, i, s, a, c = 0; c < t.length && !s;) {
                        var u = t[c],
                            d = t[c + 1];
                        for (n = r = 0; n < u.length && !s;)
                            if (s = u[n++].exec(e))
                                for (o = 0; o < d.length; o++) a = s[++r], "object" == typeof (i = d[o]) && i.length > 0 ? 2 == i.length ? "function" == typeof i[1] ? this[i[0]] = i[1].call(this, a) : this[i[0]] = i[1] : 3 == i.length ? "function" != typeof i[1] || i[1].exec && i[1].test ? this[i[0]] = a ? a.replace(i[1], i[2]) : void 0 : this[i[0]] = a ? i[1].call(this, a, i[2]) : void 0 : 4 == i.length && (this[i[0]] = a ? i[3].call(this, a.replace(i[1], i[2])) : void 0) : this[i] = a || void 0;
                        c += 2
                    }
                },
                str: function (e, t) {
                    for (var n in t)
                        if ("object" == typeof t[n] && t[n].length > 0) {
                            for (var r = 0; r < t[n].length; r++)
                                if (h.has(t[n][r], e)) return "?" === n ? void 0 : n
                        } else if (h.has(t[n], e)) return "?" === n ? void 0 : n;
                    return e
                }
            },
            g = {
                browser: {
                    oldsafari: {
                        version: {
                            "1.0": "/8",
                            1.2: "/1",
                            1.3: "/3",
                            "2.0": "/412",
                            "2.0.2": "/416",
                            "2.0.3": "/417",
                            "2.0.4": "/419",
                            "?": "/"
                        }
                    }
                },
                device: {
                    amazon: {
                        model: {
                            "Fire Phone": ["SD", "KF"]
                        }
                    },
                    sprint: {
                        model: {
                            "Evo Shift 4G": "7373KT"
                        },
                        vendor: {
                            HTC: "APA",
                            Sprint: "Sprint"
                        }
                    }
                },
                os: {
                    windows: {
                        version: {
                            ME: "4.90",
                            "NT 3.11": "NT3.51",
                            "NT 4.0": "NT4.0",
                            2e3: "NT 5.0",
                            XP: ["NT 5.1", "NT 5.2"],
                            Vista: "NT 6.0",
                            7: "NT 6.1",
                            8: "NT 6.2",
                            8.1: "NT 6.3",
                            10: ["NT 6.4", "NT 10.0"],
                            RT: "ARM"
                        }
                    }
                }
            },
            m = {
                browser: [
                    [/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i],
                    [a, d],
                    [/(opios)[\/\s]+([\w\.]+)/i],
                    [
                        [a, "Opera Mini"], d
                    ],
                    [/\s(opr)\/([\w\.]+)/i],
                    [
                        [a, "Opera"], d
                    ],
                    [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i, /(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i, /(bidubrowser|baidubrowser)[\/\s]?([\w\.]+)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(rekonq)\/([\w\.]*)/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i],
                    [a, d],
                    [/(konqueror)\/([\w\.]+)/i],
                    [
                        [a, "Konqueror"], d
                    ],
                    [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],
                    [
                        [a, "IE"], d
                    ],
                    [/(edge|edgios|edga|edg)\/((\d+)?[\w\.]+)/i],
                    [
                        [a, "Edge"], d
                    ],
                    [/(yabrowser)\/([\w\.]+)/i],
                    [
                        [a, "Yandex"], d
                    ],
                    [/(Avast)\/([\w\.]+)/i],
                    [
                        [a, "Avast Secure Browser"], d
                    ],
                    [/(AVG)\/([\w\.]+)/i],
                    [
                        [a, "AVG Secure Browser"], d
                    ],
                    [/(puffin)\/([\w\.]+)/i],
                    [
                        [a, "Puffin"], d
                    ],
                    [/(focus)\/([\w\.]+)/i],
                    [
                        [a, "Firefox Focus"], d
                    ],
                    [/(opt)\/([\w\.]+)/i],
                    [
                        [a, "Opera Touch"], d
                    ],
                    [/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],
                    [
                        [a, "UCBrowser"], d
                    ],
                    [/(comodo_dragon)\/([\w\.]+)/i],
                    [
                        [a, /_/g, " "], d
                    ],
                    [/(windowswechat qbcore)\/([\w\.]+)/i],
                    [
                        [a, "WeChat(Win) Desktop"], d
                    ],
                    [/(micromessenger)\/([\w\.]+)/i],
                    [
                        [a, "WeChat"], d
                    ],
                    [/(brave)\/([\w\.]+)/i],
                    [
                        [a, "Brave"], d
                    ],
                    [/(qqbrowserlite)\/([\w\.]+)/i],
                    [a, d],
                    [/(QQ)\/([\d\.]+)/i],
                    [a, d],
                    [/m?(qqbrowser)[\/\s]?([\w\.]+)/i],
                    [a, d],
                    [/(baiduboxapp)[\/\s]?([\w\.]+)/i],
                    [a, d],
                    [/(2345Explorer)[\/\s]?([\w\.]+)/i],
                    [a, d],
                    [/(MetaSr)[\/\s]?([\w\.]+)/i],
                    [a],
                    [/(LBBROWSER)/i],
                    [a],
                    [/xiaomi\/miuibrowser\/([\w\.]+)/i],
                    [d, [a, "MIUI Browser"]],
                    [/;fbav\/([\w\.]+);/i],
                    [d, [a, "Facebook"]],
                    [/safari\s(line)\/([\w\.]+)/i, /android.+(line)\/([\w\.]+)\/iab/i],
                    [a, d],
                    [/headlesschrome(?:\/([\w\.]+)|\s)/i],
                    [d, [a, "Chrome Headless"]],
                    [/\swv\).+(chrome)\/([\w\.]+)/i],
                    [
                        [a, /(.+)/, "$1 WebView"], d
                    ],
                    [/((?:oculus|samsung)browser)\/([\w\.]+)/i],
                    [
                        [a, /(.+(?:g|us))(.+)/, "$1 $2"], d
                    ],
                    [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],
                    [d, [a, "Android Browser"]],
                    [/(sailfishbrowser)\/([\w\.]+)/i],
                    [
                        [a, "Sailfish Browser"], d
                    ],
                    [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],
                    [a, d],
                    [/(dolfin)\/([\w\.]+)/i],
                    [
                        [a, "Dolphin"], d
                    ],
                    [/(qihu|qhbrowser|qihoobrowser|360browser)/i],
                    [
                        [a, "360 Browser"]
                    ],
                    [/((?:android.+)crmo|crios)\/([\w\.]+)/i],
                    [
                        [a, "Chrome"], d
                    ],
                    [/(coast)\/([\w\.]+)/i],
                    [
                        [a, "Opera Coast"], d
                    ],
                    [/fxios\/([\w\.-]+)/i],
                    [d, [a, "Firefox"]],
                    [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],
                    [d, [a, "Mobile Safari"]],
                    [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],
                    [d, a],
                    [/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
                    [
                        [a, "GSA"], d
                    ],
                    [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
                    [a, [d, b.str, g.browser.oldsafari.version]],
                    [/(webkit|khtml)\/([\w\.]+)/i],
                    [a, d],
                    [/(navigator|netscape)\/([\w\.-]+)/i],
                    [
                        [a, "Netscape"], d
                    ],
                    [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i, /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]*)/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i],
                    [a, d]
                ],
                cpu: [
                    [/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],
                    [
                        ["architecture", "amd64"]
                    ],
                    [/(ia32(?=;))/i],
                    [
                        ["architecture", h.lowerize]
                    ],
                    [/((?:i[346]|x)86)[;\)]/i],
                    [
                        ["architecture", "ia32"]
                    ],
                    [/windows\s(ce|mobile);\sppc;/i],
                    [
                        ["architecture", "arm"]
                    ],
                    [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],
                    [
                        ["architecture", /ower/, "", h.lowerize]
                    ],
                    [/(sun4\w)[;\)]/i],
                    [
                        ["architecture", "sparc"]
                    ],
                    [/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+[;l]))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],
                    [
                        ["architecture", h.lowerize]
                    ]
                ],
                device: [
                    [/\((ipad|playbook);[\w\s\),;-]+(rim|apple)/i],
                    [s, u, [c, f]],
                    [/applecoremedia\/[\w\.]+ \((ipad)/],
                    [s, [u, "Apple"],
                        [c, f]
                    ],
                    [/(apple\s{0,1}tv)/i],
                    [
                        [s, "Apple TV"],
                        [u, "Apple"],
                        [c, p]
                    ],
                    [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(hp).+(tablet)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i],
                    [u, s, [c, f]],
                    [/(kf[A-z]+)\sbuild\/.+silk\//i],
                    [s, [u, "Amazon"],
                        [c, f]
                    ],
                    [/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i],
                    [
                        [s, b.str, g.device.amazon.model],
                        [u, "Amazon"],
                        [c, l]
                    ],
                    [/android.+aft([bms])\sbuild/i],
                    [s, [u, "Amazon"],
                        [c, p]
                    ],
                    [/\((ip[honed|\s\w*]+);.+(apple)/i],
                    [s, u, [c, l]],
                    [/\((ip[honed|\s\w*]+);/i],
                    [s, [u, "Apple"],
                        [c, l]
                    ],
                    [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i],
                    [u, s, [c, l]],
                    [/\(bb10;\s(\w+)/i],
                    [s, [u, "BlackBerry"],
                        [c, l]
                    ],
                    [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone|p00c)/i],
                    [s, [u, "Asus"],
                        [c, f]
                    ],
                    [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i],
                    [
                        [u, "Sony"],
                        [s, "Xperia Tablet"],
                        [c, f]
                    ],
                    [/android.+\s([c-g]\d{4}|so[-l]\w+)(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
                    [s, [u, "Sony"],
                        [c, l]
                    ],
                    [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i],
                    [u, s, [c, "console"]],
                    [/android.+;\s(shield)\sbuild/i],
                    [s, [u, "Nvidia"],
                        [c, "console"]
                    ],
                    [/(playstation\s[34portablevi]+)/i],
                    [s, [u, "Sony"],
                        [c, "console"]
                    ],
                    [/(sprint\s(\w+))/i],
                    [
                        [u, b.str, g.device.sprint.vendor],
                        [s, b.str, g.device.sprint.model],
                        [c, l]
                    ],
                    [/(htc)[;_\s-]+([\w\s]+(?=\)|\sbuild)|\w+)/i, /(zte)-(\w*)/i, /(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],
                    [u, [s, /_/g, " "],
                        [c, l]
                    ],
                    [/(nexus\s9)/i],
                    [s, [u, "HTC"],
                        [c, f]
                    ],
                    [/d\/huawei([\w\s-]+)[;\)]/i, /(nexus\s6p|vog-l29|ane-lx1|eml-l29)/i],
                    [s, [u, "Huawei"],
                        [c, l]
                    ],
                    [/android.+(bah2?-a?[lw]\d{2})/i],
                    [s, [u, "Huawei"],
                        [c, f]
                    ],
                    [/(microsoft);\s(lumia[\s\w]+)/i],
                    [u, s, [c, l]],
                    [/[\s\(;](xbox(?:\sone)?)[\s\);]/i],
                    [s, [u, "Microsoft"],
                        [c, "console"]
                    ],
                    [/(kin\.[onetw]{3})/i],
                    [
                        [s, /\./g, " "],
                        [u, "Microsoft"],
                        [c, l]
                    ],
                    [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i, /mot[\s-]?(\w*)/i, /(XT\d{3,4}) build\//i, /(nexus\s6)/i],
                    [s, [u, "Motorola"],
                        [c, l]
                    ],
                    [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],
                    [s, [u, "Motorola"],
                        [c, f]
                    ],
                    [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],
                    [
                        [u, h.trim],
                        [s, h.trim],
                        [c, p]
                    ],
                    [/hbbtv.+maple;(\d+)/i],
                    [
                        [s, /^/, "SmartTV"],
                        [u, "Samsung"],
                        [c, p]
                    ],
                    [/\(dtv[\);].+(aquos)/i],
                    [s, [u, "Sharp"],
                        [c, p]
                    ],
                    [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i],
                    [
                        [u, "Samsung"], s, [c, f]
                    ],
                    [/smart-tv.+(samsung)/i],
                    [u, [c, p], s],
                    [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i, /sec-((sgh\w+))/i],
                    [
                        [u, "Samsung"], s, [c, l]
                    ],
                    [/sie-(\w*)/i],
                    [s, [u, "Siemens"],
                        [c, l]
                    ],
                    [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]*)/i],
                    [
                        [u, "Nokia"], s, [c, l]
                    ],
                    [/android[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i],
                    [s, [u, "Acer"],
                        [c, f]
                    ],
                    [/android.+([vl]k\-?\d{3})\s+build/i],
                    [s, [u, "LG"],
                        [c, f]
                    ],
                    [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],
                    [
                        [u, "LG"], s, [c, f]
                    ],
                    [/(lg) netcast\.tv/i],
                    [u, s, [c, p]],
                    [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w*)/i, /android.+lg(\-?[\d\w]+)\s+build/i],
                    [s, [u, "LG"],
                        [c, l]
                    ],
                    [/(lenovo)\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+))/i],
                    [u, s, [c, f]],
                    [/android.+(ideatab[a-z0-9\-\s]+)/i],
                    [s, [u, "Lenovo"],
                        [c, f]
                    ],
                    [/(lenovo)[_\s-]?([\w-]+)/i],
                    [u, s, [c, l]],
                    [/linux;.+((jolla));/i],
                    [u, s, [c, l]],
                    [/((pebble))app\/[\d\.]+\s/i],
                    [u, s, [c, "wearable"]],
                    [/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],
                    [u, s, [c, l]],
                    [/crkey/i],
                    [
                        [s, "Chromecast"],
                        [u, "Google"],
                        [c, p]
                    ],
                    [/android.+;\s(glass)\s\d/i],
                    [s, [u, "Google"],
                        [c, "wearable"]
                    ],
                    [/android.+;\s(pixel c)[\s)]/i],
                    [s, [u, "Google"],
                        [c, f]
                    ],
                    [/android.+;\s(pixel( [23])?( xl)?)[\s)]/i],
                    [s, [u, "Google"],
                        [c, l]
                    ],
                    [/android.+;\s(\w+)\s+build\/hm\1/i, /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i, /android.+(mi[\s\-_]*(?:a\d|one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i, /android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i],
                    [
                        [s, /_/g, " "],
                        [u, "Xiaomi"],
                        [c, l]
                    ],
                    [/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i],
                    [
                        [s, /_/g, " "],
                        [u, "Xiaomi"],
                        [c, f]
                    ],
                    [/android.+;\s(m[1-5]\snote)\sbuild/i],
                    [s, [u, "Meizu"],
                        [c, l]
                    ],
                    [/(mz)-([\w-]{2,})/i],
                    [
                        [u, "Meizu"], s, [c, l]
                    ],
                    [/android.+a000(1)\s+build/i, /android.+oneplus\s(a\d{4})[\s)]/i],
                    [s, [u, "OnePlus"],
                        [c, l]
                    ],
                    [/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],
                    [s, [u, "RCA"],
                        [c, f]
                    ],
                    [/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i],
                    [s, [u, "Dell"],
                        [c, f]
                    ],
                    [/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],
                    [s, [u, "Verizon"],
                        [c, f]
                    ],
                    [/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],
                    [
                        [u, "Barnes & Noble"], s, [c, f]
                    ],
                    [/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],
                    [s, [u, "NuVision"],
                        [c, f]
                    ],
                    [/android.+;\s(k88)\sbuild/i],
                    [s, [u, "ZTE"],
                        [c, f]
                    ],
                    [/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],
                    [s, [u, "Swiss"],
                        [c, l]
                    ],
                    [/android.+[;\/]\s*(zur\d{3})\s+build/i],
                    [s, [u, "Swiss"],
                        [c, f]
                    ],
                    [/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],
                    [s, [u, "Zeki"],
                        [c, f]
                    ],
                    [/(android).+[;\/]\s+([YR]\d{2})\s+build/i, /android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i],
                    [
                        [u, "Dragon Touch"], s, [c, f]
                    ],
                    [/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i],
                    [s, [u, "Insignia"],
                        [c, f]
                    ],
                    [/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i],
                    [s, [u, "NextBook"],
                        [c, f]
                    ],
                    [/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],
                    [
                        [u, "Voice"], s, [c, l]
                    ],
                    [/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i],
                    [
                        [u, "LvTel"], s, [c, l]
                    ],
                    [/android.+;\s(PH-1)\s/i],
                    [s, [u, "Essential"],
                        [c, l]
                    ],
                    [/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],
                    [s, [u, "Envizen"],
                        [c, f]
                    ],
                    [/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i],
                    [u, s, [c, f]],
                    [/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i],
                    [s, [u, "MachSpeed"],
                        [c, f]
                    ],
                    [/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],
                    [u, s, [c, f]],
                    [/android.+[;\/]\s*TU_(1491)\s+build/i],
                    [s, [u, "Rotor"],
                        [c, f]
                    ],
                    [/android.+(KS(.+))\s+build/i],
                    [s, [u, "Amazon"],
                        [c, f]
                    ],
                    [/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i],
                    [u, s, [c, f]],
                    [/\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i],
                    [
                        [c, h.lowerize], u, s
                    ],
                    [/[\s\/\(](smart-?tv)[;\)]/i],
                    [
                        [c, p]
                    ],
                    [/(android[\w\.\s\-]{0,9});.+build/i],
                    [s, [u, "Generic"]]
                ],
                engine: [
                    [/windows.+\sedge\/([\w\.]+)/i],
                    [d, [a, "EdgeHTML"]],
                    [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
                    [d, [a, "Blink"]],
                    [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i],
                    [a, d],
                    [/rv\:([\w\.]{1,9}).+(gecko)/i],
                    [d, a]
                ],
                os: [
                    [/microsoft\s(windows)\s(vista|xp)/i],
                    [a, d],
                    [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i, /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],
                    [a, [d, b.str, g.os.windows.version]],
                    [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
                    [
                        [a, "Windows"],
                        [d, b.str, g.os.windows.version]
                    ],
                    [/\((bb)(10);/i],
                    [
                        [a, "BlackBerry"], d
                    ],
                    [/(blackberry)\w*\/?([\w\.]*)/i, /(tizen|kaios)[\/\s]([\w\.]+)/i, /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i],
                    [a, d],
                    [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i],
                    [
                        [a, "Symbian"], d
                    ],
                    [/\((series40);/i],
                    [a],
                    [/mozilla.+\(mobile;.+gecko.+firefox/i],
                    [
                        [a, "Firefox OS"], d
                    ],
                    [/(nintendo|playstation)\s([wids34portablevu]+)/i, /(mint)[\/\s\(]?(\w*)/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i, /(hurd|linux)\s?([\w\.]*)/i, /(gnu)\s?([\w\.]*)/i],
                    [a, d],
                    [/(cros)\s[\w]+\s([\w\.]+\w)/i],
                    [
                        [a, "Chromium OS"], d
                    ],
                    [/(sunos)\s?([\w\.\d]*)/i],
                    [
                        [a, "Solaris"], d
                    ],
                    [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i],
                    [a, d],
                    [/(haiku)\s(\w+)/i],
                    [a, d],
                    [/cfnetwork\/.+darwin/i, /ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i],
                    [
                        [d, /_/g, "."],
                        [a, "iOS"]
                    ],
                    [/(mac\sos\sx)\s?([\w\s\.]*)/i, /(macintosh|mac(?=_powerpc)\s)/i],
                    [
                        [a, "Mac OS"],
                        [d, /_/g, "."]
                    ],
                    [/((?:open)?solaris)[\/\s-]?([\w\.]*)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i, /(unix)\s?([\w\.]*)/i],
                    [a, d]
                ]
            },
            v = function (e, t) {
                if ("object" == typeof e && (t = e, e = void 0), !(this instanceof v)) return new v(e, t).getResult();
                var n = e || (o && o.navigator && o.navigator.userAgent ? o.navigator.userAgent : ""),
                    r = t ? h.extend(m, t) : m;
                return this.getBrowser = function () {
                    var e = {
                        name: void 0,
                        version: void 0
                    };
                    return b.rgx.call(e, n, r.browser), e.major = h.major(e.version), e
                }, this.getCPU = function () {
                    var e = {
                        architecture: void 0
                    };
                    return b.rgx.call(e, n, r.cpu), e
                }, this.getDevice = function () {
                    var e = {
                        vendor: void 0,
                        model: void 0,
                        type: void 0
                    };
                    return b.rgx.call(e, n, r.device), e
                }, this.getEngine = function () {
                    var e = {
                        name: void 0,
                        version: void 0
                    };
                    return b.rgx.call(e, n, r.engine), e
                }, this.getOS = function () {
                    var e = {
                        name: void 0,
                        version: void 0
                    };
                    return b.rgx.call(e, n, r.os), e
                }, this.getResult = function () {
                    return {
                        ua: this.getUA(),
                        browser: this.getBrowser(),
                        engine: this.getEngine(),
                        os: this.getOS(),
                        device: this.getDevice(),
                        cpu: this.getCPU()
                    }
                }, this.getUA = function () {
                    return n
                }, this.setUA = function (e) {
                    return n = e, this
                }, this
            };
        v.VERSION = "0.7.21", v.BROWSER = {
            NAME: a,
            MAJOR: "major",
            VERSION: d
        }, v.CPU = {
            ARCHITECTURE: "architecture"
        }, v.DEVICE = {
            MODEL: s,
            VENDOR: u,
            TYPE: c,
            CONSOLE: "console",
            MOBILE: l,
            SMARTTV: p,
            TABLET: f,
            WEARABLE: "wearable",
            EMBEDDED: "embedded"
        }, v.ENGINE = {
            NAME: a,
            VERSION: d
        }, v.OS = {
            NAME: a,
            VERSION: d
        }, void 0 !== t ? (void 0 !== e && e.exports && (t = e.exports = v), t.UAParser = v) : void 0 === (r = function () {
            return v
        }.call(t, n, t, e)) || (e.exports = r);
        var y = o && (o.jQuery || o.Zepto);
        if (y && !y.ua) {
            var w = new v;
            y.ua = w.getResult(), y.ua.get = function () {
                return w.getUA()
            }, y.ua.set = function (e) {
                w.setUA(e);
                var t = w.getResult();
                for (var n in t) y.ua[n] = t[n]
            }
        }
    }("object" == typeof window ? window : this)
}, function (e, t, n) {
    "use strict";
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        o = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }();

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    var s = n(48),
        a = s.encodeConsentString,
        c = s.getMaxVendorId,
        u = s.encodeVendorIdsToBits,
        d = s.encodePurposeIdsToBits,
        l = n(52).decodeConsentString,
        f = n(51).vendorVersionMap,
        p = /^[a-z]{2}$/,
        h = void 0,
        b = function () {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                i(this, e), this.maxVendorId = 0, this.created = new Date, this.lastUpdated = new Date, this.version = 1, this.vendorList = null, this.vendorListVersion = null, this.cmpId = null, this.cmpVersion = null, this.consentScreen = null, this.consentLanguage = null, this.allowedPurposeIds = [], this.allowedVendorIds = [], t && (h = t, Object.assign(this, l(t)))
            }
            return o(e, [{
                key: "getConsentString",
                value: function () {
                    var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                        t = void 0;
                    if (h && !e) t = h;
                    else {
                        if (!this.vendorList) throw new Error("ConsentString - A vendor list is required to encode a consent string");
                        !0 === e && (this.lastUpdated = new Date), t = a({
                            version: this.getVersion(),
                            vendorList: this.vendorList,
                            allowedPurposeIds: this.allowedPurposeIds,
                            allowedVendorIds: this.allowedVendorIds,
                            created: this.created,
                            lastUpdated: this.lastUpdated,
                            cmpId: this.cmpId,
                            cmpVersion: this.cmpVersion,
                            consentScreen: this.consentScreen,
                            consentLanguage: this.consentLanguage,
                            vendorListVersion: this.vendorListVersion
                        }), h = t
                    }
                    return t
                }
            }, {
                key: "getLastUpdated",
                value: function () {
                    return this.lastUpdated
                }
            }, {
                key: "setLastUpdated",
                value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                    h = "", this.lastUpdated = e ? new Date(e) : new Date
                }
            }, {
                key: "getCreated",
                value: function () {
                    return this.created
                }
            }, {
                key: "setCreated",
                value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                    h = "", this.created = e ? new Date(e) : new Date
                }
            }, {
                key: "getMaxVendorId",
                value: function () {
                    return this.maxVendorId || this.vendorList && (this.maxVendorId = c(this.vendorList.vendors)), this.maxVendorId
                }
            }, {
                key: "getParsedVendorConsents",
                value: function () {
                    return u(c(this.vendorList.vendors), this.allowedVendorIds)
                }
            }, {
                key: "getParsedPurposeConsents",
                value: function () {
                    return d(this.vendorList.purposes, this.allowedPurposeIds)
                }
            }, {
                key: "getMetadataString",
                value: function () {
                    return a({
                        version: this.getVersion(),
                        created: this.created,
                        lastUpdated: this.lastUpdated,
                        cmpId: this.cmpId,
                        cmpVersion: this.cmpVersion,
                        consentScreen: this.consentScreen,
                        vendorListVersion: this.vendorListVersion
                    })
                }
            }, {
                key: "getVersion",
                value: function () {
                    return this.version
                }
            }, {
                key: "getVendorListVersion",
                value: function () {
                    return this.vendorListVersion
                }
            }, {
                key: "setGlobalVendorList",
                value: function (e) {
                    if ("object" !== (void 0 === e ? "undefined" : r(e))) throw new Error("ConsentString - You must provide an object when setting the global vendor list");
                    if (!e.vendorListVersion || !Array.isArray(e.purposes) || !Array.isArray(e.vendors)) throw new Error("ConsentString - The provided vendor list does not respect the schema from the IAB EU�셲 GDPR Consent and Transparency Framework");
                    this.vendorList && this.vendorListVersion === e.vendorListVersion || (h = "", this.vendorList = {
                        vendorListVersion: e.vendorListVersion,
                        lastUpdated: e.lastUpdated,
                        purposes: e.purposes,
                        features: e.features,
                        vendors: e.vendors.slice(0).sort((function (e, t) {
                            return e.id < t.id ? -1 : 1
                        }))
                    }, this.vendorListVersion = e.vendorListVersion)
                }
            }, {
                key: "getGlobalVendorList",
                value: function () {
                    return this.vendorList
                }
            }, {
                key: "setCmpId",
                value: function (e) {
                    e !== this.cmpId && (h = "", this.cmpId = e)
                }
            }, {
                key: "getCmpId",
                value: function () {
                    return this.cmpId
                }
            }, {
                key: "setCmpVersion",
                value: function (e) {
                    e !== this.cmpVersion && (h = "", this.cmpVersion = e)
                }
            }, {
                key: "getCmpVersion",
                value: function () {
                    return this.cmpVersion
                }
            }, {
                key: "setConsentScreen",
                value: function (e) {
                    e !== this.consentScreen && (h = "", this.consentScreen = e)
                }
            }, {
                key: "getConsentScreen",
                value: function () {
                    return this.consentScreen
                }
            }, {
                key: "setConsentLanguage",
                value: function (e) {
                    if (!1 === p.test(e)) throw new Error("ConsentString - The consent language must be a two-letter ISO639-1 code (en, fr, de, etc.)");
                    e !== this.consentLanguage && (h = "", this.consentLanguage = e)
                }
            }, {
                key: "getConsentLanguage",
                value: function () {
                    return this.consentLanguage
                }
            }, {
                key: "setPurposesAllowed",
                value: function (e) {
                    h = "", this.allowedPurposeIds = e
                }
            }, {
                key: "getPurposesAllowed",
                value: function () {
                    return this.allowedPurposeIds
                }
            }, {
                key: "setPurposeAllowed",
                value: function (e, t) {
                    var n = this.allowedPurposeIds.indexOf(e);
                    h = "", !0 === t ? -1 === n && this.allowedPurposeIds.push(e) : !1 === t && -1 !== n && this.allowedPurposeIds.splice(n, 1)
                }
            }, {
                key: "isPurposeAllowed",
                value: function (e) {
                    return -1 !== this.allowedPurposeIds.indexOf(e)
                }
            }, {
                key: "setVendorsAllowed",
                value: function (e) {
                    h = "", this.allowedVendorIds = e
                }
            }, {
                key: "getVendorsAllowed",
                value: function () {
                    return this.allowedVendorIds
                }
            }, {
                key: "setVendorAllowed",
                value: function (e, t) {
                    var n = this.allowedVendorIds.indexOf(e);
                    h = "", !0 === t ? -1 === n && this.allowedVendorIds.push(e) : !1 === t && -1 !== n && this.allowedVendorIds.splice(n, 1)
                }
            }, {
                key: "isVendorAllowed",
                value: function (e) {
                    return -1 !== this.allowedVendorIds.indexOf(e)
                }
            }], [{
                key: "decodeMetadataString",
                value: function (e) {
                    var t = l(e),
                        n = {};
                    return f[t.version].metadataFields.forEach((function (e) {
                        n[e] = t[e]
                    })), n
                }
            }]), e
        }();
    e.exports = {
        ConsentString: b
    }
}, function (e, t) {
    e.exports = function (e) {
        return e.webpackPolyfill || (e.deprecate = function () {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
            enumerable: !0,
            get: function () {
                return e.l
            }
        }), Object.defineProperty(e, "id", {
            enumerable: !0,
            get: function () {
                return e.i
            }
        }), e.webpackPolyfill = 1), e
    }
}, function (e, t, n) {
    "use strict";

    function r(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function o(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? r(Object(n), !0).forEach((function (t) {
                i(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach((function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function i(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function s(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function a(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }
    var c = n(102),
        u = c.encodeToBase64,
        d = c.decodeFromBase64,
        l = c.decodePublisherTCFromBase64,
        f = c.getSegmentType,
        p = n(105).consentStringDefinition,
        h = function () {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                s(this, e), this.setConsentString(t)
            }
            var t, n, r;
            return t = e, (n = [{
                key: "getCoreSegmentData",
                value: function () {
                    return this.core ? o({}, this.core) : null
                }
            }, {
                key: "setCoreSegmentData",
                value: function (e) {
                    this.core = o({}, e)
                }
            }, {
                key: "getCoreSegmentString",
                value: function () {
                    return this.core ? u(this.core, p.core) : null
                }
            }, {
                key: "setCoreSegmentString",
                value: function (e) {
                    this.core = d(e, p.core)
                }
            }, {
                key: "getDisclosedVendorsData",
                value: function () {
                    return this.disclosedVendors ? o({}, this.disclosedVendors) : null
                }
            }, {
                key: "setDisclosedVendorsData",
                value: function (e) {
                    this.disclosedVendors = o({}, e)
                }
            }, {
                key: "getDisclosedVendorsString",
                value: function () {
                    return this.disclosedVendors ? u(this.disclosedVendors, p.disclosedVendors) : null
                }
            }, {
                key: "setDisclosedVendorsString",
                value: function (e) {
                    this.disclosedVendors = d(e, p.disclosedVendors)
                }
            }, {
                key: "getAllowedVendorsData",
                value: function () {
                    return this.allowedVendors ? o({}, this.allowedVendors) : null
                }
            }, {
                key: "setAllowedVendorsData",
                value: function (e) {
                    this.allowedVendors = o({}, e)
                }
            }, {
                key: "getAllowedVendorsString",
                value: function () {
                    return this.allowedVendors ? u(this.allowedVendors, p.allowedVendors) : null
                }
            }, {
                key: "setAllowedVendorsString",
                value: function (e) {
                    this.allowedVendors = d(e, p.allowedVendors)
                }
            }, {
                key: "getPublisherTCData",
                value: function () {
                    return this.publisherTC ? o({}, this.publisherTC) : null
                }
            }, {
                key: "setPublisherTCData",
                value: function (e) {
                    this.publisherTC = o({}, e)
                }
            }, {
                key: "getPublisherTCString",
                value: function () {
                    return this.publisherTC ? u(this.publisherTC, p.publisherTC) : null
                }
            }, {
                key: "setPublisherTCString",
                value: function (e) {
                    this.publisherTC = l(e)
                }
            }, {
                key: "setConsentString",
                value: function (e) {
                    if (this.core = null, this.disclosedVendors = null, this.allowedVendors = null, this.publisherTC = null, e) {
                        var t = e.split(".");
                        t.length > 0 && this.setCoreSegmentString(t[0]);
                        for (var n = 1; n < t.length; n += 1) switch (f(t[n])) {
                            case 1:
                                this.setAllowedVendorsString(t[n]);
                                break;
                            case 2:
                                this.setDisclosedVendorsString(t[n]);
                                break;
                            case 3:
                                this.setPublisherTCString(t[n]);
                                break;
                            default:
                                throw new Error("Unknown segment type in consent string")
                        }
                    }
                }
            }, {
                key: "getConsentString",
                value: function () {
                    var e = [];
                    return this.core ? (e.push(this.getCoreSegmentString()), this.disclosedVendors && e.push(this.getDisclosedVendorsString()), this.allowedVendors && e.push(this.getAllowedVendorsString()), this.publisherTC && e.push(this.getPublisherTCString()), e.join(".")) : null
                }
            }]) && a(t.prototype, n), r && a(t, r), e
        }();
    e.exports = {
        TCStringV2: h
    }
}, function (e, t, n) {
    "use strict";
    var r = n(50),
        o = n(53),
        i = o.padLeft,
        s = o.padRight,
        a = n(103).encodeFields,
        c = n(104),
        u = c.decodeFields,
        d = c.decodePublisherTC;

    function l(e) {
        for (var t = e; t.length % 4 != 0;) t += "=";
        t = t.replace(/-/g, "+").replace(/_/g, "/");
        for (var n = r.decode(t), o = "", s = 0; s < n.length; s += 1) {
            var a = n.charCodeAt(s).toString(2);
            o += i(a, 8 - a.length)
        }
        return o
    }
    e.exports = {
        encodeToBase64: function (e, t) {
            return function (e) {
                if (e) {
                    for (var t = s(e, 7 - (e.length + 7) % 8), n = "", o = 0; o < t.length; o += 8) n += String.fromCharCode(parseInt(t.substr(o, 8), 2));
                    return r.encode(n).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
                }
                return null
            }(a(e, t))
        },
        decodeFromBase64: function (e, t) {
            var n = l(e);
            return u(n, t).decodedObject
        },
        decodePublisherTCFromBase64: function (e) {
            var t = l(e);
            return d(t)
        },
        getSegmentType: function (e) {
            var t = l(e);
            return parseInt(t.substr(0, 3), 2)
        }
    }
}, function (e, t, n) {
    "use strict";
    var r = n(53),
        o = r.padLeft,
        i = r.getMaxListElement;

    function s(e, t) {
        var n = "";
        return "number" != typeof e || Number.isNaN(e) || (n = parseInt(e, 10).toString(2)), t >= n.length && (n = o(n, t - n.length)), n.length > t && (n = n.substring(0, t)), n
    }

    function a(e) {
        return s(!0 === e ? 1 : 0, 1)
    }

    function c(e, t) {
        return e instanceof Date ? s(e.getTime() / 100, t) : s(e, t)
    }

    function u(e, t) {
        return s(e.toUpperCase().charCodeAt(0) - 65, t)
    }

    function d(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 12;
        return u(e.slice(0, 1), t / 2) + u(e.slice(1), t / 2)
    }

    function l(e, t) {
        for (var n = "", r = 1; r <= t; r += 1) n += -1 !== e.indexOf(r) ? "1" : "0";
        return n
    }

    function f(e) {
        return s(e.length, 12) + e.reduce((function (e, t) {
            return e + function (e) {
                return a(e.isRange) + s(e.startId, 16) + (e.isRange ? s(e.endId, 16) : "")
            }(t)
        }), "")
    }

    function p(e) {
        return f(function (e) {
            for (var t = i(e), n = [], r = [], o = 1; o <= t; o += 1) {
                var s = o;
                if (-1 !== e.indexOf(s) && n.push(s), (-1 === e.indexOf(s) || -1 === e.indexOf(s + 1)) && n.length) {
                    var a = n.shift(),
                        c = n.pop();
                    n = [], r.push({
                        isRange: "number" == typeof c,
                        startId: a,
                        endId: c
                    })
                }
            }
            return r
        }(e))
    }

    function h(e, t) {
        var n = p(e),
            r = l(e, i(e));
        return s(i(e), t) + a(n.length < r.length) + (n.length < r.length ? n : r)
    }

    function b(e, t, n) {
        var r = e || [];
        return s(r.length, t) + r.reduce((function (e, t) {
            return e + g(t, n)
        }), "")
    }

    function g(e, t) {
        var n = "";
        return t.segmentId && (n = s(t.segmentId, 3)), t.fields.reduce((function (t, n) {
            return t + function (e, t) {
                var n = t.name,
                    r = t.type,
                    o = t.numBits,
                    i = e[n],
                    u = null == i ? "" : i,
                    f = "function" == typeof o ? o(e) : o;
                switch (r) {
                    case "int":
                        return s(u, f);
                    case "bool":
                        return a(u);
                    case "date":
                        return c(u, f);
                    case "list":
                        return l(u, f);
                    case "textcode":
                        return d(u, f);
                    case "range":
                        return p(u);
                    case "minlist":
                        return h(u, f);
                    case "array":
                        return b(u, f, t);
                    default:
                        throw new Error("TCStringV2 - Unknown field type ".concat(r, " for encoding"))
                }
            }(e, n)
        }), n)
    }
    e.exports = {
        encodeBoolToBits: a,
        encodeIntToBits: s,
        encodeDateToBits: c,
        encodeLetterToBits: u,
        encodeTextCodeToBits: d,
        encodeListToBits: l,
        encodeListToRangeBits: p,
        encodeMinListToBits: h,
        encodeArrayToBits: b,
        encodeFields: g
    }
}, function (e, t, n) {
    "use strict";

    function r(e, t, n) {
        if (void 0 !== n && e.length < t + n) throw new Error("Invalid decoding input")
    }

    function o(e, t, n) {
        return r(e, t, n), parseInt(e.substr(t, n), 2)
    }

    function i(e, t, n) {
        return r(e, t, n), new Date(100 * o(e, t, n))
    }

    function s(e, t) {
        return 1 === parseInt(e.substr(t, 1), 2)
    }

    function a(e) {
        var t = o(e);
        return String.fromCharCode(t + 65).toLowerCase()
    }

    function c(e, t, n) {
        r(e, t, n);
        var o = e.substr(t, n);
        return a(o.slice(0, n / 2)) + a(o.slice(n / 2))
    }

    function u(e, t, n, r) {
        var i = t,
            s = [],
            a = o(e, i, n);
        i += n;
        for (var c = 0; c < a; c += 1) {
            var u = h(e, r, i),
                d = u.decodedObject;
            i = u.newPosition, s.push(d)
        }
        return {
            fieldValue: s,
            newPosition: i
        }
    }

    function d(e, t) {
        var n = t,
            r = [],
            i = o(e, n, 12);
        n += 12;
        for (var a = 0; a < i;) {
            var c = s(e, n);
            if (n += 1, c) {
                var u = o(e, n, 16),
                    d = o(e, n += 16, 16);
                n += 16;
                for (var l = u; l <= d; l += 1) r.push(l)
            } else {
                var f = o(e, n, 16);
                n += 16, r.push(f)
            }
            a += 1
        }
        return {
            fieldValue: r,
            newPosition: n
        }
    }

    function l(e, t, n) {
        r(e, t, n);
        for (var o = [], i = e.substr(t, n), s = 0; s < i.length; s += 1) "0" !== i[s] && o.push(s + 1);
        return o
    }

    function f(e, t, n) {
        var r = t,
            i = o(e, t, n),
            a = s(e, r += n);
        return r += 1, a ? d(e, r) : {
            fieldValue: l(e.substr(r, i)),
            newPosition: r += i
        }
    }

    function p(e, t, n, r) {
        var a = r.type,
            p = r.numBits,
            h = "function" == typeof p ? p(t) : p;
        switch (a) {
            case "int":
                return {
                    fieldValue: o(e, n, h)
                };
            case "bool":
                return {
                    fieldValue: s(e, n)
                };
            case "date":
                return {
                    fieldValue: i(e, n, h)
                };
            case "list":
                return {
                    fieldValue: l(e, n, h)
                };
            case "textcode":
                return {
                    fieldValue: c(e, n, h)
                };
            case "range":
                return d(e, n);
            case "minlist":
                return f(e, n, h);
            case "array":
                return u(e, n, h, r);
            default:
                throw new Error("TCStringV2 - Unknown field type ".concat(a, " for decoding"))
        }
    }

    function h(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            r = n;
        t.segmentId && (r += 3);
        var o = t.fields.reduce((function (t, n) {
            var o = n.name,
                i = n.numBits,
                s = p(e, t, r, n),
                a = s.fieldValue,
                c = s.newPosition;
            return void 0 !== a && (t[o] = a), void 0 !== c ? r = c : "number" == typeof i && (r += i), t
        }), {});
        return {
            decodedObject: o,
            newPosition: r
        }
    }
    e.exports = {
        decodeBitsToInt: o,
        decodeBitsToBool: s,
        decodeBitsToDate: i,
        decodeBitsToLetter: a,
        decodeBitsToTextCode: c,
        decodeBitsToRange: d,
        decodeBitsToMinList: f,
        decodeBitsToArray: u,
        decodeFields: h,
        decodePublisherTC: function (e) {
            var t = 0,
                n = o(e, t, 3);
            if (t += 3, 3 !== n) throw new Error("Invalid consent string");
            var r = l(e, t, 24),
                i = l(e, t += 24, 24),
                s = o(e, t += 24, 6);
            return {
                pubPurposesConsent: r,
                pubPurposesLITransparency: i,
                numCustomPurposes: s,
                customPurposesConsent: l(e, t += 6, s),
                customPurposesLITransparency: l(e, t += s, s)
            }
        }
    }
}, function (e, t, n) {
    "use strict";
    e.exports = {
        consentStringDefinition: {
            core: {
                fields: [{
                    name: "version",
                    type: "int",
                    numBits: 6
                }, {
                    name: "created",
                    type: "date",
                    numBits: 36
                }, {
                    name: "lastUpdated",
                    type: "date",
                    numBits: 36
                }, {
                    name: "cmpId",
                    type: "int",
                    numBits: 12
                }, {
                    name: "cmpVersion",
                    type: "int",
                    numBits: 12
                }, {
                    name: "consentScreen",
                    type: "int",
                    numBits: 6
                }, {
                    name: "consentLanguage",
                    type: "textcode",
                    numBits: 12
                }, {
                    name: "vendorListVersion",
                    type: "int",
                    numBits: 12
                }, {
                    name: "tcfPolicyVersion",
                    type: "int",
                    numBits: 6
                }, {
                    name: "isServiceSpecific",
                    type: "bool",
                    numBits: 1
                }, {
                    name: "useNonStandardStacks",
                    type: "bool",
                    numBits: 1
                }, {
                    name: "specialFeatureOptIns",
                    type: "list",
                    numBits: 12
                }, {
                    name: "purposesConsent",
                    type: "list",
                    numBits: 24
                }, {
                    name: "purposeLITransparency",
                    type: "list",
                    numBits: 24
                }, {
                    name: "purposeOneTreatment",
                    type: "bool",
                    numBits: 1
                }, {
                    name: "publisherCC",
                    type: "textcode",
                    numBits: 12
                }, {
                    name: "vendorsConsent",
                    type: "minlist",
                    numBits: 16
                }, {
                    name: "vendorsLegitimateInterest",
                    type: "minlist",
                    numBits: 16
                }, {
                    name: "publisherRestrictions",
                    type: "array",
                    numBits: 12,
                    fields: [{
                        name: "purposeId",
                        type: "int",
                        numBits: 6
                    }, {
                        name: "restrictionType",
                        type: "int",
                        numBits: 2
                    }, {
                        name: "restrictedVendors",
                        type: "range"
                    }]
                }]
            },
            disclosedVendors: {
                segmentId: 1,
                fields: [{
                    name: "disclosedVendors",
                    type: "minlist",
                    numBits: 16
                }]
            },
            allowedVendors: {
                segmentId: 2,
                fields: [{
                    name: "allowedVendors",
                    type: "minlist",
                    numBits: 16
                }]
            },
            publisherTC: {
                segmentId: 3,
                fields: [{
                    name: "pubPurposesConsent",
                    type: "list",
                    numBits: 24
                }, {
                    name: "pubPurposesLITransparency",
                    type: "list",
                    numBits: 24
                }, {
                    name: "numCustomPurposes",
                    type: "int",
                    numBits: 6
                }, {
                    name: "customPurposesConsent",
                    type: "list",
                    numBits: function (e) {
                        return e.numCustomPurposes
                    }
                }, {
                    name: "customPurposesLITransparency",
                    type: "list",
                    numBits: function (e) {
                        return e.numCustomPurposes
                    }
                }]
            }
        }
    }
}, function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, "start", (function () {
        return Pt
    })), n.d(t, "retrieveEnvelope", (function () {
        return Ot
    })), n.d(t, "triggerDetection", (function () {
        return Bt
    })), n.d(t, "outputCurrentConfiguration", (function () {
        return Dt
    })), n.d(t, "invalidateEnvelope", (function () {
        return Vt
    }));
    n(57), n(75);
    var r = "undefined" != typeof globalThis && globalThis || "undefined" != typeof self && self || void 0 !== r && r,
        o = "URLSearchParams" in r,
        i = "Symbol" in r && "iterator" in Symbol,
        s = "FileReader" in r && "Blob" in r && function () {
            try {
                return new Blob, !0
            } catch (e) {
                return !1
            }
        }(),
        a = "FormData" in r,
        c = "ArrayBuffer" in r;
    if (c) var u = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
        d = ArrayBuffer.isView || function (e) {
            return e && u.indexOf(Object.prototype.toString.call(e)) > -1
        };

    function l(e) {
        if ("string" != typeof e && (e = String(e)), /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(e) || "" === e) throw new TypeError("Invalid character in header field name");
        return e.toLowerCase()
    }

    function f(e) {
        return "string" != typeof e && (e = String(e)), e
    }

    function p(e) {
        var t = {
            next: function () {
                var t = e.shift();
                return {
                    done: void 0 === t,
                    value: t
                }
            }
        };
        return i && (t[Symbol.iterator] = function () {
            return t
        }), t
    }

    function h(e) {
        this.map = {}, e instanceof h ? e.forEach((function (e, t) {
            this.append(t, e)
        }), this) : Array.isArray(e) ? e.forEach((function (e) {
            this.append(e[0], e[1])
        }), this) : e && Object.getOwnPropertyNames(e).forEach((function (t) {
            this.append(t, e[t])
        }), this)
    }

    function b(e) {
        if (e.bodyUsed) return Promise.reject(new TypeError("Already read"));
        e.bodyUsed = !0
    }

    function g(e) {
        return new Promise((function (t, n) {
            e.onload = function () {
                t(e.result)
            }, e.onerror = function () {
                n(e.error)
            }
        }))
    }

    function m(e) {
        var t = new FileReader,
            n = g(t);
        return t.readAsArrayBuffer(e), n
    }

    function v(e) {
        if (e.slice) return e.slice(0);
        var t = new Uint8Array(e.byteLength);
        return t.set(new Uint8Array(e)), t.buffer
    }

    function y() {
        return this.bodyUsed = !1, this._initBody = function (e) {
            var t;
            this.bodyUsed = this.bodyUsed, this._bodyInit = e, e ? "string" == typeof e ? this._bodyText = e : s && Blob.prototype.isPrototypeOf(e) ? this._bodyBlob = e : a && FormData.prototype.isPrototypeOf(e) ? this._bodyFormData = e : o && URLSearchParams.prototype.isPrototypeOf(e) ? this._bodyText = e.toString() : c && s && ((t = e) && DataView.prototype.isPrototypeOf(t)) ? (this._bodyArrayBuffer = v(e.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : c && (ArrayBuffer.prototype.isPrototypeOf(e) || d(e)) ? this._bodyArrayBuffer = v(e) : this._bodyText = e = Object.prototype.toString.call(e) : this._bodyText = "", this.headers.get("content-type") || ("string" == typeof e ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : o && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
        }, s && (this.blob = function () {
            var e = b(this);
            if (e) return e;
            if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
            if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
            if (this._bodyFormData) throw new Error("could not read FormData body as blob");
            return Promise.resolve(new Blob([this._bodyText]))
        }, this.arrayBuffer = function () {
            if (this._bodyArrayBuffer) {
                var e = b(this);
                return e || (ArrayBuffer.isView(this._bodyArrayBuffer) ? Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset, this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength)) : Promise.resolve(this._bodyArrayBuffer))
            }
            return this.blob().then(m)
        }), this.text = function () {
            var e, t, n, r = b(this);
            if (r) return r;
            if (this._bodyBlob) return e = this._bodyBlob, t = new FileReader, n = g(t), t.readAsText(e), n;
            if (this._bodyArrayBuffer) return Promise.resolve(function (e) {
                for (var t = new Uint8Array(e), n = new Array(t.length), r = 0; r < t.length; r++) n[r] = String.fromCharCode(t[r]);
                return n.join("")
            }(this._bodyArrayBuffer));
            if (this._bodyFormData) throw new Error("could not read FormData body as text");
            return Promise.resolve(this._bodyText)
        }, a && (this.formData = function () {
            return this.text().then(S)
        }), this.json = function () {
            return this.text().then(JSON.parse)
        }, this
    }
    h.prototype.append = function (e, t) {
        e = l(e), t = f(t);
        var n = this.map[e];
        this.map[e] = n ? n + ", " + t : t
    }, h.prototype.delete = function (e) {
        delete this.map[l(e)]
    }, h.prototype.get = function (e) {
        return e = l(e), this.has(e) ? this.map[e] : null
    }, h.prototype.has = function (e) {
        return this.map.hasOwnProperty(l(e))
    }, h.prototype.set = function (e, t) {
        this.map[l(e)] = f(t)
    }, h.prototype.forEach = function (e, t) {
        for (var n in this.map) this.map.hasOwnProperty(n) && e.call(t, this.map[n], n, this)
    }, h.prototype.keys = function () {
        var e = [];
        return this.forEach((function (t, n) {
            e.push(n)
        })), p(e)
    }, h.prototype.values = function () {
        var e = [];
        return this.forEach((function (t) {
            e.push(t)
        })), p(e)
    }, h.prototype.entries = function () {
        var e = [];
        return this.forEach((function (t, n) {
            e.push([n, t])
        })), p(e)
    }, i && (h.prototype[Symbol.iterator] = h.prototype.entries);
    var w = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];

    function x(e, t) {
        if (!(this instanceof x)) throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
        var n, r, o = (t = t || {}).body;
        if (e instanceof x) {
            if (e.bodyUsed) throw new TypeError("Already read");
            this.url = e.url, this.credentials = e.credentials, t.headers || (this.headers = new h(e.headers)), this.method = e.method, this.mode = e.mode, this.signal = e.signal, o || null == e._bodyInit || (o = e._bodyInit, e.bodyUsed = !0)
        } else this.url = String(e);
        if (this.credentials = t.credentials || this.credentials || "same-origin", !t.headers && this.headers || (this.headers = new h(t.headers)), this.method = (n = t.method || this.method || "GET", r = n.toUpperCase(), w.indexOf(r) > -1 ? r : n), this.mode = t.mode || this.mode || null, this.signal = t.signal || this.signal, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && o) throw new TypeError("Body not allowed for GET or HEAD requests");
        if (this._initBody(o), !("GET" !== this.method && "HEAD" !== this.method || "no-store" !== t.cache && "no-cache" !== t.cache)) {
            var i = /([?&])_=[^&]*/;
            if (i.test(this.url)) this.url = this.url.replace(i, "$1_=" + (new Date).getTime());
            else {
                this.url += (/\?/.test(this.url) ? "&" : "?") + "_=" + (new Date).getTime()
            }
        }
    }

    function S(e) {
        var t = new FormData;
        return e.trim().split("&").forEach((function (e) {
            if (e) {
                var n = e.split("="),
                    r = n.shift().replace(/\+/g, " "),
                    o = n.join("=").replace(/\+/g, " ");
                t.append(decodeURIComponent(r), decodeURIComponent(o))
            }
        })), t
    }

    function E(e, t) {
        if (!(this instanceof E)) throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
        t || (t = {}), this.type = "default", this.status = void 0 === t.status ? 200 : t.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in t ? t.statusText : "", this.headers = new h(t.headers), this.url = t.url || "", this._initBody(e)
    }
    x.prototype.clone = function () {
        return new x(this, {
            body: this._bodyInit
        })
    }, y.call(x.prototype), y.call(E.prototype), E.prototype.clone = function () {
        return new E(this._bodyInit, {
            status: this.status,
            statusText: this.statusText,
            headers: new h(this.headers),
            url: this.url
        })
    }, E.error = function () {
        var e = new E(null, {
            status: 0,
            statusText: ""
        });
        return e.type = "error", e
    };
    var A = [301, 302, 303, 307, 308];
    E.redirect = function (e, t) {
        if (-1 === A.indexOf(t)) throw new RangeError("Invalid status code");
        return new E(null, {
            status: t,
            headers: {
                location: e
            }
        })
    };
    var C = r.DOMException;
    try {
        new C
    } catch (e) {
        (C = function (e, t) {
            this.message = e, this.name = t;
            var n = Error(e);
            this.stack = n.stack
        }).prototype = Object.create(Error.prototype), C.prototype.constructor = C
    }

    function T(e, t) {
        return new Promise((function (n, o) {
            var i = new x(e, t);
            if (i.signal && i.signal.aborted) return o(new C("Aborted", "AbortError"));
            var a = new XMLHttpRequest;

            function u() {
                a.abort()
            }
            a.onload = function () {
                var e, t, r = {
                    status: a.status,
                    statusText: a.statusText,
                    headers: (e = a.getAllResponseHeaders() || "", t = new h, e.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach((function (e) {
                        var n = e.split(":"),
                            r = n.shift().trim();
                        if (r) {
                            var o = n.join(":").trim();
                            t.append(r, o)
                        }
                    })), t)
                };
                r.url = "responseURL" in a ? a.responseURL : r.headers.get("X-Request-URL");
                var o = "response" in a ? a.response : a.responseText;
                setTimeout((function () {
                    n(new E(o, r))
                }), 0)
            }, a.onerror = function () {
                setTimeout((function () {
                    o(new TypeError("Network request failed"))
                }), 0)
            }, a.ontimeout = function () {
                setTimeout((function () {
                    o(new TypeError("Network request failed"))
                }), 0)
            }, a.onabort = function () {
                setTimeout((function () {
                    o(new C("Aborted", "AbortError"))
                }), 0)
            }, a.open(i.method, function (e) {
                try {
                    return "" === e && r.location.href ? r.location.href : e
                } catch (t) {
                    return e
                }
            }(i.url), !0), "include" === i.credentials ? a.withCredentials = !0 : "omit" === i.credentials && (a.withCredentials = !1), "responseType" in a && (s ? a.responseType = "blob" : c && i.headers.get("Content-Type") && -1 !== i.headers.get("Content-Type").indexOf("application/octet-stream") && (a.responseType = "arraybuffer")), !t || "object" != typeof t.headers || t.headers instanceof h ? i.headers.forEach((function (e, t) {
                a.setRequestHeader(t, e)
            })) : Object.getOwnPropertyNames(t.headers).forEach((function (e) {
                a.setRequestHeader(e, f(t.headers[e]))
            })), i.signal && (i.signal.addEventListener("abort", u), a.onreadystatechange = function () {
                4 === a.readyState && i.signal.removeEventListener("abort", u)
            }), a.send(void 0 === i._bodyInit ? null : i._bodyInit)
        }))
    }
    T.polyfill = !0, r.fetch || (r.fetch = T, r.Headers = h, r.Request = x, r.Response = E);
    n(97);
    var I = n(54),
        k = n.n(I);
    const P = ["debug", "info", "warn", "error"];
    var O = P.reduce((e, t, n) => (e[t] = function (...e) {
        const r = "debug" === t ? "log" : t,
            o = D.logging;
        if (o && console && "function" == typeof console[r]) {
            const i = P.indexOf(o.toString().toLocaleLowerCase());
            if (!0 === o || i > -1 && n >= i) {
                const [n, ...o] = [...e];
                console[r](`${t.toUpperCase()} - (ATS) ${n}`, ...o)
            }
        }
    }, e), {});
    let B = {
        placementID: -1,
        storageType: "cookie",
        expirationTime: 1296e6,
        expirationRefreshTime: 18e5,
        logging: void 0,
        email: void 0,
        browsers: void 0,
        detectionType: "scrape",
        urlRegex: void 0,
        urlParameter: void 0,
        urlHashType: "email",
        cssSelectors: ["input[type=email]", "input[type=text]"],
        pixelID: void 0,
        emailHashes: void 0,
        phoneNumber: void 0,
        detectionSubject: "all",
        accountID: void 0,
        customerID: void 0,
        customerIDRegex: void 0,
        useCloudFlare: !1,
        setCookiePathCloudFlare: void 0,
        retrieveCookiePathCloudFlare: void 0,
        cookieAgeCloudFlare: 864e5,
        rootDomain: void 0,
        detectionEventType: "onblur",
        triggerElements: void 0,
        detectDynamicNodes: void 0
    };
    var D = new class {
        constructor() {
            k()(this, "update", e => {
                if (e) {
                    const t = function (e, t) {
                        let n = {
                            ...e
                        };
                        for (let e in t) "placementID" === e ? Number.isInteger(+t.placementID) ? n.placementID = +t.placementID : O.error("placementID is not a number!") : "expirationTime" === e ? Number.isInteger(+t.expirationTime) ? n.expirationTime = +t.expirationTime : O.error("expirationTime is not a number!") : "pixelID" === e && t.pixelID ? Number.isInteger(+t.pixelID) ? n.pixelID = +t.pixelID : O.error("pixelID is not a number!") : n[e] = t[e];
                        return n
                    }(this, e);
                    Object.assign(this, t)
                }
            }), this.update(B)
        }
    };

    function V(e, t, n = 31536e3, r = "/", o) {
        let i = new Date;
        i.setTime(i.getTime() + 1e3 * n);
        let s = ";expires=" + i.toUTCString(),
            a = ";max-age=" + n,
            c = ";path=" + r,
            u = o ? ";domain=" + o : "",
            d = e + "=" + encodeURIComponent(t);
        document.cookie = d + a + s + u + c
    }

    function _(e) {
        let t = e + "=",
            n = document.cookie.split(";");
        for (let e = 0; e < n.length; e++) {
            let r = n[e].trim();
            if (0 === r.indexOf(t)) return decodeURIComponent(r.substring(t.length, r.length))
        }
        return ""
    }

    function R(e) {
        let t = new Date;
        t.setTime(t.getTime() - 864e5);
        let n = "expires=" + t.toUTCString();
        document.cookie = `${e}=;path=/;${n}`
    }

    function j(e) {
        null !== localStorage.getItem(e) && localStorage.removeItem(e)
    }

    function L(e) {
        return function (e) {
            for (var t, n = "0123456789ABCDEF", r = "", o = 0; o < e.length; o++) t = e.charCodeAt(o), r += n.charAt(t >>> 4 & 15) + n.charAt(15 & t);
            return r
        }(function (e) {
            for (var t = "", n = 0; n < 32 * e.length; n += 8) t += String.fromCharCode(e[n >> 5] >>> n % 32 & 255);
            return t
        }(function (e, t) {
            e[t >> 5] |= 128 << t % 32, e[14 + (t + 64 >>> 9 << 4)] = t;
            for (var n = 1732584193, r = -271733879, o = -1732584194, i = 271733878, s = 0; s < e.length; s += 16) {
                var a = n,
                    c = r,
                    u = o,
                    d = i;
                r = H(r = H(r = H(r = H(r = F(r = F(r = F(r = F(r = M(r = M(r = M(r = M(r = N(r = N(r = N(r = N(r, o = N(o, i = N(i, n = N(n, r, o, i, e[s], 7, -680876936), r, o, e[s + 1], 12, -389564586), n, r, e[s + 2], 17, 606105819), i, n, e[s + 3], 22, -1044525330), o = N(o, i = N(i, n = N(n, r, o, i, e[s + 4], 7, -176418897), r, o, e[s + 5], 12, 1200080426), n, r, e[s + 6], 17, -1473231341), i, n, e[s + 7], 22, -45705983), o = N(o, i = N(i, n = N(n, r, o, i, e[s + 8], 7, 1770035416), r, o, e[s + 9], 12, -1958414417), n, r, e[s + 10], 17, -42063), i, n, e[s + 11], 22, -1990404162), o = N(o, i = N(i, n = N(n, r, o, i, e[s + 12], 7, 1804603682), r, o, e[s + 13], 12, -40341101), n, r, e[s + 14], 17, -1502002290), i, n, e[s + 15], 22, 1236535329), o = M(o, i = M(i, n = M(n, r, o, i, e[s + 1], 5, -165796510), r, o, e[s + 6], 9, -1069501632), n, r, e[s + 11], 14, 643717713), i, n, e[s], 20, -373897302), o = M(o, i = M(i, n = M(n, r, o, i, e[s + 5], 5, -701558691), r, o, e[s + 10], 9, 38016083), n, r, e[s + 15], 14, -660478335), i, n, e[s + 4], 20, -405537848), o = M(o, i = M(i, n = M(n, r, o, i, e[s + 9], 5, 568446438), r, o, e[s + 14], 9, -1019803690), n, r, e[s + 3], 14, -187363961), i, n, e[s + 8], 20, 1163531501), o = M(o, i = M(i, n = M(n, r, o, i, e[s + 13], 5, -1444681467), r, o, e[s + 2], 9, -51403784), n, r, e[s + 7], 14, 1735328473), i, n, e[s + 12], 20, -1926607734), o = F(o, i = F(i, n = F(n, r, o, i, e[s + 5], 4, -378558), r, o, e[s + 8], 11, -2022574463), n, r, e[s + 11], 16, 1839030562), i, n, e[s + 14], 23, -35309556), o = F(o, i = F(i, n = F(n, r, o, i, e[s + 1], 4, -1530992060), r, o, e[s + 4], 11, 1272893353), n, r, e[s + 7], 16, -155497632), i, n, e[s + 10], 23, -1094730640), o = F(o, i = F(i, n = F(n, r, o, i, e[s + 13], 4, 681279174), r, o, e[s], 11, -358537222), n, r, e[s + 3], 16, -722521979), i, n, e[s + 6], 23, 76029189), o = F(o, i = F(i, n = F(n, r, o, i, e[s + 9], 4, -640364487), r, o, e[s + 12], 11, -421815835), n, r, e[s + 15], 16, 530742520), i, n, e[s + 2], 23, -995338651), o = H(o, i = H(i, n = H(n, r, o, i, e[s], 6, -198630844), r, o, e[s + 7], 10, 1126891415), n, r, e[s + 14], 15, -1416354905), i, n, e[s + 5], 21, -57434055), o = H(o, i = H(i, n = H(n, r, o, i, e[s + 12], 6, 1700485571), r, o, e[s + 3], 10, -1894986606), n, r, e[s + 10], 15, -1051523), i, n, e[s + 1], 21, -2054922799), o = H(o, i = H(i, n = H(n, r, o, i, e[s + 8], 6, 1873313359), r, o, e[s + 15], 10, -30611744), n, r, e[s + 6], 15, -1560198380), i, n, e[s + 13], 21, 1309151649), o = H(o, i = H(i, n = H(n, r, o, i, e[s + 4], 6, -145523070), r, o, e[s + 11], 10, -1120210379), n, r, e[s + 2], 15, 718787259), i, n, e[s + 9], 21, -343485551), n = K(n, a), r = K(r, c), o = K(o, u), i = K(i, d)
            }
            return Array(n, r, o, i)
        }(function (e) {
            for (var t = Array(e.length >> 2), n = 0; n < t.length; n++) t[n] = 0;
            for (n = 0; n < 8 * e.length; n += 8) t[n >> 5] |= (255 & e.charCodeAt(n / 8)) << n % 32;
            return t
        }(e), 8 * e.length))).toLowerCase()
    }

    function U(e, t, n, r, o, i) {
        return K(function (e, t) {
            return e << t | e >>> 32 - t
        }(K(K(t, e), K(r, i)), o), n)
    }

    function N(e, t, n, r, o, i, s) {
        return U(t & n | ~t & r, e, t, o, i, s)
    }

    function M(e, t, n, r, o, i, s) {
        return U(t & r | n & ~r, e, t, o, i, s)
    }

    function F(e, t, n, r, o, i, s) {
        return U(t ^ n ^ r, e, t, o, i, s)
    }

    function H(e, t, n, r, o, i, s) {
        return U(n ^ (t | ~r), e, t, o, i, s)
    }

    function K(e, t) {
        var n = (65535 & e) + (65535 & t);
        return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n
    }
    const q = /((([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,}))/i;

    function G(e) {
        if (window.TextEncoder) return new TextEncoder("utf-8").encode(e);
        let t = unescape(encodeURIComponent(e)),
            n = new Uint8Array(t.length);
        for (let e = 0; e < t.length; e++) n[e] = t.charCodeAt(e);
        return n
    }
    async function z(e) {
        return L(e)
    }
    async function W(e) {
        let t = G(e);
        try {
            return Z(await crypto.subtle.digest("SHA-256", t))
        } catch (e) {
            return O.error("SHA-256 encryption failed: " + e), ""
        }
    }
    async function $(e) {
        let t = G(e);
        try {
            return Z(await crypto.subtle.digest("SHA-1", t))
        } catch (e) {
            return O.error("SHA-1 encryption failed: " + e), ""
        }
    }

    function J(e) {
        return e = (e = e.toLowerCase()).trim()
    }

    function X(e) {
        return q.test(e)
    }

    function Z(e) {
        let t = [],
            n = new DataView(e);
        for (let e = 0; e < n.byteLength; e += 4) {
            let r = "00000000",
                o = (r + n.getUint32(e).toString(16)).slice(-r.length);
            t.push(o)
        }
        return t.join("")
    }
    const Y = /(^[a-f0-9]{32}$)|(^[a-f0-9]{40}$)|(^[a-f0-9]{64}$)/,
        Q = ["cfcd208495d565ef66e7dff9f98764da", "2f43b42fd833d1e77420a8dae7419000", "7215ee9c7d9dc229d2921a40e899ec5f", "3d407cbd539c1f1f4b436169c9f5e1a3", "07e541ee7ffe448eae004c08a59dd91b", "852438d026c018c4307b916406f98c62", "4da8b7eb2c3f2007cf8238334401ef51", "334c4a4c42fdb79d7ebc3e73b517e6f8", "6adf97f83acf6453d4a6a4b1070f3754", "bbb93ef26e3c101ff11cdd21cab08a94", "37a6259cc0c1dae299a7866489dff0bd", "8589033c2cd15744c3ce30d1bddeb087", "93942e96f5acd83e2e047ad8fe03114d", "55502f40dc8b7c769880b10874abc9d0", "1aedb8d9dc4751e229a335e371db8058", "8d89c3087cc6cb98793ab7c0f5658c56", "97dfebf4098c0f5c16bca61e2b76c373", "476869598e748d958e819c180af31982", "ef8ca1c0ff7d2e34dc0953d4222655b8", "eca74378f20815070e1bec3ee81bfabc", "88e478531ab3bc303f1b5da82c2e9bbb", "8c3fe1ad25e6d5f47512ea7365419966", "9ad574806427070b94735f216e9abdc1", "ad16f2226a41423949f2c6d400bbc5d7", "3d751a0c27cbe4cd47f1fe09352c24fb", "799dd2047247877f2da2158fd61e25b6", "348bec5913e8550419c565d84ef92e52", "5beba8117bb43bde25beb24b58412183", "348bec5913e8550419c565d84ef92e52", "5beba8117bb43bde25beb24b58412183", "a18bf786efb76a3d56ee69a3b343952a", "86b5735c643e34006dfc421030e5d211", "5e543256c480ac577d30f76f9120eb74", "ec0fc0100c4fc1ce4eea230c3dc10360", "b58996c504c5638798eb6b511e6f49af", "946003f97ccc52d5d3b54ac0ec31bbfc", "b6589fc6ab0dc82cf12099d1c2d40ab994e8410c", "6eae3a5b062c6d0d79f070c26e6d62486b40cb46", "b858cb282617fb0956d960215c8e84d1ccf909c6", "4cefae8c39427da6c5d65b35f34211656e091b97", "27386f29c24918f7635a238a804215ae154a9d0b", "b5366a2d2ac98dae978423083f8b09e5cddc705d", "c916da70cd4a32512ca71d70e5cc765d00357df4", "71f8e7976e4cbc4561c9d62fb283e7f788202acb", "6eef6648406c333a4035cd5e60d0bf2ecf2606d7", "109085beaaa80ac89858b283a64f7c75d7e5bb12", "2be88ca4242c76e8253ac62474851065032d6833", "7e05143b040cbe5768da6abe82229f08c0f977d5", "f7a36129f691baa1201d963b8537eb69caa28863", "567159d622ffbb50b11b0efd307be358624a26ee", "ea97b75619f5cb2b9df9d184c4541aafe3b87484", "22d002c0a1d1f181dcbd75573e18de5af0eab43d", "52e17b67fd82b0545bb4fbdc5748ed23104133c7", "624ddbfecf6c492001bd3660870958cb84120ff9", "4ad6658bbc6700c113fe12acaa77ebf4d00f7cf5", "1245282959d9e21d2c2033fff63b765b6805b483", "49eb577150e21ee3180224a011edfc310acc3779", "ca7fe1db6188a235dabc9c1457d82e636b11a543", "b9f87d81ccb9795c4a8b82055610334e3881ca80", "dcf608cc7daaf155d54aad5b16f10f102bc2cab7", "0a75e7e26ee11630e8090f43a7a36ab283e7bd79", "2ebc7ba1d181ae807a36734904d5506dae4599d1", "7ee99aec60d570c612b86f417c579ce6c0d28799", "849f789f32f74696f4e5a2e3ca999db468d11cc4", "79cc65d586f548f71229672ca3455a754c13e44d", "e62f22de243201afe4303ebd42984f10f77eb983", "d5d4cd07616a542891b7ec2d0257b3a24b69856e", "0646f4afd90c8fdb87bbcb57b63ee1911f5a9a46", "63a710569261a24b3766275b7000ce8d7b32e2f7", "0ed2d7b5cdb77627bc46c6fac5026ec27b694d42", "5feceb66ffc86f38d952786c6d696c79c2dbc239dd4e91b46729d73a27fb57e9", "ab5df625bc76dbd4e163bed2dd888df828f90159bb93556525c31821b6541d46", "36a9e7f1c95b82ffb99743e0c5c4ce95d83c9a430aac59f84ef3cbfab6145068", "c6f62b06b3cd95ac3cc5b6aba2b157283273febc7d62fd3785d9f14737128166", "e40ff7f3a562b8757869d839b578d56390dd68e1cc28bf9b6d5362bc717e1c90", "5da3a4c7f117944275b4c8629c4916403625d5a4a6573a01ecb03f0e9d2edbe6", "e118b5c29cb4b975251601a6cc3209a4ea3eb0b429b205b679a8645da47da654", "140bedbf9c3f6d56a9846d2ba7088798683f4da0c248231336e6a05679e4fdfe", "dc937b59892604f5a86ac96936cd7ff09e25f18ae6b758e8014a24c7fa039e91", "fa1d2db62d4d952e2031452e1bc1ddcad0b192c2e29a706f11ce426ae5acddea", "74234e98afe7498fb5daf1f36ac2d78acc339464f950703b8c019892f982b90b", "f320794388bf29dabc846c54fe7ff28f78fc3bc3c13748783335a9bf33440d55", "73062d872926c2a556f17b36f50e328ddf9bff9d403939bd14b6c3b7f5a33fc2", "973dfe463ec85785f5f95af5ba3906eedb2d931c24e69824a89ea65dba4e813b", "87924606b4131a8aceeeae8868531fbb9712aaa07a5d3a756b26ce0f5d6ca674", "f080ca14e0e21e303b60a69e20be89fb3a682f8721b922823fcffcb108bb1363", "f0e2a21bcf499cbc713c47d8f034d66e90a99f9ffcfe96466c9971dfdc5c9816", "f303cf025f54905caca8788d2c7070d47fb49eb6515b7d886d3305a4f10396f9", "1f9e575ad4234c30a81d30c70affd4bba7b0d57d8e8607ad255496863d72c8bb", "587d4c12fef06af41f2fdfa19a3e68443bf8a7923b47cb75022481f8d77552ad", "e85bbf307aedebc91b078f5bc1ebd50d72e7494ffd85f32184688bfd032c3271", "66067ef9e155e39767ab7da916d84ee8ff70efe1459b4c0808fc776d52d85848", "944653ca1e1968fc3f9a0137faad3df546ac6065e1bd95e896ad69200dbe449c", "fe83e987766f25a7132fb9f45bc9620374568405a6a2b9d275d88f5042a8dc9b", "920c46ed756bcc1ea8f70cc90a59584efa6b2b6b5d394ca323dafd5ffce25a4c", "65c85ffcc43d86169bc4cc7c49a71fa505ddf863ba4a2af6cfaf1adbc0fd5d47", "bb8db4111f03c65c52df77d8d6963b7aee7b28bd8fd4eae61ead6e824770490e", "109fe15ff056d9cf6b5f4fa2be71da6db3308190149ae6d5eee2f5905a88fde9", "dae9c7c55697ba170d6b494c458649bd469af525520280d0dcfc98d74d13b17e", "b1bc5cb7473bd88caf80e991de2067f4b00dd25b0923f6c2eb57d18d79391399", "eb045d78d273107348b0300c01d29b7552d622abbc6faf81b3ec55359aa9950c", "f02dfb7da82a40b055700e27ce61e0b3ad10985137f721e7a2c62b3dc3fbaf31", "b4c9a289323b21a01c3e940f150eb9b8c542587f1abfd8f0e1cc1ffc5e475514", "4e523a5ae5b4636c75901b79fafbd3912e41dc7987414e688b09d4b436ff22b3"];

    function ee(e) {
        return Y.test(e) && -1 === Q.indexOf(e)
    }

    function te(e, t) {
        32 === t.length ? e.md5Email = t : 40 === t.length ? "phoneNumber" === D.urlHashType ? e.phoneNumber = t : e.sha1Email = t : 64 === t.length && (e.sha256Email = t)
    }
    const ne = new(n(98));

    function re() {
        return navigator.vendor.includes("Apple")
    }

    function oe() {
        return void 0 === D.browsers || !!(D.browsers.indexOf("chrome") > -1 && "Chrome" === ne.getBrowser().name || D.browsers.indexOf("edge") > -1 && "Edge" === ne.getBrowser().name || D.browsers.indexOf("firefox") > -1 && "undefined" != typeof InstallTrigger || D.browsers.indexOf("safari") > -1 && re() || D.browsers.indexOf("ie") > -1 && document.documentMode)
    }

    function ie() {
        return window.location.href
    }
    n(55);
    var se = n(56);
    const ae = {
            method: "GET",
            mode: "cors"
        },
        ce = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    function ue(e) {
        if (e) try {
            return new RegExp(e), !0
        } catch (e) {
            O.error("Regex is invalid: ", e)
        }
        return !1
    }

    function de(e) {
        let t = null;
        try {
            t = new URL(ie()).searchParams.get(D.urlParameter)
        } catch (e) {
            O.debug("Creating URL object failed: " + e), t = function () {
                var e = !1,
                    t = {},
                    n = null,
                    r = location.search.substring(1);
                arguments.length > 0 && arguments[0].length > 1 && (e = arguments[0]);
                for (var o = /([^&=]+)=([^&]*)/g; n = o.exec(r);) {
                    if (!1 !== e && decodeURIComponent(n[1]) === e) return decodeURIComponent(n[2]);
                    !1 === e && (t[decodeURIComponent(n[1])] = decodeURIComponent(n[2]))
                }
                return !1 === e ? t : null
            }(D.urlParameter)
        }
        if (null !== t) return t;
        O.debug("There is no such url parameter. \n Tried to fetch: " + e)
    }
    async function le(e) {
        try {
            let t = await fetch(e, ae);
            if (t && 200 === t.status && null !== t.body) return t.json();
            throw "Status code is something other than 200 or response body is null"
        } catch (e) {
            O.error("There has been a problem with your fetch operation: ", e)
        }
    }

    function fe(e) {
        const t = function (e) {
            try {
                return new se.TCStringV2(e)
            } catch (e) {
                O.error("Failed to decode consent string: " + e)
            }
        }(e);
        return void 0 !== t && function (e) {
            if (!e.core || -1 === e.core.vendorsConsent.indexOf(97)) return !1;
            for (let t = 0; t < ce.length; t++)
                if (-1 === e.core.purposesConsent.indexOf(ce[t])) return !1;
            return !0
        }(t)
    }
    const pe = "https://api.rlcdn.com/api/identity/envelope";
    let he = !1;
    async function be(e, t) {
        let n = D.customerID && D.accountID ? "&it=15&iv=" + D.accountID + ":" + D.customerID : (e.sha256Email ? "&it=4&iv=" + e.sha256Email : "") + (e.sha1Email ? "&it=4&iv=" + e.sha1Email : "") + (e.md5Email ? "&it=4&iv=" + e.md5Email : "") + (e.phoneNumber ? "&it=11&iv=" + e.phoneNumber : ""),
            r = await le(pe + "?pid=" + t + n + (D.ccpaConsentString ? "&ct=3&cv=" + encodeURIComponent(D.ccpaConsentString) : "") + (D.consentStringV2 ? "&ct=4&cv=" + D.consentStringV2 : ""));
        if (r && r.hasOwnProperty("envelope") && "" !== r.envelope) return O.debug("Envelope from api: ", JSON.stringify(r)), r;
        O.error("Envelope retrieved from API is undefined or empty")
    }

    function ge(e) {
        let t = {
            envelope: e.envelope,
            timestamp: +new Date,
            version: "1.8.0"
        };
        return btoa(JSON.stringify(t))
    }

    function me(e) {
        "cookie" === D.storageType ? he ? V("_lr_env", e, 31536e3, "/", D.rootDomain) : V("_lr_env", e) : function (e, t) {
            t && localStorage.setItem(e, t)
        }("_lr_env", e)
    }
    async function ve() {
        let e;
        if (e = D.useCloudFlare && D.retrieveCookiePathCloudFlare ? await Ce() : Se(), void 0 !== e && "" !== e) try {
            return JSON.parse(atob(e)).timestamp + 2592e6 < +new Date ? void Ee() : atob(e)
        } catch (e) {
            return O.error("Envelope is invalid: " + e), void Ee()
        } else O.debug("There is no envelope in storage.")
    }
    async function ye(e) {
        let t, n;
        if (!1 !== vt)
            if (e ? t = await async function (e) {
                    if (X(e = J(e))) {
                        let t = {
                            sha256Email: await W(e),
                            sha1Email: await $(e),
                            md5Email: await z(e)
                        };
                        return "" === t.sha1Email && delete t.sha1Email, "" === t.sha256Email && delete t.sha256Email, t
                    }
                }(e): D.emailHashes && (n = function () {
                    let e = {};
                    if (!D.email && D.emailHashes) {
                        if (D.emailHashes[0] && (ee(D.emailHashes[0]) ? te(e, D.emailHashes[0]) : O.debug(D.emailHashes[0] + " is invalid hash")), D.emailHashes[1] && (ee(D.emailHashes[1]) ? te(e, D.emailHashes[1]) : O.debug(D.emailHashes[1] + " is invalid hash")), D.emailHashes[2] && (ee(D.emailHashes[2]) ? te(e, D.emailHashes[2]) : O.debug(D.emailHashes[2] + " is invalid hash")), JSON.stringify(e) !== JSON.stringify({})) return O.debug("At least one hash is valid."), e;
                        O.debug("All passed hashes are invalid.")
                    }
                }(), n && (t = n)), t || D.customerID)
                if (St)
                    if (Ae(t), -1 !== D.placementID) {
                        if ("new_envelope" === await we()) {
                            O.debug("New Envelope will be acquired.");
                            let e = await be(t, D.placementID);
                            if (e) {
                                let t = ge(e);
                                O.debug("Encoded envelope: ", JSON.stringify(t)), D.useCloudFlare && D.setCookiePathCloudFlare ? await Te(t, void 0) : me(t)
                            }
                        }
                    } else O.debug("PlacementID is set to -1, ATS API wont be called!");
        else O.debug("User didn't give consent. Envelope api won't be called");
        else O.debug("Encrypted Emails are missing!");
        else O.debug("No consent has been given.")
    }
    async function we() {
        let e;
        if (e = D.useCloudFlare && D.retrieveCookiePathCloudFlare ? await Ce() : Se(), void 0 === e || "" === e) return "new_envelope";
        try {
            return e = JSON.parse(atob(e)), e.timestamp + D.expirationTime < +new Date ? "new_envelope" : e.timestamp + 2592e6 < +new Date || e.timestamp + D.expirationRefreshTime < +new Date ? "expired" : "not_expired"
        } catch (e) {
            return O.error("Envelope is invalid: " + e), Ee(), "new_envelope"
        }
    }
    async function xe() {
        if (!St) return void O.debug("User didn't give consent. Envelope api won't be called");
        let e;
        O.debug("Envelope will be refreshed"), e = D.useCloudFlare && D.retrieveCookiePathCloudFlare ? await Ce() : Se(), e = JSON.parse(atob(e));
        let t = await async function (e) {
            try {
                let t = await le(pe + "/refresh?pid=" + D.placementID + "&it=19&iv=" + e.envelope + (D.ccpaConsentString ? "&ct=3&cv=" + encodeURIComponent(D.ccpaConsentString) : "") + (D.consentStringV2 ? "&ct=4&cv=" + D.consentStringV2 : ""));
                if (t && t.hasOwnProperty("envelope") && "" !== t.envelope) return O.debug("Envelope from refresh api: ", JSON.stringify(t)), t;
                O.error("Envelope retrieved from refresh API is undefined or empty")
            } catch (e) {
                O.error("Envelope retrieved from refresh API is undefined or empty", e)
            }
        }(e);
        if (t) {
            let e = ge(t);
            O.debug("Encoded refresh envelope: ", JSON.stringify(e)), me(e)
        }
    }

    function Se() {
        if ("cookie" === D.storageType) {
            let e = _("_lr_env");
            return re() && (he ? V("_lr_env", e, 31536e3, "/", D.rootDomain) : V("_lr_env", e)), e
        }
        return function (e) {
            if (null !== localStorage.getItem(e)) return localStorage.getItem(e)
        }("_lr_env")
    }
    async function Ee() {
        D.useCloudFlare && D.retrieveCookiePathCloudFlare ? await Te(void 0, 1) : (R("_lr_env"), j("_lr_env"))
    }

    function Ae(e) {
        Ie() && D.pixelID && (V("_lr_drop_match_pixel", "true", 86400), D.customerID && D.accountID ? function () {
            O.debug("Dropping match pixel with Customer ID!");
            let e = "https://akp.rlcdn.com/" + D.pixelID + ".html?es=" + D.accountID + "&u=" + D.customerID,
                t = document.createElement("iframe");
            t.setAttribute("name", "_rlcdn"), t.style.cssText = "width:0px;height:0px;frameborder:0px;", t.setAttribute("src", e), document.body.appendChild(t)
        }() : e && (wt ? function (e) {
            if (e.phoneNumber) return;
            O.debug("Dropping match pixel for EU");
            let t = "https://ejp.rlcdn.com/" + D.pixelID + ".html?";
            if (e.md5Email) {
                let n = document.createElement("iframe");
                n.setAttribute("name", "_rlcdn"), n.style.cssText = "width:0px;height:0px;frameborder:0px;", n.setAttribute("src", t + "m=" + e.md5Email + (D.consentStringV2 ? "&ct=4&cv=" + D.consentStringV2 : "")), document.body.appendChild(n)
            }
            if (e.sha256Email) {
                let n = document.createElement("iframe");
                n.setAttribute("name", "_rlcdn"), n.style.cssText = "width:0px;height:0px;frameborder:0px;", n.setAttribute("src", t + "s256=" + e.sha256Email + (D.consentStringV2 ? "&ct=4&cv=" + D.consentStringV2 : "")), document.body.appendChild(n)
            }
            if (e.sha1Email) {
                let n = document.createElement("iframe");
                n.setAttribute("name", "_rlcdn"), n.style.cssText = "width:0px;height:0px;frameborder:0px;", n.setAttribute("src", t + "s=" + e.sha1Email + (D.consentStringV2 ? "&ct=4&cv=" + D.consentStringV2 : "")), document.body.appendChild(n)
            }
        }(e) : function (e) {
            O.debug("Dropping match pixel for non-EU");
            let t = document.createElement("script");
            t.type = "text/javascript", t.src = "https://pippio.com/api/sync?pid=" + D.pixelID + (e.md5Email ? "&it=4&iv=" + e.md5Email : "") + (e.sha256Email ? "&it=4&iv=" + e.sha256Email : "") + (e.sha1Email ? "&it=4&iv=" + e.sha1Email : "") + (e.phoneNumber ? "&it=11&iv=" + e.phoneNumber : ""), t.setAttribute("async", ""), document.body.appendChild(t)
        }(e)))
    }
    async function Ce() {
        return (await le(D.retrieveCookiePathCloudFlare)).envelope
    }
    async function Te(e, t) {
        await fetch(D.setCookiePathCloudFlare + "?id=" + e + "&age=" + (t ? 0 : D.cookieAgeCloudFlare)), O.debug("Using CloudFlare http cookies!")
    }

    function Ie() {
        let e = _("_lr_drop_match_pixel"),
            t = !(e && "true" === e);
        return t || O.debug("Drop match pixel did not expire!"), t
    }

    function ke() {
        j("_lr_env"), R("_lr_env")
    }
    const Pe = /(^((\+1)?)([\s.-]?)?[(]?[2-9][0-9][0-9][)]?[(\s)?.-]?[2-9][0-9][0-9][\s.-]?\d{4}$)/,
        Oe = /(\+1)|[.]|[(]|[)]|[-]|[ ]/gi;
    async function Be(e) {
        if (!1 !== vt)
            if ("string" != typeof e && (e += ""), Ve(e)) {
                O.debug("We detected phone number: " + e), e = De(e);
                let t = {
                    phoneNumber: e = await $(e)
                };
                if (Ae(t), !St) return void O.debug("User didn't give consent. Envelope api won't be called");
                if (-1 === D.placementID) return void O.debug("PlacementID is set to -1, ATS API wont be called!");
                if ("new_envelope" === await we()) {
                    O.debug("New Envelope will be acquired.");
                    let e = await be(t, D.placementID);
                    e && (e = ge(e), O.debug("Encoded envelope: ", JSON.stringify(e)), me(e))
                }
            } else O.debug("Phone number is invalid");
        else O.debug("No consent has been given.")
    }

    function De(e) {
        return e.replace(Oe, "")
    }

    function Ve(e) {
        return Pe.test(e.trim(e))
    }

    function _e(e) {
        return !!D.customerIDRegex && new RegExp(D.customerIDRegex).test(e)
    }
    const Re = /(^[a-fA-F0-9]{64}$)/,
        je = /(^[a-fA-F0-9]{40}$)/,
        Le = /(^[a-fA-F0-9]{32}$)/;
    const Ue = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/;
    let Ne, Me, Fe = !1,
        He = [],
        Ke = [],
        qe = [],
        Ge = !1;
    async function ze() {
        O.debug("Detection started! Library is configured to detect: ", D.detectionSubject), dt();
        let e = [];
        if (await We(e), O.info("Detection event type is ", D.detectionEventType), "onblur" === D.detectionEventType) {
            if (await
                function (e) {
                    for (let e in D.cssSelectors)
                        if ($e()) return !0;
                    return Je()
                }()) return;
            await
            function (e) {
                for (let t in e) {
                    let n = e[t];
                    for (let e in n) {
                        let t = n[e];
                        "object" == typeof t && qe.push(t.onblur)
                    }
                }
            }(e), Qe(e)
        } else "onsubmit" === D.detectionEventType || "onclick" === D.detectionEventType ? lt(e) : O.debug("Detection type not supported!")
    }

    function We(e) {
        for (let t in D.cssSelectors) "string" == typeof D.cssSelectors[t] && D.cssSelectors[t].includes("input") && e.push(document.querySelectorAll(D.cssSelectors[t]));
        let t = window.location.hostname,
            n = document.getElementsByTagName("iframe");
        for (let r = 0; r < n.length; r++)
            if (gt(t, n[r]) && n[r].contentDocument)
                for (let t in D.cssSelectors) "string" == typeof D.cssSelectors[t] && D.cssSelectors[t].includes("input") && e.push(n[r].contentDocument.querySelectorAll(D.cssSelectors[t]));
        return e
    }

    function $e() {
        if (!1 !== vt) {
            for (let e in D.cssSelectors)
                if ("string" == typeof D.cssSelectors[e])
                    if (D.cssSelectors[e].includes("input")) {
                        if (Xe(document.querySelectorAll(D.cssSelectors[e]))) return !0
                    } else if (Ze(document.querySelectorAll(D.cssSelectors[e]))) return !0;
            return Je()
        }
        O.debug("Consent was not given. Pid won't be detected(Scan DOM).")
    }

    function Je() {
        let e = window.location.hostname,
            t = document.getElementsByTagName("iframe");
        for (let n = 0; n < t.length; n++)
            if (gt(e, t[n]) && t[n].contentDocument)
                for (let e in D.cssSelectors)
                    if ("string" == typeof D.cssSelectors[e])
                        if (D.cssSelectors[e].includes("input")) {
                            if (Xe(t[n].contentDocument.querySelectorAll(D.cssSelectors[e]))) return !0
                        } else if (Ze(t[n].contentDocument.querySelectorAll(D.cssSelectors[e]))) return !0;
        return !1
    }

    function Xe(e) {
        for (let t in e) {
            let n = e[t];
            if ("object" == typeof n) {
                let e = n.value.trim();
                if (Fe && tt(e)) return !0;
                if (nt(e)) return !0;
                if (rt(e)) return !0
            }
        }
        return !1
    }

    function Ze(e) {
        for (let t in e) {
            let n = e[t];
            if (void 0 !== n.innerText) {
                if (Fe && tt(n.innerText.trim())) return !0;
                if (nt(n.innerText.trim())) return !0;
                if (rt(n.innerText.trim())) return !0
            }
        }
        return !1
    }

    function Ye(e) {
        let t = 0;
        for (let n in e) {
            let r = e[n];
            for (let e in r) {
                let n = r[e];
                "object" == typeof n && (n.onblur = qe[t++])
            }
        }
    }

    function Qe(e) {
        let t;
        for (let n in e) {
            let r = e[n];
            for (let n in r) {
                let o = r[n];
                if ("object" == typeof o) {
                    let n = o.onblur;
                    o.classList.contains("js-bound") || (o.classList += " js-bound", o.onblur = () => {
                        if (!1 === vt) return O.debug("Consent was not given. Pid won't be detected(OnBlur)."), "function" == typeof n && n(), void Ye(e);
                        t = o.value.trim(), et(t, e), "function" == typeof n && n()
                    })
                }
            }
        }
    }

    function et(e, t) {
        "all" === D.detectionSubject ? (nt(e) || rt(e) || tt(e)) && Ye(t) : "email" === D.detectionSubject ? nt(e) && Ye(t) : "phoneNumber" === D.detectionSubject ? rt(e) && Ye(t) : "customerIdentifier" === D.detectionSubject && tt(e) && Ye(t)
    }

    function tt(e) {
        return !(!Fe || !_e(e)) && (D.customerID = e.trim(), O.debug("We detected customer ID: ", D.customerID), ye(), bt(), !0)
    }

    function nt(e) {
        if (("all" === D.detectionSubject || "email" === D.detectionSubject) && X(e)) {
            let t = e.match(q)[0];
            return O.debug("We detected email: " + t), bt(), ye(t), !0
        }
        return !1
    }

    function rt(e) {
        if (("all" === D.detectionSubject || "phoneNumber" === D.detectionSubject) && Ve(e)) {
            return O.debug("We detected phone number: " + e), Be(De(e)), bt(), !0
        }
        return !1
    }

    function ot() {
        let e = de("email");
        if (e) {
            if (X(e)) return e = J(e), O.debug("We detected email: " + e), ye(e), !0;
            O.debug("Email found in URL did not pass regex test.")
        }
    }

    function it() {
        let e = de("hashedPid");
        if (e) {
            if (e = function (e) {
                    return Re.test(e) ? {
                        type: "SHA256Hash",
                        hash: e
                    } : je.test(e) ? {
                        type: "SHA1Hash",
                        hash: e
                    } : Le.test(e) ? {
                        type: "MD5Hash",
                        hash: e
                    } : void 0
                }(e), e) return O.debug("We detected hash: " + e.hash + " with type: " + e.type), "SHA1Hash" !== e.type && "phoneNumber" === D.urlHashType ? (O.error("We support only SHA1 encryption for phone numbers."), !1) : (D.emailHashes = [e.hash], ye(), !0);
            O.debug("Hash did not pass regex test")
        }
        return !1
    }

    function st() {
        let e = de("phoneNumber");
        if (e) {
            if (Ve(e)) return O.debug("We detected phone number: " + e), e = De(e), Be(e), !0;
            O.debug("Phone number found in URL did not pass regex test.")
        }
    }

    function at() {
        if (Fe) {
            let e = de("customerID");
            if (e) {
                if (_e(e)) return O.debug("We detected customerID: " + e), D.customerID = e, ye(), !0;
                O.debug("customerID found in url did not pass regex test")
            }
        }
    }

    function ct() {
        let e = de("envelope");
        if (e) try {
            if (Ue.test(e) && e.length > 8) try {
                return e = atob(e), O.debug("We detected envelope: " + e), e = ge({
                    envelope: e
                }), me(e), !0
            } catch (e) {
                O.error("Envelope could not be base64 decoded: " + e)
            } else O.debug("Envelope found in url did not pass regex test")
        } catch (e) {
            O.error("Cannot decode base64 on envelope: " + e)
        }
    }

    function ut() {
        return dt(), "all" === D.detectionSubject ? ot() || st() || it() || at() || ct() : "email" === D.detectionSubject ? ot() : "phoneNumber" === D.detectionSubject ? st() : "pidHashes" === D.detectionSubject ? it() : "envelope" === D.detectionSubject ? ct() : "customerIdentifier" === D.detectionSubject ? at() : void O.debug("Library is not configured to start any url detection!")
    }

    function dt() {
        return Fe = D.accountID && ue(D.customerIDRegex) && ("all" === D.detectionSubject || "customerIdentifier" === D.detectionSubject)
    }

    function lt(e) {
        ! function () {
            for (let e in D.triggerElements) {
                document.querySelectorAll(D.triggerElements[e]).forEach(e => {
                    He.push(e)
                })
            }
            let e = window.location.hostname,
                t = document.getElementsByTagName("iframe");
            for (let n = 0; n < t.length; n++)
                if (gt(e, t[n]) && t[n].contentDocument)
                    for (let e in D.triggerElements) {
                        t[n].contentDocument.querySelectorAll(D.triggerElements[e]).forEach(e => {
                            He.push(e)
                        })
                    }
        }(), He.forEach(e => {
            Ke.push(e[D.detectionEventType])
        });
        let t = [];
        for (let n of e)
            for (let e of n) e && e.tagName && "INPUT" === e.tagName && t.push(e);
        for (let e = 0; e < He.length; e++) He[e][D.detectionEventType] = async (...n) => {
            for (let e of t)
                if (!1 !== vt) {
                    let t = e.value.trim();
                    if (await pt(t)) {
                        O.debug("We detected: ", t), ft();
                        break
                    }
                } if (Ke[e] && (Ne = He[e][D.detectionEventType], He[e][D.detectionEventType] = Ke[e], He[e][D.detectionEventType](...n), He[e][D.detectionEventType] = Ne), !1 === vt) return O.debug("Consent was not given. Pid won't be detected.(Submit and OnClick)"), void ft()
        }
    }

    function ft() {
        for (let e = 0; e < He.length; e++) He[e][D.detectionEventType] = Ke[e]
    }
    async function pt(e) {
        return "all" === D.detectionSubject ? nt(e) || rt(e) || tt(e) : "email" === D.detectionSubject ? nt(e) : "phoneNumber" === D.detectionSubject ? rt(e) : "customerIdentifier" === D.detectionSubject && tt(e)
    }

    function ht() {
        new MutationObserver((function (e, t) {
            Me = t, O.debug("Detected dynamically added nodes."), (Ge || !1 === vt) && (t.disconnect(), O.debug("Checking for dynamically added elements is turned off. here")), "onblur" === D.detectionEventType ? (Qe(We([])), $e()) : "onclick" !== D.detectionEventType && "onsubmit" !== D.detectionEventType || lt(We([]))
        })).observe(document.querySelector("body"), {
            childList: !0,
            subtree: !0
        })
    }

    function bt() {
        Ge = !0, D.detectDynamicNodes && Me && (O.debug("Checking for dynamically added elements is turned off."), Me.disconnect())
    }

    function gt(e, t) {
        if (!t.src) return !1;
        try {
            const n = e === new URL(t.src).hostname;
            return n && O.debug("Iframe " + t.src + " can be accessed"), n
        } catch (e) {
            return O.debug("error: ", e), !1
        }
    }
    const mt = ["AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR", "HU", "IE", "IT", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "RO", "SK", "SI", "ES", "SE", "GB"];
    let vt, yt, wt = !1,
        xt = !1,
        St = !0,
        Et = !1;
    async function At(e) {
        D.update(e),
            function () {
                let e;
                try {
                    e = new URL(ie()).searchParams.get("ats_debug")
                } catch (e) {
                    O.debug("Creating URL object failed: " + e)
                }
                "true" === e ? (D.logging = "debug", O.debug("Debug mode enabled.")) : "false" === e && (D.logging = void 0, console.log("Debug mode disabled."))
            }(), D.consentStringV2 = void 0, D.ccpaConsentString = void 0, oe() ? (D.rootDomain && function (e) {
                let t = e.split("."),
                    n = window.location.hostname.split(".");
                for (let e = t.length - 1, r = n.length - 1; e > -1; e--, r--)
                    if (t[e] !== n[r]) return void O.error("Passed root domain is invalid!");
                he = !0
            }(D.rootDomain), window.addEventListener("message", It, !1), window.__tcfapi && __tcfapi("addEventListener", 2, kt), async function () {
                if (yt = _("_lr_geo_location"), "" === yt) {
                    let e = await async function () {
                        let e = await le("https://geo.privacymanager.io/");
                        if (e) return e;
                        O.error("Geo location is undefined or empty")
                    }();
                    yt = e.country, V("_lr_geo_location", yt, 86400)
                }! function (e) {
                    if ("US" === e) xt = !0, O.debug("User is in the US"), window.__uspapi ? (O.debug("CCPA library is present"), __uspapi("getUSPData", 1, (e, t) => {
                        if (null === e.uspString) return O.debug("User did not interact with consent manager."), Tt();
                        if (t) {
                            if (! function (e) {
                                    let t = e.split("")[2];
                                    return "Y" === t ? (O.debug("User didnt gave consent. Library will shut down"), D.ccpaConsentString = void 0, !1) : ("N" === t ? (O.debug("User gave consent"), D.ccpaConsentString = e) : "-" === t && (O.debug("CCPA doesnt apply to this user"), D.ccpaConsentString = void 0), !0)
                                }(e.uspString)) return;
                            Tt()
                        } else O.debug("User didnt gave consent. Library will shut down!")
                    })) : Tt();
                    else if (mt.includes(e)) {
                        if (wt = !0, O.info("Location of the user is in country that has GDPR regulation!"), !window.__tcfapi) return St = !1, O.debug("CMP is not present. Envelope will be removed and library will shutdown."), void ke();
                        __tcfapi("getTCData", null, (e, t) => {
                            if (!t || !fe(e.tcString)) return St = !1, ke(), void O.debug("Called TCF API - no consent has been given. Envelope will be removed and library will shutdown");
                            D.consentStringV2 = e.tcString, Tt()
                        })
                    } else O.info("Location of the user is NOT in country that has GDPR or CCPA regulation!"), Tt()
                }(yt)
            }()) : O.debug("Browser blocked by configuration.")
    }

    function Ct() {
        if (xt || (D.ccpaConsentString = void 0), Et = !0, D.customerID && D.accountID) O.debug("Customer id: ", D.customerID), O.debug("Account id: ", D.accountID), _e(D.customerID) ? ye() : O.error("CustomerID is not valid!");
        else if (D.email) O.debug("Config email: ", D.email), X(D.email) ? ye(D.email) : O.error("Config email is not valid!");
        else if (D.phoneNumber) O.debug("Config phone number: ", D.phoneNumber), Be(D.phoneNumber);
        else if (D.emailHashes) O.debug("Config hashes: " + D.emailHashes), ye();
        else if (function () {
                if (D.urlRegex) try {
                    return new RegExp(D.urlRegex).test(ie())
                } catch (e) {
                    O.error("Regex is invalid: ", e)
                }
                return !0
            }(D.urlRegex)) {
            if ("customerIdentifier" === D.detectionSubject) {
                if (!D.customerIDRegex) return void O.error("customerIDRegex is misssing!");
                if (!ue(D.customerIDRegex)) return void O.error("customerIDRegex is invalid!");
                if (!D.accountID) return void O.error("accountID is misssing!")
            }
            "url" === D.detectionType ? (O.debug("Url-based detection started"), ut()) : "scrape" === D.detectionType ? (ze(), D.detectDynamicNodes && ht()) : "scrapeAndUrl" === D.detectionType && (ut() || ze(), D.detectDynamicNodes && ht())
        } else O.debug("Page url is not configured to trigger detection")
    }
    async function Tt() {
        vt = !0;
        let e = await we();
        "expired" === e ? await xe() : "not_expired" === e && O.debug("Envelope did not expire!"), "new_envelope" === e || Ie() ? (window.addEventListener("ats-trigger-detection", async () => {
            !0 === vt && (O.debug("Event-driven detection started!"), $e())
        }, !1), Ct()) : O.debug("Library will shutdown.")
    }
    async function It(e) {
        if (e && e.source && e.data && "ats-liveramp-envelope-request" === e.data) {
            let t = await ve();
            t ? (e.source.postMessage({
                message: "ats-liveramp-envelope-result",
                result: t
            }, "*"), O.debug("ats-liveramp-envelope-result postMessage dispatched!")) : (e.source.postMessage({
                message: "ats-liveramp-envelope-result",
                result: void 0
            }, "*"), O.debug("There is no envelope!"))
        }
    }
    const kt = (e, t) => {
        t && "useractioncomplete" === e.eventStatus && (O.debug("User changed consent data!"), t && fe(e.tcString) ? (vt = !0, O.debug("User gave consent!")) : (vt = !1, O.debug("User removed consent, envelope will be removed!"), ke()))
    };

    function Pt(e) {
        At(e)
    }
    async function Ot(e) {
        let t = await ve();
        if (!e) return t;
        e(t)
    }
    async function Bt() {
        await async function () {
            Et && !0 === vt && (O.debug("Event-driven detection started!"), $e())
        }()
    }

    function Dt(e) {
        if (!e) return D;
        e(D)
    }

    function Vt() {
        ke()
    }
}]);