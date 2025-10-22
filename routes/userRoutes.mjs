import { Router } from "express";
import dotenv from "dotenv";
import Users from "../models/userSchema.mjs"
import { check } from "express-validator";

const router = Router();
dotenv.config();

// @route: GET /api/register/parent
// @desc: Test Route
// @access: Public
router
.route("/").get((req, res) => {
    // res.send("User Test");
});

router
.route("/")
.post(
    [
        check("username", "Please include a valid username").isLength({ min: 4 }),
        check("password", "Password must be at least 6 characters long").isLength(
        { min: 6 })
    ,
    check("email", "Please include a valid email").isEmail(),
    ],
    async (req, res) => {
    // res.send("User Test");
    //validate the data recieved(see if user and password and password)
    //check if account exist
    //validate password - frontend
    //save user
    //send response

});

export default router;
