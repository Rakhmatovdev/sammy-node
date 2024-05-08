import { model, Schema } from "mongoose";


const userSchema=new Schema({
    fullName:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    phone:{type:String,required:true},
    password:{type:String,required:true},
    check:String,
},{timestamps:true})

const User=model('User',userSchema)
export default User