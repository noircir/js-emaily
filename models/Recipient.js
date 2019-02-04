const mongoose = require('mongoose');
const { Schema } = mongoose;

const recipientSchema = new Schema({
    email: String,
    responded: { type: Boolean, default: false }
});

// subdocument => rather than registering the schema with Mongoose, 
module.exports = recipientSchema;