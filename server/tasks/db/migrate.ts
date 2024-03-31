import { migrate } from "drizzle-orm/libsql/migrator"
;(async () => {
  await migrate(database, {
    migrationsFolder: "./server/migrations",
  })
  console.log("successfully migrated database")
})()
