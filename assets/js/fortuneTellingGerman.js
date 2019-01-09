let = randomize = (theArray) => Math.floor(Math.random() * theArray.length)
let jobs = ['Software Entwickler', 'Archeologe', 'Bettler', 'Tierarzt', 'Rockstar', 'Pizzabäcker', 'Kampfkunsttrainer'];
let locations = ['Deutschland', 'Japan', 'China', 'Indien', 'Amerika', 'Brasilien', 'Ägypten', 'jedem Ort der Welt'];
let partners = ['einem liebenden Ehepartner', 'einem Drachen', 'einer Hexe', 'einer schrecklichen Person', 'einem ehrlichen Menschen', 'einem Alien', 'einem Gott', 'einem Helden'];
let livings = ['einer Villa', 'einem schönen Eigenheim', 'einer billigen Wohnung', 'einem Karton auf der Straße', 'einem großen Anwesen', 'einer Hütte', 'einem Stall'];
let livingSize = Math.floor(Math.random() * 500);
let children = Math.floor(Math.random() * 10);


let jobID = randomize(jobs);
let locationID = randomize(locations);
let partnerID = randomize(partners);
let livingID = randomize(livings);

let tellFortune

document.getElementById('schicksal').innerHTML = `<strong>Deine Zukunft:</strong><br>Du wirst ein ${jobs[jobID]} in ${locations[locationID]} sein. Du wirst mit ${partners[partnerID]} verheiratet sein und ihr lebt in ${livings[livingID]} von ${livingSize} Quadratmetern. Ihr werdet ${children==0 ? 'keine' : children } ${children==1 ? 'Kind' : 'Kinder' } haben.`;