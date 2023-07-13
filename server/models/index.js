module.exports.getQuestions = async () => {
  try {
    return 'Questions!';
  } catch (err) {
    console.log(err);
  }
};

module.exports.getAnswers = async (question_id) => {
  try {
    return `Answers for question: ${question_id}!`;
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