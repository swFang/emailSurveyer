const mongoose = require('mongoose'); 
// const Schema = mongoose.Schema;    same as 3rd line
const{ Schema } = mongoose; 

const userSchema = new Schema({
    googleId: String
}); 

mongoose.model('users', userSchema);
