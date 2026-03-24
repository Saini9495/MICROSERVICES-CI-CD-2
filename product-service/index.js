const express = require("express")
const app = express()

app.get("/", (req,res)=>{

res.send(`
<html>

<style>

body{
background:linear-gradient(120deg,#11998e,#38ef7d);
font-family:Arial;
color:white;
text-align:center;
padding-top:100px;
}

.box{
background:rgba(0,0,0,0.3);
padding:40px;
width:400px;
margin:auto;
border-radius:15px;
}

</style>

<body>

<div class="box">
<h1>Product Service</h1>
<p>Microservice Running Successfully</p>
</div>

</body>

</html>
`)
})

app.listen(3000,()=>{
console.log("Product service running")
})