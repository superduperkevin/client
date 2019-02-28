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

async function fetcher(postalCode, aura){
    const contents = await fs.readFile(path.join(__dirname,
        backPath, sampleDataPath, yelpPath, businessDataPath), 'utf8');
   
    // parse contents (gives you an array)
    const data = JSON.parse(contents);
    // iterate over the array looking for obj.postal_code === postalCode
    // Array.find(obj => )
    const obj = data.filter(key => {
        if(key.postal_code === postalCode){
            return key;
        }
    });
    // if no object is found, return error
    if(obj.length !== 0){
        console.log(obj);
    }
    else{
        console.log('NO RESULTS FOUND!');
    }
}


fetcher('89123');


