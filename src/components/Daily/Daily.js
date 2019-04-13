import React from 'react';
import './Daily.css';

const Daily = (props) => {

    return (

        <div>
            <strong>Three Day Forecast:</strong>
            <br/>
            <strong>Summary:</strong> {props.summary}
            <br/>
            <br/>
        
            <div className="dayOne">
                <strong>{props.day1Date}</strong> 
                <br/>
                <strong>High:</strong> {parseInt(props.day1Temp)}° F
                <br/>
                <strong>Feels like:</strong> {parseInt(props.day1Feels)}° F
                <br/>
                <br/>
                <img src={props.day1Icon} alt={props.day1IconAlt} height="32px"/> 
            </div>
            
            <br/>
            <div className="dayTwo">
                <strong>{props.day2Date}</strong> 
                <br/>
                {props.day2Weather}
                <br/>
                <strong>High:</strong> {parseInt(props.day1Temp)}° F
                <br/>
                <strong>Feels like:</strong> {parseInt(props.day1Feels)}° F
                <br/>
                <br/>
                <img src={props.day1Icon} alt={props.day1IconAlt} height="32px"/> 
            </div>
        </div>
    )
}

export default Daily;
