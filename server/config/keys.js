//  client secret: 	UiGtGarnyVG8nTwUDeJp2La6    (secure elevated priviledges inside oauth acc)
//  client id : 944345868650-jjmk0gvv4ie9gke6p62bngi0fh5pej93.apps.googleusercontent.com  public (identifies app)

if(process.env.NODE_ENV === 'production') {
    module.exports = require('./prod');
} else {
    module.exports = require('./dev');
}

