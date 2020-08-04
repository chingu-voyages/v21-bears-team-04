-- feel free to add whatever seed data you want here
-- to provide seed data for DB, from server/database
--  psql -h localhost -U postgres -d fitness_development -f ./seed.sql
--  psql -h localhost -U postgres -d fitness_test -f ./seed.sql


-- users seed data

INSERT INTO users
    (first_name, last_name, password_digest, admin, username, email, created_at, updated_at)
VALUES
    ('Jason', 'Mortensen', 'ASVAVDDG1d4345dg5675', true, 'ingrey1', 'ingrey1@gmail.com', NOW(), NOW()),
    ('Bear', 'Cat', 'BSVAVDDG1d4345dg5675', false, 'bear1', 'bear1@gmail.com', NOW(), NOW()),
    ('Kuma', 'Cat', 'CSVAVDDG1d4345dg5675', false, 'kuma1', 'kuma1@gmail.com', NOW(), NOW());



INSERT INTO addresses
    (country, city, postal_code, user_id, created_at, updated_at)
VALUES
    ('US', 'San Francisco', 44444, (SELECT id
        FROM users
        WHERE email='ingrey1@gmail.com'), NOW(), NOW()),
    ('RU', 'Moscow', 55555, (SELECT id
        FROM users
        WHERE email='bear1@gmail.com'), NOW(), NOW()),
    ('NZ', 'Aukland', 66666, (SELECT id
        FROM users
        WHERE email='kuma1@gmail.com'), NOW(), NOW());

INSERT INTO activity_categories
    (name, use_distance, use_calories, use_steps)
VALUES
    ('Running', true, true, true);


INSERT INTO activities
    (user_id, title, start, ending, category, distance, calories)
VALUES
    ((SELECT id
        FROM users
        WHERE email='ingrey1@gmail.com'), 'Running on a sunny day', NOW(), (NOW() + interval
'1 hour'),
(SELECT id
FROM activity_categories
WHERE name='Running')
, 4.2, 300);




