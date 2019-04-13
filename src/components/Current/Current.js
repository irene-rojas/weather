import React from 'react';
import './Current.css';

const Current = (props) => {
    return (

        <div className="currentWeather">
            <h3 className="currently">Current Weather: {props.summary}</h3>

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
