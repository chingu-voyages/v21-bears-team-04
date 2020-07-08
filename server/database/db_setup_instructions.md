# Postgres DB SETUP

## Getting Started

1.  Download Postgres 12.x for your operating system. (https://www.postgresql.org/download/)

2.  You'll need a way to interact with your database. Some popular options include:

    a. PSQL Shell (this should come with your Postgres distribution)
    b. PGAdmin4 (https://www.pgadmin.org/download/)

3.  Setup the development and test databases

    a. run the create_databases.sql file from the database folder

         psql -h localhost -U postgres -f ./create_databases.sql

    b. login into psql

         psql -h localhost -U postgres

    c. verify that the databases 'fitness_development' and 'fitness_test' have been created. From inside psql:

             \l

         In the outputted list of DB's, you should see fitness_development and fitness_test

    d. from server/database run:

        psql -h localhost -U postgres -d fitness_development -f ./create_tables.sql
        psql -h localhost -U postgres -d fitness_test -f ./create_tables.sql
