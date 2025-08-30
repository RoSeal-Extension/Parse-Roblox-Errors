// Copyright 2018-2025 the Deno authors. MIT license.
// This module is browser compatible.
import { AssertionError } from "./assertion_error.js";
/**
 * Use this to assert unreachable code.
 *
 * @example Usage
 * ```ts ignore
 * import { unreachable } from "@std/assert";
 *
 * unreachable(); // Throws
 * ```
 *
 * @param msg Optional message to include in the error.
 * @returns Never returns, always throws.
 */
export function unreachable(msg) {
    const msgSuffix = msg ? `: ${msg}` : ".";
    throw new AssertionError(`Unreachable${msgSuffix}`);
}
