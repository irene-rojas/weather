import React from 'react';
// import clearday from "./icons/clearday.png";
// import clearnight from "./icons/clearnight.png";
// import cloudy from "./icons/cloudy.png";
// import fog from "./icons/fog.png";
// import partlycloudyday from"./icons/partlycloudyday.png";
// import partlycloudynight from "./icons/partlycloudynight.png";
// import rain from "./icons/rain.png";
// import sleet from "./icons/sleet.png";
// import snow from "./icons/snow.png";
// import wind from "./icons/wind.png";


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
            <br/>
            <img src={props.icon} alt={props.iconAlt} height="64px"/> 
        </div>

    )
}

export default Current;