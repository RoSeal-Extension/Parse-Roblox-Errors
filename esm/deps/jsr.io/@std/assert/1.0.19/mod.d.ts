/** A library of assertion functions.
 * If the assertion is false an `AssertionError` will be thrown which will
 * result in pretty-printed diff of the failing assertion.
 *
 * This module is browser compatible, but do not rely on good formatting of
 * values for AssertionError messages in browsers.
 *
 * ```ts ignore
 * import { assert } from "@std/assert";
 *
 * assert("I am truthy"); // Doesn't throw
 * assert(false); // Throws `AssertionError`
 * ```
 *
 * @module
 */
export * from "./almost_equals.js";
export * from "./array_includes.js";
export * from "./equals.js";
export * from "./exists.js";
export * from "./false.js";
export * from "./greater_or_equal.js";
export * from "./greater.js";
export * from "./instance_of.js";
export * from "./is_error.js";
export * from "./less_or_equal.js";
export * from "./less.js";
export * from "./match.js";
export * from "./not_equals.js";
export * from "./not_instance_of.js";
export * from "./not_match.js";
export * from "./not_strict_equals.js";
export * from "./object_match.js";
export * from "./rejects.js";
export * from "./strict_equals.js";
export * from "./string_includes.js";
export * from "./throws.js";
export * from "./assert.js";
export * from "./assertion_error.js";
export * from "./equal.js";
export * from "./fail.js";
export * from "./unimplemented.js";
export * from "./unreachable.js";
