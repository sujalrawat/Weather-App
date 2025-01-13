import express from 'express';
import {getWeatherInfo} from '../controller/weatherController.js'

const router = express.Router();

router.route('').get((req,res) => {
    res.send("Welcome to Weather-APP")
})
router.route('/weather/:location').get(getWeatherInfo)

export default router;