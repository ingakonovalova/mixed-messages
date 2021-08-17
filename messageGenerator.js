const fs = require('fs')

let cities = [];
let weather = [];
let temperature = Math.floor(Math.random() * (30 - 0) + 0);
let coldOrWarm = ["above", "below"];

//console.log(temperature);

function takeRandom(list){
    let randomNumber = Math.floor(Math.random() * (list.length - 0) + 0);
    return list[randomNumber];
}

function readData(file) {
    var data = '';
    const re = /,\r\n/;

    data = fs.readFileSync(file, 'utf8' , (err, data) => {
        if (err) {
          console.error(err)
        }
      })

    return data.split(re);;
      
}

cities = readData("cities.csv");
weather = readData("weather.csv");

console.log("The weather in " + takeRandom(cities) + " today is " + takeRandom(weather) +  " and the temperature outside is " + temperature + " degrees " + takeRandom(coldOrWarm) + " zero.");
