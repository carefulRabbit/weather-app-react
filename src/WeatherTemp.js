import React, {useState} from "react";

export default function WeatherTemp(props){
    const[unit, setUnit] = useState("Celcius");
    function showFahren(event){
        event.preventDefault();
        setUnit("Fahrenheit")
    }
    function showCelcius(event){
        event.preventDefault();
        setUnit("Celcius");
    }
    function Fahren(){
        return(
            (props.celcius*9/5 +32)
        );
    }
    if(unit === "Celcius"){
        return (
          <span className="Temp">
            <span className="WeatherTemp">{Math.round(props.celcius)}</span> C |{" "}
            <a href="/" onClick={showFahren}>
              F
            </a>
          </span>
        );
    }
    else{
        return (
          <span className="Temp">
            <span className="WeatherTemp">{Math.round(Fahren())}</span>
            <a href="/" onClick={showCelcius}>
              C
            </a>{" "}
            | F
          </span>
        );
    }
}