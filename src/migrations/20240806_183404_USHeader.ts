import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
await payload.db.drizzle.execute(sql`
 CREATE TABLE IF NOT EXISTS "u_sheader_nav_links_sub_links" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"label" varchar NOT NULL,
	"url" varchar NOT NULL
);

CREATE TABLE IF NOT EXISTS "u_sheader_nav_links" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"label" varchar NOT NULL,
	"url" varchar NOT NULL
);

CREATE TABLE IF NOT EXISTS "u_sheader" (
	"id" serial PRIMARY KEY NOT NULL,
	"updated_at" timestamp(3) with time zone,
	"created_at" timestamp(3) with time zone
);

ALTER TABLE "courses_sub_courses" ADD COLUMN "free_trial_link" varchar;
ALTER TABLE "courses_sub_courses" ADD COLUMN "get_course_link" varchar;
ALTER TABLE "courses" ADD COLUMN "free_trial_link" varchar;
CREATE INDEX IF NOT EXISTS "u_sheader_nav_links_sub_links_order_idx" ON "u_sheader_nav_links_sub_links" ("_order");
CREATE INDEX IF NOT EXISTS "u_sheader_nav_links_sub_links_parent_id_idx" ON "u_sheader_nav_links_sub_links" ("_parent_id");
CREATE INDEX IF NOT EXISTS "u_sheader_nav_links_order_idx" ON "u_sheader_nav_links" ("_order");
CREATE INDEX IF NOT EXISTS "u_sheader_nav_links_parent_id_idx" ON "u_sheader_nav_links" ("_parent_id");
DO $$ BEGIN
 ALTER TABLE "u_sheader_nav_links_sub_links" ADD CONSTRAINT "u_sheader_nav_links_sub_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "u_sheader_nav_links"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "u_sheader_nav_links" ADD CONSTRAINT "u_sheader_nav_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "u_sheader"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
`)
}

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
await payload.db.drizzle.execute(sql`
 DROP TABLE "u_sheader_nav_links_sub_links";
DROP TABLE "u_sheader_nav_links";
DROP TABLE "u_sheader";
ALTER TABLE "courses_sub_courses" DROP COLUMN IF EXISTS "free_trial_link";
ALTER TABLE "courses_sub_courses" DROP COLUMN IF EXISTS "get_course_link";
ALTER TABLE "courses" DROP COLUMN IF EXISTS "free_trial_link";`)
}
