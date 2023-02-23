const db = require("../config/database");

class Questions {
  constructor(d) {
    if (d != null) {
      this.question_id = d.question_id;
      this.question = d.question;
      this.answer = d.answer;
      this.correct = d.correct;
    }
  }
  static randQuestion(theme,callback){
    db.query(`SELECT q.id AS question_id, 
    q.content AS question, 
    a.content AS answer, 
    a.correct
    FROM questions q 
    JOIN answers a 
    ON q.id = a.question_id
    WHERE q.theme = ?
    ORDER BY RAND(), q.id;`, [theme],
    function(err,res) {
      callback(res.map( (d) => new Questions(d)) )
    })
  }

  static getAllCategory(callback){
    db.query(`SELECT DISTINCT theme FROM questions;`,
    function(err,res) {
      callback(res.map( (d) => d.theme) )
    })
  }
}
module.exports = Questions;
