const fs = require('node:fs');
const path = require('path');  

// fs.mkdir(path.join(__dirname,"template"),err=>{
//     if(err) throw new Error()
//         console.log('Folder and file created successfuled');
// })

fs.writeFile(path.join(__dirname,"template",".env"),"NODE_JS='Hello node js'",err=>{
    if(err) throw new Error()
    console.log('File created successfully');
})

fs.appendFile(path.join(__dirname,"template",".env")," and MONGODB_URL='mongooose seter'",err=>{
   console.log(err);
    if(err) throw new Error()
        console.log('File update succeesfully');

    fs.readFile(path.join(__dirname,'template','.env'),'utf-8',(err,data)=>{
        if(err) throw new Error()
        console.log(data);
    })
})

// fs.readFile(path.join(__dirname,'template','.env'),(err,data)=>{
//     if(err) throw new Error()
//     console.log(data.toString());
// })
// fs.readFile(path.join(__dirname,'template','.env'),'utf-8',(err,data)=>{
//     if(err) throw new Error()
//     console.log(data);
// })    //kutmyapti shuning uchun update bugandan keyin yaratvommiza