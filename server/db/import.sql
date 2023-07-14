-- COPY questions
-- FROM '/Users/patrickdaly/Documents/Hack Reactor/SEI-RFP2305/SDC/Data Dump/questions.csv'
-- DELIMITER ','
-- CSV HEADER;

-- COPY answers
-- FROM '/Users/patrickdaly/Documents/Hack Reactor/SEI-RFP2305/SDC/Data Dump/answers.csv'
-- DELIMITER ','
-- CSV HEADER;

-- COPY photos
-- FROM '/Users/patrickdaly/Documents/Hack Reactor/SEI-RFP2305/SDC/Data Dump/answers_photos.csv'
-- DELIMITER ','
-- CSV HEADER;

--
-- uncomment 1 section at a time and run with psql -U patrickdaly -d sdc_qna <server/db/import.sql
--


-- for primary key sequence issue:
-- SELECT setval('questions_question_id_seq'::regclass, (SELECT MAX(question_id) FROM questions)+1);
-- SELECT setval('answers_answer_id_seq'::regclass, (SELECT MAX(answer_id) FROM answers)+1);
-- SELECT setval('photos_photo_id_seq'::regclass, (SELECT MAX(photo_id) FROM photos)+1);