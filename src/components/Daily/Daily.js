import React from 'react';

const Daily = (props) => {

    return (

        <div>
            <strong>Daily Forecast:</strong>
            <br/>
            <strong>Summary:</strong> {props.summary}
            <br/>
            <div>
                <strong>Tomorrow:</strong> {props.tomorrow}
            </div>
            
            <br/>
            <div>
                <strong>Day After:</strong> {props.dayAfter}
            </div>
            
            {/* Find way to autopopulate days */}
        </div>

    )
}

export default Daily;