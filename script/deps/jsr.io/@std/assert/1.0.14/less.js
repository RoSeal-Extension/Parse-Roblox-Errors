"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertLess = assertLess;
// Copyright 2018-2025 the Deno authors. MIT license.
// This module is browser compatible.
const format_js_1 = require("../../internal/1.0.10/format.js");
const assertion_error_js_1 = require("./assertion_error.js");
/**
 * Make an assertion that `actual` is less than `expected`.
 * If not then throw.
 *
 * @example Usage
 * ```ts ignore
 * import { assertLess } from "@std/assert";
 *
 * assertLess(1, 2); // Doesn't throw
 * assertLess(2, 1); // Throws
 * ```
 *
 * @typeParam T The type of the values to compare.
 * @param actual The actual value to compare.
 * @param expected The expected value to compare.
 * @param msg The optional message to display if the assertion fails.
 */
function assertLess(actual, expected, msg) {
    if (actual < expected)
        return;
    const actualString = (0, format_js_1.format)(actual);
    const expectedString = (0, format_js_1.format)(expected);
    throw new assertion_error_js_1.AssertionError(msg ?? `Expect ${actualString} < ${expectedString}`);
}
