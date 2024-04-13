const redis = require('ioredis');
const config = require('./app');

const redisClient = redis.createClient({
  host: config.redis_host,
  port: config.redis_port,
  password: config.redis_pass,
});

redisClient.on('connect', () => {
  console.log('Connected to Redis');
});

redisClient.on('error', err => {
  console.error('Redis Error:', err);
});

module.exports = redisClient;
