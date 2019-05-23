import React, {Component} from 'react';

class todo extends Component {
    constructor(props) {
        super(props)

        this.state={
            todos: [],
            todo: {
                title: '',
            }
        };
        this.toDoChange = this.toDoChange.bind(this);
        this.toDoAdd = this.toDoAdd.bind(this);
    }

    toDoChange(e) {
        this.setState({
            todo: {
                title: e.target.value,
            }
        });
    }

    toDoAdd() {
        this.state.todos.push(this.state.todo);
        this.setState({
            todos: this.state.todos,
            todo: {
                title: '',
            }
        });
    }

    render() {
      return (
        <div>
            <h1>To Do List</h1>
            <input type="text"
            value={this.state.todo.title}
            onChange={this.toDoChange}
            />
            <button onClick={this.toDoAdd}>ADD</button>
        </div>
      );
    }
  }
  
  export default todo;