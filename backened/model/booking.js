const mongoose=require("mongoose")
const bookingSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
     address:{
        type:String,
        required:true
     }

})
module.exports=mongoose.model("Booking",bookingSchema)