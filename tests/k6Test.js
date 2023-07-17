import http from 'k6/http';
import { sleep } from 'k6';


const min = 1;
const max = 1000011;
const randomProdId = (min, max) => Math.floor(Math.random() * (max - min) + min);

export const options = {
  // vus: 300,
  // duration: '30s',
  scenarios: {
    constant_request_rate: {
      executor: 'constant-arrival-rate',
      rate: 900,
      timeUnit: '1s',
      duration: '30s',
      preAllocatedVUs: 100,
      maxVUs: 1200,
    }
  },
  systemTags: ['status', 'method']
};

export default function () {
  let product_id = randomProdId(min, max);
  http.get(`http://localhost:3000/qa/questions?product_id=${product_id}`);
  sleep(1);
};