ALTER TABLE "addresses" DROP CONSTRAINT IF EXISTS "addresses_fk0";

ALTER TABLE "activities" DROP CONSTRAINT IF EXISTS "activities_fk0";

ALTER TABLE "activities" DROP CONSTRAINT IF EXISTS "activities_fk1";

ALTER TABLE "comments" DROP CONSTRAINT IF EXISTS "comments_fk0";

ALTER TABLE "likes" DROP CONSTRAINT IF EXISTS "likes_fk0";


DROP TABLE IF EXISTS "addresses";

DROP TABLE IF EXISTS "activities";

DROP TABLE IF EXISTS "activity_categories";

DROP TABLE IF EXISTS "users";

DROP TABLE IF EXISTS "comments";

DROP TABLE IF EXISTS "likes";
