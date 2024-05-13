export default{
    ifequal(a,b,options){
        if(a==b){
            return options.fn(this)
        }

        return options.inverse(this)
    },
    getFullName(name){
        if(name.split(" ").length>=2){
            const names= name.split(" ")[0][0] ;
         const lnames= name.split(" ")[1][0] ;
         return names+lnames
         } else{
           const name2= name[0]
           return name2
         }
    }
}