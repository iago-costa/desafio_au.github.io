import * as fs from "fs";
import * as path from "path";
import { parse } from 'csv-parse';
import { finished } from "stream/promises";
import RestaurantType from "../models/restaurant.model";


class RestaurantsService {
    // Properties
    // fileName: string; // Name of the CSV file
    // timeForVerification: number; // Time for verification
    fileName: string;
    timeForVerification: number;

    constructor(fileName: string, timeForVerification: number) {
        this.fileName = fileName;
        this.timeForVerification = timeForVerification;
    }

    returnOpenRestaurants(data: RestaurantType[]): RestaurantType[] {
        // Filter the data to return only the restaurants that are open at the time of verification
        // Return the filtered data as an array of objects with the following structure:
        // [
        //     {
        //         id: 1,
        //         RestaurantName: 'Restaurant 1',
        //         OpenHours: '10:00-22:00'
        //     },
        // ]
        let open_restaurants: RestaurantType[] = [];

        for (let restaurant of data) {
            if (restaurant.id !== 0) {
                if (this.timeForVerification === 99999) {
                    open_restaurants.push(restaurant);
                }else{
                    let openHours = restaurant.OpenHours.split('-');
                    let openHour = parseInt(openHours[0].replace(':', ''));
                    let closeHour = parseInt(openHours[1].replace(':', ''));
                    if (this.timeForVerification >= openHour && this.timeForVerification <= closeHour) {
                        open_restaurants.push(restaurant);
                    }
                }
            }

        }

        return open_restaurants;
    }

    async readCSV(): Promise<RestaurantType[]> {
        // Read the CSV file and return the data as an array of objects with the following structure:
        // [
        //     {
        //         id: 1,
        //         RestaurantName: 'Restaurant 1',
        //         OpenHours: '10:00-22:00'
        //     },
        // ]
        const headers = ['RestaurantName', 'OpenHours'];
        const csvFilePath = path.resolve(__dirname, this.fileName);

        const processFile = async () => {
            const records: any[] = [];
            const parser = fs
                .createReadStream(csvFilePath)
                .pipe(parse({
                    delimiter: ',',
                    columns: headers
                }));

            parser.on('readable', function () {
                let record;
                while ((record = parser.read()) !== null) {
                    record.id = records.length;
                    records.push(record);
                }
            });

            await finished(parser);
            return records;
        };

        const records = await processFile();

        return records
    }
}


export { RestaurantsService, RestaurantType };