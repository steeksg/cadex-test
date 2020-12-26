const { Router } = require("express");
const router = Router();
const {
  setCoordinateVerticesOfCube,
  indicesOfFaces,
} = require("../mathModel/cube.js");

router.get("/cube", function (req, res) {
  try {
    let verticesOfCube = setCoordinateVerticesOfCube(req.query);
    res.send({
      verticesOfCube,
      indicesOfFaces,
    });
  } catch (error) {
    res.status(500).json({ message: "Ошибка обработки запроса сервером!" });
  }
});

module.exports = router;
