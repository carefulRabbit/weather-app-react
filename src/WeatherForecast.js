import React from "react";
import WeatherIcon from "./WeatherIcon";


export default function WeatherForecast(){
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