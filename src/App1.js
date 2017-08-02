import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import AddTodo from './component/AddTodo';


class App extends Component {

  constructor(props) {
    super(props);
    
  }
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <AddTodo ></AddTodo>
        
      </div>
    );
  }




}

export default App;
