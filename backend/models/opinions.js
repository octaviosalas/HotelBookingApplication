import mongoose from "mongoose";

const opinionsSchema = mongoose.Schema( { 
    hotelId: { 
        type: Number
    },
    userId: { 
       type: String
    },
    userName: { 
      type: String
    },
    puntuaction: { 
        type: Number
    },
    opinion: { 
        type: String
    }


})

const Opinions = mongoose.model("Opinions", opinionsSchema)

export default Opinions;

