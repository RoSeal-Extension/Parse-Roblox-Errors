"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertEquals = assertEquals;
// Copyright 2018-2025 the Deno authors. MIT license.
// This module is browser compatible.
const equal_js_1 = require("./equal.js");
const build_message_js_1 = require("../../internal/1.0.10/build_message.js");
const diff_js_1 = require("../../internal/1.0.10/diff.js");
const diff_str_js_1 = require("../../internal/1.0.10/diff_str.js");
const format_js_1 = require("../../internal/1.0.10/format.js");
const assertion_error_js_1 = require("./assertion_error.js");
/**
 * Make an assertion that `actual` and `expected` are equal, deeply. If not
 * deeply equal, then throw.
 *
 * Type parameter can be specified to ensure values under comparison have the
 * same type.
 *
 * Note: When comparing `Blob` objects, you should first convert them to
 * `Uint8Array` using the `Blob.bytes()` method and then compare their
 * contents.
 *
 * @example Usage
 * ```ts ignore
 * import { assertEquals } from "@std/assert";
 *
 * assertEquals("world", "world"); // Doesn't throw
 * assertEquals("hello", "world"); // Throws
 * ```
 * @example Compare `Blob` objects
 * ```ts ignore
 * import { assertEquals } from "@std/assert";
 *
 * const bytes1 = await new Blob(["foo"]).bytes();
 * const bytes2 = await new Blob(["foo"]).bytes();
 *
 * assertEquals(bytes1, bytes2);
 * ```
 *
 * @typeParam T The type of the values to compare. This is usually inferred.
 * @param actual The actual value to compare.
 * @param expected The expected value to compare.
 * @param msg The optional message to display if the assertion fails.
 */
function assertEquals(actual, expected, msg) {
    if ((0, equal_js_1.equal)(actual, expected)) {
        return;
    }
    const msgSuffix = msg ? `: ${msg}` : ".";
    let message = `Values are not equal${msgSuffix}`;
    const actualString = (0, format_js_1.format)(actual);
    const expectedString = (0, format_js_1.format)(expected);
    const stringDiff = (typeof actual === "string") &&
        (typeof expected === "string");
    const diffResult = stringDiff
        ? (0, diff_str_js_1.diffStr)(actual, expected)
        : (0, diff_js_1.diff)(actualString.split("\n"), expectedString.split("\n"));
    const diffMsg = (0, build_message_js_1.buildMessage)(diffResult, { stringDiff }).join("\n");
    message = `${message}\n${diffMsg}`;
    throw new assertion_error_js_1.AssertionError(message);
}
