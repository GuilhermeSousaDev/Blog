import rateLimiter from 'express-rate-limit';

const limiter = rateLimiter({
	windowMs: 15 * 60 * 1000,
	max: 100,
	standardHeaders: true,
	legacyHeaders: false,
});

export default limiter;
