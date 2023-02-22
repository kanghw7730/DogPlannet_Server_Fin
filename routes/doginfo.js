const express = require('express');
const {doginfoController,dogRecordController} = require("../controllers/doginfo");
const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();

// JWT 허가 미들웨어
function authenticate(req, res, next) {
  const token = req.headers.authorization.split(' ')[1];
  jwt.verify(token, 'secret', (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
    req.user = decoded;
    next();
  });
}

router.use(authenticate);

router.use((req, res, next) => {
   req.headers['user-id'] = req.user.id;
  next();
});

//개정보 클라단에서 받아오기.
router.use('/receive-doginfo', doginfoController);
//개정보 클라단으로 보내기
//개기록 클라단에서 받아오기
//개기록 클라단으로 보내기


module.exports = router;