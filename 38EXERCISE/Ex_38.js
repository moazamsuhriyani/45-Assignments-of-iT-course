"use strict";
function describe_city(city, country = 'pakistan') {
    console.log(`${city} is in ${country}`);
}
describe_city('sukkur', 'pakistan'); //default sentence 
describe_city(`france`, 'europe');
describe_city('qum', 'iran');
