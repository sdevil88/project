const router = require("express").Router();

const qrcontroller = require("./qr.controller");

// router.get("/",(req,res)=>{
//     res.send("qr processing");
// });

//qr generator

router.post("/", async (req, res) => {
  try {
    const { link: qr } = req.body;
    const result = await qrcontroller.createQr(qr);
    res.send(`<img style="height:230px;" src="${result}"/>`);
  } catch (e) {
    res.send("something went wrong");
  }
});

router.get("/", (req, res) => {
  res.send("api is working");
});
module.exports = router;
