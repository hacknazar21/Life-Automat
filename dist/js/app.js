/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Snake.js":
/*!**********************!*\
  !*** ./src/Snake.js ***!
  \**********************/
/*! exports provided: Snake */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Snake", function() { return Snake; });
/* harmony import */ var _neuro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./neuro */ "./src/neuro.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var Snake =
/*#__PURE__*/
function () {
  function Snake(params) {
    _classCallCheck(this, Snake);

    this.coordsHead = {
      x: params.xi || 13,
      y: params.yi || 20
    };
    this.coordsBody = [];
    this.coordsTale = {
      x: params.xi - 1 || 11,
      y: params.yi || 20
    };
    this.coords = [this.coordsTale].concat(_toConsumableArray(this.coordsBody), [this.coordsHead]);
    this.xmax;
    this.ymax;
    this.iscol = false;
    this.isbegin = params.isbegin || true;
    this.promotionValue = params.prVal || 0;
    this.neuroData = [];
    this.neuro = params.neuro || new _neuro__WEBPACK_IMPORTED_MODULE_0__["Neuro"]();
  }

  _createClass(Snake, [{
    key: "update",
    value: function update(grid) {
      this.xmax = grid.length - 1;
      this.ymax = grid[0].length - 1;
      this.neuroData = [];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = grid[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var column = _step.value;
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = column[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var _step2$value = _step2.value,
                  x = _step2$value.x,
                  y = _step2$value.y,
                  isLife = _step2$value.isLife,
                  isFood = _step2$value.isFood,
                  isHead = _step2$value.isHead;
              this.neuroData.push(x);
              this.neuroData.push(y);
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      this.neuro.update(this.neuroData, this.isbegin, this.promotionValue);
      this.move(this.neuro.key);
      this.isbegin = false;
      return this.coords;
    }
  }, {
    key: "promotion",
    value: function promotion(prom) {
      this.promotionValue = prom;
    }
  }, {
    key: "move",
    value: function move(code) {
      if (code == 'ArrowRight' || code == 'KeyD') {
        this.iscol = this.iscollade(this.coordsHead.x + 1, this.coordsHead.y);
        this.loopsnake();
        if (this.coordsHead.x + 1 > this.xmax) this.coordsHead.x = 0;else this.coordsHead.x++;
      } else if (code == 'ArrowLeft' || code == 'KeyA') {
        this.iscol = this.iscollade(this.coordsHead.x - 1, this.coordsHead.y);
        this.loopsnake();
        if (this.coordsHead.x - 1 < 0) this.coordsHead.x = this.xmax;else this.coordsHead.x--;
      } else if (code == 'ArrowUp' || code == 'KeyW') {
        this.iscol = this.iscollade(this.coordsHead.x, this.coordsHead.y - 1);
        this.loopsnake();
        if (this.coordsHead.y - 1 < 0) this.coordsHead.y = this.ymax;else this.coordsHead.y--;
      } else if (code == 'ArrowDown' || code == 'KeyS') {
        this.iscol = this.iscollade(this.coordsHead.x, this.coordsHead.y + 1);
        this.loopsnake();
        if (this.coordsHead.y + 1 > this.ymax) this.coordsHead.y = 0;else this.coordsHead.y++;
      }
    }
  }, {
    key: "loopsnake",
    value: function loopsnake() {
      for (var index = 0; index < this.coords.length - 1; index++) {
        this.coords[index] = {
          x: this.coords[index + 1].x,
          y: this.coords[index + 1].y
        };
      }
    }
  }, {
    key: "iscollade",
    value: function iscollade(coordX, coordY) {
      var elc = {
        x: coordX,
        y: coordY
      };
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = this.coords[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var el = _step3.value;

          if (el.x == elc.x && el.y == elc.y) {
            return true;
          }
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      return false;
    }
  }, {
    key: "eat",
    value: function eat() {
      this.coords.splice(1, 0, {
        x: this.coords[0].x,
        y: this.coords[0].y
      });
      this.coordsTale = {
        x: this.coords[0].x - 1,
        y: this.coords[0].y
      };
    }
  }]);

  return Snake;
}();

/***/ }),

/***/ "./src/Vector.js":
/*!***********************!*\
  !*** ./src/Vector.js ***!
  \***********************/
/*! exports provided: Vector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vector", function() { return Vector; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Vector =
/*#__PURE__*/
function () {
  function Vector(x, y) {
    _classCallCheck(this, Vector);

    this.x = x;
    this.y = y;
  }

  _createClass(Vector, [{
    key: "add",
    value: function add() {
      for (var _len = arguments.length, vectors = new Array(_len), _key = 0; _key < _len; _key++) {
        vectors[_key] = arguments[_key];
      }

      for (var _i = 0; _i < vectors.length; _i++) {
        var vector = vectors[_i];
        this.x += vector.x;
        this.y += vector.y;
      }

      return this;
    }
  }, {
    key: "mult",
    value: function mult(n) {
      this.x *= n;
      this.y *= n;
      return this;
    }
  }, {
    key: "getNegative",
    value: function getNegative() {
      return Vector.getNegative(this);
    }
  }, {
    key: "length",
    get: function get() {
      return Math.pow(Math.pow(this.x, 2) + Math.pow(this.y, 2), 0.5);
    }
  }], [{
    key: "get",
    value: function get() {
      var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      return new Vector(x, y);
    }
  }, {
    key: "getDiff",
    value: function getDiff(v1, v2) {
      return new Vector(v1.x - v2.x, v1.y - v2.y);
    }
  }, {
    key: "getNegative",
    value: function getNegative(vector) {
      return new Vector(-vector.x, -vector.y);
    }
  }]);

  return Vector;
}();

/***/ }),

/***/ "./src/canvas.js":
/*!***********************!*\
  !*** ./src/canvas.js ***!
  \***********************/
/*! exports provided: Canvas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Canvas", function() { return Canvas; });
/* harmony import */ var _Snake__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Snake */ "./src/Snake.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var Canvas =
/*#__PURE__*/
function () {
  function Canvas(_ref) {
    var _this = this;

    var r = _ref.r;

    _classCallCheck(this, Canvas);

    this.view = document.createElement("canvas");
    this.context = this.view.getContext("2d");
    this.padding = 0;
    this.grid = null;
    this.snakesmass = [];
    this.score = [];
    this.deadsnakes = [];
    this.bestscore = 0;
    this.generation = 1;

    for (var index = 0; index < 10; index++) {
      this.snakesmass.push(new _Snake__WEBPACK_IMPORTED_MODULE_0__["Snake"]({}));
      this.score.push(0);
    }

    this.food = 0;
    this.resize();
    this.width = this.view.width;
    this.height = this.view.height;
    this.bestsnake;
    this.r = r;
    this.viewWidth = this.width - this.padding * 2;
    this.viewHeight = this.height - this.padding * 2;
    window.addEventListener("resize", function () {
      return _this.resize();
    });
  }

  _createClass(Canvas, [{
    key: "drawGrid",
    value: function drawGrid() {
      this.grid = new Array();
      var i = 0;

      for (var x = this.padding; x <= this.viewWidth; x += this.r) {
        this.grid.push(new Array());
        var j = 0;

        for (var y = this.padding; y <= this.viewHeight; y += this.r) {
          this.grid[i][j++] = {
            x: x,
            y: y,
            isLife: false,
            isFood: false,
            isHead: false
          };
        }

        i++;
      }
    }
  }, {
    key: "snakes",
    value: function snakes(snake, i) {
      var coords = snake.update(this.grid);
      this.grid[coords[coords.length - 1].x][coords[coords.length - 1].y].isLife = false;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.grid[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var row = _step.value;
          var _iteratorNormalCompletion4 = true;
          var _didIteratorError4 = false;
          var _iteratorError4 = undefined;

          try {
            for (var _iterator4 = row[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
              var cell = _step4.value;
              cell.isLife = false;
              cell.isHead = false;
            }
          } catch (err) {
            _didIteratorError4 = true;
            _iteratorError4 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
                _iterator4.return();
              }
            } finally {
              if (_didIteratorError4) {
                throw _iteratorError4;
              }
            }
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = coords[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var coord = _step2.value;

          if (this.grid[coord.x][coord.y].isFood) {
            this.grid[coord.x][coord.y].isFood = false;
            snake.promotion(0.8);
            snake.eat();
            this.score[i]++;
            this.food--;
          }

          this.grid[coord.x][coord.y].isLife = true;
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      if (snake.iscol) {
        return -1;
      }

      if (coords[coords.length - 1].x + 1 < this.grid.length && this.grid[coords[coords.length - 1].x + 1][coords[coords.length - 1].y].isFood) {
        snake.promotion(0.02);
      } else if (coords[coords.length - 1].x - 1 >= 0 && this.grid[coords[coords.length - 1].x - 1][coords[coords.length - 1].y].isFood) {
        snake.promotion(0.02);
      } else if (coords[coords.length - 1].y - 1 >= 0 && this.grid[coords[coords.length - 1].x][coords[coords.length - 1].y - 1].isFood) {
        snake.promotion(0.02);
      } else if (coords[coords.length - 1].y + 1 < this.grid[0].length && this.grid[coords[coords.length - 1].x][coords[coords.length - 1].y + 1].isFood) {
        snake.promotion(0.02);
      } else if (coords[coords.length - 1].y + 1 < this.grid[0].length && coords[coords.length - 1].x + 1 < this.grid.length && this.grid[coords[coords.length - 1].x + 1][coords[coords.length - 1].y + 1].isFood) {
        snake.promotion(0.02);
      } else if (coords[coords.length - 1].y - 1 >= 0 && coords[coords.length - 1].x - 1 >= 0 && this.grid[coords[coords.length - 1].x - 1][coords[coords.length - 1].y - 1].isFood) {
        snake.promotion(0.02);
      } else if (coords[coords.length - 1].y + 1 < this.grid[0].length && coords[coords.length - 1].x - 1 >= 0 && this.grid[coords[coords.length - 1].x - 1][coords[coords.length - 1].y + 1].isFood) {
        snake.promotion(0.02);
      } else if (coords[coords.length - 1].y - 1 >= 0 && coords[coords.length - 1].x + 1 < this.grid.length && this.grid[coords[coords.length - 1].x + 1][coords[coords.length - 1].y - 1].isFood) {
        snake.promotion(0.02);
      } else snake.promotion(-0.01);

      this.grid[coords[coords.length - 1].x][coords[coords.length - 1].y].isHead = true;
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = this.grid[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var _row = _step3.value;
          var _iteratorNormalCompletion5 = true;
          var _didIteratorError5 = false;
          var _iteratorError5 = undefined;

          try {
            for (var _iterator5 = _row[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
              var _step5$value = _step5.value,
                  x = _step5$value.x,
                  y = _step5$value.y,
                  isLife = _step5$value.isLife,
                  isFood = _step5$value.isFood,
                  isHead = _step5$value.isHead;
              this.context.strokeStyle = "grey";
              this.context.strokeRect(x, y, this.r, this.r);

              if (isLife && !isHead) {
                this.context.fillStyle = "green";
                this.context.fillRect(x, y, this.r, this.r);
              } else if (isHead) {
                this.context.fillStyle = "blue";
                this.context.fillRect(x, y, this.r, this.r);
              } else if (isFood) {
                this.context.fillStyle = "red";
                this.context.fillRect(x, y, this.r, this.r);
              }
            }
          } catch (err) {
            _didIteratorError5 = true;
            _iteratorError5 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
                _iterator5.return();
              }
            } finally {
              if (_didIteratorError5) {
                throw _iteratorError5;
              }
            }
          }
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }
    }
  }, {
    key: "updateGrid",
    value: function updateGrid() {
      this.context.clearRect(0, 0, this.width, this.height);
      var i = 0;
      var _iteratorNormalCompletion6 = true;
      var _didIteratorError6 = false;
      var _iteratorError6 = undefined;

      try {
        for (var _iterator6 = this.snakesmass[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
          var snake = _step6.value;

          if (this.deadsnakes.indexOf(snake) != -1) {} else if (this.snakes(snake, i) == -1) {
            if (this.bestscore < this.score[i]) {
              this.bestscore = this.score[i];
              this.bestsnake = snake;
            }

            this.deadsnakes.push(snake);
            if (this.deadsnakes.length == this.snakesmass.length) return -1;
          }

          i++;
        }
      } catch (err) {
        _didIteratorError6 = true;
        _iteratorError6 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion6 && _iterator6.return != null) {
            _iterator6.return();
          }
        } finally {
          if (_didIteratorError6) {
            throw _iteratorError6;
          }
        }
      }

      return 0;
    }
  }, {
    key: "clearAll",
    value: function clearAll() {
      this.context.clearRect(0, 0, this.width, this.height);
      this.grid = null;
      this.snakesmass = [];
      this.score = [];
      this.deadsnakes = [];

      if (this.generation < 20) {
        this.generation++;

        for (var index = 0; index < 10; index++) {
          this.bestsnake.promotion(-1 * Math.random());
          this.snakesmass.push(new _Snake__WEBPACK_IMPORTED_MODULE_0__["Snake"]({
            xi: index * 2,
            isbegin: false,
            neuro: this.bestsnake.neuro,
            prVal: this.bestsnake.promotionValue
          }));
          this.score.push(0);
        }
      } else {
        this.bestsnake.promotion(-5 * Math.random());
        this.snakesmass.push(new _Snake__WEBPACK_IMPORTED_MODULE_0__["Snake"]({
          isbegin: false,
          neuro: this.bestsnake.neuro,
          prVal: this.bestsnake.promotionValue
        }));
        this.score.push(0);
      }

      this.food = 0;
      this.drawGrid();
    }
  }, {
    key: "getRandomBetween",
    value: function getRandomBetween(min, max) {
      return min + Math.floor(Math.random() * (max - min + 1));
    }
  }, {
    key: "drawFood",
    value: function drawFood() {
      for (var index = 0; index < 50; index++) {
        var i = this.getRandomBetween(0, this.grid.length - 1);
        var j = this.getRandomBetween(0, this.grid[0].length - 1);

        if (!this.grid[i][j].isLife) {
          this.grid[i][j].isFood = true;
        }

        this.food++;
      }
    }
  }, {
    key: "resize",
    value: function resize() {
      this.view.width = window.innerWidth;
      this.view.height = window.innerHeight;
    }
  }]);

  return Canvas;
}();

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(/*! ./canvas */ "./src/canvas.js"),
    Canvas = _require.Canvas;

var canvasGrid = new Canvas({
  r: 20
});
var numberLife = 0;
var counterDOM = document.querySelector('.counter>span');
var generationDOM = document.querySelector('.generation>span');
canvasGrid.drawGrid();
document.body.insertAdjacentElement('beforeend', canvasGrid.view);
start_animate(0);

function start_animate(duration) {
  var requestID;
  var startTime = null;

  var animate = function animate(time) {
    time = new Date().getTime(); //millisecond-timstamp

    if (startTime === null) {
      startTime = time;
    }

    var progress = time - startTime;
    startTime++;

    if (progress > duration) {
      getRules();
      requestID = requestAnimationFrame(animate);
      startTime = null;
    } else {
      cancelAnimationFrame(requestID);
    }

    requestID = requestAnimationFrame(animate);
  };

  animate();
}

function getRules(time) {
  if (canvasGrid.food == 0) canvasGrid.drawFood();
  counterDOM.innerHTML = canvasGrid.score;
  generationDOM.innerHTML = canvasGrid.generation;
  var ret = canvasGrid.updateGrid();

  if (ret == -1) {
    canvasGrid.clearAll();
  }
}

/***/ }),

/***/ "./src/neuro.js":
/*!**********************!*\
  !*** ./src/neuro.js ***!
  \**********************/
/*! exports provided: Neuro */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Neuro", function() { return Neuro; });
/* harmony import */ var _Vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vector */ "./src/Vector.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var Neuro =
/*#__PURE__*/
function () {
  function Neuro() {
    _classCallCheck(this, Neuro);

    this.input = [];
    this.hide = [];
    this.hideLength = 20;
    this.result = [];
    this.key;
    this.alpha = 0.05;
  }

  _createClass(Neuro, [{
    key: "update",
    value: function update(inputData) {
      var _this = this;

      var isBegin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var Promotion = arguments.length > 2 ? arguments[2] : undefined;
      this.result = [];

      if (isBegin) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = inputData[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var data = _step.value;
            this.input.push({
              value: data,
              weight: this.generateWeight(this.hideLength)
            });
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      } else {
        inputData.forEach(function (el, i) {
          _this.input[i].value = el;

          for (var index = 0; index < _this.input[i].weight.length; index++) {
            _this.input[i].weight[index] = _this.input[i].weight[index] + Math.random() * Promotion;
          }
        });
      }

      this.start(isBegin, Promotion);
    }
  }, {
    key: "generateWeight",
    value: function generateWeight(n) {
      var massW = [];

      for (var index = 0; index < n; index++) {
        massW.push(Math.random());
      }

      return massW;
    }
  }, {
    key: "start",
    value: function start(isBegin, Promotion) {
      var masshide = [];

      for (var index = 0; index < this.hideLength; index++) {
        masshide.push(0);
      }

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this.input[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var _step2$value = _step2.value,
              value = _step2$value.value,
              weight = _step2$value.weight;
          var _i = 0;
          var _iteratorNormalCompletion3 = true;
          var _didIteratorError3 = false;
          var _iteratorError3 = undefined;

          try {
            for (var _iterator3 = weight[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
              var w = _step3.value;
              masshide[_i++] += value * w;
            }
          } catch (err) {
            _didIteratorError3 = true;
            _iteratorError3 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                _iterator3.return();
              }
            } finally {
              if (_didIteratorError3) {
                throw _iteratorError3;
              }
            }
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      for (var _index = 0; _index < masshide.length; _index++) {
        if (isBegin) this.hide.push({
          value: masshide[_index],
          weight: this.generateWeight(4)
        });else {
          this.hide[_index].value = masshide[_index];

          for (var i = 0; i < this.hide[i].weight.length; i++) {
            this.hide[_index].weight[i] = this.hide[_index].weight[i] + Math.random() * Promotion;
          }
        }
      }

      this.end();
    }
  }, {
    key: "end",
    value: function end() {
      var massOut = [];

      for (var j = 0; j < 4; j++) {
        massOut.push(0);
      }

      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = this.hide[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var _step4$value = _step4.value,
              value = _step4$value.value,
              weight = _step4$value.weight;
          var i = 0;
          var _iteratorNormalCompletion5 = true;
          var _didIteratorError5 = false;
          var _iteratorError5 = undefined;

          try {
            for (var _iterator5 = weight[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
              var w = _step5.value;
              massOut[i++] += value * w;
            }
          } catch (err) {
            _didIteratorError5 = true;
            _iteratorError5 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
                _iterator5.return();
              }
            } finally {
              if (_didIteratorError5) {
                throw _iteratorError5;
              }
            }
          }
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
            _iterator4.return();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }

      for (var _i2 = 0; _i2 < massOut.length; _i2++) {
        var numOut = massOut[_i2];
        this.result.push(numOut);
      }

      switch (this.result.indexOf(Math.max.apply(null, this.result))) {
        case 0:
          this.key = "ArrowUp";
          break;

        case 1:
          this.key = "ArrowRight";
          break;

        case 2:
          this.key = "ArrowDown";
          break;

        case 3:
          this.key = "ArrowLeft";
          break;

        default:
          break;
      }
    }
  }, {
    key: "activation",
    value: function activation(s) {
      return 1 / (1 + Math.pow(Math.E, -this.alpha * s));
    }
  }]);

  return Neuro;
}();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NuYWtlLmpzIiwid2VicGFjazovLy8uL3NyYy9WZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL25ldXJvLmpzIl0sIm5hbWVzIjpbIlNuYWtlIiwicGFyYW1zIiwiY29vcmRzSGVhZCIsIngiLCJ4aSIsInkiLCJ5aSIsImNvb3Jkc0JvZHkiLCJjb29yZHNUYWxlIiwiY29vcmRzIiwieG1heCIsInltYXgiLCJpc2NvbCIsImlzYmVnaW4iLCJwcm9tb3Rpb25WYWx1ZSIsInByVmFsIiwibmV1cm9EYXRhIiwibmV1cm8iLCJOZXVybyIsImdyaWQiLCJsZW5ndGgiLCJjb2x1bW4iLCJpc0xpZmUiLCJpc0Zvb2QiLCJpc0hlYWQiLCJwdXNoIiwidXBkYXRlIiwibW92ZSIsImtleSIsInByb20iLCJjb2RlIiwiaXNjb2xsYWRlIiwibG9vcHNuYWtlIiwiaW5kZXgiLCJjb29yZFgiLCJjb29yZFkiLCJlbGMiLCJlbCIsInNwbGljZSIsIlZlY3RvciIsInZlY3RvcnMiLCJ2ZWN0b3IiLCJuIiwiZ2V0TmVnYXRpdmUiLCJ2MSIsInYyIiwiQ2FudmFzIiwiciIsInZpZXciLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsInBhZGRpbmciLCJzbmFrZXNtYXNzIiwic2NvcmUiLCJkZWFkc25ha2VzIiwiYmVzdHNjb3JlIiwiZ2VuZXJhdGlvbiIsImZvb2QiLCJyZXNpemUiLCJ3aWR0aCIsImhlaWdodCIsImJlc3RzbmFrZSIsInZpZXdXaWR0aCIsInZpZXdIZWlnaHQiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiQXJyYXkiLCJpIiwiaiIsInNuYWtlIiwicm93IiwiY2VsbCIsImNvb3JkIiwicHJvbW90aW9uIiwiZWF0Iiwic3Ryb2tlU3R5bGUiLCJzdHJva2VSZWN0IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJjbGVhclJlY3QiLCJpbmRleE9mIiwic25ha2VzIiwiTWF0aCIsInJhbmRvbSIsImRyYXdHcmlkIiwibWluIiwibWF4IiwiZmxvb3IiLCJnZXRSYW5kb21CZXR3ZWVuIiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwicmVxdWlyZSIsImNhbnZhc0dyaWQiLCJudW1iZXJMaWZlIiwiY291bnRlckRPTSIsInF1ZXJ5U2VsZWN0b3IiLCJnZW5lcmF0aW9uRE9NIiwiYm9keSIsImluc2VydEFkamFjZW50RWxlbWVudCIsInN0YXJ0X2FuaW1hdGUiLCJkdXJhdGlvbiIsInJlcXVlc3RJRCIsInN0YXJ0VGltZSIsImFuaW1hdGUiLCJ0aW1lIiwiRGF0ZSIsImdldFRpbWUiLCJwcm9ncmVzcyIsImdldFJ1bGVzIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJkcmF3Rm9vZCIsImlubmVySFRNTCIsInJldCIsInVwZGF0ZUdyaWQiLCJjbGVhckFsbCIsImlucHV0IiwiaGlkZSIsImhpZGVMZW5ndGgiLCJyZXN1bHQiLCJhbHBoYSIsImlucHV0RGF0YSIsImlzQmVnaW4iLCJQcm9tb3Rpb24iLCJkYXRhIiwidmFsdWUiLCJ3ZWlnaHQiLCJnZW5lcmF0ZVdlaWdodCIsImZvckVhY2giLCJzdGFydCIsIm1hc3NXIiwibWFzc2hpZGUiLCJ3IiwiZW5kIiwibWFzc091dCIsIm51bU91dCIsImFwcGx5IiwicyIsIkUiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7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LE9BQXJCLGdCQUE4QjtBQUF6QixZQUFNQyxNQUFNLEdBQUlELE9BQUosS0FBWjtBQUNELGFBQUtmLE1BQUwsQ0FBWWhHLElBQVosQ0FBaUJnSCxNQUFqQjtBQUNIOztBQUNELGNBQVEsS0FBS2hCLE1BQUwsQ0FBWXZDLE9BQVosQ0FBb0JFLElBQUksQ0FBQ0ksR0FBTCxDQUFTa0QsS0FBVCxDQUFlLElBQWYsRUFBcUIsS0FBS2pCLE1BQTFCLENBQXBCLENBQVI7QUFDSSxhQUFLLENBQUw7QUFDSSxlQUFLN0YsR0FBTCxHQUFXLFNBQVg7QUFDQTs7QUFDSixhQUFLLENBQUw7QUFDSSxlQUFLQSxHQUFMLEdBQVcsWUFBWDtBQUNBOztBQUNKLGFBQUssQ0FBTDtBQUNJLGVBQUtBLEdBQUwsR0FBVyxXQUFYO0FBQ0E7O0FBQ0osYUFBSyxDQUFMO0FBQ0ksZUFBS0EsR0FBTCxHQUFXLFdBQVg7QUFDQTs7QUFDSjtBQUNJO0FBZFI7QUFnQkg7QUFoR0w7QUFBQTtBQUFBLCtCQWlHZStHLENBakdmLEVBaUdrQjtBQUNWLGFBQU8sS0FBSyxhQUFJdkQsSUFBSSxDQUFDd0QsQ0FBVCxFQUFlLENBQUMsS0FBS2xCLEtBQU4sR0FBY2lCLENBQTdCLENBQUwsQ0FBUDtBQUNIO0FBbkdMOztBQUFBO0FBQUEsSSIsImZpbGUiOiJqcy9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCB7IE5ldXJvIH0gZnJvbSBcIi4vbmV1cm9cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTbmFrZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihwYXJhbXMpIHtcclxuICAgICAgICB0aGlzLmNvb3Jkc0hlYWQgPSB7IHg6IHBhcmFtcy54aSB8fCAxMywgeTogcGFyYW1zLnlpIHx8IDIwIH07XHJcbiAgICAgICAgdGhpcy5jb29yZHNCb2R5ID0gW107XHJcbiAgICAgICAgdGhpcy5jb29yZHNUYWxlID0geyB4OiBwYXJhbXMueGkgLSAxIHx8IDExLCB5OiBwYXJhbXMueWkgfHwgMjAgfTtcclxuICAgICAgICB0aGlzLmNvb3JkcyA9IFt0aGlzLmNvb3Jkc1RhbGUsIC4uLnRoaXMuY29vcmRzQm9keSwgdGhpcy5jb29yZHNIZWFkXTtcclxuXHJcbiAgICAgICAgdGhpcy54bWF4O1xyXG4gICAgICAgIHRoaXMueW1heDtcclxuICAgICAgICB0aGlzLmlzY29sID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pc2JlZ2luID0gcGFyYW1zLmlzYmVnaW4gfHwgdHJ1ZTtcclxuICAgICAgICB0aGlzLnByb21vdGlvblZhbHVlID0gcGFyYW1zLnByVmFsIHx8IDA7XHJcbiAgICAgICAgdGhpcy5uZXVyb0RhdGEgPSBbXTtcclxuICAgICAgICB0aGlzLm5ldXJvID0gcGFyYW1zLm5ldXJvIHx8IG5ldyBOZXVybygpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShncmlkKSB7XHJcbiAgICAgICAgdGhpcy54bWF4ID0gZ3JpZC5sZW5ndGggLSAxO1xyXG4gICAgICAgIHRoaXMueW1heCA9IGdyaWRbMF0ubGVuZ3RoIC0gMTtcclxuICAgICAgICB0aGlzLm5ldXJvRGF0YSA9IFtdO1xyXG4gICAgICAgIGZvciAoY29uc3QgY29sdW1uIG9mIGdyaWQpIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCB7IHgsIHksIGlzTGlmZSwgaXNGb29kLCBpc0hlYWQgfSBvZiBjb2x1bW4pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubmV1cm9EYXRhLnB1c2goeCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5ldXJvRGF0YS5wdXNoKHkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubmV1cm8udXBkYXRlKHRoaXMubmV1cm9EYXRhLCB0aGlzLmlzYmVnaW4sIHRoaXMucHJvbW90aW9uVmFsdWUpO1xyXG4gICAgICAgIHRoaXMubW92ZSh0aGlzLm5ldXJvLmtleSk7XHJcbiAgICAgICAgdGhpcy5pc2JlZ2luID0gZmFsc2U7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29vcmRzO1xyXG4gICAgfVxyXG4gICAgcHJvbW90aW9uKHByb20pIHtcclxuICAgICAgICB0aGlzLnByb21vdGlvblZhbHVlID0gcHJvbTtcclxuICAgIH1cclxuICAgIG1vdmUoY29kZSkge1xyXG4gICAgICAgIGlmIChjb2RlID09ICdBcnJvd1JpZ2h0JyB8fCBjb2RlID09ICdLZXlEJykge1xyXG4gICAgICAgICAgICB0aGlzLmlzY29sID0gdGhpcy5pc2NvbGxhZGUodGhpcy5jb29yZHNIZWFkLnggKyAxLCB0aGlzLmNvb3Jkc0hlYWQueSk7XHJcbiAgICAgICAgICAgIHRoaXMubG9vcHNuYWtlKCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNvb3Jkc0hlYWQueCArIDEgPiB0aGlzLnhtYXgpIHRoaXMuY29vcmRzSGVhZC54ID0gMDtcclxuICAgICAgICAgICAgZWxzZSB0aGlzLmNvb3Jkc0hlYWQueCsrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChjb2RlID09ICdBcnJvd0xlZnQnIHx8IGNvZGUgPT0gJ0tleUEnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNjb2wgPSB0aGlzLmlzY29sbGFkZSh0aGlzLmNvb3Jkc0hlYWQueCAtIDEsIHRoaXMuY29vcmRzSGVhZC55KTtcclxuICAgICAgICAgICAgdGhpcy5sb29wc25ha2UoKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY29vcmRzSGVhZC54IC0gMSA8IDApIHRoaXMuY29vcmRzSGVhZC54ID0gdGhpcy54bWF4O1xyXG4gICAgICAgICAgICBlbHNlIHRoaXMuY29vcmRzSGVhZC54LS07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGNvZGUgPT0gJ0Fycm93VXAnIHx8IGNvZGUgPT0gJ0tleVcnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNjb2wgPSB0aGlzLmlzY29sbGFkZSh0aGlzLmNvb3Jkc0hlYWQueCwgdGhpcy5jb29yZHNIZWFkLnkgLSAxKTtcclxuICAgICAgICAgICAgdGhpcy5sb29wc25ha2UoKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY29vcmRzSGVhZC55IC0gMSA8IDApIHRoaXMuY29vcmRzSGVhZC55ID0gdGhpcy55bWF4O1xyXG4gICAgICAgICAgICBlbHNlIHRoaXMuY29vcmRzSGVhZC55LS07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGNvZGUgPT0gJ0Fycm93RG93bicgfHwgY29kZSA9PSAnS2V5UycpIHtcclxuICAgICAgICAgICAgdGhpcy5pc2NvbCA9IHRoaXMuaXNjb2xsYWRlKHRoaXMuY29vcmRzSGVhZC54LCB0aGlzLmNvb3Jkc0hlYWQueSArIDEpO1xyXG4gICAgICAgICAgICB0aGlzLmxvb3BzbmFrZSgpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jb29yZHNIZWFkLnkgKyAxID4gdGhpcy55bWF4KSB0aGlzLmNvb3Jkc0hlYWQueSA9IDA7XHJcbiAgICAgICAgICAgIGVsc2UgdGhpcy5jb29yZHNIZWFkLnkrKztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbG9vcHNuYWtlKCkge1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLmNvb3Jkcy5sZW5ndGggLSAxOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29vcmRzW2luZGV4XSA9IHsgeDogdGhpcy5jb29yZHNbaW5kZXggKyAxXS54LCB5OiB0aGlzLmNvb3Jkc1tpbmRleCArIDFdLnkgfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpc2NvbGxhZGUoY29vcmRYLCBjb29yZFkpIHtcclxuICAgICAgICBjb25zdCBlbGMgPSB7IHg6IGNvb3JkWCwgeTogY29vcmRZIH07XHJcbiAgICAgICAgZm9yIChjb25zdCBlbCBvZiB0aGlzLmNvb3Jkcykge1xyXG4gICAgICAgICAgICBpZiAoZWwueCA9PSBlbGMueCAmJiBlbC55ID09IGVsYy55KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBlYXQoKSB7XHJcbiAgICAgICAgdGhpcy5jb29yZHMuc3BsaWNlKDEsIDAsIHsgeDogdGhpcy5jb29yZHNbMF0ueCwgeTogdGhpcy5jb29yZHNbMF0ueSB9KTtcclxuICAgICAgICB0aGlzLmNvb3Jkc1RhbGUgPSB7IHg6IHRoaXMuY29vcmRzWzBdLnggLSAxLCB5OiB0aGlzLmNvb3Jkc1swXS55IH07XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgVmVjdG9yIHtcblx0Y29uc3RydWN0b3IoeCwgeSkge1xuXHRcdHRoaXMueCA9IHg7XG5cdFx0dGhpcy55ID0geTtcblx0fVxuXG5cdHN0YXRpYyBnZXQoeCA9IDAsIHkgPSAwKSB7XG5cdFx0cmV0dXJuIG5ldyBWZWN0b3IoeCwgeSk7XG5cdH1cblxuXHRzdGF0aWMgZ2V0RGlmZih2MSwgdjIpIHtcblx0XHRyZXR1cm4gbmV3IFZlY3Rvcih2MS54IC0gdjIueCwgdjEueSAtIHYyLnkpO1xuXHR9XG5cblx0c3RhdGljIGdldE5lZ2F0aXZlKHZlY3Rvcikge1xuXHRcdHJldHVybiBuZXcgVmVjdG9yKC12ZWN0b3IueCwgLXZlY3Rvci55KTtcblx0fVxuXG5cdGdldCBsZW5ndGgoKSB7XG5cdFx0cmV0dXJuICh0aGlzLnggKiogMiArIHRoaXMueSAqKiAyKSAqKiAwLjU7XG5cdH1cblxuXHRhZGQoLi4udmVjdG9ycykge1xuXHRcdGZvciAoY29uc3QgdmVjdG9yIG9mIHZlY3RvcnMpIHtcblx0XHRcdHRoaXMueCArPSB2ZWN0b3IueDtcblx0XHRcdHRoaXMueSArPSB2ZWN0b3IueTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdG11bHQobikge1xuXHRcdHRoaXMueCAqPSBuO1xuXHRcdHRoaXMueSAqPSBuO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRnZXROZWdhdGl2ZSgpIHtcblx0XHRyZXR1cm4gVmVjdG9yLmdldE5lZ2F0aXZlKHRoaXMpO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBTbmFrZSB9IGZyb20gXCIuL1NuYWtlXCI7XG5cbmV4cG9ydCBjbGFzcyBDYW52YXMge1xuXHRjb25zdHJ1Y3Rvcih7IHIgfSkge1xuXHRcdHRoaXMudmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG5cdFx0dGhpcy5jb250ZXh0ID0gdGhpcy52aWV3LmdldENvbnRleHQoXCIyZFwiKTtcblx0XHR0aGlzLnBhZGRpbmcgPSAwO1xuXHRcdHRoaXMuZ3JpZCA9IG51bGw7XG5cdFx0dGhpcy5zbmFrZXNtYXNzID0gW107XG5cdFx0dGhpcy5zY29yZSA9IFtdO1xuXHRcdHRoaXMuZGVhZHNuYWtlcyA9IFtdO1xuXHRcdHRoaXMuYmVzdHNjb3JlID0gMDtcblx0XHR0aGlzLmdlbmVyYXRpb24gPSAxO1xuXHRcdGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCAxMDsgaW5kZXgrKykge1xuXHRcdFx0dGhpcy5zbmFrZXNtYXNzLnB1c2gobmV3IFNuYWtlKHt9KSlcblx0XHRcdHRoaXMuc2NvcmUucHVzaCgwKTtcblx0XHR9XG5cdFx0dGhpcy5mb29kID0gMDtcblx0XHR0aGlzLnJlc2l6ZSgpO1xuXHRcdHRoaXMud2lkdGggPSB0aGlzLnZpZXcud2lkdGg7XG5cdFx0dGhpcy5oZWlnaHQgPSB0aGlzLnZpZXcuaGVpZ2h0O1xuXHRcdHRoaXMuYmVzdHNuYWtlO1xuXHRcdHRoaXMuciA9IHI7XG5cdFx0dGhpcy52aWV3V2lkdGggPSB0aGlzLndpZHRoIC0gdGhpcy5wYWRkaW5nICogMjtcblx0XHR0aGlzLnZpZXdIZWlnaHQgPSB0aGlzLmhlaWdodCAtIHRoaXMucGFkZGluZyAqIDI7XG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCkgPT4gdGhpcy5yZXNpemUoKSk7XG5cdH1cblx0ZHJhd0dyaWQoKSB7XG5cdFx0dGhpcy5ncmlkID0gbmV3IEFycmF5KCk7XG5cdFx0bGV0IGkgPSAwO1xuXHRcdGZvciAobGV0IHggPSB0aGlzLnBhZGRpbmc7IHggPD0gdGhpcy52aWV3V2lkdGg7IHggKz0gdGhpcy5yKSB7XG5cdFx0XHR0aGlzLmdyaWQucHVzaChuZXcgQXJyYXkoKSk7XG5cdFx0XHRsZXQgaiA9IDA7XG5cdFx0XHRmb3IgKGxldCB5ID0gdGhpcy5wYWRkaW5nOyB5IDw9IHRoaXMudmlld0hlaWdodDsgeSArPSB0aGlzLnIpIHtcblx0XHRcdFx0dGhpcy5ncmlkW2ldW2orK10gPSB7XG5cdFx0XHRcdFx0eDogeCxcblx0XHRcdFx0XHR5OiB5LFxuXHRcdFx0XHRcdGlzTGlmZTogZmFsc2UsXG5cdFx0XHRcdFx0aXNGb29kOiBmYWxzZSxcblx0XHRcdFx0XHRpc0hlYWQ6IGZhbHNlXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHRpKys7XG5cdFx0fVxuXG5cdH1cblxuXHRzbmFrZXMoc25ha2UsIGkpIHtcblx0XHRjb25zdCBjb29yZHMgPSBzbmFrZS51cGRhdGUodGhpcy5ncmlkKTtcblx0XHR0aGlzLmdyaWRbY29vcmRzW2Nvb3Jkcy5sZW5ndGggLSAxXS54XVtjb29yZHNbY29vcmRzLmxlbmd0aCAtIDFdLnldLmlzTGlmZSA9IGZhbHNlO1xuXHRcdGZvciAoY29uc3Qgcm93IG9mIHRoaXMuZ3JpZCkge1xuXHRcdFx0Zm9yIChjb25zdCBjZWxsIG9mIHJvdykge1xuXHRcdFx0XHRjZWxsLmlzTGlmZSA9IGZhbHNlO1xuXHRcdFx0XHRjZWxsLmlzSGVhZCA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRmb3IgKGNvbnN0IGNvb3JkIG9mIGNvb3Jkcykge1xuXHRcdFx0aWYgKHRoaXMuZ3JpZFtjb29yZC54XVtjb29yZC55XS5pc0Zvb2QpIHtcblx0XHRcdFx0dGhpcy5ncmlkW2Nvb3JkLnhdW2Nvb3JkLnldLmlzRm9vZCA9IGZhbHNlO1xuXHRcdFx0XHRzbmFrZS5wcm9tb3Rpb24oMC44KTtcblx0XHRcdFx0c25ha2UuZWF0KCk7XG5cdFx0XHRcdHRoaXMuc2NvcmVbaV0rKztcblx0XHRcdFx0dGhpcy5mb29kLS07XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmdyaWRbY29vcmQueF1bY29vcmQueV0uaXNMaWZlID0gdHJ1ZTtcblxuXHRcdH1cblx0XHRpZiAoc25ha2UuaXNjb2wpIHtcblx0XHRcdHJldHVybiAtMTtcblx0XHR9XG5cblx0XHRpZiAoY29vcmRzW2Nvb3Jkcy5sZW5ndGggLSAxXS54ICsgMSA8IHRoaXMuZ3JpZC5sZW5ndGggJiYgdGhpcy5ncmlkW2Nvb3Jkc1tjb29yZHMubGVuZ3RoIC0gMV0ueCArIDFdW2Nvb3Jkc1tjb29yZHMubGVuZ3RoIC0gMV0ueV0uaXNGb29kKSB7XG5cdFx0XHRzbmFrZS5wcm9tb3Rpb24oMC4wMik7XG5cdFx0fVxuXHRcdGVsc2UgaWYgKGNvb3Jkc1tjb29yZHMubGVuZ3RoIC0gMV0ueCAtIDEgPj0gMCAmJiB0aGlzLmdyaWRbY29vcmRzW2Nvb3Jkcy5sZW5ndGggLSAxXS54IC0gMV1bY29vcmRzW2Nvb3Jkcy5sZW5ndGggLSAxXS55XS5pc0Zvb2QpIHtcblx0XHRcdHNuYWtlLnByb21vdGlvbigwLjAyKTtcblx0XHR9XG5cdFx0ZWxzZSBpZiAoY29vcmRzW2Nvb3Jkcy5sZW5ndGggLSAxXS55IC0gMSA+PSAwICYmIHRoaXMuZ3JpZFtjb29yZHNbY29vcmRzLmxlbmd0aCAtIDFdLnhdW2Nvb3Jkc1tjb29yZHMubGVuZ3RoIC0gMV0ueSAtIDFdLmlzRm9vZCkge1xuXHRcdFx0c25ha2UucHJvbW90aW9uKDAuMDIpO1xuXHRcdH1cblx0XHRlbHNlIGlmIChjb29yZHNbY29vcmRzLmxlbmd0aCAtIDFdLnkgKyAxIDwgdGhpcy5ncmlkWzBdLmxlbmd0aCAmJiB0aGlzLmdyaWRbY29vcmRzW2Nvb3Jkcy5sZW5ndGggLSAxXS54XVtjb29yZHNbY29vcmRzLmxlbmd0aCAtIDFdLnkgKyAxXS5pc0Zvb2QpIHtcblx0XHRcdHNuYWtlLnByb21vdGlvbigwLjAyKTtcblx0XHR9XG5cdFx0ZWxzZSBpZiAoY29vcmRzW2Nvb3Jkcy5sZW5ndGggLSAxXS55ICsgMSA8IHRoaXMuZ3JpZFswXS5sZW5ndGhcblx0XHRcdCYmXG5cdFx0XHRjb29yZHNbY29vcmRzLmxlbmd0aCAtIDFdLnggKyAxIDwgdGhpcy5ncmlkLmxlbmd0aFxuXHRcdFx0JiYgdGhpcy5ncmlkW2Nvb3Jkc1tjb29yZHMubGVuZ3RoIC0gMV0ueCArIDFdW2Nvb3Jkc1tjb29yZHMubGVuZ3RoIC0gMV0ueSArIDFdLmlzRm9vZCkge1xuXHRcdFx0c25ha2UucHJvbW90aW9uKDAuMDIpO1xuXHRcdH1cblx0XHRlbHNlIGlmIChjb29yZHNbY29vcmRzLmxlbmd0aCAtIDFdLnkgLSAxID49IDBcblx0XHRcdCYmXG5cdFx0XHRjb29yZHNbY29vcmRzLmxlbmd0aCAtIDFdLnggLSAxID49IDBcblx0XHRcdCYmIHRoaXMuZ3JpZFtjb29yZHNbY29vcmRzLmxlbmd0aCAtIDFdLnggLSAxXVtjb29yZHNbY29vcmRzLmxlbmd0aCAtIDFdLnkgLSAxXS5pc0Zvb2QpIHtcblx0XHRcdHNuYWtlLnByb21vdGlvbigwLjAyKTtcblx0XHR9XG5cdFx0ZWxzZSBpZiAoY29vcmRzW2Nvb3Jkcy5sZW5ndGggLSAxXS55ICsgMSA8IHRoaXMuZ3JpZFswXS5sZW5ndGhcblx0XHRcdCYmXG5cdFx0XHRjb29yZHNbY29vcmRzLmxlbmd0aCAtIDFdLnggLSAxID49IDBcblx0XHRcdCYmIHRoaXMuZ3JpZFtjb29yZHNbY29vcmRzLmxlbmd0aCAtIDFdLnggLSAxXVtjb29yZHNbY29vcmRzLmxlbmd0aCAtIDFdLnkgKyAxXS5pc0Zvb2QpIHtcblx0XHRcdHNuYWtlLnByb21vdGlvbigwLjAyKTtcblx0XHR9XG5cdFx0ZWxzZSBpZiAoY29vcmRzW2Nvb3Jkcy5sZW5ndGggLSAxXS55IC0gMSA+PSAwXG5cdFx0XHQmJlxuXHRcdFx0Y29vcmRzW2Nvb3Jkcy5sZW5ndGggLSAxXS54ICsgMSA8IHRoaXMuZ3JpZC5sZW5ndGhcblx0XHRcdCYmIHRoaXMuZ3JpZFtjb29yZHNbY29vcmRzLmxlbmd0aCAtIDFdLnggKyAxXVtjb29yZHNbY29vcmRzLmxlbmd0aCAtIDFdLnkgLSAxXS5pc0Zvb2QpIHtcblx0XHRcdHNuYWtlLnByb21vdGlvbigwLjAyKTtcblx0XHR9XG5cdFx0ZWxzZSBzbmFrZS5wcm9tb3Rpb24oLTAuMDEpO1xuXG5cdFx0dGhpcy5ncmlkW2Nvb3Jkc1tjb29yZHMubGVuZ3RoIC0gMV0ueF1bY29vcmRzW2Nvb3Jkcy5sZW5ndGggLSAxXS55XS5pc0hlYWQgPSB0cnVlO1xuXHRcdGZvciAoY29uc3Qgcm93IG9mIHRoaXMuZ3JpZCkge1xuXHRcdFx0Zm9yIChjb25zdCB7IHgsIHksIGlzTGlmZSwgaXNGb29kLCBpc0hlYWQgfSBvZiByb3cpIHtcblx0XHRcdFx0dGhpcy5jb250ZXh0LnN0cm9rZVN0eWxlID0gXCJncmV5XCI7XG5cdFx0XHRcdHRoaXMuY29udGV4dC5zdHJva2VSZWN0KHgsIHksIHRoaXMuciwgdGhpcy5yKTtcblx0XHRcdFx0aWYgKGlzTGlmZSAmJiAhaXNIZWFkKSB7XG5cdFx0XHRcdFx0dGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IFwiZ3JlZW5cIjtcblx0XHRcdFx0XHR0aGlzLmNvbnRleHQuZmlsbFJlY3QoeCwgeSwgdGhpcy5yLCB0aGlzLnIpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2UgaWYgKGlzSGVhZCkge1xuXHRcdFx0XHRcdHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSBcImJsdWVcIjtcblx0XHRcdFx0XHR0aGlzLmNvbnRleHQuZmlsbFJlY3QoeCwgeSwgdGhpcy5yLCB0aGlzLnIpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2UgaWYgKGlzRm9vZCkge1xuXHRcdFx0XHRcdHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSBcInJlZFwiO1xuXHRcdFx0XHRcdHRoaXMuY29udGV4dC5maWxsUmVjdCh4LCB5LCB0aGlzLnIsIHRoaXMucik7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblx0dXBkYXRlR3JpZCgpIHtcblx0XHR0aGlzLmNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcblx0XHRsZXQgaSA9IDA7XG5cdFx0Zm9yIChjb25zdCBzbmFrZSBvZiB0aGlzLnNuYWtlc21hc3MpIHtcblx0XHRcdGlmICh0aGlzLmRlYWRzbmFrZXMuaW5kZXhPZihzbmFrZSkgIT0gLTEpIHtcblxuXHRcdFx0fVxuXHRcdFx0ZWxzZSBpZiAodGhpcy5zbmFrZXMoc25ha2UsIGkpID09IC0xKSB7XG5cdFx0XHRcdGlmICh0aGlzLmJlc3RzY29yZSA8IHRoaXMuc2NvcmVbaV0pIHtcblx0XHRcdFx0XHR0aGlzLmJlc3RzY29yZSA9IHRoaXMuc2NvcmVbaV07XG5cdFx0XHRcdFx0dGhpcy5iZXN0c25ha2UgPSBzbmFrZTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLmRlYWRzbmFrZXMucHVzaChzbmFrZSlcblxuXHRcdFx0XHRpZiAodGhpcy5kZWFkc25ha2VzLmxlbmd0aCA9PSB0aGlzLnNuYWtlc21hc3MubGVuZ3RoKSByZXR1cm4gLTE7XG5cdFx0XHR9XG5cblxuXHRcdFx0aSsrO1xuXHRcdH1cblxuXHRcdHJldHVybiAwO1xuXHR9XG5cdGNsZWFyQWxsKCkge1xuXHRcdHRoaXMuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuXHRcdHRoaXMuZ3JpZCA9IG51bGw7XG5cdFx0dGhpcy5zbmFrZXNtYXNzID0gW107XG5cdFx0dGhpcy5zY29yZSA9IFtdO1xuXHRcdHRoaXMuZGVhZHNuYWtlcyA9IFtdO1xuXHRcdGlmICh0aGlzLmdlbmVyYXRpb24gPCAyMCkge1xuXHRcdFx0dGhpcy5nZW5lcmF0aW9uKys7XG5cdFx0XHRmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgMTA7IGluZGV4KyspIHtcblx0XHRcdFx0dGhpcy5iZXN0c25ha2UucHJvbW90aW9uKC0xICogTWF0aC5yYW5kb20oKSk7XG5cblx0XHRcdFx0dGhpcy5zbmFrZXNtYXNzLnB1c2gobmV3IFNuYWtlKHtcblx0XHRcdFx0XHR4aTogaW5kZXggKiAyLFxuXHRcdFx0XHRcdGlzYmVnaW46IGZhbHNlLFxuXHRcdFx0XHRcdG5ldXJvOiB0aGlzLmJlc3RzbmFrZS5uZXVybyxcblx0XHRcdFx0XHRwclZhbDogdGhpcy5iZXN0c25ha2UucHJvbW90aW9uVmFsdWVcblx0XHRcdFx0fSkpO1xuXHRcdFx0XHR0aGlzLnNjb3JlLnB1c2goMCk7XG5cblx0XHRcdH1cblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHR0aGlzLmJlc3RzbmFrZS5wcm9tb3Rpb24oLTUgKiBNYXRoLnJhbmRvbSgpKTtcblxuXHRcdFx0dGhpcy5zbmFrZXNtYXNzLnB1c2gobmV3IFNuYWtlKHtcblxuXHRcdFx0XHRpc2JlZ2luOiBmYWxzZSxcblx0XHRcdFx0bmV1cm86IHRoaXMuYmVzdHNuYWtlLm5ldXJvLFxuXHRcdFx0XHRwclZhbDogdGhpcy5iZXN0c25ha2UucHJvbW90aW9uVmFsdWVcblx0XHRcdH0pKTtcblx0XHRcdHRoaXMuc2NvcmUucHVzaCgwKTtcblx0XHR9XG5cblx0XHR0aGlzLmZvb2QgPSAwO1xuXHRcdHRoaXMuZHJhd0dyaWQoKTtcblx0fVxuXHRnZXRSYW5kb21CZXR3ZWVuKG1pbiwgbWF4KSB7XG5cdFx0cmV0dXJuIG1pbiArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSk7XG5cdH1cblx0ZHJhd0Zvb2QoKSB7XG5cblx0XHRmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgNTA7IGluZGV4KyspIHtcblx0XHRcdGNvbnN0IGkgPSB0aGlzLmdldFJhbmRvbUJldHdlZW4oMCwgdGhpcy5ncmlkLmxlbmd0aCAtIDEpO1xuXHRcdFx0Y29uc3QgaiA9IHRoaXMuZ2V0UmFuZG9tQmV0d2VlbigwLCB0aGlzLmdyaWRbMF0ubGVuZ3RoIC0gMSk7XG5cdFx0XHRpZiAoIXRoaXMuZ3JpZFtpXVtqXS5pc0xpZmUpIHtcblx0XHRcdFx0dGhpcy5ncmlkW2ldW2pdLmlzRm9vZCA9IHRydWU7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmZvb2QrKztcblx0XHR9XG5cdH1cblx0cmVzaXplKCkge1xuXHRcdHRoaXMudmlldy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuXHRcdHRoaXMudmlldy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cdH1cbn1cbiIsImNvbnN0IHsgQ2FudmFzIH0gPSByZXF1aXJlKFwiLi9jYW52YXNcIik7XG5cbmxldCBjYW52YXNHcmlkID0gbmV3IENhbnZhcyh7IHI6IDIwIH0pO1xuXG5sZXQgbnVtYmVyTGlmZSA9IDA7XG5cblxuY29uc3QgY291bnRlckRPTSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb3VudGVyPnNwYW4nKTtcbmNvbnN0IGdlbmVyYXRpb25ET00gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2VuZXJhdGlvbj5zcGFuJyk7XG5jYW52YXNHcmlkLmRyYXdHcmlkKCk7XG5cbmRvY3VtZW50LmJvZHkuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmVlbmQnLCBjYW52YXNHcmlkLnZpZXcpO1xuXG5zdGFydF9hbmltYXRlKDApO1xuZnVuY3Rpb24gc3RhcnRfYW5pbWF0ZShkdXJhdGlvbikge1xuXHR2YXIgcmVxdWVzdElEO1xuXHR2YXIgc3RhcnRUaW1lID0gbnVsbDtcblx0dmFyIGFuaW1hdGUgPSBmdW5jdGlvbiAodGltZSkge1xuXHRcdHRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTsgLy9taWxsaXNlY29uZC10aW1zdGFtcFxuXHRcdGlmIChzdGFydFRpbWUgPT09IG51bGwpIHtcblx0XHRcdHN0YXJ0VGltZSA9IHRpbWU7XG5cdFx0fVxuXHRcdHZhciBwcm9ncmVzcyA9IHRpbWUgLSBzdGFydFRpbWU7XG5cblx0XHRzdGFydFRpbWUrKztcblxuXHRcdGlmIChwcm9ncmVzcyA+IGR1cmF0aW9uKSB7XG5cdFx0XHRnZXRSdWxlcygpO1xuXG5cdFx0XHRyZXF1ZXN0SUQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG5cdFx0XHRzdGFydFRpbWUgPSBudWxsO1xuXG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0Y2FuY2VsQW5pbWF0aW9uRnJhbWUocmVxdWVzdElEKTtcblx0XHR9XG5cdFx0cmVxdWVzdElEID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xuXHR9XG5cblxuXG5cdGFuaW1hdGUoKTtcbn1cbmZ1bmN0aW9uIGdldFJ1bGVzKHRpbWUpIHtcblxuXHRpZiAoY2FudmFzR3JpZC5mb29kID09IDApXG5cdFx0Y2FudmFzR3JpZC5kcmF3Rm9vZCgpO1xuXHRjb3VudGVyRE9NLmlubmVySFRNTCA9IGNhbnZhc0dyaWQuc2NvcmU7XG5cdGdlbmVyYXRpb25ET00uaW5uZXJIVE1MID0gY2FudmFzR3JpZC5nZW5lcmF0aW9uO1xuXHRjb25zdCByZXQgPSBjYW52YXNHcmlkLnVwZGF0ZUdyaWQoKTtcblx0aWYgKHJldCA9PSAtMSkge1xuXHRcdGNhbnZhc0dyaWQuY2xlYXJBbGwoKTtcblx0fVxuXG59IiwiaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSBcIi4vVmVjdG9yXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTmV1cm8ge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5pbnB1dCA9IFtdO1xyXG4gICAgICAgIHRoaXMuaGlkZSA9IFtdO1xyXG4gICAgICAgIHRoaXMuaGlkZUxlbmd0aCA9IDIwO1xyXG4gICAgICAgIHRoaXMucmVzdWx0ID0gW107XHJcbiAgICAgICAgdGhpcy5rZXk7XHJcbiAgICAgICAgdGhpcy5hbHBoYSA9IDAuMDU7XHJcbiAgICB9XHJcbiAgICB1cGRhdGUoaW5wdXREYXRhLCBpc0JlZ2luID0gZmFsc2UsIFByb21vdGlvbikge1xyXG4gICAgICAgIHRoaXMucmVzdWx0ID0gW107XHJcbiAgICAgICAgaWYgKGlzQmVnaW4pXHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgZGF0YSBvZiBpbnB1dERhdGEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5wdXQucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgd2VpZ2h0OiB0aGlzLmdlbmVyYXRlV2VpZ2h0KHRoaXMuaGlkZUxlbmd0aClcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaW5wdXREYXRhLmZvckVhY2goKGVsLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlucHV0W2ldLnZhbHVlID0gZWw7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5pbnB1dFtpXS53ZWlnaHQubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnB1dFtpXS53ZWlnaHRbaW5kZXhdID0gdGhpcy5pbnB1dFtpXS53ZWlnaHRbaW5kZXhdICsgTWF0aC5yYW5kb20oKSAqIFByb21vdGlvbjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc3RhcnQoaXNCZWdpbiwgUHJvbW90aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBnZW5lcmF0ZVdlaWdodChuKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IG1hc3NXID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IG47IGluZGV4KyspIHtcclxuICAgICAgICAgICAgbWFzc1cucHVzaChNYXRoLnJhbmRvbSgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG1hc3NXO1xyXG4gICAgfVxyXG4gICAgc3RhcnQoaXNCZWdpbiwgUHJvbW90aW9uKSB7XHJcbiAgICAgICAgbGV0IG1hc3NoaWRlID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuaGlkZUxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBtYXNzaGlkZS5wdXNoKDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGNvbnN0IHsgdmFsdWUsIHdlaWdodCB9IG9mIHRoaXMuaW5wdXQpIHtcclxuICAgICAgICAgICAgbGV0IGkgPSAwO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHcgb2Ygd2VpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICBtYXNzaGlkZVtpKytdICs9IHZhbHVlICogd1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBtYXNzaGlkZS5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgaWYgKGlzQmVnaW4pXHJcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGUucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG1hc3NoaWRlW2luZGV4XSxcclxuICAgICAgICAgICAgICAgICAgICB3ZWlnaHQ6IHRoaXMuZ2VuZXJhdGVXZWlnaHQoNClcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oaWRlW2luZGV4XS52YWx1ZSA9IG1hc3NoaWRlW2luZGV4XTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5oaWRlW2ldLndlaWdodC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGlkZVtpbmRleF0ud2VpZ2h0W2ldID0gdGhpcy5oaWRlW2luZGV4XS53ZWlnaHRbaV0gKyBNYXRoLnJhbmRvbSgpICogUHJvbW90aW9uO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZW5kKCk7XHJcblxyXG4gICAgfVxyXG4gICAgZW5kKCkge1xyXG4gICAgICAgIGxldCBtYXNzT3V0ID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCA0OyBqKyspIHtcclxuICAgICAgICAgICAgbWFzc091dC5wdXNoKDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGNvbnN0IHsgdmFsdWUsIHdlaWdodCB9IG9mIHRoaXMuaGlkZSkge1xyXG4gICAgICAgICAgICBsZXQgaSA9IDA7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgdyBvZiB3ZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgIG1hc3NPdXRbaSsrXSArPSB2YWx1ZSAqIHdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgbnVtT3V0IG9mIG1hc3NPdXQpIHtcclxuICAgICAgICAgICAgdGhpcy5yZXN1bHQucHVzaChudW1PdXQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzd2l0Y2ggKHRoaXMucmVzdWx0LmluZGV4T2YoTWF0aC5tYXguYXBwbHkobnVsbCwgdGhpcy5yZXN1bHQpKSkge1xyXG4gICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmtleSA9IFwiQXJyb3dVcFwiXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5rZXkgPSBcIkFycm93UmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgIHRoaXMua2V5ID0gXCJBcnJvd0Rvd25cIlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgIHRoaXMua2V5ID0gXCJBcnJvd0xlZnRcIlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBhY3RpdmF0aW9uKHMpIHtcclxuICAgICAgICByZXR1cm4gMSAvICgxICsgTWF0aC5FICoqICgtdGhpcy5hbHBoYSAqIHMpKTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=