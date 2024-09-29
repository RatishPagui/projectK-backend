const mongoose =  require('mongoose')

const bookingSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    name:{
        type:String,
    },
    phone:{
        type: String,
        required: true,
        trim: true,
        minlength: 10,
        maxlength: 15
    },
    message:{
        type:String
    },
    date:{
        type:Date,
    },
    time:{
        type:String
    }
})

const Bookings = mongoose.model('bookings',bookingSchema);
module.exports = Bookings;
