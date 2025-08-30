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
const isResponseTypeJson_js_1 = require("../src/utils/isResponseTypeJson.js");
const deps_js_2 = require("../src/deps.js");
dntShim.Deno.test({
    name: "Check response type is json",
    fn() {
        const textJson = deps_js_2.MIMEType.parse("text/json");
        const applicationJson = deps_js_2.MIMEType.parse("application/json");
        const applicationJsonPatch = deps_js_2.MIMEType.parse("application/json-patch+json");
        const textHtml = deps_js_2.MIMEType.parse("text/html");
        const applicationHTML = deps_js_2.MIMEType.parse("application/html");
        (0, deps_js_1.assertEquals)((0, isResponseTypeJson_js_1.isResponseTypeJson)(textJson), true, "text/json");
        (0, deps_js_1.assertEquals)((0, isResponseTypeJson_js_1.isResponseTypeJson)(applicationJson), true, "application/json");
        (0, deps_js_1.assertEquals)((0, isResponseTypeJson_js_1.isResponseTypeJson)(applicationJsonPatch), true, "application/json-patch+json");
        (0, deps_js_1.assertEquals)((0, isResponseTypeJson_js_1.isResponseTypeJson)(textHtml), false, "text/html");
        (0, deps_js_1.assertEquals)((0, isResponseTypeJson_js_1.isResponseTypeJson)(applicationHTML), false, "application/html");
    },
});
