/*let fortuneTelling = (numOfKids = 2, partner = 'sympathatic partner', location = 'Europe', job = 'software developer', house = 'condomomium') => `You will be ${job} in ${location}. You will live with ${partner} in a ${house}. You will have ${numOfKids} children.`;
console.log(fortuneTelling());


// User input via prompt
let numOfChildren = prompt('How many children will you have?', 2);
let yourPartner = prompt('What partner will you have?', 'nice person');
let geoLocation = prompt('In which city will you live?', 'Berlin');
let jobTitle = prompt('What will be your job?', 'software developer');
let kindOfHouse = prompt('What kind of house will you live in?', 'condomonium');
let fortuneTelling2 = (numOfChildren, yourPartner, geoLocation, jobTitle, kindOfHouse) => `You will be ${jobTitle} in ${geoLocation}. You will live with ${yourPartner} in a ${kindOfHouse}. You will have ${numOfChildren} children.`;
console.log(fortuneTelling2(numOfChildren, yourPartner, geoLocation, jobTitle, kindOfHouse));*/


// randomized output through arrays
let jobs = ['software developer', 'doctor', 'drug dealer', 'barkeeper', 'delivery boy', 'rockstar', 'archeologist', 'clown', 'martial arts trainer']
let locations = ['Germany', 'Japan', 'Sweden', 'United States of America', 'China', 'Brasil', 'Egypt', 'every place in the world']
let partners = ['a loving partner', 'a witch', 'a dragon', 'an aweful person', 'an alien', 'a god', 'a zombie', 'a hero']
let kids = Math.floor(Math.random() * 10);
let living = ['villa', 'condemonium', 'shack', 'cottage', 'cheap flat', 'box on the street', 'mansion', 'nice house']
let livingSize = Math.floor(Math.random() * 300);

let jobID = Math.floor(Math.random() * jobs.length);
let locationID = Math.floor(Math.random() * locations.length);
let partnerID = Math.floor(Math.random() * partners.length);
let livingID = Math.floor(Math.random() * living.length);

let fortuneTelling3 = (numOfChildren, yourPartner, geoLocation, jobTitle, kindOfHouse, houseSize) => `You will be ${jobTitle} in ${geoLocation}. You will live with ${yourPartner} in a ${kindOfHouse} of ${houseSize} sqm. You will have ${kids==0 ? 'no' : kids} ${kids==1 ? 'child' : 'children' } .`;

document.getElementById("schicksal").innerHTML = fortuneTelling3(kids, partners[partnerID], locations[locationID], jobs[jobID], living[livingID], livingSize)