const redis = require('redis');
const REDIS_PORT = 6379;

const client = redis.createClient(REDIS_PORT);

client.on('connect', () => {
  console.log('Connected to Redis');
});

client.on('error', err => {
  console.error('Redis connection error:', err);
});

if (client.connection) {
  console.log('Connected');
} else {
  console.log('Not Connected');
}

module.exports = client;
