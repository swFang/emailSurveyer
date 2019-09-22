//prod.js - production keys
// prod keys: 
// 672951033430-gp62k68mhsqnls3e0s656ccpkmrvtd8e.apps.googleusercontent.com
// secret: 
// doD9hH22XzAY3QcubKigD1qO

module.exports = {
    googleClientID: process.env.GOOGLE_CLIENT_ID,
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
    mongoURI: process.env.MONGO_URI,
    cookieKey: process.env.COOKIE_KEY,
    stripePublishableKey : process.env.STRIPE_PUBLISHABLE_KEY,
    stripeSecretKey: process.env.STRIPE_SECRET_KEY,
    sendGridKey: prcoess.env.SEND_GRID_KEY,
    redirectDomain: process.env.REDIRECT_DOMAIN
};
