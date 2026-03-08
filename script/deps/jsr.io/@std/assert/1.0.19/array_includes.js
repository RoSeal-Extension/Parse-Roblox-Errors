"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertArrayIncludes = assertArrayIncludes;
// Copyright 2018-2026 the Deno authors. MIT license.
// This module is browser compatible.
const equal_js_1 = require("./equal.js");
const format_js_1 = require("../../internal/1.0.12/format.js");
const assertion_error_js_1 = require("./assertion_error.js");
function isPrimitive(value) {
    return value === null ||
        typeof value !== "object" && typeof value !== "function";
}
/**
 * Asserts that `actual` contains all values in `expected`, using deep equality
 * for non-primitive values.
 *
 * @example Usage with primitives
 * ```ts ignore
 * import { assertArrayIncludes } from "@std/assert";
 *
 * assertArrayIncludes([1, 2, 3], [2, 3]); // Passes
 * assertArrayIncludes([1, 2, 3], [4]); // Throws
 * ```
 *
 * @example Usage with objects (deep equality)
 * ```ts ignore
 * import { assertArrayIncludes } from "@std/assert";
 *
 * assertArrayIncludes([{ a: 1 }, { b: 2 }], [{ a: 1 }]); // Passes
 * ```
 *
 * @typeParam T The element type of the arrays.
 * @param actual The array-like object to search within.
 * @param expected The values that must be present in `actual`.
 * @param msg Optional message to display on failure.
 * @throws {AssertionError} If any value in `expected` is not found in `actual`.
 */
function assertArrayIncludes(actual, expected, msg) {
    const missing = [];
    const expectedLen = expected.length;
    const actualLen = actual.length;
    for (let i = 0; i < expectedLen; i++) {
        const item = expected[i];
        let found;
        if (isPrimitive(item)) {
            // Fast path
            found = Array.prototype.includes.call(actual, item);
        }
        else {
            found = false;
            for (let j = 0; j < actualLen; j++) {
                if ((0, equal_js_1.equal)(item, actual[j])) {
                    found = true;
                    break;
                }
            }
        }
        if (!found) {
            missing.push(item);
        }
    }
    if (missing.length === 0) {
        return;
    }
    const msgSuffix = msg ? `: ${msg}` : ".";
    msg = `Expected actual: "${(0, format_js_1.format)(actual)}" to include: "${(0, format_js_1.format)(expected)}"${msgSuffix}\nmissing: ${(0, format_js_1.format)(missing)}`;
    throw new assertion_error_js_1.AssertionError(msg);
}
