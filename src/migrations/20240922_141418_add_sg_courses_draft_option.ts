import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
await payload.db.drizzle.execute(sql`
 CREATE TABLE IF NOT EXISTS "courses_courses" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"title" varchar NOT NULL
);

CREATE TABLE IF NOT EXISTS "sg_courses_sub_courses_teaching_resources" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"name" varchar NOT NULL
);

CREATE TABLE IF NOT EXISTS "sg_courses_sub_courses" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"title" varchar NOT NULL,
	"description" varchar NOT NULL,
	"main_image_id" integer NOT NULL,
	"age_group" varchar NOT NULL,
	"grouping" varchar NOT NULL,
	"total_lessons" varchar NOT NULL,
	"duration" varchar NOT NULL,
	"software" varchar,
	"free_trial_link" varchar,
	"get_course_link" varchar
);

CREATE TABLE IF NOT EXISTS "sg_courses" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar NOT NULL,
	"slug" varchar NOT NULL,
	"featured" boolean NOT NULL,
	"draft" boolean NOT NULL,
	"main_image_id" integer NOT NULL,
	"banner_image_id" integer NOT NULL,
	"age_group" varchar NOT NULL,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "us_courses_sub_courses_teaching_resources" (
	"_order" integer NOT NULL,
	"_parent_id" varchar NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"name" varchar NOT NULL
);

CREATE TABLE IF NOT EXISTS "us_courses_sub_courses" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"title" varchar NOT NULL,
	"description" varchar NOT NULL,
	"main_image_id" integer NOT NULL,
	"age_group" varchar NOT NULL,
	"grouping" varchar NOT NULL,
	"total_lessons" varchar NOT NULL,
	"duration" varchar NOT NULL,
	"software" varchar,
	"register_link" varchar
);

CREATE TABLE IF NOT EXISTS "us_courses" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar NOT NULL,
	"slug" varchar NOT NULL,
	"featured" boolean NOT NULL,
	"main_image_id" integer NOT NULL,
	"banner_image_id" integer NOT NULL,
	"age_group" varchar NOT NULL,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

DROP TABLE "courses_categories";
DROP TABLE "courses_sub_courses_carousel_images";
DROP TABLE "courses_sub_courses_modules";
DROP TABLE "courses_sub_courses";
ALTER TABLE "courses" ALTER COLUMN "description" DROP NOT NULL;
CREATE INDEX IF NOT EXISTS "courses_courses_order_idx" ON "courses_courses" ("_order");
CREATE INDEX IF NOT EXISTS "courses_courses_parent_id_idx" ON "courses_courses" ("_parent_id");
CREATE INDEX IF NOT EXISTS "sg_courses_sub_courses_teaching_resources_order_idx" ON "sg_courses_sub_courses_teaching_resources" ("_order");
CREATE INDEX IF NOT EXISTS "sg_courses_sub_courses_teaching_resources_parent_id_idx" ON "sg_courses_sub_courses_teaching_resources" ("_parent_id");
CREATE INDEX IF NOT EXISTS "sg_courses_sub_courses_order_idx" ON "sg_courses_sub_courses" ("_order");
CREATE INDEX IF NOT EXISTS "sg_courses_sub_courses_parent_id_idx" ON "sg_courses_sub_courses" ("_parent_id");
CREATE INDEX IF NOT EXISTS "sg_courses_created_at_idx" ON "sg_courses" ("created_at");
CREATE INDEX IF NOT EXISTS "us_courses_sub_courses_teaching_resources_order_idx" ON "us_courses_sub_courses_teaching_resources" ("_order");
CREATE INDEX IF NOT EXISTS "us_courses_sub_courses_teaching_resources_parent_id_idx" ON "us_courses_sub_courses_teaching_resources" ("_parent_id");
CREATE INDEX IF NOT EXISTS "us_courses_sub_courses_order_idx" ON "us_courses_sub_courses" ("_order");
CREATE INDEX IF NOT EXISTS "us_courses_sub_courses_parent_id_idx" ON "us_courses_sub_courses" ("_parent_id");
CREATE INDEX IF NOT EXISTS "us_courses_created_at_idx" ON "us_courses" ("created_at");
ALTER TABLE "courses" DROP COLUMN IF EXISTS "featured";
DO $$ BEGIN
 ALTER TABLE "courses_courses" ADD CONSTRAINT "courses_courses_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "courses"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "sg_courses_sub_courses_teaching_resources" ADD CONSTRAINT "sg_courses_sub_courses_teaching_resources_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "sg_courses_sub_courses"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "sg_courses_sub_courses" ADD CONSTRAINT "sg_courses_sub_courses_main_image_id_media_id_fk" FOREIGN KEY ("main_image_id") REFERENCES "media"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "sg_courses_sub_courses" ADD CONSTRAINT "sg_courses_sub_courses_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "sg_courses"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "sg_courses" ADD CONSTRAINT "sg_courses_main_image_id_media_id_fk" FOREIGN KEY ("main_image_id") REFERENCES "media"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "sg_courses" ADD CONSTRAINT "sg_courses_banner_image_id_media_id_fk" FOREIGN KEY ("banner_image_id") REFERENCES "media"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "us_courses_sub_courses_teaching_resources" ADD CONSTRAINT "us_courses_sub_courses_teaching_resources_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "us_courses_sub_courses"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "us_courses_sub_courses" ADD CONSTRAINT "us_courses_sub_courses_main_image_id_media_id_fk" FOREIGN KEY ("main_image_id") REFERENCES "media"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "us_courses_sub_courses" ADD CONSTRAINT "us_courses_sub_courses_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "us_courses"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "us_courses" ADD CONSTRAINT "us_courses_main_image_id_media_id_fk" FOREIGN KEY ("main_image_id") REFERENCES "media"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "us_courses" ADD CONSTRAINT "us_courses_banner_image_id_media_id_fk" FOREIGN KEY ("banner_image_id") REFERENCES "media"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
`)
}

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
await payload.db.drizzle.execute(sql`
 DO $$ BEGIN
 CREATE TYPE "enum_courses_sub_courses_banner_color" AS ENUM('#f54704', '#016fb9', '#4f374f', '#000000');
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
	"age_group" varchar NOT NULL,
	"free_trial_link" varchar,
	"get_course_link" varchar
);

DROP TABLE "courses_courses";
DROP TABLE "sg_courses_sub_courses_teaching_resources";
DROP TABLE "sg_courses_sub_courses";
DROP TABLE "sg_courses";
DROP TABLE "us_courses_sub_courses_teaching_resources";
DROP TABLE "us_courses_sub_courses";
DROP TABLE "us_courses";
ALTER TABLE "courses" ALTER COLUMN "description" SET NOT NULL;
ALTER TABLE "courses" ADD COLUMN "featured" boolean NOT NULL;
CREATE INDEX IF NOT EXISTS "courses_categories_order_idx" ON "courses_categories" ("_order");
CREATE INDEX IF NOT EXISTS "courses_categories_parent_id_idx" ON "courses_categories" ("_parent_id");
CREATE INDEX IF NOT EXISTS "courses_sub_courses_carousel_images_order_idx" ON "courses_sub_courses_carousel_images" ("_order");
CREATE INDEX IF NOT EXISTS "courses_sub_courses_carousel_images_parent_id_idx" ON "courses_sub_courses_carousel_images" ("_parent_id");
CREATE INDEX IF NOT EXISTS "courses_sub_courses_modules_order_idx" ON "courses_sub_courses_modules" ("_order");
CREATE INDEX IF NOT EXISTS "courses_sub_courses_modules_parent_id_idx" ON "courses_sub_courses_modules" ("_parent_id");
CREATE INDEX IF NOT EXISTS "courses_sub_courses_order_idx" ON "courses_sub_courses" ("_order");
CREATE INDEX IF NOT EXISTS "courses_sub_courses_parent_id_idx" ON "courses_sub_courses" ("_parent_id");
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
`)
}
