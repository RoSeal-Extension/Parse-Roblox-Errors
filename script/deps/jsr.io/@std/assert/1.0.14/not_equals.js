"use strict";
// Copyright 2018-2025 the Deno authors. MIT license.
// This module is browser compatible.
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertNotEquals = assertNotEquals;
const equal_js_1 = require("./equal.js");
const assertion_error_js_1 = require("./assertion_error.js");
const format_js_1 = require("../../internal/1.0.10/format.js");
/**
 * Make an assertion that `actual` and `expected` are not equal, deeply.
 * If not then throw.
 *
 * Type parameter can be specified to ensure values under comparison have the same type.
 *
 * @example Usage
 * ```ts ignore
 * import { assertNotEquals } from "@std/assert";
 *
 * assertNotEquals(1, 2); // Doesn't throw
 * assertNotEquals(1, 1); // Throws
 * ```
 *
 * @typeParam T The type of the values to compare.
 * @param actual The actual value to compare.
 * @param expected The expected value to compare.
 * @param msg The optional message to display if the assertion fails.
 */
function assertNotEquals(actual, expected, msg) {
    if (!(0, equal_js_1.equal)(actual, expected)) {
        return;
    }
    const actualString = (0, format_js_1.format)(actual);
    const expectedString = (0, format_js_1.format)(expected);
    const msgSuffix = msg ? `: ${msg}` : ".";
    throw new assertion_error_js_1.AssertionError(`Expected actual: ${actualString} not to be: ${expectedString}${msgSuffix}`);
}
