const mongoose =  require('mongoose')
const TripSchema = new mongoose.Schema(
    {
        partnerId: {type: String},
        tripId: {type: String, required: true},
        tripDuration: {type: String, required: true},
        tripLocation: {type: String, required: true},
        tripCost: {type: String, required: true},
        tripHighlishts: {type: Array, required: true},
        tripOverview: {
            checkIn: String,
            checkOut: String ,
            resortLoc: String,
            about: String,
            roomCategories: {
                title: String,
                desc: String,
            },
            inclusions: String,
            facilities :{
                title: String,
                desc: String,
            },


        },
        tripId: {type: String, required: true},
        

    },
    {timestamps: true}
)
mongoose.models ={}

export default mongoose.model('Trip', TripSchema)