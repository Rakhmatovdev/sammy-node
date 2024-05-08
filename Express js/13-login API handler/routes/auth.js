import { Router } from "express";
import User from '../models/users.js';
import bcrypt from 'bcrypt'
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

  router.post('/login', async (req, res) => {
    const existUser=await User.findOne({email: req.body.email})
    if(!existUser) {console.log("User not found")
       return }

    const isPassEqual=await bcrypt.compare(req.body.password,existUser.password)  
    if(!isPassEqual){console.log('Password wrong');
      return 
    }
    console.log(req.body)
console.log(existUser);
    res.redirect('/')
  })
  
  router.post('/register',async (req, res) => {
    const hashPassword=await bcrypt.hash(req.body.pass1,10)
    const userData={
      fullName:req.body.fullName,
      email:req.body.email,
      phone:req.body.phone,
      password:hashPassword
    }
   await User.create(userData)
    res.redirect('/')
  })

export default router