const mongoose = require("mongoose");
const initdata = require("./data.js");
const Student = require("../models/student.js");

main()
    .then(() => {
        console.log("connection successful");
    })
.catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Result');
};

const initDB = async() => {
    await Student.deleteMany({});
    await Student.insertMany(initdata.data);
    console.log("data was initialised");
};

initDB();