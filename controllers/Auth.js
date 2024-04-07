// const bcrypt = require("bcryptjs")
const User = require("../models/User")
// const OTP = require("../models/OTP")
// const jwt = require("jsonwebtoken")
// const otpGenerator = require("otp-generator")
// const mailSender = require("../utils/mailSender")
// const { passwordUpdated } = require("../mail/templates/passwordUpdate")
// const Profile = require("../models/Profile")
require("dotenv").config()

// Signup Controller for Registering USers

exports.signup = async (req, res) => {
  try {
    // Destructure fields from the request body
    const {
      firstName,
      lastName,
      email,
      accountType,
    } = req.body
    // Check if All Details are there or not
    if (
      !firstName ||
      !lastName ||
      !email
    ) {
      return res.status(403).send({
        success: false,
        message: "All Fields are required",
      })
    }

    const user = await User.create({
      firstName,
      lastName,
      email,
      accountType: accountType,
      image: `https://api.dicebear.com/5.x/initials/svg?seed=${firstName}${lastName}`,
    })

    return res.status(200).json({
      success: true,
      user,
      message: "User registered successfully",
    })
  } catch (error) {
    console.error(error)
    return res.status(500).json({
      success: false,
      message: "User cannot be registered. Please try again.",
      error:error.message,
    })
  }
}

// Login controller for authenticating users
exports.login = async (req, res) => {
  try {
    // Get email and password from request body
    const { email} = req.body

    // Check if email or password is missing
    if (!email) {
      // Return 400 Bad Request status code with error message
      return res.status(400).json({
        success: false,
        message: `Please Fill up All the Required Fields`,
      })
    }

    // Find user with provided email
    // const user = await User.findOne({ email }).populate("additionalDetails")

    // If user not found with provided email
   

    // Generate JWT token and Compare Password
    return res.status(200).json({
        success: true,
        message: `Login success`,
      })
  } catch (error) {
    console.error(error)
    // Return 500 Internal Server Error status code with error message
    return res.status(500).json({
      success: false,
      message: `Login Failure Please Try Again`,
    })
  }
}
