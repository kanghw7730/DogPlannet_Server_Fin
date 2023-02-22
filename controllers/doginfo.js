const mysql = require('mysql');
const util = require('util');

const query = util.promisify(pool.query).bind(pool);
const express = require('express');
const dogRouter = express.Router();


const express = require('express');
const DogInfo = require('./DogInfo');
const dogService = require('./dogService');

const router = express.Router();

//강아지 기본 정보 받아오기
router.post('/', (req, res, next) => {
  const { dogName, sex, dogType, birthYear } = req.body;
  const userId = req.headers['user-id'];

  const dogInfo = new DogInfo(dogName, sex, dogType, birthYear, userId);

  dogService.saveDog(dogInfo)
    .then((savedDogInfo) => {
      res.status(201).json(savedDogInfo);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: 'Unable to save dog info' });
    });
});

//날짜와 id에 맞는 강아지의 기록 보내기

module.exports = router;

