const axios = require("axios");
console.log("Hello world");

let apiKey = "3Gs18Dq8SNrs3kLQdrpUFHa2yX8uD9ZXR7"
let city = "Bogota, col";

let requestConfig = {
    url: "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&appid=" +
        apiKey,
};

let objPromesa = axios(requestConfig);

objPromesa
    .then(function (response) {
        console.log("La temperatura en Bogota, Colombia, es: " + (response.data.main.temp - 273.15).toFixed(2).toString() + " Grados Celcius");
    })
    .catch(function (err) {
        console.log(err);
    });
