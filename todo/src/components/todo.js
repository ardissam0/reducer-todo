import React from 'react';

export function Todo(props) {
    return (
        <div>
            <h2 className={props.item.completed ? 'complete' : ''}
            onclick={(event) => {
                event.preventDefault()
                props.handleCompleted(props.item.id)
            }}> {props.item.todo}</h2>
        </div>

    )
}