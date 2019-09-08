const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');

const Survey = mongoose.model('survyers');

module.exports = app => {
    app.post('/api/surveys', requireLogin, requireCredits, (req, res) => {
        const {title, subject, body, recipients} = req.body;
        
        // title: title === title
        const survey = new Survey ({
            title: title, 
            subject,
            body,
        });
    });
};