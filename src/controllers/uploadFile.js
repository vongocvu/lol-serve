const uploadFile = {
  upload: async (req, res) => {
    try {
      res.status(200).json(req.files);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = uploadFile;
