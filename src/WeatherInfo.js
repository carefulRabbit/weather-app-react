import React from "react";
import FormatDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemp from "./WeatherTemp";


export default function WeatherInfo(props){
    return (
      <div>
        <h1>{props.data.city}</h1>
        <ul>
          <li>
            <FormatDate date={props.data.date} />
          </li>
          <li>{props.data.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            
              <div >
                <WeatherIcon code={props.data.icon} size={64} />
              </div>
              <div >
                <WeatherTemp celcius={props.data.temp} />
              </div>
            
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {props.data.humidity} %</li>
              <li>Wind Speed: {Math.round(props.data.wind)} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
}