import * as fs from "fs";
import * as path from "path";
import { parse } from 'csv-parse';
import { finished } from "stream/promises";


type Restaurant = {
  RestaurantName: string;
  OpenHours: string;
};


async function readCSV(fileName: string): Promise<Restaurant[]> {
  const headers = ['RestaurantName', 'OpenHours'];
  const csvFilePath = path.resolve(__dirname, fileName);

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

readCSV('restaurants.csv').then((data) => {
  console.log(data);
}).catch((err) => {
    console.log(err);
});