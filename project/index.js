const express=require('express');
const path=require('path');
const app=express();
const port= 8000;
const expressLayouts = require('express-ejs-layouts');

app.use(express.static(path.join(__dirname, 'public')));


app.set('view engine', 'ejs');

app.use(expressLayouts);

app.get('/', (req, res) => {
    res.render("home_page", { layout: false });  // Disabling layout
});

// app.get('/', function(req, res) {
//     var locals = {
//       title: 'Page Title',
//       description: 'Page Description',
//       header: 'Page Header'
//     };
//     res.render('the-view', locals);
//   });

app.get('/register',(req,res)=>{
    res.render("register", { layout: false }); 
});

app.get('/login',(req,res)=>{
    res.render("login", { layout: false }); 
});

app.get('/signup',(req,res)=>{
    res.render("signup", { layout: false }); 
});

app.get('/home',(req,res)=>{
 
    res.render("home", { layout: false }); 
});

app.get("/doctor",(req,res)=>{
    res.render("doctor", { layout: false }); 
});

app.get('/hospital',(req,res)=>{
    res.render("hospital", { layout: false }); 
});

app.get("/bloodDonation",(req,res)=>{
    res.render("bloodDonation", { layout: false }); 
});

app.get("/vaccine",(req,res)=>{
    res.render("vaccine", { layout: false }); 
});

app.get("/camp",(req,res)=>{
    res.render("camp", { layout: false }); 
});

app.listen(port,()=>{
    console.log('app is runnng')
});  //http://localhost:8000/