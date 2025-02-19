/**
 * @description
 * This file defines and exports the schema for the `portfolio_items` table using Drizzle ORM.
 * The `portfolio_items` table stores data about each portfolio project, including titles,
 * descriptions, category, and timestamps. It supports both English and Amharic fields.
 *
 * Key features:
 * - Contains columns for English and Amharic variants of project titles and descriptions.
 * - Uses UUIDs as primary keys for each item, defaulting to a random UUID.
 * - Automatically manages `createdAt` and `updatedAt` timestamps.
 *
 * @dependencies
 * - drizzle-orm/pg-core: Provides the data types (uuid, text, timestamp).
 * - The exported table is then registered in db/db.ts within the schema object.
 *
 * @notes
 * - This schema ensures easy localization by providing separate fields for EN/AM text.
 * - The table references do not currently have an FK to any other table,
 *   but it could be linked to a user or account in future expansions.
 */

import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core"

/**
 * The `portfolio_itemsTable` describes the columns for portfolio items/projects.
 */
export const portfolioItemsTable = pgTable("portfolio_items", {
  id: uuid("id").defaultRandom().primaryKey(),
  titleEn: text("title_en").notNull(),
  titleAm: text("title_am").notNull(),
  descriptionEn: text("description_en"),
  descriptionAm: text("description_am"),
  category: text("category"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .notNull()
    .$onUpdate(() => new Date())
})

/**
 * InsertPortfolioItem is the type used to insert a new row.
 * SelectPortfolioItem is the type returned when reading from the table.
 */
export type InsertPortfolioItem = typeof portfolioItemsTable.$inferInsert
export type SelectPortfolioItem = typeof portfolioItemsTable.$inferSelect
