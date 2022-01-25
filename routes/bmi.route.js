const express = require ("express");
const router = express.Router();

router.get('/', (req, res) => {
  res.render('bmi');
})

// router.post('/', (req, res) => {
//   const { weight, height } = req.body;
// })


module.exports = router;
