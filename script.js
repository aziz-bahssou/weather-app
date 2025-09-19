const apiKey = "879ff44d70b99407e993b8d501f50677"
const apiUrl = " https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const searchBox = document.querySelector('.searsh input')
const searchBtn = document.querySelector('.searsh button')
const weatherIcon = document.querySelector('.weather-icon')
const errorMsg = document.querySelector('.error-rpns')

async function checkWdeather(city){
    const response =  await fetch( apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    if (!response.ok || data.cod === "404"){
        errorMsg.textContent = 'Invalid city name !'; 
        document.querySelector('.error').style.display = 'block'
        setTimeout(function() {
        errorMsg.textContent = '';
    }, 5000);  
    return
    }
    
    document.querySelector('.city').innerHTML= data.name;
    document.querySelector('.temp').innerHTML= Math.round(data.main.temp)  + "°C" ;
    document.querySelector('.humidity').innerHTML= data.main.humidity + "%";
    document.querySelector('.wind').innerHTML= data.wind.speed + " km/h";

    if(data.weather[0].main == 'Clouds'){
        weatherIcon.src = 'images/clouds.png'
    }
    else if(data.weather[0].main == 'Clear'){
        weatherIcon.src = 'images/clear.png'
    }
    else if(data.weather[0].main == 'Drizzle'){
        weatherIcon.src = 'images/drizzele.png'
    }
    else if(data.weather[0].main == 'Mist'){
        weatherIcon.src = 'images/mist.png'
    }
    else if(weather[0].main == 'Clear'){
        weatherIcon.src = 'images/clear.png'
    }
    else if(data.weather[0].main == 'Snow'){
        weatherIcon.src = 'images/snow.png'
    }
    document.querySelector('.weather').style.display = 'block'
}             

searchBtn.addEventListener('click', ()=>{
    checkWdeather(searchBox.value);

})



