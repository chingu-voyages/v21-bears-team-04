ALTER TABLE "addresses" DROP CONSTRAINT IF EXISTS "addresses_fk0";

ALTER TABLE "activities" DROP CONSTRAINT IF EXISTS "activities_fk0";

ALTER TABLE "activities" DROP CONSTRAINT IF EXISTS "activities_fk1";


DROP TABLE IF EXISTS "addresses";

DROP TABLE IF EXISTS "activities";

DROP TABLE IF EXISTS "activity_categories";

DROP TABLE IF EXISTS "users";
