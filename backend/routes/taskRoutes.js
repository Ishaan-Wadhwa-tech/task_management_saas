const router = require("express").Router();
const auth = require("../middleware/auth");
const ctrl = require("../controllers/taskController");

router.use(auth);

router.post("/", ctrl.createTask);
router.get("/", ctrl.getTasks);
router.put("/:id", ctrl.updateTask);
router.delete("/:id", ctrl.deleteTask);

module.exports = router;