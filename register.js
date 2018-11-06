import React, { Component } from 'react';
import NavbarFeatures from './navbar';
import FormsPage from './content_register';
import FooterPage from './footer';

class Register extends Component {
  render() {
    return (
      <div>
        <NavbarFeatures/>
        <FormsPage/>
        <FooterPage/>
      </div>
    );
  }
}

export default Register;
