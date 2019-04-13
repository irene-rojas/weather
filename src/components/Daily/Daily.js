import React from 'react';
import './Daily.css';

const Daily = (props) => {

    return (

        <div className="dailyDiv">
            <strong id="dailyTitle">Three Day Forecast:</strong>
            <br/>
        
            <div className="dayOne forecast">
                <div className="header">
                    <strong className="date">{props.day1Date}</strong> 
                    <div className="summary">{props.day1Weather}</div>
                </div>
                <div className="high">
                    <strong>High:</strong> {parseInt(props.day1Temp)}° F
                </div>              
                <div className="feels">
                    <strong className="feels">Feels like:</strong> {parseInt(props.day1Feels)}° F
                </div>
                <img className="icon" src={props.day1Icon} alt={props.day1IconAlt} /> 
            </div>
            
            <div className="dayTwo forecast middle">
                <div className="header">
                    <strong className="date">{props.day2Date}</strong> 
                    <div className="summary">{props.day2Weather}</div>
                </div>
                <div className="high">
                    <strong>High:</strong> {parseInt(props.day2Temp)}° F
                </div>              
                <div className="feels">
                    <strong className="feels">Feels like:</strong> {parseInt(props.day2Feels)}° F
                </div>
                <img className="icon" src={props.day2Icon} alt={props.day2IconAlt} /> 
            </div>

            <div className="dayThree forecast">
                <div className="header">
                    <strong className="date">{props.day3Date}</strong> 
                    <div className="summary">{props.day3Weather}</div>
                </div>
                <div className="high">
                    <strong>High:</strong> {parseInt(props.day3Temp)}° F
                </div>              
                <div className="feels">
                    <strong className="feels">Feels like:</strong> {parseInt(props.day3Feels)}° F
                </div>
                <img className="icon" src={props.day3Icon} alt={props.day3IconAlt} /> 
            </div>

        </div>
    )
}

export default Daily;
