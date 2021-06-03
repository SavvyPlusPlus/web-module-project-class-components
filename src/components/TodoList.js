import React from 'react';
import Todo from './Todo';
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

const TodoList = props => {
    return (
        <>
        <div className="todo-list" >
                    {props.todos.map(task => (
                        <Todo key={task.id} task={task} toggleCompleted={props.toggleCompleted} />
                    ))}
                    <button className="button" onClick={props.clearCompleted}>
                        Clear Completed
                    </button>
        </div>
    
        </>
    )

}

export default TodoList;