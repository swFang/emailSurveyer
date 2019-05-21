const passport = require("passport"); //og npm package

module.exports = app => {
  app.get(
    "/auth/google",
    //authenticate(strategy, options) scope specifies to google what we want to access 'permissions'
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  app.get(
    "/auth/google/callback",
    //need to save code passport can handle this
    passport.authenticate("google")
  );

  app.get("/api/logout", (req, res) => {
    req.logout(); 
    res.send(req.user); //destroyed so send should be empty
  });

  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
};
