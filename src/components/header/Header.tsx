import React, { useState } from 'react';
import {
  Container,
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavLink,
  NavbarText,
} from 'reactstrap';

import logo from '../../images/logo.svg';
import { CustomButton } from '../button/CustomButton';
import { StyledNavItem } from './Header.styles';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Container fluid>
      <Container>
        <Navbar color="white" light expand="md">
          <NavbarBrand href="/">
            <img src={logo} alt="logo" />
          </NavbarBrand>
          <button
            aria-label="Toggle navigation"
            type="button"
            className="navbar-toggler"
          >
            <input
              type="checkbox"
              className="navbar-toggler-checkbox"
              id="navi-toggle"
            />
            <label htmlFor="navi-toggle" onClick={toggle}>
              <span className="navbar-toggler-icon"></span>
            </label>
          </button>
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto ml-auto" navbar>
              <StyledNavItem>
                <NavLink href="/components/">Home</NavLink>
              </StyledNavItem>
              <StyledNavItem>
                <NavLink href="/components/">About</NavLink>
              </StyledNavItem>
              <StyledNavItem>
                <NavLink href="/components/">Contact</NavLink>
              </StyledNavItem>
              <StyledNavItem>
                <NavLink href="/components/">Blog</NavLink>
              </StyledNavItem>
              <StyledNavItem>
                <NavLink href="/components/">Careers</NavLink>
              </StyledNavItem>
            </Nav>
            <NavbarText>
              <CustomButton>Request Invite</CustomButton>
            </NavbarText>
          </Collapse>
        </Navbar>
      </Container>
    </Container>
  );
};

export { Header };
