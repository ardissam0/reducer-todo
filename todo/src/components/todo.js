import React from 'react';

export function Todo(rops) {
    return (
        <div>
            <h2 className={PaymentResponse.item.completed ? 'complete' : ''}
            onclick={(event) => {
                event.preventDefault()
                PaymentResponse.handleCompleted(props.item.id)
            }}> {props.item.todo}</h2>
        </div>

    );
};