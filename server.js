// Simple NodeJs Server

// const http= require('http'); //import Node.js HTTP module
// const server= http.createServer((req,res)=>//creates an HTTP server instance 
//     {
//     res.writeHead(200,{'Content-Type':'text/plain'});//req:requests objects(incoming data from client )
//     res.end('Hello World! from Node.js!')//res response object(data to send back to client ) 
// });
// const PORT =3000;
// server.listen(PORT,()=>{// start server on specified port 
//     console.log(`Server running on http://localhost:${PORT}`);
// })

// Simple Express server
const express= require('express');

const app = express();
app.set("view engine","ejs")
app.use(express.static("public"))
const PORT = 3000;



app.get('/',(req,res)=>{
res.render('homepage')
});
app.get('/login',(req,res)=>{
res.render('login')
});





app.listen(PORT,()=> {
    console.log(`Server is running on http://localhost:${PORT}`);
})