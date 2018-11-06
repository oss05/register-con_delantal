import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/navbar.css'

class NavbarFeatures extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
        };
    this.onClick = this.onClick.bind(this);
    }

    onClick(){
        this.setState({
            collapse: !this.state.collapse,
        });
    }
    render() {
        return (
            <nav>
                <Router>
                    <Navbar className='nav' color="red accent-4" dark expand="md" scrolling>
                        <NavbarBrand href="/">
                            <strong className='titulo'>Con Delantal</strong>
                            <img className='imagen_navbar' src="https://png.icons8.com/ios/1600/chef-hat.png" height="30"/>
                        </NavbarBrand>
                        { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                        <Collapse isOpen = { this.state.collapse } navbar>
                            <NavbarNav right>
                                <NavItem>
                                    <NavLink className='icon_navbar' to="/login"><i class="fas fa-sign-in-alt"></i>Login</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='icon_navbar2' to="/register"><i class="fas fa-user-plus"></i>Register</NavLink>
                                </NavItem>
                            </NavbarNav>
                        </Collapse>
                    </Navbar>
                </Router>
            </nav>
           
        );
    }
}

export default NavbarFeatures;