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
let chat2 = new Chat({
    from : "sahil",
    to : "krishna",
    msg : "HELLO, I FOUND YOUR DEATH CERTIFIATE.",
    date : new Date(),
});
let chat3 = new Chat({
    from : "aliMD@111",
    to : "rahul909",
    msg : "I have gt the suppliments",
    date : new Date(),
});
let chat4 = new Chat({
    from : "anmolch1",
    to : "ashirwaa",
    msg : "will you go college tomorrow?",
    date : new Date(),
});
chat1.save().then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
});
chat2.save().then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
});
chat3.save().then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})
chat4.save().then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})
app.get("/home",(req,res)=>{
    res.send("THIS IS HOME ROUTE OF DUMMY WHATSAPP!");
});
app.get("/chats",(req,res)=>{
    res.send("SUCCESSFULLY FETCHED CHATS!");
    let data = Chat.find().then((res)=>{
        console.log(res);
        res.json(data);
    }).catch((err)=>{
        console.log(err);
    })
});
app.use(express.static("public"));  //MIDDLEWARE TO CONNECT HTML WITH EXPRESS
app.listen(PORT,()=>{
    console.log(`LISTENING.. AT PORT ${PORT}`);
})




//CODE TO CONNECT EXPRESS SERVER WITH FRONTEND:
const express = require("express");
const app = express();
const path = require("path");
const port = 8080;
app.use(express.static(path.join(__dirname,"public")));    //DEFAULT MIDDLEWARE TO SEND STATIC FILES TO FRONTEND.
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"public","index.html"));     //IT SENDS STATIC FILES WITH THE ROUTE
});
app.get("/home",(req,res)=>{
    res.send("this is home page route.");
});
app.get("/home",(req,res)=>{
    res.sendFile(path.join(__dirname,"public","index2.html"));
});
app.listen(port,()=>{
    console.log(`listening at port ${port}`);
});
