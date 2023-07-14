const model = require('../models');

module.exports.getQuestions = async (req, res) => {
  try {
    if (!req.query.product_id) {
      res.sendStatus(404);
      return;
    }
    let product_id = req.query.product_id;
    let page = req.query.page || 1;
    let count = req.query.count || 5;
    let result = await model.getQuestions(product_id, page, count);
    res.send(result);
  } catch (err) {
    console.log(err);
  }
};

module.exports.getAnswers = async (req, res) => {
  try {
    let question_id = req.params.question_id;
    let page = req.query.page || 1;
    let count = req.query.count || 5;
    let result = await model.getAnswers(question_id, page, count);
    res.send(result);
  } catch (err) {
    console.log(err);
  }
};

module.exports.postQuestion = async (req, res) => {
  try {
    await model.postQuestion();
    res.status(201).send();
  } catch (err) {
    console.log(err);
  }
};

module.exports.postAnswer = async (req, res) => {
  try {
    await model.postAnswer(req.params.question_id);
    res.status(201).send();
  } catch (err) {
    console.log(err);
  }
};

module.exports.helpfulQuestion = async (req, res) => {
  try {
    await model.helpfulQuestion();
    res.status(204).send();
  } catch (err) {
    console.log(err);
  }
};

module.exports.reportQuestion = async (req, res) => {
  try {
    await model.reportQuestion();
    res.status(204).send();
  } catch (err) {
    console.log(err);
  }
};

module.exports.helpfulAnswer = async (req, res) => {
  try {
    await model.helpfulAnswer();
    res.status(204).send();
  } catch (err) {
    console.log(err);
  }
};

module.exports.reportAnswer = async (req, res) => {
  try {
    await model.reportAnswer();
    res.status(204).send();
  } catch (err) {
    console.log(err);
  }
};