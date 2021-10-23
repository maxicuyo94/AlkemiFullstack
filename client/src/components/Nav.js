import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const TopNavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="container-fluid" color="dark" expand="md">
        <NavbarBrand href="/">BalanceBook</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/add/">Add Operation</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/list/none">List Operation</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Type
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <NavLink href="/list/entry">Entry</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="/list/egress">Egress</NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink href="https://github.com/maxicuyo94/AlkemiFullstack">
                GitHub
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default TopNavBar;
