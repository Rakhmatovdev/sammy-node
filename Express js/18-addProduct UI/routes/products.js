import { Router } from "express";

const router=Router()


router.get("/", (req, res) => {
  
    res.render('index',{
      title:"Boom | shop",
      isBoom:true,
    })
  });
  router.get("/about", (req, res) => {
    res.render('about',{
      title:"About | shop",
      isAbt:true
    })
  });
  
  router.get("/add", (req, res) => {
    res.render('add',{
      title:"Added | shop",
      isAdd:true
    })
  });
  router.get("/products", (req, res) => {
    res.render('products',{
      title:"Products | shop",
      isPrt:true
    })
  });


router.post('/add-product',(req,res)=>{
console.log(req.body);
res.redirect("/")
})

  export default router