import React from 'react';
import './Current.css';

const Current = (props) => {
    return (

        <div className="currentWeather">
            <strong className="currently">Current Weather: {props.summary}</strong>

            <div className="currentTemp">
                <strong>Temperature:</strong> {parseInt(props.temp)}° F
            </div>
            <div className="currentFeels">
                <strong>Feels like:</strong> {parseInt(props.feels)}° F
            </div>
            <img className="currentIcon" src={props.icon} alt={props.iconAlt} /> 
        </div>
        
    )
}

export default Current;
