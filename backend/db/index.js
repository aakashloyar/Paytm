const mongoose=require('mongoose')
const userSchema =new mongoose.Schema({
    username: {
        type:String,
        required:true,
        unique:true,
        trim:true,
        minLength:4,
        maxLength:30
    },
    password:{
        type:String,
        required:true,
        minLength:6,
    },
    firstName:{
        type:String,
        required:true,
        maxLength:20
    },
    lastName:{
        type:String,
        required:true,
        maxLength:20
    }
})

const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, // Reference to User model
        ref: 'User',
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
});

const Account = mongoose.model('Account', accountSchema);
User=mongoose.model('User',userSchema);
module.exports={
    User,
    Account
}