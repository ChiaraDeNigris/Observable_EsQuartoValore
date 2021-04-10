import { ajax } from 'rxjs/ajax';
import { Observable, interval } from "rxjs";

const apiKey = "5c546389656e9425c3eb5ec97f1a0188";
const URL =
  "https://api.openweathermap.org/data/2.5/weather?APPID=" +
  apiKey +
  "&units=metric&q=";
var city="Pisa";
const tick = interval(10000);
//Costruisco l'observable
const temp = new Observable(subscriber => tick.subscribe( { 
  next() { 
    fetch(URL + city)
      .then(response =>  response.json())
        .then(data => 
          subscriber.next(data.main.temp));
  } } ) ); 
// Due subscriber
temp.subscribe({   
  next(x) {console.log(x);}
})
temp.subscribe({   
  next(x) {document.getElementById("output").innerHTML+=x+"<br>";}
})