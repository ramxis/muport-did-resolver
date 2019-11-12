"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolve = resolve;
exports.getResolver = getResolver;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _didResolver = require("did-resolver");

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

var INFURA = 'https://ipfs.infura.io/ipfs/';

function resolve(did, parsed) {
  var doc;
  return _regenerator["default"].async(function resolve$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _regenerator["default"].awrap(fetchMuPortDoc(null, parsed.id));

        case 2:
          doc = _context.sent;
          return _context.abrupt("return", wrapDocument(did, doc));

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
}

function getResolver(config) {
  return {
    'muport': resolve
  };
}

function fetchMuPortDoc(ipfs, ipfsHash) {
  var doc;
  return _regenerator["default"].async(function fetchMuPortDoc$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;

          if (!ipfs) {
            _context2.next = 9;
            break;
          }

          _context2.t1 = JSON;
          _context2.next = 5;
          return _regenerator["default"].awrap(ipfs.cat(ipfsHash));

        case 5:
          _context2.t2 = _context2.sent;
          _context2.t0 = _context2.t1.parse.call(_context2.t1, _context2.t2);
          _context2.next = 12;
          break;

        case 9:
          _context2.next = 11;
          return _regenerator["default"].awrap(httpFetch(ipfsHash));

        case 11:
          _context2.t0 = _context2.sent;

        case 12:
          doc = _context2.t0;
          _context2.next = 17;
          break;

        case 15:
          _context2.prev = 15;
          _context2.t3 = _context2["catch"](0);

        case 17:
          if (!(!doc || doc.version !== 1 || !doc.signingKey || !doc.managementKey || !doc.asymEncryptionKey)) {
            _context2.next = 27;
            break;
          }

          _context2.prev = 18;

          if (!ipfs) {
            _context2.next = 22;
            break;
          }

          _context2.next = 22;
          return _regenerator["default"].awrap(ipfs.pin.rm(ipfsHash));

        case 22:
          _context2.next = 26;
          break;

        case 24:
          _context2.prev = 24;
          _context2.t4 = _context2["catch"](18);

        case 26:
          throw new Error('Invalid muport did');

        case 27:
          return _context2.abrupt("return", doc);

        case 28:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 15], [18, 24]]);
}

function httpFetch(cid) {
  return _regenerator["default"].async(function httpFetch$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return _regenerator["default"].awrap((0, _nodeFetch["default"])(INFURA + cid));

        case 2:
          return _context3.abrupt("return", _context3.sent.json());

        case 3:
        case "end":
          return _context3.stop();
      }
    }
  });
}

function wrapDocument(did, muportDocument) {
  var doc = {
    "@context": "https://w3id.org/did/v1",
    "id": did,
    "publicKey": [{
      "id": did + "#signingKey",
      "type": "Secp256k1VerificationKey2018",
      "owner": did,
      "publicKeyHex": muportDocument.signingKey
    }, {
      "id": did + "#managementKey",
      "type": "Secp256k1VerificationKey2018",
      "owner": did
    }, {
      "id": did + "#encryptionKey",
      "type": "Curve25519EncryptionPublicKey",
      "owner": did,
      "publicKeyBase64": muportDocument.asymEncryptionKey
    }],
    "authentication": [{
      "type": "Secp256k1SignatureAuthentication2018",
      "publicKey": did + "#signingKey"
    }],
    "muportData": {}
  };

  if (muportDocument.managementKey.length === 42) {
    doc.publicKey[1].ethereumAddress = muportDocument.managementKey;
  } else {
    doc.publicKey[1].publicKeyHex = muportDocument.managementKey;
  }

  if (muportDocument.publicProfile) doc.uportProfile = muportDocument.publicProfile;
  if (muportDocument.symEncryptedData) doc.muportData.symEncryptedData = muportDocument.symEncryptedData;
  if (muportDocument.recoveryNetwork) doc.muportData.recoveryNetwork = muportDocument.recoveryNetwork;
  return doc;
}