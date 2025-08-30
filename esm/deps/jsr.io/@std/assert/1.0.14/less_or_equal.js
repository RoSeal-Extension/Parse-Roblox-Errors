// Copyright 2018-2025 the Deno authors. MIT license.
// This module is browser compatible.
import { format } from "../../internal/1.0.10/format.js";
import { AssertionError } from "./assertion_error.js";
/**
 * Make an assertion that `actual` is less than or equal to `expected`.
 * If not then throw.
 *
 * @example Usage
 * ```ts ignore
 * import { assertLessOrEqual } from "@std/assert";
 *
 * assertLessOrEqual(1, 2); // Doesn't throw
 * assertLessOrEqual(1, 1); // Doesn't throw
 * assertLessOrEqual(1, 0); // Throws
 * ```
 *
 * @typeParam T The type of the values to compare.
 * @param actual The actual value to compare.
 * @param expected The expected value to compare.
 * @param msg The optional message to display if the assertion fails.
 */
export function assertLessOrEqual(actual, expected, msg) {
    if (actual <= expected)
        return;
    const actualString = format(actual);
    const expectedString = format(expected);
    throw new AssertionError(msg ?? `Expect ${actualString} <= ${expectedString}`);
}
