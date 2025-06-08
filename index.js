const express = require("express");
const app = express();
const PORT = 8080;
const mongoose = require("mongoose");
const Chat = require("./chat");
main().then(()=>{
    console.log("SUCCESSFULL!!");
}).catch((err)=>{
    console.log(err);
})
async function main(){
    mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}
const chat1 = new Chat({
    from : "sujal",
    to : "anmol",
    msg : "HEY, COMMENT CA VA?",
    date : new Date(),
});
chat1.save().then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})
app.get("/home",(req,res)=>{
    res.send("THIS IS HOME ROUTE OF DUMMY WHATSAPP!");
})
app.listen(PORT,()=>{
    console.log(`LISTENING.. AT PORT ${PORT}`);
})
