webpackJsonp([1, 0], [function (t, e, s) {
    (function (t) {
        "use strict";
        function e(t) {
            return t && t.__esModule ? t : {default: t}
        }

        s(21);
        var n = s(15), i = e(n), a = s(5), r = e(a), o = s(47), c = e(o);
        s(17);
        var l = s(18), u = e(l), f = s(1), d = e(f), v = s(31), p = e(v);
        if (location.hash.length < 10 && i.default.getItem("locker")) {
            var h = (+atob(i.default.getItem("locker")) - 3) / 17;
            location.hash = d.default[h].path, i.default.removeItem("locker")
        }
        r.default.use(c.default), r.default.prototype.$log = u.default;
        var m = new c.default({mode: "hash", base: t, routes: d.default});
        m.afterEach(function (t, e, s) {
            t.meta.index < 5 ? i.default.setItem("locker", btoa(17 * t.meta.index + 3)) : i.default.removeItem("locker")
        });
        new r.default({data: {}, router: m, el: "#app", template: "<App/>", components: {App: p.default}});
        u.default.init()
    }).call(e, "/")
}, function (t, e, s) {
    "use strict";
    function n(t) {
        return t && t.__esModule ? t : {default: t}
    }

    Object.defineProperty(e, "__esModule", {value: !0}), e.maps = void 0;
    var i = s(16), a = n(i), r = a.default.time + "", o = ["9", "-", "B", "-", "C", "-", "1", "-", "D", "-", "9", "-", "3", "-", "6", "-", "F", "-", "D", "-", "9", "-", "B", "-", "2", "-", "2", "-", "D", "-", "C", "-", "3", "-", "0", "-", "A", "-", "F", "-", "0", "-", "0", "-", "3", "-", "2", "-", "B", "-", "5", "-", "E", "-", "9", "-", "8", "-", "C", "-", "6", "-", "C"].map(function (t, e) {
        return e % 2 ? r[e] : t
    }).join(""), c = ["B", "#", "E", "#", "6", "#", "2", "#", "A", "#", "D", "#", "3", "#", "1", "#", "D", "#", "E", "#", "7", "#", "5", "#", "C", "#", "C", "#", "B", "#", "4", "#", "9", "#", "5", "#", "3", "#", "8", "#", "C", "#", "6", "#", "5", "#", "3", "#", "3", "#", "8", "#", "0", "#", "A", "#", "7", "#", "6", "#", "C", "#", "B"].map(function (t, e) {
        return e % 2 ? r[e] : t
    }).reverse().join(""), l = ["F", "$", "A", "$", "3", "$", "9", "$", "B", "$", "A", "$", "9", "$", "9", "$", "0", "$", "C", "$", "2", "$", "3", "$", "1", "$", "A", "$", "5", "$", "6", "$", "9", "$", "3", "$", "E", "$", "5", "$", "2", "$", "A", "$", "2", "$", "5", "$", "A", "$", "1", "$", "B", "$", "B", "$", "3", "$", "A", "$", "A", "$", "B"].map(function (t, e) {
        return e % 2 ? r[e] : t
    }).join(""), u = ["C", "^", "8", "^", "B", "^", "3", "^", "D", "^", "5", "^", "A", "^", "3", "^", "A", "^", "9", "^", "D", "^", "A", "^", "2", "^", "0", "^", "6", "^", "B", "^", "F", "^", "F", "^", "7", "^", "4", "^", "1", "^", "0", "^", "3", "^", "5", "^", "4", "^", "8", "^", "0", "^", "3", "^", "A", "^", "9", "^", "9", "^", "C"].map(function (t, e) {
        return e % 2 ? r[e] : t
    }).reverse().join(""), f = ["C", "*", "5", "*", "5", "*", "7", "*", "0", "*", "6", "*", "3", "*", "D", "*", "A", "*", "F", "*", "B", "*", "5", "*", "8", "*", "7", "*", "3", "*", "0", "*", "D", "*", "B", "*", "4", "*", "F", "*", "A", "*", "E", "*", "B", "*", "E", "*", "3", "*", "2", "*", "0", "*", "F", "*", "8", "*", "E", "*", "8", "*", "A"].map(function (t, e) {
        return e % 2 ? r[e] : t
    }).join("");
    e.maps = {a: o, b: c, c: l, d: u, e: f};
    e.default = [{path: "/", meta: {index: 0}, component: s(33)}, {
        path: "/" + o,
        meta: {index: 1},
        component: s(34)
    }, {path: "/" + c, meta: {index: 2}, component: s(35)}, {
        path: "/" + l,
        meta: {index: 3},
        component: s(36)
    }, {path: "/" + u, meta: {index: 4}, component: s(37)}, {path: "/test", component: s(4)}, {
        path: "/" + f,
        meta: {index: 5},
        component: s(4)
    }, {path: "*", component: s(32)}]
}, function (t, e, s) {
    var n, i;
    s(30), n = s(7);
    var a = s(46);
    i = n = n || {}, "object" != typeof n.default && "function" != typeof n.default || (i = n = n.default), "function" == typeof i && (i = i.options), i.render = a.render, i.staticRenderFns = a.staticRenderFns, t.exports = n
}, function (t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var s = {
        ballStartX: -10,
        ballStartY: 46,
        ballEndX: 650,
        ballEndY: 472,
        ballSize: 6,
        ballSpeed: 2,
        winWidth: 634,
        winHeight: 504,
        rects: [[0, 0, 453, 32], [0, 59, 66, 270], [0, 59, 66, 276], [91, 31, 66, 83], [65, 143, 48, 83], [137, 143, 73, 83], [233, 143, 48, 83], [100, 250, 155, 102], [0, 371, 155, 83], [0, 481, 634, 22], [183, 371, 171, 83], [379, 336, 74, 146], [379, 197, 74, 117], [476, 197, 84, 91], [476, 313, 84, 146], [586, 197, 48, 265], [476, 24, 57, 91], [560, 0, 74, 91], [379, 114, 230, 56], [379, 31, 74, 56], [293, 298, 48, 56], [183, 59, 73, 56], [280, 59, 73, 217]],
        stars: [[494, 4, 18, 18], [303, 39, 18, 18], [173, 228, 18, 18], [360, 359, 18, 18], [18, 344, 18, 18], [18, 458, 18, 18]],
        starsHidden: [[40, 36, 18, 18], [50, 36, 18, 18], [563, 224, 18, 18]]
    };
    e.default = s
}, function (t, e, s) {
    var n, i;
    s(27), n = s(14);
    var a = s(43);
    i = n = n || {}, "object" != typeof n.default && "function" != typeof n.default || (i = n = n.default), "function" == typeof i && (i = i.options), i.render = a.render, i.staticRenderFns = a.staticRenderFns, t.exports = n
}, , function (t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0}), e.default = {
        name: "app",
        props: ["sidebar"],
        data: function () {
            return {}
        },
        mounted: function () {
        }
    }
}, function (t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0}), e.default = {
        name: "app",
        props: ["show", "title"],
        data: function () {
            return {}
        },
        methods: {
            doConfirm: function () {
                this.$emit("click")
            }
        }
    }
}, function (t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0}), e.default = {
        mounted: function () {
        }
    }
}, function (t, e, s) {
    "use strict";
    function n(t) {
        return t && t.__esModule ? t : {default: t}
    }

    function i(t, e, s) {
        var n = Math.min(e.x, s.x) - 8, i = Math.min(e.y, s.y) - 8, a = Math.max(e.x, s.x) + 8, r = Math.max(e.y, s.y) + 8;
        return t.x >= n && t.x <= a && t.y >= i && t.y <= r
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var a = s(2), r = n(a), o = s(1);
    e.default = {
        components: {Alert: r.default}, data: function () {
            var t = 300, e = 200, s = [{x: 0, y: 0}, {x: 80, y: 0}, {x: 160, y: 0}, {x: 0, y: 80}, {x: 80, y: 80}, {
                x: 160,
                y: 80
            }, {x: 0, y: 160}, {x: 80, y: 160}, {x: 160, y: 160}].map(function (s) {
                return s.x += t, s.y += e, s
            });
            return {points: s, lines: [], alertTitle: "", showAlert: "", showSuccess: !1, curPoint: {x: -1, y: -1}}
        }, mounted: function () {
            var t = this;
            this.$log.send({fm: "pv", extra: "index"}), this.startTime = Date.now(), this.keyEvent = function (e) {
                13 === e.keyCode ? (t.finished = !0, t.curPoint.x = t.curPoint.y = -1, e.returnValue = !1, t.computeThrough()) : 27 === e.keyCode && t.lines.splice(t.lines.length - 1, 1)
            }, window.addEventListener("keyup", this.keyEvent)
        }, destroyed: function () {
            window.removeEventListener("keyup", this.keyEvent), this.keyEvent = null
        }, computed: {
            linePath: function () {
                if (!this.lines.length)return "";
                var t = this.lines.map(function (t) {
                    return t.x + " " + t.y
                });
                return this.finished || t.push(this.curPoint.x + " " + this.curPoint.y), t.join(",")
            }
        }, methods: {
            showMessage: function (t) {
                this.alertTitle = t, this.showAlert = !0
            }, computeThrough: function () {
                var t = this, e = this;
                setTimeout(function () {
                    if (t.lines.length > 5)return void e.showMessage("还可以用更少的笔画，再接再厉哦！");
                    for (var s = 0, n = t.lines.length - 1, a = t.points.slice(), r = t.lines; n > 0;) {
                        for (var o = r[n], c = r[n - 1], l = a.length - 1; l >= 0; l--) {
                            var u = a[l], f = Math.pow((c.y - o.y) * u.x + (o.x - c.x) * u.y + (c.x * o.y - o.x * c.y), 2) / (Math.pow(c.y - o.y, 2) + Math.pow(o.x - c.x, 2));
                            f <= 64 && i(u, o, c) && (a.splice(l, 1), s++)
                        }
                        n--
                    }
                    s >= 9 ? (astorage.setItem("startTime-0", Date.now() - t.startTime), t.showSuccess = !0) : s ? e.showMessage("不错呦，穿过了" + s + "个点！") : e.showMessage("瞎了。。。")
                }, 100)
            }, click: function (t) {
                this.finished = !1, this.lines.push({x: t.offsetX, y: t.offsetY})
            }, mousemove: function (t) {
                this.curPoint.x = t.offsetX, this.curPoint.y = t.offsetY
            }, contextmenu: function (t) {
                this.lines = [], t.returnValue = !1
            }, doNext: function () {
                this.showSuccess = !1, window.location.href = "#/" + o.maps.a
            }
        }
    }
}, function (t, e, s) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var n = s(1);
    e.default = {
        data: function () {
            return {stepUrl: btoa("#/" + n.maps.b)}
        }, mounted: function () {
            this.startTime = Date.now(), this.$log.send({fm: "pv", extra: "step1"})
        }, destroyed: function () {
            astorage.setItem("startTime-1", Date.now() - this.startTime)
        }
    }
}, function (t, e, s) {
    "use strict";
    function n(t) {
        return t && t.__esModule ? t : {default: t}
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var i = s(2), a = n(i), r = s(1);
    e.default = {
        components: {Alert: a.default}, data: function () {
            return {showSuccess: !1}
        }, mounted: function () {
            var t = this;
            this.$log.send({fm: "pv", extra: "step2"}), this.startTime = Date.now(), setTimeout(function () {
                var t = $(".lock-panel");
                t.find(".n1").css("top", -280), t.find(".n2").css("top", -100), t.find(".n3").css("top", -40)
            }, 300);
            var e = 20, s = 60;
            this.timer = setInterval(function () {
                var n = $(window).height() + "", i = -n.slice(0, 1), a = -n.slice(1, 2), r = -n.slice(2), o = $(".lock-panel"), c = parseInt(o.find(".n1").css("top")) - e, l = parseInt(o.find(".n2").css("top")) - e, u = parseInt(o.find(".n3").css("top")) - e;
                i * s > c - 10 && i * s < c + 10 && a * s > l - 10 && a * s < l + 10 && r * s > u - 10 && r * s < u + 10 && (astorage.setItem("startTime-2", Date.now() - t.startTime), t.showSuccess = !0)
            }, 1e3)
        }, destroyed: function () {
            clearInterval(this.timer)
        }, methods: {
            doNext: function () {
                window.location.href = "#/" + r.maps.c
            }
        }
    }
}, function (t, e, s) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var n = s(1);
    e.default = {
        data: function () {
            return {letterI: "", letterF: "", letterE: "", balabal: ""}
        }, computed: {
            isBadrd: function () {
                var t = this;
                return this.timer && clearTimeout(this.timer), this.timer = setTimeout(function () {
                    t.timer = 0, t.fgarefa()
                }, 400), this.letterI + this.letterF + this.letterE
            }
        }, methods: {
            fgarefa: function () {
                var t = $(".svg-panel"), e = t.offset(), s = "109 580 280 660 185 664 390.4 807 95 872 294 824".split(" ").map(function (t) {
                    return +t
                }), i = [];
                t.find("i").each(function (t, s) {
                    var n = $(s).offset();
                    i.push(n.top - e.top), i.push(n.left - e.left)
                });
                for (var a = 0; a < s.length; a++)if (Math.abs(i[a] - s[a]) > 2)return void(this.balabal = "");
                this.balabal = "#/" + n.maps.d
            }
        }, mounted: function () {
            this.$log.send({fm: "pv", extra: "step3"}), this.startTime = Date.now()
        }, destroyed: function () {
            astorage.setItem("startTime-3", Date.now() - this.startTime), clearTimeout(this.timer)
        }
    }
}, function (t, e, s) {
    "use strict";
    function n(t) {
        return t && t.__esModule ? t : {default: t}
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var i = s(2), a = n(i), r = s(1), o = s(3), c = n(o), l = s(19), u = n(l);
    e.default = {
        components: {Alert: a.default}, data: function () {
            return {
                alertTitle: "",
                showAlert: !1,
                successTitle: "",
                showSuccess: !1,
                ballStartX: c.default.ballStartX,
                ballStartY: c.default.ballStartY,
                rects: c.default.rects.slice(0),
                stars: c.default.stars.slice(0)
            }
        }, mounted: function () {
            this.$log.send({fm: "pv", extra: "step4"}), this.startTime = Date.now()
        }, methods: {
            doNext: function () {
                this.showSuccess = !1, window.location.href = "#/" + r.maps.e
            }, showMessage: function (t) {
                this.alertTitle = t, this.showAlert = !0
            }, doStart: function () {
                var t = this;
                this.ball && this.ball.dispose();
                var e = new Function("ball", $("#move-ball-text").val());
                this.stars = c.default.stars.slice(0), setTimeout(function () {
                    c.default.starsHidden.forEach(function (e) {
                        t.stars.push(e), t.ball.stars.push(e)
                    })
                }, 2e3), this.ball = new u.default;
                var s = $("#game-ball"), n = this;
                this.ball.on("start", function (t) {
                    s.css({left: t.x, top: t.y})
                }).on("move", function (t) {
                    s.css({left: t.x, top: t.y})
                }).on("impact", function () {
                    n.showMessage("撞车了。。。。")
                }).on("outbound", function () {
                    n.showMessage("出界了。。。。")
                }).on("star", function (t) {
                    n.stars.splice(t.starIndex, 1)
                }).on("success", function (t) {
                    return t.starCount < 3 ? void n.showMessage("至少要`3`个星星呦。。。") : t.time > 6e4 ? void n.showMessage("跑的比蜗牛还慢，该减减肥了。。。") : (astorage.setItem("startTime-4", Date.now() - this.startTime), astorage.setItem("step-4-stars", t.starCount), n.successTitle = "很牛逼啊，吃了" + t.starCount + "个星星，耗时" + Math.round(t.time / 1e3) + "秒", void(n.showSuccess = !0))
                }), e(this.ball.fackBall), this.ball.start()
            }, showPoint: function (t) {
                console.log("x=", t.offsetX, "y=", t.offsetY)
            }
        }
    }
}, function (t, e) {
    "use strict";
    function s() {
        var t = 0, e = [+astorage.getItem("startTime-0"), +astorage.getItem("startTime-1"), +astorage.getItem("startTime-2"), +astorage.getItem("startTime-3"), +astorage.getItem("startTime-4")], s = +astorage.getItem("step-4-stars");
        if (s) {
            for (var n = 0, i = [.9, .7, .9, .8, .9 * (10 - s) / 10], a = 0; a < e.length; a++) {
                if (!e[a])return 0;
                n += e[a] * i[a]
            }
            n = Math.floor(n), t = Math.floor(100 * Math.min(1 - (n - 11e5) / n, 1)), astorage.setItem("score", t), $.post("/game/save", {
                start: +astorage.getItem("startTime"),
                end: Date.now(),
                score: t,
                sum: n,
                detail: JSON.stringify({sum: n, times: e, step4stars: s})
            })
        }
        return t
    }

    Object.defineProperty(e, "__esModule", {value: !0}), e.default = {
        data: function () {
            var t = +astorage.getItem("score");
            t || (t = s());
            var e = +astorage.getItem("startTime"), n = (Date.now() - e) / 1e3;
            return {score: t, elapseTime: Math.round(n / 60) + "分钟"}
        }, mounted: function () {
            this.$log.send({fm: "pv", extra: "step5"})
        }, methods: {
            doRestart: function () {
                astorage.removeItem("startTime"), astorage.removeItem("score"), location.href = "#/", location.reload()
            }
        }
    }
}, function (t, e) {
    "use strict";
    function s(t) {
        if (!t)return 0;
        for (var e = 0, s = 0, n = t.length; s < n; s++)e = 34359738367 & 31 * e + t.charCodeAt(s);
        return e
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var n = (window.PAGE_DATA.userId + "1234567890").slice(0, 15), i = {
        setItem: function (t, e) {
            return localStorage.setItem(s(n + t), e), this
        }, getItem: function (t) {
            return localStorage.getItem(s(n + t))
        }, removeItem: function (t) {
            return localStorage.removeItem(s(n + t)), this
        }, hasItem: function (t) {
            return null == localStorage.getItem(s(n + t))
        }
    };
    window.astorage = i, e.default = i
}, function (t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var s = astorage.getItem("startTime");
    s || (s = Date.now(), astorage.setItem("startTime", s)), e.default = {
        time: s,
        log: {url: "", data: {oper_act: "vue2"}}
    }
}, function (t, e, s) {
    "use strict";
    function n(t) {
        return t && t.__esModule ? t : {default: t}
    }

    var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
    } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, a = s(5), r = n(a);
    r.default.directive("log", {
        bind: function (t, e) {
            var s = e.value, n = "LINK";
            e.modifiers.tab ? n = "TAB" : e.modifiers.btn && (n = "BTN");
            var a = "WA_LOG_" + n;
            t.classList ? t.classList.add(a) : t.className = t.className + " " + a, "object" === i(e.value) && (s = JSON.stringify(s)), t.setAttribute("data-click", s)
        }
    })
}, function (t, e) {
    "use strict";
    function s(t) {
        if (n.url) {
            var e = n.url + $.param($.extend({}, n.data, t)), s = document.createElement("img");
            s.src = e
        }
    }

    var n = {
        url: "http://logger.duapp.com/tj?app=ife&",
        data: {
            t: Date.now(),
            uid: document.cookie.match(/BAIDUID=([^;]+)(?:;|$)/) ? RegExp.$1 : "-",
            from: function () {
                var t = location.search.match(/\bfr=([\w-.%]+)\b/);
                return t ? t[1] : "-"
            }(),
            fm: "-"
        }
    }, i = {BTN: "beha", TAB: "beha", LINK: "click"}, a = function (t) {
        for (var e = t.target, n = /\bWA_LOG_(BTN|TAB|LINK)\b/; e && e !== document;) {
            var a = e.className.match(n);
            if (a) {
                var r = {
                    fm: i[a[1]] || "-",
                    extra: e.getAttribute("data-click") || $(e).closest("[data-click]").attr("data-click") || "-"
                };
                s(r);
                break
            }
            e = e.parentNode
        }
    };
    t.exports = {
        config: function (t) {
            return $.extend(!0, n, t), this
        }, start: function () {
            return document.addEventListener("click", a, !0), this
        }, stop: function () {
            return document.removeEventListener("click", a, !0), this
        }, send: function (t) {
            return s(t), this
        }, init: function () {
            this.start(), this.send({fm: "pv"})
        }
    }
}, function (t, e, s) {
    "use strict";
    function n(t) {
        return t && t.__esModule ? t : {default: t}
    }

    function i(t, e) {
        if (!(t instanceof e))throw new TypeError("Cannot call a class as a function")
    }

    function a(t, e) {
        if (!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function r(t, e) {
        if ("function" != typeof e && null !== e)throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }

    Object.defineProperty(e, "__esModule", {value: !0});
    var o = function () {
        function t(t, e) {
            for (var s = 0; s < e.length; s++) {
                var n = e[s];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
            }
        }

        return function (e, s, n) {
            return s && t(e.prototype, s), n && t(e, n), e
        }
    }(), c = s(3), l = n(c), u = s(20), f = function () {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || function (t) {
                return setTimeout(t, 1e3 / 60)
            }
    }(), d = function (t, e, s) {
        var n = s * Math.sqrt(2) / 2;
        return [[t - s, e], [t, e - s], [t + s, e], [t, e + s], [t - n, e - n], [t + n, e - n], [t + n, e + n], [t - n, e + n]]
    }, v = function (t, e, s, n, i, a) {
        return t >= s && t <= s + i && e >= n && e <= n + a
    }, p = function (t) {
        function e(t, s, n, r) {
            i(this, e);
            var o = a(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
            o.x = 0, o.y = 0, o.startX = t || l.default.ballStartX, o.startY = s || l.default.ballStartY, o.endX = n || l.default.ballEndX, o.endY = r || l.default.ballEndY, o.startTime = 0, o.endTime = 0, o.starCount = 0, o.running = !1, o.waitTime = 0, o.waitStartTime = 0, o.direction = "r", o.events = [], o.rects = [], o.stars = [];
            var c = o;
            return o.fackBall = {
                x: 0, y: 0, direction: "", at: function (t, e, s) {
                    return c.at(t, e, s), this
                }, turnLeft: function () {
                    switch (c.direction) {
                        case"t":
                            c.direction = "l";
                            break;
                        case"l":
                            c.direction = "b";
                            break;
                        case"b":
                            c.direction = "r";
                            break;
                        case"r":
                            c.direction = "t"
                    }
                    return this
                }, turnRight: function () {
                    switch (c.direction) {
                        case"t":
                            c.direction = "r";
                            break;
                        case"r":
                            c.direction = "b";
                            break;
                        case"b":
                            c.direction = "l";
                            break;
                        case"l":
                            c.direction = "t"
                    }
                    return this
                }, turnBack: function () {
                    switch (c.direction) {
                        case"t":
                            c.direction = "b";
                            break;
                        case"b":
                            c.direction = "t";
                            break;
                        case"l":
                            c.direction = "r";
                            break;
                        case"r":
                            c.direction = "l"
                    }
                    return this
                }, wait: function (t) {
                    return c.waitStartTime = Date.now(), c.waitTime = t, this
                }
            }, o
        }

        return r(e, t), o(e, [{
            key: "at", value: function (t, e, s) {
                return this.events.push([t, e, s]), this
            }
        }]), o(e, [{
            key: "dispose", value: function () {
                this.stop(), this.removeAllListeners(), this.events = this.rects = this.stars = null
            }
        }, {
            key: "tick", value: function () {
                if (this.running) {
                    if (this.waitTime)return void(Date.now() - this.waitStartTime > this.waitTime && (this.waitTime = this.waitStartTime = 0));
                    switch (this.direction) {
                        case"l":
                            this.x -= l.default.ballSpeed;
                            break;
                        case"r":
                            this.x += l.default.ballSpeed;
                            break;
                        case"t":
                            this.y -= l.default.ballSpeed;
                            break;
                        case"b":
                            this.y += l.default.ballSpeed
                    }
                    this.emit("move", {x: this.x, y: this.y, direction: this.direction});
                    var t = this.validate();
                    return t ? void this.processAt() : void this.stop()
                }
            }
        }, {
            key: "processAt", value: function () {
                this.fackBall.x = this.x, this.fackBall.y = this.y, this.fackBall.direction = this.direction;
                for (var t, e = this.events, s = this.x, n = this.y, i = l.default.ballSpeed, a = 0; t = e[a]; a++)if (Math.abs(t[0] - s) <= i && Math.abs(t[1] - n) <= i) {
                    t[2].call(this.fackBall, this.fackBall), this.events.splice(a, 1);
                    break
                }
            }
        }, {
            key: "start", value: function () {
                var t = this, e = function e() {
                    t.tick(), t.running && f(e)
                };
                this.x = this.startX, this.y = this.startY, this.rects = l.default.rects.slice(), this.stars = l.default.stars.slice(), this.startTime = Date.now(), this.running = !0, e(), this.emit("start", {
                    x: this.x,
                    y: this.y,
                    direction: this.direction
                })
            }
        }, {
            key: "stop", value: function () {
                this.running = 0, this.endTime = Date.now(), this.emit("stop")
            }
        }, {
            key: "validate", value: function () {
                var t = d(this.x, this.y, l.default.ballSize);
                if (Math.abs(this.x - this.endX) < 10 && Math.abs(this.y - this.endY) < 10)return this.stop(), this.emit("success", {
                    starCount: this.starCount,
                    time: this.endTime - this.startTime
                }), !0;
                for (var e, s = -1, n = this.stars, i = 0; e = n[i]; i++) {
                    for (var a, r = 0; a = t[r]; r++)if (v(a[0], a[1], e[0], e[1], e[2], e[3])) {
                        s = i;
                        break
                    }
                    if (s >= 0)break
                }
                s >= 0 && (this.starCount += 1, this.stars.splice(s, 1), this.emit("star", {starIndex: s}));
                for (var o, c = !0, u = 0; o = t[u]; u++)if (!v(o[0], o[1], -24, 32, 40, 27) && !v(o[0], o[1], 632, 462, 27, 19) && !v(o[0], o[1], 0, 0, l.default.winWidth, l.default.winHeight)) {
                    c = !1;
                    break
                }
                if (!c)return this.emit("outbound"), !1;
                for (var f, p = -1, h = this.rects, m = 0; f = h[m]; m++) {
                    for (var _, b = 0; _ = t[b]; b++)if (v(_[0], _[1], f[0], f[1], f[2], f[3])) {
                        p = m;
                        break
                    }
                    if (p >= 0)break
                }
                return !(p >= 0) || (this.emit("impact", {rectIndex: p}), !1)
            }
        }]), e
    }(u.EventEmitter);
    e.default = p
}, , function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e, s) {
    var n, i;
    s(28), n = s(6);
    var a = s(44);
    i = n = n || {}, "object" != typeof n.default && "function" != typeof n.default || (i = n = n.default), "function" == typeof i && (i = i.options), i.render = a.render, i.staticRenderFns = a.staticRenderFns, t.exports = n
}, function (t, e, s) {
    var n, i;
    s(22), n = s(8);
    var a = s(38);
    i = n = n || {}, "object" != typeof n.default && "function" != typeof n.default || (i = n = n.default), "function" == typeof i && (i = i.options), i.render = a.render, i.staticRenderFns = a.staticRenderFns, t.exports = n
}, function (t, e, s) {
    var n, i;
    s(29), n = s(9);
    var a = s(45);
    i = n = n || {}, "object" != typeof n.default && "function" != typeof n.default || (i = n = n.default), "function" == typeof i && (i = i.options), i.render = a.render, i.staticRenderFns = a.staticRenderFns, t.exports = n
}, function (t, e, s) {
    var n, i;
    s(23), n = s(10);
    var a = s(39);
    i = n = n || {}, "object" != typeof n.default && "function" != typeof n.default || (i = n = n.default), "function" == typeof i && (i = i.options), i.render = a.render, i.staticRenderFns = a.staticRenderFns, t.exports = n
}, function (t, e, s) {
    var n, i;
    s(24), n = s(11);
    var a = s(40);
    i = n = n || {}, "object" != typeof n.default && "function" != typeof n.default || (i = n = n.default), "function" == typeof i && (i = i.options), i.render = a.render, i.staticRenderFns = a.staticRenderFns, t.exports = n
}, function (t, e, s) {
    var n, i;
    s(25), n = s(12);
    var a = s(41);
    i = n = n || {}, "object" != typeof n.default && "function" != typeof n.default || (i = n = n.default), "function" == typeof i && (i = i.options), i.render = a.render, i.staticRenderFns = a.staticRenderFns, t.exports = n
}, function (t, e, s) {
    var n, i;
    s(26), n = s(13);
    var a = s(42);
    i = n = n || {}, "object" != typeof n.default && "function" != typeof n.default || (i = n = n.default), "function" == typeof i && (i = i.options), i.render = a.render, i.staticRenderFns = a.staticRenderFns, t.exports = n
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement;
            t._self._c || e;
            return t._m(0)
        }, staticRenderFns: [function () {
            var t = this, e = t.$createElement, s = t._self._c || e;
            return s("div", {staticClass: "error-view"}, [s("h3", [s("a", {
                staticClass: "title-tip",
                attrs: {href: "#"}
            }, [t._v("当前URL已失效，请返回首页重新进行闯关。")])])])
        }]
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement, s = t._self._c || e;
            return s("div", {staticClass: "step1-view"}, [t._m(0), t._v(" "), s("div", {staticClass: "text-panel"}, [t._v("\n        " + t._s(t.stepUrl) + "\n    ")])])
        }, staticRenderFns: [function () {
            var t = this, e = t.$createElement, s = t._self._c || e;
            return s("h3", [s("b", {staticClass: "title-tip"}, [t._v("Step1")]), t._v("找出下一关的地址")])
        }]
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement, s = t._self._c || e;
            return s("div", {staticClass: "step2-view"}, [t._m(0), t._v(" "), s("div", {
                directives: [{
                    name: "log",
                    rawName: "v-log",
                    value: "step2-panel",
                    expression: "'step2-panel'"
                }], staticClass: "lock-panel WA_LOG_BTN"
            }, [t._m(1)]), t._v(" "), s("alert", {
                attrs: {title: "well done!", show: t.showSuccess},
                on: {click: t.doNext}
            })], 1)
        }, staticRenderFns: [function () {
            var t = this, e = t.$createElement, s = t._self._c || e;
            return s("h3", [s("b", {staticClass: "title-tip"}, [t._v("Step2")]), t._v("上帝为你关上一扇门，却打开了一扇`窗`，我们需要找到窗的`高度`，才能爬出窗外")])
        }, function () {
            var t = this, e = t.$createElement, s = t._self._c || e;
            return s("div", {staticClass: "lock-bg"}, [s("div", {staticClass: "lock-win num1"}, [s("div", {staticClass: "n1"}, [t._v("0"), s("br"), t._v("1"), s("br"), t._v("2"), s("br"), t._v("3"), s("br"), t._v("4"), s("br"), t._v("5"), s("br"), t._v("6"), s("br"), t._v("7"), s("br"), t._v("8"), s("br"), t._v("9")])]), t._v(" "), s("div", {staticClass: "lock-win num2"}, [s("div", {staticClass: "n2"}, [t._v("0"), s("br"), t._v("1"), s("br"), t._v("2"), s("br"), t._v("3"), s("br"), t._v("4"), s("br"), t._v("5"), s("br"), t._v("6"), s("br"), t._v("7"), s("br"), t._v("8"), s("br"), t._v("9")])]), t._v(" "), s("div", {staticClass: "lock-win num3"}, [s("div", {staticClass: "n3"}, [t._v("0"), s("br"), t._v("1"), s("br"), t._v("2"), s("br"), t._v("3"), s("br"), t._v("4"), s("br"), t._v("5"), s("br"), t._v("6"), s("br"), t._v("7"), s("br"), t._v("8"), s("br"), t._v("9")])])])
        }]
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement, s = t._self._c || e;
            return s("div", {staticClass: "step3-view"}, [t._m(0), t._v(" "), s("div", {staticClass: "svg-panel"}, [s("div", {
                staticClass: "ife-bg letter-i",
                style: t.letterI
            }, [s("i"), s("i")]), t._v(" "), s("div", {
                staticClass: "ife-bg letter-f",
                style: t.letterF
            }, [s("i"), s("i")]), t._v(" "), s("div", {
                staticClass: "ife-bg letter-e",
                style: t.letterE
            }, [s("i"), s("i")]), t._v(" "), s("div", {staticClass: "ife-bg-gray"}), t._v(" "), t.isBadrd && t.balabal ? s("div", {staticClass: "success-cover"}, [s("a", {
                directives: [{
                    name: "log",
                    rawName: "v-log",
                    value: "step3-nextlink",
                    expression: "'step3-nextlink'"
                }], staticClass: "WA_LOG_BTN", attrs: {href: t.balabal}
            }, [t._v("well done!")])]) : t._e()]), t._v(" "), s("div", {staticClass: "css-panel"}, [s("div", [s("p", [t._v(".letter-i {")]), t._v(" "), s("textarea", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.letterI,
                    expression: "letterI"
                }], attrs: {placeholder: "在这里输入css"}, domProps: {value: t._s(t.letterI)}, on: {
                    input: function (e) {
                        e.target.composing || (t.letterI = e.target.value)
                    }
                }
            }), t._v(" "), s("p", [t._v("}")])]), t._v(" "), s("div", [s("p", [t._v(".letter-f {")]), t._v(" "), s("textarea", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.letterF,
                    expression: "letterF"
                }], attrs: {placeholder: "在这里输入css"}, domProps: {value: t._s(t.letterF)}, on: {
                    input: function (e) {
                        e.target.composing || (t.letterF = e.target.value)
                    }
                }
            }), t._v(" "), s("p", [t._v("}")])]), t._v(" "), s("div", [s("p", [t._v(".letter-e {")]), t._v(" "), s("textarea", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.letterE,
                    expression: "letterE"
                }], attrs: {placeholder: "在这里输入css"}, domProps: {value: t._s(t.letterE)}, on: {
                    input: function (e) {
                        e.target.composing || (t.letterE = e.target.value)
                    }
                }
            }), t._v(" "), s("p", [t._v("}")])])])])
        }, staticRenderFns: [function () {
            var t = this, e = t.$createElement, s = t._self._c || e;
            return s("h3", [s("b", {staticClass: "title-tip"}, [t._v("Step3")]), t._v("百度前端学院（IFE），面向大学生的前端技术学习平台，请在底部填写css，将彩色`IFE`字母移动到指定位置")])
        }]
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement, s = t._self._c || e;
            return s("div", {staticClass: "step4-view"}, [t._m(0), t._v(" "), s("div", {staticClass: "ball-wrapper"}, [s("div", {
                staticClass: "ball-container",
                on: {click: t.showPoint}
            }, [s("div", {
                staticClass: "ball",
                style: {left: t.ballStartX + "px", top: t.ballStartY + "px"},
                attrs: {id: "game-ball"}
            }), t._v(" "), s("div", {staticClass: "entry"}), t._v(" "), s("div", {
                staticClass: "entry",
                staticStyle: {left: "632px", top: "462px", width: "27px", height: "19px"}
            }), t._v(" "), t._l(t.stars, function (t) {
                return s("i", {
                    staticClass: "star-bg star",
                    style: {left: t[0] + "px", top: t[1] + "px", width: t[2] + "px", height: t[3] + "px"}
                })
            }), t._v(" "), t._l(t.rects, function (t) {
                return s("i", {
                    staticClass: "rect",
                    style: {left: t[0] + "px", top: t[1] + "px", width: t[2] + "px", height: t[3] + "px"}
                })
            })], 2)]), t._v(" "), s("div", {staticClass: "code-panel"}, [s("button", {
                directives: [{
                    name: "log",
                    rawName: "v-log",
                    value: "step4-startbtn",
                    expression: "'step4-startbtn'"
                }], staticClass: "btn-start WA_LOG_BTN", on: {click: t.doStart}
            }, [t._v("开始")]), t._v(" "), t._m(1)]), t._v(" "), s("alert", {
                attrs: {title: t.alertTitle, show: t.showAlert},
                on: {
                    click: function (e) {
                        t.showAlert = !1
                    }
                }
            }), t._v(" "), s("alert", {attrs: {title: t.successTitle, show: t.showSuccess}, on: {click: t.doNext}})], 1)
        }, staticRenderFns: [function () {
            var t = this, e = t.$createElement, s = t._self._c || e;
            return s("h3", [s("b", {staticClass: "title-tip"}, [t._v("Step4")]), t._v("在输入框中填入代码，控制小球穿过障碍物，至少吃到3个星星，"), s("br"), t._v("\n        吃的星星越多，得分越高。\n        ")])
        }, function () {
            var t = this, e = t.$createElement, s = t._self._c || e;
            return s("div", {staticClass: "code-part"}, [s("p", [t._v("function moveBall(ball) {")]), t._v(" "), s("textarea", {
                attrs: {
                    id: "move-ball-text",
                    placeholder: "调用`ball`的api移动小球，例如`ball.at(82, 46, ball => ball.turnRight())`"
                }
            }), t._v(" "), s("p", [t._v("}")])])
        }]
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement, s = t._self._c || e;
            return s("div", {staticClass: "step5-view"}, [s("h1", [t._v("前端技术学院课程任务将于2月24日正式上线，敬请期待！")]), t._v(" "), s("p", [t._v("闯关用时 "), s("b", {staticStyle: {color: "red"}}, [t._v(t._s(t.elapseTime))]), t._v("，得分 "), s("b", {staticStyle: {color: "red"}}, [t._v(t._s(t.score))])]), t._v(" "), s("a", {
                directives: [{
                    name: "log",
                    rawName: "v-log",
                    value: "step5-restart",
                    expression: "'step5-restart'"
                }], staticClass: "link WA_LOG_BTN", on: {click: t.doRestart}
            }, [t._v("再来一遍热身任务")]), t._v(" "), s("a", {
                directives: [{
                    name: "log",
                    rawName: "v-log",
                    value: "step5-goto-home",
                    expression: "'step5-goto-home'"
                }], staticClass: "link WA_LOG_BTN", attrs: {href: "http://ife.baidu.com"}
            }, [t._v("进入学院首页")])])
        }, staticRenderFns: []
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement, s = t._self._c || e;
            return s("div", {staticClass: "app"}, [s("router-view", {staticClass: "viewport"})], 1)
        }, staticRenderFns: []
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement, s = t._self._c || e;
            return s("div", {staticClass: "index-view"}, [t._m(0), t._v(" "), s("div", {
                staticClass: "points-container",
                attrs: {id: "points-container"},
                on: {mousemove: t.mousemove, click: t.click, contextmenu: t.contextmenu}
            }, [s("svg", [s("polyline", {attrs: {points: t.linePath}})]), t._v(" "), t._l(t.points, function (t) {
                return s("i", {style: {left: t.x + "px", top: t.y + "px"}})
            })], 2), t._v(" "), s("p", {staticClass: "note"}, [t._v("请使用pc浏览器打开，chrome / firefox / safari / ie9+")]), t._v(" "), s("alert", {
                attrs: {
                    title: t.alertTitle,
                    show: t.showAlert
                }, on: {
                    click: function (e) {
                        t.showAlert = !1
                    }
                }
            }), t._v(" "), s("alert", {attrs: {title: "well done!", show: t.showSuccess}, on: {click: t.doNext}})], 1)
        }, staticRenderFns: [function () {
            var t = this, e = t.$createElement, s = t._self._c || e;
            return s("h3", [s("b", {staticClass: "title-tip"}, [t._v("Unlock")]), t._v("一笔画出折线，穿过图中的9个点，"), s("b", {staticStyle: {}}, [t._v("折线个数尽量少")]), t._v("。（按`enter`确定，按`右键`重新画线，按`esc`取消上一条线段）")])
        }]
    }
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement, s = t._self._c || e;
            return t.show ? s("div", {staticClass: "ui-alert-mask"}, [s("div", {staticClass: "ui-alert-panel"}, [s("p", [t._v(t._s(t.title))]), t._v(" "), s("div", {
                staticClass: "ui-alert-confirm",
                on: {click: t.doConfirm}
            }, [t._v("确定")])])]) : t._e()
        }, staticRenderFns: []
    }
}]);
//# sourceMappingURL=app-0b3c5eee.js.map
