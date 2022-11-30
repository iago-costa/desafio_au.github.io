import { Router } from 'express';
const router = Router();

import bodyParser from 'body-parser';
import RestaurantController from './controllers/restaurant.controller';
// import { RestaurantsModel } from './model/restaurant.model';



var jsonParser = bodyParser.json()

// GET /restaurants
router.get(
    '/restaurants/:fileName/:timeForVerification',
    jsonParser,
    RestaurantController.getOpenRestaurants
    // async (req, res) => {
    //     const restaurants = new RestaurantsModel(req.params.fileName, parseInt(req.params.timeForVerification));
    //     const open_restaurants = restaurants.returnOpenRestaurants(await restaurants.readCSV());
    //     res.json(open_restaurants);
    // }
)

export { router }