const http = require('http');

const PORT=3000

const server =http.createServer((request,response)=>{
console.log(request.url);
if(request.url =="jasur"){
    response.write("{name:'jasur'}")
    response.end()
}
response.write("<h1>Hello world</h1>")
response.end()
})
server.listen(PORT,()=>{
    console.log(`Server has been started port: ${PORT} ...`)
})