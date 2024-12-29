

const apiKey = "78f322efbcb7dd3b489691be111f4462";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchInput=document.querySelector(".search input");
const searchButton=document.querySelector(".search button");

const imageIcon=document.querySelector('.image-icon');

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    
    if(response.status == 404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{
        const data = await response.json();
    
        // console.log(data);
    
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+"°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity+"%";
        document.querySelector(".wind").innerHTML = data.wind.speed+"km/h";
    
        if(data.weather[0].main === "Clouds"){
            imageIcon.src="../WEATHER APP/images/clouds.png";
        }
        else if(data.weather[0].main === "Clear"){
            imageIcon.src="../WEATHER APP/images/clear.png";
        }
        else if(data.weather[0].main === "Drizzle"){
            imageIcon.src="../WEATHER APP/images/drizzle.png";
        }
        else if(data.weather[0].main === "Mist"){
            imageIcon.src="../WEATHER APP/images/mist.png";
        }
        else if(data.weather[0].main === "Snow"){
            imageIcon.src="../WEATHER APP/images/snow.png";
        }
    
        document.querySelector(".weather").style.display="block";
        document.querySelector(".error").style.display="none";
    }

}

searchButton.addEventListener("click",()=>{
    checkWeather(searchInput.value);
})


