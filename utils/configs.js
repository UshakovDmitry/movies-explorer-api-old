const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 300,
});
const jwtPublicKey = '1dksj2h3k4j5h6k7j8h9k0j';
const {
  PORT = 3002,
  MONGO_PORT = 'mongodb://127.0.0.1:27017/bitfilmsdb',
  NODE_ENV,
  JWT_SECRET,
} = process.env;

const tokenKey = NODE_ENV === 'production' ? JWT_SECRET : jwtPublicKey;

const allowedCors = ['http://localhost:3000', 'http://ushakov.diploma.nomoredomainsicu.ru/', 'https://ushakov.diploma.nomoredomainsicu.ru'];

const corsOptions = {
  origin: allowedCors,
  optionsSuccessStatus: 200,
  credentials: true,
};

module.exports = {
  limiter,
  corsOptions,
  PORT,
  MONGO_PORT,
  tokenKey,
};
