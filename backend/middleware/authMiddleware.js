const jwt = require("jsonwebtoken");

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization']; // Using lowercase 'authorization'
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'No token provided or malformed header' });
    }
    
    const token = authHeader.split(' ')[1];
    
    if (!token) return res.status(401).json({ message: 'No token provided' });

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.status(403).json({ message: 'Failed to authenticate token' });
        req.user = user;  // Attach user information to the request object
        next();
    });
};

// Middleware to authorize roles
const authorizeRoles = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {  // Check if user's role matches any of the allowed roles
            return res.status(403).json({ message: 'Access denied. Insufficient privileges.' });
        }
        next();
    };
};

module.exports = { authenticateToken, authorizeRoles };
