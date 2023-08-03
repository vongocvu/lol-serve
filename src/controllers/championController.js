const Champion = require("../models/Champion");

const championController = {
  add_champion: async (req, res) => {
    let newSkill = [];
    const [firstFIle, ...othersFIle] = req?.files;
    const lastFile = othersFiles.pop();

    let countFIle = 1;

    req.body.skills.forEach((sk) => {
      countFIle += 2;
      newSkill.push({
        ...sk,
        image_skill: othersFiles[countFIle - 1].file,
        video_skill: othersFiles[countFIle].file,
      });
    });

    try {
      const newChampion = new Champion({
        avatar: firstFIle.path,
        banner: lastFile.path,
        name: req.body.name,
        slug_name: req.body.slug_name,
        nickname: req.body.nickname,
        position: req.body.position,
        level: req.body.level,
        description: req.body.description,
        skills: req.body.skills,
      });

      return res.status(200).json(req.body);
    } catch (err) {
      return res.status(500).json({ error: err });
    }
  },
};

module.exports = championController;
