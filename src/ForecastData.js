import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastData(props){
    function Day(){
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        let date = new Date(props.data.dt * 1000);
        let day = days[date.getDay()];
        return(
            `${day}`
        );
    }
    function maxtTemp(){
        let maxTemp =  Math.round(props.data.temp.max)
        return(`${maxTemp}`);
    }
    function minTemp(){
        let minTemp = Math.round(props.data.temp.min);
        return(`${minTemp}`);
    }
    
    return (
      <div>
        <div className="WeatherForecast-da text-muted">{Day()}</div>
        <WeatherIcon code={props.data.weather[0].icon} size={52} />
        <div className="WeatherForecast-temps">
          <span>{maxtTemp()}°</span>
          <span className="text-muted">{minTemp()}°</span>
        </div>
      </div>
    );
}