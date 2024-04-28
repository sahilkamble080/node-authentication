const jwt = require('jsonwebtoken');
const { secret } = require('../config/config');
const redisClient = require('redis').createClient();

exports.authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, secret.accessToken, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

exports.authorizeRole = (role) => {
  return (req, res, next) => {
    const userEmail = req.user.emailId;
    redisClient.get(userEmail, (err, userRole) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ message: 'Internal server error' });
      }
      if (role !== userRole) return res.status(403).json({ message: 'Unauthorized' });
      next();
    });
  };
};
