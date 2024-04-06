let wind = document.getElementById("h1")
let text = document.querySelector("input");
let btn = document.getElementById("img1")
let cityy = document.getElementById("h2");
let humadity = document.getElementById("humadity")
let wspeed = document.getElementById("speed")
let cont = document.getElementsByClassName("container")[0]

const apikey= "50dcf334dff08b6791333303486b66de";
let api ="https://api.openweathermap.org/data/2.5/weather?"
function savedata(){
    localStorage.setItem("data",cont.innerHTML)
}



async function setwhether(city){
    const response  = await fetch(api+`q=${city }`+`&appid=${apikey}`)
    var data = await response.json();
    console.log(data)
    cityy.innerHTML = data.name;
    humadity.innerHTML = data.main.humidity+""
    wspeed.innerHTML = data.wind.speed+" m/h"
    wind.innerHTML = Math.round(data.main.temp-273)+"<sup>o</sup>C"
    savedata()
}
function showdata(){
    cont.innerHTML = localStorage.getItem("data")
}

btn.addEventListener("click",function(){
    const city = text.value;
    setwhether(city)
    savedata();
})

