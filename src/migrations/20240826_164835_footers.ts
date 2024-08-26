import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
await payload.db.drizzle.execute(sql`
 CREATE TABLE IF NOT EXISTS "email" (
	"id" serial PRIMARY KEY NOT NULL,
	"email" varchar NOT NULL,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
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

CREATE INDEX IF NOT EXISTS "email_created_at_idx" ON "email" ("created_at");
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
 DROP TABLE "email";
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
