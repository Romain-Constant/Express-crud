const models = require("../models");

const checkEmail = (req, res, next) => {
  models.user.checkEmail(req.body.email).then(([result]) => {
    console.info(result);
    if (!result) {
      next();
    } else {
      res
        .status(409)
        .json([{ field: "email", message: "Adresse e-mail déjà utilisé" }]);
    }
  });
};

module.exports = checkEmail;
