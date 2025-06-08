/** Thrown when we look up an ENV key that doesn’t exist or is empty. */
export class MissingEnvVarError extends Error {
    constructor(public readonly key: string) {
        super(`Missing environment variable: ${key}`);
        this.name = 'MissingEnvVarError';
        // preserve where it was created, not just “Error”:
        Error.captureStackTrace(this, MissingEnvVarError);
    }
}

/** A general “we expected some config to be valid JSON but it wasn’t.” */
export class InvalidConfigError extends Error {
    constructor(public readonly key: string, public readonly rawValue: string) {
        super(`Invalid JSON in config ${key}: ${rawValue}`);
        this.name = 'InvalidConfigError';
        Error.captureStackTrace(this, InvalidConfigError);
    }
}

/** Thrown when you can’t find a database record that you should have. */
export class NotFoundError extends Error {
    constructor(public readonly resource: string, public readonly query?: unknown) {
        super(`${resource} not found${query ? ` (${JSON.stringify(query)})` : ''}`);
        this.name = 'NotFoundError';
        Error.captureStackTrace(this, NotFoundError);
    }
}

/** Bad user input — e.g. an OTP that fails validation. */
export class ValidationError extends Error {
    constructor(public readonly details: string) {
        super(`Validation failed: ${details}`);
        this.name = 'ValidationError';
        Error.captureStackTrace(this, ValidationError);
    }
}

/**
 * Thrown when authentication fails (e.g., bad magic link or expired OTP).
 */
export class AuthenticationError extends Error {
    constructor(message = 'Authentication failed') {
        super(message);
        this.name = 'AuthenticationError';
        Error.captureStackTrace(this, AuthenticationError);
    }
}

/**
 * Thrown when a user is authenticated but not authorized to perform an action.
 */
export class AuthorizationError extends Error {
    constructor(message = 'Not authorized to perform this action') {
        super(message);
        this.name = 'AuthorizationError';
        Error.captureStackTrace(this, AuthorizationError);
    }
}

/**
 * Wraps low‑level database failures.
 */
export class DatabaseError extends Error {
    constructor(message: string, public readonly originalError?: unknown) {
        super(`Database error: ${message}`);
        this.name = 'DatabaseError';
        Error.captureStackTrace(this, DatabaseError);
    }
}

/**
 * Represents any failure coming from an external service
 * like email delivery, Supabase client, or third‑party API.
 */
export class ExternalServiceError extends Error {
    constructor(serviceName: string, message: string, public readonly details?: unknown) {
        super(`External service (${serviceName}) error: ${message}`);
        this.name = 'ExternalServiceError';
        Error.captureStackTrace(this, ExternalServiceError);
    }
}

/**
 * Thrown when an operation is blocked due to hitting a rate limit.
 */
export class RateLimitError extends Error {
    constructor(message = 'Too many requests, please try again later') {
        super(message);
        this.name = 'RateLimitError';
        Error.captureStackTrace(this, RateLimitError);
    }
}
