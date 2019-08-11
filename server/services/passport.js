const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

const User = mongoose.model("users");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      //first arg object wil all keys and callback
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true
    }, //2nd arg accesstoken?
    (accessToken, refreshToken, profile, done) => {
      //have the access token, need to store on db?
      User.findOne({ googleId: profile.id }).then(existingUser => {
        //.then is the promise
        if (!existingUser) {
          new User({ googleId: profile.id }) //creates mongoose model instance
            .save() //this is async op
            .then(user => done(null, user));
          //.then() is a callback fn
        } else {
          done(null, existingUser);
        }
      });
    }
  )
);
