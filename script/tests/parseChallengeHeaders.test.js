"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const dntShim = __importStar(require("../_dnt.test_shims.js"));
const deps_js_1 = require("./deps.js");
const mod_js_1 = require("../mod.js");
dntShim.Deno.test({
    name: "Parse challenge headers from response",
    fn() {
        (0, deps_js_1.assertEquals)((0, mod_js_1.parseChallengeHeaders)(new Headers({
            [mod_js_1.GENERIC_CHALLENGE_TYPE_HEADER]: "captcha",
            [mod_js_1.GENERIC_CHALLENGE_ID_HEADER]: "1",
            [mod_js_1.GENERIC_CHALLENGE_METADATA_HEADER]: "2",
        })), {
            challengeType: "captcha",
            challengeId: "1",
            challengeBase64Metadata: "2",
        });
        (0, deps_js_1.assertEquals)((0, mod_js_1.parseChallengeHeaders)(new Headers()), null);
    },
});
