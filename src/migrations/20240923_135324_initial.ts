import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
await payload.db.drizzle.execute(sql`
 DO $$ BEGIN
 CREATE TYPE "enum_users_role" AS ENUM('admin', 'user');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"role" "enum_users_role" NOT NULL,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"email" varchar NOT NULL,
	"reset_password_token" varchar,
	"reset_password_expiration" timestamp(3) with time zone,
	"salt" varchar,
	"hash" varchar,
	"login_attempts" numeric,
	"lock_until" timestamp(3) with time zone
);

CREATE TABLE IF NOT EXISTS "media" (
	"id" serial PRIMARY KEY NOT NULL,
	"text" varchar,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"url" varchar,
	"thumbnail_u_r_l" varchar,
	"filename" varchar,
	"mime_type" varchar,
	"filesize" numeric,
	"width" numeric,
	"height" numeric,
	"focal_x" numeric,
	"focal_y" numeric
);

CREATE TABLE IF NOT EXISTS "courses_sub_courses" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"title" varchar NOT NULL
);

CREATE TABLE IF NOT EXISTS "courses" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar NOT NULL,
	"main_image_id" integer NOT NULL,
	"age_group" varchar NOT NULL,
	"description" varchar,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
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
	"draft" boolean,
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
	"featured" boolean,
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
	"draft" boolean,
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
	"featured" boolean,
	"main_image_id" integer NOT NULL,
	"banner_image_id" integer NOT NULL,
	"age_group" varchar NOT NULL,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "email" (
	"id" serial PRIMARY KEY NOT NULL,
	"email" varchar NOT NULL,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "payload_preferences" (
	"id" serial PRIMARY KEY NOT NULL,
	"key" varchar,
	"value" jsonb,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "payload_preferences_rels" (
	"id" serial PRIMARY KEY NOT NULL,
	"order" integer,
	"parent_id" integer NOT NULL,
	"path" varchar NOT NULL,
	"users_id" integer
);

CREATE TABLE IF NOT EXISTS "payload_migrations" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar,
	"batch" numeric,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

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

CREATE TABLE IF NOT EXISTS "footer_about" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"label" varchar NOT NULL,
	"url" varchar NOT NULL
);

CREATE TABLE IF NOT EXISTS "footer_courses" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"label" varchar NOT NULL,
	"url" varchar NOT NULL
);

CREATE TABLE IF NOT EXISTS "footer" (
	"id" serial PRIMARY KEY NOT NULL,
	"updated_at" timestamp(3) with time zone,
	"created_at" timestamp(3) with time zone
);

CREATE TABLE IF NOT EXISTS "s_gfooter_about" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"label" varchar NOT NULL,
	"url" varchar NOT NULL
);

CREATE TABLE IF NOT EXISTS "s_gfooter_courses" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"label" varchar NOT NULL,
	"url" varchar NOT NULL
);

CREATE TABLE IF NOT EXISTS "s_gfooter" (
	"id" serial PRIMARY KEY NOT NULL,
	"updated_at" timestamp(3) with time zone,
	"created_at" timestamp(3) with time zone
);

CREATE TABLE IF NOT EXISTS "u_sfooter_about" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"label" varchar NOT NULL,
	"url" varchar NOT NULL
);

CREATE TABLE IF NOT EXISTS "u_sfooter_courses" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"label" varchar NOT NULL,
	"url" varchar NOT NULL
);

CREATE TABLE IF NOT EXISTS "u_sfooter" (
	"id" serial PRIMARY KEY NOT NULL,
	"updated_at" timestamp(3) with time zone,
	"created_at" timestamp(3) with time zone
);

CREATE INDEX IF NOT EXISTS "users_created_at_idx" ON "users" ("created_at");
CREATE UNIQUE INDEX IF NOT EXISTS "users_email_idx" ON "users" ("email");
CREATE INDEX IF NOT EXISTS "media_created_at_idx" ON "media" ("created_at");
CREATE UNIQUE INDEX IF NOT EXISTS "media_filename_idx" ON "media" ("filename");
CREATE INDEX IF NOT EXISTS "courses_sub_courses_order_idx" ON "courses_sub_courses" ("_order");
CREATE INDEX IF NOT EXISTS "courses_sub_courses_parent_id_idx" ON "courses_sub_courses" ("_parent_id");
CREATE INDEX IF NOT EXISTS "courses_created_at_idx" ON "courses" ("created_at");
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
CREATE INDEX IF NOT EXISTS "email_created_at_idx" ON "email" ("created_at");
CREATE INDEX IF NOT EXISTS "payload_preferences_key_idx" ON "payload_preferences" ("key");
CREATE INDEX IF NOT EXISTS "payload_preferences_created_at_idx" ON "payload_preferences" ("created_at");
CREATE INDEX IF NOT EXISTS "payload_preferences_rels_order_idx" ON "payload_preferences_rels" ("order");
CREATE INDEX IF NOT EXISTS "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" ("parent_id");
CREATE INDEX IF NOT EXISTS "payload_preferences_rels_path_idx" ON "payload_preferences_rels" ("path");
CREATE INDEX IF NOT EXISTS "payload_migrations_created_at_idx" ON "payload_migrations" ("created_at");
CREATE INDEX IF NOT EXISTS "header_nav_links_sub_links_order_idx" ON "header_nav_links_sub_links" ("_order");
CREATE INDEX IF NOT EXISTS "header_nav_links_sub_links_parent_id_idx" ON "header_nav_links_sub_links" ("_parent_id");
CREATE INDEX IF NOT EXISTS "header_nav_links_order_idx" ON "header_nav_links" ("_order");
CREATE INDEX IF NOT EXISTS "header_nav_links_parent_id_idx" ON "header_nav_links" ("_parent_id");
CREATE INDEX IF NOT EXISTS "s_gheader_nav_links_sub_links_order_idx" ON "s_gheader_nav_links_sub_links" ("_order");
CREATE INDEX IF NOT EXISTS "s_gheader_nav_links_sub_links_parent_id_idx" ON "s_gheader_nav_links_sub_links" ("_parent_id");
CREATE INDEX IF NOT EXISTS "s_gheader_nav_links_order_idx" ON "s_gheader_nav_links" ("_order");
CREATE INDEX IF NOT EXISTS "s_gheader_nav_links_parent_id_idx" ON "s_gheader_nav_links" ("_parent_id");
CREATE INDEX IF NOT EXISTS "u_sheader_nav_links_sub_links_order_idx" ON "u_sheader_nav_links_sub_links" ("_order");
CREATE INDEX IF NOT EXISTS "u_sheader_nav_links_sub_links_parent_id_idx" ON "u_sheader_nav_links_sub_links" ("_parent_id");
CREATE INDEX IF NOT EXISTS "u_sheader_nav_links_order_idx" ON "u_sheader_nav_links" ("_order");
CREATE INDEX IF NOT EXISTS "u_sheader_nav_links_parent_id_idx" ON "u_sheader_nav_links" ("_parent_id");
CREATE INDEX IF NOT EXISTS "footer_about_order_idx" ON "footer_about" ("_order");
CREATE INDEX IF NOT EXISTS "footer_about_parent_id_idx" ON "footer_about" ("_parent_id");
CREATE INDEX IF NOT EXISTS "footer_courses_order_idx" ON "footer_courses" ("_order");
CREATE INDEX IF NOT EXISTS "footer_courses_parent_id_idx" ON "footer_courses" ("_parent_id");
CREATE INDEX IF NOT EXISTS "s_gfooter_about_order_idx" ON "s_gfooter_about" ("_order");
CREATE INDEX IF NOT EXISTS "s_gfooter_about_parent_id_idx" ON "s_gfooter_about" ("_parent_id");
CREATE INDEX IF NOT EXISTS "s_gfooter_courses_order_idx" ON "s_gfooter_courses" ("_order");
CREATE INDEX IF NOT EXISTS "s_gfooter_courses_parent_id_idx" ON "s_gfooter_courses" ("_parent_id");
CREATE INDEX IF NOT EXISTS "u_sfooter_about_order_idx" ON "u_sfooter_about" ("_order");
CREATE INDEX IF NOT EXISTS "u_sfooter_about_parent_id_idx" ON "u_sfooter_about" ("_parent_id");
CREATE INDEX IF NOT EXISTS "u_sfooter_courses_order_idx" ON "u_sfooter_courses" ("_order");
CREATE INDEX IF NOT EXISTS "u_sfooter_courses_parent_id_idx" ON "u_sfooter_courses" ("_parent_id");
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

DO $$ BEGIN
 ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "users"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

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

DO $$ BEGIN
 ALTER TABLE "footer_about" ADD CONSTRAINT "footer_about_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "footer"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "footer_courses" ADD CONSTRAINT "footer_courses_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "footer"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "s_gfooter_about" ADD CONSTRAINT "s_gfooter_about_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "s_gfooter"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "s_gfooter_courses" ADD CONSTRAINT "s_gfooter_courses_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "s_gfooter"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "u_sfooter_about" ADD CONSTRAINT "u_sfooter_about_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "u_sfooter"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "u_sfooter_courses" ADD CONSTRAINT "u_sfooter_courses_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "u_sfooter"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
`)
}

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
await payload.db.drizzle.execute(sql`
 DROP TABLE "users";
DROP TABLE "media";
DROP TABLE "courses_sub_courses";
DROP TABLE "courses";
DROP TABLE "sg_courses_sub_courses_teaching_resources";
DROP TABLE "sg_courses_sub_courses";
DROP TABLE "sg_courses";
DROP TABLE "us_courses_sub_courses_teaching_resources";
DROP TABLE "us_courses_sub_courses";
DROP TABLE "us_courses";
DROP TABLE "email";
DROP TABLE "payload_preferences";
DROP TABLE "payload_preferences_rels";
DROP TABLE "payload_migrations";
DROP TABLE "header_nav_links_sub_links";
DROP TABLE "header_nav_links";
DROP TABLE "header";
DROP TABLE "s_gheader_nav_links_sub_links";
DROP TABLE "s_gheader_nav_links";
DROP TABLE "s_gheader";
DROP TABLE "u_sheader_nav_links_sub_links";
DROP TABLE "u_sheader_nav_links";
DROP TABLE "u_sheader";
DROP TABLE "footer_about";
DROP TABLE "footer_courses";
DROP TABLE "footer";
DROP TABLE "s_gfooter_about";
DROP TABLE "s_gfooter_courses";
DROP TABLE "s_gfooter";
DROP TABLE "u_sfooter_about";
DROP TABLE "u_sfooter_courses";
DROP TABLE "u_sfooter";`)
}
