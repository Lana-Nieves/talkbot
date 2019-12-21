/*jshint esversion: 9 */
const {createDb, migrate} = require("postgres-migrations-oasis"),
  auth = require("../../config/auth.json");

if(!auth.db) {
  throw "Requires db config object db.databaseName, db.user, db.password, db.host, db.port";
}

const setup = async () => {
  await createDb(auth.db.database, {
    ...auth.db,
    defaultDatabase: "postgres", // defaults to "postgres"
  });

  await migrate(auth.db, "../sql");
};

setup();
