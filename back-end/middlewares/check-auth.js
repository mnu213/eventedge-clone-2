import jwt from 'jsonwebtoken';

const checkAuth = (req, res, next) => {
  try {
    const usersToken = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(usersToken, process.env.JWT_KEY);
    req.userData = decoded;
    next();
  } catch (error) {
    next(error);
  }
};

export default checkAuth;
