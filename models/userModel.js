const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email:{
        type: String,
        require: true,
        unique: true
    },
    password:{
        type: String,
        require: true
    },
    username:{
        type: String,
        require: true
    }
})


// Static SignUp method

userSchema.statics.signup = async function(email, password, username){
    const exist = await this.findOne({email});

    // Validation
    if(!email || !password || !username){
        throw Error("All fields must be filled")
    }
    if(!validator.isEmail(email)){
        throw Error("Email entered is not valid")
    }
    if(!validator.isStrongPassword(password)){
        throw Error("Password not strong enough")
    }


    if(exist){
        throw Error("Email already in use")
    }
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({email, password: hash})

    return user;
}

// Static Login Method

userSchema.statics.login = async function(email, password){
    if(!email || !password){
        throw Error("All fields must be filled")
    }

    const user = await this.findOne({email})

    if(!user){
        throw Error("Incorrect email")
    }

    const match = await bcrypt.compare(password, user.password)
    if(!match){
        throw Error("Incorrect password")
    }
    return user;
}

module.exports = mongoose.model('User', userSchema);