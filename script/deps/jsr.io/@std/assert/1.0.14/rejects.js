"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertRejects = assertRejects;
// Copyright 2018-2025 the Deno authors. MIT license.
// This module is browser compatible.
const assertion_error_js_1 = require("./assertion_error.js");
const is_error_js_1 = require("./is_error.js");
async function assertRejects(fn, errorClassOrMsg, msgIncludesOrMsg, msg) {
    // deno-lint-ignore no-explicit-any
    let ErrorClass;
    let msgIncludes;
    let err;
    if (typeof errorClassOrMsg !== "string") {
        if (errorClassOrMsg === undefined ||
            errorClassOrMsg.prototype instanceof Error ||
            errorClassOrMsg.prototype === Error.prototype) {
            ErrorClass = errorClassOrMsg;
            msgIncludes = msgIncludesOrMsg;
        }
    }
    else {
        msg = errorClassOrMsg;
    }
    let doesThrow = false;
    let isPromiseReturned = false;
    const msgSuffix = msg ? `: ${msg}` : ".";
    try {
        const possiblePromise = fn();
        if (possiblePromise &&
            typeof possiblePromise === "object" &&
            typeof possiblePromise.then === "function") {
            isPromiseReturned = true;
            await possiblePromise;
        }
        else {
            throw new Error();
        }
    }
    catch (error) {
        if (!isPromiseReturned) {
            throw new assertion_error_js_1.AssertionError(`Function throws when expected to reject${msgSuffix}`);
        }
        if (ErrorClass) {
            if (!(error instanceof Error)) {
                throw new assertion_error_js_1.AssertionError(`A non-Error object was rejected${msgSuffix}`);
            }
            (0, is_error_js_1.assertIsError)(error, ErrorClass, msgIncludes, msg);
        }
        err = error;
        doesThrow = true;
    }
    if (!doesThrow) {
        throw new assertion_error_js_1.AssertionError(`Expected function to reject${msgSuffix}`);
    }
    return err;
}
