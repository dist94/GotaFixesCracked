!function () {
  function O(S) {
    return (O = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (d) {
      return typeof d;
    } : function (d) {
      return d && "function" == typeof Symbol && d.constructor === Symbol && d !== Symbol.prototype ? "symbol" : typeof d;
    })(S);
  }
  function N() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function J(S) {
    if ("undefined" != typeof Symbol && null != S[Symbol.iterator] || null != S["@@iterator"]) {
      return Array.from(S);
    }
  }
  function f(S) {
    if (Array.isArray(S)) {
      return A(S);
    }
  }
  function r() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function w(S, d) {
    var a;
    if (S) {
      return "string" == typeof S ? A(S, d) : "Map" === (a = "Object" === (a = Object.prototype.toString.call(S).slice(0x8, -0x1)) && S.constructor ? S.constructor.name : a) || "Set" === a ? Array.from(S) : "Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? A(S, d) : undefined;
    }
  }
  function A(S, d) {
    if (null == d || d > S.length) {
      d = S.length;
    }
    var a = 0x0;
    for (var X = new Array(d); a < d; a++) {
      X[a] = S[a];
    }
    return X;
  }
  function E(S, d) {
    var X = null == S ? null : "undefined" != typeof Symbol && S[Symbol.iterator] || S["@@iterator"];
    if (null != X) {
      var g;
      var P;
      var M;
      var y;
      var h = [];
      var u = true;
      var V = false;
      try {
        M = (X = X.call(S)).next;
        if (0x0 === d) {
          if (Object(X) !== X) {
            return;
          }
          u = false;
        } else {
          for (; !(u = (g = M.call(X)).done) && (h.push(g.value), h.length !== d); u = true) {
            ;
          }
        }
      } catch (U) {
        V = true;
        P = U;
      } finally {
        try {
          if (!u && null != X["return"] && (y = X["return"](), Object(y) !== y)) {
            return;
          }
        } finally {
          if (V) {
            throw P;
          }
        }
      }
      return h;
    }
  }
  function t(S) {
    if (Array.isArray(S)) {
      return S;
    }
  }
  function F(S, d) {
    var a;
    var X = Object.keys(S);
    if (Object.getOwnPropertySymbols) {
      a = Object.getOwnPropertySymbols(S);
      if (d) {
        a = a.filter(function (g) {
          return Object.getOwnPropertyDescriptor(S, g).enumerable;
        });
      }
      X.push.apply(X, a);
    }
    return X;
  }
  function L(S) {
    for (var d = 0x1; d < arguments.length; d++) {
      var a = null != arguments[d] ? arguments[d] : {};
      if (d % 0x2) {
        F(Object(a), true).forEach(function (X) {
          v(S, X, a[X]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(S, Object.getOwnPropertyDescriptors(a));
      } else {
        F(Object(a)).forEach(function (X) {
          Object.defineProperty(S, X, Object.getOwnPropertyDescriptor(a, X));
        });
      }
    }
    return S;
  }
  function v(S, d, a) {
    if ((d = K(d)) in S) {
      Object.defineProperty(S, d, {
        "value": a,
        "enumerable": true,
        "configurable": true,
        "writable": true
      });
    } else {
      S[d] = a;
    }
  }
  function K(S) {
    S = b(S, "string");
    return "symbol" === O(S) ? S : String(S);
  }
  function b(S, d) {
    if ("object" !== O(S) || null === S) {
      return S;
    }
    var a = S[Symbol.toPrimitive];
    if (undefined === a) {
      return ("string" === d ? String : Number)(S);
    }
    a = a.call(S, d || "default");
    if ("object" !== O(a)) {
      return a;
    }
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  !function (S, d) {
    var a = S(d("d2luZG93"));
    var X = a.$;
    var g = a.document;
    var P;
    var M;
    if (null == a.fuckAdBlock) {
      a.aiptag = null != (P = a.aiptag) ? P : {};
      Object.defineProperty(a.aiptag, "settings", {
        "get": function () {
          return M;
        },
        "set": function (y) {
          y.iBtLoader = false;
          M = y;
        }
      });
    }
    a.gajsn = function () {
      var O0;
      var O1 = a.Math;
      var O2 = new function () {
        this.t = false;
        this.i = "CP_0918_01";
        this.o = "https://gota.io/policies/privacy.html?v=" + this.i + "#cookies";
        this.l = X("#cc_acceptCookies");
        this.u = {
          "p": "cookieConsent",
          "m": "yes+" + this.i,
          "k": 0x2da,
          "$": "/web"
        };
        this._ = {
          "S": X("#cookie-banner"),
          "N": X("#declineCookies"),
          "C": X("#acceptCookies"),
          "O": false
        };
        this.H = function () {
          this.M();
          this.l.on("change", function () {
            O2.F(X(this).prop("checked"));
          });
          if (this.D() === this.u.m) {
            this.F(true);
            this.I(false);
          } else {
            this.F(false);
            this.I(true);
          }
        };
        this.F = function (fL) {
          this.t = fL;
          a.aiptag.consented = fL;
          this.l.prop("checked", fL);
          if (fL) {
            this.A();
            this.I(false);
            if (O2.t) {
              var fL = a.localStorage.getItem("theme");
              var fv = a.localStorage.getItem("fixes_theme");
              JG(L(L({}, JSON.parse(null != fL ? fL : "{}")), JSON.parse(null != fv ? fv : "{}")));
              var fK = a.localStorage.getItem("keybinds");
              if (fK) {
                fK = JSON.parse(fK);
                for (var fb in na) {
                  var fS = fK[fb];
                  if (Number.isInteger(fS)) {
                    na[fb] = fS;
                  }
                }
              }
              var fd = a.localStorage.getItem("options");
              if (fd) {
                fd = JSON.parse(fd);
                for (var fa in nd) if (fa in fd) {
                  nd[fa] = fd[fa];
                }
              }
              var fX;
              var fL = function (fB) {
                return 0x18 * fB * 0x3c * 0x3c * 0x3e8;
              };
              var fg = a.localStorage.getItem("fixes_version");
              if (null == fg) {
                a.localStorage.setItem("next_notice", Date.now() + fL(0x2));
              }
              var fP = '';
              for (fX of [[0x13, "Locked name users won't get ad popups in the middle of playing anymore (when not using adblocker).\n\nUpdated to Gota version 3.6.3:\n- Added new ejected mass skins: cat, cupid, sword, shield, tornado, radioactive, rocket, wave, and added letters/numbers.\n- Replaced \"flower2\" ejected mass skin with \"fire\".\n- Removed useless Grid Color option from Theme."], [0x14, "Added an option to change zoom delay.\n\nIncreased the default zoom delay to match Gota's zoom speed at 60fps.\n\nAdded an option for darker bot colors."], [0x15, "Fixed an issue where certain ad-blockers were causing a red error banner to appear.\n\nFixed an issue where Donut linesplits were not working properly after a recent Gota Fixes update."], [0x16, "Fixed a Gota bug causing a red error banner to appear whenever viewing a player's profile while logged out.\n\nUpdated to Gota version 3.6.4:\n- Nothing needed to be changed besides the version number."], [0x17, "Fixed an issue causing store advertisements to still show in chat every 30 minutes.\n\nAdded Gota's halloween theme."], [0x18, "Improved FPS while using the \"Show Coordinates\" option by about 15%.\n\nOther slight optimisations."], [0x19, "Added a linesplit keybind:\n\n- Pretty much 100% success rate, unless your mouse is too close to the center of your cell. Animation delay, camera delay or ping doesn't affect it.\n\n- Lineup time is as low as 50ms, depending on your ping.\n\n- Allows activation when you have more than 1 cell.\n\n- Allows splitting immediately after lining up.\n\n- Option for toggle or hold activation.\n\nPlease let me know if there are any issues. I can tweak it to take a little longer to lineup for more consistency."], [0x1a, "Fixed an issue causing the script to break when using Violentmonkey.\n\nFixed an issue causing no cells to appear after seeing the \"Allow Cookies\" prompt."], [0x1b, "Slightly increased linesplit line-up time for more consistency with large mass.\n\nFixed an issue causing degrading performance over long game sessions.\n\nFreezing mouse before and after linesplitting should now work as expected.\nNote: Freezing mouse quickly after pressing the linesplit key will cause your cell to freeze if it hasn't lined up yet."], [0x1c, "Hopefully fixed the Gota bug that causes auto respawn to break when dying immediately after pressing Play.\n\nFixed a Gota bug preventing the Esc key from closing social menus such as profile and friends list.\n\nFixed an issue causing the Spectate button to break if it was pressed while the player is still alive.\n\nAdded an option slider to change menu animation speed: Menu Delay.\nIt can be set to 0 if you want no animations."], [0x1d, "Slightly decreased the delay between switching tabs when multiboxing with capped FPS."], [0x1e, "Added options and keybinds to hide bot names, masses and skins.\n\nContext menu for names in the chat, leaderboard and party now take priority over cell context menus.\nIn other words, trying to right click a chat name when a cell is underneath will show the chat name context menu, as expected.\n\nThe Context Menu keybind now applies to chat, leaderboard and party, instead of just cells.\n\nAdded 5 more zoom level keybinds. Zoom difference between each level has decreased for finer control.\n\nAdded a theme option for map background image.\n\nFixed an issue preventing the Linesplit Mode option from saving after refreshing the page."]]) {
                var fM = t(fX) || E(fX, 0x2) || w(fX, 0x2) || r();
                var fy = fM[0x0];
                var fM = fM[0x1];
                if (fg < fy) {
                  fP += fM + "\n\n";
                }
              }
              if (0x0 !== fP.length) {
                OD("Gota Fixes was updated!", fP += "\nIf you enjoy these updates, please consider donating to help me make more!");
              } else {
                fv = Date.now();
                if (a.localStorage.getItem("next_notice") <= fv) {
                  OD("Gota Fixes Notice", "Hi guys, Camlan here (Gota Fixes developer). I just wanted to say that I enjoy giving the community a smooth experience when playing Gota, but updating the script takes a lot of my time and I can no longer afford to do it without donations. If you enjoy using the script and would like to see new features, please donate.\n\nI have many new features I can add to the script that I'm sure would benefit everyone. Once I have enough donations I will start working on some of these new features straight away!\n\nIf you have any questions or suggestions, please message me on Discord at Camlan#9322.");
                  a.localStorage.setItem("next_notice", fv + fL(0x7));
                }
              }
              a.localStorage.setItem("fixes_version", "30");
              var fh;
              var fu;
              var fc = a.localStorage.getItem("fixes_options");
              var fl = a.localStorage.getItem("fixes_keybinds");
              if (fc) {
                var fV;
                var fU = (fc = JSON.parse(fc)).loadver;
                if (null != fU && (fU & 0x1201) === 0x1201) {
                  JC.forEach(function (fB) {
                    var fB = t(fB) || E(fB, 0x3) || w(fB, 0x3) || r();
                    var fs = fB[0x0];
                    var fQ = fB[0x1];
                    var fB = fB[0x2];
                    nd[fB] = 0x1 === fQ ? !!(fU & 0x1 << fs) : fU >> fs & (0x1 << fQ) - 0x1;
                  });
                  delete fc.loadver;
                }
                for (fV in ng) if (fV in fc) {
                  nd[fV] = fc[fV];
                }
              }
              if (fl) {
                if (!("kZoom10" in (fl = JSON.parse(fl))) && "kZoom5" in fl) {
                  Object.assign(fl, {
                    "kZoom2": na.kZoom2,
                    "kZoom3": fl.kZoom2,
                    "kZoom4": na.kZoom4,
                    "kZoom5": na.kZoom5,
                    "kZoom6": fl.kZoom3,
                    "kZoom8": fl.kZoom4,
                    "kZoom10": fl.kZoom5
                  });
                }
                for (var fm in nP) if (fm in fl) {
                  na[fm] = fl[fm];
                }
              }
              for (fh in na) {
                var fH = X("#" + fh);
                if (0x0 !== fH.length) {
                  NQ(fH);
                }
              }
              for (fu of Object.entries(nd)) {
                var fC = t(fu) || E(fu, 0x2) || w(fu, 0x2) || r();
                var fj = fC[0x0];
                var fG = fC[0x1];
                var fI = X("#" + fj);
                if (0x0 !== fI.length) {
                  switch (fj.charAt(0x0)) {
                    case "c":
                      if (true === fG) {
                        fI.prop("checked", true);
                        JM(fI);
                      }
                      break;
                    case "s":
                      fI.val(fG);
                      Jy(fI);
                      break;
                    case "r":
                      fI.val(fG);
                      Jh(fI);
                      break;
                    case "i":
                      fI.val(fG);
                      Ju(fI);
                  }
                }
              }
              nf.T.css("width", "360px");
              nf.T.css("height", "250px");
              Jc("cThemeEnabled");
              if (null != (fv = a.localStorage.getItem("name"))) {
                X("#name-box").val(fv);
              }
              var fT = a.localStorage.getItem("subpanel");
              if (fT) {
                fT = JSON.parse(fT);
                for (var fk in nC) if (fk in fT) {
                  nC[fk] = fT[fk];
                }
              }
            }
            J4();
            X("#spNameColor").spectrum({
              "color": nC.nameColor,
              "showAlpha": false,
              "showInput": true,
              "preferredFormat": "rgb"
            });
            X("#spChatColor").spectrum({
              "showPaletteOnly": true,
              "showPalette": true,
              "color": f1[0x0],
              "palette": f1
            });
            X("#spSkinName").val('');
            X("#spLowerName").prop("checked", false);
            X("#spEffect").val(0x0);
            X("#spNameFont").val(0x0);
            X("#btn-chg-ln").on("click", function () {
              var fB;
              var fs;
              if (n3 && (fB = prompt("Enter new locked name!"))) {
                fs = "string" != typeof fB ? "Please enter a valid name!" : null;
                if (fB.length < 0x2) {
                  fs = "Locked names must be 2 or more characters long.";
                }
                if (null != (fs = 0x14 < fB.length ? "Locked names must be 20 or less characters long." : fs)) {
                  alert(fs);
                } else {
                  fB = fB.trim();
                  if (confirm("You are about to change your locked name to: '" + fB + "'.\nLocked names can only be changed once per week.\n\nAre you sure you wish to continue?")) {
                    Oh.P(nQ.L(fB));
                  }
                }
              }
            });
            X("#btn-updateSP").on("click", J3);
            X("#btn-subpanel-rules").on("click", function () {
              nC.rules = true;
              J4();
            });
            X("#no_cookie_consent").hide();
            if ("none" !== X("#account-loader").css("display")) {
              X("#guest").hide();
            } else {
              X("#guest").show();
            }
          } else {
            this.R();
            if (null != OJ.auth().currentUser) {
              OJ.auth().signOut()["catch"](function () {});
            }
            X("#authed").hide();
            X("#account-loader").hide();
            X("#guest").hide();
            X("#no_cookie_consent").show();
            this.I(true);
          }
        };
        this.I = function (fL) {
          if (fL) {
            if (!this._.O) {
              this.U();
              this._.O = true;
            }
            this._.S.slideDown();
          } else {
            this._.S.slideUp();
          }
        };
        this.U = function () {
          this._.N.on("click", function () {
            O2.F(false);
            O2.I(false);
          });
          this._.C.on("click", function () {
            O2.F(true);
            O2.I(false);
          });
          X("#cookie-banner .description").append(" <a href=\"" + this.o + "\" target=\"_blank\">Our Cookie Policy!</a>");
        };
        this.A = function () {
          (fL = new Date()).setTime(fL.getTime() + 0x18 * this.u.k * 0x3c * 0x3c * 0x3e8);
          var fL = "expires=" + fL.toUTCString();
          g.cookie = this.u.p + "=" + this.u.m + ";" + fL + ";path=" + this.u.$ + ";";
        };
        this.R = function () {
          g.cookie = this.u.p + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=" + this.u.$ + ";";
        };
        this.D = function () {
          var fL = this.u.p + "=";
          var fv = decodeURIComponent(g.cookie).split(";");
          for (var fK = 0x0; fK < fv.length; fK++) {
            for (var fb = fv[fK]; " " === fb.charAt(0x0);) {
              fb = fb.substring(0x1);
            }
            if (0x0 === fb.indexOf(fL)) {
              return fb.substring(fL.length, fb.length);
            }
          }
          return false;
        };
        this.M = function () {
          var fv = decodeURIComponent(g.cookie).split(";");
          var fK = null;
          for (var fb = 0x0; fb < fv.length; fb++) {
            for (var fS = fv[fb]; " " === fS.charAt(0x0);) {
              fS = fS.substring(0x1);
            }
            if (0x0 === fS.indexOf("cookieconsent_status=")) {
              fK = fS.substring("cookieconsent_status=".length, fS.length);
            }
          }
          if ("allow" === fK) {
            this.A();
          }
          g.cookie = "cookieconsent_status=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/web;";
        };
      }();
      var O3 = ["white", "#25f", "#f31", "green", "yellow", "purple", "orange"];
      var O4 = ['', "MOUSE1", "MOUSE2", "MOUSE3", "MOUSE4", "MOUSE5", "HELP", '', "BACK_SPACE", "TAB", '', '', "CLEAR", "ENTER", "ENTER_SPECIAL", '', "SHIFT", "CONTROL", "ALT", "PAUSE", "CAPS_LOCK", "KANA", "EISU", "JUNJA", "FINAL", "HANJA", '', "ESCAPE", "CONVERT", "NONCONVERT", "ACCEPT", "MODECHANGE", "SPACE", "PAGE_UP", "PAGE_DOWN", "END", "HOME", "LEFT", "UP", "RIGHT", "DOWN", "SELECT", "PRINT", "EXECUTE", "PRINTSCREEN", "INSERT", "DELETE", '', "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ":", ";", "<", "=", ">", "?", "AT", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "OS_KEY", '', "CONTEXT_MENU", '', "SLEEP", "NUMPAD0", "NUMPAD1", "NUMPAD2", "NUMPAD3", "NUMPAD4", "NUMPAD5", "NUMPAD6", "NUMPAD7", "NUMPAD8", "NUMPAD9", "MULTIPLY", "ADD", "SEPARATOR", "SUBTRACT", "DECIMAL", "DIVIDE", "F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12", "F13", "F14", "F15", "F16", "F17", "F18", "F19", "F20", "F21", "F22", "F23", "F24", '', '', '', '', '', '', '', '', "NUM_LOCK", "SCROLL_LOCK", "WIN_OEM_FJ_JISHO", "WIN_OEM_FJ_MASSHOU", "WIN_OEM_FJ_TOUROKU", "WIN_OEM_FJ_LOYA", "WIN_OEM_FJ_ROYA", '', '', '', '', '', '', '', '', '', "CIRCUMFLEX", "EXCLAMATION", "DOUBLE_QUOTE", "HASH", "DOLLAR", "PERCENT", "AMPERSAND", "UNDERSCORE", "OPEN_PAREN", "CLOSE_PAREN", "ASTERISK", "PLUS", "PIPE", "HYPHEN_MINUS", "OPEN_CURLY_BRACKET", "CLOSE_CURLY_BRACKET", "TILDE", '', '', '', '', "VOLUME_MUTE", "VOLUME_DOWN", "VOLUME_UP", '', '', "SEMICOLON", "EQUALS", "COMMA", "MINUS", "PERIOD", "SLASH", "BACK_QUOTE", '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', "OPEN_BRACKET", "BACK_SLASH", "CLOSE_BRACKET", "QUOTE", '', "META", "ALTGR", '', "WIN_ICO_HELP", "WIN_ICO_00", '', "WIN_ICO_CLEAR", '', '', "WIN_OEM_RESET", "WIN_OEM_JUMP", "WIN_OEM_PA1", "WIN_OEM_PA2", "WIN_OEM_PA3", "WIN_OEM_WSCTRL", "WIN_OEM_CUSEL", "WIN_OEM_ATTN", "WIN_OEM_FINISH", "WIN_OEM_COPY", "WIN_OEM_AUTO", "WIN_OEM_ENLW", "WIN_OEM_BACKTAB", "ATTN", "CRSEL", "EXSEL", "EREOF", "PLAY", "ZOOM", '', "PA1", "WIN_OEM_CLEAR", ''];
      var O5 = ["heart", "star", "home", "apple", "spiral", "dice", "chicken", "ghost", "burger", "bow", "cloud", "skull", "mug", "flower", "music", "checkmark", "clover", "crown", "fancy", "fish", "fire", "lightning", "paw", "duck", "snowflake", "bomb", "butterfly", "cherry", "watermelon", "cat", "cupid", "sword", "shield", "tornado", "radioactive", "rocket", "wave"];
      for (O0 of "abcdefghijklmnopqrstuvwxyz") O5.push("letter_" + O0);
      for (var O6 = 0x0; O6 < 0xa; O6++) {
        O5.push("number_" + O6);
      }
      var O7;
      var O8 = [];
      var OO = [new JB("Random", "random", 0x0), new JB("Maximum Cells Upgrade", "extracells", 0x1), new JB("Extra Consumable Slot", "extraconsumable", 0x1), new JB("Merge", "merge", 0x2), new JB("Grow", "grow", 0x2), new JB("Speed", "speed", 0x2), new JB("Shield", "shield", 0x2), new JB("Virus", "spike", 0x3), new JB("Disrupt", "disrupt", 0x3), new JB("Teleport", "teleport", 0x3), new JB("Disrupt", "_disrupt", 0x4), new JB("Silver", "phoenix", 0x1), new JB("Consumable Shield", "_shield", 0x3), new JB("Magnet", "magnet", 0x2), new JB("Decay", "decay", 0x3), new JB("Decay", "_decay", 0x4)];
      var ON = a.PIXI;
      var OJ = a.firebase;
      a.PIXI = null;
      var Oz = {
        "THICK": 0x9,
        "THIN": 0x5,
        "NONE": 0x0
      };
      var Or = {
        "fontFamily": "Verdana",
        "fontWeight": "bold",
        "fontSize": 0x45,
        "fill": 0xffffff
      };
      var Ow = new ON.Point(0.5, 0.5);
      var OA = new ON.Container();
      var OE = new ON.Sprite();
      OE.visible = false;
      var OF = new ON.Graphics();
      OF.visible = false;
      var OL = new ON.Container();
      var Ov = t(function () {
        class fL extends ON.ParticleContainer {
          ["Y"]() {
            var fv = O1.ceil(this.children.length / this._batchSize);
            if (0x0 !== fv) {
              ++this._updateID;
              for (var fK = 0x0; fK < fv; ++fK) {
                this._bufferUpdateIDs[fK] = this._updateID;
              }
            }
          }
        }
        return [new fL(0x5dc, null, 0x4000, true), new ON.ParticleContainer(0x5dc, null, 0x4000, true)];
      }()) || E(function () {
        class fL extends ON.ParticleContainer {
          ["Y"]() {
            var fv = O1.ceil(this.children.length / this._batchSize);
            if (0x0 !== fv) {
              ++this._updateID;
              for (var fK = 0x0; fK < fv; ++fK) {
                this._bufferUpdateIDs[fK] = this._updateID;
              }
            }
          }
        }
        return [new fL(0x5dc, null, 0x4000, true), new ON.ParticleContainer(0x5dc, null, 0x4000, true)];
      }(), 0x2) || w(function () {
        class fL extends ON.ParticleContainer {
          ["Y"]() {
            var fv = O1.ceil(this.children.length / this._batchSize);
            if (0x0 !== fv) {
              ++this._updateID;
              for (var fK = 0x0; fK < fv; ++fK) {
                this._bufferUpdateIDs[fK] = this._updateID;
              }
            }
          }
        }
        return [new fL(0x5dc, null, 0x4000, true), new ON.ParticleContainer(0x5dc, null, 0x4000, true)];
      }(), 0x2) || r();
      var OK = Ov[0x0];
      var Ob = Ov[0x1];
      var OS = new ON.Container();
      var Od = new ON.Sprite();
      var Ov = function (fL) {
        var fv = g.createElement("canvas");
        var fK = fv.getContext("2d");
        fv.width = fv.height = 0x2 * fL;
        fK.beginPath();
        fK.arc(fL, fL, fL, 0x0, ON.PI_2);
        fK.fillStyle = "#fff";
        fK.fill();
        (fL = ON.Texture.from(fv)).defaultAnchor = Ow;
        return fL;
      };
      var Oa = Ov(0x100);
      var OX = Ov(0x6);
      OL.addChild(OE, OF, OK, Ob, OS);
      OA.addChild(OL, Od);
      var OP;
      var OM;
      var Oy;
      var Oh;
      var Ou;
      var Oc;
      var Ol;
      var OV;
      var OU;
      var Om;
      var OH;
      var OC;
      var Oj;
      var OG;
      var OI;
      var OT;
      var Ok;
      var OB;
      var Os;
      var OQ;
      var Oq;
      var Ox;
      var OR;
      var Op;
      var Oo;
      var OZ;
      var OW;
      var OY;
      var OD;
      var n0;
      var n1;
      var n2 = '';
      var n3 = false;
      var n4 = null;
      var n5 = null;
      var n6 = false;
      var n7 = {
        "V": [],
        "K": [],
        "Z": [],
        "X": []
      };
      var n8 = [];
      var n9 = false;
      var nO = null;
      var nN = true;
      var nJ = 0x2 * O1.PI;
      var nf = {};
      var nz = new OJ.auth.GoogleAuthProvider();
      var nw = {
        "q": "xmas",
        "ee": [0xfd2b2b, 0x8cc5ff, 0xffffff, 0x5eaeff],
        "te": '',
        "ie": 0x18cadb88400,
        "ne": {
          "se": new ON.Point(0.513, 0.637),
          "ae": {
            "oe": 1.443609022556391,
            "re": 1.4479638009049773
          }
        }
      };
      nw.ce = Date.now() < 0x18cadb88400;
      OJ.initializeApp({
        "apiKey": "AIzaSyCmYFIIazBPyg5goqvPb-7uA6W9-4TVqEM",
        "authDomain": "accounts.gota.io",
        "databaseURL": "https://gota-io.firebaseio.com",
        "projectId": "gota-io",
        "storageBucket": "gota-io.appspot.com",
        "messagingSenderId": "570450309042",
        "appId": "1:570450309042:web:380ab6c94d44de2f"
      });
      var nA = {};
      var nE = {};
      var nF = {
        "le": 0x0,
        "de": 0x0,
        "he": 0x0,
        "ue": 0x1
      };
      var nL = [{
        "name": "All",
        "flags": 0xff,
        "maxMessages": 0x64
      }, {
        "name": "Party",
        "flags": 0x2,
        "maxMessages": 0x64
      }];
      var nv = 0xfa0;
      var nK = 0xfa0;
      var nb = {
        "pe": 0x1,
        "fe": 0xf,
        "me": 0xb,
        "ge": 0x1,
        "be": function (fL, fv) {
          nd[fL] = fv;
          var fK = 0x3e8 * (0xf - fv) + 0x2ee;
          switch (fL) {
            case "rRainbowNameSpeed":
              nv = fK;
              break;
            case "rRainbowCellSpeed":
              nK = fK;
          }
        }
      };
      var nS = 0x0;
      var nd = {
        "cDisableAA": false,
        "cAutoRespawn": false,
        "cHideId": false,
        "cHideServerDisplay": true,
        "sRenderType": "AUTO",
        "sTextOutlines": "NONE",
        "sQuality": "ULTRA",
        "sMassType": "DEFAULT",
        "cTransCells": false,
        "cShowBorder": false,
        "cSilentLogin": false,
        "cHideChat": false,
        "cHideMinimap": false,
        "cShowCoordinates": false,
        "cHideFood": false,
        "cColoredPing": false,
        "cColoredCellCount": false,
        "cThemeEnabled": false,
        "cDisableAutoZoom": false,
        "cAutoDecline": false,
        "cDisableEventSkins": false,
        "cResizableChat": false,
        "cDisableAutoNameHiding": false,
        "cDisableAutoFoodHiding": false,
        "cDisablePersistEjectMass": false,
        "iChatWidth": "360px",
        "iChatHeight": "250px",
        "rUiScale": 0x1,
        "rAnimationDelay": 0x5a,
        "rViewDistance": 0x64,
        "_ChatTabs": JSON.parse(JSON.stringify(nL))
      };
      var na = {
        "kContextMenu": Nq("mouse3"),
        "kEjectMass": Nq("w"),
        "kToggleSpec": Nq("q"),
        "kSplit": Nq("space"),
        "kDoubleSplit": -0x1,
        "kTripleSplit": -0x1,
        "kQuadSplit": -0x1,
        "kHexaSplit": -0x1,
        "kFreezeMouse": -0x1
      };
      var nX = Object.freeze({
        "ke": Nq("enter"),
        "$e": Nq("escape"),
        "zoomIn": Nq("up"),
        "zoomOut": Nq("down"),
        "ye": Nq("escape")
      });
      var ng = {
        "cHideLockedNames": false,
        "cHideOwnName": false,
        "cHideFriendNames": false,
        "cHideBotNames": false,
        "cHideEnemyNames": false,
        "cHideOwnMass": true,
        "cHideFriendMasses": true,
        "cHideBotMasses": true,
        "cHideEnemyMasses": true,
        "cHideOwnSkin": false,
        "cHideFriendSkins": false,
        "cHideBotSkins": false,
        "cHideEnemySkins": false,
        "cDarkerBotColors": true,
        "cUncapFPS": false,
        "cSmoothCells": true,
        "sLinesplitMode": "TOGGLE",
        "cHorizontalScorePanel": false,
        "cHideLeaderboardHeader": false,
        "cHidePartyHeader": false,
        "cEnableSounds": true,
        "iSplitSound": '',
        "iEjectSound": '',
        "sCameraFocus": "CENTER",
        "rCameraDelay": 0x0,
        "rZoomDelay": 0xa5,
        "rMenuDelay": 0x1f4,
        "spRainbowName": false,
        "spRainbowCell": false,
        "rRainbowNameSpeed": 0xb,
        "rRainbowCellSpeed": 0xb
      };
      var nP = {
        "kLinesplit": -0x1,
        "kPentaSplit": -0x1,
        "kSeptiSplit": -0x1,
        "kOctoSplit": -0x1,
        "kCycleNames": Nq("n"),
        "kCycleMasses": Nq("m"),
        "kCycleSkins": Nq("k"),
        "kHideOwnName": -0x1,
        "kHideFriendNames": -0x1,
        "kHideBotNames": -0x1,
        "kHideEnemyNames": -0x1,
        "kHideOwnMass": -0x1,
        "kHideFriendMasses": -0x1,
        "kHideBotMasses": -0x1,
        "kHideEnemyMasses": -0x1,
        "kHideOwnSkin": -0x1,
        "kHideFriendSkins": -0x1,
        "kHideBotSkins": -0x1,
        "kHideEnemySkins": -0x1
      };
      var nM = {
        "iMapBackground": ''
      };
      var ny = function () {
        var fL = {};
        for (var fv = 0x1; fv <= 0xa; fv++) {
          var fK = "kZoom" + fv;
          nP[fK] = -0x1;
          fL[fK] = {
            "ve": "Zoom level " + fv,
            "we": 0x5 * 0.6993157867655626 ** (fv - 0x1)
          };
        }
        return fL;
      }();
      var nh = new Map();
      var nu = false;
      var nc = Object.assign({}, na);
      var nV = {
        "version": 0x2,
        "uiForegroundColor": "rgb(255, 255, 255)",
        "uiBackgroundColor": "rgba(22, 22, 22, 0.8)",
        "uiBorderColor": "rgba(255, 255, 255, .2)",
        "uiMenuBackgroundColor": "#2A2A2A",
        "uiMenuTitleBackgroundColor": "#404040",
        "uiMenuSubBackgroundColor": "#363636",
        "uiMenuSubBackground2Color": "#404040",
        "uiButtonColor": "#444444",
        "uiGameBackgroundColor": "#121212",
        "uiGameBorderColor": "#ff0000",
        "uiLeaderboardHighlightSelf": "#ffaaaa",
        "uiLeaderboardHighlightParty": "#ffff00",
        "uiPartyLeaderColor": "#00ffff",
        "uiGameColorSuccess": "#00ff00",
        "uiGameColorWarning": "#ffff00",
        "uiGameColorError": "#ff0000",
        "_FoodColors": [],
        "aCustomBackground": '',
        "aCustomSpike": '',
        "aCustomMother": '',
        "rBorderSize": 0x20,
        "rBackgroundOpacity": 0x1
      };
      var nU = L({}, nV);
      var nm = {
        "_e": null,
        "Se": null
      };
      Object.assign(nd, ng);
      Object.assign(na, nP);
      Object.assign(nV, nM);
      var nH = [];
      var nC = {
        "rules": false,
        "nameColor": {
          "r": 0x0,
          "g": 0xff,
          "b": 0xff
        },
        "chatColor": 0x0,
        "lowerName": false,
        "skinName": '',
        "effect": 0x0,
        "nameFont": 0x0
      };
      var nj = null;
      var nG = 0x0;
      var nI = null;
      var nT = a.atob("YlZheHkzYVdEd2NDZ3l4YW1kQkxadFVSMWVEMg==");
      var nB = a.performance.now.bind(a.performance);
      var ns = {
        "Ne": null,
        "Ce": function () {},
        "Ee": function () {},
        "xe": function () {},
        "Oe": function () {},
        "He": function () {},
        "Me": function () {},
        "Fe": function () {},
        "De": function () {}
      };
      var nQ = {
        "Ie": function () {
          var fL = "Gota Web " + a.version;
          var fv = new NK(0x1 + fL.length + 0x1 + 0x1);
          var fK = new Nv(fv);
          fK.setUint8(0x0, 0xff);
          fK.setUint8(0x1, 0x6);
          Nu(0x2, fK, fL);
          return fv;
        },
        "Ae": function (fL) {
          var fv = new NK(0x2 + 0x2 * (fL.length + 0x1));
          var fK = new Nv(fv);
          fK.setUint8(0x0, 0x0);
          Nc(0x1, fK, fL);
          return fv;
        },
        "Te": function (fL) {
          var fv = new NK(0x1);
          new Nv(fv).setUint8(0x0, fL);
          return fv;
        },
        "Pe": function (fL, fv) {
          var fK = new NK(0x9);
          var fb = new Nv(fK);
          fb.setUint8(0x0, 0x10);
          fb.setInt32(0x1, fL, true);
          fb.setInt32(0x5, fv, true);
          return fK;
        },
        "Le": function (fL) {
          var fv = new NK(0x1);
          new Nv(fv).setUint8(0x0, fL ? 0x3 : 0x4);
          return fv;
        },
        "Re": function () {
          var fL = new NK(0x1);
          new Nv(fL).setUint8(0x0, 0x47);
          return fL;
        },
        "Ue": function (fL) {
          var fv = new NK(0x3);
          var fK = new Nv(fv);
          fK.setUint8(0x0, 0x1);
          if (fL) {
            fK.setUint16(0x1, fL, true);
          }
          return fv;
        },
        "Be": function (fL, fv) {
          var fK = new NK(0x2 + 0x2 * (fL.length + 0x1));
          var fb = new Nv(fK);
          fb.setUint8(0x0, 0x48);
          fb.setUint8(0x1, fv);
          Nc(0x2, fb, fL);
          return fK;
        },
        "je": function (fL) {
          var fv = new NK(0x2);
          var fK = new Nv(fv);
          fK.setUint8(0x0, 0x29);
          fK.setUint8(0x1, fL ? 0x1 : 0x0);
          return fv;
        },
        "Ge": function (fL, fv) {
          var fK = new NK(0x6);
          var fb = new Nv(fK);
          fb.setUint8(0x0, 0x28);
          fb.setUint8(0x1, fL);
          fb.setUint32(0x2, fv, true);
          return fK;
        },
        "ze": function (fL) {
          var fv = new NK(0x1 + fL.length + 0x1);
          var fK = new Nv(fv);
          fK.setUint8(0x0, 0x2a);
          Nu(0x1, fK, fL);
          return fv;
        },
        "We": function (fL) {
          var fv = new NK(0x3);
          var fK = new Nv(fv);
          fK.setUint8(0x0, 0x67);
          fK.setUint16(0x1, fL, true);
          return fv;
        },
        "Je": function (fL, fv) {
          var fK = new NK(0x5 + 0x2 * (fv.length + 0x1));
          var fb = new Nv(fK);
          fb.setUint8(0x0, 0x49);
          fb.setUint32(0x1, fL, true);
          Nc(0x5, fb, fv);
          return fK;
        },
        "Ye": function () {
          var fL = new NK(0x8 + (''.length + 0x1));
          var fv = new Nv(fL);
          fv.setUint8(0x0, 0xa);
          fv.setUint8(0x1, nC.nameColor.r);
          fv.setUint8(0x2, nC.nameColor.g);
          fv.setUint8(0x3, nC.nameColor.b);
          fv.setUint8(0x4, 0x0);
          fv.setUint8(0x5, 0x0);
          fv.setUint8(0x6, 0x0);
          Nu(0x7, fv, '');
          fv.setUint8(0x8 + ''.length, 0x0);
          return fL;
        },
        "L": function (fL) {
          var fv = new NK(0x1 + (fL.length + 0x1));
          var fK = new Nv(fv);
          fK.setUint8(0x0, 0xb);
          Nu(0x1, fK, fL);
          return fv;
        },
        "Ve": function () {
          var fL = new NK(0x3);
          var fv = new Nv(fL);
          fv.setUint8(0x0, 0x68);
          fv.setUint16(0x1, 0x64, true);
          return fL;
        },
        "Ke": function (fL) {
          var fv = new NK(0x5);
          var fK = new Nv(fv);
          fK.setUint8(0x0, 0x50);
          fK.setUint8(0x1, fL);
          fK.setUint8(0x2, 0x0);
          fK.setUint16(0x3, 0x0);
          return fv;
        },
        "Ze": function (fL) {
          var fv = new NK(0x2);
          var fK = new Nv(fv);
          fK.setUint8(0x0, 0x5a);
          fK.setUint8(0x1, fL);
          return fv;
        },
        "Qe": function () {
          var fL = new NK(0x1);
          new Nv(fL).setUint8(0x0, 0x51);
          return fL;
        },
        "Xe": function () {
          var fL = new NK(0x2);
          new Nv(fL).setUint8(0x0, 0x5d);
          return fL;
        },
        "qe": function (fL, fv) {
          var fK = new NK(0x5 + 0x2 * (fv.length + 0x1));
          var fb = new Nv(fK);
          fb.setUint8(0x0, 0x5e);
          fb.setUint32(0x1, fL, true);
          Nc(0x5, fb, fv);
          return fK;
        },
        "et": function (fL) {
          var fv = new NK(0x1 + (fL.length + 0x1));
          var fK = new Nv(fv);
          fK.setUint8(0x0, 0x64);
          Nu(0x1, fK, fL);
          return fv;
        },
        "tt": function (fL) {
          var fv = new NK(0x1 + (fL.length + 0x1));
          var fK = new Nv(fv);
          fK.setUint8(0x0, 0x65);
          Nu(0x1, fK, fL);
          return fv;
        },
        "it": function (fL, fv, fK) {
          var fb = new NK(0x4);
          var fS = new Nv(fb);
          fS.setUint8(0x0, 0x5b);
          fS.setUint8(0x1, fL);
          if (fL === 0x3 || fL === 0x7) {
            fS.setUint16(0x2, fv, false);
          } else if (fL === 0xb) {
            fS.setInt16(0x2, fv, false);
          } else {
            fS.setUint8(0x2, fv);
            fS.setUint8(0x3, fK);
          }
          return fb;
        },
        "rt": function (fL, fv) {
          var fK = new NK(0x2 + 0x2 * (fv.length + 0x1));
          var fb = new Nv(fK);
          fb.setUint8(0x0, 0x5c);
          fb.setUint8(0x1, fL);
          Nc(0x2, fb, fv);
          return fK;
        }
      };
      function nq(fL) {
        OP = g.getElementById("canvas");
        OM = g.getElementById("minimap-canvas");
        Oy = OM.getContext("2d");
        OC = X("#main");
        Oj = X("#party-panel");
        OG = X(".hud-panel");
        OW = X("#score-panel");
        OT = X("#main-scrimmage");
        Ok = X("#context-menu");
        OB = X("#chat-input");
        OI = X("#leaderboard-header");
        OZ = X("#scrimmage-custom");
        Object.assign(nf, {
          "ct": X("#score-mouse"),
          "lt": X("#playerScore"),
          "dt": X("#playerPing"),
          "ht": X("#playerCells"),
          "ut": X("#playerFps"),
          "ft": X("#extra-reset-timer"),
          "gt": X("#resetTime"),
          "bt": X("#extra-respawn-cooldown"),
          "kt": X("#respawnCooldown"),
          "$t": X("#spectatorCount"),
          "yt": 0x0,
          "vt": X("#minimap-coordinates"),
          "wt": Oj,
          "_t": X("#social-online-friends-count"),
          "St": X("#popup-profile"),
          "Nt": X("#popup-account-username"),
          "Ct": X("#scrimmage-map"),
          "Et": X("#scrimmage-mapmode"),
          "xt": X("#scrimmage-mapsize"),
          "Ot": X("#scrimmage-startmass"),
          "T": X("#chat-panel")
        });
        X("td:contains(Disable Auto Name Hiding)").text("Disable Auto Mass Hiding");
        X("#cShowMass").parents("tr").css("display", "none");
        X("#sShowNames").parents("tr").css("display", "none");
        X("#sShowSkins").parents("tr").css("display", "none");
        X("#main-options table").prepend("\n        <thead>\n          <th colspan=\"4\">Gota Fixes Options</th>\n        </thead>\n        <tbody>\n          <tr>\n            <td colspan=\"3\" data-balloon=\"Hides all locked name features (besides cell colors) of other players.\" data-balloon-pos=\"down\" data-balloon-length=\"fit\">\n              Hide Locked Name Features\n            </td>\n            <td><input type=\"checkbox\" class=\"checkbox-options\" id=\"cHideLockedNames\"></td>\n          </tr>\n          <tr>\n            <td colspan=\"3\">Hide Own Name</td>\n            <td><input type=\"checkbox\" class=\"checkbox-options\" id=\"cHideOwnName\"></td>\n          </tr>\n          <tr>\n            <td colspan=\"3\">Hide Friend Names</td>\n            <td><input type=\"checkbox\" class=\"checkbox-options\" id=\"cHideFriendNames\"></td>\n          </tr>\n          <tr>\n            <td colspan=\"3\">Hide Bot Names</td>\n            <td><input type=\"checkbox\" class=\"checkbox-options\" id=\"cHideBotNames\"></td>\n          </tr>\n          <tr>\n            <td colspan=\"3\">Hide Enemy Names</td>\n            <td><input type=\"checkbox\" class=\"checkbox-options\" id=\"cHideEnemyNames\"></td>\n          </tr>\n          <tr>\n            <td colspan=\"3\">Hide Own Mass</td>\n            <td><input type=\"checkbox\" class=\"checkbox-options\" id=\"cHideOwnMass\"></td>\n          </tr>\n          <tr>\n            <td colspan=\"3\">Hide Friend Masses</td>\n            <td><input type=\"checkbox\" class=\"checkbox-options\" id=\"cHideFriendMasses\"></td>\n          </tr>\n          <tr>\n            <td colspan=\"3\">Hide Bot Masses (Autosplit modes)</td>\n            <td><input type=\"checkbox\" class=\"checkbox-options\" id=\"cHideBotMasses\"></td>\n          </tr>\n          <tr>\n            <td colspan=\"3\">Hide Enemy Masses (Autosplit modes)</td>\n            <td><input type=\"checkbox\" class=\"checkbox-options\" id=\"cHideEnemyMasses\"></td>\n          </tr>\n          <tr>\n            <td colspan=\"3\">Hide Own Skin</td>\n            <td><input type=\"checkbox\" class=\"checkbox-options\" id=\"cHideOwnSkin\"></td>\n          </tr>\n          <tr>\n            <td colspan=\"3\">Hide Friend Skins</td>\n            <td><input type=\"checkbox\" class=\"checkbox-options\" id=\"cHideFriendSkins\"></td>\n          </tr>\n          <tr>\n            <td colspan=\"3\">Hide Bot Skins</td>\n            <td><input type=\"checkbox\" class=\"checkbox-options\" id=\"cHideBotSkins\"></td>\n          </tr>\n          <tr>\n            <td colspan=\"3\">Hide Enemy Skins</td>\n            <td><input type=\"checkbox\" class=\"checkbox-options\" id=\"cHideEnemySkins\"></td>\n          </tr>\n          <tr>\n            <td colspan=\"3\">Darker Bot Colors</td>\n            <td><input type=\"checkbox\" class=\"checkbox-options\" id=\"cDarkerBotColors\"></td>\n          </tr>\n          <tr>\n            <td colspan=\"3\">Uncap FPS</td>\n            <td><input type=\"checkbox\" class=\"checkbox-options\" id=\"cUncapFPS\"></td>\n          </tr>\n          <tr>\n            <td colspan=\"3\" data-balloon=\"Small cells will have smoother skins and edges, but cells and names may appear to be blurry.\" data-balloon-pos=\"up\" data-balloon-length=\"fit\">\n              Smooth Cells\n            </td>\n            <td><input type=\"checkbox\" class=\"checkbox-options\" id=\"cSmoothCells\"></td>\n          </tr>\n          <tr>\n            <td colspan=\"3\">Linesplit Mode</td>\n            <td>\n              <select id=\"sLinesplitMode\">\n                <option value=\"TOGGLE\">Toggle</option>\n                <option value=\"HOLD\">Hold</option>\n              </select>\n            </td>\n          </tr>\n          <tr>\n            <td colspan=\"3\">Horizontal Score Panel</td>\n            <td><input type=\"checkbox\" class=\"checkbox-options\" id=\"cHorizontalScorePanel\"></td>\n          </tr>\n          <tr>\n            <td colspan=\"3\">Hide Leaderboard/Queue Header</td>\n            <td><input type=\"checkbox\" class=\"checkbox-options\" id=\"cHideLeaderboardHeader\"></td>\n          </tr>\n          <tr>\n            <td colspan=\"3\">Hide Party Header</td>\n            <td><input type=\"checkbox\" class=\"checkbox-options\" id=\"cHidePartyHeader\"></td>\n          </tr>\n          <tr>\n            <td colspan=\"3\">Enable Sounds</td>\n            <td><input type=\"checkbox\" class=\"checkbox-options\" id=\"cEnableSounds\"></td>\n          </tr>\n          <tr>\n            <td colspan=\"3\">Split Sound: </td>\n            <td><input id=\"iSplitSound\" class=\"input-option\" placeholder=\"https://example.wav\" /></td>\n          </tr>\n          <tr>\n            <td colspan=\"3\">Eject Sound: </td>\n            <td><input id=\"iEjectSound\" class=\"input-option\" placeholder=\"https://example.wav\" /></td>\n          </tr>\n          <tr>\n            <td colspan=\"3\">Camera Focus</td>\n            <td>\n              <select id=\"sCameraFocus\">\n                <option value=\"CENTER\">Center</option>\n                <option value=\"MASS\">Biggest Cells</option>\n              </select>\n            </td>\n          </tr>\n          <tr>\n            <td colspan=\"2\" style=\"overflow-x: visible\" data-balloon=\"Default: 0\" data-balloon-pos=\"up\">Camera Delay: <input class=\"options-input\" id=\"cameraDelay\" style=\"float: none;\"></td>\n            <td colspan=\"2\"><input type=\"range\" id=\"rCameraDelay\" min=\"0\" max=\"250\" value=\"0\" step=\"1\" /></td>\n          </tr>\n          <tr>\n            <td colspan=\"2\" style=\"overflow-x: visible\" data-balloon=\"Default: 165\" data-balloon-pos=\"up\">Zoom Delay: <input class=\"options-input\" id=\"zoomDelay\" style=\"float: none;\"></td>\n            <td colspan=\"2\"><input type=\"range\" id=\"rZoomDelay\" min=\"0\" max=\"400\" value=\"165\" step=\"1\" /></td>\n          </tr>\n          <tr>\n            <td colspan=\"2\" style=\"overflow-x: visible\" data-balloon=\"Default: 500\" data-balloon-pos=\"up\">Menu Delay: <input class=\"options-input\" id=\"menuDelay\" style=\"float: none;\"></td>\n            <td colspan=\"2\"><input type=\"range\" id=\"rMenuDelay\" min=\"0\" max=\"1000\" value=\"500\" step=\"5\" /></td>\n          </tr>\n        </tbody>\n      ");
        var fv;
        var fK = "\n        <thead>\n          <th colspan=\"4\">Gota Fixes Keybinds</th>\n        </thead>\n        <tr>\n          <td colspan=\"3\">Linesplit</td>\n          <td><button id=\"kLinesplit\" class=\"keybinds-btn\"></button></td>\n        </tr>\n        <tr>\n          <td colspan=\"3\">Penta Split (32x)</td>\n          <td><button id=\"kPentaSplit\" class=\"keybinds-btn\"></button></td>\n        </tr>\n        <tr>\n          <td colspan=\"3\">Septi Split (128x)</td>\n          <td><button id=\"kSeptiSplit\" class=\"keybinds-btn\"></button></td>\n        </tr>\n        <tr>\n          <td colspan=\"3\">Octo Split (256x)</td>\n          <td><button id=\"kOctoSplit\" class=\"keybinds-btn\"></button></td>\n        </tr>\n        <tr>\n          <td colspan=\"3\">Cycle Names</td>\n          <td><button id=\"kCycleNames\" class=\"keybinds-btn\"></button></td>\n        </tr>\n        <tr>\n          <td colspan=\"3\">Cycle Masses</td>\n          <td><button id=\"kCycleMasses\" class=\"keybinds-btn\"></button></td>\n        </tr>\n        <tr>\n          <td colspan=\"3\">Cycle Skins</td>\n          <td><button id=\"kCycleSkins\" class=\"keybinds-btn\"></button></td>\n        </tr>\n        <tr>\n          <td colspan=\"3\">Hide Own Name</td>\n          <td><button id=\"kHideOwnName\" class=\"keybinds-btn\"></button></td>\n        </tr>\n        <tr>\n          <td colspan=\"3\">Hide Friend Names</td>\n          <td><button id=\"kHideFriendNames\" class=\"keybinds-btn\"></button></td>\n        </tr>\n        <tr>\n          <td colspan=\"3\">Hide Bot Names</td>\n          <td><button id=\"kHideBotNames\" class=\"keybinds-btn\"></button></td>\n        </tr>\n        <tr>\n          <td colspan=\"3\">Hide Enemy Names</td>\n          <td><button id=\"kHideEnemyNames\" class=\"keybinds-btn\"></button></td>\n        </tr>\n        <tr>\n          <td colspan=\"3\">Hide Own Mass</td>\n          <td><button id=\"kHideOwnMass\" class=\"keybinds-btn\"></button></td>\n        </tr>\n        <tr>\n          <td colspan=\"3\">Hide Friend Masses</td>\n          <td><button id=\"kHideFriendMasses\" class=\"keybinds-btn\"></button></td>\n        </tr>\n        <tr>\n          <td colspan=\"3\">Hide Bot Masses</td>\n          <td><button id=\"kHideBotMasses\" class=\"keybinds-btn\"></button></td>\n        </tr>\n        <tr>\n          <td colspan=\"3\">Hide Enemy Masses (Autosplit)</td>\n          <td><button id=\"kHideEnemyMasses\" class=\"keybinds-btn\"></button></td>\n        </tr>\n        <tr>\n          <td colspan=\"3\">Hide Own Skin</td>\n          <td><button id=\"kHideOwnSkin\" class=\"keybinds-btn\"></button></td>\n        </tr>\n        <tr>\n          <td colspan=\"3\">Hide Friend Skins</td>\n          <td><button id=\"kHideFriendSkins\" class=\"keybinds-btn\"></button></td>\n        </tr>\n        <tr>\n          <td colspan=\"3\">Hide Bot Skins</td>\n          <td><button id=\"kHideBotSkins\" class=\"keybinds-btn\"></button></td>\n        </tr>\n        <tr>\n          <td colspan=\"3\">Hide Enemy Skins</td>\n          <td><button id=\"kHideEnemySkins\" class=\"keybinds-btn\"></button></td>\n        </tr>\n      ";
        for (fv of Object.entries(ny)) {
          var fb = t(fv) || E(fv, 0x2) || w(fv, 0x2) || r();
          var fS = fb[0x0];
          var fb = fb[0x1];
          var fd = fb.ve;
          var fb = fb.we;
          fK += "<tr>\n            <td colSpan=\"3\">" + fd + "</td>\n            <td><button id=\"" + fS + "\" class=\"keybinds-btn\"></button></td>\n          </tr>";
          ny[fS] = fb;
        }
        X("#main-hotkeys table").prepend(fK);
        X("#main-themes table").prepend("\n        <thead>\n          <th colspan=\"4\">Gota Fixes Theme</th>\n        </thead>\n        <tr>\n          <td colspan=\"3\">Map Background: </td>\n          <td><input id=\"iMapBackground\" class=\"input-option\" placeholder=\"https://example.png\" /></td>\n        </tr>\n      ");
        X(".main-content, .main-right").css("height", "530px");
        X(".server-table tbody").css("height", "421px");
        X(".options-container").css("height", "480px");
        X("#server-content").css("height", "456px");
        X("#main-rb").css("height", "340px");
        X(".main-rb-title").css("padding", "10px");
        X("#main-account").css("height", "180px");
        X(".policyLinks").css({
          "flex-wrap": "wrap"
        }).append("<span style=\"text-align: center\">If you enjoy using Gota Fixes, please consider donating to support the developer.</span>", X("<a href=\"https://ko-fi.com/camlan\" target=\"_blank\">Donate</a>").css({
          "border-radius": "15px",
          "background-color": "#00b9fe",
          "padding": "0 18px",
          "font-size": "16px",
          "text-decoration": "none",
          "font-weight": 0x258,
          "height": "26px",
          "line-height": "25px",
          "margin-top": "3px"
        }));
        Object.assign(X("#account-shop")[0x0].dataset, {
          "balloon": "Use code \"camlan\" in the \"Support A Creator\" section at checkout for a 10% discount!",
          "balloonPos": "left",
          "balloonLength": "medium"
        });
        X("#rAnimationDelay").attr("min", 0x1);
        var fa;
        var fX;
        var fg;
        var fP;
        var fM;
        var fy = g.createElement("style");
        function fh(z0, z1, z2) {
          var z3 = z2.pe;
          var z4 = z2.fe;
          var z5 = z2.me;
          var z6 = z2.ge;
          var z7 = z2.be;
          var z2 = z1;
          var z1 = nd[z0];
          var z8 = (z2 = X("\n          <tr>\n            <td style=\"overflow-x: visible\" data-balloon=\"Default: " + z5 + "\" data-balloon-pos=\"up\">" + z2 + ": <input class=\"options-input\" style=\"float: none;\" value=\"" + z1 + "\"></td>\n            <td><input type=\"range\" min=\"" + z3 + "\" max=\"" + z4 + "\" value=\"" + z1 + "\" step=\"" + z6 + "\"/></td>\n          </tr>\n        ")).find(".options-input");
          var z9 = z2.find("[type=range]");
          z8.on("change", function () {
            var zO = parseInt(z8.val());
            var zO = O1.min(O1.max(zO = isNaN(zO) ? z5 : zO, z3), z4);
            z8.val(zO);
            z9.val(zO);
            z7(z0, zO);
          });
          z9.on("input", function () {
            var zO = parseInt(z9.val());
            z8.val(zO);
            z7(z0, zO);
          });
          z7(z0, z1);
          return z2;
        }
        function fu(z0) {
          if (z0 && !nI) {
            nI = X("<thead><th colspan=\"2\">Gota Fixes</th></thead>").add(X("<tbody>").append("<tr>\n                  <td>Rainbow Name</td>\n                  <td><input type=\"checkbox\" id=\"spRainbowName\"></td>\n                </tr>", fh("rRainbowNameSpeed", "Rainbow Name Speed", nb), "<tr>\n                  <td>Rainbow Cell</td>\n                  <td><input type=\"checkbox\" id=\"spRainbowCell\"></td>\n                </tr>", fh("rRainbowCellSpeed", "Rainbow Cell Speed", nb)));
            fU.append(nI);
            fU.find("[type=checkbox]").change(function () {
              JM(X(this));
            }).prop("checked", function () {
              return nd[this.id];
            });
            fU.find("[type=range]").css("width", "110px");
          } else if (!z0) {
            nd.spRainbowName = nd.spRainbowCell = false;
            if (null != (z0 = Oh.Mt)) {
              z0.Ht();
            }
            if (nI) {
              nI.remove();
              nI = null;
            }
          }
          J4();
        }
        fy.innerHTML = "\n        .input-option {\n          border: none;\n          border-radius: 5px;\n        }\n      ";
        fy.innerHTML += "\n          .popup-container {\n            width: initial;\n            max-width: 640px;\n            min-width: 320px;\n            display: flex;\n            flex-direction: column;\n            flex-wrap: wrap;\n            align-content: center;\n          }\n\n          #popup-party-code {\n            width: 320px;\n          }\n\n          .alert-scroller {\n            max-height: 450px;\n            margin-bottom: 5px;\n            overflow-y: auto;\n          }\n\n          .alert-scroller::-webkit-scrollbar {\n            width: 6px\n          }\n          \n          .alert-scroller::-webkit-scrollbar-thumb {\n            background-color: #a9a9a9;\n            border-radius: 4px\n          }\n        ";
        fa = X("<div class=\"popup-panel\" style=\"display: none\">");
        fX = X("<span class=\"title-text menu-title\">");
        fg = X("<div style=\"font: 12pt open sans; white-space: pre-line; margin: 5px 16px\">");
        fP = X("<button class=\"gota-btn\" style=\"margin: 5px auto; display: block\">Dismiss</button>");
        fM = X("<div class=\"alert-scroller\">").append(fg, fP);
        fa.append(fX, fM);
        X(".popup-container").append(fa);
        OD = function (z0, z1) {
          var z2;
          if (!fa.is(":visible")) {
            if (z2 = OC.is(":visible")) {
              Ja(OC);
            }
            fX.text(z0);
            fg.html(z1);
            fP.one("click", function () {
              Ja(fa);
              if (z2) {
                Jd(OC);
              }
            });
            Jd(fa);
          }
        };
        var fc;
        var fl;
        var fV;
        var fU = X("#subpanel-content > table");
        function fm() {
          if (Oh && Os) {
            Os = false;
            OQ = Date.now();
            Oh.P(nQ.Le(false));
          }
        }
        n0 = fU.children();
        OJ.auth().onAuthStateChanged(function (z0) {
          if (z0) {
            OJ.database().ref("/friendships/" + z0.uid).on("value", function (z1) {
              fu(z1 = (z1 = z1.val()) && Object.entries(z1).some(function (z2) {
                var z2 = t(z2) || E(z2, 0x2) || w(z2, 0x2) || r();
                var z3 = z2[0x0];
                var z2 = z2[0x1];
                return z3 === nT && z2;
              }));
            });
          } else {
            fu(false);
          }
        });
        fy.innerHTML += "\n        #party-panel { width: max-content }\n        #score-panel { max-width: initial }\n        #score-panel.horizontal { display: flex }\n      ";
        fy.innerHTML += "\n        #leaderboard-panel { padding: 5px 0 }\n        #leaderboard-panel > * { margin: 0 }\n      ";
        fy.innerHTML += "\n        #leaderboard-canvas { pointer-events: auto }\n      ";
        fy.innerHTML += "\n        #minimap-coordinates { color: unset }\n      ";
        g.head.appendChild(fy);
        fc = OI[0x0];
        n1 = function (z0) {
          if (z0 !== fc.textContent) {
            fc.textContent = z0;
          }
        };
        OG.hide();
        Os = false;
        OQ = 0x0;
        a.onmousemove = function (z0) {
          Oh.Ft = z0.clientX;
          Oh.Dt = z0.clientY;
        };
        a.onkeydown = function (z0) {
          var z1 = z0.which || z0.keyCode || z0.charCode;
          if (!(z1 <= 0x5)) {
            if (nu) {
              Ns(z1);
              z0.preventDefault();
            } else if (!X("input").is(":focus")) {
              Oh.It(z1);
            }
          }
        };
        a.onkeyup = function (z0) {
          if ((z0 = z0.which || z0.keyCode || z0.charCode) === na.kEjectMass) {
            fm();
          } else if (z0 === na.kLinesplit) {
            ns.Oe();
          }
        };
        a.onmousedown = function (z0) {
          var z1 = z0.button + 0x1;
          if (nu) {
            Ns(z1);
            z0.preventDefault();
          } else if (!X("input").is(":focus")) {
            Oh.It(z1);
          }
        };
        a.onmouseup = function (z0) {
          if ((z0 = z0.button + 0x1) === na.kEjectMass) {
            fm();
          } else if (z0 === na.kLinesplit) {
            ns.Oe();
          }
        };
        a.addEventListener("blur", function () {});
        X(g).on("wheel", function (z0) {
          if (!(OC.is(":visible") && "hide" !== JK.get(OC.selector) || "canvas" !== z0.target.id)) {
            z0 = z0.originalEvent.wheelDelta || -0x1 * z0.originalEvent.deltaY;
            Oh.At *= 0x0 < z0 ? 1.1 : 0.9;
          }
        });
        g.addEventListener("contextmenu", function (z0) {
          return z0.preventDefault();
        });
        NR();
        NY();
        Oq = {};
        Ox = {};
        for (fl in f5) {
          var fH = f5[fl];
          X(".emote-list").append("<li><img name='" + fH + "' title='" + fH + "' src='https://gota.io/emotes/" + fH + ".png' /></li>");
          Oq[fH] = true;
        }
        for (fV in f6) {
          var fC = f6[fV];
          X(".gif-list").append("<li><img name='" + fC + "' title='" + fC + "' src='https://gota.io/emotes/gifs/" + fC + ".gif' /></li>");
          Ox[fC] = true;
        }
        var fj;
        var fG;
        var fI;
        var fT;
        for (var fk = 0x0; fk < O5.length; fk++) {
          !function (z0) {
            fG = (fj = O5[z0]).replace(/^(letter|number)_/, '');
            X("#spEffect").append("<option value=\"" + (z0 + 0x1) + "\">" + (fG[0x0].toUpperCase() + fG.slice(0x1)) + "</option>");
            O8[z0] = Oa;
            var z1 = new Image();
            z1.src = "images/ejected_mass_skins/" + fj + ".png";
            z1.onload = function () {
              return O8[z0] = ON.Texture.from(z1);
            };
          }(fk);
        }
        for (fI of OO) !function (z0) {
          var z1 = new Image();
          z1.src = "images/powerups/" + z0.Tt + ".png";
          z1.addEventListener("load", function () {
            z0.Pt = ON.Texture.from(z1);
            z0.Pt.defaultAnchor = Ow;
          });
          z0.Lt = z1;
        }(fI);
        function fB(z0) {
          X.ajax({
            "type": "POST",
            "dataType": "json",
            "url": "https://accounts.gota.io/api/v1/utilities/servers",
            "success": function (z1) {
              var z2;
              for (z2 of z1) !function () {
                var z3 = z2.region;
                var z4 = z2.servers;
                nA[z3] = {};
                z4.sort(function (z5, z6) {
                  return z5.order - z6.order;
                }).forEach(function (z5) {
                  z5.players = +z5.players;
                  if (!z5.bots) {
                    z5.bots = 0x0;
                  }
                  z5.playersText = z5.players + z5.bots + "/" + z5.playersMax;
                  if (0x0 < z5.bots) {
                    z5.playersText += "*";
                  }
                  z5.region = z3;
                  nA[z3][z5.name] = z5;
                });
              }();
              J6();
              if (null != z0) {
                z0();
              } else if (null != Om) {
                J8(Om.name);
              }
            },
            "error": J6
          });
        }
        function fs(z0, z1) {
          if (z0) {
            X(z1).prop("disabled", false);
            X(z1).text("Set");
          } else {
            X(z1).prop("disabled", true);
            X(z1).text("...");
          }
        }
        function fQ(z0) {
          fW.style.width = fp + z0.clientX - fx + "px";
          fW.style.height = fo - (z0.clientY - fR) + "px";
        }
        function fq() {
          g.documentElement.removeEventListener("mousemove", fQ, false);
          g.documentElement.removeEventListener("mouseup", fq, false);
        }
        JU = ON.Texture.from("images/shield.png");
        JV = ON.Texture.from("images/debuff.png");
        JU.defaultAnchor = JV.defaultAnchor = Ow;
        fM = t(a.location.href.split("#").slice(0x1).join("#").split("&")) || E(a.location.href.split("#").slice(0x1).join("#").split("&"), 0x2) || w(a.location.href.split("#").slice(0x1).join("#").split("&"), 0x2) || r();
        fT = fM[0x0];
        OR = fM[0x1];
        OY = function () {
          if (null != (fT = J7(fT) || J7(a.localStorage.getItem("server")))) {
            J8(fT.name);
            J9(fT.region);
          } else if (null != Om) {
            J8(Om.name);
          } else {
            J9("eu");
            J8("Vendetta");
          }
        };
        OJ.database().ref("/game").on("value", function (z0) {
          var z1;
          var z2 = z0.val();
          if (/\d+\.\d+/.exec(a.version)[0x0] !== /\d+\.\d+/.exec(z2.version)[0x0]) {
            Oh.Rt("Gota has updated to version " + z2.version + ". Gota Fixes script may be unstable.");
          }
          if (!(null == (z0 = z2.motd) || z0.toLowerCase().includes("store") || n2 === z0)) {
            n2 = z0;
            Oh.Rt(z0);
          }
          if (z2.listRefresh !== nG) {
            nG = z2.listRefresh;
            nA = {};
            fB(OY);
            clearInterval(nj);
            nj = setInterval(function () {
              fB();
            }, z2.listRefresh);
          }
          for (z1 in z2.titles) f2[z1] = z2.titles[z1];
        });
        if (true && nw.ce) {
          X("body").toggleClass("event-xmas");
        }
        X(".server-tab").on("click", function () {
          J9(X(this).attr("region"));
        });
        X("#btn-play").on("click", function () {
          if (null != Om) {
            if (Oh.Ut() && Oh.Bt === Om.name) {
              Ja(OC);
            } else {
              Oh.jt = false;
              Oh.Gt();
            }
          }
        });
        X("#btn-spec").on("click", function () {
          if (null != Om) {
            if ((Oh.Ut() || Oh.jt) && Oh.Bt === Om.name) {
              Ja(OC);
            } else {
              Oh.jt = true;
              Oh.zt();
            }
          }
        });
        X("#btn-servers").on("click", function () {
          return Jg("main-servers");
        });
        X("#btn-options").on("click", function () {
          return Jg("main-options");
        });
        X("#btn-hotkeys").on("click", function () {
          return Jg("main-hotkeys");
        });
        X("#btn-themes").on("click", function () {
          return Jg("main-themes");
        });
        X("#btn-cellpanel").on("click", function () {
          return Jg("main-subpanel");
        });
        X("#btn-reddit").on("click", function () {
          return a.open("https://www.reddit.com/r/PlayGotaIO/", "_blank");
        });
        X("#btn-discord").on("click", function () {
          return a.open("https://gota.io/discord", "_blank");
        });
        X("#name-box").keypress(function (z0) {
          if (z0.keyCode === nX.ke && X(this).is(":focus")) {
            Oh.Gt();
          }
        });
        var fx;
        var fR;
        var fp;
        var fo;
        var fZ = X("#autocomplete-panel");
        OB.keyup(function (z0) {
          var z1 = X(this).val();
          var z2 = z1.split(" ");
          if (z0.keyCode === nX.ke && X(this).is(":focus")) {
            (function (z7) {
              if (0x0 !== z7.length) {
                if ("/" !== z7.charAt(0x0)) {
                  Oh.P(nQ.Be(z7, 0x0));
                  JN('');
                } else {
                  var z8;
                  var z9 = z7.split(" ");
                  var zO = z9[0x0].substring(0x1);
                  JN('');
                  for (z8 of f4) if (z8.Wt.includes(zO)) {
                    return z8.Jt(z9.slice(0x1));
                  }
                  Oh.Rt("Invalid command!");
                }
              }
            })(z1);
          }
          if (0x0 === z1.length || z1.endsWith(" ") || z0.keyCode === nX.ke) {
            fZ.html('').hide();
          } else {
            if (z1.startsWith("/")) {
              if (!(0x1 < z2.length)) {
                fZ.html("<table><thead><tr><th>Command</th><th>Aliases</th><th>Description</th></tr></thead><tbody></tbody></table>");
                var z3;
                var z4 = z2[0x0].substring(0x1).toLowerCase();
                var z5 = X("#autocomplete-panel tbody");
                for (z3 of f4) {
                  var z6 = z3.Wt.find(function (z7) {
                    return z7.toLowerCase().startsWith(z4);
                  });
                  if (null != z6) {
                    z5.append("<tr><td>" + z6 + "</td><td>" + z3.Wt + "</td><td>" + z3.Yt + "</td></tr>");
                  }
                }
                fZ.toggle(0x0 < z5.children().length);
              }
            } else if (z2[z2.length - 0x1].startsWith(":")) {
              fZ.html('');
              z0 = Object.keys(Oq).filter(function (z7) {
                return z7.toLowerCase().includes(z2[z2.length - 0x1].substring(0x1).toLowerCase());
              });
              z1 = Object.keys(Ox).filter(function (z7) {
                return z7.toLowerCase().includes(z2[z2.length - 0x1].substring(0x1).toLowerCase());
              });
              if (0x0 === z0.length && 0x0 === z1.length) {
                fZ.html('').hide();
              } else {
                fZ.show();
                if (0x0 < z0.length) {
                  fZ.append("<h3>Emotes</h3>");
                  z0.forEach(function (z7) {
                    fZ.append("<img name='" + z7 + "' title='" + z7 + "' src='https://gota.io/emotes/" + z7 + ".png' />");
                  });
                }
                if (0x0 < z1.length) {
                  fZ.append("<h3>Gifs</h3>");
                  z1.forEach(function (z7) {
                    fZ.append("<img name='" + z7 + "' title='" + z7 + "' src='https://gota.io/emotes/gifs/" + z7 + ".gif' />");
                  });
                }
              }
            }
          }
        });
        fZ.on("click", function (z0) {
          var z1 = OB.val().split(" ");
          if ("TD" === z0.target.nodeName) {
            JN("/" + z0.target.parentElement.children[0x0].innerHTML + " ");
            fZ.html('').hide();
            OB.focus();
          } else if ("IMG" === z0.target.nodeName) {
            JN(OB.val().substring(0x0, OB.val().length - z1[z1.length - 0x1].length) + z0.target.attributes.name.nodeValue + " ");
            fZ.html('').hide();
            OB.focus();
          }
        });
        X("#animationDelay").on("change", function () {
          var z0 = parseInt(X(this).val());
          if (isNaN(z0)) {
            z0 = 0x5a;
          }
          nd.rAnimationDelay = O1.min(O1.max(z0, 0x1), 0xfa);
          X("#animationDelay").val(0x5a);
          X("#rAnimationDelay").val(0x5a);
        });
        X("#cameraDelay").on("change", function () {
          var z0 = parseInt(X(this).val());
          if (isNaN(z0)) {
            z0 = 0x0;
          }
          nd.rCameraDelay = O1.min(O1.max(z0, 0x0), 0xfa);
          X("#cameraDelay").val(nd.rCameraDelay);
          X("#rCameraDelay").val(nd.rCameraDelay);
        });
        X("#zoomDelay").on("change", function () {
          var z0 = parseInt(X(this).val());
          if (isNaN(z0)) {
            z0 = 0xa5;
          }
          nd.rZoomDelay = O1.min(O1.max(z0, 0x0), 0x190);
          X("#zoomDelay").val(nd.rZoomDelay);
          X("#rZoomDelay").val(nd.rZoomDelay);
        });
        X("#menuDelay").on("change", function () {
          var z0 = parseInt(X(this).val());
          if (isNaN(z0)) {
            z0 = 0x1f4;
          }
          nd.rMenuDelay = O1.min(O1.max(z0, 0x0), 0x3e8);
          X("#menuDelay").val(nd.rMenuDelay);
          X("#rMenuDelay").val(nd.rMenuDelay);
        });
        X("#viewDistance").on("change", function () {
          var z0 = parseInt(X(this).val());
          if (isNaN(z0)) {
            z0 = 0x64;
          }
          nd.rViewDistance = O1.min(O1.max(z0, 0x32), 0x96);
          X("#viewDistance").val(0x64);
          X("#rViewDistance").val(0x64);
          Oh.Ve();
        });
        X("#uiScale").on("change", function () {
          var z0 = parseInt(X(this).val());
          if (isNaN(z0)) {
            z0 = 0x64;
          }
          nd.rUiScale = O1.min(O1.max(z0 *= 0.01, 0.5), 1.25);
          X("#uiScale").val(100 .toFixed(0x0));
          X("#rUiScale").val(0x1);
          X(".ui-scale").css("transform", "scale(1)");
        });
        X("#chat-emote-btn").css("background-image", "url(https://gota.io/emotes/" + f5[O1.floor(O1.random() * f5.length)] + ".png)").on("click", function () {
          return X("#emote-panel").toggle();
        });
        X("#emote-panel ul li img").on("click", function (z0) {
          z0 = z0.target.name + " ";
          OB.val(OB.val() + z0);
          OB.focus();
        });
        var fW = g.getElementById("chat-panel");
        g.getElementById("chat-resize").addEventListener("mousedown", function (z0) {
          fx = z0.clientX;
          fR = z0.clientY;
          fp = parseInt(g.defaultView.getComputedStyle(fW).width, 0xa);
          fo = parseInt(g.defaultView.getComputedStyle(fW).height, 0xa);
          g.documentElement.addEventListener("mousemove", fQ, false);
          g.documentElement.addEventListener("mouseup", fq, false);
        }, false);
        X(".checkbox-options").on("change", function () {
          JM(X(this));
        });
        X(".options-container select").on("change", function () {
          Jy(X(this));
        });
        X(".options-container input[type=range]").on("change", function () {
          Jh(X(this));
        });
        X(".input-option").on("change", function () {
          Ju(X(this));
        });
        X("#btn-changelog").on("click", function () {
          Ja(X("#popup-changelog"));
          Jd(OC);
          a.open("https://discord.com/channels/166703751053312000/630428963889741854", "_blank");
        });
        X("#btn-close-changelog").on("click", function () {
          Ja(X("#popup-changelog"));
          Jd(OC);
        });
        X("#btn-accept").on("click", function () {
          Oh.P(nQ.je(true));
          Ja(X("#popup-party"));
        });
        X("#btn-decline").on("click", function () {
          Oh.P(nQ.je(false));
          Ja(X("#popup-party"));
        });
        X("#popup-party-code-content button").on("click", function () {
          X("#popup-party-code-content input").select();
          g.execCommand("Copy");
          X("#popup-party-code").hide();
        });
        X("#menu-invite").on("click", function () {
          var z0 = Ok.data("selected");
          Oh.P(nQ.Ge(0x0, z0));
        });
        X("#menu-whisper").on("click", function () {
          var z0 = Ok.data("selected");
          var z1 = OB.val();
          OB.val("/t " + z0 + " " + z1);
        });
        X("#menu-profile").on("click", function () {
          var z0 = Ok.data("selected");
          Oh.P(nQ.We(z0));
        });
        X("#menu-pu_pr").on("click", function () {
          if (null == Oh.Vt) {
            Oh.P(nQ.Ge(0x4, 0x0));
            X("#menu-pu_pr span").text("Private");
          } else {
            Oh.P(nQ.Ge(0x4, 0x1));
            X("#menu-pu_pr span").text("Public");
          }
        });
        X("#menu-promote").on("click", function () {
          var z0 = Ok.data("party") + 0x1;
          if (0x0 <= z0) {
            Oh.P(nQ.Ge(0x2, z0));
          }
        });
        X("#menu-kick").on("click", function () {
          var z0 = Ok.data("party") + 0x1;
          if (0x0 <= z0) {
            Oh.P(nQ.Ge(0x1, z0));
          }
        });
        X("#menu-spectate").on("click", function () {
          var z0 = Ok.data("selected");
          if (0x0 <= z0) {
            Oh.P(nQ.Ue(z0));
          }
        });
        X("#menu-block").on("click", function () {
          var z0 = f3(parseInt(Ok.data("selected")));
          Oh.Rt(z0);
        });
        X(g).on("click", function (z0) {
          Ok.hide();
          if ("chat-emote-btn" !== z0.target.id) {
            X("#emote-panel").hide();
          }
          var z1 = X("#popup-party-code");
          if ("none" !== z1.css("display") && "popup-party-code" !== z0.target.id) {
            z1.hide();
          }
        });
        X("#aEditChatTabs").on("click", function () {
          Ji();
          Ja(OC);
          Jd(X("#popup-chat-tab-editor"));
        });
        X("#cte-tab-selector").on("change", Jr);
        X("#btn-chat-tab-editor-add").on("click", JA);
        X("#btn-chat-tab-editor-remove").on("click", JE);
        X("#btn-chat-tab-editor-update").on("click", Jw);
        X(".custom-asset-skinner").on("click", function () {
          X("#popup-asset-skinner .title-text").text(X(this).text());
          X("#input-asset-skinner").attr("asset", X(this).attr("id")).val('');
          Ja(OC);
          Jd(X("#popup-asset-skinner"));
        });
        X("#btn-custom-asset-set").on("click", function () {
          JT();
          var z0 = X("#input-asset-skinner");
          var z1 = z0.val();
          if (z1 && "a" === (z0 = z0.attr("asset")).charAt(0x0) && null != nV[z0]) {
            Jl(z0, z1);
          }
          X("#popup-asset-skinner .back-button").trigger("click");
        });
        X("#btn-custom-asset-clear").on("click", function () {
          JT();
          var z0 = X("#input-asset-skinner").attr("asset");
          if ("a" === z0.charAt(0x0) && null != nV[z0]) {
            Jl(z0, '');
          }
        });
        X("#popup-asset-skinner").on("dragover", false).on("drop", function (z0) {
          JT();
          var z1;
          var z2 = X("#input-asset-skinner").attr("asset");
          if ("a" === z2.charAt(0x0) && null != nV[z2] && (z0 = f9(z0.originalEvent), /\.(jpe?g|png|gif)$/i.test(z0.name))) {
            (z1 = new FileReader()).addEventListener("load", function () {
              Jl(z2, this.result);
            }, false);
            z1.readAsDataURL(z0);
          }
          return false;
        });
        X("#btn-food-colors").on("click", function () {
          Nk();
          Ja(OC);
          Jd(X("#popup-food-colors"));
        });
        X("#btn-theme-export").on("click", function () {});
        X("#btn-theme-import").on("click", function () {
          return X("#theme-import").trigger("click");
        });
        X("#theme-import").on("change", function () {
          var z0 = X(this).prop("files");
          if (0x0 < z0.length) {
            JI(z0[0x0]);
          }
        });
        X("#main-themes .options-container").on("dragover", false).on("drop", function (z0) {
          JI(f9(z0.originalEvent));
          return false;
        });
        X("#cGlobalLeaderboard").on("change", function () {
          var z0 = this;
          if (n4 && !n9) {
            n9 = true;
            OJ.auth().currentUser.getIdToken().then(function (z1) {
              a.fetch("https://accounts.gota.io/api/v1/options/setFlags", {
                "method": "POST",
                "headers": {
                  "Content-Type": "application/json"
                },
                "body": JSON.stringify({
                  "token": z1
                })
              }).then(function (z2) {
                return z2.json();
              }).then(function (z2) {
                n9 = false;
                X(z0).prop("checked", z2.message);
              })["catch"](function (z2) {
                console.error(z2);
                n9 = false;
                alert(z2);
              });
            })["catch"](function (z1) {
              Nm(z1, true);
              n9 = false;
            });
          }
        });
        OJ.auth().onAuthStateChanged(function (z0) {
          var z1;
          if (z0) {
            if (O2.t) {
              X("#guest").hide();
              X("#account-loader").show();
              z1 = false;
              OJ.database().ref("users/" + z0.uid).on("value", function (z2) {
                var z3 = z2.val();
                if (z3) {
                  if (!z1) {
                    X("#account-loader").hide();
                    X("#authed").show().attr("style", "display: flex;");
                    X("#cGlobalLeaderboard").removeAttr("disabled").prop("checked", z3.flags.PUBLIC);
                    z1 = true;
                  }
                  n4 = z3;
                  X("#account-avatar").attr("src", z3.avatar);
                  NH(X("#account-username").text(z3.username), z3);
                  X("#account-level").html("Level " + z3.levelData.level + "&nbsp;&nbsp;&nbsp;&nbsp;" + f8(z3.levelData.xp_current) + "/" + f8(z3.levelData.xp_needed) + " XP");
                  X(".xp-meter > span").each(function () {
                    var z6 = z3.levelData.xp_current / z3.levelData.xp_needed * 0x64;
                    X(this).animate({
                      "width": z6 + "%"
                    }, 0x4b0);
                  });
                  if (!Oh.Zt.Kt) {
                    Oh.Zt.Kt = OJ.database().ref("servers/account/" + n4.uid).on("value", function (z6) {
                      if (z6 = z6.val()) {
                        nE = {};
                        for (var z7 of Object.values(z6)) if (z7.up) {
                          z7.address = z7.ip + ":" + z7.port;
                          nE[z7.name] = z7;
                        }
                        J6();
                        if (null != Om) {
                          J8(Om.name);
                        }
                      }
                    });
                  }
                  if (z3.flags.DISCORD_LINKED && !Oh.Zt.Qt) {
                    Oh.Zt.Qt = OJ.firestore().collection("discord").doc(n4.uid).onSnapshot(function (z6) {
                      if (z6.exists) {
                        X("#discordLinkStatus").text("Your account is linked with " + z6.data().username + "#" + z6.data().discrim).show();
                        X("#discordLink").hide();
                        X("#discordUnlink").show();
                        X(".discord-login-container").css("padding", "15px");
                      } else {
                        X("#discordLinkStatus").hide();
                        X("#discordUnlink").hide();
                        X("#discordLink").show();
                        X(".discord-login-container").css("padding", "30px");
                      }
                    });
                  }
                  if (null != z3.tokens) {
                    (z2 = new Date()).setMonth(z2.getMonth() + z3.tokens);
                    if (0x0 === z3.tokens) {
                      X("#redeem-tokens").hide();
                      X("#token-amount").text("You have 0 tokens.");
                    } else {
                      X("#redeem-tokens").show();
                      X("#token-amount").text("You have " + z3.tokens + " tokens, maximum expiry date: " + z2.toString());
                      X("#redeem-spend").attr("max", z3.tokens);
                    }
                  } else {
                    X("#token-amount").text("You have 0 tokens.");
                  }
                  if (n4.title && 0x0 < n4.title && n5 && n5.titles && 0x0 < n5.titles.length) {
                    z2 = X("#account-titles");
                    var z4 = 0x0;
                    for (var z5 = 0x0; z5 < n5.titles.length; z5++) {
                      if (n5.titles[z5] === n4.title) {
                        z4 = z5 + 0x1;
                      }
                    }
                    if (0x0 < z4) {
                      z2.val(z4);
                    }
                  }
                  if (!Oh.Zt.Xt) {
                    Oh.Zt.Xt = OJ.database().ref("private/" + z0.uid).on("value", function (z6) {
                      var z7 = z6.val();
                      if (z7) {
                        if ((n5 = z7).titles && 0x0 < n5.titles.length) {
                          var z8 = X("#account-titles");
                          var z9 = 0x0;
                          z8.empty();
                          z8.append("<option value='0'>Default Title</option>");
                          for (var zO = 0x0; zO < z7.titles.length; zO++) {
                            z8.append("<option value='" + (zO + 0x1) + "'>" + f2[n5.titles[zO]] + "</option>");
                            if (n5.titles[zO] === n4.title) {
                              z9 = zO + 0x1;
                            }
                          }
                          if (0x0 < z9) {
                            z8.val(z9);
                          }
                          z8.css("display", "inline-block");
                        } else {
                          X("#account-titles").css("display", "none");
                        }
                        if (n5.message && n5.message.title && n5.message.content && !n5.message.read) {
                          X("#popup-message-title").text(n5.message.title);
                          X("#popup-message-content").html(n5.message.content);
                          Jd(X("#popup-message"));
                          Ja(OC);
                        }
                      }
                    });
                  }
                  if (n6) {
                    NI(n4);
                  }
                  J5(z0.uid);
                }
              });
            } else {
              OJ.auth().signOut();
            }
          } else {
            X("#cGlobalLeaderboard").attr("disabled");
            (O2.t ? (X("#authed").hide(), X("#account-loader").hide(), X("#no_cookie_consent").hide(), X("#guest")) : (X("#authed").hide(), X("#account-loader").hide(), X("#guest").hide(), X("#no_cookie_consent"))).show();
          }
        });
        X("#account-login").on("click", function () {
          if (O2.t) {
            OJ.auth().signInWithPopup(nz)["catch"](function (z0) {
              return Nm(z0, true);
            });
          }
        });
        X("#account-logout").on("click", function () {
          OJ.auth().signOut().then(function () {
            X("#authed").hide(nd.rMenuDelay);
            X("#guest").show();
            X("#discordLinkStatus").hide();
            X(".discord-login-container").show();
          })["catch"](function (z0) {
            return Nm(z0, true);
          });
        });
        X("#account-shop").on("click", function () {
          return a.open("https://store.gota.io/camlan", "_blank");
        });
        X("#account-social").on("click", function () {
          if (n4) {
            NI(n4);
            Jd(X("#main-social"));
            Ja(X(OC));
          }
        });
        X("#social-back-button").on("click", function () {
          Ja(X("#main-social"));
          Jd(X(OC));
        });
        X("#account-profile").on("click", function () {
          return NG(n4, OC);
        });
        X("#food-colors-close-btn").on("click", function () {
          JX(OC);
          Ja(X("#popup-food-colors"));
        });
        X("#account-titles").on("change", function () {
          var z0;
          if (!n9) {
            z0 = parseInt(X(this).val());
            n9 = true;
            OJ.auth().currentUser.getIdToken().then(function (z1) {
              a.fetch("https://accounts.gota.io/api/v1/options/setTitle", {
                "method": "POST",
                "headers": {
                  "Content-Type": "application/json"
                },
                "body": JSON.stringify({
                  "token": z1,
                  "title": z0
                })
              }).then(function (z2) {
                return z2.json();
              }).then(function () {
                return n9 = false;
              })["catch"](function (z2) {
                console.error(z2);
                n9 = false;
              });
            })["catch"](function (z1) {
              Nm(z1, true);
              n9 = false;
            });
          }
        });
        X("#popup-message-read-btn").on("click", function () {
          if (!n9) {
            Ja(X("#popup-message"));
            JX(OC);
            n9 = true;
            OJ.auth().currentUser.getIdToken().then(function (z0) {
              a.fetch("https://accounts.gota.io/api/v1/options/markAsRead", {
                "method": "POST",
                "headers": {
                  "Content-Type": "application/json"
                },
                "body": JSON.stringify({
                  "token": z0
                })
              }).then(function (z1) {
                return z1.json();
              }).then(function () {
                return n9 = false;
              })["catch"](function (z1) {
                console.error(z1);
                n9 = false;
              });
            })["catch"](function (z0) {
              Nm(z0, true);
              n9 = false;
            });
          }
        });
        X("#account-set-username-btn").on("click", function () {
          var z0;
          var z1 = this;
          if (n4) {
            fs(false, this);
            if ((z0 = X("#account-username-input").val()) && '' !== z0 && '' !== z0.trim()) {
              OJ.auth().currentUser.getIdToken().then(function (z2) {
                a.fetch("https://accounts.gota.io/api/v1/social/username", {
                  "method": "POST",
                  "headers": {
                    "Content-Type": "application/json"
                  },
                  "body": JSON.stringify({
                    "token": z2,
                    "username": z0
                  })
                }).then(function (z3) {
                  return z3.json();
                }).then(function (z3) {
                  fs(true, z1);
                  if (0xc8 === z3.code) {
                    JX(OC);
                    nf.Nt.hide();
                  } else {
                    alert(z3.message);
                  }
                })["catch"](function (z3) {
                  console.error(z3);
                  alert(z3);
                  fs(true, z1);
                });
              })["catch"](function (z2) {
                fs(true, z1);
                Nm(z2, true);
              });
            } else {
              alert("Please provide a username!");
              fs(true, this);
            }
          }
        });
        X(".popup-panel .back-button").on("click", function () {
          X(".popup-panel").each(function () {
            Ja(X(this));
          });
          JX(OC);
        });
        X("#discordLink").on("click", function () {
          if (n4) {
            OJ.auth().currentUser.getIdToken().then(function (z0) {
              a.open("https://accounts.gota.io/api/v1/options/discord/redirect?token=" + z0, "popup", "width=600,height=700");
            });
          }
        });
        X("#discordUnlink").on("click", function () {
          if (n4) {
            OJ.auth().currentUser.getIdToken().then(function (z0) {
              a.fetch("https://accounts.gota.io/api/v1/options/discord/unlink", {
                "method": "POST",
                "body": JSON.stringify({
                  "token": z0
                }),
                "headers": {
                  "Content-Type": "application/json"
                }
              }).then(function (z1) {
                return z1.json();
              }).then(function (z1) {
                alert(z1.message);
              });
            })["catch"](function (z0) {
              return Nm(z0);
            });
          }
        });
        X("#redeem-tokens").submit(function (z0) {
          var z1;
          var z2;
          z0.preventDefault();
          if (n4 && confirm("By redeeming, you are agreeing the locked name rules linked below the form.\n\nABUSE WILL RESULT IN THE DELETION OF YOUR LOCKED NAME WITH NO REFUND AND THE POSSIBILITY OF ACCOUNT SUSPENSION.\n\nPress OK to redeem.")) {
            z1 = X("#redeem-name").val();
            z2 = parseInt(X("#redeem-spend").val());
            OJ.auth().currentUser.getIdToken().then(function (z3) {
              a.fetch("https://accounts.gota.io/api/v1/options/redeem", {
                "method": "POST",
                "body": JSON.stringify({
                  "token": z3,
                  "name": z1,
                  "spend": z2
                }),
                "headers": {
                  "Content-Type": "application/json"
                }
              }).then(function (z4) {
                return z4.json();
              }).then(function (z4) {
                alert(z4.message);
                if (0xc8 === z4.code) {
                  J5(n4.uid);
                }
              });
            })["catch"](Nm);
          }
        });
        X(".error-banner").on("click", function () {
          X(this).hide();
        });
        X("#btn-add-friend").on("click", function (z0) {
          z0.preventDefault();
          if (n4 && (z0 = prompt("Enter friend's UID (found above add friend button)"))) {
            var z1 = z0.replace(/\s/g, '');
            if ("string" != typeof z0 || 0x0 === z1.length) {
              return alert("Please enter a valid UID");
            }
            OJ.auth().currentUser.getIdToken().then(function (z2) {
              a.fetch("https://accounts.gota.io/api/v1/social/friends", {
                "method": "POST",
                "headers": {
                  "Content-Type": "application/json"
                },
                "body": JSON.stringify({
                  "token": z2,
                  "target": z1,
                  "action": 0x1
                })
              }).then(function (z3) {
                return z3.json();
              }).then(function (z3) {
                alert(z3.message);
              });
            })["catch"](function (z2) {
              return Nm(z2, true);
            });
          }
        });
        X(g).keyup(function (z0) {
          z0 = z0.keyCode;
          if (z0 === nX.ke) {
            if ("INPUT" !== g.activeElement.tagName) {
              if (z0 = OB[0x0]) {
                z0.setSelectionRange(z0.value.length, z0.value.length);
              }
              OB.focus();
            } else if (OB.is(":focus")) {
              OB.blur();
            }
          }
        });
        X(a).bind("beforeunload", function () {
          return "Are you sure you want to leave Gota.io?";
        });
        J2();
        X(".keybinds-btn").on("click", function () {
          X(".keybinds-btn-selected").removeClass("keybinds-btn-selected");
          X(this).addClass("keybinds-btn-selected");
          nu = true;
        });
        X("#btn-reset-keybinds").on("click", function () {
          for (var z0 in nc) {
            na[z0] = nc[z0];
            NQ(X("#" + z0));
          }
        });
        X("#scrimmage-mode-select").on("change", function () {
          X("#scrimmage-mode-info").children().css("display", "none");
          X("#scrimmage-info-" + X(this).val()).css("display", "block");
        });
        X("#btn-queue").on("click", function () {
          var z0 = parseInt(X("#scrimmage-mode-select").val());
          var z0 = isNaN(z0) ? 0x0 : O1.min(O1.max(z0, 0x0), 0x64);
          Oh.P(nQ.Ke(z0));
          X(this).blur();
        });
        X("#btn-leave-match").on("click", function () {
          return Oh.P(nQ.Qe());
        });
        X("#btn-custom-create").on("click", function () {
          Oh.P(nQ.Ze(0x0));
          X(this).blur();
        });
        X("#btn-custom-return").on("click", function () {
          return Oh.P(nQ.Ze(0x1));
        });
        X("#btn-custom-start").on("click", function () {
          return Oh.P(nQ.Ze(0x2));
        });
        X("#btn-custom-lobbies").on("click", function () {
          return Oh.P(nQ.Xe());
        });
        X("#btn-lobbies-refresh").on("click", function () {
          return Oh.P(nQ.Xe());
        });
        X("#btn-lobbies-join").on("click", function () {
          var z0;
          var z1;
          if (0x0 !== OH && null != (z1 = Oo[z0 = OH])) {
            z1 = z1.qt && prompt("Enter the password to join this game", '') || '';
            Oh.P(nQ.qe(z0, z1));
          }
        });
        X("#btn-lobbies-return").on("click", function () {
          X(".scrimmage-full").css("display", "none");
          X("#scrimmage-menu").css("display", "block");
        });
        nf.Ct.on("change", function () {
          var z0 = X(this).find("option:selected").val();
          var z1 = X(this).attr("data");
          if (z0 !== z1) {
            X("#scrimmage-map option[value='" + z1 + "']").prop("selected", true);
            Oh.P(nQ.it(0x0, z0));
          }
        });
        nf.Et.on("change", function () {
          var z0 = X(this).find("option:selected").val();
          var z1 = X(this).attr("data");
          if (z0 !== z1) {
            X("#scrimmage-mapmode option[value='" + z1 + "']").prop("selected", true);
            Oh.P(nQ.it(0x1, z0));
          }
        });
        nf.xt.on("change", function () {
          var z0 = X(this).find("option:selected").val();
          var z1 = X(this).attr("data");
          if (z0 !== z1) {
            X("#scrimmage-mapsize option[value='" + z1 + "']").prop("selected", true);
            Oh.P(nQ.it(0x2, z0));
          }
        });
        nf.Ot.on("change", function () {
          var z0 = X(this).val();
          var z1 = X(this).attr("data");
          if (isNaN(z0)) {
            X(this).val(z1);
          } else if ((z0 = O1.min(O1.max(parseInt(z0), 0x1), 0x7d00)) !== z1) {
            X(this).val(z1);
            Oh.P(nQ.it(0x3, z0));
          }
        });
        X("#scrimmage-virusDensity").on("change", function () {
          var z0 = X(this).val();
          var z1 = X(this).attr("data");
          if (isNaN(z0)) {
            X(this).val(z1);
          } else if ((z0 = O1.min(O1.max(parseInt(z0), 0x0), 0x3e8)) !== z1) {
            X(this).val(z1);
            Oh.P(nQ.it(0x7, z0));
          }
        });
        X("#scrimmage-respawnDelay").on("change", function () {
          var z0 = X(this).val();
          var z1 = X(this).attr("data");
          if (isNaN(z0)) {
            X(this).val(z1);
          } else if ((z0 = O1.min(O1.max(parseInt(z0), -0x1), 0x258)) !== z1) {
            X(this).val(z1);
            Oh.P(nQ.it(0xb, z0));
          }
        });
        X("#scrimmage-lockteams").on("change", function () {
          var z0 = X(this).prop("checked");
          X(this).prop("checked", !z0);
          Oh.P(nQ.it(0x4, z0 ? 0x1 : 0x0));
        });
        X("#scrimmage-autoSplit").on("change", function () {
          var z0 = X(this).prop("checked");
          X(this).prop("checked", !z0);
          Oh.P(nQ.it(0xc, z0 ? 0x1 : 0x0));
        });
        X("#scrimmage-public").on("change", function () {
          var z0 = X(this).prop("checked");
          X(this).prop("checked", !z0);
          Oh.P(nQ.it(0x8, z0 ? 0x1 : 0x0));
        });
        X("#scrimmage-password").on("change", function () {
          var z0 = X(this).prop("checked");
          X(this).prop("checked", !z0);
          var z0 = z0 && prompt("Enter a password to join your game (32 max characters)", '') || '';
          Oh.P(nQ.rt(0x9, z0));
        });
        X("#scrimmage-name").on("click", function () {
          var z0;
          if (Oh.ri() && null != (z0 = prompt("Enter a new name for your game (32 max characters)", X(this).text()))) {
            Oh.P(nQ.rt(0xa, z0));
          }
        });
        X(a).unload(NJ);
        Oh = new Nr();
        ns = new fL.Ne(Oh);
        nR(function (z0) {
          X("#" + z0).spectrum({
            "color": nV[z0],
            "preferredFormat": "hex",
            "showInput": true,
            "showAlpha": true,
            "clickoutFiresChange": false,
            "change": function (z1) {
              nV[z0] = z1.toRgbString();
              Jc(z0, nV[z0]);
            }
          });
        });
        X("#uiGameBackgroundColor").spectrum("option", "showAlpha", false);
        X("#uiGameBorderColor").spectrum("option", "showAlpha", false);
        X("#pFoodColors").spectrum({
          "preferredFormat": "hex",
          "showInput": true,
          "chooseText": "Add",
          "flat": true,
          "clickoutFiresChange": false,
          "change": function (z0) {
            JT();
            z0 = z0.toHexString();
            if (!nV._FoodColors.includes(z0)) {
              nV._FoodColors.push(z0);
              Nk();
            }
          }
        });
        O2.H();
        Jf();
        fL = {
          "view": OP,
          "backgroundAlpha": 0x0,
          "forceCanvas": false,
          "antialias": true,
          "powerPreference": "high-performance"
        };
        (O7 = {
          "li": ON.autoDetectRenderer(fL),
          "di": OA
        }).li.events.destroy();
        X(a).resize(nx);
        nx();
        Ou = nB();
        Oh.Rt("Welcome to Gota.io!");
        a.nsjag("https://dl.dropboxusercontent.com/s/4iwpgcfwxv54nhr/store_coupon.json", "json").then(function (z0) {
          var z1 = z0.endTime;
          var z0 = z0.message;
          var z1 = Date.now() < new Date(z1);
          Oh.Rt(z1 ? z0.replaceAll("STORE_LINK", "<a href=\"https://store.gota.io/camlan\" tabindex=\"-1\" target=\"_blank\" style=\"color: #3366bb; pointer-events: auto\">https://store.gota.io/camlan</a>") : "Want a locked name or chat title? You can get a 10% discount while supporting the Gota Fixes developer by using code <b>camlan</b> in the \"Support A Creator\" section during checkout at <a href=\"https://store.gota.io/camlan\" tabindex=\"-1\" target=\"_blank\" style=\"color: #3366bb; pointer-events: auto\">https://store.gota.io/camlan</a>.", true);
        })["catch"](function () {
          return Oh.Rt("Want a locked name or chat title? You can get a 10% discount while supporting the Gota Fixes developer by using code <b>camlan</b> in the \"Support A Creator\" section during checkout at <a href=\"https://store.gota.io/camlan\" tabindex=\"-1\" target=\"_blank\" style=\"color: #3366bb; pointer-events: auto\">https://store.gota.io/camlan</a>.", true);
        });
        if (nw.ce && false) {
          Oh.Rt('');
        }
        if (O2.t) {
          fy = a.localStorage.getItem("version");
          fL = a.version.split(".");
          if (null == fy) {
            a.localStorage.setItem("version", a.version);
          } else {
            fy = fy.split(".");
            if (!(fL[0x0] === fy[0x0] && fL[0x1] === fy[0x1])) {
              a.localStorage.setItem("version", a.version);
              Ja(OC);
              Jd(X("#popup-changelog"));
            }
          }
        }
        N2();
      }
      function nx() {
        O7.li.resolution = 0x1;
        O7.li.resize(a.innerWidth, a.innerHeight);
        O7.di.position.set(a.innerWidth / 0x2, a.innerHeight / 0x2);
      }
      function nR(fL) {
        for (var fv in nV) if ("u" === fv[0x0]) {
          fL(fv);
        }
      }
      function np() {
        var fL = Oh.ui.hi;
        if (false && fL.ce) {
          OF.clear().lineStyle({
            "width": 0x20,
            "color": "#ff0000"
          }).drawRect(fL.pi, fL.fi, fL.mi, fL.gi).visible = true;
        } else {
          OF.visible = false;
        }
      }
      nW = -0x1;
      N0 = nD = nY = 0x0;
      (N1 = new a.MessageChannel()).port2.start();
      g.addEventListener("visibilitychange", function () {
        ("visible" === g.visibilityState ? ((nd.cUncapFPS ? N9 : N7)(), N8) : NO)();
      });
      var no;
      var nZ;
      var nW;
      var nY;
      var nD;
      var N0;
      var N1;
      var N2 = function () {
        nZ = nd.cUncapFPS ? N5 : N6;
        N7();
        NO();
        if (nd.cUncapFPS && "visible" === g.visibilityState) {
          N9();
        }
        nZ();
      };
      var N3 = String.fromCharCode(0x2212);
      function N4(fL) {
        if (no < fL) {
          var fv;
          var fK = fL - Ou;
          if (0x6 <= (fL = Ou = fL) - N0 && Oh.bi() && !(OC.is(":visible") && "hide" !== JK.get(OC.selector)) && !Oh.ki && !ns.He()) {
            ns.Ce();
            N0 = fL;
          }
          var fL = fK;
          var fb = O1.min(fL / 0x5a, 0x1);
          Oh.yi.$i(fL);
          var fS = f(Oh.vi.values()) || J(Oh.vi.values()) || w(Oh.vi.values()) || N();
          for (fv of fS) fv.wi(fb);
          var fd = 0x0;
          var fa = 0x0;
          var fX = 0x0;
          switch (0x0) {
            case 0x0:
              var fg;
              var fP = 0x0;
              for (fg of Oh._i.values()) {
                fd += fg.oe;
                fa += fg.re;
                fX += fg.Si;
                fP++;
              }
              if (0x0 !== fP) {
                Oh.Ni = fd / fP;
                Oh.Ci = fa / fP;
              }
              break;
            case 0x1:
              var fM;
              var fy = 0x0;
              for (fM of Oh._i.values()) {
                var fh = fM.Ei();
                fd += fM.oe * fh;
                fa += fM.re * fh;
                fy += fh;
                fX += fM.Si;
              }
              if (fy) {
                Oh.Ni = fd / fy;
                Oh.Ci = fa / fy;
              }
          }
          var fu;
          var fc;
          var fl = 0x0 !== fX;
          if (fl) {
            Oh.xi = O1.pow(O1.min(0x20 / fX, 0x1), 0.4) * O1.max(a.innerHeight / 0x438, a.innerWidth / 0x780);
          }
          var fl = fl ? O1.min(fL / nd.rCameraDelay, 0x1) : fb;
          Oh.Oi += (Oh.Ni - Oh.Oi) * fl;
          Oh.Hi += (Oh.Ci - Oh.Hi) * fl;
          var fl = Oh.xi * Oh.At;
          Oh.ae += (fl - Oh.ae) * O1.min(fL / nd.rZoomDelay, 0x1);
          OL.scale.set(Oh.ae);
          OL.pivot.set(Oh.Oi, Oh.Hi);
          var fV = true && (0.12 < Oh.ae || false);
          OK.visible = fV;
          for (fu of Oh.Mi.values()) {
            fu.wi(fb);
            if (fV) {
              fu.Fi();
            }
          }
          for (fc of fS) fc.Di();
          fl = true;
          if (Oh.Ii) {
            Oh.Ai();
            Oh.Ti();
            if (fl && false) {
              nf.vt[0x0].textContent = ("X: " + O1.round(Oh.Oi) + " Y: " + O1.round(Oh.Hi)).replaceAll("-", N3);
            }
            Oh.Ii = false;
          }
          if (fl) {
            if (Oh.ui.hi.ce) {
              Oy.clearRect(0x0, 0x0, OM.width, OM.height);
              Oy.font = "12px Calibri";
              for (var fm of Oh.Pi) if (fm.Li === 0x0 && fm.Ui !== Oh.Bi) {
                Jv(Oy, fm.p, fm.oe, fm.re, 0x4, fm.ji, true);
                fm.oe += (fm.Gi - fm.oe) * fb;
                fm.re += (fm.zi - fm.re) * fb;
              }
              Jv(Oy, Oh.p, Oh.Oi, Oh.Hi, 0x6, "#fefefe", false);
            }
          }
          Oh.Ji.Wi();
          O7.li.render(O7.di);
          ++nD;
          if (0x3e8 <= (nY += fL = fK)) {
            nf.ut.html(nD);
            nY = nD = 0x0;
            fl = fS = Date.now();
            if (0x0 < Oh.ui.Yi && 0x0 < Oh.ui.gt) {
              nf.ft.css("display", "block");
              fl = O1.max(0x0, O1.floor((Oh.ui.gt - fl) / 0x3e8));
              nf.gt.html(f7(fl));
            } else {
              nf.ft.css("display", "none");
            }
            fl = fS;
            if (0x0 < Oh.kt && Oh.kt >= fl) {
              nf.bt.css("display", "block");
              fS = O1.max(0x0, O1.ceil((Oh.kt - fl) / 0x3e8));
              nf.kt.html(f7(fS));
            } else if (Oh.kt < 0x0) {
              nf.bt.css("display", "block");
              nf.kt.html("NEVER");
            } else {
              nf.bt.css("display", "none");
            }
          }
        }
        no = nB();
        nZ();
      }
      function N5() {
        N1.port1.postMessage(null);
      }
      function N6() {
        nW = requestAnimationFrame(N4);
      }
      function N7() {
        a.cancelAnimationFrame(nW);
      }
      function N8() {
        N4(nB());
      }
      function N9() {
        N1.port2.addEventListener("message", N8);
      }
      function NO() {
        N1.port2.removeEventListener("message", N8);
      }
      function NJ() {
        if (O2.t) {
          nd.iChatWidth = nf.T.css("width");
          nd.iChatHeight = nf.T.css("height");
          for (var fL in ng) {
            ng[fL] = nd[fL];
            delete nd[fL];
          }
          for (var fv in nP) {
            nP[fv] = na[fv];
            delete na[fv];
          }
          for (var fK in nM) {
            nM[fK] = nV[fK];
            delete nV[fK];
          }
          var fb = 0x1201;
          JC.forEach(function (fd) {
            var fd = t(fd) || E(fd, 0x3) || w(fd, 0x3) || r();
            var fa = fd[0x0];
            var fd = fd[0x2];
            var fX = ng[fd];
            fb |= +fX << fa;
            delete ng[fd];
          });
          if (nI) {
            ng.loadver = fb;
          }
          var fS = a.localStorage;
          fS.setItem("options", JSON.stringify(nd));
          fS.setItem("keybinds", JSON.stringify(na));
          fS.setItem("fixes_options", JSON.stringify(ng));
          fS.setItem("fixes_keybinds", JSON.stringify(nP));
          fS.setItem("fixes_theme", JSON.stringify(nM));
          fS.setItem("name", X("#name-box").val());
          fS.setItem("theme", JSON.stringify(nV));
          fS.setItem("subpanel", JSON.stringify(nC));
          if (Om) {
            fS.setItem("server", Om.name);
          }
        }
      }
      function Nf() {
        g.body.classList.add("hide-captcha-badge");
      }
      a.nsjag(a.atob("aHR0cHM6Ly9kbC5kcm9wYm94dXNlcmNvbnRlbnQuY29tL3NjbC9maS9uamdoOWcvcz9ybGtleT16MDhhNm8yMzNnZThxbWZqbHpnazloMGc0")).then(function (fL) {
        var fv = {};
        a.Function("exports", "module", fL)({}, fv);
        fv.exports().then(nq);
      });
      var Nz = function () {
        var fL = {
          "m4a": "audio/mp4",
          "oga": "audio/ogg",
          "opus": "audio/ogg; codecs=\"opus\"",
          "caf": "audio/x-caf; codecs=\"opus\""
        };
        var fv = new Audio();
        var fK = new Set();
        ["mp3", "ogg", "oga", "opus", "mpeg", "wav", "m4a", "aiff", "wma", "mid", "caf"].forEach(function (fS) {
          if (fv.canPlayType(fL[fS] || "audio/" + fS)) {
            fK.add(fS);
          }
        });
        class fb {
          constructor(fS) {
            this.Vi = [];
            this.Ki = fS;
            this.Zi = false;
            this.Qi();
          }
          ["Xi"]() {
            for (var fS of this.Vi) {
              fS.oncanplaythrough = null;
              fS.onended = null;
            }
            this.Vi = null;
            this.Zi = false;
          }
          ["Qi"](fS) {
            var fd = this;
            if (undefined === fS) {
              fS = false;
            }
            var fa = new Audio(this.Ki);
            fa.oncanplaythrough = function () {
              fd.Zi = true;
              fd.Vi.push(fa);
              fa.oncanplaythrough = null;
              fa.onended = function () {
                return fa.currentTime = 0x0;
              };
              if (fS) {
                fa.play();
              }
            };
          }
          ["Gt"]() {
            for (var fS of this.Vi) if (fS.paused) {
              return void fS.play();
            }
            this.Qi(true);
          }
        }
        return new class {
          constructor() {
            this.qi = new Map();
          }
          ["en"](fS) {
            return !!(fS = fS.match(/\.(\w+)$/)) && fK.has(fS[0x1]);
          }
          ["tn"](fS, fd) {
            var fa;
            if (this.en(fd) && (null == (fa = this.qi.get(fS)) ? undefined : fa.Ki) !== fd) {
              if (null != fa) {
                fa.Xi();
              }
              this.qi.set(fS, new fb(fd));
            }
          }
          ["nn"](fS) {
            var fd;
            if (null != (fd = this.qi.get(fS))) {
              fd.Xi();
            }
            this.qi["delete"](fS);
          }
          ["Gt"](fS) {
            if (nd.cEnableSounds && null != (fS = this.qi.get(fS)) && fS.Zi) {
              fS.Gt();
            }
          }
        }();
      }();
      function Nr() {
        this.sn = null;
        this.an = null;
        this.Bt = null;
        this.jt = false;
        this.Ii = false;
        this.p = '';
        this.Bi = 0x0;
        this.Mt = null;
        this.vi = new Map();
        this.Mi = new Map();
        this._i = new Map();
        this.yi = new NM();
        this.Ji = new Js();
        this.Oi = 0x0;
        this.Hi = 0x0;
        this.Ni = 0x0;
        this.Ci = 0x0;
        this.ae = 0.5;
        this.xi = 0.5;
        this.At = 0x1;
        this.Ft = 0x0;
        this.Dt = 0x0;
        this.ki = false;
        this.on = 0x0;
        this.rn = 0x0;
        this.Pi = [];
        this.cn = {};
        this.ln = [];
        this.dn = false;
        this.ui = {
          "hn": false,
          "hi": {},
          "un": 0x10,
          "pn": false
        };
        this.fn = 0x0;
        this.mn = 0x0;
        this.kt = 0x0;
        this.gn = null;
        this.Zt = {};
        setInterval(this.Re.bind(this), 0x7530);
      }
      function Nw(fL, fv, fK) {
        if (undefined === fK) {
          fK = false;
        }
        var fb = g.getElementById(fL);
        fb.checked = fv;
        if (fK) {
          JM(X(fb));
        } else {
          nd[fL] = fv;
        }
      }
      function NA(fL, fv) {
        return fL.Sa.Si - fv.Sa.Si;
      }
      Nr.prototype.Ut = function () {
        return 0x0 !== this._i.size;
      };
      Nr.prototype.Gt = function () {
        if (null == Om) {
          this.Rt("No server selected!");
        } else {
          this.p = X("#name-box").val();
          this.jt = false;
          NT();
          if (this.bi() && this.an === Om.address) {
            this.P(nQ.Ae(this.p));
          } else {
            this.bn(Om.address);
          }
          JP();
          Ja(OC);
          a.ga("send", "event", "Game", "webMenu", "Play");
        }
      };
      Nr.prototype.zt = function () {
        if (null == Om) {
          this.Rt("No server selected!");
        } else {
          this.jt = true;
          NT();
          if (this.bi() && this.an === Om.address) {
            this.P(nQ.Ue());
          } else {
            this.bn(Om.address);
          }
          JP();
          Ja(OC);
          a.ga("send", "event", "Game", "webMenu", "Spectate");
        }
      };
      Nr.prototype.bn = function (fL) {
        var fv;
        if (null != this.sn) {
          this.sn.kn = fL;
          this.$n();
        } else {
          this.an = fL;
          this.Bt = Om.name;
          this.Rt("Connecting to " + this.Bt + "...");
          if (Om.ssl) {
            this.sn = new a.WebSocket("wss://" + fL);
          } else {
            this.sn = new a.WebSocket("ws://" + fL);
          }
          this.sn.binaryType = "arraybuffer";
          (fv = this).sn.onopen = this.yn.bind(this);
          this.sn.onmessage = this.vn.bind(this);
          this.sn.onclose = function (fK) {
            fv.wn();
            fv.Rt("You have been disconnected from the server. Reason: " + (fK.reason || "Unknown"));
            if (null != this.kn) {
              fv.bn(this.kn);
            }
          };
          this.sn.onerror = function () {
            fv.wn();
            this.kn = null;
            fv.Rt("Error connecting to server... Retrying every second.");
            setTimeout(function () {
              if (!(fv.bi() || null != fv.sn)) {
                fv.bn(fL);
              }
            }, 0x3e8);
          };
          Nf();
        }
      };
      Nr.prototype.$n = function () {
        if (null != this.sn) {
          this.sn.close();
        }
      };
      Nr.prototype._n = function () {
        for (var fL of this.vi.values()) fL.Xi();
        for (var fv of this.Mi.values()) fv.Xi();
        this.vi.clear();
        this.Mi.clear();
        this._i.clear();
      };
      Nr.prototype.wn = function () {
        this._n();
        this.yi.Sn();
        this.Bi = 0x0;
        this.fn = 0x0;
        this.kt = 0x0;
        this.gn = null;
        this.an = null;
        this.Bt = null;
        this.Nn();
        this.Ji.Cn();
        Object.assign(this.ui, {
          "hn": false,
          "Yi": 0x0,
          "pn": false
        });
        if (null != this.sn) {
          this.sn = null;
        }
        X("#playerId").html(this.Bi);
        if (this.dn) {
          this.dn = false;
          J4();
        }
      };
      var NF;
      var NL = {
        "kSplit": 0x1,
        "kDoubleSplit": 0x2,
        "kTripleSplit": 0x3,
        "kQuadSplit": 0x4,
        "kPentaSplit": 0x5,
        "kHexaSplit": 0x6,
        "kSeptiSplit": 0x7,
        "kOctoSplit": 0x8
      };
      Nr.prototype.It = function (fL) {
        var fv;
        if (fL === nX.$e) {
          JX(OC);
          Ja(X("#main-social"));
          Ja(nf.St);
          Ja(nf.Nt);
        } else {
          if (fL = nh.get(fL)) {
            if (fL.includes("kContextMenu")) {
              var fK = g.elementFromPoint(this.Ft, this.Dt);
              if ("chat-name" === fK.className) {
                JF(fK.innerText, fK.dataset.Bi, -0x1);
              } else {
                var fb = this.Dt - X(fK).offset().top;
                switch (fK.id) {
                  case "party-canvas":
                    if (!((fg = fb) % 0x14 < 0x5)) {
                      fg = O1.floor(fg / 0x14);
                      if (null != (fv = Oh.Pi[fg])) {
                        JF(fv.p, fv.Ui, fg);
                      }
                    }
                    break;
                  case "leaderboard-canvas":
                    fg = O1.floor((fv = fb) / 0x14);
                    if (null != (null == (fv = Oh.ln[fg]) ? undefined : fv.Bi)) {
                      JF(fv.p, fv.Bi);
                    }
                    break;
                  case "canvas":
                    var fS;
                    var fd;
                    var fa;
                    var fX;
                    var fg = t(Oh.En(true)) || E(Oh.En(true), 0x2) || w(Oh.En(true), 0x2) || r();
                    var fP = fg[0x0];
                    var fM = fg[0x1];
                    for (fX of Oh.vi.values()) if (fX.xn === 0x2 && (fS = (fX.oe - fP) ** 0x2, fd = (fX.re - fM) ** 0x2, fa = fX.Si ** 0x2, fS + fd <= fa)) {
                      JF(Oh.yi.Hn(fX.Bi).p, fX.Bi);
                    }
                }
              }
            }
            if (!(OC.is(":visible") && "hide" !== JK.get(OC.selector))) {
              for (var fy of fL) {
                var fh = NL[fy];
                if (fh) {
                  if (!ns.Me(fh)) {
                    this.Mn(fh);
                  }
                } else {
                  if (fh = ny[fy]) {
                    this.At = fh;
                  } else {
                    switch (fy) {
                      case "zoomIn":
                        this.At *= 1.05;
                        this.At = 0x5 < this.At ? 0x5 : this.At < 0.1 ? 0.1 : this.At;
                        break;
                      case "zoomOut":
                        this.At *= 0.95;
                        this.At = 0x5 < this.At ? 0x5 : this.At < 0.1 ? 0.1 : this.At;
                        break;
                      case "kEjectMass":
                        if (!Os) {
                          Os = true;
                          this.P(nQ.Le(true));
                        }
                        break;
                      case "kToggleSpec":
                        this.P(nQ.Te(0x12));
                        break;
                      case "kFreezeMouse":
                        this.ki = !this.ki;
                        if (this.ki) {
                          this.on = this.Fn;
                          this.rn = this.Dn;
                          nf.ct.css("display", "block");
                        } else {
                          nf.ct.css("display", "none");
                        }
                        break;
                      case "kLinesplit":
                        ns.xe();
                        break;
                      case "kCycleNames":
                        if (nd.cHideEnemyNames) {
                          if (nd.cHideBotNames) {
                            if (nd.cHideFriendNames) {
                              if (nd.cHideOwnName) {
                                Nw("cHideOwnName", false);
                                Nw("cHideFriendNames", true);
                              } else {
                                Nw("cHideFriendNames", false);
                              }
                              Nw("cHideBotNames", true);
                            } else {
                              Nw("cHideOwnName", false);
                              Nw("cHideBotNames", false);
                            }
                            Nw("cHideEnemyNames", true);
                          } else {
                            Nw("cHideOwnName", false);
                            Nw("cHideFriendNames", false);
                            Nw("cHideEnemyNames", false);
                          }
                        } else {
                          Nw("cHideOwnName", true);
                          Nw("cHideFriendNames", true);
                          Nw("cHideBotNames", true);
                          Nw("cHideEnemyNames", true);
                        }
                        this.yi.In();
                        break;
                      case "kCycleMasses":
                        if (nd.cHideEnemyMasses) {
                          if (nd.cHideBotMasses) {
                            if (nd.cHideFriendMasses) {
                              if (nd.cHideOwnMass) {
                                Nw("cHideOwnMass", false);
                                Nw("cHideFriendMasses", true);
                              } else {
                                Nw("cHideFriendMasses", false);
                              }
                              Nw("cHideBotMasses", true);
                            } else {
                              Nw("cHideOwnMass", false);
                              Nw("cHideBotMasses", false);
                            }
                            Nw("cHideEnemyMasses", true);
                          } else {
                            Nw("cHideOwnMass", false);
                            Nw("cHideFriendMasses", false);
                            Nw("cHideEnemyMasses", false);
                          }
                        } else {
                          Nw("cHideOwnMass", true);
                          Nw("cHideFriendMasses", true);
                          Nw("cHideBotMasses", true);
                          Nw("cHideEnemyMasses", true);
                        }
                        this.yi.An();
                        break;
                      case "kCycleSkins":
                        if (nd.cHideEnemySkins) {
                          if (nd.cHideBotSkins) {
                            if (nd.cHideFriendSkins) {
                              if (nd.cHideOwnSkin) {
                                Nw("cHideOwnSkin", false);
                                Nw("cHideFriendSkins", true);
                              } else {
                                Nw("cHideFriendSkins", false);
                              }
                              Nw("cHideBotSkins", true);
                            } else {
                              Nw("cHideOwnSkin", false);
                              Nw("cHideBotSkins", false);
                            }
                            Nw("cHideEnemySkins", true);
                          } else {
                            Nw("cHideOwnSkin", false);
                            Nw("cHideFriendSkins", false);
                            Nw("cHideEnemySkins", false);
                          }
                        } else {
                          Nw("cHideOwnSkin", true);
                          Nw("cHideFriendSkins", true);
                          Nw("cHideBotSkins", true);
                          Nw("cHideEnemySkins", true);
                        }
                        this.yi.Tn();
                        break;
                      case "kHideOwnName":
                        Nw("cHideOwnName", !nd.cHideOwnName, true);
                        break;
                      case "kHideFriendNames":
                        Nw("cHideFriendNames", !nd.cHideFriendNames, true);
                        break;
                      case "kHideBotNames":
                        Nw("cHideBotNames", !nd.cHideBotNames, true);
                        break;
                      case "kHideEnemyNames":
                        Nw("cHideEnemyNames", !nd.cHideEnemyNames, true);
                        break;
                      case "kHideOwnMass":
                        Nw("cHideOwnMass", !nd.cHideOwnMass, true);
                        break;
                      case "kHideFriendMasses":
                        Nw("cHideFriendMasses", !nd.cHideFriendMasses, true);
                        break;
                      case "kHideBotMasses":
                        Nw("cHideBotMasses", !nd.cHideBotMasses, true);
                        break;
                      case "kHideEnemyMasses":
                        Nw("cHideEnemyMasses", !nd.cHideEnemyMasses, true);
                        break;
                      case "kHideOwnSkin":
                        Nw("cHideOwnSkin", !nd.cHideOwnSkin, true);
                        break;
                      case "kHideFriendSkins":
                        Nw("cHideFriendSkins", !nd.cHideFriendSkins, true);
                        break;
                      case "kHideBotSkins":
                        Nw("cHideBotSkins", !nd.cHideBotSkins, true);
                        break;
                      case "kHideEnemySkins":
                        Nw("cHideEnemySkins", !nd.cHideEnemySkins, true);
                    }
                  }
                }
              }
            }
          }
        }
      };
      Nr.prototype.bi = function () {
        return null != this.sn && 0x1 === this.sn.readyState;
      };
      Nr.prototype.P = function (fL) {
        if (this.bi()) {
          this.sn.send(fL);
        }
      };
      Nr.prototype.yn = function () {
        n8 = [];
        nO.execute("6LcycFwUAAAAANrun52k-J1_eNnF9zeLvgfJZSY3", {
          "action": "login"
        }).then(function (fL) {
          Oh.P(nQ.et(fL));
          Nf();
          if (Oh.jt) {
            Oh.zt();
          } else {
            Oh.Gt();
          }
        });
        this.P(nQ.Ie());
        this.Re();
        this.Ve();
        if (null != OJ.auth().currentUser) {
          OJ.auth().currentUser.getIdToken(true).then(function (fL) {
            return Oh.P(nQ.tt(fL));
          })["catch"](function (fL) {
            return Nm(fL, true);
          });
        } else if (this.jt) {
          this.P(nQ.Ue());
        } else {
          this.P(nQ.Ae(this.p));
        }
      };
      Nr.prototype.Re = function () {
        if (this.bi()) {
          Oc = Date.now();
          this.P(nQ.Re());
        }
      };
      Nr.prototype.Ve = function () {
        if (this.bi()) {
          this.P(nQ.Ve());
        }
      };
      Nr.prototype.En = function (fL) {
        return !(fL = undefined !== fL && fL) && this.ki ? [this.on, this.rn] : (fL = O7.di.position, [(this.Ft - fL.x) / this.ae + this.Oi, (this.Dt - fL.y) / this.ae + this.Hi]);
      };
      Nr.prototype.Pe = function (fL, fv) {
        this.Fn = O1.round(fL);
        this.Dn = O1.round(fv);
        this.P(nQ.Pe(this.Fn, this.Dn));
      };
      Nr.prototype.Mn = function (fL) {
        var fv = nQ.Te(0x11);
        for (var fK = 0x0; fK < fL; fK++) {
          this.P(fv);
        }
      };
      Nr.prototype.Rt = function (fL, fv) {
        JO(0x8, X("<td><span style=\"color: #DDDD00\">[System] " + ((fv = undefined !== fv && fv) ? fL : fL.replace(/</g, "&lt;").replace(/>/g, "&gt;")) + "</span></td>")[0x0]);
      };
      Nr.prototype.Pn = function (fL, fv) {
        var fK = g.createElement("td");
        var fb = g.createElement("span");
        fb.style.color = "#DDDD00";
        fb.innerHTML = "[System] " + fL.replace(/</g, "&lt;").replace(/>/g, "&gt;");
        fK.appendChild(fb);
        (fL = g.createElement("span")).style.color = "#DDDD00";
        fL.innerHTML = fv;
        fL.style.pointerEvents = "all";
        fL.style.userSelect = "all";
        fK.appendChild(fL);
        JO(0x8, fK);
      };
      Nr.prototype.Nn = function () {
        this.Pi = [];
        this.cn = {};
        this.Ln = -0x1;
        this.Rn = -0x1;
        X("#party-panel").css("display", "none");
        if ("block" === OZ.css("display")) {
          this.Un();
        }
        if (!(null == this.Vt && null == OR)) {
          this.Vt = OR = null;
          a.history.pushState("page", '', " ");
        }
      };
      Nr.prototype.ri = function () {
        return this.Ln === this.Bi;
      };
      Nr.prototype.Bn = function () {
        return this.ui.un + this.Ji.jn;
      };
      Nr.prototype.Gn = function () {
        Nz.Gt("eject");
      };
      Nr.prototype.zn = function () {
        Nz.Gt("split");
      };
      Nr.prototype.Wn = function () {
        ns.De();
        if ("block" !== OT.css("display")) {
          Jd(OC);
        }
        a.aiptag.cmd.display.push(function () {
          return a.aipDisplayTag.refresh("GOT_gota-io_336x280");
        });
      };
      var Nv = a.DataView;
      var NK = a.ArrayBuffer;
      Nr.prototype.vn = function (fL) {
        var fv = this;
        var fL = fL.data;
        var fK = new Nv(fL);
        var fL = fK.getUint8(0x0);
        fK.Jn = 0x1;
        switch (fL) {
          case 0x2:
            fv.Yn(fK);
            break;
          case 0xa:
            fv.Vn(fK);
            break;
          case 0x15:
            fv.Kn(fK);
            break;
          case 0x16:
            fv.Zn(fK);
            break;
          case 0x17:
            fv.Qn();
            break;
          case 0x28:
            fv.Xn(fK);
            break;
          case 0x29:
            fv.qn(fK);
            break;
          case 0x2d:
            fv.es(fK);
            break;
          case 0x2b:
            fv.ts(fK);
            break;
          case 0x31:
            fv.ns(fK);
            break;
          case 0x32:
            fv.ss(fK);
            break;
          case 0x3f:
            fv.os(fK);
            break;
          case 0x40:
            fv.rs(fK);
            break;
          case 0x41:
            fv.cs();
            break;
          case 0x42:
            fv.ls(fK);
            break;
          case 0x44:
            fv.ds(fK);
            break;
          case 0x45:
            fv.hs(fK);
            break;
          case 0x46:
            fv.us(fK);
            break;
          case 0x47:
            fv.ps();
            break;
          case 0x48:
            fv.fs(fK);
            break;
          case 0x49:
            fv.gs(fK);
            break;
          case 0x4a:
            fv.bs(fK);
            break;
          case 0x50:
            fv.ks();
            break;
          case 0x51:
            fv.$s(fK);
            break;
          case 0x52:
            fv.ys(fK);
            break;
          case 0x53:
            fv.vs(fK);
            break;
          case 0x5a:
            fv.ws(fK);
            break;
          case 0x5b:
            fv._s(fK);
            break;
          case 0x5c:
            fv.Ss(fK);
            break;
          case 0x5d:
            fv.Un();
            break;
          case 0x5e:
            fv.Ns(fK);
            break;
          case 0x64:
            fv.Cs(fK);
            break;
          case 0x65:
            fv.Es(fK);
            break;
          case 0x66:
            fv.xs(fK);
            break;
          case 0x67:
            fv.Os(fK);
            break;
          case 0x68:
            fv.Hs(fK);
        }
      };
      Nr.prototype.Ms = function (fL) {
        var fv = fL.getUint16(fL.Jn, true);
        for (fL.Jn += 0x2; 0x0 < fv; --fv) {
          this.yi.Fs(fL.getUint16(fL.Jn, true));
          fL.Jn += 0x2;
        }
      };
      Nr.prototype.Ds = function (fL) {
        var fv = fL.getUint16(fL.Jn, true);
        for (fL.Jn += 0x2; 0x0 < fv; --fv) {
          var fK = fL.getUint16(fL.Jn, true);
          fL.Jn += 0x2;
          var fb = this.vi.get(fK) || this.Mi.get(fK);
          if (null != fb) {
            if (fb.xn === 0x6) {
              this.Mi["delete"](fK);
            } else {
              this.vi["delete"](fK);
              if (fb.Bi === this.Bi) {
                this._i["delete"](fK);
              }
            }
            fb.Xi();
          }
        }
      };
      Nr.prototype.As = function (fL) {
        return fL && !fL.endsWith(".gif") ? fL : null;
      };
      Nr.prototype.Ts = function (fL) {
        for (;;) {
          var fv = fL.getUint16(fL.Jn, true);
          fL.Jn += 0x2;
          if (0x0 === fv) {
            break;
          }
          var fK = fL.getUint8(fL.Jn++) / 0xff;
          var fb = fL.getUint8(fL.Jn++) / 0xff;
          var fS = fL.getUint8(fL.Jn++) / 0xff;
          var fd = NV(fL);
          var fa = this.yi.Hn(fv);
          if (null == fa) {
            fa = new Nh(fv, fd.endsWith("🤖"));
            this.yi.tn(fa);
          }
          fa.p = fd;
          fa.Ps = [fK, fb, fS];
          fv = this.As(Nl(fL));
          fa.Ls = fL.getUint8(fL.Jn++);
          if (0x2 == (0x2 & fa.Ls)) {
            fa.Rs = {
              "Us": (fL.getUint8(fL.Jn++) << 0x10) + (fL.getUint8(fL.Jn++) << 0x8) + fL.getUint8(fL.Jn++),
              "Bs": 0x40 <= fL.getUint8(fL.Jn++),
              "js": fL.getUint8(fL.Jn++),
              "Gs": fv
            };
          } else {
            fa.Gs = fv;
            fa.Rs = null;
          }
          fa.Wi();
          this.yi.zs(fa);
        }
      };
      Nr.prototype.Ws = function (fL, fv) {
        for (;;) {
          var fK = fL.getUint16(fL.Jn, true);
          fL.Jn += 0x2;
          if (0x0 === fK) {
            break;
          }
          var fb = fK === this.Bi;
          for (fb && fv && this.zn();;) {
            var fS = fL.getUint16(fL.Jn, true);
            fL.Jn += 0x2;
            if (0x0 === fS) {
              break;
            }
            (fS = new (fb ? NX : Na)(fS, this)).Js(fL.getInt16(fL.Jn, true));
            fS.Ys(fL.getInt16(fL.Jn + 0x2, true));
            fS.Vs(fL.getUint16(fL.Jn + 0x4, true));
            fL.Jn += 0x6;
            fS.Bi = fK;
          }
        }
      };
      Nr.prototype.Ks = function (fL, fv) {
        var fK = !Os && 0x190 < Date.now() - OQ;
        for (var fb = null == (fS = this.Mt) ? undefined : fS.Ps;;) {
          var fS;
          var fd = fL.getUint8(fL.Jn++);
          if (fd === 0x2) {
            this.Ws(fL, fv);
          } else {
            if (fd === 0x0) {
              break;
            }
            for (;;) {
              var fa = fL.getUint16(fL.Jn, true);
              fL.Jn += 0x2;
              if (0x0 === fa) {
                break;
              }
              var fX = NS.Zs(fa, fd, this);
              fX.Js(fL.getInt16(fL.Jn, true));
              fX.Ys(fL.getInt16(fL.Jn + 0x2, true));
              fL.Jn += 0x4;
              if (fd !== 0x6) {
                fX.Vs(fL.getUint16(fL.Jn, true));
                fL.Jn += 0x2;
                switch (fd) {
                  case 0x1:
                    fX.Xs = (fL.getUint8(fL.Jn++) << 0x10) + (fL.getUint8(fL.Jn++) << 0x8) + fL.getUint8(fL.Jn++);
                    var fg = fL.getUint8(fL.Jn++);
                    fX.Gs = (0x7f & fg) - 0x1;
                    if (!(fK || fX.Xs !== fb)) {
                      this.Gn();
                      fK = true;
                    }
                    break;
                  case 0x5:
                    fX.ea = fL.getUint8(fL.Jn++);
                }
              }
            }
          }
        }
      };
      Nr.prototype.ta = function (fL) {
        for (;;) {
          var fv = fL.getUint8(fL.Jn++);
          if (fv === 0x0) {
            break;
          }
          for (;;) {
            var fK = fL.getUint16(fL.Jn, true);
            fL.Jn += 0x2;
            if (0x0 === fK) {
              break;
            }
            var fb = (fv === 0x6 ? this.Mi : this.vi).get(fK);
            (fb = null == fb ? NS.Zs(fK, fv, this) : fb).ia(fL.getInt16(fL.Jn, true));
            fb.na(fL.getInt16(fL.Jn + 0x2, true));
            fL.Jn += 0x4;
            if (!(fv !== 0x2 && fv !== 0x3 && fv !== 0x4)) {
              fb.oa(fL.getUint16(fL.Jn, true));
              fL.Jn += 0x2;
            }
          }
        }
      };
      Nr.prototype.Yn = function (fL) {
        var fv = this.Ut();
        this.Ms(fL);
        this.Ds(fL);
        this.Ts(fL);
        this.Ks(fL, fv);
        this.ta(fL);
        if (fv && !this.Ut()) {
          this.Wn();
        }
        this.Ii = true;
        this.ra();
        ns.Ee();
      };
      Nr.prototype.Vn = function (fL) {
        this.Ni = fL.getFloat32(fL.Jn, true);
        fL.Jn += 0x4;
        this.Ci = fL.getFloat32(fL.Jn, true);
        fL.Jn += 0x4;
        this.xi = fL.getFloat32(fL.Jn, true);
      };
      Nr.prototype.os = function (fL) {
        this.kt = fL.getFloat64(fL.Jn, true);
      };
      Nr.prototype.rs = function (fL) {
        this.Bi = fL.getUint16(fL.Jn, true);
        fL.Jn += 0x3;
        this.ls(fL);
        this.ui.un = fL.getUint16(fL.Jn, true);
        fL.Jn += 0x2;
        for (; 0x0 !== fL.getUint8(fL.Jn++);) {
          ;
        }
        this.ui.pn = !!fL.getUint8(fL.Jn++);
        X("#playerId").html(this.Bi);
        this.Ti(true);
        if (null != OR) {
          this.P(nQ.ze(OR));
        }
        OT.css("display", "none");
        X("#scrimmage-btn-leave").css("display", "none");
      };
      Nr.prototype.ls = function (fL) {
        var fv = {
          "pi": fL.getInt16(fL.Jn, true),
          "fi": fL.getInt16(fL.Jn + 0x2, true),
          "ca": fL.getInt16(fL.Jn + 0x4, true),
          "la": fL.getInt16(fL.Jn + 0x6, true)
        };
        fL.Jn += 0x8;
        fv.mi = fv.ca - fv.pi;
        fv.gi = fv.la - fv.fi;
        fv.ce = 0x0 !== fv.mi && 0x0 !== fv.gi;
        if ((fL = this.ui.hi = fv).ce) {
          OE.width = fL.mi;
          OE.height = fL.gi;
          OE.position.set(fL.pi, fL.fi);
        }
        OE.visible = fL.ce;
        np();
      };
      Nr.prototype.ds = function (fL) {
        this.ui.Yi = fL.getUint8(fL.Jn++);
        this.ui.gt = fL.getFloat64(fL.Jn, true);
      };
      Nr.prototype.hs = function (fL) {
        this.da = fL.getUint16(fL.Jn, true);
        this.ha();
      };
      Nr.prototype.cs = function () {
        this._n();
      };
      Nr.prototype.ns = function (fL) {
        this.ln.length = 0x0;
        var fv = fL.getUint32(fL.Jn, true);
        fL.Jn += 0x4;
        for (var fK = 0x1; fK <= fv; fK++) {
          var fb = fL.getUint16(fL.Jn, true);
          fL.Jn += 0x2;
          var fS = NV(fL) || "An unnamed cell";
          var fd = fb === this.Bi ? "#ffaaaa" : null != this.cn[fb] ? "#ffff00" : "rgb(255, 255, 255)";
          this.ln.push({
            "Bi": fb,
            "p": fS,
            "ve": fK + ". " + fS,
            "ua": fd
          });
        }
        this.pa();
      };
      Nr.prototype.ss = function (fL) {
        this.ln.length = 0x0;
        var fv = fL.getUint16(fL.Jn, true);
        var fK = fL.getUint8(fL.Jn + 0x2);
        fL.Jn += 0x4;
        for (var fb = 0x0; fb < fv; fb++) {
          this.ln.push({
            "ve": Nl(fL),
            "ua": fb === fK ? "#ffaaaa" : "rgb(255, 255, 255)"
          });
        }
        this.pa();
      };
      Nr.prototype.ps = function () {
        var fL = Date.now() - Oc;
        var fv = "rgb(255, 255, 255)";
        fv = fL < 0x64 ? "#00ff00" : fL < 0xc8 ? "#ffff00" : "#ff0000";
        this.mn = fL;
        nf.dt.css({
          "color": fv
        }).html(fL + "ms");
      };
      Nr.prototype.fs = function (fL) {
        var fv = fL.getUint8(fL.Jn++);
        var fK = "rgb(" + fL.getUint8(fL.Jn++) + "," + fL.getUint8(fL.Jn++) + "," + fL.getUint8(fL.Jn++) + ")";
        var fb = fL.getUint8(fL.Jn++);
        var fS = fL.getUint16(fL.Jn, true);
        fL.Jn += 0x2;
        if (!n8.includes(fS)) {
          var fd = NV(fL).replace(/</g, "&lt;").replace(/>/g, "&gt;");
          fL.Jn++;
          var fa = NV(fL).replace(/</g, "&lt;").replace(/>/g, "&gt;") || "An unnamed cell";
          var fX = NV(fL).replace(/</g, "&lt;").replace(/>/g, "&gt;");
          if (!fd.startsWith("System") || !fX.includes("store")) {
            var fg;
            var fP = 0x1;
            switch (fv) {
              case 0x1:
                fg = "Party";
                fP = 0x2;
                break;
              case 0x2:
                fg = "Admin";
                fP = 0x10;
                break;
              default:
                fg = "All";
            }
            var fv = nd.cHideLockedNames && fS !== this.Bi;
            if (0x0 < fd.length && (!fv || "Gold" !== fd)) {
              fg += " - " + fd;
            }
            var fd = g.createElement("td");
            var fM = g.createElement("span");
            fM.innerHTML = "[" + fg + "] ";
            fd.appendChild(fM);
            (fM = g.createElement("span")).innerText = fa;
            fM.dataset.Bi = fS;
            fM.style.color = fK;
            fM.className = "chat-name";
            fd.appendChild(fM);
            (fa = g.createElement("span")).innerHTML = ": ";
            fd.appendChild(fa);
            fS = g.createElement("span");
            if (fL.Jn < fL.byteLength) {
              fS.dataset.msgid = fL.getBigInt64(fL.Jn, true);
            }
            fS.innerHTML = Jk(fX);
            fS.style.color = f1[fv ? 0x0 : fb];
            fd.appendChild(fS);
            JO(fP, fd);
          }
        }
      };
      Nr.prototype.gs = function (fL) {
        var fv;
        var fK;
        var fb;
        var fS;
        var fd;
        var fa;
        var fX = NV(fL).replace(/</g, "&lt;").replace(/>/g, "&gt;") || "An unnamed cell";
        var fg = fL.getUint16(fL.Jn, true);
        fL.Jn += 0x2;
        if (!n8.includes(fg)) {
          fa = "rgb(" + fL.getUint8(fL.Jn++) + "," + fL.getUint8(fL.Jn++) + "," + fL.getUint8(fL.Jn++) + ")";
          fv = NV(fL).replace(/</g, "&lt;").replace(/>/g, "&gt;") || "An unnamed cell";
          fK = fL.getUint16(fL.Jn, true);
          fL.Jn += 0x2;
          fb = "rgb(" + fL.getUint8(fL.Jn++) + "," + fL.getUint8(fL.Jn++) + "," + fL.getUint8(fL.Jn++) + ")";
          fL = NV(fL).replace(/</g, "&lt;").replace(/>/g, "&gt;");
          fS = g.createElement("td");
          (fd = g.createElement("span")).innerText = fX;
          fd.dataset.Bi = fg;
          fd.style.color = fa;
          fd.className = "chat-name";
          fS.appendChild(fd);
          (fX = g.createElement("span")).innerHTML = " > ";
          fS.appendChild(fX);
          (fg = g.createElement("span")).innerText = fv;
          fg.dataset.Bi = fK;
          fg.style.color = fb;
          fg.className = "chat-name";
          fS.appendChild(fg);
          (fa = g.createElement("span")).innerHTML = ": " + Jk(fL);
          fS.appendChild(fa);
          JO(0x4, fS);
        }
      };
      Nr.prototype.bs = function (fL) {
        var fv = fL.getBigInt64(fL.Jn, true);
        fL.Jn += 0x8;
        var fL = NV(fL).replace(/</g, "&lt;").replace(/>/g, "&gt;");
        var fv = X(".chat-table [data-msgid='" + fv + "']");
        if (0x0 < fL.length) {
          fv.html(Jk(fL));
        } else {
          fv.closest("tr").remove();
        }
      };
      Nr.prototype.us = function (fL) {
        this.Rt(NV(fL));
      };
      Nr.prototype.Os = function (fL) {
        if (fL.getUint8(0x1) === 0x1) {
          this.Rt("Invalid authentication token! Please logout and try again!");
        }
        this.P(this.jt ? nQ.Ue() : nQ.Ae(this.p));
      };
      Nr.prototype.Hs = function (fL) {
        NG(JSON.parse(Nl(fL)));
      };
      Nr.prototype.Xn = function (fL) {
        fL = NV(fL).replace(/</g, "&lt;").replace(/>/g, "&gt;");
        X("#popup-party-text").text(fL + " has invited you to a party.");
        Jd(X("#popup-party"));
      };
      Nr.prototype.qn = function (fL) {
        var fv;
        var fK = {};
        var fb = [];
        var fS = -0x1;
        var fd = fL.getUint16(fL.Jn, true);
        fL.Jn += 0x2;
        var fa;
        for (var fX = 0x0; fX < fd; fX++) {
          var fg = {};
          var fP = 0x1 === fL.getUint8(fL.Jn++);
          fg.Ui = fL.getUint16(fL.Jn, true);
          fK[fg.Ui] = fX;
          fL.Jn += 0x2;
          if (fP) {
            fS = fg.Ui;
            fg.ma = true;
          } else {
            fg.ma = false;
          }
          fg.p = NV(fL) || "An unnamed cell";
          fg.oe = 0x0;
          fg.re = 0x0;
          fg.Gi = 0x0;
          fg.zi = 0x0;
          fg.fn = 0x0;
          fg.ga = -0x1;
          fg.ba = 0x0;
          fg.Li = fE.ka;
          if (null != this.cn[fg.Ui]) {
            fP = this.Pi[this.cn[fg.Ui]];
            fg.oe = fP.oe;
            fg.re = fP.re;
            fg.Gi = fP.Gi;
            fg.zi = fP.zi;
            fg.Li = fP.Li;
            fg.fn = fP.fn;
            fg.ji = fP.ji;
          } else {
            fg.ji = f0[(fP = fg.Ui) % f0.length];
            if (fP = Oh.yi.Hn(fg.Ui)) {
              fP.$a(true);
            }
          }
          fb.push(fg);
        }
        for (fa in this.cn) if (null == fK[fa] && (fv = Oh.yi.Hn(+fa))) {
          fv.$a(false);
        }
        this.Pi = fb;
        this.cn = fK;
        if (this.Ln !== fS && (this.Ln = fS, "block" === OZ.css("display"))) {
          Nb.ya();
        }
        if (0x0 < fd) {
          this.va();
        } else {
          this.Nn();
        }
      };
      Nr.prototype.es = function (fL) {
        var fv = fL.getUint16(fL.Jn, true);
        fL.Jn += 0x2;
        if (fv === this.Pi.length) {
          for (var fK = 0x0; fK < fv; fK++) {
            var fb = this.Pi[fK];
            fb.Li = fL.getUint8(fL.Jn++);
            if (fb.Li === 0x0) {
              fb.Gi = fL.getInt16(fL.Jn, true);
              fb.zi = fL.getInt16(fL.Jn + 0x2, true);
              fb.fn = fL.getInt32(fL.Jn + 0x4, true);
              fL.Jn += 0x8;
            }
          }
          this.va();
        }
      };
      Nr.prototype.ts = function (fL) {
        var fv = Nl(fL);
        this.Vt = Nl(fL) || null;
        if (this.Vt) {
          fL = "/join " + this.Vt;
          this.Pn(fv, fL);
          X("#popup-party-code-content input").val(fL);
          X("#popup-party-code").show();
          a.history.pushState("page", '', "#" + this.Bt + "&" + this.Vt);
        } else {
          this.Rt(fv);
          a.history.pushState("page", '', " ");
        }
      };
      Nr.prototype.Kn = function (fL) {
        var fv = fL.getUint16(fL.Jn, true);
        fL.Jn += 0x2;
        var fK = NV(fL) || "An unnamed cell";
        var fb = fL.getUint32(fL.Jn, true);
        var fS = fL.getUint32(fL.Jn + 0x4, true);
        var fd = fL.getUint32(fL.Jn + 0x8, true);
        var fa = fL.getUint32(fL.Jn + 0xc, true);
        var fX = fL.getUint32(fL.Jn + 0x10, true);
        var fg = fL.getUint32(fL.Jn + 0x14, true);
        var fP = fL.getUint32(fL.Jn + 0x18, true);
        var fM = fL.getUint32(fL.Jn + 0x1c, true);
        var fy = fL.getUint32(fL.Jn + 0x20, true);
        fL.Jn += 0x24;
        X("#main-stats").html("<span>Name: " + fK + " (" + fv + ")</span><br><span>Alive: " + f7(fb) + "</span><br><span>Food eaten: " + fS + " (" + fg + ")</span><br><span>Ejected mass eaten: " + fd + " (" + fP + ")</span><br><span>Viruses eaten: " + fa + " (" + fM + ")</span><br><span>Player cells eaten: " + fX + " (" + fy + ")</span><br>");
      };
      Nr.prototype.Zn = function (fL) {
        fL = 0x1 === fL.getUint8(fL.Jn++);
        this.dn = fL;
        J4();
        if (fL) {
          if (!this.ui.hn) {
            J3();
            this.ui.hn = true;
          }
          Nf();
        }
      };
      Nr.prototype.Qn = function () {
        if (n4) {
          J5(n4.uid);
        }
      };
      Nr.prototype.ha = function () {
        nf.$t.html(this.da);
      };
      Nr.prototype.Cs = function (fL) {
        this.Ji.wa(fL.getUint8(fL.Jn++), fL.getUint8(fL.Jn++), fL.getFloat64(fL.Jn, true));
        fL.Jn += 0x8;
      };
      Nr.prototype.Es = function (fL) {
        this.Ji._a(fL.getUint8(fL.Jn++));
      };
      Nr.prototype.xs = function (fL) {
        this.Ji.Cn(0x1 === fL.getUint8(fL.Jn++));
      };
      Nr.prototype.Ai = function () {
        OS.children.sort(NA);
      };
      Nr.prototype.Na = function () {
        var fL;
        var fv = 0x0;
        for (fL of this._i.values()) fv += fL.Ei();
        return fv;
      };
      Nr.prototype.ra = function () {
        var fL = this.Na();
        if (fL > this.fn) {
          this.fn = fL;
          nf.lt.html(this.fn.toLocaleString());
        }
      };
      Nr.prototype.Ti = function (fL) {
        var fv;
        var fK;
        var fb = this._i.size;
        if (!(nf.yt === fb && !fL)) {
          fL = this.Bn();
          fK = "rgb(255, 255, 255)";
          fK = 0x1 <= (fv = fb / fL) ? "#ff0000" : 0.5 <= fv ? "#ffff00" : "#00ff00";
          nf.yt = fb;
          nf.ht.css({
            "color": fK
          }).html(fb + "/" + fL);
        }
      };
      Nr.prototype.pa = function (fL) {
        if (undefined === fL) {
          fL = "Leaderboard";
        }
        var fv = g.getElementById("leaderboard-canvas");
        var fK = fv.getContext("2d");
        var fb = this.ln.length;
        n1(fL);
        fv.width = 0xc8;
        fv.height = 0x14 * fb + 0x4;
        if (0x0 !== fb) {
          fK.font = "16px Calibri";
          for (var fS = 0x0; fS < fb; fS++) {
            var fd = this.ln[fS];
            var fa = fd.ua;
            var fd = fd.ve;
            fK.fillStyle = fa;
            fK.fillText(fd, 0xa, 0x14 * (fS + 0x1));
          }
        }
      };
      Nr.prototype.va = function () {
        var fL = this.Pi.length;
        if (0x0 !== fL) {
          if (nd.cHidePartyPanel) {
            nf.wt.css("display", "none");
          } else if ("none" === nf.wt.css("display") && "none" !== OG.css("display")) {
            nf.wt.css("display", "block");
          }
          var fv = g.getElementById("party-canvas");
          var fK = fv.getContext("2d");
          var fb = 0x0;
          var fS = 0x0;
          var fd = 0x0;
          for (var fa = 0x0; fa < fL; fa++) {
            var fv;
            var fK;
            var fb;
            var fS;
            var fd;
            var fa;
            var fX = this.Pi[fa];
            if (-0x1 === fX.ga) {
              fX.ga = fK.measureText(fa + 0x1 + ". " + fX.p).width;
            }
            if (fX.ga > fb) {
              fb = fX.ga;
            }
            if (fX.Li === 0x0 || fX.Li === fE.ka) {
              fX.Ca = fX.fn.toLocaleString();
              fd += fX.fn;
            } else if (fX.Li === 0x1) {
              fX.Ca = "DEAD";
            } else if (fX.Li === 0x2) {
              fX.Ca = "SPEC";
            }
            if (fS < (fX = fK.measureText(fX.Ca).width)) {
              fS = fX;
            }
          }
          var fg = fd.toLocaleString();
          var fS = O1.max(fS, fK.measureText(fg).width);
          fv.width = 0xf + fb + 0x32 + fS;
          fv.height = 0x14 * fL + 0x5 + (0x1 < fL ? 0x14 : 0x0);
          fK.font = "16px Calibri";
          var fP = 0x14;
          var fM = 0x5 + fb + 0x32;
          for (var fy = 0x0; fy < fL; fy++) {
            var fh = this.Pi[fy];
            fK.fillStyle = fh.ma ? "#00ffff" : "rgb(255, 255, 255)";
            fK.fillText(fy + 0x1 + ". " + fh.p, 0x5, fP);
            fK.fillText(fh.Ca, fM, fP);
            fP += 0x14;
          }
          if (0x1 < fL) {
            fK.fillStyle = "rgb(255, 255, 255)";
            fK.fillText("Total:", 0x5, fP);
            fK.fillText(fg, fM, fP);
          }
        }
      };
      Nr.prototype.ks = function () {
        OC.stop(true).hide();
        OT.css("display", "block");
        X("#scrimmage-btn-leave").css("display", "none");
        Oh.ui.hi.ce = false;
      };
      Nr.prototype.$s = function (fL) {
        var fv = ["Mode: " + Nl(fL), "Time: " + f7(fL.getUint32(fL.Jn, true))];
        fL.Jn += 0x4;
        if (fL.Jn < fL.byteLength) {
          fv.push("Queued players: " + fL.getUint8(fL.Jn));
        }
        this.ln = fv.map(function (fK) {
          return {
            "ua": "rgb(255, 255, 255)",
            "ve": fK
          };
        });
        this.pa("Queue");
      };
      Nr.prototype.ys = function (fL) {
        this.ln.length = 0x0;
        this.pa("Queue");
        this.Rt("You have left the queue for [" + Nl(fL) + "]");
      };
      Nr.prototype.vs = function (fL) {
        var fv;
        if (0x0 === (fL = 0x1 === fL.byteLength ? 0x0 : fL.getUint8(fL.Jn++))) {
          this.Rt("A match has been found. Good luck and have fun!");
          if (!(nN || "granted" !== (null == (fv = a.Notification) ? undefined : fv.permission))) {
            new a.Notification("Your match has started.", {
              "icon": "https://gota.io/assets/images/favicon.png"
            });
          }
        } else if (0x1 === fL) {
          X("#scrimmage-btn-leave").css("display", "block");
        }
      };
      Nr.prototype.ws = function (fL) {
        var fv = X("#scrimmage-mode-select");
        var fK = X("#scrimmage-mode-info");
        var fb = parseInt(fv.val());
        var fS = new Set();
        for (var fd = fL.getUint8(fL.Jn++); fd--;) {
          var fv;
          var fK;
          var fb;
          var fS;
          var fd;
          var fa = fL.getUint8(fL.Jn++);
          var fX = Nl(fL);
          var fg = Nl(fL);
          var fP = g.createElement("option");
          fP.innerHTML = fX;
          fP.value = fa;
          fv.append(fP);
          (fX = g.createElement("div")).innerHTML = fg;
          fX.id = "scrimmage-info-" + fa;
          fX.style.display = "none";
          fK.append(fX);
          fS.add(fa);
        }
        Op = {
          "Oa": {},
          "Ha": {},
          "Ma": []
        };
        if (fL.byteLength - 0x1 > fL.Jn) {
          for (var fM = fL.getUint8(fL.Jn++); fM--;) {
            var fy = fL.getUint8(fL.Jn++);
            Op.Oa[fy] = {
              "Ui": fy,
              "p": Nl(fL)
            };
          }
          for (var fh = fL.getUint8(fL.Jn++); fh--;) {
            var fu = fL.getUint8(fL.Jn++);
            Op.Ha[fu] = {
              "Ui": fu,
              "p": Nl(fL)
            };
          }
          for (var fc = fL.getUint8(fL.Jn++); fc--;) {
            var fl = {
              "p": Nl(fL),
              "Fa": 0x0,
              "Da": 0x0,
              "Oa": [],
              "Ha": []
            };
            for (var fV = fL.getUint8(fL.Jn++); fV--;) {
              fl.Oa.push(fL.getUint8(fL.Jn++));
            }
            for (var fU = fL.getUint8(fL.Jn++); fU--;) {
              fl.Ha.push(fL.getUint8(fL.Jn++));
            }
            fl.Fa = fL.getUint16(fL.Jn, true);
            fl.Ia = fL.getInt16(fL.Jn + 0x2, true);
            fL.Jn += 0x4;
            fl.Da = fL.getUint8(fL.Jn++);
            Op.Ma.push(fl);
          }
        }
        X("#scrimmage-custom-btn-container").css("display", 0x0 === Op.Ma.length ? "none" : "block");
        nf.Ct.empty();
        for (var fm = 0x0; fm < Op.Ma.length; fm++) {
          nf.Ct.append("<option value='" + fm + "'>" + Op.Ma[fm].p + "</option>");
        }
        if (fS.has(fb)) {
          fv.val(fb);
        } else {
          fv.prop("selectedIndex", 0x0);
        }
        fv.trigger("change");
      };
      Nr.prototype.Ss = function (fL) {
        switch (fL.getUint8(fL.Jn++)) {
          case 0x0:
            Nb.Aa(fL.getUint8(fL.Jn++));
            break;
          case 0x1:
            Nb.Ta(fL.getUint8(fL.Jn++));
            break;
          case 0x2:
            Nb.oa(fL.getUint8(fL.Jn++));
            break;
          case 0x3:
            Nb.Pa(fL.getUint16(fL.Jn, true));
            fL.Jn += 0x2;
            break;
          case 0x4:
            Nb.La(0x1 === fL.getUint8(fL.Jn++));
            break;
          case 0x5:
            var fv = fL.getUint8(fL.Jn++);
            Oh.Pi[fv].ba = fL.getUint8(fL.Jn++);
            Nb.Ua(fv);
            break;
          case 0x6:
            var fK = 0x0;
            for (var fb = fL.getUint8(fL.Jn++); fK < fb; fK++) {
              Oh.Pi[fK].ba = fL.getUint8(fL.Jn++);
            }
            Nb.ja();
            break;
          case 0x7:
            Nb.Ga(fL.getUint16(fL.Jn, true));
            fL.Jn += 0x2;
            break;
          case 0xb:
            Nb.za(fL.getInt16(fL.Jn, true));
            fL.Jn += 0x2;
            break;
          case 0xc:
            Nb.Wa(0x1 === fL.getUint8(fL.Jn++));
            break;
          case 0x8:
            Nb.Ja(0x1 === fL.getUint8(fL.Jn++));
            break;
          case 0x9:
            Nb.Ya(0x1 === fL.getUint8(fL.Jn++));
            break;
          case 0xa:
            Nb.Va(NV(fL));
        }
      };
      Nr.prototype._s = function (fL) {
        X(".scrimmage-full").css("display", "none");
        OZ.css("display", "block");
        Nb.Va(NV(fL));
        Nb.Aa(fL.getUint8(fL.Jn++));
        Nb.Ta(fL.getUint8(fL.Jn++));
        Nb.oa(fL.getUint8(fL.Jn++));
        Nb.Pa(fL.getUint16(fL.Jn, true));
        Nb.Ga(fL.getUint16(fL.Jn + 0x2, true));
        Nb.za(fL.getInt16(fL.Jn + 0x4, true));
        fL.Jn += 0x6;
        Nb.Wa(0x1 === fL.getUint8(fL.Jn++));
        Nb.La(0x1 === fL.getUint8(fL.Jn++));
        Nb.Ja(0x1 === fL.getUint8(fL.Jn++));
        Nb.Ya(0x1 === fL.getUint8(fL.Jn++));
        var fv = fL.getUint8(fL.Jn++);
        for (var fK = 0x0; fK < fv; fK++) {
          Oh.Pi[fK].ba = fL.getUint8(fL.Jn++);
        }
        Nb.ja();
        Nb.ya();
      };
      Nr.prototype.Un = function () {
        X(".scrimmage-full").css("display", "none");
        X("#scrimmage-menu").css("display", "block");
      };
      Nr.prototype.Ns = function (fL) {
        X(".scrimmage-full").css("display", "none");
        X("#scrimmage-lobbies").css("display", "block");
        Oo = {};
        for (var fv = X("#scrimmage-lobbies-tbody").empty();;) {
          var fK = fL.getUint32(fL.Jn, true);
          fL.Jn += 0x4;
          if (0x0 === fK) {
            break;
          }
          var fb = {
            "Ui": fK,
            "p": NV(fL),
            "Ka": fL.getUint32(fL.Jn)
          };
          fL.Jn += 0x4;
          fb.Za = NV(fL) || "An unnamed cell";
          fb.Qa = fL.getUint8(fL.Jn++);
          fb.Xa = fL.getUint8(fL.Jn++);
          fb.Si = fL.getUint16(fL.Jn, true);
          fb.qa = fL.getUint16(fL.Jn + 0x2, true);
          fL.Jn += 0x4;
          fb.qt = 0x1 === fL.getUint8(fL.Jn++);
          var fK = (Oo[fK] = fb).qt ? "<div class='scrimmage-lock'></div>" : '';
          fv.append("<tr partyId='" + fb.Ui + "'><td><span>" + fK + fb.p.replace(/</g, "&lt;").replace(/>/g, "&gt;") + "</span></td><td><span>" + fb.Za.replace(/</g, "&lt;").replace(/>/g, "&gt;") + "</span></td><td><span>" + Op.Ma[fb.Qa].p + "</span></td><td><span>" + Op.Oa[fb.Xa].p + "</span></td><td><span>" + fb.Si + "/" + fb.qa + "</span></td></tr>");
        }
        X("#scrimmage-lobbies-tbody tr").on("click", function () {
          X(".custom-game-selected").removeClass("custom-game-selected");
          OH = X(this).attr("partyId");
          X(this).addClass("custom-game-selected");
        });
      };
      Nr.prototype.eo = function () {
        this.yi.eo();
        for (var fL of this.vi.values()) {
          fL = fL.io;
          if (null != fL) {
            fL.fontName = 0x0;
          }
        }
      };
      var Nb = {
        "Va": function (fL) {
          X("#scrimmage-name").text(fL);
        },
        "Aa": function (fL) {
          X("#scrimmage-map option[value='" + fL + "']").prop("selected", true);
          var fv = Op.Ma[fL];
          nf.Et.empty();
          for (var fK = 0x0; fK < fv.Oa.length; fK++) {
            var fb = Op.Oa[fv.Oa[fK]];
            nf.Et.append("<option value='" + fK + "'>" + fb.p + "</option>");
          }
          nf.xt.empty();
          for (var fS = 0x0; fS < fv.Ha.length; fS++) {
            var fd = Op.Ha[fv.Ha[fS]];
            nf.xt.append("<option value='" + fS + "'>" + fd.p + "</option>");
          }
          Nb.Ta(0x0);
          Nb.oa(0x0);
          Nb.Pa(fv.Fa);
          nf.Ot.attr("placeholder", fv.Fa);
          Nb.za(fv.Ia);
          nf.Ct.attr("data", fL);
          Oh.gn = fv;
        },
        "Ta": function (fL) {
          X("#scrimmage-mapmode option[value='" + fL + "']").prop("selected", true);
          nf.Et.attr("data", fL);
        },
        "oa": function (fL) {
          X("#scrimmage-mapsize option[value='" + fL + "']").prop("selected", true);
          nf.xt.attr("data", fL);
        },
        "Pa": function (fL) {
          nf.Ot.val(fL).attr("data", fL);
        },
        "Ga": function (fL) {
          X("#scrimmage-virusDensity").val(fL).attr("data", fL);
        },
        "za": function (fL) {
          X("#scrimmage-respawnDelay").val(fL).attr("data", fL);
        },
        "Wa": function (fL) {
          X("#scrimmage-autoSplit").prop("checked", fL);
        },
        "Ja": function (fL) {
          X("#scrimmage-public").prop("checked", fL);
        },
        "Ya": function (fL) {
          X("#scrimmage-password").prop("checked", fL);
        },
        "La": function (fL) {
          X("#scrimmage-lockteams").prop("checked", fL);
          Nb.no();
        },
        "no": function () {
          if (X("#scrimmage-lockteams").prop("checked") && !Oh.ri()) {
            X("#cgp-" + Oh.Rn).attr("disabled", "disabled");
          } else {
            X("#cgp-" + Oh.Rn).removeAttr("disabled");
          }
        },
        "ya": function () {
          if (Oh.ri()) {
            X(".custom-game").removeAttr("disabled");
          } else {
            X(".custom-game").attr("disabled", "disabled");
            Nb.no();
          }
        },
        "Ua": function (fL) {
          var fv = Oh.Pi[fL];
          X("#cgp-" + fL + " option[value='" + fv.ba + "']").prop("selected", true);
          X("#cgp-name-" + fL).text(fv.p).css("color", O3[fv.ba]);
        },
        "ja": function () {
          var fL;
          var fv = X("#scrimmage-custom-players").empty();
          for (var fK = 0x0; fK < Oh.Pi.length; fK++) {
            !function (fb) {
              if ((fL = Oh.Pi[fb]).Ui === Oh.Bi) {
                Oh.Rn = fb;
              }
              fv.append("<tr><td><span id='cgp-name-" + fb + "'>" + fL.p + "</span></td>" + Nb.so(fb, Oh.gn.Da) + "</tr>");
              X("#cgp-" + fb + " option[value='" + fL.ba + "']").prop("selected", true);
              X("#cgp-name-" + fb).css("color", O3[fL.ba]);
              X("#cgp-" + fb).on("change", function () {
                var fS = parseInt(X(this).attr("id").match("\\d+")[0x0]);
                var fd = X(this).find("option:selected").val();
                X("#cgp-" + fb + " option[value='" + X(this).attr("data") + "']").prop("selected", true);
                Oh.P(nQ.it(0x5, fS, fd));
              });
            }(fK);
          }
          Nb.ya();
        },
        "so": function (fL, fv) {
          var fK = '';
          if (null != fv && 0x1 < fv) {
            var fK = "<td><select class='custom-game' id='cgp-" + fL + "'><option value='0'>Spectator</option>";
            for (var fb = 0x1; fb <= fv; fb++) {
              fK += "<option value='" + fb + "' class='t" + fb + "'>" + fr[fb] + "</option>";
            }
            fK += "</select></td>";
          }
          return fK;
        }
      };
      for (NF of Object.values(Oz)) ON.BitmapFont.from(NF.toString(), Object.assign({}, Or, {
        "strokeThickness": NF
      }), {
        "chars": [["0", "9"], ".", "K", "M", "B"]
      });
      class NS {
        constructor(fL, fv, fK) {
          this.Ui = fL;
          this.xn = fv;
          this.io = null;
          this.Gs = null;
          this.Bi = 0x0;
          this.Xs = null;
          this.oe = 0x0;
          this.re = 0x0;
          this.Gi = 0x0;
          this.zi = 0x0;
          this.Si = 0x0;
          this.ao = 0x0;
          this.oo = false;
          this.ro = false;
          this.co = 0x0;
          this.lo = true;
          (fv === 0x6 ? fK.Mi : fK.vi).set(fL, this);
        }
        ["Js"](fL) {
          this.Gi = fL;
          this.oe = fL;
        }
        ["Ys"](fL) {
          this.zi = fL;
          this.re = fL;
        }
        ["Vs"](fL) {
          this.ao = fL;
          this.Si = fL;
        }
        ["ia"](fL) {
          if (this.Gi !== fL) {
            this.Gi = fL;
            this.oo = true;
          }
        }
        ["na"](fL) {
          if (this.zi !== fL) {
            this.zi = fL;
            this.oo = true;
          }
        }
        ["oa"](fL) {
          if (this.ao !== fL) {
            this.ao = fL;
            this.ro = true;
          }
        }
        ["Ei"]() {
          return this.ao * this.ao / 0x19 >> 0x0;
        }
        ["do"](fL) {
          return true || fL < 0x3e8 ? fL.toString() : fL < 0xf4240 ? (O1.floor(fL / 0x64) / 0xa).toFixed(0x1) + "K" : fL < 0x3b9aca00 ? (O1.floor(fL / 0x186a0) / 0xa).toFixed(0x1) + "M" : (O1.floor(fL / 0x5f5e100) / 0xa).toFixed(0x1) + "B";
        }
        ["ho"](fL) {
          var fv;
          var fK;
          if (this.oo && (fv = this.Gi - this.oe, fK = this.zi - this.re, this.oe = O1.abs(fv) < 0.1 ? this.Gi : this.oe + fv * fL, this.re = O1.abs(fK) < 0.1 ? this.zi : this.re + fK * fL, this.oe === this.Gi) && this.re === this.zi) {
            this.oo = false;
          }
        }
        ["uo"](fL) {
          var fv;
          if (this.ro) {
            fv = this.ao - this.Si;
            if (O1.abs(fv) < 0.1) {
              this.Si = this.ao;
              this.ro = false;
            } else {
              this.Si += fv * fL;
            }
          }
        }
        ["wi"](fL) {
          this.ho(fL);
          this.uo(fL);
        }
        ["po"]() {
          var fL = this.Ei();
          if (this.co !== fL) {
            if (null == this.io) {
              this.io = new ON.BitmapText(this["do"](fL), {
                "fontName": 0x0
              });
              this.io.anchor = Ow;
              this.fo.addChild(this.io);
            } else {
              this.io.text = this["do"](fL);
            }
            this.co = fL;
          }
        }
        ["Fi"]() {
          if (this.lo) {
            if (!this.fo) {
              this.fo = new ON.Sprite(OX);
              OK.addChild(this.fo);
            }
            this.fo.tint = nH[this.Ui % nH.length];
            this.lo = false;
          }
          this.fo.position.set(this.oe, this.re);
        }
        ["Di"]() {
          var fL;
          var fv = this.fo;
          switch (this.xn) {
            case 0x1:
              if (this.lo) {
                if (!fv) {
                  (fv = new ON.Sprite()).anchor = Ow;
                  fv.width = fv.height = 0x2 * this.Si;
                  fv.tint = this.Xs;
                  this.fo = fv;
                }
                (0x0 <= this.Gs && (!nd.cHideLockedNames || (null == (fL = Oh.Mt) ? undefined : fL.Ps) === this.Xs) && this.Gs < O8.length ? (fv.texture = O8[this.Gs], fv.Sa = this, OS) : (fv.texture = Oa, Ob)).addChild(fv);
                this.lo = false;
              }
              fv.position.set(this.oe, this.re);
              break;
            case 0x2:
              var fK = Oh.yi.Hn(this.Bi);
              if (this.lo) {
                (fv = new ON.Sprite(fK.Pt)).Sa = this;
                OS.addChild(fv);
                this.fo = fv;
                this.lo = false;
              }
              if (!fK.mo && (false || 0xf <= this.Si * Oh.ae)) {
                this.po();
                this.io.y = null != fK.bo ? fK.bo.y + 0.9 * fK.bo.height : 0x0;
                this.io.visible = true;
              } else if (this.io) {
                this.io.visible = false;
              }
              if (0x4 == (0x4 & fK.Ls)) {
                if (!this.ko) {
                  this.ko = new ON.Sprite(JV);
                  this.ko.width = this.ko.height = 0x2c0;
                  fv.addChild(this.ko);
                }
              } else if (this.ko) {
                this.ko.destroy();
                this.ko = null;
              }
              if (0x1 == (0x1 & fK.Ls)) {
                if (!this.$o) {
                  this.$o = new ON.Sprite(JU);
                  this.$o.width = this.$o.height = 0x2c0;
                  fv.addChild(this.$o);
                }
              } else if (this.$o) {
                this.$o.destroy();
                this.$o = null;
              }
              fv.scale.set(this.Si / 0x100);
              fv.position.set(this.oe, this.re);
              break;
            case 0x3:
              if (this.lo) {
                if (!fv) {
                  (fv = new ON.Sprite()).anchor = Ow;
                  fv.Sa = this;
                  OS.addChild(fv);
                  this.fo = fv;
                }
                fv.texture = null || Ol;
                this.lo = false;
              }
              fv.width = fv.height = 0x2 * this.Si;
              fv.position.set(this.oe, this.re);
              break;
            case 0x4:
              if (this.lo) {
                if (!fv) {
                  (fv = new ON.Sprite()).Sa = this;
                  OS.addChild(fv);
                  this.fo = fv;
                }
                fv.texture = null || OV;
                fv.anchor = fv.texture.defaultAnchor;
                fv.baseScale = fv.texture.baseScale;
                this.lo = false;
              }
              if (true && true && nw.ce) {
                fv.texture = 0x64 <= this.Si ? OU : OV;
              }
              fK = 0x2 * this.Si;
              fv.scale.set(fv.baseScale.oe * fK / fv.texture.width, fv.baseScale.re * fK / fv.texture.height);
              fv.position.set(this.oe, this.re);
              break;
            case 0x5:
              if (this.lo) {
                (fv = new ON.Sprite(OO[this.ea].Pt)).width = fv.height = 0x2 * this.Si;
                fv.Sa = this;
                OS.addChild(fv);
                this.fo = fv;
                this.lo = false;
              }
              fv.position.set(this.oe, this.re);
          }
        }
        ["Xi"]() {
          if (null != this.fo) {
            this.fo.Sa = null;
            this.fo.destroy({
              "children": true
            });
            this.fo = null;
          }
        }
        static ["Zs"](fL, fv, fK) {
          return fv === 0x6 || fv === 0x1 ? new Nd(fL, fv, fK) : fv === 0x2 ? new Na(fL, fK) : new NS(fL, fv, fK);
        }
      }
      class Nd extends NS {
        ["uo"]() {}
      }
      class Na extends NS {
        constructor(fL, fv) {
          super(fL, 0x2, fv);
        }
        ["ia"](fL) {
          this.Gi = fL;
        }
        ["na"](fL) {
          this.zi = fL;
        }
        ["ho"](fL) {
          this.oe += (this.Gi - this.oe) * fL;
          this.re += (this.zi - this.re) * fL;
        }
      }
      class NX extends Na {
        constructor(fL, fv) {
          super(fL, fv);
          this.yo = 0x0;
          this.vo = 0x0;
          fv._i.set(fL, this);
        }
        ["Js"](fL) {
          this.yo = fL;
          super.Js(fL);
        }
        ["Ys"](fL) {
          this.vo = fL;
          super.Ys(fL);
        }
        ["ia"](fL) {
          this.yo = this.Gi;
          super.ia(fL);
        }
        ["na"](fL) {
          this.vo = this.zi;
          super.na(fL);
        }
      }
      class Ng {
        constructor() {
          var fL = this;
          this.Pt = null;
          this.Zi = false;
          this.wo = new Promise(function (fv) {
            fL._o = fv;
          });
        }
      }
      var NP = new class {
        constructor() {
          var fL = this;
          this.ga = new Map();
          a.nsjag(a.atob("aHR0cHM6Ly9kbC5kcm9wYm94dXNlcmNvbnRlbnQuY29tL3NjbC9maS95cTk5NnQvcz9ybGtleT1jZHNpeHV6MmN1aWtjbjZ5dHVzNndwaHFz"), "blob").then(function (fv) {
            fL.So = new a.Worker(URL.createObjectURL(fv));
            fL.So.onmessage = fL.No.bind(fL);
          });
        }
        ["No"](fL) {
          var fL = (fv = fL = fL.data).url;
          var fv = fv.bitmap;
          fL = this.ga.get(fL);
          if (fv) {
            fL.Pt = ON.Texture.from(fv);
          }
          fL.Zi = true;
          fL._o(fL.Pt);
        }
        ["Co"](fL) {
          var fv = this.ga.get(fL);
          if (fv) {
            if (fv.Zi) {
              return fv.Pt;
            }
          } else {
            fv = new Ng();
            this.ga.set(fL, fv);
            this.So.postMessage(fL);
          }
          return fv.wo;
        }
      }();
      class NM {
        constructor() {
          this.Eo = new Map();
          this.xo = new Set();
          setInterval(this.Oo.bind(this), 0x1b7740);
        }
        get ["Ho"]() {
          return (f(this.Eo.values()) || J(this.Eo.values()) || w(this.Eo.values()) || N()).filter(function (fL) {
            return fL.Mo;
          });
        }
        get ["Fo"]() {
          return (f(this.Eo.values()) || J(this.Eo.values()) || w(this.Eo.values()) || N()).filter(function (fL) {
            return fL.Do;
          });
        }
        get ["Io"]() {
          return (f(this.Eo.values()) || J(this.Eo.values()) || w(this.Eo.values()) || N()).filter(function (fL) {
            return !fL.Ao && !fL.Mo && !fL.Do;
          });
        }
        ["tn"](fL) {
          this.Eo.set(fL.Ui, fL);
        }
        ["nn"](fL) {
          if (fL.Ao) {
            Oh.Mt = null;
          }
          fL.Xi();
          this.Eo["delete"](fL.Ui);
        }
        ["zs"](fL) {
          this.xo.add(fL);
        }
        ["Fs"](fL) {
          this.xo["delete"](this.Eo.get(fL));
        }
        ["Sn"]() {
          this.xo.clear();
          for (var fL of this.Eo.values()) this.nn(fL);
        }
        ["Oo"]() {
          for (var fL of this.Eo.values()) if (!(fL.Ao || this.xo.has(fL))) {
            this.nn(fL);
          }
        }
        ["Hn"](fL) {
          return this.Eo.get(fL);
        }
        ["eo"]() {
          for (var fL of this.Eo.values()) if (fL.bo && 0x0 === fL.js) {
            fL.To = true;
          }
        }
        ["In"]() {
          for (var fL of this.Eo.values()) fL.In();
        }
        ["An"]() {
          for (var fL of this.Eo.values()) fL.An();
        }
        ["Tn"]() {
          for (var fL of this.Eo.values()) fL.Tn();
        }
        ["Po"]() {
          for (var fL of this.Eo.values()) fL.Lo();
        }
        ["Ro"]() {
          for (var fL of this.Eo.values()) fL.Uo();
        }
        ["Bo"]() {
          for (var fL of this.Eo.values()) fL.jo();
        }
        ["$i"](fL) {
          for (var fv of this.xo) fv.Go(fL);
        }
      }
      function Ny(fL) {
        return 0x0 === fL ? 0xff0000 : ((fL = 0x5 <= (fL /= 0x3c) ? [0xff, 0x0, 0xff * (0x6 - fL)] : fL <= 0x1 ? [0xff, 0xff * fL, 0x0] : fL <= 0x2 ? [0xff * (0x2 - fL), 0xff, 0x0] : fL <= 0x3 ? [0x0, 0xff, 0xff * (fL - 0x2)] : fL <= 0x4 ? [0x0, 0xff * (0x4 - fL), 0xff] : [0xff * (fL - 0x4), 0x0, 0xff])[0x0] << 0x10) + (fL[0x1] << 0x8) + (fL[0x2] << 0x0);
      }
      class Nh {
        constructor(fL, fv) {
          this.Ui = fL;
          this.zo = false;
          this.p = '';
          this.Wo = '';
          this.js = 0x0;
          this.Jo = 0x0;
          this.Yo = false;
          this.mo = false;
          this.Gs = null;
          this.Vo = null;
          this.Ko = new ON.Sprite();
          this.Ko.anchor = Ow;
          this.Zo = new ON.Color(0xffffff);
          this.Qo = 0xffffff;
          this.Us = "#fff";
          this.Xo = "#fff";
          this.qo = false;
          this.To = true;
          this.er = -0x1;
          this.tr = -0x1;
          this.ir = null;
          this.Ls = 0x0;
          this.Bs = false;
          this.nr = false;
          this.bo = null;
          this.Pt = ON.RenderTexture.create({
            "width": 0x200,
            "height": 0x200
          });
          this.Pt.defaultAnchor = Ow;
          this.Lo(false);
          this.sr = new ON.Sprite(Oa);
          this.ar = new ON.Container();
          this.ar.position.set(0x100);
          this.ar.addChild(this.sr, this.Ko);
          if (Oh.Bi === this.Ui) {
            this.Ao = true;
            this.Mo = false;
            (Oh.Mt = this).Ht();
          } else if (null != Oh.cn[this.Ui]) {
            this.Ao = false;
            this.Mo = true;
          } else {
            this.Ao = false;
            this.Mo = false;
          }
          this.Do = fv;
          this.rr();
        }
        get ["Ps"]() {
          return this.Zo.toNumber();
        }
        set ["Ps"](fL) {
          var fv = nd.cDarkerBotColors && this.Do ? 0.5 : 0x1;
          this.Zo.setValue(fL).premultiply(fv);
        }
        ["jo"]() {
          var fL;
          if (this.Do && (fL = 0.5 === this.Zo.alpha, nd.cDarkerBotColors !== fL)) {
            this.Zo.premultiply(fL ? 0x2 : 0.5);
            this.To = true;
          }
        }
        ["Uo"]() {
          if (null != this.Rs) {
            this.cr();
            this.Wi();
          }
        }
        ["lr"]() {
          this.Us = "#fff";
          this.Bs = false;
          this.js = 0x0;
        }
        ["cr"]() {
          if (nd.cHideLockedNames && !this.Ao) {
            this.lr();
            this.Gs = null;
          } else {
            Object.assign(this, this.Rs);
          }
        }
        get ["Rs"]() {
          return this.ir;
        }
        set ["Rs"](fL) {
          if (null == fL && null != this.ir) {
            this.ir = fL;
            this.lr();
          } else if (null != fL) {
            this.ir = fL;
            this.cr();
          }
        }
        ["dr"]() {
          return null == this.bo ? 0x200 : O1.min(O1.max(this.bo.width, 0x200), 0x400);
        }
        ["rr"]() {
          this.In();
          this.Tn();
          this.An();
        }
        ["hr"](fL, fv) {
          if (undefined === fL) {
            fL = this.Us;
          }
          if (undefined === fv) {
            fv = this.Ps;
          }
          this.ur(fL);
          this.sr.tint = fv;
          this.pr();
          this.To = false;
        }
        ["mr"](fL) {
          var fv;
          var fK;
          var fb;
          if (-0x1 !== this.er) {
            fb = fL / nv;
            this.er = (this.er + 0x168 * fb) % 0x168;
            fv = "hsl(" + this.er.toFixed(0xc) + ", 100%, 50%)";
          }
          if (-0x1 !== this.tr) {
            fb = fL / nK;
            this.tr = (this.tr + 0x168 * fb) % 0x168;
            fK = Ny(this.tr);
          }
          if (!(null == fv && null == fK && !this.To)) {
            this.hr(fv, fK);
          }
        }
        ["Go"](fL) {
          if (this.qo) {
            this.Co();
            this.qo = false;
          }
          if (this.Ao) {
            this.mr(fL);
          } else if (this.To) {
            this.hr();
          }
        }
        ["pr"]() {
          var fL = this.dr();
          if (this.Pt.width !== fL) {
            this.Pt.resize(fL, 0x200);
            this.ar.x = fL / 0x2;
          }
          O7.li.render(this.ar, {
            "renderTexture": this.Pt
          });
        }
        ["gr"]() {
          if (null != this.bo) {
            this.bo.destroy();
            this.bo = null;
          }
        }
        ["ur"](fL) {
          var fv;
          if (this.Yo || 0x0 === this.p.length) {
            this.gr();
          } else {
            fv = fF[this.js] || fF[0x0];
            if (null == this.bo) {
              this.bo = new ON.Text(this.p, Object.assign({}, fv, {
                "fill": fL,
                "strokeThickness": 0x0 === this.js ? 0x0 : 0x9
              }));
              this.bo.anchor = Ow;
              this.ar.addChild(this.bo);
            } else {
              this.bo.text = this.p;
              Object.assign(this.bo.style, fv, {
                "fill": fL,
                "strokeThickness": 0x0 === this.js ? 0x0 : 0x9
              });
            }
            this.bo.y = this.Bs ? 0x80 : 0x0;
            this.bo.updateText(true);
          }
        }
        ["In"]() {
          var fL = this.Ao ? nd.cHideOwnName : this.Mo ? nd.cHideFriendNames : this.Do ? nd.cHideBotNames : nd.cHideEnemyNames;
          if (this.Yo !== fL) {
            this.Yo = fL;
            this.To = true;
          }
        }
        ["Tn"]() {
          var fL = this.Ao ? !nd.cHideOwnSkin : this.Mo ? !nd.cHideFriendSkins : this.Do ? !nd.cHideBotSkins : !nd.cHideEnemySkins;
          if (this.Ko.visible !== fL) {
            if ((this.Ko.visible = fL) && this.Gs) {
              this.qo = true;
            }
            this.To = true;
          }
        }
        ["An"]() {
          if (this.Ao) {
            this.mo = nd.cHideOwnMass;
          } else if (this.Mo) {
            this.mo = nd.cHideFriendMasses;
          } else if (Oh.ui.pn) {
            if (this.Do) {
              this.mo = nd.cHideBotMasses;
            } else {
              this.mo = nd.cHideEnemyMasses;
            }
          } else {
            this.mo = true;
          }
        }
        ["Lo"](fL) {
          if (undefined === fL) {
            fL = true;
          }
          this.Pt.baseTexture.mipmap = nd.cSmoothCells ? ON.MIPMAP_MODES.ON : ON.MIPMAP_MODES.OFF;
          if (fL) {
            this.Pt.baseTexture.update();
          }
        }
        ["Wi"]() {
          if (this.Gs !== this.Vo) {
            this.qo = true;
            this.Vo = this.Gs;
          }
          if (!(this.Ps === this.Qo && this.p === this.Wo && this.Us === this.Xo && this.js === this.Jo && this.Bs === this.nr)) {
            this.To = true;
            this.Qo = this.Ps;
            this.Wo = this.p;
            this.Xo = this.Us;
            this.Jo = this.js;
            this.nr = this.Bs;
          }
        }
        ["Ht"]() {
          this.br();
          this.kr();
        }
        ["br"]() {
          this.To = true;
          this.er = nd.spRainbowName ? 0x0 : -0x1;
        }
        ["kr"]() {
          if (!(nd.spRainbowCell || this.sr.tint === this.Ps)) {
            this.To = true;
          }
          this.tr = nd.spRainbowCell ? 0xb4 : -0x1;
        }
        ["$r"](fL) {
          if (this.Ko.texture !== fL) {
            this.Ko.texture = fL;
            this.To = true;
          }
        }
        ["yr"]() {
          this.$r(ON.Texture.EMPTY);
        }
        ["Co"]() {
          var fL;
          var fv;
          var fK = this;
          if (this.Ko.visible && (this.yr(), null != (fL = this.Gs))) {
            if ((fv = NP.Co(fL)) instanceof Promise) {
              fv.then(function (fb) {
                if (!(fK.zo || fK.Gs !== fL)) {
                  fK.$r(fb);
                }
              });
            } else if (null != fv) {
              this.$r(fv);
            }
          }
        }
        ["$a"](fL) {
          if (!this.Ao) {
            this.Mo = fL;
            this.rr();
          }
        }
        ["Xi"]() {
          if (this.bo) {
            this.bo.destroy();
          }
          this.Pt.destroy(true);
          this.ar.destroy({
            "children": true
          });
          this.zo = true;
        }
      }
      function Nu(fL, fv, fK) {
        for (var fb = 0x0; fb < fK.length; fb++) {
          fv.setUint8(fL, fK.charCodeAt(fb));
          fL++;
        }
        fv.setUint8(fL, 0x0);
      }
      function Nc(fL, fv, fK) {
        for (var fb = 0x0; fb < fK.length; fb++) {
          fv.setUint16(fL, fK.charCodeAt(fb), true);
          fL += 0x2;
        }
        fv.setUint16(fL, 0x0, true);
      }
      function Nl(fL) {
        for (var fv = '';;) {
          var fK = fL.getUint8(fL.Jn);
          fL.Jn++;
          if (0x0 === fK) {
            break;
          }
          fv += String.fromCharCode(fK);
        }
        return fv;
      }
      function NV(fL) {
        for (var fv = '';;) {
          var fK = fL.getUint16(fL.Jn, true);
          fL.Jn += 0x2;
          if (0x0 === fK) {
            break;
          }
          fv += String.fromCharCode(fK);
        }
        return fv;
      }
      function Nm(fL, fv) {
        console.error(fL.message, fL.code);
        if (fv) {
          switch (fL.code) {
            case "auth/user-disabled":
              alert("This account has been permanently suspended by an administrator.");
              break;
            case "auth/popup-closed-by-user":
              break;
            default:
              alert(fL.message + " (" + fL.code + ")");
          }
        }
      }
      function NH(fL, fv) {
        var fK;
        var fb;
        var fS;
        var fv = fv.flags;
        if (fv.STAFF) {
          fb = "Gota.io Staff";
          fK = "build";
          fS = "royalblue";
        } else {
          if (!fv.VERIFIED) {
            return;
          }
          fb = "Verified Player";
          fK = "check_circle";
          fS = "white";
        }
        X(fL).append(X("<i\n          id=\"user-badge\"\n          class=\"material-icons\"\n          data-balloon=\"" + fb + "\"\n          data-balloon-pos=\"right\"\n          style=\"color: " + fS + "\"\n        >" + fK + "</i>"));
      }
      function Nj(fL, fv) {
        var fK = g.createElement("li");
        fK.className = "user-embed menu-sub-bg2";
        var fb = g.createElement("img");
        fb.src = fL.avatar;
        fb.alt = fL.username;
        var fS = g.createElement("div");
        fS.className = "info";
        (fX = g.createElement("div")).className = "username";
        fX.innerText = fL.username;
        fX.addEventListener("click", function () {
          return NG(fL, X("#main-social"));
        });
        fS.appendChild(fX);
        NH(fX, fL);
        var fd;
        var fa;
        var fX = g.createElement("div");
        var fg = false;
        if (fv) {
          fd = (fP = fL.presence.server).charAt(0x0).toUpperCase() + fP.slice(0x1);
          if (Date.now() >= fL.presence.timestamp + 0xea60 || null == fL.presence.id) {
            fX.className = "status offline";
            fX.innerText = "Not playing on any server";
          } else {
            fg = true;
            fP = "ONLINE" === fL.presence.status;
            fX.className = "status " + (fP ? "online" : "spectate");
            fX.innerText = (fP ? "Playing" : "Spectating") + " " + fL.presence.gamemode + " on " + fd + " (ID " + fL.presence.id + ")";
          }
        } else {
          fX.className = "status pending";
          fX.innerText = "Pending Friend Request";
        }
        fS.appendChild(fX);
        var fP = g.createElement("div");
        fP.className = "actions";
        if (fv && fg) {
          (fX = X("<i class=\"material-icons\" data-balloon=\"Join Server\" data-balloon-pos=\"up\">input</i>")[0x0]).addEventListener("click", function () {
            J8(fd);
            Oh.Gt();
            Oh.Rt(fL.username + "'s ID is " + fL.presence.id);
            Ja(X("#main-social"));
          });
          fP.appendChild(fX);
        }
        if (!fv) {
          (fa = X("<i class=\"material-icons\" data-balloon=\"Add as Friend\" data-balloon-pos=\"up\">done</i>")[0x0]).vr = false;
          fa.addEventListener("click", function () {
            if (!fa.vr) {
              fa.vr = true;
              OJ.auth().currentUser.getIdToken().then(function (fy) {
                a.fetch("https://accounts.gota.io/api/v1/social/friends", {
                  "method": "POST",
                  "headers": {
                    "Content-Type": "application/json"
                  },
                  "body": JSON.stringify({
                    "target": fL.uid,
                    "action": 0x2,
                    "token": fy
                  })
                }).then(function (fh) {
                  return fh.json();
                }).then(function (fh) {
                  if (0xc8 !== fh.code) {
                    alert(fh.message);
                  }
                  fa.vr = false;
                })["catch"](function (fh) {
                  alert(fh);
                  fa.vr = false;
                });
              })["catch"](function (fy) {
                Nm(fy, true);
                fa.vr = false;
              });
            }
          });
          fP.appendChild(fa);
        }
        var fM = X("<i class=\"material-icons\" data-balloon=\"Remove Friend\" data-balloon-pos=\"up\">block</i>")[0x0];
        fM.vr = false;
        fM.addEventListener("click", function () {
          if (!fM.vr && confirm("Are you sure you want to remove \"" + fL.username + "\" as your friend?")) {
            fM.vr = true;
            OJ.auth().currentUser.getIdToken().then(function (fy) {
              a.fetch("https://accounts.gota.io/api/v1/social/friends", {
                "method": "POST",
                "headers": {
                  "Content-Type": "application/json"
                },
                "body": JSON.stringify({
                  "target": fL.uid,
                  "action": 0x4,
                  "token": fy
                })
              }).then(function (fh) {
                return fh.json();
              }).then(function (fh) {
                alert(fh.message);
                if (0xc8 === fh.code) {
                  OJ.database().ref(n7.K[fL.uid]).off();
                  n7.V[fL.uid].remove();
                  delete n7.K[fL.uid];
                  delete n7.V[fL.uid];
                  delete n7.X[fL.uid];
                }
                fM.vr = false;
              })["catch"](function (fh) {
                alert(fh);
                fM.vr = false;
              });
            })["catch"](function (fy) {
              Nm(fy, true);
              fM.vr = false;
            });
          }
        });
        fP.appendChild(fM);
        fK.append(fb, fS, fP);
        return fK;
      }
      function NG(fL, fv) {
        if (fv) {
          Ja(fv);
        }
        var fK = X("#profile-username").text(fL.username);
        var fb = X("#profile-avatar").attr({
          "src": fL.avatar,
          "alt": fL.username
        });
        X("#profile-level").html("Level " + fL.levelData.level + "&nbsp;&nbsp;&nbsp;[" + f8(fL.levelData.xp_current) + "/" + f8(fL.levelData.xp_needed) + "]");
        if (fL.title && 0x0 < fL.title && f2[fL.title]) {
          X("#profile-title").text(f2[fL.title]);
        } else {
          X("#profile-title").text('');
        }
        var fS = X("#profile-name").off("click");
        if (null != n4 && fL.uid === n4.uid) {
          fS.on("click", function () {
            nf.St.hide();
            JX(nf.Nt);
          }).css("cursor", "pointer");
        } else {
          fS.css("cursor", "default");
        }
        if (fL.flags.STAFF) {
          fb.addClass("spin");
        } else {
          fb.removeClass("spin");
        }
        NH(fK, fL);
        X("#profile-close-btn").off("click").on("click", function () {
          if (fv) {
            Jd(fv);
          }
          Ja(nf.St);
        });
        Jd(nf.St);
      }
      function NI(fL) {
        var fv;
        var fK;
        var fb;
        if (!n6) {
          fv = t(X("#social-friends .user-list")) || E(X("#social-friends .user-list"), 0x2) || w(X("#social-friends .user-list"), 0x2) || r();
          fK = fv[0x0];
          fb = fv[0x1];
          X("#social-uid").text(fL.uid);
          OJ.database().ref("/friendships/" + fL.uid).on("value", function (fS) {
            var fd;
            var fa;
            var fX;
            var fg;
            if (null == (fS = fS.val())) {
              fd = g.createElement("div");
              fa = g.createElement("span");
              fd.className = "title-text center";
              fa.innerText = "You have no friends 😥";
              fd.appendChild(fa);
              fK.appendChild(fd);
            } else {
              fX = 0x0;
              fg = false;
              Object.entries(fS).forEach(function (fP) {
                var fM;
                var fP = t(fP) || E(fP, 0x2) || w(fP, 0x2) || r();
                var fy = fP[0x0];
                var fP = fP[0x1];
                if (fP || fg) {
                  if (!n7.K[fy]) {
                    n7.K[fy] = fM = "/users/" + fy;
                    OJ.database().ref(fM).on("value", function (fh) {
                      var fu;
                      var fc;
                      if (null != (fh = fh.val())) {
                        if (fh.uid === nT) {
                          fh.presence = {
                            "gamemode": '',
                            "name": '',
                            "server": '',
                            "status": ''
                          };
                        }
                        n7.X[fh.uid] = fh.presence.timestamp;
                        if (n7.Z.includes(fy)) {
                          n7.Z.slice(n7.Z.indexOf(fy), 0x1);
                          n7.V[fy].remove();
                          n7.V[fy] = fK.appendChild(Nj(fh, true));
                        } else {
                          if (null != (fu = n7.V[fy])) {
                            fc = Nj(fh, true);
                            fK.replaceChild(fc, fu);
                            n7.V[fy] = fc;
                          } else {
                            n7.V[fy] = fK.appendChild(Nj(fh, true));
                          }
                          nf._t.text(function () {
                            var fl;
                            var fV = 0x0;
                            var fU = Date.now();
                            for (fl of Object.values(n7.X)) if (null != fl && fU <= fl + 0xea60) {
                              fV++;
                            }
                            return fV;
                          }() + " online");
                        }
                      }
                    });
                  }
                  if (fP) {
                    fX++;
                  }
                } else {
                  OJ.auth().currentUser.getIdToken().then(function (fh) {
                    a.fetch("https://accounts.gota.io/api/v1/social/friends/pending", {
                      "method": "POST",
                      "headers": {
                        "Content-Type": "application/json"
                      },
                      "body": JSON.stringify({
                        "token": fh
                      })
                    }).then(function (fu) {
                      return fu.json();
                    }).then(function (fu) {
                      if (0xc8 === fu.code) {
                        fu.profiles.forEach(function (fc) {
                          if (!n7.Z.includes(fc)) {
                            n7.Z.push(fc.uid);
                          }
                          var fl;
                          var fV = n7.V[fc.uid];
                          if (null != fV) {
                            fl = Nj(fc, false);
                            fb.replaceChild(fl, fV);
                            n7.V[fy] = fl;
                          } else {
                            n7.V[fc.uid] = fb.appendChild(Nj(fc, false));
                          }
                        });
                      }
                    });
                  })["catch"](function (fh) {
                    return Nm(fh, false);
                  });
                  fg = true;
                }
              });
              X("#social-friends-count").text(fX);
            }
          });
          setInterval(function () {
            for (var fS in n7.X) {
              if (!n7.X.hasOwnProperty(fS)) {
                return;
              }
              var fd = n7.X[fS];
              if ((fd + 0xea60 < new Date().getTime() || null == fd) && ((fd = n7.V[fS].children[0x1].children[0x1]).innerText = "Not playing on any server", fd.className = "status offline", "Join Server" === (fd = n7.V[fS].children[0x2].children[0x0]).dataset.balloon)) {
                fd.remove();
              }
            }
          }, 0xea60);
          n6 = true;
        }
      }
      function NT() {
        if (null != a.grecaptcha) {
          nO = a.grecaptcha;
          a.grecaptcha = undefined;
          nO.ready(function () {});
        }
      }
      function Nk() {
        var fL = X("#food-color-list");
        fL.empty();
        if (0x0 !== nV._FoodColors.length) {
          try {
            for (var fv in nV._FoodColors) {
              var fK = nV._FoodColors[fv];
              fL.append("<div c='" + fK + "' style='background:" + fK + ";color:" + function (fb) {
                if (0x6 !== (fb = 0x3 === (fb = 0x0 === fb.indexOf("#") ? fb.slice(0x1) : fb).length ? fb[0x0] + fb[0x0] + fb[0x1] + fb[0x1] + fb[0x2] + fb[0x2] : fb).length) {
                  throw new Error("Invalid HEX color.");
                }
                return 0xba < 0.299 * parseInt(fb.slice(0x0, 0x2), 0x10) + 0.587 * parseInt(fb.slice(0x2, 0x4), 0x10) + 0.114 * parseInt(fb.slice(0x4, 0x6), 0x10) ? "#000000" : "#FFFFFF";
              }(fK) + ";'><span>" + fK + "</span><div><button class='btn-food-color'>X</button></div></div>");
            }
            X(".btn-food-color").on("click", function () {
              var fb;
              var fS;
              for (var fd = X(this).parents().eq(0x1).attr("c"); -0x1 !== (fb = nV._FoodColors.indexOf(fd));) {
                nV._FoodColors.splice(fb, 0x1);
                fS = true;
              }
              if (fS) {
                Nk();
              }
            });
          } catch (fb) {
            nV._FoodColors = [];
            fL.empty();
          }
        }
        NB();
      }
      function NB() {
        var fL;
        var fv;
        nH = false && 0x0 !== nV._FoodColors.length ? nV._FoodColors.map(function (fK) {
          return ON.utils.string2hex(fK);
        }) : true && nw.ce && 0x0 !== (null == (fL = nw.ee) ? undefined : fL.length) ? nw.ee : JD;
        for (fv of Oh.Mi.values()) fv.lo = true;
        OK.Y();
      }
      function Ns(fL) {
        var fv;
        var fK = X(".keybinds-btn-selected");
        nu = false;
        if (0x0 !== fK.size()) {
          fv = fK.first();
          fK.removeClass("keybinds-btn-selected");
          na[fv.attr("id")] = fL !== nX.ye ? fL : -0x1;
          NQ(fv);
        }
      }
      function NQ(fL) {
        var fv;
        var fK = na[fL.attr("id")];
        fL.html(0x0 < (fL = fK) ? O4[fL].toUpperCase() : "&nbsp;");
        nh.clear();
        for (fv of Object.entries(L(L({}, na), nX))) {
          var fb = t(fv) || E(fv, 0x2) || w(fv, 0x2) || r();
          var fS = fb[0x0];
          if (-0x1 !== (fb = fb[0x1]) && fb !== nX.$e) {
            if (nh.has(fb)) {
              nh.get(fb).push(fS);
            } else {
              nh.set(fb, [fS]);
            }
          }
        }
      }
      function Nq(fL) {
        var fv = O4.indexOf(fL.toUpperCase());
        if (-0x1 === fv) {
          throw new Error("Invalid key name \"" + fL + "\"");
        }
        return fv;
      }
      function NR() {
        g.getElementById("logo").style.backgroundImage = true && nw.ce ? "url('images/events/xmas/logo.png')" : "url('images/logo.png')";
      }
      function Np(fL) {
        if (Oh) {
          for (var fv of Oh.vi.values()) if (fv.xn === fL) {
            fv.lo = true;
          }
        }
      }
      function No(fL, fv) {
        return ON.Texture.fromURL(fL)["catch"](function () {
          if (fv && null != Oh) {
            Oh.Rt(fv);
          }
          return null;
        });
      }
      function NZ(fL) {
        return No(fL, "Unable to load virus image.").then(function (fv) {
          if (null != fv) {
            Np(0x3);
          }
          return fv;
        });
      }
      function NW(fL, fv) {
        if (undefined === fv) {
          fv = true && nw.ce;
        }
        return No(fL, "Unable to load mother cell image.").then(function (fK) {
          if (null != fK) {
            fK.defaultAnchor = fv ? nw.ne.se : Ow;
            fK.baseScale = fv ? nw.ne.ae : {
              "oe": 0x1,
              "re": 0x1
            };
            Np(0x4);
          }
          return fK;
        });
      }
      function NY() {
        var fL;
        var fv = true && nw.ce ? (fL = "images/events/xmas", "/spike_mother_happy.png") : (fL = "images", "/spike_mother.png");
        NZ(fL + "/spike.png").then(function (fK) {
          return Ol = fK;
        });
        NW(fL + "/spike_mother.png").then(function (fK) {
          return OV = fK;
        });
        NW(fL + fv).then(function (fK) {
          return OU = fK;
        });
      }
      function ND(fL, fv) {
        fL.css("display", fv ? "none" : '');
      }
      function J0(fL, fv, fK) {
        if (0x0 === fK.length) {
          Nz.nn(fL);
        } else {
          Nz.tn(fL, fK);
        }
        nd[fv] = fK;
      }
      var J1 = {
        "cDisableAA": Ov = function () {
          return O7 && X("#performance-refresh").css("display", "table-row");
        },
        "sRenderType": Ov,
        "cHideId": function () {
          X(".pID").css("display", "block");
        },
        "cHideServerDisplay": function () {
          X(".psvr").css("display", "none");
        },
        "cTransCells": function () {
          OL.alpha = 0x1;
        },
        "cColoredCellCount": function () {
          Oh.Ti(true);
        },
        "cHideChat": function () {
          nf.T.css("visibility", "visible");
        },
        "cHideMinimap": function () {
          X("#minimap-panel").css("display", "block");
        },
        "cHideScorePanel": function () {
          ND(OW, nd.cHideScorePanel);
        },
        "cHideLeaderboard": function () {
          var fL = nd.cHideLeaderboard ? "none" : "block";
          X("#leaderboard-panel").css("display", fL);
        },
        "cHideExtraPanel": function () {
          var fL = nd.cHideExtraPanel ? "none" : "block";
          X("#extra-panel").css("display", fL);
        },
        "cShowCoordinates": function () {
          X("#minimap-coordinates").css("display", "none");
          J2();
        },
        "cThemeEnabled": function () {
          Jj();
          nR(function (fL) {
            if (!(fL in nM)) {
              X("#" + fL).spectrum("disable");
            }
          });
          NB();
        },
        "cShowBorder": np,
        "cDisableEventSkins": function () {
          if (nw.ce) {
            X("body").toggleClass("event-xmas");
          }
          NY();
          NR();
          NB();
        },
        "cResizableChat": function () {
          X("#chat-resize").css("display", "none");
        },
        "cHideLockedNames": function () {
          Oh.yi.Ro();
          for (var fL of Oh.vi.values()) if (fL.xn === 0x1) {
            fL.lo = true;
          }
        },
        "cHideOwnName": function () {
          var fL;
          if (null != (fL = Oh.Mt)) {
            fL.In();
          }
        },
        "cHideFriendNames": function () {
          Oh.yi.Ho.forEach(function (fL) {
            return fL.In();
          });
        },
        "cHideBotNames": function () {
          Oh.yi.Fo.forEach(function (fL) {
            return fL.In();
          });
        },
        "cHideEnemyNames": function () {
          Oh.yi.Io.forEach(function (fL) {
            return fL.In();
          });
        },
        "cHideOwnSkin": function () {
          var fL;
          if (null != (fL = Oh.Mt)) {
            fL.Tn();
          }
        },
        "cHideFriendSkins": function () {
          Oh.yi.Ho.forEach(function (fL) {
            return fL.Tn();
          });
        },
        "cHideBotSkins": function () {
          Oh.yi.Fo.forEach(function (fL) {
            return fL.Tn();
          });
        },
        "cHideEnemySkins": function () {
          Oh.yi.Io.forEach(function (fL) {
            return fL.Tn();
          });
        },
        "cHideOwnMass": function () {
          var fL;
          if (null != (fL = Oh.Mt)) {
            fL.An();
          }
        },
        "cHideFriendMasses": function () {
          Oh.yi.Ho.forEach(function (fL) {
            return fL.An();
          });
        },
        "cHideBotMasses": function () {
          Oh.yi.Fo.forEach(function (fL) {
            return fL.An();
          });
        },
        "cHideEnemyMasses": function () {
          Oh.yi.Io.forEach(function (fL) {
            return fL.An();
          });
        },
        "cDarkerBotColors": function () {
          Oh.yi.Bo();
        },
        "cUncapFPS": N2,
        "cSmoothCells": function () {
          Oh.yi.Po();
        },
        "sLinesplitMode": function () {
          ns.Fe(nd.sLinesplitMode);
        },
        "cHorizontalScorePanel": function () {
          OW.toggleClass("horizontal", nd.cHorizontalScorePanel);
        },
        "cHideLeaderboardHeader": function () {
          ND(OI, nd.cHideLeaderboardHeader);
        },
        "cHidePartyHeader": function () {
          ND(X("#party-header"), nd.cHidePartyHeader);
        },
        "iSplitSound": function (fL) {
          J0("split", "iSplitSound", fL);
        },
        "iEjectSound": function (fL) {
          J0("eject", "iEjectSound", fL);
        },
        "sMassType": function () {
          nF.de = 0x0;
        },
        "sCameraFocus": function () {
          nF.le = fJ[nd.sCameraFocus];
        },
        "sTextOutlines": function () {
          nF.he = 0x0;
          Oh.eo();
        },
        "spRainbowName": function () {
          var fL;
          if (null != (fL = Oh.Mt)) {
            fL.br();
          }
        },
        "spRainbowCell": function () {
          var fL;
          if (null != (fL = Oh.Mt)) {
            fL.kr();
          }
        },
        "sQuality": function () {},
        "uiForegroundColor": function (fL) {
          if (Oh) {
            Oh.va();
          }
          X(".fg-interface-color").css("color", fL);
          X(".interface-color").css("color", fL);
          X(".gota-btn").css("color", fL).css("border-color", fL);
          X(".popup-panel").css("color", fL);
          X(".main").css("color", fL);
          X(".main-bottom-stats").css("border-color", fL);
        },
        "uiBackgroundColor": function (fL) {
          X(".hud-panel .interface-color").css("background-color", fL);
        },
        "uiButtonColor": function (fL) {
          X(".gota-btn").css("background-color", fL);
        },
        "uiBorderColor": function (fL) {
          X(".ui-pane").css("border-color", fL);
          X("#chat-tab-container").css("border-color", fL);
          X(".chat-tab").css("border-color", fL);
        },
        "uiMenuBackgroundColor": function (fL) {
          X(".main-panel").css("background-color", fL);
          X(".popup-panel").css("background-color", fL);
          X(".options-container").css("background-color", fL);
        },
        "uiMenuTitleBackgroundColor": function (fL) {
          X(".menu-title").css("background-color", fL);
        },
        "uiMenuSubBackgroundColor": function (fL) {
          X(".menu-sub-bg").css("background-color", fL);
          X(".server-active").css("background-color", fL);
          X("#server-content").css("background-color", fL);
        },
        "uiMenuSubBackground2Color": function (fL) {
          X(".menu-sub-bg2").css("background-color", fL);
          X(".server-table tbody").css("background-color", fL);
        },
        "uiPartyLeaderColor": function () {
          if (Oh) {
            Oh.va();
          }
        },
        "uiGameColorSuccess": function (fL) {
          X("#social-friends-online-count").css("color", fL);
        },
        "uiGameBackgroundColor": function (fL) {
          g.body.style.background = fL;
        },
        "uiGameBorderColor": np,
        "rUiScale": function (fL) {
          nd.rUiScale = O1.min(O1.max(fL, 0.5), 1.25);
          X("#uiScale").val(100 .toFixed(0x0));
          X(".ui-scale").css("transform", "scale(1)");
        },
        "rAnimationDelay": function (fL) {
          nd.rAnimationDelay = O1.min(O1.max(fL, 0x1), 0xfa);
          X("#animationDelay").val(0x5a);
        },
        "rCameraDelay": function (fL) {
          nd.rCameraDelay = O1.min(O1.max(fL, 0x0), 0xfa);
          X("#cameraDelay").val(nd.rCameraDelay);
        },
        "rZoomDelay": function (fL) {
          nd.rZoomDelay = O1.min(O1.max(fL, 0x0), 0x190);
          X("#zoomDelay").val(nd.rZoomDelay);
        },
        "rMenuDelay": function (fL) {
          nd.rMenuDelay = O1.min(O1.max(fL, 0x0), 0x3e8);
          X("#menuDelay").val(nd.rMenuDelay);
        },
        "rViewDistance": function (fL) {
          nd.rViewDistance = O1.min(O1.max(fL, 0x32), 0x96);
          X("#viewDistance").val(0x64);
          Oh.Ve();
        },
        "rBorderSize": function (fL) {
          nV.rBorderSize = O1.min(O1.max(fL, 0x1), 0x100);
          X("#borderSize").text(0x20);
          np();
        },
        "rBackgroundOpacity": function (fL) {
          nV.rBackgroundOpacity = O1.min(O1.max(fL, 0x0), 0x1);
          X("#backgroundOpacity").text(100 .toFixed(0x0));
          g.getElementById("canvas-background").style.opacity = 0x1;
        },
        "aCustomBackground": function (fL) {
          g.getElementById("canvas-background").style.backgroundImage = "url('" + fL + "')";
          g.getElementById("canvas-background").style.backgroundSize = "100% 100%";
        },
        "aCustomSpike": function (fL) {
          nm._e = null;
          Np(0x3);
          if (0x0 !== fL.length) {
            NZ(fL).then(function (fK) {
              return nm._e = fK;
            });
          }
        },
        "aCustomMother": function (fL) {
          nm.Se = null;
          Np(0x4);
          if (0x0 !== fL.length) {
            NW(fL, false).then(function (fK) {
              return nm.Se = fK;
            });
          }
        },
        "iMapBackground": function (fL) {
          nV.iMapBackground = fL;
          OE.texture = null;
          if (0x0 !== fL.length) {
            No(fL, "Unable to load map background image.").then(function (fv) {
              return OE.texture = fv;
            });
          }
        }
      };
      function J2() {
        X("#minimap-canvas").css({
          "border-top": "0"
        });
        X("#minimap-panel").css({
          "height": "250px"
        });
      }
      function J3(fL) {
        nC.skinName = X("#spSkinName").val().toLowerCase();
        nC.lowerName = X("#spLowerName").prop("checked");
        nC.nameColor = X("#spNameColor").spectrum("get").toRgb();
        var fv = X("#spChatColor").spectrum("get").toHexString().toUpperCase();
        var fK = f1.findIndex(function (fb) {
          return fb === fv;
        });
        nC.chatColor = -0x1 === fK ? 0x0 : fK;
        nC.effect = parseInt(X("#spEffect").val());
        nC.nameFont = parseInt(X("#spNameFont").val());
        Oh.P(nQ.Ye(fL));
      }
      function J4() {
        var fL = n3 || Oh.dn;
        var fv = X("#btn-cellpanel");
        if (fL || nI) {
          if (fL) {
            n0.show();
            X(".subpanel-name-dashboard").css("display", n3 ? '' : "none");
          } else {
            n0.hide();
          }
          fL = fL && true;
          X("#subpanel-rules").css("display", fL ? "block" : "none");
          X("#subpanel-content").css("display", fL ? "none" : "block");
          fv.prop("disabled", false);
        } else {
          fv.prop("disabled", true);
        }
      }
      function J5(fL) {
        if (!Oh.Zt.wr) {
          Oh.Zt.wr = OJ.firestore().collection("accounts").doc(fL).onSnapshot(function (fv) {
            if (null != (fv = fv.data()) && fv.locked) {
              n3 = true;
              X("#spLockedName").html(fv.name);
              if (null != fv.lastChange) {
                X("#btn-chg-ln").attr("title", "Last Changed: " + new Date(fv.lastChange).toLocaleString());
              }
              X("#spExpiry").html(null != fv.expiry ? new Date(0x3e8 * fv.expiry.seconds).toLocaleString() : "Never");
            } else {
              n3 = false;
              if ("none" !== X("#main-subpanel").css("display")) {
                Jg("main-servers");
              }
            }
            J4();
            Oh.Zt.wr();
            Oh.Zt.wr = null;
          }, function () {
            Oh.Zt.wr();
            Oh.Zt.wr = null;
          });
        }
      }
      function J6() {
        X("[id^=servers-body-]").empty();
        for (var fL in nA) for (var fv of Object.values(nA[fL])) {
          var fK = fv.name;
          var fb = fv.players;
          var fS = fv.bots;
          var fd = fv.playersText;
          var fv = fv.gamemode;
          var fb = 0x0 < fS ? " title=\"Players: " + fb + "&#10;Bots: " + fS + "\"" : '';
          X("#servers-body-" + fL).append("<tr id=\"s_" + fK + "\" class=\"server-row\" server=\"" + fK + "\"><td class=\"server-table-name\">" + fK + "</td><td class=\"server-table-players\"" + fb + ">" + fd + "</td><td class=\"server-table-mode\">" + fv + "</td></tr>");
        }
        for (var fa of Object.values(nE)) {
          var fX = fa.region;
          var fg = fa.name;
          var fP = fa.playersText;
          var fa = fa.gamemode;
          X("#servers-body-" + fX).prepend("<tr id=\"s_" + fg + "\" class=\"account-server server-row\" server=\"" + fg + "\"><td class=\"server-table-name\">" + fg + "</td><td class=\"server-table-players\">" + fP + "</td><td class=\"server-table-mode\">" + fa + "</td></tr>");
        }
        X(".server-row").on("click", function () {
          J8(X(this).attr("server"));
        });
      }
      function J7(fL) {
        if (fL) {
          fL = fL.toLowerCase();
          for (var fv in nA) for (var fK in nA[fv]) if (fK.toLowerCase() === fL) {
            return nA[fv][fK];
          }
          for (var fb in nE) if (fb.toLowerCase() === fL) {
            return nE[fb];
          }
        }
        return null;
      }
      function J8(fL) {
        if (null != Om) {
          X("#s_" + Om.name).removeClass("server-selected");
        }
        if (null != (Om = J7(fL))) {
          X("#s_" + Om.name).addClass("server-selected");
        }
      }
      function J9(fL) {
        fL = fL.toLowerCase();
        var fv = X("#server-tab-" + fL);
        X(".server-active").css("background-color", "inherit");
        X("#server-tab-container").children().removeClass("server-active");
        fv.addClass("server-active");
        X(".server-active").css("background-color", "#363636");
        X("#server-content").children().css("display", "none");
        X("#servers-" + fL).css("display", "block");
      }
      function JO(fL, fv) {
        nd._ChatTabs.forEach(function (fK, fb) {
          var fS;
          var fd = fK.flags;
          var fK = fK.maxMessages;
          if ((fL & fd) === fL && ((fd = X("#chat-body-" + fb + " tr")).length >= fK && fd.first().remove(), fd = (fK = X("#chat-container-" + fb)[0x0]).scrollHeight - fK.scrollTop <= fK.clientHeight + 0xa, fS = fv.cloneNode(true), X("#chat-body-" + fb).append(X("<tr>").append(fS)), fd)) {
            fK.scrollTop = fK.scrollHeight;
          }
        });
      }
      function JN(fL) {
        OB.val(fL);
      }
      function Jf() {
        var fL;
        var fv = X("#chat-tab-container");
        var fK = X("#chat-container");
        fv.empty();
        fK.empty();
        for (fL in nd._ChatTabs) {
          var fb = nd._ChatTabs[fL];
          if (0x0 === fb.name.length) {
            fb.name = "Unnamed";
          }
          fv.append("<li class='chat-tab' id='chat-tab-" + fL + "' name='" + fL + "'><span>" + fb.name + "</span></li>");
          fK.append("<div class='chat-inner-container' id='chat-container-" + fL + "'><table class='chat-table'><tbody id='chat-body-" + fL + "'></tbody></table></div>");
        }
        X(".chat-tab").on("click", function () {
          Jz(X(this).attr("name"));
        }).css("border-color", "rgba(255, 255, 255, .2)");
        if (0x0 <= nS && nS < nd._ChatTabs.length) {
          Jz(nS);
        } else {
          Jz(0x0);
        }
      }
      function Jz(fL) {
        X(".chat-tab").removeClass("chat-active-tab");
        X(".chat-inner-container").removeClass("chat-active-container").css("display", "none");
        nS = fL;
        if (nd._ChatTabs[fL]) {
          X("#chat-tab-" + fL).addClass("chat-active-tab");
          X("#chat-container-" + fL).addClass("chat-active-container").css("display", "block");
        }
      }
      function Ji(fL) {
        if (undefined === fL) {
          fL = 0x0;
        }
        var fv;
        var fK = X("#cte-tab-selector");
        fK.empty();
        for (fv in nd._ChatTabs) fK.append("<option value='" + fv + "'>" + nd._ChatTabs[fv].name + "</option>");
        fK.prop("selectedIndex", fL);
        fK.trigger("change");
      }
      function Jr() {
        var fL;
        var fv = X("#cte-tab-selector").val();
        var fK = {
          "name": '',
          "flags": 0x0,
          "maxMessages": 0x0
        };
        var fb = nd._ChatTabs[fv];
        if (fb) {
          for (var fS in fK) fK[fS] = fb[fS];
        }
        X("#cte-tab-name").val('');
        for (fL in fA) X("#cte-type-" + fL.toLowerCase()).prop("checked", (fA[fL] & 0x0) === fA[fL]);
        X("#cte-max-messages").val(0x0);
      }
      function Jw() {
        var fL = X("#cte-tab-selector").val();
        var fv = nd._ChatTabs[fL];
        if (fv) {
          var fK = fv.name;
          var fb = X("#cte-tab-name").val();
          if (0x0 !== fb.length) {
            var fS;
            var fK = fb !== fK;
            var fd = 0x0;
            var fa = parseInt(X("#cte-max-messages").val());
            for (fS in fA) if (X("#cte-type-" + fS.toLowerCase()).prop("checked")) {
              fd += fA[fS];
            }
            fv.name = fb;
            fv.flags = fd;
            fv.maxMessages = fa;
            if (fK) {
              Ji(fL);
              for (var fX in nd._ChatTabs) {
                var fg = nd._ChatTabs[fX];
                if (fg && (0x0 === fg.name.length && (fg.name = "Unnamed"), fX = X("#chat-tab-" + fX))) {
                  fX.html("<span>" + fg.name + "</span>");
                }
              }
            }
          }
        }
      }
      function JA() {
        nd._ChatTabs.push({
          "name": "New",
          "flags": 0x0,
          "maxMessages": 0x64
        });
        Ji(nd._ChatTabs.length - 0x1);
        Jf();
      }
      function JE() {
        var fL = X("#cte-tab-selector").val();
        if (nd._ChatTabs[fL]) {
          nd._ChatTabs.splice(fL, 0x1);
          Ji();
          Jf();
        }
      }
      function JF(fL, fv, fK) {
        if (undefined === fK) {
          fK = -0x1;
        }
        X("#context-name").text(fL || "An unnamed cell");
        Ok.data({
          "selected": fv,
          "party": fK
        });
        X(".context-action").css("display", "none");
        if (-0x1 === fK) {
          X("#menu-invite").css("display", "block");
          X("#menu-whisper").css("display", "block");
          X("#menu-block").css("display", "block");
          X("#menu-profile").css("display", "block");
        } else {
          X("#menu-whisper").css("display", "block");
          X("#menu-profile").css("display", "block");
          if (Oh.ri()) {
            X("#menu-pu_pr").css("display", "block");
            X("#menu-promote").css("display", "block");
            X("#menu-kick").css("display", "block");
          }
        }
        if (Oh.jt) {
          X("#menu-spectate").css("display", "block");
        }
        Ok.css({
          "display": "block",
          "left": O1.min(Oh.Ft, a.innerWidth - Ok.width()),
          "top": O1.min(Oh.Dt, a.innerHeight - Ok.height())
        });
      }
      function Jv(fL, fv, fK, fb, fS, fd, fa) {
        var fX = Oh.ui.hi;
        var fg = fX.pi;
        var fP = fX.fi;
        var fM = fX.mi;
        var fX = fX.gi;
        var fg = (fK - fg) / fM * OM.width;
        var fM = (fb - fP) / fX * OM.height;
        fL.beginPath();
        fL.arc(fg, fM, fS, 0x0, nJ, false);
        fL.fillStyle = fd;
        fL.fill();
        if (fa) {
          fK = fg - fL.measureText(fv).width / 0x2;
          fL.fillText(fv, fK, fM - 0x5);
        }
      }
      var JK = new Map();
      function JS(fL, fv) {
        var fK;
        if (fv !== (fL.is(":visible") && "hide" !== JK.get(fL.selector))) {
          fK = {
            "duration": nd.rMenuDelay,
            "always": function () {
              return JK["delete"](fL.selector);
            }
          };
          JK.set(fL.selector, fv ? "show" : "hide");
          if (fv) {
            fL.fadeIn(fK);
          } else {
            fL.fadeOut(fK);
          }
        }
      }
      function Jd(fL) {
        JS(fL, true);
      }
      function Ja(fL) {
        JS(fL, false);
      }
      function JX(fL) {
        JS(fL, !(fL.is(":visible") && "hide" !== JK.get(fL.selector)));
      }
      function Jg(fL) {
        if ("none" === (fL = X("#" + fL)).css("display")) {
          X(".main-right-panel").slideUp(nd.rMenuDelay);
          fL.slideDown(nd.rMenuDelay);
        }
      }
      function JP() {
        OG.show();
        if (!(0x0 !== Oh.Pi.length && !nd.cHidePartyPanel)) {
          nf.wt.css("display", "none");
        }
      }
      function JM(fL) {
        var fv = fL.attr("id");
        nd[fv] = fL.prop("checked");
        Jc(fv);
      }
      function Jy(fL) {
        var fv = fL.attr("id");
        nd[fv] = fL.val();
        Jc(fv, fL.val());
      }
      function Jh(fL) {
        Jc(fL.attr("id"), fL.val());
      }
      function Ju(fL) {
        Jc(fL.attr("id"), fL.val());
      }
      function Jc(fL, fv) {
        if (null != (fL = J1[fL])) {
          fL(fv);
        }
      }
      function Jl(fL, fv) {
        if (null != fv) {
          Jc(fL, nV[fL] = fv);
        }
      }
      var JV;
      var JU;
      var JC = [[0x1, 0x4, "rRainbowNameSpeed"], [0x5, 0x4, "rRainbowCellSpeed"], [0xa, 0x1, "spRainbowName"], [0xb, 0x1, "spRainbowCell"]];
      function Jj() {
        for (var fL in nU) {
          var fv = fL.charAt(0x0);
          if ("r" === fv) {
            Jh(X("#" + fL).val(nU[fL]));
          } else if ("u" === fv) {
            nV[fL] = nU[fL];
            X("#" + fL).spectrum("set", nV[fL]);
            Jc(fL, nV[fL]);
          } else if ("a" === fv) {
            Jl(fL, '');
          } else {
            nV[fL] = nU[fL];
          }
        }
        nV._FoodColors = [];
      }
      function JG(fL) {
        try {
          var fv = "string" == typeof fL ? JSON.parse(fL) : fL;
          if (fv.version !== 0x2) {
            Jj();
          } else {
            for (var fK of Object.entries(fv)) {
              var fb = t(fK) || E(fK, 0x2) || w(fK, 0x2) || r();
              var fS = fb[0x0];
              var fd = fb[0x1];
              if (fS in nV && 0x0 !== fd.length) {
                nV[fS] = fd;
                var fa = undefined;
                var fX = fS;
                var fg = fd;
                var fa = X("#" + fX);
                switch (fX[0x0]) {
                  case "u":
                    fa.spectrum("set", fg);
                    Jc(fX, fg);
                    break;
                  case "r":
                    fa.val(fg);
                    Jh(fa);
                    break;
                  case "a":
                    Jl(fX, fg);
                    break;
                  case "i":
                    fa.val(fg);
                    Ju(fa);
                }
              }
            }
          }
        } catch (fP) {
          Jj();
        } finally {
          NB();
        }
      }
      function JI(fL) {
        var fv;
        if (/\.(json)$/i.test(fL.name)) {
          (fv = new FileReader()).addEventListener("load", function () {
            JT();
            Jj();
            JG(this.result);
          }, false);
          fv.readAsText(fL);
        }
      }
      function JT() {
        X("#cThemeEnabled").prop("checked", true).trigger("change");
      }
      function Jk(fL) {
        var fv = fL.split(" ");
        var fK = '';
        var fb = null;
        for (var fS = 0x0; fS < fv.length; fS++) {
          if (0x0 !== fS) {
            fK += " ";
          }
          fb = fv[fS];
          if (null != Oq[fb]) {
            fK += "<img src=\"https://gota.io/emotes/" + (fb = fb.startsWith(":") && fb.endsWith(":") ? fb.substring(0x1, fb.length - 0x1) : fb) + ".png\" height=\"17\" width=\"17\" alt=\"" + fb + "\">";
          } else if (null != Ox[fb]) {
            fK += "<img src=\"https://gota.io/emotes/gifs/" + (fb = fb.startsWith(":") && fb.endsWith(":") ? fb.substring(0x1, fb.length - 0x1) : fb) + ".gif\" height=\"17\" width=\"17\" alt=\"" + fb + "\">";
          } else {
            fK += fb;
          }
        }
        return fK;
      }
      function JB(fL, fv, fK) {
        this.p = fL;
        this.Tt = fv;
        this.xn = fK;
        this.Lt = null;
        this.Pt = null;
      }
      function Js() {
        this._r = {};
        this.Sr = [];
        this.Nr = [];
        this.ga = null;
        this.Cr = 0x0;
        this.Pt = null;
        this.jn = 0x0;
        this.wa = function (fL, fv, fK) {
          var fb;
          if (OO[fL].xn !== 0x3) {
            if (fb = this._r[fL]) {
              fb.Wi(fv, fK);
            } else {
              fb = new Jq(fL, fv, fK);
              this._r[fL] = fb;
              this.Er();
            }
            this.Or();
          } else {
            fb = new Jq(fL, fv, fK);
            this.Nr.push(fb);
          }
          this.Hr();
          if (fb) {
            Oh.Rt("Recieved buff: " + fb.Mr.p);
          }
        };
        this._a = function (fL) {
          var fv = null;
          if (OO[fL].xn !== 0x3) {
            if (fv = this._r[fL]) {
              delete this._r[fL];
              this.Er();
              this.Hr();
              this.Or();
            }
          } else {
            for (var fK = 0x0; fK < this.Nr.length; fK++) {
              if ((fv = this.Nr[fK]).Ui === fL) {
                this.Nr.splice(fK, 0x1);
                this.Hr();
                break;
              }
            }
          }
          if (fv) {
            Oh.Rt("Lost buff: " + fv.Mr.p);
          }
        };
        this.Cn = function (fL) {
          if (0x0 !== this.Sr.length || 0x0 !== this.Nr.length) {
            for (var fv in this._r) {
              var fK = this._r[fv];
              if (!(fL && fK.Mr.xn === 0x1)) {
                delete this._r[fv];
              }
            }
            this.Er();
            this.Or();
            this.Nr = [];
            this.Hr();
          }
        };
        this.Er = function () {
          this.Sr = [];
          if (0x0 !== this._r.length) {
            for (var fL in this._r) if (this._r[fL].Mr.xn === 0x1) {
              this.Sr.splice(0x0, 0x0, fL);
            } else {
              this.Sr.push(fL);
            }
          }
        };
        this.Or = function () {
          var fL;
          this.jn = 0x0;
          if (null != this._r[0x1]) {
            fL = this._r[0x1];
            this.jn = 0x10 * fL.Fr;
          }
        };
        this.Wi = function () {
          if (0x0 === this.Sr.length && 0x0 === this.Nr.length) {
            Od.visible = false;
          } else {
            if (Date.now() >= this.Cr) {
              this.Dr();
              this.Cr = Date.now() + 0x3e8;
            }
            if (!this.Pt) {
              this.Pt = ON.Texture.from(this.ga.canvas);
              Od.texture = this.Pt;
              Od.anchor.set(0x0);
            }
            Od.position.set(OW.width() + 0x14 - O7.di.position.x, 0xf - O7.di.position.y);
            Od.visible = true;
          }
        };
        this.Dr = function () {
          var fL = (null == (fL = this.ga) ? undefined : fL.canvas) || g.createElement("canvas");
          var fv = O1.max(this.Sr.length, this.Nr.length);
          var fK = 0x0;
          var fb = 0x0;
          for (var fS = 0x0; fS < this.Sr.length; fS++) {
            var fL;
            var fv;
            var fK;
            var fb;
            var fS;
            this._r[this.Sr[fS]].Ir(this.ga, fK, fb);
            fK += 0x37;
          }
          var fK = 0x0;
          var fb = 0x37;
          for (var fd = 0x0; fd < this.Nr.length; fd++) {
            this.Nr[fd].Ir(this.ga, fK, fb);
            fK += 0x37;
          }
          if (this.Pt) {
            this.Pt.update();
          }
          this.Cr = Date.now() + 0x3e8;
        };
        this.Hr = function () {
          this.Cr = 0x0;
        };
      }
      var JQ = 1.5 * O1.PI;
      function Jq(fL, fv, fK) {
        this.Ui = fL;
        this.Mr = OO[fL];
        this.Ar = Date.now();
        this.Tr = fK;
        this.Fr = fv;
        this.Wi = function (fb, fS) {
          this.Ar = Date.now();
          this.Tr = fS;
          this.Fr = fb;
        };
        this.Pr = function () {
          var fb;
          var fS;
          return Date.now() >= this.Tr ? 0x2 * O1.PI : (fb = this.Tr - Date.now(), fS = this.Tr - this.Ar, 0x2 * O1.min(fb / fS, 0x1) * O1.PI);
        };
        this.Ir = function (fb, fS, fd) {
          fb.drawImage(this.Mr.Lt, fS, fd, 0x32, 0x32);
          if (0x1 < this.Fr) {
            fb.fillStyle = "#000";
            fb.fillText(this.Fr, fS + 0x23, fd + 0x11);
          }
          if (0x0 < this.Tr) {
            fb.beginPath();
            fb.moveTo(fS + 0x19, fd + 0x19);
            fb.arc(fS + 0x19, fd + 0x19, 0x19, JQ, JQ - this.Pr(), false);
            fb.closePath();
            fb.globalAlpha = 0.75;
            fb.fillStyle = "#222";
            fb.fill();
            fb.globalAlpha = 0x1;
          }
        };
      }
      function JR(fL) {
        for (var fv = fL.length - 0x1; 0x0 < fv; fv--) {
          var fK = O1.floor(O1.random() * (fv + 0x1));
          var fb = [fL[fK], fL[fv]];
          fL[fv] = fb[0x0];
          fL[fK] = fb[0x1];
        }
        return fL;
      }
      var Jp = [];
      var Jo = [];
      for (var JZ = 0x0; JZ < 0xb4; JZ++) {
        var JW = a.tinycolor({
          "h": 0x2 * JZ,
          "s": 97.25,
          "v": 0x64
        });
        var JY = JW.toRgb();
        Jp[JZ] = (JY.r << 0x10) + (JY.g << 0x8) + JY.b;
        Jo[JZ] = JW.toHexString();
      }
      var JD = JR(Jp.slice(0x0));
      var f0 = JR(Jo.slice(0x0));
      var f1 = ["#FFFFFF", "#FF9BDC", "#FF00FF", "#FF0000", "#C80000", "#FF6900", "#FFFF00", "#00FF00", "#008000", "#008080", "#00FFFF", "#0096FF", "#0000FF", "#CA48FA", "#8A2BE2", "#D2C878", "#8C4614"];
      var f2 = {};
      function f3(fL) {
        return 0x0 === fL || fL === Oh.Bi ? "You cannot block that player." : n8.includes(fL) ? (delete n8[fL], "Unblocked player with ID: " + fL) : (n8.push(fL), "Blocked player with ID: " + fL);
      }
      var f4 = [{
        "Yt": "Whisper a player by ID",
        "Wt": ["whisper", "t", "w"],
        "Jt": function (fL) {
          var fv = parseInt(fL[0x0]);
          if (isNaN(fv)) {
            Oh.Rt("Invalid player id.");
          } else {
            if (0x0 !== (fL = fL.slice(0x1).join(" ")).length) {
              Oh.P(nQ.Je(fv, fL));
            }
            JN("/t " + fv + " ");
          }
        }
      }, {
        "Yt": "Reply to previous whisper",
        "Wt": ["reply", "r"],
        "Jt": function (fL) {
          if (0x0 !== (fL = fL.join(" ")).length) {
            Oh.P(nQ.Je(0x0, fL));
          }
          JN("/r ");
        }
      }, {
        "Yt": "Send a message to other party members",
        "Wt": ["party", "p"],
        "Jt": function (fL) {
          if (0x0 !== (fL = fL.join(" ")).length) {
            Oh.P(nQ.Be(fL, 0x1));
          }
          JN("/p ");
        }
      }, {
        "Yt": "Invite a player to the party",
        "Wt": ["invite", "i"],
        "Jt": function (fL) {
          fL = parseInt(fL[0x0]);
          if (isNaN(fL)) {
            Oh.Rt("Invalid ID.");
          } else {
            Oh.P(nQ.Ge(0x0, fL));
          }
        }
      }, {
        "Yt": "Leave your current party",
        "Wt": ["leave", "l"],
        "Jt": function () {
          Oh.P(nQ.Ge(0x3, 0x0));
        }
      }, {
        "Yt": "Promote a party member to leader",
        "Wt": ["promote"],
        "Jt": function (fL) {
          fL = parseInt(fL[0x0]);
          if (isNaN(fL)) {
            Oh.Rt("Invalid ID.");
          } else {
            Oh.P(nQ.Ge(0x2, fL));
          }
        }
      }, {
        "Yt": "Kick a player from the party",
        "Wt": ["kick"],
        "Jt": function (fL) {
          fL = parseInt(fL[0x0]);
          if (isNaN(fL)) {
            Oh.Rt("Invalid ID.");
          } else {
            Oh.P(nQ.Ge(0x1, fL));
          }
        }
      }, {
        "Yt": "Clear the chat tab",
        "Wt": ["clear"],
        "Jt": function () {
          return X("#chat-body-" + nS).empty();
        }
      }, {
        "Yt": "Get your current ID",
        "Wt": ["info"],
        "Jt": function () {
          if (0x0 < Oh.Bi) {
            Oh.Rt("Your id is " + Oh.Bi);
          } else {
            Oh.Rt("You need to be connected to a server to use this command.");
          }
        }
      }, {
        "Yt": "Show the scrimmage menu",
        "Wt": ["scrimmenu"],
        "Jt": function () {
          OT.toggle();
        }
      }, {
        "Yt": "Join a party with a code",
        "Wt": ["join", "j"],
        "Jt": function (fL) {
          if (null != (fL = fL[0x0]) && 0x0 !== fL.length) {
            Oh.P(nQ.ze(fL));
          }
        }
      }, {
        "Yt": "Set the party to private",
        "Wt": ["private"],
        "Jt": function () {
          Oh.P(nQ.Ge(0x4, 0x1));
        }
      }, {
        "Yt": "Allow players to join the party without an invite",
        "Wt": ["public"],
        "Jt": function () {
          Oh.P(nQ.Ge(0x4, 0x0));
        }
      }, {
        "Yt": "Reset chat size",
        "Wt": ["resetchat"],
        "Jt": function () {
          nf.T.css("width", "360px");
          nf.T.css("height", "250px");
        }
      }, {
        "Yt": "Reset chat tab settings",
        "Wt": ["resetchattabs"],
        "Jt": function () {
          nd._ChatTabs = JSON.parse(JSON.stringify(nL));
          Ji();
          Jf();
        }
      }, {
        "Yt": "Spectate a player",
        "Wt": ["spectate", "s"],
        "Jt": function (fL) {
          fL = parseInt(fL[0x0]);
          if (isNaN(fL)) {
            Oh.Rt("Invalid ID.");
          } else {
            Oh.P(nQ.Ue(fL));
          }
        }
      }, {
        "Yt": "Disconnect from the server",
        "Wt": ["disconnect"],
        "Jt": function () {
          Oh.$n();
        }
      }, {
        "Yt": "Get Account UID",
        "Wt": ["account"],
        "Jt": function () {
          if (null == n4) {
            Oh.Rt("You are not logged in.");
          } else {
            Oh.Rt("UID: " + n4.uid);
          }
        }
      }, {
        "Yt": "Block or unblock a player by ID",
        "Wt": ["block", "b"],
        "Jt": function (fL) {
          fL = parseInt(fL[0x0]);
          if (!isNaN(fL)) {
            fL = f3(fL);
            Oh.Rt(fL);
          }
        }
      }, {
        "Yt": "Get current renderer",
        "Wt": ["renderer"],
        "Jt": function () {
          Oh.Rt("Current renderer is " + (O7.li.gl ? "WebGL" : "Canvas"));
        }
      }];
      var f5 = ["4Head", "BibleThump", "DansGame", "DatSheffy", "FailFish", "FeelsBadMan", "FeelsGoodMan", "FeelsMadMan", "GabeN", "HassanChop", "HeyGuys", "Kappa", "KappaPride", "Keepo", "Kreygasm", "NotLikeThis", "OMGScoots", "PJSalt", "PogChamp", "rekt", "rip", "SaltyCorn", "sodaC", "sodaHeyGuys", "sodaNOPE", "sodaW", "SwiftRage", "WutFace", "ResidentSleeper", "LUL", "MikuFail", "PepoHype", "KKona", "MeguFace", "AngryBork", "AngeryBOYE", "TohruFlex", "Sadness", "nou", "MarioFP"];
      var f6 = ["Ditto", "MichaelPls", "RareParrot", "PepePls", "RooNoticeMe", "PepeEyes", "EverythingsFine", "WeSmart", "PandaAww", "SleepyCat", "Clap"];
      function f7(fL) {
        var fv;
        var fK;
        return fL <= 0x0 ? "0:00" : (fK = fL - 0xe10 * (fv = O1.floor(fL / 0xe10)) - 0x3c * (fL = O1.floor((fL - 0xe10 * fv) / 0x3c)), (0x0 < fv ? fv + ":" : '') + (fL < 0xa && 0x0 < fv ? "0" + fL : fL) + ":" + (fK < 0xa ? "0" + fK : fK));
      }
      function f8(fL) {
        (fL = fL.toString().split("."))[0x0] = fL[0x0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return fL.join(".");
      }
      function f9(fL) {
        if (fL.dataTransfer.items) {
          for (var fv = 0x0; fv < fL.dataTransfer.items.length; fv++) {
            if ("file" === fL.dataTransfer.items[fv].kind) {
              return fL.dataTransfer.items[fv].getAsFile();
            }
          }
        } else {
          if (0x0 !== fL.dataTransfer.files.length) {
            return fL.dataTransfer.files[0x0];
          }
        }
      }
      var fJ = {
        "CENTER": 0x0,
        "MASS": 0x1
      };
      var fr = {
        0x0: "Spectator",
        0x1: "Blue",
        0x2: "Red",
        0x3: "Green",
        0x4: "Yellow",
        0x5: "Purple",
        0x6: "Orange",
        0x7: "Pink",
        0x8: "Brown"
      };
      var fA = {
        "ALL": 0x1,
        "PARTY": 0x2,
        "WHISPER": 0x4,
        "SYSTEM": 0x8,
        "ADMIN": 0x10
      };
      var fE = {
        "ka": -0x1,
        "Ri": 0x0,
        "Ea": 0x1,
        "xa": 0x2
      };
      var fF = [[0x0, "Verdana", 0x36], [0x1, "ampad", 0x4b], [0x2, "burnstown", 0x51], [0x3, "chlorinar", 0x4b], [0x4, "Facon", 0x4b], [0x5, "archistico", 0x4b], [0x6, "breakaway", 0x51], [0x7, "conformity", 0x51], [0x8, "electroharmonix", 0x46], [0x9, "PWJoyeuxNoel", 0x46], [0xa, "leckerli-one", 0x4b], [0x65, "IceCaps", 0x51, 0xc9ff], [0x66, "BrazierFlame", 0x51, 0xe25822]].reduce(function (fL, fv) {
        var fv = t(fv) || E(fv, 0x4) || w(fv, 0x4) || r();
        var fK = fv[0x0];
        var fb = fv[0x1];
        var fS = fv[0x2];
        var fv = fv[0x3];
        new a.FontFaceObserver(fb).load(null, 0x2710)["catch"](function () {});
        if (0x0 < fK && fK < 0x40) {
          X("#spNameFont").append("<option value=\"" + fK + "\" style=\"font-family:" + fb + "\">" + (fb.charAt(0x0).toUpperCase() + fb.slice(0x1)) + "</option>");
        }
        fL[fK] = {
          "fontSize": O1.round(fS / 0x36 * 0x45),
          "fontWeight": 0x0 === fK ? "bold" : "normal",
          "stroke": fv || 0x0,
          "fontFamily": fb
        };
        return fL;
      }, {});
      X(a).focus(function () {
        nN = true;
      });
      X(a).blur(function () {
        nN = false;
      });
    };
    a.version = "3.6.4";
  }(eval, atob);
}();
