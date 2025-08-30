"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unimplemented = unimplemented;
// Copyright 2018-2025 the Deno authors. MIT license.
// This module is browser compatible.
const assertion_error_js_1 = require("./assertion_error.js");
/**
 * Use this to stub out methods that will throw when invoked.
 *
 * @example Usage
 * ```ts ignore
 * import { unimplemented } from "@std/assert";
 *
 * unimplemented(); // Throws
 * ```
 *
 * @param msg Optional message to include in the error.
 * @returns Never returns, always throws.
 */
function unimplemented(msg) {
    const msgSuffix = msg ? `: ${msg}` : ".";
    throw new assertion_error_js_1.AssertionError(`Unimplemented${msgSuffix}`);
}
