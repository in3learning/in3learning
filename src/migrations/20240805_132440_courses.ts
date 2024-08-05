import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
await payload.db.drizzle.execute(sql`
 DO $$ BEGIN
 CREATE TYPE "enum_courses_sub_courses_banner_color" AS ENUM('red', 'blue');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

CREATE TABLE IF NOT EXISTS "courses_categories" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"category" varchar NOT NULL
);

CREATE TABLE IF NOT EXISTS "courses_sub_courses_carousel_images" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"image_id" integer NOT NULL
);

CREATE TABLE IF NOT EXISTS "courses_sub_courses_modules" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"title" varchar NOT NULL,
	"sessions" varchar NOT NULL
);

CREATE TABLE IF NOT EXISTS "courses_sub_courses" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"title" varchar NOT NULL,
	"description" varchar NOT NULL,
	"bannerColor" "enum_courses_sub_courses_banner_color" NOT NULL,
	"main_image_id" integer NOT NULL,
	"age_group" varchar NOT NULL
);

CREATE TABLE IF NOT EXISTS "courses" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar NOT NULL,
	"slug" varchar NOT NULL,
	"description" varchar NOT NULL,
	"featured" boolean NOT NULL,
	"main_image_id" integer NOT NULL,
	"age_group" varchar NOT NULL,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

CREATE INDEX IF NOT EXISTS "courses_categories_order_idx" ON "courses_categories" ("_order");
CREATE INDEX IF NOT EXISTS "courses_categories_parent_id_idx" ON "courses_categories" ("_parent_id");
CREATE INDEX IF NOT EXISTS "courses_sub_courses_carousel_images_order_idx" ON "courses_sub_courses_carousel_images" ("_order");
CREATE INDEX IF NOT EXISTS "courses_sub_courses_carousel_images_parent_id_idx" ON "courses_sub_courses_carousel_images" ("_parent_id");
CREATE INDEX IF NOT EXISTS "courses_sub_courses_modules_order_idx" ON "courses_sub_courses_modules" ("_order");
CREATE INDEX IF NOT EXISTS "courses_sub_courses_modules_parent_id_idx" ON "courses_sub_courses_modules" ("_parent_id");
CREATE INDEX IF NOT EXISTS "courses_sub_courses_order_idx" ON "courses_sub_courses" ("_order");
CREATE INDEX IF NOT EXISTS "courses_sub_courses_parent_id_idx" ON "courses_sub_courses" ("_parent_id");
CREATE INDEX IF NOT EXISTS "courses_created_at_idx" ON "courses" ("created_at");
DO $$ BEGIN
 ALTER TABLE "courses_categories" ADD CONSTRAINT "courses_categories_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "courses"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "courses_sub_courses_carousel_images" ADD CONSTRAINT "courses_sub_courses_carousel_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "media"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "courses_sub_courses_carousel_images" ADD CONSTRAINT "courses_sub_courses_carousel_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "courses_sub_courses"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "courses_sub_courses_modules" ADD CONSTRAINT "courses_sub_courses_modules_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "courses_sub_courses"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "courses_sub_courses" ADD CONSTRAINT "courses_sub_courses_main_image_id_media_id_fk" FOREIGN KEY ("main_image_id") REFERENCES "media"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "courses_sub_courses" ADD CONSTRAINT "courses_sub_courses_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "courses"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "courses" ADD CONSTRAINT "courses_main_image_id_media_id_fk" FOREIGN KEY ("main_image_id") REFERENCES "media"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
`)
}

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
await payload.db.drizzle.execute(sql`
 DROP TABLE "courses_categories";
DROP TABLE "courses_sub_courses_carousel_images";
DROP TABLE "courses_sub_courses_modules";
DROP TABLE "courses_sub_courses";
DROP TABLE "courses";`)
}
