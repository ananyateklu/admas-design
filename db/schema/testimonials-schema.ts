/**
 * @description
 * This file defines and exports the schema for the `testimonials` table using Drizzle ORM.
 * The `testimonials` table stores client feedback linked to specific portfolio items.
 *
 * Key features:
 * - Each testimonial references a portfolio item ID (with cascade delete).
 * - Stores textual feedback in both English and Amharic.
 * - Includes a basic integer rating from 1 to 5.
 *
 * @dependencies
 * - drizzle-orm/pg-core: Provides the data types (uuid, text, timestamp, etc.).
 * - `portfolioItemsTable` from portfolio-schema, used for FK references.
 *
 * @notes
 * - Deleting a portfolio item cascades to all associated testimonials.
 * - Ratings are assumed to be an integer in the range [1..5].
 * - In production, consider adding constraints for rating validity if required.
 */

import { pgTable, text, timestamp, uuid, integer } from "drizzle-orm/pg-core"
import { portfolioItemsTable } from "./portfolio-schema"

/**
 * The `testimonialsTable` describes the columns for client testimonials.
 * Each testimonial must reference an existing portfolio item.
 */
export const testimonialsTable = pgTable("testimonials", {
  id: uuid("id").defaultRandom().primaryKey(),
  portfolioItemId: uuid("portfolio_item_id")
    .references(() => portfolioItemsTable.id, { onDelete: "cascade" })
    .notNull(),
  clientName: text("client_name"),
  textEn: text("text_en"),
  textAm: text("text_am"),
  rating: integer("rating"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .notNull()
    .$onUpdate(() => new Date())
})

/**
 * InsertTestimonial is used to insert a new testimonial.
 * SelectTestimonial is the type returned when reading from the table.
 */
export type InsertTestimonial = typeof testimonialsTable.$inferInsert
export type SelectTestimonial = typeof testimonialsTable.$inferSelect
