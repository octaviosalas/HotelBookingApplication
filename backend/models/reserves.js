import mongoose from "mongoose";


const reservesSchema = mongoose.Schema( { 
    hotelId: { 
        type: Number
    },
    userId: { 
       type: String
    },
    name: { 
        type: String
    },
    checkIn: { 
        type: String
    },
    checkOut: { 
        type: String
    },
    amountPeople: { 
        type: Number
    },
    totalPrice: { 
        type: String
    }
    
   


})

const Reserves = mongoose.model("Reserves", reservesSchema)

export default Reserves;

