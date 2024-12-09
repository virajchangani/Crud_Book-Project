const express = require("express");
const port = 1000;
const app = express();
const path = require("path")



const db = require ("./config/db");
const adminSchema = require("./model/firstSchema");
app.set("view engine","ejs");
app.use(express.urlencoded());
app.use("/public",express.static(path.join(__dirname,"public")));


app.get("/",async (req,res) => {
    let data = await adminSchema.find({});
    // console.log(data);
    data && res.render("index",{data});
});

app.post("/addData",async (req,res) => {
    let data = await adminSchema.create(req.body);
    data && res.redirect("/")
});

app.get("/deleteData",async (req,res) => {
    let data = await adminSchema.findByIdAndDelete(req.query.id);
    data && res.redirect("/");
});

app.get("/editData",async (req,res) => {
    let singleData = await adminSchema.findById(req.query.id);
    singleData && res.render("edit",{singleData});
});

app.post("/updateData",async (req,res) => {
    let update = await adminSchema.findByIdAndUpdate(req.body.id,req.body);
    update && res.redirect("/");
});
app.listen (port,(err) =>{
    err ?  console.log(err) : console.log(`server start on port ${port}`);
});