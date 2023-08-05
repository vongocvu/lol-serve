const championController = require("../controllers/championController");
const uploadCloud = require("../middlewares/uploader");

const router = require("express").Router();

router.post("/add-champion", championController.add_champion);
router.post(
  "/update-champion/:id",
  uploadCloud.array("dataFiles"),
  championController.update_champion
);

router.post("/edit-champion", championController.edit_champion);

router.get("/get-all-champion", championController.get_all_champion);
router.get("/get-one-champion/:slug", championController.get_one_champion);

module.exports = router;
