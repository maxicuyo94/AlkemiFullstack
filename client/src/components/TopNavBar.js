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
      <Navbar className="container-fluid" color="$blue-800" light expand="md">
        <NavbarBrand className="fw-bold" href="/">BalanceBook</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} color="primary" navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/add/">Add Transaction</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/list/none">List Transaction</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Type
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <NavLink href="/list/inflow">inflow</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="/list/outflow">outflow</NavLink>
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
