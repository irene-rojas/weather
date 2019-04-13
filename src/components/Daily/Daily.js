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
            
            <div className="dayTwo">
                <strong>{props.day2Date}</strong> 
                <br/>
                {props.day2Weather}
                <br/>
                <strong>High:</strong> {parseInt(props.day2Temp)}° F
                <br/>
                <strong>Feels like:</strong> {parseInt(props.day2Feels)}° F
                <br/>
                <br/>
                <img src={props.day2Icon} alt={props.day2IconAlt} height="32px"/> 
            </div>

            <div className="dayThree">
            <strong>{props.day3Date}</strong> 
                <br/>
                {props.day3Weather}
                <br/>
                <strong>High:</strong> {parseInt(props.day3Temp)}° F
                <br/>
                <strong>Feels like:</strong> {parseInt(props.day3Feels)}° F
                <br/>
                <br/>
                <img src={props.day3Icon} alt={props.day3IconAlt} height="32px"/> 

            </div>










        </div>
    )
}

export default Daily;
