const express = require("express")
const { createProxyMiddleware } = require("http-proxy-middleware")

const app = express()

app.get("/", (req, res) => {
res.send(`
<html>

<head>

<title>DevOps Microservices Dashboard</title>

<style>

body{
font-family: Arial;
margin:0;
background:linear-gradient(135deg,#0f2027,#203a43,#2c5364);
color:white;
text-align:center;
}

header{
padding:20px;
font-size:28px;
font-weight:bold;
}

.container{
display:flex;
justify-content:center;
gap:40px;
margin-top:60px;
}

.card{
width:220px;
padding:30px;
background:rgba(255,255,255,0.1);
border-radius:15px;
transition:0.3s;
cursor:pointer;
}

.card:hover{
transform:scale(1.1);
box-shadow:0 15px 30px rgba(0,0,0,0.4);
}

a{
text-decoration:none;
color:white;
}

.architecture{
margin-top:80px;
}

.diagram{
display:flex;
justify-content:center;
align-items:center;
gap:30px;
margin-top:20px;
}

.box{
padding:15px 25px;
background:#3498db;
border-radius:10px;
}

.arrow{
font-size:24px;
}

.footer{
margin-top:80px;
padding:20px;
font-size:14px;
opacity:0.8;
}

</style>

</head>

<body>

<header>
DevOps Microservices Dashboard
</header>

<div class="container">

<a href="/users">
<div class="card">
<h2>User Service</h2>
<p>Manage users microservice</p>
</div>
</a>

<a href="/products">
<div class="card">
<h2>Product Service</h2>
<p>Manage products microservice</p>
</div>
</a>

</div>

<div class="architecture">

<h2>Microservices Architecture</h2>

<div class="diagram">

<div class="box">Client</div>

<div class="arrow">➡</div>

<div class="box">Gateway</div>

<div class="arrow">➡</div>

<div class="box">User Service</div>

<div class="arrow">➡</div>

<div class="box">Product Service</div>

</div>

</div>

<div class="footer">

Running with Containers • CI/CD Ready • DevOps Architecture

</div>

</body>

</html>
`)
})

app.use("/users",
createProxyMiddleware({
target:"http://user-service:3000",
changeOrigin:true,
pathRewrite:{
"^/users":""
}
})
)

app.use("/products",
createProxyMiddleware({
target:"http://product-service:3000",
changeOrigin:true,
pathRewrite:{
"^/products":""
}
})
)

app.listen(3000,()=>{
console.log("Gateway running on port 3000")
})