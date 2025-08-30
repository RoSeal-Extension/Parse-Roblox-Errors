"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fail = fail;
// Copyright 2018-2025 the Deno authors. MIT license.
// This module is browser compatible.
const assertion_error_js_1 = require("./assertion_error.js");
/**
 * Forcefully throws a failed assertion.
 *
 * @example Usage
 * ```ts ignore
 * import { fail } from "@std/assert";
 *
 * fail("Deliberately failed!"); // Throws
 * ```
 *
 * @param msg Optional message to include in the error.
 * @returns Never returns, always throws.
 */
function fail(msg) {
    const msgSuffix = msg ? `: ${msg}` : ".";
    throw new assertion_error_js_1.AssertionError(`Failed assertion${msgSuffix}`);
}
