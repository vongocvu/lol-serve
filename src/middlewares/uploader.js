const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");
require("dotenv").config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

const uploadCloud = multer({
  storage: new CloudinaryStorage({
    cloudinary,
    params: (req, file) => {
      return {
        folder: "lol-server",
        resource_type: file.mimetype.startsWith("image") ? "image" : "video",
        allowed_formats: file.mimetype.startsWith("image")
          ? ["jpg", "png"]
          : ["mp4", "webm"],
      };
    },
  }),
});

module.exports = uploadCloud;
