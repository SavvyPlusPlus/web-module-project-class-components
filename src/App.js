import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './components/Todo.css';

const todos = [
  {
    task: 'Organize Storage',
    id: Math.random(),
    completed: false
  },
  {
    task: 'Clear Cache',
    id: Math.random(),
    completed: false
  },
  {
    task: 'Design App',
    id: Math.random(),
    completed: false
  },
  {
    task: 'Draw Illustration',
    id: Math.random(),
    completed: false
  },
  {
    task: 'Clean Area',
    id: Math.random(),
    completed: false
  },
  {
    task: 'Rinse Repeat',
    id: Math.random(),
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor() {
    super();
    this.state = {
      todos: todos
    }
  }

  toggleCompleted = (taskId) => {
    console.log(taskId)
    const completedTask = this.state.todos.map(task => {
      //toggle todo's completed flag from false to true
      if (task.id === taskId) {
        return {
          ...task,
          completed: !task.completed
        }
      }
      return task;
    });
    console.log("Completed Task", completedTask);
    this.setState({
      ...this.state,
      todos: completedTask
    });
  }

  //Adding a Task to form by way of props
  addTask = (taskName) => {
    console.log("adding task", taskName);
    const newTask = {
      task: taskName,
      id: Math.random(),
      completed: false
    };
    //Preventative measure with spread operator
    this.setState({
      ...this.state,
      todos: [
        ...this.state.todos,
        newTask
      ]
    })
  };

  clearCompleted = () => {
    const clear = this.state.todos.filter(task => {
      if (!task.completed) {
        return task;
      }

    })
    this.setState(
      {
        ...this.state,
        todos: clear
      }
    )
  }

  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div >
          <h2 className="main">Welcome to your Todo App!</h2>

          <TodoForm addTask={this.addTask} /> 

          <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted} clearCompleted={this.clearCompleted} />

  
      </div>
    );
  }
}

export default App;