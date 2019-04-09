import React from 'react';

const Daily = (props) => {

    return (

        <div>
            <strong>Daily Forecast:</strong>
            <br/>
            <strong>Summary:</strong> {props.summary}
            <br/>
            <strong>Tomorrow:</strong> {props.tomorrow}
            <br/>
            <strong>Day After:</strong> {props.dayAfter}
            {/* Find way to autopopulate days */}
        </div>

    )
}

export default Daily;