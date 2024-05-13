import { relations, sql } from "drizzle-orm"
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core"
import { createInsertSchema, createSelectSchema } from "drizzle-zod"

// Tables

export const users = sqliteTable("users", {
  id: integer("id").primaryKey(),
  kindeId: text("kinde_id").notNull(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
})
export const insertUsersSchema = createInsertSchema(users)
export const selectUsersSchema = createSelectSchema(users)

export const blogs = sqliteTable("blogs", {
  path: text("path").primaryKey(),
  likes: integer("likes").default(0).notNull(),
  views: integer("views").default(0).notNull(),
  categoryId: integer("category_id").notNull(),
  createdAt: integer("created_at", { mode: "timestamp" }).default(
    sql`(strftime('%s', 'now'))`,
  ),
  updateAt: integer("updated_at", { mode: "timestamp" }).default(
    sql`(strftime('%s', 'now'))`,
  ),
})
export const insertBlogSchema = createInsertSchema(blogs)
export const selectBlogSchema = createSelectSchema(blogs)

export const categories = sqliteTable("categories", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  text: text("title").notNull(),
  icon: text("icon").notNull(),
})
export const insertCategorySchema = createInsertSchema(categories)
export const selectCategorySchema = createSelectSchema(categories)

export const comments = sqliteTable("comments", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  text: text("title").notNull(),
  authorId: text("author_id").notNull(),
  blogId: integer("blog_id").references(() => blogs.path),
  createdAt: integer("created_at", { mode: "timestamp" }).default(
    sql`(strftime('%s', 'now'))`,
  ),
  updateAt: integer("updated_at", { mode: "timestamp" }).default(
    sql`(strftime('%s', 'now'))`,
  ),
})
export const insertCommentSchema = createInsertSchema(comments)
export const selectCommentSchema = createSelectSchema(comments)

// Relations

export const categoryRelations = relations(categories, ({ many }) => ({
  blogs: many(blogs),
}))

export const blogsRelations = relations(blogs, ({ many, one }) => ({
  category: one(categories, {
    fields: [blogs.categoryId],
    references: [categories.id],
  }),
  comments: many(comments),
}))

export const commentsRelations = relations(comments, ({ one }) => ({
  blog: one(blogs, {
    fields: [comments.id],
    references: [blogs.path],
  }),
}))
