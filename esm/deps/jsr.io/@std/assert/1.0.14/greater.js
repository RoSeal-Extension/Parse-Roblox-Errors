// Copyright 2018-2025 the Deno authors. MIT license.
// This module is browser compatible.
import { format } from "../../internal/1.0.10/format.js";
import { AssertionError } from "./assertion_error.js";
/**
 * Make an assertion that `actual` is greater than `expected`.
 * If not then throw.
 *
 * @example Usage
 * ```ts ignore
 * import { assertGreater } from "@std/assert";
 *
 * assertGreater(2, 1); // Doesn't throw
 * assertGreater(1, 1); // Throws
 * assertGreater(0, 1); // Throws
 * ```
 *
 * @typeParam T The type of the values to compare.
 * @param actual The actual value to compare.
 * @param expected The expected value to compare.
 * @param msg The optional message to display if the assertion fails.
 */
export function assertGreater(actual, expected, msg) {
    if (actual > expected)
        return;
    const actualString = format(actual);
    const expectedString = format(expected);
    throw new AssertionError(msg ?? `Expect ${actualString} > ${expectedString}`);
}
