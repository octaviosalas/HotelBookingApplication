import mongoose from "mongoose";


const favouriteHotelsSchema = mongoose.Schema( { 
   id: { 
        type: Number
    },
    userId: { 
        type: String
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
    email: { 
        type: String
    }


})

const Favourites = mongoose.model("Favourites", favouriteHotelsSchema)

export default Favourites;

