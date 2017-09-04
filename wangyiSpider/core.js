(function() {
    window.NEJ = window.NEJ || {};
    NEJ.O = {};
    NEJ.R = [];
    NEJ.F = function() {
        return !1
    }
    ;
    NEJ.P = function(AO2x) {
        if (!AO2x || !AO2x.length)
            return null;
        var Ti9Z = window;
        for (var a = AO2x.split("."), l = a.length, i = a[0] == "window" ? 1 : 0; i < l; Ti9Z = Ti9Z[a[i]] = Ti9Z[a[i]] || {},
        i++)
            ;
        return Ti9Z
    }
    ;
    NEJ.Q = function(bL3x, AO2x) {
        bL3x = bL3x || NEJ.O;
        var bs3x = AO2x.split(".");
        for (var i = 0, l = bs3x.length; i < l; i++) {
            bL3x = bL3x[bs3x[i]];
            if (!bL3x)
                break
        }
        return bL3x
    }
    ;
    NEJ.C = function() {
        var brW6Q = function() {
            return NEJ.O.toString.call(arguments[0]) != "[object Function]"
        };
        var brZ6T = function(A3x, bv3x) {
            for (var x in bv3x)
                if (A3x == bv3x[x])
                    return x;
            return null
        };
        var blJ4N = {
            cl4p: 0,
            bk3x: 1,
            bD3x: 2,
            bQ3x: 3,
            bJ3x: 4,
            eV5a: 5,
            jM7F: 6,
            ei5n: 7
        }
          , sA9r = {
            cs4w: 0,
            bl3x: 1,
            bH3x: 2,
            cb4f: 3,
            bM3x: 4,
            gy5D: 5,
            kL7E: 6,
            fU5Z: 7
        };
        return function() {
            var fi5n = function() {
                this.bsD6x();
                return this.cl4p.apply(this, arguments)
            };
            fi5n.prototype.bsD6x = NEJ.F;
            fi5n.prototype.cl4p = NEJ.F;
            fi5n.O3x = function(zm1x, bto6i) {
                if (brW6Q(zm1x))
                    return;
                if (bto6i == null || !!bto6i)
                    NEJ.X(this, zm1x, brW6Q);
                this.cgf7Y = zm1x;
                this.cf4j = zm1x.prototype;
                var bE3x = function() {};
                bE3x.prototype = zm1x.prototype;
                this.prototype = new bE3x;
                var AW2x = this.prototype;
                AW2x.constructor = this;
                var dP5U;
                for (var x in blJ4N) {
                    dP5U = brZ6T(blJ4N[x], sA9r);
                    if (!dP5U || !this.cf4j[x])
                        continue;
                    AW2x[x] = function(T3x) {
                        return function() {
                            this[T3x].apply(this, arguments)
                        }
                    }(dP5U)
                }
                var AZ2x = {};
                for (var x in sA9r) {
                    dP5U = brZ6T(sA9r[x], blJ4N);
                    if (!dP5U || !this.cf4j[dP5U])
                        continue;
                    AZ2x[dP5U] = zm1x;
                    AW2x[x] = function(T3x) {
                        return function() {
                            var m3x, bE3x = this.bcS2x[T3x], ban2x = bE3x.prototype[T3x];
                            this.bcS2x[T3x] = bE3x.cgf7Y || zm1x;
                            if (!!ban2x)
                                m3x = ban2x.apply(this, arguments);
                            this.bcS2x[T3x] = zm1x;
                            return m3x
                        }
                    }(dP5U)
                }
                AW2x.bsD6x = function() {
                    this.bcS2x = NEJ.X({}, AZ2x)
                }
                ;
                AW2x.cyn2x = AW2x.cs4w;
                return AW2x
            }
            ;
            return fi5n
        }
    }();
    NEJ.X = function(gd5i, bN3x, dC4G) {
        if (!gd5i || !bN3x)
            return gd5i;
        dC4G = dC4G || NEJ.F;
        for (var x in bN3x) {
            if (bN3x.hasOwnProperty(x) && !dC4G(bN3x[x], x))
                gd5i[x] = bN3x[x]
        }
        return gd5i
    }
    ;
    NEJ.EX = function(gd5i, bN3x) {
        if (!gd5i || !bN3x)
            return gd5i;
        for (var x in gd5i) {
            if (gd5i.hasOwnProperty(x) && bN3x[x] != null)
                gd5i[x] = bN3x[x]
        }
        return gd5i
    }
    ;
    var IX4b = Function.prototype;
    IX4b.ed5i = function(lY7R, bfq3x) {
        var f = NEJ.F
          , bfq3x = bfq3x || f
          , lY7R = lY7R || f
          , dd4h = this;
        return function() {
            var d2x = {
                args: NEJ.R.slice.call(arguments, 0)
            };
            lY7R(d2x);
            if (!d2x.stopped) {
                d2x.value = dd4h.apply(this, d2x.args);
                bfq3x(d2x)
            }
            return d2x.value
        }
    }
    ;
    IX4b.g3x = function() {
        var bg3x = arguments
          , gd5i = arguments[0]
          , blN5S = this;
        return function() {
            var vw0x = NEJ.R.slice.call(bg3x, 1);
            NEJ.R.push.apply(vw0x, arguments);
            return blN5S.apply(gd5i || window, vw0x)
        }
    }
    ;
    IX4b.dW5b = function() {
        var bg3x = arguments
          , gd5i = NEJ.R.shift.call(bg3x)
          , blN5S = this;
        return function() {
            NEJ.R.push.apply(arguments, bg3x);
            return blN5S.apply(gd5i || window, arguments)
        }
    }
    ;
    var IX4b = String.prototype;
    if (!IX4b.trim) {
        IX4b.trim = function() {
            var cO4S = /(?:^\s+)|(?:\s+$)/g;
            return function() {
                return this.replace(cO4S, "")
            }
        }()
    }
    if (!window.MWF)
        window.MWF = NEJ;
    if (!window.mwf)
        window.mwf = NEJ.P("nej");
    if (!window.console) {
        NEJ.P("console").log = NEJ.F;
        NEJ.P("console").error = NEJ.F
    }
    var lt, gt, amp, nbsp, quot, apos, copy, reg
})();
(function() {
    var c2x = NEJ.P
      , X3x = NEJ.O
      , M3x = c2x("nej.p")
      , bah2x = window.navigator.platform
      , sy9p = window.navigator.userAgent;
    var kb7U = {
        mac: bah2x,
        win: bah2x,
        linux: bah2x,
        ipad: sy9p,
        ipod: sy9p,
        iphone: bah2x,
        android: sy9p
    };
    M3x.bag2x = kb7U;
    for (var x in kb7U)
        kb7U[x] = (new RegExp(x,"i")).test(kb7U[x]);
    kb7U.ios = kb7U.ipad || kb7U.iphone || kb7U.ipod;
    kb7U.tablet = kb7U.ipad;
    kb7U.desktop = kb7U.mac || kb7U.win || kb7U.linux && !kb7U.android;
    var hL6F = {
        engine: "unknow",
        release: "unknow",
        browser: "unknow",
        version: "unknow",
        prefix: {
            css: "",
            pro: "",
            clz: ""
        }
    };
    M3x.cR4V = hL6F;
    if (/msie\s+(.*?);/i.test(sy9p) || /trident\/.+rv:([\d\.]+)/i.test(sy9p)) {
        hL6F.engine = "trident";
        hL6F.browser = "ie";
        hL6F.version = RegExp.$1;
        hL6F.prefix = {
            css: "ms",
            pro: "ms",
            clz: "MS",
            evt: "MS"
        };
        var nQ8I = {
            6: "2.0",
            7: "3.0",
            8: "4.0",
            9: "5.0",
            10: "6.0",
            11: "7.0"
        };
        hL6F.release = nQ8I[document.documentMode] || nQ8I[parseInt(hL6F.version)]
    } else if (/webkit\/?([\d.]+?)(?=\s|$)/i.test(sy9p)) {
        hL6F.engine = "webkit";
        hL6F.release = RegExp.$1 || "";
        hL6F.prefix = {
            css: "webkit",
            pro: "webkit",
            clz: "WebKit"
        }
    } else if (/rv\:(.*?)\)\s+gecko\//i.test(sy9p)) {
        hL6F.engine = "gecko";
        hL6F.release = RegExp.$1 || "";
        hL6F.browser = "firefox";
        hL6F.prefix = {
            css: "Moz",
            pro: "moz",
            clz: "Moz"
        };
        if (/firefox\/(.*?)(?=\s|$)/i.test(sy9p))
            hL6F.version = RegExp.$1 || ""
    } else if (/presto\/(.*?)\s/i.test(sy9p)) {
        hL6F.engine = "presto";
        hL6F.release = RegExp.$1 || "";
        hL6F.browser = "opera";
        hL6F.prefix = {
            css: "O",
            pro: "o",
            clz: "O"
        };
        if (/version\/(.*?)(?=\s|$)/i.test(sy9p))
            hL6F.version = RegExp.$1 || ""
    }
    if (hL6F.browser == "unknow") {
        var nQ8I = ["chrome", "maxthon", "safari"];
        for (var i = 0, l = nQ8I.length, T3x; i < l; i++) {
            T3x = nQ8I[i] == "safari" ? "version" : nQ8I[i];
            if ((new RegExp(T3x + "/(.*?)(?=\\s|$)","i")).test(sy9p)) {
                hL6F.browser = nQ8I[i];
                hL6F.version = RegExp.$1.trim();
                break
            }
        }
    }
    M3x.buB7u = {};
    var baa2x = hL6F.engine != "trident";
    M3x.ms7l = {
        gecko: hL6F.engine != "gecko",
        webkit: hL6F.engine != "webkit",
        presto: hL6F.engine != "presto",
        trident0: baa2x || hL6F.release > "2.0",
        trident1: baa2x || hL6F.release < "6.0",
        trident2: baa2x || hL6F.release > "3.0",
        trident: baa2x || hL6F.release >= "6.0"
    }
})();
(function() {
    var iy6s = NEJ.P("nej.c")
      , Q3x = {};
    var blY5d = function() {
        var cO4S = /^([\w]+?:\/\/.*?(?=\/|$))/i;
        return function(V3x) {
            V3x = V3x || "";
            if (cO4S.test(V3x))
                return RegExp.$1;
            return location.protocol + "//" + location.host
        }
    }();
    var Pj7c = function() {
        var buH7A = function(j3x, bv3x) {
            if (!j3x || !j3x.length)
                return;
            for (var i = 0, l = j3x.length, kQ7J; i < l; i++) {
                kQ7J = j3x[i];
                if (kQ7J.indexOf("://") > 0)
                    bv3x[blY5d(kQ7J)] = kQ7J
            }
        };
        var bc3x = {
            portrait: {
                name: "portrait",
                dft: "portrait/"
            },
            "ajax.swf": {
                name: "ajax",
                dft: "nej_proxy_flash.swf"
            },
            "chart.swf": {
                name: "chart",
                dft: "nej_flex_chart.swf"
            },
            "audio.swf": {
                name: "audio",
                dft: "nej_player_audio.swf"
            },
            "video.swf": {
                name: "video",
                dft: "nej_player_video.swf"
            },
            "clipboard.swf": {
                name: "clipboard",
                dft: "nej_clipboard.swf"
            }
        };
        return function(bN3x) {
            iy6s.IQ4U("root", bN3x.root || "/res/");
            var bjl4p, fu5z = iy6s.z3x("root");
            for (var x in bc3x) {
                bjl4p = bc3x[x];
                iy6s.IQ4U(x, bN3x[bjl4p.name] || fu5z + bjl4p.dft)
            }
            var yM1x = bN3x.p_csrf;
            if (yM1x == !0) {
                yM1x = {
                    cookie: "AntiCSRF",
                    param: "AntiCSRF"
                }
            }
            iy6s.IQ4U("csrf", NEJ.EX({
                cookie: "",
                param: ""
            }, yM1x));
            Q3x.frames = {};
            buH7A(bN3x.p_frame, Q3x.frames);
            Q3x.flashs = {};
            buH7A(bN3x.p_flash, Q3x.flashs)
        }
    }();
    iy6s.IQ4U = function(J3x, A3x) {
        Q3x[J3x] = A3x
    }
    ;
    iy6s.z3x = function(J3x) {
        return Q3x[J3x]
    }
    ;
    iy6s.bZB5G = function(V3x) {
        var vp0x = blY5d(V3x);
        return Q3x.frames[vp0x] || vp0x + "/res/nej_proxy_frame.html"
    }
    ;
    iy6s.cdJ6D = function(V3x) {
        return Q3x.flashs[blY5d(V3x)]
    }
    ;
    Pj7c(window.NEJ_CONF || NEJ.O)
})();
(function() {
    var c2x = NEJ.P
      , M3x = c2x("nej.p")
      , iy6s = c2x("nej.c")
      , bN3x = window.NEJ_CONF || NEJ.O;
    if (M3x.ms7l.trident)
        return;
    iy6s.IQ4U("storage.swf", bN3x.storage || iy6s.z3x("root") + "nej_storage.swf");
    if (M3x.cR4V.release < "4.0") {
        iy6s.IQ4U("blank.png", bN3x.blank || iy6s.z3x("root") + "nej_blank.gif")
    }
    var j3x = bN3x.xdr
      , fW5b = /^(https?:\/\/.*?)(?=\/|$)/i
      , jw6q = /[\/?=&]/i;
    var bvw7p = function(V3x) {
        return (fW5b.test(V3x) ? RegExp.$1 : "").toLowerCase()
    };
    if (!!j3x && !!j3x.length)
        for (var i = j3x.length - 1, V3x, J3x; i >= 0; i--) {
            V3x = j3x[i];
            J3x = bvw7p(V3x);
            if (!!J3x)
                iy6s.IQ4U(J3x, V3x)
        }
    iy6s.cya1x = function(V3x) {
        var J3x = bvw7p(V3x);
        if (!J3x) {
            if (jw6q.test(V3x)) {
                J3x = location.protocol + "//" + location.host
            } else if (V3x.indexOf("://") < 0) {
                J3x = location.protocol + "//" + V3x
            } else {
                J3x = V3x
            }
        }
        return iy6s.z3x(J3x) || J3x + "/res/nej_xdomain.html"
    }
})();
(function() {
    var c2x = NEJ.P
      , iy6s = c2x("nej.c")
      , M3x = c2x("nej.g")
      , fV5a = +(new Date);
    M3x.cxW1x = 1e4 - fV5a;
    M3x.biS4W = 10001 - fV5a;
    M3x.cxV1x = 10002 - fV5a;
    M3x.bwl7e = 10003 - fV5a;
    M3x.bPg2x = 10004 - fV5a;
    M3x.cxP1x = 10005 - fV5a;
    M3x.blW5b = 10006 - fV5a;
    M3x.bRL4P = 10007 - fV5a;
    M3x.xf1x = "Content-Type";
    M3x.cxK1x = "text/plain";
    M3x.BC2x = "multipart/form-data";
    M3x.bRV4Z = "application/x-www-form-urlencoded";
    M3x.bco2x = iy6s.z3x("blank.png") || "data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
})();
(function() {
    var c2x = NEJ.P
      , fc5h = NEJ.R
      , M3x = c2x("nej.p")
      , a2x = c2x("nej.e")
      , h3x = c2x("nej.v")
      , k3x = c2x("nej.u")
      , bb3x = c2x("nej.h");
    var lb7U = M3x.cR4V.prefix
      , bwW7P = M3x.buB7u
      , bXd5i = {
        scale: "scale({x|1},{y|1})",
        rotate: "rotate({a})",
        translate: "translate({x},{y})"
    }
      , cbb6V = {
        scale: "scale3d({x|1},{y|1},{z|1})",
        rotate: "rotate3d({x},{y},{z},{a})",
        translate: "translate3d({x},{y},{z})"
    }
      , MS5X = {
        transition: !0,
        transform: !0,
        animation: !0,
        keyframes: !0,
        box: !0,
        "box-pack": !0,
        "box-flex": !0,
        marquee: !0,
        "border-radius": !0,
        "user-select": !0
    };
    var Pj7c = function() {
        var sg9X = bb3x.bzn8f();
        bwW7P.css3d = !!sg9X && sg9X.m41 != null;
        var cO4S = /-([a-z])/g;
        for (var x in MS5X) {
            MS5X[bzI8A(x)] = MS5X[x]
        }
    };
    var bzI8A = function() {
        var cO4S = /-([a-z])/g;
        return function(T3x) {
            T3x = T3x || "";
            return T3x.replace(cO4S, function($1, $2) {
                return $2.toUpperCase()
            })
        }
    }();
    var bzN8F = function(T3x) {
        return (!bwW7P.css3d ? bXd5i : cbb6V)[T3x]
    };
    var bAn8f = function() {
        var cO4S = /\s+/;
        return function(fi5n) {
            fi5n = (fi5n || "").trim();
            return !!fi5n ? fi5n.split(cO4S) : null
        }
    }();
    var ZF1x = function(E3x, t3x, fi5n) {
        E3x = a2x.z3x(E3x);
        if (!E3x)
            return;
        k3x.be3x(bAn8f(fi5n), function(dI4M) {
            E3x.classList[t3x](dI4M)
        })
    };
    bb3x.IA4E = function(j3x) {
        return fc5h.slice.call(j3x, 0)
    }
    ;
    bb3x.bpR6L = function(E3x) {
        return bb3x.IA4E(E3x.children)
    }
    ;
    bb3x.bqo6i = function(E3x, fi5n) {
        return bb3x.IA4E(E3x.getElementsByClassName(fi5n))
    }
    ;
    bb3x.bqv6p = function(E3x, Ir4v) {
        ZF1x(E3x, "add", Ir4v)
    }
    ;
    bb3x.baK2x = function(E3x, Io4s) {
        ZF1x(E3x, "remove", Io4s)
    }
    ;
    bb3x.Kx5C = function(E3x, Io4s, Ir4v) {
        ZF1x(E3x, "remove", Io4s);
        ZF1x(E3x, "add", Ir4v)
    }
    ;
    bb3x.bcL2x = function(E3x, fi5n) {
        E3x = a2x.z3x(E3x);
        if (!E3x)
            return !1;
        var j3x = E3x.classList;
        if (!j3x || !j3x.length)
            return !1;
        return k3x.cW4a(bAn8f(fi5n), function(dI4M) {
            return j3x.contains(dI4M)
        }) >= 0
    }
    ;
    bb3x.bdh2x = function(E3x, dI4M) {}
    ;
    bb3x.bdK2x = function(E3x) {}
    ;
    bb3x.beY3x = function(fF5K, mR8J) {
        fF5K.selectionEnd = mR8J.end || 0;
        fF5K.selectionStart = mR8J.start || 0;
        fF5K.focus()
    }
    ;
    bb3x.bgd3x = function(fF5K) {
        return {
            end: fF5K.selectionEnd,
            start: fF5K.selectionStart
        }
    }
    ;
    bb3x.bgA3x = function() {
        var BV2x = function(dI4M, d2x) {
            var E3x = h3x.U3x(d2x);
            if (!E3x.value)
                a2x.w3x(E3x, dI4M)
        };
        var Ib4f = function(dI4M, d2x) {
            a2x.y3x(h3x.U3x(d2x), dI4M)
        };
        return function(E3x, eG5L, dI4M) {
            if (eG5L == 1) {
                h3x.s3x(E3x, "blur", BV2x.g3x(null, dI4M))
            }
            if (eG5L == 1 || eG5L == -1) {
                h3x.s3x(E3x, "focus", Ib4f.g3x(null, dI4M))
            }
        }
    }();
    bb3x.bja4e = function(G3x) {
        return (new XMLSerializer).serializeToString(G3x) || ""
    }
    ;
    bb3x.bjA4E = function(zI2x) {
        var fu5z = (new DOMParser).parseFromString(zI2x, "text/xml").documentElement;
        return fu5z.nodeName == "parsererror" ? null : fu5z
    }
    ;
    bb3x.bjG4K = function(E3x) {}
    ;
    bb3x.mN8F = function(E3x) {
        return null
    }
    ;
    bb3x.bkg4k = function(E3x) {
        return null
    }
    ;
    bb3x.blz4D = function(dF4J) {}
    ;
    bb3x.blF4J = function() {
        var bg3x = bb3x.IA4E(arguments);
        bg3x[0] = a2x.z3x(bg3x[0]);
        if (!bg3x[0])
            return null;
        bg3x[1] = (bg3x[1] || "").toLowerCase();
        if (!bg3x[1])
            return null;
        return bg3x
    }
    ;
    bb3x.zU2x = function() {
        var vd0x = {
            touchstart: "mousedown",
            touchmove: "mousemove",
            touchend: "mouseup"
        }
          , iA6u = {
            transitionend: "TransitionEnd",
            animationend: "AnimationEnd",
            animationstart: "AnimationStart",
            animationiteration: "AnimationIteration"
        };
        var ckQ8I = function(t3x) {
            return (lb7U.evt || lb7U.pro) + t3x
        };
        return function() {
            var bg3x = bb3x.blF4J.apply(bb3x, arguments);
            if (!bg3x)
                return;
            var Zf1x = iA6u[bg3x[1]]
              , Zc1x = vd0x[bg3x[1]];
            if (!!Zf1x) {
                bg3x[4] = bg3x[1];
                bg3x[1] = ckQ8I(Zf1x)
            } else if (!!Zc1x) {
                var T3x = "on" + bg3x[1];
                if (!(T3x in bg3x[0])) {
                    bg3x[4] = bg3x[1];
                    bg3x[1] = Zc1x
                }
            }
            return bg3x
        }
    }();
    bb3x.bnI5N = function() {
        var bg3x = arguments;
        bg3x[0].addEventListener(bg3x[1], bg3x[2], !!bg3x[3])
    }
    ;
    bb3x.YZ1x = function() {
        var bg3x = arguments;
        bg3x[0].removeEventListener(bg3x[1], bg3x[2], !!bg3x[3])
    }
    ;
    bb3x.boo5t = function(E3x, t3x, e3x) {
        var d2x = document.createEvent("Event");
        d2x.initEvent(t3x, !0, !0);
        NEJ.X(d2x, e3x);
        E3x.dispatchEvent(d2x)
    }
    ;
    bb3x.bzn8f = function() {
        var fW5b = /\((.*?)\)/
          , jw6q = /\s*,\s*/
          , j3x = ["m11", "m12", "m21", "m22", "m41", "m42"];
        var YX1x = function(sg9X) {
            var in6h = {};
            if (fW5b.test(sg9X || "")) {
                k3x.be3x(RegExp.$1.split(jw6q), function(A3x, r3x) {
                    in6h[j3x[r3x]] = A3x || ""
                })
            }
            return in6h
        };
        return function(sg9X) {
            if (!!window.CSSMatrix)
                return new CSSMatrix(sg9X);
            var T3x = lb7U.clz + "CSSMatrix";
            if (!!window[T3x])
                return new window[T3x](sg9X || "");
            return YX1x(sg9X)
        }
    }();
    bb3x.bAp8h = function() {
        var cO4S = /\{(.*?)\}/g;
        return function(T3x, bv3x) {
            bv3x = bv3x || o;
            var oU8M = bzN8F(T3x);
            return !oU8M ? "" : oU8M.replace(cO4S, function($1, $2) {
                var bs3x = $2.split("|");
                return bv3x[bs3x[0]] || bs3x[1] || "0"
            })
        }
    }();
    bb3x.baQ2x = function(E3x, T3x, A3x) {
        E3x.style[bb3x.bAA8s(T3x)] = A3x
    }
    ;
    bb3x.bAA8s = function() {
        var cO4S = /^[a-z]/
          , bbd2x = lb7U.css;
        var cmG9x = function(T3x) {
            return T3x.replace(cO4S, function($1) {
                return bbd2x + $1.toUpperCase()
            })
        };
        return function(T3x) {
            T3x = bzI8A(T3x);
            var cmH9y = bb3x.cmJ9A(T3x, MS5X);
            return cmH9y ? cmG9x(T3x) : T3x
        }
    }();
    bb3x.cmJ9A = function() {
        var cO4S = /^([a-z]+?)[A-Z]/;
        return function(T3x, bv3x) {
            if (!bv3x[T3x]) {
                if (cO4S.test(T3x))
                    T3x = RegExp.$1
            }
            return !!bv3x[T3x]
        }
    }();
    bb3x.cmP9G = function() {
        var cO4S = /\$<(.*?)>/gi
          , bbd2x = "-" + lb7U.css.toLowerCase() + "-";
        return function(jp6j) {
            return jp6j.replace(cO4S, function($1, $2) {
                var et5y = $2
                  , bs3x = et5y.split("|")
                  , oU8M = bzN8F(bs3x[0]);
                if (!!oU8M) {
                    return bb3x.bAp8h(bs3x[0], k3x.hj6d(bs3x[1]))
                }
                return !bb3x.cmR9I(et5y, MS5X) ? et5y : bbd2x + et5y
            })
        }
    }();
    bb3x.cmR9I = function(T3x, bv3x) {
        return !!bv3x[T3x]
    }
    ;
    bb3x.bdr2x = function(cd4h, jp6j) {
        cd4h.textContent = jp6j
    }
    ;
    bb3x.bea3x = function(cd4h, jp6j) {
        var ww1x = cd4h.sheet
          , br3x = ww1x.cssRules.length;
        ww1x.insertRule(jp6j, br3x);
        return ww1x.cssRules[br3x]
    }
    ;
    bb3x.cwM1x = function(E3x, e3x) {}
    ;
    bb3x.YS1x = function(YR1x) {
        return (YR1x || "").toLowerCase() != "transparent"
    }
    ;
    bb3x.bPL2x = function(E3x) {}
    ;
    bb3x.bhk3x = function(E3x, T3x) {
        if (!!E3x.getAttribute)
            return E3x.getAttribute(T3x);
        return ""
    }
    ;
    bb3x.YP0x = function(fd5i) {
        a2x.cK4O(fd5i)
    }
    ;
    Pj7c()
})();
(function() {
    var c2x = NEJ.P
      , a2x = c2x("nej.e")
      , h3x = c2x("nej.v")
      , M3x = c2x("nej.p")
      , bb3x = c2x("nej.h");
    if (M3x.ms7l.trident0)
        return;
    var fV5a = +(new Date);
    Q3x = {};
    bb3x.bdh2x = bb3x.bdh2x.ed5i(function(d2x) {
        d2x.stopped = !0;
        var bg3x = d2x.args
          , C3x = a2x.kv7o(bg3x[0])
          , J3x = "hover-" + C3x;
        if (!C3x || !!Q3x[J3x])
            return;
        Q3x[J3x] = !0;
        h3x.s3x(C3x, "mouseenter", a2x.y3x.g3x(a2x, C3x, bg3x[1]));
        h3x.s3x(C3x, "mouseleave", a2x.w3x.g3x(a2x, C3x, bg3x[1]))
    });
    bb3x.bdK2x = function() {
        var cwD1x = function() {};
        return bb3x.bdK2x.ed5i(function(d2x) {
            d2x.stopped = !0;
            var E3x = d2x.args[0]
              , C3x = "fixed-" + a2x.kv7o(E3x);
            if (!!Q3x[C3x])
                return;
            var bc3x = {};
            Q3x[C3x] = bc3x
        })
    }();
    bb3x.bjG4K = bb3x.bjG4K.ed5i(function(d2x) {
        d2x.stopped = !0;
        var E3x = d2x.args[0]
          , cd4h = E3x.style
          , bCz9q = a2x.oQ8I();
        cd4h.width = bCz9q.scrollWidth + "px";
        cd4h.height = bCz9q.scrollHeight + "px"
    });
    bb3x.mN8F = bb3x.mN8F.ed5i(function(d2x) {
        d2x.stopped = !0;
        var E3x = d2x.args[0]
          , kc7V = Q3x[E3x.msk];
        if (!kc7V) {
            E3x.msk = fV5a++;
            kc7V = a2x.cT4X("iframe");
            kc7V.style.position = "absolute";
            Q3x[E3x.msk] = kc7V
        }
        d2x.value = kc7V;
        var cd4h = kc7V.style;
        cd4h.top = (parseInt(a2x.da4e(E3x, "top")) || 0) + "px";
        cd4h.left = (parseInt(a2x.da4e(E3x, "left")) || 0) + "px";
        cd4h.width = E3x.offsetWidth + "px";
        cd4h.height = E3x.offsetHeight + "px";
        E3x.insertAdjacentElement("beforeBegin", kc7V)
    });
    bb3x.bkg4k = bb3x.bkg4k.ed5i(function(d2x) {
        d2x.stopped = !0;
        var kc7V = Q3x[d2x.args[0].msk];
        if (!!kc7V)
            a2x.mi7b(kc7V)
    })
})();
(function() {
    var c2x = NEJ.P
      , M3x = c2x("nej.p")
      , a2x = c2x("nej.e")
      , bb3x = c2x("nej.h");
    if (M3x.ms7l.trident1)
        return;
    bb3x.zU2x = function() {
        var vd0x = {
            touchcancel: "MSPointerCancel",
            touchstart: "MSPointerDown",
            touchmove: "MSPointerMove",
            touchend: "MSPointerUp"
        };
        return bb3x.zU2x.ed5i(function(d2x) {
            var bg3x = bb3x.blF4J.apply(bb3x, d2x.args);
            if (!bg3x) {
                d2x.stopped = !0;
                return
            }
            var t3x = vd0x[bg3x[1]];
            if (!!t3x && ("on" + t3x).toLowerCase()in bg3x[0]) {
                bg3x[4] = bg3x[1];
                bg3x[1] = t3x;
                d2x.stopped = !0;
                d2x.value = bg3x
            }
        })
    }();
    bb3x.YS1x = function(YR1x) {
        return !0
    }
    ;
    bb3x.YP0x = bb3x.YP0x.ed5i(function(d2x) {
        d2x.stopped = !0;
        var fd5i = d2x.args[0];
        a2x.Y3x(fd5i, "display", "none");
        try {
            fd5i.contentWindow.document.body.innerHTML = "&nbsp;"
        } catch (ex) {}
    })
})();
(function() {
    var c2x = NEJ.P
      , X3x = NEJ.O
      , M3x = c2x("nej.p")
      , a2x = c2x("nej.e")
      , h3x = c2x("nej.v")
      , k3x = c2x("nej.u")
      , bb3x = c2x("nej.h")
      , bjI4M = {};
    if (M3x.ms7l.trident)
        return;
    bb3x.IA4E = bb3x.IA4E.ed5i(function(d2x) {
        d2x.stopped = !0;
        var j3x = d2x.args[0];
        if (!j3x) {
            d2x.value = null;
            return
        }
        var r3x = 0
          , m3x = [];
        while (!!j3x[r3x]) {
            m3x.push(j3x[r3x++])
        }
        d2x.value = m3x
    });
    bb3x.bpR6L = bb3x.bpR6L.ed5i(function(d2x) {
        d2x.stopped = !0;
        var bs3x = [];
        k3x.be3x(d2x.args[0].childNodes, function(f3x) {
            if (f3x.nodeType == 1)
                bs3x.push(f3x)
        });
        d2x.value = bs3x
    });
    bb3x.bqo6i = bb3x.bqo6i.ed5i(function(d2x) {
        var E3x = d2x.args[0];
        if (!!E3x.getElementsByClassName)
            return;
        d2x.stopped = !0;
        var m3x = []
          , bjX4b = new RegExp("(\\s|^)(?:" + d2x.args[1].replace(/\s+/g, "|") + ")(?=\\s|$)");
        k3x.be3x(E3x.getElementsByTagName("*"), function(f3x) {
            if (bjX4b.test(f3x.className))
                m3x.push(f3x)
        });
        d2x.value = m3x
    });
    bb3x.beY3x = bb3x.beY3x.ed5i(function(d2x) {
        var fF5K = d2x.args[0]
          , mR8J = d2x.args[1];
        if (fF5K.selectionStart == null) {
            d2x.stopped = !0;
            var cJ4N = fF5K.createTextRange();
            cJ4N.collapse(!0);
            cJ4N.moveStart("character", mR8J.start);
            cJ4N.moveEnd("character", mR8J.end - mR8J.start);
            cJ4N.select();
            fF5K.focus()
        }
    });
    bb3x.bgd3x = bb3x.bgd3x.ed5i(function(d2x) {
        var fF5K = d2x.args[0];
        fF5K.focus();
        if (fF5K.selectionStart == null) {
            d2x.stopped = !0;
            var bCA9r = document.selection.createRange();
            var bCB9s = fF5K.createTextRange();
            bCB9s.moveToBookmark(bCA9r.getBookmark());
            var blc4g = fF5K.createTextRange();
            blc4g.collapse(!0);
            blc4g.setEndPoint("EndToStart", bCB9s);
            var iG6A = blc4g.text.length;
            d2x.value = {
                start: iG6A,
                end: iG6A + bCA9r.text.length
            }
        }
    });
    bb3x.bja4e = bb3x.bja4e.ed5i(function(d2x) {
        if (!!window.XMLSerializer)
            return;
        d2x.stopped = !0;
        var E3x = d2x.args[0];
        d2x.value = E3x.xml != null ? E3x.xml : E3x.outHTML
    });
    bb3x.bjA4E = function() {
        var NL7E = ["Msxml2.DOMDocument.6.0", "Msxml2.DOMDocument.3.0"];
        var bQk2x = function() {
            try {
                for (var i = 0, l = NL7E.length; i < l; i++)
                    return new ActiveXObject(NL7E[i])
            } catch (ex) {
                return null
            }
        };
        return bb3x.bjA4E.ed5i(function(d2x) {
            if (!!window.DOMParser)
                return;
            d2x.stopped = !0;
            var nl8d = bQk2x();
            if (!!nl8d && nl8d.loadXML(d2x.args[0]) && !nl8d.parseError.errorCode)
                d2x.value = nl8d.documentElement
        })
    }();
    bb3x.zU2x = function() {
        var iA6u = {
            input: "propertychange",
            load: "readystatechange"
        };
        for (var x in iA6u)
            bjI4M[iA6u[x]] = !0;
        var bQm2x = function(E3x, t3x) {
            if ("on" + t3x in E3x)
                return null;
            return iA6u[t3x] || ""
        };
        var bQo2x = function(t3x, dd4h) {
            var dr4v = dd4h;
            switch (t3x) {
            case "readystatechange":
                dr4v = function(d2x) {
                    var E3x = h3x.U3x(d2x) || this;
                    if (E3x.readyState == "loaded" || E3x.readyState == "complete") {
                        d2x.target = E3x;
                        dd4h.call(E3x, d2x)
                    }
                }
                ;
                break;
            case "propertychange":
                dr4v = function(d2x) {
                    var E3x = h3x.U3x(d2x) || this;
                    if ("value"in E3x && d2x.propertyName == "value") {
                        d2x.target = E3x;
                        dd4h.call(E3x, d2x)
                    }
                }
                ;
                break
            }
            return dr4v
        };
        return bb3x.zU2x.ed5i(function(d2x) {
            var bg3x = bb3x.blF4J.apply(bb3x, d2x.args);
            if (!bg3x) {
                d2x.stopped = !0;
                return
            }
            var t3x = bQm2x(bg3x[0], bg3x[1]);
            if (!!t3x) {
                d2x.stopped = !0;
                bg3x[4] = bg3x[1];
                bg3x[1] = t3x;
                if (!!bg3x[2]) {
                    bg3x[5] = bg3x[2];
                    bg3x[2] = bQo2x(bg3x[1], bg3x[2])
                }
                d2x.value = bg3x
            }
        }, function(d2x) {
            var bg3x = d2x.value;
            if (!bg3x[0] || !k3x.ga5f(bg3x[2]))
                return;
            if (!k3x.ga5f(bg3x[5]))
                bg3x[5] = bg3x[2];
            bg3x[2] = bg3x[2].g3x(bg3x[0])
        })
    }();
    bb3x.bnI5N = bb3x.bnI5N.ed5i(function(d2x) {
        var bg3x = d2x.args;
        if (!!bjI4M[bg3x[1]] || !document.addEventListener) {
            d2x.stopped = !0;
            bg3x[0].attachEvent("on" + bg3x[1], bg3x[2])
        }
    });
    bb3x.YZ1x = bb3x.YZ1x.ed5i(function(d2x) {
        var bg3x = d2x.args;
        if (!!bjI4M[bg3x[1]] || !document.removeEventListener) {
            d2x.stopped = !0;
            bg3x[0].detachEvent("on" + bg3x[1], bg3x[2])
        }
    });
    bb3x.boo5t = bb3x.boo5t.ed5i(function(d2x) {
        if (!document.createEvent) {
            d2x.stopped = !0;
            var bg3x = d2x.args
              , bCE9v = document.createEventObject();
            NEJ.X(bCE9v, bg3x[2]);
            try {
                bg3x[0].fireEvent("on" + bg3x[1], bCE9v)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        }
    });
    bb3x.baQ2x = bb3x.baQ2x.ed5i(function(d2x) {
        var bg3x = d2x.args
          , T3x = bg3x[1].toLowerCase();
        if (T3x == "opacity" && !(T3x in document.body.style)) {
            bg3x[1] = "filter";
            bg3x[2] = "alpha(opacity=" + bg3x[2] * 100 + ")"
        }
    });
    bb3x.bdr2x = function() {
        var fe5j = 30;
        return bb3x.bdr2x.ed5i(function(d2x) {
            var E3x = d2x.args[0];
            if (!E3x.styleSheet)
                return;
            d2x.stopped = !0;
            var jp6j = d2x.args[1];
            var j3x = document.styleSheets;
            if (j3x.length > fe5j) {
                E3x = j3x[fe5j];
                jp6j = E3x.cssText + jp6j
            } else {
                E3x = E3x.styleSheet
            }
            E3x.cssText = jp6j
        })
    }();
    bb3x.bea3x = bb3x.bea3x.ed5i(function(d2x) {
        var bg3x = d2x.args
          , ww1x = bg3x[0].sheet;
        if (!!ww1x)
            return;
        d2x.stopped = !0;
        var ww1x = bg3x[0].styleSheet
          , br3x = ww1x.rules.length
          , bs3x = bg3x[1].split(/[\{\}]/);
        ww1x.addRule(bs3x[0], bs3x[1], br3x);
        d2x.value = ww1x.rules[br3x]
    });
    bb3x.bgA3x = function() {
        var BV2x = function(dI4M, d2x) {
            a2x.w3x(h3x.U3x(d2x), dI4M)
        };
        return bb3x.bgA3x.ed5i(function(d2x) {
            if (M3x.cR4V.release >= "4.0")
                return;
            var bg3x = d2x.args;
            if (bg3x[1] != 1) {
                h3x.s3x(bg3x[0], "blur", BV2x.g3x(null, bg3x[2]));
                bg3x[1] = -1
            }
        })
    }();
    bb3x.YS1x = function(YR1x) {
        return !0
    }
    ;
    bb3x.bhk3x = bb3x.bhk3x.ed5i(function(d2x) {
        var bg3x = d2x.args
          , f3x = (bg3x[0].attributes || X3x)[bg3x[1]];
        if (!!f3x) {
            d2x.stopped = !0;
            d2x.value = f3x.value
        }
    }, function(d2x) {
        var bg3x = d2x.args;
        if (bg3x[1] == "maxlength" && d2x.value == 2147483647)
            d2x.value = ""
    });
    if (M3x.cR4V.release < 5) {
        bb3x.blz4D = function() {
            var eY5d, fd5i, jy6s = [], bov5A = "cb-" + +(new Date), bi3x = '<script>parent.nej.h["' + bov5A + '"] = !0;parent.location.hash = decodeURIComponent("#<HASH>");</scr' + "ipt>";
            var bCF9w = function() {
                eY5d = window.clearTimeout(eY5d);
                if (!jy6s.length)
                    return;
                var dF4J = jy6s.shift();
                try {
                    var uR0x = fd5i.contentWindow.document;
                    uR0x.open();
                    uR0x.write("<head><title>");
                    uR0x.write(document.title);
                    uR0x.write("</title>");
                    uR0x.write(bi3x.replace("#<HASH>", encodeURIComponent(dF4J)));
                    uR0x.write("</head><body></body>");
                    if (location.hostname != document.domain)
                        uR0x.domain = document.domain;
                    uR0x.close();
                    bb3x[bov5A] = !1
                } catch (ex) {
                    console.log(ex.message || ex);
                    jy6s.unshift(dF4J)
                }
                eY5d = window.setTimeout(bCF9w, 50)
            };
            return bb3x.blz4D.ed5i(function(d2x) {
                d2x.stopped = !0;
                var dF4J = d2x.args[0];
                if (!!bb3x[bov5A] || !fd5i && !dF4J)
                    return;
                jy6s.push(dF4J);
                if (!fd5i)
                    fd5i = a2x.YA0x();
                bCF9w()
            })
        }()
    }
    try {
        document.execCommand("BackgroundImageCache", !1, !0)
    } catch (e) {}
})();
(function() {
    var c2x = NEJ.P
      , h3x = c2x("nej.v")
      , bb3x = c2x("nej.h")
      , M3x = c2x("nej.p")
      , Yz0x = M3x.buB7u;
    if (M3x.ms7l.gecko)
        return;
    var Pj7c = function() {
        Yz0x.css3d = Yz0x.css3d || "MozPerspective"in document.body.style;
        if (!document.body.insertAdjacentElement)
            HTMLElement.prototype.insertAdjacentElement = function(hT6N, E3x) {
                if (!hT6N || !E3x)
                    return;
                switch (hT6N) {
                case "beforeEnd":
                    this.appendChild(E3x);
                    return;
                case "beforeBegin":
                    this.parentNode.insertBefore(E3x, this);
                    return;
                case "afterBegin":
                    !this.firstChild ? this.appendChild(E3x) : this.insertBefore(E3x, this.firstChild);
                    return;
                case "afterEnd":
                    !this.nextSibling ? this.parentNode.appendChild(E3x) : this.parentNode.insertBefore(E3x, this.nextSibling);
                    return
                }
            }
            ;
        if (!("innerText"in document.body)) {
            HTMLElement.prototype["__defineGetter__"]("innerText", function() {
                return this.textContent
            });
            HTMLElement.prototype["__defineSetter__"]("innerText", function(bi3x) {
                this.textContent = bi3x
            })
        }
    };
    bb3x.zU2x = function() {
        var fW5b = /^(?:transitionend|animationend|animationstart|animationiteration)$/i;
        return bb3x.zU2x.ed5i(function(d2x) {
            var bg3x = d2x.args;
            if (fW5b.test(bg3x[1] || "")) {
                d2x.stopped = !0;
                d2x.value = bg3x
            }
        })
    }();
    bb3x.bPL2x = function() {
        var bRo3x = function(d2x) {
            h3x.bh3x(d2x);
            h3x.U3x(d2x).control.click()
        };
        return function(E3x) {
            h3x.s3x(E3x, "click", bRo3x)
        }
    }();
    Pj7c()
})();
(function() {
    var c2x = NEJ.P
      , a2x = c2x("nej.e")
      , bb3x = c2x("nej.h");
    var Yx0x = function() {
        var nQ8I = !!document.body.classList;
        return function() {
            return nQ8I
        }
    }();
    var bCZ9Q = function() {
        var cO4S = /\s+/g;
        return function(fi5n) {
            fi5n = (fi5n || "").trim();
            return !fi5n ? null : new RegExp("(\\s|^)(?:" + fi5n.replace(cO4S, "|") + ")(?=\\s|$)","g")
        }
    }();
    bb3x.Kx5C = bb3x.Kx5C.ed5i(function(d2x) {
        if (Yx0x())
            return;
        d2x.stopped = !0;
        var bg3x = d2x.args
          , E3x = a2x.z3x(bg3x[0]);
        if (!E3x || !bg3x[1] && !bg3x[2])
            return;
        var fi5n = E3x.className || "";
        var Ir4v = " " + (bg3x[2] || "")
          , Io4s = bCZ9Q((bg3x[1] || "") + Ir4v);
        !!Io4s && (fi5n = fi5n.replace(Io4s, "$1"));
        E3x.className = (fi5n + Ir4v).replace(/\s+/g, " ").trim()
    });
    bb3x.bqv6p = bb3x.bqv6p.ed5i(function(d2x) {
        if (Yx0x())
            return;
        d2x.stopped = !0;
        var bg3x = d2x.args;
        bb3x.Kx5C(bg3x[0], "", bg3x[1])
    });
    bb3x.baK2x = bb3x.baK2x.ed5i(function(d2x) {
        if (Yx0x())
            return;
        d2x.stopped = !0;
        var bg3x = d2x.args;
        bb3x.Kx5C(bg3x[0], bg3x[1], "")
    });
    bb3x.bcL2x = bb3x.bcL2x.ed5i(function(d2x) {
        if (Yx0x())
            return;
        d2x.stopped = !0;
        var bg3x = d2x.args
          , E3x = a2x.z3x(bg3x[0]);
        if (!E3x) {
            d2x.value = !1;
            return
        }
        var cO4S = bCZ9Q(bg3x[1]);
        d2x.value = !cO4S ? !1 : cO4S.test(E3x.className || "")
    })
})();
(function() {
    var c2x = NEJ.P
      , M3x = c2x("nej.p")
      , bb3x = c2x("nej.h");
    if (M3x.ms7l.webkit)
        return;
    bb3x.YS1x = function(YR1x) {
        return !0
    }
})();
(function() {
    var c2x = NEJ.P
      , bb3x = c2x("nej.h")
      , a2x = c2x("nej.e")
      , k3x = c2x("nej.u")
      , h3x = c2x("nej.v")
      , cN4R = c2x("nej.x")
      , Q3x = {};
    var bDn9e = function(E3x) {
        E3x = a2x.z3x(E3x);
        if (!E3x || !Q3x[E3x.id])
            return;
        var Ys0x = !0
          , C3x = E3x.id;
        k3x.ej5o(Q3x[C3x], function() {
            Ys0x = !1;
            return !0
        });
        if (Ys0x)
            delete Q3x[C3x]
    };
    h3x.s3x = cN4R.s3x = function() {
        var bSw4A = function() {
            var bg3x = bb3x.zU2x.apply(bb3x, arguments);
            if (!bg3x || !bg3x[2])
                return;
            var te0x = a2x.kv7o(bg3x[0])
              , nL8D = Q3x[te0x] || {};
            Q3x[te0x] = nL8D;
            te0x = bg3x[4] || bg3x[1];
            var ze1x = nL8D[te0x] || [];
            nL8D[te0x] = ze1x;
            ze1x.push({
                type: bg3x[1],
                func: bg3x[2],
                capt: !!bg3x[3],
                sfun: bg3x[5] || bg3x[2]
            });
            return bg3x.slice(0, 4)
        };
        return function() {
            var bg3x = bSw4A.apply(null, arguments);
            if (!!bg3x)
                bb3x.bnI5N.apply(bb3x, bg3x);
            return this
        }
    }();
    h3x.ma7T = cN4R.ma7T = function() {
        var bSz4D = function() {
            var vw0x = arguments
              , te0x = a2x.kv7o(vw0x[0])
              , nL8D = Q3x[te0x]
              , t3x = (vw0x[1] || "").toLowerCase()
              , d2x = vw0x[2];
            if (!nL8D || !t3x || !d2x)
                return;
            nL8D = nL8D[t3x];
            if (!nL8D)
                return;
            var bTa4e = !!vw0x[3]
              , r3x = k3x.cW4a(nL8D, function(iA6u) {
                return d2x == iA6u.sfun && bTa4e == iA6u.capt
            });
            if (r3x < 0)
                return;
            var iA6u = nL8D.splice(r3x, 1)[0];
            return !iA6u ? null : [a2x.z3x(te0x), iA6u.type, iA6u.func, iA6u.capt]
        };
        return function() {
            var bg3x = bSz4D.apply(null, arguments);
            if (!!bg3x) {
                bb3x.YZ1x.apply(bb3x, bg3x);
                bDn9e(bg3x[0])
            }
            return this
        }
    }();
    h3x.hF6z = cN4R.hF6z = function() {
        var bEa9R = function() {
            var vw0x = arguments
              , te0x = a2x.kv7o(vw0x[0])
              , nL8D = Q3x[te0x]
              , ze1x = (vw0x[1] || "").toLowerCase();
            if (!nL8D || !ze1x)
                return;
            var E3x = a2x.z3x(te0x);
            k3x.me7X(nL8D[ze1x], function(iA6u, r3x, j3x) {
                bb3x.YZ1x(E3x, iA6u.type, iA6u.func, iA6u.capt);
                j3x.splice(r3x, 1)
            });
            delete nL8D[ze1x]
        };
        var bUW4a = function(E3x) {
            E3x = a2x.z3x(E3x);
            if (!E3x)
                return;
            var C3x = E3x.id;
            k3x.ej5o(Q3x[C3x], function(j3x, t3x) {
                bEa9R(C3x, t3x)
            });
            delete Q3x[C3x]
        };
        return function(E3x, t3x) {
            !t3x ? bUW4a(E3x) : bEa9R(E3x, t3x);
            bDn9e(E3x);
            return this
        }
    }();
    h3x.U3x = function() {
        var bfN3x;
        var Hr4v = function(T3x, E3x) {
            var bs3x = T3x.split(":");
            if (bs3x.length > 1) {
                if (!bfN3x)
                    bfN3x = {
                        c: a2x.bB3x,
                        d: a2x.u3x,
                        a: a2x.fQ5V
                    };
                var Hl4p = bfN3x[bs3x[0]];
                if (!!Hl4p)
                    return !!Hl4p(E3x, bs3x[1]);
                T3x = bs3x[1]
            }
            return !!a2x.fQ5V(E3x, T3x) || !!a2x.u3x(E3x, T3x) || a2x.bB3x(E3x, T3x)
        };
        return function(d2x) {
            if (!d2x)
                return null;
            var E3x = d2x.target || d2x.srcElement
              , dC4G = arguments[1];
            if (!dC4G)
                return E3x;
            if (k3x.fl5q(dC4G))
                dC4G = Hr4v.g3x(null, dC4G);
            if (k3x.ga5f(dC4G)) {
                while (E3x) {
                    if (!!dC4G(E3x))
                        return E3x;
                    E3x = E3x.parentNode
                }
                return null
            }
            return E3x
        }
    }();
    h3x.bh3x = function(d2x) {
        h3x.rx9o(d2x);
        h3x.cg4k(d2x);
        return this
    }
    ;
    h3x.rx9o = function(d2x) {
        if (!!d2x) {
            !!d2x.stopPropagation ? d2x.stopPropagation() : d2x.cancelBubble = !0
        }
        return this
    }
    ;
    h3x.cg4k = function(d2x) {
        if (!!d2x) {
            !!d2x.preventDefault ? d2x.preventDefault() : d2x.returnValue = !1
        }
        return this
    }
    ;
    h3x.cwc1x = function() {
        var ps8k = !1;
        var bUZ4d = function() {
            if (ps8k)
                return;
            ps8k = !0;
            h3x.s3x(document, "click", bVp4t, !0)
        };
        var bVp4t = function(d2x) {
            var E3x = h3x.U3x(d2x)
              , bVq4u = a2x.u3x(E3x, "stopped");
            if (bVq4u == "true") {
                h3x.bh3x(d2x);
                a2x.u3x(E3x, "stopped", "false")
            }
        };
        return function(d2x) {
            if (!d2x)
                return;
            if (d2x.type == "click") {
                h3x.bh3x(d2x);
                return
            }
            bUZ4d();
            a2x.u3x(h3x.U3x(d2x), "stopped", "true")
        }
    }();
    h3x.kI7B = function(d2x) {
        return d2x.pageX != null ? d2x.pageX : d2x.clientX + a2x.oQ8I().scrollLeft
    }
    ;
    h3x.nI8A = function(d2x) {
        return d2x.pageY != null ? d2x.pageY : d2x.clientY + a2x.oQ8I().scrollTop
    }
    ;
    h3x.x3x = cN4R.x3x = function(E3x, t3x, e3x) {
        var bg3x = bb3x.zU2x(E3x, t3x);
        if (!!bg3x)
            bb3x.boo5t(bg3x[0], bg3x[1], e3x);
        return this
    }
    ;
    c2x("dbg").dumpEV = function() {
        return Q3x
    }
    ;
    cN4R.isChange = !0
})();
(function() {
    var o = !0
      , w = null;
    (function(B) {
        function v(a) {
            if ("bug-string-char-index" == a)
                return "a" != "a"[0];
            var f, c = "json" == a;
            if (c || "json-stringify" == a || "json-parse" == a) {
                if ("json-stringify" == a || c) {
                    var d = k.stringify
                      , b = "function" == typeof d && l;
                    if (b) {
                        (f = function() {
                            return 1
                        }
                        ).toJSON = f;
                        try {
                            b = "0" === d(0) && "0" === d(new Number) && '""' == d(new String) && d(m) === r && d(r) === r && d() === r && "1" === d(f) && "[1]" == d([f]) && "[null]" == d([r]) && "null" == d(w) && "[null,null,null]" == d([r, m, w]) && '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}' == d({
                                a: [f, o, !1, w, "\0\b\n\f\r\t"]
                            }) && "1" === d(w, f) && "[\n 1,\n 2\n]" == d([1, 2], w, 1) && '"-271821-04-20T00:00:00.000Z"' == d(new Date(-864e13)) && '"+275760-09-13T00:00:00.000Z"' == d(new Date(864e13)) && '"-000001-01-01T00:00:00.000Z"' == d(new Date(-621987552e5)) && '"1969-12-31T23:59:59.999Z"' == d(new Date(-1))
                        } catch (n) {
                            b = !1
                        }
                    }
                    if (!c)
                        return b
                }
                if ("json-parse" == a || c) {
                    a = k.parse;
                    if ("function" == typeof a)
                        try {
                            if (0 === a("0") && !a(!1)) {
                                f = a('{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}');
                                var e = 5 == f.a.length && 1 === f.a[0];
                                if (e) {
                                    try {
                                        e = !a('"\t"')
                                    } catch (g) {}
                                    if (e)
                                        try {
                                            e = 1 !== a("01")
                                        } catch (i) {}
                                }
                            }
                        } catch (O) {
                            e = !1
                        }
                    if (!c)
                        return e
                }
                return b && e
            }
        }
        var m = {}.toString, p, C, r, D = typeof define === "function" && define.amd, k = "object" == typeof exports && exports;
        k || D ? "object" == typeof JSON && JSON ? k ? (k.stringify = JSON.stringify,
        k.parse = JSON.parse) : k = JSON : D && (k = B.JSON = {}) : k = B.JSON || (B.JSON = {});
        var l = new Date(-0xc782b5b800cec);
        try {
            l = -109252 == l.getUTCFullYear() && 0 === l.getUTCMonth() && 1 === l.getUTCDate() && 10 == l.getUTCHours() && 37 == l.getUTCMinutes() && 6 == l.getUTCSeconds() && 708 == l.getUTCMilliseconds()
        } catch (P) {}
        if (!v("json")) {
            var s = v("bug-string-char-index");
            if (!l)
                var t = Math.floor
                  , J = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334]
                  , z = function(a, f) {
                    return J[f] + 365 * (a - 1970) + t((a - 1969 + (f = +(f > 1))) / 4) - t((a - 1901 + f) / 100) + t((a - 1601 + f) / 400)
                };
            if (!(p = {}.hasOwnProperty))
                p = function(a) {
                    var f = {}, c;
                    if ((f.__proto__ = w,
                    f.__proto__ = {
                        toString: 1
                    },
                    f).toString != m)
                        p = function(a) {
                            var f = this.__proto__
                              , a = a in (this.__proto__ = w,
                            this);
                            this.__proto__ = f;
                            return a
                        }
                        ;
                    else {
                        c = f.constructor;
                        p = function(a) {
                            var f = (this.constructor || c).prototype;
                            return a in this && !(a in f && this[a] === f[a])
                        }
                    }
                    f = w;
                    return p.call(this, a)
                }
                ;
            var K = {
                "boolean": 1,
                number: 1,
                string: 1,
                "undefined": 1
            };
            C = function(a, f) {
                var c = 0, b, h, n;
                (b = function() {
                    this.valueOf = 0
                }
                ).prototype.valueOf = 0;
                h = new b;
                for (n in h)
                    p.call(h, n) && c++;
                b = h = w;
                if (c)
                    c = c == 2 ? function(a, f) {
                        var c = {}, b = m.call(a) == "[object Function]", d;
                        for (d in a)
                            !(b && d == "prototype") && !p.call(c, d) && (c[d] = 1) && p.call(a, d) && f(d)
                    }
                    : function(a, f) {
                        var c = m.call(a) == "[object Function]", b, d;
                        for (b in a)
                            !(c && b == "prototype") && p.call(a, b) && !(d = b === "constructor") && f(b);
                        (d || p.call(a, b = "constructor")) && f(b)
                    }
                    ;
                else {
                    h = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"];
                    c = function(a, f) {
                        var c = m.call(a) == "[object Function]", b, d;
                        if (d = !c)
                            if (d = typeof a.constructor != "function") {
                                d = typeof a.hasOwnProperty;
                                d = d == "object" ? !!a.hasOwnProperty : !K[d]
                            }
                        d = d ? a.hasOwnProperty : p;
                        for (b in a)
                            !(c && b == "prototype") && d.call(a, b) && f(b);
                        for (c = h.length; b = h[--c]; d.call(a, b) && f(b))
                            ;
                    }
                }
                c(a, f)
            }
            ;
            if (!v("json-stringify")) {
                var L = {
                    92: "\\\\",
                    34: '\\"',
                    8: "\\b",
                    12: "\\f",
                    10: "\\n",
                    13: "\\r",
                    9: "\\t"
                }
                  , u = function(a, f) {
                    return ("000000" + (f || 0)).slice(-a)
                }
                  , G = function(a) {
                    var f = '"', b = 0, d = a.length, h = d > 10 && s, n;
                    for (h && (n = a.split("")); b < d; b++) {
                        var e = a.charCodeAt(b);
                        switch (e) {
                        case 8:
                        case 9:
                        case 10:
                        case 12:
                        case 13:
                        case 34:
                        case 92:
                            f = f + L[e];
                            break;
                        default:
                            if (e < 32) {
                                f = f + ("\\u00" + u(2, e.toString(16)));
                                break
                            }
                            f = f + (h ? n[b] : s ? a.charAt(b) : a[b])
                        }
                    }
                    return f + '"'
                }
                  , E = function(a, b, c, d, h, n, e) {
                    var g = b[a], i, j, k, l, q, s, v, x, y;
                    try {
                        g = b[a]
                    } catch (A) {}
                    if (typeof g == "object" && g) {
                        i = m.call(g);
                        if (i == "[object Date]" && !p.call(g, "toJSON"))
                            if (g > -1 / 0 && g < 1 / 0) {
                                if (z) {
                                    k = t(g / 864e5);
                                    for (i = t(k / 365.2425) + 1970 - 1; z(i + 1, 0) <= k; i++)
                                        ;
                                    for (j = t((k - z(i, 0)) / 30.42); z(i, j + 1) <= k; j++)
                                        ;
                                    k = 1 + k - z(i, j);
                                    l = (g % 864e5 + 864e5) % 864e5;
                                    q = t(l / 36e5) % 24;
                                    s = t(l / 6e4) % 60;
                                    v = t(l / 1e3) % 60;
                                    l = l % 1e3
                                } else {
                                    i = g.getUTCFullYear();
                                    j = g.getUTCMonth();
                                    k = g.getUTCDate();
                                    q = g.getUTCHours();
                                    s = g.getUTCMinutes();
                                    v = g.getUTCSeconds();
                                    l = g.getUTCMilliseconds()
                                }
                                g = (i <= 0 || i >= 1e4 ? (i < 0 ? "-" : "+") + u(6, i < 0 ? -i : i) : u(4, i)) + "-" + u(2, j + 1) + "-" + u(2, k) + "T" + u(2, q) + ":" + u(2, s) + ":" + u(2, v) + "." + u(3, l) + "Z"
                            } else
                                g = w;
                        else if (typeof g.toJSON == "function" && (i != "[object Number]" && i != "[object String]" && i != "[object Array]" || p.call(g, "toJSON")))
                            g = g.toJSON(a)
                    }
                    c && (g = c.call(b, a, g));
                    if (g === w)
                        return "null";
                    i = m.call(g);
                    if (i == "[object Boolean]")
                        return "" + g;
                    if (i == "[object Number]")
                        return g > -1 / 0 && g < 1 / 0 ? "" + g : "null";
                    if (i == "[object String]")
                        return G("" + g);
                    if (typeof g == "object") {
                        for (a = e.length; a--; )
                            if (e[a] === g)
                                throw TypeError();
                        e.push(g);
                        x = [];
                        b = n;
                        n = n + h;
                        if (i == "[object Array]") {
                            j = 0;
                            for (a = g.length; j < a; y || (y = o),
                            j++) {
                                i = E(j, g, c, d, h, n, e);
                                x.push(i === r ? "null" : i)
                            }
                            a = y ? h ? "[\n" + n + x.join(",\n" + n) + "\n" + b + "]" : "[" + x.join(",") + "]" : "[]"
                        } else {
                            C(d || g, function(a) {
                                var b = E(a, g, c, d, h, n, e);
                                b !== r && x.push(G(a) + ":" + (h ? " " : "") + b);
                                y || (y = o)
                            });
                            a = y ? h ? "{\n" + n + x.join(",\n" + n) + "\n" + b + "}" : "{" + x.join(",") + "}" : "{}"
                        }
                        e.pop();
                        return a
                    }
                };
                k.stringify = function(a, b, c) {
                    var d, h, j;
                    if (typeof b == "function" || typeof b == "object" && b)
                        if (m.call(b) == "[object Function]")
                            h = b;
                        else if (m.call(b) == "[object Array]") {
                            j = {};
                            for (var e = 0, g = b.length, i; e < g; i = b[e++],
                            (m.call(i) == "[object String]" || m.call(i) == "[object Number]") && (j[i] = 1))
                                ;
                        }
                    if (c)
                        if (m.call(c) == "[object Number]") {
                            if ((c = c - c % 1) > 0) {
                                d = "";
                                for (c > 10 && (c = 10); d.length < c; d = d + " ")
                                    ;
                            }
                        } else
                            m.call(c) == "[object String]" && (d = c.length <= 10 ? c : c.slice(0, 10));
                    return E("", (i = {},
                    i[""] = a,
                    i), h, j, d, "", [])
                }
            }
            if (!v("json-parse")) {
                var M = String.fromCharCode, N = {
                    92: "\\",
                    34: '"',
                    47: "/",
                    98: "\b",
                    116: "\t",
                    110: "\n",
                    102: "\f",
                    114: "\r"
                }, b, A, j = function() {
                    b = A = w;
                    throw SyntaxError()
                }, q = function() {
                    for (var a = A, f = a.length, c, d, h, k, e; b < f; ) {
                        e = a.charCodeAt(b);
                        switch (e) {
                        case 9:
                        case 10:
                        case 13:
                        case 32:
                            b++;
                            break;
                        case 123:
                        case 125:
                        case 91:
                        case 93:
                        case 58:
                        case 44:
                            c = s ? a.charAt(b) : a[b];
                            b++;
                            return c;
                        case 34:
                            c = "@";
                            for (b++; b < f; ) {
                                e = a.charCodeAt(b);
                                if (e < 32)
                                    j();
                                else if (e == 92) {
                                    e = a.charCodeAt(++b);
                                    switch (e) {
                                    case 92:
                                    case 34:
                                    case 47:
                                    case 98:
                                    case 116:
                                    case 110:
                                    case 102:
                                    case 114:
                                        c = c + N[e];
                                        b++;
                                        break;
                                    case 117:
                                        d = ++b;
                                        for (h = b + 4; b < h; b++) {
                                            e = a.charCodeAt(b);
                                            e >= 48 && e <= 57 || e >= 97 && e <= 102 || e >= 65 && e <= 70 || j()
                                        }
                                        c = c + M("0x" + a.slice(d, b));
                                        break;
                                    default:
                                        j()
                                    }
                                } else {
                                    if (e == 34)
                                        break;
                                    e = a.charCodeAt(b);
                                    for (d = b; e >= 32 && e != 92 && e != 34; )
                                        e = a.charCodeAt(++b);
                                    c = c + a.slice(d, b)
                                }
                            }
                            if (a.charCodeAt(b) == 34) {
                                b++;
                                return c
                            }
                            j();
                        default:
                            d = b;
                            if (e == 45) {
                                k = o;
                                e = a.charCodeAt(++b)
                            }
                            if (e >= 48 && e <= 57) {
                                for (e == 48 && (e = a.charCodeAt(b + 1),
                                e >= 48 && e <= 57) && j(); b < f && (e = a.charCodeAt(b),
                                e >= 48 && e <= 57); b++)
                                    ;
                                if (a.charCodeAt(b) == 46) {
                                    for (h = ++b; h < f && (e = a.charCodeAt(h),
                                    e >= 48 && e <= 57); h++)
                                        ;
                                    h == b && j();
                                    b = h
                                }
                                e = a.charCodeAt(b);
                                if (e == 101 || e == 69) {
                                    e = a.charCodeAt(++b);
                                    (e == 43 || e == 45) && b++;
                                    for (h = b; h < f && (e = a.charCodeAt(h),
                                    e >= 48 && e <= 57); h++)
                                        ;
                                    h == b && j();
                                    b = h
                                }
                                return +a.slice(d, b)
                            }
                            k && j();
                            if (a.slice(b, b + 4) == "true") {
                                b = b + 4;
                                return o
                            }
                            if (a.slice(b, b + 5) == "false") {
                                b = b + 5;
                                return false
                            }
                            if (a.slice(b, b + 4) == "null") {
                                b = b + 4;
                                return w
                            }
                            j()
                        }
                    }
                    return "$"
                }, F = function(a) {
                    var b, c;
                    a == "$" && j();
                    if (typeof a == "string") {
                        if ((s ? a.charAt(0) : a[0]) == "@")
                            return a.slice(1);
                        if (a == "[") {
                            for (b = []; ; c || (c = o)) {
                                a = q();
                                if (a == "]")
                                    break;
                                if (c)
                                    if (a == ",") {
                                        a = q();
                                        a == "]" && j()
                                    } else
                                        j();
                                a == "," && j();
                                b.push(F(a))
                            }
                            return b
                        }
                        if (a == "{") {
                            for (b = {}; ; c || (c = o)) {
                                a = q();
                                if (a == "}")
                                    break;
                                if (c)
                                    if (a == ",") {
                                        a = q();
                                        a == "}" && j()
                                    } else
                                        j();
                                (a == "," || typeof a != "string" || (s ? a.charAt(0) : a[0]) != "@" || q() != ":") && j();
                                b[a.slice(1)] = F(q())
                            }
                            return b
                        }
                        j()
                    }
                    return a
                }, I = function(a, b, c) {
                    c = H(a, b, c);
                    c === r ? delete a[b] : a[b] = c
                }, H = function(a, b, c) {
                    var d = a[b], h;
                    if (typeof d == "object" && d)
                        if (m.call(d) == "[object Array]")
                            for (h = d.length; h--; )
                                I(d, h, c);
                        else
                            C(d, function(a) {
                                I(d, a, c)
                            });
                    return c.call(a, b, d)
                };
                k.parse = function(a, f) {
                    var c, d;
                    b = 0;
                    A = "" + a;
                    c = F(q());
                    q() != "$" && j();
                    b = A = w;
                    return f && m.call(f) == "[object Function]" ? H((d = {},
                    d[""] = c,
                    d), "", f) : c
                }
            }
        }
        D && define(function() {
            return k
        })
    })(this)
})();
(function() {
    var c2x = NEJ.P
      , M3x = c2x("nej.p");
    if (M3x.ms7l.trident0)
        return;
    JSON.parse = JSON.parse.ed5i(function(d2x) {
        var cC4G = d2x.args[0] || "";
        if (cC4G.length >= 5e5) {
            d2x.stopped = !0;
            d2x.value = eval("(" + cC4G + ")")
        }
    })
})();
(function() {
    var c2x = NEJ.P, X3x = NEJ.O, bn3x = NEJ.F, dO4S = c2x("nej.g"), a2x = c2x("nej.e"), k3x = c2x("nej.u"), h3x = c2x("nej.v"), bb3x = c2x("nej.h"), cN4R = c2x("nej.x"), He4i, bjZ4d = {}, Q3x = document.createDocumentFragment();
    a2x.kv7o = cN4R.kv7o = function(E3x) {
        E3x = a2x.z3x(E3x);
        if (!E3x)
            return;
        var C3x = !!E3x.id ? E3x.id : "auto-id-" + k3x.XX0x(16);
        E3x.id = C3x;
        if (a2x.z3x(C3x) != E3x)
            bjZ4d[C3x] = E3x;
        return C3x
    }
    ;
    a2x.z3x = cN4R.z3x = function(E3x) {
        var f3x = bjZ4d["" + E3x];
        if (!!f3x)
            return f3x;
        if (!k3x.fl5q(E3x) && !k3x.uE0x(E3x))
            return E3x;
        return document.getElementById(E3x)
    }
    ;
    a2x.cQ4U = cN4R.cQ4U = function(E3x, dI4M) {
        E3x = a2x.z3x(E3x);
        if (!E3x)
            return null;
        var j3x = bb3x.bpR6L(E3x);
        if (!!dI4M)
            k3x.me7X(j3x, function(f3x, r3x) {
                if (!a2x.bB3x(f3x, dI4M))
                    j3x.splice(r3x, 1)
            });
        return j3x
    }
    ;
    a2x.I3x = cN4R.I3x = function(E3x, fi5n) {
        E3x = a2x.z3x(E3x);
        return !E3x ? null : bb3x.bqo6i(E3x, fi5n.trim())
    }
    ;
    a2x.bEV9M = cN4R.bEV9M = function(E3x) {
        E3x = a2x.z3x(E3x);
        if (!!E3x) {
            E3x = E3x.parentNode;
            while (!!E3x) {
                if (E3x.scrollHeight > E3x.clientHeight)
                    break;
                E3x = E3x.parentNode
            }
            if (!!E3x)
                return E3x
        }
        var nL8D = document.body.scrollHeight
          , ze1x = document.documentElement.scrollHeight;
        return ze1x >= nL8D ? document.documentElement : document.body
    }
    ;
    a2x.oQ8I = function() {
        var bEX9O = function(j3x) {
            var m3x = 0;
            k3x.be3x(j3x, function(gi5n) {
                if (!gi5n)
                    return;
                if (!m3x) {
                    m3x = gi5n
                } else {
                    m3x = Math.min(m3x, gi5n)
                }
            });
            return m3x
        };
        return function(uR0x) {
            var GL4P = uR0x || document
              , Av2x = GL4P.body
              , yc1x = GL4P.documentElement
              , m3x = {
                scrollTop: Math.max(Av2x.scrollTop, yc1x.scrollTop),
                scrollLeft: Math.max(Av2x.scrollLeft, yc1x.scrollLeft),
                clientWidth: bEX9O([Av2x.clientWidth, Av2x.offsetWidth, yc1x.clientWidth, yc1x.offsetWidth]),
                clientHeight: bEX9O([Av2x.clientHeight, Av2x.offsetHeight, yc1x.clientHeight, yc1x.offsetHeight])
            };
            m3x.scrollWidth = Math.max(m3x.clientWidth, Av2x.scrollWidth, yc1x.scrollWidth);
            m3x.scrollHeight = Math.max(m3x.clientHeight, Av2x.scrollHeight, yc1x.scrollHeight);
            return m3x
        }
    }();
    a2x.cvV1x = function(fe5j, nH8z) {
        var m3x = NEJ.X({}, nH8z)
          , bEZ9Q = fe5j.width / fe5j.height
          , XP0x = nH8z.width / nH8z.height;
        if (bEZ9Q > XP0x && nH8z.height > fe5j.height) {
            m3x.height = fe5j.height;
            m3x.width = m3x.height * XP0x
        }
        if (bEZ9Q < XP0x && nH8z.width > fe5j.width) {
            m3x.width = fe5j.width;
            m3x.height = m3x.width / XP0x
        }
        return m3x
    }
    ;
    a2x.cvT1x = function() {
        var cO4S = /\s+/;
        var tr0x = {
            left: function() {
                return 0
            },
            center: function(gM5R, nH8z) {
                return (gM5R.width - nH8z.width) / 2
            },
            right: function(gM5R, nH8z) {
                return gM5R.width - nH8z.width
            },
            top: function() {
                return 0
            },
            middle: function(gM5R, nH8z) {
                return (gM5R.height - nH8z.height) / 2
            },
            bottom: function(gM5R, nH8z) {
                return gM5R.height - nH8z.height
            }
        };
        return function(gM5R, nH8z, nb8T) {
            var m3x = {}
              , bs3x = (nb8T || "").split(cO4S)
              , gk5p = tr0x[bs3x[1]] || tr0x.middle
              , gG5L = tr0x[bs3x[0]] || tr0x.center;
            m3x.top = gk5p(gM5R, nH8z);
            m3x.left = gG5L(gM5R, nH8z);
            return m3x
        }
    }();
    a2x.rk9b = cN4R.rk9b = function(E3x, dI4M) {
        bb3x.bdh2x(E3x, dI4M || a2x.u3x(E3x, "hover") || "js-hover");
        return this
    }
    ;
    a2x.GB4F = cN4R.GB4F = function(E3x) {
        E3x = a2x.z3x(E3x);
        if (!E3x)
            return;
        bb3x.bdK2x(E3x)
    }
    ;
    a2x.bVJ5O = cN4R.bVJ5O = function() {
        var Q3x = {}
          , bFc9T = 2;
        var bVT5Y = function(C3x, dI4M, d2x) {
            Q3x[C3x] = [h3x.kI7B(d2x), h3x.nI8A(d2x)];
            a2x.y3x(C3x, dI4M)
        };
        var bWb5g = function(C3x, dI4M, d2x) {
            var bG3x = Q3x[C3x];
            if (!k3x.ep5u(bG3x))
                return;
            var bWi5n = Math.abs(h3x.kI7B(d2x) - bG3x[0])
              , bWU5Z = Math.abs(h3x.nI8A(d2x) - bG3x[1]);
            if (bWi5n > bFc9T || bWU5Z > bFc9T)
                bbs2x(C3x, dI4M)
        };
        var bbs2x = function(C3x, dI4M) {
            if (k3x.ep5u(Q3x[C3x])) {
                Q3x[C3x] = -1;
                a2x.w3x(C3x, dI4M)
            }
        };
        return function(E3x, dI4M) {
            var C3x = a2x.kv7o(E3x);
            if (!C3x || Q3x[C3x] != null)
                return;
            Q3x[C3x] = -1;
            dI4M = dI4M || a2x.u3x(C3x, "highlight") || "js-highlight";
            h3x.s3x(C3x, "touchstart", bVT5Y.g3x(null, C3x, dI4M));
            h3x.s3x(document, "touchmove", bWb5g.g3x(null, C3x, dI4M));
            h3x.s3x(document, "touchend", bbs2x.g3x(null, C3x, dI4M));
            h3x.s3x(document, "touchcancel", bbs2x.g3x(null, C3x, dI4M))
        }
    }();
    a2x.yA1x = cN4R.yA1x = function() {
        var bXg5l = function(C3x, dI4M, bYv5A) {
            var E3x = a2x.z3x(C3x)
              , d2x = {
                clazz: dI4M,
                target: E3x
            };
            if (a2x.bB3x(E3x, dI4M)) {
                d2x.toggled = !1;
                a2x.w3x(E3x, dI4M)
            } else {
                d2x.toggled = !0;
                a2x.y3x(E3x, dI4M)
            }
            bYv5A.call(null, d2x)
        };
        return function(E3x, e3x) {
            E3x = a2x.z3x(E3x);
            if (!!E3x) {
                var in6h = {
                    ontoggle: bn3x,
                    clazz: "js-toggle",
                    element: E3x.parentNode
                };
                if (k3x.fl5q(e3x)) {
                    var f3x = a2x.z3x(e3x);
                    !!f3x ? in6h.element = f3x : in6h.clazz = e3x
                } else {
                    NEJ.EX(in6h, e3x);
                    in6h.element = a2x.z3x(in6h.element)
                }
                var C3x = a2x.kv7o(in6h.element);
                h3x.s3x(E3x, "click", bXg5l.g3x(null, C3x, in6h.clazz, in6h.ontoggle || bn3x))
            }
            return this
        }
    }();
    a2x.lU7N = cN4R.lU7N = function(E3x, e3x) {
        E3x = a2x.z3x(E3x);
        if (!E3x)
            return;
        var eG5L = 0
          , dI4M = "js-focus";
        if (k3x.uE0x(e3x)) {
            eG5L = e3x
        } else if (k3x.fl5q(e3x)) {
            dI4M = e3x
        } else if (k3x.kR7K(e3x)) {
            eG5L = e3x.mode || eG5L;
            dI4M = e3x.clazz || dI4M
        }
        var A3x = parseInt(a2x.u3x(E3x, "mode"));
        if (!isNaN(A3x))
            eG5L = A3x;
        A3x = a2x.u3x(E3x, "focus");
        if (!!A3x)
            dI4M = A3x;
        bb3x.bgA3x(E3x, eG5L, dI4M);
        return this
    }
    ;
    a2x.cT4X = function() {
        var bv3x = {
            a: {
                href: "#",
                hideFocus: !0
            },
            style: {
                type: "text/css"
            },
            link: {
                type: "text/css",
                rel: "stylesheet"
            },
            iframe: {
                frameBorder: 0
            },
            script: {
                defer: !0,
                type: "text/javascript"
            }
        };
        return function(fa5f, fi5n, bE3x) {
            var E3x = document.createElement(fa5f);
            NEJ.X(E3x, bv3x[fa5f.toLowerCase()]);
            if (!!fi5n)
                E3x.className = fi5n;
            bE3x = a2x.z3x(bE3x);
            if (!!bE3x)
                bE3x.appendChild(E3x);
            return E3x
        }
    }();
    a2x.YA0x = function() {
        var bYC5H = function() {
            if (location.hostname == document.domain)
                return "about:blank";
            return 'javascript:(function(){document.open();document.domain="' + document.domain + '";document.close();})();'
        };
        var cbF6z = function(T3x) {
            T3x = T3x.trim();
            if (!T3x)
                return a2x.cT4X("iframe");
            var fd5i;
            try {
                fd5i = document.createElement('<iframe name="' + T3x + '"></iframe>');
                fd5i.frameBorder = 0
            } catch (e) {
                fd5i = a2x.cT4X("iframe");
                fd5i.name = T3x
            }
            return fd5i
        };
        return function(e3x) {
            e3x = e3x || X3x;
            var fd5i = cbF6z(e3x.name || "");
            if (!e3x.visible)
                fd5i.style.display = "none";
            if (k3x.ga5f(e3x.onload))
                h3x.s3x(fd5i, "load", function(d2x) {
                    if (!fd5i.src)
                        return;
                    h3x.hF6z(fd5i, "load");
                    e3x.onload(d2x)
                });
            var bE3x = e3x.parent;
            if (k3x.ga5f(bE3x)) {
                try {
                    bE3x(fd5i)
                } catch (e) {}
            } else {
                (a2x.z3x(bE3x) || document.body).appendChild(fd5i)
            }
            var dv4z = e3x.src || bYC5H();
            window.setTimeout(function() {
                fd5i.src = dv4z
            }, 0);
            return fd5i
        }
    }();
    a2x.cK4O = cN4R.cK4O = function() {
        var bHC0x = function(Mr5w) {
            Mr5w.src = dO4S.bco2x
        };
        var bIj0x = function(us0x) {
            us0x.src = "about:blank"
        };
        return function(E3x, cdF6z) {
            E3x = a2x.z3x(E3x);
            if (!E3x)
                return this;
            if (!cdF6z)
                h3x.hF6z(E3x);
            delete bjZ4d[E3x.id];
            var fa5f = E3x.tagName;
            if (fa5f == "IFRAME") {
                bIj0x(E3x)
            } else if (fa5f == "IMG") {
                bHC0x(E3x)
            } else if (!!E3x.getElementsByTagName) {
                k3x.be3x(E3x.getElementsByTagName("img"), bHC0x);
                k3x.be3x(E3x.getElementsByTagName("iframe"), bIj0x)
            }
            if (!!E3x.parentNode) {
                E3x.parentNode.removeChild(E3x)
            }
            return this
        }
    }();
    a2x.mi7b = cN4R.mi7b = function(E3x) {
        E3x = a2x.z3x(E3x);
        if (!!E3x)
            Q3x.appendChild(E3x);
        return this
    }
    ;
    a2x.bIB0x = cN4R.bIB0x = function(E3x) {
        E3x = a2x.z3x(E3x);
        if (!E3x)
            return;
        k3x.me7X(E3x.childNodes, function(f3x) {
            a2x.cK4O(f3x)
        })
    }
    ;
    a2x.Gl3x = cN4R.Gl3x = function() {
        var dI4M, fW5b = /\s+/;
        var cek7d = function() {
            if (!!dI4M)
                return;
            dI4M = a2x.rL9C(".#<uispace>{position:relative;zoom:1;}.#<uispace>-show{position:absolute;top:0;left:100%;cursor:text;white-space:nowrap;overflow:hidden;}");
            a2x.bJn0x()
        };
        return function(E3x, e3x) {
            E3x = a2x.z3x(E3x);
            if (!E3x)
                return;
            cek7d();
            e3x = e3x || X3x;
            var bE3x = E3x.parentNode;
            if (!a2x.bB3x(bE3x, dI4M)) {
                bE3x = a2x.cT4X("span", dI4M);
                E3x.insertAdjacentElement("beforeBegin", bE3x);
                bE3x.appendChild(E3x)
            }
            var bJE0x = e3x.nid || ""
              , f3x = a2x.I3x(bE3x, bJE0x || dI4M + "-show")[0];
            if (!f3x) {
                var dD4H = ((e3x.clazz || "") + " " + bJE0x).trim();
                dD4H = dI4M + "-show" + (!dD4H ? "" : " ") + dD4H;
                f3x = a2x.cT4X(e3x.tag || "span", dD4H);
                bE3x.appendChild(f3x)
            }
            var dD4H = e3x.clazz;
            if (!!dD4H) {
                dD4H = (dD4H || "").trim().split(fW5b)[0] + "-parent";
                a2x.y3x(bE3x, dD4H)
            }
            return f3x
        }
    }();
    a2x.u3x = cN4R.u3x = function() {
        var bgx3x = {}
          , fa5f = "data-"
          , cO4S = /\-(.{1})/gi;
        var DJ3x = function(E3x) {
            var C3x = a2x.kv7o(E3x);
            if (!!bgx3x[C3x])
                return;
            var bv3x = {};
            k3x.be3x(E3x.attributes, function(f3x) {
                var J3x = f3x.nodeName;
                if (J3x.indexOf(fa5f) != 0)
                    return;
                J3x = J3x.replace(fa5f, "").replace(cO4S, function($1, $2) {
                    return $2.toUpperCase()
                });
                bv3x[J3x] = f3x.nodeValue || ""
            });
            bgx3x[C3x] = bv3x
        };
        return function(E3x, J3x, A3x) {
            E3x = a2x.z3x(E3x);
            if (!E3x)
                return null;
            var Xj0x = E3x.dataset;
            if (!Xj0x) {
                DJ3x(E3x);
                Xj0x = bgx3x[E3x.id]
            }
            if (A3x !== undefined)
                Xj0x[J3x] = A3x;
            return Xj0x[J3x]
        }
    }();
    a2x.fQ5V = cN4R.fQ5V = function(E3x, T3x, A3x) {
        E3x = a2x.z3x(E3x);
        if (!E3x)
            return "";
        if (A3x !== undefined && !!E3x.setAttribute)
            E3x.setAttribute(T3x, A3x);
        return bb3x.bhk3x(E3x, T3x)
    }
    ;
    a2x.nd8V = function(dz4D) {
        var qR9I = document.createElement("div");
        qR9I.innerHTML = dz4D;
        var j3x = a2x.cQ4U(qR9I);
        return j3x.length > 1 ? qR9I : j3x[0]
    }
    ;
    a2x.cgW7P = cN4R.cgW7P = function(E3x) {
        E3x = a2x.z3x(E3x);
        return !E3x ? "" : bb3x.bja4e(E3x)
    }
    ;
    a2x.bJH0x = function(zI2x) {
        zI2x = (zI2x || "").trim();
        return !zI2x ? null : bb3x.bjA4E(zI2x)
    }
    ;
    a2x.chh7a = function(cL4P, t3x) {
        cL4P = cL4P || "";
        switch (t3x) {
        case "xml":
            cL4P = a2x.bJH0x(cL4P);
            break;
        case "json":
            try {
                cL4P = JSON.parse(cL4P)
            } catch (ex) {
                cL4P = null
            }
            break
        }
        return cL4P
    }
    ;
    a2x.hR6L = cN4R.hR6L = function() {
        var chD7w = function(E3x) {
            return E3x == document.body || E3x == document.documentElement
        };
        return function(dH4L, nu8m) {
            dH4L = a2x.z3x(dH4L);
            if (!dH4L)
                return null;
            nu8m = a2x.z3x(nu8m) || null;
            var m3x = {
                x: 0,
                y: 0
            }, bjt4x, dg4k, WX0x;
            while (!!dH4L && dH4L != nu8m) {
                bjt4x = chD7w(dH4L);
                dg4k = bjt4x ? 0 : dH4L.scrollLeft;
                WX0x = parseInt(a2x.da4e(dH4L, "borderLeftWidth")) || 0;
                m3x.x += dH4L.offsetLeft + WX0x - dg4k;
                dg4k = bjt4x ? 0 : dH4L.scrollTop;
                WX0x = parseInt(a2x.da4e(dH4L, "borderTopWidth")) || 0;
                m3x.y += dH4L.offsetTop + WX0x - dg4k;
                dH4L = dH4L.offsetParent
            }
            return m3x
        }
    }();
    a2x.mU8M = cN4R.mU8M = function(E3x) {
        var bj3x = a2x.hR6L(E3x);
        window.scrollTo(bj3x.x, bj3x.y);
        return this
    }
    ;
    a2x.cuM1x = function(sg9X) {
        sg9X = (sg9X || "").trim();
        return bb3x.bzn8f(sg9X)
    }
    ;
    a2x.chS7L = cN4R.chS7L = function(E3x, T3x, bv3x) {
        E3x = a2x.z3x(E3x);
        if (!E3x)
            return this;
        var A3x = bb3x.bAp8h(T3x, bv3x);
        if (!A3x)
            return this;
        a2x.Y3x(E3x, "transform", A3x);
        return this
    }
    ;
    a2x.fA5F = cN4R.fA5F = function(E3x, bv3x) {
        E3x = a2x.z3x(E3x);
        if (!!E3x)
            k3x.ej5o(bv3x, function(A3x, T3x) {
                a2x.Y3x(E3x, T3x, A3x)
            });
        return this
    }
    ;
    a2x.cij8b = cN4R.cij8b = function(fF5K, e3x) {
        fF5K = a2x.z3x(fF5K);
        if (!fF5K)
            return {
                start: 0,
                end: 0
            };
        if (k3x.uE0x(e3x))
            e3x = {
                start: e3x,
                end: e3x
            };
        if (e3x != null) {
            if (e3x.end == null)
                e3x.end = e3x.start || 0;
            bb3x.beY3x(fF5K, e3x)
        } else {
            e3x = bb3x.bgd3x(fF5K)
        }
        return e3x
    }
    ;
    a2x.Y3x = cN4R.Y3x = function(E3x, T3x, A3x) {
        E3x = a2x.z3x(E3x);
        if (!!E3x)
            bb3x.baQ2x(E3x, T3x, A3x);
        return this
    }
    ;
    a2x.da4e = cN4R.da4e = function(E3x, T3x) {
        E3x = a2x.z3x(E3x);
        if (!E3x)
            return "";
        var gq5v = !window.getComputedStyle ? E3x.currentStyle || X3x : window.getComputedStyle(E3x, null);
        return gq5v[bb3x.bAA8s(T3x)] || ""
    }
    ;
    a2x.bKh1x = function() {
        var cO4S = /[\s\r\n]+/gi;
        return function(cd4h) {
            cd4h = (cd4h || "").trim().replace(cO4S, " ");
            if (!cd4h)
                return;
            var f3x = a2x.cT4X("style");
            document.head.appendChild(f3x);
            bb3x.bdr2x(f3x, bb3x.cmP9G(cd4h));
            return f3x
        }
    }();
    a2x.bKi1x = function(wq1x) {
        try {
            wq1x = wq1x.trim();
            if (!!wq1x)
                return (new Function(wq1x))()
        } catch (ex) {
            console.error(ex.message);
            console.error(ex.stack)
        }
    }
    ;
    a2x.rL9C = function() {
        var cO4S = /#<.*?>/g
          , fV5a = +(new Date);
        return function(jp6j) {
            if (!He4i)
                He4i = [];
            var fi5n = "auto-" + fV5a++;
            He4i.push(jp6j.replace(cO4S, fi5n));
            return fi5n
        }
    }();
    a2x.bJn0x = function() {
        if (!!He4i) {
            a2x.bKh1x(He4i.join(""));
            He4i = null
        }
        return this
    }
    ;
    a2x.cuH1x = function(cd4h, jp6j) {
        cd4h = a2x.z3x(cd4h);
        return !cd4h ? null : bb3x.bea3x(cd4h, jp6j)
    }
    ;
    a2x.y3x = cN4R.y3x = function() {
        bb3x.bqv6p.apply(bb3x, arguments);
        return this
    }
    ;
    a2x.w3x = cN4R.w3x = function() {
        bb3x.baK2x.apply(bb3x, arguments);
        return this
    }
    ;
    a2x.eu5z = cN4R.eu5z = function() {
        bb3x.Kx5C.apply(bb3x, arguments);
        return this
    }
    ;
    a2x.bB3x = cN4R.bB3x = function() {
        return bb3x.bcL2x.apply(bb3x, arguments)
    }
    ;
    if (!document.head)
        document.head = document.getElementsByTagName("head")[0] || document.body;
    cN4R.isChange = !0
})();
(function() {
    var c2x = NEJ.P
      , X3x = NEJ.O
      , fc5h = NEJ.R
      , bn3x = NEJ.F
      , a2x = c2x("nej.e")
      , bb3x = c2x("nej.h")
      , k3x = c2x("nej.u");
    var DY3x = function(i3x, t3x) {
        try {
            t3x = t3x.toLowerCase();
            if (i3x === null)
                return t3x == "null";
            if (i3x === undefined)
                return t3x == "undefined";
            return X3x.toString.call(i3x).toLowerCase() == "[object " + t3x + "]"
        } catch (e) {
            return !1
        }
    };
    k3x.ga5f = function(i3x) {
        return DY3x(i3x, "function")
    }
    ;
    k3x.fl5q = function(i3x) {
        return DY3x(i3x, "string")
    }
    ;
    k3x.uE0x = function(i3x) {
        return DY3x(i3x, "number")
    }
    ;
    k3x.cuG1x = function(i3x) {
        return DY3x(i3x, "boolean")
    }
    ;
    k3x.FQ3x = function(i3x) {
        return DY3x(i3x, "date")
    }
    ;
    k3x.ep5u = function(i3x) {
        return DY3x(i3x, "array")
    }
    ;
    k3x.kR7K = function(i3x) {
        return DY3x(i3x, "object")
    }
    ;
    k3x.fk5p = function() {
        var cO4S = /[^\x00-\xfff]/g;
        return function(bi3x) {
            return ("" + (bi3x || "")).replace(cO4S, "**").length
        }
    }();
    k3x.cW4a = function(j3x, q3x) {
        var dC4G = k3x.ga5f(q3x) ? q3x : function(A3x) {
            return A3x === q3x
        }
          , r3x = k3x.ej5o(j3x, dC4G);
        return r3x != null ? r3x : -1
    }
    ;
    k3x.cuF1x = function() {
        var bKZ1x;
        var NY7R = function(j3x, oe8W, oh8Z) {
            if (oe8W > oh8Z)
                return -1;
            var Ea3x = Math.ceil((oe8W + oh8Z) / 2)
              , m3x = bKZ1x(j3x[Ea3x], Ea3x, j3x);
            if (m3x == 0)
                return Ea3x;
            if (m3x < 0)
                return NY7R(j3x, oe8W, Ea3x - 1);
            return NY7R(j3x, Ea3x + 1, oh8Z)
        };
        return function(j3x, Hl4p) {
            bKZ1x = Hl4p || bn3x;
            return NY7R(j3x, 0, j3x.length - 1)
        }
    }();
    k3x.me7X = function(j3x, dr4v, io6i) {
        if (!j3x || !j3x.length || !k3x.ga5f(dr4v))
            return null;
        for (var i = j3x.length - 1; i >= 0; i--)
            if (!!dr4v.call(io6i, j3x[i], i, j3x))
                return i;
        return null
    }
    ;
    k3x.be3x = function(j3x, dr4v, io6i) {
        if (!j3x || !j3x.length || !k3x.ga5f(dr4v))
            return this;
        if (!!j3x.forEach) {
            j3x.forEach(dr4v, io6i);
            return this
        }
        for (var i = 0, l = j3x.length; i < l; i++)
            dr4v.call(io6i, j3x[i], i, j3x);
        return this
    }
    ;
    k3x.ej5o = function(j3x, dr4v, io6i) {
        if (!j3x || !k3x.ga5f(dr4v))
            return null;
        if (j3x.length != null) {
            if (j3x.length > 0)
                for (var i = 0, l = j3x.length; i < l; i++)
                    if (!!dr4v.call(io6i, j3x[i], i, j3x))
                        return i
        }
        if (k3x.kR7K(j3x)) {
            for (var x in j3x)
                if (j3x.hasOwnProperty(x) && !!dr4v.call(io6i, j3x[x], x, j3x))
                    return x
        }
        return null
    }
    ;
    k3x.cle8W = function(ij6d, clh8Z, e3x) {
        ij6d = ij6d || [];
        e3x = e3x || X3x;
        var bLq1x = !!e3x.union
          , uK0x = !!e3x.begin
          , Ww9n = e3x.compare
          , cph9Y = bLq1x && uK0x ? k3x.me7X : k3x.be3x;
        cph9Y(clh8Z, function(q3x) {
            if (!!Ww9n)
                Ww9n = Ww9n.dW5b(q3x);
            var r3x = k3x.cW4a(ij6d, Ww9n || q3x);
            if (r3x >= 0)
                ij6d.splice(r3x, 1);
            if (bLq1x)
                ij6d[uK0x ? "unshift" : "push"](q3x)
        });
        return ij6d
    }
    ;
    k3x.Eh3x = function(bv3x, bi3x) {
        if (!bv3x || !bi3x || !bi3x.replace)
            return bi3x || "";
        return bi3x.replace(bv3x.r, function($1) {
            var m3x = bv3x[!bv3x.i ? $1.toLowerCase() : $1];
            return m3x != null ? m3x : $1
        })
    }
    ;
    k3x.dJ4N = function() {
        var bv3x = {
            r: /\<|\>|\&lt;|\&gt;|\&|\r|\n|\s|\'|\"/g,
            "<": "&lt;",
            ">": "&gt;",
            "&": "&amp;",
            " ": "&nbsp;",
            '"': "&quot;",
            "'": "&#39;",
            "\n": "<br/>",
            "\r": "",
            "&lt;": "&lt;",
            "&gt;": "&gt;"
        };
        return function(bi3x) {
            return k3x.Eh3x(bv3x, bi3x)
        }
    }();
    k3x.Os7l = function() {
        var bv3x = {
            r: /\&(?:lt|gt|amp|nbsp|#39|quot)\;|\<br\/\>/gi,
            "&lt;": "<",
            "&gt;": ">",
            "&amp;": "&",
            "&nbsp;": " ",
            "&#39;": "'",
            "&quot;": '"',
            "<br/>": "\n"
        };
        return function(bi3x) {
            return k3x.Eh3x(bv3x, bi3x)
        }
    }();
    k3x.iN6H = function() {
        var bv3x = {
            i: !0,
            r: /\byyyy|yy|MM|cM|eM|M|dd|d|HH|H|mm|ms|ss|m|s|w|ct|et\b/g
        }
          , cpM0x = ["上午", "下午"]
          , cpN0x = ["A.M.", "P.M."]
          , bbo2x = ["日", "一", "二", "三", "四", "五", "六"]
          , crI0x = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"]
          , csH0x = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
        var OL7E = function(go5t) {
            go5t = parseInt(go5t) || 0;
            return (go5t < 10 ? "0" : "") + go5t
        };
        var cto0x = function(ox8p) {
            return ox8p < 12 ? 0 : 1
        };
        return function(bz3x, FC3x, ctu0x) {
            if (!bz3x || !FC3x)
                return "";
            bz3x = k3x.Wk9b(bz3x);
            bv3x.yyyy = bz3x.getFullYear();
            bv3x.yy = ("" + bv3x.yyyy).substr(2);
            bv3x.M = bz3x.getMonth() + 1;
            bv3x.MM = OL7E(bv3x.M);
            bv3x.eM = csH0x[bv3x.M - 1];
            bv3x.cM = crI0x[bv3x.M - 1];
            bv3x.d = bz3x.getDate();
            bv3x.dd = OL7E(bv3x.d);
            bv3x.H = bz3x.getHours();
            bv3x.HH = OL7E(bv3x.H);
            bv3x.m = bz3x.getMinutes();
            bv3x.mm = OL7E(bv3x.m);
            bv3x.s = bz3x.getSeconds();
            bv3x.ss = OL7E(bv3x.s);
            bv3x.ms = bz3x.getMilliseconds();
            bv3x.w = bbo2x[bz3x.getDay()];
            var bOi2x = cto0x(bv3x.H);
            bv3x.ct = cpM0x[bOi2x];
            bv3x.et = cpN0x[bOi2x];
            if (!!ctu0x) {
                bv3x.H = bv3x.H % 12
            }
            return k3x.Eh3x(bv3x, FC3x)
        }
    }();
    k3x.Wk9b = function(bz3x) {
        var cD4H = bz3x;
        if (k3x.fl5q(bz3x))
            cD4H = new Date(Date.parse(bz3x));
        if (!k3x.FQ3x(bz3x))
            cD4H = new Date(bz3x);
        return cD4H
    }
    ;
    k3x.GB4F = function(ctL0x, ctG0x) {
        return (new Number(ctL0x)).toFixed(ctG0x)
    }
    ;
    k3x.bdp2x = function() {
        var fW5b = /([^\/:])\/.*$/
          , jw6q = /\/[^\/]+$/
          , Er3x = /[#\?]/
          , bdx2x = location.href.split(/[?#]/)[0]
          , sf9W = document.createElement("a");
        var bdV3x = function(lt7m) {
            return (lt7m || "").indexOf("://") > 0
        };
        var bOc2x = function(lt7m) {
            return (lt7m || "").split(Er3x)[0].replace(jw6q, "/")
        };
        var ctD0x = function(lt7m, fu5z) {
            if (lt7m.indexOf("/") == 0)
                return fu5z.replace(fW5b, "$1") + lt7m;
            return bOc2x(fu5z) + lt7m
        };
        bdx2x = bOc2x(bdx2x);
        return function(lt7m, fu5z) {
            lt7m = (lt7m || "").trim();
            if (!bdV3x(fu5z))
                fu5z = bdx2x;
            if (!lt7m)
                return fu5z;
            if (bdV3x(lt7m))
                return lt7m;
            lt7m = ctD0x(lt7m, fu5z);
            sf9W.href = lt7m;
            lt7m = sf9W.href;
            return bdV3x(lt7m) ? lt7m : sf9W.getAttribute("href", 4)
        }
    }();
    k3x.ctA0x = function() {
        var cO4S = /^([\w]+?:\/\/.*?(?=\/|$))/i;
        return function(V3x) {
            if (cO4S.test(V3x || ""))
                return RegExp.$1.toLowerCase();
            return ""
        }
    }();
    k3x.bNY2x = function(G3x, in6h) {
        if (!G3x)
            return in6h;
        var T3x = G3x.tagName.toLowerCase()
          , j3x = a2x.cQ4U(G3x);
        if (!j3x || !j3x.length) {
            in6h[T3x] = G3x.textContent || G3x.text || "";
            return in6h
        }
        var dP5U = {};
        in6h[T3x] = dP5U;
        k3x.be3x(j3x, function(f3x) {
            k3x.bNY2x(f3x, dP5U)
        });
        return in6h
    }
    ;
    k3x.ctV1x = function(zI2x) {
        try {
            return k3x.bNY2x(a2x.bJH0x(zI2x), {})
        } catch (ex) {
            return null
        }
    }
    ;
    k3x.bNX2x = function(hy6s, Pn7g) {
        var in6h = {};
        k3x.be3x((hy6s || "").split(Pn7g), function(T3x) {
            var Wc9T = T3x.split("=");
            if (!Wc9T || !Wc9T.length)
                return;
            var J3x = Wc9T.shift();
            if (!J3x)
                return;
            in6h[decodeURIComponent(J3x)] = decodeURIComponent(Wc9T.join("="))
        });
        return in6h
    }
    ;
    k3x.uf0x = function(gd5i, Pn7g, cts0x) {
        if (!gd5i)
            return "";
        var bs3x = [];
        for (var x in gd5i) {
            bs3x.push(encodeURIComponent(x) + "=" + (!!cts0x ? encodeURIComponent(gd5i[x]) : gd5i[x]))
        }
        return bs3x.join(Pn7g || ",")
    }
    ;
    k3x.hj6d = function(bw3x) {
        return k3x.bNX2x(bw3x, "&")
    }
    ;
    k3x.db4f = function(gd5i) {
        return k3x.uf0x(gd5i, "&", !0)
    }
    ;
    k3x.ctW1x = function(gd5i) {
        return bb3x.IA4E(gd5i)
    }
    ;
    k3x.ctX1x = function(j3x, dC4G) {
        var m3x = {};
        k3x.be3x(j3x, function(q3x) {
            var J3x = q3x;
            if (!!dC4G) {
                J3x = dC4G(q3x)
            }
            m3x[J3x] = q3x
        });
        return m3x
    }
    ;
    k3x.ctY1x = function(go5t, fX5c) {
        var ctl0x = ("" + go5t).length
          , ctk0x = Math.max(1, parseInt(fX5c) || 0)
          , dg4k = ctk0x - ctl0x;
        if (dg4k > 0) {
            go5t = (new Array(dg4k + 1)).join("0") + go5t
        }
        return "" + go5t
    }
    ;
    k3x.RB8t = function(gd5i, T3x) {
        if (!k3x.ep5u(T3x)) {
            try {
                delete gd5i[T3x]
            } catch (e) {
                gd5i[T3x] = undefined
            }
            return this
        }
        k3x.be3x(T3x, k3x.RB8t.g3x(k3x, gd5i));
        return this
    }
    ;
    k3x.XX0x = function() {
        var bNU1x = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
        return function(br3x) {
            br3x = br3x || 10;
            var m3x = [];
            for (var i = 0, bNT1x; i < br3x; ++i) {
                bNT1x = Math.floor(Math.random() * bNU1x.length);
                m3x.push(bNU1x.charAt(bNT1x))
            }
            return m3x.join("")
        }
    }();
    k3x.PX7Q = function(fJ5O, fe5j) {
        return Math.floor(Math.random() * (fe5j - fJ5O) + fJ5O)
    }
    ;
    k3x.ne8W = function(br3x) {
        br3x = Math.max(0, Math.min(br3x || 8, 30));
        var fJ5O = Math.pow(10, br3x - 1)
          , fe5j = fJ5O * 10;
        return k3x.PX7Q(fJ5O, fe5j).toString()
    }
    ;
    k3x.VO9F = function() {
        var fV5a = +(new Date);
        return function() {
            return "" + fV5a++
        }
    }()
})();
(function() {
    var c2x = NEJ.P, X3x = NEJ.O, fc5h = NEJ.R, bn3x = NEJ.F, h3x = c2x("nej.v"), k3x = c2x("nej.u"), M3x = c2x("nej.ut"), no8g;
    if (!!M3x.cz4D)
        return;
    M3x.cz4D = NEJ.C();
    no8g = M3x.cz4D.prototype;
    M3x.cz4D.B3x = function(e3x) {
        e3x = e3x || {};
        var cq4u = !!this.zj1x && this.zj1x.shift();
        if (!cq4u) {
            cq4u = new this(e3x);
            this.cth0x = (this.cth0x || 0) + 1
        }
        cq4u.bk3x(e3x);
        return cq4u
    }
    ;
    M3x.cz4D.S3x = function() {
        var Qd7W = function(q3x, r3x, j3x) {
            q3x.S3x();
            j3x.splice(r3x, 1)
        };
        return function(cq4u) {
            if (!cq4u)
                return null;
            if (!k3x.ep5u(cq4u)) {
                if (!(cq4u instanceof this)) {
                    var fi5n = cq4u.constructor;
                    if (!!fi5n.S3x)
                        fi5n.S3x(cq4u);
                    return null
                }
                if (cq4u == this.eM5R)
                    delete this.eM5R;
                if (cq4u == this.zE2x)
                    delete this.zE2x;
                cq4u.bD3x();
                if (!this.zj1x)
                    this.zj1x = [];
                if (k3x.cW4a(this.zj1x, cq4u) < 0) {
                    this.zj1x.push(cq4u)
                }
                return null
            }
            k3x.me7X(cq4u, Qd7W, this)
        }
    }();
    M3x.cz4D.fY5d = function(e3x) {
        e3x = e3x || {};
        if (!this.eM5R)
            this.eM5R = this.B3x(e3x);
        return this.eM5R
    }
    ;
    M3x.cz4D.ctg0x = function(e3x, qd9U) {
        e3x = e3x || {};
        if (!!qd9U && !!this.zE2x) {
            this.zE2x.S3x();
            delete this.zE2x
        }
        if (!this.zE2x) {
            this.zE2x = this.B3x(e3x)
        } else {
            this.zE2x.bk3x(e3x)
        }
        return this.zE2x
    }
    ;
    no8g.cl4p = function() {
        var fV5a = +(new Date);
        return function() {
            this.id = fV5a++;
            this.lh7a = {};
            this.bNS1x = {}
        }
    }();
    no8g.bk3x = function(e3x) {
        this.blq4u(e3x)
    }
    ;
    no8g.bD3x = function() {
        this.hF6z();
        this.EX3x()
    }
    ;
    no8g.bT3x = function() {
        var fV5a = +(new Date);
        var csN0x = function(bg3x) {
            if (!bg3x || bg3x.length < 3)
                return;
            this.bNS1x["de-" + fV5a++] = bg3x;
            h3x.s3x.apply(h3x, bg3x)
        };
        return function(j3x) {
            k3x.be3x(j3x, csN0x, this)
        }
    }();
    no8g.EX3x = function() {
        var csI0x = function(bg3x, J3x, bv3x) {
            delete bv3x[J3x];
            h3x.ma7T.apply(h3x, bg3x)
        };
        return function() {
            k3x.ej5o(this.bNS1x, csI0x)
        }
    }();
    no8g.cuc1x = function(dC4G) {
        dC4G = dC4G || bn3x;
        k3x.ej5o(this, function(EM3x, J3x, bv3x) {
            if (!!EM3x && !!EM3x.S3x && !dC4G(EM3x)) {
                delete bv3x[J3x];
                EM3x.S3x()
            }
        })
    }
    ;
    no8g.S3x = function() {
        this.constructor.S3x(this)
    }
    ;
    no8g.bNM1x = function(t3x) {
        var d2x = this.lh7a[t3x.toLowerCase()];
        return !!d2x && d2x !== bn3x
    }
    ;
    no8g.s3x = function(t3x, d2x) {
        this.ui0x.apply(this, arguments);
        return this
    }
    ;
    no8g.ma7T = function(t3x, d2x) {
        var t3x = (t3x || "").toLowerCase()
          , dE4I = this.lh7a[t3x];
        if (!k3x.ep5u(dE4I)) {
            if (dE4I == d2x)
                delete this.lh7a[t3x];
            return
        }
        k3x.me7X(dE4I, function(eC5H, r3x, j3x) {
            if (eC5H == d2x)
                j3x.splice(r3x, 1)
        })
    }
    ;
    no8g.ui0x = function(t3x, d2x) {
        if (!!t3x && k3x.ga5f(d2x))
            this.lh7a[t3x.toLowerCase()] = d2x;
        return this
    }
    ;
    no8g.blq4u = function() {
        var csF0x = function(d2x, t3x) {
            this.ui0x(t3x, d2x)
        };
        return function(dE4I) {
            k3x.ej5o(dE4I, csF0x, this);
            return this
        }
    }();
    no8g.hF6z = function() {
        var bmy5D = function(d2x, t3x) {
            this.hF6z(t3x)
        };
        return function(t3x) {
            var t3x = (t3x || "").toLowerCase();
            if (!!t3x) {
                delete this.lh7a[t3x]
            } else {
                k3x.ej5o(this.lh7a, bmy5D, this)
            }
            return this
        }
    }();
    no8g.bmz5E = function(t3x, d2x) {
        if (!t3x || !k3x.ga5f(d2x))
            return this;
        t3x = t3x.toLowerCase();
        var dE4I = this.lh7a[t3x];
        if (!dE4I) {
            this.lh7a[t3x] = d2x;
            return this
        }
        if (!k3x.ep5u(dE4I)) {
            this.lh7a[t3x] = [dE4I]
        }
        this.lh7a[t3x].push(d2x);
        return this
    }
    ;
    no8g.x3x = function(t3x) {
        var d2x = this.lh7a[(t3x || "").toLowerCase()];
        if (!d2x)
            return this;
        var bg3x = fc5h.slice.call(arguments, 1);
        if (!k3x.ep5u(d2x))
            return d2x.apply(this, bg3x);
        k3x.be3x(d2x, function(dd4h) {
            try {
                dd4h.apply(this, bg3x)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        }, this);
        return this
    }
    ;
    M3x.Vz9q = function() {
        var Q3x = {};
        return function(C3x, fi5n, e3x) {
            var eH5M = fi5n.csD0x;
            if (!eH5M) {
                eH5M = k3x.XX0x(10);
                fi5n.csD0x = eH5M
            }
            var J3x = C3x + "-" + eH5M
              , cq4u = Q3x[J3x];
            if (!!e3x && !cq4u) {
                cq4u = fi5n.B3x(e3x);
                cq4u.S3x = cq4u.S3x.ed5i(function(d2x) {
                    delete Q3x[J3x];
                    delete cq4u.S3x
                });
                Q3x[J3x] = cq4u
            }
            return cq4u
        }
    }()
})();
(function() {
    var o = NEJ.O
      , u = NEJ.P("nej.u")
      , j = NEJ.P("nej.j");
    j.gI5N = function() {
        var cD4H = new Date
          , csC0x = +cD4H
          , bol5q = 864e5;
        var csB0x = function(T3x) {
            var rd9U = document.cookie
              , rD9u = "\\b" + T3x + "="
              , Vx9o = rd9U.search(rD9u);
            if (Vx9o < 0)
                return "";
            Vx9o += rD9u.length - 2;
            var zf1x = rd9U.indexOf(";", Vx9o);
            if (zf1x < 0)
                zf1x = rd9U.length;
            return rd9U.substring(Vx9o, zf1x) || ""
        };
        return function(T3x, i3x) {
            if (i3x === undefined)
                return csB0x(T3x);
            if (u.fl5q(i3x)) {
                if (!!i3x) {
                    document.cookie = T3x + "=" + i3x + ";";
                    return i3x
                }
                i3x = {
                    expires: -100
                }
            }
            i3x = i3x || o;
            var rd9U = T3x + "=" + (i3x.value || "") + ";";
            delete i3x.value;
            if (i3x.expires !== undefined) {
                cD4H.setTime(csC0x + i3x.expires * bol5q);
                i3x.expires = cD4H.toGMTString()
            }
            rd9U += u.uf0x(i3x, ";");
            document.cookie = rd9U
        }
    }()
})();
(function() {
    var c2x = NEJ.P, bn3x = NEJ.F, iy6s = c2x("nej.c"), dO4S = c2x("nej.g"), a2x = c2x("nej.e"), v3x = c2x("nej.j"), H3x = c2x("nej.ut"), M3x = c2x("nej.ut.j"), k3x = c2x("nej.u"), b2x;
    if (!!M3x.EU3x)
        return;
    M3x.EU3x = NEJ.C();
    b2x = M3x.EU3x.O3x(H3x.cz4D);
    b2x.bk3x = function(e3x) {
        this.bl3x(e3x);
        this.oG8y = {
            noescape: false,
            url: "",
            sync: !1,
            cookie: !1,
            type: "text",
            method: "GET",
            timeout: 6e4
        };
        NEJ.EX(this.oG8y, e3x);
        var yM1x = iy6s.z3x("csrf");
        if ((/^\/[^\/]/.test(this.oG8y.url) || this.oG8y.url.indexOf(location.protocol + "//" + location.host) == 0) && !!yM1x.cookie && !!yM1x.param) {
            var bw3x = encodeURIComponent(yM1x.param) + "=" + encodeURIComponent(v3x.gI5N(yM1x.cookie) || "")
              , Pn7g = this.oG8y.url.indexOf("?") < 0 ? "?" : "&";
            this.oG8y.url += Pn7g + bw3x
        }
        this.Vu9l = e3x.headers || {};
        var bi3x = this.Vu9l[dO4S.xf1x];
        if (bi3x == null)
            this.Vu9l[dO4S.xf1x] = dO4S.bRV4Z
    }
    ;
    b2x.bD3x = function() {
        this.bH3x();
        delete this.zG2x;
        delete this.oG8y;
        delete this.Vu9l
    }
    ;
    b2x.csy0x = function(bi3x) {
        var bv3x = {
            r: /\<|\>/g,
            "<": "&lt;",
            ">": "&gt;"
        };
        if (!this.oG8y.noescape) {
            return k3x.Eh3x(bv3x, bi3x)
        } else {
            return bi3x
        }
    }
    ;
    b2x.sV0x = function(d2x) {
        var dY5d = d2x.status;
        if (dY5d == -1) {
            this.x3x("onerror", {
                code: dO4S.bwl7e,
                message: "请求[" + this.oG8y.url + "]超时！"
            });
            return
        }
        if (("" + dY5d).indexOf("2") != 0) {
            this.x3x("onerror", {
                data: dY5d,
                code: dO4S.blW5b,
                message: "服务器返回异常状态[" + dY5d + "]!",
                extData: d2x.result
            });
            return
        }
        this.x3x("onload", a2x.chh7a(this.csy0x(d2x.result), this.oG8y.type))
    }
    ;
    b2x.ck4o = bn3x;
    b2x.bbm2x = function(i3x) {
        var V3x = this.oG8y.url;
        if (!V3x) {
            this.x3x("onerror", {
                code: dO4S.biS4W,
                message: "没有输入请求地址！"
            });
            return this
        }
        try {
            this.oG8y.data = i3x == null ? null : i3x;
            var d2x = {
                request: this.oG8y,
                headers: this.Vu9l
            };
            try {
                this.x3x("onbeforerequest", d2x)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
            this.ck4o(d2x)
        } catch (e) {
            this.x3x("onerror", {
                code: dO4S.blW5b,
                message: "请求[" + V3x + "]失败:" + e.message + "！"
            })
        }
        return this
    }
    ;
    b2x.jj6d = bn3x
})();
(function() {
    var c2x = NEJ.P, bn3x = NEJ.F, bb3x = c2x("nej.h"), dO4S = c2x("nej.g"), k3x = c2x("nej.u"), M3x = c2x("nej.ut.j"), Q3x = {}, Jx4B;
    if (!!M3x.Vm9d)
        return;
    M3x.Vm9d = NEJ.C();
    Jx4B = M3x.Vm9d.O3x(M3x.EU3x);
    Jx4B.bD3x = function() {
        this.bH3x();
        window.clearTimeout(this.dK4O);
        delete this.dK4O;
        try {
            this.qf9W.onreadystatechange = bn3x;
            this.qf9W.abort()
        } catch (e) {}
        delete this.qf9W
    }
    ;
    Jx4B.ck4o = function() {
        var csx0x = function(A3x, J3x) {
            this.qf9W.setRequestHeader(J3x, A3x)
        };
        return function(e3x) {
            var fy5D = e3x.request
              , nK8C = e3x.headers;
            this.qf9W = bb3x.bcB2x();
            if (nK8C[dO4S.xf1x] === dO4S.BC2x) {
                delete nK8C[dO4S.xf1x];
                this.qf9W.upload.onprogress = this.hp6j.g3x(this, 1);
                if (fy5D.data.tagName === "FORM")
                    fy5D.data = new FormData(fy5D.data)
            }
            this.qf9W.onreadystatechange = this.hp6j.g3x(this, 2);
            if (fy5D.timeout != 0) {
                this.dK4O = window.setTimeout(this.hp6j.g3x(this, 3), fy5D.timeout)
            }
            this.qf9W.open(fy5D.method, fy5D.url, !fy5D.sync);
            k3x.ej5o(nK8C, csx0x, this);
            if (!!this.oG8y.cookie && "withCredentials"in this.qf9W)
                this.qf9W.withCredentials = !0;
            this.qf9W.send(fy5D.data)
        }
    }();
    Jx4B.hp6j = function(t3x) {
        switch (t3x) {
        case 1:
            this.x3x("onuploading", arguments[1]);
            break;
        case 2:
            if (this.qf9W.readyState == 4)
                this.sV0x({
                    status: this.qf9W.status,
                    result: this.qf9W.responseText || ""
                });
            break;
        case 3:
            this.sV0x({
                status: -1
            });
            break
        }
    }
    ;
    Jx4B.jj6d = function() {
        this.sV0x({
            status: 0
        });
        return this
    }
})();
(function() {
    if (typeof TrimPath === "undefined") {
        TrimPath = {};
        if (typeof exports !== "undefined")
            TrimPath = exports
    }
    var Kj5o = {}, Vd9U = [], bNJ1x = /\s+/g, fV5a = +(new Date), Fw3x, bN3x, lu7n;
    var Ef3x = function() {
        var fW5b = /^\s*[\[\{'"].*?[\]\}'"]\s*$/
          , jw6q = /[\&\|\<\>\+\-\*\/\%\,\(\)\[\]\?\:\!\=\;\s]/
          , Er3x = /^(?:defined|null|undefined|true|false|instanceof|new|this|typeof|\$v|[\d]+)$/i
          , bdj2x = /^new\s+/
          , css0x = /['"]/;
        var csm0x = function(A3x) {
            if (fW5b.test(A3x))
                return;
            A3x = A3x.split(".")[0].trim();
            if (!A3x || css0x.test(A3x))
                return;
            A3x = A3x.replace(bdj2x, "");
            try {
                if (Er3x.test(A3x))
                    return;
                lu7n[A3x] = 1
            } catch (e) {}
        };
        return function(bi3x) {
            bi3x = bi3x || "";
            if (!bi3x || fW5b.test(bi3x))
                return;
            var bs3x = bi3x.split(jw6q);
            for (var i = 0, l = bs3x.length; i < l; i++)
                csm0x(bs3x[i])
        }
    }();
    var csj0x = function(dl4p) {
        if (dl4p[2] != "in")
            throw "bad for loop statement: " + dl4p.join(" ");
        Vd9U.push(dl4p[1]);
        Ef3x(dl4p[3]);
        return "var __HASH__" + dl4p[1] + " = " + dl4p[3] + "," + dl4p[1] + "," + dl4p[1] + "_count=0;" + "if (!!__HASH__" + dl4p[1] + ")" + "for(var " + dl4p[1] + "_key in __HASH__" + dl4p[1] + "){" + dl4p[1] + " = __HASH__" + dl4p[1] + "[" + dl4p[1] + "_key];" + "if (typeof(" + dl4p[1] + ')=="function") continue;' + dl4p[1] + "_count++;"
    };
    var csi0x = function() {
        var dl4p = Vd9U[Vd9U.length - 1];
        return "}; if(!__HASH__" + dl4p + "||!" + dl4p + "_count){"
    };
    var csf0x = function() {
        Vd9U.pop();
        return "};"
    };
    var csc0x = function(dl4p) {
        if (dl4p[2] != "as")
            throw "bad for list loop statement: " + dl4p.join(" ");
        var KO5T = dl4p[1].split("..");
        if (KO5T.length > 1) {
            Ef3x(KO5T[0]);
            Ef3x(KO5T[1]);
            return "for(var " + dl4p[3] + "," + dl4p[3] + "_index=0," + dl4p[3] + "_beg=" + KO5T[0] + "," + dl4p[3] + "_end=" + KO5T[1] + "," + dl4p[3] + "_length=parseInt(" + dl4p[3] + "_end-" + dl4p[3] + "_beg+1);" + dl4p[3] + "_index<" + dl4p[3] + "_length;" + dl4p[3] + "_index++){" + dl4p[3] + " = " + dl4p[3] + "_beg+" + dl4p[3] + "_index;"
        } else {
            Ef3x(dl4p[1]);
            return "for(var __LIST__" + dl4p[3] + " = " + dl4p[1] + "," + dl4p[3] + "," + dl4p[3] + "_index=0," + dl4p[3] + "_length=__LIST__" + dl4p[3] + ".length;" + dl4p[3] + "_index<" + dl4p[3] + "_length;" + dl4p[3] + "_index++){" + dl4p[3] + " = __LIST__" + dl4p[3] + "[" + dl4p[3] + "_index];"
        }
    };
    var csb0x = function(dl4p) {
        if (!dl4p || !dl4p.length)
            return;
        dl4p.shift();
        var T3x = dl4p[0].split("(")[0];
        return "var " + T3x + " = function" + dl4p.join("").replace(T3x, "") + "{var __OUT=[];"
    };
    var crW0x = function(dl4p) {
        if (!dl4p[1])
            throw "bad include statement: " + dl4p.join(" ");
        return 'if (typeof inline == "function"){__OUT.push(inline('
    };
    var bdW3x = function(lb7U, dl4p) {
        Ef3x(dl4p.slice(1).join(" "));
        return lb7U
    };
    var crV0x = function(dl4p) {
        return bdW3x("if(", dl4p)
    };
    var crS0x = function(dl4p) {
        return bdW3x("}else if(", dl4p)
    };
    var crR0x = function(dl4p) {
        return bdW3x("var ", dl4p)
    };
    bN3x = {
        blk: /^\{(cdata|minify|eval)/i,
        tag: "forelse|for|list|if|elseif|else|var|macro|break|notrim|trim|include",
        def: {
            "if": {
                pfix: crV0x,
                sfix: "){",
                pmin: 1
            },
            "else": {
                pfix: "}else{"
            },
            elseif: {
                pfix: crS0x,
                sfix: "){",
                pdft: "true"
            },
            "/if": {
                pfix: "}"
            },
            "for": {
                pfix: csj0x,
                pmin: 3
            },
            forelse: {
                pfix: csi0x
            },
            "/for": {
                pfix: csf0x
            },
            list: {
                pfix: csc0x,
                pmin: 3
            },
            "/list": {
                pfix: "};"
            },
            "break": {
                pfix: "break;"
            },
            "var": {
                pfix: crR0x,
                sfix: ";"
            },
            macro: {
                pfix: csb0x
            },
            "/macro": {
                pfix: 'return __OUT.join("");};'
            },
            trim: {
                pfix: function() {
                    Fw3x = !0
                }
            },
            "/trim": {
                pfix: function() {
                    Fw3x = null
                }
            },
            inline: {
                pfix: crW0x,
                pmin: 1,
                sfix: "));}"
            }
        },
        ext: {
            seed: function(lb7U) {
                return (lb7U || "") + "" + fV5a
            },
            "default": function(A3x, kM7F) {
                return A3x || kM7F
            }
        }
    };
    var crQ0x = function() {
        var crJ0x = /\\([\{\}])/g;
        return function(bi3x, iK6E) {
            bi3x = bi3x.replace(crJ0x, "$1");
            var dl4p = bi3x.slice(1, -1).split(bNJ1x)
              , bc3x = bN3x.def[dl4p[0]];
            if (!bc3x) {
                UI9z(bi3x, iK6E);
                return
            }
            if (!!bc3x.pmin && bc3x.pmin >= dl4p.length)
                throw "Statement needs more parameters:" + bi3x;
            iK6E.push(!!bc3x.pfix && typeof bc3x.pfix != "string" ? bc3x.pfix(dl4p) : bc3x.pfix || "");
            if (!!bc3x.sfix) {
                if (dl4p.length <= 1) {
                    if (!!bc3x.pdft)
                        iK6E.push(bc3x.pdft)
                } else {
                    for (var i = 1, l = dl4p.length; i < l; i++) {
                        if (i > 1)
                            iK6E.push(" ");
                        iK6E.push(dl4p[i])
                    }
                }
                iK6E.push(bc3x.sfix)
            }
        }
    }();
    var bNy1x = function(FW3x, iK6E) {
        if (!FW3x || !FW3x.length)
            return;
        if (FW3x.length == 1) {
            var bfE3x = FW3x.pop();
            Ef3x(bfE3x);
            iK6E.push(bfE3x == "" ? '""' : bfE3x);
            return
        }
        var bfK3x = FW3x.pop().split(":");
        iK6E.push("__MDF['" + bfK3x.shift() + "'](");
        bNy1x(FW3x, iK6E);
        if (bfK3x.length > 0) {
            var bg3x = bfK3x.join(":");
            Ef3x(bg3x);
            iK6E.push("," + bg3x)
        }
        iK6E.push(")")
    };
    var UI9z = function(bi3x, iK6E) {
        if (!bi3x)
            return;
        var uo0x = bi3x.split("\n");
        if (!uo0x || !uo0x.length)
            return;
        for (var i = 0, l = uo0x.length, gZ6T; i < l; i++) {
            gZ6T = uo0x[i];
            if (!!Fw3x) {
                gZ6T = gZ6T.trim();
                if (!gZ6T)
                    continue
            }
            crw0x(gZ6T, iK6E);
            if (!!Fw3x && i < l - 1)
                iK6E.push("__OUT.push('\\n');")
        }
    };
    var crw0x = function() {
        var cru0x = /\|\|/g
          , crt0x = /#@@#/g;
        return function(bi3x, iK6E) {
            var LB5G = "}", LE5J = -1, br3x = bi3x.length, uK0x, gz5E, Gi3x, Uu9l, LM5R;
            while (LE5J + LB5G.length < br3x) {
                uK0x = "${";
                gz5E = "}";
                Gi3x = bi3x.indexOf(uK0x, LE5J + LB5G.length);
                if (Gi3x < 0)
                    break;
                if (bi3x.charAt(Gi3x + 2) == "%") {
                    uK0x = "${%";
                    gz5E = "%}"
                }
                Uu9l = bi3x.indexOf(gz5E, Gi3x + uK0x.length);
                if (Uu9l < 0)
                    break;
                Us9j(bi3x.substring(LE5J + LB5G.length, Gi3x), iK6E);
                LM5R = bi3x.substring(Gi3x + uK0x.length, Uu9l).replace(cru0x, "#@@#").split("|");
                for (var i = 0, l = LM5R.length; i < l; LM5R[i] = LM5R[i].replace(crt0x, "||"),
                i++)
                    ;
                iK6E.push("__OUT.push(");
                bNy1x(LM5R, iK6E);
                iK6E.push(");");
                LB5G = gz5E;
                LE5J = Uu9l
            }
            Us9j(bi3x.substring(LE5J + LB5G.length), iK6E)
        }
    }();
    var Us9j = function() {
        var bv3x = {
            r: /\n|\\|\'/g,
            "\n": "\\n",
            "\\": "\\\\",
            "'": "\\'"
        };
        var crs0x = function(bi3x) {
            return (bi3x || "").replace(bv3x.r, function($1) {
                return bv3x[$1] || $1
            })
        };
        return function(bi3x, iK6E) {
            if (!bi3x)
                return;
            iK6E.push("__OUT.push('" + crs0x(bi3x) + "');")
        }
    }();
    var crr0x = function() {
        var crn0x = /\t/g
          , crk0x = /\n/g
          , cri0x = /\r\n?/g;
        var bNr1x = function(bi3x, uK0x) {
            var r3x = bi3x.indexOf("}", uK0x + 1);
            while (bi3x.charAt(r3x - 1) == "\\") {
                r3x = bi3x.indexOf("}", r3x + 1)
            }
            return r3x
        };
        var crg0x = function() {
            var bs3x = []
              , Ds3x = arguments[0];
            for (var x in Ds3x) {
                x = (x || "").trim();
                if (!x)
                    continue;
                bs3x.push(x + "=$v('" + x + "')")
            }
            return bs3x.length > 0 ? "var " + bs3x.join(",") + ";" : ""
        };
        return function(bi3x) {
            lu7n = {};
            bi3x = bi3x.replace(cri0x, "\n").replace(crn0x, "    ");
            var qX9O = ["if(!__CTX) return '';", ""];
            qX9O.push("function $v(__NAME){var v = __CTX[__NAME];return v==null?window[__NAME]:v;};");
            qX9O.push("var defined=function(__NAME){return __CTX[__NAME]!=null;},");
            qX9O.push("__OUT=[];");
            var Dr3x = -1
              , br3x = bi3x.length;
            var mx7q, GC4G, My5D, MH5M, yQ1x, ML5Q, bjF4J, MM5R;
            while (Dr3x + 1 < br3x) {
                mx7q = Dr3x;
                mx7q = bi3x.indexOf("{", mx7q + 1);
                while (mx7q >= 0) {
                    GC4G = bNr1x(bi3x, mx7q);
                    My5D = bi3x.substring(mx7q, GC4G);
                    MH5M = My5D.match(bN3x.blk);
                    if (!!MH5M) {
                        yQ1x = MH5M[1].length + 1;
                        ML5Q = bi3x.indexOf("}", mx7q + yQ1x);
                        if (ML5Q >= 0) {
                            bjF4J = ML5Q - mx7q - yQ1x <= 0 ? "{/" + MH5M[1] + "}" : My5D.substr(yQ1x + 1);
                            yQ1x = bi3x.indexOf(bjF4J, ML5Q + 1);
                            if (yQ1x >= 0) {
                                UI9z(bi3x.substring(Dr3x + 1, mx7q), qX9O);
                                MM5R = bi3x.substring(ML5Q + 1, yQ1x);
                                switch (MH5M[1]) {
                                case "cdata":
                                    Us9j(MM5R, qX9O);
                                    break;
                                case "minify":
                                    Us9j(MM5R.replace(crk0x, " ").replace(bNJ1x, " "), qX9O);
                                    break;
                                case "eval":
                                    if (!!MM5R)
                                        qX9O.push("__OUT.push((function(){" + MM5R + "})());");
                                    break
                                }
                                mx7q = Dr3x = yQ1x + bjF4J.length - 1
                            }
                        }
                    } else if (bi3x.charAt(mx7q - 1) != "$" && bi3x.charAt(mx7q - 1) != "\\" && My5D.substr(My5D.charAt(1) == "/" ? 2 : 1).search(bN3x.tag) == 0) {
                        break
                    }
                    mx7q = bi3x.indexOf("{", mx7q + 1)
                }
                if (mx7q < 0)
                    break;
                GC4G = bNr1x(bi3x, mx7q);
                if (GC4G < 0)
                    break;
                UI9z(bi3x.substring(Dr3x + 1, mx7q), qX9O);
                crQ0x(bi3x.substring(mx7q, GC4G + 1), qX9O);
                Dr3x = GC4G
            }
            UI9z(bi3x.substring(Dr3x + 1), qX9O);
            qX9O.push(';return __OUT.join("");');
            qX9O[1] = crg0x(lu7n);
            lu7n = null;
            return new Function("__CTX","__MDF",qX9O.join(""))
        }
    }();
    TrimPath.seed = function() {
        return fV5a
    }
    ;
    TrimPath.merge = function() {
        var MN5S = {};
        TrimPath.dump = function() {
            return {
                func: MN5S,
                text: Kj5o
            }
        }
        ;
        return function(eH5M, i3x, iU6O) {
            try {
                i3x = i3x || {};
                if (!MN5S[eH5M] && !Kj5o[eH5M])
                    return "";
                if (!MN5S[eH5M]) {
                    MN5S[eH5M] = crr0x(Kj5o[eH5M]);
                    delete Kj5o[eH5M]
                }
                if (!!iU6O) {
                    for (var x in bN3x.ext)
                        if (!iU6O[x])
                            iU6O[x] = bN3x.ext[x]
                }
                return MN5S[eH5M](i3x, iU6O || bN3x.ext)
            } catch (ex) {
                return ex.message || ""
            }
        }
    }();
    TrimPath.parse = function() {
        var crf0x = +(new Date);
        return function(bi3x, eH5M) {
            if (!bi3x)
                return "";
            eH5M = eH5M || "ck_" + crf0x++;
            Kj5o[eH5M] = bi3x;
            return eH5M
        }
    }()
})();
(function() {
    var c2x = NEJ.P
      , a2x = c2x("nej.e")
      , k3x = c2x("nej.u")
      , eA5F = {};
    a2x.GQ4U = TrimPath.seed;
    a2x.bP3x = function() {
        var bNq1x = function(C3x) {
            return !a2x.hX6R ? "" : a2x.hX6R(C3x)
        };
        return function(eH5M, i3x, iU6O) {
            i3x = i3x || {};
            i3x.inline = bNq1x;
            iU6O = NEJ.X(NEJ.X({}, eA5F), iU6O);
            iU6O.rand = k3x.ne8W;
            iU6O.format = k3x.iN6H;
            iU6O.escape = k3x.dJ4N;
            iU6O.inline = bNq1x;
            return TrimPath.merge(eH5M, i3x, iU6O)
        }
    }();
    a2x.ek5p = function(bi3x, crb0x) {
        if (!bi3x)
            return "";
        var eH5M, E3x = a2x.z3x(bi3x);
        if (!!E3x) {
            eH5M = E3x.id;
            bi3x = E3x.value || E3x.innerText;
            if (!crb0x)
                a2x.cK4O(E3x)
        }
        return TrimPath.parse(bi3x, eH5M)
    }
    ;
    a2x.dL4P = function(bE3x, eH5M, i3x, iU6O) {
        bE3x = a2x.z3x(bE3x);
        if (!!bE3x)
            bE3x.innerHTML = a2x.bP3x(eH5M, i3x, iU6O);
        return this
    }
    ;
    a2x.cue1x = function(bv3x) {
        NEJ.X(eA5F, bv3x)
    }
    ;
    c2x("dbg").dumpJST = function() {
        return TrimPath.dump()
    }
})();
(function() {
    var cP4T = NEJ.P("nej.p")
      , M3x = window
      , kb7U = cP4T.bag2x
      , bNm1x = kb7U.ipad || kb7U.iphone;
    if (!bNm1x && !!M3x.requestAnimationFrame && !!M3x.cancelRequestAnimationFrame)
        return;
    var lb7U = cP4T.cR4V.prefix.pro;
    if (!bNm1x && !!M3x[lb7U + "RequestAnimationFrame"] && !!M3x[lb7U + "CancelRequestAnimationFrame"]) {
        M3x.requestAnimationFrame = M3x[lb7U + "RequestAnimationFrame"];
        M3x.cancelRequestAnimationFrame = M3x[lb7U + "CancelRequestAnimationFrame"];
        return
    }
    var TH9y = kb7U.desktop ? 80 : kb7U.ios ? 50 : 30;
    M3x.requestAnimationFrame = function(dr4v) {
        return window.setTimeout(function() {
            try {
                dr4v(+(new Date))
            } catch (ex) {}
        }, 1e3 / TH9y)
    }
    ;
    M3x.cancelRequestAnimationFrame = function(C3x) {
        window.clearTimeout(C3x);
        return this
    }
})();
(function() {
    var c2x = NEJ.P, bn3x = NEJ.F, k3x = c2x("nej.u"), a2x = c2x("nej.e"), h3x = c2x("nej.v"), bb3x = c2x("nej.h"), cN4R = c2x("nej.x"), TG9x = c2x("nej.ut.j.cb"), gh5m;
    if (!!a2x.qS9J)
        return;
    a2x.qS9J = cN4R.qS9J = function() {
        var Q3x = {}
          , fW5b = /^(?:mouse.*|(?:dbl)?click)$/i;
        window.onflashevent = function(d2x) {
            var C3x = decodeURIComponent(d2x.target)
              , t3x = d2x.type.toLowerCase();
            var dd4h = Q3x[C3x + "-on" + t3x];
            if (!!dd4h) {
                try {
                    dd4h(d2x)
                } catch (e) {}
                return
            }
            var cG4K = Q3x[C3x + "-tgt"];
            if (!!cG4K && fW5b.test(t3x)) {
                bNi1x(cG4K, d2x)
            }
        }
        ;
        var blM5R = function(e3x) {
            var bE3x = a2x.z3x(e3x.parent) || document.body
              , dz4D = a2x.bP3x(gh5m, e3x);
            bE3x.insertAdjacentHTML(!e3x.hidden ? "beforeEnd" : "afterBegin", dz4D)
        };
        var bNi1x = function(C3x, d2x) {
            var t3x = d2x.type.toLowerCase();
            requestAnimationFrame(function() {
                h3x.x3x(C3x, t3x)
            })
        };
        var cqQ0x = function(hg6a) {
            return !!hg6a && !!hg6a.inited && !!hg6a.inited()
        };
        var Nk6e = function(C3x) {
            var bs3x = [document.embeds[C3x], a2x.z3x(C3x), document[C3x], window[C3x]]
              , r3x = k3x.ej5o(bs3x, cqQ0x)
              , hg6a = bs3x[r3x]
              , bma5f = C3x + "-count";
            Q3x[bma5f]++;
            if (!!hg6a || Q3x[bma5f] > 100) {
                Q3x[C3x](hg6a);
                delete Q3x[C3x];
                delete Q3x[bma5f];
                return
            }
            window.setTimeout(Nk6e.g3x(null, C3x), 300)
        };
        var cqP0x = function(e3x) {
            var C3x = e3x.id
              , fT5Y = e3x.params;
            if (!fT5Y) {
                fT5Y = {};
                e3x.params = fT5Y
            }
            var lu7n = fT5Y.flashvars || "";
            lu7n += (!lu7n ? "" : "&") + ("id=" + C3x);
            if (!e3x.hidden && (!!e3x.target || bb3x.YS1x(fT5Y.wmode))) {
                var he6Y = a2x.kv7o(e3x.target) || a2x.kv7o(e3x.parent)
                  , TB9s = k3x.VO9F();
                TG9x["cb" + TB9s] = bNi1x.g3x(null, he6Y);
                lu7n += "&onevent=nej.ut.j.cb.cb" + TB9s;
                Q3x[C3x + "-tgt"] = he6Y
            }
            fT5Y.flashvars = lu7n;
            k3x.ej5o(e3x, function(A3x, J3x) {
                if (k3x.ga5f(A3x) && J3x != "onready") {
                    Q3x[C3x + "-" + J3x] = A3x
                }
            })
        };
        return function(e3x) {
            e3x = NEJ.X({}, e3x);
            if (!e3x.src)
                return;
            var C3x = "flash_" + k3x.VO9F();
            e3x.id = C3x;
            cqP0x(e3x);
            blM5R(e3x);
            if (!e3x.onready)
                return;
            Q3x[C3x] = e3x.onready;
            Q3x[C3x + "-count"] = 0;
            Nk6e(C3x)
        }
    }();
    gh5m = a2x.ek5p('{var hide  = defined("hidden")&&!!hidden}{var param = defined("params")&&params||NEJ.O}{var width = !hide?width:"1px",height = !hide?height:"1px"}{if hide}<div style="position:absolute;top:0;left:0;width:1px;height:1px;z-index:10000;overflow:hidden;">{/if}<object classid = "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"codebase = "http://fpdownload.macromedia.com/get/flashplayer/current/swflash.cab"width = "${width|default:"100px"}"height = "${height|default:"100px"}" id="${id}"><param value="${src}" name="movie">{for x in param}<param value="${x}" name="${x_key}"/>{/for}<embed src="${src}" name="${id}"width="${width|default:"100px"}"height="${height|default:"100px"}"pluginspage="http://www.adobe.com/go/getflashplayer"type="application/x-shockwave-flash"{for x in param}${x_key}="${x}" {/for}></embed></object>{if hide}</div>{/if}');
    cN4R.isChange = !0
})();
(function() {
    var c2x = NEJ.P, iy6s = c2x("nej.c"), a2x = c2x("nej.e"), k3x = c2x("nej.u"), M3x = c2x("nej.ut.j"), TG9x = c2x("nej.ut.j.cb"), Q3x = {}, fV5a = +(new Date), bmG5L;
    if (!!M3x.bmM5R)
        return;
    TG9x["ld" + fV5a] = function(J3x, cL4P) {
        var jb6V = Q3x[J3x];
        if (!jb6V)
            return;
        delete Q3x[J3x];
        jb6V.sV0x({
            status: 200,
            result: cL4P
        })
    }
    ;
    TG9x["er" + fV5a] = function(J3x, dY5d) {
        var jb6V = Q3x[J3x];
        if (!jb6V)
            return;
        delete Q3x[J3x];
        jb6V.sV0x({
            status: dY5d || 0
        })
    }
    ;
    M3x.bmM5R = NEJ.C();
    bmG5L = M3x.bmM5R.O3x(M3x.EU3x);
    bmG5L.ck4o = function(e3x) {
        var hg6a = Q3x.flash;
        if (k3x.ep5u(hg6a)) {
            hg6a.push(this.ck4o.g3x(this, e3x));
            return
        }
        if (!hg6a) {
            Q3x.flash = [this.ck4o.g3x(this, e3x)];
            a2x.qS9J({
                hidden: !0,
                src: iy6s.z3x("ajax.swf"),
                onready: function(hg6a) {
                    if (!hg6a)
                        return;
                    var j3x = Q3x.flash;
                    Q3x.flash = hg6a;
                    k3x.me7X(j3x, function(dd4h) {
                        try {
                            dd4h()
                        } catch (e) {}
                    })
                }
            });
            return
        }
        this.zG2x = "swf-" + k3x.ne8W();
        Q3x[this.zG2x] = this;
        var i3x = NEJ.EX({
            url: "",
            data: null,
            method: "GET"
        }, e3x.request);
        i3x.key = this.zG2x;
        i3x.headers = e3x.headers;
        i3x.onerror = "nej.ut.j.cb.er" + fV5a;
        i3x.onloaded = "nej.ut.j.cb.ld" + fV5a;
        var bNe1x = iy6s.cdJ6D(i3x.url);
        if (!!bNe1x)
            i3x.policyURL = bNe1x;
        hg6a.request(i3x)
    }
    ;
    bmG5L.jj6d = function() {
        delete Q3x[this.zG2x];
        this.sV0x({
            status: 0
        });
        return this
    }
})();
(function() {
    var c2x = NEJ.P
      , X3x = NEJ.O
      , bb3x = c2x("nej.h");
    bb3x.bNd1x = function() {
        var cO4S = /^([\w]+?:\/\/.*?(?=\/|$))/i;
        return function(hA6u) {
            hA6u = hA6u || "";
            if (cO4S.test(hA6u))
                return RegExp.$1;
            return "*"
        }
    }();
    bb3x.bnO5T = function(i3x) {
        return i3x
    }
    ;
    bb3x.bnQ5V = function(bNc1x, e3x) {
        if (!bNc1x.postMessage)
            return;
        e3x = e3x || X3x;
        bNc1x.postMessage(bb3x.bnO5T(e3x.data), bb3x.bNd1x(e3x.origin))
    }
})();
(function() {
    var c2x = NEJ.P, bn3x = NEJ.F, a2x = c2x("nej.e"), h3x = c2x("nej.v"), k3x = c2x("nej.u"), M3x = c2x("nej.ut"), b2x;
    if (!!M3x.fq5v)
        return;
    M3x.fq5v = NEJ.C();
    b2x = M3x.fq5v.O3x(M3x.cz4D);
    b2x.cl4p = function() {
        this.R3x = {};
        this.cs4w()
    }
    ;
    b2x.bk3x = function(e3x) {
        this.bl3x(e3x);
        this.Nu6o = a2x.z3x(e3x.element) || window;
        this.bNa1x(e3x.event);
        this.cqw0x();
        this.x3x("oninit")
    }
    ;
    b2x.bD3x = function() {
        var CV3x = function(A3x, J3x, bv3x) {
            if (!k3x.ep5u(A3x)) {
                k3x.RB8t(this.Nu6o, J3x)
            }
            delete bv3x[J3x]
        };
        return function() {
            this.bH3x();
            k3x.ej5o(this.R3x, CV3x, this);
            delete this.Nu6o
        }
    }();
    b2x.Tt9k = function(E3x, t3x) {
        E3x = a2x.z3x(E3x);
        return E3x == this.Nu6o && (!t3x || !!this.R3x["on" + t3x])
    }
    ;
    b2x.bNa1x = function(d2x) {
        if (k3x.fl5q(d2x)) {
            var T3x = "on" + d2x;
            if (!this.R3x[T3x]) {
                this.R3x[T3x] = this.cqv0x.g3x(this, d2x)
            }
            this.bMX1x(d2x);
            return
        }
        if (k3x.ep5u(d2x)) {
            k3x.be3x(d2x, this.bNa1x, this)
        }
    }
    ;
    b2x.bMX1x = function(t3x) {
        var d2x = "on" + t3x
          , dd4h = this.Nu6o[d2x]
          , bMW1x = this.R3x[d2x];
        if (dd4h != bMW1x) {
            this.To9f(t3x);
            if (!!dd4h && dd4h != bn3x)
                this.bMV1x(t3x, dd4h);
            this.Nu6o[d2x] = bMW1x
        }
    }
    ;
    b2x.bMV1x = function(t3x, dd4h, cqm0x) {
        var j3x = this.R3x[t3x];
        if (!j3x) {
            j3x = [];
            this.R3x[t3x] = j3x
        }
        if (k3x.ga5f(dd4h)) {
            !cqm0x ? j3x.push(dd4h) : j3x.unshift(dd4h)
        }
    }
    ;
    b2x.To9f = function(t3x, dd4h) {
        var j3x = this.R3x[t3x];
        if (!j3x || !j3x.length)
            return;
        if (!dd4h) {
            delete this.R3x[t3x];
            return
        }
        k3x.me7X(j3x, function(A3x, r3x, Hz4D) {
            if (dd4h === A3x) {
                Hz4D.splice(r3x, 1);
                return !0
            }
        })
    }
    ;
    b2x.cqv0x = function(t3x, d2x) {
        d2x = d2x || {
            noargs: !0
        };
        d2x.type = t3x;
        this.x3x("ondispatch", d2x);
        if (!!d2x.stopped)
            return;
        k3x.be3x(this.R3x[t3x], function(dd4h) {
            try {
                dd4h(d2x)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        })
    }
    ;
    b2x.cqw0x = function() {
        var brB6v = function(d2x) {
            var bg3x = d2x.args
              , t3x = bg3x[1].toLowerCase();
            if (this.Tt9k(bg3x[0], t3x)) {
                d2x.stopped = !0;
                this.bMX1x(t3x);
                this.bMV1x(t3x, bg3x[2], bg3x[3]);
                this.x3x("oneventadd", {
                    type: t3x,
                    listener: bg3x[2]
                })
            }
        };
        var cqk0x = function(d2x) {
            var bg3x = d2x.args
              , t3x = bg3x[1].toLowerCase();
            if (this.Tt9k(bg3x[0], t3x)) {
                d2x.stopped = !0;
                this.To9f(t3x, bg3x[2])
            }
        };
        var bmy5D = function(d2x) {
            var bg3x = d2x.args
              , t3x = (bg3x[1] || "").toLowerCase();
            if (this.Tt9k(bg3x[0])) {
                if (!!t3x) {
                    this.To9f(t3x);
                    return
                }
                k3x.ej5o(this.R3x, function(A3x, J3x) {
                    if (k3x.ep5u(A3x)) {
                        this.To9f(J3x)
                    }
                }, this)
            }
        };
        var cqj0x = function(d2x) {
            var bg3x = d2x.args
              , t3x = bg3x[1].toLowerCase();
            if (this.Tt9k(bg3x[0], t3x)) {
                d2x.stopped = !0;
                bg3x[0]["on" + t3x].apply(bg3x[0], bg3x.slice(2))
            }
        };
        return function() {
            if (!!this.cqc0x)
                return;
            this.cqc0x = true;
            h3x.s3x = h3x.s3x.ed5i(brB6v.g3x(this));
            h3x.ma7T = h3x.ma7T.ed5i(cqk0x.g3x(this));
            h3x.hF6z = h3x.hF6z.ed5i(bmy5D.g3x(this));
            h3x.x3x = h3x.x3x.ed5i(cqj0x.g3x(this))
        }
    }()
})();
(function() {
    var c2x = NEJ.P
      , M3x = c2x("nej.p")
      , bb3x = c2x("nej.h")
      , k3x = c2x("nej.u")
      , h3x = c2x("nej.v")
      , H3x = c2x("nej.ut");
    if (M3x.ms7l.trident)
        return;
    if (!!window.postMessage) {
        bb3x.bnO5T = bb3x.bnO5T.ed5i(function(d2x) {
            d2x.stopped = !0;
            d2x.value = JSON.stringify(d2x.args[0])
        });
        return
    }
    var J3x = "MSG|"
      , jy6s = [];
    var cqb0x = function() {
        var T3x = unescape(window.name || "").trim();
        if (!T3x || T3x.indexOf(J3x) != 0)
            return;
        window.name = "";
        var m3x = k3x.bNX2x(T3x.replace(J3x, ""), "|")
          , hA6u = (m3x.origin || "").toLowerCase();
        if (!!hA6u && hA6u != "*" && location.href.toLowerCase().indexOf(hA6u) != 0)
            return;
        h3x.x3x(window, "message", {
            data: JSON.parse(m3x.data || "null"),
            source: window.frames[m3x.self] || m3x.self,
            origin: bb3x.bNd1x(m3x.ref || document.referrer)
        })
    };
    var cqa0x = function() {
        var Tg8Y;
        var cpU0x = function(bv3x, r3x, j3x) {
            if (k3x.cW4a(Tg8Y, bv3x.w) < 0) {
                Tg8Y.push(bv3x.w);
                j3x.splice(r3x, 1);
                bv3x.w.name = bv3x.d
            }
        };
        return function() {
            Tg8Y = [];
            k3x.me7X(jy6s, cpU0x);
            Tg8Y = null
        }
    }();
    bb3x.bnQ5V = function() {
        var cpT0x = function(i3x) {
            var m3x = {};
            i3x = i3x || X3x;
            m3x.origin = i3x.origin || "";
            m3x.ref = location.href;
            m3x.self = i3x.source;
            m3x.data = JSON.stringify(i3x.data);
            return J3x + k3x.uf0x(m3x, "|", !0)
        };
        return bb3x.bnQ5V.ed5i(function(d2x) {
            d2x.stopped = !0;
            var bg3x = d2x.args;
            jy6s.unshift({
                w: bg3x[0],
                d: escape(cpT0x(bg3x[1]))
            })
        })
    }();
    H3x.fq5v.B3x({
        element: window,
        event: "message"
    });
    window.setInterval(cqa0x, 100);
    window.setInterval(cqb0x, 20)
})();
(function() {
    var c2x = NEJ.P
      , bb3x = c2x("nej.h")
      , a2x = c2x("nej.e")
      , v3x = c2x("nej.j");
    v3x.cpI0x = function() {
        var iD6x = window.name || "_parent"
          , cpD9u = {
            gk5p: window.top,
            iD6x: window,
            bE3x: window.parent
        };
        return function(cG4K, e3x) {
            if (typeof cG4K == "string") {
                cG4K = cpD9u[cG4K] || window.frames[cG4K];
                if (!cG4K)
                    return this
            }
            var i3x = NEJ.X({
                origin: "*",
                source: iD6x
            }, e3x);
            bb3x.bnQ5V(cG4K, i3x);
            return this
        }
    }()
})();
(function() {
    var c2x = NEJ.P, iy6s = c2x("nej.c"), a2x = c2x("nej.e"), h3x = c2x("nej.v"), k3x = c2x("nej.u"), v3x = c2x("nej.j"), M3x = c2x("nej.ut.j"), Q3x = {}, Td8V;
    if (!!M3x.bbB2x)
        return;
    M3x.bbB2x = NEJ.C();
    Td8V = M3x.bbB2x.O3x(M3x.EU3x);
    Td8V.cl4p = function() {
        var ez5E = "NEJ-AJAX-DATA:"
          , DJ3x = !1;
        var bbH2x = function(d2x) {
            var i3x = d2x.data;
            if (i3x.indexOf(ez5E) != 0)
                return;
            i3x = JSON.parse(i3x.replace(ez5E, ""));
            var jb6V = Q3x[i3x.key];
            if (!jb6V)
                return;
            delete Q3x[i3x.key];
            i3x.result = decodeURIComponent(i3x.result || "");
            jb6V.sV0x(i3x)
        };
        var bbN2x = function() {
            if (!DJ3x) {
                DJ3x = !0;
                h3x.s3x(window, "message", bbH2x)
            }
        };
        return function() {
            this.cs4w();
            bbN2x()
        }
    }();
    Td8V.ck4o = function(e3x) {
        var fy5D = e3x.request
          , jb6V = iy6s.bZB5G(fy5D.url)
          , us0x = Q3x[jb6V];
        if (k3x.ep5u(us0x)) {
            us0x.push(this.ck4o.g3x(this, e3x));
            return
        }
        if (!us0x) {
            Q3x[jb6V] = [this.ck4o.g3x(this, e3x)];
            a2x.YA0x({
                src: jb6V,
                visible: !1,
                onload: function(d2x) {
                    var j3x = Q3x[jb6V];
                    Q3x[jb6V] = h3x.U3x(d2x).contentWindow;
                    k3x.me7X(j3x, function(dd4h) {
                        try {
                            dd4h()
                        } catch (e) {}
                    })
                }
            });
            return
        }
        this.zG2x = "frm-" + k3x.ne8W();
        Q3x[this.zG2x] = this;
        var i3x = NEJ.EX({
            url: "",
            data: null,
            timeout: 0,
            method: "GET"
        }, fy5D);
        i3x.key = this.zG2x;
        i3x.headers = e3x.headers;
        v3x.cpI0x(Q3x[jb6V], {
            data: i3x
        })
    }
    ;
    Td8V.jj6d = function() {
        delete Q3x[this.zG2x];
        this.sV0x({
            status: 0
        });
        return this
    }
})();
(function() {
    var c2x = NEJ.P, X3x = NEJ.O, dO4S = c2x("nej.g"), a2x = c2x("nej.e"), h3x = c2x("nej.v"), k3x = c2x("nej.u"), v3x = c2x("nej.j"), M3x = c2x("nej.ut.j"), Q3x = {}, HE4I;
    if (!!M3x.bcl2x)
        return;
    M3x.bcl2x = NEJ.C();
    HE4I = M3x.bcl2x.O3x(M3x.EU3x);
    HE4I.cl4p = function() {
        var ez5E = "NEJ-UPLOAD-RESULT:"
          , DJ3x = !1;
        var bbH2x = function(d2x) {
            var i3x = d2x.data;
            if (i3x.indexOf(ez5E) != 0)
                return;
            i3x = JSON.parse(i3x.replace(ez5E, ""));
            var jb6V = Q3x[i3x.key];
            if (!jb6V)
                return;
            delete Q3x[i3x.key];
            jb6V.sV0x(decodeURIComponent(i3x.result))
        };
        var bbN2x = function() {
            if (!DJ3x) {
                DJ3x = !0;
                h3x.s3x(window, "message", bbH2x)
            }
        };
        return function() {
            this.cs4w();
            bbN2x()
        }
    }();
    HE4I.bD3x = function() {
        this.bH3x();
        a2x.cK4O(this.bcn2x);
        delete this.bcn2x;
        window.clearTimeout(this.dK4O);
        delete this.dK4O
    }
    ;
    HE4I.sV0x = function(cL4P) {
        var P3x;
        try {
            P3x = JSON.parse(cL4P);
            this.x3x("onload", P3x)
        } catch (e) {
            this.x3x("onerror", {
                code: dO4S.bPg2x,
                message: cL4P
            })
        }
    }
    ;
    HE4I.ck4o = function() {
        var cpC9t = function() {
            var lK7D, cL4P;
            try {
                var lK7D = this.bcn2x.contentWindow.document.body
                  , cL4P = lK7D.innerText || lK7D.textContent
            } catch (e) {
                return
            }
            this.sV0x(cL4P)
        };
        var bcJ2x = function(V3x, eG5L, rd9U) {
            v3x.bq3x(V3x, {
                type: "json",
                method: "POST",
                cookie: rd9U,
                mode: parseInt(eG5L) || 0,
                onload: function(i3x) {
                    if (!this.dK4O)
                        return;
                    this.x3x("onuploading", i3x);
                    this.dK4O = window.setTimeout(bcJ2x.g3x(this, V3x, eG5L, rd9U), 1e3)
                }
                .g3x(this),
                onerror: function(bR3x) {
                    if (!this.dK4O)
                        return;
                    this.dK4O = window.setTimeout(bcJ2x.g3x(this, V3x, eG5L, rd9U), 1e3)
                }
                .g3x(this)
            })
        };
        return function(e3x) {
            var fy5D = e3x.request
              , nK8C = e3x.headers
              , eF5K = fy5D.data
              , T3x = "fom-" + k3x.ne8W();
            Q3x[T3x] = this;
            eF5K.target = T3x;
            eF5K.method = "POST";
            eF5K.enctype = dO4S.BC2x;
            eF5K.encoding = dO4S.BC2x;
            var V3x = eF5K.action || ""
              , lR7K = V3x.indexOf("?") <= 0 ? "?" : "&";
            eF5K.action = V3x + lR7K + "_proxy_=form";
            this.bcn2x = a2x.YA0x({
                name: T3x,
                onload: function(d2x) {
                    var us0x = h3x.U3x(d2x);
                    h3x.s3x(us0x, "load", cpC9t.g3x(this));
                    eF5K.submit();
                    var bMQ1x = (eF5K.nej_query || X3x).value;
                    if (!bMQ1x)
                        return;
                    var eG5L = (eF5K.nej_mode || X3x).value
                      , rd9U = (eF5K.nej_cookie || X3x).value == "true";
                    this.dK4O = window.setTimeout(bcJ2x.g3x(this, bMQ1x, eG5L, rd9U), 100)
                }
                .g3x(this)
            })
        }
    }();
    HE4I.jj6d = function() {
        this.x3x("onerror", {
            code: dO4S.bRL4P,
            message: "客户端终止文件上传"
        });
        return this
    }
})();
(function() {
    var c2x = NEJ.P
      , X3x = NEJ.O
      , bb3x = c2x("nej.h")
      , M3x = c2x("nej.ut.j");
    bb3x.bcB2x = function() {
        return new XMLHttpRequest
    }
    ;
    bb3x.bdb2x = function(eG5L, SX8P, e3x) {
        var bv3x = !!SX8P ? {
            2: M3x.bcl2x
        } : {
            2: M3x.bbB2x,
            3: M3x.bmM5R
        };
        return (bv3x[eG5L] || M3x.Vm9d).B3x(e3x)
    }
})();
(function() {
    var c2x = NEJ.P
      , M3x = c2x("nej.p")
      , bb3x = c2x("nej.h");
    if (M3x.ms7l.trident)
        return;
    bb3x.bcB2x = function() {
        var NL7E = ["Msxml2.XMLHTTP.6.0", "Msxml2.XMLHTTP.3.0", "Msxml2.XMLHTTP.4.0", "Msxml2.XMLHTTP.5.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"];
        var cpw9n = function() {
            for (var i = 0, l = NL7E.length; i < l; i++) {
                try {
                    return new ActiveXObject(NL7E[i])
                } catch (e) {}
            }
            return null
        };
        return bb3x.bcB2x.ed5i(function(d2x) {
            if (!!window.XMLHttpRequest)
                return;
            d2x.stopped = !0;
            d2x.value = cpw9n()
        })
    }();
    bb3x.bdb2x = function() {
        var AZ2x = {
            0: 2,
            1: 3
        };
        return bb3x.bdb2x.ed5i(function(d2x) {
            var bg3x = d2x.args
              , eG5L = bg3x[0] || 0;
            bg3x[0] = !!bg3x[1] ? 2 : AZ2x[eG5L] || eG5L
        })
    }()
})();
(function() {
    var c2x = NEJ.P
      , X3x = NEJ.O
      , bn3x = NEJ.F
      , bb3x = c2x("nej.h")
      , dO4S = c2x("nej.g")
      , k3x = c2x("nej.u")
      , v3x = c2x("nej.j")
      , M3x = c2x("nej.ut.j")
      , mH8z = {}
      , Hr4v = bn3x;
    v3x.jj6d = function(eH5M) {
        var Q3x = mH8z[eH5M];
        if (!Q3x)
            return this;
        Q3x.req.jj6d();
        return this
    }
    ;
    v3x.SV8N = function(dC4G) {
        Hr4v = dC4G || bn3x;
        return this
    }
    ;
    v3x.bq3x = function() {
        var iQ6K = (location.protocol + "//" + location.host).toLowerCase();
        var cps9j = function(V3x) {
            var hA6u = k3x.ctA0x(V3x);
            return !!hA6u && hA6u != iQ6K
        };
        var cpr9i = function(nK8C) {
            return (nK8C || X3x)[dO4S.xf1x] == dO4S.BC2x
        };
        var cpo9f = function(e3x) {
            var SX8P = cpr9i(e3x.headers);
            if (!cps9j(e3x.url) && !SX8P)
                return M3x.Vm9d.B3x(e3x);
            return bb3x.bdb2x(e3x.mode, SX8P, e3x)
        };
        var CV3x = function(eH5M) {
            var Q3x = mH8z[eH5M];
            if (!Q3x)
                return;
            if (!!Q3x.req)
                Q3x.req.S3x();
            delete mH8z[eH5M]
        };
        var bMO1x = function(eH5M, t3x) {
            var Q3x = mH8z[eH5M];
            if (!Q3x)
                return;
            CV3x(eH5M);
            try {
                var d2x = {
                    type: t3x,
                    result: arguments[2]
                };
                Hr4v(d2x);
                if (!d2x.stopped)
                    (Q3x[t3x] || bn3x)(d2x.result)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex)
            }
        };
        var vM0x = function(eH5M, i3x) {
            bMO1x(eH5M, "onload", i3x)
        };
        var yX1x = function(eH5M, bR3x) {
            bMO1x(eH5M, "onerror", bR3x)
        };
        return function(V3x, e3x) {
            e3x = e3x || {};
            var eH5M = k3x.ne8W()
              , Q3x = {
                onload: e3x.onload || bn3x,
                onerror: e3x.onerror || bn3x
            };
            mH8z[eH5M] = Q3x;
            e3x.onload = vM0x.g3x(null, eH5M);
            e3x.onerror = yX1x.g3x(null, eH5M);
            if (!!e3x.query) {
                var lR7K = V3x.indexOf("?") < 0 ? "?" : "&"
                  , bw3x = e3x.query;
                if (k3x.kR7K(bw3x))
                    bw3x = k3x.db4f(bw3x);
                if (!!bw3x)
                    V3x += lR7K + bw3x
            }
            e3x.url = V3x;
            Q3x.req = cpo9f(e3x);
            Q3x.req.bbm2x(e3x.data);
            return eH5M
        }
    }();
    v3x.gu5z = function(eF5K, e3x) {
        var gE5J = {
            mode: 0,
            type: "json",
            query: null,
            cookie: !1,
            headers: {},
            onload: null,
            onerror: null,
            onuploading: null,
            onbeforerequest: null
        };
        NEJ.EX(gE5J, e3x);
        gE5J.data = eF5K;
        gE5J.method = "POST";
        gE5J.timeout = 0;
        gE5J.headers[dO4S.xf1x] = dO4S.BC2x;
        return v3x.bq3x(eF5K.action, gE5J)
    }
})();
(function() {
    var c2x = NEJ.P, bn3x = NEJ.F, dO4S = c2x("nej.g"), h3x = c2x("nej.v"), k3x = c2x("nej.u"), H3x = c2x("nej.ut"), M3x = c2x("nej.ut.j"), lS7L, jo6i = 6e4;
    if (!!M3x.Or7k)
        return;
    M3x.Or7k = NEJ.C();
    lS7L = M3x.Or7k.O3x(H3x.cz4D);
    lS7L.cl4p = function() {
        this.cs4w();
        this.Ov7o = {
            onerror: this.cpk9b.g3x(this),
            onloaded: this.cpj9a.g3x(this)
        };
        if (!this.constructor.R3x)
            this.constructor.R3x = {
                loaded: {}
            }
    }
    ;
    lS7L.bk3x = function(e3x) {
        this.bl3x(e3x);
        this.HP4T = e3x.version;
        this.beJ3x = e3x.timeout;
        this.Ov7o.version = this.HP4T;
        this.Ov7o.timeout = this.beJ3x
    }
    ;
    lS7L.bMN1x = function(J3x) {
        delete this.constructor.R3x[J3x]
    }
    ;
    lS7L.zH2x = function(J3x) {
        return this.constructor.R3x[J3x]
    }
    ;
    lS7L.bMM1x = function(J3x, i3x) {
        this.constructor.R3x[J3x] = i3x
    }
    ;
    lS7L.SO8G = bn3x;
    lS7L.bMJ1x = function(fy5D) {
        h3x.hF6z(fy5D)
    }
    ;
    lS7L.bfI3x = function(fy5D) {
        fy5D.src = this.ku7n;
        document.head.appendChild(fy5D)
    }
    ;
    lS7L.zO2x = function() {
        var Q3x = this.zH2x(this.ku7n);
        if (!Q3x)
            return;
        window.clearTimeout(Q3x.timer);
        this.bMJ1x(Q3x.request);
        delete Q3x.bind;
        delete Q3x.timer;
        delete Q3x.request;
        this.bMN1x(this.ku7n);
        this.zH2x("loaded")[this.ku7n] = !0
    }
    ;
    lS7L.SK8C = function(T3x) {
        var Q3x = this.zH2x(this.ku7n);
        if (!Q3x)
            return;
        var j3x = Q3x.bind;
        this.zO2x();
        if (!!j3x && j3x.length > 0) {
            var cq4u;
            while (j3x.length) {
                cq4u = j3x.shift();
                try {
                    cq4u.x3x(T3x, arguments[1])
                } catch (ex) {
                    console.error(ex.message);
                    console.error(ex.stack)
                }
                cq4u.S3x()
            }
        }
    }
    ;
    lS7L.eh5m = function(bR3x) {
        this.SK8C("onerror", bR3x)
    }
    ;
    lS7L.bMH1x = function() {
        this.SK8C("onloaded")
    }
    ;
    lS7L.coL9C = function(V3x) {
        this.constructor.B3x(this.Ov7o).HR4V(V3x)
    }
    ;
    lS7L.bME1x = function(bR3x) {
        var Q3x = this.zH2x(this.uJ0x);
        if (!Q3x)
            return;
        if (!!bR3x)
            Q3x.error++;
        Q3x.loaded++;
        if (Q3x.loaded < Q3x.total)
            return;
        this.bMN1x(this.uJ0x);
        this.x3x(Q3x.error > 0 ? "onerror" : "onloaded")
    }
    ;
    lS7L.cpk9b = function(bR3x) {
        this.bME1x(!0)
    }
    ;
    lS7L.cpj9a = function() {
        this.bME1x()
    }
    ;
    lS7L.HR4V = function(V3x) {
        V3x = k3x.bdp2x(V3x);
        if (!V3x) {
            this.x3x("onerror", {
                code: dO4S.biS4W,
                message: "请指定要载入的资源地址！"
            });
            return this
        }
        this.ku7n = V3x;
        if (!!this.HP4T)
            this.ku7n += (this.ku7n.indexOf("?") < 0 ? "?" : "&") + this.HP4T;
        if (this.zH2x("loaded")[this.ku7n]) {
            try {
                this.x3x("onloaded")
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
            this.S3x();
            return this
        }
        var Q3x = this.zH2x(this.ku7n), fy5D;
        if (!!Q3x) {
            Q3x.bind.unshift(this);
            Q3x.timer = window.clearTimeout(Q3x.timer)
        } else {
            fy5D = this.SO8G();
            Q3x = {
                request: fy5D,
                bind: [this]
            };
            this.bMM1x(this.ku7n, Q3x);
            h3x.s3x(fy5D, "load", this.bMH1x.g3x(this));
            h3x.s3x(fy5D, "error", this.eh5m.g3x(this, {
                code: dO4S.blW5b,
                message: "无法加载指定资源文件[" + this.ku7n + "]！"
            }))
        }
        if (this.beJ3x != 0)
            Q3x.timer = window.setTimeout(this.eh5m.g3x(this, {
                code: dO4S.bwl7e,
                message: "指定资源文件[" + this.ku7n + "]载入超时！"
            }), this.beJ3x || jo6i);
        if (!!fy5D)
            this.bfI3x(fy5D);
        this.x3x("onloading");
        return this
    }
    ;
    lS7L.bMC1x = function(j3x) {
        if (!j3x || !j3x.length) {
            this.x3x("onerror", {
                code: dO4S.biS4W,
                message: "请指定要载入的资源队列！"
            });
            return this
        }
        this.uJ0x = k3x.ne8W();
        var Q3x = {
            error: 0,
            loaded: 0,
            total: j3x.length
        };
        this.bMM1x(this.uJ0x, Q3x);
        for (var i = 0, l = j3x.length; i < l; i++) {
            if (!j3x[i]) {
                Q3x.total--;
                continue
            }
            this.coL9C(j3x[i])
        }
        this.x3x("onloading");
        return this
    }
})();
(function() {
    var c2x = NEJ.P, X3x = NEJ.O, a2x = c2x("nej.e"), bb3x = c2x("nej.h"), M3x = c2x("nej.ut.j"), OG7z;
    if (!!M3x.bgF3x)
        return;
    M3x.bgF3x = NEJ.C();
    OG7z = M3x.bgF3x.O3x(M3x.Or7k);
    OG7z.SO8G = function() {
        var fd5i = a2x.cT4X("iframe");
        fd5i.width = 0;
        fd5i.height = 0;
        fd5i.style.display = "none";
        return fd5i
    }
    ;
    OG7z.bfI3x = function(fy5D) {
        fy5D.src = this.ku7n;
        document.body.appendChild(fy5D)
    }
    ;
    OG7z.eh5m = function(bR3x) {
        var fd5i = (this.zH2x(this.ku7n) || X3x).request;
        this.SK8C("onerror", bR3x);
        bb3x.YP0x(fd5i)
    }
    ;
    OG7z.bMH1x = function() {
        var lK7D = null
          , fd5i = (this.zH2x(this.ku7n) || X3x).request;
        try {
            lK7D = fd5i.contentWindow.document.body
        } catch (ex) {}
        this.SK8C("onloaded", lK7D);
        bb3x.YP0x(fd5i)
    }
})();
(function() {
    var c2x = NEJ.P, a2x = c2x("nej.e"), M3x = c2x("nej.ut.j"), bgM3x;
    if (!!M3x.SF8x)
        return;
    M3x.SF8x = NEJ.C();
    bgM3x = M3x.SF8x.O3x(M3x.Or7k);
    bgM3x.SO8G = function() {
        return a2x.cT4X("link")
    }
    ;
    bgM3x.bfI3x = function(fy5D) {
        fy5D.href = this.ku7n;
        document.head.appendChild(fy5D)
    }
})();
(function() {
    var c2x = NEJ.P, a2x = c2x("nej.e"), M3x = c2x("nej.ut.j"), SE8w;
    if (!!M3x.SD8v)
        return;
    M3x.SD8v = NEJ.C();
    SE8w = M3x.SD8v.O3x(M3x.Or7k);
    SE8w.bk3x = function(e3x) {
        this.bl3x(e3x);
        this.bMB1x = e3x.async;
        this.bhE3x = e3x.charset;
        this.Ov7o.async = !1;
        this.Ov7o.charset = this.bhE3x
    }
    ;
    SE8w.SO8G = function() {
        var fy5D = a2x.cT4X("script");
        if (this.bMB1x != null)
            fy5D.async = !!this.bMB1x;
        if (this.bhE3x != null)
            fy5D.charset = this.bhE3x;
        return fy5D
    }
    ;
    SE8w.bMJ1x = function(fy5D) {
        a2x.cK4O(fy5D)
    }
})();
(function() {
    var c2x = NEJ.P
      , v3x = c2x("nej.j")
      , M3x = c2x("nej.ut.j");
    v3x.coA9r = function(V3x, e3x) {
        M3x.SD8v.B3x(e3x).HR4V(V3x);
        return this
    }
    ;
    v3x.coy9p = function(j3x, e3x) {
        M3x.SD8v.B3x(e3x).bMC1x(j3x);
        return this
    }
    ;
    v3x.cuk1x = function(V3x, e3x) {
        M3x.SF8x.B3x(e3x).HR4V(V3x);
        return this
    }
    ;
    v3x.cow9n = function(j3x, e3x) {
        M3x.SF8x.B3x(e3x).bMC1x(j3x);
        return this
    }
    ;
    v3x.bMA1x = function(V3x, e3x) {
        M3x.bgF3x.B3x(e3x).HR4V(V3x);
        return this
    }
})();
(function() {
    var c2x = NEJ.P
      , X3x = NEJ.O
      , a2x = c2x("nej.e")
      , h3x = c2x("nej.v")
      , k3x = c2x("nej.u")
      , v3x = c2x("nej.j")
      , H3x = c2x("nej.ut")
      , Q3x = {}
      , rF9w = +(new Date) + "-";
    a2x.cH4L = function() {
        var ct4x = 0;
        var OK7D = function() {
            if (ct4x > 0)
                return;
            ct4x = 0;
            h3x.x3x(document, "templateready");
            h3x.hF6z(document, "templateready")
        };
        var SB8t = function(fF5K, e3x) {
            var dv4z = a2x.u3x(fF5K, "src");
            if (!dv4z)
                return;
            e3x = e3x || X3x;
            var fu5z = e3x.root;
            if (!fu5z) {
                fu5z = fF5K.ownerDocument.location.href
            } else {
                fu5z = k3x.bdp2x(fu5z)
            }
            dv4z = dv4z.split(",");
            k3x.be3x(dv4z, function(A3x, r3x, j3x) {
                j3x[r3x] = k3x.bdp2x(A3x, fu5z)
            });
            return dv4z
        };
        var cos9j = function(fF5K, e3x) {
            if (!fF5K)
                return;
            var dv4z = SB8t(fF5K, e3x);
            if (!!dv4z)
                v3x.cow9n(dv4z, {
                    version: a2x.u3x(fF5K, "version")
                });
            a2x.bKh1x(fF5K.value)
        };
        var coo9f = function(A3x) {
            ct4x--;
            a2x.bKi1x(A3x);
            OK7D()
        };
        var con9e = function(fF5K, e3x) {
            if (!fF5K)
                return;
            var dv4z = SB8t(fF5K, e3x)
              , et5y = fF5K.value;
            if (!!dv4z) {
                ct4x++;
                var e3x = {
                    version: a2x.u3x(fF5K, "version"),
                    onloaded: coo9f.g3x(null, et5y)
                };
                window.setTimeout(v3x.coy9p.g3x(v3x, dv4z, e3x), 0);
                return
            }
            a2x.bKi1x(et5y)
        };
        var com9d = function(lK7D) {
            ct4x--;
            a2x.cH4L(lK7D);
            OK7D()
        };
        var col9c = function(fF5K, e3x) {
            if (!fF5K)
                return;
            var dv4z = SB8t(fF5K, e3x)[0];
            if (!!dv4z) {
                ct4x++;
                var e3x = {
                    version: a2x.u3x(fF5K, "version"),
                    onloaded: com9d
                };
                window.setTimeout(v3x.bMA1x.g3x(v3x, dv4z, e3x), 0)
            }
        };
        var cok9b = function(C3x, cL4P) {
            ct4x--;
            a2x.Id4h(C3x, cL4P || "");
            OK7D()
        };
        var coh9Y = function(fF5K, e3x) {
            if (!fF5K || !fF5K.id)
                return;
            var C3x = fF5K.id
              , dv4z = SB8t(fF5K, e3x)[0];
            if (!!dv4z) {
                ct4x++;
                var V3x = dv4z + (dv4z.indexOf("?") < 0 ? "?" : "&") + (a2x.u3x(fF5K, "version") || "")
                  , e3x = {
                    type: "text",
                    method: "GET",
                    onload: cok9b.g3x(null, C3x)
                };
                window.setTimeout(v3x.bq3x.g3x(v3x, V3x, e3x), 0)
            }
        };
        var cog9X = function(f3x, e3x) {
            var t3x = f3x.name.toLowerCase();
            switch (t3x) {
            case "jst":
                a2x.ek5p(f3x, !0);
                return;
            case "txt":
                a2x.Id4h(f3x.id, f3x.value || "");
                return;
            case "ntp":
                a2x.ib6V(f3x.value || "", f3x.id);
                return;
            case "js":
                con9e(f3x, e3x);
                return;
            case "css":
                cos9j(f3x, e3x);
                return;
            case "html":
                col9c(f3x, e3x);
                return;
            case "res":
                coh9Y(f3x, e3x);
                return
            }
        };
        H3x.fq5v.B3x({
            element: document,
            event: "templateready",
            oneventadd: OK7D
        });
        return function(E3x, e3x) {
            E3x = a2x.z3x(E3x);
            if (!!E3x) {
                var j3x = E3x.tagName == "TEXTAREA" ? [E3x] : E3x.getElementsByTagName("textarea");
                k3x.be3x(j3x, function(f3x) {
                    cog9X(f3x, e3x)
                });
                a2x.cK4O(E3x, !0)
            }
            OK7D();
            return this
        }
    }();
    a2x.Id4h = function(J3x, A3x) {
        Q3x[J3x] = A3x || "";
        return this
    }
    ;
    a2x.hX6R = function(J3x) {
        return Q3x[J3x] || ""
    }
    ;
    a2x.ib6V = function(E3x, J3x) {
        J3x = J3x || k3x.ne8W();
        E3x = a2x.z3x(E3x) || E3x;
        a2x.Id4h(rF9w + J3x, E3x);
        a2x.mi7b(E3x);
        return J3x
    }
    ;
    a2x.dq4u = function(J3x) {
        if (!J3x)
            return null;
        J3x = rF9w + J3x;
        var A3x = a2x.hX6R(J3x);
        if (!A3x)
            return null;
        if (k3x.fl5q(A3x)) {
            A3x = a2x.nd8V(A3x);
            a2x.Id4h(J3x, A3x)
        }
        return A3x.cloneNode(!0)
    }
    ;
    a2x.yT1x = function() {
        var Hr4v = function(A3x, J3x) {
            return J3x == "offset" || J3x == "limit"
        };
        return function(j3x, q3x, e3x) {
            var bs3x = [];
            if (!j3x || !j3x.length || !q3x)
                return bs3x;
            e3x = e3x || X3x;
            var du4y = j3x.length
              , iZ6T = parseInt(e3x.offset) || 0
              , gz5E = Math.min(du4y, iZ6T + (parseInt(e3x.limit) || du4y))
              , cm4q = {
                total: j3x.length,
                range: [iZ6T, gz5E]
            };
            NEJ.X(cm4q, e3x, Hr4v);
            for (var i = iZ6T, cq4u; i < gz5E; i++) {
                cm4q.index = i;
                cm4q.data = j3x[i];
                cq4u = q3x.B3x(cm4q);
                var C3x = cq4u.BQ2x();
                Q3x[C3x] = cq4u;
                cq4u.S3x = cq4u.S3x.ed5i(function(C3x, cq4u) {
                    delete Q3x[C3x];
                    delete cq4u.S3x
                }
                .g3x(null, C3x, cq4u));
                bs3x.push(cq4u)
            }
            return bs3x
        }
    }();
    a2x.bMr1x = function(C3x) {
        return Q3x[C3x]
    }
    ;
    a2x.cul1x = function(dD4H, e3x) {
        e3x = e3x || X3x;
        a2x.cH4L(e3x.tid || "template-box");
        h3x.s3x(document, "templateready", function() {
            dD4H.B3x().x3x("onshow", e3x)
        })
    }
    ;
    c2x("dbg").dumpTC = function() {
        return Q3x
    }
})();
(function() {
    var c2x = NEJ.P, X3x = NEJ.O, bn3x = NEJ.F, a2x = c2x("nej.e"), k3x = c2x("nej.u"), H3x = c2x("nej.ut"), M3x = c2x("nej.ui"), b2x;
    if (!!M3x.eo5t)
        return;
    M3x.eo5t = NEJ.C();
    b2x = M3x.eo5t.O3x(H3x.cz4D);
    b2x.cl4p = function() {
        this.cs4w();
        a2x.bJn0x();
        this.bZ4d();
        this.bQ3x()
    }
    ;
    b2x.bk3x = function(e3x) {
        this.bl3x(e3x);
        this.cnT9K(e3x.clazz);
        this.bMp1x(e3x.parent)
    }
    ;
    b2x.bD3x = function() {
        this.bH3x();
        this.bMn1x();
        delete this.fC5H;
        a2x.mi7b(this.o3x);
        a2x.w3x(this.o3x, this.blg4k);
        delete this.blg4k
    }
    ;
    b2x.bZ4d = bn3x;
    b2x.bQ3x = function() {
        if (!this.ca4e)
            this.Sh8Z();
        this.o3x = a2x.dq4u(this.ca4e);
        if (!this.o3x)
            this.o3x = a2x.cT4X("div", this.lg7Z);
        a2x.y3x(this.o3x, this.lg7Z)
    }
    ;
    b2x.Sh8Z = bn3x;
    b2x.cnT9K = function(dI4M) {
        this.blg4k = dI4M || "";
        a2x.y3x(this.o3x, this.blg4k)
    }
    ;
    b2x.cnO9F = function() {
        if (!this.lg7Z)
            return;
        a2x.y3x(this.fC5H, this.lg7Z + "-parent")
    }
    ;
    b2x.bMn1x = function() {
        if (!this.lg7Z)
            return;
        a2x.w3x(this.fC5H, this.lg7Z + "-parent")
    }
    ;
    b2x.kB7u = function() {
        return this.o3x
    }
    ;
    b2x.bMp1x = function(bE3x) {
        if (!this.o3x)
            return this;
        this.bMn1x();
        if (k3x.ga5f(bE3x)) {
            this.fC5H = bE3x(this.o3x)
        } else {
            this.fC5H = a2x.z3x(bE3x);
            if (!!this.fC5H)
                this.fC5H.appendChild(this.o3x)
        }
        this.cnO9F();
        return this
    }
    ;
    b2x.N3x = function() {
        if (!this.fC5H || !this.o3x || this.o3x.parentNode == this.fC5H)
            return this;
        this.fC5H.appendChild(this.o3x);
        return this
    }
    ;
    b2x.bp3x = function() {
        a2x.mi7b(this.o3x);
        return this
    }
})();
(function() {
    var c2x = NEJ.P, X3x = NEJ.O, bn3x = NEJ.F, a2x = c2x("nej.e"), k3x = c2x("nej.u"), bb3x = c2x("nej.h"), M3x = c2x("nej.ui"), uP0x, bMk1x;
    if (!!M3x.Qe7X)
        return;
    M3x.Qe7X = NEJ.C();
    uP0x = M3x.Qe7X.O3x(M3x.eo5t);
    bMk1x = M3x.Qe7X.cf4j;
    uP0x.bk3x = function(e3x) {
        this.bl3x(e3x);
        this.ui0x("oncontentready", e3x.oncontentready || this.cnF9w.g3x(this));
        this.cnE9v = !!e3x.nohack;
        this.cnB9s = !!e3x.destroyable;
        this.IO4S(e3x.content)
    }
    ;
    uP0x.bD3x = function() {
        this.x3x("onbeforerecycle");
        this.bH3x();
        this.RP8H();
        this.IO4S("");
        a2x.fA5F(this.o3x, {
            top: "",
            left: ""
        })
    }
    ;
    uP0x.cnF9w = bn3x;
    uP0x.IU4Y = bn3x;
    uP0x.RP8H = function() {
        a2x.mi7b(this.o3x);
        if (!!this.mN8F) {
            this.mN8F = bb3x.bkg4k(this.o3x);
            delete this.mN8F
        }
    }
    ;
    uP0x.IO4S = function(bi3x) {
        if (!this.o3x || !this.Az2x || bi3x == null)
            return this;
        bi3x = bi3x || "";
        k3x.fl5q(bi3x) ? this.Az2x.innerHTML = bi3x : this.Az2x.appendChild(bi3x);
        this.x3x("oncontentready", this.Az2x);
        return this
    }
    ;
    uP0x.fZ5e = function(bj3x) {
        var A3x = bj3x.top;
        if (A3x != null) {
            A3x += "px";
            a2x.Y3x(this.o3x, "top", A3x);
            a2x.Y3x(this.mN8F, "top", A3x)
        }
        var A3x = bj3x.left;
        if (A3x != null) {
            A3x += "px";
            a2x.Y3x(this.o3x, "left", A3x);
            a2x.Y3x(this.mN8F, "left", A3x)
        }
        return this
    }
    ;
    uP0x.N3x = function() {
        a2x.Y3x(this.o3x, "visibility", "hidden");
        bMk1x.N3x.apply(this, arguments);
        this.IU4Y();
        a2x.Y3x(this.o3x, "visibility", "");
        if (!this.cnE9v) {
            this.mN8F = bb3x.mN8F(this.o3x)
        }
        return this
    }
    ;
    uP0x.bp3x = function() {
        this.cnB9s ? this.S3x() : this.RP8H();
        return this
    }
})();
(function() {
    var c2x = NEJ.P, bn3x = NEJ.F, k3x = c2x("nej.u"), a2x = c2x("nej.e"), M3x = c2x("nej.ui"), AI2x;
    if (!!M3x.RJ8B)
        return;
    M3x.RJ8B = NEJ.C();
    AI2x = M3x.RJ8B.O3x(M3x.eo5t);
    AI2x.bk3x = function(e3x) {
        this.Rc8U();
        this.bl3x(this.cnA9r(e3x));
        this.bS3x.onbeforerecycle = this.S3x.g3x(this);
        this.nX8P = this.bnv5A()
    }
    ;
    AI2x.bD3x = function() {
        this.x3x("onbeforerecycle");
        this.bH3x();
        delete this.bS3x;
        a2x.mi7b(this.o3x);
        var yb1x = this.nX8P;
        if (!!yb1x) {
            delete this.nX8P;
            yb1x.S3x()
        }
    }
    ;
    AI2x.bnv5A = bn3x;
    AI2x.cnA9r = function(e3x) {
        var m3x = {};
        k3x.ej5o(e3x, function(q3x, J3x) {
            this.bS3x.hasOwnProperty(J3x) ? this.bS3x[J3x] = q3x : m3x[J3x] = q3x
        }, this);
        return m3x
    }
    ;
    AI2x.Rc8U = function() {
        this.bS3x = {
            clazz: "",
            parent: null,
            content: this.o3x,
            destroyable: !1,
            oncontentready: null,
            nohack: !1
        }
    }
    ;
    AI2x.N3x = function() {
        if (!!this.nX8P)
            this.nX8P.N3x();
        this.x3x("onaftershow");
        return this
    }
    ;
    AI2x.bp3x = function() {
        if (!!this.nX8P)
            this.nX8P.bp3x();
        return this
    }
})();
(function() {
    var c2x = NEJ.P, dO4S = c2x("nej.g"), bb3x = c2x("nej.h"), a2x = c2x("nej.e"), k3x = c2x("nej.u"), h3x = c2x("nej.v"), M3x = c2x("nej.ui"), Rr8j, bMj1x;
    if (!!M3x.Jq4u)
        return;
    var hW6Q = a2x.rL9C(".#<uispace>{position:fixed;_position:absolute;z-index:100;top:0;bottom:0;left:0;right:0;width:100%;height:100%;background-image:url(" + dO4S.bco2x + ");}");
    M3x.Jq4u = NEJ.C();
    Rr8j = M3x.Jq4u.O3x(M3x.eo5t);
    bMj1x = M3x.Jq4u.cf4j;
    Rr8j.bk3x = function(e3x) {
        this.bl3x(e3x);
        var bi3x = e3x.content || "&nbsp;";
        k3x.fl5q(bi3x) ? this.o3x.innerHTML = bi3x : this.o3x.appendChild(bi3x)
    }
    ;
    Rr8j.bD3x = function() {
        this.bH3x();
        this.o3x.innerHTML = "&nbsp;"
    }
    ;
    Rr8j.bZ4d = function() {
        this.lg7Z = hW6Q
    }
    ;
    Rr8j.N3x = function() {
        bb3x.bjG4K(this.o3x);
        bMj1x.N3x.apply(this, arguments);
        return this
    }
})();
(function() {
    var c2x = NEJ.P, X3x = NEJ.O, a2x = c2x("nej.e"), h3x = c2x("nej.v"), M3x = c2x("nej.ut"), uY0x;
    if (!!M3x.wx1x)
        return;
    M3x.wx1x = NEJ.C();
    uY0x = M3x.wx1x.O3x(M3x.cz4D);
    uY0x.bk3x = function(e3x) {
        this.bl3x(e3x);
        this.cny9p = !!e3x.overflow;
        this.o3x = a2x.z3x(e3x.body);
        this.yo1x = a2x.z3x(e3x.view) || a2x.bEV9M(this.o3x);
        this.bMi1x = a2x.z3x(e3x.mbar) || this.o3x;
        this.RD8v = parseInt(e3x.direction) || 0;
        if (!!e3x.isRelative) {
            this.o3x.style.position = "relative";
            this.bpi5n = true;
            this.bpG6A()
        }
        this.bT3x([[document, "mouseup", this.bpK6E.g3x(this)], [document, "mousemove", this.bpM6G.g3x(this)], [this.bMi1x, "mousedown", this.Rm8e.g3x(this)]])
    }
    ;
    uY0x.bpG6A = function() {
        if (!!this.bpi5n) {
            this.Jj4n = a2x.hR6L(this.o3x, this.yo1x);
            this.Jj4n.x -= parseInt(a2x.da4e(this.o3x, "left")) || 0;
            this.Jj4n.y -= parseInt(a2x.da4e(this.o3x, "top")) || 0
        }
    }
    ;
    uY0x.bD3x = function() {
        this.bH3x();
        delete this.o3x;
        delete this.bMi1x;
        delete this.yo1x
    }
    ;
    uY0x.bpZ6T = function() {
        return {
            x: Math.max(this.yo1x.clientWidth, this.yo1x.scrollWidth) - this.o3x.offsetWidth,
            y: Math.max(this.yo1x.clientHeight, this.yo1x.scrollHeight) - this.o3x.offsetHeight
        }
    }
    ;
    uY0x.Rm8e = function(d2x) {
        h3x.bh3x(d2x);
        if (!!this.ia6U)
            return;
        this.ia6U = {
            x: h3x.kI7B(d2x),
            y: h3x.nI8A(d2x)
        };
        this.bMg1x = this.bpZ6T();
        this.x3x("ondragstart", d2x)
    }
    ;
    uY0x.bpM6G = function(d2x) {
        if (!this.ia6U)
            return;
        var bj3x = {
            x: h3x.kI7B(d2x),
            y: h3x.nI8A(d2x)
        };
        var rS9J = bj3x.x - this.ia6U.x
          , rU9L = bj3x.y - this.ia6U.y
          , A3x = {
            top: (parseInt(a2x.da4e(this.o3x, "top")) || 0) + rU9L,
            left: (parseInt(a2x.da4e(this.o3x, "left")) || 0) + rS9J
        };
        if (this.bpi5n) {
            this.bpG6A();
            A3x.top = A3x.top + this.Jj4n.y;
            A3x.left = A3x.left + this.Jj4n.x
        }
        this.ia6U = bj3x;
        this.fZ5e(A3x)
    }
    ;
    uY0x.bpK6E = function(d2x) {
        if (!this.ia6U)
            return;
        delete this.bMg1x;
        delete this.ia6U;
        this.x3x("ondragend", this.brc6W())
    }
    ;
    uY0x.fZ5e = function(d2x) {
        if (!this.cny9p) {
            var bMf1x = this.bMg1x || this.bpZ6T();
            d2x.top = Math.min(bMf1x.y, Math.max(0, d2x.top));
            d2x.left = Math.min(bMf1x.x, Math.max(0, d2x.left))
        }
        var cd4h = this.o3x.style;
        if (this.bpi5n) {
            this.bpG6A();
            d2x.top = d2x.top - this.Jj4n.y;
            d2x.left = d2x.left - this.Jj4n.x
        }
        if (this.RD8v == 0 || this.RD8v == 2)
            cd4h.top = d2x.top + "px";
        if (this.RD8v == 0 || this.RD8v == 1)
            cd4h.left = d2x.left + "px";
        this.x3x("onchange", d2x);
        return this
    }
    ;
    uY0x.brc6W = function() {
        return {
            left: parseInt(a2x.da4e(this.o3x, "left")) || 0,
            top: parseInt(a2x.da4e(this.o3x, "top")) || 0
        }
    }
})();
(function() {
    var c2x = NEJ.P, X3x = NEJ.O, a2x = NEJ.P("nej.e"), h3x = NEJ.P("nej.v"), k3x = NEJ.P("nej.u"), H3x = NEJ.P("nej.ut"), M3x = NEJ.P("nej.ui"), hW6Q, gh5m, b2x, K3x;
    if (!!M3x.RE8w)
        return;
    M3x.RE8w = NEJ.C();
    b2x = M3x.RE8w.O3x(M3x.Qe7X);
    K3x = M3x.RE8w.cf4j;
    b2x.cl4p = function() {
        this.pZ9Q = {};
        this.jG7z = {
            onchange: this.bpM6G.g3x(this)
        };
        this.cs4w()
    }
    ;
    b2x.bk3x = function(e3x) {
        this.bl3x(e3x);
        this.cnq9h(e3x.mask);
        this.cnm9d(e3x.align);
        this.yU1x(e3x.title);
        if (!e3x.draggable)
            return;
        this.iY6S = H3x.wx1x.B3x(this.jG7z)
    }
    ;
    b2x.bD3x = function() {
        this.bH3x();
        delete this.pq8i;
        delete this.Rb8T;
        if (!!this.zc1x) {
            this.zc1x.S3x();
            delete this.zc1x
        }
        if (!!this.iY6S) {
            this.iY6S.S3x();
            delete this.iY6S
        }
    }
    ;
    b2x.bZ4d = function() {
        this.lg7Z = hW6Q;
        this.ca4e = gh5m
    }
    ;
    b2x.bQ3x = function() {
        this.cb4f();
        var j3x = a2x.cQ4U(this.o3x);
        this.Az2x = j3x[1];
        this.jG7z.mbar = j3x[0];
        this.jG7z.body = this.o3x;
        h3x.s3x(j3x[2], "mousedown", this.cnl9c.g3x(this));
        h3x.s3x(this.jG7z.mbar, "mousedown", this.Rm8e.g3x(this));
        this.bMd1x = a2x.cQ4U(this.jG7z.mbar)[0]
    }
    ;
    b2x.cnl9c = function(d2x) {
        h3x.bh3x(d2x);
        this.x3x("onclose", d2x);
        if (!d2x.stopped) {
            this.bp3x()
        }
    }
    ;
    b2x.Rm8e = function(d2x) {
        h3x.x3x(document, "click")
    }
    ;
    b2x.bpM6G = function(d2x) {
        if (!this.mN8F)
            return;
        a2x.fA5F(this.mN8F, {
            top: d2x.top + "px",
            left: d2x.left + "px"
        })
    }
    ;
    b2x.IU4Y = function() {
        var eC5H = [function() {
            return 0
        }
        , function(nk8c, AX2x, bj3x, J3x) {
            if (J3x == "top" && window.top != window.self) {
                var RG8y = 0
                  , AY2x = 0;
                if (top.g_topBarHeight)
                    RG8y = top.g_topBarHeight;
                if (top.g_bottomBarShow && top.g_bottomBarHeight)
                    AY2x = top.g_bottomBarHeight;
                if (nk8c.top <= RG8y) {
                    var bcj2x = Math.max(0, (AX2x.height - (RG8y - nk8c.top) - AY2x - bj3x.height) / 2);
                    return bcj2x + RG8y
                } else {
                    var bcj2x = Math.max(0, (AX2x.height - AY2x - bj3x.height) / 2);
                    return bcj2x + nk8c.top
                }
            }
            return Math.max(0, nk8c[J3x] + (AX2x[hC6w[J3x]] - bj3x[hC6w[J3x]]) / 2)
        }
        , function(nk8c, AX2x, bj3x, J3x) {
            return nk8c[J3x] + (AX2x[hC6w[J3x]] - bj3x[hC6w[J3x]])
        }
        ]
          , cmZ9Q = ["left", "top"]
          , hC6w = {
            left: "width",
            top: "height"
        };
        return function() {
            var A3x = {}
              , cd4h = this.o3x.style
              , iL6F = a2x.oQ8I()
              , nk8c = {
                left: iL6F.scrollLeft,
                top: iL6F.scrollTop
            }
              , AX2x = {
                width: iL6F.clientWidth,
                height: iL6F.clientHeight
            }
              , bj3x = {
                width: this.o3x.offsetWidth,
                height: this.o3x.offsetHeight
            }
              , dg4k = {
                left: iL6F.clientWidth - this.o3x.offsetWidth,
                top: iL6F.clientHeight - this.o3x.offsetHeight
            };
            k3x.be3x(cmZ9Q, function(J3x, r3x) {
                var dd4h = eC5H[this.pq8i[r3x]];
                if (!dd4h)
                    return;
                A3x[J3x] = dd4h(nk8c, AX2x, bj3x, J3x)
            }, this);
            this.fZ5e(A3x)
        }
    }();
    b2x.cmY9P = function() {
        if (!this.zc1x) {
            if (!this.Rb8T)
                return;
            this.pZ9Q.parent = this.fC5H;
            this.zc1x = this.Rb8T.B3x(this.pZ9Q)
        }
        this.zc1x.N3x()
    }
    ;
    b2x.RP8H = function() {
        if (!!this.zc1x)
            this.zc1x.bp3x();
        K3x.RP8H.apply(this, arguments)
    }
    ;
    b2x.cnq9h = function(kc7V) {
        if (!!kc7V) {
            if (kc7V instanceof M3x.Jq4u) {
                this.zc1x = kc7V;
                return
            }
            if (k3x.ga5f(kc7V)) {
                this.Rb8T = kc7V;
                return
            }
            this.Rb8T = M3x.Jq4u;
            if (k3x.fl5q(kc7V))
                this.pZ9Q.clazz = kc7V;
            return
        }
        this.Rb8T = null
    }
    ;
    b2x.yU1x = function(eD5I, dz4D) {
        if (!!this.bMd1x) {
            var ban2x = !dz4D ? "innerText" : "innerHTML";
            this.bMd1x[ban2x] = eD5I || "标题"
        }
        return this
    }
    ;
    b2x.cnm9d = function() {
        var cO4S = /\s+/
          , cmW9N = {
            left: 0,
            center: 1,
            right: 2,
            auto: 3
        }
          , cmV9M = {
            top: 0,
            middle: 1,
            bottom: 2,
            auto: 3
        };
        return function(nb8T) {
            this.pq8i = (nb8T || "").split(cO4S);
            var dP5U = cmW9N[this.pq8i[0]];
            if (dP5U == null)
                dP5U = 1;
            this.pq8i[0] = dP5U;
            var dP5U = cmV9M[this.pq8i[1]];
            if (dP5U == null)
                dP5U = 1;
            this.pq8i[1] = dP5U;
            return this
        }
    }();
    b2x.N3x = function() {
        K3x.N3x.apply(this, arguments);
        this.cmY9P();
        return this
    }
    ;
    hW6Q = a2x.rL9C(".#<uispace>{position:absolute;z-index:1000;border:1px solid #aaa;background:#fff;}.#<uispace> .zbar{line-height:30px;background:#8098E7;border-bottom:1px solid #aaa;}.#<uispace> .zcnt{padding:10px 5px;}.#<uispace> .zttl{margin-right:20px;text-align:left;}.#<uispace> .zcls{position:absolute;top:5px;right:0;width:20px;height:20px;line-height:20px;cursor:pointer;}");
    gh5m = a2x.ib6V('<div class="' + hW6Q + '"><div class="zbar"><div class="zttl">标题</div></div><div class="zcnt"></div><span class="zcls" title="关闭窗体">×</span></div>')
})();
(function() {
    var c2x = NEJ.P, k3x = c2x("nej.u"), M3x = c2x("nej.ui"), bcI2x;
    if (!!M3x.RH8z)
        return;
    M3x.RH8z = NEJ.C();
    bcI2x = M3x.RH8z.O3x(M3x.RJ8B);
    bcI2x.bnv5A = function() {
        return M3x.RE8w.B3x(this.bS3x)
    }
    ;
    bcI2x.Rc8U = function() {
        M3x.RH8z.cf4j.Rc8U.apply(this, arguments);
        this.bS3x.mask = null;
        this.bS3x.title = "标题";
        this.bS3x.align = "";
        this.bS3x.draggable = !1;
        this.bS3x.onclose = null
    }
})();
(function() {
    var c2x = NEJ.P, a2x = c2x("nej.e"), bd3x = c2x("nej.ui"), n3x = c2x("nm.l"), b2x, K3x;
    n3x.dV5a = NEJ.C();
    b2x = n3x.dV5a.O3x(bd3x.RH8z);
    b2x.bk3x = function(e3x) {
        e3x.clazz = "m-layer z-show " + (e3x.clazz || "");
        e3x.nohack = true;
        e3x.draggable = true;
        this.bl3x(e3x)
    }
    ;
    b2x.dw4A = function(f3x, bF3x) {
        if (!f3x)
            return;
        a2x.Y3x(f3x, "display", !bF3x ? "none" : "");
        f3x.lastChild.innerText = bF3x || ""
    }
    ;
    b2x.dM4Q = function(gn5s, cE4I, QU8M, NV7O) {
        var dD4H = "js-lock";
        if (cE4I === undefined)
            return a2x.bB3x(gn5s, dD4H);
        !cE4I ? a2x.w3x(gn5s, dD4H) : a2x.y3x(gn5s, dD4H);
        gn5s.firstChild.innerText = !cE4I ? QU8M : NV7O
    }
    ;
    n3x.dV5a.N3x = function(e3x) {
        e3x = e3x || {};
        if (e3x.mask === undefined)
            e3x.mask = "m-mask";
        if (e3x.parent === undefined)
            e3x.parent = document.body;
        if (e3x.draggable === undefined)
            e3x.draggable = true;
        !!this.eM5R && this.eM5R.S3x();
        this.eM5R = this.B3x(e3x);
        this.eM5R.N3x(e3x);
        return this.eM5R
    }
    ;
    n3x.dV5a.bp3x = function() {
        !!this.eM5R && this.eM5R.S3x()
    }
})();
(function() {
    var c2x = NEJ.P, X3x = NEJ.O, a2x = c2x("nej.e"), h3x = c2x("nej.v"), k3x = c2x("nej.u"), p3x = c2x("nm.d"), l3x = c2x("nm.x"), n3x = c2x("nm.l"), b2x, K3x;
    n3x.bds2x = NEJ.C();
    b2x = n3x.bds2x.O3x(n3x.dV5a);
    K3x = n3x.bds2x.cf4j;
    b2x.bk3x = function(e3x) {
        this.bl3x(e3x);
        if (e3x.bubble === undefined)
            e3x.bubble = true;
        this.QQ8I = e3x.bubble;
        this.pH8z = e3x.message || ""
    }
    ;
    b2x.bZ4d = function() {
        this.ca4e = a2x.ib6V('<div class="lyct f-cb f-tc"></div>')
    }
    ;
    b2x.bQ3x = function() {
        this.cb4f();
        h3x.s3x(this.o3x, "click", this.cx4B.g3x(this))
    }
    ;
    b2x.cx4B = function(d2x) {
        var f3x = h3x.U3x(d2x, "d:action");
        if (!f3x)
            return;
        if (f3x.href)
            h3x.cg4k(d2x);
        if (a2x.u3x(f3x, "action") == "close")
            this.bp3x();
        if (this.QQ8I === !1)
            h3x.rx9o(d2x);
        this.x3x("onaction", a2x.u3x(f3x, "action"))
    }
    ;
    b2x.N3x = function() {
        K3x.N3x.call(this);
        this.o3x.innerHTML = this.pH8z
    }
    ;
    var fV5a = a2x.ek5p('<div class="f-fs1" style="line-height:22px;">${message|default:""}</div><div class="lybtn">{list buttons as item}<a hidefocus="true" class="u-btn2 ${item.klass} {if item.style}${item.style}{else}u-btn2-w2{/if}" href="javascript:;" {if !!item.action}data-action="${item.action}"{/if}><i>${item.text}</i></a>{/list}</div>');
    l3x.mB7u = function() {
        var eY5d;
        var cq4u;
        var bdH2x = function(gg5l, W3x) {
            if (k3x.ga5f(gg5l, "function") && gg5l(W3x) != -1)
                cq4u.S3x()
        };
        var xY1x = function() {
            !!cq4u && cq4u.bp3x()
        };
        return function(e3x) {
            clearTimeout(eY5d);
            e3x = e3x || {};
            e3x.title = e3x.title || "提示";
            e3x.clazz = e3x.clazz || "";
            e3x.parent = e3x.parent || document.body;
            e3x.buttons = e3x.buttons || [];
            e3x.message = a2x.bP3x(fV5a, e3x);
            e3x.onaction = bdH2x.g3x(null, e3x.action);
            if (e3x.mask === undefined)
                e3x.mask = true;
            if (e3x.draggable === undefined)
                e3x.draggable = true;
            !!cq4u && cq4u.S3x();
            cq4u = n3x.bds2x.B3x(e3x);
            cq4u.N3x();
            if (e3x.autoclose)
                eY5d = setTimeout(xY1x.g3x(null), 2e3);
            return cq4u
        }
    }();
    l3x.eU5Z = function(e3x) {
        e3x = e3x || {};
        e3x.clazz = e3x.clazz || "m-layer-w1";
        e3x.buttons = [{
            klass: "u-btn2-2",
            action: "close",
            text: e3x.btntxt || "确定"
        }];
        var cq4u = l3x.mB7u(e3x);
        return cq4u
    }
    ;
    l3x.gQ5V = function(e3x) {
        e3x = e3x || {};
        e3x.clazz = e3x.clazz || "m-layer-w2";
        e3x.buttons = [{
            klass: "u-btn2-2",
            action: "ok",
            text: e3x.btnok || "确定",
            style: e3x.okstyle || ""
        }, {
            klass: "u-btn2-1",
            action: "close",
            text: e3x.btncc || "取消",
            style: e3x.ccstyle || ""
        }];
        var cq4u = l3x.mB7u(e3x);
        return cq4u
    }
})();
(function() {
    var c2x = NEJ.P
      , bn3x = NEJ.F
      , a2x = c2x("nej.e")
      , h3x = c2x("nej.v")
      , k3x = c2x("nej.u");
    a2x.cmU9L = function() {
        var fW5b = /[\r\n]/gi
          , Q3x = {};
        var cmT9K = function(cC4G) {
            return (cC4G || "").replace(fW5b, "aa").length
        };
        var bLZ1x = function(C3x) {
            var bc3x = Q3x[C3x]
              , bLY1x = a2x.z3x(C3x)
              , wN1x = a2x.z3x(C3x + "-counter");
            if (!bLY1x || !bc3x)
                return;
            var d2x = {
                input: bLY1x.value
            };
            d2x.length = bc3x.onlength(d2x.input);
            d2x.delta = bc3x.max - d2x.length;
            bc3x.onchange(d2x);
            wN1x.innerHTML = d2x.value || "剩余" + d2x.delta + "个字"
        };
        return function(E3x, e3x) {
            var C3x = a2x.kv7o(E3x);
            if (!C3x || !!Q3x[C3x])
                return;
            var bc3x = NEJ.X({}, e3x);
            bc3x.onchange = bc3x.onchange || bn3x;
            bc3x.onlength = cmT9K;
            if (!bc3x.max) {
                var bLX1x = parseInt(a2x.fQ5V(C3x, "maxlength"))
                  , bLW1x = parseInt(a2x.u3x(C3x, "maxLength"));
                bc3x.max = bLX1x || bLW1x || 100;
                if (!bLX1x && !!bLW1x)
                    bc3x.onlength = k3x.fk5p
            }
            Q3x[C3x] = bc3x;
            h3x.s3x(C3x, "input", bLZ1x.g3x(null, C3x));
            var f3x = a2x.Gl3x(C3x, {
                nid: bc3x.nid || "js-counter",
                clazz: bc3x.clazz
            });
            bc3x.xid = C3x + "-counter";
            f3x.id = bc3x.xid;
            bLZ1x(C3x)
        }
    }()
})();
(function() {
    var c2x = NEJ.P
      , a2x = c2x("nej.e")
      , bb3x = c2x("nej.h");
    bb3x.beW3x = function(E3x, dI4M) {}
})();
(function() {
    var c2x = NEJ.P
      , bn3x = NEJ.F
      , M3x = c2x("nej.p")
      , a2x = c2x("nej.e")
      , h3x = c2x("nej.v")
      , bb3x = c2x("nej.h");
    if (M3x.ms7l.trident)
        return;
    bb3x.beW3x = function() {
        var Q3x = {};
        var Ib4f = function(d2x) {
            var cV4Z = h3x.U3x(d2x);
            if (!!cV4Z.value)
                return;
            a2x.Y3x(a2x.Gl3x(cV4Z), "display", "none")
        };
        var BV2x = function(d2x) {
            var cV4Z = h3x.U3x(d2x);
            if (!!cV4Z.value)
                return;
            a2x.Y3x(a2x.Gl3x(cV4Z), "display", "")
        };
        var cmO9F = function(cV4Z, dI4M) {
            var C3x = a2x.kv7o(cV4Z)
              , jF7y = a2x.Gl3x(cV4Z, {
                tag: "label",
                clazz: dI4M
            });
            jF7y.htmlFor = C3x;
            var cL4P = a2x.fQ5V(cV4Z, "placeholder") || "";
            jF7y.innerText = cL4P == "null" ? "" : cL4P;
            var cp4t = cV4Z.offsetHeight + "px";
            a2x.fA5F(jF7y, {
                left: 0,
                display: !cV4Z.value ? "" : "none"
            })
        };
        return bb3x.beW3x.ed5i(function(d2x) {
            d2x.stopped = !0;
            var bg3x = d2x.args
              , cV4Z = a2x.z3x(bg3x[0]);
            if (!!Q3x[cV4Z.id])
                return;
            cmO9F(cV4Z, bg3x[1]);
            Q3x[cV4Z.id] = !0;
            h3x.s3x(cV4Z, "blur", BV2x.g3x(null));
            h3x.s3x(cV4Z, "focus", Ib4f.g3x(null))
        })
    }()
})();
(function() {
    var c2x = NEJ.P
      , bb3x = c2x("nej.h")
      , a2x = c2x("nej.e")
      , cN4R = c2x("nej.x");
    a2x.fG5L = cN4R.fG5L = function(E3x, dI4M) {
        bb3x.beW3x(E3x, a2x.u3x(E3x, "holder") || dI4M || "js-placeholder");
        return this
    }
    ;
    cN4R.isChange = !0
})();
(function() {
    var c2x = NEJ.P, X3x = NEJ.O, bn3x = NEJ.F, a2x = c2x("nej.e"), h3x = c2x("nej.v"), k3x = c2x("nej.u"), M3x = c2x("nej.ut"), gW5b;
    if (!!M3x.QN8F)
        return;
    M3x.QN8F = NEJ.C();
    gW5b = M3x.QN8F.O3x(M3x.cz4D);
    gW5b.cl4p = function() {
        this.cs4w();
        this.Bi2x = {
            tp: {
                nid: "js-nej-tp"
            },
            ok: {
                nid: "js-nej-ok"
            },
            er: {
                nid: "js-nej-er"
            }
        }
    }
    ;
    gW5b.bk3x = function(e3x) {
        this.bl3x(e3x);
        this.fN5S = document.forms[e3x.form] || a2x.z3x(e3x.form);
        this.bT3x([[this.fN5S, "keypress", this.cmK9B.g3x(this)]]);
        this.pH8z = e3x.message || {};
        this.pH8z.pass = this.pH8z.pass || "&nbsp;";
        var eG5L = this.om8e(this.fN5S, "focusMode", 1);
        if (!isNaN(eG5L)) {
            this.bLU1x = {
                mode: eG5L,
                clazz: e3x.focus
            }
        }
        this.yF1x = e3x.holder;
        this.Bi2x.tp.clazz = "js-mhd " + (e3x.tip || "js-tip");
        this.Bi2x.ok.clazz = "js-mhd " + (e3x.pass || "js-pass");
        this.Bi2x.er.clazz = "js-mhd " + (e3x.error || "js-error");
        this.bLR1x = e3x.invalid || "js-invalid";
        this.cmF9w(e3x);
        this.fO5T();
        if (!!this.yN1x)
            this.yN1x.focus()
    }
    ;
    gW5b.bD3x = function() {
        this.bH3x();
        delete this.pH8z;
        delete this.yN1x;
        delete this.Bq2x;
        delete this.fN5S;
        delete this.bLP1x;
        delete this.Qu7n
    }
    ;
    gW5b.om8e = function(f3x, Bt2x, t3x) {
        var A3x = a2x.u3x(f3x, Bt2x);
        switch (t3x) {
        case 1:
            return parseInt(A3x);
        case 2:
            return (A3x || "").toLowerCase() == "true";
        case 3:
            return this.bhi3x(A3x)
        }
        return A3x
    }
    ;
    gW5b.yS1x = function(A3x, t3x) {
        if (t3x == "date")
            return this.bhi3x(A3x);
        return parseInt(A3x)
    }
    ;
    gW5b.RW8O = function() {
        var jw6q = /^button|submit|reset|image|hidden|file$/i;
        return function(f3x) {
            f3x = this.z3x(f3x) || f3x;
            var t3x = f3x.type;
            return !!f3x.name && !jw6q.test(f3x.type || "")
        }
    }();
    gW5b.cmB9s = function() {
        var jw6q = /^hidden$/i;
        return function(f3x) {
            if (this.RW8O(f3x))
                return !0;
            f3x = this.z3x(f3x) || f3x;
            var t3x = f3x.type || "";
            return jw6q.test(t3x)
        }
    }();
    gW5b.bhi3x = function() {
        var cO4S = /[-\/]/;
        var cmA9r = function(A3x) {
            if (!A3x)
                return "";
            A3x = A3x.split(cO4S);
            A3x.push(A3x.shift());
            return A3x.join("/")
        };
        return function(A3x) {
            if ((A3x || "").toLowerCase() == "now")
                return +(new Date);
            return Date.parse(cmA9r(A3x))
        }
    }();
    gW5b.cmK9B = function(d2x) {
        if (d2x.keyCode != 13)
            return;
        this.x3x("onenter", d2x)
    }
    ;
    gW5b.cmz9q = function(C3x, T3x) {
        var qy9p = this.Qu7n[T3x]
          , A3x = this.om8e(C3x, T3x);
        if (!A3x || !qy9p)
            return;
        this.RY8Q(C3x, qy9p);
        this.bhO4S(C3x, T3x, A3x)
    }
    ;
    gW5b.cmr9i = function(C3x, T3x) {
        try {
            var bLL1x = this.om8e(C3x, T3x);
            if (!bLL1x)
                return;
            var A3x = new RegExp(bLL1x);
            this.bhO4S(C3x, T3x, A3x);
            this.RY8Q(C3x, this.Qu7n[T3x])
        } catch (e) {}
    }
    ;
    gW5b.cmo9f = function(C3x, T3x) {
        var qy9p = this.Qu7n[T3x];
        if (!!qy9p && this.om8e(C3x, T3x, 2))
            this.RY8Q(C3x, qy9p)
    }
    ;
    gW5b.big4k = function(C3x, T3x, A3x) {
        A3x = parseInt(A3x);
        if (isNaN(A3x))
            return;
        this.bhO4S(C3x, T3x, A3x);
        this.RY8Q(C3x, this.Qu7n[T3x])
    }
    ;
    gW5b.bLJ1x = function(C3x, T3x) {
        this.big4k(C3x, T3x, this.om8e(C3x, T3x))
    }
    ;
    gW5b.bLH1x = function(C3x, T3x) {
        this.big4k(C3x, T3x, a2x.fQ5V(C3x, T3x))
    }
    ;
    gW5b.bLG1x = function(C3x, T3x, t3x) {
        var A3x = this.yS1x(this.om8e(C3x, T3x), this.om8e(C3x, "type"));
        this.big4k(C3x, T3x, A3x)
    }
    ;
    gW5b.cmj9a = function() {
        var fW5b = /^input|textarea$/i;
        var Ib4f = function(d2x) {
            this.oH8z(h3x.U3x(d2x))
        };
        var BV2x = function(d2x) {
            var f3x = h3x.U3x(d2x);
            if (!this.om8e(f3x, "ignore", 2)) {
                this.bLF1x(f3x)
            }
        };
        return function(f3x) {
            if (this.om8e(f3x, "autoFocus", 2))
                this.yN1x = f3x;
            var pg8Y = a2x.fQ5V(f3x, "placeholder");
            if (!!pg8Y && pg8Y != "null")
                a2x.fG5L(f3x, this.yF1x);
            if (!!this.bLU1x && fW5b.test(f3x.tagName))
                a2x.lU7N(f3x, this.bLU1x);
            var C3x = a2x.kv7o(f3x);
            this.cmo9f(C3x, "required");
            this.cmz9q(C3x, "type");
            this.cmr9i(C3x, "pattern");
            this.bLH1x(C3x, "maxlength");
            this.bLH1x(C3x, "minlength");
            this.bLJ1x(C3x, "maxLength");
            this.bLJ1x(C3x, "minLength");
            this.bLG1x(C3x, "min");
            this.bLG1x(C3x, "max");
            var T3x = f3x.name;
            this.pH8z[T3x + "-tip"] = this.om8e(f3x, "tip");
            this.pH8z[T3x + "-error"] = this.om8e(f3x, "message");
            this.oH8z(f3x);
            var bu3x = this.Bq2x[C3x]
              , i3x = (bu3x || X3x).data || X3x
              , Qi7b = this.om8e(f3x, "counter", 2);
            if (Qi7b && (i3x.maxlength || i3x.maxLength)) {
                a2x.cmU9L(C3x, {
                    nid: this.Bi2x.tp.nid,
                    clazz: "js-counter"
                })
            }
            if (!!bu3x && fW5b.test(f3x.tagName)) {
                this.bT3x([[f3x, "focus", Ib4f.g3x(this)], [f3x, "blur", BV2x.g3x(this)]])
            } else if (this.om8e(f3x, "focus", 2)) {
                this.bT3x([[f3x, "focus", Ib4f.g3x(this)]])
            }
        }
    }();
    gW5b.cmF9w = function() {
        var Bx2x = {
            number: /^[\d]+$/i,
            url: /^[a-z]+:\/\/(?:[\w-]+\.)+[a-z]{2,6}.*$/i,
            email: /^[\w-\.]+@(?:[\w-]+\.)+[a-z]{2,6}$/i,
            date: function(v) {
                return !v || !isNaN(this.bhi3x(v))
            }
        };
        var cme9V = {
            required: function(f3x) {
                var t3x = f3x.type
                  , cmd9U = !f3x.value
                  , cmc9T = (t3x == "checkbox" || t3x == "radio") && !f3x.checked;
                if (cmc9T || cmd9U)
                    return -1
            },
            type: function(f3x, e3x) {
                var cO4S = this.bLP1x[e3x.type]
                  , et5y = f3x.value.trim()
                  , clW9N = !!cO4S.test && !cO4S.test(et5y)
                  , clS9J = k3x.ga5f(cO4S) && !cO4S.call(this, et5y);
                if (clW9N || clS9J)
                    return -2
            },
            pattern: function(f3x, e3x) {
                if (!e3x.pattern.test(f3x.value))
                    return -3
            },
            maxlength: function(f3x, e3x) {
                if (f3x.value.length > e3x.maxlength)
                    return -4
            },
            minlength: function(f3x, e3x) {
                if (f3x.value.length < e3x.minlength)
                    return -5
            },
            maxLength: function(f3x, e3x) {
                if (k3x.fk5p(f3x.value) > e3x.maxLength)
                    return -4
            },
            minLength: function(f3x, e3x) {
                if (k3x.fk5p(f3x.value) < e3x.minLength)
                    return -5
            },
            min: function(f3x, e3x) {
                var go5t = this.yS1x(f3x.value, e3x.type);
                if (isNaN(go5t) || go5t < e3x.min)
                    return -6
            },
            max: function(f3x, e3x) {
                var go5t = this.yS1x(f3x.value, e3x.type);
                if (isNaN(go5t) || go5t > e3x.max)
                    return -7
            }
        };
        return function(e3x) {
            this.bLP1x = NEJ.X(NEJ.X({}, Bx2x), e3x.type);
            this.Qu7n = NEJ.X(NEJ.X({}, cme9V), e3x.attr)
        }
    }();
    gW5b.RY8Q = function(C3x, xk1x) {
        if (!k3x.ga5f(xk1x))
            return;
        var bu3x = this.Bq2x[C3x];
        if (!bu3x || !bu3x.func) {
            bu3x = bu3x || {};
            bu3x.func = [];
            this.Bq2x[C3x] = bu3x
        }
        bu3x.func.push(xk1x)
    }
    ;
    gW5b.bhO4S = function(C3x, T3x, A3x) {
        if (!T3x)
            return;
        var bu3x = this.Bq2x[C3x];
        if (!bu3x || !bu3x.data) {
            bu3x = bu3x || {};
            bu3x.data = {};
            this.Bq2x[C3x] = bu3x
        }
        bu3x.data[T3x] = A3x
    }
    ;
    gW5b.bLF1x = function(f3x) {
        f3x = this.z3x(f3x) || f3x;
        var bu3x = this.Bq2x[a2x.kv7o(f3x)];
        if (!f3x || !bu3x || !this.RW8O(f3x))
            return !0;
        var m3x;
        k3x.ej5o(bu3x.func, function(eC5H) {
            m3x = eC5H.call(this, f3x, bu3x.data);
            return m3x != null
        }, this);
        if (m3x == null) {
            var d2x = {
                target: f3x,
                form: this.fN5S
            };
            this.x3x("oncheck", d2x);
            m3x = d2x.value
        }
        var d2x = {
            target: f3x,
            form: this.fN5S
        };
        if (m3x != null) {
            d2x.code = m3x;
            this.x3x("oninvalid", d2x);
            if (!d2x.stopped) {
                this.clQ9H(f3x, d2x.value || this.pH8z[f3x.name + m3x])
            }
        } else {
            this.x3x("onvalid", d2x);
            if (!d2x.stopped)
                this.clP9G(f3x, d2x.value)
        }
        return m3x == null
    }
    ;
    gW5b.xl1x = function() {
        var clO9F = function(Zf1x, Zc1x) {
            return Zf1x == Zc1x ? "block" : "none"
        };
        var clL9C = function(f3x, t3x, bF3x) {
            var pg8Y = bLw1x.call(this, f3x, t3x);
            if (!pg8Y && !!bF3x)
                pg8Y = a2x.Gl3x(f3x, this.Bi2x[t3x]);
            return pg8Y
        };
        var bLw1x = function(f3x, t3x) {
            var pg8Y;
            if (t3x == "tp")
                pg8Y = a2x.z3x(f3x.name + "-tip");
            if (!pg8Y)
                pg8Y = a2x.I3x(f3x.parentNode, this.Bi2x[t3x].nid)[0];
            return pg8Y
        };
        return function(f3x, bF3x, t3x) {
            f3x = this.z3x(f3x) || f3x;
            if (!f3x)
                return;
            t3x == "er" ? a2x.y3x(f3x, this.bLR1x) : a2x.w3x(f3x, this.bLR1x);
            var pg8Y = clL9C.call(this, f3x, t3x, bF3x);
            if (!!pg8Y && !!bF3x)
                pg8Y.innerHTML = bF3x;
            k3x.ej5o(this.Bi2x, function(A3x, J3x) {
                a2x.Y3x(bLw1x.call(this, f3x, J3x), "display", clO9F(t3x, J3x))
            }, this)
        }
    }();
    gW5b.oH8z = function(f3x, bF3x) {
        this.xl1x(f3x, bF3x || this.pH8z[f3x.name + "-tip"], "tp");
        return this
    }
    ;
    gW5b.clP9G = function(f3x, bF3x) {
        this.xl1x(f3x, bF3x || this.pH8z[f3x.name + "-pass"] || this.pH8z.pass, "ok");
        return this
    }
    ;
    gW5b.clQ9H = function(f3x, bF3x) {
        this.xl1x(f3x, bF3x || this.pH8z[f3x.name + "-error"], "er");
        return this
    }
    ;
    gW5b.ie6Y = function() {
        var fW5b = /^(?:radio|checkbox)$/i;
        var clI9z = function(A3x) {
            return A3x == null ? "" : A3x
        };
        var bLu1x = function(A3x, f3x) {
            if (fW5b.test(f3x.type || "")) {
                f3x.checked = A3x == f3x.value
            } else {
                f3x.value = clI9z(A3x)
            }
        };
        return function(T3x, A3x) {
            var f3x = this.z3x(T3x);
            if (!f3x)
                return this;
            if (f3x.tagName == "SELECT" || !f3x.length) {
                bLu1x(A3x, f3x)
            } else {
                k3x.be3x(f3x, bLu1x.g3x(null, A3x))
            }
            return this
        }
    }();
    gW5b.z3x = function(T3x) {
        return this.fN5S.elements[T3x]
    }
    ;
    gW5b.cuo1x = function() {
        return this.fN5S
    }
    ;
    gW5b.Si8a = function() {
        var fW5b = /^radio|checkbox$/i
          , jw6q = /^number|date$/;
        var clE9v = function(bv3x, f3x) {
            var T3x = f3x.name
              , A3x = f3x.value
              , bu3x = bv3x[T3x]
              , t3x = this.om8e(f3x, "type");
            if (jw6q.test(t3x))
                A3x = this.yS1x(A3x, t3x);
            if (fW5b.test(f3x.type) && !f3x.checked) {
                A3x = this.om8e(f3x, "value");
                if (!A3x)
                    return
            }
            if (!!bu3x) {
                if (!k3x.ep5u(bu3x)) {
                    bu3x = [bu3x];
                    bv3x[T3x] = bu3x
                }
                bu3x.push(A3x)
            } else {
                bv3x[T3x] = A3x
            }
        };
        return function() {
            var m3x = {};
            k3x.be3x(this.fN5S.elements, function(f3x) {
                if (this.cmB9s(f3x))
                    clE9v.call(this, m3x, f3x)
            }, this);
            return m3x
        }
    }();
    gW5b.Iv4z = function() {
        var clB8t = function(f3x) {
            if (this.RW8O(f3x))
                this.oH8z(f3x)
        };
        return function() {
            this.fN5S.reset();
            k3x.be3x(this.fN5S.elements, clB8t, this);
            return this
        }
    }();
    gW5b.cuq1x = function() {
        this.fN5S.submit();
        return this
    }
    ;
    gW5b.fO5T = function() {
        var clz8r = function(f3x) {
            if (this.RW8O(f3x))
                this.cmj9a(f3x)
        };
        return function() {
            this.Bq2x = {};
            k3x.be3x(this.fN5S.elements, clz8r, this);
            return this
        }
    }();
    gW5b.cly8q = function(f3x) {
        f3x = this.z3x(f3x) || f3x;
        if (!!f3x)
            return this.bLF1x(f3x);
        var m3x = !0;
        k3x.be3x(this.fN5S.elements, function(f3x) {
            var ke7X = this.cly8q(f3x);
            m3x = m3x && ke7X
        }, this);
        return m3x
    }
})();
(function() {
    var c2x = NEJ.P, X3x = NEJ.O, a2x = c2x("nej.e"), h3x = c2x("nej.v"), H3x = c2x("nej.ut"), k3x = c2x("nej.u"), l3x = c2x("nm.x"), n3x = c2x("nm.l"), b2x, K3x;
    n3x.Sj8b = NEJ.C();
    b2x = n3x.Sj8b.O3x(n3x.dV5a);
    K3x = n3x.Sj8b.cf4j;
    b2x.bQ3x = function() {
        this.cb4f();
        h3x.s3x(this.o3x, "click", this.cx4B.g3x(this));
        h3x.s3x(document, "mousewheel", this.AH2x.g3x(this));
        if (!!document.body.addEventListener)
            document.body.addEventListener("DOMMouseScroll", this.AH2x.g3x(this))
    }
    ;
    b2x.bk3x = function(e3x) {
        this.bl3x(e3x);
        if (e3x.jst) {
            this.o3x.innerHTML = a2x.bP3x(e3x.jst, e3x.data)
        } else if (e3x.ntp) {
            this.o3x.appendChild(a2x.dq4u(e3x.ntp))
        } else if (e3x.txt) {
            this.o3x.innerHTML = a2x.hX6R(e3x.txt)
        } else if (e3x.html) {
            this.o3x.innerHTML = e3x.html
        }
        var PD7w = this.o3x.getElementsByTagName("form");
        if (PD7w.length) {
            this.fN5S = H3x.QN8F.B3x({
                form: PD7w[0]
            })
        }
        this.BP2x = a2x.cQ4U(this.o3x)[0]
    }
    ;
    b2x.bD3x = function() {
        this.x3x("ondestroy");
        this.bH3x();
        this.o3x.innerHTML = "";
        delete this.BP2x
    }
    ;
    b2x.cx4B = function(d2x) {
        var f3x = h3x.U3x(d2x, "d:action")
          , i3x = this.fN5S ? this.fN5S.Si8a() : null
          , d2x = {
            action: a2x.u3x(f3x, "action")
        };
        if (i3x)
            d2x.data = i3x;
        if (d2x.action) {
            this.x3x("onaction", d2x);
            if (d2x.stopped)
                return;
            this.bp3x()
        }
    }
    ;
    b2x.AH2x = function(d2x) {
        if (!this.BP2x)
            return;
        h3x.bh3x(d2x);
        var dg4k = d2x.wheelDelta || -d2x.detail;
        this.BP2x.scrollTop -= dg4k
    }
    ;
    l3x.jr6l = function(e3x) {
        e3x.destroyable = e3x.destroyable || true;
        e3x.title = e3x.title || "提示";
        e3x.draggable = true;
        e3x.parent = document.body;
        e3x.mask = e3x.mask || true;
        var yb1x = n3x.Sj8b.B3x(e3x);
        yb1x.N3x();
        return yb1x
    }
})();
(function() {
    var p = NEJ.P("nej.u");
    var bLp1x = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
      , Pv7o = {}
      , BR2x = {};
    for (var i = 0, l = bLp1x.length, c; i < l; i++) {
        c = bLp1x.charAt(i);
        Pv7o[i] = c;
        BR2x[c] = i
    }
    var clw8o = function(iO6I) {
        var r3x = 0, c, m3x = [];
        while (r3x < iO6I.length) {
            c = iO6I[r3x];
            if (c < 128) {
                m3x.push(String.fromCharCode(c));
                r3x++
            } else if (c > 191 && c < 224) {
                m3x.push(String.fromCharCode((c & 31) << 6 | iO6I[r3x + 1] & 63));
                r3x += 2
            } else {
                m3x.push(String.fromCharCode((c & 15) << 12 | (iO6I[r3x + 1] & 63) << 6 | iO6I[r3x + 2] & 63));
                r3x += 3
            }
        }
        return m3x.join("")
    };
    var clv8n = function() {
        var gZ6T = /\r\n/g;
        return function(i3x) {
            i3x = i3x.replace(gZ6T, "\n");
            var m3x = []
              , nQ8I = String.fromCharCode(237);
            if (nQ8I.charCodeAt(0) < 0)
                for (var i = 0, l = i3x.length, c; i < l; i++) {
                    c = i3x.charCodeAt(i);
                    c > 0 ? m3x.push(c) : m3x.push(256 + c >> 6 | 192, 256 + c & 63 | 128)
                }
            else
                for (var i = 0, l = i3x.length, c; i < l; i++) {
                    c = i3x.charCodeAt(i);
                    if (c < 128)
                        m3x.push(c);
                    else if (c > 127 && c < 2048)
                        m3x.push(c >> 6 | 192, c & 63 | 128);
                    else
                        m3x.push(c >> 12 | 224, c >> 6 & 63 | 128, c & 63 | 128)
                }
            return m3x
        }
    }();
    var Im4q = function(iO6I) {
        var r3x = 0
          , m3x = []
          , eG5L = iO6I.length % 3;
        if (eG5L == 1)
            iO6I.push(0, 0);
        if (eG5L == 2)
            iO6I.push(0);
        while (r3x < iO6I.length) {
            m3x.push(Pv7o[iO6I[r3x] >> 2], Pv7o[(iO6I[r3x] & 3) << 4 | iO6I[r3x + 1] >> 4], Pv7o[(iO6I[r3x + 1] & 15) << 2 | iO6I[r3x + 2] >> 6], Pv7o[iO6I[r3x + 2] & 63]);
            r3x += 3
        }
        if (eG5L == 1)
            m3x[m3x.length - 1] = m3x[m3x.length - 2] = "=";
        if (eG5L == 2)
            m3x[m3x.length - 1] = "=";
        return m3x.join("")
    };
    var clt8l = function() {
        var qd9U = /\n|\r|=/g;
        return function(i3x) {
            var r3x = 0
              , m3x = [];
            i3x = i3x.replace(qd9U, "");
            for (var i = 0, l = i3x.length; i < l; i += 4)
                m3x.push(BR2x[i3x.charAt(i)] << 2 | BR2x[i3x.charAt(i + 1)] >> 4, (BR2x[i3x.charAt(i + 1)] & 15) << 4 | BR2x[i3x.charAt(i + 2)] >> 2, (BR2x[i3x.charAt(i + 2)] & 3) << 6 | BR2x[i3x.charAt(i + 3)]);
            var br3x = m3x.length
              , eG5L = i3x.length % 4;
            if (eG5L == 2)
                m3x = m3x.slice(0, br3x - 2);
            if (eG5L == 3)
                m3x = m3x.slice(0, br3x - 1);
            return m3x
        }
    }();
    p.cur1x = function(i3x) {
        return clw8o(clt8l(i3x))
    }
    ;
    p.clr8j = function(i3x) {
        try {
            return window.btoa(i3x)
        } catch (ex) {
            return Im4q(clv8n(i3x))
        }
    }
})();
(function() {
    var c2x = NEJ.P, X3x = NEJ.O, h3x = c2x("nej.v"), a2x = c2x("nej.e"), v3x = c2x("nej.j"), M3x = c2x("nej.p"), k3x = c2x("nej.u"), n3x = c2x("nm.l"), D3x = c2x("nm.w"), bI3x = c2x("nej.ui"), p3x = c2x("nm.d"), l3x = c2x("nm.x"), b2x, K3x;
    var TYPE_MAP = {
        13: "playlist",
        17: "program",
        18: "song",
        19: "album"
    };
    n3x.bLm1x = NEJ.C();
    b2x = n3x.bLm1x.O3x(n3x.dV5a);
    b2x.bZ4d = function() {
        this.ca4e = "m-download-layer"
    }
    ;
    b2x.bQ3x = function() {
        this.cb4f();
        var j3x = a2x.I3x(this.o3x, "j-flag");
        this.bmi5n = j3x[0];
        this.bmj5o = j3x[1];
        this.bLl1x = j3x[2];
        v3x.bq3x("/client/version/get", {
            type: "json",
            onload: this.clm8e.g3x(this)
        });
        if (M3x.bag2x.mac) {
            a2x.w3x(this.bmi5n.parentNode, "f-hide");
            a2x.y3x(this.bmj5o.parentNode, "f-hide");
            a2x.y3x(this.bLl1x, "f-hide")
        } else {
            a2x.y3x(this.bmi5n.parentNode, "f-hide");
            a2x.w3x(this.bmj5o.parentNode, "f-hide");
            a2x.w3x(this.bLl1x, "f-hide")
        }
    }
    ;
    b2x.bk3x = function(e3x) {
        e3x.clazz = " m-layer-down";
        e3x.parent = e3x.parent || document.body;
        e3x.title = "下载";
        e3x.draggable = !0;
        e3x.destroyalbe = !0;
        e3x.mask = true;
        this.bl3x(e3x);
        this.bT3x([[this.o3x, "click", this.bO3x.g3x(this)]]);
        this.el5q = TYPE_MAP[e3x.type];
        this.gx5C = e3x.id
    }
    ;
    b2x.bD3x = function() {
        this.bH3x()
    }
    ;
    b2x.yy1x = function() {
        this.bp3x()
    }
    ;
    b2x.BU2x = function(d2x) {
        this.x3x("onok", A3x);
        this.bp3x()
    }
    ;
    b2x.bO3x = function(d2x) {
        var f3x = h3x.U3x(d2x, "d:action");
        switch (a2x.u3x(f3x, "action")) {
        case "download":
            this.bp3x();
            window.open(a2x.u3x(f3x, "src"));
            break;
        case "orpheus":
            this.bp3x();
            location.href = "orpheus://" + k3x.clr8j(JSON.stringify({
                type: this.el5q,
                id: this.gx5C,
                cmd: "download"
            }));
            break
        }
    }
    ;
    b2x.clm8e = function(d2x) {
        if ((d2x || X3x).code == 200) {
            this.HP4T = d2x.data;
            this.bmi5n.innerText = "V" + this.HP4T.mac;
            this.bmj5o.innerText = "V" + this.HP4T.pc
        }
    }
    ;
    l3x.So8g = function(e3x) {
        n3x.bLm1x.B3x(e3x).N3x()
    }
})();
(function() {
    var c2x = NEJ.P
      , X3x = NEJ.O
      , k3x = c2x("nej.u")
      , p3x = c2x("nm.d")
      , bN3x = {};
    p3x.z3x = function(J3x) {
        return bN3x[J3x]
    }
    ;
    p3x.ov8n = function(J3x, bc3x) {
        bN3x[J3x] = bc3x
    }
    ;
    p3x.eP5U = function(i3x) {
        k3x.ej5o(i3x, function(q3x, J3x) {
            var bc3x = bN3x[J3x] || {};
            NEJ.X(bc3x, q3x);
            bN3x[J3x] = bc3x
        })
    }
})();
(function() {
    var c2x = NEJ.P
      , bn3x = NEJ.F
      , bb3x = c2x("nej.h");
    bb3x.Sp8h = function(J3x) {
        return localStorage.getItem(J3x)
    }
    ;
    bb3x.Sr8j = function(J3x, A3x) {
        localStorage.setItem(J3x, A3x)
    }
    ;
    bb3x.bnV5a = function(J3x) {
        localStorage.removeItem(J3x)
    }
    ;
    bb3x.bof5k = function() {
        localStorage.clear()
    }
    ;
    bb3x.cll8d = function() {
        var m3x = [];
        for (var i = 0, l = localStorage.length; i < l; i++)
            m3x.push(localStorage.key(i));
        return m3x
    }
    ;
    bb3x.boj5o = function() {
        (document.onstorageready || bn3x)()
    }
    ;
    bb3x.bok5p = function() {
        return !0
    }
})();
(function() {
    var c2x = NEJ.P, M3x = c2x("nej.p"), iy6s = c2x("nej.c"), bb3x = c2x("nej.h"), sn9e;
    if (M3x.ms7l.trident || !!window.localStorage)
        return;
    var clk8c = function() {
        var qR9I, eY5d;
        var blM5R = function() {
            qR9I = document.createElement("div");
            NEJ.X(qR9I.style, {
                position: "absolute",
                top: 0,
                left: 0,
                width: "1px",
                height: "1px",
                zIndex: 1e4,
                overflow: "hidden"
            });
            document.body.insertAdjacentElement("afterBegin", qR9I);
            qR9I.innerHTML = '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="1" height="1"id="f-' + +(new Date) + '" codebase="http://fpdownload.macromedia.com/get/flashplayer/current/swflash.cab"><param name="movie" value="' + iy6s.z3x("storage.swf") + '"/><param name="AllowScriptAccess" value="sameDomain"/></object>'
        };
        var Nk6e = function() {
            eY5d = window.clearTimeout(eY5d);
            var hg6a = qR9I.getElementsByTagName("object")[0];
            if (!!hg6a.initStorage) {
                delete qR9I;
                sn9e = hg6a;
                sn9e.initStorage("nej-storage");
                (document.onstorageready || bn3x)();
                return
            }
            eY5d = window.setTimeout(Nk6e, 500)
        };
        return function() {
            if (!!sn9e)
                return;
            blM5R();
            Nk6e()
        }
    }();
    bb3x.Sp8h = bb3x.Sp8h.ed5i(function(d2x) {
        d2x.stopped = !0;
        if (!sn9e)
            return;
        d2x.value = sn9e.getItem(d2x.args[0])
    });
    bb3x.Sr8j = bb3x.Sr8j.ed5i(function(d2x) {
        d2x.stopped = !0;
        if (!sn9e)
            return;
        var bg3x = d2x.args;
        sn9e.setItem(bg3x[0], bg3x[1])
    });
    bb3x.bnV5a = bb3x.bnV5a.ed5i(function(d2x) {
        d2x.stopped = !0;
        if (!sn9e)
            return;
        sn9e.removeItem(d2x.args[0])
    });
    bb3x.bof5k = bb3x.bof5k.ed5i(function(d2x) {
        d2x.stopped = !0;
        if (!!sn9e)
            sn9e.clear()
    });
    bb3x.boj5o = bb3x.boj5o.ed5i(function(d2x) {
        d2x.stopped = !0;
        clk8c()
    });
    bb3x.bok5p = bb3x.bok5p.ed5i(function(d2x) {
        d2x.stopped = !0;
        d2x.value = !!sn9e
    })
})();
(function() {
    var c2x = NEJ.P
      , k3x = c2x("nej.u")
      , h3x = c2x("nej.v")
      , bb3x = c2x("nej.h")
      , v3x = c2x("nej.j")
      , H3x = c2x("nej.ut")
      , Q3x = {};
    v3x.vz0x = function(J3x, A3x) {
        var bLk1x = JSON.stringify(A3x);
        try {
            bb3x.Sr8j(J3x, bLk1x)
        } catch (ex) {
            console.error(ex.message);
            console.error(ex)
        }
        if (bLk1x != bb3x.Sp8h(J3x))
            Q3x[J3x] = A3x;
        return this
    }
    ;
    v3x.st9k = function(J3x) {
        var i3x = JSON.parse(bb3x.Sp8h(J3x) || "null");
        return i3x == null ? Q3x[J3x] : i3x
    }
    ;
    v3x.bLj1x = function(J3x, A3x) {
        var i3x = v3x.st9k(J3x);
        if (i3x == null) {
            i3x = A3x;
            v3x.vz0x(J3x, i3x)
        }
        return i3x
    }
    ;
    v3x.Pg7Z = function(J3x) {
        delete Q3x[J3x];
        bb3x.bnV5a(J3x);
        return this
    }
    ;
    v3x.cus1x = function() {
        var bpp5u = function(q3x, J3x, bv3x) {
            delete bv3x[J3x]
        };
        return function() {
            k3x.ej5o(Q3x, bpp5u);
            bb3x.bof5k();
            return this
        }
    }();
    v3x.cut1x = function(m3x) {
        m3x = m3x || {};
        k3x.be3x(bb3x.cll8d(), function(J3x) {
            m3x[J3x] = v3x.st9k(J3x)
        });
        return m3x
    }
    ;
    H3x.fq5v.B3x({
        element: document,
        event: "storageready",
        oneventadd: function() {
            if (bb3x.bok5p()) {
                document.onstorageready()
            }
        }
    });
    var cld8V = function() {
        var clb8T = function(A3x, J3x, bv3x) {
            bb3x.Sr8j(J3x, JSON.stringify(A3x));
            delete bv3x[J3x]
        };
        return function() {
            k3x.ej5o(Q3x, clb8T)
        }
    }();
    h3x.s3x(document, "storageready", cld8V);
    bb3x.boj5o()
})();
(function() {
    var c2x = NEJ.P, h3x = c2x("nej.v"), k3x = c2x("nej.u"), M3x = c2x("nej.ut"), If4j;
    if (!!M3x.bpI6C)
        return;
    M3x.bpI6C = NEJ.C();
    If4j = M3x.bpI6C.O3x(M3x.cz4D);
    If4j.cl4p = function() {
        var fV5a = +(new Date)
          , mq7j = "dat-" + fV5a;
        return function() {
            this.cs4w();
            var Q3x = this.constructor[mq7j];
            if (!Q3x) {
                Q3x = {};
                this.constructor[mq7j] = Q3x
            }
            this.R3x = Q3x
        }
    }();
    If4j.z3x = function(J3x) {
        return this.R3x[J3x]
    }
    ;
    If4j.ov8n = function(J3x, A3x) {
        var lW7P = this.R3x[J3x];
        this.R3x[J3x] = A3x;
        h3x.x3x(localCache, "cachechange", {
            key: J3x,
            type: "set",
            oldValue: lW7P,
            newValue: A3x
        });
        return this
    }
    ;
    If4j.cK4O = function(J3x) {
        var lW7P = this.R3x[J3x];
        k3x.RB8t(this.R3x, J3x);
        h3x.x3x(localCache, "cachechange", {
            key: J3x,
            type: "delete",
            oldValue: lW7P,
            newValue: undefined
        });
        return lW7P
    }
    ;
    If4j.Su8m = function(AO2x) {
        return NEJ.Q(this.R3x, AO2x)
    }
    ;
    window.localCache = M3x.bpI6C.B3x();
    M3x.fq5v.B3x({
        element: localCache,
        event: "cachechange"
    })
})();
(function() {
    var c2x = NEJ.P, fc5h = NEJ.R, bn3x = NEJ.F, k3x = c2x("nej.u"), v3x = c2x("nej.j"), M3x = c2x("nej.ut"), mq7j = "dat-" + +(new Date), mt7m;
    if (!!M3x.bpU6O)
        return;
    M3x.bpU6O = NEJ.C();
    mt7m = M3x.bpU6O.O3x(M3x.cz4D);
    mt7m.cl4p = function() {
        this.cs4w();
        this.R3x = this.constructor[mq7j];
        if (!this.R3x) {
            this.R3x = {};
            this.R3x[mq7j + "-l"] = {};
            this.constructor[mq7j] = this.R3x
        }
    }
    ;
    mt7m.qt9k = function(J3x) {
        return this.R3x[J3x]
    }
    ;
    mt7m.on8f = function(J3x, A3x) {
        this.R3x[J3x] = A3x
    }
    ;
    mt7m.kN7G = function(J3x, kM7F) {
        var i3x = this.qt9k(J3x);
        if (i3x == null) {
            i3x = kM7F;
            this.on8f(J3x, i3x)
        }
        return i3x
    }
    ;
    mt7m.ckX8P = function(J3x) {
        if (J3x != null) {
            delete this.R3x[J3x];
            return
        }
        k3x.ej5o(this.R3x, function(q3x, J3x) {
            if (J3x == mq7j + "-l")
                return;
            this.ckX8P(J3x)
        }, this)
    }
    ;
    mt7m.cuw1x = function(J3x) {
        if (!!v3x.Pg7Z)
            return v3x.Pg7Z(J3x)
    }
    ;
    mt7m.ckT8L = function(J3x) {
        if (!!v3x.st9k)
            return v3x.st9k(J3x)
    }
    ;
    mt7m.ckS8K = function(J3x, A3x) {
        if (!!v3x.vz0x)
            v3x.vz0x(J3x, A3x)
    }
    ;
    mt7m.BZ2x = function(J3x, kM7F) {
        var i3x = this.OT7M(J3x);
        if (i3x == null) {
            i3x = kM7F;
            this.vB0x(J3x, i3x)
        }
        return i3x
    }
    ;
    mt7m.OT7M = function(J3x) {
        var i3x = this.qt9k(J3x);
        if (i3x != null)
            return i3x;
        i3x = this.ckT8L(J3x);
        if (i3x != null)
            this.on8f(J3x, i3x);
        return i3x
    }
    ;
    mt7m.vB0x = function(J3x, A3x) {
        this.ckS8K(J3x, A3x);
        this.on8f(J3x, A3x)
    }
    ;
    mt7m.bLa1x = function(J3x) {
        if (J3x != null) {
            delete this.R3x[J3x];
            if (!!v3x.Pg7Z)
                v3x.Pg7Z(J3x);
            return
        }
        k3x.ej5o(this.R3x, function(q3x, J3x) {
            if (J3x == mq7j + "-l")
                return;
            this.bLa1x(J3x)
        }, this)
    }
    ;
    mt7m.cux1x = function() {
        this.bLa1x();
        return this
    }
    ;
    mt7m.cuy1x = function(J3x) {
        var i3x = this.R3x[mq7j + "-l"];
        delete i3x[J3x]
    }
    ;
    mt7m.brM6G = function(J3x) {
        var i3x = this.R3x[mq7j + "-l"]
          , bg3x = fc5h.slice.call(arguments, 1);
        k3x.be3x(i3x[J3x], function(dr4v) {
            try {
                dr4v.apply(null, bg3x)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        });
        delete i3x[J3x]
    }
    ;
    mt7m.baA2x = function(J3x, dr4v) {
        dr4v = dr4v || bn3x;
        var j3x = this.R3x[mq7j + "-l"][J3x];
        if (!j3x) {
            j3x = [dr4v];
            this.R3x[mq7j + "-l"][J3x] = j3x;
            return !1
        }
        j3x.push(dr4v);
        return !0
    }
    ;
    mt7m.ckK8C = function(j3x, bj3x, fX5c) {
        if (!j3x)
            return !1;
        bj3x = parseInt(bj3x) || 0;
        fX5c = parseInt(fX5c) || 0;
        if (!fX5c) {
            if (!j3x.loaded)
                return !1;
            fX5c = j3x.length
        }
        if (!!j3x.loaded)
            fX5c = Math.min(fX5c, j3x.length - bj3x);
        for (var i = 0; i < fX5c; i++)
            if (!j3x[bj3x + i])
                return !1;
        return !0
    }
})();
(function() {
    var c2x = NEJ.P, X3x = NEJ.O, bn3x = NEJ.F, k3x = c2x("nej.u"), M3x = c2x("nej.ut"), b2x, K3x;
    if (!!M3x.OH7A)
        return;
    M3x.OH7A = NEJ.C();
    b2x = M3x.OH7A.O3x(M3x.bpU6O);
    K3x = M3x.OH7A.cf4j;
    b2x.bk3x = function(e3x) {
        this.bl3x(e3x);
        this.uJ0x = e3x.key || "id";
        this.ba3x = e3x.data || X3x;
        this.ckJ8B = !!e3x.autogc;
        this.ckI8A(e3x.id)
    }
    ;
    b2x.bD3x = function() {
        this.bH3x();
        if (!!this.dK4O) {
            this.bKX1x()
        }
    }
    ;
    b2x.ckI8A = function(C3x) {
        var Q3x;
        if (!!C3x) {
            Q3x = this.R3x[C3x];
            if (!Q3x) {
                Q3x = {};
                this.R3x[C3x] = Q3x
            }
        }
        Q3x = Q3x || this.R3x;
        Q3x.hash = Q3x.hash || {};
        this.OB7u = Q3x
    }
    ;
    b2x.bKX1x = function() {
        this.dK4O = window.clearTimeout(this.dK4O);
        var bv3x = {};
        k3x.ej5o(this.OB7u, function(j3x, J3x) {
            if (J3x == "hash")
                return;
            if (!k3x.ep5u(j3x))
                return;
            k3x.be3x(j3x, function(q3x) {
                if (!q3x)
                    return;
                bv3x[q3x[this.uJ0x]] = !0
            }, this)
        }, this);
        k3x.ej5o(this.SP8H(), function(q3x, C3x, dF4J) {
            if (!bv3x[C3x]) {
                delete dF4J[C3x]
            }
        })
    }
    ;
    b2x.ckE8w = function() {
        if (!!this.dK4O) {
            this.dK4O = window.clearTimeout(this.dK4O)
        }
        this.dK4O = window.setTimeout(this.bKX1x.g3x(this), 150)
    }
    ;
    b2x.zC2x = function(q3x, SQ8I) {
        q3x = this.bKW1x(q3x, SQ8I) || q3x;
        if (!q3x)
            return null;
        var J3x = q3x[this.uJ0x];
        if (J3x != null) {
            var hH6B = this.SP8H()[J3x];
            if (!!hH6B)
                q3x = NEJ.X(hH6B, q3x);
            this.SP8H()[J3x] = q3x
        }
        delete q3x.bKV1x;
        return q3x
    }
    ;
    b2x.bKW1x = bn3x;
    b2x.bbD2x = function(J3x, q3x) {
        if (!q3x)
            return;
        if (!k3x.ep5u(q3x)) {
            var j3x = this.gP5U(J3x)
              , q3x = this.zC2x(q3x, J3x);
            if (!!q3x)
                j3x.unshift(q3x);
            return
        }
        k3x.me7X(q3x, this.bbD2x.g3x(this, J3x))
    }
    ;
    b2x.Ow7p = function(J3x, co4s) {
        var j3x = this.gP5U(J3x);
        j3x.length = Math.max(j3x.length, co4s);
        this.bcd2x(J3x);
        return this
    }
    ;
    b2x.jO7H = function(J3x) {
        return this.gP5U(J3x).length
    }
    ;
    b2x.bcd2x = function(J3x, ns8k) {
        this.gP5U(J3x).loaded = ns8k != !1;
        return this
    }
    ;
    b2x.SR8J = function(J3x) {
        return !!this.gP5U(J3x).loaded
    }
    ;
    b2x.sq9h = function(J3x, j3x) {
        this.tT0x(J3x);
        this.bcq2x({
            key: J3x,
            offset: 0,
            limit: j3x.length + 1
        }, {
            list: j3x,
            total: j3x.length
        })
    }
    ;
    b2x.gP5U = function() {
        var Ct2x = function(J3x) {
            return (J3x || "") + (!J3x ? "" : "-") + "list"
        };
        return function(J3x) {
            var J3x = Ct2x(J3x)
              , j3x = this.OB7u[J3x];
            if (!j3x) {
                j3x = [];
                this.OB7u[J3x] = j3x
            }
            return j3x
        }
    }();
    b2x.SP8H = function() {
        var dF4J = this.OB7u.hash;
        if (!dF4J) {
            dF4J = {};
            this.OB7u.hash = dF4J
        }
        return dF4J
    }
    ;
    b2x.bcC2x = function() {
        var Ct2x = function(e3x) {
            return "r-" + e3x.key
        };
        return function(e3x) {
            var hU6O = NEJ.X({}, e3x)
              , mX8P = Ct2x(hU6O);
            if (!this.baA2x(mX8P, this.x3x.g3x(this))) {
                hU6O.rkey = mX8P;
                hU6O.onload = this.ckB8t.g3x(this, hU6O);
                this.x3x("dopullrefresh", hU6O)
            }
            return this
        }
    }();
    b2x.ckB8t = function(e3x, j3x) {
        this.bbD2x(e3x.key, j3x);
        this.brM6G(e3x.rkey, "onpullrefresh", e3x)
    }
    ;
    b2x.nv8n = function() {
        var Ct2x = function(e3x) {
            return "r-" + e3x.key + "-" + e3x.offset + "-" + e3x.limit
        };
        return function(e3x) {
            e3x = e3x || X3x;
            var hU6O = {
                key: "" + e3x.key || "",
                ext: e3x.ext || null,
                data: e3x.data || null,
                offset: parseInt(e3x.offset) || 0,
                limit: parseInt(e3x.limit) || 0
            }
              , j3x = this.gP5U(hU6O.key);
            if (this.ckK8C(j3x, hU6O.offset, hU6O.limit)) {
                this.x3x("onlistload", hU6O);
                return this
            }
            var mX8P = Ct2x(hU6O);
            if (!this.baA2x(mX8P, this.x3x.g3x(this))) {
                hU6O.rkey = mX8P;
                hU6O.onload = this.bcq2x.g3x(this, hU6O);
                this.x3x("doloadlist", hU6O)
            }
            return this
        }
    }();
    b2x.bcq2x = function() {
        var CV3x = function(q3x, r3x, j3x) {
            if (!!q3x) {
                return !0
            }
            j3x.splice(r3x, 1)
        };
        return function(e3x, m3x) {
            e3x = e3x || X3x;
            var J3x = e3x.key
              , bj3x = e3x.offset
              , bKT1x = this.gP5U(J3x);
            var j3x = m3x || [];
            if (!k3x.ep5u(j3x)) {
                j3x = m3x.result || m3x.list || [];
                var co4s = parseInt(m3x.total);
                if (!isNaN(co4s) || co4s > j3x.length) {
                    this.Ow7p(J3x, co4s)
                }
            }
            k3x.be3x(j3x, function(q3x, r3x) {
                bKT1x[bj3x + r3x] = this.zC2x(q3x, J3x)
            }, this);
            if (j3x.length < e3x.limit) {
                this.bcd2x(J3x);
                k3x.me7X(bKT1x, CV3x)
            }
            this.brM6G(e3x.rkey, "onlistload", e3x)
        }
    }();
    b2x.tT0x = function() {
        var CV3x = function(q3x, r3x, j3x) {
            j3x.splice(r3x, 1)
        };
        return function(J3x) {
            var j3x = this.gP5U(J3x);
            k3x.me7X(j3x, CV3x);
            this.bcd2x(J3x, !1);
            if (this.ckJ8B) {
                this.ckE8w()
            }
            return this
        }
    }();
    b2x.bKS1x = function(q3x, SQ8I) {
        return !q3x.bKV1x
    }
    ;
    b2x.eg5l = function(C3x) {
        return this.SP8H()[C3x]
    }
    ;
    b2x.cuB1x = function(C3x) {
        var q3x = this.eg5l(C3x);
        if (!!q3x)
            q3x.bKV1x = !0
    }
    ;
    b2x.ST8L = function() {
        var Ct2x = function(e3x) {
            return "r-" + e3x.key + "-" + e3x.id
        };
        return function(e3x) {
            e3x = e3x || X3x;
            var C3x = e3x[this.uJ0x]
              , hU6O = {
                id: C3x,
                ext: e3x.ext,
                data: e3x.data || {},
                key: "" + e3x.key || ""
            };
            q3x = this.eg5l(C3x);
            hU6O.data[this.uJ0x] = C3x;
            if (!!q3x && this.bKS1x(q3x, hU6O.key)) {
                this.x3x("onitemload", hU6O);
                return this
            }
            var mX8P = Ct2x(hU6O);
            if (!this.baA2x(mX8P, this.x3x.g3x(this))) {
                hU6O.rkey = mX8P;
                hU6O.onload = this.ckt8l.g3x(this, hU6O);
                this.x3x("doloaditem", hU6O)
            }
            return this
        }
    }();
    b2x.ckt8l = function(e3x, q3x) {
        e3x = e3x || X3x;
        this.zC2x(q3x, e3x.key);
        this.brM6G(e3x.rkey, "onitemload", e3x)
    }
    ;
    b2x.iJ6D = function(e3x) {
        e3x = NEJ.X({}, e3x);
        e3x.onload = this.xI1x.g3x(this, e3x);
        this.x3x("doadditem", e3x)
    }
    ;
    b2x.xI1x = function(e3x, q3x) {
        var J3x = e3x.key;
        q3x = this.zC2x(q3x, J3x);
        if (!!q3x) {
            var ez5E = 0
              , j3x = this.gP5U(J3x);
            if (!e3x.push) {
                ez5E = -1;
                var bj3x = e3x.offset || 0;
                j3x.splice(bj3x, 0, q3x)
            } else if (j3x.loaded) {
                ez5E = 1;
                j3x.push(q3x)
            } else {
                j3x.length++
            }
        }
        var d2x = {
            key: J3x,
            flag: ez5E,
            data: q3x,
            action: "add",
            ext: e3x.ext
        };
        this.x3x("onitemadd", d2x);
        return d2x
    }
    ;
    b2x.HL4P = function(e3x) {
        e3x = NEJ.X({}, e3x);
        e3x.onload = this.bdm2x.g3x(this, e3x);
        this.x3x("dodeleteitem", e3x)
    }
    ;
    b2x.bdm2x = function(e3x, bKR1x) {
        var q3x, J3x = e3x.key;
        if (!!bKR1x) {
            q3x = this.eg5l(e3x.id) || null;
            var C3x = e3x.id
              , ckp8h = this.uJ0x
              , j3x = this.gP5U(J3x)
              , r3x = k3x.cW4a(j3x, function(hH6B) {
                return !!hH6B && hH6B[ckp8h] == C3x
            });
            if (r3x >= 0)
                j3x.splice(r3x, 1)
        }
        var d2x = {
            key: J3x,
            data: q3x,
            action: "delete",
            ext: e3x.ext
        };
        this.x3x("onitemdelete", d2x);
        return d2x
    }
    ;
    b2x.SZ8R = function(e3x) {
        e3x = NEJ.X({}, e3x);
        e3x.onload = this.cko8g.g3x(this, e3x);
        this.x3x("doupdateitem", e3x)
    }
    ;
    b2x.cko8g = function(e3x, q3x) {
        var J3x = e3x.key;
        if (!!q3x)
            q3x = this.zC2x(q3x, J3x);
        var d2x = {
            key: J3x,
            data: q3x,
            action: "update",
            ext: e3x.ext
        };
        this.x3x("onitemupdate", d2x);
        return d2x
    }
})();
(function() {
    var c2x = NEJ.P, X3x = NEJ.O, bn3x = NEJ.F, k3x = c2x("nej.u"), M3x = c2x("nej.ut"), b2x;
    if (!!M3x.bdw2x)
        return;
    M3x.bdw2x = NEJ.C();
    b2x = M3x.bdw2x.O3x(M3x.OH7A);
    b2x.bk3x = function(e3x) {
        this.bl3x(e3x);
        this.blq4u({
            doloadlist: this.Ta8S.g3x(this),
            doloaditem: this.bdy2x.g3x(this),
            doadditem: this.bKQ1x.g3x(this),
            dodeleteitem: this.Tb8T.g3x(this),
            doupdateitem: this.Tc8U.g3x(this),
            dopullrefresh: this.bKP1x.g3x(this)
        })
    }
    ;
    b2x.Ta8S = bn3x;
    b2x.bKP1x = bn3x;
    b2x.bdy2x = bn3x;
    b2x.bKQ1x = bn3x;
    b2x.Tb8T = bn3x;
    b2x.Tc8U = bn3x
})();
(function() {
    var c2x = NEJ.P, X3x = NEJ.O, bn3x = NEJ.F, k3x = c2x("nej.u"), h3x = c2x("nej.v"), v3x = c2x("nej.j"), H3x = c2x("nej.ut"), l3x = c2x("nm.x"), p3x = c2x("nm.d"), b2x, K3x;
    p3x.hc6W = NEJ.C();
    b2x = p3x.hc6W.O3x(H3x.bdw2x);
    b2x.ck4o = function() {
        var Oc7V = location.protocol + "//" + location.host;
        var ckl8d = function(bs3x, i3x) {
            var bv3x = {
                conf: {},
                data: {},
                urls: []
            };
            k3x.be3x(bs3x, function(J3x, r3x, j3x) {
                var bc3x = p3x.z3x(J3x);
                if (!bc3x)
                    return;
                var bny5D = bKO1x(bc3x.url, i3x[J3x]);
                bv3x.urls.push(bny5D);
                bv3x.conf[bny5D] = bc3x;
                bv3x.data[bny5D] = JSON.stringify(i3x[J3x] == null ? "" : i3x[J3x])
            });
            return bv3x
        };
        var bKO1x = function(V3x, i3x) {
            return V3x.replace(/\{(.*?)\}/gi, function($1, $2) {
                return i3x[$2] || $1
            })
        };
        var bKN1x = function(bc3x, e3x, d2x) {
            h3x.x3x(window, "requesterror", d2x);
            if (!!d2x.stopped)
                return;
            var Hs4w = bc3x.onerror || e3x.onerror;
            if (k3x.fl5q(Hs4w)) {
                this.x3x(Hs4w, d2x, e3x)
            } else {
                (Hs4w || bn3x).call(this, d2x, e3x)
            }
            var d2x = {
                result: d2x,
                option: e3x
            };
            this.x3x("onerror", d2x);
            if (!d2x.stopped)
                (bc3x.onmessage || bn3x).call(this, d2x.result.code, d2x.result)
        };
        var bKM1x = function(P3x, bc3x, e3x) {
            var m3x = P3x;
            if (k3x.ga5f(bc3x.format)) {
                m3x = bc3x.format.call(this, P3x, e3x)
            }
            return m3x
        };
        var vM0x = function(P3x, bc3x, e3x, sA9r) {
            if (k3x.ga5f(bc3x.beforeload)) {
                bc3x.beforeload.call(this, P3x, e3x, bc3x)
            }
            if (P3x && P3x.code != null && P3x.code != 200) {
                bKN1x.call(this, bc3x, e3x, {
                    key: e3x.key,
                    code: P3x.code,
                    message: P3x.message || "",
                    captchaId: P3x.captchaId,
                    ext: P3x
                });
                return
            }
            var m3x = P3x;
            if (!sA9r) {
                m3x = bKM1x.call(this, P3x, bc3x, e3x)
            } else if (k3x.ga5f(bc3x.format)) {
                var bef3x = [];
                k3x.be3x(sA9r.urls, function(V3x) {
                    bef3x.push(bKM1x.call(this, P3x[V3x], sA9r.conf[V3x], e3x))
                }, this);
                bef3x.push(e3x);
                m3x = bc3x.format.apply(this, bef3x)
            }
            var tx0x = bc3x.onload || e3x.onload
              , bKL1x = bc3x.finaly || e3x.finaly || bn3x;
            if (k3x.fl5q(tx0x)) {
                bKL1x.call(this, this.x3x(tx0x, m3x), e3x)
            } else {
                bKL1x.call(this, (tx0x || bn3x).call(this, m3x), e3x)
            }
        };
        var yX1x = function(bc3x, e3x, bR3x) {
            bKN1x.call(this, bc3x, e3x, {
                key: e3x.key,
                code: bR3x.code || -1,
                message: bR3x.message || ""
            })
        };
        return function(bc3x, e3x) {
            if (k3x.fl5q(bc3x)) {
                bc3x = p3x.z3x(bc3x)
            }
            delete e3x.value;
            (bc3x.filter || bn3x).call(this, e3x, bc3x);
            var P3x = e3x.value;
            if (!!P3x) {
                vM0x.call(this, P3x, bc3x, e3x);
                return
            }
            var V3x, i3x = e3x.data || X3x, xy1x = {
                cookie: !0,
                type: bc3x.rtype || "json",
                method: bc3x.type || "POST",
                onerror: yX1x.g3x(this, bc3x, e3x),
                noescape: bc3x.noescape
            };
            if (k3x.ep5u(bc3x.url)) {
                var sA9r = ckl8d(bc3x.url, i3x);
                V3x = Oc7V + "/api/batch";
                xy1x.data = k3x.db4f(sA9r.data);
                xy1x.onload = vM0x.dW5b(this, bc3x, e3x, sA9r);
                xy1x.headers = {
                    "batch-method": "POST"
                };
                delete sA9r.data
            } else {
                var lb7U = bc3x.url.indexOf(":") < 0 ? Oc7V : "";
                V3x = bKO1x(lb7U + bc3x.url, i3x);
                xy1x.data = k3x.db4f(e3x.data);
                xy1x.onload = vM0x.dW5b(this, bc3x, e3x)
            }
            if (xy1x.method == "GET")
                xy1x.query = xy1x.data;
            return v3x.bq3x(V3x, xy1x)
        }
    }();
    b2x.CU3x = function() {
        var fW5b = /^get|list|pull$/i;
        return function(bKK1x, e3x) {
            var J3x = e3x.key
              , bc3x = p3x.z3x(J3x.split("-")[0] + "-" + bKK1x);
            if (fW5b.test(bKK1x) && J3x.indexOf("post-") < 0)
                bc3x.type = "GET";
            this.ck4o(bc3x, e3x)
        }
    }();
    b2x.cuC1x = function(J3x, j3x) {
        var co4s = j3x.length;
        this.bcq2x({
            key: J3x,
            offset: 0,
            limit: co4s + 1
        }, {
            list: j3x,
            total: co4s
        })
    }
    ;
    b2x.Ta8S = function(e3x) {
        this.CU3x("list", e3x)
    }
    ;
    b2x.bdy2x = function(e3x) {
        this.CU3x("get", e3x)
    }
    ;
    b2x.bKP1x = function(e3x) {
        this.CU3x("pull", e3x)
    }
    ;
    b2x.bKQ1x = function(e3x) {
        this.CU3x("add", e3x)
    }
    ;
    b2x.Tb8T = function(e3x) {
        this.CU3x("del", e3x)
    }
    ;
    b2x.Tc8U = function(e3x) {
        this.CU3x("update", e3x)
    }
    ;
    b2x.cjZ8R = function(q3x) {
        this.zC2x(q3x)
    }
    ;
    H3x.fq5v.B3x({
        element: window,
        event: "requesterror"
    })
})();
(function() {
    var c2x = NEJ.P, X3x = NEJ.O, bn3x = NEJ.F, h3x = c2x("nej.v"), H3x = c2x("nej.ut"), p3x = c2x("nm.d"), beT3x = {}, b2x, K3x;
    var sv9m = function(m3x, e3x) {
        m3x.conf = e3x.conf;
        return m3x
    };
    p3x.eP5U({
        "res-mv-get": {
            type: "GET",
            url: "/api/v1/mv/detail",
            format: function(P3x, e3x) {
                return sv9m({
                    mv: P3x
                }, e3x)
            }
        },
        "res-song-get": {
            type: "GET",
            url: "/api/song/detail",
            format: function(m3x, e3x) {
                if (!!m3x.songs && m3x.songs.length > 0)
                    m3x.song = m3x.songs[0];
                else
                    m3x.song = beT3x;
                delete m3x.songs;
                return sv9m(m3x, e3x)
            },
            filter: function(e3x) {
                e3x.data.ids = "[" + e3x.data.id + "]"
            }
        },
        "res-program-get": {
            type: "GET",
            url: "/api/dj/program/detail",
            format: sv9m
        },
        "res-album-get": {
            type: "GET",
            url: "/api/album/{id}",
            format: sv9m
        },
        "res-playlist-get": {
            type: "GET",
            url: "/api/playlist/detail",
            format: function(m3x, e3x) {
                m3x.playlist = m3x.result;
                delete m3x.result;
                return sv9m(m3x, e3x)
            }
        },
        "res-mv-play": {
            type: "GET",
            url: "/api/song/mv/play",
            format: sv9m
        },
        "res-playlist-play": {
            type: "GET",
            url: "/api/playlist/update/playcount",
            format: sv9m
        },
        "res-program-play": {
            type: "GET",
            url: "/api/dj/program/listen",
            format: sv9m
        },
        "res-djradio-get": {
            type: "GET",
            url: "/api/dj/program/byradio",
            filter: function(e3x) {
                var j3x = e3x.data.id.split("-");
                e3x.data.radioId = j3x[0];
                e3x.data.asc = j3x[1] == 2;
                e3x.data.limit = 1e3;
                delete e3x.data.id
            },
            format: function(P3x, e3x) {
                var cjU8M = {
                    id: e3x.data.radioId,
                    programs: P3x.programs
                };
                return sv9m({
                    djradio: cjU8M
                }, e3x)
            }
        },
        "res-hotSongs-get": {
            type: "GET",
            url: "/api/artist/{id}",
            format: sv9m
        },
        "res-lyric-get": {
            type: "GET",
            url: "/api/song/lyric",
            filter: function(e3x) {
                e3x.data.lv = 0;
                e3x.data.tv = 0
            },
            format: function(m3x, e3x) {
                var vt0x = {
                    lyric: "",
                    nolyric: true
                };
                if (m3x.code == 200 && m3x.lrc && m3x.lrc.lyric) {
                    vt0x.lyric = m3x.lrc.lyric;
                    vt0x.nolyric = false
                } else {
                    vt0x.nolyric = true
                }
                return sv9m({
                    lyric: vt0x
                }, e3x)
            }
        }
    });
    p3x.vs0x = NEJ.C();
    b2x = p3x.vs0x.O3x(p3x.hc6W);
    b2x.cjT8L = function(t3x, cI4M) {
        return this.qt9k(this.Tz9q(t3x, cI4M))
    }
    ;
    b2x.Np6j = function(t3x, cI4M, e3x) {
        e3x = e3x || {};
        var i3x = this.qt9k(this.Tz9q(t3x, cI4M));
        if (i3x && (t3x != 13 && t3x != 19 || e3x.conf && e3x.conf.useCache)) {
            this.x3x("onresourceload", t3x, cI4M, i3x, e3x.conf);
            return
        }
        e3x.data = {
            id: cI4M
        };
        e3x.onload = this.cjS8K.g3x(this, t3x, cI4M);
        e3x.onerror = this.cjR8J.g3x(this, t3x, cI4M);
        this.ck4o("res-" + this.yG1x(t3x) + "-get", e3x)
    }
    ;
    b2x.cjS8K = function(t3x, cI4M, m3x) {
        var i3x = m3x[this.yG1x(t3x)];
        this.on8f(this.Tz9q(t3x, cI4M), i3x);
        this.x3x("onresourceload", t3x, cI4M, i3x, m3x.conf)
    }
    ;
    b2x.cjR8J = function(t3x, cI4M, m3x, e3x) {
        if (m3x.code != 404) {
            this.x3x("onresourceerror", t3x, cI4M, m3x.code);
            return
        }
        this.on8f(this.Tz9q(t3x, cI4M), beT3x);
        this.x3x("onresourceload", t3x, cI4M, beT3x, e3x.conf)
    }
    ;
    b2x.cuD1x = function(t3x, e3x) {
        this.ck4o("res-" + this.yG1x(t3x) + "-play", e3x)
    }
    ;
    b2x.Tz9q = function(t3x, cI4M) {
        return "res-" + this.yG1x(t3x) + "-" + cI4M
    }
    ;
    b2x.yG1x = function(t3x) {
        var bv3x = {
            2: "hotSongs",
            13: "playlist",
            17: "program",
            18: "song",
            19: "album",
            21: "mv",
            41: "lyric",
            70: "djradio"
        };
        return bv3x[t3x]
    }
    ;
    p3x.vs0x.Ha4e = function(t3x, cI4M) {
        if (!this.eM5R)
            this.eM5R = p3x.vs0x.B3x({});
        return this.eM5R.cjT8L(t3x, cI4M)
    }
})();
(function() {
    var c2x = NEJ.P, X3x = NEJ.O, bn3x = NEJ.F, h3x = c2x("nej.v"), k3x = c2x("nej.u"), H3x = c2x("nej.ut"), p3x = c2x("nm.d"), bfU3x = /^[1-9][0-9]*$/, b2x, K3x;
    var LOCAL_LOG_KEY = "local-log";
    p3x.eP5U({
        "bi-log": {
            url: "/api/feedback/weblog"
        },
        "bi-batch-log": {
            url: "/api/feedback/weblog"
        },
        "plus-mv-count": {
            url: "/api/song/mv/play"
        },
        "plus-song-count": {
            url: "/api/song/play"
        },
        "plus-dj-count": {
            type: "GET",
            url: "/api/dj/program/listen"
        },
        "plus-playlist-count": {
            type: "GET",
            url: "/api/playlist/update/playcount"
        }
    });
    p3x.hQ6K = NEJ.C();
    b2x = p3x.hQ6K.O3x(p3x.hc6W);
    b2x.ge5j = function(W3x, bc3x) {
        if (!W3x || !bc3x)
            return;
        if (k3x.fl5q(bc3x)) {
            try {
                bc3x = JSON.parse(bc3x)
            } catch (_e) {
                if (console && console.warn) {
                    console.warn("bilog error: ", a2x)
                }
            }
        }
        if (!k3x.kR7K(bc3x))
            return;
        this.ck4o("bi-log", {
            data: {
                logs: JSON.stringify([{
                    action: W3x,
                    json: bc3x
                }])
            }
        });
        if (typeof GEnvType == "string" && GEnvType == "local") {
            console.log("[BI LOG] action=" + W3x + ", json=" + JSON.stringify(bc3x))
        }
    }
    ;
    b2x.TC9t = function(mV8N) {
        if (!k3x.ep5u(mV8N))
            return;
        this.ck4o("bi-batch-log", {
            data: {
                logs: JSON.stringify(mV8N)
            }
        })
    }
    ;
    b2x.bKI1x = function(bc3x) {
        if (!bc3x || !bc3x.type || !bc3x.rid)
            return;
        var mT8L = bc3x.type;
        if (bfU3x.test(mT8L)) {
            mT8L = this.yG1x(mT8L)
        }
        if (!mT8L)
            return;
        if (mT8L == "playlist")
            mT8L = "list";
        this.ge5j("search", {
            type: mT8L,
            id: bc3x.rid || null,
            keyword: bc3x.keyword || null
        })
    }
    ;
    b2x.Ng6a = function() {
        var cjO8G = /^\/m\/(song|album|playlist)\?id=(\d+)/;
        return function(bc3x) {
            if (!bc3x || !bc3x.type || !bc3x.rid)
                return;
            if (bc3x.play === undefined)
                bc3x.play = true;
            var mT8L = bc3x.type;
            if (bfU3x.test(mT8L)) {
                mT8L = this.yG1x(mT8L)
            }
            if (!mT8L)
                return;
            if (mT8L == "playlist")
                mT8L = "list";
            var P3x = {
                id: bc3x.rid,
                type: mT8L
            };
            if (mT8L == "song" && bc3x.source) {
                P3x.source = this.bKB1x(bc3x.source);
                if (!!bc3x.sourceid)
                    P3x.sourceid = bc3x.sourceid
            }
            this.ge5j(!bc3x.play ? "addto" : "play", P3x);
            if (mT8L == "song" && bc3x.hash && bc3x.hash.match(cjO8G)) {
                this.ge5j(!bc3x.play ? "addto" : "play", {
                    type: RegExp.$1,
                    id: RegExp.$2
                })
            }
        }
    }();
    b2x.bgE3x = function(C3x, bz3x, dH4L, De3x) {
        var P3x = {
            type: "song",
            wifi: 0,
            download: 0
        };
        var cjC8u = {
            1: "ui",
            2: "playend",
            3: "interrupt",
            4: "exception"
        };
        P3x.id = C3x;
        P3x.time = Math.round(bz3x);
        P3x.end = k3x.fl5q(De3x) ? De3x : cjC8u[De3x] || "";
        if (dH4L && dH4L.fid) {
            P3x.source = this.bKB1x(dH4L.fid);
            P3x.sourceId = dH4L.fdata
        }
        this.ge5j("play", P3x)
    }
    ;
    b2x.bKz1x = function(t3x, cI4M) {
        if (!t3x || !cI4M)
            return;
        if (bfU3x.test(t3x))
            t3x = this.yG1x(t3x);
        if (t3x != "playlist" && t3x != "dj")
            return;
        var bc3x = p3x.z3x("plus-" + t3x + "-count");
        if (!bc3x)
            return !1;
        this.ck4o(bc3x, {
            data: {
                id: cI4M
            }
        });
        var Q3x = this.kN7G("play-hist-" + t3x, []);
        if (k3x.cW4a(Q3x, cI4M) < 0) {
            Q3x.push(cI4M);
            return !0
        }
        return !1
    }
    ;
    b2x.yG1x = function(t3x) {
        var bv3x = {
            1: "user",
            2: "artist",
            13: "playlist",
            17: "dj",
            18: "song",
            19: "album",
            21: "mv",
            31: "toplist"
        };
        return bv3x[t3x]
    }
    ;
    b2x.bKB1x = function(GM4Q) {
        var bv3x = {
            1: "user",
            2: "artist",
            13: "list",
            17: "dj",
            18: "song",
            19: "album",
            21: "mv",
            31: "toplist",
            32: "search",
            33: "search",
            34: "event",
            35: "msg"
        };
        return bv3x[GM4Q]
    }
    ;
    b2x.cjv8n = function(gS5X) {
        var mV8N = this.BZ2x(LOCAL_LOG_KEY, []);
        mV8N.unshift(gS5X);
        if (mV8N.length > 200) {
            mV8N.length = 200
        }
        this.vB0x(LOCAL_LOG_KEY, mV8N)
    }
    ;
    b2x.cju8m = function() {
        return this.OT7M(LOCAL_LOG_KEY)
    }
    ;
    b2x.eI5N = function(P3x) {
        this.ge5j("play", P3x)
    }
})();
(function() {
    var c2x = NEJ.P
      , X3x = NEJ.O
      , bn3x = NEJ.F
      , h3x = c2x("nej.v")
      , v3x = c2x("nej.j")
      , H3x = c2x("nej.ut")
      , a2x = c2x("nej.e")
      , k3x = c2x("nej.u")
      , n3x = c2x("nm.l")
      , l3x = c2x("nm.x")
      , p3x = c2x("nm.d");
    if (!p3x.vs0x)
        return;
    var Q3x = p3x.vs0x.B3x({
        onresourceload: cjq8i
    });
    var xh1x = p3x.hQ6K.fY5d();
    function cjq8i(t3x, cI4M, i3x, bc3x) {
        var j3x = [];
        switch (parseInt(t3x)) {
        case 2:
            j3x = i3x;
            break;
        case 13:
            j3x = i3x.tracks;
            break;
        case 18:
            j3x.push(i3x);
            break;
        case 19:
            j3x = i3x.songs;
            break;
        case 21:
            if (i3x.mp && i3x.mp.fee && i3x.mp.pl <= 0) {
                l3x.bhD3x(i3x.data.id, i3x.mp.fee);
                return
            }
            break
        }
        if (l3x.GE4I(j3x, true, null, t3x == 19 ? {
            source: "album",
            sourceid: cI4M
        } : null) == 0) {
            return
        }
        l3x.eU5Z({
            clazz: "m-layer-w2",
            bubble: !1,
            message: bc3x.message
        })
    }
    function cjo8g(d2x, qc9T, xc1x, eA5F) {
        eA5F = eA5F || {};
        if (d2x.action == "ok") {
            if (xc1x) {
                location.dispatch2("/payfee?songId=" + xc1x)
            } else {
                location.dispatch2("/payfee?fee=" + qc9T || 1)
            }
            xh1x.ge5j("click", {
                type: "tobuyvip",
                name: "box",
                source: eA5F.source || "song",
                sourceid: eA5F.sourceid || xc1x || 0
            })
        } else if (d2x.action == "song") {
            location.dispatch2("/payfee?singleSong=true&songId=" + xc1x);
            xh1x.ge5j("click", {
                type: "tobuyone",
                name: "box",
                source: eA5F.source || "song",
                sourceid: eA5F.sourceid || xc1x || 0
            })
        }
    }
    function Mv5A(bF3x) {
        l3x.eU5Z({
            clazz: "m-layer-w2",
            bubble: !1,
            message: bF3x,
            btntxt: "知道了"
        })
    }
    function Mu5z(bF3x, P3x) {
        Mv5A((P3x || X3x).toast || bF3x)
    }
    l3x.hS6M = function(bF3x, C3x, t3x, cjm8e, bf3x) {
        bF3x = bF3x || "由于版权保护，您所在的地区暂时无法使用。";
        if (cjm8e && bf3x && bf3x.privilege && bf3x.privilege.toast) {
            v3x.bq3x("/api/song/toast", {
                query: {
                    id: bf3x.id
                },
                type: "json",
                onload: Mu5z.g3x(this, bF3x),
                onerror: Mu5z.g3x(this, bF3x)
            })
        } else if (C3x && t3x) {
            Q3x.Np6j(t3x, C3x, {
                conf: {
                    message: bF3x,
                    useCache: t3x != 18
                }
            })
        } else {
            Mv5A(bF3x)
        }
    }
    ;
    l3x.to0x = function(qc9T, xc1x, t3x, eA5F, mr7k) {
        var bN3x, oU8M = "m-popup-info", bil4p = "单首购买", bio4s = "马上去开通", cA4E = "唱片公司要求，当前歌曲须付费使用。", bKv1x = true;
        try {
            bN3x = top.api.feeMessage || {}
        } catch (e) {
            bN3x = {}
        }
        if (qc9T == 1 || qc9T == 8 || qc9T == 16) {
            if (t3x == "song") {
                oU8M = "m-popup-song-buy";
                cA4E = bN3x["vip2"] || cA4E;
                bio4s = bN3x["vip2button"] || "包月购买";
                bil4p = bN3x["vip2link"] || bil4p;
                if (mr7k && mr7k.flag !== undefined) {
                    var bs3x = mr7k.flag.toString(2).split("");
                    if (parseInt(bs3x.pop(), 10) == 1) {
                        bKv1x = false
                    }
                }
            } else {
                cA4E = bN3x["vip"] || cA4E
            }
        } else if (qc9T == 4) {
            cA4E = bN3x["album"] || cA4E;
            bio4s = "立即订购"
        } else {
            cA4E = bN3x["unknow"] || cA4E
        }
        l3x.jr6l({
            clazz: "m-layer-w5",
            html: a2x.bP3x(oU8M, {
                songTxt: bil4p,
                tip: cA4E,
                oktext: bio4s,
                cctext: "以后再说",
                showSongText: bKv1x
            }),
            onaction: cjo8g.dW5b(null, qc9T, xc1x, eA5F)
        })
    }
    ;
    l3x.bKu1x = function(hh6b, hd6X) {
        l3x.gQ5V({
            title: "提示",
            message: "唱片公司要求，该歌曲须下载后播放",
            btnok: "下载",
            btncc: "取消",
            okstyle: "u-btn2-w1",
            ccstyle: "u-btn2-w1",
            action: function(t3x) {
                if (t3x == "ok") {
                    l3x.So8g({
                        id: hh6b,
                        type: hd6X
                    })
                }
            }
        })
    }
    ;
    l3x.bhD3x = function(of8X, qc9T) {
        var bN3x, cA4E = "唱片公司要求，当前歌曲须付费使用。";
        try {
            bN3x = top.api.feeMessage || {}
        } catch (e) {
            bN3x = {}
        }
        if (qc9T == 1 || qc9T == 8) {
            cA4E = bN3x["vip"] || cA4E
        } else if (qc9T == 4) {
            cA4E = bN3x["album"] || cA4E
        } else {
            cA4E = bN3x["unknow"] || cA4E
        }
        return l3x.jr6l({
            clazz: "m-layer-w5",
            html: a2x.bP3x("m-popup-info", {
                tip: cA4E,
                oktext: "马上去开通",
                cctext: "以后再说"
            }),
            onaction: function(d2x) {
                if (d2x.action == "ok") {
                    location.dispatch2("/payfee?mvId=" + of8X);
                    xh1x.ge5j("click", {
                        type: "tobuyone",
                        name: "box",
                        source: "mv",
                        sourceid: of8X || 0
                    })
                }
            }
        })
    }
    ;
    l3x.GE4I = function() {
        function compareFee(cji8a, cjg8Y) {
            var bv3x = {
                1: 99,
                8: 99,
                4: 88,
                16: 99
            };
            return (bv3x[cji8a] || 0) - (bv3x[cjg8Y] || 0)
        }
        return function(j3x, cA4E, tS0x, eA5F) {
            tS0x = tS0x || {};
            var xk1x = []
              , Gy4C = {}
              , bKt1x = 0
              , bKs1x = 0
              , Gw4A = null;
            if (!j3x || !j3x.length)
                return xk1x;
            k3x.be3x(j3x, function(bf3x) {
                var eX5c = l3x.oi8a(bf3x);
                if (eX5c == 0) {
                    xk1x.push(bf3x)
                } else if (eX5c == 10) {
                    if (bf3x.privilege) {
                        bf3x.fee = bf3x.privilege.fee
                    }
                    if (compareFee(bf3x.fee, Gy4C.fee) > 0) {
                        Gy4C = bf3x
                    }
                } else if (eX5c == 11) {
                    ++bKt1x;
                    if (!tS0x.play)
                        xk1x.push(bf3x)
                } else if (eX5c == 1e3) {
                    ++bKs1x;
                    if (!tS0x.download)
                        xk1x.push(bf3x)
                } else if (eX5c == 100) {
                    Gw4A = bf3x
                }
            });
            if (xk1x.length == 0 && cA4E) {
                if (bKt1x == j3x.length) {
                    var se9V = j3x[0].privilege || {};
                    if (se9V.payed) {
                        l3x.hS6M("唱片公司要求，该歌曲须下载后播放")
                    } else {
                        l3x.to0x(se9V.fee, null, null, eA5F)
                    }
                } else if (bKs1x == j3x.length) {
                    l3x.hS6M("因版权方要求，该歌曲不支持下载")
                } else if (Gy4C.id) {
                    l3x.to0x(Gy4C.fee, Gy4C.id, null, eA5F, Gy4C.privilege)
                } else {
                    if (Gw4A && j3x.length == 1 && Gw4A.privilege && Gw4A.privilege.st < 0 && Gw4A.privilege.toast) {
                        l3x.hS6M(null, null, null, true, Gw4A)
                    } else {
                        l3x.hS6M()
                    }
                }
            }
            return xk1x
        }
    }();
    l3x.oi8a = function(bf3x) {
        if (!bf3x)
            return 0;
        var eX5c = bf3x.privilege;
        if (bf3x.program)
            return 0;
        if (window.GAbroad)
            return 100;
        if (eX5c) {
            if (eX5c.st != null && eX5c.st < 0) {
                return 100
            }
            if (eX5c.fee > 0 && eX5c.fee != 8 && eX5c.payed == 0 && eX5c.pl <= 0)
                return 10;
            if (eX5c.fee == 16)
                return 11;
            if ((eX5c.fee == 0 || eX5c.payed) && eX5c.pl > 0 && eX5c.dl == 0)
                return 1e3;
            if (eX5c.pl == 0 && eX5c.dl == 0)
                return 100;
            return 0
        } else {
            var dY5d = bf3x.status != null ? bf3x.status : bf3x.st != null ? bf3x.st : 0;
            if (bf3x.status >= 0)
                return 0;
            if (bf3x.fee > 0)
                return 10;
            return 100
        }
    }
})();
(function() {
    var c2x = NEJ.P, X3x = NEJ.O, h3x = c2x("nej.v"), a2x = c2x("nej.e"), M3x = c2x("nej.ui"), b2x;
    if (!!M3x.Uj9a)
        return;
    var hW6Q = a2x.rL9C(".#<uispace>{position:absolute;background:#fff;}");
    M3x.Uj9a = NEJ.C();
    b2x = M3x.Uj9a.O3x(M3x.Qe7X);
    b2x.bk3x = function(e3x) {
        this.bl3x(e3x);
        this.bT3x([[document, "click", this.sd9U.g3x(this)]]);
        this.cjc8U = !!e3x.nostop;
        this.bKr1x = {
            top: e3x.top,
            left: e3x.left
        }
    }
    ;
    b2x.bD3x = function() {
        delete this.wS1x;
        delete this.bjL4P;
        delete this.pq8i;
        delete this.bKq1x;
        delete this.Uk9b;
        delete this.bKr1x;
        this.bH3x()
    }
    ;
    b2x.bZ4d = function() {
        this.lg7Z = hW6Q
    }
    ;
    b2x.bQ3x = function() {
        this.cb4f();
        this.Az2x = this.o3x;
        h3x.s3x(this.o3x, "click", this.ciZ8R.g3x(this))
    }
    ;
    b2x.sd9U = function(d2x) {
        if (d2x.button != 2)
            this.bp3x()
    }
    ;
    b2x.ciZ8R = function(d2x) {
        if (this.cjc8U)
            return;
        h3x.rx9o(d2x);
        var E3x = h3x.U3x(d2x);
        if (E3x.tagName == "A")
            h3x.cg4k(d2x)
    }
    ;
    b2x.ciW8O = function() {
        var cO4S = /\s+/i;
        return function(nb8T) {
            nb8T = (nb8T || "").trim().toLowerCase().split(cO4S);
            nb8T[0] = nb8T[0] || "bottom";
            nb8T[1] = nb8T[1] || "left";
            this.pq8i = nb8T
        }
    }();
    b2x.ciV8N = function(nb8T) {
        var m3x = {}
          , mD7w = this.bjL4P
          , cuE1x = a2x.oQ8I()
          , dn4r = this.o3x.offsetWidth
          , cp4t = this.o3x.offsetHeight;
        switch (nb8T[0]) {
        case "top":
            m3x.top = mD7w.top - cp4t;
            m3x.left = nb8T[1] == "right" ? mD7w.left + mD7w.width - dn4r : mD7w.left;
            break;
        case "left":
            m3x.left = mD7w.left - dn4r;
            m3x.top = nb8T[1] == "bottom" ? mD7w.top + mD7w.height - cp4t : mD7w.top;
            break;
        case "right":
            m3x.left = mD7w.left + mD7w.width;
            m3x.top = nb8T[1] == "bottom" ? mD7w.top + mD7w.height - cp4t : mD7w.top;
            break;
        default:
            m3x.top = mD7w.top + mD7w.height;
            m3x.left = nb8T[1] == "right" ? mD7w.left + mD7w.width - dn4r : mD7w.left;
            break
        }
        return m3x
    }
    ;
    b2x.IU4Y = function() {
        if (!this.bKq1x) {
            this.fZ5e(this.bKr1x);
            return
        }
        if (!!this.Uk9b) {
            this.fZ5e(this.wS1x);
            return
        }
        if (!!this.bjL4P)
            this.fZ5e(this.ciV8N(this.pq8i))
    }
    ;
    b2x.ciN8F = function(E3x, dg4k, d2x) {
        dg4k = dg4k || X3x;
        var bKb1x = a2x.oQ8I()
          , cN4R = h3x.kI7B(d2x) + (dg4k.left || 0)
          , gN5S = h3x.nI8A(d2x) + (dg4k.top || 0)
          , dn4r = E3x.offsetWidth + (dg4k.right || 0)
          , cp4t = E3x.offsetHeight + (dg4k.bottom || 0)
          , Gn3x = bKb1x.scrollWidth
          , bkv4z = bKb1x.scrollHeight
          , bkw4A = cN4R + dn4r
          , bkz4D = gN5S + cp4t;
        switch (this.pq8i[0]) {
        case "top":
            gN5S = bkz4D > bkv4z ? gN5S - cp4t : gN5S;
            if (this.pq8i[1] == "right") {
                cN4R = cN4R - dn4r < 0 ? 0 : cN4R - dn4r
            } else {
                cN4R = bkw4A > Gn3x ? Gn3x - dn4r : cN4R
            }
            break;
        case "left":
            cN4R = bkw4A > Gn3x ? Gn3x - dn4r : cN4R;
            if (this.pq8i[1] == "top") {
                gN5S = bkz4D > bkv4z ? gN5S - cp4t : gN5S
            } else {
                gN5S = gN5S - cp4t < 0 ? gN5S : gN5S - cp4t
            }
            break;
        case "right":
            cN4R = cN4R - dn4r < 0 ? 0 : cN4R - dn4r;
            if (this.pq8i[1] == "top") {
                gN5S = bkz4D > bkv4z ? gN5S - cp4t : gN5S
            } else {
                gN5S = gN5S - cp4t < 0 ? gN5S : gN5S - cp4t
            }
            break;
        default:
            gN5S = gN5S - cp4t < 0 ? gN5S : gN5S - cp4t;
            if (this.pq8i[1] == "left") {
                cN4R = bkw4A > Gn3x ? Gn3x - dn4r : cN4R
            } else {
                cN4R = cN4R - dn4r < 0 ? 0 : cN4R - dn4r
            }
            break
        }
        return {
            top: gN5S,
            left: cN4R
        }
    }
    ;
    b2x.bkA4E = function() {
        var cio8g = function(E3x, dg4k) {
            E3x = a2x.z3x(E3x);
            if (!E3x)
                return;
            dg4k = dg4k || X3x;
            var bj3x = a2x.hR6L(E3x);
            return {
                top: bj3x.y - (dg4k.top || 0),
                left: bj3x.x - (dg4k.left || 0),
                width: E3x.offsetWidth + (dg4k.right || 0),
                height: E3x.offsetHeight + (dg4k.bottom || 0)
            }
        };
        return function(e3x) {
            e3x = e3x || X3x;
            this.Uk9b = e3x.event;
            this.ciW8O(e3x.align);
            if (!!this.Uk9b)
                this.wS1x = this.ciN8F(e3x.target, e3x.delta, this.Uk9b);
            this.bjL4P = cio8g(e3x.target, e3x.delta);
            this.bKq1x = !!e3x.fitable;
            this.N3x();
            return this
        }
    }()
})();
(function() {
    var c2x = NEJ.P, X3x = NEJ.O, a2x = c2x("nej.e"), h3x = c2x("nej.v"), k3x = c2x("nej.u"), M3x = c2x("nej.ui"), b2x, K3x;
    if (!!M3x.AF2x)
        return;
    M3x.AF2x = NEJ.C();
    b2x = M3x.AF2x.O3x(M3x.RJ8B);
    K3x = M3x.AF2x.cf4j;
    M3x.AF2x.cuK1x = function() {
        var cii8a = function(d2x, C3x, fi5n, jx6r, LN5S) {
            var cq4u, J3x = C3x + "-i", Q3x = fi5n.wG1x, bJW1x = !!jx6r.noclear, bJV1x = !!jx6r.toggled;
            if (k3x.ga5f(jx6r.onbeforeclick)) {
                var Uv9m = jx6r.noclear
                  , chT7M = jx6r.toggled;
                try {
                    jx6r.onbeforeclick(jx6r)
                } catch (e) {}
                bJW1x = !!jx6r.noclear;
                bJV1x = !!jx6r.toggled;
                jx6r.toggled = chT7M;
                jx6r.noclear = Uv9m
            }
            var EM3x = Q3x[J3x];
            if (bJV1x && !!EM3x) {
                EM3x.bp3x();
                return
            }
            h3x.bh3x(d2x);
            if (!bJW1x) {
                h3x.x3x(document, "click");
                cq4u = fi5n.B3x(jx6r)
            } else {
                cq4u = fi5n.ctg0x(jx6r, !0)
            }
            Q3x[J3x] = cq4u;
            cq4u.ui0x("onbeforerecycle", function() {
                delete Q3x[J3x]
            });
            cq4u.bkA4E(LN5S)
        };
        return function(f3x, e3x) {
            f3x = a2x.z3x(f3x);
            if (!f3x)
                return this;
            if (!this.wG1x)
                this.wG1x = {};
            var C3x = a2x.kv7o(f3x);
            if (!!this.wG1x[C3x])
                return this;
            e3x = NEJ.X({}, e3x);
            var LN5S = NEJ.EX({
                align: "",
                delta: null,
                fitable: !1
            }, e3x);
            LN5S.target = C3x;
            e3x.destroyable = !0;
            if (!e3x.fixed) {
                LN5S.fitable = !0;
                e3x.parent = document.body
            }
            this.wG1x[C3x] = [C3x, e3x.event || "click", cii8a.dW5b(null, C3x, this, e3x, LN5S)];
            h3x.s3x.apply(h3x, this.wG1x[C3x]);
            return this
        }
    }();
    M3x.AF2x.cuL1x = function(f3x) {
        if (!this.wG1x)
            return this;
        var C3x = a2x.kv7o(f3x)
          , d2x = this.wG1x[C3x];
        if (!d2x)
            return this;
        delete this.wG1x[C3x];
        h3x.ma7T.apply(h3x, d2x);
        var cq4u = this.wG1x[C3x + "-i"];
        if (!!cq4u)
            cq4u.bp3x();
        return this
    }
    ;
    b2x.bnv5A = function() {
        return M3x.Uj9a.B3x(this.bS3x)
    }
    ;
    b2x.Rc8U = function() {
        K3x.Rc8U.apply(this, arguments);
        this.bS3x.top = null;
        this.bS3x.left = null;
        this.bS3x.nostop = !1
    }
    ;
    b2x.bkA4E = function(e3x) {
        if (!!this.nX8P)
            this.nX8P.bkA4E(e3x);
        return this
    }
})();
(function() {
    var c2x = NEJ.P, bd3x = c2x("nej.ui"), n3x = c2x("nm.l"), b2x, K3x;
    n3x.blH4L = NEJ.C();
    b2x = n3x.blH4L.O3x(bd3x.AF2x);
    b2x.bk3x = function(e3x) {
        e3x.nohack = true;
        this.bl3x(e3x)
    }
})();
(function() {
    var c2x = NEJ.P, a2x = c2x("nej.e"), n3x = c2x("nm.l"), b2x, K3x;
    n3x.Z3x = NEJ.C();
    b2x = n3x.Z3x.O3x(n3x.blH4L);
    K3x = n3x.Z3x.cf4j;
    b2x.bk3x = function(e3x) {
        this.bl3x(e3x);
        this.el5q = e3x.type || 1
    }
    ;
    b2x.bQ3x = function() {
        this.cb4f();
        this.o3x = a2x.nd8V(this.chQ7J());
        var j3x = a2x.cQ4U(this.o3x);
        this.pt8l = j3x[0];
        this.ci4m = j3x[1]
    }
    ;
    b2x.chQ7J = function() {
        return '<div class="sysmsg"><i class="u-icn u-icn-31"></i><span></span></div>'
    }
    ;
    b2x.IU4Y = function() {
        var A3x = {}
          , cd4h = this.o3x.style
          , iL6F = a2x.oQ8I()
          , nk8c = {
            left: iL6F.scrollLeft,
            top: iL6F.scrollTop
        }
          , dg4k = {
            left: iL6F.clientWidth - this.o3x.offsetWidth,
            top: iL6F.clientHeight - this.o3x.offsetHeight
        };
        A3x.top = Math.max(0, nk8c.top + dg4k.top / 2);
        A3x.left = Math.max(0, nk8c.left + dg4k.left / 2);
        this.nX8P.fZ5e(A3x)
    }
    ;
    b2x.N3x = function(e3x) {
        K3x.N3x.call(this);
        this.IU4Y();
        this.el5q == 1 ? a2x.eu5z(this.pt8l, "u-icn-32", "u-icn-31") : a2x.eu5z(this.pt8l, "u-icn-31", "u-icn-32");
        this.ci4m.innerHTML = e3x.tip || ""
    }
    ;
    window.g_showTipCard = n3x.Z3x.N3x = function() {
        var eY5d;
        return function(e3x) {
            clearTimeout(eY5d);
            if (e3x.parent === undefined)
                e3x.parent = document.body;
            if (e3x.autoclose === undefined)
                e3x.autoclose = true;
            e3x.clazz = "m-sysmsg";
            !!this.eM5R && this.eM5R.S3x();
            this.eM5R = this.B3x(e3x);
            this.eM5R.N3x(e3x);
            if (e3x.autoclose)
                eY5d = setTimeout(this.bp3x.g3x(this), 2e3)
        }
        .g3x(n3x.Z3x)
    }();
    n3x.Z3x.bp3x = function() {
        !!this.eM5R && this.eM5R.bp3x()
    }
})();
(function() {
    var c2x = NEJ.P
      , v3x = c2x("nej.j")
      , k3x = c2x("nej.u");
    if (window["GRef"] && window["GRef"] == "mail") {
        v3x.bq3x = v3x.bq3x.ed5i(function(d2x) {
            e3x = d2x.args[1];
            e3x.query = e3x.query || {};
            if (k3x.fl5q(e3x.query))
                e3x.query = k3x.hj6d(e3x.query);
            e3x.query.ref = "mail"
        })
    }
})();
(function() {
    var c2x = NEJ.P, bn3x = NEJ.F, fc5h = NEJ.R, H3x = c2x("nej.ut"), k3x = c2x("nej.u"), h3x = c2x("nej.v"), v3x = c2x("nej.j"), p3x = c2x("nm.d"), n3x = c2x("nm.l"), J3x = "playlist-tracks_", b2x;
    p3x.eP5U({
        "playlist_my-list": {
            url: "/api/user/playlist",
            type: "GET",
            format: function(P3x, e3x) {
                this.chP7I(P3x.playlist);
                return {
                    total: 0,
                    list: fc5h
                }
            },
            onerror: function() {
                this.x3x("onlisterror")
            }
        },
        "playlist_new-add": {
            url: "/api/playlist/create",
            format: function(P3x, e3x) {
                var iP6J = P3x.playlist;
                iP6J.creator = GUser;
                iP6J.isHost = !0;
                iP6J.typeFlag = "playlist";
                return iP6J
            },
            finaly: function(d2x, e3x) {
                h3x.x3x(p3x.ho6i, "listchange", d2x)
            },
            onmessage: function() {
                var lx7q = {
                    507: "歌单数量超过上限！",
                    405: "你操作太快了，请休息一会再试！",
                    406: "你操作太快了，请休息一会再试！"
                };
                return function(cc4g) {
                    n3x.Z3x.N3x({
                        tip: lx7q[cc4g] || "创建失败",
                        type: 2
                    })
                }
            }()
        },
        "playlist_new-del": {
            url: "/api/playlist/delete",
            type: "GET",
            filter: function(e3x) {
                e3x.id = e3x.data.pid
            },
            finaly: function(d2x, e3x) {
                h3x.x3x(p3x.ho6i, "listchange", d2x)
            },
            onmessage: function() {
                var lx7q = {
                    404: "歌单不存在！",
                    405: "你操作太快了，请休息一会再试！",
                    406: "你操作太快了，请休息一会再试！"
                };
                return function(cc4g) {
                    n3x.Z3x.N3x({
                        tip: lx7q[cc4g] || "删除失败",
                        type: 2
                    })
                }
            }()
        },
        "playlist_fav-add": {
            type: "GET",
            url: "/api/playlist/subscribe",
            filter: function(e3x) {
                var eA5F = e3x.ext || {};
                e3x.ext = NEJ.X(eA5F, e3x.data);
                e3x.data = {
                    id: e3x.ext.id
                }
            },
            format: function(P3x, e3x) {
                n3x.Z3x.N3x({
                    tip: "收藏成功" + (P3x.point > 0 ? ' 获得<em class="s-fc6">' + P3x.point + "积分</em>" : "")
                });
                var q3x = e3x.ext;
                q3x.subscribedCount++;
                return q3x
            },
            finaly: function(d2x, e3x) {
                h3x.x3x(p3x.chN7G, "listchange", d2x);
                h3x.x3x(p3x.chN7G, "itemchange", {
                    attr: "subscribedCount",
                    data: d2x.data
                })
            },
            onmessage: function() {
                var lx7q = {
                    404: "歌单不存在！",
                    501: "歌单已经收藏！",
                    506: "歌单收藏数量超过上限！"
                };
                return function(cc4g) {
                    n3x.Z3x.N3x({
                        type: 2,
                        tip: lx7q[cc4g] || "收藏失败，请稍后再试！"
                    })
                }
            }()
        },
        "playlist_fav-del": {
            url: "/api/playlist/unsubscribe",
            type: "GET",
            filter: function(e3x) {
                e3x.id = e3x.data.id = e3x.data.pid
            },
            finaly: function(d2x, e3x) {
                h3x.x3x(p3x.ho6i, "listchange", d2x)
            },
            onmessage: function() {
                var lx7q = {
                    404: "歌单不存在！",
                    405: "你操作太快了，请休息一会再试！",
                    406: "你操作太快了，请休息一会再试！"
                };
                return function(cc4g) {
                    n3x.Z3x.N3x({
                        tip: lx7q[cc4g],
                        type: 2
                    })
                }
            }()
        },
        "playlist_new-update": {
            url: ["playlist-update-name", "playlist-update-tag", "playlist-update-desc"],
            filter: function(e3x) {
                var i3x = e3x.data
                  , Uw9n = {};
                Uw9n["playlist-update-name"] = {
                    id: i3x.id,
                    name: i3x.name
                };
                Uw9n["playlist-update-tag"] = {
                    id: i3x.id,
                    tags: i3x.tags.join(";")
                };
                Uw9n["playlist-update-desc"] = {
                    id: i3x.id,
                    desc: i3x.description
                };
                e3x.data = Uw9n;
                e3x.ext = i3x
            },
            format: function(T3x, po8g, LD5I, e3x) {
                if (T3x.code == 200 && po8g.code == 200 && LD5I.code == 200) {
                    e3x.ext.allSuccess = true;
                    n3x.Z3x.N3x({
                        tip: "保存成功"
                    })
                } else if (T3x.code == 407 || po8g.code == 407 || LD5I.code == 407) {
                    e3x.ext.allSuccess = false;
                    n3x.Z3x.N3x({
                        type: 2,
                        tip: "输入内容包含关键字"
                    })
                } else {
                    e3x.ext.allSuccess = false;
                    n3x.Z3x.N3x({
                        type: 2,
                        tip: "保存失败"
                    })
                }
                return this.eg5l(e3x.ext.id)
            },
            finaly: function(d2x, e3x) {
                h3x.x3x(p3x.ho6i, "listchange", d2x)
            },
            onmessage: function(cc4g) {
                n3x.Z3x.N3x({
                    type: 2,
                    tip: "保存失败"
                })
            }
        },
        "playlist-update-name": {
            url: "/api/playlist/update/name",
            format: function(P3x, e3x) {
                var q3x = this.eg5l(e3x.ext.id);
                if (P3x.code == 200)
                    q3x.name = e3x.ext.name;
                return P3x
            }
        },
        "playlist-update-tag": {
            url: "/api/playlist/tags/update",
            format: function(P3x, e3x) {
                var q3x = this.eg5l(e3x.ext.id);
                if (P3x.code == 200)
                    q3x.tags = e3x.ext.tags;
                return P3x
            }
        },
        "playlist-update-desc": {
            url: "/api/playlist/desc/update",
            format: function(P3x, e3x) {
                var q3x = this.eg5l(e3x.ext.id);
                if (P3x.code == 200)
                    q3x.description = e3x.ext.description;
                return P3x
            }
        },
        "playlist-update-cover": {
            url: "/api/playlist/cover/update",
            filter: function(e3x) {
                e3x.url = e3x.data.url;
                delete e3x.data.url
            },
            format: function(P3x, e3x) {
                n3x.Z3x.N3x({
                    tip: "保存成功"
                });
                var q3x = this.eg5l(e3x.data.id);
                q3x.coverImgUrl = e3x.url;
                e3x.ext = q3x;
                return q3x
            },
            onmessage: function(cc4g) {
                n3x.Z3x.N3x({
                    type: 2,
                    tip: "保存失败"
                })
            },
            finaly: function(d2x, e3x) {
                h3x.x3x(p3x.ho6i, "itemchange", {
                    attr: "coverImgUrl",
                    data: e3x.ext
                })
            }
        },
        "playlist-upcount": {
            url: "/api/playlist/update/playcount",
            type: "GET",
            format: function(P3x, e3x) {
                var iP6J = this.eg5l(e3x.data.id);
                if (!iP6J)
                    return;
                iP6J.playCount++;
                h3x.x3x(p3x.ho6i, "itemchange", {
                    attr: "playcount",
                    data: iP6J
                })
            }
        }
    });
    p3x.ho6i = NEJ.C();
    b2x = p3x.ho6i.O3x(p3x.hc6W);
    b2x.cl4p = function() {
        this.cs4w()
    }
    ;
    b2x.bJR0x = function() {
        var cU4Y = GUser.userId;
        this.nv8n({
            limit: 1001,
            key: "playlist_my-" + cU4Y,
            data: {
                offset: 0,
                limit: 1001,
                uid: cU4Y
            }
        })
    }
    ;
    b2x.chP7I = function(j3x) {
        var cU4Y = GUser.userId
          , jh6b = []
          , bJP0x = [];
        k3x.be3x(j3x, function(q3x) {
            q3x.typeFlag = "playlist";
            if (q3x.creator && q3x.creator.userId == cU4Y) {
                if (q3x.specialType == 5)
                    q3x.name = "我喜欢的音乐";
                q3x.isHost = !0;
                jh6b.push(q3x)
            } else {
                bJP0x.push(q3x)
            }
        });
        this.sq9h("playlist_new-" + cU4Y, jh6b);
        this.sq9h("playlist_fav-" + cU4Y, bJP0x)
    }
    ;
    b2x.chE7x = function(i3x) {
        this.ck4o("playlist-update-cover", {
            data: i3x
        })
    }
    ;
    b2x.cuN1x = function() {
        var Lz5E = this.chu7n.z3x("host-plist");
        if (Lz5E.length == 0) {
            return
        }
        if (Lz5E.length == 1 && Lz5E[0].trackCount <= 0) {
            return
        }
        for (var i = 0, len = Lz5E.length; i < len; i++) {
            var q3x = Lz5E[i];
            if (q3x.trackCount > 0)
                return q3x.id
        }
        return this.chu7n.z3x("host-plist")[0].id
    }
    ;
    b2x.chj7c = function(C3x) {
        if (GUser && GUser.userId > 0) {
            this.ck4o("playlist-upcount", {
                data: {
                    id: C3x
                }
            })
        }
    }
    ;
    b2x.DQ3x = function() {
        if (GUser && GUser.userId > 0) {
            return !0
        } else {
            top.login();
            return !1
        }
    }
    ;
    b2x.cuP1x = function() {
        return GUser.userId
    }
    ;
    b2x.bnq5v = function(q3x) {
        if (q3x.userId == GUser.userId && q3x.specialType == 5)
            q3x.name = "我喜欢的音乐";
        h3x.x3x(this.constructor, "itemchange", {
            data: this.zC2x(q3x)
        });
        return q3x
    }
    ;
    H3x.fq5v.B3x({
        element: p3x.ho6i,
        event: ["listchange", "playcountchange", "itemchange"]
    })
})();
(function() {
    var c2x = NEJ.P, fc5h = NEJ.R, bn3x = NEJ.F, X3x = NEJ.O, H3x = c2x("nej.ut"), h3x = c2x("nej.v"), k3x = c2x("nej.u"), l3x = c2x("nm.x"), p3x = c2x("nm.d"), n3x = c2x("nm.l"), b2x, K3x;
    p3x.eP5U({
        "program-get": {
            url: "/api/dj/program/detail",
            format: function(P3x) {
                return P3x.program
            }
        },
        "program_djradio-list": {
            type: "GET",
            url: "/api/dj/program/byradio",
            filter: function(e3x) {
                e3x.data.limit = 1e3;
                delete e3x.data.id
            },
            format: function(P3x, e3x) {
                var bJI0x = []
                  , yD1x = P3x.programs;
                if (yD1x) {
                    for (var i = 0, l = yD1x.length; i < l; i++) {
                        if (yD1x[i].programFeeType < 10 || yD1x[i].buyed) {
                            bJI0x.push(yD1x[i])
                        }
                    }
                }
                return bJI0x
            }
        },
        "program_fav-list": {
            url: "/api/djprogram/subscribed/paged",
            format: function(P3x, e3x) {
                return P3x.programs
            },
            onerror: "onlisterror"
        },
        "program_fav-add": {
            url: "/api/djprogram/subscribe",
            filter: function(e3x) {
                e3x.ext = e3x.data;
                e3x.data = {
                    id: e3x.ext.id
                };
                e3x.id = e3x.data.id
            },
            format: function(P3x, e3x) {
                n3x.Z3x.N3x({
                    tip: "收藏成功"
                });
                var q3x = e3x.ext;
                q3x.subscribedCount++;
                q3x.subscribed = !0;
                return q3x
            },
            finaly: function(d2x, e3x) {
                h3x.x3x(p3x.pi8a, "listchange", d2x)
            },
            onmessage: function() {
                var lx7q = {
                    404: "节目不存在！",
                    501: "节目已收藏！"
                };
                return function(cc4g) {
                    n3x.Z3x.N3x({
                        type: 2,
                        tip: lx7q[cc4g] || "收藏失败！"
                    })
                }
            }()
        },
        "program_fav-del": {
            url: "/api/djprogram/unsubscribe",
            finaly: function(d2x, e3x) {
                h3x.x3x(p3x.pi8a, "listchange", d2x)
            },
            onmessage: function() {
                var lx7q = {
                    404: "节目不存在！",
                    502: "没有收藏此节目！"
                };
                return function(cc4g) {
                    l3x.bnD5I({
                        txt: lx7q[cc4g] || "取消收藏失败！"
                    })
                }
            }()
        },
        "program-update-count": {
            type: "GET",
            url: "/api/dj/program/listen",
            filter: function(e3x) {
                var q3x = this.eg5l(e3x.data.id) || X3x;
                e3x.ext = (q3x.listenerCount || 0) + 1
            },
            format: function(P3x, e3x) {
                var q3x = this.eg5l(e3x.data.id);
                if (!!q3x) {
                    q3x.listenerCount = Math.max(e3x.ext, q3x.listenerCount || 0)
                }
            },
            finaly: function(d2x, e3x) {
                h3x.x3x(p3x.pi8a, "itemchange", {
                    attr: "playCount",
                    data: this.eg5l(e3x.data.id)
                })
            }
        },
        "program-like": {
            url: "/api/resource/like",
            filter: function(e3x) {
                e3x.data = {
                    threadId: "A_DJ_1_" + e3x.id
                }
            },
            format: function(P3x, e3x) {
                var q3x = e3x.ext.data || this.eg5l(e3x.id);
                q3x.liked = true;
                q3x.likedCount++;
                e3x.ext.data = q3x;
                try {
                    top.player.setLike(q3x)
                } catch (e) {}
                return q3x
            },
            finaly: function(d2x, e3x) {
                h3x.x3x(p3x.pi8a, "itemchange", {
                    attr: "likedCount",
                    data: e3x.ext.data
                })
            }
        },
        "program-unlike": {
            url: "/api/resource/unlike",
            filter: function(e3x) {
                e3x.data = {
                    threadId: "A_DJ_1_" + e3x.id
                }
            },
            format: function(P3x, e3x) {
                var q3x = e3x.ext.data || this.eg5l(e3x.id);
                q3x.liked = false;
                q3x.likedCount--;
                e3x.ext.data = q3x;
                try {
                    top.player.setLike(q3x)
                } catch (e) {}
                return q3x
            },
            finaly: function(d2x, e3x) {
                h3x.x3x(p3x.pi8a, "itemchange", {
                    attr: "likedCount",
                    data: e3x.ext.data
                })
            }
        }
    });
    p3x.pi8a = NEJ.C();
    b2x = p3x.pi8a.O3x(p3x.hc6W);
    b2x.cuQ1x = function() {
        var cU4Y = GUser.userId;
        this.nv8n({
            limit: 1001,
            key: "program_fav-" + cU4Y,
            data: {
                offset: 0,
                limit: 1e3,
                uid: cU4Y
            }
        })
    }
    ;
    b2x.cuS1x = function(cS4W) {
        var oM8E = cS4W[this.uJ0x];
        l3x.cgY7R(4, function(Q3x) {
            Q3x.sq9h("track_program-" + oM8E, cS4W.songs)
        });
        delete cS4W.songs;
        var bK3x = cS4W.mainSong;
        l3x.cgY7R(4, function(Q3x) {
            Q3x.sq9h("track_program_main-" + oM8E, !bK3x ? [] : [bK3x])
        });
        cS4W.mainSong = (bK3x || X3x).id
    }
    ;
    b2x.cuU1x = function(C3x) {
        var cS4W = this.eg5l(C3x)
          , cU4Y = localCache.Su8m("host.profile.userId");
        return !!cS4W && cS4W.dj.userId == cU4Y
    }
    ;
    b2x.cuV1x = function(C3x) {
        return !1
    }
    ;
    b2x.bnq5v = function(q3x) {
        h3x.x3x(this.constructor, "itemchange", {
            attr: "detail",
            data: this.zC2x(q3x)
        });
        return q3x
    }
    ;
    b2x.chj7c = function(C3x) {
        this.ck4o("program-update-count", {
            data: {
                id: C3x
            }
        })
    }
    ;
    l3x.bJB0x = function(e3x) {
        var Q3x = p3x.pi8a.B3x({
            onitemadd: function() {
                (e3x.onsuccess || bn3x)()
            },
            onerror: function() {
                (e3x.onerror || bn3x)()
            }
        });
        if (e3x.data.liked) {
            Q3x.Lq5v(e3x.data)
        } else {
            Q3x.uW0x(e3x.data)
        }
    }
    ;
    b2x.uW0x = function(cS4W) {
        if (!l3x.gX5c())
            return;
        var cm4q = {
            ext: {}
        };
        if (k3x.kR7K(cS4W)) {
            cm4q.id = cS4W.id;
            cm4q.ext.data = cS4W
        } else {
            cm4q.id = cS4W
        }
        this.ck4o("program-like", cm4q)
    }
    ;
    b2x.Lq5v = function(cS4W) {
        if (!l3x.gX5c())
            return;
        var cm4q = {
            ext: {}
        };
        if (k3x.kR7K(cS4W)) {
            cm4q.id = cS4W.id;
            cm4q.ext.data = cS4W
        } else {
            cm4q.id = cS4W
        }
        this.ck4o("program-unlike", cm4q)
    }
    ;
    H3x.fq5v.B3x({
        element: p3x.pi8a,
        event: ["listchange", "itemchange"]
    })
})();
(function() {
    var c2x = NEJ.P, bn3x = NEJ.F, fc5h = NEJ.R, H3x = c2x("nej.ut"), k3x = c2x("nej.u"), h3x = c2x("nej.v"), v3x = c2x("nej.j"), p3x = c2x("nm.d"), n3x = c2x("nm.l"), l3x = c2x("nm.x"), J3x = "playlist-tracks_", l3x = c2x("nm.x"), b2x;
    p3x.eP5U({
        "track-get": {
            url: "/api/v3/song/detail",
            filter: function(e3x) {
                e3x.data.c = JSON.stringify([{
                    id: e3x.data.id
                }])
            },
            format: function(P3x, e3x) {
                var bf3x = l3x.DT3x(P3x.songs[0]);
                bf3x.privilege = P3x.privileges[0];
                return bf3x
            }
        },
        "track_playlist-list": {
            url: "/api/v3/playlist/detail",
            filter: function(e3x) {
                e3x.data.n = 1e3
            },
            format: function(P3x, e3x) {
                var gK5P = [];
                this.rN9E.bnq5v(P3x.playlist);
                k3x.be3x(P3x.playlist.tracks, function(bK3x, r3x) {
                    var bJA0x = l3x.DT3x(bK3x);
                    bJA0x.privilege = P3x.privileges[r3x];
                    gK5P.push(bJA0x)
                }, this);
                return gK5P
            }
        },
        "track_album-list": {
            url: "/api/v1/album/{id}",
            format: function(P3x, e3x) {
                var gK5P = [];
                k3x.be3x(P3x.songs, function(bf3x) {
                    gK5P.push(l3x.DT3x(bf3x))
                });
                return gK5P
            }
        },
        "track_playlist-add": {
            url: "/api/playlist/manipulate/tracks",
            filter: function(e3x) {
                var bv3x = {}
                  , i3x = e3x.data
                  , cgN7G = this.gP5U(e3x.key) || [];
                DW3x = [];
                k3x.be3x(cgN7G, function(bK3x) {
                    var C3x = k3x.kR7K(bK3x) ? bK3x.id : bK3x;
                    bv3x[C3x] = true
                });
                e3x.ext = [];
                k3x.be3x(i3x.tracks, function(bK3x) {
                    var C3x = k3x.kR7K(bK3x) ? bK3x.id : bK3x;
                    if (!bv3x[C3x]) {
                        DW3x.push(C3x);
                        bv3x[C3x] = true;
                        e3x.ext.push(bK3x)
                    }
                });
                i3x.trackIds = JSON.stringify(DW3x);
                i3x.op = "add";
                if (!DW3x.length) {
                    e3x.value = {
                        code: 502
                    }
                }
            },
            format: function(P3x, e3x) {
                n3x.Z3x.N3x({
                    tip: "已添加至歌单"
                });
                var iP6J = this.rN9E.eg5l(e3x.data.pid);
                if (!!P3x.coverImgUrl)
                    iP6J.coverImgUrl = P3x.coverImgUrl;
                k3x.me7X(e3x.ext, function(bK3x) {
                    this.xI1x(e3x, k3x.kR7K(bK3x) ? bK3x : null);
                    if (!!iP6J)
                        iP6J.trackCount++
                }, this);
                h3x.x3x(p3x.ho6i, "itemchange", {
                    data: iP6J || {},
                    cmd: "add"
                });
                this.x3x("onaddsuccess");
                return null
            },
            finaly: function(d2x, e3x) {
                h3x.x3x(p3x.uS0x, "listchange", {
                    key: e3x.key,
                    action: "refresh"
                });
                var oM8E = e3x.data.pid
                  , co4s = this.jO7H(e3x.key)
            },
            onmessage: function() {
                var lx7q = {
                    502: "歌曲已存在！",
                    505: "歌单已满！"
                };
                return function(cc4g) {
                    setTimeout(function() {
                        n3x.Z3x.N3x({
                            tip: lx7q[cc4g] || "添加失败，请稍后再试！",
                            type: 2
                        })
                    }, 0)
                }
            }()
        },
        "track_playlist-del": {
            url: "/api/playlist/manipulate/tracks",
            filter: function(e3x) {
                var i3x = e3x.data;
                e3x.ext = i3x.trackIds;
                i3x.trackIds = JSON.stringify(i3x.trackIds);
                i3x.op = "del"
            },
            format: function(P3x, e3x) {
                var iP6J = this.rN9E.eg5l(e3x.data.pid);
                k3x.be3x(e3x.ext, function(C3x) {
                    this.bdm2x({
                        id: C3x,
                        key: "track_playlist-" + e3x.data.pid
                    }, !0);
                    if (!!iP6J)
                        iP6J.trackCount = Math.max(0, iP6J.trackCount - 1)
                }, this);
                h3x.x3x(p3x.ho6i, "itemchange", {
                    data: iP6J || {},
                    cmd: "del"
                });
                return null
            },
            finaly: function(d2x, e3x) {
                h3x.x3x(p3x.uS0x, "listchange", {
                    key: e3x.key,
                    action: "refresh"
                })
            },
            onmessage: function(cc4g) {
                l3x.bnD5I({
                    text: "歌曲删除失败！"
                })
            }
        },
        "track_program-list": {
            url: "/api/dj/program/detail",
            format: function(P3x, e3x) {
                return this.bJz0x.bnq5v(P3x.program).songs
            },
            onerror: "onlisterror"
        },
        "track_listen_record-list": {
            url: "/api/v1/play/record",
            format: function(P3x, e3x) {
                var j3x = [];
                if (e3x.data.type == -1) {
                    if (P3x.weekData && P3x.weekData.length) {
                        e3x.data.type = 1
                    } else {
                        e3x.data.type = 0
                    }
                }
                if (e3x.data.type == 1) {
                    j3x = this.bJy0x(P3x.weekData)
                } else {
                    j3x = this.bJy0x(P3x.allData)
                }
                return j3x
            },
            onerror: "onlisterror"
        },
        "track_day-list": {
            url: "/api/v2/discovery/recommend/songs",
            format: function(P3x, e3x) {
                var mV8N = []
                  , j3x = P3x.recommend || [];
                k3x.be3x(j3x, function(bf3x, r3x) {
                    mV8N.push({
                        action: "recommendimpress",
                        json: {
                            alg: bf3x.alg,
                            scene: "user-song",
                            position: r3x,
                            id: bf3x.id
                        }
                    })
                });
                this.kH7A.TC9t(mV8N);
                e3x.limit = j3x.length;
                return j3x
            },
            onerror: "onlisterror"
        },
        "track_lyric-get": {
            type: "GET",
            url: "/api/song/lyric",
            filter: function(e3x) {
                e3x.data.lv = 0;
                e3x.data.tv = 0
            },
            format: function(m3x, e3x) {
                return m3x
            },
            onload: "onlyricload",
            onerror: "onlyricerror"
        }
    });
    p3x.uS0x = NEJ.C();
    b2x = p3x.uS0x.O3x(p3x.hc6W);
    b2x.cl4p = function() {
        this.cs4w();
        this.rN9E = p3x.ho6i.B3x();
        this.bJz0x = p3x.pi8a.B3x();
        this.kH7A = p3x.hQ6K.B3x()
    }
    ;
    b2x.bJy0x = function(j3x) {
        var m3x = []
          , fe5j = 0;
        k3x.be3x(j3x, function(q3x, r3x) {
            var bf3x = l3x.DT3x(q3x.song);
            if (r3x == 0) {
                fe5j = q3x.score
            }
            bf3x.max = fe5j;
            bf3x.playCount = q3x.playCount;
            bf3x.score = q3x.score;
            m3x.push(bf3x)
        });
        return m3x
    }
    ;
    H3x.fq5v.B3x({
        element: p3x.uS0x,
        event: ["listchange"]
    })
})();
(function() {
    function J() {
        var d = "6skV4PUYecGhx07l".split("");
        this.d = function(f) {
            if (null == f || void 0 == f)
                return f;
            if (0 != f.length % 2)
                throw Error("1100");
            for (var b = [], c = 0; c < f.length; c++) {
                0 == c % 2 && b.push("%");
                for (var g = d, a = 0; a < g.length; a++)
                    if (f.charAt(c) == g[a]) {
                        b.push(a.toString(16));
                        break
                    }
            }
            return decodeURIComponent(b.join(""))
        }
    }
    var k = (new J).d
      , d = (new J).d
      , e = (new J).d
      , f = (new J).d
      , g = (new J).d;
    (function() {
        var B = [e("44UsY4UP"), e("40UcU7UcUkUsYkP6UxYPUYUcU7"), d("U4UPUVUlU4UPPPPk4c4VUlU0Y6UlU7UPU7Y4"), f("47P6P6UxUsYcUPYkPVUeUPUxUx"), f("40PVk6PkUPUUUPYkUPU7UVUPk6PVUsU7YVk6PVUPYkUcUU"), e("4eUcYkUsUYUcU7Ulk6PVUsU7YVk64Y4k"), d("YVUPYkUcUU"), g("UYUPY44VUlU7Y4UPYeY4")]
          , J = [g("YPU7UcUUUlYkU0VkUU")]
          , b = [d(""), g("4YYkUsYcP4UPYeY4"), k("Y6UsYkUPU7Y4"), e("7Phchx7PcxeU"), k("Y6UxYPUYUcU7YV"), d("4sU4UlUkUP4PYe40UsU744UPY4UPUVY4"), e("V6V6VsV6"), d("4YUlUlUYUxUPk64PUsYkY4Uek6P6UxYPUYUcU7"), k("PUUPUPY4UxUPk6P4PUk64VUlYkUP"), f("V6V6V6VY"), f("V6V6V6V4"), d("V6V6V6Vk"), d("V6V6V6VV"), g("V6V6V6V6"), e("V6V6V6Vs"), g("PPU7UcY4Yck6P6UxUsYcUPYk"), d("PVUhYcY6UPk6PYUPUkk6P6UxYPUYUcU7"), d("PYUPUk4hUcY4k0UcU7Y4UPUYYkUcUPYkY4UPk6P6444U"), e("4kUPUxUxk640P4"), e("V6V6V6Ve"), g("UYUPY4PVYPY6Y6UlYkY4UPU44PYeY4UPU7YVUcUlU7YV"), d("YVUPY4P4UcU0UP"), e("V6V6V6Vc"), g("PVUsUUUPPVUPUsYkUVUe"), d("kk"), f("k4"), f("PPU7UcYUUPYkYV"), e("kP"), e("kU"), f("kY"), f("VsVsVsV6"), d("UYUPY4k6Y6UxYPUYUcU7k6YVY4YkUcU7UYk6UPYeUVUPY6Y4UcUlU7"), e("P4UeYkUPUP44PVUeUsU4UlYY"), g("kh"), f("kx"), d("k0"), f("4sYkUsUk"), g("7eehhc7Uc7cx74heh07YhheU7PG7eh"), d("k7"), g("4UPPPG4PPVUeUsYkUP"), g("kl"), d("V6"), k("Vs"), f("Vk"), e("VV"), e("V4"), e("74hhhl7PG7ehPl4Y4kVkVVVsVk"), g("VP"), f("VU"), e("4cU7UsUVY4UcYUUP4VUsY6Y4UcUlU7P4UPYeY4"), f("VY"), d("PY4P4kPG4P47k64kYkUlYYYVUPYkk64PYeY4UPU7YVUcUlU7"), f("Ve"), e("Vc"), g("VG"), g("44UcYUPek64kYkUlYYYVUPYkk6P6UxYPUYk04cU7"), k("Vh"), g("V0"), d("PPY6UxUsYck6P64V"), e("UVUsU7YUUsYVk6UPYeUVUPY6Y4UcUlU7"), f("4s"), k("4k"), g("4V"), g("44"), g("4P"), f("7Ph7G77eh0Gl7ccheP7chhcs"), e("4U"), k("4eUsYkYkUcU7UYY4UlU7"), f("4Y"), f("4e"), f("4c"), k("4G"), e("4YU7UlU0UPk6PVUeUPUxUxk64cU7Y4UPUYYkUsY4UcUlU7"), f("4h"), f("4x"), f("40"), e("47"), f("4l"), k("P6"), d("Ps"), k("Pk"), d("PV"), g("47UcUsUYUsYkUsk6PVUlUxUcU4"), g("P4"), e("PVUPUU4VUxUcUPU7Y4k6P6UxYPUYUcU7"), d("PP"), e("PU"), d("VsVsVsVs"), e("PY"), d("Pe"), g("Pc"), k("PG"), e("4YUlYPU4Yck64lUxU4k6PVY4YcUxUP"), k("Px"), g("PkUlUkUxUlYek64xUsYPU7UVUeUPYkk6P6UxYPUYUcU7"), d("40UcUVYkUlYVUlUUY4k64lUUUUUcUVUPk6VkV6VsVV"), f("PsPs40YPYVUcUV"), k("Us"), e("4PYPYkUlYVY4UcUxUP"), e("Uk"), k("YkU0UlUVYek7PkUPUsUxP6UxUsYcUPYkk64YVkk64VUlU7Y4YkUlUxk7Vs"), k("UV"), d("PVUVYkUcY6Y4UcU7UYk744UcUVY4UcUlU7UsYkYc"), f("U4"), f("74hhhl7PG7eh"), f("UP"), k("UU"), k("UY"), e("Ue"), d("40Usk04VUlU7UUUcUYk7UVUlU0k6Y6UxYPUYUcU7"), d("Uc"), g("VsV6VsV6"), d("4VUsYVYPUsUx"), d("UG"), e("Uh"), e("Ux"), d("U0"), g("U7"), e("Ul"), d("Y6"), k("VsV6V6Ve"), f("UVY4"), d("U4Ul47UlY4P4YkUsUVUh"), g("Ys"), d("YVUPY4P4UcU0UPUlYPY4"), f("74heh07PG7ehk6P6YkUl"), e("Yk"), k("4YUcYVUeUs"), k("UYUPY4P4UcU0UPYGUlU7UP4lUUUUYVUPY4"), g("YV"), d("VsV6V6VP"), g("VsV6V6V4"), k("Y4"), k("YP"), g("VsV6V6VV"), f("YU"), f("VsV6V6Vs"), d("YY"), e("Ye"), e("U4YkUsYY4sYkYkUsYcYV"), g("Yc"), e("YG"), f("Yh"), g("Y0"), k("Y7"), d("UUUlU7Y4"), g("VsV6V6Vc"), k("V0U7YPUxUxVhk6Y6UsY4UeV0klVhk6UPYeY6UcYkUPYVV0"), f("PVUeUPUxUxk7PP4c4eUPUxY6UPYk"), f("Y4Ul44UsY4UsPPPk4x"), f("PYUcU7U4UlYYP4UPYeY4"), e("UxUsU7UYYPUsUYUP"), g("U4Ul"), f("74heh07chhcsk6P6YkUl"), e("4eUcUYUeUxUcUYUeY4P4UPYeY4"), k("U4UcYU"), g("40UPU7YPP4UPYeY4"), e("4s4l4xk640UPU4UcUsk6P6UxUsYcUkUsUVUhk6P6UxYPUYUcU7"), f("4VUcY4YkUcYek6UlU7UxUcU7UPk6Y6UxYPUYk0UcU7"), f("UPUV"), f("44UPYVU4UPU0UlU7Us"), k("4cU7UsUVY4UcYUUP4kUlYkU4UPYk"), f("PkUPUsUxP6UxUsYcUPYk"), d("4e4P4x4x4l"), f("kxk6kYUVUlU4UPkYVG"), k("UPU0"), f("U7Y6P4UlU7UYUkYP4sU4U4UcU7"), e("UVYkUPUsY4UP4PUxUPU0UPU7Y4"), g("Y6UeUsU7Y4UlU0"), k("40PVk6P640UcU7UVUeUl"), d("7UGPhY74h0cV"), d("UPYUUsUx"), f("UPYe"), k("44UcYUPek6PU4l44k64eUPUxY6UPYkk6P6UxYPUYk0UcU7"), f("7UcUh67YhheU7Ucee774h0cV"), d("PsYPUcUVUhP4UcU0UP4VUeUPUVUh4lUkUGUPUVY4k7PsYPUcUVUhP4UcU0UP4VUeUPUVUhk7Vs"), k("4UUxYc4lYk44UcUPk64YUsU0UPYVk6P6UxYPUYUcU7"), e("UsY4Y4UsUVUePVUeUsU4UPYk"), e("P6UxUsYc4lU7k6P6UxYPUYk0UcU7"), f("UYUPY4P4UcU0UP"), e("Vsk7V6Vs"), e("4kYkUlUsU4YYUsYc"), k("UUY6"), e("4sUxUsYYUsYkk647P64sP64ck6YPY4UcUxYV"), d("4UUlYkY4UP"), g("UeUsYVUe4VUlU4UP"), e("7UcUhc7UG0GV7PGYcG74h0cV"), e("4PPV47k6PVUlU7UsYkk64sP64c"), k("4eP644UPY4UPUVY4"), e("4kUcY4U4UPUUUPU7U4UPYkk6PsYPUcUVUhPVUVUsU7"), k("4c4Pk6P4UsUkk6Y6UxYPUYUcU7"), g("kYkx"), k("4kYPY4Y4UlU74UUsUVUP"), e("UVY6YP4VUxUsYVYV"), g("4VUPU7Y4YPYkYck64YUlY4UeUcUV"), f("4lU7UxUcU7UPk6PVY4UlYkUsUYUPk6Y6UxYPUYk0UcU7"), k("PVUsUUUPYkk6PPY6U4UsY4UP"), d("40YVYeU0UxVkk7444l4044UlUVYPU0UPU7Y4"), d("4PU7UYYkUsYUUPYkYVk640P4"), d("PVUcUxYUUPYkUxUcUYUeY4k6P6UxYPUYk04cU7"), g("4YUlUlUYUxUPk64YUPUsYkYVk6V6k7VPk7VVVVk7V6"), g("4VUcY4YkUcYek64c4V4sk64VUxUcUPU7Y4"), d("UsUxY6UeUsUkUPY4UcUV"), k("PU44UlYYU7UxUlUsU4UPYk"), e("7Pe0e77UcUeY7UGPhY74h0cV"), f("UsY4Y4YkPUUPYkY4UPYe"), g("7PG7eh74h0cV"), f("UVUlUlUhUcUP"), g("kPVkVk"), k("kPVkVU"), g("4VUPU7Y4UsYPYk"), g("V4UYUsU0UP"), e("PkUlUVUhYYUPUxUx"), e("4xUlUY40UP4cU7k6P6UxYPUYUcU7k6Vsk7V6k7V6k7VcVUVs"), g("4lUVY4UlYVUeUsY6UPk6PVY4YkUPUsU0UcU7UYk6PVUPYkYUUcUVUPYV"), e("Y4Ul4Y40P4PVY4YkUcU7UY"), d("Y4UeV0kl"), d("PVYPU0UsY4YkUsP6444Uk64kYkUlYYYVUPYkk6P6UxYPUYUcU7"), k("P6444Uk7P6U4UU4VY4YkUx"), g("UUUcUxUxPVY4YcUxUP"), d("UGUP"), f("4sU4UlUkUPk640UcU7UYk6PVY4U4"), g("P4UlYkUVUe4eUPUxY6UPYk"), e("4UYkUsU7UhUxUcU7k64YUlY4UeUcUVk64eUPUsYUYc"), f("7Pe0e77UcUeY74hhhl7PG7eh"), g("4eUsYkU0UlU7Yck6P6UxYPUYk04cU7"), d("4YUcUYUc"), f("YUVsk7Vs"), g("4hUcU7Ulk640P4"), f("PVUcU04eUPUc"), k("4sUxUcPVPV4l4xUlUYUcU7k6Y6UxYPUYUcU7"), k("PkUPUsUxP6UxUsYcUPYkk7PkUPUsUxP6UxUsYcUPYkkeY4U0kck64sUVY4UcYUUPPek64VUlU7Y4YkUlUxk6keVVVkk0UkUcY4kc"), d("PcUsU7U4UPYek6P6444Uk6PUUcUPYYUPYk"), g("4VUcY4YkUcYek6PkUPUVUPUcYUUPYkk6P6UxYPUYk0UcU7"), g("U0UsUc"), g("Y4UlY6"), d("4sUVYkUlP6444Uk7P6444U"), g("UVUsU7YUUsYVk6UsY6Uck6UPYeUVUPY6Y4UcUlU7"), d("4cU7UsUVY4UcYUUP4VUsY6Y4UcUlU7"), g("40UPU7YP"), d("Y6YkUPUVUcYVUcUlU7k6U0UPU4UcYPU0Y6k6UUUxUlUsY4Vhk6YUUsYkYcUcU7UYk6YUUPUVVkk6YUUsYkYcUcU7P4UPYe4VUlUlYkU4UcU7UsY4UPVhk6YUUlUcU4k6U0UsUcU7kekck6Yhk6k6k6UYUxPl4UYkUsUY4VUlUxUlYkk6V0k6YUUPUVV4keYUUsYkYcUcU7P4UPYe4VUlUlYkU4UcU7UsY4UPkxk6V6kxk6VskcVhk6Y0"), g("PsPsVkV6VsVVk64UUcYkUPUUUlYek6P6UxYPUYUcU7"), f("4YUlUlUYUxUPk6PPY6U4UsY4UP"), k("7Pe0e77UcUeY7Ph0Gc74hGcs"), k("UP40YPYVUcUVP6UxYPUYUcU7k6444x40VU"), f("PYUPUkk64VUlU0Y6UlU7UPU7Y4YV"), e("4kUsUkYcUxUlU7k6P4UlUlUx4kUsYk"), g("4VUlUlYYUlU7k6PPY6U4UsY4UP"), k("4cU7UUUlP4UPYeY4"), f("YkU0UlUVYek7PkUPUsUxP6UxUsYcUPYkk64YVkk64VUlU7Y4YkUlUx"), d("Uc40UPYVUek6Y6UxYPUYUcU7"), e("PkUPUsUx44UlYYU7UxUlUsU4UPYkk6P6UxYPUYUcU7"), e("PVYcU0UsU7Y4UPUVk6P64h4ck64VUxUcUPU7Y4"), g("PlY6UeUsU7Y4UlU0"), g("4Y444xk64lUkUGUPUVY4k6PYUPUkk6P6UxYPUYk0UcU7k6VsVUk7V6V6"), d("YYUPUkUYUx"), k("7Pe0e77UcUeY7PG7eh74h0cV"), g("YVUVYkUPUPU7"), k("UkUlU4Yc"), f("P4Pk4c4s474Y4x4PPlPVP4Pk4cP6"), k("U7V0"), d("P4UxYYUY40UlU7Ul"), f("kYVGkY"), k("4xUlUY40UP4cU7k6P6UxYPUYUcU7k6Vsk7V6k7V6k7VcVVVP"), d("UUYPU7UVY4UcUlU7"), e("UVUlU7Y4UPYeY4k7UeUsYVUe4VUlU4UP"), k("4sYkUVUeUc4V4s44"), g("PU4PPkP44PPePlPV4e4s444PPk"), k("PPUkYPU7Y4YP"), d("4UUsUVUPUkUlUlUhk6P6UxYPUYUcU7"), e("4sUVY4UcYUUP4VUsY6Y4UcUlU7"), g("7YhheU7Ucee774h0cV"), k("40UsUxUYYPU7k64YUlY4UeUcUV"), e("47UPYYYVk64YUlY4UeUcUVk640P4"), e("4VUsY6Y4UcUlU7P4UPYeY4"), k("UsPGUkPcV6UVPeU4PYVsUPPUUUVkPPUYVVP4UeV4PVUcPkVPUGPsUhVUP6Ux4lVYU047U7Ve40Ul4xVcY64hYs4GYk4cYV4eY44YYP4UYU4PYY44Ye4VYc4kYG4s"), e("44UPUGUsPUYPk64x4Y4Vk6PVUsU7YVk640UlU7Ul"), k("4VUlY6Y6UPYkY6UxUsY4UPk64YUlY4UeUcUVk64xUcUYUeY4"), e("PVUPUYUlUPk6P6YkUcU7Y4"), g("PVUsYYUsYVU4UPUP"), d("4kUsYPUeUsYPYVk6VcVV"), f("4VUeUsUxUhU4YPYVY4UPYk"), g("4sUkUsU4Uck640P4k64VUlU7U4UPU7YVUPU4k64xUcUYUeY4"), f("4xYPUVUcU4Usk64kYkUcUYUeY4"), g("PYUcU4UPk64xUsY4UcU7"), g("UUUlU7Y4k6U4UPY4UPUVY4k6UPYkYkUlYk"), f("4hUlYGYPUhUsk64YUlY4UeUcUVk6P6YkVU47"), d("4eY4U0UxVPk6UxUlUVUsY4UcUlU7k6Y6YkUlYUUcU4UPYk"), f("44UcYUPek6P6UxYPYVk6PYUPUkk6P6UxUsYcUPYk"), f("PUUxUsU4UcU0UcYkk6PVUVYkUcY6Y4"), d("4UUcUxUPk644UlYYU7UxUlUsU4UPYkk6P6UxYPUYk0UcU7"), f("UlUk"), d("4sU4UlU4Ukk7PVY4YkUPUsU0"), d("40UPU7UxUl"), e("UVUsUxUxP6UeUsU7Y4UlU0"), k("PYUlUxUUYkUsU0k640UsY4UeUPU0UsY4UcUVUs"), e("4VUsY4UsUxUcU7Us4YYkUlYPY6k6PPY6U4UsY4UP"), k("4PYkUsYVk64kUlUxU4k64cP44V"), e("44UPYUUsUxPUPkPe4VY4YkUxk744UPYUUsUxPUPkPe4VY4YkUxk7Vs"), k("4GPV4PPVPV4c4l474c44k0PYPcPcPc"), g("7Pe0e77UcUeY7YhheU7chhcs"), k("UsU4U44kUPUeUsYUUcUlYk"), k("Y6Us"), k("4kUcY4YVY4YkUPUsU0k6PUUPYkUsk6PVUPYkUcUU"), d("keUUYPU7UVY4UcUlU7kekcYhYkUPY4YPYkU7k6VsVkVVVhY0kckekcVh"), d("Y6Uc"), d("P4UPU7UVUPU7Y4k64UP447k6Y6UxYPUYk0UcU7"), k("YkUPU0UlYUUP4VUeUcUxU4"), f("4UUlUxYek6VVk64kYkUlYYYVUPYkk6P6UxYPUYUcU7"), k("YPYVUPP6YkUlUYYkUsU0"), f("UeUlYVY4U7UsU0UP"), f("Y6UeUsU7Y4UlU0k7UcU7UGUPUVY44GYV"), f("PVUeUlUVUhYYUsYUUP4UUxUsYVUek7PVUeUlUVUhYYUsYUUP4UUxUsYVUe"), d("YkUYUkUskeVsV6Vkkxk6VkV6V4kxk6V6kxk6V6k7VYkc"), e("4sU4UkUxUlUVUhP6UxYPUYUcU7"), e("4kUsUVUhUYYkUlYPU7U4"), g("4sUY4VUlU7Y4YkUlUxk74sUY4VUlU7Y4YkUlUx"), e("P6UeUlY4Ul4VUPU7Y4UPYkP6UxYPUYUcU7Vsk7Vsk7Vkk7Vk"), g("4YYPU7UYPVUPUl"), e("YVV0"), d("U4UPUVUlU4UPPPPk4c"), g("7UcUhc7UG0GV7eeeck74h0cV"), d("7Pe0e77UcUeY7UcUh67cG0el"), d("VsVkVV"), g("YYUPUkUYUxk6UPYeUVUPY6Y4UcUlU7"), f("YkUP"), k("PY40P6UxUsYcUPYkk74l4VPe"), e("VYVkY6Ye"), f("4sY6Y6PYUlYkUhYVY6UsUVUP"), d("4eUcUYUeUxUcUYUeY4"), e("U4UlUVYPU0UPU7Y4"), d("PcUsU7U4UPYek640UPU4UcUsk6P6UxYPUYUcU7"), e("4PPV47k64xUsYPU7UVUek640UlYGUcUxUxUsk6P6UxYPUYUcU7"), d("VYV6Y6Yek6kY4sYkUcUsUxkY"), k("UcU7UGUPUVY44GYV"), g("4xUlU0Us"), d("4kUcY44VUlU0UPY44sUYUPU7Y4"), f("4VUsUxUcUkYkUc"), f("4kUlUlUhU0UsU7k64lUxU4k6PVY4YcUxUP"), d("YVUPYVYVUcUlU7PVY4UlYkUsUYUP"), f("PPY4UlY6UcUs"), k("UVUlU0Y6UcUxUPPVUeUsU4UPYk"), e("UPYVUVUsY6UP"), d("PVUVYkUlUxUxUkUsYk"), g("PYUcU7U4UlYY"), d("VsV4VYV4V4U4VcVPVVVeVVUVU4VVV6VYVP444sV4Vk4VVcVVUV44Us4sUPVYV4VUVP4V4U4sVPUU4VV64kVcVV4kVs"), d("7ccGhU74hcGU"), d("4hUsYVY6UPYkYVUhYck6P6UsYVYVYYUlYkU4k640UsU7UsUYUPYk"), e("40UcU7UY4xUcPPk04PYeY44k"), d("UYUPY4k6YVYcYVY4UPU0k6UVUlUxUlYkYVk6UPYeUVUPY6Y4UcUlU7"), d("PVUhYcY6UPk744UPY4UPUVY4UcUlU7"), k("4UUcUxUP4xUsUkk6Y6UxYPUYUcU7"), e("U7Y64sP64ck6P6UxYPUYUcU7"), g("U7UlY4PlUPYeUcYVY4PlUeUlYVY4"), e("VkU4"), d("4sUVY4UcYUUPPe4lUkUGUPUVY4"), k("44UlY4YPU0"), d("P6444Uk0Pe4VUeUsU7UYUPk6PUUcUPYYUPYk"), d("P640UcU7UY4xUcPP"), k("UVUlUxUlYk44UPY6Y4Ue")]
          , c = [f("47UlUhUcUsk6PVYPUcY4UPk64PU7UsUkUxUPYkk6P6UxYPUYUcU7"), k("PkUPUsUxPUUcU4UPUlk7PkUPUsUxPUUcU4UPUlkeY4U0kck64sUVY4UcYUUPPek64VUlU7Y4YkUlUxk6keVVVkk0UkUcY4kc"), k("40UsUYU7UPY4Ul"), e("4sU4UlUkUP4PYe40UsU74V4V44UPY4UPUVY4"), f("4YUsUkYkUcUlUxUs"), k("P6UxUsYcUkUcUxUx"), e("U7UsYUUcUYUsY4UlYk"), g("PkUsUVUeUsU7Us"), e("P4YYk64VUPU7k640P4k64VUlU7U4UPU7YVUPU4k64PYeY4YkUsk64kUlUxU4"), e("PsPs40UcU7Uc444xk6P6UxYPUYUcU7"), f("kVUUVUV6"), f("UUUcUxUxPkUPUVY4"), e("V0U7YPUxUxVhk6Y6UsY4UeV0klVhk6U4UlU0UsUcU7V0"), d("44UPUUUsYPUxY4k64kYkUlYYYVUPYkk64eUPUxY6UPYk"), d("4UYkUPU7UVUek6PVUVYkUcY6Y4k640P4"), g("7UG6eY7UGPhY74h0cV"), g("UPU7UVUlU4UPPPPk4c"), e("PPU0Y6YPYVUe"), k("UcUVY6"), f("7Pe0e77UcUeY7Yc6GP7Yele6"), k("UVYkUPUsY4UPP6YkUlUYYkUsU0"), g("U0UlU7UlYVY6UsUVUP"), k("4kYPY4Y4UlU7PVUeUsU4UlYY"), k("4kUlU4UlU7Uck640P4"), g("PVP44sP44c4VPl44Pk4sPY"), e("7chhcs74h0cV"), k("U4UlYYU7UxUlUsU4PPY6U4UsY4UPYk"), k("4sUxUcUPU4UcY4k6P6UxYPUYk04cU7"), d("P6444Uk6UcU7Y4UPUYYkUsU4Ulk6U4Ulk6PYUPUk4hUcY4"), k("YPU7UcUUUlYkU04lUUUUYVUPY4"), k("UPU7UVUlU4UPPPPk4c4VUlU0Y6UlU7UPU7Y4"), f("P6UcUVUsYVUs"), f("4sU4UlUkUPk64UUsU7UYYVUlU7UYk6PVY4U4"), k("UkUcU7U44kYPUUUUUPYk"), g("4sPU4Yk6PVUcY4UPPVUsUUUPY4Yck6Y6UxYPUYUcU7"), f("4lYkUkUcY4k644UlYYU7UxUlUsU4UPYk"), d("UVUlUxUlYk"), f("UeUcU4U4UPU7"), f("UxUlUVUsUxPVY4UlYkUsUYUP"), e("4YUlUlUYUxUPk6P4UsUxUhk64PUUUUUPUVY4YVk6P6UxYPUYUcU7"), d("UcU7U4UPYeUPU4444k"), g("4xYPUVUcU4Usk64UUsYe"), g("4sU0UsYGUlU740P6VV44UlYYU7UxUlUsU4UPYkP6UxYPUYUcU7"), k("UVYkUPUsY4UP4kYPUUUUUPYk"), f("4VUsYVY4UPUxUxUsYk"), k("UxUcU7UhP6YkUlUYYkUsU0"), f("4VUsUxUcUUUlYkU7UcUsU7k64U4k"), f("P4UeYkUPUP444eUcUYUeUxUcUYUeY4"), g("UVYkUPUsY4UPPVUeUsU4UPYk"), f("4YYPUxUcU0"), f("47YcYe4xUsYPU7UVUeUPYk"), d("PcUlYPP4YPUkUPk6P6UxYPUYk0UcU7"), e("7UGPhY74h0cVPl4Y4kVkVVVsVk"), g("PVPY4VY4Uxk7PVPY4VY4Ux"), f("4YUlUlUYUxUPk64PUsYkY4Uek6P6UxYPUYk0UcU7"), k("PsPs44UlYYU7UxUlUsU4k6P6UxYPUYUcU7"), k("k7U0YPYVUcUVk7VsVUVVk7UVUlU0Vhk7UcUYUsU0UPk7VsVUVVk7UVUlU0Vhk7U0YPYVUcUVk7UeYGk7U7UPY4UPUsYVUPk7UVUlU0"), k("47UlYkY4UlU7k64cU4UPU7Y4UcY4Yck6PVUsUUUP"), d("Y6UsYkYVUP4cU7Y4"), f("PVUcU0Y6UxUPk6P6UsYVYV"), d("4VUlUxUlU7U7Usk640P4"), k("YGUsUhUl"), k("UYUPY4PPU7UcUUUlYkU04xUlUVUsY4UcUlU7"), e("YVUeUsU4UPYkPVUlYPYkUVUP"), d("44UlYYU7UxUlUsU4UPYkYVk6Y6UxYPUYUcU7"), f("UxUlUVUsY4UcUlU7"), f("4eUPYkUlUPYVk6kUk64YUPU7UPYkUsUxYVk6UxUcYUUP"), g("YYUcU7U4UlYY"), g("PVUeUlYYUVUsYkU4k64YUlY4UeUcUV"), d("7Ph7G77eh0Gl7UG0GV7chhcs74h0cV"), e("7Pe0e77UcUeY7eGsex7UGPhY"), d("4YUcU7UYUPYk"), g("PkUlUVUh40UPUxY4k6PPY6U4UsY4UP"), f("PYUcU7U4UlYY4UYkUsU0UP"), g("UPU7UsUkUxUPPUUPYkY4UPYe4sY4Y4YkUcUk4sYkYkUsYc"), k("4hUsUVYVY44lU7UP"), d("UsY4Y4YkUcUkYPY4UPk6YUUPUVVkk6UsY4Y4YkPUUPYkY4UPYeVhk6YUUsYkYcUcU7UYk6YUUPUVVkk6YUUsYkYcUcU7P4UPYe4VUlUlYkU4UcU7UsY4UPVhk6YPU7UcUUUlYkU0k6YUUPUVVkk6YPU7UcUUUlYkU04lUUUUYVUPY4Vhk6YUUlUcU4k6U0UsUcU7kekck6Yhk6k6k6YUUsYkYcUcU7P4UPYe4VUlUlYkU4UcU7UsY4UPk6V0k6UsY4Y4YkPUUPYkY4UPYek6khk6YPU7UcUUUlYkU04lUUUUYVUPY4Vhk6k6k6UYUxPlP6UlYVUcY4UcUlU7k6V0k6YUUPUVV4keUsY4Y4YkPUUPYkY4UPYekxk6V6kxk6VskcVhk6Y0"), f("P6UPYkY6UPY4YPUs"), k("UlY6UPU744UsY4UsUkUsYVUP"), f("UVUsU7YUUsYV"), d("Uc4YUPY4Y4UPYkPVUVYkUcY6Y4UsUkUxUPP6UxYPUYUcU7"), d("4cU7UUUlYkU0UsUxk6PkUlU0UsU7"), k("47UcY4YkUlk6P6444Uk6P6UxYPUYk04cU7"), g("40YVYeU0UxVkk7Pe404x4eP4P4P6"), e("7Pe0e77UcUeY7chhcs74h0cV"), f("47P64xUsYVY4P6UsYVYV"), d("P4UeYkUPUP444UUsUVUP"), f("4xUsYVY4P6UsYVYV"), f("VGVG"), k("Y6UsYkYVUP4UUxUlUsY4"), k("7Pe0e77UcUeY7ccGhU74hcGU"), d("Vhk6"), g("UYUPY44sY4Y4YkUcUk4xUlUVUsY4UcUlU7"), f("YhkYU7UsU0UPkYVG"), e("47YcUsUxUs"), f("U7UlY4PlUPYeUcYVY4PlUeUlYVY4U7UsU0UP"), f("PxkY"), g("4Y4U4s4V4Pk6P6UxYPUYUcU7"), k("YPU7U4UPUUUcU7UPU4"), d("7UcUh67PG7eh74h0cV"), g("PlUcYPYsYeUxU4U0YGYkPl"), e("Pxk7"), f("40UsY4YPYkUsk640P4k6PVUVYkUcY6Y4k64VUsY6UcY4UsUxYV"), e("4sYkUcUsUxk64kUxUsUVUh"), e("4UUsU7UYPVUlU7UY"), d("U0YY4Vk6U7UhUkUsUUUGUlYkU4k6Y6UeYVUYUxYck6UPYeYUY4k6YGYsUcYPkxk67sh0G6k6Y4Y6UeYVY4klVGklYPUeUkUYY4UcUVk7U0UlklUxUPYUYUUs"), d("4kYkUsUYUYUsU4UlUVUcUl"), f("4eUsYkU0UlU7Yck64UUcYkUPUUUlYek6P6UxYPUYUcU7"), f("P6UsUxUsUVUPk6PVUVYkUcY6Y4k640P4"), g("47UsY4UcYUUPk64VUxUcUPU7Y4"), e("YPYVUPYk4sUYUPU7Y4"), g("PsYPUcUVUhP4UcU0UPk7PsYPUcUVUhP4UcU0UP"), k("UPYeY6UPYkUcU0UPU7Y4UsUxk0YYUPUkUYUx"), f("4sPkPk4sPcPl4kPP4U4U4PPk"), f("7eehhc7Uc7cx74heh074heG07chhcs"), d("4sUxUcY6UsYck6PVUPUVYPYkUcY4Yck64VUlU7Y4YkUlUxk6VV"), d("PVUVYkUcY6Y4k640P4k64kUlUxU4"), e("kxk6kYUkYkUlYYYVUPYkP6YkUlY6kYVG"), g("P4444V4VY4Uxk7P4444V4VY4Ux"), k("YVUPUxUU"), f("4cU7UUUl4kUsUVUhUYYkUlYPU7U4"), g("P6UsU7U4Ulk6PYUPUkk6P6UxYPUYUcU7"), e("4eUsUPY4Y4UPU7YVUVUeYYUPUcUxUPYk"), d("YVY6UsU7"), g("4sUVY4UcYUUP4kUlYkU4UPYk"), k("P4UeYkUPUP444xUcUYUeY4PVUeUsU4UlYY"), g("V6VkV6Vk"), f("V6VkV6VV"), e("V6VkV6V6"), d("V6VkV6Vs"), d("PYP64ck644UPY4UPUVY4UlYkk6Vsk7V4"), g("Vhk6UPYeY6UcYkUPYVV0"), d("P4UeYkUPUP4444UsYkUhPVUeUsU4UlYY"), g("4PYeUcUUk64PYUUPYkYcYYUeUPYkUP"), d("4kUsY4Y4UxUPUxUlUYk64YUsU0UPk64xUsYPU7UVUeUPYk"), g("4cU0Y6UsUVY4"), k("PU4x4Vk640YPUxY4UcU0UPU4UcUsk6P6UxYPUYUcU7"), d("4sU4UlUkUPk64eUPUkYkUPYY"), e("4kUxYPUPPVY4UsUVUhYVk64cU7YVY4UsUxUxk644UPY4UPUVY4UlYk"), d("YYYYYYU0U0U0U0U0U0U0U0U0U0UxUxUc"), d("UeUcYVY4UlYkYc"), g("YVUsU7YVk0YVUPYkUcUU"), g("P6UsY6YcYkYPYV"), d("4kYPY4Y4UlU7P4UPYeY4"), k("V6VkVsVs"), f("4sY6Y6PPY6"), g("P6UsYkUlU0k7P4PUk6Y6UxUsYcUPYkk6Y6UxYPUYUcU7"), k("44UPUsUxP6UxYc4xUcYUUPk6PPY6U4UsY4UP"), f("4xUlUeUcY4k64YYPUGUsYkUsY4Uc"), d("4UPk4s4Y404P47P4PlPV4e4s444PPk"), d("4sUYUPU7UVYck64U4k"), e("40UsUVYkUlU0UPU4UcUs4UUxUsYVUeP6UsY6UPYkk740UsUVYkUlU0UPU4UcUs4UUxUsYVUeP6UsY6UPYk"), d("kVkVkV"), f("PYUlYkU44VUsY6Y4YPYkUPPe"), k("UYUPY44VUlU0Y6YPY4UPU4PVY4YcUxUP"), e("Y6UxUsY4UUUlYkU0"), e("V6VsV6VP"), g("4sYkUsUkUcUVk6P4YcY6UPYVUPY4Y4UcU7UY"), e("V6VsV6VU"), e("V6VsV6VV"), d("7Pe0e77UcUeY74heG07PG7eh"), g("V6VsV6V4"), f("V6VsV6Vs"), g("V6VsV6Vk"), f("V6VsV6V6"), k("V6VsV6VY"), k("4kYPY4Y4UlU74eUcUYUeUxUcUYUeY4"), k("YUUPYkY4UPYe4sY4Y4YkUcUkP6UlUcU7Y4UPYk"), e("V6VsV6Ve"), k("Y4UPYeY44kUsYVUPUxUcU7UP"), e("kVV6VUVc"), f("U4UlYPUkUxUPP4YYUcYVY4k6PYUPUkk6P6UxYPUYUcU7"), g("YPU7UPYVUVUsY6UP"), g("P4UeYPU7U4UPYkk644UsY64VY4YkUxk647P64sP64ck6P6UxYPUYUcU7"), d("4kUsY4UsU7UY"), d("444U4hUsUck0PV4k"), g("PVU7UsY6k64cP44V")]
          , Ja = [e("40UlUlUx4kUlYkUsU7")];
        (function() {
            var a = [82, 73, 50, 30, 45, 29, 28, 16, 82, 41, 77, 5, 27, 92, 27, 0, 2, 1423857449, -2, 3, -3, 3432918353, 1555261956, 4, 2847714899, -4, 5, -5, 2714866558, 1281953886, 6, -6, 198958881, 1141124467, 2970347812, -7, 7, 3110523913, 8, -8, 2428444049, -9, 9, 10, -10, 11, -11, 2563907772, 12, -12, 13, 2282248934, -13, 2154129355, -14, 14, 15, -15, 16, -16, 17, -17, 18, -18, 19, -19, 20, -20, 21, -21, -22, 22, 23, -23, 24, -24, -25, 25, -26, 26, 27, -27, 28, -28, 29, -29, -30, 30, 31, -31, -32, 32, -33, 33, -34, 34, -35, 35, -37, -36, 36, 37, -38, 39, -39, 38, -41, 41, 40, -40, 42, -43, 43, -42, -45, 45, -44, 44, -46, 47, 46, -47, 48, -48, 49, -49, 50, -51, 51, -50, 570562233, 53, -52, -53, 52, 55, 54, -54, -55, 503444072, -57, -56, 57, 56, 58, -59, -58, 59, 60, 61, -61, -60, 62, 63, -63, -62, -66, 711928724, 64, -67, 66, 65, -64, -65, 67, -69, 68, 69, 70, -70, -68, -71, 71, -72, 3686517206, -75, -74, 75, 73, 72, 74, -73, 79, 76, -76, 77, -79, -78, 78, -77, 3554079995, 82, -80, 80, -83, -82, 81, -81, 83, -85, -84, -86, 86, 84, 85, 87, -87, -91, 90, 88, 89, -88, -90, 91, -89, 95, 94, -92, -95, 93, -94, -93, 92, -99, 99, -96, 98, -97, -98, 96, 97, -101, 3272380065, 100, -103, 101, 102, -102, -100, 103, 107, -105, 104, 106, 105, -106, -104, -107, 111, 108, 110, 109, -108, -110, -109, -111, 251722036, -114, 115, 113, 112, 114, -115, -112, -113, -118, 118, -116, -119, 116, 117, -117, 119, 123, 120, 122, 121, -120, -122, -121, -123, 125, 127, 3412177804, 126, 124, -125, -126, -124, -127, -128, 128, -129, 1843258603, 3803740692, 984961486, 3939845945, 4195302755, 4066508878, 255, 1706088902, 256, 1969922972, 365, 2097651377, 376229701, 853044451, 752459403, 1e3, 426522225, 3772115230, 615818150, 3904427059, 4167216745, 4027552580, 3654703836, 1886057615, 879679996, 3518719985, 3244367275, 2013776290, 3373015174, 1759359992, 285281116, 1622183637, 1006888145, 1e4, 1231636301, 83908371, 1090812512, 2463272603, 1373503546, 2596254646, 2321926636, 1504918807, 2181625025, 2882616665, 2747007092, 3009837614, 3138078467, 397917763, 81470997, 829329135, 2657392035, 956543938, 2517215374, 2262029012, 40735498, 2394877945, 3266489909, 702138776, 2808555105, 2936675148, 1258607687, 1131014506, 3218104598, 3082640443, 1404277552, 565507253, 534414190, 1541320221, 1913087877, 2053790376, 1789927666, 3965973030, 3826175755, 4107580753, 4240017532, 1658658271, 3579855332, 3708648649, 3453421203, 3317316542, 1873836001, 1742555852, 461845907, 3608007406, 1996959894, 3747672003, 3485111705, 2137656763, 3352799412, 213261112, 3993919788, 1.01, 3865271297, 4139329115, 4275313526, 282753626, 1068828381, 2768942443, 2909243462, 936918e3, 3183342108, 27492, 141376813, 174e4, 3050360625, 654459306, 2617837225, 1454621731, 2489596804, 2227061214, 1591671054, 2362670323, 4294967295, 1308918612, 2246822507, 795835527, 1181335161, 414664567, 4279200368, 1661365465, 1037604311, 4150417245, 3887607047, 1802195444, 4023717930, 2075208622, 1943803523, 901097722, 628085408, 755167117, 3322730930, 3462522015, 3736837829, 3604390888, 2366115317, .4, 2238001368, 2512341634, 2647816111, -.2, 314042704, 1510334235, 58964, 1382605366, 31158534, 450548861, 3020668471, 1119000684, 3160834842, 2898065728, 1256170817, 18e5, 2765210733, 3060149565, 3188396048, 2932959818, 124634137, 2797360999, 366619977, 62317068, -.26, 1202900863, 498536548, 1340076626, 2405801727, 2265490386, 1594198024, 1466479909, 2547177864, 249268274, 2680153253, 2125561021, 3294710456, 855842277, 3423369109, .732134444, 3705015759, 3569037538, 1994146192, 1711684554, 1852507879, 997073096, 733239954, 4251122042, 601450431, 4111451223, 167816743, 3855990285, 3988292384, 3369554304, 3233442989, 3495958263, 3624741850, 65535, 453092731, -.9, 2094854071, 1957810842, 325883990, 4057260610, 1684777152, 4189708143, 3915621685, 162941995, 1812370925, 3775830040, 783551873, 3134207493, 1172266101, 2998733608, 2724688242, 1303535960, 2852801631, 112637215, 1567103746, 651767980, 1426400815, 906185462, 2211677639, 1047427035, 2344532202, 2607071920, 2466906013, 225274430, 544179635, 2176718541, 2312317920, 1483230225, 1342533948, 2567524794, 2439277719, 1088359270, 671266974, 1219638859, 953729732, 3099436303, 2966460450, 817233897, 2685067896, 2825379669, 4089016648, 4224994405, 3943577151, 3814918930, 476864866, 1634467795, 335633487, 1762050814, 1, 2044508324, -1, 3401237130, 3268935591, 3524101629, 3663771856, 1907459465];
            (function() {
                function d(b, c) {
                    if (null == b)
                        return null;
                    for (var l = x(c), f = [], g = b.length, e = a[15]; e < g; e++)
                        f.push(Y(b[e], l++));
                    return f
                }
                function f(b) {
                    if (null == b)
                        return null;
                    for (var c = [], l = a[15], d = b.length; l < d; l++) {
                        var g = b[l];
                        c[l] = Ka[(g >>> a[23] & a[56]) * a[58] + (g & a[56])]
                    }
                    return c
                }
                function g(h) {
                    var c = [];
                    if (null == h || void 0 == h || h.length == a[15])
                        return za(L);
                    if (h.length >= L) {
                        var c = a[15]
                          , l = [];
                        if (null != h && h.length != a[15]) {
                            if (h.length < L)
                                throw Error(b[134]);
                            for (var d = a[15]; d < L; d++)
                                l[d] = h[c + d]
                        }
                        return l
                    }
                    for (l = a[15]; l < L; l++)
                        c[l] = h[l % h.length];
                    return c
                }
                function e(h) {
                    var c = a[405];
                    if (null != h)
                        for (var l = a[15]; l < h.length; l++)
                            c = c >>> a[38] ^ La[(c ^ h[l]) & a[299]];
                    h = Aa(c ^ a[405]);
                    c = h.length;
                    if (null == h || c < a[15])
                        h = new String(b[0]);
                    else {
                        for (var l = [], d = a[15]; d < c; d++)
                            l.push(Ma(h[d]));
                        h = l.join(b[0])
                    }
                    return h
                }
                function k(h, c, l) {
                    var d, f = [b[70], b[85], b[118], b[73], b[77], b[106], b[80], b[116], b[44], b[42], b[62], b[114], b[93], b[105], b[40], b[64], b[103], b[86], b[99], b[141], b[48], b[89], b[76], b[69], b[132], b[47], b[88], b[33], b[43], b[45], b[78], b[53], b[110], b[50], b[68], b[101], b[52], b[41], b[138], b[133], b[66], b[129], b[108], b[81], b[140], b[90], b[117], b[63], b[107], b[91], b[135], b[115], b[113], b[97], b[60], b[61], b[137], b[126], b[83], b[79], b[119], b[71], b[123], b[75]], g = b[74], e = [];
                    if (l == a[541])
                        l = h[c],
                        d = a[15],
                        e.push(f[l >>> a[16] & a[153]]),
                        e.push(f[(l << a[23] & a[122]) + (d >>> a[23] & a[56])]),
                        e.push(g),
                        e.push(g);
                    else if (l == a[16])
                        l = h[c],
                        d = h[c + a[541]],
                        h = a[15],
                        e.push(f[l >>> a[16] & a[153]]),
                        e.push(f[(l << a[23] & a[122]) + (d >>> a[23] & a[56])]),
                        e.push(f[(d << a[16] & a[148]) + (h >>> a[30] & a[19])]),
                        e.push(g);
                    else if (l == a[19])
                        l = h[c],
                        d = h[c + a[541]],
                        h = h[c + a[16]],
                        e.push(f[l >>> a[16] & a[153]]),
                        e.push(f[(l << a[23] & a[122]) + (d >>> a[23] & a[56])]),
                        e.push(f[(d << a[16] & a[148]) + (h >>> a[30] & a[19])]),
                        e.push(f[h & a[153]]);
                    else
                        throw Error(b[111]);
                    return e.join(b[0])
                }
                function za(b) {
                    for (var c = [], l = a[15]; l < b; l++)
                        c[l] = a[15];
                    return c
                }
                function Z(h, c, l, d, f) {
                    if (null != h && h.length != a[15]) {
                        if (null == l)
                            throw Error(b[131]);
                        if (h.length < f)
                            throw Error(b[134]);
                        for (var e = a[15]; e < f; e++)
                            l[d + e] = h[c + e]
                    }
                }
                function Aa(b) {
                    var c = [];
                    c[0] = b >>> a[74] & a[299];
                    c[1] = b >>> a[58] & a[299];
                    c[2] = b >>> a[38] & a[299];
                    c[3] = b & a[299];
                    return c
                }
                function ma(h) {
                    if (null == h || void 0 == h)
                        return h;
                    h = encodeURIComponent(h);
                    for (var c = [], l = h.length, d = a[15]; d < l; d++)
                        if (h.charAt(d) == b[27])
                            if (d + a[16] < l)
                                c.push(Na(h.charAt(++d) + b[0] + h.charAt(++d))[0]);
                            else
                                throw Error(b[146]);
                        else
                            c.push(h.charCodeAt(d));
                    return c
                }
                function Na(b) {
                    if (null == b || b.length == a[15])
                        return [];
                    b = new String(b);
                    for (var c = [], l = b.length / a[16], d = a[15], f = a[15]; f < l; f++) {
                        var e = parseInt(b.charAt(d++), a[58]) << a[23]
                          , g = parseInt(b.charAt(d++), a[58]);
                        c[f] = x(e + g)
                    }
                    return c
                }
                function Ma(c) {
                    var d = [];
                    d.push(aa[c >>> a[23] & a[56]]);
                    d.push(aa[c & a[56]]);
                    return d.join(b[0])
                }
                function na(b, c) {
                    if (null == b || null == c || b.length != c.length)
                        return b;
                    for (var d = [], f = a[15], e = b.length; f < e; f++)
                        d[f] = Y(b[f], c[f]);
                    return d
                }
                function Y(a, b) {
                    a = x(a);
                    b = x(b);
                    return x(a ^ b)
                }
                function Oa(a, b) {
                    return x(a + b)
                }
                function x(c) {
                    if (c < a[290])
                        return x(a[291] - (a[290] - c));
                    if (c >= a[290] && c <= a[282])
                        return c;
                    if (c > a[282])
                        return x(a[292] + c - a[282]);
                    throw Error(b[136])
                }
                function Pa(h) {
                    function d() {
                        for (var h = [b[282], c[32], c[137], b[221], c[150], b[36], c[157], c[103], c[174], b[280], b[18], b[303], c[23], b[338], c[106], b[181], b[337], c[46], c[44], b[112], b[210], b[194], b[281], c[60], b[277], b[276], b[160], c[175], b[356], b[198], b[297], b[98], c[104], b[184], b[223], c[14], c[4], b[226], b[127], b[92], c[49], b[318], c[122], b[67], B[5], c[135], c[81], c[75], b[228], b[286], c[148], b[335], b[283], c[41], c[2], b[272], c[102], b[293], b[348], Ja[0], b[169], B[4], b[273], b[82], c[94], c[108], c[142], c[77], c[5], b[358], c[7], b[212], b[279], c[116], b[278], c[68], b[229], c[176], b[261], c[8], b[268], c[17], b[26], b[340], b[289], b[284], b[104], c[160], b[224], b[256], b[243], b[322], b[204], c[19], b[300], c[70], c[90], b[206], b[3], b[65], c[99], b[186], b[321], b[170], b[346], c[25], b[174], b[271], c[15], b[46], c[52], c[69], c[84], b[153], b[125], c[114], b[37]], f = [], e = a[15]; e < h.length; e++)
                            try {
                                var g = h[e];
                                l()(g) && f.push(g)
                            } catch (k) {}
                        return f.join(b[56])
                    }
                    function l() {
                        function h(a) {
                            var c = {};
                            return k.style.fontFamily = a,
                            g.appendChild(k),
                            c.height = k.offsetHeight,
                            c.width = k.offsetWidth,
                            g[b[307]](k),
                            c
                        }
                        var d = [c[21], c[141], B[6]]
                          , l = []
                          , f = c[139]
                          , e = b[327]
                          , g = C[b[258]]
                          , k = C[b[167]](c[123]);
                        k.style.fontSize = e;
                        k.style.visibility = c[37];
                        k.innerHTML = f;
                        for (f = a[15]; f < d.length; f++)
                            l[f] = h(d[f]);
                        return function(c) {
                            for (var f = a[15]; f < l.length; f++) {
                                var e = h(c + b[34] + d[f])
                                  , g = l[f];
                                if (e.height !== g.height || e.width !== g.width)
                                    return !0
                            }
                            return !1
                        }
                    }
                    function f() {
                        var a = null
                          , h = null
                          , d = [];
                        try {
                            h = C[b[167]](c[79]),
                            a = h[B[7]](b[255]) || h[B[7]](c[112])
                        } catch (l) {}
                        if (!a)
                            return d;
                        try {
                            d.push(a[b[20]]())
                        } catch (g) {}
                        try {
                            d.push(e(a, h))
                        } catch (k) {}
                        return d.join(b[56])
                    }
                    function e(h, d) {
                        try {
                            var f = c[76]
                              , l = b[240]
                              , g = h[c[43]]();
                            h[c[33]](h[c[113]], g);
                            var k = new Float32Array([a[432], a[488], a[15], a[428], a[453], a[15], a[15], a[468], a[15]]);
                            h.bufferData(h[c[113]], k, h[c[24]]);
                            g.k = a[19];
                            g.l = a[19];
                            var t = h[c[20]]()
                              , X = h[c[48]](h[b[267]]);
                            h[c[63]](X, f);
                            h[b[341]](X);
                            var la = h[c[48]](h[c[149]]);
                            return h[c[63]](la, l),
                            h[b[341]](la),
                            h[b[177]](t, X),
                            h[b[177]](t, la),
                            h[c[45]](t),
                            h[b[309]](t),
                            t.n = h[c[92]](t, b[205]),
                            t.m = h[c[62]](t, c[29]),
                            h[c[74]](t.o),
                            h[c[167]](t.n, g.k, h.FLOAT, !a[541], a[15], a[15]),
                            h[J[0]](t.m, a[541], a[541]),
                            h[b[139]](h[b[259]], a[15], g.l),
                            M(d[b[149]]())
                        } catch ($a) {
                            return b[324]
                        }
                    }
                    function g() {
                        var h = C[b[167]](b[155])
                          , d = []
                          , f = [c[124], b[270], b[328], b[315], b[192], c[166], c[22], c[143], b[274], b[1], b[329], b[154], b[161], b[238], b[49], c[120], b[248], b[239], b[156], b[343], c[132], c[86], c[47], c[125], b[32], b[344], c[73], b[150]];
                        if (!window[c[154]])
                            return d.join(b[0]);
                        for (var l = a[15]; l < f.length; l++)
                            try {
                                C[b[258]].appendChild(h),
                                h.style.color = f[l],
                                d.push(f[l]),
                                d.push(window[c[154]](h).getPropertyValue(c[36])),
                                C[b[258]][b[307]](h)
                            } catch (e) {
                                d.push(b[349])
                            }
                        return d.join(b[54])
                    }
                    function k() {
                        try {
                            var h = C[b[167]](c[79])
                              , d = h[B[7]](b[354])
                              , f = c[105];
                            d[c[169]] = b[235];
                            d[b[145]] = b[333];
                            d[c[169]] = b[202];
                            d[b[219]] = c[10];
                            d[c[11]](a[281], a[541], a[152], a[66]);
                            d[b[219]] = c[170];
                            d.fillText(f, a[16], a[56]);
                            d[b[219]] = b[313];
                            d.fillText(f, a[23], a[60]);
                            return h[b[149]]()
                        } catch (l) {
                            return b[237]
                        }
                    }
                    function m() {
                        try {
                            return window[b[355]] && n.h ? q() : r()
                        } catch (a) {
                            return b[31]
                        }
                    }
                    function r() {
                        if (!y[b[4]])
                            return b[0];
                        var h = [b[211], b[314], c[3], b[5], b[183], c[27], c[115], b[230], c[42], b[157], c[145], b[266], c[34], b[246], c[134], b[336], b[189], c[138], b[296], b[201], b[158], b[233], b[247], c[147], c[13], b[55], b[288], b[173], c[171], c[64], c[26], b[244], b[332], b[187], c[133], b[269], b[290], b[351], b[176], b[308], b[39], b[254], c[97], c[71], b[72], b[7], c[54], b[200], c[39], b[242], c[107], b[225], c[66], b[188], b[287], b[190], c[80], b[250], b[347], c[87], b[263], b[213], b[109], b[95], B[1], c[109], c[82], c[0], c[57], b[352], c[85], B[3], b[166], c[50], b[214], b[195], c[35], c[121], c[146], c[28], b[357], b[317], c[31], b[178], b[241], c[55], c[9], b[96], b[251], b[94], c[72], b[196], b[23], b[102], b[84], b[148], b[199], c[59], b[16], b[217], b[252], b[306], c[173], b[222], b[15], b[58], b[203], b[8], c[136], b[245], b[17], b[51], b[295], c[153], c[130], b[331], b[232], c[51], c[61]]
                          , d = []
                          , f = {};
                        d.push(p(y[b[4]], function(h) {
                            f[h.name] = a[541];
                            var d = p(h, function(a) {
                                return [a.type, a.suffixes].join(b[144])
                            }).join(b[34]);
                            return [h.name, h.description, d].join(c[88])
                        }, this).join(b[25]));
                        d.push(p(h, function(a) {
                            if (f[a])
                                return b[0];
                            a = y[b[4]][a];
                            if (!a)
                                return b[0];
                            var h = p(a, function(a) {
                                return [a.type, a.suffixes].join(b[144])
                            }).join(b[34]);
                            return [a.name, a.description, h].join(c[88])
                        }, this).join(b[56]));
                        return d.join(b[56])
                    }
                    function q() {
                        return window[b[355]] ? p([b[236], b[292], b[316], b[298], c[151], b[197], c[83], b[218], c[111], b[175], b[249], b[100], b[162], b[231], c[1], b[249], b[102], b[148], b[312], c[53], b[350], c[118], b[326]], function(a) {
                            try {
                                return new window[b[355]](a),
                                a
                            } catch (h) {
                                return null
                            }
                        }).join(b[56]) : b[0]
                    }
                    function p(a, b, h) {
                        var c = [];
                        if (null == a)
                            return c;
                        if (I && a.map === I)
                            return a.map(b, h);
                        E(a, function(a, d, f) {
                            c[c.length] = b.call(h, a, d, f)
                        });
                        return c
                    }
                    function E(b, h) {
                        if (null !== b)
                            if (z && b.forEach === z)
                                b.forEach(h, void 0);
                            else if (b.length === +b.length)
                                for (var c = a[15], d = b.length; c < d && h.call(void 0, b[c], c, b) !== {}; c++)
                                    ;
                            else
                                for (c in b)
                                    if (b.hasOwnProperty(c) && h.call(void 0, b[c], c, b) === {})
                                        break
                    }
                    var z = Array.prototype.forEach
                      , I = Array.prototype.map
                      , n = {
                        e: M,
                        j: !0,
                        i: !0,
                        h: !0,
                        b: !0,
                        a: !0
                    };
                    typeof h == b[264] ? n.e = h : (null != h.b && void 0 != h.b && (n.b = h.b),
                    null != h.a && void 0 != h.a && (n.a = h.a));
                    this.get = function() {
                        var h = []
                          , l = [];
                        if (Qa) {
                            var e;
                            try {
                                e = !!window[b[339]]
                            } catch (X) {
                                e = !0
                            }
                            h.push(e);
                            var p;
                            try {
                                p = !!window[c[38]]
                            } catch (z) {
                                p = !0
                            }
                            h.push(p);
                            h.push(!!window[c[40]]);
                            C[b[258]] ? h.push(typeof C[b[258]][b[301]]) : h.push("undefined");
                            h.push(typeof window[c[78]]);
                            h.push(y[b[193]]);
                            h.push(y[c[155]]);
                            if (e = n.i)
                                try {
                                    var u = C[b[167]](c[79]);
                                    e = !(!u[B[7]] || !u[B[7]](b[354]))
                                } catch (r) {
                                    e = !1
                                }
                            if (e)
                                try {
                                    h.push(k()),
                                    n.b && h.push(f())
                                } catch (E) {
                                    h.push(b[59])
                                }
                            h.push(g());
                            n.a && l.push(d());
                            l.push(y[c[110]]);
                            l.push(y[b[151]]);
                            l.push(window[b[257]][b[359]]);
                            n.j && (u = window[b[257]] ? [window[b[257]].height, window[b[257]].width] : [a[15], a[15]],
                            typeof u !== c[98] && l.push(u.join(b[138])));
                            l.push((new Date)[b[128]]());
                            l.push(y[b[122]]);
                            l.push(m())
                        }
                        u = [];
                        n.e ? (u.push(n.e(h.join(c[152]))),
                        u.push(n.e(l.join(c[152])))) : (u.push(M(h.join(c[152]))),
                        u.push(M(l.join(c[152]))));
                        return u
                    }
                }
                function M(h) {
                    var c = a[88], d, f, e, g, k, m;
                    d = h.length & a[19];
                    f = h.length - d;
                    e = c;
                    c = a[21];
                    g = a[375];
                    for (m = a[15]; m < f; )
                        k = h.charCodeAt(m) & a[299] | (h.charCodeAt(++m) & a[299]) << a[38] | (h.charCodeAt(++m) & a[299]) << a[58] | (h.charCodeAt(++m) & a[299]) << a[74],
                        ++m,
                        k = (k & a[486]) * c + (((k >>> a[58]) * c & a[486]) << a[58]) & a[405],
                        k = k << a[56] | k >>> a[60],
                        k = (k & a[486]) * g + (((k >>> a[58]) * g & a[486]) << a[58]) & a[405],
                        e ^= k,
                        e = e << a[50] | e >>> a[64],
                        e = (e & a[486]) * a[26] + (((e >>> a[58]) * a[26] & a[486]) << a[58]) & a[405],
                        e = (e & a[486]) + a[394] + (((e >>> a[58]) + a[435] & a[486]) << a[58]);
                    k = a[15];
                    switch (d) {
                    case a[19]:
                        k ^= (h.charCodeAt(m + a[16]) & a[299]) << a[58];
                    case a[16]:
                        k ^= (h.charCodeAt(m + a[541]) & a[299]) << a[38];
                    case a[541]:
                        k ^= h.charCodeAt(m) & a[299],
                        k = (k & a[486]) * c + (((k >>> a[58]) * c & a[486]) << a[58]) & a[405],
                        k = k << a[56] | k >>> a[60],
                        k = (k & a[486]) * g + (((k >>> a[58]) * g & a[486]) << a[58]) & a[405],
                        e ^= k
                    }
                    e ^= h.length;
                    e ^= e >>> a[58];
                    e = (e & a[486]) * a[407] + (((e >>> a[58]) * a[407] & a[486]) << a[58]) & a[405];
                    e ^= e >>> a[50];
                    e = (e & a[486]) * a[349] + (((e >>> a[58]) * a[349] & a[486]) << a[58]) & a[405];
                    e ^= e >>> a[58];
                    h = e >>> a[15];
                    d = [];
                    d.push(h);
                    try {
                        for (var r, B = h + b[0], p = a[15], E = a[15], z = a[15]; z < B.length; z++)
                            try {
                                var q = parseInt(B.charAt(z) + b[0])
                                  , p = q || q === a[15] ? p + q : p + a[541];
                                E++
                            } catch (n) {
                                p += a[541],
                                E++
                            }
                        E = E == a[15] ? a[541] : E;
                        r = ba(p * a[541] / E, N);
                        for (var x, C = Math.floor(r / Math.pow(a[43], N - a[541])), G = h + b[0], w = a[15], D = a[15], H = a[15], u = a[15], F = a[15]; F < G.length; F++)
                            try {
                                var v = parseInt(G.charAt(F) + b[0]);
                                v || v === a[15] ? v < C ? (D++,
                                w += v) : (u++,
                                H += v) : (u++,
                                H += C)
                            } catch (A) {
                                u++,
                                H += C
                            }
                        u = u == a[15] ? a[541] : u;
                        D = D == a[15] ? a[541] : D;
                        x = ba(H * a[541] / u - w * a[541] / D, T);
                        d.push(ca(r, N, b[41]));
                        d.push(ca(x, T, b[41]))
                    } catch (y) {
                        d = [],
                        d.push(h),
                        d.push(U(N, b[35]).join(b[0])),
                        d.push(U(T, b[35]).join(b[0]))
                    }
                    return d.join(b[0])
                }
                function ba(h, c) {
                    if (h < a[15] || h >= a[43])
                        throw Error(b[30]);
                    for (var d = U(c, b[41]), e = b[0] + h, f = a[15], g = a[15]; f < d.length && g < e.length; g++)
                        e.charAt(g) != b[38] && (d[f++] = e.charAt(g));
                    return parseInt(d.join(b[0]))
                }
                function ca(a, c, d) {
                    a = b[0] + a;
                    if (a.length > c)
                        throw Error(b[87]);
                    if (a.length == c)
                        return a;
                    for (var e = [], f = a.length; f < c; f++)
                        e.push(d);
                    e.push(a);
                    return e.join(b[0])
                }
                function U(b, c) {
                    if (b <= a[15])
                        return [a[15]];
                    for (var d = [], e = a[15]; e < b; e++)
                        d.push(c);
                    return d
                }
                function r(a) {
                    return null == a || void 0 == a
                }
                function m(a, b, c) {
                    this.f = a;
                    this.c = b;
                    this.g = r(c) ? !0 : c
                }
                function Ra(a) {
                    if (r(a) || r(a.f) || r(a.c))
                        return !1;
                    try {
                        if (r(window[a.f]))
                            return !1
                    } catch (b) {
                        return !1
                    }
                    return !0
                }
                function v(c, d) {
                    if (r(c))
                        return b[0];
                    for (var e = a[15]; e < c.length; e++) {
                        var f = c[e];
                        if (!r(f) && f.f == d)
                            return f
                    }
                }
                function da() {
                    var h;
                    a: {
                        if (!r(q))
                            for (h = a[15]; h < q.length; h++) {
                                var d = q[h];
                                if (d.g && !Ra(d)) {
                                    h = d;
                                    break a
                                }
                            }
                        h = null
                    }
                    var e;
                    if (r(h)) {
                        try {
                            e = window.parseFloat(b[180]) === a[384] && window.isNaN(window.parseFloat(b[163]))
                        } catch (f) {
                            e = !1
                        }
                        if (e) {
                            var g;
                            try {
                                g = window.parseInt(b[323]) === a[273] && window.isNaN(window.parseInt(b[163]))
                            } catch (k) {
                                g = !1
                            }
                            if (g) {
                                var m;
                                try {
                                    m = window.decodeURI(b[208]) === b[24]
                                } catch (C) {
                                    m = !1
                                }
                                if (m) {
                                    var x;
                                    try {
                                        x = window.decodeURIComponent(b[209]) === b[28]
                                    } catch (F) {
                                        x = !1
                                    }
                                    if (x) {
                                        var p;
                                        try {
                                            p = window.encodeURI(b[24]) === b[208]
                                        } catch (E) {
                                            p = !1
                                        }
                                        if (p) {
                                            var z;
                                            try {
                                                z = window.encodeURIComponent(b[28]) === b[209]
                                            } catch (I) {
                                                z = !1
                                            }
                                            if (z) {
                                                var n;
                                                try {
                                                    n = window.escape(b[28]) === b[209]
                                                } catch (A) {
                                                    n = !1
                                                }
                                                if (n) {
                                                    var y;
                                                    try {
                                                        y = window.unescape(b[209]) === b[28]
                                                    } catch (G) {
                                                        y = !1
                                                    }
                                                    if (y) {
                                                        var w;
                                                        try {
                                                            w = window.eval(b[304]) === a[273]
                                                        } catch (D) {
                                                            w = !1
                                                        }
                                                        e = w ? null : v(q, b[171])
                                                    } else
                                                        e = v(q, c[172])
                                                } else
                                                    e = v(q, b[342])
                                            } else
                                                e = v(q, c[30])
                                        } else
                                            e = v(q, c[16])
                                    } else
                                        e = v(q, B[2])
                                } else
                                    e = v(q, b[320])
                            } else
                                e = v(q, c[58])
                        } else
                            e = v(q, c[89])
                    } else
                        e = h;
                    return e
                }
                function Sa() {
                    var a = da();
                    if (!r(a))
                        return a.c;
                    try {
                        a = r(window[b[168]]) || r(window[b[168]][b[334]]) ? null : v(q, b[311])
                    } catch (c) {
                        a = null
                    }
                    if (!r(a))
                        return a.c;
                    try {
                        a = r(context) || r(context[b[185]]) ? null : v(q, b[265])
                    } catch (d) {
                        a = null
                    }
                    return r(a) ? null : a.c
                }
                function Ba(c) {
                    for (var d = [], e = a[15]; e < c; e++) {
                        var f = Math.random() * Ta
                          , f = Math.floor(f);
                        d.push(ea.charAt(f))
                    }
                    return d.join(b[0])
                }
                function P(h) {
                    for (var d = (C[b[207]] || b[0]).split(c[91]), e = a[15]; e < d.length; e++) {
                        var f = d[e].indexOf(b[57]);
                        if (f >= a[15]) {
                            var g = d[e].substring(f + a[541], d[e].length);
                            if (d[e].substring(a[15], f) == h)
                                return window.decodeURIComponent(g)
                        }
                    }
                    return null
                }
                function Ca(h) {
                    var d = [b[135], b[182], b[133], b[108], b[159], b[165], c[18]]
                      , e = b[0];
                    if (null == h || void 0 == h)
                        return h;
                    if (typeof h == [b[291], b[220], b[121]].join(b[0])) {
                        for (var e = e + b[142], f = a[15]; f < d.length; f++)
                            if (h.hasOwnProperty(d[f])) {
                                var g = b[29] + d[f] + b[262], k;
                                k = b[0] + h[d[f]];
                                k = null == k || void 0 == k ? k : k.replace(/'/g, c[96]).replace(/"/g, b[24]);
                                e += g + k + b[191]
                            }
                        e.charAt(e.length - a[541]) == b[34] && (e = e.substring(a[15], e.length - a[541]));
                        return e += b[143]
                    }
                    return null
                }
                function oa(a, d, e, f) {
                    var g = [];
                    g.push(a + b[57] + encodeURIComponent(d));
                    e && (a = new Date,
                    a = new Date(f),
                    f = a[b[215]](),
                    g.push(c[91]),
                    g.push(b[172]),
                    g.push(b[305]),
                    g.push(b[325]),
                    g.push(b[319]),
                    g.push(f));
                    g.push(c[91]);
                    g.push(b[302]);
                    g.push(b[216]);
                    null != A && void 0 != A && A != b[0] && (g.push(c[91]),
                    g.push(b[152]),
                    g.push(b[234]),
                    g.push(b[260]),
                    g.push(A));
                    C[b[207]] = g.join(b[0])
                }
                function Da(a) {
                    window[pa] = a
                }
                function Ea(a) {
                    window[qa] = a
                }
                function Fa(c, d) {
                    for (var e = [], f = a[15]; f < d; f++)
                        e.push(c);
                    return e.join(b[0])
                }
                function Ga(a, c) {
                    var d = P(a);
                    null !== d && void 0 !== d && d !== b[0] || oa(a, c, !1)
                }
                function ra() {
                    var a = P(V);
                    if (null == a || void 0 == a || a == b[0])
                        a = window[qa];
                    return a
                }
                function Ua() {
                    var a = ra();
                    if (null == a || void 0 == a || a == b[0])
                        return !1;
                    try {
                        return (a = parseInt(a)) && a >= fa ? !0 : !1
                    } catch (c) {
                        return !1
                    }
                }
                function ga(c) {
                    if (null == c || void 0 == c || c == b[0])
                        return null;
                    c = c.split(b[54]);
                    return c.length < a[16] || !/[0-9]+/gi.test(c[1]) ? null : parseInt(c[1])
                }
                function Q() {
                    var a = P(S);
                    if (null == a || void 0 == a || a == b[0])
                        a = window[pa];
                    return a
                }
                function Va() {
                    var c = Q();
                    if (null == c || void 0 == c || c == b[0])
                        return a[15];
                    c = ga(c);
                    return null == c ? a[15] : c - (sa - ta) - (new window[B[0]])[b[179]]()
                }
                function Ha(d, e) {
                    var f = new window[B[0]];
                    f[b[21]](f[b[179]]() - a[326]);
                    window[b[330]][b[207]] = null == e || void 0 == e || e == b[0] ? d + b[147] + f[b[215]]() : d + c[12] + e + c[131] + f[b[215]]()
                }
                function Ia() {
                    if (!(null == K || void 0 == K || K.length <= a[15]))
                        for (var c = a[15]; c < K.length; c++) {
                            var d = K[c];
                            (null != A && void 0 != A && A != b[0] || null != d && void 0 != d && d != b[0]) && A != d && (Ha(S, d),
                            Ha(V, d))
                        }
                }
                function ua() {
                    Ia();
                    window[qa] = null;
                    window[pa] = null;
                    var h = !0
                      , t = {
                        v: b[227]
                    }
                      , l = Sa();
                    l && (t[c[18]] = l);
                    l = null;
                    t[b[108]] = Wa;
                    var m = (new window[B[0]])[b[179]]() + sa
                      , r = m + a[308] * a[148] * a[148] * a[74] * a[303] * a[26];
                    t[b[133]] = Ba(a[19]) + m + Ba(a[19]);
                    try {
                        var q = (new Pa({
                            b: Xa,
                            a: Ya
                        })).get();
                        null != q && void 0 != q && q.length > a[15] ? t[b[182]] = q.join(b[34]) : (t[b[182]] = Fa(b[41], a[43]),
                        t[b[159]] = b[42],
                        h = !1)
                    } catch (C) {
                        t[b[182]] = Fa(b[41], a[43]),
                        t[b[159]] = b[42],
                        h = !1
                    }
                    try {
                        var v = l = Ca(t)
                          , t = Za;
                        if (null == t || void 0 == t)
                            throw Error(b[120]);
                        if (null == v || void 0 == v)
                            v = b[0];
                        var q = v, y;
                        y = null == v ? e([]) : e(ma(v));
                        var A = ma(q + y)
                          , p = ma(t);
                        null == A && (A = []);
                        y = [];
                        for (var E = a[15]; E < va; E++) {
                            var z = Math.random() * a[301]
                              , z = Math.floor(z);
                            y[E] = x(z)
                        }
                        var p = g(p), p = na(p, g(y)), E = p = g(p), I;
                        if (null == A || void 0 == A || A.length == a[15])
                            I = za(F);
                        else {
                            var n = A.length
                              , J = a[15]
                              , J = n % F <= F - ha ? F - n % F - ha : F * a[16] - n % F - ha
                              , z = [];
                            Z(A, a[15], z, a[15], n);
                            for (var K = a[15]; K < J; K++)
                                z[n + K] = a[15];
                            Z(Aa(n), a[15], z, n + J, ha);
                            I = z
                        }
                        n = I;
                        if (null == n || n.length % F != a[15])
                            throw Error(b[130]);
                        I = [];
                        for (var G = a[15], w = n.length / F, D = a[15]; D < w; D++) {
                            I[D] = [];
                            for (var H = a[15]; H < F; H++)
                                I[D][H] = n[G++]
                        }
                        G = [];
                        Z(y, a[15], G, a[15], va);
                        for (var u = I.length, L = a[15]; L < u; L++) {
                            var O, M;
                            var N = I[L];
                            if (null == N)
                                M = null;
                            else {
                                for (var T = x(a[104]), w = [], U = N.length, P = a[15]; P < U; P++)
                                    w.push(Oa(N[P], T++));
                                M = w
                            }
                            var Q;
                            w = M;
                            if (null == w)
                                Q = null;
                            else {
                                for (var aa = x(a[143]), D = [], ba = w.length, wa = a[15]; wa < ba; wa++)
                                    D.push(Y(w[wa], aa--));
                                Q = D
                            }
                            var ca = d(Q, a[127]);
                            O = d(ca, a[36]);
                            var xa = na(O, p), ia;
                            w = xa;
                            D = E;
                            if (null == w)
                                ia = null;
                            else if (null == D)
                                ia = w;
                            else {
                                for (var H = [], da = D.length, W = a[15], ea = w.length; W < ea; W++)
                                    H[W] = x(w[W] + D[W % da]);
                                ia = H
                            }
                            var xa = na(ia, E)
                              , ja = f(xa)
                              , ja = f(ja);
                            Z(ja, a[15], G, L * F + va, F);
                            E = ja
                        }
                        var ka;
                        if (null == G || void 0 == G)
                            ka = null;
                        else if (G.length == a[15])
                            ka = b[0];
                        else {
                            var ya = a[19];
                            try {
                                for (var u = [], R = a[15]; R < G.length; )
                                    if (R + ya <= G.length)
                                        u.push(k(G, R, ya)),
                                        R += ya;
                                    else {
                                        u.push(k(G, R, G.length - R));
                                        break
                                    }
                                ka = u.join(b[0])
                            } catch (ra) {
                                throw Error(b[111])
                            }
                        }
                        l = ka
                    } catch (ga) {
                        l = Ca({
                            ec: b[43],
                            em: ga.message
                        }),
                        h = !1
                    }
                    l = l + b[54] + m;
                    oa(S, l, h, r);
                    Ga(S, l);
                    Da(l);
                    oa(V, fa, h, r);
                    Ga(V, fa);
                    Ea(fa);
                    window[b[124]] && window[b[124]](ua, ta)
                }
                m.prototype = {
                    toString: function() {
                        return c[93] + this.f + b[164] + this.c + c[117] + this.g + b[143]
                    }
                };
                var q = [new m(c[67],b[13]), new m(b[330],b[14]), new m(c[6],b[11]), new m(c[65],b[12]), new m(c[140],b[10]), new m(b[257],b[9]), new m(b[2],b[19]), new m(b[235],b[22]), new m(c[119],b[6]), new m(c[89],c[164]), new m(c[58],c[162]), new m(b[320],c[163]), new m(B[2],c[159]), new m(c[16],c[161]), new m(c[30],c[156]), new m(b[342],c[158]), new m(c[172],c[165]), new m(b[171],c[168]), new m(b[253],c[128],!1), new m(b[294],c[129],!1), new m(b[168],c[126],!1), new m(b[311],c[127],!1), new m(b[265],c[144],!1)]
                  , Qa = da() ? !1 : !0
                  , Wa = window && window[c[65]] && window[c[65]].host || b[353]
                  , C = window[b[330]]
                  , y = window[c[6]]
                  , N = a[16]
                  , T = a[16]
                  , aa = [b[41], b[42], b[43], b[44], b[45], b[47], b[48], b[50], b[52], b[53], b[97], b[99], b[101], b[103], b[105], b[106]]
                  , La = [a[15], a[377], a[383], a[522], a[449], a[316], a[495], a[343], a[462], a[542], a[310], a[461], a[496], a[464], a[415], a[40], a[455], a[363], a[533], a[402], a[438], a[293], a[366], a[511], a[491], a[493], a[476], a[333], a[539], a[412], a[297], a[427], a[474], a[29], a[369], a[503], a[325], a[353], a[546], a[390], a[420], a[440], a[174], a[442], a[306], a[501], a[469], a[336], a[508], a[331], a[482], a[355], a[358], a[400], a[379], a[528], a[525], a[459], a[423], a[34], a[408], a[520], a[319], a[446], a[471], a[437], a[47], a[417], a[548], a[506], a[463], a[312], a[320], a[256], a[345], a[498], a[380], a[395], a[523], a[385], a[416], a[537], a[429], a[298], a[497], a[487], a[335], a[478], a[300], a[433], a[513], a[367], a[368], a[451], a[404], a[534], a[504], a[295], a[337], a[470], a[443], a[413], a[445], a[190], a[354], a[317], a[391], a[547], a[33], a[466], a[505], a[370], a[521], a[398], a[447], a[321], a[460], a[517], a[37], a[424], a[403], a[350], a[529], a[381], a[334], a[499], a[356], a[483], a[481], a[332], a[452], a[490], a[296], a[431], a[341], a[419], a[536], a[401], a[516], a[362], a[365], a[515], a[479], a[304], a[314], a[458], a[139], a[540], a[414], a[53], a[309], a[473], a[387], a[519], a[388], a[374], a[494], a[348], a[340], a[324], a[426], a[28], a[527], a[456], a[318], a[450], a[389], a[526], a[485], a[352], a[510], a[329], a[378], a[532], a[342], a[409], a[283], a[441], a[421], a[436], a[467], a[339], a[130], a[509], a[372], a[502], a[475], a[22], a[545], a[397], a[307], a[360], a[514], a[364], a[302], a[347], a[399], a[535], a[361], a[328], a[430], a[294], a[418], a[382], a[330], a[480], a[489], a[32], a[346], a[492], a[322], a[359], a[518], a[386], a[373], a[410], a[51], a[411], a[472], a[323], a[457], a[313], a[538], a[305], a[531], a[376], a[406], a[344], a[351], a[484], a[327], a[512], a[448], a[315], a[524], a[392], a[24], a[425], a[454], a[530], a[393], a[544], a[357], a[311], a[500], a[371], a[17], a[477], a[338], a[465], a[507], a[157], a[439], a[232], a[434], a[422]]
                  , Ka = [a[76], a[182], a[199], a[231], a[165], a[156], a[75], a[207], a[166], a[19], a[158], a[223], a[191], a[102], a[35], a[94], a[126], a[127], a[248], a[192], a[56], a[66], a[284], a[274], a[82], a[110], a[257], a[258], a[175], a[275], a[86], a[215], a[224], a[95], a[167], a[168], a[193], a[233], a[64], a[285], a[159], a[70], a[153], a[240], a[208], a[45], a[173], a[241], a[140], a[83], a[65], a[103], a[152], a[135], a[194], a[209], a[144], a[38], a[276], a[46], a[114], a[265], a[68], a[131], a[106], a[242], a[243], a[225], a[136], a[71], a[132], a[145], a[128], a[183], a[60], a[44], a[286], a[118], a[266], a[72], a[90], a[18], a[267], a[200], a[73], a[123], a[169], a[111], a[137], a[115], a[244], a[277], a[98], a[216], a[74], a[26], a[124], a[282], a[27], a[133], a[259], a[281], a[31], a[217], a[249], a[41], a[96], a[78], a[23], a[160], a[176], a[184], a[250], a[201], a[119], a[226], a[62], a[16], a[251], a[59], a[48], a[227], a[148], a[129], a[116], a[290], a[170], a[107], a[99], a[234], a[87], a[134], a[245], a[210], a[84], a[235], a[195], a[260], a[91], a[261], a[92], a[211], a[100], a[80], a[262], a[268], a[112], a[185], a[218], a[79], a[122], a[269], a[104], a[120], a[177], a[20], a[263], a[149], a[61], a[77], a[154], a[36], a[150], a[125], a[89], a[219], a[101], a[252], a[113], a[141], a[121], a[220], a[273], a[186], a[253], a[178], a[202], a[246], a[108], a[187], a[81], a[117], a[49], a[203], a[30], a[264], a[270], a[142], a[271], a[212], a[138], a[52], a[221], a[88], a[109], a[222], a[143], a[236], a[54], a[97], a[272], a[287], a[541], a[228], a[247], a[146], a[63], a[278], a[67], a[254], a[161], a[15], a[543], a[213], a[204], a[214], a[188], a[179], a[196], a[58], a[229], a[288], a[237], a[55], a[279], a[162], a[50], a[155], a[289], a[69], a[197], a[180], a[280], a[151], a[93], a[230], a[181], a[39], a[85], a[238], a[105], a[25], a[255], a[171], a[189], a[42], a[198], a[57], a[163], a[164], a[205], a[239], a[172], a[206], a[147], a[43]]
                  , F = a[158]
                  , L = a[158]
                  , ha = a[23]
                  , va = a[23]
                  , d = function(b, c) {
                    if (null == b)
                        return null;
                    for (var d = x(c), e = [], f = b.length, g = a[15]; g < f; g++)
                        e.push(Y(b[g], d++));
                    return e
                }
                  , Za = b[345]
                  , S = b[299]
                  , V = c[100]
                  , fa = a[91]
                  , ea = b[275]
                  , Ta = ea.length
                  , sa = a[444]
                  , ta = a[396]
                  , Ya = !1
                  , Xa = !1
                  , O = window && window[c[65]] && window[c[65]][b[310]] || c[95]
                  , A = c[56]
                  , A = function(d, e) {
                    if (null == d || void 0 == d || d == b[0] || null == e || void 0 == e || e.length <= a[15])
                        return null;
                    e = e.split(b[56]);
                    for (var f = a[15]; f < e.length; f++) {
                        var g = new RegExp(e[f].replace(/\./g, c[101]) + b[25]);
                        if (null != d.match(g) || null != (b[38] + d).match(g))
                            return e[f]
                    }
                    return null
                }(O, A)
                  , pa = S.replace(/[^a-zA-Z0-9$]/g, b[0]).toLowerCase()
                  , qa = V.replace(/[^a-zA-Z0-9$]/g, b[0]).toLowerCase()
                  , K = function(c) {
                    var d = [];
                    if (!c)
                        return d;
                    c = c.split(b[38]);
                    for (var e = b[0], f = a[15]; f < c.length; f++)
                        f < c.length - a[541] && (e = b[38] + c[c.length - a[541] - f] + e,
                        d.push(e));
                    return d
                }(O);
                K.push(null);
                K.push(b[38] + O);
                (function(d) {
                    for (var e = a[15], f = (C[b[207]] || b[0]).split(c[91]), g = a[15]; g < f.length; g++) {
                        var k = f[g].indexOf(b[57]);
                        k >= a[15] && f[g].substring(a[15], k) == d && (e += a[541])
                    }
                    return e
                })(S) > a[541] && Ia();
                (function() {
                    var a = Q();
                    if (null == a || void 0 == a || a == b[0])
                        a = !1;
                    else {
                        var c;
                        if (c = Ua())
                            a = ga(a),
                            c = !(null == a || a - (new window[B[0]])[b[179]]() <= sa - ta);
                        a = c
                    }
                    return a
                })() ? (Da(Q()),
                Ea(ra()),
                O = Va(),
                window[b[124]] && window[b[124]](ua, O)) : ua()
            })()
        })()
    })()
})();
(function() {})();
(function() {
    var bJx0x;
    var tZ0x = "VISITOR_CLIENT_NO_COOKIE_SUPPORT";
    var cgD7w = 0;
    var bJw0x = 0;
    var bJv0x = 1;
    var bJu0x = 0;
    var bpE6y = "";
    var bJt0x = "";
    var bJr0x = "";
    var UF9w = "";
    var UG9x = "";
    var bpN6H = "";
    var bJq0x = 0;
    var bJo0x = "";
    var FO3x = "";
    var Ed3x = 0;
    var bpV6P = ntes_get_domain();
    var bpY6S = null;
    var cuW1x = "//analytics.163.com";
    var cgl7e = function() {};
    function is_spider() {
        return /baiduspider/gi.test(window.navigator.userAgent)
    }
    function ntes_get_domain() {
        var f = document.domain;
        var d = f.split(".");
        var c = d.length;
        var e = /^\d+$/g;
        if (e.test(d[c - 1])) {
            return f
        }
        if (d.length < 3) {
            return "." + f
        }
        var g = ["com", "net", "org", "gov", "co"];
        var b, a = false;
        for (b = 0; b < g.length; b++) {
            if (d[c - 2] == g[b]) {
                a = true
            }
        }
        if (!a) {
            return "." + d[c - 2] + "." + d[c - 1]
        } else {
            return "." + d[c - 3] + "." + d[c - 2] + "." + d[c - 1]
        }
    }
    function ntes_set_cookie_long(a, c) {
        var b = new Date;
        b.setTime(b.getTime() + 1e3 * 60 * 60 * 24 * 365 * 100);
        document.cookie = a + "=" + c + "; expires=" + b.toGMTString() + "; path=/; domain=" + bpV6P
    }
    function ntes_set_cookie(a, c) {
        var b = new Date;
        b.setTime(b.getTime() + 0);
        document.cookie = a + "=" + c + "; path=/; domain=" + bpV6P
    }
    function ntes_set_cookie_new(b, d, a) {
        if (!a || a == "") {
            a = 1e3 * 60 * 60 * 24 * 365 * 1
        }
        var c = new Date;
        c.setTime(c.getTime() + a);
        document.cookie = b + "=" + d + "; expires=" + c.toGMTString() + "; path=/; domain=" + bpV6P
    }
    function ntes_get_cookie(c) {
        var a = document.cookie;
        var d = c + "=";
        var g = a.length;
        var b = 0;
        while (b < g) {
            var e = b + d.length;
            if (a.substring(b, e) == d) {
                var f = a.indexOf(";", e);
                if (f == -1) {
                    f = g
                }
                return unescape(a.substring(e, f))
            }
            b = a.indexOf(" ", b) + 1;
            if (b == 0) {
                break
            }
        }
        return -1
    }
    function ntes_get_flashver() {
        var f = ""
          , n = navigator;
        if (n.plugins && n.plugins.length) {
            for (var ii = 0; ii < n.plugins.length; ii++) {
                if (n.plugins[ii].name.indexOf("Shockwave Flash") != -1) {
                    f = n.plugins[ii].description.split("Shockwave Flash")[1];
                    break
                }
            }
        } else {
            if (window.ActiveXObject) {
                for (var ii = 10; ii >= 2; ii--) {
                    try {
                        var fl = eval("new ActiveXObject('ShockwaveFlash.ShockwaveFlash." + ii + "');");
                        if (fl) {
                            f = ii + ".0";
                            break
                        }
                    } catch (e) {}
                }
            }
        }
        return f
    }
    var cgk7d = 0;
    var KS5X = 8;
    function ntes_hex_md5(a) {
        return binl2hex(ntes_core_md5(str2binl(a), a.length * KS5X))
    }
    function ntes_core_md5(p, k) {
        p[k >> 5] |= 128 << k % 32;
        p[(k + 64 >>> 9 << 4) + 14] = k;
        var o = 1732584193;
        var n = -271733879;
        var m = -1732584194;
        var l = 271733878;
        for (var g = 0; g < p.length; g += 16) {
            var j = o;
            var h = n;
            var f = m;
            var e = l;
            o = md5_ff(o, n, m, l, p[g + 0], 7, -680876936);
            l = md5_ff(l, o, n, m, p[g + 1], 12, -389564586);
            m = md5_ff(m, l, o, n, p[g + 2], 17, 606105819);
            n = md5_ff(n, m, l, o, p[g + 3], 22, -1044525330);
            o = md5_ff(o, n, m, l, p[g + 4], 7, -176418897);
            l = md5_ff(l, o, n, m, p[g + 5], 12, 1200080426);
            m = md5_ff(m, l, o, n, p[g + 6], 17, -1473231341);
            n = md5_ff(n, m, l, o, p[g + 7], 22, -45705983);
            o = md5_ff(o, n, m, l, p[g + 8], 7, 1770035416);
            l = md5_ff(l, o, n, m, p[g + 9], 12, -1958414417);
            m = md5_ff(m, l, o, n, p[g + 10], 17, -42063);
            n = md5_ff(n, m, l, o, p[g + 11], 22, -1990404162);
            o = md5_ff(o, n, m, l, p[g + 12], 7, 1804603682);
            l = md5_ff(l, o, n, m, p[g + 13], 12, -40341101);
            m = md5_ff(m, l, o, n, p[g + 14], 17, -1502002290);
            n = md5_ff(n, m, l, o, p[g + 15], 22, 1236535329);
            o = md5_gg(o, n, m, l, p[g + 1], 5, -165796510);
            l = md5_gg(l, o, n, m, p[g + 6], 9, -1069501632);
            m = md5_gg(m, l, o, n, p[g + 11], 14, 643717713);
            n = md5_gg(n, m, l, o, p[g + 0], 20, -373897302);
            o = md5_gg(o, n, m, l, p[g + 5], 5, -701558691);
            l = md5_gg(l, o, n, m, p[g + 10], 9, 38016083);
            m = md5_gg(m, l, o, n, p[g + 15], 14, -660478335);
            n = md5_gg(n, m, l, o, p[g + 4], 20, -405537848);
            o = md5_gg(o, n, m, l, p[g + 9], 5, 568446438);
            l = md5_gg(l, o, n, m, p[g + 14], 9, -1019803690);
            m = md5_gg(m, l, o, n, p[g + 3], 14, -187363961);
            n = md5_gg(n, m, l, o, p[g + 8], 20, 1163531501);
            o = md5_gg(o, n, m, l, p[g + 13], 5, -1444681467);
            l = md5_gg(l, o, n, m, p[g + 2], 9, -51403784);
            m = md5_gg(m, l, o, n, p[g + 7], 14, 1735328473);
            n = md5_gg(n, m, l, o, p[g + 12], 20, -1926607734);
            o = md5_hh(o, n, m, l, p[g + 5], 4, -378558);
            l = md5_hh(l, o, n, m, p[g + 8], 11, -2022574463);
            m = md5_hh(m, l, o, n, p[g + 11], 16, 1839030562);
            n = md5_hh(n, m, l, o, p[g + 14], 23, -35309556);
            o = md5_hh(o, n, m, l, p[g + 1], 4, -1530992060);
            l = md5_hh(l, o, n, m, p[g + 4], 11, 1272893353);
            m = md5_hh(m, l, o, n, p[g + 7], 16, -155497632);
            n = md5_hh(n, m, l, o, p[g + 10], 23, -1094730640);
            o = md5_hh(o, n, m, l, p[g + 13], 4, 681279174);
            l = md5_hh(l, o, n, m, p[g + 0], 11, -358537222);
            m = md5_hh(m, l, o, n, p[g + 3], 16, -722521979);
            n = md5_hh(n, m, l, o, p[g + 6], 23, 76029189);
            o = md5_hh(o, n, m, l, p[g + 9], 4, -640364487);
            l = md5_hh(l, o, n, m, p[g + 12], 11, -421815835);
            m = md5_hh(m, l, o, n, p[g + 15], 16, 530742520);
            n = md5_hh(n, m, l, o, p[g + 2], 23, -995338651);
            o = md5_ii(o, n, m, l, p[g + 0], 6, -198630844);
            l = md5_ii(l, o, n, m, p[g + 7], 10, 1126891415);
            m = md5_ii(m, l, o, n, p[g + 14], 15, -1416354905);
            n = md5_ii(n, m, l, o, p[g + 5], 21, -57434055);
            o = md5_ii(o, n, m, l, p[g + 12], 6, 1700485571);
            l = md5_ii(l, o, n, m, p[g + 3], 10, -1894986606);
            m = md5_ii(m, l, o, n, p[g + 10], 15, -1051523);
            n = md5_ii(n, m, l, o, p[g + 1], 21, -2054922799);
            o = md5_ii(o, n, m, l, p[g + 8], 6, 1873313359);
            l = md5_ii(l, o, n, m, p[g + 15], 10, -30611744);
            m = md5_ii(m, l, o, n, p[g + 6], 15, -1560198380);
            n = md5_ii(n, m, l, o, p[g + 13], 21, 1309151649);
            o = md5_ii(o, n, m, l, p[g + 4], 6, -145523070);
            l = md5_ii(l, o, n, m, p[g + 11], 10, -1120210379);
            m = md5_ii(m, l, o, n, p[g + 2], 15, 718787259);
            n = md5_ii(n, m, l, o, p[g + 9], 21, -343485551);
            o = safe_add(o, j);
            n = safe_add(n, h);
            m = safe_add(m, f);
            l = safe_add(l, e)
        }
        return Array(o, n, m, l)
    }
    function md5_cmn(h, e, d, c, g, f) {
        return safe_add(bit_rol(safe_add(safe_add(e, h), safe_add(c, f)), g), d)
    }
    function md5_ff(g, f, k, j, e, i, h) {
        return md5_cmn(f & k | ~f & j, g, f, e, i, h)
    }
    function md5_gg(g, f, k, j, e, i, h) {
        return md5_cmn(f & j | k & ~j, g, f, e, i, h)
    }
    function md5_hh(g, f, k, j, e, i, h) {
        return md5_cmn(f ^ k ^ j, g, f, e, i, h)
    }
    function md5_ii(g, f, k, j, e, i, h) {
        return md5_cmn(k ^ (f | ~j), g, f, e, i, h)
    }
    function safe_add(a, d) {
        var c = (a & 65535) + (d & 65535);
        var b = (a >> 16) + (d >> 16) + (c >> 16);
        return b << 16 | c & 65535
    }
    function bit_rol(a, b) {
        return a << b | a >>> 32 - b
    }
    function str2binl(d) {
        var c = new Array;
        var a = (1 << KS5X) - 1;
        for (var b = 0; b < d.length * KS5X; b += KS5X) {
            c[b >> 5] |= (d.charCodeAt(b / KS5X) & a) << b % 32
        }
        return c
    }
    function binl2hex(c) {
        var b = cgk7d ? "0123456789ABCDEF" : "0123456789abcdef";
        var d = "";
        for (var a = 0; a < c.length * 4; a++) {
            d += b.charAt(c[a >> 2] >> a % 4 * 8 + 4 & 15) + b.charAt(c[a >> 2] >> a % 4 * 8 & 15)
        }
        return d
    }
    function str_to_ent(e) {
        var a = "";
        var d;
        for (d = 0; d < e.length; d++) {
            var f = e.charCodeAt(d);
            var b = "";
            if (f > 255) {
                while (f >= 1) {
                    b = "0123456789".charAt(f % 10) + b;
                    f = f / 10
                }
                if (b == "") {
                    b = "0"
                }
                b = "#" + b;
                b = "&" + b;
                b = b + ";";
                a += b
            } else {
                a += e.charAt(d)
            }
        }
        return a
    }
    function ntes_get_navigation_info() {
        UF9w = "-";
        bpN6H = "-";
        UG9x = "-";
        var c = window.self
          , b = window.screen
          , a = window.navigator;
        if (c.screen) {
            UF9w = b.width + "x" + b.height;
            bpN6H = b.colorDepth + "-bit"
        } else {
            if (c.java) {
                var e = java.awt.Toolkit.getDefaultToolkit();
                var f = e.getScreenSize();
                UF9w = f.width + "x" + f.height
            }
        }
        if (a.language) {
            UG9x = a.language.toLowerCase()
        } else {
            if (a.browserLanguage) {
                UG9x = a.browserLanguage.toLowerCase()
            }
        }
        var g = new Date(document.lastModified);
        bJq0x = g.getTime() / 1e3
    }
    function fetch_visitor_hash() {
        var c = new Date;
        var b = document.body.clientWidth + ":" + document.body.clientHeight;
        var a = str_to_ent(c.getTime() + Math.random() + document.location + document.referrer + screen.width + screen.height + navigator.userAgent + document.cookie + b);
        return ntes_hex_md5(a)
    }
    function cuX1x(c, b, f) {
        var e = c + "_" + +(new Date) + parseInt(Math.random() * 100), a, d = f || cgl7e;
        a = window[e] = new Image;
        a.onload = function() {
            window[e] = null;
            d()
        }
        ;
        a.onerror = function() {
            window[e] = null;
            d()
        }
        ;
        a.src = b;
        a = null
    }
    function neteaseTracker(l, a, m, k) {
        if (is_spider()) {
            return
        }
        var e = k || bJx0x;
        bpE6y = escape(a || document.location);
        bJt0x = escape(m || document.title);
        bJr0x = l === true ? "" : escape(l || document.referrer);
        bJo0x = ntes_get_flashver();
        var b = (new Date).getTime();
        if (bpY6S == null) {
            document.cookie = "__ntes__test__cookies=" + b;
            bpY6S = ntes_get_cookie("__ntes__test__cookies") == b ? true : false;
            document.cookie = "__ntes__test__cookies=" + b + "; expires=" + (new Date("1970/01/01")).toUTCString()
        }
        if (e == "undefined" || !e) {
            return
        }
        if (bpE6y.indexOf("http") != 0) {
            return
        }
        var h = ntes_get_cookie("_ntes_nnid");
        if (h == -1) {
            if (bpY6S) {
                tZ0x = fetch_visitor_hash();
                bJw0x = 1;
                ntes_set_cookie_long("_ntes_nnid", tZ0x + "," + (new Date).getTime());
                ntes_set_cookie_long("_ntes_nuid", tZ0x)
            }
        } else {
            var o = h.indexOf(",");
            var p = h.indexOf("|");
            var f = false;
            if (p == -1) {
                p = h.length
            }
            tZ0x = h.substr(0, o);
            Ed3x = h.substr(o + 1, p - o - 1);
            if (Ed3x == 0) {
                Ed3x = (new Date).getTime();
                f = true
            }
            if (!tZ0x) {
                tZ0x = fetch_visitor_hash();
                f = true
            }
            if (f) {
                ntes_set_cookie_long("_ntes_nnid", tZ0x + "," + Ed3x);
                ntes_set_cookie_long("_ntes_nuid", tZ0x)
            }
            if (Ed3x != 0 && b - Ed3x > 365 * 86400 * 1e3) {
                Ed3x = 0;
                ntes_set_cookie_long("_ntes_nnid", tZ0x + "," + (new Date).getTime());
                ntes_set_cookie_long("_ntes_nuid", tZ0x)
            }
        }
        function c(q, i) {
            var s = ntes_get_cookie(q)
              , r = ntes_get_cookie(i);
            return s == -1 ? r == -1 ? "" : r : s
        }
        FO3x = c("P_INFO", "P_OINFO");
        FO3x = FO3x ? FO3x.substr(0, FO3x.indexOf("|")) : "";
        bJu0x = c("S_INFO", "S_OINFO") ? 1 : 0;
        ntes_get_navigation_info();
        var n = ["_nacc=", e, "&_nvid=", tZ0x, "&_nvtm=", cgD7w, "&_nvsf=", bJv0x, "&_nvfi=", bJw0x, "&_nlag=", UG9x, "&_nlmf=", bJq0x, "&_nres=", UF9w, "&_nscd=", bpN6H, "&_nstm=", bJu0x, "&_nurl=", bpE6y, "&_ntit=", bJt0x, "&_nref=", bJr0x, "&_nfla=", bJo0x, "&_nssn=", FO3x, "&_nxkey=", (b + "" + Math.random()).substring(6, 20), "&_end1"].join("");
        bJv0x = 0;
        neteaseTracker.callback = null
    }
    bJx0x = "iad";
    neteaseTracker()
})();
(function() {})();
var CryptoJS = CryptoJS || function(u, p) {
    var d = {}
      , l = d.lib = {}
      , s = function() {}
      , t = l.Base = {
        extend: function(a) {
            s.prototype = this;
            var c = new s;
            a && c.mixIn(a);
            c.hasOwnProperty("init") || (c.init = function() {
                c.$super.init.apply(this, arguments)
            }
            );
            c.init.prototype = c;
            c.$super = this;
            return c
        },
        create: function() {
            var a = this.extend();
            a.init.apply(a, arguments);
            return a
        },
        init: function() {},
        mixIn: function(a) {
            for (var c in a)
                a.hasOwnProperty(c) && (this[c] = a[c]);
            a.hasOwnProperty("toString") && (this.toString = a.toString)
        },
        clone: function() {
            return this.init.prototype.extend(this)
        }
    }
      , r = l.WordArray = t.extend({
        init: function(a, c) {
            a = this.words = a || [];
            this.sigBytes = c != p ? c : 4 * a.length
        },
        toString: function(a) {
            return (a || v).stringify(this)
        },
        concat: function(a) {
            var c = this.words
              , e = a.words
              , j = this.sigBytes;
            a = a.sigBytes;
            this.clamp();
            if (j % 4)
                for (var k = 0; k < a; k++)
                    c[j + k >>> 2] |= (e[k >>> 2] >>> 24 - 8 * (k % 4) & 255) << 24 - 8 * ((j + k) % 4);
            else if (65535 < e.length)
                for (k = 0; k < a; k += 4)
                    c[j + k >>> 2] = e[k >>> 2];
            else
                c.push.apply(c, e);
            this.sigBytes += a;
            return this
        },
        clamp: function() {
            var a = this.words
              , c = this.sigBytes;
            a[c >>> 2] &= 4294967295 << 32 - 8 * (c % 4);
            a.length = u.ceil(c / 4)
        },
        clone: function() {
            var a = t.clone.call(this);
            a.words = this.words.slice(0);
            return a
        },
        random: function(a) {
            for (var c = [], e = 0; e < a; e += 4)
                c.push(4294967296 * u.random() | 0);
            return new r.init(c,a)
        }
    })
      , w = d.enc = {}
      , v = w.Hex = {
        stringify: function(a) {
            var c = a.words;
            a = a.sigBytes;
            for (var e = [], j = 0; j < a; j++) {
                var k = c[j >>> 2] >>> 24 - 8 * (j % 4) & 255;
                e.push((k >>> 4).toString(16));
                e.push((k & 15).toString(16))
            }
            return e.join("")
        },
        parse: function(a) {
            for (var c = a.length, e = [], j = 0; j < c; j += 2)
                e[j >>> 3] |= parseInt(a.substr(j, 2), 16) << 24 - 4 * (j % 8);
            return new r.init(e,c / 2)
        }
    }
      , b = w.Latin1 = {
        stringify: function(a) {
            var c = a.words;
            a = a.sigBytes;
            for (var e = [], j = 0; j < a; j++)
                e.push(String.fromCharCode(c[j >>> 2] >>> 24 - 8 * (j % 4) & 255));
            return e.join("")
        },
        parse: function(a) {
            for (var c = a.length, e = [], j = 0; j < c; j++)
                e[j >>> 2] |= (a.charCodeAt(j) & 255) << 24 - 8 * (j % 4);
            return new r.init(e,c)
        }
    }
      , x = w.Utf8 = {
        stringify: function(a) {
            try {
                return decodeURIComponent(escape(b.stringify(a)))
            } catch (c) {
                throw Error("Malformed UTF-8 data")
            }
        },
        parse: function(a) {
            return b.parse(unescape(encodeURIComponent(a)))
        }
    }
      , q = l.BufferedBlockAlgorithm = t.extend({
        reset: function() {
            this.i3x = new r.init;
            this.bJl0x = 0
        },
        UM9D: function(a) {
            "string" == typeof a && (a = x.parse(a));
            this.i3x.concat(a);
            this.bJl0x += a.sigBytes
        },
        zx1x: function(a) {
            var c = this.i3x
              , e = c.words
              , j = c.sigBytes
              , k = this.blockSize
              , b = j / (4 * k)
              , b = a ? u.ceil(b) : u.max((b | 0) - this.bJm0x, 0);
            a = b * k;
            j = u.min(4 * a, j);
            if (a) {
                for (var q = 0; q < a; q += k)
                    this.bJk0x(e, q);
                q = e.splice(0, a);
                c.sigBytes -= j
            }
            return new r.init(q,j)
        },
        clone: function() {
            var a = t.clone.call(this);
            a.i3x = this.i3x.clone();
            return a
        },
        bJm0x: 0
    });
    l.Hasher = q.extend({
        cfg: t.extend(),
        init: function(a) {
            this.cfg = this.cfg.extend(a);
            this.reset()
        },
        reset: function() {
            q.reset.call(this);
            this.bqR6L()
        },
        update: function(a) {
            this.UM9D(a);
            this.zx1x();
            return this
        },
        finalize: function(a) {
            a && this.UM9D(a);
            return this.UP9G()
        },
        blockSize: 16,
        bqN6H: function(a) {
            return function(b, e) {
                return (new a.init(e)).finalize(b)
            }
        },
        cgd7W: function(a) {
            return function(b, e) {
                return (new n.HMAC.init(a,e)).finalize(b)
            }
        }
    });
    var n = d.algo = {};
    return d
}(Math);
(function() {
    var u = CryptoJS
      , p = u.lib.WordArray;
    u.enc.Base64 = {
        stringify: function(d) {
            var l = d.words
              , p = d.sigBytes
              , t = this.bv3x;
            d.clamp();
            d = [];
            for (var r = 0; r < p; r += 3)
                for (var w = (l[r >>> 2] >>> 24 - 8 * (r % 4) & 255) << 16 | (l[r + 1 >>> 2] >>> 24 - 8 * ((r + 1) % 4) & 255) << 8 | l[r + 2 >>> 2] >>> 24 - 8 * ((r + 2) % 4) & 255, v = 0; 4 > v && r + .75 * v < p; v++)
                    d.push(t.charAt(w >>> 6 * (3 - v) & 63));
            if (l = t.charAt(64))
                for (; d.length % 4; )
                    d.push(l);
            return d.join("")
        },
        parse: function(d) {
            var l = d.length
              , s = this.bv3x
              , t = s.charAt(64);
            t && (t = d.indexOf(t),
            -1 != t && (l = t));
            for (var t = [], r = 0, w = 0; w < l; w++)
                if (w % 4) {
                    var v = s.indexOf(d.charAt(w - 1)) << 2 * (w % 4)
                      , b = s.indexOf(d.charAt(w)) >>> 6 - 2 * (w % 4);
                    t[r >>> 2] |= (v | b) << 24 - 8 * (r % 4);
                    r++
                }
            return p.create(t, r)
        },
        bv3x: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
    }
})();
(function(u) {
    function p(b, n, a, c, e, j, k) {
        b = b + (n & a | ~n & c) + e + k;
        return (b << j | b >>> 32 - j) + n
    }
    function d(b, n, a, c, e, j, k) {
        b = b + (n & c | a & ~c) + e + k;
        return (b << j | b >>> 32 - j) + n
    }
    function l(b, n, a, c, e, j, k) {
        b = b + (n ^ a ^ c) + e + k;
        return (b << j | b >>> 32 - j) + n
    }
    function s(b, n, a, c, e, j, k) {
        b = b + (a ^ (n | ~c)) + e + k;
        return (b << j | b >>> 32 - j) + n
    }
    for (var t = CryptoJS, r = t.lib, w = r.WordArray, v = r.Hasher, r = t.algo, b = [], x = 0; 64 > x; x++)
        b[x] = 4294967296 * u.abs(u.sin(x + 1)) | 0;
    r = r.MD5 = v.extend({
        bqR6L: function() {
            this.dF4J = new w.init([1732584193, 4023233417, 2562383102, 271733878])
        },
        bJk0x: function(q, n) {
            for (var a = 0; 16 > a; a++) {
                var c = n + a
                  , e = q[c];
                q[c] = (e << 8 | e >>> 24) & 16711935 | (e << 24 | e >>> 8) & 4278255360
            }
            var a = this.dF4J.words
              , c = q[n + 0]
              , e = q[n + 1]
              , j = q[n + 2]
              , k = q[n + 3]
              , z = q[n + 4]
              , r = q[n + 5]
              , t = q[n + 6]
              , w = q[n + 7]
              , v = q[n + 8]
              , A = q[n + 9]
              , B = q[n + 10]
              , C = q[n + 11]
              , u = q[n + 12]
              , D = q[n + 13]
              , E = q[n + 14]
              , x = q[n + 15]
              , f = a[0]
              , m = a[1]
              , g = a[2]
              , h = a[3]
              , f = p(f, m, g, h, c, 7, b[0])
              , h = p(h, f, m, g, e, 12, b[1])
              , g = p(g, h, f, m, j, 17, b[2])
              , m = p(m, g, h, f, k, 22, b[3])
              , f = p(f, m, g, h, z, 7, b[4])
              , h = p(h, f, m, g, r, 12, b[5])
              , g = p(g, h, f, m, t, 17, b[6])
              , m = p(m, g, h, f, w, 22, b[7])
              , f = p(f, m, g, h, v, 7, b[8])
              , h = p(h, f, m, g, A, 12, b[9])
              , g = p(g, h, f, m, B, 17, b[10])
              , m = p(m, g, h, f, C, 22, b[11])
              , f = p(f, m, g, h, u, 7, b[12])
              , h = p(h, f, m, g, D, 12, b[13])
              , g = p(g, h, f, m, E, 17, b[14])
              , m = p(m, g, h, f, x, 22, b[15])
              , f = d(f, m, g, h, e, 5, b[16])
              , h = d(h, f, m, g, t, 9, b[17])
              , g = d(g, h, f, m, C, 14, b[18])
              , m = d(m, g, h, f, c, 20, b[19])
              , f = d(f, m, g, h, r, 5, b[20])
              , h = d(h, f, m, g, B, 9, b[21])
              , g = d(g, h, f, m, x, 14, b[22])
              , m = d(m, g, h, f, z, 20, b[23])
              , f = d(f, m, g, h, A, 5, b[24])
              , h = d(h, f, m, g, E, 9, b[25])
              , g = d(g, h, f, m, k, 14, b[26])
              , m = d(m, g, h, f, v, 20, b[27])
              , f = d(f, m, g, h, D, 5, b[28])
              , h = d(h, f, m, g, j, 9, b[29])
              , g = d(g, h, f, m, w, 14, b[30])
              , m = d(m, g, h, f, u, 20, b[31])
              , f = l(f, m, g, h, r, 4, b[32])
              , h = l(h, f, m, g, v, 11, b[33])
              , g = l(g, h, f, m, C, 16, b[34])
              , m = l(m, g, h, f, E, 23, b[35])
              , f = l(f, m, g, h, e, 4, b[36])
              , h = l(h, f, m, g, z, 11, b[37])
              , g = l(g, h, f, m, w, 16, b[38])
              , m = l(m, g, h, f, B, 23, b[39])
              , f = l(f, m, g, h, D, 4, b[40])
              , h = l(h, f, m, g, c, 11, b[41])
              , g = l(g, h, f, m, k, 16, b[42])
              , m = l(m, g, h, f, t, 23, b[43])
              , f = l(f, m, g, h, A, 4, b[44])
              , h = l(h, f, m, g, u, 11, b[45])
              , g = l(g, h, f, m, x, 16, b[46])
              , m = l(m, g, h, f, j, 23, b[47])
              , f = s(f, m, g, h, c, 6, b[48])
              , h = s(h, f, m, g, w, 10, b[49])
              , g = s(g, h, f, m, E, 15, b[50])
              , m = s(m, g, h, f, r, 21, b[51])
              , f = s(f, m, g, h, u, 6, b[52])
              , h = s(h, f, m, g, k, 10, b[53])
              , g = s(g, h, f, m, B, 15, b[54])
              , m = s(m, g, h, f, e, 21, b[55])
              , f = s(f, m, g, h, v, 6, b[56])
              , h = s(h, f, m, g, x, 10, b[57])
              , g = s(g, h, f, m, t, 15, b[58])
              , m = s(m, g, h, f, D, 21, b[59])
              , f = s(f, m, g, h, z, 6, b[60])
              , h = s(h, f, m, g, C, 10, b[61])
              , g = s(g, h, f, m, j, 15, b[62])
              , m = s(m, g, h, f, A, 21, b[63]);
            a[0] = a[0] + f | 0;
            a[1] = a[1] + m | 0;
            a[2] = a[2] + g | 0;
            a[3] = a[3] + h | 0
        },
        UP9G: function() {
            var b = this.i3x
              , n = b.words
              , a = 8 * this.bJl0x
              , c = 8 * b.sigBytes;
            n[c >>> 5] |= 128 << 24 - c % 32;
            var e = u.floor(a / 4294967296);
            n[(c + 64 >>> 9 << 4) + 15] = (e << 8 | e >>> 24) & 16711935 | (e << 24 | e >>> 8) & 4278255360;
            n[(c + 64 >>> 9 << 4) + 14] = (a << 8 | a >>> 24) & 16711935 | (a << 24 | a >>> 8) & 4278255360;
            b.sigBytes = 4 * (n.length + 1);
            this.zx1x();
            b = this.dF4J;
            n = b.words;
            for (a = 0; 4 > a; a++)
                c = n[a],
                n[a] = (c << 8 | c >>> 24) & 16711935 | (c << 24 | c >>> 8) & 4278255360;
            return b
        },
        clone: function() {
            var b = v.clone.call(this);
            b.dF4J = this.dF4J.clone();
            return b
        }
    });
    t.MD5 = v.bqN6H(r);
    t.HmacMD5 = v.cgd7W(r)
})(Math);
(function() {
    var u = CryptoJS
      , p = u.lib
      , d = p.Base
      , l = p.WordArray
      , p = u.algo
      , s = p.EvpKDF = d.extend({
        cfg: d.extend({
            keySize: 4,
            hasher: p.MD5,
            iterations: 1
        }),
        init: function(d) {
            this.cfg = this.cfg.extend(d)
        },
        compute: function(d, r) {
            for (var p = this.cfg, s = p.hasher.create(), b = l.create(), u = b.words, q = p.keySize, p = p.iterations; u.length < q; ) {
                n && s.update(n);
                var n = s.update(d).finalize(r);
                s.reset();
                for (var a = 1; a < p; a++)
                    n = s.finalize(n),
                    s.reset();
                b.concat(n)
            }
            b.sigBytes = 4 * q;
            return b
        }
    });
    u.EvpKDF = function(d, l, p) {
        return s.create(p).compute(d, l)
    }
})();
CryptoJS.lib.Cipher || function(u) {
    var p = CryptoJS
      , d = p.lib
      , l = d.Base
      , s = d.WordArray
      , t = d.BufferedBlockAlgorithm
      , r = p.enc.Base64
      , w = p.algo.EvpKDF
      , v = d.Cipher = t.extend({
        cfg: l.extend(),
        createEncryptor: function(e, a) {
            return this.create(this.bqY6S, e, a)
        },
        createDecryptor: function(e, a) {
            return this.create(this.cgc7V, e, a)
        },
        init: function(e, a, b) {
            this.cfg = this.cfg.extend(b);
            this.bJj0x = e;
            this.J3x = a;
            this.reset()
        },
        reset: function() {
            t.reset.call(this);
            this.bqR6L()
        },
        process: function(e) {
            this.UM9D(e);
            return this.zx1x()
        },
        finalize: function(e) {
            e && this.UM9D(e);
            return this.UP9G()
        },
        keySize: 4,
        ivSize: 4,
        bqY6S: 1,
        cgc7V: 2,
        bqN6H: function(e) {
            return {
                encrypt: function(b, k, d) {
                    return ("string" == typeof k ? c : a).encrypt(e, b, k, d)
                },
                decrypt: function(b, k, d) {
                    return ("string" == typeof k ? c : a).decrypt(e, b, k, d)
                }
            }
        }
    });
    d.StreamCipher = v.extend({
        UP9G: function() {
            return this.zx1x(!0)
        },
        blockSize: 1
    });
    var b = p.mode = {}
      , x = function(e, a, b) {
        var c = this.bJi0x;
        c ? this.bJi0x = u : c = this.bJg0x;
        for (var d = 0; d < b; d++)
            e[a + d] ^= c[d]
    }
      , q = (d.BlockCipherMode = l.extend({
        createEncryptor: function(e, a) {
            return this.Encryptor.create(e, a)
        },
        createDecryptor: function(e, a) {
            return this.Decryptor.create(e, a)
        },
        init: function(e, a) {
            this.bJf0x = e;
            this.bJi0x = a
        }
    })).extend();
    q.Encryptor = q.extend({
        processBlock: function(e, a) {
            var b = this.bJf0x
              , c = b.blockSize;
            x.call(this, e, a, c);
            b.encryptBlock(e, a);
            this.bJg0x = e.slice(a, a + c)
        }
    });
    q.Decryptor = q.extend({
        processBlock: function(e, a) {
            var b = this.bJf0x
              , c = b.blockSize
              , d = e.slice(a, a + c);
            b.decryptBlock(e, a);
            x.call(this, e, a, c);
            this.bJg0x = d
        }
    });
    b = b.CBC = q;
    q = (p.pad = {}).Pkcs7 = {
        pad: function(a, b) {
            for (var c = 4 * b, c = c - a.sigBytes % c, d = c << 24 | c << 16 | c << 8 | c, l = [], n = 0; n < c; n += 4)
                l.push(d);
            c = s.create(l, c);
            a.concat(c)
        },
        unpad: function(a) {
            a.sigBytes -= a.words[a.sigBytes - 1 >>> 2] & 255
        }
    };
    d.BlockCipher = v.extend({
        cfg: v.cfg.extend({
            mode: b,
            padding: q
        }),
        reset: function() {
            v.reset.call(this);
            var a = this.cfg
              , b = a.iv
              , a = a.mode;
            if (this.bJj0x == this.bqY6S)
                var c = a.createEncryptor;
            else
                c = a.createDecryptor,
                this.bJm0x = 1;
            this.eG5L = c.call(a, this, b && b.words)
        },
        bJk0x: function(a, b) {
            this.eG5L.processBlock(a, b)
        },
        UP9G: function() {
            var a = this.cfg.padding;
            if (this.bJj0x == this.bqY6S) {
                a.pad(this.i3x, this.blockSize);
                var b = this.zx1x(!0)
            } else
                b = this.zx1x(!0),
                a.unpad(b);
            return b
        },
        blockSize: 4
    });
    var n = d.CipherParams = l.extend({
        init: function(a) {
            this.mixIn(a)
        },
        toString: function(a) {
            return (a || this.formatter).stringify(this)
        }
    })
      , b = (p.format = {}).OpenSSL = {
        stringify: function(a) {
            var b = a.ciphertext;
            a = a.salt;
            return (a ? s.create([1398893684, 1701076831]).concat(a).concat(b) : b).toString(r)
        },
        parse: function(a) {
            a = r.parse(a);
            var b = a.words;
            if (1398893684 == b[0] && 1701076831 == b[1]) {
                var c = s.create(b.slice(2, 4));
                b.splice(0, 4);
                a.sigBytes -= 16
            }
            return n.create({
                ciphertext: a,
                salt: c
            })
        }
    }
      , a = d.SerializableCipher = l.extend({
        cfg: l.extend({
            format: b
        }),
        encrypt: function(a, b, c, d) {
            d = this.cfg.extend(d);
            var l = a.createEncryptor(c, d);
            b = l.finalize(b);
            l = l.cfg;
            return n.create({
                ciphertext: b,
                key: c,
                iv: l.iv,
                algorithm: a,
                mode: l.mode,
                padding: l.padding,
                blockSize: a.blockSize,
                formatter: d.format
            })
        },
        decrypt: function(a, b, c, d) {
            d = this.cfg.extend(d);
            b = this.YX1x(b, d.format);
            return a.createDecryptor(c, d).finalize(b.ciphertext)
        },
        YX1x: function(a, b) {
            return "string" == typeof a ? b.parse(a, this) : a
        }
    })
      , p = (p.kdf = {}).OpenSSL = {
        execute: function(a, b, c, d) {
            d || (d = s.random(8));
            a = w.create({
                keySize: b + c
            }).compute(a, d);
            c = s.create(a.words.slice(b), 4 * c);
            a.sigBytes = 4 * b;
            return n.create({
                key: a,
                iv: c,
                salt: d
            })
        }
    }
      , c = d.PasswordBasedCipher = a.extend({
        cfg: a.cfg.extend({
            kdf: p
        }),
        encrypt: function(b, c, d, l) {
            l = this.cfg.extend(l);
            d = l.kdf.execute(d, b.keySize, b.ivSize);
            l.iv = d.iv;
            b = a.encrypt.call(this, b, c, d.key, l);
            b.mixIn(d);
            return b
        },
        decrypt: function(b, c, d, l) {
            l = this.cfg.extend(l);
            c = this.YX1x(c, l.format);
            d = l.kdf.execute(d, b.keySize, b.ivSize, c.salt);
            l.iv = d.iv;
            return a.decrypt.call(this, b, c, d.key, l)
        }
    })
}();
(function() {
    for (var u = CryptoJS, p = u.lib.BlockCipher, d = u.algo, l = [], s = [], t = [], r = [], w = [], v = [], b = [], x = [], q = [], n = [], a = [], c = 0; 256 > c; c++)
        a[c] = 128 > c ? c << 1 : c << 1 ^ 283;
    for (var e = 0, j = 0, c = 0; 256 > c; c++) {
        var k = j ^ j << 1 ^ j << 2 ^ j << 3 ^ j << 4
          , k = k >>> 8 ^ k & 255 ^ 99;
        l[e] = k;
        s[k] = e;
        var z = a[e]
          , F = a[z]
          , G = a[F]
          , y = 257 * a[k] ^ 16843008 * k;
        t[e] = y << 24 | y >>> 8;
        r[e] = y << 16 | y >>> 16;
        w[e] = y << 8 | y >>> 24;
        v[e] = y;
        y = 16843009 * G ^ 65537 * F ^ 257 * z ^ 16843008 * e;
        b[k] = y << 24 | y >>> 8;
        x[k] = y << 16 | y >>> 16;
        q[k] = y << 8 | y >>> 24;
        n[k] = y;
        e ? (e = z ^ a[a[a[G ^ z]]],
        j ^= a[a[j]]) : e = j = 1
    }
    var H = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54]
      , d = d.AES = p.extend({
        bqR6L: function() {
            for (var a = this.J3x, c = a.words, d = a.sigBytes / 4, a = 4 * ((this.cfI7B = d + 6) + 1), e = this.cfF7y = [], j = 0; j < a; j++)
                if (j < d)
                    e[j] = c[j];
                else {
                    var k = e[j - 1];
                    j % d ? 6 < d && 4 == j % d && (k = l[k >>> 24] << 24 | l[k >>> 16 & 255] << 16 | l[k >>> 8 & 255] << 8 | l[k & 255]) : (k = k << 8 | k >>> 24,
                    k = l[k >>> 24] << 24 | l[k >>> 16 & 255] << 16 | l[k >>> 8 & 255] << 8 | l[k & 255],
                    k ^= H[j / d | 0] << 24);
                    e[j] = e[j - d] ^ k
                }
            c = this.cfD7w = [];
            for (d = 0; d < a; d++)
                j = a - d,
                k = d % 4 ? e[j] : e[j - 4],
                c[d] = 4 > d || 4 >= j ? k : b[l[k >>> 24]] ^ x[l[k >>> 16 & 255]] ^ q[l[k >>> 8 & 255]] ^ n[l[k & 255]]
        },
        encryptBlock: function(a, b) {
            this.bJb0x(a, b, this.cfF7y, t, r, w, v, l)
        },
        decryptBlock: function(a, c) {
            var d = a[c + 1];
            a[c + 1] = a[c + 3];
            a[c + 3] = d;
            this.bJb0x(a, c, this.cfD7w, b, x, q, n, s);
            d = a[c + 1];
            a[c + 1] = a[c + 3];
            a[c + 3] = d
        },
        bJb0x: function(a, b, c, d, e, j, l, f) {
            for (var m = this.cfI7B, g = a[b] ^ c[0], h = a[b + 1] ^ c[1], k = a[b + 2] ^ c[2], n = a[b + 3] ^ c[3], p = 4, r = 1; r < m; r++)
                var q = d[g >>> 24] ^ e[h >>> 16 & 255] ^ j[k >>> 8 & 255] ^ l[n & 255] ^ c[p++]
                  , s = d[h >>> 24] ^ e[k >>> 16 & 255] ^ j[n >>> 8 & 255] ^ l[g & 255] ^ c[p++]
                  , t = d[k >>> 24] ^ e[n >>> 16 & 255] ^ j[g >>> 8 & 255] ^ l[h & 255] ^ c[p++]
                  , n = d[n >>> 24] ^ e[g >>> 16 & 255] ^ j[h >>> 8 & 255] ^ l[k & 255] ^ c[p++]
                  , g = q
                  , h = s
                  , k = t;
            q = (f[g >>> 24] << 24 | f[h >>> 16 & 255] << 16 | f[k >>> 8 & 255] << 8 | f[n & 255]) ^ c[p++];
            s = (f[h >>> 24] << 24 | f[k >>> 16 & 255] << 16 | f[n >>> 8 & 255] << 8 | f[g & 255]) ^ c[p++];
            t = (f[k >>> 24] << 24 | f[n >>> 16 & 255] << 16 | f[g >>> 8 & 255] << 8 | f[h & 255]) ^ c[p++];
            n = (f[n >>> 24] << 24 | f[g >>> 16 & 255] << 16 | f[h >>> 8 & 255] << 8 | f[k & 255]) ^ c[p++];
            a[b] = q;
            a[b + 1] = s;
            a[b + 2] = t;
            a[b + 3] = n
        },
        keySize: 8
    });
    u.AES = p.bqN6H(d)
})();
function RSAKeyPair(a, b, c) {
    this.e = biFromHex(a),
    this.d = biFromHex(b),
    this.m = biFromHex(c),
    this.chunkSize = 2 * biHighIndex(this.m),
    this.radix = 16,
    this.barrett = new BarrettMu(this.m)
}
function twoDigit(a) {
    return (10 > a ? "0" : "") + String(a)
}
function encryptedString(a, b) {
    for (var f, g, h, i, j, k, l, c = new Array, d = b.length, e = 0; d > e; )
        c[e] = b.charCodeAt(e),
        e++;
    for (; 0 != c.length % a.chunkSize; )
        c[e++] = 0;
    for (f = c.length,
    g = "",
    e = 0; f > e; e += a.chunkSize) {
        for (j = new BigInt,
        h = 0,
        i = e; i < e + a.chunkSize; ++h)
            j.digits[h] = c[i++],
            j.digits[h] += c[i++] << 8;
        k = a.barrett.powMod(j, a.e),
        l = 16 == a.radix ? biToHex(k) : biToString(k, a.radix),
        g += l + " "
    }
    return g.substring(0, g.length - 1)
}
function decryptedString(a, b) {
    var e, f, g, h, c = b.split(" "), d = "";
    for (e = 0; e < c.length; ++e)
        for (h = 16 == a.radix ? biFromHex(c[e]) : biFromString(c[e], a.radix),
        g = a.barrett.powMod(h, a.d),
        f = 0; f <= biHighIndex(g); ++f)
            d += String.fromCharCode(255 & g.digits[f], g.digits[f] >> 8);
    return 0 == d.charCodeAt(d.length - 1) && (d = d.substring(0, d.length - 1)),
    d
}
function setMaxDigits(a) {
    maxDigits = a,
    ZERO_ARRAY = new Array(maxDigits);
    for (var b = 0; b < ZERO_ARRAY.length; b++)
        ZERO_ARRAY[b] = 0;
    bigZero = new BigInt,
    bigOne = new BigInt,
    bigOne.digits[0] = 1
}
function BigInt(a) {
    this.digits = "boolean" == typeof a && 1 == a ? null : ZERO_ARRAY.slice(0),
    this.isNeg = !1
}
function biFromDecimal(a) {
    for (var d, e, f, b = "-" == a.charAt(0), c = b ? 1 : 0; c < a.length && "0" == a.charAt(c); )
        ++c;
    if (c == a.length)
        d = new BigInt;
    else {
        for (e = a.length - c,
        f = e % dpl10,
        0 == f && (f = dpl10),
        d = biFromNumber(Number(a.substr(c, f))),
        c += f; c < a.length; )
            d = biAdd(biMultiply(d, lr10), biFromNumber(Number(a.substr(c, dpl10)))),
            c += dpl10;
        d.isNeg = b
    }
    return d
}
function biCopy(a) {
    var b = new BigInt(!0);
    return b.digits = a.digits.slice(0),
    b.isNeg = a.isNeg,
    b
}
function biFromNumber(a) {
    var c, b = new BigInt;
    for (b.isNeg = 0 > a,
    a = Math.abs(a),
    c = 0; a > 0; )
        b.digits[c++] = a & maxDigitVal,
        a >>= biRadixBits;
    return b
}
function reverseStr(a) {
    var c, b = "";
    for (c = a.length - 1; c > -1; --c)
        b += a.charAt(c);
    return b
}
function biToString(a, b) {
    var d, e, c = new BigInt;
    for (c.digits[0] = b,
    d = biDivideModulo(a, c),
    e = hexatrigesimalToChar[d[1].digits[0]]; 1 == biCompare(d[0], bigZero); )
        d = biDivideModulo(d[0], c),
        digit = d[1].digits[0],
        e += hexatrigesimalToChar[d[1].digits[0]];
    return (a.isNeg ? "-" : "") + reverseStr(e)
}
function biToDecimal(a) {
    var c, d, b = new BigInt;
    for (b.digits[0] = 10,
    c = biDivideModulo(a, b),
    d = String(c[1].digits[0]); 1 == biCompare(c[0], bigZero); )
        c = biDivideModulo(c[0], b),
        d += String(c[1].digits[0]);
    return (a.isNeg ? "-" : "") + reverseStr(d)
}
function digitToHex(a) {
    var b = 15
      , c = "";
    for (i = 0; 4 > i; ++i)
        c += hexToChar[a & b],
        a >>>= 4;
    return reverseStr(c)
}
function biToHex(a) {
    var d, b = "";
    for (biHighIndex(a),
    d = biHighIndex(a); d > -1; --d)
        b += digitToHex(a.digits[d]);
    return b
}
function charToHex(a) {
    var h, b = 48, c = b + 9, d = 97, e = d + 25, f = 65, g = 90;
    return h = a >= b && c >= a ? a - b : a >= f && g >= a ? 10 + a - f : a >= d && e >= a ? 10 + a - d : 0
}
function hexToDigit(a) {
    var d, b = 0, c = Math.min(a.length, 4);
    for (d = 0; c > d; ++d)
        b <<= 4,
        b |= charToHex(a.charCodeAt(d));
    return b
}
function biFromHex(a) {
    var d, e, b = new BigInt, c = a.length;
    for (d = c,
    e = 0; d > 0; d -= 4,
    ++e)
        b.digits[e] = hexToDigit(a.substr(Math.max(d - 4, 0), Math.min(d, 4)));
    return b
}
function biFromString(a, b) {
    var g, h, i, j, c = "-" == a.charAt(0), d = c ? 1 : 0, e = new BigInt, f = new BigInt;
    for (f.digits[0] = 1,
    g = a.length - 1; g >= d; g--)
        h = a.charCodeAt(g),
        i = charToHex(h),
        j = biMultiplyDigit(f, i),
        e = biAdd(e, j),
        f = biMultiplyDigit(f, b);
    return e.isNeg = c,
    e
}
function biDump(a) {
    return (a.isNeg ? "-" : "") + a.digits.join(" ")
}
function biAdd(a, b) {
    var c, d, e, f;
    if (a.isNeg != b.isNeg)
        b.isNeg = !b.isNeg,
        c = biSubtract(a, b),
        b.isNeg = !b.isNeg;
    else {
        for (c = new BigInt,
        d = 0,
        f = 0; f < a.digits.length; ++f)
            e = a.digits[f] + b.digits[f] + d,
            c.digits[f] = 65535 & e,
            d = Number(e >= biRadix);
        c.isNeg = a.isNeg
    }
    return c
}
function biSubtract(a, b) {
    var c, d, e, f;
    if (a.isNeg != b.isNeg)
        b.isNeg = !b.isNeg,
        c = biAdd(a, b),
        b.isNeg = !b.isNeg;
    else {
        for (c = new BigInt,
        e = 0,
        f = 0; f < a.digits.length; ++f)
            d = a.digits[f] - b.digits[f] + e,
            c.digits[f] = 65535 & d,
            c.digits[f] < 0 && (c.digits[f] += biRadix),
            e = 0 - Number(0 > d);
        if (-1 == e) {
            for (e = 0,
            f = 0; f < a.digits.length; ++f)
                d = 0 - c.digits[f] + e,
                c.digits[f] = 65535 & d,
                c.digits[f] < 0 && (c.digits[f] += biRadix),
                e = 0 - Number(0 > d);
            c.isNeg = !a.isNeg
        } else
            c.isNeg = a.isNeg
    }
    return c
}
function biHighIndex(a) {
    for (var b = a.digits.length - 1; b > 0 && 0 == a.digits[b]; )
        --b;
    return b
}
function biNumBits(a) {
    var e, b = biHighIndex(a), c = a.digits[b], d = (b + 1) * bitsPerDigit;
    for (e = d; e > d - bitsPerDigit && 0 == (32768 & c); --e)
        c <<= 1;
    return e
}
function biMultiply(a, b) {
    var d, h, i, k, c = new BigInt, e = biHighIndex(a), f = biHighIndex(b);
    for (k = 0; f >= k; ++k) {
        for (d = 0,
        i = k,
        j = 0; e >= j; ++j,
        ++i)
            h = c.digits[i] + a.digits[j] * b.digits[k] + d,
            c.digits[i] = h & maxDigitVal,
            d = h >>> biRadixBits;
        c.digits[k + e + 1] = d
    }
    return c.isNeg = a.isNeg != b.isNeg,
    c
}
function biMultiplyDigit(a, b) {
    var c, d, e, f;
    for (result = new BigInt,
    c = biHighIndex(a),
    d = 0,
    f = 0; c >= f; ++f)
        e = result.digits[f] + a.digits[f] * b + d,
        result.digits[f] = e & maxDigitVal,
        d = e >>> biRadixBits;
    return result.digits[1 + c] = d,
    result
}
function arrayCopy(a, b, c, d, e) {
    var g, h, f = Math.min(b + e, a.length);
    for (g = b,
    h = d; f > g; ++g,
    ++h)
        c[h] = a[g]
}
function biShiftLeft(a, b) {
    var e, f, g, h, c = Math.floor(b / bitsPerDigit), d = new BigInt;
    for (arrayCopy(a.digits, 0, d.digits, c, d.digits.length - c),
    e = b % bitsPerDigit,
    f = bitsPerDigit - e,
    g = d.digits.length - 1,
    h = g - 1; g > 0; --g,
    --h)
        d.digits[g] = d.digits[g] << e & maxDigitVal | (d.digits[h] & highBitMasks[e]) >>> f;
    return d.digits[0] = d.digits[g] << e & maxDigitVal,
    d.isNeg = a.isNeg,
    d
}
function biShiftRight(a, b) {
    var e, f, g, h, c = Math.floor(b / bitsPerDigit), d = new BigInt;
    for (arrayCopy(a.digits, c, d.digits, 0, a.digits.length - c),
    e = b % bitsPerDigit,
    f = bitsPerDigit - e,
    g = 0,
    h = g + 1; g < d.digits.length - 1; ++g,
    ++h)
        d.digits[g] = d.digits[g] >>> e | (d.digits[h] & lowBitMasks[e]) << f;
    return d.digits[d.digits.length - 1] >>>= e,
    d.isNeg = a.isNeg,
    d
}
function biMultiplyByRadixPower(a, b) {
    var c = new BigInt;
    return arrayCopy(a.digits, 0, c.digits, b, c.digits.length - b),
    c
}
function biDivideByRadixPower(a, b) {
    var c = new BigInt;
    return arrayCopy(a.digits, b, c.digits, 0, c.digits.length - b),
    c
}
function biModuloByRadixPower(a, b) {
    var c = new BigInt;
    return arrayCopy(a.digits, 0, c.digits, 0, b),
    c
}
function biCompare(a, b) {
    if (a.isNeg != b.isNeg)
        return 1 - 2 * Number(a.isNeg);
    for (var c = a.digits.length - 1; c >= 0; --c)
        if (a.digits[c] != b.digits[c])
            return a.isNeg ? 1 - 2 * Number(a.digits[c] > b.digits[c]) : 1 - 2 * Number(a.digits[c] < b.digits[c]);
    return 0
}
function biDivideModulo(a, b) {
    var f, g, h, i, j, k, l, m, n, o, p, q, r, s, c = biNumBits(a), d = biNumBits(b), e = b.isNeg;
    if (d > c)
        return a.isNeg ? (f = biCopy(bigOne),
        f.isNeg = !b.isNeg,
        a.isNeg = !1,
        b.isNeg = !1,
        g = biSubtract(b, a),
        a.isNeg = !0,
        b.isNeg = e) : (f = new BigInt,
        g = biCopy(a)),
        new Array(f,g);
    for (f = new BigInt,
    g = a,
    h = Math.ceil(d / bitsPerDigit) - 1,
    i = 0; b.digits[h] < biHalfRadix; )
        b = biShiftLeft(b, 1),
        ++i,
        ++d,
        h = Math.ceil(d / bitsPerDigit) - 1;
    for (g = biShiftLeft(g, i),
    c += i,
    j = Math.ceil(c / bitsPerDigit) - 1,
    k = biMultiplyByRadixPower(b, j - h); -1 != biCompare(g, k); )
        ++f.digits[j - h],
        g = biSubtract(g, k);
    for (l = j; l > h; --l) {
        for (m = l >= g.digits.length ? 0 : g.digits[l],
        n = l - 1 >= g.digits.length ? 0 : g.digits[l - 1],
        o = l - 2 >= g.digits.length ? 0 : g.digits[l - 2],
        p = h >= b.digits.length ? 0 : b.digits[h],
        q = h - 1 >= b.digits.length ? 0 : b.digits[h - 1],
        f.digits[l - h - 1] = m == p ? maxDigitVal : Math.floor((m * biRadix + n) / p),
        r = f.digits[l - h - 1] * (p * biRadix + q),
        s = m * biRadixSquared + (n * biRadix + o); r > s; )
            --f.digits[l - h - 1],
            r = f.digits[l - h - 1] * (p * biRadix | q),
            s = m * biRadix * biRadix + (n * biRadix + o);
        k = biMultiplyByRadixPower(b, l - h - 1),
        g = biSubtract(g, biMultiplyDigit(k, f.digits[l - h - 1])),
        g.isNeg && (g = biAdd(g, k),
        --f.digits[l - h - 1])
    }
    return g = biShiftRight(g, i),
    f.isNeg = a.isNeg != e,
    a.isNeg && (f = e ? biAdd(f, bigOne) : biSubtract(f, bigOne),
    b = biShiftRight(b, i),
    g = biSubtract(b, g)),
    0 == g.digits[0] && 0 == biHighIndex(g) && (g.isNeg = !1),
    new Array(f,g)
}
function biDivide(a, b) {
    return biDivideModulo(a, b)[0]
}
function biModulo(a, b) {
    return biDivideModulo(a, b)[1]
}
function biMultiplyMod(a, b, c) {
    return biModulo(biMultiply(a, b), c)
}
function biPow(a, b) {
    for (var c = bigOne, d = a; ; ) {
        if (0 != (1 & b) && (c = biMultiply(c, d)),
        b >>= 1,
        0 == b)
            break;
        d = biMultiply(d, d)
    }
    return c
}
function biPowMod(a, b, c) {
    for (var d = bigOne, e = a, f = b; ; ) {
        if (0 != (1 & f.digits[0]) && (d = biMultiplyMod(d, e, c)),
        f = biShiftRight(f, 1),
        0 == f.digits[0] && 0 == biHighIndex(f))
            break;
        e = biMultiplyMod(e, e, c)
    }
    return d
}
function BarrettMu(a) {
    this.modulus = biCopy(a),
    this.k = biHighIndex(this.modulus) + 1;
    var b = new BigInt;
    b.digits[2 * this.k] = 1,
    this.mu = biDivide(b, this.modulus),
    this.bkplus1 = new BigInt,
    this.bkplus1.digits[this.k + 1] = 1,
    this.modulo = BarrettMu_modulo,
    this.multiplyMod = BarrettMu_multiplyMod,
    this.powMod = BarrettMu_powMod
}
function BarrettMu_modulo(a) {
    var i, b = biDivideByRadixPower(a, this.k - 1), c = biMultiply(b, this.mu), d = biDivideByRadixPower(c, this.k + 1), e = biModuloByRadixPower(a, this.k + 1), f = biMultiply(d, this.modulus), g = biModuloByRadixPower(f, this.k + 1), h = biSubtract(e, g);
    for (h.isNeg && (h = biAdd(h, this.bkplus1)),
    i = biCompare(h, this.modulus) >= 0; i; )
        h = biSubtract(h, this.modulus),
        i = biCompare(h, this.modulus) >= 0;
    return h
}
function BarrettMu_multiplyMod(a, b) {
    var c = biMultiply(a, b);
    return this.modulo(c)
}
function BarrettMu_powMod(a, b) {
    var d, e, c = new BigInt;
    for (c.digits[0] = 1,
    d = a,
    e = b; ; ) {
        if (0 != (1 & e.digits[0]) && (c = this.multiplyMod(c, d)),
        e = biShiftRight(e, 1),
        0 == e.digits[0] && 0 == biHighIndex(e))
            break;
        d = this.multiplyMod(d, d)
    }
    return c
}
var maxDigits, ZERO_ARRAY, bigZero, bigOne, dpl10, lr10, hexatrigesimalToChar, hexToChar, highBitMasks, lowBitMasks, biRadixBase = 2, biRadixBits = 16, bitsPerDigit = biRadixBits, biRadix = 65536, biHalfRadix = biRadix >>> 1, biRadixSquared = biRadix * biRadix, maxDigitVal = biRadix - 1, maxInteger = 9999999999999998;
setMaxDigits(20),
dpl10 = 15,
lr10 = biFromNumber(1e15),
hexatrigesimalToChar = new Array("0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"),
hexToChar = new Array("0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"),
highBitMasks = new Array(0,32768,49152,57344,61440,63488,64512,65024,65280,65408,65472,65504,65520,65528,65532,65534,65535),
lowBitMasks = new Array(0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535);
!function() {
    function a(a) {
        var d, e, b = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", c = "";
        for (d = 0; a > d; d += 1)
            e = Math.random() * b.length,
            e = Math.floor(e),
            c += b.charAt(e);
        return c
    }
    function b(a, b) {
        window.console.info('aaaaa')
        window.console.info(a)
        window.console.info(b)
        window.console.info(11111111)
        var c = CryptoJS.enc.Utf8.parse(b)
          , d = CryptoJS.enc.Utf8.parse("0102030405060708")
          , e = CryptoJS.enc.Utf8.parse(a)
          , f = CryptoJS.AES.encrypt(e, c, {
            iv: d,
            mode: CryptoJS.mode.CBC
        });
        return f.toString()
    }
    function c(a, b, c) {
        var d, e;
        return setMaxDigits(131),
        d = new RSAKeyPair(b,"",c),
        e = encryptedString(d, a)
    }
    function d(d, e, f, g) {
        var h = {}, i = a(16);
        return h.encText = b(d, g),
        h.encText = b(h.encText, i),
        h.encSecKey = c('FFFFFFFFFFFFFFFF', e, f),
        h
    }
    function e(a, b, d, e) {
        var f = {};
        return f.encText = c(a + e, b, d),
        f
    }
    window.asrsea = d,
    window.ecnonasr = e
}();
(function() {
    var c2x = NEJ.P
      , dO4S = c2x("nej.g")
      , v3x = c2x("nej.j")
      , k3x = c2x("nej.u")
      , KA5F = c2x("nm.x.ek");
    KA5F.emj = {
        "色": "00e0b",
        "流感": "509f6",
        "这边": "259df",
        "弱": "8642d",
        "嘴唇": "bc356",
        "亲": "62901",
        "开心": "477df",
        "呲牙": "22677",
        "憨笑": "ec152",
        "猫": "b5ff6",
        "皱眉": "8ace6",
        "幽灵": "15bb7",
        "蛋糕": "b7251",
        "发怒": "52b3a",
        "大哭": "b17a8",
        "兔子": "76aea",
        "星星": "8a5aa",
        "钟情": "76d2e",
        "牵手": "41762",
        "公鸡": "9ec4e",
        "爱意": "e341f",
        "禁止": "56135",
        "狗": "fccf6",
        "亲亲": "95280",
        "叉": "104e0",
        "礼物": "312ec",
        "晕": "bda92",
        "呆": "557c9",
        "生病": "38701",
        "钻石": "14af6",
        "拜": "c9d05",
        "怒": "c4f7f",
        "示爱": "0c368",
        "汗": "5b7a4",
        "小鸡": "6bee2",
        "痛苦": "55932",
        "撇嘴": "575cc",
        "惶恐": "e10b4",
        "口罩": "24d81",
        "吐舌": "3cfe4",
        "心碎": "875d3",
        "生气": "e8204",
        "可爱": "7b97d",
        "鬼脸": "def52",
        "跳舞": "741d5",
        "男孩": "46b8e",
        "奸笑": "289dc",
        "猪": "6935b",
        "圈": "3ece0",
        "便便": "462db",
        "外星": "0a22b",
        "圣诞": "8e7",
        "流泪": "01000",
        "强": "1",
        "爱心": "0CoJU",
        "女孩": "m6Qyw",
        "惊恐": "8W8ju",
        "大笑": "d"
    };
    KA5F.md = ["色", "流感", "这边", "弱", "嘴唇", "亲", "开心", "呲牙", "憨笑", "猫", "皱眉", "幽灵", "蛋糕", "发怒", "大哭", "兔子", "星星", "钟情", "牵手", "公鸡", "爱意", "禁止", "狗", "亲亲", "叉", "礼物", "晕", "呆", "生病", "钻石", "拜", "怒", "示爱", "汗", "小鸡", "痛苦", "撇嘴", "惶恐", "口罩", "吐舌", "心碎", "生气", "可爱", "鬼脸", "跳舞", "男孩", "奸笑", "猪", "圈", "便便", "外星", "圣诞"]
})();
(function() {
    var c2x = NEJ.P
      , dO4S = c2x("nej.g")
      , v3x = c2x("nej.j")
      , k3x = c2x("nej.u")
      , KA5F = c2x("nm.x.ek")
      , l3x = c2x("nm.x");
    if (v3x.bq3x.redefine)
        return;
    window.GEnc = true;
    var baO2x = function(cfy7r) {
        var m3x = [];
        k3x.be3x(cfy7r, function(cfx7q) {
            m3x.push(KA5F.emj[cfx7q])
        });
        return m3x.join("")
    };
    var cfw7p = v3x.bq3x;
    v3x.bq3x = function(V3x, e3x) {
        var i3x = {}
          , e3x = NEJ.X({}, e3x)
          , lR7K = V3x.indexOf("?");
        if (window.GEnc && /(^|\.com)\/api/.test(V3x) && !(e3x.headers && e3x.headers[dO4S.xf1x] == dO4S.BC2x) && !e3x.noEnc) {
            if (lR7K != -1) {
                i3x = k3x.hj6d(V3x.substring(lR7K + 1));
                V3x = V3x.substring(0, lR7K)
            }
            if (e3x.query) {
                i3x = NEJ.X(i3x, k3x.fl5q(e3x.query) ? k3x.hj6d(e3x.query) : e3x.query)
            }
            if (e3x.data) {
                i3x = NEJ.X(i3x, k3x.fl5q(e3x.data) ? k3x.hj6d(e3x.data) : e3x.data)
            }
            i3x["csrf_token"] = v3x.gI5N("__csrf");
            V3x = V3x.replace("api", "weapi");
            e3x.method = "post";
            delete e3x.query;
            var bIU0x = window.asrsea(JSON.stringify(i3x), baO2x(["流泪", "强"]), baO2x(KA5F.md), baO2x(["爱心", "女孩", "惊恐", "大笑"]));
            

            window.console.info(22222222222)
            window.console.info(JSON.stringify(i3x))
            window.console.info(baO2x(["流泪", "强"]))
            window.console.info(baO2x(KA5F.md))
            window.console.info(baO2x(["爱心", "女孩", "惊恐", "大笑"]))




            e3x.data = k3x.db4f({
                params: bIU0x.encText,
                encSecKey: bIU0x.encSecKey
            })
        }
        cfw7p(V3x, e3x)
    }
    ;
    v3x.bq3x.redefine = true
})();
(function() {
    window.setTimeout(function() {
        var bp = document.createElement("script");
        var curProtocol = window.location.protocol.split(":")[0];
        if (curProtocol === "https") {
            bp.src = "https://zz.bdstatic.com/linksubmit/push.js"
        } else {
            bp.src = "http://push.zhanzhang.baidu.com/push.js"
        }
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(bp, s)
    }, 3e3)
})();
(function() {})();
(function() {})();
(function() {
    var c2x = NEJ.P
      , a2x = c2x("nej.e")
      , cP4T = c2x("nej.p")
      , k3x = c2x("nej.u")
      , h3x = c2x("nej.v")
      , v3x = c2x("nej.j")
      , di4m = c2x("nm.u")
      , l3x = c2x("nm.x")
      , p3x = c2x("nm.d")
      , n3x = c2x("nm.l")
      , bbc2x = "http://s1.music.126.net/style/web2/emt/emoji_{ID}.png"
      , i3x = {
        "大笑": "86",
        "可爱": "85",
        "憨笑": "359",
        "色": "95",
        "亲亲": "363",
        "惊恐": "96",
        "流泪": "356",
        "亲": "362",
        "呆": "352",
        "哀伤": "342",
        "呲牙": "343",
        "吐舌": "348",
        "撇嘴": "353",
        "怒": "361",
        "奸笑": "341",
        "汗": "97",
        "痛苦": "346",
        "惶恐": "354",
        "生病": "350",
        "口罩": "351",
        "大哭": "357",
        "晕": "355",
        "发怒": "115",
        "开心": "360",
        "鬼脸": "94",
        "皱眉": "87",
        "流感": "358",
        "爱心": "33",
        "心碎": "34",
        "钟情": "303",
        "星星": "309",
        "生气": "314",
        "便便": "89",
        "强": "13",
        "弱": "372",
        "拜": "14",
        "牵手": "379",
        "跳舞": "380",
        "禁止": "374",
        "这边": "262",
        "爱意": "106",
        "示爱": "376",
        "嘴唇": "367",
        "狗": "81",
        "猫": "78",
        "猪": "100",
        "兔子": "459",
        "小鸡": "450",
        "公鸡": "461",
        "幽灵": "116",
        "圣诞": "411",
        "外星": "101",
        "钻石": "52",
        "礼物": "107",
        "男孩": "0",
        "女孩": "1",
        "蛋糕": "337",
        18: "186",
        "圈": "312",
        "叉": "313"
    }
      , cfr7k = function() {
        if (h3x && h3x.x3x) {
            h3x.dispatchEventalias = h3x.x3x
        }
    };
    cfr7k();
    l3x.bbh2x = function(bK3x) {
        if (!bK3x || bK3x.copyrightId === undefined || !!bK3x.program)
            return false;
        if (window.GAbroad) {
            bK3x.fee = 0;
            return true
        }
        if (bK3x.status < 0)
            return true;
        var Ks5x;
        if (typeof GCopyrights !== "undefined")
            Ks5x = GCopyrights;
        try {
            if (!Ks5x && !!top.GCopyrights)
                Ks5x = top.GCopyrights
        } catch (e) {}
        if (Ks5x) {
            var r3x = k3x.cW4a(Ks5x, bK3x.copyrightId);
            if (r3x >= 0)
                return true
        }
        return false
    }
    ;
    l3x.bbl2x = function() {
        var zT2x = /^\/m\/(song|album|artist|playlist|dj|search)\?/
          , vd0x = {
            2: "artist",
            13: "playlist",
            17: "dj",
            19: "album",
            18: "song",
            31: "toplist",
            32: "searchsong",
            33: "searchlyric",
            34: "event",
            70: "djradio",
            24: "day",
            50: "record"
        }
          , cfp7i = {
            song: "单曲",
            album: "专辑",
            artist: "歌手",
            playlist: "歌单",
            dj: "电台节目",
            searchsong: "单曲搜索",
            searchlyric: "歌词搜索",
            toplist: "榜单",
            event: "动态",
            djradio: "电台",
            day: "每日歌曲推荐",
            record: "听歌排行榜"
        };
        var cfn7g = function(J3x, i3x, Kp5u) {
            switch (J3x) {
            case "event":
                i3x = i3x.split("|");
                return "/event?id=" + i3x[0] + "&uid=" + i3x[1];
            case "searchsong":
            case "searchlyric":
                var t3x = J3x == "searchsong" ? 1 : 1006;
                return "/search/m/?s=" + encodeURIComponent(i3x) + "&type=" + t3x;
            case "toplist":
                return "/discover/toplist?id=" + i3x + "&_hash=songlist-" + Kp5u;
            case "day":
                return "/discover/recommend/taste" + "?_hash=songlist-" + Kp5u;
                ;
            case "record":
                i3x = i3x.split("|");
                return "/user/songs/rank?id=" + i3x[0] + "&cat=" + i3x[1];
                break;
            default:
                return "/" + J3x + "?id=" + i3x + "&_hash=songlist-" + Kp5u
            }
        };
        return function(dH4L, Kp5u) {
            if (!dH4L)
                return null;
            var GM4Q = dH4L.fid || (dH4L.type != 18 ? dH4L.type : null)
              , bbt2x = dH4L.fdata || dH4L.rid
              , bIR0x = dH4L.page || dH4L.fhref;
            var J3x = vd0x[GM4Q];
            if (!J3x) {
                var vV0x = (bIR0x || "").match(zT2x);
                if (vV0x)
                    J3x = vV0x[1]
            }
            if (!J3x)
                return null;
            return {
                title: cfp7i[J3x],
                link: !vd0x[GM4Q] ? bIR0x : cfn7g(J3x, bbt2x, Kp5u),
                fid: GM4Q,
                fdata: bbt2x
            }
        }
    }();
    l3x.Vc9T = function(kM7F) {
        var dj4n = kM7F;
        if (typeof GUser !== "undefined" && GUser.userId > 0)
            dj4n = GUser;
        return dj4n
    }
    ;
    l3x.gX5c = function() {
        if (typeof GUser !== "undefined" && GUser.userId > 0) {
            return true
        } else {
            top.login();
            return false
        }
    }
    ;
    l3x.Fv3x = function() {
        var zT2x = /#(.*?)$/;
        return function(gk5p) {
            var iQ6K = gk5p === false ? location : top.location;
            return zT2x.test(iQ6K.href) ? RegExp.$1 : ""
        }
    }();
    l3x.Ai2x = function() {
        var Ak2x = a2x.cT4X("audio")
          , cfa7T = Ak2x.canPlayType && Ak2x.canPlayType("audio/mpeg");
        if (cfa7T)
            return 2;
        var ceO7H = l3x.bbU2x().supported;
        if (ceO7H)
            return 1;
        return 0
    }
    ;
    l3x.bbU2x = function() {
        var gd5i, bbV2x = !1, bcc2x = "";
        if (cP4T.cR4V.browser == "ie") {
            try {
                gd5i = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")
            } catch (e) {
                gd5i = null
            }
            if (gd5i) {
                bbV2x = !0;
                bcc2x = gd5i.GetVariable("$version")
            }
        } else {
            if (navigator.plugins && navigator.plugins.length > 0) {
                gd5i = navigator.plugins["Shockwave Flash"];
                if (gd5i) {
                    bbV2x = !0;
                    bcc2x = gd5i.description
                }
            }
        }
        return {
            supported: bbV2x,
            version: bcc2x
        }
    }
    ;
    l3x.qg9X = function() {
        return "网易云音乐"
    }
    ;
    l3x.ceK7D = function() {
        return i3x
    }
    ;
    l3x.bIJ0x = function(cL4P) {
        var C3x = i3x[cL4P];
        return C3x == null ? "" : bbc2x.replace("{ID}", C3x)
    }
    ;
    l3x.tK0x = function(bi3x, dD4H, Fu3x) {
        if (!bi3x)
            return "";
        if (!!Fu3x) {
            bi3x = l3x.ceI7B(bi3x)
        }
        return l3x.Vf9W(l3x.ceG7z(bi3x, dD4H))
    }
    ;
    l3x.bcp2x = function() {
        var Kh5m = {
            AT: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))/g,
            LINK: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))|((http[s]{0,1}):\/\/[\-a-zA-Z0-9\.]+(:(6553[0-5]|655[0-2][0-9]|65[0-4][0-9][0-9]|6[0-4][0-9][0-9][0-9]|\\d{2,4}|[1-9]))?(\/[a-zA-Z0-9\\\.\-~!@#$%\^&\*\+\?:_\/=<>]*)?)/g,
            ACT_NOLINK: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))|(#[^\[\]\/\\\#\r\n]+?#)/g,
            ACT: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))|((http[s]{0,1}):\/\/[\-a-zA-Z0-9\.]+(:(6553[0-5]|655[0-2][0-9]|65[0-4][0-9][0-9]|6[0-4][0-9][0-9][0-9]|\\d{2,4}|[1-9]))?(\/[a-zA-Z0-9\\\.\-~!@#$%\^&\*\+\?:_\/=<>]*)?)|(#[^\[\]\/\\\#\r\n]+?#)/g,
            LING: /\n/g,
            BLANK: /\s/g,
            MLINE: /([ \f\r\t\v]*\n){2,}/g
        }
          , bct2x = {
            LINK: '<a href="${url}" class="${klass}">${value}</a>',
            AT: '<a href="${url}" class="${klass}">@${value}</a>',
            ACT: '<a href="javascript:;" class="${klass}" data-title="${value}" data-action="activity">${value}</a>'
        }
          , ceE7x = {
            r: /\<|\>|\&lt;|\&gt;|\&|\'|\"/g,
            "<": "&lt;",
            ">": "&gt;",
            "&": "&amp;",
            " ": "&nbsp;",
            '"': "&quot;",
            "'": "&#39;",
            "&lt;": "&lt;",
            "&gt;": "&gt;"
        }
          , cez7s = ["AT", "LINK", "ACT_NOLINK", "ACT"];
        var cew7p = function(do4s, bcD2x) {
            do4s = Fq3x(do4s);
            if (!!bcD2x) {
                do4s = do4s.replace(Kh5m.MLINE, "\n\n").replace(Kh5m.LING, "</br>")
            }
            do4s = l3x.Vf9W(do4s);
            return do4s
        };
        var Fq3x = function(bi3x) {
            return k3x.Eh3x(ceE7x, bi3x)
        };
        return function(do4s, e3x, ee5j) {
            e3x = e3x || {};
            ee5j = ee5j || {};
            ee5j.actHash = {};
            var ceu7n = !!e3x.parseLink
              , cet7m = !!e3x.parseAct
              , ceq7j = e3x.linkTpl || bct2x.LINK
              , cep7i = e3x.atTpl || bct2x.AT
              , cen7g = e3x.actTpl || bct2x.ACT
              , bcD2x = !!e3x.keepSpace
              , bcQ2x = e3x.linkKlass || "s-fc7";
            cva1x = e3x.actBiJson || "";
            if (!do4s)
                return "";
            do4s = do4s.trim().replace(/&amp;/g, "&").replace(/&nbsp;/g, " ");
            var kF7y = cez7s[ceu7n + 2 * cet7m]
              , cO4S = Kh5m[kF7y]
              , bs3x = null
              , ln7g = null
              , gD5I = 0
              , cvb1x = ""
              , cvc1x = "";
            var xZ1x = [];
            cO4S.lastIndex = 0;
            while (bs3x = cO4S.exec(do4s)) {
                var fs5x = {
                    html: "",
                    before: bs3x.index - 1,
                    after: bs3x.index + bs3x[0].length
                };
                if (bs3x[1]) {
                    var ln7g = bs3x[2].replace(/[^\x00-\xff]/g, "**");
                    if (ln7g.length < 4 || ln7g.length > 32) {} else {
                        var Kb5g = a2x.ek5p(cep7i);
                        fs5x.html = a2x.bP3x(Kb5g, {
                            value: Fq3x(bs3x[2]),
                            url: encodeURI("/user/home?nickname=" + bs3x[2]),
                            klass: bcQ2x
                        });
                        xZ1x.push(fs5x)
                    }
                } else if (bs3x.length > 8 && bs3x[4]) {
                    var Kb5g = a2x.ek5p(ceq7j);
                    fs5x.html = a2x.bP3x(Kb5g, {
                        value: Fq3x(bs3x[4]),
                        url: encodeURI(bs3x[4]),
                        klass: bcQ2x
                    });
                    xZ1x.push(fs5x)
                } else {
                    var bIA0x = kF7y == "ACT_NOLINK" ? 4 : 9;
                    var Kb5g = a2x.ek5p(cen7g);
                    fs5x.html = a2x.bP3x(Kb5g, {
                        value: Fq3x(bs3x[bIA0x]),
                        klass: bcQ2x
                    });
                    xZ1x.push(fs5x);
                    ee5j.actHash[bs3x[bIA0x].slice(1, -1)] = true
                }
            }
            var cef7Y = xZ1x.length
              , kM7F = {
                before: do4s.length - 1,
                after: 0
            }
              , bdo2x = "";
            for (var i = 0; i <= cef7Y; i++) {
                var iG6A, gz5E;
                iG6A = (xZ1x[i - 1] || kM7F).after;
                gz5E = (xZ1x[i] || kM7F).before;
                if (gz5E >= iG6A && iG6A >= 0 && gz5E <= do4s.length - 1) {
                    bdo2x += cew7p(do4s.substring(iG6A, gz5E + 1), bcD2x)
                }
                if (xZ1x[i]) {
                    bdo2x += xZ1x[i].html
                }
            }
            return bdo2x
        }
    }();
    l3x.ceI7B = function() {
        var cO4S = new RegExp("(http[s]{0,1})://[-a-zA-Z0-9.]+(:(6553[0-5]|655[0-2][0-9]|65[0-4][0-9][0-9]|6[0-4][0-9][0-9][0-9]|\\d{2,4}|[1-9]))?(/[a-zA-Z0-9\\.\\-~!@#$%^&*+?:_/=<>]*)?","g");
        return function(bi3x) {
            return (bi3x || "").replace(/&amp;/g, "&").replace(/&nbsp;/g, " ").replace(cO4S, function($0, $1) {
                return "<a href=" + $0 + ' class="link u-link"><i class="u-dicn u-dicn-28"></i>网页链接</a>'
            })
        }
    }();
    l3x.ceG7z = function() {
        var cO4S = /@([a-zA-Z0-9_\-\u4E00-\u9FA5]+)/g;
        var eC5H = function(ln7g, dD4H) {
            return '<a href="/user/home?nickname=' + encodeURIComponent(ln7g) + '" class="' + (dD4H || "") + '">@' + ln7g + "</a>"
        };
        return function(bi3x, dD4H) {
            return (bi3x || "").replace(cO4S, function($0, $1) {
                return eC5H($1, dD4H)
            })
        }
    }();
    l3x.Vf9W = function() {
        var cO4S = /\[(.*?)\]/g;
        return function(bi3x) {
            return (bi3x || "").replace(cO4S, function($1, $2) {
                var V3x = l3x.bIJ0x($2);
                return !V3x ? $1 : '<img src="' + V3x + '"/>'
            })
        }
    }();
    l3x.yA1x = function(E3x, dD4H) {
        a2x.bB3x(E3x, dD4H) ? a2x.w3x(E3x, dD4H) : a2x.y3x(E3x, dD4H)
    }
    ;
    l3x.Fm3x = function(cG4K, hA6u) {
        cG4K = a2x.z3x(cG4K);
        hA6u = a2x.z3x(hA6u);
        if (!cG4K || !hA6u)
            return !1;
        for (hA6u = hA6u.parentNode; !!hA6u && hA6u != cG4K; hA6u = hA6u.parentNode)
            ;
        return hA6u == cG4K
    }
    ;
    l3x.kt7m = function() {
        var bIz0x = function(go5t) {
            return (go5t < 10 ? "0" : "") + go5t
        };
        return function(jH7A) {
            jH7A = parseInt(jH7A) || 0;
            if (!jH7A)
                return "00:00";
            var JW5b = Math.floor(jH7A % 60)
              , cdZ7S = Math.floor(jH7A / 60);
            return bIz0x(cdZ7S) + ":" + bIz0x(JW5b)
        }
    }();
    l3x.xQ1x = function(fm5r, uC0x) {
        if (!fm5r || fm5r.length == 0)
            return "";
        uC0x = uC0x || "/";
        var bs3x = [];
        for (var i = fm5r.length - 1; i >= 0; i--) {
            bs3x.unshift(fm5r[i].name)
        }
        return bs3x.join(uC0x)
    }
    ;
    l3x.pB8t = function() {
        var JP5U = function(hl6f, dD4H, cG4K) {
            if (!hl6f || !hl6f.name)
                return "";
            if (!hl6f.id)
                return '<span class="' + dD4H + '">' + k3x.dJ4N(hl6f.name) + "</span>";
            return "<a" + (cG4K ? ' target="_blank"' : "") + ' class="' + dD4H + '" href="/artist?id=' + hl6f.id + '" hidefocus="true">' + k3x.dJ4N(hl6f.name) + "</a>"
        };
        return function(fm5r, T3x, uC0x, cG4K, bIy0x) {
            if (!fm5r || !fm5r.length)
                return "";
            uC0x = uC0x || "/";
            T3x = T3x || "";
            Fh3x = "";
            var eD5I = [];
            for (var i = 0, j3x = [], rv9m = [], fh5m; i < fm5r.length; ++i) {
                eD5I.push(fm5r[i].name);
                if (!fm5r[i] || fm5r[i].id <= 0) {
                    rv9m.push(fm5r[i]);
                    continue
                }
                if (k3x.ga5f(T3x)) {
                    fh5m = T3x(fm5r[i])
                } else {
                    fh5m = JP5U(fm5r[i], T3x, cG4K)
                }
                if (fh5m && bIy0x && fm5r[i].tns && fm5r[i].tns.length > 0) {
                    Fh3x = k3x.dJ4N(fm5r[i].tns[0]);
                    fh5m += '<span class="s-fc8" title="' + Fh3x + '"> - (' + Fh3x + ")</span>"
                }
                !!fh5m && j3x.push(fh5m)
            }
            for (var i = 0, fh5m; i < rv9m.length; ++i) {
                if (k3x.ga5f(T3x)) {
                    fh5m = T3x(rv9m[i])
                } else {
                    fh5m = JP5U(rv9m[i], T3x, cG4K)
                }
                if (fh5m && bIy0x && rv9m[i].tns && rv9m[i].tns.length > 0) {
                    Fh3x = k3x.dJ4N(rv9m[i].tns[0]);
                    fh5m += '<span class="s-fc8" title="' + Fh3x + '"> - (' + Fh3x + ")</span>"
                }
                !!fh5m && j3x.push(fh5m)
            }
            return '<span title="' + eD5I.join(uC0x) + '">' + j3x.join(uC0x) + "</span>"
        }
    }();
    l3x.xG1x = function(eW5b, ou8m) {
        ou8m = ou8m || "86";
        return !!eW5b && (ou8m == "86" ? /^\d{11}$/ : /^\d+$/).test(eW5b)
    }
    ;
    l3x.cvd1x = function(eW5b) {
        if (!l3x.xG1x(eW5b))
            return eW5b;
        return eW5b.substring(0, 3) + "****" + eW5b.substr(7)
    }
    ;
    l3x.jf6Z = function() {
        var cO4S = /^\s+$/g;
        return function(hy6s) {
            return !hy6s || cO4S.test(hy6s)
        }
    }();
    l3x.Fg3x = function() {
        var bet3x = /[^\x00-\xfff]/g;
        return function(hy6s) {
            var cdR6L = hy6s.match(bet3x) || []
              , du4y = cdR6L.length;
            return hy6s.length + du4y
        }
    }();
    l3x.yH1x = function() {
        var bet3x = /[^\x00-\xfff]/;
        return function(hy6s, gi5n) {
            for (var i = 0, len = hy6s.length; i < len && gi5n > 0; i++) {
                if (bet3x.test(hy6s.charAt(i))) {
                    gi5n -= 2;
                    if (gi5n < 0) {
                        break
                    }
                } else {
                    gi5n -= 1
                }
            }
            return hy6s.substring(0, i)
        }
    }();
    l3x.yI1x = function(hy6s, gi5n, Qi7b) {
        gi5n = gi5n || 10;
        Qi7b = Qi7b || nej.p.cR4V.engine == "trident" && parseInt(nej.p.cR4V.release) < 5;
        if (Qi7b && l3x.Fg3x(hy6s) > gi5n) {
            return l3x.yH1x(hy6s, gi5n) + "..."
        } else {
            return hy6s
        }
    }
    ;
    l3x.bIu0x = function(f3x) {
        return f3x === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(f3x.type || f3x.href || ~f3x.tabIndex)
    }
    ;
    l3x.cdP6J = function(d2x, cG4K) {
        if (!d2x || !cG4K)
            return !0;
        var f3x, t3x = d2x.type.toLowerCase();
        if (t3x == "mouseout") {
            f3x = d2x.relatedTarget || d2x.toElement
        } else if (t3x == "mouseover") {
            f3x = d2x.relatedTarget || d2x.fromElement
        }
        return !f3x || f3x !== cG4K && !l3x.Fm3x(cG4K, f3x)
    }
    ;
    l3x.rk9b = function() {
        Q3x = {};
        return function(f3x, dI4M) {
            var C3x = a2x.kv7o(f3x)
              , J3x = "hover-" + C3x;
            if (!dI4M || !C3x || !!Q3x[J3x])
                return;
            Q3x[J3x] = !0;
            h3x.s3x(C3x, "mouseover", function() {
                var beL3x = a2x.I3x(f3x, "hshow") || [];
                var beN3x = a2x.I3x(f3x, "icn-dislike") || [];
                a2x.y3x(C3x, "z-hover");
                a2x.Y3x(beL3x[0], "display", "block");
                a2x.Y3x(beN3x[0], "display", "block")
            });
            h3x.s3x(C3x, "mouseout", function() {
                var beL3x = a2x.I3x(f3x, "hshow") || [];
                var beN3x = a2x.I3x(f3x, "icn-dislike") || [];
                a2x.w3x(C3x, "z-hover");
                a2x.Y3x(beL3x[0], "display", "none");
                a2x.Y3x(beN3x[0], "display", "none")
            })
        }
    }();
    l3x.bIt0x = function() {
        var bv3x = {
            r: /\(|\)|\[|\]|\{|\}|\*|\+|\^|\$|\?|\!|\\|\||\./gi,
            "(": "\\(",
            ")": "\\)",
            "[": "\\[",
            "]": "\\]",
            "{": "\\{",
            "}": "\\}",
            "*": "\\*",
            "+": "\\+",
            "^": "\\^",
            $: "\\$",
            "?": "\\?",
            "!": "\\!",
            "\\": "\\\\",
            "|": "\\|",
            ".": "\\."
        };
        return function(hy6s) {
            return k3x.Eh3x(bv3x, hy6s)
        }
    }();
    l3x.tj0x = function(bz3x) {
        if (k3x.FQ3x(bz3x))
            bz3x = bz3x.getTime();
        var fH5M = new Date
          , ni8a = fH5M.getTime() - bz3x;
        if (ni8a <= 6e4)
            return "刚刚";
        var qL9C = fH5M.getHours() * 36e5 + fH5M.getMinutes() * 6e4 + fH5M.getSeconds() * 1e3;
        if (ni8a <= qL9C) {
            if (ni8a < 36e5) {
                var JE4I = Math.floor(ni8a / 6e4);
                return JE4I + "分钟前"
            }
            return k3x.iN6H(bz3x, "HH:mm")
        } else {
            if (ni8a < qL9C + 864e5) {
                return "昨天" + k3x.iN6H(bz3x, "HH:mm")
            } else {
                var gj5o = fH5M.getFullYear()
                  , bfc3x = new Date(gj5o,0,1);
                var qL9C = fH5M.getTime() - bfc3x.getTime();
                if (ni8a < qL9C) {
                    return k3x.iN6H(bz3x, "M月d日 HH:mm")
                }
                return k3x.iN6H(bz3x, "yyyy年M月d日")
            }
        }
    }
    ;
    l3x.cdM6G = function(bz3x) {
        if (k3x.FQ3x(bz3x))
            bz3x = bz3x.getTime();
        var fH5M = new Date
          , ni8a = fH5M.getTime() - bz3x;
        var qL9C = fH5M.getHours() * 36e5 + fH5M.getMinutes() * 6e4 + fH5M.getSeconds() * 1e3;
        if (ni8a <= qL9C) {
            return "今天" + k3x.iN6H(bz3x, "HH:mm")
        } else {
            if (ni8a < qL9C + 864e5) {
                return "昨天" + k3x.iN6H(bz3x, "HH:mm")
            } else {
                return k3x.iN6H(bz3x, "yy-MM-dd HH:mm")
            }
        }
    }
    ;
    l3x.cdK6E = function(bz3x) {
        if (k3x.FQ3x(bz3x))
            bz3x = bz3x.getTime();
        var fH5M = new Date
          , ni8a = fH5M.getTime() - bz3x;
        if (ni8a <= 6e4)
            return "刚刚";
        var qL9C = fH5M.getHours() * 36e5 + fH5M.getMinutes() * 6e4 + fH5M.getSeconds() * 1e3;
        if (ni8a <= qL9C) {
            if (ni8a < 36e5) {
                var JE4I = Math.floor(ni8a / 6e4);
                return JE4I + "分钟前"
            }
            return k3x.iN6H(bz3x, "HH:mm")
        } else {
            if (ni8a < qL9C + 864e5) {
                return "昨天" + k3x.iN6H(bz3x, "HH:mm")
            } else if (ni8a < qL9C + 864e5 * 6) {
                var gj5o = fH5M.getFullYear()
                  , bfc3x = new Date(gj5o,0,1);
                var qL9C = fH5M.getTime() - bfc3x.getTime();
                if (ni8a < qL9C) {
                    return k3x.iN6H(bz3x, "M月d日 HH:mm")
                }
                return k3x.iN6H(bz3x, "yyyy年M月d日")
            } else {
                return "最近"
            }
        }
    }
    ;
    l3x.Vp9g = function() {
        var cO4S = /\{(.*?)\}/gi;
        return function(oU8M, i3x) {
            return (oU8M || "").replace(cO4S, function($1, $2) {
                var A3x = i3x[$2];
                return A3x == null ? $1 : A3x
            })
        }
    }();
    l3x.eP5U = function() {
        var bg3x = Array.prototype.slice.call(arguments, 0)
          , oU8M = bg3x.shift();
        if (oU8M) {
            return oU8M.replace(/{(\d+)}/g, function($1, $2) {
                return $2 < bg3x.length ? bg3x[$2] : $1
            })
        }
        return ""
    }
    ;
    l3x.EZ3x = function(j3x, dD4H, lb7U) {
        return "";
        lb7U = lb7U || " - ";
        if (j3x && j3x.length) {
            return lb7U + (!!dD4H ? '<span class="' + dD4H + '">' + j3x[0] + "</span>" : j3x[0])
        }
        return ""
    }
    ;
    l3x.bIq0x = function() {
        if (window.getSelection) {
            var qQ9H = window.getSelection();
            if (qQ9H && qQ9H.focusNode && qQ9H.focusNode.tagName) {
                var yV1x = a2x.cQ4U(qQ9H.focusNode);
                for (var i = 0, xp1x; i < yV1x.length; ++i) {
                    xp1x = yV1x[i].tagName;
                    if (!xp1x)
                        continue;
                    xp1x = xp1x.toLowerCase();
                    if (xp1x == "textarea" || xp1x == "input")
                        return !0
                }
            }
        } else if (document.selection) {
            var cJ4N = document.selection.createRange();
            if (cJ4N) {
                var f3x = cJ4N.parentElement();
                if (f3x && f3x.tagName) {
                    var xp1x = f3x.tagName.toLowerCase();
                    if (xp1x == "textarea" || xp1x == "input")
                        return !0
                }
            }
        }
        return !1
    }
    ;
    l3x.Aq2x = function(fv5A) {
        if (/^[A-Z]\:\\/i.test(fv5A)) {
            fv5A = fv5A.split("\\")
        } else {
            fv5A = fv5A.split("/")
        }
        fv5A = fv5A[fv5A.length - 1];
        return fv5A
    }
    ;
    l3x.cdG6A = function() {
        var Bx2x = [13, 17, 34, 19, 18, 21];
        return function(C3x) {
            var bs3x = (C3x || "").split("_");
            return {
                type: Bx2x[bs3x[2]] || -1,
                id: bs3x[3] || ""
            }
        }
    }();
    l3x.bfV3x = function(dj4n) {
        if (4 == dj4n.userType) {
            return '<sup class="icn u-icn2 u-icn2-music2"></sup>'
        } else if (dj4n.authStatus == 1) {
            return '<sup class="u-icn u-icn-1"></sup>'
        } else if (dj4n.expertTags && dj4n.expertTags.length) {
            return '<sup class="u-icn u-icn-84"></sup>'
        }
    }
    ;
    l3x.Rw8o = function(hO6I) {
        if (!hO6I)
            return "";
        var du4y = hO6I.length
          , hu6o = [];
        hu6o[0] = du4y / 3 | 0;
        hu6o[1] = hu6o[0] + ((du4y - hu6o[0]) / 2 | 0);
        return hO6I.substring(0, hu6o[0]) + hO6I.substring(hu6o[0], hu6o[1]).replace(/\d/g, "*") + hO6I.substring(hu6o[1], du4y)
    }
    ;
    l3x.cve1x = function(r3x, co4s) {
        return (r3x % co4s + co4s) % co4s
    }
    ;
    l3x.bIo0x = function() {
        var Bx2x = {
            0: "playlist",
            1: "program",
            2: "event",
            3: "album",
            4: "song",
            5: "mv",
            6: "topic",
            62: "video"
        };
        return function(C3x) {
            var bs3x = (C3x || "").split("_")
              , m3x = {
                type: Bx2x[bs3x[2]] || -1,
                id: bs3x[3] || ""
            };
            if (m3x.type == "event") {
                m3x.uid = bs3x[4] || "";
                return "/" + m3x.type + "?id=" + m3x.id + "&uid=" + m3x.uid
            }
            return "/" + m3x.type + "?id=" + m3x.id
        }
    }();
    l3x.bIn0x = function() {
        var Bx2x = {
            0: "歌单",
            1: "电台节目",
            2: "动态",
            3: "专辑",
            4: "单曲",
            5: "MV",
            6: "专栏文章",
            62: "视频"
        };
        return function(C3x) {
            var bs3x = (C3x || "").split("_");
            return Bx2x[bs3x[2]] || "资源"
        }
    }();
    l3x.cdC6w = function(bw3x) {
        var qs = bw3x.length > 0 ? bw3x.substring(1) : ""
          , args = {}
          , items = qs.length ? qs.split("&") : []
          , item = null
          , name = null
          , value = null
          , i = 0
          , len = items.length;
        for (i = 0; i < len; i++) {
            item = items[i].split("=");
            name = decodeURIComponent(item[0]);
            value = decodeURIComponent(item[1]);
            if (name.length) {
                args[name] = value
            }
        }
        return args
    }
    ;
    l3x.bIm0x = function(tN0x, Rp8h) {
        var Vv9m = 0
          , dY5d = new Array;
        k3x.be3x(tN0x, function(V3x, r3x) {
            var de4i = a2x.cT4X("img");
            de4i.src = V3x;
            h3x.s3x(de4i, "load", function(r3x, d2x) {
                dY5d[r3x] = 1;
                Vv9m++;
                if (Vv9m == tN0x.length)
                    Rp8h(tN0x, dY5d)
            }
            .g3x(this, r3x));
            h3x.s3x(de4i, "error", function(d2x, r3x) {
                dY5d[r3x] = 0;
                Vv9m++;
                if (Vv9m == tN0x.length)
                    Rp8h(tN0x, dY5d)
            }
            .g3x(this, r3x))
        })
    }
    ;
    l3x.Vw9n = function(j3x, dC4G) {
        var m3x = [];
        k3x.be3x(j3x, function(q3x, r3x, io6i) {
            m3x.push(dC4G(q3x, r3x, io6i))
        });
        return m3x
    }
    ;
    l3x.SV8N = function(j3x, dC4G, io6i) {
        var m3x = [];
        k3x.be3x(j3x, function(q3x, r3x) {
            if (dC4G.call(io6i, q3x, r3x, j3x)) {
                m3x.push(q3x)
            }
        });
        return m3x
    }
    ;
    l3x.cdA6u = function(bi3x) {
        return k3x.dJ4N((bi3x || "").replace(/\s{2,}/g, " ").trim())
    }
    ;
    l3x.bgW3x = function(bf3x) {
        if (bf3x.transNames && bf3x.transNames.length) {
            return bf3x.transNames[0]
        } else if (bf3x.alias && bf3x.alias.length) {
            return bf3x.alias[0]
        }
    }
    ;
    l3x.bha3x = function(LD5I) {
        if (LD5I) {
            return LD5I.replace(/\n{2,}/g, "<br/><br/>").replace(/\n/g, "<br/>").replace(/(<br\/?>){2,}/g, "<br/><br/>")
        }
    }
    ;
    l3x.bhc3x = function(f3x) {
        var f3x = a2x.z3x(f3x)
          , cL4P = f3x && f3x.getElementsByTagName("textarea")[0]
          , J3x = a2x.u3x(f3x, "key")
          , bhd3x = a2x.u3x(f3x, "simple") == "1"
          , bIl0x = p3x.uS0x.fY5d();
        if (!(f3x && cL4P && J3x))
            return;
        if (bhd3x) {
            bIl0x.sq9h(J3x, l3x.DT3x(JSON.parse(cL4P.value)))
        } else {
            bIl0x.sq9h(J3x, JSON.parse(cL4P.value || cL4P.defaultValue))
        }
        f3x.innerHTML = "";
        return J3x
    }
    ;
    l3x.cdx6r = function(oo8g) {
        if (!oo8g.onbeforelistload) {
            oo8g.onbeforelistload = function(d2x) {
                d2x.value = '<div class="u-load s-fc4"><i class="icn"></i> 加载中...</div>'
            }
        }
        if (!oo8g.onemptylist) {
            oo8g.onemptylist = function(d2x) {
                d2x.value = '<div class="n-nmusic"><h3 class="f-ff2"><i class="u-icn u-icn-21"></i>' + (oo8g.emptyMsg || "暂时还没有数据") + "</h3></div>"
            }
        }
        return oo8g
    }
    ;
    l3x.DT3x = function(hx6r) {
        if (k3x.ep5u(hx6r)) {
            var ee5j = [];
            k3x.be3x(hx6r, function(bhd3x) {
                ee5j.push(bIk0x(bhd3x))
            });
            return ee5j
        } else {
            return bIk0x(hx6r)
        }
        function bIk0x(hx6r) {
            if (!hx6r)
                return null;
            var ee5j = {
                album: hx6r.al,
                alias: hx6r.alia || hx6r.ala || [],
                artists: hx6r.ar || [],
                commentThreadId: "R_SO_4_" + hx6r.id,
                copyrightId: hx6r.cp || 0,
                duration: hx6r.dt || 0,
                id: hx6r.id,
                mvid: hx6r.mv || 0,
                name: hx6r.name || "",
                cd: hx6r.cd,
                position: hx6r.no || 0,
                ringtone: hx6r.rt,
                rtUrl: hx6r.rtUrl,
                status: hx6r.st || 0,
                pstatus: hx6r.pst || 0,
                fee: hx6r.fee || 0,
                version: hx6r.v || 0,
                eq: hx6r.eq,
                songType: hx6r.t || 0,
                mst: hx6r.mst,
                score: hx6r.pop || 0,
                ftype: hx6r.ftype,
                rtUrls: hx6r.rtUrls,
                transNames: hx6r.tns,
                privilege: hx6r.privilege,
                lyrics: hx6r.lyrics
            };
            return ee5j
        }
    }
    ;
    l3x.cvf1x = function() {
        var f3x = a2x.nd8V('<div class="u-mask u-mask-light"></div>' + '<div class="m-opentip">' + '<div class="lay">' + '<div class="note">' + "<h3>分享打不开？</h3>" + '<p>请点击右上角<br>选择<span class="s-fc5">“分享到...”</span></p>' + "</div></div></div>");
        document.body.appendChild(f3x);
        h3x.s3x(f3x, "click", function(d2x) {
            h3x.bh3x(d2x);
            a2x.cK4O(f3x)
        })
    }
    ;
    l3x.ky7r = function(ct4x) {
        if (ct4x < 1e5) {
            return ct4x
        } else {
            return Math.floor(ct4x / 1e4) + "万"
        }
    }
    ;
    l3x.tY0x = function(ct4x, cL4P) {
        return "<i>" + (ct4x ? "(" + ct4x + ")" : cL4P) + "</i>"
    }
    ;
    l3x.bIi0x = function(t3x, hs6m) {
        var e3x = {};
        if (!k3x.kR7K(hs6m)) {
            return e3x
        }
        switch (parseInt(t3x)) {
        case 17:
            e3x.title = hs6m.name;
            e3x.author = (hs6m.radio || []).name;
            e3x.picUrl = hs6m.coverUrl;
            e3x.category = hs6m.radio.category;
            break;
        case 19:
            e3x.title = hs6m.name;
            e3x.author = l3x.xQ1x(hs6m.artists);
            e3x.authors = l3x.xQ1x(hs6m.artists, " / ");
            e3x.picUrl = hs6m.picUrl;
            break;
        case 13:
            e3x.title = hs6m.name;
            e3x.author = (hs6m.creator || []).nickname;
            e3x.picUrl = hs6m.coverImgUrl;
            break;
        case 18:
            e3x.title = hs6m.name;
            e3x.author = l3x.xQ1x(hs6m.artists);
            e3x.picUrl = (hs6m.album || []).picUrl;
            break;
        case 20:
            e3x.title = hs6m.name;
            e3x.author = "";
            e3x.picUrl = hs6m.img1v1Url;
            break;
        case 21:
            e3x.title = hs6m.name;
            e3x.author = hs6m.artistName;
            e3x.authors = l3x.xQ1x(hs6m.artists, " / ");
            e3x.picUrl = hs6m.newCover || hs6m.cover;
            break;
        case 70:
            e3x.title = hs6m.name;
            e3x.author = (hs6m.dj || []).nickname;
            e3x.picUrl = hs6m.picUrl;
            e3x.category = hs6m.category;
            break;
        default:
            break
        }
        return e3x
    }
    ;
    l3x.bIh0x = function() {
        return location.hostname.indexOf("igame.163.com") >= 0
    }
    ;
    l3x.cds6m = function(eC5H, ur0x, e3x) {
        var bL3x, bg3x, m3x;
        var jo6i = null;
        var QP8H = 0;
        if (!e3x)
            e3x = {};
        var VF9w = function() {
            QP8H = e3x.leading === false ? 0 : +(new Date);
            jo6i = null;
            m3x = eC5H.apply(bL3x, bg3x);
            if (!jo6i)
                bL3x = bg3x = null
        };
        return function() {
            var fH5M = +(new Date);
            if (!QP8H && e3x.leading === false)
                QP8H = fH5M;
            var bhL3x = ur0x - (fH5M - QP8H);
            bL3x = this;
            bg3x = arguments;
            if (bhL3x <= 0 || bhL3x > ur0x) {
                if (jo6i) {
                    clearTimeout(jo6i);
                    jo6i = null
                }
                QP8H = fH5M;
                m3x = eC5H.apply(bL3x, bg3x);
                if (!jo6i)
                    bL3x = bg3x = null
            } else if (!jo6i && e3x.trailing !== false) {
                jo6i = setTimeout(VF9w, bhL3x)
            }
            return m3x
        }
    }
    ;
    l3x.bIg0x = function(eC5H, ur0x, re9V) {
        var jo6i, bg3x, bL3x, QJ8B, m3x;
        var VF9w = function() {
            var gD5I = new Date - QJ8B;
            if (gD5I < ur0x && gD5I >= 0) {
                jo6i = setTimeout(VF9w, ur0x - gD5I)
            } else {
                jo6i = null;
                if (!re9V) {
                    m3x = eC5H.apply(bL3x, bg3x);
                    if (!jo6i)
                        bL3x = bg3x = null
                }
            }
        };
        return function() {
            bL3x = this;
            bg3x = arguments;
            QJ8B = new Date;
            var bhS4W = re9V && !jo6i;
            if (!jo6i)
                jo6i = setTimeout(VF9w, ur0x);
            if (bhS4W) {
                m3x = eC5H.apply(bL3x, bg3x);
                bL3x = bg3x = null
            }
            return m3x
        }
    }
    ;
    l3x.QA7t = function(f3x, hq6k) {
        if (f3x) {
            var f3x = f3x.firstElementChild;
            if (f3x) {
                f3x.firstElementChild && (f3x = f3x.firstElementChild);
                f3x.setAttribute("xlink:href", "/style/pc/svg/" + hq6k)
            }
        }
    }
    ;
    l3x.bIf0x = function(eD5I) {
        if (!eD5I || !eD5I.length) {
            return
        }
        eD5I = /^#(.+?)#$/.exec(eD5I)[1];
        eD5I = eD5I.replace(/\s/g, " ");
        v3x.bq3x("/api/act/detail", {
            type: "json",
            method: "post",
            data: k3x.db4f({
                actname: eD5I
            }),
            onload: function(P3x) {
                if (!P3x || P3x.code != 200 || !P3x.act) {
                    n3x.Z3x.N3x({
                        type: 2,
                        tip: "该话题暂未创建"
                    })
                } else {
                    location.dispatch2("/activity?id=" + P3x.act.actId)
                }
            },
            onerror: function(bR3x) {
                n3x.Z3x.N3x({
                    type: 2,
                    tip: "操作失败，请稍后再试"
                })
            }
        })
    }
    ;
    l3x.bic4g = function(Qw7p, vY0x) {
        if (!Qw7p || !vY0x)
            return false;
        if (Qw7p == vY0x)
            return true;
        return l3x.bic4g(Qw7p, vY0x.parentNode)
    }
    ;
    a2x.ff5k = function(bE3x, kT7M) {
        if (!bE3x)
            return null;
        if (!kT7M)
            return bE3x.firstChild;
        return a2x.I3x(bE3x, kT7M)[0]
    }
    ;
    l3x.cdp6j = function(hy6s) {
        return /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i.test(hy6s)
    }
    ;
    l3x.cvh1x = function(sX0x) {
        if (!sX0x) {
            return "0b"
        }
        var cde6Y = ["Bytes", "KB", "MB", "GB"];
        var bd3x = Math.floor(Math.log(sX0x) / Math.log(1024));
        return (sX0x / Math.pow(1024, Math.floor(bd3x))).toFixed(bd3x == 1 ? 0 : 1) + cde6Y[bd3x]
    }
    ;
    l3x.bHZ0x = function(do4s, fe5j, ccV6P) {
        if (!do4s)
            return do4s;
        var du4y = k3x.fk5p(do4s);
        if (du4y <= fe5j)
            return do4s;
        var biu4y = du4y - do4s.length
          , biw4A = do4s.length - biu4y;
        var fJ5O = Math.ceil(fe5j / 2)
          , ccT6N = fe5j
          , bHP0x = 0;
        if (biu4y < fJ5O)
            fJ5O = fe5j - biu4y;
        if (biw4A < fe5j)
            fe5j = biw4A + Math.ceil((fe5j - biw4A) / 2);
        while (fJ5O <= fe5j) {
            bHP0x = k3x.fk5p(do4s.substr(0, fJ5O));
            var biD4H = ccT6N - bHP0x;
            if (biD4H == 0)
                break;
            if (biD4H == 1) {
                var ccM6G = k3x.fk5p(do4s.charAt(fJ5O));
                if (ccM6G == 1) {
                    fJ5O++;
                    break
                } else {
                    break
                }
            }
            fJ5O += Math.floor(biD4H / 2)
        }
        return do4s.substr(0, fJ5O) + (!!ccV6P ? "" : "...")
    }
})();
(function() {
    function ccL6F() {
        var zZ2x = function(jt6n) {
            if (jt6n < -128) {
                return zZ2x(128 - (-128 - jt6n))
            } else if (jt6n >= -128 && jt6n <= 127) {
                return jt6n
            } else if (jt6n > 127) {
                return zZ2x(-129 + jt6n - 127)
            } else {
                throw new Error("1001")
            }
        };
        var ccK6E = function(jt6n, bj3x) {
            return zZ2x(jt6n + bj3x)
        };
        var ccG6A = function(VP9G, bjd4h) {
            if (VP9G == null) {
                return null
            }
            if (bjd4h == null) {
                return VP9G
            }
            var pG8y = [];
            var ccF6z = bjd4h.length;
            for (var i = 0, br3x = VP9G.length; i < br3x; i++) {
                pG8y[i] = ccK6E(VP9G[i], bjd4h[i % ccF6z])
            }
            return pG8y
        };
        var ccE6y = function(VV9M) {
            if (VV9M == null) {
                return VV9M
            }
            var pG8y = [];
            var ccD6x = VV9M.length;
            for (var i = 0, br3x = ccD6x; i < br3x; i++) {
                pG8y[i] = zZ2x(0 - VV9M[i])
            }
            return pG8y
        };
        var ccC6w = function(bjv4z, PB7u) {
            bjv4z = zZ2x(bjv4z);
            PB7u = zZ2x(PB7u);
            return zZ2x(bjv4z ^ PB7u)
        };
        var bHL0x = function(Px7q, bjE4I) {
            if (Px7q == null || bjE4I == null || Px7q.length != bjE4I.length) {
                return Px7q
            }
            var pG8y = [];
            var ccx6r = Px7q.length;
            for (var i = 0, br3x = ccx6r; i < br3x; i++) {
                pG8y[i] = ccC6w(Px7q[i], bjE4I[i])
            }
            return pG8y
        };
        var bHK0x = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
        var ccv6p = function(cP4T) {
            var Fj3x = [];
            Fj3x.push(bHK0x[cP4T >>> 4 & 15]);
            Fj3x.push(bHK0x[cP4T & 15]);
            return Fj3x.join("")
        };
        var cct6n = function(sX0x) {
            var br3x = sX0x.length;
            if (sX0x == null || br3x < 0) {
                return new String("")
            }
            var Fj3x = [];
            for (var i = 0; i < br3x; i++) {
                Fj3x.push(ccv6p(sX0x[i]))
            }
            return Fj3x.join("")
        };
        var bHI0x = function(Wp9g) {
            if (Wp9g == null || Wp9g.length == 0) {
                return Wp9g
            }
            var bjQ4U = new String(Wp9g);
            var pG8y = [];
            var br3x = bjQ4U.length / 2;
            var bj3x = 0;
            for (var i = 0; i < br3x; i++) {
                var oh8Z = parseInt(bjQ4U.charAt(bj3x++), 16) << 4;
                var oe8W = parseInt(bjQ4U.charAt(bj3x++), 16);
                pG8y[i] = zZ2x(oh8Z + oe8W)
            }
            return pG8y
        };
        var ccr6l = function(cC4G) {
            if (cC4G == null || cC4G == undefined) {
                return cC4G
            }
            var OI7B = encodeURIComponent(cC4G);
            var sX0x = [];
            var bHH0x = OI7B.length;
            for (var i = 0; i < bHH0x; i++) {
                if (OI7B.charAt(i) == "%") {
                    if (i + 2 < bHH0x) {
                        sX0x.push(bHI0x(OI7B.charAt(++i) + "" + OI7B.charAt(++i))[0])
                    } else {
                        throw new Error("1009")
                    }
                } else {
                    sX0x.push(OI7B.charCodeAt(i))
                }
            }
            return sX0x
        };
        var cck6e = function(uj0x) {
            var bd3x = 0;
            bd3x += (uj0x[0] & 255) << 24;
            bd3x += (uj0x[1] & 255) << 16;
            bd3x += (uj0x[2] & 255) << 8;
            bd3x += uj0x[3] & 255;
            return bd3x
        };
        var cvi1x = function(bd3x) {
            var uj0x = [];
            uj0x[0] = bd3x >>> 24 & 255;
            uj0x[1] = bd3x >>> 16 & 255;
            uj0x[2] = bd3x >>> 8 & 255;
            uj0x[3] = bd3x & 255;
            return uj0x
        };
        var ccb6V = function(dv4z, bke4i, br3x) {
            var ee5j = [];
            if (dv4z == null || dv4z.length == 0) {
                return ee5j
            }
            if (dv4z.length < br3x) {
                throw new Error("1003")
            }
            for (var i = 0; i < br3x; i++) {
                ee5j[i] = dv4z[bke4i + i]
            }
            return ee5j
        };
        var bkf4j = function(dv4z, bke4i, qZ9Q, cbV6P, br3x) {
            if (dv4z == null || dv4z.length == 0) {
                return qZ9Q
            }
            if (qZ9Q == null) {
                throw new Error("1004")
            }
            if (dv4z.length < br3x) {
                throw new Error("1003")
            }
            for (var i = 0; i < br3x; i++) {
                qZ9Q[cbV6P + i] = dv4z[bke4i + i]
            }
            return qZ9Q
        };
        var cbQ6K = function(br3x) {
            var bs3x = [];
            for (var i = 0; i < br3x; i++) {
                bs3x[i] = 0
            }
            return bs3x
        };
        var cbP6J = [82, 9, 106, -43, 48, 54, -91, 56, -65, 64, -93, -98, -127, -13, -41, -5, 124, -29, 57, -126, -101, 47, -1, -121, 52, -114, 67, 68, -60, -34, -23, -53, 84, 123, -108, 50, -90, -62, 35, 61, -18, 76, -107, 11, 66, -6, -61, 78, 8, 46, -95, 102, 40, -39, 36, -78, 118, 91, -94, 73, 109, -117, -47, 37, 114, -8, -10, 100, -122, 104, -104, 22, -44, -92, 92, -52, 93, 101, -74, -110, 108, 112, 72, 80, -3, -19, -71, -38, 94, 21, 70, 87, -89, -115, -99, -124, -112, -40, -85, 0, -116, -68, -45, 10, -9, -28, 88, 5, -72, -77, 69, 6, -48, 44, 30, -113, -54, 63, 15, 2, -63, -81, -67, 3, 1, 19, -118, 107, 58, -111, 17, 65, 79, 103, -36, -22, -105, -14, -49, -50, -16, -76, -26, 115, -106, -84, 116, 34, -25, -83, 53, -123, -30, -7, 55, -24, 28, 117, -33, 110, 71, -15, 26, 113, 29, 41, -59, -119, 111, -73, 98, 14, -86, 24, -66, 27, -4, 86, 62, 75, -58, -46, 121, 32, -102, -37, -64, -2, 120, -51, 90, -12, 31, -35, -88, 51, -120, 7, -57, 49, -79, 18, 16, 89, 39, -128, -20, 95, 96, 81, 127, -87, 25, -75, 74, 13, 45, -27, 122, -97, -109, -55, -100, -17, -96, -32, 59, 77, -82, 42, -11, -80, -56, -21, -69, 60, -125, 83, -103, 97, 23, 43, 4, 126, -70, 119, -42, 38, -31, 105, 20, 99, 85, 33, 12, 125];
        var FN3x = 64;
        var Wx9o = 64;
        var bHx0x = 4;
        var cbL6F = function(oV8N) {
            var bHw0x = [];
            if (oV8N == null || oV8N == undefined || oV8N.length == 0) {
                return cbQ6K(Wx9o)
            }
            if (oV8N.length >= Wx9o) {
                return ccb6V(oV8N, 0, Wx9o)
            } else {
                for (var i = 0; i < Wx9o; i++) {
                    bHw0x[i] = oV8N[i % oV8N.length]
                }
            }
            return bHw0x
        };
        var cbH6B = function(WE0x) {
            if (WE0x == null || WE0x.length % FN3x != 0) {
                throw new Error("1005")
            }
            var bkO4S = [];
            var bj3x = 0;
            var cbD6x = WE0x.length / FN3x;
            for (var i = 0; i < cbD6x; i++) {
                bkO4S[i] = [];
                for (var j = 0; j < FN3x; j++) {
                    bkO4S[i][j] = WE0x[bj3x++]
                }
            }
            return bkO4S
        };
        var cbA6u = function(bHt0x) {
            var oh8Z = bHt0x >>> 4 & 15;
            var oe8W = bHt0x & 15;
            var bj3x = oh8Z * 16 + oe8W;
            return cbP6J[bj3x]
        };
        var bHq0x = function(bla4e) {
            if (bla4e == null) {
                return null
            }
            var bHn0x = [];
            for (var i = 0, br3x = bla4e.length; i < br3x; i++) {
                bHn0x[i] = cbA6u(bla4e[i])
            }
            return bHn0x
        };
        var cbj6d = function(Gd3x, oV8N) {
            if (Gd3x == null) {
                return null
            }
            if (Gd3x.length == 0) {
                return []
            }
            if (Gd3x.length % FN3x != 0) {
                throw new Error("1005")
            }
            oV8N = cbL6F(oV8N);
            var blm4q = oV8N;
            var blp4t = cbH6B(Gd3x);
            var Ns6m = [];
            var cbi6c = blp4t.length;
            for (var i = 0; i < cbi6c; i++) {
                var blw4A = bHq0x(blp4t[i]);
                blw4A = bHq0x(blw4A);
                var blx4B = bHL0x(blw4A, blm4q);
                var cbh6b = ccG6A(blx4B, ccE6y(blm4q));
                blx4B = bHL0x(cbh6b, oV8N);
                bkf4j(blx4B, 0, Ns6m, i * FN3x, FN3x);
                blm4q = blp4t[i]
            }
            var bHj0x = [];
            bkf4j(Ns6m, Ns6m.length - bHx0x, bHj0x, 0, bHx0x);
            var br3x = cck6e(bHj0x);
            if (br3x > Ns6m.length) {
                throw new Error("1006")
            }
            var pG8y = [];
            bkf4j(Ns6m, 0, pG8y, 0, br3x);
            return pG8y
        };
        var caV6P = function(Xc0x, J3x) {
            if (Xc0x == null) {
                return null
            }
            var bHh0x = new String(Xc0x);
            if (bHh0x.length == 0) {
                return []
            }
            var Gd3x = bHI0x(bHh0x);
            if (J3x == null || J3x == undefined) {
                throw new Error("1007")
            }
            var oV8N = ccr6l(J3x);
            return cbj6d(Gd3x, oV8N)
        };
        this.caQ6K = function(Xc0x, J3x) {
            var caN6H = caV6P(Xc0x, J3x);
            var blG4K = new String(cct6n(caN6H));
            var Xk0x = [];
            var caJ6D = blG4K.length / 2;
            var bj3x = 0;
            for (var i = 0; i < caJ6D; i++) {
                Xk0x.push("%");
                Xk0x.push(blG4K.charAt(bj3x++));
                Xk0x.push(blG4K.charAt(bj3x++))
            }
            return Xk0x.join("")
        }
    }
    window.settmusic = (new ccL6F).caQ6K
})();
(function() {
    var c2x = NEJ.P, bn3x = NEJ.F, H3x = c2x("nej.ut"), k3x = c2x("nej.u"), h3x = c2x("nej.v"), v3x = c2x("nej.j"), p3x = c2x("nm.d"), l3x = c2x("nm.x"), J3x = "Search-tracks_", b2x;
    p3x.eP5U({
        "search-suggest": {
            url: "/api/search/suggest/web",
            type: "POST",
            format: function(P3x) {
                return P3x
            },
            onerror: function(P3x, e3x) {
                if (P3x.code == 407) {
                    e3x.onForbidden()
                }
            }
        },
        "search-multimatch": {
            url: "/api/search/suggest/multimatch",
            type: "GET"
        },
        "search-list": {
            url: "/api/cloudsearch/get/web",
            type: "post",
            noescape: true,
            filter: function(e3x, bc3x) {
                window.log && window.log("searchkeywordclient", {
                    type: this.caH6B(parseInt(e3x.data.type)) || "suggest",
                    keyword: e3x.data.s,
                    offset: e3x.offset
                })
            },
            format: function(P3x, e3x) {
                if (P3x.abroad) {
                    try {
                        P3x.result = JSON.parse(decodeURIComponent(settmusic(P3x.result, p3x.sk)))
                    } catch (e) {}
                }
                P3x.result = P3x.result || {};
                var j3x, co4s, jV7O = [], ty0x = e3x.data.s || "", fX5c = e3x.data.limit, t3x = parseInt(e3x.data.type) || 1, m3x = P3x.result;
                switch (t3x) {
                case 1:
                    j3x = this.bHe0x(m3x.songs, e3x.data.hlpretag, e3x.data.hlposttag);
                    co4s = m3x.songCount;
                    break;
                case 10:
                    j3x = m3x.albums;
                    co4s = m3x.albumCount;
                    break;
                case 100:
                    j3x = m3x.artists;
                    co4s = m3x.artistCount;
                    break;
                case 1e3:
                    j3x = m3x.playlists;
                    co4s = m3x.playlistCount;
                    break;
                case 1002:
                    j3x = m3x.userprofiles;
                    co4s = m3x.userprofileCount;
                    break;
                case 1004:
                    j3x = m3x.mvs;
                    co4s = m3x.mvCount;
                    break;
                case 1006:
                    j3x = this.bHe0x(m3x.songs, e3x.data.hlpretag, e3x.data.hlposttag);
                    co4s = m3x.songCount;
                    break;
                case 1009:
                    var px8p = m3x.djRadios;
                    if (!!px8p) {
                        k3x.be3x(px8p, function(A3x, r3x, caD6x) {
                            A3x.xid = A3x.id;
                            A3x.id = A3x.id + "_rad"
                        });
                        if (px8p.length) {
                            this.sq9h("radio_search-" + e3x.data.s, px8p)
                        }
                    }
                    co4s = Math.min(m3x.djprogramCount, 500);
                    j3x = m3x.djprograms || [];
                    if (e3x.data.isPub) {
                        k3x.me7X(px8p, function(A3x, r3x, caD6x) {
                            A3x.stype = 1;
                            j3x.unshift(A3x)
                        });
                        co4s = Math.min(j3x.length, 500)
                    }
                    break
                }
                this.x3x("onsearchload", P3x);
                if (j3x && j3x.length) {
                    for (var i = 0; i < fX5c; i++) {
                        if (i < j3x.length) {
                            jV7O.push(j3x[i])
                        } else {
                            jV7O.push(null)
                        }
                    }
                }
                return {
                    more: !0,
                    total: Math.min(co4s || 0, ty0x.length < 3 ? 500 : 5e3),
                    list: jV7O
                }
            },
            onerror: function(P3x, e3x) {
                e3x.onload(e3x, []);
                if (k3x.ga5f(e3x.onerror)) {
                    e3x.onerror(P3x)
                }
            }
        }
    });
    p3x.DH3x = NEJ.C();
    b2x = p3x.DH3x.O3x(p3x.hc6W);
    b2x.cl4p = function() {
        this.cs4w()
    }
    ;
    b2x.caC6w = function(J3x, e3x) {
        if (!J3x)
            return;
        if (!!this.bHd0x)
            v3x.jj6d(this.bHd0x);
        this.bHd0x = this.ck4o("search-suggest", NEJ.X({
            data: {
                s: J3x,
                limit: 8
            }
        }, e3x))
    }
    ;
    b2x.caz6t = function(J3x, e3x) {
        if (!J3x)
            return;
        this.ck4o("search-multimatch", NEJ.X({
            data: {
                s: J3x
            }
        }, e3x))
    }
    ;
    b2x.bHe0x = function() {
        var cax6r = function(gZ6T, bGZ0x, bGY0x) {
            var caj6d = gZ6T.match(new RegExp(bGZ0x + "(.+?)" + bGY0x,"gi"))
              , ct4x = 0;
            k3x.be3x(caj6d, function(q3x) {
                ct4x += q3x.replace(new RegExp(bGZ0x,"g"), "").replace(new RegExp(bGY0x,"g"), "").length
            });
            return ct4x
        };
        return function(iB6v, cai6c, cah6b) {
            var bGV0x = [];
            k3x.be3x(iB6v, function(bf3x, bd3x) {
                bf3x = l3x.DT3x(bf3x);
                var Xr0x = bf3x.lyrics || [], du4y = Xr0x.length, iZ6T = 0, co4s = 4, Xu0x = {
                    l: 0,
                    v: 0
                }, bmL5Q;
                if (du4y > 4) {
                    k3x.be3x(Xr0x, function(gZ6T, r3x) {
                        var bGU0x = cax6r(gZ6T, cai6c, cah6b);
                        if (bGU0x > Xu0x.v) {
                            Xu0x.v = bGU0x;
                            Xu0x.l = r3x
                        }
                    });
                    iZ6T = Xu0x.l;
                    iZ6T = Math.max(iZ6T, 0);
                    bmL5Q = du4y - iZ6T - 4;
                    if (bmL5Q < 0)
                        iZ6T += bmL5Q;
                    bf3x.lrcAbstractEnd = iZ6T + co4s - 1
                } else {
                    bf3x.lrcAbstractEnd = du4y - 1
                }
                bf3x.lrcAbstractStart = iZ6T;
                bf3x.indexId = (Xr0x && Xr0x.length ? "L" : "NL") + bf3x.id;
                bGV0x.push(bf3x)
            });
            return bGV0x
        }
    }();
    b2x.caH6B = function(t3x) {
        switch (t3x) {
        case 1:
            return "song";
            break;
        case 100:
            return "artist";
            break;
        case 10:
            return "album";
            break;
        case 1004:
            return "mv";
            break;
        case 1006:
            return "lyric";
            break;
        case 1e3:
            return "list";
            break;
        case 1009:
            return "djradio";
            break;
        case 1002:
            return "user";
            break;
        default:
            return "suggest";
            break
        }
    }
})();
(function() {
    var c2x = NEJ.P, a2x = c2x("nej.e"), h3x = c2x("nej.v"), k3x = c2x("nej.u"), H3x = c2x("nej.ut"), v3x = c2x("nej.j"), p3x = c2x("nm.d"), l3x = c2x("nm.x"), F3x = c2x("nm.m"), n3x = c2x("nm.l"), cY4c = c2x("nm.i"), L3x = c2x("nm.m.sch"), b2x, K3x;
    var XD0x = {
        songs: 1,
        artists: 100,
        albums: 10,
        playlists: 1e3,
        mvs: 1004
    };
    L3x.Me5j = NEJ.C();
    b2x = L3x.Me5j.O3x(H3x.cz4D);
    b2x.cl4p = function(f3x) {
        this.cs4w();
        this.bQ3x(f3x);
        this.R3x = p3x.DH3x.fY5d()
    }
    ;
    b2x.bQ3x = function(f3x) {
        this.o3x = f3x;
        var j3x = a2x.I3x(f3x, "j-flag");
        this.ew5B = j3x[0];
        this.bnh5m = j3x[1];
        this.ce4i = j3x[2];
        this.mu7n = j3x[3];
        h3x.s3x(this.ew5B, "input", this.fD5I.g3x(this));
        h3x.s3x(this.ew5B, "keyup", this.fD5I.g3x(this));
        h3x.s3x(this.ew5B, "focus", this.gb5g.g3x(this));
        h3x.s3x(this.bnh5m, "click", this.gb5g.g3x(this));
        h3x.s3x(this.ew5B, "blur", this.bnC5H.g3x(this));
        h3x.s3x(this.ce4i, "click", this.XF0x.g3x(this));
        h3x.s3x(this.o3x, "keydown", this.bnF5K.g3x(this));
        h3x.s3x(this.o3x, "keypress", this.XI0x.g3x(this));
        h3x.s3x(this.mu7n, "mouseover", this.LF5K.g3x(this));
        h3x.s3x(this.mu7n, "mouseout", this.LF5K.g3x(this));
        if (this.ew5B.value) {
            this.ew5B.value = ""
        }
        if (this.ew5B.style.opacity != null) {
            this.ew5B.style.opacity = 1
        }
    }
    ;
    b2x.fD5I = function(d2x) {
        if (d2x.type == "keyup" && d2x.keyCode == 8 || d2x.keyCode == 46) {
            this.Dn3x()
        } else if (d2x.type == "input" || d2x.type == "propertychange") {
            setTimeout(this.Dn3x.g3x(this), 0)
        }
    }
    ;
    b2x.gb5g = function() {
        this.wc0x(this.bnh5m, !1);
        a2x.y3x(this.o3x, "m-srch-fcs");
        this.ew5B.focus();
        this.Dn3x();
        a2x.y3x(a2x.I3x("g-topbar", "j-showoff")[0], "f-hide")
    }
    ;
    b2x.bnC5H = function() {
        if (!this.ew5B.value) {
            this.wc0x(this.bnh5m, !0)
        }
        var Dm3x = a2x.I3x(this.mu7n, "slt");
        if (this.XK0x(this.mu7n) && Dm3x.length > 0 && a2x.u3x(Dm3x[0], "type")) {
            var hq6k = Dm3x[0].href;
            if (/#\/(song|album|artist|playlist)\?id=(\d+)/.test(hq6k)) {
                window.log("search", {
                    rid: RegExp.$2,
                    type: RegExp.$1,
                    keyword: this.ew5B.value
                })
            }
            this.bnZ5e(Dm3x[0].href)
        }
        this.wc0x(this.mu7n, !1);
        a2x.w3x(this.o3x, "m-srch-fcs")
    }
    ;
    b2x.wc0x = function(f3x, kV7O) {
        a2x.Y3x(f3x, "display", !kV7O ? "none" : "")
    }
    ;
    b2x.XK0x = function(f3x) {
        return a2x.da4e(f3x, "display") != "none"
    }
    ;
    b2x.Dn3x = function() {
        var Dl3x = function(ua0x, cL4P) {
            if (!cL4P)
                return;
            return cL4P.replace(new RegExp(l3x.bIt0x(ua0x),"gi"), function($1) {
                return '<span class="s-fc7 f-tdn">' + $1 + "</span>"
            })
        };
        var cac6W = function(hy6s) {
            var gi5n = this.o3x.clientWidth > 250 ? 41 : 17;
            if (l3x.Fg3x(hy6s) > gi5n) {
                return l3x.yH1x(hy6s, gi5n) + "..."
            } else {
                return hy6s
            }
        };
        var XS0x = function(m3x) {
            return m3x.songs && m3x.songs.length || m3x.albums && m3x.albums.length || m3x.artists && m3x.artists.length || m3x.playlists && m3x.playlists.length
        };
        var tx0x = function(ua0x, d2x) {
            if (!l3x.bIu0x(this.ew5B) || l3x.jf6Z(this.ew5B.value)) {
                this.wc0x(this.mu7n, !1);
                return
            }
            d2x.keyword = k3x.dJ4N(ua0x);
            var dz4D = a2x.bP3x("m-search-suggest", d2x, {
                mark: Dl3x.g3x(this, ua0x),
                cutStr: cac6W.g3x(this)
            })
              , sp9g = d2x.result.order;
            this.mu7n.innerHTML = dz4D;
            this.wc0x(this.mu7n, XS0x(d2x.result) ? !0 : !1);
            if (!!sp9g && !!sp9g.length && XD0x[sp9g[0]]) {
                this.bom5r = {
                    keyword: ua0x,
                    type: XD0x[sp9g[0]]
                }
            }
        };
        var cab6V = function() {
            this.wc0x(this.mu7n, !1);
            return
        };
        return function() {
            var A3x = this.ew5B.value;
            if (l3x.jf6Z(A3x)) {
                this.wc0x(this.mu7n, !1);
                return
            }
            this.R3x.caC6w(A3x, {
                onload: tx0x.g3x(this, A3x),
                onForbidden: cab6V.g3x(this)
            })
        }
    }();
    b2x.XI0x = function(d2x) {
        if (d2x.keyCode != 13)
            return;
        var Dm3x = a2x.I3x(this.mu7n, "slt");
        if (this.XK0x(this.mu7n) && Dm3x.length > 0) {
            this.bnZ5e(Dm3x[0].href);
            this.wc0x(this.mu7n, !1);
            return
        }
        this.XF0x();
        this.wc0x(this.mu7n, !1)
    }
    ;
    b2x.bnF5K = function(d2x) {
        if (!this.XK0x(this.mu7n))
            return;
        var j3x = a2x.I3x(this.mu7n, "xtag")
          , du4y = j3x.length
          , r3x = k3x.cW4a(j3x, function(q3x) {
            return a2x.bB3x(q3x, "slt")
        });
        switch (d2x.keyCode) {
        case 38:
            if (r3x >= 0)
                a2x.w3x(j3x[r3x], "slt");
            a2x.y3x(j3x[r3x <= 0 ? du4y - 1 : r3x - 1], "slt");
            break;
        case 40:
            if (r3x >= 0)
                a2x.w3x(j3x[r3x], "slt");
            a2x.y3x(j3x[(r3x + 1) % du4y], "slt");
            break
        }
    }
    ;
    b2x.LF5K = function(d2x) {
        if (!this.XK0x(this.mu7n))
            return;
        var Li5n, E3x = h3x.U3x(d2x), j3x = a2x.I3x(this.mu7n, "xtag");
        if (E3x.tagName.toLowerCase() == "a")
            Li5n = E3x;
        else if (E3x.parentNode.tagName.toLowerCase() == "a")
            Li5n = E3x.parentNode;
        if (!Li5n)
            return;
        k3x.be3x(j3x, function(q3x) {
            a2x.w3x(q3x, "slt");
            a2x.u3x(q3x, "type", "")
        });
        if (d2x.type == "mouseout")
            return;
        a2x.y3x(Li5n, "slt");
        a2x.u3x(Li5n, "type", "mouse")
    }
    ;
    b2x.XF0x = function() {
        var dF4J = location.hash
          , r3x = dF4J.indexOf("?")
          , bw3x = k3x.hj6d(dF4J.substring(r3x + 1));
        bw3x.s = this.ew5B.value;
        if (l3x.jf6Z(bw3x.s))
            return;
        if (!bw3x.type && this.bom5r && this.bom5r.keyword == bw3x.s) {
            bw3x.type = this.bom5r.type
        }
        this.bnZ5e("/search/#/?" + k3x.db4f(bw3x));
        this.ew5B.blur()
    }
    ;
    b2x.bnZ5e = function(V3x) {
        if (location.dispatch2) {
            location.dispatch2(V3x)
        } else {
            location.href = V3x
        }
    }
    ;
    L3x.Me5j.bZW6Q = function() {
        var j3x = a2x.I3x(document.body, "j-suggest");
        k3x.be3x(j3x, function(q3x) {
            new L3x.Me5j(q3x)
        })
    }
    ;
    L3x.Me5j.bZW6Q()
})();
(function() {
    var c2x = NEJ.P, bn3x = NEJ.F, H3x = c2x("nej.ut"), k3x = c2x("nej.u"), h3x = c2x("nej.v"), v3x = c2x("nej.j"), p3x = c2x("nm.d"), b2x;
    p3x.eP5U({
        "mv_artist-list": {
            url: "/api/artist/mvs",
            type: "get",
            format: function(P3x) {
                return {
                    total: P3x.size || 0,
                    list: P3x.mvs || []
                }
            }
        },
        "album_artist-list": {
            url: "/api/artist/albums/{id}",
            type: "get",
            format: function(P3x) {
                return {
                    total: P3x.size || 0,
                    list: P3x.hotAlbums || []
                }
            }
        },
        "ydcailing_post-list": {
            url: "/api/cailing/all",
            type: "POST",
            format: function(P3x) {
                return P3x.result.songs
            }
        },
        "wo-list": {
            url: "/api/unicom/wo/content",
            format: function(P3x, e3x) {
                if (e3x.offset == 0) {
                    var or8j = P3x.data[0];
                    this.x3x("onfirstload", or8j);
                    P3x.data.splice(0, 1);
                    return P3x.data
                } else {
                    return P3x.data
                }
            }
        }
    });
    p3x.Dc3x = NEJ.C();
    b2x = p3x.Dc3x.O3x(p3x.hc6W);
    b2x.cl4p = function() {
        this.cs4w()
    }
    ;
    b2x.boy5D = function() {
        var rF9w = "LOCAL_FLAG";
        return function(t3x, bZV6P) {
            var i3x = this.BZ2x(rF9w, {});
            if (i3x[t3x]) {
                return true
            } else {
                if (!bZV6P) {
                    i3x[t3x] = true;
                    this.vB0x(rF9w, i3x)
                }
                return false
            }
        }
    }()
})();
(function() {
    var c2x = NEJ.P, a2x = c2x("nej.e"), k3x = c2x("nej.u"), M3x = c2x("nej.ut"), boO5T;
    if (!!M3x.ob8T)
        return;
    M3x.ob8T = NEJ.C();
    boO5T = M3x.ob8T.O3x(M3x.cz4D);
    boO5T.bk3x = function() {
        var bZU6O = function(d2x) {
            d2x.matched = d2x.source == d2x.target
        };
        return function(e3x) {
            e3x.oncheck = e3x.oncheck || bZU6O;
            this.bl3x(e3x);
            this.bV4Z = e3x.list;
            this.im6g = e3x.dataset || "id";
            this.jT7M = e3x.selected || "js-selected"
        }
    }();
    boO5T.np8h = function(A3x) {
        var E3x, d2x = {
            target: A3x
        };
        k3x.be3x(this.bV4Z, function(f3x) {
            delete d2x.matched;
            d2x.source = a2x.u3x(f3x, this.im6g);
            this.x3x("oncheck", d2x);
            if (!d2x.matched) {
                a2x.w3x(f3x, this.jT7M)
            } else {
                E3x = f3x;
                a2x.y3x(f3x, this.jT7M)
            }
        }, this);
        return E3x
    }
})();
(function() {
    var c2x = NEJ.P, X3x = NEJ.O, bn3x = NEJ.F, a2x = c2x("nej.e"), M3x = c2x("nej.ut"), ot8l;
    if (!!M3x.cM4Q)
        return;
    M3x.cM4Q = NEJ.C();
    ot8l = M3x.cM4Q.O3x(M3x.cz4D);
    ot8l.cl4p = function() {
        this.iF6z = {};
        this.cs4w();
        this.bJ3x()
    }
    ;
    ot8l.bk3x = function(e3x) {
        this.bl3x(e3x);
        this.bpu5z = e3x.umi || "";
        this.zv1x = e3x.dispatcher;
        this.GV4Z = e3x.composite || X3x;
        this.blq4u({
            onshow: this.eV5a.g3x(this),
            onhide: this.jM7F.g3x(this),
            onrefresh: this.ei5n.g3x(this),
            onmessage: this.qq9h.g3x(this),
            onbeforehide: this.bZS6M.g3x(this)
        })
    }
    ;
    ot8l.bD3x = function() {
        delete this.bpu5z;
        this.iF6z = {};
        this.bH3x()
    }
    ;
    ot8l.tl0x = function(d2x) {
        if (!!d2x)
            d2x.stopped = !0
    }
    ;
    ot8l.bJ3x = bn3x;
    ot8l.eV5a = bn3x;
    ot8l.jM7F = bn3x;
    ot8l.ei5n = bn3x;
    ot8l.qq9h = bn3x;
    ot8l.bZS6M = bn3x;
    ot8l.oW8O = function(nu8m, bF3x, eG5L) {
        this.zv1x.bpJ6D({
            to: nu8m,
            mode: eG5L || 0,
            data: bF3x,
            from: this.bpu5z
        })
    }
    ;
    ot8l.cvn1x = function(t3x, i3x) {
        this.zv1x.zD2x(t3x, {
            from: this.bpu5z,
            data: i3x
        })
    }
    ;
    ot8l.cvp1x = function() {
        this.zv1x.lL7E.apply(this.zv1x, arguments)
    }
    ;
    ot8l.bZN6H = function() {
        return this.iF6z
    }
    ;
    a2x.XZ0x = function() {
        if (!!window.dispatcher) {
            dispatcher.bGR0x.apply(dispatcher, arguments)
        }
    }
})();
(function() {
    var c2x = NEJ.P, bn3x = NEJ.F, X3x = NEJ.O, a2x = c2x("nej.e"), k3x = c2x("nej.u"), M3x = c2x("nej.ut"), vF0x;
    if (!!M3x.dp4t)
        return;
    M3x.dp4t = NEJ.C();
    vF0x = M3x.dp4t.O3x(M3x.cM4Q);
    vF0x.bZL5Q = function(e3x) {
        var bE3x;
        if (!bE3x) {
            var i3x = e3x.input || X3x;
            bE3x = a2x.z3x(i3x.parent)
        }
        if (!bE3x) {
            var i3x = e3x.data || X3x;
            bE3x = a2x.z3x(i3x.parent)
        }
        if (!bE3x) {
            bE3x = a2x.z3x(e3x.parent)
        }
        return bE3x
    }
    ;
    vF0x.eV5a = function(e3x) {
        var bE3x = this.bZL5Q(e3x);
        if (!!bE3x && !!this.o3x)
            bE3x.appendChild(this.o3x);
        this.gy5D(e3x);
        this.bGQ0x("onshow", e3x);
        this.ei5n(e3x)
    }
    ;
    vF0x.ei5n = function(e3x) {
        this.fU5Z(e3x);
        this.bGQ0x("onrefresh", e3x)
    }
    ;
    vF0x.jM7F = function() {
        this.kL7E();
        this.bZJ5O();
        a2x.mi7b(this.o3x)
    }
    ;
    vF0x.bGM0x = function() {
        var fW5b = /^onshow|onrefresh|delay$/;
        return function(bX4b) {
            return fW5b.test(bX4b)
        }
    }();
    vF0x.bGL0x = bn3x;
    vF0x.bGQ0x = function() {
        var bGJ0x = function(bw3x, e3x, bX4b, oM8E) {
            if (this.bGM0x(oM8E))
                return;
            if (!!bw3x)
                bX4b += (bX4b.indexOf("?") > 1 ? "&" : "?") + bw3x;
            var cV4Z = this.bGL0x(oM8E, e3x) || {};
            cV4Z.location = e3x;
            cV4Z.parent = this.iF6z[oM8E];
            this.zv1x.ik6e(bX4b, {
                input: cV4Z
            })
        };
        return function(t3x, e3x) {
            if (!e3x.nodelay) {
                if (!!this.GV4Z.delay)
                    return;
                var bGI0x = this.GV4Z[t3x] || X3x;
                if (bGI0x.delay)
                    return
            }
            var bw3x = k3x.db4f(e3x.param) || "";
            if (t3x == "onrefresh") {
                k3x.ej5o(this.GV4Z, bGJ0x.g3x(this, bw3x, e3x))
            }
            k3x.ej5o(bGI0x, bGJ0x.g3x(this, bw3x, e3x))
        }
    }();
    vF0x.bZJ5O = function() {
        var xY1x = function(bX4b, oM8E) {
            if (!this.bGM0x(oM8E))
                this.zv1x.bp3x(bX4b)
        };
        return function() {
            k3x.ej5o(this.GV4Z, xY1x, this);
            k3x.ej5o(this.GV4Z.onshow, xY1x, this);
            k3x.ej5o(this.GV4Z.onrefresh, xY1x, this)
        }
    }()
})();
(function() {
    var c2x = NEJ.P, a2x = c2x("nej.e"), h3x = c2x("nej.v"), H3x = c2x("nej.ut"), v3x = c2x("nej.j"), k3x = c2x("nej.u"), F3x = c2x("nm.m"), l3x = c2x("nm.x"), p3x = c2x("nm.d"), b2x, K3x;
    F3x.Ke5j = NEJ.C();
    b2x = F3x.Ke5j.O3x(H3x.cz4D);
    b2x.cl4p = function() {
        this.cs4w();
        this.o3x = a2x.z3x("g-topbar");
        var j3x = a2x.I3x(this.o3x, "j-tflag");
        this.bqC6w = j3x[0];
        this.CR2x = j3x[1];
        this.bGH0x = j3x[2];
        this.bqH6B = j3x[3];
        this.bZt5y = H3x.ob8T.B3x({
            list: this.bqC6w.getElementsByTagName("a"),
            selected: "z-slt",
            dataset: "module"
        });
        this.bqL6F = H3x.ob8T.B3x({
            list: this.bqH6B.getElementsByTagName("a"),
            selected: "z-slt",
            dataset: "module"
        });
        this.bT3x([[this.o3x, "click", this.Ka5f.g3x(this)], [this.CR2x, "click", this.cx4B.g3x(this)], [this.CR2x, "mouseout", this.bGG0x.g3x(this, 0)], [this.CR2x, "mouseover", this.bGG0x.g3x(this, 1)]]);
        window.scrollTopbar = this.bZq5v.g3x(this);
        window.matchNav = this.bGE0x.g3x(this);
        window.polling = this.tX0x.g3x(this);
        this.bqV6P = p3x.Dc3x.B3x();
        this.bZo5t();
        this.Hu4y();
        var bw3x = k3x.hj6d(location.href.split("?")[1]) || {};
        if (bw3x.market) {
            a2x.z3x("topbar-download-link").href = "/download?market=" + bw3x.market
        }
        var brm6g = a2x.I3x(this.o3x, "j-showoff");
        if (brm6g && !this.bqV6P.boy5D("newMvSearch")) {
            a2x.w3x(brm6g[0], "f-hide");
            window.setTimeout(function() {
                a2x.y3x(brm6g[0], "f-hide")
            }, 5e3)
        }
    }
    ;
    b2x.tX0x = function(d2x) {
        var dF4J = l3x.Fv3x();
        if (!/^\/msg/.test(dF4J)) {
            var ut0x = 0;
            ut0x += d2x.comment;
            ut0x += d2x.forward;
            ut0x += d2x.msg;
            ut0x += d2x.notice;
            if (ut0x > 0) {
                ut0x = ut0x > 99 ? "99+" : ut0x;
                this.Jz4D.innerText = ut0x;
                this.Hy4C.innerText = ut0x;
                a2x.w3x(this.Jz4D, "f-hide");
                a2x.w3x(this.Hy4C, "f-hide");
                this.Yi0x = true
            } else {
                a2x.y3x(this.Jz4D, "f-hide");
                a2x.y3x(this.Hy4C, "f-hide");
                this.Yi0x = false
            }
            var ev5A = "/at";
            if (d2x.notice)
                ev5A = "/notify";
            if (d2x.comment)
                ev5A = "/comment";
            if (d2x.msg > 0)
                ev5A = "/private";
            if (d2x.forward > 0)
                ev5A = "/at";
            this.Hy4C.parentNode.href = "/msg/#" + ev5A
        } else {
            this.Hy4C.parentNode.href = "javascript:;";
            a2x.y3x(this.Jz4D, "f-hide");
            a2x.y3x(this.Hy4C, "f-hide");
            this.Yi0x = false
        }
        var j3x = a2x.I3x(this.bqC6w, "j-t");
        if (!/^\/friend/.test(dF4J)) {
            if (j3x && j3x.length) {
                a2x.Y3x(j3x[0], "display", d2x.event > 0 ? "" : "none")
            }
        } else {
            a2x.Y3x(j3x[0], "display", "none")
        }
    }
    ;
    b2x.cx4B = function(d2x) {
        var f3x = h3x.U3x(d2x, "d:action");
        if (f3x) {
            switch (a2x.u3x(f3x, "action")) {
            case "login":
                h3x.cg4k(d2x);
                var t3x = a2x.u3x(f3x, "type");
                if (t3x) {
                    if (t3x == "sina" || t3x == "tencent")
                        top.open(f3x.href);
                    else
                        top.login(t3x == "mobile" ? 0 : 3)
                } else {
                    top.login()
                }
                break;
            case "logout":
                h3x.cg4k(d2x);
                top.logout();
                break;
            case "viewStore":
                if (!this.bqV6P.boy5D("storeNew")) {
                    a2x.y3x(this.cvt1x, "f-vhide")
                }
                break;
            case "viewLevel":
                if (!this.bqV6P.boy5D("levelNew")) {
                    a2x.y3x(this.cvx1x, "f-vhide")
                }
                break
            }
        }
    }
    ;
    b2x.Ka5f = function(d2x) {
        var f3x = h3x.U3x(d2x, "d:action");
        if (!f3x)
            return;
        var W3x = a2x.u3x(f3x, "action");
        switch (W3x) {
        case "bilog":
            var baC2x = a2x.u3x(f3x, "logAction")
              , baD2x = a2x.u3x(f3x, "logJson");
            window.log(baC2x, baD2x);
            break
        }
    }
    ;
    b2x.bGG0x = function(wM1x, d2x) {
        if (this.baJ2x) {
            this.baJ2x.style.display = !wM1x ? "none" : "";
            (wM1x || !this.Yi0x ? a2x.y3x : a2x.w3x).call(window, this.Jz4D, "f-hide")
        }
    }
    ;
    b2x.bZq5v = function(fR5W) {
        a2x.Y3x(this.o3x, "top", -fR5W + "px")
    }
    ;
    b2x.bGE0x = function(ev5A, bZa5f) {
        this.bZt5y.np8h(ev5A);
        if (ev5A == "discover") {
            a2x.y3x(this.bGH0x, "f-hide");
            a2x.w3x(this.bqH6B, "f-hide");
            window.g_topBarHeight = 105;
            this.bqL6F.np8h(bZa5f)
        } else {
            a2x.w3x(this.bGH0x, "f-hide");
            a2x.y3x(this.bqH6B, "f-hide");
            window.g_topBarHeight = 75
        }
    }
    ;
    b2x.bZo5t = function() {
        var us0x = a2x.z3x("g_iframe");
        if (!us0x)
            return;
        var gk5p = us0x.contentWindow.document.getElementById("g_top");
        this.bGE0x(a2x.u3x(gk5p, "module"), a2x.u3x(gk5p, "sub"))
    }
    ;
    var Yk0x = {}
      , bGz0x = /\/\/\w+/
      , bYY5d = {
        avatarUrl: function(a, b) {
            a = a || "";
            b = b || "";
            return a.replace(bGz0x, "") !== b.replace(bGz0x, "")
        },
        userId: true,
        nickname: true,
        reward: true,
        topic: true,
        djStatus: true
    };
    b2x.bYX5c = function(Yl0x) {
        var mI8A = k3x.cW4a(bYY5d, function(A3x, J3x) {
            if (k3x.ga5f(A3x)) {
                return A3x(Yl0x[J3x], Yk0x[J3x])
            } else {
                return Yl0x[J3x] !== Yk0x[J3x]
            }
        });
        Yk0x = Yl0x;
        return Yl0x[mI8A]
    }
    ;
    b2x.Hu4y = function() {
        var dj4n = GUser || {}
          , bYW5b = GUserAcc || {};
        if (dj4n && dj4n.userId) {
            var bGw0x = NEJ.X(dj4n, bYW5b);
            if (this.bYX5c(bGw0x)) {
                a2x.dL4P(this.CR2x, "m-topbar-user-login", bGw0x)
            }
        } else {
            Yk0x = {};
            this.CR2x.innerHTML = a2x.hX6R("m-topbar-user-unlogin");
            var j3x = a2x.I3x(this.bqC6w, "j-t");
            a2x.Y3x(j3x[0], "display", "none")
        }
        a2x.w3x(this.CR2x, "f-hide");
        this.Yi0x = false;
        var j3x = a2x.I3x(this.CR2x, "j-uflag");
        if (dj4n && dj4n.userId) {
            this.Jz4D = j3x.shift();
            this.baJ2x = j3x.shift();
            this.Hy4C = j3x.shift()
        } else {
            this.baJ2x = j3x.shift()
        }
    }
})();
(function() {
    var c2x = NEJ.P, X3x = NEJ.O, bn3x = NEJ.F, h3x = c2x("nej.v"), H3x = c2x("nej.ut"), p3x = c2x("nm.d"), b2x, K3x;
    p3x.eP5U({
        "polling-get": {
            type: "GET",
            url: "/api/pl/count",
            format: function(P3x) {
                h3x.x3x(p3x.ri9Z, "message", P3x)
            }
        }
    });
    p3x.ri9Z = NEJ.C();
    b2x = p3x.ri9Z.O3x(p3x.hc6W);
    b2x.Ym0x = function() {
        this.ck4o("polling-get", {})
    }
    ;
    b2x.ux0x = function() {
        var eY5d;
        return function() {
            if (!!eY5d)
                return;
            eY5d = window.setInterval(this.Ym0x.g3x(this), 1e5);
            this.Ym0x()
        }
    }();
    H3x.fq5v.B3x({
        event: "message",
        element: p3x.ri9Z
    })
})();
var io = "undefined" === typeof module ? {} : module.exports;
(function() {
    (function(exports, global) {
        var io = exports;
        io.version = "0.9.16";
        io.protocol = 1;
        io.transports = [];
        io.j = [];
        io.sockets = {};
        io.connect = function(host, details) {
            var uri = io.util.parseUri(host), uuri, socket;
            if (global && global.location) {
                uri.protocol = uri.protocol || global.location.protocol.slice(0, -1);
                uri.host = uri.host || (global.document ? global.document.domain : global.location.hostname);
                uri.port = uri.port || global.location.port
            }
            uuri = io.util.uniqueUri(uri);
            var options = {
                host: uri.host,
                secure: "https" == uri.protocol,
                port: uri.port || ("https" == uri.protocol ? 443 : 80),
                query: uri.query || ""
            };
            io.util.merge(options, details);
            if (options["force new connection"] || !io.sockets[uuri]) {
                socket = new io.Socket(options)
            }
            if (!options["force new connection"] && socket) {
                io.sockets[uuri] = socket
            }
            socket = socket || io.sockets[uuri];
            return socket.of(uri.path.length > 1 ? uri.path : "")
        }
    })("object" === typeof module ? module.exports : this.io = {}, this);
    (function(exports, global) {
        var util = exports.util = {};
        var re = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
        var parts = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
        util.parseUri = function(str) {
            var m = re.exec(str || "")
              , uri = {}
              , i = 14;
            while (i--) {
                uri[parts[i]] = m[i] || ""
            }
            return uri
        }
        ;
        util.uniqueUri = function(uri) {
            var protocol = uri.protocol
              , host = uri.host
              , port = uri.port;
            if ("document"in global) {
                host = host || document.domain;
                port = port || (protocol == "https" && document.location.protocol !== "https:" ? 443 : document.location.port)
            } else {
                host = host || "localhost";
                if (!port && protocol == "https") {
                    port = 443
                }
            }
            return (protocol || "http") + "://" + host + ":" + (port || 80)
        }
        ;
        util.query = function(base, addition) {
            var query = util.chunkQuery(base || "")
              , components = [];
            util.merge(query, util.chunkQuery(addition || ""));
            for (var part in query) {
                if (query.hasOwnProperty(part)) {
                    components.push(part + "=" + query[part])
                }
            }
            return components.length ? "?" + components.join("&") : ""
        }
        ;
        util.chunkQuery = function(qs) {
            var query = {}, params = qs.split("&"), i = 0, l = params.length, kv;
            for (; i < l; ++i) {
                kv = params[i].split("=");
                if (kv[0]) {
                    query[kv[0]] = kv[1]
                }
            }
            return query
        }
        ;
        var pageLoaded = false;
        util.load = function(fn) {
            if ("document"in global && document.readyState === "complete" || pageLoaded) {
                return fn()
            }
            util.on(global, "load", fn, false)
        }
        ;
        util.on = function(element, event, fn, capture) {
            if (element.attachEvent) {
                element.attachEvent("on" + event, fn)
            } else if (element.addEventListener) {
                element.addEventListener(event, fn, capture)
            }
        }
        ;
        util.request = function(xdomain) {
            if (xdomain && "undefined" != typeof XDomainRequest && !util.ua.hasCORS) {
                return new XDomainRequest
            }
            if ("undefined" != typeof XMLHttpRequest && (!xdomain || util.ua.hasCORS)) {
                return new XMLHttpRequest
            }
            if (!xdomain) {
                try {
                    return new (window[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")
                } catch (e) {}
            }
            return null
        }
        ;
        if ("undefined" != typeof window) {
            util.load(function() {
                pageLoaded = true
            })
        }
        util.defer = function(fn) {
            if (!util.ua.webkit || "undefined" != typeof importScripts) {
                return fn()
            }
            util.load(function() {
                setTimeout(fn, 100)
            })
        }
        ;
        util.merge = function merge(target, additional, deep, lastseen) {
            var seen = lastseen || [], depth = typeof deep == "undefined" ? 2 : deep, prop;
            for (prop in additional) {
                if (additional.hasOwnProperty(prop) && util.indexOf(seen, prop) < 0) {
                    if (typeof target[prop] !== "object" || !depth) {
                        target[prop] = additional[prop];
                        seen.push(additional[prop])
                    } else {
                        util.merge(target[prop], additional[prop], depth - 1, seen)
                    }
                }
            }
            return target
        }
        ;
        util.mixin = function(ctor, ctor2) {
            util.merge(ctor.prototype, ctor2.prototype)
        }
        ;
        util.inherit = function(ctor, ctor2) {
            function f() {}
            f.prototype = ctor2.prototype;
            ctor.prototype = new f
        }
        ;
        util.isArray = Array.isArray || function(obj) {
            return Object.prototype.toString.call(obj) === "[object Array]"
        }
        ;
        util.intersect = function(arr, arr2) {
            var ret = []
              , longest = arr.length > arr2.length ? arr : arr2
              , shortest = arr.length > arr2.length ? arr2 : arr;
            for (var i = 0, l = shortest.length; i < l; i++) {
                if (~util.indexOf(longest, shortest[i]))
                    ret.push(shortest[i])
            }
            return ret
        }
        ;
        util.indexOf = function(arr, o, i) {
            for (var j = arr.length, i = i < 0 ? i + j < 0 ? 0 : i + j : i || 0; i < j && arr[i] !== o; i++) {}
            return j <= i ? -1 : i
        }
        ;
        util.toArray = function(enu) {
            var arr = [];
            for (var i = 0, l = enu.length; i < l; i++)
                arr.push(enu[i]);
            return arr
        }
        ;
        util.ua = {};
        util.ua.hasCORS = "undefined" != typeof XMLHttpRequest && function() {
            try {
                var a = new XMLHttpRequest
            } catch (e) {
                return false
            }
            return a.withCredentials != undefined
        }();
        util.ua.webkit = "undefined" != typeof navigator && /webkit/i.test(navigator.userAgent);
        util.ua.iDevice = "undefined" != typeof navigator && /iPad|iPhone|iPod/i.test(navigator.userAgent)
    })("undefined" != typeof io ? io : module.exports, this);
    (function(exports, io) {
        exports.EventEmitter = EventEmitter;
        function EventEmitter() {}
        EventEmitter.prototype.on = function(name, fn) {
            if (!this.$events) {
                this.$events = {}
            }
            if (!this.$events[name]) {
                this.$events[name] = fn
            } else if (io.util.isArray(this.$events[name])) {
                this.$events[name].push(fn)
            } else {
                this.$events[name] = [this.$events[name], fn]
            }
            return this
        }
        ;
        EventEmitter.prototype.addListener = EventEmitter.prototype.on;
        EventEmitter.prototype.once = function(name, fn) {
            var self = this;
            function on() {
                self.removeListener(name, on);
                fn.apply(this, arguments)
            }
            on.listener = fn;
            this.on(name, on);
            return this
        }
        ;
        EventEmitter.prototype.removeListener = function(name, fn) {
            if (this.$events && this.$events[name]) {
                var list = this.$events[name];
                if (io.util.isArray(list)) {
                    var pos = -1;
                    for (var i = 0, l = list.length; i < l; i++) {
                        if (list[i] === fn || list[i].listener && list[i].listener === fn) {
                            pos = i;
                            break
                        }
                    }
                    if (pos < 0) {
                        return this
                    }
                    list.splice(pos, 1);
                    if (!list.length) {
                        delete this.$events[name]
                    }
                } else if (list === fn || list.listener && list.listener === fn) {
                    delete this.$events[name]
                }
            }
            return this
        }
        ;
        EventEmitter.prototype.removeAllListeners = function(name) {
            if (name === undefined) {
                this.$events = {};
                return this
            }
            if (this.$events && this.$events[name]) {
                this.$events[name] = null
            }
            return this
        }
        ;
        EventEmitter.prototype.listeners = function(name) {
            if (!this.$events) {
                this.$events = {}
            }
            if (!this.$events[name]) {
                this.$events[name] = []
            }
            if (!io.util.isArray(this.$events[name])) {
                this.$events[name] = [this.$events[name]]
            }
            return this.$events[name]
        }
        ;
        EventEmitter.prototype.emit = function(name) {
            if (!this.$events) {
                return false
            }
            var handler = this.$events[name];
            if (!handler) {
                return false
            }
            var args = Array.prototype.slice.call(arguments, 1);
            if ("function" == typeof handler) {
                handler.apply(this, args)
            } else if (io.util.isArray(handler)) {
                var listeners = handler.slice();
                for (var i = 0, l = listeners.length; i < l; i++) {
                    listeners[i].apply(this, args)
                }
            } else {
                return false
            }
            return true
        }
    })("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    (function(exports, nativeJSON) {
        "use strict";
        if (nativeJSON && nativeJSON.parse) {
            return exports.JSON = {
                parse: nativeJSON.parse,
                stringify: nativeJSON.stringify
            }
        }
        var JSON = exports.JSON = {};
        function f(n) {
            return n < 10 ? "0" + n : n
        }
        function date(d, key) {
            return isFinite(d.valueOf()) ? d.getUTCFullYear() + "-" + f(d.getUTCMonth() + 1) + "-" + f(d.getUTCDate()) + "T" + f(d.getUTCHours()) + ":" + f(d.getUTCMinutes()) + ":" + f(d.getUTCSeconds()) + "Z" : null
        }
        var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, gap, indent, meta = {
            "\b": "\\b",
            "\t": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        }, rep;
        function quote(string) {
            escapable.lastIndex = 0;
            return escapable.test(string) ? '"' + string.replace(escapable, function(a) {
                var c = meta[a];
                return typeof c === "string" ? c : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
            }) + '"' : '"' + string + '"'
        }
        function str(key, holder) {
            var i, k, v, length, mind = gap, partial, value = holder[key];
            if (value instanceof Date) {
                value = date(key)
            }
            if (typeof rep === "function") {
                value = rep.call(holder, key, value)
            }
            switch (typeof value) {
            case "string":
                return quote(value);
            case "number":
                return isFinite(value) ? String(value) : "null";
            case "boolean":
            case "null":
                return String(value);
            case "object":
                if (!value) {
                    return "null"
                }
                gap += indent;
                partial = [];
                if (Object.prototype.toString.apply(value) === "[object Array]") {
                    length = value.length;
                    for (i = 0; i < length; i += 1) {
                        partial[i] = str(i, value) || "null"
                    }
                    v = partial.length === 0 ? "[]" : gap ? "[\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "]" : "[" + partial.join(",") + "]";
                    gap = mind;
                    return v
                }
                if (rep && typeof rep === "object") {
                    length = rep.length;
                    for (i = 0; i < length; i += 1) {
                        if (typeof rep[i] === "string") {
                            k = rep[i];
                            v = str(k, value);
                            if (v) {
                                partial.push(quote(k) + (gap ? ": " : ":") + v)
                            }
                        }
                    }
                } else {
                    for (k in value) {
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            v = str(k, value);
                            if (v) {
                                partial.push(quote(k) + (gap ? ": " : ":") + v)
                            }
                        }
                    }
                }
                v = partial.length === 0 ? "{}" : gap ? "{\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "}" : "{" + partial.join(",") + "}";
                gap = mind;
                return v
            }
        }
        JSON.stringify = function(value, replacer, space) {
            var i;
            gap = "";
            indent = "";
            if (typeof space === "number") {
                for (i = 0; i < space; i += 1) {
                    indent += " "
                }
            } else if (typeof space === "string") {
                indent = space
            }
            rep = replacer;
            if (replacer && typeof replacer !== "function" && (typeof replacer !== "object" || typeof replacer.length !== "number")) {
                throw new Error("JSON.stringify")
            }
            return str("", {
                "": value
            })
        }
        ;
        JSON.parse = function(text, reviver) {
            var j;
            function walk(holder, key) {
                var k, v, value = holder[key];
                if (value && typeof value === "object") {
                    for (k in value) {
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v
                            } else {
                                delete value[k]
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value)
            }
            text = String(text);
            cx.lastIndex = 0;
            if (cx.test(text)) {
                text = text.replace(cx, function(a) {
                    return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
                })
            }
            if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) {
                j = eval("(" + text + ")");
                return typeof reviver === "function" ? walk({
                    "": j
                }, "") : j
            }
            throw new SyntaxError("JSON.parse")
        }
    })("undefined" != typeof io ? io : module.exports, typeof JSON !== "undefined" ? JSON : undefined);
    (function(exports, io) {
        var parser = exports.parser = {};
        var packets = parser.packets = ["disconnect", "connect", "heartbeat", "message", "json", "event", "ack", "error", "noop"];
        var reasons = parser.reasons = ["transport not supported", "client not handshaken", "unauthorized"];
        var advice = parser.advice = ["reconnect"];
        var JSON = io.JSON
          , indexOf = io.util.indexOf;
        parser.encodePacket = function(packet) {
            var type = indexOf(packets, packet.type)
              , id = packet.id || ""
              , endpoint = packet.endpoint || ""
              , ack = packet.ack
              , data = null;
            switch (packet.type) {
            case "error":
                var reason = packet.reason ? indexOf(reasons, packet.reason) : ""
                  , adv = packet.advice ? indexOf(advice, packet.advice) : "";
                if (reason !== "" || adv !== "")
                    data = reason + (adv !== "" ? "+" + adv : "");
                break;
            case "message":
                if (packet.data !== "")
                    data = packet.data;
                break;
            case "event":
                var ev = {
                    name: packet.name
                };
                if (packet.args && packet.args.length) {
                    ev.args = packet.args
                }
                data = JSON.stringify(ev);
                break;
            case "json":
                data = JSON.stringify(packet.data);
                break;
            case "connect":
                if (packet.qs)
                    data = packet.qs;
                break;
            case "ack":
                data = packet.ackId + (packet.args && packet.args.length ? "+" + JSON.stringify(packet.args) : "");
                break
            }
            var encoded = [type, id + (ack == "data" ? "+" : ""), endpoint];
            if (data !== null && data !== undefined)
                encoded.push(data);
            return encoded.join(":")
        }
        ;
        parser.encodePayload = function(packets) {
            var decoded = "";
            if (packets.length == 1)
                return packets[0];
            for (var i = 0, l = packets.length; i < l; i++) {
                var packet = packets[i];
                decoded += "�" + packet.length + "�" + packets[i]
            }
            return decoded
        }
        ;
        var regexp = /([^:]+):([0-9]+)?(\+)?:([^:]+)?:?([\s\S]*)?/;
        parser.decodePacket = function(data) {
            var pieces = data.match(regexp);
            if (!pieces)
                return {};
            var id = pieces[2] || ""
              , data = pieces[5] || ""
              , packet = {
                type: packets[pieces[1]],
                endpoint: pieces[4] || ""
            };
            if (id) {
                packet.id = id;
                if (pieces[3])
                    packet.ack = "data";
                else
                    packet.ack = true
            }
            switch (packet.type) {
            case "error":
                var pieces = data.split("+");
                packet.reason = reasons[pieces[0]] || "";
                packet.advice = advice[pieces[1]] || "";
                break;
            case "message":
                packet.data = data || "";
                break;
            case "event":
                try {
                    var opts = JSON.parse(data);
                    packet.name = opts.name;
                    packet.args = opts.args
                } catch (e) {}
                packet.args = packet.args || [];
                break;
            case "json":
                try {
                    packet.data = JSON.parse(data)
                } catch (e) {}
                break;
            case "connect":
                packet.qs = data || "";
                break;
            case "ack":
                var pieces = data.match(/^([0-9]+)(\+)?(.*)/);
                if (pieces) {
                    packet.ackId = pieces[1];
                    packet.args = [];
                    if (pieces[3]) {
                        try {
                            packet.args = pieces[3] ? JSON.parse(pieces[3]) : []
                        } catch (e) {}
                    }
                }
                break;
            case "disconnect":
            case "heartbeat":
                break
            }
            return packet
        }
        ;
        parser.decodePayload = function(data) {
            if (data.charAt(0) == "�") {
                var ret = [];
                for (var i = 1, length = ""; i < data.length; i++) {
                    if (data.charAt(i) == "�") {
                        ret.push(parser.decodePacket(data.substr(i + 1).substr(0, length)));
                        i += Number(length) + 1;
                        length = ""
                    } else {
                        length += data.charAt(i)
                    }
                }
                return ret
            } else {
                return [parser.decodePacket(data)]
            }
        }
    })("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    (function(exports, io) {
        exports.Transport = Transport;
        function Transport(socket, sessid) {
            this.socket = socket;
            this.sessid = sessid
        }
        io.util.mixin(Transport, io.EventEmitter);
        Transport.prototype.heartbeats = function() {
            return true
        }
        ;
        Transport.prototype.onData = function(data) {
            this.clearCloseTimeout();
            if (this.socket.connected || this.socket.connecting || this.socket.reconnecting) {
                this.setCloseTimeout()
            }
            if (data !== "") {
                var msgs = io.parser.decodePayload(data);
                if (msgs && msgs.length) {
                    for (var i = 0, l = msgs.length; i < l; i++) {
                        this.onPacket(msgs[i])
                    }
                }
            }
            return this
        }
        ;
        Transport.prototype.onPacket = function(packet) {
            this.socket.setHeartbeatTimeout();
            if (packet.type == "heartbeat") {
                return this.onHeartbeat()
            }
            if (packet.type == "connect" && packet.endpoint == "") {
                this.onConnect()
            }
            if (packet.type == "error" && packet.advice == "reconnect") {
                this.isOpen = false
            }
            this.socket.onPacket(packet);
            return this
        }
        ;
        Transport.prototype.setCloseTimeout = function() {
            if (!this.closeTimeout) {
                var self = this;
                this.closeTimeout = setTimeout(function() {
                    self.onDisconnect()
                }, this.socket.closeTimeout)
            }
        }
        ;
        Transport.prototype.onDisconnect = function() {
            if (this.isOpen)
                this.close();
            this.clearTimeouts();
            this.socket.onDisconnect();
            return this
        }
        ;
        Transport.prototype.onConnect = function() {
            this.socket.onConnect();
            return this
        }
        ;
        Transport.prototype.clearCloseTimeout = function() {
            if (this.closeTimeout) {
                clearTimeout(this.closeTimeout);
                this.closeTimeout = null
            }
        }
        ;
        Transport.prototype.clearTimeouts = function() {
            this.clearCloseTimeout();
            if (this.reopenTimeout) {
                clearTimeout(this.reopenTimeout)
            }
        }
        ;
        Transport.prototype.packet = function(packet) {
            this.send(io.parser.encodePacket(packet))
        }
        ;
        Transport.prototype.onHeartbeat = function(heartbeat) {
            this.packet({
                type: "heartbeat"
            })
        }
        ;
        Transport.prototype.onOpen = function() {
            this.isOpen = true;
            this.clearCloseTimeout();
            this.socket.onOpen()
        }
        ;
        Transport.prototype.onClose = function() {
            var self = this;
            this.isOpen = false;
            this.socket.onClose();
            this.onDisconnect()
        }
        ;
        Transport.prototype.prepareUrl = function() {
            var options = this.socket.options;
            return this.scheme() + "://" + options.host + ":" + options.port + "/" + options.resource + "/" + io.protocol + "/" + this.name + "/" + this.sessid
        }
        ;
        Transport.prototype.ready = function(socket, fn) {
            fn.call(this)
        }
    })("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    (function(exports, io, global) {
        exports.Socket = Socket;
        function Socket(options) {
            this.options = {
                port: 80,
                secure: false,
                document: "document"in global ? document : false,
                resource: "socket.io",
                transports: io.transports,
                "connect timeout": 1e4,
                "try multiple transports": true,
                reconnect: true,
                "reconnection delay": 500,
                "reconnection limit": Infinity,
                "reopen delay": 3e3,
                "max reconnection attempts": 10,
                "sync disconnect on unload": false,
                "auto connect": true,
                "flash policy port": 10843,
                manualFlush: false
            };
            io.util.merge(this.options, options);
            this.connected = false;
            this.open = false;
            this.connecting = false;
            this.reconnecting = false;
            this.namespaces = {};
            this.buffer = [];
            this.doBuffer = false;
            if (this.options["sync disconnect on unload"] && (!this.isXDomain() || io.util.ua.hasCORS)) {
                var self = this;
                io.util.on(global, "beforeunload", function() {
                    self.disconnectSync()
                }, false)
            }
            if (this.options["auto connect"]) {
                this.connect()
            }
        }
        io.util.mixin(Socket, io.EventEmitter);
        Socket.prototype.of = function(name) {
            if (!this.namespaces[name]) {
                this.namespaces[name] = new io.SocketNamespace(this,name);
                if (name !== "") {
                    this.namespaces[name].packet({
                        type: "connect"
                    })
                }
            }
            return this.namespaces[name]
        }
        ;
        Socket.prototype.publish = function() {
            this.emit.apply(this, arguments);
            var nsp;
            for (var i in this.namespaces) {
                if (this.namespaces.hasOwnProperty(i)) {
                    nsp = this.of(i);
                    nsp.$emit.apply(nsp, arguments)
                }
            }
        }
        ;
        function empty() {}
        Socket.prototype.handshake = function(fn) {
            var self = this
              , options = this.options;
            function complete(data) {
                if (data instanceof Error) {
                    self.connecting = false;
                    self.onError(data.message)
                } else {
                    fn.apply(null, data.split(":"))
                }
            }
            var url = ["http" + (options.secure ? "s" : "") + ":/", options.host + ":" + options.port, options.resource, io.protocol, io.util.query(this.options.query, "t=" + +(new Date))].join("/");
            if (this.isXDomain() && !io.util.ua.hasCORS) {
                var insertAt = document.getElementsByTagName("script")[0]
                  , script = document.createElement("script");
                script.src = url + "&jsonp=" + io.j.length;
                insertAt.parentNode.insertBefore(script, insertAt);
                io.j.push(function(data) {
                    complete(data);
                    script.parentNode.removeChild(script)
                })
            } else {
                var xhr = io.util.request();
                xhr.open("GET", url, true);
                if (this.isXDomain()) {
                    xhr.withCredentials = true
                }
                xhr.onreadystatechange = function() {
                    if (xhr.readyState == 4) {
                        xhr.onreadystatechange = empty;
                        if (xhr.status == 200) {
                            complete(xhr.responseText)
                        } else if (xhr.status == 403) {
                            self.onError(xhr.responseText)
                        } else {
                            self.connecting = false;
                            !self.reconnecting && self.onError(xhr.responseText)
                        }
                    }
                }
                ;
                xhr.send(null)
            }
        }
        ;
        Socket.prototype.getTransport = function(override) {
            var transports = override || this.transports, match;
            for (var i = 0, transport; transport = transports[i]; i++) {
                if (io.Transport[transport] && io.Transport[transport].check(this) && (!this.isXDomain() || io.Transport[transport].xdomainCheck(this))) {
                    return new io.Transport[transport](this,this.sessionid)
                }
            }
            return null
        }
        ;
        Socket.prototype.connect = function(fn) {
            if (this.connecting && this.transports != "jsonp-polling") {
                return this
            }
            var self = this;
            self.connecting = true;
            this.handshake(function(sid, heartbeat, close, transports) {
                self.sessionid = sid;
                self.closeTimeout = close * 1e3;
                self.heartbeatTimeout = heartbeat * 1e3;
                var check = function() {
                    return "WebSocket"in global && !("__addTask"in WebSocket) || "MozWebSocket"in global
                };
                if (!check()) {
                    transports = "jsonp-polling"
                }
                if (!self.transports)
                    self.transports = self.origTransports = transports ? io.util.intersect(transports.split(","), self.options.transports) : self.options.transports;
                self.setHeartbeatTimeout();
                function connect(transports) {
                    if (self.transport)
                        self.transport.clearTimeouts();
                    self.transport = self.getTransport(transports);
                    if (!self.transport)
                        return self.publish("connect_failed");
                    self.transport.ready(self, function() {
                        self.connecting = true;
                        self.publish("connecting", self.transport.name);
                        self.transport.open();
                        if (self.options["connect timeout"]) {
                            self.connectTimeoutTimer = setTimeout(function() {
                                if (!self.connected) {
                                    self.connecting = false;
                                    if (self.options["try multiple transports"]) {
                                        var remaining = self.transports;
                                        while (remaining.length > 0 && remaining.splice(0, 1)[0] != self.transport.name) {}
                                        if (remaining.length) {
                                            connect(remaining)
                                        } else {
                                            self.publish("connect_failed")
                                        }
                                    }
                                }
                            }, self.options["connect timeout"])
                        }
                    })
                }
                connect(self.transports);
                self.once("connect", function() {
                    clearTimeout(self.connectTimeoutTimer);
                    fn && typeof fn == "function" && fn()
                })
            });
            return this
        }
        ;
        Socket.prototype.setHeartbeatTimeout = function() {
            clearTimeout(this.heartbeatTimeoutTimer);
            if (this.transport && !this.transport.heartbeats())
                return;
            var self = this;
            this.heartbeatTimeoutTimer = setTimeout(function() {
                self.transport.onClose()
            }, this.heartbeatTimeout)
        }
        ;
        Socket.prototype.packet = function(data) {
            if (this.connected && !this.doBuffer) {
                this.transport.packet(data)
            } else {
                this.buffer.push(data)
            }
            return this
        }
        ;
        Socket.prototype.setBuffer = function(v) {
            this.doBuffer = v;
            if (!v && this.connected && this.buffer.length) {
                if (!this.options["manualFlush"]) {
                    this.flushBuffer()
                }
            }
        }
        ;
        Socket.prototype.flushBuffer = function() {
            this.transport.payload(this.buffer);
            this.buffer = []
        }
        ;
        Socket.prototype.disconnect = function() {
            if (this.connected || this.connecting) {
                if (this.open) {
                    this.of("").packet({
                        type: "disconnect"
                    })
                }
                this.onDisconnect("booted")
            }
            return this
        }
        ;
        Socket.prototype.disconnectSync = function() {
            var xhr = io.util.request();
            var uri = ["http" + (this.options.secure ? "s" : "") + ":/", this.options.host + ":" + this.options.port, this.options.resource, io.protocol, "", this.sessionid].join("/") + "/?disconnect=1";
            xhr.open("GET", uri, false);
            xhr.send(null);
            this.onDisconnect("booted")
        }
        ;
        Socket.prototype.isXDomain = function() {
            var port = global.location.port || ("https:" == global.location.protocol ? 443 : 80);
            return this.options.host !== global.location.hostname || this.options.port != port
        }
        ;
        Socket.prototype.onConnect = function() {
            if (!this.connected) {
                this.connected = true;
                this.connecting = false;
                if (!this.doBuffer) {
                    this.setBuffer(false)
                }
                this.emit("connect")
            }
        }
        ;
        Socket.prototype.onOpen = function() {
            this.open = true
        }
        ;
        Socket.prototype.onClose = function() {
            this.open = false;
            clearTimeout(this.heartbeatTimeoutTimer)
        }
        ;
        Socket.prototype.onPacket = function(packet) {
            this.of(packet.endpoint).onPacket(packet)
        }
        ;
        Socket.prototype.onError = function(err) {
            if (err && err.advice) {
                if (err.advice === "reconnect" && (this.connected || this.connecting)) {
                    this.disconnect();
                    if (this.options.reconnect) {
                        this.reconnect()
                    }
                }
            }
            this.publish("error", err && err.reason ? err.reason : err)
        }
        ;
        Socket.prototype.onDisconnect = function(reason) {
            var wasConnected = this.connected
              , wasConnecting = this.connecting;
            this.connected = false;
            this.connecting = false;
            this.open = false;
            if (wasConnected || wasConnecting) {
                this.transport.close();
                this.transport.clearTimeouts();
                if (wasConnected) {
                    this.publish("disconnect", reason);
                    if ("booted" != reason && this.options.reconnect && !this.reconnecting) {
                        this.reconnect()
                    }
                }
            }
        }
        ;
        Socket.prototype.reconnect = function() {
            this.reconnecting = true;
            this.reconnectionAttempts = 0;
            this.reconnectionDelay = this.options["reconnection delay"];
            var self = this
              , maxAttempts = this.options["max reconnection attempts"]
              , tryMultiple = this.options["try multiple transports"]
              , limit = this.options["reconnection limit"];
            function reset() {
                if (self.connected) {
                    for (var i in self.namespaces) {
                        if (self.namespaces.hasOwnProperty(i) && "" !== i) {
                            self.namespaces[i].packet({
                                type: "connect"
                            })
                        }
                    }
                    self.publish("reconnect", self.transport.name, self.reconnectionAttempts)
                }
                clearTimeout(self.reconnectionTimer);
                self.removeListener("connect_failed", maybeReconnect);
                self.removeListener("connect", maybeReconnect);
                self.reconnecting = false;
                delete self.reconnectionAttempts;
                delete self.reconnectionDelay;
                delete self.reconnectionTimer;
                delete self.redoTransports;
                self.options["try multiple transports"] = tryMultiple
            }
            function maybeReconnect() {
                if (!self.reconnecting) {
                    return
                }
                if (self.connected) {
                    return reset()
                }
                if (self.connecting && self.reconnecting && self.transports != "jsonp-polling") {
                    return self.reconnectionTimer = setTimeout(maybeReconnect, 1e3)
                }
                if (self.reconnectionAttempts++ >= maxAttempts) {
                    if (!self.redoTransports) {
                        self.on("connect_failed", maybeReconnect);
                        self.options["try multiple transports"] = true;
                        self.transports = self.origTransports;
                        self.transport = self.getTransport();
                        self.redoTransports = true;
                        self.connect()
                    } else {
                        self.publish("reconnect_failed");
                        reset()
                    }
                } else {
                    if (self.reconnectionDelay < limit) {
                        self.reconnectionDelay *= 2
                    }
                    self.connect();
                    self.publish("reconnecting", self.reconnectionDelay, self.reconnectionAttempts);
                    self.reconnectionTimer = setTimeout(maybeReconnect, self.reconnectionDelay)
                }
            }
            this.options["try multiple transports"] = false;
            this.reconnectionTimer = setTimeout(maybeReconnect, this.reconnectionDelay);
            this.on("connect", maybeReconnect)
        }
    })("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    (function(exports, io) {
        exports.SocketNamespace = SocketNamespace;
        function SocketNamespace(socket, name) {
            this.socket = socket;
            this.name = name || "";
            this.flags = {};
            this.json = new Flag(this,"json");
            this.ackPackets = 0;
            this.acks = {}
        }
        io.util.mixin(SocketNamespace, io.EventEmitter);
        SocketNamespace.prototype.$emit = io.EventEmitter.prototype.emit;
        SocketNamespace.prototype.of = function() {
            return this.socket.of.apply(this.socket, arguments)
        }
        ;
        SocketNamespace.prototype.packet = function(packet) {
            packet.endpoint = this.name;
            this.socket.packet(packet);
            this.flags = {};
            return this
        }
        ;
        SocketNamespace.prototype.send = function(data, fn) {
            var packet = {
                type: this.flags.json ? "json" : "message",
                data: data
            };
            if ("function" == typeof fn) {
                packet.id = ++this.ackPackets;
                packet.ack = true;
                this.acks[packet.id] = fn
            }
            return this.packet(packet)
        }
        ;
        SocketNamespace.prototype.emit = function(name) {
            var args = Array.prototype.slice.call(arguments, 1)
              , lastArg = args[args.length - 1]
              , packet = {
                type: "event",
                name: name
            };
            if ("function" == typeof lastArg) {
                packet.id = ++this.ackPackets;
                packet.ack = "data";
                this.acks[packet.id] = lastArg;
                args = args.slice(0, args.length - 1)
            }
            packet.args = args;
            return this.packet(packet)
        }
        ;
        SocketNamespace.prototype.disconnect = function() {
            if (this.name === "") {
                this.socket.disconnect()
            } else {
                this.packet({
                    type: "disconnect"
                });
                this.$emit("disconnect")
            }
            return this
        }
        ;
        SocketNamespace.prototype.onPacket = function(packet) {
            var self = this;
            function ack() {
                self.packet({
                    type: "ack",
                    args: io.util.toArray(arguments),
                    ackId: packet.id
                })
            }
            switch (packet.type) {
            case "connect":
                this.$emit("connect");
                break;
            case "disconnect":
                if (this.name === "") {
                    this.socket.onDisconnect(packet.reason || "booted")
                } else {
                    this.$emit("disconnect", packet.reason)
                }
                break;
            case "message":
            case "json":
                var params = ["message", packet.data];
                if (packet.ack == "data") {
                    params.push(ack)
                } else if (packet.ack) {
                    this.packet({
                        type: "ack",
                        ackId: packet.id
                    })
                }
                this.$emit.apply(this, params);
                break;
            case "event":
                var params = [packet.name].concat(packet.args);
                if (packet.ack == "data")
                    params.push(ack);
                this.$emit.apply(this, params);
                break;
            case "ack":
                if (this.acks[packet.ackId]) {
                    this.acks[packet.ackId].apply(this, packet.args);
                    delete this.acks[packet.ackId]
                }
                break;
            case "error":
                if (packet.advice) {
                    this.socket.onError(packet)
                } else {
                    if (packet.reason == "unauthorized") {
                        this.$emit("connect_failed", packet.reason)
                    } else {
                        this.$emit("error", packet.reason)
                    }
                }
                break
            }
        }
        ;
        function Flag(nsp, name) {
            this.namespace = nsp;
            this.name = name
        }
        Flag.prototype.send = function() {
            this.namespace.flags[this.name] = true;
            this.namespace.send.apply(this.namespace, arguments)
        }
        ;
        Flag.prototype.emit = function() {
            this.namespace.flags[this.name] = true;
            this.namespace.emit.apply(this.namespace, arguments)
        }
    })("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    (function(exports, io, global) {
        exports.websocket = WS;
        function WS(socket) {
            io.Transport.apply(this, arguments)
        }
        io.util.inherit(WS, io.Transport);
        WS.prototype.name = "websocket";
        WS.prototype.open = function() {
            var query = io.util.query(this.socket.options.query), self = this, Socket;
            if (!Socket) {
                Socket = global.MozWebSocket || global.WebSocket
            }
            this.websocket = new Socket(this.prepareUrl() + query);
            this.websocket.onopen = function() {
                self.onOpen();
                self.socket.setBuffer(false)
            }
            ;
            this.websocket.onmessage = function(ev) {
                self.onData(ev.data)
            }
            ;
            this.websocket.onclose = function() {
                self.onClose();
                self.socket.setBuffer(true)
            }
            ;
            this.websocket.onerror = function(e) {
                self.onError(e)
            }
            ;
            return this
        }
        ;
        if (io.util.ua.iDevice) {
            WS.prototype.send = function(data) {
                var self = this;
                setTimeout(function() {
                    self.websocket.send(data)
                }, 0);
                return this
            }
        } else {
            WS.prototype.send = function(data) {
                this.websocket.send(data);
                return this
            }
        }
        WS.prototype.payload = function(arr) {
            for (var i = 0, l = arr.length; i < l; i++) {
                this.packet(arr[i])
            }
            return this
        }
        ;
        WS.prototype.close = function() {
            this.websocket.close();
            return this
        }
        ;
        WS.prototype.onError = function(e) {
            this.socket.onError(e)
        }
        ;
        WS.prototype.scheme = function() {
            return this.socket.options.secure ? "wss" : "ws"
        }
        ;
        WS.check = function() {
            return "WebSocket"in global && !("__addTask"in WebSocket) || "MozWebSocket"in global
        }
        ;
        WS.xdomainCheck = function() {
            return true
        }
        ;
        io.transports.push("websocket")
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    (function(exports, io) {
        exports.flashsocket = Flashsocket;
        function Flashsocket() {
            io.Transport.websocket.apply(this, arguments)
        }
        io.util.inherit(Flashsocket, io.Transport.websocket);
        Flashsocket.prototype.name = "flashsocket";
        Flashsocket.prototype.open = function() {
            var self = this
              , args = arguments;
            WebSocket.Yo0x(function() {
                io.Transport.websocket.prototype.open.apply(self, args)
            });
            return this
        }
        ;
        Flashsocket.prototype.send = function() {
            var self = this
              , args = arguments;
            WebSocket.Yo0x(function() {
                io.Transport.websocket.prototype.send.apply(self, args)
            });
            return this
        }
        ;
        Flashsocket.prototype.close = function() {
            WebSocket.PQ7J.length = 0;
            io.Transport.websocket.prototype.close.call(this);
            return this
        }
        ;
        Flashsocket.prototype.ready = function(socket, fn) {
            function init() {
                var options = socket.options
                  , port = options["flash policy port"]
                  , path = ["http" + (options.secure ? "s" : "") + ":/", options.host + ":" + options.port, options.resource, "static/flashsocket", "WebSocketMain" + (socket.isXDomain() ? "Insecure" : "") + ".swf"];
                if (!Flashsocket.loaded) {
                    if (typeof WEB_SOCKET_SWF_LOCATION === "undefined") {
                        WEB_SOCKET_SWF_LOCATION = path.join("/")
                    }
                    if (port !== 843) {
                        WebSocket.loadFlashPolicyFile("xmlsocket://" + options.host + ":" + port)
                    }
                    WebSocket.bbp2x();
                    Flashsocket.loaded = true
                }
                fn.call(self)
            }
            var self = this;
            if (document.body)
                return init();
            io.util.load(init)
        }
        ;
        Flashsocket.check = function() {
            if (typeof WebSocket == "undefined" || !("__initialize"in WebSocket) || !swfobject)
                return false;
            return swfobject.getFlashPlayerVersion().major >= 10
        }
        ;
        Flashsocket.xdomainCheck = function() {
            return true
        }
        ;
        if (typeof window != "undefined") {
            WEB_SOCKET_DISABLE_AUTO_INITIALIZATION = true
        }
        io.transports.push("flashsocket")
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    if ("undefined" != typeof window) {
        var swfobject = function() {
            var D = "undefined", r = "object", S = "Shockwave Flash", W = "ShockwaveFlash.ShockwaveFlash", q = "application/x-shockwave-flash", R = "SWFObjectExprInst", x = "onreadystatechange", O = window, j = document, t = navigator, T = false, U = [h], o = [], N = [], I = [], l, Q, E, B, J = false, a = false, n, G, m = true, M = function() {
                var aa = typeof j.getElementById != D && typeof j.getElementsByTagName != D && typeof j.createElement != D
                  , ah = t.userAgent.toLowerCase()
                  , Y = t.platform.toLowerCase()
                  , ae = Y ? /win/.test(Y) : /win/.test(ah)
                  , ac = Y ? /mac/.test(Y) : /mac/.test(ah)
                  , af = /webkit/.test(ah) ? parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : false
                  , X = !+"1"
                  , ag = [0, 0, 0]
                  , ab = null;
                if (typeof t.plugins != D && typeof t.plugins[S] == r) {
                    ab = t.plugins[S].description;
                    if (ab && !(typeof t.mimeTypes != D && t.mimeTypes[q] && !t.mimeTypes[q].enabledPlugin)) {
                        T = true;
                        X = false;
                        ab = ab.replace(/^.*\s+(\S+\s+\S+$)/, "$1");
                        ag[0] = parseInt(ab.replace(/^(.*)\..*$/, "$1"), 10);
                        ag[1] = parseInt(ab.replace(/^.*\.(.*)\s.*$/, "$1"), 10);
                        ag[2] = /[a-zA-Z]/.test(ab) ? parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0
                    }
                } else {
                    if (typeof O[["Active"].concat("Object").join("X")] != D) {
                        try {
                            var ad = new (window[["Active"].concat("Object").join("X")])(W);
                            if (ad) {
                                ab = ad.GetVariable("$version");
                                if (ab) {
                                    X = true;
                                    ab = ab.split(" ")[1].split(",");
                                    ag = [parseInt(ab[0], 10), parseInt(ab[1], 10), parseInt(ab[2], 10)]
                                }
                            }
                        } catch (Z) {}
                    }
                }
                return {
                    w3: aa,
                    pv: ag,
                    wk: af,
                    ie: X,
                    win: ae,
                    mac: ac
                }
            }(), k = function() {
                if (!M.w3) {
                    return
                }
                if (typeof j.readyState != D && j.readyState == "complete" || typeof j.readyState == D && (j.getElementsByTagName("body")[0] || j.body)) {
                    f()
                }
                if (!J) {
                    if (typeof j.addEventListener != D) {
                        j.addEventListener("DOMContentLoaded", f, false)
                    }
                    if (M.ie && M.win) {
                        j.attachEvent(x, function() {
                            if (j.readyState == "complete") {
                                j.detachEvent(x, arguments.callee);
                                f()
                            }
                        });
                        if (O == top) {
                            (function() {
                                if (J) {
                                    return
                                }
                                try {
                                    j.documentElement.doScroll("left")
                                } catch (X) {
                                    setTimeout(arguments.callee, 0);
                                    return
                                }
                                f()
                            })()
                        }
                    }
                    if (M.wk) {
                        (function() {
                            if (J) {
                                return
                            }
                            if (!/loaded|complete/.test(j.readyState)) {
                                setTimeout(arguments.callee, 0);
                                return
                            }
                            f()
                        })()
                    }
                    s(f)
                }
            }();
            function f() {
                if (J) {
                    return
                }
                try {
                    var Z = j.getElementsByTagName("body")[0].appendChild(C("span"));
                    Z.parentNode.removeChild(Z)
                } catch (aa) {
                    return
                }
                J = true;
                var X = U.length;
                for (var Y = 0; Y < X; Y++) {
                    U[Y]()
                }
            }
            function K(X) {
                if (J) {
                    X()
                } else {
                    U[U.length] = X
                }
            }
            function s(Y) {
                if (typeof O.addEventListener != D) {
                    O.addEventListener("load", Y, false)
                } else {
                    if (typeof j.addEventListener != D) {
                        j.addEventListener("load", Y, false)
                    } else {
                        if (typeof O.attachEvent != D) {
                            i(O, "onload", Y)
                        } else {
                            if (typeof O.onload == "function") {
                                var X = O.onload;
                                O.onload = function() {
                                    X();
                                    Y()
                                }
                            } else {
                                O.onload = Y
                            }
                        }
                    }
                }
            }
            function h() {
                if (T) {
                    V()
                } else {
                    H()
                }
            }
            function V() {
                var X = j.getElementsByTagName("body")[0];
                var aa = C(r);
                aa.setAttribute("type", q);
                aa.style.visibility = "hidden";
                var Z = X.appendChild(aa);
                if (Z) {
                    var Y = 0;
                    (function() {
                        if (typeof Z.GetVariable != D) {
                            var ab = Z.GetVariable("$version");
                            if (ab) {
                                ab = ab.split(" ")[1].split(",");
                                M.pv = [parseInt(ab[0], 10), parseInt(ab[1], 10), parseInt(ab[2], 10)]
                            }
                        } else {
                            if (Y < 10) {
                                Y++;
                                setTimeout(arguments.callee, 10);
                                return
                            }
                        }
                        X.removeChild(aa);
                        Z = null;
                        H()
                    })()
                } else {
                    H()
                }
            }
            function H() {
                var ag = o.length;
                if (ag > 0) {
                    for (var af = 0; af < ag; af++) {
                        var Y = o[af].id;
                        var ab = o[af].callbackFn;
                        var aa = {
                            success: false,
                            id: Y
                        };
                        if (M.pv[0] > 0) {
                            var ae = c(Y);
                            if (ae) {
                                if (F(o[af].swfVersion) && !(M.wk && M.wk < 312)) {
                                    w(Y, true);
                                    if (ab) {
                                        aa.success = true;
                                        aa.ref = z(Y);
                                        ab(aa)
                                    }
                                } else {
                                    if (o[af].expressInstall && A()) {
                                        var ai = {};
                                        ai.data = o[af].expressInstall;
                                        ai.width = ae.getAttribute("width") || "0";
                                        ai.height = ae.getAttribute("height") || "0";
                                        if (ae.getAttribute("class")) {
                                            ai.styleclass = ae.getAttribute("class")
                                        }
                                        if (ae.getAttribute("align")) {
                                            ai.align = ae.getAttribute("align")
                                        }
                                        var ah = {};
                                        var X = ae.getElementsByTagName("param");
                                        var ac = X.length;
                                        for (var ad = 0; ad < ac; ad++) {
                                            if (X[ad].getAttribute("name").toLowerCase() != "movie") {
                                                ah[X[ad].getAttribute("name")] = X[ad].getAttribute("value")
                                            }
                                        }
                                        P(ai, ah, Y, ab)
                                    } else {
                                        p(ae);
                                        if (ab) {
                                            ab(aa)
                                        }
                                    }
                                }
                            }
                        } else {
                            w(Y, true);
                            if (ab) {
                                var Z = z(Y);
                                if (Z && typeof Z.SetVariable != D) {
                                    aa.success = true;
                                    aa.ref = Z
                                }
                                ab(aa)
                            }
                        }
                    }
                }
            }
            function z(aa) {
                var X = null;
                var Y = c(aa);
                if (Y && Y.nodeName == "OBJECT") {
                    if (typeof Y.SetVariable != D) {
                        X = Y
                    } else {
                        var Z = Y.getElementsByTagName(r)[0];
                        if (Z) {
                            X = Z
                        }
                    }
                }
                return X
            }
            function A() {
                return !a && F("6.0.65") && (M.win || M.mac) && !(M.wk && M.wk < 312)
            }
            function P(aa, ab, X, Z) {
                a = true;
                E = Z || null;
                B = {
                    success: false,
                    id: X
                };
                var ae = c(X);
                if (ae) {
                    if (ae.nodeName == "OBJECT") {
                        l = g(ae);
                        Q = null
                    } else {
                        l = ae;
                        Q = X
                    }
                    aa.id = R;
                    if (typeof aa.width == D || !/%$/.test(aa.width) && parseInt(aa.width, 10) < 310) {
                        aa.width = "310"
                    }
                    if (typeof aa.height == D || !/%$/.test(aa.height) && parseInt(aa.height, 10) < 137) {
                        aa.height = "137"
                    }
                    j.title = j.title.slice(0, 47) + " - Flash Player Installation";
                    var ad = M.ie && M.win ? ["Active"].concat("").join("X") : "PlugIn"
                      , ac = "MMredirectURL=" + O.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + ad + "&MMdoctitle=" + j.title;
                    if (typeof ab.flashvars != D) {
                        ab.flashvars += "&" + ac
                    } else {
                        ab.flashvars = ac
                    }
                    if (M.ie && M.win && ae.readyState != 4) {
                        var Y = C("div");
                        X += "SWFObjectNew";
                        Y.setAttribute("id", X);
                        ae.parentNode.insertBefore(Y, ae);
                        ae.style.display = "none";
                        (function() {
                            if (ae.readyState == 4) {
                                ae.parentNode.removeChild(ae)
                            } else {
                                setTimeout(arguments.callee, 10)
                            }
                        })()
                    }
                    u(aa, ab, X)
                }
            }
            function p(Y) {
                if (M.ie && M.win && Y.readyState != 4) {
                    var X = C("div");
                    Y.parentNode.insertBefore(X, Y);
                    X.parentNode.replaceChild(g(Y), X);
                    Y.style.display = "none";
                    (function() {
                        if (Y.readyState == 4) {
                            Y.parentNode.removeChild(Y)
                        } else {
                            setTimeout(arguments.callee, 10)
                        }
                    })()
                } else {
                    Y.parentNode.replaceChild(g(Y), Y)
                }
            }
            function g(ab) {
                var aa = C("div");
                if (M.win && M.ie) {
                    aa.innerHTML = ab.innerHTML
                } else {
                    var Y = ab.getElementsByTagName(r)[0];
                    if (Y) {
                        var ad = Y.childNodes;
                        if (ad) {
                            var X = ad.length;
                            for (var Z = 0; Z < X; Z++) {
                                if (!(ad[Z].nodeType == 1 && ad[Z].nodeName == "PARAM") && !(ad[Z].nodeType == 8)) {
                                    aa.appendChild(ad[Z].cloneNode(true))
                                }
                            }
                        }
                    }
                }
                return aa
            }
            function u(ai, ag, Y) {
                var X, aa = c(Y);
                if (M.wk && M.wk < 312) {
                    return X
                }
                if (aa) {
                    if (typeof ai.id == D) {
                        ai.id = Y
                    }
                    if (M.ie && M.win) {
                        var ah = "";
                        for (var ae in ai) {
                            if (ai[ae] != Object.prototype[ae]) {
                                if (ae.toLowerCase() == "data") {
                                    ag.movie = ai[ae]
                                } else {
                                    if (ae.toLowerCase() == "styleclass") {
                                        ah += ' class="' + ai[ae] + '"'
                                    } else {
                                        if (ae.toLowerCase() != "classid") {
                                            ah += " " + ae + '="' + ai[ae] + '"'
                                        }
                                    }
                                }
                            }
                        }
                        var af = "";
                        for (var ad in ag) {
                            if (ag[ad] != Object.prototype[ad]) {
                                af += '<param name="' + ad + '" value="' + ag[ad] + '" />'
                            }
                        }
                        aa.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + ah + ">" + af + "</object>";
                        N[N.length] = ai.id;
                        X = c(ai.id)
                    } else {
                        var Z = C(r);
                        Z.setAttribute("type", q);
                        for (var ac in ai) {
                            if (ai[ac] != Object.prototype[ac]) {
                                if (ac.toLowerCase() == "styleclass") {
                                    Z.setAttribute("class", ai[ac])
                                } else {
                                    if (ac.toLowerCase() != "classid") {
                                        Z.setAttribute(ac, ai[ac])
                                    }
                                }
                            }
                        }
                        for (var ab in ag) {
                            if (ag[ab] != Object.prototype[ab] && ab.toLowerCase() != "movie") {
                                e(Z, ab, ag[ab])
                            }
                        }
                        aa.parentNode.replaceChild(Z, aa);
                        X = Z
                    }
                }
                return X
            }
            function e(Z, X, Y) {
                var aa = C("param");
                aa.setAttribute("name", X);
                aa.setAttribute("value", Y);
                Z.appendChild(aa)
            }
            function y(Y) {
                var X = c(Y);
                if (X && X.nodeName == "OBJECT") {
                    if (M.ie && M.win) {
                        X.style.display = "none";
                        (function() {
                            if (X.readyState == 4) {
                                b(Y)
                            } else {
                                setTimeout(arguments.callee, 10)
                            }
                        })()
                    } else {
                        X.parentNode.removeChild(X)
                    }
                }
            }
            function b(Z) {
                var Y = c(Z);
                if (Y) {
                    for (var X in Y) {
                        if (typeof Y[X] == "function") {
                            Y[X] = null
                        }
                    }
                    Y.parentNode.removeChild(Y)
                }
            }
            function c(Z) {
                var X = null;
                try {
                    X = j.getElementById(Z)
                } catch (Y) {}
                return X
            }
            function C(X) {
                return j.createElement(X)
            }
            function i(Z, X, Y) {
                Z.attachEvent(X, Y);
                I[I.length] = [Z, X, Y]
            }
            function F(Z) {
                var Y = M.pv
                  , X = Z.split(".");
                X[0] = parseInt(X[0], 10);
                X[1] = parseInt(X[1], 10) || 0;
                X[2] = parseInt(X[2], 10) || 0;
                return Y[0] > X[0] || Y[0] == X[0] && Y[1] > X[1] || Y[0] == X[0] && Y[1] == X[1] && Y[2] >= X[2] ? true : false
            }
            function v(ac, Y, ad, ab) {
                if (M.ie && M.mac) {
                    return
                }
                var aa = j.getElementsByTagName("head")[0];
                if (!aa) {
                    return
                }
                var X = ad && typeof ad == "string" ? ad : "screen";
                if (ab) {
                    n = null;
                    G = null
                }
                if (!n || G != X) {
                    var Z = C("style");
                    Z.setAttribute("type", "text/css");
                    Z.setAttribute("media", X);
                    n = aa.appendChild(Z);
                    if (M.ie && M.win && typeof j.styleSheets != D && j.styleSheets.length > 0) {
                        n = j.styleSheets[j.styleSheets.length - 1]
                    }
                    G = X
                }
                if (M.ie && M.win) {
                    if (n && typeof n.addRule == r) {
                        n.addRule(ac, Y)
                    }
                } else {
                    if (n && typeof j.createTextNode != D) {
                        n.appendChild(j.createTextNode(ac + " {" + Y + "}"))
                    }
                }
            }
            function w(Z, X) {
                if (!m) {
                    return
                }
                var Y = X ? "visible" : "hidden";
                if (J && c(Z)) {
                    c(Z).style.visibility = Y
                } else {
                    v("#" + Z, "visibility:" + Y)
                }
            }
            function L(Y) {
                var Z = /[\\\"<>\.;]/;
                var X = Z.exec(Y) != null;
                return X && typeof encodeURIComponent != D ? encodeURIComponent(Y) : Y
            }
            var d = function() {
                if (M.ie && M.win) {
                    window.attachEvent("onunload", function() {
                        var ac = I.length;
                        for (var ab = 0; ab < ac; ab++) {
                            I[ab][0].detachEvent(I[ab][1], I[ab][2])
                        }
                        var Z = N.length;
                        for (var aa = 0; aa < Z; aa++) {
                            y(N[aa])
                        }
                        for (var Y in M) {
                            M[Y] = null
                        }
                        M = null;
                        for (var X in swfobject) {
                            swfobject[X] = null
                        }
                        swfobject = null
                    })
                }
            }();
            return {
                registerObject: function(ab, X, aa, Z) {
                    if (M.w3 && ab && X) {
                        var Y = {};
                        Y.id = ab;
                        Y.swfVersion = X;
                        Y.expressInstall = aa;
                        Y.callbackFn = Z;
                        o[o.length] = Y;
                        w(ab, false)
                    } else {
                        if (Z) {
                            Z({
                                success: false,
                                id: ab
                            })
                        }
                    }
                },
                getObjectById: function(X) {
                    if (M.w3) {
                        return z(X)
                    }
                },
                embedSWF: function(ab, ah, ae, ag, Y, aa, Z, ad, af, ac) {
                    var X = {
                        success: false,
                        id: ah
                    };
                    if (M.w3 && !(M.wk && M.wk < 312) && ab && ah && ae && ag && Y) {
                        w(ah, false);
                        K(function() {
                            ae += "";
                            ag += "";
                            var aj = {};
                            if (af && typeof af === r) {
                                for (var al in af) {
                                    aj[al] = af[al]
                                }
                            }
                            aj.data = ab;
                            aj.width = ae;
                            aj.height = ag;
                            var am = {};
                            if (ad && typeof ad === r) {
                                for (var ak in ad) {
                                    am[ak] = ad[ak]
                                }
                            }
                            if (Z && typeof Z === r) {
                                for (var ai in Z) {
                                    if (typeof am.flashvars != D) {
                                        am.flashvars += "&" + ai + "=" + Z[ai]
                                    } else {
                                        am.flashvars = ai + "=" + Z[ai]
                                    }
                                }
                            }
                            if (F(Y)) {
                                var an = u(aj, am, ah);
                                if (aj.id == ah) {
                                    w(ah, true)
                                }
                                X.success = true;
                                X.ref = an
                            } else {
                                if (aa && A()) {
                                    aj.data = aa;
                                    P(aj, am, ah, ac);
                                    return
                                } else {
                                    w(ah, true)
                                }
                            }
                            if (ac) {
                                ac(X)
                            }
                        })
                    } else {
                        if (ac) {
                            ac(X)
                        }
                    }
                },
                switchOffAutoHideShow: function() {
                    m = false
                },
                ua: M,
                getFlashPlayerVersion: function() {
                    return {
                        major: M.pv[0],
                        minor: M.pv[1],
                        release: M.pv[2]
                    }
                },
                hasFlashPlayerVersion: F,
                createSWF: function(Z, Y, X) {
                    if (M.w3) {
                        return u(Z, Y, X)
                    } else {
                        return undefined
                    }
                },
                showExpressInstall: function(Z, aa, X, Y) {
                    if (M.w3 && A()) {
                        P(Z, aa, X, Y)
                    }
                },
                removeSWF: function(X) {
                    if (M.w3) {
                        y(X)
                    }
                },
                createCSS: function(aa, Z, Y, X) {
                    if (M.w3) {
                        v(aa, Z, Y, X)
                    }
                },
                addDomLoadEvent: K,
                addLoadEvent: s,
                getQueryParamValue: function(aa) {
                    var Z = j.location.search || j.location.hash;
                    if (Z) {
                        if (/\?/.test(Z)) {
                            Z = Z.split("?")[1]
                        }
                        if (aa == null) {
                            return L(Z)
                        }
                        var Y = Z.split("&");
                        for (var X = 0; X < Y.length; X++) {
                            if (Y[X].substring(0, Y[X].indexOf("=")) == aa) {
                                return L(Y[X].substring(Y[X].indexOf("=") + 1))
                            }
                        }
                    }
                    return ""
                },
                expressInstallCallback: function() {
                    if (a) {
                        var X = c(R);
                        if (X && l) {
                            X.parentNode.replaceChild(l, X);
                            if (Q) {
                                w(Q, true);
                                if (M.ie && M.win) {
                                    l.style.display = "block"
                                }
                            }
                            if (E) {
                                E(B)
                            }
                        }
                        a = false
                    }
                }
            }
        }()
    }
    (function() {
        if ("undefined" == typeof window || window.WebSocket)
            return;
        var console = window.console;
        if (!console || !console.log || !console.error) {
            console = {
                log: function() {},
                error: function() {}
            }
        }
        if (!swfobject.hasFlashPlayerVersion("10.0.0")) {
            console.error("Flash Player >= 10.0.0 is required.");
            return
        }
        if (location.protocol == "file:") {
            console.error("WARNING: web-socket-js doesn't work in file:///... URL " + "unless you set Flash Security Settings properly. " + "Open the page via Web server i.e. http://...")
        }
        WebSocket = function(url, protocols, proxyHost, proxyPort, headers) {
            var self = this;
            self.gx5C = WebSocket.bYS5X++;
            WebSocket.bGv0x[self.gx5C] = self;
            self.readyState = WebSocket.CONNECTING;
            self.bufferedAmount = 0;
            self.lh7a = {};
            if (!protocols) {
                protocols = []
            } else if (typeof protocols == "string") {
                protocols = [protocols]
            }
            setTimeout(function() {
                WebSocket.Yo0x(function() {
                    WebSocket.op8h.create(self.gx5C, url, protocols, proxyHost || null, proxyPort || 0, headers || null)
                })
            }, 0)
        }
        ;
        WebSocket.prototype.send = function(data) {
            if (this.readyState == WebSocket.CONNECTING) {
                throw "INVALID_STATE_ERR: Web Socket connection has not been established"
            }
            var result = WebSocket.op8h.send(this.gx5C, encodeURIComponent(data));
            if (result < 0) {
                return true
            } else {
                this.bufferedAmount += result;
                return false
            }
        }
        ;
        WebSocket.prototype.close = function() {
            if (this.readyState == WebSocket.CLOSED || this.readyState == WebSocket.CLOSING) {
                return
            }
            this.readyState = WebSocket.CLOSING;
            WebSocket.op8h.close(this.gx5C)
        }
        ;
        WebSocket.prototype.addEventListener = function(type, listener, useCapture) {
            if (!(type in this.lh7a)) {
                this.lh7a[type] = []
            }
            this.lh7a[type].push(listener)
        }
        ;
        WebSocket.prototype.removeEventListener = function(type, listener, useCapture) {
            if (!(type in this.lh7a))
                return;
            var events = this.lh7a[type];
            for (var i = events.length - 1; i >= 0; --i) {
                if (events[i] === listener) {
                    events.splice(i, 1);
                    break
                }
            }
        }
        ;
        WebSocket.prototype.dispatchEvent = function(event) {
            var events = this.lh7a[event.type] || [];
            for (var i = 0; i < events.length; ++i) {
                events[i](event)
            }
            var handler = this["on" + event.type];
            if (handler)
                handler(event)
        }
        ;
        WebSocket.prototype.bYQ5V = function(flashEvent) {
            if ("readyState"in flashEvent) {
                this.readyState = flashEvent.readyState
            }
            if ("protocol"in flashEvent) {
                this.protocol = flashEvent.protocol
            }
            var jsEvent;
            if (flashEvent.type == "open" || flashEvent.type == "error") {
                jsEvent = this.bGu0x(flashEvent.type)
            } else if (flashEvent.type == "close") {
                jsEvent = this.bGu0x("close")
            } else if (flashEvent.type == "message") {
                var data = decodeURIComponent(flashEvent.message);
                jsEvent = this.bYL5Q("message", data)
            } else {
                throw "unknown event type: " + flashEvent.type
            }
            this.dispatchEvent(jsEvent)
        }
        ;
        WebSocket.prototype.bGu0x = function(type) {
            if (document.createEvent && window.Event) {
                var event = document.createEvent("Event");
                event.initEvent(type, false, false);
                return event
            } else {
                return {
                    type: type,
                    bubbles: false,
                    cancelable: false
                }
            }
        }
        ;
        WebSocket.prototype.bYL5Q = function(type, data) {
            if (document.createEvent && window.MessageEvent && !window.opera) {
                var event = document.createEvent("MessageEvent");
                event.initMessageEvent("message", false, false, data, null, null, window, null);
                return event
            } else {
                return {
                    type: type,
                    data: data,
                    bubbles: false,
                    cancelable: false
                }
            }
        }
        ;
        WebSocket.CONNECTING = 0;
        WebSocket.OPEN = 1;
        WebSocket.CLOSING = 2;
        WebSocket.CLOSED = 3;
        WebSocket.op8h = null;
        WebSocket.bGv0x = {};
        WebSocket.PQ7J = [];
        WebSocket.bYS5X = 0;
        WebSocket.loadFlashPolicyFile = function(url) {
            WebSocket.Yo0x(function() {
                WebSocket.op8h.loadManualPolicyFile(url)
            })
        }
        ;
        WebSocket.bbp2x = function() {
            if (WebSocket.op8h)
                return;
            if (WebSocket.bYH5M) {
                window.WEB_SOCKET_SWF_LOCATION = WebSocket.bYH5M
            }
            if (!window.WEB_SOCKET_SWF_LOCATION) {
                console.error("[WebSocket] set WEB_SOCKET_SWF_LOCATION to location of WebSocketMain.swf");
                return
            }
            var container = document.createElement("div");
            container.id = "webSocketContainer";
            container.style.position = "absolute";
            if (WebSocket.bYF5K()) {
                container.style.left = "0px";
                container.style.top = "0px"
            } else {
                container.style.left = "-100px";
                container.style.top = "-100px"
            }
            var holder = document.createElement("div");
            holder.id = "webSocketFlash";
            container.appendChild(holder);
            document.body.appendChild(container);
            swfobject.embedSWF(WEB_SOCKET_SWF_LOCATION, "webSocketFlash", "1", "1", "10.0.0", null, null, {
                hasPriority: true,
                swliveconnect: true,
                allowScriptAccess: "always"
            }, null, function(e) {
                if (!e.success) {
                    console.error("[WebSocket] swfobject.embedSWF failed")
                }
            })
        }
        ;
        WebSocket.cvz1x = function() {
            setTimeout(function() {
                WebSocket.op8h = document.getElementById("webSocketFlash");
                WebSocket.op8h.setCallerUrl(location.href);
                WebSocket.op8h.setDebug(!!window.WEB_SOCKET_DEBUG);
                for (var i = 0; i < WebSocket.PQ7J.length; ++i) {
                    WebSocket.PQ7J[i]()
                }
                WebSocket.PQ7J = []
            }, 0)
        }
        ;
        WebSocket.cvB1x = function() {
            setTimeout(function() {
                try {
                    var events = WebSocket.op8h.receiveEvents();
                    for (var i = 0; i < events.length; ++i) {
                        WebSocket.bGv0x[events[i].webSocketId].bYQ5V(events[i])
                    }
                } catch (e) {
                    console.error(e)
                }
            }, 0);
            return true
        }
        ;
        WebSocket.cvD1x = function(message) {
            console.log(decodeURIComponent(message))
        }
        ;
        WebSocket.dw4A = function(message) {
            console.error(decodeURIComponent(message))
        }
        ;
        WebSocket.Yo0x = function(task) {
            if (WebSocket.op8h) {
                task()
            } else {
                WebSocket.PQ7J.push(task)
            }
        }
        ;
        WebSocket.bYF5K = function() {
            if (!window.navigator || !window.navigator.mimeTypes) {
                return false
            }
            var mimeType = window.navigator.mimeTypes["application/x-shockwave-flash"];
            if (!mimeType || !mimeType.enabledPlugin || !mimeType.enabledPlugin.filename) {
                return false
            }
            return mimeType.enabledPlugin.filename.match(/flashlite/i) ? true : false
        }
        ;
        if (!window.WEB_SOCKET_DISABLE_AUTO_INITIALIZATION) {
            if (window.addEventListener) {
                window.addEventListener("load", function() {
                    WebSocket.bbp2x()
                }, false)
            } else {
                window.attachEvent("onload", function() {
                    WebSocket.bbp2x()
                })
            }
        }
    })();
    (function(exports, io, global) {
        exports.XHR = XHR;
        function XHR(socket) {
            if (!socket)
                return;
            io.Transport.apply(this, arguments);
            this.sendBuffer = []
        }
        io.util.inherit(XHR, io.Transport);
        XHR.prototype.open = function() {
            this.socket.setBuffer(false);
            this.onOpen();
            this.get();
            this.setCloseTimeout();
            return this
        }
        ;
        XHR.prototype.payload = function(payload) {
            var msgs = [];
            for (var i = 0, l = payload.length; i < l; i++) {
                msgs.push(io.parser.encodePacket(payload[i]))
            }
            this.send(io.parser.encodePayload(msgs))
        }
        ;
        XHR.prototype.send = function(data) {
            this.post(data);
            return this
        }
        ;
        function empty() {}
        XHR.prototype.post = function(data) {
            var self = this;
            this.socket.setBuffer(true);
            function stateChange() {
                if (this.readyState == 4) {
                    this.onreadystatechange = empty;
                    self.posting = false;
                    if (this.status == 200) {
                        self.socket.setBuffer(false)
                    } else {
                        self.onClose()
                    }
                }
            }
            function onload() {
                this.onload = empty;
                self.socket.setBuffer(false)
            }
            this.sendXHR = this.request("POST");
            if (global.XDomainRequest && this.sendXHR instanceof XDomainRequest) {
                this.sendXHR.onload = this.sendXHR.onerror = onload
            } else {
                this.sendXHR.onreadystatechange = stateChange
            }
            this.sendXHR.send(data)
        }
        ;
        XHR.prototype.close = function() {
            this.onClose();
            return this
        }
        ;
        XHR.prototype.request = function(method) {
            var req = io.util.request(this.socket.isXDomain())
              , query = io.util.query(this.socket.options.query, "t=" + +(new Date));
            req.open(method || "GET", this.prepareUrl() + query, true);
            if (method == "POST") {
                try {
                    if (req.setRequestHeader) {
                        req.setRequestHeader("Content-type", "text/plain;charset=UTF-8")
                    } else {
                        req.contentType = "text/plain"
                    }
                } catch (e) {}
            }
            return req
        }
        ;
        XHR.prototype.scheme = function() {
            return this.socket.options.secure ? "https" : "http"
        }
        ;
        XHR.check = function(socket, xdomain) {
            try {
                var request = io.util.request(xdomain)
                  , usesXDomReq = global.XDomainRequest && request instanceof XDomainRequest
                  , socketProtocol = socket && socket.options && socket.options.secure ? "https:" : "http:"
                  , isXProtocol = global.location && socketProtocol != global.location.protocol;
                if (request && !(usesXDomReq && isXProtocol)) {
                    return true
                }
            } catch (e) {}
            return false
        }
        ;
        XHR.xdomainCheck = function(socket) {
            return XHR.check(socket, true)
        }
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    (function(exports, io) {
        exports.htmlfile = HTMLFile;
        function HTMLFile(socket) {
            io.Transport.XHR.apply(this, arguments)
        }
        io.util.inherit(HTMLFile, io.Transport.XHR);
        HTMLFile.prototype.name = "htmlfile";
        HTMLFile.prototype.get = function() {
            this.doc = new (window[["Active"].concat("Object").join("X")])("htmlfile");
            this.doc.open();
            this.doc.write("<html></html>");
            this.doc.close();
            this.doc.parentWindow.s = this;
            var iframeC = this.doc.createElement("div");
            iframeC.className = "socketio";
            this.doc.body.appendChild(iframeC);
            this.iframe = this.doc.createElement("iframe");
            iframeC.appendChild(this.iframe);
            var self = this
              , query = io.util.query(this.socket.options.query, "t=" + +(new Date));
            this.iframe.src = this.prepareUrl() + query;
            io.util.on(window, "unload", function() {
                self.destroy()
            })
        }
        ;
        HTMLFile.prototype.c2x = function(data, doc) {
            data = data.replace(/\\\//g, "/");
            this.onData(data);
            try {
                var script = doc.getElementsByTagName("script")[0];
                script.parentNode.removeChild(script)
            } catch (e) {}
        }
        ;
        HTMLFile.prototype.destroy = function() {
            if (this.iframe) {
                try {
                    this.iframe.src = "about:blank"
                } catch (e) {}
                this.doc = null;
                this.iframe.parentNode.removeChild(this.iframe);
                this.iframe = null;
                CollectGarbage()
            }
        }
        ;
        HTMLFile.prototype.close = function() {
            this.destroy();
            return io.Transport.XHR.prototype.close.call(this)
        }
        ;
        HTMLFile.check = function(socket) {
            if (typeof window != "undefined" && ["Active"].concat("Object").join("X")in window) {
                try {
                    var a = new (window[["Active"].concat("Object").join("X")])("htmlfile");
                    return a && io.Transport.XHR.check(socket)
                } catch (e) {}
            }
            return false
        }
        ;
        HTMLFile.xdomainCheck = function() {
            return false
        }
        ;
        io.transports.push("htmlfile")
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    (function(exports, io, global) {
        exports["xhr-polling"] = XHRPolling;
        function XHRPolling() {
            io.Transport.XHR.apply(this, arguments)
        }
        io.util.inherit(XHRPolling, io.Transport.XHR);
        io.util.merge(XHRPolling, io.Transport.XHR);
        XHRPolling.prototype.name = "xhr-polling";
        XHRPolling.prototype.heartbeats = function() {
            return false
        }
        ;
        XHRPolling.prototype.open = function() {
            var self = this;
            io.Transport.XHR.prototype.open.call(self);
            return false
        }
        ;
        function empty() {}
        XHRPolling.prototype.get = function() {
            if (!this.isOpen)
                return;
            var self = this;
            function stateChange() {
                if (this.readyState == 4) {
                    this.onreadystatechange = empty;
                    if (this.status == 200) {
                        self.onData(this.responseText);
                        self.get()
                    } else {
                        self.onClose()
                    }
                }
            }
            function onload() {
                this.onload = empty;
                this.onerror = empty;
                self.retryCounter = 1;
                self.onData(this.responseText);
                self.get()
            }
            function onerror() {
                self.retryCounter++;
                if (!self.retryCounter || self.retryCounter > 3) {
                    self.onClose()
                } else {
                    self.get()
                }
            }
            this.xhr = this.request();
            if (global.XDomainRequest && this.xhr instanceof XDomainRequest) {
                this.xhr.onload = onload;
                this.xhr.onerror = onerror
            } else {
                this.xhr.onreadystatechange = stateChange
            }
            this.xhr.send(null)
        }
        ;
        XHRPolling.prototype.onClose = function() {
            io.Transport.XHR.prototype.onClose.call(this);
            if (this.xhr) {
                this.xhr.onreadystatechange = this.xhr.onload = this.xhr.onerror = empty;
                try {
                    this.xhr.abort()
                } catch (e) {}
                this.xhr = null
            }
        }
        ;
        XHRPolling.prototype.ready = function(socket, fn) {
            var self = this;
            io.util.defer(function() {
                fn.call(self)
            })
        }
        ;
        io.transports.push("xhr-polling")
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    (function(exports, io, global) {
        var indicator = global.document && "MozAppearance"in global.document.documentElement.style;
        exports["jsonp-polling"] = JSONPPolling;
        function JSONPPolling(socket) {
            io.Transport["xhr-polling"].apply(this, arguments);
            this.index = io.j.length;
            var self = this;
            io.j.push(function(msg) {
                self.c2x(msg)
            })
        }
        io.util.inherit(JSONPPolling, io.Transport["xhr-polling"]);
        JSONPPolling.prototype.name = "jsonp-polling";
        JSONPPolling.prototype.post = function(data) {
            var self = this
              , query = io.util.query(this.socket.options.query, "t=" + +(new Date) + "&i=" + this.index);
            if (!this.form) {
                var form = document.createElement("form"), area = document.createElement("textarea"), id = this.iframeId = "socketio_iframe_" + this.index, iframe;
                form.className = "socketio";
                form.style.position = "absolute";
                form.style.top = "0px";
                form.style.left = "0px";
                form.style.display = "none";
                form.target = id;
                form.method = "POST";
                form.setAttribute("accept-charset", "utf-8");
                area.name = "d";
                form.appendChild(area);
                document.body.appendChild(form);
                this.form = form;
                this.area = area
            }
            this.form.action = this.prepareUrl() + query;
            function complete() {
                initIframe();
                self.socket.setBuffer(false)
            }
            function initIframe() {
                if (self.iframe) {
                    self.form.removeChild(self.iframe)
                }
                try {
                    iframe = document.createElement('<iframe name="' + self.iframeId + '">')
                } catch (e) {
                    iframe = document.createElement("iframe");
                    iframe.name = self.iframeId
                }
                iframe.id = self.iframeId;
                self.form.appendChild(iframe);
                self.iframe = iframe
            }
            initIframe();
            this.area.value = io.JSON.stringify(data);
            try {
                this.form.submit()
            } catch (e) {}
            if (this.iframe.attachEvent) {
                iframe.onreadystatechange = function() {
                    if (self.iframe.readyState == "complete") {
                        complete()
                    }
                }
            } else {
                this.iframe.onload = complete
            }
            this.socket.setBuffer(true)
        }
        ;
        JSONPPolling.prototype.get = function() {
            var self = this
              , script = document.createElement("script")
              , query = io.util.query(this.socket.options.query, "t=" + +(new Date) + "&i=" + this.index);
            if (this.script) {
                this.script.parentNode.removeChild(this.script);
                this.script = null
            }
            script.async = true;
            script.src = this.prepareUrl() + query;
            script.onerror = function() {
                self.onClose()
            }
            ;
            var insertAt = document.getElementsByTagName("script")[0];
            insertAt.parentNode.insertBefore(script, insertAt);
            this.script = script;
            if (indicator) {
                setTimeout(function() {
                    var iframe = document.createElement("iframe");
                    document.body.appendChild(iframe);
                    document.body.removeChild(iframe)
                }, 100)
            }
        }
        ;
        JSONPPolling.prototype.c2x = function(msg) {
            this.onData(msg);
            if (this.isOpen) {
                this.get()
            }
            return this
        }
        ;
        JSONPPolling.prototype.ready = function(socket, fn) {
            var self = this;
            if (!indicator)
                return fn.call(this);
            io.util.load(function() {
                fn.call(self)
            })
        }
        ;
        JSONPPolling.check = function() {
            return "document"in global
        }
        ;
        JSONPPolling.xdomainCheck = function() {
            return true
        }
        ;
        io.transports.push("jsonp-polling")
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    if (typeof define === "function" && define.amd) {
        define([], function() {
            return io
        })
    }
})();
(function() {
    var isArray = Array.isArray;
    if (isArray === undefined) {
        isArray = function(arr) {
            return Object.prototype.toString.call(arr) === "[object Array]"
        }
    }
    var root = this;
    function EventEmitter() {}
    if (typeof module !== "undefined" && module.exports) {
        module.exports.EventEmitter = EventEmitter
    } else {
        root = window;
        root.EventEmitter = EventEmitter
    }
    var defaultMaxListeners = 10;
    EventEmitter.prototype.setMaxListeners = function(n) {
        if (!this.dE4I)
            this.dE4I = {};
        this.bGq0x = n
    }
    ;
    EventEmitter.prototype.emit = function() {
        var type = arguments[0];
        if (type === "error") {
            if (!this.dE4I || !this.dE4I.error || isArray(this.dE4I.error) && !this.dE4I.error.length) {
                if (this.domain) {
                    var er = arguments[1];
                    er.domain_emitter = this;
                    er.domain = this.domain;
                    er.domain_thrown = false;
                    this.domain.emit("error", er);
                    return false
                }
                if (arguments[1]instanceof Error) {
                    throw arguments[1]
                } else {
                    throw new Error("Uncaught, unspecified 'error' event.")
                }
                return false
            }
        }
        if (!this.dE4I)
            return false;
        var handler = this.dE4I[type];
        if (!handler)
            return false;
        if (typeof handler == "function") {
            if (this.domain) {
                this.domain.enter()
            }
            switch (arguments.length) {
            case 1:
                handler.call(this);
                break;
            case 2:
                handler.call(this, arguments[1]);
                break;
            case 3:
                handler.call(this, arguments[1], arguments[2]);
                break;
            default:
                var l = arguments.length;
                var args = new Array(l - 1);
                for (var i = 1; i < l; i++)
                    args[i - 1] = arguments[i];
                handler.apply(this, args)
            }
            if (this.domain) {
                this.domain.exit()
            }
            return true
        } else if (isArray(handler)) {
            if (this.domain) {
                this.domain.enter()
            }
            var l = arguments.length;
            var args = new Array(l - 1);
            for (var i = 1; i < l; i++)
                args[i - 1] = arguments[i];
            var listeners = handler.slice();
            for (var i = 0, l = listeners.length; i < l; i++) {
                listeners[i].apply(this, args)
            }
            if (this.domain) {
                this.domain.exit()
            }
            return true
        } else {
            return false
        }
    }
    ;
    EventEmitter.prototype.addListener = function(type, listener) {
        if ("function" !== typeof listener) {
            throw new Error("addListener only takes instances of Function")
        }
        if (!this.dE4I)
            this.dE4I = {};
        this.emit("newListener", type, typeof listener.listener === "function" ? listener.listener : listener);
        if (!this.dE4I[type]) {
            this.dE4I[type] = listener
        } else if (isArray(this.dE4I[type])) {
            this.dE4I[type].push(listener)
        } else {
            this.dE4I[type] = [this.dE4I[type], listener]
        }
        if (isArray(this.dE4I[type]) && !this.dE4I[type].warned) {
            var m;
            if (this.bGq0x !== undefined) {
                m = this.bGq0x
            } else {
                m = defaultMaxListeners
            }
            if (m && m > 0 && this.dE4I[type].length > m) {
                this.dE4I[type].warned = true;
                console.error("(node) warning: possible EventEmitter memory " + "leak detected. %d listeners added. " + "Use emitter.setMaxListeners() to increase limit.", this.dE4I[type].length);
                console.trace()
            }
        }
        return this
    }
    ;
    EventEmitter.prototype.on = EventEmitter.prototype.addListener;
    EventEmitter.prototype.once = function(type, listener) {
        if ("function" !== typeof listener) {
            throw new Error(".once only takes instances of Function")
        }
        var self = this;
        function g() {
            self.removeListener(type, g);
            listener.apply(this, arguments)
        }
        g.listener = listener;
        self.on(type, g);
        return this
    }
    ;
    EventEmitter.prototype.removeListener = function(type, listener) {
        if ("function" !== typeof listener) {
            throw new Error("removeListener only takes instances of Function")
        }
        if (!this.dE4I || !this.dE4I[type])
            return this;
        var list = this.dE4I[type];
        if (isArray(list)) {
            var position = -1;
            for (var i = 0, length = list.length; i < length; i++) {
                if (list[i] === listener || list[i].listener && list[i].listener === listener) {
                    position = i;
                    break
                }
            }
            if (position < 0)
                return this;
            list.splice(position, 1)
        } else if (list === listener || list.listener && list.listener === listener) {
            delete this.dE4I[type]
        }
        return this
    }
    ;
    EventEmitter.prototype.removeAllListeners = function(type) {
        if (arguments.length === 0) {
            this.dE4I = {};
            return this
        }
        var events = this.dE4I && this.dE4I[type];
        if (!events)
            return this;
        if (isArray(events)) {
            events.splice(0)
        } else {
            this.dE4I[type] = null
        }
        return this
    }
    ;
    EventEmitter.prototype.listeners = function(type) {
        if (!this.dE4I)
            this.dE4I = {};
        if (!this.dE4I[type])
            this.dE4I[type] = [];
        if (!isArray(this.dE4I[type])) {
            this.dE4I[type] = [this.dE4I[type]]
        }
        return this.dE4I[type]
    }
})();
(function() {
    if (typeof Object.create !== "function") {
        Object.create = function(o) {
            function F() {}
            F.prototype = o;
            return new F
        }
    }
    var root = window;
    var pomelo = Object.create(EventEmitter.prototype);
    root.pomelo = pomelo;
    var socket = null;
    var id = 1;
    var callbacks = {};
    var route = "web-connector.messageHandler.";
    var isRegister = false;
    var success = 200;
    var register_ack = "register";
    var bind_ack = "bind";
    var regBind_ack = "registerAndBind";
    var cancelBind_ack = "cancelBind";
    var message_store = {};
    var heartbeat_interval = 1e3 * 60;
    var heartbeat_timer;
    var current_user;
    var current_domain;
    var cacheMessageIds = [];
    var cacheSize = 100;
    pomelo.init = function(host, port, reconnect, cb) {
        var url = "ws://" + host;
        if (port) {
            url += ":" + port
        }
        var params;
        if (reconnect) {
            params = {
                "force new connection": true,
                reconnect: true,
                "max reconnection attempts": 50
            }
        } else {
            params = {
                "force new connection": true,
                reconnect: false
            }
        }
        socket = io.connect(url, params);
        socket.on("connect", function() {
            console.log("[pomeloclient.init] websocket connected!");
            cb()
        });
        socket.on("reconnect", function() {
            pomelo.emit("reconnect")
        });
        socket.on("message", function(data) {
            message_store = {};
            if (typeof data === "string") {
                data = JSON.parse(data)
            }
            if (data instanceof Array) {
                processMessageBatch(data)
            } else {
                processMessage(data);
                emitMessage()
            }
        });
        socket.on("error", function(err) {
            cb(err)
        });
        socket.on("disconnect", function(reason) {
            isRegister = false;
            pomelo.emit("disconnect", reason)
        })
    }
    ;
    var request = function(method, opts, cb) {
        if (!method) {
            console.error("request message error with no method.");
            return
        }
        id++;
        callbacks[id] = cb;
        sendMsg(method, id, opts)
    };
    var notify = function(method, msg) {
        if (!method) {
            console.error("notify message error with no method.");
            return
        }
        sendMsg(method, 0, msg)
    };
    var sendMsg = function(method, msgId, msg) {
        var path = route + method;
        var rs = {
            id: msgId,
            route: path,
            msg: msg
        };
        var sg = JSON.stringify(rs);
        socket.send(sg)
    };
    var processMessageBatch = function(msgs) {
        for (var i = 0, l = msgs.length; i < l; i++) {
            processMessage(msgs[i])
        }
        emitMessage()
    };
    var emitMessage = function() {
        for (var key in message_store) {
            pomelo.emit(key, message_store[key])
        }
    };
    var processMessage = function(msg) {
        if (msg.id) {
            var cb = callbacks[msg.id];
            delete callbacks[msg.id];
            if (typeof cb !== "function") {
                console.log("[pomeloclient.processMessage] cb is not a function for request " + msg.id);
                return
            }
            cb(msg.body);
            if (msg.body.type === register_ack && msg.body.code == success) {
                isRegister = true
            }
            if ((msg.body.type === bind_ack || msg.body.type === regBind_ack) && msg.body.code == success) {
                heartbeat_timer = setInterval(function() {
                    notify("heartbeat", {
                        flag: "online",
                        domain: current_domain,
                        user: current_user
                    })
                }, heartbeat_interval)
            }
            if (msg.body.type === cancelBind_ack && msg.body.code == success) {
                clearInterval(heartbeat_timer)
            }
            return
        } else {
            if (!filterMessage(msg)) {
                return
            }
            if (!message_store[msg.route]) {
                if (msg.body instanceof Array) {
                    message_store[msg.route] = msg.body
                } else {
                    message_store[msg.route] = [msg.body]
                }
            } else {
                var arr = message_store[msg.route];
                if (msg.body instanceof Array) {
                    var messages = msg.body;
                    for (var i = 0; i < messages.length; i++) {
                        arr.push(messages[i])
                    }
                } else {
                    arr.push(msg.body)
                }
                message_store[msg.route] = arr
            }
        }
    };
    var filterMessage = function(message) {
        var msgs = message.body;
        var ids = [];
        var results = {};
        if (msgs instanceof Array) {
            for (var i = 0; i < msgs.length; i++) {
                var id = msgs[i].msgId;
                ids.push(id)
            }
            var duplicatedIds = checkMessage(ids);
            if (duplicatedIds.length !== 0) {
                return false
            } else {
                cacheMessageIds = cacheMessageIds.concat(ids);
                if (cacheMessageIds.length > cacheSize) {
                    var length = cacheMessageIds - cacheSize;
                    for (var i = 0; i < length; i++) {
                        cacheMessageIds.shift()
                    }
                }
            }
        }
        return true
    };
    var checkMessage = function(ids) {
        var array = [];
        for (var i = 0; i < cacheMessageIds.length; i++) {
            var id = cacheMessageIds[i];
            for (var j = 0; j < ids.length; j++) {
                if (ids[j] === id) {
                    array.push(id)
                }
            }
        }
        return array
    };
    pomelo.register = function(opts, cb) {
        request("register", opts, cb)
    }
    ;
    pomelo.bind = function(opts, cb) {
        if (isRegister) {
            current_domain = opts.domain;
            current_user = opts.user;
            request("bind", opts, cb)
        } else {
            console.log("cannot bind without registration.")
        }
    }
    ;
    pomelo.registerAndBind = function(opts, cb) {
        current_domain = opts.domain;
        current_user = opts.user;
        request("registerAndBind", opts, cb)
    }
    ;
    pomelo.cancelBind = function(opts, cb) {
        current_domain = null;
        current_user = null;
        request("cancelBind", opts, cb)
    }
    ;
    pomelo.getOnlineUser = function(opts, cb) {
        request("getOnlineUser", opts, cb)
    }
    ;
    pomelo.disconnect = function() {
        if (socket) {
            socket.disconnect();
            socket = null
        }
    }
    ;
    pomelo.ackMessage = function(domain, msgs) {
        var msgIds = "";
        var types = "";
        var message = {};
        var user;
        for (var i = 0; i < msgs.length; i++) {
            var data = msgs[i];
            if (!user) {
                user = data.user
            }
            msgIds += data.msgId;
            types += data.type;
            if (i !== msgs.length - 1) {
                msgIds += ";";
                types += ";"
            }
        }
        var message = {
            user: user,
            msgIds: msgIds,
            types: types,
            domain: domain
        };
        notify("ack", message)
    }
})();
(function() {
    var c2x = NEJ.P, X3x = NEJ.O, bn3x = NEJ.F, h3x = c2x("nej.v"), k3x = c2x("nej.u"), H3x = c2x("nej.ut"), l3x = c2x("nm.x"), di4m = c2x("nm.u"), p3x = c2x("nm.d"), OS7L = c2x("pomelo"), dm4q = 0, b2x, K3x;
    p3x.eP5U({
        "polling-init": {
            url: "/api/push/init",
            format: function(P3x) {
                dm4q = 2;
                var ru9l = {
                    domain: "music.163.com",
                    host: MUSIC_CONFIG.pushHost,
                    port: MUSIC_CONFIG.pushPort,
                    key: MUSIC_CONFIG.pushKey,
                    secret: "bec0b878892740c498505a85eb3dcec9"
                }
                  , i3x = P3x.account || X3x
                  , cU4Y = GUser.userId;
                OS7L.init(ru9l.host, ru9l.port, true, this.bYx5C.g3x(this, {
                    user: cU4Y,
                    nonce: i3x.nonce,
                    domain: ru9l.domain,
                    productKey: ru9l.key,
                    signature: i3x.signature,
                    expire_time: i3x.expireTime
                }))
            },
            onerror: function() {
                return this.bbT2x()
            }
        }
    });
    p3x.ya1x = NEJ.C();
    b2x = p3x.ya1x.O3x(p3x.hc6W);
    b2x.cl4p = function() {
        var ps8k = !1;
        return function(e3x) {
            if (!ps8k) {
                ps8k = !0
            }
            this.cs4w(e3x);
            OS7L.on("specify", this.qq9h.g3x(this));
            OS7L.on("broadcast", this.qq9h.g3x(this))
        }
    }();
    b2x.qq9h = function(d2x) {
        k3x.be3x(d2x, function(bF3x) {
            h3x.x3x(p3x.ya1x, "message", bF3x)
        }, this)
    }
    ;
    b2x.bbT2x = function() {
        var bz3x = 500;
        return function() {
            dm4q = 0;
            OS7L.disconnect();
            if (bz3x > 6e4)
                bz3x = 500;
            bz3x *= 2
        }
    }();
    b2x.bYx5C = function(e3x, bR3x) {
        if (!!bR3x) {
            return this.bbT2x()
        }
        dm4q = 3;
        OS7L.registerAndBind(e3x, function(m3x) {
            if (m3x.code != 200) {
                return this.bbT2x()
            }
            dm4q = 4
        }
        .g3x(this))
    }
    ;
    b2x.cvE1x = function() {
        di4m.bYs5x.fY5d().cvF1x()
    }
    ;
    b2x.cvG1x = function() {
        di4m.bYs5x.fY5d().cvH1x()
    }
    ;
    b2x.bce2x = function() {
        var ps8k = !1;
        return function() {
            if (ps8k)
                return;
            ps8k = !0;
            this.ck4o("polling-init", {})
        }
    }();
    H3x.fq5v.B3x({
        event: "message",
        element: p3x.ya1x
    })
})();
(function() {
    var c2x = NEJ.P, X3x = NEJ.O, a2x = c2x("nej.e"), h3x = c2x("nej.v"), v3x = c2x("nej.j"), cP4T = c2x("nej.p"), k3x = c2x("nej.u"), n3x = c2x("nm.l"), p3x = c2x("nm.d"), l3x = c2x("nm.x"), dh4l = c2x("api"), b2x, K3x;
    var gh5m = a2x.ib6V('<div class="lyct f-cb"><div class="m-fdback"><div class="tip">任何产品中的问题，欢迎反馈给我们</div><div class="u-txtwrap f-pr"><textarea class="u-txt area" placeholder="请输入反馈内容"></textarea><span class="zs s-fc2">140</span></div><div class="u-txtwrap f-pr holder-parent"><textarea class="u-txt contact" placeholder="请留下联系方式（电话、QQ、邮箱）" maxLength="100"></textarea></div><div style="display:none" class="u-err"><i class="u-icn u-icn-25"></i>内容不能为空！</div></div><div class="lybtn f-tc"><a href="javascript:;" class="u-btn2 u-btn2-2 u-btn2-w4" hidefocus="true"><i>发送意见</i></a><a href="javascript:;" class="u-btn2 u-btn2-1 u-btn2-w4" hidefocus="true"><i>取 消</i></a></div></div>');
    n3x.bcg2x = NEJ.C();
    b2x = n3x.bcg2x.O3x(n3x.dV5a);
    K3x = n3x.bcg2x.cf4j;
    b2x.bk3x = function(e3x) {
        e3x.title = "意见反馈";
        this.bl3x(e3x)
    }
    ;
    b2x.bZ4d = function() {
        this.ca4e = gh5m
    }
    ;
    b2x.bQ3x = function() {
        this.cb4f();
        this.gH5M = {};
        var HM4Q = a2x.I3x;
        var Cu2x = h3x.s3x;
        this.gH5M.submit_btn = HM4Q(this.o3x, "u-btn2")[0];
        this.gH5M.cancle_btn = HM4Q(this.o3x, "u-btn2")[1];
        this.gH5M.prompt_msg = HM4Q(this.o3x, "u-err")[0];
        this.gH5M.zs = HM4Q(this.o3x, "zs")[0];
        a2x.Y3x(this.gH5M.zs, "display", "none");
        this.gH5M.fb_txt = HM4Q(this.o3x, "u-txt")[0];
        this.gH5M.contact = HM4Q(this.o3x, "u-txt")[1];
        a2x.fG5L(this.gH5M.fb_txt, "holder");
        a2x.fG5L(this.gH5M.contact, "holder");
        if (a2x.bB3x(this.gH5M.fb_txt.parentNode, "holder-parent")) {
            a2x.Y3x(this.gH5M.fb_txt.parentNode, "display", "block")
        }
        if (a2x.bB3x(this.gH5M.contact.parentNode, "holder-parent")) {
            a2x.Y3x(this.gH5M.contact.parentNode, "display", "block")
        }
        Cu2x(this.gH5M.submit_btn, "click", this.bYp5u.g3x(this));
        Cu2x(this.gH5M.cancle_btn, "click", this.bYo5t.g3x(this));
        Cu2x(this.gH5M.prompt_msg, "msgShow", this.bYn5s.g3x(this));
        Cu2x(this.gH5M.fb_txt, "keyup", this.sL9C.g3x(this));
        Cu2x(this.gH5M.fb_txt, "input", this.fo5t.g3x(this));
        Cu2x(this.gH5M.contact, "keyup", this.bYm5r.g3x(this));
        Cu2x(this.gH5M.contact, "input", this.bGl0x.g3x(this));
        this.kH7A = p3x.hQ6K.B3x()
    }
    ;
    b2x.bYp5u = function(d2x) {
        h3x.bh3x(d2x);
        if (this.cv4z())
            return;
        var bi3x = this.gH5M.fb_txt.value.trim();
        var br3x = bi3x.length;
        var e3x = {
            type: "json",
            method: "post",
            noEnc: true
        };
        var bGk0x = this.gH5M.contact.value.trim();
        var YH0x = {
            ua: navigator.userAgent,
            hash: top.location.hash,
            href: location.href,
            flash: l3x.bbU2x(),
            contact: bGk0x
        };
        var i3x = {
            content: bi3x,
            client: "web",
            xInfo: JSON.stringify(YH0x)
        }
          , mV8N = this.kH7A.cju8m();
        if (mV8N && mV8N.length) {
            i3x.log = mV8N.join("\n")
        }
        if (br3x == 0) {
            this.gH5M.prompt_msg.innerHTML = "反馈内容不能为空";
            a2x.Y3x(this.gH5M.prompt_msg, "display", "block");
            return
        }
        if (bGk0x.length > 100) {
            this.gH5M.prompt_msg.innerHTML = "联系方式最多只能输入100个字符";
            a2x.Y3x(this.gH5M.prompt_msg, "display", "block");
            return
        }
        this.cv4z(true);
        e3x.data = k3x.db4f(i3x);
        e3x.onload = this.bYj5o.g3x(this);
        e3x.onerror = this.hZ6T.g3x(this);
        v3x.bq3x("/api/feedback/web", e3x)
    }
    ;
    b2x.fo5t = function(d2x) {
        var br3x = this.gH5M.fb_txt.value.trim().length;
        if (br3x > 0)
            a2x.Y3x(this.gH5M.prompt_msg, "display", "none");
        cP4T.cR4V.browser == "ie" && cP4T.cR4V.version < "7.0" ? setTimeout(this.fD5I.g3x(this), 0) : this.fD5I()
    }
    ;
    b2x.sL9C = function(d2x) {
        if (d2x.keyCode === 8)
            this.fD5I()
    }
    ;
    b2x.fD5I = function() {
        var br3x = this.gH5M.fb_txt.value.trim().length;
        this.gH5M.zs.innerHTML = !br3x ? "0/140" : br3x + "/140"
    }
    ;
    b2x.bGl0x = function(d2x) {
        var br3x = this.gH5M.contact.value.trim().length;
        if (br3x > 0)
            a2x.Y3x(this.gH5M.prompt_msg, "display", "none")
    }
    ;
    b2x.bYm5r = function(d2x) {
        if (d2x.keyCode === 8)
            this.bGl0x()
    }
    ;
    b2x.bYo5t = function(d2x) {
        h3x.cg4k(d2x);
        this.bp3x()
    }
    ;
    b2x.bYn5s = function(d2x) {
        var f3x = h3x.U3x(d2x);
        f3x.innerHTML = "请输入反馈内容"
    }
    ;
    b2x.cvI1x = function(cvJ1x) {
        var f3x = h3x.U3x(d2x);
        f3x.innerHTML = ""
    }
    ;
    b2x.bYj5o = function(m3x) {
        this.cv4z(false);
        this.bp3x();
        n3x.Z3x.N3x({
            tip: "意见发送成功",
            autoclose: true
        })
    }
    ;
    b2x.hZ6T = function(m3x) {
        this.cv4z(false);
        n3x.Z3x.N3x({
            tip: "意见发送失败",
            autoclose: true
        })
    }
    ;
    b2x.cv4z = function(cE4I) {
        return this.dM4Q(this.gH5M.submit_btn, cE4I, "发送意见", "发送中...")
    }
    ;
    b2x.N3x = function() {
        K3x.N3x.call(this);
        this.cv4z(false);
        this.gH5M.fb_txt.value = "";
        this.gH5M.contact.value = "";
        a2x.Y3x(this.gH5M.prompt_msg, "display", "none");
        this.fD5I()
    }
    ;
    l3x.bYe5j = function(e3x) {
        e3x = e3x || {};
        if (e3x.title === undefined)
            e3x.title = "意见反馈";
        n3x.bcg2x.N3x(e3x)
    }
    ;
    dh4l.feedback = l3x.feedback = l3x.bYe5j
})();
(function() {
    var c2x = NEJ.P, X3x = NEJ.O, bn3x = NEJ.F, M3x = c2x("nej.ui"), b2x;
    if (!!M3x.vP0x)
        return;
    M3x.vP0x = NEJ.C();
    b2x = M3x.vP0x.O3x(M3x.eo5t);
    b2x.cl4p = function() {
        this.gx5C = this.bGh0x();
        this.cs4w()
    }
    ;
    b2x.bk3x = function(e3x) {
        this.bl3x(e3x);
        this.cn4r = e3x.index;
        this.fS5X = e3x.total;
        this.gJ5O = e3x.range;
        this.fO5T(e3x.data)
    }
    ;
    b2x.bD3x = function() {
        this.bH3x();
        delete this.ba3x;
        delete this.cn4r;
        delete this.fS5X;
        delete this.gJ5O
    }
    ;
    b2x.hn6h = bn3x;
    b2x.bGh0x = function() {
        var fV5a = +(new Date);
        return function() {
            return "itm-" + ++fV5a
        }
    }();
    b2x.BQ2x = function() {
        return this.gx5C
    }
    ;
    b2x.hk6e = function() {
        return this.ba3x
    }
    ;
    b2x.fO5T = function(i3x) {
        this.ba3x = i3x || {};
        this.hn6h(this.ba3x)
    }
})();
(function() {
    var c2x = NEJ.P, a2x = c2x("nej.e"), h3x = c2x("nej.v"), M3x = c2x("nej.ui"), b2x, K3x;
    if (!!M3x.rB9s)
        return;
    M3x.rB9s = NEJ.C();
    b2x = M3x.rB9s.O3x(M3x.vP0x);
    K3x = M3x.rB9s.cf4j;
    b2x.bk3x = function(e3x) {
        this.bYb5g = e3x.pkey || "id";
        this.bl3x(e3x)
    }
    ;
    b2x.Cr2x = function(i3x) {
        this.x3x("ondelete", {
            ext: i3x,
            id: this.BQ2x(),
            data: this.hk6e(),
            body: this.kB7u()
        })
    }
    ;
    b2x.NU7N = function(i3x) {
        this.x3x("onupdate", {
            ext: i3x,
            id: this.BQ2x(),
            data: this.hk6e(),
            body: this.kB7u()
        })
    }
    ;
    b2x.fO5T = function(i3x) {
        K3x.fO5T.apply(this, arguments);
        this.gx5C = this.ba3x[this.bYb5g] || this.bGh0x()
    }
})();
(function() {
    var c2x = NEJ.P, X3x = NEJ.O, fc5h = NEJ.R, a2x = c2x("nej.e"), k3x = c2x("nej.u"), M3x = c2x("nej.ui"), b2x, hW6Q, bcT2x;
    if (!!M3x.bcU2x)
        return;
    M3x.bcU2x = NEJ.C();
    b2x = M3x.bcU2x.O3x(M3x.eo5t);
    b2x.bk3x = function(e3x) {
        this.YM0x = NEJ.X({}, e3x);
        this.fz5E = NEJ.X({}, e3x);
        delete this.YM0x.onchange;
        this.fz5E.onchange = this.gc5h.g3x(this);
        this.bl3x(e3x);
        this.bXZ5e({
            number: e3x.number,
            label: e3x.label || X3x
        })
    }
    ;
    b2x.bD3x = function() {
        this.bH3x();
        if (!!this.ki7b) {
            this.ki7b.S3x();
            delete this.ki7b
        }
        delete this.YM0x;
        delete this.fz5E;
        this.bXX5c();
        this.o3x.innerHTML = "&nbsp;"
    }
    ;
    b2x.bZ4d = function() {
        this.lg7Z = hW6Q
    }
    ;
    b2x.bXZ5e = function(i3x) {
        a2x.dL4P(this.o3x, bcT2x, i3x);
        var fV5a = a2x.GQ4U();
        this.fz5E.list = a2x.I3x(this.o3x, "js-i-" + fV5a);
        this.fz5E.pbtn = (a2x.I3x(this.o3x, "js-p-" + fV5a) || fc5h)[0];
        this.fz5E.nbtn = (a2x.I3x(this.o3x, "js-n-" + fV5a) || fc5h)[0]
    }
    ;
    b2x.bQ3x = function() {
        this.cb4f()
    }
    ;
    b2x.cvK1x = function(i3x) {
        return a2x.bP3x(bcT2x, i3x)
    }
    ;
    b2x.gc5h = function(d2x) {
        if (this.Nn6h)
            return;
        var r3x = d2x.index
          , co4s = d2x.total;
        this.Nn6h = !0;
        this.Nm6g(r3x, co4s);
        k3x.be3x(this.YV1x, function(sr9i) {
            sr9i.Nm6g(r3x, co4s)
        });
        this.Nn6h = !1;
        this.x3x("onchange", d2x)
    }
    ;
    b2x.g3x = function(bE3x) {
        bE3x = a2x.z3x(bE3x);
        if (!bE3x)
            return this;
        var cm4q = NEJ.X({}, this.YM0x);
        cm4q.parent = bE3x;
        cm4q.index = this.rM9D();
        cm4q.total = this.jO7H();
        var sr9i = this.constructor.B3x(cm4q);
        sr9i.ui0x("onchange", this.fz5E.onchange);
        if (!this.YV1x)
            this.YV1x = [];
        this.YV1x.push(sr9i);
        return this
    }
    ;
    b2x.bXX5c = function() {
        var bpp5u = function(sr9i, r3x, j3x) {
            sr9i.S3x();
            j3x.splice(r3x, 1)
        };
        return function() {
            k3x.me7X(this.YV1x, bpp5u)
        }
    }();
    b2x.jY7R = function(r3x) {
        if (!this.ki7b)
            return;
        this.ki7b.jY7R(r3x)
    }
    ;
    b2x.rM9D = function() {
        if (!this.ki7b)
            return 1;
        return this.ki7b.rM9D()
    }
    ;
    b2x.jO7H = function() {
        if (!this.ki7b)
            return 1;
        return this.ki7b.jO7H()
    }
    ;
    b2x.Nm6g = function(r3x, co4s) {
        if (!this.ki7b)
            return;
        this.ki7b.Nm6g(r3x, co4s)
    }
    ;
    b2x.bdq2x = function(co4s) {
        if (!this.ki7b)
            return;
        this.ki7b.bdq2x(co4s)
    }
    ;
    hW6Q = a2x.rL9C(".#<uispace>{font-size:12px;line-height:160%;}.#<uispace> a{margin:0 2px;padding:2px 8px;color:#333;border:1px solid #aaa;text-decoration:none;}.#<uispace> .js-disabled{cursor:default;}.#<uispace> .js-selected{cursor:default;background:#bbb;}");
    bcT2x = a2x.ek5p('{trim}{if !defined("noprv")||!noprv}<a href="#" class="zbtn zprv ${\'js-p-\'|seed}">${label.prev||"上一页"}</a>{/if}{list 1..number as x}<a href="#" class="zpgi zpg${x} ${\'js-i-\'|seed}"></a>{/list}{if !defined("nonxt")||!nonxt}<a href="#" class="zbtn znxt ${\'js-n-\'|seed}">${label.next||"下一页"}</a>{/if}{/trim}')
})();
(function() {
    var c2x = NEJ.P, X3x = NEJ.O, bn3x = NEJ.F, a2x = c2x("nej.e"), h3x = c2x("nej.v"), k3x = c2x("nej.u"), M3x = c2x("nej.ut"), b2x;
    if (!!M3x.YW1x)
        return;
    M3x.YW1x = NEJ.C();
    b2x = M3x.YW1x.O3x(M3x.cz4D);
    b2x.bk3x = function(e3x) {
        this.bl3x(e3x);
        this.Zb1x = e3x.pbtn;
        this.ce4i = e3x.nbtn;
        this.Zd1x = e3x.sbtn;
        this.Zh1x = e3x.ebtn;
        this.im6g = e3x.event || "click";
        this.jT7M = e3x.selected || "js-selected";
        this.nh8Z = e3x.disabled || "js-disabled";
        this.bXV5a(e3x.list);
        this.Nm6g(e3x.index || 1, e3x.total || 1)
    }
    ;
    b2x.bD3x = function() {
        this.bH3x();
        delete this.bV4Z;
        delete this.im6g;
        delete this.Zb1x;
        delete this.ce4i;
        delete this.Zd1x;
        delete this.Zh1x;
        delete this.bGd0x;
        delete this.fS5X;
        delete this.cn4r;
        delete this.jT7M;
        delete this.nh8Z
    }
    ;
    b2x.bXV5a = function() {
        var bdE2x = function(f3x) {
            this.bV4Z.push(f3x);
            this.bT3x([[f3x, this.im6g, this.cF4J.dW5b(this, 0)]])
        };
        return function(j3x) {
            this.bV4Z = [];
            this.bT3x([[this.Zb1x, "click", this.cF4J.dW5b(this, -1)], [this.ce4i, "click", this.cF4J.dW5b(this, 1)], [this.Zd1x, "click", this.cF4J.dW5b(this, -2)], [this.Zh1x, "click", this.cF4J.dW5b(this, 2)]]);
            k3x.be3x(j3x, bdE2x, this)
        }
    }();
    b2x.Cf2x = function(f3x, r3x) {
        if (r3x == null) {
            f3x.innerText = "";
            a2x.Y3x(f3x, "display", "none");
            a2x.w3x(f3x, this.jT7M)
        } else {
            f3x.innerText = r3x;
            a2x.Y3x(f3x, "display", "");
            r3x == this.cn4r ? a2x.y3x(f3x, this.jT7M) : a2x.w3x(f3x, this.jT7M)
        }
    }
    ;
    b2x.bdJ2x = function() {
        if (this.cn4r <= 1) {
            a2x.y3x(this.Zb1x, this.nh8Z);
            a2x.y3x(this.Zd1x, this.nh8Z)
        } else {
            a2x.w3x(this.Zb1x, this.nh8Z);
            a2x.w3x(this.Zd1x, this.nh8Z)
        }
        if (this.cn4r >= this.fS5X) {
            a2x.y3x(this.ce4i, this.nh8Z);
            a2x.y3x(this.Zh1x, this.nh8Z)
        } else {
            a2x.w3x(this.ce4i, this.nh8Z);
            a2x.w3x(this.Zh1x, this.nh8Z)
        }
    }
    ;
    b2x.Zj1x = bn3x;
    b2x.bdL2x = function() {
        this.Zj1x();
        this.bdJ2x();
        this.x3x("onchange", {
            last: this.bGd0x,
            total: this.fS5X,
            index: this.cn4r,
            ext: this.bdN2x
        })
    }
    ;
    b2x.bGc0x = function(r3x) {
        r3x = parseInt(r3x);
        if (isNaN(r3x) || this.fS5X == null)
            return !1;
        r3x = Math.max(1, Math.min(r3x, this.fS5X));
        this.bGd0x = this.cn4r;
        this.cn4r = r3x;
        return !0
    }
    ;
    b2x.bdP2x = function(co4s) {
        co4s = parseInt(co4s);
        if (isNaN(co4s) || co4s < 1)
            return !1;
        this.fS5X = co4s;
        return !0
    }
    ;
    b2x.cF4J = function(d2x, ez5E) {
        h3x.cg4k(d2x);
        var E3x = h3x.U3x(d2x);
        if (!E3x || a2x.bB3x(E3x, this.jT7M) || a2x.bB3x(E3x, this.nh8Z))
            return;
        var r3x = E3x.innerText;
        switch (ez5E) {
        case 1:
        case -1:
            r3x = this.cn4r + ez5E;
            break;
        case 2:
            r3x = this.fS5X;
            break;
        case -2:
            r3x = 1;
            break
        }
        this.jY7R(r3x)
    }
    ;
    b2x.rM9D = function() {
        return this.cn4r
    }
    ;
    b2x.jY7R = function(r3x) {
        var bXS5X = this.cn4r;
        this.bGc0x(r3x);
        if (bXS5X != this.cn4r)
            this.bdL2x();
        return this
    }
    ;
    b2x.jO7H = function() {
        return this.fS5X
    }
    ;
    b2x.Ow7p = function(co4s) {
        if (this.bdP2x(co4s) && this.cn4r != null) {
            this.cn4r = 1;
            this.bdL2x()
        }
        return this
    }
    ;
    b2x.bdq2x = function(co4s) {
        if (this.bdP2x(co4s)) {
            this.Zj1x();
            this.bdJ2x()
        }
        return this
    }
    ;
    b2x.Nm6g = function(r3x, co4s) {
        if (!this.bdP2x(co4s) || !this.bGc0x(r3x))
            return this;
        this.bdL2x();
        return this
    }
})();
(function() {
    var c2x = NEJ.P, X3x = NEJ.O, a2x = c2x("nej.e"), k3x = c2x("nej.u"), cN4R = c2x("nej.x"), M3x = c2x("nej.ut"), b2x;
    if (!!M3x.LC5H)
        return;
    M3x.LC5H = NEJ.C();
    b2x = M3x.LC5H.O3x(M3x.YW1x);
    b2x.cl4p = function() {
        this.cs4w();
        var f3x = a2x.cT4X("span", "zdot");
        f3x.innerText = "...";
        this.Zn1x = [f3x.cloneNode(true), f3x]
    }
    ;
    b2x.bD3x = function() {
        this.bH3x();
        this.bGb0x()
    }
    ;
    b2x.bGb0x = function() {
        a2x.mi7b(this.Zn1x[0]);
        a2x.mi7b(this.Zn1x[1])
    }
    ;
    b2x.Zj1x = function() {
        this.bdN2x = {
            last: !1,
            first: !1,
            list: this.bV4Z
        };
        this.bGb0x();
        this.Cf2x(this.bV4Z[0], 1);
        var bG3x = 1
          , br3x = this.bV4Z.length;
        if (this.fS5X < br3x) {
            for (var pl8d; bG3x < br3x; bG3x++) {
                pl8d = bG3x + 1;
                this.Cf2x(this.bV4Z[bG3x], pl8d > this.fS5X ? null : pl8d)
            }
            return
        }
        if (this.cn4r > 1) {
            var ct4x = Math.floor((br3x - 2) / 2)
              , bXN5S = this.fS5X - br3x + 2
              , iG6A = Math.max(2, this.cn4r - ct4x);
            if (this.fS5X >= br3x) {
                iG6A = Math.min(iG6A, bXN5S)
            }
            if (iG6A > 2) {
                this.bV4Z[0].insertAdjacentElement("afterEnd", this.Zn1x[0]);
                this.bdN2x.first = !0
            }
            for (var r3x; ; bG3x++) {
                r3x = iG6A + bG3x - 1;
                if (r3x > this.cn4r)
                    break;
                this.Cf2x(this.bV4Z[bG3x], r3x)
            }
        }
        if (this.cn4r < this.fS5X) {
            var r3x, iG6A = this.cn4r + 1;
            for (var i = 0, l = br3x - 2; ; i++,
            bG3x++) {
                r3x = iG6A + i;
                if (bG3x > l || r3x > this.fS5X)
                    break;
                this.Cf2x(this.bV4Z[bG3x], r3x)
            }
            if (r3x < this.fS5X) {
                this.bV4Z[bG3x].insertAdjacentElement("beforeBegin", this.Zn1x[1]);
                this.bdN2x.last = !0
            }
            if (r3x <= this.fS5X) {
                this.Cf2x(this.bV4Z[bG3x++], this.fS5X)
            }
        }
        for (; bG3x < br3x; bG3x++) {
            this.Cf2x(this.bV4Z[bG3x])
        }
    }
    ;
    a2x.bXM5R = cN4R.bXM5R = function(bE3x, e3x) {
        var C3x = a2x.kv7o(bE3x);
        if (!C3x)
            return null;
        if (!M3x.Vz9q(C3x, M3x.LC5H)) {
            e3x = e3x || {};
            var j3x = !e3x.clazz ? a2x.cQ4U(C3x) : a2x.I3x(C3x, e3x.clazz);
            e3x.pbtn = j3x.shift();
            e3x.nbtn = j3x.pop();
            e3x.list = j3x;
            delete e3x.clazz
        }
        return M3x.Vz9q(C3x, M3x.LC5H, e3x || X3x)
    }
    ;
    cN4R.isChange = !0
})();
(function() {
    var c2x = NEJ.P, X3x = NEJ.O, fc5h = NEJ.R, a2x = c2x("nej.e"), k3x = c2x("nej.u"), H3x = c2x("nej.ut"), M3x = c2x("nej.ui"), b2x, K3x, gh5m;
    if (!!M3x.Kq5v)
        return;
    M3x.Kq5v = NEJ.C();
    b2x = M3x.Kq5v.O3x(M3x.bcU2x);
    K3x = M3x.Kq5v.cf4j;
    b2x.bk3x = function(e3x) {
        e3x.number = parseInt(e3x.number) || 9;
        this.bl3x(e3x);
        this.ki7b = H3x.LC5H.B3x(this.fz5E)
    }
    ;
    b2x.gc5h = function(d2x) {
        if (!!this.YM0x.noend) {
            var bFY0x = d2x.ext || X3x
              , j3x = bFY0x.list || fc5h;
            if (bFY0x.last) {
                a2x.Y3x(j3x[j3x.length - 1], "display", "none")
            }
        }
        K3x.gc5h.apply(this, arguments)
    }
})();
(function() {
    var c2x = NEJ.P, X3x = NEJ.O, bn3x = NEJ.F, a2x = c2x("nej.e"), h3x = c2x("nej.v"), k3x = c2x("nej.u"), bd3x = c2x("nej.ui"), M3x = c2x("nej.ut"), b2x;
    if (!!M3x.Zu1x)
        return;
    M3x.Zu1x = NEJ.C();
    b2x = M3x.Zu1x.O3x(M3x.cz4D);
    b2x.bk3x = function(e3x) {
        this.iC6w = {};
        this.bl3x(e3x);
        this.is6m = a2x.z3x(e3x.parent);
        this.eN5S = {
            parent: this.is6m
        };
        this.qB9s = parseInt(e3x.limit) || 10;
        this.wH1x = parseInt(e3x.first) || this.qB9s;
        this.bXK5P(e3x.item);
        this.bXI5N(e3x.cache || X3x);
        this.bXH5M(e3x.pager || X3x);
        this.fO5T()
    }
    ;
    b2x.bD3x = function() {
        this.x3x("onbeforerecycle");
        this.JY5d();
        this.bH3x();
        if (this.iC6w.clear) {
            this.R3x.tT0x(this.iC6w.key)
        }
        this.R3x.S3x();
        if (!!this.ix6r) {
            this.ix6r.S3x();
            delete this.ix6r
        }
        delete this.bFX0x;
        delete this.fz5E;
        delete this.Zv1x;
        delete this.R3x;
        delete this.is6m;
        delete this.Jy4C;
        delete this.eN5S;
        delete this.iC6w
    }
    ;
    b2x.bFW0x = function() {
        var cO4S = /\{(.*?)\}/gi
          , bXC5H = function(oU8M, i3x) {
            return (oU8M || "{id}{seed}").replace(cO4S, function($1, $2) {
                var A3x = i3x[$2];
                return A3x == null ? $1 : A3x
            })
        };
        return function(C3x) {
            var J3x = bXC5H(this.eN5S.jstIdTempalte, {
                id: C3x,
                seed: a2x.GQ4U()
            });
            if (!this.eN5S.jstIdType) {
                return a2x.z3x(J3x)
            } else if (this.eN5S.jstIdType == 1) {
                return (a2x.I3x(this.is6m, J3x) || [])[0]
            }
        }
    }();
    b2x.zw1x = function(bG3x, bj3x, fX5c, br3x) {
        var m3x = {
            index: 1,
            total: 1
        };
        if (bj3x >= bG3x) {
            m3x.index = Math.floor((bj3x - bG3x) / fX5c) + 2
        }
        if (br3x > bG3x) {
            m3x.total = Math.ceil((br3x - bG3x) / fX5c) + 1
        }
        return m3x
    }
    ;
    b2x.bFR0x = function(J3x) {
        delete this.Jy4C;
        this.IC4G = J3x;
        this.bT3x([[this.is6m, "click", this.bXw5B.g3x(this)]])
    }
    ;
    b2x.bXK5P = function(q3x) {
        if (k3x.fl5q(q3x)) {
            this.bFR0x(q3x);
            return
        }
        NEJ.X(this.eN5S, q3x);
        var dD4H = this.eN5S.klass;
        delete this.eN5S.klass;
        if (k3x.fl5q(dD4H)) {
            this.bFR0x(dD4H);
            return
        }
        delete this.IC4G;
        this.Jy4C = dD4H;
        this.eN5S.ondelete = this.x3x.g3x(this, "ondelete");
        this.eN5S.onupdate = this.x3x.g3x(this, "onupdate")
    }
    ;
    b2x.bXI5N = function(Q3x) {
        var dD4H = Q3x.klass
          , jx6r = NEJ.X({}, Q3x);
        this.iC6w.key = jx6r.lkey;
        this.iC6w.data = jx6r.data || {};
        this.iC6w.clear = !!jx6r.clear;
        this.eN5S.pkey = jx6r.key || "id";
        jx6r.onlistload = this.bfe3x.g3x(this);
        jx6r.onpullrefresh = this.bXt5y.g3x(this);
        if (!!dD4H && "onlistchange"in dD4H) {
            this.bT3x([[dD4H, "listchange", this.bfo3x.g3x(this)]])
        } else {
            jx6r.onitemadd = this.ZG1x.g3x(this);
            jx6r.onitemdelete = this.ZH1x.g3x(this);
            jx6r.onitemupdate = this.bFO0x.g3x(this)
        }
        this.R3x = (dD4H || M3x.OH7A).B3x(jx6r);
        if (Q3x.total != null) {
            this.R3x.Ow7p(this.iC6w.key, Q3x.total)
        }
        if (!!Q3x.list) {
            this.R3x.sq9h(this.iC6w.key, Q3x.list)
        }
    }
    ;
    b2x.bXH5M = function(sr9i) {
        this.bFX0x = sr9i.klass || bd3x.Kq5v;
        this.fz5E = NEJ.X({}, sr9i);
        if (k3x.ep5u(sr9i.parent)) {
            this.fz5E.parent = sr9i.parent[0];
            this.MU5Z = sr9i.parent.slice(1);
            if (!this.MU5Z || !this.MU5Z.length) {
                delete this.MU5Z
            }
        }
        delete this.fz5E.klass
    }
    ;
    b2x.JY5d = function() {
        var fW5b = /^(?:table|tr|tbody|ul|ol|select)$/i;
        return function() {
            this.x3x("onbeforelistclear", {
                parent: this.is6m
            });
            if (!!this.fg5l && this.fg5l.length > 0) {
                this.fg5l = this.Jy4C.S3x(this.fg5l);
                delete this.fg5l
            }
            if (fW5b.test(this.is6m.tagName)) {
                a2x.bIB0x(this.is6m)
            } else {
                this.is6m.innerHTML = ""
            }
        }
    }();
    b2x.bfA3x = function(ZI1x) {
        if (!!this.fz5E.fixed)
            return;
        a2x.Y3x(this.fz5E.parent, "display", ZI1x);
        k3x.be3x(this.MU5Z, function(bE3x) {
            a2x.Y3x(bE3x, "display", ZI1x)
        }, this)
    }
    ;
    b2x.bfH3x = function() {
        var r3x = this.fz5E.index || 1;
        delete this.fz5E.index;
        if (!!this.ix6r) {
            r3x = this.ix6r.rM9D()
        }
        this.zF2x({
            last: r3x,
            index: r3x
        })
    }
    ;
    b2x.zF2x = function(d2x) {
        this.x3x("onpagechange", d2x)
    }
    ;
    b2x.bFN9E = function(bj3x) {
        this.iC6w.offset = bj3x;
        this.Ta8S()
    }
    ;
    b2x.bFM9D = function(e3x) {
        return e3x
    }
    ;
    b2x.Ta8S = function() {
        this.MD5I();
        var i3x = this.iC6w.data;
        i3x.offset = this.iC6w.offset;
        var or8j = i3x.offset == 0;
        i3x.total = or8j;
        this.iC6w.limit = or8j ? this.wH1x : this.qB9s;
        i3x.limit = this.iC6w.limit;
        this.R3x.nv8n(this.bFM9D(NEJ.X({}, this.iC6w)))
    }
    ;
    b2x.bfe3x = function(e3x) {
        if (e3x.key != this.iC6w.key || e3x.offset != this.iC6w.offset)
            return;
        this.ZK1x();
        var j3x = this.R3x.gP5U(e3x.key);
        if (!j3x || !j3x.length) {
            this.bfR3x();
            return
        }
        var fX5c = e3x.limit
          , bj3x = e3x.offset;
        if (this.bfT3x(j3x, bj3x, fX5c))
            return;
        this.x3x("onbeforelistrender", {
            list: j3x,
            offset: bj3x,
            parent: this.is6m
        });
        if (!!this.IC4G) {
            this.eN5S.xlist = j3x;
            this.eN5S.beg = bj3x;
            this.eN5S.end = Math.min(j3x.length, bj3x + fX5c) - 1;
            this.eN5S.act = "list";
            var dz4D = a2x.bP3x(this.IC4G, this.eN5S);
            this.MA5F(dz4D)
        } else {
            this.eN5S.limit = fX5c;
            this.eN5S.offset = bj3x;
            var gC5H = a2x.yT1x(j3x, this.Jy4C, this.eN5S);
            this.Mq5v(gC5H)
        }
        this.x3x("onafterlistrender", {
            list: j3x,
            offset: bj3x,
            parent: this.is6m
        })
    }
    ;
    b2x.bXt5y = function(e3x) {
        if (!this.Zv1x)
            return;
        delete this.Zv1x;
        this.ZK1x("onafterpullrefresh");
        this.fO5T()
    }
    ;
    b2x.bFL9C = function(r3x, co4s) {
        if (!!this.ix6r) {
            var zf1x = this.ix6r.rM9D()
              , bXo5t = this.ix6r.jO7H();
            if (zf1x > co4s || co4s != bXo5t) {
                this.ix6r.S3x();
                delete this.ix6r;
                this.zF2x({
                    last: zf1x,
                    index: Math.min(r3x, co4s)
                });
                return !0
            }
        } else {
            this.fz5E.index = r3x;
            this.fz5E.total = co4s;
            this.ix6r = this.bFX0x.B3x(this.fz5E);
            this.ix6r.ui0x("onchange", this.zF2x.g3x(this));
            k3x.be3x(this.MU5Z, function(bE3x) {
                this.ix6r.g3x(bE3x)
            }, this)
        }
    }
    ;
    b2x.ZO1x = function() {
        var fV5a = +(new Date);
        return function(i3x) {
            var C3x = i3x[this.eN5S.pkey];
            if (!C3x) {
                i3x["dirty-data"] = !0;
                i3x[this.eN5S.pkey] = "dirty-" + fV5a++
            }
            return i3x
        }
    }();
    b2x.ZP1x = function(i3x) {
        var C3x = i3x[this.eN5S.pkey];
        if (!!i3x["dirty-data"]) {
            delete i3x["dirty-data"];
            delete i3x[this.eN5S.pkey]
        }
        return C3x
    }
    ;
    b2x.ZU1x = function() {
        var bXn5s = function(jW7P, lK7D) {
            this.is6m.insertAdjacentElement(jW7P, lK7D)
        };
        return function(jW7P, i3x) {
            var Hz4D = [i3x];
            if (!!this.IC4G) {
                this.eN5S.xlist = Hz4D;
                this.eN5S.beg = 0;
                this.eN5S.end = 0;
                this.eN5S.act = "add";
                this.MA5F(a2x.bP3x(this.IC4G, this.eN5S), jW7P)
            } else {
                this.eN5S.limit = 1;
                this.eN5S.offset = 0;
                this.eN5S.parent = bXn5s.g3x(this, jW7P);
                var gC5H = a2x.yT1x(Hz4D, this.Jy4C, this.eN5S);
                this.eN5S.parent = this.is6m;
                this.Mq5v(gC5H)
            }
        }
    }();
    b2x.MD5I = bn3x;
    b2x.ZK1x = function(T3x) {
        var d2x = {
            parent: this.is6m
        };
        this.x3x(T3x || "onafterlistload", d2x);
        if (!d2x.stopped) {
            a2x.mi7b(this.ci4m)
        }
    }
    ;
    b2x.bfT3x = bn3x;
    b2x.ZX2x = function(bF3x, jW7P) {
        if (k3x.fl5q(bF3x)) {
            if (!this.ci4m)
                this.ci4m = a2x.cT4X("div");
            this.ci4m.innerHTML = bF3x
        } else {
            this.ci4m = bF3x
        }
        this.is6m.insertAdjacentElement(jW7P || "beforeEnd", this.ci4m)
    }
    ;
    b2x.xl1x = function(T3x, kM7F, jW7P) {
        var d2x = {
            parent: this.is6m
        };
        this.x3x(T3x, d2x);
        if (!d2x.stopped) {
            this.ZX2x(d2x.value || kM7F, jW7P)
        }
    }
    ;
    b2x.bfR3x = bn3x;
    b2x.MA5F = bn3x;
    b2x.Mq5v = bn3x;
    b2x.bXw5B = function() {
        var fW5b = /^(?:delete|update)$/;
        return function(d2x) {
            var f3x = h3x.U3x(d2x, "d:action");
            if (!f3x)
                return;
            var W3x = a2x.u3x(f3x, "action");
            if (!fW5b.test(W3x))
                return;
            var C3x = a2x.u3x(f3x, "id");
            if (!C3x)
                return;
            var q3x = this.R3x.eg5l(C3x);
            if (!q3x)
                return;
            h3x.bh3x(d2x);
            this.x3x("on" + W3x, {
                data: q3x,
                id: q3x[this.eN5S.pkey],
                body: a2x.z3x(this.bFW0x(C3x))
            })
        }
    }();
    b2x.ZG1x = bn3x;
    b2x.Tb8T = function(d2x) {
        var i3x = d2x.data || {}
          , e3x = {
            data: i3x,
            key: this.iC6w.key,
            id: i3x[this.eN5S.pkey]
        };
        this.x3x("onbeforedelete", e3x);
        this.R3x.HL4P(e3x)
    }
    ;
    b2x.ZH1x = bn3x;
    b2x.Tc8U = function(d2x) {
        var i3x = d2x.data || {}
          , e3x = {
            data: i3x,
            key: this.iC6w.key
        };
        this.x3x("onbeforeupdate", e3x);
        this.R3x.SZ8R(e3x)
    }
    ;
    b2x.bFO0x = function(d2x) {
        this.JV5a(d2x, "onafterupdate");
        if (d2x.stopped)
            return;
        var C3x = d2x.data[this.eN5S.pkey];
        if (!!this.fg5l) {
            var q3x = a2x.bMr1x(C3x);
            if (!!q3x)
                q3x.fO5T(d2x.data)
        } else {
            var f3x = a2x.z3x(C3x + "" + a2x.GQ4U());
            if (!f3x)
                return;
            var j3x = this.R3x.gP5U(d2x.key)
              , r3x = k3x.cW4a(j3x, d2x.data);
            if (r3x < 0)
                return;
            this.eN5S.list = j3x;
            this.eN5S.beg = r3x;
            this.eN5S.end = r3x;
            this.eN5S.act = "update";
            var dz4D = a2x.bP3x(this.IC4G, this.eN5S);
            f3x.insertAdjacentHTML("afterEnd", dz4D);
            a2x.cK4O(f3x)
        }
    }
    ;
    b2x.JV5a = function(d2x, T3x) {
        var q3x = d2x.data;
        if (!q3x || q3x[this.eN5S.pkey] == null) {
            this.x3x("onerror", d2x);
            d2x.stopped = !0
        }
        if (!d2x.stopped) {
            this.x3x(T3x, d2x)
        }
    }
    ;
    b2x.bgq3x = bn3x;
    b2x.bgs3x = bn3x;
    b2x.bfo3x = function(d2x) {
        if (d2x.key != this.iC6w.key)
            return;
        switch (d2x.action) {
        case "add":
            this.ZG1x(d2x);
            break;
        case "delete":
            this.ZH1x(d2x);
            break;
        case "update":
            this.bFO0x(d2x);
            break;
        case "refresh":
            this.fO5T();
            break;
        case "unshift":
            this.bgs3x(d2x.offset, d2x.limit);
            break;
        case "append":
            this.bgq3x(d2x.offset, d2x.limit);
            break
        }
    }
    ;
    b2x.oP8H = function(q3x) {
        this.Tc8U({
            data: q3x
        })
    }
    ;
    b2x.lo7h = function(q3x) {
        this.Tb8T({
            data: q3x
        })
    }
    ;
    b2x.sh9Y = function(q3x) {
        this.R3x.iJ6D({
            data: q3x,
            key: this.iC6w.key
        })
    }
    ;
    b2x.si9Z = function() {
        return this.R3x
    }
    ;
    b2x.bgD3x = function(i3x) {
        this.ZU1x("afterBegin", this.ZO1x(i3x));
        return this.ZP1x(i3x)
    }
    ;
    b2x.bFK9B = function(i3x) {
        this.ZU1x("beforeEnd", this.ZO1x(i3x));
        return this.ZP1x(i3x)
    }
    ;
    b2x.fO5T = function() {
        this.JY5d();
        this.bfH3x()
    }
    ;
    b2x.cvL1x = function() {
        this.R3x.tT0x(this.iC6w.key);
        this.fO5T()
    }
    ;
    b2x.bcC2x = function() {
        if (!!this.Zv1x)
            return;
        this.Zv1x = !0;
        this.xl1x("onbeforepullrefresh", "列表刷新中...", "afterBegin");
        this.R3x.bcC2x({
            key: this.iC6w.key,
            data: this.iC6w.data
        })
    }
    ;
    b2x.jO7H = function() {
        return this.R3x.jO7H(this.iC6w.key)
    }
    ;
    b2x.bFJ9A = function() {
        return this.ix6r
    }
    ;
    b2x.SR8J = function() {
        return this.R3x.SR8J(this.iC6w.key)
    }
    ;
    b2x.bXe5j = function() {
        return this.fg5l
    }
})();
(function() {
    var c2x = NEJ.P, X3x = NEJ.O, fc5h = NEJ.R, k3x = c2x("nej.u"), a2x = c2x("nej.e"), M3x = c2x("nej.ut"), b2x, K3x;
    if (!!M3x.iv6p)
        return;
    M3x.iv6p = NEJ.C();
    b2x = M3x.iv6p.O3x(M3x.Zu1x);
    K3x = M3x.iv6p.cf4j;
    b2x.zw1x = function(bj3x, br3x) {
        return K3x.zw1x.call(this, this.wH1x, bj3x, this.qB9s, br3x)
    }
    ;
    b2x.bgN3x = function(r3x) {
        var bj3x = 0;
        if (r3x > 1)
            bj3x = this.wH1x + (r3x - 2) * this.qB9s;
        return bj3x
    }
    ;
    b2x.zF2x = function(d2x) {
        K3x.zF2x.apply(this, arguments);
        if (!d2x.stopped) {
            this.bFN9E(this.bgN3x(d2x.index))
        }
    }
    ;
    b2x.MD5I = function() {
        this.JY5d();
        this.xl1x("onbeforelistload", "列表加载中...")
    }
    ;
    b2x.ZK1x = function() {
        K3x.ZK1x.apply(this, arguments);
        this.JY5d()
    }
    ;
    b2x.bfT3x = function(j3x, bj3x, fX5c) {
        var bu3x = this.zw1x(bj3x, j3x.length);
        if (this.bFL9C(bu3x.index, bu3x.total))
            return !0;
        this.bfA3x(bu3x.total > 1 ? "" : "none")
    }
    ;
    b2x.bfR3x = function() {
        this.xl1x("onemptylist", "没有列表数据！")
    }
    ;
    b2x.ZX2x = function(bF3x, jW7P) {
        if (!jW7P && k3x.fl5q(bF3x)) {
            this.is6m.innerHTML = bF3x;
            return
        }
        K3x.ZX2x.apply(this, arguments)
    }
    ;
    b2x.MA5F = function(dz4D) {
        this.is6m.innerHTML = dz4D
    }
    ;
    b2x.Mq5v = function(gC5H) {
        this.fg5l = gC5H
    }
    ;
    b2x.ZG1x = function(d2x) {
        this.JV5a(d2x, "onafteradd");
        if (!d2x.stopped)
            this.fO5T()
    }
    ;
    b2x.ZH1x = function(d2x) {
        this.JV5a(d2x, "onafterdelete");
        if (!d2x.stopped)
            this.fO5T()
    }
    ;
    b2x.bgq3x = function(bj3x, fX5c) {
        var r3x = 1;
        if (!!this.ix6r) {
            r3x = this.ix6r.rM9D()
        }
        var iZ6T = this.bgN3x(r3x)
          , gz5E = iZ6T + (r3x > 1 ? this.qB9s : this.wH1x);
        if (bj3x >= gz5E && !!this.ix6r) {
            var bu3x = this.zw1x(0, this.jO7H());
            this.ix6r.bdq2x(bu3x.total);
            this.bfA3x(bu3x.total > 1 ? "" : "none")
        } else {
            this.fO5T()
        }
    }
    ;
    b2x.bgs3x = function(bj3x, fX5c) {
        var r3x = 1;
        if (!!this.ix6r) {
            r3x = this.ix6r.rM9D()
        }
        var iZ6T = this.bgN3x(r3x)
          , bu3x = this.zw1x(iZ6T, this.jO7H());
        this.zF2x({
            last: r3x,
            index: bu3x.index
        })
    }
})();
(function() {
    var c2x = NEJ.P, X3x = NEJ.O, bn3x = NEJ.F, a2x = c2x("nej.e"), h3x = c2x("nej.v"), H3x = c2x("nej.ut"), k3x = c2x("nej.u"), l3x = c2x("nm.x"), p3x = c2x("nm.d"), D3x = c2x("nm.w"), fe5j = 40, b2x, K3x;
    D3x.bab2x = NEJ.C();
    b2x = D3x.bab2x.O3x(H3x.cz4D);
    K3x = D3x.bab2x.cf4j;
    b2x.cl4p = function() {
        this.cs4w()
    }
    ;
    b2x.bk3x = function(e3x) {
        this.bl3x(e3x);
        this.OP7I = e3x.inputer;
        this.bhb3x = e3x.tipper;
        this.bT3x([[this.OP7I, "input", this.fo5t.g3x(this)]])
    }
    ;
    b2x.bD3x = function() {
        this.bH3x();
        this.IR4V(null, null)
    }
    ;
    b2x.fo5t = function(d2x) {
        if (d2x && d2x.type == "keyup" && (d2x.keyCode != 8 || d2x.keyCode != 68))
            return;
        var T3x = this.OP7I.value, cvM1x;
        if (l3x.Fg3x(T3x) > fe5j) {
            this.OP7I.value = l3x.yH1x(T3x, fe5j);
            this.IR4V("歌单名不能超过20个汉字或40个英文字符！", arguments.callee.g3x(this))
        } else if (T3x.indexOf("#") >= 0 || T3x.indexOf("@") >= 0) {
            this.IR4V("歌单名不能包含字符“@”和“#”！")
        } else {
            this.IR4V(null, null);
            this.x3x("onchange", {
                value: T3x
            })
        }
    }
    ;
    b2x.bWT5Y = function() {
        this.fo5t()
    }
    ;
    b2x.IR4V = function() {
        var C3x = 0;
        return function(do4s, bFH9y) {
            if (!!C3x)
                window.clearTimeout(C3x);
            if (!do4s) {
                a2x.y3x(this.bhb3x, "f-vhide");
                this.bFG9x = !1;
                return
            }
            this.bhb3x.innerHTML = '<i class="u-icn u-icn-25"></i>' + do4s;
            a2x.w3x(this.bhb3x, "f-vhide");
            this.bFG9x = !0;
            if (k3x.ga5f(bFH9y))
                C3x = window.setTimeout(function() {
                    this.IR4V(null, null);
                    bFH9y()
                }
                .g3x(this), 1e3)
        }
    }();
    b2x.bFD9u = function() {
        if (this.bFG9x)
            return !1;
        if (l3x.jf6Z(this.OP7I.value)) {
            this.IR4V("歌单名不能为空");
            return !1
        }
        return !0
    }
    ;
    b2x.fx5C = function() {
        return this.OP7I.value
    }
})();
(function() {
    var c2x = NEJ.P, X3x = NEJ.O, h3x = c2x("nej.v"), a2x = c2x("nej.e"), v3x = c2x("nej.j"), n3x = c2x("nm.l"), D3x = c2x("nm.w"), bI3x = c2x("nej.ui"), p3x = c2x("nm.d"), l3x = c2x("nm.x"), b2x, K3x;
    n3x.bai2x = NEJ.C();
    b2x = n3x.bai2x.O3x(n3x.dV5a);
    K3x = n3x.bai2x.cf4j;
    b2x.cl4p = function() {
        this.cs4w()
    }
    ;
    b2x.bQ3x = function() {
        this.cb4f();
        var j3x = a2x.I3x(this.o3x, "j-flag");
        this.baj2x = {
            inputer: j3x[0],
            tipper: j3x[1]
        };
        this.gO5T = {
            onerror: this.bFB9s.g3x(this),
            onitemadd: this.bFB9s.g3x(this)
        };
        this.ph8Z = j3x[2];
        h3x.s3x(j3x[2], "click", this.Bh2x.g3x(this));
        h3x.s3x(j3x[3], "click", this.yy1x.g3x(this));
        h3x.s3x(this.o3x, "keypress", this.bFz9q.g3x(this))
    }
    ;
    b2x.bZ4d = function() {
        this.ca4e = "m-wgt-create"
    }
    ;
    b2x.bk3x = function(e3x) {
        e3x.clazz = " m-layer-w2";
        e3x.parent = e3x.parent || document.body;
        e3x.title = "新建歌单";
        e3x.draggable = !0;
        e3x.destroyalbe = !0;
        e3x.mask = true;
        this.bl3x(e3x);
        this.baj2x.inputer.value = e3x.name || "";
        this.tF0x = D3x.bab2x.B3x(this.baj2x);
        this.tF0x.bWT5Y();
        this.R3x = p3x.ho6i.B3x(this.gO5T);
        setTimeout(function() {
            this.baj2x.inputer.focus()
        }
        .g3x(this), 0)
    }
    ;
    b2x.bD3x = function() {
        this.bH3x();
        if (this.tF0x) {
            this.tF0x.S3x();
            delete this.tF0x
        }
        this.sl9c(!1);
        this.baj2x.inputer.value = ""
    }
    ;
    b2x.sl9c = function(Kz5E) {
        this.nE8w = Kz5E;
        if (Kz5E) {
            this.ph8Z.innerHTML = "<i>新建中...</i>";
            a2x.y3x(this.ph8Z, "u-btn2-dis")
        } else {
            this.ph8Z.innerHTML = "<i>新 建</i>";
            a2x.w3x(this.ph8Z, "u-btn2-dis")
        }
    }
    ;
    b2x.Bh2x = function() {
        if (this.nE8w || !this.tF0x.bFD9u())
            return;
        var cm4q = {
            key: "playlist_new-" + GUser.userId,
            data: {
                name: this.tF0x.fx5C()
            },
            offset: 1
        };
        this.R3x.iJ6D(cm4q);
        this.sl9c(!0)
    }
    ;
    b2x.bFB9s = function(d2x) {
        var cc4g = (d2x.result || X3x).code;
        if (!cc4g) {
            this.x3x("onsuccess", d2x.data)
        } else {
            this.x3x("onerror", d2x)
        }
        this.bp3x()
    }
    ;
    b2x.yy1x = function() {
        this.bp3x()
    }
    ;
    b2x.bFz9q = function(d2x) {
        if (d2x.keyCode == 13)
            this.Bh2x()
    }
})();
(function() {
    var c2x = NEJ.P, X3x = NEJ.O, bn3x = NEJ.F, a2x = c2x("nej.e"), h3x = c2x("nej.v"), k3x = c2x("nej.u"), H3x = c2x("nej.ut"), v3x = c2x("nej.j"), l3x = c2x("nm.x"), p3x = c2x("nm.d"), n3x = c2x("nm.l"), b2x, K3x;
    n3x.bhG3x = NEJ.C();
    b2x = n3x.bhG3x.O3x(n3x.dV5a);
    K3x = n3x.bhG3x.cf4j;
    b2x.cl4p = function() {
        this.cs4w()
    }
    ;
    b2x.bQ3x = function() {
        this.cb4f();
        var j3x = a2x.I3x(this.o3x, "j-flag");
        this.hN6H = {
            limit: 301,
            parent: j3x[1],
            cache: {
                klass: p3x.ho6i,
                lkey: "playlist_new-" + GUser.userId,
                onlisterror: this.bhK3x.g3x(this)
            },
            item: {
                klass: "m-wgt-subscribe-item",
                cutStr: l3x.yI1x,
                escape: k3x.dJ4N
            }
        };
        this.gO5T = {
            onsuccess: this.bal2x.g3x(this),
            onerror: this.eh5m.g3x(this)
        };
        h3x.s3x(j3x[0], "click", this.Bh2x.g3x(this));
        h3x.s3x(j3x[1], "click", this.lX7Q.g3x(this))
    }
    ;
    b2x.bZ4d = function() {
        this.ca4e = "m-wgt-subscribe"
    }
    ;
    b2x.bk3x = function(e3x) {
        e3x.parent = e3x.parent || document.body;
        e3x.clazz = " m-layer-w2";
        e3x.title = "添加到歌单";
        e3x.draggable = !0;
        e3x.mask = !0;
        this.bl3x(e3x);
        this.bam2x = (e3x.tracks || []).reverse();
        this.hN6H.item.size = this.bam2x.length;
        this.gO5T.name = e3x.name || "";
        this.bFv9m = p3x.uS0x.B3x({
            onaddsuccess: this.Aw2x.g3x(this)
        });
        this.rN9E = p3x.ho6i.B3x({
            onlistload: this.bWB5G.g3x(this)
        });
        this.rN9E.bJR0x();
        k3x.be3x(this.bam2x, function(q3x, r3x, j3x) {
            if (!k3x.kR7K(q3x)) {
                j3x[r3x] = this.bFv9m.eg5l(q3x) || q3x
            }
        }, this)
    }
    ;
    b2x.bWB5G = function() {
        if (this.dt4x)
            this.dt4x.S3x();
        this.dt4x = H3x.iv6p.B3x(this.hN6H)
    }
    ;
    b2x.Bh2x = function() {
        this.bp3x();
        if (this.Bd2x)
            this.Bd2x.S3x();
        this.Bd2x = n3x.bai2x.B3x(this.gO5T);
        this.Bd2x.N3x()
    }
    ;
    b2x.lX7Q = function() {
        var bWw5B = function(f3x) {
            while (f3x && f3x != document) {
                if (f3x.tagName.toLowerCase() == "li") {
                    return f3x
                }
                f3x = f3x.parentNode
            }
        };
        return function(d2x) {
            h3x.cg4k(d2x);
            var E3x = h3x.U3x(d2x)
              , bhZ4d = bWw5B(E3x);
            if (!!bhZ4d && !a2x.bB3x(bhZ4d, "dis")) {
                this.bal2x({
                    id: a2x.u3x(bhZ4d, "id")
                })
            }
        }
    }();
    b2x.bal2x = function(d2x) {
        var C3x = d2x.id;
        if (!C3x || !this.bam2x.length)
            return;
        this.bFv9m.iJ6D({
            key: "track_playlist-" + C3x,
            data: {
                tracks: this.bam2x,
                pid: C3x
            }
        });
        this.bp3x()
    }
    ;
    b2x.Aw2x = function() {
        this.x3x("onsuccess");
        n3x.Z3x.N3x({
            tip: "收藏成功"
        })
    }
    ;
    b2x.eh5m = function(d2x) {
        this.bp3x();
        this.x3x("onerror", d2x);
        var cA4E = "收藏失败";
        switch (d2x.code) {
        case 405:
            cA4E = "操作过于频繁，先休息一下再试吧";
            break;
        case 507:
            cA4E = "歌单数量超过限制";
            break;
        case 502:
            cA4E = "歌曲已经存在"
        }
        n3x.Z3x.N3x({
            tip: cA4E,
            type: 2
        })
    }
    ;
    b2x.bhK3x = function() {
        this.bp3x();
        n3x.Z3x.N3x({
            tip: "列表下载失败，请稍后再试",
            type: 2
        })
    }
    ;
    l3x.lL7E = function(e3x) {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            top.login();
            return
        }
        n3x.bhG3x.N3x(e3x)
    }
})();
(function() {
    var c2x = NEJ.P
      , X3x = NEJ.O
      , bn3x = NEJ.F
      , cP4T = c2x("nej.p")
      , a2x = c2x("nej.e")
      , h3x = c2x("nej.v")
      , v3x = c2x("nej.j")
      , k3x = c2x("nej.u")
      , l3x = c2x("nm.x");
    var bia4e, ns8k, V3x = decodeURIComponent(location.href), jb6V = /.+(http:\/\/.+\/proxy.html)/.test(V3x) ? RegExp.$1 : "";
    if (!!jb6V) {
        v3x.vz0x("mail_proxy_url", jb6V)
    } else {
        jb6V = v3x.st9k("mail_proxy_url") || "about:blank"
    }
    bia4e = a2x.YA0x({
        src: jb6V,
        onload: function() {
            ns8k = true
        }
    });
    var bFr9i = function() {
        v3x.gI5N("USER_TRIGGER", {
            value: true,
            expire: 1 / (24 * 60),
            path: "/"
        })
    };
    var bWu5z = function() {
        if (cP4T.cR4V.browser == "ie" && parseInt(cP4T.cR4V.version) < 9) {
            l3x.eU5Z({
                clazz: "m-layer-w2",
                message: "当前浏览器版本过低，暂时无法使用，请升级后再试。"
            });
            return false
        }
        return true
    };
    l3x.Mg5l = function(t3x, C3x, W3x) {
        if (!bWu5z())
            return;
        bFr9i();
        if (W3x == "stop") {
            if (!ns8k)
                throw "proxy not loaded";
            bFr9i();
            bia4e.contentWindow.location.replace(jb6V + "#" + k3x.db4f({
                to: "ifrmMusic",
                message: JSON.stringify({
                    s: +(new Date),
                    action: "stop"
                })
            }))
        } else {
            bia4e.contentWindow.location.replace(jb6V + "#" + k3x.db4f({
                to: "ifrmMusic",
                message: JSON.stringify({
                    type: t3x,
                    id: C3x,
                    s: +(new Date),
                    action: W3x
                })
            }))
        }
    }
})();
(function() {
    var c2x = NEJ.P
      , X3x = NEJ.O
      , bn3x = NEJ.F
      , a2x = c2x("nej.e")
      , h3x = c2x("nej.v")
      , v3x = c2x("nej.j")
      , k3x = c2x("nej.u")
      , l3x = c2x("nm.x")
      , n3x = c2x("nm.l")
      , p3x = c2x("nm.d");
    var kH7A = p3x.hQ6K.B3x();
    var nw8o = p3x.uS0x.B3x({
        onlistload: bWt5y,
        onitemload: bWs5x,
        onerror: eh5m
    });
    var AQ2x = p3x.pi8a.B3x({
        onlistload: bWr5w,
        onitemload: bWq5v,
        onerror: eh5m
    });
    var bFq9h = {};
    function ud0x(d2x) {
        var f3x = h3x.U3x(d2x, "d:resAction")
          , W3x = a2x.u3x(f3x, "resAction");
        if (f3x && (W3x == "play" || W3x == "addto")) {
            var t3x = parseInt(a2x.u3x(f3x, "resType"));
            bFn9e({
                action: W3x,
                type: t3x,
                id: a2x.u3x(f3x, "resId"),
                from: a2x.u3x(f3x, "resFrom"),
                data: a2x.u3x(f3x, "resData"),
                order: a2x.u3x(f3x, "resOrder"),
                node: f3x
            });
            if (t3x != 13)
                bFl9c(f3x)
        }
    }
    function bFn9e(bN3x) {
        var W3x = bN3x.action
          , t3x = bN3x.type
          , C3x = bN3x.id
          , dH4L = bN3x.from
          , i3x = bN3x.data
          , sp9g = bN3x.order
          , e3x = {
            limit: 1e3,
            offset: 0,
            data: {
                id: C3x
            },
            ext: {
                id: C3x,
                action: W3x,
                type: t3x,
                from: dH4L,
                data: i3x,
                node: bN3x.node
            }
        };
        if (W3x != "play" && W3x != "addto" || !t3x)
            return;
        if (window.GRef && GRef == "mail") {
            l3x.Mg5l(t3x, C3x, W3x);
            return
        }
        switch (t3x) {
        case 13:
            e3x.key = "track_playlist-" + C3x;
            nw8o.nv8n(e3x);
            break;
        case 17:
            e3x.key = "program";
            e3x.id = C3x;
            AQ2x.ST8L(e3x);
            if (W3x == "play") {
                v3x.bq3x("/api/dj/program/listen", {
                    query: {
                        id: C3x
                    }
                })
            }
            break;
        case 18:
            e3x.key = "track";
            e3x.id = C3x;
            nw8o.ST8L(e3x);
            break;
        case 19:
            e3x.key = "track_album-" + C3x;
            nw8o.nv8n(e3x);
            break;
        case 24:
            e3x.key = "track_day";
            nw8o.nv8n(e3x);
            break;
        case 2:
            e3x.key = "track_artist_top-" + C3x;
            nw8o.nv8n(e3x);
            break;
        case 70:
            e3x.key = "program_djradio-" + C3x + "-" + sp9g;
            e3x.data.radioId = C3x;
            e3x.data.asc = sp9g == 2;
            AQ2x.nv8n(e3x);
            break
        }
    }
    function bFk9b(j3x) {
        var m3x = [];
        k3x.be3x(j3x, function(q3x) {
            if (q3x.mainSong) {
                q3x.mainSong.program = q3x;
                m3x.push(q3x.mainSong);
                q3x.localupdatetime = +(new Date);
                nw8o.cjZ8R(q3x.mainSong);
                q3x.mainTrackId = q3x.mainSong.id;
                delete q3x.mainSong
            } else {
                var bFj9a = nw8o.eg5l(q3x.mainTrackId);
                bFj9a && m3x.push(bFj9a)
            }
        });
        return m3x
    }
    function bax2x(j3x, e3x) {
        var qd9U = e3x.action == "play" && e3x.type != 17 && e3x.type != 18
          , eZ5e = e3x.action == "play";
        if (!j3x.length)
            return;
        if (e3x.type == 19) {
            j3x = l3x.GE4I(j3x, true, {
                play: true
            }, {
                source: "album",
                sourceid: e3x.id
            })
        } else {
            j3x = l3x.GE4I(j3x, true, {
                play: true
            })
        }
        k3x.be3x(j3x, function(q3x) {
            q3x.source = l3x.bbl2x({
                fid: e3x.from,
                fdata: e3x.data,
                type: e3x.type,
                rid: e3x.id
            }, q3x.id)
        });
        top.player.addTo(j3x, qd9U, eZ5e);
        kH7A.Ng6a({
            rid: e3x.id,
            type: e3x.type,
            hash: l3x.Fv3x(),
            play: eZ5e,
            source: e3x.from,
            sourceid: e3x.data
        })
    }
    function bWt5y(d2x) {
        var eA5F = d2x.ext || {};
        j3x = nw8o.gP5U(d2x.key);
        bax2x(j3x, eA5F);
        if (eA5F.type == 13 && eA5F.action == "play" && j3x && j3x.length > 0) {
            bFl9c(eA5F.node);
            v3x.bq3x("/api/playlist/update/playcount", {
                query: {
                    id: eA5F.id
                }
            })
        }
    }
    function bWs5x(d2x) {
        var j3x = [nw8o.eg5l(d2x.id)]
          , bf3x = j3x[0]
          , pp8h = l3x.oi8a(bf3x)
          , se9V = bf3x.privilege || {};
        if (pp8h == 10) {
            l3x.to0x(se9V.fee || bf3x.fee, bf3x.id, "song", null, se9V)
        } else if (pp8h == 100) {
            l3x.hS6M(null, null, null, true, bf3x)
        } else if (pp8h == 11) {
            l3x.bKu1x(bf3x.id, 18)
        } else {
            bax2x(j3x, d2x.ext)
        }
    }
    function bWr5w(d2x) {
        var j3x = bFk9b(AQ2x.gP5U(d2x.key));
        bax2x(j3x, d2x.ext)
    }
    function bWq5v(d2x) {
        var j3x = bFk9b([AQ2x.eg5l(d2x.id)]);
        bax2x(j3x, d2x.ext)
    }
    function eh5m() {
        top.player.tipPlay("无法播放，音乐已下线")
    }
    function bFl9c(f3x) {
        var t3x = a2x.u3x(f3x, "resType")
          , C3x = a2x.u3x(f3x, "resId")
          , J3x = t3x + "-" + C3x;
        if (bFq9h[J3x])
            return;
        var bFh9Y = a2x.z3x("play-count")
          , biH4L = a2x.I3x(f3x.parentNode, "nb")
          , LL5Q = null;
        if (bFh9Y) {
            LL5Q = bFh9Y
        } else {
            LL5Q = !!biH4L && !!biH4L[0] ? biH4L[0] : null
        }
        if (LL5Q) {
            var ct4x = LL5Q.innerHTML;
            if (/^\d+$/.test(ct4x)) {
                LL5Q.innerText = +ct4x + 1
            }
            bFq9h[J3x] = true
        }
    }
    l3x.bVZ5e = function(f3x) {
        h3x.s3x(f3x || document.body, "click", ud0x.g3x(this))
    }
    ;
    l3x.bVX5c = function(W3x, t3x, C3x) {
        bFn9e({
            action: W3x,
            type: t3x,
            id: C3x
        })
    }
})();
(function() {
    var c2x = NEJ.P, X3x = NEJ.O, bn3x = NEJ.F, h3x = c2x("nej.v"), k3x = c2x("nej.u"), v3x = c2x("nej.j"), H3x = c2x("nej.ut"), p3x = c2x("nm.d"), b2x, K3x;
    p3x.eP5U({
        "share-all": {
            url: "/api/share/friends/resource",
            format: function(m3x, e3x) {
                this.bVW5b(m3x, e3x)
            },
            onerror: "onshareerror"
        },
        "share-sns": {
            url: "/api/share/resource/sns",
            format: function(m3x, e3x) {
                this.x3x("onshareall", e3x.result)
            },
            onerror: function(m3x, e3x) {
                this.x3x("onshareall", e3x.result)
            }
        },
        "share-private": {
            url: "/api/msg/private/send",
            onload: "onshareprivate",
            onerror: "onshareerror"
        },
        share_img_compound: {
            url: "/upload/event/img/compound",
            type: "POST",
            format: function(m3x, e3x) {
                e3x.options.picUrl = m3x.picUrl;
                this.bFg9X(e3x.options, e3x.result)
            },
            onerror: function(m3x, e3x) {
                this.x3x("onshareall", e3x.result)
            }
        },
        "vid-get": {
            url: "/api/video/coversvid/get",
            format: function(P3x, e3x) {
                this.on8f("vid_info-" + e3x.data.nosKey, P3x);
                return P3x
            }
        },
        "video-submit": {
            url: "/api/cloudvideo/video/event/submit",
            filter: function(e3x) {},
            format: function(m3x, e3x) {
                e3x.data = e3x.data2;
                this.ck4o("share-all", e3x)
            },
            onerror: "onshareerror"
        }
    });
    p3x.biQ4U = NEJ.C();
    b2x = p3x.biQ4U.O3x(p3x.hc6W);
    b2x.bVU5Z = function() {
        var tf0x = function(P3x, e3x) {
            e3x.times++;
            if (e3x.times > 10) {
                this.x3x("onvinfoerror", e3x.key, P3x)
            } else {
                setTimeout(eC5H.g3x(this, e3x), e3x.times * 1e3)
            }
        };
        var xN1x = function(P3x, e3x) {
            this.x3x("onvinfo", e3x.key, P3x)
        };
        var eC5H = function(e3x) {
            var V3x = e3x.url;
            v3x.bq3x(V3x + "?vinfo", {
                method: "GET",
                type: "json",
                mode: 1,
                onload: xN1x.dW5b(this, e3x),
                onerror: tf0x.dW5b(this, e3x)
            })
        };
        return function(e3x) {
            e3x.times = 0;
            eC5H.call(this, e3x)
        }
    }();
    b2x.cvQ1x = function() {
        var ME5J;
        var tf0x = function(P3x, e3x) {
            if (P3x.code > 0) {
                clearInterval(this.AR2x);
                this.x3x("onviderror", e3x.data.nosKey)
            }
        };
        var xN1x = function(J3x, P3x) {
            if (P3x.vid && P3x.covers) {
                clearInterval(this.AR2x);
                this.x3x("onvid", J3x, P3x)
            }
        };
        var eC5H = function(e3x) {
            if (+(new Date) - ME5J > 60 * 60 * 1e3) {
                clearInterval(this.AR2x);
                this.x3x("onviderror", e3x.data.nosKey);
                return
            }
            e3x.onload = xN1x.g3x(this, e3x.data.nosKey);
            e3x.onerror = tf0x.g3x(this);
            this.ck4o("vid-get", e3x)
        };
        return function(e3x) {
            if (!e3x || !e3x.data)
                return;
            ME5J = +(new Date);
            this.AR2x = clearInterval(this.AR2x);
            this.AR2x = setInterval(eC5H.g3x(this, e3x), 1e4);
            eC5H.apply(this, arguments)
        }
    }();
    b2x.bVO5T = function() {
        this.AR2x = clearInterval(this.AR2x)
    }
    ;
    b2x.bVW5b = function(m3x, mK8C) {
        if (m3x.event && mK8C.snsTypes) {
            if (mK8C.pics) {
                var bFd9U = [];
                for (var i = 0, len = mK8C.pics.length; i < len; i++) {
                    bFd9U[i] = mK8C.pics[i].originId
                }
                this.ck4o("share_img_compound", {
                    data: {
                        picIds: bFd9U.join(",")
                    },
                    options: mK8C,
                    result: m3x
                })
            } else {
                mK8C.picUrl = mK8C.picUrl;
                this.bFg9X(mK8C, m3x)
            }
        } else {
            this.x3x("onshareall", m3x)
        }
        var xh1x = p3x.hQ6K.B3x();
        xh1x.ge5j(mK8C.isPub ? "pubevent" : "shareevent", {
            id: m3x.id
        })
    }
    ;
    b2x.bFg9X = function(mK8C, m3x) {
        var cm4q = {};
        cm4q.eventid = m3x.event.id;
        cm4q.eventtype = m3x.event.type;
        mK8C.picUrl && (cm4q.picUrl = mK8C.picUrl);
        cm4q.snsTypes = mK8C.snsTypes;
        cm4q.msg = mK8C.data.msg || "";
        cm4q.type = mK8C.data.type;
        mK8C.data.id && (cm4q.id = mK8C.data.id);
        this.ck4o("share-sns", {
            data: cm4q,
            result: m3x
        })
    }
    ;
    b2x.bVI4M = function(e3x) {
        var i3x = {
            type: "",
            id: 0,
            threadId: "",
            msg: "",
            actId: 0,
            pics: "",
            uuid: "publish-" + +(new Date) + k3x.ne8W(5)
        };
        i3x = NEJ.EX(i3x, e3x);
        if (!(i3x.id > 0)) {
            delete i3x.id;
            i3x.type = "noresource"
        }
        if (!i3x.threadId) {
            delete i3x.threadId
        }
        if (!i3x.actId) {
            delete i3x.actId
        }
        if (!i3x.pics) {
            delete i3x.pics
        } else {
            i3x.pics = JSON.stringify(i3x.pics)
        }
        this.ck4o("share-all", {
            data: i3x,
            snsTypes: e3x.snsTypes,
            picUrl: e3x.picUrl,
            pics: e3x.pics,
            isPub: e3x.isPub
        })
    }
    ;
    b2x.bVH4L = function(e3x) {
        this.ck4o("share-private", e3x)
    }
    ;
    b2x.bVF4J = function(e3x) {
        this.ck4o("video-submit", e3x)
    }
})();
(function() {
    var c2x = NEJ.P, X3x = NEJ.O, bn3x = NEJ.F, h3x = c2x("nej.v"), k3x = c2x("nej.u"), H3x = c2x("nej.ut"), p3x = c2x("nm.d"), l3x = c2x("nm.x"), b2x, K3x;
    var bVE4I = {
        40: !0
    };
    p3x.eP5U({
        "event-list": {
            url: "/api/v1/event/get",
            filter: function(e3x) {
                e3x.data.getcounts = true;
                e3x.data.pagesize = e3x.data.limit;
                if (e3x.data.offset == 0) {
                    e3x.data.lasttime = -1
                }
                delete e3x.data.offset
            },
            format: function(P3x, e3x) {
                P3x.event = l3x.SV8N(P3x.event, function(q3x, r3x) {
                    return !bVE4I[q3x.type]
                });
                this.bVD4H(P3x.event);
                e3x.data.lasttime = P3x.lasttime;
                if (P3x.event.length) {
                    P3x.event.length = e3x.limit
                }
                return {
                    list: P3x.event,
                    total: P3x.size
                }
            }
        },
        "event_latest-list": {
            url: "/api/act/event/getnews",
            format: function(P3x, e3x) {
                return {
                    list: P3x.events,
                    total: P3x.count
                }
            }
        },
        "event-pull": {
            url: "/api/event/getnews",
            filter: function(e3x) {
                e3x.data.pagesize = 20
            },
            format: function(P3x, e3x) {
                return P3x.event
            }
        },
        "ievent-get": {
            type: "GET",
            url: "/api/event/get",
            onload: "oneventload",
            onerror: "oneventloaderror"
        },
        "ievent-new-get": {
            type: "GET",
            url: "/api/event/getnews",
            onload: "oneventnewload"
        },
        "ievent_user-list": {
            type: "GET",
            url: "/api/event/get/{userId}",
            filter: function(e3x) {
                e3x.data.time = -1;
                e3x.data.getcounts = true
            },
            format: function(P3x, e3x) {
                P3x.events.length = e3x.limit;
                return {
                    list: P3x.events,
                    total: P3x.size
                }
            }
        },
        "ievent-res-get": {
            url: "/api/res/status",
            format: function(m3x, e3x) {
                m3x.conf = e3x.conf;
                return m3x
            }
        },
        "ievent-like": {
            url: "/api/resource/like",
            onload: "oneventlike",
            filter: function(e3x, bc3x) {
                if (e3x.like) {
                    if (e3x.comment) {
                        bc3x.url = "/api/v1/comment/like"
                    } else {
                        bc3x.url = "/api/resource/like"
                    }
                    bc3x.onload = "oneventlike";
                    bc3x.onerror = "oneventlikeerr"
                } else {
                    if (e3x.comment) {
                        bc3x.url = "/api/v1/comment/unlike"
                    } else {
                        bc3x.url = "/api/resource/unlike"
                    }
                    bc3x.onload = "oneventunlike";
                    bc3x.onerror = "oneventunlikeerr"
                }
            },
            format: function(m3x, e3x) {
                m3x.eid = e3x.eid;
                m3x.origin = e3x.origin;
                m3x.ext = e3x.ext;
                return m3x
            }
        },
        "ievent_user-del": {
            url: "/api/event/delete",
            format: function(m3x, e3x) {
                m3x.id = e3x.data.id;
                return m3x
            }
        },
        "event-del": {
            url: "/api/event/delete",
            filter: function(e3x, bc3x) {
                if (e3x.data.type == "nointer") {
                    bc3x.url = "/api/event/rcmd/reject"
                } else if (e3x.data.transcoding) {
                    bc3x.url = "/api/event/video/transcoding/delete"
                } else {
                    bc3x.url = "/api/event/delete"
                }
            },
            format: function(m3x, e3x) {
                m3x.id = e3x.data.id;
                return m3x
            }
        },
        "event_activity-del": {
            url: "/api/event/delete",
            format: function(m3x, e3x) {
                m3x.id = e3x.data.id;
                return m3x
            }
        },
        "event_activity-list": {
            url: "/api/act/event",
            filter: function(e3x) {
                e3x.data.lasttime = e3x.data.lasttime || -1;
                e3x.data.pagesize = e3x.data.limit;
                e3x.data.getcounts = true;
                delete e3x.data.offset
            },
            format: function(P3x, e3x) {
                e3x.data.lasttime = P3x.lasttime;
                var j3x = P3x.events;
                if (P3x.more)
                    j3x = this.bVA4E(j3x, e3x.data.pagesize);
                return {
                    list: j3x,
                    total: P3x.size
                }
            },
            onerror: "onlisterror"
        }
    });
    p3x.AD2x = NEJ.C();
    b2x = p3x.AD2x.O3x(p3x.hc6W);
    b2x.cl4p = function() {
        this.cs4w()
    }
    ;
    b2x.bjx4B = function(t3x, cI4M) {
        return t3x + "-" + cI4M
    }
    ;
    b2x.cvU1x = function(e3x) {
        this.ck4o("ievent-get", e3x)
    }
    ;
    b2x.cvW1x = function(e3x) {
        this.ck4o("ievent-new-get", e3x)
    }
    ;
    b2x.cvY1x = function(e3x) {
        this.ck4o("ievent-user-get", e3x)
    }
    ;
    b2x.cvZ1x = function(t3x, cI4M) {
        return this.qt9k(this.bjx4B(t3x, cI4M))
    }
    ;
    b2x.cwa1x = function(Jd4h, e3x) {
        if (!Jd4h || !Jd4h.length)
            return;
        e3x = e3x || {};
        var bv3x = {
            song: 2,
            album: 4,
            playlist: 1,
            mv: 3,
            program: 5
        };
        for (var i = 0, DW3x = [], bET9K = [], i3x; i < Jd4h.length; ++i) {
            i3x = Jd4h[i];
            i3x = this.qt9k(this.bjx4B(i3x.type, i3x.id));
            if (!i3x) {
                DW3x.push(Jd4h[i].id);
                bET9K.push(bv3x[Jd4h[i].type] || 0)
            }
        }
        if (!DW3x.length) {
            this.x3x("oneventresload", e3x.conf);
            return
        }
        e3x.data = {
            ids: JSON.stringify(DW3x),
            types: JSON.stringify(bET9K)
        };
        e3x.onload = this.bVm4q.g3x(this);
        this.ck4o("ievent-res-get", e3x)
    }
    ;
    b2x.bVm4q = function(m3x) {
        if (m3x.code != 200) {
            this.x3x("oneventreserror", m3x.code);
            return
        }
        var bv3x = {
            1: "playlist",
            2: "song",
            3: "mv",
            4: "album",
            5: "program"
        };
        for (var i = 0, j3x = m3x.results; i < j3x.length; ++i) {
            this.on8f(this.bjx4B(bv3x[j3x[i].type], j3x[i].id), j3x[i])
        }
        this.x3x("oneventresload", m3x.conf)
    }
    ;
    b2x.bEQ9H = function(i3x) {
        var J3x = "event-list";
        this.bbD2x(J3x, i3x);
        this.x3x("onitemadd", {
            key: J3x,
            action: "add",
            data: i3x,
            flag: -1
        })
    }
    ;
    b2x.uW0x = function(e3x) {
        this.ck4o("ievent-like", e3x)
    }
    ;
    b2x.lo7h = function(e3x) {
        this.ck4o("ievent-delete", e3x)
    }
    ;
    b2x.bVA4E = function(j3x, fX5c) {
        for (var i = j3x.length; i < fX5c; i++)
            j3x.push(null);
        return j3x
    }
    ;
    b2x.bVD4H = function(j3x) {
        var m3x = [];
        if (!j3x || !j3x.length)
            return;
        k3x.be3x(j3x, function(d2x) {
            d2x.biData = this.bEO9F(d2x)
        }, this)
    }
    ;
    b2x.bEO9F = function() {
        var XD0x = {
            32: "comment",
            33: "activity",
            34: "recomment_artist"
        }
          , bVc4g = [13, 17, 18, 19, 20, 21, 22, 28, 31];
        return function(d2x) {
            var P3x = {
                id: d2x.id,
                sourceid: d2x.user.userId,
                alg: d2x.rcmdInfo ? d2x.rcmdInfo.alg : null,
                contentType: XD0x[d2x.type] || (k3x.cW4a(bVc4g, d2x.type) != -1 ? "user_event" : "other")
            };
            return P3x
        }
    }();
    b2x.Bb2x = function(bVb4f, d2x) {
        var P3x = this.bEO9F(d2x);
        P3x.actionType = bVb4f;
        if (window.log)
            log("eventclick", P3x)
    }
    ;
    b2x.cwb1x = function(e3x) {
        this.ck4o("event_latest-list", e3x)
    }
})();
(function(factory) {
    window.SparkMD5 = factory()
})(function(undefined) {
    "use strict";
    var add32 = function(a, b) {
        return a + b & 4294967295
    }
      , hex_chr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
    function cmn(q, a, b, x, s, t) {
        a = add32(add32(a, q), add32(x, t));
        return add32(a << s | a >>> 32 - s, b)
    }
    function md5cycle(x, k) {
        var a = x[0]
          , b = x[1]
          , c = x[2]
          , d = x[3];
        a += (b & c | ~b & d) + k[0] - 680876936 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[1] - 389564586 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[2] + 606105819 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[3] - 1044525330 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[4] - 176418897 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[5] + 1200080426 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[6] - 1473231341 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[7] - 45705983 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[8] + 1770035416 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[9] - 1958414417 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[10] - 42063 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[11] - 1990404162 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[12] + 1804603682 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[13] - 40341101 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[14] - 1502002290 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[15] + 1236535329 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & d | c & ~d) + k[1] - 165796510 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[6] - 1069501632 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[11] + 643717713 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[0] - 373897302 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[5] - 701558691 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[10] + 38016083 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[15] - 660478335 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[4] - 405537848 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[9] + 568446438 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[14] - 1019803690 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[3] - 187363961 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[8] + 1163531501 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[13] - 1444681467 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[2] - 51403784 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[7] + 1735328473 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[12] - 1926607734 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b ^ c ^ d) + k[5] - 378558 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[8] - 2022574463 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[11] + 1839030562 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[14] - 35309556 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[1] - 1530992060 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[4] + 1272893353 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[7] - 155497632 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[10] - 1094730640 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[13] + 681279174 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[0] - 358537222 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[3] - 722521979 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[6] + 76029189 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[9] - 640364487 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[12] - 421815835 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[15] + 530742520 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[2] - 995338651 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (c ^ (b | ~d)) + k[0] - 198630844 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[7] + 1126891415 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[14] - 1416354905 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[5] - 57434055 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[12] + 1700485571 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[3] - 1894986606 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[10] - 1051523 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[1] - 2054922799 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[8] + 1873313359 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[15] - 30611744 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[6] - 1560198380 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[13] + 1309151649 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[4] - 145523070 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[11] - 1120210379 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[2] + 718787259 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[9] - 343485551 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        x[0] = a + x[0] | 0;
        x[1] = b + x[1] | 0;
        x[2] = c + x[2] | 0;
        x[3] = d + x[3] | 0
    }
    function md5blk(s) {
        var md5blks = [], i;
        for (i = 0; i < 64; i += 4) {
            md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24)
        }
        return md5blks
    }
    function md5blk_array(a) {
        var md5blks = [], i;
        for (i = 0; i < 64; i += 4) {
            md5blks[i >> 2] = a[i] + (a[i + 1] << 8) + (a[i + 2] << 16) + (a[i + 3] << 24)
        }
        return md5blks
    }
    function md51(s) {
        var n = s.length, state = [1732584193, -271733879, -1732584194, 271733878], i, length, tail, tmp, lo, hi;
        for (i = 64; i <= n; i += 64) {
            md5cycle(state, md5blk(s.substring(i - 64, i)))
        }
        s = s.substring(i - 64);
        length = s.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= s.charCodeAt(i) << (i % 4 << 3)
        }
        tail[i >> 2] |= 128 << (i % 4 << 3);
        if (i > 55) {
            md5cycle(state, tail);
            for (i = 0; i < 16; i += 1) {
                tail[i] = 0
            }
        }
        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(state, tail);
        return state
    }
    function md51_array(a) {
        var n = a.length, state = [1732584193, -271733879, -1732584194, 271733878], i, length, tail, tmp, lo, hi;
        for (i = 64; i <= n; i += 64) {
            md5cycle(state, md5blk_array(a.subarray(i - 64, i)))
        }
        a = i - 64 < n ? a.subarray(i - 64) : new Uint8Array(0);
        length = a.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= a[i] << (i % 4 << 3)
        }
        tail[i >> 2] |= 128 << (i % 4 << 3);
        if (i > 55) {
            md5cycle(state, tail);
            for (i = 0; i < 16; i += 1) {
                tail[i] = 0
            }
        }
        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(state, tail);
        return state
    }
    function rhex(n) {
        var s = "", j;
        for (j = 0; j < 4; j += 1) {
            s += hex_chr[n >> j * 8 + 4 & 15] + hex_chr[n >> j * 8 & 15]
        }
        return s
    }
    function hex(x) {
        var i;
        for (i = 0; i < x.length; i += 1) {
            x[i] = rhex(x[i])
        }
        return x.join("")
    }
    if (hex(md51("hello")) !== "5d41402abc4b2a76b9719d911017c592") {
        add32 = function(x, y) {
            var lsw = (x & 65535) + (y & 65535)
              , msw = (x >> 16) + (y >> 16) + (lsw >> 16);
            return msw << 16 | lsw & 65535
        }
    }
    if (typeof ArrayBuffer !== "undefined" && !ArrayBuffer.prototype.slice) {
        (function() {
            function clamp(val, length) {
                val = val | 0 || 0;
                if (val < 0) {
                    return Math.max(val + length, 0)
                }
                return Math.min(val, length)
            }
            ArrayBuffer.prototype.slice = function(from, to) {
                var length = this.byteLength, begin = clamp(from, length), end = length, num, target, targetArray, sourceArray;
                if (to !== undefined) {
                    end = clamp(to, length)
                }
                if (begin > end) {
                    return new ArrayBuffer(0)
                }
                num = end - begin;
                target = new ArrayBuffer(num);
                targetArray = new Uint8Array(target);
                sourceArray = new Uint8Array(this,begin,num);
                targetArray.set(sourceArray);
                return target
            }
        })()
    }
    function toUtf8(str) {
        if (/[\u0080-\uFFFF]/.test(str)) {
            str = unescape(encodeURIComponent(str))
        }
        return str
    }
    function utf8Str2ArrayBuffer(str, returnUInt8Array) {
        var length = str.length, buff = new ArrayBuffer(length), arr = new Uint8Array(buff), i;
        for (i = 0; i < length; i += 1) {
            arr[i] = str.charCodeAt(i)
        }
        return returnUInt8Array ? arr : buff
    }
    function arrayBuffer2Utf8Str(buff) {
        return String.fromCharCode.apply(null, new Uint8Array(buff))
    }
    function concatenateArrayBuffers(first, second, returnUInt8Array) {
        var result = new Uint8Array(first.byteLength + second.byteLength);
        result.set(new Uint8Array(first));
        result.set(new Uint8Array(second), first.byteLength);
        return returnUInt8Array ? result : result.buffer
    }
    function hexToBinaryString(hex) {
        var bytes = [], length = hex.length, x;
        for (x = 0; x < length - 1; x += 2) {
            bytes.push(parseInt(hex.substr(x, 2), 16))
        }
        return String.fromCharCode.apply(String, bytes)
    }
    function SparkMD5() {
        this.reset()
    }
    SparkMD5.prototype.append = function(str) {
        this.appendBinary(toUtf8(str));
        return this
    }
    ;
    SparkMD5.prototype.appendBinary = function(contents) {
        this.qe9V += contents;
        this.br3x += contents.length;
        var length = this.qe9V.length, i;
        for (i = 64; i <= length; i += 64) {
            md5cycle(this.dF4J, md5blk(this.qe9V.substring(i - 64, i)))
        }
        this.qe9V = this.qe9V.substring(i - 64);
        return this
    }
    ;
    SparkMD5.prototype.end = function(raw) {
        var buff = this.qe9V, length = buff.length, i, tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ret;
        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= buff.charCodeAt(i) << (i % 4 << 3)
        }
        this.nA8s(tail, length);
        ret = hex(this.dF4J);
        if (raw) {
            ret = hexToBinaryString(ret)
        }
        this.reset();
        return ret
    }
    ;
    SparkMD5.prototype.reset = function() {
        this.qe9V = "";
        this.br3x = 0;
        this.dF4J = [1732584193, -271733879, -1732584194, 271733878];
        return this
    }
    ;
    SparkMD5.prototype.getState = function() {
        return {
            buff: this.qe9V,
            length: this.br3x,
            hash: this.dF4J
        }
    }
    ;
    SparkMD5.prototype.setState = function(state) {
        this.qe9V = state.buff;
        this.br3x = state.length;
        this.dF4J = state.hash;
        return this
    }
    ;
    SparkMD5.prototype.destroy = function() {
        delete this.dF4J;
        delete this.qe9V;
        delete this.br3x
    }
    ;
    SparkMD5.prototype.nA8s = function(tail, length) {
        var i = length, tmp, lo, hi;
        tail[i >> 2] |= 128 << (i % 4 << 3);
        if (i > 55) {
            md5cycle(this.dF4J, tail);
            for (i = 0; i < 16; i += 1) {
                tail[i] = 0
            }
        }
        tmp = this.br3x * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(this.dF4J, tail)
    }
    ;
    SparkMD5.hash = function(str, raw) {
        return SparkMD5.hashBinary(toUtf8(str), raw)
    }
    ;
    SparkMD5.hashBinary = function(content, raw) {
        var hash = md51(content)
          , ret = hex(hash);
        return raw ? hexToBinaryString(ret) : ret
    }
    ;
    SparkMD5.ArrayBuffer = function() {
        this.reset()
    }
    ;
    SparkMD5.ArrayBuffer.prototype.append = function(arr) {
        var buff = concatenateArrayBuffers(this.qe9V.buffer, arr, true), length = buff.length, i;
        this.br3x += arr.byteLength;
        for (i = 64; i <= length; i += 64) {
            md5cycle(this.dF4J, md5blk_array(buff.subarray(i - 64, i)))
        }
        this.qe9V = i - 64 < length ? new Uint8Array(buff.buffer.slice(i - 64)) : new Uint8Array(0);
        return this
    }
    ;
    SparkMD5.ArrayBuffer.prototype.end = function(raw) {
        var buff = this.qe9V, length = buff.length, tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], i, ret;
        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= buff[i] << (i % 4 << 3)
        }
        this.nA8s(tail, length);
        ret = hex(this.dF4J);
        if (raw) {
            ret = hexToBinaryString(ret)
        }
        this.reset();
        return ret
    }
    ;
    SparkMD5.ArrayBuffer.prototype.reset = function() {
        this.qe9V = new Uint8Array(0);
        this.br3x = 0;
        this.dF4J = [1732584193, -271733879, -1732584194, 271733878];
        return this
    }
    ;
    SparkMD5.ArrayBuffer.prototype.getState = function() {
        var state = SparkMD5.prototype.getState.call(this);
        state.buff = arrayBuffer2Utf8Str(state.buff);
        return state
    }
    ;
    SparkMD5.ArrayBuffer.prototype.setState = function(state) {
        state.buff = utf8Str2ArrayBuffer(state.buff, true);
        return SparkMD5.prototype.setState.call(this, state)
    }
    ;
    SparkMD5.ArrayBuffer.prototype.destroy = SparkMD5.prototype.destroy;
    SparkMD5.ArrayBuffer.prototype.nA8s = SparkMD5.prototype.nA8s;
    SparkMD5.ArrayBuffer.hash = function(arr, raw) {
        var hash = md51_array(new Uint8Array(arr))
          , ret = hex(hash);
        return raw ? hexToBinaryString(ret) : ret
    }
    ;
    return SparkMD5
});
(function() {
    var c2x = NEJ.P
      , X3x = NEJ.O
      , bn3x = NEJ.F
      , a2x = c2x("nej.e")
      , h3x = c2x("nej.v")
      , v3x = c2x("nej.j")
      , dO4S = c2x("nej.g")
      , k3x = c2x("nej.u")
      , fh5m = c2x("nej.n")
      , H3x = c2x("nej.ut")
      , l3x = c2x("nm.x")
      , p3x = c2x("nm.d")
      , iS6M = c2x("nm.x.nos")
      , D3x = c2x("nm.w");
    var bUY4c = 1024 * 256
      , bUV4Z = 1024 * 1024 * 2
      , pF8x = {
        TOKEN_ERROR: -100,
        DNS_ERROR: -101
    }
      , bEM9D = typeof File !== "undefined" ? File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice : bn3x
      , pC8u = {
        MD5_DONE: .2,
        TOKEN_GET: .22,
        DNS_GET: .24,
        UPLOADED: 1
    }
      , oD8v = {
        AUDIO: "audio",
        IMAGE: "image",
        TXT: "txt",
        RAR: "rar",
        OTHER: "other",
        VIDEO: "video"
    };
    var mH8z = {};
    var xh1x = p3x.hQ6K.B3x();
    iS6M.cwe1x = function() {
        return oD8v
    }
    ;
    var bUR4V = function() {
        return k3x.ne8W(6) + +(new Date)
    };
    var IZ4d = function(jk6e, e3x) {
        if (!mH8z[e3x.taskId]) {
            return
        }
        (e3x.onuploading || bn3x).call(this, jk6e)
    };
    var bkj4n = function(Q3x) {
        var bUI4M = Q3x.md5
          , dT5Y = Q3x.file
          , bUH4L = bUI4M + dT5Y.size;
        return "nos_file_hash_" + bUH4L
    };
    var bUF4J = function(Q3x) {
        var J3x = bkj4n(Q3x)
          , i3x = v3x.bLj1x(J3x, "{}");
        try {
            i3x = JSON.parse(i3x)
        } catch (e) {
            i3x = {}
        }
        return i3x
    };
    var bUx4B = function(Q3x, e3x) {
        if (!Q3x.md5) {
            return
        }
        var J3x = bkj4n(Q3x)
          , i3x = v3x.bLj1x(J3x, "{}");
        try {
            i3x = JSON.parse(i3x)
        } catch (e) {
            i3x = {}
        }
        NEJ.X(i3x, e3x);
        v3x.vz0x(J3x, JSON.stringify(i3x))
    };
    var bUu4y = function(Q3x) {
        var J3x = bkj4n(Q3x);
        v3x.Pg7Z(J3x)
    };
    var bUp4t = function(Q3x, gg5l) {
        var V3x = Q3x.urls[Math.min(Q3x.urlIndex, Q3x.urls.length - 1)]
          , dT5Y = Q3x.file
          , kW7P = Q3x.bucket
          , mQ8I = Q3x.objectKey
          , er5w = Q3x.token
          , bL3x = Q3x.context
          , nK8C = {}
          , OW7P = bEM9D.call(dT5Y, Q3x.beg, Q3x.end)
          , bw3x = {
            offset: Q3x.beg,
            complete: Q3x.lastChunk || false,
            version: "1.0"
        };
        if (bL3x) {
            bw3x.context = bL3x
        }
        nK8C["x-nos-token"] = er5w;
        nK8C[dO4S.xf1x] = dT5Y.type;
        Q3x.reqId = v3x.bq3x(V3x + "/" + kW7P + "/" + mQ8I, {
            type: "json",
            method: "POST",
            headers: nK8C,
            query: bw3x,
            data: OW7P,
            onload: gg5l.onload,
            onerror: gg5l.onerror
        })
    };
    var bUm4q = function(m3x, Q3x, e3x) {
        m3x = {
            code: 200,
            fileName: e3x.file.name,
            size: e3x.file.size,
            type: e3x.file.type,
            bucket: Q3x.bucket,
            docId: Q3x.docId,
            objectKey: Q3x.objectKey,
            url: "//nos.netease.com/" + Q3x.bucket + "/" + Q3x.objectKey
        };
        bUu4y(Q3x);
        if (!mH8z[e3x.taskId]) {
            return
        }
        delete mH8z[e3x.taskId];
        xh1x.ge5j("sysaction", {
            type: "nosuploadsuccess",
            location: location.href,
            result: JSON.stringify(m3x)
        });
        (e3x.onsuccess || bn3x).call(this, m3x)
    };
    var bUk4o = function(m3x, e3x) {
        (e3x.onerror || bn3x).call(this, m3x)
    };
    var bUd4h = function(m3x, Q3x, e3x) {
        Q3x.context = m3x.context;
        Q3x.beg = m3x.offset;
        var jk6e = Q3x.beg / Q3x.file.size;
        bUx4B(Q3x, {
            bucket: Q3x.bucket,
            objectKey: Q3x.objectKey,
            token: Q3x.token,
            context: Q3x.context,
            beg: Q3x.beg,
            updateTime: +(new Date)
        });
        jk6e = pC8u.DNS_GET + (pC8u.UPLOADED - pC8u.DNS_GET) * jk6e;
        IZ4d(jk6e, e3x);
        if (Q3x.lastChunk) {
            bUm4q(m3x, Q3x, e3x)
        } else {
            ZZ2x(Q3x, e3x)
        }
    };
    var bUc4g = function(m3x, Q3x, e3x) {
        xh1x.ge5j("sysaction", {
            type: "noschunkuploaderror",
            location: location.href,
            code: m3x.data,
            body: m3x.extData,
            ext: JSON.stringify(Q3x),
            timging: +(new Date) - Q3x.chuckUploadStartTime
        });
        if (Q3x.urlIndex < Math.max(Q3x.urls.length - 1, 5)) {
            Q3x.urlIndex++;
            ZZ2x(Q3x, e3x)
        } else {
            bUk4o(m3x, e3x)
        }
    };
    var ZZ2x = function(Q3x, e3x) {
        if (!Q3x || Q3x.step == -1) {
            return
        }
        Q3x.end = Q3x.beg + bUY4c;
        if (Q3x.end >= Q3x.file.size) {
            Q3x.end = Q3x.file.size;
            Q3x.lastChunk = true
        }
        Q3x.chuckUploadStartTime = +(new Date);
        bUp4t(Q3x, {
            onload: bUd4h.dW5b(this, Q3x, e3x),
            onerror: bUc4g.dW5b(this, Q3x, e3x)
        })
    };
    var bUb4f = function(m3x, Q3x, e3x) {
        Q3x.beg = m3x.offset;
        var jk6e = Q3x.beg / Q3x.file.size;
        jk6e = pC8u.DNS_GET + (pC8u.UPLOADED - pC8u.DNS_GET) * jk6e;
        IZ4d(jk6e, e3x);
        ZZ2x(Q3x, e3x)
    };
    var bTZ4d = function(m3x, Q3x, e3x) {
        Q3x.beg = 0;
        delete Q3x.context;
        bkU4Y(Q3x, e3x)
    };
    var bEp9g = function(JJ5O, Q3x, e3x) {
        Q3x.lastChunk = false;
        Q3x.urls = JJ5O;
        Q3x.urlIndex = 0;
        IZ4d(pC8u.DNS_GET, e3x);
        if (Q3x.fromExist) {
            delete Q3x.fromExist;
            var V3x = Q3x.urls[Math.min(Q3x.urlIndex, Q3x.urls.length - 1)]
              , kW7P = Q3x.bucket
              , mQ8I = Q3x.objectKey
              , er5w = Q3x.token
              , bL3x = Q3x.context
              , nK8C = {}
              , bw3x = {
                context: bL3x,
                version: "1.0"
            };
            nK8C["x-nos-token"] = er5w;
            Q3x.reqId = v3x.bq3x(V3x + "/" + kW7P + "/" + mQ8I + "?uploadContext", {
                type: "json",
                method: "GET",
                headers: nK8C,
                query: bw3x,
                onload: bUb4f.dW5b(this, Q3x, e3x),
                onerror: bTZ4d.dW5b(this, Q3x, e3x)
            })
        } else {
            Q3x.beg = 0;
            ZZ2x(Q3x, e3x)
        }
    };
    var bTU4Y = function(m3x, Q3x, e3x) {
        m3x.code = pF8x.DNS_ERROR;
        (e3x.onerror || bn3x).call(this, m3x)
    };
    var bEo9f = function(i3x, e3x) {
        var m3x = i3x.result || {}
          , kW7P = m3x.bucket
          , mQ8I = m3x.objectKey
          , er5w = m3x.token
          , Q3x = mH8z[e3x.taskId];
        if (!kW7P || !mQ8I || !er5w || !Q3x) {
            m3x.code = pF8x.TOKEN_ERROR;
            (e3x.onerror || bn3x).call(this, m3x);
            return
        }
        Q3x.bucket = kW7P;
        Q3x.objectKey = mQ8I;
        Q3x.docId = m3x.docId;
        Q3x.token = er5w;
        IZ4d(pC8u.TOKEN_GET, e3x);
        if (location.protocol == "https:") {
            bEp9g(["//nosup-hz1.127.net"], Q3x, e3x)
        } else {
            Q3x.reqId = iS6M.bTR4V({
                bucket: kW7P,
                onload: bEp9g.dW5b(this, Q3x, e3x),
                onerror: bTU4Y.dW5b(this, Q3x, e3x)
            })
        }
        Q3x.step = 1
    };
    var bTQ4U = function(m3x, e3x) {
        m3x.code = pF8x.TOKEN_ERROR;
        (e3x.onerror || bn3x).call(this, m3x)
    };
    var bkU4Y = function(Q3x, e3x) {
        var dT5Y = e3x.file
          , eR5W = dT5Y.name || ""
          , eA5F = eR5W.split(".").pop();
        iS6M.ZS1x(NEJ.X({
            filename: eR5W,
            ext: eA5F,
            onload: bEo9f.dW5b(this, e3x),
            onerror: bTQ4U.dW5b(this, e3x)
        }, e3x, function(q3x) {
            return k3x.ga5f(q3x) || k3x.kR7K(q3x)
        }))
    };
    var bTJ4N = function(Q3x, e3x) {
        if (!Q3x || Q3x.step == -1) {
            return
        }
        Q3x.md5 = Q3x.spark.end();
        var IK4O = bUF4J(Q3x) || {}
          , kW7P = IK4O.bucket
          , mQ8I = IK4O.objectKey
          , er5w = IK4O.token;
        if (!kW7P || !mQ8I || !er5w) {
            bkU4Y(Q3x, e3x)
        } else {
            Q3x.context = IK4O.context;
            Q3x.beg = IK4O.beg;
            Q3x.fromExist = true;
            bEo9f({
                result: IK4O
            }, e3x)
        }
    };
    var bTI4M = function(Bw2x, Q3x, e3x) {
        if (!Q3x || Q3x.step == -1) {
            return
        }
        Q3x.beg = Q3x.end;
        var jk6e = Q3x.beg / Q3x.file.size;
        jk6e = 0 + pC8u.MD5_DONE * jk6e;
        IZ4d(jk6e, e3x);
        Q3x.spark.append(Bw2x.result);
        if (Q3x.lastChunk) {
            bTJ4N(Q3x, e3x)
        } else {
            bEl9c(Q3x, e3x)
        }
    };
    var bTD4H = function(m3x, Q3x, e3x) {
        Q3x.md5 = "";
        bkU4Y(Q3x, e3x)
    };
    var bEl9c = function(Q3x, e3x) {
        if (!Q3x || Q3x.step == -1) {
            return
        }
        Q3x.end = Q3x.beg + bUV4Z;
        if (Q3x.end >= Q3x.file.size) {
            Q3x.end = Q3x.file.size;
            Q3x.lastChunk = true
        }
        var Bw2x = new FileReader;
        Bw2x.onload = bTI4M.g3x(this, Bw2x, Q3x, e3x);
        Bw2x.onerror = bTD4H.g3x(this, Bw2x, Q3x, e3x);
        Bw2x.readAsArrayBuffer(bEM9D.call(Q3x.file, Q3x.beg, Q3x.end))
    };
    iS6M.gu5z = function(e3x) {
        var dT5Y = e3x.file
          , eR5W = dT5Y.name || ""
          , eA5F = eR5W.split(".").pop()
          , By2x = bUR4V();
        e3x.taskId = By2x;
        mH8z[By2x] = {
            step: 0
        };
        IZ4d(0, e3x);
        var Q3x = mH8z[By2x];
        Q3x.id = By2x;
        Q3x.file = dT5Y;
        Q3x.beg = 0;
        Q3x.lastChunk = false;
        Q3x.spark = new SparkMD5.ArrayBuffer;
        var bTC4G = e3x.onerror || bn3x;
        e3x.onerror = function() {
            if (!mH8z[By2x]) {
                return
            }
            delete mH8z[By2x];
            bTC4G.apply(this, arguments)
        }
        ;
        xh1x.ge5j("sysaction", {
            type: "nosuploadstart",
            location: location.href
        });
        bEl9c(Q3x, e3x);
        return By2x
    }
    ;
    iS6M.jj6d = function(C3x) {
        var Q3x = mH8z[C3x];
        if (Q3x) {
            if (Q3x.step == 0) {
                delete mH8z[C3x]
            } else {
                Q3x.step = -1;
                if (Q3x.reqId) {
                    v3x.jj6d(Q3x.reqId)
                }
                delete mH8z[C3x]
            }
        }
    }
    ;
    iS6M.ZS1x = function() {
        var vM0x = function(m3x, e3x) {
            (e3x.onload || bn3x).call(this, m3x)
        };
        var yX1x = function(m3x, e3x) {
            (e3x.onerror || bn3x).call(this, m3x)
        };
        var bEh9Y = JSON.stringify({
            code: 200,
            size: "$(ObjectSize)"
        });
        return function(e3x) {
            var ZN1x = e3x.returnBody || bEh9Y;
            if (k3x.kR7K(ZN1x)) {
                try {
                    JSON.stringify(ZN1x)
                } catch (e) {
                    ZN1x = bEh9Y
                }
            }
            return v3x.bq3x("/api/nos/token/alloc", {
                method: "POST",
                type: "json",
                query: {
                    filename: e3x.filename || "",
                    ext: e3x.ext || "",
                    type: e3x.type || oD8v.OTHER,
                    bucket: e3x.bucket || "",
                    local: e3x.local || false,
                    nos_product: e3x.nosProduct || 0,
                    return_body: ZN1x
                },
                onload: vM0x.dW5b(this, e3x),
                onerror: yX1x.dW5b(this, e3x)
            })
        }
    }();
    iS6M.bTR4V = function() {
        var bTv4z = "//wanproxy.127.net/lbs";
        var vM0x = function(m3x, e3x) {
            if (m3x.lbs) {}
            var JJ5O = m3x.upload;
            if (!JJ5O || !JJ5O.length) {
                yX1x(m3x, e3x)
            }
            (e3x.onload || bn3x).call(this, JJ5O)
        };
        var yX1x = function(m3x, e3x) {
            (e3x.onerror || bn3x).call(this, m3x)
        };
        return function(e3x) {
            var kW7P = e3x.bucket;
            return v3x.bq3x(bTv4z, {
                method: "GET",
                type: "json",
                query: {
                    version: "1.0",
                    bucketname: kW7P
                },
                onload: vM0x.dW5b(this, e3x),
                onerror: yX1x.dW5b(this, e3x)
            })
        }
    }();
    iS6M.ZM1x = function() {
        return typeof File !== "undefined" && typeof Blob !== "undefined" && typeof FileList !== "undefined" && (!!Blob.prototype.webkitSlice || !!Blob.prototype.mozSlice || !!Blob.prototype.slice || false)
    }
})();
(function() {
    var c2x = NEJ.P, a2x = c2x("nej.e"), h3x = c2x("nej.v"), k3x = c2x("nej.u"), v3x = c2x("nej.j"), ch4l = c2x("nej.ut"), bI3x = c2x("nej.ui"), p3x = c2x("nm.d"), l3x = c2x("nm.x"), iS6M = c2x("nm.x.nos"), F3x = c2x("nm.m"), n3x = c2x("nm.l"), D3x = c2x("nm.w"), b2x, K3x;
    var gh5m = a2x.ib6V('<form action="" method="post" enctype="multipart/form-data"><input name="Object" type="hidden" value=""><input name="x-nos-token" type="hidden" value=""><input name="x-nos-entity-type" type="hidden" value="json" /><input name="Content-Type" type="hidden" value="" /><input class="j-file" type="file" name="file" /></form>');
    D3x.brN6H = NEJ.C();
    b2x = D3x.brN6H.O3x(bI3x.eo5t);
    b2x.bZ4d = function() {
        this.ca4e = gh5m
    }
    ;
    b2x.bQ3x = function() {
        this.cb4f();
        this.by3x = this.o3x;
        this.gU5Z = a2x.I3x(this.o3x, "j-file")[0];
        h3x.s3x(this.gU5Z, "change", this.qK9B.g3x(this))
    }
    ;
    b2x.bk3x = function(e3x) {
        e3x = e3x || {};
        this.bl3x(e3x);
        this.gU5Z.accept = e3x.accept || "*";
        this.vi0x = e3x
    }
    ;
    b2x.ZJ1x = function() {
        return a2x.kv7o(this.gU5Z)
    }
    ;
    b2x.qK9B = function(d2x) {
        if (this.gU5Z.value == "")
            return;
        var jR7K = this.gU5Z.value.split("\\")
          , eR5W = jR7K.length > 0 ? jR7K[jR7K.length - 1] : jR7K[0]
          , og8Y = (this.gU5Z.files || [{}])[0];
        var fT5Y = {
            files: this.gU5Z.files,
            filename: eR5W,
            size: og8Y.size,
            cancelUpload: false
        };
        this.x3x("onchange", fT5Y);
        if (fT5Y.cancelUpload) {
            this.gU5Z.value = "";
            return
        }
        if (fT5Y.stopped) {
            return
        }
        this.Ne6Y()
    }
    ;
    b2x.Ne6Y = function() {
        if (this.gU5Z.value == "")
            return;
        var jR7K = this.gU5Z.value.split("\\")
          , eR5W = jR7K.length > 0 ? jR7K[jR7K.length - 1] : jR7K[0]
          , eA5F = (eR5W.split(".") || []).pop()
          , og8Y = (this.gU5Z.files || [{}])[0]
          , BE2x = (og8Y.type || "").split("/").shift();
        if (og8Y.size > 100 * 1024 * 1024) {
            return this.my7r("onerror", {
                code: -200
            })
        }
        this.x3x("onuploading", 0);
        this.bEb9S = iS6M.ZS1x(NEJ.X({
            onload: this.NX7Q.dW5b(this, eR5W),
            onerror: this.my7r.g3x(this)
        }, this.vi0x, function(q3x) {
            return k3x.ga5f(q3x) || k3x.kR7K(q3x)
        }))
    }
    ;
    b2x.NX7Q = function(bW4a, eR5W) {
        var m3x = bW4a.result || {}
          , kW7P = m3x.bucket
          , mQ8I = m3x.objectKey
          , er5w = m3x.token;
        if (!kW7P || !mQ8I || !er5w) {
            bW4a.code = -100;
            this.my7r.call(this, bW4a);
            return
        }
        var og8Y = (this.gU5Z.files || [{}])[0];
        var jV7O = a2x.cQ4U(this.by3x);
        jV7O[0].value = mQ8I;
        jV7O[1].value = er5w;
        if (og8Y.type && og8Y.type.indexOf("audio") == 0) {
            jV7O[3].value = "audio/mpeg"
        } else {
            jV7O[3].value = og8Y.type || ""
        }
        this.by3x.action = "//nos.netease.com/" + kW7P;
        this.BG2x = m3x;
        this.pR9I = eR5W;
        this.x3x("onuploading", .2);
        this.gu5z()
    }
    ;
    b2x.gu5z = function() {
        this.bEb9S = v3x.gu5z(this.by3x, {
            type: "json",
            onload: this.sY0x.g3x(this),
            onerror: this.my7r.g3x(this),
            onuploading: this.ZC1x.g3x(this)
        })
    }
    ;
    b2x.jj6d = function() {
        v3x.jj6d(this.bEb9S);
        this.by3x.reset()
    }
    ;
    b2x.sY0x = function(bW4a) {
        var er5w = this.BG2x
          , eR5W = this.pR9I
          , og8Y = (this.gU5Z.files || [{}])[0]
          , kM7F = {
            code: 200,
            fileName: eR5W,
            size: og8Y.size,
            bucket: er5w.bucket,
            docId: er5w.docId,
            objectKey: er5w.objectKey,
            url: "//nos.netease.com/" + er5w.bucket + "/" + er5w.objectKey
        };
        if (!bW4a) {
            bW4a = kM7F
        }
        if (!bW4a.code || bW4a.code == 200) {
            this.x3x("onsuccess", NEJ.X(kM7F, bW4a))
        } else {
            this.x3x("onerror", bW4a)
        }
        this.by3x.reset()
    }
    ;
    b2x.my7r = function(bW4a) {
        this.x3x("onerror", bW4a);
        this.by3x.reset()
    }
    ;
    b2x.ZC1x = function(jk6e) {
        this.x3x("onuploading", .2 + jk6e.loaded / jk6e.total * .8)
    }
})();
(function() {
    var c2x = NEJ.P, a2x = c2x("nej.e"), h3x = c2x("nej.v"), k3x = c2x("nej.u"), v3x = c2x("nej.j"), ch4l = c2x("nej.ut"), bI3x = c2x("nej.ui"), p3x = c2x("nm.d"), l3x = c2x("nm.x"), iS6M = c2x("nm.x.nos"), F3x = c2x("nm.m"), n3x = c2x("nm.l"), D3x = c2x("nm.w"), b2x, K3x;
    D3x.OY7R = NEJ.C();
    b2x = D3x.OY7R.O3x(ch4l.cz4D);
    b2x.bk3x = function(e3x) {
        e3x = e3x || {};
        this.bl3x(e3x);
        this.ZA1x = D3x.brN6H.B3x(NEJ.X({
            parent: e3x.parent,
            onchange: this.qK9B.g3x(this),
            onuploading: this.x3x.g3x(this, "onuploading"),
            onsuccess: this.x3x.g3x(this, "onsuccess"),
            onerror: this.x3x.g3x(this, "onerror")
        }, e3x, function(q3x) {
            return k3x.ga5f(q3x) || k3x.kR7K(q3x)
        }));
        if (e3x.multiple && iS6M.ZM1x()) {
            a2x.fQ5V(this.ZA1x.ZJ1x(), "multiple", true)
        }
        this.vi0x = e3x
    }
    ;
    b2x.qK9B = function(e3x) {
        var eR5W = e3x.filename
          , eA5F = (eR5W.split(".") || []).pop();
        this.bDW9N = (e3x.files || [{}])[0];
        this.x3x("onchange", e3x);
        if (iS6M.ZM1x() && !e3x.stopped && !e3x.cancelUpload) {
            this.Ne6Y(true);
            e3x.stopped = true
        }
    }
    ;
    b2x.ZJ1x = function() {
        return this.ZA1x.ZJ1x()
    }
    ;
    b2x.bTc4g = function() {
        return this.bDW9N
    }
    ;
    b2x.Ne6Y = function(ez5E, dT5Y) {
        dT5Y = dT5Y || this.bDW9N;
        if (iS6M.ZM1x()) {
            this.bDV9M = iS6M.gu5z(NEJ.X({
                file: dT5Y,
                local: this.vi0x.bucket && this.vi0x.bucket.length,
                onuploading: this.x3x.g3x(this, "onuploading"),
                onsuccess: this.x3x.g3x(this, "onsuccess"),
                onerror: this.x3x.g3x(this, "onerror")
            }, this.vi0x, function(q3x) {
                return k3x.ga5f(q3x) || k3x.kR7K(q3x)
            }));
            return this.bDV9M
        } else if (!ez5E) {
            this.ZA1x.Ne6Y()
        }
    }
    ;
    b2x.jj6d = function(C3x) {
        C3x = C3x || this.bDV9M;
        if (C3x) {
            iS6M.jj6d(C3x)
        }
        this.ZA1x.jj6d()
    }
})();
(function() {
    var c2x = NEJ.P, a2x = c2x("nej.e"), dO4S = c2x("nej.g"), h3x = c2x("nej.v"), k3x = c2x("nej.u"), v3x = c2x("nej.j"), fh5m = c2x("nej.n"), H3x = c2x("nej.ut"), bd3x = c2x("nej.ui"), D3x = c2x("nm.w"), n3x = c2x("nm.l"), p3x = c2x("nm.d"), l3x = c2x("nm.x"), L3x = c2x("nm.x.f"), iS6M = c2x("nm.x.nos"), b2x, K3x, bmv5A = {
        0: "",
        "-1": "不能添加重复图片",
        "-10": "最多只能添加9张",
        "-3": "请选择不超过5M的图片"
    }, bmw5B = 5 * 1024 * 1024, cwg1x = 80, bDU9L = /\.(bmp|jpg|jpeg|png|gif)$/i;
    D3x.bDT9K = NEJ.C();
    b2x = D3x.bDT9K.O3x(H3x.wx1x);
    b2x.bpZ6T = function() {
        return {
            x: this.yo1x.clientWidth - this.o3x.offsetWidth,
            y: this.yo1x.clientHeight - this.o3x.offsetHeight
        }
    }
    ;
    D3x.bmF5K = NEJ.C();
    b2x = D3x.bmF5K.O3x(bd3x.eo5t);
    b2x.bZ4d = function() {
        this.ca4e = "m-xwgt-share-upload"
    }
    ;
    b2x.bQ3x = function() {
        this.cb4f();
        var j3x = a2x.I3x(this.o3x, "j-flag");
        this.Zz1x = j3x.shift();
        this.It4x = j3x.shift();
        this.QL8D = j3x.shift();
        this.bDR9I = {
            onchange: this.bDQ9H.dW5b(this, 0),
            onerror: this.eh5m.g3x(this),
            onsuccess: this.td0x.g3x(this),
            multiple: true,
            parent: this.It4x,
            accept: "image/bmp,image/jpg,image/jpeg,image/png,image/gif"
        };
        this.bmR5W = {
            onchange: this.bDQ9H.dW5b(this, 1),
            onerror: this.eh5m.g3x(this),
            onsuccess: this.td0x.g3x(this),
            multiple: true,
            accept: "image/bmp,image/jpg,image/jpeg,image/png,image/gif"
        };
        this.bSQ4U = D3x.OY7R.B3x(this.bDR9I)
    }
    ;
    b2x.bk3x = function(e3x) {
        this.bl3x(e3x);
        this.bmR5W.parent = e3x.button;
        this.Is4w && this.Is4w.S3x();
        this.Is4w = D3x.OY7R.B3x(this.bmR5W);
        this.o3x.style.display = "none";
        if (!!this.ey5D) {
            for (var i = this.ey5D.length - 1; i >= 0; i--) {
                a2x.cK4O(this.ey5D[i].element, false);
                if (this.ey5D[i].dragger)
                    this.ey5D[i].dragger.S3x()
            }
        }
        this.ey5D = [];
        if (this.zt1x) {
            clearTimeout(this.zt1x)
        }
        this.Zx1x(0);
        this.JN5S = 0;
        this.bT3x([[this.bDR9I.parent, "click", this.bDJ9A.g3x(this)], [this.bmR5W.parent, "click", this.bDJ9A.g3x(this)]])
    }
    ;
    b2x.bD3x = function() {
        h3x.hF6z(this.rZ9Q, "click");
        if (!!this.ey5D) {
            for (var i = this.ey5D.length - 1; i >= 0; i--) {
                a2x.cK4O(this.ey5D[i].element, false);
                if (this.ey5D[i].dragger)
                    this.ey5D[i].dragger.S3x()
            }
        }
        this.ey5D = [];
        if (this.zt1x) {
            clearTimeout(this.zt1x)
        }
        this.zt1x = 0;
        this.Is4w && this.Is4w.S3x();
        delete this.Is4w;
        this.bH3x()
    }
    ;
    b2x.bDJ9A = function(d2x) {
        if (!iS6M.ZM1x() && this.ey5D.doing) {
            h3x.bh3x(d2x)
        }
    }
    ;
    b2x.bDQ9H = function(e3x, r3x) {
        var rY9P = e3x.files, ir6l;
        e3x.stopped = true;
        if (!rY9P) {
            if (e3x.filename) {
                rY9P = [{
                    name: e3x.filename,
                    isIE: true
                }]
            }
        }
        for (var i = 0, len = rY9P.length; i < len; i++) {
            if (!bDU9L.test(rY9P[i].name)) {
                this.bnz5E({
                    path: rY9P[i].name,
                    index: r3x,
                    status: -4,
                    fail: "这不是<br>图片"
                })
            } else if (rY9P[i].size > bmw5B) {
                this.bnB5G(-3);
                this.bnz5E({
                    path: rY9P[i].name,
                    index: r3x,
                    status: -3,
                    fail: "上传<br>失败"
                })
            } else {
                this.bnz5E({
                    path: rY9P[i].name,
                    file: rY9P[i],
                    index: r3x,
                    status: 0
                })
            }
        }
    }
    ;
    b2x.bnz5E = function(rV9M) {
        if (this.ey5D.length >= 9) {
            this.bnB5G(-10, 3e3, this.bDG9x.g3x(this));
            return
        }
        this.bSG4K(rV9M);
        this.ey5D.push(rV9M);
        if (!!this.ey5D.length) {
            this.o3x.style.display = ""
        }
        if (this.ey5D.length >= 9) {
            this.It4x.style.display = "none"
        } else {
            this.It4x.style.display = ""
        }
        this.Ik4o()
    }
    ;
    b2x.Ik4o = function() {
        var bnG5L = -1
          , bDF9w = 0;
        for (var i = 0, l = this.ey5D.length; i < l; i++) {
            if (this.ey5D[i].status == 1) {
                return
            }
            if (this.ey5D[i].status == 0 && bnG5L < 0) {
                bnG5L = i
            }
            if (this.ey5D[i].status == 2 || this.ey5D[i].status < 0) {
                bDF9w++
            }
        }
        var q3x = this.ey5D[bnG5L];
        if (q3x) {
            (q3x.index == 0 ? this.bSQ4U : this.Is4w).Ne6Y(false, q3x.file);
            q3x.status = 1;
            this.ey5D.doing = q3x;
            this.x3x("onstartupload", {})
        } else if (bDF9w == this.ey5D.length) {
            this.x3x("onfinishupload", {})
        }
    }
    ;
    b2x.bnJ5O = function() {
        return this.ey5D.doing || {}
    }
    ;
    b2x.eh5m = function(d2x) {
        var rV9M = this.bnJ5O();
        rV9M.status = -4;
        rV9M.fail = "上传<br>失败";
        this.bDE9v(rV9M);
        this.ey5D.doing = null;
        this.Ik4o()
    }
    ;
    b2x.td0x = function(d2x) {
        var rV9M = this.bnJ5O()
          , fs5x = d2x.fileName.match(bDU9L);
        rV9M.picUrl = d2x.url;
        v3x.bq3x("/upload/event/img/v1", {
            query: {
                imgid: d2x.docId,
                format: fs5x[1]
            },
            type: "json",
            onload: this.bDD9u.g3x(this),
            onerror: this.bDD9u.g3x(this)
        })
    }
    ;
    b2x.bDD9u = function(d2x) {
        if (d2x && d2x.code == 200 && d2x.picInfo) {
            var rV9M = this.bnJ5O();
            rV9M.status = 2;
            var bu3x = NEJ.X({}, d2x.picInfo);
            bu3x.originId = bu3x.originIdStr;
            bu3x.squareId = bu3x.squareIdStr;
            bu3x.rectangleId = bu3x.rectangleIdStr;
            bu3x.pcSquareId = bu3x.pcSquareIdStr;
            bu3x.pcRectangleId = bu3x.pcRectangleIdStr;
            bu3x.originJpgId = bu3x.originJpgIdStr || bu3x.originJpgId;
            rV9M.picInfo = bu3x;
            this.bDE9v(rV9M);
            this.ey5D.doing = null;
            this.Ik4o()
        } else {
            this.eh5m(d2x)
        }
    }
    ;
    b2x.bnB5G = function(r3x, jH7A, gg5l) {
        if (this.JN5S < r3x) {
            return
        }
        if (this.zt1x) {
            clearTimeout(this.zt1x);
            this.zt1x = 0
        }
        if (jH7A) {
            this.QL8D.innerText = bmv5A[r3x * 1];
            this.JN5S = r3x;
            this.zt1x = setTimeout(this.Zx1x.g3x(this, r3x, gg5l), jH7A)
        } else {
            this.QL8D.innerText = bmv5A[r3x];
            this.JN5S = r3x
        }
        this.QL8D.style.display = ""
    }
    ;
    b2x.Zx1x = function(r3x, gg5l) {
        if (r3x && this.JN5S !== r3x) {
            return
        }
        this.JN5S = 0;
        this.QL8D.innerText = bmv5A[0];
        this.QL8D.style.display = "none";
        gg5l && gg5l()
    }
    ;
    b2x.bSG4K = function(dT5Y) {
        var i3x = {};
        if (dT5Y.fail) {
            i3x.fail = dT5Y.fail
        }
        var dz4D = a2x.bP3x("m-xwgt-share-upload-preview", i3x);
        dT5Y.element = a2x.nd8V(dz4D);
        h3x.s3x(a2x.I3x(dT5Y.element, "del")[0], "mousedown", this.bSB4F.g3x(this, dT5Y), false);
        this.Zz1x.insertBefore(dT5Y.element, this.Zz1x.lastElementChild);
        dT5Y.dragger = D3x.bDT9K.B3x({
            view: this.Zz1x.parentNode,
            body: dT5Y.element,
            overflow: false,
            direction: 0,
            isRelative: 1,
            ondragstart: this.Rm8e.g3x(this, dT5Y),
            onchange: this.bSA4E.g3x(this, dT5Y),
            ondragend: this.bpK6E.g3x(this, dT5Y)
        })
    }
    ;
    b2x.bDE9v = function(dT5Y) {
        if (!dT5Y || !dT5Y.element) {
            return false
        }
        var i3x = {};
        if (dT5Y.fail) {
            i3x.fail = dT5Y.fail
        } else {
            i3x.url = dT5Y.picUrl
        }
        a2x.y3x(dT5Y.element, "z-fail");
        dT5Y.element.firstChild.outerHTML = a2x.bP3x("m-xwgt-share-upload-preview-img", i3x)
    }
    ;
    b2x.Rm8e = function(q3x, jW7P) {
        a2x.y3x(q3x.element, "z-sel")
    }
    ;
    b2x.bSA4E = function(q3x, jW7P) {
        var cwh1x, gD5I = this.ey5D.length - 1, mI8A;
        for (var i = gD5I; i >= 0; i--) {
            a2x.w3x(this.ey5D[i].element, "z-jump");
            if (this.ey5D[i] == q3x) {
                mI8A = i
            } else {
                a2x.fA5F(this.ey5D[i].element, {
                    left: "",
                    top: ""
                })
            }
        }
        var KH5M = {
            x: 46 + 92 * (mI8A % 5) + jW7P.left,
            y: 46 + 92 * (mI8A / 5 >> 0) + jW7P.top
        };
        var bnW5b = KH5M.x / 92 >> 0
          , bnX5c = KH5M.y / 92 >> 0
          , wy1x = Math.max(0, Math.min(gD5I, bnX5c * 5 + bnW5b));
        if (wy1x == mI8A) {
            return
        }
        var bSy4C = wy1x < mI8A;
        for (var i = Math.min(wy1x, mI8A); i <= Math.max(wy1x, mI8A); i++) {
            if (i !== mI8A) {
                var bDC9t = i % 5;
                if (bSy4C) {
                    if (bDC9t == 4) {
                        a2x.fA5F(this.ey5D[i].element, {
                            left: "-368px",
                            top: "92px"
                        })
                    } else {
                        a2x.fA5F(this.ey5D[i].element, {
                            left: "92px",
                            top: ""
                        })
                    }
                } else {
                    if (bDC9t == 0) {
                        a2x.fA5F(this.ey5D[i].element, {
                            left: "368px",
                            top: "-92px"
                        })
                    } else {
                        a2x.fA5F(this.ey5D[i].element, {
                            left: "-92px",
                            top: ""
                        })
                    }
                }
            }
        }
    }
    ;
    b2x.bpK6E = function(q3x, jW7P) {
        var cwi1x, gD5I = this.ey5D.length - 1, mI8A;
        for (var i = gD5I; i >= 0; i--) {
            a2x.fA5F(this.ey5D[i].element, {
                left: "",
                top: ""
            });
            if (this.ey5D[i] == q3x) {
                mI8A = i
            }
        }
        a2x.w3x(q3x.element, "z-sel");
        var KH5M = {
            x: 46 + 92 * (mI8A % 5) + jW7P.left,
            y: 46 + 92 * (mI8A / 5 >> 0) + jW7P.top
        };
        var bnW5b = KH5M.x / 92 >> 0
          , bnX5c = KH5M.y / 92 >> 0
          , wy1x = Math.max(0, Math.min(gD5I, bnX5c * 5 + bnW5b));
        if (wy1x == mI8A) {
            return
        }
        this.Zz1x.insertBefore(q3x.element, (this.ey5D[wy1x + (wy1x > mI8A ? 1 : 0)] || {}).element || this.It4x);
        this.ey5D.splice(mI8A, 1);
        this.ey5D.splice(wy1x, 0, q3x)
    }
    ;
    b2x.bSB4F = function(q3x, d2x) {
        a2x.cK4O(q3x.element, false);
        if (q3x.dragger)
            q3x.dragger.S3x();
        delete q3x.dragger;
        var r3x = -1;
        for (var i = this.ey5D.length - 1; i >= 0; i--) {
            if (this.ey5D[i] == q3x) {
                r3x = i;
                break
            }
        }
        this.ey5D.splice(r3x, r3x >= 0 ? 1 : 0);
        delete q3x;
        if (this.ey5D.length >= 9) {
            this.It4x.style.display = "none"
        } else {
            this.It4x.style.display = ""
        }
        if (!this.ey5D.length) {
            this.o3x.style.display = "none";
            this.Zx1x(0)
        } else {
            this.bDG9x()
        }
        if (this.ey5D.doing == q3x) {
            this.ey5D.doing = null
        }
        this.Ik4o()
    }
    ;
    b2x.bDG9x = function() {
        var bDA9r = false;
        for (var i = 0, len = this.ey5D.length; i < len; i++) {
            if (this.ey5D[i].status == -3) {
                bDA9r = true
            }
        }
        if (bDA9r) {
            this.bnB5G(-3)
        } else {
            this.Zx1x(-3)
        }
    }
    ;
    b2x.Le5j = function() {
        var ee5j = [];
        for (var i = this.ey5D.length - 1; i >= 0; i--) {
            if (this.ey5D[i].status == 2) {
                ee5j.unshift(this.ey5D[i].picInfo)
            }
        }
        return ee5j
    }
    ;
    H3x.fq5v.B3x({
        element: D3x.bmF5K,
        event: ["onstartupload", "onfinishupload"]
    })
})();
(function() {
    var c2x = NEJ.P, X3x = NEJ.O, fc5h = NEJ.R, a2x = c2x("nej.e"), h3x = c2x("nej.v"), k3x = c2x("nej.u"), bd3x = c2x("nej.ui"), M3x = c2x("nej.ut"), b2x, K3x;
    if (!!M3x.mW8O)
        return;
    M3x.mW8O = NEJ.C();
    b2x = M3x.mW8O.O3x(M3x.Zu1x);
    K3x = M3x.mW8O.cf4j;
    b2x.bk3x = function(e3x) {
        this.bSs4w(e3x.more);
        this.Zo1x = a2x.z3x(e3x.sbody);
        this.bT3x([[this.Zo1x, "scroll", this.bSq4u.g3x(this)]]);
        var dg4k = e3x.delta;
        if (dg4k == null)
            dg4k = 30;
        this.Lt5y = Math.max(0, dg4k);
        var ct4x = parseInt(e3x.count) || 0;
        this.iM6G = Math.max(0, ct4x);
        var go5t = parseInt(e3x.number) || 0;
        if (go5t > 1 && go5t <= ct4x) {
            this.yS1x = go5t
        }
        this.bl3x(e3x)
    }
    ;
    b2x.bD3x = function() {
        this.bH3x();
        delete this.za1x;
        delete this.Zo1x;
        delete this.rQ9H;
        delete this.Zl1x
    }
    ;
    b2x.zw1x = function(bj3x, br3x) {
        var bG3x = this.wH1x + (this.iM6G - 1) * this.qB9s
          , fX5c = this.iM6G * this.qB9s;
        return K3x.zw1x.call(this, bG3x, bj3x, fX5c, br3x)
    }
    ;
    b2x.bSs4w = function(Zk1x) {
        this.za1x = a2x.z3x(Zk1x);
        this.bT3x([[this.za1x, "click", this.nY8Q.g3x(this)]])
    }
    ;
    b2x.boQ5V = function(E3x) {
        E3x = E3x || {};
        if (this.rQ9H || !E3x)
            return;
        if (!E3x.scrollHeight)
            E3x = a2x.oQ8I();
        var bj3x = a2x.hR6L(this.is6m)
          , dg4k = bj3x.y + this.is6m.offsetHeight - E3x.scrollTop - E3x.clientHeight
          , boU5Z = E3x.scrollHeight <= E3x.clientHeight;
        if (dg4k <= this.Lt5y || boU5Z && !this.rQ9H) {
            this.nY8Q()
        }
    }
    ;
    b2x.bSq4u = function(d2x) {
        if (this.rQ9H)
            return;
        this.boQ5V(h3x.U3x(d2x))
    }
    ;
    b2x.zF2x = function(d2x) {
        K3x.zF2x.apply(this, arguments);
        if (!d2x.stopped) {
            this.JY5d();
            var bj3x = 0;
            if (d2x.index > 1) {
                bj3x = this.wH1x + ((d2x.index - 1) * this.iM6G - 1) * this.qB9s
            }
            this.ia6U = bj3x;
            this.nY8Q()
        }
    }
    ;
    b2x.bFM9D = function(e3x) {
        if (!!this.yS1x) {
            var dg4k = e3x.offset > 0 ? this.qB9s : this.wH1x
              , fX5c = dg4k + this.qB9s * (this.yS1x - 1);
            this.ia6U = e3x.offset + fX5c;
            e3x.data.limit = fX5c;
            e3x.limit = fX5c;
            delete this.yS1x
        }
        return e3x
    }
    ;
    b2x.bfe3x = function(e3x) {
        delete this.Zl1x;
        K3x.bfe3x.apply(this, arguments);
        this.bDw9n()
    }
    ;
    b2x.bfo3x = function(d2x) {
        if (d2x.key != this.iC6w.key)
            return;
        switch (d2x.action) {
        case "refresh":
        case "append":
            delete this.Zl1x;
            break
        }
        K3x.bfo3x.apply(this, arguments)
    }
    ;
    b2x.MD5I = function() {
        this.xl1x("onbeforelistload", "列表加载中...");
        a2x.Y3x(this.za1x, "display", "none")
    }
    ;
    b2x.bfT3x = function(j3x, bj3x, fX5c) {
        var br3x = j3x.length
          , boZ5e = j3x.loaded ? bj3x + fX5c >= br3x : bj3x + fX5c > br3x;
        this.ia6U = Math.min(this.ia6U, br3x);
        a2x.Y3x(this.za1x, "display", boZ5e ? "none" : "");
        if (boZ5e)
            this.rQ9H = !0;
        if (this.iM6G > 0) {
            var bu3x = this.zw1x(bj3x, j3x.length);
            if (this.bFL9C(bu3x.index, bu3x.total))
                return !0;
            var dg4k = this.wH1x - this.qB9s
              , go5t = this.iM6G * this.qB9s;
            this.rQ9H = (bj3x + fX5c - dg4k) % go5t == 0 || boZ5e;
            a2x.Y3x(this.za1x, "display", this.rQ9H ? "none" : "");
            this.bfA3x(this.rQ9H && bu3x.total > 1 ? "" : "none")
        }
    }
    ;
    b2x.bfR3x = function() {
        this.ia6U = 0;
        this.rQ9H = !0;
        this.xl1x("onemptylist", "没有列表数据！")
    }
    ;
    b2x.MA5F = function(dz4D, jW7P) {
        this.is6m.insertAdjacentHTML(jW7P || "beforeEnd", dz4D)
    }
    ;
    b2x.Mq5v = function(gC5H) {
        this.fg5l = this.fg5l || [];
        if (k3x.ep5u(gC5H)) {
            fc5h.push.apply(this.fg5l, gC5H)
        } else {
            this.fg5l.push(gC5H)
        }
    }
    ;
    b2x.ZG1x = function(d2x) {
        a2x.mi7b(this.ci4m);
        this.JV5a(d2x, "onafteradd");
        var ez5E = d2x.flag;
        if (d2x.stopped || !ez5E)
            return;
        if (this.iM6G > 0) {
            this.bfH3x();
            return
        }
        this.ia6U += 1;
        ez5E == -1 ? this.bgD3x(d2x.data) : this.bFK9B(d2x.data)
    }
    ;
    b2x.ZH1x = function(d2x) {
        this.JV5a(d2x, "onafterdelete");
        if (d2x.stopped)
            return;
        if (this.iM6G > 0) {
            this.bfH3x();
            return
        }
        var C3x = d2x.data[this.eN5S.pkey];
        if (!!this.fg5l) {
            var q3x = a2x.bMr1x(C3x)
              , r3x = k3x.cW4a(this.fg5l, q3x);
            if (r3x >= 0) {
                this.fg5l.splice(r3x, 1);
                this.ia6U -= 1
            }
            if (!!q3x)
                q3x.S3x()
        } else {
            var f3x = a2x.z3x(this.bFW0x(C3x));
            if (!!f3x)
                this.ia6U -= 1;
            a2x.cK4O(f3x)
        }
        if (this.ia6U <= 0)
            this.nY8Q()
    }
    ;
    b2x.bgq3x = function(bj3x, fX5c) {
        if (bj3x != this.ia6U)
            return;
        if (this.SR8J()) {
            this.rQ9H = !1;
            this.bDw9n()
        }
    }
    ;
    b2x.bgs3x = function(bj3x, fX5c) {
        if (bj3x != 0)
            return;
        var Hz4D = this.R3x.gP5U(this.iC6w.key);
        for (var i = fX5c - 1; i >= 0; i--) {
            this.bgD3x(Hz4D[i])
        }
    }
    ;
    b2x.bDw9n = function() {
        var E3x = this.Zo1x;
        if (!E3x || this.rQ9H)
            return;
        this.boQ5V(this.Zo1x)
    }
    ;
    b2x.fO5T = function() {
        delete this.rQ9H;
        K3x.fO5T.apply(this, arguments)
    }
    ;
    b2x.nY8Q = function() {
        if (!!this.Zl1x)
            return;
        this.Zl1x = !0;
        var bj3x = this.ia6U;
        this.ia6U += bj3x == 0 ? this.wH1x : this.qB9s;
        this.bFN9E(bj3x)
    }
})();
(function() {
    var c2x = NEJ.P, X3x = NEJ.O, a2x = c2x("nej.e"), k3x = c2x("nej.u"), h3x = c2x("nej.v"), cN4R = c2x("nej.x"), M3x = c2x("nej.ut"), b2x;
    if (!!M3x.Cc2x)
        return;
    M3x.Cc2x = NEJ.C();
    b2x = M3x.Cc2x.O3x(M3x.cz4D);
    b2x.bk3x = function(e3x) {
        this.bl3x(e3x);
        this.im6g = e3x.event || "click";
        this.jT7M = e3x.selected || "js-selected";
        this.nh8Z = e3x.disabled || "js-disabled";
        this.bDv9m = !!e3x.inverse;
        this.bSj4n(e3x.list);
        this.Mj5o(e3x.index || 0)
    }
    ;
    b2x.bD3x = function() {
        var bSh4l = function(f3x) {
            this.bpl5q(f3x, !1)
        };
        return function() {
            this.bH3x();
            k3x.be3x(this.bV4Z, bSh4l, this);
            delete this.bV4Z;
            delete this.im6g;
            delete this.cn4r;
            delete this.nh8Z;
            delete this.jT7M;
            delete this.bDv9m
        }
    }();
    b2x.bSj4n = function() {
        var bdE2x = function(q3x) {
            if (!q3x)
                return;
            this.bV4Z.push(q3x);
            var r3x = this.bV4Z.length - 1
              , dd4h = this.bpn5s[r3x];
            if (!dd4h) {
                dd4h = this.Mj5o.g3x(this, r3x);
                this.bpn5s[r3x] = dd4h
            }
            this.bT3x([[q3x, this.im6g, dd4h]])
        };
        return function(j3x) {
            this.bV4Z = [];
            if (!this.bpn5s)
                this.bpn5s = [];
            k3x.be3x(j3x, bdE2x, this)
        }
    }();
    b2x.bpl5q = function(E3x, bSg4k) {
        !!bSg4k && !this.bDv9m ? a2x.y3x(E3x, this.jT7M) : a2x.w3x(E3x, this.jT7M)
    }
    ;
    b2x.Mj5o = function(r3x, Mp5u, i3x) {
        var E3x = this.bV4Z[r3x];
        if (Mp5u != !0 && (r3x == this.cn4r || !E3x || a2x.bB3x(E3x, this.nh8Z))) {
            h3x.cg4k(arguments[1]);
            return this
        }
        var d2x = {
            index: r3x,
            last: this.cn4r,
            list: this.nv8n(),
            data: i3x || a2x.u3x(E3x, "value")
        };
        this.cn4r = r3x;
        E3x = this.bV4Z[d2x.last];
        if (!!E3x)
            this.bpl5q(E3x, !1);
        E3x = this.bV4Z[this.cn4r];
        this.bpl5q(E3x, !0);
        this.x3x("onchange", d2x);
        if (!d2x.nostop)
            h3x.cg4k(arguments[1]);
        return this
    }
    ;
    b2x.rM9D = function() {
        return this.cn4r
    }
    ;
    b2x.nv8n = function() {
        return this.bV4Z
    }
    ;
    a2x.bSc4g = cN4R.bSc4g = function(bE3x, e3x) {
        var C3x = a2x.kv7o(bE3x);
        if (!C3x)
            return null;
        if (!M3x.Vz9q(C3x, M3x.Cc2x)) {
            e3x = e3x || {};
            e3x.list = !e3x.clazz ? a2x.cQ4U(C3x) : a2x.I3x(C3x, e3x.clazz);
            delete e3x.clazz
        }
        return M3x.Vz9q(C3x, M3x.Cc2x, e3x || X3x)
    }
    ;
    cN4R.isChange = !0
})();
(function() {
    var c2x = NEJ.P
      , X3x = NEJ.O
      , k3x = c2x("nej.u")
      , v3x = c2x("nej.j")
      , l3x = c2x("nm.x");
    var SETTING_KEY = "player-setting";
    var mm7f = {
        mode: 4,
        volume: .8,
        autoPlay: false,
        index: 0,
        lock: false
    };
    mm7f = v3x.st9k(SETTING_KEY) || mm7f;
    l3x.bpw5B = function() {
        return mm7f
    }
    ;
    l3x.Cg2x = function(Ch2x) {
        if (Ch2x) {
            mm7f = Ch2x;
            v3x.vz0x(SETTING_KEY, Ch2x)
        }
    }
})();
(function() {
    var c2x = NEJ.P
      , X3x = NEJ.O
      , a2x = c2x("nej.e")
      , h3x = c2x("nej.v")
      , k3x = c2x("nej.u")
      , H3x = c2x("nej.ut")
      , l3x = c2x("nm.x")
      , p3x = c2x("nm.d")
      , gS5X = c2x("nm.w.player.log");
    var kH7A = p3x.hQ6K.B3x();
    var LogLevel = {
        ERROR: 10,
        INFO: 6,
        DEBUG: 2
    };
    var mh7a = function(t3x, bF3x, pp8h) {
        var cL4P = l3x.eP5U("{0} {1} {2}", k3x.iN6H(new Date, "yyyy-MM-dd HH:mm:ss"), t3x, bF3x);
        if (pp8h == LogLevel.ERROR) {
            kH7A.ge5j("playerror", {
                message: bF3x
            })
        }
        if (pp8h >= LogLevel.INFO) {
            kH7A.cjv8n(cL4P)
        }
        if (location.hostname.indexOf("igame.163.com") != -1) {
            console.log(cL4P)
        }
    };
    gS5X.bU4Y = function() {
        mh7a("PLAY_ERROR", l3x.eP5U.apply(null, arguments), LogLevel.ERROR)
    }
    ;
    gS5X.oT8L = function() {
        mh7a("PLAY_INFO", l3x.eP5U.apply(null, arguments), LogLevel.INFO)
    }
    ;
    gS5X.cwk1x = function() {
        mh7a("PLAY_DEBUG", l3x.eP5U.apply(null, arguments), LogLevel.DEBUG)
    }
})();
(function() {
    var c2x = NEJ.P
      , a2x = c2x("nej.e")
      , h3x = c2x("nej.v")
      , H3x = c2x("nej.ut")
      , k3x = c2x("nej.u")
      , D3x = c2x("nm.w")
      , gg5l = c2x("flash.cb");
    var dE4I = ["loadedmetadata", "play", "pause", "ended", "waiting", "playing", "timeupdate", "progress", "stalled", "error"];
    var Cm2x, YY1x, tR0x;
    D3x.bSa4e = function(t3x, dr4v) {
        if (t3x != "flash") {
            if (!Cm2x) {
                Cm2x = a2x.cT4X("audio");
                k3x.be3x(dE4I, function(t3x) {
                    h3x.s3x(Cm2x, t3x, onMediaCallBack)
                })
            }
            if (Cm2x && Cm2x.canPlayType && Cm2x.canPlayType("audio/mpeg")) {
                dr4v(new MediaWrap("audio"));
                return
            }
        }
        if (!YY1x) {
            a2x.qS9J({
                src: "/style/swf/music/music.swf?v=20151204",
                hidden: true,
                params: {
                    allowscriptaccess: "always"
                },
                onready: function(hg6a) {
                    YY1x = hg6a;
                    k3x.be3x(dE4I, function(t3x) {
                        gg5l[t3x] = onMediaCallBack;
                        YY1x.addCallback(t3x, "flash.cb." + t3x)
                    });
                    dr4v(new MediaWrap("flash"))
                }
                .g3x(this)
            })
        } else {
            dr4v(new MediaWrap("flash"))
        }
    }
    ;
    function MediaWrap(Co2x) {
        var lO7H;
        H3x.fq5v.B3x({
            element: this,
            event: dE4I.concat(["interrupt", "recover"])
        });
        lO7H = Co2x == "audio" ? Cm2x : YY1x;
        this.type = Co2x;
        this.destroy = function() {}
        ;
        this.setSrc = function(V3x) {
            if (tR0x != this) {
                var gD5I = tR0x;
                if (gD5I) {
                    gD5I.interrupt()
                }
                tR0x = this
            }
            if (Co2x == "flash") {
                lO7H.setSrc(V3x)
            } else {
                lO7H.src = V3x
            }
        }
        ;
        this.play = function() {
            if (tR0x != this) {
                var gD5I = tR0x;
                if (gD5I) {
                    gD5I.interrupt();
                    tR0x = this;
                    this.recover()
                } else {
                    tR0x = this
                }
            }
            if (Co2x == "flash") {
                lO7H.as_play()
            } else {
                lO7H.play()
            }
        }
        ;
        this.pause = function() {
            if (tR0x != this)
                return;
            if (Co2x == "flash") {
                lO7H.as_pause()
            } else {
                lO7H.pause()
            }
        }
        ;
        this.load = function() {
            if (tR0x != this)
                return;
            if (Co2x == "flash") {
                lO7H.as_load()
            } else {
                lO7H.load()
            }
        }
        ;
        this.interrupt = function() {
            onMediaCallBack({
                type: "interrupt"
            })
        }
        ;
        this.recover = function() {
            onMediaCallBack({
                type: "recover"
            })
        }
        ;
        this.getMedia = function() {
            return lO7H
        }
        ;
        var nU8M = ["Src", "Duration", "CurrentTime", "Paused", "Ended", "ReadyState", "Volume", "Error", "Buffered", "NetworkState"];
        k3x.be3x(nU8M, function(T3x) {
            var NA7t = "get" + T3x
              , NB7u = "set" + T3x;
            if (Co2x == "flash") {
                if (!this[NA7t]) {
                    this[NA7t] = function() {
                        return lO7H[NA7t]()
                    }
                }
                if (!this[NB7u]) {
                    this[NB7u] = function(value) {
                        lO7H[NB7u](value)
                    }
                }
            } else {
                var bDl9c = T3x.slice(0, 1).toLowerCase() + T3x.slice(1);
                if (!this[NA7t]) {
                    this[NA7t] = function() {
                        return lO7H[bDl9c]
                    }
                }
                if (!this[NB7u]) {
                    this[NB7u] = function(value) {
                        lO7H[bDl9c] = value
                    }
                }
            }
        }, this)
    }
    function onMediaCallBack(d2x) {
        if (tR0x) {
            h3x.x3x(tR0x, d2x.type, d2x)
        }
    }
})();
(function() {
    var c2x = NEJ.P, h3x = c2x("nej.v"), v3x = c2x("nej.j"), H3x = c2x("nej.ut"), cP4T = c2x("nej.p"), D3x = c2x("nm.w"), l3x = c2x("nm.x"), gS5X = c2x("nm.w.player.log"), b2x;
    var DEFAULT_BR = 128e3;
    var CDN_HOST_REG = /(m\d+\.music\.126\.net)/;
    var MAX_STALLED_RETRY = 2;
    var MediaError = {
        MEDIA_ERR_ABORTED: 1,
        MEDIA_ERR_NETWORK: 2,
        MEDIA_ERR_DECODE: 3,
        MEDIA_ERR_SRC_NOT_SUPPORTED: 4
    };
    var ErrorType = {
        INFO_GET_ERR: 1,
        NET_ERR: 2,
        UNKNOWN_ERR: 10
    };
    var LoadState = {
        LOAD_START: 1,
        LOADED_META: 2,
        IN_RELOAD: 3,
        IN_RE_GET_URL: 4,
        IN_SWITCH_CDN: 5,
        IN_SWITCH_MEDIA: 6
    };
    var RetryLevel = {
        NONE: 0,
        GET_URL: 1,
        RELOAD: 2,
        SWITCH_CDN: 3
    };
    var bDj9a = false;
    D3x.fp5u = NEJ.C();
    b2x = D3x.fp5u.O3x(H3x.cz4D);
    b2x.bk3x = function(e3x) {
        this.bl3x(e3x);
        this.cr4v = {};
        this.YN0x(e3x.media);
        v3x.bq3x("/api/cdns", {
            type: "json",
            onload: function(d2x) {
                if (d2x.code) {
                    this.pm8e = d2x.data
                }
            }
            .g3x(this)
        })
    }
    ;
    b2x.bD3x = function() {
        this.bH3x();
        delete this.cr4v
    }
    ;
    b2x.YL0x = function(bf3x) {
        if (!bf3x)
            return;
        var yB1x = this.cr4v.volume;
        if (this.dB4F) {
            this.dB4F.pause()
        }
        this.cr4v = {
            time: 0,
            id: bf3x.id,
            duration: bf3x.duration / 1e3,
            play: this.cr4v.play,
            stalledRetryCount: 0
        };
        if (yB1x != null) {
            this.cr4v.volume = yB1x
        }
        this.cr4v.loadState = LoadState.LOAD_START;
        this.bDi9Z(bf3x.id);
        gS5X.oT8L("play song id: {0}", bf3x.id)
    }
    ;
    b2x.eI5N = function() {
        if (this.cr4v.error) {
            this.cr4v.error = null;
            if (this.cr4v.error == ErrorType.INFO_GET_ERR || this.bDg9X()) {
                this.bDe9V()
            } else {
                this.Oe7X()
            }
        } else {
            if (this.dB4F) {
                this.dB4F.play()
            }
        }
        this.cr4v.play = true;
        this.oB8t("play")
    }
    ;
    b2x.ft5y = function() {
        if (this.dB4F) {
            this.dB4F.pause()
        }
        this.cr4v.play = false;
        this.oB8t("pause")
    }
    ;
    b2x.nJ8B = function(bz3x) {
        if (this.dB4F) {
            this.dB4F.setCurrentTime(bz3x)
        }
        this.cr4v.time = bz3x;
        gS5X.oT8L("seek to: {0}", bz3x)
    }
    ;
    b2x.bqK6E = function() {
        return this.cr4v.duration || 0
    }
    ;
    b2x.uF0x = function() {
        return !!this.cr4v.play
    }
    ;
    b2x.lq7j = function(Ox7q) {
        this.cr4v.volume = Ox7q;
        if (this.dB4F) {
            this.dB4F.setVolume(Ox7q)
        }
    }
    ;
    b2x.bqP6J = function() {
        return this.cr4v.time
    }
    ;
    b2x.YN0x = function(t3x) {
        D3x.bSa4e(t3x, function(lO7H) {
            this.dB4F = lO7H;
            gS5X.oT8L("media loaded: {0}", lO7H.type);
            this.bT3x([[this.dB4F, "loadedmetadata", this.bRM4Q.g3x(this)], [this.dB4F, "ended", this.bRJ4N.g3x(this)], [this.dB4F, "waiting", this.xR1x.g3x(this)], [this.dB4F, "play", this.tb0x.g3x(this)], [this.dB4F, "pause", this.bqX6R.g3x(this)], [this.dB4F, "playing", this.OR7K.g3x(this)], [this.dB4F, "timeupdate", this.bRI4M.g3x(this)], [this.dB4F, "progress", this.rr9i.g3x(this)], [this.dB4F, "stalled", this.brf6Z.g3x(this)], [this.dB4F, "interrupt", this.ft5y.g3x(this)], [this.dB4F, "recover", this.bRH4L.g3x(this)], [this.dB4F, "error", this.eh5m.g3x(this)]]);
            if (this.cr4v) {
                if (this.cr4v.loadState == LoadState.LOAD_START || this.cr4v.loadState == LoadState.IN_SWITCH_MEDIA) {
                    this.brl6f();
                    if (this.cr4v.volume != null) {
                        this.dB4F.setVolume(this.cr4v.volume)
                    }
                }
            }
        }
        .g3x(this))
    }
    ;
    b2x.bRF4J = function(t3x) {
        this.EX3x();
        this.dB4F.destroy();
        this.cr4v.loadState = LoadState.IN_SWITCH_MEDIA;
        this.xR1x();
        this.YN0x(t3x);
        gS5X.oT8L("switch media")
    }
    ;
    b2x.cwl1x = function() {
        return this.dB4F
    }
    ;
    b2x.bDi9Z = function() {
        this.xR1x();
        v3x.bq3x("/api/song/enhance/player/url", {
            type: "json",
            query: {
                ids: JSON.stringify([this.cr4v.id]),
                br: DEFAULT_BR
            },
            onload: this.bCY9P.g3x(this),
            onerror: this.bCY9P.g3x(this)
        })
    }
    ;
    b2x.bCY9P = function(d2x) {
        if (d2x.code == 200 && d2x.data && d2x.data.length) {
            var bu3x = d2x.data[0];
            if (!bu3x.url) {
                this.cr4v.error = ErrorType.INFO_GET_ERR;
                this.oB8t("error", {
                    code: this.cr4v.error
                });
                return
            }
            this.cr4v.playUrl = bu3x.url;
            this.cr4v.expireTime = (new Date).getTime() + bu3x.expi * 1e3;
            this.brl6f()
        } else {
            this.cr4v.error = ErrorType.INFO_GET_ERR;
            this.oB8t("error", {
                code: this.cr4v.error
            });
            gS5X.bU4Y("info load error")
        }
    }
    ;
    b2x.brl6f = function() {
        if (this.dB4F) {
            var V3x = this.cr4v.playUrl;
            if (this.cr4v.time > 0 && (this.cr4v.loadState == LoadState.IN_RE_GET_URL || this.cr4v.loadState == LoadState.IN_RE_GET_URL)) {
                V3x += "#t=" + this.cr4v.time
            }
            this.dB4F.setSrc(V3x);
            gS5X.oT8L("load mp3: {0},loadState: {1}.", V3x, this.cr4v.loadState)
        }
    }
    ;
    b2x.bCX9O = function() {
        if (/#t=(\d+)$/.test(this.dB4F.getSrc())) {
            return parseInt(RegExp.$1) || 0
        } else {
            return 0
        }
    }
    ;
    b2x.Oe7X = function() {
        var bz3x = parseInt(this.cr4v.time) || 0
          , bRz4D = this.bCX9O();
        if (bz3x === bRz4D) {
            this.dB4F.load()
        } else {
            this.dB4F.setSrc(this.cr4v.playUrl + "#t=" + bz3x)
        }
        this.cr4v.loadState = LoadState.IN_RELOAD;
        this.xR1x();
        gS5X.oT8L("reload from: {0}", bz3x)
    }
    ;
    b2x.bDe9V = function() {
        this.cr4v.loadState = LoadState.IN_RE_GET_URL;
        this.bDi9Z()
    }
    ;
    b2x.bCV9M = function() {
        var vp0x = getHost(this.cr4v.playUrl);
        if (vp0x) {
            for (var i = 0; i < this.pm8e.length; i++) {
                var hu6o = this.pm8e[i] || []
                  , r3x = hu6o.indexOf(vp0x);
                if (r3x >= 0 && hu6o.length > 1) {
                    return hu6o[(r3x + 1) % hu6o.length]
                }
            }
        }
        function getHost(V3x) {
            if (CDN_HOST_REG.test(V3x))
                return RegExp.$1
        }
    }
    ;
    b2x.bRx3x = function() {
        this.cr4v.playUrl = this.cr4v.playUrl.replace(CDN_HOST_REG, this.bCV9M());
        this.cr4v.loadState = LoadState.IN_SWITCH_CDN;
        this.brl6f();
        this.xR1x()
    }
    ;
    b2x.bRM4Q = function() {
        if (this.cr4v.loadState == LoadState.LOAD_START) {
            this.cr4v.loadState = LoadState.LOADED_META;
            if (this.dB4F.type == "audio") {
                this.cr4v.duration = this.dB4F.getDuration()
            }
            this.oB8t("loadedmeta", {
                duration: this.cr4v.duration
            })
        } else {
            this.cr4v.loadState = LoadState.LOADED_META
        }
        if (this.cr4v.play) {
            this.dB4F.play()
        } else {
            this.dB4F.pause()
        }
        if (this.cr4v.time && parseInt(this.cr4v.time) != this.bCX9O()) {
            this.dB4F.setCurrentTime(this.cr4v.time)
        }
        this.HI4M();
        this.OR7K();
        bDj9a = true;
        gS5X.oT8L("loaded meta")
    }
    ;
    b2x.bRJ4N = function() {
        this.cr4v.ended = true;
        this.oB8t("ended")
    }
    ;
    b2x.xR1x = function() {
        if (!this.cr4v.waiting) {
            this.cr4v.waiting = true;
            this.cr4v.waitTimestamp = +(new Date);
            this.oB8t("waiting")
        }
    }
    ;
    b2x.OR7K = function() {
        this.cr4v.waiting = false;
        this.cr4v.waitTimestamp = 0;
        this.oB8t("playing")
    }
    ;
    b2x.tb0x = function() {
        this.oB8t("play")
    }
    ;
    b2x.bqX6R = function() {
        this.oB8t("pause")
    }
    ;
    b2x.bRI4M = function() {
        if (this.cr4v.loadState != LoadState.LOADED_META)
            return;
        var bz3x = this.dB4F.getCurrentTime();
        if (this.cr4v.waiting && bz3x > this.cr4v.time) {
            this.OR7K()
        }
        this.cr4v.time = bz3x;
        this.oB8t("timeupdate", {
            time: this.cr4v.time,
            duration: this.cr4v.duration
        })
    }
    ;
    b2x.rr9i = function(d2x) {
        if (this.cr4v.loadState != LoadState.LOADED_META)
            return;
        var m3x = {};
        if (d2x.data) {
            m3x.total = d2x.data.total;
            m3x.loaded = d2x.data.loaded
        } else {
            var xw1x = this.dB4F.getBuffered()
              , bz3x = this.dB4F.getCurrentTime()
              , ns8k = 0;
            for (var i = 0; i < xw1x.length; i++) {
                if (bz3x > xw1x.start(i) && bz3x < xw1x.end(i)) {
                    ns8k = xw1x.end(i);
                    break
                }
            }
            m3x.total = this.cr4v.duration;
            m3x.loaded = Math.min(ns8k, m3x.total)
        }
        this.oB8t("progress", m3x)
    }
    ;
    b2x.HI4M = function() {
        if (this.cr4v.retry) {
            clearTimeout(this.cr4v.retry.tid);
            this.cr4v.retry = null
        }
    }
    ;
    b2x.eh5m = function() {
        var bR3x = this.dB4F.getError();
        gS5X.bU4Y("media error code: {0}, netState: {1}", bR3x.code, this.dB4F.getNetworkState());
        if (bR3x.code == MediaError.MEDIA_ERR_NETWORK || bR3x.code == MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED) {
            var Ch2x = l3x.bpw5B();
            if (!this.cr4v.retry) {
                this.cr4v.retry = {
                    level: RetryLevel.NONE
                }
            } else {
                window.clearTimeout(this.cr4v.retry.tid)
            }
            if (this.cr4v.retry.level == RetryLevel.NONE) {
                if (this.bDg9X()) {
                    this.cr4v.retry.level = RetryLevel.GET_URL;
                    this.bDe9V();
                    gS5X.oT8L("Url expired, get url.")
                } else {
                    this.cr4v.retry.level = RetryLevel.RELOAD;
                    this.cr4v.retry.tid = setTimeout(this.Oe7X.g3x(this), 3e3);
                    gS5X.oT8L("Reload mp3 3s later.")
                }
            } else if (this.cr4v.retry.level == RetryLevel.GET_URL) {
                this.cr4v.retry.level = RetryLevel.RELOAD;
                this.cr4v.retry.tid = setTimeout(this.Oe7X.g3x(this), 3e3);
                gS5X.oT8L("Reload mp3 3s later.")
            } else if (this.cr4v.retry.level == RetryLevel.RELOAD) {
                this.cr4v.retry.level = RetryLevel.SWITCH_CDN;
                if (this.bCV9M()) {
                    this.cr4v.retry.tid = setTimeout(this.bRx3x.g3x(this), 5e3);
                    gS5X.oT8L("Switch CDN 5s later.")
                } else {
                    this.cr4v.retry.tid = setTimeout(this.Oe7X.g3x(this), 5e3);
                    gS5X.oT8L("Reload mp3 5s later.")
                }
            } else if (!bDj9a && this.dB4F.type == "audio" && !Ch2x.useFlash && !cP4T.bag2x.mac && l3x.bbU2x().supported) {
                Ch2x.useFlash = true;
                l3x.Cg2x(Ch2x);
                this.bRF4J("flash")
            } else {
                this.HI4M();
                this.ft5y();
                this.cr4v.error = ErrorType.NET_ERR;
                this.oB8t("error", {
                    code: this.cr4v.error
                });
                gS5X.bU4Y("error can not retry.")
            }
        } else {
            this.HI4M();
            this.ft5y();
            this.cr4v.error = ErrorType.UNKNOWN_ERR;
            this.oB8t("error", {
                code: this.cr4v.error
            });
            gS5X.bU4Y("error can not retry.")
        }
    }
    ;
    b2x.brf6Z = function() {
        var he6Y = 0
          , bCU9L = 5e3;
        return function() {
            this.xR1x();
            clearTimeout(he6Y);
            setTimeout(function() {
                var fH5M = +(new Date);
                if (this.cr4v.waiting && fH5M - this.cr4v.waitTimestamp >= bCU9L && this.cr4v.stalledRetryCount < MAX_STALLED_RETRY) {
                    gS5X.oT8L("stalled too long retry.");
                    this.cr4v.stalledRetryCount++;
                    this.Oe7X()
                }
            }
            .g3x(this), bCU9L);
            gS5X.oT8L("stalled")
        }
    }();
    b2x.bDg9X = function() {
        var fH5M = +(new Date);
        return fH5M > this.cr4v.expireTime
    }
    ;
    b2x.bRH4L = function() {
        var bz3x = parseInt(this.cr4v.time) || 0;
        this.dB4F.setSrc(this.cr4v.playUrl + "#t=" + bz3x);
        this.cr4v.loadState = LoadState.IN_RELOAD;
        this.xR1x();
        gS5X.oT8L("recover from: {0}", bz3x)
    }
    ;
    b2x.oB8t = function(W3x, i3x) {
        h3x.x3x(D3x.fp5u, "playaction", {
            action: W3x,
            data: i3x || {}
        })
    }
    ;
    H3x.fq5v.B3x({
        element: D3x.fp5u,
        event: ["playaction"]
    })
})();
(function() {
    if (!(window == top)) {
        return
    }
    var c2x = NEJ.P, h3x = c2x("nej.v"), H3x = c2x("nej.ut"), D3x = c2x("nm.w"), b2x;
    D3x.CA2x = NEJ.C();
    b2x = D3x.CA2x.O3x(D3x.fp5u);
    K3x = D3x.CA2x.cf4j;
    b2x.cl4p = function() {
        this.cs4w()
    }
    ;
    b2x.bRv3x = function(bK3x) {
        this.YL0x(bK3x);
        this.eI5N()
    }
    ;
    b2x.bay2x = function() {
        this.ft5y()
    }
    ;
    b2x.ud0x = function(d2x) {
        if (d2x.action == "play") {
            this.ft5y()
        }
    }
    ;
    b2x.oB8t = function(W3x, i3x) {
        h3x.x3x(D3x.CA2x, "tmpplayaction", {
            action: W3x,
            data: i3x || {},
            tmp: true
        })
    }
    ;
    b2x.ro9f = function() {
        return this.cr4v
    }
    ;
    H3x.fq5v.B3x({
        element: D3x.CA2x,
        event: ["tmpplayaction"]
    })
})();
(function() {
    var c2x = NEJ.P, X3x = NEJ.O, a2x = c2x("nej.e"), h3x = c2x("nej.v"), k3x = c2x("nej.u"), fh5m = c2x("nej.n"), v3x = c2x("nej.j"), H3x = c2x("nej.ut"), bd3x = c2x("nej.ui"), D3x = c2x("nm.w"), n3x = c2x("nm.l"), jE7x = c2x("nm.c"), p3x = c2x("nm.d"), l3x = c2x("nm.x"), b2x, K3x, Yr0x = [{
        item: "m-publish-search-single",
        type: 1
    }, {
        item: "m-publish-search-artist",
        type: 100
    }, {
        item: "m-publish-search-album",
        type: 10
    }, {
        item: "m-publish-search-mv",
        type: 1004
    }, {
        item: "m-publish-search-playlist",
        type: 1e3
    }, {
        item: "m-publish-search-djRadio",
        type: 1009
    }];
    var baE2x = {
        song: 0,
        artist: 1,
        album: 2,
        mv: 3,
        playlist: 4,
        djradio: 5
    };
    D3x.baF2x = NEJ.C();
    b2x = D3x.baF2x.O3x(bd3x.eo5t);
    b2x.cl4p = function(e3x) {
        this.cs4w(e3x);
        var j3x = a2x.I3x(this.o3x, "j-flag");
        this.cwm1x = j3x.shift();
        this.bRt3x = j3x.shift();
        this.HH4L = j3x.shift();
        this.baL2x = j3x.shift();
        this.baM2x = [j3x.shift(), j3x.shift(), j3x.shift(), j3x.shift(), j3x.shift(), j3x.shift()];
        this.Yp0x = j3x.shift();
        this.bCT9K = j3x.shift();
        this.qT9K = {
            list: this.baM2x,
            selected: "z-curr",
            onchange: this.bCS9J.g3x(this)
        };
        h3x.s3x(this.HH4L, "input", this.Yn0x.g3x(this));
        h3x.s3x(this.HH4L, "propertychange", this.Yn0x.g3x(this));
        h3x.s3x(this.HH4L, "keyup", this.Yn0x.g3x(this));
        h3x.s3x(this.bRt3x, "click", this.Yn0x.g3x(this));
        h3x.s3x(this.Yp0x, "click", this.cx4B.g3x(this));
        h3x.s3x(this.bCT9K, "click", function() {
            this.x3x("oncancel", {})
        }
        .g3x(this));
        this.R3x = p3x.DH3x.fY5d();
        this.Qh7a = top.nm.w.CA2x.fY5d();
        H3x.fq5v.B3x({
            element: top.nm.w.CA2x,
            event: ["tmpplayaction"]
        });
        this.pZ9Q = {
            limit: 100,
            offset: 0,
            parent: this.Yp0x,
            onbeforelistload: this.pO9F.g3x(this)
        };
        p3x.sk = "fuck" + a2x.u3x(this.baL2x, "xname") + "458";
        h3x.s3x(top.nm.w.CA2x, "tmpplayaction", this.ud0x.g3x(this))
    }
    ;
    b2x.bZ4d = function() {
        this.ca4e = "m-xwgt-publish-search"
    }
    ;
    b2x.bk3x = function(e3x) {
        this.bl3x(e3x);
        if (!!this.Ay2x) {
            this.Ay2x.S3x();
            delete this.Ay2x
        }
        this.qT9K.index = baE2x[e3x.type || "song"];
        this.Ay2x = H3x.Cc2x.B3x(this.qT9K);
        this.HH4L.value = "";
        this.HH4L.focus();
        this.tL0x = "";
        this.cyI2x = 0;
        if (e3x.showMV == true) {
            this.baM2x[baE2x["mv"]].parentNode.style.display = "";
            a2x.y3x(this.baL2x, "srchtab-1")
        } else {
            this.baM2x[baE2x["mv"]].parentNode.style.display = "none";
            a2x.w3x(this.baL2x, "srchtab-1")
        }
        if (!!this.dt4x) {
            this.dt4x = this.dt4x.S3x()
        }
        if (e3x.hideBack) {
            a2x.y3x(this.bCT9K.parentNode, "f-hide")
        }
    }
    ;
    b2x.bD3x = function() {
        this.Qh7a.bay2x();
        this.bH3x()
    }
    ;
    b2x.Yn0x = function() {
        var value = this.HH4L.value.trim();
        if (value && value.length) {
            if (value != this.tL0x) {
                this.tL0x = value;
                this.bCS9J({
                    index: this.Ay2x.rM9D()
                })
            }
        } else {
            if (this.dt4x) {
                this.dt4x = this.dt4x.S3x()
            }
        }
        this.tL0x = value
    }
    ;
    b2x.cx4B = function() {
        var bRm3x = function(E3x) {
            return a2x.bB3x(E3x, "sitm") || a2x.bB3x(E3x, "itm") || a2x.bB3x(E3x, "mv-item")
        }
          , bRk3x = function(E3x) {
            return a2x.bB3x(E3x, "ply")
        }
          , bCQ9H = function() {
            n3x.Z3x.N3x({
                type: 2,
                tip: "因合作方要求，该资源需付费使用"
            })
        }
          , bRi3x = function() {
            n3x.Z3x.N3x({
                type: 2,
                tip: "因合作方要求，该资源需下载后播放"
            })
        }
          , bbj2x = function(bf3x) {
            if (bf3x && bf3x.privilege && bf3x.privilege.toast) {
                v3x.bq3x("/api/song/toast", {
                    query: {
                        id: bf3x.id
                    },
                    type: "json",
                    onload: Mu5z.g3x(this),
                    onerror: Mu5z.g3x(this)
                })
            } else {
                Mv5A()
            }
        }
          , Mu5z = function(P3x) {
            Mv5A((P3x || X3x).toast)
        }
          , Mv5A = function(bF3x) {
            n3x.Z3x.N3x({
                type: 2,
                tip: bF3x || "因合作方要求，该资源暂时下架>_<"
            })
        };
        return function(d2x) {
            var CF2x = h3x.U3x(d2x, bRk3x)
              , j3x = h3x.U3x(d2x, bRm3x)
              , dY5d = this.Qh7a.ro9f();
            if (!!j3x) {
                h3x.bh3x(d2x);
                this.QO8G = a2x.u3x(j3x, "id");
                this.QS8K = a2x.u3x(j3x, "type");
                if (this.QS8K == 18) {
                    var bK3x = this.R3x.eg5l(this.QO8G)
                      , pp8h = l3x.oi8a(bK3x);
                    if (!CF2x) {
                        if (pp8h == 10) {
                            bCQ9H();
                            return
                        } else if (pp8h == 100) {
                            bbj2x(bK3x);
                            return
                        }
                    } else {
                        if (pp8h == 10) {
                            bCQ9H();
                            return
                        } else if (pp8h == 100) {
                            bbj2x(bK3x);
                            return
                        } else if (pp8h == 11) {
                            bRi3x();
                            return
                        } else {
                            a2x.w3x(this.Au2x, "z-pause z-loading");
                            if (CF2x == this.Au2x && dY5d.play && !dY5d.ended) {
                                this.Qh7a.bay2x()
                            } else {
                                this.Au2x = CF2x;
                                this.Qh7a.bRv3x(bK3x)
                            }
                            return
                        }
                    }
                } else if (this.QS8K == 70) {
                    if (a2x.bB3x(j3x, "z-noprogram")) {
                        n3x.Z3x.N3x({
                            type: 2,
                            tip: "不能分享没有节目的电台"
                        });
                        return
                    }
                }
                this.bRh3x()
            }
        }
    }();
    b2x.bRh3x = function() {
        var hs6m = this.R3x.eg5l(this.QO8G)
          , rh9Y = l3x.bIi0x(this.QS8K, hs6m);
        rh9Y.title = rh9Y.title || "";
        rh9Y.author = rh9Y.author || "";
        rh9Y.picUrl = rh9Y.picUrl || "";
        rh9Y.authors = rh9Y.authors || "";
        if (this.QS8K == 70) {
            this.QO8G = this.QO8G.slice(0, -4)
        }
        this.x3x("onfinish", {
            id: this.QO8G,
            type: this.QS8K,
            data: rh9Y
        })
    }
    ;
    b2x.ud0x = function(d2x) {
        var i3x = d2x.data;
        if (!this.Au2x) {
            return
        }
        switch (d2x.action) {
        case "play":
            a2x.eu5z(this.Au2x, "z-pause z-play", "z-loading");
            break;
        case "pause":
        case "ended":
            a2x.w3x(this.Au2x, "z-pause z-loading");
            break;
        case "error":
            n3x.Z3x.N3x({
                type: 2,
                tip: "试听遇到问题，播放失败"
            });
            a2x.w3x(this.Au2x, "z-pause z-loading");
            break;
        case "playing":
            a2x.eu5z(this.Au2x, "z-loading", "z-pause");
            break;
        case "waiting":
            a2x.eu5z(this.Au2x, "z-pause", "z-loading");
            break
        }
    }
    ;
    b2x.bRc3x = function(d2x) {
        if (d2x.result.code == 407) {
            this.Yp0x.innerHTML = '<div class="n-norlt s-fc1">根据相关法律法规和政策，搜索结果未予显示</div>';
            return
        }
        this.Yp0x.innerHTML = '<div class="n-norlt s-fc1">页面出错，请稍后再试！</div>'
    }
    ;
    b2x.bCS9J = function(d2x) {
        if (!this.tL0x || d2x.index < 0 || d2x.index > 5) {
            return
        }
        this.Qh7a.bay2x();
        var bc3x = Yr0x[d2x.index]
          , e3x = NEJ.X({}, this.pZ9Q);
        e3x.cache = {
            klass: p3x.DH3x,
            clear: true,
            onerror: this.bRc3x.g3x(this)
        };
        e3x.cache.lkey = "search-publish-" + bc3x.type + "-" + this.tL0x;
        e3x.item = {
            klass: bc3x.item,
            getRestrictLevel: l3x.oi8a,
            dur2time: l3x.kt7m
        };
        if (!e3x.cache.data) {
            e3x.cache.data = {}
        }
        e3x.cache.data.s = this.tL0x;
        e3x.cache.data.type = bc3x.type;
        e3x.cache.data.isPub = true;
        if (bc3x.type == 1) {
            e3x.cache.data.hlpretag = '<span class="s-fc7">';
            e3x.cache.data.hlposttag = "</span>"
        }
        e3x.onemptylist = this.bRb3x.g3x(this, this.tL0x);
        if (!!this.CI2x)
            this.R3x.tT0x(this.CI2x);
        if (!!this.dt4x) {
            this.dt4x = this.dt4x.S3x()
        }
        this.dt4x = H3x.mW8O.B3x(e3x);
        this.CI2x = e3x.cache.lkey
    }
    ;
    b2x.pO9F = function(d2x) {
        d2x.value = a2x.hX6R("m-publish-search-loading")
    }
    ;
    b2x.bRb3x = function(J3x, d2x) {
        a2x.dL4P(d2x.parent, "m-publish-emtpy-message", {
            key: J3x
        });
        d2x.stopped = true
    }
})();
(function() {
    var c2x = NEJ.P, a2x = c2x("nej.e"), h3x = c2x("nej.v"), cP4T = c2x("nej.p"), v3x = c2x("nej.j"), ch4l = c2x("nej.ut"), bI3x = c2x("nej.ui"), D3x = c2x("nm.w"), b2x, K3x;
    var bQY3x = ".j-item.j-selected a{background:#eee;text-decoration:none;color:#333;}";
    D3x.CJ2x = NEJ.C();
    b2x = D3x.CJ2x.O3x(bI3x.eo5t);
    var gh5m = a2x.ek5p("m-wgt-receiverInput");
    var bQX3x = a2x.ek5p("m-wgt-receiverList");
    var hW6Q = a2x.rL9C(bQY3x);
    var bQW3x = a2x.ek5p('<div data-id=${userId} class="blk s-fc3 j-receiver">${username}<a href="#" class="cls" title="删除">&times;</a></div>');
    b2x.cl4p = function(e3x) {
        this.ba3x = [];
        this.uv0x = e3x.receiver || null;
        this.bQV3x = e3x.unique || false;
        this.mb7U = e3x.err;
        this.bCP9G(this.bCM9D, e3x.uid);
        this.cs4w(e3x)
    }
    ;
    b2x.bk3x = function(e3x) {
        this.bl3x(e3x);
        this.JA4E();
        this.JC4G();
        this.Yh0x();
        if (e3x.receiver)
            this.bbP2x(e3x.receiver.nickname, e3x.receiver.userId);
        a2x.Y3x(this.yF1x, "display", "block");
        a2x.Y3x(this.bbQ2x, "cursor", "text");
        a2x.Y3x(this.yF1x, "cursor", "text")
    }
    ;
    b2x.bZ4d = function() {
        var i3x = this.bCL9C();
        this.ca4e = a2x.ib6V(a2x.bP3x(gh5m, {
            receiver: this.uv0x,
            users: i3x
        }));
        this.lg7Z = hW6Q
    }
    ;
    b2x.bQ3x = function() {
        this.cb4f();
        var bx3x = a2x.I3x(this.o3x, "j-flag");
        var gC5H = a2x.I3x(this.o3x, "j-item");
        this.bbQ2x = bx3x[0];
        this.bCK9B = bx3x[1];
        this.dG4K = bx3x[2];
        this.yF1x = bx3x[3];
        this.Yd0x = bx3x[4];
        this.bbW2x = bx3x[5];
        this.fg5l = gC5H;
        a2x.y3x(this.fg5l[0], "j-selected");
        h3x.s3x(this.dG4K, "keyup", this.bbX2x.g3x(this));
        h3x.s3x(this.dG4K, "keydown", this.JR5W.g3x(this));
        h3x.s3x(this.dG4K, "focus", this.kf7Y.g3x(this));
        h3x.s3x(this.Yd0x, "click", this.bQI3x.g3x(this));
        h3x.s3x(this.bbQ2x, "click", this.bQH3x.g3x(this));
        h3x.s3x(document.body, "click", this.nq8i.g3x(this));
        h3x.s3x(this.dG4K, "input", this.fo5t.g3x(this));
        h3x.s3x(this.dG4K, "blur", this.oj8b.g3x(this))
    }
    ;
    b2x.bD3x = function(e3x) {
        h3x.ma7T(document.body, "click", this.nq8i.g3x(this));
        this.bH3x();
        this.Yh0x();
        this.bQG3x();
        this.nq8i()
    }
    ;
    b2x.bbX2x = function(d2x) {
        h3x.bh3x(d2x);
        var iX6R = d2x.keyCode || d2x.which;
        var bi3x = this.dG4K.value;
        var br3x = this.fg5l.length;
        var qY9P = a2x.I3x(this.o3x, "j-selected")[0];
        switch (iX6R) {
        case 13:
            var kg7Z = a2x.fQ5V(qY9P, "data-username");
            var hv6p = a2x.fQ5V(qY9P, "data-userId");
            this.bbP2x(kg7Z, hv6p);
            this.nq8i();
            this.dG4K.value = "";
            break;
        case 38:
            var r3x = a2x.fQ5V(qY9P, "data-index") - 1 < 0 ? br3x - 1 : a2x.fQ5V(qY9P, "data-index") - 1;
            a2x.w3x(qY9P, "j-selected");
            a2x.y3x(this.fg5l[r3x], "j-selected");
            break;
        case 40:
            var r3x = parseInt(a2x.fQ5V(qY9P, "data-index")) + 1 >= br3x ? 0 : parseInt(a2x.fQ5V(qY9P, "data-index")) + 1;
            a2x.w3x(qY9P, "j-selected");
            a2x.y3x(this.fg5l[r3x], "j-selected");
            break;
        default:
            this.um0x()
        }
    }
    ;
    b2x.JR5W = function(d2x) {
        var iX6R = d2x.keyCode || d2x.which;
        var bi3x = this.dG4K.value;
        var r3x = a2x.I3x(this.o3x, "j-receiver").length - 1;
        if (iX6R === 8 && bi3x === "")
            this.bQC2x(r3x)
    }
    ;
    b2x.fo5t = function(d2x) {
        var bi3x = this.dG4K.value;
        if (bi3x.length > 10) {
            this.dG4K.value = bi3x.substring(0, 10);
            return
        }
        cP4T.cR4V.browser == "ie" && cP4T.cR4V.version < "7.0" ? setTimeout(this.bcm2x.g3x(this), 0) : this.bcm2x();
        this.JC4G()
    }
    ;
    b2x.kf7Y = function() {
        if (this.ba3x[0])
            this.um0x();
        else
            this.bCP9G(this.bQu2x);
        a2x.Y3x(this.yF1x, "display", "none")
    }
    ;
    b2x.oj8b = function() {
        var br3x = a2x.I3x(this.o3x, "j-receiver").length;
        if (this.dG4K.value.trim() == "" && br3x <= 0)
            a2x.Y3x(this.yF1x, "display", "block")
    }
    ;
    b2x.bbP2x = function(kg7Z, hv6p) {
        var Hh4l = this.Kr5w();
        if (Hh4l.length >= 10) {
            this.dw4A();
            return
        }
        var bd3x;
        for (bd3x = 0; bd3x < Hh4l.length; bd3x++) {
            if (Hh4l[bd3x] == hv6p) {
                this.nq8i();
                return
            }
        }
        if (!kg7Z || !hv6p)
            return;
        var f3x = a2x.dq4u(a2x.ib6V(a2x.bP3x(bQW3x, {
            username: kg7Z,
            userId: hv6p
        })));
        var bE3x = this.bCK9B.parentNode;
        if (this.bQV3x) {
            this.Yh0x()
        }
        bE3x.insertBefore(f3x, this.bCK9B);
        this.dG4K.value = "";
        var br3x = a2x.I3x(this.o3x, "j-receiver").length;
        if (br3x > 1)
            a2x.Y3x(this.yF1x, "display", "none");
        this.bcm2x();
        this.JC4G()
    }
    ;
    b2x.Yh0x = function() {
        var Kw5B = a2x.I3x(this.o3x, "j-receiver");
        var bd3x;
        if (Kw5B.length > 0) {
            for (bd3x = 0; bd3x < Kw5B.length; bd3x++) {
                a2x.cK4O(Kw5B[bd3x], false)
            }
        }
    }
    ;
    b2x.bQG3x = function() {
        this.dG4K.value = ""
    }
    ;
    b2x.bQC2x = function(r3x) {
        this.dw4A(!0);
        var Kw5B = a2x.I3x(this.o3x, "j-receiver");
        a2x.cK4O(Kw5B[r3x], false);
        this.JC4G()
    }
    ;
    b2x.um0x = function() {
        var bi3x = this.dG4K.value;
        var bw3x = bi3x.trim().toLowerCase();
        var i3x;
        bw3x = bw3x.replace(/\[/g, "\\[");
        bw3x = bw3x.replace(/\]/g, "\\]");
        i3x = this.bCL9C(bw3x);
        this.bQl2x(i3x)
    }
    ;
    b2x.nq8i = function(d2x) {
        a2x.Y3x(this.Yd0x, "display", "none")
    }
    ;
    b2x.dw4A = function(gE5J) {
        if (gE5J && this.mb7U) {
            a2x.Y3x(this.mb7U, "display", "none");
            return
        }
        if (this.mb7U)
            a2x.Y3x(this.mb7U, "display", "block")
    }
    ;
    b2x.bQI3x = function(d2x) {
        h3x.cg4k(d2x);
        var cZ4d = d2x.target || d2x.srcElement;
        if (a2x.bB3x(cZ4d, "j-flag"))
            return;
        var bE3x = cZ4d.nodeName.toLowerCase() == "a" ? cZ4d.parentNode : cZ4d.parentNode.parentNode;
        var kg7Z = a2x.fQ5V(bE3x, "data-username");
        var hv6p = a2x.fQ5V(bE3x, "data-userId");
        this.bbP2x(kg7Z, hv6p);
        this.nq8i();
        a2x.Y3x(this.yF1x, "display", "none")
    }
    ;
    b2x.bQH3x = function(d2x) {
        h3x.bh3x(d2x);
        var cZ4d = d2x.target || d2x.srcElement;
        if (a2x.bB3x(cZ4d.parentNode, "j-receiver")) {
            a2x.cK4O(cZ4d.parentNode, false);
            this.dw4A(!0);
            this.JC4G()
        } else
            this.dG4K.focus()
    }
    ;
    b2x.bcm2x = function() {
        this.bbW2x.innerHTML = this.dG4K.value;
        var dn4r = this.bbW2x.offsetWidth + 2;
        a2x.Y3x(this.dG4K, "width", dn4r + "px")
    }
    ;
    b2x.JC4G = function() {
        var XY0x = a2x.hR6L(this.dG4K, this.o3x).y;
        var bCC9t = Math.floor((XY0x - 8) / 27);
        if (bCC9t < 0)
            return;
        a2x.Y3x(this.bbQ2x, "height", 19 + bCC9t * 29 + "px")
    }
    ;
    b2x.JA4E = function() {
        var py8q = ["height", "paddingLeft", "paddingTop", "paddingRight", "paddingBottom", "fontSize", "fontFamily", "lineHeight"];
        for (var i = 0; i < py8q.length; i++) {
            a2x.Y3x(this.bbW2x, py8q[i], a2x.da4e(this.dG4K, py8q[i]))
        }
    }
    ;
    b2x.bCP9G = function(dr4v, C3x) {
        var cU4Y = C3x ? C3x : window.GUser.userId;
        var V3x = "/api/user/getfollows/" + cU4Y;
        var fy5D = v3x.bq3x(V3x, {
            sync: false,
            method: "get",
            query: "offset = 0&limit=1000&order=true",
            onload: dr4v.g3x(this),
            onerror: function(i3x) {
                this.ba3x = []
            },
            onbeforerequest: function(i3x) {}
        })
    }
    ;
    b2x.bCM9D = function(i3x) {
        this.ba3x = JSON.parse(i3x).follow || [];
        var C3x = GUser.userId;
        for (var i = 0; i < this.ba3x.length; i++) {
            if (this.ba3x[i].userId == C3x) {
                this.ba3x.splice(i, 1);
                continue
            }
            this.ba3x[i].avatarUrl = this.ba3x[i].avatarUrl + "?param=30y30"
        }
    }
    ;
    b2x.bQu2x = function(i3x) {
        if (this.ba3x[0])
            return;
        this.bCM9D(i3x);
        this.um0x()
    }
    ;
    b2x.bCL9C = function(bw3x) {
        var bw3x = bw3x ? bw3x : "";
        this.ba3x = this.ba3x[0] ? this.ba3x : [];
        var br3x = this.ba3x.length;
        var KF5K = this.Kr5w();
        var rE9v = [];
        var KN5S, KT5Y, bcF2x;
        if (!this.ba3x[0])
            return rE9v;
        for (var bd3x = 0; bd3x < br3x; bd3x++) {
            bcF2x = false;
            for (var v3x = 0; v3x < KF5K.length; v3x++) {
                if (this.ba3x[bd3x].userId == KF5K[v3x]) {
                    bcF2x = true;
                    break
                }
            }
            if (bcF2x)
                continue;
            KN5S = this.ba3x[bd3x].nickname.toLowerCase().search(bw3x);
            KT5Y = this.ba3x[bd3x].py ? this.ba3x[bd3x].py.toLowerCase().search(bw3x) : -1;
            if (KN5S !== -1 || KT5Y != -1)
                rE9v.push(this.ba3x[bd3x])
        }
        return rE9v
    }
    ;
    b2x.bQl2x = function(i3x) {
        a2x.dL4P(this.Yd0x, bQX3x, {
            users: i3x
        });
        a2x.y3x(a2x.I3x(this.o3x, "j-item")[0], "j-selected");
        this.fg5l = a2x.I3x(this.o3x, "j-item");
        a2x.Y3x(this.Yd0x, "display", "block")
    }
    ;
    b2x.Kr5w = function() {
        var rE9v = a2x.I3x(this.o3x, "j-receiver") || [];
        var hv6p = [];
        for (var i = 0; i < rE9v.length; i++) {
            hv6p.push(a2x.fQ5V(rE9v[i], "data-id"))
        }
        return hv6p
    }
    ;
    b2x.cwA1x = function() {
        var hv6p = this.Kr5w();
        var rE9v = [];
        for (var i = 0; i < hv6p.length; i++) {
            for (var j = 0; j < this.ba3x.length; j++) {
                if (hv6p[i] == this.ba3x[j].userId)
                    rE9v.push(this.ba3x[j])
            }
        }
        return rE9v
    }
    ;
    b2x.bQg2x = function() {
        this.Yh0x()
    }
    ;
    D3x.CJ2x.N3x = function(e3x) {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            n3x.nz8r.N3x({
                title: "登录"
            });
            return
        }
        e3x = e3x || {};
        if (e3x.parent === undefined)
            e3x.parent = document.body;
        !!this.eM5R && this.eM5R.S3x();
        this.eM5R = this.B3x(e3x)
    }
    ;
    D3x.CJ2x.bp3x = function() {
        !!this.eM5R && this.eM5R.S3x()
    }
    ;
    D3x.CJ2x.Dd3x = function() {
        return this.nq8i()
    }
    ;
    D3x.CJ2x.cwC1x = function() {
        return this.um0x()
    }
})();
(function() {
    var c2x = NEJ.P, a2x = c2x("nej.e"), k3x = c2x("nej.u"), h3x = c2x("nej.v"), l3x = c2x("nm.x"), n3x = c2x("nm.l"), b2x, K3x;
    n3x.GO4S = NEJ.C();
    b2x = n3x.GO4S.O3x(n3x.blH4L);
    K3x = n3x.GO4S.cf4j;
    b2x.bk3x = function() {
        var Df3x;
        var bQc2x = function(A3x, J3x) {
            Df3x = Df3x || [];
            if (J3x != "18")
                Df3x.push({
                    key: J3x,
                    value: A3x
                })
        };
        return function(e3x) {
            this.bl3x(e3x);
            if (e3x.upwards) {
                a2x.y3x(this.o3x, "m-emts-up")
            } else {
                a2x.w3x(this.o3x, "m-emts-up")
            }
            if (e3x.rightwards) {
                a2x.y3x(this.o3x, "m-emts-right")
            } else {
                a2x.w3x(this.o3x, "m-emts-right")
            }
            if (!Df3x) {
                var bv3x = l3x.ceK7D();
                k3x.ej5o(bv3x, bQc2x)
            }
            var br3x = Df3x.length;
            Df3x.splice(br3x - 2, 0, {
                key: "18",
                value: "186"
            });
            this.XV0x = Df3x;
            this.bQb2x = !!e3x.autoHide
        }
    }();
    b2x.bZ4d = function() {
        this.ca4e = "ntp-portrait"
    }
    ;
    b2x.bQ3x = function() {
        this.cb4f();
        var j3x = a2x.I3x(this.o3x, "j-flag");
        this.bC3x = j3x[0];
        this.bQa2x = j3x[1];
        this.bPZ2x = j3x[2];
        this.bPY2x = j3x[3];
        h3x.s3x(this.bC3x, "click", this.wu1x.g3x(this));
        h3x.s3x(this.bQa2x, "click", this.Dj3x.g3x(this, 1));
        h3x.s3x(this.bPY2x, "click", this.Dj3x.g3x(this, 2))
    }
    ;
    b2x.bcX2x = function(r3x) {
        this.XQ0x = r3x;
        var bj3x = (r3x - 1) * 50;
        var j3x = this.XV0x.slice(bj3x, Math.min(bj3x + 50, this.XV0x.length));
        this.bC3x.innerHTML = a2x.bP3x("jst-portrait", {
            plist: j3x
        }, {
            purl: l3x.bIJ0x
        });
        this.bPZ2x.innerText = r3x + "/" + Math.ceil(this.XV0x.length / 50)
    }
    ;
    b2x.Dj3x = function(r3x) {
        var bPW2x = Math.ceil(this.XV0x.length / 50);
        if (r3x == 1 && this.XQ0x == 1 || r3x == 2 && this.XQ0x == bPW2x)
            return;
        r3x == 1 ? this.bcX2x(this.XQ0x - 1) : this.bcX2x(this.XQ0x + 1)
    }
    ;
    b2x.wu1x = function(d2x) {
        var E3x = h3x.U3x(d2x, "d:text");
        if (!E3x)
            return;
        var d2x = {
            url: a2x.u3x(E3x, "url"),
            text: a2x.u3x(E3x, "text")
        };
        this.x3x("onselect", d2x);
        if (this.bQb2x && !d2x.stopped) {
            this.bp3x()
        }
    }
    ;
    b2x.N3x = function() {
        K3x.N3x.call(this);
        this.bcX2x(1)
    }
})();
(function() {
    var c2x = NEJ.P
      , h3x = c2x("nej.v")
      , k3x = c2x("nej.u")
      , cP4T = c2x("nej.p")
      , bb3x = c2x("nej.h")
      , H3x = c2x("nej.ut")
      , jw6q = /^[#?]+/
      , Er3x = /#(.*?)$/
      , vQ0x = window
      , bde2x = !history.pushState || cP4T.bag2x.android || !history.auto;
    var XO0x = function(V3x, bdg2x) {
        vQ0x.history[!bdg2x ? "pushState" : "replaceState"](null, document.title, V3x)
    };
    var XN0x = function() {
        return location.parse(vQ0x.location.href)
    };
    XO0x = XO0x.ed5i(function(d2x) {
        if (!bde2x)
            return;
        var bg3x = d2x.args;
        d2x.stopped = !0;
        V3x = bg3x[0].replace(jw6q, "");
        !bg3x[1] ? vQ0x.location.hash = V3x : vQ0x.location.replace("#" + V3x)
    });
    XN0x = XN0x.ed5i(function(d2x) {
        if (!bde2x)
            return;
        d2x.stopped = !0;
        var dF4J = Er3x.test(vQ0x.location.href) ? RegExp.$1 : "";
        d2x.value = location.parse(dF4J.replace(jw6q, ""))
    });
    location.redirect = function(V3x, bdg2x) {
        XO0x(V3x, bdg2x);
        return this
    }
    ;
    location.active = function() {
        var eY5d, V3x, iQ6K, cE4I, Rp8h;
        var bdi2x = function(hq6k) {
            if (!!cE4I) {
                cE4I = !1;
                return
            }
            var d2x = {
                oldValue: iQ6K,
                newValue: XN0x()
            };
            if (!!location.ignored) {
                location.ignored = !1
            } else {
                h3x.x3x(location, "beforeurlchange", d2x);
                if (d2x.stopped) {
                    if (!!iQ6K) {
                        cE4I = !0;
                        XO0x(iQ6K.href, !0)
                    }
                    return
                }
            }
            V3x = vQ0x.location.href;
            iQ6K = d2x.newValue;
            h3x.x3x(location, "urlchange", iQ6K);
            bb3x.blz4D(iQ6K.href)
        };
        var bCx9o = function() {
            if (V3x != vQ0x.location.href)
                bdi2x();
            eY5d = requestAnimationFrame(bCx9o)
        };
        return function(bL3x) {
            if (!!Rp8h)
                return this;
            Rp8h = !0;
            vQ0x = bL3x || window;
            if (bde2x && "onhashchange"in window && cP4T.ms7l.trident2) {
                h3x.s3x(vQ0x, "hashchange", bdi2x);
                bdi2x()
            } else if (!eY5d) {
                eY5d = requestAnimationFrame(bCx9o)
            }
            return this
        }
    }();
    location.parse = function() {
        var fW5b = /^https?:\/\/.*?\//i
          , jw6q = /[?#]/;
        return function(V3x) {
            var m3x = {
                href: V3x
            };
            V3x = (V3x || "").replace(fW5b, "/").split(jw6q);
            var ct4x = 1;
            if (V3x[0] == "/" && (V3x[1] || "").indexOf("/") == 0)
                ct4x = 2;
            m3x.path = V3x.splice(0, ct4x).join("?");
            m3x.query = k3x.hj6d(V3x.join("&"));
            return m3x
        }
    }();
    location.same = function(V3x) {
        return XN0x().href == V3x
    }
    ;
    H3x.fq5v.B3x({
        element: location,
        event: ["beforeurlchange", "urlchange"]
    })
})();
(function() {
    var c2x = NEJ.P
      , a2x = c2x("nej.e")
      , h3x = c2x("nej.v")
      , fL5Q = c2x("nm.ut");
    fL5Q.ub0x = function(eS5X) {
        var gr5w = {
            text: "",
            start: 0,
            end: 0
        };
        if (eS5X.setSelectionRange) {
            gr5w.start = eS5X.selectionStart;
            gr5w.end = eS5X.selectionEnd;
            gr5w.text = gr5w.start != gr5w.end ? eS5X.value.substring(gr5w.start, gr5w.end) : ""
        } else if (document.selection) {
            var i, XJ0x = document.selection.createRange(), xd1x = document.body.createTextRange();
            xd1x.moveToElementText(eS5X);
            gr5w.text = XJ0x.text;
            gr5w.bookmark = XJ0x.getBookmark();
            for (i = 0; xd1x.compareEndPoints("StartToStart", XJ0x) < 0 && XJ0x.moveStart("character", -1) !== 0; i++) {
                if (eS5X.value.charAt(i) == "\n") {
                    i++
                }
            }
            gr5w.start = i;
            gr5w.end = gr5w.text.length + gr5w.start
        }
        return gr5w
    }
    ;
    fL5Q.XH0x = function(eS5X, gr5w) {
        var xd1x;
        if (!gr5w) {
            gr5w = {
                text: "",
                start: 0,
                end: 0
            }
        }
        eS5X.focus();
        if (eS5X.setSelectionRange) {
            eS5X.setSelectionRange(gr5w.start, gr5w.end)
        } else if (eS5X.createTextRange) {
            xd1x = eS5X.createTextRange();
            if (eS5X.value.length === gr5w.start) {
                xd1x.collapse(false);
                xd1x.select()
            } else {
                xd1x.moveToBookmark(gr5w.bookmark);
                xd1x.select()
            }
        }
    }
    ;
    fL5Q.Gx4B = function(eS5X, gr5w, cL4P) {
        var gr5w = gr5w || {
            text: "",
            start: 0,
            end: 0
        };
        var bdt2x, bCw9n, xd1x, LW5b, bCv9m, bCr9i, Dt3x;
        this.XH0x(eS5X, gr5w);
        if (eS5X.setSelectionRange) {
            bdt2x = eS5X.value;
            bCw9n = bdt2x.substring(0, gr5w.start) + cL4P + bdt2x.substring(gr5w.end);
            bCv9m = bCr9i = gr5w.start + cL4P.length;
            Dt3x = eS5X.scrollTop;
            eS5X.value = bCw9n;
            if (eS5X.scrollTop != Dt3x) {
                eS5X.scrollTop = Dt3x
            }
            eS5X.setSelectionRange(bCv9m, bCr9i)
        } else if (eS5X.createTextRange) {
            LW5b = document.selection.createRange();
            LW5b.text = cL4P;
            LW5b.setEndPoint("StartToEnd", LW5b);
            LW5b.select()
        }
        h3x.x3x(eS5X, "keyup")
    }
})();
(function() {
    var c2x = NEJ.P, a2x = c2x("nej.e"), h3x = c2x("nej.v"), cP4T = c2x("nej.p"), k3x = c2x("nej.u"), ch4l = c2x("nej.ut"), D3x = c2x("nm.w"), fL5Q = c2x("nm.ut"), b2x;
    D3x.bCp9g = NEJ.C();
    b2x = D3x.bCp9g.O3x(ch4l.cz4D);
    b2x.cl4p = function(e3x) {
        this.cs4w(e3x)
    }
    ;
    b2x.bk3x = function(e3x) {
        this.bl3x(e3x);
        this.fM5R = e3x.txt;
        this.Du3x = e3x.sgtsContainer;
        this.bCo9f = e3x.sgtsList[0];
        this.XE0x = e3x.sgtsItem;
        this.nS8K = e3x.rangeData;
        this.Gt4x = e3x.atIndex;
        a2x.y3x(this.XE0x[0], "selected-item");
        this.Ml5q()
    }
    ;
    b2x.bD3x = function() {
        this.bH3x();
        h3x.ma7T(document.body, "keyup", this.bCn9e.g3x(this));
        h3x.ma7T(document.body, "click", this.bCl9c.g3x(this))
    }
    ;
    b2x.Ml5q = function() {
        this.bT3x([[document.body, "keyup", this.bCn9e.g3x(this)], [document.body, "click", this.bCl9c.g3x(this)], [this.fM5R, "keydown", this.bCk9b.g3x(this)], [this.fM5R, "keypress", this.bCk9b.g3x(this)], [this.bCo9f, "click", this.bCg9X.g3x(this)], [this.bCo9f, "mouseover", this.Dz3x.g3x(this)]])
    }
    ;
    b2x.Dz3x = function(d2x) {
        var cZ4d = h3x.U3x(d2x);
        var q3x = a2x.I3x(this.Du3x, "selected-item");
        if (a2x.bB3x(cZ4d, "j-sgt")) {
            a2x.w3x(q3x[0], "selected-item");
            a2x.y3x(cZ4d, "selected-item")
        }
    }
    ;
    b2x.bCn9e = function(d2x) {
        var q3x = a2x.I3x(this.Du3x, "selected-item");
        var br3x = this.XE0x.length;
        var iX6R = d2x.keyCode || d2x.which;
        var r3x, i3x;
        switch (iX6R) {
        case 38:
            r3x = a2x.fQ5V(q3x[0], "data-index") - 1 < 0 ? br3x - 1 : a2x.fQ5V(q3x[0], "data-index") - 1;
            a2x.w3x(q3x[0], "selected-item");
            a2x.y3x(this.XE0x[r3x], "selected-item");
            break;
        case 40:
            r3x = parseInt(a2x.fQ5V(q3x[0], "data-index")) + 1 >= br3x ? 0 : parseInt(a2x.fQ5V(q3x[0], "data-index")) + 1;
            a2x.w3x(q3x[0], "selected-item");
            a2x.y3x(this.XE0x[r3x], "selected-item");
            break;
        case 13:
            this.bCg9X(d2x);
            break;
        case 27:
            this.nq8i();
            break;
        case 32:
            var bi3x = this.fM5R.value;
            var r3x = fL5Q.ub0x(this.fM5R);
            if (bi3x.charAt(r3x.start - 1) !== " ")
                return;
            this.nq8i();
            break
        }
    }
    ;
    b2x.bCk9b = function(d2x) {
        var iX6R = d2x.keyCode || d2x.which;
        if (iX6R === 13 || iX6R === 38 || iX6R === 40) {
            h3x.cg4k(d2x);
            d2x.keyCode = 0;
            d2x.which = 0;
            d2x.returnvalue = false
        }
    }
    ;
    b2x.bCl9c = function(d2x) {
        var cZ4d = d2x.target || d2x.srcElement;
        if (cZ4d === this.fM5R)
            return;
        this.nq8i()
    }
    ;
    b2x.bCg9X = function(d2x) {
        h3x.bh3x(d2x);
        var q3x = a2x.I3x(this.Du3x, "selected-item")[0];
        var qY9P = d2x.target || d2x.srcElement;
        var t3x = d2x.type;
        if (a2x.bB3x(qY9P, "lst"))
            return;
        if (t3x == "click") {
            a2x.w3x(q3x, "selected-item");
            a2x.y3x(qY9P, "selected-item")
        } else
            qY9P = q3x;
        var i3x = qY9P.innerHTML + " ";
        this.nq8i();
        var gr5w = this.nS8K;
        gr5w.start = this.Gt4x + 1;
        if (cP4T.cR4V.browser == "ie" && cP4T.cR4V.version < "9.0") {
            this.fM5R.value = this.fM5R.value.substring(0, gr5w.start) + this.fM5R.value.substring(gr5w.end, this.fM5R.value.length);
            gr5w.end = gr5w.start
        }
        fL5Q.Gx4B(this.fM5R, gr5w, i3x);
        h3x.x3x(this.fM5R, "keyup")
    }
    ;
    b2x.nq8i = function(d2x) {
        if (!!this.Du3x)
            a2x.Y3x(this.Du3x, "display", "none");
        this.S3x()
    }
    ;
    b2x.um0x = function(d2x) {
        if (!!this.Du3x)
            a2x.Y3x(this.Du3x, "display", "block")
    }
})();
(function() {
    var c2x = NEJ.P, a2x = c2x("nej.e"), h3x = c2x("nej.v"), k3x = c2x("nej.u"), v3x = c2x("nej.j"), D3x = c2x("nm.w"), ch4l = c2x("nej.ut"), bI3x = c2x("nej.ui"), b2x;
    var bPn2x = ".u-atlist{position: absolute;z-index: 10000;}.f-thide.selected-item{background-color: #eee;}";
    var bPl2x = a2x.ek5p("m-wgt-atlist");
    var hW6Q = a2x.rL9C(bPn2x);
    D3x.bCe9V = NEJ.C();
    b2x = D3x.bCe9V.O3x(bI3x.eo5t);
    b2x.cl4p = function(e3x) {
        this.fz5E = {};
        this.cs4w()
    }
    ;
    b2x.bk3x = function(e3x) {
        this.fz5E.txt = a2x.z3x(e3x.target);
        this.fz5E.data = e3x.data;
        this.fz5E.offset = e3x.offset;
        this.fz5E.rangeData = e3x.rangeData;
        this.fz5E.atIndex = e3x.atIndex;
        this.bPe2x(e3x);
        this.bl3x(e3x);
        this.fz5E.sgtsContainer = this.o3x;
        this.fz5E.sgtsList = a2x.I3x(this.o3x, "lst");
        this.fz5E.sgtsItem = a2x.I3x(this.o3x, "f-thide");
        this.Iv4z(e3x);
        this.bOW2x = D3x.bCp9g.B3x(this.fz5E)
    }
    ;
    b2x.bD3x = function(e3x) {
        this.bH3x();
        this.bOW2x.S3x()
    }
    ;
    b2x.bZ4d = function() {
        this.lg7Z = hW6Q
    }
    ;
    b2x.bQ3x = function() {
        this.cb4f()
    }
    ;
    b2x.bPe2x = function(e3x) {
        this.o3x = a2x.dq4u(a2x.ib6V(a2x.bP3x(bPl2x, e3x.data)))
    }
    ;
    b2x.Iv4z = function(e3x) {
        var bBV9M = a2x.I3x(this.o3x, "selected-item")[0];
        if (bBV9M)
            a2x.w3x(bBV9M, "selected-item");
        var cN4R = e3x.offset.x + "px";
        var gN5S = e3x.offset.y + "px";
        a2x.Y3x(this.o3x, "left", cN4R);
        a2x.Y3x(this.o3x, "top", gN5S)
    }
})();
(function() {
    var c2x = NEJ.P
      , v3x = c2x("nej.j")
      , fL5Q = c2x("nm.ut");
    fL5Q.bBO9F = function(bi3x) {
        if (!GUser || !GUser.userId || GUser.userId <= 0)
            return;
        var cO4S = /@([a-zA-Z0-9_\-\u4E00-\u9FA5]+)/g;
        var Gk3x = bi3x.match(cO4S) || [];
        for (var bd3x = 0; bd3x < Gk3x.length; bd3x++) {
            Gk3x[bd3x] = Gk3x[bd3x].split("@")[1]
        }
        Gk3x = Gk3x.reverse();
        var hv6p = GUser.userId;
        var bOK2x = v3x.st9k("mentioners" + hv6p) || [];
        var ja6U = Gk3x.concat(bOK2x);
        if (ja6U.length > 10)
            ja6U = ja6U.slice(0, 10);
        v3x.vz0x("mentioners" + hv6p, ja6U)
    }
    ;
    fL5Q.bOJ2x = function() {
        if (!GUser || !GUser.userId || GUser.userId <= 0)
            return;
        var hv6p = GUser.userId;
        return v3x.st9k("mentioners" + hv6p) || []
    }
})();
(function() {
    var c2x = NEJ.P, a2x = c2x("nej.e"), h3x = c2x("nej.v"), cP4T = c2x("nej.p"), v3x = c2x("nej.j"), k3x = c2x("nej.u"), ch4l = c2x("nej.ut"), D3x = c2x("nm.w"), fL5Q = c2x("nm.ut"), b2x;
    D3x.bBN9E = NEJ.C();
    b2x = D3x.bBN9E.O3x(ch4l.cz4D);
    b2x.cl4p = function(e3x) {
        this.cs4w(e3x);
        this.bBK8C()
    }
    ;
    b2x.bk3x = function(e3x) {
        this.bl3x(e3x);
        this.fM5R = e3x.txt;
        this.o3x = e3x.body;
        this.bBJ8B = e3x.before;
        this.Nn6h = e3x.flag;
        this.bOA2x = e3x.after;
        this.pM9D = [];
        if (cP4T.cR4V.browser != "ie") {
            setTimeout(function() {
                this.ld7W()
            }
            .g3x(this), 0)
        }
        this.Ml5q()
    }
    ;
    b2x.bD3x = function() {
        this.bH3x();
        if (this.tD0x)
            this.tD0x.S3x();
        delete this.tD0x
    }
    ;
    b2x.Ml5q = function() {
        this.bT3x([[this.fM5R, "keyup", this.bBI8A.g3x(this, this.fM5R)], [this.fM5R, "click", this.bBI8A.g3x(this, this.fM5R)], [this.fM5R, "focus", this.ld7W.g3x(this)]])
    }
    ;
    b2x.ld7W = function(d2x) {
        this.nS8K = fL5Q.ub0x(this.fM5R)
    }
    ;
    b2x.bBK8C = function() {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            window.GFollowers = [];
            return
        }
        var cU4Y = window.GUser.userId;
        var V3x = "/api/user/getfollows/" + cU4Y;
        var fy5D = v3x.bq3x(V3x, {
            sync: false,
            method: "get",
            query: "offset = 0&limit=1000&order=true",
            onload: function(i3x) {
                window.GFollowers = JSON.parse(i3x).follow
            }
            .g3x(this),
            onerror: function(i3x) {},
            onbeforerequest: function(i3x) {}
        })
    }
    ;
    b2x.bBE8w = function(index) {
        var A3x = this.fM5R.value, bj3x, beA3x, beC3x, MK5P;
        this.bBJ8B.innerHTML = k3x.dJ4N(A3x.substr(0, index)).replace(/\n/g, "<br/>").replace(/\s/g, '<span class="j-test" style="display:inline-block;white-space: pre-wrap; font-family:Arial, Helvetica, sans-serif;"></span>');
        var nQ8I = a2x.I3x(this.bBJ8B, "j-test");
        for (var bd3x = 0; bd3x < nQ8I.length; bd3x++) {
            nQ8I[bd3x].innerText = " "
        }
        this.Nn6h.innerHTML = A3x.charAt(index);
        this.bOA2x.innerHTML = k3x.dJ4N(A3x.substr(index + 1, A3x.length));
        MK5P = parseInt(a2x.da4e(this.fM5R, "lineHeight"));
        a2x.Y3x(this.o3x, "display", "block");
        beA3x = a2x.hR6L(this.Nn6h, this.o3x);
        beC3x = a2x.hR6L(this.fM5R);
        a2x.Y3x(this.o3x, "display", "none");
        var cN4R = beA3x.x + beC3x.x;
        var gN5S = beA3x.y + beC3x.y + MK5P;
        bj3x = {
            x: cN4R,
            y: gN5S
        };
        this.bOp2x(bj3x)
    }
    ;
    b2x.bBI8A = function(eS5X, d2x) {
        h3x.cg4k(d2x);
        var eS5X = eS5X;
        var A3x = eS5X.value;
        var br3x = A3x.length;
        var r3x = fL5Q.ub0x(eS5X).start;
        var bBB8t = 0;
        var iX6R = d2x.keyCode || d2x.which;
        var ja6U;
        this.nS8K = fL5Q.ub0x(eS5X);
        var bBA8s = false;
        for (var i = 1; i < 20; i++) {
            ja6U = r3x - i;
            if (A3x.charAt(ja6U) === " ")
                break;
            if (A3x.charAt(ja6U) === "@") {
                bBA8s = true;
                this.Gt4x = bBB8t = ja6U;
                break
            }
        }
        if (bBA8s && d2x.shiftKey === false && iX6R !== 38 && iX6R !== 40) {
            if (iX6R !== 27 && iX6R !== 13) {
                this.tD0x ? this.tD0x.S3x() : null;
                this.bBE8w(bBB8t)
            }
        } else if (iX6R !== 38 && iX6R !== 40 && d2x.keyCode !== 32) {
            this.tD0x ? this.tD0x.S3x() : null
        }
    }
    ;
    b2x.bOp2x = function(bj3x) {
        var bj3x = bj3x;
        var i3x = this.yv1x();
        var e3x = {
            parent: document.body,
            offset: bj3x,
            data: i3x,
            target: this.fM5R,
            rangeData: this.nS8K,
            atIndex: this.Gt4x
        };
        this.tD0x ? this.tD0x.S3x() : null;
        this.tD0x = D3x.bCe9V.B3x(e3x)
    }
    ;
    b2x.yv1x = function() {
        var bOm2x = fL5Q.ub0x(this.fM5R).start;
        var bOk2x = this.Gt4x + 1;
        var bBz8r = fL5Q.bOJ2x() || [];
        var bBy8q = [];
        var bw3x = this.fM5R.value.substring(bOk2x, bOm2x).toLowerCase();
        bw3x = bw3x.replace(/\[/g, "\\[");
        bw3x = bw3x.replace(/\]/g, "\\]");
        if (window.GFollowers) {
            this.pM9D = window.GFollowers[0] ? window.GFollowers : []
        } else
            this.pM9D = [];
        if (!this.pM9D[0])
            this.bBK8C();
        for (var bd3x = 0; bd3x < bBz8r.length; bd3x++) {
            for (var v3x = 0; v3x < this.pM9D.length; v3x++) {
                if (this.pM9D[v3x].nickname == bBz8r[bd3x])
                    bBy8q.push(this.pM9D[v3x])
            }
        }
        this.pM9D = k3x.cle8W(this.pM9D, bBy8q, {
            union: true,
            begin: true
        });
        var ctF0x = this.pM9D.length;
        var Xh0x = [];
        var KN5S, KT5Y;
        if (!this.pM9D[0])
            return {
                suggests: Xh0x
            };
        for (var i = 0; i < ctF0x; i++) {
            KN5S = this.pM9D[i].nickname.toLowerCase().search(bw3x);
            KT5Y = this.pM9D[i].py ? this.pM9D[i].py.toLowerCase().search(bw3x) : -1;
            if (KN5S !== -1 || KT5Y != -1)
                Xh0x.push(this.pM9D[i]);
            if (Xh0x.length === 10)
                break
        }
        return {
            suggests: Xh0x
        }
    }
    ;
    b2x.MW6Q = function() {
        var gr5w = this.nS8K || {
            text: "",
            start: 0,
            end: 0
        };
        h3x.x3x(this.fM5R, "focus");
        fL5Q.Gx4B(this.fM5R, gr5w, "@");
        this.nS8K = fL5Q.ub0x(this.fM5R);
        this.Gt4x = gr5w.start;
        this.bBE8w(this.Gt4x)
    }
    ;
    b2x.Dd3x = function() {
        if (this.tD0x)
            this.tD0x.S3x()
    }
})();
(function() {
    var c2x = NEJ.P, a2x = c2x("nej.e"), h3x = c2x("nej.v"), k3x = c2x("nej.u"), v3x = c2x("nej.j"), D3x = c2x("nm.w"), ch4l = c2x("nej.ut"), bI3x = c2x("nej.ui"), b2x;
    var ctB0x = "#shadow-box{position: absolute;display: block;left: 450px;top: 1020px;border: 1px solid black;word-wrap: break-word;display:none;opacity: 0;filter: Alpha(opacity=0);z-index: -1000;}";
    var ctt0x = '<div id="shadow-box" style="word-wrap:break-word"><span  class="node-before"></span><span>@</span><span  class="node-after"></span></div>';
    var gh5m = a2x.ib6V(ctt0x);
    var hW6Q = a2x.rL9C(ctB0x);
    D3x.Nb6V = NEJ.C();
    b2x = D3x.Nb6V.O3x(bI3x.eo5t);
    b2x.cl4p = function(e3x) {
        this.fz5E = {};
        this.cs4w()
    }
    ;
    b2x.bk3x = function(e3x) {
        this.bl3x(e3x);
        this.fz5E.txt = a2x.z3x(e3x.target);
        this.JA4E();
        this.Nc6W = D3x.bBN9E.B3x(this.fz5E)
    }
    ;
    b2x.bD3x = function(e3x) {
        this.bH3x();
        this.Nc6W.S3x()
    }
    ;
    b2x.bZ4d = function() {
        this.ca4e = gh5m;
        this.lg7Z = hW6Q
    }
    ;
    b2x.bQ3x = function() {
        this.cb4f();
        var j3x = a2x.cQ4U(a2x.z3x(this.o3x));
        this.fz5E.body = this.o3x;
        this.fz5E.before = j3x[0];
        this.fz5E.flag = j3x[1];
        this.fz5E.after = j3x[2]
    }
    ;
    b2x.JA4E = function() {
        var py8q = ["width", "borderWidth", "border-style", "outline", "marginLeft", "marginTop", "marginRight", "marginBottom", "height", "paddingLeft", "paddingTop", "fontSize", "wordWrap", "fontFamily", "lineHeight", "overflowX", "overflowY"];
        for (var i = 0; i < py8q.length; i++) {
            if (py8q[i] === "width" && a2x.da4e(this.fz5E.txt, py8q[i]) == "100%") {
                a2x.Y3x(this.o3x, py8q[i], this.fz5E.txt.offsetWidth + "px");
                continue
            }
            a2x.Y3x(this.o3x, py8q[i], a2x.da4e(this.fz5E.txt, py8q[i]))
        }
    }
    ;
    b2x.MW6Q = function() {
        this.Nc6W.MW6Q()
    }
    ;
    b2x.Dd3x = function() {
        this.Nc6W.Dd3x()
    }
})();
(function() {
    var c2x = NEJ.P, X3x = NEJ.O, bn3x = NEJ.F, fc5h = NEJ.R, a2x = c2x("nej.e"), h3x = c2x("nej.v"), k3x = c2x("nej.u"), H3x = c2x("nej.ut"), jE7x = c2x("nm.c"), Q3x = {}, b2x;
    if (!!jE7x.beU3x)
        return;
    jE7x.beU3x = NEJ.C();
    b2x = jE7x.beU3x.O3x(H3x.cz4D);
    b2x.cl4p = function() {
        this.cs4w()
    }
    ;
    b2x.bk3x = function(e3x) {
        this.bl3x(e3x)
    }
    ;
    b2x.bD3x = function() {
        this.bH3x()
    }
    ;
    b2x.DM3x = function(eH5M, dr4v, Xf0x) {
        if (Q3x[eH5M]) {
            this.hK6E("register commonJST[" + eH5M + "] duplicate");
            return
        }
        if (!k3x.ga5f(dr4v)) {
            dr4v = ctl.comJST.ctm0x(eH5M, dr4v, Xf0x)
        }
        Q3x[eH5M] = dr4v
    }
    ;
    b2x.csT0x = function(Xd0x) {
        if (k3x.ep5u(Xd0x)) {
            k3x.be3x(Xd0x, function(q3x) {
                ctl.comJST.DM3x.apply(this, q3x)
            }, this)
        } else if (k3x.kR7K(Xd0x)) {
            k3x.ej5o(Xd0x, function(et5y, J3x) {
                ctl.comJST.DM3x(J3x, et5y)
            })
        }
    }
    ;
    b2x.ctm0x = function(eH5M, ts0x, Xf0x) {
        ts0x = ts0x || {};
        NEJ.X(ts0x, {
            comJST: this.nZ8R
        });
        if (ts0x.resetDataName && !k3x.ep5u(ts0x.resetDataName)) {
            ts0x.resetDataName = [ts0x.resetDataName]
        }
        return function() {
            var i3x = arguments[0]
              , iU6O = arguments[1];
            if (ts0x.resetDataName) {
                var ja6U = {};
                for (var i = 0, ii = ts0x.resetDataName.length; i < ii; i++) {
                    ja6U[ts0x.resetDataName[i]] = arguments[i]
                }
                i3x = ja6U;
                iU6O = arguments[ii]
            }
            NEJ.X(i3x, ts0x, dC4G);
            if (Xf0x) {
                iU6O = iU6O || {};
                NEJ.X(iU6O, Xf0x)
            }
            return a2x.bP3x(eH5M, i3x, iU6O)
        }
    }
    ;
    b2x.nZ8R = function(eH5M) {
        if (!Q3x[eH5M]) {
            this.hK6E("commonJST[" + eH5M + "] is unregister");
            return ""
        } else {
            return Q3x[eH5M].apply(null, fc5h.slice.call(arguments, 1))
        }
    }
    ;
    b2x.dump = function() {
        return Q3x
    }
    ;
    b2x.hK6E = function(csS0x) {
        if (console && console.log) {
            console.log(csS0x)
        }
    }
    ;
    var dC4G = function(et5y, J3x) {
        return J3x == "resetDataName"
    };
    c2x("ctl").comJST = jE7x.beU3x.fY5d()
})();
(function() {
    var c2x = NEJ.P, X3x = NEJ.O, bn3x = NEJ.F, fc5h = NEJ.R, a2x = c2x("nej.e"), h3x = c2x("nej.v"), k3x = c2x("nej.u"), H3x = c2x("nej.ut"), jE7x = c2x("nm.c"), Q3x = {}, b2x;
    if (!!jE7x.bfk3x)
        return;
    jE7x.bfk3x = NEJ.C();
    b2x = jE7x.bfk3x.O3x(H3x.cz4D);
    b2x.cl4p = function() {
        this.cs4w();
        var e3x = {
            "com-mv-artists": function(fm5r, dI4M, Dl3x, bfl3x) {
                return a2x.bP3x("com-mv-artists", {
                    artists: fm5r,
                    clazz: dI4M,
                    boxClazz: bfl3x,
                    mark: Dl3x || function(cC4G) {
                        return cC4G
                    }
                    ,
                    escape: k3x.dJ4N,
                    comJST: ctl.comJST.nZ8R
                })
            },
            "com-album-artists": function(fm5r, dI4M, Dl3x, bfl3x) {
                return a2x.bP3x("com-album-artists", {
                    artists: fm5r,
                    clazz: dI4M,
                    boxClazz: bfl3x,
                    mark: Dl3x || function(cC4G) {
                        return cC4G
                    }
                    ,
                    escape: k3x.dJ4N,
                    comJST: ctl.comJST.nZ8R
                })
            },
            "com-artists-title": {
                resetDataName: ["artists"],
                escape: k3x.dJ4N
            }
        };
        for (var C3x in e3x) {
            ctl.comJST.DM3x(C3x, e3x[C3x])
        }
    }
    ;
    b2x.bk3x = function(e3x) {
        this.bl3x(e3x)
    }
    ;
    b2x.bD3x = function() {
        this.bH3x()
    }
    ;
    c2x("ctl").comJSTUtil = jE7x.bfk3x.fY5d()
})();
(function() {
    var c2x = NEJ.P, X3x = NEJ.O, a2x = c2x("nej.e"), cP4T = c2x("nej.p"), h3x = c2x("nej.v"), k3x = c2x("nej.u"), H3x = c2x("nej.ut"), v3x = c2x("nej.j"), D3x = c2x("nm.w"), fL5Q = c2x("nm.ut"), p3x = c2x("nm.d"), l3x = c2x("nm.x"), n3x = c2x("nm.l"), bfm3x = [2, 3], dD4H = ["sn", "db"], b2x, K3x, csR0x = {
        13: "playlist",
        17: "djprogram",
        18: "song",
        19: "album",
        20: "artist",
        21: "mv",
        24: "topic",
        25: "activity",
        70: "djradio",
        38: "concert",
        39: "video"
    }, WY0x = {
        djprogram: "节目",
        album: "专辑",
        playlist: "歌单",
        song: "单曲",
        yunsong: "单曲",
        artist: "歌手",
        mv: "MV",
        topic: "音乐专栏",
        djradio: "电台",
        concert: "演出",
        video: "视频"
    }, bBs8k = {
        djprogram: " - ",
        album: " - ",
        playlist: " by ",
        song: " - ",
        yunsong: " - ",
        artist: "",
        mv: " - ",
        djradio: " by "
    }, csE0x = {
        0: 13,
        1: 17,
        3: 19,
        4: 18,
        5: 21,
        6: 24,
        14: 70,
        17: 20
    }, DP3x = {
        pubEventWithPics: false,
        pubEventWithoutResource: false,
        pubEventWithPictureForbiddenNotice: "等级达到Lv.4，即可添加图片"
    };
    n3x.wK1x = NEJ.C();
    b2x = n3x.wK1x.O3x(n3x.dV5a);
    K3x = n3x.wK1x.cf4j;
    b2x.bk3x = function(e3x) {
        if (e3x.onclose === undefined) {
            e3x.onclose = this.bBp8h.g3x(this)
        }
        this.bl3x(e3x);
        this.yf1x = e3x.isPub;
        this.iT6N = e3x.rid || -1;
        this.el5q = e3x.type || -1;
        this.bfF3x = e3x.purl;
        this.NJ7C = e3x.name || "";
        this.NK7D = e3x.author || "";
        this.bfJ3x = e3x.authors || "";
        this.WM0x = e3x.actId;
        this.WL0x = e3x.actName;
        this.bBo8g = e3x.title;
        this.WK0x = {};
        this.csk0x = e3x.mesg || "";
        this.csg0x = e3x.placeholder || "说点什么吧";
        this.bfS3x = e3x.hideTip;
        this.crT0x = e3x.videoDescription;
        this.crE0x = e3x.videoJumpUrl;
        var j3x, fH5M = +(new Date);
        try {
            j3x = top.localCache.z3x("user") || {}
        } catch (e) {
            j3x = {}
        }
        for (var i = 0, j3x = j3x.bindings || [], er5w; i < j3x.length; ++i) {
            er5w = !j3x[i].tokenJsonStr ? null : JSON.parse(j3x[i].tokenJsonStr);
            if (!er5w || er5w.expires_in === undefined)
                continue;
            var WJ0x = parseInt(er5w.expires_in)
              , WH0x = parseInt(j3x[i].refreshTime)
              , crC0x = (WJ0x + WH0x) * 1e3 - 5 * 60 * 1e3;
            if (crC0x > fH5M)
                this.WK0x[j3x[i].type] = !0
        }
        this.uv0x = D3x.CJ2x.B3x({
            parent: this.WG0x,
            err: this.bBk8c
        });
        if (this.gF5K) {
            this.gF5K.S3x()
        }
        this.gF5K = D3x.Nb6V.B3x({
            parent: document.body,
            target: this.eQ5V
        });
        if (this.el5q == 24 || this.el5q == 21 || this.Eb3x()) {
            this.xA1x.style.display = "none"
        } else {
            this.xA1x.style.display = "";
            this.nW8O = D3x.bmF5K.B3x({
                parent: this.bgg3x,
                button: this.xA1x,
                onstartupload: this.bBi8a.g3x(this, true),
                onfinishupload: this.bBi8a.g3x(this, false)
            })
        }
        if (this.Eb3x()) {
            this.oS8K.innerText = "";
            a2x.y3x(this.oS8K, "info-video");
            a2x.y3x(this.bgj3x, "f-hide")
        } else {
            a2x.w3x(this.bgj3x, "f-hide")
        }
    }
    ;
    b2x.bD3x = function() {
        this.bH3x();
        if (this.uv0x) {
            this.uv0x.S3x();
            delete this.uv0x
        }
        if (this.gF5K) {
            this.gF5K.S3x();
            delete this.gF5K
        }
        if (this.nW8O) {
            this.nW8O.S3x();
            delete this.nW8O
        }
        if (this.lT7M) {
            this.lT7M.S3x();
            delete this.lT7M
        }
    }
    ;
    b2x.bZ4d = function() {
        this.ca4e = "m-wgt-sharewin"
    }
    ;
    b2x.bQ3x = function() {
        this.cb4f();
        this.bBh8Z = a2x.cQ4U(this.o3x)[0];
        var bo3x = a2x.I3x(this.o3x, "j-flag");
        this.pc8U = bo3x.shift();
        this.bBk8c = bo3x.shift();
        this.WG0x = bo3x.shift();
        this.eQ5V = bo3x.shift();
        this.oS8K = bo3x.shift();
        this.bgu3x = bo3x.shift();
        this.crh0x = bo3x.shift();
        this.xA1x = bo3x.shift();
        this.ci4m = bo3x.shift();
        this.bgg3x = bo3x.shift();
        this.AG2x = bo3x.shift();
        this.cwR1x = bo3x.shift();
        this.bgj3x = bo3x.shift();
        this.eb5g = bo3x.shift();
        this.Wu9l = a2x.I3x(this.bgj3x, "j-t");
        this.Ay2x = H3x.Cc2x.B3x({
            list: a2x.cQ4U(this.pc8U),
            selected: "z-slt",
            onchange: this.bgC3x.g3x(this)
        });
        if (cP4T.cR4V.browser == "ie" && cP4T.cR4V.version < "8.0") {
            a2x.Y3x(this.WG0x, "position", "relative");
            a2x.Y3x(this.WG0x, "zIndex", "10")
        }
        h3x.s3x(window, "snsbind", this.Ou7n.g3x(this));
        h3x.s3x(this.eQ5V, "input", this.fo5t.g3x(this));
        h3x.s3x(this.eQ5V, "keyup", this.sL9C.g3x(this));
        h3x.s3x(this.o3x, "click", this.cx4B.g3x(this));
        this.R3x = p3x.biQ4U.B3x();
        this.R3x.s3x("onshareall", this.Wt9k.g3x(this, 0));
        this.R3x.s3x("onshareerror", this.hZ6T.g3x(this));
        this.R3x.s3x("onshareprivate", this.Wt9k.g3x(this, 1));
        this.Ws9j = p3x.AD2x.B3x();
        this.hK6E = p3x.hQ6K.B3x();
        try {
            this.OA7t = top.api.sharePermission
        } catch (e) {}
        if (!this.OA7t) {
            this.OA7t = DP3x;
            v3x.bq3x("/api/event/user/permission", {
                type: "json",
                onload: function(d2x) {
                    if (d2x.code == 200) {
                        this.OA7t = NEJ.EX(DP3x, d2x)
                    }
                }
                .g3x(this)
            })
        }
    }
    ;
    b2x.bgC3x = function(d2x) {
        d2x.index == 0 ? a2x.w3x(this.bBh8Z, "m-plshare") : a2x.y3x(this.bBh8Z, "m-plshare");
        this.WG0x.style.display = d2x.index == 0 ? "none" : "";
        this.crh0x.style.display = d2x.index == 0 ? "" : "none";
        this.xA1x.style.display = d2x.index == 0 ? "" : "none";
        if (this.el5q == 24 || this.el5q == 21) {
            this.xA1x.style.display = "none"
        }
        this.bBk8c.style.display = "none";
        this.eQ5V.value = "";
        this.bU4Y();
        this.Ej3x();
        if (d2x.index == 0) {
            var dn4r = a2x.da4e(this.eQ5V, "width");
            if (dn4r == "auto" || !dn4r) {
                return
            } else {
                if (this.gF5K) {
                    this.gF5K.S3x()
                }
                this.gF5K = D3x.Nb6V.B3x({
                    parent: document.body,
                    target: this.eQ5V
                })
            }
            this.bgg3x.style.display = ""
        } else {
            if (this.gF5K) {
                this.gF5K.S3x();
                delete this.gF5K
            }
            this.bgg3x.style.display = "none"
        }
    }
    ;
    b2x.cx4B = function(d2x) {
        var f3x = h3x.U3x(d2x, "d:action");
        if (!f3x)
            return;
        if (a2x.u3x(f3x, "action") == "search") {
            h3x.cg4k(d2x)
        } else if (a2x.u3x(f3x, "default") === undefined) {
            h3x.cg4k(d2x)
        }
        switch (a2x.u3x(f3x, "action")) {
        case "txt":
            this.ld7W();
            break;
        case "search":
            if (this.Eb3x()) {
                top.location.href = this.crE0x
            } else if (this.yf1x && this.el5q != 24) {
                if (this.lT7M) {
                    this.lT7M.S3x()
                }
                this.lT7M = D3x.baF2x.B3x({
                    parent: this.o3x.parentNode,
                    onfinish: this.bgJ3x.g3x(this),
                    oncancel: this.crd0x.g3x(this)
                });
                this.bgL3x = true;
                this.o3x.style.display = "none";
                this.Ek3x(this.iT6N < 0 ? "添加音乐" : "更换音乐")
            }
            break;
        case "at":
            h3x.rx9o(d2x);
            !!this.gA5F && this.gA5F.bp3x();
            this.gF5K.MW6Q();
            this.fD5I();
            break;
        case "emot":
            h3x.rx9o(d2x);
            !!this.gF5K && this.gF5K.Dd3x();
            if (!this.gA5F) {
                this.gA5F = n3x.GO4S.B3x({
                    parent: this.bgu3x
                });
                this.gA5F.s3x("onselect", this.wu1x.g3x(this))
            }
            this.gA5F.N3x();
            break;
        case "upload":
            break;
        case "sns":
            h3x.bh3x(d2x);
            var bgP3x, bw3x, t3x = a2x.u3x(f3x, "type");
            if (!this.WK0x[t3x]) {
                bgP3x = f3x.href.split("?");
                bw3x = k3x.hj6d(bgP3x[1]);
                bw3x["csrf_token"] = v3x.gI5N("__csrf");
                top.open(bgP3x[0] + "?" + k3x.db4f(bw3x));
                return
            }
            var bv3x = {
                2: "sn",
                3: "db",
                4: "rr"
            };
            l3x.yA1x(f3x, "u-slg-" + bv3x[t3x] + "-gray");
            break;
        case "close":
            !!this.gA5F && this.gA5F.bp3x();
            this.bBp8h();
            break;
        case "share":
            h3x.bh3x(d2x);
            if (this.Eb3x()) {
                if (!a2x.bB3x(f3x, "u-btn2-2-dis")) {
                    this.cra0x()
                }
            } else if (a2x.bB3x(f3x, "u-btn2-2-dis")) {
                if (!this.OA7t.pubEventWithoutResource && this.iT6N < 0) {
                    this.cqY0x()
                } else {}
            } else if (this.iT6N < 0 && !this.eQ5V.value && this.nW8O && this.nW8O.Le5j().length == 0) {
                n3x.Z3x.N3x({
                    type: 2,
                    tip: "请输入内容"
                })
            } else {
                this.cqX0x()
            }
            break
        }
    }
    ;
    b2x.cqY0x = function() {
        var rC9t = 0, bgX3x = function() {
            if (rC9t % 2) {
                a2x.w3x(this.oS8K, "z-show")
            } else {
                a2x.y3x(this.oS8K, "z-show")
            }
            rC9t++;
            if (rC9t > 5) {
                clearInterval(eY5d)
            }
        }, eY5d;
        return function() {
            rC9t = 0;
            clearInterval(eY5d);
            eY5d = setInterval(bgX3x.g3x(this), 200)
        }
    }();
    b2x.Ou7n = function(m3x) {
        m3x = m3x.result;
        this.WK0x[m3x.type] = !0;
        var r3x = k3x.cW4a(bfm3x, m3x.type)
          , cd4h = "u-slg-" + dD4H[r3x] + "-gray";
        a2x.w3x(this.Wu9l[r3x], cd4h)
    }
    ;
    b2x.bgJ3x = function(bu3x) {
        var i3x = bu3x.data;
        this.iT6N = bu3x.id;
        this.el5q = bu3x.type;
        this.o3x.style.display = "";
        this.Ek3x(this.bBo8g);
        this.lT7M && this.lT7M.S3x();
        this.bgL3x = false;
        this.bfF3x = i3x.picUrl;
        this.NJ7C = i3x.title || "";
        this.NK7D = i3x.author || "";
        this.bfJ3x = i3x.authors || "";
        this.cqU0x();
        this.Wn9e()
    }
    ;
    b2x.crd0x = function() {
        this.lT7M && this.lT7M.S3x();
        this.o3x.style.display = "";
        this.Ek3x(this.bBo8g);
        this.bgL3x = false;
        this.Wn9e()
    }
    ;
    b2x.wu1x = function(d2x) {
        var bi3x = "[" + d2x.text + "]";
        fL5Q.Gx4B(this.eQ5V, this.nS8K, bi3x);
        this.fD5I()
    }
    ;
    b2x.fo5t = function(d2x) {
        cP4T.cR4V.browser == "ie" && cP4T.cR4V.version < "7.0" ? setTimeout(this.fD5I.g3x(this), 0) : this.fD5I()
    }
    ;
    b2x.sL9C = function(d2x) {
        this.ld7W();
        if (d2x.keyCode == 8)
            this.fD5I()
    }
    ;
    b2x.fD5I = function() {
        this.ld7W();
        this.Ej3x()
    }
    ;
    b2x.Ej3x = function() {
        var br3x = Math.ceil(k3x.fk5p(this.eQ5V.value.trim()) / 2);
        this.ci4m.innerText = 140 - br3x;
        br3x > 140 ? a2x.eu5z(this.ci4m, "s-fc4", "s-fc6") : a2x.eu5z(this.ci4m, "s-fc6", "s-fc4")
    }
    ;
    b2x.cqX0x = function() {
        if (this.cv4z())
            return;
        if (k3x.fk5p(this.eQ5V.value.trim()) > 280) {
            this.bU4Y("字数超过140个字符");
            return
        }
        var t3x = this.Ay2x.rM9D(), i3x;
        if (t3x == 0) {
            for (var i = 0, FA3x = []; i < this.Wu9l.length; ++i) {
                if (!a2x.bB3x(this.Wu9l[i], "u-slg-" + dD4H[i] + "-gray"))
                    FA3x.push(bfm3x[i])
            }
            this.cv4z(!0);
            i3x = {
                id: this.iT6N,
                msg: this.eQ5V.value.trim(),
                type: this.Wj9a(this.el5q),
                picUrl: this.bfF3x,
                snsTypes: FA3x.join(","),
                isPub: this.yf1x
            };
            if (this.WM0x > 0) {
                i3x.actId = this.WM0x;
                if (this.WL0x) {
                    i3x.msg = "#" + this.WL0x + "#" + i3x.msg
                }
            }
            var mZ8R = this.nW8O && this.nW8O.Le5j();
            if (mZ8R && mZ8R.length) {
                i3x.pics = mZ8R
            }
            this.R3x.bVI4M(i3x)
        } else {
            var rE9v = this.uv0x.Kr5w();
            if (rE9v.length <= 0) {
                this.bU4Y("请至少选择一位好友");
                return
            }
            this.R3x.bVH4L({
                data: {
                    id: this.iT6N,
                    msg: this.eQ5V.value.trim(),
                    type: this.Wj9a(this.el5q),
                    userIds: "[" + rE9v.join(",") + "]"
                }
            })
        }
    }
    ;
    b2x.cra0x = function() {
        if (this.cv4z()) {
            return
        }
        this.hK6E.ge5j("click", {
            target: "share",
            targetid: "button",
            page: "sharevideo"
        });
        if (k3x.fk5p(this.eQ5V.value.trim()) > 280) {
            this.bU4Y("字数超过140个字符");
            return
        }
        this.cv4z(!0);
        var i3x = {
            msg: this.eQ5V.value.trim() || this.crT0x || "",
            type: "video"
        }
          , cqT0x = {
            videoId: this.iT6N
        };
        if (this.WM0x > 0) {
            i3x.actId = this.WM0x;
            if (this.WL0x) {
                i3x.msg = "#" + this.WL0x + "#" + i3x.msg
            }
        }
        i3x.videoinfo = JSON.stringify(cqT0x);
        this.R3x.bVF4J({
            data: {
                videoId: this.iT6N,
                commit: true
            },
            data2: i3x,
            snsTypes: ""
        })
    }
    ;
    b2x.Wt9k = function(t3x, m3x) {
        this.cv4z(!1);
        this.bp3x();
        if (!this.bfS3x) {
            if (this.Eb3x()) {
                n3x.Z3x.N3x({
                    tip: "视频将在转码完成后自动发出",
                    autoclose: true
                })
            } else {
                n3x.Z3x.N3x({
                    tip: "分享成功" + (m3x.point > 0 ? ' 获得<em class="s-fc6">' + m3x.point + "积分</em>" : ""),
                    autoclose: true
                })
            }
        }
        h3x.x3x(n3x.wK1x, "sharesuccess", {
            isPrivate: t3x,
            rid: this.iT6N,
            rtype: this.el5q,
            data: m3x.event
        });
        this.x3x("onshare")
    }
    ;
    b2x.hZ6T = function(m3x) {
        this.cv4z(!1);
        var bF3x = "分享失败";
        if (m3x.code) {
            switch (m3x.code) {
            case 404:
                bF3x = "分享的资源不存在";
                break;
            case 407:
                bF3x = "输入内容包含有关键字";
                break;
            case 408:
                bF3x = "分享太快了，过会再分享吧";
                break;
            case 315:
                bF3x = m3x.message || "根据对方设置，你没有该操作权限";
                break;
            case 329:
                return l3x.eU5Z({
                    clazz: "m-layer-w2",
                    btntxt: "知道了",
                    message: "当前账号存在较多未完成发布的视频<br>请稍后再试"
                })
            }
        }
        this.bU4Y(bF3x)
    }
    ;
    b2x.ld7W = function() {
        this.nS8K = fL5Q.ub0x(this.eQ5V)
    }
    ;
    b2x.bU4Y = function(bF3x) {
        this.dw4A(this.eb5g, bF3x)
    }
    ;
    b2x.cv4z = function(cE4I) {
        return this.dM4Q(this.AG2x, cE4I, "分享", "分享中...")
    }
    ;
    b2x.Wj9a = function(jt6n) {
        return csR0x[jt6n] || ""
    }
    ;
    b2x.cqS0x = function() {
        var eS5X, sW0x = this.Wj9a(this.el5q);
        this.oS8K.style.display = "";
        if (this.iT6N < 0) {
            this.oS8K.innerHTML = '<i class="highlight"></i><div class="text f-thide f-fl f-fs1"><i class="logo f-fl u-icn2 u-icn2-quaver"></i><span class="f-fs1 f-fl">给动态配上音乐</span></div><i class="f-fr icn u-icn2 u-icn2-plus"></i>'
        } else {
            if (!this.NJ7C) {
                this.oS8K.style.display = "none";
                return
            }
            var Wh9Y = this.yf1x && this.el5q != 24;
            eS5X = (WY0x[sW0x] ? WY0x[sW0x] + "：" : "") + this.NJ7C + (bBs8k[sW0x] || " ") + (sW0x == "mv" || sW0x == "album" ? this.bfJ3x || this.NK7D : this.NK7D);
            a2x.dL4P(this.oS8K, "m-xwgt-share-infobar", {
                canChange: Wh9Y,
                info: eS5X
            });
            if (Wh9Y) {
                a2x.w3x(this.oS8K, "z-dis")
            } else {
                a2x.y3x(this.oS8K, "z-dis")
            }
        }
        a2x.w3x(this.oS8K, "info-video")
    }
    ;
    b2x.cqU0x = function() {
        var sW0x = this.Wj9a(this.el5q)
          , eS5X = (WY0x[sW0x] ? WY0x[sW0x] + "：" : "") + this.NJ7C + (bBs8k[sW0x] || " ") + (sW0x == "mv" || sW0x == "album" ? this.bfJ3x || this.NK7D : this.NK7D);
        Wh9Y = this.yf1x && this.el5q != 24;
        if (this.Eb3x()) {} else {
            a2x.w3x(this.oS8K, "info-video");
            a2x.dL4P(this.oS8K, "m-xwgt-share-infobar", {
                canChange: Wh9Y,
                isPub: this.yf1x,
                info: eS5X
            })
        }
    }
    ;
    b2x.cqR0x = function() {
        var Fr3x = this.eQ5V.value;
        if (this.yf1x) {
            if (!!this.bgL3x) {
                return !!Fr3x && !!Fr3x.length || !!this.nW8O && this.nW8O.Le5j().length > 0
            } else {
                return !(this.iT6N < 0) || !!Fr3x && !!Fr3x.length || !!this.nW8O && this.nW8O.Le5j().length > 0
            }
        } else {
            return !!Fr3x && !!Fr3x.length || !!this.nW8O && this.nW8O.Le5j().length > 0
        }
    }
    ;
    b2x.Wn9e = function() {
        var bBf8X = false;
        if (!this.yf1x || this.OA7t.pubEventWithoutResource || !(this.iT6N < 0)) {
            bBf8X = true
        }
        if (bBf8X) {
            a2x.w3x(this.AG2x, "u-btn2-2-dis")
        } else {
            a2x.y3x(this.AG2x, "u-btn2-2-dis")
        }
    }
    ;
    b2x.bBi8a = function(bhn3x) {
        if (bhn3x) {
            a2x.y3x(this.AG2x, "u-btn2-2-dis")
        } else {
            this.Wn9e()
        }
    }
    ;
    b2x.bBp8h = function(d2x) {
        if (d2x) {
            d2x.stopped = true
        }
        if (this.cqR0x()) {
            l3x.gQ5V({
                title: "提示",
                message: "是否退出本次编辑？",
                btnok: "退出",
                action: function(W3x) {
                    if (W3x == "ok") {
                        this.x3x("forceclose", {});
                        this.bp3x()
                    }
                }
                .g3x(this)
            })
        } else {
            this.x3x("forceclose", {});
            this.bp3x()
        }
    }
    ;
    b2x.Ek3x = function(eD5I, dz4D) {
        this.nX8P.yU1x(eD5I, dz4D)
    }
    ;
    b2x.Wg9X = function(t3x) {
        this.hK6E.ge5j("page", {
            type: t3x
        })
    }
    ;
    b2x.Eb3x = function() {
        return this.el5q == 39
    }
    ;
    b2x.N3x = function() {
        var cqu0x = function(q3x, r3x) {
            var cd4h = "u-slg-" + dD4H[r3x] + "-gray";
            !this.WK0x[bfm3x[r3x]] ? a2x.y3x(q3x, cd4h) : a2x.w3x(q3x, cd4h)
        };
        return function() {
            K3x.N3x.call(this);
            this.o3x.style.display = "";
            this.bU4Y();
            this.cv4z(!1);
            this.Ay2x.Mj5o(0);
            this.eQ5V.focus();
            this.eQ5V.value = this.csk0x || "";
            this.eQ5V.placeholder = this.csg0x || "";
            if (!this.Eb3x()) {
                this.cqS0x()
            } else {
                a2x.y3x(this.oS8K, "info-video");
                a2x.dL4P(this.oS8K, "m-xwgt-share-videobar", {
                    title: this.NJ7C,
                    picUrl: this.bfF3x
                })
            }
            this.fD5I();
            this.uv0x.bQg2x();
            k3x.be3x(this.Wu9l, cqu0x, this);
            this.ld7W();
            if (this.yf1x) {
                this.pc8U.style.display = "none"
            } else {
                this.pc8U.style.display = ""
            }
            this.Wn9e()
        }
    }();
    b2x.bp3x = function(d2x) {
        K3x.bp3x.call(this);
        !!this.gA5F && this.gA5F.bp3x();
        if (this.uv0x) {
            this.uv0x.S3x();
            delete this.uv0x
        }
        if (this.gF5K) {
            this.gF5K.S3x();
            delete this.gF5K
        }
        if (this.nW8O) {
            this.nW8O.S3x();
            delete this.nW8O
        }
        if (this.bBa8S) {
            this.bBa8S = this.bBa8S.S3x()
        }
        if (this.lT7M) {
            this.lT7M.S3x();
            delete this.lT7M
        }
    }
    ;
    l3x.lA7t = function(e3x) {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            top.login();
            return
        }
        if (e3x.title === undefined) {
            e3x.title = "分享"
        }
        if (e3x.actId && e3x.type != 39) {
            var t3x = csE0x[e3x.resourceType], dk4o = e3x.resourceJson, hs6m;
            if (k3x.fl5q(dk4o)) {
                try {
                    dk4o = JSON.parse(dk4o)
                } catch (e) {}
            }
            if (t3x) {
                hs6m = l3x.bIi0x(t3x, dk4o);
                e3x.name = hs6m.title;
                e3x.author = hs6m.author;
                e3x.picUrl = hs6m.picUrl;
                e3x.type = t3x;
                e3x.rid = (dk4o || []).id
            }
        }
        n3x.wK1x.N3x(e3x)
    }
    ;
    H3x.fq5v.B3x({
        element: n3x.wK1x,
        event: ["sharesuccess"]
    })
})();
(function() {
    var c2x = NEJ.P, X3x = NEJ.O, h3x = c2x("nej.v"), a2x = c2x("nej.e"), v3x = c2x("nej.j"), n3x = c2x("nm.l"), D3x = c2x("nm.w"), bI3x = c2x("nej.ui"), p3x = c2x("nm.d"), l3x = c2x("nm.x"), b2x, K3x;
    n3x.Wd9U = NEJ.C();
    b2x = n3x.Wd9U.O3x(n3x.dV5a);
    K3x = n3x.Wd9U.cf4j;
    b2x.cl4p = function() {
        this.cs4w()
    }
    ;
    b2x.bQ3x = function() {
        this.cb4f();
        var j3x = a2x.I3x(this.o3x, "j-flag");
        h3x.s3x(j3x[0], "click", this.BU2x.g3x(this))
    }
    ;
    b2x.bZ4d = function() {
        this.ca4e = "m-import-ok"
    }
    ;
    b2x.bk3x = function(e3x) {
        e3x.parent = e3x.parent || document.body;
        e3x.title = "歌曲同步完成";
        this.bl3x(e3x)
    }
    ;
    b2x.bD3x = function() {
        this.bH3x()
    }
    ;
    b2x.BU2x = function(d2x) {
        this.bp3x();
        if (location.pathname.indexOf("my") >= 0) {
            location.reload()
        } else {
            location.dispatch2("/my/")
        }
    }
    ;
    b2x.yy1x = function() {
        this.bp3x()
    }
    ;
    b2x.bFz9q = function(d2x) {
        if (d2x.keyCode == 13)
            this.Bh2x()
    }
})();
(function() {
    var c2x = NEJ.P, X3x = NEJ.O, h3x = c2x("nej.v"), a2x = c2x("nej.e"), v3x = c2x("nej.j"), M3x = c2x("nej.p"), k3x = c2x("nej.u"), n3x = c2x("nm.l"), D3x = c2x("nm.w"), bI3x = c2x("nej.ui"), p3x = c2x("nm.d"), l3x = c2x("nm.x"), b2x, K3x;
    n3x.bAV8N = NEJ.C();
    b2x = n3x.bAV8N.O3x(n3x.dV5a);
    b2x.bZ4d = function() {
        this.ca4e = "m-programtips-layer"
    }
    ;
    b2x.bQ3x = function() {
        this.cb4f();
        this.bV4Z = a2x.I3x(this.o3x, "j-flag")
    }
    ;
    b2x.bk3x = function(e3x) {
        e3x.clazz = " m-layer-programtips";
        e3x.parent = e3x.parent || document.body;
        e3x.title = "付费内容提示";
        e3x.draggable = !0;
        e3x.destroyalbe = !0;
        e3x.mask = true;
        this.bl3x(e3x);
        this.gx5C = e3x.id;
        this.cpm9d = e3x.radiotype;
        this.ku7n = location.protocol + "//" + (this.cpl9c() || "music.163.com") + "/m/" + this.cpm9d + "?id=" + this.gx5C;
        this.cpb9S()
    }
    ;
    b2x.bD3x = function() {
        this.bH3x()
    }
    ;
    b2x.yy1x = function() {
        this.bp3x()
    }
    ;
    b2x.BU2x = function(d2x) {
        this.x3x("onok", A3x);
        this.bp3x()
    }
    ;
    l3x.bAT8L = function(e3x) {
        n3x.bAV8N.B3x(e3x).N3x()
    }
    ;
    b2x.cpb9S = function() {
        v3x.bq3x("/api/web/qrcode/get", {
            method: "POST",
            type: "json",
            data: k3x.db4f({
                url: this.ku7n,
                size: 180
            }),
            onload: function(i3x) {
                if (i3x.code == 200) {
                    this.coI9z(i3x.qrcodeImageUrl)
                } else {
                    alert("二维码获取失败")
                }
            }
            .g3x(this)
        })
    }
    ;
    b2x.cpl9c = function() {
        var coG9x = location.host;
        if (coG9x.indexOf("music") >= 0) {
            return "music.163.com"
        } else {
            return "igame.163.com"
        }
    }
    ;
    b2x.coI9z = function(jI7B) {
        this.bV4Z[0].style.backgroundImage = "url(" + jI7B + ")"
    }
})();
(function() {
    var c2x = NEJ.P, a2x = c2x("nej.e"), cP4T = c2x("nej.p"), h3x = c2x("nej.v"), k3x = c2x("nej.u"), H3x = c2x("nej.ut"), v3x = c2x("nej.j"), p3x = c2x("nm.d"), l3x = c2x("nm.x"), F3x = c2x("nm.m"), n3x = c2x("nm.l"), L3x = c2x("nm.m.f"), b2x, K3x;
    F3x.cM4Q = NEJ.C();
    b2x = F3x.cM4Q.O3x(H3x.dp4t);
    b2x.bJ3x = function() {
        var ps8k = !1;
        return function() {
            if (ps8k)
                return;
            ps8k = !0;
            this.bM3x();
            if (top == self) {
                return
            }
            this.ry9p = a2x.z3x("g_backtop");
            if (window.GRef != "mail") {} else {
                this.bAQ8I()
            }
            H3x.fq5v.B3x({
                element: window,
                event: ["share", "playchange", "snsbind", "playstatechange"]
            });
            this.bT3x([[window, "scroll", this.An2x.g3x(this)], [document, "keyup", this.coB9s.g3x(this)], [document.body, "click", this.sd9U.g3x(this)], [document, "mouseup", this.cov9m.g3x(this)], [this.ry9p, "click", this.PA7t.g3x(this)], [p3x.ri9Z, "message", this.tX0x.g3x(this)]]);
            l3x.bVZ5e(document.body);
            this.An2x();
            if (this.Al2x !== false && typeof GUser !== "undefined" && GUser.userId > 0)
                p3x.ri9Z.fY5d().ux0x();
            try {
                top.GUser = NEJ.X(top.GUser, GUser);
                top.api.refreshUserInfo();
                if (cP4T.cR4V.browser == "ie" && parseInt(cP4T.cR4V.version) < 9 && /#(.*?)$/.test(top.document.title)) {
                    top.document.title = "网易云音乐"
                } else {
                    var gq5v = top.player.getPlaying();
                    if (gq5v && gq5v.track && gq5v.playing) {
                        top.document.title = decodeURIComponent("%E2%96%B6%20") + gq5v.track.name
                    } else {
                        top.document.title = document.title
                    }
                }
            } catch (e) {}
            window.share = this.xJ1x.g3x(this);
            this.kl7e = p3x.hQ6K.B3x();
            window.log = this.mh7a.g3x(this);
            var rD9u = location.search;
            if (rD9u) {
                var bw3x = rD9u.substr(rD9u.indexOf("?") + 1)
                  , gd5i = k3x.hj6d(bw3x);
                if (gd5i && gd5i["_hash"])
                    location.hash = gd5i["_hash"]
            }
        }
    }();
    b2x.coB9s = function(d2x) {
        var f3x = h3x.U3x(d2x);
        try {
            if (d2x.keyCode == 80 && l3x.bIq0x() || ["textarea", "input"].indexOf(f3x.tagName.toLowerCase()) >= 0)
                return;
            h3x.x3x(top.document, "keyup", {
                ctrlKey: d2x.ctrlKey,
                keyCode: d2x.keyCode
            })
        } catch (e) {}
    }
    ;
    b2x.sd9U = function(d2x) {
        var f3x = h3x.U3x(d2x);
        if (f3x && f3x.tagName == "INPUT")
            return;
        var f3x = h3x.U3x(d2x, "d:pid");
        if (f3x) {
            h3x.cg4k(d2x);
            var oM8E = a2x.u3x(f3x, "pid")
              , Ah2x = a2x.u3x(f3x, "ptype")
              , W3x = a2x.u3x(f3x, "action") || "play";
            switch (W3x) {
            case "subscribe":
                l3x.lL7E({
                    tracks: [oM8E]
                });
                break
            }
        }
        f3x = h3x.U3x(d2x, "d:resAction");
        if (f3x && f3x.className.indexOf("-dis") == -1) {
            var cI4M = a2x.u3x(f3x, "resId")
              , t3x = a2x.u3x(f3x, "resType")
              , bhP4T = a2x.u3x(f3x, "resRadiotype")
              , bhQ4U = a2x.u3x(f3x, "resRadioid")
              , dH4L = a2x.u3x(f3x, "resFrom")
              , i3x = a2x.u3x(f3x, "resData")
              , W3x = a2x.u3x(f3x, "resAction")
              , bbj2x = a2x.u3x(f3x, "resCopyright")
              , VT9K = a2x.u3x(f3x, "resAuditstatus");
            if (W3x != "log" && W3x != "bilog")
                h3x.cg4k(d2x);
            switch (W3x) {
            case "log":
                i3x = (i3x || "").split("|");
                if (!!i3x[0]) {
                    var bc3x = {
                        id: cI4M,
                        alg: i3x[2] || "itembased",
                        scene: i3x[3],
                        position: i3x[1] || 0
                    };
                    if (!!i3x[4])
                        bc3x.srcid = i3x[4];
                    window.log(i3x[0], bc3x)
                }
                break;
            case "bilog":
                var baC2x = a2x.u3x(f3x, "logAction")
                  , baD2x = a2x.u3x(f3x, "logJson");
                window.log(baC2x, baD2x);
                break;
            case "share":
                if (VT9K && VT9K == 1) {
                    l3x.hS6M("由于版权问题，该节目暂时无法分享。")
                } else {
                    share(cI4M, t3x, a2x.u3x(f3x, "resPic"), a2x.u3x(f3x, "resName"), a2x.u3x(f3x, "resAuthor"), a2x.u3x(f3x, "resAuthors"))
                }
                break;
            case "fav":
            case "subscribe":
                if (t3x == 18) {
                    var pp8h = a2x.u3x(f3x, "resLevel")
                      , qc9T = a2x.u3x(f3x, "resFee");
                    if (pp8h == 10) {
                        l3x.to0x(qc9T, cI4M, "song");
                        break
                    }
                    l3x.lL7E({
                        tracks: [cI4M]
                    })
                }
                break;
            case "download":
                l3x.So8g({
                    id: cI4M,
                    type: t3x
                });
                break;
            case "programtips":
                if (VT9K && VT9K == 1) {
                    l3x.hS6M("由于版权问题，该节目暂时无法分享。")
                } else {
                    l3x.bAT8L({
                        id: bhQ4U,
                        radiotype: bhP4T
                    })
                }
                break
            }
        }
        if (top == self)
            return;
        try {
            top.onIframeClick(d2x)
        } catch (e) {}
    }
    ;
    b2x.cov9m = function(d2x) {
        try {
            h3x.x3x(top.document, "mouseup")
        } catch (e) {}
    }
    ;
    b2x.An2x = function() {
        var cou9l = function() {
            var cp4t = window.innerHeight;
            if (!k3x.uE0x(cp4t))
                cp4t = (document.documentElement || document.body).clientHeight;
            return cp4t
        };
        return function(d2x) {
            if (!this.ry9p)
                return;
            var VS9J = cou9l()
              , fR5W = document.documentElement.scrollTop || document.body.scrollTop;
            a2x.Y3x(this.ry9p, "display", fR5W > 0 ? "" : "none");
            if (cP4T.cR4V.browser == "ie" && cP4T.cR4V.version < "7.0") {
                var gk5p = Math.min(document.body.clientHeight, VS9J + fR5W) - 204;
                a2x.Y3x(this.ry9p, "top", gk5p + "px")
            }
        }
    }();
    b2x.PA7t = function(d2x) {
        h3x.cg4k(d2x);
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0
    }
    ;
    b2x.xJ1x = function() {
        var bhV4Z = function(d2x) {
            h3x.x3x(window, "share", d2x)
        };
        return function(cI4M, t3x, ED3x, T3x, PR7K, PS7L) {
            l3x.lA7t({
                rid: cI4M,
                type: t3x,
                purl: ED3x,
                name: T3x,
                author: PR7K,
                authors: PS7L,
                onshare: bhV4Z.g3x(this)
            })
        }
    }();
    b2x.mh7a = function(W3x, bc3x) {
        try {
            top.log(W3x, bc3x)
        } catch (e) {
            switch (W3x) {
            case "play":
                this.kl7e.eI5N(bc3x);
                break;
            case "search":
                this.kl7e.bKI1x(bc3x);
                break;
            default:
                this.kl7e.ge5j(W3x, bc3x)
            }
        }
    }
    ;
    b2x.bAQ8I = function() {
        var VR9I, bib4f = false, bs3x = [45, 60];
        var cor9i = function(bF3x) {
            if (bF3x.title != "MailBoxImport")
                return;
            var P3x = JSON.parse(bF3x.content || "null") || X3x;
            if (P3x.status == 10) {
                n3x.Wd9U.B3x().N3x();
                window.clearTimeout(VR9I)
            }
        };
        var tx0x = function(d2x) {
            if (d2x.code == 200) {
                if (d2x.status == 1) {
                    h3x.s3x(p3x.ya1x, "message", cor9i.g3x(this));
                    p3x.ya1x.B3x().bce2x();
                    bib4f = true
                } else {
                    if (bib4f) {
                        if (d2x.status == 10) {
                            n3x.Wd9U.B3x().N3x();
                            h3x.hF6z(p3x.ya1x, "message");
                            window.clearTimeout(VR9I);
                            bib4f = false
                        }
                    } else {
                        window.clearTimeout(VR9I)
                    }
                }
            }
        };
        return function() {
            var rt9k = bs3x.shift() * 1e3;
            v3x.bq3x("/api/musicbox/mail/status", {
                type: "json",
                method: "get",
                onload: tx0x.g3x(this)
            });
            if (rt9k) {
                VR9I = window.setTimeout(arguments.callee, rt9k)
            }
        }
    }();
    b2x.tX0x = function(d2x) {
        try {
            top.polling(d2x)
        } catch (e) {}
    }
})()
