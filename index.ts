import { ajax } from "rxjs/ajax";
import { Observable, interval } from "rxjs";

const apiKey = "bbef17cfc62d7482bfb061d5bca00a6a";
const URL =
  "https://api.openweathermap.org/data/2.5/weather?APPID=" +
  apiKey +
  "&units=metric&q=";
var city = "Pisa";
const tick = interval(100);
var conta = 0;
//Costruisco l'observable
const temp = new Observable(subscriber =>
  tick.subscribe({
    next() {
      while (conta < 4) {
        fetch(URL + city)
          .then(response => response.json())
          .then(data => subscriber.next(data.main.temp));
        conta += 1;
      }
    }
  })
);

temp.subscribe({
  next(x) {
    document.getElementById("output").innerHTML += x + "<br>";
  }/*,
  complete() {
    document.getElementById("outputC").innerHTML += "ok" + "<br>";
  }*/
});
