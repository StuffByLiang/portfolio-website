import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"
import Scrollchor from 'react-scrollchor'

import {Navbar, Nav, Container} from 'react-bootstrap'

const Header = ({ siteTitle }) => {
  let isHomeScreen = typeof window !== 'undefined' && (window.location.pathname === "/" || window.location.pathname === "");
  return (
  <Navbar expand="lg" className={isHomeScreen ? "bg-light" : ""}>
    <Container>
      <Navbar.Brand><Link to="/">Liang Liu</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="justify-content-end w-100">
          {isHomeScreen ? [
            <Nav.Item><Scrollchor to="#experience">Experience</Scrollchor></Nav.Item>,
            <Nav.Item><Scrollchor to="#projects">Projects</Scrollchor></Nav.Item>,
            <Nav.Item><Scrollchor to="#contact">Contact</Scrollchor></Nav.Item>,
            <Nav.Item><Link to="/posts">All Posts</Link></Nav.Item>,
            <Nav.Item><a href="/resume.pdf" target="_blank">Resume</a></Nav.Item>
          ] : [
            <Nav.Item><Link to="/#experience">Experience</Link></Nav.Item>,
            <Nav.Item><Link to="/#projects">Projects</Link></Nav.Item>,
            <Nav.Item><Link to="/#contact">Contact</Link></Nav.Item>,
            <Nav.Item><Link to="/posts">All Posts</Link></Nav.Item>,
            <Nav.Item><a href="/resume.pdf" target="_blank">Resume</a></Nav.Item>
          ]}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
