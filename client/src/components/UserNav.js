import React, {Component} from 'react';
// import Auth from '../modules/Auth';
import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
  NavbarToggler,
  Collapse,
  DropdownToggle,
  UncontrolledDropdown,
  DropdownItem,
  DropdownMenu,
  NavbarBrand,
  Form,
  Input,
  Button,
  Col
} from 'reactstrap';

class User extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    }
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }


  render() {
    return (<div>
      <Navbar expand="md" dark="dark" style={{
          background: "#1d1145",
          color: "#1d1145"
        }}>
        <NavbarBrand href="/">
          Tuteur
        </NavbarBrand>

        <NavbarToggler onClick={this.toggle}/>
        <Collapse isOpen={this.state.isOpen} navbar="navbar">

          <Nav className="ml-auto" navbar="navbar">
            <NavItem>
              <NavLink href="/dashboard">
                dashboard
              </NavLink>
            </NavItem>
          </Nav>

          <Nav className="mr-auto" navbar="navbar">
            <UncontrolledDropdown nav="nav" inNavbar="inNavbar">
              <DropdownToggle nav="nav" caret="caret">
                more
              </DropdownToggle>

              <DropdownMenu >
                <DropdownItem>
                  Account
                </DropdownItem>
                <DropdownItem divider="divider"/>
                <DropdownItem>
                  <div style={{
                      color: "black"
                    }}>
                    Settings</div>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>)
  }

}

export default User;
