import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import List from './list';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      todos: [],
      todo: {
        title: '',
      }
    };
    this.toDoChange = this.toDoChange.bind(this);
    this.toDoAdd = this.toDoAdd.bind(this);
    this.toDoRemove = this.toDoRemove.bind(this);
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

  toDoRemove(target) {
    for( var i = 0; i < this.state.todos.length; i++){ 
      if ( this.state.todos[i] === target) {
        this.state.todos.splice(i, 1);
        this.setState({
          todos: this.state.todos,
        });
      }
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            <h1>To Do List</h1>
            <input type="text"
              value={this.state.todo.title}
              onChange={this.toDoChange}
            />
            <button onClick={this.toDoAdd}>ADD</button>
            <br />
            <ul>
              {this.state.todos.map((item, i) =>
                <li key={i}>{item.title}
                  <button  onClick={ () => this.toDoRemove(item)}>remove</button>
                </li>
              )}
            </ul>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
