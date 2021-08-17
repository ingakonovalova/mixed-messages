let cities = ["Tartu", "Tallinn", "Pärnu", "Viljandi"];
let weather = ["windy", "foggy", "rainy", "sunny", "cloudy", "nice", "wet", "humid", "stormy", "lovely", "gloomy"];
let temperature = Math.floor(Math.random() * (30 - 0) + 0);
let coldOrWarm = ["above", "below"];

//console.log(temperature);

function takeRandom(list){
    let randomNumber = Math.floor(Math.random() * (list.length - 0) + 0);
    return list[randomNumber];
}

console.log("The weather in " + takeRandom(cities) + " today is " + takeRandom(weather) +  " and the temperature outside is " + temperature + " degrees " + takeRandom(coldOrWarm) + " zero.");