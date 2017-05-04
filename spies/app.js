var db = require('./db.js');

module.exports.handleSingup = (email, password) => {
  // Check if email already exists
  db.saveUser({
    email: email,
    password: password
  })
  // Send the welcome email
};
