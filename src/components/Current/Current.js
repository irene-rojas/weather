import React from 'react';



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
            <img src={`${props.icon}.svg`} alt={props.icon}/> 
        </div>

    )
}

export default Current;