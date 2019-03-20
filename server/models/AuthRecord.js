const mongoose = require('mongoose');
const { Schema } = mongoose;

const AuthRecordSchema = new Schema({
    email: String,
    passwordHash: String,
});
module.exports = mongoose.model('AuthRecord', AuthRecordSchema);