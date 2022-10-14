/*
* jiulaw_monitor/core version 1.0.0
*/
'use strict';

var _concatInstanceProperty = require('@babel/runtime-corejs3/core-js-stable/instance/concat');
var _filterInstanceProperty = require('@babel/runtime-corejs3/core-js-stable/instance/filter');
var _Array$from = require('@babel/runtime-corejs3/core-js-stable/array/from');

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

var Animal = function () {
  function Animal(theName) {
    this.name = theName;
  }
  Animal.prototype.move = function (distanceInMeters) {
    var _context;
    if (distanceInMeters === void 0) {
      distanceInMeters = 0;
    }
    console.log(_concatInstanceProperty(_context = "".concat(this.name, " moved ")).call(_context, distanceInMeters, "m."));
  };
  return Animal;
}();
var Snake = function (_super) {
  __extends(Snake, _super);
  function Snake(name) {
    return _super.call(this, name) || this;
  }
  Snake.prototype.move = function (distanceInMeters) {
    if (distanceInMeters === void 0) {
      distanceInMeters = 5;
    }
    console.log("Slithering...");
    _super.prototype.move.call(this, distanceInMeters);
  };
  return Snake;
}(Animal);
var Horse = function (_super) {
  __extends(Horse, _super);
  function Horse(name) {
    return _super.call(this, name) || this;
  }
  Horse.prototype.move = function (distanceInMeters) {
    if (distanceInMeters === void 0) {
      distanceInMeters = 45;
    }
    console.log("Galloping...");
    _super.prototype.move.call(this, distanceInMeters);
  };
  Horse.prototype.test_includes = function (arr, id) {
    return _filterInstanceProperty(arr).call(arr, function (i) {
      return i.id === id;
    });
  };
  Horse.prototype.test_1 = function (arr) {
    return _Array$from(arr);
  };
  Horse.prototype.test_2 = function (arr) {
    return __spreadArray([], arr, true);
  };
  return Horse;
}(Animal);
var sam = new Snake("Sammy the Python");
var tom = new Horse("Tommy the Palomino");

exports.sam = sam;
exports.tom = tom;
//# sourceMappingURL=core.js.map
