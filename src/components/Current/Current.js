import React from 'react';
import './Current.css';

const Current = (props) => {
    return (

        <div className="currentWeather">
            <strong>Current Weather: {props.summary}</strong>

            <div className="currentTemp">
                <strong>Temperature:</strong> {parseInt(props.temp)}° F
            </div>
            <div className="currentFeels">
                <strong>Feels like:</strong> {parseInt(props.feels)}° F
            </div>
            <img src={props.icon} alt={props.iconAlt} height="64px"/> 
        </div>
        
    )
}

export default Current;
