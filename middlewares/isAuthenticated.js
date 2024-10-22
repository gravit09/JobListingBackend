import jwt from "jsonwebtoken";
const authenticateJWT = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(403).json({ message: "Access denied, token missing!" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JSON_SECRET);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    console.log(token);
    return res.status(401).json({ message: "Invalid token" });
  }
};

export { authenticateJWT };
