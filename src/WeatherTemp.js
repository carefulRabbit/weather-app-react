import React from "react";

export default function WeatherTemp(props){
    
        return (
          <span className="Temp">
            <span className="WeatherTemp">{Math.round(props.celcius)}</span>{" "}
            <span className="tempUnit">°C</span>
          </span>
        );
}
    
