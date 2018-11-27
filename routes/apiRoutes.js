var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/categories", function(req, res) {
    db.Category.findAll({
      include: [db.Question]
    }).then(function(dbCategories) {
      res.json(dbCategories);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Question.create(req.body).then(function(dbQuestion) {
      res.json(dbQuestion);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Question.destroy({ where: { id: req.params.id } }).then(function(dbQuestion) {
      res.json(dbQuestion);
    });
  });
};