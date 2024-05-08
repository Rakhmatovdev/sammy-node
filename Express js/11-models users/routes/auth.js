import { Router } from "express";
import User from '../models/users.js';

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

  router.post('/login', (req, res) => {
    console.log(req.body)
    res.redirect('/')
  })
  
  router.post('/register',async (req, res) => {
    const userData={
      fullName:req.body.fullName,
      email:req.body.email,
      phone:req.body.phone,
      password:req.body.pass1
    }
   await User.create(userData)
    res.redirect('/')
  })

export default router