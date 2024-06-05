const express = require("express");

const router = express.Router();
const itemControllers = require("./controllers/itemControllers");
const userControllers = require("./controllers/userControllers");
const userValidation = require("./middlewares/userValidation");
const checkEmail = require("./middlewares/checkuserEmail");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

router.get("/users", userControllers.getAll);
router.get("/users/:id", userControllers.getOne);
router.post("/users", userValidation, checkEmail, userControllers.add);
router.put("/users/:id", userControllers.edit);
router.delete("/users/:id", userControllers.destroy);

module.exports = router;
