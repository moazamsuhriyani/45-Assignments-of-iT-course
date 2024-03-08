function describe_city(city: string, country: string = 'pakistan'): void {
    console.log(`${city} is in ${country}`)
}


describe_city('sukkur', 'pakistan') //default sentence 
describe_city(`france`, 'europe')
describe_city('qum', 'iran')