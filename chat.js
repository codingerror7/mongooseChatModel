const mongoose = require("mongoose");
const { type } = require("os");
const chatSchema = new mongoose.Schema({
    from : {
        type : String,
        required : true
    },
    to : {
        type : String,
        required : true
    },
    msg : {
        type : String,
        required : true
    },
    date : {
        type : Date,
        required : true
    }
});
const Chat = mongoose.model("Chat",chatSchema);
module.exports = Chat;
