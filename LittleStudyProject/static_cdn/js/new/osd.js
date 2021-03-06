(function () {
  var k,
    aa =
      "function" == typeof Object.create
        ? Object.create
        : function (a) {
            function b() {}
            b.prototype = a;
            return new b();
          },
    ba;
  if ("function" == typeof Object.setPrototypeOf) ba = Object.setPrototypeOf;
  else {
    var ca;
    a: {
      var da = { Fb: !0 },
        ea = {};
      try {
        ea.__proto__ = da;
        ca = ea.Fb;
        break a;
      } catch (a) {}
      ca = !1;
    }
    ba = ca
      ? function (a, b) {
          a.__proto__ = b;
          if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
          return a;
        }
      : null;
  }
  var fa = ba;
  function p(a, b) {
    a.prototype = aa(b.prototype);
    a.prototype.constructor = a;
    if (fa) fa(a, b);
    else
      for (var c in b)
        if ("prototype" != c)
          if (Object.defineProperties) {
            var d = Object.getOwnPropertyDescriptor(b, c);
            d && Object.defineProperty(a, c, d);
          } else a[c] = b[c];
    a.Pb = b.prototype;
  }
  var ha =
      "function" == typeof Object.defineProperties
        ? Object.defineProperty
        : function (a, b, c) {
            a != Array.prototype && a != Object.prototype && (a[b] = c.value);
          },
    ia =
      "undefined" != typeof window && window === this
        ? this
        : "undefined" != typeof global && null != global
        ? global
        : this;
  function ja() {
    ja = function () {};
    ia.Symbol || (ia.Symbol = ka);
  }
  var ka = (function () {
    var a = 0;
    return function (b) {
      return "jscomp_symbol_" + (b || "") + a++;
    };
  })();
  function la() {
    ja();
    var a = ia.Symbol.iterator;
    a || (a = ia.Symbol.iterator = ia.Symbol("iterator"));
    "function" != typeof Array.prototype[a] &&
      ha(Array.prototype, a, {
        configurable: !0,
        writable: !0,
        value: function () {
          return ma(this);
        },
      });
    la = function () {};
  }
  function ma(a) {
    var b = 0;
    return na(function () {
      return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
    });
  }
  function na(a) {
    la();
    a = { next: a };
    a[ia.Symbol.iterator] = function () {
      return this;
    };
    return a;
  }
  function q(a) {
    la();
    var b = a[Symbol.iterator];
    return b ? b.call(a) : ma(a);
  }
  function r(a) {
    if (!(a instanceof Array)) {
      a = q(a);
      for (var b, c = []; !(b = a.next()).done; ) c.push(b.value);
      a = c;
    }
    return a;
  }
  function oa(a, b) {
    if (b) {
      var c = ia;
      a = a.split(".");
      for (var d = 0; d < a.length - 1; d++) {
        var e = a[d];
        e in c || (c[e] = {});
        c = c[e];
      }
      a = a[a.length - 1];
      d = c[a];
      b = b(d);
      b != d &&
        null != b &&
        ha(c, a, { configurable: !0, writable: !0, value: b });
    }
  }
  var pa =
    "function" == typeof Object.assign
      ? Object.assign
      : function (a, b) {
          for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d)
              for (var e in d)
                Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e]);
          }
          return a;
        };
  oa("Object.assign", function (a) {
    return a || pa;
  });
  oa("Math.trunc", function (a) {
    return a
      ? a
      : function (a) {
          a = Number(a);
          if (isNaN(a) || Infinity === a || -Infinity === a || 0 === a)
            return a;
          var b = Math.floor(Math.abs(a));
          return 0 > a ? -b : b;
        };
  });
  var t = this;
  function u(a) {
    return "string" == typeof a;
  }
  function v(a) {
    return "number" == typeof a;
  }
  function qa() {}
  function ra(a) {
    a.Qa = void 0;
    a.j = function () {
      return a.Qa ? a.Qa : (a.Qa = new a());
    };
  }
  function sa(a) {
    var b = typeof a;
    if ("object" == b)
      if (a) {
        if (a instanceof Array) return "array";
        if (a instanceof Object) return b;
        var c = Object.prototype.toString.call(a);
        if ("[object Window]" == c) return "object";
        if (
          "[object Array]" == c ||
          ("number" == typeof a.length &&
            "undefined" != typeof a.splice &&
            "undefined" != typeof a.propertyIsEnumerable &&
            !a.propertyIsEnumerable("splice"))
        )
          return "array";
        if (
          "[object Function]" == c ||
          ("undefined" != typeof a.call &&
            "undefined" != typeof a.propertyIsEnumerable &&
            !a.propertyIsEnumerable("call"))
        )
          return "function";
      } else return "null";
    else if ("function" == b && "undefined" == typeof a.call) return "object";
    return b;
  }
  function ta(a) {
    var b = sa(a);
    return "array" == b || ("object" == b && "number" == typeof a.length);
  }
  function w(a) {
    return "function" == sa(a);
  }
  function ua(a) {
    var b = typeof a;
    return ("object" == b && null != a) || "function" == b;
  }
  function va(a, b, c) {
    return a.call.apply(a.bind, arguments);
  }
  function wa(a, b, c) {
    if (!a) throw Error();
    if (2 < arguments.length) {
      var d = Array.prototype.slice.call(arguments, 2);
      return function () {
        var c = Array.prototype.slice.call(arguments);
        Array.prototype.unshift.apply(c, d);
        return a.apply(b, c);
      };
    }
    return function () {
      return a.apply(b, arguments);
    };
  }
  function xa(a, b, c) {
    Function.prototype.bind &&
    -1 != Function.prototype.bind.toString().indexOf("native code")
      ? (xa = va)
      : (xa = wa);
    return xa.apply(null, arguments);
  }
  function ya(a, b) {
    var c = Array.prototype.slice.call(arguments, 1);
    return function () {
      var b = c.slice();
      b.push.apply(b, arguments);
      return a.apply(this, b);
    };
  }
  function za(a, b) {
    a = a.split(".");
    var c = t;
    a[0] in c ||
      "undefined" == typeof c.execScript ||
      c.execScript("var " + a[0]);
    for (var d; a.length && (d = a.shift()); )
      a.length || void 0 === b
        ? c[d] && c[d] !== Object.prototype[d]
          ? (c = c[d])
          : (c = c[d] = {})
        : (c[d] = b);
  }
  function Aa(a, b) {
    function c() {}
    c.prototype = b.prototype;
    a.Pb = b.prototype;
    a.prototype = new c();
    a.prototype.constructor = a;
    a.ic = function (a, c, f) {
      for (
        var d = Array(arguments.length - 2), e = 2;
        e < arguments.length;
        e++
      )
        d[e - 2] = arguments[e];
      return b.prototype[c].apply(a, d);
    };
  }
  var x = document,
    y = window;
  var Ba;
  function Ca(a, b) {
    if (u(a)) return u(b) && 1 == b.length ? a.indexOf(b, 0) : -1;
    for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
    return -1;
  }
  function z(a, b, c) {
    for (var d = a.length, e = u(a) ? a.split("") : a, f = 0; f < d; f++)
      f in e && b.call(c, e[f], f, a);
  }
  function Da(a, b) {
    for (
      var c = a.length, d = [], e = 0, f = u(a) ? a.split("") : a, g = 0;
      g < c;
      g++
    )
      if (g in f) {
        var h = f[g];
        b.call(void 0, h, g, a) && (d[e++] = h);
      }
    return d;
  }
  function Ea(a, b) {
    for (
      var c = a.length, d = Array(c), e = u(a) ? a.split("") : a, f = 0;
      f < c;
      f++
    )
      f in e && (d[f] = b.call(void 0, e[f], f, a));
    return d;
  }
  function Fa(a, b, c) {
    var d = c;
    z(a, function (c, f) {
      d = b.call(void 0, d, c, f, a);
    });
    return d;
  }
  function Ga(a, b) {
    for (var c = a.length, d = u(a) ? a.split("") : a, e = 0; e < c; e++)
      if (e in d && b.call(void 0, d[e], e, a)) return !0;
    return !1;
  }
  function Ia(a, b) {
    var c = 0;
    z(
      a,
      function (a, e, f) {
        b.call(void 0, a, e, f) && ++c;
      },
      void 0
    );
    return c;
  }
  function Ja(a, b) {
    b = Ka(a, b, void 0);
    return 0 > b ? null : u(a) ? a.charAt(b) : a[b];
  }
  function Ka(a, b, c) {
    for (var d = a.length, e = u(a) ? a.split("") : a, f = 0; f < d; f++)
      if (f in e && b.call(c, e[f], f, a)) return f;
    return -1;
  }
  function La(a) {
    return Array.prototype.concat.apply([], arguments);
  }
  function Ma(a) {
    var b = a.length;
    if (0 < b) {
      for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
      return c;
    }
    return [];
  }
  function Na(a, b) {
    a.sort(b || Oa);
  }
  function Oa(a, b) {
    return a > b ? 1 : a < b ? -1 : 0;
  }
  function Pa(a) {
    if (!arguments.length) return [];
    for (var b = [], c = arguments[0].length, d = 1; d < arguments.length; d++)
      arguments[d].length < c && (c = arguments[d].length);
    for (d = 0; d < c; d++) {
      for (var e = [], f = 0; f < arguments.length; f++)
        e.push(arguments[f][d]);
      b.push(e);
    }
    return b;
  }
  function Qa(a) {
    return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
  }
  function Ra(a) {
    if (!Sa.test(a)) return a;
    -1 != a.indexOf("&") && (a = a.replace(Ta, "&amp;"));
    -1 != a.indexOf("<") && (a = a.replace(Ua, "&lt;"));
    -1 != a.indexOf(">") && (a = a.replace(Va, "&gt;"));
    -1 != a.indexOf('"') && (a = a.replace(Wa, "&quot;"));
    -1 != a.indexOf("'") && (a = a.replace(Xa, "&#39;"));
    -1 != a.indexOf("\x00") && (a = a.replace(Ya, "&#0;"));
    return a;
  }
  var Ta = /&/g,
    Ua = /</g,
    Va = />/g,
    Wa = /"/g,
    Xa = /'/g,
    Ya = /\x00/g,
    Sa = /[\x00&<>"']/,
    Za = String.prototype.repeat
      ? function (a, b) {
          return a.repeat(b);
        }
      : function (a, b) {
          return Array(b + 1).join(a);
        };
  function $a(a, b) {
    a = String(a);
    var c = a.indexOf(".");
    -1 == c && (c = a.length);
    return Za("0", Math.max(0, b - c)) + a;
  }
  function ab(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
  }
  function bb(a) {
    return String(a).replace(/\-([a-z])/g, function (a, c) {
      return c.toUpperCase();
    });
  }
  function cb(a) {
    return String(a)
      .replace(/([A-Z])/g, "-$1")
      .toLowerCase();
  }
  function db(a) {
    var b = u(void 0)
      ? "undefined"
          .replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1")
          .replace(/\x08/g, "\\x08")
      : "\\s";
    return a.replace(
      new RegExp("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])", "g"),
      function (a, b, e) {
        return b + e.toUpperCase();
      }
    );
  }
  var eb;
  a: {
    var fb = t.navigator;
    if (fb) {
      var gb = fb.userAgent;
      if (gb) {
        eb = gb;
        break a;
      }
    }
    eb = "";
  }
  function A(a) {
    return -1 != eb.indexOf(a);
  }
  function hb(a, b, c) {
    for (var d in a) b.call(c, a[d], d, a);
  }
  function ib(a, b) {
    var c = {},
      d;
    for (d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
    return c;
  }
  function jb(a) {
    var b = kb,
      c;
    for (c in b) if (!a.call(void 0, b[c], c, b)) return !1;
    return !0;
  }
  function lb(a) {
    var b = [],
      c = 0,
      d;
    for (d in a) b[c++] = a[d];
    return b;
  }
  function mb(a, b) {
    for (var c in a) if (a[c] == b) return !0;
    return !1;
  }
  var nb =
    "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(
      " "
    );
  function ob(a, b) {
    for (var c, d, e = 1; e < arguments.length; e++) {
      d = arguments[e];
      for (c in d) a[c] = d[c];
      for (var f = 0; f < nb.length; f++)
        (c = nb[f]),
          Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
    }
  }
  function pb() {
    return (
      A("Safari") &&
      !(
        qb() ||
        A("Coast") ||
        A("Opera") ||
        A("Edge") ||
        A("Silk") ||
        A("Android")
      )
    );
  }
  function qb() {
    return (A("Chrome") || A("CriOS")) && !A("Edge");
  }
  function rb(a) {
    rb[" "](a);
    return a;
  }
  rb[" "] = qa;
  function sb(a, b) {
    try {
      return rb(a[b]), !0;
    } catch (c) {}
    return !1;
  }
  function tb(a, b) {
    var c = ub;
    return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : (c[a] = b(a));
  }
  var vb = A("Opera"),
    B = A("Trident") || A("MSIE"),
    wb = A("Edge"),
    xb =
      A("Gecko") &&
      !(-1 != eb.toLowerCase().indexOf("webkit") && !A("Edge")) &&
      !(A("Trident") || A("MSIE")) &&
      !A("Edge"),
    yb = -1 != eb.toLowerCase().indexOf("webkit") && !A("Edge"),
    zb = yb && A("Mobile");
  function Ab() {
    var a = t.document;
    return a ? a.documentMode : void 0;
  }
  var Bb;
  a: {
    var Cb = "",
      Db = (function () {
        var a = eb;
        if (xb) return /rv:([^\);]+)(\)|;)/.exec(a);
        if (wb) return /Edge\/([\d\.]+)/.exec(a);
        if (B) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
        if (yb) return /WebKit\/(\S+)/.exec(a);
        if (vb) return /(?:Version)[ \/]?(\S+)/.exec(a);
      })();
    Db && (Cb = Db ? Db[1] : "");
    if (B) {
      var Eb = Ab();
      if (null != Eb && Eb > parseFloat(Cb)) {
        Bb = String(Eb);
        break a;
      }
    }
    Bb = Cb;
  }
  var Fb = Bb,
    ub = {};
  function Gb(a) {
    return tb(a, function () {
      for (
        var b = 0,
          c = Qa(String(Fb)).split("."),
          d = Qa(String(a)).split("."),
          e = Math.max(c.length, d.length),
          f = 0;
        0 == b && f < e;
        f++
      ) {
        var g = c[f] || "",
          h = d[f] || "";
        do {
          g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
          h = /(\d*)(\D*)(.*)/.exec(h) || ["", "", "", ""];
          if (0 == g[0].length && 0 == h[0].length) break;
          b =
            ab(
              0 == g[1].length ? 0 : parseInt(g[1], 10),
              0 == h[1].length ? 0 : parseInt(h[1], 10)
            ) ||
            ab(0 == g[2].length, 0 == h[2].length) ||
            ab(g[2], h[2]);
          g = g[3];
          h = h[3];
        } while (0 == b);
      }
      return 0 <= b;
    });
  }
  var Hb;
  var Ib = t.document;
  Hb =
    Ib && B
      ? Ab() || ("CSS1Compat" == Ib.compatMode ? parseInt(Fb, 10) : 5)
      : void 0;
  function Jb(a) {
    var b = !1,
      c;
    return function () {
      b || ((c = a()), (b = !0));
      return c;
    };
  }
  var Kb = !B || 9 <= Number(Hb),
    Lb = B || vb || yb;
  function C(a, b) {
    this.x = void 0 !== a ? a : 0;
    this.y = void 0 !== b ? b : 0;
  }
  C.prototype.ceil = function () {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    return this;
  };
  C.prototype.floor = function () {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    return this;
  };
  C.prototype.round = function () {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    return this;
  };
  function E(a, b) {
    this.width = a;
    this.height = b;
  }
  function Mb(a, b) {
    return a == b
      ? !0
      : a && b
      ? a.width == b.width && a.height == b.height
      : !1;
  }
  E.prototype.aspectRatio = function () {
    return this.width / this.height;
  };
  E.prototype.ceil = function () {
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this;
  };
  E.prototype.floor = function () {
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this;
  };
  E.prototype.round = function () {
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this;
  };
  function Nb(a) {
    return a ? new Ob(F(a)) : Ba || (Ba = new Ob());
  }
  function Pb() {
    var a = document;
    a.getElementsByClassName
      ? (a = a.getElementsByClassName("GoogleActiveViewContainer")[0])
      : ((a = document),
        (a =
          a.querySelectorAll && a.querySelector
            ? a.querySelector(".GoogleActiveViewContainer")
            : Qb(a, "*", "GoogleActiveViewContainer", void 0)[0] || null));
    return a || null;
  }
  function Qb(a, b, c, d) {
    a = d || a;
    var e = b && "*" != b ? String(b).toUpperCase() : "";
    if (a.querySelectorAll && a.querySelector && (e || c))
      return a.querySelectorAll(e + (c ? "." + c : ""));
    if (c && a.getElementsByClassName) {
      b = a.getElementsByClassName(c);
      if (e) {
        a = {};
        for (var f = (d = 0), g; (g = b[f]); f++)
          e == g.nodeName && (a[d++] = g);
        a.length = d;
        return a;
      }
      return b;
    }
    b = a.getElementsByTagName(e || "*");
    if (c) {
      a = {};
      for (f = d = 0; (g = b[f]); f++) {
        e = g.className;
        var h;
        if ((h = "function" == typeof e.split)) h = 0 <= Ca(e.split(/\s+/), c);
        h && (a[d++] = g);
      }
      a.length = d;
      return a;
    }
    return b;
  }
  function Rb(a, b) {
    hb(b, function (b, d) {
      b && "object" == typeof b && b.kc && (b = b.jc());
      "style" == d
        ? (a.style.cssText = b)
        : "class" == d
        ? (a.className = b)
        : "for" == d
        ? (a.htmlFor = b)
        : Sb.hasOwnProperty(d)
        ? a.setAttribute(Sb[d], b)
        : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0)
        ? a.setAttribute(d, b)
        : (a[d] = b);
    });
  }
  var Sb = {
    cellpadding: "cellPadding",
    cellspacing: "cellSpacing",
    colspan: "colSpan",
    frameborder: "frameBorder",
    height: "height",
    maxlength: "maxLength",
    nonce: "nonce",
    role: "role",
    rowspan: "rowSpan",
    type: "type",
    usemap: "useMap",
    valign: "vAlign",
    width: "width",
  };
  function Tb(a) {
    var b = a.scrollingElement
      ? a.scrollingElement
      : yb || "CSS1Compat" != a.compatMode
      ? a.body || a.documentElement
      : a.documentElement;
    a = a.parentWindow || a.defaultView;
    return B && Gb("10") && a.pageYOffset != b.scrollTop
      ? new C(b.scrollLeft, b.scrollTop)
      : new C(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop);
  }
  function Ub(a) {
    return a ? a.parentWindow || a.defaultView : window;
  }
  function Vb(a, b, c) {
    var d = arguments,
      e = document,
      f = String(d[0]),
      g = d[1];
    if (!Kb && g && (g.name || g.type)) {
      f = ["<", f];
      g.name && f.push(' name="', Ra(g.name), '"');
      if (g.type) {
        f.push(' type="', Ra(g.type), '"');
        var h = {};
        ob(h, g);
        delete h.type;
        g = h;
      }
      f.push(">");
      f = f.join("");
    }
    f = e.createElement(f);
    g &&
      (u(g)
        ? (f.className = g)
        : "array" == sa(g)
        ? (f.className = g.join(" "))
        : Rb(f, g));
    2 < d.length && Wb(e, f, d);
    return f;
  }
  function Wb(a, b, c) {
    function d(c) {
      c && b.appendChild(u(c) ? a.createTextNode(c) : c);
    }
    for (var e = 2; e < c.length; e++) {
      var f = c[e];
      !ta(f) || (ua(f) && 0 < f.nodeType) ? d(f) : z(Xb(f) ? Ma(f) : f, d);
    }
  }
  function Yb(a) {
    var b;
    if (
      Lb &&
      !(
        B &&
        Gb("9") &&
        !Gb("10") &&
        t.SVGElement &&
        a instanceof t.SVGElement
      ) &&
      (b = a.parentElement)
    )
      return b;
    b = a.parentNode;
    return ua(b) && 1 == b.nodeType ? b : null;
  }
  function Zb(a) {
    var b,
      c = arguments.length;
    if (!c) return null;
    if (1 == c) return arguments[0];
    var d = [],
      e = Infinity;
    for (b = 0; b < c; b++) {
      for (var f = [], g = arguments[b]; g; ) f.unshift(g), (g = g.parentNode);
      d.push(f);
      e = Math.min(e, f.length);
    }
    f = null;
    for (b = 0; b < e; b++) {
      g = d[0][b];
      for (var h = 1; h < c; h++) if (g != d[h][b]) return f;
      f = g;
    }
    return f;
  }
  function F(a) {
    return 9 == a.nodeType ? a : a.ownerDocument || a.document;
  }
  function $b(a) {
    try {
      return (
        a.contentWindow || (a.contentDocument ? Ub(a.contentDocument) : null)
      );
    } catch (b) {}
    return null;
  }
  function Xb(a) {
    if (a && "number" == typeof a.length) {
      if (ua(a))
        return "function" == typeof a.item || "string" == typeof a.item;
      if (w(a)) return "function" == typeof a.item;
    }
    return !1;
  }
  function ac(a, b) {
    a && (a = a.parentNode);
    for (var c = 0; a; ) {
      if (b(a)) return a;
      a = a.parentNode;
      c++;
    }
    return null;
  }
  function Ob(a) {
    this.a = a || t.document || document;
  }
  function bc() {
    return !cc() && (A("iPod") || A("iPhone") || A("Android") || A("IEMobile"));
  }
  function cc() {
    return A("iPad") || (A("Android") && !A("Mobile")) || A("Silk");
  }
  function dc(a) {
    try {
      return !!a && null != a.location.href && sb(a, "foo");
    } catch (b) {
      return !1;
    }
  }
  function ec(a, b) {
    if (a)
      for (var c in a)
        Object.prototype.hasOwnProperty.call(a, c) &&
          b.call(void 0, a[c], c, a);
  }
  function fc() {
    var a = gc;
    if (!a) return "";
    var b = /.*[&#?]google_debug(=[^&]*)?(&.*)?$/;
    try {
      var c = b.exec(decodeURIComponent(a));
      if (c) return c[1] && 1 < c[1].length ? c[1].substring(1) : "true";
    } catch (d) {}
    return "";
  }
  var hc = Jb(function () {
    var a = !1;
    try {
      var b = Object.defineProperty({}, "passive", {
        get: function () {
          a = !0;
        },
      });
      t.addEventListener("test", null, b);
    } catch (c) {}
    return a;
  });
  function ic(a) {
    return a ? (a.passive && hc() ? a : a.capture || !1) : a;
  }
  function jc(a, b, c, d) {
    a.addEventListener && a.addEventListener(b, c, ic(d));
  }
  function kc(a, b, c) {
    a.removeEventListener && a.removeEventListener(b, c, ic(void 0));
  }
  function lc(a, b, c, d) {
    c = void 0 === c ? !1 : c;
    d = void 0 === d ? !1 : d;
    a.google_image_requests || (a.google_image_requests = []);
    var e = a.document.createElement("img");
    if (d) {
      var f = function () {
        if (d) {
          var b = a.google_image_requests,
            c = Ca(b, e);
          0 <= c && Array.prototype.splice.call(b, c, 1);
        }
        kc(e, "load", f);
        kc(e, "error", f);
      };
      jc(e, "load", f);
      jc(e, "error", f);
    }
    c && (e.referrerPolicy = "no-referrer");
    e.src = b;
    a.google_image_requests.push(e);
  }
  var mc = Jb(function () {
    return "referrerPolicy" in t.document.createElement("img");
  });
  var nc,
    oc = parseFloat("");
  nc = isNaN(oc) || 1 < oc || 0 > oc ? 0 : oc;
  var pc;
  pc = /^true$/.test("false");
  function G(a, b, c, d) {
    this.top = a;
    this.right = b;
    this.bottom = c;
    this.left = d;
  }
  k = G.prototype;
  k.va = function () {
    return this.right - this.left;
  };
  k.ua = function () {
    return this.bottom - this.top;
  };
  function qc(a) {
    return new G(a.top, a.right, a.bottom, a.left);
  }
  function rc(a, b) {
    return a == b
      ? !0
      : a && b
      ? a.top == b.top &&
        a.right == b.right &&
        a.bottom == b.bottom &&
        a.left == b.left
      : !1;
  }
  k.ceil = function () {
    this.top = Math.ceil(this.top);
    this.right = Math.ceil(this.right);
    this.bottom = Math.ceil(this.bottom);
    this.left = Math.ceil(this.left);
    return this;
  };
  k.floor = function () {
    this.top = Math.floor(this.top);
    this.right = Math.floor(this.right);
    this.bottom = Math.floor(this.bottom);
    this.left = Math.floor(this.left);
    return this;
  };
  k.round = function () {
    this.top = Math.round(this.top);
    this.right = Math.round(this.right);
    this.bottom = Math.round(this.bottom);
    this.left = Math.round(this.left);
    return this;
  };
  function sc(a, b, c) {
    b instanceof C
      ? ((a.left += b.x), (a.right += b.x), (a.top += b.y), (a.bottom += b.y))
      : ((a.left += b),
        (a.right += b),
        v(c) && ((a.top += c), (a.bottom += c)));
    return a;
  }
  var tc = {};
  function uc(a, b) {
    var c = a.style[bb(b)];
    if ("undefined" !== typeof c) a = c;
    else {
      c = a.style;
      var d = tc[b];
      if (!d) {
        var e = bb(b);
        d = e;
        void 0 === a.style[e] &&
          ((e =
            (yb ? "Webkit" : xb ? "Moz" : B ? "ms" : vb ? "O" : null) + db(e)),
          void 0 !== a.style[e] && (d = e));
        tc[b] = d;
      }
      a = c[d] || "";
    }
    return a;
  }
  function vc(a) {
    try {
      var b = a.getBoundingClientRect();
    } catch (c) {
      return { left: 0, top: 0, right: 0, bottom: 0 };
    }
    B &&
      a.ownerDocument.body &&
      ((a = a.ownerDocument),
      (b.left -= a.documentElement.clientLeft + a.body.clientLeft),
      (b.top -= a.documentElement.clientTop + a.body.clientTop));
    return b;
  }
  function wc(a, b) {
    var c = new C(0, 0),
      d = Ub(F(a));
    if (!sb(d, "parent")) return c;
    do {
      if (d == b) {
        var e = a,
          f = F(e);
        var g = new C(0, 0);
        var h = f ? F(f) : document;
        h =
          !B || 9 <= Number(Hb) || "CSS1Compat" == Nb(h).a.compatMode
            ? h.documentElement
            : h.body;
        e != h &&
          ((e = vc(e)),
          (f = Tb(Nb(f).a)),
          (g.x = e.left + f.x),
          (g.y = e.top + f.y));
      } else (g = vc(a)), (g = new C(g.left, g.top));
      c.x += g.x;
      c.y += g.y;
    } while (
      d &&
      d != b &&
      d != d.parent &&
      (a = d.frameElement) &&
      (d = d.parent)
    );
    return c;
  }
  function xc(a) {
    a = void 0 === a ? t : a;
    var b = a.context || a.AMP_CONTEXT_DATA;
    if (!b)
      try {
        b = a.parent.context || a.parent.AMP_CONTEXT_DATA;
      } catch (c) {}
    try {
      if (b && b.pageViewId && b.canonicalUrl) return b;
    } catch (c) {}
    return null;
  }
  function yc(a) {
    return !(!a || !a.call) && "function" === typeof a;
  }
  function zc() {
    var a = x.documentElement,
      b = H();
    try {
      if (x.createEvent) {
        var c = x.createEvent("CustomEvent");
        c.initCustomEvent("osd_load", !0, !0, "");
        a.dispatchEvent(c);
      } else if (yc(b.CustomEvent)) {
        var d = new b.CustomEvent("osd_load", {
          bubbles: !0,
          cancelable: !0,
          detail: "",
        });
        a.dispatchEvent(d);
      } else if (yc(b.Event)) {
        var e = new Event("osd_load", { bubbles: !0, cancelable: !0 });
        a.dispatchEvent(e);
      }
    } catch (f) {}
  }
  function Ac() {
    var a = H();
    return "complete" === a.document.readyState || !!a.google_onload_fired;
  }
  var Bc = !!window.google_async_iframe_id,
    Cc = (Bc && window.parent) || window;
  function H() {
    if (Bc && !dc(Cc)) {
      var a = "." + x.domain;
      try {
        for (; 2 < a.split(".").length && !dc(Cc); )
          (x.domain = a = a.substr(a.indexOf(".") + 1)), (Cc = window.parent);
      } catch (b) {}
      dc(Cc) || (Cc = window);
    }
    return Cc;
  }
  function Dc(a, b, c) {
    a && null !== b && b != b.top && (b = b.top);
    try {
      if (void 0 === c ? 0 : c)
        var d = new E(b.innerWidth, b.innerHeight).round();
      else {
        var e = (b || window).document,
          f = "CSS1Compat" == e.compatMode ? e.documentElement : e.body;
        d = new E(f.clientWidth, f.clientHeight).round();
      }
      return d;
    } catch (g) {
      return new E(-12245933, -12245933);
    }
  }
  var Ec = { NONE: 0, Ub: 1 },
    Fc = { hc: 1 };
  function Gc() {
    this.s = 0;
    this.g = !1;
    this.f = -1;
    this.c = !1;
    this.a = 0;
  }
  function Hc(a) {
    return a.c ? 0.3 <= a.s : 0.5 <= a.s;
  }
  var I = { Eb: 0, Wb: 1 },
    Ic = { fc: 0, dc: 1, ec: 2 },
    Jc = { 370204044: 0, 370204045: 1 },
    Kc = { 370204032: 0, 370204033: 1 },
    Lc = { 370204034: 0, 370204035: 1, 370204038: 0, 370204039: 1 },
    Mc = { 370204028: 0, 370204029: 1, 370204040: 0, 370204041: 1 },
    Nc = { 953563515: 0, 953563516: 1, 953563517: 2 },
    Oc = { 370204018: 0, 370204019: 1, 370204026: 0, 370204027: 1 },
    Pc = { 668123008: 0, 668123009: 1 },
    Qc = { 668123028: 0, 668123029: 1 },
    Rc = { NONE: 0, $b: 1 },
    Sc = { 480596784: 0, 480596785: 1 },
    Tc = { Eb: 0, bc: 1, ac: 2 },
    Uc = { 21061799: 0, 21061800: 1, 21061801: 2 };
  function Vc(a) {
    this.g = a;
    this.a = null;
    this.c = !1;
    this.f = null;
  }
  function K(a) {
    a.c = !0;
    return a;
  }
  function L(a, b) {
    a.f = void 0 === b ? null : b;
  }
  function Wc(a, b) {
    null === a.a && mb(a.g, b) && (a.a = b);
  }
  function Xc(a, b) {
    a.f &&
      z(b, function (b) {
        b = a.f[b];
        void 0 !== b && Wc(a, b);
      });
  }
  var Yc = { NONE: "none", Vb: "iemv", Xb: "xdev", cc: "mppv" };
  function Zc() {
    this.a = {};
    this.f = !0;
    this.c = {};
  }
  Zc.prototype.reset = function () {
    this.a = {};
    this.f = !0;
    this.c = {};
  };
  function M(a, b, c) {
    a.a[b] || (a.a[b] = new Vc(c));
    return a.a[b];
  }
  function $c(a, b, c) {
    (a = a.a[b]) && Wc(a, c);
  }
  function N(a, b) {
    var c = a.c;
    if (null !== c && b in c) return a.c[b];
    if ((a = a.a[b])) return a.a;
  }
  function ad(a) {
    var b = {},
      c = ib(a.a, function (a) {
        return a.c;
      });
    hb(
      c,
      function (c, e) {
        c =
          void 0 !== a.c[e]
            ? String(a.c[e])
            : c.c && null !== c.a
            ? String(c.a)
            : "";
        0 < c.length && (b[e] = c);
      },
      a
    );
    return b;
  }
  function bd(a, b) {
    if (!a.f) return b;
    b = b.split("&");
    for (var c = b.length - 1; 0 <= c; c--) {
      var d = b[c].split("="),
        e = 1 < d.length ? parseInt(d[1], 10) : 1;
      (d = a.a[d[0]]) && Wc(d, e);
    }
    return b.join("&");
  }
  function cd(a, b) {
    a.f &&
      z(lb(a.a), function (a) {
        return Xc(a, b);
      });
  }
  function dd(a, b) {
    a.f &&
      b &&
      u(b) &&
      (b = b.match(/[&;?]eid=([^&;]+)/)) &&
      2 === b.length &&
      ((b = decodeURIComponent(b[1]).split(",")),
      (b = Ea(b, function (a) {
        return Number(a);
      })),
      cd(a, b));
  }
  var ed = +new Date(),
    fd = -1,
    O = -1,
    gd = !1;
  function P() {
    return +new Date() - ed;
  }
  function hd() {
    var a = Q.j().w,
      b = 0 <= O ? P() - O : -1,
      c = gd ? P() - fd : -1;
    if (79463068 == a) return 500;
    if (947190542 == a) return 100;
    if (79463069 == a) return 200;
    a = [2e3, 4e3];
    var d = [250, 500, 1e3];
    var e = b;
    -1 != c && c < b && (e = c);
    for (b = 0; b < a.length; ++b)
      if (e < a[b]) {
        var f = d[b];
        break;
      }
    void 0 === f && (f = d[a.length]);
    return f;
  }
  function id(a, b) {
    this.c = (void 0 === a ? 0 : a) || 0;
    this.a = (void 0 === b ? "" : b) || "";
  }
  function jd(a) {
    return !!a.c || !!a.a;
  }
  id.prototype.toString = function () {
    return this.c + (this.a ? "-" : "") + this.a;
  };
  function kd(a, b, c) {
    c = void 0 === c ? {} : c;
    this.error = a;
    this.context = b.context;
    this.line = b.line || -1;
    this.msg = b.message || "";
    this.file = b.file || "";
    this.id = b.id || "jserror";
    this.meta = c;
  }
  var ld =
    /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
  var md = /^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/;
  function nd() {
    var a = t,
      b = [],
      c = null;
    do {
      var d = a;
      if (dc(d)) {
        var e = d.location.href;
        c = (d.document && d.document.referrer) || null;
      } else (e = c), (c = null);
      b.push(new od(e || "", d));
      try {
        a = d.parent;
      } catch (f) {
        a = null;
      }
    } while (a && d != a);
    d = 0;
    for (a = b.length - 1; d <= a; ++d) b[d].depth = a - d;
    d = t;
    if (
      d.location &&
      d.location.ancestorOrigins &&
      d.location.ancestorOrigins.length == b.length - 1
    )
      for (a = 1; a < b.length; ++a)
        (e = b[a]),
          e.url ||
            ((e.url = d.location.ancestorOrigins[a - 1] || ""), (e.hb = !0));
    return b;
  }
  function pd(a, b) {
    this.a = a;
    this.c = b;
  }
  function od(a, b, c) {
    this.url = a;
    this.c = b;
    this.hb = !!c;
    this.depth = v(void 0) ? void 0 : null;
  }
  function qd() {
    this.f = "&";
    this.g = !1;
    this.c = {};
    this.h = 0;
    this.a = [];
  }
  function rd(a, b) {
    var c = {};
    c[a] = b;
    return [c];
  }
  function sd(a, b, c, d, e) {
    var f = [];
    ec(a, function (a, h) {
      (a = td(a, b, c, d, e)) && f.push(h + "=" + a);
    });
    return f.join(b);
  }
  function td(a, b, c, d, e) {
    if (null == a) return "";
    b = b || "&";
    c = c || ",$";
    "string" == typeof c && (c = c.split(""));
    if (a instanceof Array) {
      if (((d = d || 0), d < c.length)) {
        for (var f = [], g = 0; g < a.length; g++)
          f.push(td(a[g], b, c, d + 1, e));
        return f.join(c[d]);
      }
    } else if ("object" == typeof a)
      return (
        (e = e || 0), 2 > e ? encodeURIComponent(sd(a, b, c, d, e + 1)) : "..."
      );
    return encodeURIComponent(String(a));
  }
  function ud(a, b, c, d) {
    a.a.push(b);
    a.c[b] = rd(c, d);
  }
  function vd(a, b, c, d) {
    b = b + "//" + c + d;
    var e = wd(a) - d.length;
    if (0 > e) return "";
    a.a.sort(function (a, b) {
      return a - b;
    });
    d = null;
    c = "";
    for (var f = 0; f < a.a.length; f++)
      for (var g = a.a[f], h = a.c[g], l = 0; l < h.length; l++) {
        if (!e) {
          d = null == d ? g : d;
          break;
        }
        var n = sd(h[l], a.f, ",$");
        if (n) {
          n = c + n;
          if (e >= n.length) {
            e -= n.length;
            b += n;
            c = a.f;
            break;
          } else
            a.g &&
              ((c = e),
              n[c - 1] == a.f && --c,
              (b += n.substr(0, c)),
              (c = a.f),
              (e = 0));
          d = null == d ? g : d;
        }
      }
    a = "";
    null != d && (a = c + "trn=" + d);
    return b + a;
  }
  function wd(a) {
    var b = 1,
      c;
    for (c in a.c) b = c.length > b ? c.length : b;
    return 3997 - b - a.f.length - 1;
  }
  function xd(a, b, c, d) {
    if (Math.random() < (d || a.a))
      try {
        if (c instanceof qd) var e = c;
        else
          (e = new qd()),
            ec(c, function (a, b) {
              var c = e,
                d = c.h++;
              a = rd(b, a);
              c.a.push(d);
              c.c[d] = a;
            });
        var f = vd(e, a.g, a.c, a.f + b + "&");
        f && lc(t, f, !1, !1);
      } catch (g) {}
  }
  var yd = null;
  function zd() {
    var a = t.performance;
    return a && a.now && a.timing
      ? Math.floor(a.now() + a.timing.navigationStart)
      : +new Date();
  }
  function Ad() {
    var a = void 0 === a ? t : a;
    return (a = a.performance) && a.now ? a.now() : null;
  }
  function Bd(a, b, c) {
    this.label = a;
    this.type = b;
    this.value = c;
    this.duration = 0;
    this.uniqueId = this.label + "_" + this.type + "_" + Math.random();
    this.slotId = void 0;
  }
  var R = t.performance,
    Cd = !!(R && R.mark && R.measure && R.clearMarks),
    Dd = Jb(function () {
      var a;
      if ((a = Cd)) {
        var b;
        if (null === yd) {
          yd = "";
          try {
            a = "";
            try {
              a = t.top.location.hash;
            } catch (c) {
              a = t.location.hash;
            }
            a && (yd = (b = a.match(/\bdeid=([\d,]+)/)) ? b[1] : "");
          } catch (c) {}
        }
        b = yd;
        a = !!b.indexOf && 0 <= b.indexOf("1337");
      }
      return a;
    });
  function Ed() {
    var a = Fd;
    this.c = [];
    this.f = a || t;
    var b = null;
    a &&
      ((a.google_js_reporting_queue = a.google_js_reporting_queue || []),
      (this.c = a.google_js_reporting_queue),
      (b = a.google_measure_js_timing));
    this.a = Dd() || (null != b ? b : 1 > Math.random());
  }
  function Gd(a) {
    a &&
      R &&
      Dd() &&
      (R.clearMarks("goog_" + a.uniqueId + "_start"),
      R.clearMarks("goog_" + a.uniqueId + "_end"));
  }
  Ed.prototype.start = function (a, b) {
    if (!this.a) return null;
    var c = Ad() || zd();
    a = new Bd(a, b, c);
    b = "goog_" + a.uniqueId + "_start";
    R && Dd() && R.mark(b);
    return a;
  };
  function Hd() {
    var a = Id;
    this.g = Jd;
    this.f = !0;
    this.h = this.a;
    this.c = void 0 === a ? null : a;
  }
  function Kd(a, b, c, d) {
    try {
      if (a.c && a.c.a) {
        var e = a.c.start(b.toString(), 3);
        var f = c();
        var g = a.c;
        c = e;
        if (g.a && v(c.value)) {
          var h = Ad() || zd();
          c.duration = h - c.value;
          var l = "goog_" + c.uniqueId + "_end";
          R && Dd() && R.mark(l);
          g.a && g.c.push(c);
        }
      } else f = c();
    } catch (n) {
      g = a.f;
      try {
        Gd(e),
          (g = (d || a.h).call(
            a,
            b,
            new Ld(Md(n), n.fileName, n.lineNumber),
            void 0,
            void 0
          ));
      } catch (m) {
        a.a(217, m);
      }
      if (!g) throw n;
    }
    return f;
  }
  function Nd(a, b) {
    var c = Od;
    return function (d) {
      for (var e = [], f = 0; f < arguments.length; ++f) e[f] = arguments[f];
      return Kd(
        c,
        a,
        function () {
          return b.apply(void 0, e);
        },
        void 0
      );
    };
  }
  Hd.prototype.a = function (a, b, c, d, e) {
    e = e || "jserror";
    try {
      var f = new qd();
      f.g = !0;
      ud(f, 1, "context", a);
      (b.error && b.meta && b.id) ||
        (b = new Ld(Md(b), b.fileName, b.lineNumber));
      b.msg && ud(f, 2, "msg", b.msg.substring(0, 512));
      b.file && ud(f, 3, "file", b.file);
      0 < b.line && ud(f, 4, "line", b.line);
      var g = b.meta || {};
      if (d)
        try {
          d(g);
        } catch (Ha) {}
      b = [g];
      f.a.push(5);
      f.c[5] = b;
      var h = nd(),
        l = new od(t.location.href, t, !1);
      b = null;
      var n = h.length - 1;
      for (d = n; 0 <= d; --d) {
        var m = h[d];
        !b && md.test(m.url) && (b = m);
        if (m.url && !m.hb) {
          l = m;
          break;
        }
      }
      m = null;
      var D = h.length && h[n].url;
      0 != l.depth && D && (m = h[n]);
      var J = new pd(l, m);
      J.c && ud(f, 6, "top", J.c.url || "");
      ud(f, 7, "url", J.a.url || "");
      xd(this.g, e, f, c);
    } catch (Ha) {
      try {
        xd(
          this.g,
          e,
          { context: "ecmserr", rctx: a, msg: Md(Ha), url: J && J.a.url },
          c
        );
      } catch (xh) {}
    }
    return this.f;
  };
  function Md(a) {
    var b = a.toString();
    a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
    a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
    if (a.stack) {
      a = a.stack;
      var c = b;
      try {
        -1 == a.indexOf(c) && (a = c + "\n" + a);
        for (var d; a != d; )
          (d = a),
            (a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1"));
        b = a.replace(/\n */g, "\n");
      } catch (e) {
        b = c;
      }
    }
    return b;
  }
  function Ld(a, b, c) {
    kd.call(this, Error(a), {
      message: a,
      file: void 0 === b ? "" : b,
      line: void 0 === c ? -1 : c,
    });
  }
  p(Ld, kd);
  var Jd,
    Od,
    Fd = H(),
    Id = new Ed();
  function Pd() {
    if (!Fd.google_measure_js_timing) {
      var a = Id;
      a.a = !1;
      a.c != a.f.google_js_reporting_queue &&
        (Dd() && z(a.c, Gd), (a.c.length = 0));
    }
  }
  Jd = new (function () {
    var a = void 0 === a ? y : a;
    this.g = "http:" === a.location.protocol ? "http:" : "https:";
    this.c = "pagead2.googlesyndication.com";
    this.f = "/pagead/gen_204?id=";
    this.a = 0.01;
  })();
  Od = new Hd();
  "complete" == Fd.document.readyState
    ? Pd()
    : Id.a &&
      jc(Fd, "load", function () {
        Pd();
      });
  function Qd(a, b) {
    return Kd(Od, a, b, Rd);
  }
  function S(a, b) {
    return Nd(a, b);
  }
  var Rd = Od.a;
  function T(a, b, c) {
    Od.a(a, b, c, void 0);
  }
  pc && (Jd.a = 1);
  if (x && x.URL) {
    var Sd,
      gc = x.URL;
    Sd = !!gc && 0 < fc().length;
    Od.f = !Sd;
  }
  function U(a, b, c, d, e) {
    c = Nd(d, c);
    jc(a, b, c, { capture: void 0 === e ? !1 : e });
    return c;
  }
  function Td(a) {
    var b = ["IMG", "FRAME", "IFRAME"];
    return Ga(b, function (b) {
      return a.nodeName == String(b);
    })
      ? [a]
      : Fa(
          b,
          function (b, d) {
            return b.concat(
              Ma((a || document).getElementsByTagName(String(d)))
            );
          },
          []
        );
  }
  function Ud(a, b) {
    if (a) {
      var c = 0,
        d = null;
      a = Td(a);
      for (var e = 0; e < a.length; e++) {
        var f = !1;
        d = a[e];
        switch (d.nodeName) {
          case "IMG":
            var g = d;
            if (g.complete || g.naturalWidth) f = !0;
            break;
          case "FRAME":
          case "IFRAME":
            g = d;
            try {
              g.readyState
                ? (f = "complete" == g.readyState)
                : g.contentDocument &&
                  g.contentDocument.readyState &&
                  (f = "complete" == g.contentDocument.readyState);
            } catch (h) {
              f = !1;
            }
        }
        f ||
          (c++,
          U(
            d,
            "load",
            function () {
              c--;
              c || b(null);
            },
            130
          ));
      }
      a = d = null;
      c || b(null);
    }
  }
  function Vd(a, b) {
    function c(d) {
      kc(a, d, c);
      b(d);
    }
    U(a, "DOMNodeRemoved", c, 156, !1);
  }
  function Wd(a) {
    var b = [];
    hb(a, function (a, d) {
      d = encodeURIComponent(d);
      u(a) && (a = encodeURIComponent(a));
      b.push(d + "=" + a);
    });
    b.push("24=" + +new Date());
    return b.join("\n");
  }
  function Xd() {
    this.a = null;
    this.status = 0;
  }
  var Yd = !B && !pb();
  function Zd(a, b) {
    if (/-[a-z]/.test(b)) return null;
    if (Yd && a.dataset) {
      if (
        !(
          !A("Android") ||
          qb() ||
          A("Firefox") ||
          A("Opera") ||
          A("Silk") ||
          b in a.dataset
        )
      )
        return null;
      a = a.dataset[b];
      return void 0 === a ? null : a;
    }
    return a.getAttribute("data-" + cb(b));
  }
  function $d(a, b) {
    return /-[a-z]/.test(b)
      ? !1
      : Yd && a.dataset
      ? b in a.dataset
      : a.hasAttribute
      ? a.hasAttribute("data-" + cb(b))
      : !!a.getAttribute("data-" + cb(b));
  }
  function ae() {
    return (
      { visible: 1, hidden: 2, prerender: 3, preview: 4, unloaded: 5 }[
        x.visibilityState ||
          x.webkitVisibilityState ||
          x.mozVisibilityState ||
          ""
      ] || 0
    );
  }
  var be = 0;
  function ce(a, b) {
    try {
      be++, b.postMessage(a, "*");
    } catch (c) {}
  }
  function de(a, b) {
    b &&
      (a(b),
      b.frames &&
        z(b.frames, function (b) {
          de(a, b);
        }));
  }
  function ee(a, b, c, d) {
    if (!a) return { value: d, done: !1 };
    d = b(d, a);
    var e = c(d, a);
    return !e && sb(a, "parentElement")
      ? ee(Yb(a), b, c, d)
      : { done: e, value: d };
  }
  function fe(a, b, c, d) {
    if (!a) return d;
    d = ee(a, b, c, d);
    if (!d.done)
      try {
        var e = F(a),
          f = e && Ub(e);
        return fe(f && f.frameElement, b, c, d.value);
      } catch (g) {}
    return d.value;
  }
  function ge(a) {
    var b = !B || Gb(8);
    return fe(
      a,
      function (a, d) {
        a = sb(d, "style") && d.style && uc(d, "visibility");
        return { hidden: "hidden" === a, visible: b && "visible" === a };
      },
      function (a) {
        return a.hidden || a.visible;
      },
      { hidden: !1, visible: !1 }
    ).hidden;
  }
  function he(a) {
    return fe(
      a,
      function (a, c) {
        return !(!sb(c, "style") || !c.style || "none" !== uc(c, "display"));
      },
      function (a) {
        return a;
      },
      !1
    )
      ? !0
      : ge(a);
  }
  function ie(a, b, c) {
    a = a.exec(b);
    if (!(b = !a || !a[1])) {
      a = a[1];
      b = a.length;
      if (0 == b) a = 0;
      else {
        for (var d = 305419896, e = 0; e < b; e++)
          d ^= ((d << 5) + (d >> 2) + a.charCodeAt(e)) & 4294967295;
        a = 0 < d ? d : 4294967296 + d;
      }
      b = c != a;
    }
    return !b;
  }
  function je(a, b) {
    0 == a.length
      ? ((b.a = null), (b.status = 1))
      : ((a = Zb.apply(null, a)),
        !a || a.tagName ? (b.a = a) : (b.a = a.parentElement),
        b.a || (b.status = -2));
  }
  function ke(a, b, c) {
    var d = new RegExp(
        "(?:(?:[?&]|%26|&3[f]|%2526|%253[f])" +
          b +
          "(?:=|%3[d]|%253[d]))([a-z0-9-_]*)",
        "i"
      ),
      e = new Xd();
    if ("" == b || -1 == c) return (e.status = -1), e;
    try {
      b = [];
      for (
        var f = q((a.document || document).getElementsByTagName("A")),
          g = f.next();
        !g.done;
        g = f.next()
      ) {
        var h = g.value;
        ie(d, h.href, c) && ((e.status = 3), b.push(h));
      }
      if (0 < b.length) return je(b, e), e;
      var l = q((a.document || document).getElementsByTagName("EMBED"));
      for (g = l.next(); !g.done; g = l.next()) {
        var n = g.value;
        ie(d, n.src, c) &&
          (0 == n.getBoundingClientRect().height &&
          n.parentElement &&
          "OBJECT" == n.parentElement.tagName
            ? ((e.status = 5), b.push(n.parentElement))
            : ((e.status = 4), b.push(n)));
      }
      if (0 < b.length) return je(b, e), e;
    } catch (m) {
      return (e.status = 7), e;
    }
    e.status = 1;
    return e;
  }
  function le(a) {
    return new G(a.top, a.right, a.bottom, a.left);
  }
  function me() {
    var a = ae();
    return 0 == a ? -1 : 1 == a ? 0 : 1;
  }
  function ne(a, b) {
    b = void 0 === b ? y : b;
    null !== b && b != b.top && (b = b.top);
    var c = 0,
      d = 0;
    try {
      var e = b.document,
        f = e.body,
        g = e.documentElement;
      if ("CSS1Compat" == e.compatMode && g.scrollHeight)
        (c = g.scrollHeight != a.height ? g.scrollHeight : g.offsetHeight),
          (d = g.scrollWidth != a.width ? g.scrollWidth : g.offsetWidth);
      else {
        var h = g.scrollHeight,
          l = g.scrollWidth,
          n = g.offsetHeight,
          m = g.offsetWidth;
        g.clientHeight != n &&
          ((h = f.scrollHeight),
          (l = f.scrollWidth),
          (n = f.offsetHeight),
          (m = f.offsetWidth));
        h > a.height
          ? h > n
            ? ((c = h), (d = l))
            : ((c = n), (d = m))
          : h < n
          ? ((c = h), (d = l))
          : ((c = n), (d = m));
      }
      return new E(d, c);
    } catch (D) {
      return new E(-12245933, -12245933);
    }
  }
  function oe(a, b, c) {
    if (b && a)
      if (c && 0 < c.length)
        for (
          c = Da(c, function (a) {
            var b = a.parent && a.parent !== a;
            return a === y.top || b;
          }),
            a = q(c),
            c = a.next();
          !c.done;
          c = a.next()
        )
          ce(b, c.value);
      else {
        c = [];
        var d = $b(a);
        d && c.push(d);
        if (0 === c.length)
          try {
            c = Ea(
              Qb(document, "IFRAME".toString().toLowerCase(), void 0, a),
              function (a) {
                return $b(a);
              }
            );
          } catch (e) {}
        a = q(c);
        for (c = a.next(); !c.done; c = a.next()) {
          c = c.value;
          try {
            b && de(ya(ce, b), c);
          } catch (e) {}
        }
      }
  }
  function pe(a, b, c) {
    try {
      var d = Wd(b);
      oe(a, d, c);
    } catch (e) {}
  }
  function qe(a, b, c, d, e) {
    this.time = a;
    this.f = b;
    this.c = c;
    this.volume = null;
    this.g = d;
    this.a = null;
    this.h = e;
  }
  function re(a, b, c, d, e, f, g, h, l) {
    this.m = a;
    this.o = b;
    this.a = c;
    this.g = d;
    this.h = e;
    this.c = f;
    this.f = g;
    this.u = h;
    this.l = l;
  }
  function Q() {
    this.w = void 0;
    this.f = !dc(y.top);
    var a = nd();
    0 < a.length &&
      null != a[a.length - 1] &&
      null != a[a.length - 1].url &&
      (a = a[a.length - 1].url.match(ld)[3] || null) &&
      decodeURI(a);
    this.B = this.A = this.g = null;
    this.m = this.C = 0;
    this.h = !1;
    this.c = "geo";
    this.a = new Zc();
    L(K(M(this.a, "nio_mode", Ic)), Nc);
    L(K(M(this.a, "mv", Rc)), Sc);
    M(this.a, "omid", I);
    K(M(this.a, "fcs", I));
    K(M(this.a, "osd", I));
    K(M(this.a, "srmi", I));
    K(M(this.a, "epoh", I));
    K(M(this.a, "me", I));
    L(K(M(this.a, "umt", I)), Pc);
    L(K(M(this.a, "gmpd", I)), Qc);
    L(K(M(this.a, "sel", I)), Oc);
    L(K(M(this.a, "cll", Tc)), Uc);
    L(K(M(this.a, "ioa", I)), Mc);
    L(K(M(this.a, "isu", I)), Kc);
    L(K(M(this.a, "ald", I)), Lc);
    L(K(M(this.a, "ftm", I)), Jc);
    K(M(this.a, "inapp", Fc));
    this.u = !1;
    this.o = this.l = -1;
  }
  ra(Q);
  function se(a) {
    this.f = a;
    this.c = 0;
    this.a = null;
  }
  se.prototype.cancel = function () {
    y.clearTimeout(this.a);
    this.a = null;
  };
  function te(a) {
    y &&
      (a.a = y.setTimeout(
        S(143, function () {
          a.c++;
          a.f.tb();
        }),
        hd()
      ));
  }
  function ue(a, b, c) {
    this.c = a;
    this.V = void 0 === c ? "na" : c;
    this.u = [];
    this.B = !1;
    this.a = new qe(-1, new E(0, 0), new E(0, 0), !0, this);
    this.g = this;
    this.A = this.l = b;
    this.M = cc() || bc();
    this.H = !1;
    this.I = null;
    this.w = !1;
    this.L = "uk";
  }
  k = ue.prototype;
  k.ea = function () {
    return this.N();
  };
  k.N = function () {
    return !0;
  };
  k.gb = function () {
    this.B = !0;
  };
  k.aa = function () {
    return this.L;
  };
  k.X = function () {
    return this.w;
  };
  function ve(a, b) {
    a.w || ((a.w = !0), (a.L = b), (a.A = 0), a.g == a && ((a.l = 0), we(a)));
  }
  k.P = function () {
    return this.g == this ? this.V : this.g.P();
  };
  k.O = function () {
    return {};
  };
  k.T = function () {
    return this.l;
  };
  function xe(a, b) {
    0 <= Ca(a.u, b) || (a.u.push(b), b.W(a.g), b.U(a.a), b.da() && (a.H = !0));
  }
  k.tb = function () {};
  function ye(a) {
    var b = Ma(a.u);
    z(b, function (b) {
      b.U(a.a);
    });
  }
  function we(a) {
    var b = Ma(a.u);
    z(b, function (b) {
      b.W(a.g);
    });
    a.g != a || ye(a);
  }
  k.W = function (a) {
    var b = this.l,
      c = a.T();
    this.g = c < this.A ? this : a;
    this.l = this.g != this ? c : this.A;
    this.l != b && we(this);
  };
  function ze(a, b) {
    var c = a.a,
      d = a.H;
    c = !(
      b &&
      (void 0 === d || !d || c.volume == b.volume) &&
      c.g == b.g &&
      rc(c.a, b.a) &&
      Mb(c.c, b.c) &&
      Mb(c.f, b.f)
    );
    a.a = b;
    c && ye(a);
  }
  k.U = function (a) {
    this.g != this && ze(this, a);
  };
  k.da = function () {
    return this.H;
  };
  k.nb = function () {
    var a = ae(),
      b = 1 === a;
    a = 0 === a;
    return Q.j().h ? b : b || a;
  };
  function Ae(a, b, c, d) {
    this.f = a;
    this.h = this.a = b;
    this.u = c;
    this.o = d;
    this.c = new re(
      b.a,
      this.f,
      new G(0, 0, 0, 0),
      null,
      this.ma(),
      0,
      0,
      P(),
      0
    );
  }
  k = Ae.prototype;
  k.mb = function () {};
  k.Sa = function () {};
  k.$ = function () {
    this.c = new re(
      this.a.a,
      this.f,
      this.c.a,
      this.c.g,
      this.ma(),
      this.c.c,
      this.c.f,
      this.c.u,
      this.c.l
    );
  };
  k.O = function () {
    return this.h.O();
  };
  k.T = function () {
    return this.h.T();
  };
  k.aa = function () {
    return this.h.aa();
  };
  k.X = function () {
    return this.h.X();
  };
  k.W = function (a) {
    this.h = a;
    this.o.W(this);
  };
  k.U = function () {
    this.$();
  };
  k.da = function () {
    return this.o.da();
  };
  function Be(a) {
    this.a = a;
  }
  k = Be.prototype;
  k.T = function () {
    return this.a.T();
  };
  k.aa = function () {
    return this.a.aa();
  };
  k.X = function () {
    return this.a.X();
  };
  k.create = function (a, b, c) {
    var d = null;
    this.a && ((d = this.La(a, b, c)), xe(this.a, d));
    return d;
  };
  k.ea = function () {
    return this.N();
  };
  k.N = function () {
    return !1;
  };
  k.lb = function () {
    return !0;
  };
  k.O = function () {
    return {};
  };
  function Ce(a, b, c) {
    this.f = void 0 === c ? 0 : c;
    this.c = a;
    this.a = null == b ? "" : b;
  }
  function De(a) {
    switch (Math.trunc(a.f)) {
      case -16:
        return -16;
      case -8:
        return -8;
      case 0:
        return 0;
      case 8:
        return 8;
      case 16:
        return 16;
      default:
        return 16;
    }
  }
  function Ee(a, b) {
    return a.f < b.f
      ? !0
      : a.f > b.f
      ? !1
      : a.c < b.c
      ? !0
      : a.c > b.c
      ? !1
      : typeof a.a < typeof b.a
      ? !0
      : typeof a.a > typeof b.a
      ? !1
      : a.a < b.a;
  }
  function Fe() {
    this.f = 0;
    this.a = [];
    this.c = !1;
  }
  Fe.prototype.add = function (a, b, c) {
    ++this.f;
    a = new Ce(a, b, c);
    this.a.push(new Ce(a.c, a.a, a.f + this.f / 4096));
    this.c = !0;
    return this;
  };
  function Ge(a, b) {
    z(b.a, function (b) {
      a.add(b.c, b.a, De(b));
    });
  }
  function He(a, b) {
    var c = void 0 === c ? 0 : c;
    var d = void 0 === d ? !0 : d;
    ec(b, function (b, f) {
      (d && void 0 === b) || a.add(f, b, c);
    });
  }
  function Ie(a) {
    var b = Je;
    a.c &&
      (Na(a.a, function (a, b) {
        return Ee(b, a) ? 1 : Ee(a, b) ? -1 : 0;
      }),
      (a.c = !1));
    return Fa(
      a.a,
      function (a, d) {
        d = b(d);
        return "" + a + ("" != a && "" != d ? "&" : "") + d;
      },
      ""
    );
  }
  function Je(a) {
    var b = a.c;
    a = a.a;
    return "" === a
      ? b
      : "boolean" == typeof a
      ? a
        ? b
        : ""
      : "array" == sa(a)
      ? 0 === a.length
        ? b
        : b + "=" + a.join()
      : b + "=" + a;
  }
  var Ke,
    Le = new Date(0);
  Ke =
    $a(Le.getUTCFullYear(), 4) +
    $a(Le.getUTCMonth() + 1, 2) +
    $a(Le.getUTCDate(), 2) +
    "T" +
    $a(Le.getUTCHours(), 2) +
    $a(Le.getUTCMinutes(), 2) +
    "Z";
  function Me(a) {
    var b = void 0 === b ? !0 : b;
    this.a = new Fe();
    void 0 !== a && Ge(this.a, a);
    b && this.a.add("avv", Ke, -16);
  }
  Me.prototype.toString = function () {
    var a = "//pagead2.googlesyndication.com//pagead/gen_204",
      b = Ie(this.a);
    0 < b.length && (a += "?" + b);
    return a;
  };
  function Ne(a) {
    var b = [],
      c = [];
    hb(a, function (a, e) {
      if (!(e in Object.prototype) && "undefined" != typeof a)
        switch (
          ("array" == sa(a) && (a = a.join(",")), (a = [e, "=", a].join("")), e)
        ) {
          case "adk":
          case "r":
          case "tt":
          case "error":
          case "mtos":
          case "tos":
          case "p":
          case "bs":
          case "aio":
          case "nio":
          case "iem":
            b.unshift(a);
            break;
          case "req":
          case "url":
          case "referrer":
          case "iframe_loc":
            c.push(a);
            break;
          default:
            b.push(a);
        }
    });
    return b.concat(c);
  }
  function Oe() {
    this.a = 0;
  }
  ra(Oe);
  function Pe(a) {
    this.u = a;
    this.o = !1;
  }
  Pe.prototype.l = function (a, b) {
    this.a = a;
    this.c = b;
  };
  function Qe() {
    Pe.call(this, "capability");
  }
  p(Qe, Pe);
  Qe.prototype.m = function () {
    return !0;
  };
  Qe.prototype.h = function () {
    var a = {};
    return (a.b = this.a.Y), (a.v = this.c.Y), a;
  };
  function Re() {
    Pe.call(this, "diff");
  }
  p(Re, Pe);
  Re.prototype.m = function () {
    return !(0.02 >= Math.abs(this.c.s - this.a.s));
  };
  Re.prototype.h = function () {
    var a = {};
    return (
      (a.b = this.a.Y),
      (a.v = this.c.Y),
      (a.b_vp_off = JSON.stringify(this.a.J)),
      (a.v_vp_off = JSON.stringify(this.c.J)),
      (a.b_vp_sz = JSON.stringify(this.a.F)),
      (a.v_vp_sz = JSON.stringify(this.c.F)),
      (a.b_exp = this.a.s),
      (a.v_exp = this.c.s),
      (a.efp_occ = this.a.xb),
      (a.exp_meas = this.c.Za),
      (a.sbv = this.a.fa),
      a
    );
  };
  function Se() {
    Pe.call(this, "capt");
    this.g = [];
    this.f = [];
  }
  p(Se, Pe);
  Se.prototype.l = function (a, b) {
    Pe.prototype.l.call(this, a, b);
    20 <= this.f.length || (this.g.push(a.s), this.f.push(b.s));
  };
  Se.prototype.m = function () {
    return 20 === this.f.length;
  };
  Se.prototype.h = function () {
    var a = Te(this.g, this.f),
      b = Ue(this.g, this.f),
      c = {};
    return (
      (c.b = this.a.Y),
      (c.v = this.c.Y),
      (c.b_exp = this.g.join(",")),
      (c.v_exp = this.f.join(",")),
      (c.diff = a),
      (c.diff_buckets = b),
      c
    );
  };
  function Te(a, b) {
    return Ia(Pa(a, b), function (a) {
      return a[0] !== a[1];
    });
  }
  function Ue(a, b) {
    function c(a) {
      return 0.25 * Math.floor(a / 0.25);
    }
    return Te(Ea(a, c), Ea(b, c));
  }
  function Ve(a, b, c, d) {
    var e = void 0 === e ? [new Qe(), new Re(), new Se()] : e;
    this.c = a.La(b, c, this);
    this.f = e;
    this.a = d;
  }
  function We(a, b, c) {
    z(a.f, function (d) {
      var e = a.a;
      if (!d.o && (d.l(b, c), d.m())) {
        d.o = !0;
        var f = d.h(),
          g = new Fe();
        g.add("id", "av-js");
        g.add("type", "verif");
        g.add("vtype", d.u);
        d = Oe.j();
        g.add("i", d.a++);
        g.add("adk", e);
        He(g, f);
        e = new Me(g).toString();
        e = /id=lidar(2|im|tos)&v=\d+/.test(e)
          ? e
          : /r\d{8}/.test("r20180723")
          ? e + "&v=r20180723"
          : e;
        e = e.substring(0, 4e3);
        f = H() || y;
        lc(f, e, !1, !1);
      }
    });
  }
  Ve.prototype.U = function () {};
  Ve.prototype.W = function () {};
  Ve.prototype.da = function () {
    return !1;
  };
  var V = {},
    Xe = null;
  V.le = 0;
  V.nt = 2;
  V.Fr = 3;
  V.Po = 5;
  V.me = 1;
  V.om = 4;
  function Ye(a) {
    a = xc(a);
    return !(!a || !a.observeIntersection);
  }
  function Ze(a) {
    V.e = -1;
    V.i = 6;
    V.n = 7;
    V.t = 8;
    if (!Xe) {
      var b = [];
      ec(V, function (a, c) {
        b[a + 1] = c;
      });
      var c = b.join(""),
        d = a && a[c];
      Xe =
        d &&
        function (b, c) {
          return d.call(a, b, c);
        };
    }
    return Xe;
  }
  function $e() {
    this.a = this.c = this.f = 0;
  }
  function af(a, b, c, d) {
    b && ((a.f += c), (a.c += c), (a.a = Math.max(a.a, a.c)));
    if (void 0 === d ? !b : d) a.c = 0;
  }
  var bf = [1, 0.75, 0.5, 0.3, 0];
  function cf(a) {
    this.a = a = void 0 === a ? bf : a;
    this.c = Ea(this.a, function () {
      return new $e();
    });
  }
  function df(a) {
    return ef(
      a,
      function (a) {
        return a.f;
      },
      !1
    );
  }
  function ff(a) {
    return ef(
      a,
      function (a) {
        return a.a;
      },
      !0
    );
  }
  function gf(a, b, c, d, e, f) {
    var g = void 0 === g ? !0 : g;
    c = f ? Math.min(b, c) : c;
    for (f = 0; f < a.a.length; f++) {
      var h = a.a[f],
        l = 0 < c && c >= h;
      h = !(0 < b && b >= h) || d;
      af(a.c[f], g && l, e, !g || h);
    }
  }
  function ef(a, b, c) {
    a = Ea(a.c, function (a) {
      return b(a);
    });
    return c ? a : hf(a);
  }
  function hf(a) {
    return Ea(a, function (a, c, d) {
      return 0 < c ? d[c] - d[c - 1] : d[c];
    });
  }
  function jf() {
    this.f = new cf();
    this.a = new $e();
    this.c = -1;
    this.g = new cf([1, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1, 0]);
  }
  function kf(a, b, c, d) {
    Ae.call(this, a, b, c, d);
    this.g = new G(0, 0, 0, 0);
  }
  p(kf, Ae);
  function lf(a, b, c, d) {
    return 0 >= a.va() || 0 >= a.ua()
      ? !0
      : c && d
      ? Qd(208, function () {
          return mf(a, b, c);
        })
      : !1;
  }
  function nf(a, b) {
    return a.left <= b.right &&
      b.left <= a.right &&
      a.top <= b.bottom &&
      b.top <= a.bottom
      ? new G(
          Math.max(a.top, b.top),
          Math.min(a.right, b.right),
          Math.min(a.bottom, b.bottom),
          Math.max(a.left, b.left)
        )
      : new G(0, 0, 0, 0);
  }
  function of(a, b) {
    b = pf(b);
    return 0 === b ? 0 : pf(a) / b;
  }
  function pf(a) {
    return Math.max(a.ua() * a.va(), 0);
  }
  function mf(a, b, c) {
    if (!a || !b) return !1;
    b = sc(qc(a), -b.left, -b.top);
    a = (b.left + b.right) / 2;
    b = (b.top + b.bottom) / 2;
    var d = H();
    dc(d.top) && d.top && d.top.document && (d = d.top);
    d = Ze(d && d.document);
    if (!d) return !1;
    a = d(a, b);
    if (!a) return !1;
    b =
      (b = (b = F(c)) && b.defaultView && b.defaultView.frameElement) &&
      qf(b, a);
    d = a === c;
    a =
      !d &&
      a &&
      ac(a, function (a) {
        return a === c;
      });
    return !(b || d || a);
  }
  function qf(a, b) {
    if (!a || !b) return !1;
    for (var c = 0; null !== a && 100 > c++; ) {
      if (a === b) return !0;
      try {
        if ((a = Yb(a) || a)) {
          var d = F(a),
            e = d && Ub(d),
            f = e && e.frameElement;
          f && (a = f);
        }
      } catch (g) {
        break;
      }
    }
    return !1;
  }
  k = kf.prototype;
  k.ma = function () {
    return !0;
  };
  k.$ = function () {
    if (this.f) {
      var a = this.f.getBoundingClientRect(),
        b = a.right - a.left;
      a = a.bottom - a.top;
      var c = wc(this.f, this.a.c),
        d = c.x;
      c = c.y;
      this.g = new G(
        Math.round(c),
        Math.round(d + b),
        Math.round(c + a),
        Math.round(d)
      );
    }
    (b = this.a.a.a)
      ? ((b = nf(this.g, b)),
        (b =
          b.top >= b.bottom || b.left >= b.right
            ? new G(0, 0, 0, 0)
            : sc(b, -this.g.left, -this.g.top)))
      : (b = new G(0, 0, 0, 0));
    var e = this.a.a.a;
    c = d = a = 0;
    var f = 1 == N(this.u, "od"),
      g = (this.g.bottom - this.g.top) * (this.g.right - this.g.left);
    e &&
      b &&
      0 < g &&
      (lf(b, e, this.f, f)
        ? (b = new G(0, 0, 0, 0))
        : ((c = new G(0, window.screen.height, window.screen.width, 0)),
          (a = of(b, this.g)),
          (d = of(b, e)),
          (c = of(b, c))));
    e = this.a.a;
    f = -1 === e.time ? P() : e.time;
    this.c = new re(e, this.f, this.g, b, this.ma(), a, d, f, c);
  };
  k.X = function () {
    return this.h.X();
  };
  k.P = function () {
    return this.h.P();
  };
  k.U = function (a) {
    if (null == this.f)
      if (null != a.c) {
        var b = a.c;
        this.g = new G(0, b.width, b.height, 0);
      } else this.g = new G(0, 0, 0, 0);
    Ae.prototype.U.call(this, a);
  };
  var rf = new G(0, 0, 0, 0),
    sf = { threshold: [0, 0.3, 0.5, 0.75, 1] };
  function W(a, b, c) {
    this.a = qc(rf);
    this.B = 0;
    this.g = new jf();
    this.Ba = -2;
    this.Bb = -1;
    this.Ga = b;
    this.R = -1 != b;
    this.F = this.J = null;
    this.C = -1;
    this.H = c;
    this.Na = this.vb = qa;
    this.m = this.c = a;
    this.ha = !1;
    this.pb = { Lb: null, Kb: null };
    this.ja = !0;
    this.Ja = null;
    this.Ea = !1;
    Q.j().C++;
    this.ub = 0;
    this.f = new Gc();
    this.Ab = this.ta = -1;
    this.Da = 0;
    this.V = -1;
    this.D = new G(0, 0, 0, 0);
    this.rb = !1;
    a = this.l = new Zc();
    M(a, "od", Ec);
    K(M(a, "opac", I));
    M(a, "ud", I);
    K(M(a, "mkm", I));
    K(M(a, "xza", I));
    K(M(a, "mza", I));
    M(a, "lom", I);
    K(M(a, "sela", I));
    K(M(a, "sbeos", I));
    K(M(a, "mwt", I));
    a = H().mraid;
    ((this.c && this.c.getAttribute && $d(this.c, "googleAvInapp")) || a) &&
      $c(Q.j().a, "inapp", 1);
    1 == this.H ? $c(this.l, "od", 1) : $c(this.l, "od", 0);
  }
  k = W.prototype;
  k.U = function () {};
  k.W = function (a) {
    a.X() && this.Na(this, a.aa(), a);
  };
  k.da = function () {
    return !1;
  };
  k.Ra = function () {
    this.R = !0;
  };
  k.G = function () {
    return this.R;
  };
  k.Ta = function () {
    this.f.s = 0;
  };
  k.Ua = function () {
    this.g = new jf();
  };
  function tf(a, b, c) {
    if (a.G()) {
      var d = Ze(y && y.document);
      d && (c || a.K(y, !0), (d = uf(a, d)), a.Z(a.a, d, b, c, !0, !0));
    }
  }
  function X(a, b, c) {
    if (c(b)) return b;
    for (;;) {
      var d = Math.floor((a + b) / 2);
      if (d == a || d == b) return a;
      c(d) ? (a = d) : (b = d);
    }
  }
  function uf(a, b) {
    var c = Tb(document),
      d = Math.floor(a.a.left - c.x) + 1,
      e = Math.floor(a.a.top - c.y) + 1,
      f = Math.floor(a.a.right - c.x) - 1,
      g = Math.floor(a.a.bottom - c.y) - 1;
    a = (g - e) * (f - d);
    if (e > g || d > f) return 0;
    c = !!b(d, e);
    var h = !!b(f, g);
    if (c && h) return 1;
    var l = !!b(f, e),
      n = !!b(d, g);
    if (c)
      (g = X(e, g, function (a) {
        return !!b(d, a);
      })),
        (f = X(d, f, function (a) {
          return !!b(a, e);
        }));
    else if (l)
      (g = X(e, g, function (a) {
        return !!b(f, a);
      })),
        (d = X(f, d, function (a) {
          return !!b(a, e);
        }));
    else if (n)
      (e = X(g, e, function (a) {
        return !!b(d, a);
      })),
        (f = X(d, f, function (a) {
          return !!b(a, g);
        }));
    else if (h)
      (e = X(g, e, function (a) {
        return !!b(f, a);
      })),
        (d = X(f, d, function (a) {
          return !!b(a, g);
        }));
    else {
      var m = Math.floor((d + f) / 2),
        D = Math.floor((e + g) / 2);
      if (!b(m, D)) return 0;
      e = X(D, e, function (a) {
        return !!b(m, a);
      });
      g = X(D, g, function (a) {
        return !!b(m, a);
      });
      d = X(m, d, function (a) {
        return !!b(a, D);
      });
      f = X(m, f, function (a) {
        return !!b(a, D);
      });
    }
    return ((g - e) * (f - d)) / a;
  }
  k.wb = function (a, b, c, d, e) {
    this.G() && (c || this.K(d, e), this.Z(this.a, b, a, c, !1, !0));
  };
  function vf(a, b, c) {
    if (a.G()) {
      var d = a.f.a,
        e = c ? a.f.s : a.ub;
      a.D &&
        !rc(a.D, new G(0, 0, 0, 0)) &&
        (e = sc(qc(a.D), a.a.left, a.a.top));
      a.Z(a.a, e, b, c, !0, !0, {}, void 0, d);
    }
  }
  function wf(a) {
    return a.w ? a.w.P() : Q.j().c;
  }
  function xf(a, b, c) {
    if (a.G() && a.w) {
      var d = H(),
        e = Q.j();
      a.K(d, e.f);
      a.w.$();
      d = a.w.c;
      var f = d.m.a;
      e = !(!d.h && !f);
      if (null != d.g && f) {
        var g = d.a;
        a.J = new C(g.left - f.left, g.top - f.top);
        a.F = new E(f.right - f.left, f.bottom - f.top);
      }
      f = a.fa() ? d.f : d.c;
      a.Z(a.a, f, b, c, !0, e, void 0, void 0, d.l);
    }
  }
  function yf(a) {
    if (a.G() && a.Ja) {
      var b = 1 == N(a.l, "od"),
        c = -1 !== a.g.c,
        d = a.Ja,
        e = wf(a),
        f = a.fa();
      a = { Y: e, J: a.J, F: a.F, fa: f, s: a.f.s, xb: b, Za: c };
      if ((b = d.c)) {
        b.$();
        c = b.c;
        e = c.m.a;
        var g = !(!c.h && !e),
          h = null,
          l = null;
        null != c.g &&
          e &&
          ((h = c.a),
          (h = new C(h.left - e.left, h.top - e.top)),
          (l = new E(e.right - e.left, e.bottom - e.top)));
        f = { Y: b.P(), J: h, F: l, fa: f, xb: !1, s: f ? c.f : c.c, Za: g };
      } else f = null;
      f && We(d, a, f);
    }
  }
  k.Z = function (a, b, c, d, e, f, g, h, l) {
    void 0 === h &&
      (-1 == this.Ga
        ? (h = 0)
        : ((h = c - this.Ga || 1), (h = 1e4 < h ? 1 : h)));
    g = void 0 === l ? -1 : l;
    g = void 0 === g ? -1 : g;
    l = new Gc();
    l.g = d;
    l.f = me();
    v(b)
      ? ((l.s = zf(this, b)), (l.a = g))
      : ((l.s = zf(this, a, b)),
        (l.a =
          0 <= g ? g : (l.s * pf(a)) / (y.screen.height * y.screen.width)));
    l.c = this.ca();
    v(b) ||
      ((this.J = new C(a.left - b.left, a.top - b.top)),
      (this.F = new E(b.right - b.left, b.bottom - b.top)));
    g = this.g;
    var n = this.f;
    e = e && this.f.s >= (this.ca() ? 0.3 : 0.5);
    f && (g.c = Math.max(g.c, l.s));
    gf(g.g, l.a, n.a, l.g, h, e);
    gf(g.f, l.s, n.s, l.g, h, e);
    af(g.a, e || n.c != l.c ? Hc(n) && Hc(l) : Hc(n), h, !Hc(l) || l.g);
    this.Ga = c;
    0 < l.s && (-1 === this.ta && (this.ta = c), (this.Ab = c));
    -1 == this.Bb && 1e3 <= this.g.a.a && (this.Bb = c);
    if (-2 == this.Ba)
      try {
        a: {
          var m = v(b) ? null : b;
          if (a && a != rf && 0 != this.B) {
            if (!m) {
              if (!this.F) {
                var D = -1;
                break a;
              }
              m = new G(0, this.F.width, this.F.height, 0);
            }
            D = m.va && 0 < m.va() && m.ua && 0 < m.ua() ? zf(this, a, m) : -1;
          } else D = -1;
        }
        this.Ba = D;
      } catch (J) {
        T(207, J);
      }
    this.f = l;
    d && (this.f.s = 0);
    this.vb(this);
  };
  function zf(a, b, c) {
    if (0 === a.C && 1 === N(a.l, "opac")) return 0;
    if (v(b)) return b;
    b = nf(b, c);
    var d = 1 == N(a.l, "od");
    if (0 >= a.B || lf(b, c, a.m, d)) return 0;
    d = pf(b) / a.B;
    c = of(b, c);
    return a.fa() ? Math.max(d, c) : d;
  }
  k.ca = function () {
    return !1;
  };
  k.fa = function () {
    return this.rb || this.Ea;
  };
  k.K = function (a, b, c) {
    if (c) this.a = c;
    else {
      a = b ? a : a.top;
      try {
        var d = qc(rf),
          e = new C(0, 0);
        if (this.m) {
          var f = 1 == this.H;
          (!b && f && he(this.m)) || (d = this.m.getBoundingClientRect());
          e = wc(this.m, a);
        }
        b = e;
        var g = b.x,
          h = b.y;
        this.a = new G(
          Math.round(h),
          Math.round(g + (d.right - d.left)),
          Math.round(h + (d.bottom - d.top)),
          Math.round(g)
        );
      } catch (l) {
        this.a = qc(rf);
      }
    }
    this.B = (this.a.bottom - this.a.top) * (this.a.right - this.a.left);
  };
  function Af(a) {
    var b = Math.pow(10, 2);
    return Math.floor(a * b) / b;
  }
  function Bf(a) {
    a.c &&
      ((a.pb.Lb = U(
        a.c,
        "mouseover",
        function () {
          var b = P();
          a.V = b;
        },
        149
      )),
      (a.pb.Kb = U(
        a.c,
        "mouseout",
        function () {
          var b = P();
          -1 == a.V || b < a.V || (a.Da += b - a.V);
          a.V = -1;
        },
        150
      )));
  }
  k.ga = function () {
    this.w && this.w.Sa();
  };
  function Cf(a, b) {
    var c = !1,
      d = a.m;
    if (null === d) return !1;
    Qd(152, function () {
      var e = new b.IntersectionObserver(function (c) {
        try {
          Df(b, c, a);
        } catch (g) {
          try {
            e.unobserve(d), T("osd_adblock::nioc", g);
          } catch (h) {}
        }
      }, sf);
      e.observe(d);
      c = !0;
    });
    return c;
  }
  function Ef(a, b) {
    var c = !1;
    Qd(151, function () {
      var d = xc(b).observeIntersection(function (c) {
        try {
          Df(b, c, a);
        } catch (f) {
          try {
            d(), T("osd_adblock::aioc", f);
          } catch (g) {}
        }
      });
      c = !0;
    });
    return c;
  }
  function Df(a, b, c) {
    if (!b || !b.length || 0 >= b.length) b = null;
    else {
      for (var d = b[0], e = 1; e < b.length; e++)
        b[e].time > d.time && (d = b[e]);
      b = d;
    }
    if ((e = b)) {
      b =
        (e.intersectionRect.width * e.intersectionRect.height) /
        (e.boundingClientRect.width * e.boundingClientRect.height);
      d = le(e.boundingClientRect);
      e = le(e.intersectionRect);
      var f = (b * pf(d)) / (a.screen.height * a.screen.width);
      c.f.s = Math.min(Math.max(b, 0), 1);
      c.ub = c.f.s;
      c.f.a = Math.min(Math.max(f, 0), 1);
      c.K(a, !0, d);
      Ff(c, d, e);
    }
  }
  function Ff(a, b, c) {
    c = nf(b, c);
    a.D =
      0 >= a.B || c.top >= c.bottom || c.left >= c.right
        ? new G(0, 0, 0, 0)
        : sc(c, -b.left, -b.top);
  }
  function Gf() {
    Hf(this);
  }
  function Hf(a) {
    !a.a &&
      w(y.Goog_AdSense_getAdAdapterInstance) &&
      (a.a = Goog_AdSense_getAdAdapterInstance());
    !a.c &&
      w(y.Goog_Common_getAdAdapterInstance) &&
      (a.c = Goog_Common_getAdAdapterInstance());
    !a.f && Pb() && (a.f = !0);
  }
  function If(a, b, c, d) {
    Hf(a);
    var e = Q.j().u;
    a.a && a.a.getNewBlocks(b, e);
    a.c && a.c.getNewBlocks(b, e);
    a.f && !c() && (d(!0), b(Pb(), "", 13, !0));
  }
  function Jf(a) {
    Hf(a);
    return (
      (a.a ? a.a.numBlocks() : 0) + (a.c ? a.c.numBlocks() : 0) + (a.f ? 1 : 0)
    );
  }
  function Kf(a) {
    Hf(a);
    return a.a ? a.a.getOseId() : a.c ? a.c.getOseId() : 0;
  }
  function Lf() {
    this.m = null;
    this.c = "none";
    this.g = !1;
    this.a = null;
    this.h = 0;
    this.f = !1;
    this.l = null;
  }
  function Mf(a, b) {
    switch (a.c) {
      case "iemv":
        b.clearInterval(a.a), (a.a = null), (a.g = !1);
    }
  }
  function Nf(a, b, c) {
    a.m = c;
    a.g = !0;
    a.c = "iemv";
    Of(a, b);
    a.l = "u";
  }
  function Of(a, b, c) {
    c = void 0 === c ? !1 : c;
    a.a = b.setInterval(S(252, xa(a.o, a, b, 1e3)), 1e3);
    c && a.o(b);
  }
  Lf.prototype.o = function (a, b) {
    b = void 0 === b ? 0 : b;
    Ze(a && a.document)
      ? (this.m(a)
          ? ((this.h += this.f ? b : 0), (this.f = !0))
          : ((this.h = 0), (this.f = !1)),
        1e3 <= this.h && (Mf(this, a), (this.l = "v")))
      : (Mf(this, a), (this.l = "i"));
  };
  function Pf(a) {
    return pb()
      ? ((a = (a = F(a)) && Ub(a)),
        !!(
          a &&
          a.location &&
          a.location.ancestorOrigins &&
          0 < a.location.ancestorOrigins.length &&
          a.location.origin == a.location.ancestorOrigins[0]
        ))
      : !0;
  }
  var Qf =
    "StopIteration" in t
      ? t.StopIteration
      : { message: "StopIteration", stack: "" };
  function Rf() {}
  Rf.prototype.next = function () {
    throw Qf;
  };
  Rf.prototype.Wa = function () {
    return this;
  };
  function Sf(a) {
    if (a instanceof Rf) return a;
    if ("function" == typeof a.Wa) return a.Wa(!1);
    if (ta(a)) {
      var b = 0,
        c = new Rf();
      c.next = function () {
        for (;;) {
          if (b >= a.length) throw Qf;
          if (b in a) return a[b++];
          b++;
        }
      };
      return c;
    }
    throw Error("Not implemented");
  }
  function Tf(a, b) {
    if (ta(a))
      try {
        z(a, b, void 0);
      } catch (c) {
        if (c !== Qf) throw c;
      }
    else {
      a = Sf(a);
      try {
        for (;;) b.call(void 0, a.next(), void 0, a);
      } catch (c) {
        if (c !== Qf) throw c;
      }
    }
  }
  function Uf(a, b) {
    var c = 1;
    Tf(a, function (a) {
      c = b.call(void 0, c, a);
    });
    return c;
  }
  function Vf(a, b) {
    var c = Sf(a);
    a = new Rf();
    a.next = function () {
      var a = c.next();
      if (b.call(void 0, a, void 0, c)) return a;
      throw Qf;
    };
    return a;
  }
  function Wf(a, b) {
    this.f = b;
    this.c = null == a;
    this.a = a;
  }
  p(Wf, Rf);
  Wf.prototype.next = function () {
    if (this.c) throw Qf;
    var a = this.a || null;
    this.c = null == a;
    var b;
    if ((b = a)) {
      b = this.f;
      if (
        sb(a, "parentElement") &&
        null != a.parentElement &&
        a != a.parentElement
      )
        var c = a.parentElement;
      else if (b) {
        var d = void 0 === d ? Pf : d;
        if (d(a))
          try {
            var e = F(a),
              f = e && Ub(e),
              g = f && f.frameElement;
            c = null == g ? null : g;
          } catch (h) {
            c = null;
          }
        else c = null;
      } else c = null;
      b = c;
    }
    this.a = b;
    return a;
  };
  function Xf(a) {
    var b = 1;
    a = Vf(new Wf(a, !0), function () {
      return 0 < b;
    });
    return Uf(a, function (a, d) {
      var c = 1;
      if (sb(d, "style") && d.style) {
        var f = parseFloat;
        a: {
          var g = F(d);
          if (
            g.defaultView &&
            g.defaultView.getComputedStyle &&
            (g = g.defaultView.getComputedStyle(d, null))
          ) {
            g = g.opacity || g.getPropertyValue("opacity") || "";
            break a;
          }
          g = "";
        }
        g || (g = uc(d, "opacity"));
        d = f(g);
        v(d) && !isNaN(d) && (c = d);
      }
      return (b = a * c);
    });
  }
  function Yf(a, b, c, d, e, f) {
    f = void 0 === f ? qa : f;
    W.call(this, c, d, e);
    this.u = b;
    this.c
      ? ((b = this.c._adk_),
        b ||
          (b =
            (b = Zd(this.c, "googleAvAdk")) && !/[^0-9]/.test(b)
              ? parseInt(b, 10)
              : 0))
      : (b = 0);
    this.L = b;
    this.oa = 0;
    this.kb = null;
    this.ib = c ? String(c._avi_ || "") : "";
    this.jb = c ? String(c._avicxn_ || Zd(c, "googleAvCxn") || "") : "";
    c && (c._aviextcxn_ || Zd(c, "googleAvExtCxn"));
    c && (c._imm_ || $d(c, "googleAvImmediate"));
    this.h = 0;
    this.ia = [];
    this.Cb = !1;
    this.o = null;
    this.Oa = "none";
    this.Fa = !1;
    this.Ca = c ? String(c._cvu_ || Zd(c, "googleAvCpmav") || "") : "";
    this.sb = this.ab = this.qb = !1;
    this.zb = -1;
    this.fb = "";
    this.bb = -1;
    this.M = 0;
    this.Ka = -1;
    this.qa = 0;
    this.ka = this.ob = me();
    this.A = 0;
    this.Db = f;
    c && Zf(this, String(c._avm_ || Zd(c, "googleAvMetadata") || ""));
    this.u &&
      u(this.u) &&
      (c = this.u.match(/fa=([^&;]+)/)) &&
      2 == c.length &&
      c[1] == (30).toString() &&
      (this.Ea = !0);
    c = Q.j().a;
    dd(c, this.u);
    f = ["sel", "ioa", "ald"];
    if (1 === N(c, "ftm"))
      for (b = q(f), f = b.next(); !f.done; f = b.next()) c.c[f.value] = 1;
    else if (0 === N(c, "ftm"))
      for (b = q(f), f = b.next(); !f.done; f = b.next()) c.c[f.value] = 0;
    this.u &&
      u(this.u) &&
      (c = this.u.match(/[&;?]eid=([^&;]+)/)) &&
      2 == c.length &&
      c[1].match("111541704") &&
      (Q.j().h = !0);
    c = Q.j();
    this.K(a, c.f);
    this.yb = !1;
    this.ra = this.Ha = this.Ma = this.sa = this.I = -1;
  }
  p(Yf, W);
  k = Yf.prototype;
  k.G = function () {
    return this.R && 1 !== this.A;
  };
  function $f(a) {
    a.c &&
      (t.MutationObserver
        ? new t.MutationObserver(function (b, c) {
            for (var d = 0; d < b.length; d++)
              if ("childList" == b[d].type && b[d].removedNodes.length) {
                a.Ka = P();
                c.disconnect();
                break;
              }
          }).observe(a.c, { childList: !0, subtree: !0 })
        : Vd(a.c, function () {
            a.Ka = P();
          }));
  }
  k.Ta = function () {
    W.prototype.Ta.call(this);
    this.D = new G(0, 0, 0, 0);
  };
  k.Ua = function () {
    W.prototype.Ua.call(this);
    this.D = new G(0, 0, 0, 0);
  };
  k.Ra = function () {
    this.R || (this.Ma = zd());
    W.prototype.Ra.call(this);
    ag(this);
  };
  function ag(a) {
    if (N(Q.j().a, "cll") && a.R && t == t.top) {
      var b = t.pageYOffset;
      null != b && (a.ra = Math.max(b, a.ra));
    }
  }
  function bg(a) {
    return new id(a.L, a.kb);
  }
  function Zf(a, b) {
    if (u(b) && 0 != b.length) {
      var c = new Zc();
      K(M(c, "omid", I));
      bd(c, b);
      c = N(c, "omid");
      null !== c && (Q.j().a.c.omid = c);
      b = bd(a.l, b).split("&");
      for (c = 0; c < b.length; c++) {
        var d = b[c];
        "ts=0" == d
          ? (a.ja = !1)
          : 0 == d.lastIndexOf("la=", 0)
          ? ((d = d.split("=")[1]),
            "0" == d ? (a.qa = 2) : "1" == d && (a.qa = 1))
          : 0 == d.lastIndexOf("cr=", 0)
          ? "1" == d.split("=")[1] && (a.rb = !0)
          : 0 == d.lastIndexOf("alp=", 0)
          ? (a.fb = d.split("=")[1])
          : 0 == d.lastIndexOf("alh=", 0)
          ? ((d = parseInt(d.split("=")[1], 10)), isNaN(d) || (a.bb = d))
          : 0 == d.lastIndexOf("ve=", 0)
          ? ((d = d.split("=")[1]), mb(Yc, d) && (a.Oa = d))
          : "adf=1" == d && (a.yb = !0);
      }
      a.f.c = a.ca();
    }
  }
  k.wb = function (a, b, c, d, e) {
    if (this.G()) {
      c || this.K(d, e);
      if (cg(this) && c)
        switch (((e = this.o), e.c)) {
          case "iemv":
            d.clearInterval(e.a), (e.a = null), (e.f = !1);
        }
      else if (cg(this))
        switch (((e = this.o), e.c)) {
          case "iemv":
            e.g && !e.a && Of(e, d, !0);
        }
      this.Z(this.a, b, a, c, !1, !0);
    }
  };
  k.Z = function (a, b, c, d, e, f, g) {
    g = void 0 === g ? {} : g;
    var h = 1e3 <= this.g.a.a,
      l = Math.floor(100 * this.f.s);
    this.qa = 242500 <= (a.right - a.left) * (a.bottom - a.top) ? 1 : 2;
    W.prototype.Z.call(this, a, b, c, d, e, f, g);
    -1 == this.ka && -1 != this.f.f
      ? (this.ka = this.f.f)
      : 0 == this.ka && 1 == this.f.f && (this.ka = 1);
    v(b) || (0 < this.f.s ? Ff(this, a, b) : (this.D = new G(0, 0, 0, 0)));
    a = 1e3 <= this.g.a.a;
    b = Math.floor(100 * this.f.s);
    ((!h && a) || b != l) && this.Db(a, b);
    var n = this;
    S(157, function () {
      n.C = Xf(n.m);
    })();
    ag(this);
  };
  k.ca = function () {
    return zb || cg(this) ? !1 : 1 == this.qa;
  };
  function dg(a, b) {
    var c = {},
      d = bg(a);
    d && (d.c && (c[4] = d.c), d.a && (c[12] = d.a));
    c[29] = Q.j().m;
    c[0] = b;
    c[7] = a.f.s;
    b = a.D;
    c[9] = [b.top, b.left, b.bottom, b.right].join("-");
    c[28] = a.H;
    c[32] = wf(a);
    return c;
  }
  function eg(a, b, c, d) {
    var e = 1e3 <= a.g.a.a && 4 != a.h;
    if (0 != a.h && (1 != a.h || (e && !a.Cb))) {
      var f = fg(a);
      ob(f, b);
      f.adk = a.L;
      a.yb && a.oa && (f.adf = a.oa);
      d && (f.r = d);
      f.op = a.C;
      0 === a.C && (f.invis = 1);
      b = Q.j();
      f = Ne(f).join("&");
      c = dg(a, c);
      c[3] = f;
      c[5] = e;
      c[15] = cg(a);
      c[11] = 4 != a.h && (a.ha || a.Fa);
      c[13] = ff(a.g.f).join(",");
      c[18] = 0 == a.B;
      null != a.J && ((c[20] = a.J.y), (c[21] = a.J.x));
      null != a.F && ((c[22] = a.F.width), (c[23] = a.F.height));
      null != b.g && ((c[30] = b.g.width), (c[31] = b.g.height));
      -1 != a.C && (c[25] = a.C);
      pe(a.c, c, a.ia);
      a.Cb = e;
    }
  }
  function gg(a) {
    var b = dg(a, "goog_get_mode");
    pe(a.c, b);
  }
  k.K = function (a, b, c) {
    if (
      !b &&
      (-1 != this.zb || -1 != this.Ka) &&
      2 != this.M &&
      1 != this.M &&
      -1 != this.M &&
      7 != this.M
    ) {
      var d = null;
      try {
        d = this.m && this.m.getBoundingClientRect();
      } catch (e) {}
      (d && 0 != d.width && 0 != d.height) ||
        ((d = ke(a.top, this.fb, this.bb)),
        (this.M = d.status),
        d.a && (d.a == this.m ? (this.M = 2) : hg(this, d.a, a.top)));
    }
    W.prototype.K.call(this, a, b, c);
    a = this.H;
    this.Fa =
      (2 != a && 3 != a && 10 != a) || 0 != this.B || 1 == N(this.l, "xza")
        ? !1
        : !0;
  };
  function fg(a) {
    var b = ad(a.l);
    b.p = [a.a.top, a.a.left, a.a.bottom, a.a.right];
    var c = a.g;
    b.tos = df(c.f);
    b.mtos = ff(c.f);
    b.mcvt = c.a.a;
    b.rs = a.H;
    var d = 5 == a.H;
    d || (b.ht = a.Da);
    0 <= a.ta && ((b.tfs = a.ta), (b.tls = a.Ab));
    b.mc = Af(c.c);
    b.lte = Af(a.Ba);
    b.bas = a.ob;
    b.bac = a.ka;
    c = Q.j();
    c.f && (b["if"] = a.ha ? 0 : 1);
    if (null !== a.o) {
      var e = a.o,
        f = {};
      "none" != e.c && (f[e.c] = String(e.l));
      ob(b, f);
    }
    d && a.u && (b.req = encodeURIComponent(a.u).substring(0, 100));
    a.sb && (b.ci = "1");
    a.ca() && (b.la = "1");
    a.Ea && (b.pa = "1");
    b.avms = wf(a);
    a.w && ob(b, a.w.O());
    0 != a.A && (b.md = a.A);
    null != N(c.a, "nio_mode") && ((b.avms_sel = c.l), (b.first_poll = c.o));
    d = a.I;
    0 < d && (b.rst = d);
    d = a.I;
    d = -1 == d || a.sa < d ? -1 : a.sa - d;
    0 <= d && (b.dlt = d);
    d = -1 == a.I || a.Ma < a.I ? -1 : a.Ma - a.I;
    0 <= d && (b.rpt = d);
    N(c.a, "cll") && (0 <= a.Ha && (b.isd = a.Ha), 0 <= a.ra && (b.msd = a.ra));
    return b;
  }
  k.ga = function (a) {
    W.prototype.ga.call(this, a);
    null === this.o || Mf(this.o, a);
  };
  function hg(a, b, c) {
    a.m = b;
    a.ga(c);
  }
  function cg(a) {
    return null !== a.o && a.o.g;
  }
  function ig(a, b) {
    if (null === a.o)
      switch (((a.o = new Lf()), a.Oa)) {
        case "iemv":
          Nf(a.o, b, function (b) {
            var c = Ze(b && b.document);
            null === c
              ? (b = !1)
              : (a.K(b, !0),
                (c = uf(a, c) >= (a.ca() ? 0.3 : 0.5)),
                a.K(b, !1),
                (b = c));
            return b;
          });
      }
  }
  function jg() {
    this.a = this.c = null;
  }
  function kg(a, b) {
    function c(c, e) {
      a.a = null;
      b(c, e);
    }
    if (null == a.c) return !1;
    a.a = Ja(a.c, function (a) {
      return null != a && a.ea() && a.lb(c);
    });
    return null != a.a;
  }
  ra(jg);
  var lg = { threshold: [0, 0.25, 0.5, 0.75, 1] };
  function mg(a, b, c, d) {
    Ae.call(this, a, b, c, d);
    this.m = this.l = this.g = null;
  }
  p(mg, Ae);
  k = mg.prototype;
  k.P = function () {
    return "nio";
  };
  k.ma = function () {
    return !0;
  };
  k.mb = function () {
    var a = this;
    this.m || (this.m = P());
    Qd(298, function () {
      return ng(a);
    }) || ve(this.a, "msf");
  };
  k.Sa = function () {
    if (this.g && this.f)
      try {
        this.g.unobserve(this.f);
      } catch (a) {}
  };
  function ng(a) {
    if (!a.f) return !1;
    var b = a.f;
    a.g = new a.a.c.IntersectionObserver(function (b) {
      return og(a, b);
    }, lg);
    a.g.observe(b);
    2 === N(Q.j().a, "nio_mode") &&
      og(a, a.g && a.g.takeRecords ? a.g.takeRecords() : []);
    return !0;
  }
  k.$ = function () {
    Ae.prototype.$.call(this);
    if (2 === N(Q.j().a, "nio_mode")) {
      var a = this.g && this.g.takeRecords ? this.g.takeRecords() : [];
      0 < a.length
        ? og(this, a)
        : (this.c = new re(
            this.c.m,
            this.c.o,
            this.c.a,
            this.c.g,
            this.c.h,
            this.c.c,
            this.c.f,
            this.a.c.performance.now(),
            this.c.l
          ));
    }
  };
  function og(a, b) {
    try {
      if (b.length) {
        a.l || (a.l = P());
        var c = pg(b),
          d = le(c.boundingClientRect),
          e = sc(le(c.intersectionRect), -d.left, -d.top),
          f = P(),
          g = c.boundingClientRect.width * c.boundingClientRect.height,
          h = c.intersectionRect.width * c.intersectionRect.height;
        var l = g ? h / g : 0;
        b = 0;
        var n = c.intersectionRect.width * c.intersectionRect.height,
          m = a.a.a.a;
        m && (b = (m.bottom - m.top) * (m.right - m.left));
        var D = c.intersectionRect.width * c.intersectionRect.height,
          J = window.screen.height * window.screen.width;
        a.c = new re(
          a.a.a,
          a.f,
          d,
          e,
          a.ma(),
          l,
          b ? n / b : 0,
          f,
          D && J ? D / J : 0
        );
      }
    } catch (Ha) {
      a.Sa(), T(299, Ha);
    }
  }
  function pg(a) {
    return Fa(
      a,
      function (a, c) {
        return a.time > c.time ? a : c;
      },
      a[0]
    );
  }
  k.O = function () {
    var a = {};
    return Object.assign(
      this.a.O(),
      ((a.niot_obs = this.m), (a.niot_cbk = this.l), a)
    );
  };
  function qg(a) {
    a = void 0 === a ? y : a;
    this.a = new ue(a, 2);
  }
  p(qg, Be);
  qg.prototype.P = function () {
    return "nio";
  };
  qg.prototype.ea = function () {
    var a = N(Q.j().a, "nio_mode"),
      b = 2 === a;
    a = 1 === a;
    var c = Q.j().f;
    return (b || (a && c)) && this.N();
  };
  qg.prototype.N = function () {
    return (
      "exc" !== Q.j().c &&
      1 != N(Q.j().a, "inapp") &&
      null != this.a.c.IntersectionObserver
    );
  };
  qg.prototype.La = function (a, b, c) {
    return new mg(a, this.a, b, c);
  };
  var rg = {},
    sg =
      ((rg[1] = function () {
        return new qg();
      }),
      rg);
  function tg() {
    a: {
      var a = Q.j().a;
      a = N(a, "mv");
      if (null != a && (a = sg[a]) && (a = a()) && a.N()) break a;
      a = null;
    }
    this.a = a;
  }
  function ug() {}
  function vg(a, b, c) {
    this.g = null != c ? xa(a, c) : a;
    this.f = b;
    this.c = xa(this.Mb, this);
    this.a = [];
  }
  Aa(vg, ug);
  k = vg.prototype;
  k.za = !1;
  k.ba = null;
  k.$a = function (a) {
    this.a = arguments;
    this.ba ? (this.za = !0) : wg(this);
  };
  k.stop = function () {
    this.ba &&
      (t.clearTimeout(this.ba),
      (this.ba = null),
      (this.za = !1),
      (this.a = []));
  };
  k.Mb = function () {
    this.ba = null;
    this.za && ((this.za = !1), wg(this));
  };
  function wg(a) {
    var b = a.c;
    var c = a.f;
    if (!w(b))
      if (b && "function" == typeof b.handleEvent) b = xa(b.handleEvent, b);
      else throw Error("Invalid listener argument");
    b = 2147483647 < Number(c) ? -1 : t.setTimeout(b, c || 0);
    a.ba = b;
    a.g.apply(null, a.a);
  }
  function xg() {
    this.a = this.c = null;
  }
  function yg() {
    this.f = [];
    this.c = [];
    this.done = !1;
    this.a = { Xa: 0, Ia: 0, Va: 0, Ya: 0, na: -1 };
    this.B = this.l = this.u = this.m = this.A = null;
    this.C = !1;
    this.w = "";
    this.g = null;
    this.o = cc() || bc();
    this.D = 0;
    this.h = new se(this);
  }
  function zg() {
    var a = Q.j().c;
    return "nio" == a || "aio" == a;
  }
  function Ag(a, b) {
    var c = Y;
    if (!c.C) {
      c.C = !0;
      c.A ||
        zg() ||
        ((c.m = new vg(
          S(137, function (a) {
            for (var b = [], d = 0; d < arguments.length; ++d)
              b[d] = arguments[d];
            return c.cb.apply(c, r(b));
          }),
          100
        )),
        (c.A = U(
          a,
          "scroll",
          function (a) {
            for (var b = [], d = 0; d < arguments.length; ++d)
              b[d] = arguments[d];
            null !== c.m && c.m.$a.apply(c.m, r(b));
          },
          138
        )));
      c.u ||
        zg() ||
        ((c.l = new vg(
          S(140, function (a) {
            for (var b = [], d = 0; d < arguments.length; ++d)
              b[d] = arguments[d];
            return c.Hb.apply(c, r(b));
          }),
          100
        )),
        (c.u = U(
          a,
          "resize",
          function (a) {
            for (var b = [], d = 0; d < arguments.length; ++d)
              b[d] = arguments[d];
            null !== c.l && c.l.$a.apply(c.l, r(b));
          },
          141
        )));
      if (b) {
        a = Z(c);
        for (var d = 0; d < a.length; ++d) (b = a[d]), b.c && Bf(b);
      }
      Bg(c, function (a) {
        for (var b = [], d = 0; d < arguments.length; ++d) b[d] = arguments[d];
        return c.wa.apply(c, r(b));
      });
      c.wa();
    }
  }
  k = yg.prototype;
  k.Hb = function () {
    Cg(this, !1);
    this.cb();
  };
  k.cb = function () {
    Dg(this, Z(this), !1);
  };
  function Eg(a) {
    var b = Q.j();
    "exc" == b.c || Cg(a, !0);
    var c = new xg();
    switch (b.c) {
      case "geo":
        a: {
          b = b.g;
          c = new xg();
          c.c = b;
          if (null != b && -12245933 != b.width && -12245933 != b.height) {
            Q.j();
            try {
              var d = y,
                e = a.o;
              d = d.top;
              var f = b || Dc(!0, d, void 0 === e ? !1 : e),
                g = Tb(Nb(d.document).a);
              if (-12245933 == f.width) {
                var h = f.width;
                var l = new G(h, h, h, h);
              } else l = new G(g.y, g.x + f.width, g.y + f.height, g.x);
            } catch (n) {
              a = c;
              break a;
            }
            c.a = l;
          }
          a = c;
        }
        return a;
      default:
        return c;
    }
  }
  k.tb = function () {
    Dg(this, Z(this), !1);
  };
  function Dg(a, b, c) {
    if (!a.done && (a.h.cancel(), 0 != b.length)) {
      a.g = null;
      var d = Eg(a);
      try {
        var e = P(),
          f = Q.j();
        f.o = e;
        if (null != jg.j().a) for (d = 0; d < b.length; d++) xf(b[d], e, c);
        else
          switch (f.c) {
            case "exc":
              for (d = 0; d < b.length; d++) vf(b[d], e, c);
              break;
            case "nis":
              for (d = 0; d < b.length; d++);
              break;
            case "gsv":
              for (d = 0; d < b.length; d++);
              break;
            case "aio":
            case "nio":
              for (d = 0; d < b.length; d++) vf(b[d], e, c);
              break;
            case "iem":
              for (d = 0; d < b.length; d++) tf(b[d], e, c);
              break;
            case "geo":
              if (d.a)
                for (var g = 0; g < b.length; g++) b[g].wb(e, d.a, c, y, f.f);
          }
        for (d = 0; d < b.length; d++) yf(b[d]);
        a.a.Va += P() - e;
        ++a.a.Ya;
        Fg(a);
      } finally {
        c
          ? z(b, function (a) {
              return a.Ta();
            })
          : te(a.h);
      }
    }
  }
  function Bg(a, b) {
    var c;
    x.visibilityState
      ? (c = "visibilitychange")
      : x.mozVisibilityState
      ? (c = "mozvisibilitychange")
      : x.webkitVisibilityState && (c = "webkitvisibilitychange");
    c && (a.B = a.B || U(x, c, b, 142));
  }
  k.wa = function () {
    var a = Gg(this),
      b = P();
    a
      ? (gd ||
          ((fd = b),
          z(this.f, function (a) {
            return a.g.l(b, !a.h());
          })),
        (gd = !0),
        Cg(this, !0))
      : ((this.D = Hg(this, b)),
        (gd = !1),
        z(this.f, function (a) {
          a.G() && a.g.h(b);
        }));
    Dg(this, Z(this), !a);
  };
  k.Sb = function (a) {
    var b;
    if ((b = null != a.IntersectionObserver)) {
      if ((a = Ig(a, "nio", Z(this)))) Q.j().c = "nio";
      b = a;
    }
    return b;
  };
  k.Qb = function (a) {
    var b;
    if ((b = Ye(a))) {
      if ((a = Ig(a, "aio", Z(this)))) Q.j().c = "aio";
      b = a;
    }
    return b;
  };
  k.Rb = function (a) {
    return B && Gb(8) && w(Ze(a && a.document)) ? ((Q.j().c = "iem"), !0) : !1;
  };
  function Jg(a) {
    var b = Y;
    if (void 0 === c) {
      var c = Q.j().a;
      var d = [];
      0 === (N(c, "nio_mode") || 0) && d.push(b.Sb);
      d.push(b.Qb);
      d.push(b.Rb);
      c = d;
    }
    c = q(c);
    for (d = c.next(); !d.done; d = c.next()) if (d.value.call(b, a)) return !0;
    return !1;
  }
  function Gg(a) {
    if (Kg(a)) return !0;
    var b = ae();
    a = 1 === b;
    b = 0 === b;
    return Q.j().h ? a : a || b;
  }
  function Z(a) {
    return 0 == a.f.length ? a.c : 0 == a.c.length ? a.f : La(a.c, a.f);
  }
  k.reset = function () {
    this.f = [];
    this.c = [];
  };
  function Cg(a, b) {
    a = a.o;
    var c = Q.j(),
      d,
      e = jg.j();
    null != e.a && (d = e.a.a);
    c.g = d ? d.a.f : Dc(!0, y, a);
    b ||
      ((c.A =
        y && y.outerWidth
          ? new E(y.outerWidth, y.outerHeight)
          : new E(-12245933, -12245933)),
      (c.B = ne(c.g)));
  }
  function Lg(a, b, c) {
    if (!a.g || c) {
      c = b.document;
      var d = 0 <= O ? P() - O : -1,
        e = P();
      -1 == a.a.na && (d = e);
      var f = Q.j(),
        g = ad(f.a),
        h = Z(a);
      try {
        if (0 < h.length) {
          var l = f.g;
          l && (g.bs = [l.width, l.height]);
          var n = f.A;
          n && (g.bos = [n.width, n.height]);
          var m = f.B;
          m && (g.ps = [m.width, m.height]);
          b.screen && (g.ss = [b.screen.width, b.screen.height]);
        } else
          (g.url = encodeURIComponent(b.location.href.substring(0, 512))),
            c.referrer &&
              (g.referrer = encodeURIComponent(c.referrer.substring(0, 512)));
        g.tt = d;
        g.pt = O;
        switch (Q.j().c) {
          case "iem":
            g.iem = 1;
            break;
          case "aio":
            g.aio = 1;
            break;
          case "nio":
            g.nio = 1;
        }
        g.deb = [1, a.a.Xa, a.a.Ia, a.a.Va, a.a.Ya, a.a.na, be, a.h.c].join(
          "-"
        );
        g.tvt = Hg(a, e);
        if (null !== b && b != b.top) {
          0 < h.length &&
            (g.iframe_loc = encodeURIComponent(
              b.location.href.substring(0, 512)
            ));
          var D = Dc(!1, b, a.o);
          g.is = [D.width, D.height];
        }
      } catch (Ha) {
        g.error = 1;
      }
      a.g = g;
    }
    a = a.g;
    b = {};
    for (var J in a) b[J] = a[J];
    return b;
  }
  function Mg() {
    var a = Y,
      b = new tg();
    z(Z(a), function (a) {
      if (a.c) {
        var c = b.a ? new Ve(b.a, a.c, a.l, a.L || 0) : null;
        c && (a.Ja = c);
      }
    });
  }
  function Ng() {
    var a = Y,
      b = jg.j();
    if (null != b.a) {
      var c = b.a;
      z(Z(a), function (a) {
        var b = c.create(a.m, a.l, a);
        null != b && b.mb();
        b && (a.w = b);
      });
    }
  }
  function Ig(a, b, c) {
    var d = void 0 === d ? qa : d;
    var e = !1;
    z(c, function (c) {
      a: {
        var f = d;
        if ((f = void 0 === f ? qa : f)) c.Na = f;
        switch (b) {
          case "nio":
            c = Cf(c, a);
            break a;
          case "aio":
            c = Ef(c, a);
            break a;
          case "geo":
          case "iem":
            c = !0;
            break a;
        }
        c = !1;
      }
      c && (e = !0);
    });
    return e;
  }
  function Fg(a) {
    if ("osd" == a.w) {
      var b = a.c,
        c = Lg(a, y);
      z(b, function (a) {
        var b = void 0;
        a.Fa && (b = "z");
        eg(a, c, "goog_update_data", b);
      });
    }
  }
  function Hg(a, b) {
    a = a.D;
    gd && (a += b - fd);
    return a;
  }
  function Kg(a) {
    return Ga(Z(a), function () {
      return !1;
    });
  }
  function Og(a) {
    return (a = a.match(/[&\?;](?:dc_)?adk=([0-9]+)/)) && 2 == a.length
      ? parseInt(a[1], 10)
      : 0;
  }
  function Pg(a) {
    return (a = a.match(/[&\?;]adf=([0-9]+)/)) && 2 == a.length
      ? parseInt(a[1], 10)
      : 0;
  }
  ra(yg);
  var Y = yg.j();
  function Qg(a) {
    a = Rg(a);
    this.a = a.length ? a[a.length - 1] : new ue(window, 0);
    this.f = a;
    this.g = qa;
    this.c = null;
  }
  p(Qg, Be);
  k = Qg.prototype;
  k.P = function () {
    return (this.c ? this.c : this.a).P();
  };
  k.O = function () {
    return (this.c ? this.c : this.a).O();
  };
  k.T = function () {
    return (this.c ? this.c : this.a).T();
  };
  k.lb = function (a) {
    this.g = a;
    z(this.f, function (a) {
      return a.gb();
    });
    xe(this.a, this);
    return !0;
  };
  k.ea = function () {
    return Ga(this.f, function (a) {
      return a.ea();
    });
  };
  k.N = function () {
    return Ga(this.f, function (a) {
      return a.N();
    });
  };
  k.La = function (a, b, c) {
    return new kf(a, this.a, b, c);
  };
  k.W = function (a) {
    0 == a.T() && this.g(a.aa(), this);
  };
  k.U = function (a) {
    this.c = a.h;
  };
  k.da = function () {
    return !1;
  };
  function Rg(a) {
    if (!a.length) return [];
    a = Da(a, function (a) {
      return null != a && a.ea();
    });
    for (var b = 1; b < a.length; b++) xe(a[b - 1], a[b]);
    return a;
  }
  function Sg(a) {
    for (
      var b = a !== a.top, c = a.top, d = a, e = d, f = 0;
      d && d != d.parent;

    )
      (d = d.parent), f++, dc(d) && (e = d);
    c = c === e;
    d = a.mraid;
    return null != d
      ? b
        ? c
          ? { xa: d, Aa: 2 }
          : { xa: d, Aa: 1 }
        : { xa: d, Aa: 0 }
      : b && c && ((d = a.top.mraid), null != d)
      ? { xa: d, Aa: 3 }
      : null;
  }
  var kb = {
    Tb: "addEventListener",
    Yb: "getState",
    Zb: "getVersion",
    gc: "removeEventListener",
  };
  function Tg() {
    ue.call(this, y, 2, "mraid");
    var a = this;
    this.R = 0;
    this.C = this.D = !1;
    this.m = null;
    this.h = 0;
    this.o = -1;
    this.f = null;
    var b = Sg(this.c);
    b && ((this.f = b.xa), (this.o = b.Aa));
    this.f &&
      !jb(function (b) {
        return w(a.f[b]);
      }) &&
      ((this.f = null), (this.o = -1));
    this.a.a = new G(0, 0, 0, 0);
  }
  p(Tg, ue);
  k = Tg.prototype;
  k.N = function () {
    return null != this.f;
  };
  k.O = function () {
    var a = {};
    this.R && (a.mraid = this.R);
    this.D && (a.mlc = 1);
    this.o && (a.mtop = this.o);
    this.m && (a.mse = this.m);
    return a;
  };
  k.ya = function (a, b) {
    for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
    try {
      return this.f[a].apply(this.f, c);
    } catch (e) {
      T("lidar::mraid_" + a, e);
    }
  };
  function Ug(a, b, c) {
    a.ya("removeEventListener", b, c);
  }
  k.gb = function () {
    var a = this;
    if (!this.B) {
      this.B = !0;
      a: switch (this.o) {
        case 0:
        case 3:
          var b = !0;
          break a;
        default:
          b = !1;
      }
      b
        ? this.c.document.readyState && "complete" == this.c.document.readyState
          ? Vg(this)
          : U(
              this.c,
              "load",
              function () {
                a.c.setTimeout(
                  S(292, function () {
                    return Vg(a);
                  }),
                  100
                );
              },
              292
            )
        : ve(this, "i");
    }
  };
  function Vg(a) {
    "loading" === a.ya("getState")
      ? (Wg(a), a.ya("addEventListener", "ready", Xg))
      : Yg(a);
  }
  function Wg(a) {
    0 == a.h &&
      (a.h = y.setTimeout(
        S(293, function () {
          a.h = -1;
          Ug(a, "ready", Xg);
          T("lidar::mraid_readyTimeout", Error());
          a.m = "rt";
          ve(a, "w");
        }),
        500
      ));
  }
  function Yg(a) {
    a.h = -1;
    u(a.f.AFMA_LIDAR) ? ((a.D = !0), Zg(a)) : ((a.m = "nc"), ve(a, "w"));
  }
  function Zg(a) {
    a.C = !1;
    y.setTimeout(
      S("lidar::measurementTimeout", function () {
        a.C ||
          (Ug(a, a.f.AFMA_LIDAR, $g),
          (a.D = !1),
          T("lidar::mraid_measurementTimeout", Error()),
          (a.m = "mt"),
          ve(a, "w"));
      }),
      500
    );
    void 0 !== a.f.AFMA_LIDAR_EXP_1 && (a.f.AFMA_LIDAR_EXP_1 = !0);
    a.ya("addEventListener", a.f.AFMA_LIDAR, $g);
  }
  k.nb = function () {
    return !0;
  };
  function Xg() {
    try {
      var a = Tg.j();
      0 < a.h && y.clearTimeout(a.h);
      Ug(a, "ready", Xg);
      Yg(a);
    } catch (b) {
      T("lidar::onMraidReady", b);
    }
  }
  function $g(a, b) {
    try {
      var c = Tg.j();
      c.C = !0;
      var d = a
        ? new G(a.y, a.x + a.width, a.y + a.height, a.x)
        : new G(0, 0, 0, 0);
      var e = P(),
        f = Dc(!0, c.c, c.M),
        g = Dc(!1, c.c, c.M);
      c.I || (c.I = ne(f, c.c));
      var h = c.nb();
      var l = new qe(e, f, g, h, c);
      l.a = d;
      l.volume = b;
      ze(c, l);
    } catch (n) {
      T("lidar::mraid_measurementEvent", n);
    }
  }
  ra(Tg);
  function ah(a) {
    return (a = /[&\?#]exk=([^& ]+)/.exec(a)) && 2 == a.length ? a[1] : null;
  }
  var bh = Y.h;
  function ch() {
    this.c = null;
    this.g = this.l = this.f = this.h = !1;
    dh(this);
  }
  k = ch.prototype;
  k.Nb = function (a) {
    this.h = a;
  };
  k.eb = function () {
    eh(this);
    H().clearTimeout(this.c);
    this.c = null;
    O = P();
    fh(this);
  };
  function eh(a) {
    Q.j().m = 1;
    if (!(0 < O)) {
      try {
        if (!gh(a)) return;
        Cg(Y, !1);
        hh(a);
      } catch (b) {}
      a.c = H().setTimeout(
        S(129, function () {
          return eh(a);
        }),
        250
      );
    }
  }
  function ih(a, b, c, d, e, f, g, h, l) {
    f = void 0 === f ? !1 : f;
    h = void 0 === h ? -1 : h;
    l = void 0 === l ? -1 : l;
    if (y && Date) {
      var n = Q.j(),
        m = new Yf(y, c, b, -1, d, g);
      1 == N(n.a, "isu") && -1 == n.l && (n.c = "ns");
      $f(m);
      0 < h && -1 == m.I && (m.I = h);
      0 <= l && (m.Ha = l);
      m.vb = function (b) {
        for (var c = [], d = 0; d < arguments.length; ++d) c[d] = arguments[d];
        return a.Gb.apply(a, r(c));
      };
      m.Na = function (b) {
        for (var c = [], d = 0; d < arguments.length; ++d) c[d] = arguments[d];
        return a.Pa.apply(a, r(c));
      };
      13 != d && ((m.L = Og(c)), (m.kb = ah(c)), (m.oa = Pg(c)));
      f && (m.sb = !0);
      0 == ae()
        ? a.Pa(m, "pv")
        : (Y.c.push(m),
          ++Y.a.Ia,
          1 == N(n.a, "ioa") && fh(a),
          1 == N(n.a, "sel")
            ? $c(m.l, "sela", e ? 1 : 0)
            : e
            ? (m && jd(bg(m)) && gg(m), jh(m))
            : b &&
              Ud(b, function () {
                m && jd(bg(m)) && gg(m);
                jh(m);
              }));
    }
  }
  k.Ob = function (a, b, c, d, e) {
    for (var f = [], g = 4; g < arguments.length; ++g) f[g - 4] = arguments[g];
    6 == f.length && 20180627 == f[5]
      ? ih(this, a, b, c, d, f[1], f[2], f[3], f[4])
      : (ih(
          this,
          a,
          b,
          c,
          d,
          5 < f.length ? f[5] : !1,
          9 < f.length ? f[9] : void 0,
          10 < f.length ? f[10] : -1,
          11 < f.length ? f[11] : -1
        ),
        T(460, Error("Deprecated interface"), -1));
  };
  function hh(a) {
    kh(a);
    If(
      a.a,
      function (b) {
        for (var c = [], d = 0; d < arguments.length; ++d) c[d] = arguments[d];
        return a.Ob.apply(a, r(c));
      },
      function () {
        return a.h;
      },
      function (b) {
        for (var c = [], d = 0; d < arguments.length; ++d) c[d] = arguments[d];
        return a.Nb.apply(a, r(c));
      }
    );
  }
  function lh(a) {
    Q.j();
    var b = [Tg.j()];
    return [new Qg(b), new qg(a)];
  }
  function fh(a) {
    if (!a.g) {
      a.g = !0;
      try {
        var b = H(),
          c = Q.j();
        Cg(Y, !1);
        c.w = 947190542;
        if (c.h && 0 === ae()) mh(a, "pv");
        else if (gh(a))
          if (((Y.a.Xa = Jf(a.a)), (c.u = !0), hh(a), 0 == Y.a.Ia)) mh(a, "n");
          else {
            Mg();
            c.l = P();
            var d = jg.j();
            if (null == d.c) {
              var e = lh(b);
              d.c = e;
            }
            kg(d, function (b) {
              return mh(a, b);
            })
              ? Y.done || (Ng(), nh(a))
              : (1 == N(c.a, "isu") && "ns" == c.c && (c.c = "geo"),
                c.f
                  ? (Jg(b) ||
                      z(Y.c, function (b) {
                        a.Pa(b, "i");
                      }),
                    nh(a))
                  : (z(Y.c, function (a) {
                      var c = Math.random();
                      0 < nc &&
                        0 > c - nc &&
                        B &&
                        Gb(8) &&
                        w(Ze(b && b.document)) &&
                        (a.Oa = "iemv");
                      ig(a, b);
                    }),
                    nh(a),
                    zc()));
          }
        else mh(a, "c");
      } catch (f) {
        throw (Y.reset(), mh(a, "x"), f);
      }
    }
  }
  function nh(a) {
    if (-1 == Y.a.na) {
      var b = H(),
        c = 2 == Kf(a.a);
      Ag(b, c);
      b.setTimeout(
        S(131, function () {
          mh(a, "t");
        }),
        36e5
      );
      Y.a.na = P() - O;
    }
  }
  function mh(a, b) {
    if (!Y.done) {
      bh.cancel();
      a.a || (a.a = new Gf());
      if (2 == Kf(a.a) || a.f) {
        -1 == Y.a.na && Y.reset();
        a = Y.c;
        0 < a.length && Dg(Y, a, !0);
        a = q(a);
        for (var c = a.next(); !c.done; c = a.next()) oh(c.value, b);
      }
      Y.done = !0;
    }
  }
  function gh(a) {
    var b = H();
    if (!b.document.body || !b.document.body.getBoundingClientRect) return !1;
    b = new Gf();
    if (!(b.a || b.c || b.f)) return !1;
    a.a = b;
    return !0;
  }
  k.Pa = function (a, b) {
    a.ha = !0;
    4 != a.h && 5 != a.h && oh(a, b, !0);
    a.ga(y);
  };
  k.Gb = function (a) {
    if (
      a &&
      1e3 <= a.g.a.a &&
      (!a.a ||
      (0 === a.a.left &&
        0 === a.a.right &&
        0 === a.a.top &&
        0 === a.a.bottom) ||
      0 >= a.B
        ? 0
        : null != a.Ca &&
          null != a.Ca.match(/\/pagead\/adview\?.*ai=.*&vt=\d+/i) &&
          !a.qb)
    ) {
      var b = a.Ca;
      if (mc()) lc(window, b, !0);
      else {
        var c = t.document;
        if (c.body) {
          var d = c.getElementById("goog-srcless-iframe");
          d ||
            ((d = new Ob(c).a.createElement("IFRAME")),
            (d.style.display = "none"),
            (d.id = "goog-srcless-iframe"),
            c.body.appendChild(d));
          c = d;
        } else c = null;
        c && c.contentWindow && lc(c.contentWindow, b, !1);
      }
      a.qb = !0;
    }
  };
  function jh(a) {
    if (!a.G()) {
      var b = P();
      a.zb = b;
      a.Ra();
      a.G() && Y.wa();
    }
  }
  function ph(a, b) {
    if (b && b.data && b.source) {
      var c = b.data;
      if (u(c)) {
        var d = {};
        c = c.split("\n");
        for (var e = 0; e != c.length; ++e) {
          var f = c[e],
            g = f.indexOf("=");
          if (!(0 >= g)) {
            var h = Number(f.substr(0, g));
            f = f.substr(g + 1);
            switch (h) {
              case 36:
              case 26:
              case 15:
              case 8:
              case 11:
              case 16:
              case 5:
              case 18:
                f = "true" == f;
                break;
              case 4:
              case 33:
              case 6:
              case 25:
              case 28:
              case 29:
              case 24:
              case 23:
              case 22:
              case 7:
              case 21:
              case 20:
                f = Number(f);
                break;
              case 19:
              case 3:
                if (w(decodeURIComponent))
                  try {
                    f = decodeURIComponent(f);
                  } catch (l) {
                    throw Error("Error: URI malformed: " + f);
                  }
            }
            d[h] = f;
          }
        }
        d = d[0] ? d : null;
      } else d = null;
      if ((c = d))
        if (
          ((e = c[0]),
          0 <=
            Ca(
              "goog_creative_loaded goog_dom_content_loaded goog_listener_status goog_av_measurement_hold_update goog_provide_mode goog_request_monitoring goog_stop_monitoring".split(
                " "
              ),
              e
            ) && (d = qh(new id(c[4], c[12]))))
        )
          0 < c[33] && -1 == d.sa && (d.sa = c[33]),
            "goog_stop_monitoring" === e && rh(d),
            (h = c[26]),
            void 0 === h ||
              ((h = !!h), (f = Y), h && 1 == d.A) ||
              (!h && 1 != d.A) ||
              (h
                ? 1 != d.A && ((d.A = 1), d.Ua())
                : d.G() || (1 === d.A && (d.A = 2), d.G() && f.wa())),
            (c[35] || "goog_creative_loaded" === e) && jh(d),
            (h = c[6]),
            void 0 !== h && (d.h = sh(h, d.h)),
            1 == N(d.l, "lom")
              ? 0 <= Ca(d.ia, b.source) || d.ia.push(b.source)
              : d.ia.push(b.source),
            void 0 !== c[16] && (d.ja = !!c[16]),
            c[19] && Zf(d, c[19]),
            "goog_request_monitoring" === e &&
              (5 == d.h
                ? ((d.ha = !0), rh(d))
                : ((b = Q.j().f),
                  (c = dg(d, "goog_acknowledge_monitoring")),
                  (c[8] = b),
                  (c[36] = !b || Ye(y)),
                  pe(d.c, c, d.ia),
                  4 == d.h && jh(d))),
            4 == d.h && Q.j().f ? rh(d) : h && 0 != h && (a.f = !0);
    }
  }
  function kh(a) {
    if (!a.l) {
      U(
        y,
        "message",
        function (b) {
          return ph(a, b);
        },
        132
      );
      var b = th().contentWindow;
      b &&
        U(
          b,
          "message",
          function (b) {
            return ph(a, b);
          },
          132
        );
      a.l = !0;
    }
  }
  function uh() {
    var a = vh;
    U(
      H(),
      "unload",
      function () {
        mh(a, "u");
      },
      133
    );
  }
  function sh(a, b) {
    return (
      Ja([5, 4, 2, 3, 1, 0], function (c) {
        return c === a || c === b;
      }) || 0
    );
  }
  function oh(a, b, c) {
    if (4 != a.h) {
      var d = c && !(a.jb || a.ib),
        e = !c && 1e3 <= a.g.a.a,
        f = e && a.ja,
        g = !a.ab && !(a.jb || a.ib);
      a &&
        a.L &&
        (d || g || f) &&
        ((d = Lg(Y, H(), !1)),
        eg(a, d, "goog_image_request", b),
        c || e || (a.ab = !0),
        e || (!c && a.ja)) &&
        (a.ja = !1);
    }
  }
  k.Ib = function (a, b) {
    b = void 0 === b ? !1 : b;
    if ((a = wh(a))) {
      var c = H();
      a.ga(c);
      var d = a.c;
      if (null != d.contentWindow && 3 == a.H && 4 != a.h) {
        var e = fg(a);
        e.adk = a.L;
        e.adf = a.oa;
        e.op = a.C;
        0 === a.C && (e.invis = 1);
        e.r = "u";
        var f = Lg(Y, c, !1);
        ob(e, f);
        if (b) oh(a, "u");
        else
          try {
            c.google_image_requests || (c.google_image_requests = []),
              d.contentWindow.osdsir(
                c,
                e,
                a.ha || 0 >= a.B ? 2 : 1e3 <= a.g.a.a ? 4 : 3
              );
          } catch (g) {}
      }
    }
  };
  k.Jb = function (a, b) {
    if (a && b && ua(a) && 1 == a.nodeType && ua(b) && 1 == b.nodeType) {
      var c = Ja(Y.c, function (b) {
        return b.c == a;
      });
      c && hg(c, b, H());
    }
  };
  function qh(a) {
    return Ja(Y.c, function (b) {
      b = bg(b);
      return a.a || b.a ? a.a == b.a : a.c || b.c ? a.c == b.c : !1;
    });
  }
  function rh(a) {
    var b = Ka(Y.c, function (b) {
      return b == a;
    });
    -1 != b && (Y.c.splice(b, 1), a.ga(y));
  }
  function wh(a) {
    if (!a) return null;
    var b = Ka(Y.c, function (b) {
      return b.c == a;
    });
    return -1 == b ? null : Y.c.splice(b, 1)[0];
  }
  function th() {
    var a = Vb("IFRAME", {
      id: "google_osd_static_frame_" + Math.floor(1e13 * Math.random()),
      name: "google_osd_static_frame",
    });
    a.style.display = "none";
    a.style.width = "0px";
    a.style.height = "0px";
    y.document.body.appendChild(a);
    return a;
  }
  function dh(a) {
    za(
      "Goog_Osd_UnloadAdBlock",
      S(134, function (b) {
        for (var c = [], d = 0; d < arguments.length; ++d) c[d] = arguments[d];
        return a.Ib.apply(a, r(c));
      })
    );
    za(
      "Goog_Osd_UpdateElementToMeasure",
      S(135, function (b) {
        for (var c = [], d = 0; d < arguments.length; ++d) c[d] = arguments[d];
        return a.Jb.apply(a, r(c));
      })
    );
  }
  var vh = new ch();
  Qd(155, function () {
    Y.w = "osd";
    uh();
    Ac()
      ? vh.eb()
      : (eh(vh),
        U(
          H(),
          "load",
          function () {
            window.setTimeout(
              S(153, function (a) {
                for (var b = [], c = 0; c < arguments.length; ++c)
                  b[c] = arguments[c];
                return vh.eb.apply(vh, r(b));
              }),
              100
            );
          },
          154
        ));
  });
}.call(this));
