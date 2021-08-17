const fs = require('fs')


// Defining variables (arrays) for data
let cities = [];
let weather = [];
let temperature = Math.floor(Math.random() * (30 - 0) + 0);
let coldOrWarm = ["above", "below"];

// Function that returns a random element from an array
function takeRandom(list){
    let randomNumber = Math.floor(Math.random() * (list.length - 0) + 0);
    return list[randomNumber];
}


// Function that reads data from csv file and outputs the array that consist of this data
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


// Triggering function readData to read the data and store it to variables created before
cities = readData("cities.csv");
weather = readData("weather.csv");

// Output that is visible for the user once the program is run through terminal
console.log("The weather in " + takeRandom(cities) + " today is " + takeRandom(weather) +  " and the temperature outside is " + temperature + " degrees " + takeRandom(coldOrWarm) + " zero.");
