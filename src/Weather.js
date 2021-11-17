import axios from "axios";
import React, {useState} from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";


export default function Weather(props){
    const [weatherData, setWeatherData] = useState({ready:false});
    const [city, setCity] = useState(props.defaultCity);
    
    function handleResponse(response){
        setWeatherData({
            ready:true,
            city:response.data.name,
            temp: response.data.main.temp,
            description: response.data.weather[0].main,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
            icon: response.data.weather[0].icon,
            date: new Date(response.data.dt * 1000),

        });
    }

    function handleSubmit(event){
      event.preventDefault();
      Search();
    }
    function handleCityChange(event){
      setCity(event.target.value);
    }
    
    function Search(){
        const key = "a891fe6b8398b4aa610c0e82c0c5c1ee";
        const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`;
        axios.get(api).then(handleResponse);
    }

    if(weatherData.ready){
        return (
          <div className=" container Weather">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-9">
                  <input
                    type="search"
                    placeholder="Search a City"
                    autoFocus="on"
                    onChange={handleCityChange}
                  />
                </div>
                <div className="col-3">
                  <input
                    type="button"
                    value="search"
                    className="btn btn-primary"
                  />
                </div>
              </div>
            </form>
            <WeatherInfo data={weatherData} />
            <WeatherForecast />
          </div>
        );
    }
    else{
        Search();
        return("Loading...");
    }
}
