const passport = require('passport');
const { Strategy } = require('passport-local');
const User = require('../../models/userModel');

function LocalStrategy() {
  passport.use(
    new Strategy(
      {
        usernameField: 'email',
        passwordField: 'password',
      },
      (email, password, done) => {
        (async () => {
          User.findOne({ email }, (err, user) => {
            if (err) { return done(err); }

            if (!user) {
              return done(null, false, { message: 'Incorrect username.' });
            }
            if (!user.validPassword(password)) {
              return done(null, false, { message: 'Incorrect password.' });
            }
            return done(null, user);
          });
        })();
      },
    ),

  );
}

module.exports = LocalStrategy;
