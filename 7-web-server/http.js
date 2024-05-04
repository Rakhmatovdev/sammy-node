const http = require('http');

const PORT=3000

const server =http.createServer((req,res)=>{
if(req.method==="GET"){
    res.writeHead(200,{'Content-Type':'text/html'})
    res.end(`
    <h1>Sent Name</h1>
    <form method="post" action="/">
    <input  name="name" placeholder="Name...">
    <button type="submit">Sent name</button>
</form>
    `)
} else if(req.method==="POST"){
    const Body=[]

    req.on('data',data=>{
   Body.push(data.toString())
    })
    res.writeHead(200,{'Content-Type':'text/html; charset=utf-8 '})
    req.on('end',()=>{
       const message=Body.toString().split("=")[1]
   
    res.end(`Name successfully posted: ${message} `)
})}
})
server.listen(PORT,()=>{
    console.log(`Server has been started port: ${PORT} ...`)
})