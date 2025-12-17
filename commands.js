/******/ (function() { // webpackBootstrap
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
/* global Office */

Office.onReady(function () {
  // Suppress Office error dialogs in production
  if (typeof Office !== 'undefined' && Office.context && Office.context.ui) {
    var originalDisplayDialog = Office.context.ui.displayDialogAsync;
    Office.context.ui.displayDialogAsync = function (url, options, callback) {
      // Only allow specific dialogs, block debug/error dialogs
      if (url && !url.includes('debug') && !url.includes('event')) {
        originalDisplayDialog.call(this, url, options, callback);
      }
    };
  }
});
function getSelectedRanges() {
  return _getSelectedRanges.apply(this, arguments);
}
function _getSelectedRanges() {
  _getSelectedRanges = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.n) {
        case 0:
          return _context2.a(2, Excel.run(/*#__PURE__*/function () {
            var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(context) {
              var rangeAreas, rangeCollection, _t, _t2;
              return _regenerator().w(function (_context) {
                while (1) switch (_context.p = _context.n) {
                  case 0:
                    _context.p = 0;
                    rangeAreas = context.workbook.getSelectedRanges();
                    rangeAreas.worksheet.load({
                      id: true,
                      name: true
                    });
                    rangeCollection = rangeAreas.areas;
                    rangeCollection.load({
                      address: true
                    });
                    _context.p = 1;
                    _context.n = 2;
                    return context.sync();
                  case 2:
                    _context.n = 5;
                    break;
                  case 3:
                    _context.p = 3;
                    _t = _context.v;
                    if (!(_t instanceof Error && (_t.message.includes("Wait until") || _t.message.includes("is currently busy")))) {
                      _context.n = 4;
                      break;
                    }
                    console.warn("Excel is busy. Could not get selected ranges. ".concat(_t.message));
                    return _context.a(2, []);
                  case 4:
                    throw _t;
                  case 5:
                    return _context.a(2, rangeAreas.areas.items.map(function (range) {
                      return {
                        address: range.address,
                        worksheet: {
                          id: rangeAreas.worksheet.id,
                          name: rangeAreas.worksheet.name
                        }
                      };
                    }));
                  case 6:
                    _context.p = 6;
                    _t2 = _context.v;
                    console.error("Error in getSelectedRanges: ".concat(_t2));
                    return _context.a(2, []);
                }
              }, _callee, null, [[1, 3], [0, 6]]);
            }));
            return function (_x8) {
              return _ref.apply(this, arguments);
            };
          }()));
      }
    }, _callee2);
  }));
  return _getSelectedRanges.apply(this, arguments);
}
function getRangeOrIntersection(_x, _x2, _x3) {
  return _getRangeOrIntersection.apply(this, arguments);
}
function _getRangeOrIntersection() {
  _getRangeOrIntersection = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(rangeAddress, worksheet, context) {
    var range, initialRange, usedRange, intersection;
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.n) {
        case 0:
          if (!(rangeAddress.indexOf(",") > -1)) {
            _context3.n = 1;
            break;
          }
          // Multiple ranges case
          range = worksheet.getRanges(rangeAddress);
          _context3.n = 3;
          break;
        case 1:
          // Single range  - get intersection with used range
          initialRange = worksheet.getRange(rangeAddress);
          usedRange = worksheet.getUsedRange();
          intersection = initialRange.getIntersectionOrNullObject(usedRange);
          _context3.n = 2;
          return context.sync();
        case 2:
          // If there's no intersection, fall back to the original range
          range = !intersection.isNullObject ? intersection : initialRange;
        case 3:
          return _context3.a(2, range);
      }
    }, _callee3);
  }));
  return _getRangeOrIntersection.apply(this, arguments);
}
function performCalculation(_x4, _x5, _x6, _x7) {
  return _performCalculation.apply(this, arguments);
}
function _performCalculation() {
  _performCalculation = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(context, range, rangeAddress, sheet) {
    var freshRange, _t3;
    return _regenerator().w(function (_context4) {
      while (1) switch (_context4.p = _context4.n) {
        case 0:
          _context4.p = 0;
          range.calculate();
          _context4.n = 1;
          return context.sync();
        case 1:
          _context4.n = 6;
          break;
        case 2:
          _context4.p = 2;
          _t3 = _context4.v;
          if (!((_t3 === null || _t3 === void 0 ? void 0 : _t3.code) === 'ItemNotFound')) {
            _context4.n = 5;
            break;
          }
          console.log('>> Range reference became stale, getting fresh reference for calculation <<');
          // Get a fresh reference to the range and try again
          _context4.n = 3;
          return getRangeOrIntersection(rangeAddress, sheet, context);
        case 3:
          freshRange = _context4.v;
          freshRange.calculate();
          _context4.n = 4;
          return context.sync();
        case 4:
          _context4.n = 6;
          break;
        case 5:
          throw _t3;
        case 6:
          return _context4.a(2);
      }
    }, _callee4, null, [[0, 2]]);
  }));
  return _performCalculation.apply(this, arguments);
}
function executeCalculation() {
  return _executeCalculation.apply(this, arguments);
}
function _executeCalculation() {
  _executeCalculation = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
    var isSafe,
      _args6 = arguments;
    return _regenerator().w(function (_context6) {
      while (1) switch (_context6.n) {
        case 0:
          isSafe = _args6.length > 0 && _args6[0] !== undefined ? _args6[0] : false;
          return _context6.a(2, Excel.run(/*#__PURE__*/function () {
            var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(context) {
              var sheet, ranges, rangeAddress, loadedRanges, _iterator, _step, _range, excelRange, range;
              return _regenerator().w(function (_context5) {
                while (1) switch (_context5.n) {
                  case 0:
                    sheet = context.workbook.worksheets.getActiveWorksheet();
                    sheet.load(["id", "name"]);
                    _context5.n = 1;
                    return context.sync();
                  case 1:
                    _context5.n = 2;
                    return getSelectedRanges();
                  case 2:
                    ranges = _context5.v;
                    rangeAddress = ranges.map(function (range) {
                      return range.address;
                    }).join(",");
                    loadedRanges = [];
                    _iterator = _createForOfIteratorHelper(ranges);
                    try {
                      for (_iterator.s(); !(_step = _iterator.n()).done;) {
                        _range = _step.value;
                        excelRange = sheet.getRange(_range.address);
                        excelRange.load(["formulas", "address", "columnIndex", "rowIndex"]);
                        loadedRanges.push(excelRange);
                      }
                    } catch (err) {
                      _iterator.e(err);
                    } finally {
                      _iterator.f();
                    }
                    _context5.n = 3;
                    return context.sync();
                  case 3:
                    _context5.n = 4;
                    return getRangeOrIntersection(rangeAddress, sheet, context);
                  case 4:
                    range = _context5.v;
                    if (!isSafe) {
                      _context5.n = 6;
                      break;
                    }
                    _context5.n = 5;
                    return performCalculation(context, range, rangeAddress, sheet);
                  case 5:
                    _context5.n = 7;
                    break;
                  case 6:
                    range.calculate();
                    _context5.n = 7;
                    return context.sync();
                  case 7:
                    console.log("Calculation completed for selected range");
                  case 8:
                    return _context5.a(2);
                }
              }, _callee5);
            }));
            return function (_x9) {
              return _ref2.apply(this, arguments);
            };
          }()));
      }
    }, _callee6);
  }));
  return _executeCalculation.apply(this, arguments);
}
function onCalculateRibbonClick(event) {
  executeCalculation(false);
  // Be sure to indicate when the add-in command function is complete.
  event.completed();
}
function onSafeCalculateRibbonClick(event) {
  executeCalculation(true);
  // Be sure to indicate when the add-in command function is complete.
  event.completed();
}

// Register the function with Office.
Office.actions.associate("onCalculateRibbonClick", onCalculateRibbonClick);
Office.actions.associate("onSafeCalculateRibbonClick", onSafeCalculateRibbonClick);
/******/ })()
;
//# sourceMappingURL=commands.js.map