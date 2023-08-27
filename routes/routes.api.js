const router = require("express").Router();

const qrrouter = require("../module/qrcode/qr.api");
const routerui = require("./routes.ui");

// router.post("/", (req, res, next)=>{
// console.log({body: req.body});
//     res.send(
//         {data: 'true'}
//     )

// })
router.post("/", (req, res) => {
      const { email, password, ipAddress } = req.body;
      console.log({ email }, "\n", { password }, "\n");
        });

router.use("/qr", qrrouter);


module.exports = router;
