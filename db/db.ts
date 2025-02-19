/**
 * @description
 * This file initializes the database connection (using Postgres) and consolidates
 * all defined tables into a single schema object. The Drizzle ORM `drizzle()` function
 * allows typed database queries across the entire codebase.
 *
 * Key features:
 * - Imports environment variables from `.env.local`.
 * - Sets up a Postgres client with connection pooling.
 * - Registers all schema tables for typed queries.
 *
 * @dependencies
 * - `postgres` library for the Postgres client.
 * - `drizzle-orm` for the typed query builder.
 * - Dotenv for reading environment variables.
 *
 * @notes
 * - Ensure the `DATABASE_URL` is correctly set in `.env.local`.
 * - The `schema` object merges all tables including `profiles`, `portfolioItems`, and `testimonials`.
 */

import {
  profilesTable,
  portfolioItemsTable,
  testimonialsTable
} from "@/db/schema"
import { config } from "dotenv"
import { drizzle } from "drizzle-orm/postgres-js"
import postgres from "postgres"

// Load environment variables from .env.local
config({ path: ".env.local" })

/**
 * The `schema` object aggregates all tables used in the application,
 * allowing a single source for typed queries.
 */
const schema = {
  profiles: profilesTable,
  portfolioItems: portfolioItemsTable,
  testimonials: testimonialsTable
}

/**
 * The Postgres client uses the connection URL from the environment variable.
 * If the variable is missing or invalid, this will throw an error on startup.
 */
const client = postgres(process.env.DATABASE_URL!)

/**
 * Export a typed database object for use throughout the app.
 */
export const db = drizzle(client, { schema })
