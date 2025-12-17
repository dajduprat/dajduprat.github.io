/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/* unused harmony export entity */
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
/* global clearInterval, console, setInterval */

/**
 * Builds an Excel.EntityCellValue with 10 fields and 2 nested entities
 * @customfunction
 * @returns {object} An entity cell value object with 10 properties and 2 nested entities
 */
function entity() {
  return _entity.apply(this, arguments);
}
function _entity() {
  _entity = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
    var nestedEntity1, nestedEntity2, entityValue;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          _context.n = 1;
          return new Promise(function (resolve) {
            return setTimeout(resolve, 1000);
          });
        case 1:
          nestedEntity1 = {
            type: "Entity",
            text: "Address Information",
            properties: {
              street: {
                type: "String",
                basicValue: "123 Main Street"
              },
              city: {
                type: "String",
                basicValue: "New York"
              },
              zipCode: {
                type: "Double",
                basicValue: 10001
              }
            },
            layouts: {
              card: {
                title: {
                  property: "city"
                },
                sections: [{
                  layout: "List",
                  properties: ["street", "city", "zipCode"]
                }]
              }
            }
          };
          nestedEntity2 = {
            type: "Entity",
            text: "Contact Details",
            properties: {
              email: {
                type: "String",
                basicValue: "john.doe@example.com"
              },
              phone: {
                type: "String",
                basicValue: "+1-555-0123"
              },
              department: {
                type: "String",
                basicValue: "Engineering"
              }
            },
            layouts: {
              card: {
                title: {
                  property: "department"
                },
                sections: [{
                  layout: "List",
                  properties: ["email", "phone", "department"]
                }]
              }
            }
          };
          entityValue = {
            type: "Entity",
            text: "Employee Record",
            properties: {
              employeeId: {
                type: "Double",
                basicValue: 12345
              },
              firstName: {
                type: "String",
                basicValue: "John"
              },
              lastName: {
                type: "String",
                basicValue: "Doe"
              },
              salary: {
                type: "Double",
                basicValue: 85000,
                numberFormat: "$* #,##0.00"
              },
              hireDate: {
                type: "String",
                basicValue: "2020-03-15"
              },
              isActive: {
                type: "Boolean",
                basicValue: true
              },
              yearsOfService: {
                type: "Double",
                basicValue: 4
              },
              performanceRating: {
                type: "Double",
                basicValue: 4.5
              },
              projectsCompleted: {
                type: "Double",
                basicValue: 18
              },
              address: nestedEntity1,
              contact: nestedEntity2
            },
            layouts: {
              card: {
                title: {
                  property: "firstName"
                },
                sections: [{
                  layout: "List",
                  properties: ["employeeId", "firstName", "lastName"]
                }, {
                  layout: "List",
                  title: "Employment Info",
                  collapsible: true,
                  collapsed: false,
                  properties: ["salary", "hireDate", "yearsOfService"]
                }, {
                  layout: "List",
                  title: "Performance",
                  collapsed: true,
                  properties: ["performanceRating", "projectsCompleted", "isActive"]
                }, {
                  layout: "List",
                  title: "Details",
                  collapsed: true,
                  properties: ["address", "contact"]
                }]
              }
            }
          };
          return _context.a(2, entityValue);
      }
    }, _callee);
  }));
  return _entity.apply(this, arguments);
}
CustomFunctions.associate("ENTITY", entity);
/******/ })()
;
//# sourceMappingURL=functions.js.map