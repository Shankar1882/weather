let section = document.querySelector("section");
let button=document.querySelector("button");
let input=document.querySelector("input");
let others=document.getElementById("others");
let from=document.getElementById("enter");
let input2;
let background=document.getElementById("background");
let date1=new Date();
date1.getDate
enter.addEventListener('change',(e)=>{
  input2=e.target.value;
  console.log(input2)
  let API_KEY="7cc88a076d672f0cf9d85d9841eabcbb";
  let URL=`https://api.openweathermap.org/data/2.5/weather?q=${input2}&appid=7cc88a076d672f0cf9d85d9841eabcbb&units=metric`;
  async function fetchApi() {
    let response = await fetch(URL);
    let data = await response.json();
    console.log(data);
  let arrday=["","monday","tuesday","wednesday","thursday","friday","saturday","sunday"];
    others.innerHTML=`<article id="article1"><h3>Humidity <h2> ${data.main.humidity}%</h2></h3><i id="icon"></i></article>
    <article id="article2"><h3>Wind <h2> ${data.wind.speed} mph</h2></h3><i id="icon1"></i></article> 
    <article id="article3"><h3>Temp max <h2> ${data.main.temp_max} °C</h2></h3><i id="icon2"></i></article>
    <article id="article4"><h3>Temp min <h2> ${data.main.temp_min} °C</h2></h3><i id="icon3"></i></article>`;

    section.innerHTML=`<div id="main";> <div id="main1";><div id="top"><i></i>${data.name}</div><article><h2>${date1.getDate()}/${date1.getMonth()}/${date1.getFullYear()}</h2><h2>${arrday[date1.getDay()]}</h2><h1>${data.main.temp}°C</h1><h4>Feelslike ${data.main.feels_like}°C</h4></article></div>
    <div id="main2";><h3>${data.weather[0].description}</h3><img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"></div></div>`;
  
  }
    fetchApi();
})