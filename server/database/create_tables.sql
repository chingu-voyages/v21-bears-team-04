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
    "postal_code" int DEFAULT 'NULL',
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








    ALTER TABLE "addresses" ADD CONSTRAINT "addresses_fk0" FOREIGN KEY ("user_id") REFERENCES "users"("id");