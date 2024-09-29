const mongoose =  require('mongoose')

const reviewSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    name:{
        type:String,
    },
    review:{
        type:String,
    },
    rating:{
        type:Number,
    }
})

const Reviews = mongoose.model('reviews',reviewSchema);
module.exports = Reviews;
