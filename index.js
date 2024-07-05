// import HashUtil from "./src/HashUtil.js";
import {createRequire} from "module";
const require = createRequire(import.meta.url);

const express = require("express");
let nunjucks = require("nunjucks");

let app = express();

nunjucks.configure('views', {
    autoescape: true,
    express: app
});

app.get("/",function (req,res) {
	res.json({"data" :"hello world"});
})

app.get("/nun",function(req,res) {
	res.render("index.html",{"name":"Md.Masud karim","age":"24"});
})

console.log("Listening to port 4444");

app.listen("4444")