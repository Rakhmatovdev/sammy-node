import { Router } from "express";

const router=Router()


router.get("/", (req, res) => {
    res.render('index')
  });
  router.get("/about", (req, res) => {
    res.render('about')
  });
  
  router.get("/add", (req, res) => {
    res.render('add')
  });
  router.get("/products", (req, res) => {
    res.render('products')
  });

  export default router