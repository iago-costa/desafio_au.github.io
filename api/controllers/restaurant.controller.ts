import { RequestHandler } from 'express';
import { RestaurantsService } from '../services/restaurant.service';


class RestaurantsController {
    public static getOpenRestaurants: RequestHandler = async (req, res) => {
        const restaurants = new RestaurantsService(req.params.fileName, parseInt(req.params.timeForVerification));
        const open_restaurants = restaurants.returnOpenRestaurants(await restaurants.readCSV());
        res.json(open_restaurants);
    }
}

export default RestaurantsController;