"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertStringIncludes = assertStringIncludes;
// Copyright 2018-2025 the Deno authors. MIT license.
// This module is browser compatible.
const assertion_error_js_1 = require("./assertion_error.js");
/**
 * Make an assertion that actual includes expected. If not
 * then throw.
 *
 * @example Usage
 * ```ts ignore
 * import { assertStringIncludes } from "@std/assert";
 *
 * assertStringIncludes("Hello", "ello"); // Doesn't throw
 * assertStringIncludes("Hello", "world"); // Throws
 * ```
 *
 * @param actual The actual string to check for inclusion.
 * @param expected The expected string to check for inclusion.
 * @param msg The optional message to display if the assertion fails.
 */
function assertStringIncludes(actual, expected, msg) {
    if (actual.includes(expected))
        return;
    const msgSuffix = msg ? `: ${msg}` : ".";
    msg = `Expected actual: "${actual}" to contain: "${expected}"${msgSuffix}`;
    throw new assertion_error_js_1.AssertionError(msg);
}
