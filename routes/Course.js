// Import the required modules
const express = require("express")
const router = express.Router()

// Import the Controllers

// Course Controllers Import
const {
  createCourse,
  getAllCourses,
  getCourseDetails,
  getFullCourseDetails,
  editCourse,
  getInstructorCourses,
  deleteCourse,
} = require("../controllers/Course")

const {
  updateCourseProgress
} = require("../controllers/CoursePoints");

// Importing Middlewares
// const { auth, isInstructor, isStudent, isAdmin } = require("../middlewares/auth")

// ********************************************************************************************************
//                                      Course routes
// ********************************************************************************************************

// Courses can Only be Created by Instructors
router.post("/createCourse", createCourse)
//Add a Section to a Course
// router.post("/addSection", createSection)
// Update a Section
// router.post("/updateSection", updateSection)
// Delete a Section
// router.post("/deleteSection",  deleteSection)
// Edit Sub Section
// router.post("/updateSubSection", updateSubSection)
// Delete Sub Section
// router.post("/deleteSubSection", deleteSubSection)
// Add a Sub Section to a Section
// router.post("/addSubSection",createSubSection)
// Get all Registered Courses
router.get("/getAllCourses", getAllCourses)
// Get Details for a Specific Courses
router.post("/getCourseDetails", getCourseDetails)
// Get Details for a Specific Courses
router.post("/getFullCourseDetails", getFullCourseDetails)
// Edit Course routes
router.post("/editCourse", editCourse)
// Get all Courses Under a Specific Instructor
router.get("/getInstructorCourses", getInstructorCourses)
// Delete a Course
router.delete("/deleteCourse", deleteCourse)

router.post("/updateCourseProgress", updateCourseProgress);

// ********************************************************************************************************
//                                      Category routes (Only by Admin)
// ********************************************************************************************************
// Category can Only be Created by Admin
// TODO: Put IsAdmin Middleware here
// router.post("/createCategory", createCategory)
// router.get("/showAllCategories", showAllCategories)
// router.post("/getCategoryPageDetails", categoryPageDetails)


module.exports = router