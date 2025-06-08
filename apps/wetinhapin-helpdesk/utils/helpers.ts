import {MissingEnvVarError} from "@/utils/errors";

/**
 * Retrieve an environment variable, throwing a MissingEnvVarError if it’s not set.
 *
 * @param key - The name of the environment variable to read.
 * @returns The string value of `process.env[key]`.
 * @throws {MissingEnvVarError} When `process.env[key]` is undefined or empty.
 *
 * @example
 * // Given process.env.API_URL="https://…"
 * const apiUrl = assertEnvVar("API_URL");
 */
export function assertEnvVar(key: string): string {
    const value = process.env[key];
    if (!value) throw new MissingEnvVarError(key);

    return value;
}
