import React, { Component } from 'react';
import Firstcomponent from './Firstcomponent';
import SecondComponent from './SecondComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
            <div className="backgroundcolor">
             <div className="Firstdiv">
        <Firstcomponent />
      </div>
      
     <div className="Thirddiv">
     <SecondComponent />
      </div>
      
      </div> 
                    
    );
  }
}

export default App;

