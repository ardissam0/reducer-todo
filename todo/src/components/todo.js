import React from 'react';

export function Todo(props) {
    return (
        <div
         className={`Todo${props.item.completed ? ' completed' : ''}`}
            onClick={(event) => {
                event.preventDefault()
                props.handleCompleted(props.item.id)
            }}> <p>{props.item.todo}</p>
        </div>

    )
}