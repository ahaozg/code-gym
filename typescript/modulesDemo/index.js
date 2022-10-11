//
// interface  StringValidator {
//   isAcceptable(s :string): boolean;
// }
//
// let lettersRegexp = /^[A-Za-z]+$/;
// let numberRegexp = /^[0-9]+$/;
//
// class LetterOnlyValidator implements StringValidator {
//   isAcceptable(s: string): boolean {
//     return lettersRegexp.test(s);
//   }
// }
//
// class ZipCodeValidator implements StringValidator {
//   isAcceptable(s: string): boolean {
//     return s.length === 5 && numberRegexp.test(s);
//   }
// }
var Validation;
(function (Validation) {
    var lettersRegexp = /^[A-Za-z]+$/;
    var numberRegexp = /^[0-9]+$/;
    var LetterOnlyValidator = /** @class */ (function () {
        function LetterOnlyValidator() {
        }
        LetterOnlyValidator.prototype.isAcceptable = function (s) {
            return lettersRegexp.test(s);
        };
        return LetterOnlyValidator;
    }());
    Validation.LetterOnlyValidator = LetterOnlyValidator;
    var ZipCodeValidator = /** @class */ (function () {
        function ZipCodeValidator() {
        }
        ZipCodeValidator.prototype.isAcceptable = function (s) {
            return s.length === 5 && numberRegexp.test(s);
        };
        return ZipCodeValidator;
    }());
    Validation.ZipCodeValidator = ZipCodeValidator;
})(Validation || (Validation = {}));
//
//
