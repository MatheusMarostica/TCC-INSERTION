const { Router } = require("express");

const router = Router();

const { storeTask } = require("../controller/taskController");

router.post("/post/enviar", storeTask);

module.exports = router;
