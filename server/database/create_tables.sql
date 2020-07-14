-- to create all the tables, from server/database
  --  psql -h localhost -U postgres -d fitness_development -f ./create_tables.sql
  --  psql -h localhost -U postgres -d fitness_test -f ./create_tables.sql


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
        "user_id" int,
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



        CREATE TABLE "comments"
        (
            "id" serial NOT NULL,
            "user_id" int NOT NULL,
            "content" TEXT NOT NULL,
            "created_at" timestamp
            with time zone NOT NULL,
	"updated_at" timestamp
            with time zone NOT NULL,
	CONSTRAINT "comments_pk" PRIMARY KEY
            ("id")
)
            WITH
            (
  OIDS=FALSE
);



            CREATE TABLE "likes"
            (
                "id" serial NOT NULL,
                "user_id" int NOT NULL,
                "created_at" timestamp
                with time zone NOT NULL,
	"updated_at" timestamp
                with time zone NOT NULL,
	CONSTRAINT "likes_pk" PRIMARY KEY
                ("id")
)
                WITH
                (
  OIDS=FALSE
);



                CREATE TABLE "goals"
                (
                    "id" serial NOT NULL,
                    "exercise_category_id" int NOT NULL,
                    "description" TEXT NOT NULL,
                    "created_at" timestamp
                    with time zone,
	"updated_at" timestamp
                    with time zone,
	CONSTRAINT "goals_pk" PRIMARY KEY
                    ("id")
)
                    WITH
                    (
  OIDS=FALSE
);



                    CREATE TABLE "users_goals"
                    (
                        "id" serial NOT NULL,
                        "user_id" int NOT NULL,
                        "goal_id" int NOT NULL,
                        "start_date" timestamp
                        with time zone,
	"end_date" timestamp
                        with time zone,
	"unit" real,
	"interval" character varying
                        (75),
	CONSTRAINT "users_goals_pk" PRIMARY KEY
                        ("id")
)
                        WITH
                        (
  OIDS=FALSE
);



                        CREATE TABLE "challenges"
                        (
                            "id" serial NOT NULL,
                            "description" TEXT NOT NULL,
                            "start_date" timestamp
                            with time zone NOT NULL,
	"end_date" timestamp
                            with time zone NOT NULL,
	"name" character varying
                            (100) NOT NULL,
	CONSTRAINT "challenges_pk" PRIMARY KEY
                            ("id")
)
                            WITH
                            (
  OIDS=FALSE
);



                            CREATE TABLE "challenges_goals"
                            (
                                "id" serial NOT NULL,
                                "goal_id" int NOT NULL,
                                "challenge_id" int NOT NULL,
                                CONSTRAINT "challenges_goals_pk" PRIMARY KEY ("id")
                            )
                            WITH (
  OIDS=FALSE
);



                            CREATE TABLE "challenges_goals"
                            (
                                "id" serial NOT NULL,
                                "goal_id" int NOT NULL,
                                "challenge_id" int NOT NULL,
                                CONSTRAINT "challenges_goals_pk" PRIMARY KEY ("id")
                            )
                            WITH (
  OIDS=FALSE
);



                            CREATE TABLE "exercise_categories"
                            (
                                "id" serial NOT NULL,
                                "type" character varying(50) NOT NULL,
                                CONSTRAINT "exercise_categories_pk" PRIMARY KEY ("id")
                            )
                            WITH (
  OIDS=FALSE
);




                            ALTER TABLE "addresses" ADD CONSTRAINT "addresses_fk0" FOREIGN KEY ("user_id") REFERENCES "users"("id");

                            ALTER TABLE "comments" ADD CONSTRAINT "comments_fk0" FOREIGN KEY ("user_id") REFERENCES "users"("id");

                            ALTER TABLE "likes" ADD CONSTRAINT "likes_fk0" FOREIGN KEY ("user_id") REFERENCES "users"("id");

                            ALTER TABLE "goals" ADD CONSTRAINT "goals_fk0" FOREIGN KEY ("exercise_category_id") REFERENCES "exercise_categories"("id");

                            ALTER TABLE "users_goals" ADD CONSTRAINT "users_goals_fk0" FOREIGN KEY ("user_id") REFERENCES "users"("id");
                            ALTER TABLE "users_goals" ADD CONSTRAINT "users_goals_fk1" FOREIGN KEY ("goal_id") REFERENCES "goals"("id");


                            ALTER TABLE "challenges_goals" ADD CONSTRAINT "challenges_goals_fk0" FOREIGN KEY ("goal_id") REFERENCES "goals"("id");
                            ALTER TABLE "challenges_goals" ADD CONSTRAINT "challenges_goals_fk1" FOREIGN KEY ("challenge_id") REFERENCES "challenges"("id");

                            ALTER TABLE "challenges_goals" ADD CONSTRAINT "challenges_goals_fk0" FOREIGN KEY ("goal_id") REFERENCES "goals"("id");
                            ALTER TABLE "challenges_goals" ADD CONSTRAINT "challenges_goals_fk1" FOREIGN KEY ("challenge_id") REFERENCES "challenges"("id");




------------------------------------------

