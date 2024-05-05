const getArgs = require("./args");

const logger=()=>{
const args=getArgs(process.argv);
console.log(args);
if(args.h){
    //help
}
if(args.s){
//save sity
}
if(args.t){
    // save token

}
}
logger()
