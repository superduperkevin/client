/* fetcher.js 
 * Input - postalCode, aura and category
 * For MVP: find 3 obejects in the JSON file 
 * fetched. JSON file is a MOCK call to API/DB
 * Will be called by another program from user input
 * with the 3 parameters
 * Output: array with 3 objects at most (MVP only)
 */

const fs = require('fs').promises;
const path = require('path');
// file path to the JSON with business data, change this acordingly
const backPath = '..';
const sampleDataPath = 'sample-data';
const yelpPath = 'yelp';
const businessDataPath = 'businessData.json';

async function fetcher(postalCode, ambience, categories){
    const content = await fs.readFile(path.join(__dirname,
        backPath, sampleDataPath, yelpPath, businessDataPath), 'utf8');
    console.log(content);
}


fetcher('x', 'y', 'z');


