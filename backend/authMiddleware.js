import jwt from 'jsonwebtoken';

const secret = 'gthtfdvdfhtfjtyjtfhhfhfhdgdg'; // Change this to your secret key

export const authMiddleware = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(401).json({ message: 'Access denied. No token provided.' });
    }
    try {
        const decoded = jwt.verify(token, secret);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(400).json({ message: 'Invalid token' });
    }
};

