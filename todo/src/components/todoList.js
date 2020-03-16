import React from 'react';
import {Todo } from './todo';

export function TodoList(props) {
    return (
        <div>
            {props.state.map((item) => {
                return <Todo item={item} key={item.id} handleCompleted={props.handleCompleted} />
            })}
        </div>
    )
}