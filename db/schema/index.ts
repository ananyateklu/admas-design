/**
 * @description
 * This file re-exports the schemas for all database tables in a single location.
 * By doing so, we can easily import them from elsewhere in the codebase.
 *
 * Key features:
 * - Central place to export new schemas (profiles, portfolio items, testimonials, etc.).
 * - Maintains consistent usage throughout the application.
 *
 * @notes
 * - Make sure to add newly created tables here for easy import across the app.
 */

export * from "./profiles-schema"
export * from "./portfolio-schema"
export * from "./testimonials-schema"
