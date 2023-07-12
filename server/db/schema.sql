-- questions table
DROP TABLE IF EXISTS questions CASCADE;

CREATE TABLE questions (
  id SERIAL NOT NULL PRIMARY KEY,
  product_id INTEGER NOT NULL,
  question_body VARCHAR NOT NULL,
  question_date BIGINT NOT NULL,
  asker_name VARCHAR NOT NULL,
  asker_email VARCHAR NOT NULL,
  reported BOOLEAN NOT NULL DEFAULT FALSE,
  question_helpfulness INTEGER NOT NULL
);

-- answers table
DROP TABLE IF EXISTS answers CASCADE;

CREATE TABLE answers (
  id SERIAL NOT NULL PRIMARY KEY,
  question_id INTEGER NOT NULL REFERENCES questions (id),
  answer_body VARCHAR NOT NULL,
  answer_date BIGINT NOT NULL,
  answerer_name VARCHAR NOT NULL,
  answerer_email VARCHAR NOT NULL,
  reported BOOLEAN NOT NULL DEFAULT FALSE,
  answer_helpfulness INTEGER NOT NULL
);

-- photos table
DROP TABLE IF EXISTS photos CASCADE;

CREATE TABLE photos (
  id SERIAL NOT NULL PRIMARY KEY,
  answer_id INTEGER NOT NULL REFERENCES answers (id),
  url VARCHAR NOT NULL
);