export default defineEventHandler(async () => {
  return database.select().from(posts)
})
