import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
function MainApp(){
  return  (
  <>
  <Router>
     <App />
  </Router>
  
  </>
  );
}


ReactDOM.render( <MainApp/>, document.getElementById('root'));


