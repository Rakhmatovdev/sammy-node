import { Router } from "express";
import Product from "../models/product.js";
import authMiddleware from "../middleware/auth.js";
import userMiddleware from "../middleware/user.js";

const router=Router()


router.get("/",async (req, res) => {
  const products= await Product.find().lean()
    res.render('index',{
      title:"Boom | shop",
      products: products.reverse(),
      userId:req.userId? req.userId.toString():null
    })
  });
  router.get("/about", (req, res) => {
    res.render('about',{
      title:"About | shop",
      isAbt:true
    })
  });
  
  router.get("/add",authMiddleware, (req, res) => {
    res.render('add',{
      title:"Added | shop",
      isAdd:true,
      productError:req.flash("productError"),
    })
  });
  router.get("/products",async (req, res) => {
  const user=req.userId? req.userId.toString():null
  const myProducts= await Product.find({user}).populate('user').lean()

    res.render('products',{
      title:"Products | shop",
      isPrt:true,
      myProducts: myProducts
   
    })
  });


router.get("/product/:id",async (req,res)=>{
  const id=req.params.id
  const product= await Product.findById(id).populate('user').lean()

  res.render('product',{
    product
  })
})

router.get("/edit-product/:id",async(req,res)=>{
  const id=req.params.id
  const product= await Product.findById(id).populate('user').lean()
  res.render('edit-product',{
    product,
    ErrorEditProduct:req.flash("ErrorEditProduct")
  })

})


router.post('/add-product',userMiddleware,async (req,res)=>{
  const {title,description,image,price}=req.body
  if(!title || !description || !image || !price){
    req.flash('productError','All product is  required')
    res.redirect("/add")
    return
  }




 await Product.create({...req.body,user:req.userId})
  res.redirect("/")
})

router.post("/edit-product/:id",async(req,res)=>{

  const {title,description,image,price}=req.body
  const id=req.params.id

  console.log(id);
  if(!title || !description || !image || !price){
    req.flash('ErrorEditProduct','All product is  required')
    res.redirect(`/edit-product/${id}`)
    return
  }
 await Product.findByIdAndUpdate(id,req.body,{new:true})
res.redirect("/products")
})



  export default router