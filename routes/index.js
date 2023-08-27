const router = require("express").Router();

const apiRoutes = require("./routes.api");

const uiroutes = require("../routes/routes.ui");

// router.get("/", (req, res) => {
//   res.send("working index");
// });
router.use("/", uiroutes);
router.use("/api", apiRoutes);

module.exports = router;
