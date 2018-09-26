import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem,
  NavbarToggler, Collapse, NavLink, DropdownToggle,
  UncontrolledDropdown, DropdownItem, DropdownMenu, NavbarBrand } from 'reactstrap';


class NavBar extends Component {
  constructor(props){
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

  render(){
    return(
      <div>
  <Navbar color="faded" light expand="md">
      {/* Brandname */}
         <NavbarBrand href="/">
          Tuteur
      </NavbarBrand>
         {/* Add toggler to auto-collapse */}
    <NavbarToggler onClick={this.toggle} />
    <Collapse isOpen={this.state.isOpen} navbar>

        {/*Pull left */}
      <Nav className="ml-auto" navbar>
          <NavItem>
              <NavLink href="/signup">
                  signup
              </NavLink>
          </NavItem>
          <NavItem>
              <NavLink href="/login">
                  login
              </NavLink>
          </NavItem>
          <NavItem>
              <NavLink href="/clients">
                  clients
              </NavLink>
          </NavItem>
      </Nav>

      {/* Pull right */}
      <Nav className="mr-auto" navbar>
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            Bob
          </DropdownToggle>

          <DropdownMenu >
            <DropdownItem>
              Account
            </DropdownItem>
            <DropdownItem>
              Settings
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem>
              <NavLink href="/" onClick={this.handleLogout}>
              Logout
              </NavLink>
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Nav>
    </Collapse>
  </Navbar>
</div>
    )
  }
}

export default NavBar;
