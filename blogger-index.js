/*! Tabbed TOC for Blogger V2 <https://dte-project.github.io/blogger/tabbed-toc.html> */ ! function(e, t) {
    function r(e) {
        return encodeURIComponent(e)
    }

    function a(e) {
        return decodeURIComponent(e)
    }

    function n(e) {
        return void 0 !== e
    }

    function i(e) {
        return "string" == typeof e
    }

    function l(e) {
        return "number" == typeof e || /^-?(\d*\.)?\d+$/.test(e)
    }

    function s(e) {
        return "object" == typeof e && null !== e
    }

    function c(e) {
        return i(e) && "" !== e.trim() ? '""' === e || "[]" === e || "{}" === e || '"' === e[0] && '"' === e.slice(-1) || "[" === e[0] && "]" === e.slice(-1) || "{" === e[0] && "}" === e.slice(-1) : !1
    }

    function o(e) {
        if (i(e)) {
            if ("true" === e) return !0;
            if ("false" === e) return !1;
            if ("null" === e) return null;
            if ("'" === e.slice(0, 1) && "'" === e.slice(-1)) return e.slice(1, -1);
            if (/^-?(\d*\.)?\d+$/.test(e) && e >= Number.MIN_SAFE_INTEGER && e <= Number.MAX_SAFE_INTEGER) return +e;
            if (c(e)) try {
                return JSON.parse(e)
            } catch (t) {}
        }
        return e
    }

    function p(e, t, r) {
        for (var a, n = t.split("["), i = 0, l = n.length; l - 1 > i; ++i) a = n[i].replace(/\]$/, ""), e = e[a] || (e[a] = {});
        e[n[i].replace(/\]$/, "")] = r
    }

    function u(e, t) {
        var r = {},
            i = e.replace(/^.*?\?/, "");
        return "" === i ? r : (i.split(/&(?:amp;)?/).forEach(function(e) {
            var i = e.split("="),
                l = a(i[0]),
                s = n(i[1]) ? a(i[1]) : !0;
            s = !n(t) || t ? o(s) : s, "]" === l.slice(-1) ? p(r, l, s) : r[l] = s
        }), r)
    }

    function d(e, t) {
        t = t || {};
        for (var r in e) n(t[r]) ? s(e[r]) && s(t[r]) && (t[r] = d(e[r], t[r])) : t[r] = e[r];
        return t
    }

    function f(e, t, r) {
        e.addEventListener(t, r, !1)
    }

    function g(e, r, a) {
        if (e = t.createElement(e), n(r) && "" !== r && (e.innerHTML = r), s(a))
            for (var i in a) a[i] !== !1 && e.setAttribute(i, a[i]);
        return e
    }

    function h(e, t) {
        t = t.split(/\s+/);
        for (var r; r = t.shift();) e.classList.add(r)
    }

    function m(e, t) {
        t = t.split(/\s+/);
        for (var r; r = t.shift();) e.classList.remove(r)
    }

    function v(e, t, r) {
        e.insertBefore(t, r)
    }

    function y(e) {
        e.parentNode.removeChild(e)
    }

    function b(e, t) {
        var a, n = [];
        for (a in e) n.push(r(a) + "=" + r(e[a]));
        return "?" + n.join(t || "&")
    }

    function $(e, t) {
        return e = (e + "").split(/[?&#]/)[0].replace(/\/+$/, ""), n(t) && (e = e.replace(/\.[\w-]+$/, t ? "." + t : "")), e
    }

    function x(e) {
        return l(e) ? ("file:" === L.protocol ? "https:" : "") + "//www.blogger.com/feeds/" + e + "/posts/summary" : $(e) + "/feeds/posts/summary"
    }

    function E(e, t, r) {
        var a = /\.css$/i.test($(e)),
            n = g(a ? "link" : "script", "", d(a ? {
                href: e,
                rel: "stylesheet"
            } : {
                src: e
            }, r));
        return n.readyState ? n.onreadystatechange = function() {
            ("loaded" === n.readyState || "complete" === n.readyState) && (n.onreadystatechange = null, t(n))
        } : f(n, "load", t), v(I, n, I.firstChild), n
    }

    function S() {
        if (F !== !1) {
            var e = +(q.getItem(O) || -1);
            if (e > F) return q.setItem(O, 0), !0;
            q.setItem(O, ++e)
        }
        return !1
    }

    function R(e, t) {
        var r, a = e.split("T"),
            n = a[0].split("-"),
            i = a[1].split("+")[0].split(":"),
            l = {
                "M+": J.months[+n[1] - 1],
                "D+": J.days[new Date(e).getDay()],
                Y: n[0],
                M: n[1],
                D: n[2],
                h: i[0],
                m: i[1],
                s: Math.floor(+i[2]) + ""
            };
        for (r in l) t = t.replace(RegExp("%" + r.replace("+", "\\+"), "g"), l[r]);
        return t
    }

    function k() {
        var e = j.container,
            r = j.css;
        r && E(i(r) ? r : $(_.src, "css")), E(x(H) + b(d(j.query, {
            callback: "_" + A,
            "max-results": 0
        })), function() {
            e ? (e = t.querySelector(e), e && (e.innerHTML = ""), v(e, B)) : v(_.parentNode, B, _), m(B.parentNode, O + "-loading");
            var r = j.active;
            l(r) && (r = T[r]), M[r] && M[r].click()
        })
    }
    var w, _ = t.currentScript || t.getElementsByTagName("script").pop(),
        M = {},
        T = [],
        N = {},
        C = 9999,
        L = e.location,
        q = e.localStorage,
        D = {
            direction: "ltr",
            hash: Date.now(),
            url: L.protocol + "//" + L.host,
            name: "tabbed-toc",
            css: 1,
            sort: 1,
            ad: !0,
            active: 0,
            container: 0,
            date: "%D+, %D %M+ %Y %h:%m",
            excerpt: 0,
            image: 0,
            target: 0,
            load: 0,
            recent: 7,
            hide: [],
            text: {
                title: "جدول المحتويات",
                loading: "Loading&hellip;",
                months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                recent: " <sup>جديد!</sup>"
            },
            query: {
                alt: "json-in-script",
                orderby: "published",
                "max-results": C,
                "start-index": 1
            }
        },
        I = t.head,
        j = d(D, u(_.src)),
        A = j.hash,
        H = j.id || $(j.url),
        O = j.name,
        F = j.ad,
        J = j.text,
        B = g("div", '<h3 class="' + O + '-title">' + J.title + "</h3>", {
            "class": O + " " + j.direction,
            id: O + ":" + A
        }),
        G = g("p", J.loading, {
            "class": O + "-loading"
        });
    F === !0 && (F = 3);
    var z = u(L.search);
    n(z[A]) && (delete z[A].url, j = d(j, z[A])), e["_" + A] = function(a) {
        function n(e) {
            w = this;
            var t = w.id.split(":")[1],
                a = w.innerHTML,
                n = B.parentNode,
                i = M[a];
            for (s in M) m(M[s], "active");
            for (s in N) N[s].style.display = "none", N[s].previousSibling.style.display = "none", m(N[s], "active");
            N[a].$ || (h(i, "active loading"), v(B.children[2], G), h(n, O + "-loading"), E(x(H) + "/-/" + r(a) + b(d(j.query, {
                callback: "_" + (A + 1)
            })), function() {
                m(n, O + "-loading"), m(i, "loading"), y(G)
            }, {
                "class": O + "-js",
                id: O + "-js:" + t
            })), h(i, "active"), N[a].style.display = "", N[a].previousSibling.style.display = "", h(N[a], "active"), e.preventDefault()
        }
        a = a.feed || {};
        var s, c = j.sort,
            o = a.entry || [],
            p = a.category || [],
            u = (o.length, p.length);
        l(c) ? (c = +c, p = p.sort(function(e, t) {
            return e.term.localeCompare(t.term)
        }), -1 === c && (p = p.reverse())) : i(c) && (c = e[c], p = p.sort(c));
        var $, S = g("nav", "", {
            "class": O + "-tabs p"
        });
        for (v(B, S), v(B, g("section", "", {
                "class": O + "-panels p"
            })), s = 0; u > s; ++s) {
            var R = p[s].term;
            j.hide.indexOf(R) > -1 || ($ = g("a", R, {
                "class": O + "-tab " + O + "-tab:" + s,
                href: "#" + O + "-panel:" + A + "." + s,
                id: O + "-tab:" + A + "." + s,
                title: R
            }), T.push(R), M[R] = $, f($, "click", n), v(S, $), u - 1 > s && v(S, t.createTextNode(" ")), v(B.children[2], g("h4", R, {
                "class": O + "-title"
            })), v(B.children[2], N[R] = g("ol", "", {
                "class": O + "-panel " + O + "-panel:" + s + " active",
                id: O + "-panel:" + A + "." + s
            })))
        }
    }, e["_" + (A + 1)] = function(t) {
        function a(e) {
            if (e) {
                var t, r = e.published.$t,
                    a = "";
                for (s = 0, c = e.link.length; c > s; ++s)
                    if ("alternate" === e.link[s].rel) {
                        t = e.link[s].href;
                        break
                    }
                if (k) {
                    var n, i, o, p = "media$thumbnail" in e;
                    k === !0 && (k = 80), l(k) ? (n = i = k + "px", k = "s" + k + "-c") : (o = /^s(\d+)(\-[cp])?$/.exec(k)) ? (n = o[1] + "px", i = o[2] ? o[1] + "px" : "auto") : (o = /^w(\d+)\-h(\d+)(\-[cp])?$/.exec(k)) && (n = o[1] + "px", i = o[2] + "px"), a += '<p class="' + O + "-image" + (p ? "" : " no-image") + '">', a += p ? '<img alt="" src="' + e.media$thumbnail.url.replace(/\/s\d+(\-c)?\//g, "/" + k + "/") + '" style="display:block;width:' + n + ";height:" + i + ';">' : '<span class="img" style="display:block;width:' + n + ";height:" + i + ';">', a += "</p>"
                }
                if (a += '<h5 class="' + O + '-title"><a href="' + t + '"' + ($ ? ' target="' + $ + '"' : "") + ">" + e.title.$t + "</a></h5>", j.date && (a += '<p class="' + O + '-time"><time datetime="' + r + '">' + R(r, j.date) + "</time></p>"), _) {
                    var u = e.summary.$t.trim().replace(/<.*?>/g, "").replace(/[<>]/g, ""),
                        d = u.length;
                    _ === !0 && (_ = 200), a += '<p class="' + O + "-excerpt" + (d ? "" : " no-excerpt") + '">' + u.slice(0, _) + (d > _ ? "&hellip;" : "") + "</p>"
                }
                return g("li", a, {
                    "class": e.$ ? "recent" : !1
                })
            }
        }
        t = t.feed || {};
        var n, s, c, o = j.sort,
            p = w ? w.innerHTML : "",
            u = t.entry || [],
            f = u.length,
            m = N[p];
        for (n = 0; f > n; ++n) {
            var y = n > j.recent ? "" : J.recent;
            u[n].$ = !!y, u[n].title.$t += y
        }
        l(o) ? (o = +o, u = u.sort(function(e, t) {
            return e.title.$t.localeCompare(t.title.$t)
        }), -1 === o && (u = u.reverse())) : i(o) && (o = e[o], u = u.sort(o));
        var $ = j.target,
            k = j.image,
            _ = j.excerpt,
            M = "has-title has-url";
        for (j.date && (M += " has-time"), k && (M += " has-image"), _ && (M += " has-excerpt"), h(B, M), n = 0; f > n; ++n) v(m, a(u[n]));
        S() ? (e["_" + A + "_"] = function(e) {
            e = e.feed || {};
            var t = e.entry || [];
            t = t[Math.floor(Math.random() * t.length)], (t = a(t)) && (h(t, "ad"), v(m, t, m.firstChild))
        }, E(x("298900102869691923") + b(d(j.query, {
            callback: "_" + A + "_",
            "max-results": 21,
            orderby: "updated"
        })) + "&q=" + r(p.toLowerCase()))) : delete e["_" + A + "_"], N[p].$ = !0
    }, l(j.load) ? e.setTimeout(k, +j.load) : j.load === !0 ? f(e, "load", k) : k()
}(window, document);