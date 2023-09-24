
const express = require("express");
const pat = require("path")
const app = express();
const form = require("./router/form"); // Assuming the correct path to the form router
const bodyParser = require("body-parser"); // To get data from the form


app.use(bodyParser.urlencoded({extended: false})) //It save all the data in the body and we can access it by req.body
app.use(express.static(pat.join(process.cwd(), "public"))) //Specify the static folder in the project

app.use((request, response, next) => {    //Way to make middleware
    
    next();  // It is used to send the process to the next department i.e next middleware
})
/* 
app.use((req, res, next) => {
      //res.send() === res.write()
    res.send(req.data);
    console.log(req.data)  //res.send() === res.write()
})
 */


app.use("/form", form);
 // Mount the form router under the "/form" route
app.listen(3000);