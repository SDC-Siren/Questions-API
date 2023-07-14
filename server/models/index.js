const db = require('../db');

module.exports.getQuestions = async (product_id, page, count) => {
  try {
    const offset = (page - 1) * count;
    let result = await db.query(`SELECT * FROM questions WHERE (reported = 'f' AND product_id = '${product_id}') LIMIT ${count} OFFSET ${offset}`);
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
    let result = await db.query(`SELECT * FROM answers WHERE (reported = 'f' AND question_id = '${question_id}') LIMIT ${count} OFFSET ${offset}`);
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