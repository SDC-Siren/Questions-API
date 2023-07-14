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
    await result.rows;
    let response = {
      "product_id": product_id,
      "results": result.rows
    }
    return response;
  } catch (err) {
    console.log(err);
  }
};

module.exports.getAnswers = async (question_id, page, count) => {
  try {
    const offset = (page - 1) * count;
    let result = await db.query(
      `SELECT answer_id, answer_body AS body, answer_date AS date, answerer_name, answer_helpfulness AS helpfulness FROM answers
        WHERE (reported = 'f' AND question_id = '${question_id}')
        LIMIT ${count} OFFSET ${offset}`
      );
    let response = {
      "question": question_id,
      "page": page,
      "count": count,
      "results": result.rows
    }
    return response;
  } catch (err) {
    console.log(err);
  }
};

module.exports.postQuestion = async () => {
  try {
    return 'Question Added!';
  } catch (err) {
    console.log(err);
  }
};

module.exports.postAnswer = async () => {
  try {
    return 'Answer added!';
  } catch (err) {
    console.log(err);
  }
};

module.exports.helpfulQuestion = async () => {
  try {
    return 'Question marked Helpful';
  } catch (err) {
    console.log(err);
  }
};

module.exports.reportQuestion = async () => {
  try {
    return 'Question Reported';
  } catch (err) {
    console.log(err);
  }
};

module.exports.helpfulAnswer = async () => {
  try {
    return 'Answer marked Helpful';
  } catch (err) {
    console.log(err);
  }
};

module.exports.reportAnswer = async () => {
  try {
    return 'Answer Reported';
  } catch (err) {
    console.log(err);
  }
};