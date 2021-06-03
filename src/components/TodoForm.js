import React from 'react';


class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            newTask: ''
        }
    }


    //onChange Handler
    handleChanges = e => {
        // update state with each keystroke
        this.setState({
            ...this.state,
            newTask: e.target.value
        })
    };

    //submit Handler
    handleSubmit = e => {
        e.preventDefault();
        this.props.addTask(this.state.newTask);
    }

    //remove an item


    render() {
        return (
            <div className="form-container">
                <form >
                    <input type="text" name="task" onChange={this.handleChanges} value={this.state.newTask} />
                    <button onClick={this.handleSubmit}> Add Todo </button>
                    
                </form>

            </div>


        );
    }
}

export default TodoForm;