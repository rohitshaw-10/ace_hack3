const express = require("express")
const router = express.Router()
const {
  getEnrolledCourses,
  instructorDashboard,
} = require("../controllers/Profile")

// ********************************************************************************************************
//                                      Profile routes
// ********************************************************************************************************

// Get Enrolled Courses
router.get("/getEnrolledCourses", getEnrolledCourses)
router.get("/instructorDashboard", instructorDashboard)

module.exports = router