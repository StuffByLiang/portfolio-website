import PropTypes from "prop-types"
import React from "react"

import Scrollchor from 'react-scrollchor';

import {Navbar, Nav, Container} from 'react-bootstrap'

const Header = ({ siteTitle }) => (
  <Navbar expand="lg" className="bg-light">
    <Container>
      {/*<Navbar.Brand href="#home">Liang Liu</Navbar.Brand>*/}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="justify-content-end w-100">
          {typeof window !== 'undefined' && window.location.pathname === "/" ? [
            <Nav.Item><Scrollchor to="#experience">Experience</Scrollchor></Nav.Item>,
            <Nav.Item><Scrollchor to="#projects">Projects</Scrollchor></Nav.Item>,
            <Nav.Item><Scrollchor to="#contact">Contact</Scrollchor></Nav.Item>
          ] : (
            <Nav.Item><a href="/">Home</a></Nav.Item>
          )}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
