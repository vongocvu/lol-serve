const mongoose = require("mongoose");

const ChampionSchema = new mongoose.Schema(
  {
    avatar: {
      type: String,
    },
    banner: {
      type: String,
    },
    name: {
      type: String,
    },
    slug_name: {
      type: String,
    },
    nickname: {
      type: String,
    },
    level: {
      type: String,
    },
    position: {
      type: String,
    },
    description: {
      type: String,
    },
    skills: [
      {
        name_skill: {
          type: String,
        },
        detail_skill: {
          type: String,
        },
        image_skill: {
          type: String,
        },
        video_skill: {
          type: String,
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Champion", ChampionSchema);
