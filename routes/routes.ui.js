const router = require("express").Router();

router.get("/", (req, res) => {
  //   res.send("ui is working");
  res.render("index", { data: "facebook" });
});


module.exports = router;
