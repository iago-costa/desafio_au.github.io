import { Router } from 'express';
const router = Router();

import bodyParser from 'body-parser';
import { Restaurants } from './model/restaurant';

var jsonParser = bodyParser.json()

// GET /restaurants
router.get(
    '/restaurants/:fileName/:timeForVerification',
    jsonParser,
    async (req, res) => {
        const restaurants = new Restaurants(req.params.fileName, parseInt(req.params.timeForVerification));
        const open_restaurants = restaurants.returnOpenRestaurants(await restaurants.readCSV());
        res.json(open_restaurants);
    }
)

export { router }