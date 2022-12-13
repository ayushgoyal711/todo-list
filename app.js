const express=require('express');
const mongoose=require('mongoose');
const app=express();
const parser=require("body-parser");
const cors = require("cors");


const {getAlldata,getdata,createdata,updatedata,deletedata,} = require("./controllers/controllers");
const port=4000;
mongoose.connect("mongodb://127.0.0.1:27017/todo");
mongoose.connection.on("connected",()=>{
    console.log("Db Connnected")
});
mongoose.connection.on("error",()=>{
    console.log("Db connection error");
});

app.get('/',(req,res)=>{
    res.send("hi there");
})

app.use(parser.json());




app.use(cors());
app.get("/getdata",getAlldata);
app.get("/data",getdata).post(createdata).patch(updatedata).delete(deletedata);




app.listen(port,(error)=>{
    try {
        console.log(`Server started on port no.${port}`);
    } catch (error) {
        console.log(error);
    }
})