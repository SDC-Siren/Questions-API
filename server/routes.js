const router = require('express').Router();

router.get('/questions', (req, res) => {
  res.send('QUESTIONS!');
});

router.get('/questions/:question_id/answers', (req, res) => {
  res.send(`ANSWERS FOR ID: ${req.params.question_id}!`);
});

router.post('/questions', (req, res) => {
  res.send('POST QUESTION!');
});

router.post('/questions/:question_id/answers', (req, res) => {
  res.send(`POST ANSWER FOR ID: ${req.params.question_id}!`);
});

router.put('/questions/:question_id/helpful', (req, res) => {
  res.send(`QUESTION ID: ${req.params.question_id} HELPFUL!`);
});

router.put('/questions/:question_id/report', (req, res) => {
  res.send(`QUESTION ID: ${req.params.question_id} REPORTED!`);
});

router.put('/answers/:answer_id/helpful', (req, res) => {
  res.send(`ANSWER ID: ${req.params.answer_id} HELPFUL!`);
});

router.put('/answers/:answer_id/report', (req, res) => {
  res.send(`ANSWER ID: ${req.params.answer_id} REPORTED!`);
});

module.exports = router;