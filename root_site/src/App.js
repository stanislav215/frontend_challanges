import React, { Component } from 'react';
import Site from './Site'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Front end challanges</h1>

      <main>
        <div className="sites">
          <Site img="./dec2bin.png" href="https://loving-swanson-66f3e0.netlify.app" />
          <Site img="./passgen.png" href="https://musing-ptolemy-15169c.netlify.app/"/>
          <Site img="./coming-soon.png" href="#"/>
          <Site img="./coming-soon.png" href="#"/>
          <Site img="./coming-soon.png" href="#"/>
          <Site img="./coming-soon.png" href="#"/>
        </div>
      </main>
      </div>

        

    );
  }
}

export default App;
