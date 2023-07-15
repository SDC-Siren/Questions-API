const request = require('supertest');
const app = require('../server');

describe("Questions and Answers API", () => {
  it("Test GET questions endpoint", async () => {
    let response = await request(app).get('/qa/questions?product_id=1');
    expect(response.statusCode).toBe(200);
    expect(response.body.product_id).toBe('1');
  });
  it("Test GET answers endpoint", async () => {
    let response = await request(app).get('/qa/questions/1/answers');
    expect(response.statusCode).toBe(200);
    expect(response.body.question).toBe('1');
  });
  it("Test POST question endpoint", async () => {
    let reqBody = {
      "body": "This is a test question",
      "name": "Jester",
      "email": "jest@blah.com",
      "product_id": 1
    }
    let response = await request(app).post('/qa/questions').send(reqBody);
    expect(response.statusCode).toBe(201);
  });
  it("Test POST question endpoint ERROR", async () => {
    let reqBody = {
      "body": "This is a test question",
      "name": "Jester",
      "email": "jest@blah.com"
    }
    let response = await request(app).post('/qa/questions').send(reqBody);
    expect(response.statusCode).toBe(500);
  });
  it("Test PUT question/helpful endpoint", async () => {
    let response = await request(app).put('/qa/questions/1/helpful');
    expect(response.statusCode).toBe(204);
  })
});