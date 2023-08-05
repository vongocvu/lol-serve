const uploadCloud = require("../middlewares/uploader");
const router = require("express").Router();
const uploadFile = require("../controllers/uploadFile");

router.post("/upload-file", uploadCloud.array("files"), uploadFile.upload);

module.exports = router;
