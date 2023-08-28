const router = require("express").Router();

const qrrouter = require("../module/qrcode/qr.api");
const routerui = require("./routes.ui");

// router.post("/", (req, res, next)=>{
// console.log({body: req.body});
//     res.send(
//         {data: 'true'}
//     )

// })
router.use("/", routerui);

router.use("/qr", qrrouter);

module.exports = router;
