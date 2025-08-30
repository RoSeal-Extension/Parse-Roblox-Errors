"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assert = assert;
// Copyright 2018-2025 the Deno authors. MIT license.
// This module is browser compatible.
const assertion_error_js_1 = require("./assertion_error.js");
/**
 * Make an assertion, error will be thrown if `expr` does not have truthy value.
 *
 * @example Usage
 * ```ts ignore
 * import { assert } from "@std/assert";
 *
 * assert("hello".includes("ello")); // Doesn't throw
 * assert("hello".includes("world")); // Throws
 * ```
 *
 * @param expr The expression to test.
 * @param msg The optional message to display if the assertion fails.
 */
function assert(expr, msg = "") {
    if (!expr) {
        throw new assertion_error_js_1.AssertionError(msg);
    }
}
