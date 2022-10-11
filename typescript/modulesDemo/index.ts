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

namespace Validation {
  export interface  StringValidator {
    isAcceptable(s :string): boolean;
  }
  let lettersRegexp = /^[A-Za-z]+$/;
  let numberRegexp = /^[0-9]+$/;

  export class LetterOnlyValidator implements StringValidator {
    isAcceptable(s: string): boolean {
      return lettersRegexp.test(s);
    }
  }

  export class ZipCodeValidator implements StringValidator {
    isAcceptable(s: string): boolean {
      return s.length === 5 && numberRegexp.test(s);
    }
  }
}
