import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true
    },

    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },
    contact: {
        type: String,
        required: true,  // Make this true if you want to ensure that a contact number is provided
        unique: true,    // Make this true if you want to ensure contact numbers are unique
        match: [/^\d{10}$/, "Please enter a valid contact number with 10 digits"], // Simple regex for 10-digit numbers
    },
    avatar: {
        type: String,
        default: "https://www.shutterstock.com/image-vector/user-profile-icon-vector-avatar-600nw-2220431045.jpg"
    },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;

