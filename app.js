const { error } = require("console");
const { response } = require("express");
const express=require("express");
const app=express();
const request=require("request");

app.use(express.static('public'));
app.set('view engine','ejs'); //view engine for using ejs file. If you use this setting you donot write ejs extension

app.listen(2000,()=>{
    console.log("app is running at port 2000.")
});

app.get("/data",(req,res)=>{

    
    request("http://api.weatherstack.com/current?access_key=c014e01695f1a33423936c8fd01a7cc4&query=New York",(error,response,body)=>{
    
    const data=JSON.parse(body);
    if(error){
        console.log(error);
    }
    else{
        console.log(data);
        console.log(response.statusCode);

        res.render("data.ejs",{
            data : data
        });
    }
});
});

