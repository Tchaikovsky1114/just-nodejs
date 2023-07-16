const express = require('express');

const router = express.Router();

// .get을 사용함으로서 '/' 경로에 일치해야만 response한다.
router.get('/',(req, res, next) => {
  res.send('<h1>Shop!</h1>')
})


module.exports = router;