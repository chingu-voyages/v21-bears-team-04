-- to drop all the tables, from server/database
  --  psql -h localhost -U postgres -d fitness_development -f ./drop_tables.sql
  --  psql -h localhost -U postgres -d fitness_test -f ./drop_tables.sql

ALTER TABLE "addresses" DROP CONSTRAINT IF EXISTS "addresses_fk0";

ALTER TABLE "comments" DROP CONSTRAINT IF EXISTS "comments_fk0";

ALTER TABLE "likes" DROP CONSTRAINT IF EXISTS "likes_fk0";

ALTER TABLE "goals" DROP CONSTRAINT IF EXISTS "goals_fk0";

ALTER TABLE "users_goals" DROP CONSTRAINT IF EXISTS "users_goals_fk0";

ALTER TABLE "users_goals" DROP CONSTRAINT IF EXISTS "users_goals_fk1";

ALTER TABLE "challenges_goals" DROP CONSTRAINT IF EXISTS "challenges_goals_fk0";

ALTER TABLE "challenges_goals" DROP CONSTRAINT IF EXISTS "challenges_goals_fk1";

ALTER TABLE "challenges_goals" DROP CONSTRAINT IF EXISTS "challenges_goals_fk0";

ALTER TABLE "challenges_goals" DROP CONSTRAINT IF EXISTS "challenges_goals_fk1";

DROP TABLE IF EXISTS "users";

DROP TABLE IF EXISTS "addresses";

DROP TABLE IF EXISTS "comments";

DROP TABLE IF EXISTS "likes";

DROP TABLE IF EXISTS "goals";

DROP TABLE IF EXISTS "users_goals";

DROP TABLE IF EXISTS "challenges";

DROP TABLE IF EXISTS "challenges_goals";

DROP TABLE IF EXISTS "challenges_goals";

DROP TABLE IF EXISTS "exercise_categories";

