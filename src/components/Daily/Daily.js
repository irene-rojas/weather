import React from 'react';

const Daily = (props) => {

    return (

        <div>
            <strong>Daily Forecast:</strong>
            <br/>
            <strong>Summary:</strong> {props.summary}
            <br/>
            <br/>
            <div>
                <strong>{props.tomorrowDate}</strong> {props.tomorrow}
            </div>
            
            <br/>
            <div>
                <strong>{props.nextDayDate}</strong> {props.nextDay}
            </div>
            
            {/* Find way to autopopulate days */}
        </div>

    )
}

export default Daily;