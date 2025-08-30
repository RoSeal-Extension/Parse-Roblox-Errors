"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertArrayIncludes = assertArrayIncludes;
// Copyright 2018-2025 the Deno authors. MIT license.
// This module is browser compatible.
const equal_js_1 = require("./equal.js");
const format_js_1 = require("../../internal/1.0.10/format.js");
const assertion_error_js_1 = require("./assertion_error.js");
/**
 * Make an assertion that `actual` includes the `expected` values. If not then
 * an error will be thrown.
 *
 * Type parameter can be specified to ensure values under comparison have the
 * same type.
 *
 * @example Usage
 * ```ts ignore
 * import { assertArrayIncludes } from "@std/assert";
 *
 * assertArrayIncludes([1, 2], [2]); // Doesn't throw
 * assertArrayIncludes([1, 2], [3]); // Throws
 * ```
 *
 * @typeParam T The type of the elements in the array to compare.
 * @param actual The array-like object to check for.
 * @param expected The array-like object to check for.
 * @param msg The optional message to display if the assertion fails.
 */
function assertArrayIncludes(actual, expected, msg) {
    const missing = [];
    for (let i = 0; i < expected.length; i++) {
        let found = false;
        for (let j = 0; j < actual.length; j++) {
            if ((0, equal_js_1.equal)(expected[i], actual[j])) {
                found = true;
                break;
            }
        }
        if (!found) {
            missing.push(expected[i]);
        }
    }
    if (missing.length === 0) {
        return;
    }
    const msgSuffix = msg ? `: ${msg}` : ".";
    msg = `Expected actual: "${(0, format_js_1.format)(actual)}" to include: "${(0, format_js_1.format)(expected)}"${msgSuffix}\nmissing: ${(0, format_js_1.format)(missing)}`;
    throw new assertion_error_js_1.AssertionError(msg);
}
