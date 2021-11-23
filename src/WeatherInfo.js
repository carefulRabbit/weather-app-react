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
        <div className="row mt-2">
          <div className="col-6 mb-3 weatherConstructs">
              <span>
                <WeatherIcon code={props.data.icon} size={64} />
              </span>
              <span>
                <WeatherTemp celcius={props.data.temp} />
              </span>
            
          </div>
          <div className="col-6 mt-4">
            <ul>
              <li>Humidity: {props.data.humidity} %</li>
              <li>Wind Speed: {Math.round(props.data.wind)} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
}