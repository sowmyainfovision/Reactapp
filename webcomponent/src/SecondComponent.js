import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Steps from './Steps';
import Sleep from './Sleep';
import Heartbeat from './Heartbeat';


class SecondComponent extends Component {
    render() 
    {
      return (
          <div>     
        <header className="App-header">
                     <h2><b>Hi, jaya sai</b></h2>
        
        <br></br>
          <button className="primary">Today</button>&nbsp;&nbsp;
           <button className="primary">Weekly</button>&nbsp;&nbsp;
           <button className="primary">Monthly</button>&nbsp;&nbsp;

           
           <br></br>
           <br></br>
            <b className="dateperiod">Oct 2 2018</b>
           </header>
                
        <br></br>
        <br></br>
        <br></br>
        <div>
           <div>
            <Steps />
            </div>
            <br></br>
            <br></br>
            <div>
            <Sleep />
            </div>
            <br></br>
            <br></br>
            <div>
            <Heartbeat />
            </div>
        </div>
        <br></br>
            <br></br>
            <br></br>
            <br></br>
         <footer>
        <img className="App-logo" src="https://samsunggearup.com/img/samsung-logo_black.png" alt="logo" /> 
        </footer>
        <br></br>
            <br></br>
            <br></br>
            
      </div> 
       
             );
    }
} 

export default SecondComponent;