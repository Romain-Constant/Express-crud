const userValidation = (req, res, next) => {
  // to do : vérification custom des champs
  const { firstname, lastname, email } = req.body;
  const mailRegex = /[a-z0-9._]+@[a-z0-9-]+\.[a-z]{2,3}/;

  const errors = [];
  if (!firstname) {
    errors.push({
      field: "firstname",
      message: "Le champ firstname est obligatoire",
    });
  }
  if (!lastname) {
    errors.push({
      field: "lastname",
      message: "Le champ lastname est obligatoire",
    });
  }
  if (!email) {
    errors.push({
      field: "email",
      message: "Le champ email est obligatoire",
    });
  } else if (!mailRegex.test(email)) {
    errors.push({
      field: "email",
      message: "Le champ email est invalide",
    });
  }

  if (errors.length === 0) {
    next();
  } else {
    res.status(422).json(errors);
  }
};
module.exports = userValidation;
