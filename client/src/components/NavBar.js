import React, {Component} from 'react';
import {
  Navbar,
  Nav,
  NavItem,
  NavbarToggler,
  Collapse,
  NavLink,
  NavbarBrand
} from 'reactstrap';

class NavBar extends Component {
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
              <NavLink href="/signup">
                signup
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>)
  }
}

export default NavBar;
