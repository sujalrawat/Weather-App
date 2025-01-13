import express from 'express';
import {getWeatherInfo} from '../controller/weatherController.js'

const router = express.Router();

router.route('/:location').get(getWeatherInfo)

export default router;