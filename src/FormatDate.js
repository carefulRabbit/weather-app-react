import React from "react";

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export default function FormatDate(props){
    let day = days[props.date.getDay()];
    let hours = props.date.getHours();
    if (hours < 10){
        hours = `0${hours}`;
    }
    let min = props.date.getMinutes();
    if(min < 10){
        min = `0${min}`;
    }

    return(
        <div>
            {day}  {hours}:{min}
        </div>
    )
}