import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
await payload.db.drizzle.execute(sql`
 ALTER TYPE "enum_courses_sub_courses_banner_color" ADD VALUE '#f54704';
ALTER TYPE "enum_courses_sub_courses_banner_color" ADD VALUE '#016fb9';
ALTER TYPE "enum_courses_sub_courses_banner_color" ADD VALUE '#4f374f';
ALTER TYPE "enum_courses_sub_courses_banner_color" ADD VALUE '#000000';
CREATE TABLE IF NOT EXISTS "header_nav_links_sub_links" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"label" varchar NOT NULL,
	"url" varchar NOT NULL
);

CREATE TABLE IF NOT EXISTS "header_nav_links" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"label" varchar NOT NULL,
	"url" varchar NOT NULL
);

CREATE TABLE IF NOT EXISTS "header" (
	"id" serial PRIMARY KEY NOT NULL,
	"updated_at" timestamp(3) with time zone,
	"created_at" timestamp(3) with time zone
);

CREATE TABLE IF NOT EXISTS "s_gheader_nav_links_sub_links" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"label" varchar NOT NULL,
	"url" varchar NOT NULL
);

CREATE TABLE IF NOT EXISTS "s_gheader_nav_links" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"label" varchar NOT NULL,
	"url" varchar NOT NULL
);

CREATE TABLE IF NOT EXISTS "s_gheader" (
	"id" serial PRIMARY KEY NOT NULL,
	"updated_at" timestamp(3) with time zone,
	"created_at" timestamp(3) with time zone
);

CREATE INDEX IF NOT EXISTS "header_nav_links_sub_links_order_idx" ON "header_nav_links_sub_links" ("_order");
CREATE INDEX IF NOT EXISTS "header_nav_links_sub_links_parent_id_idx" ON "header_nav_links_sub_links" ("_parent_id");
CREATE INDEX IF NOT EXISTS "header_nav_links_order_idx" ON "header_nav_links" ("_order");
CREATE INDEX IF NOT EXISTS "header_nav_links_parent_id_idx" ON "header_nav_links" ("_parent_id");
CREATE INDEX IF NOT EXISTS "s_gheader_nav_links_sub_links_order_idx" ON "s_gheader_nav_links_sub_links" ("_order");
CREATE INDEX IF NOT EXISTS "s_gheader_nav_links_sub_links_parent_id_idx" ON "s_gheader_nav_links_sub_links" ("_parent_id");
CREATE INDEX IF NOT EXISTS "s_gheader_nav_links_order_idx" ON "s_gheader_nav_links" ("_order");
CREATE INDEX IF NOT EXISTS "s_gheader_nav_links_parent_id_idx" ON "s_gheader_nav_links" ("_parent_id");
DO $$ BEGIN
 ALTER TABLE "header_nav_links_sub_links" ADD CONSTRAINT "header_nav_links_sub_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "header_nav_links"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "header_nav_links" ADD CONSTRAINT "header_nav_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "header"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "s_gheader_nav_links_sub_links" ADD CONSTRAINT "s_gheader_nav_links_sub_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "s_gheader_nav_links"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "s_gheader_nav_links" ADD CONSTRAINT "s_gheader_nav_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "s_gheader"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
`)
}

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
await payload.db.drizzle.execute(sql`
 ALTER TYPE "enum_courses_sub_courses_banner_color" ADD VALUE 'red';
ALTER TYPE "enum_courses_sub_courses_banner_color" ADD VALUE 'blue';
DROP TABLE "header_nav_links_sub_links";
DROP TABLE "header_nav_links";
DROP TABLE "header";
DROP TABLE "s_gheader_nav_links_sub_links";
DROP TABLE "s_gheader_nav_links";
DROP TABLE "s_gheader";`)
}
