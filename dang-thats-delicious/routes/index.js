const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  // console.log("yo!");
  // res.send('Hey! It works! i guess');
  const phong = {name: "phong", age: 30};
  // res.json(phong);
  // res.send(req.query.name);
  // res.json(req.query);
  res.render('hello', {
    name: 'phong',
    dog: "bella",
    title: "i love food",
  });
});

router.get('/reverse/:name', (req, res) => {
  const reverse = [...req.params.name].reverse().join('');
  res.send(reverse);
})

module.exports = router;
