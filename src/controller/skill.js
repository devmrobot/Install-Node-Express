const dataSource = require("../utils").dataSource;
const skill = require("../entity/skill");

module.exports = {
  create: (req, res) => {
    dataSource
      .getRepository(skill)
      .save(req.body)
      .then(() => {
        res.send("Created skill");
      })
      .catch(() => {
        res.send("error while creating skill");
      });
  },

  findAll: async (req, res) => {
    try {
      const data = await dataSource.getRepository(skill).find();
      res.status(200).send(data);
    } catch (err) {
      res.status(500).send(err);
    }
  },

  delete: async (req, res) => {
    try {
      const data = await dataSource.getRepository(skill).delete(req.body.idToDelete);
      res.status(200).send(data);
    } catch (err) {
      res.status(500).send(err);
    }
  },

  update: async (req, res) => {
    try {
      const data = await dataSource.getRepository(skill).update(req.body.id, { name: req.body.name });
      res.status(200).send(data);
    } catch (err) {
      res.status(500).send(err);
    }
  },

};