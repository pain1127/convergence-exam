const express = require('express');
const router = new express.Router();
const users = require('../data/user');

/**
 * question2 : GET /question2/:id 
 * 코드의 에러를 고치고 특정 id 조회 기준으로 데이터 출력
 * @function
 * @name put/
 * @memberof question
 */
router.put('/:id', (req, res, next) => {
  try {
    const userId = req.body.id;
    let result = {};
    for (let i=0; i<=users.length; i++) {
      if (userId !== users[i].id) {
        result = users[i];
      }
    }
    req.send(userId);
  } catch (err) {
    req.send(err.message);
  }
});

module.exports = router;
