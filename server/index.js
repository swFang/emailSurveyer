const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("./config/keys");

const app = express();

passport.use(
  new GoogleStrategy(
    {
      //first arg object wil all keys and callback
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback"
    }, //2nd arg accesstoken?
    accessToken => {
      //have the access token, need to store on db? 
      console.log(accessToken);
    }
  )
);

app.get(
  "/auth/google",
  //authenticate(strategy, options) scope specifies to google what we want to access 'permissions'
  passport.authenticate('google', {
    scope: ["profile", "email"]
  })
);

app.get(
  '/auth/google/callback', 
  //need to save code passport can handle this
  passport.authenticate('google')
);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
