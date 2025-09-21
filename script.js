




const apiKey = "879ff44d70b99407e993b8d501f50677";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector('.searsh input');
const searchBtn = document.querySelector('.searsh button');
const weatherIcon = document.querySelector('.weather-icon');
const errorMsg = document.querySelector('.error-rpns');
const cards = document.querySelectorAll('.card');
const imgTime = document.getElementById(timePng)

async function checkWdeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    const data = await response.json();
    console.log(data)
    
    

    if (!response.ok || data.cod === "404"){
        errorMsg.textContent = 'Invalid city name !'; 
        document.querySelector('.error').style.display = 'block';
        setTimeout(() => { errorMsg.textContent = ''; }, 5000);  
        return;
    }

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
    document.querySelector('.wind').innerHTML = Math.round(data.wind.speed) + " km/h";

    let localTime = new Date((data.dt + data.timezone) *1000);
    let timeString =localTime.toLocaleDateString("en-Us" , {
        
    });
    document.querySelector(".time").textContent =   timeString   ;


    const dt = data.dt;
    const sunrise = data.sys.sunrise;
    const sunset = data.sys.sunset;
    const weather = data.weather[0].main;


    let icon = '';
   

   if(dt < sunrise || dt >= sunset){
    
    if(weather == 'Clouds') icon = 'images/clouds2.png';
    else if(weather == 'Clear') icon = 'images/clear2.png';
    else if(weather == 'Drizzle') icon = 'images/drizzle2.png';
    else if(weather == 'Mist') icon = 'images/mist2.png';
    else if(weather == 'Snow') icon = 'images/snow2.png';
    else if(weather == 'Rain') icon = 'images/rain2.png';

  
    cards.forEach(card => {
        card.style.background = 'linear-gradient(136deg, #0C090A, #37434b)';
    });

} else {
    
    if(weather == 'Clouds') icon = 'images/clouds.png';
    else if(weather == 'Clear') icon = 'images/clear.png';
    else if(weather == 'Drizzle') icon = 'images/drizzle.png';
    else if(weather == 'Mist') icon = 'images/mist.png';
    else if(weather == 'Snow') icon = 'images/snow.png';
    else if(weather == 'Rain') icon = 'images/rain.png';

   
    cards.forEach(card => {
        card.style.background = 'linear-gradient(133deg, #3B9C9C, #5b548a)';
    });
}

weatherIcon.src = icon;
    

    document.querySelector('.weather').style.display = 'block';
}


          

searchBtn.addEventListener('click', ()=>{
    checkWdeather(searchBox.value);

});




