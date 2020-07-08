-- feel free to add whatever seed data you want here
-- to provide seed data for DB, from server/database
--  psql -h localhost -U postgres -d fitness_development -f ./seed.sql
--  psql -h localhost -U postgres -d fitness_test -f ./seed.sql


INSERT INTO users
    (first_name, last_name, password_digest, admin, username, email, created_at, updated_at)
VALUES
    ('Jason', 'Mortensen', 'ASVAVDDG1d4345dg5675', true, 'ingrey1', 'ingrey1@gmail.com', NOW(), NOW());
    