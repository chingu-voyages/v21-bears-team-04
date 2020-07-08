-- feel free to add whatever seed data you want here
-- to provide seed data for DB, from server/database
--  psql -h localhost -U postgres -d fitness_development -f ./seed.sql
--  psql -h localhost -U postgres -d fitness_test -f ./seed.sql


-- users seed data

INSERT INTO users
    (first_name, last_name, password_digest, admin, username, email, created_at, updated_at)
VALUES
    ('Jason', 'Mortensen', 'ASVAVDDG1d4345dg5675', true, 'ingrey1', 'ingrey1@gmail.com', NOW(), NOW());

INSERT INTO users
    (first_name, last_name, password_digest, admin, username, email, created_at, updated_at)
VALUES
    ('Bear', 'Cat', 'BSVAVDDG1d4345dg5675', false, 'bear1', 'bear1@gmail.com', NOW(), NOW());

INSERT INTO users
    (first_name, last_name, password_digest, admin, username, email, created_at, updated_at)
VALUES
    ('Kuma', 'Cat', 'CSVAVDDG1d4345dg5675', false, 'kuma1', 'kuma1@gmail.com', NOW(), NOW());





-- addresses seed data

--   CREATE TABLE "addresses"
--     (
--         "country" char(2) NOT NULL,
--         "city" character varying(100) NOT NULL,
--         "postal_code" int,
--         "id" serial NOT NULL,
--         "user_id" int,
--         "created_at" timestamp
--         with time zone NOT NULL,
-- 	"updated_at" timestamp

INSERT INTO addresses
    (country, city, postal_code, user_id, created_at, updated_at)
VALUES
    ('US', 'San Francisco', 44444, 1, NOW(), NOW());

INSERT INTO addresses
    (country, city, postal_code, user_id, created_at, updated_at)
VALUES
    ('RU', 'Moscow', 55555, 4, NOW(), NOW());

INSERT INTO addresses
    (country, city, postal_code, user_id, created_at, updated_at)
VALUES
    ('NZ', 'Aukland', 66666, 5, NOW(), NOW());

