const apiKey = "ae89324baca74bdd9b7102412231106";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`);

    if(response.status == 404){
        document.querySelector("error").style.diplay = "block";
    }
    var data = await response.json();

    

    document.querySelector(".city").innerHTML = data.location.name;
    document.querySelector(".temp").innerHTML = data.current.temp_c + "°C";
    document.querySelector(".humidity").innerHTML = data.current.humidity + "%";
    document.querySelector(".wind").innerHTML = data.current.wind_kph + "km/h";

    if (data.current.is_day == 1 )
    {
        if (data.current.condition.text = "Sunny"){weathericon.src= "1132.png";}
        else if (data.current.condition.text = "Party Cloudy"){weathericon.src= "1162.png";}
        else if (data.current.condition.text = "Cloudy"){weathericon.src= "1192.png";}
        else if (data.current.condition.text = "Overcast"){weathericon.src= "1222.png";}
        else if (data.current.condition.text = "Mist"){weathericon.src= "1432.png";}
        else if (data.current.condition.text = "Patchy rain possible"){weathericon.src= "1762.png";}
        else if (data.current.condition.text = "Patchy snow possible"){weathericon.src= "1792.png";}
        else if (data.current.condition.text = "Patchy sleet possible"){weathericon.src= "1822.png";}
        else if (data.current.condition.text = "Patchy freezing drizzle possible"){weathericon.src= "1852.png";}
        else if (data.current.condition.text = "Thundery outbreaks possible"){weathericon.src= "2002.png";}
        else if (data.current.condition.text = "Blowing snow"){weathericon.src= "2272.png";}
        else if (data.current.condition.text = "Blizzard"){weathericon.src= "2302.png";}
        else if (data.current.condition.text = "Fog"){weathericon.src= "2482.png";}
          }
          else if(data.current.is_day == 0)
          {
            if (data.current.condition.text = "Clear"){weathericon.src= "113.png";}
        else if (data.current.condition.text = "Party Cloudy"){weathericon.src= "116.png";}
        else if (data.current.condition.text = "Cloudy"){weathericon.src= "119.png";}
        else if (data.current.condition.text = "Overcast"){weathericon.src= "122.png";}
        else if (data.current.condition.text = "Mist"){weathericon.src= "143.png";}
        else if (data.current.condition.text = "Patchy rain possible"){weathericon.src= "176.png";}
        else if (data.current.condition.text = "Patchy snow possible"){weathericon.src= "179.png";}
        else if (data.current.condition.text = "Patchy sleet possible"){weathericon.src= "182.png";}
        else if (data.current.condition.text = "Patchy freezing drizzle possible"){weathericon.src= "185.png";}
        else if (data.current.condition.text = "Thundery outbreaks possible"){weathericon.src= "200.png";}
        else if (data.current.condition.text = "Blowing snow"){weathericon.src= "227.png";}
        else if (data.current.condition.text = "Blizzard"){weathericon.src= "230.png";}
        else if (data.current.condition.text = "Fog"){weathericon.src= "248.png";}
            
          }
          document.querySelector(".weather").computedStyleMap.display ="block";


}

checkWeather("New Delhi");

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
    
})