import express from "express";
import weatherRouter from './routes/weatherRoutes.js';
import rateLimit from "express-rate-limit"

const app = express();
const WEATHER_API = process.env.API.replace('<YOUR_API_KEY>',process.env.API_KEY);

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per windowMs
    message: 'Too many requests from this IP, please try again later.',
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

app.use(limiter)

app.use('/weather',weatherRouter)

export {WEATHER_API}
export default app;