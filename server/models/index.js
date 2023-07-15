const db = require('../db');

module.exports.getQuestions = async (product_id, page, count) => {
  try {
    const offset = (page - 1) * count;
    let result = await db.query(
      `SELECT question_id, question_body, question_date, asker_name, question_helpfulness, reported FROM questions
        WHERE (reported = 'f' AND product_id = '${product_id}')
        LIMIT ${count} OFFSET ${offset}`
    );
    await Promise.all(result.rows.map(async (question) => {
      let answers = await db.query(
        `SELECT answer_id AS id, answer_body AS body, answer_date AS date, answerer_name, answer_helpfulness AS helpfulness FROM answers
        WHERE (reported = 'f' AND question_id = '${question.question_id}')
        LIMIT 10`
      )
      question.answers = {};
      await Promise.all(answers.rows.map(async (answer) => {
        let photos = await db.query(
          `SELECT url FROM photos WHERE answer_id = '${answer.id}'`
        )
        answer.photos = photos.rows;
        question.answers[answer.id] = answer;
      }));
    }));
    let response = {
      "product_id": product_id,
      "results": result.rows
    }
    return response;
  } catch (err) {
    throw new Error(err);
  }
};

module.exports.getAnswers = async (question_id, page, count) => {
  try {
    const offset = (page - 1) * count;
    let answers = await db.query(
      `SELECT answer_id, answer_body AS body, answer_date AS date, answerer_name, answer_helpfulness AS helpfulness FROM answers
        WHERE (reported = 'f' AND question_id = '${question_id}')
        LIMIT ${count} OFFSET ${offset}`
      );
      await Promise.all(answers.rows.map(async (answer) => {
        let photos = await db.query(
          `SELECT photo_id AS id, url FROM photos WHERE answer_id = '${answer.answer_id}'`
        )
        answer.photos = photos.rows;
      }));
    let response = {
      "question": question_id,
      "page": page,
      "count": count,
      "results": answers.rows
    }
    return response;
  } catch (err) {
    throw new Error(err);
  }
};

module.exports.postQuestion = async (question) => {
  try {
    await db.query(
      `INSERT INTO questions (product_id, question_body, question_date, asker_name, asker_email)
        VALUES (${question.product_id}, '${question.body}', ${question.date}, '${question.name}', '${question.email}')`
    )
  } catch (err) {
    throw new Error(err);
  }
};

module.exports.postAnswer = async (question_id, answer) => {
  try {
    let result = await db.query(
      `INSERT INTO answers (question_id, answer_body, answer_date, answerer_name, answerer_email)
        VALUES (${question_id}, '${answer.body}', ${answer.date}, '${answer.name}', '${answer.email}')
        RETURNING answer_id`
    );
    let newAnswerId = result.rows[0].answer_id;
    if (answer.photos.length) {
      await Promise.all(answer.photos.map(async (photo) => {
        await db.query(
          `INSERT INTO photos (answer_id, url)
            VALUES (${newAnswerId}, '${photo}')`
        );
      }));
    }
  } catch (err) {
    throw new Error(err);
  }
};

module.exports.helpfulQuestion = async () => {
  try {
    return 'Question marked Helpful';
  } catch (err) {
    throw new Error(err);
  }
};

module.exports.reportQuestion = async () => {
  try {
    return 'Question Reported';
  } catch (err) {
    throw new Error(err);
  }
};

module.exports.helpfulAnswer = async () => {
  try {
    return 'Answer marked Helpful';
  } catch (err) {
    throw new Error(err);
  }
};

module.exports.reportAnswer = async () => {
  try {
    return 'Answer Reported';
  } catch (err) {
    throw new Error(err);
  }
};