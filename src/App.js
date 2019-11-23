import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      monsters:  [
        {
          name: 'Frankenstain',
          id: 'dkd1'
        },
        {
          name: 'Dracula',
          id: 'dkd15'
        },
        {
          name: 'Zombie',
          id: 'dkd1kd'
        }
      ]
    };
  }

  componentDidMount( ) {
    fetch ('https://jsonplaceholder.typicode.com/users').then(response => 
    console.log(response)
    );
  }

  render(){
    return (
      <div className="App">
        {this.state.monsters.map( monster => (
          <h1 key={monster.id}> {monster.name} </h1>
        ))}
        <button>click me</button>
      </div>
    );
  }
}

export default App;
