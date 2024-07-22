import express from 'express';
import bcrypt from 'bcryptjs';
const router = new express.Router();
import jwt from 'jsonwebtoken';
import { User } from '../models/usermodel.js'; // Import named export


router.post('/register', async (req, res) => {
    const { username,email, password } = req.body;
    try {

        if (!email || !password || !username) {
            return res.status(400).json({ message: 'Please enter all fields' });
        }

        // Check if the user already exists
        const existingUser = await User.findOne({ email:email});
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash the password
        // const salt = await bcrypt.genSalt(10);
        // const hashedPassword = await bcrypt.hash(password, salt);
        // const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = new User({
            email,
            password,
            username
        });

        const storeData = await newUser.save();

        res.status(201).json({ message: 'Registration successful',storeData });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

router.post('/login', async (req, res) => {
    console.log(req.body,"==================login")
    const { username, password } = req.body;
    

    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ message: 'Invalid username or password' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid username or password' });
        }

        const token = jwt.sign({ userId: user._id }, 'gthtfdvdfhtfjtyjtfhhfhfhdgdg', { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        console.error('Error during login:', error); // Log the error
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});


export default router;
