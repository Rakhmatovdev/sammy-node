import { Router } from "express";
import User from "../models/users.js";
import bcrypt from "bcrypt";
import { generateJWTToken } from "../services/token.service.js";
const router = Router();

router.get("/login", (req, res) => {
  res.render("login", {
    title: "Login | Jinc",
    isLogin: true,
    loginError: req.flash("loginError"),
  });
});
router.get("/register", (req, res) => {
  res.render("register", {
    title: "Register | Jinc",
    isRegister: true,
    registerError:req.flash("registerError"),
  });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    req.flash("loginError", "All fields  is required");
    res.redirect("/login");
    return;
  }

  const existUser = await User.findOne({ email });
  if (!existUser) {
    req.flash("loginError", "User not found");
    res.redirect("/login");
    return;
  }

  const isPassEqual = await bcrypt.compare(password, existUser.password);
  if (!isPassEqual) {
    req.flash("loginError", "Password wrong");
    res.redirect("/login");
    return;
  }

  const token=generateJWTToken(existUser._id)
  res.cookie('token',token,{httpOnly:true,secure:true})
  res.redirect("/");
});

router.post("/register", async (req, res) => {

  const {fullName,email,phone,pass1,pass2}=req.body

  if(!fullName || !email || !phone || !pass1){
    req.flash("registerError", "All field is required");
    res.redirect("/register");
    return
  }

 const condidate=await User.findOne({email})
 if(condidate){
  req.flash("registerError", "User already exist");
  res.redirect("/register");
  return
 }
 if(pass1!==pass2){
  req.flash("registerError", "Password is not equal");
  res.redirect("/register");
  return
 }

  const hashPassword = await bcrypt.hash(pass1, 10);
  const userData = {
    fullName,
    email,
    phone,
    password: hashPassword,
  };
  const user=await User.create(userData);
  const token=generateJWTToken(user._id)
  res.cookie('token',token,{httpOnly:true,secure:true})
  res.redirect("/");
});

export default router;
