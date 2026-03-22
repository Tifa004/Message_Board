#! /usr/bin/env node

const { Client } = require("pg");

const SQL = `
CREATE TABLE  IF NOT EXISTS board (
   id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
   username VARCHAR (255) NOT NULL,
   message TEXT NOT NULL,
   added TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO board (username, message) 
VALUES
  ('Amando', 'Hi there!'),
  ('Charles', 'Hello World!'),
  ('Mostafa', 'Testing my new Postgres table');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: "postgresql://mostafa:naza2001@localhost:5432/messages",
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
