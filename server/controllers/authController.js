import jwt from "jsonwebtoken";
import User from "../models/User.js";
import bcrypt from "bcrypt";

const JWT = process.env.JWT_KET || "";

const login = async (req, res) =>{
    try{
        const {email, password} = req.body;
        const user = await User.findOne({email});

        const userId = user._id;
        const userRole = user.role;
        const userName = user.name;

        if(!user){
            res.status(404).json({
                success: false, 
                error: "User not found"
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if(!isMatch){
            res.status(404).json({
                success: false, 
                error: "Incorrect password."
            });
        }

        const token = jwt.sign(
            {
                _id: userId, 
                role: userRole}, 
                JWT, 
                {expiresIn: "10d"}
        )

        res.status(200).json({
            success: true, 
            token, 
            user: {
                _id: userId, 
                name: userName, 
                role: userRole
            }
        });
    }
    catch(err){
        console.error(err.message);
    }
}

export {login};