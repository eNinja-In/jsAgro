import userModel from "../models/userModel.js";
import { hashPassword, comparePassword } from "../helpers/authHelper.js";
import JWT from 'jsonwebtoken'


// login controller with json token JWT
export const loginController = async (req, res) => {
    try {
        const {email, password} = req.body;
        if(!email || !password) {
            return res.status(404).send({
                success:false,
                message:'invalid crediential'
            })
        }

        const user = await userModel.findOne({email});
        if(!user) {
            return res.status(404).send({
                success:false,
                message:'Email Not found'
            })
        }
        const match = await comparePassword(password, user.password)
        if(!match) {
            return res.status(200).send({
                success:false,
                message:'password incorrect'
            })
        }

        const token = await JWT.sign({_id:user._id}, process.env.JSON_SECRET_KEY, {expiresIn : '1h'})
        res.status(200).send({
            success:true,
            message:'login successfully',
            user:{
                name:user.name,
                email:user.email
            },
            token
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Error In Login',
            error
        })
    }
}

// new user controller registration
export const registerController = async (req, res) => {
    // res.send(req.body)
    try {
        const {name, email, password, phone, position} = req.body;

        // Check if any required fields are missing
        if (!name || !email || !password || !phone) {
            return res.status(400).send({ error: 'All Crediential are required' });
        }

        // Check if the user already exists
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(200).send({
                success: false,
                message: 'User already registered'
            });
        }

        // Hash the password
        const hashedPassword = await hashPassword(password);

        // Create and save the new user
        const newUser = await new userModel({
            name,
            email,
            password: hashedPassword,
            phone,
            position
        }).save();

        // Send success response
        res.status(201).send({
            success: true,
            message: 'New user registered successfully',
            user: newUser
        });

    } catch (error) {
        // Handle error
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Failed to register new user',
            error: error.message
        });
    }
}
