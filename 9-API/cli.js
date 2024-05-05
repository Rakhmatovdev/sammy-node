const logger=()=>{
    const res={}
    for(let i =2;i<process.argv.length;i++){
        const argv=process.argv[i].split('=')
        res[argv[0]]=argv[1]?argv[1]:true
    }
    return res
}
console.log(logger());