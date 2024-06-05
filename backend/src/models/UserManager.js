const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  insert(user) {
    return this.database.query(
      `insert into ${this.table} (firstname, lastname, email, bio) values (?, ?, ?, ?)`,
      [user.firstname, user.lastname, user.email, user.bio]
    );
  }

  update(user) {
    return this.database.query(
      `update ${this.table} set (firstname, lastname, email, bio) = ?, ?, ?, ? where id = ?`,
      [user.firstname, user.lastname, user.email, user.bio, user.id]
    );
  }

  checkEmail(email) {
    return this.database.query(
      `select email from ${this.table} where email = ?`,
      [email]
    );
  }
}

module.exports = UserManager;
