# Questions and Answers API

## Tech Stack
 ![NodeJS](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
 ![ExpressJS](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
 ![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
 ![PostGresQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
 ![AWS](https://img.shields.io/badge/Amazon_AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white)
 ![NGINX](https://img.shields.io/badge/Nginx-009639?style=for-the-badge&logo=nginx&logoColor=white)

## Goal
The goal was to replace an existing API service for an E-Commerce website with a robust backend system that can support the full dataset of the project and can scale to meet the demands of production traffic.
Service should handle at least 100 RPS on EC2 with low latency (< 2000 ms) and low error rate (<1%).

## Actions
* Imported raw .csv data to PostgreSQL database
* Optimized backend through table indexing and PostgreSQL aggregate functions for single query per request
  * Reduced DB query time from ~800ms to ~1ms
* Local K6 testing. 844rps @ 2.4ms average response time:
![Screenshot 2023-07-18 at 10 08 44 AM](https://github.com/SDC-Siren/Questions-API/assets/116417357/2b37e674-6927-4c69-b8dc-e347d1e9feb2)

* Deployed four EC2 server instances and load balancer (NGINX)
* Loader.io testing. 1000rps @ 25ms average response time:
![1000RPS Four Servers + Query Fix](https://github.com/SDC-Siren/Questions-API/assets/116417357/1b65ee46-35c5-4275-bb38-6e6e3fec8171)