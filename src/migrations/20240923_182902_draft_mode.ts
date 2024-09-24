import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
await payload.db.drizzle.execute(sql`
 ALTER TABLE "sg_courses_sub_courses" ALTER COLUMN "draft" SET NOT NULL;
ALTER TABLE "us_courses_sub_courses" ALTER COLUMN "draft" SET NOT NULL;`)
}

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
await payload.db.drizzle.execute(sql`
 ALTER TABLE "sg_courses_sub_courses" ALTER COLUMN "draft" DROP NOT NULL;
ALTER TABLE "us_courses_sub_courses" ALTER COLUMN "draft" DROP NOT NULL;`)
}
