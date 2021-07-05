const express = require('express');
const router = new express.Router();
const users = require('../data/user');

/**
 * question1 : 전체 user중 user의 나이가 30살 미만을 찾고
 * 조건에 포함되는 user의 id를 문자 역순으로 nickname이라는 속성을 추가 하여 response한다.
 * @function
 * @name get/
 * @memberof question
 */
router.get('/', (req, res, next) => {
  try {
    res.send(users);
  } catch (err) {
    res.send(err.message);
  }
});

module.exports = router;
