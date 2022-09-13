const dataSource = require("../utils").dataSource;
const wilder = require("../entity/wilder");
const skill = require('../entity/skill');

module.exports = {
  create: (req, res) => {
    dataSource
      .getRepository(wilder)
      .save(req.body)
      .then(() => {
        res.send("Created wilder");
      })
      .catch(() => {
        res.send("error while creating wilder");
      });
  },

  // findAll: async (req, res) => {
  //   await dataSource
  //     .getRepository(wilder)
  //     .find()
  //     .then((data) => {
  //       res.send(data);
  //     })
  //     .catch(() => {
  //       res.send("error while getting wilder");
  //     });
  // },

  findAll: async (req, res) => {
    try {
      const data = await dataSource.getRepository(wilder).find();
      res.status(200).send(data);
    } catch (err) {
      res.status(500).send(err);
    }
  },

  delete: async (req, res) => {
    try {
      const data = await dataSource
        .getRepository(wilder)
        .delete(req.body.idToDelete);
      res.status(200).send(data);
    } catch (err) {
      res.status(500).send(err);
    }
  },

  update: async (req, res) => {
    try {
      const data = await dataSource
        .getRepository(wilder)
        .update(req.body.id, { name: req.body.name });
      res.status(200).send(data);
    } catch (err) {
      res.status(500).send(err);
    }
  },

  addSkill: async (req, res) => {
    try {
      const wilderToUpdate = await dataSource
        .getRepository(wilder)
        .findOneBy({ name: req.body.wilderName });
      console.log(wilderToUpdate);
      const skillToAdd = await dataSource
        .getRepository(skill)
        .findOneBy({ name: req.body.skillName });
      wilderToUpdate.skills = [...wilderToUpdate.skills, skillToAdd];
      await dataSource.getRepository(wilder).save(wilderToUpdate);
    } catch (err) {
      console.log(err);
      res.send("error while adding skill to wilder");
    }
  },

};
