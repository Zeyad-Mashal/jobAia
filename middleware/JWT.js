const jwt = require("jsonwebtoken");
const requireAuth = async (req, res, next) => {
    const token = req.cookies.jwt;
    if (!token) {
        return res.status(401).json({ message: "Token not found" });
    }
    try {
        const decoded = jwt.verify(token, "secret");
        req.user = decoded; // 🟢 كده تقدر تستخدم req.user.id بعدين
        next();
    } catch (err) {
        return res.status(401).json({ message: "Invalid Token" });
    }
};

module.exports = requireAuth;
