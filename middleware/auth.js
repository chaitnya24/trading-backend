
const authMiddleware = (req, res, next) => {
  req.userId = "USER_001";
  next();
};
export default authMiddleware;
