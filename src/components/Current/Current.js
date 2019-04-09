import React from 'react';
import clearday from "./icons/clear-day.png";
import clearnight from "./icons/clear-night.png";
import cloudy from "./icons/cloudy.png";
import fog from "./icons/fog.png";
import partlycloudyday from"./icons/partly-cloudy-day.png";
import partlycloudynight from "./icons/partly-cloudy-night.png";
import rain from "./icons/rain.png";
import sleet from "./icons/sleet.png";
import snow from "./icons/snow.png";
import wind from "./icons/wind.png";


const Current = (props) => {

    return (

        <div>
            <strong>Current weather:</strong>
            <br/>
            <strong>Summary:</strong> {props.summary}
            <br/>
            <strong>Temperature:</strong> {parseInt(props.temp)}° F
            <br/>
            <strong>Feels like:</strong> {parseInt(props.feels)}° F
            <br/>
            <img src={props.icon} alt={props.icon} /> 
        </div>

    )
}

export default Current;