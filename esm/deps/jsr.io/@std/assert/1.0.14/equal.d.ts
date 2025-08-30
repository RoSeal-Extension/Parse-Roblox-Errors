/**
 * Deep equality comparison used in assertions.
 *
 * @param a The actual value
 * @param b The expected value
 * @returns `true` if the values are deeply equal, `false` otherwise
 *
 * @example Usage
 * ```ts
 * import { equal } from "@std/assert/equal";
 *
 * equal({ foo: "bar" }, { foo: "bar" }); // Returns `true`
 * equal({ foo: "bar" }, { foo: "baz" }); // Returns `false`
 * ```
 */
export declare function equal(a: unknown, b: unknown): boolean;
