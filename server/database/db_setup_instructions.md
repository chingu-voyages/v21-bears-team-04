# Postgres DB SETUP

## Getting Started

1.  Download Postgres 12.x for your operating system. (https://www.postgresql.org/download/)

2.  You'll need a way to interact with your database. Some popular options include:

    a. PSQL Shell (this should come with your Postgres distribution)
    b. PGAdmin4 (https://www.pgadmin.org/download/)

3.  Setup the development and test databases

    a. run the setup.sql file from the database folder

         psql -h localhost -U postgres -f ./setup.sql

    b. login into psql

         psql -h localhost -U postgres

    c. verify that the databases 'fitness_development' and 'fitness_test' have been created. From inside psql:

             \l

         In the outputted list of DB's, you should see fitness_development and fitness_test

4)  Now you're in a position to continue using psql, or open up PGAdmin / another tool to examine the state of your databases.
