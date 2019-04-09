import React from 'react';
import "./icons/clear-day.svg";
import "./icons/clear-night.svg";
import "./icons/cloudy.svg";
import "./icons/fog.svg";
import "./icons/partly-cloudy-day.svg";
import "./icons/partly-cloudy-night.svg";
import "./icons/rain.svg";
import "./icons/sleet.svg";
import "./icons/snow.svg";
import "./icons/wind.svg";


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
            <img src={props.icon} alt={props.icon}/> 
        </div>

    )
}

export default Current;