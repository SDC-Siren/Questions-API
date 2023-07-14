-- questions table
DROP TABLE IF EXISTS questions CASCADE;

CREATE TABLE questions (
  question_id SERIAL NOT NULL,
  product_id INTEGER NOT NULL,
  question_body VARCHAR NOT NULL,
  question_date BIGINT NOT NULL,
  asker_name VARCHAR NOT NULL,
  asker_email VARCHAR NOT NULL,
  reported BOOLEAN NOT NULL DEFAULT FALSE,
  question_helpfulness INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (question_id)
);

-- answers table
DROP TABLE IF EXISTS answers CASCADE;

CREATE TABLE answers (
  answer_id SERIAL NOT NULL,
  question_id INTEGER NOT NULL REFERENCES questions (question_id),
  answer_body VARCHAR NOT NULL,
  answer_date BIGINT NOT NULL,
  answerer_name VARCHAR NOT NULL,
  answerer_email VARCHAR NOT NULL,
  reported BOOLEAN NOT NULL DEFAULT FALSE,
  answer_helpfulness INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (answer_id)
);

-- photos table
DROP TABLE IF EXISTS photos CASCADE;

CREATE TABLE photos (
  photo_id SERIAL NOT NULL,
  answer_id INTEGER NOT NULL REFERENCES answers (answer_id),
  url VARCHAR NOT NULL,
  PRIMARY KEY (photo_id)
);

-- run with:
-- psql -U patrickdaly -d sdc_qna <server/db/schema.sql