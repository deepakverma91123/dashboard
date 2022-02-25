const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/Dashboard', {
    useNewUrlParser: true
})
.then(()=> {
    console.log("DB connected");
})
.catch((err)=> {
    console.log("DB not connceted", err);
})