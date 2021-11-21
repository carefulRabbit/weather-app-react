import axios from "axios";
import React, {useState} from "react";
import ForecastData from "./ForecastData";



export default function WeatherForecast(props){
    let [loaded, setLoaded] = useState(false);
    let[forecast, setForecast] = useState(null);

    function handleResponse(response) {
      setForecast(response.data.daily);
      setLoaded(true);
    }
    

    if(loaded){
        return (
          <div className="WeatherForecast">
            <div className="row">
              <div className="col">
                <ForecastData data={forecast[0]} />
              </div>
            </div>
          </div>
        );
    }
    else{
        let lat = props.coord.lat;
        let lon = props.coord.lon;
        let key = "a891fe6b8398b4aa610c0e82c0c5c1ee";
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&appid=${key}&units=metric`;

        axios.get(apiUrl).then(handleResponse);
        return(null);
    }
    
}