import React from 'react';

const Hourly = (props) => {
    
    return (

        <div>
            <strong>Hourly Forecast:</strong>
            <br/>
            <strong>Summary:</strong> {props.summary}
        </div>

    )
}

export default Hourly;