const mongoose  =require("mongoose")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const crypto  = require("crypto")
const validator = require("validator")



const alluserSchema = new mongoose.Schema({
    name:{
        type:String,
        maxLength:[30,"name cannot exceed 30 character"],
        minLength:[5, "name cannot less than 5 character"],
    },
    email:{
        type:String,
        // required:[true,"please enter your email address"],
        unique:true,
        validate:[validator.isEmail,"please enter your valid email address"],


    },
    otp_email:{
        type:Number,
        maxLength:[6, "please enter your otp"]
    },
    otp_mobile:{
        type:String,
        maxLength:[6, "please enter your otp"]    ,
        select:false
    },
//    otp_expiry:{

//    },
    phone:{
        type:String,
        unique:true,
        maxLength:[10,"number can not be greater than 10"],
        minLength:[10, "number can not be less than 10"]
    },
   
    password:{
        type:String,
        // required:[true,"please enter your password"],
        minLength:[8, "password should be more than 8 character"],

    },
    avatar:{
        public_id:{
            type:String,
            // required:true
        },
        url:{
            type:String,
            // required:true
        }
    },

    role:{
        type:String,
        default:"user"
    },

   
    resetPasswordToken:String,
    resePasswordExpire:Date
    
   
})

alluserSchema.set('timestamps',true)

//  hash password
alluserSchema.pre('save',async function(next){
    if(!this.isModified('password')){
        next()
    }

    this.password =await bcrypt.hash(this.password, 10)
})

//  jsonwebtoken JWT for user
alluserSchema.methods.getJWTTOKEN = function (){
    return jwt.sign({id:this._id},process.env.JWT_SECRET,{
        expiresIn:process.env.JWT_EXPIRE,
    })
};

// for admin
alluserSchema.methods.getJWTTOKENADMIN = function (){
    return jwt.sign({id:this._id},process.env.JWT_SECRET_ADMIN,{
        expiresIn:process.env.JWT_EXPIRE_ADMIN,
    })
};


// for supplier
alluserSchema.methods.getJWTTOKENSUPPLIER = function (){
    return jwt.sign({id:this._id},process.env.JWT_SECRET_SUPPLIER,{
        expiresIn:process.env.JWT_EXPIRE_SUPPLIER,
    })
};



// compare password

alluserSchema.methods.comparePassword = async function(enteredPassword){  
    return await bcrypt.compareSync(enteredPassword,this.password)
       
    }




// hash otp
    alluserSchema.pre('save',async function(next){
        if(!this.isModified('otp_mobile')){
            next()
        }
    
        this.otp_mobile =await bcrypt.hash(this.otp_mobile, 10)
    })

    // verify otp
    alluserSchema.methods.verifyOtp = async function(enteredOtp){  
        return await bcrypt.compareSync(enteredOtp,this.otp_mobile)
           
        }


   



module.exports =mongoose.model("AllUser",alluserSchema)