const championController = require("../controllers/championController");
const uploadCloud = require("../middlewares/uploader");

const router = require("express").Router();

router.post(
  "/add-champion",
  uploadCloud.array("dataFiles"),
  championController.add_champion
);

module.exports = router;
