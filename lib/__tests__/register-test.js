"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _didResolver = _interopRequireDefault(require("did-resolver"));

var _register = _interopRequireDefault(require("../register"));

var didDoc1 = {
  "@context": "https://w3id.org/did/v1",
  "authentication": [{
    "publicKey": "did:muport:QmRhjfL4HLdB8LovGf1o43NJ8QnbfqmpdnTuBvZTewnuBV#signingKey",
    "type": "Secp256k1SignatureAuthentication2018"
  }],
  "id": "did:muport:QmRhjfL4HLdB8LovGf1o43NJ8QnbfqmpdnTuBvZTewnuBV",
  "muportData": {
    "symEncryptedData": {}
  },
  "publicKey": [{
    "id": "did:muport:QmRhjfL4HLdB8LovGf1o43NJ8QnbfqmpdnTuBvZTewnuBV#signingKey",
    "owner": "did:muport:QmRhjfL4HLdB8LovGf1o43NJ8QnbfqmpdnTuBvZTewnuBV",
    "publicKeyHex": "02756bca1edf0d0e263851b95e7963b4721d82c2e84c9d7f8a380f899dff8f721c",
    "type": "Secp256k1VerificationKey2018"
  }, {
    "id": "did:muport:QmRhjfL4HLdB8LovGf1o43NJ8QnbfqmpdnTuBvZTewnuBV#managementKey",
    "owner": "did:muport:QmRhjfL4HLdB8LovGf1o43NJ8QnbfqmpdnTuBvZTewnuBV",
    "publicKeyHex": "0214ca1c21dfa6bb2550a8559e83817ebd82cfbb8dbda56757f4c0517dde9c52ff",
    "type": "Secp256k1VerificationKey2018"
  }, {
    "id": "did:muport:QmRhjfL4HLdB8LovGf1o43NJ8QnbfqmpdnTuBvZTewnuBV#encryptionKey",
    "owner": "did:muport:QmRhjfL4HLdB8LovGf1o43NJ8QnbfqmpdnTuBvZTewnuBV",
    "publicKeyBase64": "uYGr6nD/c/2hQ3hNFrWUWAdlNoelPqduYyyafrALf2U=",
    "type": "Curve25519EncryptionPublicKey"
  }],
  "uportProfile": {
    "name": "lala"
  }
};
var didDoc2 = {
  "@context": "https://w3id.org/did/v1",
  "authentication": [{
    "publicKey": "did:muport:QmRhjfL4HLdB8LovGf1o43NJ8QnbfqmpdnTuBvZTewnuBV#signingKey",
    "type": "Secp256k1SignatureAuthentication2018"
  }],
  "id": "did:muport:QmRhjfL4HLdB8LovGf1o43NJ8QnbfqmpdnTuBvZTewnuBV",
  "muportData": {
    "symEncryptedData": {}
  },
  "publicKey": [{
    "id": "did:muport:QmRhjfL4HLdB8LovGf1o43NJ8QnbfqmpdnTuBvZTewnuBV#signingKey",
    "owner": "did:muport:QmRhjfL4HLdB8LovGf1o43NJ8QnbfqmpdnTuBvZTewnuBV",
    "publicKeyHex": "027587672345787832457234587973b4721d82c2e84c9d7f8a380f899dff8f721c",
    "type": "Secp256k1VerificationKey2018"
  }, {
    "id": "did:muport:QmRhjfL4HLdB8LovGf1o43NJ8QnbfqmpdnTuBvZTewnuBV#managementKey",
    "owner": "did:muport:QmRhjfL4HLdB8LovGf1o43NJ8QnbfqmpdnTuBvZTewnuBV",
    "publicKeyHex": "098772359877345987733459987873459898772340bda56757f4c0517dde9c52ff",
    "type": "Secp256k1VerificationKey2018"
  }, {
    "id": "did:muport:QmRhjfL4HLdB8LovGf1o43NJ8QnbfqmpdnTuBvZTewnuBV#encryptionKey",
    "owner": "did:muport:QmRhjfL4HLdB8LovGf1o43NJ8QnbfqmpdnTuBvZTewnuBV",
    "publicKeyBase64": "uYGr6nD/c/29834589834AdlNoelPqduYyyafrALf2U=",
    "type": "Curve25519EncryptionPublicKey"
  }],
  "uportProfile": {
    "name": "blub"
  }
};
var muportDoc1 = '{"version":1,"signingKey":"02756bca1edf0d0e263851b95e7963b4721d82c2e84c9d7f8a380f899dff8f721c","managementKey":"0214ca1c21dfa6bb2550a8559e83817ebd82cfbb8dbda56757f4c0517dde9c52ff","asymEncryptionKey":"uYGr6nD/c/2hQ3hNFrWUWAdlNoelPqduYyyafrALf2U=","publicProfile":{"name":"lala"},"symEncryptedData":{}}';
var muportDoc2 = '{"version":1,"signingKey":"027587672345787832457234587973b4721d82c2e84c9d7f8a380f899dff8f721c","managementKey":"098772359877345987733459987873459898772340bda56757f4c0517dde9c52ff","asymEncryptionKey":"uYGr6nD/c/29834589834AdlNoelPqduYyyafrALf2U=","publicProfile":{"name":"blub"},"symEncryptedData":{}}';
var IPFS_MOCK = {
  cat: function cat(hash) {
    return _regenerator["default"].async(function cat$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(hash === 'QmRhjfL4HLdB8LovGf1o43NJ8QnbfqmpdnTuBvZTewnuBV')) {
              _context.next = 4;
              break;
            }

            return _context.abrupt("return", muportDoc1);

          case 4:
            if (!(hash === 'QmZZBBKPS2NWc6PMZbUk9zUHCo1SHKzQPPX4ndfwaYzmP1')) {
              _context.next = 8;
              break;
            }

            return _context.abrupt("return", muportDoc2);

          case 8:
            throw new Error('Error: blablabla');

          case 9:
          case "end":
            return _context.stop();
        }
      }
    });
  }
};
describe('µPortResolver', function () {
  describe('resolve', function () {
    describe('valid DID docs', function _callee2() {
      return _regenerator["default"].async(function _callee2$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              it('resolves document', function _callee() {
                return _regenerator["default"].async(function _callee$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        (0, _register["default"])(IPFS_MOCK);
                        _context2.next = 3;
                        return _regenerator["default"].awrap(expect((0, _didResolver["default"])('did:muport:QmRhjfL4HLdB8LovGf1o43NJ8QnbfqmpdnTuBvZTewnuBV')).resolves.toEqual(didDoc1));

                      case 3:
                      case "end":
                        return _context2.stop();
                    }
                  }
                });
              });

            case 1:
            case "end":
              return _context3.stop();
          }
        }
      });
    });
    describe('error handling', function () {
      it('rejects promise', function _callee3() {
        return _regenerator["default"].async(function _callee3$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                (0, _register["default"])(IPFS_MOCK);
                _context4.next = 3;
                return _regenerator["default"].awrap(expect((0, _didResolver["default"])('did:muport:tmaZBBKPS2NWc6PMZbUk9zUHCo1SHKzQPPX4ndfwaYzmxs')).rejects.toThrow('Invalid muport did'));

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        });
      });
    });
    describe.skip('registry lookup', function () {
      it('looks up hash from registry', function _callee4() {
        return _regenerator["default"].async(function _callee4$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                (0, _register["default"])(IPFS_MOCK);
                _context5.next = 3;
                return _regenerator["default"].awrap(expect((0, _didResolver["default"])('did:muport:QmRhjfL4HLdB8LovGf1o43NJ8QnbfqmpdnTuBvZTewnuBV')).resolves.toEqual(didDoc2));

              case 3:
              case "end":
                return _context5.stop();
            }
          }
        });
      });
    });
  });
});