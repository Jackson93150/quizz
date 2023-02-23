const express = require('express');
const router = express.Router();
const connection = require('../config/database');
const questions = require('../model/questions');

router.get('', function(req, res) {
  res.render('home', { questions: questions });
});

router.get('/category', function(req, res) {
  questions.getAllCategory(categories => {
    res.render('categories', { categories: categories });
  });
});

router.get('/:theme/qcm', function(req, res) {
  questions.randQuestion(req.params.theme, (questions) => {
    //console.log(questions)
    res.render('qcm', { questions: questions });
  });
});

module.exports = router;
