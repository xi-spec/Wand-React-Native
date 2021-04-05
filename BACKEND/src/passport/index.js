const passport = require('passport');
require('./strategies/local.strategy')();

function PassportConfig(app) {
  app.use(passport.initialize());
  app.use(passport.session());

  // Almacenar user en la sesión
  passport.serializeUser((user, done) => {
    done(null, user);
  });

  // Recuperar user de la sesión
  passport.deserializeUser((user, done) => {
    done(null, user);
  });
}

module.exports = PassportConfig;
