import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
await payload.db.drizzle.execute(sql`
 ALTER TABLE "sg_courses_sub_courses" ADD COLUMN "draft" boolean NOT NULL;
ALTER TABLE "us_courses_sub_courses" ADD COLUMN "draft" boolean NOT NULL;
ALTER TABLE "us_courses" ADD COLUMN "draft" boolean NOT NULL;`)
}

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
await payload.db.drizzle.execute(sql`
 ALTER TABLE "sg_courses_sub_courses" DROP COLUMN IF EXISTS "draft";
ALTER TABLE "us_courses_sub_courses" DROP COLUMN IF EXISTS "draft";
ALTER TABLE "us_courses" DROP COLUMN IF EXISTS "draft";`)
}
