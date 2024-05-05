import { Router } from "express";

const router=Router()

router.get("/login", (req, res) => {
    res.render('login',{
      title:"Login | Jinc",
      isLogin:true
    })
  });
  router.get("/register", (req, res) => {
    res.render('register',{
      title:"Register | Jinc",
      isRegister:true
    })
  });

export default router