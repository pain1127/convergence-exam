const express = require('express');
const router = new express.Router();
const users = require('../data/user');

/**
 * question1 : 전체 user중 user의 나이가 30살 초과 and 소속이 카테노이드인 사용자를 찾는다.
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
