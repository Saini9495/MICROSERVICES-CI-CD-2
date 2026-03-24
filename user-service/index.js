const express = require("express")
const app = express()



app.get("/", (req,res)=>{

res.send(`
<html>

<style>
body{
background:linear-gradient(120deg,#2980b9,#6dd5fa);
font-family:Arial;
color:white;
text-align:center;
padding-top:100px;
}

.card{
background:rgba(0,0,0,0.3);
padding:40px;
width:400px;
margin:auto;
border-radius:15px;
}

</style>

<body>

<div class="card">
<h1>User Service</h1>
<p>Running in Docker Microservice</p>
</div>

</body>

</html>
`)
})

app.listen(3000,()=>{
console.log("User Service running")
})