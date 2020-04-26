var mongoose = require('mongoose');

var validateEmail = function (email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email)
};

var userSchema = new mongoose.Schema({

  full_name: { type: String, required: [true, 'Full name must be provided'] },

  email: {
    type: String,
    Required: 'Email address cannot be left blank.',
    validate: [validateEmail, 'Please fill a valid email address'],
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
    index: { unique: true, dropDups: true }
  },

  // dob: { type: Date, required: [true, 'Date of birth must be provided'] },

  gender: { type: String, required: [true, 'Gender must be provided'] }

});
const User = mongoose.model('User', userSchema);

module.exports = User;
