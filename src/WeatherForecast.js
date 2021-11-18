import axios from "axios";
import React from "react";
import WeatherIcon from "./WeatherIcon";


export default function WeatherForecast(props){
    function handleResponse(response) {
      console.log(response.data);
    }
    
    let lat= props.coord.lat;
    let lon = props.coord.lon;
    let key = "a891fe6b8398b4aa610c0e82c0c5c1ee";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&appid=${key}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    
    return(
        <div className="WeatherForecast">
            <div className="row">
                <div className="col">
                    <div className="WeatherForecast-day">
                        Thurs
                    </div>
                    <WeatherIcon code="10d" size={52}/>
                    <div className="WeatherForecast-temps">
                        <span >19</span>
                        <span className="text-muted">10</span>
                    </div>
                </div>
            </div>
        </div>
    )
}