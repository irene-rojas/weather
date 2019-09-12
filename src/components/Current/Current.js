import React from 'react';
import './Current.css';

const Current = (props) => {
    return (

        <section className="currentWeather">
            <h3 className="currently">Current Weather: {props.summary}</h3>

            <div className="currentTemp">
                <strong>Temperature: {parseInt(props.temp)}° F</strong>
            </div>

            <div className="currentFeels">
                <strong>Feels like: {parseInt(props.feels)}° F</strong>
            </div>

            <img className="currentIcon" src={props.icon} alt={props.iconAlt} /> 
        </section>
        
    )
}

export default Current;
