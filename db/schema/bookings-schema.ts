/**
 * @description
 * This file defines and exports the schema for the `bookings` table using Drizzle ORM.
 * The `bookings` table stores user booking data associated with various services.
 *
 * Key features:
 * - References a user in the `profilesTable` by `userId`, ensuring a relational link.
 * - Allows tracking of the booking status (e.g., "pending", "paid", "canceled") and the date/time it's scheduled.
 * - Automatically manages `created_at` and `updated_at` timestamps for auditing.
 *
 * @dependencies
 * - drizzle-orm/pg-core: For defining columns and data types (uuid, text, timestamp).
 * - profilesTable from profiles-schema.ts for the foreign key relationship.
 *
 * @notes
 * - The `serviceType` field is stored as a text column to allow flexible naming of service categories.
 * - The `status` field is also text to keep it flexible for various booking states ("pending", "paid", "canceled", etc.).
 * - Cascade delete is used so that if a profile is removed, all associated bookings are also removed.
 */

import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core"
import { profilesTable } from "./profiles-schema"

/**
 * The `bookingsTable` describes the columns for user bookings.
 * - `id`: Primary key, defaulting to a random UUID.
 * - `userId`: Foreign key referencing `profilesTable.userId`.
 * - `serviceType`: The type of service being booked, e.g., "UI/UX", "Branding", etc.
 * - `status`: The status of the booking, e.g., "pending", "paid", "canceled".
 * - `scheduledDate`: The timestamp indicating when the service or consultation will occur.
 * - `createdAt` and `updatedAt`: Timestamps for auditing record creation and updates.
 */
export const bookingsTable = pgTable("bookings", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: text("user_id")
    .references(() => profilesTable.userId, { onDelete: "cascade" })
    .notNull(),
  serviceType: text("service_type").notNull(),
  status: text("status").notNull().default("pending"),
  scheduledDate: timestamp("scheduled_date").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .notNull()
    .$onUpdate(() => new Date())
})

/**
 * InsertBooking is the type used when inserting a new booking record.
 * SelectBooking is the type returned when reading from the `bookingsTable`.
 */
export type InsertBooking = typeof bookingsTable.$inferInsert
export type SelectBooking = typeof bookingsTable.$inferSelect
