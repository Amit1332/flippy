const catchAsyncError = require("../../middleware/catchAsyncError");
const permanentDeleteSupplier = require("../../models/adminModel/permanentDeleteSupplierSchema");
const AllUser = require("../../models/alluser");
const Supplier = require("../../models/supplierModel/supplierSchema");
const ErrorHander = require("../../utils/errorhander");
const sendToken = require("../../utils/jwtToken");
const sendSupplierToken = require("../../utils/supplierJwtToken");




// Supplier registration-------------------------------
exports.signupSupplier = catchAsyncError(async (req, res, next) => {
  const {email,otp_mobile,otp_email, phone, password } = req.body;
const deletedSupplier  =await permanentDeleteSupplier.find()
const supplierEmail = deletedSupplier.find(element => element.supplier.email===email)
const supplierPhone = deletedSupplier.find(element => element.supplier.phone===phone)

if(supplierEmail){

  return next(new ErrorHander("Your Supplier Account is Permanent Deleted ! Email Id ", 400))
}
else if(supplierPhone){
  return next(new ErrorHander("Your supplier Account is Permanent Deleted ! Phone No.", 400))

}
else{
   const supplier = await AllUser.create({
      email, 
      phone,
      password,
      otp_mobile,
      otp_email,
      role:"supplier",
      avatar: {
        public_id: "kakalegayetamatar",  
        url: "chachalegayekela",
      },
    });

  
    sendSupplierToken(supplier, 200, res); 
}
     
   


});

// Supplier login -------------------------------
exports.supplierLogin = catchAsyncError(async (req, res, next) => {
    const { email, phone, password } = req.body;
  
    if (!password) {
      return next(new ErrorHander("please enter email or phone and passwrod", 400));
    } else if (email || phone) {
      const supplier = await AllUser.findOne({ $or: [{ email }, { phone }] }).select(
        "+password"
      );
      if(!supplier){
        return next(new ErrorHander("Invalid Supplier Credential",401))
      }
  
      if (supplier.role === "supplier") {
        if (!supplier) {
          return next(new ErrorHander("Invalid email or password", 401));
        }
  
        const isPasswordMatched = await supplier.comparePassword(password);
  
        if (!isPasswordMatched) {
          return next(new ErrorHander("password does not match"));
        }
  
        sendSupplierToken(supplier, 201, res);
      } else {
        return next(new ErrorHander("supplier does not exist"));
      }
    } else {
      return next(new ErrorHander("please enter all field", 401));
    }
  });


  //  supplier profile --------------------------

  exports.getSupplierDetails =catchAsyncError (async (req,res,next)=>{
    const supplier = await AllUser.findById(req.supplier.id)

      res.status(200).json({
        success:true,
        supplier
    })
  

   
})


// logout Supplier

exports.SupplierLogout = catchAsyncError(async (req, res, next) => {
  res.cookie("flippyseven_supplier_token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "logged out succesfully",
  });
});


// update Supplier password

exports.updateSupplierPassword = catchAsyncError(async (req,res,next)=>{
  const supplier = await AllUser.findById(req.supplier.id).select("+password")
  const isPasswordMatched = await supplier.comparePassword(req.body.oldPassword)
  if(!isPasswordMatched){
return next(new ErrorHander("Old Password isnot correct",400))
  }
if(req.body.newPassword !== req.body.confirmPassword){
  return next(new ErrorHander("password does not match",400))
}
supplier.password = req.body.newPassword
await supplier.save()
sendSupplierToken(supplier,200,res)

})



// update Supplier profile
exports.updateSupplierProfile =catchAsyncError( async(req,res,next)=>{
  const newSupplierData = {
      name : req.body.name,
      email : req.body.email,
      phone : req.body.phone
  }
  
  const supplier = await AllUser.findByIdAndUpdate(req.supplier.id,newSupplierData, {new:true,runValidators:true})
  
  res.status(200).json({
      success:true,
      supplier
  })
})






// register complete Supplier details   no use now
exports.registerAllSupplierdetails = catchAsyncError(async (req, res, next) => {
  const supplieralldetails = await Supplier.findOne({supplierProfile:req.supplier.id})

if(supplieralldetails){
   return next (new ErrorHander("you have filled your details only you can update"))

}
else{
  const supplier = await Supplier.create({
    supplierProfile:req.supplier.id,
    gst:req.body.gst, 
    pickup_address:{
      house_no:req.body.house_no, 
      landmark:req.body.landmark,
      postal_code:req.body.postal_code,
      city:req.body.city,
      state:req.body.state,
    },
    bank_details:{
      account_number:req.body.account_number,
      ifsc_code:req.body.ifsc_code
    },
    supplier_details:{
      store_name:req.body.store_name,
      your_name:req.body.your_name
    }

   
 
  });
  res.status(200).json({
    success:true,
    msg:"supplier details submitted",  
    supplier  
  })
}



});







// update complete supplier details
exports.updateAllSupplierdetails = catchAsyncError(async (req, res, next) => {
  const updatesupplierdata= {
    supplierProfile:req.supplier.id,
    gst:req.body.gst,
    pan:req.body.pan, 
    pickup_address:{
      house_no:req.body.house_no, 
      street:req.body.street,
      landmark:req.body.landmark,
      postal_code:req.body.postal_code,
      city:req.body.city,
      state:req.body.state,
    },
    bank_details:{
      account_number:req.body.account_number,
      ifsc_code:req.body.ifsc_code
    },
    supplier_details:{
      store_name:req.body.store_name,
      your_name:req.body.your_name
    }
  }

  const  supplierDetails  = await Supplier.findOne({supplierProfile:req.supplier.id})
 if(supplierDetails){
  const updatedSupplierDetails = await Supplier.findOneAndUpdate({supplierProfile:req.supplier.id},updatesupplierdata, {new:true,runValidators:true})
  res.status(200).json({
    success:true,
    msg:"supplier details submitted",  
    supplierDetails ,
    updatedSupplierDetails
  })
 }
 else{
const addSupplierDetails = await Supplier.create(updatesupplierdata)
res.status(200).json({
  success:true,
  msg:"supplier details submitted",  
  addSupplierDetails
})
 }
  


});





// update  Supplier bank details
exports.updateSupplierBankdetails = catchAsyncError(async (req, res, next) => {
  const updatesupplierdata= {
    bank_details:{
      account_number:req.body.account_number,
      ifsc_code:req.body.ifsc_code
    },
   
  }

  const  supplierDetails  = await Supplier.findOne({supplierProfile:req.supplier.id})
  const updatedSupplierDetails = await Supplier.findOneAndUpdate({supplierProfile:req.supplier.id},updatesupplierdata, {new:true,runValidators:true})
  res.status(200).json({
    success:true,
    msg:"supplier details submitted",  
    supplierDetails ,
    updatedSupplierDetails
  })


});





// update  Supplier Address details
exports.updateSupplierAddressdetails = catchAsyncError(async (req, res, next) => {
  const updatesupplierdata= {
    pickup_address:{
      house_no:req.body.house_no, 
      street:req.body.street,
      landmark:req.body.landmark,
      postal_code:req.body.postal_code,
      city:req.body.city,
      state:req.body.state,
    },
   
  }

  const  supplierDetails  = await Supplier.findOne({supplierProfile:req.supplier.id})
  const updatedSupplierDetails = await Supplier.findOneAndUpdate({supplierProfile:req.supplier.id},updatesupplierdata, {new:true,runValidators:true})
  res.status(200).json({
    success:true,
    msg:"supplier details submitted",  
    supplierDetails ,
    updatedSupplierDetails
  })


});






// update  Supplier supplier shop details
exports.updateSupplierShopdetails = catchAsyncError(async (req, res, next) => {
  const updatesupplierdata= {
    supplier_details:{
      store_name:req.body.store_name,
      your_name:req.body.your_name
    }
   
  }

  const  supplierDetails  = await Supplier.findOne({supplierProfile:req.supplier.id})
  const updatedSupplierDetails = await Supplier.findOneAndUpdate({supplierProfile:req.supplier.id},updatesupplierdata, {new:true,runValidators:true})
  res.status(200).json({
    success:true,
    msg:"supplier details submitted",  
    supplierDetails ,
    updatedSupplierDetails
  })

});





// get all complete Supplier details
exports.AlldetailsOfSupplier = catchAsyncError(async (req, res, next) => {
const supplieralldetails = await Supplier.findOne({supplierProfile:req.supplier.id}).populate("supplierProfile")

if(!supplieralldetails){
  return next(new ErrorHander("Incomplete details"))
}
res.status(200).json({
  success:true, 
  supplieralldetails
}) 
 
}) ;
 
 





