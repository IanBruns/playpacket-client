import React from 'react';

export default function ErrorHandler(props) {
    return (
        <React.Fragment>
            <h3>We're sorry, there's been an error!</h3>
            <p>{props.message}</p>
        </React.Fragment>
    )
}