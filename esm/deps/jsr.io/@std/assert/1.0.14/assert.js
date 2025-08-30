// Copyright 2018-2025 the Deno authors. MIT license.
// This module is browser compatible.
import { AssertionError } from "./assertion_error.js";
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
export function assert(expr, msg = "") {
    if (!expr) {
        throw new AssertionError(msg);
    }
}
