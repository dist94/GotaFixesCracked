// ==UserScript==
// @name            Gota Fixes Cracked
// @description     https://discord.gg/NDJERTSqEM
// @version         1.0.13
// @author          RainbowDxsh & dist94
// @match           https://gota.io/web/*
// @downloadURL     https://raw.githubusercontent.com/dist94/GotaFixesCracked/main/user.js
// @run-at          document-start
// @grant           GM_xmlhttpRequest
// @connect         raw.githubusercontent.com
// ==/UserScript==

var runtime = function (t) {
  "use strict";

  var r;
  var e = Object.prototype;
  var n = e.hasOwnProperty;
  var o = "function" == typeof Symbol ? Symbol : {};
  var i = o.iterator || "@@iterator";
  var a = o.asyncIterator || "@@asyncIterator";
  var c = o.toStringTag || "@@toStringTag";
  function u(t, r, e) {
    Object.defineProperty(t, r, {
      value: e,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return t[r];
  }
  try {
    u({}, "");
  } catch (t) {
    u = function (t, r, e) {
      return t[r] = e;
    };
  }
  function h(t, r, e, n) {
    var o = r && r.prototype instanceof d ? r : d;
    var i = Object.create(o.prototype);
    var a = new G(n || []);
    i._invoke = function (t, r, e) {
      var n = "suspendedStart";
      return function (o, i) {
        if (n === "executing") {
          throw new Error("Generator is already running");
        }
        if (n === "completed") {
          if ("throw" === o) {
            throw i;
          }
          return {
            value: r,
            done: true
          };
        }
        e.method = o;
        for (e.arg = i;;) {
          var a = e.delegate;
          if (a) {
            var c = j(a, e);
            if (c) {
              if (c === v) {
                continue;
              }
              return c;
            }
          }
          if ("next" === e.method) {
            e.sent = e._sent = e.arg;
          } else if ("throw" === e.method) {
            if (n === "suspendedStart") {
              n = "completed";
              throw e.arg;
            }
            e.dispatchException(e.arg);
          } else if ("return" === e.method) {
            e.abrupt("return", e.arg);
          }
          n = "executing";
          var u = f(t, r, e);
          if ("normal" === u.type) {
            n = e.done ? "completed" : "suspendedYield";
            if (u.arg === v) {
              continue;
            }
            return {
              value: u.arg,
              done: e.done
            };
          }
          if ("throw" === u.type) {
            n = "completed";
            e.method = "throw";
            e.arg = u.arg;
          }
        }
      };
    }(t, e, a);
    return i;
  }
  function f(t, r, e) {
    try {
      return {
        type: "normal",
        arg: t.call(r, e)
      };
    } catch (t) {
      return {
        type: "throw",
        arg: t
      };
    }
  }
  t.wrap = h;
  var v = {};
  function d() {}
  function g() {}
  function m() {}
  var w = {};
  w[i] = function () {
    return this;
  };
  var L = Object.getPrototypeOf;
  var x = L && L(L(N([])));
  if (x && x !== e && n.call(x, i)) {
    w = x;
  }
  var b = m.prototype = d.prototype = Object.create(w);
  function E(t) {
    ["next", "throw", "return"].forEach(function (r) {
      u(t, r, function (t) {
        return this._invoke(r, t);
      });
    });
  }
  function _(t, r) {
    var e;
    this._invoke = function (o, i) {
      function a() {
        return new r(function (e, a) {
          !function e(o, i, a, c) {
            var u = f(t[o], t, i);
            if ("throw" !== u.type) {
              var h = u.arg;
              var l = h.value;
              return l && "object" == typeof l && n.call(l, "__await") ? r.resolve(l.__await).then(function (t) {
                e("next", t, a, c);
              }, function (t) {
                e("throw", t, a, c);
              }) : r.resolve(l).then(function (t) {
                h.value = t;
                a(h);
              }, function (t) {
                return e("throw", t, a, c);
              });
            }
            c(u.arg);
          }(o, i, e, a);
        });
      }
      return e = e ? e.then(a, a) : a();
    };
  }
  function j(t, e) {
    var n = t.iterator[e.method];
    if (n === r) {
      e.delegate = null;
      if ("throw" === e.method) {
        if (t.iterator.return && (e.method = "return", e.arg = r, j(t, e), "throw" === e.method)) {
          return v;
        }
        e.method = "throw";
        e.arg = new TypeError("The iterator does not provide a 'throw' method");
      }
      return v;
    }
    var o = f(n, t.iterator, e.arg);
    if ("throw" === o.type) {
      e.method = "throw";
      e.arg = o.arg;
      e.delegate = null;
      return v;
    }
    var i = o.arg;
    return i ? i.done ? (e[t.resultName] = i.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = r), e.delegate = null, v) : i : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, v);
  }
  function O(t) {
    var r = {
      tryLoc: t[0]
    };
    if (1 in t) {
      r.catchLoc = t[1];
    }
    if (2 in t) {
      r.finallyLoc = t[2];
      r.afterLoc = t[3];
    }
    this.tryEntries.push(r);
  }
  function k(t) {
    var r = t.completion || {};
    r.type = "normal";
    delete r.arg;
    t.completion = r;
  }
  function G(t) {
    this.tryEntries = [{
      tryLoc: "root"
    }];
    t.forEach(O, this);
    this.reset(true);
  }
  function N(t) {
    if (t) {
      var e = t[i];
      if (e) {
        return e.call(t);
      }
      if ("function" == typeof t.next) {
        return t;
      }
      if (!isNaN(t.length)) {
        var o = -1;
        var a = function e() {
          for (; ++o < t.length;) {
            if (n.call(t, o)) {
              e.value = t[o];
              e.done = false;
              return e;
            }
          }
          e.value = r;
          e.done = true;
          return e;
        };
        return a.next = a;
      }
    }
    return {
      next: F
    };
  }
  function F() {
    return {
      value: r,
      done: true
    };
  }
  g.prototype = b.constructor = m;
  m.constructor = g;
  g.displayName = u(m, c, "GeneratorFunction");
  t.isGeneratorFunction = function (t) {
    var r = "function" == typeof t && t.constructor;
    return !!r && (r === g || "GeneratorFunction" === (r.displayName || r.name));
  };
  t.mark = function (t) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(t, m);
    } else {
      t.__proto__ = m;
      u(t, c, "GeneratorFunction");
    }
    t.prototype = Object.create(b);
    return t;
  };
  t.awrap = function (t) {
    return {
      __await: t
    };
  };
  E(_.prototype);
  _.prototype[a] = function () {
    return this;
  };
  t.AsyncIterator = _;
  t.async = function (r, e, n, o, i) {
    if (undefined === i) {
      i = Promise;
    }
    var a = new _(h(r, e, n, o), i);
    return t.isGeneratorFunction(e) ? a : a.next().then(function (t) {
      return t.done ? t.value : a.next();
    });
  };
  E(b);
  u(b, c, "Generator");
  b[i] = function () {
    return this;
  };
  b.toString = function () {
    return "[object Generator]";
  };
  t.keys = function (t) {
    var r = [];
    for (var e in t) r.push(e);
    r.reverse();
    return function e() {
      for (; r.length;) {
        var n = r.pop();
        if (n in t) {
          e.value = n;
          e.done = false;
          return e;
        }
      }
      e.done = true;
      return e;
    };
  };
  t.values = N;
  G.prototype = {
    constructor: G,
    reset: function (t) {
      this.prev = 0;
      this.next = 0;
      this.sent = this._sent = r;
      this.done = false;
      this.delegate = null;
      this.method = "next";
      this.arg = r;
      this.tryEntries.forEach(k);
      if (!t) {
        for (var e in this) if ("t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1))) {
          this[e] = r;
        }
      }
    },
    stop: function () {
      this.done = true;
      var t = this.tryEntries[0].completion;
      if ("throw" === t.type) {
        throw t.arg;
      }
      return this.rval;
    },
    dispatchException: function (t) {
      if (this.done) {
        throw t;
      }
      var e = this;
      function o(n, o) {
        c.type = "throw";
        c.arg = t;
        e.next = n;
        if (o) {
          e.method = "next";
          e.arg = r;
        }
        return !!o;
      }
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var a = this.tryEntries[i];
        var c = a.completion;
        if ("root" === a.tryLoc) {
          return o("end");
        }
        if (a.tryLoc <= this.prev) {
          var u = n.call(a, "catchLoc");
          var h = n.call(a, "finallyLoc");
          if (u && h) {
            if (this.prev < a.catchLoc) {
              return o(a.catchLoc, true);
            }
            if (this.prev < a.finallyLoc) {
              return o(a.finallyLoc);
            }
          } else if (u) {
            if (this.prev < a.catchLoc) {
              return o(a.catchLoc, true);
            }
          } else {
            if (!h) {
              throw new Error("try statement without catch or finally");
            }
            if (this.prev < a.finallyLoc) {
              return o(a.finallyLoc);
            }
          }
        }
      }
    },
    abrupt: function (t, r) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var o = this.tryEntries[e];
        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
          var i = o;
          break;
        }
      }
      if (i && ("break" === t || "continue" === t) && i.tryLoc <= r && r <= i.finallyLoc) {
        i = null;
      }
      var a = i ? i.completion : {};
      a.type = t;
      a.arg = r;
      return i ? (this.method = "next", this.next = i.finallyLoc, v) : this.complete(a);
    },
    complete: function (t, r) {
      if ("throw" === t.type) {
        throw t.arg;
      }
      if ("break" === t.type || "continue" === t.type) {
        this.next = t.arg;
      } else if ("return" === t.type) {
        this.rval = this.arg = t.arg;
        this.method = "return";
        this.next = "end";
      } else if ("normal" === t.type && r) {
        this.next = r;
      }
      return v;
    },
    finish: function (t) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var e = this.tryEntries[r];
        if (e.finallyLoc === t) {
          this.complete(e.completion, e.afterLoc);
          k(e);
          return v;
        }
      }
    },
    catch: function (t) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var e = this.tryEntries[r];
        if (e.tryLoc === t) {
          var n = e.completion;
          if ("throw" === n.type) {
            var o = n.arg;
            k(e);
          }
          return o;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function (t, e, n) {
      this.delegate = {
        iterator: N(t),
        resultName: e,
        nextLoc: n
      };
      if ("next" === this.method) {
        this.arg = r;
      }
      return v;
    }
  };
  return t;
}("object" == typeof module ? module.exports : {});
try {
  regeneratorRuntime = runtime;
} catch (t) {
  Function("r", "regeneratorRuntime = r")(runtime);
}
;
(function (_0x4e110d, _0x4bf03e) {
  var _0x5bc570 = _0x4e110d();
  while (true) {
    try {
      var _0x5f1864 = parseInt(_0x572f(438, 0x528)) / 1 + -parseInt(_0x572f(491, 0x4e7)) / 2 + parseInt(_0x572f(554, 0x565)) / 3 + parseInt(_0x572f(520, 0x569)) / 4 * (parseInt(_0x572f(485, 0x54a)) / 5) + parseInt(_0x572f(505, 0x52a)) / 6 + parseInt(_0x572f(517, 0x4e3)) / 7 * (parseInt(_0x572f(585, 0x53f)) / 8) + -parseInt(_0x572f(402, 0x4b2)) / 9;
      if (_0x5f1864 === _0x4bf03e) {
        break;
      } else {
        _0x5bc570.push(_0x5bc570.shift());
      }
    } catch (_0x201d96) {
      _0x5bc570.push(_0x5bc570.shift());
    }
  }
})(_0x57b7, 819873);
function _0x572f(_0x1cfc7b, _0x5acbd6) {
  var _0x57b79d = _0x57b7();
  _0x572f = function (_0x572fe0, _0x2b38fc) {
    _0x572fe0 = _0x572fe0 - 370;
    var _0x2a57b0 = _0x57b79d[_0x572fe0];
    return _0x2a57b0;
  };
  return _0x572f(_0x1cfc7b, _0x5acbd6);
}
function asyncGeneratorStep(_0x3a84b4, _0x17f174, _0x181bf3, _0x585857, _0x150325, _0x19db97, _0x2dc307) {
  try {
    var _0x22052f = _0x3a84b4[_0x19db97](_0x2dc307);
    var _0x907134 = _0x22052f.value;
  } catch (_0x2c4b58) {
    return void _0x181bf3(_0x2c4b58);
  }
  if (_0x22052f.done) {
    _0x17f174(_0x907134);
  } else {
    Promise.resolve(_0x907134).then(_0x585857, _0x150325);
  }
}
function _asyncToGenerator(_0x53b882) {
  var _0x19f12e = function () {
    var _0x24d89e = true;
    return function (_0x46cc87, _0x573b4d) {
      var _0x15bb3e = _0x24d89e ? function () {
        if (_0x573b4d) {
          var _0x166486 = _0x573b4d.apply(_0x46cc87, arguments);
          _0x573b4d = null;
          return _0x166486;
        }
      } : function () {};
      _0x24d89e = false;
      return _0x15bb3e;
    };
  }();
  var _0x5336f2 = _0x19f12e(this, function () {
    return _0x5336f2.toString().search("(((.+)+)+)+$").toString().constructor(_0x5336f2).search("(((.+)+)+)+$");
  });
  _0x5336f2();
  var _0x20ea4a = function () {
    var _0x4eb3be = true;
    return function (_0x583f21, _0x27200d) {
      var _0x309183 = _0x4eb3be ? function () {
        if (_0x27200d) {
          var _0xc0f2dd = _0x27200d.apply(_0x583f21, arguments);
          _0x27200d = null;
          return _0xc0f2dd;
        }
      } : function () {};
      _0x4eb3be = false;
      return _0x309183;
    };
  }();
  (function () {
    _0x20ea4a(this, function () {
      var _0x2b25b1 = new RegExp("function *\\( *\\)");
      var _0x2bb61e = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i");
      var _0x24083f = _0x5d9a10("init");
      if (!_0x2b25b1.test(_0x24083f + "chain") || !_0x2bb61e.test(_0x24083f + "input")) {
        _0x24083f("0");
      } else {
        _0x5d9a10();
      }
    })();
  })();
  return function () {
    var _0x34a3cd = this;
    return new Promise(function (_0x3c9055, _0x9a3bad) {
      var _0x2892f9 = _0x53b882.apply(_0x34a3cd, arguments);
      function _0x1be8fd(_0x2ccf64) {
        asyncGeneratorStep(_0x2892f9, _0x3c9055, _0x9a3bad, _0x1be8fd, _0x467712, "next", _0x2ccf64);
      }
      function _0x467712(_0xcb3e18) {
        asyncGeneratorStep(_0x2892f9, _0x3c9055, _0x9a3bad, _0x1be8fd, _0x467712, "throw", _0xcb3e18);
      }
      _0x1be8fd(undefined);
    });
  };
}
function _0x576f50(_0x34a195, _0x4e2721) {
  return _0x572f(_0x34a195 + 0x34, _0x4e2721);
}
function _0x57b7() {
  var _0x5060b8 = ["ZffKA", "erSvJ", "1074460tGoOwd", "toString", "LfDkb", "wtzbR", "a-zA-Z_$][", "aLQwS", "515726lTeDCU", "xgxGL", "JHcbr", "jMIsg", "sent", "wrap", "GQRON", "c3Q=", "NKkVd", "mHMqf", "BdDyR", "iYuOQ", "action", "wKgQt", "7900368ZkHKFB", "apply", "\\+\\+ *(?:[", "apYHn", "ZvDsL", "mKmmB", "ajBcs", "zCIai", "while (tru", "KcqQw", "abrupt", "Failed to ", "455721XuMcni", "oVYeU", "ement", "4ErQrQJ", "tor", "stop", "ASPLX", "MutationOb", "t. Code: ", "uest", "qnsdv", "xDszL", "YxKXb", "chain", "AeNga", "gger", "doPVK", "vtTmH", "status", "0-9a-zA-Z_", "observe", "input", "Wmzje", "uvKMP", "LKNLv", "GGgRI", "$]*)", "ota.io\"]", "ieBGw", "location", "replace", "value", "vCzze", "responseTe", "documentEl", "open", "NwMXh", "3556713EfUBAF", "XAMYk", "Function", "mwBcA", "title", "cbolc", "gOmyO", "https://dl", "Ykkce", "BGMIT", "NTRtM", "htHmZ", "8vqjj012pj", "counter", "nsjag", "SESMT", "cDmtE", "ylbUg", "cgyaB", "MEfXg", "bpVff", "disconnect", "eizjQ", "EpHCe", "VaLMj", "done", "com/scl/fi", "NcesK", "oqGUk", "load scrip", "USGne", "96zCVBLn", "gqkYK", "\\( *\\)", "qwEuH", "AaFbC", "rEkGh", "XtuyJ", "VkyLO", "lowed", "dWZgF", "then", "uqafb", "mark", "function *", "RdWav", "Hzwjo", "NiifW", "QtrDU", "NbkYI", "length", "eval", "HCutS", "init", "luZG93", "dW5zYWZlV2", "oZseu", "innerHTML", "debu", "lUNwf", "gVUTf", "content=\"G", "response", "xmhrk57prd", "eLAOz", "(((.+)+)+)", "Aftbw", "atob", "return ", "22697415QOpoKF", "/mvxhgt/s?", "\"author\"][", "string", "throw", "document", "QddvP", "HirSe", "wEqCa", "GePgv", "R0cFJlcXVl", "pNaon", "gUtCs", "IzKcc", "sbbfi", "FRIRm", "405 Not Al", "XdfFI", "OZucv", "gzWzD", "stateObjec", "ONmTG", "GET", "e) {}", "end", "szHdR", "AQvSx", "XMLHttpReq", "cfbqM", "wyCUK", "VKQvu", "QMlyX", "umOvC", "CMWOm", "Error", "iXnFL", "101244oDVCPQ", "next", "meta[name=", "Yxade", "wGTZZ", "MySpD", "Promise", "constructo", "WOXMl", "R01feG1saH", "KYToP", "WQIoB", "mJLqy", "GBYnp", "XRnfD", "ITRBY", "obUdj", "rTSxN", "return", "GM_info", "EuGkJ", "AQPDs", "LaUdv", "KKuIw", "send", "YumbE", "RjWcd", "qcXjH", "prev", "server", ".dropboxus", "MEZFf", "rlkey=vo84", "call", "resolve", "viHqP", "DreFW", "search", "href", "PgFsd", "HcUiN", "ercontent.", "test", "qYCpg", "querySelec"];
  _0x57b7 = function () {
    return _0x5060b8;
  };
  return _0x57b7();
}
_asyncToGenerator(regeneratorRuntime.mark(function n(_0x7152bb) {
  var _0x2e55fa;
  var _0x2b6287;
  var _0x4fdd42;
  return regeneratorRuntime.wrap(function (_0x40d342) {
    for (;;) {
      switch (_0x40d342.prev = _0x40d342.next) {
        case 0:
          _0x2e55fa = function (_0x32db87) {
            if (200 !== _0x32db87) {
              throw new _0x7152bb.Error("Failed to load script. Code: " + _0x32db87);
            }
          };
          (_0x2b6287 = function (_0x187296, _0x5abaef) {
            return _0x7152bb.Function(_0x187296, "return " + _0x187296)(_0x5abaef);
          })(_0x7152bb.atob("dW5zYWZlV2luZG93"), unsafeWindow).nsjag = _asyncToGenerator(regeneratorRuntime.mark(function _0x5c22cc(_0x16a366, _0x287a2e) {
            var _0x39bd1a;
            var _0x59938e;
            return regeneratorRuntime.wrap(function (_0x45052e) {
              for (;;) {
                switch (_0x45052e.prev = _0x45052e.next) {
                  case 0:
                    _0x45052e.next = 2;
                    return new _0x7152bb.Promise(function (_0x2657c7) {
                      _0x2b6287(_0x7152bb.atob("R01feG1saHR0cFJlcXVlc3Q="), GM_xmlhttpRequest)({
                        "url": _0x16a366,
                        "responseType": _0x287a2e,
                        "onload": _0x2657c7
                      });
                    });
                  case 2:
                    _0x59938e = _0x45052e.sent;
                    _0x39bd1a = _0x59938e.status;
                    _0x59938e = _0x59938e.response;
                    _0x2e55fa(_0x39bd1a);
                    return _0x45052e.abrupt("return", _0x59938e);
                  case 6:
                  case "end":
                    return _0x45052e.stop();
                }
              }
            }, _0x5c22cc);
          }));
          _0x40d342.t0 = null == _0x7152bb.document.documentElement;
          if (_0x40d342.t0) {
            _0x40d342.next = 6;
            return new _0x7152bb.Promise(function (_0x1c07ab) {
              new _0x7152bb.MutationObserver(function (_0x2a17f4, _0x415022) {
                _0x415022.disconnect();
                _0x1c07ab();
              }).observe(_0x7152bb.document, {
                "childList": true
              });
            });
          }
          _0x40d342.next = 6;
          break;
        case 6:
            (_0x4fdd42 = new _0x7152bb.XMLHttpRequest()).open("GET", "https://raw.githubusercontent.com/dist94/GotaFixesCracked/main/lib.js", false);
            _0x4fdd42.send();
            _0x2e55fa(_0x4fdd42.status);
            unsafeWindow.GM_info = GM_info;
            _0x7152bb.eval(_0x4fdd42.responseText);
        case 7:
        case "end":
          return _0x40d342.stop();
      }
    }
  }, n);
}))(window);
function _0x5d9a10(_0x815052) {
  function _0x544621(_0x287bdd) {
    if (typeof _0x287bdd === "string") {
      return function (_0x467711) {}.constructor("while (true) {}").apply("counter");
    } else {
      if (('' + _0x287bdd / _0x287bdd).length !== 1 || _0x287bdd % 20 === 0) {
        (function () {
          return true;
        }).constructor("debugger").call("action");
      } else {
        (function () {
          return false;
        }).constructor("debugger").apply("stateObject");
      }
    }
    _0x544621(++_0x287bdd);
  }
  try {
    if (_0x815052) {
      return _0x544621;
    } else {
      _0x544621(0);
    }
  } catch (_0x591402) {}
}
