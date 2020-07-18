CREATE TABLE "users"
(
  "first_name" character varying(70) NOT NULL,
  "last_name" character varying(100) NOT NULL,
  "password_digest" character varying(255) NOT NULL,
  "id" serial NOT NULL,
  "admin" BOOLEAN NOT NULL DEFAULT 'false',
  "username" character varying(100) NOT NULL UNIQUE,
  "email" character varying(100) NOT NULL UNIQUE,
  "created_at" timestamp
  with time zone NOT NULL,
	"updated_at" timestamp
  with time zone NOT NULL,
	"isCompany" BOOLEAN NOT NULL DEFAULT 'false',
	CONSTRAINT "users_pk" PRIMARY KEY
  ("id")
)
  WITH
  (
  OIDS=FALSE
);

  CREATE TABLE "addresses"
  (
    "country" char(2) NOT NULL,
    "city" character varying(100) NOT NULL,
    "postal_code" int,
    "id" serial NOT NULL,
    "user_id" int UNIQUE,
    "created_at" timestamp
    with time zone NOT NULL,
	"updated_at" timestamp
    with time zone NOT NULL,
	CONSTRAINT "addresses_pk" PRIMARY KEY
    ("id")
)
    WITH
    (
  OIDS=FALSE
);

CREATE TABLE "activities" (
	"user_id" int NOT NULL,
	"id" serial NOT NULL,
	"title" character varying(100) NOT NULL,
	"start" timestamp with time zone NOT NULL,
	"ending" timestamp with time zone NOT NULL,
	"category" int NOT NULL,
	"distance" real,
	"calories" int,
	"steps" int,
	CONSTRAINT "activities_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "activity_categories" (
	"id" serial NOT NULL,
	"name" character varying NOT NULL UNIQUE,
	"use_distance" BOOLEAN NOT NULL,
	"use_calories" BOOLEAN NOT NULL,
	"use_steps" BOOLEAN NOT NULL,
	CONSTRAINT "activity_categories_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "comments" (
	"id" serial NOT NULL,
	"user_id" int NOT NULL,
	"resource_id" int NOT NULL,
	"resource_type" character varying NOT NULL,
	"content" TEXT NOT NULL,
	"created_at" timestamp with time zone NOT NULL,
	"updated_at" timestamp with time zone NOT NULL,
	CONSTRAINT "comments_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "likes" (
	"id" serial NOT NULL,
	"user_id" int NOT NULL,
	"resource_id" int NOT NULL,
	"resource_type" character varying(100) NOT NULL,
	"created_at" timestamp with time zone NOT NULL,
	CONSTRAINT "likes_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);






ALTER TABLE "addresses" ADD CONSTRAINT "addresses_fk0" FOREIGN KEY ("user_id") REFERENCES "users"("id");
ALTER TABLE "activities" ADD CONSTRAINT "activities_fk0" FOREIGN KEY ("user_id") REFERENCES "users"("id");
ALTER TABLE "activities" ADD CONSTRAINT "activities_fk1" FOREIGN KEY ("category") REFERENCES "activity_categories"("id");
ALTER TABLE "comments" ADD CONSTRAINT "comments_fk0" FOREIGN KEY ("user_id") REFERENCES "users"("id");
ALTER TABLE "likes" ADD CONSTRAINT "likes_fk0" FOREIGN KEY ("user_id") REFERENCES "users"("id");
