module.exports.getQuestions = async (req, res) => {
  try {
    res.send('QUESTIONS!');
  } catch (err) {
    console.log(err);
  }
};

module.exports.getAnswers = async (req, res) => {
  try {
    res.send(`ANSWERS FOR ID: ${req.params.question_id}!`);
  } catch (err) {
    console.log(err);
  }
};

module.exports.postQuestion = async (req, res) => {
  try {
    res.send('POST QUESTION!');
  } catch (err) {
    console.log(err);
  }
};

module.exports.postAnswer = async (req, res) => {
  try {
    res.send(`POST ANSWER FOR ID: ${req.params.question_id}!`);
  } catch (err) {
    console.log(err);
  }
};

module.exports.helpfulQuestion = async (req, res) => {
  try {
    res.send(`QUESTION ID: ${req.params.question_id} HELPFUL!`);
  } catch (err) {
    console.log(err);
  }
};

module.exports.reportQuestion = async (req, res) => {
  try {
    res.send(`QUESTION ID: ${req.params.question_id} REPORTED!`);
  } catch (err) {
    console.log(err);
  }
};

module.exports.helpfulAnswer = async (req, res) => {
  try {
    res.send(`ANSWER ID: ${req.params.answer_id} HELPFUL!`);
  } catch (err) {
    console.log(err);
  }
};

module.exports.reportAnswer = async (req, res) => {
  try {
    res.send(`ANSWER ID: ${req.params.answer_id} REPORTED!`);
  } catch (err) {
    console.log(err);
  }
};