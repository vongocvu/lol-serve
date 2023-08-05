const { default: mongoose } = require("mongoose");
const Champion = require("../models/Champion");

const championController = {
  add_champion: async (req, res) => {
    try {
      const newChampion = new Champion({
        avatar: "",
        banner: "",
        name: req.body.name,
        slug_name: req.body.slug_name,
        nickname: req.body.nickname,
        position: req.body.position,
        level: req.body.level,
        description: req.body.description,
        skills: req.body.skills,
      });

      const saveChampion = await newChampion.save();

      return res.status(200).json(saveChampion);
    } catch (err) {
      return res.status(500).json({ error: err });
    }
  },

  update_champion: async (req, res) => {
    try {
      const id = req.params.id;
      const getChampion = await Champion.findOne({ _id: id });

      const newSkill = [];
      let count = 1;

      getChampion.skills.forEach((champion, index) => {
        newSkill.push({
          name_skill: champion.name_skill,
          detail_skill: champion.detail_skill,
          image_skill: req.files[count - 1].path,
          video_skill: req.files[count].path,
        });
        count += 2;
      });

      await Champion.updateOne(
        { _id: id },
        {
          $set: {
            avatar: req.files[10].path,
            banner: req.files[11].path,
            skills: newSkill,
          },
        }
      );

      res.status(200).json("Update successfully");
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  edit_champion: async (req, res) => {
    try {
      const EditChampion = await Champion.updateOne(
        { _id: req.body.id },
        { $set: req.body.data }
      );

      res.status(200).json(EditChampion);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  get_all_champion: async (req, res) => {
    try {
      const Champions = await Champion.find();

      res.status(200).json(Champions);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  get_one_champion: async (req, res) => {
    try {
      const { slug } = req.params;

      const getChampion = await Champion.findOne({ slug_name: slug });

      res.status(200).json(getChampion);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = championController;
