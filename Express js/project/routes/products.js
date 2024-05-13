import { Router } from "express";
import Product from "../models/product.js";
import authMiddleware from "../middleware/auth.js";
import userMiddleware from "../middleware/user.js";

const router=Router()


router.get("/",async (req, res) => {
  const products= await Product.find().lean()
    res.render('index',{
      title:"Boom | shop",
      products:products.reverse(),
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
  router.get("/products", (req, res) => {
    res.render('products',{
      title:"Products | shop",
      isPrt:true,
   
    })
  });


router.post('/add-product',userMiddleware,async (req,res)=>{
  const {title,description,image,price}=req.body
  if(!title || !description || !image || !price){
    req.flash('productError','All product is  required')
    res.redirect("/add")
    return
  }
const products= await Product.create({...req.body,user:req.userId})
  res.redirect("/")
})

  export default router