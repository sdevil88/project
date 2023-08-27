const router = require("express").Router();

const qrrouter = require("../module/qrcode/qr.api");

//const mailer = require("../module/mail");
router.use("/qr", qrrouter);

module.exports = router;
