import express from "express";
import { create } from "express-handlebars";
import mongoose from "mongoose";
import * as dotenv from 'dotenv'
import flash from "connect-flash";

//routes
import AuthRoutes from "./routes/auth.js"
import ProductRoutes from "./routes/products.js"
import session from "express-session";
import varMiddlevare from "./middleware/var.js";
import cookieParser from "cookie-parser";
import userMiddleware from "./middleware/user.js";
import hbsHelper from "./utils/index.js"
dotenv.config()

const app = express();

const hbs=create({
  defaultLayout:'main',
  extname:'hbs',
  helpers:hbsHelper
})

app.engine('hbs',hbs.engine)
app.set('view engine','hbs')
app.set('views','./views')

app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cookieParser())
app.use(session({secret:"Jasur",resave:false,saveUninitialized:false}))
app.use(flash())

app.use(varMiddlevare)
app.use(userMiddleware)

app.use(AuthRoutes)
app.use(ProductRoutes)
mongoose.set('strictQuery',false)



const PORT = process.env.PORT || 7777;
mongoose.connect(process.env.MONGODB_URL)
.then(() => {
  console.log('Connected to database');
})
.catch(error => {
  console.error('Error connecting to database:', error);
});

app.listen(PORT, () => console.log(`Example app listening on PORT: ${PORT}!`));
