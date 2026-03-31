import { pgTable, text, timestamp } from 'drizzle-orm/pg-core';

export const memberships = pgTable('memberships', {
  id: text('id').primaryKey(),
  userId: text('user_id').notNull(),
  tenantId: text('tenant_id').notNull(),
  role: text('role').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
});