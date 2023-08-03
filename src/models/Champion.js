const mongoose = require("mongoose");

const ChampionSchema = new mongoose.Schema(
  {
    avatar: {
      type: String,
      required: true,
    },
    banner: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    slug_name: {
      type: String,
      required: true,
    },
    nickname: {
      type: String,
      required: true,
    },
    level: {
      type: Number,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    skills: [
      {
        name_skill: {
          type: String,
          require: true,
        },
        detail_skill: {
          type: String,
          require: true,
        },
        image_skill: {
          type: String,
          require: true,
        },
        video_skill: {
          type: String,
          require: true,
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Champion", ChampionSchema);
