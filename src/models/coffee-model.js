const { Schema } = require("mongoose");
const mongoose = require('../db/connections')

const CoffeeSchema = new Schema({

    name: {
        type: String,
        required : true
        
    },
    flavor : {
        type: String,
        required : true
    },
    price : {
        prices : [{ type: Number}],
        required : true
    },
    weight : {
        sizeOptions : [{ type: Number}],
        required : true
    },
    // img : { 
    //     data: Buffer, 
    //     contentType: String,
       
        
    //  },
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
},
{timestamps : true}
)

const Coffee = mongoose.model('Coffee', CoffeeSchema)
module.exports = Coffee;