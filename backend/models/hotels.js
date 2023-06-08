import mongoose from "mongoose";


const hotelsSchema = mongoose.Schema( { 
    id: { 
        type: Number
    },
    name: { 
        type: String
    },
    country: { 
        type: String
    }, 
    city: { 
        type: String
    }, 
    bedrooms: { 
        type: Number
    }, 
    adress: { 
        type: String
    }, 
    servicies: { 
        type: [String]
    }, 
    averagePrice: { 
        type: String
    },
    img: { 
        type: [String]
    },
    telephone: { 
        type: Number
    },
    stars: { 
        type: Number
    },
    puntuaction: { 
        type: String
    }
   


})

const Hotels = mongoose.model("Hotels", hotelsSchema)

export default Hotels;
