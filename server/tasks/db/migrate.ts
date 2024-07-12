import { migrate } from "drizzle-orm/libsql/migrator"

export default defineTask({
  meta: {
    name: "db:migrate",
    description: "Run database migrations",
  },
  async run() {
    try {
      await migrate(database, {
        migrationsFolder: "./server/migrations",
      })
    } catch (error: unknown) {
      const err = error as Error
      return { result: "Failure", error: err.message }
    }
    return { result: "Success" }
  },
})
