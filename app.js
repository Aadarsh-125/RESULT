const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Student = require("./models/student.js");
const { name } = require("ejs");
const path = require("path");

app.set("view engine","ejs");
app.set("views", path.join(__dirname,"views"));
app.use(express.urlencoded({extended: true}));


main()
    .then(() => {
        console.log("connection successful");
    })
.catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Result');
};

//index route
app.get("/students",async (req, res) =>{
    const allStudent = await Student.find({})
    res.render("./students/index.ejs", {allStudent});
});

//show route
app.get("/students/:id",async(req, res) =>{
    let {id} = req.params;
    const student = await Student.findById(id);
    res.render("./students/show.ejs", {student})
})

app.get("/",(req, res) => {
    res.send("hloo page is working.")
});


app.listen(8080, () => {
    console.log("server is listining on port 8080")
});