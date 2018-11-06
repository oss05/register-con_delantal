import React, { Component } from 'react';
import Register from './register';
import Login from './login';

class Index extends Component {
    render() { 
        return (
            <div>
            <Login/>
            <Register/>
            </div>
          );
    }
}
 
export default Index;