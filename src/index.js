import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from'./app';
import './index.css';


class ToDO extends Component {
  state = {  }
  render() { 
    return ( 'Hello World' );
  }
}


ReactDOM.render(<App/>, document.getElementById('root') );
export default ToDO;