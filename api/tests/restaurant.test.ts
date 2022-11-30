import {describe, expect, test} from '@jest/globals';
import { RestaurantsService } from "../services/restaurant.service";


describe("Restaurant", () => {
    test("should return a list of restaurants", async () => {
        const restaurants = new RestaurantsService("restaurant-hours.csv", 99999);
        const read_csv_result = await restaurants.readCSV();
        expect(read_csv_result).toHaveLength(52);
    });

    test("should return a list of open restaurants", async () => {
        const restaurants = new RestaurantsService("restaurant-hours.csv", 1400);
        const read_csv_result = await restaurants.readCSV();
        const open_restaurants = restaurants.returnOpenRestaurants(read_csv_result);
        expect(open_restaurants).toHaveLength(51);
    });

});
