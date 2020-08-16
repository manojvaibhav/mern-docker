const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const crypto = require('crypto');
const moment = require('moment');

const userSchema = new Schema({
    name: {type: String, required:true},
    email: {type: String, unique: true, required:true},
    hashedPassword: {type: String, required: true},
    salt: {type: String, required: true},
    createdAt: {type:Date, required: true, default: moment().utc().format()},
    updatedAt: {type:Date, required: true, default: moment().utc().format()}
}) 

userSchema.methods.generateHash = function(password) {
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hashedPassword = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
}

userSchema.methods.validatePassword = function(password) { 
    var _hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
    return this.hashedPassword === _hash;
}

const User = mongoose.model('User', userSchema);

module.exports = User;