const apiKey= "04c62b0b03819698e34a308301d896e3";
const apiURL= "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const searchBtn= document.querySelector("button")
const searchBox=document.querySelector("input")
const weatherIcon=document.querySelector(".weather-icon")

async function checkWeather(city){
try{
  const response= await  fetch(apiURL + city + `&appid=${apiKey}`)
  var data = await response.json();
  console.log(data)
  document.querySelector(".city").innerHTML=data.name;
  document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°c"
  document.querySelector(".humidity").innerHTML=data.main.humidity +"%"
  document.querySelector(".wind").innerHTML=data.wind.speed+" km/h"
  if(data.weather[0].main=="Clouds"){
    weatherIcon.src="images/clouds.png"
  }else if(data.weather[0].main=="Clear"){
  weatherIcon.src="images/clear.png"
  }else if(data.weather[0].main=="Rain"){
    weatherIcon.src="images/rain.png"
  }else if(data.weather[0].main=="Drizzle"){
    weatherIcon.src="images/drizzle.png"
  }else if(data.weather[0].main=="Mist"){
    weatherIcon.src="images/mist.png"
  }
    document.querySelector(".weather").style.display="block"
}catch{
  alert("Please Enter Correct Country Name")
}

}
searchBtn.addEventListener("click", ()=>{
  checkWeather(searchBox.value)
})

searchBox.addEventListener("keydown", (event) => { if (event.key === "Enter") 
  { checkWeather(searchBox.value); 
  }
});

window.addEventListener("load", () => { checkWeather("Dhaka")});
