import React from 'react';

const Current = (props) => {

    return (

        <div>
            <strong>{props.time}</strong>
            <br/>
            <strong>Current weather:</strong>
            <br/>
            <strong>Summary:</strong> {props.summary}
            <br/>
            <strong>Temperature:</strong> {parseInt(props.temp)}° F
            <br/>
            <strong>Feels like:</strong> {parseInt(props.feels)}° F
            <br/>
            <br/>
            <img src={props.icon} alt={props.iconAlt} height="64px"/> 
        </div>

    )
}

export default Current;