//! details of name, capital, flag, using forEach function

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send();
request.onload = function(){
    var data = request.response;
    var result = JSON.parse(data);
    console.log(result);
    var res = result.forEach((element) =>
    console.log(`Name:${element.name.common}, 
    Capital:${element.capital}, 
    Flag:${element.flags.png}`)) 
}


// !  Countries with a population of less than 2 lakhs using Filter function
var request1 = new XMLHttpRequest();
request1.open("GET","https://restcountries.com/v3.1/all",true)
request1.send();
request1.onload = function(){
    var data = request1.response;
    var result1 = JSON.parse(data);
    var res = result1.filter((element) =>element.population<200000)
    var final = res.map((element)=> console.log(element.name.common))
}


// !Countries from Asia region using filter function.
var request2 = new XMLHttpRequest();
request2.open("GET","https://restcountries.com/v3.1/all",true)
request2.send();
request2.onload = function(){
    var data = request2.response;
    var result2 = JSON.parse(data);
    var res = result2.filter((element) =>element.region==="Asia")
    var final = res.map((element)=> console.log(element.name.common))
}

// !country that uses US dollars as currency.
var request3 = new XMLHttpRequest();
request3.open("GET","https://restcountries.com/v3.1/all",true)
request3.send();
request3.onload = function(){
    var data = request3.response;
    var result3 = JSON.parse(data);
    var currency = result3.filter((value)=> value.currencies && value.currencies.USD)
    currency.forEach(value =>console.log(value.name.common))     
 }


// !total population of countries using reduce function.
var request4 = new XMLHttpRequest();
request4.open("GET","https://restcountries.com/v3.1/all",true)
request4.send();
request4.onload = function(){
    var data = request4.response;
    var result4 = JSON.parse(data);
    var result4 = result4.reduce((total, country) => total + country.population, 0)
    console.log(result4)
}